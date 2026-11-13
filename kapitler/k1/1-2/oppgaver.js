Bok.oppgaver([
  {
    id: "planker-overslag",
    niva: "lett",
    tittel: "Planker",
    tekst: "<p>23 planker koster 98 kr per stykk. Bruk regelen for gange: rund 23 ned til 20 og 98 opp til 100. Hva blir overslaget?</p>",
    stegForSteg: false,
    svar: { verdi: 2000, enhet: "kr" },
    hint: ["Ett tall opp og ett tall ned.", "\\(20 \\cdot 100\\)."],
    losning: "<p>\\(20 \\cdot 100 = 2000\\) kr.</p>"
  },
  {
    id: "avrund-tier",
    niva: "lett",
    tittel: "Nærmeste tier",
    tekst: "<p>Rund av til nærmeste tier.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "17", svar: { verdi: 20 } },
      { tekst: "48", svar: { verdi: 50 } },
      { tekst: "109", svar: { verdi: 110 } },
      { tekst: "391", svar: { verdi: 390 } }
    ],
    hint: ["Se på enerne. 0–4 runder ned, 5–9 runder opp.", "17 har ener 7, så tierne øker fra 1 til 2."],
    losning: "<p>a) 20 &nbsp; b) 50 &nbsp; c) 110 &nbsp; d) 390</p>"
  },
  {
    id: "planker-noyaktig",
    niva: "middels",
    tekst: "<p>23 planker à 98 kr. Regn den nøyaktige prisen.</p>",
    steg: [{ verdi: 2300, enhet: "kr" }, { verdi: 46, enhet: "kr" }],
    svar: { verdi: 2254, enhet: "kr" },
    hint: ["\\(23 \\cdot 100\\) og trekk fra \\(23 \\cdot 2\\).", "\\(2300 - 46\\)."],
    losning: "<p>\\(23 \\cdot 98 = 23 \\cdot 100 - 23 \\cdot 2 = 2300 - 46 = 2254\\) kr.</p>"
  },
  {
    id: "esker",
    niva: "middels",
    tekst: "<p>18 esker à 52 kr. Rund 18 opp til 20 og 52 ned til 50.</p>",
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 1000, enhet: "kr" } },
      { tekst: "Hva er den nøyaktige prisen?", svar: { verdi: 936, enhet: "kr" } }
    ],
    hint: ["Overslag: \\(20 \\cdot 50\\).", "Nøyaktig: \\(18 \\cdot 50 + 18 \\cdot 2\\)."],
    losning: "<p>a) \\(20 \\cdot 50 = 1000\\) kr.<br>b) \\(18 \\cdot 52 = 936\\) kr.</p>"
  },
  {
    id: "avrund-desimal",
    niva: "middels",
    tekst: "<p>Rund av til én desimal.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "3,26", svar: { verdi: 3.3 } },
      { tekst: "5,84", svar: { verdi: 5.8 } },
      { tekst: "9,95", svar: { verdi: 10 } },
      { tekst: "12,48 mm", svar: { verdi: 12.5, enhet: "mm" } }
    ],
    hint: ["Se på det andre desimalet. 5 eller mer: rund opp.", "9,95 rundes opp, og 9,9 blir 10,0."],
    losning: "<p>a) 3,3 &nbsp; b) 5,8 &nbsp; c) 10 &nbsp; d) 12,5 mm</p>"
  },
  {
    id: "gulv",
    niva: "vanskelig",
    tekst: "<p>Et gulv er 7,8 m langt og 4,2 m bredt. Du skal bestille plater og vil ha et overslag på arealet: rund 7,8 opp til 8 og 4,2 ned til 4.</p>",
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 32, enhet: "m²" } },
      { tekst: "Hva er det nøyaktige arealet?", svar: { verdi: 32.76, enhet: "m²" } }
    ],
    hint: ["Overslag: \\(8 \\cdot 4\\).", "Nøyaktig: \\(7{,}8 \\cdot 4{,}2\\). Regn \\(78 \\cdot 42\\) og flytt kommaet to plasser."],
    losning: "<p>a) \\(8 \\cdot 4 = 32\\) m².<br>b) \\(7{,}8 \\cdot 4{,}2 = 32{,}76\\) m². Overslaget ligger tett på.</p>"
  },
  {
    id: "overslag-31",
    niva: "lett",
    tittel: "31 vinkler",
    tekst: "<p>31 vinkelbeslag koster 49 kr per stykk. Rund 31 ned til 30 og 49 opp til 50. Hva blir overslaget?</p>",
    stegForSteg: false,
    svar: { verdi: 1500, enhet: "kr" },
    hint: ["Ett tall ned og ett tall opp når du ganger.", "\\(30 \\cdot 50\\)."],
    losning: "<p>\\(30 \\cdot 50 = 1500\\) kr.</p>"
  },
  {
    id: "tier-ny",
    niva: "lett",
    tittel: "Nærmeste tier på lista",
    tekst: "<p>Rund av til nærmeste tier. Tallene er antall skruer på fire hyller.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "64", svar: { verdi: 60 } },
      { tekst: "75", svar: { verdi: 80 } },
      { tekst: "132", svar: { verdi: 130 } },
      { tekst: "86", svar: { verdi: 90 } }
    ],
    hint: ["Se på enerne. 0–4 runder ned, 5–9 runder opp.", "75 har ener 5, så den rundes opp til 80."],
    losning: "<p>a) 60 &nbsp; b) 80 &nbsp; c) 130 &nbsp; d) 90</p>"
  },
  {
    id: "hundre-ny",
    niva: "lett",
    tittel: "Nærmeste hundre",
    tekst: "<p>Rund av til nærmeste hundre. Tallene er lengder i mm på tre emner.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "246 mm", svar: { verdi: 200, enhet: "mm" } },
      { tekst: "463 mm", svar: { verdi: 500, enhet: "mm" } },
      { tekst: "812 mm", svar: { verdi: 800, enhet: "mm" } }
    ],
    hint: ["Se på tierne. 0–4 runder ned, 5–9 runder opp.", "246 ligger 46 fra 200 og 54 fra 300."],
    losning: "<p>a) 200 mm &nbsp; b) 500 mm &nbsp; c) 800 mm</p>"
  },
  {
    id: "noyaktig-31",
    niva: "middels",
    tittel: "Vinkler, nøyaktig",
    tekst: "<p>31 vinkelbeslag à 49 kr. Rund 31 ned til 30 og 49 opp til 50 i overslaget.</p>",
    steg: [{ verdi: 1550, enhet: "kr" }, { verdi: 31, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 1500, enhet: "kr" } },
      { tekst: "Hva er den nøyaktige prisen?", svar: { verdi: 1519, enhet: "kr" } }
    ],
    hint: ["Overslag: \\(30 \\cdot 50\\).", "Nøyaktig: \\(31 \\cdot 50 - 31 = 1550 - 31\\)."],
    losning: "<p>a) \\(30 \\cdot 50 = 1500\\) kr.<br>b) \\(31 \\cdot 49 = 1550 - 31 = 1519\\) kr.</p>"
  },
  {
    id: "sum-47",
    niva: "middels",
    tittel: "To hyller",
    tekst: "<p>Du skal ha 47 skruer og 86 muttere. Rund 47 opp til 50 og 86 ned til 80 når du gjør overslag på antallet.</p>",
    steg: [{ verdi: 130, enhet: "stk" }],
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 130, enhet: "stk" } },
      { tekst: "Hva er det nøyaktige antallet?", svar: { verdi: 133, enhet: "stk" } }
    ],
    hint: ["Ett tall opp og ett tall ned når du legger sammen.", "\\(50 + 80\\). Nøyaktig: \\(47 + 86\\)."],
    losning: "<p>a) \\(50 + 80 = 130\\) stk.<br>b) \\(47 + 86 = 133\\) stk.</p>"
  },
  {
    id: "en-desimal",
    niva: "middels",
    tittel: "Én desimal på målet",
    tekst: "<p>Rund av til én desimal.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "7,64 mm", svar: { verdi: 7.6, enhet: "mm" } },
      { tekst: "4,96 mm", svar: { verdi: 5, enhet: "mm" } },
      { tekst: "15,53 mm", svar: { verdi: 15.5, enhet: "mm" } },
      { tekst: "8,45 mm", svar: { verdi: 8.5, enhet: "mm" } }
    ],
    hint: ["Se på andre desimal. 5 eller mer: rund opp.", "4,96 rundes opp, og 5,0 er 5."],
    losning: "<p>a) 7,6 mm &nbsp; b) 5 mm &nbsp; c) 15,5 mm &nbsp; d) 8,5 mm</p>"
  },
  {
    id: "gulv-64",
    niva: "vanskelig",
    tittel: "Gulv i sveisebua",
    tekst: "<p>Gulvet i sveisebua er 6,4 m langt og 3,8 m bredt. Til overslag runder du 6,4 ned til 6 og 3,8 opp til 4.</p>",
    steg: [{ verdi: 25.6, enhet: "m²" }, { verdi: 1.28, enhet: "m²" }],
    deler: [
      { tekst: "Hva blir overslaget på arealet?", svar: { verdi: 24, enhet: "m²" } },
      { tekst: "Hva er det nøyaktige arealet?", svar: { verdi: 24.32, enhet: "m²" } }
    ],
    hint: ["Overslag: \\(6 \\cdot 4\\).", "Nøyaktig: \\(6{,}4 \\cdot 4 - 6{,}4 \\cdot 0{,}2\\). Regn \\(64 \\cdot 38\\) og flytt kommaet to plasser."],
    losning: "<p>a) \\(6 \\cdot 4 = 24\\) m².<br>b) \\(64 \\cdot 38 = 2432\\), så \\(6{,}4 \\cdot 3{,}8 = 24{,}32\\) m².</p>"
  },
  {
    id: "bolter-42",
    niva: "vanskelig",
    tittel: "42 bolter",
    tekst: "<p>42 bolter koster 19 kr per stykk. Til overslag bruker du \\(40 \\cdot 20\\).</p>",
    steg: [{ verdi: 840, enhet: "kr" }, { verdi: 42, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 800, enhet: "kr" } },
      { tekst: "Hva er den nøyaktige prisen?", svar: { verdi: 798, enhet: "kr" } }
    ],
    hint: ["Overslag: \\(40 \\cdot 20\\).", "Nøyaktig: \\(42 \\cdot 20 - 42\\)."],
    losning: "<p>a) \\(40 \\cdot 20 = 800\\) kr.<br>b) \\(42 \\cdot 19 = 840 - 42 = 798\\) kr. Overslaget ligger 2 kr over.</p>"
  },
  {
    id: "kapp-812",
    niva: "vanskelig",
    tittel: "Kapp med overslag",
    tekst: "<p>En stang er 812 mm. Du kapper av 186 mm. For overslag ved minus runder du begge ned: 810 mm og 180 mm.</p>",
    steg: [{ verdi: 630, enhet: "mm" }],
    deler: [
      { tekst: "Hva blir overslaget?", svar: { verdi: 630, enhet: "mm" } },
      { tekst: "Hvor mange millimeter er igjen, nøyaktig?", svar: { verdi: 626, enhet: "mm" } }
    ],
    hint: ["Ved minus runder du begge tall samme vei.", "\\(810 - 180\\). Nøyaktig: \\(812 - 186\\)."],
    losning: "<p>a) \\(810 - 180 = 630\\) mm.<br>b) \\(812 - 186 = 626\\) mm.</p>"
  },
  {
    id: "lagerhylla",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Før du går til kassa",
    utstyr: "Prisliste ved lagerhylla, eller tallene i oppgaven",
    hms: "Ikke klatre i reolen. Ta ned esker med begge hender.",
    tekst: "<p>Du skal ha 23 planker à 98 kr og 4 esker skruer à 79,50 kr. Gjør overslag med 20 · 100 og 4 · 80, og legg dem sammen.</p>",
    steg: [{ verdi: 2000, enhet: "kr" }, { verdi: 320, enhet: "kr" }],
    svar: { verdi: 2320, enhet: "kr" },
    hint: ["Regn de to overslagene hver for seg.", "\\(20 \\cdot 100 = 2000\\) og \\(4 \\cdot 80 = 320\\)."],
    losning: "<p>\\(2000 + 320 = 2320\\) kr. Nøyaktig pris er \\(23 \\cdot 98 + 4 \\cdot 79{,}50 = 2254 + 318 = 2572\\) kr. Overslaget er lavt, men det avslører en tastefeil på flere tusen.</p>"
  },
  {
    id: "repetisjon-skrue",
    type: "repetisjon",
    fra: "kapittel 1.1",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 0.795, enhet: "kr", tol: 0.005 },
    hint: ["Del med 100.", "Flytt kommaet to plasser til venstre."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr.</p>"
  },
  {
    id: "repetisjon-meter",
    type: "repetisjon",
    fra: "kapittel 0",
    niva: "lett",
    tekst: "<p>Et rør er 2,5 m. Hvor mange centimeter er det?</p>",
    svar: { verdi: 250, enhet: "cm" },
    hint: ["1 m = 100 cm.", "\\(2{,}5 \\cdot 100\\)."],
    losning: "<p>\\(250\\) cm.</p>"
  },
  {
    id: "eksamen-avrund",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En lærling måler en aksling til 12,48 mm og et emne til 248 mm.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Rund 12,48 mm av til én desimal.", svar: { verdi: 12.5, enhet: "mm" } },
      { tekst: "Rund 248 mm av til nærmeste hundre.", svar: { verdi: 200, enhet: "mm" } }
    ],
    hint: ["8 er 5 eller mer, så 12,48 rundes opp.", "248 ligger nærmere 200 enn 300, fordi avstanden til 300 er 52 og til 200 er 48."],
    losning: "<p>a) 12,5 mm.<br>b) 200 mm. 250 ville ligget midt mellom, men 248 er under 250.</p>"
  }
]);
