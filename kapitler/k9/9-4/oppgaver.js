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
  },
  {
    id: "to-kasser",
    niva: "lett",
    tittel: "To kasser i Danmark",
    tekst: "<p>Én kasse i Danmark er 24 bokser for 96 kr. Dere kjøper to kasser.</p>",
    steg: [{ verdi: 96, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange bokser er det?", svar: { verdi: 48, enhet: "stk" } },
      { tekst: "Hva koster de to kassene?", svar: { verdi: 192, enhet: "kr" } },
      { tekst: "Hva koster én boks?", svar: { verdi: 4, enhet: "kr" } }
    ],
    hint: [
      "Doble både antall og pris. Stykkpris = total : antall.",
      "\\(2 \\cdot 24 = 48\\). \\(2 \\cdot 96 = 192\\). \\(192 : 48 = 4\\)."
    ],
    losning: "<p>\\(2 \\cdot 24 = 48\\) bokser. \\(2 \\cdot 96 = 192\\) kr. \\(192 : 48 = 4\\) kr per boks, det samme som for én kasse.</p>"
  },
  {
    id: "brakett",
    niva: "lett",
    tittel: "Liten brakett 3-4-5",
    tekst: "<p>En brakett i baugen måler 3 cm, 4 cm og 5 cm. Den lengste siden er 5 cm.</p>",
    steg: [{ verdi: 9 }, { verdi: 16 }],
    deler: [
      { tekst: "Hva er \\(3^2 + 4^2\\)? Skriv bare tallet.", svar: { verdi: 25 } },
      {
        tekst: "Er braketten rettvinklet?",
        svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "9 + 16 = 25, og 5² = 25." }
      }
    ],
    hint: [
      "Regn kvadratene av de to korte sidene. Sammenlign med kvadratet av den lengste.",
      "\\(3^2 = 9\\) og \\(4^2 = 16\\). \\(9 + 16 = 25\\)."
    ],
    losning: "<p>\\(3^2 + 4^2 = 9 + 16 = 25 = 5^2\\). Braketten er rettvinklet. Esken 6-8-10 er samme forhold, ganget med 2.</p>"
  },
  {
    id: "diagram-akse",
    niva: "lett",
    tittel: "Hva skal søylene vise?",
    tekst: "<p>Danmark koster 4 kr per boks. Norge koster 6 kr per boks. Kassene har ikke like mange bokser.</p>",
    steg: [{ verdi: 2, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner høyere er den norske søylen enn den danske, når søylene viser pris per boks?", svar: { verdi: 2, enhet: "kr" } },
      {
        tekst: "Hva skal tallene på y-aksen bety?",
        svar: {
          valg: ["Kroner per kasse", "Kroner per boks", "Antall bokser"],
          riktig: 1,
          forklaring: "Kassene er ulike. Sammenligningen er pris per boks."
        }
      }
    ],
    hint: [
      "Trekk stykkprisene fra hverandre. Aksen må ha samme enhet som det dere sammenligner.",
      "\\(6 - 4 = 2\\)."
    ],
    losning: "<p>\\(6 - 4 = 2\\) kr. Y-aksen skal være kroner per boks. Kroner per kasse ville gjort en stor kasse kunstig dyr.</p>"
  },
  {
    id: "billigere",
    niva: "middels",
    tittel: "Hvor mange prosent billigere?",
    tekst: "<p>Danmark koster 4 kr per boks. Norge koster 6 kr per boks. Spørsmålet her er hvor mange prosent lavere prisen i Danmark er. Bruk prisen i Norge som grunnlag. Én desimal.</p>",
    steg: [{ verdi: 2, enhet: "kr" }],
    svar: { verdi: 33.3, enhet: "%", tol: 0.05 },
    hint: [
      "Forskjell delt på den norske prisen, gang med 100. Ikke del på 4 kr. Det er et annet spørsmål.",
      "\\((6 - 4) : 6 = 2 : 6\\)."
    ],
    losning: "<p>\\(2 : 6 = 0{,}333\\ldots = 33{,}3\\) %. Norge er 50 % dyrere enn Danmark, fordi \\(2 : 4 = 0{,}5\\). De to prosentene har ulikt grunnlag.</p>"
  },
  {
    id: "spara-sverige",
    niva: "middels",
    tittel: "Danmark mot Sverige",
    tekst: "<p>Sverige koster 5,50 kr per boks. Danmark koster 4 kr per boks. Du sammenligner 20 bokser, som én svensk kartong.</p>",
    steg: [{ verdi: 1.5, enhet: "kr" }, { verdi: 5.5, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner sparer dere per boks?", svar: { verdi: 1.5, enhet: "kr" } },
      { tekst: "Hvor mange kroner sparer dere på 20 bokser?", svar: { verdi: 30, enhet: "kr" } },
      { tekst: "Hvor mange prosent lavere er Danmark enn Sverige? Bruk Sveriges pris som grunnlag. Én desimal.", svar: { verdi: 27.3, enhet: "%", tol: 0.05 } }
    ],
    hint: [
      "Trekk stykkprisene. Prosenten er besparelsen delt på 5,50.",
      "\\(5{,}50 - 4 = 1{,}50\\). \\(1{,}50 : 5{,}50 \\approx 0{,}273\\)."
    ],
    losning: "<p>\\(5{,}50 - 4 = 1{,}50\\) kr per boks. På 20 bokser: \\(20 \\cdot 1{,}50 = 30\\) kr.</p><p>\\(1{,}50 : 5{,}50 \\approx 0{,}273 = 27{,}3\\) %.</p>"
  },
  {
    id: "luke-60",
    niva: "middels",
    tittel: "Luke 36 cm og 48 cm",
    tekst: "<p>En luke har katetene 36 cm og 48 cm. Hjørnet skal være rett. Det er 3-4-5 ganget med 12.</p>",
    steg: [{ verdi: 1296 }, { verdi: 2304 }],
    deler: [
      { tekst: "Hva er \\(36^2 + 48^2\\)? Skriv bare tallet.", svar: { verdi: 3600 } },
      { tekst: "Hvor lang skal diagonalen være?", svar: { verdi: 60, enhet: "cm" } }
    ],
    hint: [
      "Legg sammen kvadratene. Diagonalen er tallet som ganget med seg selv gir den summen. 60 · 60 = 3 600.",
      "\\(36^2 = 1\\,296\\) og \\(48^2 = 2\\,304\\)."
    ],
    losning: "<p>\\(36^2 + 48^2 = 1\\,296 + 2\\,304 = 3\\,600\\). \\(60^2 = 3\\,600\\). Diagonalen er 60 cm.</p>"
  },
  {
    id: "fem-hundre",
    niva: "vanskelig",
    tittel: "500 kr til brus",
    tekst: "<p>Laget har 500 kr. Dere kjøper hele kasser, ikke løse bokser. Danmark: 24 bokser for 96 kr. Sverige: 20 bokser for 110 kr. Norge: 12 bokser for 72 kr. Dere skal ha så mange bokser som mulig uten å gå over 500 kr.</p>",
    steg: [{ verdi: 480, enhet: "kr" }, { verdi: 440, enhet: "kr" }, { verdi: 432, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange bokser får dere i Danmark?", svar: { verdi: 120, enhet: "stk" } },
      { tekst: "Hvor mange kroner blir igjen i Danmark?", svar: { verdi: 20, enhet: "kr" } },
      { tekst: "Hvor mange bokser får dere i Sverige?", svar: { verdi: 80, enhet: "stk" } },
      { tekst: "Hvor mange bokser får dere i Norge?", svar: { verdi: 72, enhet: "stk" } },
      {
        tekst: "Hvilket land gir flest bokser?",
        svar: { valg: ["Danmark", "Sverige", "Norge"], riktig: 0, forklaring: "120 er mer enn 80 og 72." }
      },
      { tekst: "Hvor mange prosent flere bokser gir Danmark enn Norge? Bruk Norge som grunnlag. Én desimal.", svar: { verdi: 66.7, enhet: "%", tol: 0.05 } }
    ],
    hint: [
      "Finn største antall hele kasser som koster høyst 500 kr. Bokser = kasser · antall i kassa.",
      "Danmark: \\(5 \\cdot 96 = 480\\), så 5 · 24 bokser. Sverige: \\(4 \\cdot 110 = 440\\). Norge: \\(6 \\cdot 72 = 432\\)."
    ],
    losning: "<p>Danmark: 5 kasser, \\(5 \\cdot 96 = 480\\) kr, \\(5 \\cdot 24 = 120\\) bokser, 20 kr igjen. 6 kasser koster 576 kr og er for mye.</p><p>Sverige: 4 kartonger, \\(4 \\cdot 110 = 440\\) kr, \\(4 \\cdot 20 = 80\\) bokser. Norge: 6 kasser, \\(6 \\cdot 72 = 432\\) kr, \\(6 \\cdot 12 = 72\\) bokser.</p><p>Danmark gir flest. \\((120 - 72) : 72 = 48 : 72 \\approx 0{,}667 = 66{,}7\\) %.</p>"
  },
  {
    id: "skjev",
    niva: "vanskelig",
    tittel: "10,5 cm er ikke 10 cm",
    tekst: "<p>Esken skulle vært 6 cm, 8 cm og 10 cm. Dere måler 6 cm, 8 cm og 10,5 cm. Den lengste siden er 10,5 cm.</p>",
    steg: [{ verdi: 100 }, { verdi: 110.25 }],
    deler: [
      { tekst: "Hva er \\(6^2 + 8^2\\)? Skriv bare tallet.", svar: { verdi: 100 } },
      { tekst: "Hva er \\(10{,}5^2\\)? To desimaler.", svar: { verdi: 110.25, tol: 0.01 } },
      {
        tekst: "Er esken rettvinklet?",
        svar: { valg: ["Ja", "Nei"], riktig: 1, forklaring: "100 er ikke lik 110,25." }
      },
      { tekst: "Hvor mange cm for lang er siden som skulle vært 10 cm?", svar: { verdi: 0.5, enhet: "cm" } }
    ],
    hint: [
      "Sammenlign summen av de to små kvadratene med kvadratet av den lengste siden.",
      "\\(36 + 64 = 100\\). \\(10{,}5 \\cdot 10{,}5 = 110{,}25\\)."
    ],
    losning: "<p>\\(6^2 + 8^2 = 100\\). \\(10{,}5^2 = 110{,}25\\). 100 er ikke 110,25, så vinkelen er ikke rett.</p><p>\\(10{,}5 - 10 = 0{,}5\\) cm for lang. På en stor ramme blir en slik feil synlig når dere måler diagonalen.</p>"
  },
  {
    id: "mal-ramme",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "15-20-25 på benken",
    utstyr: "Målebånd",
    hms: "Ikke start sveiseapparat. Hold avstand til varm sone. Målebåndet skal ikke henge i roterende deler.",
    tekst: "<p>Dere kontrollerer et hjørne med 15 cm og 20 cm langs sidene. Det er 3-4-5 ganget med 5. Målebåndet viser 24 cm på diagonalen.</p>",
    steg: [{ verdi: 225 }, { verdi: 400 }],
    deler: [
      { tekst: "Hva er \\(15^2 + 20^2\\)? Skriv bare tallet.", svar: { verdi: 625 } },
      { tekst: "Hvor lang skal diagonalen være hvis hjørnet er rett?", svar: { verdi: 25, enhet: "cm" } },
      { tekst: "Hvor mange cm er avviket når dere måler 24 cm?", svar: { verdi: 1, enhet: "cm" } }
    ],
    hint: [
      "3-4-5 · 5 gir 15-20-25. Avvik er skal minus målt, uten fortegn.",
      "\\(225 + 400 = 625\\), og \\(25^2 = 625\\)."
    ],
    losning: "<p>\\(15^2 + 20^2 = 225 + 400 = 625 = 25^2\\). Diagonalen skal være 25 cm. \\(25 - 24 = 1\\) cm avvik. Hjørnet er nesten rett.</p>"
  },
  {
    id: "rep-mva-kasse",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tittel: "Kioskassen med mva",
    tekst: "<p>Fra kapittel 3. En kasse brus i verkstedets kiosk koster 80 kr uten mva. Mva er 25 %. Hva koster kassen med mva?</p>",
    svar: { verdi: 100, enhet: "kr" },
    hint: [
      "25 % mva betyr at dere betaler 125 % av prisen uten mva.",
      "\\(80 \\cdot 1{,}25 = 100\\)."
    ],
    losning: "<p>\\(80 \\cdot 1{,}25 = 100\\) kr. Mva er 20 kr.</p>"
  },
  {
    id: "eksamen-hyp",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "9 cm og 12 cm",
    tekst: "<p>En rettvinklet luke har katetene 9 cm og 12 cm. Hvor lang er diagonalen?</p>",
    steg: [{ verdi: 81 }, { verdi: 144 }],
    svar: { verdi: 15, enhet: "cm" },
    hint: [
      "\\(a^2 + b^2 = c^2\\). 9-12-15 er 3-4-5 ganget med 3.",
      "\\(9^2 + 12^2 = 81 + 144 = 225\\). \\(15^2 = 225\\)."
    ],
    losning: "<p>\\(81 + 144 = 225 = 15^2\\). Diagonalen er 15 cm.</p>"
  }
]);
