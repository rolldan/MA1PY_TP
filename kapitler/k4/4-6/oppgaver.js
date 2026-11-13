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
  },
  {
    id: "velg-jobb",
    niva: "lett",
    tittel: "Enhet som passer jobben",
    tekst: "<p>Velg tallet og enheten en kollega venter å se.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Tykkelsen på en stålplate", svar: { valg: ["2 km", "2 m", "2 mm"], riktig: 2, forklaring: "Plate i verkstedet er noen millimeter tykk." } },
      { tekst: "Kjølevæske i en maskin", svar: { valg: ["8 m³", "8 L", "8 mm"], riktig: 1, forklaring: "Maskinkanner og maskiner oppgis i liter." } },
      { tekst: "Mating på dreiebenken", svar: { valg: ["120 km/h", "120 mm/min", "120 m³"], riktig: 1, forklaring: "Mating er en kort lengde per minutt." } },
      { tekst: "Toleranse på en aksel", svar: { valg: ["20 µm", "20 m", "20 kg"], riktig: 0, forklaring: "Fin toleranse oppgis i mikrometer eller hundredeler av en millimeter." } }
    ],
    hint: ["Tallet skal være til å se for seg i verkstedet. 2 km er en kjøretur, ikke en platetykkelse.", "Plate i mm, væske i liter, mating i mm/min, fin toleranse i µm."],
    losning: "<p>Plate 2 mm, kjølevæske 8 L, mating 120 mm/min, toleranse 20 µm.</p>"
  },
  {
    id: "rett-tall",
    niva: "lett",
    tittel: "Samme størrelse, rett enhet",
    tekst: "<p>Mottakeren har sagt hvilken enhet som skal stå på lappen.</p>",
    deler: [
      { tekst: "Oljekanna er 1,5 L. Hvor mange dm³ skriver du?", svar: { verdi: 1.5, enhet: "dm³" } },
      { tekst: "Tegningen sier 0,64 m. Laseren vil ha millimeter.", svar: { verdi: 640, enhet: "mm" } }
    ],
    hint: ["1 L = 1 dm³, så tallet er det samme. Meter til millimeter: gang med 1000.", "\\(0{,}64 \\cdot 1000 = 640\\) mm."],
    losning: "<p>a) 1,5 dm³ &nbsp; b) 640 mm</p>"
  },
  {
    id: "bestill-betong",
    niva: "middels",
    tittel: "Fundament i kubikkmeter",
    tekst: "<p>Du har regnet ut at et lite fundament trenger 0,96 m³ betong. Blandeverket spør hva de skal levere.</p>",
    steg: [{ verdi: 0.96, enhet: "m³" }],
    deler: [
      { tekst: "Hva sier du til blandeverket?", svar: { valg: ["960 000 cm³", "960 L", "0,96 m³"], riktig: 2, forklaring: "Betong bestilles i kubikkmeter. Liter og cm³ er bare sjekk." } },
      { tekst: "Hvor mange liter er 0,96 m³, hvis du vil sjekke?", svar: { verdi: 960, enhet: "L" } }
    ],
    hint: ["Betong bestilles i m³. 1 m³ = 1000 L.", "\\(0{,}96 \\cdot 1000 = 960\\) L."],
    losning: "<p>Si 0,96 m³. Sjekken er 960 L.</p>"
  },
  {
    id: "telefon-32",
    niva: "middels",
    tittel: "32 GB på arbeidstelefonen",
    tekst: "<p>Telefonen har 32 GB lagring. Noen skriver 32 Gb på lappen. I SI er 1 GB = 1000 MB.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange MB er 32 GB? Svar med tallet.", svar: { verdi: 32000 } },
      { tekst: "Hva er forskjellen på Gb og GB?", svar: { valg: ["Ingen, det er bare skrivemåte", "Gb er gigabit og GB er gigabyte. Vi bruker GB og faktor 1000"], riktig: 1, forklaring: "Liten b er bit. Stor B er byte. 32 GB = 32 000 MB." } }
    ],
    hint: ["G til M er ett steg. Gang med 1000, ikke 1024.", "\\(32 \\cdot 1000 = 32\\,000\\)."],
    losning: "<p>32 000 MB. Gb og GB er ikke samme enhet. I faget er 1 GB = 1000 MB.</p>"
  },
  {
    id: "faktura-tid",
    niva: "middels",
    tittel: "2,4 timer på timelista",
    tekst: "<p>En jobb tok 2,4 timer. Timelista skal ha minutter, og kollegaen vil også se timer og minutter.</p>",
    steg: [{ verdi: 0.4, enhet: "h" }, { verdi: 24, enhet: "min" }],
    deler: [
      { tekst: "Hvor mange minutter er desimalen 0,4?", svar: { verdi: 24, enhet: "min" } },
      { tekst: "Hvor mange minutter er 2,4 timer til sammen?", svar: { verdi: 144, enhet: "min" } },
      { tekst: "Hva skriver du ved siden av 2,4 h?", svar: { valg: ["2 t 40 min", "2 t 24 min", "2 t 4 min"], riktig: 1, forklaring: "0,4 · 60 = 24 minutter." } }
    ],
    hint: ["Gang desimalen med 60. Hele tiden i minutter er 2,4 · 60.", "\\(0{,}4 \\cdot 60 = 24\\) min. \\(2{,}4 \\cdot 60 = 144\\) min. Det er 2 t 24 min, ikke 2 t 40 min."],
    losning: "<p>0,4 h = 24 min.<br>2,4 h = 144 min = 2 t 24 min.</p>"
  },
  {
    id: "bestill-ror",
    niva: "vanskelig",
    tittel: "Rørbit til bestilling",
    tekst: "<p>Tegningen sier 1250 mm. Profilet veier 1,8 kg/m og koster 55 kr/kg.</p>",
    steg: [{ verdi: 1.25, enhet: "m" }, { verdi: 2.25, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange meter er 1250 mm?", svar: { verdi: 1.25, enhet: "m" } },
      { tekst: "Hvor mange kilogram veier biten?", svar: { verdi: 2.25, enhet: "kg" } },
      { tekst: "Hva koster biten?", svar: { verdi: 123.75, enhet: "kr", tol: 0.05 } }
    ],
    hint: ["kg/m vil ha meter. 1250 mm = 1,25 m. Deretter masse ganger pris.", "\\(1{,}8 \\cdot 1{,}25 = 2{,}25\\) kg. \\(2{,}25 \\cdot 55 = 123{,}75\\) kr."],
    losning: "<p>\\(1250\\ \\text{mm} = 1{,}25\\ \\text{m}\\).<br>\\(1{,}8 \\cdot 1{,}25 = 2{,}25\\) kg.<br>\\(2{,}25 \\cdot 55 = 123{,}75\\) kr.</p>"
  },
  {
    id: "eske-mangler",
    niva: "vanskelig",
    tittel: "Esken er for liten",
    tekst: "<p>Et lag foreslår en gaveeske på 40 cm × 15 cm × 4 cm og sier at den er 3 dm³. Kravet er nøyaktig 3 dm³.</p>",
    steg: [{ verdi: 2400, enhet: "cm³" }, { verdi: 3000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er forslaget?", svar: { verdi: 2400, enhet: "cm³" } },
      { tekst: "Hvor mange dm³ er det?", svar: { verdi: 2.4, enhet: "dm³" } },
      { tekst: "Hvor mange dm³ mangler det opp til 3 dm³?", svar: { verdi: 0.6, enhet: "dm³" } },
      { tekst: "Holder esken kravet?", svar: { valg: ["Ja, den er nøyaktig 3 dm³", "Nei, den er 2,4 dm³"], riktig: 1, forklaring: "40 · 15 · 4 = 2400 cm³ = 2,4 dm³." } }
    ],
    hint: ["Gang sidene i cm. 1 dm³ = 1000 cm³. Kravet 3 dm³ er 3000 cm³.", "\\(40 \\cdot 15 \\cdot 4 = 2400\\) cm³ = 2,4 dm³. \\(3 - 2{,}4 = 0{,}6\\) dm³ mangler."],
    losning: "<p>\\(40 \\cdot 15 \\cdot 4 = 2400\\) cm³ = 2,4 dm³.<br>Det mangler 0,6 dm³. Esken holder ikke kravet på 3 dm³.</p>"
  },
  {
    id: "tre-rapporter",
    niva: "vanskelig",
    tittel: "Tre lapper, tre enheter",
    tekst: "<p>Du skal sende tre tall. Laseren vil ha millimeter. Blandeverket vil ha kubikkmeter. Dekkverkstedet vil ha bar.</p>",
    steg: [{ verdi: 2.35, enhet: "m" }, { verdi: 860, enhet: "L" }, { verdi: 230, enhet: "kPa" }],
    deler: [
      { tekst: "Lista er 2,35 m. Hvor mange millimeter får laseren?", svar: { verdi: 2350, enhet: "mm" } },
      { tekst: "Du har regnet 860 L betong. Hvor mange m³ får blandeverket?", svar: { verdi: 0.86, enhet: "m³" } },
      { tekst: "Manometeret viser 230 kPa. Hvor mange bar får dekkverkstedet?", svar: { verdi: 2.3, enhet: "bar" } },
      { tekst: "En lapp sier «860 m³ betong». Hva er galt?", svar: { valg: ["Ingenting, 860 L er 860 m³", "Tallet er 1000 ganger for stort. 860 L er 0,86 m³"], riktig: 1, forklaring: "1 m³ = 1000 L. 860 L = 0,86 m³." } }
    ],
    hint: ["Meter til mm: · 1000. Liter til m³: del med 1000. kPa til bar: del med 100.", "\\(2{,}35 \\cdot 1000 = 2350\\) mm. \\(860 : 1000 = 0{,}86\\) m³. \\(230 : 100 = 2{,}3\\) bar."],
    losning: "<p>a) 2350 mm<br>b) 0,86 m³<br>c) 2,3 bar<br>d) 860 m³ er tusen ganger for mye. Riktig er 0,86 m³.</p>"
  }
]);
