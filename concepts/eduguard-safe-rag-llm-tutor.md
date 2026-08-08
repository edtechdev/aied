---
title: 'EduGuard: A Safe RAG-Based LLM Tutor for Programming Education'
created: 2026-07-20
updated: 2026-07-20
type: concept
tags: [llm, generative-ai, intelligent-tutoring, stem-education, over-reliance, hallucination-risk, feedback-loop, benchmark]
sources: [raw/papers/2607.15738.md]
confidence: high
---
# EduGuard: A Safe RAG-Based LLM Tutor for Programming Education

**Hossain, S. M. A., Shayoni, R. K., Mridha, M. F., & Shin, J. (2026)** — [arXiv:2607.15738 (cs.CY)](https://arxiv.org/abs/2607.15738)
EduGuard is a retrieval-augmented generation (RAG) tutoring framework that directly confronts the safety and pedagogical failures of unrestricted LLM tutors in introductory programming. Unrestricted tutors hallucinate, contradict course policy, reveal complete solutions, and foster passive dependence; EduGuard counters these with query understanding, instructor-approved course retrieval, pedagogical-strategy selection, rubric-aware generation, claim-level verification, and explicit overreliance control. The design maps onto the [[ai-tutor-safety-harms]] taxonomy and directly targets [[hallucination-risk]] and [[over-reliance]] in deployed tutors.

To make evaluation provenance explicit the authors build BILearn-CS, a 600-query instructor-authored, TA-validated benchmark spanning concept questions, debugging, misconceptions, assignment support, code-mixed Bangla-English queries, and adversarial direct-answer prompts, then validate on a public CS50-style forum set and a small n=10 pre/post-test pilot. This contributes a rare [[benchmark]] for safe tutoring and extends the [[programming-its]] and [[llm-feedback-programming-classroom]] literature with a verifier-separated architecture (DeBERTa-v3-large-MNLI as an architecturally separate claim verifier) that improves on [[structured-llm-feedback-programming]] baselines and GPT-4o-mini and Llama Socratic tutors. The work is also a concrete instance of [[pedagogical-llm-training]] where safety and pedagogy are baked into the generation pipeline rather than retrofitted.

## Related Pages
- [[ai-tutor-safety-harms]] — EduGuard's verification + overreliance-control modules operationalise the safety-harms taxonomy for programming tutors.
- [[over-reliance]] — Built-in overreliance control prevents passive dependence on the LLM tutor.
- [[llm-feedback-programming-classroom]] — A RAG programming tutor evaluated on CS50-style forum queries and a classroom pilot.
- [[structured-llm-feedback-programming]] — Outperforms rubric-prompting and same-model RAG baselines via claim-level verification.
- [[pedagogical-llm-training]] — Bakes safety and pedagogical strategy selection into the generation pipeline.
- [[programming-its]] — Extends intelligent tutoring for programming with instructor-approved retrieval and verification.
- [[didactical-teacher-assistant-dimensional-modeling]] — Encoding tutoring strategy in an explicit didactic layer (rather than implicit LLM prompting) makes 

## Citation

Hossain, S. M. A., Shayoni, R. K., Mridha, M. F., & Shin, J. (2026). EduGuard: A Safe RAG-Based LLM Tutor for Programming Education. arXiv:2607.15738.
