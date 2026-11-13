Bok.oppgaver([
  {
    id: "promille-til-prosent",
    niva: "lett",
    tekst: "<p>Skriv som prosent.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "5 ‰", svar: { verdi: 0.5, enhet: "%" } },
      { tekst: "20 ‰", svar: { verdi: 2, enhet: "%" } },
      { tekst: "50 ‰", svar: { verdi: 5, enhet: "%" } }
    ],
    hint: ["Del promillen på 10 for å få prosent.", "5 ‰ = 0,5 %. 20 ‰ = 2 %. 50 ‰ = 5 %."],
    losning: "<p>a) 0,5 % b) 2 % c) 5 %</p>"
  },
  {
    id: "prosent-til-promille",
    niva: "lett",
    tekst: "<p>Skriv som promille.</p>",
    stegForSteg: false,
    deler: [
      { tekst: "2 %", svar: { verdi: 20, enhet: "‰" } },
      { tekst: "0,5 %", svar: { verdi: 5, enhet: "‰" } },
      { tekst: "1 %", svar: { verdi: 10, enhet: "‰" } }
    ],
    hint: ["Gang prosenten med 10 for å få promille.", "2 % = 20 ‰. 0,5 % = 5 ‰. 1 % = 10 ‰."],
    losning: "<p>a) 20 ‰ b) 5 ‰ c) 10 ‰</p>"
  },
  {
    id: "fem-prosent",
    niva: "lett",
    tekst: "<p>En bøtte på 10 L skal være 5 % skjærevæskekonsentrat. Hvor mange liter konsentrat er det?</p>",
    svar: { verdi: 0.5, enhet: "L" },
    hint: ["5 % = 0,05. Gang med 10 L.", "\\(10 \\cdot 0{,}05 = 0{,}5\\) L."],
    losning: "<p>\\(10 \\cdot 0{,}05 = 0{,}5\\) L.</p>"
  },
  {
    id: "totakt-4l",
    niva: "middels",
    tekst: "<p>Elias fyller 4 L bensin. Oljen skal være 2 % av bensinen.</p>",
    deler: [
      { tekst: "Hvor mange promille er 2 %?", svar: { verdi: 20, enhet: "‰" } },
      { tekst: "Hvor mange milliliter olje skal han ha i?", svar: { verdi: 80, enhet: "ml" } }
    ],
    hint: ["2 % = 20 ‰, og 20 mL per liter.", "\\(4 \\cdot 20 = 80\\) mL."],
    losning: "<p>2 % = 20 ‰. Olje: \\(4 \\cdot 20 = 80\\) mL.</p>"
  },
  {
    id: "tank-5l",
    niva: "middels",
    tekst: "<p>En tank på 5 L skal ha 6 % skjærevæskekonsentrat av den ferdige blandingen.</p>",
    deler: [
      { tekst: "Hvor mange promille er 6 %?", svar: { verdi: 60, enhet: "‰" } },
      { tekst: "Hvor mange milliliter konsentrat?", svar: { verdi: 300, enhet: "ml" } },
      { tekst: "Hvor mange milliliter vann?", svar: { verdi: 4700, enhet: "ml" } }
    ],
    hint: ["6 % = 60 ‰. 5 L = 5000 mL. Ta 6 % av 5000.", "\\(5000 \\cdot 0{,}06 = 300\\) mL. Vann: \\(5000 - 300 = 4700\\) mL."],
    losning: "<p>60 ‰. Konsentrat: 300 mL. Vann: 4700 mL.</p>"
  },
  {
    id: "messing",
    niva: "middels",
    tekst: "<p>500 g messing inneholder 30 ‰ bly.</p>",
    deler: [
      { tekst: "Hvor mange prosent er 30 ‰?", svar: { verdi: 3, enhet: "%" } },
      { tekst: "Hvor mange gram bly er det?", svar: { verdi: 15, enhet: "g" } }
    ],
    hint: ["Del promillen på 10. Deretter tar du den prosenten av 500 g.", "30 ‰ = 3 %. \\(500 \\cdot 0{,}03 = 15\\) g."],
    losning: "<p>30 ‰ = 3 %. Bly: \\(500 \\cdot 0{,}03 = 15\\) g.</p>"
  },
  {
    id: "toleranse-promille",
    niva: "vanskelig",
    tekst: "<p>En aksel er 500 mm. Toleransen er \\(\\pm 0{,}5\\) mm.</p>",
    steg: [{ verdi: 0.001 }],
    deler: [
      { tekst: "Hvor mange promille er den relative toleransen?", svar: { verdi: 1, enhet: "‰" } },
      { tekst: "Hvor mange prosent er det samme avviket?", svar: { verdi: 0.1, enhet: "%" } }
    ],
    hint: ["Del 0,5 mm på 500 mm. 0,001 er 1 ‰ og 0,1 %.", "\\(0{,}5 : 500 = 0{,}001\\)."],
    losning: "<p>\\(0{,}5 : 500 = 0{,}001 = 1\\) ‰ \\(= 0{,}1\\) %.</p>"
  },
  {
    id: "for-mye-olje",
    niva: "vanskelig",
    tekst: "<p>Elias heller 50 mL olje i 1 L bensin og sier at blandingen er 2 %. Riktig mengde til 2 % er 20 mL per liter.</p>",
    deler: [
      { tekst: "Hvor mange prosent olje har han faktisk hatt i?", svar: { verdi: 5, enhet: "%" } },
      { tekst: "Hvor mange milliliter for mye er det?", svar: { verdi: 30, enhet: "ml" } },
      { tekst: "Hvor mange deler bensin går det på 1 del olje i blandingen hans?", svar: { verdi: 20 } }
    ],
    hint: ["50 mL av 1000 mL er 5 %. Sammenlign med 20 mL. 1000 : 50 gir forholdet.", "50 : 1000 = 0,05 = 5 %. For mye: \\(50 - 20 = 30\\) mL. Forhold 1 : 20."],
    losning: "<p>\\(50 : 1000 = 5\\) %. Han har 30 mL for mye. Forholdet er 1 : 20, fordi \\(1000 : 50 = 20\\).</p>"
  },
  {
    id: "botte",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "10 L skjærevæske",
    utstyr: "Bøtte på 10 L, målebeger, konsentrat eller farget vann, hansker",
    hms: "Unngå hudkontakt. Rester i merket dunk, ikke i sluket. Ikke bruk trykkluft på væsken.",
    tekst: "<p>Etiketten sier 5 % konsentrat av den ferdige blandingen. Du fyller 10 L.</p>",
    deler: [
      { tekst: "Hvor mye konsentrat?", svar: { verdi: 0.5, enhet: "L" } },
      { tekst: "Hvor mye vann?", svar: { verdi: 9.5, enhet: "L" } }
    ],
    hint: ["5 % av 10 L er konsentratet. Vannet er resten, slik at summen blir 10 L.", "\\(10 \\cdot 0{,}05 = 0{,}5\\) L. Vann: \\(10 - 0{,}5 = 9{,}5\\) L."],
    losning: "<p>Konsentrat: 0,5 L. Vann: 9,5 L. 5 % er 50 ‰.</p>"
  },
  {
    id: "rep-ark",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En tegning sier 0,25 m. Hvor mange millimeter er det?</p>",
    svar: { verdi: 250, enhet: "mm" },
    hint: ["Fra meter til millimeter ganger du med 1000.", "\\(0{,}25 \\cdot 1000 = 250\\) mm."],
    losning: "<p>\\(0{,}25 \\cdot 1000 = 250\\) mm.</p>"
  },
  {
    id: "rep-under",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>Kravet er \\(72 \\pm 0{,}3\\) mm. Et mål er 71,6 mm. Er emnet godkjent?</p>",
    svar: { valg: ["Ja, innenfor nedre grensemål", "Nei, under nedre grensemål"], riktig: 1 },
    hint: ["Nedre grensemål er 72 − 0,3.", "71,7 mm er nedre grense. 71,6 er under, så emnet er ikke godkjent."],
    losning: "<p>Nedre grensemål er 71,7 mm. 71,6 mm er under, så emnet er ikke godkjent.</p>"
  },
  {
    id: "eksamen-promille",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Uten kalkulator.</p>",
    deler: [
      { tekst: "Skriv 0,035 som prosent.", svar: { verdi: 3.5, enhet: "%" } },
      { tekst: "Skriv 0,035 som promille.", svar: { verdi: 35, enhet: "‰" } },
      { tekst: "Hvor mange gram er 7 ‰ av 2000 g?", svar: { verdi: 14, enhet: "g" } }
    ],
    hint: ["Desimal til prosent: flytt kommaet to plasser. Til promille: tre plasser. 7 ‰ er 7 tusendeler.", "0,035 = 3,5 % = 35 ‰. \\(2000 \\cdot 7 : 1000 = 14\\) g."],
    losning: "<p>a) 3,5 % b) 35 ‰ c) \\(2000 \\cdot 0{,}007 = 14\\) g</p>"
  }
]);
