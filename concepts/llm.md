---
title: Large Language Models (LLMs)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: concept
tags: [generative-ai, prompt-engineering, rag, hallucination-risk, pedagogical-safety, intelligent-tutoring, automated-assessment, ai-literacy]

confidence: high
---

> **Large Language Models (LLMs)** — neural network models trained on vast text corpora that generate human-like text, powering most modern [[ai-education|AI in education]] applications. LLMs are the computational backbone of generative AI tutoring, assessment, and content generation in education.

## Questions to Consider

- What do you believe an AI [[conversational-ai|chatbot]] 'knows' when it answers you? The page frames LLMs as generating probable text rather than retrieving verified facts — how does that distinction change how much you would trust a model's explanations?
- LLMs are described as the engine behind most modern AI education tools — tutoring, grading, content generation, and even diagnosing what students know. Of these uses, which do you think is most and least appropriate for a probabilistic text generator, and why?
- The page reports that three different LLMs produced sharply divergent support plans for the same learning-analytics input, each with different demographic assumptions. If models aren't interchangeable as advisors, what does that mean for an institution that adopts one?
- Because LLM output is sensitive to prompts and settings, two people can get very different results from the same model. How should this influence how you — as a learner or designer — phrase requests, and how much you trust a single output?
- A key limitation is hallucination — plausible-sounding but ungrounded content. In a tutoring or grading context, what would it take for you to feel confident the model wasn't inventing something, and what safeguards would you demand before letting it assess a real student?

## Introduction

### LLMs as the engine of AIED

LLMs are the most-referenced concept in the knowledge base (60+ articles) because they underpin nearly every AI education application:

- **Tutoring:** [[intelligent-tutoring|AI tutors]] use LLMs for dialogue, explanation, and [[problem-solving]] guidance. [[pedagogical-llm-training|Pedagogical training]] adapts general LLMs for educational use.
- **Assessment:** [[automated-assessment|Grading systems]], [[automated-essay-scoring|essay scoring]], and [[llm-item-difficulty-prediction|item difficulty prediction]] leverage LLM capabilities. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] show GPT-4o can estimate the difficulty of K-5 math and reading items (N = 5170) calibrated under the Rasch IRT model: zero-shot ratings correlated moderately-to-strongly with true difficulties (r = 0.83 math, r = 0.81 reading) but varied by grade, while a feature-based strategy in which the LLM extracts cognitive and linguistic features for tree-based models reached correlations up to r = 0.87 — evidence that structured feature extraction can outperform a single holistic LLM judgment. Across the aggregate grading literature, a PRISMA-guided [[meta-analysis-systematic-review|systematic review]] of 42 empirical studies (2023–2025) concludes that LLMs match human raters on short, well-structured tasks with detailed rubrics yet cannot fully replace human judgment on complex, open-ended, or subjective work, and that model version is a dominant determinant of grading quality ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Reliability also varies sharply by item type: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] found ChatGPT-5 matched faculty closely on objective pharmacy-exam items (CCC 0.935–1.000) but was unreliable on short-answer (CCC ≈0) and essay (0.341–0.854) items, and that providing a rubric did not consistently improve agreement.
- **Multimodal reasoning LLMs as graders:** when a multimodal, reasoning-capable LLM (GPT-o4-mini) graded a 296-student handwritten general-chemistry exam page-by-page against rubric images, single-run total scores were highly reproducible (ICC(A,1) = 0.967; averaging five runs reached 0.993) and agreed strongly with TA totals (R² = 0.91), yet item-level reliability was sharply format-dependent — textual and reaction-equation answers graded well while drawing and graphing were worse than random (background grids distract AI vision). This shows an LLM grader's trustworthiness is a function of response format and task, not just raw model capability, and that [[human-in-the-loop-ai|selective deferral]] via confidence filters is needed for high-stakes use ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Content:** [[generative-ai|Generative AI]] content creation relies on LLMs. [[automated-question-generation|Question generation]] and [[ai-generated-instructional-videos-computing-ed|video generation]] are LLM-driven.
- **Safety:** [[pedagogical-safety]], [[hallucination-risk]], and [[ai-tutor-safety-harms]] [[research-methods-aied|research]] examine LLM-specific risks.
- **Diagnosis:** [[knowledge-tracing]] and [[cognitive-diagnosis]] increasingly incorporate LLMs for richer [[student-modeling|student modeling]]. Grounding matters enormously for error diagnosis: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] showed that supplying GPT-4 the tutor interface structure plus Bayesian [[knowledge-tracing]] skill estimates raised logical-error identification from 40% to 81% on factoring (overall error diagnosis ~87.8%), while multi-step problems and responses with several errors remained weak cases and hallucinated "common-misconception" diagnoses persisted — evidence that an LLM's diagnostic value is as much a function of the structured context and [[student-modeling|learner-model]] signals it receives as of the model itself.
- **Assessment model shift (2017–2024):** Morley et al.'s scoping review of auto-marking short-answer [[science-education|science]] questions traces the field's move from fine-tuning smaller [[educational-nlp|BERT]] models (dominant through 2021) toward prompting larger LLMs (GPT-1/2/3.5/4) from roughly 2022 — adopted via [[prompt-engineering]] rather than fine-tuning — with domain-augmented models, rubric-aware prompting, and chain-of-thought lifting accuracy. Yet GPT models were rarely benchmarked against BERT on standard corpora, few auto-markers could explain their marks, and [[bias-mitigation|bias]] was seldom examined, cautions that apply to LLM assessment generally ([[auto-marking-short-answer-science-2026]]).

