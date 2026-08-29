# Feelochamp

Ein gestyltes Bootstrap-5-Redesign der [Feelochamp](https://einseitensprung.at/cl/) Champions-League-Tippbewerb-Seite — eine private Tipprunde für Freunde, gegründet 2002.

## 🔗 Live-Vorschau

| Seite | GitHub Pages (öffentlich) | Claude-Artifact-Preview |
|---|---|---|
| Startseite / Login | **[einseitensprung.github.io/feelochamp](https://einseitensprung.github.io/feelochamp/)** | [Preview ansehen](https://claude.ai/code/artifact/37760093-ef79-47f2-8f58-d1f4152b59b4) |
| Spiele (Matchday-Tipps) | **[einseitensprung.github.io/feelochamp/spiele.html](https://einseitensprung.github.io/feelochamp/spiele.html)** | [Preview ansehen](https://claude.ai/code/artifact/6f9f5e88-003d-46ad-a0ec-49276b67a568) |

Die GitHub-Pages-Links sind die dauerhafte, öffentliche Vorschau (direkt aus diesem Repo deployed). Die Claude-Artifact-Links sind nur mit diesem Account aufrufbar. Alternativ lässt sich `index.html` bzw. `spiele.html` auch direkt lokal im Browser öffnen — beide Dateien sind vollständig eigenständig (Bootstrap ist inline eingebettet, kein Build-Schritt nötig zum Ansehen).

## Was ist das

Ein visuelles Redesign der bestehenden ASP-Seite, umgesetzt mit Bootstrap 5 und der echten Champions-League-Farbwelt (Cyan-Blau statt des ursprünglichen Blau-Neon-Fotohintergrunds). Enthalten sind:

- **`index.html`** — Startseite mit Hero, Login-Karte und Sitemap-Kacheln (Tippen / Ergebnisse / Infos / Statistik)
- **`spiele.html`** — Unterseite mit der Spiele-Tabelle für Matchday 1: Suche, Matchday-Auswahl, 1/X/2-Tippfeldern

Beide Seiten sind reine Design-Demos ohne echtes Backend (Login, Tipp-Abgabe etc. lösen nur eine Bestätigungsmeldung aus).

> Die echten Vereinswappen und das Original-Hintergrundfoto (UEFA-Champions-League-Bildmaterial) sind bewusst **nicht** übernommen, da es sich um geschütztes/lizenziertes Material handelt. Stattdessen gibt es selbst gestaltete Grafiken bzw. Initialen-Badges in den jeweiligen Vereinsfarben.

## Projektstruktur

```
├── src/
│   ├── index.template.html    # Quelltext Startseite (ohne Bootstrap-Inline)
│   └── spiele.template.html   # Quelltext Spiele-Unterseite
├── vendor/
│   ├── bootstrap.min.css      # Bootstrap 5.3.3 (vendored)
│   └── bootstrap.bundle.min.js
├── build.js                   # fügt Templates + Bootstrap zu index.html/spiele.html zusammen
├── index.html                 # gebaute, eigenständige Startseite
└── spiele.html                # gebaute, eigenständige Spiele-Seite
```

## Build

Die `.template.html`-Dateien in `src/` sind die eigentlichen Quelldateien. `index.html` und `spiele.html` im Root sind das Build-Ergebnis (Bootstrap inline eingebettet, Links aufgelöst) und werden direkt ausgeliefert/committed.

Nach jeder Änderung an `src/*.template.html` neu bauen:

```bash
node build.js
```

Für den Claude-Artifact-Export (absolute `claude.ai`-Links statt relativer Seiten-Links):

```bash
node build.js artifact
```

## Tech-Stack

- Bootstrap 5.3.3 (inline vendored, keine externen Requests)
- Vanilla JS (Countdown, Tabellen-Suche, Bootstrap-Komponenten)
- Google Fonts: Bebas Neue, Inter, JetBrains Mono
