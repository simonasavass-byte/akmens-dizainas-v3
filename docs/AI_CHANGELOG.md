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

### 2026-05-04
What changed:
- Created an external Meta-ad asset set based on the user's Canva concept `4 klaidos renkantis paminklą`
- Built a first single-frame static concept in `output/meta-ad/`
- Reworked the concept into a six-frame vertical sequence for video assembly: intro, four mistake slides, and CTA close
- Exported a GIF preview to review the sequence flow without relying on Canva

Files changed:
- output/meta-ad/render_meta_ad.py
- output/meta-ad/akmens-darbai-4-klaidos-spec.md
- output/meta-ad/akmens-darbai-4-klaidos-meta-story.png
- output/meta-ad/akmens-darbai-4-klaidos-meta-story-v2.png
- output/meta-ad/render_meta_ad_sequence.py
- output/meta-ad/sequence-spec.md
- output/meta-ad/sequence/01-intro.png
- output/meta-ad/sequence/01-intro-v2.png
- output/meta-ad/sequence/02-klaida-01.png
- output/meta-ad/sequence/03-klaida-02.png
- output/meta-ad/sequence/04-klaida-03.png
- output/meta-ad/sequence/05-klaida-04.png
- output/meta-ad/sequence/06-cta.png
- output/meta-ad/sequence/akmens-darbai-4-klaidos-preview.gif
- docs/AI_CHANGELOG.md

Notes:
- This work followed the user request in chat, which differs from the favicon-only task still written in `docs/AI_TASKS.md`
- The local environment does not include `ffmpeg`, so the sequence was exported as individual PNG frames plus a GIF preview instead of a true MP4
- The sequence is intended to be imported into Canva or another editor as six pages and exported as video there

Open questions / next steps:
- Decide whether to shorten the copy further for colder Meta traffic
- If needed, create a second, more aggressive version for `1080x1350` feed placements

---

### 2026-05-06
What changed:
- Audited the current website image system against the new source pool in `incoming-images/`
- Reviewed current image imports/usages, crop containers, and replacement constraints without changing website code
- Built a slot-by-slot replacement recommendation so the next implementation pass can swap AI/placeholder imagery with real images safely

Files changed:
- docs/AI_CHANGELOG.md

