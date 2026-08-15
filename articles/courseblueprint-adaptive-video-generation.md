---
title: "CourseBlueprint: A Structured Pipeline for Adaptive Pedagogical Video Generation Grounded in Course Corpora"
created: 2026-06-23
updated: 2026-08-15
type: article
tags: [llm, generative-ai, personalized-learning, scaffolding, higher-ed]
sources: ['raw/papers/2606.20608.md']
confidence: medium
---

Islam et al. (2026) address a core limitation of generative text-to-video for education: while visually fluent, such systems lack pedagogical content knowledge (PCK). CourseBlueprint provides a structured pipeline producing adaptive pedagogical videos grounded in a course corpus (undergraduate biomedical-imaging course BMED 2300, 23 lectures, 1,116 slides). The pipeline includes four components with typed intermediate representations and validation: a scaffolding module with prerequisite concept graphs, an adaptive controller assigning style specifications per learner persona, an engagement generator using a fixed rhetorical contract (hook→retrieval→core→analogy→forward contract), and a deterministic slide-image override mechanism. Ablation results show removing the engagement contract crashes the engagement score from 5.00 to 1.20. The slide override converts a 0/9 corpus-grounding failure into 9/10 successful matches. This work demonstrates that [[generative-ai]] for education needs explicit pedagogical structure — not just fluency — and connects to [[scaffolding]], [[personalized-learning]], and [[generative-ai]] research in [[higher-ed]].

## Connected Concepts

- [[adaptive-learning]]
- [[generative-ai]]
- [[instructional-design]]
- [[knowledge-graph]]
- [[multimodal]]
- [[personalized-learning]]
- [[scaffolding]]
- [[higher-ed]]
## Connected Articles

- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[generativism-learning-theory]] — Generativism: Toward a Learning Theory for the Age of Generative Artificial Intelligence
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education

## Citation

Md Zabirul Islam, Md Motaleb Hossen Manik, Ge Wang (2026). [CourseBlueprint: A Structured Pipeline for Adaptive Pedagogical Video Generation Grounded in Course Corpora](https://arxiv.org/abs/2606.20608). arXiv:2606.20608. arXiv:2606.20608 (cs.CY; cs.AI; cs.CV)
