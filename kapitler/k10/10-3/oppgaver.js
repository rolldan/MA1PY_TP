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
  },
  {
    id: "halvliter-olje",
    niva: "lett",
    tittel: "Målebeger",
    tekst: "<p>I samtalen peker sensor på et beger med 500 ml skjæreolje. Hvor mange liter er det?</p>",
    steg: [{ verdi: 1000 }],
    svar: { verdi: 0.5, enhet: "L" },
    hint: ["1000 ml er 1 liter. 500 ml er halvparten.", "\\(500 / 1000 = 0{,}5\\) L."],
    losning: "<p>\\(500 / 1000 = 0{,}5\\) L. Si «en halv liter» høyt, med enheten.</p>"
  },
  {
    id: "tre-kvart",
    niva: "lett",
    tittel: "Tre kvarter",
    tekst: "<p>Sensor ber deg gjøre om 0,75 timer til minutter. Hva svarer du?</p>",
    steg: [{ verdi: 0.75 }, { verdi: 60 }],
    svar: { verdi: 45, enhet: "min" },
    hint: ["0,75 timer er tre kvarter. En time er 60 minutter.", "\\(0{,}75 \\cdot 60 = 45\\) minutter."],
    losning: "<p>\\(0{,}75 \\cdot 60 = 45\\) minutter. 0,75 timer er ikke 75 minutter.</p>"
  },
  {
    id: "si-ohm",
    type: "verksted",
    niva: "lett",
    merke: "V",
    tittel: "Si strømmen",
    utstyr: "Et merkeskilt eller tallene 24 V og 8 Ω",
    hms: "Koble fra før du måler motstand. Mål motstand bare på en krets som er slått av.",
    tekst: "<p>Ved benken skal du si formelen for strøm, og så bruke den. Spenningen er 24 V og motstanden er 8 Ω.</p>",
    steg: [{ verdi: 24, enhet: "V" }, { verdi: 8, enhet: "Ω" }],
    deler: [
      {
        tekst: "Hvilken formel bruker du?",
        svar: {
          valg: ["I = U / R", "I = R / U", "I = U · R", "I = P / R"],
          riktig: 0,
          forklaring: "Strøm er spenning delt på motstand."
        }
      },
      { tekst: "Hvor stor er strømmen?", svar: { verdi: 3, enhet: "A" } }
    ],
    hint: ["Formelen deler spenning på motstand. Ikke bytt om.", "\\(24 / 8 = 3\\) A."],
    losning: "<p>a) \\(I = U / R\\)<br>b) \\(I = 24 / 8 = 3\\) A<br>Si både formelen og enheten når du svarer.</p>"
  },
  {
    id: "benk-kasse",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Liter i kassa",
    utstyr: "Målebånd og en kasse. Bruk målene under hvis du ikke har en kasse.",
    hms: "Kassen skal være tom og tørr før du måler innvendig.",
    tekst: "<p>Innvendig mål: 600 mm × 250 mm × 100 mm. Hvor mange liter rommer kassen? 1 dm³ = 1 L.</p>",
    steg: [{ verdi: 6, enhet: "dm" }, { verdi: 2.5, enhet: "dm" }, { verdi: 1, enhet: "dm" }],
    svar: { verdi: 15, enhet: "L" },
    hint: ["Gjør sidene om til dm før du ganger. 100 mm = 1 dm.", "\\(6 \\cdot 2{,}5 \\cdot 1\\)."],
    losning: "<p>\\(600\\) mm \\(= 6\\) dm, \\(250\\) mm \\(= 2{,}5\\) dm, \\(100\\) mm \\(= 1\\) dm.<br>\\(6 \\cdot 2{,}5 \\cdot 1 = 15\\) dm³ \\(= 15\\) L.</p>"
  },
  {
    id: "modell-boks",
    niva: "vanskelig",
    tittel: "Kanne i 1:2",
    tekst: "<p>En kanne rommer 1,6 liter. Du lager en modell i målestokk 1:2 og skal fylle modellen med sand.</p>",
    steg: [{ verdi: 8 }, { verdi: 0.2, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter sand trenger modellen?", svar: { verdi: 0.2, enhet: "L" } },
      { tekst: "Hvor mange milliliter er det?", svar: { verdi: 200, enhet: "ml" } }
    ],
    hint: ["Lengdeskala 1:2 gir volumskala \\(2^3 = 8\\). Del liter på 8, og gang med 1000 for å få ml.", "\\(1{,}6 / 8 = 0{,}2\\) L."],
    losning: "<p>a) \\(1{,}6 / 8 = 0{,}2\\) L<br>b) \\(0{,}2 \\cdot 1000 = 200\\) ml<br>Delte du bare på 2, fikk du 0,8 L. Det er målestokk-fellen: volumet blir 1/8, ikke halvparten.</p>"
  },
  {
    id: "moment-dobbel",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Kortere arm",
    utstyr: "Fastnøkkel. Du kan regne uten å trekke til.",
    hms: "Ikke forleng nøkkelen med et rør i denne oppgaven. Regn først.",
    tekst: "<p>En bolt skal ha 80 Nm. \\(F = M / a\\).</p>",
    steg: [{ verdi: 80, enhet: "Nm" }],
    deler: [
      { tekst: "Hvor stor kraft trengs på en arm på 0,40 m?", svar: { verdi: 200, enhet: "N" } },
      { tekst: "Hvor stor kraft trengs på en arm på 0,20 m?", svar: { verdi: 400, enhet: "N" } }
    ],
    hint: ["Kraft er moment delt på arm. Halv arm krever dobbel kraft for samme moment.", "a) \\(80 / 0{,}40\\). b) \\(80 / 0{,}20\\)."],
    losning: "<p>a) \\(F = 80 / 0{,}40 = 200\\) N<br>b) \\(F = 80 / 0{,}20 = 400\\) N<br>Når armen blir halvparten, må kraften dobles. Si det slik i samtalen.</p>"
  },
  {
    id: "pinne-utenfor",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Ligger målet inni?",
    utstyr: "Skyvelære og en pinne. Bruk målet 10,06 mm hvis du ikke har en pinne.",
    hms: "Mål på benken. Maskinen står av.",
    tekst: "<p>Kravet er \\(10{,}00 \\pm 0{,}05\\) mm. Du måler 10,06 mm.</p>",
    steg: [{ verdi: 0.05, enhet: "mm" }],
    deler: [
      { tekst: "Hva er minste mål?", svar: { verdi: 9.95, enhet: "mm" } },
      { tekst: "Hva er største mål?", svar: { verdi: 10.05, enhet: "mm" } },
      {
        tekst: "Er pinnen godkjent?",
        svar: {
          valg: ["Ja", "Nei"],
          riktig: 1,
          forklaring: "10,06 mm er større enn 10,05 mm."
        }
      }
    ],
    hint: ["Trekk avviket fra 10,00 og legg det til. Sammenlign 10,06 med største mål.", "\\(10{,}00 - 0{,}05\\) og \\(10{,}00 + 0{,}05\\)."],
    losning: "<p>a) \\(9{,}95\\) mm<br>b) \\(10{,}05\\) mm<br>c) Nei. 10,06 mm ligger 0,01 mm over største mål. Pinnen er vrak.</p>"
  },
  {
    id: "kreditt-en",
    type: "repetisjon",
    fra: "kapittel 7",
    niva: "middels",
    tekst: "<p>Et kredittkort står med 8000 kr. Renta er 1,5 % per måned. Du betaler ingenting den første måneden.</p>",
    steg: [{ verdi: 0.015 }],
    deler: [
      { tekst: "Hvor mange kroner er renta den måneden?", svar: { verdi: 120, enhet: "kr" } },
      { tekst: "Hvor mye skylder du etter den måneden?", svar: { verdi: 8120, enhet: "kr" } }
    ],
    hint: ["1,5 % av 8000. Legg renta oppå gjelden.", "\\(8000 \\cdot 0{,}015 = 120\\)."],
    losning: "<p>a) \\(8000 \\cdot 0{,}015 = 120\\) kr<br>b) \\(8000 + 120 = 8120\\) kr<br>I samtalen kan du si at neste måneds rente regnes av 8120 kr hvis du fortsatt ikke betaler.</p>"
  },
  {
    id: "vrak-poeng",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Vrakprosenten i en serie går fra 10 % til 12 %.</p>",
    steg: [{ verdi: 2 }],
    deler: [
      { tekst: "Hvor mange prosentpoeng økte vrakprosenten? Svar med tallet.", svar: { verdi: 2 } },
      { tekst: "Hvor mange prosent økte vrakprosenten?", svar: { verdi: 20, enhet: "%" } }
    ],
    hint: ["Prosentpoeng er differansen mellom prosenttallene. Prosentendring deler differansen på den gamle verdien.", "\\(12 - 10 = 2\\) prosentpoeng. \\(2 / 10 \\cdot 100\\) prosent."],
    losning: "<p>a) \\(12 - 10 = 2\\) prosentpoeng<br>b) \\(2 / 10 \\cdot 100 = 20\\,\\%\\)<br>Si hvilken av de to du mener. De er ikke det samme.</p>"
  },
  {
    id: "ramme-rett",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tekst: "<p>På benken ligger en ramme som er 30 cm på den ene siden og 40 cm på den andre. Hjørnet skal være rett. Hvor lang skal diagonalen være?</p>",
    steg: [{ verdi: 3 }, { verdi: 4 }, { verdi: 5 }],
    svar: { verdi: 50, enhet: "cm" },
    hint: ["3-4-5 kan ganges med 10.", "\\(5 \\cdot 10 = 50\\) cm."],
    losning: "<p>\\(30\\), \\(40\\) og \\(50\\) er \\(3 \\cdot 10\\), \\(4 \\cdot 10\\) og \\(5 \\cdot 10\\). Diagonalen skal være 50 cm. Er den lengre eller kortere, er hjørnet ikke rett.</p>"
  },
  {
    id: "maling-panser",
    type: "eksamen",
    eksamensdel: "Muntlig-praktisk",
    niva: "middels",
    tittel: "Panser og grunning",
    tekst: "<p>Du har målt et panser til 2 m × 1 m. Det skal ha to strøk grunning. Grunningen dekker 8 m² per liter.</p>",
    steg: [{ verdi: 2, enhet: "m²" }, { verdi: 8 }],
    deler: [
      { tekst: "Hvor stort er arealet?", svar: { verdi: 2, enhet: "m²" } },
      { tekst: "Hvor mange liter grunning trenger du?", svar: { verdi: 0.5, enhet: "L" } },
      {
        tekst: "Skriv det du ville sagt om hvorfor det blir to ganger arealet.",
        svar: {
          fritekst: true,
          fasit: "<p>To strøk betyr at hele arealet dekkes to ganger. Jeg regner 2 m² · 2 og deler på 8 m² per liter. Det blir 0,5 liter.</p>"
        }
      }
    ],
    hint: ["Areal er lengde ganger bredde. To strøk dobler arealet du skal dekke.", "\\(2 \\cdot 1 = 2\\) m². Liter: \\(2 \\cdot 2 / 8\\)."],
    losning: "<p>a) \\(2 \\cdot 1 = 2\\) m²<br>b) \\(2 \\cdot 2 / 8 = 0{,}5\\) L<br>c) Si at to strøk er det samme arealet malt to ganger, og at du deler på dekkevnen.</p>"
  },
  {
    id: "forklar-skala",
    type: "eksamen",
    eksamensdel: "Muntlig-praktisk",
    niva: "vanskelig",
    tittel: "Hvorfor ikke halvparten?",
    tekst: "<p>En tank rommer 8 liter. Modellen lages i målestokk 1:2.</p>",
    steg: [{ verdi: 8 }, { verdi: 2 }],
    deler: [
      { tekst: "Hvor mange liter rommer modellen?", svar: { verdi: 1, enhet: "L" } },
      {
        tekst: "Skriv det du ville sagt hvis sensor spør hvorfor svaret ikke er 4 liter.",
        svar: {
          fritekst: true,
          fasit: "<p>1:2 gjelder lengden. Volumet skaleres med 2 · 2 · 2 = 8. 8 liter delt på 8 er 1 liter. 4 liter hadde vært halv lengde, halv bredde og full høyde, og det er ikke en modell i 1:2.</p>"
        }
      }
    ],
    hint: ["Volumskalaen er lengdeskalaen i tredje potens. \\(2^3 = 8\\).", "\\(8 / 8 = 1\\) L."],
    losning: "<p>a) \\(8 / 2^3 = 8 / 8 = 1\\) L<br>b) 4 liter er det du får hvis du bare deler på 2. Si at alle tre retninger blir halvparten, så volumet blir en åttedel.</p>"
  },
  {
    id: "tur-drivstoff",
    type: "verksted",
    niva: "vanskelig",
    merke: "V/K",
    tittel: "Servicebilen",
    utstyr: "Tankmåler eller en kanne du kan lese liter på. Bruk tallene under hvis du ikke måler selv.",
    hms: "Ingen åpen flamme ved drivstoff. Les av, ikke fyll.",
    tekst: "<p>Turen er 90 km. Bilen bruker 0,5 liter per 10 km og holder 45 km/h. Tanken var full og rommer 20 liter.</p>",
    steg: [{ verdi: 9 }, { verdi: 0.5, enhet: "L" }, { verdi: 2, enhet: "h" }],
    deler: [
      { tekst: "Hvor mange liter går med?", svar: { verdi: 4.5, enhet: "L" } },
      { tekst: "Hvor mange minutter tar turen?", svar: { verdi: 120, enhet: "min" } },
      { tekst: "Hvor mange liter er igjen i tanken etter turen?", svar: { verdi: 15.5, enhet: "L" } }
    ],
    hint: ["Hvor mange ganger 10 km er det i 90 km? Tid er strekning delt på fart, og så om til minutter.", "Drivstoff: \\(9 \\cdot 0{,}5\\). Tid: \\(90 / 45\\) timer, ganger 60. Igjen: \\(20 - 4{,}5\\)."],
    losning: "<p>a) \\(90 / 10 = 9\\), og \\(9 \\cdot 0{,}5 = 4{,}5\\) L<br>b) \\(90 / 45 = 2\\) timer \\(= 120\\) minutter<br>c) \\(20 - 4{,}5 = 15{,}5\\) L<br>Det er godt igjen i tanken. 4,5 liter av 20 liter er under en fjerdedel.</p>"
  }
]);
