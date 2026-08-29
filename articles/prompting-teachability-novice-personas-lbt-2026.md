---
title: "Prompting for Teachability: Designing Novice Personas in LLMs for Learning by Teaching Contexts"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [learning-by-teaching, intelligent-tutoring, prompt-engineering, generative-ai, personalized-learning, scaffolding, llm, agentic-ai]
sources: ['raw/papers/raw-miller-bosch-teachability.md']
confidence: high
---
> **Synthesis:** Miller and Bosch (2026) examine which [[prompt-engineering|prompting strategies]] most effectively elicit **novice-like behavior** from [[llm|LLMs]] so they can serve as tutees in [[learning-by-teaching]] contexts. Generating 30,720 combined prompts across five domains and evaluating three models (Qwen3-235B, Llama 4, Kimi-K2), they find that **constraint prompts that explicitly force error production** outperform persona-, misconception-, and uncertainty-based [[prompt-engineering|prompts]] — direct commands like "answer incorrectly" or "get 2–3 wrong" produced the strongest novice behavior, while indirect framings diluted it.

## The Challenge of LLMs as Tutees

[[llm|LLMs]] trained on massive corpora skew toward fluent, expert-level prose, predisposing them to produce high-competence, authoritative responses by default. In [[learning-by-teaching]] terms, this expert-like nature risks reproducing the same dynamic the approach is meant to avoid: the student-tutor is not forced to explain, anticipate misunderstanding, or respond to gaps, because the "tutee" already knows the answer. The chat-interface nature of LLMs, however, lets them flexibly adopt roles via [[prompt-engineering|prompting]] — including the role of a "tutee" that asks questions or makes mistakes.

## Study Design

- **30,720 combined prompts** across five writing-related domains.
- **Three models evaluated**: Qwen3-235B, Llama 4, Kimi-K2.
- **Outputs scored** on quiz accuracy, essay quality, and essay persuasiveness using an AI-judge rubric.
- **Regression analysis** compared four prompting strategy families: persona-based, misconception-based, uncertainty-based, and constraint-based.

## Key Findings

- **Constraint prompts win.** Prompting strategies that explicitly forced error production consistently outperformed persona-, misconception-, and uncertainty-based approaches.
- **Direct commands work best.** Across both quiz and essay outcomes, direct commands to "answer incorrectly" or "get 2–3 wrong" yielded the strongest novice-like behavior.
- **Indirect framings dilute.** Phrases like "don't aim for a perfect score" or "you may guess" produced weaker novice behavior.
- **Modular prompting.** The approach treats prompts as modular by separating identity, and can advance to generate LbT experiences from the very first chat turn.

## Implications

1. **To build a [[learning-by-teaching|teachable agent]], engineer fallibility.** Explicit, constraint-based error-production [[prompt-engineering|prompts]] are more reliable than personas or uncertainty hints at eliciting novice behavior.
2. **Scales LbT to less-structured domains.** Unlike hand-engineered teachable agents, [[llm|LLMs]] can create LbT opportunities in open-ended writing domains.

ting domains.

## Connected Concepts

- [[learning-by-teaching]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[scaffolding]]
- [[desirable-difficulties]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[prompt-coach-agentic-tutor-prompt-engineering]] — Prompt Coach: an agentic tutor for learning prompt engineering

## Citation

Miller, S., & Bosch, N. (2026). [*Prompting for Teachability: Designing Novice Personas in LLMs for Learning by Teaching Contexts*](https://doi.org/10.1145/3785022.3785067). In *LAK '26: Learning Analytics and Knowledge Conference*.
