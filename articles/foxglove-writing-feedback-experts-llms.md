---
title: "FOXGLOVE: Understanding Goal-Oriented and Anchored Writing Feedback from Experts and LLMs on Argumentative Essays"
created: "2026-06-09T04:33:04-04:00"
updated: "2026-09-18T19:55:59-04:00"
type: article
technology: [llm]
assessment: [feedback, formative-assessment]
audience: [software developers]
research_method: [benchmark]
discipline: [writing education]
level: [secondary, k 12, higher ed]

sources: ['raw/papers/2606.06271.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Introduces **FOXGLOVE**, a dataset of 696 feedback comments by trained writing instructors on 69 twelfth-grade argumentative essays, paired with 1,644 comments from four frontier LLMs — totaling 2,340 comments with expert quality ratings. Provides the first systematic comparison of [[llm]] and expert feedback on three pedagogically critical dimensions: **goal-orientation, anchoring to specific sentences, and prioritization**.

**Key findings:** Instructors and LLMs distribute feedback similarly across revision goals and essay positions, but diverge significantly on which specific sentences receive feedback. Models write more complex feedback and use fewer questions than human instructors. LLM feedback receives higher quality ratings on most dimensions — but much of this advantage is attributable to lengthier comments inflating perceived quality.

This work directly informs the design of [[formative-assessment|AI writing feedback systems]], highlighting the need to evaluate [[ai-feedback-quality|feedback quality]] beyond surface-level ratings and to consider [[pedagogy|pedagogical]] factors like [[writing-education|feedback anchoring and prioritization]]. Relevant to both [[k-12|secondary]] and [[higher-ed|higher education]] writing instruction.

## What this means for practice

- **Developers.** Treat comment length as a confound before claiming a quality win: LLM feedback received higher expert ratings on six of seven quality dimensions, but the authors attribute much of that advantage to models generating substantially longer comments.
- **Developers.** Do not assume a model is choosing the right moment to intervene: instructors and models diverge on the specific sentences they flag, and human-machine urgency ranking reached only 38.5% exact agreement even though both distribute feedback similarly across argumentative goals and essay positions.
- **Developers.** Preserve the dialogic register of expert feedback in generation: models write more complex comments and use fewer questions than trained instructors, a shift that changes how the feedback reads to a student.
- **Developers.** Evaluate against the schema you actually intend to deploy, and expect it to underrepresent moves outside it: feedback here is tied to predefined argumentative goals and urgency ranks, which makes encouragement and praise hard to express.
- **Developers.** Use the paired dataset as a benchmark for connecting rated quality to revision outcomes rather than optimizing toward expert quality ratings alone, since the rated-quality signal tracks length as much as usefulness.

## Limitations

- The corpus is 69 twelfth-grade argumentative essays with feedback elicited for the study rather than drawn from authentic instructional settings: feedback givers wrote on assigned essays with no ongoing relationship with the writer and no knowledge of the writer's history.
- Expert quality ratings cover only a subset of the 2,340 comments — 1,430 ratings produced by two trained writing instructors — so the quality comparison rests on a two-rater panel.
- Human feedback came from 14 recruited U.S.-based writing instructors under one shared protocol and one schema, on a single genre and grade level.
- The goal-and-urgency schema privileges feedback organized around predefined argumentative moves and may draw attention disproportionately to the feedback types the schema makes easy to express, so results characterize feedback within that paradigm.

## Connected Concepts

- [[formative-assessment]]
- [[ai-feedback-quality]]
- [[writing-education]]
- [[k-12]]
- [[higher-ed]]
- [[feedback]]
- [[assessment]]
- [[llm]]
## Connected Articles

- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback Across a Semester of Writing
- [[icle-plus-plus-essay-scoring]] — ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[cyberscholar-genai-writing-feedback]] — Generative AI Feedback, English Writing and Teacher Rubrics: A Multiple-Case Study of CyberScholar
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models

## Citation

Liu, Y., Song, Y., Gallagher, J., Sterman, S., & August, T. (2026). [*FOXGLOVE: Understanding Goal-Oriented and Anchored Writing Feedback from Experts and LLMs on Argumentative Essays*](https://arxiv.org/abs/2606.06271).
