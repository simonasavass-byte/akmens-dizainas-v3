# AI_TASKS

## Current task

Add the missing service: `Kapavietės įrengimo darbai`.

## Goal

The new Akmens Darbai website is missing one service that exists on the original website: `Kapavietės įrengimo darbai`.

Add this service to the services list/navigation and create a dedicated service page for it, matching the current website design system and page structure.

This is a focused content and routing task. Do not redesign the site.

## Service to add

Primary service page title:

`Kapavietės įrengimo darbai`

Short service card / menu label may be:

`Kapaviečių įrengimas`

Preferred route:

`/kapavietes-irengimo-darbai`

Reference from original website:

`https://akmensdarbai.lt/kapavietes-irengimo-darbai/`

Use the original website only as content/context reference. Do not copy long text verbatim. Rewrite in the current website tone: clear, calm, professional Lithuanian.

## Content direction

This service should communicate full grave plot / cemetery plot installation work, including where appropriate:

- kapavietės įrengimo darbai
- paminklo ir kapavietės projektavimo sprendimai
- pamatų paruošimas / betonavimo darbai where already supported by the site structure
- paminklo montavimas
- kapavietės dengimas plokštėmis
- granito borteliai, skalda, plokštės, akmens apdaila
- kapavietės sutvarkymas iki galutinio rezultato

Do not overpromise. Do not invent certifications, guarantees, years of experience, or exact technical claims unless already present elsewhere in the codebase.

## Important scope rules

- Work only on the current branch.
- Do not redesign the website.
- Preserve current typography, spacing, layout rhythm, colors, components, and responsive behavior.
- Reuse existing service page patterns/components where possible.
- Do not change homepage hero.
- Do not change existing images unless needed to assign an existing suitable service image to this new page.
- Do not add generated images in this task.
- Do not overwrite assets.
- Do not remove existing services.
- Do not change unrelated copy.

## Tasks

1. Inspect current service data, service cards, navigation/menu links, routes, and service page structure.
2. Add the new service to the services list using a label like `Kapaviečių įrengimas` or the full title if the current pattern requires it.
3. Create a dedicated page/route at `/kapavietes-irengimo-darbai`.
4. Match the structure and design of existing service detail pages.
5. Write concise Lithuanian copy in the same tone as the current website.
6. Add this service to any relevant service index/list, dropdown, internal links, or sitemap-like arrays used by the app.
7. Use an existing suitable image asset if the current service page pattern requires an image. Do not add or generate new image files.
8. Ensure the route works and navigation links do not break.
9. Update `docs/AI_CHANGELOG.md` with a short summary of the change.

## Suggested copy seed

Use this as a starting point, but adjust to fit the existing page/component structure:

Headline:
`Kapavietės įrengimo darbai`

Short description:
`Įrengiame kapavietes nuo sprendimo suderinimo iki galutinio montavimo: paruošiame pagrindą, montuojame paminklus, granito bortelius, plokštes ir kitus akmens elementus.`

Possible section copy:
`Padedame suplanuoti kapavietės vaizdą pagal vietą, pasirinktą akmenį ir šeimos poreikius. Darbus atliekame nuosekliai: suderiname sprendimą, paruošiame pagrindą, pagaminame ar pritaikome akmens elementus ir sumontuojame juos kapavietėje.`

Possible bullet points:
- `Kapavietės projekto ir medžiagų suderinimas`
- `Pagrindo paruošimas ir montavimo darbai`
- `Granito plokščių, bortelių ir paminklo montavimas`
- `Skaldos, akmens apdailos ir kitų detalių pritaikymas`

Avoid salesy language. Keep it grounded and local-business appropriate.

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
- any blockers or uncertainties

Keep the handoff concise and optimized for copy-pasting back into ChatGPT.

## Priority

High
