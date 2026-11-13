Bok.oppgaver([
  {
    id: "firkantror",
    niva: "lett",
    tittel: "Firkantrør",
    tekst: "<p>4 m firkantrør koster 520 kr. Bruk veien om 1.</p>",
    deler: [
      { tekst: "Hva koster 1 m?", svar: { verdi: 130, enhet: "kr" } },
      { tekst: "Hva koster 2,5 m?", svar: { verdi: 325, enhet: "kr" } }
    ],
    hint: ["Del prisen på lengden du kjenner. Da får du prisen for 1 m.", "\\(520 : 4 = 130\\) kr per meter. Gang med 2,5."],
    losning: "<p>a) \\(520 : 4 = 130\\) kr<br>b) \\(130 \\cdot 2{,}5 = 325\\) kr</p>"
  },
  {
    id: "forenkle-sveis",
    niva: "lett",
    tittel: "Forenkle forholdet",
    tekst: "<p>I plateverkstedet er det 6 sveisere og 9 platearbeidere. Forholdet sveisere : platearbeidere er 6 : 9. Skriv det med minst mulig hele tall.</p>",
    deler: [
      { tekst: "Første tall (sveisere)", svar: { verdi: 2 } },
      { tekst: "Andre tall (platearbeidere)", svar: { verdi: 3 } }
    ],
    hint: ["Del begge tallene på samme tall. 3 går opp i både 6 og 9.", "\\(6 : 3 = 2\\) og \\(9 : 3 = 3\\). Forholdet er 2 : 3."],
    losning: "<p>\\(6 : 9 = 2 : 3\\). Første tall er 2, andre tall er 3.</p>"
  },
  {
    id: "spyler-enkel",
    niva: "lett",
    tekst: "<p>Nora blander 2 deler spylervæskekonsentrat og 8 deler vann. Hvor mange deler vann går det på 1 del konsentrat?</p>",
    svar: { verdi: 4 },
    hint: ["Forholdet er 2 : 8. Del begge sider på 2.", "\\(2 : 8 = 1 : 4\\). Det går 4 deler vann på 1 del konsentrat."],
    losning: "<p>\\(2 : 8 = 1 : 4\\). Det går 4 deler vann på 1 del konsentrat.</p>"
  },
  {
    id: "frost-20",
    niva: "middels",
    tittel: "20 dl frostvæske",
    tekst: "<p>Lisa blander frostvæske. Glykol : vann = 2 : 3. Hun vil ha 20 dl ferdig blanding.</p>",
    steg: [{ verdi: 5 }, { verdi: 4, enhet: "dl" }],
    deler: [
      { tekst: "Hvor mye glykol?", svar: { verdi: 8, enhet: "dl" } },
      { tekst: "Hvor mye vann?", svar: { verdi: 12, enhet: "dl" } }
    ],
    hint: ["Legg sammen delene: 2 + 3. Del 20 dl på den summen.", "Én del er \\(20 : 5 = 4\\) dl. Glykol er 2 deler, vann er 3 deler."],
    losning: "<p>\\(2 + 3 = 5\\) deler. Én del er \\(20 : 5 = 4\\) dl.<br>Glykol: \\(2 \\cdot 4 = 8\\) dl. Vann: \\(3 \\cdot 4 = 12\\) dl.</p>"
  },
  {
    id: "laerlinger",
    niva: "middels",
    tekst: "<p>På et verksted er forholdet lærlinger : fagarbeidere = 2 : 3. Det er 6 lærlinger. Hvor mange fagarbeidere er det?</p>",
    steg: [{ verdi: 3 }],
    svar: { verdi: 9, enhet: "stk" },
    hint: ["2 deler lærlinger er 6 personer. Finn først hvor mange 1 del er.", "\\(6 : 2 = 3\\) personer per del. Fagarbeidere er 3 deler: \\(3 \\cdot 3 = 9\\)."],
    losning: "<p>Én del er \\(6 : 2 = 3\\) personer. Fagarbeidere: \\(3 \\cdot 3 = 9\\).</p>"
  },
  {
    id: "bolt-kasse",
    niva: "middels",
    tekst: "<p>I en kasse er forholdet M8 : M10 = 5 : 3. Det er 16 bolter til sammen.</p>",
    steg: [{ verdi: 2, enhet: "stk" }],
    deler: [
      { tekst: "Hvor mange M8-bolter?", svar: { verdi: 10, enhet: "stk" } },
      { tekst: "Hvor mange M10-bolter?", svar: { verdi: 6, enhet: "stk" } }
    ],
    hint: ["Delene til sammen er 5 + 3 = 8. Del 16 på 8.", "Én del er 2 bolter. M8 er 5 deler, M10 er 3 deler."],
    losning: "<p>\\(5 + 3 = 8\\) deler. Én del er \\(16 : 8 = 2\\) bolter.<br>M8: \\(5 \\cdot 2 = 10\\). M10: \\(3 \\cdot 2 = 6\\).</p>"
  },
  {
    id: "bland-om",
    niva: "vanskelig",
    tittel: "For sterk blanding",
    tekst: "<p>Elias har blandet 15 dl kjølevæske med glykol : vann = 2 : 3. Blandingen er for sterk. Han vil ha 1 : 4 og beholde glykolen som allerede er i kanna.</p>",
    steg: [{ verdi: 3, enhet: "dl" }],
    deler: [
      { tekst: "Hvor mye glykol er det i kanna nå?", svar: { verdi: 6, enhet: "dl" } },
      { tekst: "Hvor mye vann er det nå?", svar: { verdi: 9, enhet: "dl" } },
      { tekst: "Hvor mye vann må han helle i?", svar: { verdi: 15, enhet: "dl" } }
    ],
    hint: ["Finn først hvor mye glykol som ligger i de 15 dl. Deretter skal vannet være fire ganger glykolen.", "15 dl og 5 deler gir 3 dl per del. Glykol: 6 dl. Vann skal bli \\(6 \\cdot 4 = 24\\) dl. Han har 9 dl."],
    losning: "<p>Én del er \\(15 : 5 = 3\\) dl. Glykol: 6 dl. Vann nå: 9 dl.<br>Vann i forholdet 1 : 4: \\(6 \\cdot 4 = 24\\) dl. Han heller i \\(24 - 9 = 15\\) dl.</p>"
  },
  {
    id: "totakt",
    niva: "vanskelig",
    tekst: "<p>En totaktsmotor skal ha olje og bensin i forholdet 1 : 50. Det er 20 mL olje per liter bensin. Elias fyller 8 L bensin. Hvor mange milliliter olje skal han ha i?</p>",
    steg: [{ verdi: 8000, enhet: "ml" }],
    svar: { verdi: 160, enhet: "ml" },
    hint: ["Gjør liter om til milliliter, eller regn 20 mL per liter.", "8 L = 8000 mL. \\(8000 : 50 = 160\\) mL. Samme svar: \\(8 \\cdot 20 = 160\\) mL."],
    losning: "<p>\\(8 \\cdot 20 = 160\\) mL olje. Sjekk: \\(8000 : 50 = 160\\).</p>"
  },
  {
    id: "spyler-kanne",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "5 L spylervæske",
    utstyr: "Målebeger, trakt, spylervæskekonsentrat, vann, hansker",
    hms: "Ikke smak på konsentratet. Rester i merket dunk, ikke i sluket.",
    tekst: "<p>Etiketten sier 2 deler konsentrat og 8 deler vann. Du skal fylle en kanne på 5 L.</p>",
    deler: [
      { tekst: "Hvor mye konsentrat?", svar: { verdi: 1, enhet: "L" } },
      { tekst: "Hvor mye vann?", svar: { verdi: 4, enhet: "L" } }
    ],
    hint: ["2 + 8 = 10 deler. Del 5 L på 10.", "Én del er 0,5 L. Konsentrat er 2 deler, vann er 8 deler."],
    losning: "<p>10 deler i 5 L gir 0,5 L per del.<br>Konsentrat: \\(2 \\cdot 0{,}5 = 1\\) L. Vann: \\(8 \\cdot 0{,}5 = 4\\) L.</p>"
  },
  {
    id: "rep-skrue",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>En eske med 100 skruer koster 79,50 kr. Hva koster én skrue?</p>",
    svar: { verdi: 0.795, enhet: "kr", tol: 0.001 },
    hint: ["Del prisen på 100.", "Kommaet flyttes to plasser til venstre: \\(79{,}50 : 100 = 0{,}795\\)."],
    losning: "<p>\\(79{,}50 : 100 = 0{,}795\\) kr.</p>"
  },
  {
    id: "rep-aksel",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "middels",
    tekst: "<p>En aksel skal være \\(72 \\pm 0{,}3\\) mm.</p>",
    deler: [
      { tekst: "Hva er øvre grensemål?", svar: { verdi: 72.3, enhet: "mm" } },
      { tekst: "Hva er nedre grensemål?", svar: { verdi: 71.7, enhet: "mm" } },
      { tekst: "Et mål er 72,5 mm. Er akselen godkjent?", svar: { valg: ["Ja, innenfor toleransen", "Nei, over øvre grensemål"], riktig: 1 } }
    ],
    hint: ["Legg til og trekk fra toleransen 0,3 mm.", "Øvre: \\(72 + 0{,}3 = 72{,}3\\). 72,5 er større enn 72,3."],
    losning: "<p>Øvre grensemål 72,3 mm. Nedre grensemål 71,7 mm. 72,5 mm er over øvre grensemål, så akselen er ikke godkjent.</p>"
  },
  {
    id: "eksamen-kjole",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Du blander kjølevæske. Konsentrat : vann = 1 : 4. Du bruker 3 dl konsentrat.</p>",
    deler: [
      { tekst: "Hvor mye vann skal du ha i?", svar: { verdi: 12, enhet: "dl" } },
      { tekst: "Hvor stor blir den ferdige blandingen?", svar: { verdi: 15, enhet: "dl" } }
    ],
    hint: ["1 del konsentrat skal ha 4 deler vann.", "\\(3 \\cdot 4 = 12\\) dl vann. Ferdig: \\(3 + 12 = 15\\) dl."],
    losning: "<p>Vann: \\(3 \\cdot 4 = 12\\) dl. Ferdig blanding: \\(3 + 12 = 15\\) dl.</p>"
  },
  {
    id: "profil-6m",
    niva: "lett",
    tittel: "Aluminiumsprofil",
    tekst: "<p>6 m aluminiumsprofil koster 840 kr. Bruk veien om 1.</p>",
    steg: [{ verdi: 140, enhet: "kr" }],
    deler: [
      { tekst: "Hva koster 1 m?", svar: { verdi: 140, enhet: "kr" } },
      { tekst: "Hva koster 2,5 m?", svar: { verdi: 350, enhet: "kr" } }
    ],
    hint: ["Del totalprisen på 6. Da får du prisen for 1 m.", "\\(840 : 6 = 140\\) kr per meter. Gang med 2,5."],
    losning: "<p>a) \\(840 : 6 = 140\\) kr<br>b) \\(140 \\cdot 2{,}5 = 350\\) kr</p>"
  },
  {
    id: "bor-kasse",
    niva: "lett",
    tittel: "Bor i kassa",
    tekst: "<p>I en kasse ligger 15 spiralbor og 25 senterbor. Skriv forholdet spiralbor : senterbor med minst mulig hele tall.</p>",
    deler: [
      { tekst: "Første tall (spiralbor)", svar: { verdi: 3 } },
      { tekst: "Andre tall (senterbor)", svar: { verdi: 5 } }
    ],
    hint: ["Del begge tallene på samme tall. 5 går opp i både 15 og 25.", "\\(15 : 5 = 3\\) og \\(25 : 5 = 5\\). Forholdet er 3 : 5."],
    losning: "<p>\\(15 : 25 = 3 : 5\\). Første tall er 3, andre tall er 5.</p>"
  },
  {
    id: "epoksy-4dl",
    niva: "lett",
    tittel: "Epoksy 2 : 1",
    tekst: "<p>Epoksy til et feste blandes harpiks : herder = 2 : 1. Nora måler opp 4 dl harpiks.</p>",
    steg: [{ verdi: 2, enhet: "dl" }],
    deler: [
      { tekst: "Hvor mye herder skal hun ha i?", svar: { verdi: 2, enhet: "dl" } },
      { tekst: "Hvor stor blir den ferdige blandingen?", svar: { verdi: 6, enhet: "dl" } }
    ],
    hint: ["2 deler harpiks er 4 dl. Finn først 1 del.", "1 del er \\(4 : 2 = 2\\) dl. Herder er 1 del. Ferdig: \\(4 + 2\\)."],
    losning: "<p>1 del er 2 dl. Herder: 2 dl. Ferdig: \\(4 + 2 = 6\\) dl.</p>"
  },
  {
    id: "trad-sju",
    niva: "middels",
    tittel: "Sveisetråd til sju jobber",
    tekst: "<p>1,6 kg sveisetråd holder til 4 like sveisejobber. Hvor mye tråd trengs til 7 slike jobber?</p>",
    steg: [{ verdi: 0.4, enhet: "kg" }],
    svar: { verdi: 2.8, enhet: "kg" },
    hint: ["Finn først hvor mye tråd én jobb bruker. Del 1,6 kg på 4.", "\\(1{,}6 : 4 = 0{,}4\\) kg per jobb. \\(0{,}4 \\cdot 7 = 2{,}8\\) kg."],
    losning: "<p>Én jobb: \\(1{,}6 : 4 = 0{,}4\\) kg.<br>Sju jobber: \\(0{,}4 \\cdot 7 = 2{,}8\\) kg.</p>"
  },
  {
    id: "kjole-25",
    niva: "middels",
    tittel: "2,5 L kjølevæske",
    tekst: "<p>Glykol : vann = 1 : 4. Du skal blande 2,5 L ferdig kjølevæske.</p>",
    steg: [{ verdi: 0.5, enhet: "L" }],
    deler: [
      { tekst: "Hvor mye glykol?", svar: { verdi: 0.5, enhet: "L" } },
      { tekst: "Hvor mye vann?", svar: { verdi: 2, enhet: "L" } }
    ],
    hint: ["Delene til sammen er 1 + 4 = 5. Del 2,5 L på 5.", "Én del er 0,5 L. Glykol er 1 del, vann er 4 deler."],
    losning: "<p>\\(1 + 4 = 5\\) deler. Én del er \\(2{,}5 : 5 = 0{,}5\\) L.<br>Glykol: 0,5 L. Vann: \\(4 \\cdot 0{,}5 = 2\\) L.</p>"
  },
  {
    id: "tre-bolter",
    niva: "middels",
    tittel: "Tre boltstørrelser",
    tekst: "<p>I en kasse er forholdet M6 : M8 : M10 = 2 : 3 : 5. Det er 40 bolter til sammen.</p>",
    steg: [{ verdi: 4, enhet: "stk" }],
    deler: [
      { tekst: "Hvor mange M6?", svar: { verdi: 8, enhet: "stk" } },
      { tekst: "Hvor mange M8?", svar: { verdi: 12, enhet: "stk" } },
      { tekst: "Hvor mange M10?", svar: { verdi: 20, enhet: "stk" } }
    ],
    hint: ["Legg sammen delene: 2 + 3 + 5. Del 40 på den summen.", "10 deler i 40 bolter gir 4 bolter per del."],
    losning: "<p>\\(2 + 3 + 5 = 10\\) deler. Én del er \\(40 : 10 = 4\\) bolter.<br>M6: 8. M8: 12. M10: 20.</p>"
  },
  {
    id: "primer-tynn",
    niva: "vanskelig",
    tittel: "For tynn grunning",
    tekst: "<p>Sara har blandet 1,8 L grunning. Forholdet grunning : tynner er 1 : 2. Blandingen er for tynn. Hun vil ha 1 : 1 og beholde tynneren som allerede er i spannet.</p>",
    steg: [{ verdi: 3 }, { verdi: 0.6, enhet: "L" }],
    deler: [
      { tekst: "Hvor mye grunning er det i spannet nå?", svar: { verdi: 0.6, enhet: "L" } },
      { tekst: "Hvor mye tynner er det nå?", svar: { verdi: 1.2, enhet: "L" } },
      { tekst: "Hvor mye grunning må hun helle i?", svar: { verdi: 0.6, enhet: "L" } }
    ],
    hint: ["Finn først hvor mye tynner som ligger i de 1,8 L. I forholdet 1 : 1 skal grunningen være like stor som tynneren.", "3 deler i 1,8 L gir 0,6 L per del. Tynner: 1,2 L. Hun har 0,6 L grunning og trenger 1,2 L."],
    losning: "<p>\\(1 + 2 = 3\\) deler. Én del er \\(1{,}8 : 3 = 0{,}6\\) L.<br>Grunning nå: 0,6 L. Tynner: 1,2 L.<br>Til 1 : 1 må grunningen også bli 1,2 L. Hun heller i \\(1{,}2 - 0{,}6 = 0{,}6\\) L.</p>"
  },
  {
    id: "olje-10l",
    niva: "vanskelig",
    tittel: "Olje først",
    tekst: "<p>Du har 200 mL totaktsolje. Olje : bensin skal være 1 : 50. Hvor mange liter bensin skal oljen blandes i?</p>",
    steg: [{ verdi: 10000, enhet: "ml" }],
    svar: { verdi: 10, enhet: "L" },
    hint: ["1 del olje skal ha 50 deler bensin. Gjør milliliter om til liter til slutt.", "\\(200 \\cdot 50 = 10\\,000\\) mL. \\(10\\,000\\) mL = 10 L."],
    losning: "<p>\\(200 \\cdot 50 = 10\\,000\\) mL \\(= 10\\) L bensin.</p>"
  },
  {
    id: "frost-4l",
    type: "verksted",
    niva: "middels",
    merke: "V",
    tittel: "4 L frostvæske",
    utstyr: "Målebeger, trakt, glykol, vann, hansker",
    hms: "Ikke smak på glykolen. Rester i merket dunk, ikke i sluket.",
    tekst: "<p>Etiketten sier glykol : vann = 2 : 3. Du skal fylle en kanne på 4 L.</p>",
    steg: [{ verdi: 0.8, enhet: "L" }],
    deler: [
      { tekst: "Hvor mye glykol?", svar: { verdi: 1.6, enhet: "L" } },
      { tekst: "Hvor mye vann?", svar: { verdi: 2.4, enhet: "L" } }
    ],
    hint: ["2 + 3 = 5 deler. Del 4 L på 5.", "Én del er 0,8 L. Glykol er 2 deler, vann er 3 deler."],
    losning: "<p>Én del er \\(4 : 5 = 0{,}8\\) L.<br>Glykol: \\(2 \\cdot 0{,}8 = 1{,}6\\) L. Vann: \\(3 \\cdot 0{,}8 = 2{,}4\\) L.</p>"
  },
  {
    id: "rep-gange",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Regn ut \\(6{,}4 \\cdot 100\\).</p>",
    svar: { verdi: 640 },
    hint: ["100 har to nuller. Kommaet flyttes to plasser til høyre.", "\\(6{,}4 \\cdot 100 = 640\\)."],
    losning: "<p>\\(6{,}4 \\cdot 100 = 640\\).</p>"
  },
  {
    id: "eks-epoksy",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>Du blander lakk. Lakk : herder = 3 : 1. Du bruker 6 dl lakk.</p>",
    deler: [
      { tekst: "Hvor mye herder skal du ha i?", svar: { verdi: 2, enhet: "dl" } },
      { tekst: "Hvor stor blir den ferdige blandingen?", svar: { verdi: 8, enhet: "dl" } }
    ],
    hint: ["3 deler lakk er 6 dl. Finn 1 del, det er herderen.", "\\(6 : 3 = 2\\) dl herder. Ferdig: \\(6 + 2 = 8\\) dl."],
    losning: "<p>Herder: \\(6 : 3 = 2\\) dl. Ferdig blanding: \\(6 + 2 = 8\\) dl.</p>"
  }
]);
