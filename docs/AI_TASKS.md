# AI_TASKS

## Current task

Replace the 4 images in the homepage `Pastarųjų metų darbai` / selected works gallery section.

## Goal

Update only the homepage selected works/gallery section so it uses the four user-selected generated/improved-reality images instead of the current images.

This is a focused image integration task. Do not redesign the site.

## Important prerequisite

Before running this task, make sure these 4 image files exist in the repository. Use these exact filenames if possible:

- `incoming-images/generated-gallery/selected-work-1.webp` or `.png`
- `incoming-images/generated-gallery/selected-work-2.webp` or `.png`
- `incoming-images/generated-gallery/selected-work-3.webp` or `.png`
- `incoming-images/generated-gallery/selected-work-4.webp` or `.png`

If the files are not present, stop and report that the selected gallery images are missing.

## Selected image mapping

Use the 4 selected images in this exact visual order:

1. Top-left image: white gravel grave plot with black vertical monument in a green cemetery setting.
2. Top-right image: black polished family grave with cross-shaped vertical elements and bright flowers.
3. Bottom-left image: minimal horizontal granite grave with two vertical grey slabs.
4. Bottom-right image: grey/black covered grave plot photographed from an angled side perspective.

Do not use the centered front-view grey/black grave image in this homepage section.

## Recommended final asset destination

Copy/convert the selected images into the app asset directory using separate filenames. Do not overwrite existing real images.

Preferred destination filenames:

- `src/assets/generated/gallery-selected-work-1.webp`
- `src/assets/generated/gallery-selected-work-2.webp`
- `src/assets/generated/gallery-selected-work-3.webp`
- `src/assets/generated/gallery-selected-work-4.webp`

If the project does not already have `src/assets/generated/`, create it.

If conversion to `.webp` is not practical in the current environment, keep the original extension, but still place files in `src/assets/generated/` and use clean descriptive filenames.

## Important scope rules

- Work only on the current branch.
- Do not redesign the gallery section.
- Preserve current layout, image sizes, spacing, captions, typography, and responsive behavior as much as possible.
- Replace only the image sources used in the homepage `Pastarųjų metų darbai` selected works section.
- Do not change homepage hero.
- Do not change service page images.
- Do not change the full gallery page unless the same component is intentionally shared and unavoidable.
- Do not overwrite existing image assets.
- Do not remove existing images from the repo.
- Do not add the unused 5th front-view image to this homepage section.

## Tasks

1. Locate the homepage selected works/gallery component that displays the 4 images under `Pastarųjų metų darbai`.
2. Confirm how the current four images are imported or referenced.
3. Add/copy the selected 4 images into `src/assets/generated/` with the recommended filenames.
4. Update the component/image data so the selected works section uses those 4 generated images in the exact order listed above.
5. Keep the existing captions and location/year labels unless there is a clear mismatch caused by the replacement. If captions are adjusted, keep them short and neutral.
6. Make sure image alt text remains descriptive and not misleading.
7. Do not change the section layout.
8. Update `docs/AI_CHANGELOG.md` with a short summary of the change.

## Validation

After changes:

1. Run the available project validation command if it exists, for example lint/build/typecheck.
2. If no validation command is available or if it is not appropriate, say so in the handoff.
3. Check that the site still compiles if a build command is available.

## ChatGPT handoff summary requirement

At the end of the task, provide a short ChatGPT handoff summary that includes:

- whether the task was completed
- whether changes were committed and pushed
- latest commit hash if available
- all important changed file paths
- whether production code was changed
- whether lint/test/build was run and the result
- any blockers or uncertainties, especially if image files were missing

Keep the handoff concise and optimized for copy-pasting back into ChatGPT.

## Priority

High
