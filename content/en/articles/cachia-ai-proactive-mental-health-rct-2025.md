---
title: "AI for Proactive Mental Health: A Multi-Institutional, Longitudinal, Randomized Controlled Trial"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors, administrators]
sources: ['raw/papers/cachia-ai-proactive-mental-health-rct-2025.md']
source_url: "https://doi.org/10.1056/AIoa2501293"
source_depth: full text
confidence: high
technology: [generative-ai, conversational-ai, llm]
methods: [rct]
level: [higher ed, undergraduate]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Over six weeks in Fall 2024, Cachia and colleagues randomized 486 undergraduates at three U.S. institutions to a [[generative-ai|generative AI]] well-being app, Flourish, or to care as usual, and surveyed them four times. The app pairs a multi-turn conversation with an AI coach, Sunnie, to a brief evidence-based activity and a mood check, then feeds daily and weekly patterns into the next interaction. Loneliness fell faster and belonging rose in the treatment group (p=.040 and p=.032), and treated students held their positive affect, mindfulness and flourishing while the control group drifted down. Negative affect and depression, anxiety and stress did not improve. Week 6 between-group differences ran from d=0.18 to d=0.33 — modest, as the authors expect from a low-intensity preventive design.

## Key Findings

1. **Loneliness fell and belonging rose.** Condition × Time interactions were significant for loneliness (b=−0.05, SE=0.02, t(1162.49)=−2.06, p=.040, β=−0.03, 95% CI [−0.06, −0.001]) and belonging (b=0.06, SE=0.03, t(371.49)=2.15, p=.032, β=0.04 [0.00, 0.07]), with a marginal interaction for closeness to one's institution (b=0.04, SE=0.02, t(392.08)=1.80, p=.072). By Week 6 the treatment group's advantage was itself marginal: loneliness 5.10 (SD=1.67) against 5.40 (SD=1.71), d=0.18, p=.092; belonging 6.11 (SD=2.14) against 5.68 (SD=2.18), d=0.20, p=.066.
2. **Positive affect was protected, not raised.** The Condition × Time interaction was significant (b=0.22, SE=0.10, t(1153.08)=2.33, p=.020, β=0.04, 95% CI [0.01, 0.07]), but the treatment group did not change within itself (b=0.20, SE=0.14, p=.150) while the control group declined marginally (b=−0.25, SE=0.13, p=.059). The Week 4 gap was d=0.24 [0.03, 0.45] (p=.025) and the Week 6 gap d=0.33 [0.12, 0.54] (p=.002), with means of 19.38 (SD=6.21) and 17.21 (SD=6.98).
3. **Resilience, mindfulness and flourishing followed the same buffering pattern.** Interactions were significant for resilience (b=0.12, SE=0.06, p=.036), mindfulness (b=0.20, SE=0.09, p=.037) and flourishing (b=0.19, SE=0.09, p=.030). Only mindfulness separated the groups at Week 6 (14.99 vs. 13.67, d=0.22, 95% CI [0.01, 0.43], p=.042); resilience (p=.216) and flourishing (p=.410) did not.
4. **Negative affect and clinical symptoms did not move.** The interaction was null for negative affect (b=0.01, SE=0.10, t(1151.68)=0.08, p=.933) and all three of its subcomponents (ps > .516). Preregistered clinical outcomes — depression, anxiety and stress — showed no significant Condition × Time interaction (ps ≥ .462), though anxiety had a marginal overall effect favoring treatment (b=−0.12, SE=0.07, p=.071). Academic self-efficacy was also null (p=.443).
5. **[[student-engagement|Engagement]] exceeded the prescribed dose.** Treatment participants were asked to use the app at least twice per week and recorded a mean of 3.49 active days per week and 3.39 well-being activities per week beyond the chat and journal features. Platform-wide data put the average session at 8 minutes 17 seconds.
6. **Retention was moderate and unrelated to condition.** 320 participants (65.8%) completed all four surveys, 40 (8.2%) completed three, 51 (10.5%) completed two and 75 (15.4%) completed one. Randomization did not predict completion of all four waves (p=.944) or completion at Week 2, Week 4 or Week 6 (ps = .869, .625 and .238).
7. **No moderation survived correction.** Effects did not vary significantly by demographics, baseline mental health or participant-transcribed engagement after Bonferroni correction for multiple comparisons.

## How the app works and how the trial was run

Flourish is organized around what the authors call a proactive behavior loop. A user begins with a brief emotion check-in and then holds a multi-turn conversation with Sunnie, an AI well-being coach that builds emotional awareness and recommends context-sensitive, evidence-based activities — journaling, gratitude practice, cognitive reappraisal, social connection exercises, mindfulness — before guiding the user through the chosen activity. The user then reports an updated emotional state and receives daily and weekly insights that synthesize mood patterns and prompt reflection. The loop closes when those insights shape the next check-in, so the personalization is cumulative rather than a single tailored message. Safety guardrails and human monitoring are described in the paper's supplement.

