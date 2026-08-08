---
title: Automated Question Generation
created: 2026-05-08
updated: 2026-05-22
type: concept
tags: [nlp-education, assessment, llm, stem-education, automated-grading]
sources: [2512.10110]
confidence: high
---

# Automated Question Generation

## Synthesis

Automated question generation leverages NLP and LLMs to create educational assessments at scale. Wei & Stamper (2025) introduced the **generate-then-validate** paradigm, reducing hallucination by 62% compared to direct generation and achieving 89% accuracy on STEM datasets.

### Generate-Then-Validate Paradigm
1. **Generation Phase:** LLM produces candidate questions from source material
2. **Validation Phase:** Separate verification step filters invalid/low-quality items
3. **Refinement Loop:** Failed items trigger re-generation with corrective prompts

### Advantages Over Direct Generation
- **Reduced Hallucination:** Validation catches factually incorrect questions
- **Higher Relevance:** 23% improvement on relevance metrics vs. baseline LLMs
- **Scalability:** Enables rapid creation of formative assessments across domains

### Educational Applications
- **Formative Assessment:** Just-in-time questions for adaptive learning systems
- **STEM Education:** Validated on mathematics and science problem generation
- **Differentiated Instruction:** Generating multiple difficulty levels automatically

## Connections

- [[generate-then-validate-question-gen]] — Detailed implementation of the paradigm
- [[nlp-education]] — NLP techniques for educational applications
- [[automated-assessment]] — Reducing manual authoring burden
- [[stem-education]] — Primary validation domain for question generation
- [[llm-application-education]] — Generative AI for learning materials
- [[learnmate2-llm-adaptive-learning]] — StudyMate could integrate question generation

## References

Wei, Y., Stamper, J., et al. (2025). *Generate-Then-Validate: A Novel Question Generation Approach*. arXiv:2512.10110.

## Source

- [https://arxiv.org/abs/2512.10110](https://arxiv.org/abs/2512.10110)

## Citation

Automated question generation leverages NLP and LLMs to create educational assessments at scale. Wei & Stamper (2025). Automated Question Generation.

## Related Pages
- [[kt4eqg-personalized-question-generation]] — 7 of 8 papers in May 28 scan
- [[slidesqaqa-pedagogical-question-generation]] — four-stage LLM pipeline with deck-level pedagogical reasoning
- [[llm-handwritten-math-grading]] — Extends automated assessment research to handwritten math with vision-capable LLMs
- [[taklif-ai-interest-based-personalized-assignments]] — LLM-generated personalized assignments
- [[nsmq-riddles-science-math-benchmark]] — Riddle format as AI-generated educational content benchmark
- [[civic-education-ai-lesson-plans]] — AI-generated lesson plans show similar pattern: plausible output masking low cognitive demand
- [[code-gen]]
- [[mooc-to-maic]]
- [[deeptutor]]
