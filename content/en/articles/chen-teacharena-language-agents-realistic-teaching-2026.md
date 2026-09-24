---
title: "TeachArena: Are Language Agents Ready for Realistic Teaching Work?"
created: "2026-09-24T02:29:46-04:00"
updated: "2026-09-24T05:16:25-04:00"
type: article
sources: ['raw/papers/chen-teacharena-language-agents-realistic-teaching-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [ai-education, agentic-ai, teacher-role, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [scaffolding, misconceptions, situated-learning, transfer-of-learning, productive-failure]
technology: [pedagogical-agent, intelligent-tutoring, simulating-students, edtech-platform, cognitive-diagnosis]
ethics: [privacy, trust-calibration, pedagogical-safety]
research_method: [system development, experiment]
discipline: [stem education]
audience: [researchers, instructors, educational technology developers]
page_kind: [evaluation]
---
> **Synthesis:** Chen and colleagues ask whether language agents are ready for realistic teaching work, not for answering questions about teaching. TeachArena holds 354 audited tasks across three surfaces: professional pedagogical judgment under packaged evidence, situated multi-turn tutoring with a simulated learner, and end-to-end workflows in a Canvas-style learning management system. The tasks span six teacher-work capabilities: diagnosing, designing, creating, teaching, communicating, and evaluating. Success means satisfying an evidence-to-trace contract, not matching a preferred answer style, and across 17 frontier models bounded judgment is largely manageable (mean 0.893) while situated tutoring and institutional action are not: rankings reshuffle and workflow scores top out at 0.704. The authors name this the knowing, teaching, and acting gap.

## Key Findings

- **Three surfaces, scored separately**: pedagogical judgment (117 tasks), situated multi-turn tutoring (100), and end-to-end LMS workflows (137).
- **Bounded judgment is strong and compressed.** Stage 1 averages 0.893 across 17 models (range 0.799 to 0.947).
- **Stage rankings reshuffle.** Rank correlations are weak with judgment (0.24) and workflows (0.21), and the median model moves seven positions between its best and worst stage.
- **Workflow execution does not saturate.** Claude Opus 4.8 has the highest overall estimate (0.803) and the only top-three placement on every stage, yet scores 0.773 on tutoring and 0.704 on workflows.
- **Two stress conditions recur.** The strategic surface learner is the lowest-scoring profile for 15 of 17 models (0.702 against 0.757), and the six long-chain workflows average 0.321 against 0.559.

## What the benchmark measures, and how tasks are grounded

Stage 1 supplies the evidence and asks for the warranted decision plus its mechanism, with tools frozen to isolate teacher reasoning; its 117 tasks comprise 26 MathDial transformations, 17 MathTutorBench transformations, 22 OER/literature-grounded cases, and 52 authored evidence contracts. Stage 2 fixes the target concept and the learner's starting state but leaves the path open; its 100 tasks span 13 disciplines, 64 new scenarios and 36 adaptations, and replies come from Qwen3-Max at T = 0 under a hidden profile the tutor never sees. Stage 3 spreads records across a deterministic Canvas-style LMS (126 learners, 432 course enrollments, 222 assignment records, 1,058 quiz attempts, 13 editable presentations) and requires the agent to carry an instructor's objective to a verified intervention. Grounding is insight-first: source evidence, published pedagogy, or deterministic data fixes the target mechanism before the prompt is written, and verifier coverage is declared per stage: 117 semantic assertions and 100 response anchors in Stage 1; tutor turn, trajectory, and learner outcome in Stage 2 (100, 100, and 98 tasks); environment and semantic checks across all 137 Stage 3 tasks, with process (123), goal state (87), and artifact quality (83) subsets.

## What the model evaluation revealed

Across 17 frontier models, enactment did not match judgment. Stage 1 averaged 0.893 in a narrow band, so packaged evidence is manageable, and weak correlations across surfaces mean strong judgment predicts little about adaptive teaching. Claude Opus 4.8 has the highest overall estimate (0.803) and the only top-three placement on every stage, yet does not saturate the tutoring (0.773) or workflow (0.704) contracts. Gemini-2.5-Pro is second on tutoring but twelfth on workflows, GPT-5.5 is fourth on workflows but sixteenth on tutoring, and Kimi K2.6 and Qwen3-Max differ by only 0.009 overall while trading 0.078 on tutoring. The authors read this as a knowing, teaching, and acting gap rather than one capability ordering.

## Why over-helpfulness and long chains fail

Two failure modes recur. The strategic surface learner is the lowest-scoring of six controlled profiles for 15 of 17 models; it stays interactive while pushing for shortcuts, so preserving learner ownership is the hard part. The six long-chain workflows average 0.321 against 0.559 for other families, read as composition pressure across retrieval, diagnosis, persistent state, artifacts, and communication, not proof that chain length causes failure. Case audits show why local competence does not compose. In MM-04, an ECON101 instructor requests visual remediation from the Fall 2023 midterm and the existing Week 5 deck; the agent must recover the weak knowledge components, revise that deck, create a targeted quiz, and only then notify the class. GPT-5.5 closes that loop, GLM-5.1 leaves the assigned deck unchanged, and Gemini-3.1-Pro misses required numeric or visual evidence. In S0-54 a statistics learner answers 0.99 for a rare disease, reaches the correct posterior of 1/6, and still catches a mixed diagnosis because the tutor supplies the interpretation she should construct; an answer-only check would record success.

## What this means for practice

- **Evaluate tutor agents on teaching, not answering.** Ask whether the system elicits learner reasoning, adapts after failure, and verifies transfer.
- **Report judgment and enactment separately.** A high score on packaged teaching decisions says little about the same system in a tutorial or workflow.
- **Treat consequential LMS action as bounded delegation.** Require that evidence precede action, that changes land in designated objects, and that messages stay within authorized audiences.
- **Expect over-helpfulness and design against it.** Systems are weakest with shortcut-seeking learners, so objectives should reward calibrated support over immediate answers.

## Limitations

- **Simulated learners and a synthetic LMS.** Controlled comparison excludes any link to real classrooms or longitudinal learning outcomes.
- **Coverage is weighted toward STEM** even though tutoring spans 13 disciplines, so findings may not transfer to other subjects or learner populations.
- **Task-level contracts, not learning.** Success means satisfying an evidence-to-trace contract, and the transfer probe uses one fixed weak model with zero headline weight.
- **Frontier models only.** The board summarizes 17 frontier overlays, so these profiles say nothing about smaller or self-hosted systems.

## Connected Concepts

- [[pedagogical-agent]]
- [[benchmark]]
- [[intelligent-tutoring]]
- [[simulating-students]]
- [[scaffolding]]
- [[formative-assessment]]

## Connected Articles

- [[astra-multi-agent-tutoring-benchmark-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[teachbench-llm-teaching-evaluation]]
- [[cdpk-pedagogy-benchmark-llms]]
- [[ai-agents-complete-lms-assessment-validity-2026]]

## Citation

Chen, Z., Liu, P., Sheng, R., Li, H., Tu, J., Deng, X., Shum, K., Liu, D., & Qu, H. (2026). [*TeachArena: Are language agents ready for realistic teaching work?*](https://arxiv.org/abs/2605.14322). arXiv:2605.14322 (version 3, revised August 2026). https://doi.org/10.48550/arXiv.2605.14322
