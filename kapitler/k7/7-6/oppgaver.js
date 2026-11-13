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
  },
  {
    id: "mina-inn",
    niva: "lett",
    tittel: "Inntekt hos Mina",
    tekst: "<p>Mina er lærling. Nettolønn 11 400 kr og ekstrajobb på dekkhotellet 900 kr. Hva er summen av inntektene?</p>",
    svar: { verdi: 12300, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 12300, enhet: "kr" }],
    hint: ["Legg sammen de to inntektene.", "\\(11\\,400 + 900 = 12\\,300\\)."],
    losning: "<p>\\(11\\,400 + 900 = 12\\,300\\) kr.</p>"
  },
  {
    id: "mina-ut",
    niva: "lett",
    tekst: "<p>Utgiftene til Mina er hjemme 1 500, mat 2 800, transport 690, telefon 400, fritid 650, verktøy 500 og BSU 1 000. Hva er summen?</p>",
    svar: { verdi: 7540, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 4300, enhet: "kr" }, { verdi: 4990, enhet: "kr" }, { verdi: 6040, enhet: "kr" }, { verdi: 7540, enhet: "kr" }],
    hint: ["Legg sammen to og to, så du ikke hopper over en post.", "1 500 + 2 800 = 4 300. Deretter transport, telefon og fritid: 4 300 + 690 + 400 + 650 = 6 040. Verktøy og BSU gir 7 540."],
    losning: "<p>\\(1\\,500 + 2\\,800 + 690 + 400 + 650 + 500 + 1\\,000 = 7\\,540\\) kr.</p>"
  },
  {
    id: "mina-over",
    niva: "lett",
    tekst: "<p>Inntektene er 12 300 kr og utgiftene er 7 540 kr. Hva er overskuddet?</p>",
    svar: { verdi: 4760, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 4760, enhet: "kr" }],
    hint: ["Overskudd = inntekter − utgifter.", "\\(12\\,300 - 7\\,540 = 4\\,760\\)."],
    losning: "<p>\\(12\\,300 - 7\\,540 = 4\\,760\\) kr.</p>"
  },
  {
    id: "mina-avvik",
    niva: "middels",
    tittel: "Tre poster i regnskapet",
    tekst: "<p>Budsjettet til Mina har mat 2 800 kr, fritid 650 kr og telefon 400 kr. Regnskapet viser mat 3 120 kr, fritid 480 kr og telefon 400 kr. Avvik = regnskap − budsjett.</p>",
    deler: [
      { tekst: "Avvik på mat?", svar: { verdi: 320, enhet: "kr", tol: 0.5 } },
      { tekst: "Avvik på fritid? Negativt tall er lov.", svar: { verdi: -170, enhet: "kr", tol: 0.5 } },
      { tekst: "Avvik på telefon?", svar: { verdi: 0, enhet: "kr", tol: 0 } }
    ],
    steg: [{ verdi: 320, enhet: "kr" }, { verdi: -170, enhet: "kr" }, { verdi: 0, enhet: "kr" }],
    hint: ["Trekk budsjettet fra regnskapet, også når regnskapet er lavere.", "Mat: \\(3\\,120 - 2\\,800\\). Fritid: \\(480 - 650\\). Telefon: \\(400 - 400\\)."],
    losning: "<p>Mat: \\(320\\) kr mer enn planen.<br>Fritid: \\(-170\\) kr, altså 170 kr mindre enn planen.<br>Telefon: \\(0\\) kr.</p>"
  },
  {
    id: "mina-flytte",
    niva: "middels",
    tittel: "Hybel til Mina",
    tekst: "<p>Overskuddet før flytting er 4 760 kr. I dag betaler hun 1 500 kr hjemme. Hybelen koster 4 800 kr, og strøm 550 kr.</p>",
    deler: [
      { tekst: "Hva koster boligen per måned?", svar: { verdi: 5350, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye dyrere er det enn de 1 500 kronene?", svar: { verdi: 3850, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir overskuddet etter flytting?", svar: { verdi: 910, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva stemmer?", svar: { valg: ["Hun går i underskudd hver måned", "Hun har fortsatt overskudd, men det er mindre", "Flytting gjør overskuddet større"], riktig: 1 } }
    ],
    steg: [{ verdi: 5350, enhet: "kr" }, { verdi: 3850, enhet: "kr" }, { verdi: 910, enhet: "kr" }],
    hint: ["Ny bolig = husleie + strøm. Merpris = ny bolig − det hun betaler hjemme.", "\\(4\\,800 + 550 = 5\\,350\\). Merpris \\(3\\,850\\). \\(4\\,760 - 3\\,850 = 910\\)."],
    losning: "<p>Bolig: \\(5\\,350\\) kr.<br>Merpris: \\(3\\,850\\) kr.<br>Nytt overskudd: \\(910\\) kr. Hun har fortsatt overskudd, men lite å gå på.</p>"
  },
  {
    id: "mina-bil",
    niva: "middels",
    tittel: "Bilhold per måned",
    tekst: "<p>Forsikring 640 kr per måned. Drivstoff: 80 mil · 0,6 L/mil · 22 kr/L. Dekk 4 800 kr i året. Service 3 600 kr i året.</p>",
    deler: [
      { tekst: "Hvor mange liter drivstoff er det i måneden?", svar: { verdi: 48, enhet: "L", tol: 0.05 } },
      { tekst: "Hva koster drivstoffet?", svar: { verdi: 1056, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er dekkene per måned?", svar: { verdi: 400, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er summen for bilen per måned, med service 300 kr?", svar: { verdi: 2396, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 48, enhet: "L" }, { verdi: 1056, enhet: "kr" }, { verdi: 400, enhet: "kr" }, { verdi: 300, enhet: "kr" }],
    hint: ["Liter: \\(80 \\cdot 0{,}6\\). Pris: liter · 22. Årsbeløp deles på 12.", "\\(48 \\cdot 22 = 1\\,056\\). Dekk: \\(4\\,800 : 12 = 400\\). Sum: \\(640 + 1\\,056 + 400 + 300\\)."],
    losning: "<p>Drivstoff: \\(48\\) L · \\(22 = 1\\,056\\) kr.<br>Dekk: \\(400\\) kr. Service: \\(300\\) kr.<br>Sum: \\(640 + 1\\,056 + 400 + 300 = 2\\,396\\) kr.</p>"
  },
  {
    id: "oljeskift",
    niva: "vanskelig",
    tittel: "Pris på oljeskift",
    tekst: "<p>Ungdomsbedriften priser et oljeskift. Olje 240 kr, filter 85 kr og pakning 15 kr. Jobben tar 0,5 time, og timelønna er 160 kr. Fortjeneste 50 kr. Mva 25 %.</p>",
    deler: [
      { tekst: "Hva er materialene til sammen?", svar: { verdi: 340, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster tida?", svar: { verdi: 80, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen uten mva, med fortjeneste?", svar: { verdi: 470, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen med mva?", svar: { verdi: 587.5, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 340, enhet: "kr" }, { verdi: 80, enhet: "kr" }, { verdi: 470, enhet: "kr" }, { verdi: 117.5, enhet: "kr" }],
    hint: ["Selvkost = materialer + tid. Legg til fortjeneste før mva.", "Materialer \\(240 + 85 + 15 = 340\\). Tid \\(0{,}5 \\cdot 160 = 80\\). Uten mva: \\(470\\). Med mva: \\(470 \\cdot 1{,}25\\)."],
    losning: "<p>Materialer \\(340\\) kr. Tid \\(80\\) kr. Uten mva: \\(340 + 80 + 50 = 470\\) kr.<br>Mva: \\(117{,}50\\) kr. Med mva: \\(587{,}50\\) kr.</p>"
  },
  {
    id: "mina-lan",
    niva: "vanskelig",
    tittel: "Bil og lån i budsjettet",
    tekst: "<p>Overskuddet uten bil er 4 760 kr. Bilholdet er 2 396 kr per måned. Serielånet er 48 000 kr over 4 år. Avdraget er 12 000 kr i året. I år 1 er renta 6 % på billån og 15 % på forbrukslån. Fordel år 1 jevnt på 12 måneder.</p>",
    deler: [
      { tekst: "Hva er billånet per måned i år 1, avdrag og rente?", svar: { verdi: 1240, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster bilhold pluss billån per måned?", svar: { verdi: 3636, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er overskuddet da?", svar: { verdi: 1124, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er overskuddet hvis forbrukslånet brukes i stedet? Månedskostnaden for lånet i år 1 er 1 600 kr.", svar: { verdi: 764, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 1000, enhet: "kr" }, { verdi: 2880, enhet: "kr" }, { verdi: 240, enhet: "kr" }, { verdi: 1240, enhet: "kr" }, { verdi: 7200, enhet: "kr" }, { verdi: 600, enhet: "kr" }, { verdi: 1600, enhet: "kr" }],
    hint: ["Månedlig avdrag = 12 000 : 12. Rente år 1 på billån = 48 000 · 0,06, deretter delt på 12.", "Billån: \\(1\\,000 + 240 = 1\\,240\\). Bilhold pluss lån: \\(2\\,396 + 1\\,240 = 3\\,636\\). \\(4\\,760 - 3\\,636 = 1\\,124\\). Forbruk: rente \\(7\\,200\\) kr i året, \\(600\\) kr i måneden, lån \\(1\\,600\\) kr."],
    losning: "<p>Avdrag per måned: \\(1\\,000\\) kr. Rente billån: \\(48\\,000 \\cdot 0{,}06 = 2\\,880\\) kr i året, \\(240\\) kr i måneden. Lån: \\(1\\,240\\) kr.<br>Bil pluss billån: \\(3\\,636\\) kr. Overskudd: \\(1\\,124\\) kr.<br>Forbrukslån: rente \\(7\\,200\\) kr i året, \\(600\\) kr i måneden, lån \\(1\\,600\\) kr. Bil pluss lån: \\(3\\,996\\) kr. Overskudd: \\(4\\,760 - 3\\,996 = 764\\) kr.</p>"
  }
]);
