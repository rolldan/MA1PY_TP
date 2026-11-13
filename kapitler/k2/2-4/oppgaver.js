Bok.oppgaver([
  {
    id: "fem-bolter",
    niva: "lett",
    tekst: "<p>Fem bolter måles til 90,2 · 89,8 · 90,0 · 90,1 · 89,9 mm.</p>",
    steg: [{ verdi: 450, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 90, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.4, enhet: "mm" } }
    ],
    hint: ["Summen er 450,0 mm. Del på 5.", "Variasjonsbredde er største minus minste: \\(90{,}2 - 89{,}8\\)."],
    losning: "<p>Gjennomsnitt \\(450 : 5 = 90{,}0\\) mm. Variasjonsbredde \\(0{,}4\\) mm.</p>"
  },
  {
    id: "ror-prosent",
    niva: "lett",
    tekst: "<p>Et rør måles til 200 mm med målebånd. Absolutt usikkerhet er 1 mm.</p>",
    deler: [
      { tekst: "Hvor stor er den absolutte usikkerheten?", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor er den relative usikkerheten?", svar: { verdi: 0.5, enhet: "%", tol: 0 } }
    ],
    hint: ["Absolutt usikkerhet er ±-tallet.", "\\(1 : 200 \\cdot 100 = 0{,}5\\). Enheten på svaret er prosent."],
    losning: "<p>Absolutt 1 mm. Relativ \\(1 : 200 \\cdot 100\\% = 0{,}5\\%\\).</p>"
  },
  {
    id: "aksel-serie",
    niva: "middels",
    tekst: "<p>Skyvelæret på en aksel: 40,02 · 40,05 · 39,98 · 40,01 · 40,00 mm.</p>",
    steg: [{ verdi: 200.06, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 40.012, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.07, enhet: "mm" } }
    ],
    hint: ["Summen er 200,06 mm.", "\\(200{,}06 : 5 = 40{,}012\\). Bredde: \\(40{,}05 - 39{,}98\\)."],
    losning: "<p>Gjennomsnitt 40,012 mm. Variasjonsbredde 0,07 mm.</p>"
  },
  {
    id: "hvem-storst",
    niva: "middels",
    tekst: "<p>En aksel måles til 25 mm ± 0,2 mm. En plate måles til 500 mm ± 1 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for akselen, i prosent.", svar: { verdi: 0.8, enhet: "%", tol: 0 } },
      { tekst: "Relativ usikkerhet for plata, i prosent.", svar: { verdi: 0.2, enhet: "%", tol: 0 } },
      { tekst: "Hvilken måling har størst relativ usikkerhet?", svar: { valg: ["Akselen", "Plata", "De er like"], riktig: 0 } }
    ],
    hint: ["Del absolutt usikkerhet på målt verdi og gang med 100.", "Aksel: \\(0{,}2 : 25 \\cdot 100 = 0{,}8\\). Plate: \\(1 : 500 \\cdot 100 = 0{,}2\\)."],
    losning: "<p>Aksel 0,8 %. Plate 0,2 %. Akselen har størst relativ usikkerhet, selv om 0,2 mm ser mindre ut enn 1 mm.</p>"
  },
  {
    id: "samme-verktoy",
    niva: "vanskelig",
    tekst: "<p>Samme skyvelære, usikkerhet 0,02 mm, brukes på en skive på 8 mm og en aksel på 200 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for skiva, i prosent.", svar: { verdi: 0.25, enhet: "%" } },
      { tekst: "Relativ usikkerhet for akselen, i prosent.", svar: { verdi: 0.01, enhet: "%" } },
      { tekst: "Hvor mange ganger større er den relative usikkerheten på skiva?", svar: { verdi: 25 } }
    ],
    hint: ["\\(0{,}02 : 8 \\cdot 100\\) og \\(0{,}02 : 200 \\cdot 100\\).", "Del 0,25 på 0,01."],
    losning: "<p>Skive: \\(0{,}25\\%\\). Aksel: \\(0{,}01\\%\\). \\(0{,}25 : 0{,}01 = 25\\). Samme absolutte feil veier 25 ganger mer på den lille skiva.</p>"
  },
  {
    id: "egen-serie",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Serien fra akselen",
    utstyr: "Skyvelære og akselen fra 2.2, eller tallene under",
    hms: "Samme som ved skyvelæremåling. Ingen roterende maskin.",
    tekst: "<p>En serie: 40,02 · 40,04 · 39,99 · 40,01 · 40,03 mm. Absolutt usikkerhet 0,02 mm. Bruk 40 mm når du regner prosent. Mål gjerne en egen serie etterpå.</p>",
    steg: [{ verdi: 200.09, enhet: "mm" }],
    deler: [
      { tekst: "Gjennomsnitt?", svar: { verdi: 40.018, enhet: "mm" } },
      { tekst: "Variasjonsbredde?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.05, enhet: "%", tol: 0 } }
    ],
    hint: ["Summen er 200,09 mm. Største er 40,04 og minste er 39,99.", "\\(200{,}09 : 5 = 40{,}018\\). Relativ: \\(0{,}02 : 40 \\cdot 100 = 0{,}05\\)."],
    losning: "<p>Gjennomsnitt 40,018 mm. Variasjonsbredde 0,05 mm. Relativ usikkerhet 0,05 %.</p>"
  },
  {
    id: "repetisjon-minus",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Basismålet er 50,0 mm. Avviket er −0,3 mm. Hva er målet?</p>",
    svar: { verdi: 49.7, enhet: "mm" },
    hint: ["Et negativt avvik trekkes fra.", "\\(50{,}0 - 0{,}3 = 49{,}7\\)."],
    losning: "<p>\\(50{,}0 + (-0{,}3) = 49{,}7\\) mm.</p>"
  },
  {
    id: "eksamen-54",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En lengde oppgis som 54 mm ± 0,5 mm.</p>",
    deler: [
      { tekst: "Absolutt usikkerhet?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Relativ usikkerhet i prosent, avrundet til to desimaler.", svar: { verdi: 0.93, enhet: "%", tol: 0.005 } }
    ],
    hint: ["Absolutt usikkerhet står bak ±.", "\\(0{,}5 : 54 \\cdot 100 \\approx 0{,}9259\\), som avrundes til 0,93."],
    losning: "<p>Absolutt 0,5 mm. \\(0{,}5 : 54 \\cdot 100 = 0{,}9259\\ldots\\% \\approx 0{,}93\\%\\).</p>"
  }
]);
