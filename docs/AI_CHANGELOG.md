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
- Pulled the latest `main` and completed a planning-only pass to define image-generation briefs for the remaining weak or missing image slots
- Used the previous real-image replacement notes plus the visual QA findings to rank which slots genuinely need generated/support imagery and which should stay real-only
- Wrote copy-ready English prompts for later ChatGPT / image-generation use without modifying website code or replacing any live assets

Files changed:
- docs/AI_CHANGELOG.md

Notes:
- Prioritized image needs:
- Priority 1: `src/assets/materials.jpg` used on `/medziagos` and the homepage materials section
- Priority 2: `/didmenine-prekyba-paminklais`
- Priority 3: `/kapavieciu-projektavimas`
- Priority 4: first gallery image only as an optional fallback if later wide-screen review still confirms that it feels too bright / flare-heavy
- Recommendation summary:
- `materials.jpg` is the strongest candidate for generated support imagery and is the only slot that clearly deserves generation planning right now
- `/didmenine-prekyba-paminklais` and `/kapavieciu-projektavimas` may benefit from generated support imagery, but they are weaker secondary priorities rather than urgent blockers
- The first gallery image should not be replaced by default; only consider a generated substitute if a later final review still finds the brightness too distracting
- Images that should remain real-only:
- Homepage hero and all completed-work hero images that represent actual memorial projects should remain real-first whenever possible
- Historical / archival imagery must remain real-only
- Trust/about workshop heritage imagery must remain real-only
- Gallery imagery should remain real-first because it implies actual completed work

- Generation briefs:
- 1. Materials image brief
- target page / component: `/medziagos`, `src/components/site/Materials.tsx`, `src/pages/Medziagos.tsx`
- current image problem: current asset reads like a polished showroom mockup/render and breaks the otherwise documentary, real-world tone of the site
- intended emotional tone: calm, premium, tactile, trustworthy, grounded, understated
- exact subject matter: three to five real granite slabs or thick sample blocks arranged as a refined editorial still life, showing distinct black, warm gray, and deep red stone options; could include one additional neutral gray sample if it helps composition
- composition: straight-on or slightly elevated editorial product photograph; clean spacing between samples; enough negative space around the stones so it crops safely in wide formats; no hands, no people, no cemetery monuments, no showroom branding
- crop/aspect ratio requirements: must survive `16:9` and `16:8` wide crops, with the sample group centered and not too close to the frame edges
- lighting: soft directional daylight or very soft studio-natural light, with believable shadows and subtle specular highlights on polished stone
- color palette: warm-neutral background, dark charcoal black, soft mineral gray, deep burgundy-red stone tones; restrained, not overly saturated
- level of realism: highly realistic editorial product/material photo
- avoid: CGI feel, perfect symmetry, floating objects, hyper-glossy luxury-ad look, fake marble veining, excessive reflections, purple/blue casts, overly dramatic cinematic contrast
- recommended output dimensions: at least `2560x1440`, ideally `3000x1688` or larger
- image type: editorial product/material photo
- final prompt:
- `A highly realistic editorial photograph of premium granite material samples for a Lithuanian memorial stonework website: three to five thick polished granite slabs arranged as a calm still life on a warm neutral surface, showing distinct black granite, soft warm gray granite, and deep dark red granite, with subtle natural shadows, soft daylight or daylight-like studio lighting, tactile stone texture, believable weight and thickness, refined negative space, understated premium mood, no branding, no people, no cemetery monuments, no readable text, no CGI look, no perfect symmetry, no glossy luxury advertising style, no dramatic overprocessing, realistic stone color and surface detail, composed to crop safely in a wide 16:9 website banner.` 

