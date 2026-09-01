---
title: "Semantic Variability of LLM-Generated Replies Across LLMs: Implications for Designing Conversation-Based Assessment"
created: "2026-08-28T09:07:00-04:00"
updated: "2026-08-28T09:07:00-04:00"
type: article
tags: [llm, conversational-ai, assessment-validity, assessment, automated-assessment, prompt-engineering, generative-ai, educational-measurement, trust-calibration]
research_method: [educational measurement]
category: [assessment]
sources: ['raw/papers/2608.24920.md']
confidence: high
---

> **Synthesis:** Hao (2026) examines whether [[llm|LLM]]-generated replies remain semantically consistent when the underlying model changes, using messages from real collaborative [[problem-solving]] conversations to compare generated replies across four LLMs under conditions with and without preceding chat history. Results show that model choice and conversational context both affect response similarity and alignment with human replies: within-model similarity consistently exceeds between-model similarity, and including history meaningfully changes response content. The findings indicate that prompting and conversational context alone may not suffice to preserve response consistency across LLMs, highlighting the need for infrastructure and design strategies that maintain stable, comparable responses amid the rapid evolution of LLMs — a core validity challenge for [[conversational-ai|conversation-based]] [[assessment]].

## The adaptivity-standardization tension

[[llm|Large language models]] and [[generative-ai|generative AI]] create a new paradigm for assessing complex skills such as communication and collaboration, which are difficult to measure at scale with conventional item formats because they are manifested through situative, dynamic interactions rather than isolated responses. [[conversational-ai|LLM-based agents]] can engage learners in natural, adaptive interactions that elicit richer, more authentic evidence of these skills. Yet LLM-enabled interaction introduces a fundamental tension between adaptivity and standardization: standardized assessment assumes comparable learner inputs produce comparable assessment conditions, whereas LLM-based agents generate responses dynamically, adapting to learner input, conversational context, and model behavior. The same learner input may receive semantically different replies depending on the LLM, prompt, deployment setting, or prior chat history — a challenge compounded by the rapid evolution of LLMs as new models are released and older ones are retired.

## The measurement stakes

From a measurement perspective, the key issue is not whether AI responses vary but whether they remain sufficiently consistent for measuring the intended constructs. AI-generated replies need not be identical in wording, but they should preserve the intended assessment function, sustain task-relevant interaction patterns, and provide comparable opportunities for learners to demonstrate the target construct. Uncontrolled variability risks introducing **construct-irrelevant variance** that threatens [[assessment-validity|validity]], reliability, [[bias-mitigation|fairness]], and comparability — the foundational requirements of educational assessment (AERA, APA, & NCME, 2014). This connects directly to the knowledge base's [[assessment-validity]] and [[educational-measurement]] concepts and the broader literature on [[psychometrically-aware-ai|psychometrically aware AI]]. The goal is not to eliminate variability but to ensure it stays within acceptable bounds for the intended use.

## Neuro-symbolic design and response consistency

Traditional conversational systems, such as those in [[intelligent-tutoring|intelligent tutoring systems]], use modular architectures of intent detection, dialogue state tracking, and rule-based response selection. LLM-based systems instead rely primarily on prompts and conversation history to guide generation, enabling more natural interaction but also greater response variability. To optimize this tradeoff, neuro-symbolic approaches are increasingly adopted in conversation-based learning and assessment: LLMs interpret input, detect intent, classify dialogue moves, or generate responses, while rule-based actions are executed by a separate module or by an LLM prompted to follow predefined rules. Such designs depend on two LLM capabilities: accurately classifying utterances and generating semantically consistent responses in similar conversational contexts. Hao et al. have demonstrated the former; this study examines the latter.

## Empirical findings

The study used dyadic online collaborative problem-solving science data (99 teams), focusing on 61 late-stage focal messages with highly relevant human replies. Four LLMs were evaluated (GPT-4o mini, GPT-5.4, GPT-5.4 mini, GPT-5.4 nano), each generating 100 responses per focal message under both no-history and with-history conditions, with semantic similarity measured via text-embedding cosine similarity. Key findings:

1. Including chat history does not make LLM replies more similar to one another in all cases; its effect depends on the LLM. Replies remain consistently dissimilar from human replies, though history can slightly improve alignment.
2. Within-model similarity consistently exceeds between-model similarity: within-LLM similarity ranged from 0.715–0.795, while between-LLM similarity ranged from 0.443–0.604. Models within the GPT-5.4 family were more similar to one another than to GPT-4o mini, indicating model architecture and lineage shape consistency.
3. In the no-history condition, semantically similar focal messages elicited more similar replies; adding history introduced context that made replies less dependent on focal-message similarity alone.
4. Median cross-history similarity was ~0.40–0.45, meaning that adding chat history meaningfully changed the semantic content of generated replies across all models.

Mixed-effects models confirmed that LLM type, history condition, and their interaction significantly affected both mean pairwise similarity and its variability, with responses more aligned with human replies tending to be more consistent.

## Implications for conversation-based assessment

The results show that even for a single conversational turn, the semantic content of LLM-generated replies varies across models and context conditions. This means that maintaining consistent assessment interactions as LLMs evolve is an **infrastructure challenge** rather than merely a [[prompt-engineering]] challenge. Systems that rely on LLM-generated responses require additional mechanisms to monitor, [[benchmark]], and control response behavior across model transitions — potentially including symbolic rules, response templates, and validation layers that preserve assessment-relevant functions despite underlying model changes. These considerations are particularly important in high-stakes settings, where variability may affect the comparability of assessment conditions and, ultimately, the [[assessment-validity|validity, reliability, and fairness]] of [[automated-assessment|AI-based assessment]] — connecting to [[trust-calibration]] and the design of robust [[conversational-ai|conversational agents]] for assessment.

## Connected Concepts

- [[llm]]
- [[conversational-ai]]
- [[assessment-validity]]
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[psychometrically-aware-ai]]
- [[trust-calibration]]
- [[learning-analytics]]

## Connected Articles

- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs?
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: workflows and student enactment
- [[llm-formative-feedback-systematic-review-2026]] — Systematic review of LLM-based formative feedback
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents
- [[conversational-ai-informal-learning]] — Conversational AI in informal learning
- [[socratic-tests-conversational-assessment]] — Socratic tests in conversational assessment
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the age of AI: output as evidence of learning
- [[llm-tutoring-feedback-diagnosis-gap]] — LLM tutoring, feedback, and the diagnosis gap

## Citation

Hao, J. (2026). [*Semantic variability of LLM-generated replies across LLMs: Implications for designing conversation-based assessment*](https://arxiv.org/abs/2608.24920). arXiv:2608.24920 / AI in Measurement and Education (AIME 2026).
