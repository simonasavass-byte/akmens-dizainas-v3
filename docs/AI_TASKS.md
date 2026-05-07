# AI_TASKS

## Current task

Create a visual handoff package for ChatGPT image generation.

## Goal

Prepare all visual context needed for ChatGPT to generate the next missing/support image candidates accurately, starting with the weak `materials.jpg` / `/medziagos` slot.

This is a handoff-only task. Do not generate images. Do not replace website images. Do not change website code.

## Context

The Akmens Dizainas v3 website has already received a first authentic original-image replacement pass. The real-image direction is successful overall and should be preserved.

A later expert visual QA found that the main remaining visual mismatch is `src/assets/materials.jpg`, used on `/medziagos` and in the homepage materials section. It currently reads like a polished mockup/render and breaks the otherwise documentary, real-world tone.

Secondary, non-urgent possible weak areas are `/didmenine-prekyba-paminklais`, `/kapavieciu-projektavimas`, and possibly the first gallery image if it still feels too bright / flare-heavy. However, the first generation attempt should likely start with materials only.

Historical, founder, workshop, family, archival, and real completed-work imagery must remain real-only and must not be replaced with generated fake imagery.

## Instructions for Codex

Act as a senior web designer, art director, implementation engineer, and visual handoff assistant.

1. Pull latest changes.
2. Read `docs/AI_CHANGELOG.md`, especially the latest real-image replacement, visual QA, and image-generation brief entries.
3. Inspect the current website and current image assets.
4. Create a visual handoff package in the repo so ChatGPT can review the visual context through GitHub without the user manually uploading screenshots.
5. Do not change website code.
6. Do not replace images.
7. Do not generate images.
8. Do not redesign anything.

## Create this folder structure

Create:

- `docs/image-generation/`
- `docs/image-generation/screenshots/`
- `docs/image-generation/references/`

## Required file: `docs/image-generation/materials-brief.md`

Create a clear, self-contained brief for ChatGPT image generation.

Include:

- target image slot: `src/assets/materials.jpg`
- all pages/components where it is used
- current problem with the image
- why this slot is safe for generated support imagery
- exact recommended replacement subject
- required aspect ratio and recommended dimensions
- crop requirements for desktop/tablet/mobile
- tone reference notes from the current real-image website direction
- what must remain real-only and not generated
- final copy-ready image generation prompt in English
- negative prompt / avoid list
- recommended final filename and format
- exact next step after ChatGPT generates candidate images

Also include short secondary notes for:

- `/didmenine-prekyba-paminklais`
- `/kapavieciu-projektavimas`
- first gallery image, only if still relevant

These secondary notes should remain lower priority than materials.

## Required screenshots

Add screenshots exported from the local running site into:

- `docs/image-generation/screenshots/`

Required screenshots:

1. `/medziagos` full page or key above-the-fold screenshot
2. homepage materials section where `materials.jpg` appears
3. homepage hero as tone reference
4. `/paminklu-graviravimas` as tone reference
5. `/kapavieciu-restauravimas` as tone reference
6. `/didmenine-prekyba-paminklais` if easy to capture
7. `/kapavieciu-projektavimas` if easy to capture

Use clear filenames, for example:

- `medziagos-page.png`
- `home-materials-section.png`
- `home-hero-tone-reference.png`
- `graviravimas-tone-reference.png`
- `restauravimas-tone-reference.png`
- `didmenine-current.png`
- `projektavimas-current.png`

If screenshot export is not possible in the environment, still create `materials-brief.md` and document the limitation clearly in `docs/AI_CHANGELOG.md`.

## Required reference images

Copy reference image files into:

- `docs/image-generation/references/`

Include:

1. current `src/assets/materials.jpg`
2. current homepage hero final image
3. current graviravimas image
4. current restauravimas image
5. one or two other current real images that best represent the desired tone, if useful

Use clear filenames, for example:

- `current-materials.jpg`
- `reference-home-hero.webp`
- `reference-graviravimas.jpg`
- `reference-restauravimas.jpg`

Do not move or delete original production assets. Only copy references into the handoff folder.

## Important visual principles

The generated materials image should feel:

- realistic
- premium but not glossy luxury-ad style
- calm
- tactile
- grounded
- suitable for Lithuanian memorial / cemetery stonework
- consistent with the current real-image website direction

Avoid:

- fake historical/company imagery
- fake people
- fake completed client projects
- readable gravestone names or dates
- CGI or render look
- floating objects
- overly perfect symmetry
- purple/blue color casts
- dramatic cinematic contrast
- generic stock-photo feeling
- hyper-glossy showroom look

## Update `docs/AI_CHANGELOG.md`

Add a new entry with:

- summary of created visual handoff package
- exact paths to `materials-brief.md`
- exact paths to screenshots created
- exact paths to reference images copied
- any screenshot/export limitations
- recommendation that ChatGPT should first generate 2-3 `materials` candidates before touching secondary slots

## Validation

No website code changes are expected.

If only docs and copied reference/screenshot assets are changed, no lint/test/build is required. If any website code is accidentally changed, revert it or run the standard checks and document why.

## Priority

High
