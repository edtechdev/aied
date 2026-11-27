---
title: "The self-regulatory paradox of learning analytics: student expectations and the conditions for fair algorithmic assessment in higher education"
created: "2026-11-27T01:21:00-05:00"
updated: "2026-11-27T01:21:00-05:00"
type: article
published: "2026-07-16"
sources: ['raw/papers/lluch-learning-analytics-self-regulation-2026.md']
confidence: low
evidence_context: educational
research_method: [survey]
page_kind: [evaluation]
discipline: []
level: [higher ed]
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
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Lluch Molins and Lindín Soriano surveyed 1,020 undergraduates at one large Spanish research university about what they expect from institutional [[learning-analytics|learning analytics]]. On seven items, students most strongly expected professors to act when analytics flag a risk of failure, and least strongly expected analytics to inform their own academic decisions. A within-student comparison confirmed that instructor- and institution-oriented expectations ran higher than student-oriented ones. Women reported higher expectations than men on every item, but the gaps were small. The authors call this a self-regulatory paradox: students endorse the outcomes of [[self-regulated-learning|self-regulation]] while expecting the data work to be done on their behalf. They argue that this bears on the fairness of automated assessment, though they measured expectations of dashboards, not experience of grading systems.

## Key Findings
1. **Staff action is the strongest expectation.** Students most strongly expected professors to intervene when analytics show that a student is at risk of failing, and to use analytics to promote academic and professional skill development.
2. **Student-directed use rates lowest.** Using analytics to inform one's own decisions drew the least agreement of the seven items, even though the instrument was presented as a tool for self-regulation.
3. **The asymmetry holds within students.** Each respondent rated instructor- and institution-oriented items higher than student-oriented ones, so the pattern is more than an artifact of how the items rank.
4. **Women expect more, but the gaps are small.** Female students reported higher expectations on every item; all seven differences were statistically significant, but the effects were modest and only five survived correction for multiple tests.
5. **The youngest entrants expect the most guidance.** Expectations for proactive progress updates, goal-referenced feedback and decision support were highest in the youngest age group and declined across successive age bands.
6. **Fairness is an implication, not a measurement.** The authors argue that algorithmic assessment will not be experienced as fair unless learners see themselves as entitled to interpret their own data, but they measured expectations of learner-facing dashboards rather than of any deployed grading system.

## What the study measured

The study used a non-experimental, descriptive cross-sectional design at a large face-to-face research university in Spain, collected during the 2022–2023 academic year. Invitations went to students across courses and faculties; 1,068 students started the survey, and 1,020 valid responses remained after 48 cases were excluded for non-completion or lack of consent. Because the survey required every item to be answered, there were no missing values on the seven questionnaire items; 13 respondents gave a non-numeric age and were left out of the age analysis only.

The instrument was the Service and Feature Expectations dimension of the Student Expectations of Learning Analytics Questionnaire. Its seven items covered staff intervention when failure risk is detected, promotion of academic and professional skills, staff competence in integrating analytics into feedback, a complete learning profile per module, regular progress updates from the university, comparison of progress against course objectives, and student decision-making informed by analytics. Items were rated on a five-point Likert scale, from 1 (strongly disagree) to 5 (strongly agree), adapted from the original seven-point scale. The research team prepared a Spanish working translation; no formal cross-cultural adaptation was carried out.

The sample was 70% female (n = 714), 28% male (n = 286), 1% non-binary (n = 12) and 1% another or undisclosed (n = 8). By age, 39% were 17–18, 31% were 19–20, 19% were 21–22 and 9% were 23 or older. Social Sciences accounted for 34% of respondents, Health Sciences 29%, Humanities and Arts 28% and Sciences 9%. The authors describe this as a large convenience sample, self-selected and over-representing women and the health and social sciences; the proportions are not population estimates.

Four analyses were run in SPSS version 27: descriptive means and standard deviations, independent-samples t-tests by gender, chi-square tests across four age bands, and a paired-samples test of the central asymmetry. Because seven tests were run, the significance threshold was Bonferroni-corrected to α = .007. Effect sizes used Cohen's d, with small at d ≥ 0.20, medium at d ≥ 0.50 and large at d ≥ 0.80; the paired comparison used dz.

## The paradox in the numbers

