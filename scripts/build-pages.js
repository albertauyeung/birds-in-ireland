#!/usr/bin/env node
/* Generate static per-bird HTML pages and an updated sitemap.xml.
 *
 * Each bird gets a crawlable page at /birds/<id>.html with full meta tags
 * (canonical, OG, Twitter, JSON-LD Animal) and a server-rendered body so
 * search engines see content without running JS. The SPA bundle is loaded
 * on the page and re-renders the detail view on top once JS is available.
 *
 * Run: node scripts/build-pages.js
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE_ORIGIN = "https://albertauyeung.github.io";
const SITE_BASE = "/birds-in-ireland";
const SITE_URL = SITE_ORIGIN + SITE_BASE + "/";

const SUPPORTED_LANGS = ["en", "zh-Hant", "zh-Hans", "yue", "fr", "es"];

function loadModule(file) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window;
}

const { BIRDS } = loadModule("js/birds.js");
const { I18N } = loadModule("js/i18n.js");

if (!Array.isArray(BIRDS) || !BIRDS.length) {
  console.error("Could not load BIRDS from js/birds.js");
  process.exit(1);
}

function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s) { return escapeHtml(s); }
function escapeJsonStr(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function trim(s, n) {
  if (!s) return "";
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

const SIZE_LABEL_EN = { small: "Small", medium: "Medium", large: "Large" };

function birdPageUrl(birdId) {
  return SITE_ORIGIN + SITE_BASE + "/birds/" + birdId + ".html";
}

function renderBirdPage(bird) {
  const name = bird.names.en;
  const otherNames = SUPPORTED_LANGS
    .filter((l) => l !== "en" && bird.names[l] && bird.names[l] !== name)
    .map((l) => bird.names[l]);

  const descEn = bird.description.en;
  const metaDesc = trim(descEn, 158);
  const title = `${name} (${bird.latin}) — Birds in Ireland`;
  const canonical = birdPageUrl(bird.id);
  const sizeLabel = SIZE_LABEL_EN[bird.sizeCategory] || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${name} — Birds in Ireland`,
    "url": canonical,
    "inLanguage": "en",
    "isFamilyFriendly": true,
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "children aged 5-12"
    },
    "about": {
      "@type": "Thing",
      "additionalType": "https://schema.org/Animal",
      "name": name,
      "alternateName": otherNames,
      "description": descEn,
      "identifier": bird.latin,
      "sameAs": `https://en.wikipedia.org/wiki/${bird.wiki}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Birds in Ireland",
      "url": SITE_URL
    }
  };

  const whereList = (bird.where || [])
    .map((w) => `        <li>${escapeHtml(w)}</li>`)
    .join("\n");

  const otherNamesBlock = otherNames.length
    ? `      <p class="other-names">${otherNames.map(escapeHtml).join(" · ")}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(metaDesc)}" />
  <meta name="author" content="Birds in Ireland" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="en" href="${escapeAttr(canonical)}" />
  <link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${escapeAttr(name + " — Birds in Ireland")}" />
  <meta property="og:description" content="${escapeAttr(metaDesc)}" />
  <meta property="og:site_name" content="Birds in Ireland" />
  <meta property="og:locale" content="en_IE" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(name + " — Birds in Ireland")}" />
  <meta name="twitter:description" content="${escapeAttr(metaDesc)}" />

  <link rel="stylesheet" href="../css/styles.css" />
  <link rel="preconnect" href="https://en.wikipedia.org" />
  <link rel="preconnect" href="https://upload.wikimedia.org" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🐦%3C/text%3E%3C/svg%3E" />

  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>

  <script defer src="https://cloud.umami.is/script.js" data-website-id="0c30afdf-7301-47b0-8a70-24b0a10719ca"></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../" aria-label="Home">
      <span class="brand-emoji" aria-hidden="true">🐦</span>
      <span class="brand-text" data-i18n="appTitle">Birds in Ireland</span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="../" data-nav="gallery" data-i18n="navBirds">Birds</a>
      <a href="../#/quiz" data-nav="quiz" data-i18n="navQuiz">Quiz</a>
      <a href="../#/spots" data-nav="spots" data-i18n="navSpots">Where to spot</a>
      <a href="../#/about" data-nav="about" data-i18n="navAbout">About</a>
    </nav>
    <div class="lang-picker">
      <label for="lang-select" class="visually-hidden" data-i18n="chooseLanguage">Choose language</label>
      <select id="lang-select" aria-label="Language">
        <option value="en">English</option>
        <option value="zh-Hant">華文（繁體）</option>
        <option value="zh-Hans">华文 (简体)</option>
        <option value="yue">粵語</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  </header>

  <main id="app">
    <section class="view view-detail" data-view="detail">
      <a class="btn btn-back" href="../" data-action="back">
        <span aria-hidden="true">←</span> <span data-i18n="back">Back</span>
      </a>
      <article id="bird-detail" class="bird-detail">
        <div>
          <div class="photo skeleton"><img alt="${escapeAttr(name)}" loading="lazy" /></div>
          <p class="photo-credit">Photo by <a href="https://en.wikipedia.org/wiki/${escapeAttr(bird.wiki)}" target="_blank" rel="noopener" class="src-link">Wikipedia</a> · sourced from Wikimedia Commons</p>
        </div>
        <div>
          <h1 style="border-bottom: 4px solid ${escapeAttr(bird.color)}; padding-bottom: 0.3rem; display:inline-block;">${escapeHtml(name)}</h1>
${otherNamesBlock}
          <p class="latin">${escapeHtml(bird.latin)}</p>
          <p class="description">${escapeHtml(descEn)}</p>
          <div class="facts">
            <div class="fact">
              <div class="fact-label">Size</div>
              <div>${escapeHtml(sizeLabel)} · ${bird.sizeCm} cm</div>
            </div>
            <div class="fact">
              <div class="fact-label">Latin name</div>
              <div><em>${escapeHtml(bird.latin)}</em></div>
            </div>
          </div>
          <div class="where">
            <div class="fact-label" style="color:#b35a00;font-weight:800;font-size:0.8rem;text-transform:uppercase;">Where to spot</div>
            <ul>
${whereList}
            </ul>
          </div>
          <div class="actions">
            <a class="learn-more" href="https://en.wikipedia.org/wiki/${escapeAttr(bird.wiki)}" target="_blank" rel="noopener">Learn more on Wikipedia →</a>
          </div>
        </div>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>
      <span data-i18n="footerCredit">Photos via Wikimedia Commons. Bird info adapted from BirdWatch Ireland &amp; Wikipedia.</span>
    </p>
  </footer>

  <script src="../js/i18n.js"></script>
  <script src="../js/birds.js"></script>
  <script src="../js/app.js"></script>
</body>
</html>
`;
}

function buildSitemap(birds) {
  const urls = [
    { loc: SITE_URL, priority: "1.0", changefreq: "monthly" },
    { loc: SITE_URL + "#/spots", priority: "0.8", changefreq: "monthly" },
    { loc: SITE_URL + "#/quiz", priority: "0.6", changefreq: "monthly" },
    { loc: SITE_URL + "#/about", priority: "0.4", changefreq: "yearly" },
    ...birds.map((b) => ({
      loc: birdPageUrl(b.id),
      priority: "0.7",
      changefreq: "monthly"
    }))
  ];

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function main() {
  const outDir = path.join(ROOT, "birds");
  fs.mkdirSync(outDir, { recursive: true });

  let written = 0;
  for (const bird of BIRDS) {
    const html = renderBirdPage(bird);
    fs.writeFileSync(path.join(outDir, bird.id + ".html"), html);
    written++;
  }

  const sitemap = buildSitemap(BIRDS);
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

  console.log(`Wrote ${written} bird pages to birds/ and updated sitemap.xml`);
}

main();
