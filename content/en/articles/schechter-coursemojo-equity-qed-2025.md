---
title: "Enhancing English Language Arts Achievement Through Coursemojo's AI-Driven Instruction"
created: "2026-11-11T07:37:45-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
audience: [researchers, instructors, administrators]
sources: ['raw/papers/schechter-coursemojo-equity-qed-2025.md']
source_url: "https://files.eric.ed.gov/fulltext/ED677099.pdf"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
assessment: [assessment]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** The Texas companion to the Tennessee evaluation asked whether the same [[intelligent-tutoring|AI literacy assistant]] produced different results in a district where most students were economically disadvantaged and about half were [[multilingual-learning|English learners]]. Two treatment schools were compared with eleven comparison schools. More students passed the state reading test, but the adjusted scale-score gain was tiny and a computer-adaptive reading test showed no overall difference. Students receiving [[special-education|special education]] made the largest standardized gain on the adaptive test, and economically disadvantaged students outscored comparison peers on the state test. The report's practical message is about dosage: benefits concentrated among students who used the platform for at least twelve weeks.

## Key Findings

1. **Passing rates moved more than scale scores.** 70% of Coursemojo students reached a passing level on STAAR against 60% of comparison students, but the adjusted scale-score difference was 10.51 points, which is a very small standardized effect.
2. **The share meeting grade level rose modestly.** On the Meets Grade Level threshold, 40.6% of Coursemojo students qualified against 36.8% of comparison students, a real but narrow shift in the middle of the distribution.
3. **The adaptive reading test found no overall effect.** Winter and spring NWEA MAP scores did not differ significantly between the groups, so the gains do not appear as broad reading growth on a common scale.
4. **Special education students gained most on the adaptive measure.** Their advantage was already visible in winter and had reached a moderate size by spring. Twice as many met grade level on STAAR, 13% against 6%, although the state scale-score gap for this group was not statistically significant.
5. **Economically disadvantaged students closed the gap on the state test.** They outscored economically disadvantaged peers in comparison schools by 13.8 points and surpassed the comparison group's overall average, and larger shares of them passed and met grade level. The adaptive test again showed no significant difference for this group.
6. **More use went with better scores.** Students who used Coursemojo for more than twelve weeks, or at least 1.7 days per week, outscored lighter users by margins the authors describe as moderate. Only 2% of students reached the high-dosage band.
7. **[[teacher-role|Teachers]] and students were positive.** All 12 surveyed teachers rated satisfaction "quite a bit" or "very much"; among 45 students, 78% said the platform helped them learn, 91% gave high ratings for their effort, and 84% said they often or always persisted through challenging activities.

## A district with little room for a small effect

The setting matters for interpretation. The district is a large metropolitan system in Texas where about 33% of sixth graders met or exceeded the ELA proficiency benchmark in 2023–2024, against a statewide average of roughly 57%. In the two treatment schools, 95% of students were Hispanic or Latino, 51% were English learners, and 90% were economically disadvantaged; the comparison schools were 70% Hispanic or Latino, 45% English learners, and 89% economically disadvantaged.

All 13 schools used Wit & Wisdom as the core [[curriculum-design|curriculum]], and the two treatment schools ran Coursemojo as a pilot with summer orientation, district staff-development coaching, and classroom observations by Coursemojo representatives. Usage clustered at the low end of the study's own bands: students averaged 22 days and 12 weeks of use across 180 school days, or about 1.7 days per week, and completed 24 activities on average (range 1 to 56). Fifty-four percent fell in the low band for weeks of use, and only 2% reached the high band of 2.5 or more days per week.

With only two treatment schools, the authors judged a multilevel model unreliable and used ordinary least squares regression with cluster-robust standard errors instead, controlling for student demographics, special education status, socioeconomic factors, baseline achievement, and school characteristics. Baseline differences were 0.16 standard deviations on Fall NWEA MAP and 0.13 on the prior year's STAAR, both inside the WWC equivalence range and both entered as covariates. Attrition to the STAAR sample was 7% overall with 4% differential.

