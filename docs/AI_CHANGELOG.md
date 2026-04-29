# AI_CHANGELOG

## Template

### YYYY-MM-DD
What changed:
- ...

Files changed:
- ...

Notes:
- ...

Open questions / next steps:
- ...

---

### 2026-04-29
What changed:
- Added shared AI workflow files (AGENTS.md, AI_CONTEXT.md, AI_TASKS.md, AI_CHANGELOG.md)

Files changed:
- AGENTS.md
- docs/AI_CONTEXT.md
- docs/AI_TASKS.md
- docs/AI_CHANGELOG.md

Notes:
- Initial setup for ChatGPT + Codex shared workflow
- No website code was modified

Open questions / next steps:
- Verify that Codex reads and follows AGENTS.md and docs files
- Confirm that Codex correctly updates this changelog after completing tasks

---

### 2026-04-29
What changed:
- Validated the shared ChatGPT + Codex workflow by reading `AGENTS.md`, `docs/AI_CONTEXT.md`, `docs/AI_TASKS.md`, and `docs/AI_CHANGELOG.md`
- Confirmed the main app structure is organized under `src/pages`, `src/components/site`, `src/lib`, `src/assets`, and `public`
- Ran the available project checks without modifying website code

Files changed:
- docs/AI_CHANGELOG.md

Notes:
- Workflow setup is usable as a shared source of truth for future Codex tasks
- Repository status was clean on `main...origin/main` during validation
- `npm run lint` passed
- `npm test` passed
- `npm run build` passed
- Build completed with non-blocking warnings about outdated Browserslist data and an ambiguous Tailwind class `duration-[1200ms]`

Open questions / next steps:
- Decide later whether to clean up the non-blocking build warnings
- Use this workflow for the next real website task and keep updating this changelog after each Codex run

---

### 2026-04-29
What changed:
- Pulled the latest repo state and executed the current favicon task from `docs/AI_TASKS.md`
- Replaced `public/favicon.svg` with a padded stone-flame symbol derived from `public/favicon-source.svg`
- Generated the requested favicon asset set in `public/` and updated favicon tags in `index.html`

Files changed:
- index.html
- public/favicon.svg
- public/favicon.ico
- public/favicon-16x16.png
- public/favicon-32x32.png
- public/apple-touch-icon.png
- public/android-chrome-192x192.png
- public/android-chrome-512x512.png
- docs/AI_CHANGELOG.md

Notes:
- Changes were limited to favicon-related files plus this changelog entry
- Generated icon sizes were verified: `16x16`, `32x32`, `180x180`, `192x192`, `512x512`
- `npm run lint` passed
- `npm test` passed
- `npm run build` passed
- Build still reports the existing non-blocking warnings about outdated Browserslist data and the ambiguous Tailwind class `duration-[1200ms]`

Open questions / next steps:
- Manual browser/device checks would still be useful to confirm how the new icon looks in tabs, bookmarks, and mobile home-screen contexts
