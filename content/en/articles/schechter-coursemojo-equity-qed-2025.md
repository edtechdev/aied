---
title: "Enhancing English Language Arts Achievement Through Coursemojo's AI-Driven Instruction"
created: "2026-11-11T07:37:45-05:00"
updated: "2026-11-11T08:10:15-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** The Texas companion to the Tennessee evaluation asked whether the same [[intelligent-tutoring|AI literacy assistant]] produced different results in a district where most students were economically disadvantaged and about half were English learners. Two treatment schools (541 students) were compared with 11 comparison schools (2,786). STAAR passing was 70% against 60% (Cox's index = 0.26), but the scale-score gap was small (β = 10.51, p = .008, Hedges' g = 0.07), and NWEA MAP showed no overall difference. Students receiving special education gained 0.36 standard deviations by spring; economically disadvantaged students outscored their comparison peers by 13.8 points and surpassed the overall comparison mean. A 12-week, 1.7-day-per-week threshold separated higher and lower scorers.

## Key Findings

1. **Passing rates moved more than scale scores.** 70% of Coursemojo students reached a passing level on STAAR against 60% of comparison students (β = 0.10, p < .001, Cox's index = 0.26). The adjusted scale-score difference was 10.51 points (p = .008, Hedges' g = 0.07).
2. **The share meeting grade level rose modestly.** On the Meets Grade Level threshold, 40.6% of Coursemojo students qualified against 36.8% of comparison students (β = 0.04, p = .018, Cox's index = 0.10).
3. **NWEA MAP found no overall effect.** Winter RIT scores differed by 1.57 points (p = .142, Hedges' g = 0.09) and spring scores by 1.35 points (p = .469, Hedges' g = 0.08). Neither difference was statistically significant.
4. **Special education students gained on the adaptive measure.** The winter advantage was 3.40 points (p < .001, Hedges' g = 0.21) and the spring advantage 5.82 points (p < .001, Hedges' g = 0.36). Twice as many Coursemojo special education students met grade level on STAAR, 13% against 6% (β = 0.07, p < .01, Cox's index = 0.52), although the 18.62-point STAAR scale-score gap was not significant (p = .308, Hedges' g = 0.18).
5. **Economically disadvantaged students closed the gap.** They outperformed economically disadvantaged peers in comparison schools by 13.8 points on STAAR (β = 13.81, p < .001, Hedges' g = 0.09) and surpassed the comparison group's overall mean. A larger share reached the passing level (β = 0.11, p < .001, Cox's index = 0.29) and met grade level (β = 0.04, p < .01, Cox's index = 0.11). NWEA MAP showed no significant difference for this subgroup (p = .138 winter, p = .415 spring, g = 0.10).
6. **A usage threshold separated higher and lower scorers.** Students who used Coursemojo for more than 12 weeks outscored those who used it for 12 or fewer (F(1, 483) = 31.83, p < .001, Cohen's d = .51), and students at 1.7 or more days per week outscored those below that level (F(1, 482) = 20.53, p < .001, Cohen's d = 0.41).
7. **Teacher satisfaction was unanimous.** All 12 surveyed teachers rated satisfaction "quite a bit" or "very much." Among 45 students, 78% said the platform helped them learn "quite a bit" or "very much," 91% gave high ratings for their effort, and 84% said they "often" or "always" persisted through challenging activities.

## A district with little room for a small effect

The setting matters for interpretation. The district is a large metropolitan system in Texas where about 33% of sixth graders met or exceeded the ELA proficiency benchmark in 2023–2024, against a statewide average of roughly 57%. In the two treatment schools, 95% of students were Hispanic or Latino, 51% were English learners, and 90% were economically disadvantaged; the comparison schools were 70% Hispanic or Latino, 45% English learners, and 89% economically disadvantaged.

All 13 schools used Wit & Wisdom as the core curriculum, and the two treatment schools ran Coursemojo as a pilot with summer orientation, district staff-development coaching, and classroom observations by Coursemojo representatives. Usage clustered at the low end of the study's own bands: students averaged 22 days and 12 weeks of use across 180 school days, or about 1.7 days per week, and completed 24 activities on average (range 1 to 56). Fifty-four percent fell in the low band for weeks of use, and only 2% reached the high band of 2.5 or more days per week.

With only two treatment schools, the authors judged a multilevel model unreliable and used ordinary least squares regression with cluster-robust standard errors instead, controlling for student demographics, special education status, socioeconomic factors, baseline achievement, and school characteristics. Baseline differences were 0.16 standard deviations on Fall NWEA MAP and 0.13 on the prior year's STAAR, both inside the WWC equivalence range and both entered as covariates. Attrition to the STAAR sample was 7% overall with 4% differential.

## What the equity and dosage results show

The subgroup findings carry the report's argument, and they are mixed across measures. Students receiving special education services posted the largest standardized gains on NWEA MAP, reaching Hedges' g = 0.36 by spring, and doubled their rate of meeting grade level on STAAR. The report describes that as two times more Coursemojo special education students meeting grade level than comparison special education students (β = 0.07, p < .01, Cox's index = 0.52), and it prints no subgroup counts. The STAAR scale-score advantage for this group, 18.62 points, was not statistically significant, so the subgroup claim rests on the [[assessment|adaptive assessment]] and the proficiency category rather than on the state scale score.

Economically disadvantaged students present the cleaner result. Their 13.8-point STAAR advantage is significant, and their average exceeded the comparison group's overall average, which is the sense in which the report describes the gap as closed and exceeded. The same group showed no significant difference on either NWEA MAP administration, with Hedges' g = 0.10 at both winter and spring.

That divergence is the interpretive problem. The state test, which is the accountability instrument, shows gains; the computer-adaptive reading measure, which tracks growth on a common scale, does not. The authors do not reconcile the two beyond noting that effects strengthened over the year. A reader should treat the STAAR result as real but single-measure, and the MAP null as evidence against a broad reading-growth story. The [[equity-in-ai-education|equity]] case is strongest for economically disadvantaged students on the state test and for special education students on the adaptive test, not for both groups on both.

The dosage analysis is correlational and runs only within the treatment group, but it is the most actionable part of the report. Students above 12 weeks of use averaged higher STAAR scores than those at or below 12 weeks, with Cohen's d = .51; students at 1.7 or more days per week also outscored lighter users, with d = 0.41. Medium usage, defined as at least 12 weeks, beat the comparison group (F(1, 2802) = 20.53, p < .001, Cohen's d = 0.30), and the same held for at least 1.7 days per week (F(1, 2816) = 14.55, p < .001, Cohen's d = 0.25).

The threshold language matters because most students never reached the higher bands. With 2% high-dosage users and about half the sample in the low band, the overall treatment estimate is closer to a low-dose estimate than to the platform's potential. The report says as much in its limitations: the treatment effects may underestimate impact under more intensive implementation.

## What this means for practice

- **Instructors:** aim for at least 12 weeks and 1.7 days per week before judging the platform. The dosage contrasts are large (Cohen's d = .51 for weeks of use), but they compare users with users, so they describe an implementation target rather than a proven dose.
- **Administrators:** budget for the support model, not just licenses. This pilot included summer orientation, coaching on district development days, and classroom observation; the authors attribute implementation success partly to that layer.
- **Designers:** the weakest participation was in writing (45%) and Close Read with Quick Write (6%); the authors recommend user research on writing, which drew less engagement than reading.
- **Researchers:** report adaptive and accountability measures side by side. Here they disagree, and the disagreement is more informative than either result alone.
- **Policymakers:** an ESSA Tier 2 label rests on a quasi-experiment with two treatment schools, not a randomized causal estimate.

## Limitations

Two treatment schools against 11 comparison schools is a thin basis for a school-level contrast, and the authors acknowledge that cluster-robust standard errors are a substitute for the multilevel model the design could not support. Unmeasured differences between the pilot schools and the comparison schools, including principal leadership and teacher selection, cannot be ruled out. The special education subgroup is small (69 treatment students), the overall MAP results are null, and the STAAR scale-score effect is 0.07 standard deviations. The study covers one district, one curriculum, one year, and one grade. The research team did not conduct classroom observations or student interviews, relying on 45 student surveys, 12 teacher surveys, and leader interviews. The report was produced by LXD Research, which also issued the ESSA Tier 2 recognition.

## Citation

Schechter, R. L., Ackerman, C., Gulemetova, M., & Janakiefski, L. (2025). [*Enhancing English Language Arts Achievement Through Coursemojo's AI-Driven Instruction: A Quasi-Experimental Analysis of Impact on Student Outcomes and Equity*](https://files.eric.ed.gov/fulltext/ED677099.pdf). LXD Research at Charles River Media.
