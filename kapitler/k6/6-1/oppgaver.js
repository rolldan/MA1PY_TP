Bok.oppgaver([
  {
    id: "rett-vinkel",
    niva: "lett",
    tittel: "Hva er en rett vinkel?",
    tekst: "<p>Hvor stor er en rett vinkel?</p>",
    stegForSteg: false,
    svar: { valg: ["90°", "45°", "180°", "60°"], riktig: 0, forklaring: "En rett vinkel er 90°." },
    hint: ["Tenk på hjørnet i en vinduskarm eller en vinkelhake.", "Vinkelhaken er laget for 90°."],
    losning: "<p>En rett vinkel er 90°. Under 90° er spiss, over 90° og under 180° er stump.</p>"
  },
  {
    id: "trekant-vinkel",
    niva: "lett",
    tekst: "<p>I en trekant er to vinkler 70° og 60°. Hvor stor er den tredje?</p>",
    stegForSteg: false,
    svar: { valg: ["50°", "40°", "130°", "90°"], riktig: 0, forklaring: "180 − 70 − 60 = 50." },
    hint: ["Vinkelsummen i en trekant er 180°.", "70 + 60 = 130. 180 − 130 = 50."],
    losning: "<p>\\(70 + 60 = 130\\). \\(180 - 130 = 50\\). Den tredje vinkelen er 50°.</p>"
  },
  {
    id: "rett-linje",
    niva: "lett",
    tekst: "<p>Langs en rett platekant er den ene vinkelen 118°. Hvor stor er nabovinkelen?</p>",
    stegForSteg: false,
    svar: { valg: ["62°", "72°", "118°", "28°"], riktig: 0, forklaring: "180 − 118 = 62." },
    hint: ["To vinkler på en rett linje er til sammen 180°.", "180 − 118 = 62."],
    losning: "<p>\\(180 - 118 = 62\\). Nabovinkelen er 62°.</p>"
  },
  {
    id: "brakett",
    niva: "middels",
    tekst: "<p>En sveiset brakett er en trekant. To vinkler er 90° og 48°.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor stor er den tredje vinkelen?", svar: { valg: ["42°", "48°", "90°", "138°"], riktig: 0 } },
      { tekst: "Er den tredje vinkelen spiss, rett eller stump?", svar: { valg: ["Spiss", "Rett", "Stump"], riktig: 0 } }
    ],
    hint: ["Trekk de kjente vinklene fra 180°.", "90 + 48 = 138. 180 − 138 = 42. 42° er under 90°, altså spiss."],
    losning: "<p>\\(180 - 90 - 48 = 42\\). Vinkelen er 42°, og den er spiss.</p>"
  },
  {
    id: "kjorner",
    niva: "middels",
    tittel: "Halve vinkelen",
    tekst: "<p>Du skal dreie en spiss lik en kjørner merket 60°. Toppsleiden stilles etter vinkelen mellom siden og senterlinjen.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange grader stiller du toppsleiden på?", svar: { valg: ["30°", "60°", "120°", "90°"], riktig: 0 } },
      { tekst: "Du stiller feil, på 60°. Hvor stor blir spissen?", svar: { valg: ["120°", "60°", "30°", "90°"], riktig: 0 } }
    ],
    hint: ["Hele spissen er 60°. Senterlinjen deler den i to.", "60 : 2 = 30. Stiller du 60° på hver side av senter, blir spissen 120°."],
    losning: "<p>Toppsleiden skal på 30°. Stiller du 60°, blir spissen 120°. Det er halve vinkelen-fella.</p>"
  },
  {
    id: "likesidet",
    niva: "middels",
    tekst: "<p>En likesidet trekant har tre like sider og tre like vinkler. Et bor er slipt med spiss 118°.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor stor er hver vinkel i den likesidede trekanten?", svar: { valg: ["60°", "90°", "45°", "180°"], riktig: 0 } },
      { tekst: "Hvor stor er halve borvinkelen?", svar: { valg: ["59°", "118°", "62°", "30°"], riktig: 0 } }
    ],
    hint: ["Del 180° på 3.", "Halve vinkelen av 118° er 118 : 2 = 59."],
    losning: "<p>a) \\(180 : 3 = 60\\). Hver vinkel er 60°.<br>b) \\(118 : 2 = 59\\). Halve borvinkelen er 59°.</p>"
  },
  {
    id: "fire-hjorner",
    niva: "vanskelig",
    tittel: "Er rammen rett?",
    tekst: "<p>En rektangulær ramme skal ha fire rette hjørner. Du måler 88°, 91°, 90° og 93°. Skriv tall uten gradtegn.</p>",
    deler: [
      { tekst: "Hvor stor er summen av de fire målene?", svar: { verdi: 362 } },
      { tekst: "Hvor mange grader er største avvik fra 90°?", svar: { valg: ["3°", "2°", "1°", "4°"], riktig: 0 } },
      { tekst: "Kan alle fire hjørnene være rette, slik målene står?", svar: { valg: ["Nei", "Ja"], riktig: 0, forklaring: "Summen skulle vært 360°, og ett hjørne avviker med 3°." } }
    ],
    hint: ["Legg sammen alle fire målene. En firkant skal ha sum 360°.", "88 + 91 = 179, 90 + 93 = 183, sum 362. Størst avvik er 93 − 90 = 3."],
    losning: "<p>Summen er 362, ikke 360. Avvikene fra 90° er 2, 1, 0 og 3. Største avvik er 3°. Rammen er ikke rett, eller målingen er unøyaktig.</p>"
  },
  {
    id: "mal-brakett",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Mål braketten",
    utstyr: "Gradskive, vinkelhake, en brakett eller et hjørnejern",
    hms: "Ingen maskiner i denne økta. Bruk hansker hvis kanten er skarp.",
    tekst: "<p>Du måler 55° i det ene hjørnet på en rett kant. Nabovinkelen måler du til 123°. Regn ut hva den skulle vært, og hvor stort avviket er. Skriv tall uten gradtegn. Gjør deretter det samme på en ekte brakett og før tallene på verkstedkortet.</p>",
    deler: [
      { tekst: "Hvor stor skal nabovinkelen være når den ene er 55°?", svar: { verdi: 125 } },
      { tekst: "Hvor mange grader feil er målet 123°?", svar: { verdi: 2 } }
    ],
    hint: ["Nabovinkler på en rett linje er til sammen 180°.", "180 − 55 = 125. Avviket er 125 − 123 = 2."],
    losning: "<p>Riktig nabovinkel er 125°. Målt 123° gir et avvik på 2°. På den ekte braketten sammenligner du gradskiva med vinkelhaken der hjørnet skal være 90°.</p>"
  },
  {
    id: "rep-stang",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En arbeidstegning oppgir en stang som 2450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m" },
    hint: ["1 m = 1000 mm. Fra mm til m deler du med 1000.", "2450 : 1000 = 2,45."],
    losning: "<p>\\(2450 : 1000 = 2{,}45\\) m.</p>"
  },
  {
    id: "eks-vinkel",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En rettvinklet trekant har en vinkel på 37° i tillegg til den rette vinkelen.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor stor er den tredje vinkelen?", svar: { valg: ["53°", "47°", "63°", "143°"], riktig: 0 } },
      { tekst: "Er 53° en spiss vinkel?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["Den rette vinkelen er 90°. Summen i trekanten er 180°.", "180 − 90 − 37 = 53. 53 er under 90, så vinkelen er spiss."],
    losning: "<p>\\(180 - 90 - 37 = 53\\). Den tredje vinkelen er 53°, og den er spiss.</p>"
  }
]);
