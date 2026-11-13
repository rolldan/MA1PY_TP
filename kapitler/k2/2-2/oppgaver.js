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
  },
  {
    id: "velg-tre",
    niva: "lett",
    tittel: "Tre jobber",
    tekst: "<p>Velg det groveste verktøyet som holder jobben.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Kapp et rør på 1800 mm til en grind. Hele millimeter holder.", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 0 } },
      { tekst: "Kontroller en plate på 48 ± 0,2 mm.", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 1 } },
      { tekst: "Kontroller en lagerinnerring på Ø12 mm. Toleransen er noen hundredeler.", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 2 } }
    ],
    hint: ["Langt og grovt: målebånd. Vanlig maskinering: skyvelære. Finpasning: mikrometer.", "1800 mm er for langt for et vanlig skyvelære. Noen hundredeler krever mikrometer."],
    losning: "<p>a) Målebånd, ± 1 mm, og det rekker. b) Skyvelære. Bredden er 0,4 mm, og 1/10 er 0,04 mm. Skyvelær ± 0,02 mm holder. Mikrometeret holder også, men er finere enn du trenger. c) Mikrometer. Skyvelær ± 0,02 mm er for grovt til noen hundredeler.</p>"
  },
  {
    id: "linjal-usikker",
    niva: "lett",
    tittel: "Hvor fin er avlesingen?",
    tekst: "<p>Skriv usikkerheten uten fortegn. Millimeterlinjalen vurderes som en halv delestrek. De andre tallene er verkstedets regler i dette kapitlet.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Millimeterlinjal", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Målebånd", svar: { verdi: 1, enhet: "mm", tol: 0 } },
      { tekst: "Skyvelære", svar: { verdi: 0.02, enhet: "mm", tol: 0 } }
    ],
    hint: ["En halv millimeterstrek er 0,5 mm. Båndet i verkstedet er grovere på grunn av krok og sleng.", "Linjal ± 0,5 mm. Bånd ± 1 mm. Skyvelære ± 0,02 mm."],
    losning: "<p>Linjal ± 0,5 mm. Målebånd ± 1 mm. Skyvelære ± 0,02 mm.</p>"
  },
  {
    id: "rekker-den",
    niva: "lett",
    tittel: "Rekker skyvelæret?",
    tekst: "<p>Vanlig skyvelære rekker 150 mm. Svar ja eller nei.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "En plate er 95 mm.", svar: { valg: ["Ja", "Nei"], riktig: 0 } },
      { tekst: "En sveiset sville er 420 mm.", svar: { valg: ["Ja", "Nei"], riktig: 1 } }
    ],
    hint: ["Sammenlign lengden med 150 mm.", "95 er under 150. 420 er over 150."],
    losning: "<p>a) Ja. b) Nei. Et verktøy som er fint nok, må også rekke målet.</p>"
  },
  {
    id: "tidel-120",
    niva: "middels",
    tittel: "Plate 120 ± 0,15",
    tekst: "<p>En plate skal være 120 ± 0,15 mm. Bruk 1/10-regelen.</p>",
    steg: [{ verdi: 0.3, enhet: "mm" }, { verdi: 0.03, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 0.3, enhet: "mm" } },
      { tekst: "Hvor stor bør usikkerheten høyst være?", svar: { verdi: 0.03, enhet: "mm" } },
      { tekst: "Holder skyvelære ± 0,02 mm regelen?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["± 0,15 mm gir bredde \\(2 \\cdot 0{,}15\\).", "\\(0{,}30 : 10 = 0{,}03\\) mm. 0,02 mm er mindre enn 0,03 mm."],
    losning: "<p>Bredde 0,30 mm. 1/10 er 0,03 mm. Skyvelæret holder. Målebånd ± 1 mm gjør det ikke.</p>"
  },
  {
    id: "boring-tol",
    niva: "middels",
    tittel: "Boring Ø12",
    tekst: "<p>En boring er Ø12 med avvik +0,018 / 0 mm. Bruk 1/10-regelen.</p>",
    steg: [{ verdi: 12.018, enhet: "mm" }, { verdi: 0.018, enhet: "mm" }],
    deler: [
      { tekst: "Øvre grensemål?", svar: { verdi: 12.018, enhet: "mm", tol: 0 } },
      { tekst: "Toleransebredde?", svar: { verdi: 0.018, enhet: "mm" } },
      { tekst: "Hvor stor bør usikkerheten høyst være?", svar: { verdi: 0.0018, enhet: "mm" } },
      { tekst: "Hvilket verktøy holder regelen?", svar: { valg: ["Målebånd", "Skyvelære", "Mikrometer"], riktig: 2 } }
    ],
    hint: ["Nedre grense er 12,000 mm. Bredden er øvre minus nedre.", "\\(0{,}018 : 10 = 0{,}0018\\) mm. Skyvelær ± 0,02 mm er større enn det."],
    losning: "<p>Øvre 12,018 mm. Bredde 0,018 mm. 1/10 er 0,0018 mm. Mikrometer ± 0,001 mm holder. Skyvelæret gjør det ikke.</p>"
  },
  {
    id: "sville-600",
    niva: "middels",
    tittel: "Sville på 600 mm",
    tekst: "<p>En sveiset sville skal være 600 ± 1 mm. Vanlig skyvelære rekker 150 mm. Målebåndet har usikkerhet ± 1 mm.</p>",
    steg: [{ verdi: 2, enhet: "mm" }, { verdi: 0.2, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 2, enhet: "mm", tol: 0 } },
      { tekst: "Hvor stor bør usikkerheten høyst være?", svar: { verdi: 0.2, enhet: "mm" } },
      { tekst: "Hva er riktig vurdering?", svar: { valg: ["Målebåndet holder 1/10-regelen", "Skyvelæret på 150 mm rekker, og er fint nok", "Målebåndet er for grovt, og vanlig skyvelære er for kort"], riktig: 2 } }
    ],
    hint: ["± 1 mm gir bredde 2 mm. Del på 10.", "0,2 mm er kravet. Båndet har ± 1 mm, og 600 mm er lengre enn 150 mm."],
    losning: "<p>Bredde 2 mm. 1/10 er 0,2 mm. Målebånd ± 1 mm er for grovt. Skyvelære på 150 mm rekker ikke. Du trenger et lengre og finere verktøy, for eksempel et langt skyvelære.</p>"
  },
  {
    id: "to-jobber",
    niva: "vanskelig",
    tittel: "Samme skyvelære, to krav",
    tekst: "<p>Du har ett skyvelære, ± 0,02 mm. Braketten skal være 65 ± 0,4 mm. Tappen er Ø8 med avvik 0 / −0,03 mm.</p>",
    steg: [{ verdi: 0.8, enhet: "mm" }, { verdi: 0.08, enhet: "mm" }, { verdi: 0.03, enhet: "mm" }],
    deler: [
      { tekst: "Toleransebredde for braketten?", svar: { verdi: 0.8, enhet: "mm" } },
      { tekst: "1/10-kravet for braketten?", svar: { verdi: 0.08, enhet: "mm" } },
      { tekst: "Toleransebredde for tappen?", svar: { verdi: 0.03, enhet: "mm", tol: 0 } },
      { tekst: "Hva kan skyvelæret brukes til, etter 1/10-regelen?", svar: { valg: ["Begge jobbene", "Bare braketten", "Bare tappen"], riktig: 1 } }
    ],
    hint: ["Bredde for ± 0,4 mm er 0,8 mm. For tappen er bredden 0,03 mm.", "\\(0{,}8 : 10 = 0{,}08\\). \\(0{,}03 : 10 = 0{,}003\\). 0,02 mm er under 0,08 og over 0,003."],
    losning: "<p>Brakett: bredde 0,8 mm, 1/10 er 0,08 mm. Skyvelæret holder. Tapp: grenser 8,00 og 7,97 mm, bredde 0,03 mm, 1/10 er 0,003 mm. Skyvelæret er for grovt til tappen. Bruk mikrometer der.</p>"
  },
  {
    id: "naer-grensa",
    niva: "vanskelig",
    tittel: "Rett under grensen",
    tekst: "<p>En aksel skal være 50 ± 0,1 mm. Du måler 50,09 mm med skyvelære, usikkerhet ± 0,02 mm.</p>",
    steg: [{ verdi: 0.2, enhet: "mm" }, { verdi: 0.02, enhet: "mm" }, { verdi: 50.1, enhet: "mm" }],
    deler: [
      { tekst: "Toleransebredde?", svar: { verdi: 0.2, enhet: "mm", tol: 0 } },
      { tekst: "1/10-kravet?", svar: { verdi: 0.02, enhet: "mm" } },
      { tekst: "Holder skyvelæret 1/10-regelen? Regelen sier høyst 1/10.", svar: { valg: ["Ja", "Nei"], riktig: 0 } },
      { tekst: "Er 50,09 mm sikkert godkjent når usikkerheten er ± 0,02 mm?", svar: { valg: ["Ja, 50,09 er under 50,10", "Nei, den kan være over 50,10", "Nei, 50,09 er allerede vrak"], riktig: 1 } }
    ],
    hint: ["Bredden er 0,20 mm. Øvre grense er 50,10 mm.", "\\(50{,}09 + 0{,}02 = 50{,}11\\), som er over 50,10. Du vet ikke om akselen er inne."],
    losning: "<p>Bredde 0,20 mm. 1/10 er 0,02 mm, så skyvelæret er akkurat på regelen. Avlesingen kan være fra 50,07 til 50,11 mm. Øvre grense er 50,10 mm. Målingen er usikker. Mål på nytt med mikrometer.</p>"
  },
  {
    id: "aksel-52",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Tre tall på samme aksel",
    utstyr: "Målebånd, skyvelære, mikrometer og én aksel",
    hms: "Bruk friksjonsklikken på mikrometeret. Ingen roterende maskin. Verktøy tilbake i etui.",
    tekst: "<p>Laget måler samme aksel: målebånd 52 mm, skyvelære 51,04 mm, mikrometer 51,037 mm. Regn ut, og mål deretter en aksel i verkstedet.</p>",
    steg: [{ verdi: 51.037, enhet: "mm" }],
    deler: [
      { tekst: "Hvor mange millimeter skiller målebånd og mikrometer? Avrund til to desimaler.", svar: { verdi: 0.96, enhet: "mm", tol: 0.005 } },
      { tekst: "Er 52 mm innenfor båndets usikkerhet på ± 1 mm, når mikrometeret sier 51,037 mm?", svar: { valg: ["Ja", "Nei"], riktig: 0 } }
    ],
    hint: ["Trekk mikrometermålet fra båndmålet.", "\\(52 - 51{,}037 = 0{,}963\\), som avrundes til 0,96 mm."],
    losning: "<p>\\(52 - 51{,}037 = 0{,}963 \\approx 0{,}96\\) mm. Det er innenfor ± 1 mm. Båndet kan brukes til grovkapp, ikke til en finpasning.</p>"
  },
  {
    id: "rep-bor-pris",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>8 bor koster 47 kr per stykk. Hva er et greit overslag på totalprisen?</p>",
    svar: { verdi: 400, enhet: "kr", tol: 50 },
    hint: ["Rund 47 til 50.", "\\(8 \\cdot 50 = 400\\) kr."],
    losning: "<p>\\(8 \\cdot 50 = 400\\) kr. Nøyaktig pris er \\(8 \\cdot 47 = 376\\) kr.</p>"
  },
  {
    id: "eksamen-35",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En hylse skal være 35 ± 0,25 mm. Du har skyvelære med usikkerhet ± 0,02 mm.</p>",
    steg: [{ verdi: 0.5, enhet: "mm" }, { verdi: 0.05, enhet: "mm" }],
    deler: [
      { tekst: "Hvor stor er toleransebredden?", svar: { verdi: 0.5, enhet: "mm", tol: 0 } },
      { tekst: "Hva sier 1/10-regelen om skyvelæret?", svar: { valg: ["For grovt", "Fint nok", "Bare målebånd kan brukes"], riktig: 1 } }
    ],
    hint: ["± 0,25 mm gir bredde 0,50 mm.", "\\(0{,}50 : 10 = 0{,}05\\) mm. Skyvelærets 0,02 mm er mindre enn 0,05 mm."],
    losning: "<p>Bredde 0,50 mm. 1/10 er 0,05 mm. ± 0,02 mm er innenfor, så skyvelæret er fint nok til dette kravet.</p>"
  }
]);
