---
title: "Human–AI collaborative patterns in GenAI-supported instructional design among pre-service teachers: an analysis of interaction sequences and cognitive load"
created: "2026-10-16T20:13:06-04:00"
updated: "2026-10-17T07:09:05-04:00"
type: article
sources: ['raw/papers/10.1186_s41239-026-00628-3.md']
confidence: high
page_kind: [evaluation, framework]
research_method: [process-outcome modeling]
audience: [instructors, faculty developers, instructional designers, educational technology developers]
level: [undergraduate, teacher education]
foundations: [human-ai-collaboration, critical-thinking, ai-literacy, cognitive-offloading]
pedagogy: [metacognition, cognitive-psychology, student-ai-interaction, professional-training]
technology: [generative-ai, llm, prompt-engineering, conversational-ai]
assessment: [evaluative-judgment, assessment-validity]
methods: [quantitative-research, mixed-methods-research]
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-16"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Fang, Feng, Yan and Zhou (2026) recorded what 67 pre-service teachers actually did with [[generative-ai|generative AI]] while designing lesson plans — two rounds, two weeks apart, on DeepSeek-V2.5 with no prompt training — and split each round at the median of lesson-plan quality. The high-quality group did not ask more, plan more, or express more: those frequencies were statistically indistinguishable. What separated them was iteration — a two-way evaluation–revision cycle (CE→RE Z = 2.80, RE→CE Z = 2.50) and a revision self-loop (RE→RE Z = 4.24) — while the low-quality group ran on ineffective cycling (IC→IC Z = 3.25). With comparable [[self-report-measures|self-reported]] effort, the high-quality group felt less [[cognitive-psychology|cognitive]] strain (mental demand 3.09 vs 4.03) and far less frustration (2.12 vs 3.82), a "doing more with less" pattern the authors attribute to where attention was aimed rather than how much was spent.

## Key Findings

1. **Iteration, not effort, separates the groups.** Mann-Whitney comparisons of interaction frequencies showed no significant differences for planning conception (1.24 vs 1.38, p = 0.222), generating content (0.52 vs 0.44, p = 0.661), comparing and selecting (0.55 vs 0.41, p = 0.384), or social expression (1.00 vs 0.97, p = 0.968); effort on the NASA-TLX also did not differ (2.85 vs 3.26, p = 0.074).
2. **Critically evaluating was effectively absent in the low-quality group.** Explicit evaluation utterances averaged 0.67 per participant in the high-quality group and 0.00 in the low-quality group (U = 782.00, p < 0.001, r = 0.491); the authors caution that implicit evaluation — silently rejecting AI text without stating a judgment — would not have been coded.
3. **Revision differed by more than fourfold.** The high-quality group revised 3.12 times on average against 0.76 (U = 947.50, p < 0.001, r = 0.606, a large effect), and 27 of 34 low-quality participants (79.4%) never revised at all while high-quality revision counts ran from 0 to 9.
4. **Ineffective cycling is the low-quality signature.** Repeated clarification loops occurred at 0.74 per participant in the low-quality group versus 0.12 (U = 334.50, p < 0.001, r = 0.425), and IC→IC (Z = 3.25) was the one significant transition unique to that group, its self-perpetuating [[cognitive-offloading|offloading]] failure.
5. **Effective flows followed a progressive sequence.** Of 17 significant transitions in the high-quality group, the positive paths trace Planning → Decision-making → Generation → Evaluation → Revision → Re-evaluation (PC→CS Z = 3.95, PC→GC Z = 3.60, CE→RE Z = 2.80, RE→CE Z = 2.50, RE→RE Z = 4.24), with revision tightly controlled — activated by evaluation and itself, and significantly inhibited after planning or social expression (RE→PC Z = −4.63, SE→RE Z = −5.56).
6. **Same effort, less strain, sharply lower frustration.** Mental demand was 3.09 ± 0.63 versus 4.03 ± 0.58 (U = 171, Z = −5.296, p < 0.001, r = 0.647), frustration 2.12 ± 0.78 versus 3.82 ± 0.83 (U = 92, Z = −6.082, p < 0.001, r = 0.743), and total load 10.97 ± 2.56 versus 14.53 ± 2.69 (p < 0.001, r = 0.608); temporal demand (2.91 vs 3.41, p = 0.024) would not survive a Bonferroni correction at α = 0.010.
7. **The core pattern reproduced in a second task.** Two weeks later, with groups re-formed by the same median split, CE (U = 755.00, Z = 4.01, p < 0.001, r = 0.49), RE (U = 920.00, Z = 4.89, p < 0.001, r = 0.60), and IC (U = 310.00, Z = −3.52, p < 0.001, r = 0.43) again separated the groups while planning, generation, selecting and social expression stayed equivalent.

## The difference is how the work is organized, not how much of it happens

