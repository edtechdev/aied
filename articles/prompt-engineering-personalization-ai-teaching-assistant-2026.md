---
title: "A Prompt-Engineering Approach to Develop Scalable, Flexible, and Real-Time Hybrid Micro-Level Personalization in a General Purpose AI Teaching Assistant"
created: "2026-09-07T09:09:07-04:00"
updated: "2026-09-07T09:30:00-04:00"
type: article
tags: [intelligent-tutoring, personalized-learning, adaptive-learning, prompt-engineering, llm, rag]
sources: ['raw/papers/2609.03402.md']
confidence: high
---

> **Synthesis:** This IAAI-27 paper presents a [[prompt-engineering|prompt-engineering]] framework for real-time, micro-level [[personalized-learning|personalization]] of the [[intelligent-tutoring|Jill Watson]] [[llm]]/RAG-based AI [[teacher-role|teaching]] assistant. By conditioning responses on six learner dimensions ([[metacognition|metacognitive]] self-assessment, abstraction, verbosity, perception, processing, understanding) and classifying each query's cognitive demand with [[cognitive-diagnosis|Bloom's Taxonomy]], the framework yields 96 distinct learner profiles and adapts the *form* of responses (abstraction, structure, verbosity, framing) without retraining the model. NLP analyses of 2,910 responses and a human study with five evaluators found measurable, perceptible response differences across personalization conditions, with abstraction and processing preferences most consistently aligned with their intended effects. It offers a scalable, modular route to [[adaptive-learning|hybrid adaptability-and-adaptivity]] in AI tutoring.

## From content adaptation to response-form adaptation

The aspiration to tailor learning to individual needs is decades old, anchored by Bloom's 2 Sigma finding that one-to-one tutoring can produce ~two-standard-deviation gains *[Editorial Note: this has been [refuted](https://www.educationnext.org/two-sigma-tutoring-separating-science-fiction-from-science-fact/)]*. Earlier [[adaptive-learning|adaptive systems]] followed a diagnose–prescribe cycle that adapted *content* or *sequencing* through [[student-modeling|learner modeling]]. This work shifts personalization toward **response-form adaptation**: answers remain grounded in a shared retrieved knowledge base (via [[rag|retrieval-augmented generation]]), while their abstraction, structure, verbosity, and cognitive framing are modified through prompt conditioning.

The framework combines **learner-driven adaptability** (students explicitly select their preferences) with **system-driven adaptivity** (the system infers query cognitive demand). Learner preferences derive from the Felder-Silverman learning model and are treated as user-selected preferences rather than fixed psychometric classifications; the six dimensions control granularity, length, communication orientation, engagement style, and organizational structure. The combination produces 96 distinct learner profiles.

## Personalizing the Jill Watson teaching assistant

The framework operates on Jill Watson, a general-purpose LLM/RAG teaching assistant deployed across multiple institutions. Each student question is automatically classified by a fine-tuned BERT-based [[cognitive-diagnosis|Bloom's Taxonomy]] classifier (0.92 test accuracy), and learner attributes are encoded into a structured prompt that conditions generation while preserving grounding in course-specific retrieved content. An example prompt declares: *"I have a beginner level of knowledge in this topic. The Bloom's Taxonomy category of my question is Synthesis. Please provide a technical and concise response, using a sensory communication style..."* — a modular design that lets preferences update at runtime with no model retraining or [[discipline-specific-aied|domain-specific]] authoring.

## Evaluation results

The framework was evaluated in two complementary ways:

- **NLP experiments:** 30 real student questions from a Spring 2023 Knowledge-Based AI course, 96 personalized plus one baseline prompt configuration each, yielding 2,910 GPT-4.1 responses. Responses showed high semantic similarity but substantially lower lexical similarity — remaining grounded while varying in surface expression — with systematic variation in response length by verbosity preference and greater response complexity associated with higher self-assessment, verbosity, reflective processing, and technical abstraction.
- **Human evaluation:** five evaluators rated responses on quality, perceived complexity, abstraction, and processing style across 13 profiles per question (390 evaluations). Mixed-effects models found abstraction and processing preferences significantly predicted perceived response complexity, abstraction, and processing style — consistent with their intended effects — while self-assessment showed weaker effects. Bloom's level also predicted ratings, with more complex questions generally scoring lower.

The authors frame the results as preliminary evidence that prompt-based personalization produces measurable, perceptible differences in response characteristics, supporting its potential for adaptive behavior in LLM-powered [[intelligent-tutoring|educational agents]]. Deployment is planned for Spring 2027 with a pilot in Georgia Tech courses, followed by larger classroom evaluation, A/B testing, and assessment of impacts on [[learning-gains|learning outcomes]] and [[student-engagement|engagement]].

## Connected Concepts
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[prompt-engineering]]
- [[llm]]
- [[rag]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]

## Connected Articles
- [[reddig-maclellan-personalized-feedback-llm-2026]] — Embedding an LLM in an ITS's structure for personalized corrective feedback
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith (Stanford SCALE/NSSA brief)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains
- [[learnmate2-llm-adaptive-learning]] — LLM-based adaptive learning tutor
- [[bilingual-llm-lecture-companion-srl-2026]] — SRL with a bilingual LLM lecture companion
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos (Tomlinson et al. 2026)

## Citation
Basu, S., Kakar, S., & Goel, A. (2026). [A Prompt-Engineering Approach to Develop Scalable, Flexible, and Real-Time Hybrid Micro-Level Personalization in a General Purpose AI Teaching Assistant](https://arxiv.org/abs/2609.03402). arXiv:2609.03402 (IAAI-27).
