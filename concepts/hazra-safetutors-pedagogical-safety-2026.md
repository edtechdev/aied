---
title: 'SafeTutors: Pedagogical Safety in AI Tutoring'
created: 2026-07-29
updated: 2026-07-29
type: concept
tags: [pedagogical-safety, k-12]
sources: [raw/papers/hazra-safetutors-pedagogical-safety-2026.md]
confidence: medium
---
> **SafeTutors** is a benchmark that jointly evaluates safety and pedagogy in AI tutoring systems across mathematics, physics, and chemistry. It argues that **tutoring safety is fundamentally different from conventional LLM safety**: the primary risk is not toxic content but the quiet erosion of learning through answer over-disclosure, misconception reinforcement, and the abdication of scaffolding.
> **Source:** ['SafeTutors: Pedagogical Safety in AI Tutoring'](https://arxiv.org/abs/2603.17373)


**Authors:** Rima Hazra, Bikram Ghuku, Ilona Marchenko, Yaroslava Tokarieva, Sayan Layek, Somnath Banerjee, Julia Stoyanovich, Mykola Pechenizkiy · arXiv:2603.17373 · 3,135 single-turn + 2,820 multi-turn instances · 11 models tested

## Key Findings

1. **Universal harm across all models.** Every evaluated model — from 3.8B open-weight models to GPT-5-mini — exhibited broad pedagogical harm. No model was consistently safe across all subjects and interaction modes, indicating that tutoring safety is not solved by general capability improvements.

2. **Scale does not reliably improve safety.** Increasing model size did not produce consistent improvements in pedagogical safety, challenging the assumption that larger models are inherently better tutors. This finding parallels broader critiques in [[llm-evaluation]] that general benchmarks do not capture domain-specific safety requirements.

3. **Multi-turn dialogue dramatically worsens behavior.** Pedagogical failure rates escalate from **17.7% in single-turn** interactions to **77.8% in multi-turn** conversations. The crescendo-based escalation design reveals that models which appear safe in one-turn evaluations systematically degrade across sustained interaction — single-turn "safe/helpful" results mask systematic tutor failure.

4. **Harms are subject-dependent.** Violation patterns vary significantly across mathematics, physics, and chemistry, indicating that mitigations must be discipline-aware. A tutoring safety strategy that works for math may not transfer to science domains.

5. **An 11-dimension, 48-sub-risk taxonomy grounds the evaluation.** SafeTutors' risk taxonomy spans Cognitive, Epistemic, Metacognitive, Motivational-Affective, Developmental & Equity, Instructional Alignment, Behavioral & Inquiry, Ethical-Epistemic Integrity, Informational-Semantic, Reflective-Critical, and Pedagogical Relationship dimensions — each with multiple sub-risks drawn from learning-science literature.

## Implications

SafeTutors fundamentally reframes the conversation around [[pedagogical-safety]] and [[ai-tutor-safety-harms]]. The dominant paradigm has been to evaluate AI tutors on problem-solving accuracy and generic safety (toxicity, refusal), but SafeTutors demonstrates that a tutor can be technically accurate and "safe" by conventional metrics while systematically undermining learning. The benchmark's central insight — that tutoring harm is qualitatively different from content harm — has major implications for [[ai-tutoring]] regulation and deployment.

The multi-turn degradation finding is particularly alarming for real-world deployment. Most tutoring interactions extend over multiple turns, yet the evaluation community has largely relied on single-turn benchmarks. SafeTutors provides evidence that this practice is dangerously misleading. Systems like [[eduzone-llm-safety-k12]] and [[vetting-dual-llm-safety-education]] that prioritize multi-turn safety evaluation are essential, not optional.

The risk taxonomy itself is a significant contribution, providing a theoretically grounded vocabulary for discussing tutoring harm. It bridges [[educational-theory]] and AI safety, enabling researchers to move beyond vague claims about "tutor quality" toward precise identification of specific failure modes. This taxonomy could inform the design of [[pedagogical-safety-rl]] approaches like [[singh-eduqwen-pedagogical-rl-2026]] that train models to avoid specific pedagogical harms.

For [[k-12]] contexts, where the stakes of pedagogical harm are highest, SafeTutors provides empirical evidence that current models are not safe enough for unsupervised deployment. The subject-dependence of harms suggests that safety evaluation must be integrated into discipline-specific [[ai-tutor-behavioral-evaluation]] pipelines rather than treated as a one-time gate.

## Citation

acceptance), O.C.L.O.E.P., 1,237), S.I.P.M., |, D.C.C., |, I.E.S.D.A.O., & |, I.C.I.O.A.M. (2026). *SafeTutors: Pedagogical Safety in AI Tutoring*

## Related Pages

- [[pedagogical-safety]] — Foundational concept of safety specific to teaching contexts
- [[ai-tutor-safety-harms]] — Taxonomy and analysis of AI tutoring harms
- [[ai-tutoring]] — Broader landscape of AI-based tutoring systems
- [[llm-evaluation]] — Frameworks and methods for evaluating LLM behavior
- [[eduzone-llm-safety-k12]] — Safety benchmarks for K-12 educational LLM deployment
- [[vetting-dual-llm-safety-education]] — Dual-LLM approaches to educational safety vetting
- [[k-12]] — Educational context with highest-stakes safety requirements
- [[educational-theory]] — Theoretical foundations informing the SafeTutors taxonomy
- [[ai-tutor-behavioral-evaluation]] — Behavioral evaluation frameworks for AI tutors
