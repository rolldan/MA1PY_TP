Bok.oppgaver([
  {
    id: "etikett",
    niva: "lett",
    tekst: "<p>En etikett dekker sideflaten på en sylinder. Diameteren er 66 mm, og etiketten er 100 mm høy. Hvor stort er arealet?</p>",
    svar: { verdi: 207, enhet: "cm²", tol: 2 },
    hint: ["Rull ut: bredde π · d, høyde 100 mm. Gjør om til cm² til slutt.", "π · 6,6 cm · 10 cm ≈ 207 cm²."],
    losning: "<p>\\(A = \\pi \\cdot 6{,}6 \\cdot 10 \\approx 207\\) cm². Uten lokk og bunn.</p>"
  },
  {
    id: "plate-masse",
    niva: "lett",
    tekst: "<p>En stålplate er 1 m² og 3 mm tykk. Massetettheten er 7850 kg/m³. Hvor mye veier plata?</p>",
    steg: [{ verdi: 0.003, enhet: "m³" }],
    svar: { verdi: 23.55, enhet: "kg", tol: 0.2 },
    hint: ["3 mm = 0,003 m. Volum er areal ganger tykkelse.", "0,003 · 7850 = 23,55 kg."],
    losning: "<p>\\(V = 0{,}003\\) m³. \\(m = 7850 \\cdot 0{,}003 = 23{,}55\\) kg. 1 mm stål veier 7,85 kg/m², så 3 mm veier tre ganger så mye.</p>"
  },
  {
    id: "mm3-cm3",
    niva: "lett",
    tekst: "<p>Et sponvolum er 7163 mm³. Hvor mange cm³ er det?</p>",
    svar: { verdi: 7.163, enhet: "cm³", tol: 0.02 },
    hint: ["1 cm³ = 1000 mm³.", "7163 : 1000 = 7,163 cm³."],
    losning: "<p>\\(7163 : 1000 = 7{,}163\\) cm³.</p>"
  },
  {
    id: "dreid-stang",
    niva: "middels",
    tittel: "Fra Ø20 til Ø18",
    tekst: "<p>En stang dreies fra diameter 20 mm til 18 mm. Lengden er 120 mm. Stålet veier 7,85 g/cm³.</p>",
    deler: [
      { tekst: "Hvor stort volum dreies bort?", svar: { verdi: 7163, enhet: "mm³", tol: 8 } },
      { tekst: "Hvor mange gram veier sponen?", svar: { verdi: 56.2, enhet: "g", tol: 0.8 } }
    ],
    hint: ["Hul sylinder: π · (10² − 9²) · 120. Gjør mm³ om til cm³ før du ganger med 7,85.", "2280π ≈ 7163 mm³ ≈ 7,16 cm³. 7,16 · 7,85 ≈ 56 g."],
    losning: "<p>\\(V = \\pi (10^2 - 9^2) \\cdot 120 = 2280\\pi \\approx 7163\\) mm³.<br>\\(7{,}163 \\cdot 7{,}85 \\approx 56{,}2\\) g. Hele stanga før dreiing er mye større. 7163 mm³ er bare sponen.</p>"
  },
  {
    id: "ror-masse",
    niva: "middels",
    tekst: "<p>Et stålrør har utvendig diameter 50 mm, innvendig diameter 40 mm og lengde 200 mm. Massetetthet 7,85 g/cm³.</p>",
    deler: [
      { tekst: "Hvor stort er volumet av godset?", svar: { verdi: 141.4, enhet: "cm³", tol: 0.8 } },
      { tekst: "Hvor mange gram veier røret?", svar: { verdi: 1110, enhet: "g", tol: 20 } }
    ],
    hint: ["Radius 25 mm og 20 mm. Trekk den indre sylinderen fra den ytre.", "π · (625 − 400) · 200 ≈ 141 400 mm³ ≈ 141,4 cm³. Masse omtrent 1110 g."],
    losning: "<p>\\(V = \\pi (25^2 - 20^2) \\cdot 200 \\approx 141\\,400\\) mm³ \\(= 141{,}4\\) cm³.<br>\\(m \\approx 141{,}4 \\cdot 7{,}85 \\approx 1110\\) g.</p>"
  },
  {
    id: "dekk",
    niva: "middels",
    tittel: "235/60 R18",
    tekst: "<p>Et dekk er merket 235/60 R18. 1 tomme = 25,4 mm.</p>",
    deler: [
      { tekst: "Hvor stor er diameteren på hjulet?", svar: { verdi: 739.2, enhet: "mm", tol: 0.5 } },
      { tekst: "Hvor lang er omkretsen?", svar: { verdi: 2.32, enhet: "m", tol: 0.015 } }
    ],
    hint: ["Sidehøyde = 0,60 · 235 mm. Felg = 18 · 25,4 mm. Diameter = felg + to sidehøyder.", "141 + 141 + 457,2 = 739,2 mm. Omkrets π · 0,7392 m ≈ 2,32 m."],
    losning: "<p>Sidehøyde 141 mm. Felg 457,2 mm. Diameter \\(457{,}2 + 282 = 739{,}2\\) mm.<br>Omkrets \\(\\pi \\cdot 0{,}7392 \\approx 2{,}32\\) m.</p>"
  },
  {
    id: "runder",
    niva: "vanskelig",
    tekst: "<p>Samme dekk, 235/60 R18, ruller 11,6 km. Bruk omkrets 2,32 m hvis du ikke har regnet den selv.</p>",
    deler: [
      { tekst: "Omtrent hvor mange omdreininger blir det?", svar: { verdi: 5000, enhet: "stk", tol: 40 } },
      { tekst: "Et målebånd gir større omkrets enn regnestykket. Blir det da flere eller færre runder på samme strekning?", svar: { valg: ["Færre", "Flere"], riktig: 0 } }
    ],
    hint: ["11,6 km = 11 600 m. Del på omkretsen.", "11 600 : 2,32 = 5000. Større omkrets betyr at hjulet kommer lenger per runde, så det trengs færre runder."],
    losning: "<p>\\(11\\,600 : 2{,}32 = 5000\\) omdreininger. Med π mer nøyaktig på diameter 739,2 mm blir omkretsen 2,322 m og antall runder omtrent 4995. Større målt omkrets gir færre runder.</p>"
  },
  {
    id: "mal-hjul",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Målebånd på dekket",
    utstyr: "Målebånd, dekk merket 235/60 R18 eller et annet dekk dere skriver merkingen på",
    hms: "Bilen skal stå i gir eller med kloss foran hjulet. Ikke stikk hånden innenfor felgen mens noen rører bilen. Målebåndet kan svi tilbake.",
    tekst: "<p>Regn omkretsen til 235/60 R18. Mål deretter rundt et ekte dekk og skriv begge tallene på verkstedkortet. Her skal du svare med den beregnede omkretsen.</p>",
    svar: { verdi: 2.32, enhet: "m", tol: 0.015 },
    hint: ["Se regelen for dekkmerking. Diameter først, deretter π · d.", "Diameter 739,2 mm gir omkrets omtrent 2,32 m."],
    losning: "<p>Beregnet omkrets er omtrent 2,32 m. Målebåndet rundt slitebanen blir ofte litt større. Begge tallene hører hjemme i loggen.</p>"
  },
  {
    id: "rep-toleranse",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>En dreid stang skal være Ø18 ± 0,1 mm. Hva er største godkjente mål?</p>",
    svar: { verdi: 18.1, enhet: "mm" },
    hint: ["Største mål er nominelt mål pluss toleransen.", "18 + 0,1 = 18,1 mm. Minste er 17,9 mm."],
    losning: "<p>Største godkjente mål er \\(18 + 0{,}1 = 18{,}1\\) mm.</p>"
  },
  {
    id: "eks-overflate",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tekst: "<p>En lukket aluminiumssylinder har radius 5 cm og høyde 12 cm. Aluminium veier 2,70 g/cm³. Ta med side, lokk og bunn.</p>",
    deler: [
      { tekst: "Hvor stor er overflaten?", svar: { verdi: 534, enhet: "cm²", tol: 3 } },
      { tekst: "Hvor mange gram veier sylinderen hvis veggene er massive, altså fylt?", svar: { verdi: 2545, enhet: "g", tol: 25 } }
    ],
    hint: ["Overflate: 2πrh + 2πr². Masse: volum πr²h ganger 2,70.", "2π·5·12 + 2π·25 = 170π ≈ 534 cm². Volum π·25·12 ≈ 942 cm³. Masse omtrent 2545 g."],
    losning: "<p>Overflate: \\(2\\pi\\cdot 5\\cdot 12 + 2\\pi\\cdot 25 = 170\\pi \\approx 534\\) cm².<br>Volum: \\(\\pi\\cdot 25\\cdot 12 \\approx 942{,}5\\) cm³. Masse: \\(942{,}5 \\cdot 2{,}70 \\approx 2545\\) g.</p>"
  }
]);
