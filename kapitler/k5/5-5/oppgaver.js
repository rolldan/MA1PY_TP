Bok.oppgaver([
  {
    id: "boremaskin",
    niva: "lett",
    tittel: "Søyleboremaskin",
    tekst: "<p>Motoren går på 1400 r/min og har en reimskive på 50 mm. Skiva ved spindelen er 200 mm. Hva blir turtallet på boret?</p>",
    steg: [{ verdi: 70000 }],
    svar: { verdi: 350, enhet: "r/min" },
    hint: ["\\(n_2 = n_1 \\cdot d_1 : d_2\\). Den store skiva er den drevne.", "\\(1400 \\cdot 50 : 200\\)."],
    losning: "<p>\\(n_2 = 1400 \\cdot 50 : 200 = 350\\) r/min.</p>"
  },
  {
    id: "like-tenner",
    niva: "lett",
    tittel: "Dobbelt så mange tenner",
    tekst: "<p>Et tannhjul med 20 tenner driver et hjul med 40 tenner. Det lille hjulet går på 800 r/min. Hva blir turtallet på det store?</p>",
    svar: { verdi: 400, enhet: "r/min" },
    hint: ["Dobbelt så mange tenner gir halvt turtall.", "\\(800 \\cdot 20 : 40\\)."],
    losning: "<p>\\(n_2 = 800 \\cdot 20 : 40 = 400\\) r/min.</p>"
  },
  {
    id: "moped",
    niva: "middels",
    tittel: "Mopedkjede",
    tekst: "<p>Drevet foran har 11 tenner og driver. Drevet bak har 55 tenner. Motoren gir 6000 r/min på det fremste drevet.</p>",
    deler: [
      { tekst: "Hva er turtallet på bakhjulet?", svar: { verdi: 1200, enhet: "r/min" } },
      { tekst: "Hva er utvekslingen \\(i = z_2 : z_1\\)? Skriv tallet, som i 5 : 1.", svar: { verdi: 5 } }
    ],
    hint: ["\\(n_2 = 6000 \\cdot 11 : 55\\). Utvekslingen er tenner bak delt på tenner foran.", "\\(55 : 11 = 5\\), og \\(6000 : 5 = 1200\\)."],
    losning: "<p>\\(n_2 = 6000 \\cdot 11 : 55 = 1200\\) r/min.<br>\\(i = 55 : 11 = 5\\).</p>"
  },
  {
    id: "dynamo",
    niva: "middels",
    tittel: "Dynamoen",
    tekst: "<p>Veivakselen går på 800 r/min og har en skive på 150 mm. Den drar dynamoens skive på 50 mm.</p>",
    deler: [
      { tekst: "Hva er turtallet på dynamoen?", svar: { verdi: 2400, enhet: "r/min" } },
      { tekst: "Går dynamoen fortere eller saktere enn motoren?", svar: { valg: ["Fortere", "Saktere", "Like fort"], riktig: 0, forklaring: "Den drevne skiva er mindre, så turtallet går opp." } }
    ],
    hint: ["\\(n_2 = 800 \\cdot 150 : 50\\).", "150 : 50 = 3, så turtallet blir tre ganger så høyt."],
    losning: "<p>\\(n_2 = 800 \\cdot 150 : 50 = 2400\\) r/min. Dynamoen går fortere.</p>"
  },
  {
    id: "vinsj",
    niva: "vanskelig",
    tittel: "Vinsj inn porten",
    tekst: "<p>En motor på 1500 r/min har et tannhjul med 10 tenner. Vinsjtrommelen skal gå på 50 r/min. Dere skal lage det store hjulet selv.</p>",
    deler: [
      { tekst: "Hvor mange tenner må det store hjulet ha?", svar: { verdi: 300, enhet: "stk" } },
      { tekst: "Hva skjer med turtallet?", svar: { valg: ["Det går opp, og vinsjen blir svakere", "Det går ned, og vinsjen blir sterkere", "Det er uendret"], riktig: 1, forklaring: "Det drevne hjulet er mye større. Turtallet faller fra 1500 til 50." } }
    ],
    hint: ["\\(z_2 = n_1 \\cdot z_1 : n_2\\).", "\\(1500 \\cdot 10 : 50\\)."],
    losning: "<p>\\(z_2 = 1500 \\cdot 10 : 50 = 300\\) tenner.<br>Turtallet går ned, og vinsjen trekker sterkere.</p>"
  },
  {
    id: "mal-skive",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Skivene på maskinen",
    utstyr: "Søyleboremaskin med støpselet ute, skyvelære eller metermål",
    hms: "Støpsel ute og maskinen kan ikke starte. Ikke mål på en roterende skive. Hår og hette unna reima når den senere skal startes av læreren.",
    tekst: "<p>På en maskin måler du 50 mm på motorsviva og 200 mm ved spindelen. Motoren er merket 1400 r/min. Hva blir turtallet på boret med denne reimplasseringen?</p>",
    svar: { verdi: 350, enhet: "r/min" },
    hint: ["Motoren driver. \\(n_2 = n_1 \\cdot d_1 : d_2\\).", "\\(1400 \\cdot 50 : 200\\)."],
    losning: "<p>\\(n_2 = 1400 \\cdot 50 : 200 = 350\\) r/min.</p>"
  },
  {
    id: "rep-moment",
    type: "repetisjon",
    fra: "5.4",
    niva: "lett",
    tekst: "<p>Du drar med 200 N i en arm på 0,5 m. Hvor stort moment blir det?</p>",
    svar: { verdi: 100, enhet: "Nm" },
    hint: ["\\(M = F \\cdot a\\).", "\\(200 \\cdot 0{,}5\\)."],
    losning: "<p>\\(M = 200 \\cdot 0{,}5 = 100\\) Nm.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En reimskive har diameter 0,2 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 200, enhet: "mm" },
    hint: ["Fra m til mm ganger du med 1000.", "\\(0{,}2 \\cdot 1000\\)."],
    losning: "<p>\\(0{,}2 \\cdot 1000 = 200\\) mm.</p>"
  },
  {
    id: "eksamen-reim",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En motor med skive 80 mm går på 900 r/min og drar en skive på 160 mm.</p>",
    deler: [
      { tekst: "Hva blir turtallet på den store skiva?", svar: { verdi: 450, enhet: "r/min" } },
      { tekst: "Hva skjer med turtallet når den drevne skiva er dobbelt så stor?", svar: { valg: ["Det dobles", "Det halveres", "Det er uendret"], riktig: 1, forklaring: "Dobbelt diameter gir halvt turtall." } }
    ],
    hint: ["\\(n_2 = 900 \\cdot 80 : 160\\).", "80 : 160 = 1 : 2."],
    losning: "<p>\\(n_2 = 900 \\cdot 80 : 160 = 450\\) r/min. Turtallet halveres.</p>"
  }
]);
