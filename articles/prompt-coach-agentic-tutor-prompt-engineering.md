---
title: "Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development"
created: "2026-07-08T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [agentic-ai, cs-education, feedback, formative-assessment, intelligent-tutoring, llm, professional-training, scaffolding, ai-literacy]
audience: [instructors, software developers]
research_method: [system development]
discipline: [cs education]
sources: ['raw/papers/2607.06074.md']
confidence: high
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

## Implications

Prompt Coach demonstrates that [[agentic-ai|agentic]] tutoring can deliver [[scaffolding]] and [[feedback]] in-flow, contextualized to real work, for an emerging skill that traditional instruction fails to teach. Its Socratic, self-correction emphasis aligns with [[formative-assessment]] practice and the [[socratic-method]] tradition, and its dimensional scoring offers a concrete model for [[intelligent-tutoring]] that diagnoses *which* facet of a complex skill a learner is weak on. The finding that prompt-writing proficiency is independent of programming experience implies that [[cs-education]] and [[professional-training]] must treat prompt fluency as its own learnable skill — echoing the wiki's [[prompt-based-programming-lesson]] — rather than expecting it to emerge from general expertise.

For [[ai-literacy]] among practitioners, PC shows that AI-skill development can be embedded in authentic work rather than delivered as abstract instruction, with high trust and adoption readiness among working developers. The adaptive, in-flow design also speaks to the broader direction of [[agentic-ai|agentic learning systems]]: personalized, context-aware coaching that fades guidance as proficiency grows. Future directions — longer [[student-engagement|engagement]], retention measures, and downstream code quality — point toward the need for longitudinal evaluation of agentic tutors beyond a single session.

- **In-flow Socratic tutoring:** PC delivers [[scaffolding]] and [[feedback|Feedback Loop]] support directly inside the IDE, contextualized to the developer's code and the target model.
- **Empirical gains:** Statistically significant prompt-quality improvement after one 60-minute session, aligning with findings in [[prompt-based-programming-lesson]] about prompt fluency as a learnable skill.
- **Self-correction emphasis:** Targeted Socratic questions steer developers to repair their own prompts rather than receive answers, consistent with [[formative-assessment]] practice.
- **Professional context:** Extends [[cs-education]] and [[professional-training]] beyond novices to working developers.
- **Trust and adoption:** Participants reported high trust and unanimous belief PC improved their skills, contributing to [[ai-literacy]] for practitioners.

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
