---
title: "Beyond AI Literacy: A Structured Review and Exploratory Meta-Analysis of Measures for Competent Generative-AI Use"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [ai-literacy, self-report-measures, meta-analysis-systematic-review, educational-measurement, trust-calibration, cognitive-offloading, assessment-validity, human-in-the-loop-ai, professional-training]
sources: ['raw/papers/competent-generative-ai-use-measures-review-2026.md']
confidence: high
research_method: [systematic review, meta-analysis, educational measurement]
discipline: [learning sciences]
audience: [researchers, assessment professionals, instructional designers]
level: [adult learning, higher ed]
category: [assessment, framework, synthesis]
---

> **Synthesis:** This structured, seeded review updates the 2024 COSMIN-based appraisal of AI-literacy scales through 17 August 2026 and synthesises 24 focal empirical publications into four measurement domains: knowledge and use, epistemic oversight, reliance calibration, and operational control of tool-using agents. An exploratory [[meta-analysis-systematic-review|meta-analysis]] of three same-sample subjective–objective correlations yields a pooled r = .055 (Hartung-Knapp 95% CI [-.047, .156]), a result the author reads as limited alignment rather than evidence that self-ratings can stand in for performance scores. Objective instruments such as GLAT and AICOS-S are shown to assess foundation knowledge, while verification, trust and dependency measures target separate constructs. No validated individual-level instrument in the corpus covers the full combination of scope, permissions, recovery, state isolation, independent review and evidence-based closure, and the proposed four-layer workplace battery is offered as a design hypothesis rather than a validated placement protocol.

## Key Findings

1. The primary exploratory meta-analysis pooled three directly reported same-sample correlations between subjective and objective [[ai-literacy|AI literacy]], using a combined reported N = 2,765; REML gave r = .055 with a Hartung-Knapp 95% CI [-.047, .156] and a normal-theory interval of [.018, .092], with Cochran's Q = 3.094 on two degrees of freedom (I² = 35.4%).
2. All three primary effects come from a single research program using the MAILS family as the subjective comparator: Koch et al. (2024) r = .21 at N = 120, AICOS (2025) r = .04 at N = 514, and AICOS-S (2026) r = .05 at a reported N = 2,131.
3. AICOS-S carries 77.2% of the primary REML weight under its reported overall sample size, and the source reports r = .05 with p = .11 — an unadjusted Pearson test at N = 2,131 would give p ≈ .021, a discrepancy the author discloses rather than resolves by imputing a replacement value.
4. Adding a synthetic composite from Zhang et al. (2026) — the mean Fisher-z of 12 cross-factor correlations in N = 288 teachers — produced a four-effect pool of r = .079 (95% CI [-.025, .181]) at a combined N = 3,053, with Q = 5.290 and I² = 43.3%; varying the assumed inter-correlation from ρ = 1 to ρ = .5 moved the estimate only from .079 to .088.
5. The historical baseline is Lintner's mid-2024 registered PRISMA/COSMIN review, which identified 16 AI-literacy scales represented by 22 validation or revalidation studies — 13 self-report instruments and three performance-based — with structural validity and internal consistency best supported and cross-cultural validity and measurement error unexamined.
6. Post-2024 work expanded objective measurement: GLAT is a 20-item multiple-choice GenAI test validated with 355 higher-education students (α = .80, ω = .81, good 2PL IRT fit) whose scores predicted GenAI-supported task performance better than perceived ChatGPT proficiency.
7. AICOS covers 51 items across Apply, Create, Detect, [[ethics]], Generative and Understand AI dimensions, achieving α = .83 and composite reliability .90 in 514 German-speaking adults, and correlating r = .58 with another objective knowledge measure against only r = .04 with MAILS subjective AI literacy.
8. AICOS-S reduces the objective test to 12 items with norms from 2,131 German-speaking adults (α = .71, composite reliability .83, unidimensional CFA CFI = .995, RMSEA = .014), placing the population median at 8 of 12 items with raw scores of 4 and 11 as 15th- and 85th-percentile cut points.
9. Critical oversight has become measurable: the 13-item [[critical-thinking|Critical Thinking]] in AI Use Scale was developed across six studies with N = 1,341, and its criterion testing showed higher scores predicting more frequent and varied verification strategies and greater accuracy in judging claim veracity in a naturalistic GPT-powered fact-checking task.
10. Reliance, trust and dependency are distinct targets — the GenAI Reliance Behaviors Scale validated reflective, cautious, thoughtless and collaborative factors (α = .84) using 800 exploratory and 730 plus 1,173 confirmatory responses, whereas the Generative AI Dependency Scale showed a three-factor maladaptive structure (α = .92 to .93, test-retest ICC = .87) across six studies with 1,333 participants, and TIAS/S-TIAS quantify trust rather than competent reliance.

