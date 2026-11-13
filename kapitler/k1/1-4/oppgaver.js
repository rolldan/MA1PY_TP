Bok.oppgaver([
  {
    id: "brok-desimal",
    niva: "lett",
    tittel: "Brøk til desimal",
    tekst: "<p>Skriv brøken som desimaltall.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(1/2\\)", svar: { verdi: 0.5 } },
      { tekst: "\\(1/4\\)", svar: { verdi: 0.25 } },
      { tekst: "\\(3/4\\)", svar: { verdi: 0.75 } },
      { tekst: "\\(1/5\\)", svar: { verdi: 0.2 } }
    ],
    hint: ["Del telleren på nevneren.", "\\(1 : 4 = 0{,}25\\)."],
    losning: "<p>a) 0,5 &nbsp; b) 0,25 &nbsp; c) 0,75 &nbsp; d) 0,2</p>"
  },
  {
    id: "en-tomme",
    niva: "lett",
    tekst: "<p>Hvor mange millimeter er 1 tomme?</p>",
    stegForSteg: false,
    svar: { verdi: 25.4, enhet: "mm" },
    hint: ["Huskeregelen står i regelboksen.", "1 tomme = 25,4 mm."],
    losning: "<p>\\(1'' = 25{,}4\\) mm.</p>"
  },
  {
    id: "halv-tomme",
    niva: "middels",
    tekst: "<p>En rørdel er merket \\(1/2\\) tomme.</p>",
    steg: [{ verdi: 0.5, enhet: "tommer" }],
    deler: [
      { tekst: "Hvor mange millimeter er det?", svar: { verdi: 12.7, enhet: "mm" } },
      { tekst: "Hvilken hele millimeter er nærmest?", svar: { verdi: 13, enhet: "mm" } }
    ],
    hint: ["\\(1/2 = 0{,}5\\). Gang med 25,4.", "\\(0{,}5 \\cdot 25{,}4 = 12{,}7\\). 12,7 ligger nærmere 13 enn 12."],
    losning: "<p>a) \\(0{,}5 \\cdot 25{,}4 = 12{,}7\\) mm.<br>b) 13 mm.</p>"
  },
  {
    id: "tre-attendedeler",
    niva: "middels",
    tekst: "<p>Et bor er merket \\(3/8\\) tomme. Regn om til millimeter.</p>",
    steg: [{ verdi: 0.375, enhet: "tommer" }],
    svar: { verdi: 9.525, enhet: "mm" },
    hint: ["\\(3 : 8 = 0{,}375\\).", "\\(0{,}375 \\cdot 25{,}4\\)."],
    losning: "<p>\\(3/8 = 0{,}375\\). \\(0{,}375 \\cdot 25{,}4 = 9{,}525\\) mm. Nærmeste hele millimeter er 10.</p>"
  },
  {
    id: "kvart-og-fem-sekstendel",
    niva: "middels",
    tekst: "<p>Regn om til millimeter.</p>",
    deler: [
      { tekst: "\\(1/4\\) tomme", svar: { verdi: 6.35, enhet: "mm" } },
      { tekst: "\\(5/8\\) tomme", svar: { verdi: 15.875, enhet: "mm" } }
    ],
    hint: ["Gjør brøken om til desimal, og gang med 25,4.", "\\(1/4 = 0{,}25\\). \\(5/8 = 0{,}625\\)."],
    losning: "<p>a) \\(0{,}25 \\cdot 25{,}4 = 6{,}35\\) mm.<br>b) \\(0{,}625 \\cdot 25{,}4 = 15{,}875\\) mm.</p>"
  },
  {
    id: "to-tommer",
    niva: "vanskelig",
    tekst: "<p>En slange er merket 2 tommer. En annen er 50,8 mm.</p>",
    deler: [
      { tekst: "Hvor mange millimeter er 2 tommer?", svar: { verdi: 50.8, enhet: "mm" } },
      { tekst: "Hvor mange tommer er 50,8 mm?", svar: { verdi: 2, enhet: "tommer" } }
    ],
    hint: ["Gang med 25,4 for å gå til mm. Del med 25,4 for å gå til tommer.", "\\(2 \\cdot 25{,}4 = 50{,}8\\)."],
    losning: "<p>a) \\(2 \\cdot 25{,}4 = 50{,}8\\) mm.<br>b) \\(50{,}8 : 25{,}4 = 2\\) tommer. De er like lange.</p>"
  },
  {
    id: "nokkel",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Nærmeste nøkkel",
    utstyr: "Fastnøkler eller piper merket i tommer, og et sett metriske nøkler",
    hms: "Ikke bruk nøkkelen som hammer. Legg den tilbake i riktig spor.",
    tekst: "<p>En nøkkel er merket \\(1/4\\) tomme. Du har metriske nøkler i hele millimeter. Hvilken hele millimeter er nærmest \\(6{,}35\\) mm?</p>",
    svar: { verdi: 6, enhet: "mm" },
    hint: ["\\(1/4 \\cdot 25{,}4 = 6{,}35\\).", "Avstanden til 6 er 0,35. Avstanden til 7 er 0,65."],
    losning: "<p>6,35 mm ligger nærmere 6 enn 7. Nærmeste hele millimeter er 6 mm. Nøkkelen passer ikke nødvendigvis på en 6 mm skrue: merket sier størrelsen på nøkkelen, ikke gjengemålet.</p>"
  },
  {
    id: "repetisjon-avvik",
    type: "repetisjon",
    fra: "kapittel 1.3",
    niva: "lett",
    tekst: "<p>Målet er 100 mm. Du måler 99,2 mm. Hva er avviket?</p>",
    svar: { verdi: -0.8, enhet: "mm" },
    hint: ["Avvik = målt − mål.", "\\(99{,}2 - 100\\)."],
    losning: "<p>\\(-0{,}8\\) mm.</p>"
  },
  {
    id: "repetisjon-overslag",
    type: "repetisjon",
    fra: "kapittel 1.2",
    niva: "lett",
    tekst: "<p>Rund 12,48 mm av til én desimal.</p>",
    svar: { verdi: 12.5, enhet: "mm" },
    hint: ["Se på andre desimal. 8 rundes opp.", "12,4 blir 12,5."],
    losning: "<p>12,5 mm.</p>"
  },
  {
    id: "eksamen-tomme",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>\\(1\\) tomme \\(= 25{,}4\\) mm. Regn uten kalkulator der du kan, og vis hvordan du tenker. Du kan bruke at \\(0{,}5 \\cdot 25{,}4 = 12{,}7\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange mm er \\(1/2\\) tomme?", svar: { verdi: 12.7, enhet: "mm" } },
      { tekst: "Hvor mange mm er \\(1/4\\) tomme?", svar: { verdi: 6.35, enhet: "mm" } }
    ],
    hint: ["En kvart tomme er halvparten av en halv tomme.", "\\(12{,}7 : 2 = 6{,}35\\)."],
    losning: "<p>a) 12,7 mm.<br>b) \\(12{,}7 : 2 = 6{,}35\\) mm.</p>"
  }
]);
