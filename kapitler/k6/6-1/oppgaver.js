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
  },
  {
    id: "fase-72",
    niva: "lett",
    tittel: "Fase på plata",
    tekst: "<p>En fase på en plate er merket 72°. Hva slags vinkel er det?</p>",
    stegForSteg: false,
    svar: { valg: ["Spiss", "Rett", "Stump", "Rett linje"], riktig: 0, forklaring: "72° er under 90°." },
    hint: ["Sammenlign med 90°. Under 90° er spiss, over 90° og under 180° er stump.", "72 er mindre enn 90, så vinkelen er spiss."],
    losning: "<p>72° er under 90°. Fasen er en spiss vinkel. En rett vinkel er 90°, og en stump er mellom 90° og 180°.</p>"
  },
  {
    id: "kapp-152",
    niva: "lett",
    tittel: "Kapp langs kanten",
    tekst: "<p>Langs en rett platekant er den ene vinkelen 152°. Hvor stor er nabovinkelen? Skriv tallet uten gradtegn.</p>",
    steg: [{ verdi: 180 }],
    svar: { verdi: 28 },
    hint: ["To vinkler på en rett linje er til sammen 180°.", "180 − 152 = 28."],
    losning: "<p>\\(180 - 152 = 28\\). Nabovinkelen er 28°.</p>"
  },
  {
    id: "omlop-270",
    niva: "lett",
    tittel: "Rundbord",
    tekst: "<p>Et rundbord på fresemaskinen er dreid 270°. Hvor mange grader er det igjen til et fullt omløp? Skriv tallet uten gradtegn.</p>",
    steg: [{ verdi: 360 }],
    svar: { verdi: 90 },
    hint: ["Et fullt omløp er 360°.", "360 − 270 = 90."],
    losning: "<p>\\(360 - 270 = 90\\). Det er 90° igjen, altså en rett vinkel.</p>"
  },
  {
    id: "trekant-69",
    niva: "lett",
    tekst: "<p>I en sveiset kilevinkel er to vinkler 48° og 63°. Hvor stor er den tredje? Skriv tallet uten gradtegn.</p>",
    steg: [{ verdi: 111 }],
    svar: { verdi: 69 },
    hint: ["Vinkelsummen i en trekant er 180°.", "48 + 63 = 111. 180 − 111 = 69."],
    losning: "<p>\\(48 + 63 = 111\\). \\(180 - 111 = 69\\). Den tredje vinkelen er 69°.</p>"
  },
  {
    id: "likebeint-40",
    niva: "middels",
    tittel: "Likebeint brakett",
    tekst: "<p>En likebeint brakett har toppvinkel 40°. De to grunnvinklene er like store. Skriv tall uten gradtegn.</p>",
    steg: [{ verdi: 140 }],
    deler: [
      { tekst: "Hvor stor er summen av de to grunnvinklene?", svar: { verdi: 140 } },
      { tekst: "Hvor stor er hver grunnvinkel?", svar: { verdi: 70 } }
    ],
    hint: ["Trekk toppvinkelen fra 180°, og del resten på 2.", "180 − 40 = 140. 140 : 2 = 70."],
    losning: "<p>\\(180 - 40 = 140\\). Hver grunnvinkel er \\(140 : 2 = 70\\) grader.</p>"
  },
  {
    id: "kjorner-90",
    niva: "middels",
    tittel: "Kjørner på 90°",
    tekst: "<p>Du skal dreie en kjørner med spiss 90°. Toppsleiden stilles etter vinkelen mellom siden og senterlinjen. Skriv tall uten gradtegn.</p>",
    deler: [
      { tekst: "Hvor mange grader stiller du toppsleiden på?", svar: { verdi: 45 } },
      { tekst: "Du stiller feil, på 90°. Hvor stor blir spissen?", svar: { verdi: 180 } }
    ],
    hint: ["Senterlinjen deler spissen i to like deler. Feil innstilling dobler vinkelen.", "90 : 2 = 45. Stiller du 90° på hver side, blir spissen 180°."],
    losning: "<p>Toppsleiden skal på \\(90 : 2 = 45\\) grader. Stiller du 90°, blir spissen 180°. Det er samme felle som med en 60°-kjørner, bare med andre tall.</p>"
  },
  {
    id: "diagonal-kapp",
    niva: "middels",
    tittel: "Kapp langs diagonalen",
    tekst: "<p>Du kapper en rektangulær plate langs diagonalen. I den ene trekanten er en vinkel 32°, i tillegg til den rette vinkelen fra hjørnet på plata. Skriv tall uten gradtegn.</p>",
    steg: [{ verdi: 122 }],
    deler: [
      { tekst: "Hvor stor er den tredje vinkelen?", svar: { verdi: 58 } },
      { tekst: "Hvor stor er summen av de to spisse vinklene?", svar: { verdi: 90 } }
    ],
    hint: ["Den rette vinkelen er 90°. De to andre skal til sammen være 90°, og alle tre skal bli 180°.", "180 − 90 − 32 = 58. 32 + 58 = 90."],
    losning: "<p>\\(180 - 90 - 32 = 58\\). Den tredje vinkelen er 58°. De to spisse vinklene er til sammen 90°.</p>"
  },
  {
    id: "firkant-88",
    niva: "vanskelig",
    tittel: "Det fjerde hjørnet",
    tekst: "<p>En ramme skal ha vinkelsum 360°. Tre hjørner er målt til 91°, 88° og 93°. Skriv tall uten gradtegn.</p>",
    steg: [{ verdi: 272 }],
    deler: [
      { tekst: "Hvor stort blir det fjerde hjørnet hvis summen er nøyaktig 360°?", svar: { verdi: 88 } },
      { tekst: "Hvor mange grader er største avvik fra 90°, når det fjerde hjørnet er 88°?", svar: { verdi: 3 } },
      { tekst: "Er alle fire hjørnene rette?", svar: { valg: ["Nei", "Ja"], riktig: 0, forklaring: "93° avviker med 3°, og 88° avviker med 2°." } }
    ],
    hint: ["Legg sammen de tre målene og trekk fra 360. Sammenlign hvert hjørne med 90°.", "91 + 88 + 93 = 272. 360 − 272 = 88. Størst avvik er 93 − 90 = 3."],
    losning: "<p>\\(91 + 88 + 93 = 272\\), så det fjerde hjørnet er \\(360 - 272 = 88\\) grader. Avvikene fra 90° er 1°, 2°, 3° og 2°. Største avvik er 3°. Rammen har ikke fire rette hjørner.</p>"
  },
  {
    id: "sveis-sum",
    niva: "vanskelig",
    tittel: "Trakk sveisen seg?",
    tekst: "<p>Etter sveising måler du en trekantet kilevinkel til 52°, 61° og 64°. Skriv tall uten gradtegn.</p>",
    steg: [{ verdi: 113 }, { verdi: 67 }],
    deler: [
      { tekst: "Hvis 52° og 61° stemmer, hvor stor skal den tredje vinkelen være?", svar: { verdi: 67 } },
      { tekst: "Hvor stor er summen av de tre målene du leste av?", svar: { verdi: 177 } },
      { tekst: "Stemmer vinkelsummen med en trekant?", svar: { valg: ["Nei, summen er 177°, ikke 180°", "Ja, de tre målene blir 180°"], riktig: 0 } }
    ],
    hint: ["Regn først den vinkelen som mangler ut fra 180°. Legg deretter sammen det du faktisk målte.", "52 + 61 = 113, og 180 − 113 = 67. Målt sum: 52 + 61 + 64 = 177."],
    losning: "<p>Den tredje vinkelen skulle vært \\(180 - 52 - 61 = 67\\) grader. De tre målene er \\(52 + 61 + 64 = 177\\), altså 3° for lite. Enten er målingen unøyaktig, eller plata har trukket seg i sveisen. Summen i en trekant skal være 180°.</p>"
  }
]);
