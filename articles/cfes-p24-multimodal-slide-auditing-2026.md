---
title: "Benchmarking Multimodal Large Language Models for Educational Slide Auditing"
created: "2026-08-19T10:05:00-04:00"
updated: "2026-08-19T11:20:00-04:00"
type: article
tags: [benchmark, llm, multimodal, instructional-design, ai-ed-evaluation, multimedia-learning, assessment-validity, generative-ai]
sources: ['raw/papers/cfes-p24-multimodal-slide-auditing-2026.md']
confidence: high
---

> **Synthesis:** Ma, Li, and Shi (2026) introduce **CFES-P24**, a theory-grounded counterfactual benchmark for auditing whether multimodal large language models (MLLMs) actually respond to specific instructional-design constructs when evaluating educational slides. Instead of a holistic rating — which says little about *which* construct a model attends to — the benchmark expresses six multimedia-learning principles as deterministic, reversible slide transformations and generates counterfactual A/B pairs plus visual-equivalence sham controls. A pilot evaluation of a frozen gate found that construct recognition (operation, principle, repair, evidence localization) was near-perfect **8/8** for both models, while *comparative judgment* (direction 6/8) and *severity calibration* (0/8) diverged sharply — demonstrating that these are empirically separable skills and that a composite score would conceal which layer fails. ^[[cfes-p24-multimodal-slide-auditing-2026]]

## The problem with holistic ratings

Multimodal LLMs are increasingly used to evaluate educational materials such as slides. But a single holistic rating obscures a critical question: **does the model actually respond to a particular instructional-design construct**, or is it just producing a plausible-sounding overall judgment? Naturally occurring slides contain several weaknesses at once, and a preference for one deck over another does not reveal whether the decision reflects an instructional principle, a visual preference, or an unnoticed textual cue. This is a validity concern central to [[ai-ed-evaluation|AI-based evaluation]] of educational content — the same tension between aggregate accuracy and construct-level fidelity the wiki treats under [[assessment-validity]] and [[benchmark]].

## CFES-P24 design

The benchmark is theory-grounded and counterfactual:

- **Registry:** 504 planned pairs — **432 target pairs + 72 sham controls** — derived from **24 author-created, three-slide micro-lessons** across **six disciplines** (biology, computer science, earth science, mathematics, physics, psychology). Baselines are rendered at 1920×1080 with fixed typography, a 4.5 minimum contrast ratio, and controlled geometry.
- **Six multimedia-learning principles** are expressed as deterministic, *reversible* transformations, each at **three parameterized levels**: coherence (add task-irrelevant elements), signaling (reduce cue coverage), spatial contiguity (move a label away), redundancy (copy speaker-note text to screen), modality (transfer units from notes to screen), and segmenting (merge stages).
- **72 visual-equivalence sham controls** — three families (equal-contrast palette mapping, equal-readability font substitution, border-weight change) that alter visual form without changing the instructional relation. They test whether a model reacts to *any* visible pixel difference.

A key design feature is a **private truth record**: the pipeline records each operation and its inverse, hides the label behind a blind identifier, and requests a structured response (more-problematic version, operation, principle, anchored severity S0–S3, evidence element IDs, minimal repair, confidence). The transformation log provides operation-level truth without asking a human rater to reconstruct the edit after the fact.

## Pilot evaluation method

The pilot reports a **frozen candidate gate** rather than the full 504-pair evaluation — the paper stresses distinguishing a *registered design* from *completed evidence*. Key elements:

- **21 pairs generated** of the 504 registered; they passed **100/100** transformation-rule checks, **21/21** inverse-restoration checks, and **21/21** independent disk-level quality checks, with **0** errors, warnings, or blind-label leaks.
- The frozen gate contained **five pairs** (signaling, spatial contiguity, redundancy, modality + one sham), evaluated once by each of two models via the Poe API on 15 July 2026: **GPT-5.4** and **Qwen3-VL-235B-A22B-Instruct**, temperature 0, structured output required, no retries.
- Truth was scored offline on six exact-match endpoints; the 14 release rules were conjunctive, so a single failure blocked the next stage.

