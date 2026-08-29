---
title: Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
created: "2026-05-15T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, benchmark, generative-ai, intelligent-tutoring, llm, scaffolding, teacher-role, pedagogical-llm-training, human-in-the-loop-ai]
research_method: [benchmark]
audience: [teacher role]
sources: ['raw/papers/2605.14322.md']
confidence: medium
---

> **Synthesis:** Chen et al. (2026) introduce EduAgentBench, the first **theory-grounded, source-grounded benchmark** for evaluating AI tutor agents across the full scope of real teaching work. Unlike [[benchmark|benchmarks]] that test answer correctness or single-turn tutoring, EduAgentBench defines **150 quality-controlled tasks** across three capability surfaces — professional [[pedagogy|pedagogical]] judgment, [[situated-learning|situated]] multi-turn tutoring, and Canvas-style teaching workflow completion — and evaluates frontier models against them. The central finding is that **knowing pedagogy and enacting it are separable capabilities**: current LLMs show bounded pedagogical judgment but fall sharply short of professional teaching standards in multi-turn situated tutoring and tool-mediated teaching workflows. The benchmark thus provides a measurement foundation for developing tutor agents that can genuinely support real teaching work.

## Summary

EduAgentBench introduces the first **theory-grounded, holistic benchmark** for evaluating AI tutor agents across the full scope of **real teaching work**. Unlike existing benchmarks that focus narrowly on answer correctness, EduAgentBench defines **150 source-grounded tasks** spanning three capability surfaces:

1. **Professional pedagogical judgment** — making evidence-based instructional decisions aligned with [[intelligent-tutoring]] principles. Stage 1 contains 50 tasks that isolate teacher-like reasoning from dialogue.
2. **Situated multi-turn tutoring** — diagnosing learner state and adapting [[scaffolding]] over extended dialogue interactions. Stage 2 contains 40 tasks that evaluate trajectory-sensitive tutoring.
3. **Canvas-style teaching workflow completion** — executing tasks within realistic learning management systems (posting assignments, grading, providing [[feedback|Feedback Loop]]). Stage 3 contains 60 tasks requiring [[governance|institutional]] action under educational constraints.

The benchmark is constructed through a **pedagogical-insight-driven pipeline** with complementary human review and automatic verification signals. Each task starts from a target instructional insight, is grounded in realistic educational sources (public assessments, open course materials, pedagogical literature), and is converted into a situated scenario with course state, student data, tool-accessible artifacts, and verifiable success criteria. The 150 tasks map onto six teacher-work capabilities — diagnosing, designing, creating, teaching, communicating, and evaluating (Danielson) — and are scored by deterministic checks, artifact rubrics, and semantic assertions, not a single scalar answer.

The findings reveal a critical gap: current LLMs demonstrate **bounded pedagogical judgment** but fall short of professional teaching standards in both situated tutoring and autonomous workflow execution. This connects directly to concerns about [[agentic-workflows-education]] and whether [[conversational-ai-tutors-framework]] can truly meet classroom demands.

## Key Findings

1. **Knowing and doing separate.** Across frontier models, Stage 1 pedagogical-judgment pass rates are high (aggregate 89.6%, up to 98.0% for GPT-5.4 and Gemini-3.1-Pro), but Stage 2 tutoring drops to 35.7% aggregate (best 52.5%) and Stage 3 workflow completion to 32.7% aggregate (best 45.0%). The strongest complete model reaches only a 63.8% equal-stage pass rate.
2. **Capability surfaces are separable, not one latent skill.** Model profiles split across stages: GPT-5.1 passes 86.0% of pedagogical-judgment items but only 16.7% of workflows, while Qwen3 passes 88.0% of bounded judgment tasks but only 12.5% of tutoring tasks. A single "educational agency" metric would hide these splits.
3. **Workflow failures are partial, tutoring failures are systemic.** Mean workflow reward is 0.704 against a 32.7% pass rate — agents often retrieve evidence, write partially useful feedback, or complete part of a state update before missing an essential educational condition. Tutoring has both low pass rate and low reward, indicating breakdowns in [[scaffolding]], learner-state adaptation, or [[transfer-of-learning|transfer]] verification.
4. **The evidence-to-action chain is the failure locus.** A Stage 3 case (MM-04) shows a model can know the economics, write plausible teaching prose, and still fail if it does not retrieve the correct historical assessment, compute weak knowledge-concept rates, edit the assigned artifact, and ground its communication in the diagnosed weakness.
5. **Calibration matters for interpretation.** The benchmark includes 27 all-pass, 30 no-pass, and 52 high-divergence tasks; a naive global threshold (R ≥ 0.70) would over-count 14–25 extra tasks per model, changing "partial progress but missed constraints" into an overly optimistic workflow story.

## Implications

EduAgentBench reframes how we should measure [[agentic-ai|AI tutor]] readiness: a single answer-correctness or tool-completion metric overstates readiness. The benchmark's three surfaces — judgment, tutoring, and institutional workflow — imply that progress requires models that maintain educational state over time, bind claims to source evidence, update the correct course artifacts rather than produce plausible substitutes, communicate without leaking backend mechanics, and [[scaffolding|calibrate help]] so students reason rather than copy. The finding that models struggle most with **multi-step teaching workflows** in realistic environments echoes broader [[multi-agent-instructional-design]] challenges and the [[human-in-the-loop-ai]] requirements for production educational systems.

The benchmark also connects to the wiki's own measurement conversations: it complements evaluations like [[teachbench-llm-teaching-evaluation]] and the teach-vs-solve distinction in [[measuring-llm-tutors-teach-vs-solve]], and its contract-based view — tasks as auditable educational situations rather than prompt collections — is a [[research-methods-aied|methodological]] model for [[ai-ed-evaluation]]. Because tutoring quality separates from both subject competence and tool use, it argues for treating [[pedagogical-llm-training|pedagogical training and evaluation]] as its own discipline rather than an extension of general agent benchmarking.

## Connected Concepts
- [[benchmark]]
- [[pedagogical-agent]]
- [[ai-ed-evaluation]]

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[feedback]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[agentic-workflows-education]]
- [[conversational-ai-tutors-framework]]
- [[multi-agent-instructional-design]]
- [[teachbench-llm-teaching-evaluation]]
## Citation

Chen, Z., Liu, P., Sheng, R., Li, H., Tu, J., Deng, X., Shum, K., Liu, D., & Qu, H. (2026). [*Are agents ready to teach? A multi-stage benchmark for real-world teaching workflows*](https://arxiv.org/abs/2605.14322).
