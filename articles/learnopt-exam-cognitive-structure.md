---
title: "LearnOpt: Recovering the Latent Cognitive Structure of Standardized Examinations via Knowledge Graphs and Constrained Optimization"
created: 2026-06-16T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [learning-analytics, llm, k-12, personalized-learning, assessment, student-experience, rag]
sources: ['raw/papers/2606.15349.md']
confidence: high
---

Standardized examinations are typically treated as uniform syllabus coverage problems. LearnOpt recovers stable latent cognitive structures diverging systematically from official syllabi, using LLM-tagged questions and constrained optimization. Applied to 9 years of NEET questions (n=1,496) and JEE Advanced questions. Finds NEET latent skill distribution is stable within syllabus regimes (KL 0.004-0.032) but shifts significantly after syllabus rationalization (KL=0.040, p=0.0005). JEE Advanced is dominated by multi-concept integration (80.9%). Formulates study planning as a knapsack-variant optimization with Bayesian Knowledge Tracing.

## Key Findings

- Standardized exams have recoverable latent cognitive structures; multi-concept integration dominates higher-tier exams (JEE: 80.9%).
- LearnOpt builds an **exam knowledge graph from LLM-tagged questions** and extracts a **five-category latent skill distribution**, applied to nine years of NEET questions (2016–2024, n=1,496).
- NEET's latent skill distribution is **stable within a syllabus regime** (consecutive-year KL divergence 0.004–0.032 for 2016–2021, non-significant under permutation testing) but **shifts significantly with NCERT's 2023 syllabus rationalization** (pooling 2016–2021 vs 2023–2024 gives KL=0.040, p=0.0005), with Elimination/Negation questions rising from roughly 20–29% to 31–35%.
- Within either regime, **subject predicts skill profile more strongly than year**; exam tier shapes latent cognitive structure more than subject, which shapes it more than time within a regime.
- Study planning is formulated as a **knapsack-variant optimization over prerequisite-aware subgraphs with Bayesian Knowledge Tracing**; evaluation with one real and two synthetic mastery profiles shows the skill-weighted objective produces a modest but real reordering of recommended topics over a mastery-conditioned frequency baseline.
- The JEE Advanced profile is dominated by **Multi-concept Integration (80.9% vs. 33.3% for NEET)**, with a JEE-vs-NEET divergence (KL=0.505) exceeding NEET's largest cross-subject divergence.

## Study Design & Method

LearnOpt treats standardized examinations not as uniform syllabus coverage problems but as **adversarial systems with stable latent cognitive structures** that diverge systematically from official syllabi. The pipeline tags historical questions with LLMs, assembles a knowledge graph, extracts skill distributions, and optimizes time-bounded study plans. The JEE analysis uses the single-correct MCQ subset of JEEBench (110 of 515 problems, 2016–2023) because only that response type is structurally comparable to NEET's single-correct format. Code, knowledge graph, and annotated dataset are released publicly.

## Implications for AI in Education

The piecewise-stable latent structure means exam preparation can be modeled as **skill acquisition over an inferred structure** rather than uniform syllabus coverage, supporting personalized study planning for high-stakes exams such as NEET and JEE. The LLM-tagging pipeline also shows a practical use of generative models for exam analytics, while the optimization framework connects exam data to [[knowledge-tracing]]-style mastery estimation and adaptive study recommendations.

## Connected Concepts

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[pedagogical-agent]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]

## Connected Articles

- [[history-aware-student-simulation]] — Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
- [[llm-item-difficulty-prediction]] — Cognitive Episodes in LLM Reasoning Traces Enable Interpretable Human Item Difficulty Prediction
- [[physiological-signals-exam-outcomes-ml]] — Leveraging Physiological Signals to Predict Exam Outcomes with Machine Learning
- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Learning about, Doing, and Engaging with Science: Vigilance as the Key to Productive Augmentation
- [[dynamic-skill-matching-capstone-teams]] — Improving Capstone Team Outcomes through Dynamic Skill Matching and Preference Alignment
- [[edtech-design-time-generative-ui]] — The Missing Layer: Why EdTech Needs Design-Time Generative UI, Not Just Runtime Personalization

## Citation

Joy Bose, Om Thomas (2026). [LearnOpt: Recovering the Latent Cognitive Structure of Standardized Examinations via Knowledge Graphs and Constrained Optimization](https://arxiv.org/abs/2606.15349). arXiv:2606.15349. arXiv preprint.
