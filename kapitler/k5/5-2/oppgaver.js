Bok.oppgaver([
  {
    id: "timer-1280",
    niva: "lett",
    tittel: "Hvor mange timer?",
    tekst: "<p>\\(L = 200 + 180t\\). Lønna er 1280 kr. Hvor mange timer er det?</p>",
    steg: [{ verdi: 1080, enhet: "kr" }],
    svar: { verdi: 6, enhet: "h" },
    hint: ["Trekk fra det faste tillegget først. Del det som er igjen på 180.", "\\(1280 - 200 = 1080\\). Så \\(1080 : 180\\)."],
    losning: "<p>\\(1280 - 200 = 1080\\) kr.<br>\\(t = 1080 : 180 = 6\\) timer.<br>Kontroll: \\(200 + 180 \\cdot 6 = 1280\\).</p>"
  },
  {
    id: "km-600",
    niva: "lett",
    tittel: "Hvor langt?",
    tekst: "<p>\\(K = 350 + 5s\\). Tilhengeren kostet 600 kr. Hvor mange kilometer var turen?</p>",
    steg: [{ verdi: 250, enhet: "kr" }],
    svar: { verdi: 50, enhet: "km" },
    hint: ["Trekk fra startprisen. Del resten på 5.", "\\(600 - 350 = 250\\). Så \\(250 : 5\\)."],
    losning: "<p>\\(600 - 350 = 250\\).<br>\\(s = 250 : 5 = 50\\) km.</p>"
  },
  {
    id: "ohm-snu",
    niva: "middels",
    tittel: "Finn motstanden",
    tekst: "<p>Ohms lov sier \\(U = R \\cdot I\\). I en krets på en lastebil er spenningen 24 V og strømmen 3 A.</p>",
    deler: [
      { tekst: "Hvilken formel gir motstanden \\(R\\)?", svar: { valg: ["\\(R = U \\cdot I\\)", "\\(R = U : I\\)", "\\(R = I : U\\)"], riktig: 1, forklaring: "Del spenningen på strømmen." } },
      { tekst: "Hva er motstanden?", svar: { verdi: 8, enhet: "Ω" } }
    ],
    hint: ["\\(R\\) står ganget med \\(I\\). Del begge sider på \\(I\\).", "\\(R = 24 : 3\\)."],
    losning: "<p>\\(R = U : I = 24 : 3 = 8\\) Ω.<br>Kontroll: \\(8 \\cdot 3 = 24\\) V.</p>"
  },
  {
    id: "kraft-180",
    niva: "middels",
    tittel: "Kraft på nøkkelen",
    tekst: "<p>Dreiemomentet er \\(M = F \\cdot a\\). Bolten skal trekkes til 180 Nm. Armen på nøkkelen er 0,45 m. Hvor stor kraft \\(F\\) trengs?</p>",
    steg: [{ verdi: 0.45, enhet: "m" }],
    svar: { verdi: 400, enhet: "N" },
    hint: ["Snu til \\(F = M : a\\). Ikke gang M med a.", "\\(F = 180 : 0{,}45\\)."],
    losning: "<p>\\(F = M : a = 180 : 0{,}45 = 400\\) N.<br>Kontroll: \\(400 \\cdot 0{,}45 = 180\\) Nm.</p>"
  },
  {
    id: "antall-sveiser",
    niva: "vanskelig",
    tittel: "Hvor mange sveiser?",
    tekst: "<p>Sveisetida følger \\(T = 15 + 6n\\). En ramme tok 63 minutter. 15 minutter var oppstart.</p>",
    deler: [
      { tekst: "Hvilken formel gir antall sveiser \\(n\\)?", svar: { valg: ["\\(n = T : 6 + 15\\)", "\\(n = (T - 15) : 6\\)", "\\(n = T \\cdot 6 - 15\\)"], riktig: 1, forklaring: "Trekk fra oppstarten før du deler på 6." } },
      { tekst: "Hvor mange sveiser ble det?", svar: { verdi: 8, enhet: "stk" } }
    ],
    hint: ["Oppstarten på 15 min ligger inne i de 63. Den må trekkes fra før du deler.", "\\(63 - 15 = 48\\). Så \\(48 : 6\\)."],
    losning: "<p>\\(n = (T - 15) : 6\\).<br>\\(63 - 15 = 48\\), og \\(48 : 6 = 8\\) sveiser.<br>Kontroll: \\(15 + 6 \\cdot 8 = 63\\) min.</p>"
  },
  {
    id: "cas-timer",
    type: "verksted",
    niva: "middels",
    merke: "K",
    tittel: "CAS og lønnsslippen",
    utstyr: "PC med GeoGebra CAS",
    hms: "Klasserom. Ta en kort pause fra skjermen hvis øynene blir slitne. Ingen maskiner.",
    tekst: "<p>Lønna følger \\(L = 200 + 180t\\), og slippen viser 1640 kr. Regn ut timene for hånd, og sjekk med <b>Løs(200 + 180t = 1640, t)</b> i CAS.</p>",
    steg: [{ verdi: 1440, enhet: "kr" }],
    svar: { verdi: 8, enhet: "h" },
    hint: ["Trekk fra 200 først.", "\\(1640 - 200 = 1440\\). Så \\(1440 : 180\\)."],
    losning: "<p>\\(1640 - 200 = 1440\\).<br>\\(t = 1440 : 180 = 8\\) timer. CAS gir \\(t = 8\\).</p>"
  },
  {
    id: "rep-75",
    type: "repetisjon",
    fra: "5.1",
    niva: "lett",
    tekst: "<p>\\(L = 200 + 180t\\). Hvor stor er lønna for 7,5 timer? Her skal du sette inn, ikke snu.</p>",
    steg: [{ verdi: 1350, enhet: "kr" }],
    svar: { verdi: 1550, enhet: "kr" },
    hint: ["Gang 180 med 7,5. Legg til 200.", "\\(180 \\cdot 7{,}5 = 1350\\)."],
    losning: "<p>\\(180 \\cdot 7{,}5 = 1350\\).<br>\\(L = 200 + 1350 = 1550\\) kr.</p>"
  },
  {
    id: "rep-meter",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En momentnøkkel er 0,6 m lang. Hvor mange millimeter er det? Du trenger dette når armen skal stå i meter i momentformelen.</p>",
    svar: { verdi: 600, enhet: "mm" },
    hint: ["1 m = 1000 mm. Fra m til mm ganger du med 1000.", "\\(0{,}6 \\cdot 1000\\)."],
    losning: "<p>\\(0{,}6 \\cdot 1000 = 600\\) mm.</p>"
  },
  {
    id: "eksamen-kraft",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Dreiemomentet er \\(M = F \\cdot a\\). Topplokket skal trekkes til 120 Nm. Nøkkelen er 0,6 m.</p>",
    deler: [
      { tekst: "Hvilken formel gir kraften \\(F\\)?", svar: { valg: ["\\(F = M \\cdot a\\)", "\\(F = M : a\\)", "\\(F = a : M\\)"], riktig: 1, forklaring: "Del momentet på armen." } },
      { tekst: "Hvor stor er kraften?", svar: { verdi: 200, enhet: "N" } }
    ],
    hint: ["\\(F\\) står ganget med \\(a\\). Del begge sider på \\(a\\).", "\\(F = 120 : 0{,}6\\)."],
    losning: "<p>\\(F = M : a = 120 : 0{,}6 = 200\\) N.</p>"
  },
  {
    id: "km-475",
    niva: "lett",
    tittel: "Regning på 475 kr",
    tekst: "<p>\\(K = 350 + 5s\\). Tilhengeren kostet 475 kr. Hvor mange kilometer var turen?</p>",
    steg: [{ verdi: 125, enhet: "kr" }],
    svar: { verdi: 25, enhet: "km" },
    hint: ["Trekk fra startprisen. Del resten på 5.", "\\(475 - 350 = 125\\). Så \\(125 : 5\\)."],
    losning: "<p>\\(475 - 350 = 125\\).<br>\\(s = 125 : 5 = 25\\) km.<br>Kontroll: \\(350 + 5 \\cdot 25 = 475\\).</p>"
  },
  {
    id: "antall-boyer",
    niva: "lett",
    tittel: "Hvor mange bøyer?",
    tekst: "<p>\\(T = 8 + 3n\\). Plateknekkeren brukte 26 minutter. Hvor mange bøyer ble det?</p>",
    steg: [{ verdi: 18, enhet: "min" }],
    svar: { verdi: 6, enhet: "stk" },
    hint: ["Trekk fra oppstarten på 8 minutter. Del resten på 3.", "\\(26 - 8 = 18\\). Så \\(18 : 3\\)."],
    losning: "<p>\\(26 - 8 = 18\\).<br>\\(n = 18 : 3 = 6\\) bøyer.<br>Kontroll: \\(8 + 3 \\cdot 6 = 26\\).</p>"
  },
  {
    id: "lonn-7",
    niva: "lett",
    tittel: "Lønnsslipp på 1460 kr",
    tekst: "<p>\\(L = 200 + 180t\\). Slippen viser 1460 kr. Hvor mange timer er det?</p>",
    steg: [{ verdi: 1260, enhet: "kr" }],
    svar: { verdi: 7, enhet: "h" },
    hint: ["Trekk fra det faste tillegget på 200 kr. Del resten på 180.", "\\(1460 - 200 = 1260\\). Så \\(1260 : 180\\)."],
    losning: "<p>\\(1460 - 200 = 1260\\).<br>\\(t = 1260 : 180 = 7\\) timer.<br>Kontroll: \\(200 + 180 \\cdot 7 = 1460\\).</p>"
  },
  {
    id: "lastebil-r",
    niva: "middels",
    tittel: "Motstand på 24 V",
    tekst: "<p>Ohms lov sier \\(U = R \\cdot I\\). En arbeidslykt på lastebilen får 24 V og trekker 4 A.</p>",
    deler: [
      { tekst: "Hvilken formel gir motstanden \\(R\\)?", svar: { valg: ["\\(R = U \\cdot I\\)", "\\(R = U : I\\)", "\\(R = I : U\\)"], riktig: 1, forklaring: "Del spenningen på strømmen." } },
      { tekst: "Hva er motstanden?", svar: { verdi: 6, enhet: "Ω" } },
      { tekst: "Hva er effekten, når \\(P = U \\cdot I\\)?", svar: { verdi: 96, enhet: "W" } }
    ],
    hint: ["\\(R\\) står ganget med \\(I\\). Del begge sider på \\(I\\). Effekten er spenning ganger strøm.", "\\(R = 24 : 4\\). \\(P = 24 \\cdot 4\\)."],
    losning: "<p>\\(R = 24 : 4 = 6\\) Ω.<br>\\(P = 24 \\cdot 4 = 96\\) W.<br>Kontroll: \\(6 \\cdot 4 = 24\\) V.</p>"
  },
  {
    id: "arm-240",
    niva: "middels",
    tittel: "Hvor lang arm?",
    tekst: "<p>Dreiemomentet er \\(M = F \\cdot a\\). Mutteren krever 240 Nm. Du klarer å dra med 400 N.</p>",
    deler: [
      { tekst: "Hvilken formel gir armen \\(a\\)?", svar: { valg: ["\\(a = M \\cdot F\\)", "\\(a = F : M\\)", "\\(a = M : F\\)"], riktig: 2, forklaring: "Del momentet på kraften." } },
      { tekst: "Hvor lang må armen minst være?", svar: { verdi: 0.6, enhet: "m" } },
      { tekst: "Hvor mange centimeter er det?", svar: { verdi: 60, enhet: "cm" } }
    ],
    hint: ["Snu til \\(a = M : F\\). Momentet er i Nm, armen skal ut i meter.", "\\(a = 240 : 400\\). Gang med 100 for å få centimeter."],
    losning: "<p>\\(a = 240 : 400 = 0{,}6\\) m.<br>\\(0{,}6 \\cdot 100 = 60\\) cm.<br>Kontroll: \\(400 \\cdot 0{,}6 = 240\\) Nm.</p>"
  },
  {
    id: "sveiser-okt",
    niva: "vanskelig",
    tittel: "Får 15 sveiser plass?",
    tekst: "<p>Sveisetida følger \\(T = 12 + 5n\\). Du har 72 minutter ved benken. \\(T\\) er minutter, og \\(n\\) er antall sveiser.</p>",
    deler: [
      { tekst: "Hvilken formel gir antall sveiser?", svar: { valg: ["\\(n = T : 5 + 12\\)", "\\(n = (T - 12) : 5\\)", "\\(n = T \\cdot 5 - 12\\)"], riktig: 1, forklaring: "Trekk fra oppstarten før du deler." } },
      { tekst: "Hvor mange sveiser rekker du på 72 minutter?", svar: { verdi: 12, enhet: "stk" } },
      { tekst: "Hvor mange minutter tar 15 sveiser?", svar: { verdi: 87, enhet: "min" } },
      { tekst: "Rekker du 15 sveiser på 72 minutter?", svar: { valg: ["Ja, 87 minutter er innenfor", "Nei, 87 minutter er mer enn 72", "Ja, hvis oppstarten droppes i formelen"], riktig: 1, forklaring: "87 er større enn 72. Oppstarten på 12 minutter ligger i formelen og skal være med." } }
    ],
    steg: [{ verdi: 60, enhet: "min" }, { verdi: 75, enhet: "min" }],
    hint: ["Trekk fra 12 før du deler på 5. For 15 sveiser setter du inn, du snur ikke.", "\\(72 - 12 = 60\\), og \\(60 : 5 = 12\\). For 15 sveiser: \\(5 \\cdot 15 = 75\\)."],
    losning: "<p>\\(n = (72 - 12) : 5 = 60 : 5 = 12\\) sveiser.<br>15 sveiser: \\(T = 12 + 5 \\cdot 15 = 12 + 75 = 87\\) min.<br>87 er mer enn 72, så 15 sveiser får ikke plass.</p>"
  },
  {
    id: "forsikring",
    niva: "vanskelig",
    tittel: "Forsikringen står utenfor",
    tekst: "<p>Tilhengerleie følger \\(K = 350 + 5s\\). Regningen er 860 kr. 60 kr av beløpet er en forsikring som ikke ligger i formelen. Resten er leie etter formelen.</p>",
    deler: [
      { tekst: "Hvor mange kroner skal inn i formelen?", svar: { verdi: 800, enhet: "kr" } },
      { tekst: "Hvor mange kilometer var turen?", svar: { verdi: 90, enhet: "km" } }
    ],
    steg: [{ verdi: 450, enhet: "kr" }],
    hint: ["Trekk fra forsikringen først. Deretter trekker du startprisen og deler på 5.", "\\(860 - 60 = 800\\). Så \\(800 - 350 = 450\\), og \\(450 : 5\\)."],
    losning: "<p>\\(860 - 60 = 800\\) kr hører til formelen.<br>\\(800 - 350 = 450\\).<br>\\(s = 450 : 5 = 90\\) km.<br>Kontroll: \\(350 + 5 \\cdot 90 + 60 = 860\\).</p>"
  },
  {
    id: "cas-sveis",
    type: "verksted",
    niva: "middels",
    merke: "K",
    tittel: "CAS og sveisetida",
    utstyr: "PC med GeoGebra CAS",
    hms: "Klasserom. Ta en kort pause fra skjermen hvis øynene blir slitne. Ingen maskiner.",
    tekst: "<p>Sveisetida følger \\(T = 15 + 6n\\), og ramma tok 75 minutter. Regn ut antall sveiser for hånd, og sjekk med <b>Løs(15 + 6n = 75, n)</b> i CAS.</p>",
    steg: [{ verdi: 60, enhet: "min" }],
    svar: { verdi: 10, enhet: "stk" },
    hint: ["Trekk fra oppstarten på 15 minutter før du deler på 6.", "\\(75 - 15 = 60\\). Så \\(60 : 6\\)."],
    losning: "<p>\\(75 - 15 = 60\\).<br>\\(n = 60 : 6 = 10\\) sveiser. CAS gir \\(n = 10\\).<br>Kontroll: \\(15 + 6 \\cdot 10 = 75\\).</p>"
  }
]);
