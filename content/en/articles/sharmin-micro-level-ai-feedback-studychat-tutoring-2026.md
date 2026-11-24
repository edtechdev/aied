---
title: "Micro-level AI feedback features and student responses in consecutive LLM tutoring interactions"
created: "2026-11-24T09:25:00-05:00"
updated: "2026-11-24T09:25:00-05:00"
type: article
authors: ["Shayla Sharmin", "Mohammad Fahim Abrar", "Mohammad Al-Ratrout", "Roghayeh Leila Barmaki"]
venue: "Journal of Computer Assisted Learning"
evidence_context: educational
pedagogy: [scaffolding, metacognition, help-seeking]
technology: [llm, intelligent-tutoring, learning-analytics]
assessment: [feedback, ai-feedback-quality]
methods: [quantitative-research]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, educational technology developers]
page_kind: [evaluation]
research_method: [secondary analysis]
sources: ["raw/papers/sharmin-micro-level-ai-feedback-studychat-tutoring-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Sharmin, Abrar, Al-Ratrout, and Barmaki (2026) reanalyze 16,851 student–AI interactions from the StudyChat dataset to ask whether three micro-level [[feedback]] features — concrete elaboration, affective language, and response length — predict whether an [[intelligent-tutoring|LLM tutor]]'s next turn clears a student's expressed confusion. An annotation pipeline isolated 1,718 confusion windows from 152 users in an undergraduate [[cs-education|AI course]], and logistic generalized estimating equation models tested each feature against the next-turn outcome. Concrete elaboration, covering analogies, comparisons, and worked examples, was associated with about twice the odds of observed understanding, while each additional 100 words of AI response lowered understanding and raised re-confusion. Affective language showed no detectable association with either outcome. The study argues that turn-level [[learning-analytics|analysis of interaction logs]] reveals effects that session-level evaluations average away.

*Secondary analysis of 16,851 user–AI conversational rows from StudyChat, a naturalistic record of students working with an LLM tutor in an undergraduate artificial intelligence course. Logistic generalized estimating equation models with odds ratios and 95% confidence intervals, run on 1,718 confusion windows contributed by 152 users; response length scaled per 100 words.*

## Key Findings

- **Concrete elaboration helped; length hurt.** Elaboration was associated with about twice the odds of next-turn understanding, while every additional 100 words of response lowered the odds of understanding by about a fifth.
- **Longer answers also brought back confusion.** Each extra 100 words was associated with about 10% higher odds of re-confusion in the following interaction, after accounting for the other two features.
- **Affective language did not move either outcome.** Understanding occurred in 10.1% of windows with encouragement, empathy, or apology and 11.9% without, a gap too small to tell from chance; re-confusion occurred in 31.3% versus 25.1%, also short of the conventional threshold.
- **The features rarely co-occurred.** Only 9 of 1,718 windows (0.5%) contained both concrete elaboration and affective language, so the estimates are close to independent tests of distinct moves.
- **Confusion windows were common and consequential.** Re-confusion followed 443 windows (25.8%) and observable understanding 201 (11.7%); AI responses in these windows averaged 442.3 words, with a median of 439 and wide variation around that average.
- **Human annotators largely agreed with the LLM labels.** Agreement was strongest for confusion (κ = .922–.949) and understanding (κ = .869), and weaker for follow-up and new-context judgments (κ = .651–.674).

## Turn-level signals in a naturalistic tutoring corpus

Most research on [[ai-feedback-quality|AI-generated feedback]] asks whether students learned after a task or a session, which averages across many turns and hides what happens immediately after a learner says they are stuck. The authors instead isolate a confusion window: a student expresses confusion at interaction n, the AI responds, and the next interaction n+1 is coded for whether the confusion persists. Confusion was annotated only in follow-up turns, so a window captures sustained difficulty with the previous answer rather than a first expression of trouble. This is a different question from "did the tutor help?" — it asks which properties of one response change the trajectory of the next.

The corpus is naturalistic rather than experimental. Students in an undergraduate AI course used the tutor as they chose, on their own problems, so the associations describe what happened in practice rather than what a manipulated condition caused. The authors lean on that realism while acknowledging it costs causal leverage: nothing was randomized, and the same student contributes multiple windows, which the [[learning-analytics|generalized estimating equation]] models handle by clustering on user.

## What predicted the next turn

Concrete elaboration was the only feature with a clear, consistent association. Unadjusted, 21.1% of elaborated responses were followed by observable understanding against 11.2% otherwise (χ²(1) = 7.21, p = .007, V = .065), and 15.6% by re-confusion against 26.4% (χ²(1) = 4.69, p = .030, V = .052). The multivariable model kept the understanding effect (OR = 2.08) and left the re-confusion effect in the same direction but short of the prespecified threshold (OR = 0.52, 95% CI [0.27, 1.00], p = .050). Elaboration here means an analogy, a comparison-based explanation, or a worked example embedded in the reply — moves that connect new material to something tangible rather than simply correcting an error, in the tradition of [[scaffolding]].

Response length cut the other way. Longer answers can carry more information, but they also add processing load, and the data show the cost dominating: each 100-word increment reduced understanding and increased re-confusion, with the average answer already running to 442.3 words. Affective language — encouragement, empathy, apology — was the surprise null. It neither helped nor clearly harmed, which the authors read against a literature that often treats emotional support as a reliable booster. The practical reading is that a short, concrete explanation beats a long reassuring one when a student has just said they are confused.

## Why session-level evaluations miss this

The pattern matters for how tutoring systems are evaluated. Session-level studies ask whether learning improved over an activity, and a single confusing exchange inside a session leaves no trace there. Here the unit of analysis is the exchange, and the signal appears between adjacent turns. The authors argue this explains why controlled studies sometimes find small or inconsistent feedback effects while log data shows systematic differences in how learners respond. It also reframes [[metacognition]] support: the tutor's job after confusion is not to say more, but to give the learner one concrete thing to work with and stop.

Two design implications follow. First, feedback should be judged on the turn after it, not only on end-of-task scores. Second, brevity and concreteness are competing design variables, and the evidence favors concise elaboration over extended explanation. The authors are explicit that this is observational: controlled studies are needed before the pattern becomes a firm design rule.

## What this means for practice

- **Instructors.** When a student is stuck, respond with one concrete device — an analogy, a comparison, or a worked example — rather than a longer explanation; the turn-level evidence associates elaboration with recovered understanding.
- **Educational technology developers.** Treat response length as a design variable, not a proxy for thoroughness. Cap explanatory text after confusion and reserve length for cases where more steps genuinely require it.
- **Researchers.** Evaluate tutoring feedback at the turn level. Report what happens in the interaction following a confused turn, alongside task-level outcomes, so effects that session averages hide remain visible.
- **Assessment designers.** Distinguish observed behavioral recovery from verified comprehension. A learner who stops raising a confusion has not necessarily understood, and the measures here cannot tell the difference.

## Limitations

- The design is a secondary analysis of observational log data, so no feature was manipulated and the associations cannot support causal claims about what a tutor should say.
- Outcomes are behavioral proxies: "observed understanding" means the student moved on without renewing the confusion, which is not the same as verified conceptual understanding.
- Confusion was coded only in follow-up turns, so first expressions of difficulty are excluded and the window definition shapes what counts as persistence.
- The corpus comes from one undergraduate AI course with 152 contributors of confusion windows, which limits generalization to other subjects, levels, and tutor implementations.
- Annotation relied on an LLM pipeline validated against human coding; agreement was lower for follow-up and new-context judgments (κ = .651–.674) than for confusion and understanding.
- The three features rarely co-occurred, which helps isolate effects but also means the sample offers little evidence about how elaboration, affect, and length combine.

## Citation

Sharmin, S., Abrar, M. F., Al-Ratrout, M., & Barmaki, R. L. (2026). [Micro-level AI feedback features and student responses in consecutive LLM tutoring interactions](https://arxiv.org/abs/2607.08952). *Journal of Computer Assisted Learning.*
