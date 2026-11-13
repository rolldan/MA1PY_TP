Bok.oppgaver([
  {
    id: "drill-tid",
    niva: "lett",
    tittel: "Minutter og timer",
    tekst: "<p>60 minutter = 1 time. Del minutter på 60 når du vil ha desimaltimer.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "90 minutter i timer", svar: { verdi: 1.5, enhet: "h" } },
      { tekst: "45 minutter i timer", svar: { verdi: 0.75, enhet: "h" } },
      { tekst: "15 minutter i timer", svar: { verdi: 0.25, enhet: "h" } },
      { tekst: "2 timer i minutter", svar: { verdi: 120, enhet: "min" } }
    ],
    hint: ["Del med 60 fra minutter til timer. Gang med 60 fra timer til minutter.", "\\(90 : 60 = 1{,}5\\). \\(45 : 60 = 0{,}75\\). \\(15 : 60 = 0{,}25\\)."],
    losning: "<p>a) 1,5 h &nbsp; b) 0,75 h &nbsp; c) 0,25 h &nbsp; d) 120 min</p>"
  },
  {
    id: "drill-fart",
    niva: "lett",
    tittel: "km/h og m/s",
    tekst: "<p>Del km/h med 3,6 for å få m/s.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "36 km/h i m/s", svar: { verdi: 10, enhet: "m/s" } },
      { tekst: "72 km/h i m/s", svar: { verdi: 20, enhet: "m/s" } },
      { tekst: "10 m/s i km/h", svar: { verdi: 36, enhet: "km/h" } }
    ],
    hint: ["km/h til m/s: del med 3,6. m/s til km/h: gang med 3,6.", "\\(36 : 3{,}6 = 10\\). \\(72 : 3{,}6 = 20\\)."],
    losning: "<p>a) 10 m/s &nbsp; b) 20 m/s &nbsp; c) 36 km/h</p>"
  },
  {
    id: "varebil",
    niva: "middels",
    tekst: "<p>Varebilen kjører 54 km på 45 minutter.</p>",
    steg: [{ verdi: 0.75, enhet: "h" }],
    svar: { verdi: 72, enhet: "km/h" },
    hint: ["Gjør 45 minutter om til timer først.", "\\(45 : 60 = 0{,}75\\) h. \\(54 : 0{,}75 = 72\\) km/h."],
    losning: "<p>\\(45\\ \\text{min} = 0{,}75\\ \\text{h}\\).<br>\\(v = 54 : 0{,}75 = 72\\) km/h.</p>"
  },
  {
    id: "timepris",
    niva: "middels",
    tekst: "<p>En jobb tar 1 time og 24 minutter. Timeprisen er 210 kr.</p>",
    steg: [{ verdi: 1.4, enhet: "h" }],
    deler: [
      { tekst: "Hvor mange desimaltimer er jobben?", svar: { verdi: 1.4, enhet: "h" } },
      { tekst: "Hva koster jobben?", svar: { verdi: 294, enhet: "kr" } }
    ],
    hint: ["24 minutter delt på 60 er desimalen. Pris = timer · timepris.", "\\(24 : 60 = 0{,}4\\), så 1,4 h. \\(1{,}4 \\cdot 210 = 294\\) kr."],
    losning: "<p>\\(1 + 24/60 = 1{,}4\\) h.<br>\\(1{,}4 \\cdot 210 = 294\\) kr.</p>"
  },
  {
    id: "fem-to",
    niva: "middels",
    tittel: "5,2 timer",
    tekst: "<p>En kjøretur tar 5,2 timer.</p>",
    deler: [
      { tekst: "Hvor mange minutter er desimalen 0,2?", svar: { verdi: 12, enhet: "min" } },
      { tekst: "Hva er riktig klokkeslett-form?", svar: { valg: ["5 t 20 min", "5 t 12 min", "5 t 2 min"], riktig: 1, forklaring: "0,2 · 60 = 12 minutter." } }
    ],
    hint: ["Gang desimalen med 60. Ikke les «2» som 20 minutter.", "\\(0{,}2 \\cdot 60 = 12\\) min."],
    losning: "<p>\\(0{,}2 \\cdot 60 = 12\\) min. 5,2 h = 5 t 12 min.</p>"
  },
  {
    id: "mating",
    niva: "middels",
    tekst: "<p>Dreiebenken mater 120 mm/min. Kuttet er 360 mm langt.</p>",
    deler: [
      { tekst: "Hvor mange minutter tar kuttet?", svar: { verdi: 3, enhet: "min" } },
      { tekst: "Hvor mange desimaltimer er det?", svar: { verdi: 0.05, enhet: "h" } }
    ],
    hint: ["Tid = lengde / mating. Deretter del minutter på 60.", "\\(360 : 120 = 3\\) min. \\(3 : 60 = 0{,}05\\) h."],
    losning: "<p>\\(360 : 120 = 3\\) min \\(= 0{,}05\\) h.</p>"
  },
  {
    id: "to-etapper",
    niva: "vanskelig",
    tekst: "<p>En servicebil kjører 15 km i 60 km/h og deretter 20 km i 80 km/h. Ingen pause.</p>",
    steg: [{ verdi: 0.25, enhet: "h" }],
    deler: [
      { tekst: "Hvor mange minutter tar første etappe?", svar: { verdi: 15, enhet: "min" } },
      { tekst: "Hvor mange minutter tar andre etappe?", svar: { verdi: 15, enhet: "min" } },
      { tekst: "Hvor mange minutter tar turen til sammen?", svar: { verdi: 30, enhet: "min" } }
    ],
    hint: ["Tid = strekning / fart. 0,25 timer er 15 minutter.", "\\(15 : 60 = 0{,}25\\) h = 15 min. \\(20 : 80 = 0{,}25\\) h = 15 min. Sum 30 min."],
    losning: "<p>Første: \\(15 : 60 = 0{,}25\\) h = 15 min.<br>Andre: \\(20 : 80 = 0{,}25\\) h = 15 min.<br>Til sammen 30 min.</p>"
  },
  {
    id: "tralle",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Tiden på tralla",
    utstyr: "Målebånd, stoppeklokke eller telefonen i flymodus, kritt",
    hms: "Gå, ikke løp med tralle. Fri bane, ingen krysser målstreken mens andre måler. Telefonen tilbake i kassa etterpå.",
    tekst: "<p>I eksemplet bruker tralla 16 sekunder på 40 m. Hvor stor fart er det i m/s, og i km/h? Mål en egen strekning i verkstedet og skriv den i skjemaet.</p>",
    deler: [
      { tekst: "Fart i m/s for 40 m på 16 s", svar: { verdi: 2.5, enhet: "m/s" } },
      { tekst: "Samme fart i km/h", svar: { verdi: 9, enhet: "km/h" } }
    ],
    hint: ["m/s = meter / sekunder. Gang med 3,6 for å få km/h.", "\\(40 : 16 = 2{,}5\\) m/s. \\(2{,}5 \\cdot 3{,}6 = 9\\) km/h."],
    losning: "<p>\\(40 : 16 = 2{,}5\\) m/s.<br>\\(2{,}5 \\cdot 3{,}6 = 9\\) km/h.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En platebit skal være 0,25 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 250, enhet: "mm" },
    hint: ["Meter til millimeter: gang med 1000.", "\\(0{,}25 \\cdot 1000 = 250\\) mm."],
    losning: "<p>\\(0{,}25 \\cdot 1000 = 250\\) mm.</p>"
  },
  {
    id: "rep-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Jobben var satt opp til 2 timer og tok 2,5 timer. Hvor mange prosent lenger tid ble det?</p>",
    svar: { verdi: 25, enhet: "%" },
    hint: ["Økningen delt på den opprinnelige tiden, ganger 100.", "\\(0{,}5 : 2 = 0{,}25 = 25\\) %."],
    losning: "<p>Økning \\(2{,}5 - 2 = 0{,}5\\) h.<br>\\(0{,}5 : 2 = 0{,}25 = 25\\) %.</p>"
  },
  {
    id: "eksamen-fart",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En tur tar 1 time og 15 minutter. Strekningen er 30 km.</p>",
    steg: [{ verdi: 1.25, enhet: "h" }],
    deler: [
      { tekst: "Hvor mange desimaltimer tar turen?", svar: { verdi: 1.25, enhet: "h" } },
      { tekst: "Hva er farten i km/h?", svar: { verdi: 24, enhet: "km/h" } }
    ],
    hint: ["15 minutter er 0,25 timer. Fart = strekning / tid.", "\\(1 + 15/60 = 1{,}25\\) h. \\(30 : 1{,}25 = 24\\) km/h."],
    losning: "<p>\\(1{,}25\\) h.<br>\\(30 : 1{,}25 = 24\\) km/h.</p>"
  }
]);
