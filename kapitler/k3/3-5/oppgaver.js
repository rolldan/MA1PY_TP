Bok.oppgaver([
  {
    id: "faktorer",
    niva: "lett",
    tittel: "Skriv faktoren",
    tekst: "<p>Skriv vekstfaktoren som desimaltall.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Noe øker med 15 %", svar: { verdi: 1.15, tol: 0.001 } },
      { tekst: "Noe synker med 15 %", svar: { verdi: 0.85, tol: 0.001 } },
      { tekst: "Noe øker med 6,5 %", svar: { verdi: 1.065, tol: 0.0005 } },
      { tekst: "Noe synker med 90 %", svar: { verdi: 0.1, tol: 0.001 } }
    ],
    hint: ["Opp: 1 pluss prosenten som desimal. Ned: 1 minus prosenten som desimal.", "15 % opp er 1,15. 15 % ned er 0,85. 6,5 % opp er 1,065. 90 % ned er 0,10."],
    losning: "<p>a) 1,15 b) 0,85 c) 1,065 d) 0,10</p>"
  },
  {
    id: "lonn-faktor",
    niva: "lett",
    tekst: "<p>Timelønna er 150 kr og øker med 20 %. Hva blir den nye timelønna?</p>",
    steg: [{ verdi: 1.2 }],
    svar: { verdi: 180, enhet: "kr" },
    hint: ["Faktoren for 20 % opp er 1,20.", "\\(150 \\cdot 1{,}20 = 180\\) kr."],
    losning: "<p>\\(150 \\cdot 1{,}20 = 180\\) kr.</p>"
  },
  {
    id: "bor-og-sko",
    niva: "lett",
    tekst: "<p>Bruk vekstfaktor.</p>",
    deler: [
      { tekst: "Et bor koster 900 kr og øker med 10 %. Hva blir prisen?", svar: { verdi: 990, enhet: "kr" } },
      { tekst: "Arbeidssko koster 1200 kr og settes ned med 35 %. Hva blir prisen?", svar: { verdi: 780, enhet: "kr" } }
    ],
    hint: ["+10 % er 1,10. −35 % er 0,65.", "\\(900 \\cdot 1{,}10 = 990\\). \\(1200 \\cdot 0{,}65 = 780\\)."],
    losning: "<p>a) \\(900 \\cdot 1{,}10 = 990\\) kr<br>b) \\(1200 \\cdot 0{,}65 = 780\\) kr</p>"
  },
  {
    id: "mustang",
    niva: "middels",
    tekst: "<p>En Mustang fra 1969 er verdt 1 250 000 kr etter at prisen steg 6,5 % i år. Hva kostet den i fjor? Avrund til nærmeste krone.</p>",
    steg: [{ verdi: 1.065 }],
    svar: { verdi: 1173709, enhet: "kr", tol: 1 },
    hint: ["Faktoren er 1,065. Del den nye verdien på faktoren.", "\\(1\\,250\\,000 : 1{,}065 \\approx 1\\,173\\,709\\) kr."],
    losning: "<p>\\(1\\,250\\,000 : 1{,}065 \\approx 1\\,173\\,709\\) kr.</p>"
  },
  {
    id: "avensis",
    niva: "middels",
    tekst: "<p>En Toyota Avensis fra 2000 er verdt 25 000 kr. Verdien har sunket 90 % siden den var ny. Hva var nyprisen?</p>",
    steg: [{ verdi: 0.1 }],
    svar: { verdi: 250000, enhet: "kr" },
    hint: ["90 % ned betyr at 10 % er igjen. Faktoren er 0,10.", "\\(25\\,000 : 0{,}10 = 250\\,000\\) kr."],
    losning: "<p>\\(25\\,000 : 0{,}10 = 250\\,000\\) kr.</p>"
  },
  {
    id: "sveisehjelm",
    niva: "middels",
    tekst: "<p>En sveisehjelm kostet 3200 kr og koster nå 2800 kr.</p>",
    deler: [
      { tekst: "Hva er vekstfaktoren? Skriv desimaltall.", svar: { verdi: 0.875, tol: 0.0005 } },
      { tekst: "Hvor mange prosent er rabatten?", svar: { verdi: 12.5, enhet: "%" } }
    ],
    hint: ["Faktoren er ny pris delt på gammel pris. Rabatten er 1 minus faktoren.", "\\(2800 : 3200 = 0{,}875\\). \\(1 - 0{,}875 = 0{,}125 = 12{,}5\\) %."],
    losning: "<p>Faktor: \\(2800 : 3200 = 0{,}875\\). Rabatt: 12,5 %.</p>"
  },
  {
    id: "snorre",
    niva: "vanskelig",
    tittel: "Snorres kjede",
    tekst: "<p>Snorre regner \\(25\\,000 \\cdot 1{,}05 \\cdot 0{,}85 \\cdot 0{,}97\\).</p>",
    steg: [{ verdi: 26250, enhet: "kr" }, { verdi: 22312.5, enhet: "kr", tol: 0.1 }],
    deler: [
      { tekst: "Hva er verdien til slutt, avrundet til nærmeste krone?", svar: { verdi: 21643, enhet: "kr", tol: 1 } },
      { tekst: "Hva betyr faktoren 0,85?", svar: { valg: ["Verdien steg 85 %", "Verdien sank 15 %", "Verdien sank 85 %"], riktig: 1 } },
      { tekst: "Hvor mange prosent har verdien sunket totalt, fra 25 000 kr? Avrund til én desimal.", svar: { verdi: 13.4, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Gang faktorene i rekkefølge. 0,85 er 1 − 0,15. Total nedgang: (25 000 − sluttverdi) : 25 000.", "\\(25\\,000 \\cdot 1{,}05 \\cdot 0{,}85 \\cdot 0{,}97 = 21\\,643{,}125\\), som avrundes til 21 643 kr. Nedgang: omtrent 13,4 %."],
    losning: "<p>\\(25\\,000 \\cdot 1{,}05 = 26\\,250\\). \\(26\\,250 \\cdot 0{,}85 = 22\\,312{,}5\\). \\(22\\,312{,}5 \\cdot 0{,}97 = 21\\,643{,}125 \\approx 21\\,643\\) kr.<br>0,85 betyr −15 %. Total nedgang: \\(3\\,357 : 25\\,000 \\approx 13{,}4\\) %.</p>"
  },
  {
    id: "bil-kjede",
    niva: "vanskelig",
    tekst: "<p>En bruktbil til 200 000 kr stiger først 4 %, synker deretter 6 % og stiger så 5 %.</p>",
    steg: [{ verdi: 208000, enhet: "kr" }, { verdi: 195520, enhet: "kr" }],
    deler: [
      { tekst: "Hva er bilen verdt etter alle tre endringene?", svar: { verdi: 205296, enhet: "kr" } },
      { tekst: "Hvor mange prosent over startprisen er det, avrundet til én desimal?", svar: { verdi: 2.6, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Faktorene er 1,04, 0,94 og 1,05. Gang dem. Ikke regn 4 − 6 + 5.", "\\(200\\,000 \\cdot 1{,}04 = 208\\,000\\). \\(208\\,000 \\cdot 0{,}94 = 195\\,520\\). \\(195\\,520 \\cdot 1{,}05 = 205\\,296\\)."],
    losning: "<p>Verdien blir 205 296 kr. Økningen er \\(5\\,296 : 200\\,000 = 2{,}648\\%\\), som avrundes til 2,6 %. Det er ikke 3 %.</p>"
  },
  {
    id: "kompressor",
    type: "verksted",
    niva: "middels",
    merke: "K",
    tittel: "Kompressor i regneark",
    utstyr: "PC med regneark",
    hms: "Klasseromsøkt. Ledninger langs veggen.",
    tekst: "<p>En kompressor koster 18 000 kr og synker 10 % i verdien hvert år. Hva er den verdt etter 2 år?</p>",
    steg: [{ verdi: 0.9 }, { verdi: 16200, enhet: "kr" }],
    svar: { verdi: 14580, enhet: "kr" },
    hint: ["Faktoren er 0,90. Gang med den to ganger.", "\\(18\\,000 \\cdot 0{,}90 = 16\\,200\\). \\(16\\,200 \\cdot 0{,}90 = 14\\,580\\)."],
    losning: "<p>\\(18\\,000 \\cdot 0{,}90^{2} = 14\\,580\\) kr.</p>"
  },
  {
    id: "rep-dele",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Regn ut \\(72 : 100\\).</p>",
    svar: { verdi: 0.72 },
    hint: ["Deling på 100 flytter kommaet to plasser til venstre.", "\\(72 : 100 = 0{,}72\\)."],
    losning: "<p>\\(72 : 100 = 0{,}72\\).</p>"
  },
  {
    id: "rep-kg",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En rull sveisetråd veier 15 kg. Hvor mange gram er det?</p>",
    svar: { verdi: 15000, enhet: "g" },
    hint: ["1 kg = 1000 g. Gang med 1000.", "\\(15 \\cdot 1000 = 15\\,000\\) g."],
    losning: "<p>\\(15 \\cdot 1000 = 15\\,000\\) g.</p>"
  },
  {
    id: "eksamen-gammel",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>To priser. Bruk vekstfaktor.</p>",
    deler: [
      { tekst: "Ny timelønn er 252 kr etter 5 % tillegg. Hva var den gamle timelønna?", svar: { verdi: 240, enhet: "kr" } },
      { tekst: "En sensor kostet 400 kr og steg med 125 %. Hva koster den nå?", svar: { verdi: 900, enhet: "kr" } }
    ],
    hint: ["+5 % er faktor 1,05, og du deler for å finne gammel verdi. +125 % er faktor 2,25, ikke 1,25.", "\\(252 : 1{,}05 = 240\\). \\(400 \\cdot 2{,}25 = 900\\)."],
    losning: "<p>a) \\(252 : 1{,}05 = 240\\) kr<br>b) Faktor 2,25. \\(400 \\cdot 2{,}25 = 900\\) kr</p>"
  }
]);
