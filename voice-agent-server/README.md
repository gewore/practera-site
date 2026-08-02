# Voice agent server

A minimal Express service with one job: mint a short-lived Retell web-call
token so the site's voice widget can start a call without ever holding your
Retell API key in the browser. Deployed as its own app, separate from the
static site.

## What it does

`POST /api/create-web-call` → calls Retell's `create-web-call` API server-side,
returns `{ access_token, call_id, max_duration_seconds }` to the browser.
Enforces a per-IP daily call cap before it will mint a token (`429` once
exceeded). `GET /health` for uptime checks.

## Deploying on Coolify

1. Push this repo (or just this subdirectory, if you split it out later) to
   the git remote Coolify watches.
2. In Coolify: **New Resource → Application**, point it at this repo, set the
   **base directory** to `voice-agent-server/` if deploying from the
   monorepo, and let it build from the included `Dockerfile` (Coolify
   auto-detects it; no Nixpacks config needed).
3. Set environment variables on the Coolify app (see `.env.example` for the
   full list) — at minimum `RETELL_API_KEY`, `RETELL_AGENT_ID`, and
   `ALLOWED_ORIGIN` set to your real site origin.
4. Give it a domain (Coolify's built-in proxy handles TLS) — e.g.
   `voice-api.practera.ai`.
5. Once deployed, update `VOICE_AGENT_API_BASE` in `index.html`'s voice widget
   script to that domain.

## Local testing

```bash
cp .env.example .env   # fill in RETELL_API_KEY / RETELL_AGENT_ID
npm install
npm start
curl -X POST http://localhost:8420/api/create-web-call
```

## Before this goes live

- [ ] Create the Retell agent — see `RETELL_AGENT_PROMPT.md`.
- [ ] Set a real `ALLOWED_ORIGIN` (not `*`) once the site's production domain
      is known.
- [ ] Watch Retell's usage/billing dashboard for the first few days after
      launch — the in-memory rate limit is a floor, not a substitute for
      keeping an eye on actual spend.
- [ ] If traffic ever justifies running more than one instance, swap the
      in-memory `callLog` Map for Redis (or similar) — right now the limit
      only holds per-instance.
