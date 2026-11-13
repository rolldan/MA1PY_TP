Bok.oppgaver([
  {
    id: "mva-demper",
    niva: "lett",
    tittel: "Mva på støtdemper",
    tekst: "<p>En støtdemper koster 1 200 kr eks. mva. Mva er 25 %. Hvor mange kroner er mva?</p>",
    svar: { verdi: 300, enhet: "kr", tol: 0.5 },
    hint: ["Ta 25 % av prisen eks. mva.", "\\(1\\,200 \\cdot 0{,}25\\)."],
    losning: "<p>\\(1\\,200 \\cdot 0{,}25 = 300\\) kr.</p>"
  },
  {
    id: "inkl-demper",
    niva: "lett",
    tittel: "Pris inkl. mva",
    tekst: "<p>Samme støtdemper koster 1 200 kr eks. mva. Hva betaler dere inkl. mva?</p>",
    svar: { verdi: 1500, enhet: "kr", tol: 0.5 },
    hint: ["Gang med 1,25, eller legg mva på 300 kr oppå 1 200.", "\\(1\\,200 \\cdot 1{,}25\\)."],
    losning: "<p>\\(1\\,200 + 300 = 1\\,500\\) kr. Det samme som \\(1\\,200 \\cdot 1{,}25\\).</p>"
  },
  {
    id: "rabatt-focus",
    niva: "middels",
    tittel: "8 % på Focus",
    tekst: "<p>Ford Focus koster 28 000 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 2240, enhet: "kr" }, { verdi: 0.92 }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 2240, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["8 % = 0,08. Gang prisen med 0,08.", "Ny pris: \\(28\\,000 \\cdot 0{,}92\\), eller trekk rabatten fra 28 000."],
    losning: "<p>a) \\(0{,}08 \\cdot 28\\,000 = 2\\,240\\) kr.</p><p>b) \\(28\\,000 - 2\\,240 = 25\\,760\\) kr.</p>"
  },
  {
    id: "deler-sum",
    niva: "middels",
    tittel: "Tre deler",
    tekst: "<p>Støtdemper 1 200 kr, bremseskiver 890 kr og bremseklosser 340 kr. Alle priser er eks. mva.</p>",
    steg: [{ verdi: 2430, enhet: "kr" }, { verdi: 607.5, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen eks. mva?", svar: { verdi: 2430, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er summen inkl. mva?", svar: { verdi: 3037.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg sammen de tre prisene først.", "Gang summen med 1,25."],
    losning: "<p>a) \\(1\\,200 + 890 + 340 = 2\\,430\\) kr.</p><p>b) \\(2\\,430 \\cdot 1{,}25 = 3\\,037{,}50\\) kr.</p>"
  },
  {
    id: "mva-andel",
    niva: "vanskelig",
    tittel: "20 % av kassalappen",
    tekst: "<p>Delene koster 2 430 kr eks. mva og 3 037,50 kr inkl. mva.</p>",
    deler: [
      { tekst: "Hvor mange kroner er mva?", svar: { verdi: 607.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent er mva av prisen inkl. mva?", svar: { verdi: 20, enhet: "%", tol: 0.1 } },
      {
        tekst: "Hvorfor er ikke svaret 25 %?",
        svar: {
          valg: [
            "Fordi 25 % regnes av prisen uten mva, mens spørsmålet er om prisen med mva",
            "Fordi mva på bildeler er 20 %",
            "Fordi rabatten på bilen trekker fra 5 prosentpoeng"
          ],
          riktig: 0,
          forklaring: "0,25 : 1,25 = 0,20. Satsen er 25 %, andelen av kassalappen er 20 %."
        }
      }
    ],
    hint: ["Mva-beløpet er differansen mellom inkl. og eks.", "Del mva-beløpet på prisen inkl. mva, og gang med 100."],
    losning: "<p>a) \\(3\\,037{,}50 - 2\\,430 = 607{,}50\\) kr.</p><p>b) \\(607{,}50 : 3\\,037{,}50 = 0{,}20 = 20\\) %.</p><p>c) 25 % er påslaget på prisen uten mva.</p>"
  },
  {
    id: "feil-rabatt",
    niva: "vanskelig",
    tittel: "Feil vekstfaktor",
    tekst: "<p>En elev regner 8 % rabatt på Focus slik: \\(28\\,000 \\cdot 0{,}8 = 22\\,400\\) kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er riktig pris etter 8 % rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Hva gjorde eleven feil?",
        svar: {
          valg: [
            "Ganget med 0,8, som er 20 % rabatt, ikke 8 %",
            "Glemte å legge på mva",
            "Trakk fra 8 kr i stedet for 8 %"
          ],
          riktig: 0,
          forklaring: "8 % rabatt gir faktor 0,92. Faktor 0,8 er 20 % rabatt."
        }
      }
    ],
    hint: ["8 % rabatt: dere betaler 92 %.", "\\(28\\,000 \\cdot 0{,}92\\)."],
    losning: "<p>Riktig pris er \\(28\\,000 \\cdot 0{,}92 = 25\\,760\\) kr. Eleven brukte 20 % rabatt.</p>"
  },
  {
    id: "lager-deler",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "To deler fra hylla",
    utstyr: "Prisliste, kalkulator eller regneark",
    hms: "Deler løftes med rett rygg. Ikke stable esker høyere enn hodet.",
    tekst: "<p>På hylla tar dere bare støtdemper (1 200 kr) og bremseklosser (340 kr), begge eks. mva. Bremseskivene venter.</p>",
    deler: [
      { tekst: "Hva koster de to delene eks. mva?", svar: { verdi: 1540, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster de inkl. mva?", svar: { verdi: 1925, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg sammen 1 200 og 340.", "Gang summen med 1,25."],
    losning: "<p>Eks. mva: \\(1\\,200 + 340 = 1\\,540\\) kr.</p><p>Inkl. mva: \\(1\\,540 \\cdot 1{,}25 = 1\\,925\\) kr.</p>"
  },
  {
    id: "repetisjon-endring",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Et sett bremseklosser kostet 400 kr. Nå koster det 340 kr. Hvor stor er nedgangen i prosent av den gamle prisen?</p>",
    steg: [{ verdi: 60, enhet: "kr" }],
    svar: { verdi: 15, enhet: "%", tol: 0.1 },
    hint: ["Finn først hvor mange kroner prisen har sunket.", "\\(60 : 400 \\cdot 100\\)."],
    losning: "<p>Nedgang: \\(400 - 340 = 60\\) kr.</p><p>\\(60 : 400 \\cdot 100 = 15\\) %.</p>"
  },
  {
    id: "eksamen-mva",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>En del koster 1 200 kr eks. mva. Mva er 25 %.</p>",
    deler: [
      { tekst: "Hva er mva i kroner?", svar: { verdi: 300, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen inkl. mva?", svar: { verdi: 1500, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["25 % av 1 200 er en fjerdedel.", "Legg mva på prisen, eller gang med 1,25."],
    losning: "<p>Mva: \\(1\\,200 : 4 = 300\\) kr. Inkl. mva: \\(1\\,500\\) kr.</p>"
  },
  {
    id: "mva-klosser",
    niva: "lett",
    tittel: "Mva på klosser",
    tekst: "<p>Et sett bremseklosser koster 340 kr eks. mva. Mva er 25 %. Hvor mange kroner er mva?</p>",
    svar: { verdi: 85, enhet: "kr", tol: 0.5 },
    hint: ["Ta 25 % av prisen eks. mva.", "\\(340 \\cdot 0{,}25\\), eller del 340 på 4."],
    losning: "<p>\\(340 \\cdot 0{,}25 = 85\\) kr.</p>"
  },
  {
    id: "inkl-klosser",
    niva: "lett",
    tittel: "Klosser inkl. mva",
    tekst: "<p>Samme sett koster 340 kr eks. mva. Hva betaler dere inkl. mva?</p>",
    steg: [{ verdi: 85, enhet: "kr" }],
    svar: { verdi: 425, enhet: "kr", tol: 0.5 },
    hint: ["Gang med 1,25, eller legg mva på 85 kr oppå 340.", "\\(340 \\cdot 1{,}25\\)."],
    losning: "<p>\\(340 \\cdot 1{,}25 = 425\\) kr.</p>"
  },
  {
    id: "mva-skiver",
    niva: "lett",
    tittel: "Mva på bremseskiver",
    tekst: "<p>Bremseskivene koster 890 kr eks. mva. Hvor mange kroner er mva?</p>",
    svar: { verdi: 222.5, enhet: "kr", tol: 0.5 },
    hint: ["25 % av 890.", "\\(890 \\cdot 0{,}25\\)."],
    losning: "<p>\\(890 \\cdot 0{,}25 = 222{,}50\\) kr. Pris inkl. mva blir \\(1\\,112{,}50\\) kr.</p>"
  },
  {
    id: "rabatt-golf",
    niva: "middels",
    tittel: "8 % på Golf",
    tekst: "<p>VW Golf koster 19 500 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 0.92 }, { verdi: 1560, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 1560, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 17940, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["8 % rabatt: gang med 0,08 for kronene, eller med 0,92 for ny pris.", "\\(19\\,500 \\cdot 0{,}08\\)."],
    losning: "<p>Rabatt: \\(0{,}08 \\cdot 19\\,500 = 1\\,560\\) kr.</p><p>Ny pris: \\(19\\,500 \\cdot 0{,}92 = 17\\,940\\) kr.</p>"
  },
  {
    id: "rabatt-astra",
    niva: "middels",
    tittel: "8 % på Astra",
    tekst: "<p>Opel Astra koster 16 800 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 1344, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 1344, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 15456, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Gang prisen med 0,08.", "Ny pris: \\(16\\,800 \\cdot 0{,}92\\)."],
    losning: "<p>Rabatt: \\(0{,}08 \\cdot 16\\,800 = 1\\,344\\) kr.</p><p>Ny pris: \\(16\\,800 - 1\\,344 = 15\\,456\\) kr.</p>"
  },
  {
    id: "rabatt-yaris",
    niva: "middels",
    tittel: "8 % på Yaris",
    tekst: "<p>Toyota Yaris koster 24 900 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 1992, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 1992, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 22908, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["10 % av 24 900 er 2 490. 8 % er litt mindre.", "\\(24\\,900 \\cdot 0{,}08\\)."],
    losning: "<p>Rabatt: \\(0{,}08 \\cdot 24\\,900 = 1\\,992\\) kr.</p><p>Ny pris: \\(24\\,900 \\cdot 0{,}92 = 22\\,908\\) kr.</p>"
  },
  {
    id: "rabatt-v70",
    niva: "middels",
    tittel: "8 % på V70",
    tekst: "<p>Volvo V70 koster 29 500 kr før rabatt. Det er under maks på 30 000 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 2360, enhet: "kr" }, { verdi: 27140, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 2360, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 27140, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye under 30 000 kr er prisen etter rabatt?", svar: { verdi: 2860, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Rabatt: \\(29\\,500 \\cdot 0{,}08\\).", "Ny pris: \\(29\\,500 \\cdot 0{,}92\\). Maksprisen sjekkes før rabatt, og 29 500 var allerede lov."],
    losning: "<p>Rabatt: \\(2\\,360\\) kr. Ny pris: \\(27\\,140\\) kr.</p><p>Under 30 000: \\(30\\,000 - 27\\,140 = 2\\,860\\) kr.</p>"
  },
  {
    id: "deler-diff",
    niva: "middels",
    tittel: "Anslag mot faktisk",
    tekst: "<p>I regnearket var anslaget for deler 2 800 kr. Faktisk beløp inkl. mva er 3 037,50 kr. Differanse er faktisk minus anslag.</p>",
    steg: [{ verdi: 3037.5, enhet: "kr" }],
    svar: { verdi: 237.5, enhet: "kr", tol: 0.5 },
    hint: ["Differanse = faktisk − anslag.", "\\(3\\,037{,}50 - 2\\,800\\)."],
    losning: "<p>\\(3\\,037{,}50 - 2\\,800 = 237{,}50\\) kr. Delene ble 237,50 kr dyrere enn anslaget.</p>"
  },
  {
    id: "skiver-klosser",
    niva: "middels",
    tittel: "Skiver og klosser",
    tekst: "<p>Bremseskiver 890 kr og bremseklosser 340 kr. Begge priser er eks. mva. Støtdemperen venter.</p>",
    steg: [{ verdi: 1230, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen eks. mva?", svar: { verdi: 1230, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er summen inkl. mva?", svar: { verdi: 1537.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg sammen 890 og 340.", "Gang summen med 1,25."],
    losning: "<p>Eks. mva: \\(890 + 340 = 1\\,230\\) kr.</p><p>Inkl. mva: \\(1\\,230 \\cdot 1{,}25 = 1\\,537{,}50\\) kr.</p>"
  },
  {
    id: "golf-og-deler",
    niva: "vanskelig",
    tittel: "Golf, rabatt og deler",
    tekst: "<p>Golf koster 19 500 kr før 8 % kontantrabatt. Delene koster 3 037,50 kr inkl. mva. Uforutsett er 25 % av prisen før rabatt, altså av 19 500 kr.</p>",
    steg: [{ verdi: 1560, enhet: "kr" }, { verdi: 17940, enhet: "kr" }, { verdi: 4875, enhet: "kr" }, { verdi: 25852.5, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster bilen etter rabatt?", svar: { verdi: 17940, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster bil etter rabatt, pluss deler inkl. mva?", svar: { verdi: 20977.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av potten på 50 000 kr er igjen når uforutsett også er låst?", svar: { verdi: 24147.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Ny bilpris: \\(19\\,500 \\cdot 0{,}92\\). Uforutsett: \\(19\\,500 \\cdot 0{,}25\\).", "Legg bil, deler og uforutsett, og trekk summen fra 50 000."],
    losning: "<p>Bil: \\(19\\,500 \\cdot 0{,}92 = 17\\,940\\) kr.</p><p>Bil + deler: \\(17\\,940 + 3\\,037{,}50 = 20\\,977{,}50\\) kr.</p><p>Uforutsett: \\(4\\,875\\) kr. Sum av de tre: \\(25\\,852{,}50\\) kr.</p><p>Igjen: \\(50\\,000 - 25\\,852{,}50 = 24\\,147{,}50\\) kr.</p>"
  },
  {
    id: "feil-rekkefolge",
    niva: "vanskelig",
    tittel: "Rabatt før uforutsett",
    tekst: "<p>Focus koster 28 000 kr. Etter 8 % rabatt er prisen 25 760 kr. Uforutsett skal tas av prisen før rabatt. En elev tar 25 % av 25 760 kr.</p>",
    steg: [{ verdi: 7000, enhet: "kr" }, { verdi: 6440, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner setter eleven av?", svar: { verdi: 6440, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner for lite er det?", svar: { verdi: 560, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Riktig uforutsett er 25 % av 28 000.", "Elevens tall: \\(25\\,760 : 4\\)."],
    losning: "<p>Eleven: \\(25\\,760 \\cdot 0{,}25 = 6\\,440\\) kr.</p><p>Riktig: \\(28\\,000 \\cdot 0{,}25 = 7\\,000\\) kr.</p><p>For lite: \\(7\\,000 - 6\\,440 = 560\\) kr.</p>"
  },
  {
    id: "privat-eller-butikk",
    niva: "vanskelig",
    tittel: "Privat eller butikk",
    tekst: "<p>En brukt støtdemper fra en privat selger koster 800 kr, uten mva. Samme type i butikk koster 1 200 kr eks. mva, altså 1 500 kr inkl. mva.</p>",
    steg: [{ verdi: 1500, enhet: "kr" }, { verdi: 700, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner dyrere er butikkprisen enn privatprisen?", svar: { verdi: 700, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent dyrere er butikkprisen enn privatprisen?", svar: { verdi: 87.5, enhet: "%", tol: 0.1 } }
    ],
    hint: ["Sammenlign det dere faktisk betaler: 1 500 mot 800.", "Prosenten tas av privatprisen: \\(700 : 800 \\cdot 100\\)."],
    losning: "<p>Differanse: \\(1\\,500 - 800 = 700\\) kr.</p><p>\\(700 : 800 \\cdot 100 = 87{,}5\\) %. Butikken gir kvittering og mva. Privatdelen har ingen mva.</p>"
  },
  {
    id: "verksted-sandpapir",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "To hyller med sandpapir",
    utstyr: "Prisliste fra delelageret, kalkulator",
    hms: "Ingen sliping i denne økta. Sammenlign bare priser. Støvmaske hører til når noen sliper senere.",
    tekst: "<p>Grovt sandpapir: hylle A har 10 ark for 89 kr. Hylle B har 10 ark for 75 kr. Prisene er ferdige priser.</p>",
    steg: [{ verdi: 8.9, enhet: "kr" }, { verdi: 7.5, enhet: "kr" }, { verdi: 356, enhet: "kr" }, { verdi: 300, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster ett ark på hylle A?", svar: { verdi: 8.9, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva koster ett ark på hylle B?", svar: { verdi: 7.5, enhet: "kr", tol: 0.05 } },
      { tekst: "Hvor mye sparer dere på 40 ark ved å velge hylle B?", svar: { verdi: 56, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Pris per ark = pris for pakken delt på 10.", "40 ark på A: \\(40 \\cdot 8{,}90\\). På B: \\(40 \\cdot 7{,}50\\)."],
    losning: "<p>A: \\(89 : 10 = 8{,}90\\) kr/ark. B: \\(75 : 10 = 7{,}50\\) kr/ark.</p><p>40 ark: \\(356\\) kr mot \\(300\\) kr. Sparer \\(56\\) kr.</p>"
  },
  {
    id: "repetisjon-lakkpris",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>En liter grunning kostet 250 kr. Prisen sank med 20 %. Hva koster literen nå?</p>",
    steg: [{ verdi: 0.8 }, { verdi: 50, enhet: "kr" }],
    svar: { verdi: 200, enhet: "kr", tol: 0.5 },
    hint: ["20 % nedgang: dere betaler 80 %.", "\\(250 \\cdot 0{,}80\\)."],
    losning: "<p>\\(250 \\cdot 0{,}80 = 200\\) kr. Nedgangen er \\(50\\) kr. I prosjektet brukes 200 kr per liter grunning.</p>"
  }
]);
