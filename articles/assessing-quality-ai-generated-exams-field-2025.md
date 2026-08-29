---
title: "Assessing the Quality of AI-Generated Exams: A Large-Scale Field Study"
created: "2026-08-16T20:02:54-04:00"
updated: "2026-08-16"
type: article
tags: [automated-question-generation, automated-assessment, item-response-theory, assessment-validity, generative-ai, llm, higher-ed, ai-ed-evaluation]
research_method: [experiment, system development]
level: [higher ed]
category: [ai ed evaluation]
sources: ['raw/papers/assessing-quality-ai-generated-exams-field-2025.md']
confidence: high
---

> **Synthesis:** Isley, Gilbert, Kassos, Kocher, Nie, Brunskill, Domingue, Hofman, Legewie, Svoronos, Tuminelli and Goel (2025) report one of the largest field studies of AI-generated exam questions to date, evaluating an **iterative-refinement** approach to [[automated-question-generation]] in real college classrooms. Using an LLM (o3-mini) in a Self-Refine-style generate→judge→revise loop tailored to each course's instructor-provided materials, they produced custom 10-question multiple-choice exams for 71 college classes (~1,200 students) and benchmarked them against human-authored 2012 AP Statistics questions in 20 further classes (~500 students), for a final analysis sample of 91 classes and 1,686 students across computer science, [[math-education|mathematics]], chemistry and more. Analysing responses with a Bayesian hierarchical [[item-response-theory|2PL IRT]] model, they find AI-generated questions performed **on par with expert-created standardized-exam questions** in both difficulty and discrimination — the AI items were somewhat easier (β̄ = −0.45 vs. 0.35) but more discriminating (ᾱ = 1.3 vs. 1.2), with higher peak test information (I_max = 3.85, reliability 0.79 vs. 2.61, 0.72). The work provides evidence that generative AI can make high-quality, course-tailored [[assessment-validity|psychometrically sound]] assessments more readily available.

## Key Findings

**Iterative refinement for question generation.** The method mirrors Self-Refine: for each class, (1) an LLM generates one multiple-choice question grounded in the course description, syllabus and prior homework/exams; (2) an AI-judge labels it "good" or "bad" against functional criteria (course fit, uniqueness, not testing syllabus logistics, correct answer); and (3) the question and label are fed back into the generator prompt as few-shot good/bad examples. The loop repeats until 20 judge-approved questions are collected, which then pass a final judge that confirms appropriateness, difficulty and answer correctness, after which the 10 hardest are selected for the exam. A "good" example tests substantive content (e.g. programming-language design), whereas a "bad" one was rejected for testing class logistics rather than material.

**Large-scale field design.** 182 participating classes at US colleges corresponded to 164 unique courses, mostly STEM. Students took a common quantitative-reasoning pre-test at semester start (to establish a comparable ability scale), then the tailored exam at semester end; neither students nor instructors were told whether questions were AI- or human-generated. The final dataset comprised 91 classes and 1,686 students completing both assessments — 71 classes/1,208 students on the AI-generated exam and 20 statistics classes/478 students on AP-statistics-sourced benchmark questions (matched to each course via LLM-judged concept fit and difficulty).

**IRT analysis.** A Bayesian hierarchical two-parameter logistic (2PL) IRT model estimated student ability and item difficulty/discrimination jointly, with pre-test responses as anchor items to place all students on a common θ scale. The model converged well (max R̂ = 1.008) and was well calibrated (observed correct rates within posterior mass).

**Comparable difficulty.** AI-generated items averaged β̄_AI = −0.45 (students answered ~60% correctly) vs. β̄_STD = 0.35 for standardized items (~39% correct), a posterior mean difference E[δ_β] = −0.79 with 95% CI [−0.94, −0.65] and Pr(δ_β < 0) ≈ 1 — the AI items were calibrated easier, intentionally prioritizing appropriately challenging rather than maximally hard questions.

**Comparable — slightly higher — discrimination.** AI items averaged ᾱ_AI = 1.3 vs. ᾱ_STD = 1.2 ("moderate" discrimination by Baker's taxonomy for both), with E[δ_α] = 0.09, 95% CI [−0.092, 0.253], Pr(δ_α > 0) ≈ 0.85. A larger share of AI questions (36%) were "high" or "very high" discrimination than standardized items (21%), indicating the iterative-refinement pipeline reliably produces questions that distinguish stronger from weaker students.

**Test information and reliability.** AI-generated exams had higher peak information (I_max = 3.85 vs. 2.61), corresponding to reliability 0.79 vs. 0.72, and were maximally informative for slightly-below-average students (peaking near θ = −0.51), whereas standardized exams peaked near θ = 0.32. For all ability levels below θ = 0.75, AI exams were, on average, more informative (e.g. I(0) = 3.36 vs. 2.5).

**Limitations and implications.** The standardized-test comparison was limited to statistics courses (few public question banks exist elsewhere); only multiple-choice items were studied; the benchmark approximated but did not fully replicate a human expert tailoring questions per course; and the constant-θ assumption over the semester may not hold if AI and human-exam classes differed in ability change. The authors argue AI-assisted [[automated-question-generation]] can substantially reduce instructor workload, increase access to high-quality tailored assessments, and — with real-time generation — enable adaptive practice. Future work includes open-response generation with LLM grading, fine-tuning on collected response data to calibrate difficulty, and randomized assignment of AI vs. human exams.

## Connected Concepts

- [[automated-question-generation]]
- [[automated-assessment]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[generative-ai]]
- [[llm]]
- [[higher-ed]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration of exam questions
- [[generate-then-validate-question-gen]] — Generate-Then-Validate question generation
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated vs human assessment tasks in EFL
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-mediated authentic assessment (AAIWA)
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — Student LLM usage and course outcomes

## Citation

Isley, C., Gilbert, J., Kassos, E., Kocher, M., Nie, A., Brunskill, E., Domingue, B., Hofman, J., Legewie, J., Svoronos, T., Tuminelli, C., & Goel, S. (2025). [*Assessing the Quality of AI-Generated Exams: A Large-Scale Field Study*](https://arxiv.org/abs/2508.08314). [cs.CY]. https://doi.org/10.48550/arXiv.2508.08314