## Four Measurement Domains, Ordered by Proximity to Work

The review's conceptual contribution is a four-domain framework that refuses to collapse competent [[generative-ai]] use into a single proficiency continuum. *Knowledge and use* covers recognition, conceptual and procedural knowledge, application, evaluation and ethics, and spans both perceived-capability instruments (AILS, SNAIL, MAILS) and performance tests (AILIT, GLAT, AICOS, AICOS-S, SAIL4ALL, the Chiu et al. test, and the Klein-Avraham scale). *Epistemic oversight* concerns what a user does when an output makes a claim — checking provenance, testing factual support, separating evidence from inference and deciding how much confidence a result deserves — and is addressed by the Critical Thinking in AI Use Scale, AILIS, and the epistemic-knowledge dimension of the Klein-Avraham objective scale. *Reliance calibration* concerns how cognitive work is distributed between person and system, addressed by the reliance-behavior scale and, adjacently, by trust and dependency instruments. *Operational control of tool-using agents* concerns authority, state and evidence once a system can act.

The author stresses that distinctions between these domains must not be produced by fiat: a person may know a great deal about AI and still rely on it poorly, show disciplined verification while lacking technical knowledge, or supervise an agent safely through a familiar workflow without being able to explain model architecture. Two higher-education frameworks partition the same territory differently — the AI Literacy Heptagon's seven dimensions and the AI and Data Acumen framework's seven knowledge dimensions crossed with four proficiency levels — and the review notes these need not conflict because its own domains are cut by measurement claim rather than curricular content.

## The Subjective–Objective Alignment Problem

The [[quantitative-research|quantitative]] core is deliberately narrow: only same-sample associations between perceived and objectively demonstrated AI literacy are pooled. The interpretive claim that the results support is asymmetric — the small, concentrated evidence base is taken as sufficient to reject treating self-ratings as interchangeable with performance scores, but not as sufficient to establish a population correlation, a proficiency cutoff, or placement error rates. The paper is unusually transparent about the fragility of its own synthesis: REML reached the boundary with τ̂² ≈ 0 while Paule-Mandel gave τ̂² = .0033, the two heterogeneity estimators disagree at k = 3, and leave-one-out refits swing widely (removing AICOS-S gives r = .107 with a Hartung-Knapp interval of [-.747, .828]).

Two [[research-methods-aied|methodological]] boundaries are drawn explicitly. First, reliability coefficients are not meta-analyzed, because the instrument set mixes dichotomously scored knowledge tests, Likert self-reports, multidimensional batteries and behavioral measures reporting alpha, composite reliability, omega, IRT information and test-retest coefficients — a pooled alpha across that mixture would answer no coherent measurement question. Second, [[self-efficacy]] comparisons are kept outside the primary pool as an adjacent construct. The GLAT study illustrates a different kind of limit: its regression of task performance on [[self-report-measures|self-reported]] literacy was negative and non-significant, but the output does not identify the zero-order correlation, so it could not be converted into a meta-analytic effect.

## The Agent-Control Gap and the Proposed Layered Battery