## Pilot results: recognition, judgment, and calibration separate

The results are the paper's central contribution — **endpoints diverged sharply** across the eight target calls:

| Endpoint | Exact match | Rate |
|---|---|---|
| Observable operation | 8/8 | 1.00 |
| Principle | 8/8 | 1.00 |
| Minimal repair | 8/8 | 1.00 |
| Evidence-anchor overlap | 8/8 | 1.00 |
| **Direction** (which version is more problematic) | **6/8** | 0.75 |
| **Severity** (anchored S0–S3) | **0/8** | 0.00 |

Both sham calls were correctly classified as having **no material difference**. Every response satisfied the structured-output schema on the first attempt.

- **Recognition is easy; comparative judgment is harder.** Both models recovered every target operation, principle, repair, and evidence anchor (32/32 exact cells), but GPT-5.4 failed direction twice — returning *same* for a signaling pair and a modality pair — even while correctly describing the edit and identifying the elements, at confidence 0.95–0.98. The error lies in the decision threshold implied by *more_problematic*, not in perception of the change. Qwen3-VL selected the correct direction 4/4.
- **Severity calibration failed entirely.** The preregistered truth assigned **S3** (global/task-blocking) to all eight target calls, while *both* models returned **S1** every time (0/8). Because the visible edits were localized, the paper interprets the eight identical S1 judgments not as eight model failures but as evidence that the original severity labels were **over-anchored** — the anchors overestimated the magnitude of the visible manipulations.
- **The preregistered gate failed and blocked release.** With 13/14 rules passing but direction at 6/8 against the required 8/8, the frozen conjunctive policy kept all **16 holdback calls blocked**. No call was rerun and the threshold was not changed after results were known — modeling disciplined preregistration.
- The 10 calls cost US$0.34 total (GPT-5.4 $0.30, Qwen3-VL $0.04); descriptive Wilson intervals are wide and no model ranking is claimed.

## Implications

- **Layered scorecards, not composite scores.** The paper argues for reporting perceptual grounding (operation, evidence), construct mapping (principle, repair), comparative judgment (direction), and calibration (severity) as *separate* layers, so disagreement is interpretable and a system can abstain on pedagogical consequence while still offering a verifiable repair. A composite score would have concealed the error pattern entirely.
- **Confidence is not reliability.** GPT-5.4's two direction errors were made at high confidence, showing that confidence does not resolve construct-level failures.
- **Severity must be parameter-grounded.** Future versions should replace presumed learning-impact severity with magnitude grounded in measurable edit properties (label–target distance, duplicated-text proportion, cue coverage) and keep claims about learning consequences separate.
- **Distinguish "registered" from "completed."** The paper models rigor by keeping the registered design, generated artifact, and model status distinct — relevant to the wiki's [[ai-ed-evaluation]] and [[benchmark]] literatures on honest evaluation of AI in education.
- **Scope caveats:** only 21/504 pairs were generated, the frozen gate has five pairs and 10 calls (wide intervals, no ranking), and lessons are author-created and Chinese-language. The benchmark is a research protocol, not a classroom-ready product; it establishes no learning gains or teacher agreement.

## Connected Concepts

- [[benchmark]]
- [[llm]]
- [[multimodal]]
- [[instructional-design]]
- [[ai-ed-evaluation]]
- [[assessment-validity]]
- [[generative-ai]]
- [[ethics]]

## Connected Articles

- [[cdpk-pedagogy-benchmark-llms]] — The Pedagogy Benchmark: CDPK + SEND
- [[elbench-education-llm-benchmark-2026]] — ELBench: Education-Facing LLM Benchmark
- [[teaching-monster-pck-benchmark-2026]] — Teaching Monster: PCK Benchmark
- [[aissa-slides-analysis]] — Slides Analysis
- [[xai-education-framework]] — Explainable AI in Education Framework

## Citation

Ma, Y., Li, S., & Shi, S. (2026). [*Benchmarking Multimodal Large Language Models for Educational Slide Auditing*](https://osf.io/preprints/edarxiv/4y8xk_v1). EdArXiv preprint.