## What the equity and dosage results show

The subgroup findings carry the report's argument, and they are mixed across measures. Students receiving special education services posted the largest standardized gains on NWEA MAP by spring and doubled their rate of meeting grade level on STAAR. The report describes that as two times more Coursemojo special education students meeting grade level than comparison special education students, and it prints no subgroup counts. The STAAR scale-score advantage for this group, 18.62 points, was not statistically significant, so the subgroup claim rests on the [[assessment|adaptive assessment]] and the proficiency category rather than on the state scale score.

Economically disadvantaged students present the cleaner result. Their 13.8-point STAAR advantage is significant, and their average exceeded the comparison group's overall average, which is the sense in which the report describes the gap as closed and exceeded. The same group showed no significant difference on either NWEA MAP administration.

That divergence is the interpretive problem. The state test, which is the accountability instrument, shows gains; the computer-adaptive reading measure, which tracks growth on a common scale, does not. The authors do not reconcile the two beyond noting that effects strengthened over the year. A reader should treat the STAAR result as real but single-measure, and the MAP null as evidence against a broad reading-growth story. The [[equity-in-ai-education|equity]] case is strongest for economically disadvantaged students on the state test and for special education students on the adaptive test, not for both groups on both.

The dosage analysis is correlational and runs only within the treatment group, but it is the most actionable part of the report. Students above twelve weeks of use averaged higher STAAR scores than those at or below that mark, and students at 1.7 or more days per week also outscored lighter users. Medium usage, defined as at least twelve weeks, beat the comparison group, and the same held for at least 1.7 days per week. Because most students never reached the higher bands, the overall treatment estimate is closer to a low-dose estimate than to what the platform could do under full implementation.

The threshold language matters for adoption decisions. With 2% high-dosage users and about half the sample in the low band, a school that buys the platform but schedules it once a week should not expect the results this report describes. The report says as much in its limitations: the treatment effects may underestimate impact under more intensive implementation.

## What this means for practice

- **Instructors:** aim for at least twelve weeks and 1.7 days per week before judging the platform. The dosage contrasts are moderate, but they compare users with users, so they describe an implementation target rather than a proven dose.
- **Administrators:** budget for the support model, not just licenses. This pilot included summer orientation, coaching on district development days, and classroom observation; the authors attribute implementation success partly to that layer.
- **Designers:** the weakest participation was in writing (45%) and Close Read with Quick Write (6%); the authors recommend user research on writing, which drew less engagement than reading.
- **Researchers:** report adaptive and accountability measures side by side. Here they disagree, and the disagreement is more informative than either result alone.
- **Policymakers:** an ESSA Tier 2 label rests on a quasi-experiment with two treatment schools, not a randomized causal estimate.

## Limitations

Two treatment schools against 11 comparison schools is a thin basis for a school-level contrast, and the authors acknowledge that cluster-robust standard errors are a substitute for the multilevel model the design could not support. Unmeasured differences between the pilot schools and the comparison schools, including principal leadership and teacher selection, cannot be ruled out. The special education subgroup is small (69 treatment students), the overall MAP results are null, and the STAAR scale-score effect is 0.07 standard deviations. The study covers one district, one curriculum, one year, and one grade. The research team did not conduct classroom observations or student interviews, relying on 45 student surveys, 12 teacher surveys, and leader interviews. The report was produced by LXD Research, which also issued the ESSA Tier 2 recognition.

## Citation

Schechter, R. L., Ackerman, C., Gulemetova, M., & Janakiefski, L. (2025). [*Enhancing English Language Arts Achievement Through Coursemojo's AI-Driven Instruction: A Quasi-Experimental Analysis of Impact on Student Outcomes and Equity*](https://files.eric.ed.gov/fulltext/ED677099.pdf). LXD Research at Charles River Media.
