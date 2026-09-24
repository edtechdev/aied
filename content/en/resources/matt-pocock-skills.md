---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocock's open-source collection of small, composable agent skills, including a multi-session teaching skill, a relentless questioning skill, and guidance on writing documents an agent can follow."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

**Skills for Real Engineers** is Matt Pocock's published agent-skills directory: small, composable instruction files that install into Claude Code, Codex or another agent, written to be adapted rather than adopted whole. Most of the collection serves software work, but several skills are education instruments that were built for teaching and questioning rather than for code.

The clearest example is `teach`, which runs over multiple sessions and treats the working directory as a stateful teaching workspace, so a learner's progress and open questions persist between conversations instead of restarting each time. `grill-me` and its underlying `grilling` primitive interview the user relentlessly about a plan until every branch is resolved, which is [[socratic-method|Socratic questioning]] as a reusable procedure rather than a conversational mood. `wait-what` responds the moment a message fails to land by re-pitching it in plain language with the missing context, a move any instructor recognizes from watching an explanation miss the first time. `writing-for-agents` covers how to write documents that an [[prompt-engineering|agent]] can follow, which is now the practical form of writing instructions for [[pedagogical-agent|AI]] course material. `to-questionnaire` converts a decision into a questionnaire for whoever can answer it, `handoff` compacts a conversation into a document another agent can continue from, and `wizard` generates an interactive walkthrough for steps only a person can perform.

## What to know before adopting it

Everything is [[open-source|open source]] under MIT and free to take as a starting point for local [[ai-literacy|AI literacy]] or [[self-directed-learning|self-directed study]]. The adoption is large and fast-moving: roughly 269,000 stars and 22,000 forks when checked in September 2026, with the last commit that day. The caveat is scope. The skills assume an [[human-ai-collaboration|engineer's]] working context, they are organized into engineering, productivity, deprecated and in-progress buckets, so some entries are explicitly unfinished or retired, and the README doubles as a newsletter sign-up. Treat the teaching and questioning skills as the transferable part, and expect to rewrite any of them before putting one in front of students.

## Connected Concepts
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
