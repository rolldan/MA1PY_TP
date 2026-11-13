Bok.oppgaver([
  {
    id: "omgjoring",
    niva: "lett",
    tittel: "Prosent og desimal",
    tekst: "<p>Skriv om.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "50 % som desimaltall", svar: { verdi: 0.5 } },
      { tekst: "8 % som desimaltall", svar: { verdi: 0.08 } },
      { tekst: "0,4 som prosent", svar: { verdi: 40, enhet: "%" } }
    ],
    hint: ["Fra prosent til desimal: flytt kommaet to plasser til venstre.", "50 % = 0,50 = 0,5. 8 % = 0,08. 0,4 = 40 %."],
    losning: "<p>a) 0,5 b) 0,08 c) 40 %</p>"
  },
  {
    id: "del-av",
    niva: "lett",
    tekst: "<p>Regn ut delen.</p>",
    deler: [
      { tekst: "10 % av 4000 hjulbolter", svar: { verdi: 400, enhet: "stk" } },
      { tekst: "25 % av 80 elektroder", svar: { verdi: 20, enhet: "stk" } },
      { tekst: "50 % av 60 kunder", svar: { verdi: 30, enhet: "stk" } }
    ],
    hint: ["Skriv prosenten som desimaltall og gang med helheten.", "10 % = 0,10. \\(4000 \\cdot 0{,}10 = 400\\)."],
    losning: "<p>a) \\(4000 \\cdot 0{,}10 = 400\\) b) \\(80 \\cdot 0{,}25 = 20\\) c) \\(60 \\cdot 0{,}5 = 30\\)</p>"
  },
  {
    id: "vrak-16",
    niva: "lett",
    tekst: "<p>4 av 16 emner i en kasse er vraket. Hvor mange prosent er vraket?</p>",
    svar: { verdi: 25, enhet: "%" },
    hint: ["Delen er 4, helheten er 16.", "\\(4 : 16 = 0{,}25 = 25\\) %."],
    losning: "<p>\\(4 : 16 \\cdot 100 = 25\\) %.</p>"
  },
  {
    id: "hjulbolter",
    niva: "middels",
    tittel: "Lageret",
    tekst: "<p>På lageret ligger 4000 hjulbolter. 74 % blir solgt.</p>",
    steg: [{ verdi: 0.74 }],
    deler: [
      { tekst: "Hvor mange bolter blir solgt?", svar: { verdi: 2960, enhet: "stk" } },
      { tekst: "Hvor mange er igjen?", svar: { verdi: 1040, enhet: "stk" } }
    ],
    hint: ["74 % = 0,74. Gang med 4000.", "\\(4000 \\cdot 0{,}74 = 2960\\). Resten er \\(4000 - 2960\\)."],
    losning: "<p>Solgt: \\(4000 \\cdot 0{,}74 = 2960\\) bolter.<br>Igjen: \\(4000 - 2960 = 1040\\) bolter.</p>"
  },
  {
    id: "bremser",
    niva: "middels",
    tekst: "<p>20 kunder har feil på bremsene. Det er \\(\\dfrac{1}{3}\\) av alle kundene den uka. Hvor mange kunder var innom til sammen?</p>",
    svar: { verdi: 60, enhet: "stk" },
    hint: ["20 er én av tre like deler. Helheten er tre slike deler.", "\\(20 \\cdot 3 = 60\\)."],
    losning: "<p>\\(20 \\cdot 3 = 60\\) kunder. Sjekk: en tredel av 60 er 20.</p>"
  },
  {
    id: "svinn-plate",
    niva: "middels",
    tekst: "<p>En plate veier 8,0 kg. De ferdige delene veier 6,4 kg.</p>",
    steg: [{ verdi: 1.6, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange kilogram er svinn?", svar: { verdi: 1.6, enhet: "kg" } },
      { tekst: "Hvor mange prosent er svinnet, av plata?", svar: { verdi: 20, enhet: "%" } }
    ],
    hint: ["Svinn = start − ferdig. Prosenten er svinnet delt på startvekta.", "\\(8{,}0 - 6{,}4 = 1{,}6\\) kg. \\(1{,}6 : 8{,}0 \\cdot 100 = 20\\) %."],
    losning: "<p>Svinn: \\(1{,}6\\) kg. Prosent: \\(1{,}6 : 8 \\cdot 100 = 20\\) %.</p>"
  },
  {
    id: "relativ",
    niva: "middels",
    tittel: "Relativ usikkerhet",
    tekst: "<p>Et målebånd har usikkerhet \\(\\pm 1\\) mm. Du måler en lengde på 200 mm. Hvor stor er den relative usikkerheten i prosent?</p>",
    svar: { verdi: 0.5, enhet: "%" },
    hint: ["Del usikkerheten på målet, og gang med 100.", "\\(1 : 200 \\cdot 100 = 0{,}5\\) %."],
    losning: "<p>\\(1 : 200 \\cdot 100 = 0{,}5\\) %.</p>"
  },
  {
    id: "finn-hel",
    niva: "vanskelig",
    tekst: "<p>18 vrakede deler er 6 % av et parti. Hvor mange deler var det i partiet?</p>",
    steg: [{ verdi: 0.06 }],
    svar: { verdi: 300, enhet: "stk" },
    hint: ["Du kjenner delen og prosenten. Helheten = delen delt på desimaltallet.", "6 % = 0,06. \\(18 : 0{,}06 = 300\\)."],
    losning: "<p>\\(18 : 0{,}06 = 300\\) deler. Sjekk: 6 % av 300 er 18.</p>"
  },
  {
    id: "rustne",
    niva: "vanskelig",
    tekst: "<p>Av 4000 hjulbolter er 74 % solgt. Av dem som er igjen, er 25 % rustne. Hvor mange rustne bolter er det?</p>",
    steg: [{ verdi: 2960, enhet: "stk" }, { verdi: 1040, enhet: "stk" }],
    svar: { verdi: 260, enhet: "stk" },
    hint: ["Finn først hvor mange som er igjen. Så tar du 25 % av det tallet.", "Igjen: \\(4000 - 2960 = 1040\\). \\(1040 \\cdot 0{,}25 = 260\\)."],
    losning: "<p>Solgt: 2960. Igjen: 1040. Rustne: \\(1040 \\cdot 0{,}25 = 260\\).</p>"
  },
  {
    id: "kapp-stang",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Kapp av en stang",
    utstyr: "Målebånd, kappet stang eller plate, hansker",
    hms: "Ikke start sag eller kutter uten lærer. Bruk hansker mot grader.",
    tekst: "<p>En stang var 2500 mm. De ferdige bitene er til sammen 2000 mm. Resten er kapp. Hvor mange prosent av stanga er svinn?</p>",
    steg: [{ verdi: 500, enhet: "mm" }],
    svar: { verdi: 20, enhet: "%" },
    hint: ["Finn kapplengden først. Del den på den opprinnelige lengden.", "\\(2500 - 2000 = 500\\) mm. \\(500 : 2500 \\cdot 100 = 20\\) %."],
    losning: "<p>Svinn: 500 mm. \\(500 : 2500 \\cdot 100 = 20\\) %.</p>"
  },
  {
    id: "rep-meter",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stang på tegningen er 2450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m" },
    hint: ["1 m = 1000 mm. Fra mm til m deler du med 1000.", "\\(2450 : 1000 = 2{,}45\\) m."],
    losning: "<p>\\(2450 : 1000 = 2{,}45\\) m.</p>"
  },
  {
    id: "rep-godkjent",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "middels",
    tekst: "<p>Kravet er \\(72 \\pm 0{,}3\\) mm. Et mål er 71,8 mm.</p>",
    deler: [
      { tekst: "Hvor stort er avviket fra 72 mm, i millimeter?", svar: { verdi: 0.2, enhet: "mm" } },
      { tekst: "Er målet godkjent?", svar: { valg: ["Ja, innenfor toleransen", "Nei, under nedre grensemål"], riktig: 0 } }
    ],
    hint: ["Nedre grensemål er 72 − 0,3. Sammenlign 71,8 med det.", "Avviket er 0,2 mm. Nedre grense er 71,7 mm, så 71,8 er innenfor."],
    losning: "<p>Avviket er 0,2 mm. Nedre grensemål er 71,7 mm. 71,8 mm er godkjent.</p>"
  },
  {
    id: "eksamen-lager",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To korte regnestykker uten kalkulator.</p>",
    deler: [
      { tekst: "240 av 800 skruer er brukt. Hvor mange prosent er brukt?", svar: { verdi: 30, enhet: "%" } },
      { tekst: "6 personer er 20 % av laget på verkstedet. Hvor mange er det i laget?", svar: { verdi: 30, enhet: "stk" } }
    ],
    hint: ["a) Del 240 på 800. b) 20 % = 1/5, så helheten er 6 ganget med 5.", "\\(240 : 800 = 0{,}30\\). \\(6 : 0{,}20 = 30\\)."],
    losning: "<p>a) \\(240 : 800 \\cdot 100 = 30\\) %<br>b) \\(6 : 0{,}20 = 30\\) personer</p>"
  }
]);
