const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { sql, transaksjon, lukk } = require("./db");
const { lagHash, sjekkPassord } = require("./passord");
const { erInne, oppsummer } = require("./framdrift");

const rot = path.join(__dirname, "..");
const GRENSE = 8;
const VINDU = "15 minutes";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};
const TILLATT = new Set(Object.keys(MIME));
const SKJULT = new Set(["server", "scripts", "node_modules", "migrations", "tester"]);

let dummyLovet;

function loggFeil(error) {
  let melding = error && error.stack ? error.stack : String(error);
  const url = process.env.DATABASE_URL || "";
  if (url) melding = melding.split(url).join("[database]");
  melding = melding.replace(/postgres(?:ql)?:\/\/\S+/gi, "[database]");
  console.error(melding);
}

function sesjonSekunder() {
  const n = Number(process.env.MA1PY_SESJON_SEKUNDER);
  if (Number.isFinite(n) && n >= 1 && n <= 60 * 60 * 24 * 30) return Math.floor(n);
  return 12 * 60 * 60;
}

function lekker(verdi, dybde) {
  if (!verdi || typeof verdi !== "object" || dybde > 6) return false;
  return Object.keys(verdi).some((nokkel) => {
    if (/^(passord|password|passord_hash|password_hash|token|id_hash)$/i.test(nokkel)) return true;
    return lekker(verdi[nokkel], dybde + 1);
  });
}

function svar(res, status, objekt) {
  if (lekker(objekt, 0)) {
    loggFeil(new Error("svar ble stoppet fordi det inneholdt et hemmelig felt"));
    objekt = { feil: "Noe gikk galt. Prøv igjen." };
    status = 500;
  }
  const tekst = JSON.stringify(objekt);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "content-length": Buffer.byteLength(tekst)
  });
  res.end(tekst);
}

function htmlSide(res, status, tittel, tekst) {
  const kropp = "<!doctype html><html lang=\"nb\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>"
    + tittel + "</title><link rel=\"stylesheet\" href=\"/assets/css/bok.css\"></head><body><main class=\"innhold\"><h1>"
    + tittel + "</h1><p>" + tekst + "</p><p><a class=\"knapp\" href=\"/index.html\">Til boka</a></p></main></body></html>";
  res.writeHead(status, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  });
  res.end(kropp);
}

function omdiriger(res, sted) {
  res.writeHead(302, {
    Location: sted,
    "cache-control": "no-store",
    "content-type": "text/plain; charset=utf-8"
  });
  res.end("Logg inn");
}

function lesCookie(req, navn) {
  const hode = req.headers.cookie || "";
  const deler = hode.split(";");
  for (let i = 0; i < deler.length; i++) {
    const lik = deler[i].indexOf("=");
    if (lik === -1) continue;
    if (deler[i].slice(0, lik).trim() === navn) {
      try { return decodeURIComponent(deler[i].slice(lik + 1).trim()); }
      catch (e) { return ""; }
    }
  }
  return "";
}

function cookieErSikker(req) {
  return !!(req.socket && req.socket.encrypted) || req.headers["x-forwarded-proto"] === "https";
}

function settCookie(res, req, token, sekunder) {
  const deler = [
    "ma1py_sesjon=" + encodeURIComponent(token),
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    "Max-Age=" + sekunder
  ];
  if (cookieErSikker(req)) deler.push("Secure");
  res.setHeader("Set-Cookie", deler.join("; "));
}

function slettCookie(res, req) {
  const deler = ["ma1py_sesjon=", "HttpOnly", "Path=/", "SameSite=Lax", "Max-Age=0"];
  if (cookieErSikker(req)) deler.push("Secure");
  res.setHeader("Set-Cookie", deler.join("; "));
}

