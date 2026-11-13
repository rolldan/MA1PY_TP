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
  },
  {
    id: "drill-masse-mer",
    niva: "lett",
    tittel: "mg, g, kg og tonn",
    tekst: "<p>\\(1\\ \\text{tonn} = 1000\\ \\text{kg}\\). \\(1\\ \\text{kg} = 1000\\ \\text{g}\\). \\(1\\ \\text{g} = 1000\\ \\text{mg}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(4{,}2\\ \\text{kg}\\) i gram", svar: { verdi: 4200, enhet: "g" } },
      { tekst: "\\(650\\ \\text{g}\\) i kilogram", svar: { verdi: 0.65, enhet: "kg" } },
      { tekst: "\\(2{,}5\\ \\text{tonn}\\) i kilogram", svar: { verdi: 2500, enhet: "kg" } },
      { tekst: "\\(3500\\ \\text{mg}\\) i gram", svar: { verdi: 3.5, enhet: "g" } }
    ],
    hint: ["Tonn til kg og kg til g: gang med 1000. G til kg og mg til g: del med 1000.", "\\(4{,}2 \\cdot 1000 = 4200\\) g. \\(3500 : 1000 = 3{,}5\\) g."],
    losning: "<p>a) 4200 g &nbsp; b) 0,65 kg &nbsp; c) 2500 kg &nbsp; d) 3,5 g</p>"
  },
  {
    id: "to-tettheter",
    niva: "lett",
    tittel: "Aluminium og olje",
    tekst: "<p>Masse = tetthet · volum. Enhetene i hvert regnestykke hører allerede sammen.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Aluminium 2,7 g/cm³. Hva veier 20 cm³?", svar: { verdi: 54, enhet: "g" } },
      { tekst: "Olje 0,85 kg/dm³. Hva veier 2 dm³?", svar: { verdi: 1.7, enhet: "kg" } }
    ],
    hint: ["Gang tetthet med volum. Ikke bytt enhet når de allerede passer.", "\\(2{,}7 \\cdot 20 = 54\\) g. \\(0{,}85 \\cdot 2 = 1{,}7\\) kg."],
    losning: "<p>a) 54 g &nbsp; b) 1,7 kg</p>"
  },
  {
    id: "firkantror",
    niva: "middels",
    tittel: "Firkantprofil",
    tekst: "<p>Et firkantprofil veier 3,2 kg/m. Du kapper 1,25 m til en ramme.</p>",
    steg: [{ verdi: 1.25, enhet: "m" }],
    deler: [
      { tekst: "Hvor mange kilogram veier biten?", svar: { verdi: 4, enhet: "kg" } },
      { tekst: "Hvor mange gram er det?", svar: { verdi: 4000, enhet: "g" } }
    ],
    hint: ["kg/m vil ha meter. Masse = 3,2 · lengden. Deretter gang med 1000 for gram.", "\\(3{,}2 \\cdot 1{,}25 = 4\\) kg = 4000 g."],
    losning: "<p>\\(3{,}2 \\cdot 1{,}25 = 4\\) kg = 4000 g.</p>"
  },
  {
    id: "alu-plate",
    niva: "middels",
    tittel: "Aluminiumsplate",
    tekst: "<p>Plata er 30 cm × 20 cm × 5 mm. Aluminium har tetthet 2,7 g/cm³.</p>",
    steg: [{ verdi: 0.5, enhet: "cm" }, { verdi: 300, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er plata?", svar: { verdi: 300, enhet: "cm³" } },
      { tekst: "Hvor mange gram veier den?", svar: { verdi: 810, enhet: "g" } },
      { tekst: "Hvor mange kilogram er det?", svar: { verdi: 0.81, enhet: "kg" } }
    ],
    hint: ["5 mm = 0,5 cm. Volum i cm³ først, deretter · 2,7.", "\\(30 \\cdot 20 \\cdot 0{,}5 = 300\\) cm³. \\(300 \\cdot 2{,}7 = 810\\) g = 0,81 kg."],
    losning: "<p>Volum \\(30 \\cdot 20 \\cdot 0{,}5 = 300\\) cm³.<br>Masse \\(300 \\cdot 2{,}7 = 810\\) g = 0,81 kg.</p>"
  },
  {
    id: "stopejern",
    niva: "middels",
    tittel: "Støpejern og stål",
    tekst: "<p>To biter har samme volum, 100 cm³. Støpejern har tetthet 7,2 g/cm³. Stål har tetthet 7,8 g/cm³.</p>",
    deler: [
      { tekst: "Hvor mange gram veier støpejernet?", svar: { verdi: 720, enhet: "g" } },
      { tekst: "Hvor mange gram veier stålet?", svar: { verdi: 780, enhet: "g" } },
      { tekst: "Hvor mange gram mer veier stålet?", svar: { verdi: 60, enhet: "g" } },
      { tekst: "Hvor mange kg/m³ er 7,2 g/cm³?", svar: { verdi: 7200, enhet: "kg/m³" } }
    ],
    hint: ["Masse = tetthet · 100. 1 g/cm³ = 1000 kg/m³.", "\\(7{,}2 \\cdot 100 = 720\\) g. \\(7{,}8 \\cdot 100 = 780\\) g. Forskjellen er 60 g. \\(7{,}2 \\cdot 1000 = 7200\\) kg/m³."],
    losning: "<p>Støpejern 720 g. Stål 780 g. Forskjell 60 g.<br>\\(7{,}2\\ \\text{g/cm}^3 = 7200\\ \\text{kg/m}^3\\).</p>"
  },
  {
    id: "dieseltank",
    niva: "vanskelig",
    tittel: "Dieseltank",
    tekst: "<p>En tank i verkstedbilen er 0,8 m × 0,4 m × 0,3 m. Dieselen har tetthet 0,84 kg/dm³. Du fyller tanken til 3/4.</p>",
    steg: [{ verdi: 0.096, enhet: "m³" }, { verdi: 96, enhet: "L" }, { verdi: 72, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter rommer tanken når den er full?", svar: { verdi: 96, enhet: "L" } },
      { tekst: "Hvor mange kilogram veier dieselen når tanken er full?", svar: { verdi: 80.64, enhet: "kg", tol: 0.05 } },
      { tekst: "Hvor mange kilogram veier dieselen ved 3/4 full tank?", svar: { verdi: 60.48, enhet: "kg", tol: 0.05 } }
    ],
    hint: ["Volum i m³ først. 1 m³ = 1000 L = 1000 dm³. Masse = 0,84 · volum i dm³. 3/4 av 96 er 72.", "\\(0{,}8 \\cdot 0{,}4 \\cdot 0{,}3 = 0{,}096\\) m³ = 96 L. \\(96 \\cdot 0{,}84 = 80{,}64\\) kg. \\(72 \\cdot 0{,}84 = 60{,}48\\) kg."],
    losning: "<p>Full tank: \\(0{,}096\\) m³ = 96 L.<br>\\(96 \\cdot 0{,}84 = 80{,}64\\) kg.<br>3/4 er 72 L, og \\(72 \\cdot 0{,}84 = 60{,}48\\) kg.</p>"
  },
  {
    id: "stang-spon",
    niva: "vanskelig",
    tittel: "Stang med bortboret spon",
    tekst: "<p>En stålstang på 1,2 m veier 4,5 kg/m. Du borer bort 40 cm³. Stål har tetthet 7,8 g/cm³.</p>",
    steg: [{ verdi: 5.4, enhet: "kg" }, { verdi: 5400, enhet: "g" }, { verdi: 312, enhet: "g" }],
    deler: [
      { tekst: "Hvor mange gram veier stanga før boring?", svar: { verdi: 5400, enhet: "g" } },
      { tekst: "Hvor mange gram spon borer du bort?", svar: { verdi: 312, enhet: "g" } },
      { tekst: "Hvor mange gram veier stanga etterpå?", svar: { verdi: 5088, enhet: "g" } }
    ],
    hint: ["Masse av stanga = 4,5 kg/m · 1,2 m. Gjør om til gram. Spon = 7,8 · 40.", "\\(4{,}5 \\cdot 1{,}2 = 5{,}4\\) kg = 5400 g. \\(7{,}8 \\cdot 40 = 312\\) g. \\(5400 - 312 = 5088\\) g."],
    losning: "<p>Før: 5,4 kg = 5400 g.<br>Spon: \\(40 \\cdot 7{,}8 = 312\\) g.<br>Etter: \\(5400 - 312 = 5088\\) g.</p>"
  },
  {
    id: "kobber-volum",
    niva: "vanskelig",
    tittel: "Kobberdel uten mål",
    tekst: "<p>En kobberdel veier 178 g. Tettheten er 8,9 g/cm³. Du har ikke lengde, bredde og høyde, bare vekta.</p>",
    steg: [{ verdi: 178, enhet: "g" }, { verdi: 8.9, enhet: "g/cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er delen?", svar: { verdi: 20, enhet: "cm³" } },
      { tekst: "Hvor mange kilogram er 178 g?", svar: { verdi: 0.178, enhet: "kg", tol: 0.005 } }
    ],
    hint: ["Volum = masse / tetthet. Kg får du ved å dele gram med 1000.", "\\(178 : 8{,}9 = 20\\) cm³. \\(178 : 1000 = 0{,}178\\) kg."],
    losning: "<p>\\(V = 178 : 8{,}9 = 20\\) cm³.<br>\\(178\\ \\text{g} = 0{,}178\\ \\text{kg}\\).</p>"
  }
]);
