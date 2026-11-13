Bok.oppgaver([
  {
    id: "lan-rest",
    niva: "lett",
    tittel: "Hva må lånes?",
    tekst: "<p>Båten koster 150 000 kr. Egenkapitalen er 30 000 kr. Hvor stort lån trengs?</p>",
    svar: { verdi: 120000, enhet: "kr" },
    hint: [
      "Lån = pris − egenkapital.",
      "\\(150\\,000 - 30\\,000 = 120\\,000\\)."
    ],
    losning: "<p>\\(150\\,000 - 30\\,000 = 120\\,000\\) kr. Det er lånet i uke 20.</p>"
  },
  {
    id: "tur-retur-nm",
    niva: "lett",
    tittel: "Tur og retur",
    tekst: "<p>Én vei fra Sandvika til Løkken er 130 nautiske mil. Budsjettet bruker tur-retur. Hvor mange nautiske mil er det?</p>",
    svar: { verdi: 260, enhet: "nm" },
    hint: [
      "Tur-retur er to ganger én vei.",
      "\\(130 \\cdot 2 = 260\\)."
    ],
    losning: "<p>\\(130 \\cdot 2 = 260\\) nautiske mil. Selve overfarten i uke 22 er 130, ikke 260.</p>"
  },
  {
    id: "mat-en-dag",
    niva: "lett",
    tittel: "Mat én dag",
    tekst: "<p>Maten er 400 kr per person per dag. Dere er tre. Hva koster maten på én dag?</p>",
    svar: { verdi: 1200, enhet: "kr" },
    hint: [
      "Gang personer med pris per person. Ikke gang med tre dager ennå.",
      "\\(3 \\cdot 400 = 1\\,200\\)."
    ],
    losning: "<p>\\(3 \\cdot 400 = 1\\,200\\) kr per dag. Tre dager blir \\(3 \\cdot 1\\,200 = 3\\,600\\) kr.</p>"
  },
  {
    id: "sikkerhet-sum",
    niva: "middels",
    tittel: "Vester og nødpakke",
    tekst: "<p>Prosjektet bruker tre redningsvester à 1 200 kr og én nødpakke til 900 kr.</p>",
    steg: [{ verdi: 3600, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster vestene?", svar: { verdi: 3600, enhet: "kr" } },
      { tekst: "Hva er hele sikkerhetsposten?", svar: { verdi: 4500, enhet: "kr" } }
    ],
    hint: [
      "Gang antall vester med prisen, og legg til nødpakken.",
      "\\(3 \\cdot 1\\,200 = 3\\,600\\). \\(3\\,600 + 900 = 4\\,500\\)."
    ],
    losning: "<p>\\(3 \\cdot 1\\,200 = 3\\,600\\) kr. \\(3\\,600 + 900 = 4\\,500\\) kr.</p>"
  },
  {
    id: "fire-uker",
    niva: "middels",
    tittel: "Tid til prosjektet",
    tekst: "<p>Prosjektet går i uke 20, 21, 22 og 23. Hver uke har én økt på 75 minutter og én på 60 minutter.</p>",
    steg: [{ verdi: 135, enhet: "min" }],
    deler: [
      { tekst: "Hvor mange uker er det? Skriv bare tallet.", svar: { verdi: 4 } },
      { tekst: "Hvor mange minutter matematikk er det per uke?", svar: { verdi: 135, enhet: "min" } },
      { tekst: "Hvor mange minutter er det i hele prosjektet?", svar: { verdi: 540, enhet: "min" } }
    ],
    hint: [
      "Tell ukene. Legg sammen 75 og 60, og gang med antall uker.",
      "\\(75 + 60 = 135\\). \\(4 \\cdot 135 = 540\\)."
    ],
    losning: "<p>Fire uker. \\(75 + 60 = 135\\) minutter per uke. \\(4 \\cdot 135 = 540\\) minutter, altså 9 timer.</p>"
  },
  {
    id: "nokler",
    niva: "vanskelig",
    tittel: "Nøkkeltallene",
    tekst: "<p>Tallene står i prosjektbeskrivelsen. Lånet varer i 3 år. Én vei er 130 nautiske mil, og forbruket er 2,8 L per nautisk mil. Bensin koster 22 kr per liter. Tanken er 400 L. Modellen er 1:10, så volumet deles på 1 000. Ved ankomst skal minst 30 % av tanken være igjen. Her regner du bare én vei, ikke tur-retur.</p>",
    steg: [
      { verdi: 36 },
      { verdi: 364, enhet: "L" },
      { verdi: 0.4, enhet: "L" }
    ],
    deler: [
      { tekst: "Hvor mange måneder varer lånet? Skriv bare tallet.", svar: { verdi: 36 } },
      { tekst: "Hvor mange liter går med på én vei?", svar: { verdi: 364, enhet: "L" } },
      { tekst: "Hva koster det drivstoffet?", svar: { verdi: 8008, enhet: "kr" } },
      { tekst: "Hvor mange desiliter rommer modellen av en tank på 400 L?", svar: { verdi: 4, enhet: "dl" } },
      { tekst: "Hvor mange liter er 30 % av tanken?", svar: { verdi: 120, enhet: "L" } }
    ],
    hint: [
      "Måneder = år · 12. Liter = mil · 2,8. Modellvolum = 400 L : 1 000, og 1 L = 10 dl.",
      "\\(130 \\cdot 2{,}8 = 364\\). \\(400 : 1\\,000 = 0{,}4\\) L. \\(0{,}30 \\cdot 400 = 120\\)."
    ],
    losning: "<p>\\(3 \\cdot 12 = 36\\) måneder.</p><p>\\(130 \\cdot 2{,}8 = 364\\) L. \\(364 \\cdot 22 = 8\\,008\\) kr.</p><p>\\(400 : 1\\,000 = 0{,}4\\) L = 4 dl. Reserve: \\(0{,}30 \\cdot 400 = 120\\) L. 364 L brukt av 400 L gir bare 36 L igjen, og det er under 120 L. Det regner dere ferdig i 9.3.</p>"
  },
  {
    id: "teip-hulrom",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Teipet hulrom",
    utstyr: "Målebånd",
    hms: "Ikke kryp under båten alene. Se opp for kanten. Ingen verktøy med ledning i denne oppgaven.",
    tekst: "<p>Læreren har teipet av plassen under dørken: 100 cm × 80 cm × 50 cm. Modellen i uke 21 skal være 1:10.</p>",
    steg: [{ verdi: 10, enhet: "dm" }, { verdi: 8, enhet: "dm" }, { verdi: 5, enhet: "dm" }],
    deler: [
      { tekst: "Hvor mange liter er hulrommet?", svar: { verdi: 400, enhet: "L" } },
      { tekst: "Hvor lang blir modellen?", svar: { verdi: 10, enhet: "cm" } }
    ],
    hint: [
      "1 dm³ = 1 L. Del centimeter på 10 før du ganger. Modellengden er lengden delt på 10.",
      "\\(10 \\cdot 8 \\cdot 5 = 400\\). \\(100 : 10 = 10\\)."
    ],
    losning: "<p>\\(10 \\ \\text{dm} \\cdot 8 \\ \\text{dm} \\cdot 5 \\ \\text{dm} = 400\\) L. Modellen er 10 cm lang. Volumet av modellen er ikke 40 L. Det tar dere i 9.2.</p>"
  },
  {
    id: "rep-buffer",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tittel: "15 % av 2 000 kr",
    tekst: "<p>Fra kapittel 3. Et lite verkstedkjøp er 2 000 kr. Bufferen er 15 %. Hvor mange kroner er bufferen?</p>",
    svar: { verdi: 300, enhet: "kr" },
    hint: [
      "10 % av 2 000 er 200. 5 % er halvparten av det.",
      "\\(2\\,000 \\cdot 0{,}15 = 300\\)."
    ],
    losning: "<p>\\(2\\,000 \\cdot 0{,}15 = 300\\) kr. I turbudsjettet tar dere 15 % av en mye større sum.</p>"
  },
  {
    id: "rep-en-to",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tittel: "1,2 timer",
    tekst: "<p>Fra kapittel 4. En etappe tar 1,2 timer. Hvor mange minutter er det?</p>",
    steg: [{ verdi: 12, enhet: "min" }],
    svar: { verdi: 72, enhet: "min" },
    hint: [
      "Gang med 60. 0,2 timer er ikke 20 minutter.",
      "\\(1{,}2 \\cdot 60 = 72\\)."
    ],
    losning: "<p>\\(1{,}2 \\cdot 60 = 72\\) minutter, altså 1 time og 12 minutter. Samme felle som 5,2 timer på overfarten.</p>"
  },
  {
    id: "eksamen-del",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Egenkapitalen delt på tre",
    tekst: "<p>Egenkapitalen er 30 000 kr, delt likt på tre venner. Hvor mye har hver lagt inn?</p>",
    svar: { verdi: 10000, enhet: "kr" },
    hint: [
      "Del beløpet på 3.",
      "\\(30\\,000 : 3 = 10\\,000\\)."
    ],
    losning: "<p>\\(30\\,000 : 3 = 10\\,000\\) kr. Lånet på 120 000 kr kommer i tillegg.</p>"
  }
]);
