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
  },
  {
    id: "rente-tyve",
    niva: "lett",
    tittel: "Ett år på 20 000",
    tekst: "<p>Et lån på 20 000 kr har 6,5 % enkel rente per år. Hvor mange kroner er renta det første året?</p>",
    steg: [{ verdi: 0.065 }],
    svar: { verdi: 1300, enhet: "kr", tol: 0.5 },
    hint: ["6,5 % = 0,065.", "\\(20\\,000 \\cdot 0{,}065\\)."],
    losning: "<p>\\(20\\,000 \\cdot 0{,}065 = 1\\,300\\) kr.</p>"
  },
  {
    id: "en-prosent",
    niva: "lett",
    tittel: "Én prosent av potten",
    tekst: "<p>Potten er 50 000 kr. Hvor mange kroner er 1 % av potten?</p>",
    svar: { verdi: 500, enhet: "kr", tol: 0.5 },
    hint: ["1 % er en hundredel.", "\\(50\\,000 : 100\\)."],
    losning: "<p>\\(50\\,000 \\cdot 0{,}01 = 500\\) kr.</p>"
  },
  {
    id: "lan-andel",
    niva: "lett",
    tittel: "Lånet som andel av potten",
    tekst: "<p>Prosjektlånet er 15 000 kr. Potten er 50 000 kr. Hvor mange prosent er lånet av potten?</p>",
    svar: { verdi: 30, enhet: "%", tol: 0.1 },
    hint: ["Del lånet på potten og gang med 100.", "\\(15\\,000 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>\\(15\\,000 : 50\\,000 = 0{,}30 = 30\\) %. Lånet er penger inn. Ekstrakostnaden i budsjettet er bare renta.</p>"
  },
  {
    id: "annet-lan",
    niva: "middels",
    tittel: "Et mindre lån i to år",
    tekst: "<p>Laget låner 12 000 kr i stedet. Enkel rente er 6,5 % per år i 2 år. Beløpet fordeles likt på 24 måneder.</p>",
    steg: [{ verdi: 780, enhet: "kr" }, { verdi: 1560, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er renta for begge årene?", svar: { verdi: 1560, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye betales tilbake i alt?", svar: { verdi: 13560, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye blir det per måned?", svar: { verdi: 565, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Rente ett år: \\(12\\,000 \\cdot 0{,}065\\). Gang med 2.", "Måned: del totalbeløpet på 24."],
    losning: "<p>Rente: \\(12\\,000 \\cdot 0{,}065 \\cdot 2 = 1\\,560\\) kr.</p><p>Tilbake: \\(12\\,000 + 1\\,560 = 13\\,560\\) kr.</p><p>Per måned: \\(13\\,560 : 24 = 565\\) kr. Fortsatt enkel rente, ikke annuitet.</p>"
  },
  {
    id: "hoyere-rente",
    niva: "middels",
    tittel: "8 % i stedet for 6,5 %",
    tekst: "<p>Samme lån på 15 000 kr i 2 år, men satsen er 8 % enkel rente. Med 6,5 % var renta 1 950 kr.</p>",
    steg: [{ verdi: 0.08 }, { verdi: 1200, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stor er renta med 8 %?", svar: { verdi: 2400, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner dyrere er det enn 1 950 kr?", svar: { verdi: 450, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["\\(15\\,000 \\cdot 0{,}08 \\cdot 2\\).", "Trekk 1 950 fra den nye renta."],
    losning: "<p>\\(15\\,000 \\cdot 0{,}08 \\cdot 2 = 2\\,400\\) kr.</p><p>Ekstra: \\(2\\,400 - 1\\,950 = 450\\) kr. Forskjellen i sats er 1,5 prosentpoeng, ikke 1,5 % av lånet alene.</p>"
  },
  {
    id: "uforutsett-andel",
    niva: "middels",
    tittel: "Uforutsett av potten",
    tekst: "<p>På Focus er uforutsett 7 000 kr. Potten er 50 000 kr. Hvor mange prosent av potten er den posten?</p>",
    svar: { verdi: 14, enhet: "%", tol: 0.1 },
    hint: ["Del posten på 50 000 og gang med 100.", "\\(7\\,000 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>\\(7\\,000 : 50\\,000 \\cdot 100 = 14\\) %.</p>"
  },
  {
    id: "tre-poster",
    niva: "middels",
    tittel: "Bil, forsikring og rente",
    tekst: "<p>I eksempelbudsjettet: bil 25 760 kr, forsikring 4 800 kr og rente 1 950 kr. Potten er 50 000 kr.</p>",
    steg: [{ verdi: 25760, enhet: "kr" }, { verdi: 32510, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen av de tre postene?", svar: { verdi: 32510, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent av potten er summen? Avrund til én desimal.", svar: { verdi: 65, enhet: "%", tol: 0.05 } }
    ],
    hint: ["Legg sammen 25 760, 4 800 og 1 950.", "\\(32\\,510 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>Sum: \\(25\\,760 + 4\\,800 + 1\\,950 = 32\\,510\\) kr.</p><p>\\(32\\,510 : 50\\,000 \\cdot 100 = 65{,}02\\) %, som er 65,0 % med én desimal.</p>"
  },
  {
    id: "budsjett-underveis",
    niva: "vanskelig",
    tittel: "Underveis i Focus-budsjettet",
    tekst: "<p>Bil etter rabatt 25 760 kr, uforutsett 7 000 kr, forsikring 4 800 kr og deler 3 037,50 kr. Deretter kommer lakk 1 900 kr, basskasse 1 705 kr og rente 1 950 kr. Potten er 50 000 kr.</p>",
    steg: [{ verdi: 32760, enhet: "kr" }, { verdi: 40597.5, enhet: "kr" }, { verdi: 5555, enhet: "kr" }],
    deler: [
      { tekst: "Hva er summen etter bil, uforutsett, forsikring og deler?", svar: { verdi: 40597.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye av potten er igjen da?", svar: { verdi: 9402.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er igjen når lakk, basskasse og rente også er med?", svar: { verdi: 3847.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Legg de fire første postene. Trekk summen fra 50 000.", "De tre siste koster \\(1\\,900 + 1\\,705 + 1\\,950\\)."],
    losning: "<p>Etter deler: \\(25\\,760 + 7\\,000 + 4\\,800 + 3\\,037{,}50 = 40\\,597{,}50\\) kr.</p><p>Igjen da: \\(50\\,000 - 40\\,597{,}50 = 9\\,402{,}50\\) kr.</p><p>Siste tre: \\(5\\,555\\) kr. Til slutt: \\(9\\,402{,}50 - 5\\,555 = 3\\,847{,}50\\) kr.</p>"
  },
  {
    id: "drivstoff-i-potten",
    niva: "vanskelig",
    tittel: "Drivstoffet som ikke hører hjemme",
    tekst: "<p>Eksempelbudsjettet summerer til 46 152,50 kr. Etter prosjektet: 0,6 liter per mil, 1 000 mil i året, 21 kr per liter. En elev legger ett års drivstoff inn i potten.</p>",
    steg: [{ verdi: 600, enhet: "L" }, { verdi: 12600, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir summen hvis drivstoffet legges til?", svar: { verdi: 58752.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye over 50 000 kr er den summen?", svar: { verdi: 8752.5, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Hører drivstoffet hjemme i prosjektpotten?",
        svar: {
          valg: [
            "Nei. Det er drift etter oppussingen.",
            "Ja. Alt som har med bilen å gjøre, skal inn i de 50 000.",
            "Ja, men bare renta av drivstoffet."
          ],
          riktig: 0,
          forklaring: "Potten dekker kjøp og oppussing. 12 600 kr i drivstoff ligger utenfor."
        }
      }
    ],
    hint: ["Liter = mil · liter per mil. Kroner = liter · 21.", "\\(46\\,152{,}50 + 12\\,600\\)."],
    losning: "<p>Drivstoff: \\(1\\,000 \\cdot 0{,}6 \\cdot 21 = 12\\,600\\) kr.</p><p>Med drivstoff: \\(46\\,152{,}50 + 12\\,600 = 58\\,752{,}50\\) kr.</p><p>Over potten: \\(58\\,752{,}50 - 50\\,000 = 8\\,752{,}50\\) kr. Beløpet skal ikke inn.</p>"
  },
  {
    id: "verditap-focus",
    niva: "vanskelig",
    tittel: "Focus om to år",
    tekst: "<p>Focus koster 25 760 kr etter rabatt. Bilen taper 15 % av verdien hvert år. Vekstfaktoren er 0,85. Regn uten prosjektlånet.</p>",
    steg: [{ verdi: 0.85 }, { verdi: 21896, enhet: "kr" }],
    deler: [
      { tekst: "Hva er bilen verdt etter ett år?", svar: { verdi: 21896, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva er bilen verdt etter to år?", svar: { verdi: 18611.6, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Ett år: gang med 0,85.", "To år: gang resultatet med 0,85 en gang til."],
    losning: "<p>Etter ett år: \\(25\\,760 \\cdot 0{,}85 = 21\\,896\\) kr.</p><p>Etter to år: \\(21\\,896 \\cdot 0{,}85 = 18\\,611{,}60\\) kr. \\(0{,}85^2 = 0{,}7225\\), så omtrent 72 % av prisen står igjen.</p>"
  },
  {
    id: "lane-feil",
    niva: "vanskelig",
    tittel: "Hele lånet som utgift",
    tekst: "<p>Eksempelbudsjettet er 46 152,50 kr, og renta på 1 950 kr er allerede med. En elev legger i tillegg inn lånebeløpet på 15 000 kr som en utgift.</p>",
    steg: [{ verdi: 15000, enhet: "kr" }, { verdi: 46152.5, enhet: "kr" }],
    deler: [
      { tekst: "Hvilken sum får eleven?", svar: { verdi: 61152.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye over 50 000 kr er den summen?", svar: { verdi: 11152.5, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Hva er ekstrakostnaden ved lånet i prosjektet?",
        svar: {
          valg: [
            "Bare renta, 1 950 kr. De 15 000 kronene kom inn og skal ikke telles som utgift en gang til.",
            "Hele tilbakebetalingen på 16 950 kr.",
            "Ingenting. Lån er gratis når renta er enkel."
          ],
          riktig: 0,
          forklaring: "Pengene fra lånet brukes i prosjektet. Det som koster ekstra, er renta."
        }
      }
    ],
    hint: ["Legg 15 000 på 46 152,50.", "Sammenlign den nye summen med 50 000."],
    losning: "<p>\\(46\\,152{,}50 + 15\\,000 = 61\\,152{,}50\\) kr.</p><p>Over potten: \\(61\\,152{,}50 - 50\\,000 = 11\\,152{,}50\\) kr.</p><p>Ekstrakostnaden er renta på 1 950 kr.</p>"
  },
  {
    id: "repetisjon-desimaltime",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tekst: "<p>Verkstedøkta er 0,75 timer. Hvor mange minutter er det?</p>",
    steg: [{ verdi: 0.75, enhet: "h" }],
    svar: { verdi: 45, enhet: "min", tol: 0.1 },
    hint: ["Én time er 60 minutter. Gang desimaltimen med 60.", "\\(0{,}75 \\cdot 60\\). 0,75 timer er ikke 75 minutter."],
    losning: "<p>\\(0{,}75 \\cdot 60 = 45\\) minutter. Det er den faste verkstedøkta i prosjektet.</p>"
  }
]);