The trial enrolled 486 [[higher-ed|undergraduates]] at Chapman University (n=245), the University of Washington (n=175) and Foothill College (n=66) during Fall 2024. Random assignment happened through Qualtrics at the end of the baseline survey; the treatment arm received app access and the control arm continued to use existing campus resources, a care-as-usual design. Surveys ran at Weeks 0, 2, 4 and 6. Affect and loneliness were measured at every wave, while resilience, mindfulness, flourishing, belonging and institutional closeness were measured only at baseline and Week 6 to limit burden. The sample was not screened for mental health symptoms: the trial tests whether a general student population can be moved, not whether a clinical sample can be treated.

Analysis followed intent-to-treat, including all randomized participants regardless of engagement, with linear mixed-effects models in R 4.2.3 and random intercepts for participant and institution. The authors had preregistered additional exclusion criteria but adopted intent-to-treat as the better strategy for a randomized trial; sensitivity analyses applying the preregistered criteria produced substantively similar results. A power analysis indicated 80% power to detect effects as small as d = .11.

## What moved, what did not, and how large

The results are better described as buffering than as improvement. On positive affect, mindfulness and flourishing the treatment group stayed roughly flat while the control group declined. On loneliness and belonging the treatment group moved in the favorable direction and the control group moved less or not at all. Resilience rose within the treatment group (b=0.21, SE=0.08, p=.011) and did not change in the control group (b=−0.03, SE=0.08, p=.718), but the Week 6 between-group difference was not significant. The authors are explicit that the effects are modest and consistent with a low-intensity, scalable intervention.

The null clinical results are consistent with the design rather than in tension with the well-being results. Participants were not selected for distress, so there was little room for symptom reduction, and the app is strengths-based rather than therapeutic. The paper notes that a later randomized trial of Flourish did show clinically meaningful symptom reductions versus care as usual, attributed to added therapeutic ingredients in a later version. That claim is the authors' own report of a separate study and is not tested here; what this trial supports is a preventive, population-level reading, not a claim that the app substitutes for treatment.

Two features matter. First, the significant terms are Condition × Time interactions, which describe diverging trajectories; several Week 6 point-in-time comparisons are only marginal. Second, the control condition was care as usual, not an active control, so the design cannot separate the app's specific ingredients from the nonspecific effects of using an app, being asked about one's mood, or expecting benefit. The authors argue that qualitative responses showed substantive engagement with specific features, which reduces but does not remove that concern.

## What this means for practice

- **Administrators:** A low-intensity, self-directed app can be offered to a whole student population without screening, and the observed benefit is in maintenance and social connection rather than symptom relief. It belongs upstream in a stepped-care model, not in place of counseling.
- **Instructors:** The trial gives no evidence that a well-being app raises academic outcomes; academic self-efficacy was unchanged (p=.443). Framing matters more than placement — the app presents support as personal growth rather than treatment.
- **Designers:** The active ingredients named here are conversational: affect labeling, a recommended activity matched to context, and a reflective loop that returns patterns to the user. A generic chatbot wrapper without that loop is not what was tested.
- **Researchers:** Report buffering and improvement separately. A flat treatment arm against a declining control arm is a real effect, but it is not the same claim as a gain, and Week 6 cross-sectional differences can be marginal even when the interaction is significant.
- **Institutions:** Six weeks is the whole evidence window. Nothing here establishes durability past the end of the semester, and the paper says so.

## Limitations

The control condition was care as usual rather than an active control, so nonspecific effects of app use and expectancy cannot be ruled out, and the authors' qualitative material only partly addresses that. Outcomes stop at Week 6, leaving durability unknown. The sample is nonclinical undergraduates at three institutions, predominantly female, which limits generalization to clinical populations, other age groups and more diverse samples. Effects were modest, and the preregistration was completed after data collection began but before the study data were accessed or reviewed. Engagement was transcribed by participants from the app rather than extracted from backend analytics, which limits precision. Two authors are employees and board members of Flourish Science and a third is an adviser and shareholder; recruitment and data collection were led by site investigators outside the company, but the conflict bears on interpretation. The report is an author accepted manuscript, not the publisher's edited version of record.

## Citation

Cachia, J. Y. A., Zhao, X., Hunter, J., Wu, D., Lin, E., & De Freitas, J. (2025). [*AI for Proactive Mental Health: A Multi-Institutional, Longitudinal, Randomized Controlled Trial*](https://doi.org/10.1056/AIoa2501293). NEJM AI. DOI: 10.1056/AIoa2501293. Author accepted manuscript.
