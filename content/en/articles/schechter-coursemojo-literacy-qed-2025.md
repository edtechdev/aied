---
title: "The Impact of Coursemojo's AI-Powered Literacy Instruction in Improving ELA Outcomes and Reducing Achievement Disparities"
created: "2026-11-11T07:37:45-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
audience: [researchers, instructors, administrators]
sources: ['raw/papers/schechter-coursemojo-literacy-qed-2025.md']
source_url: "https://files.eric.ed.gov/fulltext/ED676253.pdf"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, personalized-learning]
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

> **Synthesis:** A district-wide comparison found that sixth graders in schools using Coursemojo, an [[intelligent-tutoring|AI teaching assistant]] embedded in the Wit & Wisdom ELA curriculum, outscored peers in schools that did not by about 8 points on the state reading test, with more of them on grade level. Interim [[benchmark|benchmarks]] moved the same way but by less. The average hides a dosage effect: students who used the platform at least 2.5 days a week gained most, while light users did no better than comparison peers. Students with disabilities and economically disadvantaged students narrowed gaps. The design cannot separate the platform from school-level differences, so read it as promising rather than proven.

## Key Findings

1. **The state test favored users.** After nine months, students in schools using Coursemojo scored higher on the TCAP ELA test than comparison students in the same district, and a larger share performed at grade level.
2. **Shorter benchmarks pointed the same way, by less.** The November and March interim assessments both favored users modestly, which fits an effect that accumulates across the year rather than appearing at once.
3. **A reading benchmark separated the groups only in spring.** Fall and winter differences were not reliable; by spring users were ahead.
4. **Dose mattered more than enrollment.** Students who used the platform at least 2.5 days per week in the weeks they used it scored well above comparison peers; light users scored slightly below them, and medium users looked like the comparison group.
5. **Students with disabilities gained most.** Their advantage was the largest of any subgroup, and the gap between them and general-education peers shrank sharply.
6. **Economically disadvantaged students also narrowed the gap.** Their gain was nearly as large, and the gap with comparison peers roughly halved.
7. **Implementation was uneven across activity types.** Participation was near universal in some activities and about half in the combined close-read and writing activity, while students and teachers reported high effort and satisfaction.

## What the study did

The evaluation covered 2,203 sixth graders in 12 middle schools in a large, diverse Tennessee county during the 2024–2025 school year. Six schools used Coursemojo and six continued their existing practice; 1,017 students were in treatment schools and 1,186 in comparison schools. All 12 schools taught the same core ELA curriculum, Wit & Wisdom, so the contrast is the platform rather than a change of materials. Assignment was by school, not by student, which makes this a [[research-methods-aied|quasi-experiment]] rather than a trial.

The groups began the year close but not identical. On the Fall Aimsweb baseline the standardized mean difference was 0.11 standard deviations, inside the What Works Clearinghouse range for equivalence (0.25) but above the 0.05 threshold at which the authors treat a pretest as unbalanced. Fall Aimsweb scores therefore entered the model as a covariate. Outcomes were estimated with a two-level hierarchical linear model that also controlled for student demographics, special education status, socioeconomic factors and school characteristics. Attrition from the Fall baseline to the TCAP was 7.17% overall with 0.36% differential attrition, below the WWC thresholds the authors cite.

Three outcome measures were used: Aimsweb reading benchmarks in fall, winter and spring; the district's two TN Ready interim benchmarks in November and March; and the TCAP state test at the end of the year. The TCAP carries the most weight in the report because it samples the whole year's standards rather than a semester's content. Usage data came from the platform, and surveys and year-end interviews supplied the implementation picture.

## Why the gains concentrate at higher dosage

Coursemojo supplies the kind of [[scaffolding|scaffolded]] practice that is hard for one [[teacher-role|teacher]] to provide to 25 to 35 students at once. In this implementation, students worked through Gist, Close Read, Writing, and Close Read with Quick Write activities, with participation at 99%, 96%, 66% and 50% respectively. The assistant gave immediate [[feedback|feedback]] and [[socratic-method|Socratic questioning]] on each response, while the teacher received a live view of [[misconceptions|misconceptions]] to use in conferencing and whole-class discussion. Average use was 42 activities across the year, with a range from 4 to 122, and 56% of students used the program across 13 to 20 weeks.

