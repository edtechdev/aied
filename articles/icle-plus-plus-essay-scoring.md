---
title: "ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
technology: [llm]
assessment: [automated-assessment, automated-essay-scoring, educational-measurement, formative-assessment]
audience: [software developers]
research_method: [benchmark, educational measurement]
discipline: [writing education]
level: [higher ed]

sources: ['raw/papers/2607.27671.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---
> **Synthesis:** Introduces ICLE++, a new annotated corpus of persuasive student essays that addresses critical limitations of the dominant ASAP [[benchmark]] in [[automated-essay-scoring]] [[research-methods-aied|research]]. Unlike ASAP — used by virtually all recent AES models but limited to U.S. grade 7–10 native-English essays — ICLE++ provides both holistic scores and fine-grained trait-specific annotations, enabling evaluation of cross-corpus generalization, multi-trait scoring, and cross-prompt scoring. The authors demonstrate that models trained on trait-specific annotations transfer better across corpora than those trained on holistic scores alone, making ICLE++ a foundational resource for the next generation of AES research.

## Key Contributions

- **New annotated corpus:** ICLE++ provides persuasive student essays annotated with holistic scores and multiple trait-specific scores, filling a gap left by the field's [[cognitive-offloading|over-reliance]] on ASAP
- **Cross-corpus generalization:** Models trained on ASAP often fail to generalize to other corpora (e.g., TOEFL essays by English learners, essays written without time constraints) — ICLE++ enables systematic evaluation of this transfer
- **Trait-level scoring advances:** Fine-grained trait annotations support multi-trait scoring and cross-prompt scoring, moving AES beyond single holistic score prediction
- **Addresses ASAP limitations:** ASAP's confounding variables — essay length as a proxy for quality in timed settings, native-speaker-only population — are well-documented; ICLE++ provides a complementary benchmark

## What this means for practice

- **Software developers.** Test cross-corpus generalization before trusting an [[automated-essay-scoring|AES]] model: models trained on ASAP often fail on other corpora, which is an [[assessment-validity]] problem — a score that does not transfer is not a valid measure of [[writing-education|writing quality]].
- **Software developers.** Report holistic and the 10 trait-level scores separately and per corpus, because trait scoring on ICLE++ was weaker than on ASAP and traits depressed within-prompt holistic scoring there while slightly improving cross-prompt scoring.
- **Software developers.** Move reporting beyond a single holistic number: the trait annotations support per-dimension strengths and weaknesses, which is what makes an AES output usable for [[formative-assessment]] and for psychometric framing such as [[item-response-theory]].
- **Software developers.** Benchmark against ICLE++ alongside existing evidence — psychometrically aware scoring as in [[psyscore-essay-scoring-zpd-feedback]], prompting-based results such as [[choi-anchor-aes-prompting-2025]], and the validity gaps documented for linguistically diverse writers in [[ai-scoring-language-bias-physics]] and [[self-referential-l2-writing-llm-assessment]].

## Limitations

- The 10 traits and holistic scores were annotated on persuasive essays only, so the authors state their findings are limited to that genre.
- The essays were written by university undergraduates who are non-native speakers of English, and it is not clear whether the conclusions generalize to native-speaker high school essays such as those in ASAP.
- Trait scoring results were poorer on ICLE++ than on ASAP and hurt within-prompt holistic scoring, and the authors note that additional experiments are needed to explain why traits still improved cross-prompt scoring.
- The corpus cannot be redistributed — source essays stay under ICLE's license and only the annotations with identifiers pointing to them are released, for non-profit research use.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[writing-education]]
- [[benchmark]]
- [[formative-assessment]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[item-response-theory]]
- [[higher-ed]]

## Connected Articles

- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[choi-anchor-aes-prompting-2025]]
- [[ai-scoring-language-bias-physics]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]

## Citation

Shengjie Li, Vincent Ng (2026). [ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring](https://arxiv.org/abs/2607.27671).
