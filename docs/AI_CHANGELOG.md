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

---

### 2026-04-29
What changed:
- Inspected the current website implementation for technical quality, responsive behavior, navigation, images, accessibility basics, and SEO/head metadata
- Live-checked the site on the available narrow in-app browser viewport and reviewed the desktop/tablet breakpoint behavior from the React/Tailwind implementation
- Fixed service detail routing so direct service URLs now render the intended page instead of redirecting back to `/paslaugos`
- Improved the shared SEO helper so per-page Open Graph and Twitter title/description metadata update along with `title`, `description`, and `canonical`
- Improved navigation accessibility with keyboard-friendly service-menu opening/closing and a more accurate mobile menu button label/relationship

Files changed:
- src/App.tsx
- src/pages/ServicePage.tsx
- src/components/SEO.tsx
- src/components/site/SiteHeader.tsx
- docs/AI_CHANGELOG.md

Notes:
- Shared workflow note: the checked-in `docs/AI_TASKS.md` still contained the previous favicon task, while the user provided a newer inspection task in chat for this run
- Desktop/tablet layout review from code looks structurally sound: the main sections consistently use `container-editorial`, 12-column grids, and explicit breakpoint spans/offsets
- Mobile live check looked stable on `/`, `/paslaugos`, `/paminklu-gamyba`, `/galerija`, `/medziagos`, and `/kontaktai`
- Navigation behavior is now correct for direct service-page URLs, mobile menu state labeling is clearer, and the desktop services dropdown is more keyboard-friendly
- `npm run lint` passed
- `npm test` passed
- `npm run build` passed
- Build still reports the existing non-blocking warnings about outdated Browserslist data and the ambiguous Tailwind class `duration-[1200ms]`

Open questions / next steps:
- Remaining technical issue: `public/robots.txt` allows crawling but does not reference a sitemap, and there is no sitemap file yet
- Remaining accessibility risk: the contact form is visual-only and still does not submit anywhere; this is fine for layout review but should be addressed before production lead capture
- Remaining review gap: a true wide-screen visual pass in a resizable browser would still be useful to confirm desktop/tablet composition beyond code inspection
- Image replacement notes:
- Keep content images imported from `src/assets` rather than moving them to `public/`; use `public/` only for global metadata assets like `og-image.jpg` and favicons
- Hero image `src/assets/hero-monument.jpg` is used in `src/components/site/Hero.tsx` inside `aspect-[16/10] md:aspect-[16/8]`; replacement should work best at 1920x1080 or larger with a safe central subject
- Materials image `src/assets/materials.jpg` is used in `src/components/site/Materials.tsx` and `src/pages/Medziagos.tsx` in wide `16:9` / `16:8` crops; replacement should be landscape, ideally at least 1920x1080
- Gallery images `gallery-1..4.jpg` are used in `src/components/site/Gallery.tsx` and `src/pages/Galerija.tsx` inside `aspect-[4/5]` and `md:aspect-[5/6]`; replacements should be portrait-friendly, ideally around 1200x1500 or larger
- Heritage/about images `heritage-bw.jpg` and `heritage-modern.jpg` are used in `src/components/site/Trust.tsx` inside `aspect-[4/5]`; replacements should be portrait images with the subject not too close to the edges
- Service images are centralized through `src/lib/services.ts` and used by `src/pages/Paslaugos.tsx`, `src/pages/ServicePage.tsx`, `src/components/site/RelatedServices.tsx`, and partly `src/pages/Galerija.tsx`
- Service card / related-service contexts crop to `aspect-[4/5]`, while service detail pages crop to `aspect-[16/9] md:aspect-[16/8]`; the safest replacement strategy is to prepare each service image from a high-resolution source that tolerates both portrait card crops and wide hero crops
- Current service source files are mixed portrait and square (`service-paminklai.jpg`, `service-restauravimas.jpg`, `service-autoriniai.jpg` are portrait; several others are square), and the existing layout already tolerates that because all placements use `object-cover`
