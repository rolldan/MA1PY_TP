Bok.oppgaver([
  {
    id: "hk-kw",
    niva: "lett",
    tittel: "175 hk",
    tekst: "<p>Motoren er på 175 hk. Bruk 1 hk = 0,7355 kW. Svar i kW med én desimal.</p>",
    svar: { verdi: 128.7, enhet: "kW", tol: 0.05 },
    hint: [
      "Gang hestekreftene med 0,7355.",
      "\\(175 \\cdot 0{,}7355 = 128{,}7125\\). Rund til 128,7."
    ],
    losning: "<p>\\(175 \\cdot 0{,}7355 = 128{,}7125 \\approx 128{,}7\\) kW.</p>"
  },
  {
    id: "desimaltimer",
    niva: "lett",
    tittel: "Tid i timer",
    tekst: "<p>Strekningen er 130 nautiske mil. Farten er 25 knop. Hvor mange timer tar overfarten? Svar med én desimal.</p>",
    svar: { verdi: 5.2, enhet: "h", tol: 0.05 },
    hint: [
      "Tid = strekning : fart. Knop og nautiske mil passer sammen.",
      "\\(130 : 25 = 5{,}2\\)."
    ],
    losning: "<p>\\(130 : 25 = 5{,}2\\) timer.</p>"
  },
  {
    id: "tid-minutter",
    niva: "middels",
    tittel: "Timer og minutter",
    tekst: "<p>Overfarten tar 5,2 timer. Avreise er kl. 22:00.</p>",
    deler: [
      { tekst: "Hvor mange minutter er 0,2 timer?", svar: { verdi: 12, enhet: "min" } },
      {
        tekst: "Når er dere fremme?",
        svar: {
          valg: ["03:12 neste dag", "03:20 neste dag", "02:12 samme kveld"],
          riktig: 0,
          forklaring: "5 timer etter 22:00 er 03:00. 12 minutter til er 03:12."
        }
      }
    ],
    hint: [
      "Gang desimaldelen med 60. Ikke les 0,2 som 20 minutter.",
      "\\(0{,}2 \\cdot 60 = 12\\). 22:00 + 5 timer + 12 minutter."
    ],
    losning: "<p>\\(0{,}2 \\cdot 60 = 12\\) minutter. 22:00 + 5 t 12 min = 03:12 neste dag.</p>"
  },
  {
    id: "km-og-fart",
    niva: "middels",
    tittel: "Kilometer og km/h",
    tekst: "<p>1 nautisk mil = 1,852 km. Strekningen er 130 nautiske mil. Farten er 25 knop.</p>",
    deler: [
      { tekst: "Hvor mange kilometer er 130 nautiske mil? To desimaler.", svar: { verdi: 240.76, enhet: "km", tol: 0.01 } },
      { tekst: "Hvor mange km/h er 25 knop? Én desimal.", svar: { verdi: 46.3, enhet: "km/h", tol: 0.05 } }
    ],
    hint: [
      "Gang med 1,852 både for strekning og for fart.",
      "\\(130 \\cdot 1{,}852 = 240{,}76\\). \\(25 \\cdot 1{,}852 = 46{,}3\\)."
    ],
    losning: "<p>\\(130 \\cdot 1{,}852 = 240{,}76\\) km. \\(25 \\cdot 1{,}852 = 46{,}3\\) km/h.</p>"
  },
  {
    id: "rekkevidde",
    niva: "vanskelig",
    tittel: "Reserve, strøm og moment",
    tekst: "<p>Tanken er 400 L. Forbruket er 2,8 L per nautisk mil på 130 nautiske mil. Bruk 128,7 kW når du regner energi. Strøm koster 1,50 kr per kWh. Dreiemoment ved 5 000 r/min: \\(M = P \\cdot 60 / (2 \\cdot \\pi \\cdot n)\\) med \\(P\\) i watt. 175 hk = 128 712,5 W. Rund momentet til nærmeste hele Nm.</p>",
    steg: [
      { verdi: 364, enhet: "L" },
      { verdi: 36, enhet: "L" },
      { verdi: 120, enhet: "L" },
      { verdi: 128.7, enhet: "kWh" }
    ],
    deler: [
      { tekst: "Hvor mange liter går med på 130 nautiske mil?", svar: { verdi: 364, enhet: "L" } },
      { tekst: "Hvor mange liter er igjen av 400 L?", svar: { verdi: 36, enhet: "L" } },
      { tekst: "Hvor mange liter er 30 % av tanken?", svar: { verdi: 120, enhet: "L" } },
      {
        tekst: "Holder reserven 30 %-regelen?",
        svar: {
          valg: ["Ja, 36 L er nok", "Nei, 36 L er under 120 L"],
          riktig: 1,
          forklaring: "36 L er langt under kravet på 120 L."
        }
      },
      { tekst: "Full effekt i én time. Hva koster 128,7 kWh når 1 kWh koster 1,50 kr? Nærmeste krone.", svar: { verdi: 193, enhet: "kr", tol: 0.6 } },
      { tekst: "Hvor mange Nm er momentet ved 5 000 r/min? Nærmeste hele tall.", svar: { verdi: 246, enhet: "Nm", tol: 1 } }
    ],
    hint: [
      "Liter = strekning · 2,8. Reserve = tank − forbruk. Energi i én time er lik effekten i kW.",
      "\\(130 \\cdot 2{,}8 = 364\\). \\(0{,}30 \\cdot 400 = 120\\). \\(128{,}7 \\cdot 1{,}5 = 193{,}05\\)."
    ],
    losning: "<p>\\(130 \\cdot 2{,}8 = 364\\) L. Igjen: \\(400 - 364 = 36\\) L. Krav: \\(0{,}30 \\cdot 400 = 120\\) L. 36 er under 120, så turen er risikabel.</p><p>Strøm: \\(128{,}7 \\cdot 1{,}50 = 193{,}05\\) kr, avrundet 193 kr.</p><p>\\(M = 128\\,712{,}5 \\cdot 60 / (2 \\cdot \\pi \\cdot 5\\,000) \\approx 245{,}8\\) Nm, avrundet 246 Nm.</p>"
  },
  {
    id: "maal-kanne",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Kanne ved arbeidsbenken",
    utstyr: "Tom bensinkanne, skyvelære eller målebånd",
    hms: "Ikke åpne en kanne med bensin. Ingen røyking og ingen gnister. Mål en tom og luftet kanne, eller les bare merket volum hvis læreren sier det.",
    tekst: "<p>En tom kanne er merket 20 L. Innvendig er den 40 cm × 20 cm × 25 cm. Reservekravet på overfarten er 36 L som ikke er dekket av tanken.</p>",
    steg: [{ verdi: 20000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange liter gir målene 40 cm × 20 cm × 25 cm?", svar: { verdi: 20, enhet: "L" } },
      { tekst: "Hvor mange hele kanner på 20 L trengs for å ha minst 36 L i reserve? Skriv bare tallet.", svar: { verdi: 2 } }
    ],
    hint: [
      "cm³ delt på 1 000 er liter. Én kanne er for lite til 36 L.",
      "\\(40 \\cdot 20 \\cdot 25 = 20\\,000\\) cm³ = 20 L. \\(36 : 20 = 1{,}8\\), så dere trenger 2."
    ],
    losning: "<p>\\(40 \\cdot 20 \\cdot 25 = 20\\,000\\) cm³ = 20 L. Merket stemmer. 36 L krever to kanner, for én kanne rommer bare 20 L.</p>"
  },
  {
    id: "rep-lanterne",
    type: "repetisjon",
    fra: "kapittel 5",
    niva: "lett",
    tittel: "Lanternelys",
    tekst: "<p>Et lanternelys på 12 V trekker 2 A. Effekten er \\(P = U \\cdot I\\). Hvor mange watt er det?</p>",
    svar: { verdi: 24, enhet: "W" },
    hint: [
      "Effekt = spenning · strøm.",
      "\\(12 \\cdot 2 = 24\\)."
    ],
    losning: "<p>\\(P = 12 \\cdot 2 = 24\\) W.</p>"
  },
  {
    id: "rep-bilfart",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tittel: "Fart på landeveien",
    tekst: "<p>En bil kjører 90 km på 1,5 timer. Hvor stor er farten i km/h?</p>",
    svar: { verdi: 60, enhet: "km/h" },
    hint: [
      "Fart = strekning : tid.",
      "\\(90 : 1{,}5 = 60\\)."
    ],
    losning: "<p>\\(90 : 1{,}5 = 60\\) km/h.</p>"
  },
  {
    id: "eksamen-minutter",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "0,4 timer",
    tekst: "<p>En kjøretur tar 2,4 timer. Hvor mange minutter er de 0,4 timene?</p>",
    svar: { verdi: 24, enhet: "min" },
    hint: [
      "Gang desimaldelen med 60.",
      "\\(0{,}4 \\cdot 60 = 24\\)."
    ],
    losning: "<p>\\(0{,}4 \\cdot 60 = 24\\) minutter. Hele turen er 2 timer og 24 minutter.</p>"
  }
]);
