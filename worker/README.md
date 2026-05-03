# Feedback Worker

A Cloudflare Worker that receives feedback from the static site and creates a
GitHub issue per submission.

## What you need

1. A GitHub repo to receive issues — either reuse the main repo with a label,
   or create a dedicated `birds-in-ireland-feedback` repo (recommended, keeps
   feedback separate from engineering issues).
2. A **fine-grained personal access token (PAT)** scoped only to that repo,
   with permission `Issues: Write`. Set an expiry you're comfortable with.
3. A Cloudflare account (the free plan is enough — Workers have a 100k
   requests/day free tier).
4. **Optional but recommended:** a Cloudflare Turnstile site (also free) to
   block bots without showing CAPTCHA puzzles.

## One-time setup

```sh
# From this directory: install wrangler as a local dev dependency.
# This avoids global-install / PATH issues on Homebrew Node.
cd worker
npm install

# Login to Cloudflare (opens a browser)
npx wrangler login

# Push the secrets (paste each when prompted)
npx wrangler secret put GITHUB_TOKEN
npx wrangler secret put TURNSTILE_SECRET   # optional

# Edit wrangler.toml and update GITHUB_OWNER / GITHUB_REPO if needed,
# then deploy:
npx wrangler deploy
```

`npm run dev`, `npm run deploy` and `npm run tail` are wired up as
shortcuts in `package.json`.

`wrangler deploy` prints the Worker URL, e.g.
`https://birds-feedback.your-subdomain.workers.dev`. Copy that into
`/js/config.js` in the main repo so the form on the About page knows where
to POST.

If you also created a Turnstile site, copy the **site key** (not the secret)
into `js/config.js`'s `turnstileSiteKey`.

## How submissions look

Each submission becomes an issue titled `Feedback: <first-70-chars>` with a
body like:

```
**Language:** `zh-Hant`
**Page:** `https://.../#/about`
**Country:** `IE`
**Submitted:** 2026-05-03T10:42:11.000Z

---

The pied wagtail's pinyin is wrong, should be ...
```

## Spam controls

In order, with increasing strength:

1. **Honeypot field** (always on) — a hidden `website` input. Naïve bots fill
   it in; the Worker silently 200s without creating an issue.
2. **Cloudflare Turnstile** (optional, recommended) — invisible, no CAPTCHA
   puzzles for users. Set `TURNSTILE_SECRET` and add the site key to
   `js/config.js` to enable.
3. **Per-IP rate limiting** (optional) — uncomment the `[[unsafe.bindings]]`
   block in `wrangler.toml` to add Workers Rate Limiting. With Turnstile in
   place this is rarely needed.

## Updating

```sh
npx wrangler deploy   # redeploys the latest code
```

To rotate the GitHub token: `npx wrangler secret put GITHUB_TOKEN` and paste
the new value.
