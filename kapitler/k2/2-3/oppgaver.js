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
  }
]);
