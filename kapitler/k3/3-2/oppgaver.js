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
  },
  {
    id: "desimal-mer",
    niva: "lett",
    tittel: "Flere omgjøringer",
    tekst: "<p>Skriv om.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "12,5 % som desimaltall", svar: { verdi: 0.125 } },
      { tekst: "1,5 % som desimaltall", svar: { verdi: 0.015 } },
      { tekst: "0,08 som prosent", svar: { verdi: 8, enhet: "%" } },
      { tekst: "\\(\\dfrac{2}{5}\\) som prosent", svar: { verdi: 40, enhet: "%" } }
    ],
    hint: ["Prosent til desimal: flytt kommaet to plasser til venstre. Brøk til prosent: del teller på nevner.", "12,5 % = 0,125. 1,5 % = 0,015. \\(2 : 5 = 0{,}4 = 40\\) %."],
    losning: "<p>a) 0,125 b) 0,015 c) 8 % d) 40 %</p>"
  },
  {
    id: "del-enkel",
    niva: "lett",
    tittel: "Delen av lageret",
    tekst: "<p>Regn ut delen.</p>",
    deler: [
      { tekst: "20 % av 250 elektroder", svar: { verdi: 50, enhet: "stk" } },
      { tekst: "5 % av 80 kr", svar: { verdi: 4, enhet: "kr" } },
      { tekst: "75 % av 40 plater", svar: { verdi: 30, enhet: "stk" } }
    ],
    hint: ["Skriv prosenten som desimaltall og gang med helheten.", "20 % = 0,20. \\(250 \\cdot 0{,}20 = 50\\)."],
    losning: "<p>a) \\(250 \\cdot 0{,}20 = 50\\)<br>b) \\(80 \\cdot 0{,}05 = 4\\)<br>c) \\(40 \\cdot 0{,}75 = 30\\)</p>"
  },
  {
    id: "porose",
    niva: "lett",
    tekst: "<p>3 av 12 sveiser er porøse. Hvor mange prosent er porøse?</p>",
    svar: { verdi: 25, enhet: "%" },
    hint: ["Delen er 3, helheten er 12.", "\\(3 : 12 = 0{,}25 = 25\\) %."],
    losning: "<p>\\(3 : 12 \\cdot 100 = 25\\) %.</p>"
  },
  {
    id: "bremser-35",
    niva: "middels",
    tittel: "Bremseklosser",
    tekst: "<p>I løpet av en uke er 80 biler innom. 35 % trenger nye bremseklosser.</p>",
    steg: [{ verdi: 0.35 }],
    deler: [
      { tekst: "Hvor mange biler trenger nye klosser?", svar: { verdi: 28, enhet: "stk" } },
      { tekst: "Hvor mange trenger ikke nye klosser?", svar: { verdi: 52, enhet: "stk" } }
    ],
    hint: ["35 % = 0,35. Gang med 80, og trekk fra 80.", "\\(80 \\cdot 0{,}35 = 28\\). Resten er \\(80 - 28\\)."],
    losning: "<p>Nye klosser: \\(80 \\cdot 0{,}35 = 28\\) biler.<br>Uten: \\(80 - 28 = 52\\) biler.</p>"
  },
  {
    id: "plate-18",
    niva: "middels",
    tittel: "Svinn på plata",
    tekst: "<p>En stålplate veier 18,0 kg. De ferdige delene veier 15,3 kg.</p>",
    steg: [{ verdi: 2.7, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange kilogram er svinn?", svar: { verdi: 2.7, enhet: "kg" } },
      { tekst: "Hvor mange prosent er svinnet, av plata?", svar: { verdi: 15, enhet: "%" } }
    ],
    hint: ["Svinn = start − ferdig. Del svinnet på startvekta.", "\\(18{,}0 - 15{,}3 = 2{,}7\\) kg. \\(2{,}7 : 18 \\cdot 100 = 15\\) %."],
    losning: "<p>Svinn: 2,7 kg. Prosent: \\(2{,}7 : 18 \\cdot 100 = 15\\) %.</p>"
  },
  {
    id: "mal-band",
    niva: "middels",
    tittel: "Usikkerhet på målebånd",
    tekst: "<p>Et målebånd har usikkerhet \\(\\pm 0{,}5\\) mm. Du måler en lengde på 250 mm. Hvor stor er den relative usikkerheten i prosent?</p>",
    svar: { verdi: 0.2, enhet: "%" },
    hint: ["Del usikkerheten på målet, og gang med 100.", "\\(0{,}5 : 250 \\cdot 100 = 0{,}2\\) %."],
    losning: "<p>\\(0{,}5 : 250 \\cdot 100 = 0{,}2\\) %.</p>"
  },
  {
    id: "parti-32",
    niva: "vanskelig",
    tekst: "<p>32 vrakede deler er 8 % av et parti. Hvor mange deler var det i partiet?</p>",
    steg: [{ verdi: 0.08 }],
    svar: { verdi: 400, enhet: "stk" },
    hint: ["Du kjenner delen og prosenten. Helheten = delen delt på desimaltallet.", "8 % = 0,08. \\(32 : 0{,}08 = 400\\)."],
    losning: "<p>\\(32 : 0{,}08 = 400\\) deler. Sjekk: 8 % av 400 er 32.</p>"
  },
  {
    id: "feil-mal",
    niva: "vanskelig",
    tittel: "To prosent etter hverandre",
    tekst: "<p>Av 500 skruer er 60 % brukt. Av dem som er igjen, har 15 % feil dimensjon. Hvor mange skruer har feil dimensjon?</p>",
    steg: [{ verdi: 300, enhet: "stk" }, { verdi: 200, enhet: "stk" }],
    svar: { verdi: 30, enhet: "stk" },
    hint: ["Finn først hvor mange som er igjen. Så tar du 15 % av det tallet, ikke av 500.", "Brukt: \\(500 \\cdot 0{,}60 = 300\\). Igjen: 200. \\(200 \\cdot 0{,}15 = 30\\)."],
    losning: "<p>Brukt: 300. Igjen: 200. Feil dimensjon: \\(200 \\cdot 0{,}15 = 30\\).</p>"
  },
  {
    id: "kapp-1600",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Kapp av 1600 mm",
    utstyr: "Målebånd, kappet stang, hansker",
    hms: "Ikke start saga uten lærer. Bruk hansker mot grader.",
    tekst: "<p>En stang var 1600 mm. De ferdige bitene er til sammen 1200 mm. Resten er kapp. Hvor mange prosent av stanga er svinn?</p>",
    steg: [{ verdi: 400, enhet: "mm" }],
    svar: { verdi: 25, enhet: "%" },
    hint: ["Finn kapplengden først. Del den på den opprinnelige lengden.", "\\(1600 - 1200 = 400\\) mm. \\(400 : 1600 \\cdot 100 = 25\\) %."],
    losning: "<p>Svinn: 400 mm. \\(400 : 1600 \\cdot 100 = 25\\) %.</p>"
  },
  {
    id: "rep-snitt",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>Tre målinger av samme tapp er 49,8 mm, 50,1 mm og 50,1 mm. Hva er gjennomsnittet?</p>",
    svar: { verdi: 50, enhet: "mm" },
    hint: ["Legg sammen de tre målene og del på 3.", "\\(49{,}8 + 50{,}1 + 50{,}1 = 150\\). \\(150 : 3 = 50\\) mm."],
    losning: "<p>\\(150 : 3 = 50\\) mm.</p>"
  },
  {
    id: "eks-del-hel",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To korte regnestykker uten kalkulator.</p>",
    deler: [
      { tekst: "Hva er 15 % av 60 skruer?", svar: { verdi: 9, enhet: "stk" } },
      { tekst: "12 kunder er 25 % av ukas kunder. Hvor mange kunder var det?", svar: { verdi: 48, enhet: "stk" } }
    ],
    hint: ["a) 15 % = 0,15. b) 25 % = 0,25, så du deler 12 på 0,25.", "\\(60 \\cdot 0{,}15 = 9\\). \\(12 : 0{,}25 = 48\\)."],
    losning: "<p>a) \\(60 \\cdot 0{,}15 = 9\\)<br>b) \\(12 : 0{,}25 = 48\\) kunder</p>"
  }
]);
