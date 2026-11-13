Bok.oppgaver([
  {
    id: "tre-fire-fem",
    niva: "lett",
    tittel: "3-4-5",
    tekst: "<p>En rettvinklet trekant har kateter 30 cm og 40 cm. Hvor lang er hypotenusen?</p>",
    steg: [{ verdi: 900 }, { verdi: 1600 }, { verdi: 2500 }],
    svar: { verdi: 50, enhet: "cm" },
    hint: ["Dette er 3-4-5 ganget med 10. Du kan også regne \\(30^2 + 40^2\\).", "\\(900 + 1600 = 2500\\), og \\(\\sqrt{2500} = 50\\)."],
    losning: "<p>\\(30^2 + 40^2 = 900 + 1600 = 2500\\). \\(\\sqrt{2500} = 50\\). Hypotenusen er 50 cm.</p>"
  },
  {
    id: "skrastag",
    niva: "lett",
    tekst: "<p>Et skråstag går 3 m ut og 4 m opp. Hvor langt er staget?</p>",
    svar: { verdi: 5, enhet: "m" },
    hint: ["Samme tall som 3-4-5, bare i meter.", "\\(3^2 + 4^2 = 25\\), og kvadratroten av 25 er 5."],
    losning: "<p>\\(\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\). Staget er 5 m.</p>"
  },
  {
    id: "seks-atte-ti",
    niva: "lett",
    tekst: "<p>En trekant har sider 6 cm, 8 cm og 10 cm. Er vinkelen mellom de to korte sidene rett?</p>",
    stegForSteg: false,
    svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "36 + 64 = 100 = 10²." },
    hint: ["Sjekk om \\(6^2 + 8^2\\) er lik \\(10^2\\).", "36 + 64 = 100, og 10² = 100. Likheten stemmer."],
    losning: "<p>\\(36 + 64 = 100 = 10^2\\). Ja, trekanten er rettvinklet. Den er 3-4-5 ganget med 2.</p>"
  },
  {
    id: "ramme-diagonal",
    niva: "middels",
    tekst: "<p>En ramme er 600 mm × 800 mm. Hjørnene skal være 90°. Du måler diagonalen til 1015 mm.</p>",
    deler: [
      { tekst: "Hvor lang skal diagonalen være?", svar: { verdi: 1000, enhet: "mm" } },
      { tekst: "Hvor mange millimeter er målet for langt?", svar: { verdi: 15, enhet: "mm" } }
    ],
    hint: ["600-800-1000 er 3-4-5 ganget med 200.", "\\(600^2 + 800^2 = 1\\,000\\,000\\), rota er 1000. Avviket er 1015 − 1000."],
    losning: "<p>Diagonalen skal være 1000 mm. Målt 1015 mm er 15 mm for langt. Hjørnene er ikke rette.</p>"
  },
  {
    id: "finn-katet",
    niva: "middels",
    tekst: "<p>Hypotenusen er 50 cm, og den ene kateten er 30 cm. Hvor lang er den andre kateten?</p>",
    steg: [{ verdi: 2500 }, { verdi: 900 }, { verdi: 1600 }],
    svar: { verdi: 40, enhet: "cm" },
    hint: ["Snu formelen: \\(a^2 = c^2 - b^2\\).", "\\(50^2 - 30^2 = 2500 - 900 = 1600\\). \\(\\sqrt{1600} = 40\\)."],
    losning: "<p>\\(a = \\sqrt{50^2 - 30^2} = \\sqrt{1600} = 40\\). Kateten er 40 cm.</p>"
  },
  {
    id: "atte-femten-sytten",
    niva: "middels",
    tittel: "8-15-17",
    tekst: "<p>Kontroller to trekanter. Den rette vinkelen, hvis den finnes, ligger mellom de to korteste sidene.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Sider 8 cm, 15 cm og 17 cm. Er trekanten rettvinklet?", svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "64 + 225 = 289 = 17²." } },
      { tekst: "Sider 5 cm, 7 cm og 9 cm. Er trekanten rettvinklet?", svar: { valg: ["Nei", "Ja"], riktig: 0, forklaring: "25 + 49 = 74, men 9² = 81." } }
    ],
    hint: ["Regn kvadratene av de to korte sidene og sammenlign med kvadratet av den lengste.", "8² + 15² = 64 + 225 = 289, og 17² = 289. For 5-7-9 blir det 74 mot 81."],
    losning: "<p>8-15-17 er rettvinklet, fordi \\(64 + 225 = 289 = 17^2\\). En fasit som sier nei, er feil. 5-7-9 er ikke rettvinklet, fordi \\(25 + 49 = 74\\), mens \\(9^2 = 81\\).</p>"
  },
  {
    id: "to-diagonaler",
    niva: "vanskelig",
    tekst: "<p>En rektangulær ramme er 900 mm × 1200 mm. Du måler diagonalene til 1488 mm og 1512 mm.</p>",
    deler: [
      { tekst: "Hvor lang skal hver diagonal være?", svar: { verdi: 1500, enhet: "mm" } },
      { tekst: "Hvor stort er avviket på den korteste diagonalen, i mm?", svar: { verdi: 12, enhet: "mm" } },
      { tekst: "Er hjørnene rette?", svar: { valg: ["Nei, diagonalene er ulike", "Ja, begge er nær 1500 mm"], riktig: 0 } }
    ],
    hint: ["900-1200-1500 er 3-4-5 ganget med 300.", "Riktig diagonal er 1500 mm. 1500 − 1488 = 12. Ulike diagonaler betyr at rammen ikke er rettvinklet."],
    losning: "<p>\\(900^2 + 1200^2 = 2\\,250\\,000\\), og rota er 1500 mm. Begge målene avviker med 12 mm, men til hver sin side. Diagonalene er ikke like, så hjørnene er ikke rette.</p>"
  },
  {
    id: "ramme-rett",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "3-4-5 på rammen",
    utstyr: "Målebånd, tusj, en sveiset ramme eller et stort hjørne på gulvet",
    hms: "Pass fingrene når du spenner målebåndet. Ikke gå i sveiselyset hvis det sveises i naboplassen.",
    tekst: "<p>Du setter av 300 mm langs den ene kanten og 400 mm langs den andre, fra samme hjørne. Hvor lang skal avstanden mellom merkene være hvis hjørnet er 90°? Mål etterpå på rammen i verkstedet.</p>",
    svar: { verdi: 500, enhet: "mm" },
    hint: ["300-400-500 er 3-4-5 i millimeter.", "\\(300^2 + 400^2 = 250\\,000\\), og \\(\\sqrt{250\\,000} = 500\\)."],
    losning: "<p>Avstanden skal være 500 mm. Er målet noe annet, er hjørnet ikke rett. På en hel ramme sammenligner du også de to diagonalene: de skal være like.</p>"
  },
  {
    id: "rep-tommer",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Et mål på tegningen er 1/2 tomme. Hvor mange millimeter er det? Bruk 1 tomme = 25,4 mm.</p>",
    svar: { verdi: 12.7, enhet: "mm" },
    hint: ["En halv tomme er halvparten av 25,4 mm.", "25,4 : 2 = 12,7."],
    losning: "<p>\\(0{,}5 \\cdot 25{,}4 = 12{,}7\\) mm.</p>"
  },
  {
    id: "eks-pyt",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En rettvinklet trekant har kateter 9 cm og 12 cm.</p>",
    deler: [
      { tekst: "Hvor lang er hypotenusen?", svar: { verdi: 15, enhet: "cm" } },
      { tekst: "Er 9-12-15 samme form som 3-4-5?", svar: { valg: ["Ja, ganget med 3", "Nei"], riktig: 0 } }
    ],
    hint: ["9-12-15 er 3-4-5 ganget med 3. Du kan også regne kvadratene.", "81 + 144 = 225, og \\(\\sqrt{225} = 15\\)."],
    losning: "<p>\\(9^2 + 12^2 = 81 + 144 = 225 = 15^2\\). Hypotenusen er 15 cm. Trioen er 3-4-5 ganget med 3.</p>"
  },
  {
    id: "benk-130",
    niva: "lett",
    tittel: "Anlegg på benken",
    tekst: "<p>Et anlegg går 50 mm bort og 120 mm opp. Hvor langt er skråstrekket?</p>",
    steg: [{ verdi: 2500 }, { verdi: 14400 }, { verdi: 16900 }],
    svar: { verdi: 130, enhet: "mm" },
    hint: ["\\(c = \\sqrt{50^2 + 120^2}\\). 5-12-13 ganget med 10 gir samme svar.", "2500 + 14 400 = 16 900, og \\(\\sqrt{16\\,900} = 130\\)."],
    losning: "<p>\\(50^2 + 120^2 = 2500 + 14\\,400 = 16\\,900\\). \\(\\sqrt{16\\,900} = 130\\). Skråstrekket er 130 mm.</p>"
  },
  {
    id: "skrustikke-250",
    niva: "lett",
    tekst: "<p>Fra et hjørne setter du av 150 mm den ene veien og 200 mm den andre. Hvor langt skal det være mellom merkene hvis hjørnet er 90°?</p>",
    steg: [{ verdi: 22500 }, { verdi: 40000 }, { verdi: 62500 }],
    svar: { verdi: 250, enhet: "mm" },
    hint: ["150-200-250 er 3-4-5 ganget med 50.", "\\(150^2 + 200^2 = 22\\,500 + 40\\,000 = 62\\,500\\), og rota er 250."],
    losning: "<p>\\(\\sqrt{150^2 + 200^2} = \\sqrt{62\\,500} = 250\\). Avstanden skal være 250 mm.</p>"
  },
  {
    id: "kvadrat-141",
    niva: "lett",
    tittel: "Diagonal i kvadratplate",
    tekst: "<p>En kvadratisk dekkplate er 100 mm × 100 mm. Hvor lang er diagonalen? Rund av til én desimal.</p>",
    steg: [{ verdi: 10000 }, { verdi: 20000 }],
    svar: { verdi: 141.4, enhet: "mm", tol: 0.5 },
    hint: ["\\(c = \\sqrt{100^2 + 100^2}\\).", "10 000 + 10 000 = 20 000. Kvadratroten er omtrent 141,4 mm."],
    losning: "<p>\\(\\sqrt{100^2 + 100^2} = \\sqrt{20\\,000} \\approx 141{,}4\\) mm.</p>"
  },
  {
    id: "ikke-rett-11",
    niva: "lett",
    tekst: "<p>En trekant har sider 6 cm, 8 cm og 11 cm. Er vinkelen mellom de to korte sidene rett?</p>",
    steg: [{ verdi: 36 }, { verdi: 64 }, { verdi: 100 }, { verdi: 121 }],
    svar: { valg: ["Nei", "Ja"], riktig: 0, forklaring: "36 + 64 = 100, men 11² = 121." },
    hint: ["Sjekk om \\(6^2 + 8^2\\) er lik \\(11^2\\).", "36 + 64 = 100. 11² = 121. 100 er ikke 121, så vinkelen er ikke rett."],
    losning: "<p>\\(6^2 + 8^2 = 100\\), mens \\(11^2 = 121\\). Summen av kvadratene er mindre, så vinkelen er ikke rett. 6-8-10 hadde vært rett. 11 cm er for langt.</p>"
  },
  {
    id: "takstol-26",
    niva: "middels",
    tittel: "Sperre i leskuret",
    tekst: "<p>En takstol går 2,4 m vannrett ut fra midten og 1,0 m opp. Hvor lang er sperra?</p>",
    steg: [{ verdi: 5.76 }, { verdi: 1 }, { verdi: 6.76 }],
    svar: { verdi: 2.6, enhet: "m" },
    hint: ["\\(c = \\sqrt{2{,}4^2 + 1{,}0^2}\\).", "2,4² = 5,76. 5,76 + 1 = 6,76, og \\(\\sqrt{6{,}76} = 2{,}6\\)."],
    losning: "<p>\\(2{,}4^2 + 1^2 = 5{,}76 + 1 = 6{,}76\\). \\(\\sqrt{6{,}76} = 2{,}6\\). Sperra er 2,6 m. Trioen 1,0-2,4-2,6 er 5-12-13 ganget med 0,2.</p>"
  },
  {
    id: "port-hoyde",
    niva: "middels",
    tekst: "<p>Diagonalen i en port skal være 1300 mm, og bredden er 500 mm. Hjørnene er 90°. Hvor høy er porten?</p>",
    steg: [{ verdi: 1690000 }, { verdi: 250000 }, { verdi: 1440000 }],
    svar: { verdi: 1200, enhet: "mm" },
    hint: ["Du kjenner hypotenusen. \\(a = \\sqrt{1300^2 - 500^2}\\).", "1 690 000 − 250 000 = 1 440 000. \\(\\sqrt{1\\,440\\,000} = 1200\\)."],
    losning: "<p>\\(h = \\sqrt{1300^2 - 500^2} = \\sqrt{1\\,440\\,000} = 1200\\). Porten er 1200 mm høy. 500-1200-1300 er 5-12-13 ganget med 100.</p>"
  },
  {
    id: "kontroll-250",
    niva: "middels",
    tittel: "7-24-25 i millimeter",
    tekst: "<p>Et stag har sider 70 mm, 240 mm og 250 mm. Den rette vinkelen, hvis den finnes, ligger mellom de to korte sidene.</p>",
    steg: [{ verdi: 4900 }, { verdi: 57600 }, { verdi: 62500 }],
    svar: { valg: ["Ja, trekanten er rettvinklet", "Nei, kvadratene stemmer ikke"], riktig: 0, forklaring: "4900 + 57 600 = 62 500 = 250²." },
    hint: ["Sammenlign \\(70^2 + 240^2\\) med \\(250^2\\).", "4900 + 57 600 = 62 500, og 250² = 62 500. Likheten stemmer."],
    losning: "<p>\\(70^2 + 240^2 = 4900 + 57\\,600 = 62\\,500 = 250^2\\). Ja, staget er rettvinklet. Det er 7-24-25 ganget med 10.</p>"
  },
  {
    id: "port-diagonal",
    niva: "vanskelig",
    tittel: "To diagonaler i porten",
    tekst: "<p>En port er 1,5 m bred og 2,0 m høy. Du måler diagonalene til 2,48 m og 2,53 m.</p>",
    steg: [{ verdi: 2.25 }, { verdi: 4 }, { verdi: 6.25 }],
    deler: [
      { tekst: "Hvor lang skal hver diagonal være?", svar: { verdi: 2.5, enhet: "m" } },
      { tekst: "Hvor mange millimeter er den lengste diagonalen for lang?", svar: { verdi: 30, enhet: "mm" } },
      { tekst: "Er hjørnene rette?", svar: { valg: ["Nei, diagonalene er ulike", "Ja, begge er nær nok"], riktig: 0 } }
    ],
    hint: ["1,5-2,0-2,5 er 3-4-5 ganget med 0,5. Gjør deretter avviket om til millimeter.", "\\(1{,}5^2 + 2^2 = 6{,}25\\), rota er 2,5 m. 2,53 − 2,50 = 0,03 m = 30 mm."],
    losning: "<p>\\(\\sqrt{1{,}5^2 + 2^2} = \\sqrt{6{,}25} = 2{,}5\\) m. Den lengste diagonalen er 30 mm for lang, den korteste 20 mm for kort. Ulike diagonaler betyr at hjørnene ikke er rette.</p>"
  },
  {
    id: "etter-sveis",
    niva: "vanskelig",
    tittel: "Etter sveising",
    tekst: "<p>Før sveising satte du av 600 mm og 800 mm fra hjørnet for en 3-4-5-kontroll. Etter sveising er avstanden mellom merkene 1020 mm. Konstruksjonen har dratt seg.</p>",
    deler: [
      { tekst: "Hvor lang skal avstanden være hvis hjørnet er 90°?", svar: { verdi: 1000, enhet: "mm" } },
      { tekst: "Hvor mange millimeter er målet for langt?", svar: { verdi: 20, enhet: "mm" } },
      { tekst: "Hva betyr det for hjørnet?", svar: { valg: ["Hjørnet er ikke lenger 90°", "Hjørnet er fortsatt 90°, målebåndet er bare feil merket"], riktig: 0 } }
    ],
    hint: ["600-800-1000 er 3-4-5 ganget med 200.", "Riktig skråmål er 1000 mm. 1020 − 1000 = 20. Et annet mål enn 1000 mm betyr at vinkelen har endret seg."],
    losning: "<p>\\(600^2 + 800^2 = 1\\,000\\,000\\), og rota er 1000 mm. Målt 1020 mm er 20 mm for langt. Hjørnet er ikke 90° lenger. På store konstruksjoner er det derfor målebåndet, ikke den korte vinkelhaken, som viser om sveisen har dratt rammen.</p>"
  }
]);
