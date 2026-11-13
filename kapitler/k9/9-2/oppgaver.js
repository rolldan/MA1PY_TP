Bok.oppgaver([
  {
    id: "dm-liter",
    niva: "lett",
    tittel: "Tanken i to enheter",
    tekst: "<p>En tank er 100 cm lang, 80 cm bred og 50 cm høy. Det er det samme som 10 dm × 8 dm × 5 dm.</p>",
    steg: [{ verdi: 400000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange liter er 10 dm × 8 dm × 5 dm?", svar: { verdi: 400, enhet: "L" } },
      { tekst: "Hvor mange cm³ er 100 cm × 80 cm × 50 cm?", svar: { verdi: 400000, enhet: "cm³" } }
    ],
    hint: [
      "1 dm³ = 1 L. I centimeter ganger du de tre målene. 1 L = 1 000 cm³.",
      "\\(10 \\cdot 8 \\cdot 5 = 400\\). \\(100 \\cdot 80 = 8\\,000\\), og det ganger du med 50."
    ],
    losning: "<p>\\(10 \\cdot 8 \\cdot 5 = 400\\) dm³ = 400 L.</p><p>\\(100 \\cdot 80 \\cdot 50 = 400\\,000\\) cm³. Det er også 400 L, fordi \\(400\\,000 : 1\\,000 = 400\\).</p>"
  },
  {
    id: "toleranse",
    niva: "lett",
    tittel: "1 000 mm ± 2 mm",
    tekst: "<p>På tegningen står lengden 1 000 mm ± 2 mm.</p>",
    deler: [
      { tekst: "Hva er største godkjente mål?", svar: { verdi: 1002, enhet: "mm" } },
      { tekst: "Hva er minste godkjente mål?", svar: { verdi: 998, enhet: "mm" } },
      {
        tekst: "Du måler 1 003 mm. Er lengden godkjent?",
        svar: { valg: ["Ja", "Nei"], riktig: 1, forklaring: "1 003 mm er større enn 1 002 mm." }
      }
    ],
    hint: [
      "Legg til og trekk fra toleransen.",
      "\\(1\\,000 + 2 = 1\\,002\\) og \\(1\\,000 - 2 = 998\\)."
    ],
    losning: "<p>Intervallet er 998 mm til 1 002 mm. 1 003 mm er utenfor.</p>"
  },
  {
    id: "hoyde",
    niva: "middels",
    tittel: "Hvor høy må tanken være?",
    tekst: "<p>Tanken skal romme 400 L. Lengden er 100 cm og bredden er 80 cm. Regn i desimeter.</p>",
    steg: [{ verdi: 10, enhet: "dm" }, { verdi: 8, enhet: "dm" }, { verdi: 5, enhet: "dm" }],
    deler: [
      { tekst: "Hvor høy er tanken i dm?", svar: { verdi: 5, enhet: "dm" } },
      { tekst: "Hvor høy er tanken i cm?", svar: { verdi: 50, enhet: "cm" } }
    ],
    hint: [
      "400 L = 400 dm³. Grunnflaten er lengde · bredde i dm. Høyde = volum : grunnflate.",
      "10 dm · 8 dm = 80 dm². \\(400 : 80 = 5\\) dm."
    ],
    losning: "<p>\\(100\\ \\text{cm} = 10\\ \\text{dm}\\) og \\(80\\ \\text{cm} = 8\\ \\text{dm}\\). \\(400 : (10 \\cdot 8) = 5\\) dm = 50 cm.</p>"
  },
  {
    id: "modell-mal",
    niva: "middels",
    tittel: "Mål på modellen",
    tekst: "<p>Originalen er 100 cm × 80 cm × 50 cm. Modellen lages i målestokk 1:10.</p>",
    deler: [
      { tekst: "Hvor lang er modellen?", svar: { verdi: 10, enhet: "cm" } },
      { tekst: "Hvor bred er modellen?", svar: { verdi: 8, enhet: "cm" } },
      { tekst: "Hvor høy er modellen?", svar: { verdi: 5, enhet: "cm" } }
    ],
    hint: [
      "Del hvert lengdemål på 10. Ikke del volumet ennå.",
      "\\(100 : 10 = 10\\), \\(80 : 10 = 8\\), \\(50 : 10 = 5\\)."
    ],
    losning: "<p>Modellen er 10 cm × 8 cm × 5 cm.</p>"
  },
  {
    id: "skala-og-bunn",
    niva: "vanskelig",
    tittel: "Volum, skala og bunnplate",
    tekst: "<p>Modellen er 10 cm × 8 cm × 5 cm, altså 1:10 av en tank på 400 L. Bunnplata i originalen er 100 cm × 80 cm og 2 mm tykk. Aluminium veier 2,7 g/cm³. 2 mm = 0,2 cm.</p>",
    steg: [{ verdi: 400, enhet: "cm³" }, { verdi: 0.4, enhet: "L" }, { verdi: 1600, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange desiliter rommer modellen?", svar: { verdi: 4, enhet: "dl" } },
      { tekst: "Hvor mange ganger mindre er volumet i 1:10? Skriv bare tallet.", svar: { verdi: 1000 } },
      { tekst: "Hvor mange gram veier bunnplata?", svar: { verdi: 4320, enhet: "g" } },
      {
        tekst: "Hvilket materiale vil dere bygge drivstofftanken i, og hva er én ulempe ved valget?",
        svar: { fritekst: true, fasit: "<p>Et godt svar velger aluminium, rustfritt stål eller plast og nevner minst én ulempe: vekt, korrosjon, galvanisk korrosjon eller at plast er vanskelig å sveise i verkstedet.</p>" }
      }
    ],
    hint: [
      "Volum skaleres med 10³ = 1 000. 1 L = 10 dl. Masse = volum · tetthet.",
      "\\(400 : 1\\,000 = 0{,}4\\) L. Plata: \\(100 \\cdot 80 \\cdot 0{,}2 = 1\\,600\\) cm³."
    ],
    losning: "<p>\\(10 \\cdot 8 \\cdot 5 = 400\\) cm³ = 0,4 L = 4 dl. Faktoren er \\(10^3 = 1\\,000\\).</p><p>Masse: \\(1\\,600 \\cdot 2{,}7 = 4\\,320\\) g.</p>"
  },
  {
    id: "kanne",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Stemmer merket på kannen?",
    utstyr: "Tom kanne, skyvelære eller målebånd",
    hms: "Ikke mål en kanne med bensinrester. Ingen gnister og ingen åpen flamme. Skyll med vann hvis kannen har lukt.",
    tekst: "<p>En tom kanne er merket 10 L. Innvendig måler dere 25 cm × 16 cm × 25 cm. Hvor mange liter gir målene? Sammenlign med merket etterpå.</p>",
    steg: [{ verdi: 10000, enhet: "cm³" }],
    svar: { verdi: 10, enhet: "L" },
    hint: [
      "Gang de tre målene til cm³. Del på 1 000 for å få liter.",
      "\\(25 \\cdot 16 = 400\\). \\(400 \\cdot 25 = 10\\,000\\) cm³."
    ],
    losning: "<p>\\(25 \\cdot 16 \\cdot 25 = 10\\,000\\) cm³ = 10 L. Merket stemmer med en rett kanne.</p>"
  },
  {
    id: "rep-kasse",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tittel: "Verktøykasse",
    tekst: "<p>En verktøykasse er 20 cm × 10 cm × 5 cm. Hvor mange cm³ er det?</p>",
    svar: { verdi: 1000, enhet: "cm³" },
    hint: [
      "Volum = lengde · bredde · høyde.",
      "\\(20 \\cdot 10 \\cdot 5 = 1\\,000\\)."
    ],
    losning: "<p>\\(20 \\cdot 10 \\cdot 5 = 1\\,000\\) cm³ = 1 L.</p>"
  },
  {
    id: "rep-dm3",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tittel: "Fra cm³ til dm³",
    tekst: "<p>Et rommål er 4 000 cm³. Hvor mange dm³ er det?</p>",
    svar: { verdi: 4, enhet: "dm³" },
    hint: [
      "1 dm³ = 1 000 cm³. Del på 1 000.",
      "\\(4\\,000 : 1\\,000 = 4\\)."
    ],
    losning: "<p>\\(4\\,000 : 1\\,000 = 4\\) dm³.</p>"
  },
  {
    id: "eksamen-skala",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Lengde i 1:10",
    tekst: "<p>En modell lages i målestokk 1:10. Originalen er 80 cm lang. Hvor lang er modellen?</p>",
    svar: { verdi: 8, enhet: "cm" },
    hint: [
      "I 1:10 deler du lengden på 10.",
      "\\(80 : 10 = 8\\)."
    ],
    losning: "<p>\\(80 : 10 = 8\\) cm. Dette er bare lengden. Volumet hadde blitt 1/1000.</p>"
  },
  {
    id: "plate-tykk",
    niva: "lett",
    tittel: "2 mm i centimeter",
    tekst: "<p>Bunnplata er 2 mm tykk. Høyden på tanken i eksemplet er 50 cm.</p>",
    deler: [
      { tekst: "Hvor mange centimeter er 2 mm?", svar: { verdi: 0.2, enhet: "cm" } },
      { tekst: "Hvor mange desimeter er 50 cm?", svar: { verdi: 5, enhet: "dm" } }
    ],
    hint: [
      "10 mm = 1 cm, så del millimeter på 10. 10 cm = 1 dm.",
      "\\(2 : 10 = 0{,}2\\). \\(50 : 10 = 5\\)."
    ],
    losning: "<p>\\(2\\ \\text{mm} = 0{,}2\\ \\text{cm}\\). \\(50\\ \\text{cm} = 5\\ \\text{dm}\\).</p>"
  },
  {
    id: "bredde-tol",
    niva: "lett",
    tittel: "800 mm ± 1 mm",
    tekst: "<p>Bredden på tegningen er 800 mm ± 1 mm.</p>",
    deler: [
      { tekst: "Hva er største godkjente mål?", svar: { verdi: 801, enhet: "mm" } },
      { tekst: "Hva er minste godkjente mål?", svar: { verdi: 799, enhet: "mm" } },
      {
        tekst: "Du måler 800,4 mm. Er bredden godkjent?",
        svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "800,4 mm ligger mellom 799 mm og 801 mm." }
      }
    ],
    hint: [
      "Legg til og trekk fra 1 mm. Målet er godkjent hvis det ligger imellom.",
      "\\(800 + 1 = 801\\) og \\(800 - 1 = 799\\)."
    ],
    losning: "<p>Intervallet er 799 mm til 801 mm. 800,4 mm er godkjent.</p>"
  },
  {
    id: "feil-skala",
    niva: "lett",
    tittel: "Ikke del volumet på 10",
    tekst: "<p>Tanken er 400 L. Modellen er i målestokk 1:10. En i laget sier at modellen rommer 40 L.</p>",
    steg: [{ verdi: 1000 }, { verdi: 0.4, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange desiliter rommer modellen riktig?", svar: { verdi: 4, enhet: "dl" } },
      {
        tekst: "Hva er feilen i 40 L?",
        svar: {
          valg: ["Volumet er delt på 10", "Lengden er delt på 1000", "Liter og desiliter er samme enhet"],
          riktig: 0,
          forklaring: "I 1:10 skal volumet deles på 1 000, ikke på 10. 400 L blir 0,4 L, altså 4 dl."
        }
      }
    ],
    hint: [
      "Tre kanter skaleres. Faktoren er 10 · 10 · 10. 1 L = 10 dl.",
      "\\(400 : 1\\,000 = 0{,}4\\) L = 4 dl."
    ],
    losning: "<p>\\(10^3 = 1\\,000\\). \\(400 : 1\\,000 = 0{,}4\\) L = 4 dl. 40 L er ti ganger for stort.</p>"
  },
  {
    id: "lang-tank",
    niva: "middels",
    tittel: "En lengre tank",
    tekst: "<p>Et annet hulrom gir plass til 200 cm × 50 cm × 40 cm. Modellen skal fortsatt være 1:10.</p>",
    steg: [{ verdi: 20, enhet: "dm" }, { verdi: 5, enhet: "dm" }, { verdi: 4, enhet: "dm" }],
    deler: [
      { tekst: "Hvor mange liter er tanken?", svar: { verdi: 400, enhet: "L" } },
      { tekst: "Hvor lang er modellen?", svar: { verdi: 20, enhet: "cm" } },
      { tekst: "Hvor mange desiliter rommer modellen?", svar: { verdi: 4, enhet: "dl" } }
    ],
    hint: [
      "Regn i desimeter: 20 dm × 5 dm × 4 dm. Lengden på modellen er originalen delt på 10.",
      "\\(20 \\cdot 5 \\cdot 4 = 400\\). Modellen er 20 cm lang, og volumet er 400 cm³."
    ],
    losning: "<p>\\(20 \\cdot 5 \\cdot 4 = 400\\) dm³ = 400 L. Modellen er 20 cm × 5 cm × 4 cm.</p><p>\\(20 \\cdot 5 \\cdot 4 = 400\\) cm³ = 0,4 L = 4 dl. Samme volum som den korte tanken, fordi begge er 400 L i 1:10.</p>"
  },
  {
    id: "sideplate",
    niva: "middels",
    tittel: "Én sideplate",
    tekst: "<p>En sideplate er 100 cm × 50 cm og 2 mm tykk. 2 mm = 0,2 cm. Aluminium veier 2,7 g/cm³.</p>",
    steg: [{ verdi: 0.2, enhet: "cm" }, { verdi: 1000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ aluminium er det i plata?", svar: { verdi: 1000, enhet: "cm³" } },
      { tekst: "Hvor mange gram veier plata?", svar: { verdi: 2700, enhet: "g" } },
      { tekst: "Hvor mange kilogram er det?", svar: { verdi: 2.7, enhet: "kg" } }
    ],
    hint: [
      "Volum = lengde · bredde · tykkelse, alt i cm. Masse = volum · 2,7. 1 000 g = 1 kg.",
      "\\(100 \\cdot 50 \\cdot 0{,}2 = 1\\,000\\). \\(1\\,000 \\cdot 2{,}7 = 2\\,700\\)."
    ],
    losning: "<p>\\(100 \\cdot 50 \\cdot 0{,}2 = 1\\,000\\) cm³. Masse: \\(1\\,000 \\cdot 2{,}7 = 2\\,700\\) g = 2,7 kg.</p>"
  },
  {
    id: "hulrom",
    niva: "middels",
    tittel: "Hulrommet under dørken",
    tekst: "<p>Hulrommet er 120 cm langt, 90 cm bredt og 40 cm høyt. Tanken skal romme 400 L. Hvis dere bruker hele lengden og hele bredden, blir tanken lavere enn hulrommet.</p>",
    steg: [{ verdi: 12, enhet: "dm" }, { verdi: 9, enhet: "dm" }, { verdi: 108, enhet: "dm²" }],
    deler: [
      { tekst: "Hvor mange liter er det plass til i hele hulrommet?", svar: { verdi: 432, enhet: "L" } },
      { tekst: "Hvor mange liter blir ledig hvis tanken er 400 L og fyller bunnen?", svar: { verdi: 32, enhet: "L" } },
      { tekst: "Hvor høy blir en tank på 400 L som bruker 120 cm og 90 cm? Én desimal i cm.", svar: { verdi: 37.0, enhet: "cm", tol: 0.05 } }
    ],
    hint: [
      "Regn volumet i dm. Høyde = volum : grunnflate. 1 dm = 10 cm.",
      "\\(12 \\cdot 9 \\cdot 4 = 432\\). Grunnflaten er \\(12 \\cdot 9 = 108\\) dm². \\(400 : 108 \\approx 3{,}70\\) dm."
    ],
    losning: "<p>\\(12 \\cdot 9 \\cdot 4 = 432\\) dm³ = 432 L. Ledig plass: \\(432 - 400 = 32\\) L.</p><p>Høyde: \\(400 : (12 \\cdot 9) = 400 : 108 \\approx 3{,}70\\) dm = 37,0 cm.</p>"
  },
  {
    id: "indre-volum",
    niva: "vanskelig",
    tittel: "Veggene stjeler volum",
    tekst: "<p>Utvendig er kassa 100 cm × 80 cm × 50 cm. Platene er 2 mm tykke, altså 0,2 cm. Tanken er lukket, så du trekker fra 0,2 cm på begge sider av lengde, bredde og høyde. Innvendig volum er det som kan fylles med bensin.</p>",
    steg: [
      { verdi: 99.6, enhet: "cm" },
      { verdi: 79.6, enhet: "cm" },
      { verdi: 49.6, enhet: "cm" }
    ],
    deler: [
      { tekst: "Hvor lang er tanken innvendig?", svar: { verdi: 99.6, enhet: "cm" } },
      { tekst: "Hvor bred er tanken innvendig?", svar: { verdi: 79.6, enhet: "cm" } },
      { tekst: "Hvor høy er tanken innvendig?", svar: { verdi: 49.6, enhet: "cm" } },
      { tekst: "Hvor mange liter er innvendig volum? Én desimal.", svar: { verdi: 393.2, enhet: "L", tol: 0.1 } },
      { tekst: "Hvor mange liter mangler det på 400 L? Én desimal.", svar: { verdi: 6.8, enhet: "L", tol: 0.1 } }
    ],
    hint: [
      "Trekk fra 0,4 cm på hvert ytter mål. Volum i cm³ deles på 1 000.",
      "\\(100 - 0{,}4 = 99{,}6\\). \\(99{,}6 \\cdot 79{,}6 \\cdot 49{,}6 = 393\\,236{,}7\\) cm³."
    ],
    losning: "<p>Innvendig: 99,6 cm × 79,6 cm × 49,6 cm.</p><p>\\(99{,}6 \\cdot 79{,}6 \\cdot 49{,}6 = 393\\,236{,}7\\) cm³ \\(\\approx 393{,}2\\) L.</p><p>\\(400 - 393{,}2 = 6{,}8\\) L for lite. Ytre mål på 100 × 80 × 50 gir ikke 400 L når veggene er med.</p>"
  },
  {
    id: "skall-masse",
    niva: "vanskelig",
    tittel: "Hvor tungt er skallet?",
    tekst: "<p>Tanken har seks plater, alle 2 mm tykke: bunn og lokk 100 cm × 80 cm, to langsider 100 cm × 50 cm og to kortsider 80 cm × 50 cm. Se bort fra overlapp i hjørnene. Aluminium veier 2,7 g/cm³. Regelen i verkstedet: over 25 kg skal løftes av to.</p>",
    steg: [{ verdi: 34000, enhet: "cm²" }, { verdi: 6800, enhet: "cm³" }, { verdi: 18360, enhet: "g" }],
    deler: [
      { tekst: "Hvor stort er arealet av alle seks platene?", svar: { verdi: 34000, enhet: "cm²" } },
      { tekst: "Hvor mange cm³ aluminium er det? Tykkelsen er 0,2 cm.", svar: { verdi: 6800, enhet: "cm³" } },
      { tekst: "Hvor mange kilogram veier skallet?", svar: { verdi: 18.36, enhet: "kg", tol: 0.01 } },
      {
        tekst: "Hvor mange personer trengs for å løfte skallet etter 25 kg-regelen?",
        svar: { valg: ["Én person", "To personer"], riktig: 0, forklaring: "18,36 kg er under 25 kg." }
      }
    ],
    hint: [
      "Areal av to og to like plater. Gang arealet med 0,2 cm, deretter med 2,7.",
      "\\(2 \\cdot (100 \\cdot 80 + 100 \\cdot 50 + 80 \\cdot 50) = 34\\,000\\) cm²."
    ],
    losning: "<p>Areal: \\(2 \\cdot (8\\,000 + 5\\,000 + 4\\,000) = 34\\,000\\) cm².</p><p>Volum: \\(34\\,000 \\cdot 0{,}2 = 6\\,800\\) cm³. Masse: \\(6\\,800 \\cdot 2{,}7 = 18\\,360\\) g = 18,36 kg.</p><p>18,36 kg er under 25 kg, så én person kan løfte skallet. En full tank med bensin er mye tyngre.</p>"
  },
  {
    id: "maalt-modell",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Mål den utskrevne modellen",
    utstyr: "3D-modell eller kloss, skyvelære",
    hms: "Ikke len deg over en skrivende 3D-printer. Dysen er varm. Mål modellen når den er ferdig og avkjølt.",
    tekst: "<p>Modellen skulle være 10 cm × 8 cm × 5 cm, altså 400 cm³. Skyvelæret viser 10,2 cm × 8,1 cm × 4,9 cm.</p>",
    steg: [{ verdi: 82.62, enhet: "cm²" }, { verdi: 400, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange cm³ er det målte volumet? Én desimal.", svar: { verdi: 404.8, enhet: "cm³", tol: 0.1 } },
      { tekst: "Hvor mange cm³ over 400 er målingen? Én desimal.", svar: { verdi: 4.8, enhet: "cm³", tol: 0.1 } }
    ],
    hint: [
      "Gang de tre målte sidene. Trekk fra 400.",
      "\\(10{,}2 \\cdot 8{,}1 = 82{,}62\\). \\(82{,}62 \\cdot 4{,}9 = 404{,}8\\)."
    ],
    losning: "<p>\\(10{,}2 \\cdot 8{,}1 \\cdot 4{,}9 = 404{,}8\\) cm³. Avvik: \\(404{,}8 - 400 = 4{,}8\\) cm³. Modellen er litt større enn tegningen.</p>"
  },
  {
    id: "rep-en-til-to",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tittel: "Volum i 1:2",
    tekst: "<p>Fra kapittel 6. En modell lages i målestokk 1:2. Originalen er 40 cm lang.</p>",
    deler: [
      { tekst: "Hvor lang er modellen?", svar: { verdi: 20, enhet: "cm" } },
      { tekst: "Hvor mange ganger mindre er volumet? Skriv bare tallet.", svar: { verdi: 8 } }
    ],
    hint: [
      "Lengde deles på 2. Volum skaleres med 2 · 2 · 2.",
      "\\(40 : 2 = 20\\). \\(2^3 = 8\\)."
    ],
    losning: "<p>Lengden blir 20 cm. Volumet blir \\(1/8\\), altså 8 ganger mindre. I båtmodellen 1:10 er faktoren 1 000, ikke 8.</p>"
  },
  {
    id: "eksamen-liter",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "8 dm × 5 dm × 2 dm",
    tekst: "<p>En kanne er 8 dm × 5 dm × 2 dm. Hvor mange liter rommer den?</p>",
    svar: { verdi: 80, enhet: "L" },
    hint: [
      "1 dm³ = 1 L. Gang de tre sidene.",
      "\\(8 \\cdot 5 \\cdot 2 = 80\\)."
    ],
    losning: "<p>\\(8 \\cdot 5 \\cdot 2 = 80\\) dm³ = 80 L.</p>"
  }
]);
