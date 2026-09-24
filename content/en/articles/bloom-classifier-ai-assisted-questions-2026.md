---
title: "Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions"
created: "2026-09-24T09:35:19-04:00"
updated: "2026-09-24T09:35:19-04:00"
type: article
published: "2026-09-23"
sources: ['raw/papers/bloom-classifier-ai-assisted-questions-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [k 12, higher ed]
audience: [researchers, assessment designers, educational technology developers, instructors]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [pedagogy]
technology: [educational-nlp, machine-learning, llm]
assessment: [automated-assessment, automated-question-generation, assessment-validity, educational-measurement]
methods: [ai-ed-evaluation, benchmark, quantitative-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** The paper asks whether [[automated-assessment|automated Bloom taxonomy classifiers]] trained on human-curated item banks still work on novel [[automated-question-generation|AI-generated educational questions]]. Baseline transfer is poor: TFPOS-IDF [[machine-learning]] models fall to a macro F1 of 0.48 out of distribution, DistilBERT reaches 0.55, and [[llm|LLMs]] hold 0.79 — but only on the longer, Bloom-verb-rich Scaria set, where splicing questions into sentences lifts XGBoost to 0.59 and BERT to 0.62. On Asyncform splicing does nothing and appending learning objectives is what helps; [[transfer-of-learning|retraining]] on labeled out-of-distribution data is the largest gain of all.

## Key Findings
1. **The out-of-distribution drop is steep and graded.** Feature-based ML falls from a macro F1 of 0.88 in distribution to 0.48 on Scaria and 0.20 on Asyncform; DistilBERT goes from 0.89 to 0.55 and 0.30.
2. **LLMs are the most robust untrained option.** GPT-4.1 and Gemini Flash 3.1 reach 0.79 on Scaria under few-shot [[prompt-engineering|prompting]] but only 0.41 to 0.51 on Asyncform, where a majority-class baseline scores 0.07.
3. **AI-generated questions differ structurally.** Asyncform questions average 18.2 words against 9.3 in distribution, and only 10.5% (median) of their Bloom trigger verbs overlap the curated corpus, versus 35.1% for Scaria.
4. **Text splicing helps only self-contained items.** It raised XGBoost from 0.48 to 0.59 and BERT from 0.55 to 0.62 on Scaria, but changed nothing on Asyncform (0.22 and 0.29).
5. **Learning objectives anchor the label.** Concatenating the objective lifted BERT on Asyncform from 0.30 to 0.40 and to 0.54 after retraining, while splicing had no effect there.
6. **Retraining beats every feature-level fix.** Retrained XGBoost and BERT reached 0.82 and 0.77 on Scaria; retrained BERT reached 0.50 on Asyncform, at par with the best LLM result of 0.51.

## The dataset shift behind the failure

The study contrasts one curated corpus with two AI-generated ones. The IID set compiled by Lau (2025) holds N = 6,175 questions: short (mean 9.3 words), almost all single sentences, with 88.8% estimated at CEFR B1-B2. The OOD sets are Scaria et al. (2024), N = 1,833, and Asyncform, listed at N = 848 in the characteristics table against the 863 questions generated across English, Mathematics, and Science, labeled by three [[k-12]] teachers. Both are longer (means of 27.5 and 18.2 words) and more complex, with 43.2% and 17.3% running past one sentence. Bloom trigger verbs overlap the curated corpus at a median of 35.1% for Scaria and only 10.5% for Asyncform. The authors' hypothesis: generated questions are verbose and lean on context rather than explicit Bloom verbs, diluting the signals [[educational-nlp|educational NLP]] classifiers depend on.

## Baselines collapse out of distribution

Transfer is weak across the board. A naïve majority-class predictor scores 0.09 in distribution and 0.06 to 0.07 out of it. TFPOS-IDF features carry every ML model to roughly 0.88 in distribution, XGBoost highest at 0.88 ± 0.01, then fall to 0.48 ± 0.02 on Scaria and 0.20 ± 0.04 on Asyncform. DistilBERT follows the same path at 0.89, 0.55 ± 0.02, and 0.30 ± 0.03. [[llm|LLMs]] are the exception, spanning 0.41 to 0.79 out of distribution with no training at all. Gemini over-predicts low-order levels ("remember", "understand") in distribution, while XGBoost and BERT bias toward "understand" out of it. Accuracy also falls with length: BERT holds 80% on IID questions of 20 to 30 words, and ML and BERT fall to 50% on Scaria questions of 15 to 20 words.

## What feature engineering and retraining recover

Four configurations were tested: TFPOS-IDF alone, TFPOS-IDF plus NLP metrics and CEFR level, question concatenated with its learning objective, and DistilBERT pooled embeddings; the metric additions moved results little (RF on Asyncform 0.20 to 0.26). Splicing into sentences worked where items are self-contained, raising XGBoost from 0.48 to 0.59 and BERT from 0.55 to 0.62 on Scaria by isolating the Bloom-trigger sentence; on Asyncform it is inert. Retraining on labeled OOD data gave the largest gains for every model — on Scaria, logistic regression 0.71, XGBoost 0.82, BERT 0.77; on Asyncform, 0.43, 0.36, and 0.50, rising to 0.54 with learning objectives included. Its three deployment rules: BERT or LLMs with no labeled OOD data, feature engineering with a small labeled sample, retraining at N > 1,000 samples. LIME explains the residual gap: high-impact nouns, verbs, and adjectives (weights above 0.50) drive correct predictions on the curated and Scaria sets but are muted on Asyncform, where dataset domain links to high-impact verbs (χ2 = 31.44, p < 0.001) and nouns (χ2 = 8.54, p < 0.014), though not adjectives (p = 0.085).

## What this means for practice

- **Assessment designers.** Do not reuse a Bloom classifier trained on curated item banks for AI-generated questions without re-validating it: macro F1 falls from about 0.88 to between 0.20 and 0.55.
- **Instructors.** Keep each generated question's learning objective attached when checking its cognitive level; concatenating it lifted BERT from 0.30 to 0.40 on Asyncform, and to 0.54 after retraining.
- **[[educational-technology-developers|Educational technology developers]].** With no labeled data, use LLM zero- or few-shot classification rather than a fine-tuned classifier — 0.79 on Scaria and 0.51 on Asyncform against 0.20 for XGBoost.
- **Institutions.** Budget for annotation: retraining was the largest single gain on both OOD sets, and the paper's threshold is roughly N > 1,000 labeled samples.
- **Researchers.** Report the out-of-distribution condition separately and check accuracy against text length, since dilution is dataset-specific rather than constant.

## Limitations

- Asyncform labels come from three K-12 teachers with a single Bloom label per question; limited staff prevented multiple annotations, so no inter-rater agreement is reported.
- The generator output is reported inconsistently: 863 questions were generated, while the characteristics table lists N = 848 and the total OOD corpus is given as N = 2,696.
- Each generator contributes one OOD corpus, and retrained models are scored on the same two OOD sets used to report their gains.
- Splicing was tested only on XGBoost and DistilBERT, and on Asyncform the retrained models still show prediction bias, with LIME weights below 0.50.

## Connected Concepts

- [[automated-assessment]]
- [[automated-question-generation]]
- [[educational-nlp]]
- [[llm]]
- [[machine-learning]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[transfer-of-learning]]
- [[explainable-ai]]
- [[generative-ai]]

## Connected Articles

- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[llm-educational-question-cognitive-depth]] — From Memorization to Creation: Evaluating the Cognitive Depth of LLM-Generated Educational Questions
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[generate-then-validate-question-gen]] — Generate-Then-Validate: Question Generation for Education
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specific Adaptation

## Citation

Michael Lawrence Castanares, Princess Ventures, Allan Tan (2026). [Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions](https://arxiv.org/abs/2609.27749). arXiv preprint.