---
title: "Can Artificial Intelligence Promote Metacognition? Evidence from a Three-Level Meta-Analysis"
created: "2026-09-18T14:40:00-04:00"
updated: "2026-09-24T12:26:00-04:00"
type: article
pedagogy: [metacognition, self-regulated-learning]
foundations: [cognitive-offloading]
technology: [generative-ai, intelligent-tutoring]
methods: [meta-analysis-systematic-review, quantitative-research]
level: [k 12, higher ed, secondary]
audience: [researchers, instructors]
page_kind: [synthesis]
sources: ['raw/papers/ai-metacognition-three-level-meta-analysis-2026.md']
confidence: high
---

> **Synthesis:** Xiuya Li, Xiaowen Liu, Heya Lei and Haibo Yang (Tianjin Normal University) pool 54 (quasi-)experimental studies (k = 121 effect sizes, N = 7,431 [[learners]]) in a three-level meta-analysis of [[generative-ai|AI]] interventions on [[metacognition]]. The pooled effect is large and positive, Hedges' g = 0.624 (SE = 0.099, p < .001, 95% CI [0.431, 0.817]), and 107 of 121 effects point the same way. Only three of fifteen tested moderators survive: the control condition (largest against [[teacher-role|teacher]] or peer guidance, g = 1.057), duration (from g = 0.381 under a week to g = 1.638 at 15-20 weeks), and [[self-report-measures|measurement source]] (self-report g = 0.776, behavioral observation g = 0.514, accuracy ratings g = 0.035 and non-significant). Boundary conditions matter more than the headline: the effect is real, strengthens with exposure, and thins out as the outcome moves from what learners believe about their [[self-regulated-learning|self-regulation]] toward how accurately they monitor themselves.

## Key Findings

1. **A large positive pooled effect across 54 studies.** From 121 effect sizes and 7,431 participants, AI raised [[metacognition]] with g = 0.624 (SE = 0.099, p < .001); 107 effects were positive, 13 negative, one null.
2. **Heterogeneity sat mostly between studies** (Q = 1332.940, p < .001), and the [[meta-analysis-systematic-review|three-level model]] fitted better than either two-level alternative.
3. **The control condition moderated the effect** (p = .029): largest against teacher instruction or peer interaction (g = 1.057), smallest against no-intervention controls (g = 0.373).
4. **Measurement source moderated the effect** (p = .027), the sharpest result: self-report g = 0.776, behavioral observation g = 0.514, accuracy ratings g = 0.035.
5. **Twelve other moderators were non-significant**: publication type, year, subject, task type, setting, [[research-methods-aied|study design]], pretest, level, culture, gender, AI role and AI type.
6. **Publication bias was detected, and correction raised the estimate.** Egger's regression confirmed asymmetry (t(119) = 4.371, p < .001); trim-and-fill imputed 12 effects and moved pooled g to 0.777.

## Why a three-level model was needed

Read any single effect size with the nesting in mind: 29 of the 54 studies (53.70%) contributed more than one comparison, so comparisons inside a study are not independent. The [[meta-analysis-systematic-review|three-level random-effects model]] partitions variance into sampling error, within-study variation and between-study variation, and both added levels improved fit. Earlier syntheses disagreed partly because some failed to separate [[metacognition]] from broader self-regulation and others bundled it into composite outcomes.

## What counts as metacognition here, and how it was measured

Check what a study measured before accepting a metacognition claim. The construct here is Flavell's cognition about cognition, operationalized through Efklides' three-part model of metacognitive knowledge, experiences, and monitoring and control. Measures split into offline self-report instruments such as metacognitive awareness inventories, and online measures: accuracy ratings, scored as the gap between self-assessed and actual performance, and systematic observation of behavior. The two families correlate weakly, and the inclusion rule excluded studies whose only metacognitive measure was a broad self-regulation scale, which is why the positive effect sits in self-report.

## The overall effect and its moderators

The control-condition result needs careful handling. AI's advantage was largest against human guidance or peer interaction because it sustains continuous [[feedback]] and adaptive [[scaffolding]] that high student-teacher ratios make hard to deliver; that is also the comparison least like a no-treatment baseline, so part of the effect may reflect stretched human support rather than AI's intrinsic benefit. The duration rise (moderator p = .007) is read as a rebuttal of the novelty effect, with gains accumulating as learners integrate AI into their regulation. Self-report is vulnerable to social desirability, and perceived gains may never become observable behavior, even though AI's proposed mechanisms (planning, monitoring through feedback and progress [[visualization|visualization]], adaptive advice, guided reflection, reduced extraneous [[cognitive-offloading|cognitive load]]) are metacognitive processes on paper.

