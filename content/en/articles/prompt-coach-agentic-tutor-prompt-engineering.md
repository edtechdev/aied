---
title: "Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development"
created: "2026-07-08T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [agentic-ai, ai-literacy]
pedagogy: [professional-training, scaffolding]
technology: [intelligent-tutoring, llm]
assessment: [feedback, formative-assessment]
audience: [instructors, software developers]
research_method: [system development]
discipline: [cs education]
sources: ['raw/papers/2607.06074.md']
confidence: high
level: [adult learning]
---

> **Synthesis:** Mehra et al. (2026) introduce **Prompt Coach (PC)**, an [[agentic-ai|agentic tutor]] embedded in-flow within a developer's IDE that teaches prompt crafting through [[socratic-method|Socratic]] guidance, and evaluate it in an early empirical study with 15 professional developers. PC scores prompt quality across eight dimensions and surfaces targeted questions that guide self-correction, grounded in the developer's codebase and the target [[llm]]'s behavior. After a single 60-minute session, participants showed statistically significant improvement in prompt-writing proficiency (mean 63.04 → 71.69, +13.73%), with the largest gains on dimensions developers commonly overlook ([[inclusive-learning|Inclusion]] of Constraints, Error Handling, Context Awareness), plus strong trust and adoption readiness. The study positions agentic tutoring as a promising paradigm for in-flow, context-aware learning of emerging software-engineering skills.

## Background: Why Prompt Engineering Is Undertaught

[[prompt-engineering|Prompt engineering]] is a critical yet undertaught skill for software developers, poorly served by traditional instruction because of its evolving, interactive, context-dependent nature. Traditional course formats that work for stable programming concepts cannot support an interactive skill whose quality depends on the target model and the developer's codebase. The authors identify the core problem: learning is decoupled from the real development context, and [[feedback]] tends to be delayed and generic. This motivates an in-flow tutor that scores prompts dimensionally and responds in-context.

## How Prompt Coach Works

PC operates as an agent within the developer's IDE, combining an assessment component and a [[pedagogy|pedagogical]] component. A **Prompt Evaluator Agent** scores the developer's prompt across eight explicitly defined dimensions in a Dimension Registry (properties of effective code-generation prompts such as Clarity, Output Requirements, Inclusion of Constraints, Error Handling, and Context Awareness). A **Prompt Coach Agent** transforms those dimensional scores into pedagogical interventions: it surfaces targeted Socratic questions on the weakest dimensions, so the developer repairs their own prompt rather than receiving a corrected answer. The Socratic guidance is contextualized to the developer's code and the target model's behavior, and the system adapts over time — emphasizing dimensions still being learned and lightening attention on mastered ones.

## Key Findings

1. **Baseline prompt quality is moderate and experience-independent.** Across three baselining tasks, professional developers achieved a mean prompt-quality score of 63.04, consistent across complexity levels (introductory 65.63, interview 62.56, competition 60.66). A Pearson correlation of r = 0.11 between years of experience and baseline score shows that prompt-writing proficiency does not meaningfully scale with programming experience — it is a distinct, emerging skill.
2. **Large gains after a single session.** Post-learning prompts achieved a mean score of 71.69, a 13.73% relative improvement (range −0.28% to +38.37%), significant by paired Wilcoxon signed-rank test (p < 0.05). Thirteen of 15 participants improved; none showed a meaningful decline.
3. **PC targets developers' cognitive blind spots.** The largest gains appeared on the lowest-scoring baseline dimensions — Inclusion of Constraints (50.51), Error Handling (52.56), and Context Awareness (56.56) — while naturally strong dimensions like Clarity (79.87) and Output Requirements (70.07) improved less. This suggests PC is particularly effective at addressing the underspecification of constraints, edge cases, and contextual detail.
4. **Strong trust and adoption readiness.** All learning dimensions scored a mean of 5.67–6.33 on a 7-point Likert scale; participants unanimously agreed PC improved their code-generation prompt-writing skills (100% agreement), expressed strong trust in its guidance, reported increased cognitive elaboration, and indicated they would integrate PC into their workflow and recommend it to colleagues.

## What this means for practice

- **Instructors.** Teach prompt crafting as its own explicit skill rather than assuming it follows from programming experience: baseline prompt quality was flat across a mean of 9.6 years of development experience (r = 0.11), so [[cs-education]] and [[professional-training]] cannot let prompt fluency emerge incidentally.
- **Instructors.** Coach the dimensions learners overlook — Inclusion of Constraints, Error Handling, and Context Awareness, the three lowest baseline scores (50.51, 52.56, 56.56) — instead of re-teaching Clarity (79.87), where learners were already strong.
- **Designers.** Put the tutor where the work happens: an IDE-resident agent that scores a prompt across eight dimensions and asks [[socratic-method|Socratic]] questions on the weakest ones produced statistically significant gains (63.04 → 71.69) after a single 60-minute session, so [[scaffolding]] and [[feedback]] can be delivered in flow rather than in a separate lesson.
- **Designers.** Make guidance adaptive and self-correcting: PC lightens attention on mastered dimensions over time and never supplies the corrected prompt, which keeps the learner in the repair loop and aligns tool design with [[formative-assessment]].
- **Faculty developers.** Treat agentic tutors as continuing [[professional-training]] for [[ai-literacy]]: participants unanimously agreed PC improved their prompt-writing (100% agreement) and most would integrate it into their regular workflow, so embedding AI-skill development in authentic work is a credible alternative to abstract instruction.

## Limitations

- The evaluation is a single-arm, within-subjects pre/post design with 15 professional developers recruited from one organization and required to already use AI coding assistants; with no control group, the 13.73% mean gain cannot be separated from practice effects or task familiarity.
- The learning phase was capped at 60 minutes because of limited participant availability, and each phase used only three APPS benchmark tasks (10 minutes each), so retention and downstream code quality are unmeasured and the post-learning scores rest on a small number of prompts per person.
- Sessions ran in isolation from any real project codebase on a single benchmark, which removes exactly the project context the tutor is designed to exploit and limits generalizability beyond the APPS task family.
- Prompt quality was scored by the system's own eight-dimension registry and learner perceptions by 7-point Likert items (means 5.67–6.33); neither measures independently verified code correctness or learning transfer.

## Connected Concepts

- [[scaffolding]]
- [[feedback]]
- [[formative-assessment]]
- [[cs-education]]
- [[professional-training]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[agentic-ai]]
- [[llm]]
- [[intelligent-tutoring]]
- [[socratic-method]]
## Connected Articles

- [[prompt-based-programming-lesson]]
## Citation

Mehra, R., Singi, K., Kaulgud, V., Sharma, V. S., & Choudhury, S. G. (2026). [*Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development*](https://arxiv.org/abs/2607.06074).
