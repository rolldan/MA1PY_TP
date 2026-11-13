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
  },
  {
    id: "drill-lengde",
    niva: "lett",
    tittel: "mm, cm, dm og m",
    tekst: "<p>Lengde: faktor 10 per trinn. Gjør om.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(3{,}6\\ \\text{m}\\) i centimeter", svar: { verdi: 360, enhet: "cm" } },
      { tekst: "\\(85\\ \\text{mm}\\) i centimeter", svar: { verdi: 8.5, enhet: "cm" } },
      { tekst: "\\(2{,}4\\ \\text{dm}\\) i millimeter", svar: { verdi: 240, enhet: "mm" } },
      { tekst: "\\(0{,}45\\ \\text{km}\\) i meter", svar: { verdi: 450, enhet: "m" } }
    ],
    hint: ["1 m = 100 cm. 1 cm = 10 mm. 1 dm = 100 mm. 1 km = 1000 m.", "\\(3{,}6 \\cdot 100 = 360\\) cm. \\(2{,}4 \\cdot 100 = 240\\) mm. \\(0{,}45 \\cdot 1000 = 450\\) m."],
    losning: "<p>a) 360 cm &nbsp; b) 8,5 cm &nbsp; c) 240 mm &nbsp; d) 450 m</p>"
  },
  {
    id: "drill-veske",
    niva: "lett",
    tittel: "Verkstedvæske",
    tekst: "<p>\\(1\\ \\text{L} = 10\\ \\text{dL} = 100\\ \\text{cL} = 1000\\ \\text{mL} = 1\\ \\text{dm}^3\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(1{,}8\\ \\text{L}\\) i desiliter", svar: { verdi: 18, enhet: "dl" } },
      { tekst: "\\(250\\ \\text{mL}\\) i centiliter", svar: { verdi: 25, enhet: "cl" } },
      { tekst: "\\(3{,}5\\ \\text{dm}^3\\) i liter", svar: { verdi: 3.5, enhet: "L" } },
      { tekst: "\\(80\\ \\text{cL}\\) i liter", svar: { verdi: 0.8, enhet: "L" } }
    ],
    hint: ["1 cL = 10 mL. 1 L = 100 cL. 1 L = 1 dm³.", "\\(250 : 10 = 25\\) cL. \\(80 : 100 = 0{,}8\\) L."],
    losning: "<p>a) 18 dL &nbsp; b) 25 cL &nbsp; c) 3,5 L &nbsp; d) 0,8 L</p>"
  },
  {
    id: "kjolekanne",
    niva: "middels",
    tittel: "Kanne på 12 L",
    tekst: "<p>En kanne kjølevæske rommer 12 L. Du skal skrive volumet til den som regner i dm³, og til den som måler i mindre mål.</p>",
    deler: [
      { tekst: "Hvor mange dm³ er 12 L?", svar: { verdi: 12, enhet: "dm³" } },
      { tekst: "Hvor mange cm³ er 12 L?", svar: { verdi: 12000, enhet: "cm³" } },
      { tekst: "Hvor mange desiliter er 12 L?", svar: { verdi: 120, enhet: "dl" } }
    ],
    hint: ["1 L = 1 dm³ = 1000 cm³ = 10 dL.", "\\(12 \\cdot 1000 = 12\\,000\\) cm³. \\(12 \\cdot 10 = 120\\) dL."],
    losning: "<p>a) 12 dm³<br>b) 12 000 cm³<br>c) 120 dL</p>"
  },
  {
    id: "dekkplate-areal",
    niva: "middels",
    tittel: "Plate til laseren",
    tekst: "<p>En dekkplate er 2,4 m lang og 1,25 m bred. Laseren vil også ha arealet i cm².</p>",
    steg: [{ verdi: 3, enhet: "m²" }],
    deler: [
      { tekst: "Hva er arealet i m²?", svar: { verdi: 3, enhet: "m²" } },
      { tekst: "Hva er arealet i dm²?", svar: { verdi: 300, enhet: "dm²" } },
      { tekst: "Hva er arealet i cm²?", svar: { verdi: 30000, enhet: "cm²" } }
    ],
    hint: ["Areal = lengde · bredde. 1 m² = 100 dm² = 10 000 cm².", "\\(2{,}4 \\cdot 1{,}25 = 3\\) m². \\(3 \\cdot 100 = 300\\) dm². \\(3 \\cdot 10\\,000 = 30\\,000\\) cm²."],
    losning: "<p>\\(2{,}4 \\cdot 1{,}25 = 3\\) m² = 300 dm² = 30 000 cm².</p>"
  },
  {
    id: "lengder-sum",
    niva: "middels",
    tittel: "Tre biter til samme sveis",
    tekst: "<p>Du kapper tre biter: 1,85 m, 420 mm og 35 cm. De skal legges etter hverandre på benken.</p>",
    steg: [{ verdi: 0.42, enhet: "m" }, { verdi: 0.35, enhet: "m" }, { verdi: 1850, enhet: "mm" }, { verdi: 350, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange meter er bitene til sammen?", svar: { verdi: 2.62, enhet: "m" } },
      { tekst: "Hvor mange millimeter er det samme?", svar: { verdi: 2620, enhet: "mm" } }
    ],
    hint: ["Gjør om til samme enhet før du legger sammen. 420 mm = 0,42 m. 35 cm = 0,35 m.", "\\(1{,}85 + 0{,}42 + 0{,}35 = 2{,}62\\) m. \\(2{,}62 \\cdot 1000 = 2620\\) mm."],
    losning: "<p>\\(1{,}85 + 0{,}42 + 0{,}35 = 2{,}62\\) m = 2620 mm.</p>"
  },
  {
    id: "oljesump",
    niva: "vanskelig",
    tittel: "Oljesump og kanne",
    tekst: "<p>Oljesumpen i girkassa er 40 cm lang, 25 cm bred og 12 cm dyp. Ved siden av står en kanne på 10 L.</p>",
    steg: [{ verdi: 12000, enhet: "cm³" }, { verdi: 12, enhet: "dm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er sumpen?", svar: { verdi: 12000, enhet: "cm³" } },
      { tekst: "Hvor mange liter er sumpen?", svar: { verdi: 12, enhet: "L" } },
      { tekst: "Hva rommer mest?", svar: { valg: ["Sumpen", "Kannen på 10 L"], riktig: 0, forklaring: "Sumpen er 12 L. Kannen er 10 L." } }
    ],
    hint: ["Gang de tre sidene i centimeter. 1000 cm³ = 1 L.", "\\(40 \\cdot 25 \\cdot 12 = 12\\,000\\) cm³ = 12 L."],
    losning: "<p>\\(40 \\cdot 25 \\cdot 12 = 12\\,000\\) cm³ = 12 dm³ = 12 L. Sumpen rommer mer enn kannen.</p>"
  },
  {
    id: "oppsamlingskar",
    niva: "vanskelig",
    tittel: "Kar under dreiebenken",
    tekst: "<p>Oppsamlingskaret er 1,2 m langt og 0,5 m bredt. Oljen står 8 cm høyt. Ved siden av står en dunk på 40 L.</p>",
    steg: [{ verdi: 0.08, enhet: "m" }, { verdi: 0.048, enhet: "m³" }],
    deler: [
      { tekst: "Hvor mange m³ olje står i karet?", svar: { verdi: 0.048, enhet: "m³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 48, enhet: "L" } },
      { tekst: "Rommer karet mer enn dunken?", svar: { valg: ["Ja, 48 L er mer enn 40 L", "Nei, 48 L er mindre enn 40 L"], riktig: 0, forklaring: "0,048 m³ = 48 L." } }
    ],
    hint: ["Gjør 8 cm om til meter før du ganger. 1 m³ = 1000 L.", "\\(8\\ \\text{cm} = 0{,}08\\ \\text{m}\\). \\(1{,}2 \\cdot 0{,}5 \\cdot 0{,}08 = 0{,}048\\) m³ = 48 L."],
    losning: "<p>\\(1{,}2 \\cdot 0{,}5 \\cdot 0{,}08 = 0{,}048\\) m³.<br>\\(0{,}048 \\cdot 1000 = 48\\) L. Karet rommer mer enn dunken.</p>"
  },
  {
    id: "minst-volum",
    niva: "vanskelig",
    tittel: "Hvilket volum er minst?",
    tekst: "<p>Tre mål fra verkstedet: 80 cm³, 0,065 dm³ og 90 000 mm³. Gjør om før du sammenligner.</p>",
    steg: [{ verdi: 65, enhet: "cm³" }, { verdi: 90, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er 0,065 dm³?", svar: { verdi: 65, enhet: "cm³" } },
      { tekst: "Hvor mange cm³ er 90 000 mm³?", svar: { verdi: 90, enhet: "cm³" } },
      { tekst: "Hvilket volum er minst?", svar: { valg: ["80 cm³", "0,065 dm³", "90 000 mm³"], riktig: 1, forklaring: "0,065 dm³ = 65 cm³. Det er mindre enn 80 og 90." } }
    ],
    hint: ["1 dm³ = 1000 cm³. 1 cm³ = 1000 mm³, så du deler mm³ med 1000.", "\\(0{,}065 \\cdot 1000 = 65\\) cm³. \\(90\\,000 : 1000 = 90\\) cm³. 65 er minst."],
    losning: "<p>0,065 dm³ = 65 cm³.<br>90 000 mm³ = 90 cm³.<br>80 cm³ ligger mellom. Minst er 0,065 dm³.</p>"
  }
]);
