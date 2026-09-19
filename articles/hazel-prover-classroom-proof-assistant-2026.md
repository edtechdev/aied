---
title: "Hazel Prover: A Classroom Proof Assistant for Learning Structural Induction"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback, formative-assessment]
audience: [software developers]
research_method: [system development, design-based research]
discipline: [cs education, math education]
sources: ['raw/papers/hazel-prover-classroom-proof-assistant-2026.md']
confidence: high
level: [higher ed]
---

> **Synthesis:** Proof assistants offer instant [[feedback]] and incremental proof [[scaffolding]], long-promising features for [[math-education|mathematics]] education, but have been difficult to deploy in classrooms because students struggle with full-scale tools and transfer to on-paper assessment is weak. Keenan and colleagues present Hazel Prover, a classroom proof assistant for [[teacher-role|teaching]] equational and inductive reasoning about programs, designed around criteria encompassing ease-of-use, [[student-engagement|student engagement]] with underlying mathematical ideas, [[transfer-of-learning|knowledge transfer]] to pen-and-paper proof, and classroom logistics. Through iterative design and evaluation in two classes, with fine-grained usage logs, survey data, and student work, the tool aims to support structural induction learning in computing and mathematics classrooms.

## Key Findings

1. Proof assistants offer instant feedback and incremental proof scaffolding but are difficult to deploy in classrooms due to tool intricacy and weak transfer to on-paper assessment.
2. Hazel Prover is a classroom proof assistant for teaching equational and inductive reasoning about programs.
3. Design criteria encompass ease-of-use, student engagement with underlying mathematical ideas, knowledge transfer to pen-and-paper proof, and classroom logistics.
4. The design was synthesized from observations in prior classroom deployments of proof assistants.
5. Iterative design and evaluation in two classes used fine-grained usage logs, survey data, and student work.

## What this means for practice

- **Instructors.** Require students to write each evaluation step themselves instead of letting a stepper button perform it: after that change, agreement that the assignments could be completed by "clicking randomly" fell from 48% to 15% and exam scores returned to the range seen in earlier semesters.
- **Instructors.** Demonstrate the tool in class before the first assignment rather than trusting a short written description — students given only a minimal description struggled to discover that highlighting a subexpression is how you step it, and agreement that the tool was easy to get started with dropped sharply in the second deployment.
- **Designers.** Map tool actions onto the notation and rewriting steps you assess on paper so that practice builds [[transfer-of-learning|transfer]] to pen-and-paper exams: the first prover's point-and-click stepper produced weak transfer, and it was having students type out each evaluation step that coincided with fewer blank inductive steps on the exam.
- **Designers.** Remove the induction-start hurdle: 83% of students in the first deployment and 60% in the second selected an entire expression to induct on at some point, so seed the proof with a "proof hole" or an on-screen instruction at that step.
- **Instructors.** Deploy the prover where grading consistency matters, since the instructors reported that its explicit, unambiguous intermediate steps reduced ambiguity in grading student proofs.

## Limitations

- Two deployments in single classes at one institution, both taught by the same instructor: 25 students in the Fall 2025 undergraduate programming languages class and 16 in the Winter 2026 graduate class. The authors state that the assignments were specific to these two classes and may not generalize to others.
- The log analysis rests on a reduced sample: only 18 of the 25 first-deployment submissions could be analyzed, because 2 students never attempted the proof questions and 5 more could not be replayed due to replay bugs (the second deployment fared better, 14 of 16). The authors flag the risk that the unreplayed logs hide patterns, and that the very behavior causing a replay failure — such as extreme undo/redo use — could give a false picture of how those students worked.
- No control group: transfer was inferred by comparing Fall 2025 exam scores against four earlier offerings whose questions were not identical, so the authors state it is impossible to know whether the tool lowered performance or the Fall 2025 question was simply harder; only the Fall 2025 and Winter 2026 questions matched, and those cohorts differed in level (undergraduate versus graduate) with enrollments falling from 96 to 16 students across semesters.
- Most engagement and confidence evidence is self-report from a mid-semester survey completed by 21 of 25 undergraduates and 13 of 16 graduate students, incentivized with course credit, and the two deployments differed in how much training students received — an in-class demonstration versus a minimal written description — a difference the authors credit for much of the usability decline.

## Connected Concepts
- [[cs-education]]
- [[math-education]]
- [[scaffolding]]
- [[feedback]]
- [[formative-assessment]]
- [[intelligent-tutoring]]

## Connected Articles
- [[chatgpt-programming-education-text-mining]] — Pedagogical Promise and Peril of AI in Programming Education
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Learning-by-Teaching with ChatGPT
- [[llm-automated-grading-programming-comparison-2026]] — Comparing LLMs for automated assignment assessment in programming education
- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch?
- [[jost-llm-programming-education-learning-outcomes]] — The Impact of Large Language Models on Programming Education

## Citation

Keenan, Kheterpal, Jeannin, & Omar (2026). [*Hazel Prover: A Classroom Proof Assistant for Learning Structural Induction*](https://arxiv.org/abs/2608.23309).
