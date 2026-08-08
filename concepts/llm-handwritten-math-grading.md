---
title: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
created: 2026-05-22
updated: 2026-05-22
type: concept
tags: [automated-grading, llm, stem-education, higher-ed, efficacy-study, multimodal]
sources: ["raw/papers/2605.19043.md"]
confidence: high
---

# Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs

**Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026)** — University of Illinois Urbana-Champaign. International Conference on AI in Education (AIED 2026).

## Summary

Automated grading systems have enabled scalable assessment for many response types, but handwritten mathematics remains a barrier due to the complexity of multi-step solutions. Vision-capable large language models (LLMs) offer new opportunities here, yet their reliability in authentic instructional settings remains poorly understood.

## Key Findings

This paper presents an empirical evaluation of a vision-capable LLM-based grader for handwritten mathematical work. Using a single LLM call that combines transcription and rubric-based evaluation, the system was tested on student work from two university STEM courses. The grader achieved high overall accuracy at the rubric-item level, with 87% of errors in the best model attributed to transcription failures rather than rubric misapplication. The authors categorize common error modes — image quality issues, hallucinated content, and incorrect handling of equivalent expressions — providing guidance for system design, prompt refinement, and deployment. This work extends the [[automated-grading]] pipeline to the previously unexplored domain of handwritten mathematics, complementing systems like [[lata-ferpa-compliant-local-llm-autograder]] that focus on typed LaTeX submissions. Unlike typed-response graders that achieve near-perfect rubric alignment, the vision pipeline introduces new failure modes around handwriting recognition that echo the diagnostic precision challenges identified in [[llm-tutoring-feedback-diagnosis-gap]]. The finding that the LLM can correctly apply instructor rubrics when transcription succeeds suggests that [[multimodal-ai-tutoring]] approaches can bridge the gap between visual input and pedagogical assessment, while remaining sensitive to the limitations documented in [[educational-vlm-evaluation]].

## Related Pages

- [[llm-cognitive-diagnosis-handwritten-math]] — MathCog benchmark: 18 LLMs evaluated on cognitive skill diagnosis from handwritten math; all F1 < 0.5; systematic over-attribution and hallucination of evidence (2025)
- [[automated-question-generation]] — Extends automated assessment research to handwritten math with vision-capable LLMs
- [[lata-ferpa-compliant-local-llm-autograder]] — Complements LaTA's typed-response grading with vision-based handwritten math assessment
- [[llm-tutoring-feedback-diagnosis-gap]] — Shares diagnostic precision challenges: transcription errors are the primary failure mode
- [[multimodal-ai-tutoring]] — Demonstrates vision+LLM pipeline for authentic STEM assessment at scale
- [[educational-vlm-evaluation]] — Vision-capable LLM evaluation in authentic instructional settings with real student work
- [[automated-formative-assessments-a-level-sciences]] — Automating the marking of handwritten mock exams enables much higher formative-assessment frequency 

## Citation

Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026). [Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs](https://arxiv.org/abs/2605.19043). arXiv:2605.19043. International Conference on AI in Education (AIED 2026).
