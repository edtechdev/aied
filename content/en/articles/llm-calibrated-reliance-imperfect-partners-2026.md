---
title: "Can LLMs Trust Appropriately? Evaluating Calibrated Reliance on Imperfect Partners"
created: "2026-10-27T09:41:00-04:00"
updated: "2026-10-27T09:41:00-04:00"
type: article
authors: ["Chu, M.", "Huang, J."]
published: "2026"
venue: "arXiv"
source_url: https://arxiv.org/abs/2610.34107
sources: ['raw/papers/llm-calibrated-reliance-imperfect-partners-2026.md']
confidence: high
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
page_kind: [evaluation]
research_method: [design and evaluation study]
level: []
audience: [researchers, software developers, educational technology developers]
technology: [llm]
methods: [benchmark]
ethics: [trust-calibration, ai-sycophancy]
foundations: [human-ai-collaboration, agentic-ai]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-27"
    agent: hermes-agent
---

> An [[agentic-ai|AI agent]] that works alongside a human or another model has to decide, over and over, whether to accept a partner's contribution, spend something verifying it, or act alone. This benchmark asks whether [[llm|language models]] do that rationally: 324 scenarios across 23 collaboration categories, each a three-stage decision problem with explicit costs, feedback and transition dynamics, scored against analytically computed optimal choices across 972 decision opportunities. One model, GPT-5.6 Sol, picks the optimal action at all three stages of every scenario it is evaluated on, while the other six show structured pathologies: buying verification with no expected value, over-purchasing safeguards, prioritizing immediate savings over learning about a partner, and routing help to the wrong channel. Supplying explicit posterior distributions fixes some errors and creates others, which the authors read as evidence that [[trust-calibration|calibrated trust]] needs more than better probability estimates.

## Key Findings

- **Calibrated reliance is measurable, and most models fail it.** Across 324 scenarios in 23 collaboration categories, only GPT-5.6 Sol reaches optimal actions at all three stages (24 of 24 on the reliability subset), while five other models solve between 12 and 20.
- **Evidence sensitivity is not the same as appropriate action.** Models that update on partner evidence still take actions that are suboptimal given the remaining horizon, so a model can be responsive and still miscalibrated.
- **Zero-value verification is the most common economic error.** Several models purchase tests whose expected value of information is zero, paying to learn something that cannot change a later decision.
- **Over-insurance competes with under-cooperation.** Some models procure excessive safeguards, while others discount future cooperation in favor of immediate savings, the two opposite failure directions on the same trade-off.
- **Better information is not a fix.** Providing explicit posterior distributions corrects certain errors and introduces new ones, and Qwen3.8 27B improves from 12 to 20 of 24 scenarios while GPT-5.6 Sol declines from 24 to 23.
- **Assistance is often routed down the wrong channel.** Models misallocate help across available channels even when the total amount of assistance they provide is reasonable.

## Why trust needs a decision-theoretic benchmark

[[trust-calibration]] in education is usually studied as a belief, whether a learner or a teacher holds an accurate sense of when a system is reliable. This work models it as a policy: what an agent does, given a partner of unknown reliability, when accepting, verifying, and assisting all cost something and the horizon is short. Each scenario is a partially observable Markov decision process whose optimal actions can be computed exactly, so a model's choice is compared to the best possible action rather than to a rating or a preference judgment. That construction is what lets the paper separate evidence sensitivity from appropriate reliance, two things [[self-report-measures|self-report]] and preference studies routinely conflate.

The scenarios reach beyond chat: a partner can be incomplete, inconsistent or wrong, feedback emissions are noisy, and costs differ by action, so the correct policy combines learning about the partner with acting on what is known. Because the authors additionally run 36 controlled-history probes, they can ask whether a model's decision changes when the only thing that changed is the accumulated evidence, which is the operational definition of calibrated reliance.

## The four pathologies, and what they imply for design

The failure modes are economically legible. Buying a verification test with zero expected value of information is a straightforward waste that a forward-looking agent should never commit; excessive safeguard procurement is the same error in the opposite direction, paying for protection a short remaining horizon cannot use; prioritizing an immediate saving over cooperative learning is myopia about a partner's value; and misallocating assistance channels suggests the model knows help is warranted but not where it belongs.

For anyone building a [[human-ai-collaboration|human–AI workflow]] or a multi-agent tutoring pipeline, these are design requirements rather than curiosities. If a model cannot price verification, a system that lets it decide when to re-check a tool result will produce wasteful or under-checked behavior, and the fix is likely to be a constrained decision interface, not a stronger base model. The paper's own partial remedy, handing over the posterior, is instructive: it improves the weakest model substantially but does not make the strongest one better, which is what you would expect if the remaining gap is in the action policy rather than in the belief.

## Reading the results against education uses

The education analogue is concrete. A [[pedagogical-agent|tutor agent]] that consults a [[student-modeling|student model]], a retrieval tool and a peer agent has to decide when to re-query, when to escalate to a teacher, and when to accept a student's self-report. The benchmark's structure maps onto those choices, and its central finding is that reliability is a property of the joint decision, not of the partner description. A reviewer worried about [[ai-sycophancy|sycophancy]] should note the implication: an agent that accepts too readily and one that over-verifies are the same miscalibration seen from two sides, and neither is corrected by telling the model how reliable its partner is.

## What this means for practice

- **Constrain when agents may spend on verification.** If a model cannot price a test's expected value of information, put the threshold in the system prompt or the orchestration logic rather than leaving the decision to the model.
- **Evaluate agents on decision sequences, not single answers.** Score a tutoring or research agent against the best available action at each step, including the option to abstain or escalate.
- **Do not assume that exposing confidence fixes reliance.** Posterior information helped the weakest model here and slightly harmed the strongest, so measure the effect before building it into a workflow.
- **For developers, log the actions not taken.** The failure modes show up as misallocated assistance and refused cooperation, which success-only logging will never surface.

## Limitations

- Every scenario runs for a fixed three-stage horizon, chosen so the optimal policy is analytically exact, so longer collaborations with reputation formation and partner drift are untested.
- Each scenario is evaluated on a single trajectory under pre-sampled, deterministic feedback draws, which controls comparability but does not capture model output variance across repeated trials or sampling temperatures.
- Scenario categories and costs are authored by the benchmark designers, so which pathologies count as notable depends on those choices.
- The models evaluated are identified by commercial names and versions; the results describe those builds rather than LLM behavior in general.
- The benchmark measures decisions in a structured game, not behavior in real classrooms or research workflows where partners are humans with their own models of the agent.

## Citation

Chu, M., & Huang, J. (2026). [*Can LLMs Trust Appropriately? Evaluating Calibrated Reliance on Imperfect Partners*](https://arxiv.org/abs/2610.34107). arXiv:2610.34107.
