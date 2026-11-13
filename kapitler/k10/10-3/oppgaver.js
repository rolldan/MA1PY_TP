Bok.oppgaver([
  {
    id: "maks-tid",
    niva: "lett",
    tittel: "Hvor lenge varer eksamen?",
    tekst: "<p>Muntlig-praktisk eksamen i matematikk. Hvor lenge kan selve eksamenen vare?</p>",
    stegForSteg: false,
    svar: {
      valg: ["inntil 30 minutter", "inntil 45 minutter", "4 timer"],
      riktig: 1,
      forklaring: "Muntlig-praktisk varer inntil 45 minutter. 4 timer er den skriftlige eksamenen."
    },
    hint: ["Skriftlig eksamen og muntlig-praktisk eksamen er ikke like lange.", "Den muntlige har en praktisk del og varer inntil tre kvarter."],
    losning: "<p>Inntil 45 minutter. Forberedelsen i forkant er 24 til 48 timer, og den tida er ikke en del av de 45 minuttene.</p>"
  },
  {
    id: "forberedelse-timer",
    niva: "lett",
    tittel: "Forberedelse",
    tekst: "<p>Hva er den korteste forberedelsen muntlig-praktisk eksamen kan ha, ifølge reglene?</p>",
    svar: { verdi: 24, enhet: "h" },
    hint: ["Skolen kan velge mellom en nedre og en øvre grense.", "Nedre grense er 24 timer. Øvre grense er 48 timer."],
    losning: "<p>Minst 24 timer, høyst 48 timer. Skolen bestemmer lengden. I denne boka øver vi på 24 timer.</p>"
  },
  {
    id: "halvtime",
    niva: "lett",
    tittel: "Si tida tydelig",
    tekst: "<p>I samtalen blir du bedt om å gjøre om 0,25 timer til minutter. Hva svarer du?</p>",
    svar: { verdi: 15, enhet: "min" },
    hint: ["0,25 timer er en kvart time.", "\\(0{,}25 \\cdot 60 = 15\\) minutter."],
    losning: "<p>\\(0{,}25 \\cdot 60 = 15\\) minutter. Ikke 25 minutter.</p>"
  },
  {
    id: "tank-liter",
    niva: "middels",
    tittel: "Oljetank",
    tekst: "<p>En tank er innvendig 500 mm × 300 mm × 200 mm. Hvor mange liter rommer den?</p>",
    steg: [{ verdi: 5, enhet: "dm" }, { verdi: 3, enhet: "dm" }, { verdi: 2, enhet: "dm" }],
    svar: { verdi: 30, enhet: "L" },
    hint: ["Gjør sidene om til dm. 1 dm³ = 1 L.", "\\(5 \\cdot 3 \\cdot 2\\)."],
    losning: "<p>\\(500\\) mm \\(= 5\\) dm, \\(300\\) mm \\(= 3\\) dm, \\(200\\) mm \\(= 2\\) dm.<br>\\(5 \\cdot 3 \\cdot 2 = 30\\) dm³ \\(= 30\\) L.</p>"
  },
  {
    id: "lan-kostnad",
    niva: "middels",
    tittel: "Hva koster lånet?",
    tekst: "<p>Du låner 10 000 kr. Du betaler 500 kr i måneden i 24 måneder, og ikke noe mer.</p>",
    deler: [
      { tekst: "Hvor mye betaler du til sammen?", svar: { verdi: 12000, enhet: "kr" } },
      { tekst: "Hvor mye tjener långiveren på lånet?", svar: { verdi: 2000, enhet: "kr" } }
    ],
    hint: ["Gang månedsbeløpet med antall måneder. Trekk fra det du lånte.", "\\(500 \\cdot 24\\). Deretter minus 10 000."],
    losning: "<p>a) \\(500 \\cdot 24 = 12\\,000\\) kr<br>b) \\(12\\,000 - 10\\,000 = 2000\\) kr. Du betaler tilbake mer enn du lånte. Det er prisen for å vente med å betale.</p>"
  },
  {
    id: "modell-ml",
    niva: "vanskelig",
    tittel: "Modell i 1:5",
    tekst: "<p>Tanken rommer 30 liter. Modellen lages i målestokk 1:5. Hvor mange milliliter sand trenger du for å fylle modellen?</p>",
    steg: [{ verdi: 125 }, { verdi: 0.24, enhet: "L" }],
    svar: { verdi: 240, enhet: "ml" },
    hint: ["Lengdeskala 1:5 gir volumskala \\(5^3 = 125\\).", "\\(30 / 125 = 0{,}24\\) L. Gang med 1000 for å få ml."],
    losning: "<p>\\(30 / 125 = 0{,}24\\) L \\(= 240\\) ml. Delte du bare på 5, fikk du 6 L. Det er altfor mye for en modell i 1:5.</p>"
  },
  {
    id: "aksel-godkjent",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Mål akselen",
    utstyr: "Skyvelære og en aksel. Bruk målet 16,08 mm hvis du ikke har en aksel.",
    hms: "Maskinen står av. Mål på benken, ikke mens spindelen kan starte.",
    tekst: "<p>Kravet er \\(16{,}00 \\pm 0{,}10\\) mm. Du måler 16,08 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er minste mål?", svar: { verdi: 15.9, enhet: "mm" } },
      { tekst: "Hva er største mål?", svar: { verdi: 16.1, enhet: "mm" } },
      {
        tekst: "Er akselen godkjent?",
        svar: {
          valg: ["Ja", "Nei"],
          riktig: 0,
          forklaring: "16,08 ligger mellom 15,90 og 16,10."
        }
      }
    ],
    hint: ["Trekk avviket fra basismålet og legg det til. Så ser du om 16,08 ligger imellom.", "\\(16{,}00 - 0{,}10\\) og \\(16{,}00 + 0{,}10\\)."],
    losning: "<p>a) \\(15{,}90\\) mm<br>b) \\(16{,}10\\) mm<br>c) Ja. 16,08 er mindre enn 16,10. Hadde målet vært 16,12, hadde akselen vært vrak.</p>"
  },
  {
    id: "kreditt-maaned",
    type: "repetisjon",
    fra: "kapittel 7",
    niva: "middels",
    tekst: "<p>Et kredittkort står med 5000 kr. Renta er 2 % per måned. Du betaler ingenting den første måneden.</p>",
    deler: [
      { tekst: "Hvor mange kroner er renta den måneden?", svar: { verdi: 100, enhet: "kr" } },
      { tekst: "Hvor mye skylder du etter den måneden?", svar: { verdi: 5100, enhet: "kr" } }
    ],
    hint: ["2 % av 5000. Legg renta oppå gjelden.", "\\(5000 \\cdot 0{,}02 = 100\\)."],
    losning: "<p>a) \\(5000 \\cdot 0{,}02 = 100\\) kr<br>b) \\(5000 + 100 = 5100\\) kr. Neste måned regnes renta av 5100 kr hvis du fortsatt ikke betaler.</p>"
  },
  {
    id: "prosentpoeng",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Vrakprosenten i en serie går fra 4 % til 6 %.</p>",
    deler: [
      { tekst: "Hvor mange prosentpoeng økte vrakprosenten? Svar med tallet.", svar: { verdi: 2 } },
      { tekst: "Hvor mange prosent økte vrakprosenten?", svar: { verdi: 50, enhet: "%" } }
    ],
    hint: ["Prosentpoeng er differansen mellom de to prosenttallene. Prosentendring deler differansen på den gamle verdien.", "\\(6 - 4 = 2\\) prosentpoeng. \\(2 / 4 \\cdot 100\\) prosent."],
    losning: "<p>a) \\(6 - 4 = 2\\) prosentpoeng<br>b) \\(2 / 4 \\cdot 100 = 50\\,\\%\\)<br>Begge svarene er rette, og de betyr ikke det samme. Si hvilken du mener når du snakker.</p>"
  },
  {
    id: "si-to-fem",
    type: "eksamen",
    eksamensdel: "Muntlig-praktisk",
    niva: "middels",
    tittel: "Si det høyt",
    tekst: "<p>Sensor spør: «Er 2,5 timer det samme som 2 timer og 50 minutter?»</p>",
    deler: [
      { tekst: "Hvor mange minutter er 2,5 timer?", svar: { verdi: 150, enhet: "min" } },
      {
        tekst: "Skriv det du ville sagt.",
        svar: {
          fritekst: true,
          fasit: "<p>Nei. 0,5 timer er en halv time, altså 30 minutter. 2,5 timer er 2 timer og 30 minutter, som er 150 minutter. 2 timer og 50 minutter ville vært 170 minutter.</p>"
        }
      }
    ],
    hint: ["Gang med 60. En halv time er ikke 50 minutter.", "\\(2{,}5 \\cdot 60\\)."],
    losning: "<p>\\(2{,}5 \\cdot 60 = 150\\) minutter, altså 2 timer og 30 minutter. Si både tallet og hvorfor 50 minutter er feil.</p>"
  },
  {
    id: "to-setninger",
    type: "eksamen",
    eksamensdel: "Muntlig-praktisk",
    niva: "vanskelig",
    tittel: "Ditt tema",
    tekst: "<p>Du trekker dreiebenken. Skriv to setninger du kan si i samtalen: hva du vil måle eller regne, og hvorfor svaret betyr noe i verkstedet.</p>",
    stegForSteg: false,
    svar: {
      fritekst: true,
      fasit: "<p>Eksempel: «Jeg måler diameteren med skyvelære og sammenligner med grensemålene. Er målet utenfor, er akselen vrak og kan ikke monteres.» Du kan like gjerne bruke turtall og skjærehastighet, så lenge du sier enhet og hva beslutningen blir.</p>"
    },
    hint: ["Velg ett mål: diameter, turtall eller grensemål. Ikke alle tre.", "Avslutt med en beslutning: godkjent, vrak, eller endre turtall."],
    losning: "<p>Et sterkt svar har en måling eller en formel, en enhet, og en konsekvens. Et svakt svar ramser opp alt du husker fra året.</p>"
  }
]);
