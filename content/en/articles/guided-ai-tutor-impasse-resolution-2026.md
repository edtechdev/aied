---
title: "Examining Variation in How Guided AI Tutors Resolve Student Impasses"
created: "2026-10-01T09:06:32-04:00"
updated: "2026-10-01T09:06:32-04:00"
type: article
sources: ['raw/papers/guided-ai-tutor-impasse-resolution-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [secondary analysis, experiment]
level: [higher ed, undergraduate]
audience: [instructors, educational technology developers, researchers]
pedagogy: [scaffolding, help-seeking, productive-failure, misconceptions]
technology: [intelligent-tutoring, llm, learning-analytics, prompt-engineering]
assessment: [feedback]
methods: [quantitative-research, ai-ed-evaluation]
ethics: [guardrails]
foundations: [human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** An AI tutor must decide when and how much to help: too early crowds out [[desirable-difficulties|productive struggle]], too late leaves students wheel-spinning. Ahtisham and colleagues analyzed 20,462 student turns from 1,260 authentic sessions with a guided [[intelligent-tutoring|LLM chemistry tutor]], identifying 6,630 impasse turns across 4,170 episodes in three forms: conceptual errors (34.9%), expressed uncertainty (29.7%), and [[help-seeking|help requests]] (35.4%). Replaying 150 impasses through three prompt conditions, they show that prompt specificity shapes [[pedagogy]]: a baseline tutor gave the answer directly in 50.7% of responses, a no-direct-answer tutor asked a follow-up question in 100%, and the deployed guided tutor produced 51 distinct move combinations. In the authentic dialogues, each additional impasse turn lowered the odds of next-turn recovery by 12.7% (AOR = 0.873), and the value of questioning decayed as impasses persisted (scripted question × depth AOR = 0.78) while addressing the student's error grew more useful (AOR = 1.14). Students who abandoned sessions early were caught in repeated concept-elicitation loops before reaching execution. Constraining a tutor with [[guardrails|guardrail prompts]] is not the same as making it adaptive; impasse depth and type are observable signals for [[learning-analytics|learning analytics]] to trigger graduated assistance.

## Key Findings

1. Across 1,260 authentic sessions with a guided [[llm]] [[chemistry-education|chemistry]] tutor, the authors identified 6,630 impasse turns in 4,170 episodes: 34.9% conceptual errors, 29.7% expressed uncertainty, and 35.4% help requests.
2. Impasses clustered in planning: 52.3% occurred while identifying relevant concepts, 18.1% during strategy, and 14.5% during execution, with impasse type strongly dependent on the practice (Cramér's V = .42).
3. Prompt specificity changed pedagogy for the same 150 impasses: the baseline tutor gave a direct answer in 50.7% of responses, the no-direct-answer tutor asked a follow-up question every time with three move combinations, and the guided tutor produced 51.
4. Recovery fell as impasses persisted, from 39.7% at onset to 26.2% at depth 3 and 18.8% at depth 6 or more; each additional impasse turn lowered next-turn recovery odds by 12.7%.
5. Questioning lost value with depth (scripted question × depth AOR = 0.78; follow-up question × depth AOR = 0.83) while addressing the student's incorrect answer grew more beneficial (AOR = 1.14).
6. Early dropouts (252 sessions, 20.0%) never reached execution; from problem definition, 71% of their transitions led back to relevant concepts, whose self-transition probability was .74.

## Constraining answers is not the same as teaching

LLM tutors are governed largely by [[prompt-engineering|natural-language system prompts]] rather than an explicit tutoring model. The deployed Guided AI Tutor (GPT-4o) was told never to solve the problem, to ask one question at a time, and to give increasingly specific hints after errors. Replaying 150 impasses through three conditions tested what those instructions buy. The baseline tutor produced the full solution procedure in 50.7% of responses, rising to 70% for conceptual errors. The no-direct-answer tutor asked a follow-up question in 100% of responses with only three distinct move combinations — a rigid questioning policy, not a nuanced pedagogy. The guided tutor drew on the broadest repertoire — scripted questions, checks for understanding, praise, hints, error-directed feedback — with 51 move combinations. Constraining answer-giving and specifying pedagogy are different design problems.

## When questioning stops working

Next-turn recovery fell steadily with impasse depth. Scripted questions were associated with a 20-percentage-point higher recovery rate at onset but only 3 points by the fourth impasse turn, and follow-up questions fell from +15 to +3 points, while [[feedback|addressing the student's incorrect answer]] rose from +5 to +12. A first scripted question at onset was followed by recovery in 55.5% of cases, but a scripted question repeated after another recovered only 28.1%; switching instead to the error recovered 39.8%. This qualifies work on [[scaffolding|scaffolding]] and [[productive-failure|productive struggle]]: eliciting reasoning helps when an impasse first appears, but continuing to elicit after repeated failure tracks with less recovery — consistent with contingent tutoring that becomes more specific after failure.

## Where students get stuck — and who leaves

Impasses were concentrated at the start of planning: more than half occurred while identifying relevant concepts, and type depended on the practice. Help requests dominated the concepts phase (58.1%), conceptual errors and uncertainty were roughly balanced during strategy and execution, and 95.1% of answer-checking impasses were expressions of uncertainty. The guided tutor sometimes named the student's [[misconceptions|misconception]] before asking its next question. Early dropouts, 252 sessions (20.0%) that ended with fewer than ten student turns without reaching execution, showed a distinctive loop: from problem definition, 71% of their transitions led to relevant concepts, and once there they stayed (self-transition probability .74). Because the tutor sets each exchange's practice, these loops are a joint failure of student and tutor.

## What this means for practice

- **Instructors.** Track how long a student has been stuck, not just whether: recovery odds fall 12.7% per additional impasse turn, so question at onset (a 20-point advantage that shrinks to 3 by the fourth turn) and shift toward addressing the error (+12 points), which recovered 39.8% where a repeated scripted question recovered 28.1%.
- **Developers.** Do not treat an answer-withholding guardrail as a pedagogy: the no-direct-answer tutor asked a follow-up question in 100% of responses with three move combinations, so write prompts that specify what to do when the first intervention fails.
- **Researchers.** Treat impasse depth and type as turn-level variables, not single-turn labels, and connect escalation strategies experimentally to both recovery and later learning.

## Limitations

- The authentic dialogue analyses are observational, so tutor-move associations with recovery are not causal, and the controlled comparison examines response [[educational-policy-ai|policies]], not student outcomes.
- Greater impasse depths represent the subset of episodes still unresolved at earlier turns, so depth-dependent effects may partly reflect a changing mix of persistent impasses rather than persistence itself.
- Recovery captures only next-turn correctness, not longer-term learning, and the corpus was coded with a human-validated LLM pipeline rather than exhaustive human annotation.
- Generalizability is limited to a single guided tutor in one [[higher-ed|undergraduate]] chemistry setting.

## Citation

Ahtisham, B., Vanacore, K., Napoli, A., Arens, J., Ionova, K., Cohn, C., Salehi, S., & Kizilcec, R. (2026). [*Examining Variation in How Guided AI Tutors Resolve Student Impasses*](https://arxiv.org/abs/2609.38346). arXiv preprint.