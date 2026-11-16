// Kjør med: node tester/api.test.js
const { spawn } = require("child_process");
const crypto = require("crypto");
const net = require("net");
const path = require("path");

const ROT = path.join(__dirname, "..");
let feil = 0;

function assert(navn, ok, detalj) {
  if (!ok) {
    feil++;
    console.log("FEIL:", navn, detalj || "");
  }
}

function hemmelig() {
  return "T" + crypto.randomBytes(9).toString("hex");
}

function utenHemmelig(tekst, liste) {
  let ut = String(tekst);
  liste.forEach((h) => { if (h) ut = ut.split(h).join("[skjult]"); });
  return ut;
}

function lekker(tekst, liste) {
  const s = String(tekst);
  if (/passord_hash|scrypt\$/.test(s)) return true;
  return liste.some((h) => h && s.includes(h));
}

function ledigPort() {
  return new Promise((resolve, reject) => {
    const s = net.createServer();
    s.listen(0, "127.0.0.1", () => {
      const port = s.address().port;
      s.close(() => resolve(port));
    });
    s.on("error", reject);
  });
}

function startProsess(cmd, args, env) {
  const barn = spawn(cmd, args, { cwd: ROT, env: env, stdio: ["ignore", "pipe", "pipe"] });
  let logg = "";
  barn.stdout.on("data", (d) => { logg += d; });
  barn.stderr.on("data", (d) => { logg += d; });
  return { barn: barn, logg: () => logg };
}

async function ventPa(url, ms) {
  const start = Date.now();
  let siste = "";
  while (Date.now() - start < ms) {
    try {
      const r = await fetch(url, { redirect: "manual" });
      if (r.status) return;
    } catch (e) { siste = e.message; }
    await new Promise((r) => setTimeout(r, 150));
  }
  throw new Error("startet ikke: " + url + " " + siste);
}

function lagKlient(base) {
  let cookie = "";
  return {
    cookie: () => cookie,
    tom: () => { cookie = ""; },
    async kall(method, sti, body) {
      const headers = { accept: "application/json" };
      if (cookie) headers.cookie = cookie;
      if (body !== undefined) headers["content-type"] = "application/json";
      const res = await fetch(base + sti, {
        method: method,
        headers: headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
        redirect: "manual"
      });
      const settListe = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [];
      const raw = settListe[0] || res.headers.get("set-cookie") || "";
      if (raw) {
        const par = raw.split(";")[0];
        if (par.startsWith("ma1py_sesjon=")) {
          const verdi = par.slice("ma1py_sesjon=".length);
          cookie = verdi ? "ma1py_sesjon=" + verdi : "";
        }
      }
      const tekst = await res.text();
      let json = null;
      try { json = tekst ? JSON.parse(tekst) : null; } catch (e) { json = null; }
      return { status: res.status, location: res.headers.get("location") || "", sett: raw, tekst: tekst, json: json };
    }
  };
}

