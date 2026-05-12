# AI_TASKS

## Current task

Replace the 4 images in the homepage `Pastarųjų metų darbai` section and clean up location/copy text.

## Goal

Update the homepage selected works/gallery section so it uses the four user-selected generated/improved-reality images instead of the current images.

Also remove `Vilnius` references from the visible website copy so the business presence is focused on `Elektrėnai` only.

This is a focused image and copy integration task. Do not redesign the site.

## Important prerequisite

Before running this task, make sure these image files exist in the repository/local project. The user currently has the files named:

- `1g`
- `2g`
- `3g`
- `4g`
- `5g`

Only 4 of them should be used in the homepage selected works section.

If the files are not yet in the repository, use the files from the local folder where the user placed them, or stop and report that the selected gallery images are missing.

## Exact selected image mapping

Use the images in this exact mapping/order:

- `selected-work-1` = `5g`
- `selected-work-2` = `4g`
- `selected-work-3` = `3g`
- `selected-work-4` = `1g`

Do NOT use `2g` in the homepage selected works section.

Visual order in the homepage `Pastarųjų metų darbai` section:

1. Top-left image: `5g` - white gravel grave plot with black vertical monument in a green cemetery setting.
2. Top-right image: `4g` - black polished family grave with cross-shaped vertical elements and flowers.
3. Bottom-left image: `3g` - minimal horizontal granite grave with two vertical grey slabs.
4. Bottom-right image: `1g` - grey/black covered grave plot photographed from an angled side perspective.

## Recommended final asset destination

Copy/convert the selected images into the app asset directory using separate filenames. Do not overwrite existing real images.

Preferred destination filenames:

- `src/assets/generated/gallery-selected-work-1.webp`
- `src/assets/generated/gallery-selected-work-2.webp`
- `src/assets/generated/gallery-selected-work-3.webp`
- `src/assets/generated/gallery-selected-work-4.webp`

If the project does not already have `src/assets/generated/`, create it.

If conversion to `.webp` is not practical in the current environment, keep the original extension, but still place files in `src/assets/generated/` and use clean descriptive filenames.

## Additional exact text cleanup

1. Remove the trailing period from the homepage intro paragraph that currently ends with:

`... restauruojame paminklus.`

The final visible text should end as:

`... restauruojame paminklus`

Keep typography and layout unchanged.

2. Remove `Vilnius` from visible website copy wherever it appears as a service/location reference.

The website should focus on `Elektrėnai` only.

Examples:

- Change `Vilnius ir Elektrėnai` to `Elektrėnai`
- Change `Vilniuje ir Elektrėnuose` to `Elektrėnuose`
- Change `Vilnius, Elektrėnai` to `Elektrėnai`
- Remove gallery/location labels that say `Vilnius`, or replace with `Elektrėnai` only if a location label is required by the current layout.

Do not remove `Vilnius` from non-visible developer notes or old changelog entries unless they are directly surfaced in the website UI.

## Important scope rules

- Work only on the current branch.
- Do not redesign the gallery section.
- Preserve current layout, image sizes, spacing, captions, typography, and responsive behavior as much as possible.
- Replace only the image sources used in the homepage `Pastarųjų metų darbai` selected works section.
- Do not change homepage hero image.
- Do not change service page images unless required by shared data and unavoidable.
- Do not change the full gallery page unless the same component is intentionally shared and unavoidable.
- Do not overwrite existing image assets.
- Do not remove existing images from the repo.
- Do not add the unused `2g` front-view image to this homepage section.
- Do not rewrite unrelated copy except for removing `Vilnius` references and the exact period cleanup above.

## Tasks

1. Locate the homepage selected works/gallery component that displays the 4 images under `Pastarųjų metų darbai`.
2. Confirm how the current four images are imported or referenced.
3. Add/copy the selected 4 images into `src/assets/generated/` with the recommended filenames.
4. Update the component/image data so the selected works section uses those 4 generated images in the exact order listed above.
5. Keep captions and location/year labels short and neutral. Remove or replace `Vilnius` labels so the website does not show Vilnius anywhere.
6. Make sure image alt text remains descriptive and not misleading.
7. Remove visible `Vilnius` references across the website and keep location wording focused on `Elektrėnai`.
8. Remove the final period from the homepage intro paragraph ending with `restauruojame paminklus.`
9. Do not change the section layout.
10. Update `docs/AI_CHANGELOG.md` with a short summary of the change.

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
