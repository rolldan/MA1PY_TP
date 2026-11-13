Bok.oppgaver([
  {
    id: "tolv-fem",
    niva: "lett",
    tittel: "Kartlegging, lett",
    tekst: "<p>Regn ut uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(12 - 5\\)", svar: { verdi: 7 } },
      { tekst: "\\(6 \\cdot 10\\)", svar: { verdi: 60 } },
      { tekst: "\\(3{,}5 \\cdot 10\\)", svar: { verdi: 35 } }
    ],
    hint: ["Ta ett stykke om gangen.", "Gange med 10: kommaet én plass til høyre."],
    losning: "<p>a) 7 &nbsp; b) 60 &nbsp; c) 35</p>"
  },
  {
    id: "minst",
    niva: "lett",
    tekst: "<p>Hvilket tall er minst: \\(2\\), \\(-3\\), \\(0\\), \\(-1\\)?</p>",
    stegForSteg: false,
    svar: { valg: ["2", "−3", "0", "−1"], riktig: 1, forklaring: "På tallinja ligger −3 lengst til venstre." },
    hint: ["Minus ligger til venstre for null.", "Jo lenger til venstre, jo mindre."],
    losning: "<p>\\(-3\\) er minst.</p>"
  },
  {
    id: "negative-enkle",
    niva: "middels",
    tekst: "<p>Regn ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(-4 + 9\\)", svar: { verdi: 5 } },
      { tekst: "\\(7 - 11\\)", svar: { verdi: -4 } },
      { tekst: "\\(450 : 10\\)", svar: { verdi: 45 } },
      { tekst: "\\(0{,}8 \\cdot 100\\)", svar: { verdi: 80 } }
    ],
    hint: ["Når du trekker fra mer enn du har, blir svaret negativt.", "\\(0{,}8 \\cdot 100\\): kommaet to plasser til høyre."],
    losning: "<p>a) 5 &nbsp; b) −4 &nbsp; c) 45 &nbsp; d) 80</p>"
  },
  {
    id: "mellom",
    niva: "middels",
    tekst: "<p>Hvilket par ligger begge mellom \\(-3\\) og \\(1\\)? Tallene skal være større enn \\(-3\\) og mindre enn \\(1\\).</p>",
    stegForSteg: false,
    svar: { valg: ["−2 og 0", "−4 og 0", "2 og 0", "−2 og 3"], riktig: 0, forklaring: "−2 og 0 ligger begge i intervallet. −4 er for liten, 2 og 3 er for store." },
    hint: ["Tegn tallinja fra −4 til 3.", "−4 ligger til venstre for −3, så den er utenfor."],
    losning: "<p>−2 og 0. De andre parene har minst ett tall utenfor.</p>"
  },
  {
    id: "negative-vanskelig",
    niva: "vanskelig",
    tekst: "<p>Regn ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(-13 - 6\\)", svar: { verdi: -19 } },
      { tekst: "\\(4 \\cdot (-3)\\)", svar: { verdi: -12 } },
      { tekst: "\\((-5) \\cdot (-2)\\)", svar: { verdi: 10 } },
      { tekst: "\\(15 - (-5)\\)", svar: { verdi: 20 } },
      { tekst: "\\(2 + 3 \\cdot 4\\)", svar: { verdi: 14 } }
    ],
    hint: ["To minus gir pluss når de står mot hverandre: \\(15 - (-5) = 15 + 5\\).", "Gange før pluss: \\(3 \\cdot 4\\) først."],
    losning: "<p>a) −19 &nbsp; b) −12 &nbsp; c) 10 &nbsp; d) 20 &nbsp; e) \\(2 + 12 = 14\\)</p>"
  },
  {
    id: "hvorfor-tif",
    type: "verksted",
    niva: "lett",
    merke: "K",
    tittel: "Hvorfor TIF?",
    utstyr: "Denne siden. Svaret lagres bare i nettleseren din.",
    hms: "Du bestemmer selv hva du vil skrive. Læreren leser det for å bli kjent med deg.",
    tekst: "<p>Skriv to–tre setninger: Hvorfor valgte du TIF, og hva får du til i matematikk?</p>",
    stegForSteg: false,
    svar: { fritekst: true, fasit: "<p>Det finnes ikke ett riktig svar. Du er ferdig når du har skrevet en grunn til at du valgte TIF, og noe du får til i matematikk.</p>" },
    hint: ["Skriv konkret. «Jeg liker å skru» er bedre enn «vet ikke».", "Nevn ett emne, for eksempel gange, måling eller penger."],
    losning: "<p>Eksempel: «Jeg valgte TIF fordi jeg vil jobbe med bil. Jeg får til gangetabellen, men negative tall er vanskelige.»</p>"
  },
  {
    id: "repetisjon-omkrets",
    type: "repetisjon",
    fra: "kapittel 0.2",
    niva: "lett",
    tekst: "<p>En plate er 30 cm × 20 cm. Hvor lang er omkretsen?</p>",
    svar: { verdi: 100, enhet: "cm" },
    hint: ["To lengder og to bredder.", "\\(2 \\cdot (30 + 20)\\)."],
    losning: "<p>\\(2 \\cdot 50 = 100\\) cm.</p>"
  },
  {
    id: "repetisjon-cm",
    type: "repetisjon",
    fra: "kapittel 0.1",
    niva: "lett",
    tekst: "<p>Et rør er 2,5 m. Hvor mange centimeter er det?</p>",
    svar: { verdi: 250, enhet: "cm" },
    hint: ["1 m = 100 cm.", "\\(2{,}5 \\cdot 100\\)."],
    losning: "<p>\\(2{,}5 \\cdot 100 = 250\\) cm.</p>"
  },
  {
    id: "eksamen-dele",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Regn ut uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(3{,}65 \\cdot 10\\)", svar: { verdi: 36.5 } },
      { tekst: "\\(12 : 10\\)", svar: { verdi: 1.2 } }
    ],
    hint: ["Gange med 10 flytter kommaet til høyre. Dele med 10 flytter det til venstre.", "\\(12 = 12{,}0\\)."],
    losning: "<p>a) 36,5 &nbsp; b) 1,2</p>"
  }
]);
