---
title: "Generative AI and Learning Dynamics in Higher Education: A Longitudinal Empirical Study"
created: "2026-09-25T21:06:54-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment, longitudinal study]
level: [higher ed, undergraduate]
audience: [instructors, researchers, instructional designers]
foundations: [critical-thinking, human-ai-collaboration, cognitive-offloading, framing-ai-use-for-students]
pedagogy: [motivation, metacognition, self-regulated-learning, self-determination-theory]
technology: [generative-ai, llm, prompt-engineering]
assessment: [learning-gains]
ethics: [differential-effects-across-learner-groups]
discipline: [information technology]
sources: ['raw/papers/melanou-genai-learning-dynamics-longitudinal-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This longitudinal quasi-experimental study asks whether [[generative-ai]] changes the dynamics of learning across a full semester in higher education, and whether prior achievement or prior AI experience moderates any benefit. Three parallel classes of business informatics students (N=87) were assigned to tutor-AI, unguided AI, or a no-AI control condition and measured three times during a nine-week IT-Fundamentals II course. Knowledge rose significantly in all groups (F(1, 50)=29.87, p<0.001, η²p=0.374) with no advantage for either AI condition and no Matthew effect (BF01 =8.70). Germane cognitive load increased and predicted knowledge gain (β=0.51, p=0.001); motivation and critical thinking stayed stable; reflective use was higher in the AI condition (F(1, 40)=20.21, p<0.001) and predicted critical thinking (β=0.43, p<0.001). The authors conclude that the educational value of AI depends on pedagogical framing and learners' [[metacognition|metacognitive]] regulation rather than tool access.

## Key Findings

- Knowledge rose from T1 to T3 in all three groups (F(1, 50)=29.87, p<0.001, η²p=0.374), but the Time × Group interaction was not significant (F(2, 50)=0.77, p=0.469, Cohen's f=0.18).
- The unguided AI group gained most descriptively (M=16.57), ahead of tutor-AI (M=11.33) and control (M=9.05), yet these differences were not significant.
- No Matthew effect emerged: prior school grade and prior AI experience failed to moderate gains (F(1, 48)=2.46, p=0.124 and F(1, 48)=0.001, p=0.970), with Bayesian comparison supporting the absence (BF01 =8.70).
- Germane cognitive load increased over time (F(1, 37)=10.86, p=0.002, η²p=0.227) and, with extraneous load, predicted knowledge gain (R2=0.23; β=0.51 and β=0.36).
- Motivation stayed stable (no Time effect, F(1, 39)=0.54, p=0.467) and did not predict knowledge gain (R2=0.010, β=0.10, p=0.533), contrary to the study's hypothesis.
- Reflective use was much higher in the AI condition than in the control group (F(1, 40)=20.21, p<0.001, η²p=0.336) and predicted critical thinking (R2=0.183, β=0.43, p<0.001).

## Design: three parallel classes, three measurement points

The design was quasi-experimental and longitudinal, embedded in a practice-integrated bachelor's program where students alternate company training with nine-week theory phases. A cohort of 87 students (19 females, 68 males; age 18 to 29) was already divided into three parallel classes (A: 33, B: 28, C: 26), so conditions followed existing class membership rather than random allocation. Group A received tutor-AI introduction with role-task-output [[prompt-engineering|prompting]] guidance, Group C used the same institution-provided [[llm]] interface without tutor framing, and Group B worked without AI. The interface defaulted to GPT-4o. Weekly, in the final phase of a four-hour block, students had 20 minutes to generate one question with a correct answer. Data came from the first, fourth, and eighth lecture of 36 teaching units, and complete cases were analyzed.

## Knowledge gains without an AI advantage

Knowledge was measured with a 14-item multiple true-false test scored out of 70 points. Scores improved significantly from T1 to T3 for the sample as a whole, with neither a significant main effect of group nor a Time × Group interaction and a small effect size (Cohen's f=0.18). Students with prior AI experience scored higher overall but did not improve more, and a Bayesian regression yielded BF01 =8.70, moderate to strong evidence against a [[differential-effects-across-learner-groups|Matthew effect]].

## Cognitive load shifts, motivation stays flat

Cognitive load was measured at T2 and T3 with an adapted multidimensional questionnaire: intrinsic load was stable and extraneous load fell only descriptively, while germane load increased in both the AI and control conditions. The regression on knowledge gain was significant (R2=0.23): germane load was positive (β=0.51, p=0.001) and extraneous load was unexpectedly positive too (β=0.36, p=0.018), which the authors read as productive challenge rather than distraction. [[motivation]], framed by [[self-determination-theory]], showed no significant change and did not predict knowledge gain, and self-reported [[critical-thinking]] was equally stable.

## Reflective use is where the conditions differ

Reflective use, the metacognitive practice of checking sources and verifying AI output before adopting it, produced the clearest condition difference in the study: end-of-semester means of 3.72 for the AI condition against 2.82 for control, with no significant change over time. Reflective use at T3 positively predicted critical thinking at T3 (R2=0.183, β=0.43, p<0.001) but did not predict knowledge gain. The authors read the pattern as evidence that [[generative-ai]] is not a consistent learning treatment and that its effects sit inside pedagogical framing and [[self-regulated-learning|regulatory]] processes.

## What this means for practice

- Do not treat AI access as an intervention: knowledge gains were equivalent across all three conditions, so tool availability alone does not raise outcomes.
- Design for reflective use rather than tool use: reflective use was markedly higher in the AI condition and was the one construct tied to critical thinking.
- Protect germane processing through tasks that require elaboration and explanation: germane load increased over the semester and predicted knowledge gain.
- Expect stable rather than rising motivation and critical thinking within one semester; the brief motivation scale also showed low internal consistency (α≈0.50).

## Limitations

- The semester spanned roughly three months, which the authors consider too short to capture durable development of critical thinking or AI literacy.
- Attrition and complete-case analysis reduced effective samples (roughly 28 to 60 depending on construct), weakening three-group comparisons and the moderation and mediation tests.
- The study ran in one business informatics program at a practice-oriented university, so its authors call for replication across disciplines and institutions.
- Novelty and Hawthorne effects cannot be excluded, the intervention included no explicit scaffolding or structured prompting, and several key constructs relied on self-report.

## Connected Concepts

- [[generative-ai]]
- [[critical-thinking]]
- [[motivation]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[learning-gains]]
## Connected Articles

- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — meta-analytic evidence on generative AI and higher education learning outcomes, which this single-course longitudinal design tests at classroom level.
- [[cui-motivation-roles-metacognitive-genai-2026]] — examines how motivation and role framing shape metacognitive engagement in student-GenAI interaction, the mechanism implicated here in reflective use.
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — another semester-scale look at AI usage in higher education, focused on ethics and policy rather than learning dynamics.
- [[ai-mediated-cognitive-divergence-2026]] — reports widening differences between learners under AI mediation, approaching from another angle the Matthew effect this study failed to detect.

## Citation

Melanou, Chrysanthi; Beege, Maik; Kimmig, Martin. (2026). *[Generative AI and Learning Dynamics in Higher Education: A Longitudinal Empirical Study](https://doi.org/10.1002/jcal.70322)*. Journal of Computer Assisted Learning, 42, e70322. https://doi.org/10.1002/jcal.70322