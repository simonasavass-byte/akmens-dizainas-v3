# AI_TASKS

## Current task

Update verified Akmens Darbai contact information and make two small homepage text refinements.

## Goal

Replace placeholder, incomplete, or incorrect contact information with the verified business details from the provided reference screenshot, and apply two precise copy refinements requested by the user.

This is a focused website content task. Do not redesign the site.

## Verified contact information

Use the following details exactly and consistently across the website:

- Company name: UAB „Akmens darbai“
- Phone: +370 602 38031
- Email: akmensdarbai@inbox.lt
- Exhibition address: Rungos g. 8, Elektrėnai, 26109 Elektrėnų sav.
- Working hours:
  - Pr - Pn: 08:30 - 19:00 val
  - Š: 09:00 - 15:00 val
- Facebook visible label: AkmensDarbaiElektrenai

## Additional exact text edits

Apply these two user-approved homepage text refinements:

1. In the `Kaip dirbame` / process section, replace the current headline:

   `Aiškūs žingsniai, be paskubos.`

   with:

   `Aiškus procesas nuo pirmo pokalbio iki montavimo.`

2. In the hero headline, remove the final period from:

   `Granito paminklai ir kiti akmens darbai.`

   so the displayed headline becomes:

   `Granito paminklai ir kiti akmens darbai`

   Keep the existing line breaks and visual layout as much as possible. Only remove the final period.

## Important scope rules

- Work only on the current branch.
- Do not redesign the footer, contact section, header, hero, process section, or page layouts.
- Preserve the current visual style, typography, spacing, colors, and responsive behavior as much as possible.
- Do not change homepage hero images.
- Do not change gallery image layout.
- Do not overwrite existing image assets.
- Do not add generated images in this task.
- Do not invent additional company facts.
- Do not invent a Facebook URL unless a real URL already exists in the codebase.
- Do not rewrite other copy beyond the exact requested edits unless required to remove placeholder text from contact/footer areas.

## Tasks

1. Inspect the current footer/contact components and any contact page or contact section.
2. Replace any placeholder / lorem ipsum / incorrect contact text with the verified contact details above.
3. Remove any remaining lorem ipsum or obviously fake placeholder text from the footer/contact areas.
4. Make phone and email clickable where appropriate:
   - phone link: `tel:+37060238031`
   - email link: `mailto:akmensdarbai@inbox.lt`
5. If Facebook is shown as a link and a Facebook URL already exists in the codebase, keep that URL and update the visible label to `AkmensDarbaiElektrenai`.
6. If no Facebook URL exists, show only the visible label or leave the existing non-linked structure, but do not invent a URL.
7. Make sure the same contact details are used consistently wherever contact information appears.
8. Apply the two exact homepage text edits listed above.
9. Keep Lithuanian formatting natural and professional.
10. Update `docs/AI_CHANGELOG.md` with a short summary of the changes.

## Quality expectations

The final footer/contact information should feel like a real Lithuanian local business website:

- clear
- trustworthy
- not overdesigned
- no placeholder text
- no fake information
- no unnecessary copy

The two homepage text edits should be precise and should not cause layout regressions.

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
