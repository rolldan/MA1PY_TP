Bok.oppgaver([
  {
    id: "velg-verktoy",
    niva: "lett",
    tittel: "Hvilket verktøy?",
    tekst: "<p>Velg verktøyet som passer jobben.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Kapp en stang på 2,4 m til en ramme. Kravet er hele millimeter.", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 0 } },
      { tekst: "Kontroller en lagerbane på Ø25 mm med toleranse noen hundredeler.", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 2 } }
    ],
    hint: ["Langt og grovt: målebånd. Kort og fint: mikrometer.", "Et vanlig skyvelære rekker ikke 2,4 m, og ± 1 mm er for grovt til en lagerbane."],
    losning: "<p>a) Målebånd, ± 1 mm, og det rekker. b) Mikrometer, ± 0,001 mm.</p>"
  },
  {
    id: "grenser",
    niva: "lett",
    tekst: "<p>Skriv usikkerheten vi bruker for verktøyene i dette kapitlet.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Målebånd", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Skyvelære", svar: { verdi: 0.02, enhet: "mm", tol: 0 } },
      { tekst: "Mikrometer", svar: { verdi: 0.001, enhet: "mm", tol: 0 } }
    ],
    hint: ["Bånd i hele millimeter, skyvelære i hundredeler, mikrometer i tusendeler.", "± 1 mm, ± 0,02 mm og ± 0,001 mm. Skriv tallet uten fortegn."],
    losning: "<p>Målebånd ± 1 mm. Skyvelære ± 0,02 mm. Mikrometer ± 0,001 mm.</p>"
  },
  {
    id: "tidel",
    niva: "middels",
    tekst: "<p>En tapp skal være 40 ± 0,05 mm. Bruk regelen: usikkerheten bør være høyst 1/10 av toleransebredden.</p>",
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 0.1, enhet: "mm" } },
      { tekst: "Hvor stor bør usikkerheten høyst være?", svar: { verdi: 0.01, enhet: "mm" } },
      { tekst: "Hvilket verktøy holder regelen?", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 2 } }
    ],
    hint: ["± 0,05 mm betyr fra 39,95 til 40,05. Bredden er 0,10 mm.", "\\(0{,}10 : 10 = 0{,}01\\) mm. Skyvelæret har ± 0,02 mm, som er mer enn 0,01 mm."],
    losning: "<p>Bredde \\(0{,}10\\) mm. 1/10 er \\(0{,}01\\) mm. Mikrometeret (± 0,001 mm) holder. Skyvelæret gjør det ikke.</p>"
  },
  {
    id: "tapp-20",
    niva: "middels",
    tittel: "Tapp Ø20",
    tekst: "<p>Tegningen sier Ø20 med avvik −0,02 / −0,05 mm.</p>",
    steg: [{ verdi: 19.98, enhet: "mm" }, { verdi: 19.95, enhet: "mm" }],
    deler: [
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 19.98, enhet: "mm", tol: 0 } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 19.95, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor er toleransen?", svar: { verdi: 0.03, enhet: "mm", tol: 0 } },
      { tekst: "Kan du godkjenne tappen med skyvelære (± 0,02 mm)?", svar: { valg: ["Ja, 0,02 mm er mindre enn 0,03 mm", "Nei, usikkerheten er nesten like stor som toleransen", "Ja, målebåndet er finere"], riktig: 1 } }
    ],
    hint: ["Legg avviket til 20. Begge avvikene er negative, så tappen er mindre enn 20.", "\\(20 - 0{,}02 = 19{,}98\\) og \\(20 - 0{,}05 = 19{,}95\\). Differansen er 0,03 mm."],
    losning: "<p>Øvre 19,98 mm, nedre 19,95 mm, toleranse 0,03 mm. Skyvelær ± 0,02 mm er for grovt til å være sikker nær grensen.</p>"
  },
  {
    id: "for-lang",
    niva: "vanskelig",
    tekst: "<p>En sveiset sville skal være 400 ± 0,5 mm. Vanlig skyvelære rekker 150 mm. Målebåndet har usikkerhet ± 1 mm.</p>",
    steg: [{ verdi: 1, enhet: "mm" }, { verdi: 0.1, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor bør usikkerheten høyst være (1/10-regelen)?", svar: { verdi: 0.1, enhet: "mm" } },
      { tekst: "Hva er riktig vurdering?", svar: { valg: ["Målebåndet er fint nok", "Skyvelæret på 150 mm rekker, og er fint nok", "Målebåndet er for grovt, og vanlig skyvelære er for kort"], riktig: 2 } }
    ],
    hint: ["± 0,5 mm gir bredde 1,0 mm. Del på 10.", "± 1 mm er større enn 0,1 mm. 400 mm er lengre enn 150 mm."],
    losning: "<p>Bredde 1,0 mm, 1/10 er 0,1 mm. Målebånd ± 1 mm er for grovt. Et skyvelære på 150 mm rekker ikke 400 mm. Du trenger et verktøy som både rekker og er fint nok, for eksempel et lengre skyvelære eller en høydemåler.</p>"
  },
  {
    id: "samme-aksel",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Samme aksel, tre tall",
    utstyr: "Målebånd, skyvelære, mikrometer og én aksel",
    hms: "Mikrometeret skal ikke klemmes hardt. Ingen roterende maskin. Verktøy tilbake i etui.",
    tekst: "<p>Laget måler samme aksel: målebånd 41 mm, skyvelære 40,02 mm, mikrometer 40,018 mm. Regn ut, og mål deretter en aksel i verkstedet.</p>",
    steg: [{ verdi: 40.018, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange millimeter skiller målebånd og mikrometer? Avrund til to desimaler.", svar: { verdi: 0.98, enhet: "mm", tol: 0.005 } },
      { tekst: "Er 41 mm innenfor båndets usikkerhet på ± 1 mm, når mikrometeret sier 40,018 mm?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["Trekk det fineste målet fra båndmålet.", "\\(41 - 40{,}018 = 0{,}982\\), som avrundes til 0,98 mm. Det er mindre enn 1 mm."],
    losning: "<p>\\(41 - 40{,}018 = 0{,}982 \\approx 0{,}98\\) mm. Det er innenfor ± 1 mm. Båndet er ærlig, men for grovt til en finpasning.</p>"
  },
  {
    id: "repetisjon-overslag",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>23 planker koster 98 kr per stykk. Hva er et greit overslag på totalprisen?</p>",
    svar: { verdi: 2000, enhet: "kr", tol: 200 },
    hint: ["Rund 23 til 20 og 98 til 100.", "\\(20 \\cdot 100 = 2000\\) kr. Nøyaktig pris er 2254 kr, så 2000 er et overslag."],
    losning: "<p>\\(20 \\cdot 100 = 2000\\) kr. Nøyaktig: \\(23 \\cdot 98 = 2254\\) kr.</p>"
  },
  {
    id: "eksamen-85",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En plate skal være 85 ± 0,2 mm. Du har skyvelære med usikkerhet ± 0,02 mm.</p>",
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 0.4, enhet: "mm", tol: 0 } },
      { tekst: "Hva sier 1/10-regelen om skyvelæret?", svar: { valg: ["For grovt", "Fint nok", "Bare mikrometer kan brukes"], riktig: 1 } }
    ],
    hint: ["± 0,2 mm gir bredde 0,4 mm.", "\\(0{,}4 : 10 = 0{,}04\\) mm. Skyvelærets 0,02 mm er mindre enn 0,04 mm."],
    losning: "<p>Bredde \\(0{,}40\\) mm. 1/10 er \\(0{,}04\\) mm. ± 0,02 mm er innenfor, så skyvelæret er fint nok til dette kravet.</p>"
  }
]);
