(function () {
  "use strict";

  var uten = document.getElementById("admin-uten-api");
  var verktoy = document.getElementById("admin-verktoy");
  var live = document.getElementById("admin-live");
  var kontoer = document.getElementById("admin-kontoer");
  var melding = document.getElementById("admin-melding");
  var redigerer = false;
  var startet = false;

  function el(tag, attr, tekst) {
    var e = document.createElement(tag);
    if (attr) Object.keys(attr).forEach(function (k) { if (attr[k] !== null && attr[k] !== undefined) e.setAttribute(k, attr[k]); });
    if (tekst !== undefined && tekst !== null) e.textContent = tekst;
    return e;
  }

  function si(tekst, ok) {
    melding.textContent = tekst || "";
    melding.className = "tilbakemelding" + (tekst ? (ok ? " ok" : " feil") : "");
  }

  function siden(iso) {
    if (!iso) return "ikke sett";
    var s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
    if (!isFinite(s)) return "ikke sett";
    if (s < 30) return "nå";
    if (s < 60) return "for under et minutt siden";
    var min = Math.round(s / 60);
    if (min < 60) return "for " + min + (min === 1 ? " minutt" : " minutter") + " siden";
    var timer = Math.round(min / 60);
    if (timer < 48) return "for " + timer + (timer === 1 ? " time" : " timer") + " siden";
    var dager = Math.round(timer / 24);
    return "for " + dager + (dager === 1 ? " dag" : " dager") + " siden";
  }

  function framdriftTekst(f) {
    f = f || {};
    return (f.egen || 0) + " løst på egen hånd · " + (f.hint || 0) + " løst med hint · " + (f.pabegynt || 0) + " påbegynt · " + (f.ikke || 0) + " ikke prøvd";
  }

  function jegKanRad(f) {
    var rad = el("div", { class: "farge-rad" });
    [["rod", "rød"], ["gul", "gul"], ["gronn", "grønn"]].forEach(function (par) {
      var s = el("span");
      s.appendChild(el("span", { class: "farge-prikk " + par[0] }));
      s.appendChild(document.createTextNode((f[par[0]] || 0) + " " + par[1]));
      rad.appendChild(s);
    });
    return rad;
  }

  function tryggSti(sti) {
    if (!sti || sti.charAt(0) !== "/" || sti.charAt(1) === "/" || sti.indexOf("\\") !== -1 || sti.indexOf("..") !== -1) return "";
    var utenHash = sti.split("#")[0].split("?")[0];
    if (!/^\/[A-Za-z0-9._~/%+-]*$/.test(utenHash)) return "";
    return sti;
  }

  function tegnLive(elever) {
    live.textContent = "";
    var inne = elever.filter(function (e) { return e.inne; });
    if (!inne.length) {
      live.appendChild(el("p", null, "Ingen elever er inne nå."));
      return;
    }
    inne.forEach(function (elev) {
      var kort = el("article", { class: "live-kort inne" });
      kort.appendChild(el("p", { class: "inne-merke" }, "Inne nå"));
      kort.appendChild(el("h3", null, elev.navn));
      kort.appendChild(el("p", null, elev.tittel || "Uten tittel"));
      var sti = tryggSti(elev.sti);
      if (sti) kort.appendChild(el("a", { class: "sidesti", href: sti }, elev.sti));
      else if (elev.sti) kort.appendChild(el("p", { class: "sidesti" }, elev.sti));
      kort.appendChild(el("p", null, framdriftTekst(elev.framdrift)));
      kort.appendChild(el("p", null, "«Jeg kan»"));
      kort.appendChild(jegKanRad(elev.framdrift || {}));
      live.appendChild(kort);
    });
  }

  function tegnKontoer(elever) {
    kontoer.textContent = "";
    if (!elever.length) {
      kontoer.appendChild(el("p", null, "Ingen elever er opprettet ennå."));
      return;
    }
    elever.forEach(function (elev) {
      var rad = el("article", { class: "konto-rad" });
      rad.appendChild(el("h3", null, elev.navn));
      rad.appendChild(el("p", { class: "etikett" }, elev.brukernavn + (elev.aktiv ? "" : " · slått av")));
      var status = el("p");
      status.textContent = elev.inne ? "Inne nå" : "Ikke inne";
      if (elev.tittel) status.textContent += " · " + elev.tittel;
      status.textContent += " · " + siden(elev.sett);
      rad.appendChild(status);
      rad.appendChild(el("p", null, framdriftTekst(elev.framdrift)));
      rad.appendChild(jegKanRad(elev.framdrift || {}));

      var navnRad = el("div", { class: "mini" });
      var navn = el("input", { type: "text", value: elev.navn, "aria-label": "Nytt navn for " + elev.navn, maxlength: "80" });
      var lagreNavn = el("button", { type: "button", class: "knapp lys" }, "Lagre navn");
      lagreNavn.addEventListener("click", function () { endre(elev.id, { navn: navn.value }, "Navnet er endret."); });
      navnRad.appendChild(navn);
      navnRad.appendChild(lagreNavn);

      var passRad = el("div", { class: "mini" });
      var pass = el("input", { type: "password", autocomplete: "new-password", "aria-label": "Nytt passord for " + elev.navn, minlength: "8", maxlength: "200" });
      var lagrePass = el("button", { type: "button", class: "knapp lys" }, "Sett nytt passord");
      lagrePass.addEventListener("click", function () {
        if (pass.value.length < 8) { si("Passordet må ha minst 8 tegn."); return; }
        kall("POST", "api/admin/elever/" + elev.id + "/passord", { passord: pass.value }).then(function (sv) {
          if (!sv.ok) { si(sv.d.feil || "Kunne ikke sette nytt passord."); return; }
          pass.value = "";
          si("Nytt passord er satt. Det vises ikke igjen.", true);
          redigerer = false;
          hent();
        });
      });
      passRad.appendChild(pass);
      passRad.appendChild(lagrePass);

      var knapper = el("div", { class: "mini" });
      var aktiv = el("button", { type: "button", class: "knapp lys" }, elev.aktiv ? "Slå av" : "Slå på");
      aktiv.addEventListener("click", function () {
        endre(elev.id, { aktiv: !elev.aktiv }, elev.aktiv ? "Kontoen er slått av." : "Kontoen er slått på.");
      });
      var slett = el("button", { type: "button", class: "knapp fare" }, "Slett");
      slett.addEventListener("click", function () {
        if (!confirm("Slette eleven " + elev.navn + "? Framdriften på serveren blir borte.")) return;
        kall("DELETE", "api/admin/elever/" + elev.id).then(function (sv) {
          if (!sv.ok) { si(sv.d.feil || "Kunne ikke slette eleven."); return; }
          si("Eleven er slettet.", true);
          redigerer = false;
          hent();
        });
      });
      knapper.appendChild(aktiv);
      knapper.appendChild(slett);
      rad.appendChild(navnRad);
      rad.appendChild(passRad);
      rad.appendChild(knapper);
      kontoer.appendChild(rad);
    });
  }

  function kall(metode, sti, kropp) {
    return fetch(sti, {
      method: metode,
      credentials: "same-origin",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: kropp ? JSON.stringify(kropp) : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, status: r.status, d: d }; });
    }).catch(function () { return { ok: false, status: 0, d: { feil: "Fikk ikke kontakt med serveren." } }; });
  }

  function endre(id, kropp, okTekst) {
    kall("PATCH", "api/admin/elever/" + id, kropp).then(function (sv) {
      if (!sv.ok) { si(sv.d.feil || "Kunne ikke endre eleven."); return; }
      si(okTekst, true);
      redigerer = false;
      hent();
    });
  }

  function hent() {
    return kall("GET", "api/admin/oversikt").then(function (sv) {
      if (sv.status === 401) { location.href = "innlogging.html"; return; }
      if (sv.status === 403) { location.href = "index.html"; return; }
      if (!sv.ok) { si("Fikk ikke hentet elevene. Prøver igjen."); return; }
      var elever = sv.d.elever || [];
      tegnLive(elever);
      if (!redigerer) tegnKontoer(elever);
    });
  }

  document.getElementById("ny-elev").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target;
    var data = new FormData(form);
    var passord = String(data.get("passord") || "");
    if (!String(data.get("navn") || "").trim() || !String(data.get("brukernavn") || "").trim() || passord.length < 8) {
      si("Skriv navn, brukernavn og et passord på minst 8 tegn.");
      return;
    }
    var knapp = form.querySelector("button");
    knapp.disabled = true;
    kall("POST", "api/admin/elever", {
      navn: String(data.get("navn") || ""),
      brukernavn: String(data.get("brukernavn") || ""),
      passord: passord
    }).then(function (sv) {
      knapp.disabled = false;
      if (!sv.ok) { si(sv.d.feil || "Kunne ikke opprette eleven."); return; }
      form.reset();
      si("Eleven er opprettet. Passordet vises ikke igjen.", true);
      redigerer = false;
      hent();
    });
  });

  kontoer.addEventListener("focusin", function () { redigerer = true; });
  kontoer.addEventListener("focusout", function () {
    setTimeout(function () {
      if (!kontoer.contains(document.activeElement)) redigerer = false;
    }, 200);
  });

  function start() {
    if (startet) return;
    startet = true;
    verktoy.hidden = false;
    uten.hidden = true;
    hent();
    setInterval(function () { if (!document.hidden) hent(); }, 4000);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) hent(); });
  }

  fetch("api/tilstand", { credentials: "same-origin", headers: { accept: "application/json" } })
    .then(function (r) {
      var type = r.headers.get("content-type") || "";
      if (!r.ok || type.indexOf("application/json") === -1) return null;
      return r.json();
    })
    .then(function (t) {
      if (!t) return;
      if (!t.innlogget) { location.href = "innlogging.html"; return; }
      if (t.rolle !== "admin") { location.href = "index.html"; return; }
      start();
    })
    .catch(function () {});
})();
