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
    id: "pluss-fra-minus",
    niva: "lett",
    tittel: "Fra minus til pluss",
    tekst: "<p>Temperaturen på lageret er \\(-2\\) °C. Den stiger 6 grader. Hva blir temperaturen?</p>",
    svar: { verdi: 4, enhet: "°C" },
    hint: ["Stige betyr å gå til høyre på tallinja.", "Fra −2 til 0 er 2. Du har 4 igjen."],
    losning: "<p>\\(-2 + 6 = 4\\) °C.</p>"
  },
  {
    id: "gang-82",
    niva: "lett",
    tittel: "Ti pakninger",
    tekst: "<p>En pakning er 8,2 mm tykk. Du stabler 10 like pakninger. Hvor mange millimeter er bunken?</p>",
    stegForSteg: false,
    svar: { verdi: 82, enhet: "mm" },
    hint: ["Gange med 10 flytter kommaet én plass til høyre.", "\\(8{,}2 \\cdot 10\\)."],
    losning: "<p>\\(8{,}2 \\cdot 10 = 82\\) mm.</p>"
  },
  {
    id: "minst-seks",
    niva: "lett",
    tekst: "<p>Hvilket avvik er minst: \\(-1\\) mm, \\(-6\\) mm, \\(0\\) mm eller \\(2\\) mm?</p>",
    stegForSteg: false,
    svar: { valg: ["−1 mm", "−6 mm", "0 mm", "2 mm"], riktig: 1, forklaring: "−6 ligger lengst til venstre på tallinja." },
    hint: ["Negative tall ligger til venstre for null.", "−6 er lenger til venstre enn −1."],
    losning: "<p>\\(-6\\) mm er minst. Emnet med det avviket er kortest.</p>"
  },
  {
    id: "temp-minus-seks",
    niva: "middels",
    tittel: "Kald morgen",
    tekst: "<p>Det er \\(-6\\) °C i verkstedet om morgenen. Innen lunsj stiger temperaturen 11 grader. Hva er temperaturen da?</p>",
    steg: [{ verdi: 6, enhet: "°C" }],
    svar: { verdi: 5, enhet: "°C" },
    hint: ["Fra −6 til 0 er 6 grader. Resten går over null.", "\\(-6 + 11\\)."],
    losning: "<p>\\(-6 + 11 = 5\\) °C.</p>"
  },
  {
    id: "blandet-ti",
    niva: "middels",
    tekst: "<p>Regn ut uten kalkulator. Tallene er av den typen du møter på kartleggingen.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(7 - 12\\)", svar: { verdi: -5 } },
      { tekst: "\\(3{,}6 \\cdot 10\\)", svar: { verdi: 36 } },
      { tekst: "\\(80 : 10\\)", svar: { verdi: 8 } }
    ],
    hint: ["\\(7 - 12\\) går forbi null.", "Gange med 10 flytter kommaet til høyre. Dele med 10 flytter det til venstre."],
    losning: "<p>a) −5 &nbsp; b) 36 &nbsp; c) 8</p>"
  },
  {
    id: "temp-to-steg",
    niva: "middels",
    tittel: "To stigninger",
    tekst: "<p>Om morgenen er det \\(-9\\) °C i hallen. Før lunsj stiger temperaturen 4 grader. Etter lunsj stiger den 8 grader til.</p>",
    steg: [{ verdi: -5, enhet: "°C" }],
    deler: [
      { tekst: "Hva er temperaturen før lunsj?", svar: { verdi: -5, enhet: "°C" } },
      { tekst: "Hva er temperaturen etter lunsj?", svar: { verdi: 3, enhet: "°C" } }
    ],
    hint: ["Ta én stigning om gangen.", "\\(-9 + 4 = -5\\). Så \\(-5 + 8\\)."],
    losning: "<p>a) \\(-9 + 4 = -5\\) °C.<br>b) \\(-5 + 8 = 3\\) °C. Hele stigningen er 12 grader: \\(-9 + 12 = 3\\).</p>"
  },
  {
    id: "minus-videre",
    niva: "vanskelig",
    tekst: "<p>Et avvik er allerede \\(-13\\) mm. Du kapper 8 mm til, så avviket blir enda mer negativt. Regn ut \\(-13 - 8\\).</p>",
    svar: { verdi: -21, enhet: "mm" },
    hint: ["Du står på −13 og går videre til venstre.", "\\(-13 - 8\\) er ikke \\(-5\\)."],
    losning: "<p>\\(-13 - 8 = -21\\) mm.</p>"
  },
  {
    id: "fortegn-rekkefolge",
    niva: "vanskelig",
    tekst: "<p>Regn ut. Slik kan et avvik og et regnestykke med parentes se ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(18 - (-7)\\)", svar: { verdi: 25 } },
      { tekst: "\\((-4) \\cdot (-5)\\)", svar: { verdi: 20 } },
      { tekst: "\\(6 + 4 \\cdot 3\\)", svar: { verdi: 18 } }
    ],
    hint: ["Minus et negativt tall er pluss. Like fortegn i gange gir pluss.", "Gange før pluss: \\(4 \\cdot 3 = 12\\)."],
    losning: "<p>a) \\(18 + 7 = 25\\) &nbsp; b) 20 &nbsp; c) \\(6 + 12 = 18\\)</p>"
  },
  {
    id: "grader-opp",
    niva: "vanskelig",
    tittel: "Hvor mye må det stige?",
    tekst: "<p>Sveisehallen er \\(-8\\) °C. Dere vil ha \\(5\\) °C før dere starter. I tillegg står dette på kartleggingsarket: \\(-16 - 5\\).</p>",
    steg: [{ verdi: 8, enhet: "°C" }, { verdi: 5, enhet: "°C" }],
    deler: [
      { tekst: "Hvor mange grader må temperaturen stige?", svar: { verdi: 13, enhet: "°C" } },
      { tekst: "Regn ut \\(-16 - 5\\).", svar: { verdi: -21 } }
    ],
    hint: ["Fra −8 til 0 er 8 grader, og fra 0 til 5 er 5 til.", "\\(-16 - 5\\) går videre til venstre."],
    losning: "<p>a) \\(5 - (-8) = 13\\) grader.<br>b) \\(-16 - 5 = -21\\).</p>"
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
