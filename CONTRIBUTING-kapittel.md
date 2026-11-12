# Slik bygger du et kapittel

Spesifikasjon for alle som legger inn kapitler i nettboka. Les den før du starter. Rammeverket (`assets/`, `index.html`, `ukeplan.html`, `framdrift.html`) er felles, og kapitler skal **ikke** endre det. Da kan kapitlene flettes inn hver for seg uten konflikter.

Ferdig eksempel: `kapitler/k1/` (Verktøykassen). Mal du kan kopiere: `kapitler/_mal/`.

## 1. Regler som hindrer flettekonflikter

1. Et kapittel eier **bare** mappa `kapitler/kN/`, der N er kapittelnummeret fra årsplanen (0–10). Ikke endre filer utenfor den mappa.
2. Kapitlet registreres automatisk: forsiden prøver å hente `kapitler/kN/kapittel.json` for N = 0 til 10. Finnes fila, vises kapitlet med lenker. Ellers står det «kommer». Det finnes ingen felles kapittelliste å redigere.
3. Tittel, uker, kompetansemål og farge for alle 11 kapitler ligger allerede i `assets/js/plan.js`. Fargen settes automatisk ut fra `data-kapittel`.
4. Trenger du en ny komponent, en ny enhet i stegsjekken eller en endring i CSS, så skriv det i PR-beskrivelsen i stedet for å endre `assets/`. Unntak: en enhet som mangler i `assets/js/sjekk.js` kan legges til med én linje i lista `ENHETER`, i en egen PR.

## 2. Mappestruktur

```
kapitler/kN/
  kapittel.json          metadata: tittel, delkapitler, «Jeg kan», verkstedoppdrag
  index.html             kapittelsiden (tomt skall, bygges fra kapittel.json)
  N-1/                   ett delkapittel; mappenavn = delkapittelnummer med bindestrek
    tavle.html           lysbildeserie for projektor (60-minuttersøkta)
    teori.html           teoriside eleven leser
    oppgaver.html        tomt skall
    oppgaver.js          oppgavedata
    verksted.html        verkstedkort (75-minuttersøkta, utskriftsvennlig)
  N-2/ …
  bilder/                valgfritt: bilder og SVG-er for kapitlet
```

Navneregler:
- kapittelmappe `k0` … `k10`, delkapittelmappe `1-1`, `1-2`, `10-3` (aldri `1.1`);
- sidefilene heter nøyaktig `tavle.html`, `teori.html`, `oppgaver.html`, `oppgaver.js`, `verksted.html`;
- filnavn med små bokstaver, uten æ, ø, å og mellomrom (`bilder/dreiebenk-snitt.svg`);
- oppgave-`id` med små bokstaver, tall og bindestrek, unik innen delkapitlet (`skruer`, `ohm-led-bar`).

Et delkapittel som ikke trenger alle fire sidene, kan oppgi `"sider": ["teori", "oppgaver"]` i `kapittel.json`.

## 3. kapittel.json

```json
{
  "nr": 5,
  "tittel": "Formler fra verkstedet",
  "status": "ferdig",
  "ingress": "Vises på forsiden (1–2 setninger).",
  "handlerOm": "2–3 setninger med verkstedcase, øverst på kapittelsiden.",
  "byggerPa": [{ "tekst": "4.5 Sammensatte enheter", "lenke": "kapitler/k4/4-5/teori.html" }],
  "lenkerVidere": [{ "tekst": "Kapittel 6: Geometri" }],
  "delkapitler": [
    { "nr": "5.1", "tittel": "Tolke en formel", "formel": "\\(P = 250 + 40h\\)", "uke": "1" }
  ],
  "jegKan": ["Jeg kan sette inn tall i en formel."],
  "verkstedoppdrag": [
    { "merke": "V", "tittel": "Ohms lov i bilen", "tekst": "Én setning.", "lenke": "5-3/verksted.html" }
  ]
}
```

