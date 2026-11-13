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
  }
]);
