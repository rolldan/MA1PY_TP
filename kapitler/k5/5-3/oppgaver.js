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
  },
  {
    id: "takelys",
    niva: "lett",
    tittel: "Tåkelys",
    tekst: "<p>Et tåkelys har motstand 4 Ω og står på 12 V. Hvor stor er strømmen? Bruk \\(I = U : R\\).</p>",
    svar: { verdi: 3, enhet: "A" },
    hint: ["Strømmen er spenning delt på motstand, ikke motstand delt på spenning.", "\\(I = 12 : 4\\)."],
    losning: "<p>\\(I = 12 : 4 = 3\\) A. Brøken \\(4 : 12\\) hadde gitt 0,33 A, og det er for lite for et lys på 12 V.</p>"
  },
  {
    id: "horn-watt",
    niva: "lett",
    tittel: "Hornet i watt",
    tekst: "<p>Et horn trekker 4 A på 12 V. Hvor stor er effekten?</p>",
    svar: { verdi: 48, enhet: "W" },
    hint: ["Effekt er spenning ganger strøm: \\(P = U \\cdot I\\).", "\\(P = 12 \\cdot 4\\)."],
    losning: "<p>\\(P = 12 \\cdot 4 = 48\\) W.</p>"
  },
  {
    id: "varsellampe",
    niva: "lett",
    tittel: "Varsellampe",
    tekst: "<p>En varsellampe trekker 2 A når den får 12 V. Hva er motstanden i lampa?</p>",
    svar: { verdi: 6, enhet: "Ω" },
    hint: ["Motstand er spenning delt på strøm: \\(R = U : I\\).", "\\(R = 12 : 2\\)."],
    losning: "<p>\\(R = 12 : 2 = 6\\) Ω.<br>Kontroll: \\(6 \\cdot 2 = 12\\) V.</p>"
  },
  {
    id: "lastebil-lys",
    niva: "lett",
    tittel: "Arbeidslys på 24 V",
    tekst: "<p>Et arbeidslys på en lastebil har motstand 12 Ω. Anlegget er 24 V. Hvor stor er strømmen?</p>",
    svar: { verdi: 2, enhet: "A" },
    hint: ["\\(I = U : R\\). Spenningen er 24 V, ikke 12 V.", "\\(I = 24 : 12\\)."],
    losning: "<p>\\(I = 24 : 12 = 2\\) A.</p>"
  },
  {
    id: "bremselys",
    niva: "middels",
    tittel: "Bremselys merket 21 W",
    tekst: "<p>Et bremselys er merket 12 V og 21 W. Effekten er \\(P = U \\cdot I\\).</p>",
    deler: [
      { tekst: "Hvor stor strøm trekker lampa?", svar: { verdi: 1.75, enhet: "A" } },
      { tekst: "Hva er motstanden i lampa?", svar: { verdi: 6.857142857142857, enhet: "Ω" } }
    ],
    steg: [{ verdi: 1.75, enhet: "A" }],
    hint: ["Du kjenner effekt og spenning. Snu \\(P = U \\cdot I\\) til \\(I = P : U\\). Motstanden er \\(R = U : I\\).", "\\(I = 21 : 12\\)."],
    losning: "<p>\\(I = 21 : 12 = 1{,}75\\) A.<br>\\(R = 12 : 1{,}75 = 6{,}86\\) Ω.<br>Kontroll: \\(12 \\cdot 1{,}75 = 21\\) W.</p>"
  },
  {
    id: "jord-plugg",
    niva: "middels",
    tittel: "Dårlig pinne i pluggen",
    tekst: "<p>En pinne i tilhengerpluggen er oksidert. Motstanden der er 1,5 Ω, og strømmen gjennom pinnen er 4 A. Batteriet er 12 V.</p>",
    deler: [
      { tekst: "Hvor stort er spenningsfallet over pinnen?", svar: { verdi: 6, enhet: "V" } },
      { tekst: "Hvor mange volt er igjen til lampa, hvis hele fallet sitter i pinnen?", svar: { verdi: 6, enhet: "V" } }
    ],
    hint: ["Spenningsfall er \\(U = R \\cdot I\\). Det som er igjen, er batterispenningen minus fallet.", "\\(U = 1{,}5 \\cdot 4\\)."],
    losning: "<p>\\(U = 1{,}5 \\cdot 4 = 6\\) V forsvinner i pinnen.<br>Lampa får \\(12 - 6 = 6\\) V.</p>"
  },
  {
    id: "rele-spole",
    niva: "middels",
    tittel: "Rele som trekker",
    tekst: "<p>Spolen i et rele måler 60 Ω. Anlegget er 12 V. En medelev fikk 5 A og vil legge en stor sikring.</p>",
    deler: [
      { tekst: "Hva er strømmen i spolen?", svar: { verdi: 0.2, enhet: "A" } },
      { tekst: "Hvordan fikk medeleven 5 A?", svar: { valg: ["Delte motstand på spenning", "Glemte å gange med 12", "Brukte momentformelen"], riktig: 0, forklaring: "60 : 12 = 5. Riktig brøk er 12 : 60." } }
    ],
    hint: ["\\(I = U : R\\). En spole skal trekke lite strøm.", "\\(I = 12 : 60\\)."],
    losning: "<p>\\(I = 12 : 60 = 0{,}2\\) A.<br>5 A er \\(60 : 12\\), altså brøken snudd. Det er for mye for en spole, og overslaget avslører feilen.</p>"
  },
  {
    id: "serie-lys",
    niva: "middels",
    tittel: "To lys i serie",
    tekst: "<p>To like arbeidslys på en lastebil kobles i serie på 24 V. Hver lampe er 8 Ω. I serie legger du motstandene sammen. Effekten er \\(P = U \\cdot I\\).</p>",
    deler: [
      { tekst: "Hva er den totale motstanden?", svar: { verdi: 16, enhet: "Ω" } },
      { tekst: "Hvor stor strøm trekker kretsen?", svar: { verdi: 1.5, enhet: "A" } },
      { tekst: "Hva er effekten?", svar: { verdi: 36, enhet: "W" } }
    ],
    steg: [{ verdi: 16, enhet: "Ω" }],
    hint: ["Legg sammen 8 Ω og 8 Ω. Strømmen er \\(I = U : R\\) med den totale motstanden.", "\\(R = 16\\) Ω. \\(I = 24 : 16\\)."],
    losning: "<p>\\(R = 8 + 8 = 16\\) Ω.<br>\\(I = 24 : 16 = 1{,}5\\) A.<br>\\(P = 24 \\cdot 1{,}5 = 36\\) W.</p>"
  },
  {
    id: "vinsj-sikring",
    niva: "vanskelig",
    tittel: "Sikring til vinsjen",
    tekst: "<p>En vinsjmotor på 12 V har motstand 0,4 Ω når den går. Ved start trekker den mer enn driftstrømmen. I skuffen ligger sikringer på 20 A, 25 A, 40 A og 50 A.</p>",
    deler: [
      { tekst: "Hvor mange ampere trekker vinsjen når den går?", svar: { verdi: 30, enhet: "A" } },
      { tekst: "Hvilken sikring velger du?", svar: { valg: ["20 A", "25 A", "40 A", "50 A"], riktig: 2, forklaring: "20 A og 25 A ryker under drift. 50 A er så stor at en feil kan varme ledningen lenge. 40 A tåler 30 A og har litt margin til start." } },
      { tekst: "Hva er effekten når vinsjen går?", svar: { verdi: 360, enhet: "W" } }
    ],
    hint: ["\\(I = U : R\\). Ikke snu brøken. Effekten er \\(P = U \\cdot I\\).", "\\(I = 12 : 0{,}4\\)."],
    losning: "<p>\\(I = 12 : 0{,}4 = 30\\) A.<br>Velg 40 A.<br>\\(P = 12 \\cdot 30 = 360\\) W.</p>"
  },
  {
    id: "maks-rust",
    niva: "vanskelig",
    tittel: "Hvor mye rust tåler lampa?",
    tekst: "<p>Lampa skal ha minst 10 V for å lyse skikkelig. Batteriet er 12 V. Når lampa lyser, går det 2 A. Du måler etterpå 2,5 Ω i et dårlig jordpunkt.</p>",
    deler: [
      { tekst: "Hvor stort spenningsfall tåler du før lampa får bare 10 V?", svar: { verdi: 2, enhet: "V" } },
      { tekst: "Hvor stor kan motstanden i jordpunktet høyst være da?", svar: { verdi: 1, enhet: "Ω" } },
      { tekst: "Hvor stort blir spenningsfallet når jordpunktet er 2,5 Ω?", svar: { verdi: 5, enhet: "V" } },
      { tekst: "Hvor mange volt får lampa da?", svar: { verdi: 7, enhet: "V" } },
      { tekst: "Lyser lampa skikkelig?", svar: { valg: ["Ja, 7 V er over 10 V", "Nei, 7 V er under 10 V", "Ja, motstanden er under 1 Ω"], riktig: 1, forklaring: "7 V er mindre enn 10 V, og 2,5 Ω er mer enn 1 Ω." } }
    ],
    steg: [{ verdi: 2, enhet: "V" }],
    hint: ["Tillatt fall er batteri minus 10 V. Motstanden er det fallet delt på strømmen: \\(R = U : I\\).", "Tillatt fall er \\(12 - 10 = 2\\) V. \\(R = 2 : 2\\). Med 2,5 Ω: \\(U = 2{,}5 \\cdot 2\\)."],
    losning: "<p>Tillatt fall: \\(12 - 10 = 2\\) V.<br>\\(R = 2 : 2 = 1\\) Ω.<br>Målt fall: \\(2{,}5 \\cdot 2 = 5\\) V.<br>Lampa får \\(12 - 5 = 7\\) V. Det er under 10 V, så den lyser ikke skikkelig.</p>"
  },
  {
    id: "rele-mal",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "Mål spolen",
    utstyr: "Multimeter, rele eller motstand på 15 Ω, 12 V-kilde godkjent av læreren",
    hms: "Tenning av. Mål motstand med kretsen spenningsløs. Læreren kobler før du måler strøm. Ikke kortslutt batteriet. Ikke jobb på airbag.",
    tekst: "<p>Du måler 15 Ω på en spole som skal stå på 12 V. Hvilken strøm venter du når spolen får spenning? Regn også effekten, og sammenlign med målingen etterpå.</p>",
    deler: [
      { tekst: "Hvilken strøm venter du?", svar: { verdi: 0.8, enhet: "A" } },
      { tekst: "Hvilken effekt venter du?", svar: { verdi: 9.6, enhet: "W" } }
    ],
    hint: ["\\(I = U : R\\), og \\(P = U \\cdot I\\).", "\\(I = 12 : 15\\)."],
    losning: "<p>\\(I = 12 : 15 = 0{,}8\\) A.<br>\\(P = 12 \\cdot 0{,}8 = 9{,}6\\) W.</p>"
  }
]);
