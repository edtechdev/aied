---
title: "Effects of AI-based chatbot coaching on goal attainment, self-efficacy, and stress: A longitudinal randomized experiment"
created: "2026-11-11T07:43:15-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/ohlms-chatbot-coaching-goal-attainment-2026.md']
source_url: "https://doi.org/10.1016/j.chb.2026.109184"
source_depth: full text
confidence: high
pedagogy: [self-efficacy, self-regulated-learning, motivation]
technology: [conversational-ai, llm]
methods: [rct]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** A chatbot cannot supply a coach's relationship, but it can supply the structure of coaching. Psychology undergraduates who met an [[llm|LLM]]-based coach for four weekly sessions made more progress toward a self-set study goal than students given curated reading or placed on a waitlist, and the gain appeared only after several sessions. Their [[self-efficacy|self-efficacy]] rose within the coached group, though it beat the comparison groups only at scattered points, and stress did not move at all. The authors read this as evidence that [[conversational-ai|conversational AI]] can support goal pursuit before it touches [[well-being|well-being]], because the part it supplies is planning and accountability rather than a human bond.

## Key Findings

1. **Goal progress needed repeated sessions.** Goal attainment was no higher than baseline after the first session and only pulled ahead at the third and fourth, on a scale running from no progress to complete attainment. One conversation is not the unit of effect here; a sequence is.
2. **Both comparison groups gained less.** Students who read curated material caught up early but fell behind by the third and fourth points, and waitlisted students fell behind at every point. The reading condition was a credible use of time, so the contrast is between interactive scaffolding and self-directed study, not between coaching and nothing.
3. **The groups did not start equal.** Waitlisted students began with higher goal attainment than the coached group, which makes the eventual reversal more striking, and a robustness model that adjusted for starting level kept the late differences.
4. **Self-efficacy rose, but not consistently against the comparisons.** Coached students rated themselves higher than baseline at every later point, yet the reading group trailed them only early and the waitlist only at the end. The authors call this partial support: the direction is encouraging, the separation is not clean.
5. **Stress did not change.** There was no effect of time, no effect of condition, and no interaction, so four sessions of goal-focused coaching neither relieved nor worsened university-related stress.
6. **Engagement was substantial, and dropout tracked condition.** Students logged roughly 100 minutes of sessions across the four weeks, and retention was highest in the chatbot arm, lower in the reading arm, and lowest among waitlisted students.
7. **Satisfaction stayed high in both active arms.** Both the chatbot and the reading condition rated satisfaction at or above five on a seven-point scale at every measurement point, so low satisfaction does not explain the differences in outcome.

## What the study did

The trial recruited 153 psychology bachelor students through direct contacts and the department's participant pool. Of 140 who completed at least one measurement point, 39 were excluded for completing fewer than three of the four, leaving 101: 38 in the chatbot condition, 34 in literature study and 29 on the waitlist. The sample was predominantly female, with ages from 18 to 39. An a priori power analysis called for about 29 per condition; the authors aimed higher to absorb attrition, and the achieved arms sat at or near that threshold.

Randomization was between subjects. Everyone defined a study-related goal at baseline and completed measures of university-related stress and [[self-efficacy|self-efficacy]]. The two active conditions then completed four sessions about a week apart; the waitlist completed the same [[self-report-measures|questionnaires]] and received no intervention until after the final measurement point, when both control groups were offered the chatbot. A later measurement after the exam period was excluded from the main analyses because the manipulation was no longer maintained.

The chatbot came from a German commercial provider, ran on an LLM architecture through the OpenAI API, and followed a semi-structured six-phase process: introduction, goals, appreciative inquiry, self-exploration, finding solutions, and conclusion. It was designed around person-centered therapy, solution-focused brief therapy and appreciative inquiry, and it prompted users to anticipate barriers and review progress across sessions. The active control was a curated set of book chapters on exam preparation, stress management, time management, goal setting, [[writing-education|academic writing]] and learning techniques, organized into folders students chose to match their goal. That makes the comparison a test of [[scaffolding|interactive scaffolding]] against [[self-directed-learning|self-directed]] reading rather than against nothing.

Goal attainment was a single item on a 101-point scale from 0% to 100%. [[self-efficacy|University-related self-efficacy]] was six items adapted from the General Self-Efficacy Scale, and stress was ten items adapted from the Perceived Stress Scale. Analyses used multilevel models with measurement time and condition as categorical predictors and random intercepts for individuals.

## Why goal attainment moved and stress did not

The authors read the self-efficacy result partly as a measurement ceiling. Most of its variance sat between people rather than within them, so four sessions had little room to shift an individual's self-rating, which is consistent with the inconsistent between-group differences. Goal attainment had far more within-person variability, and it was the outcome the coaching process was explicitly built to address, through goal clarification, barrier anticipation and between-session review. The size is worth noting: the coached group gained 21.74 points on the 0–100 scale by the final session, having shown nothing after the first, which makes the sequence rather than the tool the plausible ingredient.

For stress, the paper offers a mechanism it could not test: the working alliance. Coaching effects on broader well-being are thought to run through the relationship between coach and client, and an AI coach may structure goal-directed behavior without generating the [[community-of-inquiry|social presence]], perceived accountability or emotional bond that a human coach provides. The authors also note that effects in prior AI coaching work have concentrated on direct outcomes such as progress toward self-defined goals rather than distal well-being, and that they measured no mediator, so the explanation stays tentative.

Two rival explanations for the goal-attainment pattern are acknowledged rather than resolved. Waitlist participants may have set easier goals because they did not expect support, while students anticipating a coach may have set more ambitious ones; the baseline difference is consistent with that, but the data cannot test goal difficulty. And the lower dropout in the chatbot arm may reflect genuine [[motivation|motivational]] benefit, novelty, differential demand characteristics, or simply less reason for waitlisted students to keep filling in surveys.

## What this means for practice

- **Instructors:** Do not expect a single session to change much. Goal attainment was flat at first and only separated later, so the value of AI coaching appears to depend on repeated, spaced engagement rather than a one-off conversation, and a one-off trial will look like a failure even when the design is sound.
- **Designers:** Build for the process, not the chat. The intervention worked through goal clarification, resource activation, barrier planning and cross-session continuity, which are design features a generic assistant does not supply by default.
- **Administrators:** Treat AI coaching as a scalable complement to existing support, not a substitute for it. It moved goal progress but not stress, and the authors recommend pairing it with interventions that target stress directly. Watch who stays as well: retention was highest in the chatbot arm, which may signal engagement or novelty, and this design cannot separate them.
- **Researchers:** Measure the alliance and goal difficulty. Neither was assessed here, and both are plausible explanations for why the effect stopped at goal attainment instead of reaching well-being.

## Limitations

One proprietary system on one model limits transfer to other coaching chatbots and designs. The sample was psychology undergraduates at one German university, predominantly female, limiting generalization by discipline, gender and culture. All outcomes were self-report; the authors call for behavioral and objective stress measures such as heart rate or cortisol. The working alliance and goal difficulty were not measured, so the mechanism is inferred. Goal attainment was already unequal at baseline, and the robustness analysis addresses but does not erase that. Grades could not be analyzed because too few students shared results for the same seminar, and the final measurement point came after the controls gained access, so nothing here shows whether gains persisted past the semester.

## Citation

Ohlms, M. L., Dunlop, P. D., & Langer, M. (2027). [Effects of AI-based chatbot coaching on goal attainment, self-efficacy, and stress: A longitudinal randomized experiment](https://doi.org/10.1016/j.chb.2026.109184). *Computers in Human Behavior, 187*, 109184.
