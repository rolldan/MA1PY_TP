Bok.oppgaver([
  {
    id: "omkrets",
    niva: "lett",
    tittel: "Geometri",
    tekst: "<p>En dekkplate er 30 cm lang og 20 cm bred. Hvor lang er omkretsen?</p>",
    steg: [{ verdi: 50, enhet: "cm" }],
    svar: { verdi: 100, enhet: "cm" },
    hint: ["Omkretsen er veien rundt: to lengder og to bredder.", "\\(2 \\cdot (30 + 20)\\)."],
    losning: "<p>\\(30 + 20 = 50\\). \\(2 \\cdot 50 = 100\\) cm.</p>"
  },
  {
    id: "gang-ti",
    niva: "lett",
    tittel: "Tall",
    tekst: "<p>Regn ut \\(6{,}5 \\cdot 10\\).</p>",
    stegForSteg: false,
    svar: { verdi: 65 },
    hint: ["Når du ganger med 10, flytter kommaet én plass til høyre.", "\\(6{,}5\\) blir 65."],
    losning: "<p>\\(6{,}5 \\cdot 10 = 65\\).</p>"
  },
  {
    id: "areal",
    niva: "middels",
    tittel: "Areal",
    tekst: "<p>Den samme plata er 30 cm × 20 cm. Hvor stort er arealet?</p>",
    svar: { verdi: 600, enhet: "cm²" },
    hint: ["Areal av et rektangel er lengde ganger bredde.", "\\(30 \\cdot 20\\)."],
    losning: "<p>\\(30 \\cdot 20 = 600\\) cm².</p>"
  },
  {
    id: "lonn",
    niva: "middels",
    tittel: "Formel",
    tekst: "<p>Hjelp i verkstedet betales med \\(L = 200 + 150 \\cdot t\\), der \\(t\\) er timer og \\(L\\) er kroner. Hva blir lønna for 2 timer?</p>",
    steg: [{ verdi: 300, enhet: "kr" }],
    svar: { verdi: 500, enhet: "kr" },
    hint: ["Sett \\(t = 2\\) inn i formelen.", "\\(150 \\cdot 2 = 300\\). Legg til 200."],
    losning: "<p>\\(L = 200 + 150 \\cdot 2 = 200 + 300 = 500\\) kr.</p>"
  },
  {
    id: "utstyr",
    niva: "middels",
    tittel: "Økonomi",
    tekst: "<p>Du har 350 kr til verneutstyr. Brillene koster 89 kr, hanskene 45 kr og øreklokkene 79 kr.</p>",
    steg: [{ verdi: 213, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster de tre tingene til sammen?", svar: { verdi: 213, enhet: "kr" } },
      { tekst: "Hvor mye har du igjen?", svar: { verdi: 137, enhet: "kr" } }
    ],
    hint: ["Legg sammen de tre prisene først.", "\\(89 + 45 = 134\\), og \\(134 + 79 = 213\\)."],
    losning: "<p>\\(89 + 45 + 79 = 213\\) kr. \\(350 - 213 = 137\\) kr igjen.</p>"
  },
  {
    id: "hjorneskjaer",
    niva: "vanskelig",
    tekst: "<p>En plate er 40 cm × 25 cm. Du skjærer bort et hjørne på 10 cm × 10 cm. Hvor stort areal er igjen?</p>",
    steg: [{ verdi: 1000, enhet: "cm²" }, { verdi: 100, enhet: "cm²" }],
    svar: { verdi: 900, enhet: "cm²" },
    hint: ["Regn arealet av hele plata, og trekk fra det lille kvadratet.", "\\(40 \\cdot 25 = 1000\\). \\(10 \\cdot 10 = 100\\)."],
    losning: "<p>Hele plata: \\(40 \\cdot 25 = 1000\\) cm². Hjørnet: \\(10 \\cdot 10 = 100\\) cm². Igjen: \\(1000 - 100 = 900\\) cm².</p>"
  },
  {
    id: "merkeskilt",
    type: "verksted",
    niva: "lett",
    merke: "V/K",
    tittel: "Merkeskiltet på søylebora",
    utstyr: "Merkeskilt på en maskin, eller tallene på dette kortet hvis dere er i klasserommet",
    hms: "Les skiltet. Ikke start maskinen.",
    tekst: "<p>Skiltet sier 230 V, 750 W, 1400 r/min og bor Ø8 mm. Hvilket tall er en lengde?</p>",
    stegForSteg: false,
    svar: { valg: ["230 V", "750 W", "1400 r/min", "8 mm"], riktig: 3, forklaring: "mm er millimeter, en lengde." },
    hint: ["Lengde måles i mm, cm eller m.", "Se etter mm."],
    losning: "<p>8 mm er lengden. V er spenning, W er effekt og r/min er turtall.</p>"
  },
  {
    id: "bjorn-kolonne",
    niva: "lett",
    tittel: "Bjørn",
    tekst: "<p>I spillet Bjørn: hvilke tall kan du skrive i kolonne B?</p>",
    stegForSteg: false,
    svar: { valg: ["1 til 8", "9 til 16", "17 til 24", "33 til 40"], riktig: 0, forklaring: "B er første kolonne og har de minste tallene." },
    hint: ["Kolonnene går i rekkefølge B, J, Ø, R, N.", "B starter på 1."],
    losning: "<p>Kolonne B skal ha fem ulike tall fra 1 til 8.</p>"
  },
  {
    id: "repetisjon-regler",
    type: "repetisjon",
    fra: "kapittel 0.1",
    niva: "lett",
    tekst: "<p>Hvor mange centimeter er 2 m?</p>",
    stegForSteg: false,
    svar: { verdi: 200, enhet: "cm" },
    hint: ["1 m = 100 cm.", "Gang med 2."],
    losning: "<p>\\(2 \\cdot 100 = 200\\) cm.</p>"
  },
  {
    id: "eksamen-esker",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Skruer selges i esker på 100. Formelen er \\(n = e \\cdot 100\\), der \\(e\\) er antall esker.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange skruer er det i 4 esker?", svar: { verdi: 400, enhet: "stk" } },
      { tekst: "Du har 500 kr. Én eske koster 79,50 kr. Hvor mange hele esker kan du kjøpe?", svar: { verdi: 6, enhet: "stk" } }
    ],
    hint: ["\\(4 \\cdot 100 = 400\\).", "\\(6 \\cdot 79{,}50 = 477\\), som er under 500. \\(7 \\cdot 79{,}50 = 556{,}50\\), som er over."],
    losning: "<p>a) \\(4 \\cdot 100 = 400\\) skruer.<br>b) \\(6 \\cdot 79{,}50 = 477\\) kr. Sju esker koster 556,50 kr, og det har du ikke. Du kan kjøpe 6 esker.</p>"
  }
]);
