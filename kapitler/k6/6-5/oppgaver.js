Bok.oppgaver([
  {
    id: "moped",
    niva: "lett",
    tittel: "Moped-sylinder",
    tekst: "<p>En sylinder har boring 47 mm og slag 40 mm. Regn ut slagvolumet for én sylinder.</p>",
    steg: [{ verdi: 23.5, enhet: "mm" }],
    svar: { verdi: 69.4, enhet: "cm³", tol: 0.5 },
    hint: ["Radius er 23,5 mm. Husk å gjøre mm³ om til cm³ til slutt.", "\\(\\pi \\cdot 23{,}5^2 \\cdot 40 \\approx 69\\,400\\) mm³ \\(\\approx 69{,}4\\) cm³."],
    losning: "<p>\\(V = \\pi \\cdot 23{,}5^2 \\cdot 40 \\approx 69\\,400\\) mm³ \\(= 69{,}4\\) cm³.</p>"
  },
  {
    id: "en-sylinder",
    niva: "lett",
    tekst: "<p>Boring 80 mm og slag 100 mm. Hvor stort er volumet av denne ene sylinderen?</p>",
    steg: [{ verdi: 40, enhet: "mm" }],
    svar: { verdi: 503, enhet: "cm³", tol: 3 },
    hint: ["r = 40 mm. Del mm³ på 1000 når du vil ha cm³.", "\\(\\pi \\cdot 40^2 \\cdot 100 \\approx 502\\,700\\) mm³ \\(\\approx 503\\) cm³."],
    losning: "<p>\\(\\pi \\cdot 1600 \\cdot 100 = 160\\,000\\pi \\approx 502\\,655\\) mm³ \\(\\approx 503\\) cm³.</p>"
  },
  {
    id: "mm3-liter",
    niva: "lett",
    tekst: "<p>Hvor mange mm³ er 1 L?</p>",
    svar: { verdi: 1000000, enhet: "mm³" },
    hint: ["1 L = 1000 cm³, og 1 cm³ = 1000 mm³.", "1000 · 1000 = 1 000 000 mm³."],
    losning: "<p>\\(1\\ \\text{L} = 1000\\ \\text{cm}^3 = 1\\,000\\,000\\ \\text{mm}^3\\).</p>"
  },
  {
    id: "volvo",
    niva: "middels",
    tittel: "Volvo B230",
    tekst: "<p>Fire sylindre, boring 96 mm og slag 80 mm. Navnet sier 2,3 liter.</p>",
    deler: [
      { tekst: "Hvor stort er volumet av én sylinder?", svar: { verdi: 579, enhet: "cm³", tol: 3 } },
      { tekst: "Hvor stort er slagvolumet for hele motoren?", svar: { verdi: 2.32, enhet: "L", tol: 0.03 } }
    ],
    hint: ["r = 48 mm. Gang til slutt med 4, og gjør om til liter.", "Én sylinder er omtrent 579 cm³. Fire er omtrent 2316 cm³ = 2,32 L."],
    losning: "<p>Én: \\(\\pi \\cdot 48^2 \\cdot 80 \\approx 579\\) cm³.<br>Fire: \\(2316\\) cm³ \\(\\approx 2{,}32\\) L. Ja, 2,3 liter stemmer.</p>"
  },
  {
    id: "to-slanger",
    niva: "middels",
    tittel: "To slanger",
    tekst: "<p>En lagertank på 3 000 000 L fylles på 48 timer med to like slanger.</p>",
    deler: [
      { tekst: "Hvor mange liter per minutt fyller begge slangene til sammen?", svar: { verdi: 1042, enhet: "L/min", tol: 2 } },
      { tekst: "Hvor mange liter per minutt fyller hver slange?", svar: { verdi: 521, enhet: "L/min", tol: 2 } }
    ],
    hint: ["48 · 60 = 2880 minutter. Del volumet på tiden, og del deretter på 2.", "3 000 000 : 2880 ≈ 1042 L/min samlet. Per slange omtrent 521 L/min. Det er 8,68 L/s, ikke 17,36 L/s."],
    losning: "<p>Samlet: \\(3\\,000\\,000 : (48 \\cdot 60) \\approx 1042\\) L/min.<br>Hver slange: omtrent 521 L/min \\(= 8{,}68\\) L/s. 17,36 L/s er begge slangene til sammen.</p>"
  },
  {
    id: "blanding",
    niva: "middels",
    tittel: "Olje og bensin 1 : 50",
    tekst: "<p>Forholdet olje : bensin er 1 : 50. Du måler opp 1 dl olje.</p>",
    deler: [
      { tekst: "Hvor mye bensin skal du ha?", svar: { verdi: 50, enhet: "dl" } },
      { tekst: "Hvor mange liter bensin er det?", svar: { verdi: 5, enhet: "L" } },
      { tekst: "Hvor stor er hele blandingen?", svar: { verdi: 5.1, enhet: "L" } }
    ],
    hint: ["1 del olje og 50 deler bensin. 10 dl = 1 L. Oljen er med i blandingen.", "50 dl bensin = 5,0 L. Blandingen er 51 dl = 5,1 L."],
    losning: "<p>Bensin: 50 dl = 5,0 L. Hele blandingen: 51 dl = 5,1 L. «50 dl = 5 liter» er ikke hele svaret, bare bensinen.</p>"
  },
  {
    id: "oljetank",
    niva: "vanskelig",
    tekst: "<p>En liggende sylindertank har innvendig diameter 400 mm og innvendig lengde 800 mm. Den fylles med 80 L.</p>",
    deler: [
      { tekst: "Hvor mange liter rommer tanken?", svar: { verdi: 100.5, enhet: "L", tol: 1 } },
      { tekst: "Hvor mange prosent full er den med 80 L?", svar: { verdi: 79.6, enhet: "%", tol: 1.5 } }
    ],
    hint: ["Radius 200 mm, høyde her er lengden 800 mm. 1 L = 1 000 000 mm³.", "Volumet er omtrent 100,5 L. 80 / 100,5 · 100 ≈ 80 %."],
    losning: "<p>\\(V = \\pi \\cdot 200^2 \\cdot 800 \\approx 1{,}005 \\cdot 10^8\\) mm³ \\(\\approx 100{,}5\\) L.<br>\\(80 / 100{,}5 \\cdot 100 \\approx 80\\%\\). Mer presist omtrent 79,6 %.</p>"
  },
  {
    id: "mal-sylinder",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Mål en sylinder",
    utstyr: "Skyvelære, en løs sylinder eller et oppgitt mål fra bilverkstedet",
    hms: "Motor skal være kald og tenningsløs. Ikke stikk hånden ned i en sylinder uten at læreren sier fra. Hansker og briller ved oljesøl.",
    tekst: "<p>Hvis du ikke får målt en ekte sylinder: bruk boring 90 mm og slag 80 mm, én sylinder. Regn ut volumet i cm³. Før ekte mål på verkstedkortet når du har dem.</p>",
    steg: [{ verdi: 45, enhet: "mm" }],
    svar: { verdi: 509, enhet: "cm³", tol: 3 },
    hint: ["r = 45 mm.", "\\(\\pi \\cdot 45^2 \\cdot 80 \\approx 508\\,900\\) mm³ \\(\\approx 509\\) cm³."],
    losning: "<p>\\(\\pi \\cdot 45^2 \\cdot 80 \\approx 508\\,938\\) mm³ \\(\\approx 509\\) cm³.</p>"
  },
  {
    id: "rep-skjaer",
    type: "repetisjon",
    fra: "kapittel 5",
    niva: "middels",
    tekst: "<p>Et bor på 10 mm går med 637 r/min. Skjærehastigheten er \\(v_c = \\pi \\cdot d \\cdot n / 1000\\), med \\(d\\) i mm og svaret i m/min. En gammel fasit sa 20 r/min.</p>",
    svar: { verdi: 20, enhet: "m/min", tol: 0.15 },
    hint: ["Sett inn d = 10 og n = 637. Se på enheten i formelen.", "\\(\\pi \\cdot 10 \\cdot 637 / 1000 \\approx 20\\). Enheten er m/min, ikke r/min."],
    losning: "<p>\\(v_c = \\pi \\cdot 10 \\cdot 637 / 1000 \\approx 20{,}0\\) m/min. 20 r/min er feil enhet. Turtall og skjærehastighet er ikke det samme.</p>"
  },
  {
    id: "eks-slag",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>En motor har to sylindre. Boring 70 mm og slag 60 mm.</p>",
    deler: [
      { tekst: "Hvor stort er volumet av én sylinder?", svar: { verdi: 231, enhet: "cm³", tol: 2 } },
      { tekst: "Hvor stort er slagvolumet for begge?", svar: { verdi: 462, enhet: "cm³", tol: 3 } }
    ],
    hint: ["r = 35 mm. Gang med 2 til slutt.", "\\(\\pi \\cdot 35^2 \\cdot 60 \\approx 231\\,000\\) mm³ \\(\\approx 231\\) cm³. To sylindre: omtrent 462 cm³."],
    losning: "<p>Én: \\(\\pi \\cdot 35^2 \\cdot 60 \\approx 231\\) cm³.<br>Begge: \\(2 \\cdot 231 = 462\\) cm³.</p>"
  }
]);
