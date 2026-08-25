---
title: Comprehensive Review of Intelligent Tutoring Systems
created: "2026-07-29T04:33:04-04:00"
updated: "2026-08-25T08:20:00-04:00"
type: article
tags: [intelligent-tutoring, literature-review, adaptive-learning, pedagogical-llm-training, educational-nlp, socratic-questioning, scaffolding]
sources: ['raw/papers/zerkouk-comprehensive-review-its-2025.md']
confidence: medium
---

> **Comprehensive Review of Intelligent Tutoring Systems** — Journal of Computers in Education (2025). A systematic literature review covering 2010–2025 that analyzes the deployment and effectiveness of Intelligent Tutoring Systems (ITS) in real educational settings. The review examines the full landscape of ITS research — [[pedagogy|pedagogical]] strategies, natural language processing, adaptive learning mechanisms, student modeling approaches, and [[discipline-specific-aied|domain-specific]] applications — and arrives at a nuanced verdict: the evidence for ITS effectiveness is mixed, revealing a complex landscape of genuine advancements alongside persistent challenges in scientific rigor and real-world impact.

## Key Findings

This review provides the most comprehensive mapping of the [[intelligent-tutoring]] field since the emergence of [[llm]]-based tutoring approaches transformed the landscape. Spanning a 15-year window (2010–2025), it captures both the pre-LLM era of traditional ITS and the post-LLM era that has fundamentally reshaped what is technically possible.

**Mixed effectiveness evidence.** The review's central finding is that ITS effectiveness is neither uniformly positive nor categorically negative. ITS can improve student performance by roughly **20%** on average, yet individual human tutoring still demonstrates up to **98%** improvement — the cost/scalability gap ITS aim to fill. Some systems demonstrate substantial learning-gains, particularly in well-structured domains like [[math-education|mathematics]] and programming where [[student-modeling]] and [[knowledge-tracing]] techniques are most mature. Other deployments show negligible or context-dependent effects. This mixed picture challenges both the optimistic narrative that AI tutoring is a proven solution and the pessimistic narrative that it is ineffective. Instead, it calls for more nuanced questions: *which* systems, for *which* learners, in *which* contexts, produce *which* outcomes? This aligns with the [[meta-analysis-systematic-review|systematic-review literature]]'s emphasis on contextual factors.

**Pedagogical strategies.** The review catalogs the range of pedagogical approaches embedded in ITS, from [[socratic-method]] and [[scaffolding]] to [[adaptive-learning]] and [[adaptive-learning]] pathways. A key finding is that many ITS implementations lack explicit pedagogical grounding — the tutoring behavior is often driven by technical capabilities (what the system can do) rather than pedagogical principles (what the system should do). This echoes concerns in the [[pedagogical-llm-training]] literature about the gap between technical sophistication and pedagogical intentionality.

**NLP and adaptive mechanisms.** The integration of [[educational-nlp]] techniques — including [[automated-question-generation]], short-answer assessment, and dialogue management — has advanced substantially over the review period. However, the review notes that many NLP components are evaluated in isolation rather than as integrated parts of tutoring systems that actually interact with learners. Similarly, [[adaptive-learning]] show promise but often rely on narrow student models that fail to capture the full complexity of learner cognition and affect — a gap that the [[affective-tutoring]] and [[multimodal-ai-tutoring]] communities are beginning to address.

**Student modeling challenges.** [[student-modeling]] remains both the foundation and the bottleneck for ITS. While [[knowledge-tracing]] techniques (including Bayesian approaches like [[stanbkt-bayesian-knowledge-tracing]] and deep learning variants) have improved, the review identifies persistent gaps in modeling higher-order cognitive processes, metacognition, and [[motivation|motivational]] states. This connects to the [[engagement-intensity-learner-modeling]] and [[metacognition]] literatures.

**Scientific rigor deficit.** One of the review's most important contributions is its [[research-methods-aied|methodological]] critique. Many ITS studies suffer from weak experimental designs — small sample sizes, absence of control groups, short intervention durations, and inadequate statistical analyses. The authors call for greater scientific rigor, including [[rct]] where feasible, pre-registration of study designs, and transparent reporting aligned with educational research standards. This methodological critique connects to broader concerns in [[ai-ed-evaluation]] about the quality of evidence in AI education research.

## Synthesis with Current Wiki Evidence

| Claim in review | Supporting evidence in wiki | Contradictory evidence |
|---|---|---|
| ITS show mixed real-world effectiveness | [[stanford-evidence-base-ai-k12-2026]] (only 20/818 papers meet causal standards) | [[pedagogical-llm-training|EduQwen]] (96.52% benchmark, but benchmark ≠ classroom) |
| Need for stronger experimental rigor | [[educational-llm-alignment|Hardy & Kim]] (benchmark≠teaching quality) | — |
| NLP advances for dialogue | [[huang-interpretable-knowledge-tracing-2026]] (interpretable dialogue modeling) | [[ai-tutor-safety-harms|SafeTutors]] (multi-turn degradation: 17.7% → 77.8%) |
| [[affective-computing|Affective computing]] as advancement | [[affective-tutoring|MathBuddy]] (+23 points win rate) | [[ai-tutor-safety-harms]] (emotional risks, parasocial dependency) |
| Multi-agent architectures | [[agentic-workflows-education]] (four paradigms), [[human-in-the-loop-ai]] (MAIC) | [[collaborative-ai-tutoring|ProPACT]] (effective but requires eye-tracking hardware) |

