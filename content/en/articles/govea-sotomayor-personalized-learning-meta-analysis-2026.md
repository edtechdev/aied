---
title: "A Large Pooled Effect on Very Thin Evidence: AI-Based Personalized Learning in Computing and Engineering Courses"
created: "2026-11-04T16:20:00-05:00"
updated: "2026-11-04T16:20:00-05:00"
type: article
sources: ['raw/papers/govea-sotomayor-personalized-learning-meta-analysis-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [cs education, engineering education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, researchers, administrators]
technology: [personalized-learning, llm, intelligent-tutoring, knowledge-graph, generative-ai]
assessment: [assessment, feedback, learning-gains]
pedagogy: [mastery-learning]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A PRISMA 2020 [[meta-analysis-systematic-review|systematic review and meta-analysis]] pooled four controlled studies (420 students) of [[personalized-learning|AI-based personalized learning]] in [[cs-education|computing]] and [[engineering-education|engineering]] courses. Across those studies the random-effects pooled estimate is large, Hedges' *g* = 1.01 (95% CI 0.33–1.68), but heterogeneity is substantial (I² = 88.8%, τ² = 0.41). Under the Hartung-Knapp small-sample adjustment the interval widens to −0.10–2.11 and includes no effect, the 95% prediction interval (−0.42–2.43) also includes no effect, two of the four studies were at serious risk of bias, and GRADE certainty is very low. The pooled number summarizes a highly variable set of findings; it does not describe what a given course should expect.

## Key Findings

1. The search of Scopus and Web of Science retrieved 100 records (79 and 21 respectively); 16 duplicates left 84 unique records, 73 were excluded at title and abstract, 11 full texts were assessed, and 7 were excluded, leaving four included studies — all in computing and engineering courses.
2. The four studies enrolled 420 students (AI groups *n* = 208; comparator groups *n* = 212) and were published in 2024 and 2025 in Egypt, China (two studies) and Morocco.
3. Design quality was uneven: one cluster-randomized study (27 groups of two or three students, 13 AI and 14 control), one study that described allocation as random without reporting the procedure, one non-randomized concurrent control, and one historical control compared against a cohort from the previous academic year.
4. The random-effects model (REML) gave a pooled Hedges' *g* = 1.01 (95% CI 0.33–1.68; *z* = 2.93, *p* = .003); with the Hartung-Knapp adjustment the point estimate was unchanged but the interval widened to −0.10–2.11 (*t*(3) = 2.89, *p* = .063).
5. Heterogeneity was substantial, *Q*(3) = 25.20, *p* < .001; I² = 88.8% (95% CI 63.2–99.3); τ² = 0.41 (95% CI 0.09–6.87); τ = 0.64. The 95% prediction interval was −0.42–2.43.
6. Study-level effects ran from *g* = 0.20 (95% CI −0.55–0.96; Ouyang et al., analyzed at group level) to *g* = 1.60 (95% CI 1.19–2.01; Atta et al.), with El Fathi et al. at 1.54 (95% CI 1.14–1.95) and Zhou et al. at 0.53 (95% CI 0.18–0.89).
7. Leave-one-out estimates ranged from *g* = 0.80 (omitting Atta et al.) to *g* = 1.22 (omitting Ouyang et al.), and restricting the analysis to the two studies not at serious risk of bias gave *g* = 0.91 (95% CI −0.40–2.22).
8. Two studies were at serious risk of bias and carried 53% of the weight; the others were at moderate risk or had some concerns. Formal tests of small-study effects were not performed because fewer than 10 studies were pooled, and the funnel plot is descriptive only.
9. GRADE certainty was rated very low: down two levels for risk of bias, one for inconsistency (I² = 89%, estimates 0.20 to 1.60 with non-overlapping intervals) and one for imprecision.

## What the four studies actually compared

The review defines [[personalized-learning|personalized learning]] as instruction in which a system adjusts content, pacing, feedback or recommendations to an individual learner or small group from that learner's performance data. Static uses of AI, and retrospective analyses of educational data without an implemented intervention, were excluded. That rule removed most of what the search found: of 11 full texts, three had no comparator and two reported no objective performance outcome.

The four survivors used different technologies. Three deployed large language models — a ChatGPT-based mobile tutoring application for C# programming, ChatGPT-generated feedback on weekly MATLAB group code, and student use of ChatGPT inside a structured prompting framework after prompt-writing training. The fourth was a precision-teaching platform built on a course [[knowledge-graph|knowledge graph]], which diagnosed mastery of individual knowledge points and recommended tiered resources, a design closer to [[mastery-learning|mastery learning]] than to [[intelligent-tutoring|intelligent tutoring]] in the classic sense.

Their comparators were equally varied. Two compared AI-supported instruction with traditional teaching, one with traditional tutorials of equal duration, and one — the only study with an active comparator — with instructor-written [[feedback]] on the same five quality dimensions. Because of that, an "effect" in this review means the contrast between an AI-supported instructional package and whatever its authors chose to compare it with. It is not the isolated contribution of the AI component.

## Reading a pooled 1.01 against its own uncertainty

The gap between the Wald and Hartung-Knapp intervals is the most important number in the paper. With four studies, Wald-type intervals are too narrow, and the adjusted interval crosses zero. The same holds for the prediction interval, which estimates where a new comparable implementation would fall: its lower bound is below zero, so a null or small negative result in a new setting cannot be ruled out. The authors are explicit that with four studies both τ² and the prediction interval are estimated imprecisely, and the τ² confidence interval (0.09–6.87) shows how imprecisely.

The estimate is also larger than the mature literature on earlier adaptive systems. VanLehn (2011) reported an average of about 0.76 standard deviations for step-based [[intelligent-tutoring|intelligent tutoring systems]] against no tutoring, and Kulik and Fletcher (2016) a median of 0.66 across 50 controlled evaluations. The authors treat their higher pooled value as a likely upper bound rather than a better estimate, and name the reasons: small samples, instructor- or researcher-developed measures, two studies at serious risk of bias, and comparators that were sometimes loosely described.

Sensitivity analyses move the estimate but not the conclusion. Re-scoring Zhou et al. on a 100-point scale raised *g* to between 1.09 and 1.12. Using Ouyang et al.'s composite knowledge score instead of the group's programming product raised it to *g* = 1.10 (95% CI 0.52–1.67). Those are the only variants in which the Hartung-Knapp interval excluded zero, and both depend on analytic choices the authors made after seeing the data.

## Why the bundled interventions matter more than the average

Two of the four studies gave the AI group something the control group did not have. In El Fathi et al., students used ChatGPT within a constructivist inquiry-based prompting framework after three hours of prompt-writing training, while the control attended traditional tutorials of equal duration. In Zhou et al., the precision-teaching platform came with differentiated in-class grouping and assignments used only in the AI cohort, and the comparison crossed academic years. Omitting the first study reduced the pooled estimate to *g* = 0.81.

The one study that isolated the AI component found almost nothing. Ouyang et al. compared ChatGPT-generated feedback with instructor-written feedback on the same five dimensions and measured the quality of each group's final programming product: *g* = 0.20 (95% CI −0.55–0.96), consistent with the authors' own non-significant test. That is the cleanest design in the set and the smallest effect in it, which is the pattern a reader should carry away.

## What this means for practice

- **Instructors.** Do not expect uniform gains from adding an AI tool to a computing or engineering course. The two largest effects came from courses where AI use sat inside a deliberate instructional design — structured prompting, guided practice, regular feedback — rather than from making a tool available.
- **Course designers.** Treat AI-based personalization as one component of a [[personalized-learning|pedagogical design]], not a substitute for one. When the AI arrives bundled with grouping, training or scaffolding, the evaluation cannot tell you which part worked.
- **Institutions.** Evaluate locally with objective assessments and, where possible, a concurrent comparison group. A historical cohort cannot separate the intervention from everything else that changed between years.
- **Researchers.** Report post-intervention means, standard deviations, sample sizes and cluster information. Half the analytic difficulty in this review came from values that had to be imputed or reconstructed, and one included report contained an effect size inconsistent with its own descriptives.

## Limitations

- Four studies and 420 students: too few for moderator analysis, and too few for the heterogeneity estimates or the prediction interval to be stable.
- Only one study used a verifiable randomized design; the others relied on unverifiable, convenience-based or historical allocation, so pre-existing differences and temporal confounding cannot be excluded despite reported baseline equivalence.
- Post-intervention standard deviations were imputed for one study, and the outcome for another was a group-level instructor rating made by someone aware of the allocation.
- The search covered only Scopus and Web of Science, with no gray literature, citation searching or subject-specific databases; the protocol was not prospectively registered, and outcome-selection rules and sensitivity analyses were formalized after the data were known.
- The search strategy was built mainly around computing terms and required personalization vocabulary, so studies in mathematics, physics, chemistry or other engineering fields were unlikely to be retrieved; findings apply to [[cs-education|computing]] and [[engineering-education|engineering]] courses, not to [[stem-education|STEM education]] broadly.
- All studies came from Egypt, China and Morocco and none lasted longer than one semester, so generalization is limited and nothing is said about retention; with four studies, small-study effects and publication bias could not be assessed at all.

## Citation

Govea Sotomayor, J., & García Ortiz, J. S. (2026). [AI-based personalized learning and academic performance in computing and engineering higher education: a systematic review and meta-analysis of controlled studies](https://doi.org/10.3389/feduc.2026.1970736). *Frontiers in Education, 11*, 1970736.
