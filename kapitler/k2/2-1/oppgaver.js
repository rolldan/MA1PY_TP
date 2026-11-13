Bok.oppgaver([
  {
    id: "sorter-feil",
    niva: "lett",
    tittel: "Hva slags feil?",
    tekst: "<p>Velg tilfeldig eller systematisk feil.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Du leser noniusen skjevt én gang og treffer 0,02 mm for høyt.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 0 } },
      { tekst: "Mikrometeret viser 0,03 mm for mye hver gang du lukker det.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } },
      { tekst: "Du klemmer ulikt hardt på målebakkene fra måling til måling.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 0 } },
      { tekst: "Akselen måles alltid med en gang etter dreiing, mens den er like varm.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Tilfeldig feil hopper. Systematisk feil trekker samme vei hver gang.", "Nullpunkt som alltid er feil, og en del som alltid er varm, er systematiske."],
    losning: "<p>a) Tilfeldig. b) Systematisk. c) Tilfeldig. d) Systematisk, fordi varmen trekker målet samme vei hver gang.</p>"
  },
  {
    id: "slitt-linjal",
    niva: "lett",
    tekst: "<p>Enden på en stållinjal er slitt. Når du legger enden mot platen, starter skalaen på 1 mm i stedet for 0. Du leser av 81 mm. Hvor lang er platen?</p>",
    svar: { verdi: 80, enhet: "mm", tol: 0 },
    hint: ["Linjalen legger på 1 mm hver gang. Det er en systematisk feil.", "Trekk fra 1 mm: \\(81 - 1\\)."],
    losning: "<p>\\(81 - 1 = 80\\) mm. Feilen er lik hver gang, så du korrigerer med det samme tallet.</p>"
  },
  {
    id: "passbit-50",
    niva: "middels",
    tittel: "Passbit 50,00 mm",
    tekst: "<p>En passbit er 50,00 mm. Fem avlesinger: 50,12 · 50,08 · 50,11 · 50,09 · 50,10 mm.</p>",
    steg: [{ verdi: 250.5, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 50.1, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket (gjennomsnitt minus 50,00 mm)?", svar: { verdi: 0.1, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen (største minus minste)?", svar: { verdi: 0.04, enhet: "mm" } }
    ],
    hint: ["Summen av de fem tallene er 250,50 mm. Del på 5.", "\\(50{,}10 - 50{,}00 = 0{,}10\\) mm. Spredningen er \\(50{,}12 - 50{,}08\\)."],
    losning: "<p>Gjennomsnitt \\(250{,}50 : 5 = 50{,}10\\) mm. Systematisk avvik \\(0{,}10\\) mm. Spredning \\(0{,}04\\) mm. Verktøyet ligger for høyt. Flere målinger fjerner ikke de 0,10 mm.</p>"
  },
  {
    id: "korriger-tapp",
    niva: "middels",
    tekst: "<p>Skyvelæret viser alltid 0,10 mm for mye. Du leser 40,28 mm på en tapp.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 40.18, enhet: "mm" } },
      { tekst: "Hva slags feil fjernet du med korreksjonen?", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Trekk fra det faste avviket.", "\\(40{,}28 - 0{,}10 = 40{,}18\\) mm. Feilen var lik hver gang."],
    losning: "<p>\\(40{,}28 - 0{,}10 = 40{,}18\\) mm. Det er en systematisk feil. Den tilfeldige spredningen er fortsatt der hvis du klemmer ulikt fra gang til gang.</p>"
  },
  {
    id: "begge-typer",
    niva: "vanskelig",
    tittel: "Begge feilene på en gang",
    tekst: "<p>En passbit er 80,00 mm. Målinger: 80,22 · 80,18 · 80,24 · 80,20 · 80,16 mm. Du trekker deretter det systematiske avviket fra hver måling.</p>",
    steg: [{ verdi: 401, enhet: "mm" }, { verdi: 80.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 80.2, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.2, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen etter at du har trukket fra det systematiske avviket?", svar: { verdi: 0.08, enhet: "mm" } }
    ],
    hint: ["Summen er 401,00 mm. Del på 5.", "Å trekke fra samme tall på alle målinger endrer ikke avstanden mellom største og minste. \\(80{,}24 - 80{,}16 = 0{,}08\\)."],
    losning: "<p>Gjennomsnitt \\(401 : 5 = 80{,}20\\) mm. Systematisk avvik \\(0{,}20\\) mm. Spredningen er \\(0{,}08\\) mm både før og etter korreksjon. Systematisk feil og tilfeldig spredning er to ulike ting.</p>"
  },
  {
    id: "mal-kloss",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Passbiten i skuffen",
    utstyr: "Skyvelære og en passbit eller en kloss med kjent mål",
    hms: "Passbiter skal ikke falle i gulvet. Ikke start maskiner. Legg verktøyet tilbake i etuiet.",
    tekst: "<p>Nora måler en passbit på 20,00 mm fem ganger: 20,04 · 20,02 · 20,06 · 20,02 · 20,06 mm. Regn ut, og gjør deretter det samme med passbiten i verkstedet.</p>",
    steg: [{ verdi: 100.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet av Noras målinger?", svar: { verdi: 20.04, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.04, enhet: "mm" } }
    ],
    hint: ["Summen er 100,20 mm.", "\\(100{,}20 : 5 = 20{,}04\\). Avviket er \\(20{,}04 - 20{,}00\\)."],
    losning: "<p>\\(100{,}20 : 5 = 20{,}04\\) mm. Systematisk avvik \\(0{,}04\\) mm. Spredningen er \\(20{,}06 - 20{,}02 = 0{,}04\\) mm. I verkstedet sammenligner du ditt eget gjennomsnitt med passbiten.</p>"
  },
  {
    id: "repetisjon-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stang på tegningen er 2450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m" },
    hint: ["1 m = 1000 mm. Fra mm til m deler du.", "\\(2450 : 1000 = 2{,}45\\)."],
    losning: "<p>\\(2450 : 1000 = 2{,}45\\) m.</p>"
  },
  {
    id: "eksamen-null",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et mikrometer viser 0,02 mm for mye på null. Du måler en lagerbane til 12,47 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 12.45, enhet: "mm" } },
      { tekst: "Hva fjerner du ved å ta gjennomsnittet av ti målinger med det samme mikrometeret, uten å nullstille?", svar: { valg: ["Mye av den tilfeldige spredningen", "Nullfeilen på 0,02 mm", "Både spredningen og nullfeilen"], riktig: 0 } }
    ],
    hint: ["Trekk fra nullfeilen.", "\\(12{,}47 - 0{,}02 = 12{,}45\\) mm. Gjennomsnitt demper bare tilfeldig feil."],
    losning: "<p>Korrigert mål \\(12{,}45\\) mm. Gjennomsnittet blir fortsatt omtrent 0,02 mm for høyt. Nullfeilen er systematisk.</p>"
  }
]);
