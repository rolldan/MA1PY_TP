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
    hint: ["Grenseene er 71,7 og 72,3. På grensen er godkjent.", "Ute: 72,5 og 71,3. Det er 2 av 7. \\(2 : 7 \\cdot 100 \\approx 28{,}6\\)."],
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
  }
]);
