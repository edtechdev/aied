---
title: "The Impact of an LLM-Based Educational Agent on Learning Achievement, Cognitive Dynamics, and Student Perceptions in Computer Science Education"
created: "2026-08-22T05:20:54-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [llm, agentic-ai, cs-education, intelligent-tutoring, cognitive-diagnosis, cognitive-offloading, student-ai-interaction, higher-ed, learning-analytics]
research_method: [system development, experiment]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/li-dbagent-llm-educational-agent-cs-2026.md']
confidence: high
---

> **Synthesis:** This large-scale quasi-experiment (N = 313 sophomores, four authentic classes, four weeks) evaluated DBagent — a [[discipline-specific-aied|domain-specific]] [[llm|LLM]]-based educational agent for an undergraduate database course with tool use, memory, and goal-directed reasoning. The agent-enriched environment significantly improved learning [[learning-gains|achievement]], but [[learning-analytics|lag sequential analysis]] of interaction logs revealed a distinctive cognitive profile: high-frequency lower-order engagement (Remember/Understand, ~54.5%) driven by psychological safety, organized around a "Query-Evaluation-Query" verification loop — with only 3.92% of interactions reaching higher-order cognition. SEM confirmed positive perceptions sustain engagement via satisfaction.

## Key Findings

1. **Improved learning achievement.** The agent-powered context significantly outperformed traditional instruction; the top experimental class beat the control on both tasks (Z = 3.49, Z = 5.15, p < .001), with the largest effect on complex problem-solving (Task 2).
2. **A shift from social inhibition to psychological safety.** Student-agent interactions were dominated by lower-order cognitive activity (~54.5%) because the agent provided a judgment-free environment that encouraged [[help-seeking]] — interpreted as psychological safety rather than mere dependency.
3. **The "Query-Evaluation-Query" verification loop.** LSA identified a significant QR-EA-QR loop: students offload recall/understanding to the agent, then transition into Evaluation of its output — an "offload-evaluate cycle" distinct from the linear confusion-to-understanding path of human-instructor interaction.
4. **But lower-order lock-in.** Strong self-transition loops within lower-order states (Understand z = 49.08; Application z = 51.48) show learners get "locked" in routine processing, with only 3.92% reaching higher-order cognition — attributed to the agent's unwavering compliance lacking [[pedagogy|pedagogical]] friction.
5. **Perceptions drive engagement via satisfaction.** SEM confirmed learners' positive perceptions of the agent promoted sustained [[student-engagement|engagement]] through the mediating role of satisfaction.
6. **The "prompt engineering gap."** Efficacy was moderated by domain-specific digital readiness — a Geoscience-major class underperformed CS cohorts on Task 2, suggesting non-technical students need targeted [[scaffolding]] to bridge the [[prompt-engineering]] gap.

## Implications

This study provides empirical evidence for [[intelligent-tutoring]] and [[agentic-ai|agent-based]] learning: [[agentic-ai|autonomous LLM agents]] can improve achievement and reduce social inhibition, but their psychological-safety advantage comes with a [[cognitive-offloading|cognitive offloading]] risk — lower-order tasks are offloaded and students can become locked in routine processing without [[scaffolding]] that introduces productive [[desirable-difficulties|struggle]]. The finding that only ~4% of interactions reach higher-order cognition echoes the knowledge base's [[measuring-llm-tutors-teach-vs-solve|teach-vs-solve]] and [[stanford-evidence-base-ai-k12-2026]] evidence: agent compliance must be designed with pedagogical friction rather than unconditional help.

The offload-evaluate cycle and lower-order distribution connect directly to [[cognitive-diagnosis]] (evaluating what students actually process) and [[cognitive-offloading]]. The psychological-safety mechanism and the prompt-engineering gap inform [[ai-literacy]] and [[student-ai-interaction]] — and argue for building verification and critical-evaluation scaffolds into agent design. For [[cs-education]] and [[higher-ed]] practice, the results caution that an agent that always answers can inadvertently suppress the higher-order [[critical-thinking]] that the course intends to cultivate, and that [[self-regulated-learning]] must be deliberately supported rather than assumed. The pedagogical-friction argument also aligns with the knowledge base's broader concern about [[ai-misuse-learning-harm]] and the need to design for [[productive-failure]] rather than effortless output.

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
