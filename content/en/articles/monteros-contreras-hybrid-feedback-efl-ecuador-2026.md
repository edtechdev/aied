---
title: "When hybrid (ChatGPT and teacher) feedback does not outperform teacher-only feedback: evidence from A2 EFL writing in Ecuador"
created: "2026-11-26T12:35:00-05:00"
updated: "2026-11-26T12:35:00-05:00"
type: article
published: "2026-10-08"
sources: ['raw/papers/monteros-contreras-hybrid-feedback-efl-ecuador-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: []
level: [higher ed]
audience: [instructors, faculty developers, researchers]
pedagogy: []
technology: [generative-ai]
assessment: []
methods: [quantitative-research]
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

> **Synthesis:** Monteros Campues and Contreras-Falcones (2026) ran a six-week quasi-experiment with 41 A2 English-as-a-foreign-language students at a technical institute in Quito, comparing [[teacher-role|teacher]]-only feedback with feedback that combined a teacher and the free version of [[generative-ai|ChatGPT]]. Both groups improved on an 18-item grammar test, and the teacher-only group's descriptive gain was larger, but the between-group difference was small and not statistically significant, both before and after controlling for pretest scores. Not one of six grammatical categories differed significantly after correction. The confidence intervals were wide enough to include advantages for either condition, so this is not evidence that the two kinds of feedback are equivalent. Because both groups also received teacher mediation through the textbook, class notes and teacher clarification, the design cannot isolate what ChatGPT contributed.

## Key Findings

1. **Both groups improved over six weeks.** The teacher-only group's gain was descriptively larger, while the hybrid group's gain was smaller but still detectable within its own group.
2. **The difference between groups was small and not statistically significant.** The estimate favored the teacher-only condition but carried a confidence interval spanning effects in both directions.
3. **Controlling for starting scores did not change that.** ANCOVA produced an adjusted difference closer to zero and still not detectable.
4. **No grammatical category separated the groups after correction.** Descriptively, hybrid feedback led on verb tense and subject-verb agreement, while teacher-only feedback led on word order, articles, prepositions and conjunctions — a mixed pattern with no reliable winner.
5. **Both conditions contained substantial teacher mediation.** Students in both groups revised using the textbook, class notes and teacher clarification in English or Spanish, so the study compares two feedback packages, not AI against teacher.
6. **The AI arm is not exactly reproducible.** Students used whatever model the free tier of ChatGPT served over the six weeks; researchers did not fix or record model versions.

## What the comparison actually was

Two intact classes took part in weekly handwritten tasks during regular classes over six weeks in 2026. Each task followed the same drafting, feedback and revision sequence: students wrote for eight minutes without books or tools, then received feedback, then revised. The teacher-only class (n = 18) received initial feedback in English from the teacher; the hybrid class (n = 23) photographed its drafts and sent them to ChatGPT with a structured prompt asking for grammar feedback only, in simple English, limited to six structures and explicitly forbidden from rewriting the text or adding vocabulary. Both groups then revised with the same resources and teacher help as needed. All 41 students sat an 18-item Grammar Accuracy Writing Test before and after the intervention.

The pretest was not balanced: the hybrid group started at a mean of 9.17 against 7.17 for teacher-only, a difference the authors address with ANCOVA rather than by matching. That matters because the unadjusted comparison can look like an advantage for teacher-only feedback when it may partly reflect where the classes began.

## Reading the null honestly

The teacher-only group rose from 7.17 to 9.61 points, a gain of 2.44 (95% CI 1.14 to 3.75, p = .001, within-group dz = 0.93). The hybrid group rose from 9.17 to 10.78, a gain of 1.61 (95% CI 0.27 to 2.94, p = .020, dz = 0.52). With the contrast defined as hybrid minus teacher-only, the unadjusted difference in gains was −0.84 points (95% CI −2.68 to 1.00, p = .364, d = −0.29). After adjusting for pretest scores the difference was −0.40 points (95% CI −2.25 to 1.45, p = .664).

Those intervals are the finding. They include a meaningful benefit for hybrid feedback and a meaningful benefit for teacher-only feedback, so the study does not establish that the two are interchangeable. What it establishes is narrower: in this one institute, over six weeks, with these 41 students, the hybrid package did not produce a detectable advantage on this test.

## What this means for practice

- **Instructors.** A generative tool added to a feedback workflow is not automatically an improvement; ask what the tool does that the existing teacher-and-textbook loop does not, and check that question against your own students' revisions.
- **Program leads.** Treat this as a reason to run a small local comparison rather than to cancel or adopt a tool. The design that produced this null — two intact classes, one test repeated, one rater — is cheap to reproduce and easy to improve.
- **Assessment designers.** Separate the quality of the feedback a student receives from what the student learns across repeated revisions; this study measured the latter and found both groups improving.
- **Researchers.** Fix and record the model version if [[ai-feedback-quality|AI feedback]] is the treatment. A study whose treatment is "whatever the free tier served" cannot tell a replication team what to run.
- **Faculty developers.** When a hybrid result is reported as a win, check whether the comparison condition also had teacher mediation, because that is the difference between testing a tool and testing a package.

## Limitations

- **Small and non-randomized.** Forty-one students in two intact classes with different schedules; assignment to condition was by class, not by student.
- **Wide intervals around the null.** The authors explicitly warn against reading a nonsignificant difference as equivalence, and the confidence intervals include effects favoring either condition.
- **The same instrument twice.** The posttest was the 18-item test students had already seen, so practice and test familiarity are entangled with learning.
- **One rater, not blinded.** Grammatical accuracy was scored by a single rater aware of the condition, with no reported inter-rater reliability.
- **An unstable treatment.** ChatGPT's free-tier model varied over the intervention and was not logged, and both conditions included teacher and textbook support, so the independent effect of the AI feedback cannot be isolated.
- **One setting and proficiency level.** A2 learners in one Ecuadorian technical institute over six weeks; longer interventions and other proficiency levels remain untested.

## Citation

Monteros Campues, R., & Contreras-Falcones, A. (2026). [When hybrid (ChatGPT and teacher) feedback does not outperform teacher-only feedback: evidence from A2 EFL writing in Ecuador](https://doi.org/10.3389/feduc.2026.1978336). *Frontiers in Education*, 11, 1978336.
