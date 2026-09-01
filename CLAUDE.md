# CLAUDE.md

Anweisungen für Claude Code in diesem Repo.

## Workflow-Regel: sofort committen & pushen

**Jede Änderung an einer Datei in diesem Repo wird sofort committed und gepusht — kein Sammeln mehrerer Änderungen in einem Commit, keine offenen/uncommitteten Stände am Ende einer Session.**

Konkret:

- Nach jedem abgeschlossenen Edit-Schritt (egal ob Template, `build.js`, README, o. ä.): `git add`, aussagekräftige Commit-Message, `git commit`, danach sofort `git push`.
- Gilt auch für kleine/triviale Änderungen (Typo-Fix, Copy-Anpassung, einzelne Farbe) — nicht auf "später sammeln" warten.
- Ausnahme: Der Nutzer sagt explizit, dass mehrere Schritte in einem Commit zusammengefasst werden sollen.
- Wenn `git push` fehlschlägt (z. B. Remote hat neue Commits): nicht stillschweigend überspringen, sondern rebasen/mergen und erneut pushen, oder den Nutzer informieren, falls das nicht sauber möglich ist.
- Commit-Messages kurz und auf Deutsch oder Englisch (konsistent mit vorherigen Commits), beschreiben **was** sich geändert hat, nicht nur "update".

## Build-Workflow

`index.html`, `spiele.html`, `aufsteiger.html` und `start.html` im Root sind **generierte** Dateien (siehe `build.js`), keine Quelldateien. Nach jeder Änderung an `src/*.template.html` vor dem Commit neu bauen:

```bash
node build.js
```

Quelltemplate **und** das neu gebaute HTML gehören in denselben Commit — nie nur die Quelle oder nur das Build-Ergebnis committen.

## Projektkontext

- Gestyltes Bootstrap-5-Redesign von [einseitensprung.at/cl/](https://einseitensprung.at/cl/), einer privaten Champions-League-Tipprunde ("Feelochamp", seit 2002).
- Reine Design-Demo ohne echtes Backend — Login/Tipp-Abgabe lösen nur Bestätigungs-Toasts aus.
- Keine echten Vereinswappen oder das Original-Hintergrundfoto verwenden (UEFA-Bildmaterial/Marken sind geschützt) — stattdessen eigene Initialen-Badges/Grafiken, siehe README.
- Bootstrap wird lokal vendored (`assets/bootstrap.min.css`, `assets/bootstrap.bundle.min.js`) und von jeder Seite per `<link>`/`<script src>` verlinkt (nicht inline eingebettet) — keine externen CDN-Requests, aber die Seiten sind dadurch nicht mehr einzeln eigenständig: `assets/` muss immer mitkopiert werden.
- Die Custom-Styles aller Seiten liegen gemeinsam in `assets/main.css` (kein `<style>`-Block mehr in den Templates). Jedes Template setzt eine eigene Klasse auf `<body>` (`page-home` / `page-spiele` / `page-aufsteiger` / `page-start`) — darüber sind die paar Regeln gescoped, die sich je Seite unterscheiden (`.content-card`, `.btn-kickoff`, `.crest`, Navbar-Feinheiten). Neue seitenspezifische Abweichungen bei geteilten Klassennamen genauso scopen, statt eine bestehende Regel einfach zu überschreiben.
- `start.html` ist das Dashboard, auf das der Demo-Login von `index.html` weiterleitet (kein echtes Backend — `index.html`s Login-Formular navigiert nach kurzem Bestätigungs-Toast einfach zu `start.html`). Die "Aktueller Champ"-Karte zeigt bewusst nur einen Spitznamen + Initialen-Avatar, kein echtes Foto (siehe Foto-/Wappen-Regel oben).
