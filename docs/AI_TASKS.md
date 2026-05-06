# AI_TASKS

## Current task

Create a professional image audit and replacement plan before changing website images.

## Context

The current Akmens Dizainas website is mostly built and working. The design direction should be preserved. The main remaining issue is image quality and image selection: many current website images are AI-generated or placeholders, while the user has original/real images organized in folders.

The task is not to redesign the website. The task is to inspect image usage and prepare a clear replacement plan so the real images can be placed correctly in the next step.

## Image source location

Use the folder below if it exists in the working tree:

- incoming-images/

Expected subfolders may include:

- about
- brand
- cards
- details
- gallery
- hero
- home
- process
- site
- stones

If `incoming-images/` is missing, stop and update `docs/AI_CHANGELOG.md` saying the image folder is missing and list the expected folder structure. Do not guess image choices from existing placeholder images only.

## Instructions for Codex

Inspect the current website implementation and image usage as a senior web designer / art director.

Review:

- current image imports and where each image appears
- desktop layout
- tablet layout
- mobile layout
- crop behavior and aspect ratios
- image hierarchy
- whether each image slot needs landscape, portrait, square, detail, process, material, or hero imagery
- which original images from `incoming-images/` best fit each current website image slot

For each website image slot, produce a replacement recommendation:

- current file / import being replaced
- current usage location/component/page
- recommended original source image filename
- why that image fits the slot
- crop/aspect-ratio risk
- whether the image can be used as-is or should be manually cropped/exported first
- recommended final filename
- recommended format: jpg, webp, png, or svg
- approximate recommended dimensions

Important design criteria:

- Preserve the existing design direction
- Keep the site premium, calm, trustworthy, and appropriate for cemetery stonework / memorial services
- Prefer real, grounded, high-quality images over generic or AI-looking visuals
- Avoid images that feel too busy, low quality, badly cropped, overly bright, or too casual for a premium website
- Keep visual logic close to the current website structure
- Do not redesign the website
- Do not replace images in this task unless explicitly instructed later
- Do not change layout, typography, colors, content, routing, or unrelated files

## Deliverable

Update `docs/AI_CHANGELOG.md` with a clear image replacement plan, including:

- image slots reviewed
- recommended image mapping
- strongest images to use
- weak/problematic images to avoid
- missing images, if any
- next steps for actual replacement

## Priority

High