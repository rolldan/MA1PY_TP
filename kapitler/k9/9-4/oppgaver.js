Bok.oppgaver([
  {
    id: "danmark",
    niva: "lett",
    tittel: "Danmark",
    tekst: "<p>24 bokser koster 96 kr. Hva koster én boks?</p>",
    svar: { verdi: 4, enhet: "kr" },
    hint: [
      "Del kasseprisen på antall bokser.",
      "\\(96 : 24 = 4\\)."
    ],
    losning: "<p>\\(96 : 24 = 4\\) kr per boks.</p>"
  },
  {
    id: "norge",
    niva: "lett",
    tittel: "Norge",
    tekst: "<p>12 bokser koster 72 kr. Hva koster én boks?</p>",
    svar: { verdi: 6, enhet: "kr" },
    hint: [
      "Del prisen på antallet.",
      "\\(72 : 12 = 6\\)."
    ],
    losning: "<p>\\(72 : 12 = 6\\) kr per boks.</p>"
  },
  {
    id: "prosent",
    niva: "middels",
    tittel: "Tre land",
    tekst: "<p>Sverige: 20 bokser for 110 kr. Danmark: 4 kr per boks. Norge: 6 kr per boks.</p>",
    steg: [{ verdi: 2, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster én boks i Sverige?", svar: { verdi: 5.5, enhet: "kr" } },
      { tekst: "Hvor mange prosent dyrere er Norge enn Danmark?", svar: { verdi: 50, enhet: "%" } },
      {
        tekst: "Hvilket land er dyrest per boks?",
        svar: { valg: ["Danmark", "Sverige", "Norge"], riktig: 2, forklaring: "6 kr er mer enn 5,50 kr og 4 kr." }
      }
    ],
    hint: [
      "Stykkpris først. Prosent dyrere = forskjell delt på den laveste prisen.",
      "\\(110 : 20 = 5{,}5\\). \\((6 - 4) : 4 = 0{,}5\\)."
    ],
    losning: "<p>Sverige: \\(110 : 20 = 5{,}50\\) kr. Norge mot Danmark: \\(2 : 4 = 0{,}5 = 50\\) %. Norge er dyrest.</p>"
  },
  {
    id: "pythagoras",
    niva: "middels",
    tittel: "Esken 6-8-10",
    tekst: "<p>Sidene er 6 cm, 8 cm og 10 cm. Den lengste siden er 10 cm.</p>",
    steg: [{ verdi: 36 }, { verdi: 64 }],
    deler: [
      { tekst: "Hva er \\(6^2 + 8^2\\)? Skriv bare tallet.", svar: { verdi: 100 } },
      {
        tekst: "Er esken rettvinklet?",
        svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "100 = 10², så vinkelen er rett." }
      }
    ],
    hint: [
      "Regn kvadratene og legg dem sammen. Sammenlign med 10 · 10.",
      "\\(36 + 64 = 100\\) og \\(10^2 = 100\\)."
    ],
    losning: "<p>\\(6^2 + 8^2 = 36 + 64 = 100 = 10^2\\). Esken er rettvinklet. Det er 3-4-5 ganget med 2.</p>"
  },
  {
    id: "bensin-og-luke",
    niva: "vanskelig",
    tittel: "Dansk bensin og luken",
    tekst: "<p>Bensin i Danmark koster 14,50 DKK per liter. Kursen i denne oppgaven er 100 DKK = 155 NOK. I Norge koster bensin 22,50 kr per liter. Tanken er 400 L. En luke har katetene 60 cm og 80 cm.</p>",
    steg: [{ verdi: 1.55 }, { verdi: 22.475, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster én liter i norske kroner? Tre desimaler, ikke rund tidligere.", svar: { verdi: 22.475, enhet: "kr", tol: 0.001 } },
      { tekst: "Hva koster 400 L i Danmark, i norske kroner? Bruk 22,475 kr per liter.", svar: { verdi: 8990, enhet: "kr" } },
      {
        tekst: "Sammenlign med 22,50 kr per liter i Norge. Hva er rett?",
        svar: {
          valg: ["Billigere i Danmark", "Dyrere i Danmark", "Samme pris"],
          riktig: 0,
          forklaring: "22,475 kr er litt under 22,50 kr. Forskjellen på 400 L er 10 kr."
        }
      },
      { tekst: "Hvor lang er diagonalen på luken hvis hjørnet er rett?", svar: { verdi: 100, enhet: "cm" } },
      {
        tekst: "Hvorfor kontrollerer en sveiser store rammer med målebånd og 3-4-5, ikke bare med en liten vinkelhake?",
        svar: { fritekst: true, fasit: "<p>Et godt svar sier at store konstruksjoner drar seg når de sveises, og at en lang diagonal eller 3-4-5 fanger skjevheten bedre enn en liten vinkelhake i ett hjørne.</p>" }
      }
    ],
    hint: [
      "1 DKK = 1,55 kr. Gang 14,50 med 1,55. Diagonalen: 60-80-100 er 6-8-10 ganget med 10.",
      "\\(14{,}50 \\cdot 1{,}55 = 22{,}475\\). \\(60^2 + 80^2 = 3\\,600 + 6\\,400 = 10\\,000\\)."
    ],
    losning: "<p>\\(14{,}50 \\cdot 1{,}55 = 22{,}475\\) kr per liter. \\(400 \\cdot 22{,}475 = 8\\,990\\) kr. I Norge: \\(400 \\cdot 22{,}50 = 9\\,000\\) kr. Danmark er 10 kr billigere.</p><p>\\(60^2 + 80^2 = 10\\,000 = 100^2\\). Diagonalen er 100 cm.</p>"
  },
  {
    id: "ramme",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "3-4-5 på rammen",
    utstyr: "Målebånd",
    hms: "Ikke start sveiseapparat eller dreiebenk. Hold avstand til varm sone. Målebåndet skal ikke henge i roterende deler.",
    tekst: "<p>En ramme i verkstedet skal kontrolleres. Katetene dere bruker er 90 cm og 120 cm. Det er 3-4-5 ganget med 30.</p>",
    steg: [{ verdi: 8100 }, { verdi: 14400 }],
    deler: [
      { tekst: "Hvor lang skal diagonalen være hvis vinkelen er rett?", svar: { verdi: 150, enhet: "cm" } },
      { tekst: "Dere måler 148 cm. Hvor mange cm er avviket fra 150 cm?", svar: { verdi: 2, enhet: "cm" } }
    ],
    hint: [
      "3-4-5 · 30 gir 90-120-150. Avvik er målt minus skal, uten fortegn her.",
      "\\(90^2 + 120^2 = 8\\,100 + 14\\,400 = 22\\,500\\), og \\(150^2 = 22\\,500\\)."
    ],
    losning: "<p>Diagonalen skal være 150 cm. \\(150 - 148 = 2\\) cm avvik. Hjørnet er nesten rett, men ikke eksakt.</p>"
  },
  {
    id: "rep-areal",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tittel: "Areal av luken",
    tekst: "<p>En rektangulær luke er 60 cm × 80 cm. Hva er arealet?</p>",
    svar: { verdi: 4800, enhet: "cm²" },
    hint: [
      "Areal av rektangel = lengde · bredde.",
      "\\(60 \\cdot 80 = 4\\,800\\)."
    ],
    losning: "<p>\\(60 \\cdot 80 = 4\\,800\\) cm².</p>"
  },
  {
    id: "rep-toleranse",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tittel: "Godkjent mål?",
    tekst: "<p>Et mål skal være 100 mm ± 2 mm. Du måler 103 mm.</p>",
    svar: {
      valg: ["Godkjent", "Ikke godkjent"],
      riktig: 1,
      forklaring: "Største godkjente mål er 102 mm."
    },
    hint: [
      "Regn største og minste mål. 103 skal ligge imellom hvis det er godkjent.",
      "\\(100 + 2 = 102\\). 103 er større."
    ],
    losning: "<p>Intervallet er 98 mm til 102 mm. 103 mm er ikke godkjent.</p>"
  },
  {
    id: "eksamen-stykpris",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Seks bokser",
    tekst: "<p>6 bokser koster 30 kr. Hva koster én boks?</p>",
    svar: { verdi: 5, enhet: "kr" },
    hint: [
      "Del prisen på antallet.",
      "\\(30 : 6 = 5\\)."
    ],
    losning: "<p>\\(30 : 6 = 5\\) kr per boks.</p>"
  }
]);
