const INNE_MS = 30 * 1000;

function erInne(sett, naaMs) {
  if (!sett) return false;
  const tid = new Date(sett).getTime();
  if (!Number.isFinite(tid)) return false;
  const delta = naaMs - tid;
  return delta < INNE_MS && delta > -5000;
}

function parseLagret(verdi) {
  if (typeof verdi !== "string") return null;
  try { return JSON.parse(verdi); } catch (e) { return null; }
}

function beregnStatus(t, antallDeler) {
  const tilstand = t && typeof t === "object" ? t : {};
  const d = Array.isArray(tilstand.d) ? tilstand.d : [];
  const linjer = Array.isArray(tilstand.linjer) ? tilstand.linjer : [];
  const lost = antallDeler > 0 && d.filter(Boolean).length >= antallDeler;
  if (lost) return tilstand.h > 0 || tilstand.l ? "hint" : "egen";
  if (tilstand.f > 0 || tilstand.h > 0 || tilstand.l || linjer.length || d.some(Boolean)) return "pabegynt";
  return "ikke";
}

function tomStatus() {
  return { egen: 0, hint: 0, pabegynt: 0, ikke: 0, totalt: 0 };
}

function oppsummer(data) {
  const kilde = data && typeof data === "object" ? data : {};
  const meta = parseLagret(kilde["ma1py:meta"]);
  const metaObj = meta && typeof meta === "object" && !Array.isArray(meta) ? meta : {};
  const ider = new Set(Object.keys(metaObj));
  Object.keys(kilde).forEach((nokkel) => {
    if (nokkel.startsWith("ma1py:oppg:")) ider.add(nokkel.slice("ma1py:oppg:".length));
  });
  const status = tomStatus();
  const perDel = {};
  ider.forEach((id) => {
    const m = metaObj[id] && typeof metaObj[id] === "object" ? metaObj[id] : {};
    const t = parseLagret(kilde["ma1py:oppg:" + id]) || {};
    const deler = Number(m.deler) > 0 ? Number(m.deler) : (Array.isArray(t.d) && t.d.length ? t.d.length : 1);
    const s = beregnStatus(t, deler);
    status[s] += 1;
    status.totalt += 1;
    const del = typeof m.del === "string" && m.del ? m.del : "Uten delkapittel";
    if (!perDel[del]) perDel[del] = Object.assign({ del: del }, tomStatus());
    perDel[del][s] += 1;
    perDel[del].totalt += 1;
  });
  const jegKan = { rod: 0, gul: 0, gronn: 0 };
  Object.keys(kilde).forEach((nokkel) => {
    if (!nokkel.startsWith("ma1py:jegkan:")) return;
    const farge = parseLagret(kilde[nokkel]);
    if (farge === "rod" || farge === "gul" || farge === "gronn") jegKan[farge] += 1;
  });
  const deler = Object.keys(perDel)
    .map((k) => perDel[k])
    .sort((a, b) => a.del.localeCompare(b.del, "nb", { numeric: true }));
  return { egen: status.egen, hint: status.hint, pabegynt: status.pabegynt, ikke: status.ikke, totalt: status.totalt, rod: jegKan.rod, gul: jegKan.gul, gronn: jegKan.gronn, deler: deler };
}

module.exports = { erInne, oppsummer, INNE_MS };
