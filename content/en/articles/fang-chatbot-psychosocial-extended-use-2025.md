---
title: "How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use: A Longitudinal Randomized Controlled Study"
created: "2026-11-11T15:45:00-05:00"
updated: "2026-11-11T15:45:00-05:00"
type: article
published: "2025"
evidence_context: non_educational
sources: ['raw/papers/fang-chatbot-psychosocial-extended-use-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, survey]
audience: [researchers, instructors]
level: [adult learning]
foundations: [human-ai-collaboration]
pedagogy: [well-being, student-experience]
technology: [conversational-ai, generative-ai, multimodal]
ethics: [trust, trust-calibration]
methods: [rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
---

> **Synthesis:** Fang and colleagues (2025) ran a four-week 3 × 3 [[rct|randomized trial]] in which 981 U.S. adults talked with GPT-4o for at least five minutes a day, varying the interface (text, a neutral voice, or an emotionally engaging voice) and the topic (open-ended, non-personal, or personal). Neither manipulation significantly changed loneliness or real-world socialization, and personal-topic conversations were only marginally associated with lower dependence and problematic use. What tracked harm was voluntary time: every additional minute per day predicted more loneliness, less socialization, more emotional dependence, and more problematic use, whatever condition the participant was in. Participants who trusted the chatbot, felt socially attracted to it, or saw it as conscious were the most dependent, which puts the risk in the relationship a user forms rather than in a modality a designer ships.

## Key Findings

1. **The designed conditions produced almost no outcome effects.** Across the 3 × 3 design, neither modality nor conversation type significantly changed loneliness or socialization, and the two small personal-conversation associations with dependence and problematic use were marginal, with the pairwise differences failing correction.
2. **Voluntary duration predicted every outcome in the harmful direction.** Each extra daily minute was associated with higher loneliness (β = 0.02, p = 0.027), less socialization (β = -0.05, p = 0.0019), more emotional dependence (β = 0.06, p < 0.001), and more problematic use (β = 0.02, p = 0.017).
3. **Baseline state, not the condition, dominated the week-four score.** Initial loneliness predicted final loneliness at β = 0.86 and initial socialization predicted final socialization at β = 0.85, with all coefficients below 1.0 — regression toward the mean rather than a treatment effect.
4. **Lonelier people did not use the bot more.** Initial loneliness and socialization correlated negligibly with average daily duration (Spearman's ρ = 0.1 and -0.09), weakening the reverse explanation that distress drove use.
5. **Text carried more emotional exchange than voice.** Text interactions showed the highest emotional indicators on both sides, with users most often sharing problems (17.13%), seeking support (15.78%), and alleviating loneliness (8.35%), and text produced the most self-disclosure and the most reciprocal disclosure.
6. **Trust and social attraction marked the vulnerable users.** Higher trust predicted more emotional dependence (b = 0.19, p < 0.001) and more problematic use (b = 0.076, p < 0.001); social attraction to the bot predicted less real-world socialization (b = -0.029, p = 0.0037) and more dependence (b = 0.043, p = 0.0023).
7. **Attrition was large.** Of 2,539 enrolled participants, 981 completed the four weeks, so the analyzed sample is well under half of those who started.

## The design: nine cells, four weeks, four outcomes

The trial crossed three modalities with three conversation topics. Text was default ChatGPT; the two voice conditions added custom system prompts, one professional and neutral, the other emotionally expressive, with participants assigned one of two synthetic voices. Topics were open-ended (talk about anything), personal (a daily prompt such as reflecting on gratitude), or non-personal (a daily prompt such as how historical events shaped technology). Everyone was asked to spend at least five minutes a day with the bot for 28 days and was paid \$100 for completing the study; the experiment was preregistered and IRB-approved.

Four validated instruments were collected weekly: the 8-item UCLA Loneliness Scale, the 6-item Lubben Social Network Scale, the craving subscale of the 9-item Affective Dependence Scale adapted to a chatbot, and the Problematic ChatGPT Use Scale. The primary model regressed the week-four value on modality and task, controlling for the baseline value, age, and gender. Analyses were run on the 981 completers, after excluding participants who missed three consecutive daily tasks, averaged fewer than ten messages per session, completed fewer than twelve conversations, or departed from their assigned modality.

## The manipulations did not move the outcomes

The headline result is a set of nulls. Neither modality nor task significantly changed loneliness or socialization, and the voice conditions did not produce the anthropomorphic harm the literature predicted; if effects exist, the authors say they are smaller than the study was powered to detect. Personal conversations were associated with lower emotional dependence (β = -0.09, p = 0.05) and lower problematic use (β = -0.04, p = 0.04) than open-ended conversations, but the authors report that these differences did not survive correction, and they read the direction as a hypothesis rather than a finding: structured emotional processing may be safer than open-ended practical reliance.

The behavioral analysis explains why the conditions could differ in process without differing in outcome. Text produced the richest emotional content and the most self-disclosure, in both directions, which the authors suggest is partly privacy — typing discloses more than speaking aloud — and that reciprocity is the plausible route to dependence. The engaging voice was rated most anthropomorphic yet produced more loneliness and less dependence, which the authors connect to an uncanny-valley account rather than to warmth. Personal-topic conversations also drew more socially improper bot responses, including ignored boundaries and failures to escalate distress, and the authors propose that worse social behavior can reduce attachment while constant validation increases it.

## Duration was the variable that tracked harm

Because participants could use the bot as much as they liked, time became the informative measure. Average use was 5.32 minutes a day, ranging from 1.01 to 27.65, and it was right-skewed; people spent significantly more time with the engaging voice than with text, and more time in open-ended than in personal or non-personal conversations. Centering duration within condition and adding it to the models turned it into a significant predictor of all four outcomes, each in the harmful direction.

The authors are careful about causality: duration was not manipulated, so the association could run from worsening well-being to more use. They argue that direction is less likely because initial loneliness and socialization barely correlated with later duration, and an exploratory mediation analysis treats duration as a pathway through which modality and task act on socialization and emotional dependence. The practical implication they draw is that duration is a monitorable signal and a candidate intervention target — soft caps or break nudges — for trials that manipulate it directly.

## Who was vulnerable, and what may follow for education

The exploratory correlations locate risk in the user's relationship with the system rather than in a feature toggle. Trust in the AI, social attraction to it, perceived emotional contagion, affective empathy toward it, and seeing it as conscious all moved in the harmful direction, and prior use of text ChatGPT or companion bots was associated with more dependence. That pattern is consistent with the [[trust-calibration|calibration]] problem the [[trust]] literature describes: the users most likely to treat the bot as a reliable social partner are the ones for whom it most readily substitutes.

For education the study is a background condition, not a classroom finding. It measured adults in the general population, not students, and it measured well-being rather than learning. What it changes is the expectation placed on [[student-experience|student-facing]] companions: a campus tutor, advising bot, or [[conversational-ai|conversational]] study partner that is warm enough to be used daily is also the configuration in which heavy voluntary use correlates with worse psychosocial outcomes, and the design features a product team would tune for engagement — expressiveness, memory, availability — are not the ones this trial found protective. The honest transfer is a question for institutional policy and for [[well-being]] services: whether the students who use a companion most are also the ones a campus should be reaching in person, and whether usage time is a signal worth monitoring rather than a success metric.

## What this means for practice

- **Instructors.** Treat sustained daily use of a companion-style assistant as a signal to check in, not as engagement. In this trial the participants who chose to spend the most time had the worst outcomes on all four measures.
- **Administrators.** Do not market companion features by time-on-app. Duration was a harm marker here, and the study's own suggested levers are soft caps and break nudges rather than more availability.
- **Designers.** Separate warmth from substitution. The engaging voice was rated most human-like yet did not improve outcomes, and trust plus social attraction — not expressiveness — marked the users who became dependent.
- **Researchers.** Test duration directly. The authors did not manipulate usage, so the central association is correlational; a trial that assigns capped versus uncapped use would settle whether the pathway is causal.

## Limitations

- There was no non-AI comparison arm, so the study cannot separate chatbot effects from ordinary temporal change in loneliness or socialization, such as holidays or global events.
- The controlled design restricted participants to one modality or to prompted topics, which does not reflect natural use; text input also remained available in the voice conditions for technical reasons.
- Results are specific to OpenAI's ChatGPT interface and its safety guardrails; other models or less-guarded companion platforms may behave differently.
- The sample was U.S.-based and English-speaking, and the analysis covers the 981 of 2,539 enrolled participants who completed all four weeks.
- Duration was not randomized, so the direction of the association between time and well-being remains open despite the negligible baseline correlations.
- All behavioral and user-characteristic analyses beyond the preregistered primary models are exploratory, drawn from automated classifiers and self-report.

## Citation

Fang, C. M., Liu, A. R., Danry, V., Lee, E., Chan, S. W. T., Pataranutaporn, P., Maes, P., Phang, J., Lampe, M., Ahmad, L., & Agarwal, S. (2025). [How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use: A Longitudinal Randomized Controlled Study](https://arxiv.org/abs/2503.17473). arXiv:2503.17473.
