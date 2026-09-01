---
title: "How to Train Your Dragon: Evaluating Prompting and Fine-Tuning for GPT-Based Item Generation in L2 Listening Assessment"
created: "2026-09-01T10:00:00-04:00"
updated: "2026-09-01T10:00:00-04:00"
type: article
sources: ["raw/papers/gpt-item-generation-l2-listening-2026.md"]
tags: ["automatic-item-generation", "prompt-engineering", "fine-tuning", "gpt", "listening-assessment", "second-language-assessment", "large-language-models"]
---

## Overview

Aryadoust and Wong compare **prompting vs. fine-tuning** for advancing automatic item generation (AIG) in L2 listening assessment. Recognizing that iterative prompt refinement eventually plateaus while outputs remain inconsistent or misaligned with assessment constructs, they first refined an instruction design over three successive iterations to produce an optimized prompt, then **fine-tuned GPT-4.1** using the same prompt to isolate the effect of model adaptation. They generated **40 tests and 240 multiple-choice items** for evaluation.

## Key Findings

- **Iterative prompt refinement yields measurable but plateauing improvements** in item quality; outputs can remain inconsistent or construct-misaligned.
- **Fine-tuning GPT-4.1 on the optimized prompt** improves item generation beyond prompting alone, isolating model adaptation (not prompt design) as the driver of gains.
- The study provides a practical evaluation of AIG for L2 listening assessment, with implications for item quality, consistency, and construct alignment.
- Findings inform when assessment developers should invest in fine-tuning vs. prompt refinement.

## Implications for Practice

- **For assessment developers:** When prompt engineering plateaus, fine-tuning the LLM on the optimized prompt can improve item generation quality.
- **For language testers:** AIG can scale L2 listening item production, but construct alignment and consistency require careful prompt and model optimization.
- **For researchers:** The controlled comparison (holding prompt constant) offers a [[research-methods-aied|methodological]] template for isolating model-adaptation effects in AIG.

## Connected Concepts

- [[llm]]
- [[language-learning]]
- [[assessment-validity]]
- [[prompt-engineering]]

## Connected Articles

- [[llm-item-difficulty-prediction]] — LLM-based item difficulty prediction
- [[item-writing-flaws-irt-difficulty-2026]] — item-writing flaws and IRT difficulty/discrimination (Schmucker & Moore 2026)
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents for ESL grammar (Yang et al. 2026)

## Citation

[How to train your dragon: Evaluating prompting and fine-tuning for GPT-based item generation in L2 listening assessment](https://www.sciencedirect.com/science/article/pii/S2666920X26000792) — Aryadoust, V., & Wong, J. (2026). *Computers and Education: Artificial Intelligence*, 10, 100623.