- 2. Didmenine prekyba image brief
- target page / component: `/didmenine-prekyba-paminklais`, service hero or future card/hero refinement
- current image problem: current real image is credible but feels less premium and less intentional than the stronger service pages; the blurred dark foreground monument creates a slightly awkward frame edge
- intended emotional tone: professional, stable, orderly, businesslike, calm, credible
- exact subject matter: a broader memorial inventory / trade-supply view showing multiple finished granite monuments or stone elements arranged in a neat cemetery or yard context, without focusing on one emotional family grave; the emphasis should be availability, range, and reliable supply rather than ceremony
- composition: wide horizontal composition with clear sightlines across several granite memorial products; foreground should be clean and not blocked by a blurry dark object; one strong central path or horizontal layered arrangement would help
- crop/aspect ratio requirements: must survive `16:9` / `16:8` service hero crops and potentially a `4:5` card crop if adapted later
- lighting: bright but soft daylight, lightly overcast or late-morning light; enough contrast for polished stone to read without harsh glare
- color palette: black and gray granite, muted greenery, pale sky, restrained floral accents only
- level of realism: realistic documentary-commercial photo, not sentimental, not stocky
- avoid: visible readable gravestone names/dates, exaggerated symmetry, funeral drama, extreme shallow depth of field, blurry black object blocking one side, fake luxury cemetery fantasy
- recommended output dimensions: at least `2560x1440`
- image type: realistic documentary-commercial support photo
- final prompt:
- `A highly realistic documentary-style photograph for a memorial stone supplier website, showing a neat professional selection of finished granite memorials and stone elements in an orderly outdoor cemetery or stonework yard context, calm businesslike atmosphere, multiple black and gray granite monuments visible, clear sightlines, clean foreground, subtle floral accents only, soft daylight or bright overcast light, premium but understated tone, no readable gravestone names or dates, no dramatic mourners, no fake luxury staging, no blurry object blocking the frame, no AI symmetry, composed to work as a wide 16:9 service hero image for wholesale memorial stone supply.` 

- 3. Kapavieciu projektavimas image brief
- target page / component: `/kapavieciu-projektavimas`, service hero refinement if later needed
- current image problem: current real image is acceptable and credible, but slightly flatter and less elevated than the strongest service pages
- intended emotional tone: thoughtful, composed, design-led, measured, premium, calm
- exact subject matter: a real-looking completed memorial layout seen from a slightly elevated viewpoint, where the whole composition of monument, border, surface treatment, and surrounding space is readable at once
- composition: structured but natural, with the grave layout clearly legible; one complete designed memorial composition centered or slightly off-center, background cemetery context present but secondary
- crop/aspect ratio requirements: should hold in `16:9` / `16:8` while keeping the whole designed composition visible; safe center-weighted framing
- lighting: soft overcast or diffused daylight; no harsh sun flare
- color palette: black granite, gray stone, muted greens, restrained sky tones
- level of realism: realistic documentary/editorial photo
- avoid: render-like visualization, aerial drone look, overly casual snapshot feel, visible readable names/dates, cluttered tools, harsh HDR
- recommended output dimensions: at least `2560x1440`
- image type: realistic documentary/editorial project photo
- final prompt:
- `A highly realistic editorial-documentary photograph of a thoughtfully designed memorial grave layout in a Lithuanian cemetery, viewed from a slightly elevated human height so the full composition is readable: monument, stone borders, surface treatment, and surrounding space working together as one calm design, black and gray granite, muted greenery, soft diffused daylight, premium but restrained mood, no readable gravestone names or dates, no render look, no drone view, no clutter, no theatrical mourning scene, composed to crop safely for a wide 16:9 memorial design service page.` 

- 4. Optional gallery replacement brief
- target page / component: first gallery slot on `/galerija` and homepage gallery only if later review still finds the current image too bright / flare-heavy
- current image problem: current image is real and strong, but may feel slightly brighter and more flare-heavy than the darker, calmer surrounding imagery
- intended emotional tone: serene, premium, polished, quietly impressive
- exact subject matter: a finished black-granite memorial with clean foreground surface treatment and balanced cemetery surroundings, photographed in soft light without obvious lens flare
- composition: portrait-friendly with one dominant monument and clearly readable foreground craftsmanship
- crop/aspect ratio requirements: must survive `4:5` and `5:6` portrait crops
- lighting: soft morning or light overcast, no blown highlights, no strong flare streaks
- color palette: dark polished granite, soft green background, restrained white/gray ground materials
- level of realism: realistic documentary gallery photo
- avoid: dramatic sun flare, excessive haze, visible readable names/dates, fake cinematic grading, overly empty background
- recommended output dimensions: at least `1600x2000`
- image type: realistic documentary gallery photo
- final prompt:
- `A highly realistic portrait-oriented photograph of a finished premium black granite memorial in a calm Lithuanian cemetery setting, with polished stone detail, clean ground treatment, balanced greenery in the background, soft natural daylight, no harsh lens flare, no blown highlights, no readable gravestone names or dates, no staged mourners, no CGI symmetry, no dramatic cinematic grading, premium quiet mood, composed to crop safely for 4:5 and 5:6 memorial gallery use.` 