- `lenke` i `byggerPa`/`lenkerVidere` er relativ til rota av nettstedet. `lenke` i `verkstedoppdrag` er relativ til kapittelmappa.
- `merke` er `V` (verksted), `K` (klasserom) eller `V/K`.
- Matematikk i JSON: dobbel backslash, `"\\(v_c\\)"`.
- Lenker til et kapittel som ikke er bygd ennå: utelat `lenke`.

## 4. Sidene

Alle sider har samme hode. Stien til `assets/` er `../../../` fra et delkapittel og `../../` fra `index.html`:

```html
<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Teori · 5.3 Ohms lov og effekt</title>
<link rel="stylesheet" href="../../../assets/css/bok.css">
<script defer src="../../../assets/js/bok.js"></script>
</head>
<body data-side="teori" data-kapittel="5" data-del="5.3">
```

`bok.js` laster selv font (Atkinson Hyperlegible), KaTeX, plandata og stegsjekk, og lager topplinje, faner (Tavle · Teori · Oppgaver · Verkstedkort), brødsmuler og Forrige · Innhold · Neste. Du skriver bare innholdet.

`data-side` er én av `tavle`, `teori`, `oppgaver`, `verksted` eller `kapittel` (bare `index.html`).

### Matematikk

KaTeX med `\( … \)` inline og `\[ … \]` som blokk. Desimalkomma skrives `{,}`: `\(0{,}795\)`. Enheter skrives `\text{mm}` inne i matematikk, eller som vanlig tekst. Bruk `\cdot` for gange og `:` eller brøk for dele.

### Tavle (`tavle.html`)

3–5 lysbilder. Hvert lysbilde følger mønsteret situasjon → undre → steg → regel → se også.

```html
<div class="tavle">
  <section class="lysbilde" data-tittel="Kort fanenavn">
    <h2>Overskrift</h2>
    <div class="figur"> <svg …>…<g data-vis-fra="2">vises fra steg 2</g></svg> </div>
    <div class="tekst">
      <p>Situasjon fra verkstedet.</p>
      <div class="undre" data-hint="Lite hint" data-sekunder="30">Undrespørsmål?</div>
      <p class="steg">Første steg.</p>
      <p class="steg">Andre steg.</p>
      <div class="regel steg"><p class="regel-tittel">Regel</p><p>\(U = R \cdot I\)</p></div>
      <p class="se-ogsa steg"><a href="…">Lenke</a></p>
    </div>
  </section>
</div>
```

- Alt med klassen `steg` avsløres ett om gangen (→, mellomrom, klikk på figuren eller «Neste steg»).
- `data-vis-fra="n"` på et SVG-element gjør at det vises først når n steg er avslørt. Slik lager du enkle animasjoner.
- «Tenketid»-knappen, hint og «Uklart for meg»-telleren lages automatisk.
- Lysbilde uten `.figur` får teksten over hele bredden.
- Bruk `var(--kap)` som farge i SVG for kapittelfargen. Gi SVG-en `role="img"` og en `aria-label`.

### Teori (`teori.html`)

Blokkene i fast rekkefølge. Alle er valgfrie, men bruk dem i denne rekkefølgen:

| Blokk | Markup |
|---|---|
| Etikett, tittel, ingress | `<p class="etikett">FORMLER · FRA VERKSTEDET</p><h1>…</h1><p class="ingress">…</p>` |
| Læringsmål | `<ul class="laeringsmal"><li>…</li></ul>` (overskriften «Du skal kunne» kommer automatisk) |
| Prosesskjede | `<ol class="kjede"><li>mål</li><li>regn om</li>…</ol>` |
| Fra verkstedet | `<div class="fra-verkstedet"><p>…</p></div>` |
| Forklaring | `<h2>Forklaring</h2>` og vanlig tekst, maks én skjermside |
| Regelboks | `<div class="regel"><h3>Regel</h3>…</div>` |
| Eksempel | `<div class="eksempel"><h3>…</h3><p>…</p><ol class="steg-liste"><li class="steg">…</li></ol></div>`. Knappene «Neste steg», «Vis alle» og «Start på nytt» kommer automatisk |
| Vanlig feil | `<div class="vanlig-feil"><p>…</p></div>` |
| Underveisoppgave | `<div class="underveis"><p>…</p><div class="fasit">…</div><div class="losning">…</div></div>` |
| Verktøy | `<div class="verktoy">…</div>` (GeoGebra-iframe, regnearkmal, ISO-tabell) |

