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
    id: "brok-enkle",
    niva: "lett",
    tittel: "Flere brøker",
    tekst: "<p>Skriv brøken som desimaltall. Slik står merket på noen bor før du regner om til mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(1/8\\)", svar: { verdi: 0.125 } },
      { tekst: "\\(2/5\\)", svar: { verdi: 0.4 } },
      { tekst: "\\(1/10\\)", svar: { verdi: 0.1 } },
      { tekst: "\\(3/10\\)", svar: { verdi: 0.3 } }
    ],
    hint: ["Del telleren på nevneren.", "\\(1 : 8 = 0{,}125\\). \\(2 : 5 = 0{,}4\\)."],
    losning: "<p>a) 0,125 &nbsp; b) 0,4 &nbsp; c) 0,1 &nbsp; d) 0,3</p>"
  },
  {
    id: "ti-tommer",
    niva: "lett",
    tittel: "Ti tommer",
    tekst: "<p>En slange er merket 10 tommer. \\(1\\) tomme \\(= 25{,}4\\) mm. Hvor mange millimeter er slangen?</p>",
    steg: [{ verdi: 25.4, enhet: "mm" }],
    svar: { verdi: 254, enhet: "mm" },
    hint: ["Gang 25,4 med 10.", "Kommaet flyttes én plass til høyre."],
    losning: "<p>\\(10 \\cdot 25{,}4 = 254\\) mm.</p>"
  },
  {
    id: "halv-er-brok",
    niva: "lett",
    tekst: "<p>Et bor er merket 0,5 tommer. Hvilken brøk er det samme som 0,5?</p>",
    stegForSteg: false,
    svar: { valg: ["1/2", "1/4", "1/5", "3/4"], riktig: 0, forklaring: "1 delt på 2 er 0,5." },
    hint: ["Hvilken brøk blir 0,5 når du deler teller på nevner?", "\\(1 : 2 = 0{,}5\\)."],
    losning: "<p>\\(1/2 = 0{,}5\\).</p>"
  },
  {
    id: "tre-kvart-tomme",
    niva: "middels",
    tittel: "Tre kvart tomme",
    tekst: "<p>En rørdel er merket \\(3/4\\) tomme. \\(1\\) tomme \\(= 25{,}4\\) mm.</p>",
    steg: [{ verdi: 0.75, enhet: "tommer" }],
    deler: [
      { tekst: "Hvor mange millimeter er det?", svar: { verdi: 19.05, enhet: "mm", tol: 0.03 } },
      { tekst: "Hvilken hele millimeter er nærmest?", svar: { verdi: 19, enhet: "mm" } }
    ],
    hint: ["\\(3/4 = 0{,}75\\). Gang med 25,4.", "\\(0{,}75 \\cdot 25{,}4 = 19{,}05\\). Avstanden til 19 er 0,05. Avstanden til 20 er 0,95."],
    losning: "<p>a) \\(0{,}75 \\cdot 25{,}4 = 19{,}05\\) mm.<br>b) 19 mm.</p>"
  },
  {
    id: "attendedel",
    niva: "middels",
    tittel: "En åttendedel",
    tekst: "<p>Et bor er merket \\(1/8\\) tomme.</p>",
    steg: [{ verdi: 0.125, enhet: "tommer" }],
    deler: [
      { tekst: "Hvor mange millimeter er det?", svar: { verdi: 3.175, enhet: "mm", tol: 0.03 } },
      { tekst: "Hvilken hele millimeter er nærmest?", svar: { verdi: 3, enhet: "mm" } }
    ],
    hint: ["\\(1 : 8 = 0{,}125\\).", "\\(0{,}125 \\cdot 25{,}4 = 3{,}175\\). Det ligger nærmere 3 enn 4."],
    losning: "<p>a) \\(0{,}125 \\cdot 25{,}4 = 3{,}175\\) mm.<br>b) 3 mm. Avstanden til 3 er 0,175. Avstanden til 4 er 0,825.</p>"
  },
  {
    id: "fem-sekstendel",
    niva: "middels",
    tittel: "Fem sekstendeler",
    tekst: "<p>En nøkkel er merket \\(5/16\\) tomme. Regn om til millimeter, og finn nærmeste hele millimeter.</p>",
    steg: [{ verdi: 0.3125, enhet: "tommer" }],
    deler: [
      { tekst: "Hvor mange millimeter er det?", svar: { verdi: 7.9375, enhet: "mm", tol: 0.05 } },
      { tekst: "Hvilken hele millimeter er nærmest?", svar: { verdi: 8, enhet: "mm" } }
    ],
    hint: ["\\(5 : 16 = 0{,}3125\\).", "\\(0{,}3125 \\cdot 25{,}4 = 7{,}9375\\). Det er tett på 8."],
    losning: "<p>a) \\(5/16 = 0{,}3125\\). \\(0{,}3125 \\cdot 25{,}4 = 7{,}9375\\) mm.<br>b) 8 mm.</p>"
  },
  {
    id: "halvannen-tomme",
    niva: "vanskelig",
    tittel: "Halvannen og tre tommer",
    tekst: "<p>En slange er merket 1,5 tommer. En annen slange er 76,2 mm. \\(1\\) tomme \\(= 25{,}4\\) mm.</p>",
    steg: [{ verdi: 12.7, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange millimeter er 1,5 tommer?", svar: { verdi: 38.1, enhet: "mm", tol: 0.05 } },
      { tekst: "Hvor mange tommer er 76,2 mm?", svar: { verdi: 3, enhet: "tommer" } }
    ],
    hint: ["1,5 tommer er 1 tomme pluss en halv tomme.", "\\(25{,}4 + 12{,}7 = 38{,}1\\). Andre veien: \\(76{,}2 : 25{,}4\\)."],
    losning: "<p>a) \\(1{,}5 \\cdot 25{,}4 = 38{,}1\\) mm.<br>b) \\(76{,}2 : 25{,}4 = 3\\) tommer.</p>"
  },
  {
    id: "sju-attendedeler",
    niva: "vanskelig",
    tittel: "Sju åttendedeler",
    tekst: "<p>Et bor er merket \\(7/8\\) tomme.</p>",
    steg: [{ verdi: 0.875, enhet: "tommer" }],
    deler: [
      { tekst: "Hvor mange millimeter er det?", svar: { verdi: 22.225, enhet: "mm", tol: 0.05 } },
      { tekst: "Hvilken hele millimeter er nærmest?", svar: { verdi: 22, enhet: "mm" } }
    ],
    hint: ["\\(7 : 8 = 0{,}875\\).", "\\(0{,}875 \\cdot 25{,}4 = 22{,}225\\). Avstanden til 22 er mindre enn avstanden til 23."],
    losning: "<p>a) \\(0{,}875 \\cdot 25{,}4 = 22{,}225\\) mm.<br>b) 22 mm. Avstanden til 22 er 0,225. Avstanden til 23 er 0,775.</p>"
  },
  {
    id: "nokkel-forskjell",
    niva: "vanskelig",
    tittel: "To nøkler",
    tekst: "<p>\\(1/2\\) tomme er 12,7 mm. \\(3/8\\) tomme er 9,525 mm. Hvor mange millimeter skiller de to nøklene?</p>",
    steg: [{ verdi: 12.7, enhet: "mm" }, { verdi: 9.525, enhet: "mm" }],
    svar: { verdi: 3.175, enhet: "mm", tol: 0.03 },
    hint: ["Trekk det minste fra det største.", "\\(12{,}7 - 9{,}525\\)."],
    losning: "<p>\\(12{,}7 - 9{,}525 = 3{,}175\\) mm.</p>"
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
