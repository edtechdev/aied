---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-09-23T20:15:00-04:00"
type: resource
summary: "An open Markdown dialect that turns a plain text file into an interactive course in the browser, with quizzes and runnable code, plus a multi-agent assistant for building courses with it."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---**LiaScript** is an extended Markdown dialect plus an interpreter for it. One plain text file becomes an interactive course: the same document can be read as a narrative, played as slides, or worked through as a course, all in the browser. Nothing needs installing to write or to read one.

## What you can do with it

Quizzes come in the forms a teacher expects, including multiple choice, matrix questions, text input, dropdowns, and gap texts, written directly in Markdown. Code blocks can be made editable and runnable for programming tutorials, and a macro system wraps JavaScript libraries into reusable blocks so interactive diagrams need no code from each author. A course is hosted wherever the author already keeps text, with no service to be locked into, and everything runs client-side, so a loaded course works offline. The LiaScript Exporter packages one as SCORM for Moodle, ILIAS, and other learning management systems.

## The teaching agent for building courses

The project also publishes a **teaching agent** for authoring LiaScript courses, licensed under the Boost Software License 1.0. Four agents for teaching, visual design, learner review, and publishing work around a single project file holding the course state, with a define-first workflow: objectives, audience, and didactics are settled before any material is written, and validation gates follow. A draft can be reviewed from a named learner persona to check cognitive load and assumed prior knowledge. The agent is editor-agnostic, generating configurations for Claude Code, Copilot, Codex, Cursor, or a web chat from one specification, and the repository doubles as a worked example, holding a six-unit course on the EU NIS2 Directive and a document describing how it was produced.

## Notes and caveats

LiaScript is free, with no paid tier and no account requirement, and is developed in the open under BSD-3-Clause, so institutions can self-host and modify it. The Live Classroom feature deserves a look before you rely on it at scale, since real-time synchronisation uses a shared service rather than purely local rendering. The teaching agent is young and lightly adopted, so treat it as a working prototype rather than a supported product.

## Connected Concepts
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
