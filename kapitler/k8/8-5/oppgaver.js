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
  }
]);
