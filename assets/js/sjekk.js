/* Tolker og sjekker elevsvar: tall med komma, regnestykker og enheter.
 * Brukes av oppgavesidene (window.Sjekk) og av testene (node: require). */
(function (root) {
  "use strict";

  // [skrivemåter, dimensjon, faktor til grunnenhet, visningsnavn]
  var ENHETER = [
    [["µm", "um", "my"], "lengde", 1e-6, "µm"],
    [["mm"], "lengde", 1e-3, "mm"],
    [["cm"], "lengde", 1e-2, "cm"],
    [["dm"], "lengde", 1e-1, "dm"],
    [["m", "meter"], "lengde", 1, "m"],
    [["km"], "lengde", 1e3, "km"],
    [["nm", "nautiske mil"], "lengde", 1852, "nm"],
    [["tommer", "tomme", "inch", "in", "\"", "″", "”"], "lengde", 0.0254, "tommer"],
    [["mm²", "mm2"], "areal", 1e-6, "mm²"],
    [["cm²", "cm2"], "areal", 1e-4, "cm²"],
    [["dm²", "dm2"], "areal", 1e-2, "dm²"],
    [["m²", "m2"], "areal", 1, "m²"],
    [["mm³", "mm3"], "volum", 1e-9, "mm³"],
    [["cm³", "cm3", "ccm"], "volum", 1e-6, "cm³"],
    [["dm³", "dm3"], "volum", 1e-3, "dm³"],
    [["m³", "m3"], "volum", 1, "m³"],
    [["ml"], "volum", 1e-6, "ml"],
    [["cl"], "volum", 1e-5, "cl"],
    [["dl"], "volum", 1e-4, "dl"],
    [["l", "L", "liter"], "volum", 1e-3, "L"],
    [["mg"], "masse", 1e-6, "mg"],
    [["g", "gram"], "masse", 1e-3, "g"],
    [["kg"], "masse", 1, "kg"],
    [["tonn"], "masse", 1000, "tonn"],
    [["s", "sek", "sekunder"], "tid", 1, "s"],
    [["min", "minutter"], "tid", 60, "min"],
    [["h", "t", "time", "timer"], "tid", 3600, "h"],
    [["kr", "kroner", "nok", "NOK", ",-"], "penger", 1, "kr"],
    [["øre"], "penger", 0.01, "øre"],
    [["%", "prosent"], "prosent", 1, "%"],
    [["‰", "promille"], "prosent", 0.1, "‰"],
    [["°C", "grader", "°"], "temperatur", 1, "°C"],
    [["N"], "kraft", 1, "N"],
    [["kN"], "kraft", 1000, "kN"],
    [["Nm"], "moment", 1, "Nm"],
    [["m/s"], "fart", 1, "m/s"],
    [["m/min"], "fart", 1 / 60, "m/min"],
    [["km/h", "km/t"], "fart", 1 / 3.6, "km/h"],
    [["knop"], "fart", 1852 / 3600, "knop"],
    [["r/min", "o/min", "rpm", "RPM", "omdr/min"], "turtall", 1, "r/min"],
    [["V", "volt"], "spenning", 1, "V"],
    [["mA"], "strøm", 1e-3, "mA"],
    [["A", "ampere"], "strøm", 1, "A"],
    [["Ω", "ohm"], "motstand", 1, "Ω"],
    [["W", "watt"], "effekt", 1, "W"],
    [["kW"], "effekt", 1000, "kW"],
    [["hk"], "effekt", 735.5, "hk"],
    [["Wh"], "energi", 3600, "Wh"],
    [["kWh"], "energi", 3.6e6, "kWh"],
    [["Pa"], "trykk", 1, "Pa"],
    [["kPa"], "trykk", 1000, "kPa"],
    [["bar"], "trykk", 1e5, "bar"],
    [["psi"], "trykk", 6894.757, "psi"],
    [["kg/m"], "lengdevekt", 1, "kg/m"],
    [["g/cm³", "g/cm3"], "tetthet", 1000, "g/cm³"],
    [["kg/dm³", "kg/dm3"], "tetthet", 1000, "kg/dm³"],
    [["kg/m³", "kg/m3"], "tetthet", 1, "kg/m³"],
    [["kr/m²", "kr/m2"], "kr per areal", 1, "kr/m²"],
    [["L/min", "l/min"], "volumstrøm", 1e-3 / 60, "L/min"],
    [["stk", "stykker"], "antall", 1, "stk"]
  ];

  var SKRIVEMATE = [];
  var ENHET = {};
  ENHETER.forEach(function (e) {
    var info = { dim: e[1], faktor: e[2], navn: e[3] };
    ENHET[e[3]] = info;
    e[0].forEach(function (s) { SKRIVEMATE.push([s, info]); });
  });
  SKRIVEMATE.sort(function (a, b) { return b[0].length - a[0].length; });

  var DIMNAVN = {
    lengde: "lengde", areal: "areal", volum: "volum", masse: "masse", tid: "tid",
    penger: "kroner", prosent: "prosent", temperatur: "temperatur", kraft: "kraft",
    moment: "moment", fart: "fart", turtall: "turtall", spenning: "spenning",
    "strøm": "strøm", motstand: "motstand", effekt: "effekt", energi: "energi",
    trykk: "trykk", antall: "antall"
  };

  function finnEnhet(navn) {
    if (!navn) return null;
    if (ENHET[navn]) return ENHET[navn];
    for (var i = 0; i < SKRIVEMATE.length; i++) if (SKRIVEMATE[i][0] === navn) return SKRIVEMATE[i][1];
    return null;
  }

  function erBokstav(c) { return /[A-Za-zÆØÅæøåµΩ°‰%"″”²³]/.test(c); }

  function normaliser(tekst) {
    return String(tekst)
      .replace(/[−–—]/g, "-")
      .replace(/\u00a0|\u202f/g, " ")
      .replace(/(\d) (?=\d{3}(?!\d))/g, "$1")
      .replace(/(\d) (?=\d{3}(?!\d))/g, "$1")
      .trim();
  }

  // Gjør en tekst om til tokens: tall, operatorer, parenteser og enheter. Ukjente ord hoppes over.
  function tokens(tekst) {
    var s = normaliser(tekst), i = 0, ut = [];
    while (i < s.length) {
      var c = s[i];
      if (c === " ") { i++; continue; }
      var tall = /^\d+(?:[.,]\d+)?/.exec(s.slice(i)) || /^[.,]\d+/.exec(s.slice(i));
      if (c === "," && s[i + 1] === "-") { ut.push({ t: "enhet", e: ENHET.kr }); i += 2; continue; }
      if (tall && /[\d.,]/.test(c)) {
        var txt = tall[0];
        ut.push({ t: "tall", v: parseFloat(txt.replace(",", ".")), des: (txt.split(/[.,]/)[1] || "").length });
        i += txt.length; continue;
      }
      if ("+-*·×÷:/^()".indexOf(c) >= 0) {
        var op = c === "·" || c === "×" ? "*" : c === "÷" || c === ":" ? "/" : c;
        ut.push({ t: op === "(" || op === ")" ? op : "op", op: op }); i++; continue;
      }
      if ((c === "x" || c === "X") && !erBokstav(s[i + 1] || " ") && ut.length && ut[ut.length - 1].t !== "op") {
        ut.push({ t: "op", op: "*" }); i++; continue;
      }
      if (c === "=" || c === "≈") { ut.push({ t: "=" }); i++; continue; }
      if (erBokstav(c)) {
        var rest = s.slice(i), funnet = null;
        for (var k = 0; k < SKRIVEMATE.length; k++) {
          var sk = SKRIVEMATE[k][0];
          if (rest.indexOf(sk) === 0) {
            var etter = rest[sk.length] || " ";
            if (!/[A-Za-zÆØÅæøå]/.test(etter) || !/[A-Za-zÆØÅæøå]$/.test(sk)) { funnet = SKRIVEMATE[k]; break; }
          }
        }
        if (funnet) { ut.push({ t: "enhet", e: funnet[1] }); i += funnet[0].length; continue; }
        var ord = /^[A-Za-zÆØÅæøåµΩ]+/.exec(rest);
        i += ord ? ord[0].length : 1;
        continue;
      }
      i++;
    }
    return ut;
  }

  // Regner ut én side av et likhetstegn. Gir {verdi, enhet, des, harOp} eller {feil}.
  function regnDel(tok) {
    var enhet = null, harOp = false, liste = [];
    for (var i = 0; i < tok.length; i++) {
      var tk = tok[i];
      if (tk.t === "enhet") {
        if (tk.e.dim === "prosent" && liste.length && liste[liste.length - 1].t === "tall") {
          liste.push({ t: "prosent", e: tk.e });
        }
        enhet = tk.e;
        continue;
      }
      if (tk.t === "op") harOp = true;
      liste.push(tk);
    }
    if (harOp) {
      var ny = [];
      for (var m = 0; m < liste.length; m++) {
        if (liste[m].t === "prosent") { ny[ny.length - 1] = { t: "tall", v: ny[ny.length - 1].v * liste[m].e.faktor / 100, des: 9 }; continue; }
        ny.push(liste[m]);
      }
      liste = ny;
      if (enhet && enhet.dim === "prosent") enhet = null;
    } else {
      liste = liste.filter(function (tk) { return tk.t !== "prosent"; });
    }
    var pos = 0;
    function se() { return liste[pos]; }
    function uttrykk() {
      var v = ledd();
      while (se() && se().t === "op" && (se().op === "+" || se().op === "-")) {
        var op = liste[pos++].op, h = ledd();
        v = op === "+" ? v + h : v - h;
      }
      return v;
    }
    function ledd() {
      var v = potens();
      while (se() && ((se().t === "op" && (se().op === "*" || se().op === "/")) || se().t === "(")) {
        var op = se().t === "op" ? liste[pos++].op : "*";
        var h = potens();
        v = op === "*" ? v * h : v / h;
      }
      return v;
    }
    function potens() {
      var v = faktor();
      if (se() && se().t === "op" && se().op === "^") { pos++; v = Math.pow(v, potens()); }
      return v;
    }
    function faktor() {
      var tk = liste[pos++];
      if (!tk) throw new Error("mangler tall");
      if (tk.t === "op" && tk.op === "-") return -faktor();
      if (tk.t === "op" && tk.op === "+") return faktor();
      if (tk.t === "tall") return tk.v;
      if (tk.t === "(") {
        var v = uttrykk();
        if (!se() || se().t !== ")") throw new Error("parentes");
        pos++;
        return v;
      }
      throw new Error("uventet tegn");
    }
    try {
      if (!liste.length) return { feil: "tom" };
      var verdi = uttrykk();
      if (pos < liste.length) return { feil: "uventet" };
      if (!isFinite(verdi)) return { feil: "deling på null" };
      var sisteTall = liste.filter(function (x) { return x.t === "tall"; }).pop();
      return { verdi: verdi, enhet: enhet, des: harOp ? null : (sisteTall ? sisteTall.des : 0), harOp: harOp };
    } catch (e) {
      return { feil: e.message };
    }
  }

  function tolk(tekst) {
    var tok = tokens(tekst), deler = [[]];
    tok.forEach(function (tk) { if (tk.t === "=") deler.push([]); else deler[deler.length - 1].push(tk); });
    return deler.map(regnDel);
  }

  function iGrunnenhet(d) { return d.enhet ? d.verdi * d.enhet.faktor : d.verdi; }

  function formater(v, maksDes) {
    if (maksDes === undefined) maksDes = 4;
    var r = Math.round(v * Math.pow(10, maksDes)) / Math.pow(10, maksDes);
    var s = String(r);
    if (/e/.test(s)) s = r.toFixed(maksDes);
    var deler = s.split(".");
    deler[0] = deler[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");
    return deler.join(",");
  }

  function likNok(elev, fasit, des, tol) {
    var diff = Math.abs(elev - fasit), skala = Math.max(Math.abs(fasit), 1e-12);
    if (diff <= 1e-9 * Math.max(1, Math.abs(fasit))) return true;
    if (tol !== undefined && tol !== null) return diff <= tol + 1e-12;
    if (des === null || des === undefined) return diff / skala <= 0.002;
    var avrunding = 0.5 * Math.pow(10, -des) + 1e-9;
    return diff <= avrunding && diff / skala <= 0.01;
  }

  /* Sjekker et svar mot fasit.
   * fasit: { verdi, enhet?: "mm", tol?: absolutt toleranse i fasitens enhet }
   * gir { ok, type: "riktig"|"feil"|"enhet"|"ugyldig"|"manglerEnhet", melding } */
  function sjekkSvar(tekst, fasit) {
    var deler = tolk(tekst).filter(function (d) { return !d.feil || d.feil !== "tom"; });
    if (!String(tekst).trim()) return { ok: false, type: "ugyldig", melding: "Skriv et svar først." };
    var d = deler[deler.length - 1];
    if (!d || d.feil) return { ok: false, type: "ugyldig", melding: "Jeg forstår ikke svaret. Skriv et tall, gjerne med enhet, for eksempel 12,5 mm." };
    var fe = finnEnhet(fasit.enhet);
    if (d.enhet && fe && d.enhet.dim !== fe.dim) {
      return { ok: false, type: "enhet", melding: "Feil enhet: " + d.enhet.navn + " er " + (DIMNAVN[d.enhet.dim] || d.enhet.dim) + ", men svaret skal være " + (DIMNAVN[fe.dim] || fe.dim) + " (" + fe.navn + ")." };
    }
    if (d.enhet && !fe && d.enhet.dim !== "antall") {
      return { ok: false, type: "enhet", melding: "Dette svaret skal ikke ha enheten " + d.enhet.navn + "." };
    }
    if (d.enhet && fe && d.enhet !== fe && d.enhet.navn !== fe.navn) {
      var omregnet = iGrunnenhet(d) / fe.faktor;
      if (likNok(omregnet, fasit.verdi, null, fasit.tol)) {
        return { ok: false, type: "enhet", melding: "Verdien stemmer, men oppgaven spør etter svaret i " + fe.navn + ". Gjør om fra " + d.enhet.navn + " til " + fe.navn + "." };
      }
      return { ok: false, type: "feil", melding: "Ikke riktig ennå. Sjekk også enheten: oppgaven spør etter " + fe.navn + "." };
    }
    if (likNok(d.verdi, fasit.verdi, d.des, fasit.tol)) {
      if (fe && !d.enhet && fe.dim !== "antall") {
        return { ok: true, type: "manglerEnhet", melding: "Riktig! Husk enheten neste gang: " + formater(fasit.verdi) + " " + fe.navn + "." };
      }
      return { ok: true, type: "riktig", melding: "Riktig!" };
    }
    if (fe && fe.dim !== "antall") {
      var f = fasit.verdi;
      var hint = [10, 100, 1000].some(function (k) { return likNok(d.verdi * k, f, null) || likNok(d.verdi / k, f, null); });
      if (hint) return { ok: false, type: "feil", melding: "Nesten: sifrene stemmer, men kommaet står feil. Sjekk om du skal gange eller dele." };
    }
    return { ok: false, type: "feil", melding: "Ikke riktig ennå. Prøv igjen, eller ta et hint." };
  }

  /* Sjekker én linje i «Løs steg for steg».
   * steg: liste av { verdi, enhet?, tol? } som er gyldige mellomsvar (fasit regnes også med). */
  function sjekkSteg(tekst, steg) {
    if (!String(tekst).trim()) return { ok: false, type: "ugyldig", melding: "Skriv et regnestykke, for eksempel 79,50 : 100 = 0,795" };
    var deler = tolk(tekst);
    for (var i = 0; i < deler.length; i++) {
      if (deler[i].feil) return { ok: false, type: "ugyldig", melding: "Jeg forstår ikke denne linja. Skriv tall og regnetegn, for eksempel 23 · 100 = 2300" };
    }
    for (var j = 1; j < deler.length; j++) {
      var a = deler[j - 1], b = deler[j];
      var dimA = a.enhet && a.enhet.dim, dimB = b.enhet && b.enhet.dim;
      var va = a.verdi, vb = b.verdi;
      if (dimA && dimB && dimA === dimB) { va = iGrunnenhet(a); vb = iGrunnenhet(b); }
      else if (dimA && dimB && dimA !== dimB) {
        return { ok: false, type: "enhet", melding: "Enhetene passer ikke sammen: " + a.enhet.navn + " og " + b.enhet.navn + "." };
      }
      var des = b.harOp ? null : b.des;
      if (!likNok(vb, va, des, null) && !likNok(vb, va, null, null)) {
        var vis = a.enhet && b.enhet && a.enhet !== b.enhet ? va / b.enhet.faktor : a.verdi;
        return { ok: false, type: "regnefeil", melding: "Regnefeil: venstre side blir " + formater(vis) + (b.enhet ? " " + b.enhet.navn : "") + ", ikke " + formater(b.verdi) + "." };
      }
    }
    var siste = deler[deler.length - 1];
    var enhetFra = siste.enhet || deler.reduce(function (e, d) { return d.enhet || e; }, null);
    var kandidat = { verdi: siste.verdi, enhet: enhetFra, des: siste.des };
    for (var k = 0; k < steg.length; k++) {
      var s = steg[k], fe = finnEnhet(s.enhet);
      var v = kandidat.verdi;
      if (kandidat.enhet && fe && kandidat.enhet.dim === fe.dim) v = iGrunnenhet(kandidat) / fe.faktor;
      else if (kandidat.enhet && fe && kandidat.enhet.dim !== fe.dim) continue;
      if (likNok(v, s.verdi, kandidat.enhet && fe && kandidat.enhet !== fe ? null : kandidat.des, s.tol)) {
        var merknad = "";
        if (fe && !kandidat.enhet && fe.dim !== "antall") merknad = " Skriv gjerne enheten (" + fe.navn + ").";
        return { ok: true, type: "riktig", treff: k, melding: "Riktig steg." + merknad };
      }
    }
    if (deler.length > 1) return { ok: false, type: "ukjent", melding: "Regnestykket stemmer, men dette tallet trengs ikke her. Se på hva oppgaven spør om." };
    return { ok: false, type: "ukjent", melding: "Dette tallet kommer ikke med i løsningen. Prøv et annet steg, eller ta et hint." };
  }

  var api = { tolk: tolk, sjekkSvar: sjekkSvar, sjekkSteg: sjekkSteg, finnEnhet: finnEnhet, formater: formater, ENHETER: ENHETER };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Sjekk = api;
})(typeof window !== "undefined" ? window : this);
