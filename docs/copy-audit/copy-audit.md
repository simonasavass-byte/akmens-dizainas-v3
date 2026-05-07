# Copy Audit

Audit date: 2026-05-07

Goal: compare current v3 website copy against the original `akmensdarbai.lt` website before any rewrite pass.

## High-level verdict

The current v3 site has three different copy problems:

1. Factual grounding problems
   - placeholder contact details
   - unsupported numbers / guarantees / timings
   - invented business details in structured data and contact UI
2. Tone problems
   - some sections sound polished, brand-editorial, or AI-composed rather than like a real Lithuanian stonework business
3. Source-drift problems
   - a large part of the current service and homepage copy does not come from the original site’s wording style or factual framing

The original site is much plainer, more repetitive, and more literal. The current site often improves readability, but it also introduces unverified claims and a more stylized tone that sometimes stops sounding like the real company.

## Main risks first

### 1. Placeholder contacts and business details

- Location:
  - `src/pages/Index.tsx`
  - `src/pages/Kontaktai.tsx`
  - `src/components/site/CtaBlock.tsx`
  - `src/components/site/SiteHeader.tsx`
  - `src/components/site/SiteFooter.tsx`
- Current text:
  - `+370 600 00 000`
  - `Kalvarijų g. 125, Vilnius`
  - `Rungos g. 18, Elektrėnai`
  - `I–V 9:00–18:00 · VI 10:00–14:00`
  - `telephone: +37060000000`
- Original/source text:
  - `Telefonai: +370 5 2752628, +370 698 70380`
  - `Kalvarijų g. 125, Vilnius, LT-08221`
  - `Rungos g. 18, Elektrėnai`
  - `Darbo laikas: I-V 8.00-17.00`
  - `VI-VII nedirbame`
- Problem type:
  - invented or placeholder business facts
- Recommended rewrite direction:
  - replace all placeholder phone and working-hours text with original website details first
  - verify whether both original phone numbers should remain visible or one should be primary
  - keep address formatting close to source unless the owner wants a simplified presentation
- Confidence:
  - high

### 2. Unsupported experience / quantity / guarantee claims

- Location:
  - `src/components/site/Trust.tsx`
  - `src/lib/services.ts`
- Current text:
  - `20+ metų patirties`
  - `1200+ atliktų darbų`
  - `10 m. garantija granitui`
  - `10 metų granitui`
- Original/source text:
  - `Akmens darbais ir paminklų gamyba užsiimame nuo 1991 m.`
  - `Dabartinį imonės pavadinimą UAB "Akmens darbai" įgijome 2003 metais.`
- Problem type:
  - unsupported / potentially invented numbers and guarantee claims
- Recommended rewrite direction:
  - anchor experience wording to `nuo 1991 m.` and, if needed, distinguish company-name/history separately
  - remove `1200+` unless the owner confirms it
  - remove guarantee claims unless backed by real company policy
- Confidence:
  - high

### 3. Unsupported service-process promises and timelines

- Location:
  - `src/lib/services.ts`
  - all service pages generated from that file
- Current text examples:
  - `4–8 sav.`
  - `1–2 sav. projektui`
  - `2–4 sav.`
  - `3–10 d.`
  - `2–4 mėn.`
  - `1–2 variantai`
  - `Parodome vizualizaciją ir pateikiame aiškią sąmatą.`
  - `Etapus rodome.`
  - `Sutariame kainas, terminus ir tiekimo grafiką.`
- Original/source text:
  - original service pages captured so far are much more direct and sparse
  - examples:
    - `Projektuojame, gaminame ir statome kokybiškus granito paminklus.`
    - `Kokybiškai atliekame paminklų graviravimo darbus ant įvairių dydžių ir formų paminklų.`
- Problem type:
  - invented or unsupported operational promises
- Recommended rewrite direction:
  - treat current timelines, process steps, and scope strips as provisional copy, not factual copy
  - in the rewrite pass, replace with simpler service-specific statements grounded in the original site and owner-confirmed process
- Confidence:
  - high

## Detailed findings

### Homepage hero is cleaner than source, but partly invented

- Location:
  - `src/components/site/Hero.tsx`
- Current text:
  - `Granito paminklai ir kapaviečių sprendimai.`
  - `Viską suderiname su Jumis — nuo pirmo eskizo iki sumontuoto paminklo vietoje.`
- Original/source text:
  - source uses more direct lists like `Paminklai, paminklų gamyba`, `Paminklų graviravimas`, `Kapų dengimas plokštėmis`
