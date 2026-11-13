Bok.oppgaver([
  {
    id: "prisme",
    niva: "lett",
    tittel: "Brusboksens prisme",
    tekst: "<p>En boks har innvendige mål 11 cm, 6 cm og 5 cm.</p>",
    deler: [
      { tekst: "Hvor stort er volumet i cm³?", svar: { verdi: 330, enhet: "cm³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 0.33, enhet: "L" } }
    ],
    hint: ["Volum av et rett prisme er lengde · bredde · høyde.", "11 · 6 · 5 = 330 cm³. 1000 cm³ = 1 L, så 330 cm³ = 0,33 L."],
    losning: "<p>\\(11 \\cdot 6 \\cdot 5 = 330\\) cm³ \\(= 0{,}33\\) L. Det er samme volum som en brusboks.</p>"
  },
  {
    id: "kasse",
    niva: "lett",
    tekst: "<p>En oppbevaringskasse er 20 cm × 15 cm × 10 cm innvendig.</p>",
    deler: [
      { tekst: "Hvor stort er volumet i cm³?", svar: { verdi: 3000, enhet: "cm³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 3, enhet: "L" } }
    ],
    hint: ["Gang de tre målene. Del på 1000 for å få liter.", "20 · 15 = 300, og 300 · 10 = 3000 cm³ = 3 L."],
    losning: "<p>\\(20 \\cdot 15 \\cdot 10 = 3000\\) cm³ \\(= 3\\) L.</p>"
  },
  {
    id: "hydraulikk",
    niva: "lett",
    tekst: "<p>En hydraulikksylinder har innvendig diameter 8 cm og slaglengde 20 cm. Hvor mange desiliter olje rommer den?</p>",
    steg: [{ verdi: 4, enhet: "cm" }, { verdi: 1005, enhet: "cm³", tol: 8 }],
    svar: { verdi: 10.05, enhet: "dl", tol: 0.1 },
    hint: ["Radius er 4 cm, ikke 8 cm. 1 L = 10 dl, og 1000 cm³ = 1 L.", "\\(V = \\pi \\cdot 4^2 \\cdot 20 \\approx 1005\\) cm³ ≈ 10,05 dl."],
    losning: "<p>\\(r = 4\\) cm. \\(V = \\pi \\cdot 16 \\cdot 20 \\approx 1005\\) cm³ \\(\\approx 1{,}005\\) L \\(\\approx 10{,}1\\) dl.</p>"
  },
  {
    id: "smal-tank",
    niva: "middels",
    tekst: "<p>En beholder skal romme nøyaktig 1,5 L. Bunnen må være 10 cm × 12 cm.</p>",
    steg: [{ verdi: 1500, enhet: "cm³" }, { verdi: 120, enhet: "cm²" }],
    svar: { verdi: 12.5, enhet: "cm" },
    hint: ["Gjør liter om til cm³, og del på grunnflata.", "1500 : (10 · 12) = 1500 : 120 = 12,5 cm."],
    losning: "<p>\\(1{,}5\\) L \\(= 1500\\) cm³. \\(h = 1500 : 120 = 12{,}5\\) cm.</p>"
  },
  {
    id: "en-liter",
    niva: "middels",
    tekst: "<p>Et rør skal romme 1 L. Høyden er 20 cm. Hvor stor må radien være?</p>",
    steg: [{ verdi: 1000, enhet: "cm³" }],
    svar: { verdi: 3.99, enhet: "cm", tol: 0.03 },
    hint: ["\\(V = \\pi r^2 h\\), så \\(r = \\sqrt{V / (\\pi h)}\\).", "\\(r = \\sqrt{1000 / (20\\pi)} \\approx 3{,}99\\) cm. 4 cm er et godt avrundet svar."],
    losning: "<p>\\(r = \\sqrt{1000 / (20\\pi)} \\approx 3{,}99\\) cm. Med r = 4 cm blir volumet omtrent 1005 cm³, altså svært nær 1 L.</p>"
  },
  {
    id: "boks-sylinder",
    niva: "middels",
    tekst: "<p>Du vil lage 0,33 L som en sylinder med høyde 10 cm. Hvor stor blir radien?</p>",
    steg: [{ verdi: 330, enhet: "cm³" }],
    svar: { verdi: 3.24, enhet: "cm", tol: 0.03 },
    hint: ["0,33 L = 330 cm³. \\(r = \\sqrt{330 / (\\pi \\cdot 10)}\\).", "330 / (10π) ≈ 10,50. Kvadratroten er omtrent 3,24 cm."],
    losning: "<p>\\(r = \\sqrt{330 / (10\\pi)} \\approx 3{,}24\\) cm.</p>"
  },
  {
    id: "godstykkelse",
    niva: "vanskelig",
    tittel: "4 mm finér",
    tekst: "<p>Innvendig skal boksen være 110 mm × 60 mm × 50 mm. Veggene er 4 mm. Lokket er av. Bunnen er 4 mm.</p>",
    deler: [
      { tekst: "Hvor stort er det innvendige volumet?", svar: { verdi: 330, enhet: "cm³" } },
      { tekst: "Hvor lang er boksen utvendig?", svar: { verdi: 118, enhet: "mm" } },
      { tekst: "Hvor bred er boksen utvendig?", svar: { verdi: 68, enhet: "mm" } },
      { tekst: "Hvor høy er boksen utvendig?", svar: { verdi: 54, enhet: "mm" } }
    ],
    hint: ["110 mm = 11 cm. To vegger betyr +8 mm på lengde og bredde. Bare bunnen legger 4 mm på høyden.", "11 · 6 · 5 = 330 cm³. Utvendig: 118 mm, 68 mm og 54 mm."],
    losning: "<p>Innvendig: \\(11 \\cdot 6 \\cdot 5 = 330\\) cm³.<br>Utvendig lengde \\(110 + 8 = 118\\) mm, bredde \\(60 + 8 = 68\\) mm, høyde \\(50 + 4 = 54\\) mm.</p>"
  },
  {
    id: "design-bunn",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Velg en bunn",
    utstyr: "Kalkulator, skisseark, tommestokk",
    hms: "Ikke start laserkutteren før læreren har sett målene. Avsug skal stå på når den brukes senere.",
    tekst: "<p>Du låser bunnen til 10 cm × 6 cm innvendig. Hvor høy må boksen være for å romme 0,33 L? Skriv deretter dine egne mål på verkstedkortet og kontroller at produktet blir 330 cm³.</p>",
    steg: [{ verdi: 330, enhet: "cm³" }, { verdi: 60, enhet: "cm²" }],
    svar: { verdi: 5.5, enhet: "cm" },
    hint: ["330 cm³ delt på grunnflata.", "10 · 6 = 60. 330 : 60 = 5,5 cm."],
    losning: "<p>\\(h = 330 : (10 \\cdot 6) = 5{,}5\\) cm. Egne mål er riktige bare hvis lengde · bredde · høyde = 330 cm³.</p>"
  },
  {
    id: "rep-dm3",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>En tank er på 2,5 dm³. Hvor mange liter er det?</p>",
    svar: { verdi: 2.5, enhet: "L" },
    hint: ["1 dm³ er det samme som 1 L.", "2,5 dm³ = 2,5 L."],
    losning: "<p>\\(1\\ \\text{dm}^3 = 1\\ \\text{L}\\), så 2,5 dm³ = 2,5 L.</p>"
  },
  {
    id: "eks-prisme",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>En kasse er 30 cm lang, 20 cm bred og 10 cm høy innvendig.</p>",
    deler: [
      { tekst: "Hvor stort er volumet i cm³?", svar: { verdi: 6000, enhet: "cm³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 6, enhet: "L" } }
    ],
    hint: ["Gang de tre sidene. 1000 cm³ = 1 L.", "30 · 20 · 10 = 6000 cm³ = 6 L."],
    losning: "<p>\\(30 \\cdot 20 \\cdot 10 = 6000\\) cm³ \\(= 6\\) L.</p>"
  },
  {
    id: "gulvflate",
    niva: "lett",
    tittel: "Støp i gulvet",
    tekst: "<p>Et felt i verkstedgulvet er 2 m langt, 1 m bredt og 0,1 m tykt.</p>",
    steg: [{ verdi: 0.2, enhet: "m³" }],
    deler: [
      { tekst: "Hvor stort er volumet i kubikkmeter?", svar: { verdi: 0.2, enhet: "m³" } },
      { tekst: "Hvor mange liter betong er det?", svar: { verdi: 200, enhet: "L" } }
    ],
    hint: ["Volum er lengde · bredde · tykkelse. 1 m³ = 1000 L.", "2 · 1 · 0,1 = 0,2 m³. 0,2 · 1000 = 200 L."],
    losning: "<p>\\(2 \\cdot 1 \\cdot 0{,}1 = 0{,}2\\) m³ \\(= 200\\) L.</p>"
  },
  {
    id: "sylinder-10",
    niva: "lett",
    tekst: "<p>En hylse har innvendig diameter 10 cm og innvendig høyde 10 cm. Hvor mange cm³ rommer den?</p>",
    steg: [{ verdi: 5, enhet: "cm" }],
    svar: { verdi: 785, enhet: "cm³", tol: 5 },
    hint: ["Radius er 5 cm, ikke 10 cm. \\(V = \\pi r^2 h\\).", "\\(\\pi \\cdot 5^2 \\cdot 10 = 250\\pi \\approx 785\\) cm³."],
    losning: "<p>\\(r = 5\\) cm. \\(V = \\pi \\cdot 25 \\cdot 10 \\approx 785\\) cm³, omtrent 0,79 L.</p>"
  },
  {
    id: "skuff-dm",
    niva: "lett",
    tekst: "<p>En skuff i verktøyskapet er 4 dm × 2 dm × 1,5 dm innvendig.</p>",
    steg: [{ verdi: 12, enhet: "dm³" }],
    deler: [
      { tekst: "Hvor stort er volumet i dm³?", svar: { verdi: 12, enhet: "dm³" } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 12, enhet: "L" } }
    ],
    hint: ["Gang de tre målene. 1 dm³ = 1 L.", "4 · 2 · 1,5 = 12 dm³ = 12 L."],
    losning: "<p>\\(4 \\cdot 2 \\cdot 1{,}5 = 12\\) dm³ \\(= 12\\) L.</p>"
  },
  {
    id: "tank-hoyde",
    niva: "middels",
    tekst: "<p>En rektangulær oljekanne skal romme 8 L. Bunnen er 20 cm × 25 cm. Hvor høy må kanna være innvendig?</p>",
    steg: [{ verdi: 8000, enhet: "cm³" }, { verdi: 500, enhet: "cm²" }],
    svar: { verdi: 16, enhet: "cm" },
    hint: ["Gjør liter om til cm³, og del på grunnflata.", "8 L = 8000 cm³. 20 · 25 = 500 cm². 8000 : 500 = 16 cm."],
    losning: "<p>\\(8\\) L \\(= 8000\\) cm³. \\(h = 8000 : (20 \\cdot 25) = 16\\) cm.</p>"
  },
  {
    id: "ror-liter",
    niva: "middels",
    tekst: "<p>Et rør har innvendig diameter 10 cm og skal romme 1 L. Hvor langt må røret være? Rund av til hundredeler.</p>",
    steg: [{ verdi: 5, enhet: "cm" }, { verdi: 1000, enhet: "cm³" }],
    svar: { verdi: 12.73, enhet: "cm", tol: 0.05 },
    hint: ["Radius er 5 cm. \\(h = V / (\\pi r^2)\\).", "\\(h = 1000 / (\\pi \\cdot 25) \\approx 12{,}73\\) cm."],
    losning: "<p>\\(h = 1000 / (\\pi \\cdot 5^2) \\approx 12{,}73\\) cm.</p>"
  },
  {
    id: "fundament-80",
    niva: "middels",
    tittel: "Maskinfundament",
    tekst: "<p>Et fundament er 80 cm × 40 cm × 25 cm. Trillebåra tar 40 L betong.</p>",
    steg: [{ verdi: 80000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange liter betong går med?", svar: { verdi: 80, enhet: "L" } },
      { tekst: "Hvor mange fulle trillebårlass er det?", svar: { verdi: 2, enhet: "stk" } }
    ],
    hint: ["80 · 40 · 25 gir cm³. 1000 cm³ = 1 L. Del liter på 40.", "80 000 cm³ = 80 L. 80 : 40 = 2 lass."],
    losning: "<p>\\(80 \\cdot 40 \\cdot 25 = 80\\,000\\) cm³ \\(= 80\\) L. \\(80 : 40 = 2\\) lass.</p>"
  },
  {
    id: "lukket-tank",
    niva: "vanskelig",
    tittel: "1 cm gods",
    tekst: "<p>En lukket tank har innvendige mål 30 cm × 20 cm × 10 cm. Platene er 1 cm tykke i vegger, lokk og bunn.</p>",
    steg: [{ verdi: 6000, enhet: "cm³" }, { verdi: 32, enhet: "cm" }, { verdi: 22, enhet: "cm" }, { verdi: 12, enhet: "cm" }],
    deler: [
      { tekst: "Hvor mange liter rommer tanken?", svar: { verdi: 6, enhet: "L" } },
      { tekst: "Hvor stort er det utvendige volumet?", svar: { verdi: 8448, enhet: "cm³" } },
      { tekst: "Hvor mange cm³ plate går med?", svar: { verdi: 2448, enhet: "cm³" } }
    ],
    hint: ["To plater legger 2 cm på hvert utvendige mål. Platevolumet er utvendig volum minus innvendig volum.", "Innvendig 30 · 20 · 10 = 6000 cm³ = 6 L. Utvendig 32 · 22 · 12 = 8448 cm³. Gods: 8448 − 6000 = 2448 cm³."],
    losning: "<p>Innvendig: \\(30 \\cdot 20 \\cdot 10 = 6000\\) cm³ \\(= 6\\) L.<br>Utvendig: \\(32 \\cdot 22 \\cdot 12 = 8448\\) cm³.<br>Gods: \\(8448 - 6000 = 2448\\) cm³.</p>"
  },
  {
    id: "to-former",
    niva: "vanskelig",
    tittel: "Samme halvliter",
    tekst: "<p>Du skal lage en beholder på 0,5 L. Først som et prisme med bunn 10 cm × 8 cm. Deretter som en sylinder med innvendig diameter 8 cm. Rund sylinderehøyden av til hundredeler.</p>",
    steg: [{ verdi: 500, enhet: "cm³" }, { verdi: 80, enhet: "cm²" }, { verdi: 4, enhet: "cm" }],
    deler: [
      { tekst: "Hvor høyt må prismet være?", svar: { verdi: 6.25, enhet: "cm" } },
      { tekst: "Hvor høy må sylinderen være?", svar: { verdi: 9.95, enhet: "cm", tol: 0.03 } },
      { tekst: "Hvilken beholder blir høyest?", svar: { valg: ["Sylinderen", "Prismet", "De blir like høye"], riktig: 0 } }
    ],
    hint: ["0,5 L = 500 cm³. Prisme: del på grunnflata. Sylinder: radius er 4 cm, og \\(h = V / (\\pi r^2)\\).", "500 : 80 = 6,25 cm. \\(500 / (\\pi \\cdot 16) \\approx 9{,}95\\) cm."],
    losning: "<p>Prisme: \\(h = 500 : (10 \\cdot 8) = 6{,}25\\) cm.<br>Sylinder: \\(h = 500 / (\\pi \\cdot 4^2) \\approx 9{,}95\\) cm. Sylinderen blir høyest.</p>"
  }
]);
