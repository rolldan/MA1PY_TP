Bok.oppgaver([
  {
    id: "lonn-20",
    niva: "lett",
    tekst: "<p>Timelønna til en lærling økte fra 150 kr til 180 kr. Hvor mange prosent steg lønna?</p>",
    steg: [{ verdi: 30, enhet: "kr" }],
    svar: { verdi: 20, enhet: "%" },
    hint: ["Finn økningen i kroner. Del på den gamle lønna.", "\\(180 - 150 = 30\\). \\(30 : 150 = 0{,}20 = 20\\) %."],
    losning: "<p>\\(30 : 150 = 0{,}20 = 20\\) %.</p>"
  },
  {
    id: "to-priser",
    niva: "lett",
    tekst: "<p>Regn endringen i prosent av den gamle prisen.</p>",
    deler: [
      { tekst: "Et borsett øker fra 200 kr til 250 kr. Hvor mange prosent opp?", svar: { verdi: 25, enhet: "%" } },
      { tekst: "En kjeledress settes ned fra 480 kr til 360 kr. Hvor mange prosent ned?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Differanse delt på gammel pris, ganget med 100.", "a) \\(50 : 200 = 0{,}25\\). b) \\(120 : 480 = 0{,}25\\)."],
    losning: "<p>a) \\(50 : 200 = 25\\) % opp<br>b) \\(120 : 480 = 25\\) % ned</p>"
  },
  {
    id: "vrak-pp",
    niva: "lett",
    tekst: "<p>Vrakandelen økte fra 8 % til 11 %. Hvor mange prosentpoeng økte den? Skriv tallet. Du kan skrive ordet prosentpoeng etter, men ikke %-tegn.</p>",
    svar: { verdi: 3 },
    hint: ["Prosentpoeng er differansen mellom de to prosentene.", "\\(11 - 8 = 3\\) prosentpoeng."],
    losning: "<p>\\(11 - 8 = 3\\) prosentpoeng.</p>"
  },
  {
    id: "momentnokkel",
    niva: "middels",
    tekst: "<p>En momentnøkkel settes ned fra 1600 kr til 1200 kr.</p>",
    steg: [{ verdi: 400, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stort er avslaget i kroner?", svar: { verdi: 400, enhet: "kr" } },
      { tekst: "Hvor stort er avslaget i prosent?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Avslaget i kroner er gammel pris minus ny pris. Prosenten deler du på den gamle prisen.", "\\(1600 - 1200 = 400\\). \\(400 : 1600 = 0{,}25\\)."],
    losning: "<p>Avslag: 400 kr. \\(400 : 1600 = 25\\) %.</p>"
  },
  {
    id: "vrak-12-9",
    niva: "middels",
    tekst: "<p>Vrakandelen sank fra 12 % til 9 %.</p>",
    deler: [
      { tekst: "Hvor mange prosentpoeng sank den? Skriv tallet, uten %-tegn.", svar: { verdi: 3 } },
      { tekst: "Hvor mange prosent sank andelen, regnet av den gamle prosenten?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Først trekk 9 fra 12. Så deler du den differansen på 12.", "3 prosentpoeng. \\(3 : 12 = 0{,}25 = 25\\) %."],
    losning: "<p>a) \\(12 - 9 = 3\\) prosentpoeng<br>b) \\(3 : 12 = 25\\) %</p>"
  },
  {
    id: "vinkelsliper",
    niva: "middels",
    tekst: "<p>En vinkelsliper kostet 2500 kr og koster nå 2900 kr. Hvor mange prosent steg prisen?</p>",
    steg: [{ verdi: 400, enhet: "kr" }],
    svar: { verdi: 16, enhet: "%" },
    hint: ["Finn økningen i kroner og del på 2500.", "\\(400 : 2500 = 0{,}16 = 16\\) %."],
    losning: "<p>\\(2900 - 2500 = 400\\). \\(400 : 2500 = 16\\) %.</p>"
  },
  {
    id: "opp-og-ned",
    niva: "vanskelig",
    tekst: "<p>En reservedel koster 500 kr. Prisen øker med 20 % og synker deretter med 20 %.</p>",
    steg: [{ verdi: 600, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen til slutt?", svar: { verdi: 480, enhet: "kr" } },
      { tekst: "Hvor mange prosent under startprisen er sluttprisen?", svar: { verdi: 4, enhet: "%" } }
    ],
    hint: ["Regn 20 % av den prisen som gjelder akkurat da. Den andre prosenten regnes av 600 kr, ikke av 500 kr.", "\\(500 \\cdot 1{,}20 = 600\\). \\(600 \\cdot 0{,}80 = 480\\). \\(20 : 500 = 0{,}04\\)."],
    losning: "<p>Etter oppgang: 600 kr. Etter nedgang: 480 kr. \\(500 - 480 = 20\\) kr, som er 4 % av 500 kr.</p>"
  },
  {
    id: "rente-pp",
    niva: "vanskelig",
    tittel: "Ett prosentpoeng",
    tekst: "<p>Renten på et verktøylån økte fra 4 % til 5 %.</p>",
    deler: [
      { tekst: "Hvor mange prosentpoeng økte renten? Skriv tallet, uten %-tegn.", svar: { verdi: 1 } },
      { tekst: "Hvor mange prosent økte renten, regnet av den gamle rentesatsen?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Differansen mellom 5 og 4 er prosentpoeng. Del den differansen på 4 for å få prosent.", "1 prosentpoeng. \\(1 : 4 = 0{,}25 = 25\\) %."],
    losning: "<p>a) \\(5 - 4 = 1\\) prosentpoeng<br>b) \\(1 : 4 = 25\\) %</p>"
  },
  {
    id: "for-kort",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Stanga ble for kort",
    utstyr: "Målebånd og en stang eller et emne med mål på arbeidsordren",
    hms: "Mål på benken. Ikke start maskinen.",
    tekst: "<p>En stang skulle være 1000 mm. Den ble 980 mm. Hvor mange prosent for kort er den?</p>",
    steg: [{ verdi: 20, enhet: "mm" }],
    svar: { verdi: 2, enhet: "%" },
    hint: ["Finn avviket i millimeter. Del på målet den skulle ha.", "\\(1000 - 980 = 20\\) mm. \\(20 : 1000 = 0{,}02 = 2\\) %."],
    losning: "<p>\\(20 : 1000 \\cdot 100 = 2\\) % for kort.</p>"
  },
  {
    id: "rep-komma",
    type: "repetisjon",
    fra: "kapittel 1",
    niva: "lett",
    tekst: "<p>Regn ut \\(3{,}6 \\cdot 100\\).</p>",
    svar: { verdi: 360 },
    hint: ["100 har to nuller. Kommaet flyttes to plasser til høyre.", "\\(3{,}6 \\cdot 100 = 360\\)."],
    losning: "<p>\\(3{,}6 \\cdot 100 = 360\\).</p>"
  },
  {
    id: "rep-toleransebredde",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>Et mål er \\(90{,}0 \\pm 0{,}3\\) mm. Hvor bred er toleransen, fra nedre til øvre grensemål?</p>",
    svar: { verdi: 0.6, enhet: "mm" },
    hint: ["Toleransen går 0,3 mm til hver side. Legg sammen de to sidene.", "\\(0{,}3 + 0{,}3 = 0{,}6\\) mm. Øvre 90,3 minus nedre 89,7 er også 0,6."],
    losning: "<p>\\(90{,}3 - 89{,}7 = 0{,}6\\) mm.</p>"
  },
  {
    id: "eksamen-endring",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To spørsmål. Vis hva du deler på.</p>",
    deler: [
      { tekst: "Timelønna økte fra 180 kr til 198 kr. Hvor mange prosent?", svar: { verdi: 10, enhet: "%" } },
      { tekst: "Vrakprosenten økte fra 4 % til 7 %. Hvor mange prosentpoeng? Skriv tallet, uten %-tegn.", svar: { verdi: 3 } }
    ],
    hint: ["a) 18 kr av 180 kr. b) Trekk prosentene fra hverandre.", "\\(18 : 180 = 0{,}10\\). \\(7 - 4 = 3\\) prosentpoeng."],
    losning: "<p>a) \\(18 : 180 = 10\\) %<br>b) 3 prosentpoeng</p>"
  },
  {
    id: "lonn-250",
    niva: "lett",
    tekst: "<p>Timelønna økte fra 200 kr til 250 kr. Hvor mange prosent steg lønna?</p>",
    steg: [{ verdi: 50, enhet: "kr" }],
    svar: { verdi: 25, enhet: "%" },
    hint: ["Finn økningen i kroner. Del på den gamle lønna.", "\\(250 - 200 = 50\\). \\(50 : 200 = 0{,}25 = 25\\) %."],
    losning: "<p>\\(50 : 200 = 25\\) %.</p>"
  },
  {
    id: "to-endringer",
    niva: "lett",
    tekst: "<p>Regn endringen i prosent av den gamle prisen.</p>",
    deler: [
      { tekst: "Et oljefilter øker fra 80 kr til 100 kr. Hvor mange prosent opp?", svar: { verdi: 25, enhet: "%" } },
      { tekst: "Arbeidshansker settes ned fra 160 kr til 120 kr. Hvor mange prosent ned?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Differanse delt på gammel pris, ganget med 100.", "a) \\(20 : 80 = 0{,}25\\). b) \\(40 : 160 = 0{,}25\\)."],
    losning: "<p>a) \\(20 : 80 = 25\\) % opp<br>b) \\(40 : 160 = 25\\) % ned</p>"
  },
  {
    id: "pp-feil",
    niva: "lett",
    tekst: "<p>Feilandelen på en sveisestasjon økte fra 5 % til 9 %. Hvor mange prosentpoeng økte den? Skriv tallet, uten %-tegn.</p>",
    svar: { verdi: 4 },
    hint: ["Prosentpoeng er differansen mellom de to prosentene.", "\\(9 - 5 = 4\\) prosentpoeng."],
    losning: "<p>\\(9 - 5 = 4\\) prosentpoeng.</p>"
  },
  {
    id: "sliper-2000",
    niva: "middels",
    tekst: "<p>En vinkelsliper settes ned fra 2000 kr til 1500 kr.</p>",
    steg: [{ verdi: 500, enhet: "kr" }],
    deler: [
      { tekst: "Hvor stort er avslaget i kroner?", svar: { verdi: 500, enhet: "kr" } },
      { tekst: "Hvor stort er avslaget i prosent?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Avslaget i kroner er gammel pris minus ny pris. Prosenten deler du på den gamle prisen.", "\\(2000 - 1500 = 500\\). \\(500 : 2000 = 0{,}25\\)."],
    losning: "<p>Avslag: 500 kr. \\(500 : 2000 = 25\\) %.</p>"
  },
  {
    id: "prov-60",
    niva: "middels",
    tittel: "Flere bestod",
    tekst: "<p>Andelen som bestod kapittelprøven økte fra 60 % til 75 %.</p>",
    deler: [
      { tekst: "Hvor mange prosentpoeng økte andelen? Skriv tallet, uten %-tegn.", svar: { verdi: 15 } },
      { tekst: "Hvor mange prosent økte andelen, regnet av den gamle prosenten?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Først trekk 60 fra 75. Så deler du den differansen på 60.", "15 prosentpoeng. \\(15 : 60 = 0{,}25 = 25\\) %."],
    losning: "<p>a) \\(75 - 60 = 15\\) prosentpoeng<br>b) \\(15 : 60 = 25\\) %</p>"
  },
  {
    id: "ordrer",
    niva: "middels",
    tekst: "<p>Mandag kom det 40 arbeidsordrer. Tirsdag kom det 46. Hvor mange prosent flere ordre var det tirsdag, regnet av mandagens tall?</p>",
    steg: [{ verdi: 6 }],
    svar: { verdi: 15, enhet: "%" },
    hint: ["Finn økningen i antall ordre. Del på 40.", "\\(46 - 40 = 6\\). \\(6 : 40 = 0{,}15 = 15\\) %."],
    losning: "<p>\\(6 : 40 = 15\\) % flere ordre.</p>"
  },
  {
    id: "tilbake",
    niva: "vanskelig",
    tittel: "Opp og like mye ned",
    tekst: "<p>En reservedel koster 800 kr. Prisen øker med 10 % og synker deretter med 10 %.</p>",
    steg: [{ verdi: 880, enhet: "kr" }],
    deler: [
      { tekst: "Hva er prisen til slutt?", svar: { verdi: 792, enhet: "kr" } },
      { tekst: "Hvor mange prosent under startprisen er sluttprisen?", svar: { verdi: 1, enhet: "%" } }
    ],
    hint: ["Den andre prosenten regnes av den nye prisen, ikke av 800 kr. 10 % ned er faktor 0,90.", "\\(800 \\cdot 1{,}10 = 880\\). \\(880 \\cdot 0{,}90 = 792\\). \\(8 : 800 = 0{,}01\\)."],
    losning: "<p>Etter oppgang: 880 kr. Etter nedgang: 792 kr.<br>\\(800 - 792 = 8\\) kr, som er 1 % av 800 kr. Prisen er ikke tilbake på 800 kr.</p>"
  },
  {
    id: "rente-verktoy",
    niva: "vanskelig",
    tittel: "Renten på verktøylånet",
    tekst: "<p>Renten på et verktøylån økte fra 6 % til 7,5 %.</p>",
    deler: [
      { tekst: "Hvor mange prosentpoeng økte renten? Skriv tallet, uten %-tegn.", svar: { verdi: 1.5 } },
      { tekst: "Hvor mange prosent økte renten, regnet av den gamle rentesatsen?", svar: { verdi: 25, enhet: "%" } }
    ],
    hint: ["Differansen mellom 7,5 og 6 er prosentpoeng. Del den differansen på 6 for å få prosent.", "1,5 prosentpoeng. \\(1{,}5 : 6 = 0{,}25 = 25\\) %."],
    losning: "<p>a) \\(7{,}5 - 6 = 1{,}5\\) prosentpoeng<br>b) \\(1{,}5 : 6 = 25\\) %</p>"
  },
  {
    id: "for-lang",
    type: "verksted",
    niva: "middels",
    merke: "V/K",
    tittel: "Stanga ble for lang",
    utstyr: "Målebånd og en stang med mål på arbeidsordren",
    hms: "Mål på benken. Ikke start maskinen.",
    tekst: "<p>En stang skulle være 500 mm. Den ble 515 mm. Hvor mange prosent for lang er den?</p>",
    steg: [{ verdi: 15, enhet: "mm" }],
    svar: { verdi: 3, enhet: "%" },
    hint: ["Finn avviket i millimeter. Del på målet den skulle ha.", "\\(515 - 500 = 15\\) mm. \\(15 : 500 = 0{,}03 = 3\\) %."],
    losning: "<p>\\(15 : 500 \\cdot 100 = 3\\) % for lang.</p>"
  },
  {
    id: "rep-ovre",
    type: "repetisjon",
    fra: "kapittel 2",
    niva: "lett",
    tekst: "<p>Et mål er \\(25{,}00 \\pm 0{,}05\\) mm. Hva er øvre grensemål?</p>",
    svar: { verdi: 25.05, enhet: "mm" },
    hint: ["Legg toleransen til basismålet.", "\\(25{,}00 + 0{,}05 = 25{,}05\\) mm."],
    losning: "<p>\\(25{,}00 + 0{,}05 = 25{,}05\\) mm.</p>"
  },
  {
    id: "eks-pp",
    type: "eksamen",
    eksamensdel: "Del 1 (uten hjelpemidler)",
    niva: "middels",
    tekst: "<p>To spørsmål. Vis hva du deler på.</p>",
    deler: [
      { tekst: "Prisen økte fra 90 kr til 99 kr. Hvor mange prosent?", svar: { verdi: 10, enhet: "%" } },
      { tekst: "Vrakprosenten økte fra 20 % til 24 %. Hvor mange prosentpoeng? Skriv tallet, uten %-tegn.", svar: { verdi: 4 } }
    ],
    hint: ["a) 9 kr av 90 kr. b) Trekk prosentene fra hverandre.", "\\(9 : 90 = 0{,}10\\). \\(24 - 20 = 4\\) prosentpoeng."],
    losning: "<p>a) \\(9 : 90 = 10\\) %<br>b) 4 prosentpoeng</p>"
  }
]);
