Bok.oppgaver([
  {
    id: "drill-masse",
    niva: "lett",
    tittel: "Gram og kilogram",
    tekst: "<p>\\(1\\ \\text{kg} = 1000\\ \\text{g}\\) og \\(1\\ \\text{g} = 1000\\ \\text{mg}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(2{,}5\\ \\text{kg}\\) i gram", svar: { verdi: 2500, enhet: "g" } },
      { tekst: "\\(450\\ \\text{g}\\) i kilogram", svar: { verdi: 0.45, enhet: "kg" } },
      { tekst: "\\(3{,}2\\ \\text{kg}\\) i gram", svar: { verdi: 3200, enhet: "g" } },
      { tekst: "\\(800\\ \\text{mg}\\) i gram", svar: { verdi: 0.8, enhet: "g" } }
    ],
    hint: ["Kg til g: gang med 1000. G til kg: del med 1000. Mg til g: del med 1000.", "\\(2{,}5 \\cdot 1000 = 2500\\) g. \\(800 : 1000 = 0{,}8\\) g."],
    losning: "<p>a) 2500 g &nbsp; b) 0,45 kg &nbsp; c) 3200 g &nbsp; d) 0,8 g</p>"
  },
  {
    id: "vann-stal",
    niva: "lett",
    tekst: "<p>Vann har tetthet 1,0 g/cm³. Stål har tetthet 7,8 g/cm³.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange gram veier 250 cm³ vann?", svar: { verdi: 250, enhet: "g" } },
      { tekst: "Hvor mange gram veier 10 cm³ stål?", svar: { verdi: 78, enhet: "g" } }
    ],
    hint: ["Masse = tetthet · volum. Enhetene er allerede g og cm³.", "\\(1{,}0 \\cdot 250 = 250\\) g. \\(7{,}8 \\cdot 10 = 78\\) g."],
    losning: "<p>a) 250 g &nbsp; b) 78 g</p>"
  },
  {
    id: "flattstal",
    niva: "middels",
    tittel: "Bit på 75 mm",
    tekst: "<p>Flattstål 6 × 30 mm veier 1,44 kg/m. Du kapper 75 mm.</p>",
    steg: [{ verdi: 0.075, enhet: "m" }],
    deler: [
      { tekst: "Hvor mange kilogram veier biten?", svar: { verdi: 0.108, enhet: "kg" } },
      { tekst: "Hvor mange gram er det?", svar: { verdi: 108, enhet: "g" } }
    ],
    hint: ["75 mm = 0,075 m. Masse = 1,44 kg/m · lengde i meter.", "\\(1{,}44 \\cdot 0{,}075 = 0{,}108\\) kg = 108 g. Snarvei: 1,44 g/mm · 75 mm."],
    losning: "<p>\\(75\\ \\text{mm} = 0{,}075\\ \\text{m}\\).<br>\\(1{,}44 \\cdot 0{,}075 = 0{,}108\\) kg \\(= 108\\) g.</p>"
  },
  {
    id: "aluminium",
    niva: "middels",
    tekst: "<p>En aluminiumskloss er 8 cm × 5 cm × 2 cm. Tettheten er 2,7 g/cm³. En kanne olje rommer 4 dm³, og oljen har tetthet 0,9 kg/dm³.</p>",
    deler: [
      { tekst: "Hvor mange gram veier klossen?", svar: { verdi: 216, enhet: "g" } },
      { tekst: "Hvor mange kilogram veier oljen?", svar: { verdi: 3.6, enhet: "kg" } }
    ],
    hint: ["Volum av klossen først, i cm³. Oljen er allerede i dm³, samme enhet som tettheten.", "\\(8 \\cdot 5 \\cdot 2 = 80\\) cm³, \\(80 \\cdot 2{,}7 = 216\\) g. \\(4 \\cdot 0{,}9 = 3{,}6\\) kg."],
    losning: "<p>a) \\(80 \\cdot 2{,}7 = 216\\) g<br>b) \\(4 \\cdot 0{,}9 = 3{,}6\\) kg</p>"
  },
  {
    id: "kg-m3",
    niva: "middels",
    tekst: "<p>Stål har tetthet 7,8 g/cm³. En leverandør vil ha tallet i kg/m³.</p>",
    svar: { verdi: 7800, enhet: "kg/m³" },
    hint: ["1 g/cm³ = 1000 kg/m³.", "\\(7{,}8 \\cdot 1000 = 7800\\) kg/m³."],
    losning: "<p>\\(7{,}8 \\cdot 1000 = 7800\\) kg/m³.</p>"
  },
  {
    id: "hull",
    niva: "vanskelig",
    tittel: "Spon fra fem hull",
    tekst: "<p>Fem hull med diameter 14 mm bores gjennom en 5 mm jernplate. Tettheten er 7,8 g/cm³. Bruk \\(\\pi = 3{,}14\\). Svar i hele gram.</p>",
    steg: [{ verdi: 0.7693, enhet: "cm³", tol: 0.01 }, { verdi: 3.8465, enhet: "cm³", tol: 0.02 }],
    svar: { verdi: 30, enhet: "g", tol: 0.5 },
    hint: ["Radius er 7 mm = 0,7 cm. Tykkelsen er 0,5 cm. Volum av ett hull er π · r · r · h.", "\\(3{,}14 \\cdot 0{,}7 \\cdot 0{,}7 \\cdot 0{,}5 = 0{,}7693\\) cm³. Fem hull · 7,8 g/cm³ ≈ 30 g."],
    losning: "<p>Ett hull: \\(3{,}14 \\cdot 0{,}49 \\cdot 0{,}5 = 0{,}7693\\) cm³.<br>Fem hull: \\(3{,}8465\\) cm³.<br>\\(3{,}8465 \\cdot 7{,}8 = 30{,}0\\) g.</p>"
  },
  {
    id: "finn-volum",
    niva: "vanskelig",
    tekst: "<p>En ståldel veier 390 g. Tettheten er 7,8 g/cm³. Du har ikke målene, bare vekta.</p>",
    svar: { verdi: 50, enhet: "cm³" },
    hint: ["Volum = masse / tetthet.", "\\(390 : 7{,}8 = 50\\) cm³."],
    losning: "<p>\\(V = 390 : 7{,}8 = 50\\) cm³.</p>"
  },
  {
    id: "vei-biten",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Legg biten på vekta",
    utstyr: "Flattstål 6 × 30 mm, båndsag eller allerede kappet bit på 75 mm, vekt",
    hms: "Hansker mot grader. Bruk ikke sag uten godkjenning. Bit og spon tilbake i riktig kasse.",
    tekst: "<p>Regn ut massen til en bit på 75 mm når profilet veier 1,44 kg/m. Vei etterpå. Svar det du regnet, i gram.</p>",
    svar: { verdi: 108, enhet: "g" },
    hint: ["1,44 kg/m = 1,44 g/mm.", "\\(1{,}44 \\cdot 75 = 108\\) g."],
    losning: "<p>\\(1{,}44 \\cdot 75 = 108\\) g. Avvik på vekta kan komme av grader, lengdemål eller at profilet ikke er nøyaktig 1,44 kg/m.</p>"
  },
  {
    id: "rep-stang",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stang på tegningen er 2450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m" },
    hint: ["Del med 1000.", "\\(2450 : 1000 = 2{,}45\\) m."],
    losning: "<p>\\(2450 : 1000 = 2{,}45\\) m.</p>"
  },
  {
    id: "rep-grense",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "middels",
    tekst: "<p>Et hull skal være \\(72 \\pm 0{,}3\\) mm. Du måler 72,5 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er største godkjente mål?", svar: { verdi: 72.3, enhet: "mm" } },
      { tekst: "Er 72,5 mm godkjent?", svar: { valg: ["Ja", "Nei, det er over største mål"], riktig: 1, forklaring: "72,5 er større enn 72,3." } }
    ],
    hint: ["Største mål er 72 pluss toleransen.", "\\(72 + 0{,}3 = 72{,}3\\) mm. 72,5 er større."],
    losning: "<p>Største mål er 72,3 mm. 72,5 mm er utenfor og ikke godkjent.</p>"
  },
  {
    id: "eksamen-plate",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>En stålplate er 200 mm × 100 mm × 8 mm. Tettheten er 7,8 g/cm³.</p>",
    steg: [{ verdi: 20, enhet: "cm" }, { verdi: 10, enhet: "cm" }, { verdi: 0.8, enhet: "cm" }],
    deler: [
      { tekst: "Hvor mange cm³ er plata?", svar: { verdi: 160, enhet: "cm³" } },
      { tekst: "Hvor mange gram veier den?", svar: { verdi: 1248, enhet: "g" } }
    ],
    hint: ["Gjør om til cm: 20 cm, 10 cm og 0,8 cm. Deretter tetthet · volum.", "\\(20 \\cdot 10 \\cdot 0{,}8 = 160\\) cm³. \\(160 \\cdot 7{,}8 = 1248\\) g."],
    losning: "<p>Volum \\(20 \\cdot 10 \\cdot 0{,}8 = 160\\) cm³.<br>Masse \\(160 \\cdot 7{,}8 = 1248\\) g.</p>"
  }
]);
