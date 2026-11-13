---
title: "Primer"
created: "2026-11-13T16:50:00-05:00"
updated: "2026-11-13T17:40:00-05:00"
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

Primer is an [[open-source|open-source system]] for building an educational [[simulation]] by describing a lesson to an AI instead of programming one. The educator's judgment sets what the simulation teaches: an interview draws out what the instructor knows about the lesson and the students, a design document makes that knowledge reviewable, and nothing is built until the educator approves it.

## What you can do with it

The interview runs one question at a time: the lesson, the students' level and prior knowledge, common misconceptions, the instructor's approach, and how success will be assessed. Educators can speak or type, and can upload syllabi, lesson plans or rubrics. What comes back is a design document covering objectives, scenario flow, characters, stakes and adaptation logic, which the educator revises and approves the way they would a lesson plan. Five agents then build it: Intake, Design, Casting Director, Image Generation, and Experience Builder, which assembles the result for one student or a whole class.

At runtime three agents face the student. A mentor activates prior knowledge and surfaces misconceptions. A practice agent plays a roleplay counterpart or a teachback tutee, where the student explains a concept and revises the explanation when questioned. A feedback agent works from the transcript, discussing specific moments and how the learning carries beyond the scenario. Each agent has an in-world character and an instructional layer that tracks goals and gathers evidence, and the educator gets individual and aggregate reports.

## Who it is for

Instructors, instructional designers and faculty developers can describe a lesson in detail without wanting to write code for it. Researchers studying educator-in-the-loop authoring or [[agentic-ai|multi-agent workflows]] get a working system to inspect, and developers can extend it, because the prompts, templates, checklists, orchestration patterns and TypeScript code are all open source.

## Notes and caveats

The authors call Primer an experimental prototype rather than a vetted classroom product. It has not been evaluated as a learning intervention in classrooms, and no one has reviewed it for FERPA, COPPA, state student-privacy law or district policy, so an institution that uses it with students owns that review. The software is MIT-licensed and free, but running a simulation needs model access, which costs money. Because it is model-agnostic and runs on local or open-weight models, it can be deployed where privacy rules are tighter. A white paper on the architecture and prompts is linked from the project page. The repository had 98 stars and 16 forks when checked in November 2026.

## Connected Concepts

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
