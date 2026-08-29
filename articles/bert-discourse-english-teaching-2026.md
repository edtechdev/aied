---
title: "Automatic discourse relation classification and feedback optimization in English teaching based on transformer BERT model"
created: "2026-08-23T15:00:00-04:00"
updated: "2026-08-23T15:00:00-04:00"
type: article
tags: [automated-assessment, llm, feedback, formative-assessment, educational-nlp, language-learning]
discipline: [language learning]
sources: ['raw/papers/bert-discourse-english-teaching-2026.md']
confidence: high
---

> **Synthesis:** Wang, Xu, Jia, and Fu (2026) built a closed-loop system for [[language-learning|English]] [[writing-education|writing]] [[assessment]] that moves beyond shallow surface features to deep discourse-level coherence. A fine-tuned BERT model (updating only the last four Transformer layers) classifies adjacent sentence pairs into causal, contrastive, progressive, or incoherent discourse relations; a joint attention-and-semantic-similarity mechanism localizes breakpoints; and a teacher-knowledge-graph-constrained generator produces editable diagnostic feedback. On 28,736 sentence pairs from 1,024 Chinese English-major essays, it achieved mean F1 ≥ 0.891 in long essays and outperformed state-of-the-art coherence models, with teacher-judged feedback adoption rates of 71.2%–88.4% and a feasible CPU-only deployment path.

## Core Finding

A [[llm|transformer-based]] system can both **detect** discourse-coherence defects (logical jumps, missing connections, ambiguous references) at the sentence-pair level and **generate actionable, teacher-aligned feedback** — bridging the gap between deep semantic modeling and instructional operability that plagues earlier automatic writing-evaluation systems. The approach closes a loop from defect [[ai-detection|detection]] to educational feedback rather than merely emitting a single score or a vague "logic needs strengthening" hint.

## Why Discourse-Level Assessment Matters

Conventional automated evaluation relies on shallow features — repeated vocabulary, connector frequency — that fail when text is superficially well-connected but semantically fragmented. Such systems cannot attribute incoherence to a specific cause (concept jump, referential obscurity, argument shift) and typically produce single scores or generic hints without diagnostic localization. This makes it hard for teachers to adjust instruction and for students to see a clear path to improvement. The authors position discourse-relation classification as the semantic foundation for precise, actionable [[feedback]].

## The BERT Architecture and Fine-Tuning Strategy

The system encodes each adjacent sentence pair as `[CLS]+Sentence-A+[SEP]+Sentence-B+[SEP]` and fine-tunes a truncated BERT base model, **freezing all but the last four Transformer layers** plus a new two-layer classification head that outputs a four-class distribution (causal, contrastive, progressive, incoherent; the first three treated as coherent for a binary judgment). **Weighted cross-entropy** addresses class imbalance, raising the rare "incoherent" class F1 from ~0.31 to ~0.78. A comparison of fine-tuning strategies found 4-layer fine-tuning superior to top-1 (lower ceiling) and full-12-layer (overfitting/oscillation) alternatives.

## Defect Localization: Attention and Similarity

For sentence pairs predicted incoherent, a joint localization mechanism computes cosine semantic similarity between average-pooled sentence vectors and averaged self-attention weights, using kernel-density-estimated thresholds (similarity 0.58, attention 0.42). This joint criterion distinguishes true semantic disconnection from normal topic evolution. A rule library (from PDTB connectives) detects missing connectives and linking misuse, while a coreference-resolution module scores syntax, distance, and semantic cues to flag ambiguous or inverted references. Defects are emitted as structured JSON for the feedback module.

## Knowledge-Graph-Constrained Feedback Generation

Feedback generation retrieves semantically similar high-scoring fragments (Sentence-BERT + HNSW) and drives a T5-small Seq2Seq model fine-tuned on 8,000 (error, correction) pairs, **modulated by a teacher-constructed [[knowledge-graph|knowledge graph]]** (47 triplets linking error types to teaching principles and suggested revisions, 89% error coverage). Output is filtered by [[teacher-role|instructor]]-derived rules, grammar-checked, and assembled into a hierarchical, editable PDF diagnostic report with example citations, delivered to LMS accounts.

## Results and Comparisons

- Classification: mean F1 ≥ 0.891 and accuracy ≥ 0.902 in long essays; performance ladder Proposed > DeBERTa > RoBERTa > Standard BERT > ALBERT > ELMo, with long texts exposing the context-vanishing problem of conventional models.
- Localization: mean mAP 0.758–0.918; narrative essays hardest (referential ambiguity), argumentative best for logical jumps.
- Feedback: adoption 71.2%–88.4%, Ref-BLEU-4 6.5%–12.3%, teacher ratings ≈3.42–4.21/5 — exceeding all baselines and state-of-the-art coherence models (CoUDA, DiscoScore, GCN-Coherence).
- Deployment: ~521ms latency and ~989MB peak memory per essay on a CPU-only Intel i7-11800H, enabling GPU-free teaching terminals.

## Limitations and Transferability

The corpus is Chinese English-learner data, but the framework — BERT fine-tuning, attention localization, knowledge-graph feedback — is claimed to transfer to other second-language writing contexts with corpus and rule-base replacement. Attention weights are used as an auxiliary heuristic for breakpoint localization, not as a faithful explanation of model predictions.

## Connected Concepts

- [[automated-assessment]]
- [[llm]]
- [[feedback]]
- [[formative-assessment]]
- [[ai-feedback-quality]]
- [[language-learning]]

## Connected Articles

- [[aiawe-automated-writing-evaluation]] — Automated writing evaluation
- [[gpt-human-rater-essay-assessment-2026]] — GPT vs. human rater essay assessment
- [[llm-formative-feedback-systematic-review-2026]] — LLM formative feedback review
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI vs. human EFL assessment

## Citation

Wang, W., Xu, L., Jia, X., & Fu, S. (2026). [Automatic discourse relation classification and feedback optimization in English teaching based on transformer BERT model](https://doi.org/10.1016/j.caeai.2026.100662). *Computers and Education: Artificial Intelligence*, 11, 100662.
