Bok.oppgaver([
  {
    id: "strom-6",
    niva: "lett",
    tittel: "Arbeidslys",
    tekst: "<p>Et arbeidslys har motstand 6 Ω og står på 12 V. Hvor stor er strømmen?</p>",
    svar: { verdi: 2, enhet: "A" },
    hint: ["Strømmen er spenning delt på motstand: \\(I = U : R\\).", "\\(I = 12 : 6\\)."],
    losning: "<p>\\(I = 12 : 6 = 2\\) A.</p>"
  },
  {
    id: "effekt-24",
    niva: "lett",
    tittel: "Watt",
    tekst: "<p>Samme lys trekker 2 A på 12 V. Hvor stor er effekten?</p>",
    svar: { verdi: 24, enhet: "W" },
    hint: ["Effekt er spenning ganger strøm: \\(P = U \\cdot I\\).", "\\(P = 12 \\cdot 2\\)."],
    losning: "<p>\\(P = 12 \\cdot 2 = 24\\) W.</p>"
  },
  {
    id: "setevarmer",
    niva: "middels",
    tittel: "Setevarmer",
    tekst: "<p>Setevarmeren får 12 V. Tangamperemeteret viser 3 A.</p>",
    deler: [
      { tekst: "Hva er motstanden i varmetråden?", svar: { verdi: 4, enhet: "Ω" } },
      { tekst: "Hva er effekten?", svar: { verdi: 36, enhet: "W" } }
    ],
    hint: ["Motstand: del spenning på strøm. Effekt: gang spenning med strøm.", "\\(R = 12 : 3\\). \\(P = 12 \\cdot 3\\)."],
    losning: "<p>\\(R = 12 : 3 = 4\\) Ω.<br>\\(P = 12 \\cdot 3 = 36\\) W.</p>"
  },
  {
    id: "jordpunkt",
    niva: "middels",
    tittel: "Rustent jordpunkt",
    tekst: "<p>Et jordpunkt er rustet. Motstanden der er 4 Ω, og strømmen gjennom punktet er 2 A. Batteriet er 12 V.</p>",
    deler: [
      { tekst: "Hvor stort er spenningsfallet over det rustne punktet?", svar: { verdi: 8, enhet: "V" } },
      { tekst: "Hvor mange volt er igjen til lykta, hvis hele fallet sitter i rusten?", svar: { verdi: 4, enhet: "V" } }
    ],
    hint: ["Spenningsfall er \\(U = R \\cdot I\\).", "\\(U = 4 \\cdot 2\\). Trekk dette fra 12 V."],
    losning: "<p>\\(U = 4 \\cdot 2 = 8\\) V forsvinner i rusten.<br>Lykta får \\(12 - 8 = 4\\) V, og lyser svakt.</p>"
  },
  {
    id: "kjolevifte",
    niva: "vanskelig",
    tittel: "Sikring til vifta",
    tekst: "<p>Kjølevifta har motstand 0,8 Ω og står på 12 V. Ved start trekker motoren litt mer enn driftstrømmen. Du har sikringer på 10 A, 15 A, 20 A og 30 A.</p>",
    deler: [
      { tekst: "Hvor mange ampere trekker vifta når den går?", svar: { verdi: 15, enhet: "A" } },
      { tekst: "Hvilken sikring velger du?", svar: { valg: ["10 A", "15 A", "20 A", "30 A"], riktig: 2, forklaring: "10 A ryker. 15 A ligger på driftstrømmen og ryker lett ved start. 30 A er så stor at en feil kan varme ledningen lenge. 20 A tåler vifta og er den minste med margin." } },
      { tekst: "Hva er effekten når vifta går?", svar: { verdi: 180, enhet: "W" } }
    ],
    hint: ["\\(I = U : R\\). Effekt er \\(P = U \\cdot I\\).", "\\(I = 12 : 0{,}8\\)."],
    losning: "<p>\\(I = 12 : 0{,}8 = 15\\) A.<br>Velg 20 A.<br>\\(P = 12 \\cdot 15 = 180\\) W.</p>"
  },
  {
    id: "led-bar",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "LED-bar på 12 V",
    utstyr: "Multimeter, LED-bar eller motstand på 2,4 Ω, 12 V-kilde godkjent av læreren",
    hms: "Tenning av. Ikke jobb på airbag eller beltestrammere. Ikke kortslutt batteriet. Læreren kobler før du måler strøm.",
    tekst: "<p>Du måler 2,4 Ω i en LED-bar. Anlegget er 12 V. Hvor stor strøm skal du vente når lyset slås på? Mål etterpå og sammenlign.</p>",
    svar: { verdi: 5, enhet: "A" },
    hint: ["\\(I = U : R\\).", "\\(12 : 2{,}4\\)."],
    losning: "<p>\\(I = 12 : 2{,}4 = 5\\) A. Effekten er \\(12 \\cdot 5 = 60\\) W.</p>"
  },
  {
    id: "rep-cm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En latmannsarm er 40 cm. Hvor mange meter er det? Du trenger meter i momentformelen i neste delkapittel.</p>",
    svar: { verdi: 0.4, enhet: "m" },
    hint: ["1 m = 100 cm. Fra cm til m deler du med 100.", "\\(40 : 100 = 0{,}4\\)."],
    losning: "<p>\\(40 : 100 = 0{,}4\\) m.</p>"
  },
  {
    id: "rep-timer",
    type: "repetisjon",
    fra: "5.2",
    niva: "lett",
    tekst: "<p>\\(L = 200 + 180t\\), og lønna ble 1100 kr. Hvor mange timer er det?</p>",
    steg: [{ verdi: 900, enhet: "kr" }],
    svar: { verdi: 5, enhet: "h" },
    hint: ["Trekk fra 200, og del på 180.", "\\(1100 - 200 = 900\\)."],
    losning: "<p>\\(1100 - 200 = 900\\).<br>\\(t = 900 : 180 = 5\\) timer.</p>"
  },
  {
    id: "eksamen-ohm",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>En krets har spenning 12 V og motstand 4 Ω.</p>",
    deler: [
      { tekst: "Hvilken formel gir strømmen?", svar: { valg: ["\\(I = R : U\\)", "\\(I = U : R\\)", "\\(I = U \\cdot R\\)"], riktig: 1, forklaring: "Strøm er spenning delt på motstand." } },
      { tekst: "Hva er strømmen?", svar: { verdi: 3, enhet: "A" } },
      { tekst: "Hva er effekten?", svar: { verdi: 36, enhet: "W" } }
    ],
    hint: ["\\(I = U : R\\), og \\(P = U \\cdot I\\).", "\\(I = 12 : 4\\)."],
    losning: "<p>\\(I = 12 : 4 = 3\\) A.<br>\\(P = 12 \\cdot 3 = 36\\) W.</p>"
  }
]);
