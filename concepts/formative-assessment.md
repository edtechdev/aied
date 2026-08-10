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

- [[ai-literacy]]
- [[higher-ed]]
- [[automated-grading]]
- [[student-experience]]
- [[scaffolding]]
- [[stem-education]]
- [[personalized-learning]]
- [[teacher-role]]
- [[adaptive-learning]]
- [[feedback-loop]]
- [[generative-ai]]
- [[intelligent-tutoring]]
## Connected Articles

- [[ai-changing-teaching-workflows]]
- [[ai-coaching-rl-skill-development]]
- [[ai-generated-feedback-higher-ed]]
- [[ai-learning-tools-engineering-education-needs]]
- [[assessment-team-problem-solving-computing-education]]
- [[authentic-assessment]]
- [[automated-formative-assessments-a-level-sciences]]
- [[automated-grading-linux-bash-examinations-large-language-models]]
- [[becerra-aicofe-feedback-2026]]
- [[buggy-genai-code-student-responses]]
- [[code-review-genai-cs1]]
- [[cognitive-offloading-llm-synthesis-writing]]
- [[correct-answer-trap-ai-tutor]]
- [[correct-answer-trap-misconceptions]]
- [[critical-engagement-code-completion]]