---
title: Can ChatGPT Replace the Teacher in Assessment? A Review of Research on the Use of Large Language Models in Grading and Providing Feedback
created: "2026-09-03T14:31:40-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [generative-ai]
assessment: [assessment, feedback]
sources:
  - raw/papers/jukiewicz-chatgpt-teacher-assessment-feedback-2026.md
confidence: high
audience: [assessment designers, instructors]
page_kind: [synthesis]
methods: [meta-analysis-systematic-review]
---

> **Synthesis:** **Can ChatGPT Replace the Teacher in Assessment? A Review of Research on the Use of Large Language Models in Grading and Providing Feedback** — This PRISMA-guided [[meta-analysis-systematic-review|systematic review]] of 42 empirical studies (2023–2025) evaluates whether [[llm|large language models]] (LLMs) can replace teachers in [[assessment]] and [[feedback]]. The authors conclude that LLMs match human raters on short, well-structured tasks with detailed rubrics, but cannot fully replace human judgment on complex, open-ended, or subjective work, recommending a [[human-in-the-loop-ai|human-in-the-loop]] hybrid model. Prompt quality, rubric detail, model version, and assessment language are the dominant determinants of [[ai-feedback-quality|grading and feedback quality]].

## Key Findings
- LLMs perform well on closed-ended tasks and short-answer questions, often achieving accuracy comparable to human evaluators, but struggle with complex, open-ended, or subjective assignments requiring in-depth analysis or creativity ([[automated-assessment]]).
- Prompt quality and the use of detailed scoring rubrics or exemplar answers significantly improve the accuracy and consistency of LLM-generated grades ([[prompt-engineering]]).
- The highest effectiveness is achieved in hybrid systems that combine AI-driven automatic grading with teacher oversight and verification ([[human-in-the-loop-ai]]).
- LLMs cannot fully replace [[teacher-role|teachers]]: performance declines for longer, multilingual, or nuanced tasks, and persistent issues include between-run inconsistency, [[hallucination-risk|hallucinations]], and feedback that is too generic or misaligned with the assigned grade.
- No uniform grading bias emerged across studies — models were sometimes more lenient, sometimes stricter, and often avoided extreme scores.
- LLMs can reduce teacher workload and deliver rapid, personalized [[feedback]] at scale, particularly in large or [[higher-ed|higher-education]] cohorts, while automating routine grading.

## What this means for practice

- **Instructors.** Reserve AI grading for closed-ended and short-answer work. Across the 42 studies, LLMs matched human evaluators on short, tightly structured tasks, but accuracy and consistency declined for longer, more open-ended, or subjective assignments.
- **Assessment designers.** Invest in rubric and prompt design before deploying any model: detailed scoring rubrics and exemplar answers were the dominant determinants of grading accuracy and consistency, and rubric-aware prompting lifted performance in the studies reviewed.
- **Instructors.** Calibrate per task and model version rather than assuming a fixed bias. Models were sometimes more lenient, sometimes stricter, and often avoided extreme scores, so no universal correction can be applied.
- **Instructors.** Keep teacher verification in the loop on nuanced, multilingual, or long-form work, where between-run inconsistency, hallucinations, and feedback misaligned with the assigned grade persisted.
- **Assessment designers.** Re-validate when the underlying model changes: newer versions (for example GPT-4 over GPT-3.5) were generally stronger but the advantage was neither universal nor guaranteed across tasks and domains.

## Limitations

- The review synthesizes 42 empirical studies published only after ChatGPT's launch (post-2022) and identified through one March 2025 search across four databases (Scopus, Web of Science, PubMed, EBSCO); the authors describe the results as highly heterogeneous with no clear universal trend across studies.
- The most common quality problem among included studies was small, convenience-based, or otherwise unrepresentative samples, and several lacked sufficient reporting of analytical procedures; the Mixed Methods Appraisal Tool was applied criterion-by-criterion with no quality score computed.
- Many included studies did not directly compare GenAI with human raters, so part of the evidence addresses whether model output looks reasonable rather than measured agreement with teacher grades.
- The evidence is already dated by the technology: the authors note that educational research assesses earlier model versions while industry moves on to reasoning and agentic models, and that grading metrics and benchmarks change quickly.

## Connected Concepts
- [[feedback]]
- [[ai-feedback-quality]]
- [[automated-assessment]]
- [[llm]]
- [[teacher-role]]
- [[assessment]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]

## Connected Articles
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]
- [[genai-teacher-feedback-comparison]]
- [[gpt-human-rater-essay-assessment-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]]
- [[llm-formative-feedback-systematic-review-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]

## Citation

Jukiewicz, M., & Wyrwa, M. (2026). [Can ChatGPT Replace the Teacher in Assessment? A Review of Research on the Use of Large Language Models in Grading and Providing Feedback](https://doi.org/10.3390/app16020680). *Applied Sciences*, 16(2), 680.
