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
  }
]);
