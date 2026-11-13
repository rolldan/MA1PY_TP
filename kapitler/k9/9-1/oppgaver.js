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
  },
  {
    id: "tre-ar",
    niva: "lett",
    tittel: "Hvor mange måneder?",
    tekst: "<p>Lånet varer i 3 år. Hvert år har 12 måneder. Hvor mange måneder er det? Skriv bare tallet.</p>",
    svar: { verdi: 36 },
    hint: [
      "Gang antall år med 12.",
      "\\(3 \\cdot 12 = 36\\)."
    ],
    losning: "<p>\\(3 \\cdot 12 = 36\\) måneder. Det er \\(n\\) i annuitetsformelen.</p>"
  },
  {
    id: "vester",
    niva: "lett",
    tittel: "Tre redningsvester",
    tekst: "<p>Dere kjøper tre redningsvester. Hver vest koster 1 200 kr. Hva koster vestene til sammen?</p>",
    svar: { verdi: 3600, enhet: "kr" },
    hint: [
      "Gang antall vester med prisen for én.",
      "\\(3 \\cdot 1\\,200 = 3\\,600\\)."
    ],
    losning: "<p>\\(3 \\cdot 1\\,200 = 3\\,600\\) kr. Nødpakken på 900 kr er ikke med her.</p>"
  },
  {
    id: "sikkerhet",
    niva: "lett",
    tittel: "Sikkerhetsposten",
    tekst: "<p>Tre vester koster 3 600 kr til sammen. Nødpakken koster 900 kr. Hva er hele sikkerhetsposten?</p>",
    steg: [{ verdi: 3600, enhet: "kr" }],
    svar: { verdi: 4500, enhet: "kr" },
    hint: [
      "Legg sammen vestene og nødpakken.",
      "\\(3\\,600 + 900 = 4\\,500\\)."
    ],
    losning: "<p>\\(3\\,600 + 900 = 4\\,500\\) kr. Denne posten går inn i budsjettet før buffer.</p>"
  },
  {
    id: "egenkapital-andel",
    niva: "lett",
    tittel: "Hvor stor del er spart?",
    tekst: "<p>Båten koster 150 000 kr. Egenkapitalen er 30 000 kr. Hvor mange prosent av prisen er egenkapitalen?</p>",
    steg: [{ verdi: 30000, enhet: "kr" }],
    svar: { verdi: 20, enhet: "%" },
    hint: [
      "Prosent = del : hel · 100. Delen er egenkapitalen.",
      "\\(30\\,000 : 150\\,000 = 0{,}2\\)."
    ],
    losning: "<p>\\(30\\,000 : 150\\,000 = 0{,}2 = 20\\) %. Resten, 80 %, er lånet på 120 000 kr.</p>"
  },
  {
    id: "to-netter",
    niva: "middels",
    tittel: "To netter i Løkken",
    tekst: "<p>Gjestehavnen koster 350 DKK per natt. Dere blir to netter. Kursen i budsjettet er 100 DKK = 150 NOK.</p>",
    steg: [{ verdi: 700 }, { verdi: 1.5 }],
    deler: [
      { tekst: "Hvor mange kroner er 1 DKK?", svar: { verdi: 1.5, enhet: "kr" } },
      { tekst: "Hva koster de to nettene i norske kroner?", svar: { verdi: 1050, enhet: "kr" } }
    ],
    hint: [
      "100 DKK = 150 kr, så 1 DKK = 1,50 kr. To netter er 700 DKK.",
      "\\(700 \\cdot 1{,}5 = 1\\,050\\)."
    ],
    losning: "<p>\\(2 \\cdot 350 = 700\\) DKK. \\(700 \\cdot 1{,}5 = 1\\,050\\) kr.</p>"
  },
  {
    id: "spar-per-venn",
    niva: "middels",
    tittel: "Hva sparer hver?",
    tekst: "<p>Laget sparer 4 500 kr i måneden til sammen. Dere er tre. I oppgaven om kontantkjøp trengte dere 34 måneder.</p>",
    steg: [{ verdi: 1500, enhet: "kr" }, { verdi: 153000, enhet: "kr" }],
    deler: [
      { tekst: "Hvor mye sparer hver person per måned?", svar: { verdi: 1500, enhet: "kr" } },
      { tekst: "Hvor mye har én person spart etter 34 måneder?", svar: { verdi: 51000, enhet: "kr" } },
      { tekst: "Hvor mye har de tre til sammen etter 34 måneder?", svar: { verdi: 153000, enhet: "kr" } },
      { tekst: "Hvor mange kroner mer enn 150 000 har dere da?", svar: { verdi: 3000, enhet: "kr" } }
    ],
    hint: [
      "Del 4 500 på 3. Gang deretter med 34.",
      "\\(4\\,500 : 3 = 1\\,500\\). \\(34 \\cdot 4\\,500 = 153\\,000\\)."
    ],
    losning: "<p>Per person: \\(4\\,500 : 3 = 1\\,500\\) kr i måneden. Etter 34 måneder: \\(34 \\cdot 1\\,500 = 51\\,000\\) kr hver.</p><p>Til sammen: \\(34 \\cdot 4\\,500 = 153\\,000\\) kr. Det er \\(153\\,000 - 150\\,000 = 3\\,000\\) kr mer enn båtprisen.</p>"
  },
  {
    id: "drivstoff-post",
    niva: "middels",
    tittel: "Bare drivstoffet",
    tekst: "<p>Tur-retur er 260 nautiske mil. Båten bruker 2,8 L per nautisk mil. Bensin koster 22 kr per liter. Her skal du bare regne drivstoffposten, ikke buffer.</p>",
    steg: [{ verdi: 728, enhet: "L" }],
    deler: [
      { tekst: "Hvor mange liter går med?", svar: { verdi: 728, enhet: "L" } },
      { tekst: "Hva koster drivstoffet?", svar: { verdi: 16016, enhet: "kr" } }
    ],
    hint: [
      "Liter = strekning · forbruk per mil. Kroner = liter · pris.",
      "\\(260 \\cdot 2{,}8 = 728\\). \\(728 \\cdot 22 = 16\\,016\\)."
    ],
    losning: "<p>\\(260 \\cdot 2{,}8 = 728\\) L. \\(728 \\cdot 22 = 16\\,016\\) kr.</p>"
  },
  {
    id: "serie-forste",
    niva: "middels",
    tittel: "Første termin på serielån",
    tekst: "<p>Banken tilbyr også et serielån på 120 000 kr i 36 måneder. Avdraget er likt hver måned: lånet delt på 36. Avrund avdraget til nærmeste øre. Renta den første måneden er 850 kr, det samme som på annuitetslånet. Annuitetslånet koster 3 788 kr per måned.</p>",
    steg: [{ verdi: 3333.33, enhet: "kr", tol: 0.01 }, { verdi: 850, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stort er avdraget hver måned? To desimaler.", svar: { verdi: 3333.33, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva blir første termin på serielånet? To desimaler.", svar: { verdi: 4183.33, enhet: "kr", tol: 0.01 } },
      { tekst: "Hvor mange kroner høyere er den første serieterminen enn 3 788 kr? To desimaler.", svar: { verdi: 395.33, enhet: "kr", tol: 0.02 } }
    ],
    hint: [
      "Avdrag = lån : antall måneder. Første termin = avdrag + rente.",
      "\\(120\\,000 : 36 = 3\\,333{,}33\\). \\(3\\,333{,}33 + 850 = 4\\,183{,}33\\)."
    ],
    losning: "<p>\\(120\\,000 : 36 = 3\\,333{,}33\\) kr i avdrag.</p><p>Første termin: \\(3\\,333{,}33 + 850 = 4\\,183{,}33\\) kr.</p><p>Mot annuiteten: \\(4\\,183{,}33 - 3\\,788 = 395{,}33\\) kr høyere den første måneden. Senere synker serielånet, fordi renta blir mindre når lånet blir mindre.</p>"
  },
  {
    id: "lan-mot-kontant",
    niva: "vanskelig",
    tittel: "Lån eller 34 måneder?",
    tekst: "<p>Bruk 3 788 kr per måned i 36 måneder. Egenkapitalen er 30 000 kr. Kontant pris på båten er 150 000 kr. Etter 34 måneder med 4 500 kr i sparing har laget 153 000 kr.</p>",
    steg: [
      { verdi: 136368, enhet: "kr" },
      { verdi: 166368, enhet: "kr" },
      { verdi: 16368, enhet: "kr" }
    ],
    deler: [
      { tekst: "Hvor mye betaler dere til sammen på lånet, uten egenkapitalen?", svar: { verdi: 136368, enhet: "kr" } },
      { tekst: "Hva koster båten med lån og egenkapital?", svar: { verdi: 166368, enhet: "kr" } },
      { tekst: "Hvor mye dyrere er låneveien enn kontantprisen på 150 000 kr?", svar: { verdi: 16368, enhet: "kr" } },
      { tekst: "Hvor mange kroner mer koster låneveien enn de 153 000 kr dere har spart etter 34 måneder?", svar: { verdi: 13368, enhet: "kr" } }
    ],
    hint: [
      "Sum på lånet = terminbeløp · 36. Legg til egenkapitalen etterpå.",
      "\\(3\\,788 \\cdot 36 = 136\\,368\\). \\(136\\,368 + 30\\,000 = 166\\,368\\)."
    ],
    losning: "<p>Lånet: \\(3\\,788 \\cdot 36 = 136\\,368\\) kr. Med egenkapital: \\(136\\,368 + 30\\,000 = 166\\,368\\) kr.</p><p>Mot kontantpris: \\(166\\,368 - 150\\,000 = 16\\,368\\) kr. Det er renta.</p><p>Mot sparingen: \\(166\\,368 - 153\\,000 = 13\\,368\\) kr. Lånet koster mer, men båten kan brukes med en gang. Sparing tar 34 måneder, og båten kan være solgt.</p>"
  },
  {
    id: "ekstra-natt",
    niva: "vanskelig",
    tittel: "Én natt og én dag ekstra",
    tekst: "<p>Før endringen er drivstoff 16 016 kr, havn 1 050 kr, mat 3 600 kr og sikkerhet 4 500 kr. Summen før buffer er 25 166 kr. Nå blir det tre netter, ikke to, og fire dager med mat, ikke tre. Havn er 350 DKK per natt, og 100 DKK = 150 NOK. Mat er 400 kr per person per dag for tre personer. Bufferen er 15 % av den nye summen før buffer. Opprinnelig skulle hver betale 9 647 kr.</p>",
    steg: [
      { verdi: 1575, enhet: "kr" },
      { verdi: 4800, enhet: "kr" },
      { verdi: 26891, enhet: "kr" },
      { verdi: 4033.65, enhet: "kr" }
    ],
    deler: [
      { tekst: "Hva koster tre netter i norske kroner?", svar: { verdi: 1575, enhet: "kr" } },
      { tekst: "Hva koster maten i fire dager?", svar: { verdi: 4800, enhet: "kr" } },
      { tekst: "Hva er den nye summen før buffer?", svar: { verdi: 26891, enhet: "kr" } },
      { tekst: "Hvor stor er bufferen? To desimaler.", svar: { verdi: 4033.65, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva er totalen med buffer? To desimaler.", svar: { verdi: 30924.65, enhet: "kr", tol: 0.01 } },
      { tekst: "Hva må hver av de tre betale? Nærmeste krone.", svar: { verdi: 10308, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner mer er det per person enn 9 647 kr?", svar: { verdi: 661, enhet: "kr", tol: 1 } }
    ],
    hint: [
      "Regn ny havn og ny mat. Bytt ut de gamle postene. Buffer = 0,15 · ny sum.",
      "Tre netter: \\(1\\,050 : 2 \\cdot 3 = 1\\,575\\) kr. Mat: \\(3 \\cdot 4 \\cdot 400 = 4\\,800\\) kr."
    ],
    losning: "<p>Havn: \\(3 \\cdot 350 \\cdot 1{,}5 = 1\\,575\\) kr. Mat: \\(3 \\cdot 4 \\cdot 400 = 4\\,800\\) kr.</p><p>Ny sum: \\(16\\,016 + 1\\,575 + 4\\,800 + 4\\,500 = 26\\,891\\) kr. Buffer: \\(26\\,891 \\cdot 0{,}15 = 4\\,033{,}65\\) kr. Total: \\(30\\,924{,}65\\) kr.</p><p>Per person: \\(30\\,924{,}65 : 3 \\approx 10\\,308\\) kr. Økning: \\(10\\,308 - 9\\,647 = 661\\) kr.</p>"
  },
  {
    id: "vest-mva",
    type: "verksted",
    merke: "V/K",
    niva: "middels",
    tittel: "Prislapp på vesten",
    utstyr: "Prisliste eller merkelapp fra verktøyskapet, kalkulator",
    hms: "Ikke ta på sveiseutstyr. Vestene henger i skapet. Les lappen, ikke prøv brenneren.",
    tekst: "<p>En redningsvest i skapet er merket 960 kr uten mva. Mva er 25 %. I prosjektet koster vesten 1 200 kr.</p>",
    steg: [{ verdi: 240, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster vesten med 25 % mva?", svar: { verdi: 1200, enhet: "kr" } },
      {
        tekst: "Stemmer lappen med prosjektprisen når mva er lagt på?",
        svar: { valg: ["Ja", "Nei"], riktig: 0, forklaring: "960 · 1,25 = 1 200 kr." }
      }
    ],
    hint: [
      "Pris med mva = pris uten mva · 1,25. Mva-kronene er 25 % av 960.",
      "\\(960 \\cdot 0{,}25 = 240\\). \\(960 + 240 = 1\\,200\\)."
    ],
    losning: "<p>\\(960 \\cdot 1{,}25 = 1\\,200\\) kr. Lappen stemmer med prosjektprisen.</p>"
  },
  {
    id: "rep-rente",
    type: "repetisjon",
    fra: "kapittel 7",
    niva: "lett",
    tittel: "Rente i ett år",
    tekst: "<p>Fra kapittel 7. Et lån på 20 000 kr står i ett år uten avdrag. Renta er 8,5 % per år. Hvor mange kroner er renta?</p>",
    svar: { verdi: 1700, enhet: "kr" },
    hint: [
      "Rente i kroner = lån · prosent som desimal.",
      "\\(20\\,000 \\cdot 0{,}085 = 1\\,700\\)."
    ],
    losning: "<p>\\(20\\,000 \\cdot 0{,}085 = 1\\,700\\) kr. På båtlånet deles årsrenta på 12, fordi dere betaler hver måned.</p>"
  },
  {
    id: "eksamen-kurs",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "lett",
    tittel: "200 DKK",
    tekst: "<p>200 DKK skal veksles. Kursen er 100 DKK = 150 NOK. Hvor mange kroner er det?</p>",
    svar: { verdi: 300, enhet: "kr" },
    hint: [
      "1 DKK = 1,50 kr. Gang med 200.",
      "\\(200 \\cdot 1{,}5 = 300\\)."
    ],
    losning: "<p>\\(200 \\cdot 1{,}5 = 300\\) kr. 100 DKK blir 150 kr, så 200 DKK blir det dobbelte.</p>"
  }
]);
