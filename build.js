#!/usr/bin/env node
/**
 * Build script for the Feelochamp static site.
 *
 * Merges the page templates in src/ with the vendored Bootstrap 5
 * bundle (vendor/) into self-contained, deployable HTML files.
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

const css = fs.readFileSync(path.join(dir, "vendor/bootstrap.min.css"), "utf8");
const js = fs.readFileSync(path.join(dir, "vendor/bootstrap.bundle.min.js"), "utf8");

function build(templateFile, outFile, replacements) {
  let tpl = fs.readFileSync(path.join(dir, "src", templateFile), "utf8");
  tpl = tpl
    .replace("/*__BOOTSTRAP_CSS__*/", () => css)
    .replace("/*__BOOTSTRAP_JS__*/", () => js);
  for (const [token, value] of Object.entries(replacements)) {
    tpl = tpl.split(token).join(value);
  }
  fs.writeFileSync(path.join(dir, outFile), tpl, "utf8");
  console.log(`built ${outFile} (${tpl.length.toLocaleString()} bytes)`);
}

build("index.template.html", "index.html", { "{{SPIELE_URL}}": SPIELE_URL });
build("spiele.template.html", "spiele.html", { "{{HOME_URL}}": HOME_URL });
