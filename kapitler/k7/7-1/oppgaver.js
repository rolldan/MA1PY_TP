Bok.oppgaver([
  {
    id: "dagslonn",
    niva: "lett",
    tittel: "En dag på verkstedet",
    tekst: "<p>Timelønna er 180 kr. Du jobber 8 timer ordinært. Hva er bruttolønna?</p>",
    svar: { verdi: 1440, enhet: "kr", tol: 0.5 },
    hint: ["Brutto = timer · timelønn.", "\\(8 \\cdot 180\\)."],
    losning: "<p>\\(8 \\cdot 180 = 1\\,440\\) kr.</p>"
  },
  {
    id: "halv-dag",
    niva: "lett",
    tekst: "<p>En ordinær dag er 7,5 timer. Timelønna er 200 kr. Hva tjener du på én slik dag?</p>",
    svar: { verdi: 1500, enhet: "kr", tol: 0.5 },
    hint: ["7,5 timer er 7 timer og 30 minutter.", "\\(7{,}5 \\cdot 200 = 1\\,500\\)."],
    losning: "<p>\\(7{,}5 \\cdot 200 = 1\\,500\\) kr.</p>"
  },
  {
    id: "tillegg-50",
    niva: "lett",
    tekst: "<p>Timelønna er 200 kr. Overtidstillegget er 50 %.</p>",
    deler: [
      { tekst: "Hvor mange kroner er tillegget per time?", svar: { verdi: 100, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva får du betalt for én overtidstime?", svar: { verdi: 300, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["50 % av timelønna er tillegget. Timelønna kommer i tillegg til tillegget.", "\\(0{,}5 \\cdot 200 = 100\\). Overtidstimen koster \\(200 + 100 = 300\\) kr."],
    losning: "<p>a) \\(0{,}50 \\cdot 200 = 100\\) kr i tillegg.<br>b) \\(200 \\cdot 1{,}5 = 300\\) kr per overtidstime.</p>"
  },
  {
    id: "larling-40",
    niva: "middels",
    tittel: "Andre halvår",
    tekst: "<p>Fagarbeideren i bedriften har 250 kr i timen. Lærlingen er i andre halvår i bedrift og skal ha 40 %.</p>",
    deler: [
      { tekst: "Hva er lærlingens timelønn?", svar: { verdi: 100, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva blir bruttolønn for 37,5 ordinære timer?", svar: { verdi: 3750, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Andre halvår er 40 % av fagarbeiderlønna.", "\\(250 \\cdot 0{,}40 = 100\\) kr. Deretter \\(37{,}5 \\cdot 100\\)."],
    losning: "<p>a) \\(250 \\cdot 0{,}40 = 100\\) kr.<br>b) \\(37{,}5 \\cdot 100 = 3\\,750\\) kr.</p>"
  },
  {
    id: "to-timer-ot",
    niva: "middels",
    tekst: "<p>Samme lærling, 100 kr i timen, jobber 37,5 ordinære timer og 2 overtidstimer med 50 % tillegg.</p>",
    steg: [{ verdi: 3750, enhet: "kr" }, { verdi: 300, enhet: "kr" }],
    svar: { verdi: 4050, enhet: "kr", tol: 0.5 },
    hint: ["Regn ordinær lønn og overtid hver for seg.", "Overtid: \\(2 \\cdot 100 \\cdot 1{,}5 = 300\\) kr. Legg til 3 750 kr."],
    losning: "<p>Ordinært: \\(37{,}5 \\cdot 100 = 3\\,750\\) kr.<br>Overtid: \\(2 \\cdot 150 = 300\\) kr.<br>Brutto: \\(4\\,050\\) kr.</p>"
  },
  {
    id: "minstelonn",
    niva: "middels",
    tittel: "Minstesatsen 2026",
    tekst: "<p>Fra 1. april 2026 er minste timefortjeneste for fagarbeider 232,55 kr. En lærling i første halvår får 30 %.</p>",
    svar: { verdi: 69.77, enhet: "kr", tol: 0.01 },
    hint: ["30 % betyr at du ganger med 0,30.", "\\(232{,}55 \\cdot 0{,}30 = 69{,}765\\), som avrundes til 69,77 kr."],
    losning: "<p>\\(232{,}55 \\cdot 0{,}30 = 69{,}765\\) kr, avrundet til øre: <b>69,77 kr</b>.</p>"
  },
  {
    id: "kveld-og-natt",
    niva: "vanskelig",
    tittel: "Kveld på verkstedet",
    tekst: "<p>Lærlingen har 75 kr i timen. Uka har 37,5 ordinære timer, 3,5 overtidstimer med 50 % tillegg (før kl. 21) og 1 overtidstime med 100 % tillegg (etter kl. 21).</p>",
    deler: [
      { tekst: "Ordinær lønn?", svar: { verdi: 2812.5, enhet: "kr", tol: 0.01 } },
      { tekst: "Lønn for 50 %-overtiden?", svar: { verdi: 393.75, enhet: "kr", tol: 0.01 } },
      { tekst: "Lønn for 100 %-overtiden?", svar: { verdi: 150, enhet: "kr", tol: 0.01 } },
      { tekst: "Bruttolønn for uka?", svar: { verdi: 3356.25, enhet: "kr", tol: 0.01 } }
    ],
    hint: ["50 % tillegg: gang med 1,5. 100 % tillegg: gang med 2.", "\\(3{,}5 \\cdot 75 \\cdot 1{,}5\\) og \\(1 \\cdot 75 \\cdot 2\\). Summer til slutt."],
    losning: "<p>Ordinært: \\(37{,}5 \\cdot 75 = 2\\,812{,}50\\) kr.<br>50 %: \\(3{,}5 \\cdot 112{,}50 = 393{,}75\\) kr.<br>100 %: \\(75 \\cdot 2 = 150\\) kr.<br>Brutto: \\(2\\,812{,}50 + 393{,}75 + 150 = 3\\,356{,}25\\) kr.</p>"
  },
  {
    id: "timeliste-verksted",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Tirsdag ble lang",
    utstyr: "Timeliste, klokke og kalkulator",
    hms: "Ingen maskiner. Dette er en regneoppgave. Stemples overtid, skal den være avtalt med den som leder verkstedet.",
    tekst: "<p>Du stempler tirsdag inn 07.00 og ut 16.30. Pausen er 30 minutter. Ordinær dag er 7,5 timer. Resten er overtid med 50 % tillegg. Timelønna di er 100 kr.</p>",
    deler: [
      { tekst: "Hvor mange timer er du på jobb, pause trukket fra?", svar: { verdi: 9, enhet: "h", tol: 0.05 } },
      { tekst: "Hvor mange av timene er overtid?", svar: { verdi: 1.5, enhet: "h", tol: 0.05 } },
      { tekst: "Hva blir bruttolønn for tirsdagen?", svar: { verdi: 975, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Fra 07.00 til 16.30 er 9,5 timer på klokka. Trekk fra pausen.", "Ordinært 7,5 · 100. Overtid 1,5 · 100 · 1,5."],
    losning: "<p>9,5 timer minus 0,5 time pause = 9 timer.<br>Overtid: \\(9 - 7{,}5 = 1{,}5\\) timer.<br>Ordinært: \\(7{,}5 \\cdot 100 = 750\\) kr. Overtid: \\(1{,}5 \\cdot 150 = 225\\) kr. Brutto: 975 kr.</p>"
  },
  {
    id: "rep-desimal",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En lærling jobber 7,5 timer om dagen i 10 dager. Hvor mange timer er det?</p>",
    svar: { verdi: 75, enhet: "h", tol: 0.05 },
    hint: ["Gange med 10: kommaet én plass til høyre.", "\\(7{,}5 \\cdot 10 = 75\\)."],
    losning: "<p>\\(7{,}5 \\cdot 10 = 75\\) timer.</p>"
  },
  {
    id: "rep-enhet",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>1,5 timer er hvor mange minutter?</p>",
    svar: { verdi: 90, enhet: "min", tol: 0.5 },
    hint: ["1 time = 60 minutter. 0,5 time er et halvt time.", "\\(1{,}5 \\cdot 60 = 90\\)."],
    losning: "<p>\\(1{,}5 \\cdot 60 = 90\\) minutter. Ikke 150 minutter.</p>"
  },
  {
    id: "eksamen-timelonn",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En fagarbeider har 160 kr i timen. Han jobber 6,5 ordinære timer og 2 overtidstimer med 50 % tillegg.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er betalingen for én overtidstime?", svar: { verdi: 240, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bruttolønna for dagen?", svar: { verdi: 1520, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["50 % tillegg: gang timelønna med 1,5.", "Ordinært: \\(6{,}5 \\cdot 160 = 1\\,040\\). Overtid: \\(2 \\cdot 240 = 480\\)."],
    losning: "<p>Overtidstime: \\(160 \\cdot 1{,}5 = 240\\) kr.<br>Ordinært: \\(6{,}5 \\cdot 160 = 1\\,040\\) kr.<br>Overtid: \\(2 \\cdot 240 = 480\\) kr.<br>Brutto: \\(1\\,520\\) kr.</p>"
  },
  {
    id: "kveld-100",
    niva: "lett",
    tittel: "Etter klokka 21",
    tekst: "<p>Timelønna er 220 kr. Etter klokka 21 er tillegget 100 %, slik industrioverenskomsten sier fra 1. april 2026.</p>",
    deler: [
      { tekst: "Hvor mange kroner er tillegget per time?", svar: { verdi: 220, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva får du betalt for én slik time?", svar: { verdi: 440, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 220, enhet: "kr" }],
    hint: ["100 % tillegg betyr at tillegget er like stort som timelønna. Betalingen er timelønn ganger 2.", "\\(220 \\cdot 2 = 440\\)."],
    losning: "<p>Tillegg: \\(220\\) kr.<br>Betaling: \\(220 \\cdot 2 = 440\\) kr.</p>"
  },
  {
    id: "fjerde-halvar",
    niva: "lett",
    tittel: "Fjerde halvår, minstesats 2026",
    tekst: "<p>Fra 1. april 2026 er minste timefortjeneste for fagarbeider 232,55 kr. En lærling i fjerde halvår får 80 %.</p>",
    svar: { verdi: 186.04, enhet: "kr", tol: 0.01 },
    steg: [{ verdi: 186.04, enhet: "kr" }],
    hint: ["80 % betyr at du ganger med 0,80.", "\\(232{,}55 \\cdot 0{,}80 = 186{,}04\\)."],
    losning: "<p>\\(232{,}55 \\cdot 0{,}80 = 186{,}04\\) kr per time.</p>"
  },
  {
    id: "aml-fem",
    niva: "middels",
    tittel: "40 % eller 50 %",
    tekst: "<p>Timelønna er 240 kr. Du har 5 overtidstimer før klokka 21. Arbeidsmiljøloven krever minst 40 % tillegg. Industrioverenskomsten 2026–2028 gir 50 % i dette tidsrommet.</p>",
    deler: [
      { tekst: "Hva blir betalingen for de 5 timene med 40 % tillegg?", svar: { verdi: 1680, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir betalingen med 50 % tillegg?", svar: { verdi: 1800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner mer gir 50 % tillegg?", svar: { verdi: 120, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 336, enhet: "kr" }, { verdi: 360, enhet: "kr" }, { verdi: 1680, enhet: "kr" }, { verdi: 1800, enhet: "kr" }],
    hint: ["40 % tillegg: gang med 1,4. 50 % tillegg: gang med 1,5.", "Timepris: \\(240 \\cdot 1{,}4 = 336\\) og \\(240 \\cdot 1{,}5 = 360\\). Gang hver av dem med 5."],
    losning: "<p>40 %: \\(5 \\cdot 240 \\cdot 1{,}4 = 1\\,680\\) kr.<br>50 %: \\(5 \\cdot 240 \\cdot 1{,}5 = 1\\,800\\) kr.<br>Forskjell: \\(1\\,800 - 1\\,680 = 120\\) kr.</p>"
  },
  {
    id: "uke-125",
    niva: "middels",
    tittel: "Uke med to tillegg",
    tekst: "<p>Fagarbeideren har 250 kr i timen. Lærlingen er i tredje halvår og skal ha 50 %, altså 125 kr i timen. Uka har 37,5 ordinære timer, 3 overtidstimer med 50 % tillegg og 1 overtidstime med 100 % tillegg.</p>",
    deler: [
      { tekst: "Hva er den ordinære lønna?", svar: { verdi: 4687.5, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er lønna for 50 %-overtiden?", svar: { verdi: 562.5, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er bruttolønna for uka, når 100 %-timen gir 250 kr?", svar: { verdi: 5500, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 4687.5, enhet: "kr" }, { verdi: 562.5, enhet: "kr" }, { verdi: 250, enhet: "kr" }],
    hint: ["Regn ordinær tid, 50 %-overtid og 100 %-overtid hver for seg. 100 % tillegg betyr timelønn ganger 2.", "Ordinært: \\(37{,}5 \\cdot 125\\). 50 %: \\(3 \\cdot 125 \\cdot 1{,}5\\). 100 %: \\(1 \\cdot 125 \\cdot 2 = 250\\)."],
    losning: "<p>Ordinært: \\(37{,}5 \\cdot 125 = 4\\,687{,}50\\) kr.<br>50 %: \\(3 \\cdot 187{,}50 = 562{,}50\\) kr.<br>100 %: \\(250\\) kr.<br>Brutto: \\(4\\,687{,}50 + 562{,}50 + 250 = 5\\,500\\) kr.</p>"
  },
  {
    id: "pause-lang",
    niva: "middels",
    tittel: "Lang dag med pause",
    tekst: "<p>Du stempler inn 07.00 og ut 17.00. Pausen er 45 minutter, altså 0,75 timer. Ordinær dag er 7,5 timer. Resten er overtid med 50 % tillegg. Timelønna er 180 kr.</p>",
    deler: [
      { tekst: "Hvor mange timer er du på jobb, pause trukket fra?", svar: { verdi: 9.25, enhet: "h", tol: 0.01 } },
      { tekst: "Hvor mange av timene er overtid?", svar: { verdi: 1.75, enhet: "h", tol: 0.01 } },
      { tekst: "Hva blir bruttolønna?", svar: { verdi: 1822.5, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 10, enhet: "h" }, { verdi: 9.25, enhet: "h" }, { verdi: 1.75, enhet: "h" }, { verdi: 1350, enhet: "kr" }, { verdi: 472.5, enhet: "kr" }],
    hint: ["Fra 07.00 til 17.00 er 10 timer på klokka. Trekk fra pausen, og trekk deretter 7,5 ordinære timer.", "Ordinært: \\(7{,}5 \\cdot 180 = 1\\,350\\). Overtid: \\(1{,}75 \\cdot 180 \\cdot 1{,}5 = 472{,}50\\)."],
    losning: "<p>Arbeidstid: \\(10 - 0{,}75 = 9{,}25\\) timer.<br>Overtid: \\(9{,}25 - 7{,}5 = 1{,}75\\) timer.<br>Ordinært: \\(1\\,350\\) kr. Overtid: \\(472{,}50\\) kr.<br>Brutto: \\(1\\,822{,}50\\) kr.</p>"
  },
  {
    id: "minste-tredje",
    niva: "vanskelig",
    tittel: "Tredje halvår på minstesatsen",
    tekst: "<p>Bruk timelønna 116,28 kr. Det er 50 % av minste timefortjeneste 232,55 kr, avrundet til øre, fra 1. april 2026. Uka har 37,5 ordinære timer og 2 overtidstimer med 50 % tillegg.</p>",
    deler: [
      { tekst: "Hva er den ordinære lønna?", svar: { verdi: 4360.5, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er lønna for overtiden?", svar: { verdi: 348.84, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er bruttolønna?", svar: { verdi: 4709.34, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 174.42, enhet: "kr" }, { verdi: 4360.5, enhet: "kr" }, { verdi: 348.84, enhet: "kr" }],
    hint: ["Overtidstimen koster \\(116{,}28 \\cdot 1{,}5\\).", "Ordinært: \\(37{,}5 \\cdot 116{,}28 = 4\\,360{,}50\\). Overtid: \\(2 \\cdot 174{,}42 = 348{,}84\\)."],
    losning: "<p>Overtidsats: \\(116{,}28 \\cdot 1{,}5 = 174{,}42\\) kr.<br>Ordinært: \\(4\\,360{,}50\\) kr.<br>Overtid: \\(348{,}84\\) kr.<br>Brutto: \\(4\\,709{,}34\\) kr.</p>"
  },
  {
    id: "helg-9302",
    niva: "vanskelig",
    tittel: "Mandag, lørdag og søndag",
    tekst: "<p>Lærlingen har 93,02 kr i timen. Det er 40 % av minstesatsen 232,55 kr. Mandag er 7,5 ordinære timer. Lørdag er 3 timer før klokka 21, med 50 % tillegg. Søndag er 4 timer med 100 % tillegg.</p>",
    deler: [
      { tekst: "Hva er lønna for mandagen?", svar: { verdi: 697.65, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er lønna for lørdagen?", svar: { verdi: 418.59, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er lønna for søndagen?", svar: { verdi: 744.16, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er bruttolønna for de tre dagene?", svar: { verdi: 1860.4, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 139.53, enhet: "kr" }, { verdi: 186.04, enhet: "kr" }, { verdi: 697.65, enhet: "kr" }, { verdi: 418.59, enhet: "kr" }, { verdi: 744.16, enhet: "kr" }],
    hint: ["50 % tillegg: gang med 1,5. 100 % tillegg: gang med 2. Regn hver dag for seg.", "Mandag: \\(7{,}5 \\cdot 93{,}02\\). Lørdag: \\(3 \\cdot 93{,}02 \\cdot 1{,}5\\). Søndag: \\(4 \\cdot 93{,}02 \\cdot 2\\)."],
    losning: "<p>Mandag: \\(7{,}5 \\cdot 93{,}02 = 697{,}65\\) kr.<br>Lørdag: \\(3 \\cdot 139{,}53 = 418{,}59\\) kr.<br>Søndag: \\(4 \\cdot 186{,}04 = 744{,}16\\) kr.<br>Sum: \\(697{,}65 + 418{,}59 + 744{,}16 = 1\\,860{,}40\\) kr.</p>"
  }
]);