function lesJson(req, maks) {
  return new Promise((resolve, reject) => {
    const biter = [];
    let storrelse = 0;
    let ferdig = false;
    function feil(status) {
      if (ferdig) return;
      ferdig = true;
      const error = new Error("ugyldig");
      error.status = status;
      reject(error);
      req.destroy();
    }
    req.on("data", (bit) => {
      storrelse += bit.length;
      if (storrelse > maks) feil(413);
      else biter.push(bit);
    });
    req.on("end", () => {
      if (ferdig) return;
      ferdig = true;
      if (storrelse === 0) return resolve({});
      try { resolve(JSON.parse(Buffer.concat(biter).toString("utf8"))); }
      catch (e) { const error = new Error("json"); error.status = 400; reject(error); }
    });
    req.on("error", (error) => {
      if (ferdig) return;
      ferdig = true;
      reject(error);
    });
  });
}

function sammeOpphav(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  let url;
  try { url = new URL(origin); } catch (e) { return false; }
  return !!req.headers.host && url.host === req.headers.host;
}

function rentNavn(verdi) {
  if (typeof verdi !== "string") return null;
  const tekst = verdi.replace(/\s+/g, " ").trim();
  if (tekst.length < 1 || tekst.length > 80) return null;
  if (/[<>]/.test(tekst) || /[\u0000-\u001f]/.test(tekst)) return null;
  return tekst;
}

function rentBrukernavn(verdi) {
  if (typeof verdi !== "string") return null;
  const tekst = verdi.trim().toLowerCase();
  if (!/^[\p{L}\p{N}_.-]{2,40}$/u.test(tekst)) return null;
  return tekst;
}

function rentPassord(verdi) {
  if (typeof verdi !== "string") return null;
  if (verdi.length < 8 || verdi.length > 200) return null;
  if (/[\u0000-\u001f]/.test(verdi)) return null;
  return verdi;
}

function rentSti(verdi) {
  if (typeof verdi !== "string") return null;
  if (verdi.length < 1 || verdi.length > 500) return null;
  if (!verdi.startsWith("/") || verdi.startsWith("//") || verdi.includes("\\") || verdi.includes("..")) return null;
  if (/[\u0000-\u001f]/.test(verdi)) return null;
  return verdi;
}

function rentTittel(verdi) {
  if (typeof verdi !== "string") return null;
  const tekst = verdi.replace(/[<>]/g, "").replace(/[\u0000-\u001f]/g, "").replace(/\s+/g, " ").trim();
  if (!tekst) return "Uten tittel";
  return tekst.slice(0, 200);
}

function rensFramdrift(verdi) {
  if (!verdi || typeof verdi !== "object" || Array.isArray(verdi)) return null;
  const ut = Object.create(null);
  const nokler = Object.keys(verdi);
  let storrelse = 0;
  for (let i = 0; i < nokler.length; i++) {
    const nokkel = nokler[i];
    if (nokkel === "__proto__" || nokkel === "constructor" || nokkel === "prototype") continue;
    if (!nokkel.startsWith("ma1py:") || nokkel.length > 300) return null;
    const lagret = verdi[nokkel];
    if (typeof lagret !== "string" || lagret.length > 100000) return null;
    storrelse += nokkel.length + lagret.length;
    if (i >= 2000 || storrelse > 400000) return null;
    ut[nokkel] = lagret;
  }
  return ut;
}

function klientIp(req) {
  return String((req.socket && req.socket.remoteAddress) || "").slice(0, 80);
}

async function forMangeForsok(nokler) {
  await sql("delete from innlogging_forsok where tidspunkt < now() - interval '1 day'");
  for (let i = 0; i < nokler.length; i++) {
    const rader = await sql(
      "select count(*)::int as n from innlogging_forsok where nokkel = $1 and tidspunkt > now() - $2::interval",
      [nokler[i], VINDU]
    );
    if (Number(rader[0] && rader[0].n) >= GRENSE) return true;
  }
  return false;
}

async function noterFeil(nokkel) {
  await sql("insert into innlogging_forsok (nokkel) values ($1)", [nokkel]);
}

async function nullstillFeil(nokler) {
  await sql("delete from innlogging_forsok where nokkel = $1 or nokkel = $2", [nokler[0], nokler[1] || nokler[0]]);
}