async function enhet() {
  delete process.env.DATABASE_URL;
  const fram = require("../server/framdrift");
  const passord = require("../server/passord");
  const db = require("../server/db");
  const naa = Date.now();
  assert("inne nå", fram.erInne(new Date(naa - 1000).toISOString(), naa));
  assert("inne etter 29 s", fram.erInne(new Date(naa - 29000).toISOString(), naa));
  assert("ute etter 31 s", !fram.erInne(new Date(naa - 31000).toISOString(), naa));
  assert("uten signal", !fram.erInne(null, naa));

  const data = {
    "ma1py:meta": JSON.stringify({
      "1.1-a": { del: "1.1", deler: 1 },
      "1.1-b": { del: "1.1", deler: 1 }
    }),
    "ma1py:oppg:1.1-a": JSON.stringify({ f: 0, h: 0, l: false, d: [true], linjer: [] }),
    "ma1py:oppg:1.1-b": JSON.stringify({ f: 2, h: 1, l: false, d: [false], linjer: [] }),
    "ma1py:jegkan:k1:0": JSON.stringify("gronn"),
    "ma1py:jegkan:k1:1": JSON.stringify("gul"),
    "ma1py:jegkan:k1:2": JSON.stringify("rod")
  };
  const sum = fram.oppsummer(data);
  assert("egen", sum.egen === 1, JSON.stringify(sum));
  assert("påbegynt", sum.pabegynt === 1, JSON.stringify(sum));
  assert("jeg kan", sum.rod === 1 && sum.gul === 1 && sum.gronn === 1, JSON.stringify(sum));

  const klartekst = hemmelig();
  const hash = await passord.lagHash(klartekst);
  assert("hash er scrypt", hash.startsWith("scrypt$") && !hash.includes(klartekst));
  assert("riktig passord", await passord.sjekkPassord(klartekst, hash));
  assert("feil passord", !await passord.sjekkPassord(klartekst + "x", hash));

  const id = crypto.randomUUID();
  await db.sql(
    "insert into brukere (id, brukernavn, navn, passord_hash, rolle) values ($1, $2, $3, $4, 'elev')",
    [id, "enhet" + id.slice(0, 6), "Enhet", hash]
  );
  const rader = await db.sql("select passord_hash from brukere where id = $1", [id]);
  assert("databasen har hash", rader[0] && rader[0].passord_hash === hash && rader[0].passord_hash !== klartekst);
  await db.lukk();
}

async function medServer(envEkstra, fn) {
  const port = await ledigPort();
  const env = Object.assign({}, process.env, envEkstra, { HOST: "127.0.0.1", PORT: String(port) });
  delete env.DATABASE_URL;
  const pros = startProsess(process.execPath, ["server/index.js"], env);
  const base = "http://127.0.0.1:" + port;
  try {
    await ventPa(base + "/api/tilstand", 30000);
    await fn(base);
  } catch (e) {
    assert("server", false, e.message + "\n" + pros.logg().slice(-2000));
  } finally {
    pros.barn.kill("SIGTERM");
    await new Promise((r) => pros.barn.on("exit", r));
  }
}

