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
  }
]);
