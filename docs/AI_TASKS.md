# AI_TASKS

## Current task

Perform Phase 2 visible copy rewrite: simplify and ground the website copy using the original Akmens Darbai website tone.

## Goal

Rewrite the most visible homepage, service, contact, footer, and SEO-facing copy so the website sounds:

- human
- grounded
- Lithuanian
- trustworthy
- calm
- professional
- realistic for a real memorial / stonework company

The previous audit identified that many sections currently sound:

- AI-generated
- over-polished
- too editorial
- too startup/agency-like
- too abstract
- too process-heavy

The goal of this phase is NOT to make the site more marketing-heavy.

The goal is to simplify and humanize the copy while preserving:

- SEO clarity
- current layout structure
- current visual design
- current service structure
- current information hierarchy

## Core writing rule

Write like a real Lithuanian stonework company.

Do NOT write like:

- a design agency
- a luxury brand campaign
- a startup landing page
- AI-generated SEO content
- emotional memorial poetry

Preferred tone:

- direct
- calm
- factual
- human
- confident without hype
- specific without overselling

## Source materials

Use:

- `docs/copy-audit/current-site-copy.md`
- `docs/copy-audit/original-site-copy.md`
- `docs/copy-audit/copy-audit.md`
- original website:
  - `https://akmensdarbai.lt/`

The rewrite should stay grounded in the original website’s factual/service tone, but improve readability and structure where appropriate.

## SEO guidance

Yes, continue thinking about SEO during the rewrite.

But SEO should be:

- natural
- service-driven
- location-grounded
- readable by humans first

Good keyword/service anchors:

- paminklų gamyba
- granito paminklai
- paminklų graviravimas
- kapų dengimas plokštėmis
- paminklų restauravimas
- kapaviečių projektavimas
- didmeninė prekyba paminklais
- Vilnius
- Elektrėnai

Avoid:

- keyword stuffing
- fake locality spam
- over-optimized repetitive phrasing
- abstract branding language replacing real service words

## Main rewrite priorities

### 1. Homepage hero and support copy

Current homepage copy is cleaner than the original site but still too editorial/process-oriented.

Rewrite it into:

- shorter
- more direct
- less “journey/process” language
- more grounded in actual services

Keep the homepage visually calm.

Avoid:

- dramatic emotional language
- abstract memorial language
- startup-style “solutions” wording

### 2. Homepage service intro

Current service-intro language sounds too abstract/brand-like.

Rewrite it closer to:

- direct service naming
- real work categories
- literal service clarity

## 3. Service page copy simplification

This is the largest rewrite surface.

Current service pages contain:

- too many process blocks
- too many polished subclaims
- unsupported operational detail
- AI-expanded explanations

Do NOT redesign service-page structure.

Instead:

- simplify intros
- simplify descriptions
- simplify process language
- reduce excessive detail
- reduce artificial “premium” wording
- keep useful service clarity

If some structured sections become too empty after simplification:

- shorten them
- do not refill them with invented marketing copy

## 4. Contact page rewrite

Keep:

- real contact details
- working hours
- locations

Reduce:

- lead-generation tone
- artificial responsiveness language
- unnecessary CTA pressure

## 5. Footer rewrite

Current footer still feels too design-agency/editorial.

Rewrite it into:

- simple
- factual
- calm
- business-grounded Lithuanian

## 6. Materials copy

Be careful.

The audit identified uncertainty about whether the current granite names/origins are real company data.

Do NOT invent or expand materials catalog language.

If the current copy feels too catalog-marketing-like:

- simplify it
- make it more grounded
- avoid fake technical detail

But do not delete useful material information if it appears credible.

## Important rules

- Do not invent facts.
- Do not invent guarantees.
- Do not invent timelines.
- Do not invent company history.
- Do not invent operational promises.
- Do not add fake expertise language.
- Do not add emotional grief/memorial storytelling.
- Do not redesign layout or typography.
- Do not change routing or structure unless a section becomes obviously broken.
- Preserve current image system.
- Preserve current service hierarchy.

## Rewrite style examples

Prefer:

- `Projektuojame, gaminame ir statome granito paminklus.`
- `Atliekame paminklų graviravimo darbus.`
- `Kapų dengimas plokštėmis palengvina kapavietės priežiūrą.`

Avoid:

- `Kuriame ilgaamžius memorialinius sprendimus.`
- `Nuo pirmos idėjos iki galutinio įgyvendinimo.`
- `Subalansuojame estetiką ir funkcionalumą.`
- `Padedame įprasminti atminimą.`
- generic AI-premium language

## Files likely involved

- `src/pages/Index.tsx`
- `src/pages/Kontaktai.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/HomeServices.tsx`
- `src/components/site/SiteFooter.tsx`
- `src/components/site/Materials.tsx`
- `src/components/site/Trust.tsx`
- `src/lib/services.ts`
- relevant SEO/meta files
- any visible CTA/service summary files

## Deliverable

Update:

- visible website copy
- SEO/meta copy where appropriate
- `docs/AI_CHANGELOG.md`

In `docs/AI_CHANGELOG.md` include:

- which sections were rewritten
- which sections were intentionally left mostly unchanged
- which phrases were simplified most heavily
- whether any sections still feel too AI-like
- whether any service pages still need future simplification
- SEO notes
- validation results

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
