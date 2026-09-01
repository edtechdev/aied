---
title: "AI-Powered Math Tutoring: Platform for Personalized and Adaptive Education"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, math-education, adaptive-learning, personalized-learning, agentic-ai, llm, generative-ai, socratic-method, rag, student-modeling]
audience: [software developers]
research_method: [system development, benchmark]
discipline: [math education]

sources: ['raw/papers/chudziak-ai-math-tutoring-platform.md']
confidence: medium
---

> **Synthesis:** Chudziak and Kostka (2025) propose a multi-agent AI math tutoring platform that moves beyond the reactive answer-giving of current [[llm]] tutors toward structured, individualized, tool-assisted learning. It combines adaptive Socratic tutoring agents, dual-memory (long-term + working) [[personalized-learning|personalization]], GraphRAG-based textbook retrieval, and Directed Acyclic Graph (DAG) course planning, letting students learn new topics, target their weaknesses, revise for exams, and practice on unlimited personalized exercises. On the MathDial [[benchmark]], a pedagogically informed "Tutor Prompt" significantly beat a base prompt on guided tutoring (higher Success@N, lower Telling@N), and o3-mini(high) was selected for task creation.

## Motivation

The authors identify a core gap: current AI tutoring systems, particularly LLM-based tutors, tend to provide direct answers without encouraging deep reflection or incorporating structured [[pedagogy|pedagogical]] tools and strategies. This "reactive nature" is most problematic in [[math-education|mathematics]], where AI tutoring systems remain underdeveloped. The [[research-methods-aied|research]] question is: *How can AI tutoring systems move beyond reactive assistance to enable structured, individualized, and tool-assisted learning experiences?*

## System Architecture

Built on LangGraph, the multi-agent system's main interaction loop centers on a Tutor Agent (GPT-4o, chosen for conversational ability, tool use, and low latency) that orchestrates components via a ReAct-style framework. A Memory Dispatcher oversees personalization:

- **Dual-memory framework.** Long-Term Memory (LTM) stores persistent student data ([[prior-knowledge|prior knowledge]], [[misconceptions]], learning preferences, goals); Working Memory (WM) holds current-session context (topic, problem state, recent interactions).
- **Guided tutoring.** Instead of solving problems directly, the Tutor Agent uses [[socratic-method|Socratic questioning]] that promotes self-explanation and [[metacognition|metacognitive]] skills, dynamically adjusting support based on memory-tracked progress and grounding responses in textbook data.
- **GraphRAG retrieval.** Textbook material is represented as a [[knowledge-graph|knowledge graph]], argued to better represent educational content relations than vector [[rag]] for contextual tutoring.
- **Task Creation.** A dedicated module using o3-mini(high) generates personalized practice exercises based on topic, difficulty, and optionally GraphRAG data.
- **Course creation.** A pipeline of agents (Research → Planning → Step Handling → Coding) accesses memory and GraphRAG data to construct a structured DAG of prerequisite knowledge and optimal learning paths, stored in a database — supporting exam revision and structured learning.
- **Auxiliary tools.** SymPy-based Symbolic Solver, Matplotlib Function Plotter, and Course Graph Drawer.

## Key Findings

- **Guided [[prompt-engineering|prompting]] validates the approach.** On the MathDial dataset, the "Tutor Prompt" (emphasizing Socratic questioning and [[scaffolding]]) significantly outperformed the "Base Prompt" for both GPT-4o and GPT-4o-mini, achieving superior Success@N and far lower Telling@N over interaction lengths — confirming the guided-tutoring strategy versus direct answer-giving in simulated dialogues.
- **Model selection for task creation.** o3-mini(high) and Claude 3.5 Sonnet tied at highest [[problem-solving]] accuracy (90.00%) with access to the SymPy tool; Gemini 2.0 Flash scored 88.67%, GPT-4o 78.67%, GPT-4o-mini 77.33%. o3-mini(high) was selected for Task Creation due to top performance and step-decomposition ability.
- **Personalization is memory-driven.** If LTM knows a student struggles with negative-sign distribution, the system proactively offers targeted hints, scaffolds problems differently, or gives corrective feedback; if a student prefers visual explanations, aids like function plotting are used — creating a responsive, individualized experience.

## Limitations

- No evaluation with real students in actual learning environments (noted by reviewers).
- Personalization operates on a basic set of attributes.
- The pedagogical effectiveness of GraphRAG-generated courses has not yet been empirically evaluated.
- System performance depends fundamentally on underlying LLM capabilities and possible biases.

## Future Work

Real-world user studies to assess [[learning-gains|learning gains]], [[usability-research|user experience]], and practical utility of generated courses; advanced [[student-modeling|student modeling]] (e.g., [[affective-computing|affective]] state detection); spaced repetition; exploring different LLMs and RAG architectures; adaptability to other [[stem-education|STEM]] domains, [[accessibility]], and explainability.

## Connected Concepts

- [[intelligent-tutoring]]
- [[math-education]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[socratic-method]]
- [[scaffolding]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]

## Connected Articles

- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — Frameworks for shifting AI tutors away from answer generation toward reasoning facilitation, directly aligned with this paper's core motivation.
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Another AI-based math tutoring system, offering a comparison point for affective and personalized math tutoring.
- [[instructional-agents-multi-agent-course-gen]] — A parallel multi-agent LLM system for course material generation, relevant to this paper's course-creation pipeline.
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-augmented tutoring, complementing the paper's GraphRAG-based textbook retrieval.

## Citation

Chudziak, J. A., & Kostka, A. (2025). [*AI-Powered Math Tutoring: Platform for Personalized and Adaptive Education*](https://doi.org/10.48550/arXiv.2507.12484). The 26th International Conference on Artificial Intelligence in Education (AIED 2025).
