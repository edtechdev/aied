---
title: "VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI"
created: 2026-06-03
updated: 2026-08-07
type: article
tags: [pedagogical-safety, k-12, llm, generative-ai]
sources: ['raw/papers/caeai-vetting-safety.md']
confidence: medium
---

> **Synthesis:** VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI

## Key Findings

- VETTING is a dual-LLM architecture that separates response generation from policy verification: a generator LLM produces responses and a separate verifier LLM checks them against safety policies at runtime.
- In an in situ deployment with 151 middle school students in a writing activity, VETTING achieved precision of .943, recall of .913 (95% CI [.652, .983]), and an F1 score of .928 for safety violation detection; human audit confirmed 50 true positives and 3 false positives, with an estimated 4.8 undetected violations.
- The deployment was associated with an estimated 91.2% reduction in inappropriate content exposure, at the cost of a 19.6% increase in token usage (628,011 tokens, roughly 12,560 tokens per prevented violation); median response latency rose from 2.9 s to 6.6 s on verification-triggered turns (Mann-Whitney U = 46,770.5, p < .001, Cohen's d = 0.66).
- Across 1250 student–AI interaction turns, only 51 turns (4.1%) triggered verification, concentrated in 25 conversations (16.6% of all conversations); the presence of risky keywords in prompts raised the odds of verification failure more than fourfold (OR = 4.59, 95% CI [2.04, 10.34], p < .001).
- The work documents a taxonomy of student boundary-testing behaviors observed during authentic classroom use: eight violation categories, led by Romantic or Intimate Relationship Themes (30.2% of instances) and Inappropriate or Mature Topics (26.4%), with students frequently rephrasing or escalating prompts after verification failures.
- Policy isolation keeps policy specifications hidden during interaction, making circumvention attempts monitorable and auditable rather than embedded in prompts.
- An open-source Python implementation of the framework is available.

## Study Design & Method

Educational AI systems increasingly rely on large language models to support student writing and inquiry, yet enforcing safety and instructional constraints during open-ended, multi-turn interaction remains challenging. Existing approaches commonly embed such constraints within conversational prompts or rely on static filtering; over time these approaches may become sensitive to user interaction, making it difficult to monitor and audit when students are able to circumvent or otherwise attempt to violate the measures. VETTING instead separates response generation from policy verification and applies explicit policy checks at runtime, illustrated through a grounded instantiation that enforces instructional and safety constraints without exposing policy specifications during interaction. The evaluation ran in a middle school classroom during a structured, timed writing activity: 190 students in grades 6–8 were given 45 minutes to write a 500-word essay on the advantages and disadvantages of AI in education, and 151 of them interacted with the chatbot. Every candidate response was checked by the verification layer before release; failed responses triggered an iterative rewrite loop bounded at three attempts before a fallback response was issued. Evaluation combined analysis of student–AI interaction behavior, human audit of verification outcomes against a thematic codebook, characterization of computational overhead, and a retrospective comparison with a single-LLM embedded-policy baseline.

## Implications for AI in Education

Policy-isolated runtime verification supports the analysis and management of educational AI behavior under authentic classroom use. Because safety checks are explicit and separate from generation, instructors and developers gain an auditable record of when and how students attempt to violate constraints — and the documented taxonomy of boundary-testing behaviors can inform both system design and classroom guidance. The measured trade-off (a large reduction in inappropriate content exposure for a modest increase in token usage) gives practitioners a concrete cost-benefit estimate for this class of architecture. A retrospective comparison with a single-LLM baseline in which the safety policy was embedded in the system prompt found that 35.3% of the violations intercepted by VETTING would still have produced student-visible responses under embedded prompting — positioning separated runtime verification as a conservative, higher-control design point for high-risk contexts (minors, developmentally sensitive content, or tasks where direct answer provision would undermine the activity) rather than a necessary architecture for every application. For [[pedagogical-safety]] in [[k-12]] settings, VETTING offers a template that complements human oversight rather than replacing it, and its open-source implementation lowers the barrier to adopting verifier-based safeguards in [[human-in-the-loop-ai]] deployments.

## Limitations

The authors caution that the taxonomy is exploratory rather than fully validated: categories were developed through collaborative discussion and subsequently applied by a single annotator, so formal inter-rater reliability metrics could not be computed. Recall estimates were derived from a sample-based audit of passed interactions, yielding wide confidence intervals due to the low base rate of violations. The evaluation was conducted within a single middle school writing activity centered on AI in education, which may have influenced both the content of student prompts and the types of violations observed, and it was not designed as a direct empirical comparison against strengthened prompt-based safeguards — the retrospective baseline does not reproduce full live-interaction dynamics.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[automated-essay-scoring]]
- [[cs-education]]
- [[student-experience]]

## Connected Articles



- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors: Pedagogical Safety in AI Tutoring
- [[child-safety-genai]] — Child Safety in Generative AI: An Expert-Guided and Incident-Grounded Evaluation Framework
- [[concept-catalyst-engineering-scaffolds]] — Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
- [[llm-unlearning-math-privacy]] — Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[llm-cultural-relevance-k12]] — LLMs for Culturally Relevant K-12 Pedagogy

## Citation

Li, H., Zhang, S., & Botelho, A. F. (2026). [*VETTING: A dual-LLM framework for in-loop safety verification via policy isolation in educational AI*](https://doi.org/10.1016/j.caeai.2026.100646).