## Where the evidence is weak or inconsistent

Accuracy ratings returned essentially zero (g = 0.035, p = .890); set against Fan et al.'s (2025) finding that ChatGPT-using writers engaged in fewer metacognitive processes than those consulting human experts, the null is the paper's key open question. Low-powered subgroups are unstable: the intelligent-peer role gave a large but non-significant g = 0.764 (95% CI [-0.797, 2.326]). Neither setting nor culture passed an omnibus test, so both are patterns: classroom settings were the only significant setting (g = 0.796), while [[self-directed-learning|self-directed]] settings, [[higher-ed|higher education]] (g = 0.640) and other [[adult-learning|adult learners]] (g = 0.305) were not. Collectivist samples (g = 0.714) raise a risk: deference norms may increase [[trust|trust in AI]] and susceptibility to [[cognitive-offloading]] rather than [[self-regulated-learning]].

## What this means for practice

- **Instructors.** Schedule it across a full term, not one-off sessions: the pooled effect rose from g = 0.381 under a week to g = 1.638 at 15-20 weeks.
- **Instructors.** Run it inside regular classroom activity, the only setting with a significant effect (g = 0.796), and read the gain against stretched human guidance, not the tool.
- **Researchers.** Measure [[metacognition]] with online instruments (accuracy ratings, behavioral observation) alongside self-report: self-report carried the whole effect, accuracy ratings were flat (p = .890).
- **Researchers.** Report results by component; this composite could not separate monitoring, knowledge and experience, and some categories held too few effects.

## Limitations

- 29 of the 54 studies (53.70%) contributed multiple outcomes or conditions, so effects within studies are dependent, and the authors note this pooling may increase exposure to publication bias.
- Egger's regression detected publication bias (t(119) = 4.371, p < .001); trim-and-fill imputed 12 effect sizes and raised the pooled effect to g = 0.777, a direction the paper does not explain.
- Inadequate reporting blocked classification of metacognitive subcomponents and some categories held too few effects (the intelligent-peer role gave g = 0.764, 95% CI [-0.797, 2.326]); quality was sound (MERSQI mean 11.16, SD = 1.50) but mostly quasi-experimental, and the manuscript is a preprint with its OSF link blinded.

## Connected Concepts

- [[metacognition]] — the outcome construct, defined through knowledge, experience and monitoring/control
- [[self-regulated-learning]] — the broader construct the authors deliberately separate from metacognition
- [[cognitive-offloading]] — the risk mechanism behind the null accuracy-rating result and the "metacognitive laziness" critique
- [[generative-ai]] — the dominant technology in the post-2022 studies, alongside earlier intelligent tutoring systems
- [[intelligent-tutoring]] — the historical AI role and one of the tested moderator categories
- [[meta-analysis-systematic-review]] — the method, its PRISMA reporting and its multilevel variants
- [[self-report-measures]] — the measurement family carrying the largest and least trustworthy effects
- [[scaffolding]] — the metacognitive support mechanism the authors claim AI supplies
- [[self-directed-learning]] — a non-significant intervention setting that raises questions about unsupervised AI use
- [[collaborative-learning]] — the task type tested and found not to moderate the effect
- [[student-ai-interaction]] — the behavioral domain the observational measures capture
- [[learning-gains]] — the neighbouring outcome other AI meta-analyses target, contrasted with metacognition here

## Connected Articles

- [[cognitive-offloading-metacognitive-review-2026]] — Mechanisms and interventions linking offloading to metacognitive monitoring
- [[ai-metacognition-stem-review]] — Review of AI tools that scaffold metacognition in STEM settings
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Whether metacognitive training produces better-calibrated offloading
- [[cui-motivation-roles-metacognitive-genai-2026]] — How motivation and AI role shape metacognitive engagement in GenAI interaction
- [[zhao-genai-higher-order-thinking-meta-2026]] — Meta-analysis of GenAI effects on higher-order thinking, a neighbouring outcome
- [[oneill-presumed-effective-meta-analysis-2026]] — Critique of flawed meta-analytic practice in AI-in-education evidence
- [[banihashem-ai-srl-systematic-mapping-review-2025]] — Mapping review of the AI and self-regulated learning intersection
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — Process evidence on how students actually regulate learning with a chatbot
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analysis of AI literacy interventions, sharing the moderator-first design
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis of AI's effect on learning for comparison of effect magnitudes

## Citation

Li, X., Liu, X., Lei, H., & Yang, H. (2026). [*Can artificial intelligence promote metacognition? Evidence from a three-level meta-analysis*](https://osf.io/preprints/psyarxiv/pa3wj_v1). *PsyArXiv Preprints*.