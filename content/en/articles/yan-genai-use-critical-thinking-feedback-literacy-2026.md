---
title: "The association between generative AI use and university students' critical thinking: a moderated mediation model of GenAI feedback literacy and reflective thinking"
created: "2026-11-17T06:05:00-05:00"
updated: "2026-11-17T06:05:00-05:00"
type: article
authors: ["Yan, Z.", "Fang, Z.", "Zou, W."]
published: "2026"
venue: "Frontiers in Psychology 17:1939286"
source_url: https://doi.org/10.3389/fpsyg.2026.1939286
foundations: [critical-thinking, ai-literacy]
pedagogy: [student-ai-interaction, reflection]
technology: [generative-ai]
assessment: [feedback]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
level: [higher ed]
audience: [instructors, curriculum designers]
page_kind: [evaluation]
evidence_context: educational
confidence: medium
sources: ['raw/papers/yan-genai-use-critical-thinking-feedback-literacy-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Yan, Fang and Zou (2026) surveyed 421 Chinese undergraduates and tested whether [[generative-ai|GenAI]] use helps or harms [[critical-thinking|critical thinking]] by asking what sits between the two. It is [[feedback|feedback]] literacy: use predicted feedback literacy (β = 0.438) and feedback literacy predicted critical thinking (β = 0.421), carrying 71.98% of the total effect, while the direct path from use to critical thinking went non-significant once the mediator entered. [[reflection|Reflective thinking]] moderated the structure — at high reflection the effect ran almost entirely through feedback literacy; at low reflection, use was associated with critical thinking directly.

## Key Findings

- **Use is positively associated with self-reported critical thinking.** The direct coefficient before mediation was β = 0.257 (p < 0.001), which is the opposite sign to the "metacognitive laziness" prediction.
- **Feedback literacy carries most of the effect.** The indirect path was β = 0.185, 95% CI [0.134, 0.254], with a variance-accounted-for of 71.98%, and the direct effect dropped to non-significance — near-complete mediation.
- **Reflection changes the mechanism, not just the strength.** At high reflective thinking the association ran almost entirely through feedback literacy; at low reflective thinking use was directly associated with critical thinking.
- **The conditional indirect effect is strongest at high reflection.** The moderated mediation index supports treating reflection as the condition under which AI use becomes a feedback-processing activity.
- **All variables were measured at once, by self-report.** The authors are explicit that this describes associations consistent with the mechanism rather than a demonstrated causal order.

## What was tested

The model draws on the extended-mind framework, cognitive load theory and feedback-literacy theory, and it operationalises critical thinking as self-reported critical analytical skill rather than as a performance test. The sample is 421 undergraduates, 69.6% female, and the estimation is partial least squares structural equation modeling with 5,000 bootstrap resamples.

The choice of mediator is the contribution. The literature has been arguing about whether AI use strengthens or weakens thinking, and this study reframes the question: what students do with the output determines which effect they get. A student who treats a response as feedback — reads it, judges it, decides what to accept — is practicing the skill the outcome measure asks about. A student who treats it as an answer is not, and the model's low-reflection class is where that shows up.

## Why the moderation matters more than the average effect

A headline correlation between AI use and critical thinking invites a policy answer: encourage use, or restrict it. The moderation says neither, because the same behavior has a different mechanism depending on the student. Low-reflection students get a direct association, which is the pattern that could be either a genuine scaffold or self-report contamination — students who use the tool a lot and think of themselves as analytical report both. High-reflection students get the mediated path, which is the pattern the theory wants: use produces feedback literacy, and feedback literacy produces thinking.

For teaching, that is an argument for making reflection an explicit, assessed part of any AI task. Not as a soft add-on but as the variable that decides which mechanism the task runs.

## What this means for practice

- **Instructors:** require a reflection step on AI feedback — what the tool said, what the student accepted, what they rejected and why. The moderation says this is the difference between the two mechanisms.
- **Assessment designers:** do not assess critical thinking with self-report if you can assess it with a task. This study's outcome is a self-rating, which inflates the direct path for confident users.
- **Curriculum designers:** teach feedback literacy as the target skill, since it carries 71.98% of the association and is teachable in a way that "use AI well" is not.
- **Instructors:** treat heavy use by low-reflection students as the group to watch, not the group to congratulate.

## Limitations

Cross-sectional, single country, all self-report, with critical thinking measured as self-rated skill rather than tested performance. That combination makes the near-complete mediation as consistent with a shared method factor as with the proposed mechanism. The sample is undergraduates in one institution cluster, and GenAI use was self-reported in frequency terms. Feedback literacy was measured with a scale developed for AI feedback specifically, which is new enough that its discriminant validity against general academic literacy is not settled.

## Citation

Yan, Z., Fang, Z., & Zou, W. (2026). [*The association between generative AI use and university students' critical thinking: a moderated mediation model of GenAI feedback literacy and reflective thinking*](https://doi.org/10.3389/fpsyg.2026.1939286). Frontiers in Psychology, 17, 1939286.
