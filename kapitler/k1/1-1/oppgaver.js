Bok.oppgaver([
  {
    id: "drill-a",
    niva: "lett",
    tittel: "Drillark del 1",
    tekst: "<p>Regn ut uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(45 \\cdot 100\\)", svar: { verdi: 4500 } },
      { tekst: "\\(45 : 100\\)", svar: { verdi: 0.45 } },
      { tekst: "\\(1{,}5 \\cdot 100\\)", svar: { verdi: 150 } },
      { tekst: "\\(85 : 100\\)", svar: { verdi: 0.85 } },
      { tekst: "\\(80 \\cdot 1000\\)", svar: { verdi: 80000 } }
    ],
    hint: ["Gange: kommaet flyttes til høyre. Dele: kommaet flyttes til venstre.", "Tell nullene: 100 har to nuller, så kommaet flyttes to plasser. \\(45 = 45{,}0\\)."],
    losning: "<p>a) 4500 b) 0,45 c) 150 d) 0,85 e) 80 000</p>"
  },
  {
    id: "drill-b",
    niva: "lett",
    tittel: "Drillark del 2",
    tekst: "<p>Regn ut uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(0{,}8 : 10\\)", svar: { verdi: 0.08 } },
      { tekst: "\\(1{,}85 \\cdot 100\\)", svar: { verdi: 185 } },
      { tekst: "\\(548{,}5 : 100\\)", svar: { verdi: 5.485 } },
      { tekst: "\\(848 : 1000\\)", svar: { verdi: 0.848 } },
      { tekst: "\\(0{,}25 \\cdot 1000\\)", svar: { verdi: 250 } }
    ],
    hint: ["Når du deler, blir tallet mindre. Når du ganger, blir det større.", "\\(0{,}8 : 10\\): kommaet én plass til venstre. Fyll med 0 foran: \\(0{,}08\\)."],
    losning: "<p>a) 0,08 b) 185 c) 5,485 d) 0,848 e) 250</p>"
  },
  {
    id: "skruer",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    steg: [],
    svar: { verdi: 0.795, enhet: "kr", tol: 0.0051 },
    hint: ["Én skrue er en hundredel av esken. Del prisen med 100.", "\\(79{,}50 : 100\\): flytt kommaet to plasser til venstre."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr. Én skrue koster omtrent 80 øre.</p>"
  },
  {
    id: "stang",
    niva: "lett",
    tekst: "<p>Tegningen sier at en stang skal være 2450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m" },
    hint: ["1 m = 1000 mm. Fra mm til m deler vi.", "\\(2450 : 1000\\): kommaet tre plasser til venstre."],
    losning: "<p>\\(2450 : 1000 = 2{,}45\\) m.</p>"
  },
  {
    id: "plate",
    niva: "middels",
    tekst: "<p>En stålplate er 1,2 m bred og 2,5 m lang. Laserkutteren vil ha målene i millimeter.</p>",
    deler: [
      { tekst: "Hvor bred er plata i mm?", svar: { verdi: 1200, enhet: "mm" } },
      { tekst: "Hvor lang er plata i mm?", svar: { verdi: 2500, enhet: "mm" } }
    ],
    hint: ["Fra m til mm ganger vi med 1000.", "\\(1{,}2 \\cdot 1000\\): kommaet tre plasser til høyre, fyll med nuller."],
    losning: "<p>a) \\(1{,}2 \\cdot 1000 = 1200\\) mm b) \\(2{,}5 \\cdot 1000 = 2500\\) mm</p>"
  },
  {
    id: "skiver",
    niva: "middels",
    tekst: "<p>En pose med 1000 underlagsskiver koster 345 kr. Du trenger 40 skiver. Hva koster de?</p>",
    steg: [{ verdi: 0.345, enhet: "kr" }],
    svar: { verdi: 13.8, enhet: "kr" },
    hint: ["Finn først prisen for én skive.", "\\(345 : 1000 = 0{,}345\\) kr. Gang så med 40."],
    losning: "<p>Én skive: \\(345 : 1000 = 0{,}345\\) kr.<br>40 skiver: \\(0{,}345 \\cdot 40 = 13{,}80\\) kr.</p>"
  },
  {
    id: "popnagler",
    niva: "middels",
    tekst: "<p>På lageret står 12 esker med 100 popnagler i hver. Én popnagle koster 0,42 kr.</p>",
    deler: [
      { tekst: "Hvor mange popnagler er det til sammen?", svar: { verdi: 1200, enhet: "stk" } },
      { tekst: "Hva er popnaglene verdt til sammen?", svar: { verdi: 504, enhet: "kr" } }
    ],
    hint: ["12 esker med 100 i hver: \\(12 \\cdot 100\\).", "Verdien er antall ganger pris per stykk: \\(1200 \\cdot 0{,}42\\). Du kan regne \\(12 \\cdot 42\\)."],
    losning: "<p>a) \\(12 \\cdot 100 = 1200\\) popnagler<br>b) \\(1200 \\cdot 0{,}42 = 504\\) kr</p>"
  },
  {
    id: "sveisetrad",
    niva: "vanskelig",
    tekst: "<p>En rull med sveisetråd veier 15 kg. En sveis på en brakett bruker omtrent 12 g tråd. Hvor mange braketter kan du sveise med én rull?</p>",
    steg: [{ verdi: 15000, enhet: "g" }],
    svar: { verdi: 1250, enhet: "stk" },
    hint: ["Bruk samme enhet på begge: gjør kg om til g.", "\\(15\\ \\text{kg} = 15 \\cdot 1000\\ \\text{g} = 15\\,000\\ \\text{g}\\). Del så på 12."],
    losning: "<p>\\(15\\ \\text{kg} = 15\\,000\\ \\text{g}\\)<br>\\(15\\,000 : 12 = 1250\\) braketter.</p>"
  },
  {
    id: "feilen",
    niva: "vanskelig",
    tittel: "Finn feilen",
    tekst: "<p>En lærling skal bestille 1000 skruer som koster 0,795 kr per stykk. Han skriver: \\(0{,}795 \\cdot 1000 = 7950\\) kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er riktig pris for 1000 skruer?", svar: { verdi: 795, enhet: "kr" } },
      { tekst: "Hva gjorde lærlingen feil?", svar: { valg: ["Han flyttet kommaet fire plasser i stedet for tre", "Han skulle ha delt med 1000", "Han skulle ha ganget med 100"], riktig: 0 } }
    ],
    hint: ["Hvor mange nuller har 1000? Så mange plasser skal kommaet flytte seg.", "Overslag: én eske med 100 koster ca. 80 kr. Ti esker koster ca. 800 kr."],
    losning: "<p>\\(0{,}795 \\cdot 1000 = 795\\) kr. Kommaet skal flyttes tre plasser til høyre. Lærlingen flyttet det fire plasser. Et overslag (10 esker à ca. 80 kr) avslører feilen.</p>"
  },
  {
    id: "tre-seks-hundre",
    niva: "lett",
    tittel: "Hundre skiver",
    tekst: "<p>Én underlagsskive koster 3,60 kr. Hva koster 100 skiver?</p>",
    stegForSteg: false,
    svar: { verdi: 360, enhet: "kr" },
    hint: ["Gang med 100: kommaet to plasser til høyre.", "\\(3{,}60 \\cdot 100\\)."],
    losning: "<p>\\(3{,}60 \\cdot 100 = 360\\) kr.</p>"
  },
  {
    id: "syttito-ti",
    niva: "lett",
    tittel: "Ti plater",
    tekst: "<p>En bunt med 10 like plater er 72 mm tykk. Hvor tykk er én plate?</p>",
    stegForSteg: false,
    svar: { verdi: 7.2, enhet: "mm" },
    hint: ["Del tykkelsen på 10.", "\\(72 : 10\\): kommaet én plass til venstre."],
    losning: "<p>\\(72 : 10 = 7{,}2\\) mm.</p>"
  },
  {
    id: "aatte-tideler",
    niva: "lett",
    tittel: "Flatstål til kutteren",
    tekst: "<p>Flatstålet er 0,8 m langt. Laserkutteren vil ha målet i millimeter. Hvor mange mm er det?</p>",
    steg: [{ verdi: 1000 }],
    svar: { verdi: 800, enhet: "mm" },
    hint: ["Fra m til mm ganger du med 1000.", "\\(0{,}8 \\cdot 1000\\)."],
    losning: "<p>\\(0{,}8 \\cdot 1000 = 800\\) mm.</p>"
  },
  {
    id: "kabel-mm",
    niva: "middels",
    tittel: "Kabel på tegningen",
    tekst: "<p>En kabel er 2,4 m lang. Tegningen skal ha målet i mindre enheter.</p>",
    deler: [
      { tekst: "Hvor lang er kabelen i cm?", svar: { verdi: 240, enhet: "cm" } },
      { tekst: "Hvor lang er kabelen i mm?", svar: { verdi: 2400, enhet: "mm" } }
    ],
    hint: ["Fra m til cm ganger du med 100. Fra m til mm ganger du med 1000.", "\\(2{,}4 \\cdot 100\\) og \\(2{,}4 \\cdot 1000\\)."],
    losning: "<p>a) \\(2{,}4 \\cdot 100 = 240\\) cm.<br>b) \\(2{,}4 \\cdot 1000 = 2400\\) mm.</p>"
  },
  {
    id: "stang-560",
    niva: "middels",
    tittel: "Stang på 560 mm",
    tekst: "<p>En stang er kappet til 560 mm.</p>",
    steg: [{ verdi: 56, enhet: "cm" }],
    deler: [
      { tekst: "Hvor mange centimeter er det?", svar: { verdi: 56, enhet: "cm" } },
      { tekst: "Hvor mange meter er det?", svar: { verdi: 0.56, enhet: "m" } }
    ],
    hint: ["Fra mm til cm deler du med 10. Fra mm til m deler du med 1000.", "\\(560 : 10 = 56\\). \\(560 : 1000 = 0{,}56\\)."],
    losning: "<p>a) \\(560 : 10 = 56\\) cm.<br>b) \\(560 : 1000 = 0{,}56\\) m.</p>"
  },
  {
    id: "bolter-250",
    niva: "middels",
    tittel: "250 bolter",
    tekst: "<p>En pose med 100 bolter koster 64 kr. Du trenger 250 bolter til et stativ.</p>",
    steg: [{ verdi: 0.64, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster én bolt?", svar: { verdi: 0.64, enhet: "kr" } },
      { tekst: "Hva koster 250 bolter?", svar: { verdi: 160, enhet: "kr" } }
    ],
    hint: ["Del poseprisen på 100.", "\\(64 : 100 = 0{,}64\\). \\(0{,}64 \\cdot 250 = 160\\). Du kan også regne \\(2{,}5 \\cdot 64\\)."],
    losning: "<p>a) \\(64 : 100 = 0{,}64\\) kr.<br>b) \\(2{,}5 \\cdot 64 = 160\\) kr.</p>"
  },
  {
    id: "blikk-tykkelse",
    niva: "vanskelig",
    tittel: "Bunt med blikk",
    tekst: "<p>100 like blikkplater stablet oppå hverandre måler 35 mm. Du skal bestille 1000 plater.</p>",
    steg: [{ verdi: 0.35, enhet: "mm" }],
    deler: [
      { tekst: "Hvor tykk er én plate?", svar: { verdi: 0.35, enhet: "mm" } },
      { tekst: "Hvor tykk blir en bunt med 1000 plater?", svar: { verdi: 350, enhet: "mm" } }
    ],
    hint: ["Del buntens mål på 100.", "\\(35 : 100 = 0{,}35\\) mm. Gang med 1000, eller gang 35 mm med 10."],
    losning: "<p>a) \\(35 : 100 = 0{,}35\\) mm.<br>b) \\(0{,}35 \\cdot 1000 = 350\\) mm. Det er 10 ganger den første bunten.</p>"
  },
  {
    id: "kabel-pris",
    niva: "vanskelig",
    tittel: "Pris på kabel",
    tekst: "<p>Kabel på hylla koster 2,50 kr per meter.</p>",
    steg: [{ verdi: 250, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster 100 m?", svar: { verdi: 250, enhet: "kr" } },
      { tekst: "Hva koster 4,8 m?", svar: { verdi: 12, enhet: "kr" } }
    ],
    hint: ["Gang meterprisen med lengden.", "\\(2{,}50 \\cdot 100 = 250\\). \\(2{,}50 \\cdot 4{,}8 = 12\\)."],
    losning: "<p>a) \\(2{,}50 \\cdot 100 = 250\\) kr.<br>b) \\(2{,}50 \\cdot 4{,}8 = 12\\) kr.</p>"
  },
  {
    id: "sveis-12kg",
    niva: "vanskelig",
    tittel: "Rull med sveisetråd",
    tekst: "<p>En rull sveisetråd veier 12 kg. Hver brakett bruker 16 g tråd. Hvor mange braketter kan du sveise med én rull?</p>",
    steg: [{ verdi: 12000, enhet: "g" }],
    svar: { verdi: 750, enhet: "stk" },
    hint: ["Gjør kg om til g før du deler.", "\\(12 \\cdot 1000 = 12\\,000\\). \\(12\\,000 : 16\\)."],
    losning: "<p>\\(12\\ \\text{kg} = 12\\,000\\ \\text{g}\\). \\(12\\,000 : 16 = 750\\) braketter.</p>"
  },
  {
    id: "skivetykkelse",
    type: "verksted",
    niva: "middels",
    tittel: "Hvor tykk er én skive?",
    utstyr: "Skyvelære, 10 og 100 like underlagsskiver (eller blikkplater)",
    hms: "Hold arbeidsplassen ryddig. Skivene skal tilbake i riktig skuff.",
    tekst: "<p>Mari stabler 10 like underlagsskiver og måler bunken med skyvelære: 16 mm. Hvor tykk er én skive? Gjør det samme med skivene i verkstedet og sammenlign.</p>",
    svar: { verdi: 1.6, enhet: "mm" },
    hint: ["Bunken er ti skiver. Del på 10.", "\\(16 : 10\\): kommaet én plass til venstre."],
    losning: "<p>\\(16 : 10 = 1{,}6\\) mm. Ved å måle mange og dele blir målingen mer nøyaktig enn å måle én skive alene.</p>"
  },
  {
    id: "repetisjon-kart",
    type: "repetisjon",
    fra: "kapittel 0",
    niva: "lett",
    tekst: "<p>På kartleggingen fikk du dette: Et rør er 3,4 m langt. Du kapper av 1,2 m. Hvor mye er igjen, i centimeter?</p>",
    steg: [{ verdi: 2.2, enhet: "m" }],
    svar: { verdi: 220, enhet: "cm" },
    hint: ["Regn først ut hvor mange meter som er igjen.", "\\(3{,}4 - 1{,}2 = 2{,}2\\) m. Fra m til cm ganger vi med 100."],
    losning: "<p>\\(3{,}4 - 1{,}2 = 2{,}2\\) m \\(= 2{,}2 \\cdot 100\\) cm \\(= 220\\) cm.</p>"
  },
  {
    id: "eksamen",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et verksted kjøper 1000 m sveisetråd og 100 kg pulverlakk.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Sveisetråden koster 2,40 kr per meter. Hva koster 1000 m?", svar: { verdi: 2400, enhet: "kr" } },
      { tekst: "Pulverlakken koster 9600 kr for 100 kg. Hva koster 1 kg?", svar: { verdi: 96, enhet: "kr" } }
    ],
    hint: ["a) Gang med 1000: kommaet tre plasser til høyre.", "b) Del med 100: kommaet to plasser til venstre."],
    losning: "<p>a) \\(2{,}40 \\cdot 1000 = 2400\\) kr b) \\(9600 : 100 = 96\\) kr</p>"
  }
]);