function dummyHash() {
  dummyLovet ??= lagHash(crypto.randomBytes(24).toString("hex"));
  return dummyLovet;
}

async function brukerFraForesporsel(req) {
  const token = lesCookie(req, "ma1py_sesjon");
  if (!token || token.length < 20 || token.length > 200) return null;
  const idHash = crypto.createHash("sha256").update(token).digest("hex");
  const rader = await sql(
    "select b.id, b.brukernavn, b.navn, b.rolle, b.aktiv from sesjoner s join brukere b on b.id = s.bruker_id where s.id_hash = $1 and s.utloper > now()",
    [idHash]
  );
  const bruker = rader[0];
  if (!bruker) return null;
  if (bruker.aktiv !== true) {
    await sql("delete from sesjoner where id_hash = $1", [idHash]);
    return null;
  }
  return { id: bruker.id, brukernavn: bruker.brukernavn, navn: bruker.navn, rolle: bruker.rolle };
}

async function lagSesjon(res, req, brukerId) {
  const token = crypto.randomBytes(32).toString("base64url");
  const idHash = crypto.createHash("sha256").update(token).digest("hex");
  const sekunder = sesjonSekunder();
  await sql(
    "insert into sesjoner (id_hash, bruker_id, utloper) values ($1, $2, now() + $3::interval)",
    [idHash, brukerId, sekunder + " seconds"]
  );
  settCookie(res, req, token, sekunder);
}

function offentligBruker(bruker) {
  return { id: bruker.id, navn: bruker.navn, brukernavn: bruker.brukernavn, rolle: bruker.rolle };
}

async function krevBruker(req, res) {
  const bruker = await brukerFraForesporsel(req);
  if (!bruker) {
    svar(res, 401, { feil: "Du må logge inn." });
    return null;
  }
  return bruker;
}

async function krevAdmin(req, res) {
  const bruker = await krevBruker(req, res);
  if (!bruker) return null;
  if (bruker.rolle !== "admin") {
    svar(res, 403, { feil: "Denne siden er bare for læreren." });
    return null;
  }
  return bruker;
}

function parseData(data) {
  let kilde = data;
  if (typeof kilde === "string") {
    try { kilde = JSON.parse(kilde); } catch (e) { return Object.create(null); }
  }
  if (!kilde || typeof kilde !== "object" || Array.isArray(kilde)) return Object.create(null);
  const ut = Object.create(null);
  Object.keys(kilde).forEach((nokkel) => {
    if (nokkel.startsWith("ma1py:") && typeof kilde[nokkel] === "string") ut[nokkel] = kilde[nokkel];
  });
  return ut;
}

function tilIso(verdi) {
  if (!verdi) return null;
  const tid = verdi instanceof Date ? verdi : new Date(verdi);
  return Number.isFinite(tid.getTime()) ? tid.toISOString() : null;
}

async function oversikt() {
  const rader = await sql(
    "select b.id, b.brukernavn, b.navn, b.aktiv, p.sti, p.tittel, p.sett, f.data from brukere b left join puls p on p.bruker_id = b.id left join framdrift f on f.bruker_id = b.id where b.rolle = 'elev' order by b.navn",
    []
  );
  const naa = Date.now();
  return rader.map((rad) => {
    const sett = tilIso(rad.sett);
    return {
      id: rad.id,
      navn: rad.navn,
      brukernavn: rad.brukernavn,
      aktiv: rad.aktiv === true,
      inne: rad.aktiv === true && erInne(sett, naa),
      sti: rad.sti || "",
      tittel: rad.tittel || "",
      sett: sett,
      framdrift: oppsummer(parseData(rad.data))
    };
  }).sort((a, b) => a.navn.localeCompare(b.navn, "nb"));
}

