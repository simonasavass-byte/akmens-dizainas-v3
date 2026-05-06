# AI_TASKS

## Current task

Create the first website image replacement version using only authentic original images.

## Goal

Replace the current AI-looking / placeholder website images with the best available real image candidates from `incoming-images/`, while preserving the existing Akmens Dizainas v3 design direction.

This is the **original-images-only version**. Do not use newly generated images and do not create fake historical, company, cemetery, stonework, or process imagery.

## Context

The current Akmens Dizainas website is mostly built and working. The favicon is implemented. Previous technical/responsive fixes have already been completed. The main remaining issue is image quality and authenticity.

Many current website images look AI-generated or placeholder-like. The user has added original real image candidates locally under `incoming-images/`.

The priority for this version is authenticity, trust, and a grounded Lithuanian memorial / cemetery stonework feeling.

## Image source location

Use only this folder in the working tree:

- `incoming-images/`

The current source image folder structure is:

- `incoming-images/about/`
- `incoming-images/brand/`
- `incoming-images/gallery/`
- `incoming-images/hero/`
- `incoming-images/home/`
- `incoming-images/site/`

Do not expect or require any other incoming image folders for this task.

If `incoming-images/` is missing, stop and update `docs/AI_CHANGELOG.md` saying the image folder is missing. Do not guess image choices from existing placeholder images only.

## Important exclusions

Do not use existing decorative `stones/stone-*` or `stones/strip-*` PNG assets as real image replacements.

Those assets look like generated decorative UI objects and should not be treated as authentic company / stonework / cemetery photos.

They may only remain if they are already used as small decorative UI assets and still work visually. If they are currently used in the site, inspect them and decide whether to keep, reduce, replace, or remove them, then document that decision in `docs/AI_CHANGELOG.md`.

## Historical image rule

There is at least one old / historical photo showing the real person who started the memorial / stonework business.

Historical images like this must be preserved as real images. They may be cleaned, cropped, resized, contrast-corrected, or gently improved, but they must not be replaced with generated fake historical imagery.

If the historical image is used, keep it documentary and authentic. Avoid overprocessing.

## Instructions for Codex

Act as a senior web designer / art director and careful implementation engineer.

1. Pull latest changes.
2. Inspect current website image usage, imports, public assets, and components.
3. Inspect all available images in the six `incoming-images/` folders.
4. Choose the strongest real original image for each website image slot.
5. Replace current AI-looking / placeholder images with real original images where the replacement clearly improves the site.
6. Preserve current layout, typography, spacing, colors, routing, copy, and component structure unless a tiny image-related adjustment is required to prevent broken crops.
7. Do not redesign the website.
8. Do not introduce generated images.
9. Do not replace authentic historical / company images with fake imagery.
10. Optimize images for web use where appropriate.

## Image handling requirements

For copied / exported final assets:

- Put production-ready final assets in the existing project image/public asset structure, following the current repo conventions.
- Use clear final filenames, for example `home-hero-original.webp`, `about-history-original.webp`, `gallery-memorial-01.webp`, etc.
- Prefer `.webp` or optimized `.jpg` for photos.
- Use `.png` only when transparency is genuinely needed.
- Keep file sizes reasonable.
- Do not commit unnecessarily huge source files if optimized versions are enough.
- Preserve meaningful alt text or improve alt text where images are replaced.

## Crop and visual quality requirements

For every replacement, verify desktop, tablet, and mobile crop behavior.

Avoid:

- faces or important memorial details cut awkwardly
- text on stones being cropped badly
- overly bright / washed-out images
- overly dark images with lost detail
- images that look too casual or low quality for a premium memorial service site
- images that create generic stock-photo feeling
- fake-looking overprocessing

Prefer:

- calm, grounded real photos
- real cemetery / memorial / stonework context
- detail images with stone texture, engraving, craft, hands, or material
- authentic historical / company images for history/about sections
- consistent warm-neutral tone that fits the existing website design

## Implementation scope

Allowed:

- update image imports / paths
- add optimized final image assets
- adjust image `object-position` or equivalent only where needed for crop quality
- update alt text for replaced images
- update `docs/AI_CHANGELOG.md`

Not allowed:

- redesign layout
- change typography system
- change color palette
- rewrite content
- change routing or unrelated logic
- introduce generated images
- remove important historical authenticity

## Deliverable

After implementation, update `docs/AI_CHANGELOG.md` with:

- summary of replaced images
- mapping from old/current image slot to new original image
- source folder / source filename used
- final filename / path used in the site
- any images intentionally left unchanged and why
- any weak/problematic original images not used
- any missing image needs for a later hybrid/generated-support version
- notes about decorative `stone-*` / `strip-*` assets if they are still used
- validation performed: lint/test/build and responsive visual check notes

## Validation

Run the project’s standard checks, at minimum:

- lint, if available
- tests, if available
- production build

If any check fails, document exactly what failed and why in `docs/AI_CHANGELOG.md`.

## Priority

High
