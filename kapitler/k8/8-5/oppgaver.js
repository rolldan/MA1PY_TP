Bok.oppgaver([
  {
    id: "volum-liten",
    niva: "lett",
    tittel: "Liten kasse",
    tekst: "<p>Liten basskasse er 60 cm × 30 cm × 40 cm. Hvor mange liter er det ytre volumet?</p>",
    steg: [{ verdi: 72000, enhet: "cm³" }],
    svar: { verdi: 72, enhet: "L", tol: 0.5 },
    hint: ["Gang de tre sidene. Du får kubikkcentimeter.", "\\(60 \\cdot 30 \\cdot 40 = 72\\,000\\). Del på 1 000."],
    losning: "<p>\\(72\\,000\\) cm³ \\(= 72\\) L.</p>"
  },
  {
    id: "skala-bredde",
    niva: "lett",
    tittel: "Bredde på tegningen",
    tekst: "<p>Kassen er 80 cm bred. Du tegner i målestokk 1:10. Hvor bred blir tegningen?</p>",
    svar: { verdi: 8, enhet: "cm", tol: 0.05 },
    hint: ["Del det virkelige målet på 10.", "\\(80 : 10\\)."],
    losning: "<p>\\(80 : 10 = 8\\) cm.</p>"
  },
  {
    id: "volum-medium",
    niva: "middels",
    tittel: "Medium kasse",
    tekst: "<p>Medium kasse er 80 cm × 40 cm × 45 cm.</p>",
    deler: [
      { tekst: "Hvor mange kubikkcentimeter er volumet?", svar: { verdi: 144000, enhet: "cm³", tol: 1 } },
      { tekst: "Hvor mange liter er det?", svar: { verdi: 144, enhet: "L", tol: 0.5 } }
    ],
    hint: ["\\(80 \\cdot 40 = 3\\,200\\). Gang med 45.", "1 L = 1 000 cm³."],
    losning: "<p>\\(80 \\cdot 40 \\cdot 45 = 144\\,000\\) cm³ \\(= 144\\) L.</p>"
  },
  {
    id: "areal-pris",
    niva: "middels",
    tittel: "Plate og pris",
    tekst: "<p>Ytterflatene på medium kasse er 1,72 m². MDF koster 189 kr per m².</p>",
    steg: [{ verdi: 1.72, enhet: "m²" }],
    svar: { verdi: 325.08, enhet: "kr", tol: 0.5 },
    hint: ["Gang areal med pris per kvadratmeter.", "\\(1{,}72 \\cdot 189\\)."],
    losning: "<p>\\(1{,}72 \\cdot 189 = 325{,}08\\) kr. Avrundet til nærmeste krone: 325 kr.</p>"
  },
  {
    id: "vekt",
    niva: "middels",
    tittel: "Hvem løfter?",
    tekst: "<p>Platearealet er 1,72 m². Tykkelsen er 0,018 m. Tettheten er 750 kg/m³. Høyttaleren veier 3,2 kg. Over 25 kg bør to løfte.</p>",
    steg: [{ verdi: 0.03096, enhet: "m³" }],
    deler: [
      { tekst: "Hvor mange kilo veier treet? Avrund til én desimal.", svar: { verdi: 23.2, enhet: "kg", tol: 0.15 } },
      { tekst: "Hvor mange kilo veier kassen med høyttaler? Avrund til én desimal.", svar: { verdi: 26.4, enhet: "kg", tol: 0.15 } },
      {
        tekst: "Hvor mange personer bør løfte?",
        svar: {
          valg: ["Én", "To"],
          riktig: 1,
          forklaring: "26,4 kg er over 25 kg."
        }
      }
    ],
    hint: ["Volum = areal · tykkelse. Masse = volum · 750.", "\\(1{,}72 \\cdot 0{,}018 \\cdot 750\\)."],
    losning: "<p>Volum: \\(0{,}03096\\) m³. Masse tre: \\(23{,}2\\) kg. Med høyttaler: \\(26{,}4\\) kg. To personer.</p>"
  },
  {
    id: "indre",
    niva: "vanskelig",
    tittel: "Lufta inni",
    tekst: "<p>Ytre mål er 80 cm, 40 cm og 45 cm. Veggene er 1,8 cm. Indre mål blir 76,4 cm, 36,4 cm og 41,4 cm. Hvor mange liter luft er det inni? Avrund gjerne til én desimal.</p>",
    svar: { verdi: 115.13, enhet: "L", tol: 0.15 },
    hint: ["Gang de tre indre målene. Du får cm³.", "Del på 1 000. \\(76{,}4 \\cdot 36{,}4 \\cdot 41{,}4\\)."],
    losning: "<p>\\(76{,}4 \\cdot 36{,}4 \\cdot 41{,}4 \\approx 115\\,132\\) cm³, altså \\(115{,}1\\) L. Ytre volum var 144 L. Veggene spiser altså nesten 29 L.</p>"
  },
  {
    id: "modell",
    niva: "vanskelig",
    tittel: "Målestokk-fellen",
    tekst: "<p>Medium kasse er 144 L. Modellen lages i målestokk 1:10.</p>",
    deler: [
      { tekst: "Hvor mange liter er modellens volum?", svar: { verdi: 0.144, enhet: "L", tol: 0.01 } },
      {
        tekst: "En elev svarer 14,4 L. Hva er feilen?",
        svar: {
          valg: [
            "Volumet er delt på 10, men skulle deles på 1 000",
            "Volumet er delt på 100, men skulle deles på 10",
            "Eleven har brukt indre volum i stedet for ytre"
          ],
          riktig: 0,
          forklaring: "1:10 i tre retninger er 1:1000 i volum."
        }
      }
    ],
    hint: ["Lengde deles på 10. Volum deles på 10 · 10 · 10.", "\\(144 : 1\\,000\\)."],
    losning: "<p>\\(144 : 1\\,000 = 0{,}144\\) L. 14,4 L er ti ganger for stort.</p>"
  },
  {
    id: "kasse-verksted",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Kappemål på medium",
    utstyr: "Linjal, papp, blyant, kalkulator. Sag bare etter gjennomgang.",
    hms: "MDF-støv: støvmaske og avsug hvis noen sager. Ikke blås rent med trykkluft. Over 25 kg: to løfter. Ingen 12 V på høyttaleren uten lærer.",
    tekst: "<p>Laget bygger tallene for medium kasse før dere lager pappmodellen. Tilleggene koster 1 380 kr. Treprisen avrundes til 325 kr.</p>",
    deler: [
      { tekst: "Hva er det ytre volumet?", svar: { verdi: 144, enhet: "L", tol: 0.5 } },
      { tekst: "Hva koster tre og tillegg til sammen?", svar: { verdi: 1705, enhet: "kr", tol: 1 } }
    ],
    hint: ["Volumet er 144 L, fra teorien.", "\\(325 + 1\\,380\\)."],
    losning: "<p>Volum: \\(144\\) L. Kostnad: \\(325 + 1\\,380 = 1\\,705\\) kr.</p>"
  },
  {
    id: "repetisjon-mm",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>MDF-plata er 18 mm tykk. Hvor mange meter er det?</p>",
    svar: { verdi: 0.018, enhet: "m", tol: 0.0005 },
    hint: ["1 m = 1 000 mm. Del på 1 000.", "\\(18 : 1\\,000\\)."],
    losning: "<p>\\(18 : 1\\,000 = 0{,}018\\) m. Ikke 0,18 m.</p>"
  },
  {
    id: "eksamen-volum",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To kasser: 60 cm × 30 cm × 40 cm og 100 cm × 50 cm × 55 cm.</p>",
    deler: [
      { tekst: "Hvor mange liter er den minste?", svar: { verdi: 72, enhet: "L", tol: 0.5 } },
      { tekst: "Hvor mange liter er den største?", svar: { verdi: 275, enhet: "L", tol: 0.5 } }
    ],
    hint: ["Gang de tre målene og del på 1 000.", "Liten: \\(60 \\cdot 30 \\cdot 40\\). Stor: \\(100 \\cdot 50 = 5\\,000\\), gang med 55."],
    losning: "<p>Liten: \\(72\\) L. Stor: \\(275\\,000\\) cm³ \\(= 275\\) L.</p>"
  },
  {
    id: "hoyde-tegning",
    niva: "lett",
    tittel: "Høyde på tegningen",
    tekst: "<p>Medium kasse er 40 cm høy. Du tegner i målestokk 1:10. Hvor høy blir tegningen?</p>",
    svar: { verdi: 4, enhet: "cm", tol: 0.05 },
    hint: ["Del det virkelige målet på 10.", "\\(40 : 10\\)."],
    losning: "<p>\\(40 : 10 = 4\\) cm.</p>"
  },
  {
    id: "dybde-tegning",
    niva: "lett",
    tittel: "Dybde på tegningen",
    tekst: "<p>Medium kasse er 45 cm dyp. I målestokk 1:10, hvor dyp blir tegningen?</p>",
    svar: { verdi: 4.5, enhet: "cm", tol: 0.05 },
    hint: ["Del på målestokktallet.", "\\(45 : 10\\)."],
    losning: "<p>\\(45 : 10 = 4{,}5\\) cm.</p>"
  },
  {
    id: "skum-fire",
    niva: "lett",
    tittel: "Fire meter dempeskum",
    tekst: "<p>Dempeskum koster 65 kr per meter. Kassen trenger 4 meter. Hva koster skummet?</p>",
    svar: { verdi: 260, enhet: "kr", tol: 0.5 },
    hint: ["Gang meter med pris per meter.", "\\(4 \\cdot 65\\). Skummet er en del av tillegget på 1 380 kr."],
    losning: "<p>\\(4 \\cdot 65 = 260\\) kr.</p>"
  },
  {
    id: "skala-liten",
    niva: "lett",
    tittel: "Liten kasse i 1:5",
    tekst: "<p>Liten kasse er 60 cm bred og 30 cm høy. Du tegner i målestokk 1:5.</p>",
    deler: [
      { tekst: "Hvor bred blir tegningen?", svar: { verdi: 12, enhet: "cm", tol: 0.05 } },
      { tekst: "Hvor høy blir tegningen?", svar: { verdi: 6, enhet: "cm", tol: 0.05 } }
    ],
    hint: ["Del det virkelige målet på 5.", "\\(60 : 5\\) og \\(30 : 5\\)."],
    losning: "<p>Bredde: \\(60 : 5 = 12\\) cm. Høyde: \\(30 : 5 = 6\\) cm.</p>"
  },
  {
    id: "liten-areal",
    niva: "middels",
    tittel: "Plater til liten kasse",
    tekst: "<p>Liten kasse er 0,60 m × 0,30 m × 0,40 m. Platearealet er summen av de seks ytterflatene. MDF koster 189 kr per m².</p>",
    steg: [{ verdi: 0.36, enhet: "m²" }, { verdi: 0.48, enhet: "m²" }, { verdi: 0.24, enhet: "m²" }],
    deler: [
      { tekst: "Hva er platearealet?", svar: { verdi: 1.08, enhet: "m²", tol: 0.01 } },
      { tekst: "Hva koster treet, avrundet til nærmeste krone?", svar: { verdi: 204, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["To og to flater: \\(2 \\cdot 0{,}60 \\cdot 0{,}30\\), \\(2 \\cdot 0{,}60 \\cdot 0{,}40\\) og \\(2 \\cdot 0{,}30 \\cdot 0{,}40\\).", "Pris: \\(1{,}08 \\cdot 189 = 204{,}12\\), som er 204 kr nærmeste krone."],
    losning: "<p>Flater: \\(0{,}36 + 0{,}48 + 0{,}24 = 1{,}08\\) m².</p><p>Pris: \\(1{,}08 \\cdot 189 = 204{,}12\\) kr, avrundet 204 kr.</p>"
  },
  {
    id: "stor-areal",
    niva: "middels",
    tittel: "Plater til stor kasse",
    tekst: "<p>Stor kasse er 1,00 m × 0,50 m × 0,55 m. MDF koster 189 kr per m².</p>",
    steg: [{ verdi: 1, enhet: "m²" }, { verdi: 1.1, enhet: "m²" }, { verdi: 0.55, enhet: "m²" }],
    deler: [
      { tekst: "Hva er platearealet?", svar: { verdi: 2.65, enhet: "m²", tol: 0.01 } },
      { tekst: "Hva koster treet, avrundet til nærmeste krone?", svar: { verdi: 501, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["\\(2 \\cdot 1{,}00 \\cdot 0{,}50 + 2 \\cdot 1{,}00 \\cdot 0{,}55 + 2 \\cdot 0{,}50 \\cdot 0{,}55\\).", "\\(2{,}65 \\cdot 189 = 500{,}85\\), nærmeste krone er 501."],
    losning: "<p>Flater: \\(1{,}00 + 1{,}10 + 0{,}55 = 2{,}65\\) m².</p><p>Pris: \\(2{,}65 \\cdot 189 = 500{,}85\\) kr, avrundet 501 kr.</p>"
  },
  {
    id: "liten-vekt",
    niva: "middels",
    tittel: "Liten kasse på vekta",
    tekst: "<p>Platearealet er 1,08 m². Tykkelsen er 0,018 m. Tettheten er 750 kg/m³. Høyttaleren veier 3,2 kg. Over 25 kg bør to løfte.</p>",
    steg: [{ verdi: 0.01944, enhet: "m³" }, { verdi: 14.58, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange kilo veier treet? Avrund til én desimal.", svar: { verdi: 14.6, enhet: "kg", tol: 0.05 } },
      { tekst: "Hvor mange kilo veier kassen med høyttaler? Avrund til én desimal.", svar: { verdi: 17.8, enhet: "kg", tol: 0.05 } },
      {
        tekst: "Hvor mange personer bør løfte?",
        svar: {
          valg: ["Én", "To"],
          riktig: 0,
          forklaring: "17,8 kg er under 25 kg."
        }
      }
    ],
    hint: ["Volum = areal · tykkelse. Masse = volum · 750.", "\\(1{,}08 \\cdot 0{,}018 \\cdot 750 = 14{,}58\\)."],
    losning: "<p>Volum: \\(0{,}01944\\) m³. Treet: \\(14{,}6\\) kg med én desimal.</p><p>Med høyttaler: \\(14{,}58 + 3{,}2 = 17{,}78\\) kg, altså \\(17{,}8\\) kg. Én person kan løfte.</p>"
  },
  {
    id: "front-liten",
    niva: "middels",
    tittel: "Hull i liten front",
    tekst: "<p>Fronten på liten kasse er 60 cm × 30 cm. Høyttalerhullet har diameter 30 cm. Bruk \\(\\pi = 3{,}14\\).</p>",
    steg: [{ verdi: 15, enhet: "cm" }, { verdi: 225 }, { verdi: 1800, enhet: "cm²" }],
    deler: [
      { tekst: "Hva er arealet av hullet?", svar: { verdi: 706.5, enhet: "cm²", tol: 0.5 } },
      { tekst: "Hva er netto areal av fronten?", svar: { verdi: 1093.5, enhet: "cm²", tol: 0.5 } }
    ],
    hint: ["Radien er halvparten av diameteren. \\(A = 3{,}14 \\cdot 15^2\\).", "Front: \\(60 \\cdot 30\\). Trekk hullet fra."],
    losning: "<p>Hull: \\(3{,}14 \\cdot 225 = 706{,}5\\) cm².</p><p>Front: \\(1\\,800\\) cm². Netto: \\(1\\,800 - 706{,}5 = 1\\,093{,}5\\) cm². Treprisen bruker likevel hele plata.</p>"
  },
  {
    id: "indre-liten",
    niva: "vanskelig",
    tittel: "Lufta i liten kasse",
    tekst: "<p>Ytre mål er 60 cm, 30 cm og 40 cm. Veggene er 1,8 cm, så det går 3,6 cm i hver retning. Indre mål blir 56,4 cm, 26,4 cm og 36,4 cm. Hvor mange liter luft er det inni? Avrund til én desimal.</p>",
    steg: [{ verdi: 56.4, enhet: "cm" }, { verdi: 26.4, enhet: "cm" }, { verdi: 36.4, enhet: "cm" }],
    svar: { verdi: 54.2, enhet: "L", tol: 0.05 },
    hint: ["Gang de tre indre målene. Du får cm³.", "Del på 1 000. \\(56{,}4 \\cdot 26{,}4 \\cdot 36{,}4\\)."],
    losning: "<p>\\(56{,}4 \\cdot 26{,}4 \\cdot 36{,}4 \\approx 54\\,198\\) cm³, altså \\(54{,}2\\) L. Ytre volum var 72 L.</p>"
  },
  {
    id: "stor-vekt",
    niva: "vanskelig",
    tittel: "Stor kasse på vekta",
    tekst: "<p>Platearealet på stor kasse er 2,65 m². Tykkelse 0,018 m. Tetthet 750 kg/m³. Høyttaler 3,2 kg. Over 25 kg bør to løfte.</p>",
    steg: [{ verdi: 0.0477, enhet: "m³" }, { verdi: 35.775, enhet: "kg" }],
    deler: [
      { tekst: "Hvor mange kilo veier treet? Avrund til én desimal.", svar: { verdi: 35.8, enhet: "kg", tol: 0.05 } },
      { tekst: "Hvor mange kilo veier kassen med høyttaler? Avrund til én desimal.", svar: { verdi: 39, enhet: "kg", tol: 0.05 } },
      {
        tekst: "Hvor mange personer bør løfte?",
        svar: {
          valg: ["Én", "To"],
          riktig: 1,
          forklaring: "39,0 kg er over 25 kg."
        }
      }
    ],
    hint: ["\\(2{,}65 \\cdot 0{,}018 \\cdot 750\\).", "Legg på 3,2 kg."],
    losning: "<p>Volum: \\(0{,}0477\\) m³. Treet: \\(35{,}775\\) kg, altså \\(35{,}8\\) kg.</p><p>Med høyttaler: \\(38{,}975\\) kg, altså \\(39{,}0\\) kg. To personer.</p>"
  },
  {
    id: "modell-en-til-to",
    niva: "vanskelig",
    tittel: "Modell i 1:2",
    tekst: "<p>Medium kasse er 144 L. En pappmodell lages i målestokk 1:2.</p>",
    steg: [{ verdi: 8 }, { verdi: 144, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter er modellens volum?", svar: { verdi: 18, enhet: "L", tol: 0.1 } },
      {
        tekst: "En elev svarer 72 L. Hva er feilen?",
        svar: {
          valg: [
            "Volumet er delt på 2, men skulle deles på 8",
            "Volumet er delt på 8, men skulle deles på 2",
            "Eleven har brukt målestokk 1:10"
          ],
          riktig: 0,
          forklaring: "1:2 i tre retninger er 1:8 i volum. 144 : 8 = 18."
        }
      }
    ],
    hint: ["Lengde deles på 2. Volum deles på 2 · 2 · 2.", "\\(144 : 8\\)."],
    losning: "<p>\\(144 : 8 = 18\\) L. 72 L er bare delt på 2.</p>"
  },
  {
    id: "diagonal",
    niva: "vanskelig",
    tittel: "Diagonal på fronten",
    tekst: "<p>Fronten på medium kasse er 80 cm bred og 40 cm høy. Hvor lang er diagonalen? Avrund til én desimal. Bruk at \\(80^2 + 40^2 = 8\\,000\\).</p>",
    steg: [{ verdi: 6400 }, { verdi: 1600 }, { verdi: 8000 }],
    svar: { verdi: 89.4, enhet: "cm", tol: 0.1 },
    hint: ["Pytagoras: diagonalen er kvadratroten av \\(80^2 + 40^2\\).", "\\(\\sqrt{8\\,000} \\approx 89{,}4\\)."],
    losning: "<p>\\(80^2 = 6\\,400\\) og \\(40^2 = 1\\,600\\). Sum: \\(8\\,000\\).</p><p>\\(\\sqrt{8\\,000} \\approx 89{,}4\\) cm.</p>"
  },
  {
    id: "verksted-liten",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Liten kasse ferdig regnet",
    utstyr: "Linjal, papp, kalkulator. Sag bare etter gjennomgang.",
    hms: "MDF-støv: støvmaske og avsug hvis noen sager. Ikke blås rent med trykkluft. Ingen 12 V på høyttaleren uten lærer.",
    tekst: "<p>Liten kasse er 60 cm × 30 cm × 40 cm. Ytterflatene er 1,08 m². MDF koster 189 kr/m². Avrund treprisen til nærmeste krone. Tillegg for skruer, høyttaler, kabel og demping: 1 380 kr. Høyttaleren veier 3,2 kg, treet veier 14,6 kg.</p>",
    steg: [{ verdi: 204.12, enhet: "kr" }, { verdi: 72, enhet: "L" }],
    deler: [
      { tekst: "Hva er det ytre volumet?", svar: { verdi: 72, enhet: "L", tol: 0.5 } },
      { tekst: "Hva koster treet, avrundet til nærmeste krone?", svar: { verdi: 204, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster tre og tillegg til sammen?", svar: { verdi: 1584, enhet: "kr", tol: 1 } },
      {
        tekst: "Treet og høyttaleren veier 17,8 kg til sammen. Hvor mange personer bør løfte?",
        svar: {
          valg: ["Én", "To"],
          riktig: 0,
          forklaring: "17,8 kg er under 25 kg."
        }
      }
    ],
    hint: ["Volum: \\(60 \\cdot 30 \\cdot 40\\), og del på 1 000.", "Trepris: \\(1{,}08 \\cdot 189\\). Legg 1 380 på den avrundede prisen."],
    losning: "<p>Volum: \\(72\\) L.</p><p>Tre: \\(204{,}12\\) kr, avrundet \\(204\\) kr. Med tillegg: \\(204 + 1\\,380 = 1\\,584\\) kr.</p><p>17,8 kg løftes av én person.</p>"
  },
  {
    id: "repetisjon-liter",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>Liten basskasse er 72 L. Hvor mange kubikkmeter er det?</p>",
    svar: { verdi: 0.072, enhet: "m³", tol: 0.001 },
    hint: ["1 m³ = 1 000 L. Del på 1 000.", "\\(72 : 1\\,000\\)."],
    losning: "<p>\\(72 : 1\\,000 = 0{,}072\\) m³. Ikke 0,72 m³.</p>"
  }
]);
