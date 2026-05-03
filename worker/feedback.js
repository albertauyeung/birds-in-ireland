/* Cloudflare Worker that receives feedback from the static site
 * and turns each submission into a GitHub issue.
 *
 * Required env / secrets (set via `wrangler secret put`):
 *   GITHUB_TOKEN  — fine-grained PAT scoped to the feedback repo,
 *                   permission: Issues: Write
 *   GITHUB_OWNER  — e.g. "albertauyeung"
 *   GITHUB_REPO   — e.g. "birds-in-ireland-feedback"
 *
 * Optional:
 *   TURNSTILE_SECRET — Cloudflare Turnstile secret key
 *   ISSUE_LABELS     — comma-separated, default "feedback"
 *   ALLOWED_ORIGINS  — comma-separated origins; default = the GH Pages URL
 */
"use strict";

const DEFAULT_ALLOWED_ORIGINS = [
  "https://albertauyeung.github.io",
  "http://localhost:8000",
  "http://localhost:8765",
];

const MIN_LEN = 5;
const MAX_LEN = 5000;

function allowedOrigins(env) {
  if (env.ALLOWED_ORIGINS) {
    return env.ALLOWED_ORIGINS.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return DEFAULT_ALLOWED_ORIGINS;
}

function corsHeaders(origin, env) {
  const list = allowedOrigins(env);
  const allow = list.includes(origin) ? origin : list[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(data, status, origin, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin, env), "Content-Type": "application/json" },
  });
}

async function verifyTurnstile(token, secret, request) {
  if (!token) return false;
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!resp.ok) return false;
  const data = await resp.json();
  return data.success === true;
}

async function createIssue(env, { feedback, lang, page, userAgent, country }) {
  const url = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/issues`;
  const firstLine = feedback.split("\n")[0].trim();
  const title = "Feedback: " + (firstLine.length > 70 ? firstLine.slice(0, 67) + "…" : firstLine);
  const body = [
    "**Language:** `" + lang + "`",
    page ? "**Page:** `" + page + "`" : null,
    country ? "**Country:** `" + country + "`" : null,
    "**Submitted:** " + new Date().toISOString(),
    userAgent ? "**User-Agent:** `" + userAgent + "`" : null,
    "",
    "---",
    "",
    feedback,
  ].filter(Boolean).join("\n");
  const labels = (env.ISSUE_LABELS || "feedback")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "birds-in-ireland-feedback-worker",
    },
    body: JSON.stringify({ title, body, labels }),
  });
  return resp.ok;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, origin, env);
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: "Invalid JSON" }, 400, origin, env);
    }

    // Honeypot: bots tend to fill every field
    if (body.website && String(body.website).length > 0) {
      return json({ ok: true }, 200, origin, env);
    }

    const feedback = String(body.feedback || "").trim();
    if (feedback.length < MIN_LEN || feedback.length > MAX_LEN) {
      return json({ error: "Feedback must be between 5 and 5000 characters." }, 400, origin, env);
    }
    const lang = String(body.lang || "unknown").slice(0, 16);
    const page = String(body.page || "").slice(0, 200) || null;
    const userAgent = (request.headers.get("User-Agent") || "").slice(0, 200);
    const country = request.headers.get("CF-IPCountry") || null;

    if (env.TURNSTILE_SECRET) {
      const ok = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET, request);
      if (!ok) return json({ error: "Verification failed. Please try again." }, 400, origin, env);
    }

    if (env.RATELIMIT) {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      try {
        const { success } = await env.RATELIMIT.limit({ key: ip });
        if (!success) {
          return json({ error: "Too many submissions. Please try again later." }, 429, origin, env);
        }
      } catch (e) {
        // Rate-limit binding errors should not block legitimate users
      }
    }

    const ok = await createIssue(env, { feedback, lang, page, userAgent, country });
    if (!ok) {
      return json({ error: "Could not record feedback. Please try again later." }, 502, origin, env);
    }

    return json({ ok: true }, 200, origin, env);
  },
};
