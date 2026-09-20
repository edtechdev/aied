---
title: "Towards Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs"
created: "2026-05-05T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-education]
technology: [human-in-the-loop-ai, llm, personalized-learning]
assessment: [automated-assessment, automated-question-generation]
methods: [benchmark]
audience: [software developers]
discipline: [writing education]
level: [higher ed]
sources: ['raw/papers/2605.04298.md']
confidence: medium
page_kind: [evaluation]
---
> **Synthesis:** Bannò, Knill & Gales (2026) propose a paradigm shift in automated essay scoring: from **inter-learner ranking** to **intra-learner profiling**. Instead of asking "how does this essay rank against others?", their self-referential framework asks "what are this specific learner's strengths and weaknesses?"
## Key Findings
Using the ICNALE GRA dataset annotated by up to 80 trained raters and calibrated with two-facet Rasch modeling:
- **LLMs outperform single human raters** at identifying relative weaknesses (negative feedback) across proficiency aspects
- **Human raters remain stronger** at identifying relative strengths (positive feedback)
- Traditional rank-based correlation metrics **mask diagnostic behavior** — high correlations can hide poor intra-learner discrimination
## Connections to Knowledge Base
- Paradigm shift from [[automated-assessment|Automated Grading]] ranking to profiling
- Aligns with [[sequenced-ai-feedback-learning]] emphasis on [[ai-feedback-quality|feedback quality]] over quantity
- Extends [[nie-personavlm-long-term-personalization-2026]] to assessment contexts — profiling over time
- Complements [[human-in-the-loop-ai]] by identifying where humans vs. AI add value
## What this means for practice

- **Software developers.** Score each learner against their own profile instead of a cohort rank: classify every analytic aspect as a relative strength or weakness against that learner's mean, and report F0.5 for both feedback directions rather than a Spearman correlation against human scores, since high rank correlations can mask poor [[automated-essay-scoring|diagnostic]] behavior through intercorrelation and halo effects.
- **Software developers.** Split the labor between model and teacher along the measured asymmetry — GPT-4.1 attained the highest average F0.5 for negative feedback (relative weaknesses) while the operational rater outperformed all three models on most Language aspects (Intelligibility, Accuracy, and Fluency) plus Comprehensibility and Purposefulness, so a model is best used to flag weaknesses and a teacher to confirm strengths.
- **Software developers.** Budget for ensembles, not single raters: on Logicality it took an ensemble of three raters to outperform the best-performing models (GPT-4.1 on negative feedback and Llama 3.1 on positive feedback).
- **Researchers.** Test the framework on a second corpus before trusting it. This is the first self-referential framework for analytic assessment, implemented zero-shot on one dataset, so treat profile-level outputs as diagnostic hypotheses rather than settled [[educational-measurement|measurement]].

## Limitations

- Everything rests on a single dataset — ICNALE GRA with N = 140 unique essays, four of them written by L1 speakers and kept rather than discarded — and the authors name that single-dataset reliance as their first caution.
- The learner population is narrow: the data focuses on Asian learners within an English as a Lingua Franca framework, and generalization to other L1 backgrounds or other second languages is untested.
- The strength/weakness split uses a one-standard-deviation threshold, which the authors describe as a heuristic choice rather than a psychometrically derived cutoff, and the Attitude aspects (Willingness and Involvement) show lower inter-rater agreement — so model-versus-human differences there likely reflect noise in the reference labels.
- The model comparison is zero-shot and limited to three LLMs — GPT-4.1, Qwen 2.5 72B, and Llama 3.1 70B, the latter two 4-bit quantized — so quantization and prompt design are uncontrolled.

## Connected Concepts
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[writing-education]]
- [[language-learning]]
- [[automated-question-generation]]
- [[human-in-the-loop-ai]]
- [[llm]]
- [[educational-measurement]]- [[english-education]]

## Connected Articles
- [[ai-learning-companions-framework]]
- [[ground-truth-reliability-aied]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[sequenced-ai-feedback-learning]]
- [[nie-personavlm-long-term-personalization-2026]]
- [[icle-plus-plus-essay-scoring]]
## Citation
Bannò, S., Knill, K., & Gales, M. (2026). [*Towards Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs*](https://arxiv.org/abs/2605.04298).
