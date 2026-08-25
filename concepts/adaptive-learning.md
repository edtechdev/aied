---
title: Adaptive Learning
created: "2026-08-09T10:44:35-04:00"
updated: "2026-08-24T21:30:00-04:00"
type: concept
tags: [knowledge-tracing, personalized-learning, intelligent-tutoring, student-modeling, scaffolding, cognitive-diagnosis, llm, learning-analytics]
confidence: high
---

> **Adaptive learning** — AI-driven educational systems that adjust content, pacing, and instructional strategies based on individual learner characteristics and performance. Adaptive learning is the operational goal of much AI in education research: using student models to personalize instruction.

### Core mechanisms

- **Measure-model-adapt loop:** [[knowledge-tracing]] estimates what the student knows, [[student-modeling]] represents the learner, and the system adapts difficulty, content, and [[feedback]] accordingly.
- **Personalization at scale:** [[personalized-learning]] systems use adaptive algorithms to serve unique learning paths for each student. [[deeptutor|DeepTutor]] and [[ai-powered-personalized-learning-elementary-fractions-2026|elementary fraction tutors]] demonstrate adaptive personalization in practice.
- **Content sequencing:** [[adaptive-pretesting-retention|Adaptive pretesting]] and [[adapt-adaptive-lesson-plan-transformer|lesson plan transformers]] optimize the order and type of content presented.
- **ITS integration:** [[intelligent-tutoring|Intelligent tutoring systems]] are the canonical adaptive learning platform, combining diagnosis with adaptation.

### Effectiveness evidence

The wiki documents mixed evidence: adaptive systems improve outcomes when adaptation is grounded in reliable [[student-modeling|student models]], but poorly-calibrated adaptation can harm learning. [[personalized-learning|Personalization research]] distinguishes effective adaptation from superficial customization. [[khalifeh-redefining-personalized-learning-ai-2026|Systematic reviews]] find that "adaptive," "personalized," "individualized," and "customized" learning are used inconsistently — so effect sizes depend heavily on how adaptation is operationalized, and the field calls for a unified framework.

### The AI era: LLM-based adaptation and its risks

Generative AI has expanded what adaptive systems can do — conversational [[agentic-ai|agentic]] tutors, [[rag|RAG]]-grounded content, and LLM-driven [[intelligent-tutoring|tutoring]] adapt not only problem difficulty but language and explanation style (e.g., [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor|DeepTutor]], [[chudziak-ai-math-tutoring-platform|multi-agent adaptive tutoring]]). However, LLM-based adaptation introduces new risks: without reliable [[student-modeling|student models]], adaptation may be based on shallow signals; over-adaptation can reduce the productive struggle students need (see [[desirable-difficulties]], [[cognitive-offloading]]); and the balance between personalizing and preserving learner [[agency]] is an open design question (see [[agentic-ai|agentic AI]]).

### Connections

Adaptive learning connects to [[knowledge-tracing]] (the diagnostic engine), [[personalized-learning]] (the goal), [[intelligent-tutoring]] (the platform), [[cognitive-diagnosis]] (fine-grained [[assessment]]), and [[scaffolding]] (adaptation as dynamic scaffolding).

- **Meta-analytic evidence on adaptive + AI tools.** [[burneo-can-edtech-close-learning-gaps-2026|A World Bank meta-analysis]] of 14 RCTs pools adaptive computer-assisted learning, intelligent tutoring, and generative AI on a common scale, estimating an average learning gain of ~0.125 sd with no significant difference between the two technology generations — evidence that the adaptation mechanism, not the specific tool generation, drives gains.

- **Adaptive algorithms compared in dynamic domains.** [[graph-its-adaptive-algorithms-2026|Graph-based ITS research]] compares multiple adaptive learning algorithms (including Bayesian knowledge propagation and intuitionistic fuzzy logic) in a graph-based knowledge representation framework for dynamic curricula.

## Connected Concepts

- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[simon-student-engagement-adaptive-learning-2026]] — Systematic review of student engagement in adaptive learning platforms
- [[zhan-chapman-genai-cs-education-2026]]
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-online-education-engagement-satisfaction-2026]]
- [[interactive-online-learning-ai-2025]]
- [[ai-decision-support-online-learning-assessment-2026]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[chudziak-ai-math-tutoring-platform]] — Adaptive/personalized multi-agent math tutoring (Chudziak & Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning: systematic review

- [[deeptutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[vargas-situated-learning-ai-review-2024]]
- [[prezenski-human-centered-ai-aided-learning]]
- [[fowlin-operationalizing-learning-principles-ai]]

- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific AI calibrated to learner readiness vs. general chatbots
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[context-based-ai-secondary-chemistry-2026]] — Context-based 7E + AI instruction in secondary chemistry

- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Adaptive AI-based STEM program for deep learning
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptive capabilities for assuring quality learning in a gen AI-integrated future (Lodge et al. 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)

- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: generative agent simulating students' cognitive evolution
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analysis pooling adaptive + AI-enabled tools across 14 RCTs
