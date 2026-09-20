---
title: "How to Train Your Dragon: Evaluating Prompting and Fine-Tuning for GPT-Based Item Generation in L2 Listening Assessment"
created: "2026-09-01T10:00:00-04:00"
updated: "2026-09-19T08:23:28-04:00"
type: article
methods: [benchmark]
sources: ["raw/papers/gpt-item-generation-l2-listening-2026.md"]
technology: [llm, prompt-engineering]
assessment: [educational-measurement]
confidence: medium
discipline: [language learning]
audience: [assessment professionals, assessment designers, researchers]
page_kind: [evaluation]
---

> **Synthesis:** Aryadoust and Wong compare **prompting vs. fine-tuning** for advancing automatic item generation (AIG) in L2 listening assessment. Recognizing that iterative prompt refinement eventually plateaus while outputs remain inconsistent or misaligned with assessment constructs, they first refined an instruction design over three successive iterations to produce an optimized prompt, then **fine-tuned GPT-4.1** using the same prompt to isolate the effect of model adaptation. They generated **40 tests and 240 multiple-choice items** for evaluation.

## Key Findings

- **Iterative prompt refinement yields measurable but plateauing improvements** in item quality; outputs can remain inconsistent or construct-misaligned.
- **Fine-tuning GPT-4.1 on the optimized prompt** improves item generation beyond prompting alone, isolating model adaptation (not prompt design) as the driver of gains.
- The study provides a practical evaluation of AIG for L2 listening assessment, with implications for item quality, consistency, and construct alignment.
- Findings inform when assessment developers should invest in fine-tuning vs. prompt refinement.

## What this means for practice

- **Assessment designers.** Reach for fine-tuning once prompt refinement plateaus: with the prompt held constant, fine-tuned GPT-4.1 produced items that were more contextually grounded, linguistically coherent, and balanced, and some required minimal or no revision.
- **Assessment designers.** Keep expert review in the loop for discourse-level items, since generating higher-order items that require discourse-level reasoning remained challenging even after fine-tuning.
- **Assessment professionals.** Screen for the biases that survived both conditions: longest-correct-option bias and uneven key distribution persisted in the generated output.
- **Assessment professionals.** Benchmark generated items against human-authored ones — fine-tuned items performed comparably on passage dependence but stayed weaker at avoiding absolute language and at targeting localized spans of necessary information.
- **Researchers.** Hold the prompt constant when comparing prompting with fine-tuning; this design isolates model adaptation from prompt design and offers a template for further AIG comparisons.

## Limitations

- The evaluation covers 40 tests and 240 multiple-choice items split across four model conditions (three prompt-only iterations and one fine-tuned), all within one task family: academic lecture-based L2 listening.
- Items were built from lecture transcripts rather than fully realized audio input, which the authors name as a further limitation.
- The non-deterministic nature of LLMs introduced stochastic variation that the authors acknowledge may have influenced results, and the fine-tuning dataset of 245 human-generated listening items may not capture the full range of listening and content variation present in operational assessment contexts.
- The evaluation rubric itself may be limited: professionally written distractors may appear less plausible in the analysis because they reflect likely test-taker misunderstandings or discourse-level inferences even when not tied to explicit passage wording.

## Connected Concepts

- [[llm]]
- [[language-learning]]
- [[assessment-validity]]
- [[prompt-engineering]]
- [[speech-and-voice-technologies]]
## Connected Articles

- [[llm-item-difficulty-prediction]] — LLM-based item difficulty prediction
- [[item-writing-flaws-irt-difficulty-2026]] — item-writing flaws and IRT difficulty/discrimination (Schmucker & Moore 2026)
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents for ESL grammar (Yang et al. 2026)

## Citation

[How to train your dragon: Evaluating prompting and fine-tuning for GPT-based item generation in L2 listening assessment](https://www.sciencedirect.com/science/article/pii/S2666920X26000792) — Aryadoust, V., & Wong, J. (2026). *Computers and Education: Artificial Intelligence*, 10, 100623.
