---
title: "Vanity metrics but no real gains the role of generative AI in unsupervised assessments in finance"
created: "2026-11-18T05:30:00-05:00"
updated: "2026-11-18T05:30:00-05:00"
type: article
evidence_context: educational
published: "2026-11-17"
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, researchers, administrators]
foundations: [academic-integrity]
pedagogy: []
technology: [generative-ai]
assessment: [assessment-validity, automated-assessment]
methods: []
institutions: []
ethics: []
confidence: high
sources: ['raw/papers/rodriguez-longarela-genai-unsupervised-assessment-finance-2026.md']
source_url: https://doi.org/10.1080/21568235.2026.2764711
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Rodríguez Longarela and McGrath (2026) ask whether the post-ChatGPT rise in unsupervised assessment scores reflects learning. Using 75,404 question grades from eight cohorts of a first-year Finance course, they compare the same students on two unsupervised quizzes and a supervised final exam whose instructor, weighting and format never changed. The interaction between quiz and GAI is 0.089 against a pre-GAI open-book advantage of 0.090, while the GAI coefficient on supervised questions is -0.002: unsupervised performance roughly doubled an advantage it already had, and supervised performance did not move. Because supervision is the only dimension that varies, and because the gain concentrates in theoretical questions that students had previously answered worse unsupervised than supervised, the authors call post-GAI quiz scores vanity metrics. The limit is scope: one course, one institution, and quizzes and exams built only from multiple-choice items, the easiest case for [[automated-assessment|automated assessment]].

## Key Findings

1. **Unsupervised scores rose after [[generative-ai|generative AI]] arrived; supervised scores did not.** The quiz coefficient is 0.090 (a 9 percentage point open-book advantage before GAI), the quiz x GAI interaction is 0.089, and the GAI dummy on supervised questions is -0.002 — indistinguishable from zero (0.000 for the 2024 cohorts, -0.004 for 2023).
2. **GAI doubled an advantage that open-book conditions had already produced.** The interaction is "nearly identical" to the quiz coefficient, so GAI doubles the initial unsupervised advantage rather than creating a new one.
3. **The effect grew as the tools improved.** Restricting treatment to the 2023 cohorts gives a GAI effect of 5.9 percentage points, roughly one third below the full-sample 8.9 points; the 2024 cohorts give 11.4 percentage points, roughly one third above.
4. **Theoretical questions carry almost all of the gain, reversing the pre-GAI pattern.** For calculation questions the open-book effect is 12.1 percentage points and the GAI effect 4.9 points; for theoretical questions the open-book effect is negative (-3.1 percentage points) and the GAI effect is 25.1 percentage points, roughly five times the calculation estimate.
5. **The reversal is visible cohort by cohort.** The theoretical-question gap jumps from a flat, slightly negative pre-GAI baseline to +10.5 percentage points in HT2023 and over +28 points in both 2024 cohorts, and every post-GAI cohort exceeds every pre-GAI cohort of the same semester type.
6. **Scaled against the remaining margin, about 60% of the exploitable advantage is realized.** The adjusted total effect reaches 60% for the whole sample, around 50% for the 2023 GAI cohorts and 70% one year later, against roughly 36% recomputed for the proctored versus non-proctored comparison in Daffin and Jones (2018).
7. **The distortion is broad-based, with one exception and no gender gap.** The quiz effect falls from 0.189 for students with an F in the preceding accounting course to 0.002 for those with an A, the adjusted total effect is around 25% for the highest-ability group, and separate models give 0.088 for female and 0.089 for male students.

## What the study did

The setting is a large-enrollment first-year Finance course in a [[business-education|business]] bachelor's program, taught twice a year in May and December. The authors assembled 75,404 exam-question grades from eight cohorts running from 2021 to 2024, covering 2,540 student-cohort observations, 269 to 398 students per cohort, and restricted the sample to students who completed both quizzes, the final exam and the preceding Accounting course. Two unsupervised online quizzes of 10 multiple-choice questions each cover the first two course blocks; a proctored final exam of 20 such questions covers overall comprehension. The quizzes carry 10% of the course grade each (20% in total) and the final exam 75%, and the instructor, textbook, weighting and format are identical across all eight cohorts. Final-exam questions from the third block are stripped so both instruments cover the same material, and because every item is multiple choice, grading subjectivity drops out as a confound.

