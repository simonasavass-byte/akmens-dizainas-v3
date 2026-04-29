# AI_TASKS

## Current task

Set up and validate the shared ChatGPT + Codex workflow files.

## Goal

Confirm that Codex can use the repository context files as its source of truth before making future website changes.

## Instructions for Codex

1. Read:
   - AGENTS.md
   - docs/AI_CONTEXT.md
   - docs/AI_TASKS.md
   - docs/AI_CHANGELOG.md
2. Do not change the website design or production code for this first test.
3. Inspect the repository structure enough to understand where the main app files live.
4. Run available checks if practical:
   - npm run lint
   - npm test
   - npm run build
5. Update docs/AI_CHANGELOG.md with:
   - confirmation that the context files were read
   - short repository structure notes
   - checks run and results
   - any open questions or risks

## Constraints

- Do not redesign anything.
- Do not edit website UI components.
- Do not change copy, layout, styling, assets, routes, dependencies, or configuration unless required only to complete validation.
- Keep this as a workflow validation task.

## Deliverable

A short update in docs/AI_CHANGELOG.md confirming whether the shared workflow setup is usable.

## Priority

High