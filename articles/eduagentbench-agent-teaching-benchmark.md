---
title: "TeachArena: Are Language Agents Ready for Realistic Teaching Work?"
created: "2026-05-15T04:33:04-04:00"
updated: "2026-09-20T08:31:15-04:00"
type: article
foundations: [agentic-ai, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, human-in-the-loop-ai, intelligent-tutoring, llm, pedagogical-llm-training]
audience: [instructors, software developers]
sources: ['raw/papers/2605.14322.md']
confidence: medium
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Chen et al. (2026) introduce TeachArena, a theory-grounded, source-grounded [[benchmark]] for evaluating AI tutor agents across the full scope of real [[teacher-role|teaching]] work. Unlike benchmarks that test answer correctness or single-turn tutoring, TeachArena defines **354 audited tasks** across three complementary capability surfaces — professional [[pedagogy|pedagogical]] judgment, [[situated-learning|situated]] multi-turn tutoring, and end-to-end LMS teaching workflow execution — and evaluates frontier models against them. The central finding is that **knowing pedagogy and enacting it are separable capabilities**: models are generally capable of bounded pedagogical judgment but still fall short of professional teaching standards in situated tutoring and end-to-end teaching-workflow execution. Because stage rankings reshuffle, no single scalar describes a model's readiness to teach.

## Key Findings

1. **Knowing and doing separate.** Stage 1 scores are high under a bounded-evidence contract (mean 0.893; range 0.799–0.947), while workflow scores top out at 0.704.
2. **Capability surfaces are separable, not one latent skill.** GPT-5.5 ranks fourth on workflows but 16th on tutoring; Gemini-2.5-Pro is second on tutoring (0.769) but 12th on workflows (0.477).
3. **Rank reshuffling is systematic.** Stage 2 correlates weakly with both Stage 1 (ρ = 0.24) and Stage 3 (ρ = 0.21), and the median difference between a model's best and worst stage rank is seven positions.
4. **Long chains expose composition pressure.** The six long-chain workflows average 0.321 versus 0.559 across the other Stage 3 families, and are the lowest-scoring family for 15 of 17 models.
5. **Over-helpfulness is a practical failure mode.** The strategic surface learner, interactive but soliciting shortcuts, is the lowest-scoring of six profiles for 15 of 17 models, averaging 0.702 versus 0.757.

## The Gap This Benchmark Addresses

Existing [[benchmark|benchmarks]] assess subject-matter competence or local tutoring support: solving exam items, giving hints, or answering one student query. Those signals do not reveal whether an agent can adapt [[scaffolding]] after repeated failure, distinguish a lucky answer from genuine understanding, or verify students' [[transfer-of-learning|transfer of knowledge]]. Agent benchmarks test tool use but rarely define success as completing a teaching workflow, so a model can call the right tool while acting on the wrong evidence. TeachArena's 354 audited tasks each build around a pedagogical insight and span six teacher-work capabilities: diagnosing, designing, creating, teaching, communicating, and evaluating.

## Three Capability Surfaces

The stages are complementary diagnostic surfaces, not an ordered difficulty scale. **Stage 1, pedagogical judgment**, asks for a bounded decision from packaged evidence: 117 tasks, from 26 MathDial transformations, 17 MathTutorBench transformations, 22 OER/literature-grounded cases, and 52 authored evidence contracts. **Stage 2, [[situated-learning|situated]] tutoring**, fixes the instructional target but makes each tutor move change the next learner evidence: 100 tasks across 13 disciplines, comprising 64 new OER/MathDial-grounded scenarios and 36 adaptations. **Stage 3, end-to-end LMS workflows**, spreads evidence across a synthetic Canvas-style LMS — 126 learners, 432 course enrollments, 222 assignment records, 1,058 quiz attempts, and 13 editable presentations — and asks whether an agent can carry an instructor's request to verified closure through grading, revision, and [[feedback]] to authorized recipients: an [[governance|institutional]] action, not a recommendation.

## Construction and Verification

Tasks come from a pedagogical-insight-driven pipeline: each starts from a target instructional insight, is grounded in educational material or course state, and becomes a teacher judgment, a tutoring dialogue, or an LMS workflow with a matched verifier. Stage 1 requires a warranted decision plus mechanism-sensitive justification, with a programmatic response anchor where one is admissible (semantic assertions 117; response anchors 100). Stage 2 combines tutor moves, the episode-wide policy, and learner-produced change discounted once the tutor has revealed the reasoning (turn policy 100; trajectory 100; learner outcome 98); learner replies come from a controlled simulator running Qwen3-Max at T = 0. Stage 3 conditionally composes semantic, state, process, and artifact checks (environment 137; semantic 137; process 123; goal state 87; artifact quality 83).

## What the Cases Reveal

Two audited cases localize failures that aggregate rewards cannot. In the Stage 2 episode S0-54, a learner who reverses a conditional gets a mixed diagnosis even after reaching the correct posterior: the outcome is right, learner-owned repair is not. In the Stage 3 workflow MM-04, an ECON101 instructor asks for visual remediation from the Fall 2023 midterm and the existing Week 5 deck; the agent must recover the weak knowledge components, revise the named deck, create a targeted quiz, and only then notify the class. GPT-5.5 closes that loop, GLM-5.1 leaves the assigned deck unchanged, and Gemini-3.1-Pro misses required numeric or visual evidence — local competence is not compositional, with consequences for [[agentic-workflows-education]], [[conversational-ai-tutors-framework|tutor frameworks]], and what [[intelligent-tutoring]] systems can be asked to do unaided.

## What this means for practice

- **Instructors.** Do not read one benchmark number as readiness: workflow scores top out at 0.704 while Stage 1 judgment averages 0.893, so an agent that reasons well about teaching may still fail to carry it out.
- **Instructors.** Treat over-helpfulness as the likeliest tutoring failure: the strategic surface learner is the lowest-scoring of six profiles for 15 of 17 models, averaging 0.702 against 0.757.
- **Designers.** Build for the evidence-to-action chain, not a good answer: in MM-04 the agent has to recover the historical evidence and edit the assigned deck before it announces anything, so [[human-in-the-loop-ai|oversight]] and state checks belong inside the deployment.
- **Administrators.** Choose tutor tools on their stage profile instead of an overall score — one model ranked fourth on workflows but 16th on tutoring — and pilot the operational constraints the benchmark measures.

## Limitations

- The controlled design uses simulated learners in Stage 2 and a synthetic LMS in Stage 3, so it shows whether an agent preserves a bounded teaching contract, not whether real students learn more.
- Coverage spans multiple disciplines but remains weighted toward STEM, and linking these controlled episodes to longitudinal learning outcomes is stated as future work.
- Success is conjunctive, so a low score can reflect one late handoff: the six long-chain workflows average 0.321 against 0.559 elsewhere and are the lowest-scoring family for 15 of 17 models.
- The reported board summarizes 17 frontier models, so these stage profiles say nothing about smaller or self-hosted systems.

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

Chen, Z., Liu, P., Sheng, R., Li, H., Tu, J., Deng, X., Shum, K., Liu, D., & Qu, H. (2026). [*TeachArena: Are language agents ready for realistic teaching work?*](https://arxiv.org/abs/2605.14322).