- Which weak slots should NOT be generated:
- Historical workshop/about imagery should not be generated under any circumstance
- Existing real homepage hero and the strongest real service images should not be replaced by generated imagery because they currently add trust
- Most gallery imagery should remain real-only because it implies actual completed memorial work
- If the user can source a true real materials photo, that is still preferable to generation; generation is recommended here only because the slot is an editorial materials still life rather than a claimed real client project

- Exact recommended next step for ChatGPT / image generation:
- First generate 2 to 3 materials-image candidates using the materials brief
- If none feel strong enough, then generate 1 didmenine candidate and 1 projektavimas candidate as secondary support options
- Do not generate historical, founder, workshop, or gallery work replacements unless a later review explicitly decides that a real slot must be supplemented
- This was a planning-only pass; no website code was changed and no images were generated

Open questions / next steps:
- Decide whether to try a real sourced materials photo first or go straight to image generation for the materials slot
- If generation is used, review multiple candidates side by side against the live site before replacing any asset

---

### 2026-05-06
What changed:
- Pulled the latest `main` and completed an expert visual QA / art-direction evaluation after the real-image replacement pass
- Reviewed the current website visually in the in-app browser and compared the implemented production assets directly to judge consistency, tone, crop quality, and section strength
- Did not modify website code, because no single crop issue was severe enough to justify a speculative tweak during an evaluation-only pass

Files changed:
- docs/AI_CHANGELOG.md

Notes:
- Overall verdict:
- The original-image pass is directionally successful. The site still feels calm, credible, and appropriate for memorial / cemetery stonework work, and it is materially stronger than the earlier AI-looking state
- The images are consistent enough to keep moving with the current set, but they are not yet fully unified at an art-direction level
- The current image system does not need a global filter or CSS micro-grain treatment right now
- Strongest sections after the replacement:
- `/` homepage hero: the real hero still feels premium and composed, and it supports the typography well
- `/paminklu-gamyba`: the hero crop works naturally on mobile and keeps the site’s calm, premium tone
- `/kapu-dengimas-plokstemis`: strong documentary credibility and a good match between the service promise and the image content
- `/kapavieciu-restauravimas`: one of the most trustworthy pages after the replacement; the hero feels real, respectful, and appropriately restrained
- `/paminklu-graviravimas`: strong craft signal, good human presence, and one of the most convincing service images in the set
- Trust/about imagery on the homepage: the archival workshop photo plus the tulip image feel authentic and respectful rather than decorative
- Weakest sections after the replacement:
- `/medziagos`: `src/assets/materials.jpg` is now the clearest visual mismatch on the site. It reads more like a polished product mockup/render than the rest of the documentary cemetery/stonework imagery
- `/didmenine-prekyba-paminklais`: the image is real, but it feels less premium and less intentional than the stronger service pages; the blurred foreground monument on the left is a little distracting
- `/kapavieciu-projektavimas`: this page is acceptable, but compared with the best pages it feels more documentary/overcast and less art-directed; not broken, just a bit less elevated
- `/galerija`: overall improved, but the first gallery image remains a touch brighter and more flare-heavy than the calmer, darker memorial imagery elsewhere
- Crop / position observations:
- Mobile-width in-app browser review did not reveal any catastrophic crop failures on `/`, `/paslaugos`, `/paminklu-gamyba`, `/kapavieciu-projektavimas`, `/kapu-dengimas-plokstemis`, `/kapavieciu-restauravimas`, `/paminklu-graviravimas`, `/autoriniai-paminklai`, `/didmenine-prekyba-paminklais`, `/galerija`, `/medziagos`, and `/kontaktai`
- The service card / service hero split was a good decision. It reduces obvious crop compromises and generally holds together well on the reviewed mobile-width layout
- No image demanded an immediate object-position fix strongly enough to justify touching production code during this pass
- Historical authenticity:
- The archival workshop image still feels documentary and respectful
- The about/trust pairing works because one image carries heritage and the other carries human care without slipping into sentimentality
- Consistency verdict:
- The site is visually consistent enough as-is to continue working on content and replacement assets
- The inconsistency is not general color drift across every image; it is more concentrated in one or two outlier assets
- Because of that, a global visual treatment would be too blunt
- Shared image treatment recommendation:
- Do not add CSS micro-grain
- Do not add a site-wide filter pass
- If a unifying treatment is explored later, it should be a very light asset-prep normalization only, focused on a few outliers rather than the whole library
- The most that may be worth testing later is a very subtle warm-neutral / contrast normalization on selected images, but only after the remaining wrong image is replaced
- `materials.jpg` verdict:
- It should remain temporary only
- It is now the one image that most visibly breaks the site’s authenticity and should be replaced before launch if possible
- Route note:
- `docs/AI_TASKS.md` listed shorthand paths like `/restauravimas`, `/graviravimas`, and `/didmenine-prekyba`, but the live service routes currently reviewed are `/kapavieciu-restauravimas`, `/paminklu-graviravimas`, and `/didmenine-prekyba-paminklais`
- Exact recommended next task:
- Replace `src/assets/materials.jpg` with a real materials / granite-samples photo that matches the documentary tone of the rest of the site
- After that, do one small follow-up visual polish pass focused only on whether `/didmenine-prekyba-paminklais` and `/kapavieciu-projektavimas` still need better source images or tiny crop tuning
- Validation performed:
- Local dev server reviewed in the in-app browser at mobile-width
- Pages checked: `/`, `/paslaugos`, `/paminklu-gamyba`, `/kapavieciu-projektavimas`, `/kapu-dengimas-plokstemis`, `/kapavieciu-restauravimas`, `/paminklu-graviravimas`, `/autoriniai-paminklai`, `/didmenine-prekyba-paminklais`, `/galerija`, `/medziagos`, `/kontaktai`
- Direct asset review also performed on key implemented production images in `src/assets/` to judge consistency beyond what the animated browser viewport shows
- No code changes were made, so lint/test/build were not rerun for this evaluation-only pass

