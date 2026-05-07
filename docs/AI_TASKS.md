# AI_TASKS

## Current task

Create a generated-image variant plan for the Akmens Darbai website without replacing images yet.

## Goal

Prepare a controlled alternative visual direction where most current website images could be replaced with ChatGPT-generated support images for comparison.

This is a planning and handoff task only.

Do not generate images.
Do not replace website images.
Do not change production code.
Do not overwrite the current real-image direction.

The current real-image version should remain the safer launch baseline. The generated-image version should be treated as an experiment / alternate variant, not as the default final direction.

## Context

The current website now has:

- real original images implemented across most sections
- two important historical/about images that must remain real
- a generated materials image already implemented and accepted visually
- a mostly stable visual direction

The user now wants to explore a second version where every replaceable image is generated, while keeping:

- the two real history/about images
- the already generated materials image

This should be done carefully because a fully generated image set can easily reduce trust if it looks fake, too glossy, too symmetrical, or too generic.

## Must-keep images

Do not replace or propose replacement for:

1. the two history/about/trust images that show real company/history/human context
2. `src/assets/materials-editorial-granite.webp`
3. any image that represents authentic archive/company history or real founder/family/workshop material

These should remain real or already accepted.

## Generated variant principles

Generated images may be considered for:

- homepage hero
- service cards
- service detail hero images
- gallery-style supporting visuals
- wholesale/support pages
- project/design/restoration/engraving imagery

But the prompts must avoid fake proof claims.

Do not create images that pretend to be specific real completed client projects unless clearly framed as atmospheric/support imagery.

Generated images should feel:

- realistic
- grounded
- calm
- Lithuanian cemetery / memorial / granite stonework appropriate
- visually consistent with the current site tone
- not glossy stock
- not fantasy cemetery
- not overcinematic
- not overly symmetrical
- not AI-perfect

## Instructions for Codex

1. Pull latest changes.
2. Inspect current image usage across the site.
3. Identify every image slot that could be part of a generated-image variant.
4. Exclude the must-keep images listed above.
5. Create a slot-by-slot generated-image plan.
6. For each replaceable slot, write a precise image generation brief and a copy-ready English prompt.
7. Include crop/aspect requirements for each slot.
8. Identify which generated images would need portrait, landscape, or separate card/hero variants.
9. Recommend a safe order for generating images, starting with the highest-impact slots.
10. Do not change code or replace images in this task.

## Required output

Create:

- `docs/image-generation/generated-variant-plan.md`

The plan should include:

- current image slot / file path
- page/component usage
- whether it should be replaced in the generated variant
- whether it must remain real
- recommended generated subject
- visual tone
- crop/aspect ratio
- final filename suggestion
- copy-ready image generation prompt
- avoid list
- priority level

## Special attention areas

Give extra attention to:

- homepage hero
- service page hero images
- service card images
- `/didmenine-prekyba-paminklais`
- `/kapavieciu-projektavimas`
- gallery images

But keep the plan honest: if a real image is stronger than a generated alternative would likely be, say that clearly.

## Variant safety recommendation

At the end of the plan, recommend how to implement the generated-image variant safely later:

- whether to use a branch
- whether to use separate generated asset filenames
- whether to keep the real-image version untouched
- how to compare both versions visually

Preferred later implementation direction:

- create generated assets with separate filenames
- wire them in a controlled branch/experiment
- do not overwrite the current real-image assets
- compare live preview before deciding anything final

## Update changelog

Update `docs/AI_CHANGELOG.md` with:

- summary of generated-variant planning
- path to the new plan file
- which images are excluded from generation
- recommended next step for ChatGPT/image generation

## Validation

Docs-only task. No lint/test/build required unless code is changed.

## ChatGPT handoff summary requirement

At the end of the task, provide a short ChatGPT handoff summary that includes:

- whether the task was completed
- whether changes were committed and pushed
- latest commit hash if available
- all important created/updated file paths
- whether the task was docs-only or included production code changes
- whether lint/test/build was run or not needed
- any blockers, uncertainties, or recommended next step

Keep the handoff concise and optimized for copy-pasting back into ChatGPT.

## Priority

High
