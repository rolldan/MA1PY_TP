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
  },
  {
    id: "hjul-300",
    niva: "lett",
    tittel: "300 N på hjulkrysset",
    tekst: "<p>Du presser med 300 N ytterst på et hjulkryss. Armen er 0,3 m. Hvor stort moment blir det?</p>",
    svar: { verdi: 90, enhet: "Nm" },
    hint: ["Moment er kraft ganger arm: \\(M = F \\cdot a\\). Svaret er i Nm, ikke N.", "\\(300 \\cdot 0{,}3\\)."],
    losning: "<p>\\(M = 300 \\cdot 0{,}3 = 90\\) Nm.</p>"
  },
  {
    id: "skralle-60",
    niva: "lett",
    tittel: "Liten skralle",
    tekst: "<p>En skrue skal trekkes til 60 Nm. Skrallen er 0,3 m. Hvor stor kraft må du dra med? Bruk \\(F = M : a\\).</p>",
    svar: { verdi: 200, enhet: "N" },
    hint: ["Kraften er moment delt på arm. Ikke gang 60 med 0,3.", "\\(F = 60 : 0{,}3\\)."],
    losning: "<p>\\(F = 60 : 0{,}3 = 200\\) N.<br>Kontroll: \\(200 \\cdot 0{,}3 = 60\\) Nm.</p>"
  },
  {
    id: "rett-enhet",
    niva: "lett",
    tittel: "110 på hjulbolten",
    tekst: "<p>Du drar med 220 N i en arm på 0,5 m. Håndboka for hjulbolten oppgir et tall på 110.</p>",
    deler: [
      { tekst: "Hvor stort moment lager du?", svar: { verdi: 110, enhet: "Nm" } },
      { tekst: "Hvilken enhet skal stå i håndboka?", svar: { valg: ["N", "Nm", "kg"], riktig: 1, forklaring: "Moment er newtonmeter. 110 N ville vært en kraft." } }
    ],
    hint: ["\\(M = F \\cdot a\\). Enheten for moment er Nm.", "\\(220 \\cdot 0{,}5\\)."],
    losning: "<p>\\(M = 220 \\cdot 0{,}5 = 110\\) Nm.<br>110 N er feil enhet. 110 kg er en masse, ikke et moment.</p>"
  },
  {
    id: "eksosflens",
    niva: "middels",
    tittel: "Eksosflensen",
    tekst: "<p>Flensen skal trekkes til 160 Nm. Nøkkelen er 0,4 m fra boltens senter til grepet. Bruk 10 N per kg når du anslår tyngden på grepet.</p>",
    deler: [
      { tekst: "Hvor stor kraft må du dra med?", svar: { verdi: 400, enhet: "N" } },
      { tekst: "Omtrent hvor mange kilogram tilsvarer den kraften?", svar: { verdi: 40, enhet: "kg" } }
    ],
    hint: ["\\(F = M : a\\). Deretter deler du newton på 10 for å få kilogram.", "\\(F = 160 : 0{,}4\\)."],
    losning: "<p>\\(F = 160 : 0{,}4 = 400\\) N.<br>\\(400 : 10 = 40\\) kg på grepet.<br>Kontroll: \\(400 \\cdot 0{,}4 = 160\\) Nm.</p>"
  },
  {
    id: "ror-800",
    niva: "middels",
    tittel: "800 på den rustne mutteren",
    tekst: "<p>En mutter på en traktor sitter fast. Kravet for å løsne den er 800. Du klarer å dra med 500 N. Bruk \\(a = M : F\\).</p>",
    deler: [
      { tekst: "Hvilken enhet har kravet på 800?", svar: { valg: ["N", "Nm", "kg"], riktig: 1, forklaring: "Det som trengs for å løsne mutteren, er et moment." } },
      { tekst: "Hvor lang må armen minst være?", svar: { verdi: 1.6, enhet: "m" } }
    ],
    hint: ["800 er moment, altså Nm. Del momentet på kraften.", "\\(a = 800 : 500\\)."],
    losning: "<p>Kravet er 800 Nm, ikke 800 N.<br>\\(a = 800 : 500 = 1{,}6\\) m.<br>Kontroll: \\(500 \\cdot 1{,}6 = 800\\) Nm.</p>"
  },
  {
    id: "nav-420",
    niva: "vanskelig",
    tittel: "Røret er for kort",
    tekst: "<p>En navmutter krever 420 Nm. Du drar med 500 N. Røret du har, er 0,5 m. Du kan tre et ekstra rør utenpå, men ikke på en momentnøkkel.</p>",
    deler: [
      { tekst: "Hvor stort moment klarer du med røret på 0,5 m?", svar: { verdi: 250, enhet: "Nm" } },
      { tekst: "Klarer du å løsne mutteren med dette røret?", svar: { valg: ["Ja, 250 Nm er mer enn 420 Nm", "Nei, 250 Nm er mindre enn 420 Nm", "Ja, hvis du drar raskere"], riktig: 1, forklaring: "250 Nm er mindre enn kravet på 420 Nm." } },
      { tekst: "Hvor lang må armen minst være?", svar: { verdi: 84, enhet: "cm" } },
      { tekst: "Hvor mange centimeter må du forlenge røret med?", svar: { verdi: 34, enhet: "cm" } }
    ],
    steg: [{ verdi: 250, enhet: "Nm" }, { verdi: 0.84, enhet: "m" }, { verdi: 50, enhet: "cm" }],
    hint: ["Momentet nå er \\(M = F \\cdot a\\). Minste arm er \\(a = M : F\\). Gjør om meter til centimeter før du trekker fra.", "\\(500 \\cdot 0{,}5 = 250\\). Minste arm: \\(420 : 500 = 0{,}84\\) m, som er 84 cm. Røret du har, er 50 cm."],
    losning: "<p>\\(M = 500 \\cdot 0{,}5 = 250\\) Nm. Det er mindre enn 420 Nm.<br>Minste arm: \\(420 : 500 = 0{,}84\\) m \\(= 84\\) cm.<br>Forlengelse: \\(84 - 50 = 34\\) cm.</p>"
  },
  {
    id: "ganget-feil",
    niva: "vanskelig",
    tittel: "75 N er feil vei",
    tekst: "<p>En bolt skal ha 150 Nm. Nøkkelen er 0,5 m. En medelev regnet \\(150 \\cdot 0{,}5 = 75\\) og kalte svaret kraft.</p>",
    deler: [
      { tekst: "Hva er riktig kraft?", svar: { verdi: 300, enhet: "N" } },
      { tekst: "Hva gjorde medeleven feil?", svar: { valg: ["Momentet ble ganget med armen", "Armen ble oppgitt i centimeter", "Enheten Nm ble brukt riktig, men tallet 75 er bare avrundet"], riktig: 0, forklaring: "Kraften er moment delt på arm: \\(F = M : a\\)." } },
      { tekst: "Hvilket moment får du til kontroll hvis kraften er 300 N?", svar: { verdi: 150, enhet: "Nm" } }
    ],
    hint: ["\\(F = M : a\\). Kontrollen er å gange kraften tilbake med armen.", "\\(F = 150 : 0{,}5\\)."],
    losning: "<p>\\(F = 150 : 0{,}5 = 300\\) N.<br>75 kommer av å gange, og det er ikke en kraft som gir 150 Nm.<br>Kontroll: \\(300 \\cdot 0{,}5 = 150\\) Nm.</p>"
  },
  {
    id: "klammer",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Klammer på 25 Nm",
    utstyr: "Momentnøkkel, klammer eller bolt fastspent i benk, tommestokk",
    hms: "Ikke forleng en momentnøkkel med rør. Dra jevnt til den klikker. Ikke rykk. Vernesko. Stå slik at du ikke faller inn i benken hvis nøkkelen glipper.",
    tekst: "<p>Klammeret skal ha 25 Nm. Fra boltens senter til grepet er det 0,25 m. Hvor stor kraft tilsvarer det i grepet?</p>",
    svar: { verdi: 100, enhet: "N" },
    hint: ["\\(F = M : a\\). Ikke gang 25 med 0,25.", "\\(25 : 0{,}25\\)."],
    losning: "<p>\\(F = 25 : 0{,}25 = 100\\) N. Det er omtrent 10 kg på grepet.<br>Kontroll: \\(100 \\cdot 0{,}25 = 25\\) Nm.</p>"
  }
]);
