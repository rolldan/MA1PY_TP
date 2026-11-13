Bok.oppgaver([
  {
    id: "dm-liter",
    niva: "lett",
    tittel: "Tanken i to enheter",
    tekst: "<p>En tank er 100 cm lang, 80 cm bred og 50 cm høy. Det er det samme som 10 dm × 8 dm × 5 dm.</p>",
    steg: [{ verdi: 400000, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange liter er 10 dm × 8 dm × 5 dm?", svar: { verdi: 400, enhet: "L" } },
      { tekst: "Hvor mange cm³ er 100 cm × 80 cm × 50 cm?", svar: { verdi: 400000, enhet: "cm³" } }
    ],
    hint: [
      "1 dm³ = 1 L. I centimeter ganger du de tre målene. 1 L = 1 000 cm³.",
      "\\(10 \\cdot 8 \\cdot 5 = 400\\). \\(100 \\cdot 80 = 8\\,000\\), og det ganger du med 50."
    ],
    losning: "<p>\\(10 \\cdot 8 \\cdot 5 = 400\\) dm³ = 400 L.</p><p>\\(100 \\cdot 80 \\cdot 50 = 400\\,000\\) cm³. Det er også 400 L, fordi \\(400\\,000 : 1\\,000 = 400\\).</p>"
  },
  {
    id: "toleranse",
    niva: "lett",
    tittel: "1 000 mm ± 2 mm",
    tekst: "<p>På tegningen står lengden 1 000 mm ± 2 mm.</p>",
    deler: [
      { tekst: "Hva er største godkjente mål?", svar: { verdi: 1002, enhet: "mm" } },
      { tekst: "Hva er minste godkjente mål?", svar: { verdi: 998, enhet: "mm" } },
      {
        tekst: "Du måler 1 003 mm. Er lengden godkjent?",
        svar: { valg: ["Ja", "Nei"], riktig: 1, forklaring: "1 003 mm er større enn 1 002 mm." }
      }
    ],
    hint: [
      "Legg til og trekk fra toleransen.",
      "\\(1\\,000 + 2 = 1\\,002\\) og \\(1\\,000 - 2 = 998\\)."
    ],
    losning: "<p>Intervallet er 998 mm til 1 002 mm. 1 003 mm er utenfor.</p>"
  },
  {
    id: "hoyde",
    niva: "middels",
    tittel: "Hvor høy må tanken være?",
    tekst: "<p>Tanken skal romme 400 L. Lengden er 100 cm og bredden er 80 cm. Regn i desimeter.</p>",
    steg: [{ verdi: 10, enhet: "dm" }, { verdi: 8, enhet: "dm" }, { verdi: 5, enhet: "dm" }],
    deler: [
      { tekst: "Hvor høy er tanken i dm?", svar: { verdi: 5, enhet: "dm" } },
      { tekst: "Hvor høy er tanken i cm?", svar: { verdi: 50, enhet: "cm" } }
    ],
    hint: [
      "400 L = 400 dm³. Grunnflaten er lengde · bredde i dm. Høyde = volum : grunnflate.",
      "10 dm · 8 dm = 80 dm². \\(400 : 80 = 5\\) dm."
    ],
    losning: "<p>\\(100\\ \\text{cm} = 10\\ \\text{dm}\\) og \\(80\\ \\text{cm} = 8\\ \\text{dm}\\). \\(400 : (10 \\cdot 8) = 5\\) dm = 50 cm.</p>"
  },
  {
    id: "modell-mal",
    niva: "middels",
    tittel: "Mål på modellen",
    tekst: "<p>Originalen er 100 cm × 80 cm × 50 cm. Modellen lages i målestokk 1:10.</p>",
    deler: [
      { tekst: "Hvor lang er modellen?", svar: { verdi: 10, enhet: "cm" } },
      { tekst: "Hvor bred er modellen?", svar: { verdi: 8, enhet: "cm" } },
      { tekst: "Hvor høy er modellen?", svar: { verdi: 5, enhet: "cm" } }
    ],
    hint: [
      "Del hvert lengdemål på 10. Ikke del volumet ennå.",
      "\\(100 : 10 = 10\\), \\(80 : 10 = 8\\), \\(50 : 10 = 5\\)."
    ],
    losning: "<p>Modellen er 10 cm × 8 cm × 5 cm.</p>"
  },
  {
    id: "skala-og-bunn",
    niva: "vanskelig",
    tittel: "Volum, skala og bunnplate",
    tekst: "<p>Modellen er 10 cm × 8 cm × 5 cm, altså 1:10 av en tank på 400 L. Bunnplata i originalen er 100 cm × 80 cm og 2 mm tykk. Aluminium veier 2,7 g/cm³. 2 mm = 0,2 cm.</p>",
    steg: [{ verdi: 400, enhet: "cm³" }, { verdi: 0.4, enhet: "L" }, { verdi: 1600, enhet: "cm³" }],
    deler: [
      { tekst: "Hvor mange desiliter rommer modellen?", svar: { verdi: 4, enhet: "dl" } },
      { tekst: "Hvor mange ganger mindre er volumet i 1:10? Skriv bare tallet.", svar: { verdi: 1000 } },
      { tekst: "Hvor mange gram veier bunnplata?", svar: { verdi: 4320, enhet: "g" } },
      {
        tekst: "Hvilket materiale vil dere bygge drivstofftanken i, og hva er én ulempe ved valget?",
        svar: { fritekst: true, fasit: "<p>Et godt svar velger aluminium, rustfritt stål eller plast og nevner minst én ulempe: vekt, korrosjon, galvanisk korrosjon eller at plast er vanskelig å sveise i verkstedet.</p>" }
      }
    ],
    hint: [
      "Volum skaleres med 10³ = 1 000. 1 L = 10 dl. Masse = volum · tetthet.",
      "\\(400 : 1\\,000 = 0{,}4\\) L. Plata: \\(100 \\cdot 80 \\cdot 0{,}2 = 1\\,600\\) cm³."
    ],
    losning: "<p>\\(10 \\cdot 8 \\cdot 5 = 400\\) cm³ = 0,4 L = 4 dl. Faktoren er \\(10^3 = 1\\,000\\).</p><p>Masse: \\(1\\,600 \\cdot 2{,}7 = 4\\,320\\) g.</p>"
  },
  {
    id: "kanne",
    type: "verksted",
    merke: "V",
    niva: "middels",
    tittel: "Stemmer merket på kannen?",
    utstyr: "Tom kanne, skyvelære eller målebånd",
    hms: "Ikke mål en kanne med bensinrester. Ingen gnister og ingen åpen flamme. Skyll med vann hvis kannen har lukt.",
    tekst: "<p>En tom kanne er merket 10 L. Innvendig måler dere 25 cm × 16 cm × 25 cm. Hvor mange liter gir målene? Sammenlign med merket etterpå.</p>",
    steg: [{ verdi: 10000, enhet: "cm³" }],
    svar: { verdi: 10, enhet: "L" },
    hint: [
      "Gang de tre målene til cm³. Del på 1 000 for å få liter.",
      "\\(25 \\cdot 16 = 400\\). \\(400 \\cdot 25 = 10\\,000\\) cm³."
    ],
    losning: "<p>\\(25 \\cdot 16 \\cdot 25 = 10\\,000\\) cm³ = 10 L. Merket stemmer med en rett kanne.</p>"
  },
  {
    id: "rep-kasse",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tittel: "Verktøykasse",
    tekst: "<p>En verktøykasse er 20 cm × 10 cm × 5 cm. Hvor mange cm³ er det?</p>",
    svar: { verdi: 1000, enhet: "cm³" },
    hint: [
      "Volum = lengde · bredde · høyde.",
      "\\(20 \\cdot 10 \\cdot 5 = 1\\,000\\)."
    ],
    losning: "<p>\\(20 \\cdot 10 \\cdot 5 = 1\\,000\\) cm³ = 1 L.</p>"
  },
  {
    id: "rep-dm3",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tittel: "Fra cm³ til dm³",
    tekst: "<p>Et rommål er 4 000 cm³. Hvor mange dm³ er det?</p>",
    svar: { verdi: 4, enhet: "dm³" },
    hint: [
      "1 dm³ = 1 000 cm³. Del på 1 000.",
      "\\(4\\,000 : 1\\,000 = 4\\)."
    ],
    losning: "<p>\\(4\\,000 : 1\\,000 = 4\\) dm³.</p>"
  },
  {
    id: "eksamen-skala",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Lengde i 1:10",
    tekst: "<p>En modell lages i målestokk 1:10. Originalen er 80 cm lang. Hvor lang er modellen?</p>",
    svar: { verdi: 8, enhet: "cm" },
    hint: [
      "I 1:10 deler du lengden på 10.",
      "\\(80 : 10 = 8\\)."
    ],
    losning: "<p>\\(80 : 10 = 8\\) cm. Dette er bare lengden. Volumet hadde blitt 1/1000.</p>"
  }
]);
