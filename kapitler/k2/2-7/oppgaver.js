Bok.oppgaver([
  {
    id: "ord",
    niva: "lett",
    tittel: "Tre ord",
    tekst: "<p>Hva slags pasning er det?</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Akselen er alltid mindre enn hullet.", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } },
      { tekst: "Akselen er alltid større enn hullet.", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 2 } },
      { tekst: "Noen par får klaring, andre får press.", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 1 } }
    ],
    hint: ["Klaring: det er alltid plass. Press: det er alltid fast.", "Hvis begge deler kan skje, er det mellompasning."],
    losning: "<p>a) Klaring. b) Press. c) Mellom.</p>"
  },
  {
    id: "bokstav",
    niva: "lett",
    tekst: "<p>Koden er Ø25 H7/g6.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "H7 er …", svar: { valg: ["hull", "aksel"], riktig: 0 } },
      { tekst: "g6 er …", svar: { valg: ["hull", "aksel"], riktig: 1 } },
      { tekst: "Hvilket tall er finere toleranse?", svar: { valg: ["6", "7"], riktig: 0 } }
    ],
    hint: ["Stor bokstav er hull. Liten bokstav er aksel.", "Lavere tall er finere."],
    losning: "<p>H7 er hull, g6 er aksel. 6 er finere enn 7.</p>"
  },
  {
    id: "g6",
    niva: "middels",
    tekst: "<p>Ø25 H7/g6. Hull 25,000 til 25,021 mm. Aksel 24,980 til 24,993 mm. Bruk tabellen på teorisiden om du vil sjekke tallene.</p>",
    steg: [{ verdi: 0.007, enhet: "mm" }],
    deler: [
      { tekst: "Minste klaring?", svar: { verdi: 0.007, enhet: "mm" } },
      { tekst: "Største klaring?", svar: { verdi: 0.041, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["Minste klaring = minste hull − største aksel.", "\\(25{,}000 - 24{,}993 = 0{,}007\\). \\(25{,}021 - 24{,}980 = 0{,}041\\). Begge er positive."],
    losning: "<p>Minste klaring 0,007 mm. Største 0,041 mm. Alltid klaring.</p>"
  },
  {
    id: "p6",
    niva: "middels",
    tekst: "<p>Ø25 H7/p6. Hull 25,000 til 25,021 mm. Aksel 25,022 til 25,035 mm.</p>",
    deler: [
      { tekst: "Minste press (hvor mye minste aksel er større enn største hull)?", svar: { verdi: 0.001, enhet: "mm" } },
      { tekst: "Største press?", svar: { verdi: 0.035, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 2 } }
    ],
    hint: ["\\(25{,}022 - 25{,}021\\).", "Største press: \\(25{,}035 - 25{,}000 = 0{,}035\\)."],
    losning: "<p>Minste press 0,001 mm. Største press 0,035 mm. Alltid press.</p>"
  },
  {
    id: "k6",
    niva: "vanskelig",
    tekst: "<p>Ø25 H7/k6. Hull 25,000 til 25,021 mm. Aksel 25,002 til 25,015 mm.</p>",
    deler: [
      { tekst: "Største klaring (største hull − minste aksel)?", svar: { verdi: 0.019, enhet: "mm" } },
      { tekst: "Største press (største aksel − minste hull)?", svar: { verdi: 0.015, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 1 } }
    ],
    hint: ["\\(25{,}021 - 25{,}002 = 0{,}019\\) klaring i det slakkeste paret.", "\\(25{,}015 - 25{,}000 = 0{,}015\\) press i det trangeste. Begge kan skje."],
    losning: "<p>Største klaring 0,019 mm. Største press 0,015 mm. Det er mellompasning.</p>"
  },
  {
    id: "varm",
    niva: "vanskelig",
    tittel: "Varm aksel",
    tekst: "<p>Stålaksel målt til Ø40,000 mm ved 60 °C. Bruk \\(\\alpha = 0{,}000012\\) per °C ned til 20 °C. Ikke avrund underveis. Kravet kald er 40,00 ± 0,01 mm.</p>",
    steg: [{ verdi: 40, enhet: "°C" }, { verdi: 0.0192, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm krymper diameteren?", svar: { verdi: 0.0192, enhet: "mm", tol: 0.00005 } },
      { tekst: "Hva er diameteren ved 20 °C?", svar: { verdi: 39.9808, enhet: "mm", tol: 0.00005 } },
      { tekst: "Er den godkjent ved 20 °C?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Temperaturfall 40 °C. \\(0{,}000012 \\cdot 40 \\cdot 40\\).", "\\(0{,}0192\\) mm krymp. \\(40 - 0{,}0192 = 39{,}9808\\). Nedre grense er 39,99 mm."],
    losning: "<p>\\(\\Delta L = 0{,}000012 \\cdot 40 \\cdot 40 = 0{,}0192\\) mm. Kald diameter 39,9808 mm. Nedre grense 39,99 mm. Den er ute.</p>"
  },
  {
    id: "bolter",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Bolter og usikkert verktøy",
    utstyr: "Skyvelære eller mikrometer, og bolter merket 90 ± 0,3 mm",
    hms: "Ikke mål i maskin som går. Mål kald del, omtrent 20 °C. Verktøy tilbake i etui.",
    tekst: "<p>Krav 90,0 ± 0,3 mm. Verktøyets usikkerhet ± 0,1 mm. Sikkert godkjent betyr at hele usikkerheten ligger innenfor grensene.</p>",
    deler: [
      { tekst: "Nedre grensemål på tegningen?", svar: { verdi: 89.7, enhet: "mm", tol: 0 } },
      { tekst: "Minste måling som er sikkert godkjent?", svar: { verdi: 89.8, enhet: "mm", tol: 0 } },
      { tekst: "Største måling som er sikkert godkjent?", svar: { verdi: 90.2, enhet: "mm", tol: 0 } },
      { tekst: "Du leser 90,25 mm. Hva sier du?", svar: { valg: ["Sikkert godkjent", "Usikkert", "Sikkert vrak"], riktig: 1 } }
    ],
    hint: ["Trekk usikkerheten inn fra hver grense: 89,7 + 0,1 og 90,3 − 0,1.", "90,25 kan være opp til 90,35, og 90,3 er øvre grense. Da vet du ikke."],
    losning: "<p>Grenser 89,7 og 90,3. Sikkert inne: 89,8 til 90,2. 90,25 er usikkert.</p>"
  },
  {
    id: "repetisjon-skrue",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 0.795, enhet: "kr", tol: 0.005 },
    hint: ["Del på 100.", "\\(79{,}50 : 100 = 0{,}795\\)."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr.</p>"
  },
  {
    id: "eksamen-h6",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Hull Ø30: 30,000 til 30,021 mm. Aksel Ø30 h6: 29,987 til 30,000 mm.</p>",
    deler: [
      { tekst: "Minste klaring?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Største klaring?", svar: { verdi: 0.034, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["Minste hull minus største aksel: \\(30{,}000 - 30{,}000\\).", "Største klaring: \\(30{,}021 - 29{,}987 = 0{,}034\\). Klaring 0 er fortsatt klaring, ikke press."],
    losning: "<p>Minste klaring 0 mm. Største 0,034 mm. Akselen er aldri større enn hullet. Klaringspasning.</p>"
  },
  {
    id: "null-er-klaring",
    niva: "lett",
    tittel: "Klaring null",
    tekst: "<p>Hva slags pasning, eller hva er bokstaven?</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Minste hull er lik største aksel.", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } },
      { tekst: "Største hull er mindre enn minste aksel.", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 2 } },
      { tekst: "H8 i koden Ø40 H8/h7 er …", svar: { valg: ["hull", "aksel"], riktig: 0 } }
    ],
    hint: ["Klaring 0 er fortsatt klaring. Akselen er ikke større enn hullet.", "Stor bokstav er hull. Alltid fast er press."],
    losning: "<p>a) Klaring. b) Press. c) Hull. h7 er akselen.</p>"
  },
  {
    id: "kode-22",
    niva: "lett",
    tekst: "<p>Koden er Ø22 H7/h6.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "H7 er …", svar: { valg: ["hull", "aksel"], riktig: 0 } },
      { tekst: "h6 er …", svar: { valg: ["hull", "aksel"], riktig: 1 } },
      { tekst: "Hvilket tall er finere toleranse?", svar: { valg: ["6", "7"], riktig: 0 } }
    ],
    hint: ["Stor bokstav er hull. Liten bokstav er aksel.", "Lavere tall er finere."],
    losning: "<p>H7 er hull, h6 er aksel. 6 er finere enn 7.</p>"
  },
  {
    id: "h-betyr",
    niva: "lett",
    tittel: "H og h",
    tekst: "<p>H-hullet har nedre avvik 0. h-akselen har øvre avvik 0. Basismålet er 25 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Kan h-akselen være større enn basismålet?", svar: { valg: ["Ja", "Nei"], riktig: 1 } },
      { tekst: "Hva er minste mål for H-hullet?", svar: { verdi: 25, enhet: "mm", tol: 0 } }
    ],
    hint: ["Øvre avvik 0 betyr at akselen stopper på basismålet.", "Nedre avvik 0 betyr at hullet aldri er mindre enn 25 mm."],
    losning: "<p>Akselen er høyst 25 mm. Minste hull er 25 mm.</p>"
  },
  {
    id: "tabell-30-h6",
    niva: "middels",
    tittel: "Ø30 H7/h6",
    tekst: "<p>Ø30 H7/h6. 30 mm er med i tabellen på <a href=\"teori.html\">teorisiden</a>: H7 +21 / 0 µm, h6 0 / −13 µm.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }, { verdi: 0.013, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for hullet?", svar: { verdi: 30.021, enhet: "mm" } },
      { tekst: "Nedre grensemål for akselen?", svar: { verdi: 29.987, enhet: "mm" } },
      { tekst: "Minste klaring?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Største klaring?", svar: { verdi: 0.034, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["21 µm = 0,021 mm. 13 µm = 0,013 mm. Trekk 0,013 fra 30.", "Minste klaring: \\(30{,}000 - 30{,}000 = 0\\). Største: \\(30{,}021 - 29{,}987\\)."],
    losning: "<p>Hull 30,000 til 30,021 mm. Aksel 29,987 til 30,000 mm. Minste klaring 0 mm. Største klaring 0,034 mm. Klaringspasning.</p>"
  },
  {
    id: "tabell-22-p6",
    niva: "middels",
    tittel: "Ø22 H7/p6",
    tekst: "<p>Ø22 H7/p6. Samme tabell: H7 +21 / 0 µm, p6 +35 / +22 µm. Området er over 18 til og med 30 mm.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }, { verdi: 22.022, enhet: "mm" }, { verdi: 22.035, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for hullet?", svar: { verdi: 22.021, enhet: "mm" } },
      { tekst: "Nedre grensemål for akselen?", svar: { verdi: 22.022, enhet: "mm" } },
      { tekst: "Minste press?", svar: { verdi: 0.001, enhet: "mm" } },
      { tekst: "Største press?", svar: { verdi: 0.035, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 2 } }
    ],
    hint: ["22 µm = 0,022 mm. Minste aksel er \\(22 + 0{,}022\\).", "\\(22{,}022 - 22{,}021 = 0{,}001\\). Største press: \\(22{,}035 - 22{,}000\\)."],
    losning: "<p>Hull 22,000 til 22,021 mm. Aksel 22,022 til 22,035 mm. Minste press 0,001 mm. Største press 0,035 mm. Alltid press.</p>"
  },
  {
    id: "g6-40",
    niva: "middels",
    tittel: "Ø40 H7/g6",
    tekst: "<p>Ø40 H7/g6. For diameter over 30 til og med 50 mm er H7 +25 / 0 µm og g6 −9 / −25 µm (ISO 286). Det er en annen rad enn tabellen for 18 til 30 mm.</p>",
    steg: [{ verdi: 0.025, enhet: "mm" }, { verdi: 0.009, enhet: "mm" }, { verdi: 39.991, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for hullet?", svar: { verdi: 40.025, enhet: "mm" } },
      { tekst: "Øvre grensemål for akselen?", svar: { verdi: 39.991, enhet: "mm" } },
      { tekst: "Minste klaring?", svar: { verdi: 0.009, enhet: "mm" } },
      { tekst: "Største klaring?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["25 µm = 0,025 mm. 9 µm = 0,009 mm. Akselens øvre mål er \\(40 - 0{,}009\\).", "Minste klaring: \\(40{,}000 - 39{,}991\\). Største: \\(40{,}025 - 39{,}975\\)."],
    losning: "<p>Hull 40,000 til 40,025 mm. Aksel 39,975 til 39,991 mm. Minste klaring 0,009 mm. Største klaring 0,050 mm. Alltid klaring.</p>"
  },
  {
    id: "k6-40",
    niva: "vanskelig",
    tittel: "Ø40 H7/k6",
    tekst: "<p>Ø40 H7/k6. For diameter over 30 til og med 50 mm er H7 +25 / 0 µm og k6 +18 / +2 µm (ISO 286).</p>",
    steg: [{ verdi: 0.025, enhet: "mm" }, { verdi: 0.002, enhet: "mm" }, { verdi: 40.018, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for hullet?", svar: { verdi: 40.025, enhet: "mm" } },
      { tekst: "Nedre grensemål for akselen?", svar: { verdi: 40.002, enhet: "mm" } },
      { tekst: "Største klaring?", svar: { verdi: 0.023, enhet: "mm" } },
      { tekst: "Største press?", svar: { verdi: 0.018, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 1 } }
    ],
    hint: ["Største klaring = største hull − minste aksel.", "\\(40{,}025 - 40{,}002 = 0{,}023\\) klaring. \\(40{,}018 - 40{,}000 = 0{,}018\\) press. Begge kan skje."],
    losning: "<p>Hull 40,000 til 40,025 mm. Aksel 40,002 til 40,018 mm. Største klaring 0,023 mm. Største press 0,018 mm. Mellompasning.</p>"
  },
  {
    id: "sikker-48",
    niva: "vanskelig",
    tittel: "Usikkert eller vrak",
    tekst: "<p>Krav 48,0 ± 0,2 mm. Verktøyets usikkerhet er ± 0,05 mm. Sikkert godkjent betyr at hele usikkerheten ligger innenfor grensene.</p>",
    steg: [{ verdi: 47.8, enhet: "mm" }, { verdi: 48.2, enhet: "mm" }, { verdi: 47.85, enhet: "mm" }],
    deler: [
      { tekst: "Nedre grensemål på tegningen?", svar: { verdi: 47.8, enhet: "mm", tol: 0 } },
      { tekst: "Minste måling som er sikkert godkjent?", svar: { verdi: 47.85, enhet: "mm", tol: 0 } },
      { tekst: "Største måling som er sikkert godkjent?", svar: { verdi: 48.15, enhet: "mm", tol: 0 } },
      { tekst: "Du leser 48,18 mm. Hva sier du?", svar: { valg: ["Sikkert godkjent", "Usikkert", "Sikkert vrak"], riktig: 1 } },
      { tekst: "Du leser 48,30 mm. Hva sier du?", svar: { valg: ["Sikkert godkjent", "Usikkert", "Sikkert vrak"], riktig: 2 } }
    ],
    hint: ["Trekk usikkerheten inn fra hver grense: 47,8 + 0,05 og 48,2 − 0,05.", "48,18 kan være opp til 48,23. 48,30 kan være ned til 48,25, og øvre grense er 48,2."],
    losning: "<p>Grenser 47,8 og 48,2. Sikkert inne: 47,85 til 48,15. 48,18 er usikkert. 48,30 er sikkert vrak, fordi selv 48,25 er over 48,2.</p>"
  },
  {
    id: "krymp-25",
    niva: "vanskelig",
    tittel: "Tapp fra 70 °C",
    tekst: "<p>Ståltapp målt til Ø25,000 mm ved 70 °C. Bruk \\(\\alpha = 0{,}000012\\) per °C ned til 20 °C. Ikke avrund underveis. Kravet kald er 25,00 ± 0,02 mm.</p>",
    steg: [{ verdi: 50, enhet: "°C" }, { verdi: 0.015, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange mm krymper diameteren?", svar: { verdi: 0.015, enhet: "mm", tol: 0.00005 } },
      { tekst: "Hva er diameteren ved 20 °C?", svar: { verdi: 24.985, enhet: "mm", tol: 0.00005 } },
      { tekst: "Er den godkjent ved 20 °C?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Temperaturfall 50 °C. \\(0{,}000012 \\cdot 25 \\cdot 50\\).", "\\(0{,}015\\) mm krymp. \\(25 - 0{,}015 = 24{,}985\\). Nedre grense er 24,98 mm."],
    losning: "<p>\\(\\Delta L = 0{,}000012 \\cdot 25 \\cdot 50 = 0{,}015\\) mm. Kald diameter 24,985 mm. Nedre grense 24,98 mm. Den er ute.</p>"
  },
  {
    id: "bolt-64",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Bolt 64 ± 0,2",
    utstyr: "Skyvelære eller mikrometer, og bolter merket 64 ± 0,2 mm",
    hms: "Ikke mål i maskin som går. Mål kald del, omtrent 20 °C. Verktøy tilbake i etui.",
    tekst: "<p>Krav 64,0 ± 0,2 mm. Verktøyets usikkerhet ± 0,05 mm. Sikkert godkjent betyr at hele usikkerheten ligger innenfor grensene.</p>",
    steg: [{ verdi: 63.8, enhet: "mm" }, { verdi: 64.2, enhet: "mm" }],
    deler: [
      { tekst: "Nedre grensemål på tegningen?", svar: { verdi: 63.8, enhet: "mm", tol: 0 } },
      { tekst: "Minste måling som er sikkert godkjent?", svar: { verdi: 63.85, enhet: "mm", tol: 0 } },
      { tekst: "Største måling som er sikkert godkjent?", svar: { verdi: 64.15, enhet: "mm", tol: 0 } },
      { tekst: "Du leser 64,18 mm. Hva sier du?", svar: { valg: ["Sikkert godkjent", "Usikkert", "Sikkert vrak"], riktig: 1 } }
    ],
    hint: ["Trekk usikkerheten inn fra hver grense: 63,8 + 0,05 og 64,2 − 0,05.", "64,18 kan være opp til 64,23, og 64,2 er øvre grense."],
    losning: "<p>Grenser 63,8 og 64,2. Sikkert inne: 63,85 til 64,15. 64,18 er usikkert.</p>"
  },
  {
    id: "rep-eske-50",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 50 skruer koster 89 kr. Hva koster én skrue?</p>",
    svar: { verdi: 1.78, enhet: "kr", tol: 0.005 },
    hint: ["Del på 50.", "\\(89 : 50 = 1{,}78\\)."],
    losning: "<p>\\(89 : 50 = 1{,}78\\) kr.</p>"
  },
  {
    id: "eksamen-20-h6",
    type: "eksamen",
    eksamensdel: "Del 2 (med tabellen fra teorisiden)",
    niva: "middels",
    tekst: "<p>Ø20 H7/h6. Bruk tabellen: H7 +21 / 0 µm og h6 0 / −13 µm. 20 mm er i området over 18 til og med 30 mm.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }, { verdi: 0.013, enhet: "mm" }],
    deler: [
      { tekst: "Nedre grensemål for akselen?", svar: { verdi: 19.987, enhet: "mm" } },
      { tekst: "Minste klaring?", svar: { verdi: 0, enhet: "mm", tol: 0 } },
      { tekst: "Største klaring?", svar: { verdi: 0.034, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["13 µm = 0,013 mm. \\(20 - 0{,}013\\).", "Minste hull minus største aksel er \\(20{,}000 - 20{,}000\\). Største klaring: \\(20{,}021 - 19{,}987\\)."],
    losning: "<p>Aksel 19,987 til 20,000 mm. Hull 20,000 til 20,021 mm. Minste klaring 0 mm. Største 0,034 mm. Klaringspasning.</p>"
  },
  {
    id: "hull-27",
    niva: "lett",
    tittel: "Ø27 H7",
    tekst: "<p>Et hull er Ø27 H7. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>: H7 er +21 / 0 µm for diameter over 18 til og med 30 mm. Stor H betyr hull.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }],
    deler: [
      { tekst: "Basismål?", svar: { verdi: 27, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 27.021, enhet: "mm" } },
      { tekst: "Nedre grensemål?", svar: { verdi: 27, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.021, enhet: "mm" } }
    ],
    hint: ["21 µm = 0,021 mm. Nedre avvik for H er 0, så hullet er aldri mindre enn basismålet.", "\\(27 + 0{,}021 = 27{,}021\\). Toleransen er 0,021 mm."],
    losning: "<p>Basismål 27 mm. Hull 27,000 til 27,021 mm. Toleranse 0,021 mm.</p>"
  },
  {
    id: "aksel-24",
    niva: "lett",
    tittel: "Ø24 h6",
    tekst: "<p>En aksel er Ø24 h6. Tabellen: h6 er 0 / −13 µm i området over 18 til og med 30 mm. Liten h betyr aksel, og øvre avvik er 0.</p>",
    steg: [{ verdi: 0.013, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 24, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 23.987, enhet: "mm" } },
      { tekst: "Er koden et hull eller en aksel?", svar: { valg: ["Hull", "Aksel"], riktig: 1 } }
    ],
    hint: ["13 µm = 0,013 mm. Øvre avvik 0 betyr at akselen aldri er større enn 24 mm.", "\\(24 - 0{,}013 = 23{,}987\\). Liten bokstav er aksel."],
    losning: "<p>Aksel 23,987 til 24,000 mm. Liten h er aksel. Stor H hadde vært hull.</p>"
  },
  {
    id: "klaring-26",
    niva: "middels",
    tittel: "Ø26 H7/g6",
    tekst: "<p>Ø26 H7/g6. Samme tabell, området over 18 til og med 30 mm: H7 +21 / 0 µm, g6 −7 / −20 µm. Klaring = hull − aksel.</p>",
    steg: [{ verdi: 0.021, enhet: "mm" }, { verdi: 25.993, enhet: "mm" }, { verdi: 25.98, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for akselen?", svar: { verdi: 25.993, enhet: "mm" } },
      { tekst: "Nedre grensemål for akselen?", svar: { verdi: 25.98, enhet: "mm" } },
      { tekst: "Minste klaring?", svar: { verdi: 0.007, enhet: "mm" } },
      { tekst: "Største klaring?", svar: { verdi: 0.041, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 0 } }
    ],
    hint: ["7 µm = 0,007 mm og 20 µm = 0,020 mm. Trekk dem fra 26.", "Minste klaring: \\(26{,}000 - 25{,}993\\). Største: \\(26{,}021 - 25{,}980\\). Begge er positive."],
    losning: "<p>Hull 26,000 til 26,021 mm. Aksel 25,980 til 25,993 mm. Minste klaring 0,007 mm. Største klaring 0,041 mm. Alltid klaring.</p>"
  },
  {
    id: "mellom-29",
    niva: "middels",
    tittel: "Ø29 H7/k6",
    tekst: "<p>Ø29 H7/k6. 29 mm er med i tabellen over 18 til og med 30 mm: H7 +21 / 0 µm, k6 +15 / +2 µm. Negativ klaring er press.</p>",
    steg: [{ verdi: 0.015, enhet: "mm" }, { verdi: 29.015, enhet: "mm" }, { verdi: 29.002, enhet: "mm" }],
    deler: [
      { tekst: "Største aksel?", svar: { verdi: 29.015, enhet: "mm" } },
      { tekst: "Minste aksel?", svar: { verdi: 29.002, enhet: "mm" } },
      { tekst: "Minste klaring (negativ hvis det er press)?", svar: { verdi: -0.015, enhet: "mm" } },
      { tekst: "Største klaring?", svar: { verdi: 0.019, enhet: "mm" } },
      { tekst: "Hva slags pasning?", svar: { valg: ["Klaringspasning", "Mellompasning", "Presspasning"], riktig: 1 } }
    ],
    hint: ["15 µm = 0,015 mm og 2 µm = 0,002 mm. Legg dem til 29.", "Minste klaring: \\(29{,}000 - 29{,}015 = -0{,}015\\). Største: \\(29{,}021 - 29{,}002 = 0{,}019\\). Ett av hvert fortegn er mellompasning."],
    losning: "<p>Hull 29,000 til 29,021 mm. Aksel 29,002 til 29,015 mm. Minste klaring −0,015 mm. Største klaring 0,019 mm. Noen kombinasjoner gir press, andre klaring. Det er mellompasning.</p>"
  },
  {
    id: "sikker-78",
    niva: "vanskelig",
    tittel: "Bolt 78 ± 0,20",
    tekst: "<p>Bolter skal være 78 ± 0,20 mm. Verktøyet har usikkerhet ± 0,05 mm. En bolt er sikkert inne bare når avlesingen ligger minst 0,05 mm innenfor begge grenser. Du leser 78,17 mm.</p>",
    steg: [{ verdi: 0.05, enhet: "mm" }, { verdi: 78.2, enhet: "mm" }, { verdi: 77.8, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 78.2, enhet: "mm", tol: 0 } },
      { tekst: "Høyeste avlesing som er sikkert inne?", svar: { verdi: 78.15, enhet: "mm" } },
      { tekst: "Laveste avlesing som er sikkert inne?", svar: { verdi: 77.85, enhet: "mm" } },
      { tekst: "Hva kan du si om 78,17 mm?", svar: { valg: ["Sikkert inne", "Usikker", "Sikkert vrak"], riktig: 1 } }
    ],
    hint: ["Grensene er 77,80 og 78,20. Trekk 0,05 fra øvre og legg 0,05 til nedre for den sikre sonen.", "\\(78{,}20 - 0{,}05 = 78{,}15\\). \\(78{,}17 + 0{,}05 = 78{,}22\\), som er over 78,20."],
    losning: "<p>Grenser 77,80 mm og 78,20 mm. Sikkert inne: 77,85 mm til 78,15 mm. 78,17 mm kan være fra 78,12 til 78,22 mm. Det er usikkert, ikke sikkert vrak.</p>"
  },
  {
    id: "krymp-250",
    niva: "vanskelig",
    tittel: "Ståltapp fra 70 °C",
    tekst: "<p>En ståltapp måles til 250,32 mm mens den er 70 °C. Lengdemål gjelder ved 20 °C. Bruk \\(\\alpha = 0{,}000012\\) per °C. Kravet når den er kald, er \\(250 \\pm 0{,}10\\) mm. \\(\\Delta L = \\alpha \\cdot L \\cdot \\Delta T\\).</p>",
    steg: [{ verdi: 50, enhet: "°C" }, { verdi: 0.15, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange grader skal den kjøles?", svar: { verdi: 50, enhet: "°C", tol: 0 } },
      { tekst: "Hvor mye krymper den?", svar: { verdi: 0.15, enhet: "mm" } },
      { tekst: "Hvor lang er den ved 20 °C?", svar: { verdi: 250.17, enhet: "mm" } },
      { tekst: "Er den godkjent når den er kald?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["\\(\\Delta T = 70 - 20\\). \\(0{,}000012 \\cdot 250 \\cdot 50\\).", "Krympet er 0,15 mm. \\(250{,}32 - 0{,}15 = 250{,}17\\). Øvre grense er 250,10 mm."],
    losning: "<p>\\(\\Delta T = 50\\) °C. \\(\\Delta L = 0{,}000012 \\cdot 250 \\cdot 50 = 0{,}15\\) mm. Kald lengde \\(250{,}32 - 0{,}15 = 250{,}17\\) mm. Kravet er 249,90 mm til 250,10 mm. 250,17 mm er vrak. Ikke godkjenn den mens den er varm.</p>"
  }
]);
