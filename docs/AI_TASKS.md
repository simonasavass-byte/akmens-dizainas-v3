# AI_TASKS

## Current task

Update the footer/company description text in the Akmens Darbai website.

## Goal

Replace the short footer/company intro text under the Akmens Darbai logo with the verified company description provided by the user.

This is a focused website content task. Do not redesign the site.

## Exact text to use

Find the footer/company intro area that currently shows text similar to:

`Paminklų gamyba, graviravimas ir kapų dengimas plokštėmis. Vilnius, Elektrėnai.`

Replace that text with:

`UAB “Akmens darbai” specializuojasi akmens dirbinių gamyboje ir kapaviečių priežiūroje, siūlydami platų paslaugų pasirinkimą ir aukštą kokybę.`

Important: use Lithuanian quotes if the project typography/copy style prefers them:

`UAB „Akmens darbai“ specializuojasi akmens dirbinių gamyboje ir kapaviečių priežiūroje, siūlydami platų paslaugų pasirinkimą ir aukštą kokybę.`

Prefer the Lithuanian quote version if it matches surrounding copy.

## Important scope rules

- Work only on the current branch.
- Do not redesign the footer or any page layout.
- Preserve the current visual style, typography, spacing, colors, and responsive behavior as much as possible.
- Do not change images.
- Do not change gallery layout.
- Do not change contact details unless required by this exact text replacement.
- Do not rewrite other copy.
- Do not invent additional company facts.

## Tasks

1. Locate the footer/company intro text under or near the Akmens Darbai logo.
2. Replace only that intro text with the verified company description above.
3. Keep the existing footer structure and styling.
4. Make sure the text wraps naturally and does not break the footer layout on desktop or mobile.
5. Update `docs/AI_CHANGELOG.md` with a short summary of the change.

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
