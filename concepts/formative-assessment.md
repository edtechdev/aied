---
title: Formative Assessment
created: "2026-05-07T10:44:35-04:00"
updated: "2026-08-27T09:20:00-04:00"
type: concept
tags: [formative-assessment, assessment, automated-assessment, feedback, ai-feedback-quality, learning-analytics, personalized-learning, adaptive-learning, generative-ai, llm, human-in-the-loop-ai, scaffolding, ai-education]
category: [assessment]

confidence: high
---

> **Formative assessment** — assessment designed to inform ongoing instruction and learning, as opposed to summative evaluation. In AI education, formative assessment is both transformed by AI and essential to it: AI systems can generate, validate, and adapt formative items and feedback at scale, while formative feedback is a primary mechanism through which [[intelligent-tutoring|AI tutors]] and [[adaptive-learning|adaptive systems]] support learning. The wiki's research examines AI-generated formative items, AI-generated feedback, and the design and evaluation of these systems.

Formative assessment is central to AI in education because it sits at the junction of [[assessment]] and [[feedback|learning feedback]]. Its purpose is to close the loop: surface what students know and don't know, and provide feedback they can act on to improve. AI makes this feasible at scale — generating items, scoring responses, and delivering individualized feedback — but the wiki's research shows that quality varies dramatically across item types, and that feedback only helps when students actually enact it.

## AI-generated formative items

AI systems generate formative assessment items across modalities, with reliability varying by type:

- **Multiple-choice questions:** [[code-gen|CODE-GEN]] shows agentic AI can reliably generate MCQs for coding comprehension when validated across seven pedagogical dimensions — success rates reach **98.6%** for concept alignment and **79.9%** for feedback quality — suggesting AI is strongest on verifiable dimensions and weakest on instructional-judgment dimensions. This connects to [[automated-question-generation|automated question generation]] more broadly.
- **Automated essay scoring:** multi-agent frameworks (e.g., MASS) improve consistency over stand-alone [[llm|LLMs]] for [[automated-essay-scoring|essay scoring]], though interpretability of multi-agent scoring decisions remains an open challenge.
- **Formative scoring pipelines:** [[cotal-formative-assessment-scoring-2026|CoTAL]] couples Chain-of-Thought prompting with [[active-learning|active learning]] and Evidence-Centered Design to produce generalizable formative-assessment scoring with human-in-the-loop [[prompt-engineering|prompt engineering]].
- **High-frequency, [[automated-assessment|automatically-marked assessments]]:** [[automated-formative-assessments-a-level-sciences|automated formative assessments in A-level sciences]] examines the effect of high-frequency, automatically-marked formative assessment on learning outcomes.

## AI-generated feedback

A large body of wiki research examines AI-generated formative feedback:

- **The enactment problem:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13,037 students; 51,296 resources) shows feedback value depends on whether students *enact* it — the **Enacted Feedback** condition, where students select, evaluate, and apply AI feedback suggestions, outperformed simple directed feedback.
- **Feedback is not information transfer:** [[care-full-feedback-genai|The care-full craft of feedback]] argues feedback is an ethical, relational practice, not information transmission — feedback only constitutes feedback when students make sense of and act on it, and contrasts mass-produced "AI slop" with human comment-bank shortcuts.
- **Sequenced feedback can backfire:** [[sequenced-ai-feedback-learning|Sequenced AI feedback]] (encouragement → hints → correct answer, designed to promote autonomy) actually **harmed learning** in a randomized experiment (N=199) despite boosting engagement and positive perceptions — a cautionary finding about feedback design.
- **Learner-centered tools:** [[learner-centered-feedback-ai|PolyFeed]] combines ML suggestion models with teacher practice, showing how teachers adopt and adapt AI feedback suggestions; [[ai-internal-feedback-evaluative-judgments|AI-supported internal feedback]] helps undergraduates develop evaluative judgment.
- **Feedback futures:** [[feedback-futures-genai|Feedback Futures]] synthesizes a special issue and argues the question is not *whether* GenAI can produce feedback but how to design feedback that supports learning, distilling recurring tensions across the field.

