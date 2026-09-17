---
title: "Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments"
created: "2026-05-15T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning, edtech-platform]
assessment: [automated-question-generation]
ethics: [culturally-relevant-pedagogy]
research_method: [system development, user study]
level: [higher ed]
sources: ['raw/papers/2605.05842.md']
confidence: medium
audience: [instructors, edtech designers]
---

> **Synthesis:** Kurdya and colleagues (2026) present **Taklif.AI**, a platform that uses [[llm|large language models]] to generate [[personalized-learning|personalized]] college assignments from students' own interests and cultural contexts rather than from academic-performance metrics alone. The stated problem is educators' difficulty in producing engaging assignments that fit diverse interests and cognitive abilities: traditional one-size-fits-all tasks are linked in the paper to reduced engagement and increased reliance on unethical practices such as [[academic-integrity|plagiarism]]. The platform uses a structured [[prompt-engineering]] pipeline with input and output [[guardrails]], a serverless AWS architecture with a Next.js frontend, **Llama 3.3 70B** as the primary model via LiteLLM for multi-provider load balancing, and LangChain for prompt orchestration. Preliminary user-acceptance testing with 68 participants (65 students and three educators) found positive reception, with **84%** rating the personalization feature as beneficial; the authors treat rigorous empirical evaluation of learning outcomes as future work.

Taklif.AI differs from performance-driven personalization by incorporating students' **extracurricular interests and cultural contexts** into assignment generation — an approach aligned with [[culturally-relevant-pedagogy]] principles and with the wider [[personalized-learning]] literature on interest-based task design.

**System architecture highlights:**

**System architecture highlights:**
- Primary LLM: **Llama 3.3 70B** via LiteLLM for multi-provider load balancing
- Prompt orchestration: **LangChain** with structured [[prompt-engineering|prompt engineering]] pipeline
- Quality control: Input and output **[[guardrails]]** to ensure assignment quality
- Infrastructure: **AWS serverless** with Next.js frontend

**User testing results (n=68):**
- 65 students and 3 educators participated
- **84%** rated the personalization feature as beneficial
- Strong user acceptance overall

The platform represents a shift from **one-size-fits-all** assignments toward interest-driven [[student-engagement|engagement]], potentially reducing [[academic-integrity]] concerns like plagiarism. However, the paper acknowledges the need for **rigorous empirical evaluation of [[learning-gains|learning outcomes]]** beyond user acceptance — echoing the [[genai-performance-vs-learning]] distinction between engagement gains and actual learning improvements.

This work connects to the broader [[automated-question-generation]] literature and the [[edtech-platform]] ecosystem. The use of open-weight models (Llama 3.3 70B) aligns with the trend toward institution-controlled AI deployment seen in [[lata-ferpa-compliant-local-llm-autograder]] and [[moodle-ai-tutoring-deep-learning]].

## Connected Concepts

- [[personalized-learning]]
- [[culturally-relevant-pedagogy]]
- [[academic-integrity]]
- [[automated-question-generation]]
- [[edtech-platform]]
- [[student-engagement]]
- [[higher-ed]]
- [[motivation]]
## Connected Articles

- [[genai-performance-vs-learning]]
- [[lata-ferpa-compliant-local-llm-autograder]]
- [[moodle-ai-tutoring-deep-learning]]
## Citation

Kurdya, Z., Zuqlam, M., Amassi, S., Telbany, S., & Saad, M. (2026). [Taklif.AI: LLM-powered platform for interest-based personalized college assignments](https://arxiv.org/abs/2605.05842).
