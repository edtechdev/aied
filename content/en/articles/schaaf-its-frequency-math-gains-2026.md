---
title: "The effect of the frequency of use of an intelligent tutoring system on learning gains in mathematics in schools in challenging social circumstances"
created: "2026-11-26T13:00:00-05:00"
updated: "2026-11-26T13:00:00-05:00"
type: article
published: "2026-07-07"
sources: ['raw/papers/schaaf-its-frequency-math-gains-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: []
level: [k 12]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** A one-semester [[longitudinal-research|longitudinal study]] followed 587 Grade 8 and 9 students in 60 mathematics classes at German schools serving socially disadvantaged communities, recording their actual interactions with an [[intelligent-tutoring|intelligent tutoring system]] instead of relying on [[self-report-measures|self-report]]. Implementation was uneven and delayed: only 41 classes used the system at all, and many were not registered until the fall break. Users averaged under ten minutes a week. Across the sample, mathematics performance barely changed between pretest and post-test. Classes that spent more time with the system did not gain more than classes that spent less, but students who used it more than their classmates, especially during lessons, showed slightly higher post-test performance. Students whose extra time came at home showed no such advantage. Work ethic, gender, students' evaluations of the system, and [[teacher-role|teacher]] experience predicted how much it was used; device access and digital competence did not. The findings suggest that availability alone does not translate into learning gains, and that supervised in-class use matters more than accumulated minutes.

## Key Findings
1. **Uneven and delayed implementation.** Only 41 of 60 classes ever used the system, and about half of the participating classes were not registered until the fall break, midway between the two test occasions.
2. **Low use even among adopters.** Students who worked with the system averaged 9.2 minutes per week, divided almost evenly between school and home; restricting the average to each class's active period raised it only to about 11.3 minutes.
3. **No overall progress in mathematics.** Average performance on the [[curriculum-design|curriculum]]-based test was essentially unchanged from pretest to post-test, and the small negative mean gain was not distinguishable from zero.
4. **No detectable class-level benefit.** Classes that devoted more time to the system did not post higher post-test scores than classes that devoted less, after [[learning-gains|prior achievement]] and other covariates were taken into account.
5. **A small within-class association for supervised use.** Students who used the system more than their classmates, and especially more during lessons, had slightly higher post-test performance, even though adding usage information worsened the models' overall fit.
6. **No benefit from home use.** Extra time on the system at home was unrelated to gains, despite home and school time being nearly equal on average.
7. **Use was selective.** Students with stronger work ethic, girls, students who rated the system more positively, and classes taught by more experienced teachers used it more; technical equipment and self-assessed digital competence did not predict use.

## What the study measured
The study was set in Grade 8 and 9 mathematics classrooms in Schleswig-Holstein, in schools taking part in the Startchancen program for students facing social disadvantage. Teachers kept full control over whether and how often they used Bettermarks, an intelligent tutoring system with adaptive task selection and immediate feedback, and training was optional. Pretests were administered in September–October 2024 and post-tests in February–March 2025. Of 1,329 students who took the pretest and 956 who took the post-test, 856 were matched across both occasions; 269 were dropped because their usage logs could not be linked to a reliable username. The final analytic sample was 587 students in 60 classes drawn from 25 schools. Of these, 370 students in 41 classes used the system at least once, while 217 students in 31 classes did not. A core sample of 275 students combined system use with a completed teacher questionnaire.

Usage was reconstructed from interaction-level logs recording timestamps, attempts, correctness, and the substep, task, and worksheet involved. Because counting attempts or tasks would confound usage with ability, the authors used cumulative time spent in the system, winsorized at two standard deviations; the heaviest 5 percent of users averaged roughly six times the usage of the remaining 95 percent. Achievement was measured with a 60-item curriculum-based test covering ten content areas, with each student answering 20 items through a multi-matrix design. The pool drew on 32 TIMSS and 7 NAEP items plus 21 newly written items, and showed acceptable fit (infit 0.87 to 1.13) and reliability (EAP 0.83, WLE 0.74). Two-level hierarchical models separated students from classes; a three-level model was rejected because only 0.5 percent of post-test variance lay at the school level and just 13 schools took part.

## What the results showed
Implementation was itself a result. First use occurred on average 7.1 weeks into the school year, and average use among the 370 users was 9.2 minutes per week, split into 4.6 minutes during school and 4.5 minutes at home. In-school and at-home use were only moderately related at the class level. Restricting the average to each class's active period yielded about 11.3 minutes, so delayed registration does not fully explain the low exposure.

The test appears to have worked as intended. The average solution rate was 48 percent at both occasions, the two testing occasions produced comparable item-fit statistics, and missing responses were low. Ninth graders outperformed eighth graders by 0.44 logit, confirming sensitivity. Yet the mean learning gain across the sample was −0.02 logit, not significantly different from zero. An earlier study using a very similar item pool had detected gains of 0.39 logit.

In models predicting post-test performance, pretest ability was by far the strongest predictor, followed by mathematics grades, mathematics self-concept, and school type. When usage was added, students who used the system more than their classmates showed a small positive association with post-test scores, while class-average usage was not significant. Adding usage also raised both information criteria compared with the covariate-only model, so the authors caution that the usage term did not improve overall fit.

Splitting usage by location clarified the pattern: time during school, but not time at home, was associated with gains at the individual level, and no usage measure was significant at the class level. The authors suggest that productive use outside lessons depends on [[self-regulated-learning]] and motivation, but did not measure those mechanisms directly.

In the separate models predicting usage itself, variance was split almost evenly within and between classes. Work ethic, gender, and students' ratings of the system were the student-level predictors, while teacher experience was the only class-level predictor; ICT access and digital competence were not. Statistical power at the class level was limited: [[simulation|simulations]] indicated that standardized class-level effects would need to be roughly 0.25 or larger, and in some cases 0.40, to reach 80 percent power. The authors therefore read the non-significant class-level result as absence of evidence rather than evidence that class-level use cannot work.

## What this means for practice
- **Instructors.** Treat the system as a supervised classroom tool rather than a homework assignment: in-school use was associated with gains while home use was not, despite similar average minutes.
- **Instructors.** Build explicit routines for when students work with the system, since merely making it available produced very low use and many classes did not start until midway through the term.
- **Instructors.** Stay involved while students work, helping them process the system's often corrective feedback and connect tasks to curricular goals, because the system offered limited elaborative feedback and no collaborative work.
- **Instructors.** Seek structured onboarding and sustained support before rolling out the system; experienced teachers integrated it more successfully, while optional training alone was not enough.

## Limitations
- No random assignment was possible: the original treatment and control design was dropped after a decline in sample size and schools' reluctance, so causal claims are not supported and usage may partly mark pre-existing engagement.
- Self-selection was evident. Users had higher pretest ability, higher mathematics self-concept, and were more likely to attend academic-track schools than non-users; the core sample was more disadvantaged than other users.
- Residual confounding remains. Motivation, persistence, teacher support, and parental monitoring were not fully measured, so the individual-level association may reflect engaged students choosing to use the system.
- Measurement scope was narrow. Only individual log data were available, so the social form of use and what teachers did with the system beyond school hours could not be examined.
- Intensity was low. With average use below ten minutes per week, the study describes limited and uneven implementation rather than sustained system-supported instruction.
- Class-level power and home conditions were constrained. With few classes and teachers, only moderate to large class effects were detectable, and [[parents-and-families|home learning]] conditions and novelty effects were not measured directly.

## Citation
Schaaf, J., Rolfes, T., Nagy, G., and Heinze, A. (2026). The effect of the frequency of use of an intelligent tutoring system on learning gains in mathematics in schools in challenging social circumstances. *Frontiers in Education, 11*, 1842708. https://doi.org/10.3389/feduc.2026.1842708
