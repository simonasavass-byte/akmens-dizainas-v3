# AI_CONTEXT

## Project

Akmens Dizainas website.

## Repository

- Repository: simonasavass-byte/akmens-dizainas-v3
- Visibility: private
- Stack: Vite + React + TypeScript + Tailwind CSS
- Deployment target: Vercel

## Purpose

This repo is used as a working website project and as a pilot for a shared ChatGPT + Codex workflow.

The goal of the workflow is to reduce manual copy-paste between ChatGPT and Codex by keeping stable project context, decisions, tasks, and change summaries inside the repository.

## Current status

The project is an independent Vite + React website prepared for GitHub and Vercel deployment.

Known project commands from package.json:

```sh
npm install
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

## Visual direction

- Preserve the existing website direction by default.
- Do not redesign unless the task explicitly requests it.
- Treat the current website as the source of visual truth unless a specific issue is documented in AI_TASKS.md.
- Keep layout, spacing, typography, colors, and responsive behavior stable unless the current task requires a focused change.

## Copy direction

- Lithuanian copy should sound natural, clear, and human.
- Avoid generic AI/agency language.
- Do not overpromise.
- Do not invent business details.
- Keep tone suitable for a real local Lithuanian business website.

## Important constraints

- Do not modify unrelated sections while completing a task.
- Do not introduce unnecessary dependencies.
- Do not remove working functionality unless the task requires it.
- Document changes in docs/AI_CHANGELOG.md after each Codex task.
- If a task affects design fidelity, explain exactly what changed and why.

## Shared AI workflow

ChatGPT is used for strategy, audit, copy, design judgment, and task formulation.

Codex is used for repository edits, implementation, cleanup, and checks.

The repo context files are the shared source of truth:

- AGENTS.md - permanent working rules
- docs/AI_CONTEXT.md - stable project context
- docs/AI_TASKS.md - current task
- docs/AI_CHANGELOG.md - completed changes and open questions

## Notes

This context file should stay concise. Add only stable project information here. Temporary implementation instructions should go into docs/AI_TASKS.md instead.