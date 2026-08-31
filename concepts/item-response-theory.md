---
title: Item Response Theory
created: "2026-07-28T10:44:35-04:00"
updated: "2026-08-31T06:22:29-04:00"
type: concept
tags: [educational-measurement, assessment-validity, knowledge-tracing, student-modeling, psychometrically-aware-ai]
research_method: [educational measurement]
confidence: medium
---

> **Item response theory (IRT)** — a family of psychometric models that estimate latent ability from item responses by modeling the relationship between a learner's ability and the probability of answering each item correctly. IRT models item difficulty and discrimination, enabling measurement precision and adaptive testing. In the AI era, IRT meets [[llm|LLMs]] in [[llm-item-difficulty-prediction]] and [[llm-psychometric-calibration-cdp]]: AI predicts and calibrates item difficulty, potentially improving measurement precision and feeding [[adaptive-learning]].

## Questions to Consider

- Item response theory treats ability and item difficulty as jointly estimated from response patterns, rather than treating a raw test score as the measure. How might two students with the same number correct actually differ in ability?
- IRT lets you compare learners on a common scale and estimate precision per person. Why might knowing an item's difficulty and discrimination matter more than just knowing whether a student got it right?
- One study used IRT person-fit statistics to distinguish human from AI-generated responses on multiple-choice tests — flagging AI responses as 'aberrant.' How could the same measurement machinery that assesses learning also police academic integrity?
- Researchers use IRT to validate that AI-generated exam questions match expert-written ones in difficulty and discrimination. If an AI writes an item that 'looks' good, why is empirical calibration against fitted IRT parameters still necessary?
- As AI predicts and calibrates item difficulty, what could go wrong if a model's estimate of difficulty isn't validated against real student response data?
- IRT connects to adaptive testing and knowledge tracing — using your responses to choose what to ask next. How does estimating your ability from each answer enable a test to become shorter and more precise rather than just longer?

IRT treats ability (θ) and item parameters (difficulty, discrimination, sometimes guessing) as jointly estimated from response patterns, rather than treating a raw score as the measure. This makes it possible to compare learners on a common scale, to select items adaptively, and to estimate precision per person rather than globally.

### How IRT appears in the research

- **AI-predicted difficulty:** [[llm-item-difficulty-prediction|LLM item-difficulty prediction]] uses language models to estimate item difficulty, which must be validated against empirically fitted IRT parameters.
- **Psychometric calibration:** [[llm-psychometric-calibration-cdp|LLM psychometric calibration]] aligns model-based assessment with IRT-based measurement so that AI-generated responses preserve measurement properties.
- **Knowledge tracing and student modeling:** IRT is closely related to [[knowledge-tracing]] and [[student-modeling]] — models that track learner knowledge over time — sharing the goal of estimating unobservable learner states from observable responses.
- **Bayesian hierarchical field validation:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] uses a Bayesian hierarchical 2PL IRT model (with pre-test anchor items to place 1,686 students on a common θ scale) to show that AI-generated questions match expert-written standardized-exam items in difficulty and discrimination — a large-scale demonstration of IRT as the validation backbone for [[automated-question-generation]].

- **Separating human from GenAI responses with person-fit statistics:** [[irt-human-genai-mcq-responses|Strugatski and Alexandron (2026)]] apply person-fit statistics (PFS) within IRT to distinguish human from generative-AI responses on multiple-choice assessments. PFS flag GenAI responses as 'aberrant' responders in two authentic contexts (a chemistry test and a national exam), show that different chatbots produce distinct response patterns (a heterogeneous group of 'intelligences'), and reveal that newer GenAI versions become more human-like — positioning IRT as a robust framework for [[academic-integrity|integrity]] screening in high-stakes testing.

### Connections

IRT is a foundation of [[educational-measurement]] and [[assessment-validity]], underpins [[adaptive-learning]] (adaptive item selection) and [[student-modeling]], and connects to [[psychometrically-aware-ai]] (AI assessment aligned with measurement theory) and [[knowledge-tracing]]. It features in [[llm-difficulty-calibration-programming-exams-2026|LLM difficulty calibration]] for programming assessment.

## Connected Concepts

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Connected Articles
- causal-modelling-competency-assessment-2026 — Causal Modelling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)

- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing

- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: generative agent simulating students' cognitive evolution

