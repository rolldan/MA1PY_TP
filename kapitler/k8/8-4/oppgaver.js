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
  },
  {
    id: "cm-til-meter",
    niva: "lett",
    tittel: "Panser fra centimeter",
    tekst: "<p>Et panser er 140 cm langt og 120 cm bredt. Gjør om til meter før dere ganger.</p>",
    deler: [
      { tekst: "Hvor mange meter er lengden?", svar: { verdi: 1.4, enhet: "m", tol: 0.01 } },
      { tekst: "Hvor mange meter er bredden?", svar: { verdi: 1.2, enhet: "m", tol: 0.01 } }
    ],
    hint: ["Del centimeter på 100.", "\\(140 : 100\\) og \\(120 : 100\\)."],
    losning: "<p>\\(140\\) cm \\(= 1{,}40\\) m. \\(120\\) cm \\(= 1{,}20\\) m.</p>"
  },
  {
    id: "grunning-kroner",
    niva: "lett",
    tittel: "Hva koster grunningen?",
    tekst: "<p>Hele karosseriet trenger 1,5 liter grunning. Prisen er 200 kr per liter, inkl. mva. Hva koster grunningen?</p>",
    svar: { verdi: 300, enhet: "kr", tol: 0.5 },
    hint: ["Gang liter med pris per liter.", "\\(1{,}5 \\cdot 200\\)."],
    losning: "<p>\\(1{,}5 \\cdot 200 = 300\\) kr.</p>"
  },
  {
    id: "ett-strok",
    niva: "lett",
    tittel: "Ett strøk på hele bilen",
    tekst: "<p>Karosseriet er 12 m². Lakken dekker 6 m² per liter per strøk. Hvor mange liter går med til ett strøk?</p>",
    svar: { verdi: 2, enhet: "L", tol: 0.05 },
    hint: ["Del arealet på dekkevnen.", "\\(12 : 6\\). To strøk blir det dobbelte."],
    losning: "<p>\\(12 : 6 = 2\\) L. To strøk krever 4 L.</p>"
  },
  {
    id: "to-liter-pris",
    niva: "lett",
    tittel: "Pris på to liter",
    tekst: "<p>Lakken koster 400 kr per liter. Hva koster 2 liter?</p>",
    svar: { verdi: 800, enhet: "kr", tol: 0.5 },
    hint: ["Gang antall liter med prisen.", "\\(2 \\cdot 400\\)."],
    losning: "<p>\\(2 \\cdot 400 = 800\\) kr. Det er prisen på ett strøk av hele karosseriet på 12 m².</p>"
  },
  {
    id: "dorblad",
    niva: "middels",
    tittel: "En dørplate",
    tekst: "<p>En dørplate er 1,50 m × 1,00 m. Dere lakkerer én side, to strøk. Lakken dekker 6 m² per liter og koster 400 kr per liter.</p>",
    steg: [{ verdi: 1.5, enhet: "m²" }, { verdi: 0.5, enhet: "L" }],
    deler: [
      { tekst: "Hva er arealet?", svar: { verdi: 1.5, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.5, enhet: "L", tol: 0.02 } },
      { tekst: "Hva koster lakken?", svar: { verdi: 200, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Areal = lengde · bredde.", "Liter: \\(1{,}50 \\cdot 2 : 6\\)."],
    losning: "<p>Areal: \\(1{,}50 \\cdot 1{,}00 = 1{,}50\\) m².</p><p>Lakk: \\(1{,}50 \\cdot 2 : 6 = 0{,}50\\) L.</p><p>Pris: \\(0{,}50 \\cdot 400 = 200\\) kr.</p>"
  },
  {
    id: "to-dorer",
    niva: "middels",
    tittel: "To like dører",
    tekst: "<p>Eksempeldøra er 1,10 m × 0,90 m. Dere lakkerer to slike dører, én side, to strøk. Dekkevne 6 m² per liter. Lakk 400 kr per liter.</p>",
    steg: [{ verdi: 0.99, enhet: "m²" }, { verdi: 1.98, enhet: "m²" }],
    deler: [
      { tekst: "Hva er arealet av begge dørene?", svar: { verdi: 1.98, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.66, enhet: "L", tol: 0.02 } },
      { tekst: "Hva koster lakken?", svar: { verdi: 264, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Én dør: \\(1{,}10 \\cdot 0{,}90\\). Gang med 2.", "Liter: areal · 2 : 6."],
    losning: "<p>Én dør: \\(0{,}99\\) m². To dører: \\(1{,}98\\) m².</p><p>Lakk: \\(1{,}98 \\cdot 2 : 6 = 0{,}66\\) L.</p><p>Pris: \\(0{,}66 \\cdot 400 = 264\\) kr.</p>"
  },
  {
    id: "panser-pris",
    niva: "middels",
    tittel: "Panser, liter og kroner",
    tekst: "<p>Panseret er 1,68 m². To strøk lakk, dekkevne 6 m² per liter, 400 kr per liter. Ett strøk grunning, dekkevne 8 m² per liter, 200 kr per liter.</p>",
    steg: [{ verdi: 0.56, enhet: "L" }, { verdi: 0.21, enhet: "L" }, { verdi: 224, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange liter lakk?", svar: { verdi: 0.56, enhet: "L", tol: 0.02 } },
      { tekst: "Hvor mange liter grunning?", svar: { verdi: 0.21, enhet: "L", tol: 0.02 } },
      { tekst: "Hva koster lakk og grunning til sammen?", svar: { verdi: 266, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Lakk: areal · 2 : 6. Grunning: areal : 8.", "Kroner: \\(0{,}56 \\cdot 400 + 0{,}21 \\cdot 200\\)."],
    losning: "<p>Lakk: \\(1{,}68 \\cdot 2 : 6 = 0{,}56\\) L, som koster \\(224\\) kr.</p><p>Grunning: \\(1{,}68 : 8 = 0{,}21\\) L, som koster \\(42\\) kr.</p><p>Sum: \\(266\\) kr.</p>"
  },
  {
    id: "skjermer",
    niva: "middels",
    tittel: "To skjermer",
    tekst: "<p>Hver skjerm er 0,80 m × 0,30 m. Dere lakkerer to skjermer, én side. To strøk lakk (6 m² per liter, 400 kr/L) og ett strøk grunning (8 m² per liter, 200 kr/L).</p>",
    steg: [{ verdi: 0.24, enhet: "m²" }, { verdi: 0.48, enhet: "m²" }, { verdi: 0.16, enhet: "L" }, { verdi: 0.06, enhet: "L" }],
    deler: [
      { tekst: "Hva er arealet av begge skjermene?", svar: { verdi: 0.48, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.16, enhet: "L", tol: 0.02 } },
      { tekst: "Hva koster lakk og grunning til sammen?", svar: { verdi: 76, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Én skjerm: \\(0{,}80 \\cdot 0{,}30\\). Gang med 2.", "Grunning: \\(0{,}48 : 8 = 0{,}06\\) L. Lakk koster \\(0{,}16 \\cdot 400\\)."],
    losning: "<p>Én skjerm: \\(0{,}24\\) m². To: \\(0{,}48\\) m².</p><p>Lakk: \\(0{,}48 \\cdot 2 : 6 = 0{,}16\\) L, altså \\(64\\) kr.</p><p>Grunning: \\(0{,}06\\) L, altså \\(12\\) kr. Sum: \\(76\\) kr.</p>"
  },
  {
    id: "svinn-andel",
    niva: "middels",
    tittel: "Svinn og potten",
    tekst: "<p>Uten svinn koster lakk og grunning 1 900 kr. Med 10 % svinn blir prisen 2 090 kr. Potten er 50 000 kr.</p>",
    steg: [{ verdi: 2090, enhet: "kr" }, { verdi: 1900, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange kroner ekstra er svinnet?", svar: { verdi: 190, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent av potten er prisen med svinn? Avrund til én desimal.", svar: { verdi: 4.2, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Ekstra = pris med svinn minus pris uten.", "\\(2\\,090 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>Ekstra: \\(2\\,090 - 1\\,900 = 190\\) kr.</p><p>\\(2\\,090 : 50\\,000 \\cdot 100 = 4{,}18\\) %, som er 4,2 % med én desimal.</p>"
  },
  {
    id: "front-klipp",
    niva: "vanskelig",
    tittel: "Panser og støtfanger",
    tekst: "<p>Panseret er 1,40 m × 1,20 m. Støtfangerdekselet er 1,20 m × 0,60 m. Én side av hver del. To strøk lakk, ett strøk grunning. Dekkevne 6 m² og 8 m² per liter. Pris 400 kr og 200 kr per liter.</p>",
    steg: [{ verdi: 1.68, enhet: "m²" }, { verdi: 0.72, enhet: "m²" }, { verdi: 2.4, enhet: "m²" }],
    deler: [
      { tekst: "Hva er det samlede arealet?", svar: { verdi: 2.4, enhet: "m²", tol: 0.01 } },
      { tekst: "Hvor mange liter lakk trengs?", svar: { verdi: 0.8, enhet: "L", tol: 0.02 } },
      { tekst: "Hva koster lakk og grunning til sammen?", svar: { verdi: 380, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Regn de to arealene hver for seg, og legg dem sammen.", "Lakk: \\(2{,}40 \\cdot 2 : 6\\). Grunning: \\(2{,}40 : 8 = 0{,}30\\) L."],
    losning: "<p>Panser: \\(1{,}68\\) m². Støtfanger: \\(0{,}72\\) m². Sum: \\(2{,}40\\) m².</p><p>Lakk: \\(0{,}80\\) L, som koster \\(320\\) kr.</p><p>Grunning: \\(0{,}30\\) L, som koster \\(60\\) kr. Sum: \\(380\\) kr.</p>"
  },
  {
    id: "svinn-femten",
    niva: "vanskelig",
    tittel: "Femten prosent svinn",
    tekst: "<p>Uten svinn er det 4 L lakk à 400 kr og 1,5 L grunning à 200 kr. Dere kjøper 15 % ekstra.</p>",
    steg: [{ verdi: 1.15 }, { verdi: 4.6, enhet: "L" }, { verdi: 1.725, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter lakk kjøper dere?", svar: { verdi: 4.6, enhet: "L", tol: 0.05 } },
      { tekst: "Hva koster lakk og grunning med svinn?", svar: { verdi: 2185, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner dyrere er det enn 1 900 kr?", svar: { verdi: 285, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Gang literne med 1,15.", "Lakk \\(4{,}6 \\cdot 400\\). Grunning \\(1{,}725 \\cdot 200\\)."],
    losning: "<p>Lakk: \\(4 \\cdot 1{,}15 = 4{,}6\\) L.</p><p>Grunning: \\(1{,}5 \\cdot 1{,}15 = 1{,}725\\) L.</p><p>Kostnad: \\(4{,}6 \\cdot 400 + 1{,}725 \\cdot 200 = 1\\,840 + 345 = 2\\,185\\) kr.</p><p>Ekstra: \\(2\\,185 - 1\\,900 = 285\\) kr.</p>"
  },
  {
    id: "cm-fellen",
    niva: "vanskelig",
    tittel: "Centimeter som kvadratmeter",
    tekst: "<p>Panseret er 140 cm × 120 cm. En elev regner \\(140 \\cdot 120 = 16\\,800\\) og sier at arealet er 16 800 m².</p>",
    steg: [{ verdi: 1.4, enhet: "m" }, { verdi: 1.2, enhet: "m" }],
    deler: [
      { tekst: "Hva er det riktige arealet?", svar: { verdi: 1.68, enhet: "m²", tol: 0.01 } },
      {
        tekst: "Hva er feilen?",
        svar: {
          valg: [
            "Centimeter er ganget uten å bli meter. Tallet er 10 000 ganger for stort.",
            "Eleven har brukt omkrets i stedet for areal.",
            "Dekkevnen på 6 m² er glemt."
          ],
          riktig: 0,
          forklaring: "1,40 · 1,20 = 1,68. 16 800 : 1,68 = 10 000."
        }
      }
    ],
    hint: ["Gjør om begge målene til meter før du ganger.", "\\(1{,}40 \\cdot 1{,}20\\)."],
    losning: "<p>Riktig areal: \\(1{,}40 \\cdot 1{,}20 = 1{,}68\\) m².</p><p>\\(16\\,800 : 1{,}68 = 10\\,000\\). Hver side var 100 ganger for stor, og areal blir 100 · 100 ganger for stort.</p>"
  },
  {
    id: "verksted-spann",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Hele spann",
    utstyr: "Kalkulator. Spann på 1 liter hvis dere er i lakkbua.",
    hms: "Ingen sprøyting i denne økta. Lokk på spann. Hansker hvis dere er i lakkbua. Lakkdamp: ikke åpne spann uten lærer og avtrekk.",
    tekst: "<p>Hele bilen trenger 4,0 L lakk og 1,5 L grunning. Dere kan bare kjøpe hele spann på 1 L. Lakk koster 400 kr per liter, grunning 200 kr per liter.</p>",
    steg: [{ verdi: 4, enhet: "L" }, { verdi: 1.5, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange spann lakk må dere kjøpe?", svar: { verdi: 4, enhet: "stk", tol: 0 } },
      { tekst: "Hvor mange spann grunning må dere kjøpe?", svar: { verdi: 2, enhet: "stk", tol: 0 } },
      { tekst: "Hva koster spannene?", svar: { verdi: 2000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange liter grunning blir til overs?", svar: { verdi: 0.5, enhet: "L", tol: 0.05 } }
    ],
    hint: ["1,5 L grunning rekker ikke med ett spann. Rund opp til hele spann.", "Kostnad: \\(4 \\cdot 400 + 2 \\cdot 200\\)."],
    losning: "<p>Lakk: 4 spann. Grunning: 2 spann, fordi 1,5 L ikke går opp i hele liter.</p><p>Pris: \\(1\\,600 + 400 = 2\\,000\\) kr.</p><p>Til overs: \\(2 - 1{,}5 = 0{,}5\\) L grunning.</p>"
  },
  {
    id: "repetisjon-345",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tekst: "<p>En døråpning kontrolleres med 3-4-5. Den ene siden er 60 cm, den andre er 80 cm. Hvor lang skal diagonalen være?</p>",
    svar: { verdi: 100, enhet: "cm", tol: 0.5 },
    hint: ["3-4-5 kan dobles til 6-8-10. Her er målene i centimeter, ganget med 10.", "\\(3 \\cdot 20 = 60\\), \\(4 \\cdot 20 = 80\\), \\(5 \\cdot 20 = 100\\)."],
    losning: "<p>\\(60\\), \\(80\\) og \\(100\\) cm er 3-4-5 ganget med 20. Diagonalen skal være 100 cm hvis hjørnet er rett.</p>"
  }
]);
