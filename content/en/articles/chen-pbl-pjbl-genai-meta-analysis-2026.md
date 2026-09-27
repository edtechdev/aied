---
title: "Problem-based and project-based learning as promising frameworks for generative AI-supported education: Emerging evidence from a systematic review and three-level meta-analysis"
created: "2026-09-27T05:25:33-04:00"
updated: "2026-09-27T05:25:33-04:00"
type: article
sources: ['raw/papers/chen-pbl-pjbl-genai-meta-analysis-2026.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
audience: [instructors, researchers]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [project-based-learning, problem-based-learning, collaborative-learning, self-regulated-learning, motivation, problem-solving]
technology: [generative-ai]
assessment: [learning-gains, assessment-validity, authentic-assessment]
methods: [meta-analysis-systematic-review, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** This three-level meta-analysis pools 22 controlled studies and 66 effect sizes covering January 2023 to April 2026 to ask what [[generative-ai]] (GenAI) adds when it is embedded in problem-based learning (PBL) and project-based learning (PjBL). Across four learner-internal outcome domains the pooled effect was large (g = 0.819, 95% CI [0.655, 0.983]), but a PET-PEESE sensitivity analysis indicated small-study effects and reduced the estimate to g = 0.378, so the authors treat the headline value as potentially inflated and the evidence as promising but preliminary. Product and solution performance, modeled separately because it measures human-AI collaborative output rather than internalized learning, returned the largest estimate (g = 1.958) with a prediction interval that crossed zero. Effects differed significantly by participant number and tool type, and peer collaboration showed only a marginal trend. PBL/PjBL is framed as resilient for [[ai-education]] because it anchors learning in authentic problems rather than tool-specific knowledge.

## Key Findings

1. **A large pooled effect on learner-internal outcomes.** Across 52 effect sizes and 20 studies, GenAI-supported PBL/PjBL produced g = 0.819, 95% CI [0.655, 0.983], prediction interval [0.166, 1.472].
2. **Sensitivity analysis shrinks the estimate.** Standard error predicted effect size (β = 3.057, p = .009), the PET intercept was not significant (g = 0.004), and PEESE reduced the estimate to g = 0.378.
3. **Outcome domains differed in size.** Learning achievement and skill performance led (g = 0.950), ahead of affective and motivational outcomes (g = 0.762), higher-order thinking (g = 0.635), and collaboration and communication (g = 0.594).
4. **Product quality showed the largest effect, with wide uncertainty.** Product and solution performance pooled at g = 1.958, but rested on six studies and produced an approximate 95% prediction interval of [− 0.740, 4.656].
5. **GenAI tool type moderated effects significantly.** General chatbots (g = 0.970) outperformed custom or API systems (g = 0.455), QM = 14.301, p < .001, so how a tool is embedded appears to matter.
6. **Participant number moderated effects.** Groups of ≤60 students pooled highest (g = 0.984), against g = 0.694 for 61–110 and g = 0.518 for >110, QM = 6.717, p = 0.035.
7. **Peer collaboration showed only a marginal trend.** [[collaborative-learning]] interventions pooled at g = 0.885 against g = 0.416 for individual work, QM = 3.675, p = 0.055, a trend the authors call marginal.

## How the review was done

The authors searched eight databases, including Web of Science, Scopus, EBSCO/ERIC, and IEEE Xplore, for studies published from January 1, 2023, to April 13, 2026, adding forward and backward citation tracking. The search identified 412 records; after removing 103 duplicates, 309 records entered title and abstract screening and 267 records were excluded against the topic, intervention, design, outcome, or data criteria. 42 studies entered full-text assessment, 18 studies were excluded there, and 24 entered data extraction and quality assessment. Two failed the What Works Clearinghouse baseline-equivalence threshold of 0.25 SD and were dropped, leaving 22 studies. Independent screening reached Cohen's κ = 0.88 and coding κ = 0.79, and multiple outcomes per study were retained as dependent effect sizes under a [[meta-analysis-systematic-review]] three-level structure ([[research-methods-aied]]).

## Four roles for GenAI in the PBL/PjBL cycle

The paper treats [[problem-based-learning]] and [[project-based-learning]] as overlapping rather than distinct: both start from authentic problems, but PBL asks learners to understand and solve the problem while PjBL asks them to build something that solves it. Because GenAI enters both cycles in comparable places, the authors pool them and propose a provisional four-role framework: GenAI as Problem Framer in problem understanding, Knowledge Scaffold in inquiry and knowledge building, Production Partner in artifact production, and Reflective Critic in evaluation and reflection. The roles draw on mediated action, the zone of proximal development, cognitive load theory, distributed cognition, and [[self-regulated-learning]], while measured outcomes such as learning [[motivation]], engagement, and self-efficacy were grouped pragmatically into one affective domain. The framework is hedged as interpretive rather than validated, casting GenAI as a [[scaffolding]] resource within [[human-ai-collaboration]] rather than an autonomous tutor, and leaving [[problem-solving]] judgment with the learner.

## What the moderator analyses suggest

Only two moderators reached significance: participant number and GenAI tool type. Learning approach, educational stage, discipline background, project context, and intervention duration did not separate effects, and peer collaboration produced only a marginal trend. The tool-type gap suggests embedding matters more than the model: a general chatbot used directly produced a larger pooled effect (g = 0.970) than systems customized into course platforms, virtual patients, or agents (g = 0.455). They are careful about causality: smaller studies may also involve smaller classes, stronger scaffolding, and higher implementation fidelity, and PET-PEESE shows an association between effect size and precision, not proof of publication bias. Heterogeneity stayed substantial: Total I2 = 56.31% for learner-internal outcomes and 92.93% for product and solution performance.

## What this means for practice

- Allow for the correction: plan expectations nearer the PEESE-adjusted g = 0.378 than the unadjusted g = 0.819.
- Choose and embed the GenAI tool deliberately, since general chatbots pooled higher (g = 0.970) than custom or API systems (g = 0.455).
- Build in peer collaboration, which pooled at g = 0.885 against g = 0.416 for individual work, though the difference was marginal.
- Keep cohorts small where feasible, since groups of ≤60 students showed the largest pooled estimate (g = 0.984).
- Assess twice: AI-restricted tasks for internalized knowledge and independent reasoning, and AI-permitted authentic tasks for responsible AI-augmented production.

## Limitations

- The evidence base is small: 22 studies, with the product model resting on six studies and the individual peer-collaboration subgroup on two.
- PET-PEESE estimates may be unstable at this study count, so g = 0.378 is presented as a sensitivity estimate rather than a precise effect.
- Heterogeneity is high (Total I2 = 56.31% learner-internal, 92.93% for product performance), and the product prediction interval crossed zero.
- AI literacy could not be modeled as a separate outcome domain because its measures were too heterogeneous.

## Citation

Chen, Z., Yan, Z., Fu, Z., & Huang, H. (2026). [*Problem-based and project-based learning as promising frameworks for generative AI-supported education: Emerging evidence from a systematic review and three-level meta-analysis*](https://doi.org/10.1016/j.actpsy.2026.107734). *Acta Psychologica*, 270, Article 107734.