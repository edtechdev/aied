---
title: Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving
created: "2026-07-24T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
technology: [llm, rag, reinforcement-learning]
assessment: [assessment-validity]
research_method: [benchmark]
discipline: [stem education, math education]
sources: ['raw/papers/2607.20520.md']
confidence: high
audience: [researchers, assessment designers]
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** This study probes how sensitive [[llm]] mathematical [[problem-solving|problem solving]] is to the surface representation of an item — a question with direct bearing on [[assessment-validity]] when LLMs are used for scoring or tutoring in [[stem-education]]. Systematically varying representationally equivalent formulations (story problems, word-equations, symbolic equations, and isomorphic paraphrases) across 5 contemporary LLMs, the authors find substantial representational sensitivity: models frequently flip correctness across equivalent formulations, and even subtle paraphrase-level changes degrade performance despite preserved mathematical structure. A second, code-augmented condition constraining models to externalize reasoning as executable Python reveals strong latent capability in weak models but does not uniformly improve robustness — instead failures shift from opaque reasoning errors to protocol and execution violations. The work cautions that treating formulations as interchangeable conflates reasoning errors with interface failures, complicating [[intelligent-tutoring|AI Tutoring]] and diagnostic uses like [[llm-cognitive-diagnosis-handwritten-math]]. It connects to measurement concerns in [[reinforcement-learning-measurement-model-assessment]] and to reasoning [[scaffolding|scaffolds]] in [[epistemic-proactivity-math]].

## What this means for practice

- **Instructors.** Never treat a correct symbolic solution as evidence that a learner or a model can handle the same problem in words: across 85 algebra items expressed in four mathematically equivalent forms, the five evaluated LLMs flipped correctness between formulations even under deterministic decoding.
- **Designers.** Instrument the interface layer when you add executable-reasoning constraints, because code augmentation did not remove failures but moved them from opaque reasoning errors to protocol violations and execution failures — Gemini 2.5 Pro accumulated a disproportionate share of protocol violations.
- **Researchers.** Report failure type, latency and cost per correct answer alongside accuracy: the study found code augmentation raised median and tail latency and increased cost per correct answer for most models, and accuracy conditioned on successful execution overstated system reliability.
- **Instructors.** Budget for retries and long response tails before putting an [[automated-assessment|automated]] or [[intelligent-tutoring|tutoring]] system in front of students, and design tasks so a protocol failure is distinguishable from a mathematical one.
- **Designers.** Build item banks as controlled families of representationally equivalent variants rather than single-form items, so that robustness can be separated from preference for a favored surface form in [[stem-education]].

## Limitations

- The item set is 85 word problems taken from a single published appendix and spans middle-school to early-high-school algebra (linear equations, rates, work, mixtures, ratios, percentages, simple interest), so the representation families are narrow.
- Only 5 contemporary LLMs from one model generation were tested, accessed as black boxes; the authors call for longitudinal replication to see whether new generations become more representation-invariant or merely shift which surface forms they favor.
- Answers were restricted to integers or terminating decimals — logarithmic, non-square-root and irrational cases were excluded — to permit exact auto-grading, and decoding was fixed at temperature zero with one task-order seed, so the results are a deterministic snapshot rather than a distribution.
- No human participants took part: the authors note that linking observed failure structures to user trust, frustration and task success would require integrating human-subject studies.

## Connected Concepts

- [[llm]]
- [[assessment-validity]]
- [[stem-education]]
- [[intelligent-tutoring]]
- [[math-education]]
- [[benchmark]]
- [[automated-assessment]]
## Connected Articles

- [[llm-cognitive-diagnosis-handwritten-math]]
- [[reinforcement-learning-measurement-model-assessment]]
- [[epistemic-proactivity-math]]
## Citation

Nath, Graf, Zhang & Zapata-Rivera (2026). [Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving](https://arxiv.org/abs/2607.20520). HCI International 2026.
