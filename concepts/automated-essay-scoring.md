---
title: Automated Essay Scoring
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: concept
tags: [assessment, automated-assessment, writing-education, generative-ai, llm, prompt-engineering, ai-literacy, higher-ed, k-12]
discipline: [writing education]
level: [higher ed, k 12]
category: [assessment]

confidence: high
---

> **Automated Essay Scoring (AES)** — the use of AI to evaluate and score written essays, spanning traditional statistical approaches, fine-tuned language models, and increasingly accessible [[llm|LLM]]-based prompting strategies. AES [[research-methods-aied|research]] in this knowledge base covers scoring accuracy, fairness and bias, psychometric validity, and practical [[accessibility]] for educators.

## Questions to Consider

- Automated Essay Scoring has moved from traditional statistical models to LLM-based prompting. A key tension on this page is between accuracy and accessibility — fine-tuned models score well but are impractical for most educators. Which would you prioritize in your own context, and why?
- A major finding is that simply including exemplar essays in the prompt brings LLM-human agreement close to human-human reliability — and a cheaper model can match a more expensive one. What does this suggest about how much of AES quality is the model versus how it's prompted?
- The page warns that AI scoring can systematically underestimate students from linguistically diverse backgrounds. Before reading, if you saw an AI give a lower score to a non-native speaker's essay, would you have assumed it was a 'bias problem' or just 'the score'? What would change how you respond?
- A self-referential approach assesses L2 writers by comparing their writing to their own prior work rather than to native-speaker norms. How does the choice of comparison baseline change what a score means — and which students might it treat more fairly?
- AES intersects with formative assessment when used for feedback rather than grading. When would a machine's feedback on an essay be genuinely useful to a developing writer, and when might it flatten the kinds of [[qualitative-research|qualitative]] feedback a human editor would give?

## Introduction

Automated Essay Scoring has a long history in educational technology, from early statistical models to modern LLM-based approaches that can evaluate essays holistically without large pre-scored datasets. The key tension in AES research is between accuracy and accessibility — while fine-tuned models achieve strong results, they are resource-intensive and impractical for most educators.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang et al.]]** RACES uses reward alignment to make LLM essay scoring both accurate and consistent, addressing a core AES validity concern.

## Key research themes

**Prompting-based AES** has emerged as the most accessible approach. The **[[choi-anchor-aes-prompting-2025|Choi et al. anchor paper study]]** shows that including exemplar essays in prompts brings LLM-human agreement close to human-human reliability, with GPT-4o mini achieving comparable results to GPT-4o at lower cost. This connects to broader [[prompt-engineering]] research and makes AES feasible for teacher use.

**Psychometric and trait-level scoring** moves beyond holistic scores. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** provides a psychometrically-aware framework for trait-adaptive scoring with [[sociocultural-learning|ZPD]]-grounded feedback. **[[icle-plus-plus-essay-scoring|ICLE++]]** models fine-grained traits for holistic essay scoring, advancing the precision of automated evaluation.

**Bias and fairness** is a critical concern. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** found that AI scoring systematically underestimates students from linguistically diverse backgrounds, highlighting the need for [[bias-mitigation]] and [[equity-in-ai-education]] considerations in AES deployment.

**L2 and self-referential assessment** explores non-native writing contexts. **[[self-referential-l2-writing-llm-assessment|Profile-based L2 assessment]]** uses a self-referential approach comparing student writing to their own prior work rather than native-speaker norms.

**Interpretability and feature weighting** opens the blackbox of how LLMs actually score. **[[llm-essay-scoring-feature-weighting-2026|Wang et al. (2026)]]** compared three LLMs (Qwen, GPT, Gemini) with human raters on non-native English essays across sixteen textual features, finding strong overall alignment but distinct weighting: LLMs emphasized grammatical accuracy, lexical sophistication, and syntactic complexity, while human raters prioritized content completeness and visual presentation. Critically, LLMs shifted their weighting by proficiency level — placing more weight on language errors for low-proficiency students and increasingly rewarding linguistic sophistication for high-proficiency students — whereas human raters maintained a more stable framework. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye, and Yan (2026)]]** extend this with a five-model evaluation framework (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) on 60 long essays, using causal discovery to reveal distinct evaluative heuristics: most models prioritized lexical precision and fluency, while others emphasized syntactic complexity or cross-domain integration, and some showed inconsistency, score compression, or systematic underestimation. Together these studies establish that AES validity depends not only on overall agreement but on *how* models weight features and whether that weighting is stable across learner subgroups — directly informing [[assessment-validity]] and [[bias-mitigation]] auditing.

**Item-type boundaries and the limits of essay grading.** In a mixed-format university exam, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] found ChatGPT-5's concordance with faculty was substantial-to-near-perfect on objective items (CCC 0.935–1.000) but dropped sharply on open-ended responses — near-zero to negative for short-answer and only 0.341–0.854 for essay questions — and a structured rubric did not consistently improve essay agreement. This bounds AES validity: model fluency helps on well-specified items but does not carry over to holistic essay scoring, where contextual interpretation of partial-credit responses still favors [[human-in-the-loop-ai|human judgment]].

### Connections to related concepts

AES sits at the intersection of [[automated-assessment]], [[writing-education]], and [[generative-ai]]. It connects to [[formative-assessment]] when used for feedback rather than grading, to [[feedback|Feedback Loop]] when integrated into iterative writing processes, and to [[ai-literacy]] when educators understand and calibrate AES tools. The [[assessment-validity]] and [[educational-measurement]] concepts are essential for ensuring AES scores are meaningful and fair.

## Connected Concepts

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]
## Connected Articles
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: reward-aligned consistent essay scoring with LLMs

- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[llm-essay-scoring-feature-weighting-2026]] — Feature weighting patterns in LLM-based essay scoring (Wang et al. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Framework for evaluating LLMs in essay assessment (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
