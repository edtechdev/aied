---
title: "Putting AI to the Test: Evidence from a Large-Scale RCT in Rural China"
created: "2026-11-24T09:00:00-05:00"
updated: "2026-11-24T09:00:00-05:00"
published: "2026-11-24"
type: article
authors: ["Yue Ma", "Tianli Feng", "Robert Fairlie", "Chengfang Liu", "Prashant Loyalka", "Scott Rozelle", "Xinwu Zhang"]
venue: "SSRN preprint (July 2026)"
evidence_context: educational
foundations: [critiques-of-ai-in-education, limitations-in-aied-research, misconceptions]
pedagogy: [metacognition, self-regulated-learning]
technology: [adaptive-learning, intelligent-tutoring, machine-learning]
assessment: [learning-gains, educational-measurement]
methods: [rct, quantitative-research]
discipline: [math education]
level: [primary education]
audience: [researchers, policymakers, instructional designers, curriculum designers]
page_kind: [evaluation]
research_method: [experiment]
sources: ["raw/papers/ma-ai-cal-rct-rural-china-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]

---

> **Synthesis:** Ma, Feng, Fairlie, Liu, Loyalka, Rozelle and Zhang (2026) randomly assigned 8,647 [[primary-education|primary]] school students in 315 classes across 105 rural Chinese schools to one of three arms: an AI-driven adaptive computer-assisted learning program, a matched non-adaptive version, or no CAL at all. Over 11 weeks and 80 minutes per week, the AI arm produced no significant math gains against either comparison. The difference against regular CAL was -0.037 standard deviations and against pure control -0.036 standard deviations with a standard error of 0.027, precise enough to rule out anything larger than a very small positive effect. There was no positive effect in any baseline ability tercile, while regular CAL modestly helped middle-tercile students.

*[[rct|Randomized controlled trial]] registered at the AEA RCT Registry (AEARCTR-0007888). Grades 4 to 6 in 105 rural primary schools in Sichuan Province, China, March to June 2021. Math achievement z-scored on the control group mean and standard deviation; minimum detectable effect size 0.10 SD for each pairwise comparison.*

## Key Findings

- **Adaptive AI did not beat ordinary CAL.** The AI arm scored -0.037 standard deviations below the non-adaptive arm, not statistically significant, and the design could rule out anything above roughly 0.01 standard deviations in favor of AI.
- **It also did not beat no CAL at all.** Against the pure control, the AI arm was -0.036 standard deviations, again with a standard error of 0.027.
- **No ability group gained.** For every baseline achievement tercile there was no evidence of a positive AI effect. Point estimates for the middle and top terciles were if anything negative.
- **Regular CAL did something, narrowly.** The non-adaptive program produced modest gains for middle-tercile students relative to no CAL, which is the comparison where a conventional practice program usually shows its value.
- **Difficulty and wealth did not change the answer.** Separating test items into easy, medium and difficult produced no positive AI effects, and neither did breaking the sample down by household assets.
- **The two programs were matched on everything but adaptivity.** Same content, same hardware, same weekly schedule, same [[game-based-learning|gamification]], same immediate feedback, delivered by the same team. The only intended difference was the [[student-modeling|student model]].
- **Usage fell short of the design.** Students used the software for an average of 219 minutes in the AI arm and 183 minutes in the regular arm over the whole intervention, well below the 80 minutes per week the schedule specified.

## How the two programs differed

The [[adaptive-learning|adaptive]] system came from a large Chinese educational technology company that has operated for more than a decade and reports serving over 20 million students. It combines a one-parameter logistic item-response model with [[machine-learning]] [[knowledge-tracing|knowledge tracing]] to maintain a continuously updated estimate of each student's ability and each item's difficulty, recalibrated after every response. Content sits in a fine-grained [[knowledge-graph|knowledge graph]], and a diagnostic pretest at the start of each lesson routes students only to components they have not yet mastered. Mastery thresholds differ by subject, and three consecutive failures inside a component send a student back to a prerequisite.

The comparison program, called R-CAL, was built by the research team. It follows the government-mandated weekly [[curriculum-design|curriculum]] unit by unit, delivers the same grade-level mathematics content, gives immediate feedback on each response, awards tokens for correct answers, and uses the same colorful graphics. It does not adapt: every student sees the same sequence regardless of performance.

Both ran in school computer laboratories with one machine per student, during lunch breaks and self-study periods, supervised by computer teachers who gave technical support but no academic instruction. Students were scheduled for two 40-minute sessions per week over 11 weeks.

## Reading a precise null result

The study is worth reading as a null result with unusual precision rather than as an underpowered one. The minimum detectable effect size was 0.10 standard deviations for each pairwise comparison, so the analysis could have found gains of the size often reported for supplemental tutoring. It did not.

The authors are careful about what the null covers. One claim behind AI-driven personalization is that it helps students below the targeted level catch up and lets advanced students push further. Neither appeared, and the point estimates for middle and top terciles ran the other way. They report this as a feature of this system in this setting, not as a general property of AI personalization. Instrumental-variable estimates using random assignment as an instrument for hours of use reached the same conclusion, so the null is not an artifact of weak take-up alone.

## What this means for practice

- **Administrators.** Do not treat adaptive AI software as a reason to buy rather than a reason to evaluate. In this trial the cheaper, non-adaptive program was at least as effective, and it produced the only detectable gain in the study.
- **Policymakers.** The setting matters for how far the result travels. These were rural, low-income schools where [[personalized-learning|personalized learning]] is most often proposed as compensation for weaker teaching. That is exactly where the promised benefit failed to appear.
- **Curriculum designers.** If you adopt such a system, budget for the usage gap. Students logged roughly a quarter of the scheduled time, so the effect of a program in real conditions is bounded by how much of it students actually do.
- **Researchers.** Match the counterfactual properly. Comparing an adaptive system to ordinary classroom instruction conflates adaptivity with extra practice; the sharpest design contrasts it with an equally well-built non-adaptive version, as here.
- **Instructional designers.** The knowledge-graph routing described in the paper is an interesting mechanism, but this trial does not isolate it. Expect it to matter less than whether students engage with the practice at all.

## Limitations

- One system, one subject, one region and one term. The authors explicitly decline to generalize beyond large-scale deployment in under-resourced schools.
- Math achievement was the single primary outcome; effects on engagement, motivation or long-run attainment were not measured, and secondary outcomes showed no detectable change.
- Actual usage was well below the scheduled amount, so the results describe the program as implemented rather than the program at full dosage.
- Heterogeneity analyses were pre-specified but not adjusted for multiple comparisons, and the authors treat them as exploratory.

## Citation

Ma, Y., Feng, T., Fairlie, R., Liu, C., Loyalka, P., Rozelle, S., & Zhang, X. (2026). [Putting AI to the Test: Evidence from a Large-Scale RCT in Rural China](https://ssrn.com/abstract_id=7123138). SSRN preprint.
