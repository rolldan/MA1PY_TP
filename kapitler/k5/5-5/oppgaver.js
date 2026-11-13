Bok.oppgaver([
  {
    id: "boremaskin",
    niva: "lett",
    tittel: "Søyleboremaskin",
    tekst: "<p>Motoren går på 1400 r/min og har en reimskive på 50 mm. Skiva ved spindelen er 200 mm. Hva blir turtallet på boret?</p>",
    steg: [{ verdi: 70000 }],
    svar: { verdi: 350, enhet: "r/min" },
    hint: ["\\(n_2 = n_1 \\cdot d_1 : d_2\\). Den store skiva er den drevne.", "\\(1400 \\cdot 50 : 200\\)."],
    losning: "<p>\\(n_2 = 1400 \\cdot 50 : 200 = 350\\) r/min.</p>"
  },
  {
    id: "like-tenner",
    niva: "lett",
    tittel: "Dobbelt så mange tenner",
    tekst: "<p>Et tannhjul med 20 tenner driver et hjul med 40 tenner. Det lille hjulet går på 800 r/min. Hva blir turtallet på det store?</p>",
    svar: { verdi: 400, enhet: "r/min" },
    hint: ["Dobbelt så mange tenner gir halvt turtall.", "\\(800 \\cdot 20 : 40\\)."],
    losning: "<p>\\(n_2 = 800 \\cdot 20 : 40 = 400\\) r/min.</p>"
  },
  {
    id: "moped",
    niva: "middels",
    tittel: "Mopedkjede",
    tekst: "<p>Drevet foran har 11 tenner og driver. Drevet bak har 55 tenner. Motoren gir 6000 r/min på det fremste drevet.</p>",
    deler: [
      { tekst: "Hva er turtallet på bakhjulet?", svar: { verdi: 1200, enhet: "r/min" } },
      { tekst: "Hva er utvekslingen \\(i = z_2 : z_1\\)? Skriv tallet, som i 5 : 1.", svar: { verdi: 5 } }
    ],
    hint: ["\\(n_2 = 6000 \\cdot 11 : 55\\). Utvekslingen er tenner bak delt på tenner foran.", "\\(55 : 11 = 5\\), og \\(6000 : 5 = 1200\\)."],
    losning: "<p>\\(n_2 = 6000 \\cdot 11 : 55 = 1200\\) r/min.<br>\\(i = 55 : 11 = 5\\).</p>"
  },
  {
    id: "dynamo",
    niva: "middels",
    tittel: "Dynamoen",
    tekst: "<p>Veivakselen går på 800 r/min og har en skive på 150 mm. Den drar dynamoens skive på 50 mm.</p>",
    deler: [
      { tekst: "Hva er turtallet på dynamoen?", svar: { verdi: 2400, enhet: "r/min" } },
      { tekst: "Går dynamoen fortere eller saktere enn motoren?", svar: { valg: ["Fortere", "Saktere", "Like fort"], riktig: 0, forklaring: "Den drevne skiva er mindre, så turtallet går opp." } }
    ],
    hint: ["\\(n_2 = 800 \\cdot 150 : 50\\).", "150 : 50 = 3, så turtallet blir tre ganger så høyt."],
    losning: "<p>\\(n_2 = 800 \\cdot 150 : 50 = 2400\\) r/min. Dynamoen går fortere.</p>"
  },
  {
    id: "vinsj",
    niva: "vanskelig",
    tittel: "Vinsj inn porten",
    tekst: "<p>En motor på 1500 r/min har et tannhjul med 10 tenner. Vinsjtrommelen skal gå på 50 r/min. Dere skal lage det store hjulet selv.</p>",
    deler: [
      { tekst: "Hvor mange tenner må det store hjulet ha?", svar: { verdi: 300, enhet: "stk" } },
      { tekst: "Hva skjer med turtallet?", svar: { valg: ["Det går opp, og vinsjen blir svakere", "Det går ned, og vinsjen blir sterkere", "Det er uendret"], riktig: 1, forklaring: "Det drevne hjulet er mye større. Turtallet faller fra 1500 til 50." } }
    ],
    hint: ["\\(z_2 = n_1 \\cdot z_1 : n_2\\).", "\\(1500 \\cdot 10 : 50\\)."],
    losning: "<p>\\(z_2 = 1500 \\cdot 10 : 50 = 300\\) tenner.<br>Turtallet går ned, og vinsjen trekker sterkere.</p>"
  },
  {
    id: "mal-skive",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Skivene på maskinen",
    utstyr: "Søyleboremaskin med støpselet ute, skyvelære eller metermål",
    hms: "Støpsel ute og maskinen kan ikke starte. Ikke mål på en roterende skive. Hår og hette unna reima når den senere skal startes av læreren.",
    tekst: "<p>På en maskin måler du 50 mm på motorsviva og 200 mm ved spindelen. Motoren er merket 1400 r/min. Hva blir turtallet på boret med denne reimplasseringen?</p>",
    svar: { verdi: 350, enhet: "r/min" },
    hint: ["Motoren driver. \\(n_2 = n_1 \\cdot d_1 : d_2\\).", "\\(1400 \\cdot 50 : 200\\)."],
    losning: "<p>\\(n_2 = 1400 \\cdot 50 : 200 = 350\\) r/min.</p>"
  },
  {
    id: "rep-moment",
    type: "repetisjon",
    fra: "5.4",
    niva: "lett",
    tekst: "<p>Du drar med 200 N i en arm på 0,5 m. Hvor stort moment blir det?</p>",
    svar: { verdi: 100, enhet: "Nm" },
    hint: ["\\(M = F \\cdot a\\).", "\\(200 \\cdot 0{,}5\\)."],
    losning: "<p>\\(M = 200 \\cdot 0{,}5 = 100\\) Nm.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En reimskive har diameter 0,2 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 200, enhet: "mm" },
    hint: ["Fra m til mm ganger du med 1000.", "\\(0{,}2 \\cdot 1000\\)."],
    losning: "<p>\\(0{,}2 \\cdot 1000 = 200\\) mm.</p>"
  },
  {
    id: "eksamen-reim",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En motor med skive 80 mm går på 900 r/min og drar en skive på 160 mm.</p>",
    deler: [
      { tekst: "Hva blir turtallet på den store skiva?", svar: { verdi: 450, enhet: "r/min" } },
      { tekst: "Hva skjer med turtallet når den drevne skiva er dobbelt så stor?", svar: { valg: ["Det dobles", "Det halveres", "Det er uendret"], riktig: 1, forklaring: "Dobbelt diameter gir halvt turtall." } }
    ],
    hint: ["\\(n_2 = 900 \\cdot 80 : 160\\).", "80 : 160 = 1 : 2."],
    losning: "<p>\\(n_2 = 900 \\cdot 80 : 160 = 450\\) r/min. Turtallet halveres.</p>"
  },
  {
    id: "reim-halv",
    niva: "lett",
    tittel: "Dobbelt så stor skive",
    tekst: "<p>Motoren går på 1000 r/min og har en reimskive på 60 mm. Den drar en skive på 120 mm. Hva blir turtallet på den store skiva?</p>",
    steg: [{ verdi: 60000 }],
    svar: { verdi: 500, enhet: "r/min" },
    hint: ["\\(n_2 = n_1 \\cdot d_1 : d_2\\). Større drevet skive gir lavere turtall.", "\\(1000 \\cdot 60 : 120\\)."],
    losning: "<p>\\(1000 \\cdot 60 = 60\\,000\\).<br>\\(n_2 = 60\\,000 : 120 = 500\\) r/min.</p>"
  },
  {
    id: "tenner-15",
    niva: "lett",
    tittel: "Tre ganger så mange tenner",
    tekst: "<p>Et tannhjul med 15 tenner driver et hjul med 45 tenner. Det lille hjulet går på 900 r/min. Hva blir turtallet på det store?</p>",
    svar: { verdi: 300, enhet: "r/min" },
    hint: ["Tenner brukes som diameter: \\(n_2 = n_1 \\cdot z_1 : z_2\\).", "\\(900 \\cdot 15 : 45\\)."],
    losning: "<p>\\(n_2 = 900 \\cdot 15 : 45 = 300\\) r/min. Tre ganger så mange tenner gir en tredel av turtallet.</p>"
  },
  {
    id: "drei-reim",
    niva: "middels",
    tittel: "Reima på dreiebenken",
    tekst: "<p>Motoren på dreiebenken går på 1440 r/min og har en skive på 80 mm. Spindelen har en skive på 160 mm. Motoren driver.</p>",
    deler: [
      { tekst: "Hva blir turtallet på spindelen?", svar: { verdi: 720, enhet: "r/min" } },
      { tekst: "Hva er utvekslingen \\(i = d_2 : d_1\\)? Skriv tallet.", svar: { verdi: 2 } }
    ],
    steg: [{ verdi: 115200 }],
    hint: ["\\(n_2 = 1440 \\cdot 80 : 160\\). Utvekslingen er drevet skive delt på drivende skive.", "80 : 160 = 1 : 2, så turtallet blir halvparten. \\(160 : 80 = 2\\)."],
    losning: "<p>\\(n_2 = 1440 \\cdot 80 : 160 = 720\\) r/min.<br>\\(i = 160 : 80 = 2\\).</p>"
  },
  {
    id: "overdrive",
    niva: "middels",
    tittel: "Overdrive i girkassa",
    tekst: "<p>Inn i girkassa kommer 2500 r/min på et tannhjul med 30 tenner. Ut vil du ha 3750 r/min, slik at hjulene går fortere enn motoren.</p>",
    deler: [
      { tekst: "Hvor mange tenner må det drevne hjulet ha?", svar: { verdi: 20, enhet: "stk" } },
      { tekst: "Hva skjer med turtallet?", svar: { valg: ["Det går opp", "Det går ned", "Det er uendret"], riktig: 0, forklaring: "Det drevne hjulet har færre tenner, så turtallet øker fra 2500 til 3750." } }
    ],
    hint: ["\\(z_2 = n_1 \\cdot z_1 : n_2\\). Færre tenner på det drevne hjulet gir høyere turtall.", "\\(2500 \\cdot 30 : 3750\\)."],
    losning: "<p>\\(z_2 = 2500 \\cdot 30 : 3750 = 20\\) tenner.<br>Turtallet går opp. Kontroll: \\(2500 \\cdot 30 : 20 = 3750\\) r/min.</p>"
  },
  {
    id: "to-trinn",
    niva: "vanskelig",
    tittel: "To trinn ned til trommelen",
    tekst: "<p>En motor på 1500 r/min driver et tannhjul med 20 tenner. Det drar et hjul med 40 tenner. På samme aksel som 40-tenneren sitter et hjul med 12 tenner. Det driver trommelens hjul med 60 tenner.</p>",
    deler: [
      { tekst: "Hva er turtallet på den midterste akselen?", svar: { verdi: 750, enhet: "r/min" } },
      { tekst: "Hva er turtallet på trommelen?", svar: { verdi: 150, enhet: "r/min" } },
      { tekst: "Hva er utvekslingen \\(i = n_{\\text{motor}} : n_{\\text{trommel}}\\)? Skriv tallet.", svar: { verdi: 10 } },
      { tekst: "Hva skjer med momentet på trommelen sammenlignet med motoren?", svar: { valg: ["Det blir mindre, fordi turtallet går opp", "Det blir større, fordi turtallet går ned", "Det er uendret"], riktig: 1, forklaring: "To nedgiringer senker turtallet fra 1500 til 150. Momentet går opp." } }
    ],
    steg: [{ verdi: 750, enhet: "r/min" }],
    hint: ["Regn ett trinn om gangen. \\(n_2 = n_1 \\cdot z_1 : z_2\\). Utvekslingen er motorens turtall delt på trommelens.", "Første trinn: \\(1500 \\cdot 20 : 40\\). Andre trinn bruker 12 og 60 tenner."],
    losning: "<p>Midtaksel: \\(1500 \\cdot 20 : 40 = 750\\) r/min.<br>Trommel: \\(750 \\cdot 12 : 60 = 150\\) r/min.<br>\\(i = 1500 : 150 = 10\\).<br>Turtallet går ned, så momentet på trommelen blir større.</p>"
  },
  {
    id: "skive-bytte",
    niva: "vanskelig",
    tittel: "Hvilken skive på motoren?",
    tekst: "<p>Motoren går på 2800 r/min. Du har to reimskiver, 90 mm og 180 mm. Du kan snu hvilken som sitter på motoren. Rustfritt stål vil ha lavt turtall på verktøyet.</p>",
    deler: [
      { tekst: "Hva blir turtallet når den store skiva sitter på maskinen og den lille på motoren?", svar: { verdi: 1400, enhet: "r/min" } },
      { tekst: "Hva blir turtallet når den store skiva sitter på motoren og den lille på maskinen?", svar: { verdi: 5600, enhet: "r/min" } },
      { tekst: "Hvilken plassering velger du til rustfritt?", svar: { valg: ["Stor skive på maskinen, 1400 r/min", "Stor skive på motoren, 5600 r/min", "Det spiller ingen rolle"], riktig: 0, forklaring: "Rustfritt vil ha lavt turtall. 1400 r/min er lavere enn 5600 r/min." } }
    ],
    hint: ["Den skiva som driver, er \\(d_1\\). \\(n_2 = n_1 \\cdot d_1 : d_2\\). Stor drevet skive gir lavt turtall.", "Lavt turtall: \\(2800 \\cdot 90 : 180\\). Høyt turtall: \\(2800 \\cdot 180 : 90\\)."],
    losning: "<p>Stor skive på maskinen: \\(2800 \\cdot 90 : 180 = 1400\\) r/min.<br>Stor skive på motoren: \\(2800 \\cdot 180 : 90 = 5600\\) r/min.<br>Velg 1400 r/min til rustfritt.</p>"
  },
  {
    id: "kompressor",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Skivene på kompressoren",
    utstyr: "Kompressor med støpselet ute, skyvelære eller metermål",
    hms: "Støpsel ute. Ikke mål på en skive som går. Hår, hette og snor unna reima når læreren senere starter.",
    tekst: "<p>Du måler 75 mm på motorsviva og 225 mm på kompressoren. Skiltet på motoren sier 1500 r/min. Motoren driver. Hva blir turtallet på kompressoren?</p>",
    steg: [{ verdi: 112500 }],
    svar: { verdi: 500, enhet: "r/min" },
    hint: ["\\(n_2 = n_1 \\cdot d_1 : d_2\\). Kompressorskiva er størst, så turtallet skal ned.", "\\(1500 \\cdot 75 : 225\\)."],
    losning: "<p>\\(1500 \\cdot 75 = 112\\,500\\).<br>\\(n_2 = 112\\,500 : 225 = 500\\) r/min.</p>"
  }
]);
