# AI_TASKS

## Current task

Create a full website copy audit against the original Akmens Darbai website before rewriting text.

## Goal

Audit all current visible and SEO copy in the Akmens Darbai v3 website and compare it against the original website:

- `https://akmensdarbai.lt/`

The user noticed invented-sounding and AI-like wording in the new website. The goal is to identify exactly what should be rewritten, what should come from the original website, and what needs human Lithuanian copy refinement.

This is primarily a planning/audit task. Do not rewrite the whole website yet.

## Context

The website has already gone through:

- favicon implementation
- technical/responsive inspection
- service detail routing fix
- SEO helper improvement
- navigation/accessibility improvement
- first real original-image replacement pass
- generated materials image replacement
- final image/caption visual QA

The next issue is copy quality and factual grounding.

Some current text may be:

- invented
- too generic
- too AI-like
- too polished/corporate
- unsupported by the original company website
- semantically inconsistent with the real Akmens Darbai business

The user wants copy that sounds human, grounded, Lithuanian, and appropriate for a real cemetery/stonework company.

## Important rules

- Company name is `Akmens Darbai`, not `Akmens Dizainas`.
- Do not invent company history, numbers, promises, guarantees, or capabilities.
- Preserve a calm, premium, trustworthy tone, but make it human and grounded.
- Prefer real, specific, simple Lithuanian over generic AI-style marketing language.
- Do not over-polish into corporate language.
- Do not redesign layout or typography.
- Do not rewrite the website yet unless there is a clearly wrong company name, typo, or obviously false text.

## Source copy extraction

Extract/capture copy from the original website:

- `https://akmensdarbai.lt/`

If the site can be accessed locally/from the environment, scrape or manually extract the relevant visible copy from its pages.

At minimum try to capture:

- homepage copy
- services copy
- materials/stone/granite copy if present
- gallery/project copy if present
- contact/footer copy
- any company/about/history wording
- SEO-relevant titles/descriptions if discoverable

If some original pages are inaccessible, document that clearly instead of guessing.

## Current website copy extraction

Extract all current copy from the new repo implementation, including:

- page headings
- section headings
- paragraphs
- buttons/CTAs
- navigation labels
- service titles
- service descriptions
- image captions/labels
- alt text
- SEO/meta titles
- SEO/meta descriptions
- footer/header text
- any structured content arrays or content constants

Save this into:

- `docs/copy-audit/current-site-copy.md`

## Original website copy output

Save extracted original website copy into:

- `docs/copy-audit/original-site-copy.md`

If extraction is incomplete, include an `Extraction limitations` section.

## Copy audit output

Create:

- `docs/copy-audit/copy-audit.md`

In this audit, identify:

1. Copy that sounds AI-generated
2. Copy that may be invented or unsupported
3. Copy that is too generic/marketing-like
4. Copy that may not match the real Akmens Darbai business
5. Copy that should be replaced with original website wording
6. Copy that should be rewritten in simpler, more human Lithuanian
7. SEO text that is useful but should be made more grounded
8. Any mismatches between current image/topic and current text
9. Any remaining wrong-company-name instances

For each issue, include:

- page/component/file location if known
- current text
- original/source text if available
- problem type
- recommended rewrite direction
- confidence level: high / medium / low

## Recommended rewrite plan

At the end of `copy-audit.md`, create a prioritized rewrite plan:

- Priority 1: factual/wrong/invented copy
- Priority 2: AI-like visible homepage/service copy
- Priority 3: SEO/meta copy refinements
- Priority 4: minor tone polish

Do not perform the rewrite in this task unless the correction is tiny and obvious.

## Deliverable

Create/update:

- `docs/copy-audit/current-site-copy.md`
- `docs/copy-audit/original-site-copy.md`
- `docs/copy-audit/copy-audit.md`
- `docs/AI_CHANGELOG.md`

In `docs/AI_CHANGELOG.md`, summarize:

- original website extraction status
- current website copy extraction status
- main copy risks found
- whether any code/content changes were made
- recommended next task for actual copy rewrite

## Validation

If this is docs-only, no lint/test/build is required.

If any website code/content is changed, run:

- lint
- tests if available
- production build

## Priority

High
