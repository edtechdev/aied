---
title: "Effectiveness of AI-Supported Game-Based Learning: A Systematic Review of Outcomes, Challenges, and Future Directions"
created: "2026-09-30T12:34:39-04:00"
updated: "2026-09-30T12:34:39-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071050.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review, thematic analysis]
discipline: [language learning, science education, math education, stem education]
level: [primary education, secondary, higher ed]
audience: [instructors, instructional designers, researchers, educational technology developers, policymakers]
foundations: [ai-education, theories-and-frameworks, critical-thinking, interpreting-and-applying-aied-research, limitations-in-aied-research]
pedagogy: [game-based-learning, motivation, self-efficacy, student-engagement, scaffolding, self-determination-theory]
technology: [adaptive-learning, generative-ai, llm, intelligent-tutoring, learning-analytics, student-modeling, knowledge-tracing, virtual-and-augmented-reality]
assessment: [automated-assessment, learning-gains, assessment-validity, psychometrically-aware-ai, feedback]
methods: [meta-analysis-systematic-review, rct, quantitative-research]
ethics: [bias-mitigation, equity-in-ai-education, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Kaşarcı and Yurt synthesized 55 peer-reviewed empirical studies of AI-supported [[game-based-learning]] (AI-GBL) published between 2021 and 2026, identified through Web of Science and Scopus and screened by two independent reviewers (κ = 0.89) under PRISMA 2020. Because effect sizes, outcome measures, AI mechanisms and comparison conditions were too heterogeneous to pool, they used thematic synthesis rather than meta-analysis: the review reports patterns, not a pooled effect. Across the included studies the evidence generally points to positive effects on knowledge acquisition, intrinsic [[motivation]] and affective engagement, with stealth assessment models reaching AUCs of 0.848–0.913. The most important qualification is evidential: only four of the 55 studies (7%) met the review's High-quality threshold, and the authors argue that effectiveness turns on alignment between AI mechanism and [[learning-theories|learning theory]] rather than algorithmic sophistication.

## Key Findings

- **No pooled effect is reported.** The review gives four reasons a [[meta-analysis-systematic-review|meta-analysis]] was not feasible: effect sizes were inconsistently reported or absent, outcome measures ranged from validated instruments to bespoke tests and behavioral logs, the AI mechanisms tested are conceptually distinct interventions, and comparison conditions varied from no-intervention controls to non-AI games.
- **LLM and [[generative-ai|generative AI]] mechanisms were the most common.** LLM/generative AI mechanisms appeared in 24 of 55 studies (44%) and [[adaptive-learning|adaptive difficulty adjustment]] in 15 (27%). [[language-learning|Language learning]]/EFL/CFL contexts and [[science-education|science education]] were each the domain of 8 studies (15%), and quasi-experimental designs with control groups predominated (25 studies, 45%).
- **The evidence base is methodologically thin.** Quality appraisal rated 4 studies (7%) High, 31 (57%) Moderate and 20 (36%) Low (mean = 16.1, SD = 2.9, range = 9–21); true experiments were rare, with 4 [[rct|RCTs]] (7%).
- **Reported effects are positive but scattered.** Kulkarni et al. (2025) reported a 6.03-point arithmetic gain among primary children; a generative AI financial literacy game produced a 58% increase in performance and a 37% reduction in maladaptive gambling behaviors (Santos et al., 2026, n = 134); a generative AI leadership [[simulation]] added 16 percentage points over control (t = 9.13, p < 0.001, Daniels et al., 2025, n = 160); and rule-based adaptive difficulty raised creative [[self-efficacy]] (η2p = 0.349, Guo et al., 2026).
- **Motivation moved more consistently than knowledge.** Damastuti et al. (2024) reported 35% longer play sessions and 28% better player effectiveness; emotion-, gaze- and context-aware adaptation cut negative emotional responses by 50% and raised quiz scores by 15% (Ayyal Awwad, 2025).
- **Scaffolding can reduce load and invite dependence.** [[llm|LLM scaffolding]] reduced [[cognitive-offloading|cognitive load]] and improved achievement, but Fang et al. (2025) found that positive perceptions of an LLM tutor did not necessarily translate into [[learning-gains|learning gains]], with content-relevant AI responses associated with more superficial engagement.
- **Adaptation direction and interaction quality matter more than AI presence.** Rule-based dynamic difficulty outperformed progressive difficulty in a VR task (Ahmed et al., 2025, n = 50); low-frequency goal-directed NPC interactions outperformed high-frequency exploratory ones (M. Wang et al., 2025); and Gaurav et al. (2022) and G. Tao et al. (2026) both found AI conditions that did not significantly outperform conventional game-based learning on knowledge.
- **Stealth assessment works; equity auditing does not yet.** [[machine-learning|Machine learning]] and deep learning models predicted learner states from gameplay with AUCs of 0.848–0.913, and one debiased model kept its accuracy. Of the 55 studies, only two explicitly conducted bias audits, and one examined differential outcomes by learner ability level.

## How the review was built

The search ran on 20 May 2026 in the Web of Science Core Collection and Scopus. The WoS topic query returned 477 records, reduced to 140 by filters (last five years, Article/Early Access, English, relevant subject categories); the Scopus TITLE-ABS-KEY query returned 829, reduced to 169. Together 309 records yielded 59 duplicates removed, 250 screened, 153 excluded at title/abstract stage, 97 assessed in full text and 42 excluded, leaving 55 studies. Dual abstract screening reached 92% initial agreement (κ = 0.89); all 20 discrepant records were resolved to 100% consensus. Methodological quality used a five-criterion rubric scored 1–5 per criterion (5–25 total), with tiers at High (≥21), Moderate (16–20) and Low (≤15); it was developed inductively and has not been externally validated.

## What the evidence shows about learning

AI-GBL shows positive learning effects across diverse subject domains in the majority of included studies, but effect sizes and statistical significance vary by design quality and outcome measure. The four High-quality studies — C.-H. Chen and Chang (2024), Sun et al. (2025), Huang and Chen (2025) and Panjaburee et al. (2025) — used true experimental or 2 × 2 factorial designs, validated instruments with pre/post measurement, sample sizes of at least 57 and [[explainable-ai|transparent AI]] descriptions, and provide the strongest causal evidence in the sample. Higher-order outcomes also appear: gains in credibility evaluation through LLM-driven NPCs aligned to the CRAAP framework (Chernbumroong et al., 2026), and in knowledge application, [[critical-thinking|critical thinking]] and self-efficacy through generative AI-assisted game design (Wan et al., 2025). Effects on knowledge do not follow automatically from AI presence, however: G. Tao et al. (2026) found significantly improved [[student-engagement|classroom engagement]] alongside non-significant effects on knowledge and motivation.

## How the mechanisms are supposed to work

Three pathways recur across the synthesis: cognitive load optimization through adaptive difficulty, motivational [[scaffolding]] through challenge calibration and timely feedback, and epistemic scaffolding through AI characters that support knowledge construction. The review's sharper claim is that interpretable, well-specified AI mechanisms produce clearer learning benefits than technically sophisticated but pedagogically underspecified ones: Guo et al.'s (2026) rule-based adaptive difficulty outperformed more complex Bayesian alternatives where the performance–difficulty relationship was transparent. LLM scaffolds present a paradox: high learner satisfaction can coexist with marginal gains when scaffolding enables passive reception, and purposeful, low-frequency NPC interactions outperform habitual, high-frequency ones. On the assessment side, stealth assessment, [[knowledge-tracing|knowledge tracing]] and [[student-modeling|learner modeling]] predicted knowledge states from gameplay non-intrusively, though the strongest studies scored only Moderate quality (17–18/25).

## What this means for practice

- **Instructors and instructional designers.** Ground adaptive mechanisms in an explicit learning progression model rather than adding AI for its own sake: the clearest gains came from transparent, well-specified adaptation, and rule-based dynamic difficulty beat more complex alternatives.
- **Design [[ai-feedback-quality|AI feedback]] to promote [[active-learning|active engagement]], not passive reception.** High satisfaction with an LLM tutor coexisted with marginal learning gains when responses were simply consumed, so build scaffolds that require [[desirable-difficulties|productive struggle]] and reserve goal-directed NPC interaction for when it serves the task.
- **Treat affective-state monitoring and bias auditing as design requirements, not extras.** Engagement and [[anxiety-and-stress|anxiety]] outcomes were the most consistently positive dimension, while only two of the 55 studies audited their assessment models for demographic bias; any stealth assessment pipeline in a real course should audit and debias before consequential use, and [[equity-in-ai-education]] belongs in the specification rather than a post hoc review.
- **Faculty developers and researchers.** Prioritize designs that can support causal claims: only 4 of 55 studies were RCTs, longitudinal evidence was near-absent, and most studies came from East Asian educational systems, so replication and pre-registration matter more than another descriptive pilot.

## Limitations

- The search was conducted on a single date and restricted to two databases, potentially introducing publication bias; the authors also note that heterogeneous AI mechanism descriptions introduced measurement uncertainty despite dual-reviewer coding (κ = 0.89).
- Thematic synthesis yields interpretive rather than [[quantitative-research|quantitative]] effect estimates, so no pooled effect size is available and stronger causal claims await quantitative synthesis.
- The bespoke five-criterion quality rubric has not been externally validated, a limitation the authors explicitly acknowledge; its consistent application rests on inter-rater reliability alone.
- Most included studies were conducted in East Asian educational contexts (Taiwan, China, Thailand), substantially limiting cross-cultural generalizability, and the rapid pace of LLM development means findings on generative AI mechanisms — approximately 44% of the sample — may date quickly after publication.

## Citation

Kaşarcı, İ., & Yurt, E. (2026). [Effectiveness of AI-Supported Game-Based Learning: A Systematic Review of Outcomes, Challenges, and Future Directions](https://doi.org/10.3390/bs16071050). *Behavioral Sciences*, 16(7), 1050.