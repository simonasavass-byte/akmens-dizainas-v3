# AI_TASKS

## Current task

Create a test implementation of the selected generated materials image candidate.

## Goal

Test how the selected generated materials image behaves inside the real Akmens Dizainas v3 website.

This is a controlled review pass, not a final permanent redesign.

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

ChatGPT generated several replacement candidates.

The currently selected candidate is the grounded editorial granite-sample composition without fake branding.

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

## Candidate image handoff

The selected image candidate is provided as base64:

- `docs/image-generation/generated-candidates/materials-selected-candidate.webp.base64.txt`

Decode this file into a real image asset.

Recommended output:

- `src/assets/materials-editorial-granite.webp`

## Instructions for Codex

1. Pull latest changes.
2. Decode the provided base64 candidate image into a production-ready `.webp` asset.
3. Add the decoded image into the existing project asset structure.
4. Replace only the current materials image usage with the selected candidate.
5. Preserve existing responsive crop behavior unless tiny object-position adjustments are needed.
6. Review `/medziagos` and homepage materials section on desktop/tablet/mobile.
7. If needed, make minimal safe crop/object-position adjustments only.

## Optional logo overlay experiment

After the clean no-logo version works:

Create ONE optional secondary experiment version using the REAL existing Akmens darbai SVG logo.

Rules:

- Use the real SVG logo only.
- Do not recreate the logo with AI.
- Keep the overlay subtle.
- The logo should feel etched/engraved or lightly printed on the upper-right dark stone sample.
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

- where the new materials image is used
- whether crop adjustments were needed
- whether the logo overlay experiment succeeded or failed
- which version is currently active
- responsive QA notes
- whether the generated image improved the realism/trust/premium balance

## Validation

Run:

- lint
- tests if available
- production build

Document results in `docs/AI_CHANGELOG.md`.

## Priority

High
