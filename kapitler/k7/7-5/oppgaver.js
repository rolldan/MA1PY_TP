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
  }
]);