async function postOppsett(req, res) {
  const kropp = await lesJson(req, 4000);
  const navn = rentNavn(kropp.navn);
  const brukernavn = rentBrukernavn(kropp.brukernavn);
  const passord = rentPassord(kropp.passord);
  if (!navn || !brukernavn || !passord) {
    svar(res, 400, { feil: "Skriv navn, brukernavn og et passord på minst 8 tegn." });
    return;
  }
  const ipNokkel = "ip:" + klientIp(req);
  if (await forMangeForsok([ipNokkel])) {
    svar(res, 429, { feil: "For mange forsøk. Vent et kvarter og prøv igjen." });
    return;
  }
  const hash = await lagHash(passord);
  const opprettet = await transaksjon(async (q) => {
    await q.query("select pg_advisory_xact_lock(7272742)");
    const antall = await q.query("select count(*)::int as n from brukere");
    if (Number(antall[0] && antall[0].n) > 0) return null;
    const rader = await q.query(
      "insert into brukere (id, brukernavn, navn, passord_hash, rolle) values ($1, $2, $3, $4, 'admin') returning id, brukernavn, navn, rolle",
      [crypto.randomUUID(), brukernavn, navn, hash]
    );
    return rader[0];
  });
  if (!opprettet) {
    svar(res, 403, { feil: "Lærerkontoen er allerede opprettet. Logg inn." });
    return;
  }
  await lagSesjon(res, req, opprettet.id);
  svar(res, 200, offentligBruker(opprettet));
}

async function postInnlogging(req, res) {
  const kropp = await lesJson(req, 4000);
  const brukernavn = rentBrukernavn(kropp.brukernavn);
  const passord = typeof kropp.passord === "string" ? kropp.passord : "";
  const ipNokkel = "ip:" + klientIp(req);
  const navnNokkel = brukernavn ? "navn:" + brukernavn : "";
  const nokler = navnNokkel ? [ipNokkel, navnNokkel] : [ipNokkel];
  if (await forMangeForsok(nokler)) {
    svar(res, 429, { feil: "For mange forsøk. Vent et kvarter og prøv igjen." });
    return;
  }
  if (!brukernavn || !rentPassord(passord)) {
    await noterFeil(ipNokkel);
    svar(res, 401, { feil: "Feil brukernavn eller passord." });
    return;
  }
  const rader = await sql(
    "select id, brukernavn, navn, rolle, aktiv, passord_hash from brukere where brukernavn = $1",
    [brukernavn]
  );
  const bruker = rader[0];
  const hash = bruker ? bruker.passord_hash : await dummyHash();
  const treff = await sjekkPassord(passord, hash);
  if (!bruker || !treff) {
    await noterFeil(ipNokkel);
    await noterFeil(navnNokkel);
    svar(res, 401, { feil: "Feil brukernavn eller passord." });
    return;
  }
  if (bruker.aktiv !== true) {
    svar(res, 403, { feil: "Kontoen er slått av. Spør læreren." });
    return;
  }
  await nullstillFeil(nokler);
  await lagSesjon(res, req, bruker.id);
  svar(res, 200, { id: bruker.id, navn: bruker.navn, brukernavn: bruker.brukernavn, rolle: bruker.rolle });
}

async function postPuls(req, res, bruker) {
  if (bruker.rolle !== "elev") {
    res.writeHead(204, { "cache-control": "no-store" });
    res.end();
    return;
  }
  const kropp = await lesJson(req, 450000);
  const sti = rentSti(kropp.sti);
  const tittel = rentTittel(typeof kropp.tittel === "string" ? kropp.tittel : "");
  if (!sti) {
    svar(res, 400, { feil: "Siden mangler sti eller tittel." });
    return;
  }
  await sql(
    "insert into puls (bruker_id, sti, tittel, sett) values ($1, $2, $3, now()) on conflict (bruker_id) do update set sti = excluded.sti, tittel = excluded.tittel, sett = now()",
    [bruker.id, sti, tittel]
  );
  if (kropp.framdrift !== undefined) {
    const data = rensFramdrift(kropp.framdrift);
    if (!data) {
      svar(res, 400, { feil: "Framdriften kunne ikke lagres." });
      return;
    }
    await sql(
      "insert into framdrift (bruker_id, data, oppdatert) values ($1, $2::jsonb, now()) on conflict (bruker_id) do update set data = excluded.data, oppdatert = now()",
      [bruker.id, JSON.stringify(data)]
    );
  }
  res.writeHead(204, { "cache-control": "no-store" });
  res.end();
}

