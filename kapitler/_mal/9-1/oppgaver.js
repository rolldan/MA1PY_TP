Bok.oppgaver([
  {
    id: "eksempel-tall",
    niva: "lett",
    tekst: "<p>Et LED-lys på 12 V har motstand 2,4 Ω. Hvor stor er strømmen?</p>",
    steg: [],
    svar: { verdi: 5, enhet: "A" },
    hint: ["\\(I = U / R\\)", "\\(I = 12 / 2{,}4\\)"],
    losning: "<p>\\(I = 12 : 2{,}4 = 5\\) A</p>"
  },
  {
    id: "eksempel-deler",
    niva: "middels",
    tekst: "<p>Felles tekst.</p>",
    steg: [{ verdi: 15000, enhet: "g" }],
    deler: [
      { tekst: "Tallsvar med enhet", svar: { verdi: 1250, enhet: "stk" } },
      { tekst: "Flervalg", svar: { valg: ["Ja", "Nei"], riktig: 1, forklaring: "Kort begrunnelse." } },
      { tekst: "Åpent svar", svar: { fritekst: true, fasit: "<p>Hva et godt svar inneholder.</p>" } }
    ],
    hint: ["Hint 1", "Hint 2 gir første regnesteg."],
    losning: "<p>Løsningsforslag</p>"
  },
  {
    id: "eksempel-verksted",
    type: "verksted",
    merke: "V",
    niva: "middels",
    utstyr: "Skyvelære",
    hms: "Vernebriller",
    tekst: "<p>Verkstedoppgave.</p>",
    svar: { verdi: 1.6, enhet: "mm" },
    hint: ["…"],
    losning: "<p>…</p>"
  },
  {
    id: "eksempel-repetisjon",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>…</p>",
    svar: { verdi: 0.45 },
    hint: ["…"],
    losning: "<p>…</p>"
  },
  {
    id: "eksempel-eksamen",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>…</p>",
    svar: { verdi: 96, enhet: "kr" },
    hint: ["…"],
    losning: "<p>…</p>"
  }
]);