Because the two groups matched on basic interaction volume, the authors locate the mechanism in behavioral organization. Lag sequential analysis on adjusted residuals (|Z| ≥ 1.96) produced 17 significant transitions for the high-quality group and 10 for the low-quality group, and the two networks differ in shape rather than size. In the high-quality group revision is the most densely connected behavior: it is pulled forward by evaluation, sustains itself, and is significantly suppressed after planning, decision-making, or social expression — the authors call this "focused iteration", and argue it prevents two failure modes at once, revising without having judged, and abandoning a revision halfway to jump elsewhere. The low-quality group's network centers instead on planning and generation, with planning conception the most negatively associated behavior (PC→PC Z = −4.48, IC→PC Z = −2.45, RE→PC Z = −2.50): after a clarification loop or a revision, participants could not easily return to the main thread. Social expression played a double and unstable role there, both restarting planning (SE→PC Z = 8.23) and predicting confusion (SE→IC Z = −2.64).

## Ineffective cycling consumes attention and emotion, not just time

The paper reads IC→IC through [[cognitive-offloading|cognitive load]] theory as self-inflicted extraneous load: clarification attempts that serve no learning goal while occupying working memory. Its more distinctive claim is the emotional account. Because effort was statistically comparable across groups but frustration differed by the largest effect in the study, the authors argue that load depends on the direction and effectiveness of effort, not merely its amount — effort consumed by interaction obstacles cannot buy quality. Drawing on goal-activation accounts of task switching, they describe the low-quality group's repeated failure to resume the main thread as a loss of the sense of control, and connect sustained unproductive loops to learned helplessness. They add a methodological point for the field: the frequency and persistence of IC→IC self-loops, rather than overall dialogue length, is the behavioral indicator of accumulating load and frustration.

## A quality rubric built for this study, with limited validity evidence

Lesson-plan quality was scored with a rubric developed for the research context and applied by two raters, yielding an average-measure intraclass correlation of 0.853, which the authors report as excellent inter-rater consistency while stating plainly that construct and criterion-related validity were not examined and that the rubric has not been validated on other samples, tasks, or settings. Coding of interaction behavior reached Cohen's Kappa of 0.86 after a 0.82 trial round, and disagreements were mediated by the lead researcher — a procedure that raises reliability while concentrating interpretive authority in one person. The behavioral scheme itself is diagnostic rather than neutral: evaluation counts only explicitly articulated judgments, so the low-quality group's floor-level CE may reflect silent evaluation the coding could not see, a limitation the paper states and one that matters for anyone tempted to read 0.00 as "never evaluated".

## What this means for practice

- **Instructors.** Grade and teach the loop, not the prompt count: require students to name what is wrong with AI output before changing it, and to revise immediately after judging, since those two adjacencies are what distinguished high-quality work. Asking students to log each iteration — problem, change, rationale — makes the evaluation–revision cycle visible and gives you something assessable besides the finished plan.
- **Faculty developers.** Teach prompt precision and process awareness separately, because they address different failures: ambiguous prompts generate the clarification loops that produced the frustration in this study, while missing process structure left the low-quality group unable to resume the main thread. Workflow modeling (flowcharts of intent, prompt, output, next action) and pre-set [[prompt-engineering|stage gates]] are the interventions the paper recommends.
- **Instructional designers and tool developers.** Clarification loops are diagnosable in dialogue data and precede frustration, so an interface that detects repeated unproductive clarification — repeated rephrasings of the same request without new information — has a concrete trigger for intervention, rather than waiting for overall conversation length to look suspicious.

## Limitations

- Groups were formed by a median split on outcome quality, so the analysis compares categories rather than estimating a continuous relationship, and differences near the boundary are invisible; the design identifies association, not causation, and students with stronger design skill may simply have iterated more.
- Statistical power covers large effects only (d ≈ 0.70 and above with n₁ = 33, n₂ = 34); the authors state that the non-significant results for planning, generation, selecting, social expression and effort are inconclusive rather than evidence of equivalence.
- Cognitive load was an adapted NASA-TLX using four of six dimensions, each a single item, so no Cronbach's alpha was computable and the omitted physical-demand and performance dimensions may matter.
- The sample was 67 second-year pre-service teachers at one university, with [[generative-ai|GenAI]] used under default settings on DeepSeek-V2.5 in Chinese, and the authors note that in-service teachers, with more settled design routines, may collaborate differently.
- Seven of the 75 recruited students were lost (2 to scheduling, 5 to corrupted or unrecorded dialogue logs), which is a non-random attrition path given that dialogue capture was the study's core measure.

## Citation

Fang, X., Feng, J., Yan, B., & Zhou, B. (2026). [*Human–AI collaborative patterns in GenAI-supported instructional design among pre-service teachers: an analysis of interaction sequences and cognitive load*](https://doi.org/10.1186/s41239-026-00628-3). *International Journal of Educational Technology in Higher Education, 23*(1), Article 52.
