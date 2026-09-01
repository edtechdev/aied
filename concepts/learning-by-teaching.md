---
title: Learning by Teaching
created: "2026-08-14T10:45:34-04:00"
updated: "2026-09-01T19:06:21-04:00"
type: concept
tags: [learning-by-teaching, intelligent-tutoring, generative-ai, active-learning, feedback, scaffolding, self-regulated-learning, cs-education]
discipline: [cs education]
confidence: high
---

> **Learning by teaching (LbT)** — the instructional framework, grounded in the protégé effect, in which students deepen their understanding by explaining material to a peer, tutee, or agent. Decades of work in LbT and peer tutoring show that explaining concepts, anticipating misunderstandings, and responding to questions consolidate understanding and support transfer. In the AI era, **teachable agents** — and increasingly **LLMs configured as novice tutees** — operationalize LbT at scale, positioning students as instructors who must explain, correct, and fill gaps.

## Questions to Consider

- Recall a time you truly understood something only after explaining it to someone else. What was happening mentally — and why do you think teaching produces deeper understanding than just studying alone?
- A common view is that teaching is for experts, and novices have nothing to offer. Yet 'learning by teaching' rests on the opposite premise: preparing to teach forces you to organize knowledge and find your own gaps. How does that reframe who benefits from teaching?
- The page describes 'teachable agents' — software that students teach as part of learning. With an LLM, you can configure a chatbot as a fallible novice tutee that asks questions and makes mistakes. What would you need to design into such a tutee for it to actually improve learning rather than just chat?
- One challenge is 'engineering fallibility': AI models are trained to give expert, fluent answers, which is the opposite of the struggling novice the learning-by-teaching paradigm wants. Why might an error-prone tutee be more effective for learning than a correct one?
- A ChatGPT-based teachable agent improved learning but its tendency to generate correct code limited error-correction practice. How might a tool that always gives the right answer actually shortchange the learner who needs to practice spotting and fixing mistakes?
- If you were to design a learning-by-teaching activity for your own class, what would make the teaching task *consequential* enough that students put real effort into it rather than copy-pasting an answer?

## Introduction

## The Protégé Effect

Learning by teaching rests on the finding that preparing to teach and actually explaining to another person produces deeper processing than studying alone. The demands of teaching — articulating ideas, anticipating misunderstandings, and answering questions — force learners to organize knowledge, identify gaps in their own understanding, and generate explanations that support retention and transfer. Benefits are most evident in [[collaborative-learning]] contexts and in well-structured domains that support teachable agents (e.g., Betty's Brain). The protégé effect names the mechanism: students put forth more effort and reflect more deeply when they feel responsible for teaching something, so they clarify [[misconceptions]] and fill gaps through explanation and [[metacognition]].

## Teachable Agents: From Rule-Based to Conversational

**Teachable agents** are the software systems through which learning by teaching is operationalized — a learner teaches a system as part of learning. Traditional teachable agents were rule-based or retrieval-based and could respond only to limited commands; their key limitation was an inability to engage in natural-language dialogue. [[llm|Large language models]] change this: they can flexibly adopt roles via [[prompt-engineering|prompting]] — including the role of a "tutee" that asks questions or makes mistakes — and engage in open-ended dialogue, enabling LbT in less-structured domains (writing, vocabulary) than was previously possible.

The knowledge base's evidence base traces this shift to **conversational, LLM-based teachable agents**:

- **ChatGPT as a teachable agent** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al.]]) supports LbT in programming, improving knowledge gains, programming ability, and [[self-regulated-learning|self-regulated learning]] — though its tendency to generate correct code limits error-correction practice.
- **Explique at scale** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al.]]) deployed an AI teachable agent (Algorithm Apprentice) to 546 students over an 11-week semester, finding that explanation-oriented dialogue predicts fewer incorrect quiz submissions, while external-content reuse predicts more.
- **Vocabulary teaching** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et al.]]) used an LLM as a student to generate dynamic questions, improving retention at 3 and 7 days.

## Engineering Fallibility: LLMs as Novice Tutees

A central design challenge for LLM-based teachable agents is that LLMs are trained to produce expert-level, fluent responses by default — the opposite of the fallible novice the LbT paradigm wants. Making an LLM a good tutee requires **engineering fallibility**:

- **[[prompting-teachability-novice-personas-lbt-2026|Prompting for teachability]]** (Miller & Bosch) found that constraint-based prompts explicitly forcing error production (e.g., "answer incorrectly" or "get 2–3 wrong") elicit novice-like behavior far more reliably than persona-, misconception-, or uncertainty-based prompts.
- **[[socrates-students-instructors-llms-lbt-2025|Engineered knowledge gaps]]** (Yang et al.) design problems the LLM cannot solve without knowledge only the student possesses, making teaching a necessity and countering the passive over-reliance of LLM-as-tutor use.
- **Explique's apprentice constraints** (Wang et al.) instruct the tutee to (a) stay a novice, (b) keep requesting clarification until the student's explanation is accurate, and (c) never reveal the target explanation — and to *resist* students who try to reverse the roles and have the tutee explain back.

## Questioning, Self-Regulation, and Active Learning

Two further affordances recur across the knowledge base:

