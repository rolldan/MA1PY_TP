# Matematikk 1P-Y · nett bok for vg1 teknologi- og industrifag

Bokmål. Læreplan MAT08-01 (LK20), fagkode MAT1129. Skoleåret 2026/2027.

Nettboka brukes i to økter i uka: 60 minutter med tavle og måltrapp, og 75 minutter med verkstedkort. Hvert delkapittel har fire sider: **tavle**, **teori**, **oppgaver** og **verkstedkort**. På GitHub Pages lagres framdriften bare i nettleseren. Utgaven med database har elevinnlogging og en lærerside som viser hvem som er inne.

Publisert utgave: https://rolldan.github.io/MA1PY_TP/

## Åpne boka lokalt

```bash
python3 -m http.server 8000
```

Gå til [http://localhost:8000/](http://localhost:8000/). Forsiden henter `kapitler/kN/kapittel.json` for kapittel 0 til 10. Mangler fila, står kapitlet som «kommer». Denne utgaven har ikke database, så innloggingssiden sier at live innlogging kommer på utgaven med database. Boka er ikke låst.

## Innlogging og lærerside

Node-serveren serverer de samme filene og et API på samme origin. Uten `DATABASE_URL` brukes en database i minnet. Hvis variabelen peker på en annen database, kjør med den fjernet.

```bash
npm install
env -u DATABASE_URL npm start
```

Åpne [http://localhost:3000/innlogging.html](http://localhost:3000/innlogging.html). Den første kontoen blir lærerkontoen. Etterpå kan læreren opprette elever på Admin. Passord lagres bare som hash. `npm run build` kjører migrasjonene når `DATABASE_URL` er satt.

## Det som ligger inne nå

| Kapittel | Innhold |
|---|---|
| 0 Oppstart | 0.1 Nettboka og måltrappa · 0.2 Fem temaark og spillet Bjørn · 0.3 Kartlegging |
| 1 Verktøykassen | 1.1 Gange og dele med 10, 100 og 1000 · 1.2 Overslag og avrunding · 1.3 Negative tall og regnerekkefølge · 1.4 Brøk, desimaltall og tommer · 1.5 Diagrammer i regneark |
| 2–10 | Kommer. Titlene og ukeplanen ligger i `assets/js/plan.js`. |

Årsplanen boka følger, ligger i prosjektets dokumentasjon, ikke i dette repositoriet.

## Slik legges et kapittel inn

Les [CONTRIBUTING-kapittel.md](CONTRIBUTING-kapittel.md). Et kapittel eier bare mappa `kapitler/kN/`. Mal: `kapitler/_mal/`.

```bash
node tester/sjekk.test.js
node tester/sjekk-kapittel.js 0
node tester/sjekk-kapittel.js 1
```

`sjekk-kapittel.js` skal gi 0 feil.