## Curriculum-grounded and educator-in-the-loop design

[[ai-learning-tools-engineering-education-needs|LearnLens]] addresses three persistent problems in AI formative assessment: **error-aware assessment** (capturing nuanced reasoning errors rather than surface mistakes), **topic-linked memory chains** (replacing noisy similarity-based [[rag|RAG]] with structured curriculum-grounded retrieval), and **educator-in-the-loop** design (teacher customisation and oversight, not full automation). This connects to the broader tension in [[human-in-the-loop-ai]]: scalable automation with expert validation.

## Design trade-offs

| Dimension | AI Suitability | Human Requirement |
|-----------|----------------|-------------------|
| Factual correctness | High | Low |
| Concept alignment | High | Medium |
| Distractor quality | Low | High |
| Feedback depth | Low | High |
| Rubric consistency | Medium | Medium |

## Assessment, feedback, and learning

Formative assessment in AI education connects to the learning process itself:

- **Feedback loops:** [[feedback|feedback loops]] are the mechanism by which formative assessment informs learning; AI tutors and adaptive systems close these loops at scale.
- **Self-regulated learning:** formative feedback supports [[self-regulated-learning|self-regulated learning]] when students monitor progress and adjust; AI feedback should cultivate [[ai-internal-feedback-evaluative-judgments|evaluative judgment]], not displace it.
- **Scaffolding:** [[scaffolding]] and formative assessment work together — AI can provide just-in-time hints and prompts, though sequenced feedback research cautions against over-structuring.
- **Validity and quality:** the [[ai-feedback-quality|quality]] and [[assessment-validity|validity]] of AI-generated formative items and feedback must be evaluated; [[ai-ed-evaluation]] provides the methods.

## Risk: Assessment as surveillance

Formative assessment systems can shift from learning-support tools to behavior-monitoring infrastructure. The same data streams that enable adaptive tutoring can enable punitive tracking if governance is weak. This connects to [[privacy]] and [[well-being|student well-being]], and argues for formative systems that support learning rather than surveil it.

## Implications for AI in education

- **Match item type to AI reliability:** use AI for verifiable dimensions (concept alignment, correctness) and retain human judgment for instructional dimensions (distractor quality, feedback depth).
- **Design for enactment, not just provision:** AI feedback only helps when students select, evaluate, and apply it — structure workflows that support enactment.
- **Feedback design matters more than volume:** sequenced or over-structured feedback can backfire; prioritize feedback that supports student sense-making and autonomy.
- **Keep educators in the loop:** curriculum-grounded, educator-in-the-loop systems improve relevance and reduce noise.
- **Evaluate quality and validity:** assess AI-generated items and feedback for quality, validity, and equity, not just generation speed.

## Connected Concepts

- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Summative assessment: AI-resistant formats (oral, proctored, closed-book exams)

## Connected Articles
- causal-modelling-competency-assessment-2026 — Causal Modelling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ni-lam-multiliteracies-ai-portfolio-2026]] — Students' perceptions of multiliteracies development with AI-assisted portfolio assessment
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: from provision to enactment
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of GenAI
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[sequenced-ai-feedback-learning]] — Impact and pathways of sequenced AI feedback
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI
- [[ai-internal-feedback-evaluative-judgments]] — Developing evaluative judgments through AI-supported internal feedback
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: formative assessment scoring with human-in-the-loop prompting
- [[automated-formative-assessments-a-level-sciences]] — High-frequency automated formative assessment
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: curriculum-grounded AI feedback
- [[genai-teacher-feedback-comparison]] — GenAI vs. teacher feedback comparison
- [[chatgpt-feedback-engagement-genai]] — ChatGPT feedback and engagement
- [[becerra-aicofe-feedback-2026]] — AI-coffee feedback framework
- [[code-gen]] — CODE-GEN: validated MCQ generation
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for authentic assessment
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux/bash exams
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)

- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