Tabeller: `<div class="tabell-rull"><table>…</table></div>` slik at de kan rulles på mobil.

### Oppgaver (`oppgaver.html` + `oppgaver.js`)

`oppgaver.html` er et tomt skall (kopier fra malen) som laster `oppgaver.js` etter `bok.js`:

```html
<script defer src="../../../assets/js/bok.js"></script>
<script defer src="oppgaver.js"></script>
…
<main class="innhold"><p class="etikett">Oppgaver · 5.3</p><h1>Ohms lov og effekt</h1><div id="oppgaver"></div></main>
```

`oppgaver.js` kaller `Bok.oppgaver([...])` med en liste. Oppgavene nummereres automatisk (5.3.1, 5.3.2 …) og grupperes i Lett, Middels, Vanskelig, Verkstedoppgave, Blandet repetisjon og Eksamensstil.

```js
Bok.oppgaver([
  {
    id: "led-bar",                 // påkrevd, unik i delkapitlet, endres aldri (framdriften lagres på id)
    niva: "lett",                  // påkrevd: "lett" | "middels" | "vanskelig"
    type: "verksted",              // valgfri: "verksted" | "repetisjon" | "eksamen"
    merke: "V",                    // for verksted: "V" | "V/K"
    fra: "kapittel 3",             // for repetisjon
    eksamensdel: "Del 1 (uten hjelpemidler)", // for eksamen
    tittel: "Kort tittel",         // valgfri
    tekst: "<p>Oppgavetekst med \\(I = U/R\\).</p>",
    utstyr: "Multimeter",          // valgfri, vises for verkstedoppgaver
    hms: "Slå av tenninga",        // valgfri
    steg: [{ verdi: 12, enhet: "V" }],   // mellomsvar som godtas i «Løs steg for steg»
    stegForSteg: false,            // valgfri: skru av stegboksen (f.eks. drill)
    svar: { verdi: 5, enhet: "A", tol: 0.05 }, // ett svar …
    deler: [                       // … eller deloppgaver a), b), c)
      { tekst: "Strømmen?", svar: { verdi: 5, enhet: "A" } },
      { tekst: "Hvilken sikring?", svar: { valg: ["10 A", "15 A", "20 A"], riktig: 0, forklaring: "…" } },
      { tekst: "Forklar.", svar: { fritekst: true, fasit: "<p>…</p>" } }
    ],
    hint: ["Hint 1: hva er formelen?", "Hint 2: første regnesteg."],
    losning: "<p>Løsningsforslag, vises etter to forsøk.</p>"
  }
]);
```

Svar og stegsjekk:
- `verdi` er alltid et JS-tall med punktum (`0.795`). Eleven skriver komma.
- `enhet` må finnes i `ENHETER` i `assets/js/sjekk.js` (mm, cm, m, µm, tommer, mm², m², cm³, L, dl, kg, g, s, min, h, kr, %, ‰, °C, N, Nm, m/min, m/s, km/h, knop, r/min, V, A, Ω, W, kW, hk, kWh, Pa, kPa, bar, psi, kg/m, g/cm³, kg/dm³, L/min, stk …). Eleven får beskjed om feil enhet, og om riktig verdi i feil enhet («oppgaven spør etter mm»). Uten enhet godtas svaret med en påminnelse.
- Uten `tol` godtas svar som er riktig avrundet til de desimalene eleven skriver, så lenge feilen er under 1 %. Bruk `tol` (absolutt, i fasitens enhet) når oppgaven krever noe annet, for eksempel `tol: 0.5` for «avrund til hele mm» eller `tol: 0` for eksakte toleransesvar.
- `steg` er tallene som hører til underveis. Svarene i `svar`/`deler` godtas automatisk som steg. Stegsjekken sjekker også at regnestykket på linja stemmer («Regnefeil: venstre side blir …»).
- To hint per oppgave: hint 1 peker på metoden, hint 2 gir første regnesteg.
- Status (ikke prøvd, påbegynt, løst med hint, løst på egen hånd) og «Oppsummer timen» kommer automatisk.

