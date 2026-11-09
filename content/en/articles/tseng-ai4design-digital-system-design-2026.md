---
title: "AI4Design: A Human-Centred, Cross-Domain Framework for Generative AI in Digital System Design Education"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [framework]
research_method: [design and evaluation study]
evidence_context: educational
discipline: [engineering education, cs education]
level: [undergraduate, higher ed]
audience: [instructors, curriculum designers, software developers]
sources: ['raw/papers/tseng-ai4design-digital-system-design-2026.md']
source_url: "https://osf.io/preprints/edarxiv/mqknj_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, ai-literacy, learning-design]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [authentic-assessment, oral-assessment, process-oriented-assessment]
---
> **Synthesis:** Tseng (2026) argues that the question about [[generative-ai|generative AI]] in digital system design is not whether students may use it but which decisions they may delegate, which evidence adjudicates the result, and how that authority changes as competence grows. AI4Design is a design-science framework with three layers — an executable tool substrate, a pedagogic orchestration layer with four bounded model roles, and an assurance layer that turns artifacts and traces into grades — governed by six principles that begin with oracle primacy: no generated artifact is accepted on its generator's judgment. A proposed fourteen-week undergraduate course gives students 10% of consequential decisions in week 1 and 100% in week 14, with AI contribution peaking mid-term and withdrawn for the capstone; assessment weights executable acceptance at 35%, a process portfolio at 25%, [[oral-assessment|oral examinations]] at 25%, and an unassisted [[transfer-of-learning|transfer task]] at 15%. The only empirical result is a ten-task benchmark on two local models: Qwen3.5-2B passed 2/10 tasks at first attempt and 4/10 after one repair, Qwen3.5-0.8B passed 0/10 and 1/10, and no students were studied.

## Key Findings

1. **The simulator is an incomplete oracle, and the design starts there.** Generated code can simulate correctly and still be non-synthesizable, latently racy, or correct only for the stimuli applied.
2. **Oracle primacy is the first of six principles.** Acceptance requires an executable oracle derived independently of the artifact; student- or AI-authored tests may supplement but never replace it.
3. **Authority is scheduled, not granted.** Student authority rises from 10/0 in week 1 to 100/0 in week 14, AI support is zero in the opening week and capstone, and weeks 1, 7, and 14 hold AI-off assessments.
4. **Four roles bound what the model may produce.** Tutor, pair, reviewer, and adversary differ in who holds initiative and what is critiqued; adversary alone is judged by its ability to falsify.
5. **The pilot failed on most tasks and on every physical one.** Qwen3.5-2B passed 2/10 at first attempt and 4/10 after one repair; Qwen3.5-0.8B passed 0/10 and 1/10, and both 2B first-pass passes were textual.
6. **Three repairs succeeded, each after a verdict naming the defect.** Two followed a verdict giving expected and actual recess depth, one a missing cutout — motivating but not testing whether localized diagnostics help.
7. **Cross-layer coupling pays only where an oracle is cheap.** Software↔chip and mechanism↔control are feasible now; board↔mechanism is blocked by expensive physics and scarce data, and no reviewed case reaches level 4.

## Why digital design is unusually exposed

Digital design is unusually exposed, Tseng argues, compared with the [[cs-education|computing education]] cases supplying most of the evidence and with [[engineering-education|engineering education]] broadly. A semantics gap comes first: [[llm|language models]] trained mostly on software produce systematic rather than random errors — a reset asynchronous in one branch and synchronous in another, a handshake asserting ready before valid — each a plausible sentence and a broken circuit. Toolchain friction does more: linting, elaboration, simulation, synthesis, and timing analysis each carry their own error vocabulary, and the friction GenAI removes is where procedural knowledge forms. Verification dominance does most: constructing a design requires one correct artifact, verifying it requires reasoning about the space of incorrect ones, and a model that drafts both design and testbench leaves two artifacts that agree with each other and nothing else. Tseng also cites a randomized programming study in which students with unrestricted GPT-4 tutor access did better while assisted and substantially worse on unassisted examinations — outsourced practice, the mechanism [[cognitive-offloading|cognitive offloading]] names.

## Three layers, six principles, four roles

