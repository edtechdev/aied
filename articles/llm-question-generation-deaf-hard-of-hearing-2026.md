---
title: "Exploring the Design of LLM-Powered Question Generation for Deaf and Hard of Hearing Learners"
created: "2026-08-18T14:55:00-04:00"
updated: "2026-08-20T03:14:48-04:00"
type: article
tags: [llm, generative-ai, special-education, inclusive-learning, automated-question-generation, online-teaching-and-learning, equity-in-ai-education, k-12, higher-ed, student-experience]
research_method: [system development]
audience: [student experience]
level: [special education, k 12, higher ed]
sources: ['raw/papers/10.1016_j.caeai.2026.100615.md']
confidence: high
---

Si Chen, Shuxu Huffman, Qingxiaoyang Zhu, Haotian Su, Qi Wang, & Raja Kushalnagar (2026) designed and evaluated an LLM-powered question-generation system tailored to [[inclusive-learning|Deaf and Hard of Hearing (DHH) learners]] for video-based learning. The study uses Language Deprivation Theory to uncover risks in learner–LLM interactions and derive design implications.

## Key Findings

- **Two novel question strategies:** Beyond baseline questions generated directly from a video transcript, the system introduces **Visual Questions** (identifying video timestamps where visual information is likely to be misinterpreted — rapid movements, misaligned captions, dense on-screen text) and **Emotion Questions** (identifying timestamps where prior DHH learners shared emotional reactions, such as frustration or confusion, captured via facial-expression analysis).
- **Three-phase pipeline:** Stage 1 generates baseline questions with GPT-3.5; Stage 2 incorporates DHH learner data (emotion and visual) to target overlooked learning moments; Stage 3 iteratively refines questions with DHH students and [[teacher-role|instructors]] for linguistic accessibility (simpler sentence structures, closed formats like multiple-choice and true/false). The final mini question bank contained 30 questions (10 per strategy).
- **User study (N=16):** The prototype generally improved [[self-efficacy]] (M=5.70, SD=1.12 on a 7-point scale). Base questions excelled at connecting text and image and understanding concepts; emotion questions raised awareness of shared difficulties; visual questions were valued more by Deaf than Hard-of-Hearing participants.
- **The accessibility gap:** LLMs struggle because text-based prompts are mismatched with DHH learners' sign-based first/native languages. Unnecessary linguistic complexity (compound sentences, double negatives) increases [[cognitive-offloading|cognitive load]] and confusion.
- **Deaf vs. HoH differences:** Deaf participants selected visual questions more than HoH learners, who reported fast caption-reading speed and less need for visual support.

## Implications for AI in Education

The study highlights the importance of considering **[[language-learning|language]] diversity and culture** in the design of LLM-based educational technology. LLMs offer significant potential for [[personalized-learning|personalized]] and [[automated-question-generation|automated question generation]] at scale, but they risk encoding [[bias-mitigation|technology bias]] against users whose first language is not spoken language. The design-based approach — layering learner-specific data into generation and iteratively revising with the target community — offers a template for [[equity-in-ai-education|equitable]] [[special-education]] tooling, grounded in [[universal-design-for-learning|Universal Design for Learning]], that centers the users' own language and experience rather than treating accessibility as an afterthought.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[special-education]]
- [[inclusive-learning]]
- [[automated-question-generation]]
- [[personalized-learning]]
- [[equity-in-ai-education]]
- [[student-experience]]
- [[universal-design-for-learning]]
- [[self-efficacy]]
- [[language-learning]]
- [[bias-mitigation]]
- [[cognitive-offloading]]
- [[neurodiversity]]

## Connected Articles

- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges: the case of disability
- [[dyslexlens-dyslexic-learners-ai]] — DysLexLens: A Low-Resource LLM Framework for Analysing Dyslexic Learners
- [[slidesqaqa-pedagogical-question-generation]] — SlideQAQA: Pedagogical Question Generation
- [[generate-then-validate-question-gen]] — Generate-then-validate question generation
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Question Generation

## Citation

Chen, S., Huffman, S., Zhu, Q., Su, H., Wang, Q., & Kushalnagar, R. (2026). [Exploring the design of LLM-powered question generation for deaf and hard of hearing learners](https://doi.org/10.1016/j.caeai.2026.100615). Computers and Education: Artificial Intelligence, 10, 100615.
