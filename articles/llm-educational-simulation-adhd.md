---
title: "LLM-Based Educational Simulation: Evaluating Temporal Student Persona Stability Across ADHD Profiles"
created: "2026-05-07T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-education]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, learning-analytics, llm]
stakeholders: [student-experience]
research_method: [benchmark]
audience: [learners, software developers]
sources: ['raw/papers/2605.06307.md']
confidence: medium
level: [special education]
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Gonnermann-Müller, Haase & Leins (2026) evaluate whether **LLM-generated student personas simulating ADHD profiles** maintain stable and realistic behavioral patterns over time. This addresses a critical question for using LLMs in educational research and teacher training: can simulated learners reliably represent neurodivergent students?
## Why This Matters

Using LLMs to simulate students is an emerging practice in educational research, but the **temporal stability** of these [[simulation|simulations]] — especially for neurodivergent profiles — has been underexamined. If LLM-generated personas drift or become inconsistent, they cannot serve as valid proxies for real students in:
- Teacher training simulations
- [[adaptive-learning]] testing
- [[intelligent-tutoring]] system evaluation
- [[learning-analytics]] research methodology

## Connections to Knowledge Base

This work extends the [[nie-personavlm-long-term-personalization-2026]] discourse on how LLMs represent learners over time, but applies it to **simulation validity** rather than tutoring [[personalized-learning|personalization]]. The focus on ADHD profiles connects to broader [[student-experience]] research and highlights gaps in [[stanford-evidence-base-ai-k12-2026]] — the Stanford SCALE review found few studies with adequate causal inference for [[special-education|special education]] populations.

The simulation methodology also raises questions about [[hazra-safetutors-pedagogical-safety-2026]] — if tutoring systems are tested on simulated neurodivergent learners, do the safety assessments generalize? This echoes [[drawedumath-vlm-struggling-students-2026]] concerns about AI systems that underperform with specific student populations.

## Open Questions

- How do LLM-simulated ADHD profiles compare to [[syal-multimodal-dialogue-stem-2026]] systems that work with real neurodivergent students?
- Can temporal stability be improved through [[prompt-engineering|prompt engineering]] or fine-tuning?
- What is the [[ethics|ethical]] boundary for using [[simulating-students|simulated students]] in [[rct]] designs?

## What this means for practice

- **Software developers.** Build scripted, task-anchored interactions rather than open-ended chat when simulated learners must stay in character: scripted interactions with explicit task prompts eliminated observer-rated behavioral drift entirely, a reduction of up to 97% relative to unscripted dialog.
- **Software developers.** Treat interaction structure as a stronger lever than model selection. The study crossed five LLMs with three prompt designs and four persona conditions, and stability turned out to be conditional on interaction design rather than intrinsic LLM capability.
- **Software developers.** Test the middle of your persona distribution, not only the extremes: within-conversation drift occurred in unscripted dialog for both high- and moderate-intensity ADHD personas, so partially specified profiles are the ones simulated worst.
- **Learners.** Use simulated student scenarios as rehearsal, not as a model of real neurodivergent classmates: self-reported persona characteristics stayed stable while observer-rated behavioral expression of high- and moderate-intensity personas declined across the 9-turn conversations.
- **Software developers.** Set the persona explicitly, because without persona instructions baseline LLM student representation skews toward high ADHD symptoms — a bias the authors trace to pretraining material drawn disproportionately from clinical and special education contexts.

## Limitations

- The study covers one diagnostic construct only; generalization to personas combining multiple human characteristics, and to comorbid conditions such as ADHD with anxiety, remains for future research, and the authors note this limits ecological validity for educational [[simulation|simulation]].
- Only two interaction structures were tested — scripted and unscripted. Other structures such as increasing [[scaffolding]], or supportive versus challenging tutor personas, were not explored, so the minimal intervention for behavioral stability is unknown.
- Observer-rated behavioral expression was scored by three independent LLM raters blind to persona instructions, so the behavioral stability measures are themselves model-generated rather than human-coded.
- Between-conversation stability rests on single-turn, context-free instantiations (N = 4,968), and within-conversation stability on 20 conversations of 9 turns (N = 3,952) — a short interaction window relative to the sustained, path-dependent interactions of real tutoring or teacher training.

## Connected Concepts

- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-experience]]
- [[rct]]
- [[simulating-students]]
- [[neurodiversity]]

## Connected Articles

- [[nie-personavlm-long-term-personalization-2026]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[drawedumath-vlm-struggling-students-2026]]
- [[syal-multimodal-dialogue-stem-2026]]
## Citation

Gonnermann-Müller, J., Haase, J., & Leins, N. (2026). [*LLM-Based Educational Simulation: Evaluating Temporal Student Persona Stability Across ADHD Profiles*](https://arxiv.org/abs/2605.06307).
