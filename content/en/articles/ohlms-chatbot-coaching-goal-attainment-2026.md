---
title: "Effects of AI-based chatbot coaching on goal attainment, self-efficacy, and stress: A longitudinal randomized experiment"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
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
verified: [citation, numbers, links]
---

> **Synthesis:** Can a chatbot do the work of a human coach for students? Ohlms, Dunlop and Langer randomly assigned psychology undergraduates to four weekly sessions with an LLM-based coaching chatbot, a literature-based self-study condition, or a waitlist, and analyzed 101 across a semester. Goal attainment rose more in the chatbot condition than in either control (T4 vs T1, b = 21.74, p < .001). [[self-efficacy|self-efficacy]] also rose within the chatbot condition, but it beat the controls only at isolated time points, and stress showed no significant change. To the authors' knowledge, it is the first longitudinal field-experimental test of AI coaching in education, and suggests [[conversational-ai|conversational AI]] can support goal pursuit well before it improves well-being.

## Key Findings

1. **Goal attainment improved only after repeated sessions.** In the chatbot condition, goal attainment did not differ from baseline at T2 (b = 4.03, p = .20), then rose by 15.72 points at T3 (p < .001) and 21.74 points at T4 (p < .001) on the study's 0–100% scale.
2. **Both control groups gained less.** Relative to the chatbot condition, the literature study condition showed smaller increases from T1 to T3 (b = −9.60, p = .04) and from T1 to T4 (b = −12.41, p = .008), and the waitlist condition showed smaller increases at every point: T2 (b = −11.15, p = .021), T3 (b = −20.44, p < .001) and T4 (b = −21.51, p < .001). The authors call Hypothesis 1a "largely supported."
3. **The groups did not start equivalent.** Waitlist participants began with higher goal attainment than the chatbot group (b = 12.67, p = .03), while the literature group did not differ from it (b = 9.40, p = .09). A robustness model that added each person's T1 score as a covariate left the T3 and T4 interactions significant (all ps ≤ .038).
4. **Self-efficacy rose, but the between-group pattern was inconsistent.** Within the chatbot condition, self-efficacy was higher than baseline at T2 (b = 0.26, p = .005), T3 (b = 0.20, p = .04) and T4 (b = 0.39, p < .001). The literature group's gain was smaller only from T1 to T2 (b = −0.30, p = .03), and the waitlist group's only from T1 to T4 (b = −0.43, p = .004), so Hypothesis 1b received "partial support."
5. **Stress did not change.** There was no main effect of measurement time (bs < |0.21|, ps > 0.07) or condition (bs < 0.29, ps > 0.18), and no Time × Condition interaction (bs < |0.26|, ps > 0.14). Hypothesis 1c was rejected.
6. **Dose was substantial, and dropout tracked condition.** Sessions averaged 23.20 (SD = 14.30) to 27.50 (SD = 11.30) minutes in the chatbot arm and 24.50 (SD = 8.53) to 26.10 (SD = 9.02) minutes in the literature arm, roughly 100 minutes in total. Of the students who signed up, 71.70% remained in the chatbot condition, 64.15% in literature study and 54.72% in the waitlist.
7. **Satisfaction stayed high in both active arms.** Mean satisfaction was at or above 5.00 on the 7-point scale at every measurement point in both the chatbot and literature conditions.

## What the study did

The trial recruited 153 psychology bachelor students through direct contacts and the department's participant pool. Of 140 who completed at least one measurement point, 39 were excluded for completing fewer than three of the four measurement points, leaving N = 101: 38 in the chatbot condition, 34 in literature study and 29 in the waitlist. The sample was 16.83% male, 81.19% female and 1.98% diverse, with ages from 18 to 39 (M = 21.12, SD = 2.84). An a priori power analysis called for about 29 per condition, 87 in total; the authors aimed for at least 98 to absorb attrition.

Randomization was between subjects. Everyone defined a study-related goal at baseline and completed measures of university-related stress and [[self-efficacy|self-efficacy]]. The two active conditions then completed four sessions about one week apart; the waitlist completed the same questionnaires and received no intervention until after T4, when both control groups were offered the chatbot. A fifth measurement point followed the exam period but was excluded from the main analyses because the manipulation was no longer maintained.

