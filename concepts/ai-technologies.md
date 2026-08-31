---
title: Technologies
created: "2026-08-19T18:10:00-04:00"
updated: "2026-08-31T06:34:37-04:00"
type: concept
tags: [ai-technologies, generative-ai, llm, rag, multimodal, reinforcement-learning, educational-nlp, knowledge-graph, simulation, educational-robotics, prompt-engineering, agentic-ai]
confidence: high
---
> **Technologies** — the models, architectures, and methods that power AI education systems, and the umbrella concept for the knowledge base's coverage of the technical layer. Where [[pedagogy]] and [[learning-theories]] concern *how teaching and learning happen*, and [[ai-ed-evaluation]] concerns *whether AI works*, this page anchors the *technical* strand: the AI systems ([[llm|large language models]], [[generative-ai|generative AI]], [[multimodal|multimodal models]], [[educational-robotics|robots]]) and the techniques used to build, control, and deploy them ([[prompt-engineering]], [[rag|retrieval-augmented generation]], [[reinforcement-learning]], [[educational-nlp]], [[knowledge-graph|knowledge graphs]], [[agentic-ai|agentic orchestration]]).

## Questions to Consider

- You can be an excellent educator without being able to build an LLM — but this page argues your technical choices still shape what AI can and can't do in your classroom. What is one way the underlying technology of an AI tool might quietly change how your students learn, even if you never see the code?
- A common assumption is that the model is the whole story — but techniques like retrieval-augmented generation (RAG) and prompt engineering exist precisely to control and ground LLM output. Before reading further, when you ask an AI to 'be more accurate' or 'use this source', what do you think is actually happening under the hood?
- RAG is described as a core technique for reducing hallucination and improving safety. Why do you think fetching relevant knowledge to 'ground' an AI's answer would matter more for education than for, say, casual chat — and what could go wrong if that grounding fails?
- The page claims that technical choices embody pedagogical assumptions: a tutor built on Socratic prompting reasons with learners, while an answer-generating model may just hand over solutions. Can you recall an AI tool you've used that seemed to 'assume' a particular teaching philosophy — and did that align with how you actually wanted to teach or learn?
- Beyond raw accuracy, this page suggests AI systems should be evaluated on reliability, pedagogy, and equity. What headline metric do you suspect most people (including many educators) default to when judging whether an AI tool 'works', and why might that metric hide more than it reveals?
- Agentic AI is described as shifting AI 'from a prompt-responding tool into a proactive collaborator.' How might a system that initiates and orchestrates multi-step workflows on its own change what you, as an instructor or learner, are responsible for — and who holds it accountable?

## Introduction

[[ai-education|AI in education]] runs on a specific technical stack, and understanding it matters for [[teacher-role|educators]] and researchers even when they do not build systems themselves — because technical choices shape what AI can and cannot do in the classroom, the risks it carries, and how to evaluate it. This page organizes the knowledge base's technical-concept coverage: the AI systems, the techniques that adapt and control them, and how the technical layer connects to pedagogy, assessment, and evaluation.

## AI systems in education

- **Large language models (LLMs).** The computational backbone of most modern [[ai-education|AIED]] — [[llm|LLMs]] generate human-like text for tutoring, assessment, and content generation, and are the most-referenced technology in the knowledge base. [[pedagogical-llm-training|Pedagogical training]] adapts general LLMs for educational use.
- **Generative AI.** The broader category of systems that produce text, code, images, and other content — [[generative-ai|generative AI]] (driven chiefly by LLMs) is the technology behind the current wave of [[ai-education|AIED]] research. See also [[multimodal|multimodal models]] (text, image, audio) and [[simulation]].
- **Robots and embodied systems.** [[educational-robotics|Robots in education]] add an embodied and often social presence — programmable kits for computational thinking and humanoid/social robots for tutoring, storytelling, and role-play. Robotics is a distinct technical strand that overlaps [[agentic-ai|agentic AI]] and [[human-in-the-loop-ai|human-in-the-loop]] design.
- **Knowledge-based systems.** [[knowledge-graph|Knowledge graphs]] and [[educational-nlp|educational NLP]] represent and process domain knowledge, increasingly combined with LLMs for grounded, explainable tutoring.

