---
title: "Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving"
created: 2026-07-24
updated: 2026-07-24
type: concept
tags: [llm, stem-education, benchmark, assessment-validity]
sources: [raw/papers/2607.20520.md]
confidence: high
---
# Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving
**Nath, Graf, Zhang & Zapata-Rivera (2026)** — UC Santa Cruz; ETS Research Institute; University of Michigan. HCI International 2026.

This study probes how sensitive [[llm]] mathematical problem solving is to the surface representation of an item — a question with direct bearing on [[assessment-validity]] when LLMs are used for scoring or tutoring in [[stem-education]]. Systematically varying representationally equivalent formulations (story problems, word-equations, symbolic equations, and isomorphic paraphrases) across 5 contemporary LLMs, the authors find substantial representational sensitivity: models frequently flip correctness across equivalent formulations, and even subtle paraphrase-level changes degrade performance despite preserved mathematical structure. A second, code-augmented condition constraining models to externalize reasoning as executable Python reveals strong latent capability in weak models but does not uniformly improve robustness — instead failures shift from opaque reasoning errors to protocol and execution violations. The work cautions that treating formulations as interchangeable conflates reasoning errors with interface failures, complicating [[llm-math-tutoring]] and diagnostic uses like [[llm-cognitive-diagnosis-handwritten-math]]. It connects to measurement concerns in [[reinforcement-learning-measurement-model-assessment]] and to reasoning scaffolds in [[epistemic-proactivity-math]].

## Related Pages
- [[llm-math-tutoring]] — downstream tutoring affected by representational fragility
- [[llm-cognitive-diagnosis-handwritten-math]] — diagnostic math use of LLMs
- [[assessment-validity]] — core measurement concern raised
- [[reinforcement-learning-measurement-model-assessment]] — measurement-model perspective on assessment
- [[epistemic-proactivity-math]] — reasoning support in math learning

## Citation

Nath, Graf, Zhang & Zapata-Rivera (2026). [Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving](https://arxiv.org/abs/2607.20520). arXiv:2607.20520. HCI International 2026.
