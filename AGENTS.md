# AGENTS.md

This repository uses shared project context files as the source of truth for AI-assisted work.

Before making any changes, always read:
- AGENTS.md
- docs/AI_CONTEXT.md
- docs/AI_TASKS.md
- docs/AI_CHANGELOG.md

## Project rules

- Preserve the existing website direction unless the task explicitly says otherwise.
- Do not redesign by default.
- Work fidelity-first: keep layout, spacing, typography, colors, and interaction patterns stable unless a requested task requires a specific change.
- Keep changes focused only on the current task.
- Do not invent business facts, testimonials, service details, addresses, prices, legal claims, or client information.
- Do not replace existing content with generic agency-style copy.
- Keep copy human, clear, direct, and suitable for a real Lithuanian business website.
- Preserve responsiveness and existing routes.
- Prefer small, reviewable changes over large uncontrolled rewrites.
- If something is unclear, state the uncertainty clearly in the final summary and in docs/AI_CHANGELOG.md.

## Technical context

- This is an independent Vite + React website.
- Use the existing project stack and conventions.
- Do not introduce new libraries unless the task clearly requires them.
- Before finishing, run the relevant available checks when possible:
  - npm run lint
  - npm test
  - npm run build

## Required workflow

1. Read the context files listed above.
2. Execute only the current task from docs/AI_TASKS.md.
3. Make focused changes.
4. Update docs/AI_CHANGELOG.md after completing work.
5. In the final response, summarize:
   - what changed
   - files changed
   - checks run
   - open questions or risks

## Important

Do not rely only on chat history. Treat the repo context files as the shared source of truth between ChatGPT, Codex, and the human owner.