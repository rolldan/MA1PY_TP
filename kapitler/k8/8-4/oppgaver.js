Bok.oppgaver([
  {
    id: "liter-lakk",
    niva: "lett",
    tittel: "Liter lakk",
    tekst: "<p>Karosseriet er 12 m². Lakken dekker 6 m² per liter per strøk. Dere tar to strøk. Hvor mange liter lakk trengs?</p>",
    steg: [{ verdi: 2, enhet: "L" }],
    svar: { verdi: 4, enhet: "L", tol: 0.05 },
    hint: ["Ett strøk: del arealet på dekkevnen.", "\\(12 : 6 = 2\\) L. Gang med 2 strøk."],
    losning: "<p>\\(12 \\cdot 2 : 6 = 4\\) L.</p>"
  },
  {
    id: "liter-grunning",
    niva: "lett",
    tittel: "Liter grunning",
    tekst: "<p>Samme karosseri, 12 m². Grunningen dekker 8 m² per liter, og dere tar ett strøk. Hvor mange liter grunning trengs?</p>",
    svar: { verdi: 1.5, enhet: "L", tol: 0.05 },
    hint: ["Ett strøk: del arealet på 8.", "\\(12 : 8\\)."],
    losning: "<p>\\(12 : 8 = 1{,}5\\) L.</p>"
  },
  {
    id: "pris-lakk",
    niva: "middels",
    tittel: "Hva koster strøkene?",
    tekst: "<p>4 liter lakk à 400 kr og 1,5 liter grunning à 200 kr. Prisene er inkl. mva.</p>",
    deler: [
      { tekst: "Hva koster lakken?", svar: { verdi: 1600, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster lakk og grunning til sammen?", svar: { verdi: 1900, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Gang liter med pris per liter.", "Lakk \\(4 \\cdot 400\\). Grunning \\(1{,}5 \\cdot 200\\)."],
    losning: "<p>Lakk: \\(1\\,600\\) kr. Grunning: \\(300\\) kr. Sum: \\(1\\,900\\) kr.</p>"
  },
  {
    id: "andel-pott",
    niva: "middels",
    tittel: "Andel av potten",
    tekst: "<p>Lakk og grunning koster 1 900 kr. Potten er 50 000 kr. Hvor mange prosent er det?</p>",
    svar: { verdi: 3.8, enhet: "%", tol: 0.05 },
    hint: ["Del kostnaden på potten og gang med 100.", "\\(1\\,900 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>\\(1\\,900 : 50\\,000 \\cdot 100 = 3{,}8\\) %.</p>"
  },
  {
    id: "panser",
    niva: "middels",
    tittel: "Ett panser",
    tekst: "<p>Et panser er 140 cm langt og 120 cm bredt. Dere lakkerer én side, to strøk. Lakken dekker 6 m² per liter.</p>",
    steg: [{ verdi: 1.4, enhet: "m" }, { verdi: 1.2, enhet: "m" }],
    deler: [
      { tekst: "Hvor stort er arealet?", svar: { verdi: 1.68, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.56, enhet: "L", tol: 0.02 } }
    ],
    hint: ["Gjør om til meter: 140 cm = 1,40 m.", "Areal \\(1{,}40 \\cdot 1{,}20\\). Liter: areal · 2 : 6."],
    losning: "<p>Areal: \\(1{,}40 \\cdot 1{,}20 = 1{,}68\\) m².</p><p>Lakk: \\(1{,}68 \\cdot 2 : 6 = 0{,}56\\) L.</p>"
  },
  {
    id: "svinn",
    niva: "vanskelig",
    tittel: "Ti prosent svinn",
    tekst: "<p>Dere kjøper 10 % ekstra. Uten svinn var det 4 L lakk og 1,5 L grunning. Prisene er 400 kr og 200 kr per liter.</p>",
    deler: [
      { tekst: "Hvor mange liter lakk kjøper dere?", svar: { verdi: 4.4, enhet: "L", tol: 0.05 } },
      { tekst: "Hva koster lakk og grunning med svinn?", svar: { verdi: 2090, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Gang literne med 1,10.", "Lakk \\(4{,}4 \\cdot 400\\). Grunning \\(1{,}65 \\cdot 200\\)."],
    losning: "<p>Lakk: \\(4 \\cdot 1{,}10 = 4{,}4\\) L.</p><p>Grunning: \\(1{,}5 \\cdot 1{,}10 = 1{,}65\\) L.</p><p>Kostnad: \\(4{,}4 \\cdot 400 + 1{,}65 \\cdot 200 = 1\\,760 + 330 = 2\\,090\\) kr.</p>"
  },
  {
    id: "dor-vindu",
    niva: "vanskelig",
    tittel: "Dør med vindu",
    tekst: "<p>En dør er 1,20 m × 0,90 m. Vinduet er 0,60 m × 0,40 m og skal ikke lakkeres. To strøk lakk, dekkevne 6 m² per liter.</p>",
    steg: [{ verdi: 1.08, enhet: "m²" }, { verdi: 0.24, enhet: "m²" }],
    deler: [
      { tekst: "Hva er nettoarealet som lakkeres?", svar: { verdi: 0.84, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.28, enhet: "L", tol: 0.02 } }
    ],
    hint: ["Trekk vindusarealet fra dørarealet.", "Dør \\(1{,}20 \\cdot 0{,}90\\). Vindu \\(0{,}60 \\cdot 0{,}40\\)."],
    losning: "<p>Dør: \\(1{,}08\\) m². Vindu: \\(0{,}24\\) m². Netto: \\(0{,}84\\) m².</p><p>Lakk: \\(0{,}84 \\cdot 2 : 6 = 0{,}28\\) L.</p>"
  },
  {
    id: "mal-dor",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Døra i verkstedet",
    utstyr: "Målebånd, hansker, kalkulator",
    hms: "Hansker hvis platekanten er skarp. Ikke løft panseret alene hvis gassfjæra er sliten. Ingen sliping i denne økta.",
    tekst: "<p>Bruk først eksempelet, så deres eget mål. Eksempeldør: 1,10 m × 0,90 m, én side, to strøk lakk, dekkevne 6 m² per liter.</p>",
    deler: [
      { tekst: "Hva er arealet av eksempeldøra?", svar: { verdi: 0.99, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs til eksempeldøra?", svar: { verdi: 0.33, enhet: "L", tol: 0.02 } },
      { tekst: "Skriv målene dere tok på en ekte dør eller et panser, og arealet dere fikk.", svar: { fritekst: true, fasit: "<p>Svaret bør ha lengde, bredde, enhet og areal i m². Liter kan være med. Egne mål godtas når utregningen henger sammen med målene.</p>" } }
    ],
    hint: ["Areal = lengde · bredde, i meter.", "\\(1{,}10 \\cdot 0{,}90\\). Liter: areal · 2 : 6."],
    losning: "<p>Areal: \\(1{,}10 \\cdot 0{,}90 = 0{,}99\\) m².</p><p>Lakk: \\(0{,}99 \\cdot 2 : 6 = 0{,}33\\) L.</p>"
  },
  {
    id: "repetisjon-plate",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tekst: "<p>En plate er 0,80 m lang og 0,45 m bred. Hva er arealet?</p>",
    svar: { verdi: 0.36, enhet: "m²", tol: 0.005 },
    hint: ["Areal av rektangel = lengde · bredde.", "\\(0{,}80 \\cdot 0{,}45\\)."],
    losning: "<p>\\(0{,}80 \\cdot 0{,}45 = 0{,}36\\) m².</p>"
  },
  {
    id: "eksamen-lakk",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et karosseri er 12 m². Lakken dekker 6 m² per liter per strøk. Grunningen dekker 8 m² per liter. To strøk lakk, ett strøk grunning.</p>",
    deler: [
      { tekst: "Hvor mange liter lakk?", svar: { verdi: 4, enhet: "L", tol: 0.05 } },
      { tekst: "Hvor mange liter grunning?", svar: { verdi: 1.5, enhet: "L", tol: 0.05 } }
    ],
    hint: ["Lakk: areal · 2 : 6.", "Grunning: areal : 8."],
    losning: "<p>Lakk: \\(4\\) L. Grunning: \\(1{,}5\\) L.</p>"
  }
]);
