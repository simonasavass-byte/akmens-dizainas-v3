# AI_TASKS

## Current task

Perform an expert visual QA / art-direction evaluation after the real-image replacement pass.

## Goal

Evaluate the current Akmens Dizainas v3 website as a senior web designer / art director after the authentic original images have been implemented.

This is primarily an evaluation task. Do not redesign the site and do not make a new image replacement pass yet.

## Context

The website has already received a first original-images-only replacement pass. The main question now is whether the new real images work well together visually across the whole website.

The user is concerned that the real photos come from different sources and may feel visually inconsistent. We need to evaluate whether the site needs a subtle shared image treatment, such as very light tone normalization or micro-grain, but we should not apply it until the need is clearly justified.

## Instructions for Codex

Act as a senior web designer, art director, and careful QA reviewer.

1. Pull latest changes.
2. Run the local dev server if needed.
3. Review the website in the in-app browser and scroll through the key pages.
4. Evaluate the current visual result after the real-image replacement pass.

Review these pages at minimum:

- `/`
- `/paslaugos`
- `/paminklu-gamyba`
- `/kapavieciu-projektavimas`
- `/kapu-dengimas-plokstemis`
- `/restauravimas`
- `/graviravimas`
- `/autoriniai-paminklai`
- `/didmenine-prekyba`
- `/galerija`
- `/medziagos`
- `/kontaktai`

Evaluate:

- whether the new real images fit the current design direction
- whether the site still feels premium, calm, trustworthy, and appropriate for memorial / cemetery stonework
- whether any images feel too casual, noisy, bright, dark, low-quality, or off-brand
- whether the real images feel visually inconsistent across sections
- whether any section became weaker after image replacement
- whether any image crop is awkward on mobile, tablet, or desktop-like widths
- whether service card images and service detail hero images work well as separate art-directed crops
- whether historical / archive imagery feels authentic and respectfully presented
- whether `materials.jpg` being left unchanged now feels acceptable or visibly inconsistent
- whether a subtle shared image treatment is recommended

## Image treatment evaluation

Evaluate whether the real images need a unifying visual treatment.

Possible treatment options to consider, but do not apply yet unless it is a tiny, clearly safe proof-of-concept:

- very subtle warm-neutral tone normalization
- very light desaturation
- very gentle contrast normalization
- very subtle CSS-based micro-grain overlay
- small object-position fixes where a crop is clearly bad

Important:

- Do not apply strong filters.
- Do not make the site look vintage, dirty, overly stylized, or Instagram-filtered.
- Do not reduce image clarity too much.
- Do not destructively edit original/historical images.
- Preserve authenticity.

## Implementation scope

This is an evaluation pass.

Allowed:

- update `docs/AI_CHANGELOG.md`
- make only a tiny obvious image-related fix if it is clearly necessary and safe, such as an `object-position` adjustment

Not allowed unless separately approved later:

- redesign layout
- change typography
- change color palette
- rewrite copy
- replace another full batch of images
- add a global image filter/treatment without documenting why
- generate new images

## Deliverable

Update `docs/AI_CHANGELOG.md` with a clear expert visual QA report including:

- overall verdict
- strongest sections after image replacement
- weakest sections after image replacement
- specific images or pages that need crop/position fixes
- whether images feel consistent enough as-is
- whether subtle shared image treatment / micro-grain is recommended
- whether `materials.jpg` should remain temporary or must be replaced before launch
- exact recommended next task
- validation performed, including pages and viewport types checked

## Validation

If any code was changed, run standard checks:

- lint, if available
- tests, if available
- production build

If no code was changed, document that this was an evaluation-only pass.

## Priority

High