- Problem type:
  - partially invented / more editorial than source
- Recommended rewrite direction:
  - keep the homepage concise, but bring it closer to the source business language: production, installation, graviravimas, dengimas
  - avoid sweeping “full journey” phrasing unless confirmed by owner
- Confidence:
  - medium

### Homepage services intro sounds polished and abstract

- Location:
  - `src/components/site/HomeServices.tsx`
- Current text:
  - `Ką darome akmens studijoje.`
  - `Septynios paslaugos vienoje vietoje: paminklai, projektai, dangos, graviravimas ir restauravimas.`
- Original/source text:
  - original site uses literal service names, repeated plainly
- Problem type:
  - too generic / marketing-like
- Recommended rewrite direction:
  - replace abstract summary language with a more literal service list closer to source terminology
- Confidence:
  - medium

### Materials section is likely mostly invented

- Location:
  - `src/components/site/Materials.tsx`
  - `src/pages/Medziagos.tsx`
- Current text:
  - named stone variants with country abbreviations
  - descriptive notes such as `Gilus, vientisas tonas` and `Subtili tekstūra`
- Original/source text:
  - I did not capture a reliable original materials page equivalent
- Problem type:
  - potentially invented / unsupported catalog detail
- Recommended rewrite direction:
  - verify whether the original company actually presents these exact granite names and sourcing countries
  - if not confirmed, simplify to a grounded “dirbame su keliomis granito rūšimis, pavyzdžius parodome vietoje” style
- Confidence:
  - medium

### About section mixes one real anchor with invented metrics

- Location:
  - `src/components/site/Trust.tsx`
- Current text:
  - `Akmens dirbtuvės nuo 2003-ųjų.`
  - `Dirbame su granitu daugiau nei dvidešimt metų.`
  - metrics list
- Original/source text:
  - `Akmens darbais ir paminklų gamyba užsiimame nuo 1991 m.`
  - `Dabartinį imonės pavadinimą UAB "Akmens darbai" įgijome 2003 metais.`
  - `Įmonės direktorė Inga Varnauskienė.`
- Problem type:
  - partially wrong / source-drift
- Recommended rewrite direction:
  - restore the distinction between `nuo 1991 m.` and the `2003` company-name/legal milestone
  - if an about section remains, it should sound factual, almost archival, not startup-brand styled
- Confidence:
  - high

### Gallery CTA promises price sharing not seen in source

- Location:
  - `src/pages/Galerija.tsx`
- Current text:
  - `Parašykite — pasidalinsime panašiais sprendimais ir kainos diapazonu.`
- Original/source text:
  - no captured source support for this exact pricing promise
- Problem type:
  - unsupported promise
- Recommended rewrite direction:
  - simplify to inviting contact or examples without pricing-range promise unless owner confirms
- Confidence:
  - medium

### Contact page is a mix of placeholder facts and lead-gen wording

- Location:
  - `src/pages/Kontaktai.tsx`
- Current text:
  - `Atsakome per vieną darbo dieną.`
  - `Konsultacija ir preliminari sąmata — be mokesčio.`
  - placeholder phone number and hours
- Original/source text:
  - direct contact details and working hours
  - no captured evidence for `one business day` response promise
- Problem type:
  - unsupported promise + factual mismatch
- Recommended rewrite direction:
  - prioritize restoring exact real contact details and hours
  - reduce promise language unless the owner wants it and confirms it
- Confidence:
  - high

### Footer line sounds like design/brand copy rather than company copy

- Location:
  - `src/components/site/SiteFooter.tsx`
- Current text:
  - `Akmens studija memorialinėms erdvėms. Vilnius, Elektrėnai, visa Lietuva.`
- Original/source text:
  - original site appears more literal and operational
- Problem type:
  - too polished / AI-like
- Recommended rewrite direction:
  - simplify to a literal business descriptor based on source services
- Confidence:
  - medium

### Not found page is in English and off-brand

- Location:
  - `src/pages/NotFound.tsx`
- Current text:
  - `Oops! Page not found`
  - `Return to Home`
- Original/source text:
  - no source comparison needed; this is inconsistent with the Lithuanian site
- Problem type:
  - language mismatch
- Recommended rewrite direction:
  - replace with simple Lithuanian fallback copy
- Confidence:
  - high

### Service pages are broadly the biggest rewrite surface

- Location:
  - `src/lib/services.ts`
  - `src/pages/ServicePage.tsx`
