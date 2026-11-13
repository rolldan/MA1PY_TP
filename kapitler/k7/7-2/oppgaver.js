Bok.oppgaver([
  {
    id: "trekk-17220",
    niva: "lett",
    tittel: "Fast månedslønn",
    tekst: "<p>Bruttolønn 17 220 kr. Skattekortet sier 25 % trekk.</p>",
    deler: [
      { tekst: "Hvor stort er trekket?", svar: { verdi: 4305, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 12915, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Trekk = brutto · 0,25. Utbetalt = brutto − trekk.", "\\(17\\,220 : 4 = 4\\,305\\)."],
    losning: "<p>Trekk: \\(17\\,220 \\cdot 0{,}25 = 4\\,305\\) kr.<br>Utbetalt: \\(17\\,220 - 4\\,305 = 12\\,915\\) kr.</p>"
  },
  {
    id: "trygd-10000",
    niva: "lett",
    tekst: "<p>Trygdeavgift på lønn er 7,6 % i 2026. Hvor mange kroner er 7,6 % av 10 000 kr?</p>",
    svar: { verdi: 760, enhet: "kr", tol: 0.5 },
    hint: ["7,6 % = 0,076.", "\\(10\\,000 \\cdot 0{,}076 = 760\\)."],
    losning: "<p>\\(10\\,000 \\cdot 0{,}076 = 760\\) kr.</p>"
  },
  {
    id: "frikort",
    niva: "lett",
    tittel: "Frikort 2026",
    tekst: "<p>Frikortgrensen i 2026 er 100 000 kr for hele året. En elev tjener 9 000 kr i måneden i åtte måneder på dekkhotellet. Hva stemmer?</p>",
    stegForSteg: false,
    svar: { valg: ["Årslønna er 72 000 kr, under frikortgrensen", "Årslønna er 72 000 kr, over frikortgrensen", "Årslønna er 108 000 kr, over frikortgrensen"], riktig: 0 },
    hint: ["Gang månedslønn med antall måneder.", "\\(9\\,000 \\cdot 8 = 72\\,000\\), som er under 100 000."],
    losning: "<p>\\(9\\,000 \\cdot 8 = 72\\,000\\) kr. Det er under frikortgrensen på 100 000 kr i 2026.</p>"
  },
  {
    id: "slip-20",
    niva: "middels",
    tekst: "<p>Bruttolønn 20 000 kr, der 1 500 kr er overtid. Trekket er 20 %. Overtid skattlegges sammen med resten av lønna.</p>",
    deler: [
      { tekst: "Hvor stort er trekket?", svar: { verdi: 4000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 16000, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Regn trekket av hele bruttobeløpet, ikke bare av den ordinære lønna.", "\\(20\\,000 \\cdot 0{,}20 = 4\\,000\\)."],
    losning: "<p>Trekk: \\(20\\,000 \\cdot 0{,}20 = 4\\,000\\) kr.<br>Utbetalt: \\(16\\,000\\) kr.</p>"
  },
  {
    id: "trygd-200000",
    niva: "middels",
    tekst: "<p>Årslønn 200 000 kr i 2026. Inntekten er over nedre grense for trygdeavgift. Regn trygdeavgift med 7,6 %.</p>",
    svar: { verdi: 15200, enhet: "kr", tol: 0.5 },
    hint: ["Trygdeavgift = årslønn · 0,076.", "\\(200\\,000 \\cdot 0{,}076\\). 7,6 % av 100 000 er 7 600, så av 200 000 er det det dobbelte."],
    losning: "<p>\\(200\\,000 \\cdot 0{,}076 = 15\\,200\\) kr.</p>"
  },
  {
    id: "feil-trekk",
    niva: "middels",
    tittel: "Hvem regnet feil?",
    tekst: "<p>Brutto 18 000 kr og 25 % trekk. En lærling sier at utbetalt lønn er 4 500 kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er riktig utbetalt lønn?", svar: { verdi: 13500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva var feilen?", svar: { valg: ["Han oppga trekket som om det var utbetalt lønn", "Han glemte å trekke skatt", "Han brukte 7,6 % i stedet for 25 %"], riktig: 0 } }
    ],
    hint: ["25 % av 18 000 er trekket. Utbetalt er resten.", "\\(18\\,000 \\cdot 0{,}25 = 4\\,500\\) er trekket. \\(18\\,000 - 4\\,500 = 13\\,500\\)."],
    losning: "<p>Trekk: 4 500 kr. Utbetalt: \\(18\\,000 \\cdot 0{,}75 = 13\\,500\\) kr. Lærlingen byttet om trekk og utbetaling.</p>"
  },
  {
    id: "ar-450",
    niva: "vanskelig",
    tittel: "Årslønn 450 000 kr i 2026",
    tekst: "<p>Bruk modellen i teorien. Minstefradrag er 46 %, men maksimalt 95 700 kr. Personfradrag er 114 540 kr. Trinnskatt: 1,7 % mellom 226 100 og 318 300, og 4,0 % mellom 318 300 og 450 000.</p>",
    deler: [
      { tekst: "Hvilket minstefradrag brukes?", svar: { verdi: 95700, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir alminnelig inntekt?", svar: { verdi: 239760, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir skatt med 22 %?", svar: { verdi: 52747.2, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva blir trinnskatten?", svar: { verdi: 6835.4, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva blir trygdeavgiften?", svar: { verdi: 34200, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir sum skatt og avgift?", svar: { verdi: 93782.6, enhet: "kr", tol: 0.1 } }
    ],
    hint: ["46 % av 450 000 er mer enn 95 700, så taket brukes.", "Alminnelig inntekt: \\(450\\,000 - 95\\,700 - 114\\,540\\). Trinn 1: \\(92\\,200 \\cdot 0{,}017\\). Trinn 2: \\(131\\,700 \\cdot 0{,}04\\)."],
    losning: "<p>Minstefradrag 95 700 kr. Alminnelig inntekt 239 760 kr. Skatt 52 747,20 kr.<br>Trinnskatt: \\(1\\,567{,}40 + 5\\,268 = 6\\,835{,}40\\) kr.<br>Trygdeavgift 34 200 kr.<br>Sum \\(93\\,782{,}60\\) kr, omtrent 20,8 % av brutto.</p>"
  },
  {
    id: "lonnsslipp-verksted",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Lærlingens første lønnsslipp",
    utstyr: "Lønnsslipp på papir eller i regneark, kalkulator",
    hms: "Lønnstall er personlige. Bruk eksempelet her, ikke en ekte lønnsslipp fra en ansatt, uten lov.",
    tekst: "<p>Brutto 17 220 kr og 25 % trekk. I 2026 er trygdeavgift på lønn 7,6 %. For denne årslønna blir skatt på alminnelig inntekt 0 kr i modellen i teorien. Sammenlign trekket med trygdeavgiften for én måned.</p>",
    deler: [
      { tekst: "Hva utbetales når trekket er 25 %?", svar: { verdi: 12915, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er 7,6 % av 17 220 kr?", svar: { verdi: 1308.72, enhet: "kr", tol: 0.01 } },
      { tekst: "Hvor mange kroner trekkes mer enn trygdeavgiften?", svar: { verdi: 2996.28, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["Regn trekket først: en firedel av 17 220.", "\\(17\\,220 \\cdot 0{,}076 = 1\\,308{,}72\\). Differansen er \\(4\\,305 - 1\\,308{,}72\\)."],
    losning: "<p>Trekk 4 305 kr, utbetalt 12 915 kr.<br>Trygdeavgift: \\(17\\,220 \\cdot 0{,}076 = 1\\,308{,}72\\) kr.<br>For mye trekk denne måneden: \\(4\\,305 - 1\\,308{,}72 = 2\\,996{,}28\\) kr. Det er et overslag for måneden. Den endelige avgiften regnes av året.</p>"
  },
  {
    id: "rep-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>En pakke med hansker koster 800 kr uten mva. Hvor mange kroner er 25 % mva?</p>",
    svar: { verdi: 200, enhet: "kr", tol: 0.5 },
    hint: ["25 % er en firedel.", "\\(800 : 4 = 200\\)."],
    losning: "<p>\\(800 \\cdot 0{,}25 = 200\\) kr.</p>"
  },
  {
    id: "rep-beholder",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Du beholder 75 % av 2 000 kr. Hvor mange kroner er det?</p>",
    svar: { verdi: 1500, enhet: "kr", tol: 0.5 },
    hint: ["75 % = 0,75. Eller tre firedeler.", "\\(2\\,000 \\cdot 0{,}75 = 1\\,500\\)."],
    losning: "<p>\\(2\\,000 \\cdot 0{,}75 = 1\\,500\\) kr.</p>"
  },
  {
    id: "eksamen-netto",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>Bruttolønn 15 000 kr. Trekket er 20 %.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor stort er trekket?", svar: { verdi: 3000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 12000, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["20 % er en femtedel.", "\\(15\\,000 : 5 = 3\\,000\\). Utbetalt: \\(15\\,000 - 3\\,000\\)."],
    losning: "<p>Trekk: 3 000 kr. Utbetalt: 12 000 kr.</p>"
  }
]);
