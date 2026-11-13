Bok.oppgaver([
  {
    id: "tid-likt",
    niva: "lett",
    tittel: "Del tiden",
    tekst: "<p>Laget har 8 minutter. Fire elever deler tiden likt. Hvor mange minutter får hver?</p>",
    svar: { verdi: 2, enhet: "min", tol: 0.01 },
    hint: ["Del tiden på antall elever.", "\\(8 : 4\\)."],
    losning: "<p>\\(8 : 4 = 2\\) minutter hver.</p>"
  },
  {
    id: "rest-pott",
    niva: "lett",
    tittel: "Er det penger igjen?",
    tekst: "<p>Eksempelbudsjettet for Focus summerer til 46 152,50 kr. Potten er 50 000 kr. Hvor mye er igjen?</p>",
    svar: { verdi: 3847.5, enhet: "kr", tol: 0.5 },
    hint: ["Trekk summen fra potten.", "\\(50\\,000 - 46\\,152{,}50\\)."],
    losning: "<p>\\(50\\,000 - 46\\,152{,}50 = 3\\,847{,}50\\) kr. Budsjettet holder.</p>"
  },
  {
    id: "feil-sum",
    niva: "middels",
    tittel: "Finn feilen i summen",
    tekst: "<p>Et lag skriver: \\(4 \\cdot 400 = 1\\,600\\) og \\(1{,}5 \\cdot 200 = 300\\), sum 2 000 kr.</p>",
    steg: [{ verdi: 1600, enhet: "kr" }, { verdi: 300, enhet: "kr" }],
    svar: { verdi: 1900, enhet: "kr", tol: 0.5 },
    hint: ["Gangestykkene stemmer. Legg dem sammen på nytt.", "\\(1\\,600 + 300\\)."],
    losning: "<p>\\(1\\,600 + 300 = 1\\,900\\) kr. Summen 2 000 kr er 100 kr for høy.</p>"
  },
  {
    id: "rubrikk-niva",
    niva: "middels",
    tittel: "Hvilket nivå?",
    tekst: "<p>Les rubrikken i teorien. En elev har regnet rabatt, mva og enkel rente riktig, og forklarer at lånet koster 1 950 kr ekstra. Drivstoffet er holdt utenfor potten.</p>",
    stegForSteg: false,
    svar: {
      valg: [
        "Høy måloppnåelse i økonomi",
        "Lav måloppnåelse i økonomi",
        "Høy måloppnåelse i geometri"
      ],
      riktig: 0,
      forklaring: "Beskrivelsen treffer høy i raden om økonomi (KM1), ikke geometri."
    },
    hint: ["Se raden som handler om lån, rabatt og mva.", "Høy i økonomi krever at renta er forklart, ikke bare regnet."],
    losning: "<p>Høy måloppnåelse i økonomi. Geometri er en annen rad i rubrikken.</p>"
  },
  {
    id: "dyrere-kasse",
    niva: "vanskelig",
    tittel: "Kassen ble dyrere",
    tekst: "<p>I eksempelbudsjettet koster basskassen 1 705 kr, og det er 3 847,50 kr igjen av potten. Kassen blir 200 kr dyrere enn anslaget.</p>",
    deler: [
      { tekst: "Hva blir den nye prisen på kassen?", svar: { verdi: 1905, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er igjen av potten etter økningen?", svar: { verdi: 3647.5, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Holder budsjettet fortsatt?",
        svar: {
          valg: ["Ja, det er fortsatt penger igjen", "Nei, potten er brukt opp", "Nei, de går 200 kr i minus"],
          riktig: 0,
          forklaring: "3 847,50 − 200 = 3 647,50 kr igjen."
        }
      }
    ],
    hint: ["Ny pris = 1 705 + 200.", "Trekk 200 kr fra det som var igjen."],
    losning: "<p>Ny pris: \\(1\\,905\\) kr. Igjen: \\(3\\,847{,}50 - 200 = 3\\,647{,}50\\) kr. Budsjettet holder.</p>"
  },
  {
    id: "ovelse",
    type: "verksted",
    merke: "K",
    niva: "lett",
    tittel: "Øv med klokke",
    utstyr: "Klokke, rapportutkast, tegning",
    hms: "Klasserom. Snakk så andre lag kan øve ved siden av. Ingen kommentarer om personen, bare om tallene.",
    tekst: "<p>Tre elever øver. Hver snakker i 2 minutter.</p>",
    deler: [
      { tekst: "Hvor lang tid bruker laget?", svar: { verdi: 6, enhet: "min", tol: 0.1 } },
      { tekst: "Skriv hvilken utregning du skal forklare, og det første regnestykket.", svar: { fritekst: true, fasit: "<p>Et godt svar nevner en konkret utregning fra prosjektet, for eksempel rabatt, mva, rente, liter lakk eller volum, med ett regnestykke og en enhet.</p>" } }
    ],
    hint: ["Tre personer · 2 minutter.", "\\(3 \\cdot 2\\)."],
    losning: "<p>\\(3 \\cdot 2 = 6\\) minutter. Utregningen er din. Kontrolløren sjekker at det første steget har en enhet.</p>"
  },
  {
    id: "repetisjon-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stang på tegningen er 2 450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m", tol: 0.005 },
    hint: ["1 m = 1 000 mm. Del på 1 000.", "\\(2\\,450 : 1\\,000\\)."],
    losning: "<p>\\(2\\,450 : 1\\,000 = 2{,}45\\) m.</p>"
  },
  {
    id: "eksamen-blandet",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Støtdemperen koster 1 200 kr eks. mva. Focus koster 28 000 kr før 8 % kontantrabatt.</p>",
    deler: [
      { tekst: "Hva koster støtdemperen inkl. mva?", svar: { verdi: 1500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster bilen etter rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Mva: gang med 1,25.", "Rabatt: gang med 0,92."],
    losning: "<p>Støtdemper: \\(1\\,200 \\cdot 1{,}25 = 1\\,500\\) kr.</p><p>Bil: \\(28\\,000 \\cdot 0{,}92 = 25\\,760\\) kr.</p>"
  }
]);
