---
title: "The Impact of an LLM-Based Educational Agent on Learning Achievement, Cognitive Dynamics, and Student Perceptions in Computer Science Education"
created: "2026-08-22T05:20:54-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
foundations: [agentic-ai, cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [cognitive-diagnosis, intelligent-tutoring, learning-analytics, llm]
methods: [network-analysis]
research_method: [system development, experiment]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/li-dbagent-llm-educational-agent-cs-2026.md']
confidence: high
audience: [instructors, instructional designers]
page_kind: [evaluation]
---

> **Synthesis:** This large-scale quasi-experiment (N = 313 sophomores, four authentic classes, four weeks) evaluated DBagent — a [[discipline-specific-aied|domain-specific]] [[llm|LLM]]-based educational agent for an undergraduate database course with tool use, memory, and goal-directed reasoning. The agent-enriched environment significantly improved learning [[learning-gains|achievement]], but [[learning-analytics|lag sequential analysis]] of interaction logs revealed a distinctive cognitive profile: high-frequency lower-order engagement (Remember/Understand, ~54.5%) driven by psychological safety, organized around a "Query-Evaluation-Query" verification loop — with only 3.92% of interactions reaching higher-order cognition. SEM confirmed positive perceptions sustain engagement via satisfaction.

## Key Findings

1. **Improved learning achievement.** The agent-powered context significantly outperformed traditional instruction; the top experimental class beat the control on both tasks (Z = 3.49, Z = 5.15, p < .001), with the largest effect on complex [[problem-solving]] (Task 2).
2. **A shift from social inhibition to psychological safety.** Student-agent interactions were dominated by lower-order cognitive activity (~54.5%) because the agent provided a judgment-free environment that encouraged [[help-seeking]] — interpreted as psychological safety rather than mere dependency.
3. **The "Query-Evaluation-Query" verification loop.** LSA identified a significant QR-EA-QR loop: students offload recall/understanding to the agent, then transition into Evaluation of its output — an "offload-evaluate cycle" distinct from the linear confusion-to-understanding path of human-instructor interaction.
4. **But lower-order lock-in.** Strong self-transition loops within lower-order states (Understand z = 49.08; Application z = 51.48) show learners get "locked" in routine processing, with only 3.92% reaching higher-order cognition — attributed to the agent's unwavering compliance lacking [[pedagogy|pedagogical]] friction.
5. **Perceptions drive engagement via satisfaction.** SEM confirmed learners' positive perceptions of the agent promoted sustained [[student-engagement|engagement]] through the mediating role of satisfaction.
6. **The "prompt engineering gap."** Efficacy was moderated by domain-specific digital readiness — a Geoscience-major class underperformed CS cohorts on Task 2, suggesting non-technical students need targeted [[scaffolding]] to bridge the [[prompt-engineering]] gap.

## What this means for practice

- **Instructors.** Do not read the achievement gain as evidence of higher-order learning: only 3.92% of student–agent interactions reached higher-order cognition, with strong self-transition loops in lower-order states (Understand z = 49.08; Application z = 51.48), so track cognitive engagement alongside test scores.
- **Instructors.** Build verification and critical-evaluation scaffolds around the "Query-Evaluation-Query" loop that [[learning-analytics|lag sequential analysis]] identified — students already move from offloading recall to evaluating agent output, and [[cognitive-diagnosis]] should capture what they actually process, making that evaluation deliberate instead of incidental.
- **Designers.** Design [[desirable-difficulties|productive struggle]] into the agent rather than unconditional compliance, because the agent's unwavering helpfulness produced lower-order lock-in and the psychological-safety advantage carried a [[cognitive-offloading]] risk; [[self-regulated-learning]] must be deliberately supported rather than assumed, and the same argument runs through [[measuring-llm-tutors-teach-vs-solve]] and [[productive-failure]].
- **Designers.** Add targeted [[scaffolding]] for non-technical majors: a Geoscience-major class underperformed the CS cohorts on the complex Task 2, implicating a [[prompt-engineering]] gap created by differing domain-specific digital readiness.
- **Researchers.** Test the psychological-safety reading directly: the high lower-order share (~54.52%) is interpreted as safety rather than dependency, but the design measured interaction logs, not the students' reasons for asking.

## Limitations

- The quasi-experiment used four intact classes (three experimental, one control) with no random assignment, so class-level differences cannot be fully separated from the intervention.
- The study covers one undergraduate database course over four weeks with two open-ended tasks, so the achievement evidence is short-term and single-course, and two experimental classes showed no significant gain on Task 1.
- Cognitive-engagement findings come from lag sequential analysis of interaction logs, and the psychological-safety explanation is inferred from those sequences rather than measured.
- Efficacy varied by cohort — a Geoscience-major class underperformed the CS cohorts on Task 2 — so the pooled improvement masks subgroup differences driven by domain-specific digital readiness.

## Connected Concepts

- [[llm]]
- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[cs-education]]
- [[cognitive-diagnosis]]
- [[cognitive-offloading]]
- [[student-ai-interaction]]
- [[learning-analytics]]
- [[higher-ed]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[scaffolding]]
- [[self-regulated-learning]]

## Connected Articles

- [[conversational-ai-tutors-framework]] — Conversational AI tutors framework
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: pedagogical LLM agents
- [[measuring-llm-tutors-teach-vs-solve]] — Whether LLM tutors teach or solve
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs general AI
- [[deeptutor]] — DeepTutor: open-source agentic tutoring framework
- [[liu-tool-tutor-crutch-programming-2026]] — Tool, tutor, or crutch: grounded theory of AI-assisted programming

## Citation

Li, X., Liu, Z., Jiang, S., Chen, J., & Chen, W. (2026). [*The impact of an LLM-based educational agent on learning achievement, cognitive dynamics, and student perceptions in computer science education*](https://doi.org/10.1186/s40594-026-00641-y). *International Journal of STEM Education*, 13, 51.
