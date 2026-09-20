---
title: LLM-Generated Design Problems for Assessing Higher-Order Thinking in Project-Based Learning
created: "2026-07-14T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
pedagogy: [project-based-learning, scaffolding]
technology: [generative-ai, llm]
assessment: [formative-assessment]
research_method: [survey, mixed methods]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.11032.md']
confidence: high
audience: [instructors, assessment designers]
page_kind: [evaluation]
---

> **Synthesis:** Introduces 'design problems' (DPs): concise, scenario-based prompts that require applying knowledge in transfer contexts, generated with LLMs to assess [[critical-thinking|higher-order thinking]] (HOT) in [[project-based-learning|project-based learning]]. Traditional PjBL assessments often fail to capture HOT, especially transfer; DPs target that gap.

Bridges [[generative-ai]] generation with [[formative-assessment]] and [[active-learning]], linking to [[scaffolding]] of complex tasks and [[higher-ed]]/[[cs-education]] contexts. It contributes a concrete method for scaling HOT assessment and informs [[generative-ai]] used for evaluation rather than just content delivery.

## Key Findings

- **Design problems (DPs)** are concise, scenario-based prompts that require applying project concepts in **new situations**, targeting higher-order thinking (HOT) that traditional PjBL assessments often fail to capture, especially in transfer contexts.
- **Surveys of 31 instructors** showed that instructors value DPs for assessing HOT, but **creation effort is a barrier** to adoption.
- An evaluation of **80 [[llm]]-generated DPs** showed LLMs can produce **high-quality prompts with strong expert agreement**, effectively lowering the creation barrier.
- Students **rated DPs from different LLMs similarly**, and their performance on DP tasks showed **negligible correlation with traditional project grades**, suggesting DPs capture **distinct aspects of higher-order thinking** rather than duplicating existing measures.
- **Keystroke data suggested deeper cognitive [[student-engagement|engagement]]** through planning and revision behaviors while students worked on DP tasks.

## Study Design & Method

The study triangulates three perspectives: instructor perceptions (surveys with 31 instructors), LLM generation capability (80 generated DPs evaluated for quality and expert agreement), and [[student-experience|student experience]] (performance data plus keystroke logs). The negligible correlation between DP performance and traditional project grades is the key psychometric signal: it indicates the assessment captures a different construct — transfer-oriented higher-order thinking — than project artifacts alone.

## What this means for practice

- **Instructors.** Add a short, individually completed DP alongside the project artifact and grade it separately, particularly where AI use or collaboration may undermine individual learning: 28.2% of students were Implementers who scored well on the project but below passing on the DP, and DP grades correlated negligibly with project grades (Spearman's ρ from −0.05 to 0.03).
- **Instructors.** Frame DPs as transfer tasks in novel scenarios and say how much scope is expected, because open-ended demand creates a student-expert feasibility gap: students rated Feasibility lowest of the five criteria (M = 3.63, 14% disagreeing) while experts rated the same prompts at 0.94 or above.
- **Instructors.** Administer DPs on screen rather than on paper when the rubric rewards justification: the paper-based course averaged 44.80 words and 3.93/8, against 126.04 words and 6.64/8 and 154.80 words and 7.60/8 in the two web-based courses, and word count correlated with DP grade (ρ = 0.67).
- **Designers.** Budget instructor review into any generation pipeline instead of shipping model output as final: only 40/80 generated DPs (50%) drew perfect scores from both raters, and the rest included 13/80 too close to the original project, 16/80 ambiguous in scope, and 4/80 that lowered cognitive demand with an obvious solution path.
- **Designers.** Prompt a reasoning-oriented model by default — it beat the standard model on scenario quality (0.97 vs. 0.77, p < 0.001, d = 0.88) and feasibility (1.00 vs. 0.94, p = 0.018) — but keep human review in the loop, since students rated the two model types identically and student–expert agreement on the 39 shared DPs was κ = −0.11.

## Limitations

- The expert evaluation of the 80 generated DPs was conducted by two of the authors, which the paper states may introduce confirmation bias; it was mitigated through rubric calibration (Cohen's κ = 0.66 overall), criterion-level agreement checks, and triangulation with student ratings.
- Course comparisons are confounded by administration mode: one of the three deployments (DT3) used paper while the other two used a web-based interface.
- Keystroke metrics — mean initial planning latency of 167.2s and 114.6s, 12–16 characters deleted per 100 typed, and about 15 pauses per session longer than 10 seconds — are indirect behavioral proxies for planning, revision, and synthesis rather than direct measures of cognition.
- Classroom deployment samples are small and uneven, at 28, 40, and 10 students across the three courses, and because DPs are open-ended, grading remains subjective and may require additional support to scale.

## Connected Concepts

- [[generative-ai]]
- [[formative-assessment]]
- [[active-learning]]
- [[scaffolding]]
- [[higher-ed]]
- [[cs-education]]
- [[project-based-learning]]
- [[transfer-of-learning]]
- [[automated-question-generation]]
- [[critical-thinking]]

## Connected Articles

- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation
- [[mllm-scientific-visualization-literacy]] — Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework

## Citation

Ahmad D. Suleiman, Daqing Hou, Maliha Noushin Raida (2026). [LLM-Generated Design Problems for Assessing Higher-Order Thinking in Project-Based Learning](https://arxiv.org/abs/2607.11032). arXiv preprint.