The regression is a difference-in-differences on the question grade (0 or 1), with a GAI indicator for the 2023 and 2024 cohorts, a quiz indicator for unsupervised items, and their interaction. The GAI dummy proxies any learning that transfers to supervised settings; the quiz coefficient captures the pre-GAI open-book advantage; the interaction isolates the GAI effect. Identification rests on the claim that the quiz-versus-exam gap would have stayed flat absent GAI, which the authors probe with an event study using HT2022 as the reference cohort. The same students sit both instruments on the same material, so supervision is the only dimension that varies. Standard errors are clustered by student and question.

## What the adjusted effect means

A raw 9 point gap is hard to read on its own: a student already near full marks on the supervised exam has almost no room to outperform it. Effects are therefore divided by the remaining margin, 1 - a1, expressing each as the share of the exploitable advantage students realize. On that scale the total effect of unsupervision for GAI cohorts is 60% — an examination still worth something but less informative. The trend matters more than the level: around 50% in 2023 and 70% a year later implies an instrument degrading as adoption spreads. For theoretical questions the adjusted GAI effect sits very close to 100%, with a total effect of around 85%, because the negative pre-GAI theoretical gap raises the ceiling; for the highest-ability students the total effect is around 25%, less than half that of their peers. The gradient has a mechanical ceiling: a student expected to score 90% can at most beat the supervised exam by 10 percentage points, so the fall from 0.189 to 0.002 describes a shrinking margin as much as a different propensity to use AI.

## What this means for practice

- **Instructors.** Do not read a strong quiz average as evidence the cohort learned the material. Here the quiz advantage over the supervised exam nearly doubled after GAI while the supervised coefficient stayed at -0.002, so a quiz score mainly measures access to tools.
- **Course teams.** Keep at least one assessment whose conditions rule out assistance when the result certifies learning, and check the weights: with quizzes at 20% and the final at 75%, the noisy component still feeds the grade.
- **Assessment designers.** Expect the largest distortion on conceptual items, not calculations. The GAI effect is 25.1 percentage points on theoretical questions against 4.9 on calculation questions, because templates and worked examples were already cheap to look up, while conceptual items that reward retrieval now behave like open-book search tasks; that is a question about [[assessment-validity|assessment validity]], not difficulty.
- **Researchers or Administrators.** Treat cross-cohort comparisons beginning after 2022 as confounded, and ask for a within-student, within-instrument contrast before accepting a learning claim. Where surveillance is the alternative, weigh it against [[academic-integrity|academic integrity]] guidance and support in using these tools purposefully.

## Limitations

- **Parallel trends cannot be established.** With only four pre-GAI cohorts and seasonal movements of several points, such tests have limited power; the theoretical-question pre-GAI gaps are statistically indistinguishable (joint test p = 0.58), and the pooled 8.9 points sits between the 10.1 estimated within spring cohorts and 8.6 within fall cohorts.
- **One course, one institution.** The data come from one Finance course in one European [[higher-ed|higher education]] institution, so the magnitudes need not transfer to other disciplines or populations.
- **Multiple-choice items only.** Ten-item quizzes and a twenty-item exam with fixed structure make the comparison clean but leave open whether the same inflation appears in constructed-response, oral or portfolio work, where partial credit behaves differently.
- **Ability measures are incomplete.** The pre-university measures used to check the accounting-grade proxy do not cover the 2024 cohorts, and within-cohort accounting ranks could themselves be affected by differential GAI use in the preceding course.
- **Several analyses are exploratory.** The ability, gender and cohort-trend splits map the boundaries of the phenomenon rather than test pre-specified hypotheses, and the question-type asymmetry is consistent with the search-cost mechanism but not a test of it.

## Citation

Rodríguez Longarela, I., & McGrath, C. (2026). [*Vanity metrics but no real gains the role of generative AI in unsupervised assessments in finance*](https://doi.org/10.1080/21568235.2026.2764711). *European Journal of Higher Education*. Advance online publication.
