---
title: "What Measures and Research Methods Can an Instructor Use to Evaluate AI-Related Interventions?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-09-14T13:43:30-04:00"
weight: 55
tags: [research-methods-aied, ai-ed-evaluation, assessment, self-report-measures]
assessment: [ai-ed-evaluation, assessment, research-methods-aied, self-report-measures]
research_method: [research methods]
page_kind: [evaluation]
---

# What Measures and Research Methods Can an Instructor Use to Evaluate AI-Related Interventions?

**Match the method to the claim.** If you want to know whether students *liked* an AI activity, a survey can help. If you want to know whether they *learned*, use performance measures. A survey is a [[self-report-measures|self-report measure]] — the right instrument for attitudes and the wrong one for learning, for the reasons collected on that page. If you want to know whether the AI *caused* an improvement, you need a credible comparison condition and preferably random assignment.

## Method options

The [[research-methods-aied|Research Methods in AIED]] page distinguishes several useful options:

- **Randomized experiments** provide the strongest causal inference.
- **Quasi-experimental** pre/post or matched-group designs are often more practical in intact classes but support weaker causal claims.
- **[[qualitative-research|Qualitative]]** interviews, focus groups, observations, and artifact analysis reveal mechanisms and unexpected experiences.
- **AI-assisted qualitative analysis** can reorganize interview or observation corpora in minutes, so [[chain-behind-claim-warrantability-2026|warrantability]] matters as much as accuracy or disclosure: record the documented reorganizations that let a reader inspect, contest, and revise the pathway from data to claim.
- **[[mixed-methods-research|Mixed methods]]** combine outcome evidence with explanations of why effects occurred.
- **[[design-based-research|Design-based research]]** is useful when instructors are iteratively developing and refining an intervention in an authentic course.

Whatever channel you use, only three conditions make a causal claim interpretable: a **precisely described treatment**, a **well-defined comparison condition**, and a **valid measure of durable learning**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] audit 19 ChatGPT-in-education comparisons against exactly these criteria and find that only 4 (21%) satisfy all three — 74% had a well-defined treatment, 42% a well-defined control group, and 53% an outcome that qualified as learning. A [[generative-ai|general-purpose tool]] introduced alongside new activities, feedback, or interface design confounds the medium with the method, so a significant result cannot be attributed to the AI.

## A manageable classroom evaluation

For a manageable classroom evaluation, a useful minimum is a **baseline measure, the intervention, an immediate post-measure, and a later unassisted measure**. Wherever possible, include a comparison condition such as existing practice, no AI, unrestricted AI versus scaffolded AI, or two alternative designs. Measure assisted performance and independent learning separately.

The [[ai-ed-evaluation|AI Ed Evaluation]] synthesis recommends outcomes such as unassisted learning gain, delayed retention, transfer to a new task, quality of reasoning, [[misconceptions]], feedback uptake, and subgroup performance. Engagement, satisfaction, AI-use logs, self-efficacy, and [[technology-acceptance-model|perceived usefulness]] can be valuable secondary measures but should not be treated as substitutes for learning. Instructor workload and time savings are also legitimate implementation outcomes.

Two cautions apply to how results are read. First, an averaged effect from the literature is a weak guide to a single classroom: [[oneill-presumed-effective-meta-analysis-2026|O'Neill's (2026) audit]] of 14 high-impact [[meta-analysis-systematic-review|meta-analyses]] found that none provided a valid basis for its claims — pooled [[learning-gains|"academic achievement"]] mixed test scores, motivation, [[self-efficacy]], and attitudes into one estimate, reported heterogeneity was extreme (I² ranged from 77.2% to 94.4% in the 13 analyses that reported it, with 12 of those 13 above 80%), all 14 assessed [[limitations-in-aied-research|publication bias]] invalidly, and 61% of randomly vetted primary studies carried validity problems, while the statistics that would show how far individual results actually spread were largely missing (only four analyses reported between-study variance and only two reported a prediction interval, both of which included zero). Second, a convenient score can measure the wrong construct: in [[zhang-platform-scores-miss-ai-teaching-agents-2026|an evaluation of eight AI teaching agents]], the agent ranked third by the platform's own score ranked last on an expert-validated rubric, because platform scores indexed student performance during the interaction rather than the agent's teaching quality. Treat any single dashboard metric as a hypothesis to validate against a measure tied to the capability you intend to develop.

For what the current evidence does and does not show, and where it remains thin, see [[does-ai-help-students-learn]] and [[research-gaps-aied]].
