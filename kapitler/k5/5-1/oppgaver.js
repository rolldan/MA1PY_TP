Bok.oppgaver([
  {
    id: "dagslonn-6",
    niva: "lett",
    tittel: "Seks timer",
    tekst: "<p>Dagslønna følger \\(L = 200 + 180t\\). \\(L\\) er kroner, og \\(t\\) er timer. Lærlingen jobber 6 timer. Hva blir lønna?</p>",
    steg: [{ verdi: 1080, enhet: "kr" }],
    svar: { verdi: 1280, enhet: "kr" },
    hint: ["180 ganges med timene. 200 legges til etterpå.", "\\(180 \\cdot 6 = 1080\\). Så \\(200 + 1080\\)."],
    losning: "<p>\\(180 \\cdot 6 = 1080\\) kr.<br>\\(L = 200 + 1080 = 1280\\) kr.</p>"
  },
  {
    id: "tilhenger-40",
    niva: "lett",
    tittel: "40 km med henger",
    tekst: "<p>Tilhengerleie følger \\(K = 350 + 5s\\). \\(K\\) er kroner, og \\(s\\) er kilometer. Turen er 40 km. Hva koster leien?</p>",
    steg: [{ verdi: 200, enhet: "kr" }],
    svar: { verdi: 550, enhet: "kr" },
    hint: ["5 kr ganges med antall kilometer. 350 er startpris.", "\\(5 \\cdot 40 = 200\\). Så \\(350 + 200\\)."],
    losning: "<p>\\(5 \\cdot 40 = 200\\) kr.<br>\\(K = 350 + 200 = 550\\) kr.</p>"
  },
  {
    id: "sveisetid",
    niva: "middels",
    tittel: "Tid på sveisebenken",
    tekst: "<p>Tida på en ramme følger \\(T = 15 + 6n\\). \\(T\\) er minutter, og \\(n\\) er antall sveiser. 15 minutter er oppstart.</p>",
    deler: [
      { tekst: "Hvor mange minutter tar 4 sveiser?", svar: { verdi: 39, enhet: "min" } },
      { tekst: "Hvor mange minutter tar 10 sveiser?", svar: { verdi: 75, enhet: "min" } }
    ],
    hint: ["Sett antall sveiser inn for \\(n\\). Oppstarten på 15 min kommer i tillegg.", "Fire sveiser: \\(6 \\cdot 4 = 24\\), og \\(15 + 24\\)."],
    losning: "<p>a) \\(T = 15 + 6 \\cdot 4 = 15 + 24 = 39\\) min.<br>b) \\(T = 15 + 6 \\cdot 10 = 15 + 60 = 75\\) min.</p>"
  },
  {
    id: "to-lonner",
    niva: "middels",
    tittel: "To lønnsavtaler",
    tekst: "<p>Avtale A: \\(L = 200 + 180t\\).<br>Avtale B: \\(L = 250 + 150t\\).<br>\\(t\\) er timer, og \\(L\\) er kroner. Dagen er 6 timer.</p>",
    deler: [
      { tekst: "Hva blir lønna med avtale A?", svar: { verdi: 1280, enhet: "kr" } },
      { tekst: "Hva blir lønna med avtale B?", svar: { verdi: 1150, enhet: "kr" } },
      { tekst: "Hvilken avtale gir mest på 6 timer?", svar: { valg: ["Avtale A", "Avtale B", "De gir det samme"], riktig: 0, forklaring: "1280 kr er mer enn 1150 kr." } }
    ],
    hint: ["Regn hver formel for seg med \\(t = 6\\).", "A: \\(180 \\cdot 6 = 1080\\), pluss 200. B: \\(150 \\cdot 6 = 900\\), pluss 250."],
    losning: "<p>A: \\(200 + 180 \\cdot 6 = 1280\\) kr.<br>B: \\(250 + 150 \\cdot 6 = 1150\\) kr.<br>Avtale A gir 130 kr mer denne dagen.</p>"
  },
  {
    id: "lik-lonn",
    niva: "vanskelig",
    tittel: "Kort dag",
    tekst: "<p>Samme to avtaler: A er \\(L = 200 + 180t\\), B er \\(L = 250 + 150t\\).</p>",
    deler: [
      { tekst: "Hva blir lønna med A når dagen bare er 1 time?", svar: { verdi: 380, enhet: "kr" } },
      { tekst: "Hva blir lønna med B på 1 time?", svar: { verdi: 400, enhet: "kr" } },
      { tekst: "Hvem tjener mest på en dag på 1 time?", svar: { valg: ["Avtale A", "Avtale B", "De gir det samme"], riktig: 1, forklaring: "400 kr er mer enn 380 kr. Det faste tillegget veier mer når dagen er kort." } },
      { tekst: "Ved hvor mange timer gir avtalene lik lønn? Svar med to desimaler.", svar: { verdi: 1.6666666667, enhet: "h" } }
    ],
    hint: ["Sett lønnene lik hverandre: \\(200 + 180t = 250 + 150t\\).", "Flytt ledd: \\(180t - 150t = 250 - 200\\), altså \\(30t = 50\\)."],
    losning: "<p>A: \\(200 + 180 = 380\\) kr. B: \\(250 + 150 = 400\\) kr. B gir mest på 1 time.<br>Lik lønn: \\(30t = 50\\), så \\(t = 50 : 30 = 1{,}67\\) timer. Under det lønner B seg. Over det lønner A seg.</p>"
  },
  {
    id: "kort-tur",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Kortet for tilhengeren",
    utstyr: "Formelkort, kalkulator, eventuell prisliste fra verkstedkontoret",
    hms: "Ingen maskiner i denne økta. Ligger det en tilhenger på plassen, står den i ro med bremsene på. Ikke gå bak den.",
    tekst: "<p>Kortet ditt sier \\(K = 350 + 5s\\). Klassen skal hente stål 64 km unna. Hva koster tilhengerleien?</p>",
    steg: [{ verdi: 320, enhet: "kr" }],
    svar: { verdi: 670, enhet: "kr" },
    hint: ["\\(s\\) er kilometer. Gang 5 med 64, og legg til 350.", "\\(5 \\cdot 64 = 320\\)."],
    losning: "<p>\\(5 \\cdot 64 = 320\\) kr.<br>\\(K = 350 + 320 = 670\\) kr.</p>"
  },
  {
    id: "rep-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En aksel på tegningen er 1850 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 1.85, enhet: "m" },
    hint: ["1 m = 1000 mm. Fra mm til m deler du.", "\\(1850 : 1000\\). Kommaet flyttes tre plasser til venstre."],
    losning: "<p>\\(1850 : 1000 = 1{,}85\\) m.</p>"
  },
  {
    id: "rep-pris",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 10 skruer koster 64,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 6.45, enhet: "kr" },
    hint: ["Én skrue er en tidel av esken. Del med 10.", "\\(64{,}50 : 10\\). Kommaet flyttes én plass til venstre."],
    losning: "<p>\\(64{,}50 : 10 = 6{,}45\\) kr.</p>"
  },
  {
    id: "eksamen-oppstart",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et verksted tar \\(K = 120 + 15n\\) kroner for å lage \\(n\\) like braketter. 120 kr er oppstart.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva koster 8 braketter?", svar: { verdi: 240, enhet: "kr" } },
      { tekst: "Hva forteller tallet 120 i formelen?", svar: { valg: ["Prisen per brakett", "Et fast beløp som ikke avhenger av antall", "Antall braketter"], riktig: 1, forklaring: "120 står uten bokstav. Det legges til én gang." } }
    ],
    hint: ["\\(n = 8\\). Gang 15 med 8, og legg til 120.", "\\(15 \\cdot 8 = 120\\). Så \\(120 + 120\\)."],
    losning: "<p>\\(K = 120 + 15 \\cdot 8 = 120 + 120 = 240\\) kr. Tallet 120 er et fast beløp.</p>"
  }
]);
