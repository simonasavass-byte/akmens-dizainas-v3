# AI_TASKS

## Current task

Perform Phase 1 copy correction: factual fixes and source-grounded SEO cleanup before any full tone rewrite.

## Goal

Use the completed copy audit to fix the most important factual and unsupported-copy issues in the current Akmens Darbai v3 website.

This is not a full rewrite yet. This is a controlled factual correction pass.

The goal is to remove or correct invented / placeholder / unsupported claims first, while preserving the current layout and overall visual direction.

## Source materials

Use these as source context:

- `docs/copy-audit/current-site-copy.md`
- `docs/copy-audit/original-site-copy.md`
- `docs/copy-audit/copy-audit.md`
- original website URL: `https://akmensdarbai.lt/`

Before changing copy, briefly verify whether the original-site extraction in `docs/copy-audit/original-site-copy.md` looks complete enough for factual correction. If key facts are missing or uncertain, do not invent. Document uncertainty in `docs/AI_CHANGELOG.md`.

## Phase 1 priorities

Fix only high-confidence factual or obviously wrong copy issues first.

### 1. Contact details and working hours

Replace placeholder / invented details with original-source details where confirmed.

The copy audit identified these likely placeholder/current values:

- `+370 600 00 000`
- `telephone: +37060000000`
- `I–V 9:00–18:00 · VI 10:00–14:00`

The original-source details captured by the audit include:

- `Telefonai: +370 5 2752628, +370 698 70380`
- `Kalvarijų g. 125, Vilnius, LT-08221`
- `Rungos g. 18, Elektrėnai`
- `Darbo laikas: I-V 8.00-17.00`
- `VI-VII nedirbame`

Apply these only where they are confirmed in the extracted original-source file. Keep formatting clean and modern, but do not change the facts.

### 2. Remove or neutralize unsupported claims

Remove or rewrite unsupported numbers/promises unless the original source clearly supports them.

High-risk claims identified by audit:

- `1200+ atliktų darbų`
- `10 m. garantija granitui`
- `10 metų granitui`
- specific service timelines such as `4–8 sav.`, `1–2 sav.`, `2–4 sav.`, `3–10 d.`, `2–4 mėn.`
- `Atsakome per vieną darbo dieną`
- `Konsultacija ir preliminari sąmata — be mokesčio`
- precise process promises such as visualizations, exact estimates, staged updates, supply schedules, unless supported by source

Preferred approach:

- delete unsupported claim if it is not needed
- or replace it with calmer, factual, non-promissory wording
- do not add new claims to compensate

### 3. Correct company history wording

The audit found that the current about/history copy may blur two different facts:

- work/activity in stonework from `1991 m.`
- company/name milestone from `2003 m.`

Rewrite only the factual framing around this distinction, using the original source wording if possible.

Do not invent a new emotional brand story.

### 4. Wrong company name cleanup

Find and fix remaining wrong-company-name instances where appropriate:

- visible UI
- metadata
- alt text
- source SVG metadata if relevant
- docs if they are active workflow context

Correct company name:

- `Akmens Darbai`

Wrong name to remove/avoid:

- `Akmens Dizainas`

Do not make broad unrelated doc rewrites just to clean historical workflow notes unless those notes are actively used as current context.

### 5. Lithuanian 404 page

Replace English 404 copy with simple Lithuanian copy.

Do not redesign the 404 page.

Example direction:

- `Puslapis nerastas`
- `Grįžti į pradžią`

### 6. SEO cleanup in this phase

Yes, keep SEO in mind now, but do not do aggressive SEO rewriting yet.

For Phase 1:

- remove unsupported SEO claims
- keep real service keywords visible
- keep real location keywords where supported: Vilnius, Elektrėnai
- prefer direct source-like phrases such as `paminklų gamyba`, `paminklų graviravimas`, `kapų dengimas plokštėmis`, `paminklų restauravimas`, `granito paminklai`
- avoid overly editorial phrases if they replace clearer service keywords

Do not keyword-stuff.
Do not add fake locality/service claims.
Do not invent pages or services for SEO.

## What not to do in this task

Do not perform the full tone rewrite yet.

Do not broadly rewrite:

- all homepage copy
- all service-page intros
- all process blocks
- all materials copy
- all gallery copy

unless the current text is clearly factually wrong or unsupported.

Do not redesign layout, typography, spacing, colors, image system, routing, or visual style.

## Files likely involved

Inspect and update only as needed:

- `src/pages/Index.tsx`
- `src/pages/Kontaktai.tsx`
- `src/pages/NotFound.tsx`
- `src/components/site/CtaBlock.tsx`
- `src/components/site/SiteHeader.tsx`
- `src/components/site/SiteFooter.tsx`
- `src/components/site/Trust.tsx`
- `src/components/site/Materials.tsx`
- `src/pages/Medziagos.tsx`
- `src/lib/services.ts`
- SEO/meta helper files and page metadata files if they contain unsupported/wrong text
- any structured data / schema files if they contain placeholder phone, address, hours, or wrong company name

## Deliverable

Update `docs/AI_CHANGELOG.md` with:

- factual corrections made
- unsupported claims removed or neutralized
- contact details corrected
- history wording corrected
- 404 localization result
- SEO/meta corrections made
- source files changed
- any facts left uncertain and needing owner confirmation
- recommended next task for Phase 2 visible copy rewrite

## Validation

Run:

- lint
- tests if available
- production build

Document results in `docs/AI_CHANGELOG.md`.

## ChatGPT handoff summary requirement

At the end of the task, provide a short ChatGPT handoff summary that includes:

- whether the task was completed
- whether changes were committed and pushed
- latest commit hash
- all important created/updated file paths
- whether the task was docs-only or included production code changes
- whether lint/test/build passed
- any blockers, uncertainties, or recommended next step

Keep the handoff concise and optimized for copy-pasting back into ChatGPT.

## Priority

High
