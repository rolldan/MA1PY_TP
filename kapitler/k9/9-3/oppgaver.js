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
  },
  {
    id: "en-knop",
    niva: "lett",
    tittel: "Én knop",
    tekst: "<p>1 nautisk mil = 1,852 km. 1 knop er 1 nautisk mil per time. Hvor mange km/h er 1 knop? Tre desimaler.</p>",
    svar: { verdi: 1.852, enhet: "km/h", tol: 0.001 },
    hint: [
      "Knop og nautiske mil per time er samme fart. Bytt bare mil med kilometer.",
      "\\(1 \\cdot 1{,}852 = 1{,}852\\)."
    ],
    losning: "<p>1 knop = 1,852 km/h. Derfor er 25 knop \\(25 \\cdot 1{,}852\\) km/h.</p>"
  },
  {
    id: "ti-mil",
    niva: "lett",
    tittel: "Ti nautiske mil",
    tekst: "<p>Forbruket er 2,8 L per nautisk mil. En kort forflytning er 10 nautiske mil.</p>",
    deler: [
      { tekst: "Hvor mange liter går med?", svar: { verdi: 28, enhet: "L" } },
      { tekst: "Hvor mange liter er 10 % av tanken på 400 L?", svar: { verdi: 40, enhet: "L" } }
    ],
    hint: [
      "Liter = strekning · 2,8. 10 % er 0,10 · tanken.",
      "\\(10 \\cdot 2{,}8 = 28\\). \\(0{,}10 \\cdot 400 = 40\\)."
    ],
    losning: "<p>\\(10 \\cdot 2{,}8 = 28\\) L. \\(0{,}10 \\cdot 400 = 40\\) L. Ti mil bruker mindre enn 10 % av tanken.</p>"
  },
  {
    id: "minutter-tur",
    niva: "lett",
    tittel: "Hele overfarten i minutter",
    tekst: "<p>Overfarten tar 5,2 timer. Hvor mange minutter er det?</p>",
    steg: [{ verdi: 300, enhet: "min" }, { verdi: 12, enhet: "min" }],
    svar: { verdi: 312, enhet: "min" },
    hint: [
      "5 timer er 5 · 60 minutter. 0,2 timer er 0,2 · 60 minutter. Legg sammen.",
      "\\(5 \\cdot 60 = 300\\) og \\(0{,}2 \\cdot 60 = 12\\)."
    ],
    losning: "<p>\\(5 \\cdot 60 + 12 = 312\\) minutter. Det er ikke 5 timer og 20 minutter.</p>"
  },
  {
    id: "skagen",
    niva: "middels",
    tittel: "Etappe mot Skagen",
    tekst: "<p>En mellomstopp ligger 40 nautiske mil unna. Farten er 25 knop. Forbruket er 2,8 L per nautisk mil. Tanken er full, 400 L, ved avreise kl. 22:00. 30 % av tanken er 120 L.</p>",
    steg: [{ verdi: 1.6, enhet: "h" }, { verdi: 36, enhet: "min" }, { verdi: 112, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange timer tar etappen? Én desimal.", svar: { verdi: 1.6, enhet: "h", tol: 0.05 } },
      { tekst: "Hvor mange minutter er 0,6 timer?", svar: { verdi: 36, enhet: "min" } },
      { tekst: "Hvor mange liter går med?", svar: { verdi: 112, enhet: "L" } },
      { tekst: "Hvor mange liter er igjen av 400 L?", svar: { verdi: 288, enhet: "L" } },
      {
        tekst: "Holder reserven 30 %-regelen på denne etappen?",
        svar: { valg: ["Ja, 288 L er over 120 L", "Nei, 288 L er under 120 L"], riktig: 0, forklaring: "288 L er mer enn kravet på 120 L." }
      }
    ],
    hint: [
      "Tid = strekning : fart. Liter = strekning · 2,8. Desimaldelen ganges med 60.",
      "\\(40 : 25 = 1{,}6\\). \\(0{,}6 \\cdot 60 = 36\\). \\(40 \\cdot 2{,}8 = 112\\)."
    ],
    losning: "<p>\\(40 : 25 = 1{,}6\\) timer = 1 time og 36 minutter. Framme 23:36.</p><p>\\(40 \\cdot 2{,}8 = 112\\) L. Igjen: \\(400 - 112 = 288\\) L. 288 er over 120, så den korte etappen holder reserven. Hele veien til Løkken gjør det ikke.</p>"
  },
  {
    id: "tjue-knop",
    niva: "middels",
    tittel: "20 knop i stedet",
    tekst: "<p>Dere senker farten til 20 knop på de samme 130 nautiske milene. Forbruket er fortsatt 2,8 L per nautisk mil. Avreise er kl. 22:00. 1 knop = 1,852 km/h.</p>",
    steg: [{ verdi: 6.5, enhet: "h" }, { verdi: 30, enhet: "min" }],
    deler: [
      { tekst: "Hvor mange timer tar overfarten? Én desimal.", svar: { verdi: 6.5, enhet: "h", tol: 0.05 } },
      { tekst: "Hvor mange minutter er 0,5 timer?", svar: { verdi: 30, enhet: "min" } },
      { tekst: "Hvor mange km/h er 20 knop? To desimaler.", svar: { verdi: 37.04, enhet: "km/h", tol: 0.01 } },
      { tekst: "Hvor mange liter går med når forbruket per mil er det samme?", svar: { verdi: 364, enhet: "L" } },
      {
        tekst: "Når er dere fremme?",
        svar: { valg: ["04:30 neste dag", "04:50 neste dag", "02:30 neste dag"], riktig: 0, forklaring: "22:00 + 6 timer er 04:00. 30 minutter til er 04:30." }
      }
    ],
    hint: [
      "Tid = 130 : 20. Fart i km/h = knop · 1,852. Liter avhenger av mil, ikke av klokka, når forbruket er gitt per mil.",
      "\\(130 : 20 = 6{,}5\\). \\(20 \\cdot 1{,}852 = 37{,}04\\). \\(130 \\cdot 2{,}8 = 364\\)."
    ],
    losning: "<p>\\(130 : 20 = 6{,}5\\) timer = 6 timer og 30 minutter. Framme 04:30.</p><p>\\(20 \\cdot 1{,}852 = 37{,}04\\) km/h. Drivstoff: \\(130 \\cdot 2{,}8 = 364\\) L, det samme som i 25 knop, fordi oppgaven holder liter per mil fast.</p>"
  },
  {
    id: "halvtime-strom",
    niva: "middels",
    tittel: "Full effekt i en halv time",
    tekst: "<p>Bruk 128,7 kW. Motoren går på full effekt i 0,5 timer. Strøm koster 1,50 kr per kWh. Dette er en sammenligning, ikke det båten bruker i marsjfart.</p>",
    steg: [{ verdi: 64.35, enhet: "kWh" }],
    deler: [
      { tekst: "Hvor mange kWh er levert? To desimaler.", svar: { verdi: 64.35, enhet: "kWh", tol: 0.01 } },
      { tekst: "Hva koster energien? Nærmeste krone.", svar: { verdi: 97, enhet: "kr", tol: 0.6 } }
    ],
    hint: [
      "kWh = kW · timer. Pris = kWh · 1,50.",
      "\\(128{,}7 \\cdot 0{,}5 = 64{,}35\\). \\(64{,}35 \\cdot 1{,}50 = 96{,}525\\)."
    ],
    losning: "<p>\\(128{,}7 \\cdot 0{,}5 = 64{,}35\\) kWh. \\(64{,}35 \\cdot 1{,}50 = 96{,}525\\) kr, avrundet 97 kr.</p>"
  },
  {
    id: "moment-4000",
    niva: "middels",
    tittel: "Moment ved 4 000 r/min",
    tekst: "<p>Effekten er 128 712,5 W, som er 175 hk · 735,5 W. Turtallet er 4 000 r/min. Bruk \\(M = P \\cdot 60 / (2 \\cdot \\pi \\cdot n)\\). Svar i nærmeste hele Nm.</p>",
    steg: [{ verdi: 25133, tol: 20 }],
    svar: { verdi: 307, enhet: "Nm", tol: 0.5 },
    hint: [
      "Sett P = 128 712,5 og n = 4 000 inn i formelen. Lavere turtall gir høyere moment når effekten er den samme.",
      "\\(128\\,712{,}5 \\cdot 60 = 7\\,722\\,750\\). Del på \\(2 \\cdot \\pi \\cdot 4\\,000\\)."
    ],
    losning: "<p>\\(M = 7\\,722\\,750 / (2 \\cdot \\pi \\cdot 4\\,000) \\approx 307{,}3\\) Nm, avrundet 307 Nm.</p><p>Ved 5 000 r/min var momentet om lag 246 Nm. Samme effekt og lavere turtall gir større moment.</p>"
  },
  {
    id: "retur-drivstoff",
    niva: "vanskelig",
    tittel: "Fylle i Danmark",
    tekst: "<p>Én vei er 130 nautiske mil og bruker 364 L. Tur-retur er 260 nautiske mil. Tanken er 400 L. Dere ankommer Løkken med 36 L. 30 % av tanken er 120 L. Forbruket er 2,8 L per nautisk mil også hjem.</p>",
    steg: [{ verdi: 728, enhet: "L" }, { verdi: 364, enhet: "L" }, { verdi: 120, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter bruker tur-retur?", svar: { verdi: 728, enhet: "L" } },
      { tekst: "Hvor mange liter må dere fylle i Løkken for å dra derfra med full tank?", svar: { verdi: 364, enhet: "L" } },
      { tekst: "Hvor mange liter er igjen i Sandvika hvis dere drar fra Løkken med 400 L?", svar: { verdi: 36, enhet: "L" } },
      {
        tekst: "Holder hjemturen 30 %-regelen?",
        svar: {
          valg: ["Ja, 36 L er over 120 L", "Nei, 36 L er under 120 L"],
          riktig: 1,
          forklaring: "36 L er det samme som på vei ned, og under kravet på 120 L."
        }
      }
    ],
    hint: [
      "Tur-retur = 260 · 2,8. Påfyll = full tank − det som er igjen. Hjemturen bruker like mange liter som utturen.",
      "\\(260 \\cdot 2{,}8 = 728\\). \\(400 - 36 = 364\\)."
    ],
    losning: "<p>\\(260 \\cdot 2{,}8 = 728\\) L tur-retur. Én tank på 400 L er ikke nok til begge veier.</p><p>Påfyll til full tank: \\(400 - 36 = 364\\) L. Hjemme igjen: \\(400 - 364 = 36\\) L. 36 er under 120, så hjemturen er like risikabel.</p>"
  },
  {
    id: "full-gass-tur",
    niva: "vanskelig",
    tittel: "Strøm mot bensin, én vei",
    tekst: "<p>Bruk 128,7 kW i 5,2 timer. Det er full effekt hele veien, en sammenligning og ikke marsjfarten. Strøm koster 1,50 kr per kWh. Bensin til den virkelige overfarten er 364 L à 22 kr.</p>",
    steg: [{ verdi: 669.24, enhet: "kWh" }, { verdi: 8008, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kWh er 128,7 kW i 5,2 timer? To desimaler.", svar: { verdi: 669.24, enhet: "kWh", tol: 0.01 } },
      { tekst: "Hva koster strømmen? Nærmeste krone.", svar: { verdi: 1004, enhet: "kr", tol: 0.6 } },
      { tekst: "Hva koster bensinen?", svar: { verdi: 8008, enhet: "kr" } },
      { tekst: "Hvor mange kroner dyrere er bensinen enn strømmen? Bruk 1 004 kr for strøm.", svar: { verdi: 7004, enhet: "kr" } }
    ],
    hint: [
      "kWh = kW · timer. Bensin = liter · 22. Ikke bland de to regnestykkene.",
      "\\(128{,}7 \\cdot 5{,}2 = 669{,}24\\). \\(364 \\cdot 22 = 8\\,008\\)."
    ],
    losning: "<p>\\(128{,}7 \\cdot 5{,}2 = 669{,}24\\) kWh. \\(669{,}24 \\cdot 1{,}50 = 1\\,003{,}86\\) kr, avrundet 1 004 kr.</p><p>Bensin: \\(364 \\cdot 22 = 8\\,008\\) kr. Forskjell: \\(8\\,008 - 1\\,004 = 7\\,004\\) kr. En bensinmotor gjør ikke om all energien i drivstoffet til nyttig arbeid, så tallene er en sammenligning, ikke en strømregning for turen.</p>"
  },
  {
    id: "kanne-reserve",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Kanner til reserven",
    utstyr: "Tom kanne, målebånd",
    hms: "Ikke åpne en kanne med bensin. Ingen røyking og ingen gnister. Mål en tom kanne, eller bruk målene under hvis kannen ikke er tom.",
    tekst: "<p>En tom kanne måler 50 cm × 20 cm × 25 cm innvendig. 30 %-regelen krever 120 L reserve på overfarten. Dere har ikke den reserven i den innebygde tanken.</p>",
    steg: [{ verdi: 25000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange liter gir målene?", svar: { verdi: 25, enhet: "L" } },
      { tekst: "Hvor mange hele kanner på 25 L trengs for minst 120 L? Skriv bare tallet.", svar: { verdi: 5 } }
    ],
    hint: [
      "cm³ delt på 1 000 er liter. Del 120 på liter per kanne, og rund opp.",
      "\\(50 \\cdot 20 \\cdot 25 = 25\\,000\\) cm³. \\(120 : 25 = 4{,}8\\)."
    ],
    losning: "<p>\\(50 \\cdot 20 \\cdot 25 = 25\\,000\\) cm³ = 25 L. \\(120 : 25 = 4{,}8\\), så dere trenger 5 kanner. Fire kanner er bare 100 L.</p>"
  },
  {
    id: "rep-moment",
    type: "repetisjon",
    fra: "kapittel 5",
    niva: "lett",
    tittel: "Bolt på motorfestet",
    tekst: "<p>Fra kapittel 5. Du drar med 200 N i enden av en 0,3 m lang arm. Momentet er \\(M = F \\cdot a\\). Hvor mange Nm er det?</p>",
    svar: { verdi: 60, enhet: "Nm" },
    hint: [
      "Moment = kraft · arm. Armen må være i meter.",
      "\\(200 \\cdot 0{,}3 = 60\\)."
    ],
    losning: "<p>\\(M = 200 \\cdot 0{,}3 = 60\\) Nm. På båtmotoren er momentet mye større, og det regnes fra effekt og turtall.</p>"
  },
  {
    id: "eksamen-tjue",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "20 % av tanken",
    tekst: "<p>En eldre reserve-regel sier 20 % av tanken. Tanken er 400 L. Hvor mange liter er 20 %?</p>",
    svar: { verdi: 80, enhet: "L" },
    hint: [
      "10 % av 400 er 40. 20 % er det dobbelte.",
      "\\(0{,}20 \\cdot 400 = 80\\)."
    ],
    losning: "<p>\\(0{,}20 \\cdot 400 = 80\\) L. Prosjektets regel er 30 %, altså 120 L, ikke 80 L.</p>"
  }
]);