## Techniques and methods

- **Prompt engineering.** [[prompt-engineering|Prompt engineering]] is how educators and developers shape LLM outputs — the primary mechanism through which offloading and control are enacted in LLM interactions.
- **Retrieval-augmented generation (RAG).** [[rag|RAG]] grounds LLM outputs in retrieved knowledge, reducing hallucination and improving accuracy — a core technique for [[pedagogical-safety|safe]] educational deployment.
- **Reinforcement learning.** [[reinforcement-learning|Reinforcement learning]] trains agents to optimize behavior over time, used in [[adaptive-learning|adaptive systems]] and [[game-based-learning|game-based learning]].
- **Agentic orchestration.** [[agentic-ai|Agentic AI]] systems plan and execute multi-step workflows — often orchestrating multiple specialized agents (see [[agentic-ai|multi-agent systems]]) — and are reshaping AI from a prompt-responding tool into a proactive collaborator.
- **Model training and adaptation.** [[pedagogical-llm-training|Training and fine-tuning LLMs for pedagogy]], [[educational-llm-alignment|educational alignment]], and [[cstutorbench-slm-tutors|small-language-model adaptation]] make general models education-specific.

## How the technical layer connects to the field

The technical strand is inseparable from the knowledge base's other themes:

- **Pedagogy:** technical choices embody pedagogical assumptions — a [[intelligent-tutoring|tutor]] built on [[socratic-method|Socratic prompting]] reasons with learners, while an answer-generating model may default to direct provision (see [[pedagogy|pedagogies and teaching strategies]]).
- **Assessment and evaluation:** [[ai-ed-evaluation]] and [[benchmark|benchmarks]] determine whether AI systems actually work; [[assessment]] and [[automated-assessment]] use the technical stack to grade and generate.
- **Responsible use:** technical techniques are central to [[reducing-ai-misuse|reducing AI misuse]] — [[rag]] grounding, guardrails, [[prompt-engineering]] [[scaffolding]], and [[human-in-the-loop-ai|human oversight]] shape whether AI supports or undermines learning ([[cognitive-offloading]], [[hallucination-risk]]).

## Implications for AI in education

- **Technical literacy supports critical use:** understanding the underlying models and techniques helps educators and learners use AI well and evaluate it critically (see [[ai-literacy]]).
- **Choose technology by pedagogical intent:** the AI system and technique should follow the [[pedagogy|teaching strategy]], not the reverse.
- **Evaluate the technical layer:** [[ai-ed-evaluation]] and [[benchmark]] research assess AI systems on reliability, pedagogy, and [[equity-in-ai-education|equity]], not just headline accuracy.
- **Robots and agents are part of the stack:** [[educational-robotics|embodied]] and [[agentic-ai|agentic]] systems extend the technical repertoire beyond text — and bring their own design and safety considerations.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[pedagogical-llm-training]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Connected Articles

- [[agentic-ai-education-scoping-review]] — Scoping review of agentic AI in education

- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI's effect on productivity and learning in programming
- [[cstutorbench-slm-tutors]] — Small language model tutoring benchmarks
- [[educational-llm-alignment]] — Aligning LLMs for education
- [[pedagogical-llm-training]] — Training pedagogical LLMs
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing RAG-based LLM tutors
- [[ai-tutor-safety-harms]] — AI tutor safety and harms
- [[elbench-education-llm-benchmark-2026]] — Education LLM benchmark
- [[knowledge-based-design-generative-social-robots-2026]] — Knowledge-based design for generative social robots
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini generative social robot
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in education
- [[benzion-ai-physics-simulations-virtual-lab]] — LLM-generated physics simulations for the classroom
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — Factors in adopting AI tools

