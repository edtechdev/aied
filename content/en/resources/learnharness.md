---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
updated: "2026-11-02T05:58:00-05:00"
type: resource
summary: "A free, open-source (AGPL-3.0) desktop app in which AI agents measure what a learner already understands, plan a dependency map to the goal, teach one reasoning step at a time, and adapt practice — with a persistent knowledge graph of propositions and reasoning chains that later sessions read instead of starting over."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
reviewed_by: [editor]
---

**LearnHarness** is a desktop application for [[agentic-ai|agent-assisted]] learning that organizes a lesson around what a learner already understands rather than around a topic list. The project describes four moves: **measure**, probing the ideas the goal depends on to find where understanding ends; **plan**, deriving a dependency map to the goal and showing it as a lesson map; **teach**, working one reasoning step at a time through a predict–explain–check rhythm so confusions are repaired before anything is built on them; and **practice**, a stream of problems targeted at the learner's own difficulties.

## What you can do with it

The distinctive input is the thinking field: learners write or dictate their reasoning and uncertainty rather than only answering, which the project treats as how the agent pictures reasoning instead of a right/wrong record. It can also research questions in the background, generate visual explanations and build interactive demonstrations.

What accumulates is a knowledge graph of propositions and reasoning chains, linked back to their source sessions and read by later teaching and practice agents as context; notes can be imported. The project says the graph stores ideas and connections, not ratings of ability.

## Who it is for

Independent learners working on difficult material, and instructors or developers who want to see what an agent-native [[intelligent-tutoring|AI tutor]] looks like when its prompts and state are inspectable. It is TypeScript, runs from source, and its tests are documented as deterministic, with no model calls.

## Notes and caveats

Free covers the software, not the inference: learners bring provider keys, a subscription, a local Claude Code CLI or any OpenAI-compatible endpoint, and pay the provider with no markup; a live meter estimates known API costs only. Records, chats and keys stay on the machine as plain files, but the project warns that local storage does not mean offline processing, since model requests, optional dictation and web research all reach external services. The Windows x64 installer is unsigned, so Windows will warn. No efficacy study is reported, so the case rests on stated rationale rather than measured outcomes; the repository had roughly 4,800 stars when checked on 2 November 2026.

## Connected Concepts

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
