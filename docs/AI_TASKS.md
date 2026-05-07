# AI_TASKS

## Current task

Perform a final visual QA and image-caption/content consistency pass after the materials image replacement.

## Goal

Review the current Akmens Darbai website after the real-image replacement pass and the new materials image implementation.

This is primarily a QA / review task. Do not redesign by default.

The user specifically wants to verify whether the images have correct text/captions/descriptions near or below them, because screenshots cannot be manually reviewed in ChatGPT right now.

## Context

The website has already gone through:

- favicon implementation
- technical/responsive inspection
- service detail routing fix
- SEO helper improvement
- navigation/accessibility improvement
- first real original-image replacement pass
- visual QA after real-image replacement
- generated materials image candidate handoff
- materials image implementation using `src/assets/materials-editorial-granite.webp`

The materials image now appears to work well visually. The active version should remain the clean no-logo version unless a clear issue is found.

The current task is to check final image fit, captions/text around images, alt text, and any remaining weak visual areas before launch/polish.

## Important design rules

- Do not redesign the website.
- Do not change layout, typography, spacing, colors, routing, or unrelated logic unless there is a clearly broken issue.
- Do not add global grain/filter/color treatment.
- Preserve the calm, premium, trustworthy Lithuanian memorial / stonework direction.
- Historical/founder/company archive photos must remain real and must not be replaced.
- Generated imagery should remain limited to the materials slot unless a later approved task says otherwise.
- Company name is `Akmens Darbai`, not `Akmens Dizainas`.

## Review scope

Review at minimum:

- `/`
- `/medziagos`
- `/galerija`
- `/paslaugos`
- `/paminklu-gamyba`
- `/kapavieciu-projektavimas`
- `/kapu-dengimas-plokstemis`
- `/kapavieciu-restauravimas`
- `/paminklu-graviravimas`
- `/autoriniai-paminklai`
- `/didmenine-prekyba-paminklais`
- `/kontaktai`

Check desktop/tablet/mobile where practical.

## Image and caption/content QA

For every visible image slot or image-driven card/section, check:

- Does the nearby heading/caption/label match the actual image?
- Does the service card image match the service title?
- Does the service detail hero image match the service page topic?
- Do gallery captions, labels, or surrounding copy imply something inaccurate?
- Does the materials image still match the text about granite and supplier materials?
- Do alt texts describe the actual visible image, not the old placeholder image?
- Are any images misleading, e.g. appearing like a completed real client project when they are generated/support imagery?
- Are any images visually strong but semantically mismatched?
- Are there any remaining `Akmens Dizainas` strings or wrong-company-name text in image-related content, alt text, metadata, docs shown in the website, or visible UI?

If a caption/alt text is clearly wrong, make a small safe correction.

If an image looks visually acceptable but the caption is questionable, document the concern in `docs/AI_CHANGELOG.md` and only change it if the correction is obvious and low-risk.

## Final visual QA

Also check:

- `/medziagos` with the new materials image
- homepage materials section with the new materials image
- whether `/didmenine-prekyba-paminklais` still feels like an outlier
- whether `/kapavieciu-projektavimas` still feels like an outlier
- whether the first gallery image is still too bright / flare-heavy
- whether any crop fails on mobile
- whether any image feels too fake, too glossy, too casual, or too far from the rest of the site

## Allowed changes

Allowed only if needed:

- fix incorrect captions/labels/nearby image text
- fix incorrect image alt text
- fix wrong company name if found
- tiny image `object-position` adjustment if a crop is clearly broken
- update `docs/AI_CHANGELOG.md`

Not allowed:

- replacing images unless there is a clearly broken or clearly mismatched asset and the fix is obvious
- redesigning sections
- changing content strategy broadly
- changing typography/colors/layout
- adding generated images to new slots
- changing unrelated files

## Deliverable

Update `docs/AI_CHANGELOG.md` with:

- pages reviewed
- image/caption/alt-text consistency findings
- any small fixes made
- any remaining visual risks before launch
- whether `/didmenine-prekyba-paminklais` still needs future work
- whether `/kapavieciu-projektavimas` still needs future work
- whether the first gallery image should remain or be reconsidered later
- final verdict on the new materials image
- validation results

## Validation

If code/content changes are made, run:

- lint
- tests if available
- production build

If no code/content changes are made, document that this was a review-only pass and explain why checks were or were not run.

## Priority

High