Krav per oppgaveside: minst to Lett, to Middels og én Vanskelig, én verkstedoppgave, én eller to blandet repetisjon (fra tidligere kapitler) og én i eksamensstil.

### Verkstedkort (`verksted.html`)

```html
<main class="innhold"><article class="verkstedkort">
  <div class="kort-hode"><div><p class="etikett">Verkstedkort · 5.3 · [V] · 75 min</p><h1>Ohms lov i bilen</h1></div></div>
  <section><h2>Mål</h2>…</section>
  <section><h2>Utstyr og HMS</h2><ul>…</ul><p class="hms">…</p></section>
  <section><h2>Tidsplan</h2><table class="tidsplan">… fem faser etter 75-minuttersmalen …</table></section>
  <section><h2>Regn ut før du kapper</h2>
    <div class="niva-blokk"><h3>● Lett</h3>…</div>
    <div class="niva-blokk"><h3>●● Middels</h3>…</div>
    <div class="niva-blokk"><h3>●●● Vanskelig</h3>…</div>
    <div class="vis-fasit"><div class="fasit">…</div></div>
  </section>
  <section><h2>Måleskjema</h2><table class="maleskjema">… <td class="fyll"></td> …</table></section>
  <section><h2>Stemmer beregningene?</h2>…</section>
  <section><h2>Egenvurdering</h2><ul class="stjerner-liste"><li>Jeg målte nøyaktig</li></ul></section>
  <section><h2>Rubrikk</h2><table class="rubrikk">… lav / middels / høy …</table></section>
</article></main>
```

- `td.fyll` blir et felt eleven kan skrive i (lagres lokalt). `ul.stjerner-liste` blir rader med fem stjerner.
- «Skriv ut A4» kommer automatisk. Ved utskrift skjules navigasjon, knapper og fasit.
- Rubrikk brukes for prosjektene (kapittel 8 og 9) og kan utelates ellers.

## 5. Innhold og språk

- Bokmål. Korte setninger som kan leses opp. Elevene er vg1 TIF.
- Kontekst fra verkstedet: dreiebenk, søyleboremaskin, sveis, bilverksted, lager, makerspace.
- Følg årsplanen i prosjektstoret (`docs/arsplan-1py.md`) for delkapitler, verkstedopplegg og **rettede formler** (kapittel 7 i planen: \(F = M/a\), \(I = U/R\), moment i Nm, \(v_c\) i m/min, 1 GB = 1000 MB i SI).
- Lærerens oppgaver kan gjenbrukes. Forlagsmateriale og eksamensoppgaver brukes bare som inspirasjon, ikke ordrett.
- **Kontroller hvert tall** i oppgaver, hint, løsninger og fasit. Regn alle oppgaver på nytt før PR.

## 6. Før du lager PR

```bash
node tester/sjekk.test.js         # stegsjekken virker
node tester/sjekk-kapittel.js 5   # kapittel 5: filer, data-attributter, oppgavedata og enheter
python3 -m http.server 8000       # åpne http://localhost:8000/ og klikk gjennom
```

`sjekk-kapittel.js` må gi 0 feil. Åpne sidene i nettleseren og sjekk at matematikken vises (ingen røde KaTeX-feil), at tavla går gjennom alle steg, og at hver oppgave kan løses med fasitsvaret.

PR-en skal bare inneholde `kapitler/kN/`. Ønsker om endringer i rammeverket skrives i PR-beskrivelsen.
