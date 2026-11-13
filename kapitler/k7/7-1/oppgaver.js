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
  }
]);
