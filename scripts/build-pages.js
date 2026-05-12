#!/usr/bin/env node
/* Generate static SEO assets for "Birds in Ireland":
 *
 *   1. /birds/<id>.html   — one crawlable page per bird, with per-bird
 *                           meta tags, OG/Twitter cards, BreadcrumbList +
 *                           Animal JSON-LD, multilingual alternate names,
 *                           server-rendered related-birds list and a list
 *                           of spotting locations.
 *   2. /sitemap.xml       — lists every static URL with <lastmod> and
 *                           xhtml hreflang annotations for the homepage.
 *   3. /spots.html        — static page listing all birding hotspots,
 *                           with per-spot ItemList schema linking to bird
 *                           detail pages.
 *   4. /about.html        — static About page (sources, mission, privacy).
 *   5. /404.html          — friendly 404 with sitemap/homepage links.
 *   6. index.html         — the marker block
 *                           "<!-- BUILD:BIRD_LIST_START --> ...
 *                            <!-- BUILD:BIRD_LIST_END -->" is replaced in
 *                           place with a flat <li> list of every bird
 *                           page (used inside <noscript>).
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
const OG_IMAGE = SITE_URL + "og-image.svg";
const ICON_URL = SITE_URL + "icon.svg";

const SUPPORTED_LANGS = ["en", "zh-Hant", "zh-Hans", "yue", "fr", "es"];
const OG_LOCALE = {
  "en": "en_IE", "zh-Hant": "zh_TW", "zh-Hans": "zh_CN",
  "yue": "yue_HK", "fr": "fr_FR", "es": "es_ES"
};

// Today's date in YYYY-MM-DD (used for sitemap <lastmod>).
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function loadModule(file) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window;
}

const { BIRDS, SPOTS } = loadModule("js/birds.js");
const { I18N } = loadModule("js/i18n.js");

if (!Array.isArray(BIRDS) || !BIRDS.length) {
  console.error("Could not load BIRDS from js/birds.js");
  process.exit(1);
}

// ---------- Helpers ----------
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

function trim(s, n) {
  if (!s) return "";
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

const SIZE_LABEL_EN = { small: "Small", medium: "Medium", large: "Large" };

function birdPageUrl(birdId) {
  return SITE_ORIGIN + SITE_BASE + "/birds/" + birdId + ".html";
}

// Genus → group (kept in sync with js/app.js GENUS_GROUP).
const GENUS_GROUP = {
  Fratercula: "auks", Alca: "auks", Uria: "auks", Cepphus: "auks",
  Morus: "seabirds", Phalacrocorax: "seabirds", Puffinus: "seabirds",
  Larus: "gulls", Chroicocephalus: "gulls", Ichthyaetus: "gulls", Rissa: "gulls",
  Sterna: "terns", Thalasseus: "terns",
  Cyanistes: "tits", Parus: "tits", Periparus: "tits", Aegithalos: "tits",
  Turdus: "thrushes", Erithacus: "thrushes", Saxicola: "thrushes",
  Oenanthe: "thrushes", Phoenicurus: "thrushes",
  Pica: "crows", Corvus: "crows", Garrulus: "crows", Coloeus: "crows",
  Pyrrhocorax: "crows",
  Carduelis: "finches", Fringilla: "finches", Pyrrhula: "finches",
  Chloris: "finches", Linaria: "finches", Loxia: "finches",
  Emberiza: "buntings",
  Phylloscopus: "warblers", Sylvia: "warblers", Acrocephalus: "warblers",
  Regulus: "crests",
  Motacilla: "wagtails",
  Hirundo: "swallows", Delichon: "swallows", Riparia: "swallows",
  Tyto: "owls", Asio: "owls",
  Buteo: "raptors", Accipiter: "raptors", Falco: "raptors",
  Haliaeetus: "raptors", Circus: "raptors", Milvus: "raptors",
  Cygnus: "swans-geese", Branta: "swans-geese", Anser: "swans-geese",
  Anas: "ducks", Aythya: "ducks", Mergus: "ducks",
  Ardea: "herons", Egretta: "herons",
  Columba: "pigeons", Streptopelia: "pigeons",
  Numenius: "waders", Vanellus: "waders", Haematopus: "waders",
  Tringa: "waders", Actitis: "waders", Gallinago: "waders",
  Fulica: "rails", Rallus: "rails", Gallinula: "rails",
  Podiceps: "grebes", Tachybaptus: "grebes"
};

function genusOf(bird) {
  return (bird.latin || "").split(" ")[0];
}
function groupOf(bird) {
  return GENUS_GROUP[genusOf(bird)] || null;
}
function relatedBirdsFor(bird, limit) {
  const group = groupOf(bird);
  if (!group) return [];
  return BIRDS.filter((b) => b.id !== bird.id && groupOf(b) === group).slice(0, limit);
}
function spotsForBird(birdId) {
  return SPOTS.filter((s) => Array.isArray(s.birds) && s.birds.includes(birdId));
}

function allOtherNames(bird) {
  return SUPPORTED_LANGS
    .filter((l) => l !== "en" && bird.names[l] && bird.names[l] !== bird.names.en)
    .map((l) => bird.names[l]);
}

// ---------- Shared markup blocks ----------
function ogLocaleBlock(activeLang) {
  return SUPPORTED_LANGS
    .filter((l) => l !== activeLang)
    .map((l) => `  <meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    .join("\n");
}

function hreflangBlock(canonical) {
  const langs = SUPPORTED_LANGS.concat(["x-default"]);
  return langs
    .map((l) => `  <link rel="alternate" hreflang="${l}" href="${escapeAttr(canonical)}" />`)
    .join("\n");
}

function commonHeadAssets({ stylesheetHref, manifestHref, iconHref, jsPrefix }) {
  // Scripts are <head>-deferred so they download in parallel with CSS
  // without blocking parsing, then execute in document order after the
  // DOM is ready. config/i18n/birds set window globals; app.js wires up.
  return `  <link rel="stylesheet" href="${escapeAttr(stylesheetHref)}" />
  <link rel="preconnect" href="https://en.wikipedia.org" crossorigin />
  <link rel="preconnect" href="https://upload.wikimedia.org" crossorigin />
  <link rel="dns-prefetch" href="https://en.wikipedia.org" />
  <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
  <link rel="dns-prefetch" href="https://trefly.vercel.app" />
  <link rel="manifest" href="${escapeAttr(manifestHref)}" />
  <link rel="icon" href="${escapeAttr(iconHref)}" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="${escapeAttr(iconHref)}" />
  <link rel="sitemap" type="application/xml" href="${SITE_URL}sitemap.xml" />

  <script defer src="${escapeAttr(jsPrefix)}js/config.js"></script>
  <script defer src="${escapeAttr(jsPrefix)}js/i18n.js"></script>
  <script defer src="${escapeAttr(jsPrefix)}js/birds.js"></script>
  <script defer src="${escapeAttr(jsPrefix)}js/app.js"></script>`;
}

function commonHeader() {
  // Used on root-relative pages (about.html, spots.html, 404.html).
  return `  <header class="site-header">
    <a class="brand" href="./" aria-label="Home">
      <span class="brand-emoji" aria-hidden="true">🐦</span>
      <span class="brand-text" data-i18n="appTitle">Birds in Ireland</span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="./" data-nav="gallery" data-i18n="navBirds">Birds</a>
      <a href="./#/quiz" data-nav="quiz" data-i18n="navQuiz">Quiz</a>
      <a href="spots.html" data-nav="spots" data-i18n="navSpots">Where to spot</a>
      <a href="about.html" data-nav="about" data-i18n="navAbout">About</a>
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
  </header>`;
}

function commonFooter() {
  return `  <footer class="site-footer">
    <p>
      <span data-i18n="footerCredit">Photos via Wikimedia Commons. Bird info adapted from BirdWatch Ireland &amp; Wikipedia.</span>
    </p>
    <p class="small">
      <a href="${SITE_URL}" data-i18n="navBirds">Birds</a> ·
      <a href="${SITE_URL}spots.html" data-i18n="navSpots">Where to spot</a> ·
      <a href="${SITE_URL}about.html" data-i18n="navAbout">About</a> ·
      <a href="${SITE_URL}about.html#privacy" data-i18n="navPrivacy">Privacy</a> ·
      <a href="${SITE_URL}sitemap.xml">Sitemap</a>
    </p>
  </footer>`;
}

const ANALYTICS = `  <script defer data-site="RX8JVwKmdCw" src="https://trefly.vercel.app/t.js"></script>`;

// ---------- Per-bird page ----------
function renderBirdPage(bird) {
  const name = bird.names.en;
  const otherNames = allOtherNames(bird);

  const descEn = bird.description.en;
  const sizeLabel = SIZE_LABEL_EN[bird.sizeCategory] || "";
  const where = (bird.where || []).join("; ");

  const metaDesc = trim(
    `${descEn} ${sizeLabel ? `Size: ${sizeLabel.toLowerCase()}, about ${bird.sizeCm} cm. ` : ""}${where ? `Where to spot: ${where}.` : ""}`.trim(),
    158
  );

  const title = `${name} (${bird.latin}) — Birds in Ireland Kids Guide`;
  const canonical = birdPageUrl(bird.id);

  const related = relatedBirdsFor(bird, 6);
  const spotsHere = spotsForBird(bird.id);

  // JSON-LD: WebPage that documents an Animal, with breadcrumbs and an
  // ItemList of Place entries for known sightings on the island.
  const jsonLdGraph = [
    {
      "@type": "WebPage",
      "@id": canonical + "#webpage",
      "url": canonical,
      "name": title,
      "description": metaDesc,
      "isPartOf": { "@id": SITE_URL + "#website" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": OG_IMAGE,
        "width": 1200,
        "height": 630
      },
      "inLanguage": "en",
      "isFamilyFriendly": true,
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "audienceType": "children aged 5-12"
      },
      "breadcrumb": { "@id": canonical + "#breadcrumb" },
      "mainEntity": { "@id": canonical + "#animal" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": canonical + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Birds in Ireland", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Birds", "item": SITE_URL + "#/" },
        { "@type": "ListItem", "position": 3, "name": name, "item": canonical }
      ]
    },
    {
      "@type": ["Thing", "Animal"],
      "@id": canonical + "#animal",
      "name": name,
      "alternateName": otherNames,
      "description": descEn,
      "identifier": bird.latin,
      "additionalType": "https://schema.org/Animal",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "nativeStatus",
          "name": "Status in Ireland",
          "value": bird.nativeStatus === "introduced" ? "Introduced" : "Native"
        }
      ],
      "sameAs": [
        `https://en.wikipedia.org/wiki/${bird.wiki}`
      ]
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "#website",
      "url": SITE_URL,
      "name": "Birds in Ireland",
      "publisher": { "@id": SITE_URL + "#publisher" }
    },
    {
      "@type": "Organization",
      "@id": SITE_URL + "#publisher",
      "name": "Birds in Ireland",
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": ICON_URL }
    }
  ];

  const otherNamesBlock = otherNames.length
    ? `      <p class="other-names">${otherNames.map(escapeHtml).join(" · ")}</p>`
    : "";

  const whereList = (bird.where || [])
    .map((w) => `        <li>${escapeHtml(w)}</li>`)
    .join("\n");

  const relatedBlock = related.length
    ? `        <aside class="related-birds related-birds-static">
          <h2 class="birds-here-label" data-i18n="relatedBirds">Related birds</h2>
          <ul class="bird-link-list">
${related.map((rb) => `            <li><a href="${escapeAttr(rb.id)}.html"><strong>${escapeHtml(rb.names.en)}</strong> <em>(${escapeHtml(rb.latin)})</em></a></li>`).join("\n")}
          </ul>
        </aside>`
    : "";

  const spotsBlock = spotsHere.length
    ? `        <aside class="bird-spots-static">
          <h2>Where you can spot the ${escapeHtml(name)} in Ireland</h2>
          <ul class="bird-link-list">
${spotsHere.map((s) => `            <li><strong>${escapeHtml(s.name)}</strong> — ${escapeHtml(s.region)}: ${escapeHtml(s.description.en)}</li>`).join("\n")}
          </ul>
          <p><a href="../spots.html">See all birding hotspots in Ireland →</a></p>
        </aside>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ff7a59" />
  <meta name="color-scheme" content="light" />
  <meta name="format-detection" content="telephone=no" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(metaDesc)}" />
  <meta name="keywords" content="${escapeAttr([
    name, bird.latin, "Ireland", "Irish birds", "bird identification",
    "kids bird guide", "birdwatching Ireland", ...otherNames
  ].filter(Boolean).join(", "))}" />
  <meta name="author" content="Birds in Ireland" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
${hreflangBlock(canonical)}

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${escapeAttr(name + " (" + bird.latin + ") — Birds in Ireland")}" />
  <meta property="og:description" content="${escapeAttr(metaDesc)}" />
  <meta property="og:site_name" content="Birds in Ireland" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:type" content="image/svg+xml" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeAttr(name + " — Birds in Ireland kids guide")}" />
  <meta property="og:locale" content="en_IE" />
${ogLocaleBlock("en")}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(name + " — Birds in Ireland")}" />
  <meta name="twitter:description" content="${escapeAttr(metaDesc)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <meta name="twitter:image:alt" content="${escapeAttr(name + " — Birds in Ireland kids guide")}" />

${commonHeadAssets({
  stylesheetHref: "../css/styles.css",
  manifestHref: "../manifest.webmanifest",
  iconHref: "../icon.svg",
  jsPrefix: "../"
})}

  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLdGraph })}</script>

${ANALYTICS}
</head>
<body>
  <a class="visually-hidden" href="#bird-detail">Skip to content</a>

  <header class="site-header">
    <a class="brand" href="../" aria-label="Home">
      <span class="brand-emoji" aria-hidden="true">🐦</span>
      <span class="brand-text" data-i18n="appTitle">Birds in Ireland</span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="../" data-nav="gallery" data-i18n="navBirds">Birds</a>
      <a href="../#/quiz" data-nav="quiz" data-i18n="navQuiz">Quiz</a>
      <a href="../spots.html" data-nav="spots" data-i18n="navSpots">Where to spot</a>
      <a href="../about.html" data-nav="about" data-i18n="navAbout">About</a>
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

  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li><a href="../">Birds in Ireland</a></li>
      <li><a href="../">Birds</a></li>
      <li aria-current="page">${escapeHtml(name)}</li>
    </ol>
  </nav>

  <main id="app">
    <section class="view view-detail" data-view="detail">
      <a class="btn btn-back" href="../" data-action="back">
        <span aria-hidden="true">←</span> <span data-i18n="back">Back</span>
      </a>
      <article id="bird-detail" class="bird-detail">
        <div>
          <div class="photo skeleton"><img alt="${escapeAttr(name + " (" + bird.latin + ") — bird species found in Ireland")}" decoding="async" fetchpriority="high" />${bird.nativeStatus === "introduced" ? `<span class="bird-tag bird-tag--introduced" title="Introduced species">Introduced</span>` : ""}</div>
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
            <div class="fact">
              <div class="fact-label">Status</div>
              <div>${bird.nativeStatus === "introduced" ? "Introduced" : "Native to Ireland"}</div>
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
${relatedBlock}
${spotsBlock}
      </article>
    </section>
  </main>

${commonFooter()}
</body>
</html>
`;
}

// ---------- Static SPA-route pages ----------
function renderAboutPage() {
  const title = "About — Birds in Ireland Kids Guide";
  const canonical = SITE_URL + "about.html";
  const description = "About Birds in Ireland — a free, multilingual web app helping kids aged 5–12 discover the birds of Ireland. Learn about our data sources from BirdWatch Ireland, eBird and Wikimedia Commons.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": canonical + "#webpage",
        "url": canonical,
        "name": title,
        "description": description,
        "isPartOf": { "@id": SITE_URL + "#website" },
        "inLanguage": "en",
        "breadcrumb": { "@id": canonical + "#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": canonical + "#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Birds in Ireland", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "About", "item": canonical }
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ff7a59" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
${hreflangBlock(canonical)}

  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${escapeAttr(title)}" />
  <meta property="og:description" content="${escapeAttr(description)}" />
  <meta property="og:site_name" content="Birds in Ireland" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:type" content="image/svg+xml" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(title)}" />
  <meta name="twitter:description" content="${escapeAttr(description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />

${commonHeadAssets({
  stylesheetHref: "css/styles.css",
  manifestHref: "manifest.webmanifest",
  iconHref: "icon.svg",
  jsPrefix: ""
})}

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${ANALYTICS}
</head>
<body>
  <a class="visually-hidden" href="#about-content">Skip to content</a>
${commonHeader()}

  <main id="app">
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><a href="./">Birds in Ireland</a></li>
        <li aria-current="page">About</li>
      </ol>
    </nav>

    <section class="view view-about" data-view="about" id="about-content">
      <h1 class="section-title" data-i18n="aboutTitle">About this app</h1>
      <div class="about-content">
        <p data-i18n="aboutP1">This is a fun place for kids aged 5–12 to discover the birds you can see in Ireland — at the beach, the park, the garden, or up on cliffs by the sea.</p>
        <p data-i18n="aboutP2">All photos shown are loaded from Wikimedia Commons, where photographers and volunteers share pictures with open licences. We always link back to the original page so you can see who took the photo.</p>

        <h2 data-i18n="aboutSourcesTitle">Where the data comes from</h2>
        <ul class="sources">
          <li><a href="https://birdwatchireland.ie/" target="_blank" rel="noopener">BirdWatch Ireland</a> — bird identification &amp; conservation</li>
          <li><a href="https://ebird.org/region/IE" target="_blank" rel="noopener">eBird (Cornell Lab)</a> — sightings database</li>
          <li><a href="https://records.biodiversityireland.ie/" target="_blank" rel="noopener">National Biodiversity Data Centre</a> — citizen science records</li>
          <li><a href="https://www.macaulaylibrary.org/" target="_blank" rel="noopener">Macaulay Library</a> — bird photos &amp; sounds</li>
          <li><a href="https://www.bto.org/our-science/data/what-data-are-available" target="_blank" rel="noopener">BTO Bird Atlas</a> — distribution data</li>
          <li><a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a> — photos used in this app</li>
          <li><a href="https://en.wikipedia.org/" target="_blank" rel="noopener">Wikipedia</a> — &ldquo;Learn more&rdquo; links</li>
        </ul>

        <h2 id="privacy" data-i18n="privacyHeading">Privacy</h2>
        <p data-i18n="privacyP1">Birds in Ireland is free and ad-free. We don't ask for your name, email or any account.</p>
        <p data-i18n="privacyP2">We use Trefly, our own self-hosted analytics, to count visits. Trefly is cookieless: no cookie is set on your device, and no IP address or user-agent string is stored on the server. It records only the page you viewed, the host of the referring website (no full URL), your country, browser, operating system and device family. A daily-rotating hash counts unique daily visitors without identifying you, and the hash resets every 24 hours so you cannot be tracked across days.</p>
        <p data-i18n="privacyP3">Don't want to be counted? Most ad-blockers and tracker-blocking browser extensions will block trefly.vercel.app/t.js and stop the count.</p>
        <p data-i18n="privacyP4">Other third parties: bird photos and &ldquo;Learn more&rdquo; links load directly from Wikimedia Commons and Wikipedia, which see your IP only when you visit those pages. The optional feedback form on this page sends your message to a Cloudflare Worker that opens a GitHub issue; spam is filtered by a Cloudflare Turnstile widget that loads only when you start typing.</p>
        <p data-i18n="privacyP5">For privacy questions, contact: [TODO add email]. This notice is informational and not legal advice.</p>

        <h2 data-i18n="languagesHeading">Languages we support</h2>
        <p data-i18n="languagesBody">Birds in Ireland is available in English, 繁體中文, 简体中文, 廣東話 (with jyutping), Français and Español, with pinyin pronunciation guides for the Chinese names. <a href="./">Open the app</a> to switch language.</p>

        <h2 data-i18n="exploreHeading">Explore more</h2>
        <ul>
          <li><a href="./" data-i18n="exploreBrowse">Browse every bird in the guide</a></li>
          <li><a href="spots.html"><span data-i18n="exploreSpots">Where to spot birds in Ireland</span> — <span data-i18n="exploreSpotsCount">11 famous birding hotspots</span></a></li>
        </ul>

        <p class="small" data-i18n="aboutCredit">Made with love for curious young birdwatchers. 🐦</p>
      </div>
    </section>
  </main>

${commonFooter()}
</body>
</html>
`;
}

function renderSpotsPage() {
  const title = "Where to Spot Birds in Ireland — 9 Best Birding Hotspots";
  const canonical = SITE_URL + "spots.html";
  const description = "The 9 best places to go birdwatching in Ireland: Skellig Islands, Cliffs of Moher, Rathlin Island, Wexford Wildfowl Reserve, North Bull Island, Killarney National Park, Phoenix Park, Lough Neagh and the Saltee Islands.";

  const itemList = SPOTS.map((spot, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "TouristAttraction",
      "name": spot.name,
      "description": spot.description.en,
      "containedInPlace": { "@type": "AdministrativeArea", "name": spot.region },
      "address": { "@type": "PostalAddress", "addressRegion": spot.region, "addressCountry": "IE" }
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": canonical + "#webpage",
        "url": canonical,
        "name": title,
        "description": description,
        "isPartOf": { "@id": SITE_URL + "#website" },
        "inLanguage": "en",
        "breadcrumb": { "@id": canonical + "#breadcrumb" },
        "mainEntity": { "@type": "ItemList", "itemListElement": itemList }
      },
      {
        "@type": "BreadcrumbList",
        "@id": canonical + "#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Birds in Ireland", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "Where to spot", "item": canonical }
        ]
      }
    ]
  };

  const spotsHtml = SPOTS.map((spot) => {
    const mapsQuery = encodeURIComponent(`${spot.name}, ${spot.region}, Ireland`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
    const birdsForSpot = (spot.birds || [])
      .map((id) => BIRDS.find((b) => b.id === id))
      .filter(Boolean);
    const birdsList = birdsForSpot.length
      ? `      <p class="birds-here-label">Birds you might see here:</p>
      <ul class="bird-link-list">
${birdsForSpot.map((b) => `        <li><a href="birds/${escapeAttr(b.id)}.html">${escapeHtml(b.names.en)}</a> <em>(${escapeHtml(b.latin)})</em></li>`).join("\n")}
      </ul>`
      : "";
    return `    <article class="spot-card" id="${escapeAttr(spot.id)}">
      <h2>
        <a class="spot-title-link" href="${mapsUrl}" target="_blank" rel="noopener" aria-label="${escapeAttr(spot.name)} — open in Google Maps">
          ${escapeHtml(spot.name)} <span class="map-pin" aria-hidden="true">📍</span>
        </a>
      </h2>
      <div class="region">${escapeHtml(spot.region)}</div>
      <p>${escapeHtml(spot.description.en)}</p>
${birdsList}
    </article>`;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ff7a59" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(description)}" />
  <meta name="keywords" content="birdwatching Ireland, Irish birding hotspots, where to see puffins Ireland, Skellig Islands birds, Cliffs of Moher birds, Rathlin Island, Wexford Wildfowl Reserve, Phoenix Park birds, Killarney National Park, Saltee Islands" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
${hreflangBlock(canonical)}

  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeAttr(canonical)}" />
  <meta property="og:title" content="${escapeAttr(title)}" />
  <meta property="og:description" content="${escapeAttr(description)}" />
  <meta property="og:site_name" content="Birds in Ireland" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:type" content="image/svg+xml" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(title)}" />
  <meta name="twitter:description" content="${escapeAttr(description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />

${commonHeadAssets({
  stylesheetHref: "css/styles.css",
  manifestHref: "manifest.webmanifest",
  iconHref: "icon.svg",
  jsPrefix: ""
})}

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${ANALYTICS}
</head>
<body>
  <a class="visually-hidden" href="#spots-list">Skip to content</a>
${commonHeader()}

  <main id="app">
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><a href="./">Birds in Ireland</a></li>
        <li aria-current="page">Where to spot</li>
      </ol>
    </nav>

    <section class="view view-spots" data-view="spots">
      <h1 class="section-title" data-i18n="spotsTitle">Where to spot birds in Ireland</h1>
      <p class="lead" data-i18n="spotsLead">Bring binoculars, walk quietly, and look up! Here are great places around the island.</p>
      <div id="spots-list" class="spots-list">
${spotsHtml}
      </div>
    </section>
  </main>

${commonFooter()}
</body>
</html>
`;
}

function render404Page() {
  const title = "Page not found — Birds in Ireland";
  const canonical = SITE_URL + "404.html";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#ff7a59" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="The page you were looking for couldn't be found. Browse the birds of Ireland or explore our birdwatching hotspots." />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="${escapeAttr(canonical)}" />
${commonHeadAssets({
  stylesheetHref: "css/styles.css",
  manifestHref: "manifest.webmanifest",
  iconHref: "icon.svg",
  jsPrefix: ""
})}
${ANALYTICS}
</head>
<body>
${commonHeader()}
  <main id="app">
    <section class="view">
      <h1 class="section-title">Page not found 🐦</h1>
      <p class="lead">The bird flew away! The page you were looking for couldn't be found.</p>
      <ul>
        <li><a href="./">Back to the gallery (every bird in the guide)</a></li>
        <li><a href="spots.html">Where to spot birds in Ireland</a></li>
        <li><a href="about.html">About this app</a></li>
        <li><a href="sitemap.xml">View the sitemap</a></li>
      </ul>
    </section>
  </main>
${commonFooter()}
</body>
</html>
`;
}

// ---------- Sitemap ----------
function buildSitemap(birds) {
  // Each <url> declares the homepage's hreflang siblings via xhtml:link.
  // Search engines treat the same URL serving multiple languages as a
  // single canonical with x-default; this still helps language targeting.
  const homepageHreflangs = SUPPORTED_LANGS.concat(["x-default"])
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}" />`)
    .join("\n");

  const homeUrl = `  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${homepageHreflangs}
  </url>`;

  const staticPages = [
    { loc: SITE_URL + "spots.html", priority: "0.8", changefreq: "monthly" },
    { loc: SITE_URL + "about.html", priority: "0.4", changefreq: "yearly" }
  ].map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n");

  const birdUrls = birds
    .map((b) => `  <url>
    <loc>${birdPageUrl(b.id)}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeUrl}
${staticPages}
${birdUrls}
</urlset>
`;
}

// ---------- index.html bird-list injection ----------
function injectBirdListIntoIndex(birds) {
  const indexPath = path.join(ROOT, "index.html");
  let html = fs.readFileSync(indexPath, "utf8");

  const start = "<!-- BUILD:BIRD_LIST_START -->";
  const end = "<!-- BUILD:BIRD_LIST_END -->";
  const startIdx = html.indexOf(start);
  const endIdx = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    console.warn("Skipping index.html bird-list injection (markers not found).");
    return;
  }

  const sorted = birds.slice().sort((a, b) => a.names.en.localeCompare(b.names.en));
  const lines = sorted
    .map((b) => {
      const tag = b.nativeStatus === "introduced"
        ? ` <span class="bird-tag bird-tag--introduced">Introduced</span>`
        : "";
      return `          <li><a href="birds/${escapeAttr(b.id)}.html"><strong>${escapeHtml(b.names.en)}</strong> <em>(${escapeHtml(b.latin)})</em></a>${tag}</li>`;
    })
    .join("\n");

  const replacement = `${start}\n${lines}\n          ${end}`;
  const newHtml = html.slice(0, startIdx) + replacement + html.slice(endIdx + end.length);
  if (newHtml !== html) {
    fs.writeFileSync(indexPath, newHtml);
  }
}

// ---------- Main ----------
function main() {
  const outDir = path.join(ROOT, "birds");
  fs.mkdirSync(outDir, { recursive: true });

  let written = 0;
  for (const bird of BIRDS) {
    const html = renderBirdPage(bird);
    fs.writeFileSync(path.join(outDir, bird.id + ".html"), html);
    written++;
  }

  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), buildSitemap(BIRDS));
  fs.writeFileSync(path.join(ROOT, "about.html"), renderAboutPage());
  fs.writeFileSync(path.join(ROOT, "spots.html"), renderSpotsPage());
  fs.writeFileSync(path.join(ROOT, "404.html"), render404Page());
  injectBirdListIntoIndex(BIRDS);

  console.log(
    `Wrote ${written} bird pages, sitemap.xml, about.html, spots.html, 404.html, ` +
    `and updated index.html bird-list block.`
  );
}

main();
