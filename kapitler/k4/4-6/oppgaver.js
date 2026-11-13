Bok.oppgaver([
  {
    id: "velg-enhet",
    niva: "lett",
    tittel: "Hva passer?",
    tekst: "<p>Velg enheten en kollega venter å se på arbeidsordren.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Lengden på en hammer", svar: { valg: ["32 km", "32 m", "32 cm"], riktig: 2, forklaring: "En hammer er noen titalls centimeter." } },
      { tekst: "En kanne motorolje", svar: { valg: ["5 m³", "5 L", "5 mm"], riktig: 1, forklaring: "Kanner oppgis i liter." } },
      { tekst: "Trykket i et personbildekk", svar: { valg: ["2,3 Pa", "2,3 bar", "2,3 kg"], riktig: 1, forklaring: "Dekktrykk oppgis i bar eller kPa." } },
      { tekst: "Massen til en bolt", svar: { valg: ["18 kg", "18 g", "18 km"], riktig: 1, forklaring: "En bolt veier gram, ikke kilogram." } }
    ],
    hint: ["Tallet bør være til å se for seg. 32 km er en kjøretur, ikke et verktøy.", "Olje i liter, dekk i bar, bolt i gram, hammer i centimeter."],
    losning: "<p>Hammer 32 cm, olje 5 L, dekk 2,3 bar, bolt 18 g.</p>"
  },
  {
    id: "laser-mm",
    niva: "lett",
    tekst: "<p>Tegningen sier 1,85 m. Laseren vil ha millimeter.</p>",
    svar: { verdi: 1850, enhet: "mm" },
    hint: ["Meter til millimeter: gang med 1000.", "\\(1{,}85 \\cdot 1000 = 1850\\) mm."],
    losning: "<p>\\(1{,}85 \\cdot 1000 = 1850\\) mm.</p>"
  },
  {
    id: "betong-enhet",
    niva: "middels",
    tekst: "<p>Du har regnet ut at plattingen trenger 1,4375 m³ betong. Kunden spør hva de skal bestille.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva sier du?", svar: { valg: ["1 437 500 cm³", "1437,5 L", "omtrent 1,44 m³"], riktig: 2, forklaring: "Betong bestilles i kubikkmeter. 1,44 m³ er lett å lese og nær 1,4375." } },
      { tekst: "Hvor mange liter er 1,4375 m³, hvis du vil sjekke?", svar: { verdi: 1437.5, enhet: "L" } }
    ],
    hint: ["Kunden som bestiller betong bruker m³. Liter er bare sjekken.", "1 m³ = 1000 L, så \\(1{,}4375 \\cdot 1000 = 1437{,}5\\) L."],
    losning: "<p>Si omtrent 1,44 m³. Sjekken er 1437,5 L.</p>"
  },
  {
    id: "gb-igjen",
    niva: "middels",
    tekst: "<p>En telefon har 64 GB lagring. Noen skriver 64 Gb på lappen.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange MB er 64 GB i SI? Svar med tallet.", svar: { verdi: 64000 } },
      { tekst: "Hva er forskjellen på Gb og GB?", svar: { valg: ["Ingen, det er bare skrivemåte", "Gb er gigabit og GB er gigabyte. Vi bruker GB og faktor 1000"], riktig: 1, forklaring: "Liten b er bit. Stor B er byte. SI: 1 GB = 1000 MB." } }
    ],
    hint: ["G til M er ett steg: gang med 1000. Ikke 1024.", "\\(64 \\cdot 1000 = 64\\,000\\)."],
    losning: "<p>64 000 MB. Gb og GB er ikke samme enhet. I faget er 1 GB = 1000 MB.</p>"
  },
  {
    id: "maskin-kpa",
    niva: "middels",
    tekst: "<p>Manometeret viser 6,5 bar. Styreskapet vil ha trykket i kPa.</p>",
    svar: { verdi: 650, enhet: "kPa" },
    hint: ["1 bar = 100 kPa.", "\\(6{,}5 \\cdot 100 = 650\\) kPa."],
    losning: "<p>\\(6{,}5 \\cdot 100 = 650\\) kPa.</p>"
  },
  {
    id: "bestill-stal",
    niva: "vanskelig",
    tittel: "Hva koster biten?",
    tekst: "<p>Tegningen sier 850 mm. Profilet veier 2,5 kg/m og koster 40 kr/kg.</p>",
    steg: [{ verdi: 0.85, enhet: "m" }, { verdi: 2.125, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange meter er 850 mm?", svar: { verdi: 0.85, enhet: "m" } },
      { tekst: "Hvor mange kilogram veier biten?", svar: { verdi: 2.125, enhet: "kg" } },
      { tekst: "Hva koster biten?", svar: { verdi: 85, enhet: "kr" } }
    ],
    hint: ["kg/m vil ha meter. 850 mm = 0,85 m. Deretter masse ganger pris.", "\\(2{,}5 \\cdot 0{,}85 = 2{,}125\\) kg. \\(2{,}125 \\cdot 40 = 85\\) kr."],
    losning: "<p>\\(850\\ \\text{mm} = 0{,}85\\ \\text{m}\\).<br>\\(2{,}5 \\cdot 0{,}85 = 2{,}125\\) kg.<br>\\(2{,}125 \\cdot 40 = 85\\) kr.</p>"
  },
  {
    id: "eske-sjekk",
    niva: "vanskelig",
    tekst: "<p>Et annet lag foreslår en gaveeske på 25 cm × 20 cm × 6 cm og sier at den er «omtrent 3 dm³».</p>",
    steg: [{ verdi: 3000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er forslaget?", svar: { verdi: 3000, enhet: "cm³" } },
      { tekst: "Hvor mange dm³ er det?", svar: { verdi: 3, enhet: "dm³" } },
      { tekst: "Stemmer «omtrent», eller er den nøyaktig?", svar: { valg: ["Nøyaktig 3 dm³", "Bare omtrent, det mangler en liter"], riktig: 0, forklaring: "25 · 20 · 6 = 3000 cm³ = 3 dm³." } }
    ],
    hint: ["Gang sidene i cm. 1 dm³ = 1000 cm³.", "\\(25 \\cdot 20 \\cdot 6 = 3000\\) cm³ = 3 dm³."],
    losning: "<p>\\(25 \\cdot 20 \\cdot 6 = 3000\\) cm³ \\(= 3\\) dm³. Den er nøyaktig, ikke bare omtrent. I mm: 250 × 200 × 60.</p>"
  },
  {
    id: "stasjon-tentamen",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Stasjon trykk og strøm",
    utstyr: "Stasjonsark, kalkulator på del 2-stasjonen, manometer hvis det er ledig",
    hms: "Stasjonene er regning og lesing. Ingen maskiner startes. Luft og flasker bare hvis læreren har åpnet den stasjonen.",
    tekst: "<p>På stasjon 5 er dekket 2,2 bar og kompressoren 1,5 kW i 2 timer. Regn kPa og kWh. De andre stasjonene står på verkstedkortet.</p>",
    deler: [
      { tekst: "2,2 bar i kPa", svar: { verdi: 220, enhet: "kPa" } },
      { tekst: "Energi når 1,5 kW går i 2 timer", svar: { verdi: 3, enhet: "kWh" } }
    ],
    hint: ["1 bar = 100 kPa. kWh = kW · timer.", "\\(2{,}2 \\cdot 100 = 220\\). \\(1{,}5 \\cdot 2 = 3\\) kWh."],
    losning: "<p>220 kPa og 3 kWh.</p>"
  },
  {
    id: "rep-gange",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En pakke har 100 skruer. Det står 8 pakker på hylla. Hvor mange skruer er det?</p>",
    svar: { verdi: 800, enhet: "stk" },
    hint: ["Gang med 100.", "\\(8 \\cdot 100 = 800\\)."],
    losning: "<p>\\(8 \\cdot 100 = 800\\) skruer.</p>"
  },
  {
    id: "rep-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Et måleverktøy koster 480 kr. Black week gir 10 % avslag. Hva betaler du?</p>",
    steg: [{ verdi: 48, enhet: "kr" }],
    svar: { verdi: 432, enhet: "kr" },
    hint: ["10 % er en tidel. Trekk den fra prisen.", "\\(480 : 10 = 48\\). \\(480 - 48 = 432\\) kr."],
    losning: "<p>\\(480 - 48 = 432\\) kr.</p>"
  },
  {
    id: "eksamen-blandet",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Blandet før juletentamen",
    tekst: "<p>Gjør om uten kalkulator. Skriv enhet.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(3{,}6\\ \\text{kW}\\) i watt", svar: { verdi: 3600, enhet: "W" } },
      { tekst: "\\(1{,}5\\) timer i minutter", svar: { verdi: 90, enhet: "min" } },
      { tekst: "\\(2\\ \\text{bar}\\) i kPa", svar: { verdi: 200, enhet: "kPa" } },
      { tekst: "\\(250\\ \\text{cm}^3\\) i liter", svar: { verdi: 0.25, enhet: "L" } }
    ],
    hint: ["kW til W er · 1000. Timer til minutter er · 60. bar til kPa er · 100. 1000 cm³ = 1 L.", "\\(3{,}6 \\cdot 1000 = 3600\\). \\(1{,}5 \\cdot 60 = 90\\). \\(2 \\cdot 100 = 200\\). \\(250 : 1000 = 0{,}25\\)."],
    losning: "<p>a) 3600 W &nbsp; b) 90 min &nbsp; c) 200 kPa &nbsp; d) 0,25 L</p>"
  }
]);
