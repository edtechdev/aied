---
title: Is Solving Better Than Evaluating GenAI Solutions?
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
technology: [generative-ai]
research_method: [experiment]
discipline: [cs education, stem education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.27586.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Randomized A/B crossover study (N=220) in a junior-level algorithms course comparing solution evaluation/critique tasks against traditional solution generation. Finds that evaluation-centered tasks produce comparable [[learning-gains|learning outcomes]] with a localized homework advantage that does not transfer to [[summative-assessment|summative]] performance, suggesting evaluation tasks are a viable [[pedagogy|pedagogical]] response to the availability of [[generative-ai|GenAI]] code generation tools.

## Key Findings

- No statistically significant differences were found between groups on midterm scores, final exam scores, overall course grades, or exam problems structurally aligned with the homework interventions.
- Students received significantly higher homework scores during periods in which they evaluated GenAI-generated solutions, but this localized advantage on the modified homework items did not translate into downstream summative gains.
- Survey data indicated that most students did not report changing their study habits in response to the intervention; however, students who did report adapting their study strategies rated the GenAI-evaluation assignments as significantly more helpful.
- GenAI evaluation redistributes student effort-directed solution construction toward verification, diagnosis, and judgment, but does not automatically produce stronger conceptual transfer.
- GenAI-evaluation activities can be incorporated into algorithms coursework without broad performance losses, but meaningful learning gains may require deliberate [[scaffolding]] that pushes students beyond simple error diagnosis.

## Study Design & Method

The study was a randomized A/B crossover experiment (N = 220) conducted in a junior-level, theory-heavy algorithms course. Across six assignments, student working groups either solved challenging algorithmic problems directly or evaluated often-flawed GenAI-generated solutions to corresponding problems, with group roles reversed midway through the semester. A survey with a high response rate (Group A: n = 101; Group B: n = 107; overall N = 208, 95%) measured students' self-reported comfort and confidence across the five core algorithmic topics assessed on the midterm — asymptotic analysis, divide and conquer, dynamic programming, greedy methods, and graph algorithms — using five-point Likert scales. Within-student difference scores were computed to examine changes in homework performance on GenAI-graded versus independently solved problems across the two halves of the course.

## What this means for practice

- **Students.** Treat evaluating AI-generated solutions as practice in verification and diagnosis, not as a replacement for constructing solutions: across the six-assignment crossover, midterm, final, and course-grade outcomes did not differ between conditions.
- **Students.** Grade each AI solution against explicit criteria — algorithm correctness, recurrence validity, missing invariants, flawed proof steps — and write down why the faulty step fails, since homework scores rose only during the evaluation weeks.
- **Students.** Add reflection that pushes past spotting the error to rebuilding a correct solution; the authors say meaningful conceptual gains require scaffolding beyond simple error diagnosis.
- **Students.** Track your own study habits honestly: the survey found most students did not change how they prepared, while those who did rated the evaluation assignments significantly more helpful.
- **Students.** Do not assume a homework advantage carries into exams; the exam item aligned with the intervention showed a floor effect with a median of 0 in both groups.

## Limitations

- The analytic sample was 220 students, after 7 of the 227 enrolled were excluded, all in one junior-level algorithms course at a single institution.
- Randomization happened at existing group level, so students who routinely collaborated were kept together and cross-group contamination was possible; six assignments in one semester is a short window for transfer to exams.
- Perceptions came from a post-only Qualtrics survey (208 respondents, 95% response rate) because technical constraints prevented a baseline survey, and study-habit and helpfulness measures are self-report.
- Students generated their own GenAI artifacts, as the intervention deliberately mirrored real tool use, so the evaluated solutions varied across students.
## Connected Concepts

- [[higher-ed]]
- [[cs-education]]
- [[critical-thinking]]
- [[generative-ai]]
- [[computational-thinking]]
- [[scaffolding]]

## Connected Articles

- [[cognitive-shift-ai-education]] — Evidence of a Cognitive Shift in AI Education: How Students Are Rethinking Human Intelligence?
- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education
- [[genai-availability-grades-satisfaction]] — Generative AI Availability, Grades, and Student Satisfaction at a Large University

## Citation

Ethan Dickey, Marios Mertzanidis, Alexandros Psomas (2026). [Is Solving Better Than Evaluating GenAI Solutions?](https://arxiv.org/abs/2607.27586).
