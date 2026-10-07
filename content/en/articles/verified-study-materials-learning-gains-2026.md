---
title: "Verified, not generated: expert-verified AI study materials and the distribution of learning gains in a university course"
created: "2026-10-07T09:30:00-04:00"
updated: "2026-10-07T09:30:00-04:00"
type: article
foundations: [teacher-role, cognitive-offloading]
pedagogy: [retrieval-spacing-interleaving, prior-knowledge]
technology: [generative-ai, llm, rag]
assessment: [learning-gains, summative-assessment]
methods: [mixed-methods-research, quantitative-research, ai-ed-evaluation]
institutions: [educational-policy-ai]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups, ai-use-disclosure]
research_method: [quasi-experiment]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/verified-study-materials-learning-gains-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
---

> **Synthesis:** This study asks which students actually gain when a university course issues [[generative-ai]] study materials, and argues the answer depends on who bears the checking. In a compulsory first-year economics course, one half received AI-generated podcasts, FAQs, and quiz-based study guides produced with a source-grounded [[rag]] model and verified by a named graduate teaching assistant before release. Access was associated with a 2.34-mark advantage on a 50-mark examination component, but roughly three-quarters of that gain arose in the bottom quintile and the share of marks below the 60% classification boundary fell by 24.7 percentage points. The authors conclude that moving the checking burden from students to an accountable tutor lets verified materials reach the weaker students they are meant to help.

## Key Findings
1. A two-cohort difference-in-differences design found that access to expert-verified AI study materials was associated with a 2.34-mark advantage on a 50-mark examination component (p = 0.045, HC1), about 0.33 to 0.40 standard deviations.
2. The share of marks below the upper-second classification boundary (30 of 50 marks, or 60%) fell by 24.7 percentage points relative to the counterfactual (p = 0.001), equivalent to 21 students in a cohort of 85.
3. Estimates were significant at every threshold from 23 to 31 marks and at none above 31; at the lower-second boundary (25 marks) the reduction was 12.9 points (p = 0.008).
4. Roughly three-quarters of the 2.34-mark average arose in the bottom quintile, whose difference-in-differences was 8.9 marks, with almost none originating in the top three quintiles.
5. The threshold estimate was robust to removing the lowest-scoring pre-intervention students (−19.9 to −22.9 points, p ≤ 0.006), while the average effect weakened from 2.34 to 1.41 marks when eight students were dropped.
6. Interviews and feedback from 36 students indicated the verification label gave them a reason to engage without ending their scrutiny; each podcast reached more than 70 unique listeners, about 82% of the cohort.
7. Producing and verifying each weekly study set took about 30 minutes, roughly 2.5 hours across five weeks, or about 1.8 minutes of staff time per student.

## The judgment burden
The authors argue that whether [[generative-ai]] narrows or widens attainment gaps depends on the judgment burden: the expertise and effort a learner must supply to separate usable from unusable AI output before learning from it. That burden has two parts — how variable the output is, and who is responsible for checking it. Screening an AI explanation against the course consumes time and [[cognitive-psychology|working memory]] without advancing understanding, an extraneous load the authors relate to [[cognitive-offloading]] while distinguishing their construct from cognitive load theory. Because checking draws on subject knowledge ([[prior-knowledge]]), time, and confidence that weaker students have least of, material released unchecked should help stronger students most. Where a [[teacher-role|tutor]] checks it before release, the support reaches weaker students without the screening cost — verification relocates the burden rather than removing it. [[equity-in-ai-education|Equity]] therefore turns on a design choice institutional responses ([[educational-policy-ai]]) rarely name.

## What the study did
The setting was a compulsory first-year Principles of Economics course at a UK business school ([[business-education]]), with two five-week halves and a terminal examination ([[summative-assessment]]) worth 50 marks per half. In 2023/24 neither half received materials. In 2024/25 the macroeconomics half received AI-generated podcasts, FAQs, and quiz-based study guides built with Google NotebookLM, a source-grounded [[llm]], from the course's own slides and readings, checked by a named graduate teaching assistant, and labeled "AI-generated and academically verified" ([[ai-use-disclosure]]). Materials were released free through the [[online-teaching-and-learning|virtual learning]] environment, designed for multiple means of access in line with [[universal-design-for-learning]], and mapped to the [[higher-ed|first-year]] audience. The quiz guides with model answers also invited [[retrieval-spacing-interleaving|self-testing]] with [[feedback]]. The quantitative analysis ([[quantitative-research]]) compared 170 students and 340 examination marks across the two cohorts.

## Where the gains landed
Distributional estimators located the change. The treated half's standard deviation fell from 7.09 to 5.03 (Brown–Forsythe p = 0.004) while the untreated half's barely moved, and its interdecile range narrowed from 19.6 to 11.6 marks. At the upper-second boundary the treated share of marks below 30 fell from 23.5% to 10.6% as the untreated share rose from 7.1% to 18.8%, a difference-in-differences of −24.7 points. Quantile estimates were 11.0 marks at the 10th percentile (95% CI 5.0 to 13.0) and 5.0 at the 20th, with estimates near zero from the 30th upward. Decomposing the average ([[learning-gains]]) attributed roughly three-quarters to the bottom quintile. The pattern is what the judgment-burden account predicts and bears directly on [[differential-effects-across-learner-groups]].

## How students received verified material
Interviews with 36 students describe a consistent sequence: skepticism, reassurance from the label, then use. Students said the label gave them a reason to engage with material they would otherwise have doubted, and the [[trust]] it conferred attached to a person they knew rather than to the model. Crucially, it did not end scrutiny — one student reported becoming "more critical, not less". Several described relief from the load of continually fact-checking AI output. The accounts most aligned with the quantitative pattern came from students facing constraints on conventional study: a second language ([[multilingual-learning]]), long commutes, reluctance to ask questions, and paid work. These constraints limit the time, language, and confidence that screening consumes.

## What this means for practice
- **Instructors.** Have a named tutor with subject expertise and a teaching relationship check AI-generated material before release, and regenerate vague or misaligned sections rather than approving first drafts.
- **Administrators.** Budget verification in workload allocations: it is the entire additional cost once generation is nearly free, and absorbing it into the unrecorded margins of insecure teaching contracts converts an efficiency gain into unpaid work.
- **Instructional designers.** Label both AI origin and verification, and name the verifier, since the disclosure itself prompted scrutiny; keep a log of verification time and changes per item so a decline in checking is visible before it reaches students.
- **Researchers.** Report distributional quantities — the change in the share of students below consequential grade boundaries, the change in dispersion, and the threshold or quantile profile — alongside any average effect ([[ai-ed-evaluation]]).

## Limitations
- The evidence comes from one course at one institution with a single pre-intervention cohort, so parallel trends cannot be tested and cohort differences cannot be excluded.
- Effort substitution between the two examined halves remains possible; the component correlation moved against it (0.284 to 0.482) but not significantly (Fisher z = 1.50, p = 0.135).
- The average effect depends on a small number of students and loses significance when three to five are removed; only the threshold result is robust.
- Individual usage logs were not retained, so use could not be linked to outcomes, and the [[qualitative-research|qualitative]] material consists of field notes rather than transcripts.
- The intervention bundled verification with new [[multimodal]] material, so the contribution of verification relative to the material itself cannot be identified.
- The cohort was high-attaining with no failures (module means 70.0 and 69.1), leaving effects on failure and the pass boundary untested.

## Citation
Dang, C. T., & Nguyen, A. (2026). [Verified, not generated: expert-verified AI study materials and the distribution of learning gains in a university course](https://arxiv.org/abs/2610.07097). arXiv:2610.07097.