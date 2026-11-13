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
  }
]);