On the state test, estimated scores were 342.5 for Coursemojo students against 335.0 for comparison students, and 49.0% of users performed on grade level against 39.5% statewide. The interim benchmarks told a smaller version of the same story: 54.3% correct against 52.1% in November, and 60.0% against 57.5% in March. Aimsweb did not separate the groups in winter but did in spring, at 524.9 against 518.3. Across all three measures the direction was consistent, which is more informative than any single test, though the size of the state-test advantage is about a tenth of a standard deviation.

That variation in use is the study's most consequential result. The overall advantage was not spread evenly. Students in the high-usage band, 2.5 or more days per week in the weeks they used the program, scored 9.5 points above comparison students; medium users looked like comparison students; low users scored slightly below them, and the spread between low and high usage groups was 18 points. The report reads this as evidence that sporadic use may be counterproductive, though the pattern is equally consistent with the reverse: classrooms that were better organized, better supported or better matched to the platform may have produced both more use and higher scores.

The subgroup results are where the equity claim rests. Coursemojo users receiving [[special-education|special education]] services scored 10.4 points higher than comparison peers, and the gap between students with disabilities and general-education peers fell from 16 points to 5. Economically disadvantaged users held an advantage of 8.9 points, and the gap between them and comparison peers fell from 17 points to 8. Those are large movements for a single year, and they come from the same school-level comparison, so they inherit its causal limits.

Educators described the mechanism in instructional terms. An assistant principal called the platform a "co-teaching environment" in which every student gets feedback the teacher could not deliver alone, and a language arts program director put the arithmetic plainly: with 25 to 35 middle schoolers in a room, "the opportunity to get that level of feedback consistently without Coursemojo is just impossible." An instructional coordinator reported that three schools had met their Annual Measurable Objectives after the second benchmark while no comparison school had. Among 851 surveyed students and 22 teachers, 39.7% of students said Coursemojo helped them learn "quite a bit" or "very much," effort averaged 4.22 out of 5 with 80.0% giving high ratings, and persistence averaged 4.03. Seventy-five percent of teachers rated the platform higher than handouts and worksheets, and 69% reported high enjoyment. These accounts are consistent with the test scores but do not establish that the platform caused them.

## What this means for practice

- **Instructors:** plan for at least 2.5 days per week in the weeks the platform is used. Below that band, users in this study performed at or below comparison students, so a light-touch rollout is unlikely to reproduce the headline result.
- **Administrators:** treat scheduling and instructional support as part of the intervention. The report's own account of implementation includes [[curriculum-design|curriculum alignment]], daily independent practice and teacher access to misconception data, not just account provisioning.
- **Designers:** the writing activities drew the weakest participation (66%) and the combined Close Read with Quick Write activity the weakest of all (50%). The mix of activity types, not only total minutes, may shape whether the platform reaches its intended coverage.
- **Researchers:** the next step the authors recommend is a multi-site [[rct|randomized controlled trial]] with longitudinal follow-up. Until then, the state-test estimate should be read as the result of a school-level comparison in one district, with a small average effect and a large dosage gradient.

## Limitations

The design cannot establish causation with the certainty of a randomized trial, and with only six treatment schools, unmeasured school differences remain a plausible alternative explanation for part of the gain. The study ran in a single Tennessee district using one curriculum, so generalization to other populations, materials and implementation conditions is untested. It covers one year and one grade, which leaves retention and effects in grades five or seven unknown. The survey and interview evidence is [[self-report-measures|self-report]] from a subset of students and teachers, and the research team did not report direct classroom observation of fidelity. The report was conducted by LXD Research, the same firm that issued the ESSA Tier 2 recognition described in the document.

## Citation

Schechter, R., Ackerman, C., Gulemetova, M., & Janakiefski, L. (2025). [*The Impact of Coursemojo's AI-Powered Literacy Instruction in Improving ELA Outcomes and Reducing Achievement Disparities: A Multi-School Quasi-Experimental Study*](https://files.eric.ed.gov/fulltext/ED676253.pdf). LXD Research at Charles River Media.
