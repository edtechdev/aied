---
title: "Leaks by Installments: Cross-Session Answer Disclosure in LLM Tutors and a Ledger-Based Defense"
created: "2026-11-25T09:08:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
published: "2026-11-23"
type: article
authors: ["Venkata Muttineni", "Karthik Narayan", "Christopher David"]
venue: "arXiv preprint (cs.CR)"
evidence_context: educational
foundations: [academic-integrity, cognitive-offloading]
pedagogy: [help-seeking, student-ai-interaction]
technology: [llm, intelligent-tutoring, rag]
assessment: [formative-assessment]
methods: [benchmark]
ethics: [ai-misuse-learning-harm, privacy, guardrails]
level: [higher ed]
audience: [educational technology developers, software developers, instructors]
page_kind: [implementation]
research_method: [system development, experiment]
sources: ["raw/papers/muttineni-llm-tutor-cross-session-leakage-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Muttineni and colleagues (2026) show that a [[learners|learner]] does not need to ask an [[llm|LLM]] tutor for the answer all at once. Existing safeguards judge each reply inside the current conversation, so a learner can split a solution across sessions, retry after a refusal, or — the attack that defeated every guard they tested — ask for a fully worked solution to a "practice" version of the same problem with different numbers. Their defense is a per-learner disclosure ledger: every problem becomes a typed solution graph, every reply is matched against what that learner has already been shown, and a reply is released only while the steps the learner could now derive stay below a budget. Across a 3,000-problem simulation and two live open-weight tutors on 60 problems, the ledger cut leakage through renumbered variants from complete or near-complete success to roughly one attempt in five, while honest learners still finished 98% of problems. It did not reduce split-request leakage beyond a per-session gate.

## Key Findings
1. **Renumbered practice variants defeated every per-session gate.** Leakage through renumbered variants stayed at its ungated level under both a per-turn and a per-session check, because none of the assigned problem's values appear in a worked variant.
2. **The ledger cut that attack where the others did not.** Variant leakage fell by 86% for one tutor and 82% for the other, measured against the per-session gate on the same replies.
3. **Simulation results were starker.** Over 3,000 problems with twelve attacker sessions each, variant leakage dropped from complete success to about one attempt in ten, with honest completion unchanged at 99.5%.
4. **Direct answer demands were stopped by any gate.** "Answer key" pressure succeeded in roughly two thirds and three quarters of ungated attempts and in none of the gated ones.
5. **Split requests were not improved in the live runs.** The ledger matched but did not beat a per-session gate, and the simulated gain appeared only with longer problems and more sessions.
6. **The structure parser sets the floor on leakage.** Changing only the parser, from each tutor parsing its own problems to a larger shared parser, lowered variant leakage from 0.20 and 0.43 to 0.08 and 0.18.
## Why conversation-level guards miss it

An LLM tutor accepts free-form problems, so it has no problem bank to recognize that two requests concern the same exercise. Classic [[intelligent-tutoring|intelligent tutoring systems]] track hint levels per student over authored problems with known solution steps; that infrastructure is what an LLM tutor lacks. Per-turn guards check whether a candidate reply states the final answer. Per-session guards review a whole transcript so partial hints are judged together. Both treat the conversation as the unit of accounting, and a learner can open as many conversations as they like.

The attacks are ordinary student behavior rather than exotic exploits: ask for one intermediate step per session with the problem reworded each time, ask for a worked solution to a practice version, or open a fresh session after a refusal. The third is what the ledger's refusal counter addresses, by tightening structural matching for that learner and problem class after repeated refusals.

## How the ledger decides what to release

When a learner first presents a problem, a solver produces a reference solution, which is converted into a directed acyclic graph: each node holds a canonical value and a skill type, and edges record which step depends on which. The ledger stores that graph per learner and per class of equivalent problems, together with the values already disclosed, the skill types already shown in worked solutions, the steps the learner has demonstrated by submitting a correct value, and a refusal count.

The gate then parses the tutor's draft reply rather than the learner's wording. It extracts the result values the reply would state and, for a worked solution, the typed graph of that solution, matching by value index or by structure hash and then by type-labeled subgraph isomorphism. Because a renumbered variant keeps the structure of the original, reworded requests and different numbers both fail to hide it. Release depends on derivability: the gate computes the closure of what the learner already holds plus what this reply would add, and withholds the reply if that closure reaches the final answer or exceeds a share of the remaining steps. Withheld replies are replaced by a guiding question about the lowest blocked step, and demonstrated steps are excluded from the budget so a learner making progress keeps receiving help.

## What the evaluation used, and what it did not test

The simulation generated problems with four to eight steps. The live tutors were Qwen2.5-3B-Instruct and Phi-3.5-mini-instruct, each given a system instruction not to reveal answers, run greedily on 60 four-step mathematics word problems on two T4 GPUs. Every tutor reply in the evaluation is a real model output, and each policy was applied to the same replies, with pass/fail criteria written into the code before each run. Learner behavior, however, was scripted: both the attackers and the honest learners followed fixed policies rather than being real students.

## What this means for practice

- **Instructors.** Assume that "do not give the answer" in a system prompt is not a control. If graded work runs through an AI tutor, the question to ask is what state the system keeps across sessions, not what its instructions say.
- **Educational technology developers.** Match on the content of the tutor's reply, not on the learner's wording. The attack that survived every per-session guard was recognizable only by the structure of the solution being offered.
- **Assessment designers.** Rotating the numbers on a practice problem is not an anti-cheating measure against an LLM tutor; it is the attack's easiest form. Variants of a problem share its solution path whatever the values.
- **Institutions.** A per-learner ledger is defeated by a learner holding several accounts, so the control belongs with authenticated identity plus a budget set by the course, not with the model alone.

## Limitations

- The live tutors are 3–4B-parameter models and the problems are four-step arithmetic word problems built from six templates; larger tutors may leak differently, and proofs, code or essays need their own solution-graph builders.
- Attacks and honest behavior were scripted, so real students' phrasing may defeat the parser in ways this evaluation does not show.
- Remaining leakage tracks parser recall, which was 0.82 in the second run; a learner can hunt for problems the parser cannot structure.
- In the live runs the ledger gave no gain over a per-session gate on split requests; the simulated gain depended on longer problems and twelve sessions.
- A tighter budget lowers leakage and honest completion together, so the budget is a teaching decision rather than a technical setting.
- A learner with multiple accounts bypasses any per-learner ledger, and no human subjects took part.

## Citation

Muttineni, V., Narayan, K., & David, C. (2026). [Leaks by Installments: Cross-Session Answer Disclosure in LLM Tutors and a Ledger-Based Defense](https://arxiv.org/abs/2611.31429). *arXiv preprint arXiv:2611.31429*.
