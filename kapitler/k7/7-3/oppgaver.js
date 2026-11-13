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
  },
  {
    id: "elleve-2500",
    niva: "lett",
    tittel: "Fullt årsinnskudd",
    tekst: "<p>Du setter inn 2 500 kr på BSU i 11 måneder i 2026. Du betaler nok skatt, og du eier ikke bolig.</p>",
    deler: [
      { tekst: "Hvor mye er satt inn?", svar: { verdi: 27500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor stort blir skattefradraget?", svar: { verdi: 2750, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 27500, enhet: "kr" }, { verdi: 2750, enhet: "kr" }],
    hint: ["Årsgrensen i 2026 er 27 500 kr. Elleve ganger 2 500 treffer den.", "Fradraget er 10 %: \\(27\\,500 \\cdot 0{,}10 = 2\\,750\\)."],
    losning: "<p>Innskudd: \\(11 \\cdot 2\\,500 = 27\\,500\\) kr.<br>Fradrag: \\(2\\,750\\) kr. Pengene på kontoen er innskuddet pluss renter, ikke fradraget.</p>"
  },
  {
    id: "alder-34",
    niva: "lett",
    tittel: "Året du fyller 34",
    tekst: "<p>BSU-fradraget i 2026 gjelder til og med året du fyller 33. Du fyller 34 år i 2026 og setter inn 10 000 kr. Hva stemmer?</p>",
    stegForSteg: false,
    svar: { valg: ["Du får 1 000 kr i skattefradrag", "Du får ikke BSU-fradrag for innskuddet i 2026", "Fradraget er 10 000 kr"], riktig: 1 },
    hint: ["Sjekk aldersgrensen, ikke bare 10 %.", "Fradraget gjelder til og med året du fyller 33."],
    losning: "<p>Året du fyller 34, er du utenfor aldersgrensen. Innskuddet gir ikke BSU-fradrag i 2026.</p>"
  },
  {
    id: "to-ar-10",
    niva: "middels",
    tekst: "<p>Du setter inn 10 000 kr ved starten av året. Renten er 2 % per år. Vekstfaktoren for to år er \\(1{,}02^2 = 1{,}0404\\).</p>",
    deler: [
      { tekst: "Hva står på konto etter to år?", svar: { verdi: 10404, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er rente?", svar: { verdi: 404, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 10404, enhet: "kr" }, { verdi: 404, enhet: "kr" }],
    hint: ["Gang startbeløpet med 1,0404.", "Renta er sluttbeløp minus 10 000."],
    losning: "<p>\\(10\\,000 \\cdot 1{,}0404 = 10\\,404\\) kr.<br>Rente: \\(10\\,404 - 10\\,000 = 404\\) kr.</p>"
  },
  {
    id: "skatt-tak",
    niva: "middels",
    tittel: "Fradraget kan ikke bli større enn skatten",
    tekst: "<p>Du setter inn 20 000 kr på BSU i 2026. 10 % av innskuddet er 2 000 kr. Du skal bare betale 1 400 kr i skatt og trygdeavgift, og du eier ikke bolig.</p>",
    deler: [
      { tekst: "Hvor stort blir fradraget du faktisk får?", svar: { verdi: 1400, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva stemmer om de 1 400 kronene?", svar: { valg: ["De settes inn på BSU-kontoen", "De trekkes fra skatten, og kontoen får dem ikke", "De legges oppå de 20 000 kronene som rente"], riktig: 1 } }
    ],
    steg: [{ verdi: 2000, enhet: "kr" }, { verdi: 1400, enhet: "kr" }],
    hint: ["Du får ikke mer i fradrag enn skatten du skulle betalt.", "10 % gir 2 000 kr, men skatten er bare 1 400 kr. Fradraget settes ikke inn på kontoen."],
    losning: "<p>10 % av 20 000 er 2 000 kr, men du kan bare få fradrag for 1 400 kr.<br>Beløpet trekkes fra skatten. Saldoen på BSU er fortsatt 20 000 kr pluss renter.</p>"
  },
  {
    id: "tak-281",
    niva: "middels",
    tittel: "Nær samlet tak",
    tekst: "<p>Du har satt inn 281 000 kr på BSU, uten renter. Samlet tak er 300 000 kr. Årsgrensen i 2026 er 27 500 kr. Du betaler nok skatt.</p>",
    deler: [
      { tekst: "Hva er det meste du kan sette inn i år?", svar: { verdi: 19000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor stort blir skattefradraget for det beløpet?", svar: { verdi: 1900, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 19000, enhet: "kr" }, { verdi: 1900, enhet: "kr" }],
    hint: ["Sammenlign plassen opp til 300 000 med årsgrensen. Den laveste gjelder.", "\\(300\\,000 - 281\\,000 = 19\\,000\\). Fradrag: \\(19\\,000 \\cdot 0{,}10\\)."],
    losning: "<p>Plass: \\(19\\,000\\) kr. Det er mindre enn 27 500, så du stopper på 19 000 kr.<br>Fradrag: \\(1\\,900\\) kr.</p>"
  },
  {
    id: "fire-ar-15",
    niva: "vanskelig",
    tekst: "<p>Du setter inn 15 000 kr én gang. Renten er 2 % per år i fire år. Vekstfaktoren er \\(1{,}02^4 = 1{,}08243216\\).</p>",
    deler: [
      { tekst: "Hva står på konto etter fire år? Avrund til øre.", svar: { verdi: 16236.48, enhet: "kr", tol: 0.02 } },
      { tekst: "Hvor mye er rente, avrundet til øre?", svar: { verdi: 1236.48, enhet: "kr", tol: 0.02 } }
    ],
    steg: [{ verdi: 1.08243216 }, { verdi: 16236.4824, enhet: "kr" }, { verdi: 16236.48, enhet: "kr" }],
    hint: ["Gang 15 000 med 1,08243216.", "\\(15\\,000 \\cdot 1{,}08243216 = 16\\,236{,}4824\\), som er 16 236,48 kr til øre. Renta er differansen fra 15 000."],
    losning: "<p>\\(15\\,000 \\cdot 1{,}08243216 = 16\\,236{,}4824\\) kr, avrundet \\(16\\,236{,}48\\) kr.<br>Rente: \\(16\\,236{,}48 - 15\\,000 = 1\\,236{,}48\\) kr.</p>"
  },
  {
    id: "eier-bolig",
    niva: "vanskelig",
    tittel: "Innskudd, men egen bolig",
    tekst: "<p>Du setter inn 27 500 kr på BSU ved starten av 2026. Renten er 2 % per år. Du eier bolig 31. desember, så du ikke får skattefradrag. Rentene teller ikke med i taket.</p>",
    deler: [
      { tekst: "Hvor stort blir skattefradraget?", svar: { verdi: 0, enhet: "kr", tol: 0 } },
      { tekst: "Hva står på konto etter ett år?", svar: { verdi: 28050, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av saldoen er rente?", svar: { verdi: 550, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 0, enhet: "kr" }, { verdi: 28050, enhet: "kr" }, { verdi: 550, enhet: "kr" }],
    hint: ["Egen bolig 31. desember tar bort fradraget. Renta regnes likevel.", "\\(27\\,500 \\cdot 1{,}02 = 28\\,050\\). Rente: \\(550\\) kr. Fradrag: \\(0\\) kr."],
    losning: "<p>Fradrag: 0 kr, fordi du eier bolig 31. desember.<br>Saldo: \\(27\\,500 \\cdot 1{,}02 = 28\\,050\\) kr.<br>Rente: \\(550\\) kr. De 2 750 kronene du ikke får i fradrag, blir ikke lagt inn på kontoen.</p>"
  }
]);
