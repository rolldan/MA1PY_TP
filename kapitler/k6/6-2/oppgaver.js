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
  }
]);
