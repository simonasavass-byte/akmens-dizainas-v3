# AI_TASKS

## Current task

Create image-generation briefs for the missing / weak website image slots.

## Goal

Use the current Akmens Dizainas v3 website, the previous real-image replacement pass, and the expert visual QA notes in `docs/AI_CHANGELOG.md` to define exactly which missing or weak images should be generated next.

This task is not to generate images and not to replace images in the website. The goal is to produce precise, art-directed prompts/specs that ChatGPT/image generation can use in a later step.

## Context

The website has already received a first authentic original-image replacement pass. A later expert visual QA pass found that the real-image direction is successful overall and that a global micro-grain / site-wide filter is not recommended.

The main current visual gap is `src/assets/materials.jpg`, which still reads like a polished mockup/render and should remain temporary only. The QA also identified weaker, non-critical areas: `/didmenine-prekyba-paminklais`, `/kapavieciu-projektavimas`, and possibly the first gallery image if it feels too bright / flare-heavy.

The next decision should be based on precise generation briefs, not vague image generation.

## Instructions for Codex

Act as a senior web designer, art director, and prompt strategist.

1. Pull latest changes.
2. Read `docs/AI_CHANGELOG.md`, especially the latest real-image replacement and visual QA entries.
3. Review the current website in the in-app browser if useful.
4. Identify the exact missing / weak image slots that could benefit from generated or enhanced-support images.
5. Do not change website code.
6. Do not replace any website images.
7. Do not generate images.
8. Write detailed image generation briefs that ChatGPT can later use to generate images.

## Required output in `docs/AI_CHANGELOG.md`

Add a new entry with:

### 1. Prioritized image needs

List only the slots that genuinely need new generated/support imagery, ranked by priority.

At minimum evaluate:

- `materials.jpg` / `/medziagos`
- `/didmenine-prekyba-paminklais`
- `/kapavieciu-projektavimas`
- first gallery image if it still feels too bright / flare-heavy

### 2. For each recommended generated image, define:

- target page / component
- current image problem
- intended emotional tone
- exact subject matter
- composition
- crop/aspect ratio requirements
- lighting
- color palette
- level of realism
- what to avoid
- recommended output dimensions
- whether it should look like a real photo, documentary photo, editorial product/material photo, or subtle atmospheric support image

### 3. Produce copy-ready prompts

For each recommended generated image, write a clean final prompt in English that can be copied directly into an image generator.

The prompts should aim for:

- realistic, premium, calm, Lithuanian memorial / stonework context
- no fake historical people
- no fake company founder / family / archival imagery
- no visible readable names or dates on gravestones
- no unrealistic cemetery scenes
- no overly glossy stock-photo feeling
- no AI-looking symmetry or fantasy styling
- no dramatic cinematic overprocessing

### 4. Decide which images should NOT be generated

Explicitly state if any weak slot should remain real-only or should be solved by sourcing a better real photo instead of generation.

## Important constraints

- Historical / archival images must remain real. Do not propose generated replacements for any founder, family, workshop history, or authentic company heritage imagery.
- Generated imagery may be used only as supporting material where authenticity is not tied to a specific real person or historical claim.
- Prefer real images when the image represents actual completed work, actual people, or real company history.
- The `materials` slot is the safest candidate for generated support imagery because it can be an editorial material/stones still life rather than a fake client project.

## Deliverable

Update `docs/AI_CHANGELOG.md` with:

- prioritized missing/weak image list
- generation briefs
- copy-ready prompts
- images that should remain real-only
- exact recommended next step for ChatGPT/image generation

## Validation

No code changes are expected. If no code is changed, document that this was a planning-only pass.

## Priority

High
