---
title: "Preferred Scaffolding Does Not Lead to Better Learning Performance: Empirical Evidence from AI-Supported Mathematical Modelling"
created: "2026-08-23T08:07:04-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
pedagogy: [scaffolding, student-engagement]
technology: [generative-ai, pedagogical-agent]
research_method: [experiment]
discipline: [math education]
sources: ['raw/papers/preferred-scaffolding-ai-mathematical-modeling.md']
confidence: high
audience: [instructional designers, instructors]
level: [higher ed]
page_kind: [evaluation]
---

Zhu, Yang, and Yang (2026) tested five AI interaction roles — Tutor, Teaching Assistant (TA), Peer, Excellent Student, and Struggling Student — as distinct [[scaffolding]] configurations in AI-assisted mathematical modeling (MM). In a randomized within-subjects experiment, 26 university students completed an unassisted baseline plus five comparable modeling tasks (4-min limit each), the AI assuming a different role per round, with role order counterbalanced across five groups by a 5 × 5 Latin square. Responses came from DeepSeek-V3.1, and competency was rated from the interaction logs against a four-dimension rubric.

The headline result is a divergence between measured performance and preference. Competency was highest with the Peer and TA roles and lowest with the Struggling Student, yet students preferred the directive Tutor and Excellent Student roles, rating them highest on usefulness, ease of use, and [[self-efficacy]]. The authors conclude that preference tracked fluency and reduced uncertainty, while competency depended on active generation, epistemic [[agency]], and reflective reasoning.

> **Synthesis:** Treating AI roles as scaffolding configurations rather than social labels, this experiment found the roles students liked most were not the roles that produced the best performance. Peer and Teaching Assistant configurations — which distributed epistemic agency and required learners to articulate their own reasoning — produced superior Model Abstraction and Reflection & Iteration scores, while preferred directive roles reduced the cognitive work left to the learner. Because all four competent roles were rated similarly on usefulness, ease of use, and self-efficacy, learner preference proved a poor proxy for scaffolding effectiveness.

## Key Findings
1. The final model used 520 observations from 26 participants, rating four dimensions (Situation Understanding, Model Abstraction, Mathematical Representation, and Reflection & Iteration) on a 1–4 rubric, with no missing values.
2. Descriptively, the Peer role achieved the highest mean score (M = 7.92, SD = 2.54), followed by the TA role (M = 7.62, SD = 2.30) and the Tutor role (M = 7.42, SD = 2.50); the Struggling role obtained the lowest mean score (M = 6.08, SD = 2.51), while the Excellent role scored slightly higher (M = 6.62, SD = 2.32).
3. In Model Abstraction, the Excellent Student performed significantly worse than the Peer (β = − 0.692, p = .015), TA (β = − 1.039, p < .001), and Tutor (β = − 0.769, p = .005); the Struggling Student performed significantly lower than the Tutor (β = − 0.615, p = .043) and TA (β = − 0.885, p < .001).
4. In Reflection & Iteration, the Excellent Student (β = 0.692, p = .015) and the Peer (β = 0.769, p = .005) both outperformed the Struggling Student, while Situation Understanding and Mathematical Representation showed no significant differences — the latter a possible AI dependency effect.
5. Preference and experience ran against competency: students ranked the Tutor most favorably (M = 2.35, SD = 1.02) and the Struggling Student least (M = 4.42, SD = 1.17), χ2 (4, N = 26) = 28.83, p < .001. Self-efficacy, usefulness, and ease of use also differed by role, χ2 (4, N = 26) = 24.85, 32.63, and 36.43, all p < .001, driven entirely by the Struggling role rating lowest, with no significant differences among the other four roles.

## Five roles as scaffolding configurations

Role names here are shorthand for interaction patterns. The Tutor explains concepts first, guides thinking with questions, and gives the solution only after confirming understanding; the Teaching Assistant never supplies the final answer, relying on open-ended questions and hints; the Peer discusses collaboratively; the Excellent Student delivers correct answers immediately without explaining the process; the Struggling Student makes errors, hedges, and sometimes goes silent. Because these prompts were the manipulation, the comparison isolates scaffolding behavior rather than personality. The authors identify four mechanisms behind the effects: directiveness of guidance, distribution of epistemic agency between learner and AI, cognitive effort elicited, and perceived clarity and reliability.

