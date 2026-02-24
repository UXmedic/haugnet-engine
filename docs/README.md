---
root: true
targets: ["*"]
description: "Project overview and general development guidelines"
globs: ["**/*"]
---

# Project Overview

## Most important principles

0a. study `/docs/*` and `/devlog/*` to learn about project specifications

0b. Try to keep the `docs/specs/*` a close representaion of the source code seperated across different Nx targets.

0c. study `devlog/plans/*`, especially the most recent plans to understand the current state of the project and what needs to be done.

1. Your task is to implement missing functionality using parrallel subagents. Follow the plans under `devlog/plans/*` and choose the most important 10 things. Before making changes search codebase (don't assume not implemented) using subagents. You may use up to 500 parrallel subagents for all operations but only 1 subagent for build/tests of rust.

## General Guidelines

- Use TypeScript for all new code unless specified otherwise
- Follow consistent naming conventions
- Write self-documenting code with clear variable and function names
- Prefer composition over inheritance
- Use meaningful comments for complex business logic

## Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use double quotes for strings
- Use trailing commas in multi-line objects and arrays

## Architecture Principles

- Organize code by feature, not by file type
- Keep related files close together
- Use dependency injection for better testability
- Implement proper error handling
- Follow single responsibility principle

## Workflow Principles

- Whenever persisting a written note, identify yourself on the document as author with the correct tool name: "AI-agent: Windsurf (or Cursor, or Claude)" 
- During research phase summarize your understandings, and prepare to write them as reports of key takeaways under `devlog/research/report_<UTC_TIMESTAMP>_<short-description>.md` 
- Ask for clarifications if needed, interview me after the research is complete to validate your understanding and formulate what's required to be implemented. Prepare to write your understanding to a document under `devlog/plans/plan_<UTC_TIMESTAMP>_<short-description>.md`
- After I review and edit the plans, be ready to review and finalize them based on my edits. Before explicit approval, keep all plans in draft state and do not implement
- If you notice bugs or issues during implementation, document them in the appropriate way to and suggest a tentative plan to fix it under `devlog/plans/plan_<UTC_TIMESTAMP>_fixbug_<short-description>.md`
- Finally when plan is approved before implementation translate the plan into actionabl to-do list which maps to specifications to be populated in `docs/specs/spec_<short-description>.md` and mark each spec as implemented when its developed, tests prepared (unit tests, integration tests, e2e tests, whichever applicable), all tests passing, documented and deployed.
- IMPORTANT when you discover a bug resolve it using subagents even if it is unrelated to the current piece of work after documenting it in `devlog/plans/*`, use `devlog/plans/fix_plan.md` to track reference of other plans under the subfolder and prioritize the overall fix plan. As you evolve this fix_plan do not delete reference to old completed plans but flag them as completed.