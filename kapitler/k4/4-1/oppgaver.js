Bok.oppgaver([
  {
    id: "drill-kw",
    niva: "lett",
    tittel: "kW og W",
    tekst: "<p>Gjør om uten kalkulator. k betyr 1000.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(0{,}85\\ \\text{kW}\\) i watt", svar: { verdi: 850, enhet: "W" } },
      { tekst: "\\(2{,}2\\ \\text{kW}\\) i watt", svar: { verdi: 2200, enhet: "W" } },
      { tekst: "\\(3600\\ \\text{W}\\) i kilowatt", svar: { verdi: 3.6, enhet: "kW" } },
      { tekst: "\\(500\\ \\text{W}\\) i kilowatt", svar: { verdi: 0.5, enhet: "kW" } }
    ],
    hint: ["Fra kW til W ganger du med 1000. Fra W til kW deler du med 1000.", "\\(0{,}85 \\cdot 1000 = 850\\). Kommaet flyttes tre plasser."],
    losning: "<p>a) 850 W &nbsp; b) 2200 W &nbsp; c) 3,6 kW &nbsp; d) 0,5 kW</p>"
  },
  {
    id: "drill-um",
    niva: "lett",
    tittel: "mm og µm",
    tekst: "<p>\\(1\\ \\text{mm} = 1000\\ \\text{µm}\\). Gjør om.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(50\\ \\text{µm}\\) i millimeter", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "\\(0{,}02\\ \\text{mm}\\) i mikrometer", svar: { verdi: 20, enhet: "µm" } },
      { tekst: "\\(2{,}5\\ \\text{m}\\) i millimeter", svar: { verdi: 2500, enhet: "mm" } },
      { tekst: "\\(80\\ \\text{mm}\\) i meter", svar: { verdi: 0.08, enhet: "m" } }
    ],
    hint: ["Fra µm til mm deler du med 1000. Fra mm til µm ganger du med 1000.", "\\(50 : 1000 = 0{,}05\\). Altså 0,05 mm."],
    losning: "<p>a) 0,05 mm &nbsp; b) 20 µm &nbsp; c) 2500 mm &nbsp; d) 0,08 m</p>"
  },
  {
    id: "prefiks-ord",
    niva: "lett",
    tittel: "Hva betyr prefikset?",
    tekst: "<p>Velg tallet prefikset står for.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "k (kilo)", svar: { valg: ["0,001", "1000", "1 000 000"], riktig: 1, forklaring: "Kilo betyr tusen." } },
      { tekst: "m (milli)", svar: { valg: ["0,001", "1000", "1 000 000"], riktig: 0, forklaring: "Milli betyr tusendel. Ikke bland med stor M." } },
      { tekst: "M (mega)", svar: { valg: ["1000", "1 000 000", "1 000 000 000"], riktig: 1, forklaring: "Mega betyr million." } },
      { tekst: "G (giga)", svar: { valg: ["1 000 000", "1 000 000 000", "1024"], riktig: 1, forklaring: "Giga betyr milliard, 1 000 000 000. Ikke 1024." } }
    ],
    hint: ["Stigen er µ, m, 1, k, M, G. Hvert steg er 1000.", "m er en tusendel. M er en million. G er tusen millioner."],
    losning: "<p>k = 1000, m = 0,001, M = 1 000 000, G = 1 000 000 000.</p>"
  },
  {
    id: "kompressor",
    niva: "middels",
    tekst: "<p>Kompressoren er merket 2,2 kW. Hovedtavla i hallen er merket 0,5 MW.</p>",
    deler: [
      { tekst: "Hvor mange watt er kompressoren?", svar: { verdi: 2200, enhet: "W" } },
      { tekst: "Hvor mange kilowatt er 0,5 MW?", svar: { verdi: 500, enhet: "kW" } }
    ],
    hint: ["kW til W er ett steg. MW til kW er også ett steg, for M står rett over k.", "\\(2{,}2 \\cdot 1000 = 2200\\) W. \\(0{,}5 \\cdot 1000 = 500\\) kW."],
    losning: "<p>a) \\(2{,}2 \\cdot 1000 = 2200\\) W<br>b) \\(0{,}5\\ \\text{MW} = 0{,}5 \\cdot 1000\\ \\text{kW} = 500\\) kW</p>"
  },
  {
    id: "telefon",
    niva: "middels",
    tittel: "Lagring i SI",
    tekst: "<p>I SI er 1 GB = 1000 MB. Ikke bruk 1024.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange MB er 128 GB? Svar med tallet.", svar: { verdi: 128000 } },
      { tekst: "Hvor mange MB er 64 GB? Svar med tallet.", svar: { verdi: 64000 } },
      { tekst: "En lærling ganger 128 med 1024 og får 131 072. Hva har hen brukt?", svar: { valg: ["SI, som vi skal bruke her", "binær omgjøring (1024), som ikke er SI"], riktig: 1, forklaring: "1024 hører til GiB og MiB. I 1P-Y bruker vi 1000." } }
    ],
    hint: ["G til M er ett steg. Gang med 1000.", "\\(128 \\cdot 1000 = 128\\,000\\)."],
    losning: "<p>a) 128 000 MB &nbsp; b) 64 000 MB &nbsp; c) 1024 er binært, ikke SI. Riktig SI-svar for 128 GB er 128 000 MB.</p>"
  },
  {
    id: "toleranse",
    niva: "middels",
    tekst: "<p>En aksling har toleranse 50 µm. Skyvelæret viser hundredeler av en millimeter.</p>",
    deler: [
      { tekst: "Hvor mange millimeter er 50 µm?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Skyvelæret viser et avvik på 0,02 mm. Hvor mange µm er det?", svar: { verdi: 20, enhet: "µm" } }
    ],
    hint: ["1 mm = 1000 µm. Fra µm til mm deler du.", "\\(50 : 1000 = 0{,}05\\) mm. Andre veien: \\(0{,}02 \\cdot 1000 = 20\\) µm."],
    losning: "<p>a) \\(50 : 1000 = 0{,}05\\) mm<br>b) \\(0{,}02 \\cdot 1000 = 20\\) µm</p>"
  },
  {
    id: "kurs",
    niva: "vanskelig",
    tittel: "Holder kursen?",
    tekst: "<p>En maskin er merket 0,006 MW. Kursen gir 230 V og er sikret med 16 A. Effekten kursen tåler er \\(230 \\cdot 16\\) watt.</p>",
    steg: [{ verdi: 6000, enhet: "W" }, { verdi: 3680, enhet: "W" }],
    deler: [
      { tekst: "Hvor mange watt trekker maskinen?", svar: { verdi: 6000, enhet: "W" } },
      { tekst: "Hvor mange watt tåler kursen?", svar: { verdi: 3680, enhet: "W" } },
      { tekst: "Kan maskinen stå på denne kursen?", svar: { valg: ["Ja, 6000 W er mindre enn 3680 W", "Nei, maskinen trekker mer enn kursen tåler"], riktig: 1, forklaring: "6000 W er mer enn 3680 W. Det trengs en kraftigere kurs." } }
    ],
    hint: ["0,006 MW til W er to steg ned: M til k, og k til enheten. Gang med 1000 to ganger.", "\\(0{,}006 \\cdot 1000 \\cdot 1000 = 6000\\) W. Kursen tåler \\(230 \\cdot 16 = 3680\\) W."],
    losning: "<p>\\(0{,}006\\ \\text{MW} = 6000\\) W.<br>\\(230 \\cdot 16 = 3680\\) W.<br>6000 er større enn 3680, så maskinen kan ikke stå på kursen.</p>"
  },
  {
    id: "merkeskilt",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Les et merkeskilt",
    utstyr: "Maskin med lesbart merkeskilt, eller tavla ved kompressoren. Mobil med lagringsvisning.",
    hms: "Les skiltet. Ikke åpne el-skap og ikke mål på spenning. Mobilen tas fram bare til lagringsoppgaven, og legges tilbake i kassa etterpå.",
    tekst: "<p>Sveiseomformeren i eksemplet er merket 5,5 kW. Hvor mange watt er det? Gjør det samme med en ekte maskin i verkstedet og skriv begge enhetene i måleskjemaet på verkstedkortet.</p>",
    svar: { verdi: 5500, enhet: "W" },
    hint: ["kW til W: gang med 1000.", "\\(5{,}5 \\cdot 1000 = 5500\\) W."],
    losning: "<p>\\(5{,}5 \\cdot 1000 = 5500\\) W. På telefonen bruker du 1 GB = 1000 MB.</p>"
  },
  {
    id: "rep-skruer",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 0.795, enhet: "kr" },
    hint: ["Del prisen med 100.", "\\(79{,}50 : 100 = 0{,}795\\) kr."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr.</p>"
  },
  {
    id: "rep-trad",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "middels",
    tekst: "<p>En rull sveisetråd veier 12 kg. En sveis bruker 15 g. Hvor mange sveiser holder rullen til?</p>",
    steg: [{ verdi: 12000, enhet: "g" }],
    svar: { verdi: 800, enhet: "stk" },
    hint: ["Gjør kilogram om til gram først.", "\\(12 \\cdot 1000 = 12\\,000\\) g. \\(12\\,000 : 15 = 800\\)."],
    losning: "<p>\\(12\\ \\text{kg} = 12\\,000\\ \\text{g}\\).<br>\\(12\\,000 : 15 = 800\\) sveiser.</p>"
  },
  {
    id: "eksamen-prefiks",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Gjør om uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(3{,}2\\ \\text{kW}\\) i watt", svar: { verdi: 3200, enhet: "W" } },
      { tekst: "\\(6400\\ \\text{mm}\\) i meter", svar: { verdi: 6.4, enhet: "m" } },
      { tekst: "\\(0{,}075\\ \\text{m}\\) i millimeter", svar: { verdi: 75, enhet: "mm" } }
    ],
    hint: ["kW til W og m til mm: gang med 1000. mm til m: del med 1000.", "\\(3{,}2 \\cdot 1000 = 3200\\). \\(6400 : 1000 = 6{,}4\\). \\(0{,}075 \\cdot 1000 = 75\\)."],
    losning: "<p>a) 3200 W &nbsp; b) 6,4 m &nbsp; c) 75 mm</p>"
  },
  {
    id: "drill-mw",
    niva: "lett",
    tittel: "MW, kW og W",
    tekst: "<p>Hvert steg på stigen er 1000. Gjør om uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(4{,}5\\ \\text{kW}\\) i watt", svar: { verdi: 4500, enhet: "W" } },
      { tekst: "\\(0{,}025\\ \\text{MW}\\) i kilowatt", svar: { verdi: 25, enhet: "kW" } },
      { tekst: "\\(0{,}025\\ \\text{MW}\\) i watt", svar: { verdi: 25000, enhet: "W" } },
      { tekst: "\\(750\\ \\text{W}\\) i kilowatt", svar: { verdi: 0.75, enhet: "kW" } }
    ],
    hint: ["Fra MW til kW er ett steg. Fra MW til W er to steg. Fra W til kW deler du med 1000.", "\\(0{,}025 \\cdot 1000 = 25\\) kW. \\(0{,}025 \\cdot 1000 \\cdot 1000 = 25\\,000\\) W."],
    losning: "<p>a) 4500 W &nbsp; b) 25 kW &nbsp; c) 25 000 W &nbsp; d) 0,75 kW</p>"
  },
  {
    id: "sveisestrom",
    niva: "lett",
    tittel: "mA og A",
    tekst: "<p>Liten m betyr milli, altså tusendel. \\(1\\ \\text{A} = 1000\\ \\text{mA}\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(850\\ \\text{mA}\\) i ampere", svar: { verdi: 0.85, enhet: "A" } },
      { tekst: "\\(2{,}4\\ \\text{A}\\) i milliampere", svar: { verdi: 2400, enhet: "mA" } },
      { tekst: "\\(0{,}15\\ \\text{A}\\) i milliampere", svar: { verdi: 150, enhet: "mA" } },
      { tekst: "\\(5000\\ \\text{mA}\\) i ampere", svar: { verdi: 5, enhet: "A" } }
    ],
    hint: ["mA til A: del med 1000. A til mA: gang med 1000.", "\\(850 : 1000 = 0{,}85\\) A. \\(2{,}4 \\cdot 1000 = 2400\\) mA."],
    losning: "<p>a) 0,85 A &nbsp; b) 2400 mA &nbsp; c) 150 mA &nbsp; d) 5 A</p>"
  },
  {
    id: "skyvelaer-um",
    niva: "middels",
    tittel: "Avvik på skyvelæret",
    tekst: "<p>Tegningen sier at avviket kan være høyst 0,10 mm. Skyvelæret viser hundredeler.</p>",
    steg: [{ verdi: 100, enhet: "µm" }],
    deler: [
      { tekst: "Hvor mange µm er 0,125 mm?", svar: { verdi: 125, enhet: "µm" } },
      { tekst: "Hvor mange mm er 80 µm?", svar: { verdi: 0.08, enhet: "mm" } },
      { tekst: "Er 80 µm innenfor grensen på 0,10 mm?", svar: { valg: ["Ja, 80 µm er mindre enn 0,10 mm", "Nei, 80 µm er mer enn 0,10 mm"], riktig: 0, forklaring: "0,10 mm = 100 µm. 80 er mindre enn 100." } }
    ],
    hint: ["1 mm = 1000 µm. Fra mm til µm ganger du. Fra µm til mm deler du.", "\\(0{,}125 \\cdot 1000 = 125\\) µm. \\(80 : 1000 = 0{,}08\\) mm. Grensen 0,10 mm er 100 µm."],
    losning: "<p>a) 125 µm<br>b) 0,08 mm<br>c) 0,10 mm = 100 µm. 80 µm er innenfor.</p>"
  },
  {
    id: "lagring-256",
    niva: "middels",
    tittel: "256 GB i SI",
    tekst: "<p>I SI er 1 GB = 1000 MB. Ikke bruk 1024.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange MB er 256 GB? Svar med tallet.", svar: { verdi: 256000 } },
      { tekst: "Hvor mange MB er 1,5 GB? Svar med tallet.", svar: { verdi: 1500 } },
      { tekst: "En kollega ganger 256 med 1024. Hva har hen gjort?", svar: { valg: ["Brukt SI, som vi skal bruke her", "Brukt binær omgjøring. I 1P-Y er faktoren 1000"], riktig: 1, forklaring: "1024 hører til GiB. 256 GB = 256 000 MB i SI." } }
    ],
    hint: ["G til M er ett steg ned. Gang med 1000.", "\\(256 \\cdot 1000 = 256\\,000\\). \\(1{,}5 \\cdot 1000 = 1500\\)."],
    losning: "<p>a) 256 000 MB &nbsp; b) 1500 MB &nbsp; c) 1024 er ikke SI. Riktig svar er 256 000 MB.</p>"
  },
  {
    id: "to-maskiner",
    niva: "middels",
    tittel: "Maskin og kurs",
    tekst: "<p>Søyleboremaskinen er merket 7,5 kW. Kursen i tavla er merket 0,012 MW. Ikke åpne skapet. Her skal du bare regne.</p>",
    steg: [{ verdi: 7500, enhet: "W" }, { verdi: 12, enhet: "kW" }],
    deler: [
      { tekst: "Hvor mange watt er maskinen?", svar: { verdi: 7500, enhet: "W" } },
      { tekst: "Hvor mange watt er kursen?", svar: { verdi: 12000, enhet: "W" } },
      { tekst: "Kan maskinen stå på kursen?", svar: { valg: ["Ja, 7500 W er mindre enn 12 000 W", "Nei, maskinen trekker mer enn kursen"], riktig: 0, forklaring: "7,5 kW = 7500 W og 0,012 MW = 12 000 W." } }
    ],
    hint: ["kW til W er ett steg. MW til W er to steg, altså · 1000 · 1000.", "\\(7{,}5 \\cdot 1000 = 7500\\) W. \\(0{,}012 \\cdot 1000 \\cdot 1000 = 12\\,000\\) W."],
    losning: "<p>Maskinen: 7500 W.<br>Kursen: \\(0{,}012\\ \\text{MW} = 12\\,000\\) W.<br>7500 er mindre enn 12 000, så kursen holder.</p>"
  },
  {
    id: "tre-effekter",
    niva: "vanskelig",
    tittel: "Tre maskiner på samme kurs",
    tekst: "<p>Tre maskiner står på en kurs merket 230 V og 16 A. De er merket 450 W, 1,2 kW og 0,0008 MW. Effekten kursen tåler er \\(230 \\cdot 16\\) watt.</p>",
    steg: [{ verdi: 1200, enhet: "W" }, { verdi: 800, enhet: "W" }, { verdi: 3680, enhet: "W" }],
    deler: [
      { tekst: "Hvor mange watt er 1,2 kW?", svar: { verdi: 1200, enhet: "W" } },
      { tekst: "Hvor mange watt er 0,0008 MW?", svar: { verdi: 800, enhet: "W" } },
      { tekst: "Hvor mange watt trekker de tre til sammen?", svar: { verdi: 2450, enhet: "W" } },
      { tekst: "Hvor mange watt tåler kursen?", svar: { verdi: 3680, enhet: "W" } },
      { tekst: "Kan alle tre stå på kursen samtidig?", svar: { valg: ["Ja, 2450 W er mindre enn 3680 W", "Nei, summen er større enn kursen"], riktig: 0, forklaring: "2450 W er under 3680 W." } }
    ],
    hint: ["Gjør alle tre om til watt før du legger sammen. 0,0008 MW er to steg ned.", "\\(1{,}2 \\cdot 1000 = 1200\\) W. \\(0{,}0008 \\cdot 1\\,000\\,000 = 800\\) W. Summen er \\(450 + 1200 + 800 = 2450\\) W. Kursen tåler \\(230 \\cdot 16 = 3680\\) W."],
    losning: "<p>1200 W + 800 W + 450 W = 2450 W = 2,45 kW.<br>Kursen tåler 3680 W.<br>2450 er mindre, så de kan stå på samtidig.</p>"
  },
  {
    id: "toleranseband",
    niva: "vanskelig",
    tittel: "Toleranse i µm",
    tekst: "<p>En aksel har toleranse 0,15 mm. Du måler et avvik på 0,08 mm med skyvelæret. Kontrollen vil ha begge tallene i µm.</p>",
    steg: [{ verdi: 0.15, enhet: "mm" }, { verdi: 0.08, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange µm er toleransen?", svar: { verdi: 150, enhet: "µm" } },
      { tekst: "Hvor mange µm er avviket?", svar: { verdi: 80, enhet: "µm" } },
      { tekst: "Er akselen innenfor?", svar: { valg: ["Ja, 80 µm er mindre enn 150 µm", "Nei, 80 µm er mer enn 150 µm"], riktig: 0, forklaring: "80 er mindre enn 150." } }
    ],
    hint: ["Begge tallene er i mm. Gang hvert av dem med 1000 for å få µm.", "\\(0{,}15 \\cdot 1000 = 150\\) µm. \\(0{,}08 \\cdot 1000 = 80\\) µm."],
    losning: "<p>Toleranse 150 µm. Avvik 80 µm. 80 er mindre enn 150, så akselen er innenfor.</p>"
  },
  {
    id: "minne-fritt",
    niva: "vanskelig",
    tittel: "Ledig plass på telefonen",
    tekst: "<p>Arbeidstelefonen har 512 GB. 180 GB er brukt. I SI er 1 GB = 1000 MB.</p>",
    steg: [{ verdi: 512000 }, { verdi: 332 }],
    deler: [
      { tekst: "Hvor mange MB er hele lageret? Svar med tallet.", svar: { verdi: 512000 } },
      { tekst: "Hvor mange GB er ledige? Svar med tallet.", svar: { verdi: 332 } },
      { tekst: "Hvor mange MB er ledige? Svar med tallet.", svar: { verdi: 332000 } },
      { tekst: "Noen får 524 288 MB for hele lageret. Hva er feilen?", svar: { valg: ["De har brukt 1000, og svaret er riktig", "De har brukt 1024. I SI er 512 GB = 512 000 MB"], riktig: 1, forklaring: "512 · 1024 = 524 288. Det er binært. SI-svaret er 512 000 MB." } }
    ],
    hint: ["Ledige gigabyte er 512 minus 180. Gang med 1000 når du går fra GB til MB.", "\\(512 - 180 = 332\\) GB. \\(332 \\cdot 1000 = 332\\,000\\) MB. Hele lageret er \\(512 \\cdot 1000 = 512\\,000\\) MB."],
    losning: "<p>Hele lageret: 512 000 MB.<br>Ledig: \\(512 - 180 = 332\\) GB = 332 000 MB.<br>524 288 kommer av 1024 og brukes ikke her.</p>"
  }
]);