## Key Implications for the Field

1. **[[benchmark|Benchmarks]] are not enough.** High benchmark scores (CDPK, DeepTutor) must be complemented by classroom RCTs measuring actual [[learning-gains|learning gains]].
2. **Teacher integration is a bottleneck.** Technical sophistication matters less than [[curriculum-design|curriculum]] fit and teacher control — see [[human-in-the-loop-ai]].
3. **Long-term studies are essential.** Most ITS research measures immediate outcomes; SRL, metacognition, and transfer require longitudinal designs.
4. **Domain-specificity is real.** A system effective in math may fail in writing; claiming "general tutoring" without domain evidence is overstated.
5. **[[ethics|Ethical]] and [[equity-in-ai-education|equity]] dimensions matter.** [[privacy|Data privacy]], [[bias-mitigation|algorithmic bias]], and [[academic-integrity|academic integrity]] are core determinants of whether ITS gains are sustainable and fair.

## Implications

For researchers, this review provides both a taxonomy of the field and a methodological call to action. The mixed effectiveness findings underscore the need for [[rct]]-quality studies that can disentangle the effects of specific ITS features from confounds like novelty effects, instructor quality, and student self-selection. The review's emphasis on real educational settings — as opposed to laboratory studies — pushes the field toward ecologically valid research designs that mirror the [[ai-education]] challenges faced by practitioners.

For system designers, the review's catalog of pedagogical gaps suggests concrete priorities: ITS should be built on explicit pedagogical frameworks rather than retrofitted onto technical architectures; domain-modeling should incorporate richer representations of learner cognition and affect; and [[learning-analytics]] should be embedded from the start to enable continuous improvement and evidence generation.

The review's identification of persistent student modeling limitations connects directly to emerging work on [[llm-student-modeling-memory]] and [[history-aware-student-simulation]], which offer potential pathways toward more sophisticated learner representations. Similarly, the call for [[adaptive-learning]] that goes beyond simple difficulty adjustment toward truly personalized pedagogical experiences connects to the [[learnmate2-llm-adaptive-learning]] and [[nie-personavlm-long-term-personalization-2026]] research streams.

For the [[edtech-platform]] industry and [[educational-policy-ai]] community, this review serves as a sobering reminder that technical capability does not guarantee educational effectiveness. The mixed evidence base should temper claims of AI tutoring as a silver bullet while also validating continued investment in rigorous ITS research and development. The path forward requires [[ai-ed-evaluation]] frameworks that match the sophistication of the systems being evaluated.

## Connected Concepts

- [[adaptive-learning]] — the personalization mechanism ITS employ
- [[affective-tutoring]] — the affective-computing advancement
- [[ai-ed-evaluation]] — the evaluation frameworks the field needs
- [[ai-education]] — the application context
- [[automated-question-generation]] — an NLP capability
- [[educational-nlp]] — the dialogue/processing layer
- [[educational-policy-ai]] — the policy context for adoption
- [[intelligent-tutoring]] — the systems under review
- [[knowledge-tracing]] — a core student-modeling technique
- [[learning-analytics]] — the data layer for continuous improvement
- [[metacognition]] — a higher-order process modeling often misses
- [[pedagogical-llm-training]] — the pedagogical-intentionality gap
- [[rct]] — the rigorous design the field needs
- [[scaffolding]] — a pedagogical approach embedded in ITS
- [[socratic-method]] — a pedagogical approach embedded in ITS
- [[student-modeling]] — the foundation and bottleneck

## Connected Articles

- [[engagement-intensity-learner-modeling]] — Engagement Intensity as a Learner-Modeling Signal for Adaptive AI Ethics Instruction
- [[history-aware-student-simulation]] — Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[llm-student-modeling-memory]] — LLM Student Modeling and Long-Term Memory Architecture
- [[multimodal-ai-tutoring]] — Multimodal AI Tutoring in STEM
- [[nie-personavlm-long-term-personalization-2026]] — PersonaVLM: Long-Term Personalization for AI Tutors
- [[stanbkt-bayesian-knowledge-tracing]] — StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[stanford-evidence-base-ai-k12-2026]] — AI in K-12 Evidence Base
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritise Learning over Performance

## Citation

Zerkouk, M., Mihoubi, M., & Chikhaoui, B. (2025). [Comprehensive Review of Intelligent Tutoring Systems](https://arxiv.org/abs/2507.18882v1). *Journal of Computers in Education*.