async function hovedflyt(base) {
  const adminPass = hemmelig();
  const elevPass = hemmelig();
  const nyttPass = hemmelig();
  const hemmeligheter = [adminPass, elevPass, nyttPass];
  const admin = lagKlient(base);
  const elev = lagKlient(base);
  const fremmed = lagKlient(base);

  const tilstand = await fremmed.kall("GET", "/api/tilstand");
  assert("trenger oppsett", tilstand.status === 200 && tilstand.json && tilstand.json.trengerOppsett === true && tilstand.json.innlogget === false, tilstand.tekst);

  const index = await fremmed.kall("GET", "/index.html");
  assert("forside krever innlogging", index.status === 302 && index.location.indexOf("/innlogging.html") === 0, index.status + " " + index.location);
  const kap = await fremmed.kall("GET", "/kapitler/k1/1-1/teori.html");
  assert("kapittel krever innlogging", kap.status === 302, String(kap.status));
  const css = await fremmed.kall("GET", "/assets/css/bok.css");
  assert("stil er åpen", css.status === 200 && css.tekst.indexOf("--blekk") !== -1, String(css.status));
  const inn = await fremmed.kall("GET", "/innlogging.html");
  assert("innlogging forklarer database", inn.status === 200 && inn.tekst.indexOf("Live innlogging kommer på utgaven med database") !== -1, String(inn.status));
  const kilde = await fremmed.kall("GET", "/server/index.js");
  assert("serverkode skjules", kilde.status === 404 && !lekker(kilde.tekst, hemmeligheter), String(kilde.status));
  const pakke = await fremmed.kall("GET", "/package.json");
  assert("package.json skjules", pakke.status === 404, String(pakke.status));

  const oppsett = await admin.kall("POST", "/api/oppsett", { navn: "Ernst Test", brukernavn: "larer", passord: adminPass });
  assert("lærerkonto", oppsett.status === 200 && oppsett.json && oppsett.json.rolle === "admin" && oppsett.json.navn === "Ernst Test", utenHemmelig(oppsett.tekst, hemmeligheter));
  assert("cookie er httpOnly", /httponly/i.test(oppsett.sett) && /samesite=lax/i.test(oppsett.sett), oppsett.sett);
  assert("oppsett viser ikke passord", !lekker(oppsett.tekst, hemmeligheter));
  const igjen = await admin.kall("POST", "/api/oppsett", { navn: "Annen", brukernavn: "annen", passord: hemmelig() });
  assert("bare én lærerkonto", igjen.status === 403, utenHemmelig(igjen.tekst, hemmeligheter));

  const elevOpprett = await admin.kall("POST", "/api/admin/elever", { navn: "Kari Æsøy", brukernavn: "kari", passord: elevPass, rolle: "admin" });
  assert("opprett elev", elevOpprett.status === 201 && elevOpprett.json && elevOpprett.json.rolle === "elev" && elevOpprett.json.navn === "Kari Æsøy", utenHemmelig(elevOpprett.tekst, hemmeligheter));
  assert("opprett viser ikke passord", !lekker(elevOpprett.tekst, hemmeligheter));
  const elevId = elevOpprett.json.id;

  const feilPass = await elev.kall("POST", "/api/innlogging", { brukernavn: "kari", passord: elevPass + "nei" });
  assert("feil passord", feilPass.status === 401 && !elev.cookie(), utenHemmelig(feilPass.tekst, hemmeligheter));
  const injeksjon = await fremmed.kall("POST", "/api/innlogging", { brukernavn: "kari' OR '1'='1", passord: elevPass });
  assert("injeksjon avvises", injeksjon.status === 401, utenHemmelig(injeksjon.tekst, hemmeligheter));
  const etter = await fremmed.kall("GET", "/api/tilstand");
  assert("tabellen lever", etter.status === 200 && etter.json && etter.json.trengerOppsett === false, etter.tekst);

  const innElev = await elev.kall("POST", "/api/innlogging", { brukernavn: "kari", passord: elevPass });
  assert("elev logger inn", innElev.status === 200 && innElev.json && innElev.json.rolle === "elev" && !!elev.cookie(), utenHemmelig(innElev.tekst, hemmeligheter));
  assert("innlogging viser ikke passord", !lekker(innElev.tekst, hemmeligheter));

  const adminSide = await elev.kall("GET", "/admin.html");
  assert("elev stoppes på admin", adminSide.status === 403 && adminSide.tekst.indexOf("Elever kommer ikke inn") !== -1, String(adminSide.status));
  const adminApi = await elev.kall("GET", "/api/admin/oversikt");
  assert("elev stoppes på admin-API", adminApi.status === 403, utenHemmelig(adminApi.tekst, hemmeligheter));
  const adminPost = await elev.kall("POST", "/api/admin/elever", { navn: "Ulovlig", brukernavn: "ulovlig", passord: hemmelig() });
  assert("elev kan ikke opprette", adminPost.status === 403, String(adminPost.status));

  const framdrift = {
    "ma1py:meta": JSON.stringify({
      "1.1-a": { del: "1.1", deler: 1 },
      "1.1-b": { del: "1.1", deler: 1 }
    }),
    "ma1py:oppg:1.1-a": JSON.stringify({ f: 0, h: 0, l: false, d: [true], linjer: [] }),
    "ma1py:oppg:1.1-b": JSON.stringify({ f: 2, h: 1, l: false, d: [false], linjer: ["skjult"] }),
    "ma1py:jegkan:k1:0": JSON.stringify("gronn"),
    "ma1py:jegkan:k1:1": JSON.stringify("rod")
  };
  const puls = await elev.kall("POST", "/api/puls", {
    sti: "/kapitler/k1/1-1/teori.html",
    tittel: "Teori · 1.1 Gange og dele med 10, 100 og 1000",
    framdrift: framdrift
  });
  assert("puls", puls.status === 204, String(puls.status) + " " + puls.tekst);

  const egen = await elev.kall("GET", "/api/framdrift");
  assert("elev ser egen framdrift", egen.status === 200 && egen.json && egen.json.framdrift["ma1py:oppg:1.1-a"], utenHemmelig(egen.tekst, hemmeligheter));

  const oversikt = await admin.kall("GET", "/api/admin/oversikt");
  const kari = oversikt.json && oversikt.json.elever && oversikt.json.elever.find((e) => e.brukernavn === "kari");
  assert("admin ser elev", oversikt.status === 200 && !!kari, utenHemmelig(oversikt.tekst, hemmeligheter));
  assert("elev er inne", !!(kari && kari.inne && kari.tittel.indexOf("1.1") !== -1 && kari.sti === "/kapitler/k1/1-1/teori.html"), JSON.stringify(kari && { inne: kari.inne, tittel: kari.tittel, sti: kari.sti }));
  assert("framdrift på admin", !!(kari && kari.framdrift.egen === 1 && kari.framdrift.pabegynt === 1 && kari.framdrift.gronn === 1 && kari.framdrift.rod === 1), JSON.stringify(kari && kari.framdrift));
  assert("admin ser ikke svarlinje", oversikt.tekst.indexOf("skjult") === -1 && !lekker(oversikt.tekst, hemmeligheter));

  const elev2pass = hemmelig();
  hemmeligheter.push(elev2pass);
  const elev2op = await admin.kall("POST", "/api/admin/elever", { navn: "Per", brukernavn: "per", passord: elev2pass });
  assert("elev to", elev2op.status === 201, utenHemmelig(elev2op.tekst, hemmeligheter));
  const elev2 = lagKlient(base);
  const inn2 = await elev2.kall("POST", "/api/innlogging", { brukernavn: "per", passord: elev2pass });
  assert("per logger inn", inn2.status === 200, utenHemmelig(inn2.tekst, hemmeligheter));
  const pers = await elev2.kall("GET", "/api/framdrift");
  assert("per ser ikke Kari", pers.status === 200 && pers.tekst.indexOf("1.1-a") === -1, utenHemmelig(pers.tekst, hemmeligheter));

  const nyttNavn = await admin.kall("PATCH", "/api/admin/elever/" + elevId, { navn: "Kari Nordmann" });
  assert("endre navn", nyttNavn.status === 200 && nyttNavn.json && nyttNavn.json.navn === "Kari Nordmann", utenHemmelig(nyttNavn.tekst, hemmeligheter));

  const bytt = await admin.kall("POST", "/api/admin/elever/" + elevId + "/passord", { passord: nyttPass });
  assert("nytt passord uten ekko", bytt.status === 200 && !lekker(bytt.tekst, hemmeligheter), utenHemmelig(bytt.tekst, hemmeligheter));
  const gammelSesjon = await elev.kall("POST", "/api/puls", { sti: "/index.html", tittel: "Forside" });
  assert("gammel sesjon er ute", gammelSesjon.status === 401, String(gammelSesjon.status));
  elev.tom();
  const gammelt = await elev.kall("POST", "/api/innlogging", { brukernavn: "kari", passord: elevPass });
  assert("gammelt passord virker ikke", gammelt.status === 401, utenHemmelig(gammelt.tekst, hemmeligheter));
  const nytt = await elev.kall("POST", "/api/innlogging", { brukernavn: "kari", passord: nyttPass });
  assert("nytt passord virker", nytt.status === 200, utenHemmelig(nytt.tekst, hemmeligheter));

  const av = await admin.kall("PATCH", "/api/admin/elever/" + elevId, { aktiv: false });
  assert("slå av", av.status === 200 && av.json && av.json.aktiv === false, utenHemmelig(av.tekst, hemmeligheter));
  const avSesjon = await elev.kall("GET", "/api/framdrift");
  assert("avslått sesjon", avSesjon.status === 401, String(avSesjon.status));
  elev.tom();
  const avLogin = await elev.kall("POST", "/api/innlogging", { brukernavn: "kari", passord: nyttPass });
  assert("avslått konto", avLogin.status === 403 && avLogin.tekst.indexOf("slått av") !== -1, utenHemmelig(avLogin.tekst, hemmeligheter));
  const pa = await admin.kall("PATCH", "/api/admin/elever/" + elevId, { aktiv: true });
  assert("slå på", pa.status === 200 && pa.json && pa.json.aktiv === true, utenHemmelig(pa.tekst, hemmeligheter));

  const slett = await admin.kall("DELETE", "/api/admin/elever/" + elevId);
  assert("slett elev", slett.status === 200, utenHemmelig(slett.tekst, hemmeligheter));
  const etterSlett = await admin.kall("GET", "/api/admin/oversikt");
  const borte = etterSlett.json && etterSlett.json.elever && etterSlett.json.elever.some((e) => e.id === elevId);
  assert("eleven er borte", etterSlett.status === 200 && !borte, utenHemmelig(etterSlett.tekst, hemmeligheter));

  const bok = await admin.kall("GET", "/index.html");
  assert("innlogget forside", bok.status === 200 && bok.tekst.indexOf("Matte i verkstedet") !== -1, String(bok.status));
  const ut = await admin.kall("POST", "/api/utlogging");
  assert("logg ut", ut.status === 200 && !admin.cookie(), String(ut.status));
  const etterUt = await admin.kall("GET", "/index.html");
  assert("ute krever innlogging", etterUt.status === 302, String(etterUt.status));
}

