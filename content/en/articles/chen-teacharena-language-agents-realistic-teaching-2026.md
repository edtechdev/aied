---
title: "TeachArena: Are Language Agents Ready for Realistic Teaching Work?"
created: "2026-09-24T02:29:46-04:00"
updated: "2026-09-24T02:29:46-04:00"
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

> **Synthesis:** Chen and colleagues ask whether language agents are ready for realistic teaching work rather than for answering questions about teaching. TeachArena holds 354 audited tasks across three surfaces: professional pedagogical judgment under packaged evidence, situated multi-turn tutoring with a simulated learner, and end-to-end teaching workflows executed in a Canvas-style learning management system. Each task begins with a target instructional insight grounded in transformed material, published pedagogy, or deterministic course state, then adds a decision setting, a plausible foil, and a verifier matched to the trace. Verification mixes state checks, evidence-before-action process constraints, semantic assertions, and rubric-based artifact judgments, so success means satisfying an evidence-to-trace contract rather than matching a preferred answer style. Across 17 frontier models, bounded judgment is largely manageable (mean 0.893) while situated tutoring and institutional action are not; stage rankings reshuffle and workflow scores top out at 0.704. The authors name this the knowing, teaching, and acting gap.

## Key Findings

- **TeachArena scores three teaching surfaces separately**: pedagogical judgment (117 tasks), situated multi-turn tutoring (100), and end-to-end LMS workflows (137).
- **Bounded judgment is strong and compressed.** Stage 1 scores average 0.893 across 17 models (range 0.799 to 0.947): frontier systems infer a warranted decision when the evidence is packaged.
- **Stage rankings reshuffle.** Rank correlations are weak between tutoring and judgment (0.24) and tutoring and workflows (0.21); the median model moves seven positions between best and worst stage.
- **Workflow execution does not saturate.** Claude Opus 4.8 has the highest overall estimate (0.803) and the only top-three placement on every stage, yet scores 0.773 on tutoring and 0.704 on workflows.
- **Two stress conditions recur.** The strategic surface learner is the lowest-scoring profile for 15 of 17 models (0.702 against 0.757), and the six long-chain workflows average 0.321 against 0.559.
- **Stage-resolved reporting separates similar systems.** Gemini-2.5-Pro ranks second on tutoring (0.769) but twelfth on workflows (0.477), GPT-5.5 is fourth on workflows but sixteenth on tutoring.
- **Audited cases locate the breaks.** A statistics learner reaches the correct posterior while the tutor supplies the interpretation she should construct, and a microeconomics intervention never reaches the assigned deck.

## What the benchmark measures, and how tasks are grounded

The three surfaces leave different traces. Stage 1 supplies the learner work or assessment evidence and asks for the warranted decision plus the mechanism supporting it, with tools frozen to isolate teacher reasoning. Stage 2 fixes the target concept and the learner's starting state but leaves the path open across a multi-turn dialogue, so every learner reply becomes new evidence. Stage 3 distributes records across a deterministic Canvas-style LMS and requires the agent to carry an instructor's objective to a verified intervention. Grounding is insight-first: the target mechanism is fixed by source evidence, published pedagogy, or deterministic data before the prompt and verifier are written. Stage 2 scores three non-interchangeable scopes (tutor turn, trajectory, and learner-produced change discounted when the tutor revealed the reasoning). Stage 3 composes state, process, semantic, and artifact checks, so a well-written document cannot repair a wrong source, object, recipient, or ordering.

## What the model evaluation revealed

Across 17 frontier models, bounded judgment looked strong while enactment did not. Stage 1 averaged 0.893 in a narrow band, suggesting packaged evidence is largely manageable, and weak correlations between tutoring and the other surfaces mean a strong judgment profile predicts little about adaptive teaching. Claude Opus 4.8 holds the highest overall estimate (0.803) and the only top-three placement on every stage, yet it does not saturate the situated-tutoring or workflow contracts (0.773 and 0.704). Profiles diverge sharply: Gemini-2.5-Pro is second on tutoring but twelfth on workflows, GPT-5.5 is fourth on workflows but sixteenth on tutoring, and Kimi K2.6 and Qwen3-Max differ by only 0.009 overall while trading 0.078 on tutoring. The authors read this as a knowing, teaching, and acting gap rather than one capability ordering.

## Why over-helpfulness and long chains fail

Two failure modes recur. In tutoring, the strategic surface learner was the lowest-scoring of six controlled profiles for 15 of 17 models, and this learner stays interactive while pushing for shortcuts or confirmation, so preserving learner ownership is the hard part. In workflows, the six long-chain tasks averaged 0.321 against 0.559 for other families, read as composition pressure across retrieval, diagnosis, persistent state, artifacts, and communication, not proof that chain length causes failure. Case audits show why local competence does not compose: a later tutor move supplies an interpretation the learner should construct, leaving the handoff partial and transfer untested, and plausible material can land outside the assigned artifact.

## What this means for practice

- **Evaluate tutor agents on teaching, not answering.** Ask whether the system elicits learner reasoning, adapts after failure, and verifies transfer.
- **Report judgment and enactment separately.** A high score on packaged teaching decisions says little about the same system's behavior in a tutorial or workflow.
- **Treat consequential LMS action as bounded delegation.** Require that evidence precede action, that changes land in designated objects, and that messages stay within authorized audiences.
- **Expect over-helpfulness and design against it.** Systems are weakest with shortcut-seeking learners, so objectives should reward calibrated support over immediate answer delivery.

## Limitations

- **Simulated learners and a synthetic LMS.** Controlled comparison excludes any link to real classrooms or longitudinal learning outcomes.
- **Coverage is weighted toward STEM** even though tutoring spans 13 disciplines, so findings may not transfer to other subjects or learner populations.
- **Task-level contracts, not learning.** Success means satisfying an evidence-to-trace contract, and the transfer probe uses one fixed weak model with zero headline weight.

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