---
title: Educational Measurement
created: "2026-07-28T10:44:35-04:00"
updated: "2026-08-23T16:30:00-04:00"
type: concept
tags: [item-response-theory, assessment-validity, educational-nlp, learning-analytics, psychometrically-aware-ai, knowledge-tracing, ai-literacy]
confidence: medium
---

> **Educational measurement** — the psychometric theory and methods for quantifying and validating learning and its constructs — runs through the wiki's [[item-response-theory]], [[knowledge-tracing]], and [[assessment-validity]] pages. The LLM era forces measurement to reconcile classical psychometrics with new AI-generated response streams: automated scoring, AI-predicted difficulty, and multimodal traces must be validated against established measurement principles to preserve reliability and validity.

Educational measurement is the discipline of turning observations about learning — responses, behaviors, scores — into defensible quantitative claims. It encompasses construct definition, item/test design, scaling, reliability, and validity. In AI in education, measurement questions are everywhere: does a [[benchmark|benchmark score]] measure what we think? Is an AI-generated grade reliable and valid? Do AI-predicted item difficulties agree with empirically estimated ones?

### How educational measurement appears in the research

- **AI-predicted difficulty and calibration:** [[llm-difficulty-calibration-programming-exams-2026|LLM difficulty calibration]] and [[llm-item-difficulty-prediction|item-difficulty prediction]] use LLMs to estimate item difficulty, which must be validated against psychometric estimates (see [[item-response-theory]]).
- **Psychometric awareness in AI assessment:** [[psychometrically-aware-ai|psychometrically aware AI]] is the standard that AI-based assessment be aligned with measurement theory — calibrated, uncertainty-aware, and validity-preserving (see [[automated-assessment|Confidence Aware AI Assessment]]).
- **Automated scoring and validity:** [[ai-scoring-language-bias-physics|AI scoring and language bias]] and [[multimodal-item-parameter-estimation-2026|multimodal item-parameter estimation]] examine how automated scoring and multimodal data affect measurement quality.
- **Validity frameworks:** [[assessment-validity]] and [[educational-nlp]] supply the standards and tools for validating LLM-based measurement.
- **Latent-structure comparison:** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] extend educational measurement to the LLM setting by testing whether assessment instruments show the *same factor structure* for humans and LLMs. Using EFA, factor congruence, and resampling, they show LLM–human latent structures systematically diverge across chemistry and quantitative-reasoning instruments, implying the constructs measured differ across populations — a necessary check before human validity evidence is assumed to transfer to AI.

### Measurement instruments in the wiki

A central function of educational measurement is the development, validation, and use of **instruments** — the concrete scales, tests, and coding schemes that operationalize constructs. The wiki's articles document a wide range of instruments for AI-in-education constructs, which can be categorized by what they measure and by their measurement approach.

#### AI / GenAI literacy instruments

AI literacy is the construct with the richest instrument coverage in the wiki. Two broad families exist: **performance-based tests** (objective, less susceptible to self-report bias) and **self-report scales** (subjective, capturing perceived competence).

- **Performance-based (objective) measures.** The flagship is [[jin-glat-genai-literacy-assessment|GLAT (Generative AI Literacy Assessment Test)]], a 20-item multiple-choice instrument built on a 25-concept blueprint across four dimensions (Know & Understand, Use & Apply, Evaluate & Create, Ethics) and validated with CTT + 2PL IRT on 355 students (RMSEA = 0.03, CFI = 0.97, α = 0.80, ω = 0.81). Critically, GLAT scores predicted AI-assisted task performance where self-report did not — evidence that **performance-based measurement outperforms self-report** for AI literacy. Related work in [[ai-literacy-assessment-misalignment]] quantifies the gap between self-reported and performance-based AI literacy (teachers overestimate by ~40%), and [[tracing-genai-literacy-interaction-patterns]] traces actual student–AI interaction patterns rather than relying on reported use.
- **Self-report scales.** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]] operationalizes AI literacy across three domains (AI Concepts; Application and Technical Skills; AI Digital Citizenship) and four scaffolded levels; [[ai-literacy-heptagon-2026|the AI Literacy Heptagon]] structures seven dimensions (technical, application, critical thinking, ethics, social impact, integration, legal/regulatory) with four Bloom-aligned proficiency levels. [[genai-skill-bypass-literacy]] maps divergent AI-literacy pathways for students vs. staff, and [[panciroli-ai-literacy-episodes-situated-learning]] grounds literacy assessment in situated learning episodes.
- **Domain-specific AI literacy.** [[teacher-education-ai-literacy-sdt-2026]] develops teacher AI-literacy measures within a self-determination-theory framework (382 teachers, factor-validated); [[conceptualizing-preservice-teachers-ai-readiness-2026]] measures pre-service teacher AI readiness via intelligent-TPACK; [[ai-literacy-career-adaptability-business-2026]] assesses student AI readiness and career adaptability in business education; and [[llm-critical-thinking-teamwork-review]] reviews instruments for LLM-supported critical-thinking and teamwork outcomes.

