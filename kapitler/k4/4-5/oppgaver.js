Bok.oppgaver([
  {
    id: "drill-bar",
    niva: "lett",
    tittel: "bar og kPa",
    tekst: "<p>\\(1\\ \\text{bar} = 100\\ \\text{kPa}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "2,2 bar i kPa", svar: { verdi: 220, enhet: "kPa" } },
      { tekst: "8 bar i kPa", svar: { verdi: 800, enhet: "kPa" } },
      { tekst: "150 kPa i bar", svar: { verdi: 1.5, enhet: "bar" } }
    ],
    hint: ["Til kPa: gang med 100. Til bar: del med 100.", "\\(2{,}2 \\cdot 100 = 220\\). \\(150 : 100 = 1{,}5\\)."],
    losning: "<p>a) 220 kPa &nbsp; b) 800 kPa &nbsp; c) 1,5 bar</p>"
  },
  {
    id: "drill-psi",
    niva: "lett",
    tekst: "<p>Bruk \\(1\\ \\text{bar} = 14{,}5\\ \\text{psi}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "1 bar i psi", svar: { verdi: 14.5, enhet: "psi" } },
      { tekst: "2,2 bar i psi", svar: { verdi: 31.9, enhet: "psi", tol: 0.05 } },
      { tekst: "8 bar i psi", svar: { verdi: 116, enhet: "psi", tol: 0.5 } }
    ],
    hint: ["Gang antall bar med 14,5.", "\\(2{,}2 \\cdot 14{,}5 = 31{,}9\\). \\(8 \\cdot 14{,}5 = 116\\)."],
    losning: "<p>a) 14,5 psi &nbsp; b) 31,9 psi &nbsp; c) 116 psi</p>"
  },
  {
    id: "profil-pumpe",
    niva: "lett",
    tekst: "<p>Et flattstål veier 1,44 kg/m. En pumpe gir 3 L/min.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva veier 2 m av stålet?", svar: { verdi: 2.88, enhet: "kg" } },
      { tekst: "Hvor mange liter gir pumpa på 10 min?", svar: { verdi: 30, enhet: "L" } }
    ],
    hint: ["Gang med det som står etter streken: meter eller minutter.", "\\(1{,}44 \\cdot 2 = 2{,}88\\) kg. \\(3 \\cdot 10 = 30\\) L."],
    losning: "<p>a) 2,88 kg &nbsp; b) 30 L</p>"
  },
  {
    id: "dekk-25",
    niva: "middels",
    tekst: "<p>Et dekk skal ha 2,5 bar. Bruk 1 bar = 100 kPa og 1 bar = 14,5 psi.</p>",
    deler: [
      { tekst: "Hvor mange kPa er 2,5 bar?", svar: { verdi: 250, enhet: "kPa" } },
      { tekst: "Hvor mange psi er 2,5 bar?", svar: { verdi: 36.25, enhet: "psi", tol: 0.05 } }
    ],
    hint: ["kPa: gang med 100. psi: gang med 14,5.", "\\(2{,}5 \\cdot 100 = 250\\). \\(2{,}5 \\cdot 14{,}5 = 36{,}25\\)."],
    losning: "<p>a) 250 kPa &nbsp; b) 36,25 psi</p>"
  },
  {
    id: "kompressor-kost",
    niva: "middels",
    tekst: "<p>Kompressoren er merket 2,2 kW og går i 3,5 timer. Strømmen koster 2 kr/kWh.</p>",
    steg: [{ verdi: 7.7, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange kWh brukes?", svar: { verdi: 7.7, enhet: "kWh" } },
      { tekst: "Hva koster økta?", svar: { verdi: 15.4, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["kWh = kW · timer. Kostnad = kWh · pris.", "\\(2{,}2 \\cdot 3{,}5 = 7{,}7\\) kWh. \\(7{,}7 \\cdot 2 = 15{,}4\\) kr."],
    losning: "<p>\\(2{,}2 \\cdot 3{,}5 = 7{,}7\\) kWh.<br>\\(7{,}7 \\cdot 2 = 15{,}4\\) kr.</p>"
  },
  {
    id: "kjole-stal",
    niva: "middels",
    tekst: "<p>Kjølevæskepumpa gir 6 L/min i 12 minutter. Du kapper 3,5 m flattstål à 1,44 kg/m.</p>",
    deler: [
      { tekst: "Hvor mange liter væske brukes?", svar: { verdi: 72, enhet: "L" } },
      { tekst: "Hvor mange kilogram veier stålet?", svar: { verdi: 5.04, enhet: "kg" } }
    ],
    hint: ["L/min · minutter = liter. kg/m · meter = kg.", "\\(6 \\cdot 12 = 72\\) L. \\(1{,}44 \\cdot 3{,}5 = 5{,}04\\) kg."],
    losning: "<p>a) 72 L &nbsp; b) 5,04 kg</p>"
  },
  {
    id: "flaske",
    niva: "vanskelig",
    tekst: "<p>En gassflaske er merket 200 bar. En regulator senker trykket til 2 bar før slangen. Ikke skru på flasken selv. Her skal du bare regne.</p>",
    deler: [
      { tekst: "Hvor mange kPa er det på flasken?", svar: { verdi: 20000, enhet: "kPa" } },
      { tekst: "Hvor mange kPa er det etter regulatoren?", svar: { verdi: 200, enhet: "kPa" } },
      { tekst: "Hva passer til et personbildekk?", svar: { valg: ["200 bar", "2 til 3 bar"], riktig: 1, forklaring: "Personbildekk ligger rundt 2–3 bar. 200 bar er flasketrykk." } }
    ],
    hint: ["1 bar = 100 kPa, også når tallet er stort.", "\\(200 \\cdot 100 = 20\\,000\\) kPa. \\(2 \\cdot 100 = 200\\) kPa."],
    losning: "<p>Flasken: \\(200 \\cdot 100 = 20\\,000\\) kPa.<br>Etter regulator: \\(2 \\cdot 100 = 200\\) kPa.<br>Dekk: 2–3 bar, ikke 200 bar.</p>"
  },
  {
    id: "sveiser",
    niva: "vanskelig",
    tekst: "<p>En sveiser trekker 4 kW i 1 time og 30 minutter. Prisen er 1,60 kr/kWh.</p>",
    steg: [{ verdi: 1.5, enhet: "h" }, { verdi: 6, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange desimaltimer går sveiseren?", svar: { verdi: 1.5, enhet: "h" } },
      { tekst: "Hvor mange kWh brukes?", svar: { verdi: 6, enhet: "kWh" } },
      { tekst: "Hva koster økta?", svar: { verdi: 9.6, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["30 minutter er 0,5 timer. Ikke skriv 1,30.", "\\(4 \\cdot 1{,}5 = 6\\) kWh. \\(6 \\cdot 1{,}6 = 9{,}6\\) kr."],
    losning: "<p>Tiden er 1,5 h, ikke 1,30.<br>\\(4 \\cdot 1{,}5 = 6\\) kWh.<br>\\(6 \\cdot 1{,}6 = 9{,}60\\) kr.</p>"
  },
  {
    id: "mal-dekk",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Manometeret viser 2,4 bar",
    utstyr: "Dekktrykkmåler, eventuelt kompressor med manometer. Merkeskilt med kW.",
    hms: "Ikke overstig trykket som står på dekksiden. Ikke rett luft mot hud eller øyne. Hørselvern ved kompressor. Gassflaske: bare les skiltet, ikke skru.",
    tekst: "<p>I økta leser dere et ekte dekk. I denne oppgaven er målet 2,4 bar. Gjør om til kPa og til psi. Bruk 1 bar = 14,5 psi. Skriv det ekte målet i skjemaet på verkstedkortet.</p>",
    deler: [
      { tekst: "2,4 bar i kPa", svar: { verdi: 240, enhet: "kPa" } },
      { tekst: "2,4 bar i psi", svar: { verdi: 34.8, enhet: "psi", tol: 0.05 } }
    ],
    hint: ["Gang med 100 for kPa og med 14,5 for psi.", "\\(2{,}4 \\cdot 100 = 240\\). \\(2{,}4 \\cdot 14{,}5 = 34{,}8\\)."],
    losning: "<p>240 kPa og 34,8 psi.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En list er 8,5 cm. Hvor mange millimeter er det?</p>",
    svar: { verdi: 85, enhet: "mm" },
    hint: ["Centimeter til millimeter: gang med 10.", "\\(8{,}5 \\cdot 10 = 85\\) mm."],
    losning: "<p>\\(8{,}5 \\cdot 10 = 85\\) mm.</p>"
  },
  {
    id: "rep-rabatt",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Et dekktrykkmål koster 480 kr. Du får 10 % rabatt. Hva betaler du?</p>",
    steg: [{ verdi: 48, enhet: "kr" }],
    svar: { verdi: 432, enhet: "kr" },
    hint: ["10 % av prisen trekkes fra.", "\\(0{,}10 \\cdot 480 = 48\\). \\(480 - 48 = 432\\) kr."],
    losning: "<p>\\(480 - 48 = 432\\) kr.</p>"
  },
  {
    id: "eksamen-strom",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tekst: "<p>En kompressor på 1,8 kW går 2 timer og 15 minutter hver dag i 5 dager. Strømmen koster 2,40 kr/kWh.</p>",
    steg: [{ verdi: 2.25, enhet: "h" }, { verdi: 4.05, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange desimaltimer er én dag?", svar: { verdi: 2.25, enhet: "h" } },
      { tekst: "Hvor mange kWh brukes per dag?", svar: { verdi: 4.05, enhet: "kWh" } },
      { tekst: "Hvor mange kWh brukes på 5 dager?", svar: { verdi: 20.25, enhet: "kWh" } },
      { tekst: "Hva koster de 5 dagene?", svar: { verdi: 48.6, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["15 minutter er 0,25 timer. kWh = kW · timer, deretter ganger du med dager og pris.", "\\(2{,}25 \\cdot 1{,}8 = 4{,}05\\) kWh per dag. \\(4{,}05 \\cdot 5 = 20{,}25\\). \\(20{,}25 \\cdot 2{,}40 = 48{,}60\\) kr."],
    losning: "<p>\\(2 + 15/60 = 2{,}25\\) h.<br>\\(1{,}8 \\cdot 2{,}25 = 4{,}05\\) kWh per dag.<br>\\(4{,}05 \\cdot 5 = 20{,}25\\) kWh.<br>\\(20{,}25 \\cdot 2{,}40 = 48{,}60\\) kr.</p>"
  },
  {
    id: "drill-trykk-mer",
    niva: "lett",
    tittel: "bar, kPa og psi",
    tekst: "<p>\\(1\\ \\text{bar} = 100\\ \\text{kPa} = 14{,}5\\ \\text{psi}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "1,8 bar i kPa", svar: { verdi: 180, enhet: "kPa" } },
      { tekst: "350 kPa i bar", svar: { verdi: 3.5, enhet: "bar" } },
      { tekst: "3 bar i psi", svar: { verdi: 43.5, enhet: "psi" } }
    ],
    hint: ["Til kPa: gang med 100. Til bar: del med 100. Til psi: gang med 14,5.", "\\(1{,}8 \\cdot 100 = 180\\). \\(350 : 100 = 3{,}5\\). \\(3 \\cdot 14{,}5 = 43{,}5\\)."],
    losning: "<p>a) 180 kPa &nbsp; b) 3,5 bar &nbsp; c) 43,5 psi</p>"
  },
  {
    id: "drill-sammen",
    niva: "lett",
    tittel: "kWh, L/min og kg/m",
    tekst: "<p>Det som står etter streken, er det du ganger med.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "1,5 kW i 4 timer. Hvor mange kWh?", svar: { verdi: 6, enhet: "kWh" } },
      { tekst: "2,5 L/min i 8 minutter. Hvor mange liter?", svar: { verdi: 20, enhet: "L" } },
      { tekst: "3,6 kg/m og 0,5 m. Hvor mange kilogram?", svar: { verdi: 1.8, enhet: "kg" } }
    ],
    hint: ["kW · timer = kWh. L/min · minutter = L. kg/m · meter = kg.", "\\(1{,}5 \\cdot 4 = 6\\). \\(2{,}5 \\cdot 8 = 20\\). \\(3{,}6 \\cdot 0{,}5 = 1{,}8\\)."],
    losning: "<p>a) 6 kWh &nbsp; b) 20 L &nbsp; c) 1,8 kg</p>"
  },
  {
    id: "dekk-23",
    niva: "middels",
    tittel: "Dekk på 2,3 bar",
    tekst: "<p>Et dekk skal ha 2,3 bar. Bruk 1 bar = 100 kPa og 1 bar = 14,5 psi.</p>",
    deler: [
      { tekst: "Hvor mange kPa er 2,3 bar?", svar: { verdi: 230, enhet: "kPa" } },
      { tekst: "Hvor mange psi er 2,3 bar?", svar: { verdi: 33.35, enhet: "psi", tol: 0.05 } }
    ],
    hint: ["kPa: gang med 100. psi: gang med 14,5.", "\\(2{,}3 \\cdot 100 = 230\\). \\(2{,}3 \\cdot 14{,}5 = 33{,}35\\)."],
    losning: "<p>a) 230 kPa &nbsp; b) 33,35 psi</p>"
  },
  {
    id: "slip-kost",
    niva: "middels",
    tittel: "Vinkelsliper i tre kvarter",
    tekst: "<p>Vinkelsliperen er merket 1,2 kW og går i 45 minutter. Strømmen koster 2,50 kr/kWh.</p>",
    steg: [{ verdi: 0.75, enhet: "h" }, { verdi: 0.9, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange desimaltimer går sliperen?", svar: { verdi: 0.75, enhet: "h" } },
      { tekst: "Hvor mange kWh brukes?", svar: { verdi: 0.9, enhet: "kWh" } },
      { tekst: "Hva koster økta?", svar: { verdi: 2.25, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["45 minutter er 0,75 timer, ikke 0,45. kWh = kW · timer. Kostnad = kWh · pris.", "\\(45 : 60 = 0{,}75\\) h. \\(1{,}2 \\cdot 0{,}75 = 0{,}9\\) kWh. \\(0{,}9 \\cdot 2{,}50 = 2{,}25\\) kr."],
    losning: "<p>0,75 h.<br>\\(1{,}2 \\cdot 0{,}75 = 0{,}9\\) kWh.<br>\\(0{,}9 \\cdot 2{,}50 = 2{,}25\\) kr.</p>"
  },
  {
    id: "pumpe-slange",
    niva: "middels",
    tittel: "Pumpe og slange",
    tekst: "<p>Kjølevæskepumpa gir 4,5 L/min i 20 minutter. En slange veier 2,8 kg/m, og du kapper 6 m. Tanken på maskinen rommer 80 L.</p>",
    deler: [
      { tekst: "Hvor mange liter gir pumpa?", svar: { verdi: 90, enhet: "L" } },
      { tekst: "Hvor mange kilogram veier slangen?", svar: { verdi: 16.8, enhet: "kg" } },
      { tekst: "Renner det over i tanken på 80 L?", svar: { valg: ["Ja, 90 L er mer enn 80 L", "Nei, 90 L får plass"], riktig: 0, forklaring: "90 L er mer enn 80 L. Stopp pumpa før tanken er full." } }
    ],
    hint: ["L/min · minutter = liter. kg/m · meter = kg. Sammenlign liter med 80.", "\\(4{,}5 \\cdot 20 = 90\\) L. \\(2{,}8 \\cdot 6 = 16{,}8\\) kg. 90 er større enn 80."],
    losning: "<p>a) 90 L &nbsp; b) 16,8 kg &nbsp; c) Ja, det renner over. 90 L er mer enn 80 L.</p>"
  },
  {
    id: "kompressor-kveld",
    niva: "vanskelig",
    tittel: "Kompressor en kveld",
    tekst: "<p>Kompressoren på 2,2 kW går 1 time og 45 minutter. Strømmen koster 1,80 kr/kWh.</p>",
    steg: [{ verdi: 1.75, enhet: "h" }, { verdi: 3.85, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange desimaltimer går kompressoren?", svar: { verdi: 1.75, enhet: "h" } },
      { tekst: "Hvor mange kWh brukes?", svar: { verdi: 3.85, enhet: "kWh" } },
      { tekst: "Hva koster økta?", svar: { verdi: 6.93, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["45 minutter er 0,75 timer. Ikke skriv 1,45. kWh = kW · timer.", "\\(1 + 45/60 = 1{,}75\\) h. \\(2{,}2 \\cdot 1{,}75 = 3{,}85\\) kWh. \\(3{,}85 \\cdot 1{,}80 = 6{,}93\\) kr."],
    losning: "<p>1 t 45 min = 1,75 h, ikke 1,45 h.<br>\\(2{,}2 \\cdot 1{,}75 = 3{,}85\\) kWh.<br>\\(3{,}85 \\cdot 1{,}80 = 6{,}93\\) kr.</p>"
  },
  {
    id: "flaske-150",
    niva: "vanskelig",
    tittel: "Flaske og regulator",
    tekst: "<p>En gassflaske er merket 150 bar. Regulatoren senker trykket til 1,5 bar før slangen. Ikke skru på flaska. Her skal du bare regne. Bruk 1 bar = 14,5 psi.</p>",
    deler: [
      { tekst: "Hvor mange kPa er det på flaska?", svar: { verdi: 15000, enhet: "kPa" } },
      { tekst: "Hvor mange kPa er det etter regulatoren?", svar: { verdi: 150, enhet: "kPa" } },
      { tekst: "Hvor mange psi er 1,5 bar?", svar: { verdi: 21.75, enhet: "psi", tol: 0.05 } },
      { tekst: "Hva passer til et personbildekk?", svar: { valg: ["150 bar", "omtrent 2 til 3 bar"], riktig: 1, forklaring: "Personbildekk ligger rundt 2–3 bar. 150 bar er flasketrykk." } }
    ],
    hint: ["1 bar = 100 kPa, også når tallet er stort. psi: gang bar med 14,5.", "\\(150 \\cdot 100 = 15\\,000\\) kPa. \\(1{,}5 \\cdot 100 = 150\\) kPa. \\(1{,}5 \\cdot 14{,}5 = 21{,}75\\) psi."],
    losning: "<p>Flaske: 15 000 kPa.<br>Etter regulator: 150 kPa = 21,75 psi.<br>Dekk: 2–3 bar, ikke 150 bar.</p>"
  },
  {
    id: "sveiseokt",
    niva: "vanskelig",
    tittel: "Sveis i 2 timer og 12 minutter",
    tekst: "<p>En sveiser trekker 3,6 kW i 2 timer og 12 minutter. Strømmen koster 1,50 kr/kWh.</p>",
    steg: [{ verdi: 0.2, enhet: "h" }, { verdi: 2.2, enhet: "h" }, { verdi: 7.92, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange desimaltimer går sveiseren?", svar: { verdi: 2.2, enhet: "h" } },
      { tekst: "Hvor mange kWh brukes?", svar: { verdi: 7.92, enhet: "kWh" } },
      { tekst: "Hva koster økta?", svar: { verdi: 11.88, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva er riktig tid?", svar: { valg: ["2,12 h", "2,2 h"], riktig: 1, forklaring: "12 minutter er 0,2 timer, ikke 0,12." } }
    ],
    hint: ["12 minutter delt på 60 er 0,2, ikke 0,12. kWh = kW · timer.", "\\(2 + 12/60 = 2{,}2\\) h. \\(3{,}6 \\cdot 2{,}2 = 7{,}92\\) kWh. \\(7{,}92 \\cdot 1{,}50 = 11{,}88\\) kr."],
    losning: "<p>2 t 12 min = 2,2 h, ikke 2,12 h.<br>\\(3{,}6 \\cdot 2{,}2 = 7{,}92\\) kWh.<br>\\(7{,}92 \\cdot 1{,}50 = 11{,}88\\) kr.</p>"
  }
]);