The framework separates what departments conflate. Layer A is a five-stage executable substrate — specification capture, RTL authoring, functional verification, implementation awareness, hardware realization — each stage emitting a machine-readable signal that drives model iteration, feedback, and grading. Layer B gives the model one of four roles: tutor, which explains or diagnoses without producing the assessed artifact; pair, which may propose and must be justified in writing; reviewer, which critiques against a rubric without patching; adversary, which tries to break the artifact. Each role runs through an interaction contract naming intent, constraints, the adjudicating oracle, three anticipated failure modes, and a post-generation justification. Layer C composes five evidence streams: executable acceptance, provenance telemetry, artifact evolution, oral defense, and disclosure. Six principles constrain the whole — oracle primacy, progressive autonomy, visible reasoning, preserved [[productive-failure|productive struggle]], parity with industrial tooling, governance by design — and autonomy expands only where an oracle exists. Tseng treats it as a [[learning-design|learning design]] problem, not a policy problem, with [[ai-literacy|AI literacy]] taught explicitly. The [[human-in-the-loop-ai|control cycle]] has two failure modes: over-trust, where proposals are accepted without adjudication, and under-trust, where the student re-derives everything.

## The authority ladder

The course runs four modules across fourteen weeks, sequenced by epistemic transition rather than tool family. Module 1 is deliberately low-AI so students meet the toolchain, the oracle, and the diagnostic vocabulary before assistance attaches; Module 2 makes the model a pair while construction volume is high and the oracle cheap; Module 3 inverts the objective from producing artifacts to falsifying them; Module 4 asks students to defend a system. The progression is monotone in the obligation to adjudicate, which is what [[scaffolding]] means here — not less support but a rising evidentiary burden. The schedule moves from 10/0 in week 1 to 100/0 in week 14, with every deliverable adjudicated by a named oracle. Weights are 35% executable acceptance, 25% [[process-oriented-assessment|process portfolio]], 25% [[oral-assessment|oral examinations]] at weeks 7 and 14, and 15% [[authentic-assessment|an unassisted transfer task]]. Tseng estimates sixty students need one instructor and two teaching assistants trained in oracle authoring, which he calls the largest institutional barrier; the evaluation is a three-year pilot targeting roughly 120 students.

## The benchmark and how far the claims reach

The technical pilot built ten independent tasks, two in each of five domains — software, firmware, board design, enclosure design, chip design — adjudicated by Python suites, a board rule engine, a dimensional checker, and hidden testbenches. Both models ran in Q4_K_M GGUF quantization through llama.cpp at temperature 0, top-p 1, a 4096-token context, at most 900 completion tokens per attempt, and eight CPU threads, with one repair on a diagnostic truncated to 400 characters. Qwen3.5-2B passed 2/10 at first attempt and 4/10 after repair, Qwen3.5-0.8B passed 0/10 and 1/10, all six spatial or temporal tasks failed initially for both models, and generation took 24.5 and 8.2 minutes. Failures mixed semantic violations, schema deviations, and build errors — invented mounting-hole coordinates, keep-out violations, incorrect recess depth, illegal RTL drivers. Nine of an estimated twenty-five person-hours went to four oracles and two testbenches, supporting the claim that the scarce skill is oracle authoring rather than [[prompt-engineering|prompt engineering]].

## What this means for practice

- **Instructors.** Write the acceptance check before the assignment and grade the adjudication sequence — contract, rejected proposal, root-cause note — because a co-produced module looks identical whether copied, generated, or understood.
- **Curriculum designers.** Schedule AI withdrawal rather than announcing a policy: three AI-off windows and a zero-AI capstone separate assisted fluency from competence.
- **Developers.** Treat the verdict format as a design object. Verdicts naming the quantity and its expected value supported all three successful repairs; symptom-only verdicts leave the next attempt under-guided.
- **Researchers.** Adopt the protocol rather than its numbers: the authority percentages are design intentions, and the instruments for [[trust-calibration|trust calibration]], unassisted transfer, and implementation fidelity can run as written.

## Limitations

- No students were studied; the only empirical result is ten independent tasks on two quantized local models, one run each, which cannot estimate variability across decoding settings.
- The ten tasks confound domain, task difficulty, artifact length, schema sensitivity, and oracle strictness, and all-or-nothing checks obscure partial competence.
- Framework, curriculum, and evaluation were designed together without external expert validation or classroom piloting; the review was targeted, not systematic.
- The authority percentages are design intentions rather than measurements, and the course's [[assessment-validity|assessment validity]], staffing model, and cost projections remain untested proposals.
- The open-source flow differs from commercial flows in corner cases, particularly timing sign-off, so tool-specific relearning is expected.
- The evaluation pilot targets approximately 120 students across three years, which the paper calls estimation-oriented rather than adequately powered.

## Citation

Tseng, K.-K. (2026). [*AI4Design: A Human-Centred, Cross-Domain Framework for Generative AI in Digital System Design Education*](https://osf.io/preprints/edarxiv/mqknj_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/mqknj_v1