## Where scaffolding changed measured performance

Effects were process-sensitive rather than uniform across modeling stages. In Model Abstraction, contingent and process-oriented configurations (Tutor, TA, Peer) outperformed both excessive guidance (the Excellent Student, whose direct solutions bypassed students' generative reasoning) and insufficient guidance (the Struggling Student, whose inconsistent input raised cognitive load and disrupted identification of key modeling variables). Reflection & Iteration differed: Peer, Excellent Student, and Tutor performed relatively well, which the authors attribute to contrastive scaffolding — exposure to alternative solutions prompts learners to evaluate and revise their own models — whereas the TA's emphasis on independent problem-solving left fewer opportunities for comparison. Situation Understanding showed no significant differences, and Mathematical Representation stayed low across all five configurations, suggesting representation may need extended, explicitly structured scaffolding.

## Why preference diverged from performance

Preference and competency were shaped by different mechanisms. Directive configurations supplied immediate answers and a clearly identifiable path to completion, reducing uncertainty and raising confidence and efficiency — hence their high usefulness, ease of use, and self-efficacy ratings — but they also shifted responsibility for reasoning toward the AI and reduced opportunities to formulate assumptions, explain relationships, compare alternatives, and revise models independently. The Peer and TA configurations required more active construction and created greater uncertainty and effort, which the authors judge instructionally productive. They anchor this in the [[icap-framework|ICAP framework]], which holds that constructive and [[student-engagement|interactive engagement]] produces deeper learning than passive reception, and in research on productive failure and desirable difficulty. Thematic analysis of 130 feedback instances reinforced the pattern: positive themes centered on response clarity and instructional guidance, negative themes on ambiguity, pedagogical deficiency, and credibility concerns.

## What this means for practice

- **Instructors.** Do not read enthusiasm for a directive AI assistant as evidence that it teaches well. Students here preferred the Tutor and Excellent Student roles, yet Peer and TA configurations produced significantly better Model Abstraction and Reflection & Iteration scores. Build hint-based AI interaction into those phases; reserve directive help for validation and consolidation.
- **Instructional designers.** Adopt the authors' adaptive role alignment: because abstraction, representation, and refinement demand different support, a single static role is the wrong target. Sequence scaffolding by modeling phase, not by the persona learners find comfortable.
- **Edtech designers.** Treat perceived usefulness, ease of use, and satisfaction as insufficient indicators of scaffolding effectiveness — the four competent roles were rated similarly on all three while producing different competency outcomes. Prioritize architectures that make learners explain, compare, and revise, whether by role-switching within one agent or multi-agent systems with complementary roles.

## Limitations

- The analytical sample was 26 participants, after excluding 32 no-shows, 3 withdrawals, and 4 cases of invalid data, recruited by convenience sampling with voluntary self-enrollment. The authors state findings should be interpreted with caution and that larger, more diverse samples are needed for statistical power and external validity.
- The five tasks ran in a fixed sequence from Task A to Task E, so although the Latin square paired each role once with each task across groups, task and order effects were not estimated separately. Only five AI roles were tested, each a single agent working with one learner, leaving group and multi-agent setups untested.
- Preference and experience rest on self-report: single-item, 5-point Likert measures after each round plus a final ranking. No long-term effects of sustained interaction were examined, so the study cannot speak to durable changes in modeling strategies or cognitive autonomy.

## Connected Concepts

- [[generative-ai]]
- [[pedagogical-agent]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[student-experience]]
- [[adaptive-learning]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[feedback]]

## Connected Articles

- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — AI-enhanced PBL with ChatGPT scaffolding
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding for independent learning
- [[chudziak-ai-math-tutoring-platform]] — AI math tutoring platform

## Citation

Zhu, W., Yang, Y., & Yang, Y. (2026). [*Preferred scaffolding does not lead to better learning performance: Empirical evidence from AI-supported mathematical modelling*](https://doi.org/10.1016/j.caeai.2026.100669). *Computers and Education: Artificial Intelligence, 100669*.
