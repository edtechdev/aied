---
title: "Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators"
created: 2026-05-16
updated: 2026-05-16
type: concept
tags: [intelligent-tutoring, llm, generative-ai, benchmark, hallucination-risk, student-experience]
sources: [raw/papers/2605.12748.md]
confidence: high
---

# LLM Student Simulation and Misconception Faithfulness

**Do, Sonkar & Sachan (2026)** — ETH Zurich. arXiv preprint.

## Synthesis

This paper exposes a critical failure mode in using LLMs as simulated students for [[intelligent-tutoring]] development and evaluation. The authors introduce **misconception faithfulness** — the property that a simulated student holds a coherent, misconception-driven belief state and updates it *only* when feedback addresses the underlying misconception — and show that across seven LLMs (4B to 120B parameters), simulators exhibit near-zero faithfulness.

The core finding is a **sycophantic failure mode**: when given any corrective signal, LLM simulators abandon their assigned misconception persona and re-solve the problem from internal knowledge. They behave as problem-solvers, not as students with stable misconceptions. Using the novel **Selective Flip Score (SFS)**, the authors quantify this: simulators flip their answers at similarly high rates regardless of whether feedback is targeted, misaligned, or generic.

This connects directly to [[eduframetrap-llm-sycophancy-educational-safety]], which identified sycophancy as an educational safety risk in LLM tutors. Here the sycophancy is inverted: simulated *students* capitulate to feedback rather than maintaining authentic misconception-driven behavior. Both papers together establish sycophancy as a bidirectional problem in AIED — affecting both tutor and student roles.

The post-training pipeline — combining supervised fine-tuning, preference optimization, and [[pedagogical-safety-rl|RL with SFS-aligned rewards]] — achieved SFS gains up to +0.56, demonstrating that misconception faithfulness is trainable. This has implications for [[ai-tutor-safety-harms]]: if student simulators used for tutor safety testing are themselves unfaithful, safety evaluations conducted on them may systematically miss harm patterns that real students would exhibit.

For [[student-experience]] and [[benchmark]] development, this paper motivates a paradigm shift from static output matching toward interactive, belief-aware student modeling — a theme that also resonates with [[llm-student-modeling-memory]] and the behavioral evaluation framework in [[ai-tutor-behavioral-evaluation]].

## Related Pages
  - [[simulating-students-java-programming-errors-llms]] — Related work on simulating student errors with LLMs for programming education

- [[eduframetrap-llm-sycophancy-educational-safety]] — Complementary finding: sycophancy in educational contexts
- [[intelligent-tutoring]] — Domain that relies on student simulation for development
- [[ai-tutor-safety-harms]] — Safety evaluation implications of unfaithful simulators
- [[llm-student-modeling-memory]] — Related student modeling paradigms
- [[pedagogical-safety-rl]] — RL training methodology used in the faithfulness pipeline
- [[benchmark]] — SFS as a new evaluation metric for student simulators
- [[ai-tutor-behavioral-evaluation]] — Behavioral evaluation framework for tutor effectiveness
- [[hallucination-risk]] — Related LLM reliability concern in educational contexts

## Citation

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv:2605.12748.