Notes:
- The incoming source pool is present and usable. Strong folders are `incoming-images/hero/`, `incoming-images/site/heroes/`, `incoming-images/site/cards/`, `incoming-images/site/process/`, `incoming-images/gallery/`, and `incoming-images/about/`
- The current site structure is image-replacement friendly because most placements already use fixed aspect wrappers plus `object-cover`
- Keep content images as imported assets in `src/assets/`; continue using `public/` only for global assets like `og-image.jpg`, robots, and favicons
- Current image slot review and replacement plan:
- `src/components/site/Hero.tsx` replacing `src/assets/hero-monument.jpg`: use `incoming-images/hero/akmensdarbai-hero.webp`; strongest overall image, premium tone, calm light, clear monument silhouette, safe for the existing wide hero crop; format `webp`; export around `1920x1080` to `2560x1440`; final filename `hero-monument-real.webp`
- `src/components/site/Materials.tsx` and `src/pages/Medziagos.tsx` replacing `src/assets/materials.jpg`: no strong true replacement exists yet; avoid the tiny `incoming-images/home/stones/*` graphics because they are too small and feel illustrative rather than premium/real; next step is to request a proper real landscape photo of stone samples/material swatches; if forced, use a new dedicated shoot/export rather than repurposing a memorial photo
- `src/components/site/Trust.tsx` replacing `src/assets/heritage-bw.jpg`: use `incoming-images/about/intro.png`; strong archival workshop image, supports credibility/history, works well in a portrait crop; export as `jpg` or `webp` around `1200x1500`; final filename `about-history-archive.webp`
- `src/components/site/Trust.tsx` replacing `src/assets/heritage-modern.jpg`: use `incoming-images/about/values.png`; grounded human gesture, calmer and more emotional than the current AI-style image, safe in portrait crop; export around `1200x1500`; final filename `about-values-tulips.webp`
- `src/components/site/Gallery.tsx` and `src/pages/Galerija.tsx` replacing `src/assets/gallery-1.jpg`: use `incoming-images/gallery/gallery-5.webp`; strongest portrait-oriented real photo, reads clearly in `4:5` and `5:6`; export around `1200x1500`; final filename `gallery-real-01.webp`
- replacing `src/assets/gallery-2.jpg`: use `incoming-images/gallery/gallery-1.webp`; strong polished black memorial composition, premium finish, okay with moderate portrait crop; export around `1200x1500`; final filename `gallery-real-02.webp`
- replacing `src/assets/gallery-3.jpg`: use `incoming-images/gallery/gallery-2.webp`; clean modern slab composition, good surface detail, safe crop; export around `1200x1500`; final filename `gallery-real-03.webp`
- replacing `src/assets/gallery-4.jpg`: use `incoming-images/gallery/gallery-3.webp`; flowing light/dark stone contrast, strong craftsmanship signal, safe crop; export around `1200x1500`; final filename `gallery-real-04.webp`
- optional extra gallery inventory: `incoming-images/gallery/gallery-4.webp` and `incoming-images/gallery/gallery-6.webp` are strong reserve images for later expansion or service pages; `gallery-6.webp` is especially useful for wide hero/detail contexts
- service image system note: service assets are currently centralized in `src/lib/services.ts` and reused by cards (`4:5`), related services (`4:5`), and detail heroes (`16:9` / `16:8`). This is the hardest part of the replacement because one image currently has to survive both portrait and wide crops
- replacing `src/assets/service-paminklai.jpg`: use `incoming-images/site/cards/paminklu-gamyba.png`; strong premium close-up and best fit for the brand tone, but it should be manually re-cropped/exported from source for both portrait card and wide hero use; export at least `1600x2000` for card and `1920x1080` for hero if separate variants are allowed later; working final filename `service-paminklu-gamyba-real.webp`
- replacing `src/assets/service-projektavimas.jpg`: best fit is `incoming-images/site/heroes/lotus-grave.webp`; it shows a complete designed memorial composition and tolerates both portrait and wide crops better than the schematic render; avoid using `incoming-images/site/details/projektavimas.png` as the main service image because it feels synthetic/render-like; final filename `service-kapavieciu-projektavimas-real.webp`
- replacing `src/assets/service-dengimas.jpg`: use `incoming-images/site/heroes/completed-wide.webp`; polished slab surface and paved surroundings communicate covering/material finish well; manual portrait crop will be needed for card use; final filename `service-kapu-dengimas-real.webp`
- replacing `src/assets/service-restauravimas.jpg`: use `incoming-images/site/heroes/restored-grave.jpeg`; real restored site, readable before/after implication, safest thematic match; card crop is okay, hero crop acceptable; final filename `service-restauravimas-real.webp`
- replacing `src/assets/service-graviravimas.jpg`: use `incoming-images/site/process/craft-process.png`; clear real craft/process shot and much more credible than the current AI-looking gold-letter image; export from source to preserve hand/tool area in both crops; final filename `service-graviravimas-real.webp`
- replacing `src/assets/service-autoriniai.jpg`: use `incoming-images/site/details/authorial-detail.png`; strongest sculptural/detail image in the set, premium and distinctive, but should be manually framed for both card and hero placements; final filename `service-autoriniai-real.webp`
- replacing `src/assets/service-didmenine.jpg`: no ideal dedicated wholesale image exists; temporary best fit is `incoming-images/gallery/gallery-6.webp` because it shows broader inventory/context, but this slot still needs a better real partner/trade-oriented image later; final filename `service-didmenine-real.webp`
- weak/problematic images to avoid:
- `incoming-images/home/stones/stone-*.png` and `strip-*.png` are too small and read as design fragments, not premium site photography
- `incoming-images/site/details/projektavimas.png` looks more like a synthetic planning render than a grounded real photograph; keep only as a secondary support visual if ever needed, not as the main service image
- `incoming-images/about/history.png` is interesting archival material but weaker than `about/intro.png` for the current Trust layout because it is flatter and less immediately legible at small size
- strongest images to prioritize first:
- `incoming-images/hero/akmensdarbai-hero.webp`
- `incoming-images/site/heroes/completed-wide.webp`
- `incoming-images/site/heroes/restored-grave.jpeg`
- `incoming-images/site/process/craft-process.png`
- `incoming-images/site/cards/paminklu-gamyba.png`
- `incoming-images/gallery/gallery-5.webp`
- missing images:
- a true high-quality real materials/stones landscape image for the materials section
- a stronger dedicated wholesale / stock / partner-oriented image for `didmeninė prekyba`
- Next implementation step:
- prepare the chosen source files as final exports in `src/assets/` with crop-safe filenames
- if we want the best result for service pages, split the current single service image concept into separate `card` and `hero` exports rather than forcing one crop to do both jobs
- swap assets one section at a time and visually verify desktop/mobile crops after each batch

Open questions / next steps:
- Decide whether the next implementation pass should keep the current one-image-per-service structure or upgrade to separate card/hero variants for better art direction
- Confirm whether the user can provide a real stone/materials photo and a better didmeninė/wholesale image before replacement work starts

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
