Bok.oppgaver([
  {
    id: "hansker",
    niva: "lett",
    tekst: "<p>Arbeidshansker koster 500 kr. Du får 20 % rabatt.</p>",
    deler: [
      { tekst: "Hvor mange kroner er rabatten?", svar: { verdi: 100, enhet: "kr" } },
      { tekst: "Hva betaler du?", svar: { verdi: 400, enhet: "kr" } }
    ],
    hint: ["20 % av prisen er selve rabatten. Du betaler resten, eller ganger med 0,80.", "\\(500 \\cdot 0{,}20 = 100\\). \\(500 - 100 = 400\\)."],
    losning: "<p>Rabatt: 100 kr. Pris: \\(500 \\cdot 0{,}80 = 400\\) kr.</p>"
  },
  {
    id: "mva-lett",
    niva: "lett",
    tittel: "100 og 125",
    tekst: "<p>Mva er 25 %.</p>",
    deler: [
      { tekst: "En del koster 80 kr uten mva. Hva koster den med mva?", svar: { verdi: 100, enhet: "kr" } },
      { tekst: "En lapp viser 125 kr med mva. Hva er prisen uten mva?", svar: { verdi: 100, enhet: "kr" } }
    ],
    hint: ["Med mva: gang med 1,25. Uten mva: del på 1,25.", "\\(80 \\cdot 1{,}25 = 100\\). \\(125 : 1{,}25 = 100\\)."],
    losning: "<p>a) \\(80 \\cdot 1{,}25 = 100\\) kr<br>b) \\(125 : 1{,}25 = 100\\) kr</p>"
  },
  {
    id: "paslag-40",
    niva: "lett",
    tekst: "<p>Verkstedet kjøper en del for 200 kr uten mva og legger på 40 %. Hva blir prisen uten mva, etter påslaget?</p>",
    svar: { verdi: 280, enhet: "kr" },
    hint: ["40 % påslag er faktor 1,40.", "\\(200 \\cdot 1{,}40 = 280\\) kr."],
    losning: "<p>\\(200 \\cdot 1{,}40 = 280\\) kr.</p>"
  },
  {
    id: "bremseskive",
    niva: "middels",
    tittel: "Bremseskive",
    tekst: "<p>Liam finner en bremseskive til 377 kr på nett. Butikken tar 499 kr. En kode gir 15 % avslag på nettprisen. Frakt er 49 kr når handelen er under 350 kr. Uten kode er frakten fri.</p>",
    steg: [{ verdi: 122, enhet: "kr" }, { verdi: 320.45, enhet: "kr", tol: 0.01 }],
    deler: [
      { tekst: "Hvor mange kroner sparer han på nett, uten kode og uten frakt?", svar: { verdi: 122, enhet: "kr" } },
      { tekst: "Hvor mange prosent er det av butikkprisen? Avrund til én desimal.", svar: { verdi: 24.4, enhet: "%", tol: 0.05 } },
      { tekst: "Hva koster skiven etter 15 % rabatt, før frakt?", svar: { verdi: 320.45, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva blir totalen med kode og frakt?", svar: { verdi: 369.45, enhet: "kr", tol: 0.01 } },
      { tekst: "Lønner koden seg, sammenlignet med 377 kr uten kode?", svar: { valg: ["Ja, totalen blir lavere", "Nei, frakten gjør totalen høyere"], riktig: 0 } }
    ],
    hint: ["Sparingen er 499 − 377. Rabatt: gang 377 med 0,85. Legg til 49 kr hvis resultatet er under 350.", "\\(377 \\cdot 0{,}85 = 320{,}45\\). \\(320{,}45 + 49 = 369{,}45\\), som er lavere enn 377."],
    losning: "<p>Sparer \\(499 - 377 = 122\\) kr, som er \\(122 : 499 \\approx 24{,}4\\) %.<br>Etter kode: 320,45 kr. Med frakt: 369,45 kr. Det er 7,55 kr under 377 kr, så koden lønner seg så vidt.</p>"
  },
  {
    id: "paslag-mva",
    niva: "middels",
    tekst: "<p>En del koster 240 kr uten mva. Verkstedet legger på 50 %, og deretter 25 % mva.</p>",
    steg: [{ verdi: 360, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen etter påslag, uten mva?", svar: { verdi: 360, enhet: "kr" } },
      { tekst: "Hva blir prisen med mva?", svar: { verdi: 450, enhet: "kr" } }
    ],
    hint: ["Først faktor 1,50. Så faktor 1,25.", "\\(240 \\cdot 1{,}50 = 360\\). \\(360 \\cdot 1{,}25 = 450\\)."],
    losning: "<p>Etter påslag: 360 kr. Med mva: \\(360 \\cdot 1{,}25 = 450\\) kr.</p>"
  },
  {
    id: "mva-felle",
    niva: "vanskelig",
    tittel: "Prislapp 625 kr",
    tekst: "<p>En prislapp viser 625 kr, mva inkludert. Mva er 25 %.</p>",
    deler: [
      { tekst: "Hva er prisen uten mva?", svar: { verdi: 500, enhet: "kr" } },
      { tekst: "Hvor mange kroner er selve mva-en?", svar: { verdi: 125, enhet: "kr" } },
      { tekst: "Hvilket regnestykke er feil når du skal finne prisen uten mva?", svar: { valg: ["625 : 1,25", "625 · 0,75", "625 − 125"], riktig: 1, forklaring: "0,75 trekker 25 % av prisen med mva. Det blir 468,75 kr, ikke 500 kr." } }
    ],
    hint: ["Del prisen med mva på 1,25. Mva-beløpet er differansen.", "\\(625 : 1{,}25 = 500\\). \\(625 - 500 = 125\\). \\(625 \\cdot 0{,}75 = 468{,}75\\), og det er feil metode."],
    losning: "<p>Uten mva: 500 kr. Mva: 125 kr. Å gange med 0,75 tar 25 % av prisen som allerede inkluderer mva, og det blir for lavt.</p>"
  },
  {
    id: "kode-nei",
    niva: "vanskelig",
    tekst: "<p>En vare koster 320 kr på nett, og frakten er fri. En kode gir 20 % rabatt. Hvis handelen blir under 300 kr, koster frakten 79 kr.</p>",
    steg: [{ verdi: 256, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen etter rabatt, før frakt?", svar: { verdi: 256, enhet: "kr" } },
      { tekst: "Hva blir totalen med kode og frakt?", svar: { verdi: 335, enhet: "kr" } },
      { tekst: "Lønner koden seg?", svar: { valg: ["Ja, totalen blir under 320 kr", "Nei, totalen blir over 320 kr"], riktig: 1 } }
    ],
    hint: ["Gang med 0,80. Se om prisen havner under 300 kr, og legg i så fall til frakten.", "\\(320 \\cdot 0{,}80 = 256\\). \\(256 + 79 = 335\\), som er mer enn 320."],
    losning: "<p>Etter rabatt: 256 kr. Med frakt: 335 kr. Uten kode: 320 kr. Koden lønner seg ikke.</p>"
  },
  {
    id: "hylle",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "To lapper",
    utstyr: "Faktura eller prisliste, lapper, kalkulator",
    hms: "Verktøy blir på benken og legges tilbake i riktig hylle.",
    tekst: "<p>Et borsett står med 240 kr uten mva på fakturaen. En annen lapp i skapet viser 375 kr med mva.</p>",
    deler: [
      { tekst: "Hva skriver du på hylla for borsettet, med mva?", svar: { verdi: 300, enhet: "kr" } },
      { tekst: "Hva er prisen uten mva for lappen på 375 kr?", svar: { verdi: 300, enhet: "kr" } }
    ],
    hint: ["Gang med 1,25 for å legge på mva. Del på 1,25 for å ta den bort.", "\\(240 \\cdot 1{,}25 = 300\\). \\(375 : 1{,}25 = 300\\)."],
    losning: "<p>Hylla: \\(240 \\cdot 1{,}25 = 300\\) kr. Uten mva: \\(375 : 1{,}25 = 300\\) kr.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En plate er 1,2 m bred. Hvor mange millimeter er det?</p>",
    svar: { verdi: 1200, enhet: "mm" },
    hint: ["Fra meter til millimeter ganger du med 1000.", "\\(1{,}2 \\cdot 1000 = 1200\\) mm."],
    losning: "<p>\\(1{,}2 \\cdot 1000 = 1200\\) mm.</p>"
  },
  {
    id: "rep-vrak",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>Kravet er \\(72 \\pm 0{,}3\\) mm. Et mål er 72,5 mm. Er emnet godkjent?</p>",
    svar: { valg: ["Ja, innenfor øvre grensemål", "Nei, over øvre grensemål"], riktig: 1 },
    hint: ["Øvre grensemål er 72 + 0,3.", "72,5 er større enn 72,3, så emnet er ikke godkjent."],
    losning: "<p>Øvre grensemål er 72,3 mm. 72,5 mm er over, så emnet er ikke godkjent.</p>"
  },
  {
    id: "eksamen-leverandor",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Nora skal kjøpe en momentnøkkel. Leverandør A: førpris 2000 kr, 20 % rabatt, frakt 99 kr. Leverandør B: førpris 2200 kr, 25 % rabatt, fri frakt.</p>",
    deler: [
      { tekst: "Totalpris hos A", svar: { verdi: 1699, enhet: "kr" } },
      { tekst: "Totalpris hos B", svar: { verdi: 1650, enhet: "kr" } },
      { tekst: "Hvor mange kroner billigere er det beste tilbudet?", svar: { verdi: 49, enhet: "kr" } }
    ],
    hint: ["Regn rabatten ferdig før du legger til frakt. Sammenlign totalene.", "A: \\(2000 \\cdot 0{,}80 + 99 = 1699\\). B: \\(2200 \\cdot 0{,}75 = 1650\\)."],
    losning: "<p>A: \\(1600 + 99 = 1699\\) kr. B: 1650 kr. B er \\(1699 - 1650 = 49\\) kr billigere.</p>"
  },
  {
    id: "borsett-rabatt",
    niva: "lett",
    tekst: "<p>Et borsett koster 250 kr. Du får 10 % rabatt.</p>",
    deler: [
      { tekst: "Hvor mange kroner er rabatten?", svar: { verdi: 25, enhet: "kr" } },
      { tekst: "Hva betaler du?", svar: { verdi: 225, enhet: "kr" } }
    ],
    hint: ["10 % av prisen er rabatten. Du betaler resten, eller ganger med 0,90.", "\\(250 \\cdot 0{,}10 = 25\\). \\(250 - 25 = 225\\)."],
    losning: "<p>Rabatt: 25 kr. Pris: \\(250 \\cdot 0{,}90 = 225\\) kr.</p>"
  },
  {
    id: "mva-smatt",
    niva: "lett",
    tittel: "25 % mva",
    tekst: "<p>Mva er 25 %.</p>",
    deler: [
      { tekst: "En pakning koster 40 kr uten mva. Hva koster den med mva?", svar: { verdi: 50, enhet: "kr" } },
      { tekst: "En lapp viser 250 kr med mva. Hva er prisen uten mva?", svar: { verdi: 200, enhet: "kr" } }
    ],
    hint: ["Med mva: gang med 1,25. Uten mva: del på 1,25.", "\\(40 \\cdot 1{,}25 = 50\\). \\(250 : 1{,}25 = 200\\)."],
    losning: "<p>a) \\(40 \\cdot 1{,}25 = 50\\) kr<br>b) \\(250 : 1{,}25 = 200\\) kr</p>"
  },
  {
    id: "paslag-innkjop",
    niva: "lett",
    tekst: "<p>Verkstedet kjøper en tetning for 160 kr uten mva og legger på 25 %. Hva blir prisen uten mva, etter påslaget?</p>",
    svar: { verdi: 200, enhet: "kr" },
    hint: ["25 % påslag er faktor 1,25.", "\\(160 \\cdot 1{,}25 = 200\\) kr."],
    losning: "<p>\\(160 \\cdot 1{,}25 = 200\\) kr.</p>"
  },
  {
    id: "oljefilter",
    niva: "middels",
    tittel: "Oljefilter på nett",
    tekst: "<p>Et oljefilter koster 400 kr på nett og 500 kr i butikken. Uten rabattkode er frakten fri. En kode gir 20 % avslag på nettprisen. Hvis handelen blir under 350 kr, koster frakten 59 kr.</p>",
    steg: [{ verdi: 0.8 }, { verdi: 320, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner sparer du på nett, uten kode og uten frakt?", svar: { verdi: 100, enhet: "kr" } },
      { tekst: "Hvor mange prosent er det av butikkprisen?", svar: { verdi: 20, enhet: "%" } },
      { tekst: "Hva koster filteret etter 20 % rabatt, før frakt?", svar: { verdi: 320, enhet: "kr" } },
      { tekst: "Hva blir totalen med kode og frakt?", svar: { verdi: 379, enhet: "kr" } },
      { tekst: "Lønner koden seg, sammenlignet med 400 kr uten kode?", svar: { valg: ["Ja, totalen blir lavere", "Nei, frakten gjør totalen høyere"], riktig: 0 } }
    ],
    hint: ["Sparingen er 500 − 400. Rabatt: gang 400 med 0,80. Legg til 59 kr hvis resultatet er under 350.", "\\(400 \\cdot 0{,}80 = 320\\). \\(320 + 59 = 379\\), som er lavere enn 400."],
    losning: "<p>Sparer \\(500 - 400 = 100\\) kr, som er 20 % av 500 kr.<br>Etter kode: 320 kr. Med frakt: 379 kr. Det er 21 kr under 400 kr, så koden lønner seg.</p>"
  },
  {
    id: "dobbel-faktor",
    niva: "middels",
    tekst: "<p>En lampe koster 320 kr uten mva. Verkstedet legger på 25 %, og deretter 25 % mva.</p>",
    steg: [{ verdi: 400, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen etter påslag, uten mva?", svar: { verdi: 400, enhet: "kr" } },
      { tekst: "Hva blir prisen med mva?", svar: { verdi: 500, enhet: "kr" } }
    ],
    hint: ["Først faktor 1,25 for påslaget. Så faktor 1,25 en gang til for mva.", "\\(320 \\cdot 1{,}25 = 400\\). \\(400 \\cdot 1{,}25 = 500\\)."],
    losning: "<p>Etter påslag: 400 kr. Med mva: \\(400 \\cdot 1{,}25 = 500\\) kr.</p>"
  },
  {
    id: "lapp-750",
    niva: "vanskelig",
    tittel: "Prislapp 750 kr",
    tekst: "<p>En prislapp viser 750 kr, mva inkludert. Mva er 25 %.</p>",
    deler: [
      { tekst: "Hva er prisen uten mva?", svar: { verdi: 600, enhet: "kr" } },
      { tekst: "Hvor mange kroner er selve mva-en?", svar: { verdi: 150, enhet: "kr" } },
      { tekst: "Hvilket regnestykke er feil når du skal finne prisen uten mva?", svar: { valg: ["750 : 1,25", "750 · 0,75", "750 − 150"], riktig: 1, forklaring: "0,75 trekker 25 % av prisen med mva. Det blir 562,50 kr, ikke 600 kr." } }
    ],
    hint: ["Del prisen med mva på 1,25. Mva-beløpet er differansen.", "\\(750 : 1{,}25 = 600\\). \\(750 - 600 = 150\\). \\(750 \\cdot 0{,}75 = 562{,}50\\), og det er feil metode."],
    losning: "<p>Uten mva: 600 kr. Mva: 150 kr. Å gange med 0,75 tar 25 % av prisen som allerede inkluderer mva, og det blir for lavt.</p>"
  },
  {
    id: "kode-367",
    niva: "vanskelig",
    tekst: "<p>En pakning koster 360 kr på nett, og frakten er fri. En kode gir 20 % rabatt. Hvis handelen blir under 300 kr, koster frakten 79 kr.</p>",
    steg: [{ verdi: 288, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen etter rabatt, før frakt?", svar: { verdi: 288, enhet: "kr" } },
      { tekst: "Hva blir totalen med kode og frakt?", svar: { verdi: 367, enhet: "kr" } },
      { tekst: "Lønner koden seg?", svar: { valg: ["Ja, totalen blir under 360 kr", "Nei, totalen blir over 360 kr"], riktig: 1 } }
    ],
    hint: ["Gang med 0,80. Se om prisen havner under 300 kr, og legg i så fall til frakten.", "\\(360 \\cdot 0{,}80 = 288\\). \\(288 + 79 = 367\\), som er mer enn 360."],
    losning: "<p>Etter rabatt: 288 kr. Med frakt: 367 kr. Uten kode: 360 kr. Koden lønner seg ikke.</p>"
  },
  {
    id: "skiver-hylle",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Skiver og en gammel lapp",
    utstyr: "Faktura eller prisliste, lapper, kalkulator",
    hms: "Smådeler blir i boksen. Legg esken tilbake i riktig hylle.",
    tekst: "<p>En eske skiver står med 96 kr uten mva på fakturaen. En annen lapp i skapet viser 187,50 kr med mva.</p>",
    deler: [
      { tekst: "Hva skriver du på hylla for skivene, med mva?", svar: { verdi: 120, enhet: "kr" } },
      { tekst: "Hva er prisen uten mva for lappen på 187,50 kr?", svar: { verdi: 150, enhet: "kr" } }
    ],
    hint: ["Gang med 1,25 for å legge på mva. Del på 1,25 for å ta den bort.", "\\(96 \\cdot 1{,}25 = 120\\). \\(187{,}50 : 1{,}25 = 150\\)."],
    losning: "<p>Hylla: \\(96 \\cdot 1{,}25 = 120\\) kr. Uten mva: \\(187{,}50 : 1{,}25 = 150\\) kr.</p>"
  },
  {
    id: "rep-vekt",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En pose med 10 skruer veier 40 g. Hva veier én skrue?</p>",
    svar: { verdi: 4, enhet: "g" },
    hint: ["Del vekten på 10.", "\\(40 : 10 = 4\\) g."],
    losning: "<p>\\(40 : 10 = 4\\) g.</p>"
  },
  {
    id: "eks-mva-rabatt",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To priser uten kalkulator. Mva er 25 %.</p>",
    deler: [
      { tekst: "En pakning koster 160 kr uten mva. Hva koster den med mva?", svar: { verdi: 200, enhet: "kr" } },
      { tekst: "Et filter koster 450 kr. Du får 20 % rabatt. Hva betaler du?", svar: { verdi: 360, enhet: "kr" } }
    ],
    hint: ["Mva: gang med 1,25. Rabatt 20 %: gang med 0,80.", "\\(160 \\cdot 1{,}25 = 200\\). \\(450 \\cdot 0{,}80 = 360\\)."],
    losning: "<p>a) \\(160 \\cdot 1{,}25 = 200\\) kr<br>b) \\(450 \\cdot 0{,}80 = 360\\) kr</p>"
  }
]);
