---
title: Large Language Models (LLMs)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-08-31T06:22:29-04:00"
type: concept
tags: [generative-ai, prompt-engineering, rag, hallucination-risk, pedagogical-safety, intelligent-tutoring, automated-assessment, ai-literacy]

confidence: high
---

> **Large Language Models (LLMs)** — neural network models trained on vast text corpora that generate human-like text, powering most modern AI in education applications. LLMs are the computational backbone of generative AI tutoring, assessment, and content generation in education.

## Questions to Consider

- What do you believe an AI chatbot 'knows' when it answers you? The page frames LLMs as generating probable text rather than retrieving verified facts — how does that distinction change how much you would trust a model's explanations?
- LLMs are described as the engine behind most modern AI education tools — tutoring, grading, content generation, and even diagnosing what students know. Of these uses, which do you think is most and least appropriate for a probabilistic text generator, and why?
- The page reports that three different LLMs produced sharply divergent support plans for the same learning-analytics input, each with different demographic assumptions. If models aren't interchangeable as advisors, what does that mean for an institution that adopts one?
- Because LLM output is sensitive to prompts and settings, two people can get very different results from the same model. How should this influence how you — as a learner or designer — phrase requests, and how much you trust a single output?
- A key limitation is hallucination — plausible-sounding but ungrounded content. In a tutoring or grading context, what would it take for you to feel confident the model wasn't inventing something, and what safeguards would you demand before letting it assess a real student?

### LLMs as the engine of AIED

LLMs are the most-referenced concept in the knowledge base (60+ articles) because they underpin nearly every AI education application:

- **Tutoring:** [[intelligent-tutoring|AI tutors]] use LLMs for dialogue, explanation, and problem-solving guidance. [[pedagogical-llm-training|Pedagogical training]] adapts general LLMs for educational use.
- **Assessment:** [[automated-assessment|Grading systems]], [[automated-essay-scoring|essay scoring]], and [[llm-item-difficulty-prediction|item difficulty prediction]] leverage LLM capabilities.
- **Content:** [[generative-ai|Generative AI]] content creation relies on LLMs. [[automated-question-generation|Question generation]] and [[ai-generated-instructional-videos-computing-ed|video generation]] are LLM-driven.
- **Safety:** [[pedagogical-safety]], [[hallucination-risk]], and [[ai-tutor-safety-harms]] research examine LLM-specific risks.
- **Diagnosis:** [[knowledge-tracing]] and [[cognitive-diagnosis]] increasingly incorporate LLMs for richer [[student-modeling|student modeling]].

### Model-specific research

The knowledge base covers both general-purpose LLMs (GPT-4, Claude) and education-specific adaptations. [[cstutorbench-slm-tutors|Small language model benchmarks]] compare SLM performance for tutoring. [[educational-llm-alignment|Educational alignment]] research addresses how to make LLMs pedagogically appropriate.

Model differences also matter for high-stakes downstream uses. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] showed that three LLMs produced sharply divergent student-support prescriptions for the same [[learning-analytics|learning-analytic]] input, and each imposed distinct demographic priors on the learner profiles they generated — evidence that off-the-shelf LLMs are not interchangeable as prescriptive advisors.

### Connections

LLMs connect to [[generative-ai]] (the broader category), [[prompt-engineering]] (how outputs are controlled), [[rag]] (knowledge grounding), [[hallucination-risk]] (the primary limitation), and [[pedagogical-safety]] (educational guardrailing).

## Connected Concepts

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[pedagogical-llm-training]]
- [[learning-by-teaching]]- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[multimodal-item-parameter-estimation-2026]]

- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[ai-tutor-safety-harms]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-intervention-design-cs-review]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[elbench-education-llm-benchmark-2026]]
- [[ai-feedback-enactment-workflow-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[learnlm-improving-gemini-learning]] — LearnLM: pedagogical instruction following
- [[teachlm-post-training-llms-education]] — TeachLM: post-training with authentic learning data
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: evaluating LLM-generated math diagrams
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated feedback
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP vs LLM rationales for teaching quality assessment

- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education

- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers

- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education

- [[luo-ibl-patterns-llm-bloom-2026]] — IBL patterns in LLM-driven environments (Bloom's perspective)
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System Theory and cognitive surrender: how AI reshapes human reasoning (Shaw & Nave 2026)
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: LLM-Augmented Assessment of Student Anxiety (2026)

- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX math-accessible physics video transcription
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation

