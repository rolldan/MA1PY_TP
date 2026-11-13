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
  }
]);
