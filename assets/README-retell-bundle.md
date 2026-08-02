# retell-web-client.bundle.js

A self-contained build of `retell-client-js-sdk`, produced with esbuild and
committed directly so the site can load it as a plain `<script>` tag with no
build step of its own.

## Why this exists instead of a CDN `<script>` tag

Retell's published UMD build (`dist/index.umd.js`) isn't actually standalone:
loading it directly via `<script src="https://cdn.jsdelivr.net/npm/retell-client-js-sdk/dist/index.umd.js">`
throws `Cannot read properties of undefined (reading 'EventEmitter')` on load.
It expects `eventemitter3` and `livekit-client` to already exist as separate
globals with specific (and non-obvious) names — Retell's own docs only cover
the npm/bundler path, not a bare script tag, and this isn't mentioned anywhere
in their documentation. Confirmed by testing the CDN URL directly and cross-
checking against a community-reported workaround (loading those two
dependencies from unpkg first and manually aliasing `window.EventEmitter3` →
`window.eventemitter3`, `window.LivekitClient` → `window.livekitClient`)
before deciding a real bundle was the more robust fix.

This file is the more robust fix: it bundles `retell-client-js-sdk` and every
dependency it needs into one file, so nothing has to load in a specific order
or rely on undocumented global names. It exposes `window.RetellWebClient`.

## Rebuilding it (e.g. after a Retell SDK update)

```bash
mkdir /tmp/retell-bundle && cd /tmp/retell-bundle
npm init -y
npm install retell-client-js-sdk esbuild
echo 'import { RetellWebClient } from "retell-client-js-sdk"; window.RetellWebClient = RetellWebClient;' > entry.js
npx esbuild entry.js --bundle --minify --format=iife --platform=browser --target=es2018 --outfile=retell-web-client.bundle.js
cp retell-web-client.bundle.js /path/to/practera-site/assets/
```

Then reload the site and check `typeof window.RetellWebClient === 'function'`
in the console before trusting it.
