---
title: "PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions"
created: 2026-05-19
updated: 2026-08-15
type: article
tags: [intelligent-tutoring, llm, teacher-role, faculty-development, edtech-platform, ai-literacy, agentic-workflows]
sources: ['raw/papers/2605.16605.md']
confidence: high
---

## Key Finding
Teachers virtually never test AI tutoring bots before student deployment; PromptDecipher enforces QA as a first-class activity by letting teachers edit bot responses directly.

## Synthesis
PromptDecipher addresses a critical gap in AI tutor deployment: teacher quality assurance. A formative study revealed that educators authoring AI tutoring chatbots virtually never systematically test them before student deployment — a finding with serious implications for [[ai-tutor-safety-harms]] and educational quality. The system shifts the authoring paradigm from abstract prompt writing to direct correction-based interaction: teachers edit undesirable bot responses in a live chat preview, and an automated pipeline analyzes the correction, proposes a system prompt rewrite, and validates across test scenarios. This bridges the [[teacher-role]] gap between classroom practitioner and AI system designer — a tension also explored in [[ai-tpack-teacher-multi-agent-workflow]], which found that effective AI integration requires systems thinking beyond simple tool use. PromptDecipher's QA enforcement resonates with the [[agentic-workflows-education]] paradigm of using AI to scaffold human roles. By embedding testing into the authoring workflow, the system also mitigates the kind of diagnostic failures identified in [[llm-tutoring-feedback-diagnosis-gap]], where LLMs struggle precisely where feedback matters most.

## Connected Concepts

- [[teacher-role]]
- [[tpack]]
- [[ai-tutoring]] — AI tutoring chatbots that teachers author
- [[pedagogical-safety]] — ensuring tutors are safe before deployment
- [[faculty-development]] — building teacher capacity for AI authoring
- [[llm]] — the models behind AI tutor interactions
- [[prompt-engineering]] — system-prompt rewriting from teacher corrections
- [[human-in-the-loop-ai]] — teacher QA as a first-class activity
- [[agentic-ai]] — AI-scaffolded workflows for human roles
## Connected Articles

- [[ai-tutor-safety-harms]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[agentic-workflows-education]]
- [[llm-tutoring-feedback-diagnosis-gap]]
- [[prompt-coach-agentic-tutor-prompt-engineering]] — Coaching tutors to engineer prompts effectively
## Citation

J, A.K.M.X.R.S. (2026). [*PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions*](https://arxiv.org/abs/2605.16605). practice, however, teachers rarely fulfill these roles
