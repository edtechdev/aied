---
title: "Opening the Blackbox of LLM-Based Automated Essay Scoring: Insights into Feature Weighting Patterns and Score Validity"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-01T09:45:00-04:00"
type: article
tags: ["automated-essay-scoring", "llm", "educational-nlp", "assessment-validity", "writing-education"]
research_method: [benchmark]
audience: [researchers, assessment designers]
level: [higher ed]
sources: ["raw/papers/llm-essay-scoring-feature-weighting-2026.md"]
confidence: high

---

> **Synthesis:** Wang, Chen, Huang, and Lai (2026) systematically compare the scoring behavior of three LLMs (Qwen, GPT, and Gemini) with human raters on [[language-learning|English]] essays written by non-native learners. Analyzing sixteen textual features, they find strong overall alignment but distinct feature weighting patterns: the LLMs placed greater emphasis on grammatical accuracy, lexical sophistication, and syntactic complexity, while human raters prioritized content completeness and visual presentation with greater tolerance for minor linguistic errors. Across proficiency levels, human raters exhibited a more stable scoring framework, while LLMs showed larger cross-group shifts — placing more weight on language errors for low-proficiency students and increasingly rewarding linguistic sophistication for high-proficiency students.

## Key Findings

- Three LLMs (Qwen, GPT, Gemini) showed strong overall score alignment with human raters but distinct feature weighting patterns.
- LLMs emphasized grammatical accuracy, lexical sophistication, and syntactic complexity; human raters prioritized content completeness and visual presentation.
- Human raters exhibited a more stable scoring framework across proficiency levels; LLMs showed larger cross-group shifts.
- LLMs placed more weight on language errors for low-proficiency students and increasingly rewarded linguistic sophistication for high-proficiency students.
- LLMs integrated multiple features when scoring, with integration patterns varying by proficiency level.

## Implications for AI in Education

The study highlights both the potential and limitations of [[automated-essay-scoring|LLM-based scoring]] and underscores the importance of interpretability and transparency to enhance scoring validity. The finding that LLMs weight formal linguistic features more heavily than human raters — and shift their weighting by proficiency level — raises [[assessment-validity|validity]] and [[bias-mitigation|fairness]] concerns, particularly for non-native writers. For assessment designers, the results suggest that [[llm]] scoring should be calibrated against [[human-in-the-loop-ai|human judgment]] and audited for feature-weighting patterns. The study connects to [[educational-nlp]], [[writing-education]], and [[equity-in-ai-education]] [[research-methods-aied|research]] on [[automated-assessment|automated assessment]].

## Connected Concepts
- [[automated-essay-scoring]]
- [[llm]]
- [[educational-nlp]]
- [[assessment-validity]]
- [[writing-education]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]

## Connected Articles
- [llm-essay-assessment-framework-reliability-2026] — framework for evaluating LLMs in essay assessment
- [llms-do-not-grade-essays-like-humans-2026] — LLMs do not grade essays like humans
- [ai-scoring-language-bias-physics] — language bias in AI-based scoring
- [choi-anchor-aes-prompting-2025] — anchor-paper prompting for AES

## Citation
Wang, M., Chen, Y., Huang, X., & Lai, Y. (2026). [Opening the blackbox of LLM-based automated essay scoring: Insights into feature weighting patterns and score validity](https://doi.org/10.1016/j.caeai.2026.100568). *Computers and Education: Artificial Intelligence, 10*, 100568.
