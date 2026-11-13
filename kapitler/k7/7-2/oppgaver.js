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
  },
  {
    id: "skatt-22-fem",
    niva: "lett",
    tittel: "22 prosent av 5 000",
    tekst: "<p>Skatt på alminnelig inntekt er 22 % i 2026. Hvor mange kroner er 22 % av 5 000 kr?</p>",
    svar: { verdi: 1100, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 0.22 }, { verdi: 1100, enhet: "kr" }],
    hint: ["22 % skrives 0,22.", "\\(5\\,000 \\cdot 0{,}22 = 1\\,100\\)."],
    losning: "<p>\\(5\\,000 \\cdot 0{,}22 = 1\\,100\\) kr. Dette er bare prosenten av beløpet, ikke en ferdig skatteberegning.</p>"
  },
  {
    id: "frikort-rest",
    niva: "lett",
    tittel: "Plass igjen på frikortet",
    tekst: "<p>Frikortgrensen i 2026 er 100 000 kr for hele året. En elev på dekkhotellet har tjent 64 500 kr så langt. Hvor mye kan eleven tjene mer uten å gå over grensen?</p>",
    svar: { verdi: 35500, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 35500, enhet: "kr" }],
    hint: ["Trekk det som er tjent, fra grensen.", "\\(100\\,000 - 64\\,500 = 35\\,500\\)."],
    losning: "<p>\\(100\\,000 - 64\\,500 = 35\\,500\\) kr. Grensen gjelder hele året, ikke én måned.</p>"
  },
  {
    id: "trygd-150",
    niva: "middels",
    tekst: "<p>Årslønn 150 000 kr i 2026. Inntekten er over nedre grense på 99 650 kr. Regn trygdeavgift med 7,6 %.</p>",
    svar: { verdi: 11400, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 7600, enhet: "kr" }, { verdi: 11400, enhet: "kr" }],
    hint: ["Trygdeavgift = årslønn · 0,076.", "7,6 % av 100 000 er 7 600. 150 000 er 1,5 ganger så mye: \\(7\\,600 \\cdot 1{,}5 = 11\\,400\\)."],
    losning: "<p>\\(150\\,000 \\cdot 0{,}076 = 11\\,400\\) kr.</p>"
  },
  {
    id: "trekk-22-16",
    niva: "middels",
    tittel: "Skattekort på 22 prosent",
    tekst: "<p>Bruttolønn 16 000 kr. Skattekortet sier 22 % trekk. Trekket er et forskudd, ikke den endelige skatten.</p>",
    deler: [
      { tekst: "Hvor stort er trekket?", svar: { verdi: 3520, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 12480, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 3520, enhet: "kr" }],
    hint: ["Trekk = brutto · 0,22. Utbetalt = brutto − trekk.", "\\(16\\,000 \\cdot 0{,}22 = 3\\,520\\). \\(16\\,000 - 3\\,520 = 12\\,480\\)."],
    losning: "<p>Trekk: \\(16\\,000 \\cdot 0{,}22 = 3\\,520\\) kr.<br>Utbetalt: \\(12\\,480\\) kr. Det er 78 % av brutto.</p>"
  },
  {
    id: "trinn-250",
    niva: "middels",
    tittel: "Trinnskatt på 250 000",
    tekst: "<p>Personinntekten er 250 000 kr i 2026. Trinnskatt er 1,7 % av den delen som ligger mellom 226 100 kr og 318 300 kr. Her stopper inntekten på 250 000 kr.</p>",
    deler: [
      { tekst: "Hvor mange kroner ligger i trinnet?", svar: { verdi: 23900, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor stor blir trinnskatten?", svar: { verdi: 406.3, enhet: "kr", tol: 0.05 } }
    ],
    steg: [{ verdi: 23900, enhet: "kr" }, { verdi: 406.3, enhet: "kr" }],
    hint: ["Grunnlaget er inntekten minus 226 100. Bare den delen får 1,7 %.", "\\(250\\,000 - 226\\,100 = 23\\,900\\). \\(23\\,900 \\cdot 0{,}017 = 406{,}30\\)."],
    losning: "<p>Grunnlag: \\(23\\,900\\) kr.<br>Trinnskatt: \\(23\\,900 \\cdot 0{,}017 = 406{,}30\\) kr. Inntekten under 226 100 kr har 0 % trinnskatt.</p>"
  },
  {
    id: "ar-300",
    niva: "vanskelig",
    tittel: "Årslønn 300 000 kr i 2026",
    tekst: "<p>Bruk modellen i teorien. Minstefradrag er 46 %, men maksimalt 95 700 kr. Personfradrag er 114 540 kr. Trinnskatt: 1,7 % av inntekten mellom 226 100 og 318 300. Trygdeavgift på lønn er 7,6 %.</p>",
    deler: [
      { tekst: "Hvilket minstefradrag brukes?", svar: { verdi: 95700, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir alminnelig inntekt?", svar: { verdi: 89760, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir skatt med 22 %?", svar: { verdi: 19747.2, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva blir trinnskatten?", svar: { verdi: 1256.3, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva blir trygdeavgiften?", svar: { verdi: 22800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir sum skatt og avgift?", svar: { verdi: 43803.5, enhet: "kr", tol: 0.1 } }
    ],
    steg: [{ verdi: 138000, enhet: "kr" }, { verdi: 95700, enhet: "kr" }, { verdi: 89760, enhet: "kr" }, { verdi: 73900, enhet: "kr" }, { verdi: 19747.2, enhet: "kr" }, { verdi: 1256.3, enhet: "kr" }, { verdi: 22800, enhet: "kr" }],
    hint: ["46 % av 300 000 er 138 000, som er over taket. Bruk 95 700.", "Alminnelig inntekt: \\(300\\,000 - 95\\,700 - 114\\,540 = 89\\,760\\). Trinn: \\(300\\,000 - 226\\,100 = 73\\,900\\), ganget med 0,017."],
    losning: "<p>Minstefradrag 95 700 kr. Alminnelig inntekt \\(89\\,760\\) kr. Skatt \\(89\\,760 \\cdot 0{,}22 = 19\\,747{,}20\\) kr.<br>Trinnskatt: \\(73\\,900 \\cdot 0{,}017 = 1\\,256{,}30\\) kr.<br>Trygdeavgift: \\(300\\,000 \\cdot 0{,}076 = 22\\,800\\) kr.<br>Sum: \\(19\\,747{,}20 + 1\\,256{,}30 + 22\\,800 = 43\\,803{,}50\\) kr.</p>"
  },
  {
    id: "ar-17220",
    niva: "vanskelig",
    tittel: "Tolv måneder med 17 220 kr",
    tekst: "<p>Månedslønna er 17 220 kr i 12 måneder. Minstefradrag er 46 %, men maksimalt 95 700 kr. Personfradrag er 114 540 kr. Er fradragene større enn lønna, er alminnelig inntekt 0 kr i denne modellen. Trygdeavgift på lønn er 7,6 %.</p>",
    deler: [
      { tekst: "Hva er årslønna?", svar: { verdi: 206640, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvilket minstefradrag brukes?", svar: { verdi: 95054.4, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva blir alminnelig inntekt?", svar: { verdi: 0, enhet: "kr", tol: 0 } },
      { tekst: "Hva blir trygdeavgiften?", svar: { verdi: 15704.64, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 206640, enhet: "kr" }, { verdi: 95054.4, enhet: "kr" }, { verdi: 209594.4, enhet: "kr" }, { verdi: 0, enhet: "kr" }, { verdi: 15704.64, enhet: "kr" }],
    hint: ["Årslønn først. 46 % av den er under taket på 95 700, så prosenten brukes.", "Minstefradrag pluss personfradrag er \\(95\\,054{,}40 + 114\\,540 = 209\\,594{,}40\\), som er mer enn 206 640. Alminnelig inntekt blir 0. Trygd: \\(206\\,640 \\cdot 0{,}076\\)."],
    losning: "<p>Årslønn: \\(12 \\cdot 17\\,220 = 206\\,640\\) kr.<br>Minstefradrag: \\(206\\,640 \\cdot 0{,}46 = 95\\,054{,}40\\) kr.<br>Fradragene er større enn lønna, så alminnelig inntekt er 0 kr og skatt med 22 % er 0 kr.<br>Trygdeavgift: \\(206\\,640 \\cdot 0{,}076 = 15\\,704{,}64\\) kr.</p>"
  }
]);
