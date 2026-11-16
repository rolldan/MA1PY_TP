(function () {
  "use strict";

  var statisk = document.getElementById("inn-statisk");
  var skjema = document.getElementById("inn-skjema");
  var feil = document.getElementById("inn-feil");

  function felt(navn, etikett, type, auto) {
    var label = document.createElement("label");
    label.textContent = etikett + " ";
    var input = document.createElement("input");
    input.name = navn;
    input.type = type;
    input.required = true;
    input.autocomplete = auto;
    if (type === "password") { input.minLength = 8; input.maxLength = 200; }
    if (navn === "brukernavn") input.maxLength = 40;
    if (navn === "navn") input.maxLength = 80;
    label.appendChild(input);
    return label;
  }

  function melding(tekst, ok) {
    feil.textContent = tekst || "";
    feil.className = "tilbakemelding" + (tekst ? (ok ? " ok" : " feil") : "");
  }

  function tryggSti(s) {
    if (!s || s.charAt(0) !== "/" || s.charAt(1) === "/" || s.charAt(1) === "\\") return "";
    if (s.indexOf("\\") !== -1 || /[\u0000-\u001f]/.test(s)) return "";
    try {
      var u = new URL(s, location.origin);
      if (u.origin !== location.origin) return "";
      return u.pathname + u.search + u.hash;
    } catch (e) { return ""; }
  }

  function etterInnlogging(rolle, oppsett) {
    if (oppsett && rolle === "admin") {
      location.href = "admin.html";
      return;
    }
    var neste = tryggSti(new URLSearchParams(location.search).get("neste"));
    if (neste && neste.indexOf("/innlogging.html") !== 0 && neste.indexOf("/admin.html") !== 0) {
      location.href = neste;
      return;
    }
    location.href = rolle === "admin" ? "admin.html" : "index.html";
  }

  function bygg(oppsett) {
    statisk.hidden = true;
    skjema.hidden = false;
    skjema.textContent = "";
    var form = document.createElement("form");
    form.className = "skjema";
    form.autocomplete = "on";
    form.noValidate = true;
    var intro = document.createElement("p");
    if (oppsett) {
      intro.textContent = "Det finnes ingen kontoer ennå. Den første kontoen blir lærerkontoen. Etterpå kan bare læreren opprette elever.";
      form.appendChild(felt("navn", "Navn", "text", "name"));
      form.appendChild(felt("brukernavn", "Brukernavn", "text", "username"));
      form.appendChild(felt("passord", "Passord", "password", "new-password"));
      form.appendChild(felt("igjen", "Passord en gang til", "password", "new-password"));
    } else {
      intro.textContent = "Logg inn med brukernavnet og passordet du har fått.";
      form.appendChild(felt("brukernavn", "Brukernavn", "text", "username"));
      form.appendChild(felt("passord", "Passord", "password", "current-password"));
    }
    var knapp = document.createElement("button");
    knapp.className = "knapp";
    knapp.type = "submit";
    knapp.textContent = oppsett ? "Lag lærerkonto" : "Logg inn";
    form.appendChild(knapp);
    skjema.appendChild(intro);
    skjema.appendChild(form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var passord = String(data.get("passord") || "");
      if (oppsett && passord !== String(data.get("igjen") || "")) {
        melding("Passordene er ikke like.");
        return;
      }
      if (passord.length < 8) {
        melding("Passordet må ha minst 8 tegn.");
        return;
      }
      knapp.disabled = true;
      melding("");
      var kropp = oppsett
        ? { navn: String(data.get("navn") || ""), brukernavn: String(data.get("brukernavn") || ""), passord: passord }
        : { brukernavn: String(data.get("brukernavn") || ""), passord: passord };
      fetch(oppsett ? "api/oppsett" : "api/innlogging", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(kropp)
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, status: r.status, d: d }; });
      }).then(function (sv) {
        if (!sv.ok) {
          melding(sv.d.feil || "Innloggingen gikk ikke.");
          knapp.disabled = false;
          return;
        }
        var passordfelt = form.querySelectorAll('input[type="password"]');
        for (var i = 0; i < passordfelt.length; i++) passordfelt[i].value = "";
        etterInnlogging(sv.d.rolle, oppsett);
      }).catch(function () {
        melding("Fikk ikke kontakt med serveren.");
        knapp.disabled = false;
      });
    });
  }

  fetch("api/tilstand", { credentials: "same-origin", headers: { accept: "application/json" } })
    .then(function (r) {
      var type = r.headers.get("content-type") || "";
      if (!r.ok || type.indexOf("application/json") === -1) return null;
      return r.json();
    })
    .then(function (t) {
      if (!t) return;
      if (t.innlogget) {
        location.replace(t.rolle === "admin" ? "admin.html" : "index.html");
        return;
      }
      bygg(!!t.trengerOppsett);
    })
    .catch(function () {});
})();
