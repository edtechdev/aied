---
title: "Primer"
created: "2026-11-13T16:50:00-05:00"
updated: "2026-11-13T16:50:00-05:00"
type: resource
summary: "An open-source authoring system from Wharton's Generative AI Labs that turns a structured interview with an educator into a runnable, adaptive learning simulation with its own mentor, practice and feedback agents."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
---

Primer is an open-source system for building an educational [[simulation]] by describing a lesson to an AI rather than by programming one. Its premise is that the educator's judgment, not the model's, should decide what the simulation teaches: a structured interview draws out what the instructor knows about the lesson and the students, a design document makes that knowledge reviewable, and nothing is built until the educator approves it.

## What you can do with it

The authoring interview asks one question at a time about the lesson, the students' level and prior knowledge, common misconceptions, the instructor's teaching approach, and the assessment criteria. Educators can speak or type, and can upload syllabi, lesson plans or rubrics. The interview produces a design document — objectives, scenario flow, characters, stakes and adaptation logic — that the educator reads as a lesson plan, revises and approves. Five agents then do the build: Intake, Design, Casting Director, Image Generation, and Experience Builder, which assembles the result into something assignable to one student or a class.

At runtime three student-facing agents run the session: a mentor who activates prior knowledge and surfaces misconceptions, a practice agent that plays either a counterpart in a roleplay or a tutee in a "teachback" exercise, and a feedback agent that works from the transcript to discuss specific moments and how the learning transfers. Each agent carries an in-world character plus an instructional layer that tracks goals and gathers evidence, and the educator receives individual and aggregate reports afterward.

## Who it is for

Instructors and instructional designers who can describe a lesson but not code; faculty developers running simulation-based course design; researchers studying educator-in-the-loop authoring and multi-agent educational workflows; and developers who want a working [[agentic-ai|agent pipeline]] to extend, since the prompts, templates, checklists, orchestration patterns and TypeScript code are released together.

## Notes and caveats

The authors call Primer an experimental prototype, not a vetted classroom product: it has not been evaluated as a learning intervention under classroom conditions, nor reviewed for FERPA, COPPA, state student-privacy law or district policy, so an institution that uses it with students owns that review. The software is MIT-licensed and free to use, but running a simulation requires model access with its own cost; the system is model-agnostic and can run on local or open-weight models, which is what makes deployment under tighter privacy rules possible. A white paper describing the architecture and prompts is linked from the project page. The repository showed 98 stars and 16 forks when checked in November 2026.

## Connected Concepts

- [[simulation]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
