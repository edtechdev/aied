---
title: "The Eight-Mode AI Engagement Typology: Differential Cognitive Signatures and a Self-Report–Behavior Gap"
created: "2026-09-18T15:20:00-04:00"
updated: "2026-09-21T04:33:06-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [self-regulated-learning, metacognition, student-engagement]
technology: [generative-ai, llm, learning-analytics]
assessment: [educational-measurement]
methods: [quantitative-research]
sources: ['raw/papers/eight-mode-ai-engagement-typology-2026.md']
confidence: high
research_method: [instrument development, survey]
level: [higher ed]
audience: [researchers, instructional designers, instructors]
page_kind: [evaluation]
---

> **Synthesis:** Keith, Wood and Posey ask a measurement question that much [[generative-ai]] research in education assumes away: does how much someone uses AI tell us anything about how they use it? Their answer is an eight-mode AI Engagement Typology — Oracle, Production Assistant, Tutor, Collaborative Problem-Solver, Verification Agent, [[creativity|Creative]] Expander, Critical Challenger and Problem Setter — prototypes of increasing user cognitive governance across Passivity, Partnership and Agency tiers. Study 1 measures reported typical use with a 29-item instrument in 359 U.S. working adults; Study 2 classifies 1,353 turns from 487 student transcripts and pairs them against the same instrument for 171 students. Reported and observed profiles correspond at near zero, while behavior predicts quiz scores where self-report does not.

## Key Findings
1. **Oracle carries the broadest adverse adjusted pattern.** In 319 complete-case adults Oracle tracked [[cognitive-offloading]] (β = .39), cognitive harm (β = .32), atrophy of decision-making (β = .41) and dependency (β = .33), all surviving Benjamini-Hochberg correction across 64 tests, and lower AI calibration (β = −.23).
2. **Verification is the only agency-tier mode with favorable adjusted associations:** lower cognitive harm (β = −.19), atrophy (β = −.26) and dependency (β = −.15), higher AI calibration (β = .55) and AI-specific [[metacognition]] (β = .21). No other agency-tier coefficient survived.
3. **Simultaneous entry suppresses the agency modes.** They are strongly intercorrelated (Problem Setter shares 69.7% of its variance with the other seven), and 13 of 56 coefficients reversed sign between unadjusted and adjusted models.
4. **Productivity and dependency travel together for seven of eight modes** (productivity r = .20–.50, dependency r = .08–.48); Verification was the exception at r = .04 and r = −.22, inside a ±.15 but not ±.10 equivalence bound.
5. **Mode profiles add variance beyond usage quantity:** in-sample R² up .23 (range .05 to .37) and cross-validated R² up .20, with seven of eight outcomes retaining a positive increment. Verification held the largest zero-order correlations with AI calibration (r = .50), AI-specific metacognition (r = .42) and [[desirable-difficulties|Productive Friction]] (r = .39).
6. **Self-report and observed behavior diverge, and only behavior tracks performance.** No AIT-to-classifier correlation across 171 paired profiles survived FDR correction or reached |r| ≥ .30; Verification came closest at r = .199, and mean total-variation distance was .701, only .002 closer than random re-pairing (p = .010). Behavioral composition raised R² by .166 (F = 5.82, p = .005) against .031 for self-report, though the .135 gap's bootstrap interval included zero and every model had negative cross-validated R². Tutor was best supported: more explanation-seeking turns accompanied higher quiz scores (r = .33, p < .001, 134 of 154 profiles).
7. **The mode profile hides who initiated the work.** Protocol 4.2 records turn origins: 49% of learning-task moves were AI-initiated against roughly 6% in the production tasks, and that co-regulated share did not predict quiz performance (r = .14, p = .08).

## How the typology was derived and validated