async function postElev(req, res) {
  const kropp = await lesJson(req, 4000);
  const navn = rentNavn(kropp.navn);
  const brukernavn = rentBrukernavn(kropp.brukernavn);
  const passord = rentPassord(kropp.passord);
  if (!navn || !brukernavn || !passord) {
    svar(res, 400, { feil: "Skriv navn, brukernavn og et passord på minst 8 tegn." });
    return;
  }
  const hash = await lagHash(passord);
  try {
    const rader = await sql(
      "insert into brukere (id, brukernavn, navn, passord_hash, rolle) values ($1, $2, $3, $4, 'elev') returning id, brukernavn, navn, rolle",
      [crypto.randomUUID(), brukernavn, navn, hash]
    );
    svar(res, 201, offentligBruker(rader[0]));
  } catch (error) {
    if (error && error.code === "23505") {
      svar(res, 409, { feil: "Brukernavnet er opptatt." });
      return;
    }
    throw error;
  }
}

async function endreElev(req, res, id) {
  const kropp = await lesJson(req, 4000);
  const harNavn = Object.prototype.hasOwnProperty.call(kropp, "navn");
  const harAktiv = Object.prototype.hasOwnProperty.call(kropp, "aktiv");
  if (!harNavn && !harAktiv) {
    svar(res, 400, { feil: "Ingen endring å lagre." });
    return;
  }
  const navn = harNavn ? rentNavn(kropp.navn) : null;
  if (harNavn && !navn) {
    svar(res, 400, { feil: "Navnet må være mellom 1 og 80 tegn." });
    return;
  }
  if (harAktiv && typeof kropp.aktiv !== "boolean") {
    svar(res, 400, { feil: "Aktiv må være ja eller nei." });
    return;
  }
  let rader = [];
  if (harNavn) {
    rader = await sql(
      "update brukere set navn = $1 where id = $2 and rolle = 'elev' returning id, brukernavn, navn, aktiv",
      [navn, id]
    );
    if (!rader.length) {
      svar(res, 404, { feil: "Fant ikke eleven." });
      return;
    }
  }
  if (harAktiv) {
    rader = await sql(
      "update brukere set aktiv = $1 where id = $2 and rolle = 'elev' returning id, brukernavn, navn, aktiv",
      [kropp.aktiv, id]
    );
    if (!rader.length) {
      svar(res, 404, { feil: "Fant ikke eleven." });
      return;
    }
    if (kropp.aktiv === false) await sql("delete from sesjoner where bruker_id = $1", [id]);
  }
  const rad = rader[0];
  svar(res, 200, { id: rad.id, navn: rad.navn, brukernavn: rad.brukernavn, aktiv: rad.aktiv === true });
}

async function nyttPassord(req, res, id) {
  const kropp = await lesJson(req, 4000);
  const passord = rentPassord(kropp.passord);
  if (!passord) {
    svar(res, 400, { feil: "Passordet må ha minst 8 tegn." });
    return;
  }
  const hash = await lagHash(passord);
  const rader = await sql(
    "update brukere set passord_hash = $1 where id = $2 and rolle = 'elev' returning id",
    [hash, id]
  );
  if (!rader.length) {
    svar(res, 404, { feil: "Fant ikke eleven." });
    return;
  }
  await sql("delete from sesjoner where bruker_id = $1", [id]);
  svar(res, 200, { ok: true });
}

