Bok.oppgaver([
  {
    id: "havn",
    niva: "lett",
    tittel: "Én natt i gjestehavn",
    tekst: "<p>Én natt koster 350 DKK. Kursen er 100 DKK = 150 NOK. Hva koster natten i norske kroner?</p>",
    svar: { verdi: 525, enhet: "kr" },
    hint: [
      "100 DKK = 150 kr, så 1 DKK = 1,50 kr. Gang prisen med 1,50.",
      "\\(350 \\cdot 1{,}5 = 525\\)."
    ],
    losning: "<p>\\(350 \\cdot 1{,}5 = 525\\) kr.</p>"
  },
  {
    id: "mat",
    niva: "lett",
    tittel: "Mat for tre",
    tekst: "<p>Maten er satt til 400 kr per person per dag. Dere er tre personer, og turen varer tre dager. Hva koster maten til sammen?</p>",
    svar: { verdi: 3600, enhet: "kr" },
    hint: [
      "Gang personer, dager og pris per person.",
      "\\(3 \\cdot 3 \\cdot 400 = 3\\,600\\)."
    ],
    losning: "<p>\\(3 \\cdot 3 \\cdot 400 = 3\\,600\\) kr.</p>"
  },
  {
    id: "lan",
    niva: "middels",
    tittel: "Annuitetslånet",
    tekst: "<p>Lånet er 120 000 kr i 36 måneder. Renta er 8,5 % per år. Bruk månedlig rente = årsrente : 12. Gebyr ser vi bort fra. Et svar fra lånekalkulator uten gebyr godtas også.</p>",
    steg: [{ verdi: 850, enhet: "kr" }, { verdi: 0.007083, tol: 0.00001 }],
    deler: [
      { tekst: "Hvor mange kroner er renta den første måneden?", svar: { verdi: 850, enhet: "kr" } },
      { tekst: "Hva blir terminbeløpet, avrundet til nærmeste krone?", svar: { verdi: 3788, enhet: "kr", tol: 20 } },
      { tekst: "Bruk 3 788 kr per måned. Hvor mye er renter til sammen når lånet er nedbetalt?", svar: { verdi: 16368, enhet: "kr" } }
    ],
    hint: [
      "Første rente er lån · årsrente : 12. Terminbeløpet får du av annuitetsformelen eller kalkulator.",
      "\\(120\\,000 \\cdot 0{,}085 : 12 = 850\\) kr. Terminbeløpet er om lag 3 788 kr."
    ],
    losning: "<p>Første rente: \\(120\\,000 \\cdot 0{,}085 : 12 = 850\\) kr.</p><p>Terminbeløp \\(A \\approx 3\\,788\\) kr.</p><p>Betalt til sammen: \\(3\\,788 \\cdot 36 = 136\\,368\\) kr. Renter: \\(136\\,368 - 120\\,000 = 16\\,368\\) kr.</p>"
  },
  {
    id: "sparing",
    niva: "middels",
    tittel: "Kjøpe kontant",
    tekst: "<p>Laget sparer 4 500 kr i måneden til sammen. Båten koster 150 000 kr. Ingen rente på sparingen.</p>",
    steg: [{ verdi: 148500, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mange hele måneder må dere spare før dere har minst 150 000 kr? Skriv bare tallet.", svar: { verdi: 34 } },
      { tekst: "Hvor mye har dere etter 33 måneder?", svar: { verdi: 148500, enhet: "kr" } }
    ],
    hint: [
      "Del prisen på det dere sparer per måned. Hvis det ikke går opp, trenger dere én måned til.",
      "\\(150\\,000 : 4\\,500 = 33{,}33\\). \\(33 \\cdot 4\\,500 = 148\\,500\\), som er for lite."
    ],
    losning: "<p>\\(150\\,000 : 4\\,500 = 33{,}33\\). Etter 33 måneder: 148 500 kr. Etter 34 måneder: \\(34 \\cdot 4\\,500 = 153\\,000\\) kr. Svaret er 34 måneder.</p>"
  },
  {
    id: "budsjett",
    niva: "vanskelig",
    tittel: "Budsjett for turen",
    tekst: "<p>Tur-retur er 260 nautiske mil. Forbruk 2,8 L per nautisk mil. Bensin 22 kr per liter. Havn: 2 · 350 DKK, og 100 DKK = 150 NOK. Mat: 3 600 kr. Sikkerhet: 4 500 kr. Buffer: 15 % av summen av disse postene, ikke av totalen etterpå.</p>",
    steg: [
      { verdi: 728, enhet: "L" },
      { verdi: 16016, enhet: "kr" },
      { verdi: 1050, enhet: "kr" },
      { verdi: 25166, enhet: "kr" },
      { verdi: 3774.9, enhet: "kr" }
    ],
    deler: [
      { tekst: "Hvor mange liter drivstoff går med?", svar: { verdi: 728, enhet: "L" } },
      { tekst: "Hva koster drivstoffet?", svar: { verdi: 16016, enhet: "kr" } },
      { tekst: "Hva er summen av drivstoff, havn, mat og sikkerhet, før buffer?", svar: { verdi: 25166, enhet: "kr" } },
      { tekst: "Hvor stor er bufferen? Svar med én desimal.", svar: { verdi: 3774.9, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva er totalen med buffer? Svar med én desimal.", svar: { verdi: 28940.9, enhet: "kr", tol: 0.05 } },
      { tekst: "Hva må hver av de tre betale? Avrund til nærmeste krone.", svar: { verdi: 9647, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange prosent av totalen er drivstoff? Én desimal.", svar: { verdi: 55.3, enhet: "%", tol: 0.05 } },
      { tekst: "Bensinprisen blir 25 kr per liter. Hvor mange kroner mer må hver person betale? Avrund til nærmeste krone. Husk at bufferen også øker.", svar: { verdi: 837, enhet: "kr", tol: 0.6 } }
    ],
    hint: [
      "Liter = strekning · forbruk. Kroner = liter · pris. Buffer = 0,15 · summen før buffer.",
      "\\(260 \\cdot 2{,}8 = 728\\) L, og \\(728 \\cdot 22 = 16\\,016\\) kr. Havn blir 1 050 kr."
    ],
    losning: "<p>Drivstoff: \\(260 \\cdot 2{,}8 = 728\\) L, \\(728 \\cdot 22 = 16\\,016\\) kr. Havn: \\(700 \\cdot 1{,}5 = 1\\,050\\) kr.</p><p>Sum før buffer: \\(16\\,016 + 1\\,050 + 3\\,600 + 4\\,500 = 25\\,166\\) kr. Buffer: \\(25\\,166 \\cdot 0{,}15 = 3\\,774{,}9\\) kr. Total: \\(28\\,940{,}9\\) kr. Per person: \\(28\\,940{,}9 : 3 \\approx 9\\,647\\) kr.</p><p>Drivstoffandel: \\(16\\,016 : 28\\,940{,}9 \\cdot 100 \\approx 55{,}3\\) %.</p><p>Ny bensin: \\(728 \\cdot 25 = 18\\,200\\) kr. Ny sum: 27 350 kr. Ny buffer: \\(4\\,102{,}5\\) kr. Ny total: 31 452,5 kr. Økning: 2 511,6 kr, altså 837 kr per person.</p>"
  },
  {
    id: "regneark",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Budsjett i regneark",
    utstyr: "PC med regneark",
    hms: "Skjermen i øyehøyde. Reis dere i power break.",
    tekst: "<p>Bygg budsjettet fra oppgaven «Budsjett for turen» i regneark. Formelen for buffer skal vise til summe-cellen, ikke et tall du skriver inn på nytt. Hva blir totalen med buffer? Svar med én desimal.</p>",
    svar: { verdi: 28940.9, enhet: "kr", tol: 0.05 },
    hint: [
      "Summer de fire postene i en celle. Buffer-cellen skal være 0,15 ganger den cellen.",
      "Summen før buffer er 25 166 kr. \\(25\\,166 \\cdot 0{,}15 = 3\\,774{,}9\\)."
    ],
    losning: "<p>\\(25\\,166 + 3\\,774{,}9 = 28\\,940{,}9\\) kr.</p>"
  },
  {
    id: "rep-rabatt",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tittel: "Rabatt på oljehyre",
    tekst: "<p>En oljehyre koster 800 kr. Butikken gir 25 % rabatt. Hva koster hyra da?</p>",
    svar: { verdi: 600, enhet: "kr" },
    hint: [
      "25 % rabatt betyr at dere betaler 75 % av prisen.",
      "\\(800 \\cdot 0{,}75 = 600\\)."
    ],
    losning: "<p>\\(800 \\cdot 0{,}75 = 600\\) kr. Rabatten er 200 kr.</p>"
  },
  {
    id: "rep-minutter",
    type: "repetisjon",
    fra: "kapittel 4",
    niva: "lett",
    tittel: "Desimaltimer",
    tekst: "<p>En kjøretur tar 2,5 timer. Hvor mange minutter er det?</p>",
    svar: { verdi: 150, enhet: "min" },
    hint: [
      "1 time = 60 minutter. Gang antall timer med 60.",
      "\\(2{,}5 \\cdot 60 = 150\\)."
    ],
    losning: "<p>\\(2{,}5 \\cdot 60 = 150\\) minutter. 2,5 timer er ikke 2 timer og 50 minutter.</p>"
  },
  {
    id: "eksamen-buffer",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "Buffer uten kalkulator",
    tekst: "<p>Et budsjett er 20 000 kr før buffer. Bufferen er 15 %. Hvor mange kroner er bufferen?</p>",
    svar: { verdi: 3000, enhet: "kr" },
    hint: [
      "10 % av 20 000 er 2 000. 5 % er halvparten av det.",
      "\\(20\\,000 \\cdot 0{,}15 = 3\\,000\\)."
    ],
    losning: "<p>10 % er 2 000 kr. 5 % er 1 000 kr. 15 % er 3 000 kr.</p>"
  }
]);
