---
title: "Learning by Teaching: Engaging Students as Instructors of Large Language Models in Computer Science Education"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [active-learning, learning-by-teaching]
technology: [generative-ai, intelligent-tutoring, llm]
research_method: [quasi-experiment]
discipline: [cs education]

sources: ['raw/papers/raw-yang-socrates-lbt.md']
confidence: high
audience: [instructors, educators]
level: [higher ed]
page_kind: [framework]
---

> **Synthesis:** Yang, Pujara, and Li (2025) present a [[pedagogy|pedagogical]] paradigm that **inverts the virtual-tutor model**: instead of an [[llm|LLM]] tutoring students, students act as instructors who must teach an LLM to solve problems. They develop strategies for designing questions with engineered knowledge gaps that only a student can bridge, and introduce **Socrates**, a system deploying this method with minimal overhead. Evaluated in an undergraduate course, the approach led to statistically significant improvements in student performance compared to historical cohorts.

## Inverting the Tutor–Student Relationship

[[llm|LLMs]] are often used as virtual tutors in [[cs-education|computer science education]], but this approach can foster passive learning and [[cognitive-offloading|over-reliance]] — the student receives answers rather than constructing them. This work inverts the model: the student teaches the LLM, forcing active construction of explanations and the identification of knowledge gaps.

## The Approach: Engineered Knowledge Gaps

The method relies on **questions with engineered knowledge gaps that only a student can bridge** — problems designed so the LLM cannot solve them without knowledge the student uniquely possesses. The student must explain, teach, and fill the gap, consolidating their own understanding through the act of [[teacher-role|teaching]]. The **Socrates** system operationalizes this with minimal overhead for instructors.

## Key Findings

- **Statistically significant improvements.** The [[active-learning]] method led to significant improvements in student performance compared to historical cohorts in an undergraduate course.
- **Practical and cost-effective.** Socrates demonstrates a low-overhead framework for using LLMs to deepen [[student-engagement|student engagement]] and mastery.
- **Addresses over-reliance.** By making students the instructors, the paradigm counters the passive learning and [[cognitive-offloading|over-reliance]] associated with LLM-as-tutor use.

## What this means for practice

- **Instructors.** Design assignments around "LLM-hard" questions with engineered knowledge gaps, and grade the clarity of the student's explanation in the novel context rather than the final output, so superficial prompting cannot earn credit.
- **Instructors.** Teach with a less-capable model where necessary and append a hidden prompt to constrain submissions, since the paradigm depends on the student's direct instruction rather than the model's raw reasoning.
- **Faculty developers.** Sequence a small dose of teaching assignments (four were used here) ahead of regular coursework, where the localized intervention produced the clearest gains on assignments and projects.
- **Administrators.** Budget for modest API costs: the playground and grader together ran for well under $100 per model across the term except gpt-4o at $169.90, so the approach is affordable within one course.
- **Researchers.** Test re-encoded problems directly against traditional problem formats in a controlled design, since this study cannot isolate the cognitive effects of re-encoding from other factors.

## Limitations

- The evaluation is quasi-experimental, comparing one offering against historical "before" cohorts rather than a concurrent, randomized control group.
- Evidence comes from a single undergraduate computer science course (Computer Organization and Assembly Language), with N ranging from roughly 49 to 80 per measure against historical cohorts of N = 133–237.
- Gains were statistically significant for assignments (p = 0.028) and projects (p = 0.018) but not for exams (p = 0.693), and the study included no long-term retention analysis.
- Full replication is limited by the inability to share raw student data and by dependence on stochastic, versioned commercial LLM APIs.

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[cs-education]]
- [[active-learning]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent at scale

## Citation

Yang, X., Pujara, H., & Li, J. (2025). [*Learning by Teaching: Engaging Students as Instructors of Large Language Models in Computer Science Education*](https://arxiv.org/abs/2508.05979). In *COLM 2025*.
