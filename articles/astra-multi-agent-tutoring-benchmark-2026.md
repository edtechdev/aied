---
title: "ASTRA: A synthetic benchmark for trace-based evaluation of socially intelligent multi-agent tutoring"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
sources: ["raw/papers/astra-multi-agent-tutoring-benchmark-2026.md"]
foundations: [agentic-ai]
pedagogy: [collaborative-learning]
technology: [learning-analytics, simulation]
confidence: medium
research_method: [benchmark, system development]
discipline: [cs education]
audience: [researchers, learning analytics designers, edtech designers]
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Oyelere introduces **ASTRA (Adaptive Socially-intelligent Team Reasoning Agents)**, a multi-agent tutoring prototype and benchmark framework for studying collaborative programming with socially differentiated [[agentic-ai|AI agents]]. Because research-participant access was not yet available, the paper releases an open **synthetic benchmark dataset** that mirrors ASTRA's logging schema and a prespecified between-subjects design (N = 540 participants; 360 sessions; 1,440 task episodes) across a bank of 20 short Python programming tasks. ASTRA supports three collaboration configurations: *alone_tutor* (one learner with a Tutor agent), *pair_tutor* (two learners with a Tutor agent), and *pair_multiagent* (two learners with both Tutor and Facilitator agents, where the Facilitator prompts coordination and balanced participation).

The framework formalizes collaborative programming as a partially observable multi-agent process built on a **CASM (Cognitive–[[affective-computing|Affective]]–Social Model)** latent state, decomposed into cognitive (Kₜ), [[metacognition|metacognitive]] (Mₜ), socio-emotional (Sₜ), and group-[[regulation]] (Gₜ) components. Role-differentiated agents — a [[pedagogy|Pedagogical]] Tutor Agent (PTA) focused on conceptual and metacognitive support and a Collaborative Group Agent (CGA)/Facilitator focused on participation and social regulation — condition their policies on an inferred belief state over this latent state, jointly optimizing a multi-objective reward over task progress, metacognitive quality, and participation-oriented equity proxies. The prototype is a Streamlit web application backed by an OpenAI [[llm]] client (gpt-4o-mini), with turn- and task-level logging to JSON Lines files and a human marker interface for grading.

The benchmark is deliberately positioned as **simulated evidence for benchmarking, measurement feasibility, and reproducible pipeline development** — not as causal estimates of learning effects. It aims to operationalize "social intelligence" through observable trace behaviors (turn-taking, explanation, verification, peer referencing, participation balance) rather than asserted system descriptions, providing a transparent analysis blueprint for future [[ethics]]-approved validation studies.

## Key Findings

- **Benchmark design.** N = 540 participants allocated evenly across three conditions (180 each), producing 360 sessions — 180 solo in *alone_tutor* and 90 dyadic sessions in each pair condition — with four tasks per session yielding 1,440 task episodes. The nested structure (turns within tasks within sessions, with dyads as the substantive unit) is respected through mixed-effects and cluster-robust modeling.
- **Condition-differentiated interaction dynamics (RQ1).** Dyadic conditions generated substantially more dialogue volume than solo; the *pair_multiagent* condition uniquely produced Facilitator turns (M = 24.14). Verification markers increased from *alone_tutor* (M = 15.13) to *pair_tutor* (M = 16.56) to *pair_multiagent* (M = 17.53), with the strongest model contrast in *pair_multiagent* (rate ratio = 1.159, p < .001). Explanation markers showed smaller, weaker differences.
- **Participation balance in dyads (RQ2).** *pair_multiagent* showed lower turn imbalance (M = 0.103) and word imbalance (M = 0.105) than *pair_tutor* (0.183 and 0.182 respectively), with pair_tutor associated with significantly higher imbalance (Δ = +0.080 and +0.077, both p < .001). Reciprocal [[student-engagement|engagement]] rate differed only slightly and non-significantly (p = .419), suggesting the Facilitator's most detectable trace signature is reducing dominance rather than transforming responsiveness.
- **Performance and verification proxies (RQ3).** Correctness was highest in *pair_multiagent* (M = 0.631) vs *pair_tutor* (0.569) and *alone_tutor* (0.544), with higher odds of a correct solution in *pair_multiagent* (OR = 1.445, p = .007). Tests executed rose strongly in *pair_multiagent* (RR = 1.607, p < .001) with more edge-case mentions (RR = 1.513) and fewer retries (RR = 0.896). Time-to-correct showed limited, non-significant separation.
- **A reproducible, process-sensitive foundation.** The open dataset, schema, and prototype (released as [[open-source]] software) enable stress-testing of trace-based evaluation methods for dialogue processes, dyadic participation balance, and verification behavior before ethics-approved deployments with real learners.

## What this means for practice

- **Researchers.** Use the released synthetic benchmark as a method-development sandbox: build and compare trace-based evaluation pipelines on the open dataset and schema before committing to resource-intensive [[human-in-the-loop-ai|human-in-the-loop]] deployments.
- **Learning analytics designers.** Score collaboration from process traces — turn-taking, explanation, verification, peer referencing, and participation balance — rather than from final-code correctness alone, since fluent GenAI output can obscure whether students actually reasoned and verified.
- **Edtech designers.** Prototype a separate Facilitator role alongside the Tutor agent: under the benchmark's simulated assumptions it lowered dyadic imbalance (M = 0.103 turn and 0.105 word imbalance vs. 0.183 and 0.182 in *pair_tutor*) without changing reciprocal engagement.
- **Researchers.** Reuse ASTRA's nested design and analysis blueprint — turns within tasks within sessions with dyads as the substantive unit, modeled via mixed-effects and cluster-robust methods — when prespecifying your own study.
- **Edtech designers.** Treat the task bank, logging schema, and prototype as a basis for ethics-approved pilots rather than a validated classroom intervention, since the paper positions ASTRA as a benchmark, not a learning-effect intervention.

## Limitations

- The benchmark relies on synthetic agents: the N = 540 participants, 360 sessions, and 1,440 task episodes are simulated with prompted personas and misconception profiles, so the study cannot establish how real learners perceive facilitation or how classroom constraints shape behavior.
- Trace metrics are proxies, not outcomes: participation balance and verification counts index interaction quality rather than cognitive gain, and the paper provides no causal evidence of learning outcomes.
- Domain specificity: task artifacts and tutor scaffolding are optimized for Python syntax and logic errors, leaving transfer to more abstract domains (e.g., creative writing) or hardware-level programming untested.
- Agent performance is tied to the underlying gpt-4o-mini client, and no human-subject data or ethics-approved classroom deployment was collected — empirical validation remains future work.
## Connected Concepts

- [[simulation]]
- [[agentic-ai]]
- [[learning-analytics]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[equity-in-ai-education]]
- [[human-ai-collaboration]]
- [[generative-ai]]

## Connected Articles

- [[agentschool-multi-agent-simulation-education-2026]] — an LLM-powered multi-agent simulation that models learning as state transition for validating educational AI before deployment
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — simulating collaborative problem solving with participant-specific LLM agents and trace-level validation
- [[llm-facilitation-timing-online-discussions]] — the timing of AI facilitation in online discussions, parallel to ASTRA's Facilitator role prompting balanced participation

## Citation

[ASTRA: A synthetic benchmark for trace-based evaluation of socially intelligent multi-agent tutoring and participation-balanced collaboration in introductory programming](https://doi.org/10.1016/j.caeai.2026.100633) — Oyelere, S. S. (2026). *Computers and Education: Artificial Intelligence*, 11, 100633.