- Current text:
  - highly expanded service intros, `scope`, `includes`, `whenRelevant`, and `process`
- Original/source text:
  - captured originals are much shorter and more literal:
    - `Projektuojame, gaminame ir statome kokybiškus granito paminklus.`
    - `Kokybiškai atliekame paminklų graviravimo darbus ant įvairių dydžių ir formų paminklų.`
    - `Kapų dengimas plokštėmis ... palengvina kapavietės priežiūrą ... suteikia kapavietei išbaigtumo.`
- Problem type:
  - AI-like expansion
  - unsupported detail
  - mismatch with real business tone
- Recommended rewrite direction:
  - next rewrite pass should start here
  - keep page structure if desired, but radically simplify wording and strip unsupported subclaims
- Confidence:
  - high

### SEO copy is useful, but often more polished than source

- Location:
  - `index.html`
  - `src/pages/*.tsx`
  - `src/lib/services.ts`
- Current text examples:
  - `kapaviečių sprendimai`
  - `medžiagų biblioteka`
  - `autoriniai, individualūs paminklai`
- Original/source text:
  - source leans toward direct keyword/service phrasing:
    - `Paminklų gamyba Vilniuje, Elektrėnuose`
    - `Kapų dengimas plokštėmis Vilniuje, Elektrėnuose`
    - `Paminklų graviravimas Vilniuje, Elektrėnuose`
- Problem type:
  - useful but over-stylized
- Recommended rewrite direction:
  - keep SEO clarity, but move titles/descriptions closer to real service phrasing and real geographies
- Confidence:
  - medium

### Remaining wrong-company-name instances

- Location:
  - `docs/AI_CONTEXT.md`
  - `docs/image-generation/materials-brief.md`
  - `public/favicon-source.svg`
- Current text:
  - `Akmens Dizainas`
- Original/source text:
  - company name is `Akmens Darbai`
- Problem type:
  - wrong company name
- Recommended rewrite direction:
  - these are not visible website copy in production except `favicon-source.svg` metadata if reused later
  - fix in a cleanup pass, but do not treat docs-only references as launch blockers
- Confidence:
  - high

## Current text that can likely be kept with light refinement

- Service names themselves are mostly aligned with the business
- Geography pairing `Vilnius, Elektrėnai` is aligned with source
- Core offer categories are aligned:
  - paminklų gamyba
  - graviravimas
  - kapų dengimas plokštėmis
  - restauracija / restauravimas
  - didmena
- Image captions in gallery are now semantically reasonable after the last QA pass

## Image/topic vs text mismatches related to copy

- `/didmenine-prekyba-paminklais`
  - visual already noted as semantically weak in prior QA
  - copy also sounds more like generic B2B positioning than the original site’s direct production/sales tone
- `/kapavieciu-projektavimas`
  - image is acceptable but source grounding for this exact expanded copy is weak
- `/medziagos`
  - image now works, but copy has the highest risk of being a neatly invented catalog layer

## Recommended rewrite plan

### Priority 1: factual / wrong / invented copy

- Replace placeholder phone number, hours, and structured-data phone
- Verify and correct all contact addresses and formatting from original source
- Remove or verify:
  - `1200+ atliktų darbų`
  - `10 m. garantija granitui`
  - service timelines
  - `vieną darbo dieną`
  - `be mokesčio`
- Rebuild about/history around:
  - `nuo 1991 m.`
  - current company name from `2003`

### Priority 2: AI-like visible homepage and service copy

- Rewrite homepage hero/support paragraph in simpler Lithuanian
- Rewrite `HomeServices` intro
- Rewrite all service-page intros, accents, includes, and process blocks
- Rewrite footer descriptor

### Priority 3: SEO / meta refinements

- Bring titles/descriptions closer to direct source phrasing
- Reduce editorial phrases like `kapaviečių sprendimai` and `medžiagų biblioteka` if they are not how the business speaks

### Priority 4: minor polish

- Localize the `404` page into Lithuanian
- Tighten gallery CTA wording
- Verify whether materials naming should remain detailed or become simpler

## Recommended next task

Do a copy rewrite pass in two phases:

1. Factual correction pass
   - contact data
   - history dates
   - unsupported numbers/promises

2. Visible copy rewrite pass
   - homepage
   - services
   - contact/footer
   - SEO strings

That rewrite should preserve layout and structure, but replace current invented/polished language with simpler copy grounded in the original site and confirmed business facts.