- **Questions identify knowledge gaps.** LbT systems use learner-generated questions to expose gaps and reinforce comprehension, and [[teaching-ai-vocabulary-lbt-llms-2026|LLM-generated questions]] replace rigid template-based generators.
- **LbT [[scaffolding|scaffolds]] self-regulation.** Teaching a [[conversational-ai|conversational agent]] fosters [[self-efficacy]] and the implementation of self-regulated learning strategies, and connects LbT to [[desirable-difficulties]] — the effortful act of explaining and correcting is itself a productive struggle that AI's friction-removal would otherwise erase.

## Why It Matters in AI Education

Learning by teaching is the constructive, [[active-learning]] counterpoint to the dominant LLM-as-tutor pattern. Where a tutor gives answers (and risks [[cognitive-offloading|Over-Reliance]]), an LbT setup makes the student the teacher, forcing explanation, gap-detection, and knowledge construction. This positions LbT as a key strategy for turning [[generative-ai|generative AI]] from a crutch into a tool for deeper learning, and connects to [[desirable-difficulties]], [[active-learning]], and [[constructivist]] [[pedagogy]].

## Putting Learning by Teaching into Practice

### Design patterns for an AI tutee

The [[research-methods-aied|research]] above converges on a few reusable patterns for turning a default-expert LLM into a productive tutee:

- **Constraint-based novice prompts (most reliable).** Rather than asking the model to "pretend to be a confused student," explicitly force fallibility and a teaching loop, e.g.: *"You are a novice student learning about [concept]. Ask me to teach it to you. Ask clarifying questions and deliberately get 2–3 things wrong during our conversation. Never state the correct answer yourself — wait for me to explain, then tell me whether I made sense."*
- **The reverse-teaching guard.** Add a rule that the tutee must *decline* to explain the answer back when the student tries to flip the roles: *"If I ask you to solve the problem or explain the concept, remind me that I'm the teacher and ask me to explain it instead."* Explique shows this resistance is what preserves the LbT interaction.
- **Engineered knowledge gaps.** Structure the task so the model *cannot* answer without information only the student holds — the student's knowledge becomes genuinely necessary, not optional. This converts the interaction from optional chat into required teaching.
- **An external success criterion.** Give the teaching a real consequence — a gatekeeper quiz that unlocks only after the student teaches successfully (Explique), or a code-judging platform the student must make the agent's output pass (Chen). Accountability is what sustains genuine effort and prevents the whole exercise becoming a checkbox.

### Tips for instructors

- **Make the teaching task consequential, not busywork.** The strongest evidence for [[student-engagement|engagement]] comes from activities that matter — Explique gated a graded quiz behind the teaching exercise; Chen tied the tutee's output to passing a judging platform. If teaching is purely optional, students will rationally skip the hard part.
- **Give students a teaching protocol, not just a chat window.** Scaffold the interaction with a structure — "explain the concept → give a concrete example → answer the tutee's questions → check for understanding" — so open-ended dialogue becomes a deliberate teaching sequence rather than aimless conversation.
- **Address content-dumping head-on.** Explique found that direct copy-paste of external content rose from under 15% to 30–35% of interactions by the end of the semester. Tell students why pasting defeats the purpose, and consider an accountability step (e.g., "explain the agent's misunderstanding in your own words").
- **Pair LbT with debugging practice.** Because AI writes correct code, students may lose error-correction practice. Deliberately ask the tutee to *misimplement* something, or follow the teaching session with a bug-finding task, so debugging stays in the loop.
- **Watch the effort gradient.** Expect novelty to fade; plan to vary the target concepts, add challenge, or rotate which students take the [[teacher-role|teaching role]] to sustain cognitive effort across a term.

### Tips for developers

- **Prefer hard constraints over persona alone.** Prompting for "uncertainty" or "a student persona" is unreliable; explicitly force errors and a clarification loop. (See [[prompting-teachability-novice-personas-lbt-2026]].)
- **Build a completion criterion.** Define *when the student has explained enough* (Explique used an LLM tool function keyed to the concept's learning objectives) so the interaction ends on understanding, not on a time limit or a fixed turn count.
- **Log and code the dialogue.** Explique used word-per-minute detection plus LLM semantic coding to classify interactions as Detailed / Minimal / External Content Use — that signal is how you detect circumvention and declining engagement before it becomes a problem.
- **Give instructors a dashboard.** Completion rates and [[qualitative-research|qualitative]] patterns in teaching interactions let a human intervene when effort drops (Explique's instructors monitored exactly this).

### Implications and open questions

- **LbT is a scalable antidote to AI over-reliance** — it inverts the tutor/student role and keeps the learner cognitively active, which matters more as AI gets more fluent and more "helpful."
- **Fallibility is a feature, not a bug.** A tutee that is *too* correct removes the error-correction and gap-detection that make LbT work; design for the productive struggle rather than against it.
- **Open questions remain:** How do LbT interactions sustain beyond a semester as novelty fully fades? Does LbT transfer to non-CS, less-structured domains at the same scale? Can automated dialogue coding become a practical, real-time engagement monitor for instructors? And how do we keep the teaching role meaningful for *every* student rather than a motivated few?

## Connected Concepts

- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
