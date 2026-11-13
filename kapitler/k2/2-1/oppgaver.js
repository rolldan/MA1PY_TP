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
  },
  {
    id: "slitt-to",
    niva: "lett",
    tittel: "Linjalen starter på 2",
    tekst: "<p>Enden på stållinjalen er slitt. Skalaen starter på 2 mm. Du leser av 64 mm mot enden av plata. Hvor lang er plata?</p>",
    steg: [{ verdi: 2, enhet: "mm" }],
    svar: { verdi: 62, enhet: "mm", tol: 0 },
    hint: ["Linjalen legger på 2 mm hver gang. Det er en systematisk feil.", "Trekk fra 2 mm: \\(64 - 2\\)."],
    losning: "<p>\\(64 - 2 = 62\\) mm. Samme korreksjon gjelder neste gang du bruker linjalen.</p>"
  },
  {
    id: "null-lite",
    niva: "lett",
    tittel: "Skyvelæret viser for lite",
    tekst: "<p>Skyvelæret viser 0,04 mm for lite hver gang du lukker det. Du leser 28,16 mm på en plate.</p>",
    steg: [{ verdi: 0.04, enhet: "mm" }],
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 28.2, enhet: "mm" } },
      { tekst: "Hva slags feil rettet du?", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Verktøyet mangler 0,04 mm hver gang. Da legger du til.", "\\(28{,}16 + 0{,}04 = 28{,}20\\) mm. Feilen er lik hver gang."],
    losning: "<p>\\(28{,}16 + 0{,}04 = 28{,}20\\) mm. Feilen trekker samme vei hver gang, så den er systematisk.</p>"
  },
  {
    id: "sorter-fire",
    niva: "lett",
    tittel: "Fire situasjoner",
    tekst: "<p>Velg tilfeldig eller systematisk feil.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Du leser skalaen fra siden én gang og får 0,5 mm for lite.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 0 } },
      { tekst: "Kroken på målebåndet har 2 mm slark hver gang.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } },
      { tekst: "Du klemmer mikrometeret ulikt hardt fra måling til måling.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 0 } },
      { tekst: "Passbiten du nullstiller mot, er 0,01 mm for tykk, og du bruker den alltid.", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Tilfeldig feil skifter fra gang til gang. Systematisk feil er den samme hver gang.", "Slark i kroken og en for tykk passbit flytter alle målinger like mye."],
    losning: "<p>a) Tilfeldig. b) Systematisk. c) Tilfeldig. d) Systematisk. Nullstilling mot feil passbit retter du ved å bytte passbit, ikke ved å ta gjennomsnitt.</p>"
  },
  {
    id: "passbit-25",
    niva: "middels",
    tittel: "Passbit 25,00 mm",
    tekst: "<p>En passbit er 25,00 mm. Fem avlesinger med skyvelære: 25,04 · 25,06 · 25,03 · 25,05 · 25,07 mm.</p>",
    steg: [{ verdi: 125.25, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 25.05, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen?", svar: { verdi: 0.04, enhet: "mm" } }
    ],
    hint: ["Summen er 125,25 mm. Del på 5.", "\\(25{,}05 - 25{,}00 = 0{,}05\\) mm. Spredning: \\(25{,}07 - 25{,}03\\)."],
    losning: "<p>Gjennomsnitt \\(125{,}25 : 5 = 25{,}05\\) mm. Systematisk avvik \\(0{,}05\\) mm. Spredning \\(0{,}04\\) mm. De 0,05 mm blir igjen uansett hvor mange ganger du måler.</p>"
  },
  {
    id: "mikro-null",
    niva: "middels",
    tittel: "Mikrometer med nullfeil",
    tekst: "<p>Mikrometeret viser 0,008 mm for mye når det er lukket. Du leser 18,246 mm på en lagerbane.</p>",
    steg: [{ verdi: 0.008, enhet: "mm" }],
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 18.238, enhet: "mm" } },
      { tekst: "Hva slags feil er nullfeilen?", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Trekk fra det faste avviket.", "\\(18{,}246 - 0{,}008 = 18{,}238\\) mm."],
    losning: "<p>\\(18{,}246 - 0{,}008 = 18{,}238\\) mm. Nullfeilen er systematisk. Den tilfeldige spredningen fra ulikt klemmetrykk er fortsatt der.</p>"
  },
  {
    id: "alle-like",
    niva: "middels",
    tittel: "Alle tallene er like",
    tekst: "<p>En passbit er 10,00 mm. Fem avlesinger er alle 10,03 mm.</p>",
    steg: [{ verdi: 50.15, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 10.03, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.03, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Fjerner ti nye målinger med samme verktøy de 0,03 mm?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Summen er \\(5 \\cdot 10{,}03 = 50{,}15\\) mm.", "Spredningen er 0 fordi største og minste er like. Gjennomsnittet blir fortsatt 10,03 mm."],
    losning: "<p>Gjennomsnitt 10,03 mm. Systematisk avvik 0,03 mm. Spredning 0 mm. Flere målinger fjerner ikke en feil som ligger likt på alle tallene. Nullstill verktøyet.</p>"
  },
  {
    id: "passbit-40",
    niva: "vanskelig",
    tittel: "Passbit 40,00 mm",
    tekst: "<p>En passbit er 40,00 mm. Målinger: 40,15 · 40,11 · 40,17 · 40,13 · 40,14 mm. Du trekker deretter det systematiske avviket fra hver måling.</p>",
    steg: [{ verdi: 200.7, enhet: "mm" }, { verdi: 40.14, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 40.14, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.14, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen etter korreksjonen?", svar: { verdi: 0.06, enhet: "mm" } }
    ],
    hint: ["Summen er 200,70 mm. Del på 5.", "Å trekke fra 0,14 mm på alle tall endrer ikke \\(40{,}17 - 40{,}11\\)."],
    losning: "<p>Gjennomsnitt \\(200{,}70 : 5 = 40{,}14\\) mm. Systematisk avvik \\(0{,}14\\) mm. Spredningen er \\(0{,}06\\) mm både før og etter. De to feilene må behandles hver for seg.</p>"
  },
  {
    id: "to-skyvelar",
    niva: "vanskelig",
    tittel: "To skyvelære",
    tekst: "<p>Skyvelære A viser alltid 0,06 mm for mye. Du leser 32,48 mm på en tapp. Skyvelære B måler en passbit på 32,40 mm: 32,41 · 32,39 · 32,42 · 32,38 · 32,40 mm.</p>",
    steg: [{ verdi: 162, enhet: "mm" }, { verdi: 32.4, enhet: "mm" }],
    deler: [
      { tekst: "Korrigert mål fra skyvelære A?", svar: { verdi: 32.42, enhet: "mm" } },
      { tekst: "Gjennomsnitt for skyvelære B?", svar: { verdi: 32.4, enhet: "mm" } },
      { tekst: "Systematisk avvik for skyvelære B?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Hvilket verktøy har systematisk feil?", svar: { valg: ["Bare A", "Bare B", "Begge"], riktig: 0 } }
    ],
    hint: ["Trekk 0,06 mm fra avlesingen på A. Summen for B er 162,00 mm.", "\\(32{,}48 - 0{,}06 = 32{,}42\\). \\(162 : 5 = 32{,}40\\), som er passbiten. Avviket for B er 0."],
    losning: "<p>A korrigert: 32,42 mm. B gjennomsnitt: 32,40 mm, systematisk avvik 0 mm. Spredningen på B er \\(32{,}42 - 32{,}38 = 0{,}04\\) mm, altså tilfeldig. Bare A har systematisk feil.</p>"
  },
  {
    id: "passbit-30",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Passbit 30,00 mm",
    utstyr: "Skyvelære og en passbit på 30,00 mm, eller tallene under",
    hms: "Passbiter skal ikke falle i gulvet. Ikke start maskiner. Legg verktøyet tilbake i etuiet.",
    tekst: "<p>Ida måler en passbit på 30,00 mm fem ganger: 30,08 · 30,05 · 30,07 · 30,06 · 30,04 mm. Regn ut, og gjør deretter det samme med en passbit i verkstedet.</p>",
    steg: [{ verdi: 150.3, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 30.06, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.06, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen?", svar: { verdi: 0.04, enhet: "mm" } }
    ],
    hint: ["Summen er 150,30 mm.", "\\(150{,}30 : 5 = 30{,}06\\). Avviket er \\(30{,}06 - 30{,}00\\). Spredning: \\(30{,}08 - 30{,}04\\)."],
    losning: "<p>Gjennomsnitt 30,06 mm. Systematisk avvik 0,06 mm. Spredning 0,04 mm. I verkstedet sammenligner du ditt eget gjennomsnitt med passbiten.</p>"
  },
  {
    id: "rep-meter-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En sveiset ramme er 3,75 m lang. Hvor mange millimeter er det?</p>",
    svar: { verdi: 3750, enhet: "mm" },
    hint: ["Fra meter til millimeter ganger du med 1000.", "\\(3{,}75 \\cdot 1000 = 3750\\)."],
    losning: "<p>\\(3{,}75 \\cdot 1000 = 3750\\) mm.</p>"
  },
  {
    id: "eksamen-varm-del",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En tapp måles alltid rett etter dreiing, mens den er varm. Avlesingen blir 0,05 mm for lang hver gang. Du leser 55,20 mm.</p>",
    steg: [{ verdi: 0.05, enhet: "mm" }],
    deler: [
      { tekst: "Hva er korrigert mål, når du vet at varmen legger på 0,05 mm?", svar: { verdi: 55.15, enhet: "mm" } },
      { tekst: "Hva fjerner gjennomsnittet av ti slike varme målinger?", svar: { valg: ["Den faste feilen på 0,05 mm", "Mye av den tilfeldige spredningen", "Både varmen og spredningen"], riktig: 1 } }
    ],
    hint: ["Trekk fra det som er likt hver gang.", "\\(55{,}20 - 0{,}05 = 55{,}15\\) mm. Varmen er systematisk."],
    losning: "<p>Korrigert mål 55,15 mm. Gjennomsnittet demper tilfeldig spredning, men blir fortsatt omtrent 0,05 mm for høyt. Vent til delen er kald, eller korriger.</p>"
  },
  {
    id: "linjal-tre",
    niva: "lett",
    tittel: "Linjalen starter på 3",
    tekst: "<p>Enden på stållinjalen er slitt. Skalaen starter på 3 mm. Du leser 97 mm mot enden av en kappet plate. Hvor lang er plata?</p>",
    steg: [{ verdi: 3, enhet: "mm" }],
    svar: { verdi: 94, enhet: "mm", tol: 0 },
    hint: ["Linjalen legger på 3 mm hver gang. Det er en systematisk feil.", "Trekk fra 3 mm: \\(97 - 3\\)."],
    losning: "<p>\\(97 - 3 = 94\\) mm. Samme korreksjon gjelder neste plate du måler med linjalen.</p>"
  },
  {
    id: "mikro-klikk",
    niva: "lett",
    tittel: "Forbi klikken",
    tekst: "<p>Du skrur alltid mikrometeret like langt forbi friksjonsklikken. Lukket viser det 0,015 mm. På en lagerbane leser du 16,480 mm.</p>",
    steg: [{ verdi: 0.015, enhet: "mm" }],
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 16.465, enhet: "mm" } },
      { tekst: "Hva slags feil er det faste overtrekket?", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } }
    ],
    hint: ["Verktøyet viser for mye, like mye hver gang. Trekk fra.", "\\(16{,}480 - 0{,}015 = 16{,}465\\) mm. Ulikt trykk fra gang til gang hadde vært tilfeldig."],
    losning: "<p>\\(16{,}480 - 0{,}015 = 16{,}465\\) mm. Alltid like mye forbi klikken er systematisk. Ulikt klemmetrykk fra gang til gang er tilfeldig.</p>"
  },
  {
    id: "passbit-15",
    niva: "middels",
    tittel: "Passbit 15,00 mm",
    tekst: "<p>En passbit er 15,00 mm. Fem avlesinger: 15,04 · 15,07 · 15,03 · 15,06 · 15,05 mm.</p>",
    steg: [{ verdi: 75.25, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 15.05, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen?", svar: { verdi: 0.04, enhet: "mm" } }
    ],
    hint: ["Summen er 75,25 mm. Del på 5.", "\\(15{,}05 - 15{,}00 = 0{,}05\\) mm. Spredning: \\(15{,}07 - 15{,}03\\)."],
    losning: "<p>Gjennomsnitt \\(75{,}25 : 5 = 15{,}05\\) mm. Systematisk avvik 0,05 mm. Spredning 0,04 mm. Flere målinger fjerner ikke de 0,05 mm. Nullstill skyvelæret.</p>"
  },
  {
    id: "varm-tapp",
    niva: "middels",
    tittel: "Tappen er alltid varm",
    tekst: "<p>En dreid tapp måles alltid før den er kald. Varmen gjør avlesingen 0,07 mm for lang. Du leser 44,36 mm.</p>",
    steg: [{ verdi: 0.07, enhet: "mm" }],
    deler: [
      { tekst: "Hva er korrigert mål?", svar: { verdi: 44.29, enhet: "mm" } },
      { tekst: "Hva slags feil er varmen, når den slår likt ut hver gang?", svar: { valg: ["Tilfeldig feil", "Systematisk feil"], riktig: 1 } },
      { tekst: "Fjerner gjennomsnittet av ti slike målinger de 0,07 mm?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Trekk fra det som er likt hver gang.", "\\(44{,}36 - 0{,}07 = 44{,}29\\) mm. Gjennomsnittet blir fortsatt for høyt."],
    losning: "<p>\\(44{,}36 - 0{,}07 = 44{,}29\\) mm. Varmen er systematisk. Ti nye varme målinger demper bare den tilfeldige spredningen.</p>"
  },
  {
    id: "passbit-70",
    niva: "vanskelig",
    tittel: "Passbit 70,00 mm",
    tekst: "<p>En passbit er 70,00 mm. Målinger: 70,21 · 70,15 · 70,23 · 70,17 · 70,19 mm. Du trekker deretter det systematiske avviket fra hver måling.</p>",
    steg: [{ verdi: 350.95, enhet: "mm" }, { verdi: 70.19, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 70.19, enhet: "mm" } },
      { tekst: "Hvor stort er det systematiske avviket?", svar: { verdi: 0.19, enhet: "mm" } },
      { tekst: "Hvor stor er spredningen etter korreksjonen?", svar: { verdi: 0.08, enhet: "mm" } }
    ],
    hint: ["Summen er 350,95 mm. Del på 5.", "Å trekke 0,19 mm fra alle tall endrer ikke \\(70{,}23 - 70{,}15\\)."],
    losning: "<p>Gjennomsnitt \\(350{,}95 : 5 = 70{,}19\\) mm. Systematisk avvik 0,19 mm. Spredningen er 0,08 mm både før og etter. De to feilene rettes på hver sin måte.</p>"
  },
  {
    id: "to-mikro",
    niva: "vanskelig",
    tittel: "To mikrometer",
    tekst: "<p>Mikrometer A viser alltid 0,009 mm for lite. Du leser 21,486 mm på en lagerbane. Mikrometer B måler en passbit på 21,500 mm: 21,502 · 21,498 · 21,501 · 21,499 · 21,500 mm.</p>",
    steg: [{ verdi: 107.5, enhet: "mm" }, { verdi: 21.5, enhet: "mm" }],
    deler: [
      { tekst: "Korrigert mål fra mikrometer A?", svar: { verdi: 21.495, enhet: "mm" } },
      { tekst: "Gjennomsnitt for mikrometer B?", svar: { verdi: 21.5, enhet: "mm" } },
      { tekst: "Systematisk avvik for mikrometer B?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Hvilket verktøy har systematisk feil?", svar: { valg: ["Bare A", "Bare B", "Begge"], riktig: 0 } }
    ],
    hint: ["A mangler 0,009 mm. Legg til. Summen for B er 107,500 mm.", "\\(21{,}486 + 0{,}009 = 21{,}495\\). \\(107{,}500 : 5 = 21{,}500\\), som er passbiten."],
    losning: "<p>A korrigert: 21,495 mm. B gjennomsnitt: 21,500 mm, systematisk avvik 0 mm. Spredningen på B er \\(21{,}502 - 21{,}498 = 0{,}004\\) mm, altså tilfeldig. Bare A har systematisk feil.</p>"
  }
]);
