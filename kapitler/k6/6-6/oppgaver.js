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
  }
]);
