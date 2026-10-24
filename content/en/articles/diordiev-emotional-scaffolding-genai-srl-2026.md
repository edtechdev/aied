---
title: "Prompt-based emotional scaffolding in generative AI: Effects on self-regulated learning and socio-emotional outcomes"
created: "2026-10-24T06:15:00-04:00"
updated: "2026-10-24T06:15:00-04:00"
type: article
authors: [Elena-Alexandra Diordiev, Valdemar Aksel Stenberdt, Guido Makransky]
pub_date: 2026-10-18
venue: "British Journal of Educational Technology"
url: https://doi.org/10.1111/bjet.70094
foundations: [agency, human-ai-collaboration]
pedagogy: [self-regulated-learning, motivation, metacognition]
technology: [generative-ai, conversational-ai, pedagogical-agent]
ethics: [trust-calibration]
research_method: [experiment]
discipline: [learning sciences]
level: [secondary]
audience: [instructors, instructional designers, researchers]
sources: ['raw/papers/diordiev-emotional-scaffolding-genai-srl-2026.md']
confidence: high
methods: [quantitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Diordiev, Stenberdt and Makransky (2026) ran a preregistered randomized experiment with 144 Danish high school students in a regular psychology lesson, giving each a 25-minute chatbot session on the multi-store memory model in one of three conditions: plain ChatGPT, an SRLbot built to scaffold the forethought, performance and self-reflection phases of [[self-regulated-learning|self-regulated learning]], and an Emotional SRLbot that added control-value-theory-driven emotional support, asking students how they felt at three points and adapting tone, challenge and affective scaffolding in response. The learning results were null in the way that matters: conceptual knowledge and transfer rose in every condition with large within-group effects, and the time-by-condition interaction was flat (η2 < 0.001 for knowledge, 0.001 for transfer), so the designed bots did not produce more learning than plain ChatGPT in 25 minutes. What did separate the conditions was behavior and emotion, and the two sources of evidence disagreed in an instructive way. [[self-regulated-learning|Self-reports]] showed a condition effect only in the performance phase. Trace coding of the dialogue showed large condition effects in all three phases (ε2 of 0.44, 0.34 and 0.34), with the emotional layer adding significantly more performance-phase and self-reflection activity on top of SRL scaffolding alone. Enjoyment rose and boredom fell under both scaffolded bots but not under plain ChatGPT, hopelessness fell everywhere, and [[self-efficacy]] and [[trust]] did not move at all. The study's honest contribution is a phase-level account of what a prompt can do: [[scaffolding|cognitive scaffolding]] buys forethought, and the emotional layer buys the later phases.

## Key Findings

- **No learning advantage for either designed bot.** Conceptual knowledge rose from pretest to posttest in all three groups (main effect of time, F(1,141) = 131.4, p < 0.001, η2 = 0.48), as did transfer (F(1,141) = 80.81, p < 0.001, η2 = 0.36). The time-by-condition interaction was 0.02 for knowledge (p = 0.980) and 0.05 for transfer (p = 0.953).
- **Descriptive ordering favored the emotional bot without reaching significance.** Within-group posttest gains ran ChatGPT d = 0.87, SRLbot d = 0.98, Emotional SRLbot d = 1.01 for conceptual knowledge, and 0.67, 0.76, 0.85 for transfer. The authors report the ordering and decline to claim it.
- **Four-week retention did not differ by condition.** Of 144 students, 85 completed the follow-up. Knowledge fell from posttest to follow-up across groups (F(1,82) = 9.28, p = 0.003, η2 = 0.027) and transfer fell more sharply (F(1,82) = 44.66, p < 0.001, η2 = 0.35), with the steepest descriptive declines in the ChatGPT group and no significant interaction.
- **Enjoyment and boredom moved only in the scaffolded conditions.** The time-by-condition interaction was significant for enjoyment (F(2,141) = 3.77, p = 0.026) and boredom (F(2,141) = 3.86, p = 0.024). Enjoyment rose by d = 0.53 in SRLbot and d = 0.75 in Emotional SRLbot against a nonsignificant d = 0.21 in ChatGPT; boredom fell by d = 0.35 and d = 0.67 respectively, and not significantly under ChatGPT.
- **Hopelessness fell for everyone, including plain ChatGPT.** The main effect of time was large (F(1,141) = 118.19, p < 0.001, η2 = 0.16) with no condition effect or interaction: d = −0.73, −0.80 and −1.02 across the three groups.
- **Trace-coded SRL separated the conditions far more sharply than self-report.** Aggregated trace scores differed by condition in forethought (goal setting and planning, χ2(2) = 62.44, p < 0.001, ε2 = 0.44), performance (elaboration, summarization, judgments of learning, attention control, χ2(2) = 48.94, ε2 = 0.34) and self-reflection (χ2(2) = 49.35, ε2 = 0.34). SRL scaffolding alone lifted forethought to the same level as the emotional version; the emotional layer added significant gains in the performance phase (Z = 2.60, p = 0.028, r = 0.22) and self-reflection (Z = 3.45, p = 0.002, r = 0.31).
- **Self-report and trace data converged in one phase out of three.** Self-reported performance-phase engagement differed by condition (F(2,141) = 3.46, p = 0.034), with Emotional SRLbot above ChatGPT (d = 0.45), while forethought and self-reflection showed no significant self-report differences. The exploratory correlations were r = 0.313 (p = 0.002) for performance, r = 0.22 (p = 0.08) for forethought and r = 0.04 (p = 0.89) for self-reflection.
- **Self-efficacy and trust were flat.** Self-efficacy did not differ across conditions (F(2,141) = 0.06, p = 0.939, η2 = 0.001) and neither did trust in the chatbot (F(2,141) = 1.51, p = 0.22, η2 = 0.020). Chatbot enjoyment, a separate measure from lesson enjoyment, was higher for Emotional SRLbot than plain ChatGPT (p = 0.046, d = 0.45).

## How the three conditions were built

All three agents ran on GPT-4o through OpenAI's API in a research platform that held the interface constant and swapped only the system prompt. SRLbot used the assistant API with the lesson materials uploaded, prompted students through forethought, performance and self-reflection, presented questions one at a time and capped replies at 20 lines to limit cognitive load. Emotional SRLbot kept that prompt and added check-ins at the start, after the first concept and in self-reflection, where reported emotions triggered instruction-based adaptations to tone, affective scaffolding and cognitive challenge, aimed at the student's appraisals of control and value rather than at the emotion itself. Temperature was set to 0.7 so the adaptations guided rather than fixed the replies. The study was preregistered on AsPredicted, with deviations listed in an appendix, and the system prompts are published.

The sample was 144 students across two Danish high schools in spring 2025, 48 per condition, mean age 18.29, in a 90-minute lesson that included a teacher-led introduction and 25 minutes of chatbot work. Outcomes were multiple-choice knowledge, a written case-analysis [[transfer-of-learning|transfer]] task, achievement-emotion scales, self-efficacy, trust, chatbot enjoyment, self-reported SRL, and dialogue traces coded into ten micro-level SRL processes.

## What this means for practice

- **Instructors and designers choosing between a generic chatbot and a designed one.** Over a single short lesson the designed features changed what students did and how they felt, not what they scored. If the goal is a test result, this study gives no reason to expect a prompt-engineered agent to beat ChatGPT.
- **Teams deciding which scaffolding to build first.** SRL prompts alone delivered the forethought gain; the emotional layer paid off in the later phases. If only one of the two can be built, it is the ordering that matters rather than the total.
- **Anyone evaluating a chatbot design.** The design effect was three to four times larger in trace data than in self-report, and inactive in two of the three phases when students were asked. An evaluation that only surveys students would have found almost nothing here.
- **Researchers and purchasers reading emotional-design claims.** Making chat warmer did not make students trust it more, and did not raise self-efficacy, which is the honest counterweight to the paper's positive findings on enjoyment and engagement.

## Limitations

- The intervention lasted 25 minutes and the follow-up sample lost 59 of 144 students, with attrition concentrated among students who reported higher prior AI use and more baseline boredom, so the retention analysis rests on a sample that is not the randomized one.
- The knowledge test had internal consistency below 0.6 at pretest and follow-up, which the authors say limits confidence in the learning-gain estimates.
- Trace differences record scaffolded behavior inside one conversation, not independent regulation: the prompts created the opportunities for goal setting, strategy use and self-evaluation that the coding then counts, and the authors are explicit that this is co-regulated enactment.
- Six confirmatory hypotheses were preregistered but no study-wide correction was applied across outcome families, and several results sit just under 0.05.
- One lesson on one topic in a psychology elective, in a population with heavy prior GenAI use, leaves generalization to other subjects and to first-time users untested.

## Citation

Diordiev, E.-A., Stenberdt, V. A., & Makransky, G. (2026). [*Prompt-based emotional scaffolding in generative AI: Effects on self-regulated learning and socio-emotional outcomes*](https://doi.org/10.1111/bjet.70094). *British Journal of Educational Technology*. Advance online publication.
