---
title: "Prompting for Teachability: Designing Novice Personas in LLMs for Learning by Teaching Contexts"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [learning-by-teaching, scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning, prompt-engineering]
methods: [benchmark]
sources: ['raw/papers/raw-miller-bosch-teachability.md']
confidence: high
audience: [researchers, edtech designers]
---
> **Synthesis:** Miller and Bosch (2026) examine which [[prompt-engineering|prompting strategies]] most effectively elicit **novice-like behavior** from [[llm|LLMs]] so they can serve as tutees in [[learning-by-teaching]] contexts. Generating 30,720 combined prompts across five domains and evaluating three models (Qwen3-235B, Llama 4, Kimi-K2), they find that **constraint prompts that explicitly force error production** outperform persona-, [[misconceptions|misconception]]-, and uncertainty-based [[prompt-engineering|prompts]] — direct commands like "answer incorrectly" or "get 2–3 wrong" produced the strongest novice behavior, while indirect framings diluted it.

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

## What this means for practice

- **Designers.** Engineer fallibility explicitly: use constraint prompts that force error production ("answer incorrectly," "get 2–3 wrong") rather than persona or uncertainty framings, which produced weaker novice behavior.
- **Designers.** Keep the prompt modular — separating identity, behavior, rules, and other elements into their own slots — so each can be tuned; indirect hedges like "don't aim for a perfect score" dilute the effect.
- **Researchers.** Pair role framing with explicit behavior constraints in [[learning-by-teaching|LbT]] designs, and measure human [[learning-gains|learning gains]] before claiming teachability benefits from simulated tutee behavior.
- **Designers.** Use LLM tutees to open [[learning-by-teaching|LbT]] in less-structured writing domains that hand-engineered teachable agents could not cover.

## Limitations

- The findings are exploratory: the study measures simulated novice behavior and uses automated scoring for large-scale comparison rather than direct measurement of human learning outcomes.
- Only three models (Qwen3-235B, Llama 4, Kimi-K2) and five writing-related domains were tested, and each model generated and scored its own outputs.
- AI-judge calibration rested on just 24 essays, each scored by one human rater; the AI judge's mean score ran higher than the human's (72.1 vs 63.3) even though the ranks correlated (Pearson's r = 0.943).
- Prompts were run as 30,720 synthetic combinations producing short quiz answers and essays, so the durability of the prompt effects in longer, more realistic LbT interactions is untested.

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
