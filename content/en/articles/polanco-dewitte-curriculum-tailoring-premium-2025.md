---
title: "The Tailoring Premium: AI Design, Behavioral Engagement, and Human Capital Formation"
created: "2026-11-28T03:19:26-05:00"
updated: "2026-11-28T03:19:26-05:00"
type: article
foundations: [curriculum-design]
pedagogy: [student-engagement, motivation, self-efficacy]
technology: [conversational-ai, generative-ai, personalized-learning, llm]
assessment: [learning-gains]
methods: [rct, quantitative-research]
discipline: [business education]
level: [secondary]
audience: [instructors, instructional designers, policymakers]
page_kind: [evaluation]
research_method: [experiment]
evidence_context: educational
sources: ['raw/papers/polanco-dewitte-curriculum-tailoring-premium-2025.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** **The Tailoring Premium** — A pre-registered field [[rct|randomized trial]] with *N* = 2,440 Flemish secondary students tested what a school system actually buys when it pays for [[curriculum-design|curriculum-integrated]] AI. Students were randomized within classrooms to traditional instruction, a general-purpose chatbot, or a chatbot engineered for the specific financial-literacy module, with both chatbots running on the same underlying [[llm|large language model]] backbone. The [[conversational-ai|general-purpose chatbot]] produced learning outcomes indistinguishable from traditional teaching (−0.004 SD). The tailored chatbot raised immediate [[learning-gains|learning]] by 0.126 standard deviations. The authors locate the mechanism in [[student-engagement|engagement]] rather than model quality: assignment to the tailored tool raised module completion by 13.2 percentage points against a 23.8% control baseline, while the generic tool did not move completion at all. For the students the tailored design pulled across the completion threshold, finishing the module was worth 1.147 SD immediately and 0.309 SD on a knowledge-retention test two months later. Framed as the field's "build versus buy" decision, the study argues that the [[personalized-learning|personalization]] dividend comes from solving a behavioral participation constraint, not from a smarter model.

## Key Findings

- **Curricular tailoring, not model capability, produced the learning gain.** The tailored chatbot raised immediate financial-literacy scores by 0.126 standard deviations over traditional instruction; the general-purpose chatbot's effect was indistinguishable from zero and from the control condition.
- **Engagement was the operative mechanism, and it was non-monotonic.** Assignment to the tailored tool increased module completion by 13.2 percentage points relative to the control group's 23.8% baseline — described by the authors as nearly a 55% increase in participation — while assignment to the generic tool produced a small, non-significant reduction (−3.3 percentage points).
- **The two chatbots changed *who* persisted, not just how many.** Among generic-arm students, completers outscored non-completers on the pre-test by 0.079 SD and reported higher baseline [[self-efficacy|self-confidence]]; the tailored arm shrank that ability gap to 0.032 SD and left baseline attitude toward AI for learning as the main predictor of completion.
- **For compliers, completion was worth a great deal.** Completing the tailored module raised immediate learning by 1.147 SD and [[learning-gains|knowledge retention]] by 0.309 SD, with a first-stage coefficient of 0.114 and an F-statistic of 31.2.
- **The generic arm could not support a complier interpretation.** Its first stage was weak (F = 4.19) and slightly negative (−0.035), so the authors explicitly decline to read its second-stage coefficient as a LATE — a diagnostic that the generic tool discouraged rather than recruited marginal participants.
- **The ITT result is imputation-dependent.** It remains positive and significant under zero imputation and a conservative P10 imputation of missing scores, but attenuates to non-significance at P25 and above; non-parametric Lee bounds for the average treatment effect are wide and include zero (Imbens–Manski 95% interval [−0.428, 0.666] for immediate learning).
- **Effects did not concentrate in an advantaged subgroup.** Interacting treatment with nine baseline characteristics — gender, school track, prior performance, prior attitudes toward AI and taxes, parental education, [[teacher-role|teacher]] shortages — produced no significant moderation of either the learning or the engagement effect, which the authors read as broad rather than targeted benefit.

## What the experiment compared

The trial ran from January to May 2024 in the Flemish secondary system, inside the standard Economic and Financial Literacy curriculum and focused on the Belgian personal income tax system. Of 2,440 third-grade students (typically aged 16–18) in 120 classrooms across 58 schools, a real-time algorithm assigned each student at login to control (n = 799), a "Generic Chatbot" (n = 870), or a "Tailored Chatbot" (n = 771), which non-parametrically controls for teacher, classroom and peer-group heterogeneity.

The control arm used existing course materials. The generic arm received condensed instruction plus a chatbot with general knowledge of taxation but no access to the module's exercises or a [[pedagogy|pedagogical]] system prompt — the authors' deliberate stand-in for a student using an off-the-shelf [[generative-ai|generative AI]] tool for self-study. The tailored arm received a chatbot built for the Flemish curriculum that combined content specificity with pedagogical adaptivity. Both systems sat on the same LLM infrastructure, so the contrast is meant to isolate tailoring rather than model quality. The manuscript names GPT-4 in one passage and Gemini 2.5 Pro in another when describing that shared backbone, and the base-model identity is therefore stated inconsistently.

Learning was measured with a ten-item multiple-choice item bank developed by KU Leuven's economics [[teacher-education]] program and validated for equivalent difficulty: gained financial literacy as post-test minus pre-test, and knowledge retention as the score on a follow-up test two months later. The trial was pre-registered in the AEA RCT Registry (AEARCTR-0015266) with a pre-analysis plan, and the protocol was approved by KU Leuven's Social and Societal Ethics Committee. The intent-to-treat estimate for immediate financial-literacy gain was 0.126 SD for the tailored arm (SE 0.037, p < 0.01) against −0.004 SD for the generic arm (SE 0.035). On the two-month retention test the tailored estimate was 0.026 SD (p < 0.1) and the generic estimate −0.002 SD.

## Engagement was the mechanism, and attrition was the measure

The study's most consequential design decision is to treat module completion as the engagement outcome rather than as a data-cleaning problem. The intervention occupied three supervised 50-minute class periods, and every module was designed to be completable within that time, so a student who stopped was choosing to disengage rather than running out of clock. Completion was low everywhere — 616 of 2,440 students (25.3%) provided complete post-test data — but it was not evenly low: 33.5% in the tailored arm, 23.8% in the control arm and 19.3% in the generic arm.

That pattern turns [[student-engagement|engagement]] into the first stage of a causal chain. The tailored design raised participation by 13.2 percentage points; the generic design did not. And the selection analysis shows the two arms failing and succeeding in different ways. Under the generic tool, completion was predicted by prior achievement and self-confidence, which is what a frustrating tool looks like when only the most able and persistent students finish it. Under the tailored tool, those selection channels largely disappeared: a well-designed tool moved the barrier to use away from a student's ability or pre-existing dispositions and toward their willingness to engage with the technology at all. That is a claim about [[equity-in-ai-education|equity]] as much as about learning, since the students most likely to drop out of a generic-tool activity are not the ones a school most needs to reach.

The complier analysis follows from the same logic. For students on the margin of disengagement, completing the tailored module produced an immediate gain of 1.147 SD — an implausibly large figure as a population average, and the authors present it as exactly that, a LATE for a narrow marginal group rather than a return every student would realize. The durable figure is the more useful one: 0.309 SD on the two-month retention test, which speaks to the fade-out problem that usually erodes short-term gains from educational technology.

## What survives the missing data

The trial's attrition is severe enough to dominate any reading of its headline number, and the authors handle it more openly than most. Roughly three-quarters of randomized students have no post-test score, and the ITT estimates impute those scores at zero — a conservative choice that assumes attriters learned nothing, which is the assumption most favorable to detecting no effect. The estimate stays significant under that assumption and under imputing the 10th percentile of the observed distribution, then fades at the 25th percentile and above. The Lee bounds, which do not assume a particular missing-data mechanism, are too wide to rule out zero.

So the honest summary is conditional: the tailored premium is robust to conservative imputation but not identified without assumptions about students who never finished. What the paper does establish beyond the imputation debate is the participation result, which is observed on the full randomized sample rather than on completers, and the differential-selection pattern, which is measured at baseline for every student.

## What this means for practice

- **Curriculum and technology leaders.** Treat the build-versus-buy decision as a claim about participation before it is a claim about model quality. In this trial the off-the-shelf option matched traditional instruction and nothing more, so a district that adopts a general chatbot should expect no learning return from the adoption itself.
- **Instructional designers.** Budget design effort for the part that moved the outcome: module-level integration (exercises, feedback, scope aligned to the taught sequence) and a pedagogical system prompt, not a better base model.
- **Instructors.** Watch completion, not just post-test scores. A tool that filters out the middle of the class and keeps only confident high performers can post respectable scores among completers while doing nothing for the students who stopped.
- **Policymakers and evaluators.** Expect differential attrition whenever an AI tool is optional within class time, and pre-specify how missing outcomes will be handled — the difference between zero imputation and P25 imputation is the difference between a significant and a null result.

## Limitations

- **Attrition dominates the headline estimate.** Only 616 of 2,440 randomized students (25.3%) provided complete post-test data; the significant ITT result depends on conservative imputation, and the Lee bounds include zero.
- **The two design ingredients are bundled.** The tailored arm combined content specificity and pedagogical adaptivity, so the study cannot say which one produced the engagement effect, as the authors acknowledge.
- **One subject, one system, one region.** Financial literacy in Flanders is a deliberate test case for rule-based, curriculum-specific content, but it is not evidence about open-ended domains, and only a two-month retention window was measured.
- **The base model is stated inconsistently.** The manuscript describes the shared LLM backbone as GPT-4 in one passage and Gemini 2.5 Pro in another, and the data were collected in early 2024, so readers cannot pin the exact system generation the comparison describes.
- **Psychosocial results are descriptive.** The opposing self-confidence movement among completers (tailored +0.208, generic −0.224) comes from a selected completer sample and is presented by the authors as hypothesis-generating, not causal.

## Citation

Polanco-Jiménez, J., & De Witte, K. (2025). [The Tailoring Premium: AI Design, Behavioral Engagement, and Human Capital Formation](https://ssrn.com/abstract=6110192). Working paper, SSRN.
