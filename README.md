# Matematikk 1P-Y · nett bok for vg1 teknologi- og industrifag

Bokmål. Læreplan MAT08-01 (LK20), fagkode MAT1129. Skoleåret 2026/2027.

Nettboka brukes i to økter i uka: 60 minutter med tavle og måltrapp, og 75 minutter med verkstedkort. Hvert delkapittel har fire sider: **tavle**, **teori**, **oppgaver** og **verkstedkort**. Framdriften lagres bare i nettleseren.

## Åpne boka lokalt

```bash
python3 -m http.server 8000
```

Gå til [http://localhost:8000/](http://localhost:8000/). Forsiden henter `kapitler/kN/kapittel.json` for kapittel 0 til 10. Mangler fila, står kapitlet som «kommer».

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
