---
title: "Exploring the Effect of Computational Thinking Levels on Students' Learning Performance, Cognition, and Behavior"
created: "2026-08-23T10:00:00-04:00"
updated: "2026-08-23T10:00:00-04:00"
type: article
tags: [computational-thinking, cs-education, self-regulated-learning, learning-gains, k-12]
research_method: [learning analytics]
discipline: [cs education]
level: [k 12]
sources: ['raw/papers/computational-thinking-aica-2026.md']
confidence: high
---

> **Synthesis:** Zhao, Wang, Chen, Kang, and Lan (2026) examined how students' [[computational-thinking|computational thinking]] (CT) levels shape learning when using an [[generative-ai|AI coding assistant]] (AICA) in K-12 Python instruction. In a four-week AICA-assisted coding course, 52 eighth-grade students (26 high-CT, 26 low-CT, split by validated CT pre-test) were compared on learning performance (pre/post-tests), behavior (Lag Sequential Analysis of screen recordings), and cognition (Epistemic Network Analysis of reflection journals). The high-CT group significantly outperformed the low-CT group on post-test performance (72.54 vs. 61.73, p = .031). Behaviorally, high-CT students used the AICA for code understanding, debugging, and explanation; low-CT students used it for immediate answer retrieval and code copying. Cognitively, high-CT students showed strong, well-connected self-regulatory coherence across planning, execution, and self-reflection phases, whereas low-CT students showed a sparse network dominated by help-seeking. The authors propose differentiated instruction: open-ended AICA support for high-CT students and structured SRL guidance for low-CT students.

## Core Finding

Computational thinking level is a decisive learner characteristic in AI-assisted coding education. Students with high CT transformed AICA interaction into significantly greater **learning gains** than low-CT students: the high-CT group outperformed the low-CT group on the post-test (p = .031) despite comparable prior coding knowledge, and did so with more stable, self-regulated, and cognitively integrated behavior. The key mechanism is not the tool itself but how each group engages it—high-CT students used the AICA as a cognitive partner for understanding, while low-CT students used it as an answer source, resulting in shallow learning.

## Computational Thinking as a Differentiating Learner Characteristic

The study positions CT as an independent variable rather than an outcome, arguing that CT's abstraction, decomposition, algorithmic thinking, debugging, and generalization shape how learners collaborate with AI. Prior CT and prior coding knowledge were controlled: the two groups showed comparable pre-test scores (t(50) = 1.86, p = .069), isolating CT level as the differentiating factor. This makes CT a lever for understanding the wide variance in how students benefit from generative AI coding tools—a contribution that grounds [[computational-thinking]] as a process-level predictor of AI-assisted learning outcomes in [[cs-education]].

## Differential Behavior: Understanding vs. Answer Retrieval

Lag Sequential Analysis revealed sharply distinct interaction trajectories. High-CT students showed typical transitions like DP→RC→AAEC→DP—debugging, running code to confirm issues, then asking the AICA to explain code, reflecting logical problem-solving and autonomous code understanding. Low-CT students showed UT→AANQ→CPC→RC—immediately querying the AICA, copying its code, and running it without deeper reflection or verification. Across the three tasks, high-CT students showed stable, persistent independent coding and used the AICA as a cognitive partner when tasks were challenging; low-CT students showed fluctuating engagement focused on task completion rather than understanding. This distinguishes productive use of AI [[scaffolding]] from reliance, with direct implications for [[student-engagement]] quality.

## Cognitive Regulation: Self-Regulated Learning Coherence

Epistemic Network Analysis of reflection journals showed significant group differences in task strategies (χ²=11.226, p=.001), elaboration (χ²=18.281, p<.001), and self-assessment (χ²=7.239, p=.007), all favoring high-CT students. The high-CT cognitive network was dense and balanced across all three SRL phases (planning, execution, self-reflection), evidencing continuous cognitive adjustment and self-monitoring. The low-CT network was sparse, dominated by help-seeking (SH), with weak connections among planning and self-reflection. This empirically models the reciprocal CT–SRL relationship and contributes to [[self-regulated-learning]] by showing that CT supports connected, reflective regulation in AI-augmented environments.

## Differentiated Instruction for AI-Assisted Coding

The authors propose two differentiated strategies. For high-CT students: open-ended AICA access encouraging exploration of multiple code-implementation methods and metacognitive reflection. For low-CT students: structured SRL scripts ("goal setting – strategy selection – monitoring – evaluation") to internalize external prompts into an autonomous regulation cycle, transforming the AICA from an "answer source" into a shared "cognitive partner." This frames the AICA as differentiated [[scaffolding]] whose design must adapt to learner CT to avoid widening equity gaps in AI-assisted learning.

## Relevance to the knowledge base

This article directly links learner cognition (CT) to measurable [[learning-gains]] in a generative-AI tool context, and it demonstrates that self-regulatory coherence, not tool availability, drives success. It is a strong empirical anchor for the knowledge base's [[computational-thinking]] and [[self-regulated-learning]] concepts, and it offers a concrete equity argument: without differentiated scaffolds, AICAs may amplify existing CT disparities, since low-CT students benefit least and rely most. It also connects to [[generative-ai]] and [[scaffolding]] by showing that AI coding assistants function well only when matched to learners' regulatory capacity. The K-12 focus extends the knowledge base's AI-in-education evidence beyond higher education.

## Connected Concepts

- [[computational-thinking]] — CT is the central independent variable; the study empirically demonstrates its role as a differentiating learner characteristic in AI-assisted learning.
- [[self-regulated-learning]] — Cognitive patterns analyzed via ENA show high-CT students display connected SRL coherence (planning–execution–reflection) absent in low-CT students.
- [[learning-gains]] — The high-CT group significantly outperformed the low-CT group on post-test learning performance, directly linking CT to learning gains.
- [[scaffolding]] — The AICA functions as a scaffold, but the authors argue scaffolds must be differentiated by CT level (open-ended vs. structured).
- [[cs-education]] — Context is a K-12 Python coding course using an AI coding assistant; implications for AI-augmented CS education.
- [[k-12]] — Study conducted with eighth-grade students, extending AI-in-education research to secondary schooling.
- [[generative-ai]] — The AI coding assistant (Lingma) is a generative AI tool for code generation, explanation, and debugging.
- [[student-engagement]] — Behavioral patterns reveal differential engagement quality: understanding-oriented (high CT) vs. answer-oriented (low CT).
- [[equity-in-ai-education]] — Differential benefit by CT level raises equity concerns; differentiated scaffolding is proposed to mitigate them.

## Connected Articles

- [[llm-computational-thinking-physics-2026]] — Using LLMs to Detect Growth in Computational Thinking in Introductory Physics
- [[human-llm-collaborative-coding-k12-educator-ai]] — Human-LLM Collaborative Inductive Coding for Conceptualizing K-12 Educator AI Use
- [[mendoza-ai-feedback-feedback-literacy-srl]] — How Students' Feedback Literacy Moderates the Link Between ChatGPT Acceptance and Self-Regulated Learning

## Citation

Zhao, S., Wang, Z., Chen, T., Kang, C., & Lan, Y.-J. (2026). [*Exploring the effect of computational thinking levels on students' learning performance, cognition, and behavior when using AI coding assistants*](https://doi.org/10.1007/s11423-026-10663-6).
