---
title: Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
created: "2026-05-21T04:33:04-04:00"
updated: "2026-08-24T10:30:00-04:00"
type: article
tags: [generative-ai, higher-ed, cs-education, cognitive-offloading, academic-integrity, formative-assessment, student-experience, efficacy-study, metacognition, ai-literacy]

sources: ['raw/papers/2605.21374.md']
confidence: high
---

> **Synthesis.** Fowles et al. (2026) offer a harm-reduction blueprint for [[generative-ai]] in [[cs-education]]: rather than banning large language models ([[llm]]s), make students accountable for understanding whatever code they submit through weekly oral code review interviews. At [[higher-ed|Utah State University]], an [[active-learning|flipped classroom]] freed class time for one-on-one assessments, and three semesters of data showed sharply higher AI usage (paste-to-type ratios up) with no statistically significant decline in exam scores — evidence that structured oral [[formative-assessment]] can preserve [[learning-gains]] even as reliance on AI tools rises.

## Key Findings

1. Weekly 15-minute oral code review interviews conducted by trained [[peer-review|teaching assistants]] (TAs), weighted at 70% of each coding assignment grade, preserved student understanding: exam scores showed a slight (~2%), statistically insignificant increase in Fall 2025 versus prior semesters.
2. [[learning-analytics|Keystroke logs]] confirmed dramatically higher AI usage under the permissive policy — the percentage of pasted-to-total characters rose from 61.0% (Fall 2024) to 68.1% (Fall 2025), p < 0.0001 — yet [[self-regulated-learning|time-on-task]] and keystroke counts did not decline.
3. Survey responses were overwhelmingly positive: 90% of students reported that code reviews motivated them to [[metacognition|understand their code better]], and 65% agreed the reviews helped them avoid [[cognitive-offloading|over-reliance]] on AI tools.
4. Negative feedback was logistical rather than pedagogical, centering on [[faculty-development|TA inconsistency]] (33.7%) and scheduling difficulties (21.7%) — pointing to scalable implementation, not student resistance, as the key challenge.

## Background & Context

The rapid capability growth of [[generative-ai|large language models]] has forced computing educators to choose between resisting the technology or embracing it as part of professional practice. This study navigates that divide through a [[reducing-ai-misuse|harm-reduction]] stance: no restrictions on [[llm|AI]] use for coding assignments, so long as students can demonstrate genuine understanding in a code review interview. The approach reframes questions of [[academic-integrity]] and [[ai-literacy]] by moving accountability from detection to explanation, aligning with [[framing-ai-use-for-students|frameworks]] that emphasize critical engagement over prohibition.

The authors position the CS1-CR course against two related lines of prior work. First, research characterizing how students actually use [[generative-ai|AI tools]] — from Brender et al.'s categories of debugging, practical development, and conceptual exploration to Ghimire & Edwards' similar taxonomies — finds that [[cognitive-offloading|conceptual exploration]] produces stronger learning gains than simple code generation. Second, work on oral exams and peer code reviews documents both the promise of [[authentic-assessment|authentic oral assessment]] and the open problem of [[higher-ed|scaling]] it to large introductory classes.

## Design of CS1-CR

In the Fall 2025 CS1 course (96 students), every coding assignment submission was followed within 48 hours by a mandatory 15-minute oral code review interview with a trained TA or the instructor. The interview probes the student's understanding of their program and the rationale behind implementation decisions, then requires them to run a set of integration test cases. Grading shifted so the rubric score counted for only 30% of each assignment, with the remaining 70% coming from the code review session; failing to schedule a session within the window resulted in a zero on the assignment. This [[formative-assessment|formative]] accountability structure incentivizes an active attempt at understanding submitted code regardless of its origin.

The design builds directly on evidence that students who [[help-seeking|over-rely]] on [[generative-ai|AI]] for code generation show poor learning gains, while those who engage [[metacognition|conceptually]] maintain or improve outcomes. By requiring students to [[learning-by-teaching|explain]] their code to a trained peer, CS1-CR converts the [[cognitive-offloading|potential cognitive offloading]] of AI use into a [[self-regulated-learning|self-regulated]] practice opportunity that deepens rather than bypasses understanding.

## The Flipped Classroom Component

To create time for weekly interviews, the instructor canceled one of three weekly class meetings and adopted an [[active-learning|flipped classroom]] model: students watch lecture videos outside class and spend the remaining two days on supplemental coding activities with peer and instructor support. This mirrors [[student-engagement|engagement-focused]] pedagogies with documented small positive effects on learning and addresses a persistent [[higher-ed|scalability]] barrier that has long limited oral assessment in large courses.

## Methods & Evidence

The study compares three semesters (Fall 2023, Fall 2024, and Fall 2025/CS1-CR) sharing the same instructor, materials, quizzes, and exams. Because grading policies differed, the researchers compared scores on two proctored, auto-graded multiple-choice exams, alongside [[learning-analytics|keystroke logs]] collected via the ShowYourWork plugin in PyCharm for identical assignments in Fall 2024 and CS1-CR. These quantitative measures were paired with an end-of-semester [[qualitative-research|survey]] combining multiple-choice, Likert, and free-response items, analyzed with a consensus-coded [[mixed-methods-research|thematic scheme]].

The results were consistent across methods. Pairwise t-tests showed no statistically significant change in exam performance despite the new policies, with a ~2% improvement on Exam 1 for CS1-CR. The percentage of pasted-to-total characters rose from 61.0% to 68.1% (p < 0.0001) while paste-event counts stayed roughly constant — indicating students pasted larger blocks of AI-generated code. Surprisingly, time-on-task and keystroke counts did not decline, suggesting students engaged with the code just as much, likely motivated by upcoming reviews. As with much of this literature, the authors note there have been no [[rct|randomized controlled trials]] in this space, and pasted text cannot be definitively attributed to AI.

## Implications

The results suggest that oral code review interviews paired with a flipped classroom offer an effective, scalable alternative to AI bans in [[cs-education|CS1]].

- For [[assessment]] design, the study provides an [[authentic-assessment|authentic]], defensible alternative to [[ai-detection|AI detection]], which tends to foster adversarial dynamics and erode [[trust]] between instructors and students.
- The findings reframe [[academic-integrity]] around demonstrated understanding rather than policing tool use — a stance aligned with [[ai-literacy]] and [[educational-policy-ai|policy]] that acknowledges AI tools as part of professional practice.
- The flipped classroom resolves the [[higher-ed|scalability]] question that has blocked oral assessment adoption; TA training and scheduling logistics are the practical levers to refine.
- The design supports [[self-efficacy|student confidence]] and [[motivation]] to understand code deeply, linking [[metacognition|metacognitive]] development to structured accountability rather than to [[cognitive-offloading|over-reliance]].

## Connected Concepts

- [[academic-integrity]]
- [[ai-literacy]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[formative-assessment]]
- [[teacher-role]]
- [[cs-education]]
- [[generative-ai]]
- [[assessment]]
- [[higher-ed]]
## Connected Articles

- [[stanford-evidence-base-ai-k12-2026]]
## Citation

Peter Fowles, Erik Falor, Sulove Bhattarai, John Edwards, Seth Poulsen (2026). [Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom](https://arxiv.org/abs/2605.21374). .
