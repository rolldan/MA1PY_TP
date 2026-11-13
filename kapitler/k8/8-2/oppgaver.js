Bok.oppgaver([
  {
    id: "mva-demper",
    niva: "lett",
    tittel: "Mva på støtdemper",
    tekst: "<p>En støtdemper koster 1 200 kr eks. mva. Mva er 25 %. Hvor mange kroner er mva?</p>",
    svar: { verdi: 300, enhet: "kr", tol: 0.5 },
    hint: ["Ta 25 % av prisen eks. mva.", "\\(1\\,200 \\cdot 0{,}25\\)."],
    losning: "<p>\\(1\\,200 \\cdot 0{,}25 = 300\\) kr.</p>"
  },
  {
    id: "inkl-demper",
    niva: "lett",
    tittel: "Pris inkl. mva",
    tekst: "<p>Samme støtdemper koster 1 200 kr eks. mva. Hva betaler dere inkl. mva?</p>",
    svar: { verdi: 1500, enhet: "kr", tol: 0.5 },
    hint: ["Gang med 1,25, eller legg mva på 300 kr oppå 1 200.", "\\(1\\,200 \\cdot 1{,}25\\)."],
    losning: "<p>\\(1\\,200 + 300 = 1\\,500\\) kr. Det samme som \\(1\\,200 \\cdot 1{,}25\\).</p>"
  },
  {
    id: "rabatt-focus",
    niva: "middels",
    tittel: "8 % på Focus",
    tekst: "<p>Ford Focus koster 28 000 kr. Kontantrabatten er 8 %.</p>",
    steg: [{ verdi: 2240, enhet: "kr" }, { verdi: 0.92 }],
    deler: [
      { tekst: "Hvor stor er rabatten i kroner?", svar: { verdi: 2240, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva blir prisen etter rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["8 % = 0,08. Gang prisen med 0,08.", "Ny pris: \\(28\\,000 \\cdot 0{,}92\\), eller trekk rabatten fra 28 000."],
    losning: "<p>a) \\(0{,}08 \\cdot 28\\,000 = 2\\,240\\) kr.</p><p>b) \\(28\\,000 - 2\\,240 = 25\\,760\\) kr.</p>"
  },
  {
    id: "deler-sum",
    niva: "middels",
    tittel: "Tre deler",
    tekst: "<p>Støtdemper 1 200 kr, bremseskiver 890 kr og bremseklosser 340 kr. Alle priser er eks. mva.</p>",
    steg: [{ verdi: 2430, enhet: "kr" }, { verdi: 607.5, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen eks. mva?", svar: { verdi: 2430, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er summen inkl. mva?", svar: { verdi: 3037.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg sammen de tre prisene først.", "Gang summen med 1,25."],
    losning: "<p>a) \\(1\\,200 + 890 + 340 = 2\\,430\\) kr.</p><p>b) \\(2\\,430 \\cdot 1{,}25 = 3\\,037{,}50\\) kr.</p>"
  },
  {
    id: "mva-andel",
    niva: "vanskelig",
    tittel: "20 % av kassalappen",
    tekst: "<p>Delene koster 2 430 kr eks. mva og 3 037,50 kr inkl. mva.</p>",
    deler: [
      { tekst: "Hvor mange kroner er mva?", svar: { verdi: 607.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent er mva av prisen inkl. mva?", svar: { verdi: 20, enhet: "%", tol: 0.1 } },
      {
        tekst: "Hvorfor er ikke svaret 25 %?",
        svar: {
          valg: [
            "Fordi 25 % regnes av prisen uten mva, mens spørsmålet er om prisen med mva",
            "Fordi mva på bildeler er 20 %",
            "Fordi rabatten på bilen trekker fra 5 prosentpoeng"
          ],
          riktig: 0,
          forklaring: "0,25 : 1,25 = 0,20. Satsen er 25 %, andelen av kassalappen er 20 %."
        }
      }
    ],
    hint: ["Mva-beløpet er differansen mellom inkl. og eks.", "Del mva-beløpet på prisen inkl. mva, og gang med 100."],
    losning: "<p>a) \\(3\\,037{,}50 - 2\\,430 = 607{,}50\\) kr.</p><p>b) \\(607{,}50 : 3\\,037{,}50 = 0{,}20 = 20\\) %.</p><p>c) 25 % er påslaget på prisen uten mva.</p>"
  },
  {
    id: "feil-rabatt",
    niva: "vanskelig",
    tittel: "Feil vekstfaktor",
    tekst: "<p>En elev regner 8 % rabatt på Focus slik: \\(28\\,000 \\cdot 0{,}8 = 22\\,400\\) kr.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "Hva er riktig pris etter 8 % rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Hva gjorde eleven feil?",
        svar: {
          valg: [
            "Ganget med 0,8, som er 20 % rabatt, ikke 8 %",
            "Glemte å legge på mva",
            "Trakk fra 8 kr i stedet for 8 %"
          ],
          riktig: 0,
          forklaring: "8 % rabatt gir faktor 0,92. Faktor 0,8 er 20 % rabatt."
        }
      }
    ],
    hint: ["8 % rabatt: dere betaler 92 %.", "\\(28\\,000 \\cdot 0{,}92\\)."],
    losning: "<p>Riktig pris er \\(28\\,000 \\cdot 0{,}92 = 25\\,760\\) kr. Eleven brukte 20 % rabatt.</p>"
  },
  {
    id: "lager-deler",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "To deler fra hylla",
    utstyr: "Prisliste, kalkulator eller regneark",
    hms: "Deler løftes med rett rygg. Ikke stable esker høyere enn hodet.",
    tekst: "<p>På hylla tar dere bare støtdemper (1 200 kr) og bremseklosser (340 kr), begge eks. mva. Bremseskivene venter.</p>",
    deler: [
      { tekst: "Hva koster de to delene eks. mva?", svar: { verdi: 1540, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster de inkl. mva?", svar: { verdi: 1925, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg sammen 1 200 og 340.", "Gang summen med 1,25."],
    losning: "<p>Eks. mva: \\(1\\,200 + 340 = 1\\,540\\) kr.</p><p>Inkl. mva: \\(1\\,540 \\cdot 1{,}25 = 1\\,925\\) kr.</p>"
  },
  {
    id: "repetisjon-endring",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "middels",
    tekst: "<p>Et sett bremseklosser kostet 400 kr. Nå koster det 340 kr. Hvor stor er nedgangen i prosent av den gamle prisen?</p>",
    steg: [{ verdi: 60, enhet: "kr" }],
    svar: { verdi: 15, enhet: "%", tol: 0.1 },
    hint: ["Finn først hvor mange kroner prisen har sunket.", "\\(60 : 400 \\cdot 100\\)."],
    losning: "<p>Nedgang: \\(400 - 340 = 60\\) kr.</p><p>\\(60 : 400 \\cdot 100 = 15\\) %.</p>"
  },
  {
    id: "eksamen-mva",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tekst: "<p>En del koster 1 200 kr eks. mva. Mva er 25 %.</p>",
    deler: [
      { tekst: "Hva er mva i kroner?", svar: { verdi: 300, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er prisen inkl. mva?", svar: { verdi: 1500, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["25 % av 1 200 er en fjerdedel.", "Legg mva på prisen, eller gang med 1,25."],
    losning: "<p>Mva: \\(1\\,200 : 4 = 300\\) kr. Inkl. mva: \\(1\\,500\\) kr.</p>"
  }
]);