The review's most consequential gap-finding is that no validated individual-level instrument in the focal corpus directly tests the full set of decisions created by tool-using agents: selecting the smallest sufficient permission and action surface, recognizing that new evidence invalidates an approved plan, preserving a known-good state and choosing among continuation, narrowing, rewind, restart and escalation, separating maker from reviewer roles, isolating state across parallel agents, distinguishing a completion claim from independent execution evidence, and closing work with failed or unverified checks visible. Some instruments cover subsets. Dorneich et al. operationalize preparation, execution, evaluation, adjustment and team [[chemistry-education|chemistry]] as observable teaming behaviors, but at the unit of team gameplay rather than individual workplace proficiency; Bogart et al. show that a scenario task simulating job use was more informative for applied AI literacy than generic tests, but the work is a preprint without a general normed scale. Dhanorkar et al.'s interviews with 17 experienced developers supply four forms of emergent oversight work — a priori control, co-planning, real-time monitoring and post hoc review — that motivate candidate assessment content without validating it as a construct.

The proposed four-layer workplace battery keeps targets separate: an objective foundation layer (AICOS-S or GLAT), an epistemic oversight layer (the Critical Thinking in AI Use Scale or AILIS plus a short verification task), a reliance-behavior layer (the reliance scale, with S-TIAS only when [[trust-calibration|trust calibration]] is the research question), and a situated operational challenge reproducing role-specific decisions about authority, state, recovery, review and closure. Non-compensatory decision rules are offered as one design option, on the reasoning that a knowledge score should not offset granting write access during a read-only task and a high self-rating should not replace successful verification. The author labels the construct *[[agentic-ai|agentic]] operational competence* and explicitly treats it as a hypothesis for instrument development rather than an established latent variable.

## Limits of the Evidence and the Research Agenda

Five limits are stated. The update is structured and seeded rather than a de novo database-wide search, so newly published scales outside those retrieval paths may be missing. The focal publications span general adults, university students, [[k-12]] students, teachers and specialized training contexts, and measurement properties do not transfer automatically across these groups — a norm from German-speaking adults cannot serve as a workplace cutoff elsewhere without local evidence. AI-related item content ages quickly, which argues for durable principles plus a versioned item-review process. All three primary effects come from one research program and the analyses correct for neither unreliability nor range restriction. And the coverage map represents one author's interpretive classification, without independent duplicate coding or a new COSMIN appraisal.

The proposed research agenda follows the same separation logic: develop a situational judgment test from critical incidents across software development, QA, operations, research and information-intensive office work; pair it with the objective and self-report instruments to test whether a multi-factor model fits better than a single generic AI-competence factor; collect behavioral traces from a sandboxed tool-using agent as criterion evidence; and test transfer through 30- and 60-day samples of completed work rather than immediate post-course satisfaction.

## Connected Concepts

- [[ai-literacy]]
- [[self-report-measures]]
- [[meta-analysis-systematic-review]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[professional-training]]
- [[trust]]
- [[agentic-ai]]
- [[psychometrically-aware-ai]]
- [[item-response-theory]]

## Connected Articles

- [[ai-literacy-assessment-misalignment]] — AI Literacy Assessment: Self-Reported vs Performance Misalignment
- [[xiong-ai-educational-measurement-review-2026]] — A Decade of Reflection and Thematic Review on Artificial Intelligence's Impact on Educational Measurement
- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon: A Structured Approach to AI Literacy in Higher Education
- [[genai-reliance-types-scale]] — Measuring How Students Rely on Generative AI in Academic Writing: Development and Multi-Source Validation of the Generative AI Reliance Types Scale (GenAI-RTS)
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — Understanding Student Dependency on AI: The Role of AI Literacy, Academic Self-Efficacy, and Resource Management Strategies
- [[cognitive-offloading-metacognitive-review-2026]] — Meta-Cognitive Insights into Cognitive Offloading: Mechanisms, Interventions, and Educational Implications
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[ai-literacy-continuum-higher-education]] — Beyond Tool Adoption: A Practical Five-Stage Developmental Continuum for AI Literacy in Higher Education

## Citation

Verí, D. (2026). [*Beyond AI Literacy: A Structured Review and Exploratory Meta-Analysis of Measures for Competent Generative-AI Use*](https://arxiv.org/abs/2609.15624). arXiv preprint.