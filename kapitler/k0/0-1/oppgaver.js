Bok.oppgaver([
  {
    id: "antall-regler",
    niva: "lett",
    tittel: "Spillereglene",
    tekst: "<p>Hvor mange spilleregler har klassen?</p>",
    stegForSteg: false,
    svar: { verdi: 5, enhet: "stk" },
    hint: ["Reglene henger på veggen og står på teorisiden.", "Tell punktene: tid, mobil, prøve og hjelpe, le sammen, målet på tavla."],
    losning: "<p>Det er 5 spilleregler.</p>"
  },
  {
    id: "mobil",
    niva: "lett",
    tekst: "<p>Hvor skal mobiltelefonen ligge i arbeidsfasen?</p>",
    stegForSteg: false,
    svar: { valg: ["I lomma, på lydløs", "I kassa", "På benken, med skjermen ned", "Hos læreren hele dagen"], riktig: 1, forklaring: "Mobilen ligger i kassa mens klassen arbeider." },
    hint: ["Se spilleregel 2.", "Den handler om kassa."],
    losning: "<p>Mobilen ligger i kassa i arbeidsfasen.</p>"
  },
  {
    id: "niva-navn",
    niva: "lett",
    tekst: "<p>Hva heter det laveste nivået i måltrappa, det alle skal få til?</p>",
    stegForSteg: false,
    svar: { valg: ["Lett", "Middels", "Vanskelig", "Eksamen"], riktig: 0, forklaring: "Lett er grunnmuren." },
    hint: ["Måltrappa har tre nivåer.", "Det første heter Lett."],
    losning: "<p>Nivået heter Lett.</p>"
  },
  {
    id: "hva-er-lengde",
    niva: "middels",
    tekst: "<p>På verkstedrunden ser du disse fem: 1400 r/min, målestokk 1:5, 8 bar, 79,50 kr og Ø48 mm. Hvilket av dem er en lengde?</p>",
    stegForSteg: false,
    svar: { valg: ["1400 r/min", "Målestokk 1:5", "8 bar", "Ø48 mm"], riktig: 3, forklaring: "mm er en lengdeenhet. De andre er turtall, forhold, trykk og pris." },
    hint: ["En lengde måles med linjal, målebånd eller skyvelære.", "Se etter enheten mm."],
    losning: "<p>Ø48 mm er en lengde. r/min er turtall, 1:5 er et forhold, bar er trykk og kr er pris.</p>"
  },
  {
    id: "ror-cm",
    niva: "middels",
    tekst: "<p>Et rør er merket 2,5 m. Tegningen ved siden av bruker centimeter. Hvor mange centimeter er røret?</p>",
    steg: [{ verdi: 100, enhet: "cm" }],
    svar: { verdi: 250, enhet: "cm" },
    hint: ["1 m = 100 cm.", "\\(2{,}5 \\cdot 100\\)."],
    losning: "<p>\\(2{,}5 \\cdot 100 = 250\\) cm. Røret og tegningen beskriver samme lengde.</p>"
  },
  {
    id: "kan-ikke-sammenligne",
    niva: "vanskelig",
    tekst: "<p>Du ser tre skilt: 1400 r/min, 2,4 m og 79,50 kr. En hylle skal være 2,4 m. Du kapper av 80 cm til en brakett.</p>",
    steg: [{ verdi: 240, enhet: "cm" }],
    deler: [
      { tekst: "Hvilket av de tre skiltene er det største tallet?", svar: { valg: ["1400 r/min", "2,4 m", "79,50 kr", "De har ulike enheter og kan ikke sammenlignes"], riktig: 3, forklaring: "Ulike enheter er ulike størrelser." } },
      { tekst: "Hvor mange centimeter er igjen av hylla?", svar: { verdi: 160, enhet: "cm" } }
    ],
    hint: ["Du kan bare sammenligne tall som har samme enhet.", "Gjør 2,4 m om til cm, og trekk fra 80 cm."],
    losning: "<p>a) Tallene har ulike enheter, så de kan ikke sammenlignes.<br>b) \\(2{,}4\\ \\text{m} = 240\\ \\text{cm}\\). \\(240 - 80 = 160\\) cm.</p>"
  },
  {
    id: "fem-funn",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Fem funn på runden",
    utstyr: "Telefon eller nettbrett til bilde, notatblokk",
    hms: "Gå bare der læreren har sagt det er lov. Ikke ta på roterende deler. Ikke start maskiner.",
    tekst: "<p>Laget noterer: turtall 900 r/min, målestokk 1:2, manometer 6 bar, prislapp 45 kr, rør Ø32 mm. Hvor mange av de fem er en lengde?</p>",
    stegForSteg: false,
    svar: { verdi: 1, enhet: "stk" },
    hint: ["En lengde har enhet som mm, cm eller m.", "Målestokk er et forhold, ikke en lengde."],
    losning: "<p>Bare Ø32 mm er en lengde. De andre er turtall, målestokk, trykk og pris. På den ekte runden skal hvert bilde ha både et tall og en enhet eller et forhold.</p>"
  },
  {
    id: "repetisjon-gangetabell",
    type: "repetisjon",
    fra: "ungdomsskolen",
    niva: "lett",
    tekst: "<p>Regn ut \\(6 \\cdot 7\\).</p>",
    stegForSteg: false,
    svar: { verdi: 42 },
    hint: ["Bruk gangetabellen.", "\\(6 \\cdot 7\\) er 6 sjuere."],
    losning: "<p>\\(6 \\cdot 7 = 42\\).</p>"
  },
  {
    id: "eksamen-ror",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et rør er 3 m langt. Du kapper av 80 cm. Hvor mange centimeter er igjen?</p>",
    steg: [{ verdi: 300, enhet: "cm" }],
    svar: { verdi: 220, enhet: "cm" },
    hint: ["Gjør om meter til centimeter først.", "\\(3 \\cdot 100 = 300\\). Trekk fra 80."],
    losning: "<p>\\(3\\ \\text{m} = 300\\ \\text{cm}\\). \\(300 - 80 = 220\\) cm.</p>"
  }
]);
