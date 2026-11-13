Bok.oppgaver([
  {
    id: "sikker-gange",
    niva: "lett",
    tittel: "Sikker start",
    tekst: "<p>Uten kalkulator. Denne skal alle få til før øvingsprøven: \\(4{,}5 \\cdot 100\\).</p>",
    stegForSteg: false,
    svar: { verdi: 450 },
    hint: ["100 har to nuller. Kommaet flyttes to plasser til høyre.", "\\(4{,}5 \\cdot 100 = 450\\)."],
    losning: "<p>\\(4{,}5 \\cdot 100 = 450\\).</p>"
  },
  {
    id: "sikker-prosent",
    niva: "lett",
    tittel: "Sikker start, prosent",
    tekst: "<p>Uten kalkulator. Hva er 10 % av 250 kr?</p>",
    svar: { verdi: 25, enhet: "kr" },
    hint: ["10 % er det samme som å dele på 10.", "\\(250 / 10 = 25\\) kr."],
    losning: "<p>\\(250 / 10 = 25\\) kr.</p>"
  },
  {
    id: "ohm-sjekk",
    niva: "middels",
    tittel: "Strøm",
    tekst: "<p>En varmeovn i skapet står på 12 V og har motstand 6 Ω. Hvor stor er strømmen?</p>",
    svar: { verdi: 2, enhet: "A" },
    hint: ["\\(I = U / R\\), ikke \\(R / U\\).", "\\(12 / 6 = 2\\) A."],
    losning: "<p>\\(I = 12 / 6 = 2\\) A. En sikring på 10 A tåler denne strømmen.</p>"
  },
  {
    id: "desimaltimer",
    niva: "middels",
    tittel: "Desimaltimer",
    tekst: "<p>En jobb tar 2,4 timer.</p>",
    deler: [
      { tekst: "Hvor mange minutter er 2,4 timer?", svar: { verdi: 144, enhet: "min" } },
      { tekst: "Hvor mange minutter er det i tillegg til de 2 hele timene?", svar: { verdi: 24, enhet: "min" } }
    ],
    hint: ["Gang desimaltimene med 60. 0,4 timer er ikke 40 minutter.", "\\(2{,}4 \\cdot 60 = 144\\). Av det er \\(0{,}4 \\cdot 60 = 24\\) minutter over 2 timer."],
    losning: "<p>a) \\(2{,}4 \\cdot 60 = 144\\) minutter<br>b) \\(0{,}4 \\cdot 60 = 24\\) minutter. Altså 2 timer og 24 minutter, ikke 2 timer og 40 minutter.</p>"
  },
  {
    id: "malestokk-volum",
    niva: "vanskelig",
    tittel: "Målestokk-fellen",
    tekst: "<p>En oljetank rommer 48 liter. Du lager en modell i målestokk 1:10. Hvor mange milliliter rommer modellen?</p>",
    steg: [{ verdi: 1000 }, { verdi: 0.048, enhet: "L" }],
    svar: { verdi: 48, enhet: "ml" },
    hint: ["Lengdeskala 1:10 betyr at volumet skaleres med \\(10^3 = 1000\\).", "\\(48 / 1000 = 0{,}048\\) L. 1 L = 1000 ml."],
    losning: "<p>Volumskalaen er \\(1/1000\\).<br>\\(48 / 1000 = 0{,}048\\) L \\(= 48\\) ml.<br>Hadde du delt på 10, hadde du fått 4,8 L. Det er målestokk-fellen.</p>"
  },
  {
    id: "mal-kasse",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Mål en kasse",
    utstyr: "Målebånd og en kasse, bøtte eller oljekanne. Bruk målene under hvis du ikke har en kasse.",
    hms: "Tørk opp søl. Ingen åpen flamme ved olje.",
    tekst: "<p>Innvendig mål på en kasse: 250 mm × 150 mm × 100 mm. Regn ut volumet i liter. Mål gjerne en ekte kasse og gjør det samme med dine egne tall.</p>",
    steg: [{ verdi: 2.5, enhet: "dm" }, { verdi: 1.5, enhet: "dm" }],
    svar: { verdi: 3.75, enhet: "L" },
    hint: ["1 dm³ = 1 L. Gjør sidene om til dm først. 100 mm = 1 dm.", "\\(2{,}5 \\cdot 1{,}5 \\cdot 1 = 3{,}75\\) dm³."],
    losning: "<p>\\(250\\) mm \\(= 2{,}5\\) dm, \\(150\\) mm \\(= 1{,}5\\) dm, \\(100\\) mm \\(= 1\\) dm.<br>\\(2{,}5 \\cdot 1{,}5 \\cdot 1 = 3{,}75\\) L.</p>"
  },
  {
    id: "repetisjon-utveksling",
    type: "repetisjon",
    fra: "kapittel 5",
    niva: "middels",
    tekst: "<p>Søyleboremaskinen går med 1200 r/min. Reimskivene er 60 mm og 180 mm. \\(n_1 \\cdot d_1 = n_2 \\cdot d_2\\). Hva blir turtallet på den store skiva?</p>",
    svar: { verdi: 400, enhet: "r/min" },
    hint: ["Stor skive gir lavere turtall. \\(n_2 = n_1 \\cdot d_1 / d_2\\).", "\\(1200 \\cdot 60 / 180\\)."],
    losning: "<p>\\(n_2 = 1200 \\cdot 60 / 180 = 400\\) r/min. 180 er tre ganger 60, så turtallet blir en tredel.</p>"
  },
  {
    id: "repetisjon-diagonal",
    type: "repetisjon",
    fra: "kapittel 6",
    niva: "lett",
    tekst: "<p>En sveiset ramme er 60 cm på den ene siden og 80 cm på den andre. Hvor lang er diagonalen hvis hjørnet er rett? Bruk 3-4-5.</p>",
    svar: { verdi: 100, enhet: "cm" },
    hint: ["3-4-5 kan ganges med 20. 3 · 20 = 60 og 4 · 20 = 80.", "Diagonalen er \\(5 \\cdot 20\\) cm."],
    losning: "<p>\\(60\\) og \\(80\\) er \\(3 \\cdot 20\\) og \\(4 \\cdot 20\\). Diagonalen er \\(5 \\cdot 20 = 100\\) cm.</p>"
  },
  {
    id: "del1-enheter",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Del 1 · Oppgave 1",
    tekst: "<p>Uten kalkulator. Gjør om enhetene.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "2,4 m i millimeter", svar: { verdi: 2400, enhet: "mm" } },
      { tekst: "3500 g i kilogram", svar: { verdi: 3.5, enhet: "kg" } },
      { tekst: "0,5 timer i minutter", svar: { verdi: 30, enhet: "min" } }
    ],
    hint: ["1 m = 1000 mm. 1 kg = 1000 g. 1 time = 60 minutter.", "a) Gang med 1000. b) Del med 1000. c) Halvparten av 60."],
    losning: "<p>a) \\(2{,}4 \\cdot 1000 = 2400\\) mm<br>b) \\(3500 / 1000 = 3{,}5\\) kg<br>c) \\(0{,}5 \\cdot 60 = 30\\) minutter</p>"
  },
  {
    id: "del1-formel",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Del 1 · Oppgave 2",
    tekst: "<p>Uten kalkulator. Verkstedet leier ut en tilhenger. Det koster 200 kr å hente den, og 80 kr per time etter det.</p>",
    deler: [
      { tekst: "Hva koster det å leie tilhengeren i 3 timer?", svar: { verdi: 440, enhet: "kr" } },
      { tekst: "En kunde betalte 600 kr. Hvor mange timer var leien?", svar: { verdi: 5, enhet: "h" } },
      {
        tekst: "Hvilken formel gir prisen \\(P\\) kr for \\(x\\) timer?",
        svar: {
          valg: ["P = 200 + 80x", "P = 200 · 80 · x", "P = 80 + 200x", "P = 200 · x + 80"],
          riktig: 0,
          forklaring: "200 kr er et fast beløp. 80 kr kommer i tillegg per time."
        }
      }
    ],
    hint: ["Det faste beløpet betales én gang. Timeprisen ganges med antall timer.", "a) \\(200 + 3 \\cdot 80\\). b) Trekk fra 200, og del resten på 80."],
    losning: "<p>a) \\(200 + 3 \\cdot 80 = 440\\) kr<br>b) \\((600 - 200) / 80 = 5\\) timer<br>c) \\(P = 200 + 80x\\). De andre formlene ganger beløpene eller bytter om hva som er fast.</p>"
  },
  {
    id: "del1-prosent",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Del 1 · Oppgave 3",
    tekst: "<p>Uten kalkulator. En bormaskin koster 400 kr i butikken og 500 kr på nett.</p>",
    deler: [
      { tekst: "Hvor mange prosent dyrere er nettprisen enn butikkprisen?", svar: { verdi: 25, enhet: "%" } },
      { tekst: "Hvor mange prosent billigere er butikkprisen enn nettprisen?", svar: { verdi: 20, enhet: "%" } },
      {
        tekst: "Hvorfor er de to prosenttallene ulike?",
        svar: {
          valg: ["Vi deler på to ulike helheter", "Det ene er rabatt og det andre er mva", "Kalkulatoren runder ulikt"],
          riktig: 0,
          forklaring: "25 % er regnet av 400 kr. 20 % er regnet av 500 kr."
        }
      }
    ],
    hint: ["Prosentendring: differanse delt på den prisen du sammenligner med, ganger 100.", "Differansen er 100 kr. a) Del på 400. b) Del på 500."],
    losning: "<p>a) \\(100 / 400 \\cdot 100 = 25\\,\\%\\)<br>b) \\(100 / 500 \\cdot 100 = 20\\,\\%\\)<br>c) Begge er rette, fordi helheten er ulik. 100 kr av 400 kr er ikke samme prosent som 100 kr av 500 kr.</p>"
  },
  {
    id: "del1-tetthet",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "vanskelig",
    tittel: "Del 1 · Oppgave 4",
    tekst: "<p>Uten kalkulator. En ferdig aksel har diameter 18,4 mm. Volumet er 20 cm³, og massen er 54 g.</p><p>Massetetthet: aluminium 2,7 g/cm³, stål 7,8 g/cm³, messing 8,5 g/cm³.</p>",
    deler: [
      { tekst: "Hva er radiusen?", svar: { verdi: 9.2, enhet: "mm" } },
      { tekst: "Hva er massetettheten?", svar: { verdi: 2.7, enhet: "g/cm³" } },
      {
        tekst: "Hvilket metall er det?",
        svar: {
          valg: ["aluminium", "stål", "messing"],
          riktig: 0,
          forklaring: "2,7 g/cm³ er aluminium."
        }
      }
    ],
    hint: ["Radius er halvparten av diameteren. Massetetthet er masse delt på volum.", "\\(18{,}4 / 2\\). Og \\(54 / 20\\)."],
    losning: "<p>a) \\(18{,}4 / 2 = 9{,}2\\) mm<br>b) \\(54 / 20 = 2{,}7\\) g/cm³<br>c) Aluminium. Stål og messing er mye tyngre.</p>"
  },
  {
    id: "del2-plate",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tittel: "Del 2 · Oppgave 1",
    tekst: "<p>En aluminiumsplate er 80 cm lang og 45 cm bred. I midten bores et hull med diameter 14 cm.</p>",
    deler: [
      { tekst: "Hvor stort er arealet av hullet? Avrund til én desimal.", svar: { verdi: 153.9, enhet: "cm²", tol: 0.5 } },
      { tekst: "Hvor mange prosent av plata er boret bort? Avrund til én desimal.", svar: { verdi: 4.3, enhet: "%", tol: 0.15 } }
    ],
    hint: ["Radius er 7 cm. Arealet av en sirkel er \\(\\pi r^2\\). Plata er lengde ganger bredde.", "Hullet: \\(\\pi \\cdot 7^2\\). Plata: \\(80 \\cdot 45 = 3600\\) cm². Del hullet på plata og gang med 100."],
    losning: "<p>a) \\(\\pi \\cdot 7^2 = 49\\pi \\approx 153{,}9\\) cm²<br>b) Plata er \\(80 \\cdot 45 = 3600\\) cm². \\(153{,}9 / 3600 \\cdot 100 \\approx 4{,}3\\,\\%\\). Et lite hull i en stor plate.</p>"
  },
  {
    id: "del2-tank",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tittel: "Del 2 · Oppgave 2",
    tekst: "<p>En tank for skjæreolje er innvendig 600 mm lang, 400 mm bred og 200 mm høy. Pumpa flytter 0,5 liter per omdreining og går med 120 r/min.</p>",
    deler: [
      { tekst: "Hvor mange liter rommer tanken?", svar: { verdi: 48, enhet: "L" } },
      { tekst: "Hvor mange omdreininger trengs for å tømme tanken?", svar: { verdi: 96, enhet: "stk" } },
      { tekst: "Hvor mange sekunder tar det å tømme tanken?", svar: { verdi: 48, enhet: "s" } }
    ],
    hint: ["Gjør sidene om til dm. 1 dm³ = 1 L. Deretter deler du liter på 0,5.", "\\(6 \\cdot 4 \\cdot 2\\). Tid: antall omdreininger delt på 120 r/min, og så om til sekunder."],
    losning: "<p>a) \\(6 \\cdot 4 \\cdot 2 = 48\\) dm³ \\(= 48\\) L<br>b) \\(48 / 0{,}5 = 96\\) omdreininger<br>c) \\(96 / 120 = 0{,}8\\) min \\(= 0{,}8 \\cdot 60 = 48\\) s</p>"
  },
  {
    id: "del2-lonn",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tittel: "Del 2 · Oppgave 3",
    tekst: "<p>En lærling har 180 kr i timen. I en uke er det 35 timer på hverdager og 4 timer på lørdag. Lørdagstillegget er 50 %, så lørdagstimen er 180 kr pluss halvparten. Skattetrekket er 30 % av bruttolønna.</p>",
    deler: [
      { tekst: "Hva er timelønna på lørdag?", svar: { verdi: 270, enhet: "kr" } },
      { tekst: "Hva er bruttolønna for uka?", svar: { verdi: 7380, enhet: "kr" } },
      { tekst: "Hva blir utbetalt etter skatt?", svar: { verdi: 5166, enhet: "kr" } }
    ],
    hint: ["50 % tillegg betyr at lørdagstimen er 1,5 ganger hverdagstimen. Regn hverdag og lørdag hver for seg.", "Lørdag: \\(180 \\cdot 1{,}5\\). Brutto: \\(35 \\cdot 180 + 4 \\cdot 270\\). Utbetalt er 70 % av brutto."],
    losning: "<p>a) \\(180 \\cdot 1{,}5 = 270\\) kr<br>b) \\(35 \\cdot 180 = 6300\\) kr, og \\(4 \\cdot 270 = 1080\\) kr. Til sammen \\(7380\\) kr.<br>c) Skatt: \\(7380 \\cdot 0{,}30 = 2214\\) kr. Utbetalt: \\(7380 - 2214 = 5166\\) kr.</p>"
  },
  {
    id: "del2-fart",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tittel: "Del 2 · Oppgave 4",
    tekst: "<p>Servicebilen har kilometerstand 84 210 km klokka 08:10 og 84 246 km klokka 08:55.</p>",
    deler: [
      { tekst: "Hvor lang er turen?", svar: { verdi: 36, enhet: "km" } },
      { tekst: "Hvor mange timer tar turen, som desimaltall?", svar: { verdi: 0.75, enhet: "h" } },
      { tekst: "Hva er gjennomsnittsfarten?", svar: { verdi: 48, enhet: "km/h" } }
    ],
    hint: ["Trekk kilometerstandene fra hverandre. 45 minutter er 45/60 timer.", "\\(84246 - 84210\\). Tida er \\(45 / 60\\) timer. Fart er strekning delt på tid."],
    losning: "<p>a) \\(84\\,246 - 84\\,210 = 36\\) km<br>b) 45 min \\(= 45 / 60 = 0{,}75\\) timer<br>c) \\(36 / 0{,}75 = 48\\) km/h. Det er en rolig fart i byen, så svaret er rimelig.</p>"
  },
  {
    id: "del1-nuller",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Del 1 · Flytt komma",
    tekst: "<p>Uten kalkulator.</p>",
    steg: [{ verdi: 2.5 }, { verdi: 1000 }, { verdi: 48 }],
    deler: [
      { tekst: "\\(2{,}5 \\cdot 1000\\)", svar: { verdi: 2500 } },
      { tekst: "\\(4800 / 100\\)", svar: { verdi: 48 } },
      { tekst: "\\(0{,}07 \\cdot 100\\)", svar: { verdi: 7 } }
    ],
    hint: ["Tell nullene. Gange med 100 eller 1000 flytter kommaet til høyre. Dele med 100 flytter det til venstre.", "a) Tre plasser til høyre. b) To plasser til venstre. c) To plasser til høyre."],
    losning: "<p>a) \\(2{,}5 \\cdot 1000 = 2500\\)<br>b) \\(4800 / 100 = 48\\)<br>c) \\(0{,}07 \\cdot 100 = 7\\)</p>"
  },
  {
    id: "del1-prosent-av",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Del 1 · Prosent av",
    tekst: "<p>Uten kalkulator.</p>",
    steg: [{ verdi: 35, enhet: "kr" }, { verdi: 20, enhet: "kr" }],
    deler: [
      { tekst: "Hva er 20 % av 350 kr?", svar: { verdi: 70, enhet: "kr" } },
      { tekst: "Hva er 15 % av 200 kr?", svar: { verdi: 30, enhet: "kr" } }
    ],
    hint: ["10 % er tallet delt på 10. 20 % er det dobbelte. 15 % er 10 % pluss halvparten av 10 %.", "a) 10 % av 350 er 35, så 20 % er 70. b) 10 % av 200 er 20, og 5 % er 10."],
    losning: "<p>a) \\(350 \\cdot 0{,}20 = 70\\) kr<br>b) \\(200 \\cdot 0{,}15 = 30\\) kr</p>"
  },
  {
    id: "jordpunkt",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Rustent jordpunkt",
    utstyr: "Multimeter, eller tallene under",
    hms: "Mål på et kretskort eller en ledning som er koblet fra. Ikke mål på en krets som står på, med mindre læreren står ved siden av.",
    tekst: "<p>Et rustent jordpunkt har motstand 2,5 Ω. Strømmen gjennom punktet er 2 A. Batteriet er 12 V. Spenningsfall er \\(U = R \\cdot I\\).</p>",
    steg: [{ verdi: 2.5, enhet: "Ω" }, { verdi: 2, enhet: "A" }],
    deler: [
      { tekst: "Hvor stort er spenningsfallet over jordpunktet?", svar: { verdi: 5, enhet: "V" } },
      { tekst: "Hvor mange volt er igjen til lampa?", svar: { verdi: 7, enhet: "V" } }
    ],
    hint: ["Spenningsfall er motstand ganger strøm. Det som er igjen til lampa, er batterispenningen minus fallet.", "\\(2{,}5 \\cdot 2 = 5\\) V. Deretter \\(12 - 5\\)."],
    losning: "<p>a) \\(U = 2{,}5 \\cdot 2 = 5\\) V<br>b) \\(12 - 5 = 7\\) V<br>Lampa får bare 7 V av 12 V. Den lyser svakt til jordpunktet er rengjort.</p>"
  },
  {
    id: "reim-dreiing",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Reimskiver på dreiebenken",
    utstyr: "Målebånd eller skyvelære til skivene. Maskinen står av.",
    hms: "Ta ikke i reima mens maskinen kan starte. Lås fra strømmen hvis du skal måle på skivene.",
    tekst: "<p>Motoren går med 1400 r/min. Reimskiva på motoren er 80 mm, og skiva på spindelen er 160 mm. \\(n_1 \\cdot d_1 = n_2 \\cdot d_2\\).</p>",
    steg: [{ verdi: 80, enhet: "mm" }, { verdi: 160, enhet: "mm" }],
    svar: { verdi: 700, enhet: "r/min" },
    hint: ["Stor skive gir lavere turtall. \\(n_2 = n_1 \\cdot d_1 / d_2\\).", "\\(1400 \\cdot 80 / 160\\). 160 er dobbelt så stor som 80."],
    losning: "<p>\\(n_2 = 1400 \\cdot 80 / 160 = 700\\) r/min. Spindelen går med halvparten av motorturtallet.</p>"
  },
  {
    id: "vekst-nokkel",
    niva: "middels",
    tittel: "Ti prosent opp og ned",
    tekst: "<p>En muttertrekker koster 2000 kr. Prisen stiger med 10 %, og faller deretter med 10 %.</p>",
    steg: [{ verdi: 200, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster den etter oppgangen?", svar: { verdi: 2200, enhet: "kr" } },
      { tekst: "Hva koster den etter nedgangen?", svar: { verdi: 1980, enhet: "kr" } },
      {
        tekst: "Hvorfor er prisen ikke 2000 kr igjen?",
        svar: {
          valg: ["10 % regnes av to ulike beløp", "Mva er trukket fra", "Kalkulatoren runder feil"],
          riktig: 0,
          forklaring: "Oppgangen er 10 % av 2000 kr. Nedgangen er 10 % av 2200 kr, og det er et større beløp."
        }
      }
    ],
    hint: ["Vekstfaktor 1,10 opp, deretter 0,90 ned. De to prosentene har ulik helhet.", "\\(2000 \\cdot 1{,}10\\). Deretter ganger du med 0,90."],
    losning: "<p>a) \\(2000 \\cdot 1{,}10 = 2200\\) kr<br>b) \\(2200 \\cdot 0{,}90 = 1980\\) kr<br>c) 10 % av 2200 kr er 220 kr, mens 10 % av 2000 kr er 200 kr. Prisen lander 20 kr under start.</p>"
  },
  {
    id: "tank-reserve",
    type: "verksted",
    niva: "vanskelig",
    merke: "V",
    tittel: "Tømmetid og reserve",
    utstyr: "Målebeger og en kanne merket med liter, eller tallene under",
    hms: "Tørk opp søl. Ingen åpen flamme ved olje.",
    tekst: "<p>En oljetank rommer 30 liter. Pumpa flytter 1,5 liter per minutt. Dere skal alltid ha 30 % av tanken igjen som reserve.</p>",
    steg: [{ verdi: 1.5, enhet: "L/min" }, { verdi: 9, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange minutter tar det å tømme hele tanken?", svar: { verdi: 20, enhet: "min" } },
      { tekst: "Hvor mange liter er reserven på 30 %?", svar: { verdi: 9, enhet: "L" } },
      { tekst: "Hvor mange minutter kan pumpa gå før bare reserven er igjen?", svar: { verdi: 14, enhet: "min" } }
    ],
    hint: ["Tid er liter delt på liter per minutt. Reserven er 30 % av 30 liter. Du kan bruke resten.", "\\(30 / 1{,}5\\). Reserven: \\(0{,}30 \\cdot 30\\). Brukbart volum: \\(30 - 9\\)."],
    losning: "<p>a) \\(30 / 1{,}5 = 20\\) min<br>b) \\(0{,}30 \\cdot 30 = 9\\) L<br>c) Brukbart volum er \\(30 - 9 = 21\\) L. \\(21 / 1{,}5 = 14\\) min</p>"
  },
  {
    id: "bolt-sikker",
    niva: "vanskelig",
    tittel: "Når er du sikker?",
    tekst: "<p>Bolter skal være \\(45{,}0 \\pm 0{,}3\\) mm. Måleverktøyet har usikkerhet \\(\\pm 0{,}1\\) mm. Du kan bare godkjenne en bolt når hele usikkerhetsintervallet ligger innenfor grensemålene.</p>",
    steg: [{ verdi: 44.7, enhet: "mm" }, { verdi: 45.3, enhet: "mm" }],
    deler: [
      { tekst: "Hva er minste grensemål?", svar: { verdi: 44.7, enhet: "mm" } },
      { tekst: "Hva er største grensemål?", svar: { verdi: 45.3, enhet: "mm" } },
      { tekst: "Hva er det høyeste målet du kan godkjenne og fortsatt være sikker?", svar: { verdi: 45.2, enhet: "mm" } }
    ],
    hint: ["Trekk og legg til toleransen først. Verktøyet kan vise 0,1 mm for høyt, så det høyeste sikre målet ligger 0,1 mm under største grensemål.", "Største grensemål er 45,3 mm. \\(45{,}3 - 0{,}1\\)."],
    losning: "<p>a) \\(45{,}0 - 0{,}3 = 44{,}7\\) mm<br>b) \\(45{,}0 + 0{,}3 = 45{,}3\\) mm<br>c) \\(45{,}3 - 0{,}1 = 45{,}2\\) mm. Måler du 45,2 mm, kan sann verdi være fra 45,1 mm til 45,3 mm. Alt det er innenfor. Måler du 45,3 mm, kan sann verdi være 45,4 mm, og da er du ikke sikker.</p>"
  },
  {
    id: "del2-dor",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tittel: "Del 2 · Maling på en dør",
    tekst: "<p>En dør er 1,5 m høy og 0,8 m bred. Den skal ha to strøk. Malingen dekker 6 m² per liter og koster 180 kr per liter.</p>",
    steg: [{ verdi: 1.2, enhet: "m²" }],
    deler: [
      { tekst: "Hvor stort er arealet?", svar: { verdi: 1.2, enhet: "m²" } },
      { tekst: "Hvor mange liter går med?", svar: { verdi: 0.4, enhet: "L" } },
      { tekst: "Hva koster malingen?", svar: { verdi: 72, enhet: "kr" } }
    ],
    hint: ["Areal er høyde ganger bredde. To strøk betyr at du maler arealet to ganger. Del det på dekkevnen.", "\\(1{,}5 \\cdot 0{,}8\\). Liter: \\(1{,}2 \\cdot 2 / 6\\). Pris: liter ganger 180."],
    losning: "<p>a) \\(1{,}5 \\cdot 0{,}8 = 1{,}2\\) m²<br>b) \\(1{,}2 \\cdot 2 / 6 = 0{,}4\\) L<br>c) \\(0{,}4 \\cdot 180 = 72\\) kr</p>"
  },
  {
    id: "del2-tur",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tittel: "Del 2 · Kort tur",
    tekst: "<p>Servicebilen har kilometerstand 12 480 km klokka 07:20 og 12 510 km klokka 07:50.</p>",
    steg: [{ verdi: 30, enhet: "min" }],
    deler: [
      { tekst: "Hvor lang er turen?", svar: { verdi: 30, enhet: "km" } },
      { tekst: "Hvor mange timer tar turen, som desimaltall?", svar: { verdi: 0.5, enhet: "h" } },
      { tekst: "Hva er gjennomsnittsfarten?", svar: { verdi: 60, enhet: "km/h" } }
    ],
    hint: ["Trekk kilometerstandene fra hverandre. 30 minutter er en halv time. Fart er strekning delt på tid.", "\\(12\\,510 - 12\\,480\\). Tida er \\(30 / 60\\) timer."],
    losning: "<p>a) \\(12\\,510 - 12\\,480 = 30\\) km<br>b) 30 min \\(= 0{,}5\\) timer<br>c) \\(30 / 0{,}5 = 60\\) km/h</p>"
  },
  {
    id: "del2-spare",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tittel: "Del 2 · Spare i ti måneder",
    tekst: "<p>Du setter inn 1500 kr hver måned i 10 måneder. Etter den siste innbetalingen får du 2 % rente én gang, regnet av hele beløpet.</p>",
    steg: [{ verdi: 1500, enhet: "kr" }, { verdi: 10 }],
    deler: [
      { tekst: "Hvor mye har du satt inn?", svar: { verdi: 15000, enhet: "kr" } },
      { tekst: "Hvor mange kroner er renta?", svar: { verdi: 300, enhet: "kr" } },
      { tekst: "Hvor mye står på kontoen etter renta?", svar: { verdi: 15300, enhet: "kr" } }
    ],
    hint: ["Gang månedsbeløpet med antall måneder. Renta er 2 % av det innskuddet. Legg renta oppå.", "\\(1500 \\cdot 10\\). Rente: \\(15\\,000 \\cdot 0{,}02\\)."],
    losning: "<p>a) \\(1500 \\cdot 10 = 15\\,000\\) kr<br>b) \\(15\\,000 \\cdot 0{,}02 = 300\\) kr<br>c) \\(15\\,000 + 300 = 15\\,300\\) kr<br>Her kommer renta én gang til slutt, ikke hver måned.</p>"
  },
  {
    id: "del1-kompressorleie",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tittel: "Del 1 · Leie av kompressor",
    tekst: "<p>Uten kalkulator. Det koster 100 kr å hente kompressoren, og 50 kr per time etter det. \\(P\\) er prisen i kroner, og \\(h\\) er antall timer.</p>",
    steg: [{ verdi: 300, enhet: "kr" }, { verdi: 250, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster det å leie i 6 timer?", svar: { verdi: 400, enhet: "kr" } },
      { tekst: "En kunde betalte 350 kr. Hvor mange timer var leien?", svar: { verdi: 5, enhet: "h" } },
      {
        tekst: "Hvilken formel gir prisen?",
        svar: {
          valg: ["P = 100 + 50h", "P = 100 · 50 · h", "P = 50 + 100h", "P = 100 · h + 50"],
          riktig: 0,
          forklaring: "100 kr betales én gang. 50 kr kommer i tillegg per time."
        }
      }
    ],
    hint: ["Det faste beløpet betales én gang. Timeprisen ganges med antall timer.", "a) \\(100 + 6 \\cdot 50\\). b) Trekk fra 100, og del resten på 50."],
    losning: "<p>a) \\(100 + 6 \\cdot 50 = 400\\) kr<br>b) \\((350 - 100) / 50 = 5\\) timer<br>c) \\(P = 100 + 50h\\)</p>"
  },
  {
    id: "slipeskive",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "vanskelig",
    tittel: "Del 2 · Slipeskive",
    tekst: "<p>En slipeskive har diameter 115 mm og går med 10 000 r/min. Formelen \\(v_c = \\pi \\cdot d \\cdot n / 1000\\) gir meter per minutt. Del på 60 for å få meter per sekund. Største tillatte fart er 80 m/s.</p>",
    steg: [{ verdi: 1150 }, { verdi: 60 }],
    deler: [
      { tekst: "Hvilken fart har skiva, i m/s? Én desimal.", svar: { verdi: 60.2, enhet: "m/s", tol: 0.15 } },
      { tekst: "Hvor stor kan diameteren høyst være ved 10 000 r/min hvis farten skal være 80 m/s? Én desimal.", svar: { verdi: 152.8, enhet: "mm", tol: 0.1 } }
    ],
    hint: ["Regn først m/min, og del på 60. For diameteren snur du formelen og setter farten til 80 m/s.", "a) \\(\\pi \\cdot 115 \\cdot 10\\,000 / 1000 / 60\\). b) \\(d = 80 \\cdot 60 \\cdot 1000 / (\\pi \\cdot 10\\,000)\\)."],
    losning: "<p>a) \\(v_c = \\pi \\cdot 115 \\cdot 10\\,000 / 1000 \\approx 3613\\) m/min. \\(3613 / 60 \\approx 60{,}2\\) m/s. Det er under 80 m/s, så skiva kan brukes.<br>b) \\(80 = \\pi \\cdot d \\cdot 10\\,000 / 60\\,000\\), så \\(d = 480 / \\pi \\approx 152{,}8\\) mm.</p>"
  }
]);