function sikkerFil(pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); }
  catch (e) { return { feil: 400 }; }
  if (decoded.includes("\0") || decoded.includes("\\")) return { feil: 400 };
  const normal = path.posix.normalize(decoded);
  if (!normal.startsWith("/") || normal.split("/").includes("..")) return { feil: 400 };
  let kandidat = normal;
  if (kandidat.endsWith("/")) kandidat += "index.html";
  if (kandidat === "/") kandidat = "/index.html";
  const abs = path.resolve(rot, "." + kandidat);
  const rotMed = rot.endsWith(path.sep) ? rot : rot + path.sep;
  if (abs !== rot && !abs.startsWith(rotMed)) return { feil: 400 };
  const rel = path.relative(rot, abs);
  const deler = rel.split(path.sep);
  if (deler.some((del) => del.startsWith(".") || del === "package.json" || del === "package-lock.json" || del === "cursor-app.json")) return { feil: 404 };
  if (SKJULT.has(deler[0])) return { feil: 404 };
  const ext = path.extname(abs).toLowerCase();
  if (!TILLATT.has(ext)) return { feil: 404 };
  const iBoka = deler[0] === "kapitler" || deler[0] === "assets" || deler.length === 1;
  if (!iBoka) return { feil: 404 };
  const offentlig = kandidat === "/innlogging.html" || kandidat.startsWith("/assets/");
  const admin = kandidat === "/admin.html";
  return { abs: abs, offentlig: offentlig, admin: admin };
}

function sendFil(res, abs) {
  fs.readFile(abs, (error, data) => {
    if (error) {
      htmlSide(res, 404, "Fant ikke siden", "Siden finnes ikke i nettboka.");
      return;
    }
    const ext = path.extname(abs).toLowerCase();
    res.writeHead(200, {
      "content-type": MIME[ext] || "application/octet-stream",
      "cache-control": ext === ".html" ? "no-store" : "public, max-age=300",
      "x-content-type-options": "nosniff"
    });
    res.end(data);
  });
}

async function serveStatisk(req, res, pathname, search) {
  const fil = sikkerFil(pathname);
  if (fil.feil) {
    if (fil.feil === 400) svar(res, 400, { feil: "Ugyldig sti." });
    else htmlSide(res, 404, "Fant ikke siden", "Siden finnes ikke i nettboka.");
    return;
  }
  const bruker = fil.offentlig && !fil.admin ? null : await brukerFraForesporsel(req);
  if (!fil.offentlig) {
    if (!bruker) {
      omdiriger(res, "/innlogging.html?neste=" + encodeURIComponent(pathname + search));
      return;
    }
    if (fil.admin && bruker.rolle !== "admin") {
      htmlSide(res, 403, "Bare for læreren", "Elever kommer ikke inn på adminsiden.");
      return;
    }
  } else if (path.posix.normalize(pathname) === "/innlogging.html") {
    const innlogget = await brukerFraForesporsel(req);
    if (innlogget) {
      omdiriger(res, innlogget.rolle === "admin" ? "/admin.html" : "/index.html");
      return;
    }
  }
  if (!fs.existsSync(fil.abs) || !fs.statSync(fil.abs).isFile()) {
    htmlSide(res, 404, "Fant ikke siden", "Siden finnes ikke i nettboka.");
    return;
  }
  sendFil(res, fil.abs);
}

