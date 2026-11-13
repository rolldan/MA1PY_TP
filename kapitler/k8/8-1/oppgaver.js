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
  },
  {
    id: "astra-under-maks",
    niva: "lett",
    tittel: "Astra og makspris",
    tekst: "<p>Opel Astra koster 16 800 kr. Bilen kan koste høyst 30 000 kr. Hvor mye under maks er prisen?</p>",
    svar: { verdi: 13200, enhet: "kr", tol: 0.5 },
    hint: ["Trekk bilprisen fra maksprisen.", "\\(30\\,000 - 16\\,800\\)."],
    losning: "<p>\\(30\\,000 - 16\\,800 = 13\\,200\\) kr under maks. Astra er lov.</p>"
  },
  {
    id: "golf-under-maks",
    niva: "lett",
    tittel: "Golf og makspris",
    tekst: "<p>VW Golf koster 19 500 kr. Hvor mye under makspris på 30 000 kr er den?</p>",
    svar: { verdi: 10500, enhet: "kr", tol: 0.5 },
    hint: ["Trekk Golf-prisen fra 30 000.", "\\(30\\,000 - 19\\,500\\)."],
    losning: "<p>\\(30\\,000 - 19\\,500 = 10\\,500\\) kr under maks.</p>"
  },
  {
    id: "halv-pott",
    niva: "lett",
    tittel: "Yaris og halve potten",
    tekst: "<p>Halve potten er 25 000 kr. Yaris koster 24 900 kr. Hvor mye under halve potten er bilen?</p>",
    svar: { verdi: 100, enhet: "kr", tol: 0.5 },
    hint: ["Trekk bilprisen fra 25 000.", "\\(25\\,000 - 24\\,900\\)."],
    losning: "<p>\\(25\\,000 - 24\\,900 = 100\\) kr. Yaris ligger så vidt under halve potten. Makspris for bilen er likevel 30 000 kr.</p>"
  },
  {
    id: "ti-prosent-v70",
    niva: "lett",
    tittel: "Ti prosent av V70",
    tekst: "<p>Volvo V70 koster 29 500 kr. Hvor mange kroner er 10 % av den prisen?</p>",
    steg: [{ verdi: 0.1 }],
    svar: { verdi: 2950, enhet: "kr", tol: 0.5 },
    hint: ["10 % er en tidel. Del prisen på 10.", "\\(29\\,500 : 10\\)."],
    losning: "<p>\\(0{,}10 \\cdot 29\\,500 = 2\\,950\\) kr. Uforutsett i prosjektet er 25 %, ikke 10 %.</p>"
  },
  {
    id: "uforutsett-golf",
    niva: "middels",
    tittel: "Uforutsett på Golf",
    tekst: "<p>Dere setter av 25 % av prisantydningen til uforutsett, før rabatt. Golf koster 19 500 kr.</p>",
    steg: [{ verdi: 0.25 }],
    svar: { verdi: 4875, enhet: "kr", tol: 0.5 },
    hint: ["25 % = 0,25. Gang prisen med 0,25, eller del på 4.", "\\(19\\,500 : 4\\)."],
    losning: "<p>\\(19\\,500 \\cdot 0{,}25 = 4\\,875\\) kr. Pengene låses til uforutsett.</p>"
  },
  {
    id: "uforutsett-astra",
    niva: "middels",
    tittel: "Uforutsett på Astra",
    tekst: "<p>Astra koster 16 800 kr. Hvor mye settes av til uforutsett når satsen er 25 % av prisen før rabatt?</p>",
    steg: [{ verdi: 0.25 }],
    svar: { verdi: 4200, enhet: "kr", tol: 0.5 },
    hint: ["Del prisen på 4.", "\\(16\\,800 : 4\\)."],
    losning: "<p>\\(16\\,800 \\cdot 0{,}25 = 4\\,200\\) kr.</p>"
  },
  {
    id: "yaris-mot-golf",
    niva: "middels",
    tittel: "Yaris mot Golf",
    tekst: "<p>Yaris koster 24 900 kr. Golf koster 19 500 kr.</p>",
    steg: [{ verdi: 5400, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner dyrere er Yaris?", svar: { verdi: 5400, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent billigere er Golf enn Yaris? Avrund til én desimal.", svar: { verdi: 21.7, enhet: "%", tol: 0.1 } }
    ],
    hint: ["Differansen er Yaris minus Golf.", "Prosenten tas av Yaris-prisen: \\(5\\,400 : 24\\,900 \\cdot 100\\)."],
    losning: "<p>a) \\(24\\,900 - 19\\,500 = 5\\,400\\) kr.</p><p>b) \\(5\\,400 : 24\\,900 \\cdot 100 \\approx 21{,}7\\) %.</p>"
  },
  {
    id: "astra-igjen",
    niva: "middels",
    tittel: "Pott etter Astra",
    tekst: "<p>Laget velger Astra til 16 800 kr og låser 25 % av den prisen til uforutsett. Forsikring og deler kommer senere.</p>",
    steg: [{ verdi: 4200, enhet: "kr" }, { verdi: 21000, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mye låses til uforutsett?", svar: { verdi: 4200, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av potten på 50 000 kr er igjen etter bil og uforutsett?", svar: { verdi: 29000, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Først 25 % av 16 800. Legg det på bilprisen.", "Resten er \\(50\\,000\\) minus bil og uforutsett."],
    losning: "<p>Uforutsett: \\(16\\,800 \\cdot 0{,}25 = 4\\,200\\) kr.</p><p>Sum: \\(16\\,800 + 4\\,200 = 21\\,000\\) kr.</p><p>Igjen: \\(50\\,000 - 21\\,000 = 29\\,000\\) kr til forsikring, deler, lakk og basskasse.</p>"
  },
  {
    id: "golf-ramme",
    niva: "vanskelig",
    tittel: "Golf i ramma",
    tekst: "<p>Golf koster 19 500 kr. Sett av 25 % av den prisen til uforutsett. Forsikring i eksempelet er 4 800 kr for ett år. Se bort fra rabatt.</p>",
    steg: [{ verdi: 4875, enhet: "kr" }, { verdi: 29175, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stort er beløpet til uforutsett?", svar: { verdi: 4875, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av potten på 50 000 kr er igjen etter bil, uforutsett og forsikring?", svar: { verdi: 20825, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Først 25 % av 19 500.", "Trekk summen av de tre postene fra 50 000."],
    losning: "<p>Uforutsett: \\(0{,}25 \\cdot 19\\,500 = 4\\,875\\) kr.</p><p>Sum: \\(19\\,500 + 4\\,875 + 4\\,800 = 29\\,175\\) kr.</p><p>Igjen: \\(50\\,000 - 29\\,175 = 20\\,825\\) kr til deler, lakk og basskasse.</p>"
  },
  {
    id: "to-biler-sammen",
    niva: "vanskelig",
    tittel: "To biler i samme pott?",
    tekst: "<p>Et lag vil ha både Yaris til 24 900 kr og Astra til 16 800 kr. Ramma sier én bil, og den kan koste høyst 30 000 kr.</p>",
    steg: [{ verdi: 41700, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen av de to prisene?", svar: { verdi: 41700, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye over makspris på 30 000 kr er summen?", svar: { verdi: 11700, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Kan laget kjøpe begge bilene i dette prosjektet?",
        svar: {
          valg: [
            "Nei. Ramma er én bil, og den skal koste høyst 30 000 kr.",
            "Ja. Summen er under 50 000 kr.",
            "Ja, hvis de tar 8 % rabatt på begge."
          ],
          riktig: 0,
          forklaring: "Potten er 50 000 kr, men bilposten er én bil til høyst 30 000 kr."
        }
      }
    ],
    hint: ["Legg sammen de to prisantydningene.", "Sammenlign summen med 30 000, ikke bare med 50 000."],
    losning: "<p>Sum: \\(24\\,900 + 16\\,800 = 41\\,700\\) kr.</p><p>Over maks for bil: \\(41\\,700 - 30\\,000 = 11\\,700\\) kr.</p><p>Laget skal velge én bil.</p>"
  },
  {
    id: "feil-grunnlag",
    niva: "vanskelig",
    tittel: "25 % av feil beløp",
    tekst: "<p>Focus koster 28 000 kr. Uforutsett skal være 25 % av bilprisen. En elev tar 25 % av potten på 50 000 kr i stedet.</p>",
    steg: [{ verdi: 12500, enhet: "kr" }, { verdi: 7000, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner regner eleven?", svar: { verdi: 12500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner for mye er det, sammenlignet med riktig uforutsett?", svar: { verdi: 5500, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Riktig grunnlag er bilprisen, ikke potten.", "Elevens tall: \\(0{,}25 \\cdot 50\\,000\\). Riktig: \\(0{,}25 \\cdot 28\\,000\\)."],
    losning: "<p>Eleven: \\(0{,}25 \\cdot 50\\,000 = 12\\,500\\) kr.</p><p>Riktig: \\(0{,}25 \\cdot 28\\,000 = 7\\,000\\) kr.</p><p>For mye: \\(12\\,500 - 7\\,000 = 5\\,500\\) kr. De pengene skulle vært ledige til deler, lakk og basskasse.</p>"
  },
  {
    id: "repetisjon-pakning",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>En pakning til panseret kostet 80 kr. Prisen økte med 15 %. Hva koster pakningen nå?</p>",
    steg: [{ verdi: 12, enhet: "kr" }],
    svar: { verdi: 92, enhet: "kr", tol: 0.5 },
    hint: ["Finn først 15 % av den gamle prisen.", "\\(80 \\cdot 0{,}15 = 12\\). Legg økningen på 80."],
    losning: "<p>Økning: \\(80 \\cdot 0{,}15 = 12\\) kr.</p><p>Ny pris: \\(80 + 12 = 92\\) kr. Det samme som \\(80 \\cdot 1{,}15\\).</p>"
  }
]);
