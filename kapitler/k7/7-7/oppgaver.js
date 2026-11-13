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
  }
]);
