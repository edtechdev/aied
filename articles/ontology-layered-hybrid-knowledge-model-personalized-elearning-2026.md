---
title: "Ontology-Based Layered Hybrid AI-Driven Knowledge Model for Personalized E-Learning"
created: "2026-08-17T18:20:00-04:00"
updated: "2026-08-17T18:20:00-04:00"
type: article
tags: [knowledge-graph, intelligent-tutoring, personalized-learning, adaptive-learning, student-modeling, instructional-design, edtech-platform, learning-analytics, llm]
category: [instructional design]
confidence: medium
sources: [raw/papers/ontology-layered-hybrid-knowledge-model-personalized-elearning-2026.md]
---

> **An ontology-based, layered hybrid knowledge model for personalized e-learning** — a conceptual architecture paper by Tatyana Ivanova (2026) that classifies the knowledge required for personalization and proposes a layered knowledge-base architecture grounded in description logic. Its central move is replacing the classic ITS four-model architecture (domain, student, tutoring, interface) with **systems of mapped ontologies**, while adding procedural knowledge (rules), probabilistic/fuzzy knowledge (via fuzzy/probabilistic description-logic extensions), and implicit knowledge extracted through [[learning-analytics|learning analytics]] and machine learning. Because ontologies alone are static and handle uncertainty poorly, the paper argues personalization requires combining them with teaching-strategy sequencing rules, analytics, and ML — and it contributes a metadata framework for describing, discovering, and **reusing** educational ontologies.

## Key Findings

- **Personalization needs more than ontologies.** Ontologies are mostly static or slowly evolving and have limited handling of uncertainty, so effective personalized learning must combine them with teaching-strategy sequencing rules, [[learning-analytics|learning analytics]] (to infer and predict learner needs), and machine learning for extracting implicit knowledge from educational data.
- **Systems of mapped ontologies extend the ITS architecture.** The paper differs from most prior work by proposing a *system of mapped ontologies* in place of each single ontology across the four classic [[intelligent-tutoring|ITS]] knowledge-base models (domain, student/tutoring, pedagogical, interface), together with storage for procedural knowledge (as rules) and imprecise/probabilistic knowledge (fuzzy or probabilistic [[knowledge-graph|description-logic]] extensions).
- **ITS vs. IES distinction.** An Intelligent Tutoring System is a specialized AI system focused on individual personalized tutoring; an Intelligent Educational System (IES) is a broader, multi-module ecosystem integrating tutoring, [[learning-analytics|analytics]], recommendation, and administrative decision-making. Ontologies in ITS enable cognitive tutoring; ontologies in IES mainly enable semantic integration.
- **Ontology classification for reuse.** The paper proposes a purpose-based classification of educational ontologies driven by the ITS model (tutoring-domain, pedagogy, or learner-profile), and a metadata framework with **eight upper-level classes** — ontologies, rules, mappings, data-driven (ML/analytics), ontology management tools, core descriptors, technical descriptors, and usage contexts — to support semantic search, evaluation, recommendation, and mapping, thereby reducing the time, effort, and cost of ontology development and evolution.

## Connected Concepts

- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-modeling]]
- [[instructional-design]]
- [[edtech-platform]]
- [[learning-analytics]]
- [[llm]]

## Connected Articles

- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[learnity-graphs-lifelong-learning-framework-2026]] — Learnity graphs for lifelong learning
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: CS course comparison
- [[quantum-education-its]] — Quantum education intelligent tutoring (ITAS)
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Personalized learning in elementary fractions
- [[knowledge-gap-detection-ai-tas]] — Knowledge-gap detection in AI teaching assistants

## Citation

Ivanova, T. (2026). *[Ontology-based layered hybrid AI-driven knowledge model for personalized e-learning](https://doi.org/10.3390/math14050808)*. Mathematics, 14(5), 808.
