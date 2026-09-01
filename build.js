#!/usr/bin/env node
/**
 * Build script for the Feelochamp static site.
 *
 * Resolves the page templates in src/ into deployable HTML files.
 * Bootstrap 5 (assets/) is linked, not inlined, so it loads once and
 * is shared/cached across all pages.
 *
 * Usage:
 *   node build.js            -> relative links (index.html / spiele.html)
 *                                for GitHub Pages / any static host
 *   node build.js artifact   -> absolute claude.ai artifact links,
 *                                used only when publishing to Claude Artifacts
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const mode = process.argv[2] || "relative";

const ARTIFACT_HOME_URL = "https://claude.ai/code/artifact/37760093-ef79-47f2-8f58-d1f4152b59b4";
const ARTIFACT_SPIELE_URL = "https://claude.ai/code/artifact/6f9f5e88-003d-46ad-a0ec-49276b67a568";

const HOME_URL = mode === "artifact" ? ARTIFACT_HOME_URL : "index.html";
const SPIELE_URL = mode === "artifact" ? ARTIFACT_SPIELE_URL : "spiele.html";
// Not yet published as their own Claude Artifacts, so always relative.
const AUFSTEIGER_URL = "aufsteiger.html";
const START_URL = "start.html";

function build(templateFile, outFile, replacements) {
  let tpl = fs.readFileSync(path.join(dir, "src", templateFile), "utf8");
  for (const [token, value] of Object.entries(replacements)) {
    tpl = tpl.split(token).join(value);
  }
  fs.writeFileSync(path.join(dir, outFile), tpl, "utf8");
  console.log(`built ${outFile} (${tpl.length.toLocaleString()} bytes)`);
}

build("index.template.html", "index.html", { "{{SPIELE_URL}}": SPIELE_URL, "{{AUFSTEIGER_URL}}": AUFSTEIGER_URL, "{{START_URL}}": START_URL });
build("spiele.template.html", "spiele.html", { "{{HOME_URL}}": HOME_URL, "{{AUFSTEIGER_URL}}": AUFSTEIGER_URL });
build("aufsteiger.template.html", "aufsteiger.html", { "{{HOME_URL}}": HOME_URL, "{{SPIELE_URL}}": SPIELE_URL });
build("start.template.html", "start.html", { "{{SPIELE_URL}}": SPIELE_URL, "{{AUFSTEIGER_URL}}": AUFSTEIGER_URL });
