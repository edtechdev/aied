---
title: "Teacher or Artificial Intelligence? The Effect of Decision-Making Agent on Junior High School Students’ Decision Acceptance: A Moderated Mediation Model"
created: "2026-09-30T13:47:09-04:00"
updated: "2026-09-30T13:47:09-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071227.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education]
level: [middle school]
audience: [instructors, assessment designers, researchers]
foundations: [ai-education, human-ai-collaboration, teacher-role, theories-and-frameworks, limitations-in-aied-research]
pedagogy: [student-ai-interaction, student-experience, social-emotional-learning]
technology: [ai-technologies, human-in-the-loop-ai]
assessment: [automated-assessment, feedback, self-report-measures, evaluative-judgment]
methods: [quantitative-research]
ethics: [trust, explainable-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhang, Fan and Qi ran a 2 (decision-making agent: [[teacher-role|teacher]] vs. AI) × 2 (explanatory feedback: with vs. without) between-subjects experiment with 250 seventh-grade students in a city in Henan Province, China, who read a vignette in which a mathematics exercise was graded 6 out of 10 either by their regular teacher or by an automated system. Students reported significantly higher decision acceptance and perceived fairness for teacher-made decisions than for AI-generated ones, and perceived fairness partially mediated the agent–acceptance link, carrying 67.52% of the total effect. Explanatory feedback moderated only the path from the decision-making agent to perceived fairness, and it widened rather than closed the human–AI fairness gap. The most important qualification is that fairness and acceptance were [[self-report-measures]] taken at a single time point, so the mediating pathway is correlational, and the 6 out of 10 score keeps every finding inside an unfavorable-outcome condition.

## Key Findings

- **Teacher-made decisions were accepted more than AI-made decisions.** Acceptance was M = 4.48 (SD = 1.50) in the teacher condition against M = 3.47 (SD = 1.16) in the AI condition, F(1,246) = 40.61, p < 0.001, partial η² = 0.14, and the zero-order correlation between agent and acceptance was r = 0.35.
- **Perceived fairness showed the same gap.** Fairness was M = 3.58 (SD = 1.01) for teacher decisions against M = 2.99 (SD = 0.93) for AI decisions, F(1,246) = 25.85, p < 0.001, partial η² = 0.095.
- **Perceived fairness partially mediated the effect, carrying most of it.** The indirect effect was ab = 0.79, the direct effect c′ = 0.38 and the total effect 1.17, so the mediating pathway explained 67.52% of the relationship; the index of moderated mediation was 0.51, 95% CI [0.12, 0.91].
- **Explanations raised both outcomes but did not close the agent gap.** Explanatory feedback had a significant main effect on acceptance, F(1,246) = 32.01, p < 0.001, partial η² = 0.11 (M = 4.42, SD = 1.41 with explanations against M = 3.52, SD = 1.30 without), while its interaction with the agent was not significant for acceptance, F(1,246) = 1.08, p = 0.30, partial η² = 0.004.
- **On fairness, explanations widened the gap instead.** The agent × feedback interaction on fairness was significant, F(1,246) = 5.99, p = 0.015, partial η² = 0.02: teacher decisions rose from M = 3.17 (SD = 1.03) without explanations to M = 3.99 (SD = 0.79) with them, while AI decisions moved only from M = 2.86 (SD = 0.92) to M = 3.11 (SD = 0.92).
- **The mediating pathway was significant only when explanations were present.** The indirect effect was 0.79, 95% CI [0.52, 1.09] in the explanation group against 0.27, 95% CI [−0.03, 0.59] without explanations; both groups kept a significant direct effect (0.38, 95% CI [0.30, 0.73] and 0.57, 95% CI [0.23, 0.90]).

## How the study was run

The authors recruited 258 seventh-grade students and excluded 8 for failing manipulation checks or answering every item identically, leaving 250 (126 boys, 50.40%; 124 girls, 49.60%; mean age 13.27 years). An a priori power analysis with effect size f = 0.25, α = 0.05 and power 0.85 set the minimum sample at N = 146. Randomization was by intact class rather than by individual: four complete classes were each assigned one condition, so all students in a class received the same treatment. The vignette described a medium-difficulty mathematics homework exercise scored 6 out of 10, with the grading source (regular math teacher or automated AI grading system) and the presence of a written explanation as the only manipulated factors. Perceived fairness was a two-item, 5-point scale (Cronbach's α = 0.90) and decision acceptance a four-item, 7-point scale (α = 0.89); the four core items yielded KMO = 0.82 and a Bartlett test of χ² = 602.31, df = 6, p < 0.001. Familiarity with AI and frequency of AI usage served as covariates, and the moderated mediation model was estimated with PROCESS Model 8 in SPSS 26.0 using 5000 bootstrap resamples.

## Why explanations did not close the gap

The authors read the pattern as a boundary condition rather than a failure of transparency. In their account, [[k-12|junior high]] students already hold stable trust in teachers built through daily classroom interaction, so a teacher's decision is accepted with or without an explanation, while a single scoring rationale cannot dislodge a standing perception of algorithmic evaluation as cold and rule-bound. Providing explanations is argued to make the two logics visible side by side — a teacher's contextual, person-aware reasoning against an algorithm's mechanical derivation — which sharpens the [[evaluative-judgment]] contrast and enlarges the differential fairness perception instead of narrowing it. The result qualifies the assumption behind much [[explainable-ai]] work, that disclosure reliably levels the field between human and automated [[automated-assessment]].

## What this means for practice

- **Instructors and assessment designers.** Keep a teacher in the loop for grading decisions that carry weight: the acceptance gap (M = 4.48 against M = 3.47) persisted at every level of explanation, and the authors recommend reserving final decision authority and interpretation power for teachers rather than handing it to an automated system.
- **Assessment designers.** Provide written rationales for scores anyway. Explanatory feedback produced a significant main effect on acceptance (M = 4.42 against M = 3.52) and lifted perceived fairness in both conditions, even though it did not equalize them.
- **[[educational-technology-developers|Edtech developers]].** Do not treat interpretability as a substitute for relationship. Clear, specific grading criteria are still worth building, but the study's pattern suggests they will not by themselves close a gap rooted in students' trust in the person deciding.
- **Administrators.** Build [[ai-literacy|AI literacy]] alongside AI tools. The authors argue that a single evaluation experience does not reshape stable attitudes toward algorithms, and that acceptance shifts only through sustained, routine contact with AI in schoolwork.
- **Program leaders.** Evaluate acceptance, not only scoring accuracy. The mediating path shows that the same score can land differently depending on who is seen to have produced it.

## Limitations

- Perceived fairness and decision acceptance were self-reported at a single time point, so the mediation is correlational. The authors state that the experimental manipulation establishes the agent's temporal priority but that they cannot confirm perceived fairness causally shapes decision acceptance, and reverse or reciprocal relationships remain possible.
- The sample was one grade-seven cohort in a single city in Henan Province, tested with a scenario-based vignette about standardized mathematics homework scoring, so the findings should not be generalized to other regions, grade levels or to subjective decisions such as [[well-being|mental health]] assessment or rewards and sanctions.
- The teacher was the students' own regular teacher, so the human condition confounds the decision-maker's identity with long-term familiarity, interpersonal trust, classroom authority and [[discipline-specific-aied|subject-specific]] knowledge; the design cannot separate the pure effect of human versus AI from those accompanying variables.
- The decision was fixed at an unfavorable outcome, a score of 6 out of 10, and the authors note that favorable high scores may shrink the teacher–AI acceptance gap by weakening students' sensitivity to the decision-maker's identity.

## Citation

Zhang, Z., Fan, S., & Qi, C. (2026). [Teacher or Artificial Intelligence? The Effect of Decision-Making Agent on Junior High School Students' Decision Acceptance: A Moderated Mediation Model](https://doi.org/10.3390/bs16071227). *Behavioral Sciences*, 16(7), 1227.