Bok.oppgaver([
  {
    id: "tid-likt",
    niva: "lett",
    tittel: "Del tiden",
    tekst: "<p>Laget har 8 minutter. Fire elever deler tiden likt. Hvor mange minutter får hver?</p>",
    svar: { verdi: 2, enhet: "min", tol: 0.01 },
    hint: ["Del tiden på antall elever.", "\\(8 : 4\\)."],
    losning: "<p>\\(8 : 4 = 2\\) minutter hver.</p>"
  },
  {
    id: "rest-pott",
    niva: "lett",
    tittel: "Er det penger igjen?",
    tekst: "<p>Eksempelbudsjettet for Focus summerer til 46 152,50 kr. Potten er 50 000 kr. Hvor mye er igjen?</p>",
    svar: { verdi: 3847.5, enhet: "kr", tol: 0.5 },
    hint: ["Trekk summen fra potten.", "\\(50\\,000 - 46\\,152{,}50\\)."],
    losning: "<p>\\(50\\,000 - 46\\,152{,}50 = 3\\,847{,}50\\) kr. Budsjettet holder.</p>"
  },
  {
    id: "feil-sum",
    niva: "middels",
    tittel: "Finn feilen i summen",
    tekst: "<p>Et lag skriver: \\(4 \\cdot 400 = 1\\,600\\) og \\(1{,}5 \\cdot 200 = 300\\), sum 2 000 kr.</p>",
    steg: [{ verdi: 1600, enhet: "kr" }, { verdi: 300, enhet: "kr" }],
    svar: { verdi: 1900, enhet: "kr", tol: 0.5 },
    hint: ["Gangestykkene stemmer. Legg dem sammen på nytt.", "\\(1\\,600 + 300\\)."],
    losning: "<p>\\(1\\,600 + 300 = 1\\,900\\) kr. Summen 2 000 kr er 100 kr for høy.</p>"
  },
  {
    id: "rubrikk-niva",
    niva: "middels",
    tittel: "Hvilket nivå?",
    tekst: "<p>Les rubrikken i teorien. En elev har regnet rabatt, mva og enkel rente riktig, og forklarer at lånet koster 1 950 kr ekstra. Drivstoffet er holdt utenfor potten.</p>",
    stegForSteg: false,
    svar: {
      valg: [
        "Høy måloppnåelse i økonomi",
        "Lav måloppnåelse i økonomi",
        "Høy måloppnåelse i geometri"
      ],
      riktig: 0,
      forklaring: "Beskrivelsen treffer høy i raden om økonomi (KM1), ikke geometri."
    },
    hint: ["Se raden som handler om lån, rabatt og mva.", "Høy i økonomi krever at renta er forklart, ikke bare regnet."],
    losning: "<p>Høy måloppnåelse i økonomi. Geometri er en annen rad i rubrikken.</p>"
  },
  {
    id: "dyrere-kasse",
    niva: "vanskelig",
    tittel: "Kassen ble dyrere",
    tekst: "<p>I eksempelbudsjettet koster basskassen 1 705 kr, og det er 3 847,50 kr igjen av potten. Kassen blir 200 kr dyrere enn anslaget.</p>",
    deler: [
      { tekst: "Hva blir den nye prisen på kassen?", svar: { verdi: 1905, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er igjen av potten etter økningen?", svar: { verdi: 3647.5, enhet: "kr", tol: 0.5 } },
      {
        tekst: "Holder budsjettet fortsatt?",
        svar: {
          valg: ["Ja, det er fortsatt penger igjen", "Nei, potten er brukt opp", "Nei, de går 200 kr i minus"],
          riktig: 0,
          forklaring: "3 847,50 − 200 = 3 647,50 kr igjen."
        }
      }
    ],
    hint: ["Ny pris = 1 705 + 200.", "Trekk 200 kr fra det som var igjen."],
    losning: "<p>Ny pris: \\(1\\,905\\) kr. Igjen: \\(3\\,847{,}50 - 200 = 3\\,647{,}50\\) kr. Budsjettet holder.</p>"
  },
  {
    id: "ovelse",
    type: "verksted",
    merke: "K",
    niva: "lett",
    tittel: "Øv med klokke",
    utstyr: "Klokke, rapportutkast, tegning",
    hms: "Klasserom. Snakk så andre lag kan øve ved siden av. Ingen kommentarer om personen, bare om tallene.",
    tekst: "<p>Tre elever øver. Hver snakker i 2 minutter.</p>",
    deler: [
      { tekst: "Hvor lang tid bruker laget?", svar: { verdi: 6, enhet: "min", tol: 0.1 } },
      { tekst: "Skriv hvilken utregning du skal forklare, og det første regnestykket.", svar: { fritekst: true, fasit: "<p>Et godt svar nevner en konkret utregning fra prosjektet, for eksempel rabatt, mva, rente, liter lakk eller volum, med ett regnestykke og en enhet.</p>" } }
    ],
    hint: ["Tre personer · 2 minutter.", "\\(3 \\cdot 2\\)."],
    losning: "<p>\\(3 \\cdot 2 = 6\\) minutter. Utregningen er din. Kontrolløren sjekker at det første steget har en enhet.</p>"
  },
  {
    id: "repetisjon-mm",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En stang på tegningen er 2 450 mm. Hvor mange meter er det?</p>",
    svar: { verdi: 2.45, enhet: "m", tol: 0.005 },
    hint: ["1 m = 1 000 mm. Del på 1 000.", "\\(2\\,450 : 1\\,000\\)."],
    losning: "<p>\\(2\\,450 : 1\\,000 = 2{,}45\\) m.</p>"
  },
  {
    id: "eksamen-blandet",
    type: "eksamen",
    eksamensdel: "Del 2 (med hjelpemidler)",
    niva: "middels",
    tekst: "<p>Støtdemperen koster 1 200 kr eks. mva. Focus koster 28 000 kr før 8 % kontantrabatt.</p>",
    deler: [
      { tekst: "Hva koster støtdemperen inkl. mva?", svar: { verdi: 1500, enhet: "kr", tol: 0.5 } },
      { tekst: "Hva koster bilen etter rabatt?", svar: { verdi: 25760, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Mva: gang med 1,25.", "Rabatt: gang med 0,92."],
    losning: "<p>Støtdemper: \\(1\\,200 \\cdot 1{,}25 = 1\\,500\\) kr.</p><p>Bil: \\(28\\,000 \\cdot 0{,}92 = 25\\,760\\) kr.</p>"
  },
  {
    id: "fire-lag",
    niva: "lett",
    tittel: "Fire lag på rad",
    tekst: "<p>Klassen har fire lag. Hvert lag får 8 minutter. Hvor lang tid tar presentasjonene, uten bytte mellom lagene?</p>",
    svar: { verdi: 32, enhet: "min", tol: 0.1 },
    hint: ["Gang antall lag med tiden per lag.", "\\(4 \\cdot 8\\)."],
    losning: "<p>\\(4 \\cdot 8 = 32\\) minutter.</p>"
  },
  {
    id: "rest-prosent",
    niva: "lett",
    tittel: "Resten av potten i prosent",
    tekst: "<p>Det er 3 847,50 kr igjen av potten på 50 000 kr. Hvor mange prosent er det? Avrund til én desimal.</p>",
    svar: { verdi: 7.7, enhet: "%", tol: 0.05 },
    hint: ["Del resten på potten og gang med 100.", "\\(3\\,847{,}50 : 50\\,000 \\cdot 100\\)."],
    losning: "<p>\\(3\\,847{,}50 : 50\\,000 \\cdot 100 = 7{,}695\\) %, som er 7,7 % med én desimal.</p>"
  },
  {
    id: "sporsmal-tid",
    niva: "lett",
    tittel: "Tid igjen til spørsmål",
    tekst: "<p>Laget har 8 minutter. Tre elever bruker 2 minutter hver. Hvor mange minutter er igjen til spørsmål?</p>",
    steg: [{ verdi: 6, enhet: "min" }],
    svar: { verdi: 2, enhet: "min", tol: 0.1 },
    hint: ["Finn først hvor lang tid de tre bruker.", "\\(8 - 3 \\cdot 2\\)."],
    losning: "<p>\\(3 \\cdot 2 = 6\\) minutter. Igjen: \\(8 - 6 = 2\\) minutter.</p>"
  },
  {
    id: "slide-feil",
    niva: "middels",
    tittel: "Lysbildet sier 4 000",
    tekst: "<p>Eksempelbudsjettet har 3 847,50 kr igjen av potten. På lysbildet står det «4 000 kr igjen».</p>",
    steg: [{ verdi: 3847.5, enhet: "kr" }, { verdi: 4000, enhet: "kr" }],
    svar: { verdi: 152.5, enhet: "kr", tol: 0.5 },
    hint: ["Trekk det riktige restbeløpet fra tallet på lysbildet.", "\\(4\\,000 - 3\\,847{,}50\\)."],
    losning: "<p>\\(4\\,000 - 3\\,847{,}50 = 152{,}50\\) kr. Lysbildet viser 152,50 kr for mye igjen. Si det høyt før dere går opp.</p>"
  },
  {
    id: "uten-kasse",
    niva: "middels",
    tittel: "Hvis kassen kuttes",
    tekst: "<p>Eksempelsummen er 46 152,50 kr, og basskassen koster 1 705 kr av den summen. Laget vurderer å kutte kassen. Potten er 50 000 kr.</p>",
    steg: [{ verdi: 1705, enhet: "kr" }, { verdi: 46152.5, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir summen uten basskassen?", svar: { verdi: 44447.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er da igjen av potten?", svar: { verdi: 5552.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Trekk 1 705 fra 46 152,50.", "Ny rest = 50 000 minus den nye summen. Den gamle resten var 3 847,50 kr."],
    losning: "<p>Sum: \\(46\\,152{,}50 - 1\\,705 = 44\\,447{,}50\\) kr.</p><p>Igjen: \\(50\\,000 - 44\\,447{,}50 = 5\\,552{,}50\\) kr. Det er 1 705 kr mer igjen enn før.</p>"
  },
  {
    id: "desimal-minutt",
    niva: "middels",
    tittel: "1,6 minutter er ikke 1 minutt og 6 sekunder",
    tekst: "<p>Laget har fem punkter og 8 minutter. Tiden deles likt.</p>",
    steg: [{ verdi: 8, enhet: "min" }, { verdi: 0.6, enhet: "min" }],
    deler: [
      { tekst: "Hvor mange minutter får hvert punkt?", svar: { verdi: 1.6, enhet: "min", tol: 0.01 } },
      { tekst: "Hvor mange sekunder er 0,6 minutter?", svar: { verdi: 36, enhet: "s", tol: 0.1 } },
      {
        tekst: "Hva er 1,6 minutter i minutter og sekunder?",
        svar: {
          valg: [
            "1 minutt og 36 sekunder",
            "1 minutt og 6 sekunder",
            "16 sekunder"
          ],
          riktig: 0,
          forklaring: "0,6 · 60 = 36. Desimalen er en del av et minutt, ikke sekunder."
        }
      }
    ],
    hint: ["Del 8 på 5.", "Sekunder: gang desimaldelen med 60. \\(0{,}6 \\cdot 60\\)."],
    losning: "<p>\\(8 : 5 = 1{,}6\\) minutter.</p><p>\\(0{,}6 \\cdot 60 = 36\\) sekunder. Altså 1 minutt og 36 sekunder, ikke 1 minutt og 6 sekunder.</p>"
  },
  {
    id: "lakk-tusen",
    niva: "middels",
    tittel: "Lakkposten ble 2 000",
    tekst: "<p>Eksempelsummen er 46 152,50 kr når lakk og grunning koster 1 900 kr. Et lag har skrevet 2 000 kr på den posten og glemt å rette summen. Potten er 50 000 kr.</p>",
    steg: [{ verdi: 100, enhet: "kr" }, { verdi: 1900, enhet: "kr" }],
    deler: [
      { tekst: "Hva blir summen med 2 000 kr på lakkposten?", svar: { verdi: 46252.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye er da igjen av potten?", svar: { verdi: 3747.5, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["2 000 er 100 kr mer enn 1 900. Legg 100 på summen.", "Den gamle resten var 3 847,50 kr. Trekk 100 fra den."],
    losning: "<p>Sum: \\(46\\,152{,}50 + 100 = 46\\,252{,}50\\) kr.</p><p>Igjen: \\(3\\,847{,}50 - 100 = 3\\,747{,}50\\) kr. Riktig lakkpost er 1 900 kr, fordi \\(1\\,600 + 300 = 1\\,900\\).</p>"
  },
  {
    id: "nesten-alle",
    niva: "middels",
    tittel: "Tre av fire sier noe",
    tekst: "<p>Tre av fire elever sier en setning med et tall. Den fjerde leser bare bilnavnet. Budsjettet er med, og de fleste utregningene stemmer.</p>",
    stegForSteg: false,
    svar: {
      valg: [
        "Middels i presentasjon: de fleste sier noe",
        "Høy i presentasjon: alle bidrar",
        "Lav i økonomi, fordi én elev er stille"
      ],
      riktig: 0,
      forklaring: "Høy presentasjon krever at alle bidrar. Stille elev trekker ikke økonomi ned til lav."
    },
    hint: ["Se raden Presentasjon i rubrikken.", "Høy krever at alle sier noe. Middels krever at de fleste sier noe."],
    losning: "<p>Middels i presentasjon. Økonomi vurderes på tallene, ikke på hvem som snakker.</p>"
  },
  {
    id: "uten-rente",
    niva: "vanskelig",
    tittel: "Renta ble borte i summen",
    tekst: "<p>Eksempelsummen 46 152,50 kr inkluderer renta på 1 950 kr. Et lag glemmer renta både i summen og når de sier hva som er igjen. Potten er 50 000 kr. Riktig rest er 3 847,50 kr.</p>",
    steg: [{ verdi: 1950, enhet: "kr" }, { verdi: 46152.5, enhet: "kr" }],
    deler: [
      { tekst: "Hvilken sum viser de?", svar: { verdi: 44202.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mye sier de at det er igjen?", svar: { verdi: 5797.5, enhet: "kr", tol: 0.5 } },
      { tekst: "Hvor mange kroner for høy er den resten?", svar: { verdi: 1950, enhet: "kr", tol: 0.5 } }
    ],
    hint: ["Trekk renta fra eksempelsummen.", "Ny rest = 50 000 minus den nye summen. Sammenlign med 3 847,50."],
    losning: "<p>Sum uten rente: \\(46\\,152{,}50 - 1\\,950 = 44\\,202{,}50\\) kr.</p><p>Rest de viser: \\(50\\,000 - 44\\,202{,}50 = 5\\,797{,}50\\) kr.</p><p>For høy: \\(5\\,797{,}50 - 3\\,847{,}50 = 1\\,950\\) kr. Si at lånet koster 1 950 kr ekstra.</p>"
  },
  {
    id: "fem-lag",
    niva: "vanskelig",
    tittel: "Fem lag i sekstiminuttersøkta",
    tekst: "<p>Fem lag presenterer. Hvert lag får 6 minutter. Mellom lagene er det 1 minutt til å bytte. Det er fire bytter. Økta er 60 minutter.</p>",
    steg: [{ verdi: 30, enhet: "min" }, { verdi: 4, enhet: "min" }],
    deler: [
      { tekst: "Hvor mange minutter snakker lagene til sammen?", svar: { verdi: 30, enhet: "min", tol: 0.1 } },
      { tekst: "Hvor mange minutter går med når byttene er med?", svar: { verdi: 34, enhet: "min", tol: 0.1 } },
      { tekst: "Hvor mange minutter er igjen av økta?", svar: { verdi: 26, enhet: "min", tol: 0.1 } }
    ],
    hint: ["Taletid: \\(5 \\cdot 6\\). Bytter: \\(4 \\cdot 1\\).", "Trekk summen fra 60."],
    losning: "<p>Taletid: \\(30\\) minutter. Med bytter: \\(34\\) minutter.</p><p>Igjen: \\(60 - 34 = 26\\) minutter til spørsmål og opprydding.</p>"
  },
  {
    id: "geometri-niva",
    niva: "vanskelig",
    tittel: "Bredden stemmer, volumet ikke",
    tekst: "<p>Tegningen er i målestokk 1:10. Bredden er 8 cm, og det stemmer med 80 cm i virkeligheten. Volumet av modellen er skrevet som 14,4 L. Riktig modellvolum av medium kasse er 0,144 L.</p>",
    stegForSteg: false,
    svar: {
      valg: [
        "Lav i geometri, fordi volumet er tydelig feil",
        "Høy i geometri, fordi bredden på tegningen stemmer",
        "Høy i økonomi, fordi 14,4 er et tall fra prosjektet"
      ],
      riktig: 0,
      forklaring: "1:10 i tre retninger er 1:1000 i volum. 14,4 L er hundre ganger for stort."
    },
    hint: ["Se raden Geometri. Lav brukes når volum eller målestokk er tydelig feil.", "\\(144 : 1\\,000 = 0{,}144\\). 14,4 L er delt på 10, ikke på 1 000."],
    losning: "<p>Lav i geometri. Bredden er riktig, men volumet i 1:10 skal være 0,144 L. Feilen må rettes før presentasjonen.</p>"
  },
  {
    id: "repetisjon-tid-prosent",
    type: "repetisjon",
    fra: "kapittel 3",
    niva: "lett",
    tekst: "<p>Presentasjonen varer 8 minutter. Laget har brukt 6 minutter. Hvor mange prosent av tiden er brukt?</p>",
    svar: { verdi: 75, enhet: "%", tol: 0.1 },
    hint: ["Del brukt tid på hele tiden, og gang med 100.", "\\(6 : 8 \\cdot 100\\)."],
    losning: "<p>\\(6 : 8 = 0{,}75 = 75\\) %. Det er 2 minutter igjen.</p>"
  }
]);
