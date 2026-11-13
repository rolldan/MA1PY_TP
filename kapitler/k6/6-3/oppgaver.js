Bok.oppgaver([
  {
    id: "rektangel",
    niva: "lett",
    tekst: "<p>En plate er 800 mm lang og 500 mm bred.</p>",
    deler: [
      { tekst: "Hvor stort er arealet?", svar: { verdi: 400000, enhet: "mm²" } },
      { tekst: "Hvor lang er omkretsen?", svar: { verdi: 2600, enhet: "mm" } }
    ],
    hint: ["Areal er lengde ganger bredde. Omkrets er to lengder pluss to bredder.", "800 · 500 = 400 000. Omkrets: 2 · (800 + 500) = 2600."],
    losning: "<p>Areal: \\(800 \\cdot 500 = 400\\,000\\) mm².<br>Omkrets: \\(2 \\cdot 800 + 2 \\cdot 500 = 2600\\) mm.</p>"
  },
  {
    id: "omkrets-sirkel",
    niva: "lett",
    tekst: "<p>Et hjul på en tralle har diameter 200 mm. Hvor lang er omkretsen? Bruk π-tasten og rund av til nærmeste mm.</p>",
    svar: { verdi: 628, enhet: "mm", tol: 2 },
    hint: ["Omkrets av sirkel er π · d.", "π · 200 ≈ 628 mm."],
    losning: "<p>\\(O = \\pi \\cdot 200 \\approx 628\\) mm.</p>"
  },
  {
    id: "halvsirkel",
    niva: "lett",
    tittel: "Vern på slipemaskinen",
    tekst: "<p>Et vern er en halvsirkel med radius 3 cm. Omkretsen er buen pluss den rette kanten. Hvor lang er omkretsen?</p>",
    steg: [{ verdi: 9.42, enhet: "cm", tol: 0.15 }, { verdi: 6, enhet: "cm" }],
    svar: { verdi: 15.4, enhet: "cm", tol: 0.2 },
    hint: ["Buen er π · r, ikke π · d. Den rette kanten er diameteren.", "π · 3 ≈ 9,42 cm. Diameteren er 6 cm. Summen er omtrent 15,4 cm."],
    losning: "<p>\\(\\pi \\cdot 3 + 6 \\approx 15{,}4\\) cm. 24,8 cm er feil: da er buen regnet som π · d, altså en hel sirkelomkrets i stedet for en halv.</p>"
  },
  {
    id: "stempel",
    niva: "middels",
    tittel: "Stempelbunn",
    tekst: "<p>Et stempel har radius 42 mm. Regn ut arealet av bunnen. En gammel fasit sa 364 mm².</p>",
    deler: [
      { tekst: "Hva er arealet?", svar: { verdi: 5542, enhet: "mm²", tol: 15 } },
      { tekst: "Hva er galt med 364 mm²?", svar: { valg: ["Det er altfor lite. Arealet er π·r², omtrent 5542 mm²", "Det er bare avrundet litt feil", "Man skal bruke diameter i stedet for radius, og da blir det 364"], riktig: 0 } }
    ],
    hint: ["Areal av sirkel er π · r². Overslag: 40 · 40 · 3 = 4800.", "π · 42² = π · 1764 ≈ 5542 mm²."],
    losning: "<p>\\(A = \\pi \\cdot 42^2 \\approx 5542\\) mm². 364 mm² er ikke en avrunding. Overslaget 4800 mm² viser at 5542 er i riktig størrelse. Husk: dette er areal, ikke omkrets.</p>"
  },
  {
    id: "plate-hull",
    niva: "middels",
    tekst: "<p>En plate er 60 cm × 40 cm og har ett hull med diameter 10 cm.</p>",
    deler: [
      { tekst: "Hvor stort er platearealet uten hull?", svar: { verdi: 2400, enhet: "cm²" } },
      { tekst: "Hvor stort er hullet?", svar: { verdi: 78.5, enhet: "cm²", tol: 0.6 } },
      { tekst: "Hvor stort er arealet som er igjen?", svar: { verdi: 2321.5, enhet: "cm²", tol: 1 } }
    ],
    hint: ["Radius er halvparten av diameteren. Trekk hullet fra plata.", "Plata: 60 · 40 = 2400 cm². Hullet: π · 5² ≈ 78,5 cm². Rest: 2400 − 78,5."],
    losning: "<p>Plata er 2400 cm². Hullet er \\(\\pi \\cdot 5^2 \\approx 78{,}5\\) cm². Igjen er omtrent 2322 cm².</p>"
  },
  {
    id: "halvsirkel-areal",
    niva: "middels",
    tekst: "<p>Et blinddeksel er en halvsirkel med diameter 125 mm. Regn ut arealet.</p>",
    steg: [{ verdi: 62.5, enhet: "mm" }],
    svar: { verdi: 6136, enhet: "mm²", tol: 8 },
    hint: ["Radius er 125 : 2. Areal av halvsirkel er π · r² : 2.", "r = 62,5 mm. π · 62,5² / 2 ≈ 6136 mm². Ikke 49 000: det er omtrent en hel sirkel med radius 125 mm."],
    losning: "<p>\\(r = 62{,}5\\) mm. \\(A = \\pi \\cdot 62{,}5^2 / 2 \\approx 6136\\) mm². 6132 mm² er et litt grovt overslag med π = 3,14. Fasiten 49 087 mm² glemmer både radius og deling på 2.</p>"
  },
  {
    id: "kutteplan",
    niva: "vanskelig",
    tittel: "Kutteplan",
    tekst: "<p>En plate er 2000 mm × 1000 mm. Du skal kappe braketter på 250 mm × 180 mm. Delene kan ikke roteres. Se bort fra sagspor.</p>",
    deler: [
      { tekst: "Hvor mange braketter får du plass til?", svar: { verdi: 40, enhet: "stk" } },
      { tekst: "Hvor mange prosent av plata blir svinn?", svar: { verdi: 10, enhet: "%" } }
    ],
    hint: ["Hvor mange 250 mm får plass på 2000 mm, og hvor mange 180 mm på 1000 mm?", "8 · 5 = 40 deler. Én del er 45 000 mm². 40 deler er 1 800 000 mm² av 2 000 000 mm². Resten er 10 %."],
    losning: "<p>\\(2000 : 250 = 8\\) og \\(1000 : 180 = 5\\) hele, med 100 mm til overs. Antall: \\(8 \\cdot 5 = 40\\).<br>Areal deler: \\(40 \\cdot 250 \\cdot 180 = 1\\,800\\,000\\) mm². Svinn: \\(200\\,000 / 2\\,000\\,000 = 10\\%\\).</p>"
  },
  {
    id: "mal-plate",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Plate og hull",
    utstyr: "Målebånd eller skyvelære, en plate med hull, kalkulator",
    hms: "Hullkanter kan være skarpe. Hansker. Ikke start boremaskinen i denne økta.",
    tekst: "<p>En øvingsplate er 300 mm × 200 mm og har et hull med diameter 40 mm. Regn ut arealet som er igjen. Mål deretter en ekte plate i verkstedet og gjør samme regnestykke.</p>",
    steg: [{ verdi: 60000, enhet: "mm²" }, { verdi: 1257, enhet: "mm²", tol: 20 }],
    svar: { verdi: 58743, enhet: "mm²", tol: 40 },
    hint: ["Plateareal minus sirkelareal. Radius er 20 mm.", "300 · 200 = 60 000. Hullet: π · 20² ≈ 1257. Resten er omtrent 58 740 mm²."],
    losning: "<p>\\(300 \\cdot 200 - \\pi \\cdot 20^2 \\approx 60\\,000 - 1257 = 58\\,743\\) mm².</p>"
  },
  {
    id: "rep-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Du trenger 25 plater og bestiller 12 % ekstra for kapp. Hvor mange plater bestiller du? Rund opp til hele plater hvis du må.</p>",
    steg: [{ verdi: 3, enhet: "stk" }],
    svar: { verdi: 28, enhet: "stk" },
    hint: ["12 % av 25, og legg til de 25.", "0,12 · 25 = 3. 25 + 3 = 28."],
    losning: "<p>\\(25 \\cdot 1{,}12 = 28\\). Du bestiller 28 plater.</p>"
  },
  {
    id: "eks-sirkel",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>En sirkel har radius 5 cm. Ikke bytt om omkrets og areal.</p>",
    deler: [
      { tekst: "Hvor lang er omkretsen?", svar: { verdi: 31.4, enhet: "cm", tol: 0.2 } },
      { tekst: "Hvor stort er arealet?", svar: { verdi: 78.5, enhet: "cm²", tol: 0.5 } }
    ],
    hint: ["Omkrets: 2 · π · r. Areal: π · r².", "2 · π · 5 ≈ 31,4 cm. π · 25 ≈ 78,5 cm²."],
    losning: "<p>Omkrets: \\(2\\pi\\cdot 5 \\approx 31{,}4\\) cm.<br>Areal: \\(\\pi \\cdot 5^2 \\approx 78{,}5\\) cm². Kall dem ikke det samme.</p>"
  }
]);