Open questions / next steps:
- Can the user provide one strong real photo of granite slabs / sample stones / showroom materials to replace `src/assets/materials.jpg`?
- After that single replacement, reassess whether `/didmenine-prekyba-paminklais` still needs a stronger source image or whether it becomes acceptable in the final overall mix

---

### 2026-05-06
What changed:
- Pulled the latest `main` and completed the first real-image replacement pass using only files from `incoming-images/`
- Replaced the homepage hero, Trust section images, homepage gallery images, gallery page image set, and all service imagery that previously looked AI-generated or placeholder-like
- Added separate service detail hero image support so wide service-page crops can use better-suited real photos without breaking the existing portrait service cards
- Kept the current layout, typography, spacing, color palette, routing, and component structure unchanged
- Left the materials image unchanged because the current `incoming-images/` set still does not contain a strong real materials/stones photo

Files changed:
- src/components/site/Hero.tsx
- src/components/site/Trust.tsx
- src/components/site/Gallery.tsx
- src/pages/Galerija.tsx
- src/lib/services.ts
- src/pages/ServicePage.tsx
- src/assets/home-hero-original.webp
- src/assets/about-history-archive.jpg
- src/assets/about-values-tulips.jpg
- src/assets/gallery-memorial-01.webp
- src/assets/gallery-memorial-02.webp
- src/assets/gallery-memorial-03.webp
- src/assets/gallery-memorial-04.webp
- src/assets/service-paminklai-card.jpg
- src/assets/service-paminklai-hero.webp
- src/assets/service-projektavimas-card.jpg
- src/assets/service-projektavimas-hero.webp
- src/assets/service-dengimas-card.jpg
- src/assets/service-dengimas-hero.webp
- src/assets/service-restauravimas-card.jpg
- src/assets/service-restauravimas-hero.jpg
- src/assets/service-graviravimas-original.jpg
- src/assets/service-autoriniai-original.jpg
- src/assets/service-didmenine-original.jpg
- docs/AI_CHANGELOG.md

