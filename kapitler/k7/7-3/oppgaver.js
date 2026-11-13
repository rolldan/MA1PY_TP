Bok.oppgaver([
  {
    id: "bsu-maks",
    niva: "lett",
    tittel: "Fullt BSU-innskudd",
    tekst: "<p>Du setter inn 27 500 kr på BSU i 2026 og betaler nok skatt. Hvor stort blir skattefradraget?</p>",
    svar: { verdi: 2750, enhet: "kr", tol: 0.5 },
    hint: ["Fradraget er 10 % av innskuddet.", "\\(27\\,500 \\cdot 0{,}10 = 2\\,750\\)."],
    losning: "<p>\\(27\\,500 \\cdot 0{,}10 = 2\\,750\\) kr i lavere skatt. Pengene på kontoen er fortsatt 27 500 kr pluss renter.</p>"
  },
  {
    id: "ett-ar",
    niva: "lett",
    tekst: "<p>Du setter inn 20 000 kr ved starten av året. Renten er 2 % per år. Hvor mye står på konto etter ett år?</p>",
    svar: { verdi: 20400, enhet: "kr", tol: 0.5 },
    hint: ["Vekstfaktor 1,02.", "\\(20\\,000 \\cdot 1{,}02 = 20\\,400\\)."],
    losning: "<p>\\(20\\,000 \\cdot 1{,}02 = 20\\,400\\) kr.</p>"
  },
  {
    id: "tolv-tusen",
    niva: "lett",
    tekst: "<p>Du setter av 1 000 kr i måneden. Hvor mye har du satt inn etter 12 måneder, uten rente?</p>",
    svar: { verdi: 12000, enhet: "kr", tol: 0.5 },
    hint: ["Tolv måneder.", "\\(12 \\cdot 1\\,000 = 12\\,000\\)."],
    losning: "<p>\\(12 \\cdot 1\\,000 = 12\\,000\\) kr.</p>"
  },
  {
    id: "tre-ar",
    niva: "middels",
    tekst: "<p>20 000 kr står i tre år med 2 % rente per år. Vekstfaktoren for tre år er \\(1{,}02^3 = 1{,}061208\\).</p>",
    deler: [
      { tekst: "Hva står på konto etter tre år?", svar: { verdi: 21224.16, enhet: "kr", tol: 0.02 } },
      { tekst: "Hvor mye er rente?", svar: { verdi: 1224.16, enhet: "kr", tol: 0.02 } }
    ],
    hint: ["Gang startbeløpet med 1,061208.", "Renta er sluttbeløp minus 20 000."],
    losning: "<p>\\(20\\,000 \\cdot 1{,}061208 = 21\\,224{,}16\\) kr.<br>Rente: \\(21\\,224{,}16 - 20\\,000 = 1\\,224{,}16\\) kr.</p>"
  },
  {
    id: "maned-slutt",
    niva: "middels",
    tekst: "<p>Du setter inn 1 000 kr i slutten av hver måned. I denne oppgaven er renta \\(1\\,000 \\cdot 0{,}02 \\cdot 66/12\\) kroner på ett år.</p>",
    deler: [
      { tekst: "Hvor mange kroner er renta?", svar: { verdi: 110, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva står på konto etter ett år, innskudd pluss rente?", svar: { verdi: 12110, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Regn \\(66/12\\) først. Det er 5,5.", "\\(1\\,000 \\cdot 0{,}02 \\cdot 5{,}5 = 110\\). Innskudd er 12 000 kr."],
    losning: "<p>Rente: \\(1\\,000 \\cdot 0{,}02 \\cdot 5{,}5 = 110\\) kr.<br>Saldo: \\(12\\,000 + 110 = 12\\,110\\) kr.</p>"
  },
  {
    id: "plass-igjen",
    niva: "middels",
    tekst: "<p>Du har allerede satt inn 290 000 kr på BSU, uten renter. Samlet tak er 300 000 kr. Hva er det meste du kan sette inn i år?</p>",
    svar: { verdi: 10000, enhet: "kr", tol: 0.5 },
    hint: ["Taket er 300 000, ikke 27 500, når du nærmer deg toppen.", "\\(300\\,000 - 290\\,000 = 10\\,000\\). Årsgrensen på 27 500 er høyere, så det er samlet tak som stopper deg."],
    losning: "<p>\\(300\\,000 - 290\\,000 = 10\\,000\\) kr. Du kan ikke sette inn 27 500 kr, for da blir summen 317 500 kr.</p>"
  },
  {
    id: "ellevte-ar",
    niva: "vanskelig",
    tittel: "Det ellevte året",
    tekst: "<p>Du har satt inn fullt beløp, 27 500 kr, i ti år. Rentene er ikke med i taket. Samlet tak for innskudd er 300 000 kr. Du betaler nok skatt.</p>",
    deler: [
      { tekst: "Hvor mye er satt inn etter ti år?", svar: { verdi: 275000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye kan du sette inn det ellevte året?", svar: { verdi: 25000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor stort blir skattefradraget det ellevte året?", svar: { verdi: 2500, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["\\(10 \\cdot 27\\,500 = 275\\,000\\).", "Plass igjen: \\(300\\,000 - 275\\,000\\). Fradrag: 10 % av det beløpet."],
    losning: "<p>Ti år: 275 000 kr. Plass: 25 000 kr. Fradrag: \\(25\\,000 \\cdot 0{,}10 = 2\\,500\\) kr.</p>"
  },
  {
    id: "bsu-fra-lonn",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Tusen fra lønna",
    utstyr: "Lønnsslipp fra 7.2 og kalkulator",
    hms: "Ikke oppgi kontonummer på arket som leveres inn.",
    tekst: "<p>Utbetalt lønn er 12 915 kr. Du setter av 1 000 kr til BSU. På ett år blir innskuddet 12 000 kr, og du betaler nok skatt til å få fradraget.</p>",
    deler: [
      { tekst: "Hvor mye er igjen til forbruk den måneden?", svar: { verdi: 11915, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor stort blir BSU-fradraget for 12 000 kr?", svar: { verdi: 1200, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Trekk 1 000 fra utbetalt lønn.", "Fradrag: \\(12\\,000 \\cdot 0{,}10\\)."],
    losning: "<p>Igjen: \\(12\\,915 - 1\\,000 = 11\\,915\\) kr.<br>Fradrag: \\(12\\,000 \\cdot 0{,}10 = 1\\,200\\) kr.</p>"
  },
  {
    id: "rep-vekst",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Et beløp på 4 000 kr øker med 5 %. Hva blir beløpet?</p>",
    svar: { verdi: 4200, enhet: "kr", tol: 0.5 },
    hint: ["Vekstfaktor 1,05.", "\\(4\\,000 \\cdot 1{,}05 = 4\\,200\\)."],
    losning: "<p>\\(4\\,000 \\cdot 1{,}05 = 4\\,200\\) kr.</p>"
  },
  {
    id: "rep-prosent-av",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Hvor mange kroner er 10 % av 8 000 kr?</p>",
    svar: { verdi: 800, enhet: "kr", tol: 0.5 },
    hint: ["10 % er en tidel.", "\\(8\\,000 : 10 = 800\\)."],
    losning: "<p>\\(8\\,000 \\cdot 0{,}10 = 800\\) kr.</p>"
  },
  {
    id: "eksamen-bsu",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>BSU-innskudd 15 000 kr i 2026. Fradraget er 10 %, og du betaler nok skatt.</p>",
    stegForSteg: false,
    svar: { verdi: 1500, enhet: "kr", tol: 0.5 },
    hint: ["Flytt kommaet én plass.", "\\(15\\,000 \\cdot 0{,}10 = 1\\,500\\)."],
    losning: "<p>\\(15\\,000 \\cdot 0{,}10 = 1\\,500\\) kr.</p>"
  }
]);
