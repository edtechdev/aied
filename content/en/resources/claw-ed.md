---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "A local-first AI teaching assistant that turns your own curriculum into editable lesson drafts, student materials, and slides using a model you choose."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**Claw-ED** is a local-first teaching assistant that drafts lessons from your own curriculum materials. A teacher imports their sources, asks for a lesson, and gets editable drafts along with student-facing materials and slides, generated with whichever model the teacher chooses rather than one fixed vendor.

## What you can do with it

The workflow runs from import through draft, review, and export, and drafts are treated as starting points that a teacher edits rather than finished handouts. Lesson jobs are queued and recoverable, so a long generation that fails can be resumed instead of restarted, and generated artifacts can be downloaded. It also exposes its tools to an agent through an MCP server and can connect to Google Drive, so a school can wire it into existing storage and scheduling.

The project is deliberately model-agnostic. It documents local Ollama models, budget OpenRouter routes, and hosted options side by side, and its model guide is dated, which makes clear that the recommendations are catalog-based starting points rather than teacher-scored judgments of quality.

## Notes and caveats

The software is free and open source under the MIT license for its original code, though third-party components keep their own terms, and running it means paying for your own model inference if you use a hosted model. The project labels itself a teacher-reviewed beta and says plainly in its README that passing its CI does not establish teaching quality across live models, which is the right way to read a green test suite in this space: it verifies the software, not the pedagogy. It is maintained by MacxLabs and accepts teacher-reviewed sample lessons as contributions.

## Connected Concepts
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]