Bok.oppgaver([
  {
    id: "inntekter",
    niva: "lett",
    tekst: "<p>Nettolønn 9 500 kr og ekstrajobb 1 200 kr. Hva er summen av inntektene?</p>",
    svar: { verdi: 10700, enhet: "kr", tol: 0.5 },
    hint: ["Legg sammen de to inntektene.", "\\(9\\,500 + 1\\,200 = 10\\,700\\)."],
    losning: "<p>\\(9\\,500 + 1\\,200 = 10\\,700\\) kr.</p>"
  },
  {
    id: "utgifter",
    niva: "lett",
    tekst: "<p>Utgifter: 2 000 + 3 200 + 750 + 400 + 400 + 800 + 300 + 1 000. Hva er summen?</p>",
    svar: { verdi: 8850, enhet: "kr", tol: 0.5 },
    hint: ["Legg sammen to og to.", "2 000 + 3 200 = 5 200. 750 + 400 + 400 = 1 550. 800 + 300 + 1 000 = 2 100. Deretter 5 200 + 1 550 + 2 100."],
    losning: "<p>\\(5\\,200 + 1\\,550 + 2\\,100 = 8\\,850\\) kr.</p>"
  },
  {
    id: "overskudd",
    niva: "lett",
    tekst: "<p>Inntekter 10 700 kr og utgifter 8 850 kr. Hva er overskuddet?</p>",
    svar: { verdi: 1850, enhet: "kr", tol: 0.5 },
    hint: ["Overskudd = inntekter − utgifter.", "\\(10\\,700 - 8\\,850 = 1\\,850\\)."],
    losning: "<p>\\(10\\,700 - 8\\,850 = 1\\,850\\) kr.</p>"
  },
  {
    id: "avvik-mat",
    niva: "middels",
    tekst: "<p>Mat er budsjettert med 3 200 kr. Regnskapet viser 3 650 kr.</p>",
    svar: { verdi: 450, enhet: "kr", tol: 0.5 },
    hint: ["Avvik = regnskap − budsjett.", "\\(3\\,650 - 3\\,200 = 450\\). Positivt avvik på en utgift betyr at du brukte mer."],
    losning: "<p>\\(3\\,650 - 3\\,200 = 450\\) kr. Han brukte 450 kr mer enn planen.</p>"
  },
  {
    id: "flytte",
    niva: "middels",
    tittel: "Hybel",
    tekst: "<p>Hybel 5 500 kr og strøm 700 kr. I dag betaler han 2 000 kr hjemme. Overskuddet før flytting er 1 850 kr.</p>",
    deler: [
      { tekst: "Hva koster boligen per måned?", svar: { verdi: 6200, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye dyrere er det enn de 2 000 kronene?", svar: { verdi: 4200, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye mangler han hver måned etter flytting?", svar: { verdi: 2350, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Ny bolig = husleie + strøm. Merpris = ny bolig − 2 000.", "\\(1\\,850 - 4\\,200 = -2\\,350\\). Han mangler 2 350 kr."],
    losning: "<p>Bolig: \\(5\\,500 + 700 = 6\\,200\\) kr.<br>Merpris: \\(6\\,200 - 2\\,000 = 4\\,200\\) kr.<br>Mangler: \\(4\\,200 - 1\\,850 = 2\\,350\\) kr.</p>"
  },
  {
    id: "bil-mnd",
    niva: "middels",
    tekst: "<p>Forsikring 780 kr per måned. Drivstoff: 120 mil · 0,7 L/mil · 20 kr/L. Dekk 6 000 kr i året. Service 4 800 kr i året.</p>",
    deler: [
      { tekst: "Hva koster drivstoffet per måned?", svar: { verdi: 1680, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er dekkene per måned?", svar: { verdi: 500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er summen for bilen per måned, med service 400 kr?", svar: { verdi: 3360, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Drivstoff: \\(120 \\cdot 0{,}7 \\cdot 20\\). Dekk: \\(6\\,000 : 12\\).", "\\(780 + 1\\,680 + 500 + 400\\)."],
    losning: "<p>Drivstoff: \\(84 \\cdot 20 = 1\\,680\\) kr. Dekk: 500 kr. Sum: \\(780 + 1\\,680 + 500 + 400 = 3\\,360\\) kr.</p>"
  },
  {
    id: "tre-valg",
    niva: "vanskelig",
    tittel: "Kontant, billån eller forbrukslån",
    tekst: "<p>Bilen koster 80 000 kr. Serielån i 4 år. Billån 6 % koster 12 000 kr i renter. Forbrukslån 15 % koster 30 000 kr i renter. Månedlig bilhold er 3 360 kr, og overskuddet uten bil er 1 850 kr.</p>",
    deler: [
      { tekst: "Hva betaler du til sammen med billånet, bil pluss renter?", svar: { verdi: 92000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva betaler du til sammen med forbrukslånet?", svar: { verdi: 110000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye mangler i månedsbudsjettet hvis bilholdet på 3 360 kr legges inn?", svar: { verdi: 1510, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvilken setning stemmer?", svar: { valg: ["Han har råd til bilholdet uten å endre noe annet", "Bilholdet er dyrere enn overskuddet, så budsjettet må endres", "Forbrukslånet er billigere enn billånet"], riktig: 1 } }
    ],
    hint: ["Totalpris = 80 000 + renter.", "\\(3\\,360 - 1\\,850 = 1\\,510\\) mangler hver måned."],
    losning: "<p>Billån: 92 000 kr. Forbrukslån: 110 000 kr.<br>Mangler: \\(3\\,360 - 1\\,850 = 1\\,510\\) kr per måned.<br>Bilholdet er dyrere enn overskuddet. Budsjettet må endres før bilen er et reelt valg. Av lånene er billånet billigere enn forbrukslånet.</p>"
  },
  {
    id: "selvkost-dekk",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Pris på dekkskift",
    utstyr: "Kalkulator. Tallene er et øvingseksempel for en ungdomsbedrift.",
    hms: "Ingen løft av hjul i denne økta. Regningen gjøres ved benken.",
    tekst: "<p>Materialer: poser 25 kr, såpe 15 kr og slitasje 20 kr. Jobben tar 0,5 time, og timelønna er 140 kr. Fortjeneste 60 kr. Mva 25 %.</p>",
    deler: [
      { tekst: "Hva er materialene til sammen?", svar: { verdi: 60, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster tida?", svar: { verdi: 70, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen uten mva, med fortjeneste?", svar: { verdi: 190, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen med mva?", svar: { verdi: 237.5, enhet: "kr", tol: 0.01 } }
    ],
    hint: ["Tid: \\(0{,}5 \\cdot 140 = 70\\). Selvkost = materialer + tid.", "Uten mva: \\(60 + 70 + 60 = 190\\). Med mva: \\(190 \\cdot 1{,}25\\)."],
    losning: "<p>Materialer 60 kr. Tid 70 kr. Uten mva: \\(60 + 70 + 60 = 190\\) kr.<br>Mva: \\(190 \\cdot 0{,}25 = 47{,}50\\) kr. Med mva: 237,50 kr.</p>"
  },
  {
    id: "rep-overslag",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>23 planker à 98 kr. Bruk overslaget \(20 \cdot 100\). Hva blir overslaget?</p>",
    svar: { verdi: 2000, enhet: "kr", tol: 0 },
    hint: ["Rund 23 til 20 og 98 til 100.", "\\(20 \\cdot 100 = 2\\,000\\)."],
    losning: "<p>Overslag: \\(20 \\cdot 100 = 2\\,000\\) kr. Nøyaktig pris er \\(23 \\cdot 98 = 2\\,254\\) kr. Overslaget ligger i nærheten.</p>"
  },
  {
    id: "rep-noyaktig",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "middels",
    tekst: "<p>Hva er den nøyaktige prisen for 23 planker à 98 kr?</p>",
    svar: { verdi: 2254, enhet: "kr", tol: 0.5 },
    hint: ["\\(23 \\cdot 100 = 2\\,300\\), og så trekk fra \\(23 \\cdot 2\\).", "\\(2\\,300 - 46 = 2\\,254\\)."],
    losning: "<p>\\(23 \\cdot 98 = 2\\,254\\) kr.</p>"
  },
  {
    id: "eksamen-avvik",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Telefon er budsjettert med 400 kr. Regnskapet viser 460 kr. Fritid er budsjettert med 800 kr og ble 650 kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Avvik på telefon?", svar: { verdi: 60, enhet: "kr", tol: 0.5 } },
      { tekst: "Avvik på fritid? Bruk regnskap minus budsjett. Negativt tall er lov.", svar: { verdi: -150, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Avvik = regnskap − budsjett, også når regnskapet er lavere.", "Telefon: \\(460 - 400\\). Fritid: \\(650 - 800\\)."],
    losning: "<p>Telefon: \\(460 - 400 = 60\\) kr mer enn planen.<br>Fritid: \\(650 - 800 = -150\\) kr, altså 150 kr mindre enn planen.</p>"
  }
]);
