Bok.oppgaver([
  {
    id: "hjulkryss",
    niva: "lett",
    tittel: "Hjulkryss",
    tekst: "<p>Du presser med 250 N ytterst på et hjulkryss. Armen er 0,4 m. Hvor stort moment blir det?</p>",
    svar: { verdi: 100, enhet: "Nm" },
    hint: ["Moment er kraft ganger arm: \\(M = F \\cdot a\\).", "\\(250 \\cdot 0{,}4\\)."],
    losning: "<p>\\(M = 250 \\cdot 0{,}4 = 100\\) Nm.</p>"
  },
  {
    id: "topplokk",
    niva: "lett",
    tittel: "Topplokk",
    tekst: "<p>Boltene skal ha 120 Nm. Momentnøkkelen er 0,6 m. Hvor stor kraft må du dra med?</p>",
    svar: { verdi: 200, enhet: "N" },
    hint: ["Kraften er moment delt på arm: \\(F = M : a\\).", "\\(120 : 0{,}6\\)."],
    losning: "<p>\\(F = 120 : 0{,}6 = 200\\) N.</p>"
  },
  {
    id: "stempel",
    niva: "middels",
    tittel: "Fra stempel til veiv",
    tekst: "<p>Stempelet presser med 4000 N. Sentrum på veivakselen ligger 45 mm fra der råden er festet.</p>",
    deler: [
      { tekst: "Hvor lang er armen i meter?", svar: { verdi: 0.045, enhet: "m" } },
      { tekst: "Hvor stort moment blir det?", svar: { verdi: 180, enhet: "Nm" } }
    ],
    hint: ["45 mm = 45 : 1000 m. Moment er kraft ganger denne armen.", "\\(4000 \\cdot 0{,}045\\)."],
    losning: "<p>\\(45\\ \\text{mm} = 0{,}045\\ \\text{m}\\).<br>\\(M = 4000 \\cdot 0{,}045 = 180\\) Nm.</p>"
  },
  {
    id: "fastrustet",
    niva: "middels",
    tittel: "Fastrustet mutter",
    tekst: "<p>Mutteren krever et moment på 1000 Nm. Du klarer å dra med 500 N. Hvor lang må latmannsarmen minst være?</p>",
    deler: [
      { tekst: "Hvilken enhet har kravet på 1000?", svar: { valg: ["N", "Nm", "kg"], riktig: 1, forklaring: "Moment måles i newtonmeter." } },
      { tekst: "Hvor lang må armen være?", svar: { verdi: 2, enhet: "m" } }
    ],
    hint: ["\\(a = M : F\\). Kravet er moment, ikke kraft.", "\\(1000 : 500\\)."],
    losning: "<p>Kravet er 1000 Nm.<br>\\(a = 1000 : 500 = 2\\) m.</p>"
  },
  {
    id: "laerlingen",
    niva: "vanskelig",
    tittel: "Klarer lærlingen det?",
    tekst: "<p>Navmutteren krever 350 Nm. Lærlingen veier 70 kg. Bruk 10 N per kg. Hen står med hele tyngden på en latmannsarm på 40 cm.</p>",
    deler: [
      { tekst: "Hvor lang er armen i meter?", svar: { verdi: 0.4, enhet: "m" } },
      { tekst: "Hvor stort moment klarer lærlingen å lage?", svar: { verdi: 280, enhet: "Nm" } },
      { tekst: "Klarer hen å løsne mutteren med denne armen?", svar: { valg: ["Ja, 280 Nm er nok", "Nei, det trengs et lengre rør", "Ja, hvis hen drar raskere"], riktig: 1, forklaring: "280 Nm er mindre enn 350 Nm." } },
      { tekst: "Hvor lang må armen minst være?", svar: { verdi: 0.5, enhet: "m" } }
    ],
    hint: ["70 kg er omtrent 700 N. 40 cm er 0,4 m. \\(M = F \\cdot a\\).", "\\(700 \\cdot 0{,}4 = 280\\). For å finne armen: \\(350 : 700\\)."],
    losning: "<p>\\(a = 0{,}4\\) m og \\(F \\approx 700\\) N.<br>\\(M = 700 \\cdot 0{,}4 = 280\\) Nm. Det er mindre enn 350 Nm.<br>Nødvendig arm: \\(350 : 700 = 0{,}5\\) m.</p>"
  },
  {
    id: "momentnokkel",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Klikk på nøkkelen",
    utstyr: "Momentnøkkel, fastspent bolt i benk, tommestokk",
    hms: "Ikke forleng en momentnøkkel med rør. Dra jevnt, ikke rykk. Bolt og nøkkel skal peke slik at du ikke faller inn i benken hvis noe glipper. Vernesko.",
    tekst: "<p>Nøkkelen er 0,45 m fra boltens senter til grepet. Du skal trekke til 90 Nm. Hvor stor kraft tilsvarer det i grepet?</p>",
    svar: { verdi: 200, enhet: "N" },
    hint: ["\\(F = M : a\\).", "\\(90 : 0{,}45\\)."],
    losning: "<p>\\(F = 90 : 0{,}45 = 200\\) N. Det er omtrent 20 kg på grepet.</p>"
  },
  {
    id: "rep-strom",
    type: "repetisjon",
    fra: "5.3",
    niva: "lett",
    tekst: "<p>En LED-bar på 2,4 Ω står på 12 V. Hvor stor er strømmen?</p>",
    svar: { verdi: 5, enhet: "A" },
    hint: ["\\(I = U : R\\).", "\\(12 : 2{,}4\\)."],
    losning: "<p>\\(I = 12 : 2{,}4 = 5\\) A.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Armen på en nøkkel måles til 450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 0.45, enhet: "m" },
    hint: ["Fra mm til m deler du med 1000.", "\\(450 : 1000 = 0{,}45\\)."],
    losning: "<p>\\(450 : 1000 = 0{,}45\\) m.</p>"
  },
  {
    id: "eksamen-moment",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En bolt skal trekkes til 80 Nm. Armen er 0,2 m.</p>",
    deler: [
      { tekst: "Hvilken formel gir kraften?", svar: { valg: ["\\(F = M \\cdot a\\)", "\\(F = M : a\\)", "\\(F = a : M\\)"], riktig: 1, forklaring: "Del momentet på armen." } },
      { tekst: "Hvor stor er kraften?", svar: { verdi: 400, enhet: "N" } }
    ],
    hint: ["\\(F = M : a\\).", "\\(80 : 0{,}2\\)."],
    losning: "<p>\\(F = 80 : 0{,}2 = 400\\) N.</p>"
  }
]);
