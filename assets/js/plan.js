/* Fast plandata for hele boka: kapitler, farger og ukeplan.
 * Kapittelinnhold ligger i kapitler/kN/kapittel.json. Denne fila endres bare når årsplanen endres. */
window.PLAN = {
  kapitler: [
    { nr: 0, tittel: "Oppstart", undertittel: "fem temaark og måltrapp", uker: "34–35", km: "Kartlegging, KM4", farge: "#475569" },
    { nr: 1, tittel: "Verktøykassen", undertittel: "tall, overslag og diagrammer", uker: "36–37", km: "KM4, KM3", farge: "#9a5b00" },
    { nr: 2, tittel: "Måling, måleusikkerhet og toleranser", undertittel: "", uker: "38–39, 41", km: "KM5, KM4", farge: "#1d4ed8" },
    { nr: 3, tittel: "Forhold og prosent i verkstedet", undertittel: "", uker: "42–46", km: "KM2, KM1, KM5", farge: "#0f766e" },
    { nr: 4, tittel: "Måleenheter og sammensatte enheter", undertittel: "", uker: "47–49", km: "KM3", farge: "#6d28d9" },
    { nr: 5, tittel: "Formler fra verkstedet", undertittel: "", uker: "1–4", km: "KM2, KM3", farge: "#be123c" },
    { nr: 6, tittel: "Geometri, målestokk og makerspace", undertittel: "", uker: "5–7, 9–11", km: "KM6, KM3, KM2", farge: "#15803d" },
    { nr: 7, tittel: "Lønn og personlig økonomi", undertittel: "", uker: "13–15", km: "KM1", farge: "#c2410c" },
    { nr: 8, tittel: "Bilprosjektet", undertittel: "", uker: "17–19", km: "KM1, KM6, KM2, KM4", farge: "#0e7490" },
    { nr: 9, tittel: "Den store overfarten", undertittel: "helårsprosjekt", uker: "20–23", km: "Alle", farge: "#1e3a8a" },
    { nr: 10, tittel: "Eksamensforberedelse og avslutning", undertittel: "", uker: "24–25", km: "Alle", farge: "#86198f" }
  ],

  kompetansemal: [
    ["KM1 Økonomi", "vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort"],
    ["KM2 Formler", "tolke og bruke formler som gjelder dagligliv og yrkesliv"],
    ["KM3 Enheter", "tolke og bruke sammensatte måleenheter i praktiske sammenhenger og velge egnet måleenhet"],
    ["KM4 Data", "innhente data fra praksisfeltet, gjøre overslag og beregninger og lage formålstjenlige framstillinger av resultatene og presentere disse"],
    ["KM5 Toleranse", "gjøre beregninger og vurderinger knyttet til måleusikkerhet og toleranse"],
    ["KM6 Geometri", "utforske og bruke egenskapene ved geometriske figurer og regne ut lengder, vinkler, areal, volum, forhold og målestokk i problemløsing innenfor teknologi- og industrifag"]
  ],

  // [uke, kapittel (tall eller null), tema, læringsmål, 75 min, 60 min, GC-element]
  uker: [
    ["34", 0, "Oppstart", "… fortelle hvor matematikk brukes i verkstedet", "Verkstedrunde med matteblikk: fem bilder med tall og enheter", "Bli-kjent-skjema «Hvorfor TIF?», spilleregler, lag fordeles, «finn fram i nettboka»", "Spilleregler presenteres. Styrke: engasjement"],
    ["35", 0, "Fem temaark og kartlegging", "… vise hva jeg kan i tall, geometri, formler og økonomi", "Fem temaark i stasjoner", "Kartlegging. Eleven får startnivå i måltrappa", "«Jeg kan»-lista deles ut. Loggbok starter"],
    ["36", 1, "1.1–1.3 Gange og dele med 10, overslag, negative tall", "… gjøre overslag og regne raskt med 10, 100, 1000", "Overslag ved lagerhylla: skruer og planker", "Diagram i regneark av egen skjermtid", "Drillark «antall riktige»: slå din egen rekord. Styrke: selvkontroll"],
    ["37", 1, "1.4–1.5 Brøk, tommer og diagram", "… regne om mellom tommer og mm", "Mål nøkler og bor i tommer", "Akslingskonkurransen: lag og tolk diagram", "Egenvurdering: første fargelegging av «Jeg kan»"],
    ["38", 2, "2.1–2.3 Målefeil, måleverktøy, µm", "… velge riktig måleverktøy og regne mellom µm og mm", "Samme aksel, mange målere", "Tilfeldige og systematiske feil, µm↔mm i måltrapp", "Styrke: nysgjerrighet"],
    ["39", 2, "2.4–2.6 Usikkerhet, grensemål, ISO 2768", "… finne største og minste mål og bruke ISO 2768-1", "Godkjent eller vraket? (72 ± 0,3)", "Hvilken nøyaktighetsgrad trengs? (Mathias, 1220 mm)", "Power break: måleløp"],
    ["40", null, "Høstferie", "", "", "", ""],
    ["41", 2, "2.7 Pasninger og verktøyets grenser", "… avgjøre om et mål er godkjent når verktøyet har usikkerhet", "Praktisk måleprøve (vurdering)", "Pasninger: klaring, mellom og press. Bolter 90 ± 0,3", "Styrke: viljestyrke"],
    ["42", 3, "3.1 Forhold og blandingsforhold", "… regne med forhold og veien om 1", "Bland frostvæske og spylervæske riktig", "Forhold i måltrapp", "Lagarbeid med faste roller"],
    ["43", 3, "3.2 Prosent: del og hel", "… finne del, hel og prosentandel", "Svinnprosent: vei kapprester fra programfaget", "Hjulbolter og bremsekunder", "Stjerne-puslespill (prosent og brøk)"],
    ["44", 3, "3.3–3.4 Endring, prosentpoeng, rabatt og mva", "… regne endring i prosent og pris med rabatt og mva", "Prismerking i verktøyskapet: med og uten mva", "Bremseskive på nett eller i butikk?", "Styrke: optimisme («ikke ennå»)"],
    ["45", 3, "3.5–3.6 Vekstfaktor og promille", "… bruke vekstfaktor over flere perioder", "Skjærevæske i promille og prosent", "Mustang, Avensis og Snorre-kjeden", "Prosentbingo"],
    ["46", 3, "Prøve: prosent og toleranser", "… vise hva jeg kan i prosent og toleranse", "Repetisjonsstasjoner før prøven", "Skriftlig prøve (60 min)", "Prøven starter med en «sikker» oppgave"],
    ["47", 4, "4.1–4.2 Prefikser, lengde, areal, volum", "… gjøre om mellom enheter og mellom liter og dm³", "Liter-duell med verkstedvæsker (fleksuke: kan byttes med ekskursjon)", "Betongplattingen. Black week-tilbud", "Styrke: sosial kompetanse"],
    ["48", 4, "4.3–4.4 Masse, massetetthet, fart og tid", "… regne masse fra volum og bruke desimaltimer", "Hvor tungt er det? Flattstål og jernplate på vekta", "Fart og desimaltimer", "Exit-oppgave med mestringssjekk"],
    ["49", 4, "4.5–4.6 Sammensatte enheter", "… bruke bar, kPa, l/min og kWh", "Dekktrykk bar↔kPa↔psi og strøm fra merkeskilt", "Strømkostnad i regneark. «Hvor mye lagring har du på telefonen?»", "Loggbok før tentamen"],
    ["50", null, "Juletentamen (kap. 1–4)", "… vise hva jeg har lært i høst", "Tentamen eller repetisjon etter skolens plan", "Tentamen, del 1 uten og del 2 med hjelpemidler", "Fast start med «sikker» oppgave"],
    ["51", null, "Halvårsvurdering og juleoppdrag (kort uke)", "… se min egen framgang", "Makerspace: gaveeske på 3 dm³ i laser", "Gjennomgang av tentamen og halvårssamtale", "Styrke: takknemlighet"],
    ["52–53", null, "Juleferie", "", "", "", ""],
    ["1", 5, "5.1–5.2 Tolke og snu formler. CAS", "… sette inn i en formel og snu den", "Tilhengerleie og dagslønn: finn riktig formel ved praktiske kort", "CAS i GeoGebra: løs for ukjent", "Nye mål i måltrappa. Styrke: engasjement"],
    ["2", 5, "5.3 Ohms lov og effekt", "… bruke U = R · I og P = U · I", "Ohms lov i bilen: mål med multimeter, velg sikring", "Tavle «Hvorfor gikk sikringen?» og måltrapp", "Undrespørsmål med tenketid"],
    ["3", 5, "5.4–5.5 Dreiemoment og utveksling", "… bruke M = F · a og n₁d₁ = n₂d₂", "Klarer lærlingen det? Momentnøkkel og reimskiver", "Utveksling på moped og søyleboremaskin", "Styrke: viljestyrke"],
    ["4", 5, "5.6 Skjærehastighet", "… velge riktig turtall med formel og nomogram", "Hvem brenner opp boret først? Velg turtall på dreiebenken", "Nomogramoppgave fra eksamen. Formel i regneark", "Loggbok: hvilken formel bruker jeg i programfaget?"],
    ["5", 6, "6.1–6.2 Vinkler, Pytagoras og 3-4-5", "… kontrollere rette vinkler med 3-4-5", "Er rammen rett? Diagonalmåling", "Pytagoras i måltrapp", "Styrke: nysgjerrighet"],
    ["6", 6, "6.3 Omkrets og areal", "… regne areal av plater med hull og sammensatte figurer", "Kutteplan for plate og svinn i prosent", "Aluminiumsplate 65 × 30 cm med hull (eksamen H23)", "Lag-konkurranse: minst svinn"],
    ["7", 6, "6.4 Volum av prisme og sylinder", "… regne volum og gjøre om til liter", "Makerspace: brusboks på 0,33 L, del 1 (design, beregning og tegning)", "Volumoppgaver: kasse, hydraulikksylinder, rør på 1 L", "Power break"],
    ["8", null, "Vinterferie", "", "", "", ""],
    ["9", 6, "6.5–6.6 Slagvolum og målestokk", "… bruke målestokk og forklare hvorfor volumet blir 1/8 i 1:2", "Makerspace, del 2: kutt, montering og test med sand. Modell i 1:2", "Slagvolum: moped og Volvo B230. Arbeidstegning i 1:5 og 5:1", "Egenvurdering med stjerner"],
    ["10", 6, "6.7 Overflate, masse og hjuloppdraget", "… regne overflate og masse og løse et sammensatt problem", "Hjuloppdraget: mål omkretsen på XC60-hjulet", "Dreid stang: volumreduksjon. Etikett på boks", "Styrke: optimisme"],
    ["11", 6, "Prøve: formler og geometri", "… vise hva jeg kan i formler og geometri", "Repetisjonsstasjoner før prøven", "Skriftlig prøve (60 min)", "Prøven starter med en «sikker» oppgave"],
    ["12", null, "Påskeferie", "", "", "", ""],
    ["13", 7, "7.1–7.2 Lønn, skatt og lønnsslipp (kort uke)", "… regne lønn og trekk og lese en lønnsslipp", "Timeliste fra verkstedet (kortes ned hvis økta faller på 2. påskedag)", "Lærlingens første lønnsslipp i lønnsmalen", "Styrke: selvkontroll"],
    ["14", 7, "7.3–7.5 Sparing, lån og kredittkort", "… sammenligne serielån, annuitetslån og kredittkort", "Prisjakt i verktøykatalogen: kontant eller avbetaling på verktøysett", "Lånet til Sara. Kredittkortkalkulator", "Undrespørsmål: «Hva koster ‹betal senere›?»"],
    ["15", 7, "7.6 Budsjett og regnskap", "… sette opp og vurdere et budsjett", "Kostnader for egen bil (forsikring, drivstoff, dekk)", "Budsjett og regnskap i regneark. Bilkjøp", "Loggbok: hva er viktig for meg?"],
    ["16", null, "Tentamen (hele året)", "… vise samlet kompetanse", "Tentamen etter skolens plan (del 1 og del 2)", "Tentamen", "Fast start med «sikker» oppgave"],
    ["17", 8, "Bilprosjektet, uke 1", "… lage budsjett med rabatt, mva og lån", "Velg bil og deler. Prisliste fra verkstedet", "Budsjett og innkjøp i regneark", "Faste lag. Styrke: sosial kompetanse"],
    ["18", 8, "Bilprosjektet, uke 2 (kort uke)", "… beregne areal og forbruk av lakk og grunning", "Mål panser og dør, regn lakk og grunning", "Kostnadsanalyse av prosjektet", "Power break"],
    ["19", 8, "Bilprosjektet, uke 3", "… beregne volum, platebehov og vekt", "Basskassen: mål, kapp og regn volum, pris og vekt", "Presentasjon av bilprosjektet med rubrikk", "Ros fra laget"],
    ["20", 9, "Den store overfarten: finansiering (kort uke)", "… sammenligne lån og sparing for et stort kjøp", "Prosjektstart: lagene planlegger tanken", "Finansiering av båten. Budsjett for turen", "Styrke: engasjement"],
    ["21", 9, "Tank og modell", "… lage modell i målestokk og tegning med toleranser", "Makerspace: modell av tanken i 1:10", "Solidworks-tegning med toleranse", "Egenvurdering mot rubrikken lav, middels, høy"],
    ["22", 9, "Motor, navigasjon og rekkevidde", "… bruke hk↔kW, knop og desimaltimer og vurdere rekkevidde", "Drivstoff og rekkevidde: mål en tank i bilverkstedet", "Navigasjon og 30 %-regelen", "Undrespørsmål: «Rekker vi fram?»"],
    ["23", 9, "Brusanalyse og presentasjon", "… presentere og argumentere for løsningene", "Presentasjon ved arbeidsbenken med praktisk del", "Brusanalyse med diagram. Fagsamtale (vurdering)", "Styrke: takknemlighet"],
    ["24", 10, "Eksamensforberedelse", "… forberede meg på muntlig-praktisk eksamen", "Prøveeksamen med praktisk del i verkstedet", "TP-eksamen del 1 og del 2 i måltrapp", "Individuell tilbakemelding fra læreren"],
    ["25", 10, "Avslutning (kort uke)", "… se tilbake på årets mestring", "«Beste arbeid» og rydding i verkstedet", "Siste loggbok og «Jeg kan»-lista fargelegges ferdig", "Avslutning i lag. Alle får konkret ros"]
  ],

  spilleregler: [
    "Vi starter og slutter på tida.",
    "Mobilen ligger i kassa i arbeidsfasen.",
    "Alle prøver før de spør. Alle hjelper når de blir spurt.",
    "Vi ler med hverandre, aldri av hverandre.",
    "Målet på tavla er målet for alle, men veien dit er din egen."
  ]
};
