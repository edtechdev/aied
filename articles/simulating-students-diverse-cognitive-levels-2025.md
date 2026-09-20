---
title: "Embracing Imperfection: Simulating Students with Diverse Cognitive Levels Using LLM-based Agents"
created: "2026-08-12T22:10:30-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
foundations: [agentic-ai, computational-thinking]
technology: [cognitive-diagnosis, generative-ai, knowledge-graph, llm, simulating-students, student-modeling]
methods: [benchmark]
audience: [software developers]
research_method: [system development]
sources: ['raw/papers/2505.19997.md']
confidence: high
discipline: [cs education]
page_kind: [framework, evaluation]
---

> **Synthesis:** Wu et al. (2025, ACL) tackle the core challenge of [[simulating-students]]: LLMs trained as "helpful assistants" produce overly perfect answers and fail to model the natural imperfections and varied cognitive levels of real learners. They propose a training-free framework that builds a cognitive prototype of each student from a [[knowledge-graph]], predicts performance on new tasks, and iteratively refines simulated solutions via beam search to reproduce realistic mistakes — achieving a 100% improvement in simulation accuracy on a new Student_100 dataset.

A central obstacle to valid student simulation is that LLMs are optimized to generate correct, polished responses. Real students, however, vary in cognitive level and make characteristic mistakes. Simulated students that answer too well — or too randomly — are not faithful models of learners. This paper addresses that gap directly.

## Key Findings

1. Current [[llm]]-based agents systematically overestimate the cognitive level of weaker students, producing overly advanced responses that miss the error-prone behaviors expected of real learners.
2. A training-free framework constructs an interpretable cognitive prototype per student from a [[knowledge-graph]] of past learning records, then maps that prototype onto new tasks to predict behavior at the knowledge-concept level rather than by superficial textual similarity.
3. Beam search-based self-refinement iteratively scores and selects candidate simulated solutions against the predicted behavior, reproducing realistic, individualized mistakes without fine-tuning on error-rich data.
4. On the new Student_100 dataset (100 students, Python programming, 5,000 learning records), the method consistently outperforms baseline models, achieving a 100% improvement in simulation accuracy and realism, and it generalizes to Java and C++ via the CodeNet metadata.

## The framework

The proposed method is **training-free** — it requires no fine-tuning on simulated student data, which avoids the risk of embedding incorrect knowledge and makes it broadly applicable. It proceeds in three stages built around a per-student cognitive prototype.

### Cognitive prototype construction

For each student, past learning records are processed iteratively to extract knowledge concepts and their relationships (Prerequisite_of, Used_for, Hyponym_of, Part_of), assembled into a natural-language [[knowledge-graph]]. Each concept is then tagged with a local cognitive state ("Good" or "Bad") from the student's task performance, and these local states are merged into a global cognitive prototype that summarizes overall mastery per concept. Unlike implicit neural representations, this prototype is interpretable and grounds [[student-modeling]] in explicit conceptual knowledge.

### Concept-aware behavior prediction

Rather than retrieving the most textually similar past task — which can mislead (e.g. a "factorial" task retrieving a "double" task) — the model maps the student's cognitive prototype onto the new task. It selects the most relevant knowledge concepts and the past record sharing the most of them, then predicts the student's expected behavior, including whether they will solve the task and what specific errors they are likely to make. This deep conceptual grounding outperforms random, similarity-based, and ability-level baselines, supporting [[cognitive-diagnosis]] of the simulated learner.

### Beam search-based solution simulation

Given the predicted behavior, the model first generates a weak candidate solution, then iteratively refines it. At each step, `B` candidate solutions are sampled, scored by a value model on alignment with the predicted behavior, and the best is carried forward until a threshold is met or the iteration limit is reached. This self-evaluation-guided refinement reproduces the kinds of mistakes a real student at that level would make — the "imperfection" that fidelity requires. The authors find that more powerful models benefit more from self-refinement, and that refinement underperforms when the underlying behavior prediction is low-quality.

