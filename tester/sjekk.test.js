// Kjør med: node tester/sjekk.test.js
const S = require("../assets/js/sjekk.js");
let feil = 0;
function forvent(navn, faktisk, onsket) {
  const ok = Object.keys(onsket).every((k) => faktisk[k] === onsket[k]);
  if (!ok) { feil++; console.log("FEIL:", navn, JSON.stringify(faktisk)); }
}
const svar = (t, f) => S.sjekkSvar(t, f);
const steg = (t, s) => S.sjekkSteg(t, s);

forvent("komma", svar("0,795", { verdi: 0.795, enhet: "kr" }), { ok: true, type: "manglerEnhet" });
forvent("med enhet", svar("0,795 kr", { verdi: 0.795, enhet: "kr" }), { ok: true, type: "riktig" });
forvent("avrundet", svar("0,80 kr", { verdi: 0.795, enhet: "kr" }), { ok: true });
forvent("for grovt", svar("1 kr", { verdi: 0.795, enhet: "kr" }), { ok: false });
forvent("mellomrom tusen", svar("4 500 kr", { verdi: 4500, enhet: "kr" }), { ok: true });
forvent("feil dimensjon", svar("6,35 kg", { verdi: 6.35, enhet: "mm" }), { ok: false, type: "enhet" });
forvent("annen lengdeenhet", svar("0,635 cm", { verdi: 6.35, enhet: "mm" }), { ok: false, type: "enhet" });
forvent("komma feil", svar("63,5 mm", { verdi: 6.35, enhet: "mm" }), { ok: false, type: "feil" });
forvent("negativ", svar("−7 °C", { verdi: -7, enhet: "°C" }), { ok: true });
forvent("µm", svar("25 µm", { verdi: 25, enhet: "µm" }), { ok: true, type: "riktig" });
forvent("r/min", svar("350 r/min", { verdi: 350, enhet: "r/min" }), { ok: true, type: "riktig" });
forvent("min", svar("12 min", { verdi: 12, enhet: "min" }), { ok: true, type: "riktig" });
forvent("uten enhet-fasit", svar("17", { verdi: 17 }), { ok: true, type: "riktig" });
forvent("tol", svar("2300", { verdi: 2254, enhet: "kr", tol: 100 }), { ok: true });
forvent("uttrykk som svar", svar("23 · 98", { verdi: 2254, enhet: "kr" }), { ok: true });
forvent("tommer", svar('1/4"', { verdi: 0.25, enhet: "tommer" }), { ok: true });

forvent("steg riktig", steg("79,50 : 100 = 0,795", [{ verdi: 0.795, enhet: "kr" }]), { ok: true });
forvent("steg regnefeil", steg("79,50 : 100 = 7,95", [{ verdi: 0.795, enhet: "kr" }]), { ok: false, type: "regnefeil" });
forvent("steg avrundet", steg("79,50 / 100 ≈ 0,80", [{ verdi: 0.795, enhet: "kr" }]), { ok: true });
forvent("steg enhet", steg("1/4 tommer = 6,35 mm", [{ verdi: 6.35, enhet: "mm" }]), { ok: true });
forvent("steg enhet regnefeil", steg("1/4 tommer = 6,5 mm", [{ verdi: 6.35, enhet: "mm" }]), { ok: false, type: "regnefeil" });
forvent("steg ukjent", steg("2 + 2 = 4", [{ verdi: 0.795 }]), { ok: false, type: "ukjent" });
forvent("steg × og x", steg("23 x 100 = 2300", [{ verdi: 2300, enhet: "kr" }]), { ok: true });
forvent("steg prosent", steg("74 % · 4000 = 2960", [{ verdi: 2960 }]), { ok: true });
forvent("steg parentes", steg("(-3 + 5) · 2 = 4", [{ verdi: 4 }]), { ok: true });
forvent("steg mm til m", steg("2450 mm = 2,45 m", [{ verdi: 2.45, enhet: "m" }]), { ok: true });
forvent("steg bare tall", steg("2254", [{ verdi: 2254, enhet: "kr" }]), { ok: true });
forvent("steg tull", steg("hei", [{ verdi: 1 }]), { ok: false, type: "ugyldig" });
forvent("potens", steg("10^3 = 1000", [{ verdi: 1000 }]), { ok: true });
forvent("tid", steg("5 t 12 min", [{ verdi: 1 }]), { ok: false });

console.log(feil ? feil + " test(er) feilet" : "Alle tester OK");
process.exit(feil ? 1 : 0);
