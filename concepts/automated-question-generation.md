---
title: Automated Question Generation
created: 2026-05-08
updated: 2026-05-22
type: concept
tags: [nlp-education, assessment, llm, stem-education, automated-grading, higher-ed, generative-ai, intelligent-tutoring, student-experience, scaffolding]
confidence: high
---

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

## References

Wei, Y., Stamper, J., et al. (2025). *Generate-Then-Validate: A Novel Question Generation Approach*. arXiv:2512.10110.

## Source

- https://arxiv.org/abs/2512.10110

## Connected Concepts

- [[personalized-learning]]
- [[human-in-the-loop-ai]]
- [[edtech-platform]]
- [[learning-analytics]]
- [[llm]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[pedagogical-llm-training]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[rag]]
## Connected Articles

- [[code-gen]]
- [[generate-then-validate-question-gen]]
- [[kt4eqg-personalized-question-generation]]
- [[nsmq-riddles-science-math-benchmark]]
- [[self-referential-l2-writing-llm-assessment]]
- [[slidesqaqa-pedagogical-question-generation]]
- [[taklif-ai-interest-based-personalized-assignments]]
- [[zerkouk-comprehensive-review-its-2025]]