Bok.oppgaver([
  {
    id: "omkrets",
    niva: "lett",
    tittel: "Veien på ett minutt",
    tekst: "<p>Omkretsen på et emne er 31,4 mm. Turtallet er 200 r/min. Bruk 31,4, ikke π-knappen. Hvor mange meter beveger kanten seg på ett minutt?</p>",
    steg: [{ verdi: 6280 }],
    svar: { verdi: 6.28, enhet: "m/min" },
    hint: ["Gang omkretsen med antall omdreininger. Det gir millimeter per minutt.", "\\(31{,}4 \\cdot 200 = 6280\\) mm/min. Del på 1000 for å få meter."],
    losning: "<p>\\(31{,}4 \\cdot 200 = 6280\\) mm/min.<br>\\(6280 : 1000 = 6{,}28\\) m/min.</p>"
  },
  {
    id: "ti-mm",
    niva: "lett",
    tittel: "10 mm og 1000 r/min",
    tekst: "<p>Et bor på 10 mm går på 1000 r/min. Bruk π-knappen. Hva er skjærehastigheten?</p>",
    svar: { verdi: 31.41592653589793, enhet: "m/min" },
    hint: ["\\(v_c = \\pi \\cdot d \\cdot n : 1000\\). Her er \\(n : 1000 = 1\\).", "\\(v_c = \\pi \\cdot 10\\)."],
    losning: "<p>\\(v_c = \\pi \\cdot 10 \\cdot 1000 : 1000 = 10\\pi \\approx 31{,}4\\) m/min.</p>"
  },
  {
    id: "to-bor",
    niva: "middels",
    tittel: "5 mm og 25 mm",
    tekst: "<p>Begge borene går på 500 r/min. Bruk π-knappen.</p>",
    deler: [
      { tekst: "Hva er skjærehastigheten for 5 mm-boret?", svar: { verdi: 7.853981633974483, enhet: "m/min" } },
      { tekst: "Hva er skjærehastigheten for 25 mm-boret?", svar: { verdi: 39.269908169872416, enhet: "m/min" } }
    ],
    hint: ["\\(v_c = \\pi \\cdot d \\cdot n : 1000\\). Diameteren er det eneste som er ulikt.", "For 5 mm: \\(\\pi \\cdot 5 \\cdot 500 : 1000\\)."],
    losning: "<p>5 mm: \\(2{,}5\\pi \\approx 7{,}9\\) m/min.<br>25 mm: \\(12{,}5\\pi \\approx 39{,}3\\) m/min.<br>Det store boret skjærer fem ganger så fort.</p>"
  },
  {
    id: "nora",
    niva: "middels",
    tittel: "Grensemål på akselen",
    tekst: "<p>Nora skal dreie til Ø64 mm med toleranse ±0,2 mm. Emnet er Ø70 mm. Kuttdybde måles på radien.</p>",
    deler: [
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 64.2, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 63.8, enhet: "mm" } },
      { tekst: "Hva er største kuttdybde uten å komme under nedre grensemål?", svar: { verdi: 3.1, enhet: "mm" } }
    ],
    hint: ["Øvre grense er 64 pluss 0,2. Nedre er 64 minus 0,2.", "Største avvirking på diameteren er \\(70 - 63{,}8\\). Kuttdybden er halvparten."],
    losning: "<p>Øvre 64,2 mm, nedre 63,8 mm.<br>\\((70 - 63{,}8) : 2 = 6{,}2 : 2 = 3{,}1\\) mm.</p>"
  },
  {
    id: "stal-alu",
    niva: "middels",
    tittel: "Stål og aluminium",
    tekst: "<p>En pinnefres på 20 mm. I stål skal \\(v_c\\) være 40 m/min. I aluminium skal den være 150 m/min. Bruk π-knappen.</p>",
    deler: [
      { tekst: "Hvilket turtall i stål?", svar: { verdi: 636.6197723675814, enhet: "r/min" } },
      { tekst: "Hvilket turtall i aluminium?", svar: { verdi: 2387.32414637843, enhet: "r/min" } },
      { tekst: "Hvor mange ganger så høyt turtall krever aluminium? Skriv tallet, for eksempel 3,75.", svar: { verdi: 3.75 } }
    ],
    hint: ["\\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\). Diameteren er lik, så forholdet følger skjærehastigheten.", "\\(150 : 40 = 3{,}75\\)."],
    losning: "<p>Stål: \\(n \\approx 637\\) r/min.<br>Aluminium: \\(n \\approx 2387\\) r/min.<br>\\(150 : 40 = 3{,}75\\). Spindelen må gå 3,75 ganger så fort.</p>"
  },
  {
    id: "brent-bor",
    niva: "vanskelig",
    tittel: "Blåbrent bor",
    tekst: "<p>Et 12 mm bor i verktøystål ble kjørt på 2000 r/min. Tabellen sier maks 15 m/min. Bruk π-knappen.</p>",
    deler: [
      { tekst: "Hvilken skjærehastighet ble boret kjørt med?", svar: { verdi: 75.39822368615503, enhet: "m/min" } },
      { tekst: "Hvordan ligger det an mot grensen på 15 m/min?", svar: { valg: ["Under grensen", "Litt over, rundt 20 m/min", "Omtrent fem ganger over grensen"], riktig: 2, forklaring: "Omtrent 75 m/min er fem ganger 15 m/min." } }
    ],
    hint: ["\\(v_c = \\pi \\cdot 12 \\cdot 2000 : 1000\\).", "Det blir \\(24\\pi\\), omtrent 75 m/min. Del på 15."],
    losning: "<p>\\(v_c = 24\\pi \\approx 75{,}4\\) m/min. Det er omtrent fem ganger grensen på 15 m/min. Boret ble for varmt.</p>"
  },
  {
    id: "konus",
    niva: "vanskelig",
    tittel: "Slak konus",
    tekst: "<p>En konus har \\(D = 50\\) mm, \\(d = 40\\) mm og \\(L = 145\\) mm. Bruk håndformelen \\(\\alpha \\approx (D - d) \\cdot 29 : L\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva blir innstillingsvinkelen i grader? Skriv gradtallet.", svar: { verdi: 2 } },
      { tekst: "En kjørner er tegnet med 60° mellom sidene. Hva stiller du toppsleiden på?", svar: { valg: ["30 grader", "60 grader", "120 grader"], riktig: 0, forklaring: "Toppsleiden følger den ene siden, halve toppvinkelen." } }
    ],
    hint: ["Trekk diameterne fra hverandre først. Gang med 29 og del på lengden.", "\\(50 - 40 = 10\\). Så \\(10 \\cdot 29 : 145\\)."],
    losning: "<p>\\(\\alpha \\approx 10 \\cdot 29 : 145 = 2\\) grader.<br>Kjørneren stilles på 30 grader, ikke 60.</p>"
  },
  {
    id: "velg-gir",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Gir på søyleboret",
    utstyr: "Søyleboremaskin, 10 mm bor, vernbriller, tabell eller eske med anbefalt skjærehastighet",
    hms: "Regn ferdig før maskinen startes. Vernbriller. Hår og ermer unna. Chucknøkkel ut. Ikke hansker inntil roterende chuck. Læreren starter.",
    tekst: "<p>Du skal bore i stål med et 10 mm bor. Anbefalt skjærehastighet er 25 m/min. Hvilket turtall skal du regne deg fram til? Bruk π-knappen, og velg nærmeste gir etterpå.</p>",
    svar: { verdi: 795.7747154594767, enhet: "r/min" },
    hint: ["\\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\).", "\\(1000 \\cdot 25 : (\\pi \\cdot 10)\\)."],
    losning: "<p>\\(n = 25\\,000 : (10\\pi) \\approx 796\\) r/min. Velg nærmeste gir, og ikke et gir som ligger langt over.</p>"
  },
  {
    id: "rep-reim",
    type: "repetisjon",
    fra: "5.5",
    niva: "lett",
    tekst: "<p>Motor 1400 r/min, reimskive 50 mm, spindelskive 200 mm. Hva blir turtallet på boret?</p>",
    svar: { verdi: 350, enhet: "r/min" },
    hint: ["\\(n_2 = n_1 \\cdot d_1 : d_2\\).", "\\(1400 \\cdot 50 : 200\\)."],
    losning: "<p>\\(n_2 = 1400 \\cdot 50 : 200 = 350\\) r/min.</p>"
  },
  {
    id: "rep-meter",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Et emne er 2,5 m langt. Dreiebenken vil ha målet i millimeter. Hvor mange millimeter er det?</p>",
    svar: { verdi: 2500, enhet: "mm" },
    hint: ["Fra m til mm ganger du med 1000.", "\\(2{,}5 \\cdot 1000\\)."],
    losning: "<p>\\(2{,}5 \\cdot 1000 = 2500\\) mm.</p>"
  },
  {
    id: "eksamen-nomogram",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et bor med diameter 16 mm skal gå med skjærehastighet 20 m/min. På nomogrammet leser du 400 r/min. Avvik i prosent er \\(|\\text{avlest} - \\text{utregnet}| : \\text{utregnet} \\cdot 100\\).</p>",
    deler: [
      { tekst: "Regn ut turtallet med formelen. Bruk π-knappen.", svar: { verdi: 397.8873577297384, enhet: "r/min" } },
      { tekst: "Hvor mange prosent avviker 400 r/min fra det utregnede turtallet?", svar: { verdi: 0.5309649148733762, enhet: "%", tol: 0.05 } }
    ],
    hint: ["\\(n = 1000 \\cdot 20 : (\\pi \\cdot 16)\\).", "Trekk det utregnede turtallet fra 400, del på det utregnede, og gang med 100."],
    losning: "<p>\\(n = 20\\,000 : (16\\pi) \\approx 398\\) r/min.<br>Avvik: \\(|400 - 398| : 398 \\cdot 100 \\approx 0{,}5\\) %. Godt innenfor 10 %.</p>"
  },
  {
    id: "emne-16",
    niva: "lett",
    tittel: "Emne på 16 mm",
    tekst: "<p>Du dreier et emne med diameter 16 mm. Turtallet er 250 r/min. Bruk π-knappen. Hva er skjærehastigheten i m/min?</p>",
    steg: [{ verdi: 12566.370614359172 }],
    svar: { verdi: 12.566370614359172, enhet: "m/min" },
    hint: ["\\(v_c = \\pi \\cdot d \\cdot n : 1000\\). Enheten er m/min, ikke r/min.", "\\(\\pi \\cdot 16 \\cdot 250 = 4000\\pi\\). Del på 1000."],
    losning: "<p>\\(\\pi \\cdot 16 \\cdot 250 = 4000\\pi \\approx 12\\,566\\) mm/min.<br>\\(v_c = 4000\\pi : 1000 = 4\\pi \\approx 12{,}6\\) m/min.</p>"
  },
  {
    id: "bor-8",
    niva: "lett",
    tittel: "8 mm på 400 r/min",
    tekst: "<p>Et bor på 8 mm går på 400 r/min. Bruk π-knappen. Hva er skjærehastigheten i m/min?</p>",
    steg: [{ verdi: 10053.096491487338 }],
    svar: { verdi: 10.053096491487338, enhet: "m/min" },
    hint: ["\\(v_c = \\pi \\cdot d \\cdot n : 1000\\). Glemmer du 1000, blir svaret tusen ganger for stort.", "\\(\\pi \\cdot 8 \\cdot 400 : 1000\\)."],
    losning: "<p>\\(v_c = \\pi \\cdot 8 \\cdot 400 : 1000 = 3{,}2\\pi \\approx 10{,}1\\) m/min.</p>"
  },
  {
    id: "aksel-40",
    niva: "middels",
    tittel: "Aksel på 40 mm",
    tekst: "<p>Du skal dreie en aksel med diameter 40 mm. Tabellen for verktøyet sier 30 m/min. Bruk π-knappen. Hvilket turtall skal spindelen ha?</p>",
    steg: [{ verdi: 30000 }, { verdi: 125.66370614359172 }],
    svar: { verdi: 238.73241463784302, enhet: "r/min" },
    hint: ["Snu formelen: \\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\). Svaret er i r/min. Skjærehastigheten er allerede i m/min.", "\\(n = 1000 \\cdot 30 : (\\pi \\cdot 40)\\)."],
    losning: "<p>\\(n = 30\\,000 : (40\\pi) \\approx 239\\) r/min. Velg nærmeste gir, og ikke et gir som ligger langt over.</p>"
  },
  {
    id: "samme-fart",
    niva: "middels",
    tittel: "Samme skjærehastighet",
    tekst: "<p>Begge verktøyene skal gå med 20 m/min. Bruk π-knappen.</p>",
    deler: [
      { tekst: "Hvilket turtall for diameter 10 mm?", svar: { verdi: 636.6197723675814, enhet: "r/min" } },
      { tekst: "Hvilket turtall for diameter 40 mm?", svar: { verdi: 159.15494309189535, enhet: "r/min" } },
      { tekst: "Hvor mange ganger så høyt turtall trenger den minste diameteren? Skriv tallet.", svar: { verdi: 4 } }
    ],
    steg: [{ verdi: 20000 }],
    hint: ["\\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\). Samme skjærehastighet og fire ganger så liten diameter gir fire ganger så høyt turtall.", "For 10 mm: \\(20\\,000 : (10\\pi)\\)."],
    losning: "<p>10 mm: \\(n = 20\\,000 : (10\\pi) \\approx 637\\) r/min.<br>40 mm: \\(n = 20\\,000 : (40\\pi) \\approx 159\\) r/min.<br>\\(637 : 159 = 4\\). Den lille diameteren må gå fire ganger så fort.</p>"
  },
  {
    id: "bor-32",
    niva: "vanskelig",
    tittel: "8 mm og 32 mm på samme gir",
    tekst: "<p>Begge borene står på 800 r/min. Tabellen sier maks 25 m/min for dette stålet. Bruk π-knappen. Skjærehastighet oppgis i m/min.</p>",
    deler: [
      { tekst: "Hva er skjærehastigheten for 8 mm-boret?", svar: { verdi: 20.106192982974676, enhet: "m/min" } },
      { tekst: "Hva er skjærehastigheten for 32 mm-boret?", svar: { verdi: 80.4247719318987, enhet: "m/min" } },
      { tekst: "Hvilket bor blir for varmt først?", svar: { valg: ["8 mm-boret, det har høyest turtall", "32 mm-boret, det skjærer omtrent fire ganger så fort", "Ingen, begge ligger under 25 m/min"], riktig: 1, forklaring: "8 mm ligger rundt 20 m/min. 32 mm ligger rundt 80 m/min, altså over grensen." } },
      { tekst: "Hvilket turtall bør 32 mm-boret ha når grensen er 25 m/min?", svar: { verdi: 248.67959858108648, enhet: "r/min" } }
    ],
    steg: [{ verdi: 20106.192982974677 }, { verdi: 80424.77193189871 }],
    hint: ["\\(v_c = \\pi \\cdot d \\cdot n : 1000\\). Turtallet er likt, så den største diameteren får høyest skjærehastighet. Nytt turtall: \\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\).", "8 mm: \\(\\pi \\cdot 8 \\cdot 800 : 1000\\). For 32 mm og 25 m/min: \\(25\\,000 : (32\\pi)\\)."],
    losning: "<p>8 mm: \\(6{,}4\\pi \\approx 20{,}1\\) m/min. Det er under 25 m/min.<br>32 mm: \\(25{,}6\\pi \\approx 80{,}4\\) m/min. Det er omtrent fire ganger så fort, og over grensen.<br>Anbefalt turtall: \\(n = 25\\,000 : (32\\pi) \\approx 249\\) r/min.</p>"
  },
  {
    id: "grense-25",
    niva: "vanskelig",
    tittel: "Pinne til Ø25",
    tekst: "<p>Du skal dreie en pinne til Ø25 mm ± 0,5 mm. Emnet er Ø30 mm. Kuttdybde måles på radien, altså halvparten av det som tas av på diameteren.</p>",
    deler: [
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 25.5, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 24.5, enhet: "mm" } },
      { tekst: "Hva er største kuttdybde uten å komme under nedre grensemål?", svar: { verdi: 2.75, enhet: "mm" } }
    ],
    steg: [{ verdi: 5.5, enhet: "mm" }],
    hint: ["Øvre grense er 25 pluss 0,5. Nedre er 25 minus 0,5. Største avvirking på diameteren er emnet minus nedre grense.", "\\(30 - 24{,}5 = 5{,}5\\). Kuttdybden er halvparten."],
    losning: "<p>Øvre 25,5 mm, nedre 24,5 mm.<br>\\((30 - 24{,}5) : 2 = 5{,}5 : 2 = 2{,}75\\) mm.</p>"
  },
  {
    id: "konus-slak",
    niva: "vanskelig",
    tittel: "Konus på 2 grader",
    tekst: "<p>En slak konus har \\(D = 42\\) mm, \\(d = 36\\) mm og \\(L = 87\\) mm. Bruk håndformelen \\(\\alpha \\approx (D - d) \\cdot 29 : L\\). Den gjelder under omtrent 10°.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva blir innstillingsvinkelen? Skriv gradtallet uten enhet.", svar: { verdi: 2 } },
      { tekst: "En kjørner er tegnet med 60° mellom sidene. Hva stiller du toppsleiden på?", svar: { valg: ["30 grader", "60 grader", "90 grader"], riktig: 0, forklaring: "Toppsleiden følger den ene siden, altså halve toppvinkelen." } },
      { tekst: "Kan du bruke håndformelen på en 45° fas?", svar: { valg: ["Ja, 45° er en liten vinkel", "Nei, 45° er for stor for håndformelen", "Ja, hvis du deler 45 på 29"], riktig: 1, forklaring: "Håndformelen er en forenkling for slake konus under omtrent 10°." } }
    ],
    hint: ["Trekk diameterne fra hverandre. Gang med 29 og del på lengden.", "\\(42 - 36 = 6\\). Så \\(6 \\cdot 29 : 87\\)."],
    losning: "<p>\\(42 - 36 = 6\\) mm.<br>\\(\\alpha \\approx 6 \\cdot 29 : 87 = 174 : 87 = 2\\) grader.<br>Kjørneren stilles på 30 grader. En 45° fas er utenfor håndformelen.</p>"
  },
  {
    id: "drei-30",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Turtall før chucken går",
    utstyr: "Dreiebenk, emne Ø30 mm, verktøytabell, vernbriller",
    hms: "Regn ferdig før spindelen startes. Vernbriller. Hår og ermer unna. Ikke hansker inntil chucken. Chucknøkkel ut. Læreren starter.",
    tekst: "<p>Tabellen sier 25 m/min for dette verktøyet i stål. Emnet er 30 mm. Hvilket turtall regner du deg fram til? Bruk π-knappen, og velg nærmeste gir etterpå.</p>",
    steg: [{ verdi: 25000 }, { verdi: 94.24777960769379 }],
    svar: { verdi: 265.25823848649225, enhet: "r/min" },
    hint: ["\\(n = 1000 \\cdot v_c : (\\pi \\cdot d)\\). 25 m/min er skjærehastighet, ikke turtall.", "\\(1000 \\cdot 25 : (\\pi \\cdot 30)\\)."],
    losning: "<p>\\(n = 25\\,000 : (30\\pi) \\approx 265\\) r/min. Velg nærmeste gir som ikke ligger langt over.</p>"
  },
  {
    id: "eksamen-314",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et emne med diameter 100 mm går på 100 r/min. Bruk 3,14 for π. Skjærehastigheten er \\(v_c = \\pi \\cdot d \\cdot n : 1000\\).</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er skjærehastigheten?", svar: { verdi: 31.4, enhet: "m/min", tol: 0.02 } },
      { tekst: "Hvilken enhet har skjærehastigheten?", svar: { valg: ["r/min", "m/min", "mm"], riktig: 1, forklaring: "Turtall er r/min. Skjærehastighet er meter per minutt." } }
    ],
    hint: ["Gang 3,14 med diameter og turtall, og del på 1000. Svaret er ikke et turtall.", "\\(3{,}14 \\cdot 100 \\cdot 100 = 31\\,400\\). Del på 1000."],
    losning: "<p>\\(v_c = 3{,}14 \\cdot 100 \\cdot 100 : 1000 = 31{,}4\\) m/min.<br>31,4 r/min ville vært feil enhet. Uten deling på 1000 blir svaret 31 400, og det er motorveifart for kanten på emnet.</p>"
  }
]);
