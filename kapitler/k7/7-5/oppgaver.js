Bok.oppgaver([
  {
    id: "en-maned",
    niva: "lett",
    tittel: "Én måned",
    tekst: "<p>Gjelden er 20 000 kr. Renta er 1,8 % denne måneden. Hvor mange kroner er renta?</p>",
    svar: { verdi: 360, enhet: "kr", tol: 0.5 },
    hint: ["1,8 % = 0,018.", "\\(20\\,000 \\cdot 0{,}018 = 360\\)."],
    losning: "<p>\\(20\\,000 \\cdot 0{,}018 = 360\\) kr.</p>"
  },
  {
    id: "nominell",
    niva: "lett",
    tekst: "<p>1,8 % per måned i 12 måneder, uten å regne rentesrente. Hvor mange prosent blir det på ett år?</p>",
    svar: { verdi: 21.6, enhet: "%", tol: 0.05 },
    hint: ["Gang månedsrenta med 12.", "\\(1{,}8 \\cdot 12 = 21{,}6\\)."],
    losning: "<p>\\(1{,}8 \\cdot 12 = 21{,}6\\,\\%\\). Med rentesrente blir den høyere, omtrent 23,9 %.</p>"
  },
  {
    id: "betalt-i-tide",
    niva: "lett",
    tekst: "<p>Du kjøper for 20 000 kr og betaler hele beløpet innen forfall i den rentefrie måneden. Hvor mange kroner er renta?</p>",
    svar: { verdi: 0, enhet: "kr", tol: 0 },
    hint: ["Rentefri betyr 0 kr i rente, men bare ved full betaling.", "Svaret er 0."],
    losning: "<p>0 kr. Hele beløpet er betalt før renta starter.</p>"
  },
  {
    id: "halvt-ar",
    niva: "middels",
    tekst: "<p>Etter den rentefrie måneden står 20 000 kr igjen i fem måneder. Vekstfaktoren er 1,093299. Du betaler ingenting i mellomtida.</p>",
    deler: [
      { tekst: "Hva er saldoen etter fem måneder?", svar: { verdi: 21865.98, enhet: "kr", tol: 0.02 } },
      { tekst: "Hvor mange kroner er renta?", svar: { verdi: 1865.98, enhet: "kr", tol: 0.02 } }
    ],
    hint: ["Gang 20 000 med 1,093299.", "Renta er saldoen minus 20 000."],
    losning: "<p>\\(20\\,000 \\cdot 1{,}093299 = 21\\,865{,}98\\) kr.<br>Rente: \\(1\\,865{,}98\\) kr, omtrent 1 866 kr.</p>"
  },
  {
    id: "betal-2000",
    niva: "middels",
    tekst: "<p>Gjelden er 20 000 kr. Renta denne måneden er 360 kr. Deretter betaler du 2 000 kr.</p>",
    svar: { verdi: 18360, enhet: "kr", tol: 0.5 },
    hint: ["Legg til renta først, trekk fra innbetalingen etterpå.", "\\(20\\,000 + 360 - 2\\,000 = 18\\,360\\)."],
    losning: "<p>\\(20\\,360 - 2\\,000 = 18\\,360\\) kr.</p>"
  },
  {
    id: "minste",
    niva: "middels",
    tekst: "<p>Renta er 360 kr, og du betaler nøyaktig 360 kr. Hva er gjelden rett etterpå?</p>",
    svar: { verdi: 20000, enhet: "kr", tol: 0.5 },
    hint: ["Innbetalingen dekker bare renta.", "\\(20\\,000 + 360 - 360 = 20\\,000\\)."],
    losning: "<p>\\(20\\,000\\) kr. Gjelden står stille. Neste måned kommer ny rente.</p>"
  },
  {
    id: "effektiv",
    niva: "vanskelig",
    tittel: "Hvilken rente er det egentlig?",
    tekst: "<p>\((1{,}018)^{12} - 1 \approx 0{,}239\). Det er omtrent 23,9 % per år. Billånet i 7.4 har 6 % per år. Forbrukslånet har 15 % per år.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hvilken årsrente passer på kredittkortet med rentesrente?", svar: { valg: ["1,8 %", "6 %", "15 %", "omtrent 23,9 %"], riktig: 3 } },
      { tekst: "Du skal låne til bilen i fire år. Hvilket valg har lavest rente av disse tre?", svar: { valg: ["Kredittkort, omtrent 23,9 %", "Forbrukslån 15 %", "Billån 6 %"], riktig: 2 } }
    ],
    hint: ["1,8 % er månedsrenta, ikke årsrenta.", "Lavest prosent av de tre er billånet."],
    losning: "<p>Med rentesrente er kortet omtrent 23,9 % per år. Av de tre er billån til 6 % lavest rente. Kredittkort til en bil i fire år blir dyrt.</p>"
  },
  {
    id: "verktoy-kort",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Verktøysettet i katalogen",
    utstyr: "Kalkulator og en verktøykatalog eller prislisten under",
    hms: "Ikke legg inn kortnummer. Sammenlign priser på papir.",
    tekst: "<p>Settet koster 8 400 kr kontant. På kreditt er første måned rentefri. Deretter er vekstfaktoren for fem måneder 1,093299, samme rente som i teorien.</p>",
    deler: [
      { tekst: "Hva er renta den første måneden du ikke betaler? Renta er 1,8 %.", svar: { verdi: 151.2, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er saldoen etter fem rentemåneder?", svar: { verdi: 9183.71, enhet: "kr", tol: 0.02 } },
      { tekst: "Hvor mye dyrere enn kontantpris er det, i kroner?", svar: { verdi: 783.71, enhet: "kr", tol: 0.02 } }
    ],
    hint: ["\\(8\\,400 \\cdot 0{,}018\\) for én måned.", "\\(8\\,400 \\cdot 1{,}093299\\) for fem måneder. Trekk fra 8 400."],
    losning: "<p>Én måned: \\(8\\,400 \\cdot 0{,}018 = 151{,}20\\) kr.<br>Etter fem måneder: \\(8\\,400 \\cdot 1{,}093299 = 9\\,183{,}71\\) kr.<br>Merkostnad: \\(9\\,183{,}71 - 8\\,400 = 783{,}71\\) kr.</p>"
  },
  {
    id: "rep-mva",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Et bor koster 400 kr uten mva. Mva er 25 %. Hva koster boret med mva?</p>",
    svar: { verdi: 500, enhet: "kr", tol: 0.5 },
    hint: ["25 % av 400 er 100. Legg til prisen.", "\\(400 \\cdot 1{,}25 = 500\\)."],
    losning: "<p>\\(400 \\cdot 1{,}25 = 500\\) kr.</p>"
  },
  {
    id: "rep-prosentpoeng",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Et kort har 1,8 % rente per måned. Et annet har 1,5 % per måned. Hvor mange prosentpoeng er forskjellen?</p>",
    svar: { verdi: 0.3, enhet: "%", tol: 0.01 },
    hint: ["Prosentpoeng er differansen mellom prosentene.", "\\(1{,}8 - 1{,}5 = 0{,}3\\)."],
    losning: "<p>\\(1{,}8 - 1{,}5 = 0{,}3\\) prosentpoeng. Det er ikke 0,3 % av 1,8.</p>"
  },
  {
    id: "eksamen-to-prosent",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>Den rentefrie måneden er over. Renta denne måneden er 2 % av 5 000 kr.</p>",
    stegForSteg: false,
    svar: { verdi: 100, enhet: "kr", tol: 0.5 },
    hint: ["2 % er 2 kroner per 100 kroner.", "\\(5\\,000 \\cdot 0{,}02 = 100\\)."],
    losning: "<p>\\(5\\,000 \\cdot 0{,}02 = 100\\) kr.</p>"
  },
  {
    id: "saldo-15",
    niva: "lett",
    tittel: "En måned uten innbetaling",
    tekst: "<p>Etter den rentefrie måneden står 15 000 kr på kortet. Renta er 1,8 % per måned. Du betaler ingenting denne måneden.</p>",
    deler: [
      { tekst: "Hvor mange kroner er renta?", svar: { verdi: 270, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er saldoen etter at renta er lagt til?", svar: { verdi: 15270, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 270, enhet: "kr" }, { verdi: 15270, enhet: "kr" }],
    hint: ["1,8 % = 0,018. Ny saldo = gammel saldo + rente.", "\\(15\\,000 \\cdot 0{,}018 = 270\\). \\(15\\,000 + 270 = 15\\,270\\)."],
    losning: "<p>Rente: \\(270\\) kr.<br>Saldo: \\(15\\,270\\) kr. Det samme som \\(15\\,000 \\cdot 1{,}018\\).</p>"
  },
  {
    id: "betalt-6400",
    niva: "lett",
    tekst: "<p>Et sveiseapparat koster 6 400 kr på kreditt. Du betaler hele beløpet innen forfall i den rentefrie måneden.</p>",
    deler: [
      { tekst: "Hvor mange kroner er renta?", svar: { verdi: 0, enhet: "kr", tol: 0 } },
      { tekst: "Hvor mye betaler du til sammen?", svar: { verdi: 6400, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 0, enhet: "kr" }, { verdi: 6400, enhet: "kr" }],
    hint: ["Full betaling innen forfall gir 0 kr i rente.", "Du betaler prisen, 6 400 kr, og ingen rente."],
    losning: "<p>Rente: 0 kr.<br>Til sammen: 6 400 kr.</p>"
  },
  {
    id: "to-mnd-5",
    niva: "middels",
    tittel: "To måneder, krone for krone",
    tekst: "<p>Gjelden er 5 000 kr når renta starter. Renta er 1,8 % per måned, og du betaler ingenting. Regn måned for måned. Ikke avrund underveis.</p>",
    deler: [
      { tekst: "Hva er renta den første måneden?", svar: { verdi: 90, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er saldoen etter første måned?", svar: { verdi: 5090, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er renta den andre måneden?", svar: { verdi: 91.62, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er saldoen etter to måneder?", svar: { verdi: 5181.62, enhet: "kr", tol: 0.01 } }
    ],
    steg: [{ verdi: 90, enhet: "kr" }, { verdi: 5090, enhet: "kr" }, { verdi: 91.62, enhet: "kr" }, { verdi: 5181.62, enhet: "kr" }],
    hint: ["Ny rente regnes av den nye saldoen, ikke av de opprinnelige 5 000.", "Måned 1: \\(5\\,000 \\cdot 0{,}018 = 90\\). Måned 2: \\(5\\,090 \\cdot 0{,}018 = 91{,}62\\)."],
    losning: "<p>Måned 1: rente \\(90\\) kr, saldo \\(5\\,090\\) kr.<br>Måned 2: rente \\(91{,}62\\) kr, saldo \\(5\\,181{,}62\\) kr.<br>Renta økte, fordi den regnes av et større beløp.</p>"
  },
  {
    id: "betal-800",
    niva: "middels",
    tekst: "<p>Gjelden er 12 000 kr. Renta denne måneden er 1,8 %. Deretter betaler du 800 kr.</p>",
    deler: [
      { tekst: "Hva er renta?", svar: { verdi: 216, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er gjelden etter innbetalingen?", svar: { verdi: 11416, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner sank gjelden?", svar: { verdi: 584, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 216, enhet: "kr" }, { verdi: 12216, enhet: "kr" }, { verdi: 11416, enhet: "kr" }],
    hint: ["Legg til renta før du trekker fra innbetalingen.", "\\(12\\,000 \\cdot 0{,}018 = 216\\). \\(12\\,216 - 800 = 11\\,416\\). Nedgangen er \\(12\\,000 - 11\\,416\\)."],
    losning: "<p>Rente: \\(216\\) kr.<br>Etter innbetaling: \\(11\\,416\\) kr.<br>Gjelden sank med \\(584\\) kr, ikke med 800 kr. Resten gikk til rente.</p>"
  },
  {
    id: "minste-7500",
    niva: "middels",
    tekst: "<p>Gjelden er 7 500 kr. Renta er 1,8 % denne måneden, og du betaler nøyaktig renta.</p>",
    deler: [
      { tekst: "Hvor mange kroner betaler du?", svar: { verdi: 135, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er gjelden rett etterpå?", svar: { verdi: 7500, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 135, enhet: "kr" }, { verdi: 7500, enhet: "kr" }],
    hint: ["Innbetalingen dekker bare renta.", "\\(7\\,500 \\cdot 0{,}018 = 135\\). \\(7\\,500 + 135 - 135 = 7\\,500\\)."],
    losning: "<p>Du betaler \\(135\\) kr.<br>Gjelden er fortsatt \\(7\\,500\\) kr. Neste måned kommer ny rente på samme gjeld.</p>"
  },
  {
    id: "kompressor-10",
    niva: "vanskelig",
    tittel: "Kompressoren",
    tekst: "<p>En kompressor koster 10 000 kr kontant. På kreditt er første måned rentefri. Deretter står beløpet i fem måneder med vekstfaktor 1,093299. Renta er 1,8 % per måned.</p>",
    deler: [
      { tekst: "Hva er renta den første måneden du ikke betaler?", svar: { verdi: 180, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er saldoen etter fem rentemåneder?", svar: { verdi: 10932.99, enhet: "kr", tol: 0.02 } },
      { tekst: "Hvor mye dyrere enn kontantpris er det?", svar: { verdi: 932.99, enhet: "kr", tol: 0.02 } }
    ],
    steg: [{ verdi: 180, enhet: "kr" }, { verdi: 10932.99, enhet: "kr" }, { verdi: 932.99, enhet: "kr" }],
    hint: ["Én måned: gang med 0,018. Fem måneder: gang med 1,093299.", "\\(10\\,000 \\cdot 0{,}018 = 180\\). \\(10\\,000 \\cdot 1{,}093299 = 10\\,932{,}99\\)."],
    losning: "<p>Én måned: \\(180\\) kr.<br>Etter fem måneder: \\(10\\,932{,}99\\) kr.<br>Merkostnad: \\(10\\,932{,}99 - 10\\,000 = 932{,}99\\) kr.</p>"
  },
  {
    id: "ar-8000",
    niva: "vanskelig",
    tittel: "Ett år på kortet",
    tekst: "<p>8 000 kr står ubetalt i ett år. Bruk vekstfaktoren 1,239, som svarer til omtrent 23,9 % med rentesrente. Et billån på samme beløp har 6 % rente per år, uten avdrag i denne sammenligningen.</p>",
    deler: [
      { tekst: "Hva er saldoen på kortet etter ett år?", svar: { verdi: 9912, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner er renta på kortet?", svar: { verdi: 1912, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner er renta på billånet?", svar: { verdi: 480, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye mer koster kortet i rente?", svar: { verdi: 1432, enhet: "kr", tol: 0.5 } }
    ],
    steg: [{ verdi: 9912, enhet: "kr" }, { verdi: 1912, enhet: "kr" }, { verdi: 480, enhet: "kr" }, { verdi: 1432, enhet: "kr" }],
    hint: ["Kortet: gang med 1,239. Billånet: 6 % av 8 000.", "\\(8\\,000 \\cdot 1{,}239 = 9\\,912\\). Rente kort: \\(1\\,912\\). Rente billån: \\(480\\)."],
    losning: "<p>Kort: \\(9\\,912\\) kr, der \\(1\\,912\\) kr er rente.<br>Billån: \\(8\\,000 \\cdot 0{,}06 = 480\\) kr i rente.<br>Forskjell: \\(1\\,912 - 480 = 1\\,432\\) kr. 1,8 % per måned er et annet prisnivå enn 6 % per år.</p>"
  }
]);