Notes:
- Replacement mapping:
- `src/components/site/Hero.tsx`
- old slot `src/assets/hero-monument.jpg`
- new source `incoming-images/hero/akmensdarbai-hero.webp`
- final asset `src/assets/home-hero-original.webp`
- `src/components/site/Trust.tsx`
- old slot `src/assets/heritage-bw.jpg`
- new source `incoming-images/about/intro.png`
- final asset `src/assets/about-history-archive.jpg`
- old slot `src/assets/heritage-modern.jpg`
- new source `incoming-images/about/values.png`
- final asset `src/assets/about-values-tulips.jpg`
- `src/components/site/Gallery.tsx` and `src/pages/Galerija.tsx`
- old slot `src/assets/gallery-1.jpg`
- new source `incoming-images/gallery/gallery-5.webp`
- final asset `src/assets/gallery-memorial-01.webp`
- old slot `src/assets/gallery-2.jpg`
- new source `incoming-images/gallery/gallery-1.webp`
- final asset `src/assets/gallery-memorial-02.webp`
- old slot `src/assets/gallery-3.jpg`
- new source `incoming-images/gallery/gallery-2.webp`
- final asset `src/assets/gallery-memorial-03.webp`
- old slot `src/assets/gallery-4.jpg`
- new source `incoming-images/gallery/gallery-3.webp`
- final asset `src/assets/gallery-memorial-04.webp`
- `src/lib/services.ts` / service cards
- old slot `src/assets/service-paminklai.jpg`
- new source `incoming-images/site/cards/paminklu-gamyba.png`
- final asset `src/assets/service-paminklai-card.jpg`
- new detail hero source `incoming-images/hero/akmensdarbai-hero.webp`
- final detail hero asset `src/assets/service-paminklai-hero.webp`
- old slot `src/assets/service-projektavimas.jpg`
- new card source `incoming-images/site/cards/kapavieciu-projektavimas.png`
- final card asset `src/assets/service-projektavimas-card.jpg`
- new detail hero source `incoming-images/site/heroes/lotus-grave.webp`
- final detail hero asset `src/assets/service-projektavimas-hero.webp`
- old slot `src/assets/service-dengimas.jpg`
- new card source `incoming-images/site/cards/kapu-dengimas.png`
- final card asset `src/assets/service-dengimas-card.jpg`
- new detail hero source `incoming-images/site/heroes/completed-wide.webp`
- final detail hero asset `src/assets/service-dengimas-hero.webp`
- old slot `src/assets/service-restauravimas.jpg`
- new card source `incoming-images/site/cards/restauravimas.png`
- final card asset `src/assets/service-restauravimas-card.jpg`
- new detail hero source `incoming-images/site/heroes/restored-grave.jpeg`
- final detail hero asset `src/assets/service-restauravimas-hero.jpg`
- old slot `src/assets/service-graviravimas.jpg`
- new source `incoming-images/site/process/craft-process.png`
- final asset `src/assets/service-graviravimas-original.jpg`
- old slot `src/assets/service-autoriniai.jpg`
- new source `incoming-images/site/details/authorial-detail.png`
- final asset `src/assets/service-autoriniai-original.jpg`
- old slot `src/assets/service-didmenine.jpg`
- new source `incoming-images/site/cards/didmenine.png`
- final asset `src/assets/service-didmenine-original.jpg`
- Historical authenticity was preserved: the Trust archival image now uses the real workshop/history photo from `incoming-images/about/intro.png`
- Decorative `incoming-images/home/stones/stone-*` and `incoming-images/home/stones/strip-*` were not used for replacements and remain excluded from content-image use
- `src/assets/materials.jpg` was intentionally left unchanged in `src/components/site/Materials.tsx` and `src/pages/Medziagos.tsx` because no current `incoming-images/` file is a strong, believable real materials photo for that wide section
- Weak/problematic source intentionally not used as primary imagery: `incoming-images/site/details/projektavimas.png`, because it still reads too synthetic/render-like next to the stronger real photos
- Alt text was updated where the new real imagery changed the subject significantly
- Validation performed:
- `npm run lint` passed
- `npm test` passed
- `npm run build` passed
- Build still reports the pre-existing non-blocking warnings about outdated Browserslist data and the ambiguous Tailwind class `duration-[1200ms]`
- Live visual validation was done in the in-app browser on the local dev server for mobile-width checks on `/`, `/paslaugos`, `/paminklu-gamyba`, `/kapu-dengimas-plokstemis`, and `/galerija`
- Desktop/tablet crop risk remains low because the replacement pass kept the existing aspect-ratio wrappers and `object-cover` behavior intact, and the most crop-sensitive area was improved by splitting service card and service hero imagery instead of forcing one image to serve both roles

Open questions / next steps:
- A proper real materials/stones image is still needed to replace `src/assets/materials.jpg`
- `service-projektavimas-hero.webp` is visually strong but still the heaviest new image asset; if performance tuning becomes a priority, this hero should be the first candidate for a lighter export pass
- A true wide-screen human visual pass in a resizable browser would still be useful before final launch, especially for the new service detail hero crops on large monitors

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
