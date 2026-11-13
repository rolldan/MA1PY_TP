Bok.oppgaver([
  {
    id: "en-til-fem",
    niva: "lett",
    tekst: "<p>En arbeidstegning er i målestokk 1 : 5. På tegningen er en lengde 8 cm. Hvor lang er den i virkeligheten?</p>",
    svar: { verdi: 40, enhet: "cm" },
    hint: ["1 : 5 betyr at virkeligheten er 5 ganger tegningen.", "8 · 5 = 40 cm."],
    losning: "<p>\\(8 \\cdot 5 = 40\\) cm.</p>"
  },
  {
    id: "forstorrelse",
    niva: "lett",
    tekst: "<p>En pinne er 12 mm lang. Tegningen skal være i 5 : 1. Hvor lang blir pinnen på arket?</p>",
    svar: { verdi: 60, enhet: "mm" },
    hint: ["5 : 1 betyr at tegningen er 5 ganger så lang som tingen.", "12 · 5 = 60 mm."],
    losning: "<p>\\(12 \\cdot 5 = 60\\) mm på tegningen. I verkstedet er pinnen fortsatt 12 mm.</p>"
  },
  {
    id: "halv-lengde",
    niva: "lett",
    tekst: "<p>En kant er 110 mm i virkeligheten. Hvor lang er den på en modell i målestokk 1 : 2?</p>",
    svar: { verdi: 55, enhet: "mm" },
    hint: ["1 : 2 halverer alle lengder.", "110 : 2 = 55 mm."],
    losning: "<p>\\(110 : 2 = 55\\) mm.</p>"
  },
  {
    id: "kasse-tegning",
    niva: "middels",
    tekst: "<p>På en tegning i 1 : 5 er en kasse 8 cm lang, 5 cm bred og 4 cm høy.</p>",
    deler: [
      { tekst: "Hvor lang er kassen i virkeligheten?", svar: { verdi: 40, enhet: "cm" } },
      { tekst: "Hvor bred er den?", svar: { verdi: 25, enhet: "cm" } },
      { tekst: "Hvor høy er den?", svar: { verdi: 20, enhet: "cm" } },
      { tekst: "Hvor mange liter rommer den?", svar: { verdi: 20, enhet: "L" } }
    ],
    hint: ["Gang hvert tegnemål med 5. Volum er de tre virkelige målene ganget sammen.", "40 · 25 · 20 = 20 000 cm³ = 20 L."],
    losning: "<p>Virkelige mål: 40 cm, 25 cm og 20 cm.<br>\\(40 \\cdot 25 \\cdot 20 = 20\\,000\\) cm³ \\(= 20\\) L.</p>"
  },
  {
    id: "modell-volum",
    niva: "middels",
    tittel: "Målestokk-fellen",
    tekst: "<p>Brusboksen er 11 cm × 6 cm × 5 cm innvendig, altså 330 cm³. Modellen lages i 1 : 2.</p>",
    deler: [
      { tekst: "Hvor stort er volumet av modellen?", svar: { verdi: 41.25, enhet: "cm³", tol: 0.3 } },
      { tekst: "Hva er feil med å svare 165 cm³?", svar: { valg: ["165 er halvparten. I 1 : 2 blir volumet en åttedel", "165 er bare litt unøyaktig", "165 cm³ er riktig for areal, ikke for volum"], riktig: 0 } }
    ],
    hint: ["Halver alle tre sider, og gang dem. Eller del 330 på 8.", "5,5 · 3 · 2,5 = 41,25 cm³. 330 : 2 = 165 er målestokk-fellen."],
    losning: "<p>\\(5{,}5 \\cdot 3 \\cdot 2{,}5 = 41{,}25\\) cm³ \\(= 330 / 8\\). 165 cm³ hadde vært rett om bare volumet skulle halveres. Det skal det ikke.</p>"
  },
  {
    id: "areal-skala",
    niva: "middels",
    tekst: "<p>På en tegning i 1 : 5 er arealet av en flate 20 cm². Hvor stort er arealet i virkeligheten?</p>",
    svar: { verdi: 500, enhet: "cm²" },
    hint: ["Lengdefaktoren er 5. Arealfaktoren er 5 · 5 = 25.", "20 · 25 = 500 cm²."],
    losning: "<p>\\(20 \\cdot 5^2 = 500\\) cm².</p>"
  },
  {
    id: "begge-rett",
    niva: "middels",
    tekst: "<p>Målestokken på et kart er 1 : 50. Én sier at 1 cm på kartet er 50 cm i virkeligheten. En annen sier at 1 m på kartet er 50 m i virkeligheten.</p>",
    stegForSteg: false,
    svar: { valg: ["Begge har rett. Det er samme forhold", "Bare den første", "Bare den andre", "Ingen av dem"], riktig: 0, forklaring: "1 : 50 gjelder uansett hvilken lengdeenhet du bruker, så lenge den er den samme på begge sider." },
    hint: ["Et forhold er det samme om du måler i cm eller i m.", "1 cm mot 50 cm er det samme forholdet som 1 m mot 50 m."],
    losning: "<p>Begge har rett. 1 : 50 betyr at virkeligheten er 50 ganger kartet, i samme enhet.</p>"
  },
  {
    id: "dobbel-malestokk",
    niva: "vanskelig",
    tekst: "<p>Modellen din er allerede i 1 : 2. En medelev tegner modellen på nytt i målestokk 1 : 2. Den nye tegningen sammenlignes med den virkelige boksen, som har en kant på 80 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvilken målestokk har den nye tegningen mot virkeligheten?", svar: { valg: ["1 : 4", "1 : 2", "1 : 1", "2 : 1"], riktig: 0 } },
      { tekst: "Hvor lang blir kanten på den nye tegningen?", svar: { verdi: 20, enhet: "mm" } }
    ],
    hint: ["Halvering to ganger er det samme som å dele på 4.", "80 : 4 = 20 mm. En ekte 1 : 2-tegning ville vist 40 mm."],
    losning: "<p>To ganger 1 : 2 blir 1 : 4 mot virkeligheten. \\(80 : 4 = 20\\) mm på den nye tegningen.</p>"
  },
  {
    id: "sandtest",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Sand i modellen",
    utstyr: "Ferdig modell i 1 : 2, målebeger, tørr sand eller sagflis",
    hms: "Laserkutter bare med godkjenning og avsug på. Sand på gulvet kostes opp. Ikke blås spon mot andre.",
    tekst: "<p>Modellen av boksen 11 cm × 6 cm × 5 cm er laget i 1 : 2. Hvor mange milliliter sand skal den romme? 1 cm³ = 1 ml. Fyll etterpå og sammenlign.</p>",
    svar: { verdi: 41.25, enhet: "ml", tol: 0.5 },
    hint: ["Samme tall som volumet i cm³. Volumet er 330 : 8.", "41,25 ml, ikke 165 ml."],
    losning: "<p>\\(330 / 8 = 41{,}25\\) cm³ \\(= 41{,}25\\) ml. Er begeret langt unna, er modellen feil målestokk eller utett.</p>"
  },
  {
    id: "rep-forhold",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Frostvæske og vann blandes 2 : 3. Du skal lage 20 dl blanding. Hvor mye frostvæske går med?</p>",
    svar: { verdi: 8, enhet: "dl" },
    hint: ["2 + 3 = 5 deler. Én del er 20 : 5.", "2 · 4 = 8 dl frostvæske. Vannet er 12 dl."],
    losning: "<p>\\(20 : 5 = 4\\) dl per del. Frostvæske: \\(2 \\cdot 4 = 8\\) dl.</p>"
  },
  {
    id: "eks-malestokk",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To tegninger. Regn lengden i virkeligheten.</p>",
    deler: [
      { tekst: "Målestokk 1 : 20. En vegg er 15 cm på tegningen. Hvor lang er veggen?", svar: { verdi: 3, enhet: "m" } },
      { tekst: "Målestokk 2 : 1. Et mål er 36 mm på tegningen. Hvor langt er det i virkeligheten?", svar: { verdi: 18, enhet: "mm" } }
    ],
    hint: ["1 : 20: gang med 20, og gjør cm om til m. 2 : 1: del på 2.", "15 · 20 = 300 cm = 3 m. 36 : 2 = 18 mm."],
    losning: "<p>a) \\(15 \\cdot 20 = 300\\) cm \\(= 3\\) m.<br>b) \\(36 : 2 = 18\\) mm.</p>"
  },
  {
    id: "tegning-450",
    niva: "lett",
    tekst: "<p>En arbeidstegning er i målestokk 1 : 10. En lengde på arket er 45 mm. Hvor lang er den i virkeligheten?</p>",
    svar: { verdi: 450, enhet: "mm" },
    hint: ["1 : 10 betyr at virkeligheten er 10 ganger tegningen.", "45 · 10 = 450 mm."],
    losning: "<p>\\(45 \\cdot 10 = 450\\) mm, altså 45 cm.</p>"
  },
  {
    id: "hull-forstor",
    niva: "lett",
    tekst: "<p>Et hull er 4 mm i virkeligheten. Det skal tegnes i målestokk 2 : 1. Hvor stort blir hullet på arket?</p>",
    svar: { verdi: 8, enhet: "mm" },
    hint: ["2 : 1 betyr at tegningen er dobbelt så stor som delen.", "4 · 2 = 8 mm. Hullet i delen er fortsatt 4 mm."],
    losning: "<p>\\(4 \\cdot 2 = 8\\) mm på tegningen. I verkstedet borer du 4 mm, ikke 8 mm.</p>"
  },
  {
    id: "areal-faktor",
    niva: "lett",
    tittel: "Hva skjer med arealet?",
    tekst: "<p>En plate lages som modell i målestokk 1 : 2. Hva skjer med arealet?</p>",
    stegForSteg: false,
    svar: { valg: ["Det blir en fjerdedel", "Det blir halvparten", "Det blir en åttedel", "Det blir uendret"], riktig: 0, forklaring: "Lengde ganger 1/2, så areal ganger 1/2 · 1/2 = 1/4." },
    hint: ["Lengdefaktoren er 1/2. Areal har to lengder.", "1/2 · 1/2 = 1/4. En åttedel gjelder volum, ikke areal."],
    losning: "<p>Arealet blir en fjerdedel. Volumet blir en åttedel. Halvparten er bare riktig for lengder.</p>"
  },
  {
    id: "tank-modell",
    niva: "middels",
    tittel: "Tank i 1 : 10",
    tekst: "<p>En tank rommer 400 L. Modellen i makerspace lages i målestokk 1 : 10.</p>",
    deler: [
      { tekst: "Hvor mange liter skal modellen romme?", svar: { verdi: 0.4, enhet: "L" } },
      { tekst: "Hva er feil med å svare 40 L?", svar: { valg: ["40 L er volum delt på 10. Volum skal deles på 1000", "40 L er bare avrundet litt feil", "40 L er riktig for en modell i 1 : 10"], riktig: 0 } }
    ],
    hint: ["Lengdefaktoren er 1/10. Volumfaktoren er 1/10 · 1/10 · 1/10.", "400 : 1000 = 0,4 L. 400 : 10 = 40 L er målestokk-fellen på volum."],
    losning: "<p>\\(400 / 10^3 = 0{,}4\\) L. 40 L hadde vært rett om bare én lengde skulle deles på 10. Volumet skal deles på 1000.</p>"
  },
  {
    id: "kasse-1-2",
    niva: "middels",
    tekst: "<p>På en tegning i 1 : 2 er en kasse 70 mm lang, 40 mm bred og 30 mm høy.</p>",
    steg: [{ verdi: 140, enhet: "mm" }, { verdi: 80, enhet: "mm" }, { verdi: 60, enhet: "mm" }],
    deler: [
      { tekst: "Hvor lang er kassen i virkeligheten?", svar: { verdi: 140, enhet: "mm" } },
      { tekst: "Hvor stort er volumet i virkeligheten?", svar: { verdi: 672, enhet: "cm³" } }
    ],
    hint: ["Gang hvert mål med 2. Gang deretter de tre virkelige målene, og gjør mm³ om til cm³.", "140 · 80 · 60 = 672 000 mm³ = 672 cm³."],
    losning: "<p>Virkelige mål: 140 mm, 80 mm og 60 mm.<br>\\(140 \\cdot 80 \\cdot 60 = 672\\,000\\) mm³ \\(= 672\\) cm³.</p>"
  },
  {
    id: "plate-08",
    niva: "middels",
    tekst: "<p>En plate har areal 2 m². Hvor stort blir arealet på en tegning i målestokk 1 : 5?</p>",
    steg: [{ verdi: 25 }],
    svar: { verdi: 0.08, enhet: "m²" },
    hint: ["Lengdefaktoren er 1/5. Arealfaktoren er 1/25.", "2 : 25 = 0,08 m²."],
    losning: "<p>\\(2 / 5^2 = 2 / 25 = 0{,}08\\) m². Å dele på 5 hadde gitt 0,4 m², og det er lengdefellen.</p>"
  },
  {
    id: "utskrift-1-10",
    niva: "vanskelig",
    tittel: "Målestokk brukt to ganger",
    tekst: "<p>En kant er 250 mm på delen. Modellen er laget i 1 : 5. En medelev skriver ut modellen på nytt i målestokk 1 : 2, og sammenligner utskriften med den virkelige delen.</p>",
    deler: [
      { tekst: "Hvilken målestokk har utskriften mot delen?", svar: { valg: ["1 : 10", "1 : 5", "1 : 2", "1 : 7"], riktig: 0 } },
      { tekst: "Hvor lang er kanten på utskriften?", svar: { verdi: 25, enhet: "mm" } }
    ],
    hint: ["Dele på 5 og deretter på 2 er det samme som å dele på 10.", "250 : 5 = 50 mm på modellen. 50 : 2 = 25 mm på utskriften."],
    losning: "<p>To forminskinger, 1 : 5 og deretter 1 : 2, blir 1 : 10 mot delen. \\(250 : 10 = 25\\) mm på utskriften.</p>"
  },
  {
    id: "ml-feil",
    niva: "vanskelig",
    tittel: "Sand i 1 : 10",
    tekst: "<p>En boks er 20 cm × 10 cm × 10 cm. Modellen lages i 1 : 10. 1 cm³ = 1 ml.</p>",
    steg: [{ verdi: 2000, enhet: "cm³" }, { verdi: 2, enhet: "cm" }],
    deler: [
      { tekst: "Hvor mange milliliter skal modellen romme?", svar: { verdi: 2, enhet: "ml" } },
      { tekst: "En medelev heller i 200 ml. Hva har hen gjort?", svar: { valg: ["Delt volumet på 10 i stedet for på 1000", "Regnet helt riktig", "Brukt målestokk 1 : 2"], riktig: 0 } }
    ],
    hint: ["Volumet av boksen er 20 · 10 · 10 cm³. Modellen skal ha en tusendel.", "2000 : 1000 = 2 cm³ = 2 ml. 2000 : 10 = 200 ml er feil faktor."],
    losning: "<p>Boksen er \\(20 \\cdot 10 \\cdot 10 = 2000\\) cm³. Modellen: \\(2000 / 1000 = 2\\) ml. 200 ml er volumet delt på 10, altså lengdefaktoren brukt på volumet.</p>"
  }
]);
