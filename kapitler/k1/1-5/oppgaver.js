Bok.oppgaver([
  {
    id: "nora-sum",
    niva: "lett",
    tittel: "Nora",
    tekst: "<p>Nora dreier akslinger åtte dager: 3, 5, 2, 4, 6, 3, 5 og 4. Hvor mange akslinger er det til sammen?</p>",
    svar: { verdi: 32, enhet: "stk" },
    hint: ["Legg sammen dag for dag.", "\\(3 + 5 + 2 + 4 = 14\\), og \\(6 + 3 + 5 + 4 = 18\\)."],
    losning: "<p>\\(14 + 18 = 32\\) akslinger.</p>"
  },
  {
    id: "diagramtype",
    niva: "lett",
    tekst: "<p>Du vil vise hvor stor del av verkstedsdagen som går til dreiing, måling, sveising, rydding og pause. Hvilket diagram passer best?</p>",
    stegForSteg: false,
    svar: { valg: ["Sektordiagram", "Linjediagram", "Gruppert søyle for to personer"], riktig: 0, forklaring: "Delene utgjør en hel dag. Da passer sektor." },
    hint: ["Spør om det er deler av en helhet, endring over tid, eller sammenligning av grupper.", "Deler av en helhet: sektor."],
    losning: "<p>Sektordiagram. Linje passer for utvikling over dager. Gruppert søyle passer når du sammenligner Nora og Sander.</p>"
  },
  {
    id: "sander",
    niva: "middels",
    tekst: "<p>Sander dreier: 4, 3, 5, 2, 6, 4, 7 og 3 akslinger de samme åtte dagene.</p>",
    deler: [
      { tekst: "Hvor mange akslinger dreier Sander til sammen?", svar: { verdi: 34, enhet: "stk" } },
      { tekst: "Hvor mange dager dreier han 5 eller flere?", svar: { verdi: 3, enhet: "stk" } }
    ],
    hint: ["Summen: \\(4+3+5+2 = 14\\) og \\(6+4+7+3 = 20\\).", "Dagene med 5, 6 og 7 er tre stykker."],
    losning: "<p>a) \\(14 + 20 = 34\\).<br>b) Dag 3 (5), dag 5 (6) og dag 7 (7). Det er 3 dager.</p>"
  },
  {
    id: "skjermtid",
    niva: "middels",
    tekst: "<p>Hvis du ikke har egen skjermtid, bruk denne uka (timer): man 2, tir 3,5, ons 1,5, tor 4, fre 2,5, lør 5, søn 3.</p>",
    deler: [
      { tekst: "Hvor mange timer er det til sammen?", svar: { verdi: 21.5, enhet: "h" } },
      { tekst: "Hvilken dag er høyest?", svar: { valg: ["Onsdag", "Torsdag", "Lørdag", "Søndag"], riktig: 2, forklaring: "Lørdag er 5 timer. Torsdag er 4." } }
    ],
    hint: ["Legg sammen to og to.", "\\(2 + 3{,}5 + 1{,}5 + 4 = 11\\). Resten er \\(2{,}5 + 5 + 3 = 10{,}5\\)."],
    losning: "<p>a) \\(11 + 10{,}5 = 21{,}5\\) timer.<br>b) Lørdag, 5 timer. Onsdag er lavest med 1,5 timer.</p>"
  },
  {
    id: "sektor",
    niva: "middels",
    tekst: "<p>En verkstedsdag er 450 minutter: dreiing 180, måling 90, sveising 90, rydding 45, pause 45.</p>",
    deler: [
      { tekst: "Hvor mange prosent er dreiing?", svar: { verdi: 40, enhet: "%" } },
      { tekst: "Hvor mange prosent er pausen?", svar: { verdi: 10, enhet: "%" } }
    ],
    hint: ["Prosent er delen delt på helheten, ganger 100.", "\\(180 : 450 = 0{,}4\\). \\(45 : 450 = 0{,}1\\)."],
    losning: "<p>a) \\(180 : 450 = 0{,}4 = 40\\,\\%\\).<br>b) \\(45 : 450 = 0{,}1 = 10\\,\\%\\). Summen av alle delene er 100 %.</p>"
  },
  {
    id: "hvem-vinner",
    niva: "vanskelig",
    tekst: "<p>Nora har 32 akslinger og Sander 34. Se på dagene til Nora: 3, 5, 2, 4, 6, 3, 5, 4.</p>",
    deler: [
      { tekst: "Hvor mange flere akslinger har Sander?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Hvor mange dager dreier Nora nøyaktig 2 akslinger?", svar: { verdi: 1, enhet: "stk" } }
    ],
    hint: ["Trekk det minste fra det største.", "Let etter tallet 2 i Noras liste. Det står bare på dag 3."],
    losning: "<p>a) \\(34 - 32 = 2\\).<br>b) Én dag. Et linjediagram viser hvem som leder underveis. Summen alene viser bare hvem som vant.</p>"
  },
  {
    id: "lag-diagram",
    type: "verksted",
    niva: "middels",
    merke: "K",
    tittel: "Akslingskonkurransen",
    utstyr: "PC med regneark",
    hms: "Skjermen i øyehøyde. Ta en pause hvis du sitter hele økta.",
    tekst: "<p>Du lager et linjediagram for Nora og Sander. Hvor mange akslinger skal søylen eller punktet for Sander vise på dag 7?</p>",
    stegForSteg: false,
    svar: { verdi: 7, enhet: "stk" },
    hint: ["Dag 7 er det sjuende tallet i rekka 4, 3, 5, 2, 6, 4, 7, 3.", "Det er 7, ikke summen fram til dag 7."],
    losning: "<p>Dag 7 er 7 akslinger. Summen fram til og med dag 7 er \\(4+3+5+2+6+4+7 = 31\\). Diagrammet i denne oppgaven viser antall per dag, ikke summen.</p>"
  },
  {
    id: "repetisjon-tomme",
    type: "repetisjon",
    fra: "kapittel 1.4",
    niva: "lett",
    tekst: "<p>Hvor mange millimeter er \\(1/2\\) tomme? \\(1\\) tomme \\(= 25{,}4\\) mm.</p>",
    svar: { verdi: 12.7, enhet: "mm" },
    hint: ["Halvparten av 25,4.", "\\(0{,}5 \\cdot 25{,}4\\)."],
    losning: "<p>12,7 mm.</p>"
  },
  {
    id: "repetisjon-fortegn",
    type: "repetisjon",
    fra: "kapittel 1.3",
    niva: "lett",
    tekst: "<p>Regn ut \\(2 + 3 \\cdot 4\\).</p>",
    stegForSteg: false,
    svar: { verdi: 14 },
    hint: ["Gange før pluss.", "\\(3 \\cdot 4 = 12\\)."],
    losning: "<p>\\(2 + 12 = 14\\).</p>"
  },
  {
    id: "eksamen-tabell",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Tabellen viser akslinger per dag. Nora: 3, 5, 2, 4. Sander: 4, 3, 5, 2. Dette er de fire første dagene.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvor mange akslinger har Nora på de fire dagene?", svar: { verdi: 14, enhet: "stk" } },
      { tekst: "Hvem ligger foran etter fire dager?", svar: { valg: ["Nora", "Sander", "De ligger likt"], riktig: 2, forklaring: "Begge har 14." } }
    ],
    hint: ["\\(3+5+2+4\\) og \\(4+3+5+2\\).", "Sammenlign de to summene."],
    losning: "<p>a) \\(3+5+2+4 = 14\\).<br>b) Sander har også \\(4+3+5+2 = 14\\). De ligger likt.</p>"
  }
]);
