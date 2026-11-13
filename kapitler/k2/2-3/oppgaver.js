Bok.oppgaver([
  {
    id: "omgjoring-a",
    niva: "lett",
    tittel: "Fra µm til mm",
    tekst: "<p>Gjør om til millimeter.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "25 µm", svar: { verdi: 0.025, enhet: "mm" } },
      { tekst: "130 µm", svar: { verdi: 0.13, enhet: "mm" } },
      { tekst: "800 µm", svar: { verdi: 0.8, enhet: "mm" } }
    ],
    hint: ["Del med 1000. Kommaet tre plasser til venstre.", "25 µm = 0,025 mm. 100 µm = 0,1 mm."],
    losning: "<p>a) 0,025 mm b) 0,130 mm c) 0,800 mm</p>"
  },
  {
    id: "omgjoring-b",
    niva: "lett",
    tittel: "Fra mm til µm",
    tekst: "<p>Gjør om til mikrometer.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "0,073 mm", svar: { verdi: 73, enhet: "µm" } },
      { tekst: "0,8 mm", svar: { verdi: 800, enhet: "µm" } },
      { tekst: "7 mm", svar: { verdi: 7000, enhet: "µm" } }
    ],
    hint: ["Gang med 1000. Kommaet tre plasser til høyre.", "0,073 · 1000 = 73. 0,8 · 1000 = 800."],
    losning: "<p>a) 73 µm b) 800 µm c) 7000 µm</p>"
  },
  {
    id: "boring-h7",
    niva: "middels",
    tekst: "<p>En boring Ø25 har øvre avvik +21 µm og nedre avvik 0.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm er 21 µm?", svar: { verdi: 0.021, enhet: "mm" } },
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 25.021, enhet: "mm" } }
    ],
    hint: ["Del 21 med 1000.", "\\(25 + 0{,}021 = 25{,}021\\) mm."],
    losning: "<p>\\(21\\ \\text{µm} = 0{,}021\\) mm. Øvre grensemål \\(25{,}021\\) mm. Nedre er 25,000 mm.</p>"
  },
  {
    id: "aksel-h6",
    niva: "middels",
    tekst: "<p>En aksel Ø30 h6 har øvre avvik 0 og nedre avvik −13 µm.</p>",
    steg: [{ verdi: 0.013, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm er 13 µm?", svar: { verdi: 0.013, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 29.987, enhet: "mm" } }
    ],
    hint: ["13 : 1000 = 0,013.", "Trekk fra basismålet: \\(30 - 0{,}013\\)."],
    losning: "<p>\\(13\\ \\text{µm} = 0{,}013\\) mm. Nedre grensemål \\(30 - 0{,}013 = 29{,}987\\) mm. Øvre er 30,000 mm.</p>"
  },
  {
    id: "ti-ganger",
    niva: "vanskelig",
    tittel: "Kommaet en plass feil",
    tekst: "<p>Lærlingen tror at +21 µm på Ø25 er +0,21 mm. Riktig omgjøring er 0,021 mm.</p>",
    deler: [
      { tekst: "Hva er riktig øvre grensemål?", svar: { verdi: 25.021, enhet: "mm" } },
      { tekst: "Hva blir lærlingens øvre grensemål?", svar: { verdi: 25.21, enhet: "mm" } },
      { tekst: "Hvor mange mm for stor er lærlingens grense?", svar: { verdi: 0.189, enhet: "mm" } }
    ],
    hint: ["Riktig: 25 + 0,021. Lærlingen: 25 + 0,21.", "\\(25{,}21 - 25{,}021 = 0{,}189\\) mm. Det er ti ganger for stort avvik."],
    losning: "<p>Riktig øvre grense 25,021 mm. Lærlingen får 25,210 mm. Forskjellen er 0,189 mm. Kommaet skulle tre plasser, ikke to.</p>"
  },
  {
    id: "mikrometer-avvik",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Les avviket i µm",
    utstyr: "Mikrometer og en dreid tapp eller passbit",
    hms: "Bruk friksjonsklikken. Ikke mål på roterende del. Legg mikrometeret i etuiet.",
    tekst: "<p>Mikrometeret viser 12,476 mm. Basismålet på tegningen er 12,500 mm. Hvor mange µm er tappen for liten? Mål etterpå en tapp i verkstedet og gjør avviket om til µm.</p>",
    steg: [{ verdi: 0.024, enhet: "mm" }],
    svar: { verdi: 24, enhet: "µm" },
    hint: ["Finn først avviket i mm: 12,500 − 12,476.", "\\(0{,}024\\ \\text{mm} \\cdot 1000 = 24\\ \\text{µm}\\)."],
    losning: "<p>\\(12{,}500 - 12{,}476 = 0{,}024\\) mm \\(= 24\\) µm. Tappen er 24 µm under basismålet.</p>"
  },
  {
    id: "repetisjon-meter",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En flatstålbit skal være 0,25 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 250, enhet: "mm" },
    hint: ["Fra m til mm ganger du med 1000.", "\\(0{,}25 \\cdot 1000 = 250\\)."],
    losning: "<p>\\(0{,}25 \\cdot 1000 = 250\\) mm.</p>"
  },
  {
    id: "eksamen-om",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Gjør om uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "0,8 mm i µm", svar: { verdi: 800, enhet: "µm" } },
      { tekst: "180 µm i mm", svar: { verdi: 0.18, enhet: "mm" } }
    ],
    hint: ["Gang eller del med 1000.", "0,8 · 1000 = 800. 180 : 1000 = 0,18."],
    losning: "<p>a) 800 µm b) 0,180 mm</p>"
  },
  {
    id: "om-um-2",
    niva: "lett",
    tittel: "Små avvik til mm",
    tekst: "<p>Gjør om til millimeter.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "40 µm", svar: { verdi: 0.04, enhet: "mm" } },
      { tekst: "250 µm", svar: { verdi: 0.25, enhet: "mm" } },
      { tekst: "6 µm", svar: { verdi: 0.006, enhet: "mm" } }
    ],
    hint: ["Del med 1000. Kommaet tre plasser til venstre.", "40 µm = 0,040 mm. 6 µm = 0,006 mm."],
    losning: "<p>a) 0,040 mm b) 0,250 mm c) 0,006 mm</p>"
  },
  {
    id: "om-mm-2",
    niva: "lett",
    tittel: "Millimeter til µm",
    tekst: "<p>Gjør om til mikrometer.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "0,045 mm", svar: { verdi: 45, enhet: "µm" } },
      { tekst: "1,2 mm", svar: { verdi: 1200, enhet: "µm" } },
      { tekst: "0,5 mm", svar: { verdi: 500, enhet: "µm" } }
    ],
    hint: ["Gang med 1000. Kommaet tre plasser til høyre.", "0,045 · 1000 = 45. 1,2 · 1000 = 1200."],
    losning: "<p>a) 45 µm b) 1200 µm c) 500 µm</p>"
  },
  {
    id: "tegning-50",
    niva: "lett",
    tittel: "Avviket på tegningen",
    tekst: "<p>Gjør om avviket til den andre enheten.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "+0,050 mm i µm", svar: { verdi: 50, enhet: "µm" } },
      { tekst: "0,008 mm i µm", svar: { verdi: 8, enhet: "µm" } },
      { tekst: "2,5 mm i µm", svar: { verdi: 2500, enhet: "µm" } }
    ],
    hint: ["1 mm = 1000 µm. Gang millimeter med 1000.", "0,050 · 1000 = 50. 0,008 · 1000 = 8."],
    losning: "<p>a) 50 µm b) 8 µm c) 2500 µm</p>"
  },
  {
    id: "boring-40-um",
    niva: "middels",
    tittel: "Boring Ø40",
    tekst: "<p>En boring Ø40 har øvre avvik +25 µm og nedre avvik 0.</p>",
    steg: [{ verdi: 0.025, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm er 25 µm?", svar: { verdi: 0.025, enhet: "mm" } },
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 40.025, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 40, enhet: "mm", tol: 0 } }
    ],
    hint: ["Del 25 med 1000.", "\\(40 + 0{,}025 = 40{,}025\\) mm. Nedre avvik 0 betyr 40,000 mm."],
    losning: "<p>\\(25\\ \\text{µm} = 0{,}025\\) mm. Øvre grensemål 40,025 mm. Nedre grensemål 40,000 mm.</p>"
  },
  {
    id: "aksel-28-um",
    niva: "middels",
    tittel: "Aksel Ø28",
    tekst: "<p>En aksel Ø28 har øvre avvik 0 og nedre avvik −13 µm.</p>",
    steg: [{ verdi: 0.013, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm er 13 µm?", svar: { verdi: 0.013, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 27.987, enhet: "mm" } },
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 28, enhet: "mm", tol: 0 } }
    ],
    hint: ["13 : 1000 = 0,013.", "\\(28 - 0{,}013 = 27{,}987\\). Øvre avvik 0 betyr 28,000 mm."],
    losning: "<p>\\(13\\ \\text{µm} = 0{,}013\\) mm. Nedre grensemål 27,987 mm. Øvre grensemål 28,000 mm.</p>"
  },
  {
    id: "mikro-16",
    niva: "middels",
    tittel: "Avviket på tappen",
    tekst: "<p>Mikrometeret viser 16,482 mm. Basismålet på tegningen er 16,500 mm. Tappen er for liten.</p>",
    steg: [{ verdi: 0.018, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stort er avviket i mm?", svar: { verdi: 0.018, enhet: "mm" } },
      { tekst: "Hvor mange µm er tappen for liten?", svar: { verdi: 18, enhet: "µm" } }
    ],
    hint: ["Trekk målt verdi fra basismålet.", "\\(16{,}500 - 16{,}482 = 0{,}018\\) mm. Gang med 1000."],
    losning: "<p>\\(16{,}500 - 16{,}482 = 0{,}018\\) mm \\(= 18\\) µm. Tappen er 18 µm under basismålet.</p>"
  },
  {
    id: "komma-tjue",
    niva: "vanskelig",
    tittel: "Tjue µm ble to tideler",
    tekst: "<p>Nedre avvik på en aksel Ø30 er −20 µm. Lærlingen gjør det om til −0,20 mm. Riktig omgjøring er 0,020 mm.</p>",
    steg: [{ verdi: 0.02, enhet: "mm" }, { verdi: 0.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er riktig nedre grensemål?", svar: { verdi: 29.98, enhet: "mm" } },
      { tekst: "Hva blir lærlingens nedre grensemål?", svar: { verdi: 29.8, enhet: "mm" } },
      { tekst: "Hvor mange mm for lav er lærlingens grense?", svar: { verdi: 0.18, enhet: "mm" } }
    ],
    hint: ["Riktig: \\(30 - 0{,}020\\). Lærlingen: \\(30 - 0{,}20\\).", "\\(29{,}980 - 29{,}800 = 0{,}180\\) mm."],
    losning: "<p>Riktig nedre grense 29,980 mm. Lærlingen får 29,800 mm. Forskjellen er 0,180 mm. Kommaet skulle tre plasser, ikke to.</p>"
  },
  {
    id: "klaring-enhet",
    niva: "vanskelig",
    tittel: "Hull og aksel i µm",
    tekst: "<p>Basismål Ø25. Hullet måles til 25,016 mm. Akselen måles til 24,988 mm.</p>",
    steg: [{ verdi: 0.016, enhet: "mm" }, { verdi: 0.012, enhet: "mm" }, { verdi: 0.028, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange µm er hullet over basismålet?", svar: { verdi: 16, enhet: "µm" } },
      { tekst: "Hvor mange µm er akselen under basismålet?", svar: { verdi: 12, enhet: "µm" } },
      { tekst: "Hvor stor er klaringen, i µm?", svar: { verdi: 28, enhet: "µm" } }
    ],
    hint: ["Finn først avvikene i mm, og gang med 1000.", "Hull: \\(0{,}016\\) mm = 16 µm. Aksel: \\(0{,}012\\) mm = 12 µm. Klaring: \\(25{,}016 - 24{,}988 = 0{,}028\\) mm."],
    losning: "<p>Hullet er 16 µm over. Akselen er 12 µm under. Klaringen er \\(16 + 12 = 28\\) µm, som er 0,028 mm.</p>"
  },
  {
    id: "mikro-tapp-9",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Tappen under 9 mm",
    utstyr: "Mikrometer og en dreid tapp eller passbit",
    hms: "Bruk friksjonsklikken. Ikke mål på roterende del. Legg mikrometeret i etuiet.",
    tekst: "<p>Mikrometeret viser 8,973 mm. Basismålet er 9,000 mm. Hvor mange µm er tappen for liten? Mål etterpå en tapp i verkstedet og gjør avviket om til µm.</p>",
    steg: [{ verdi: 0.027, enhet: "mm" }],
    svar: { verdi: 27, enhet: "µm" },
    hint: ["Finn avviket i mm først: 9,000 − 8,973.", "\\(0{,}027 \\cdot 1000 = 27\\)."],
    losning: "<p>\\(9{,}000 - 8{,}973 = 0{,}027\\) mm \\(= 27\\) µm.</p>"
  },
  {
    id: "rep-cm-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En kloss er 0,08 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 80, enhet: "mm" },
    hint: ["Fra meter til millimeter ganger du med 1000.", "\\(0{,}08 \\cdot 1000 = 80\\)."],
    losning: "<p>\\(0{,}08 \\cdot 1000 = 80\\) mm.</p>"
  },
  {
    id: "eksamen-35-um",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Gjør om uten kalkulator.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "0,35 mm i µm", svar: { verdi: 350, enhet: "µm" } },
      { tekst: "70 µm i mm", svar: { verdi: 0.07, enhet: "mm" } }
    ],
    hint: ["Gang eller del med 1000.", "0,35 · 1000 = 350. 70 : 1000 = 0,07."],
    losning: "<p>a) 350 µm b) 0,070 mm</p>"
  }
]);
