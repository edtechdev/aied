---
title: Quantitative Research
created: "2026-08-24T02:05:00-04:00"
updated: "2026-08-24T02:05:00-04:00"
type: concept
tags: [quantitative-research, research-methods-aied, educational-measurement]
research_method: [survey research, experimental research]
confidence: high
---

> **Quantitative research** — the family of empirical methods that collect and analyze *numerical* data to describe patterns, test relationships, and estimate causal effects. In [[ai-education|AI in education]], quantitative methods quantify whether and how AI tools affect [[learning-gains|learning outcomes]], [[student-engagement|engagement]], [[motivation]], and [[self-efficacy]], and model the psychological and behavioral mechanisms of AI use. They provide the breadth, precision, and causal inferential power that [[qualitative-research|qualitative methods]] trade away for depth and context.

Quantitative research spans descriptive designs (measuring prevalence and patterns), correlational/observational designs (testing relationships among variables), and experimental and quasi-experimental designs (estimating causal effects). What unifies them is the systematic reduction of observations to numbers, analyzed with statistics, and the priority placed on **reliability, validity, and generalizability** — the core concerns of [[educational-measurement]].

## Major quantitative approaches

### Survey and correlational research
Cross-sectional surveys measure self-reported attitudes, perceptions, motivation, [[self-efficacy]], and technology acceptance, often modeled with regression or structural equation modeling (SEM/PLS-SEM) to test hypothesized relationships and mediators. These dominate the wiki's corpus, particularly for acceptance, motivation, and psychological-mechanism questions. [[acceptance-ai-english-tools-2026|Acceptance of AI-assisted English tools]] builds on the [[technology-acceptance-model|TAM]] with SEM; [[tian-genai-learning-adoption-pathways-2026|GenAI adoption pathways]] uses PLS-SEM, fsQCA, and importance-performance mapping; [[teacher-education-ai-literacy-sdt-2026|teacher AI literacy]] uses factor-validated surveys grounded in [[self-determination-theory]].

- **Strengths:** large samples; broad, low-cost coverage; tests complex mediational models; feasible for attitudes that are hard to observe.
- **Limitations:** cross-sectional data cannot establish causation; self-report bias; convenience sampling limits generalizability; mediators inferred from covariance, not manipulation.

### Experimental and quasi-experimental research
Experiments randomly assign learners to conditions (e.g., AI tutor vs. human tutor, or AI-scaffolded vs. unassisted) to estimate causal effects on outcomes. **Randomized controlled trials ([[rct]]s)** are the gold standard for internal validity. [[access-not-enough-ai-tutoring-2026|A randomized field study of human support plus AI tutoring]] and [[genai-can-harm-teaching-rct-2026|an RCT on generative AI in teaching]] use assignment to isolate causal effects. **Quasi-experimental** designs (pre/post, matched groups without randomization) are more feasible in intact classrooms but weaker on causal claims.

- **Strengths:** strongest causal inference; clean outcome measurement; supports effect-size estimation and efficacy claims.
- **Limitations:** costly and slow; artificial conditions reduce ecological validity; fast-changing AI tools date experiments quickly; small samples underpower detection of effects; ethical constraints on withholding helpful tools.

### Longitudinal research
Longitudinal designs track the same learners over time, capturing change, growth, and durable learning that single-time-point measurement misses. [[ai-lms-middle-school-longitudinal|A longitudinal LMS study]] tracks students across a school year. Longitudinal designs are essential for distinguishing AI-inflated performance from [[genai-performance-vs-learning|durable learning]].

### Computational and psychometric quantification
Quantitative methods also include the direct measurement of constructs via instruments — the domain of [[educational-measurement]] and [[item-response-theory]]. The wiki's [[jin-glat-genai-literacy-assessment|GLAT]] is a 20-item quantitative instrument validated with IRT; [[educational-measurement|measurement instruments]] across [[ai-literacy|AI literacy]], acceptance, and self-efficacy provide the validated scales on which survey and experimental research depend.

## How quantitative research appears in the wiki

- **Efficacy and causal claims.** RCTs and quasi-experiments test whether AI tools improve learning ([[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]]).
- **Mechanism modeling.** SEM/PLS-SEM tests mediators and moderators of AI adoption and learning ([[tian-genai-learning-adoption-pathways-2026]], [[acceptance-ai-english-tools-2026]], [[teacher-education-ai-literacy-sdt-2026]]).
- **Measurement and scale development.** The wiki documents quantitative instrument development and validation ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement]]).

## Strengths and limitations

- **Strengths:** precision and statistical power; generalizability to defined populations; causal inference (with experimental designs); efficient large-sample coverage; cumulative and comparable across studies.
- **Limitations:** captures what is measurable, often missing process, meaning, and context (see [[qualitative-research]]); self-report bias; instruments can measure the wrong construct (see [[educational-measurement|measurement issues]]); correlation without causation; can be artificial and slow relative to AI change.

Quantitative and [[qualitative-research|qualitative]] methods are complements — quantitative work provides breadth and causal power, qualitative work provides depth and meaning. [[mixed-methods-research|Mixed-methods designs]] combine them. See [[research-methods-aied]] for the full method comparison and the contrasts among experimental, survey, qualitative, and other designs.

## Connected Concepts

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — A randomized field study of human support plus AI tutoring
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI-assisted English learning tools
- [[tian-genai-learning-adoption-pathways-2026]] — GenAI adoption pathways (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher AI literacy through self-determination theory
- [[jin-glat-genai-literacy-assessment]] — GLAT: an IRT-validated GenAI literacy test
- [[ai-lms-middle-school-longitudinal]] — A longitudinal AI-integrated LMS study
- [[genai-over-reliance-learning-2026]] — From enhancement to over-reliance (mixed-method)
- [[adaptive-pretesting-retention]] — Adaptive pretesting and retention
