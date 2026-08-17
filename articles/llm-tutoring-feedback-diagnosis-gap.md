---
title: "Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most"
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, llm, generative-ai, benchmark, scaffolding, feedback-loop, hallucination-risk, ai-literacy]
sources: ['raw/papers/2605.16207.md']
confidence: high
---

## Key Finding
LLM tutors achieve near-ceiling on correct steps but systematically over-reject valid-suboptimal reasoning and over-validate incorrect solutions — precisely where adaptive tutoring matters most.

## Synthesis
This paper exposes a critical diagnostic blind spot in LLM-based tutoring agents. Across seven models and 10,836 solution-feedback pairs in propositional logic, LLMs performed near-perfectly on clearly correct steps but systematically misfired on the cases that matter most for adaptive tutoring: they over-rejected valid-but-suboptimal reasoning and over-validated incorrect solutions. These failures persisted regardless of solution context, suggesting architectural limitations rather than insufficient information. Alarmingly, even when models correctly diagnosed a step, they often failed to produce pedagogically actionable feedback — revealing a gap between diagnostic accuracy and instructional effectiveness. The authors propose hybrid architectures where knowledge-graph-grounded models handle precise diagnosis while LLMs support open-ended [[scaffolding]] and dialogue. This finding directly complements the behavioral evaluation framework from [[ai-tutor-behavioral-evaluation]], which also found that pedagogical quality alone is insufficient — students must actually act on feedback. Together, these papers suggest that current LLM tutors need both better diagnostic precision AND better feedback-actionability to serve as effective [[intelligent-tutoring]].

## Connected Concepts

- [[scaffolding]]
- [[intelligent-tutoring]]
- [[feedback-loop]]
- [[ai-feedback-quality]]
- [[llm]]
- [[ai-tutoring]]
- [[cognitive-diagnosis]]
- [[automated-assessment]]
## Connected Articles

- [[ai-tutor-behavioral-evaluation]]
- [[ai-tutor-safety-harms]]
## Citation

preprint, A. (2026). [*Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most*](https://arxiv.org/abs/2605.16207)
