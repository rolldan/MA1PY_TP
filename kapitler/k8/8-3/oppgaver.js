Bok.oppgaver([
  {
    id: "rente-ti",
    niva: "lett",
    tittel: "Ett år av et mindre lån",
    tekst: "<p>Et lån på 10 000 kr har 6,5 % enkel rente per år. Hvor mange kroner er renta det første året?</p>",
    svar: { verdi: 650, enhet: "kr", tol: 0.5 },
    hint: ["6,5 % = 0,065.", "\\(10\\,000 \\cdot 0{,}065\\)."],
    losning: "<p>\\(10\\,000 \\cdot 0{,}065 = 650\\) kr.</p>"
  },
  {
    id: "rente-ett",
    niva: "lett",
    tittel: "Prosjektlånet, ett år",
    tekst: "<p>Prosjektlånet er 15 000 kr med 6,5 % enkel rente per år. Hvor stor er renta det første året?</p>",
    svar: { verdi: 975, enhet: "kr", tol: 0.5 },
    hint: ["Samme sats som i oppgaven over, nytt beløp.", "\\(15\\,000 \\cdot 0{,}065\\)."],
    losning: "<p>\\(15\\,000 \\cdot 0{,}065 = 975\\) kr.</p>"
  },
  {
    id: "to-aar",
    niva: "middels",
    tittel: "To år",
    tekst: "<p>Lånet er 15 000 kr. Enkel rente 6,5 % per år i 2 år.</p>",
    steg: [{ verdi: 975, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er renta for begge årene?", svar: { verdi: 1950, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye betales tilbake i alt?", svar: { verdi: 16950, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Rente ett år er 975 kr. Gang med 2.", "Legg renta på lånebeløpet."],
    losning: "<p>a) \\(15\\,000 \\cdot 0{,}065 \\cdot 2 = 1\\,950\\) kr.</p><p>b) \\(15\\,000 + 1\\,950 = 16\\,950\\) kr.</p>"
  },
  {
    id: "per-maned",
    niva: "middels",
    tittel: "Fordelt på 24 måneder",
    tekst: "<p>De 16 950 kronene fordeles likt på 24 måneder. Hvor mye blir det per måned?</p>",
    svar: { verdi: 706.25, enhet: "kr", tol: 0.01 },
    hint: ["Del totalbeløpet på 24.", "\\(16\\,950 : 24\\)."],
    losning: "<p>\\(16\\,950 : 24 = 706{,}25\\) kr per måned. Dette er enkel rente fordelt flatt, ikke et annuitetslån.</p>"
  },
  {
    id: "drivstoff",
    niva: "middels",
    tittel: "Etter prosjektet",
    tekst: "<p>Et eksempel på drift: 0,6 liter per mil, 1 000 mil i året, 21 kr per liter. Drivstoffet skal ikke inn i potten på 50 000 kr.</p>",
    deler: [
      { tekst: "Hvor mange liter går med på ett år?", svar: { verdi: 600, enhet: "L", tol: 0.5 } },
      { tekst: "Hva koster drivstoffet?", svar: { verdi: 12600, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Hører de 12 600 kronene hjemme i prosjektpotten?",
        svar: {
          valg: [
            "Nei. Det er en kostnad ved å eie bilen etter oppussingen.",
            "Ja. Alt som har med bilen å gjøre, skal inn i de 50 000.",
            "Ja, men bare halvparten, fordi prosjektet varer et halvt år."
          ],
          riktig: 0,
          forklaring: "Potten dekker kjøp og oppussing. Drivstoff er drift etterpå."
        }
      }
    ],
    hint: ["Liter = mil · liter per mil.", "Kroner = liter · pris per liter."],
    losning: "<p>a) \\(1\\,000 \\cdot 0{,}6 = 600\\) L.</p><p>b) \\(600 \\cdot 21 = 12\\,600\\) kr.</p><p>c) Beløpet ligger utenfor prosjektpotten.</p>"
  },
  {
    id: "rente-prosent",
    niva: "vanskelig",
    tittel: "Hva koster lånet ekstra?",
    tekst: "<p>Renta er 1 950 kr på et lån på 15 000 kr.</p>",
    deler: [
      { tekst: "Hvor mange prosent er renta av lånebeløpet?", svar: { verdi: 13, enhet: "%", tol: 0.1 } },
      {
        tekst: "Hva slags regnemåte er brukt i prosjektet?",
        svar: {
          valg: ["Enkel rente", "Annuitetslån", "Serielån"],
          riktig: 0,
          forklaring: "Renta er lån · sats · tid, av det opprinnelige beløpet."
        }
      }
    ],
    hint: ["Del renta på lånebeløpet.", "\\(1\\,950 : 15\\,000 \\cdot 100\\). To år med 6,5 % uten rentes rente er 13 %."],
    losning: "<p>\\(1\\,950 : 15\\,000 \\cdot 100 = 13\\) %. Regnemåten er enkel rente.</p>"
  },
  {
    id: "verditap",
    niva: "vanskelig",
    tittel: "Verdi om tre år",
    tekst: "<p>En bil til 20 000 kr taper 15 % av verdien hvert år. Vekstfaktoren er 0,85. Regn uten å blande inn prosjektlånet.</p>",
    steg: [{ verdi: 17000, enhet: "kr" }, { verdi: 14450, enhet: "kr" }],
    deler: [
      { tekst: "Hva er bilen verdt etter ett år?", svar: { verdi: 17000, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bilen verdt etter tre år?", svar: { verdi: 12282.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Ett år: gang med 0,85.", "Tre år: \\(20\\,000 \\cdot 0{,}85 \\cdot 0{,}85 \\cdot 0{,}85\\)."],
    losning: "<p>Etter ett år: \\(20\\,000 \\cdot 0{,}85 = 17\\,000\\) kr.</p><p>Etter to år: \\(17\\,000 \\cdot 0{,}85 = 14\\,450\\) kr.</p><p>Etter tre år: \\(14\\,450 \\cdot 0{,}85 = 12\\,282{,}50\\) kr. Omtrent 61 % av prisen står igjen, siden \\(0{,}85^3 \\approx 0{,}614\\).</p>"
  },
  {
    id: "fordeling",
    type: "verksted",
    merke: "K",
    niva: "middels",
    tittel: "Prosent av potten",
    utstyr: "Regneark og budsjettet fra 8.2",
    hms: "Klasseromsøkt. Lagre fila før dere bytter stol.",
    tekst: "<p>Bruk eksempelbudsjettet: bil 25 760 kr, forsikring 4 800 kr, rente 1 950 kr. Potten er 50 000 kr. Lag deretter diagram av <em>lagets</em> poster.</p>",
    deler: [
      { tekst: "Hvor mange prosent er bilen av potten? Avrund til én desimal.", svar: { verdi: 51.5, enhet: "%", tol: 0.1 } },
      { tekst: "Hvor mange prosent er forsikringen?", svar: { verdi: 9.6, enhet: "%", tol: 0.1 } },
      { tekst: "Hvor mange prosent er renta?", svar: { verdi: 3.9, enhet: "%", tol: 0.1 } }
    ],
    hint: ["Del posten på 50 000 og gang med 100.", "Bilen: \\(25\\,760 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>Bil: \\(51{,}5\\) %. Forsikring: \\(9{,}6\\) %. Rente: \\(3{,}9\\) %.</p><p>\\(25\\,760 : 50\\,000 = 0{,}5152\\), som er 51,5 % med én desimal.</p>"
  },
  {
    id: "repetisjon-lanetype",
    type: "repetisjon",
    fra: "kapittel 7",
    niva: "lett",
    tekst: "<p>Et lån har like store avdrag hver termin. Renta synker fordi restgjelda blir mindre. Hva slags lån er det?</p>",
    stegForSteg: false,
    svar: {
      valg: ["Serielån", "Annuitetslån", "Et lån uten rente"],
      riktig: 0,
      forklaring: "Serielån har like avdrag. Annuitet har like terminbeløp, der avdraget stiger og renta synker."
    },
    hint: ["Se på avdraget, ikke bare på renta.", "Like avdrag er serielån. Like terminbeløp er annuitet."],
    losning: "<p>Serielån. I bilprosjektet bruker vi likevel enkel rente som overslag, og det skal dere si høyt hvis læreren spør.</p>"
  },
  {
    id: "eksamen-lan",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Et verksted låner 15 000 kr til deler. Enkel rente er 6,5 % per år i 2 år.</p>",
    deler: [
      { tekst: "Hvor stor er renta?", svar: { verdi: 1950, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye betales tilbake i alt?", svar: { verdi: 16950, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["\\(rente = lån \\cdot sats \\cdot år\\).", "\\(15\\,000 \\cdot 0{,}065 \\cdot 2\\)."],
    losning: "<p>Rente: \\(1\\,950\\) kr. Tilbake: \\(16\\,950\\) kr.</p>"
  }
]);
