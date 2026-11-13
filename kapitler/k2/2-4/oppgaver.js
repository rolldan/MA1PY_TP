Bok.oppgaver([
  {
    id: "fem-bolter",
    niva: "lett",
    tekst: "<p>Fem bolter måles til 90,2 · 89,8 · 90,0 · 90,1 · 89,9 mm.</p>",
    steg: [{ verdi: 450, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 90, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.4, enhet: "mm" } }
    ],
    hint: ["Summen er 450,0 mm. Del på 5.", "Variasjonsbredde er største minus minste: \\(90{,}2 - 89{,}8\\)."],
    losning: "<p>Gjennomsnitt \\(450 : 5 = 90{,}0\\) mm. Variasjonsbredde \\(0{,}4\\) mm.</p>"
  },
  {
    id: "ror-prosent",
    niva: "lett",
    tekst: "<p>Et rør måles til 200 mm med målebånd. Absolutt usikkerhet er 1 mm.</p>",
    deler: [
      { tekst: "Hvor stor er den absolutte usikkerheten?", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor er den relative usikkerheten?", svar: { verdi: 0.5, enhet: "%", tol: 0 } }
    ],
    hint: ["Absolutt usikkerhet er ±-tallet.", "\\(1 : 200 \\cdot 100 = 0{,}5\\). Enheten på svaret er prosent."],
    losning: "<p>Absolutt 1 mm. Relativ \\(1 : 200 \\cdot 100\\% = 0{,}5\\%\\).</p>"
  },
  {
    id: "aksel-serie",
    niva: "middels",
    tekst: "<p>Skyvelæret på en aksel: 40,02 · 40,05 · 39,98 · 40,01 · 40,00 mm.</p>",
    steg: [{ verdi: 200.06, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 40.012, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.07, enhet: "mm" } }
    ],
    hint: ["Summen er 200,06 mm.", "\\(200{,}06 : 5 = 40{,}012\\). Bredde: \\(40{,}05 - 39{,}98\\)."],
    losning: "<p>Gjennomsnitt 40,012 mm. Variasjonsbredde 0,07 mm.</p>"
  },
  {
    id: "hvem-storst",
    niva: "middels",
    tekst: "<p>En aksel måles til 25 mm ± 0,2 mm. En plate måles til 500 mm ± 1 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for akselen, i prosent.", svar: { verdi: 0.8, enhet: "%", tol: 0 } },
      { tekst: "Relativ usikkerhet for plata, i prosent.", svar: { verdi: 0.2, enhet: "%", tol: 0 } },
      { tekst: "Hvilken måling har størst relativ usikkerhet?", svar: { valg: ["Akselen", "Plata", "De er like"], riktig: 0 } }
    ],
    hint: ["Del absolutt usikkerhet på målt verdi og gang med 100.", "Aksel: \\(0{,}2 : 25 \\cdot 100 = 0{,}8\\). Plate: \\(1 : 500 \\cdot 100 = 0{,}2\\)."],
    losning: "<p>Aksel 0,8 %. Plate 0,2 %. Akselen har størst relativ usikkerhet, selv om 0,2 mm ser mindre ut enn 1 mm.</p>"
  },
  {
    id: "samme-verktoy",
    niva: "vanskelig",
    tekst: "<p>Samme skyvelære, usikkerhet 0,02 mm, brukes på en skive på 8 mm og en aksel på 200 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for skiva, i prosent.", svar: { verdi: 0.25, enhet: "%" } },
      { tekst: "Relativ usikkerhet for akselen, i prosent.", svar: { verdi: 0.01, enhet: "%" } },
      { tekst: "Hvor mange ganger større er den relative usikkerheten på skiva?", svar: { verdi: 25 } }
    ],
    hint: ["\\(0{,}02 : 8 \\cdot 100\\) og \\(0{,}02 : 200 \\cdot 100\\).", "Del 0,25 på 0,01."],
    losning: "<p>Skive: \\(0{,}25\\%\\). Aksel: \\(0{,}01\\%\\). \\(0{,}25 : 0{,}01 = 25\\). Samme absolutte feil veier 25 ganger mer på den lille skiva.</p>"
  },
  {
    id: "egen-serie",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Serien fra akselen",
    utstyr: "Skyvelære og akselen fra 2.2, eller tallene under",
    hms: "Samme som ved skyvelæremåling. Ingen roterende maskin.",
    tekst: "<p>En serie: 40,02 · 40,04 · 39,99 · 40,01 · 40,03 mm. Absolutt usikkerhet 0,02 mm. Bruk 40 mm når du regner prosent. Mål gjerne en egen serie etterpå.</p>",
    steg: [{ verdi: 200.09, enhet: "mm" }],
    deler: [
      { tekst: "Gjennomsnitt?", svar: { verdi: 40.018, enhet: "mm" } },
      { tekst: "Variasjonsbredde?", svar: { verdi: 0.05, enhet: "mm" } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.05, enhet: "%", tol: 0 } }
    ],
    hint: ["Summen er 200,09 mm. Største er 40,04 og minste er 39,99.", "\\(200{,}09 : 5 = 40{,}018\\). Relativ: \\(0{,}02 : 40 \\cdot 100 = 0{,}05\\)."],
    losning: "<p>Gjennomsnitt 40,018 mm. Variasjonsbredde 0,05 mm. Relativ usikkerhet 0,05 %.</p>"
  },
  {
    id: "repetisjon-minus",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Basismålet er 50,0 mm. Avviket er −0,3 mm. Hva er målet?</p>",
    svar: { verdi: 49.7, enhet: "mm" },
    hint: ["Et negativt avvik trekkes fra.", "\\(50{,}0 - 0{,}3 = 49{,}7\\)."],
    losning: "<p>\\(50{,}0 + (-0{,}3) = 49{,}7\\) mm.</p>"
  },
  {
    id: "eksamen-54",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En lengde oppgis som 54 mm ± 0,5 mm.</p>",
    deler: [
      { tekst: "Absolutt usikkerhet?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Relativ usikkerhet i prosent, avrundet til to desimaler.", svar: { verdi: 0.93, enhet: "%", tol: 0.005 } }
    ],
    hint: ["Absolutt usikkerhet står bak ±.", "\\(0{,}5 : 54 \\cdot 100 \\approx 0{,}9259\\), som avrundes til 0,93."],
    losning: "<p>Absolutt 0,5 mm. \\(0{,}5 : 54 \\cdot 100 = 0{,}9259\\ldots\\% \\approx 0{,}93\\%\\).</p>"
  },
  {
    id: "fire-nav",
    niva: "lett",
    tekst: "<p>Fire nav måles til 12,1 · 11,9 · 12,0 · 12,2 mm.</p>",
    steg: [{ verdi: 48.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 12.05, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.3, enhet: "mm" } }
    ],
    hint: ["Summen er 48,2 mm. Del på 4.", "Variasjonsbredde er største minus minste: \\(12{,}2 - 11{,}9\\)."],
    losning: "<p>Gjennomsnitt \\(48{,}2 : 4 = 12{,}05\\) mm. Variasjonsbredde \\(0{,}3\\) mm.</p>"
  },
  {
    id: "plate-400",
    niva: "lett",
    tekst: "<p>En plate måles til 400 mm med et verktøy som har absolutt usikkerhet 2 mm.</p>",
    deler: [
      { tekst: "Hvor stor er den absolutte usikkerheten?", svar: { verdi: 2, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor er den relative usikkerheten?", svar: { verdi: 0.5, enhet: "%", tol: 0 } }
    ],
    hint: ["Absolutt usikkerhet er ±-tallet.", "\\(2 : 400 \\cdot 100 = 0{,}5\\)."],
    losning: "<p>Absolutt 2 mm. Relativ \\(2 : 400 \\cdot 100\\% = 0{,}5\\%\\).</p>"
  },
  {
    id: "tre-stang",
    niva: "lett",
    tekst: "<p>En stang måles tre ganger: 150,2 · 149,8 · 150,0 mm.</p>",
    steg: [{ verdi: 450, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 150, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.4, enhet: "mm" } }
    ],
    hint: ["Summen er 450,0 mm. Del på 3.", "\\(150{,}2 - 149{,}8 = 0{,}4\\)."],
    losning: "<p>Gjennomsnitt \\(450 : 3 = 150{,}0\\) mm. Variasjonsbredde 0,4 mm.</p>"
  },
  {
    id: "nav-62",
    niva: "middels",
    tekst: "<p>Skyvelæret på et nav: 62,04 · 61,98 · 62,01 · 61,97 · 62,00 mm.</p>",
    steg: [{ verdi: 310, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 62, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.07, enhet: "mm" } }
    ],
    hint: ["Summen er 310,00 mm.", "\\(310 : 5 = 62\\). Bredde: \\(62{,}04 - 61{,}97\\)."],
    losning: "<p>Gjennomsnitt 62,00 mm. Variasjonsbredde 0,07 mm.</p>"
  },
  {
    id: "ror-tapp",
    niva: "middels",
    tittel: "Rør og tapp",
    tekst: "<p>Et rør måles til 800 mm ± 2 mm. En tapp måles til 16 mm ± 0,08 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for røret, i prosent.", svar: { verdi: 0.25, enhet: "%", tol: 0 } },
      { tekst: "Relativ usikkerhet for tappen, i prosent.", svar: { verdi: 0.5, enhet: "%", tol: 0 } },
      { tekst: "Hvilken måling har størst relativ usikkerhet?", svar: { valg: ["Røret", "Tappen", "De er like"], riktig: 1 } }
    ],
    hint: ["Del absolutt usikkerhet på målt verdi og gang med 100.", "Rør: \\(2 : 800 \\cdot 100 = 0{,}25\\). Tapp: \\(0{,}08 : 16 \\cdot 100 = 0{,}5\\)."],
    losning: "<p>Rør 0,25 %. Tapp 0,5 %. Tappen har størst relativ usikkerhet, selv om 0,08 mm er mindre enn 2 mm.</p>"
  },
  {
    id: "fra-prosent",
    niva: "middels",
    tittel: "Fra prosent til millimeter",
    tekst: "<p>En lengde på 250 mm har relativ usikkerhet 0,4 %. Finn den absolutte usikkerheten.</p>",
    steg: [{ verdi: 0.004 }],
    svar: { verdi: 1, enhet: "mm", tol: 0 },
    hint: ["0,4 % er 0,4 : 100 av lengden.", "\\(0{,}004 \\cdot 250 = 1\\) mm."],
    losning: "<p>\\(0{,}4 : 100 = 0{,}004\\). \\(0{,}004 \\cdot 250 = 1\\) mm. Absolutt usikkerhet er 1 mm.</p>"
  },
  {
    id: "skive-stang",
    niva: "vanskelig",
    tekst: "<p>Samme skyvelære, usikkerhet 0,02 mm, brukes på en skive på 5 mm og en stang på 100 mm.</p>",
    deler: [
      { tekst: "Relativ usikkerhet for skiva, i prosent.", svar: { verdi: 0.4, enhet: "%" } },
      { tekst: "Relativ usikkerhet for stanga, i prosent.", svar: { verdi: 0.02, enhet: "%" } },
      { tekst: "Hvor mange ganger større er den relative usikkerheten på skiva?", svar: { verdi: 20 } }
    ],
    hint: ["\\(0{,}02 : 5 \\cdot 100\\) og \\(0{,}02 : 100 \\cdot 100\\).", "Del 0,4 på 0,02."],
    losning: "<p>Skive: \\(0{,}4\\%\\). Stang: \\(0{,}02\\%\\). \\(0{,}4 : 0{,}02 = 20\\). Samme absolutte feil veier 20 ganger mer på skiva.</p>"
  },
  {
    id: "serie-28",
    niva: "vanskelig",
    tittel: "Serie og verktøy",
    tekst: "<p>Fem mål: 28,02 · 27,98 · 28,04 · 27,99 · 28,02 mm. Skyvelærets usikkerhet er 0,02 mm. Bruk 28 mm når du regner prosent, og avrund prosenten til to desimaler.</p>",
    steg: [{ verdi: 140.05, enhet: "mm" }, { verdi: 28.01, enhet: "mm" }],
    deler: [
      { tekst: "Gjennomsnitt?", svar: { verdi: 28.01, enhet: "mm" } },
      { tekst: "Variasjonsbredde?", svar: { verdi: 0.06, enhet: "mm" } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.07, enhet: "%", tol: 0.005 } },
      { tekst: "Hva sier du om spredningen?", svar: { valg: ["Spredningen er større enn verktøyets usikkerhet", "Spredningen er mindre enn verktøyets usikkerhet", "Spredningen er usikkerheten"], riktig: 0 } }
    ],
    hint: ["Summen er 140,05 mm. Største er 28,04 og minste er 27,98.", "\\(140{,}05 : 5 = 28{,}01\\). Relativ: \\(0{,}02 : 28 \\cdot 100 \\approx 0{,}07\\). 0,06 mm er mer enn 0,02 mm."],
    losning: "<p>Gjennomsnitt 28,01 mm. Variasjonsbredde 0,06 mm. Relativ usikkerhet \\(0{,}02 : 28 \\cdot 100\\% = 0{,}071\\ldots\\% \\approx 0{,}07\\%\\). Spredningen 0,06 mm er større enn verktøyets 0,02 mm, så delen eller metoden varierer mer enn verktøyet alene.</p>"
  },
  {
    id: "egen-nav",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Navet i skrustikka",
    utstyr: "Skyvelære og et nav, eller tallene under",
    hms: "Samme som ved skyvelæremåling. Ingen roterende maskin.",
    tekst: "<p>En serie: 55,02 · 54,98 · 55,01 · 54,99 · 55,05 mm. Absolutt usikkerhet 0,02 mm. Bruk 55 mm i prosenten, og avrund til tre desimaler. Mål gjerne en egen serie etterpå.</p>",
    steg: [{ verdi: 275.05, enhet: "mm" }],
    deler: [
      { tekst: "Gjennomsnitt?", svar: { verdi: 55.01, enhet: "mm" } },
      { tekst: "Variasjonsbredde?", svar: { verdi: 0.07, enhet: "mm" } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.036, enhet: "%", tol: 0.0005 } }
    ],
    hint: ["Summen er 275,05 mm. Største er 55,05 og minste er 54,98.", "\\(275{,}05 : 5 = 55{,}01\\). Relativ: \\(0{,}02 : 55 \\cdot 100 \\approx 0{,}036\\)."],
    losning: "<p>Gjennomsnitt 55,01 mm. Variasjonsbredde 0,07 mm. \\(0{,}02 : 55 \\cdot 100\\% = 0{,}03636\\ldots\\% \\approx 0{,}036\\%\\).</p>"
  },
  {
    id: "rep-avvik-80",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Basismålet er 80,0 mm. Avviket er −1,5 mm. Hva er målet?</p>",
    svar: { verdi: 78.5, enhet: "mm" },
    hint: ["Et negativt avvik trekkes fra.", "\\(80{,}0 - 1{,}5 = 78{,}5\\)."],
    losning: "<p>\\(80{,}0 + (-1{,}5) = 78{,}5\\) mm.</p>"
  },
  {
    id: "eksamen-80",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En lengde oppgis som 80 mm ± 0,4 mm.</p>",
    deler: [
      { tekst: "Absolutt usikkerhet?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.5, enhet: "%", tol: 0 } }
    ],
    hint: ["Absolutt usikkerhet står bak ±.", "\\(0{,}4 : 80 \\cdot 100 = 0{,}5\\)."],
    losning: "<p>Absolutt 0,4 mm. \\(0{,}4 : 80 \\cdot 100\\% = 0{,}5\\%\\).</p>"
  },
  {
    id: "nav-48",
    niva: "lett",
    tittel: "Fire mål på et nav",
    tekst: "<p>Et nav måles fire ganger med skyvelære: 48,02 · 48,06 · 48,04 · 48,08 mm.</p>",
    steg: [{ verdi: 192.2, enhet: "mm" }],
    deler: [
      { tekst: "Hva er gjennomsnittet?", svar: { verdi: 48.05, enhet: "mm" } },
      { tekst: "Hva er variasjonsbredden?", svar: { verdi: 0.06, enhet: "mm" } }
    ],
    hint: ["Summen er 192,20 mm. Del på 4. Variasjonsbredde er største minus minste, uten å dele.", "\\(192{,}20 : 4 = 48{,}05\\). \\(48{,}08 - 48{,}02 = 0{,}06\\)."],
    losning: "<p>Gjennomsnitt 48,05 mm. Variasjonsbredde 0,06 mm.</p>"
  },
  {
    id: "ror-250",
    niva: "lett",
    tittel: "Rør på 250 mm",
    tekst: "<p>Leo måler et rør til 250 mm med målebånd. Usikkerheten er ± 1 mm.</p>",
    steg: [{ verdi: 1, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stor er den absolutte usikkerheten?", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor er den relative usikkerheten i prosent?", svar: { verdi: 0.4, enhet: "%", tol: 0 } }
    ],
    hint: ["Absolutt usikkerhet er ±-tallet, her 1 mm. Relativ er det tallet delt på målt lengde, ganger 100.", "\\(1 : 250 \\cdot 100 = 0{,}4\\)."],
    losning: "<p>Absolutt usikkerhet 1 mm. \\(1 : 250 \\cdot 100\\% = 0{,}4\\%\\).</p>"
  },
  {
    id: "pinne-bjelke",
    niva: "middels",
    tittel: "Pinne og bjelke",
    tekst: "<p>En styrepinne måles til \\((24 \\pm 0{,}12)\\) mm. En bjelke måles til \\((800 \\pm 2)\\) mm. Sammenlign den relative usikkerheten.</p>",
    steg: [{ verdi: 0.12, enhet: "mm" }, { verdi: 2, enhet: "mm" }],
    deler: [
      { tekst: "Relativ usikkerhet for pinnen, i prosent?", svar: { verdi: 0.5, enhet: "%", tol: 0 } },
      { tekst: "Relativ usikkerhet for bjelken, i prosent?", svar: { verdi: 0.25, enhet: "%", tol: 0 } },
      { tekst: "Hvilken måling har størst relativ usikkerhet?", svar: { valg: ["Pinnen", "Bjelken", "De er like"], riktig: 0 } }
    ],
    hint: ["Del absolutt usikkerhet på målt verdi og gang med 100. Ikke sammenlign millimeterne direkte.", "Pinnen: \\(0{,}12 : 24 \\cdot 100 = 0{,}5\\). Bjelken: \\(2 : 800 \\cdot 100 = 0{,}25\\)."],
    losning: "<p>Pinnen 0,5 %. Bjelken 0,25 %. 2 mm på bjelken er et større millimeter-tall, men en mindre andel. Pinnen har størst relativ usikkerhet.</p>"
  },
  {
    id: "laser-750",
    niva: "middels",
    tittel: "Fra prosent til millimeter",
    tekst: "<p>En lasermåler har relativ usikkerhet 0,4 %. Den viser 750 mm på en kappet stang.</p>",
    steg: [{ verdi: 0.004 }],
    deler: [
      { tekst: "Hvor stor er den absolutte usikkerheten?", svar: { verdi: 3, enhet: "mm", tol: 0 } }
    ],
    hint: ["0,4 % er 0,004 av lengden. Gang med 750 mm.", "\\(0{,}004 \\cdot 750 = 3\\) mm."],
    losning: "<p>\\(0{,}4\\%\\) av 750 mm er \\(0{,}004 \\cdot 750 = 3\\) mm. Målingen kan skrives \\(750 \\pm 3\\) mm.</p>"
  },
  {
    id: "to-malere",
    niva: "vanskelig",
    tittel: "To målere på samme skrue",
    tekst: "<p>Noor måler diameteren på en skrue til 4,8 mm. Emil måler den samme skruen til 5,4 mm. Hvor mange prosent høyere er Emils måling enn Noors?</p>",
    steg: [{ verdi: 0.6, enhet: "mm" }],
    svar: { verdi: 12.5, enhet: "%", tol: 0 },
    hint: ["Finn differansen først. Prosenten regnes av Noors mål, ikke av Emils.", "\\(5{,}4 - 4{,}8 = 0{,}6\\). \\(0{,}6 : 4{,}8 \\cdot 100 = 12{,}5\\)."],
    losning: "<p>\\(0{,}6 : 4{,}8 \\cdot 100\\% = 12{,}5\\%\\). Emil ligger 12,5 % høyere enn Noor. Så stor forskjell på en skrue tyder på ulikt verktøy eller feil avlesing, ikke bare tilfeldig spredning.</p>"
  },
  {
    id: "serie-50",
    niva: "vanskelig",
    tittel: "Serie på en flens",
    tekst: "<p>Fem mål på en flens, skyvelære ± 0,02 mm: 50,03 · 49,97 · 50,06 · 50,00 · 49,94 mm. Bruk 50 mm som målt verdi i prosenten.</p>",
    steg: [{ verdi: 250, enhet: "mm" }, { verdi: 0.02, enhet: "mm" }],
    deler: [
      { tekst: "Gjennomsnitt?", svar: { verdi: 50, enhet: "mm", tol: 0 } },
      { tekst: "Variasjonsbredde?", svar: { verdi: 0.12, enhet: "mm" } },
      { tekst: "Absolutt usikkerhet fra verktøyet?", svar: { verdi: 0.02, enhet: "mm", tol: 0 } },
      { tekst: "Relativ usikkerhet i prosent?", svar: { verdi: 0.04, enhet: "%", tol: 0 } }
    ],
    hint: ["Summen er 250,00 mm. Variasjonsbredde er største minus minste. Relativ usikkerhet bruker ± 0,02 mm, ikke variasjonsbredden.", "\\(250 : 5 = 50\\). \\(50{,}06 - 49{,}94 = 0{,}12\\). \\(0{,}02 : 50 \\cdot 100 = 0{,}04\\)."],
    losning: "<p>Gjennomsnitt 50,00 mm. Variasjonsbredde 0,12 mm. Absolutt usikkerhet 0,02 mm. Relativ usikkerhet \\(0{,}04\\%\\). Variasjonsbredden er ikke usikkerheten.</p>"
  }
]);
