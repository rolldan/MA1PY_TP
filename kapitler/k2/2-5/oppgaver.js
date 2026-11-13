Bok.oppgaver([
  {
    id: "femti",
    niva: "lett",
    tekst: "<p>Tegningen sier 50 ± 0,1 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 50.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 49.9, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } }
    ],
    hint: ["Legg til og trekk fra 0,1.", "Toleransen er øvre minus nedre, altså \\(2 \\cdot 0{,}1\\)."],
    losning: "<p>Øvre 50,1 mm. Nedre 49,9 mm. \\(T = 0{,}2\\) mm.</p>"
  },
  {
    id: "bolter-90",
    niva: "lett",
    tekst: "<p>Bolter skal være 90,0 ± 0,3 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 90.3, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 89.7, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.6, enhet: "mm", tol: 0 } }
    ],
    hint: ["± 0,3 mm begge veier.", "\\(T = 0{,}6\\) mm, ikke 0,3 mm."],
    losning: "<p>Øvre 90,3 mm. Nedre 89,7 mm. Toleranse 0,6 mm.</p>"
  },
  {
    id: "flens",
    niva: "middels",
    tekst: "<p>En flens er gitt som 30 +0,20 / 0 mm. Nedre avvik er 0.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 30.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 30, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } }
    ],
    hint: ["Nedre avvik 0 betyr at minste mål er basismålet.", "\\(30{,}20 - 30{,}00 = 0{,}20\\)."],
    losning: "<p>Øvre 30,20 mm. Nedre 30,00 mm. Toleranse 0,20 mm. 29,80 mm er vrak.</p>"
  },
  {
    id: "tapp-igjen",
    niva: "middels",
    tekst: "<p>Ø20 med avvik −0,02 og −0,05 mm. Et målt emne er 19,97 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 19.98, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 19.95, enhet: "mm", tol: 0 } },
      { tekst: "Er 19,97 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["Begge avvikene er negative. Trekk dem fra 20.", "19,95 ≤ 19,97 ≤ 19,98, så emnet er inne."],
    losning: "<p>Øvre 19,98 mm. Nedre 19,95 mm. 19,97 mm ligger imellom og er godkjent.</p>"
  },
  {
    id: "peder",
    niva: "vanskelig",
    tittel: "Peder sorterer",
    tekst: "<p>Hullavstand 72 ± 0,3 mm. Mål: 72,1 · 71,9 · 71,8 · 72,5 · 72,2 · 72,1 · 71,3 mm.</p>",
    steg: [{ verdi: 72.3, enhet: "mm" }, { verdi: 71.7, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 72.3, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 71.7, enhet: "mm", tol: 0 } },
      { tekst: "Hvor mange er godkjent?", svar: { verdi: 5, enhet: "stk" } },
      { tekst: "Hvor mange er vrak?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Vrakprosent, avrundet til én desimal.", svar: { verdi: 28.6, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Grensene er 71,7 og 72,3. På grensen er godkjent.", "Ute: 72,5 og 71,3. Det er 2 av 7. \\(2 : 7 \\cdot 100 \\approx 28{,}6\\)."],
    losning: "<p>Godkjent: 72,1 · 71,9 · 71,8 · 72,2 · 72,1 (5 stk). Vrak: 72,5 og 71,3 (2 stk). \\(2 : 7 \\cdot 100\\% = 28{,}57\\ldots\\% \\approx 28{,}6\\%\\).</p>"
  },
  {
    id: "sorter-fem",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Fem emner mot 72 ± 0,3",
    utstyr: "Skyvelære og fem emner, eller målene i oppgaven",
    hms: "Grader på kappede emner: bruk hansker hvis kanten er skarp. Ingen maskin i gang.",
    tekst: "<p>Krav 72 ± 0,3 mm. Mål: 71,7 · 72,3 · 72,4 · 71,6 · 72,0 mm. Sorter, og gjør det samme med ekte emner etterpå.</p>",
    deler: [
      { tekst: "Hvor mange er godkjent? Husk at grensen er godkjent.", svar: { verdi: 3, enhet: "stk" } },
      { tekst: "Hvor mange er vrak?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Vrakprosent?", svar: { verdi: 40, enhet: "%", tol: 0 } }
    ],
    hint: ["Nedre 71,7 og øvre 72,3 er inne. 72,4 og 71,6 er ute.", "2 av 5 er \\(2 : 5 \\cdot 100 = 40\\)."],
    losning: "<p>Godkjent: 71,7 · 72,3 · 72,0. Vrak: 72,4 og 71,6. Vrakprosent 40 %.</p>"
  },
  {
    id: "repetisjon-komma",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Regn ut \\(3{,}6 \\cdot 100\\).</p>",
    svar: { verdi: 360 },
    hint: ["Gange med 100: kommaet to plasser til høyre.", "3,6 blir 360."],
    losning: "<p>\\(3{,}6 \\cdot 100 = 360\\).</p>"
  },
  {
    id: "eksamen-usym",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et mål er 45 +0,1 / −0,3 mm. Et emne måles til 44,7 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 45.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 44.7, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } },
      { tekst: "Er 44,7 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["\\(45 + 0{,}1\\) og \\(45 - 0{,}3\\).", "\\(T = 45{,}1 - 44{,}7 = 0{,}4\\). 44,7 er nedre grense."],
    losning: "<p>Øvre 45,1 mm. Nedre 44,7 mm. Toleranse 0,4 mm. 44,7 mm er på grensen og er godkjent.</p>"
  },
  {
    id: "seksti",
    niva: "lett",
    tekst: "<p>Tegningen sier 60 ± 0,2 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 60.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 59.8, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } }
    ],
    hint: ["Legg til og trekk fra 0,2.", "Toleransen er \\(2 \\cdot 0{,}2 = 0{,}4\\) mm."],
    losning: "<p>Øvre 60,2 mm. Nedre 59,8 mm. \\(T = 0{,}4\\) mm.</p>"
  },
  {
    id: "flens-18",
    niva: "lett",
    tekst: "<p>En flens er gitt som 18 +0,2 / 0 mm. Nedre avvik er 0.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 18.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 18, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } }
    ],
    hint: ["Nedre avvik 0 betyr at minste mål er basismålet.", "\\(18{,}2 - 18{,}0 = 0{,}2\\)."],
    losning: "<p>Øvre 18,2 mm. Nedre 18,0 mm. Toleranse 0,2 mm. 17,8 mm er vrak.</p>"
  },
  {
    id: "sjekk-25",
    niva: "lett",
    tittel: "Inne eller ute",
    tekst: "<p>Kravet er 25 ± 0,2 mm. På grensen er godkjent.</p>",
    steg: [{ verdi: 25.2, enhet: "mm" }, { verdi: 24.8, enhet: "mm" }],
    deler: [
      { tekst: "Toleranse?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } },
      { tekst: "Er 25,2 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } },
      { tekst: "Er 24,7 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Grensene er 24,8 mm og 25,2 mm.", "25,2 ligger på øvre grense. 24,7 er under 24,8."],
    losning: "<p>\\(T = 0{,}4\\) mm. 25,2 mm er godkjent. 24,7 mm er vrak.</p>"
  },
  {
    id: "plate-usym",
    niva: "middels",
    tekst: "<p>En plate er 18 +0,2 / −0,1 mm. Et emne måles til 17,9 mm.</p>",
    steg: [{ verdi: 18.2, enhet: "mm" }, { verdi: 17.9, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 18.2, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 17.9, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.3, enhet: "mm", tol: 0 } },
      { tekst: "Er 17,9 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["\\(18 + 0{,}2\\) og \\(18 - 0{,}1\\).", "\\(T = 18{,}2 - 17{,}9 = 0{,}3\\). 17,9 er nedre grense."],
    losning: "<p>Øvre 18,2 mm. Nedre 17,9 mm. Toleranse 0,3 mm. 17,9 mm er på grensen og er godkjent.</p>"
  },
  {
    id: "tapp-16",
    niva: "middels",
    tekst: "<p>Ø16 med avvik −0,02 og −0,07 mm. Et målt emne er 15,99 mm.</p>",
    steg: [{ verdi: 15.98, enhet: "mm" }, { verdi: 15.93, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 15.98, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 15.93, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.05, enhet: "mm", tol: 0 } },
      { tekst: "Er 15,99 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Begge avvikene er negative. Trekk dem fra 16.", "Øvre er 15,98 mm. 15,99 er over øvre grense."],
    losning: "<p>Øvre 15,98 mm. Nedre 15,93 mm. \\(T = 0{,}05\\) mm. 15,99 mm er for stor og er vrak.</p>"
  },
  {
    id: "fem-45",
    niva: "middels",
    tittel: "Fem emner på 45 mm",
    tekst: "<p>Krav 45 ± 0,2 mm. Mål: 45,0 · 44,8 · 45,3 · 44,7 · 45,2 mm. På grensen er godkjent.</p>",
    steg: [{ verdi: 45.2, enhet: "mm" }, { verdi: 44.8, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange er godkjent?", svar: { verdi: 3, enhet: "stk" } },
      { tekst: "Hvor mange er vrak?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Vrakprosent?", svar: { verdi: 40, enhet: "%", tol: 0 } }
    ],
    hint: ["Grensene er 44,8 og 45,2. 45,3 og 44,7 er ute.", "2 av 5 er \\(2 : 5 \\cdot 100 = 40\\)."],
    losning: "<p>Godkjent: 45,0 · 44,8 · 45,2. Vrak: 45,3 og 44,7. Vrakprosent 40 %.</p>"
  },
  {
    id: "sju-100",
    niva: "vanskelig",
    tittel: "Sju flenser",
    tekst: "<p>Krav 100 +0,4 / −0,2 mm. Mål: 100,4 · 99,8 · 100,5 · 99,7 · 100,0 · 100,4 · 99,9 mm.</p>",
    steg: [{ verdi: 100.4, enhet: "mm" }, { verdi: 99.8, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 100.4, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 99.8, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.6, enhet: "mm", tol: 0 } },
      { tekst: "Hvor mange er godkjent?", svar: { verdi: 5, enhet: "stk" } },
      { tekst: "Vrakprosent, avrundet til én desimal.", svar: { verdi: 28.6, enhet: "%", tol: 0.05 } }
    ],
    hint: ["\\(100 + 0{,}4\\) og \\(100 - 0{,}2\\). På grensen er godkjent.", "Ute: 100,5 og 99,7. Det er 2 av 7. \\(2 : 7 \\cdot 100 \\approx 28{,}6\\)."],
    losning: "<p>Øvre 100,4 mm. Nedre 99,8 mm. \\(T = 0{,}6\\) mm. Godkjent: 100,4 · 99,8 · 100,0 · 100,4 · 99,9 (5 stk). Vrak: 100,5 og 99,7. \\(2 : 7 \\cdot 100\\% = 28{,}57\\ldots\\% \\approx 28{,}6\\%\\).</p>"
  },
  {
    id: "to-krav-del",
    niva: "vanskelig",
    tittel: "To mål på samme del",
    tekst: "<p>En brakett har to krav. Tykkelsen er 12 ± 0,1 mm og måles til 11,92 mm. Hullavstanden er 48 +0,3 / 0 mm og måles til 48,35 mm. Delen er godkjent bare når begge målene er inne.</p>",
    steg: [{ verdi: 12.1, enhet: "mm" }, { verdi: 11.9, enhet: "mm" }, { verdi: 48.3, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål for tykkelsen?", svar: { verdi: 12.1, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål for tykkelsen?", svar: { verdi: 11.9, enhet: "mm", tol: 0 } },
      { tekst: "Øvre grensemål for hullavstanden?", svar: { verdi: 48.3, enhet: "mm", tol: 0 } },
      { tekst: "Er braketten godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Tykkelse: 11,9 til 12,1. Hullavstand: 48,0 til 48,3.", "11,92 er inne. 48,35 er over 48,3. Ett mål ute er nok til vrak."],
    losning: "<p>Tykkelse 11,92 mm er inne. Hullavstand 48,35 mm er over 48,3 mm. Braketten er vrak.</p>"
  },
  {
    id: "sorter-36",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Seks emner mot 36 ± 0,2",
    utstyr: "Skyvelære og seks emner, eller målene i oppgaven",
    hms: "Grader på kappede emner: bruk hansker hvis kanten er skarp. Ingen maskin i gang.",
    tekst: "<p>Krav 36 ± 0,2 mm. Mål: 36,2 · 35,8 · 36,3 · 35,7 · 36,0 · 36,1 mm. Sorter, og gjør det samme med ekte emner etterpå. Avrund vrakprosenten til én desimal.</p>",
    steg: [{ verdi: 36.2, enhet: "mm" }, { verdi: 35.8, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange er godkjent? Husk at grensen er godkjent.", svar: { verdi: 4, enhet: "stk" } },
      { tekst: "Hvor mange er vrak?", svar: { verdi: 2, enhet: "stk" } },
      { tekst: "Vrakprosent?", svar: { verdi: 33.3, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Nedre 35,8 og øvre 36,2 er inne. 36,3 og 35,7 er ute.", "2 av 6 er \\(2 : 6 \\cdot 100 \\approx 33{,}3\\)."],
    losning: "<p>Godkjent: 36,2 · 35,8 · 36,0 · 36,1. Vrak: 36,3 og 35,7. \\(2 : 6 \\cdot 100\\% = 33{,}33\\ldots\\% \\approx 33{,}3\\%\\).</p>"
  },
  {
    id: "rep-gange-hundre",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Regn ut \\(2{,}5 \\cdot 100\\).</p>",
    svar: { verdi: 250 },
    hint: ["Gange med 100: kommaet to plasser til høyre.", "2,5 blir 250."],
    losning: "<p>\\(2{,}5 \\cdot 100 = 250\\).</p>"
  },
  {
    id: "eksamen-28",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et mål er 28 +0,15 / −0,05 mm. Et emne måles til 27,95 mm.</p>",
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 28.15, enhet: "mm", tol: 0 } },
      { tekst: "Nedre grensemål?", svar: { verdi: 27.95, enhet: "mm", tol: 0 } },
      { tekst: "Toleranse?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } },
      { tekst: "Er 27,95 mm godkjent?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["\\(28 + 0{,}15\\) og \\(28 - 0{,}05\\).", "\\(T = 28{,}15 - 27{,}95 = 0{,}20\\). 27,95 er nedre grense."],
    losning: "<p>Øvre 28,15 mm. Nedre 27,95 mm. Toleranse 0,20 mm. 27,95 mm er på grensen og er godkjent.</p>"
  }
]);