## The Student_100 dataset

Because existing [[knowledge-tracing]] datasets lack textual task statements and solutions, and error-diagnosis datasets lack annotated task-solving sequences, the authors curate Student_100. Drawn from an online programming platform (PTA), it comprises 100 students solving Python programming tasks, each with 50 well-annotated task-solving records (5,000 total; 40 used as past learning records and 10 for simulation). Records are restricted to a one-week window to assume a stable cognitive state, and 10 trained annotators supplied task descriptions and behavior analyses. Two additional 5-student groups built from CodeNet metadata validate the method on Java and C++. This data foundation also connects to [[computational-thinking]] and [[cs-education]] as the programming-task domain.

## What this means for practice

- **Developers.** Model the behavior before you model the solution: the framework predicts whether the student will solve the task and which mistakes they are likely to make, then conditions generation on that prediction, because generating a solution directly produces answers that exceed the modeled student's cognitive level.
- **Developers.** Keep the value model inside the refinement loop — removing self-evaluation while retaining refinement degraded performance, so scoring candidates against the predicted behavior is what keeps the iteration pointed at realistic mistakes rather than at correct code.
- **Developers.** Tune the loop cheaply and stop early: performance stabilized or slightly declined once refinement iterations passed 3 (the authors attribute this to over-correcting the solution) and gained nothing beyond a beam size of 2, so L = 3 and B = 2 balances quality against simulation cost.
- **Developers.** Feed the cognitive prototype more history before trusting a simulation: behavior prediction accuracy reached 0.94 with 40 past learning records, and quality kept improving at that volume rather than plateauing.
- **Researchers.** Budget for the hard cases: simulation quality correlates positively with student cognitive ability, so simulating lower-cognitive-level students is the more expensive and less reliable task, and the framework should be validated on them rather than only on well-performing learners.

## Limitations

- Validation is confined to programming, on 100 students solving Python tasks on one online platform (PTA) with 5,000 annotated records; the authors state that data accessibility bounded the domain and treat extension to subjects such as mathematics as future work.
- The grid of roughly 100 experimental settings ran on a randomly selected subset of 15 students because simulation costs about 20 minutes per student plus multiple API calls, so most of the analysis rests on a subset — and the cross-language check uses only 5 students each for Java and C++.
- The backbone of the evaluation is [[llm]]-based scoring, with a human check by 10 undergraduate Python students rating solutions on a 1-5 scale, two independent raters per solution averaged, and the human study comparing the method against only the single second-best setting rather than the full baseline set.
- The method assumes a stable cognitive state within a one-week window of records and models textual and behavioral patterns only; the authors note that multimodal signals such as visual or auditory cues may also shape students' cognitive processes and are not represented.

## Connected Concepts

- [[simulating-students]]
- [[student-modeling]]
- [[knowledge-graph]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[generative-ai]]
- [[llm]]
- [[agentic-ai]]
- [[adaptive-learning]]

## Connected Articles

- [[valid-student-simulation-llm-2026]] — Toward Valid Student Simulation
- [[simulating-students-llm-review-2026]] — Simulating Students with LLMs: A Review
- [[agentschool-multi-agent-simulation-education-2026]] — AgentSchool: Multi-Agent Simulation for Education
- [[history-aware-student-simulation]] — History-Aware Profiles for Student Simulation
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving?
- [[simulating-students-java-programming-errors-llms]] — Simulating Students' Java Programming Errors
- [[llm-student-simulation-teacher-insights]] — Can LLMs Simulate Human Learners?

## Citation

Wu, T., Chen, J., Lin, W., Li, M., Zhu, Y., Li, A., Kuang, K., & Wu, F. (2025). [*Embracing imperfection: Simulating students with diverse cognitive levels using LLM-based agents*](https://arxiv.org/abs/2505.19997). In *Proceedings of ACL 2025*.