async function utlop(base) {
  const pass = hemmelig();
  const klient = lagKlient(base);
  const opp = await klient.kall("POST", "/api/oppsett", { navn: "Kort", brukernavn: "kort", passord: pass });
  assert("kort sesjon", opp.status === 200, utenHemmelig(opp.tekst, [pass]));
  await new Promise((r) => setTimeout(r, 2200));
  const senere = await klient.kall("GET", "/api/tilstand");
  assert("sesjon utløper", senere.status === 200 && senere.json && senere.json.innlogget === false, senere.tekst);
}

async function sperre(base) {
  const pass = hemmelig();
  const klient = lagKlient(base);
  const opp = await klient.kall("POST", "/api/oppsett", { navn: "Sperre", brukernavn: "sperre", passord: pass });
  assert("sperre-oppsett", opp.status === 200, utenHemmelig(opp.tekst, [pass]));
  klient.tom();
  for (let i = 0; i < 8; i++) {
    const r = await klient.kall("POST", "/api/innlogging", { brukernavn: "sperre", passord: "feil-pass-" + i + "xx" });
    assert("forsøk " + (i + 1), r.status === 401, utenHemmelig(r.tekst, [pass]));
  }
  const stopp = await klient.kall("POST", "/api/innlogging", { brukernavn: "sperre", passord: pass });
  assert("for mange forsøk", stopp.status === 429, utenHemmelig(stopp.tekst, [pass]));
}

