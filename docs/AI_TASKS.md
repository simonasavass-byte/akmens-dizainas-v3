# AI_TASKS

## Current task

Create a test implementation of the selected generated materials image candidate from the real uploaded file.

## Goal

Test how the selected generated materials image behaves inside the real Akmens Darbai website.

This is a controlled review pass, not a redesign.

The selected candidate should replace the current `src/assets/materials.jpg` only for review/testing purposes so the user can evaluate:

- realism
- trust feeling
- premium tone
- crop quality
- consistency with the existing real-image website direction
- whether optional logo overlay improves or weakens the result

## Context

The first authentic real-image replacement pass was successful overall.

The main remaining visual mismatch identified during expert QA was the current `materials.jpg` image used on `/medziagos` and in the homepage materials section.

ChatGPT generated several replacement candidates. The user selected the grounded editorial granite-sample composition without fake branding.

The actual selected image file has now been added locally under:

- `incoming-images/generated/granitas`

Important: this may be an image file without an obvious extension because it was renamed in Finder. Inspect the file type directly and handle it accordingly.

Do not use the old placeholder file:

- `docs/image-generation/generated-candidates/materials-selected-candidate.webp.base64.txt`

That file previously contained only `BASE64_PLACEHOLDER` and must be ignored for this task.

Historical/company/founder/workshop imagery must remain real-only.

This task only affects the materials image slot.

## Important rules

- Do not redesign the website.
- Do not modify unrelated pages.
- Do not replace any other images.
- Do not change typography.
- Do not change layout.
- Do not add global filters or grain.
- Keep the current calm Lithuanian memorial/stonework tone.
- Preserve the existing responsive behavior.
- Company name is `Akmens Darbai`, not `Akmens Dizainas`.
- Do not create AI-generated text or AI-generated logo inside the image.

## Candidate image handoff

Use this actual uploaded candidate file:

- `incoming-images/generated/granitas`

Inspect its real image type. Convert/export it as needed into the production asset structure.

Recommended production output:

- `src/assets/materials-editorial-granite.webp`

## Instructions for Codex

1. Pull latest changes.
2. Verify that `incoming-images/generated/granitas` exists.
3. Inspect its actual file type and dimensions.
4. Convert/export it into a production-ready `.webp` asset if needed.
5. Add the final asset into the existing project asset structure.
6. Replace only the current materials image usage with the selected candidate.
7. Preserve existing responsive crop behavior unless tiny object-position adjustments are needed.
8. Review `/medziagos` and homepage materials section on desktop/tablet/mobile.
9. If needed, make minimal safe crop/object-position adjustments only.

## Optional logo overlay experiment

After the clean no-logo version works:

Create ONE optional secondary experiment version using the REAL existing Akmens Darbai SVG logo from the project assets.

Rules:

- Use the real SVG logo only.
- Do not recreate the logo with AI.
- Do not use the wrong name `Akmens Dizainas`.
- Keep the overlay subtle.
- The logo should feel etched/engraved or lightly printed on the upper-right dark stone sample if that placement works naturally.
- Very low contrast.
- Small scale.
- Premium and believable.
- If it looks fake, forced, commercial, or reduces realism, discard the overlay version and keep the clean version only.

Do not replace the clean version automatically if the overlay version is worse.

## Deliverables

Update:

- the actual materials image implementation
- optional overlay experiment version if successful
- `docs/AI_CHANGELOG.md`

In `docs/AI_CHANGELOG.md` include:

- source file used: `incoming-images/generated/granitas`
- final production asset path
- where the new materials image is used
- whether crop adjustments were needed
- whether the logo overlay experiment succeeded or failed
- which version is currently active
- responsive QA notes
- whether the generated image improved the realism/trust/premium balance
- validation results

## Validation

Run:

- lint
- tests if available
- production build

Document results in `docs/AI_CHANGELOG.md`.

## Priority

High
