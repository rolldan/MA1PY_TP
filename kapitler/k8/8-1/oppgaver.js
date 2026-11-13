Bok.oppgaver([
  {
    id: "ti-prosent",
    niva: "lett",
    tittel: "Ti prosent av potten",
    tekst: "<p>Potten er 50 000 kr. Hvor mange kroner er 10 % av potten?</p>",
    svar: { verdi: 5000, enhet: "kr", tol: 0.5 },
    hint: ["10 % er en tidel. Del potten på 10.", "\\(50\\,000 : 10 = 5\\,000\\)."],
    losning: "<p>\\(0{,}10 \\cdot 50\\,000 = 5\\,000\\) kr.</p>"
  },
  {
    id: "under-maks",
    niva: "lett",
    tittel: "Yaris og makspris",
    tekst: "<p>Yaris koster 24 900 kr. Bilen kan koste høyst 30 000 kr. Hvor mye under maks er prisen?</p>",
    svar: { verdi: 5100, enhet: "kr", tol: 0.5 },
    hint: ["Trekk bilprisen fra maksprisen.", "\\(30\\,000 - 24\\,900\\)."],
    losning: "<p>\\(30\\,000 - 24\\,900 = 5\\,100\\) kr under maks. Bilen er lov.</p>"
  },
  {
    id: "uforutsett-yaris",
    niva: "middels",
    tittel: "Uforutsett på Yaris",
    tekst: "<p>Dere setter av 25 % av prisantydningen til uforutsett, før rabatt. Yaris koster 24 900 kr.</p>",
    steg: [{ verdi: 0.25 }],
    svar: { verdi: 6225, enhet: "kr", tol: 0.5 },
    hint: ["25 % = 0,25. Gang prisen med 0,25.", "\\(24\\,900 \\cdot 0{,}25\\). Du kan også dele på 4."],
    losning: "<p>\\(24\\,900 : 4 = 6\\,225\\) kr. Disse pengene låses til uforutsett.</p>"
  },
  {
    id: "to-biler",
    niva: "middels",
    tittel: "Golf og Astra",
    tekst: "<p>Golf koster 19 500 kr. Astra koster 16 800 kr.</p>",
    deler: [
      { tekst: "Hvor mange kroner billigere er Astra?", svar: { verdi: 2700, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent billigere er Astra enn Golf? Avrund til én desimal.", svar: { verdi: 13.8, enhet: "%", tol: 0.15 } }
    ],
    hint: ["Differansen er Golf minus Astra.", "Prosent: \\(2\\,700 : 19\\,500 \\cdot 100\\)."],
    losning: "<p>a) \\(19\\,500 - 16\\,800 = 2\\,700\\) kr.</p><p>b) \\(2\\,700 : 19\\,500 \\cdot 100 \\approx 13{,}8\\) %.</p>"
  },
  {
    id: "ramme-sjekk",
    niva: "vanskelig",
    tittel: "Er V70 for dyr i ramma?",
    tekst: "<p>V70 koster 29 500 kr. Sett av 25 % av den prisen til uforutsett. Forsikring i eksempelet er 4 800 kr for ett år. Se bort fra rabatt i denne oppgaven.</p>",
    steg: [{ verdi: 7375, enhet: "kr" }, { verdi: 41675, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stort er beløpet til uforutsett?", svar: { verdi: 7375, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av potten på 50 000 kr er igjen etter bil, uforutsett og forsikring?", svar: { verdi: 8325, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Først 25 % av 29 500.", "Summen av de tre postene trekkes fra 50 000."],
    losning: "<p>Uforutsett: \\(0{,}25 \\cdot 29\\,500 = 7\\,375\\) kr.</p><p>Sum: \\(29\\,500 + 7\\,375 + 4\\,800 = 41\\,675\\) kr.</p><p>Igjen: \\(50\\,000 - 41\\,675 = 8\\,325\\) kr til deler, lakk og basskasse. Det er før rabatt.</p>"
  },
  {
    id: "velg-focus",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Focus på lista",
    utstyr: "Prislista i 8.1, kalkulator, loggbok",
    hms: "Ingen motorstart. Hvis dere er i bilverkstedet: ikke gå under bilen uten bukker og lærer.",
    tekst: "<p>Laget stopper ved Ford Focus til 28 000 kr på prislista. Regn ferdig, og skriv deretter hvilken bil <em>laget</em> faktisk vil ha.</p>",
    deler: [
      { tekst: "Hvor mye under makspris på 30 000 kr er Focus?", svar: { verdi: 2000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye settes av til uforutsett (25 %)?", svar: { verdi: 7000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvilken bil velger laget, og hvilken tallgrunn har dere? Skriv pris og én grunn.", svar: { fritekst: true, fasit: "<p>Et godt svar nevner bil, pris under eller lik 30 000 kr, og en grunn knyttet til et tall: hvor mye som blir igjen, hvor stor rust- eller bremseregningen kan bli, eller kilometerstand.</p>" } }
    ],
    hint: ["28 000 er under 30 000. Finn differansen.", "25 % av 28 000: del på 4."],
    losning: "<p>a) \\(30\\,000 - 28\\,000 = 2\\,000\\) kr.</p><p>b) \\(28\\,000 : 4 = 7\\,000\\) kr.</p><p>c) Valget er lagets. Kontrolløren sjekker at prisen er høyst 30 000 kr.</p>"
  },
  {
    id: "repetisjon-skrue",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 0.795, enhet: "kr", tol: 0.005 },
    hint: ["Del prisen på 100.", "Kommaet flyttes to plasser til venstre: \\(79{,}50 : 100\\)."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr, omtrent 80 øre.</p>"
  },
  {
    id: "eksamen-rabatt",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En bil koster 30 000 kr. Selger gir 8 % kontantrabatt.</p>",
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 2400, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 27600, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["8 % av 30 000: \\(0{,}08 \\cdot 30\\,000\\). 10 % er 3 000, så 8 % er litt mindre.", "Ny pris = gammel pris minus rabatten, eller \\(30\\,000 \\cdot 0{,}92\\)."],
    losning: "<p>Rabatt: \\(0{,}08 \\cdot 30\\,000 = 2\\,400\\) kr.</p><p>Ny pris: \\(30\\,000 - 2\\,400 = 27\\,600\\) kr.</p>"
  }
]);
