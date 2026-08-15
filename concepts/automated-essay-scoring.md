---
title: Automated Essay Scoring
created: 2026-08-09
updated: 2026-08-09
type: concept
tags: [assessment, automated-assessment, writing-education, generative-ai, llm, prompt-engineering, ai-literacy, higher-ed, k-12, automated-grading]
confidence: high
---

> **Automated Essay Scoring (AES)** — the use of AI to evaluate and score written essays, spanning traditional statistical approaches, fine-tuned language models, and increasingly accessible LLM-based prompting strategies. AES research in this wiki covers scoring accuracy, fairness and bias, psychometric validity, and practical accessibility for educators.

Automated Essay Scoring has a long history in educational technology, from early statistical models to modern LLM-based approaches that can evaluate essays holistically without large pre-scored datasets. The key tension in AES research is between accuracy and accessibility — while fine-tuned models achieve strong results, they are resource-intensive and impractical for most educators.

### Key research themes

**Prompting-based AES** has emerged as the most accessible approach. The **[[choi-anchor-aes-prompting-2025|Choi et al. anchor paper study]]** shows that including exemplar essays in prompts brings LLM-human agreement close to human-human reliability, with GPT-4o mini achieving comparable results to GPT-4o at lower cost. This connects to broader [[prompt-engineering]] research and makes AES feasible for teacher use.

**Psychometric and trait-level scoring** moves beyond holistic scores. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** provides a psychometrically-aware framework for trait-adaptive scoring with ZPD-grounded feedback. **[[icle-plus-plus-essay-scoring|ICLE++]]** models fine-grained traits for holistic essay scoring, advancing the precision of automated evaluation.

**Bias and fairness** is a critical concern. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** found that AI scoring systematically underestimates students from linguistically diverse backgrounds, highlighting the need for [[bias-mitigation]] and [[equity-in-ai-education]] considerations in AES deployment.

**L2 and self-referential assessment** explores non-native writing contexts. **[[self-referential-l2-writing-llm-assessment|Profile-based L2 assessment]]** uses a self-referential approach comparing student writing to their own prior work rather than native-speaker norms.

### Connections to related concepts

AES sits at the intersection of [[automated-assessment]], [[writing-education]], and [[generative-ai]]. It connects to [[formative-assessment]] when used for feedback rather than grading, to [[feedback-loop]] when integrated into iterative writing processes, and to [[ai-literacy]] when educators understand and calibrate AES tools. The [[assessment-validity]] and [[educational-measurement]] concepts are essential for ensuring AES scores are meaningful and fair.

## Connected Concepts

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-grading]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[assessment-validity]]
## Connected Articles

- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]