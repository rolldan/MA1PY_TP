// Kontrollerer et kapittel: node tester/sjekk-kapittel.js 3   (eller uten tall for alle)
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const Sjekk = require("../assets/js/sjekk.js");

const ROT = path.join(__dirname, "..");
const NIVA = ["lett", "middels", "vanskelig"];
const TYPER = [undefined, "vanlig", "verksted", "repetisjon", "eksamen"];
const SIDETYPER = ["tavle", "teori", "oppgaver", "verksted"];
let feil = 0, advarsler = 0;
const f = (m) => { feil++; console.log("  FEIL: " + m); };
const a = (m) => { advarsler++; console.log("  Advarsel: " + m); };

function sjekkKapittel(nr) {
  const mappe = path.join(ROT, "kapitler", "k" + nr);
  const jsonFil = path.join(mappe, "kapittel.json");
  if (!fs.existsSync(jsonFil)) return false;
  console.log("Kapittel " + nr);
  let data;
  try { data = JSON.parse(fs.readFileSync(jsonFil, "utf8")); } catch (e) { f("kapittel.json er ikke gyldig JSON: " + e.message); return true; }
  if (data.nr !== nr) f("kapittel.json har nr " + data.nr + ", men ligger i k" + nr);
  if (!fs.existsSync(path.join(mappe, "index.html"))) f("mangler index.html");
  (data.delkapitler || []).forEach((d) => {
    if (!new RegExp("^" + nr + "\\.\\d+$").test(d.nr)) f("delkapittel-nr «" + d.nr + "» skal være " + nr + ".X");
    const dm = path.join(mappe, String(d.nr).replace(/\./g, "-"));
    (d.sider || SIDETYPER).forEach((s) => {
      const fil = path.join(dm, s + ".html");
      if (!fs.existsSync(fil)) { f("mangler " + path.relative(ROT, fil)); return; }
      const html = fs.readFileSync(fil, "utf8");
      if (!html.includes('data-side="' + s + '"')) f(path.relative(ROT, fil) + ": data-side skal være " + s);
      if (!html.includes('data-kapittel="' + nr + '"')) f(path.relative(ROT, fil) + ": data-kapittel skal være " + nr);
      if (!html.includes('data-del="' + d.nr + '"')) f(path.relative(ROT, fil) + ": data-del skal være " + d.nr);
      if (!html.includes("assets/js/bok.js")) f(path.relative(ROT, fil) + ": mangler bok.js");
      if (s === "tavle") {
        const n = (html.match(/class="lysbilde/g) || []).length;
        if (n < 3 || n > 5) a(path.relative(ROT, fil) + ": " + n + " lysbilder (malen sier 3–5)");
        if (!html.includes('class="undre')) a(path.relative(ROT, fil) + ": ingen undrespørsmål");
      }
      if (s === "oppgaver") sjekkOppgaver(path.join(dm, "oppgaver.js"), d.nr);
    });
  });
  return true;
}

function sjekkOppgaver(fil, delNr) {
  if (!fs.existsSync(fil)) { f("mangler " + path.relative(ROT, fil)); return; }
  let liste = null;
  const sandkasse = { Bok: { oppgaver: (x) => { liste = Array.isArray(x) ? x : x.oppgaver; } } };
  try { vm.runInNewContext(fs.readFileSync(fil, "utf8"), sandkasse); } catch (e) { f(path.relative(ROT, fil) + ": " + e.message); return; }
  if (!liste || !liste.length) { f(path.relative(ROT, fil) + ": ingen oppgaver"); return; }
  const ider = new Set();
  const niva = { lett: 0, middels: 0, vanskelig: 0 };
  liste.forEach((o, i) => {
    const navn = delNr + " oppgave " + (i + 1) + " (" + o.id + ")";
    if (!o.id || !/^[a-z0-9-]+$/.test(o.id)) f(navn + ": id skal være små bokstaver, tall og bindestrek");
    if (ider.has(o.id)) f(navn + ": id finnes fra før");
    ider.add(o.id);
    if (!NIVA.includes(o.niva)) f(navn + ": niva må være lett, middels eller vanskelig");
    else niva[o.niva]++;
    if (!TYPER.includes(o.type)) f(navn + ": ukjent type " + o.type);
    if (!o.hint || !o.hint.length) a(navn + ": ingen hint");
    if (!o.losning) a(navn + ": mangler løsningsforslag");
    const deler = o.deler || [{ svar: o.svar }];
    deler.forEach((d, j) => {
      const s = d.svar;
      if (!s) { f(navn + " del " + (j + 1) + ": mangler svar"); return; }
      if (s.verdi !== undefined) {
        if (typeof s.verdi !== "number") f(navn + ": svar.verdi må være et tall (punktum som desimaltegn)");
        if (s.enhet && !Sjekk.finnEnhet(s.enhet)) f(navn + ": ukjent enhet «" + s.enhet + "» (se ENHETER i assets/js/sjekk.js)");
      } else if (s.valg) {
        const ok = typeof s.riktig === "number" ? s.riktig >= 0 && s.riktig < s.valg.length : s.valg.includes(s.riktig);
        if (!ok) f(navn + ": svar.riktig peker ikke på et av valgene");
      } else if (!s.fritekst) f(navn + ": svar må ha verdi, valg eller fritekst");
    });
    (o.steg || []).forEach((s) => { if (s.enhet && !Sjekk.finnEnhet(s.enhet)) f(navn + ": ukjent enhet i steg «" + s.enhet + "»"); });
  });
  if (!niva.lett || !niva.middels || !niva.vanskelig) a(delNr + ": bør ha minst én oppgave på hvert nivå " + JSON.stringify(niva));
}

const arg = process.argv[2];
const nr = arg !== undefined ? [Number(arg)] : Array.from({ length: 11 }, (_, i) => i);
let funnet = 0;
nr.forEach((n) => { if (sjekkKapittel(n)) funnet++; });
console.log("\n" + funnet + " kapittel(er) sjekket · " + feil + " feil · " + advarsler + " advarsler");
process.exit(feil ? 1 : 0);
