---
title: "Problem-based and project-based learning as promising frameworks for generative AI-supported education: Emerging evidence from a systematic review and three-level meta-analysis"
created: "2026-09-27T05:25:33-04:00"
updated: "2026-11-13T17:10:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Pooled controlled studies find that putting [[generative-ai]] inside [[problem-based-learning|problem-based learning]] and [[project-based-learning|project-based learning]] produces better learning than the same courses without it. The benefit is real but probably about half the size the headline figure suggests, because the smallest studies reported the largest gains. How the tool is embedded, and whether students use it together, separates the stronger studies more clearly than which model was chosen.

## Key Findings

1. Students in GenAI-supported PBL and PjBL outperformed comparison groups on achievement, skill performance, motivation and collaboration measures.
2. The headline gain is inflated by small-study effects; the authors' correction roughly halves it, so a program should plan for a moderate benefit rather than a dramatic one.
3. Gains were strongest where the outcome was achievement or skilled performance, and weaker for higher-order thinking and for collaboration and communication.
4. How the tool was used mattered more than the product: a general chatbot in students' hands pooled higher than a system custom-built into the course platform.
5. Smaller cohorts showed larger gains, and group work trended better than individual use; both contrasts rest on thin subgroups.
6. The studies say almost nothing about [[ai-literacy|AI literacy]] or about students' capacity to judge, challenge and revise AI output, which are the outcomes many programs now claim.

## What the review actually pooled

The authors searched eight databases for controlled studies published between January 2023 and April 2026, screened the records to 42 full texts, and kept 22 studies that met a baseline-equivalence threshold — 66 effect sizes in a three-level [[meta-analysis-systematic-review|meta-analysis]], a [[quantitative-research|quantitative synthesis]] of studies that differ in discipline, stage and tool.

It treats PBL and PjBL as one family because GenAI enters both cycles in the same places: both begin with an authentic problem, and PBL asks students to understand and solve it while PjBL asks them to build something that does. The authors propose a four-role account — Problem Framer during problem understanding, Knowledge Scaffold during inquiry, Production Partner during artifact building, and Reflective Critic during evaluation — drawing on mediated action, the zone of proximal development, cognitive load theory and [[self-regulated-learning]]. They call the account interpretive rather than validated: GenAI appears as a [[scaffolding]] resource inside [[human-ai-collaboration]], with [[problem-solving]] judgment left to the learner, a narrower claim than "AI tutor".

## What the numbers showed

Across 52 effects from 20 studies, the pooled learner-internal estimate was g = 0.819, 95% CI [0.655, 0.983]. That is a large effect, but standard error predicted effect size (β = 3.057, p = .009), the PET intercept was not significant, and the PEESE correction brought the estimate to g = 0.378. The authors read this as small-study effects rather than proof of publication bias and present the corrected value as the defensible expectation.

The domains split in a way practitioners will recognize: [[learning-gains|Learning achievement]] and skill performance pooled at g = 0.950, affective and [[motivation]]al outcomes at g = 0.762, [[critical-thinking|higher-order thinking]] at g = 0.635, and collaboration and communication at g = 0.594. Product quality, modeled separately as collaborative output, returned the largest estimate (g = 1.958) on six studies, with a prediction interval crossing zero. Heterogeneity was substantial: I² = 56.31% for learner-internal outcomes, 92.93% for product.

## What separated the stronger studies

Two moderators reached significance, and they point in the same direction. Tool type mattered (QM = 14.301, p < .001): studies where students used a general [[conversational-ai|chatbot]] directly pooled at g = 0.970, against g = 0.455 for systems customized into a platform, virtual patient or agent. Participant number also mattered (QM = 6.717, p = .035): cohorts of 60 or fewer pooled at g = 0.984, against 0.694 for 61–110 students and 0.518 above that. Small studies and small classes travel together, so teacher support and implementation fidelity are plausible explanations alongside anything about the tool.

[[collaborative-learning|Peer collaboration]] produced the marginal contrast: g = 0.885 for group work against g = 0.416 for individual use (p = .055), which the authors label exploratory. Learning approach, stage, discipline, project context and duration (five weeks or less, six to eight, more than eight) did not separate effects — the review's most useful negative result for designers: no schedule or discipline reliably produced a bigger gain.

## Where the evidence stops

The base is small: twenty-two studies, six for the product model, two for the individual-collaboration subgroup, and several subgroups thin enough that the authors call the estimates underpowered. Dissertations and preprints were not searched. These are ordinary [[limitations-in-aied-research|limitations in AI education research]], but they bound what a program should claim.

[[assessment-validity|Assessment validity]] is the deeper problem. Studies discussed AI use, verification and dependence but rarely turned those into calculable outcomes, so AI literacy and the capacity to work with AI could not be modeled. The authors' own implications are correspondingly narrow: let students choose general tools on open-ended tasks, tighten teacher guidance and tool boundaries in high-risk fields such as medicine and engineering, run group activities in which students explain, challenge and revise AI output together, and use [[authentic-assessment|authentic assessment]] of how students analyze and use generated material, not only what they recall.

## What this means for practice

- **Instructors:** Place the tool where the cycle needs help — framing, inquiry scaffolding, artifact production, critique of a draft — not at the front as an answer service. Ask students to explain, challenge and revise what it returns.
- **Instructional designers:** Name the AI-use phase in the design and record what students did with the tool. The studies under review mostly did not, and a design that logs its own evidence is the only kind that can later be evaluated.
- **Curriculum designers:** Do not justify a program-wide redesign on the headline effect. Budget for a moderate gain and put the strongest claim behind achievement and skilled performance, not higher-order thinking or collaboration.
- **Administrators:** Resist mandating a custom platform on the assumption that a purpose-built tool beats a general chatbot. Here the opposite pooled higher, and the gap is as likely to be implementation support as software.
- **Faculty developers:** Prepare instructors for the group version of the task. Collaboration is the one design choice the authors still recommend despite its marginal statistics, and it changes how a session is planned.

## Limitations

- The evidence base is 22 studies, with the product model resting on six and the individual-collaboration subgroup on two, so subgroup estimates are underpowered.
- PET-PEESE corrections are unstable at this study count; g = 0.378 is a sensitivity estimate, not a precise effect.
- Heterogeneity is high and the product prediction interval crosses zero, so no single implementation should expect the pooled result.
- AI literacy and human-AI collaborative capacity were not measured well enough to model, and gray literature was not searched.

## Citation

Chen, Z., Yan, Z., Fu, Z., & Huang, H. (2026). [*Problem-based and project-based learning as promising frameworks for generative AI-supported education: Emerging evidence from a systematic review and three-level meta-analysis*](https://doi.org/10.1016/j.actpsy.2026.107734). *Acta Psychologica*, 270, Article 107734.
