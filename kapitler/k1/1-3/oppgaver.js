Bok.oppgaver([
  {
    id: "temperatur",
    niva: "lett",
    tittel: "Minusgrader",
    tekst: "<p>Det er \\(-4\\) °C i verkstedet om morgenen. Innen lunsj stiger temperaturen 9 grader. Hva er temperaturen da?</p>",
    svar: { verdi: 5, enhet: "°C" },
    hint: ["Legge til betyr å gå til høyre på tallinja.", "Fra −4 til 0 er 4. Du har 5 igjen."],
    losning: "<p>\\(-4 + 9 = 5\\) °C.</p>"
  },
  {
    id: "fortegn",
    niva: "lett",
    tekst: "<p>Regn ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(8 - 12\\)", svar: { verdi: -4 } },
      { tekst: "\\(-6 + (-2)\\)", svar: { verdi: -8 } },
      { tekst: "\\((-4) \\cdot 3\\)", svar: { verdi: -12 } },
      { tekst: "\\((-5) \\cdot (-2)\\)", svar: { verdi: 10 } }
    ],
    hint: ["Ulike fortegn i gange gir minus. Like fortegn gir pluss.", "\\(8 - 12\\) går forbi null."],
    losning: "<p>a) −4 &nbsp; b) −8 &nbsp; c) −12 &nbsp; d) 10</p>"
  },
  {
    id: "rekkefolge",
    niva: "middels",
    tekst: "<p>Regn ut. Gange før pluss, parentes først.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(2 + 3 \\cdot 4\\)", svar: { verdi: 14 } },
      { tekst: "\\((4 + 8) : 2\\)", svar: { verdi: 6 } },
      { tekst: "\\(20 - (12 : 4)\\)", svar: { verdi: 17 } },
      { tekst: "\\(6 \\cdot (3 - 1)\\)", svar: { verdi: 12 } }
    ],
    hint: ["Uten parentes: gange og dele før pluss og minus.", "\\(3 \\cdot 4 = 12\\), deretter \\(2 + 12\\)."],
    losning: "<p>a) \\(2 + 12 = 14\\) &nbsp; b) \\(12 : 2 = 6\\) &nbsp; c) \\(20 - 3 = 17\\) &nbsp; d) \\(6 \\cdot 2 = 12\\)</p>"
  },
  {
    id: "to-minus",
    niva: "middels",
    tekst: "<p>Et avvik på tavla er \\(-0{,}3\\) mm. Du trekker fra avviket for å komme tilbake til målet: \\(15 - (-5)\\) i et større regnestykke. Regn ut \\(15 - (-5)\\) og \\(24 : (-6)\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(15 - (-5)\\)", svar: { verdi: 20 } },
      { tekst: "\\(24 : (-6)\\)", svar: { verdi: -4 } }
    ],
    hint: ["Minus et negativt tall er det samme som pluss.", "Dele med negativt tall gir negativt svar når det andre tallet er positivt."],
    losning: "<p>a) \\(15 + 5 = 20\\) &nbsp; b) \\(-4\\)</p>"
  },
  {
    id: "kapp",
    niva: "middels",
    tekst: "<p>En stang er 1200 mm. Du kapper tre biter på 150 mm. Hvor mye er igjen?</p>",
    steg: [{ verdi: 450, enhet: "mm" }],
    svar: { verdi: 750, enhet: "mm" },
    hint: ["Gange før minus: \\(3 \\cdot 150\\) først.", "\\(1200 - 450\\)."],
    losning: "<p>\\(1200 - 3 \\cdot 150 = 1200 - 450 = 750\\) mm.</p>"
  },
  {
    id: "jobb",
    niva: "vanskelig",
    tekst: "<p>Et oppdrag koster 80 kr i oppstart og 35 kr per kutt. Du tar 4 kutt og får 20 kr i avslag. Regn ut \\(80 + 4 \\cdot 35 - 20\\).</p>",
    steg: [{ verdi: 140, enhet: "kr" }],
    svar: { verdi: 200, enhet: "kr" },
    hint: ["Gange før pluss og minus.", "\\(4 \\cdot 35 = 140\\). Så \\(80 + 140 - 20\\)."],
    losning: "<p>\\(80 + 140 - 20 = 200\\) kr.</p>"
  },
  {
    id: "morgen-atte",
    niva: "lett",
    tittel: "Åtte kuldegrader",
    tekst: "<p>Det er \\(-8\\) °C i verkstedet. Ovnen hever temperaturen med 5 grader. Hva blir temperaturen?</p>",
    svar: { verdi: -3, enhet: "°C" },
    hint: ["Du starter på −8 og går 5 til høyre.", "Du er fortsatt under null: \\(-8 + 5\\)."],
    losning: "<p>\\(-8 + 5 = -3\\) °C.</p>"
  },
  {
    id: "fortegn-lett",
    niva: "lett",
    tekst: "<p>Regn ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(5 - 9\\)", svar: { verdi: -4 } },
      { tekst: "\\(-3 + (-4)\\)", svar: { verdi: -7 } },
      { tekst: "\\((-2) \\cdot 6\\)", svar: { verdi: -12 } },
      { tekst: "\\((-4) \\cdot (-3)\\)", svar: { verdi: 12 } }
    ],
    hint: ["Ulike fortegn i gange gir minus. Like fortegn gir pluss.", "\\(5 - 9\\) går forbi null."],
    losning: "<p>a) −4 &nbsp; b) −7 &nbsp; c) −12 &nbsp; d) 12</p>"
  },
  {
    id: "avvik-80",
    niva: "lett",
    tittel: "Avvik på 80 mm",
    tekst: "<p>Målet er 80,0 mm. Du måler 78,5 mm. Hva er avviket? Avvik = målt mål − riktig mål.</p>",
    svar: { verdi: -1.5, enhet: "mm" },
    hint: ["Trekk målet fra det du målte.", "\\(78{,}5 - 80\\). Negativt svar betyr for kort."],
    losning: "<p>\\(78{,}5 - 80 = -1{,}5\\) mm. Emnet er 1,5 mm for kort.</p>"
  },
  {
    id: "fire-kapp",
    niva: "middels",
    tittel: "Fire kapp",
    tekst: "<p>En stang er 1000 mm. Du kapper fire biter på 120 mm. Hvor mye er igjen?</p>",
    steg: [{ verdi: 480, enhet: "mm" }],
    svar: { verdi: 520, enhet: "mm" },
    hint: ["Gange før minus.", "\\(4 \\cdot 120 = 480\\). \\(1000 - 480\\)."],
    losning: "<p>\\(1000 - 4 \\cdot 120 = 1000 - 480 = 520\\) mm.</p>"
  },
  {
    id: "kutt-regning",
    niva: "middels",
    tittel: "Pris med avslag",
    tekst: "<p>Et kapp koster 50 kr i oppstart og 20 kr per kutt. Du tar 3 kutt og får 15 kr i avslag. Regn ut \\(50 + 3 \\cdot 20 - 15\\).</p>",
    steg: [{ verdi: 60, enhet: "kr" }],
    svar: { verdi: 95, enhet: "kr" },
    hint: ["Gange før pluss og minus.", "\\(3 \\cdot 20 = 60\\). Så \\(50 + 60 - 15\\)."],
    losning: "<p>\\(50 + 60 - 15 = 95\\) kr.</p>"
  },
  {
    id: "fortegn-mid",
    niva: "middels",
    tekst: "<p>Regn ut.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\((-8) \\cdot (-3)\\)", svar: { verdi: 24 } },
      { tekst: "\\(18 : (-3)\\)", svar: { verdi: -6 } },
      { tekst: "\\(20 - (-4)\\)", svar: { verdi: 24 } }
    ],
    hint: ["Like fortegn gir pluss. Ulike fortegn gir minus.", "\\(20 - (-4) = 20 + 4\\)."],
    losning: "<p>a) 24 &nbsp; b) −6 &nbsp; c) 24</p>"
  },
  {
    id: "stigning-tolv",
    niva: "vanskelig",
    tittel: "Fra kulde til pluss",
    tekst: "<p>Om morgenen er det \\(-12\\) °C i hallen. Midt på dagen er det \\(3\\) °C. På samme ark står regnestykket \\(10 - 4 \\cdot 3\\).</p>",
    deler: [
      { tekst: "Hvor mange grader har temperaturen steget?", svar: { verdi: 15, enhet: "°C" } },
      { tekst: "Regn ut \\(10 - 4 \\cdot 3\\).", svar: { verdi: -2 } }
    ],
    hint: ["Fra −12 til 3 er det samme som \\(3 - (-12)\\).", "Gange før minus: \\(4 \\cdot 3 = 12\\), så \\(10 - 12\\)."],
    losning: "<p>a) \\(3 - (-12) = 15\\) grader.<br>b) \\(10 - 12 = -2\\).</p>"
  },
  {
    id: "oppdrag-seks",
    niva: "vanskelig",
    tittel: "Seks kutt",
    tekst: "<p>Et oppdrag koster 120 kr i oppstart og 25 kr per kutt. Du tar 6 kutt og får 30 kr i avslag. Regn ut \\(120 + 6 \\cdot 25 - 30\\).</p>",
    steg: [{ verdi: 150, enhet: "kr" }],
    svar: { verdi: 240, enhet: "kr" },
    hint: ["Gange før pluss og minus.", "\\(6 \\cdot 25 = 150\\). Så \\(120 + 150 - 30\\)."],
    losning: "<p>\\(120 + 150 - 30 = 240\\) kr.</p>"
  },
  {
    id: "avvik-50",
    niva: "vanskelig",
    tittel: "Fem emner på 50 mm",
    tekst: "<p>Målet er 50,0 mm. Målingene er 50,2 · 49,5 · 50,8 · 49,1 · 50,0 mm. Avviket er målt mål minus 50.</p>",
    steg: [{ verdi: -0.5, enhet: "mm" }, { verdi: 0.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er det minste avviket?", svar: { verdi: -0.9, enhet: "mm" } },
      { tekst: "Hva er det største avviket?", svar: { verdi: 0.8, enhet: "mm" } }
    ],
    hint: ["Regn hvert avvik. \\(49{,}1 - 50 = -0{,}9\\).", "Minste betyr mest negativ. Største er det som ligger lengst til høyre."],
    losning: "<p>Avvikene er +0,2, −0,5, +0,8, −0,9 og 0 mm.<br>a) Minste er \\(-0{,}9\\) mm.<br>b) Største er \\(+0{,}8\\) mm.</p>"
  },
  {
    id: "avvik-tavla",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Fem avvik",
    utstyr: "Fem emner, skyvelære eller målebånd, tavle med mål 100,0 mm",
    hms: "Emnene kan ha grader. Ikke føl langs en saget kant med bar finger.",
    tekst: "<p>Målet er 100,0 mm. Målingene er 100,4 · 99,7 · 100,8 · 99,2 · 100,1 mm. Avviket er målt mål minus 100. Hva er det minste avviket?</p>",
    steg: [{ verdi: -0.8, enhet: "mm" }],
    svar: { verdi: -0.8, enhet: "mm" },
    hint: ["Regn hvert avvik: \\(99{,}2 - 100\\).", "Minste betyr mest negativ, ikke nærmest null."],
    losning: "<p>Avvikene er +0,4, −0,3, +0,8, −0,8 og +0,1 mm. Det minste er \\(-0{,}8\\) mm. Det største er \\(+0{,}8\\) mm.</p>"
  },
  {
    id: "repetisjon-overslag",
    type: "repetisjon",
    fra: "kapittel 1.2",
    niva: "lett",
    tekst: "<p>23 planker à 98 kr. Overslag med \\(20 \\cdot 100\\). Hva får du?</p>",
    stegForSteg: false,
    svar: { verdi: 2000, enhet: "kr" },
    hint: ["Ett tall ned og ett tall opp.", "\\(20 \\cdot 100\\)."],
    losning: "<p>2000 kr.</p>"
  },
  {
    id: "repetisjon-komma",
    type: "repetisjon",
    fra: "kapittel 1.1",
    niva: "lett",
    tekst: "<p>Hva er \\(0{,}25 \\cdot 1000\\)?</p>",
    svar: { verdi: 250 },
    hint: ["Kommaet tre plasser til høyre.", "Fyll med nuller."],
    losning: "<p>\\(250\\).</p>"
  },
  {
    id: "eksamen-rekkefolge",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Regn ut uten hjelpemidler.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "\\(-13 - 6\\)", svar: { verdi: -19 } },
      { tekst: "\\(2 + 3 \\cdot 4\\)", svar: { verdi: 14 } }
    ],
    hint: ["\\(-13 - 6\\) går videre til venstre.", "Gange før pluss."],
    losning: "<p>a) −19 &nbsp; b) \\(2 + 12 = 14\\)</p>"
  }
]);
