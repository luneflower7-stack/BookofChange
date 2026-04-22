import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { buildGuideHTML, GUIDE_LOCALES, HEXAGRAM_GUIDE_ENTRIES } from "../guide-content.mjs";

const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const indexHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");

assert.equal(HEXAGRAM_GUIDE_ENTRIES.length, 64, "expected 64 guide entries");
assert.equal(new Set(HEXAGRAM_GUIDE_ENTRIES.map((entry) => entry.number)).size, 64, "guide entry numbers must be unique");
assert(indexHtml.includes('id="nav-guide"'), "index.html is missing nav-guide");
assert(indexHtml.includes('id="guide-view"'), "index.html is missing guide-view");
assert(indexHtml.includes('id="lang-select"'), "index.html is missing lang-select");

for (const lang of Object.keys(GUIDE_LOCALES)) {
  const html = buildGuideHTML(lang);
  const cardCount = (html.match(/class="guide-card"/g) || []).length;
  assert.equal(cardCount, 64, `expected 64 guide cards for ${lang}`);
  assert(!html.includes("undefined"), `guide HTML contains undefined for ${lang}`);
  assert(!html.includes("null"), `guide HTML contains null for ${lang}`);
}

console.log("site verification passed");
console.log(`guide cards: ${HEXAGRAM_GUIDE_ENTRIES.length}`);
console.log(`languages checked: ${Object.keys(GUIDE_LOCALES).join(", ")}`);
