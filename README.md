# Feelochamp

Ein gestyltes Bootstrap-5-Redesign der [Feelochamp](https://einseitensprung.at/cl/) Champions-League-Tippbewerb-Seite — eine private Tipprunde für Freunde, gegründet 2002.

## 🔗 Live-Vorschau

| Seite | GitHub Pages (öffentlich) | Claude-Artifact-Preview |
|---|---|---|
| Startseite / Login | **[einseitensprung.github.io/feelochamp](https://einseitensprung.github.io/feelochamp/)** | [Preview ansehen](https://claude.ai/code/artifact/37760093-ef79-47f2-8f58-d1f4152b59b4) |
| Spiele (Matchday-Tipps) | **[einseitensprung.github.io/feelochamp/spiele.html](https://einseitensprung.github.io/feelochamp/spiele.html)** | [Preview ansehen](https://claude.ai/code/artifact/6f9f5e88-003d-46ad-a0ec-49276b67a568) |

Die GitHub-Pages-Links sind die dauerhafte, öffentliche Vorschau (direkt aus diesem Repo deployed). Die Claude-Artifact-Links sind nur mit diesem Account aufrufbar. Alternativ lassen sich `index.html`, `spiele.html` und `aufsteiger.html` auch direkt lokal im Browser öffnen — sie laden Bootstrap und die gemeinsamen Styles aus dem `assets/`-Ordner, der dafür einfach neben den HTML-Dateien liegen bleiben muss.

## Was ist das

Ein visuelles Redesign der bestehenden ASP-Seite, umgesetzt mit Bootstrap 5 und der echten Champions-League-Farbwelt (Cyan-Blau statt des ursprünglichen Blau-Neon-Fotohintergrunds). Enthalten sind:

- **`index.html`** — Startseite mit Hero, Login-Karte und Sitemap-Kacheln (Tippen / Ergebnisse / Infos / Statistik)
- **`spiele.html`** — Unterseite mit der Spiele-Tabelle für Matchday 1: Suche, Matchday-Auswahl, 1/X/2-Tippfeldern
- **`aufsteiger.html`** — Unterseite "8 Fix Aufsteiger": Multiselect über alle 36 Ligaphase-Teams, max. 8 Auswahl

Alle Seiten sind reine Design-Demos ohne echtes Backend (Login, Tipp-Abgabe etc. lösen nur eine Bestätigungsmeldung aus).

> Die echten Vereinswappen und das Original-Hintergrundfoto (UEFA-Champions-League-Bildmaterial) sind bewusst **nicht** übernommen, da es sich um geschütztes/lizenziertes Material handelt. Stattdessen gibt es selbst gestaltete Grafiken bzw. Initialen-Badges in den jeweiligen Vereinsfarben.

## Projektstruktur

```
├── src/
│   ├── index.template.html      # Quelltext Startseite
│   ├── spiele.template.html     # Quelltext Spiele-Unterseite
│   └── aufsteiger.template.html # Quelltext 8-Fix-Aufsteiger-Unterseite
├── assets/
│   ├── bootstrap.min.css        # Bootstrap 5.3.3 (vendored, von allen Seiten verlinkt)
│   ├── bootstrap.bundle.min.js
│   └── main.css                 # gemeinsames Stylesheet aller drei Seiten
├── build.js                     # löst Templates zu index.html/spiele.html/aufsteiger.html auf
├── index.html                   # gebaute Startseite
├── spiele.html                  # gebaute Spiele-Seite
└── aufsteiger.html               # gebaute 8-Fix-Aufsteiger-Seite
```

## Build

Die `.template.html`-Dateien in `src/` sind die eigentlichen Quelldateien. `index.html`, `spiele.html` und `aufsteiger.html` im Root sind das Build-Ergebnis (nur Seiten-Links aufgelöst) und werden direkt ausgeliefert/committed. Bootstrap und das gemeinsame Stylesheet werden dabei **nicht** inline eingebettet, sondern per `<link>`/`<script src>` aus `assets/bootstrap.min.css`, `assets/bootstrap.bundle.min.js` und `assets/main.css` geladen — einmal im Browser-Cache, für alle drei Seiten gemeinsam.

`assets/main.css` fasst die früher pro Seite duplizierten `<style>`-Blöcke zusammen. Ein paar Klassen sehen je Seite leicht anders aus (z. B. `.content-card`-Abstand, `.btn-kickoff`-Padding, `.crest`-Größe) — diese Regeln sind unter `body.page-home` / `body.page-spiele` / `body.page-aufsteiger` gescoped, damit sich am Ergebnis nichts ändert. Jedes Template setzt die passende Klasse selbst auf sein `<body>`.

Nach jeder Änderung an `src/*.template.html` neu bauen:

```bash
node build.js
```

Für den Claude-Artifact-Export (absolute `claude.ai`-Links statt relativer Seiten-Links):

```bash
node build.js artifact
```

## Tech-Stack

- Bootstrap 5.3.3 (vendored in `assets/`, lokal verlinkt statt CDN — keine externen Requests)
- Vanilla JS (Countdown, Tabellen-Suche, Bootstrap-Komponenten)
- Google Fonts: Bebas Neue, Inter, JetBrains Mono
