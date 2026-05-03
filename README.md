# Birds in Ireland

A multilingual web app for kids aged 5–12 to discover the birds of Ireland.

- 100 bird species with kid-friendly descriptions, photos, and where to spot them
- 6 languages: English, 繁體中文, 简体中文, 廣東話, Français, Español
- 9 famous birding hotspots around the island
- Pronunciation guides (pinyin, jyutping)
- Match-the-bird quiz mini-game
- Hash-based + path-based routing (per-bird URLs are crawlable for SEO)
- Optional feedback form on the About page (form → Cloudflare Worker → GitHub issue)

## Contents

- [Quick start](#quick-start)
- [Project layout](#project-layout)
- [Editing bird data](#editing-bird-data)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Feedback form (optional)](#feedback-form-optional)
- [Data sources](#data-sources)

## Quick start

It's a static site — no build step needed to view it.

```sh
git clone https://github.com/albertauyeung/birds-in-ireland.git
cd birds-in-ireland
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any static server works (`npx serve`, `caddy file-server`, etc.). Don't open
`index.html` directly via `file://` — image fetches and the Wikipedia API
require an HTTP origin.

## Project layout

```
birds-in-ireland/
├── index.html            # SPA shell (gallery / detail / quiz / spots / about)
├── css/styles.css        # all styles
├── js/
│   ├── i18n.js           # UI strings × 6 languages
│   ├── birds.js          # 100 birds + spots data (the source of truth)
│   ├── app.js            # routing, rendering, photo loader, feedback form wiring
│   └── config.js         # paste-in slot for the feedback Worker URL
├── birds/                # 100 generated static HTML pages, one per bird (for SEO)
├── scripts/
│   └── build-pages.js    # regenerates birds/*.html and sitemap.xml from birds.js
├── worker/               # Cloudflare Worker that turns feedback into GitHub issues
│   ├── feedback.js
│   ├── wrangler.toml
│   ├── package.json
│   └── README.md
├── sitemap.xml           # generated; lists every bird URL plus SPA routes
└── .github/workflows/pages.yml   # GitHub Pages deploy
```

## Editing bird data

All bird data lives in `js/birds.js`. To add or edit a bird:

1. Edit `js/birds.js` (each entry has `id`, `wiki`, `latin`, `sizeCm`, `where`,
   `names` × 6 languages, optional `pronunciation`, `description` × 6).
2. Regenerate the static per-bird pages and the sitemap:

   ```sh
   node scripts/build-pages.js
   ```
3. Commit both `js/birds.js` and the regenerated files in `birds/` and
   `sitemap.xml`. They're committed to the repo so GitHub Pages serves them
   directly without a build step.

The "Related birds" list on each detail page is derived automatically from
the Latin genus via a small lookup map in `js/app.js` (`GENUS_GROUP`). Add a
new genus mapping there if you introduce a bird from a family that isn't
covered yet.

## Deploying to GitHub Pages

The `.github/workflows/pages.yml` workflow runs on every push to `main` and
publishes the entire repo as a Pages site. No build step in CI — generated
files (per-bird pages, sitemap) must be committed before push.

After the first deploy, in **GitHub → Settings → Pages**:
- Source: **GitHub Actions**
- Custom domain: optional

The site URL pattern is `https://<your-user>.github.io/birds-in-ireland/`.

Once deployed, submit `sitemap.xml` to **Google Search Console** and
**Bing Webmaster Tools** so the per-bird pages get indexed.

## Feedback form (optional)

A feedback form on the **About page** lets users submit notes without a
GitHub account. Submissions hit a Cloudflare Worker which creates a GitHub
issue per submission. The form stays hidden until you wire up `js/config.js`,
so the rest of the site works fine without doing this.

### One-time setup

1. **Create a feedback repo** (e.g. `birds-in-ireland-feedback`) — keeps user
   reports separate from engineering issues. A private empty repo is fine.

2. **Generate a fine-grained PAT** at GitHub → Settings → Developer settings
   → Personal access tokens → Fine-grained:
   - Repository access: only the feedback repo
   - Repository permissions → **Issues: Read and write** (only this)
   - Set an expiry (1 year is reasonable; rotate when it expires)
   - Copy the token — it's shown only once.

3. **Sign up for Cloudflare** at [dash.cloudflare.com](https://dash.cloudflare.com/sign-up).
   Free tier covers 100k Worker requests/day.

4. **Install the Worker:**
   ```sh
   cd worker
   npm install                              # local wrangler
   npx wrangler login                       # opens browser
   npx wrangler secret put GITHUB_TOKEN     # paste the PAT
   # edit wrangler.toml: confirm GITHUB_OWNER / GITHUB_REPO
   npx wrangler deploy
   ```
   The deploy prints a URL like
   `https://birds-feedback.<your-subdomain>.workers.dev`.

5. **Wire it into the site** — paste the URL into `js/config.js`:
   ```js
   window.FEEDBACK_CONFIG = {
     workerUrl: "https://birds-feedback.<your-subdomain>.workers.dev",
     turnstileSiteKey: ""
   };
   ```
   Commit and push. The form appears on the About page on next deploy.

### Optional: Cloudflare Turnstile (recommended for bot protection)

1. Cloudflare dash → **Turnstile** → **Add site**:
   - Hostname Management: add `albertauyeung.github.io` (production) and
     `localhost` (for local testing).
   - Widget mode: **Managed** (Cloudflare picks invisible vs. challenge).
2. Copy the **site key** → paste into `js/config.js` → `turnstileSiteKey`.
3. Copy the **secret key** → set on the Worker:
   ```sh
   cd worker
   npx wrangler secret put TURNSTILE_SECRET
   npx wrangler deploy
   ```

The Worker also has a hidden honeypot field (always on) regardless of
Turnstile, so even without Turnstile, naïve bots get filtered out.

### Updating the Worker later

```sh
cd worker
npx wrangler deploy        # ship code changes
npx wrangler tail          # stream live logs
npx wrangler secret put GITHUB_TOKEN   # rotate the PAT
```

See `worker/README.md` for additional details on environment variables and
rate-limiting.

## Data sources

- [BirdWatch Ireland](https://birdwatchireland.ie/) — bird identification & conservation
- [eBird](https://ebird.org/region/IE) (Cornell Lab of Ornithology) — sightings
- [National Biodiversity Data Centre](https://records.biodiversityireland.ie/) — citizen science
- [Wikipedia](https://en.wikipedia.org/) & [Wikimedia Commons](https://commons.wikimedia.org/) — photos and descriptions
