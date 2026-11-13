Bok.oppgaver([
  {
    id: "avdrag-sara",
    niva: "lett",
    tittel: "Avdraget",
    tekst: "<p>Sara låner 36 000 kr. Serielån, 3 år, én termin i året. Hvor stort er avdraget per år?</p>",
    svar: { verdi: 12000, enhet: "kr", tol: 0.5 },
    hint: ["Avdrag = lån delt på antall terminer.", "\\(36\\,000 : 3 = 12\\,000\\)."],
    losning: "<p>\\(36\\,000 : 3 = 12\\,000\\) kr.</p>"
  },
  {
    id: "rente-ar1",
    niva: "lett",
    tekst: "<p>Restgjelden er 36 000 kr. Renta er 5 % per år. Hvor mange kroner er renta det første året?</p>",
    svar: { verdi: 1800, enhet: "kr", tol: 0.5 },
    hint: ["5 % av restgjelden.", "\\(36\\,000 \\cdot 0{,}05 = 1\\,800\\)."],
    losning: "<p>\\(36\\,000 \\cdot 0{,}05 = 1\\,800\\) kr.</p>"
  },
  {
    id: "termin-ar1",
    niva: "lett",
    tekst: "<p>Avdrag 12 000 kr og rente 1 800 kr. Hva er terminbeløpet?</p>",
    svar: { verdi: 13800, enhet: "kr", tol: 0.5 },
    hint: ["Terminbeløp = avdrag + rente.", "\\(12\\,000 + 1\\,800 = 13\\,800\\)."],
    losning: "<p>\\(12\\,000 + 1\\,800 = 13\\,800\\) kr.</p>"
  },
  {
    id: "ar-2-3",
    niva: "middels",
    tekst: "<p>Samme serielån. Etter år 1 er restgjelden 24 000 kr. Etter år 2 er den 12 000 kr. Renta er 5 %.</p>",
    deler: [
      { tekst: "Rente i år 2?", svar: { verdi: 1200, enhet: "kr", tol: 0.5 } },
      { tekst: "Rente i år 3?", svar: { verdi: 600, enhet: "kr", tol: 0.5 } },
      { tekst: "Renter til sammen for alle tre år, med 1 800 kr i år 1?", svar: { verdi: 3600, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Rente = restgjeld ved starten av året · 0,05.", "År 2: \\(24\\,000 \\cdot 0{,}05\\). År 3: \\(12\\,000 \\cdot 0{,}05\\)."],
    losning: "<p>År 2: 1 200 kr. År 3: 600 kr. Sum: \\(1\\,800 + 1\\,200 + 600 = 3\\,600\\) kr.</p>"
  },
  {
    id: "kjenn-igjen",
    niva: "middels",
    tittel: "Hvilket lån?",
    tekst: "<p>Et lån har disse terminene: år 1 betaler du 13 800 kr, år 2 betaler du 13 200 kr, år 3 betaler du 12 600 kr. Avdraget er 12 000 kr hver gang.</p>",
    stegForSteg: false,
    svar: { valg: ["Serielån, fordi avdraget er likt og terminbeløpet synker", "Annuitetslån, fordi avdraget er likt", "Serielån, fordi terminbeløpet er likt"], riktig: 0 },
    hint: ["Se hva som er likt: avdraget eller terminbeløpet.", "Likt avdrag og synkende terminbeløp er serielån."],
    losning: "<p>Avdraget er 12 000 kr hver gang, og terminbeløpet synker. Det er et serielån.</p>"
  },
  {
    id: "annuitet-forste",
    niva: "middels",
    tekst: "<p>Et annuitetslån på 36 000 kr har terminbeløp 13 220 kr. Renta første året er 5 % av 36 000 kr.</p>",
    deler: [
      { tekst: "Hva er renta første året?", svar: { verdi: 1800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er avdraget første året?", svar: { verdi: 11420, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Avdrag = terminbeløp − rente.", "Rente: \\(36\\,000 \\cdot 0{,}05 = 1\\,800\\). Avdrag: \\(13\\,220 - 1\\,800\\)."],
    losning: "<p>Rente: 1 800 kr. Avdrag: \\(13\\,220 - 1\\,800 = 11\\,420\\) kr. Avdraget er mindre enn på serielånet det første året, fordi terminbeløpet skal være likt senere også.</p>"
  },
  {
    id: "bil-to-lan",
    niva: "vanskelig",
    tittel: "Bruktbilen",
    tekst: "<p>Bilen koster 80 000 kr. Serielån i 4 år, avdrag 20 000 kr i året. Billån 6 %: renter 4 800 + 3 600 + 2 400 + 1 200. Forbrukslån 15 %: renter 12 000 + 9 000 + 6 000 + 3 000.</p>",
    deler: [
      { tekst: "Hvor mange kroner er rentene på billånet til sammen?", svar: { verdi: 12000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner er rentene på forbrukslånet til sammen?", svar: { verdi: 30000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye dyrere er forbrukslånet i renter?", svar: { verdi: 18000, enhet: "kr", tol: 0.5 } },
      { tekst: "Du har pengene og en buffer igjen etterpå. Hva koster minst i rente til banken?", svar: { valg: ["Betale kontant", "Billån 6 %", "Forbrukslån 15 %"], riktig: 0, forklaring: "Kontant gir 0 kr i rente til banken." } }
    ],
    hint: ["Summer hver rente-rekke for seg.", "Kontant betyr at du ikke betaler rente til banken."],
    losning: "<p>Billån: 12 000 kr i renter. Forbrukslån: 30 000 kr. Forskjell: 18 000 kr. Kontant: 0 kr i rente. Da er kontant billigst, så lenge du ikke tømmer bufferen du trenger til uforutsette regninger.</p>"
  },
  {
    id: "sara-verksted",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Lånet til Sara",
    utstyr: "Kalkulator og tabellen i verkstedkortet",
    hms: "Ikke søk om et ekte lån i timen. Dette er en regneoppgave.",
    tekst: "<p>Sara har serielån på 36 000 kr, 5 % rente, 3 år. Avdrag 12 000 kr i året. Renter: 1 800 kr, 1 200 kr og 600 kr.</p>",
    deler: [
      { tekst: "Hva betaler hun i renter til sammen?", svar: { verdi: 3600, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva betaler hun til sammen, avdrag og renter?", svar: { verdi: 39600, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Summer de tre rentene.", "Avdragene er \\(3 \\cdot 12\\,000 = 36\\,000\\). Legg til rentene."],
    losning: "<p>Renter: \\(1\\,800 + 1\\,200 + 600 = 3\\,600\\) kr.<br>Til sammen: \\(36\\,000 + 3\\,600 = 39\\,600\\) kr.</p>"
  },
  {
    id: "rep-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Hvor mange kroner er 6 % av 5 000 kr?</p>",
    svar: { verdi: 300, enhet: "kr", tol: 0.5 },
    hint: ["6 % = 0,06.", "\\(5\\,000 \\cdot 0{,}06 = 300\\)."],
    losning: "<p>\\(5\\,000 \\cdot 0{,}06 = 300\\) kr.</p>"
  },
  {
    id: "rep-dele",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Et lån på 48 000 kr deles på 4 like avdrag. Hvor stort er ett avdrag?</p>",
    svar: { verdi: 12000, enhet: "kr", tol: 0.5 },
    hint: ["Del på 4.", "\\(48\\,000 : 4 = 12\\,000\\)."],
    losning: "<p>\\(48\\,000 : 4 = 12\\,000\\) kr.</p>"
  },
  {
    id: "eksamen-tabell",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et serielån har restgjeld 20 000 kr ved starten av året. Renta er 6 %. Avdraget er 5 000 kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er renta dette året?", svar: { verdi: 1200, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er restgjelden etter avdraget?", svar: { verdi: 15000, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Rente = restgjeld · 0,06. Restgjeld etterpå = restgjeld − avdrag.", "\\(20\\,000 \\cdot 0{,}06 = 1\\,200\\). \\(20\\,000 - 5\\,000 = 15\\,000\\)."],
    losning: "<p>Rente: 1 200 kr. Ny restgjeld: 15 000 kr. Terminbeløpet er \\(5\\,000 + 1\\,200 = 6\\,200\\) kr.</p>"
  },
  {
    id: "avdrag-60",
    niva: "lett",
    tekst: "<p>Et serielån på 60 000 kr betales over 5 år, med én termin i året. Hvor stort er avdraget per år?</p>",
    svar: { verdi: 12000, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 12000, enhet: "kr" }],
    hint: ["Avdrag = lån delt på antall terminer.", "\\(60\\,000 : 5 = 12\\,000\\)."],
    losning: "<p>\\(60\\,000 : 5 = 12\\,000\\) kr. Renta kommer i tillegg.</p>"
  },
  {
    id: "rente-45",
    niva: "lett",
    tekst: "<p>Restgjelden ved starten av året er 45 000 kr. Renta er 4 % per år. Hvor mange kroner er renta dette året?</p>",
    svar: { verdi: 1800, enhet: "kr", tol: 0.5 },
    steg: [{ verdi: 1800, enhet: "kr" }],
    hint: ["4 % av restgjelden.", "\\(45\\,000 \\cdot 0{,}04 = 1\\,800\\)."],
    losning: "<p>\\(45\\,000 \\cdot 0{,}04 = 1\\,800\\) kr.</p>"
  },
  {
    id: "synkende-termin",
    niva: "lett",
    tittel: "Tre terminer",
    tekst: "<p>Et lån har avdrag 5 000 kr hver termin. Terminbeløpene er 6 200 kr, 5 900 kr og 5 600 kr. Hva slags lån er det?</p>",
    stegForSteg: false,
    svar: { valg: ["Serielån, fordi avdraget er likt og terminbeløpet synker", "Annuitetslån, fordi terminbeløpet synker", "Kredittkort, fordi beløpene er ulike"], riktig: 0 },
    hint: ["Se hva som er likt fra termin til termin.", "Likt avdrag og synkende terminbeløp er serielån."],
    losning: "<p>Avdraget er 5 000 kr hver gang, og terminbeløpet synker med 300 kr. Det er et serielån.</p>"
  },
  {
    id: "serie-48",
    niva: "middels",
    tittel: "Fire år med 4 prosent",
    tekst: "<p>Serielån 48 000 kr, 4 % rente per år, 4 år, én termin i året. Avdraget er 12 000 kr. Rentene blir 1 920 kr, 1 440 kr, 960 kr og 480 kr.</p>",
    deler: [
      { tekst: "Hva er renta det første året?", svar: { verdi: 1920, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er rentene til sammen?", svar: { verdi: 4800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva betaler du til sammen, avdrag og renter?", svar: { verdi: 52800, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 12000, enhet: "kr" }, { verdi: 1920, enhet: "kr" }, { verdi: 4800, enhet: "kr" }],
    hint: ["Rente år 1 er 4 % av hele lånet. Summer de fire rentene som står i oppgaven.", "\\(48\\,000 \\cdot 0{,}04 = 1\\,920\\). Sum rente: \\(1\\,920 + 1\\,440 + 960 + 480\\). Legg til 48 000."],
    losning: "<p>Rente år 1: \\(1\\,920\\) kr.<br>Renter: \\(4\\,800\\) kr.<br>Til sammen: \\(48\\,000 + 4\\,800 = 52\\,800\\) kr.</p>"
  },
  {
    id: "annuitet-50",
    niva: "middels",
    tittel: "Avdraget vokser",
    tekst: "<p>Et annuitetslån på 50 000 kr har terminbeløp 13 500 kr hvert år. Renta er 7 % av restgjelden ved starten av året.</p>",
    deler: [
      { tekst: "Hva er renta det første året?", svar: { verdi: 3500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er avdraget det første året?", svar: { verdi: 10000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er restgjelden etter første avdrag?", svar: { verdi: 40000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er avdraget det andre året?", svar: { verdi: 10700, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 3500, enhet: "kr" }, { verdi: 10000, enhet: "kr" }, { verdi: 40000, enhet: "kr" }, { verdi: 2800, enhet: "kr" }, { verdi: 10700, enhet: "kr" }],
    hint: ["Avdrag = terminbeløp − rente. Restgjeld synker med avdraget.", "År 1: rente \\(50\\,000 \\cdot 0{,}07 = 3\\,500\\), avdrag \\(13\\,500 - 3\\,500\\). År 2: rente \\(40\\,000 \\cdot 0{,}07 = 2\\,800\\)."],
    losning: "<p>År 1: rente 3 500 kr, avdrag \\(10\\,000\\) kr, restgjeld \\(40\\,000\\) kr.<br>År 2: rente 2 800 kr, avdrag \\(13\\,500 - 2\\,800 = 10\\,700\\) kr.<br>Avdraget vokser, og terminbeløpet er likt. Det er annuitet.</p>"
  },
  {
    id: "to-lengder",
    niva: "vanskelig",
    tittel: "To år eller fire år",
    tekst: "<p>Et verktøylån på 24 000 kr er serielån med 8 % rente per år og én termin i året. Ved 2 år er avdraget 12 000 kr, og rentene er 1 920 kr og 960 kr. Ved 4 år er avdraget 6 000 kr, og rentene er 1 920 kr, 1 440 kr, 960 kr og 480 kr.</p>",
    deler: [
      { tekst: "Hvor mange kroner er rentene på 2-årslånet?", svar: { verdi: 2880, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner er rentene på 4-årslånet?", svar: { verdi: 4800, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye mer rente koster det lengste lånet?", svar: { verdi: 1920, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva stemmer?", svar: { valg: ["Lengre nedbetaling gir lavere rente totalt", "Lengre nedbetaling gir høyere rente totalt", "De to lånene koster like mye i rente"], riktig: 1 } }
    ],
    steg: [{ verdi: 2880, enhet: "kr" }, { verdi: 4800, enhet: "kr" }, { verdi: 1920, enhet: "kr" }],
    hint: ["Summer hver rente-rekke for seg, og trekk den korteste fra den lengste.", "2 år: \\(1\\,920 + 960 = 2\\,880\\). 4 år: \\(1\\,920 + 1\\,440 + 960 + 480 = 4\\,800\\)."],
    losning: "<p>2 år: \\(2\\,880\\) kr i renter.<br>4 år: \\(4\\,800\\) kr i renter.<br>Forskjell: \\(1\\,920\\) kr. Du betaler mindre hver termin på det lange lånet, men mer i rente til sammen.</p>"
  },
  {
    id: "manedsrente",
    niva: "vanskelig",
    tittel: "Prosent per år, termin per måned",
    tekst: "<p>Renta er 6 % per år. Du betaler hver måned, så månedsrenta er \\(6\\,\\% : 12 = 0{,}5\\,\\%\\). Restgjelden er 24 000 kr.</p>",
    deler: [
      { tekst: "Hva er renta for én måned?", svar: { verdi: 120, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir renta hvis noen feilaktig bruker 6 % på én måned?", svar: { verdi: 1440, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner for høy er den feilen?", svar: { verdi: 1320, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 0.005 }, { verdi: 120, enhet: "kr" }, { verdi: 1440, enhet: "kr" }],
    hint: ["0,5 % er 0,005. 6 % er 0,06.", "Riktig: \\(24\\,000 \\cdot 0{,}005 = 120\\). Feil: \\(24\\,000 \\cdot 0{,}06 = 1\\,440\\)."],
    losning: "<p>Riktig månedsrente: \\(120\\) kr.<br>Feil bruk av årsrenta: \\(1\\,440\\) kr.<br>Feilen er \\(1\\,440 - 120 = 1\\,320\\) kr for høy.</p>"
  }
]);
