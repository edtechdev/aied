---
title: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
created: "2026-05-22T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [automated-assessment, automated-question-generation, formative-assessment]
research_method: [experiment]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2605.19043.md']
confidence: high
audience: [researchers, assessment designers, instructors]
page_kind: [evaluation]
---

> **Synthesis:** Automated grading systems have enabled scalable assessment for many response types, but handwritten [[math-education|mathematics]] remains a barrier due to the complexity of multi-step solutions. Vision-capable [[llm|large language models (LLMs)]] offer new opportunities here, yet their reliability in authentic instructional settings remains poorly understood.

This paper presents an empirical evaluation of a vision-capable LLM-based grader for handwritten mathematical work. Using a single LLM call that combines transcription and rubric-based evaluation, the system was tested on student work from two university [[stem-education|STEM]] courses. The grader achieved high overall accuracy at the rubric-item level, with 87% of errors in the best model attributed to transcription failures rather than rubric misapplication. The authors categorize common error modes — image quality issues, hallucinated content, and incorrect handling of equivalent expressions — providing guidance for system design, prompt refinement, and deployment. This work extends the [[automated-assessment|Automated Grading]] pipeline to the previously unexplored domain of handwritten mathematics, complementing systems like [[lata-ferpa-compliant-local-llm-autograder]] that focus on typed LaTeX submissions. Unlike typed-response graders that achieve near-perfect rubric alignment, the vision pipeline introduces new failure modes around handwriting recognition that echo the diagnostic precision challenges identified in [[yasir-llm-tutoring-agents-2026]]. The finding that the LLM can correctly apply instructor rubrics when transcription succeeds suggests that [[syal-multimodal-dialogue-stem-2026]] approaches can bridge the gap between visual input and [[pedagogy|pedagogical]] assessment, while remaining sensitive to the limitations documented in [[drawedumath-vlm-struggling-students-2026]].

## What this means for practice

- **Instructors.** Use vision-capable [[llm|LLMs]] for low-stakes, formative handwritten work where immediate feedback outweighs occasional errors, and tell students the grading may be mistaken: Gemini 3 Flash reached 95% accuracy on individual rubric items, but high-stakes deployment demands greater reliability.
- **Instructors.** Require clear, well-organized photo submissions, because most errors (87%) stemmed from inaccurate transcription rather than rubric misapplication, and transcription degrades with poor photographic or organizational quality even when a human grader could infer intent.
- **Assessment designers.** Accept equivalent representations in the rubric: the model miscomputed equivalents and marked valid work wrong, including cases where students submitted rounded decimals instead of exact fractions.
- **Assessment designers.** Check the error direction before adopting a model, since Gemini 3 Flash's errors skewed toward false positives (2.5-to-1) and occasionally hallucinated correct answers, while GPT models showed more rubric-related errors (28% vs. 13%) that tended toward false negatives.
- **Researchers.** Report transcription errors and rubric-application errors as separate categories, as this study does, so that failure rates can be attributed to handwriting recognition rather than to rubric logic.

## Limitations

- Student work came from two courses at one large Midwestern research university — a numerical methods course (Course 1, n = 440) and an introductory dynamics course (Course 2, n = 245) — across five open-ended problems, so generalization beyond these contexts is untested.
- Accuracy depended on both model and question: Gemini-3-flash ranged from 89% rubric-item accuracy on Course 2 to over 99% on Course 1, while GPT-5.1 fell to 87% on a single question (C1-Q1) where students had to handle global sign reversals.
- The study measures agreement with instructor-defined rubric items, not learning outcomes; students were not exposed to any AI-generated grading during the study, so effects on learning or trust are unknown.
- Image capture conditions varied by course, and the qualitative error analysis rests on a small number of representative examples (Figure 3) rather than a systematic sample of failures.

## Connected Concepts

- [[automated-assessment]]
- [[math-education]]
- [[multimodal]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[cognitive-diagnosis]]
## Connected Articles

- [[lata-ferpa-compliant-local-llm-autograder]]
- [[yasir-llm-tutoring-agents-2026]]
- [[syal-multimodal-dialogue-stem-2026]]
- [[drawedumath-vlm-struggling-students-2026]]
- [[llm-cognitive-diagnosis-handwritten-math]]
## Citation

Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026). [Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs](https://arxiv.org/abs/2605.19043). International Conference on AI in Education (AIED 2026).
