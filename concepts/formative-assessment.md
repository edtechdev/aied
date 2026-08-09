---
title: Formative Assessment in AI Education
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [agentic-ai, ai-ed-evaluation, ai-education, assessment, pedagogical-safety, llm, higher-ed, generative-ai, k-12, scaffolding]
confidence: medium
---

Assessment designed to inform ongoing instruction and learning, as opposed to summative evaluation. AI systems can generate, validate, and adapt formative assessment items at scale, though quality varies dramatically across assessment types.

## AI-Generated Formative Items

### Multiple-Choice Questions (CODE-GEN)

Duan et al. (2026) demonstrate that agentic AI can reliably generate MCQs for coding comprehension when validated across seven pedagogical dimensions. Success rates reach **98.6%** for concept alignment and **79.9%** for feedback quality—suggesting that AI is strongest on verifiable dimensions and weakest on instructional-judgment dimensions.

### Automated Essay Scoring (MASS)

Kamalov et al. (2026) implement a multi-agent framework (MASS) for essay scoring. Preliminary results show improved consistency over stand-alone LLMs, though interpretability of multi-agent scoring decisions remains an open challenge.

### Curriculum-Grounded Feedback (LearnLens)

Zhao et al. (2025) present **LearnLens**, a modular LLM system for science education feedback that addresses three persistent problems in AI formative assessment:

1. **Error-aware assessment** — captures nuanced reasoning errors rather than surface mistakes
2. **Topic-linked memory chains** — replaces noisy similarity-based RAG with structured curriculum-grounded retrieval
3. **Educator-in-the-loop** — teacher customisation and oversight, not full automation

**Key differentiator:** LearnLens uses a **structured, topic-linked memory chain** rather than traditional RAG similarity search, improving relevance and reducing noise. This connects to the broader tension in [[human-in-the-loop-ai]]: scalable automation with expert validation.

## Design Trade-offs

| Dimension | AI Suitability | Human Requirement |
|-----------|----------------|-------------------|
| Factual correctness | High | Low |
| Concept alignment | High | Medium |
| Distractor quality | Low | High |
| Feedback depth | Low | High |
| Rubric consistency | Medium | Medium |

## Risk: Assessment as Surveillance

Formative assessment systems can shift from learning-support tools to behavior-monitoring infrastructure. The same data streams that enable adaptive tutoring can enable punitive tracking if governance is weak.

## Connected Concepts

- [[adaptive-learning]]
- [[adaptive-learning]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[administrator]]
- [[adult-learning]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[agentic-ai]]
- [[agentic-ai]]
- [[over-reliance]]
- [[ai-ed-evaluation]]
- [[ai-education]]
- [[ai-literacy]]
- [[ai-tutoring]]
- [[andragogy]]
- [[assessment-validity]]

## Connected Articles

- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[genai-policies-higher-ed-computing]] — A Comparative Analysis of Institutional and Course Generative AI Policies within Higher Education: Implications for I...
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[multiagent-classroom-dual-process-physics-teachers-2026]] — A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers
- [[metacognitive-learning-scenarios-taxonomy]] — A Taxonomy of Metacognitive Learning Scenarios in Professional Contexts: Integrating Systems Theory with Empirical Co...
- [[liang-genai-systematic-review-human-ai-2026]] — A systematic review of generative AI in education: Empirical insights from a human–AI interaction perspective
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[automated-presentation-coaching]] — A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges
- [[ai-literacy-legal-translation-2026]] — AI Literacy for Legal Translation: Developing Digital Resilience
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[genai-usage-design-students-survey]] — A study of GenAI usage by Design Students: Analysis of Survey Results and Journals of AI practices at the Politecnico...
- [[brookings-ai-students-report]] — A New Direction for Students in an AI World: Prosper, Prepare, Protect
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[institutional-change-framework-ai]] — A Framework for Institutional Change in the Age of AI
- [[teacher-ai-adoption-confidence]] — AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study o...
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-learning-transfer]] — AI Learning Transfer
