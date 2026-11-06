---
title: "Thinking Is Not Writing: Designing AI Chatbots to Connect Reasoning and Revision"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T13:58:13-05:00"
type: article
sources: ['raw/papers/favero-thinking-not-writing-chatbot-2026.md']
source_url: "https://arxiv.org/abs/2611.07792"
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [writing education]
level: [secondary]
audience: [instructors, software developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, generative-ai, llm, student-modeling]
assessment: [feedback]
---

> **Synthesis:** Favero, Käser, Pérez-Ortiz, and Oliver (2026) argue that [[generative-ai|generative AI]] writing support that makes text production easy can bypass the reasoning that writing is meant to develop, and they present MAIKE, a [[socratic-method|Socratic]] chatbot that supports argumentative writing without generating any essay text. MAIKE combines argument diagnosis, targeted questioning, and a persistent [[student-modeling|student model]] across explicit Think and Write modes, and in a classroom study with 65 [[k-12|secondary-school]] students it was compared against a control chatbot sharing the same interface, [[llm|language model]], and modes. Approximately 40% of students improved their essay scores, but MAIKE users engaged more in idea-level dialogue (56% vs. 44%) and moved iteratively between discussion and editing, and transitions from ideas discussed in dialogue to revisions were positively associated with score gains. The authors frame the design target as coordinating [[reflection]] with revision within [[conversational-ai|conversational]] [[writing-education|writing support]], following [[scaffolding]] principles that preserve the student's responsibility for ideas and wording.

## Key Findings
1. **MAIKE never wrote the essay.** The tutor provided argument diagnosis, targeted questioning, and a student model, guiding students with questions but never supplying answers or rewritten passages.
2. **A comparable share of students improved.** 12 of 30 MAIKE students (40%) and 13 of 32 control students (41%) improved; none declined in MAIKE versus three in control (9%).
3. **MAIKE drew more idea-level dialogue.** Idea-level turns were 56% of coded turns in MAIKE versus 44% in control; control had more surface-level turns.
4. **Interaction was more iterative with MAIKE.** After an edit, control sequences ended the round 80% of the time versus 63% in MAIKE, which continued with a further exchange 22% versus 11%.
5. **Idea-to-revision transitions predicted gains.** Idea-level turns followed by substantive edits correlated with gains in MAIKE (ρ = .49) versus weakly negative in control (ρ = −.14), Δρ = .63 (95% CI [.21, 1.03]).

## Writing support that bypasses reasoning

The educational value of AI writing support depends on whether students remain engaged in the reasoning that produces it. [[generative-ai|Generative AI]] tools can improve writing while reducing the need for students to formulate, evaluate, and revise their own ideas: users often submitted ChatGPT output with little or no editing, and students improved surface-level errors more than deeper structural problems. Receiving [[feedback|feedback]] does not guarantee revision — in logs from more than fourteen thousand students, around half made no revision after [[ai-feedback-quality|AI feedback]]. A conversation with an AI may involve little reasoning if the student mainly accepts suggestions. This motivates MAIKE's question: how can [[llm|large language models]] support writers without taking over their reasoning, preserving the student's epistemic responsibility for the ideas that enter the essay?

## MAIKE: diagnosis without answers

MAIKE is a web-based [[intelligent-tutoring|tutoring system]] whose interaction follows a repeated analysis–dialogue–revision cycle. A small locally hosted language model labels essay components as Stance, Claim, Premise, or Rebuttal with Strong or Weak ratings, and separate prompted calls evaluate logical cogency, rhetorical effectiveness, and dialectical reasonableness. From this diagnosis, four specialized generators produce a pool of eight critical questions, and a separate Judge selects one per cycle. In Think mode, [[socratic-method|Socratic]] questions, guided by six question categories and seven standing principles, help students examine their reasoning; in Write mode, the tutor helps students plan a concrete revision without supplying wording, while a persistent [[student-modeling|student model]] tracks their immediate need, readiness, and [[misconceptions]]. The internal diagnosis is never shown to students as a score or corrective feedback.

## The classroom study and interaction patterns

The exploratory study ran in four Theory of Knowledge class cohorts at Swiss secondary schools, with 65 students as assigned (34 control, 31 MAIKE; 30 MAIKE and 32 control after excluding three who barely engaged). Students were between 12 and 19 years old (M = 17.0, median = 17), and English was mostly a [[language-learning|second language]]: only five of the 63 students naming their first language named English. All students wrote on the prompt "Does using AI change what it means to learn?" without external sources, so every comparison here reflects just a single task. Conditions shared interface and model; behavior diverged: MAIKE users produced more idea-level turns (56% vs. 44%) and made surface-level exchanges less persistent (30% vs. 46%).

## Coordinating reflection with revision

The association analyses point to what to design for. In MAIKE, students with more idea-level turns followed by substantive edits tended to show greater score gains (ρ = .49), and returning to idea-level discussion after the first substantive edit showed a similar between-condition difference (Δρ = .54, 95% CI [.09, .97]); the corresponding correlations were weakly negative in control. The authors read this as evidence that [[reflection]] may be most valuable when it becomes consequential — when ideas developed in dialogue are translated into concrete revisions, an ongoing reasoning–revision loop rather than a fixed sequence of stages. For designers, this implies state-aware writing support: the system's model of the student's reasoning, not the latest message alone, should determine when and how to intervene.

## What this means for practice

- **Instructors.** Route AI writing support through questioning before revision: have students develop an idea in dialogue before translating it into text, treating discussion-to-edit cycles as the workflow.
- **Instructors.** Judge process alongside outcomes: scores were comparable (40% and 41%), but no MAIKE student declined on the composite.
- **Software developers.** Keep a persistent student model, tie each response to the student's latest contribution, and use revision review.
- **Researchers.** Evaluate support through idea-to-revision transitions.

## Limitations

- The study is exploratory: 65 secondary-school students, sized by classroom availability rather than power analysis.
- The control chatbot shared the interface, language model, and Think/Write modes, so the design isolates neither Socratic questioning nor the Think–Write split.
- One essay prompt, one 2-hour session, and one population in which English was mostly a second language.
- The study measured interactions and one essay, not lasting learning or independent thinking.
- A weak component misclassified by MAIKE's pipeline propagates into a critical question, and tutor latency differed (18.3 s versus 4.1 s).

## Citation

Favero, L., Käser, T., Pérez-Ortiz, J. A., & Oliver, N. (2026). [*Thinking Is Not Writing: Designing AI Chatbots to Connect Reasoning and Revision*](https://arxiv.org/abs/2611.07792). arXiv preprint, arXiv:2611.07792.
