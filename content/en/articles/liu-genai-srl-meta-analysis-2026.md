---
title: "Effects of generative AI on self-regulated learning and the incremental contributions of instructional interventions: evidence from a meta-analysis"
created: "2026-11-27T09:45:00-05:00"
updated: "2026-11-27T09:45:00-05:00"
published: "2026-11-26"
type: article
authors: ["Xing Liu", "Yumeng Yang"]
venue: "Frontiers in Psychology, 17, 1968882"
evidence_context: educational
foundations: [cognitive-offloading]
pedagogy: [self-regulated-learning, metacognition, motivation, scaffolding]
technology: [generative-ai, llm]
methods: [meta-analysis-systematic-review]
discipline: [stem education, humanities education]
level: [higher ed, k 12]
audience: [instructors, instructional designers, researchers]
page_kind: [synthesis]
research_method: [literature review]
sources: ["raw/papers/liu-genai-srl-meta-analysis-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Liu and Yang (2026) pool 26 studies and 76 effect sizes to separate two questions that the [[generative-ai]] literature usually asks together: does AI-supported learning improve [[self-regulated-learning]], and does adding instructional support on top of the AI improve it further? Using a three-level random-effects model, they find a moderate positive effect for generative AI alone against no AI (ḡ = 0.508), a larger descriptive effect for AI combined with instructional interventions (ḡ = 0.788), and a significant incremental effect when interventions are added to AI already in use (ḡ = 0.528). The difference between the two no-AI comparisons was not statistically significant, so the analysis does not establish that combined instruction beats standalone AI; the within-study comparison does establish an increment. Longer interventions and, for the incremental comparison, STEM contexts showed larger effects.

## Key Findings
1. **Generative AI alone beat no AI on SRL.** Four studies with seven effect sizes produced a moderate positive pooled effect of 0.508.
2. **AI plus instructional interventions produced a larger descriptive effect.** Sixteen studies and 34 effect sizes yielded 0.788 against no AI.
3. **The two no-AI comparisons did not differ significantly.** The between-comparison test was marginal at 0.089, and the authors warn it compares different studies, not conditions within one design.
4. **Adding instruction to AI in use produced a significant increment.** Ten studies and 35 effect sizes comparing AI plus interventions with AI alone yielded 0.528.
5. **Duration tracked effect size.** Interventions longer than nine weeks reached 1.016, five to nine weeks 0.660, and under five weeks 0.404, which was not significant.
6. **Discipline moderated the increment.** In the AI-plus-intervention versus AI-alone comparison, STEM effects were 0.817 and humanities effects 0.368.
7. **Higher education showed larger effects than [[k-12|K-12]].** Against no AI, [[higher-ed|higher education]] reached 0.914 and K-12 0.491, a marginal difference.

## Two comparisons, not one

The review's methodological contribution is the split. In the first framework, the control is learning without AI, and the authors distinguish studies where students used generative AI alone from studies where AI was combined with prompts and feedback, teacher guidance, progress monitoring, structured tasks or reflective questioning. That framework estimates the overall effect of each approach. In the second, both arms use generative AI and only the presence of instructional support differs, which estimates the added value of the support. Only two primary studies contributed to both frameworks, which is why the cross-study comparison of 0.508 and 0.788 cannot substitute for the within-study increment.

The first framework included 18 studies and 41 effect sizes, with 2,015 participants split between 1,061 in AI groups and 954 in no-AI controls. The second included 10 studies and 35 effect sizes. Publication-bias checks were not significant: Egger's test gave t(33) = 0.804, p = 0.427 for the first comparison and t(34) = 0.229, p = 0.821 for the second, and the funnel plots showed no apparent asymmetry in the first.

## Why the increment matters

The increment is the part an instructor can act on. If generative AI alone already produces a moderate gain, then adopting a tool and leaving students to it captures only part of the available effect; the additional 0.528 comes from what surrounds the tool. The studies that produced it used recognizably instructional moves: prompts that ask for justification, [[feedback|feedback loops]], teacher guidance, monitoring and regulation, structured task sequences, and [[reflection|reflection]]. Those are the same supports that [[scaffolding]] research would predict, and they are compatible with a [[cognitive-offloading]] account in which the tool can either substitute for or support the learner's own regulation.

The moderator results sharpen the claim without settling it. Duration and discipline both point toward the same interpretation: effects accumulate when students have time and task structure to build regulation, and STEM tasks may offer more opportunities for checking and revising an answer than [[humanities-education|humanities tasks]] in the included studies. The higher-education advantage is described as preliminary, and the authors note that both datasets are dominated by university samples, with higher education making up 75% of the studies in the first comparison.

## Where the evidence stops

The evidence base is thin at the point that matters most. Only four studies compared generative AI alone with no AI, so the 0.508 estimate rests on a small and potentially unrepresentative set. The authors say so directly and call for more classroom studies with that comparison, plus controlled experiments that separate the contribution of the tool from the contribution of the [[learning-design|instructional design]]. SRL was measured in the included studies rather than observed independently, so the outcomes are students' reported or tested regulation rather than demonstrated [[transfer-of-learning|transfer to new learning]].

## What this means for practice

- **Instructors.** Do not count tool access as the intervention. Pair generative AI with prompts that require justification, feedback on process, and structured tasks that make monitoring visible.
- **Instructional designers.** Plan for at least five weeks and preferably longer; short exposures produced the weakest and least reliable effects in this synthesis.
- **Faculty developers.** Train the instructional moves, not only the tool. The increment came from guidance, structured tasks and reflection around the AI, which are teachable practices.
- **Researchers.** Run designs that compare AI alone with AI plus support inside the same study. Cross-study comparisons of separate interventions cannot answer the incremental question.

## Limitations

- Only four primary studies compared generative AI alone with no AI, so that pooled estimate is unstable.
- The included studies vary widely in tool, task and measure, and the synthesis relies on SRL measures rather than independent performance tasks.
- Most samples are from higher education, limiting what can be said about K-12.
- The between-comparison test is cross-study, not a randomized contrast, and the authors treat it as suggestive only.
- Subgroup analyses rest on small numbers of studies, and non-significant subgroup differences are not evidence of no difference.

## Citation

Liu, X., & Yang, Y. (2026). [*Effects of generative AI on self-regulated learning and the incremental contributions of instructional interventions: evidence from a meta-analysis*](https://doi.org/10.3389/fpsyg.2026.1968882). *Frontiers in Psychology, 17*, 1968882.
