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
  },
  {
    id: "iso-3",
    niva: "lett",
    tekst: "<p>ISO 2768-m. Basismål 3 mm. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>.</p>",
    steg: [{ verdi: 0.1, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.1, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 3.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 2.9, enhet: "mm", tol: 0 } }
    ],
    hint: ["3 mm er med i raden 0,5 til og med 3. Middels er ± 0,1 mm.", "\\(3 + 0{,}1\\) og \\(3 - 0{,}1\\)."],
    losning: "<p>± 0,1 mm. Øvre 3,1 mm. Nedre 2,9 mm. Meget grov har ingen verdi i denne raden.</p>"
  },
  {
    id: "iso-6",
    niva: "lett",
    tekst: "<p>ISO 2768-m. Basismål 6 mm.</p>",
    steg: [{ verdi: 0.1, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.1, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 6.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 5.9, enhet: "mm", tol: 0 } }
    ],
    hint: ["6 mm er med i raden over 3 til og med 6, ikke i raden som starter over 6.", "Middels ± 0,1 mm. Neste rad, over 6 til og med 30, har ± 0,2 mm."],
    losning: "<p>± 0,1 mm. Øvre 6,1 mm. Nedre 5,9 mm. 6,1 mm hadde ligget i neste rad.</p>"
  },
  {
    id: "iso-30-f",
    niva: "lett",
    tekst: "<p>ISO 2768-f. Basismål 30 mm.</p>",
    steg: [{ verdi: 0.1, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.1, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 30.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 29.9, enhet: "mm", tol: 0 } }
    ],
    hint: ["30 mm er med i raden over 6 til og med 30. Les kolonnen fin.", "Fin ± 0,1 mm. Middels i samme rad er ± 0,2 mm."],
    losning: "<p>± 0,1 mm. Øvre 30,1 mm. Nedre 29,9 mm.</p>"
  },
  {
    id: "iso-strek",
    niva: "lett",
    tittel: "Når tabellen er tom",
    tekst: "<p>Hva gjelder når cellen er tom, eller målet er utenfor tabellen?</p>",
    stegForSteg: false,
    deler: [
      { tekst: "2 mm, meget grov.", svar: { valg: ["± 0,5 mm", "± 0,1 mm", "Standarden oppgir ikke verdi"], riktig: 2 } },
      { tekst: "0,4 mm, middels.", svar: { valg: ["± 0,1 mm", "± 0,05 mm", "Tabellen starter på 0,5 mm. Toleransen må stå ved målet"], riktig: 2 } }
    ],
    hint: ["Se etter streken i raden 0,5 til og med 3, kolonnen meget grov.", "Mål under 0,5 mm har ingen rad. Da skal ± stå på tegningen."],
    losning: "<p>a) Meget grov har strek for 2 mm. b) 0,4 mm er under 0,5 mm. Toleransen må stå ved målet.</p>"
  },
  {
    id: "iso-120-grense",
    niva: "middels",
    tittel: "120 mm og 120,1 mm",
    tekst: "<p>ISO 2768-m. Sammenlign de to basismålene. Endepunktet er med i raden.</p>",
    steg: [{ verdi: 0.3, enhet: "mm" }, { verdi: 0.5, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik for 120 mm?", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål for 120 mm?", svar: { verdi: 120.3, enhet: "mm", tol: 0 } },
      { tekst: "Tillatt avvik for 120,1 mm?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål for 120,1 mm?", svar: { verdi: 120.6, enhet: "mm", tol: 0 } }
    ],
    hint: ["120 mm er med i raden som slutter på 120. 120,1 mm er i neste rad.", "Middels ± 0,3 mm og ± 0,5 mm. \\(120{,}1 + 0{,}5 = 120{,}6\\)."],
    losning: "<p>120 mm: ± 0,3 mm, øvre 120,3 mm. 120,1 mm: ± 0,5 mm, øvre 120,6 mm. En tidel flytter raden.</p>"
  },
  {
    id: "iso-80-c",
    niva: "middels",
    tekst: "<p>ISO 2768-c. Basismål 80 mm. Et emne måles til 80,8 mm.</p>",
    steg: [{ verdi: 0.8, enhet: "mm" }, { verdi: 80.8, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 0.8, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 80.8, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 79.2, enhet: "mm", tol: 0 } },
      { tekst: "Er 80,8 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["80 mm er over 30 til og med 120. Les kolonnen grov.", "Grov ± 0,8 mm. 80,8 er øvre grense."],
    losning: "<p>± 0,8 mm. Øvre 80,8 mm. Nedre 79,2 mm. 80,8 mm er på grensen og er godkjent. Middels i samme rad er ± 0,3 mm, og da hadde 80,8 vært ute.</p>"
  },
  {
    id: "iso-2000",
    niva: "middels",
    tekst: "<p>ISO 2768-m. Basismål 2000 mm.</p>",
    steg: [{ verdi: 1.2, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik?", svar: { verdi: 1.2, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 2001.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 1998.8, enhet: "mm", tol: 0 } }
    ],
    hint: ["2000 mm er med i raden over 1000 til og med 2000.", "Middels ± 1,2 mm. Neste rad, over 2000, har ± 2 mm."],
    losning: "<p>± 1,2 mm. Øvre 2001,2 mm. Nedre 1998,8 mm. 2000,1 mm hadde fått ± 2 mm.</p>"
  },
  {
    id: "iso-1800",
    niva: "vanskelig",
    tittel: "Stang på 1800 mm",
    tekst: "<p>En stang har basismål 1800 mm, ISO 2768-f. Mål: 1800,4 · 1799,5 · 1800,6 · 1799,4 mm. Middels i samme rad er ± 1,2 mm.</p>",
    steg: [{ verdi: 0.5, enhet: "mm" }, { verdi: 1799.5, enhet: "mm" }, { verdi: 1800.5, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik ved fin?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål ved fin?", svar: { verdi: 1799.5, enhet: "mm", tol: 0 } },
      { tekst: "Hvor mange av de fire er godkjent ved fin?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Hvor mange er godkjent ved middels?", svar: { verdi: 4, enhet: "stk" } }
    ],
    hint: ["1800 mm er over 1000 til og med 2000. Fin ± 0,5 mm. 1799,5 er på grensen.", "1800,6 er +0,6 mm og 1799,4 er −0,6 mm. Ved ± 1,2 mm er begge inne."],
    losning: "<p>Fin ± 0,5 mm, grenser 1799,5 og 1800,5. Inne: 1800,4 og 1799,5. Ute: 1800,6 og 1799,4. Middels ± 1,2 mm godkjenner alle fire.</p>"
  },
  {
    id: "eget-250",
    niva: "vanskelig",
    tittel: "Eget toleransetall vinner",
    tekst: "<p>En plate er 250 ± 0,3 mm. Tittelfeltet sier også ISO 2768-m. Et emne måles til 250,4 mm.</p>",
    steg: [{ verdi: 0.3, enhet: "mm" }, { verdi: 250.3, enhet: "mm" }],
    deler: [
      { tekst: "Hvilket avvik skal du bruke?", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 250.3, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 249.7, enhet: "mm", tol: 0 } },
      { tekst: "Er 250,4 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Eget ± på målet gjelder foran tabellen. 250 mm middels i tabellen er ± 0,5 mm, men det bruker du ikke her.", "\\(250 + 0{,}3 = 250{,}3\\). 250,4 er over."],
    losning: "<p>Avviket er ± 0,3 mm, ikke tabellens ± 0,5 mm. Grenser 249,7 og 250,3. Toleranse 0,6 mm. 250,4 mm er vrak.</p>"
  },
  {
    id: "kunde-600",
    type: "verksted",
    niva: "vanskelig",
    merke: "V/K",
    tittel: "Bjelken på 600 mm",
    utstyr: "Målebånd eller skyvelære, en bjelke nær 600 mm, og tabellen",
    hms: "Lange bjelker: løft i lag. Ingen kapp uten at læreren sier fra.",
    tekst: "<p>Basismål 600 mm, ISO 2768-m. Mål: 600,7 · 599,3 · 600,9 · 599,2 mm. Grov i samme rad er ± 2 mm. Hvilken klasse er den strengeste som likevel godkjenner alle fire?</p>",
    steg: [{ verdi: 0.8, enhet: "mm" }, { verdi: 599.2, enhet: "mm" }, { verdi: 600.8, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik ved middels?", svar: { verdi: 0.8, enhet: "mm", tol: 0 } },
      { tekst: "Hvor mange er godkjent ved middels?", svar: { verdi: 3, enhet: "stk" } },
      { tekst: "Hvor mange er godkjent ved grov?", svar: { verdi: 4, enhet: "stk" } },
      { tekst: "Strengeste klasse som godkjenner alle fire?", svar: { valg: ["Fin", "Middels", "Grov", "Meget grov"], riktig: 2, forklaring: "Fin er ± 0,3 mm og middels ± 0,8 mm. 600,9 er +0,9 mm og er ute der. Grov ± 2 mm godkjenner alle." } }
    ],
    hint: ["600 mm er over 400 til og med 1000. Middels ± 0,8 mm. 599,2 er på grensen.", "600,9 er +0,9 mm. Det er ute ved middels og inne ved ± 2 mm."],
    losning: "<p>Middels: grenser 599,2 og 600,8. Inne: 600,7 · 599,3 · 599,2. Ute: 600,9. Grov ± 2 mm godkjenner alle. Fin ± 0,3 mm gjør det ikke. Grov er den strengeste klassen som holder.</p>"
  },
  {
    id: "rep-600-m",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>600 mm er hvor mange meter?</p>",
    svar: { verdi: 0.6, enhet: "m" },
    hint: ["Del med 1000.", "\\(600 : 1000 = 0{,}6\\)."],
    losning: "<p>\\(600 : 1000 = 0{,}6\\) m.</p>"
  },
  {
    id: "eksamen-kanter",
    type: "eksamen",
    eksamensdel: "Del 2 (med tabellen fra teorisiden)",
    niva: "middels",
    tekst: "<p>Bruk ISO 2768-1. Skriv tillatt avvik uten ± der oppgaven ber om et tall.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "400 mm, fin", svar: { verdi: 0.2, enhet: "mm", tol: 0 } },
      { tekst: "1000 mm, grov", svar: { verdi: 2, enhet: "mm", tol: 0 } },
      { tekst: "2500 mm, fin. Hva gjelder?", svar: { valg: ["± 0,5 mm", "± 2 mm", "Standarden oppgir ikke verdi"], riktig: 2, forklaring: "Fin har strek i raden over 2000 til og med 4000. Da må toleransen stå ved målet." } }
    ],
    hint: ["400 er med i raden som slutter på 400. 1000 er med i raden som slutter på 1000.", "2500 mm er over 2000 til og med 4000. Fin har ingen verdi der. Grov i den raden er ± 4 mm, men spørsmålet gjelder fin."],
    losning: "<p>a) ± 0,2 mm. b) ± 2 mm, ikke ± 3 mm. c) Fin har strek. Toleransen må stå ved målet. Middels for 2500 mm er ± 2 mm, og meget grov er ± 8 mm.</p>"
  },
  {
    id: "iso-22",
    niva: "lett",
    tittel: "22 mm, middels",
    tekst: "<p>ISO 2768-m. Basismål 22 mm. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>, ikke en eldre DIN 7168-tabell.</p>",
    steg: [{ verdi: 0.2, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik (uten ±)?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 22.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 21.8, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } }
    ],
    hint: ["22 mm er over 6 til og med 30. Les kolonnen middels.", "Middels ± 0,2 mm. \\(22{,}2\\) og \\(21{,}8\\). Bredden er \\(2 \\cdot 0{,}2\\)."],
    losning: "<p>± 0,2 mm. Øvre 22,2 mm. Nedre 21,8 mm. Toleranse 0,4 mm.</p>"
  },
  {
    id: "iso-5-v",
    niva: "lett",
    tittel: "5 mm, meget grov",
    tekst: "<p>ISO 2768-v. Basismål 5 mm. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>.</p>",
    steg: [{ verdi: 0.5, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik (uten ±)?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 5.5, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 4.5, enhet: "mm", tol: 0 } }
    ],
    hint: ["5 mm er over 3 til og med 6, ikke i raden 0,5 til og med 3. Les kolonnen meget grov.", "Meget grov ± 0,5 mm. \\(5{,}5\\) og \\(4{,}5\\)."],
    losning: "<p>± 0,5 mm. Øvre 5,5 mm. Nedre 4,5 mm. I raden 0,5 til og med 3 har meget grov en strek. 5 mm har en verdi.</p>"
  },
  {
    id: "iso-350",
    niva: "middels",
    tittel: "350 mm, middels",
    tekst: "<p>ISO 2768-m. Basismål 350 mm. Bruk gjeldende ISO 2768-1. Den gamle inndelingen 120–315 og 315–1000 skal ikke brukes.</p>",
    steg: [{ verdi: 0.5, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik (uten ±)?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 350.5, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 349.5, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 1, enhet: "mm", tol: 0 } }
    ],
    hint: ["350 mm er over 120 til og med 400. Ikke raden som slutter på 1000.", "Middels ± 0,5 mm, ikke ± 0,8 mm. \\(350{,}5\\) og \\(349{,}5\\). Bredden er 1,0 mm."],
    losning: "<p>± 0,5 mm. Øvre 350,5 mm. Nedre 349,5 mm. Toleranse 1,0 mm. ± 0,8 mm er middels for mål over 400 til og med 1000 mm, og også et tall fra den gamle tabellen. Det gjelder ikke her.</p>"
  },
  {
    id: "iso-3200",
    niva: "middels",
    tittel: "3200 mm, meget grov",
    tekst: "<p>ISO 2768-v. Basismål 3200 mm. En eldre tabell gir ± 6 mm for mål rundt 2500–3200 mm. Den bruker vi ikke.</p>",
    steg: [{ verdi: 8, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik (uten ±)?", svar: { verdi: 8, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål?", svar: { verdi: 3208, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 3192, enhet: "mm", tol: 0 } },
      { tekst: "Hva gjelder for fin i samme rad?", svar: { valg: ["± 0,5 mm", "± 2 mm", "Standarden oppgir ikke verdi"], riktig: 2 } }
    ],
    hint: ["3200 mm er over 2000 til og med 4000. Les kolonnen meget grov.", "Meget grov ± 8 mm, ikke ± 6 mm og ikke ± 4 mm. Fin har strek i denne raden."],
    losning: "<p>± 8 mm. Øvre 3208 mm. Nedre 3192 mm. Fin har ingen verdi over 2000 mm. Middels i raden er ± 2 mm, og grov er ± 4 mm.</p>"
  },
  {
    id: "kjede-c",
    niva: "vanskelig",
    tittel: "Tre mål etter hverandre",
    tekst: "<p>En sveiset brakett har tre mål etter hverandre: 18 mm, 95 mm og 260 mm. De utgjør totallengden. Tittelfeltet sier ISO 2768-c, og ingen av målene har eget ±. Bruk tabellen på <a href=\"teori.html\">teorisiden</a>.</p>",
    steg: [{ verdi: 18.5, enhet: "mm" }, { verdi: 95.8, enhet: "mm" }, { verdi: 261.2, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik for 18 mm (uten ±)?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Tillatt avvik for 95 mm (uten ±)?", svar: { verdi: 0.8, enhet: "mm", tol: 0 } },
      { tekst: "Tillatt avvik for 260 mm (uten ±)?", svar: { verdi: 1.2, enhet: "mm", tol: 0 } },
      { tekst: "Største mulige totallengde?", svar: { verdi: 375.5, enhet: "mm", tol: 0 } }
    ],
    hint: ["Hvert mål har sin rad. Grov: over 6 til 30 er ± 0,5, over 30 til 120 er ± 0,8, over 120 til 400 er ± 1,2.", "Maks: \\(18{,}5 + 95{,}8 + 261{,}2\\)."],
    losning: "<p>18 mm: ± 0,5 mm. 95 mm: ± 0,8 mm. 260 mm: ± 1,2 mm. Største totallengde \\(18{,}5 + 95{,}8 + 261{,}2 = 375{,}5\\) mm. Minste er 370,5 mm.</p>"
  },
  {
    id: "sara-aksling",
    niva: "vanskelig",
    tittel: "Akslingen til Sara",
    tekst: "<p>Sara dreier en aksling. Tegningen har ikke ± på diameterne. Tittelfeltet sier ISO 2768-m. Minste diameter skal være Ø42. Største diameter skal være Ø110. Hun måler den største ferdig til 110,4 mm.</p>",
    steg: [{ verdi: 0.3, enhet: "mm" }, { verdi: 41.7, enhet: "mm" }, { verdi: 109.7, enhet: "mm" }],
    deler: [
      { tekst: "Tillatt avvik for Ø42 (uten ±)?", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål for Ø42?", svar: { verdi: 41.7, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål for Ø110?", svar: { verdi: 110.3, enhet: "mm", tol: 0 } },
      { tekst: "Kan hun godkjenne 110,4 mm?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Både 42 mm og 110 mm er over 30 til og med 120. Middels er ± 0,3 mm i den raden.", "\\(42 - 0{,}3 = 41{,}7\\). \\(110 + 0{,}3 = 110{,}3\\). 110,4 er 0,1 mm over."],
    losning: "<p>Begge diameterne har ± 0,3 mm. Ø42: 41,7 mm til 42,3 mm. Ø110: 109,7 mm til 110,3 mm. 110,4 mm er vrak. Neste rad, over 120 mm, hadde hatt ± 0,5 mm, men 110 mm er ikke der.</p>"
  }
]);