### Model-specific research

The knowledge base covers both general-purpose LLMs (GPT-4, Claude) and education-specific adaptations. [[cstutorbench-slm-tutors|Small language model benchmarks]] compare SLM performance for tutoring. [[educational-llm-alignment|Educational alignment]] research addresses how to make LLMs pedagogically appropriate. A classroom study across three frontier families — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — found that ChatGPT, Gemini, or Claude could act as collaborative critique partners for argumentative writing: over a semester of iterative essays, students improved on argument quality, [[prompt-engineering|prompt engineering]], and response-to-AI feedback by roughly a full standard deviation each (all p < .001) and engaged deeply (87.8% rebutting LLM claims), positioning general-purpose LLMs as viable collaborative learning partners rather than mere answer generators.

A complementary line of work reframes LLMs from static graders into emulators of [[pedagogy|pedagogical]] reasoning. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] showed that GPT-4, scaffolded with a semantically precise, iteratively co-refined rubric, could approximate human evaluative judgment in [[design-based-research|design-based learning]]: initial LLM–human agreement was poor (Cronbach's Alpha = 0.393; Kappa −0.06 to 0.18), but iterative rubric refinement raised mean agreement from 54.75% to 81.25% (final Alpha = 0.798, Kappa 0.40–0.55), and K-means clustering of human and LLM score matrices showed highly correlated centroids (r = 0.89). The study positions the rubric as a mediating interface between human pedagogical intent and machine inference — evidence that off-the-shelf LLMs are not interchangeable as evaluators either, and that their assessment behavior is a design outcome shaped by the rubric and prompts they are given. Raw model capability differentiates grading too: benchmarking eleven GenAI and sentence-embedding models on 1,885 open-ended [[automated-assessment|responses]], [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] found only GPTo1 reached almost-perfect agreement with expert human graders (Fleiss' Kappa 0.82), with Claude3 and PaLM2 slightly behind, while reference-aligned models such as BERT fell far short — showing that frontier-model context-sensitivity matters for reliable open-ended assessment. Model differences also matter for high-stakes downstream uses. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] showed that three LLMs produced sharply divergent student-support prescriptions for the same [[learning-analytics|learning-analytic]] input, and each imposed distinct demographic priors on the learner profiles they generated — evidence that off-the-shelf LLMs are not interchangeable as prescriptive advisors. Similarly, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] found that GPT-4's scoring of pre-clerkship [[medical-education|medical]] open-ended questions climbed to substantial-to-almost-perfect inter-rater agreement with faculty (weighted kappa up to 0.94) only after three rounds of iterative rubric refinement, and fell to moderate (κw = 0.54) on a holistic-rubric item — reinforcing that rubric design, not raw capability alone, is the decisive lever for LLM scoring reliability. Model-specific behaviour also shows up in how LLMs respond to skeptical users: an algorithmic audit queried ten frontier LLMs 500 times each with a rural-Montana [[k-12]] AI-skeptic persona to test whether AI systems consulted by skeptical users are predisposed to encourage adoption. Eight of ten acknowledged user concerns then redirected to AI-[[student-engagement|engagement]] framings; composite scores spanned from 3.85 (Claude Sonnet) to 7.52 (Gemini 3.1 Pro Preview), with a cross-family AI scorer panel clearing Cohen's kappa >= 0.70. The pattern was a model-dependent design outcome. Model capability also depends on how models are combined: Bird (2026) fine-tuned eight state-of-the-art transformers (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) to classify English literature by UK Key Stage, finding the best unimodal transformer (BERT) reached only an F1 of 0.75 — while fusing a fine-tuned ELECTRA with a computational-linguistics neural network lifted F1 to 0.996, showing that transformer text classification alone is limited and that fusion with complementary features is where the gains lie.

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
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
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

- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[frontier-ai-redirect-skeptical-rural-staff-2026]] — Algorithmic audit: how frontier LLMs redirect skeptical rural K-12 staff
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Systematic review: LLM/ChatGPT platforms dominate reported higher-ed AI integration
- [[bird-multimodal-educational-literature-2026]] — Multimodal fusion for classifying educational literature
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