async function statisk() {
  const port = await ledigPort();
  const pros = startProsess("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], process.env);
  const base = "http://127.0.0.1:" + port;
  try {
    await ventPa(base + "/innlogging.html", 10000);
    const inn = await fetch(base + "/innlogging.html");
    const tekst = await inn.text();
    assert("statisk innlogging", inn.status === 200 && tekst.indexOf("Live innlogging kommer på utgaven med database") !== -1, String(inn.status));
    const index = await fetch(base + "/index.html", { redirect: "manual" });
    const forside = await index.text();
    assert("statisk forside er åpen", index.status === 200 && forside.indexOf("Matte i verkstedet") !== -1, String(index.status));
    const kap = await fetch(base + "/kapitler/k1/1-1/teori.html", { redirect: "manual" });
    const teori = await kap.text();
    assert("statisk kapittel er åpent", kap.status === 200 && teori.indexOf("data-side=\"teori\"") !== -1, String(kap.status));
    const api = await fetch(base + "/api/tilstand");
    assert("statisk har ikke API", api.status === 404, String(api.status));
  } catch (e) {
    assert("statisk server", false, e.message + "\n" + pros.logg().slice(-1000));
  } finally {
    pros.barn.kill("SIGTERM");
    await new Promise((r) => pros.barn.on("exit", r));
  }
}

(async () => {
  await enhet();
  await medServer({}, hovedflyt);
  await medServer({ MA1PY_SESJON_SEKUNDER: "1" }, utlop);
  await medServer({}, sperre);
  await statisk();
  console.log(feil ? feil + " API-test(er) feilet" : "Alle API-tester OK");
  process.exit(feil ? 1 : 0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
