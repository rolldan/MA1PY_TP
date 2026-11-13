Bok.oppgaver([
  {
    id: "drill-liter",
    niva: "lett",
    tittel: "Liter og dm³",
    tekst: "<p>\\(1\\ \\text{L} = 1\\ \\text{dm}^3 = 1000\\ \\text{mL}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(2{,}5\\ \\text{L}\\) i desiliter", svar: { verdi: 25, enhet: "dl" } },
      { tekst: "\\(2{,}5\\ \\text{L}\\) i milliliter", svar: { verdi: 2500, enhet: "ml" } },
      { tekst: "\\(750\\ \\text{mL}\\) i liter", svar: { verdi: 0.75, enhet: "L" } },
      { tekst: "\\(1{,}5\\ \\text{dm}^3\\) i liter", svar: { verdi: 1.5, enhet: "L" } }
    ],
    hint: ["1 L = 10 dL = 1000 mL. 1 L = 1 dm³.", "\\(2{,}5 \\cdot 10 = 25\\) dL. \\(2{,}5 \\cdot 1000 = 2500\\) mL."],
    losning: "<p>a) 25 dL &nbsp; b) 2500 mL &nbsp; c) 0,75 L &nbsp; d) 1,5 L</p>"
  },
  {
    id: "drill-areal",
    niva: "lett",
    tittel: "Areal og volum",
    tekst: "<p>Areal: faktor 100 per trinn. Volum: faktor 1000 per trinn.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(3\\ \\text{m}^2\\) i dm²", svar: { verdi: 300, enhet: "dm²" } },
      { tekst: "\\(500\\ \\text{cm}^2\\) i dm²", svar: { verdi: 5, enhet: "dm²" } },
      { tekst: "\\(2\\ \\text{dm}^3\\) i cm³", svar: { verdi: 2000, enhet: "cm³" } },
      { tekst: "\\(500\\ \\text{cm}^3\\) i dm³", svar: { verdi: 0.5, enhet: "dm³" } }
    ],
    hint: ["1 m² = 100 dm². 1 dm² = 100 cm². 1 dm³ = 1000 cm³.", "\\(3 \\cdot 100 = 300\\) dm². \\(500 : 100 = 5\\) dm². \\(2 \\cdot 1000 = 2000\\) cm³."],
    losning: "<p>a) 300 dm² &nbsp; b) 5 dm² &nbsp; c) 2000 cm³ &nbsp; d) 0,5 dm³</p>"
  },
  {
    id: "oljekanne",
    niva: "middels",
    tekst: "<p>En kanne motorolje rommer 4 L. Du skal fordele den i mindre mål.</p>",
    deler: [
      { tekst: "Hvor mange centiliter er 4 L?", svar: { verdi: 400, enhet: "cl" } },
      { tekst: "Hvor mange dm³ er 4 L?", svar: { verdi: 4, enhet: "dm³" } }
    ],
    hint: ["1 L = 100 cL. 1 L = 1 dm³.", "\\(4 \\cdot 100 = 400\\) cL. Volumet i dm³ er det samme tallet som i liter."],
    losning: "<p>a) \\(4 \\cdot 100 = 400\\) cL<br>b) \\(4\\ \\text{L} = 4\\ \\text{dm}^3\\)</p>"
  },
  {
    id: "plate",
    niva: "middels",
    tekst: "<p>En dekkplate er 1,2 m lang og 0,8 m bred. Laseren vil ha arealet i cm² også.</p>",
    steg: [{ verdi: 0.96, enhet: "m²" }],
    deler: [
      { tekst: "Hva er arealet i m²?", svar: { verdi: 0.96, enhet: "m²" } },
      { tekst: "Hva er arealet i cm²?", svar: { verdi: 9600, enhet: "cm²" } }
    ],
    hint: ["Areal = lengde · bredde. 1 m² = 10 000 cm².", "\\(1{,}2 \\cdot 0{,}8 = 0{,}96\\) m². \\(0{,}96 \\cdot 10\\,000 = 9600\\) cm²."],
    losning: "<p>a) \\(1{,}2 \\cdot 0{,}8 = 0{,}96\\) m²<br>b) \\(0{,}96 \\cdot 10\\,000 = 9600\\) cm²</p>"
  },
  {
    id: "platting",
    niva: "middels",
    tittel: "Betongplatting",
    tekst: "<p>Plattingen er 575 cm lang, 250 cm bred og 10 cm tykk. Betongen koster 2000 kr per m³.</p>",
    steg: [{ verdi: 5.75, enhet: "m" }, { verdi: 2.5, enhet: "m" }, { verdi: 0.1, enhet: "m" }],
    deler: [
      { tekst: "Hvor mange m³ betong trengs?", svar: { verdi: 1.4375, enhet: "m³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 1437.5, enhet: "L" } },
      { tekst: "Hva koster betongen?", svar: { verdi: 2875, enhet: "kr" } }
    ],
    hint: ["Gjør om til meter først: 5,75 m, 2,50 m og 0,10 m.", "\\(5{,}75 \\cdot 2{,}50 \\cdot 0{,}10 = 1{,}4375\\) m³. 1 m³ = 1000 L. Prisen er volum ganger 2000."],
    losning: "<p>\\(5{,}75 \\cdot 2{,}50 \\cdot 0{,}10 = 1{,}4375\\) m³.<br>\\(1{,}4375 \\cdot 1000 = 1437{,}5\\) L.<br>\\(1{,}4375 \\cdot 2000 = 2875\\) kr.</p>"
  },
  {
    id: "gaveeske",
    niva: "vanskelig",
    tittel: "Eske til laseren",
    tekst: "<p>En gaveeske skal romme 3 dm³. Forslaget innvendig er 15 cm × 20 cm × 10 cm. Laseren skal ha målene i millimeter.</p>",
    steg: [{ verdi: 3000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er forslaget?", svar: { verdi: 3000, enhet: "cm³" } },
      { tekst: "Hvor mange dm³ er det?", svar: { verdi: 3, enhet: "dm³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 3, enhet: "L" } },
      { tekst: "Holder esken kravet på 3 dm³?", svar: { valg: ["Ja, volumet er nøyaktig 3 dm³", "Nei, det blir bare 3 cm³"], riktig: 0, forklaring: "3000 cm³ = 3 dm³ = 3 L." } }
    ],
    hint: ["Gang de tre sidene i centimeter. 1 dm³ = 1000 cm³.", "\\(15 \\cdot 20 \\cdot 10 = 3000\\) cm³ = 3 dm³. I mm: 150 × 200 × 100."],
    losning: "<p>\\(15 \\cdot 20 \\cdot 10 = 3000\\) cm³ \\(= 3\\) dm³ \\(= 3\\) L. Esken holder kravet. Laseren får 150 mm × 200 mm × 100 mm.</p>"
  },
  {
    id: "tank",
    niva: "vanskelig",
    tekst: "<p>En oppsamlingstank er 0,6 m × 0,4 m × 0,25 m. Ved siden av står en 50 L-dunk.</p>",
    steg: [{ verdi: 0.06, enhet: "m³" }],
    deler: [
      { tekst: "Hvor mange m³ er tanken?", svar: { verdi: 0.06, enhet: "m³" } },
      { tekst: "Hvor mange liter er tanken?", svar: { verdi: 60, enhet: "L" } },
      { tekst: "Hva rommer mest?", svar: { valg: ["Tanken", "Dunken på 50 L"], riktig: 0, forklaring: "Tanken er 60 L, dunken er 50 L." } }
    ],
    hint: ["Volum i m³ først. 1 m³ = 1000 L.", "\\(0{,}6 \\cdot 0{,}4 \\cdot 0{,}25 = 0{,}06\\) m³ \\(= 60\\) L."],
    losning: "<p>\\(0{,}6 \\cdot 0{,}4 \\cdot 0{,}25 = 0{,}06\\) m³.<br>\\(0{,}06 \\cdot 1000 = 60\\) L. Tanken rommer mer enn dunken.</p>"
  },
  {
    id: "liter-duell",
    type: "verksted",
    merke: "V/K",
    niva: "lett",
    tittel: "Kjølevæske i målebegeret",
    utstyr: "Målebeger, trakt, kanne med kjølevæske eller vann merket som øvingsvæske",
    hms: "Hansker. Ikke drikk av verkstedkannene. Tørk søl med en gang. Lokk på etter måling.",
    tekst: "<p>Du måler opp 350 mL kjølevæske. Hvor mange liter er det? Skriv også dm³ i skjemaet på verkstedkortet: tallet skal være det samme.</p>",
    svar: { verdi: 0.35, enhet: "L" },
    hint: ["1000 mL = 1 L. Del med 1000.", "\\(350 : 1000 = 0{,}35\\) L = 0,35 dm³."],
    losning: "<p>\\(350\\ \\text{mL} = 0{,}35\\ \\text{L} = 0{,}35\\ \\text{dm}^3\\).</p>"
  },
  {
    id: "rep-plate-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stålplate er 2,5 m lang. Hvor mange millimeter skal laseren ha?</p>",
    svar: { verdi: 2500, enhet: "mm" },
    hint: ["Fra meter til millimeter ganger du med 1000.", "\\(2{,}5 \\cdot 1000 = 2500\\) mm."],
    losning: "<p>\\(2{,}5 \\cdot 1000 = 2500\\) mm.</p>"
  },
  {
    id: "rep-black-week",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Et målebegersett koster 240 kr. I uke 47 er det black week med 25 % avslag. Hva koster settet da?</p>",
    steg: [{ verdi: 60, enhet: "kr" }],
    svar: { verdi: 180, enhet: "kr" },
    hint: ["25 % av 240 er en fjerdedel. Trekk avslaget fra prisen.", "\\(0{,}25 \\cdot 240 = 60\\). \\(240 - 60 = 180\\) kr."],
    losning: "<p>\\(0{,}25 \\cdot 240 = 60\\) kr i avslag.<br>\\(240 - 60 = 180\\) kr.</p>"
  },
  {
    id: "eksamen-volum",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Gjør om uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(2{,}5\\ \\text{m}^2\\) i cm²", svar: { verdi: 25000, enhet: "cm²" } },
      { tekst: "\\(800\\ \\text{cm}^3\\) i liter", svar: { verdi: 0.8, enhet: "L" } }
    ],
    hint: ["1 m² = 10 000 cm². 1000 cm³ = 1 L.", "\\(2{,}5 \\cdot 10\\,000 = 25\\,000\\) cm². \\(800 : 1000 = 0{,}8\\) L."],
    losning: "<p>a) 25 000 cm² &nbsp; b) 0,8 L, fordi 800 cm³ = 0,8 dm³ = 0,8 L.</p>"
  }
]);
