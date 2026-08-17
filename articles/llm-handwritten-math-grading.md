---
title: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
created: "2026-05-22T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [automated-grading, llm, stem-education, higher-ed, efficacy-study, multimodal, automated-question-generation, llm-cognitive-diagnosis-handwritten-math, ai-tutoring, formative-assessment]
sources: ['raw/papers/2605.19043.md']
confidence: high
---

Automated grading systems have enabled scalable assessment for many response types, but handwritten mathematics remains a barrier due to the complexity of multi-step solutions. Vision-capable large language models (LLMs) offer new opportunities here, yet their reliability in authentic instructional settings remains poorly understood.

This paper presents an empirical evaluation of a vision-capable LLM-based grader for handwritten mathematical work. Using a single LLM call that combines transcription and rubric-based evaluation, the system was tested on student work from two university STEM courses. The grader achieved high overall accuracy at the rubric-item level, with 87% of errors in the best model attributed to transcription failures rather than rubric misapplication. The authors categorize common error modes — image quality issues, hallucinated content, and incorrect handling of equivalent expressions — providing guidance for system design, prompt refinement, and deployment. This work extends the [[automated-grading]] pipeline to the previously unexplored domain of handwritten mathematics, complementing systems like [[lata-ferpa-compliant-local-llm-autograder]] that focus on typed LaTeX submissions. Unlike typed-response graders that achieve near-perfect rubric alignment, the vision pipeline introduces new failure modes around handwriting recognition that echo the diagnostic precision challenges identified in [[llm-tutoring-feedback-diagnosis-gap]]. The finding that the LLM can correctly apply instructor rubrics when transcription succeeds suggests that [[multimodal-ai-tutoring]] approaches can bridge the gap between visual input and pedagogical assessment, while remaining sensitive to the limitations documented in [[educational-vlm-evaluation]].

## Connected Concepts

- [[automated-grading]]
- [[math-education]]
- [[multimodal]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[cognitive-diagnosis]]
## Connected Articles

- [[lata-ferpa-compliant-local-llm-autograder]]
- [[llm-tutoring-feedback-diagnosis-gap]]
- [[multimodal-ai-tutoring]]
- [[educational-vlm-evaluation]]
- [[llm-cognitive-diagnosis-handwritten-math]]
## Citation

Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva (2026). [Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs](https://arxiv.org/abs/2605.19043). arXiv:2605.19043. International Conference on AI in Education (AIED 2026).
