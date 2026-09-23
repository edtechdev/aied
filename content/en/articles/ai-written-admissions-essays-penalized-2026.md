---
title: "AI-written admissions essays are widespread but penalized"
created: "2026-09-22T09:32:36-04:00"
updated: "2026-09-22T09:32:36-04:00"
type: article
published: "2026-09-18"
sources: ['raw/papers/ai-written-admissions-essays-penalized-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis, experiment]
discipline: [writing education]
level: [higher ed, graduate]
audience: [administrators, assessment professionals, researchers]
foundations: [academic-integrity, framing-ai-use-for-students]
assessment: [ai-detection, evaluative-judgment, assessment-validity, automated-essay-scoring]
technology: [generative-ai, llm]
methods: [quantitative-research]
institutions: [educational-policy-ai, regulation]
ethics: [ai-use-disclosure, differential-effects-across-learner-groups]
connected_faqs: [should-we-use-ai-detectors]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Across 7,462 applications to a US public policy master's program in six admissions cycles, this study shows how fast [[generative-ai]] writing moved through a process that had explicitly banned it. By 2025, 56.1% of applicants submitted at least one essay a commercial detector classified as primarily AI-written — 69.3% of international applicants against 38.6% of domestic ones. The essays improved, mostly on grammar, style, and clarity, yet each flagged essay was associated with a 1.5 percentage point lower admission probability, rising to 2.6 points once essay quality was held constant. An experiment with five admissions officers suggests why: they distinguished AI from human writing above chance and rated essays they believed AI-generated lower, so the penalty ran through [[evaluative-judgment]] rather than enforcement.

## Key Findings
1. **AI-written essays became the majority behavior.** In the 2025 cycle, 56.1% of applicants submitted at least one essay classified by GPTZero as primarily AI-written, up from 21.8% in 2023 and 45.1% in 2024, against a signed prohibition.
2. **International applicants used AI far more.** 69.3% of international applicants submitted at least one flagged essay versus 38.6% of domestic applicants, a gap widest among applicants under 24 and not concentrated among weaker applicants.
3. **The detector barely fired before ChatGPT existed.** Applicant-level false-positive rates for GPTZero's high-confidence "AI written" label were 0.7% in 2020, 0.5% in 2021, and 1.4% in 2022, the calibration the authors rely on.
4. **Essay quality improved, mainly on mechanical dimensions.** LLM-scored grammar, style, and clarity rose sharply after November 2022, with international applicants' mechanical gains roughly double domestic ones by 2025; substantive dimensions moved far less.
5. **Each flagged essay cost about 1.5 percentage points of admission probability.** Double [[machine-learning|machine learning]] over roughly 400 covariates estimated -1.5 p.p. per AI-written essay (p < .01), and -2.6 p.p. (p < .001) once essay quality was added.
6. **The typical AI user submitted 2.32 flagged essays, so the penalty reached 3.48 to 6.0 percentage points.** The adjusted figure is larger because AI-written essays were stronger, and stronger essays independently improve admission odds.
7. **Admissions officers detected AI writing above chance and penalized what they detected.** Five staff members rated 100 matched essays at AUC 0.70 (95% CI [0.65, 0.75]), and quality ratings fell as perceived AI-likelihood rose after adjusting for actual provenance and machine-rated quality.

## Better essays and worse odds in the same dataset
Applicants signed an attestation that they had not received prohibited writing or translation assistance, expanded in 2023 to exclude generative AI, and the program screened no submissions with detection software. To measure quality the authors had an [[llm]] score seven dimensions on a five-point scale, then fit weights to ratings from five admissions officers, producing a composite that correlated 70% with expert judgment. Quality climbed immediately after ChatGPT's release, most for international applicants and most on mechanical dimensions, and the gains survived controls for applicant observables. That is the study's central tension for [[writing-education]]: the same technology that raised measurable prose quality coincided with lower admission rates for those who used it.

## The penalty and what adjusting for quality does
Table 1 reports a raw OLS estimate of -7.7 p.p. per flagged essay, which drops to -1.5 p.p. once roughly 400 covariates are included. Adding the 14 essay-quality measures raises the estimate to -2.6 p.p. That direction is informative rather than puzzling: AI-written essays scored better and better essays help an applicant, so not adjusting for quality hides part of the AI penalty. Pooled across the 2023 and 2024 cohorts, AI users submitted 2.32 flagged essays on average, giving an aggregate 3.48 p.p. decline without the quality adjustment and about 6.0 p.p. with it. The authors note that post-treatment bias complicates reading the adjusted model as a clean causal estimate.

## Admissions readers are imperfect but consequential detectors
The penalty is hard to attribute to enforcement, since nobody screened the essays. In a matched experiment, five admissions officers reviewed 100 essays, 50 human and 50 AI, drawn from propensity-matched applicant pairs and presented in random order; four rated all 100 and one rated 60 (460 ratings). Officers reached AUC 0.70 at identifying AI writing, well below commercial detectors but above chance. Essays they placed on the human side of the scale were 70.4% human by GPTZero; those on the AI side were 67.8% AI-written. Their quality ratings fell as perceived AI-likelihood rose, and the association survived adjustment for machine-rated quality, actual provenance, and applicant characteristics (-0.109, p < .05).

## What this means for practice
- **Administrators.** Treat an explicit AI prohibition as a policy that cannot be enforced by prohibition alone: this office never screened essays, yet applicants who used AI were penalized anyway, through readers' unwritten judgment.
- **Assessment designers.** Decide what an application essay is meant to measure before deciding what to do about AI, because the AI-written essays in this sample were stronger on the dimensions the program's own officers were asked to weight.
- **Admissions and assessment professionals.** If essay authenticity matters, measure writing under conditions the applicant cannot delegate, or stop treating a polished unsupervised essay as evidence of the unaided ability it no longer represents.
- **Researchers.** Detector-based prevalence estimates are lower bounds by construction: these thresholds traded false negatives for a pre-ChatGPT false-positive rate below 1%, so true AI use in 2025 likely exceeds 56.1%.

## Limitations
- The analysis covers one competitive public policy master's program (7,462 applications, six cycles), so the size and even the direction of the penalty may differ where AI use is permitted.
- AI use is inferred from commercial detectors (GPTZero 3.9 primary, Pangram 3.1 for replication), and only essays likely primarily AI-written count as flagged, so prevalence is measured conservatively.
- The essay-quality composite correlates 70% with admissions staff ratings and may miss dimensions that matter in selection.
- The estimates rest on double machine learning over roughly 400 covariates and cannot exclude unmeasured confounding; 2025 outcomes were omitted because the program overhauled admissions after seeing preliminary results.

## Connected Concepts
- [[ai-detection]]
- [[generative-ai]]
- [[academic-integrity]]
- [[evaluative-judgment]]
- [[assessment-validity]]
- [[automated-essay-scoring]]
- [[writing-education]]
- [[higher-ed]]
- [[differential-effects-across-learner-groups]]
- [[ai-use-disclosure]]
- [[llm]]
- [[quantitative-research]]
- [[educational-policy-ai]]
- [[regulation]]

## Connected Articles
- [[van-vlasselaer-ai-detector-reliability-2026]] — Who wrote this? Evaluating the reliability of AI detection tools in higher education
- [[teichmann-detecting-undetectable-misconduct-2026]] — Detecting the Undetectable? Reassessing Academic Misconduct Procedures in the Era of Generative AI
- [[bassett-ai-detectors-education-2026]] — Heads We Win, Tails You Lose: AI Detectors in Education
- [[munoz-misconduct-allegation-evidence-2026]] — How strong is the evidence in generative AI-related academic misconduct allegations? A mixed-methods analysis
- [[roe-ai-humanizers-legitimacy-assessment-2026]] — Dramaturgies of Deception: AI Humanizers and the Performance of Legitimacy in Higher Education Assessment
- [[vetter-hidden-cost-disclosure-genai-2026]] — The Hidden Cost of Disclosure: A Multi-institutional Study on Undergraduate Students' Generative AI Usage and Faculty Accusations
- [[ai-writing-support-stage-ownership-2026]] — From Planning to Revision: How AI Writing Support at Different Stages Alters Ownership
- [[weidlich-inference-at-risk-assessment-validity-2026]] — Which inference is at risk? Assessment validity reasoning and generative AI
- [[academic-erasure-complexity-ai-writing-2026]] — Academic Erasure: The Disappearance of Complexity Under AI-Supported Writing

## Citation
Isley, C., Gaebler, J. D., & Goel, S. (2026). [AI-written admissions essays are widespread but penalized](https://arxiv.org/abs/2609.22549). arXiv:2609.22549.
