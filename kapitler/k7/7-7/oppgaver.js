Bok.oppgaver([
  {
    id: "sikker",
    niva: "lett",
    tittel: "Sikker oppgave",
    tekst: "<p>8 timer à 150 kr. Hva er bruttolønna?</p>",
    svar: { verdi: 1200, enhet: "kr", tol: 0.5 },
    hint: ["\\(8 \\cdot 100\\) og \\(8 \\cdot 50\\).", "\\(800 + 400 = 1\\,200\\)."],
    losning: "<p>\\(8 \\cdot 150 = 1\\,200\\) kr.</p>"
  },
  {
    id: "minutter",
    niva: "lett",
    tekst: "<p>Hvor mange minutter er 0,2 timer?</p>",
    svar: { verdi: 12, enhet: "min", tol: 0.5 },
    hint: ["1 time = 60 minutter.", "\\(0{,}2 \\cdot 60 = 12\\)."],
    losning: "<p>\\(0{,}2 \\cdot 60 = 12\\) minutter. 5,2 timer er derfor 5 timer og 12 minutter.</p>"
  },
  {
    id: "felle-tid",
    niva: "lett",
    tekst: "<p>En reise tar 5,2 timer. Hvilken oppdeling er riktig?</p>",
    stegForSteg: false,
    svar: { valg: ["5 timer og 20 minutter", "5 timer og 12 minutter", "5 timer og 2 minutter"], riktig: 1 },
    hint: ["Desimalen 0,2 er to tideler av en time, ikke 20 minutter.", "\\(0{,}2 \\cdot 60 = 12\\)."],
    losning: "<p>5 timer og 12 minutter. 20 minutter hadde vært \\(20/60 \\approx 0{,}33\\) timer, altså omtrent 5,3 timer.</p>"
  },
  {
    id: "trekk-25",
    niva: "middels",
    tekst: "<p>Bruttolønn 8 000 kr. Trekket er 25 %.</p>",
    deler: [
      { tekst: "Hvor stort er trekket?", svar: { verdi: 2000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 6000, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["25 % er en firedel.", "\\(8\\,000 : 4 = 2\\,000\\). Utbetalt: \\(8\\,000 - 2\\,000\\)."],
    losning: "<p>Trekk: 2 000 kr. Utbetalt: 6 000 kr.</p>"
  },
  {
    id: "larling-tentamen",
    niva: "middels",
    tekst: "<p>Fagarbeideren har 200 kr i timen. Lærlingen er i andre halvår og skal ha 40 %.</p>",
    deler: [
      { tekst: "Hva er lærlingens timelønn?", svar: { verdi: 80, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir betalingen for én overtidstime med 50 % tillegg?", svar: { verdi: 120, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["40 % av 200. Deretter gang lærlinglønna med 1,5.", "\\(200 \\cdot 0{,}40 = 80\\). \\(80 \\cdot 1{,}5 = 120\\)."],
    losning: "<p>Timelønn: 80 kr. Overtidstime: \\(80 \\cdot 1{,}5 = 120\\) kr.</p>"
  },
  {
    id: "trygd-50000",
    niva: "middels",
    tekst: "<p>Trygdeavgift på lønn er 7,6 % i 2026. Regn 7,6 % av 50 000 kr.</p>",
    svar: { verdi: 3800, enhet: "kr", tol: 0.5 },
    hint: ["7,6 % av 100 er 7,60. 50 000 er 500 ganger 100.", "\\(50\\,000 \\cdot 0{,}076 = 3\\,800\\)."],
    losning: "<p>\\(50\\,000 \\cdot 0{,}076 = 3\\,800\\) kr.</p>"
  },
  {
    id: "blandet",
    niva: "vanskelig",
    tittel: "Lønn og lån på samme ark",
    tekst: "<p>37,5 timer à 200 kr. I tillegg et serielån: restgjeld 40 000 kr, rente 5 %, avdrag 10 000 kr dette året. Terminene på et annet lån er 4 000 kr, 4 000 kr og 4 000 kr.</p>",
    deler: [
      { tekst: "Hva er bruttolønna for timene?", svar: { verdi: 7500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er renta på serielånet dette året?", svar: { verdi: 2000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er terminbeløpet på serielånet dette året?", svar: { verdi: 12000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva slags lån har tre like terminbeløp på 4 000 kr?", svar: { valg: ["Serielån", "Annuitetslån", "Kredittkort uten rente"], riktig: 1 } }
    ],
    hint: ["Lønn: \\(37{,}5 \\cdot 200\\). Rente: \\(40\\,000 \\cdot 0{,}05\\).", "Terminbeløp = avdrag + rente. Like terminbeløp er annuitet."],
    losning: "<p>Lønn: \\(37{,}5 \\cdot 200 = 7\\,500\\) kr.<br>Rente: 2 000 kr. Termin: \\(10\\,000 + 2\\,000 = 12\\,000\\) kr.<br>Tre like terminbeløp er et annuitetslån.</p>"
  },
  {
    id: "stasjon",
    type: "verksted",
    merke: "K",
    niva: "lett",
    tittel: "Stasjon: sikker lønn",
    utstyr: "Papir og blyant. Kalkulator bare på del 2-stasjonen.",
    hms: "Stasjonene står i klasserommet. Ingen maskiner.",
    tekst: "<p>Del 1-stasjon. 6 timer à 200 kr, og trekket er 25 %.</p>",
    deler: [
      { tekst: "Bruttolønn?", svar: { verdi: 1200, enhet: "kr", tol: 0.5 } },
      { tekst: "Trekk?", svar: { verdi: 300, enhet: "kr", tol: 0.5 } },
      { tekst: "Utbetalt?", svar: { verdi: 900, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["\\(6 \\cdot 200\\). 25 % er en firedel.", "Trekk 300 kr fra 1 200 kr."],
    losning: "<p>Brutto 1 200 kr. Trekk 300 kr. Utbetalt 900 kr.</p>"
  },
  {
    id: "rep-strom",
    type: "repetisjon",
    fra: "kapittel 5",
    niva: "middels",
    tekst: "<p>En LED-bar har motstand 2,4 Ω og spenning 12 V. Strømmen er \\(I = U/R\\). Hvor mange ampere er det?</p>",
    svar: { verdi: 5, enhet: "A", tol: 0.05 },
    hint: ["Del spenning på motstand, ikke omvendt.", "\\(12 / 2{,}4 = 5\\)."],
    losning: "<p>\\(I = 12 / 2{,}4 = 5\\) A. Ikke \\(2{,}4 / 12\\).</p>"
  },
  {
    id: "rep-desimaltimer",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>Et oppdrag tar 2,5 timer. Hvor mange minutter er det?</p>",
    svar: { verdi: 150, enhet: "min", tol: 0.5 },
    hint: ["2 timer er 120 minutter. 0,5 time er 30 minutter.", "\\(2{,}5 \\cdot 60 = 150\\)."],
    losning: "<p>\\(2{,}5 \\cdot 60 = 150\\) minutter, altså 2 timer og 30 minutter.</p>"
  },
  {
    id: "eksamen-del1",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En fagarbeider jobber 6,5 timer à 160 kr og 2 overtidstimer med 50 % tillegg.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er betalingen for én overtidstime?", svar: { verdi: 240, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bruttolønna?", svar: { verdi: 1520, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Overtidstime: \\(160 \\cdot 1{,}5\\).", "Ordinært: \\(6{,}5 \\cdot 160 = 1\\,040\\). Overtid: \\(2 \\cdot 240 = 480\\)."],
    losning: "<p>Overtidstime: 240 kr.<br>Ordinært: \\(6{,}5 \\cdot 160 = 1\\,040\\) kr.<br>Overtid: 480 kr.<br>Brutto: \\(1\\,040 + 480 = 1\\,520\\) kr.</p>"
  },
  {
    id: "sikker-140",
    niva: "lett",
    tittel: "Start med denne",
    tekst: "<p>10 timer à 140 kr. Hva er bruttolønna?</p>",
    svar: { verdi: 1400, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 1400, enhet: "kr" }],
    hint: ["\\(10 \\cdot 100\\) og \\(10 \\cdot 40\\).", "\\(1\\,000 + 400 = 1\\,400\\)."],
    losning: "<p>\\(10 \\cdot 140 = 1\\,400\\) kr.</p>"
  },
  {
    id: "minutter-125",
    niva: "lett",
    tekst: "<p>Del 1. Gjør om desimaltimer uten kalkulator.</p>",
    deler: [
      { tekst: "Hvor mange minutter er 0,5 timer?", svar: { verdi: 30, enhet: "min", tol: 0.5 } },
      { tekst: "Hvor mange minutter er 1,25 timer?", svar: { verdi: 75, enhet: "min", tol: 0.5 } }
    ],
    steg: [{ verdi: 30, enhet: "min" }, { verdi: 15, enhet: "min" }, { verdi: 75, enhet: "min" }],
    hint: ["1 time = 60 minutter. 0,25 time er et kvarter.", "\\(0{,}5 \\cdot 60 = 30\\). \\(1{,}25 \\cdot 60 = 75\\)."],
    losning: "<p>0,5 timer = 30 minutter.<br>1,25 timer = 60 + 15 = 75 minutter, altså 1 time og 15 minutter.</p>"
  },
  {
    id: "under-frikort",
    niva: "lett",
    tittel: "Frikort før tentamen",
    tekst: "<p>Frikortgrensen i 2026 er 100 000 kr for hele året. En elev tjener 8 500 kr i måneden i 10 måneder.</p>",
    deler: [
      { tekst: "Hva er årslønna?", svar: { verdi: 85000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner er årslønna under grensen?", svar: { verdi: 15000, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 85000, enhet: "kr" }, { verdi: 15000, enhet: "kr" }],
    hint: ["Gang månedslønn med antall måneder, og sammenlign med 100 000.", "\\(8\\,500 \\cdot 10 = 85\\,000\\). \\(100\\,000 - 85\\,000 = 15\\,000\\)."],
    losning: "<p>Årslønn: \\(85\\,000\\) kr.<br>Under grensen: \\(15\\,000\\) kr.</p>"
  },
  {
    id: "trygd-25",
    niva: "middels",
    tekst: "<p>Trygdeavgift på lønn er 7,6 % i 2026. Regn 7,6 % av 25 000 kr. Inntekten er over nedre grense når dette er en del av en større årslønn.</p>",
    svar: { verdi: 1900, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 1900, enhet: "kr" }],
    hint: ["7,6 % = 0,076.", "\\(25\\,000 \\cdot 0{,}076 = 1\\,900\\)."],
    losning: "<p>\\(25\\,000 \\cdot 0{,}076 = 1\\,900\\) kr.</p>"
  },
  {
    id: "bsu-plass",
    niva: "middels",
    tittel: "BSU i 2026",
    tekst: "<p>Du setter inn 18 500 kr på BSU i 2026. Årsgrensen er 27 500 kr, og fradraget er 10 %. Du betaler nok skatt og eier ikke bolig.</p>",
    deler: [
      { tekst: "Hvor stort blir skattefradraget?", svar: { verdi: 1850, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye kan du sette inn mer i år, før årsgrensen?", svar: { verdi: 9000, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 1850, enhet: "kr" }, { verdi: 9000, enhet: "kr" }],
    hint: ["Fradrag = innskudd · 0,10. Plass igjen = 27 500 − innskudd.", "\\(18\\,500 \\cdot 0{,}10 = 1\\,850\\). \\(27\\,500 - 18\\,500 = 9\\,000\\)."],
    losning: "<p>Fradrag: \\(1\\,850\\) kr.<br>Plass igjen: \\(9\\,000\\) kr. Fradraget settes ikke inn på kontoen.</p>"
  },
  {
    id: "serie-30",
    niva: "middels",
    tekst: "<p>Serielån 30 000 kr, 5 år, én termin i året, rente 6 %.</p>",
    deler: [
      { tekst: "Hva er avdraget per år?", svar: { verdi: 6000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er renta det første året?", svar: { verdi: 1800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er terminbeløpet det første året?", svar: { verdi: 7800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er restgjelden etter første avdrag?", svar: { verdi: 24000, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 6000, enhet: "kr" }, { verdi: 1800, enhet: "kr" }, { verdi: 7800, enhet: "kr" }, { verdi: 24000, enhet: "kr" }],
    hint: ["Avdrag = lån / 5. Rente = restgjeld · 0,06. Termin = avdrag + rente.", "\\(30\\,000 : 5 = 6\\,000\\). \\(30\\,000 \\cdot 0{,}06 = 1\\,800\\). Rest: \\(30\\,000 - 6\\,000\\)."],
    losning: "<p>Avdrag: \\(6\\,000\\) kr. Rente: \\(1\\,800\\) kr.<br>Termin: \\(7\\,800\\) kr. Restgjeld: \\(24\\,000\\) kr.</p>"
  },
  {
    id: "uke-96",
    niva: "vanskelig",
    tittel: "Lønn, trekk og BSU",
    tekst: "<p>Fagarbeideren har 240 kr i timen. Lærlingen er i andre halvår og skal ha 40 %. Uka har 37,5 ordinære timer og 2,5 overtidstimer med 50 % tillegg. Trekket er 25 %. Deretter settes 500 kr av til BSU.</p>",
    deler: [
      { tekst: "Hva er lærlingens timelønn?", svar: { verdi: 96, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bruttolønna?", svar: { verdi: 3960, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir utbetalt?", svar: { verdi: 2970, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er igjen etter BSU?", svar: { verdi: 2470, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 96, enhet: "kr" }, { verdi: 3600, enhet: "kr" }, { verdi: 360, enhet: "kr" }, { verdi: 3960, enhet: "kr" }, { verdi: 990, enhet: "kr" }, { verdi: 2970, enhet: "kr" }],
    hint: ["Timelønn først. Overtid: timer · timelønn · 1,5. Trekk er en firedel av brutto.", "\\(240 \\cdot 0{,}40 = 96\\). Ordinært \\(37{,}5 \\cdot 96 = 3\\,600\\). Overtid \\(2{,}5 \\cdot 96 \\cdot 1{,}5 = 360\\). Utbetalt: \\(3\\,960 \\cdot 0{,}75\\)."],
    losning: "<p>Timelønn: \\(96\\) kr.<br>Ordinært: \\(3\\,600\\) kr. Overtid: \\(360\\) kr. Brutto: \\(3\\,960\\) kr.<br>Trekk: \\(990\\) kr. Utbetalt: \\(2\\,970\\) kr.<br>Etter BSU: \\(2\\,470\\) kr.</p>"
  },
  {
    id: "kreditt-16",
    niva: "vanskelig",
    tittel: "Kort og serielån",
    tekst: "<p>Kreditt: gjelden er 4 000 kr, renta er 1,8 % denne måneden, og du betaler 1 000 kr etter at renta er lagt til. Serielån: restgjeld 16 000 kr, avdrag 4 000 kr, rente 5 %.</p>",
    deler: [
      { tekst: "Hva er renta på kortet?", svar: { verdi: 72, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er gjelden på kortet etter innbetalingen?", svar: { verdi: 3072, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er renta på serielånet?", svar: { verdi: 800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er terminbeløpet på serielånet?", svar: { verdi: 4800, enhet: "kr", tol: 0.5 } },
      { tekst: "Et annet lån har terminbeløp 2 200 kr tre ganger. Hva slags lån er det?", svar: { valg: ["Serielån", "Annuitetslån", "Kontantkjøp"], riktig: 1 } }
    ],
    steg: [{ verdi: 72, enhet: "kr" }, { verdi: 4072, enhet: "kr" }, { verdi: 3072, enhet: "kr" }, { verdi: 800, enhet: "kr" }, { verdi: 4800, enhet: "kr" }],
    hint: ["Kort: saldo · 0,018, legg til, trekk innbetalingen. Serielån: rente av restgjeld, termin = avdrag + rente.", "Kort: \\(4\\,000 \\cdot 0{,}018 = 72\\), deretter \\(4\\,072 - 1\\,000\\). Lån: \\(16\\,000 \\cdot 0{,}05 = 800\\). Like terminbeløp er annuitet."],
    losning: "<p>Kort: rente \\(72\\) kr, gjeld \\(3\\,072\\) kr.<br>Serielån: rente \\(800\\) kr, termin \\(4\\,800\\) kr.<br>Tre like terminbeløp på 2 200 kr er et annuitetslån.</p>"
  },
  {
    id: "eksamen-495",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En lærling har 50 % av fagarbeiderens 180 kr i timen. Han jobber 4 ordinære timer og 1 overtidstime med 50 % tillegg.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er lærlingens timelønn?", svar: { verdi: 90, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er betalingen for overtidstimen?", svar: { verdi: 135, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bruttolønna?", svar: { verdi: 495, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["50 % av 180 er halvparten. Overtidstimens betaling er timelønn ganger 1,5.", "\\(180 : 2 = 90\\). \\(90 \\cdot 1{,}5 = 135\\). Ordinært: \\(4 \\cdot 90 = 360\\)."],
    losning: "<p>Timelønn: \\(90\\) kr.<br>Overtid: \\(135\\) kr.<br>Ordinært: \\(360\\) kr.<br>Brutto: \\(360 + 135 = 495\\) kr.</p>"
  }
]);
