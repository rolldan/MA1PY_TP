Bok.oppgaver([
  {
    id: "timer-minutter",
    niva: "lett",
    tittel: "Tid",
    tekst: "<p>En kjøretur mellom to verksteder tar 1,5 timer. Hvor mange minutter er det?</p>",
    svar: { verdi: 90, enhet: "min" },
    hint: ["En time er 60 minutter. 1,5 timer er én time pluss en halv time.", "\\(1{,}5 \\cdot 60 = 90\\) minutter."],
    losning: "<p>\\(1{,}5 \\cdot 60 = 90\\) minutter. Det er 1 time og 30 minutter, ikke 1 time og 50 minutter.</p>"
  },
  {
    id: "grense-pinne",
    niva: "lett",
    tittel: "Grensemål",
    tekst: "<p>En pinne skal være \\(25 \\pm 0{,}2\\) mm.</p>",
    deler: [
      { tekst: "Hva er minste mål?", svar: { verdi: 24.8, enhet: "mm" } },
      { tekst: "Hva er største mål?", svar: { verdi: 25.2, enhet: "mm" } }
    ],
    hint: ["Minste mål er basismålet minus avviket. Største mål er basismålet pluss avviket.", "\\(25 - 0{,}2 = 24{,}8\\) mm og \\(25 + 0{,}2 = 25{,}2\\) mm."],
    losning: "<p>a) \\(24{,}8\\) mm<br>b) \\(25{,}2\\) mm<br>Et mål på 25,3 mm er vrak. Et mål på 25,1 mm er godkjent.</p>"
  },
  {
    id: "glykol",
    niva: "middels",
    tittel: "Blandingsforhold",
    tekst: "<p>Frostvæske blandes glykol : vann = 1 : 3. Du skal lage 8 liter.</p>",
    deler: [
      { tekst: "Hvor mange liter glykol?", svar: { verdi: 2, enhet: "L" } },
      { tekst: "Hvor mange liter vann?", svar: { verdi: 6, enhet: "L" } }
    ],
    hint: ["1 + 3 = 4 deler. Finn hvor mange liter én del er.", "\\(8 / 4 = 2\\) liter per del. Glykol er 1 del, vann er 3 deler."],
    losning: "<p>Én del er \\(8 / 4 = 2\\) L.<br>a) Glykol: \\(2\\) L<br>b) Vann: \\(3 \\cdot 2 = 6\\) L<br>Sjekk: \\(2 + 6 = 8\\) L.</p>"
  },
  {
    id: "moment-nokkel",
    niva: "middels",
    tittel: "Dreiemoment",
    tekst: "<p>En bolt skal trekkes med 120 Nm. Nøkkelen er 0,40 m lang. Hvor stor kraft må du bruke ytterst på nøkkelen?</p>",
    steg: [{ verdi: 0.4, enhet: "m" }],
    svar: { verdi: 300, enhet: "N" },
    hint: ["\\(M = F \\cdot a\\), så \\(F = M / a\\). Ikke gang momentet med armen.", "\\(F = 120 / 0{,}40\\)."],
    losning: "<p>\\(F = M / a = 120 / 0{,}40 = 300\\) N. Ganger du i stedet, får du 48. Det er for lite til å kjenne på en 120 Nm-bolt.</p>"
  },
  {
    id: "mva-etter-rabatt",
    niva: "middels",
    tittel: "Rabatt og mva",
    tekst: "<p>En vinkelsliper koster 1600 kr uten mva. Du får 25 % rabatt. Mva på 25 % regnes etter rabatten.</p>",
    deler: [
      { tekst: "Hva koster sliperen etter rabatt, uten mva?", svar: { verdi: 1200, enhet: "kr" } },
      { tekst: "Hva koster den med mva?", svar: { verdi: 1500, enhet: "kr" } }
    ],
    hint: ["25 % rabatt betyr at du betaler 75 % av prisen. Mva kommer på den nye prisen.", "\\(1600 \\cdot 0{,}75 = 1200\\). Deretter \\(1200 \\cdot 1{,}25\\)."],
    losning: "<p>a) \\(1600 \\cdot 0{,}75 = 1200\\) kr<br>b) \\(1200 \\cdot 1{,}25 = 1500\\) kr<br>25 % av og deretter 25 % på gir ikke den opprinnelige prisen, fordi mva regnes av et lavere beløp.</p>"
  },
  {
    id: "skjaer-og-turtall",
    niva: "vanskelig",
    tittel: "Skjærehastighet",
    tekst: "<p>Du skal dreie en aksel med diameter 20 mm. Anbefalt skjærehastighet er 40 m/min. Formelen er \\(v_c = \\pi \\cdot d \\cdot n / 1000\\), med \\(d\\) i mm og \\(n\\) i r/min.</p>",
    deler: [
      { tekst: "Hvilket turtall bør du stille inn? Avrund til nærmeste hele r/min.", svar: { verdi: 637, enhet: "r/min", tol: 1 } },
      { tekst: "Du stiller 600 r/min i stedet. Hvilken skjærehastighet får du? Avrund til én desimal.", svar: { verdi: 37.7, enhet: "m/min", tol: 0.2 } }
    ],
    hint: ["Snu formelen: \\(n = 1000 \\cdot v_c / (\\pi \\cdot d)\\).", "a) \\(n = 1000 \\cdot 40 / (\\pi \\cdot 20)\\). b) \\(v_c = \\pi \\cdot 20 \\cdot 600 / 1000\\)."],
    losning: "<p>a) \\(n = 40\\,000 / (\\pi \\cdot 20) \\approx 636{,}6\\), altså 637 r/min.<br>b) \\(v_c = \\pi \\cdot 20 \\cdot 600 / 1000 \\approx 37{,}7\\) m/min. Det er litt under anbefalt fart, så boret eller stålet tåler det.</p>"
  },
  {
    id: "fire-pinner",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Godkjent eller vrak",
    utstyr: "Skyvelære og fire pinner, eller målene oppgitt her",
    hms: "Ingen maskin skal startes. Delene tilbake i skuffen.",
    tekst: "<p>Kravet er \\(22{,}0 \\pm 0{,}3\\) mm. Målene er 22,1 · 21,8 · 22,4 · 22,0 mm. Mål gjerne egne emner etterpå og gjør det samme.</p>",
    deler: [
      { tekst: "Hvor mange er vrak?", svar: { verdi: 1, enhet: "stk" } },
      { tekst: "Hvor mange prosent er vrak?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Finn minste og største mål før du teller.", "Grense: 21,7 mm til 22,3 mm. Ett av de fire målene ligger utenfor. \\(1 / 4 \\cdot 100\\)."],
    losning: "<p>Grense fra 21,7 mm til 22,3 mm. Bare 22,4 mm er vrak.<br>a) 1 stk<br>b) \\(1 / 4 \\cdot 100 = 25\\,\\%\\)</p>"
  },
  {
    id: "overslag-planker",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>19 planker koster 48 kr per stykk. Hva koster de til sammen? Et overslag først: \\(20 \\cdot 50 = 1000\\) kr.</p>",
    steg: [{ verdi: 1000, enhet: "kr" }],
    svar: { verdi: 912, enhet: "kr" },
    hint: ["\\(19 \\cdot 48\\) er litt under \\(20 \\cdot 50\\).", "\\(19 \\cdot 50 = 950\\), og så trekker du fra \\(19 \\cdot 2\\)."],
    losning: "<p>\\(19 \\cdot 48 = 19 \\cdot 50 - 19 \\cdot 2 = 950 - 38 = 912\\) kr. 912 ligger under overslaget på 1000 kr, så svaret er rimelig.</p>"
  },
  {
    id: "bar-til-kpa",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>Manometeret på kompressoren viser 3,2 bar. Hvor mange kilopascal er det? Bruk at 1 bar = 100 kPa.</p>",
    svar: { verdi: 320, enhet: "kPa" },
    hint: ["Fra bar til kPa ganger du med 100.", "\\(3{,}2 \\cdot 100 = 320\\)."],
    losning: "<p>\\(3{,}2 \\cdot 100 = 320\\) kPa.</p>"
  },
  {
    id: "sveisetrad-pris",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Kilopris",
    tekst: "<p>Uten kalkulator. En spole med 5 kg sveisetråd koster 420 kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva koster tråden per kilogram?", svar: { verdi: 84, enhet: "kr" } },
      { tekst: "Hva koster 2,5 kg?", svar: { verdi: 210, enhet: "kr" } }
    ],
    hint: ["Del totalprisen på antall kilogram.", "\\(420 / 5 = 84\\) kr per kg. 2,5 kg er halvparten av spolen."],
    losning: "<p>a) \\(420 / 5 = 84\\) kr/kg<br>b) Halv spole: \\(420 / 2 = 210\\) kr.</p>"
  },
  {
    id: "um-pinne",
    niva: "lett",
    tittel: "Mikrometer på tegningen",
    tekst: "<p>Et mål på tegningen står som 350 µm. Hvor mange millimeter er det?</p>",
    steg: [{ verdi: 1000 }],
    svar: { verdi: 0.35, enhet: "mm" },
    hint: ["1000 µm er 1 mm. Du skal dele på 1000.", "\\(350 / 1000 = 0{,}35\\) mm."],
    losning: "<p>\\(350 / 1000 = 0{,}35\\) mm. 350 µm er altså litt over en tredels millimeter.</p>"
  },
  {
    id: "lager-skruer",
    type: "verksted",
    niva: "lett",
    merke: "V",
    tittel: "Skruer på lageret",
    utstyr: "Prislapp og kalkulator, eller tallene under",
    hms: "Sekkene blir på hylla. Ikke åpne esker du ikke skal bruke.",
    tekst: "<p>Skruene koster 4 kr per stykk. Du trenger 24 skruer. Gjør overslag med \\(25 \\cdot 4\\) før du regner nøyaktig.</p>",
    steg: [{ verdi: 100, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 100, enhet: "kr" } },
      { tekst: "Hva koster skruene nøyaktig?", svar: { verdi: 96, enhet: "kr" } }
    ],
    hint: ["Overslaget runder 24 opp til 25. Det nøyaktige svaret er 24 ganger 4.", "\\(25 \\cdot 4 = 100\\). \\(24 \\cdot 4 = 96\\)."],
    losning: "<p>a) \\(25 \\cdot 4 = 100\\) kr<br>b) \\(24 \\cdot 4 = 96\\) kr<br>96 ligger like under 100, så svaret er rimelig.</p>"
  },
  {
    id: "kjolevann",
    niva: "lett",
    tittel: "Kjølevæske",
    tekst: "<p>Kjølevæske og vann blandes i forholdet 1 : 4. Du skal lage 15 liter ferdig blanding.</p>",
    steg: [{ verdi: 5 }, { verdi: 3, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter kjølevæske?", svar: { verdi: 3, enhet: "L" } },
      { tekst: "Hvor mange liter vann?", svar: { verdi: 12, enhet: "L" } }
    ],
    hint: ["1 + 4 = 5 deler. Del 15 liter på 5.", "Én del er 3 liter. Kjølevæske er 1 del, vann er 4 deler."],
    losning: "<p>\\(15 / 5 = 3\\) liter per del.<br>a) Kjølevæske: \\(3\\) L<br>b) Vann: \\(4 \\cdot 3 = 12\\) L<br>Sjekk: \\(3 + 12 = 15\\) L.</p>"
  },
  {
    id: "snitt-mal",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "middels",
    tittel: "Fire mål på samme pinne",
    tekst: "<p>Du måler den samme pinnen fire ganger: 22,0 · 22,2 · 21,8 · 22,0 mm.</p>",
    steg: [{ verdi: 88, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 22, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.4, enhet: "mm" } }
    ],
    hint: ["Gjennomsnitt er summen delt på 4. Variasjonsbredden er største mål minus minste mål.", "Summen er 88 mm. Største er 22,2 mm og minste er 21,8 mm."],
    losning: "<p>a) \\((22{,}0 + 22{,}2 + 21{,}8 + 22{,}0) / 4 = 88 / 4 = 22{,}0\\) mm<br>b) \\(22{,}2 - 21{,}8 = 0{,}4\\) mm<br>Målene sprer seg med 0,4 mm. Det er mer enn en vanlig skyvelære-usikkerhet, så du bør måle en gang til.</p>"
  },
  {
    id: "kompressor-psi",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Trykk på kompressoren",
    utstyr: "Manometer, eller tallet 1,8 bar",
    hms: "Ikke juster regulatoren. Les av og sett slangen tilbake.",
    tekst: "<p>Manometeret viser 1,8 bar. Bruk at 1 bar = 100 kPa, og at 1 bar ≈ 14,5 psi.</p>",
    steg: [{ verdi: 100 }, { verdi: 14.5 }],
    deler: [
      { tekst: "Hvor mange kilopascal er det?", svar: { verdi: 180, enhet: "kPa" } },
      { tekst: "Hvor mange psi er det? Én desimal.", svar: { verdi: 26.1, enhet: "psi" } }
    ],
    hint: ["Fra bar til kPa ganger du med 100. Fra bar til psi ganger du med 14,5.", "\\(1{,}8 \\cdot 100\\) og \\(1{,}8 \\cdot 14{,}5\\)."],
    losning: "<p>a) \\(1{,}8 \\cdot 100 = 180\\) kPa<br>b) \\(1{,}8 \\cdot 14{,}5 = 26{,}1\\) psi</p>"
  },
  {
    id: "vifte-strom",
    niva: "middels",
    tittel: "Kjølevifte",
    tekst: "<p>En kjølevifte står på 12 V og har motstand 4 Ω. \\(I = U / R\\) og \\(P = U \\cdot I\\).</p>",
    steg: [{ verdi: 12, enhet: "V" }, { verdi: 4, enhet: "Ω" }],
    deler: [
      { tekst: "Hvor stor er strømmen?", svar: { verdi: 3, enhet: "A" } },
      { tekst: "Hvor stor er effekten?", svar: { verdi: 36, enhet: "W" } },
      {
        tekst: "Hvilken sikring er den minste som tåler strømmen?",
        svar: {
          valg: ["2 A", "5 A", "10 A"],
          riktig: 1,
          forklaring: "Strømmen er 3 A. En sikring på 2 A ryker. 5 A er den minste av de tre som tåler 3 A."
        }
      }
    ],
    hint: ["Strøm er spenning delt på motstand. Effekt er spenning ganger strøm.", "\\(I = 12 / 4\\). Deretter \\(P = 12 \\cdot 3\\)."],
    losning: "<p>a) \\(I = 12 / 4 = 3\\) A<br>b) \\(P = 12 \\cdot 3 = 36\\) W<br>c) 5 A. 2 A er for lite, og 10 A er større enn du trenger.</p>"
  },
  {
    id: "moment-larling",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Klarer armen?",
    utstyr: "Momentnøkkel og en fastnøkkel, eller tallene under",
    hms: "Trekk ikke til mot en løs del. Hold imot, og slipp hvis nøkkelen kan slå tilbake.",
    tekst: "<p>En mutter skal ha 150 Nm. Nøkkelen du har først, er 0,50 m. Lærlingen skyver med 500 N på en kortere arm på 0,25 m. \\(M = F \\cdot a\\), så \\(F = M / a\\).</p>",
    steg: [{ verdi: 0.5, enhet: "m" }, { verdi: 0.25, enhet: "m" }],
    deler: [
      { tekst: "Hvor stor kraft trengs ytterst på nøkkelen på 0,50 m?", svar: { verdi: 300, enhet: "N" } },
      { tekst: "Hvilket moment lager lærlingen?", svar: { verdi: 125, enhet: "Nm" } },
      {
        tekst: "Holder 125 Nm mot kravet på 150 Nm?",
        svar: {
          valg: ["Ja", "Nei"],
          riktig: 1,
          forklaring: "125 Nm er mindre enn 150 Nm. Armen er for kort til kraften lærlingen har."
        }
      }
    ],
    hint: ["Kraften er moment delt på arm. Momentet lærlingen lager, er kraft ganger den armen hen faktisk har.", "a) \\(150 / 0{,}50\\). b) \\(500 \\cdot 0{,}25\\)."],
    losning: "<p>a) \\(F = 150 / 0{,}50 = 300\\) N<br>b) \\(M = 500 \\cdot 0{,}25 = 125\\) Nm<br>c) Nei. 125 Nm er under 150 Nm. En lengre arm, eller mer kraft, trengs.</p>"
  },
  {
    id: "plate-masse",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Hva veier stålbiten?",
    utstyr: "Skyvelære, vekt og en stålbit, eller målene under",
    hms: "Bitene kan ha skarpe kanter. Bruk hansker når du løfter plate.",
    tekst: "<p>En stålbit er 100 mm × 50 mm × 10 mm. Massetettheten for stål er 7,8 g/cm³. Gjør sidene om til centimeter før du regner volum.</p>",
    steg: [{ verdi: 10, enhet: "cm" }, { verdi: 5, enhet: "cm" }, { verdi: 1, enhet: "cm" }, { verdi: 50, enhet: "cm³" }],
    deler: [
      { tekst: "Hva er volumet?", svar: { verdi: 50, enhet: "cm³" } },
      { tekst: "Hva er massen?", svar: { verdi: 390, enhet: "g" } }
    ],
    hint: ["100 mm = 10 cm, 50 mm = 5 cm og 10 mm = 1 cm. Masse er volum ganger massetetthet.", "Volum: \\(10 \\cdot 5 \\cdot 1\\). Masse: volumet ganger 7,8."],
    losning: "<p>a) \\(10 \\cdot 5 \\cdot 1 = 50\\) cm³<br>b) \\(50 \\cdot 7{,}8 = 390\\) g<br>På vekta skal biten ligge nær 390 g. Et stort avvik betyr feil enhet, ikke feil stål.</p>"
  },
  {
    id: "skjarevaeske",
    niva: "middels",
    tittel: "Skjærevæske i promille",
    tekst: "<p>Konsentrat og vann blandes 1 : 19. Du skal lage 10 liter ferdig skjærevæske.</p>",
    steg: [{ verdi: 20 }, { verdi: 0.5, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter konsentrat?", svar: { verdi: 0.5, enhet: "L" } },
      { tekst: "Hvor mange liter vann?", svar: { verdi: 9.5, enhet: "L" } },
      { tekst: "Hvor mange promille av blandingen er konsentrat?", svar: { verdi: 50, enhet: "‰" } }
    ],
    hint: ["1 + 19 = 20 deler. Promille er andelen ganger 1000.", "\\(10 / 20 = 0{,}5\\) L konsentrat. \\(0{,}5 / 10 \\cdot 1000\\) promille."],
    losning: "<p>a) \\(10 / 20 = 0{,}5\\) L konsentrat<br>b) \\(19 \\cdot 0{,}5 = 9{,}5\\) L vann<br>c) \\(0{,}5 / 10 \\cdot 1000 = 50\\,‰\\)<br>50 promille er det samme som 5 %.</p>"
  },
  {
    id: "hk-motor",
    type: "repetisjon",
    fra: "kapittel 9",
    niva: "middels",
    tekst: "<p>En påhengsmotor er merket 20 hk. Bruk at 1 hk = 0,7355 kW. Svar med to desimaler.</p>",
    steg: [{ verdi: 0.7355 }],
    svar: { verdi: 14.71, enhet: "kW", tol: 0.005 },
    hint: ["Gang antall hestekrefter med 0,7355.", "\\(20 \\cdot 0{,}7355\\)."],
    losning: "<p>\\(20 \\cdot 0{,}7355 = 14{,}71\\) kW.</p>"
  },
  {
    id: "bore-turtall",
    niva: "vanskelig",
    tittel: "Turtall til et 8 mm bor",
    tekst: "<p>Et bor har diameter 8 mm. Anbefalt skjærehastighet er 25 m/min. \\(v_c = \\pi \\cdot d \\cdot n / 1000\\), med \\(d\\) i mm, \\(n\\) i r/min og \\(v_c\\) i m/min.</p>",
    steg: [{ verdi: 25.1, enhet: "m/min", tol: 0.2 }],
    deler: [
      { tekst: "Hvilket turtall bør du stille inn? Nærmeste hele r/min.", svar: { verdi: 995, enhet: "r/min", tol: 0.5 } },
      { tekst: "Du stiller 1000 r/min. Hvilken skjærehastighet får du? Én desimal.", svar: { verdi: 25.1, enhet: "m/min", tol: 0.15 } }
    ],
    hint: ["Snu formelen: \\(n = 1000 \\cdot v_c / (\\pi \\cdot d)\\).", "a) \\(n = 1000 \\cdot 25 / (\\pi \\cdot 8)\\). b) \\(v_c = \\pi \\cdot 8 \\cdot 1000 / 1000\\)."],
    losning: "<p>a) \\(n = 25\\,000 / (8\\pi) \\approx 994{,}7\\), altså 995 r/min.<br>b) \\(v_c = 8\\pi \\approx 25{,}1\\) m/min. Det ligger tett på 25 m/min, så 1000 r/min er et greit valg på maskinen.</p>"
  },
  {
    id: "aksel-vrak",
    type: "verksted",
    niva: "vanskelig",
    merke: "V",
    tittel: "Seks aksler",
    utstyr: "Skyvelære og seks aksler, eller målene under",
    hms: "Maskinen står av. Mål på benken.",
    tekst: "<p>Kravet er \\(18{,}0 \\pm 0{,}2\\) mm. Målene er 18,1 · 17,7 · 18,2 · 18,3 · 17,9 · 18,0 mm. Et mål som ligger nøyaktig på grensen, er godkjent.</p>",
    steg: [{ verdi: 17.8, enhet: "mm" }, { verdi: 18.2, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange er vrak?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Hvor mange prosent er vrak? Én desimal.", svar: { verdi: 33.3, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Regn minste og største mål før du teller. Prosent er antall vrak delt på 6, ganger 100.", "Grense: \\(18{,}0 - 0{,}2\\) til \\(18{,}0 + 0{,}2\\). To av seks ligger utenfor."],
    losning: "<p>Grense fra 17,8 mm til 18,2 mm. 17,7 mm og 18,3 mm er vrak. 18,2 mm er på grensen og godkjent.<br>a) 2 stk<br>b) \\(2 / 6 \\cdot 100 \\approx 33{,}3\\,\\%\\)</p>"
  },
  {
    id: "blandet-aksel",
    type: "verksted",
    niva: "vanskelig",
    merke: "V",
    tittel: "Emne, grensemål og turtall",
    utstyr: "Skyvelære og dreiebenk, eller tallene under",
    hms: "Ikke start dreiebenken før turtallet er valgt og skjermen er nede.",
    tekst: "<p>Emnet er Ø32 mm. Ferdig mål er \\(28{,}0 \\pm 0{,}2\\) mm. Anbefalt skjærehastighet på ferdig diameter er 30 m/min. Bruk \\(v_c = \\pi \\cdot d \\cdot n / 1000\\).</p>",
    steg: [{ verdi: 28.2, enhet: "mm" }, { verdi: 27.8, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange millimeter må du minst ta av diameteren, så akselen ikke er for tykk?", svar: { verdi: 3.8, enhet: "mm" } },
      { tekst: "Hvor mange millimeter kan du høyst ta av før akselen blir for tynn?", svar: { verdi: 4.2, enhet: "mm" } },
      { tekst: "Hvilket turtall passer for diameter 28 mm og 30 m/min? Nærmeste hele r/min.", svar: { verdi: 341, enhet: "r/min", tol: 0.5 } }
    ],
    hint: ["Største godkjente mål er 28,2 mm. Minste er 27,8 mm. Turtall: \\(n = 1000 \\cdot v_c / (\\pi \\cdot d)\\).", "a) \\(32 - 28{,}2\\). b) \\(32 - 27{,}8\\). c) \\(1000 \\cdot 30 / (\\pi \\cdot 28)\\)."],
    losning: "<p>a) \\(32 - 28{,}2 = 3{,}8\\) mm. Tar du mindre, er akselen fortsatt for tykk.<br>b) \\(32 - 27{,}8 = 4{,}2\\) mm. Tar du mer, er den for tynn.<br>c) \\(n = 30\\,000 / (28\\pi) \\approx 341\\) r/min.</p>"
  },
  {
    id: "diagonal-ramme",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tekst: "<p>En sveiset ramme er 150 cm lang og 200 cm bred. Hjørnet skal være rett. Hvor lang er diagonalen? Bruk 3-4-5.</p>",
    steg: [{ verdi: 50 }],
    svar: { verdi: 250, enhet: "cm" },
    hint: ["3-4-5 kan ganges med 50. 3 · 50 = 150 og 4 · 50 = 200.", "Diagonalen er \\(5 \\cdot 50\\) cm."],
    losning: "<p>\\(150\\) og \\(200\\) er \\(3 \\cdot 50\\) og \\(4 \\cdot 50\\). Diagonalen er \\(5 \\cdot 50 = 250\\) cm.</p>"
  },
  {
    id: "del1-trad",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Kilopris på tråd",
    tekst: "<p>Uten kalkulator. En spole med 4 kg sveisetråd koster 360 kr.</p>",
    steg: [{ verdi: 90, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster tråden per kilogram?", svar: { verdi: 90, enhet: "kr" } },
      { tekst: "Hva koster 1,5 kg?", svar: { verdi: 135, enhet: "kr" } }
    ],
    hint: ["Del totalprisen på antall kilogram. 1,5 kg er tre ganger en halv kilo.", "\\(360 / 4 = 90\\) kr per kg. Deretter \\(1{,}5 \\cdot 90\\)."],
    losning: "<p>a) \\(360 / 4 = 90\\) kr/kg<br>b) \\(1{,}5 \\cdot 90 = 135\\) kr.</p>"
  }
]);