Across the seven items, responses sat in a moderate-to-high band, from M = 3.47 to M = 3.87. The three highest-rated items were those that position teaching staff as the actor: staff obligation to act when analytics flag failure risk (M = 3.87, SD = 1.07), feedback used to promote skills (M = 3.86, SD = 1.03), and staff competence in integrating analytics into feedback (M = 3.83, SD = 1.03). The three lowest were those requiring students to act: regular university updates (M = 3.51, SD = 1.11), comparison with learning goals (M = 3.49, SD = 1.08), and student decision-making (M = 3.47, SD = 1.06). The complete learning profile item sat between them at M = 3.60 (SD = 1.06). The gap between the highest and lowest items was 0.40 of a scale point.

To test the asymmetry directly, the authors compared each respondent's mean across the instructor- and institution-oriented items (Items 1–3; M = 3.86) with the mean across the student-oriented items (Items 6–7; M = 3.48). The difference was significant in a paired-samples test, t(1019) = 14.75, p < .001, with a medium effect, dz = 0.46; the Wilcoxon signed-rank test agreed at p < .001. Items 4 and 5 were assigned to neither pole because they concern receiving information rather than who acts. The result is a within-student pattern, not a reading of the item order.

Gender differences went in one direction. Comparing female (n = 714) and male (n = 286) respondents, all seven items differed significantly, and five remained significant after the Bonferroni correction; Cohen's d ranged from 0.18 to 0.29. Female students reported higher expectations on every item. The gaps were widest for staff intervention and proactive university updates, and narrowest for student-directed decision-making. The authors caution against reading this as greater [[ai-literacy|data literacy]] among women; they offer distinct dispositions toward institutional support as a more conservative interpretation, and label it an untested hypothesis.

Age patterns ran the other way. Among the 1,007 respondents reporting a numeric age, three items differed significantly after correction: university progress updates (χ² = 30.14, p = .003), comparison with learning goals (χ² = 34.69, p < .001), and promotion of student decision-making (χ² = 28.83, p = .004), all with df = 12. A fourth item was significant only before correction (χ² = 26.56, p = .009). In each case the youngest students reported the highest expectations and the figures declined with age, which the authors read as a possible developmental effect that only longitudinal data could confirm.

The fairness argument rests on this asymmetry rather than on new measurement. The authors note that a system can be technically transparent while remaining alien to the learner who does not regard herself as entitled to read and act on her own assessment data. They treat transparency as partly relational, and argue that opening a dashboard is necessary but not sufficient: without data literacy and interpretive scaffolding, access does not become a capacity to question an algorithmic output. They explicitly frame these claims as testable propositions about the learner-side conditions of fair assessment, to be paired in future work with experience of deployed grading systems.

## What this means for practice

- **Instructors.** Treat staff intervention as the expectation students already hold: use analytics to flag risk and offer timely support, and make that support visible rather than assuming students will read a dashboard on their own.
- **Instructors.** Pair every dashboard with scaffolding in how to read it, compare it and act on it; the authors argue that student-centered analytics cannot be achieved simply by making a dashboard usable.
- **Institutions.** Build a developmental path from teacher-mediated use toward student-directed use, since the strongest expectation in this sample was that staff, not students, would act on the data.
- **Institutions.** Introduce data-literacy support early; the youngest students expected the most institutional guidance, which the authors read as a window for laying the groundwork for later self-direction.
- **Assessment designers.** When introducing automated assessment, check whether learners see themselves as legitimate interpreters of their own data; technical accessibility alone does not establish perceived fairness.

## Limitations

- The study draws on one institution and a self-selected convenience sample that over-represents women and the health and social sciences, so the descriptive proportions should not be treated as population estimates.
- The seven items were given in a Spanish working translation without independent back-translation, expert review or cognitive pretesting, and the five-point response scale prevents score-level comparison with studies using the original seven-point instrument.
- Students had no direct prior experience of an operational dashboard, so their answers describe an imagined system, and the cross-sectional design cannot show how expectations change after exposure.
- Non-binary respondents were too few to include in inferential gender comparisons, and differences between fields of knowledge were not submitted to effect-size analysis.
- Fairness, transparency and validity were not measured. The implications for automated assessment are interpretive extensions from expectation data, and the authors ask that they be read as propositions for direct testing.

## Citation

Lluch Molins, L., and Lindín Soriano, C. (2026). The self-regulatory paradox of learning analytics: student expectations and the conditions for fair algorithmic assessment in higher education. *Frontiers in Education, 11*, Article 1913278. https://doi.org/10.3389/feduc.2026.1913278
