---
title: Evaluating a Visual Query Tracer and Builder for Learning Declarative Logic Programming
created: "2026-07-22T04:33:04-04:00"
updated: "2026-09-20T03:44:50-04:00"
type: article
pedagogy: [active-learning, scaffolding]
technology: [visualization]
research_method: [qualitative]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.18864.md']
confidence: high
audience: [instructors, learners]
---

> **Synthesis:** Nemo Explain Visualizer (nev) is an interactive visual query tracer and builder for the Datalog reasoner Nemo. Although built for expert users, the authors conducted a [[qualitative-research|qualitative]] study with 14 participants at varying levels of involvement in a university [[knowledge-graph]] course to assess whether such tools help students learn declarative logic programming.

Participants rated the tracer positively for building intuition about query evaluation, illustrating how visualization can act as [[scaffolding]] for otherwise abstract material. The findings sit within [[programming-its]] and [[cs-education]] [[research-methods-aied|research]] on tools that make invisible computation visible, and connect to [[stem-education]] efforts to teach formal methods. They also bear on [[pedagogy-ai-mistakes]] discussions about when automation helps versus hinders conceptual understanding in [[higher-ed]] computing courses.

## Key Findings

- In a qualitative study with 14 participants spanning different levels of course involvement, the Nemo Explain Visualizer (nev) was well received as an interactive tracer and builder for Datalog query evaluation.
- Learners reported that tracing queries visually built intuition about how evaluation proceeds, even though the tool was originally designed for expert users rather than students.
- The tool functioned as [[scaffolding]] by making invisible computation concrete, helping novices connect declarative specifications to their execution semantics.
- The results support the wider claim that [[visualization]] of formal/symbolic machinery aids learning in declarative logic programming and [[computational-thinking]] development.

## What this means for practice

- **Instructors.** Adopt the Nemo Explain Visualizer as [[scaffolding]] in declarative logic programming courses, not only as a developer utility: the 14 participants reported that visual tracing is how they built intuition about query evaluation.
- **Instructors.** Expect to prompt novices: less experienced participants only understood the program shortly before the third task and needed hints from the interviewers, while the most experienced participant identified the graph structure and purpose during the first task.
- **Instructors.** Build validation checks into exercises, such as identifying equivalent ways to unrestrict a query, which most participants answered correctly during the interviews.
- **Learners.** Trace queries node by node to connect declarative rules to execution semantics, and read the per-node performance strips to see where evaluation time goes.
- **Learners.** Use the linked editor view to jump from a rule to its highlighted lines in the code, the movement between query and program the tool was extended to support.

## Limitations

- The evaluation involved 14 participants from a single university knowledge-graph course at varying levels of involvement rather than the full target group, and the authors call for evaluations that invite more participants sampling both experts and students.
- No baseline condition (for example a command-line interface) was included, so the positive technology-acceptance and user-experience scores are evidence of subjective support only and cannot support quantitative claims about learning benefit.
- Sessions were conducted in interviews with hints from the interviewers rather than unsupervised use, and no comprehension, grade or other learning-outcome measure was collected.
- The study surfaced tool bugs (request queuing under rapid pagination, the replace-symbol interaction in the editor) and only discussed scalability, leaving node grouping, focus+context techniques and indicators for infinite recursion to future versions.

## Connected Concepts

- [[scaffolding]]
- [[cs-education]]
- [[stem-education]]
- [[higher-ed]]
- [[computational-thinking]]
- [[knowledge-graph]]
- [[active-learning]]
- [[transfer-of-learning]]
## Connected Articles

- [[programming-its]]
- [[pedagogy-ai-mistakes]]
- [[code-anchor-multi-view-visualization]]
- [[supplynet-visual-exploratory-learning]]
## Citation

Julián Méndez, Lukas Gerlach, Tobias Wieland, Alex Ivliev, et al. (2026). [Evaluating a Visual Query Tracer and Builder for Learning Declarative Logic Programming](https://arxiv.org/abs/2607.18864). .
