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
  },
  {
    id: "bokstavene",
    niva: "lett",
    tittel: "Hva betyr 180?",
    tekst: "<p>Lønna følger \\(L = 200 + 180t\\). \\(L\\) er kroner, og \\(t\\) er timer.</p>",
    deler: [
      { tekst: "Hva betyr tallet 180?", svar: { valg: ["Et fast beløp som legges til én gang", "Kroner per time", "Antall timer"], riktig: 1, forklaring: "180 står foran t, så det er kroner for hver time." } },
      { tekst: "Hva blir lønna for 3 timer?", svar: { verdi: 740, enhet: "kr" } }
    ],
    steg: [{ verdi: 540, enhet: "kr" }],
    hint: ["180 ganges med timene. 200 legges til etterpå, én gang.", "\\(180 \\cdot 3 = 540\\). Så \\(200 + 540\\)."],
    losning: "<p>180 er kroner per time.<br>\\(180 \\cdot 3 = 540\\) kr.<br>\\(L = 200 + 540 = 740\\) kr.</p>"
  },
  {
    id: "plateknekk",
    niva: "lett",
    tittel: "Fem bøyer",
    tekst: "<p>Tida på plateknekkeren følger \\(T = 8 + 3n\\). \\(T\\) er minutter, og \\(n\\) er antall bøyer. Du skal bøye 5 ganger. Hvor lang tid tar det?</p>",
    steg: [{ verdi: 15, enhet: "min" }],
    svar: { verdi: 23, enhet: "min" },
    hint: ["3 minutter ganges med antall bøyer. 8 minutter er oppstart.", "\\(3 \\cdot 5 = 15\\). Så \\(8 + 15\\)."],
    losning: "<p>\\(3 \\cdot 5 = 15\\) min.<br>\\(T = 8 + 15 = 23\\) min.</p>"
  },
  {
    id: "lagerhylle",
    niva: "lett",
    tittel: "Hylla på lageret",
    tekst: "<p>En hylle med motorer følger \\(m = 12 + 4n\\). \\(m\\) er kilogram, og \\(n\\) er antall motorer. Det står 9 motorer på hylla. Hvor mye veier det til sammen?</p>",
    steg: [{ verdi: 36, enhet: "kg" }],
    svar: { verdi: 48, enhet: "kg" },
    hint: ["4 kg ganges med antall motorer. 12 kg er hylla uten motorer.", "\\(4 \\cdot 9 = 36\\). Så \\(12 + 36\\)."],
    losning: "<p>\\(4 \\cdot 9 = 36\\) kg.<br>\\(m = 12 + 36 = 48\\) kg.</p>"
  },
  {
    id: "sveisetrad",
    niva: "lett",
    tittel: "Seks meter sveis",
    tekst: "<p>Prisen på en sveisejobb følger \\(K = 90 + 7s\\). \\(K\\) er kroner, og \\(s\\) er meter sveis. Jobben er 6 meter. Hva koster den?</p>",
    steg: [{ verdi: 42, enhet: "kr" }],
    svar: { verdi: 132, enhet: "kr" },
    hint: ["7 kr ganges med meterne. 90 kr er et fast beløp.", "\\(7 \\cdot 6 = 42\\). Så \\(90 + 42\\)."],
    losning: "<p>\\(7 \\cdot 6 = 42\\) kr.<br>\\(K = 90 + 42 = 132\\) kr.</p>"
  },
  {
    id: "to-leier",
    niva: "middels",
    tittel: "Varebil eller tilhenger",
    tekst: "<p>Dere skal hente stål 40 km unna.<br>Varebil: \\(K = 450 + 6s\\).<br>Tilhenger: \\(K = 300 + 9s\\).<br>\\(s\\) er kilometer, og \\(K\\) er kroner.</p>",
    deler: [
      { tekst: "Hva koster varebilen?", svar: { verdi: 690, enhet: "kr" } },
      { tekst: "Hva koster tilhengeren?", svar: { verdi: 660, enhet: "kr" } },
      { tekst: "Hva er billigst på denne turen?", svar: { valg: ["Varebilen", "Tilhengeren", "De koster det samme"], riktig: 1, forklaring: "660 kr er mindre enn 690 kr." } }
    ],
    steg: [{ verdi: 240, enhet: "kr" }, { verdi: 360, enhet: "kr" }],
    hint: ["Regn hver formel for seg med \\(s = 40\\). Det faste beløpet ganges ikke med kilometerne.", "Varebil: \\(6 \\cdot 40 = 240\\). Tilhenger: \\(9 \\cdot 40 = 360\\)."],
    losning: "<p>Varebil: \\(450 + 6 \\cdot 40 = 450 + 240 = 690\\) kr.<br>Tilhenger: \\(300 + 9 \\cdot 40 = 300 + 360 = 660\\) kr.<br>Tilhengeren er 30 kr billigere på 40 km.</p>"
  },
  {
    id: "tre-formler",
    niva: "middels",
    tittel: "Tre kort på benken",
    tekst: "<p>Kortene sier:<br>Lønn: \\(L = 220 + 190t\\), der \\(t\\) er timer.<br>Tilhenger: \\(K = 280 + 4s\\), der \\(s\\) er kilometer.<br>Sveis: \\(T = 12 + 5n\\), der \\(n\\) er antall sveiser.</p>",
    deler: [
      { tekst: "Hva blir lønna for 4 timer?", svar: { verdi: 980, enhet: "kr" } },
      { tekst: "Hva koster tilhengeren for 35 km?", svar: { verdi: 420, enhet: "kr" } },
      { tekst: "Hvor mange minutter tar 8 sveiser?", svar: { verdi: 52, enhet: "min" } }
    ],
    steg: [{ verdi: 760, enhet: "kr" }, { verdi: 140, enhet: "kr" }, { verdi: 40, enhet: "min" }],
    hint: ["Bruk lønnskortet på timer, tilhengerkortet på kilometer og sveisekortet på antall sveiser.", "Lønn: \\(190 \\cdot 4 = 760\\). Tilhenger: \\(4 \\cdot 35 = 140\\). Sveis: \\(5 \\cdot 8 = 40\\)."],
    losning: "<p>\\(L = 220 + 190 \\cdot 4 = 220 + 760 = 980\\) kr.<br>\\(K = 280 + 4 \\cdot 35 = 280 + 140 = 420\\) kr.<br>\\(T = 12 + 5 \\cdot 8 = 12 + 40 = 52\\) min.</p>"
  },
  {
    id: "lik-leie",
    niva: "vanskelig",
    tittel: "Når koster liften det samme?",
    tekst: "<p>Sakseliften kan leies på to måter. \\(t\\) er timer.<br>Avtale A: \\(K = 180 + 40t\\).<br>Avtale B: \\(K = 300 + 20t\\).</p>",
    deler: [
      { tekst: "Hva koster avtale A for 3 timer?", svar: { verdi: 300, enhet: "kr" } },
      { tekst: "Hva koster avtale B for 3 timer?", svar: { verdi: 360, enhet: "kr" } },
      { tekst: "Hva er billigst på en jobb på 3 timer?", svar: { valg: ["Avtale A", "Avtale B", "De koster det samme"], riktig: 0, forklaring: "300 kr er mindre enn 360 kr." } },
      { tekst: "Ved hvor mange timer koster avtalene det samme?", svar: { verdi: 6, enhet: "h" } }
    ],
    steg: [{ verdi: 120, enhet: "kr" }, { verdi: 60, enhet: "kr" }],
    hint: ["Regn 3 timer først. Lik pris finner du når \\(180 + 40t = 300 + 20t\\).", "A på 3 timer: \\(40 \\cdot 3 = 120\\). Likninga blir \\(20t = 120\\)."],
    losning: "<p>A: \\(180 + 40 \\cdot 3 = 300\\) kr.<br>B: \\(300 + 20 \\cdot 3 = 360\\) kr. A er billigst på 3 timer.<br>Lik pris: \\(40t - 20t = 300 - 180\\), så \\(20t = 120\\) og \\(t = 6\\) timer.<br>Kontroll: begge gir \\(180 + 240 = 420\\) kr og \\(300 + 120 = 420\\) kr.</p>"
  },
  {
    id: "fast-ledd",
    niva: "vanskelig",
    tittel: "7005 kr er for mye",
    tekst: "<p>Tilhengerleie følger \\(K = 350 + 5s\\). Turen er 20 km. En lærling regnet \\(350 \\cdot 20 + 5 = 7005\\) kr.</p>",
    deler: [
      { tekst: "Hva er riktig leie?", svar: { verdi: 450, enhet: "kr" } },
      { tekst: "Hva er feilen i utregningen til lærlingen?", svar: { valg: ["Det faste beløpet ble ganget med kilometerne", "Kilometerprisen ble glemt", "Svaret mangler bare enheten"], riktig: 0, forklaring: "350 kr skal legges til én gang. Det er 5 kr som ganges med 20 km." } }
    ],
    steg: [{ verdi: 100, enhet: "kr" }],
    hint: ["Bare 5 skal ganges med 20. 350 legges til etterpå.", "\\(5 \\cdot 20 = 100\\). Så \\(350 + 100\\)."],
    losning: "<p>\\(5 \\cdot 20 = 100\\) kr.<br>\\(K = 350 + 100 = 450\\) kr.<br>7005 kr kommer av å gange det faste beløpet med kilometerne. Overslaget avslører det: 20 km kan ikke koste flere tusen når prisen er 5 kr per km pluss 350 kr.</p>"
  },
  {
    id: "ramme-tid",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Tid før sveisen tennes",
    utstyr: "Formelkort, klokke, sveisebenk som står av",
    hms: "Regn ferdig før noen tenner sveisen. Ikke se på lysbuen. Visir og hansker hvis benken er varm. Læreren starter utstyret.",
    tekst: "<p>Kortet på benken sier \\(T = 18 + 5n\\). \\(T\\) er minutter, og \\(n\\) er antall sveiser. Ramma trenger 7 sveiser. Hvor lang tid setter du av?</p>",
    steg: [{ verdi: 35, enhet: "min" }],
    svar: { verdi: 53, enhet: "min" },
    hint: ["Gang 5 med antall sveiser, og legg til oppstarten på 18 minutter.", "\\(5 \\cdot 7 = 35\\)."],
    losning: "<p>\\(5 \\cdot 7 = 35\\) min.<br>\\(T = 18 + 35 = 53\\) min. Det er innenfor en økt på 75 minutter, med tid til oppstart og rydding.</p>"
  }
]);
