---
title: "LearnLM: Improving Gemini for Learning"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-08-21T08:50:57-04:00"
type: article
tags: [llm, pedagogical-llm-training, generative-ai, intelligent-tutoring, reinforcement-learning, prompt-engineering, teacher-role, student-ai-interaction]
confidence: high
sources: [raw/papers/2412.16429.md]
---

> **Reframes improving [[llm|LLMs]] for learning as *pedagogical instruction following*** — training and evaluation examples carry system-level instructions that describe the specific pedagogical behavior desired or present in subsequent turns, rather than committing the model to any single definition of pedagogy. This lets teachers or developers specify the tutoring behavior they want while the model improves on general instruction-following and other capabilities. The resulting **LearnLM** model (based on Gemini 1.5 Pro, available on Google AI Studio) was substantially preferred by education experts across diverse learning scenarios, with average preference strengths of **+31% over GPT-4o, +11% over Claude 3.5 Sonnet, and +13% over the base Gemini 1.5 Pro**. Because pedagogical data is mixed directly into Gemini's post-training (SFT, reward-model, and RL stages) rather than applied as post-hoc fine-tuning, the improvements can be carried into future Gemini releases.

## Key Findings

- **Pedagogy is context-dependent, so it is best left specified per-application.** Interviews with the education sector (EdTech companies, schools, non-profits, governments) found that "ideal AI tutor behavior" is prohibitively hard to define globally; the most useful capability is following system instructions that create interactive, tutor-led exercises — including withholding answers or staying on topic even when students try to circumvent them.
- **Prompting remains the practical route, but instruction-following can be trained.** Post-hoc fine-tuning for each application is costly, hard to maintain, and quickly outdated as base models improve. The paper instead trains models to follow complex, nuanced pedagogical system instructions, using both hard constraints ("do not reveal the answer") and soft style guidelines ("use a motivating tone").
- **RL is significantly more effective than SFT alone for pedagogical instruction following.** Preference judgments capture subtle, context-dependent distinctions across long conversations that supervised fine-tuning on instruction-labeled data only partially handles; a reward model trained on pedagogically-seeded preference pairs is used during RLHF.
- **Co-training prevents catastrophic forgetting.** By conditioning pedagogical responses on specific system instructions and mixing the data with Gemini's standard post-training mixture, LearnLM learns pedagogical instruction-following without losing core reasoning, [[multimodal]] understanding, factuality, safety, or multi-turn properties.
- **Robust expert-preference evaluation at scale.** A scenario-guided, conversation-level pipeline (49 evaluation scenarios; 186 educators role-playing learners across 2,360 conversations; 248 pedagogy experts producing 10,192 assessments) gave LearnLM consistent preference wins over GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro across all five comparative assessment categories — strongest on "Which tutor demonstrated better tutoring?"

## Practical Implications

- **For tool builders, specify pedagogy via system instructions and measure adherence.** LearnLM demonstrates that framing education-model behavior as instruction following is both trainable and evaluable — developers can define desired tutoring attributes and evaluate whether a model follows them, rather than relying on vague prompt prose.
- **Prefer models trained with pedagogical data over prompt-engineered general models when fidelity matters.** The paper's core claim is that rule-based prompting alone cannot robustly encode complex, adaptive pedagogy; post-training with pedagogical data (even mixed into a general model) yields more consistent adherence.
- **Invest in scenario-based, conversation-level evaluation.** The gap between LearnLM and competitors was made visible by controlled, scenario-guided multi-turn comparisons with expert pedagogy reviewers — a template for education-specific model evaluation that single-turn benchmarks miss.

## Connected Concepts

- [[llm]]
- [[pedagogical-llm-training]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[reinforcement-learning]]
- [[prompt-engineering]]
- [[teacher-role]]
- [[student-ai-interaction]]
- [[pedagogy]]

## Connected Articles

- [[teachlm-post-training-llms-education]] — TeachLM: Post-Training LLMs for Education Using Authentic Learning Data
- [[learning-to-prompt-adaptive-tutoring]] — Learning to prompt for adaptive tutoring

## Citation

LearnLM Team, Google. (2025). *[LearnLM: Improving Gemini for learning](https://arxiv.org/abs/2412.16429)* (arXiv:2412.16429). arXiv.