The chatbot came from a German commercial provider, ran on an LLM architecture with inputs processed through the OpenAI API (GPT-4.1), and followed a semi-structured six-phase process: introduction, goals, appreciative inquiry, self-exploration, finding solutions, and conclusion. It was designed around person-centered therapy, solution-focused brief therapy and appreciative inquiry, and it prompted users to anticipate barriers and review progress across sessions. The active control was a curated set of book chapters on exam preparation, stress management, time management, goal setting, academic writing, learning techniques and related topics, organized into folders that students chose to match their goal. Both are plausible uses of a student's time, which makes the comparison a test of [[scaffolding|interactive scaffolding]] against self-directed reading rather than against nothing.

Goal attainment was a single item on a 101-point scale from 0% to 100%. [[self-efficacy|University-related self-efficacy]] was six items adapted from the General Self-Efficacy Scale (mean Cronbach's α = 0.85 across T1–T4), and stress was ten items adapted from the Perceived Stress Scale (mean α = 0.88). Analyses used multilevel models with measurement time and condition as categorical predictors, the chatbot condition and T1 as references, and random intercepts for individuals. The intraclass correlations were 0.60 for goal attainment, 0.81 for self-efficacy and 0.70 for stress.

## Why goal attainment moved and stress did not

The authors read the self-efficacy result partly as a measurement ceiling. Its intraclass correlation was 0.81, so most variance sat between people and four sessions had little within-person room to move it, which is consistent with the inconsistent between-group differences. Goal attainment had more within-person variability (40%), and it was the outcome the coaching process was explicitly built to address, through goal clarification, barrier anticipation and between-session review.

For stress, the paper offers a mechanism it could not test: the working alliance. Coaching effects on broader well-being are thought to run through the relationship between coach and client, and an AI coach may structure goal-directed behavior without generating the social presence, perceived accountability or emotional bond that a human coach provides. The authors also note that effects in prior AI coaching work have concentrated on direct outcomes such as progress toward self-defined goals rather than distal well-being, and that they measured no mediator, so the explanation stays tentative.

Two rival explanations for the goal-attainment pattern are acknowledged rather than resolved. Waitlist participants may have set easier goals because they did not expect support, while students anticipating a coach may have set more ambitious ones; the baseline difference is consistent with that, but the data cannot test goal difficulty. And the lower dropout in the chatbot arm may reflect genuine [[motivation|motivational]] benefit, novelty, differential demand characteristics, or simply less reason for waitlisted students to keep filling in surveys.

## What this means for practice

- **Instructors:** Do not expect a single session to change much. Goal attainment was flat at T2 and only separated from baseline at T3 and T4, so the value of AI coaching appears to depend on repeated, spaced engagement rather than a one-off conversation.
- **Administrators:** Treat AI coaching as a scalable complement to existing support, not a substitute for it. It moved goal progress but not stress, and the authors recommend pairing it with interventions that target stress directly.
- **Designers:** Build for the process, not the chat. The intervention worked through goal clarification, resource activation, barrier planning and cross-session continuity, which are design features a generic assistant does not supply by default.
- **Researchers:** Measure the alliance and goal difficulty. Neither was assessed here, and both are plausible explanations for why the effect stopped at goal attainment instead of reaching well-being.
- **Administrators:** Watch who stays. 71.70% of chatbot sign-ups remained, against 64.15% in literature study and 54.72% in the waitlist; that may signal engagement or novelty, and this design cannot separate them.

## Limitations

One proprietary system on one model limits transfer to other coaching chatbots and designs. The sample was psychology undergraduates at one German university, predominantly female, limiting generalization by discipline, gender and culture. All outcomes were self-report; the authors call for behavioral and objective stress measures such as heart rate or cortisol. The working alliance and goal difficulty were not measured, so the mechanism is inferred. Goal attainment was already unequal at baseline, and the robustness analysis addresses but does not erase that. Grades could not be analyzed because too few students shared results for the same seminar, and the fifth measurement point came after the controls gained access, so nothing here shows whether gains persisted past the semester.

## Citation

Ohlms, M. L., Dunlop, P. D., & Langer, M. (2027). [Effects of AI-based chatbot coaching on goal attainment, self-efficacy, and stress: A longitudinal randomized experiment](https://doi.org/10.1016/j.chb.2026.109184). *Computers in Human Behavior, 187*, 109184.