[[llm]] sessions of equal duration can contain copying an answer, seeking an explanation, co-producing an artifact, or testing a user-authored judgment. Table 1 holds one referent task constant — drafting an analytical paper on an unfamiliar topic — and shows each mode changing the prompt and the cognitive demand: Oracle asks what the literature says (automation bias); Production Assistant asks for the paper ([[cognitive-offloading]]); Tutor asks for a walkthrough (metacognitive monitoring); Collaborative Problem-Solver proposes a hypothesis and asks what evidence would test it; Verification Agent submits a draft for critique (calibrated trust); Creative Expander asks for divergent lenses; Critical Challenger asks for the strongest objection ([[critical-thinking|critical thinking]] under AI); Problem Setter questions the format itself. A named active mode is not constructive enactment; iterative dialogue can remain AI-led.

Measurement ran in two layers. The 29-item instrument yields person-level self-report as unweighted frequency indices (alphas .60–.83 adult, .52–.81 student), while the message-level classifier codes each turn into one of eight modes or mode 0 (no codeable move) under the AIEM Mode Coding Standard, protocol 4.2, via a structured prompt to Claude Haiku 4.5 at temperature 0. A five-model panel reached Fleiss κ = .78 (unanimity 74%) against a two-coder human reference of κ = .49, rising to κ = .65 across protocol generations and .82 where four of five models concurred; model agreement bounds consistency, not validity. Structurally, a six-factor self-report solution beat a three-tier collapse but was statistically indistinguishable from a six-factor merge of Tutor with Collaborative Problem-Solver and Creative Expander with Problem Setter. Because the [[student-ai-interaction]] literature already supplies engagement levels such as the [[icap-framework]], the novelty claimed is integration: instrument and transcript measured on the same participants, plus a versioned, agreement-audited protocol. Mode 0 covers 5.2% of the 1,353 coded turns.

## Cognitive signatures attached to each mode

Study 1 tested each signature against usage and dispositional covariates (task percentage, frequency, session duration, tool count; critical-thinking dispositions, AI [[self-efficacy]], need for cognition) in 359 eligible U.S. working adults (Prolific, late April 2026). Oracle's is the least favorable and widest, Production Assistant's productivity without measured cognitive cost, and the five remaining modes show no adjusted coefficient surviving correction — read cautiously, since suppression may be responsible. Verification is the pivot, the only agency-tier mode whose coefficients do not reverse between specifications and the strongest on AI calibration (β = .55) — not proof of behavioral skill, since the artifact-authorship mechanism was never measured. The [[trust-calibration]] framing matters because elsewhere five therapists accepted erroneous AI advice that converted three correct answers to wrong ones on average despite instructions to verify.

## The self-report–behavior gap

For anyone who studies [[ai-education|AI in education]] by [[self-report-measures|questionnaire]], the divergence is the most consequential result: reported typical and task-specific enacted engagement showed near-zero correspondence across three coding-protocol generations, so the authors refuse any mode-specific convergence reading. The behavior layer added R² = .166 against .031 for self-report, but the bootstrap interval on the difference included zero. Mean profiles were 82% Tutor in the learning task against 85% and 84% Production elsewhere. The authors refuse both easy readings: the transcript codes carry criterion validity through quiz prediction, the self-report scales show differentiated FDR-corrected associations, and what fails is the assumption that the two channels index the same construct.

## What this means for practice

- **Instructors.** Stop reading AI usage quantity as engagement quality: adding the eight modes raised in-sample R² by .23 (range .05 to .37) and cross-validated R² by .20.
- **Instructors.** Have students author their own work before submitting it to AI for critique: only Verification had favorable adjusted associations, and reviewing an AI-produced artifact is Production or Collaboration, not Verification.
- **Learning designers.** Design for explanation-seeking turns: Tutor was the best-supported behavioral predictor of quiz scores (r = .33, p < .001), while AI-initiated share did not predict performance (r = .14).
- **Learning designers.** Run behavioral logs alongside self-report rather than substituting one for the other, and treat [[higher-ed]] [[learning-analytics]] [[visualization|dashboards]] and [[self-regulated-learning]] supports premised on accurate self-report of AI use as resting on an unsupported assumption.
- **Researchers.** Restrict mode feedback to corpus-dominant labels until classification is revised: agency-tier modes are heavily intercorrelated and 13 of 56 coefficients reversed sign between specifications.

