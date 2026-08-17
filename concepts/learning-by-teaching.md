---
title: Learning by Teaching
created: 2026-08-14
updated: 2026-08-15T03:04:03-04:00
type: concept
tags: [learning-by-teaching, teachable-agents, peer-tutoring, generative-ai, active-learning, explanation-effect, scaffolding, self-regulated-learning, cs-education]
confidence: high
---

> **Learning by teaching (LbT)** — the instructional framework, grounded in the protégé effect, in which students deepen their understanding by explaining material to a peer, tutee, or agent. Decades of work in LbT and peer tutoring show that explaining concepts, anticipating misunderstandings, and responding to questions consolidate understanding and support transfer. In the AI era, **teachable agents** — and increasingly **LLMs configured as novice tutees** — operationalize LbT at scale, positioning students as instructors who must explain, correct, and fill gaps.

## The Protégé Effect

Learning by teaching rests on the finding that preparing to teach and actually explaining to another person produces deeper processing than studying alone. The demands of teaching — articulating ideas, anticipating misunderstandings, and answering questions — force learners to organize knowledge, identify gaps in their own understanding, and generate explanations that support retention and transfer. Benefits are most evident in [[collaborative-learning]] contexts and in well-structured domains that support teachable agents (e.g., Betty's Brain).

## Teachable Agents: From Rule-Based to Conversational

**Teachable agents** are the software systems through which learning by teaching is operationalized — a learner teaches a system as part of learning. Traditional teachable agents were rule-based or retrieval-based and could respond only to limited commands; their key limitation was an inability to engage in natural-language dialogue. [[llm|Large language models]] change this: they can flexibly adopt roles via prompting — including the role of a "tutee" that asks questions or makes mistakes — and engage in open-ended dialogue, enabling LbT in less-structured domains (writing, vocabulary) than was previously possible.

The wiki's evidence base traces this shift to **conversational, LLM-based teachable agents**:

- **ChatGPT as a teachable agent** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al.]]) supports LbT in programming, improving knowledge gains, programming ability, and self-regulated learning — though its tendency to generate correct code limits error-correction practice.
- **Explique at scale** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al.]]) deployed an AI teachable agent (Algorithm Apprentice) to 546 students over an 11-week semester, finding that explanation-oriented dialogue predicts fewer incorrect quiz submissions, while external-content reuse predicts more.
- **Vocabulary teaching** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et al.]]) used an LLM as a student to generate dynamic questions, improving retention at 3 and 7 days.

## Engineering Fallibility: LLMs as Novice Tutees

A central design challenge for LLM-based teachable agents is that LLMs are trained to produce expert-level, fluent responses by default — the opposite of the fallible novice the LbT paradigm wants. Making an LLM a good tutee requires **engineering fallibility**:

- **[[prompting-teachability-novice-personas-lbt-2026|Prompting for teachability]]** (Miller & Bosch) found that constraint-based prompts explicitly forcing error production (e.g., "answer incorrectly" or "get 2–3 wrong") elicit novice-like behavior far more reliably than persona-, misconception-, or uncertainty-based prompts.
- **[[socrates-students-instructors-llms-lbt-2025|Engineered knowledge gaps]]** (Yang et al.) design problems the LLM cannot solve without knowledge only the student possesses, making teaching a necessity and countering the passive over-reliance of LLM-as-tutor use.

## Questioning, Self-Regulation, and Active Learning

Two further affordances recur across the wiki:

- **Questions identify knowledge gaps.** LbT systems use learner-generated questions to expose gaps and reinforce comprehension, and [[teaching-ai-vocabulary-lbt-llms-2026|LLM-generated questions]] replace rigid template-based generators.
- **LbT [[scaffolding|scaffolds]] self-regulation.** Teaching a conversational agent fosters [[self-efficacy]] and the implementation of self-regulated learning strategies, and connects LbT to [[desirable-difficulties]] — the effortful act of explaining and correcting is itself a productive struggle that AI's friction-removal would otherwise erase.

## Why It Matters in AI Education

Learning by teaching is the constructive, active-learning counterpoint to the dominant LLM-as-tutor pattern. Where a tutor gives answers (and risks [[over-reliance]]), an LbT setup makes the student the teacher, forcing explanation, gap-detection, and knowledge construction. This positions LbT as a key strategy for turning generative AI from a crutch into a tool for deeper learning, and connects to [[desirable-difficulties]], [[active-learning]], and [[constructivist|constructivist]] pedagogy.

## Design Implications

1. **Make the LLM a fallible novice, not an expert.** Use constraint-based prompts that force error production so the student must explain and correct.
2. **Engineer knowledge gaps.** Structure problems the LLM cannot solve alone, so the student's knowledge is genuinely needed.
3. **Reward explanation, not content-dumping.** Learning is predicted by elaboration and reasoning dialogue, not by reuse of external content.
4. **Preserve productive struggle.** LbT should keep learners in the effortful zone — teaching, explaining, and correcting — rather than smoothing it away.

## Connected Concepts

- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[over-reliance]]
- [[cs-education]]
- [[programming-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
