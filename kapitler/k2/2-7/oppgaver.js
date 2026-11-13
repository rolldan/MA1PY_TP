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
  }
]);
