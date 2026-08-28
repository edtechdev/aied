---
title: "EduGuard: A Safe RAG-Based LLM Tutor for Programming Education"
created: "2026-07-20T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, generative-ai, intelligent-tutoring, stem-education, cognitive-offloading, hallucination-risk, feedback, benchmark, pedagogical-llm-training, rag]

sources: ['raw/papers/2607.15738.md']
confidence: high
---

EduGuard is a retrieval-augmented generation (RAG) tutoring framework that directly confronts the safety and pedagogical failures of unrestricted LLM tutors in introductory programming. Unrestricted tutors hallucinate, contradict course policy, reveal complete solutions, and foster passive dependence; EduGuard counters these with query understanding, instructor-approved course retrieval, pedagogical-strategy selection, rubric-aware generation, claim-level verification, and explicit overreliance control. The design maps onto the [[ai-tutor-safety-harms]] taxonomy and directly targets [[hallucination-risk]] and [[cognitive-offloading|Over-Reliance]] in deployed tutors.

To make evaluation provenance explicit the authors build BILearn-CS, a 600-query instructor-authored, TA-validated benchmark spanning concept questions, debugging, misconceptions, assignment support, code-mixed Bangla-English queries, and adversarial direct-answer prompts, then validate on a public CS50-style forum set and a small n=10 pre/post-test pilot. This contributes a rare benchmark for safe tutoring and extends the [[programming-its]] and [[llm-feedback-programming-classroom]] literature with a verifier-separated architecture (DeBERTa-v3-large-MNLI as an architecturally separate claim verifier) that improves on [[structured-llm-feedback-programming]] baselines and GPT-4o-mini and Llama Socratic tutors. The work is also a concrete instance of [[pedagogical-llm-training]] where safety and pedagogy are baked into the generation pipeline rather than retrofitted.

## Connected Concepts

- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[pedagogical-llm-training]]
- [[rag]]
- [[cs-education]]
- [[intelligent-tutoring]]
- [[benchmark]]
- [[generative-ai]]
## Connected Articles

- [[ai-tutor-safety-harms]]
- [[programming-its]]
- [[llm-feedback-programming-classroom]]
- [[structured-llm-feedback-programming]]
## Citation

Hossain, S. M. A., Shayoni, R. K., Mridha, M. F., & Shin, J. (2026). [EduGuard: A Safe RAG-Based LLM Tutor for Programming Education](https://arxiv.org/abs/2607.15738).