## Limitations

- Both studies are cross-sectional: Study 1 is 359 adults recruited via Prolific in late April 2026; Study 2 pairs 171 students' transcripts with the same instrument and no follow-up.
- Study 1 shares response method between predictors and outcomes (both layers are self-reports), leaving self-concept, reverse direction and omitted variables viable.
- Study 2's behavioral measure moved as coding defects were repaired across three protocol generations: the panel's Fleiss κ = .78 bounds consistency, not validity, and no figure is an inter-rater reliability of protocol 4.2.
- The learning task constrained mode variance (mean profile 82% Tutor against 85% and 84% Production), leaving five non-Tutor modes sparse and every quiz model with negative repeated-cross-validated R²; the tiers are unvalidated prototypes, several scales had α < .70, and competitor constructs were never administered.

## Connected Concepts

- [[cognitive-offloading]] — the outcome most strongly associated with Oracle and the mechanism the Passive tier is theorized around
- [[self-report-measures]] — the AIT's person-level channel and the layer that failed to correspond with observed behavior
- [[educational-measurement]] — the convergent-validity, equivalence-testing and incremental-variance apparatus used throughout
- [[assessment-validity]] — the auditability frame the authors apply to their own classifier, including what model agreement bounds
- [[trust-calibration]] — the theoretical foundation of the Verification Agent mode and the AICal principle scale
- [[metacognition]] — AI-specific metacognition (AIMeta) as a mode-associated principle and the mechanism behind the Tutor mode
- [[critical-thinking]] — critical-thinking dispositions as covariates and the foundation of the Critical Challenger mode
- [[student-ai-interaction]] — the broader literature on how students actually converse with AI systems
- [[human-ai-collaboration]] — the human-first participation designs the paper contrasts with Human Confirmation
- [[agency]] — cognitive governance, the dimension the Passivity–Partnership–Agency tiers order
- [[icap-framework]] — the established engagement-levels framework the typology positions itself against
- [[learning-analytics]] — the usage-level measures whose explanatory value the mode profiles exceed
- [[self-regulated-learning]] — co-regulated and self-originated engagement, recorded per turn through the initiation property
- [[student-engagement]] — multidimensional engagement with AI as the paper's headline construct claim

## Connected Articles

- [[competent-generative-ai-use-measures-review-2026]] — A structured review and exploratory meta-analysis of measures for competent generative-AI use
- [[stamatoulis-genai-use-patterns-2026]] — Same tool, different work: patterns of generative-AI use and academic outcomes
- [[ai-in-the-wild-college]] — Large-scale analysis of authentic college-student interactions with generative AI
- [[efficiency-gain-illusion-ai-overreliance]] — People underestimate their rate of AI use and overestimate its benefits on simple tasks
- [[ai-dependence-academic-writing-ipace-2026]] — Dependence on generative AI in writing courses analyzed through the I-PACE model
- [[ai-dependency-self-efficacy-teacher-support-burnout-2026]] — AI dependency as a mediator linking self-efficacy and support to learning burnout
- [[ai-use-critical-thinking-medical-students-2026]] — AI use, cognitive load and self-regulated learning in critical-thinking outcomes
- [[ai-literacy-instrument-development-systematic-review-2026]] — Systematic review of AI literacy instrument development and psychometric quality
- [[ai-learning-assistants-higher-ed-large-scale]] — Large-scale descriptive analysis of AI-based learning assistants in higher education
- [[ai-cognitive-partner-co-regulation-learning]] — Developmental framework for human-AI co-regulation in learning

## Citation

Keith, M. J., Wood, D. A., & Posey, C. (2026).[*The eight-mode AI engagement typology: Differential cognitive signatures and a self-report–behavior gap*](https://osf.io/preprints/psyarxiv/53pwv_v1). Preprint (v19, 2026-08-18), submitted to *Scientific Reports*. Brigham Young University, Marriott School of Business. Unrefereed preprint; no public DOI assigned at the time of writing.