async function rute(req, res) {
  if (!req.url || req.url.length > 2000) {
    svar(res, 400, { feil: "Ugyldig forespørsel." });
    return;
  }
  const url = new URL(req.url, "http://127.0.0.1");
  const pathname = url.pathname;
  const metode = req.method || "GET";
  if (metode !== "GET" && metode !== "HEAD" && metode !== "POST" && metode !== "PATCH" && metode !== "DELETE") {
    svar(res, 405, { feil: "Metoden er ikke støttet." });
    return;
  }
  if (pathname.startsWith("/api/")) {
    if (metode !== "GET" && metode !== "HEAD" && !sammeOpphav(req)) {
      svar(res, 403, { feil: "Forespørselen ble avvist." });
      return;
    }
    if (metode === "GET" && pathname === "/api/tilstand") {
      const bruker = await brukerFraForesporsel(req);
      const antall = await sql("select count(*)::int as n from brukere");
      const svarKropp = { trengerOppsett: Number(antall[0] && antall[0].n) === 0, innlogget: false };
      if (bruker) Object.assign(svarKropp, { innlogget: true }, offentligBruker(bruker));
      svar(res, 200, svarKropp);
      return;
    }
    if (metode === "POST" && pathname === "/api/oppsett") return postOppsett(req, res);
    if (metode === "POST" && pathname === "/api/innlogging") return postInnlogging(req, res);
    if (metode === "POST" && pathname === "/api/utlogging") {
      const token = lesCookie(req, "ma1py_sesjon");
      if (token) {
        const idHash = crypto.createHash("sha256").update(token).digest("hex");
        await sql("delete from sesjoner where id_hash = $1", [idHash]);
      }
      slettCookie(res, req);
      svar(res, 200, { ok: true });
      return;
    }
    if (metode === "GET" && pathname === "/api/framdrift") {
      const bruker = await krevBruker(req, res);
      if (!bruker) return;
      const rader = await sql("select data from framdrift where bruker_id = $1", [bruker.id]);
      svar(res, 200, { framdrift: parseData(rader[0] && rader[0].data) });
      return;
    }
    if (metode === "POST" && pathname === "/api/puls") {
      const bruker = await krevBruker(req, res);
      if (!bruker) return;
      return postPuls(req, res, bruker);
    }
    if (pathname === "/api/admin/oversikt" && metode === "GET") {
      if (!await krevAdmin(req, res)) return;
      svar(res, 200, { elever: await oversikt() });
      return;
    }
    if (pathname === "/api/admin/elever" && metode === "POST") {
      if (!await krevAdmin(req, res)) return;
      return postElev(req, res);
    }
    const passordRute = pathname.match(/^\/api\/admin\/elever\/([0-9a-f-]{36})\/passord$/i);
    if (passordRute && metode === "POST") {
      if (!UUID.test(passordRute[1])) { svar(res, 404, { feil: "Fant ikke eleven." }); return; }
      if (!await krevAdmin(req, res)) return;
      return nyttPassord(req, res, passordRute[1]);
    }
    const elevRute = pathname.match(/^\/api\/admin\/elever\/([0-9a-f-]{36})$/i);
    if (elevRute && (metode === "PATCH" || metode === "DELETE")) {
      if (!UUID.test(elevRute[1])) { svar(res, 404, { feil: "Fant ikke eleven." }); return; }
      if (!await krevAdmin(req, res)) return;
      if (metode === "DELETE") {
        const rader = await sql("delete from brukere where id = $1 and rolle = 'elev' returning id", [elevRute[1]]);
        if (!rader.length) { svar(res, 404, { feil: "Fant ikke eleven." }); return; }
        svar(res, 200, { ok: true });
        return;
      }
      return endreElev(req, res, elevRute[1]);
    }
    svar(res, 404, { feil: "Fant ikke API-et." });
    return;
  }
  if (metode !== "GET" && metode !== "HEAD") {
    svar(res, 405, { feil: "Metoden er ikke støttet." });
    return;
  }
  await serveStatisk(req, res, pathname, url.search);
}

function handter(req, res) {
  rute(req, res).catch((error) => {
    if (error && error.status === 400) { svar(res, 400, { feil: "Ugyldig forespørsel." }); return; }
    if (error && error.status === 413) { svar(res, 413, { feil: "Forespørselen er for stor." }); return; }
    loggFeil(error);
    if (!res.headersSent) svar(res, 500, { feil: "Noe gikk galt. Prøv igjen." });
  });
}

function start(port) {
  const server = http.createServer(handter);
  const host = process.env.HOST || "0.0.0.0";
  return new Promise((resolve) => {
    server.listen(port, host, () => {
      const adresse = server.address();
      console.log("lytter " + adresse.port);
      resolve(server);
    });
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  start(port).catch((error) => {
    loggFeil(error);
    process.exit(1);
  });
  process.on("SIGTERM", () => { lukk().finally(() => process.exit(0)); });
  process.on("SIGINT", () => { lukk().finally(() => process.exit(0)); });
}

module.exports = { start, lukk };
