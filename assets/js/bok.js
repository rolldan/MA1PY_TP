/* MA1PY – motoren i nettboka. Leser data-attributter på <body> og bygger navigasjon og komponenter.
 * Kapittelforfattere skal ikke trenge å endre denne fila; se CONTRIBUTING-kapittel.md. */
(function () {
  "use strict";

  var skript = document.currentScript;
  var ROT = skript ? skript.src.replace(/assets\/js\/bok\.js(\?.*)?$/, "") : "/";
  var KATEX = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/";
  var LAGER = "ma1py:";
  var SIDER = [
    ["tavle", "Tavle"],
    ["teori", "Teori"],
    ["oppgaver", "Oppgaver"],
    ["verksted", "Verkstedkort"]
  ];
  var NIVA = {
    lett: { navn: "Lett", prikk: "●", tekst: "grunnmur" },
    middels: { navn: "Middels", prikk: "●●", tekst: "fagarbeider" },
    vanskelig: { navn: "Vanskelig", prikk: "●●●", tekst: "mester" }
  };
  var STATUS = {
    ikke: "Ikke prøvd",
    pabegynt: "Påbegynt",
    hint: "Løst med hint",
    egen: "Løst på egen hånd"
  };

  var registrerteOppgaver = null;
  var body = document.body;
  var ctx = {
    side: body.dataset.side || "",
    kap: body.dataset.kapittel !== undefined && body.dataset.kapittel !== "" ? Number(body.dataset.kapittel) : null,
    del: body.dataset.del || null
  };

  // ---------- Hjelpere ----------
  function el(tag, attr, barn) {
    var e = document.createElement(tag);
    if (attr) Object.keys(attr).forEach(function (k) {
      if (k === "html") e.innerHTML = attr[k];
      else if (k === "tekst") e.textContent = attr[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attr[k]);
      else if (attr[k] !== null && attr[k] !== undefined && attr[k] !== false) e.setAttribute(k, attr[k]);
    });
    (barn || []).forEach(function (b) { if (b) e.appendChild(typeof b === "string" ? document.createTextNode(b) : b); });
    return e;
  }
  function $(sel, rot) { return (rot || document).querySelector(sel); }
  function $$(sel, rot) { return Array.prototype.slice.call((rot || document).querySelectorAll(sel)); }

  var lager = {
    hent: function (nokkel, standard) {
      try { var v = localStorage.getItem(LAGER + nokkel); return v === null ? standard : JSON.parse(v); } catch (e) { return standard; }
    },
    sett: function (nokkel, verdi) {
      try { localStorage.setItem(LAGER + nokkel, JSON.stringify(verdi)); } catch (e) { /* privat modus */ }
    },
    alle: function () {
      var ut = {};
      try {
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k.indexOf(LAGER) === 0) ut[k] = localStorage.getItem(k);
        }
      } catch (e) { /* ignorer */ }
      return ut;
    }
  };

  function mappe(delNr) { return String(delNr).replace(/\./g, "-"); }
  function urlKapittel(kap) { return ROT + "kapitler/k" + kap + "/index.html"; }
  function urlSide(kap, delNr, side) { return ROT + "kapitler/k" + kap + "/" + mappe(delNr) + "/" + side + ".html"; }
  function planKap(nr) { return (window.PLAN.kapitler || []).filter(function (k) { return k.nr === nr; })[0]; }
  function settKapFarge(nr) {
    var k = planKap(nr);
    if (k) document.documentElement.style.setProperty("--kap", k.farge);
  }
  function idag() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }

  function lastSkript(src) {
    return new Promise(function (ok) {
      var s = document.createElement("script");
      s.src = src; s.onload = ok; s.onerror = ok;
      document.head.appendChild(s);
    });
  }
  function lastCss(href) {
    if ($('link[href="' + href + '"]')) return;
    document.head.appendChild(el("link", { rel: "stylesheet", href: href }));
  }

  var kapCache = {};
  function hentKapittel(nr) {
    if (!kapCache[nr]) {
      kapCache[nr] = fetch(ROT + "kapitler/k" + nr + "/kapittel.json", { cache: "no-cache" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    }
    return kapCache[nr];
  }

  function renderMatte(rot) {
    if (window.renderMathInElement) {
      window.renderMathInElement(rot || document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$$", right: "$$", display: true }
        ],
        ignoredClasses: ["ingen-matte"],
        throwOnError: false
      });
    }
  }

  // ---------- Topplinje og bunnnavigasjon ----------
  function bygTopp(kapData) {
    var pk = ctx.kap !== null ? planKap(ctx.kap) : null;
    var smule = el("nav", { class: "smule", "aria-label": "Brødsmuler" });
    if (pk) {
      smule.appendChild(el("span", { "aria-hidden": "true", tekst: "›" }));
      smule.appendChild(el("a", { href: urlKapittel(pk.nr), tekst: "Kapittel " + pk.nr + " · " + pk.tittel }));
    }
    var del = finnDel(kapData);
    if (del) {
      smule.appendChild(el("span", { "aria-hidden": "true", tekst: "›" }));
      smule.appendChild(el("span", { tekst: del.nr + " " + del.tittel }));
    }
    var topp = el("header", { class: "topp" }, [
      el("div", { class: "topp-indre" }, [
        el("a", { class: "logo", href: ROT + "index.html" }, [el("b", { tekst: "1P-Y" }), "Matematikk TIF"]),
        smule,
        el("nav", { class: "topp-hoyre", "aria-label": "Snarveier" }, [
          el("a", { href: ROT + "ukeplan.html", tekst: "Ukeplan" }),
          el("a", { href: ROT + "framdrift.html", tekst: "Min framdrift" })
        ])
      ])
    ]);
    if (del && ctx.side !== "kapittel") {
      var faner = el("nav", { class: "faner", "aria-label": "Deler av delkapitlet" });
      sider(del).forEach(function (s) {
        faner.appendChild(el("a", { href: urlSide(ctx.kap, del.nr, s[0]), "aria-current": s[0] === ctx.side ? "page" : null, tekst: s[1] }));
      });
      if (ctx.side !== "tavle") {
        faner.appendChild(el("a", { href: "#", class: "skriv-ut", tekst: "Skriv ut / PDF", onclick: function (e) { e.preventDefault(); window.print(); } }));
      }
      topp.appendChild(faner);
    }
    body.insertBefore(topp, body.firstChild);
  }

  function sider(del) {
    var finnes = del.sider || ["tavle", "teori", "oppgaver", "verksted"];
    return SIDER.filter(function (s) { return finnes.indexOf(s[0]) >= 0; });
  }

  function finnDel(kapData) {
    if (!kapData || !ctx.del) return null;
    return (kapData.delkapitler || []).filter(function (d) { return d.nr === ctx.del; })[0] || null;
  }

  function bygBunnnav(kapData, beholder) {
    if (!kapData || !ctx.del) return;
    var deler = (kapData.delkapitler || []).filter(function (d) { return sider(d).some(function (s) { return s[0] === ctx.side; }); });
    var i = deler.map(function (d) { return d.nr; }).indexOf(ctx.del);
    var forrige = deler[i - 1], neste = deler[i + 1];
    var navn = (SIDER.filter(function (s) { return s[0] === ctx.side; })[0] || ["", ""])[1].toLowerCase();
    var nav = el("nav", { class: "bunnnav", "aria-label": "Forrige og neste" }, [
      el("div", null, [forrige ? el("a", { href: urlSide(ctx.kap, forrige.nr, ctx.side) }, [el("small", { tekst: "‹ Forrige" }), forrige.nr + " " + forrige.tittel]) : null]),
      el("a", { href: urlKapittel(ctx.kap), tekst: "Innhold" }),
      el("div", { class: "neste" }, [neste ? el("a", { href: urlSide(ctx.kap, neste.nr, ctx.side) }, [el("small", { tekst: "Neste " + navn + " ›" }), neste.nr + " " + neste.tittel]) : el("a", { href: urlKapittel(ctx.kap) }, [el("small", { tekst: "Ferdig ›" }), "Tilbake til kapitlet"])])
    ]);
    (beholder || $("main")).appendChild(nav);
  }

  // ---------- Forside ----------
  function bygForside() {
    var mal = $("#kapittelliste");
    var piller = $("#kapittelpiller");
    var antall = { kapitler: 0, deler: 0, oppgaver: 0 };
    return Promise.all(window.PLAN.kapitler.map(function (k) { return hentKapittel(k.nr); })).then(function (alle) {
      window.PLAN.kapitler.forEach(function (k, i) {
        var data = alle[i];
        var bygd = !!(data && data.delkapitler && data.delkapitler.length);
        if (bygd) { antall.kapitler++; antall.deler += data.delkapitler.length; }
        var stil = "--kap:" + k.farge;
        if (piller) piller.appendChild(el(bygd ? "a" : "span", { class: "pille" + (bygd ? "" : " kommer"), href: bygd ? urlKapittel(k.nr) : null, style: stil }, [
          el("span", { class: "nr", style: "background:" + k.farge, tekst: String(k.nr) }), k.tittel
        ]));
        var rad = el("section", { class: "kapittel-rad" + (bygd ? "" : " kommer"), style: stil, id: "kap" + k.nr }, [
          el("div", { class: "stort-nr", "aria-hidden": "true", tekst: String(k.nr) }),
          el("div", null, [
            el("p", { class: "etikett", tekst: "Kapittel " + k.nr + " · uke " + k.uker + " · " + k.km }),
            el("h2", null, [bygd ? el("a", { href: urlKapittel(k.nr), style: "color:inherit;text-decoration:none", tekst: k.tittel }) : document.createTextNode(k.tittel), bygd ? null : el("span", { class: "kommer-merke", tekst: "kommer" })]),
            el("p", { tekst: bygd && data.ingress ? data.ingress : (k.undertittel ? capitalize(k.undertittel) + "." : "") }),
            bygd && data.byggerPa ? el("p", null, [el("b", { tekst: "Bygger på " }), lenkeListe(data.byggerPa)]) : null,
            bygd ? delLenker(k.nr, data.delkapitler) : null
          ])
        ]);
        if (mal) mal.appendChild(rad);
      });
      var t = $("#tall-rad");
      if (t) t.innerHTML = "<span><b>11</b> kapitler i årsplanen</span><span><b>" + antall.kapitler + "</b> klare</span><span><b>" + antall.deler + "</b> delkapitler</span>";
    });
  }
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function lenkeListe(liste) {
    var span = el("span");
    (liste || []).forEach(function (b, i) {
      if (i) span.appendChild(document.createTextNode(", "));
      if (typeof b === "string") span.appendChild(document.createTextNode(b));
      else span.appendChild(b.lenke ? el("a", { href: ROT + b.lenke, tekst: b.tekst }) : document.createTextNode(b.tekst));
    });
    if (liste && liste.length) span.appendChild(document.createTextNode("."));
    return span;
  }
  function delLenker(kap, deler) {
    var ul = el("ul", { class: "del-lenker" });
    deler.forEach(function (d) { ul.appendChild(el("li", null, [el("a", { href: urlSide(kap, d.nr, sider(d)[0][0]), tekst: d.nr + " " + d.tittel })])); });
    return ul;
  }

  // ---------- Kapittelside ----------
  function bygKapittelside(data) {
    var main = $("main");
    var pk = planKap(ctx.kap);
    if (!data) { main.appendChild(el("p", { tekst: "Fant ikke kapittel.json for dette kapitlet." })); return; }
    var hode = el("header", { class: "kap-hode" }, [
      el("div", { class: "stort-nr", "aria-hidden": "true", tekst: String(ctx.kap) }),
      el("div", null, [
        el("p", { class: "etikett", tekst: "Kapittel " + ctx.kap + " · uke " + pk.uker + " · " + pk.km }),
        el("h1", { tekst: data.tittel || pk.tittel })
      ])
    ]);
    main.appendChild(hode);
    if (data.bilde) main.appendChild(el("figure", { html: data.bilde }));
    main.appendChild(el("h2", { tekst: "Dette kapitlet handler om" }));
    main.appendChild(el("p", { class: "ingress", html: data.handlerOm || data.ingress || "" }));
    if (data.byggerPa) main.appendChild(el("p", null, [el("b", { tekst: "Bygger på " }), lenkeListe(data.byggerPa)]));
    if (data.lenkerVidere) main.appendChild(el("p", null, [el("b", { tekst: "Lenker videre til " }), lenkeListe(data.lenkerVidere)]));

    main.appendChild(el("h2", { tekst: "Delkapitler" }));
    var kort = el("div", { class: "del-kort" });
    data.delkapitler.forEach(function (d) {
      var lenker = el("ul", { class: "del-lenker" });
      sider(d).forEach(function (s) { lenker.appendChild(el("li", null, [el("a", { href: urlSide(ctx.kap, d.nr, s[0]), tekst: s[1] })])); });
      var stat = statusForDel(d.nr);
      kort.appendChild(el("article", null, [
        el("p", { class: "etikett", tekst: d.nr + (d.uke ? " · uke " + d.uke : "") }),
        el("h3", { tekst: d.tittel }),
        el("p", { class: "formel", html: d.formel || "" }),
        stat.totalt ? el("p", { class: "status " + (stat.lost === stat.totalt ? "egen" : stat.lost ? "pabegynt" : ""), tekst: stat.lost + " av " + stat.totalt + " oppgaver løst" }) : null,
        lenker
      ]));
    });
    main.appendChild(kort);

    if (data.jegKan && data.jegKan.length) {
      main.appendChild(el("h2", { tekst: "«Jeg kan»-lista" }));
      main.appendChild(el("p", { tekst: "Fargelegg hvert mål: rødt = ikke ennå, gult = nesten, grønt = jeg kan det. Lagres bare på denne maskinen." }));
      var ul = el("ul", { class: "jeg-kan" });
      data.jegKan.forEach(function (m, i) {
        var nokkel = "jegkan:k" + ctx.kap + ":" + i;
        var valgt = lager.hent(nokkel, "");
        var velger = el("span", { class: "lys-velger", role: "group", "aria-label": "Hvor godt kan du dette?" });
        [["rod", "Ikke ennå"], ["gul", "Nesten"], ["gronn", "Jeg kan det"]].forEach(function (f) {
          velger.appendChild(el("button", {
            type: "button", "data-farge": f[0], "aria-pressed": valgt === f[0] ? "true" : "false", title: f[1], "aria-label": f[1],
            onclick: function () {
              var ny = this.getAttribute("aria-pressed") === "true" ? "" : f[0];
              lager.sett(nokkel, ny);
              $$("button", velger).forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.farge === ny ? "true" : "false"); });
            }
          }));
        });
        ul.appendChild(el("li", null, [velger, el("span", { html: m })]));
      });
      main.appendChild(ul);
    }

    if (data.verkstedoppdrag && data.verkstedoppdrag.length) {
      main.appendChild(el("h2", { tekst: "Verkstedoppdrag i kapitlet" }));
      var ol = el("ul", { class: "oppdrag-liste" });
      data.verkstedoppdrag.forEach(function (o) {
        ol.appendChild(el("li", null, [
          el("span", { class: "merke v", tekst: "[" + o.merke + "]" }), " ",
          o.lenke ? el("a", { href: ROT + "kapitler/k" + ctx.kap + "/" + o.lenke }, [el("b", { tekst: o.tittel })]) : el("b", { tekst: o.tittel }),
          el("p", { style: "margin:0.3rem 0 0", html: o.tekst || "" })
        ]));
      });
      main.appendChild(ol);
    }
    var forrigeK = planKap(ctx.kap - 1), nesteK = planKap(ctx.kap + 1);
    main.appendChild(el("nav", { class: "bunnnav" }, [
      el("div", null, [forrigeK ? el("a", { href: ROT + "index.html#kap" + forrigeK.nr }, [el("small", { tekst: "‹ Forrige kapittel" }), forrigeK.nr + " " + forrigeK.tittel]) : null]),
      el("a", { href: ROT + "index.html", tekst: "Alle kapitler" }),
      el("div", { class: "neste" }, [nesteK ? el("a", { href: ROT + "index.html#kap" + nesteK.nr }, [el("small", { tekst: "Neste kapittel ›" }), nesteK.nr + " " + nesteK.tittel]) : null])
    ]));
  }

  // ---------- Tavle ----------
  function bygTavle(kapData) {
    var tavle = $(".tavle");
    if (!tavle) return;
    var del = finnDel(kapData) || { nr: ctx.del, tittel: document.title };
    var bilder = $$(".lysbilde", tavle);
    var ramme = el("div", { class: "tavle-ramme" });
    tavle.parentNode.insertBefore(ramme, tavle);
    var faner = el("div", { class: "tavle-faner", role: "tablist" });
    var topp = el("div", { class: "tavle-topp" }, [
      el("a", { href: urlKapittel(ctx.kap), tekst: "‹ Kapittel " + ctx.kap }),
      el("span", { class: "tittel", tekst: del.nr + " " + del.tittel }),
      faner,
      el("a", { class: "til-teori", href: urlSide(ctx.kap, del.nr, "teori"), tekst: "Teori ›" })
    ]);
    ramme.appendChild(topp);
    ramme.appendChild(tavle);
    var prikker = el("div", { class: "prikker", "aria-hidden": "true" });
    var tilbake = el("button", { class: "knapp lys", type: "button", "aria-label": "Tilbake", tekst: "←" });
    var fram = el("button", { class: "knapp kap", type: "button", tekst: "Neste →" });
    var bunn = el("div", { class: "tavle-bunn" }, [
      prikker,
      el("p", { class: "instruks", tekst: "→ / mellomrom / klikk på figuren for neste steg · ← tilbake" }),
      el("div", { class: "knapper" }, [tilbake, fram])
    ]);
    ramme.appendChild(bunn);

    var sti = location.pathname;
    var tilstand = bilder.map(function (b, i) {
      var steg = $$(".steg", b);
      steg.forEach(function (s) { s.classList.add("steg-skjult"); });
      var tittel = b.dataset.tittel || ($("h2", b) ? $("h2", b).textContent : "Lysbilde " + (i + 1));
      faner.appendChild(el("button", { type: "button", role: "tab", tekst: (i + 1) + " " + tittel, onclick: function () { gaTil(i, 0); } }));
      var nokkel = "uklart:" + sti + ":" + i;
      var knapp = el("button", { type: "button", class: "uklart" });
      function oppdater() {
        var n = lager.hent(nokkel, 0);
        knapp.textContent = n ? "Uklart for meg (" + n + ")" : "Uklart for meg";
        knapp.classList.toggle("trykket", n > 0);
      }
      knapp.addEventListener("click", function () { lager.sett(nokkel, lager.hent(nokkel, 0) + 1); oppdater(); });
      oppdater();
      b.insertBefore(knapp, b.firstChild);
      if (!$(".figur", b)) b.classList.add("uten-figur");
      $$(".figur", b).forEach(function (f) { f.addEventListener("click", function () { neste(); }); f.style.cursor = "pointer"; });
      return { steg: steg, vist: 0 };
    });
    $$(".undre", tavle).forEach(bygUndre);

    var na = 0;
    var m = /#s(\d+)/.exec(location.hash);
    if (m) na = Math.min(bilder.length - 1, Math.max(0, Number(m[1]) - 1));

    function visSteg(i) {
      var t = tilstand[i];
      t.steg.forEach(function (s, j) {
        var synlig = j < t.vist;
        if (synlig && s.classList.contains("steg-skjult")) { s.classList.remove("steg-skjult"); s.classList.add("steg-nytt"); }
        if (!synlig) { s.classList.add("steg-skjult"); s.classList.remove("steg-nytt"); }
      });
      $$("[data-vis-fra]", bilder[i]).forEach(function (f) {
        f.style.visibility = t.vist >= Number(f.dataset.visFra) ? "visible" : "hidden";
      });
    }
    function tegn() {
      bilder.forEach(function (b, i) { b.classList.toggle("aktiv", i === na); });
      $$("button", faner).forEach(function (f, i) { f.setAttribute("aria-current", i === na ? "true" : "false"); });
      prikker.innerHTML = "";
      bilder.forEach(function (b, i) { prikker.appendChild(el("span", { class: i < na ? "ferdig" : i === na ? "na" : "" })); });
      visSteg(na);
      var t = tilstand[na];
      tilbake.disabled = na === 0 && t.vist === 0;
      var sist = na === bilder.length - 1 && t.vist >= t.steg.length;
      fram.textContent = t.vist < t.steg.length ? "Neste steg →" : sist ? "Ferdig ✓" : "Neste →";
      if (history.replaceState) history.replaceState(null, "", "#s" + (na + 1));
    }
    function gaTil(i, vist) {
      na = i;
      tilstand[i].vist = vist === "alle" ? tilstand[i].steg.length : vist;
      tegn();
    }
    function neste() {
      var t = tilstand[na];
      if (t.vist < t.steg.length) { t.vist++; tegn(); }
      else if (na < bilder.length - 1) gaTil(na + 1, 0);
      else location.href = urlSide(ctx.kap, del.nr, "teori");
    }
    function forrige() {
      var t = tilstand[na];
      if (t.vist > 0) { t.vist--; tegn(); }
      else if (na > 0) gaTil(na - 1, "alle");
    }
    fram.addEventListener("click", neste);
    tilbake.addEventListener("click", forrige);
    document.addEventListener("keydown", function (e) {
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); neste(); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); forrige(); }
    });
    var til = el("button", { type: "button", class: "lenke-knapp", style: "font-size:0.8rem;min-height:0", tekst: "Nullstill «Uklart»-tellere", onclick: function () {
      bilder.forEach(function (b, i) { lager.sett("uklart:" + sti + ":" + i, 0); });
      $$(".uklart", tavle).forEach(function (k) { k.textContent = "Uklart for meg"; k.classList.remove("trykket"); });
    } });
    $(".instruks", bunn).appendChild(el("br"));
    $(".instruks", bunn).appendChild(til);
    tegn();
  }

  function bygUndre(boks) {
    var sek = Number(boks.dataset.sekunder || 30);
    var hintTekst = boks.dataset.hint;
    var klokke = el("span", { class: "klokke", "aria-live": "polite", tekst: "" });
    var hint = hintTekst ? el("div", { class: "undre-hint", html: "<b>Hint:</b> " + hintTekst }) : null;
    var timer = null;
    var start = el("button", { type: "button", class: "knapp lys", tekst: "Tenketid " + sek + " s" });
    start.addEventListener("click", function (e) {
      e.stopPropagation();
      if (timer) clearInterval(timer);
      var igjen = sek;
      function vis() { klokke.textContent = Math.floor(igjen / 60) + ":" + String(igjen % 60).padStart(2, "0"); }
      vis();
      timer = setInterval(function () {
        igjen--; vis();
        if (igjen === Math.floor(sek / 2) && hint) hint.classList.add("vis");
        if (igjen <= 0) { clearInterval(timer); timer = null; klokke.textContent = "Tida er ute – hva tror du?"; }
      }, 1000);
    });
    var rad = el("div", { class: "tenketid" }, [start, klokke]);
    if (hint) rad.appendChild(el("button", { type: "button", class: "lenke-knapp", tekst: "Vis hint", onclick: function (e) { e.stopPropagation(); hint.classList.add("vis"); } }));
    boks.appendChild(rad);
    if (hint) boks.appendChild(hint);
  }

  // ---------- Teori ----------
  function bygTeori() {
    $$(".eksempel").forEach(function (eks) {
      var steg = $$(".steg", eks);
      if (!steg.length) return;
      var vist = 0;
      var nesteK = el("button", { type: "button", class: "knapp kap", tekst: "Neste steg" });
      var alleK = el("button", { type: "button", class: "knapp lys", tekst: "Vis alle" });
      var nullK = el("button", { type: "button", class: "knapp lys", tekst: "Start på nytt" });
      function tegn() {
        steg.forEach(function (s, i) { s.classList.toggle("skjult-steg", i >= vist); });
        nesteK.disabled = vist >= steg.length;
        alleK.disabled = vist >= steg.length;
        nullK.disabled = vist === 0;
      }
      nesteK.addEventListener("click", function () { vist++; tegn(); });
      alleK.addEventListener("click", function () { vist = steg.length; tegn(); });
      nullK.addEventListener("click", function () { vist = 0; tegn(); });
      eks.appendChild(el("div", { class: "knapper" }, [nesteK, alleK, nullK]));
      tegn();
    });
    $$(".underveis, .vis-fasit").forEach(function (u) {
      var rad = el("div", { class: "knapper" });
      [["fasit", "Vis fasit"], ["losning", "Vis løsningsforslag"]].forEach(function (p) {
        var innhold = $(":scope > ." + p[0], u);
        if (!innhold) return;
        rad.appendChild(el("button", { type: "button", class: "knapp lys", tekst: p[1], "aria-expanded": "false", onclick: function () {
          var vis = innhold.classList.toggle("vis");
          this.setAttribute("aria-expanded", vis ? "true" : "false");
          this.textContent = (vis ? "Skjul " : "Vis ") + p[1].replace("Vis ", "");
        } }));
      });
      var forst = $(":scope > .fasit, :scope > .losning", u);
      u.insertBefore(rad, forst);
    });
  }

  // ---------- Oppgaver ----------
  function oppgaveTilstand(id) { return lager.hent("oppg:" + id, null) || { f: 0, h: 0, l: false, d: [], linjer: [] }; }
  function lagreTilstand(id, t) { lager.sett("oppg:" + id, t); }
  function beregnStatus(t, antallDeler) {
    var lost = antallDeler > 0 && t.d.filter(Boolean).length >= antallDeler;
    if (lost) return t.h > 0 || t.l ? "hint" : "egen";
    if (t.f > 0 || t.h > 0 || t.l || (t.linjer && t.linjer.length) || t.d.some(Boolean)) return "pabegynt";
    return "ikke";
  }
  function statusForDel(delNr) {
    var meta = lager.hent("meta", {});
    var totalt = 0, lost = 0;
    Object.keys(meta).forEach(function (id) {
      if (meta[id].del !== delNr) return;
      totalt++;
      var t = oppgaveTilstand(id);
      var s = beregnStatus(t, meta[id].deler);
      if (s === "hint" || s === "egen") lost++;
    });
    return { totalt: totalt, lost: lost };
  }

  var SEKSJONER = [
    ["lett", "Lett", "Grunnmur – alle skal få til disse."],
    ["middels", "Middels", "Fagarbeider – flere steg, enheter og tekst fra verkstedet."],
    ["vanskelig", "Vanskelig", "Mester – åpne oppgaver, vurdering og valg av metode."],
    ["verksted", "Verkstedoppgave", "Gjøres i verkstedet. Les HMS før du starter."],
    ["repetisjon", "Blandet repetisjon", "Fra tidligere kapitler."],
    ["eksamen", "Eksamensstil", "Slik kan det se ut på eksamen."]
  ];

  function bygOppgaveside(kapData) {
    var beholder = $("#oppgaver") || $("main");
    var liste = registrerteOppgaver ? registrerteOppgaver.oppgaver : [];
    var del = finnDel(kapData) || { nr: ctx.del, tittel: "" };
    var meta = lager.hent("meta", {});
    var kort = [];

    var linje = el("span");
    var teller = el("b", { tekst: "" });
    var topp = el("div", { class: "oppg-topp" }, [
      el("span", null, [teller]),
      el("div", { class: "framdrift-linje", "aria-hidden": "true" }, [linje]),
      el("a", { href: urlSide(ctx.kap, del.nr, "teori"), tekst: "Teori ↗" })
    ]);
    var filter = el("div", { class: "filter", role: "group", "aria-label": "Vis nivå" });
    var aktivtFilter = "alle";
    [["alle", "Alle"], ["lett", "Lett"], ["middels", "Middels"], ["vanskelig", "Vanskelig"]].forEach(function (f) {
      filter.appendChild(el("button", { type: "button", "data-f": f[0], "aria-pressed": f[0] === "alle" ? "true" : "false", tekst: f[1], onclick: function () {
        aktivtFilter = f[0];
        $$("button", filter).forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.f === f[0] ? "true" : "false"); });
        kort.forEach(function (k) { k.el.hidden = aktivtFilter !== "alle" && k.o.niva !== aktivtFilter; });
        $$(".oppg-seksjon", beholder).forEach(function (s) { s.hidden = !$$(".oppgave", s).some(function (o) { return !o.hidden; }); });
      } }));
    });
    var skjul = el("input", { type: "checkbox", onchange: function () { beholder.classList.toggle("skjul-lost", this.checked); } });
    filter.appendChild(el("label", null, [skjul, "Skjul løste"]));
    topp.appendChild(filter);
    beholder.appendChild(topp);
    var jobbMer = el("div", { class: "boks", hidden: true });
    beholder.appendChild(jobbMer);

    var nr = 0;
    SEKSJONER.forEach(function (sek) {
      var iSek = liste.filter(function (o) { return seksjonFor(o) === sek[0]; });
      if (!iSek.length) return;
      var s = el("section", { class: "oppg-seksjon" }, [
        el("h2", null, [sek[0] in NIVA ? el("span", { class: "prikk", style: "color:var(--kap);font-size:0.9rem", "aria-hidden": "true", tekst: NIVA[sek[0]].prikk }) : null, sek[1]]),
        el("p", { class: "ingress", style: "font-size:1rem;margin-top:0", tekst: sek[2] })
      ]);
      iSek.forEach(function (o) {
        nr++;
        var full = ctx.del + "-" + o.id;
        var deler = o.deler || [o];
        meta[full] = { del: ctx.del, kap: ctx.kap, nr: ctx.del + "." + nr, tittel: o.tittel || "", deler: deler.length, url: location.pathname + "#o-" + o.id, niva: o.niva };
        var k = bygOppgave(o, full, ctx.del + "." + nr, oppdaterTopp);
        kort.push({ el: k, o: o, id: full, deler: deler.length });
        s.appendChild(k);
      });
      beholder.appendChild(s);
    });
    lager.sett("meta", meta);

    function oppdaterTopp() {
      var lost = 0, egen = 0, svake = [];
      kort.forEach(function (k) {
        var t = oppgaveTilstand(k.id), st = beregnStatus(t, k.deler);
        if (st === "hint" || st === "egen") lost++;
        if (st === "egen") egen++;
        if (st === "pabegynt" && t.f >= 2) svake.push(k);
      });
      teller.textContent = lost + " av " + kort.length + " løst · " + egen + " uten hint";
      linje.style.width = (kort.length ? (100 * lost) / kort.length : 0) + "%";
      jobbMer.hidden = !svake.length;
      jobbMer.innerHTML = "<b>Dette bør du jobbe mer med:</b> ";
      svake.forEach(function (k, i) {
        if (i) jobbMer.appendChild(document.createTextNode(", "));
        jobbMer.appendChild(el("a", { href: "#" + k.el.id, tekst: $("h3", k.el).textContent }));
      });
    }
    oppdaterTopp();
    bygOppsummer();
    if (location.hash) { var mal = document.getElementById(location.hash.slice(1)); if (mal) setTimeout(function () { mal.scrollIntoView(); }, 50); }
  }

  function seksjonFor(o) {
    if (o.type === "verksted") return "verksted";
    if (o.type === "repetisjon") return "repetisjon";
    if (o.type === "eksamen") return "eksamen";
    return o.niva || "lett";
  }

  function bygOppgave(o, id, visNr, endret) {
    var t = oppgaveTilstand(id);
    var deler = o.deler || [{ svar: o.svar }];
    if (!t.d) t.d = [];
    var statusChip = el("span", { class: "status" });
    var art = el("article", { class: "oppgave", id: "o-" + o.id });
    var niva = NIVA[o.niva] || NIVA.lett;
    var hode = el("div", { class: "oppgave-hode" }, [
      el("h3", { tekst: "Oppgave " + visNr + (o.tittel ? " · " + o.tittel : "") }),
      el("span", { class: "niva", title: niva.tekst }, [el("span", { class: "prikk", tekst: niva.prikk }), niva.navn]),
      o.type === "verksted" ? el("span", { class: "merke v", tekst: "[" + (o.merke || "V") + "]" }) : null,
      o.type === "eksamen" ? el("span", { class: "merke", tekst: o.eksamensdel || "Del 2" }) : null,
      o.type === "repetisjon" && o.fra ? el("span", { class: "merke", tekst: "Fra " + o.fra }) : null,
      statusChip
    ]);
    art.appendChild(hode);
    if (o.tekst) art.appendChild(el("div", { class: "oppgave-tekst", html: o.tekst }));
    if (o.utstyr) art.appendChild(el("p", { class: "utstyr", html: o.utstyr }));
    if (o.hms) art.appendChild(el("p", { class: "hms", html: o.hms }));

    function lagre() { lagreTilstand(id, t); oppdater(); endret(); }
    function oppdater() {
      var s = beregnStatus(t, deler.length);
      art.dataset.status = s;
      statusChip.className = "status " + s;
      statusChip.textContent = STATUS[s];
      if (!t.forste && s !== "ikke") { t.forste = Date.now(); lagreTilstand(id, t); }
      if ((s === "hint" || s === "egen") && !t.lost) { t.lost = Date.now(); t.dag = idag(); lagreTilstand(id, t); }
      losKnapp.disabled = !(t.f >= 2 || s === "hint" || s === "egen" || t.l);
      losKnapp.title = losKnapp.disabled ? "Kommer etter to forsøk" : "";
    }

    // Løs steg for steg
    var stegVerdier = (o.steg || []).slice();
    deler.forEach(function (d) { if (d.svar && d.svar.verdi !== undefined) stegVerdier.push(d.svar); });
    if (o.stegForSteg !== false && stegVerdier.length && window.Sjekk) {
      var linjer = el("ol", { class: "steg-linjer" });
      var inn = el("input", { type: "text", inputmode: "text", autocomplete: "off", "aria-label": "Skriv ett regnesteg", placeholder: o.stegEksempel || "For eksempel 79,50 : 100 = 0,795" });
      var tilbake = el("p", { class: "tilbakemelding", "aria-live": "polite" });
      function tegnLinjer() {
        linjer.innerHTML = "";
        (t.linjer || []).forEach(function (l) {
          linjer.appendChild(el("li", { class: l.ok ? "ok" : "ikke" }, [el("span", { tekst: (l.ok ? "✓ " : "✗ ") + l.tekst }), el("span", { class: "merknad", tekst: l.melding })]));
        });
      }
      function sjekkLinje() {
        var r = window.Sjekk.sjekkSteg(inn.value, stegVerdier);
        tilbake.textContent = r.melding;
        tilbake.className = "tilbakemelding " + (r.ok ? "ok" : r.type === "enhet" ? "enhet" : "feil");
        if (r.type === "ugyldig") return;
        t.linjer = t.linjer || [];
        t.linjer.push({ tekst: inn.value, ok: r.ok, melding: r.ok ? "" : r.melding });
        inn.value = "";
        tegnLinjer(); lagre();
      }
      inn.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); sjekkLinje(); } });
      art.appendChild(el("div", { class: "stegboks" }, [
        el("h4", { tekst: "Løs steg for steg" }),
        el("p", { class: "forklar", tekst: "Skriv ett regnesteg per linje og trykk «Sjekk steg». Du kan skrive enheter (mm, kr, L …), bruke komma og · eller : for gange og dele." }),
        linjer,
        el("div", { class: "inn-rad" }, [
          inn,
          el("button", { type: "button", class: "knapp", tekst: "Sjekk steg", onclick: sjekkLinje }),
          el("button", { type: "button", class: "lenke-knapp", tekst: "Fjern siste", onclick: function () { (t.linjer || []).pop(); tegnLinjer(); lagre(); } }),
          el("button", { type: "button", class: "lenke-knapp", tekst: "Start på nytt", onclick: function () { t.linjer = []; tegnLinjer(); lagre(); tilbake.textContent = ""; } })
        ]),
        tilbake
      ]));
      tegnLinjer();
    }

    // Svarfelt per deloppgave
    deler.forEach(function (d, i) {
      var blokk = el("div", { class: "deloppgave" + (t.d[i] ? " lost" : "") });
      if (o.deler) blokk.appendChild(el("div", { html: "<span class='bokstav'>" + String.fromCharCode(97 + i) + ")</span>" + (d.tekst || "") }));
      var melding = el("p", { class: "tilbakemelding", "aria-live": "polite" });
      var svar = d.svar || {};
      if (svar.valg) {
        var rad = el("div", { class: "valg", role: "group" });
        svar.valg.forEach(function (v, j) {
          var riktig = typeof svar.riktig === "number" ? j === svar.riktig : v === svar.riktig;
          var b = el("button", { type: "button", html: v, onclick: function () {
            if (t.d[i]) return;
            if (riktig) { b.classList.add("riktig"); t.d[i] = true; blokk.classList.add("lost"); melding.textContent = svar.forklaring ? "Riktig! " + stripHtml(svar.forklaring) : "Riktig!"; melding.className = "tilbakemelding ok"; }
            else { b.classList.add("galt"); t.f++; melding.textContent = "Ikke riktig. Prøv igjen."; melding.className = "tilbakemelding feil"; }
            lagre();
          } });
          if (t.d[i] && riktig) b.classList.add("riktig");
          rad.appendChild(b);
        });
        blokk.appendChild(rad);
      } else if (svar.fritekst) {
        var ta = el("textarea", { "aria-label": "Ditt svar", rows: "3", style: "width:100%;border:1px solid #9aa6b4;border-radius:8px;padding:0.5rem" });
        ta.value = (t.tekst && t.tekst[i]) || "";
        ta.addEventListener("change", function () { t.tekst = t.tekst || []; t.tekst[i] = ta.value; lagre(); });
        var fasit = el("div", { class: "fasit", html: svar.fasit || "" });
        blokk.appendChild(ta);
        blokk.appendChild(el("div", { class: "knapper" }, [
          el("button", { type: "button", class: "knapp lys", tekst: "Sammenlign med fasit", onclick: function () { fasit.classList.add("vis"); t.f = Math.max(t.f, 1); lagre(); } }),
          el("button", { type: "button", class: "knapp", tekst: "Jeg hadde dette med", onclick: function () { if (!fasit.classList.contains("vis")) { melding.textContent = "Se på fasiten først."; melding.className = "tilbakemelding enhet"; return; } t.d[i] = true; blokk.classList.add("lost"); melding.textContent = "Bra!"; melding.className = "tilbakemelding ok"; lagre(); } })
        ]));
        blokk.appendChild(fasit);
      } else if (svar.verdi !== undefined) {
        var input = el("input", { type: "text", autocomplete: "off", "aria-label": "Svar" + (o.deler ? " " + String.fromCharCode(97 + i) : ""), placeholder: "Svar" + (svar.enhet ? " (" + svar.enhet + ")" : "") });
        if (t.d[i] && t.svar && t.svar[i]) input.value = t.svar[i];
        var sjekk = function () {
          var r = window.Sjekk.sjekkSvar(input.value, svar);
          melding.textContent = r.melding;
          melding.className = "tilbakemelding " + (r.ok ? "ok" : r.type === "enhet" ? "enhet" : "feil");
          if (r.type === "ugyldig") return;
          if (r.ok) { t.d[i] = true; t.svar = t.svar || []; t.svar[i] = input.value; blokk.classList.add("lost"); }
          else t.f++;
          lagre();
        };
        input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); sjekk(); } });
        blokk.appendChild(el("div", { class: "inn-rad" }, [input, el("button", { type: "button", class: "knapp", tekst: "Sjekk", onclick: sjekk })]));
        if (t.d[i]) { melding.textContent = "Løst."; melding.className = "tilbakemelding ok"; }
      }
      blokk.appendChild(melding);
      art.appendChild(blokk);
    });

    // Hint
    var hint = o.hint || [];
    var hintBoks = el("div");
    var hintKnapp = el("button", { type: "button", class: "lenke-knapp" });
    var hintEl = hint.map(function (h, i) { return el("div", { class: "hint-boks", hidden: true, html: "<b>Hint " + (i + 1) + ":</b> " + h }); });
    hintEl.forEach(function (h) { hintBoks.appendChild(h); });
    function tegnHint() {
      hintEl.forEach(function (h, i) { h.hidden = i >= t.h; });
      hintKnapp.hidden = t.h >= hint.length;
      hintKnapp.textContent = t.h === 0 ? "Hint 1" : "Vis neste hint";
    }
    hintKnapp.addEventListener("click", function () { t.h = Math.min(hint.length, t.h + 1); tegnHint(); lagre(); });
    // Løsningsforslag
    var losning = el("div", { class: "losning", html: o.losning || "" });
    var losKnapp = el("button", { type: "button", class: "lenke-knapp", tekst: "Vis løsningsforslag", onclick: function () {
      var vis = losning.classList.toggle("vis");
      this.textContent = vis ? "Skjul løsningsforslag" : "Vis løsningsforslag";
      if (vis && !t.l) { t.l = true; lagre(); }
    } });
    art.appendChild(hintBoks);
    var verktoy = el("div", { class: "knapper", style: "gap:1.25rem" }, [hint.length ? hintKnapp : null, o.losning ? losKnapp : null]);
    art.appendChild(verktoy);
    art.appendChild(losning);
    tegnHint();
    oppdater();
    return art;
  }
  function stripHtml(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent; }

  function bygOppsummer() {
    var dlg = el("dialog", { "aria-labelledby": "oppsummer-tittel" });
    var innhold = el("div");
    var logg = lager.hent("loggbok", []);
    var dag = idag();
    var dagens = logg.filter(function (l) { return l.dag === dag; })[0] || { dag: dag, a: "", b: "", c: "" };
    function felt(navn, etikett) {
      var ta = el("textarea", { rows: "2" });
      ta.value = dagens[navn] || "";
      ta.addEventListener("input", function () {
        dagens[navn] = ta.value;
        var alle = lager.hent("loggbok", []).filter(function (l) { return l.dag !== dag; });
        alle.push(dagens);
        lager.sett("loggbok", alle);
      });
      return el("label", null, [etikett, ta]);
    }
    dlg.appendChild(el("h2", { id: "oppsummer-tittel", tekst: "Oppsummer timen" }));
    dlg.appendChild(innhold);
    dlg.appendChild(el("div", { class: "loggbok" }, [
      el("h3", { tekst: "Loggbok" }),
      felt("a", "Dette fikk jeg til:"),
      felt("b", "Dette var vanskelig:"),
      felt("c", "Neste gang skal jeg …")
    ]));
    dlg.appendChild(el("div", { class: "knapper" }, [
      el("a", { class: "knapp lys", href: ROT + "framdrift.html", tekst: "Min framdrift" }),
      el("button", { type: "button", class: "knapp", tekst: "Lukk", onclick: function () { dlg.close(); } })
    ]));
    body.appendChild(dlg);
    var knapp = el("button", { type: "button", class: "knapp oppsummer-knapp", tekst: "Oppsummer timen", onclick: function () {
      var meta = lager.hent("meta", {});
      var lost = [], egen = 0, paa = [];
      Object.keys(meta).forEach(function (id) {
        var t = oppgaveTilstand(id), s = beregnStatus(t, meta[id].deler);
        if ((s === "hint" || s === "egen") && t.dag === dag) { lost.push(meta[id]); if (s === "egen") egen++; }
        if (s === "pabegynt") paa.push(meta[id]);
      });
      innhold.innerHTML = "";
      innhold.appendChild(el("p", { html: "I dag har du løst <b>" + lost.length + "</b> oppgaver, <b>" + egen + "</b> av dem på egen hånd." }));
      if (paa.length) innhold.appendChild(el("p", { html: "<b>Påbegynt, ikke løst:</b> " + paa.map(function (m) { return "Oppgave " + m.nr; }).join(", ") }));
      dlg.showModal();
    } });
    body.appendChild(knapp);
  }

  // ---------- Verkstedkort ----------
  function bygVerksted() {
    var sti = location.pathname;
    $$(".maleskjema").forEach(function (tab, ti) {
      $$("td.fyll", tab).forEach(function (td, i) {
        var nokkel = "male:" + sti + ":" + ti + ":" + i;
        var inn = el("input", { type: "text", "aria-label": "Måling", inputmode: "decimal" });
        inn.value = lager.hent(nokkel, "");
        inn.addEventListener("input", function () { lager.sett(nokkel, inn.value); });
        td.appendChild(inn);
      });
    });
    $$(".stjerner-liste").forEach(function (ul, ui) {
      var boks = el("div", { class: "stjerner-boks" });
      $$("li", ul).forEach(function (li, i) {
        var nokkel = "stjerner:" + sti + ":" + ui + ":" + i;
        var verdi = lager.hent(nokkel, 0);
        var rad = el("div", { class: "stjerner", role: "group", "aria-label": li.textContent });
        function tegn() { $$("button", rad).forEach(function (b, j) { b.classList.toggle("pa", j < verdi); b.setAttribute("aria-pressed", j < verdi ? "true" : "false"); }); }
        for (var j = 1; j <= 5; j++) {
          (function (n) {
            rad.appendChild(el("button", { type: "button", "aria-label": n + " av 5 stjerner", tekst: "★", onclick: function () { verdi = verdi === n ? 0 : n; lager.sett(nokkel, verdi); tegn(); } }));
          })(j);
        }
        tegn();
        boks.appendChild(el("div", { class: "stjerner-rad" }, [el("span", { html: li.innerHTML }), rad]));
      });
      ul.parentNode.replaceChild(boks, ul);
    });
    var hode = $(".verkstedkort .kort-hode");
    if (hode) hode.appendChild(el("button", { type: "button", class: "knapp lys skriv-ut", tekst: "Skriv ut A4", onclick: function () { window.print(); } }));
  }

  // ---------- Ukeplan ----------
  function bygUkeplan() {
    var tbody = $("#ukeplan-rader");
    if (!tbody) return;
    window.PLAN.uker.forEach(function (u) {
      var k = u[1] !== null ? planKap(u[1]) : null;
      var ferie = !u[3] && !u[4];
      var tr = el("tr", { class: ferie ? "ferie" : "" }, [
        el("td", { tekst: u[0] }),
        el("td", null, [k ? el("span", { class: "kap-flekk", style: "background:" + k.farge }) : null, k ? el("a", { href: ROT + "index.html#kap" + k.nr, tekst: String(k.nr) }) : null, (k ? " " : "") + u[2]]),
        el("td", { tekst: u[3] }),
        el("td", { tekst: u[4] }),
        el("td", { tekst: u[5] }),
        el("td", { tekst: u[6] })
      ]);
      tbody.appendChild(tr);
    });
    var kl = $("#kompetansemal");
    if (kl) window.PLAN.kompetansemal.forEach(function (m) { kl.appendChild(el("li", { html: "<b>" + m[0] + ":</b> " + m[1] })); });
    var sr = $("#spilleregler");
    if (sr) window.PLAN.spilleregler.forEach(function (r) { sr.appendChild(el("li", { tekst: r })); });
  }

  // ---------- Framdrift ----------
  function bygFramdrift() {
    var main = $("#framdrift");
    var meta = lager.hent("meta", {});
    var perDel = {};
    Object.keys(meta).forEach(function (id) { (perDel[meta[id].del] = perDel[meta[id].del] || []).push(id); });
    var delNr = Object.keys(perDel).sort(function (a, b) { return a.localeCompare(b, "nb", { numeric: true }); });
    var sum = { totalt: 0, egen: 0, hint: 0, pabegynt: 0 };
    var tab = el("table");
    tab.appendChild(el("thead", null, [el("tr", null, ["Delkapittel", "Oppgaver", "Løst på egen hånd", "Løst med hint", "Påbegynt"].map(function (h) { return el("th", { tekst: h }); }))]));
    var tb = el("tbody");
    var svake = [];
    delNr.forEach(function (d) {
      var c = { egen: 0, hint: 0, pabegynt: 0, ikke: 0 };
      perDel[d].forEach(function (id) {
        var t = oppgaveTilstand(id), s = beregnStatus(t, meta[id].deler);
        c[s]++;
        if (s === "pabegynt" && t.f >= 2) svake.push(meta[id]);
      });
      sum.totalt += perDel[d].length; sum.egen += c.egen; sum.hint += c.hint; sum.pabegynt += c.pabegynt;
      var m = meta[perDel[d][0]];
      tb.appendChild(el("tr", null, [
        el("td", null, [el("a", { href: m.url.split("#")[0], tekst: d })]),
        el("td", { tekst: String(perDel[d].length) }),
        el("td", { tekst: String(c.egen) }),
        el("td", { tekst: String(c.hint) }),
        el("td", { tekst: String(c.pabegynt) })
      ]));
    });
    tab.appendChild(tb);
    main.appendChild(el("p", { class: "ingress", html: sum.totalt ? "Du har løst <b>" + (sum.egen + sum.hint) + "</b> av " + sum.totalt + " oppgaver du har åpnet. <b>" + sum.egen + "</b> løste du uten hint." : "Du har ikke åpnet noen oppgavesider ennå på denne maskinen." }));
    if (sum.totalt) main.appendChild(el("div", { class: "tabell-rull" }, [tab]));
    if (svake.length) {
      main.appendChild(el("h2", { tekst: "Dette bør du jobbe mer med" }));
      var ul = el("ul");
      svake.forEach(function (m) { ul.appendChild(el("li", null, [el("a", { href: m.url, tekst: "Oppgave " + m.nr })])); });
      main.appendChild(ul);
    }
    var logg = lager.hent("loggbok", []);
    if (logg.length) {
      main.appendChild(el("h2", { tekst: "Loggboka mi" }));
      logg.slice().reverse().forEach(function (l) {
        main.appendChild(el("div", { class: "boks" }, [
          el("p", { class: "etikett", tekst: l.dag }),
          el("p", { html: "<b>Dette fikk jeg til:</b> " + esc(l.a) + "<br><b>Dette var vanskelig:</b> " + esc(l.b) + "<br><b>Neste gang skal jeg:</b> " + esc(l.c) })
        ]));
      });
    }
    main.appendChild(el("h2", { tekst: "Flytt framdriften" }));
    main.appendChild(el("p", { tekst: "Framdriften lagres bare i denne nettleseren. Kopier koden og lim den inn på en annen maskin for å ta med deg alt." }));
    var kode = el("textarea", { rows: "4", style: "width:100%;font-family:monospace;font-size:0.85rem", "aria-label": "Flyttekode" });
    var melding = el("p", { class: "tilbakemelding", "aria-live": "polite" });
    main.appendChild(kode);
    main.appendChild(el("div", { class: "knapper" }, [
      el("button", { type: "button", class: "knapp", tekst: "Lag flyttekode", onclick: function () {
        kode.value = btoa(unescape(encodeURIComponent(JSON.stringify(lager.alle()))));
        kode.select();
        melding.textContent = "Koden er laget. Kopier den (Ctrl/Cmd + C).";
        melding.className = "tilbakemelding ok";
      } }),
      el("button", { type: "button", class: "knapp lys", tekst: "Hent inn kode", onclick: function () {
        try {
          var data = JSON.parse(decodeURIComponent(escape(atob(kode.value.trim()))));
          Object.keys(data).forEach(function (k) { if (k.indexOf(LAGER) === 0) localStorage.setItem(k, data[k]); });
          location.reload();
        } catch (e) { melding.textContent = "Koden er ikke gyldig."; melding.className = "tilbakemelding feil"; }
      } }),
      el("button", { type: "button", class: "knapp lys", tekst: "Nullstill all framdrift", onclick: function () {
        if (!confirm("Slette all framdrift, loggbok og «Jeg kan»-farger på denne maskinen?")) return;
        Object.keys(lager.alle()).forEach(function (k) { localStorage.removeItem(k); });
        location.reload();
      } })
    ]));
    main.appendChild(melding);
  }
  function esc(s) { return String(s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- Oppstart ----------
  window.Bok = {
    oppgaver: function (data) { registrerteOppgaver = Array.isArray(data) ? { oppgaver: data } : data; },
    rot: ROT,
    lager: lager
  };

  if (!$('link[rel="icon"]')) document.head.appendChild(el("link", { rel: "icon", href: ROT + "assets/favicon.svg" }));
  lastCss("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap");
  lastCss(KATEX + "katex.min.css");
  var klar = Promise.all([
    lastSkript(ROT + "assets/js/plan.js"),
    lastSkript(ROT + "assets/js/sjekk.js"),
    lastSkript(KATEX + "katex.min.js").then(function () { return lastSkript(KATEX + "contrib/auto-render.min.js"); })
  ]);
  var domKlar = new Promise(function (ok) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ok); else ok();
  });

  Promise.all([klar, domKlar]).then(function () {
    if (ctx.kap !== null) settKapFarge(ctx.kap);
    body.classList.add("side-" + ctx.side);
    var kapLast = ctx.kap !== null ? hentKapittel(ctx.kap) : Promise.resolve(null);
    return kapLast.then(function (kapData) {
      if (ctx.side !== "tavle") bygTopp(kapData);
      if (ctx.side === "forside") return bygForside();
      if (ctx.side === "ukeplan") bygUkeplan();
      if (ctx.side === "framdrift") bygFramdrift();
      if (ctx.side === "kapittel") bygKapittelside(kapData);
      if (ctx.side === "tavle") bygTavle(kapData);
      if (ctx.side === "teori") { bygTeori(); bygBunnnav(kapData); }
      if (ctx.side === "oppgaver") { bygOppgaveside(kapData); bygBunnnav(kapData); }
      if (ctx.side === "verksted") { bygVerksted(); bygTeori(); bygBunnnav(kapData); }
    });
  }).then(function () { renderMatte(); }).catch(function (e) { console.error(e); renderMatte(); });
})();
