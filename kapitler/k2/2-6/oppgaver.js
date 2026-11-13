Bok.oppgaver([
  {
    id: "femten",
    niva: "lett",
    tekst: "<p>ISO 2768-m. Basismål 15 mm. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>.</p>",
    steg: [{ verdi: 0.2, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik (skriv tallet uten ±)?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 15.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 14.8, enhet: "mm", tol: 0 } }
    ],
    hint: ["15 mm er over 6 til og med 30. Middels er ± 0,2 mm.", "\\(15 + 0{,}2\\) og \\(15 - 0{,}2\\)."],
    losning: "<p>± 0,2 mm. Øvre 15,2 mm. Nedre 14,8 mm.</p>"
  },
  {
    id: "sytti",
    niva: "lett",
    tekst: "<p>ISO 2768-m. Basismål 70 mm.</p>",
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 70.3, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 69.7, enhet: "mm", tol: 0 } }
    ],
    hint: ["70 mm er over 30 til og med 120.", "Middels ± 0,3 mm. \\(70{,}3\\) og \\(69{,}7\\)."],
    losning: "<p>± 0,3 mm. Øvre 70,3 mm. Nedre 69,7 mm.</p>"
  },
  {
    id: "ett-tre-fem",
    niva: "middels",
    tekst: "<p>ISO 2768-m. Basismål 135 mm.</p>",
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 135.5, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse (bredden)?", svar: { verdi: 1, enhet: "mm", tol: 0 } }
    ],
    hint: ["135 mm er over 120 til og med 400. Middels ± 0,5 mm.", "Bredden er \\(2 \\cdot 0{,}5 = 1{,}0\\) mm."],
    losning: "<p>± 0,5 mm. Øvre 135,5 mm. Nedre 134,5 mm. Toleranse 1,0 mm.</p>"
  },
  {
    id: "tolv-femti",
    niva: "middels",
    tekst: "<p>ISO 2768-m. Basismål 1250 mm.</p>",
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 1.2, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 1251.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 1248.8, enhet: "mm", tol: 0 } }
    ],
    hint: ["1250 mm er over 1000 til og med 2000, ikke i raden som slutter på 1000.", "Middels ± 1,2 mm. Ikke ± 0,8 mm."],
    losning: "<p>± 1,2 mm. Øvre 1251,2 mm. Nedre 1248,8 mm.</p>"
  },
  {
    id: "mathias",
    niva: "vanskelig",
    tittel: "Stengene til Mathias",
    tekst: "<p>Stenger på 1220 mm, ISO 2768-m. Mål: 1221 · 1219 · 1218,8 · 1221,3 mm. Grov (c) i samme rad er ± 3 mm.</p>",
    steg: [{ verdi: 1.2, enhet: "mm" }, { verdi: 1218.8, enhet: "mm" }, { verdi: 1221.2, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik ved middels?", svar: { verdi: 1.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål ved middels?", svar: { verdi: 1218.8, enhet: "mm", tol: 0 } },
      { tekst: "Hvor mange av de fire er godkjent ved middels?", svar: { verdi: 3, enhet: "stk" } },
      { tekst: "Hvor mange er godkjent ved grov?", svar: { verdi: 4, enhet: "stk" } }
    ],
    hint: ["1220 mm: over 1000 til og med 2000. Middels ± 1,2 mm. 1218,8 er på grensen.", "1221,3 er 1,3 mm over 1220, altså ute ved middels. Ved ± 3 mm er 1,3 mm inne."],
    losning: "<p>Middels ± 1,2 mm, grenser 1218,8 og 1221,2. Inne: 1221, 1219 og 1218,8. Ute: 1221,3. Grov ± 3 mm godkjenner alle fire.</p>"
  },
  {
    id: "kunde",
    type: "verksted",
    niva: "vanskelig",
    merke: "V/K",
    tittel: "Hva trenger kunden?",
    utstyr: "Stang eller plate nær 1220 mm, målebånd og tabellen",
    hms: "Lange stenger: løft i lag, ikke alene. Ingen kapp uten at læreren sier fra.",
    tekst: "<p>Samme fire mål som Mathias: 1221 · 1219 · 1218,8 · 1221,3 mm på basismål 1220 mm. Hvilken klasse er den strengeste som likevel godkjenner alle fire?</p>",
    stegForSteg: false,
    svar: { valg: ["Fin", "Middels", "Grov", "Meget grov"], riktig: 2, forklaring: "Fin og middels vraker 1221,3. Grov (± 3 mm) godkjenner alle. Meget grov gjør det også, men er slakkere." },
    hint: ["Regn avvikene: +1,0 · −1,0 · −1,2 · +1,3 mm.", "Middels tåler 1,2 mm. Grov i raden over 1000 til og med 2000 tåler 3 mm."],
    losning: "<p>Største avvik er 1,3 mm. Fin (± 0,5) og middels (± 1,2) er for strenge. Grov (± 3) er den strengeste klassen som godkjenner alle. Kunden må bekrefte at grov er godt nok.</p>"
  },
  {
    id: "repetisjon-1220",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>1220 mm er hvor mange meter?</p>",
    svar: { verdi: 1.22, enhet: "m" },
    hint: ["Del med 1000.", "\\(1220 : 1000 = 1{,}22\\)."],
    losning: "<p>\\(1220 : 1000 = 1{,}22\\) m.</p>"
  },
  {
    id: "eksamen-rader",
    type: "eksamen",
    eksamensdel: "Del 2 (med tabellen fra teorisiden)",
    niva: "middels",
    tekst: "<p>Bruk ISO 2768-1. Skriv tillatt avvik uten ±.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "120 mm, middels", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "1000 mm, middels", svar: { verdi: 0.8, enhet: "mm", tol: 0 } },
      { tekst: "2500 mm, meget grov", svar: { verdi: 8, enhet: "mm", tol: 0 } }
    ],
    hint: ["120 er med i raden som slutter på 120. 1000 er med i raden som slutter på 1000.", "2500 mm er over 2000 til og med 4000. Meget grov er ± 8 mm, ikke ± 6."],
    losning: "<p>a) ± 0,3 mm (ikke ± 0,5). b) ± 0,8 mm. c) ± 8 mm. Fin har ingen verdi for 2500 mm.</p>"
  }
]);