#### Attitudes, acceptance, and motivation instruments

- **Technology acceptance.** Instruments grounded in TAM/UTAUT measure perceived usefulness, ease of use, and behavioral intention to use AI. See [[technology-acceptance-model]] and its application in [[acceptance-ai-english-tools-2026]] (AI-assisted English learning tools, psychometric validation across disciplinary/proficiency groups) and [[tian-genai-learning-adoption-pathways-2026|GenAI adoption pathways]].
- **Self-efficacy and motivation.** [[self-efficacy]] instruments and motivation scales (e.g., SDT-based measures of autonomy/competence/relatedness in [[teacher-education-ai-literacy-sdt-2026]]) capture the motivational antecedents and consequences of AI use. These connect to [[student-engagement]] and [[prior-knowledge]] measurement.

#### Assessment-quality and validity instruments

- **Automated scoring and rubric instruments.** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]] generates assessment rubrics; [[ai-assisted-instructor-supervised-grading-feedback]] evaluates AI-grading quality against Elaborated-Feedback criteria; [[ai-assessment-scale-reform]] addresses how AI disrupts traditional assessment scales.
- **Validity-strengthening designs.** [[roe-assessment-twins-2026|assessment twins]] pair a GenAI-vulnerable task with a less-vulnerable equivalent assessing the same outcomes, mapping threats across Messick's six strands of validity evidence.
- **Discourse and engagement coding.** [[icap-cognitive-engagement-llm-agents]] extends the [[icap-framework|ICAP]] framework into a 7-point cognitive-engagement coding scheme, comparing human annotation (κ = 0.906–0.998) with LLM-based labeling (κ = 0.541–0.609) — a measurement-instrument study showing automated coding still trails trained humans.
- **Skills extraction.** [[principal-trait-analysis-human-ai-skills-2026]] derives "skills" in human–AI collaboration via principal-trait analysis — a data-driven measurement of collaboration competency.

#### Measurement approach matters

The wiki's evidence repeatedly shows that **how** a construct is measured changes the conclusions. Self-reported AI literacy diverges sharply from performance-based measures ([[ai-literacy-assessment-misalignment]]); LLM annotation of engagement diverges from trained human coding ([[icap-cognitive-engagement-llm-agents]]); and latent structures differ between humans and LLMs ([[assessment-latent-structure-human-llm-2026]]). Rigorous instrument validation — reliability, structural validity, external/predictive validity — is therefore not a formality but the foundation of trustworthy AI-in-education evidence, connecting to [[assessment-validity]] and [[psychometrically-aware-ai]].

### Connections

Educational measurement is the foundation for [[item-response-theory]], [[assessment-validity]], [[knowledge-tracing]], and [[student-modeling]]. It connects to [[learning-analytics]] (measurement of learning data), [[educational-nlp]] (measuring language), and [[psychometrically-aware-ai]] (AI aligned with measurement theory). Its validity and reliability concerns underpin [[ai-ed-evaluation]] and the [[limitations-in-aied-research|measurement limitations]] of the field. For the constructs it measures, it intersects with [[ai-literacy]], [[technology-acceptance-model]], [[self-efficacy]], [[motivation]], and [[student-engagement]].

## Connected Concepts

- [[item-response-theory]]
- [[assessment-validity]]
- [[psychometrically-aware-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[educational-nlp]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[limitations-in-aied-research]]
- [[ai-literacy]]
- [[technology-acceptance-model]]
- [[self-efficacy]]
- [[benchmark]]

## Connected Articles
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[jin-glat-genai-literacy-assessment]] — GLAT: IRT-validated GenAI literacy test (Jin et al. 2025)
- [[cdpk-pedagogy-benchmark-llms]] — LLM pedagogical-knowledge benchmark (CDPK + SEND)
- [[melo-llm-classroom-observation-teach-2026]] — LLM classroom observation reliability and accuracy (Melo et al. 2026)
- [[icap-cognitive-engagement-llm-agents]] — Measuring cognitive engagement with an extended ICAP framework
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity under GenAI
- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon
- [[ai-literacy-assessment-misalignment]] — Self-reported vs performance AI literacy misalignment
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher AI literacy through self-determination theory
- [[acceptance-ai-english-tools-2026]] — AI acceptance measures for English learning tools

- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[llm-item-difficulty-prediction]] — Cognitive evaluation of LLM item-difficulty prediction
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias in physics
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic physics chatbot
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[end-of-assessment-ai-disruption-transformation-2026]]
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction
