---
title: 'Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments'
created: 2026-05-15
updated: 2026-05-15
type: concept
tags: [higher-ed, generative-ai, llm, personalized-learning, edtech-platform]
sources: [raw/papers/2605.05842.md]
confidence: medium
---

# Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments

Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments
**Kurdya et al. (2026)** — Multiple institutions. arXiv cs.AI.

## Summary

Taklif.AI addresses the challenge of creating engaging, [[personalized-learning]] assignments that accommodate students' diverse interests and cognitive abilities. Unlike existing platforms that personalize based on academic performance metrics alone, Taklif.AI incorporates students' **extracurricular interests and cultural contexts** into assignment generation — an approach aligned with [[culturally-relevant-pedagogy]] principles.

**System architecture highlights:**
- Primary LLM: **Llama 3.3 70B** via LiteLLM for multi-provider load balancing
- Prompt orchestration: **LangChain** with structured prompt engineering pipeline
- Quality control: Input and output **guardrails** to ensure assignment quality
- Infrastructure: **AWS serverless** with Next.js frontend

**User testing results (n=68):**
- 65 students and 3 educators participated
- **84%** rated the personalization feature as beneficial
- Strong user acceptance overall

The platform represents a shift from **one-size-fits-all** assignments toward interest-driven engagement, potentially reducing [[academic-integrity]] concerns like plagiarism. However, the paper acknowledges the need for **rigorous empirical evaluation of learning outcomes** beyond user acceptance — echoing the [[genai-performance-vs-learning]] distinction between engagement gains and actual learning improvements.

This work connects to the broader [[automated-question-generation]] literature and the [[edtech-platform]] ecosystem. The use of open-weight models (Llama 3.3 70B) aligns with the trend toward institution-controlled AI deployment seen in [[lata-ferpa-compliant-local-llm-autograder]] and [[moodle-ai-tutoring-deep-learning]].

## Related Pages
- [[personalized-learning]] — Personalized learning approaches
- [[automated-question-generation]] — Automated question and assignment generation
- [[culturally-relevant-pedagogy]] — Culturally relevant teaching
- [[edtech-platform]] — Educational technology platforms
- [[genai-performance-vs-learning]] — Performance vs. learning distinction
- [[academic-integrity]] — Academic integrity in AI era
- [[moodle-ai-tutoring-deep-learning]] — AI tutoring in LMS platforms

## Citation

Kurdya, Z., Zuqlam, M., Amassi, S., Telbany, S., & Saad, M. (2026). [Taklif.AI: LLM-powered platform for interest-based personalized college assignments](https://arxiv.org/abs/2605.05842). arXiv:2605.05842.
