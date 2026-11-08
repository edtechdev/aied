---
title: "The impact of an AI-driven multimodal teaching analytics dashboard on pre-service teachers' reflective learning in microteaching"
created: "2026-11-08T09:30:00-05:00"
updated: "2026-11-08T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [quasi-experiment]
evidence_context: educational
level: [higher ed, undergraduate, teacher education]
audience: [instructors, researchers, instructional designers]
sources: ['raw/papers/liu-teaching-analytics-dashboard-2026.md']
source_url: "https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.70098"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [human-ai-collaboration]
pedagogy: [reflection, scaffolding]
technology: [learning-analytics, multimodal, visualization]
assessment: [feedback, self-report-measures]
methods: [mixed-methods-research]
ethics: [privacy, trust]
---

> **Synthesis:** Liu et al. (2026) randomly assigned 53 [[teacher-education|pre-service teachers]] at one Chinese university to a three-week microteaching workshop that gave both arms the same [[multimodal|multimodal]] indicators (gaze, speech, gesture, movement) but only one arm iTeachBoard, an LLM-narrated dashboard built on their AI4MT model, against a conventional [[visualization|visual analytics]] dashboard. The narrated dashboard raised overall sense-making (*F*(1, 64) = 10.642, *p* = 0.002, *η*² = 0.175), through data interpretation (*η*² = 0.166) and meaning construction (*η*² = 0.220) but not actionable transformation (*p* = 0.243), and raised [[reflection|reflective writing]] only on its analytic (*η*² = 0.623) and evaluative (*η*² = 0.627) dimensions. Because the comparison holds the data constant, what moved was the interpretive layer rather than the measurement.

## Key Findings

1. **The comparison isolated the narrative layer.** Both conditions drew on the same multimodal indicators; the control showed speech rate, gaze distribution and movement frequency as charts, while iTeachBoard added LLM narratives and annotated timeline slices. The arms held 27 and 26 participants, and prior reflection was equivalent (*t* = 0.22, *p* = 0.827; *M* = 46.15, *SD* = 4.02 versus *M* = 45.79, *SD* = 4.73).
2. **Overall sense-making favored the narrated dashboard,** *F*(1, 64) = 10.642, *p* = 0.002, *η*² = 0.175, driven by data interpretation (*F*(1, 64) = 9.924, *p* = 0.003, *η*² = 0.166) and meaning construction (*F*(1, 64) = 14.092, *p* < 0.001, *η*² = 0.220).
3. **Action did not follow.** Actionable transformation was not significantly different, *F*(1, 64) = 1.395, *p* = 0.243, *η*² = 0.027, with means of 12.89 against 12.46.
4. **Reflective writing improved only at the top of the rubric.** The MANCOVA gave Pillai's Trace = 0.266, *F*(3, 45) = 5.441, *p* = 0.003; follow-up tests gave Analytic & Reasoning *F*(1, 47) = 82.74, *p* < 0.001, partial *η*² = 0.623 and Evaluation & Action Plan *F*(1, 47) = 83.98, *p* < 0.001, partial *η*² = 0.627, while Description (*p* = 0.453, *η*² = 0.011) and Feeling & Awareness (*p* = 0.209, *η*² = 0.031) did not move.
5. **Trust came from traceability rather than fluency.** Interviewees described a "visible reasoning process" they could check against the timeline. P07: "I can see why the system said my interaction was inadequate. It shows the red points where I didn't make eye contact or pause for questions." One lower performer reported "minor discrepancies in data recognition, particularly in facial-expression analysis."
6. **The affective layer is where users said it failed.** P01: "It noticed my gestures and tone changes, but it didn't really capture my nervousness when students didn't respond, it just said 'low interaction'."

## A control that holds the data constant

The usual evaluation compares a dashboard to no dashboard, which cannot separate measuring teaching from presenting the measurement. Here every participant taught an 8–10-minute lesson, wrote a 300–500-word reflection, had the same recorded video processed into audio, video and movement streams, and then used a dashboard built from that same processing run. The visual analytics control is an active comparator, so the difference is attributable to the interpretive overlay: a narrative panel stating findings, causes and recommended actions, a layered multimodal timeline marking salient events, and a tab system that synchronizes the two.

That design also means the study cannot say which component did the work: the authors credit "narrative–visual integration" without testing narrative alone, timeline alone, or the two unsynchronized. The plausible reading is that the narrative supplied the vocabulary and the timeline supplied the warrant — P07's trust rests on the red points — but that is inference from what participants described, not a manipulated factor.

## Why interpretation moved and action did not

The sense-making instrument sorts into three stages: interpreting evidence, constructing pedagogical meaning, and transforming insight into instructional change. A single 15-minute dashboard session followed by a 300–500-word reflection can scaffold the first two, which are reading and writing tasks. The third asks for a commitment to behave differently in a future lesson — the "critical bottleneck," in the authors' phrase.

That lands directly on the actionability gap the [[learning-analytics]] literature usually frames as a prescriptive-modeling problem: recommendations institutions cannot enact, or recourse that is model-valid but operationally infeasible. Here the explanation was present, specific and traceable, and self-reported action still did not move. Interpretability is necessary but not sufficient for the step from insight to change, which is a sharper claim than "add better recommendations."

Two readings survive. The authors' own is that action needs conditions the intervention did not supply: repeated practice, richer context, social and dialogic mediation, explicit action planning. The deflationary reading is that three Likert items answered after one session measure intent, not behavior. Neither is tested.

The wrinkle the paper does not reconcile is that the reflective-writing rubric contains an Evaluation & Action Plan dimension, and that dimension improved enormously (*η*² = 0.627) while self-reported actionable transformation did not. Writing a better plan and reporting a stronger intention to act parted company. The most economical account is that narrative scaffolding teaches the *discourse* of planning without producing the commitment or the occasion to enact it.

## Why the reflection gains were lopsided

The authors read the uneven profile as evidence against the uniform stage progression assumed by Gibbs' reflective cycle, and propose a stratified model in which different dimensions respond differently to technological scaffolding. The cognitive core moved; the descriptive and affective layers did not.

The mechanism is visible in the design. The narrative panel is structured as Findings → Causes → Actions, the same shape as the rubric's Analysis & Reasoning and Evaluation & Action Plan dimensions, and the feedback sequence embeds Gibbs' description → feelings → analysis → evaluation → conclusion → action-planning order. The treatment therefore models the genre the rubric rewards. That is what scaffolding a genre is supposed to do, and it is also a confound: part of the gain is instruction in the register of reflective writing, which a mentor could supply without analytics.

The Feeling & Awareness null is the more informative one, because the rubric's shape does not explain it away. The narrative sequence includes feelings, yet the affect dimension stayed flat (*p* = 0.209), and the interviews say why: the model reads faces, tone and gesture as behavior — "low interaction" — not as an interior state. What the system can evidence is what a camera can see. Nervousness when students do not respond is inferred by the teacher, not detected by the pipeline, so the narrative has nothing to narrate.

This qualifies how reflection is usually scored. Depth is treated as a single ladder, and a tool is judged by whether it moves a learner up it. Here one scaffold moved two rungs and left two untouched, so "does this raise reflection quality?" is the wrong question.

## What this means for practice

- **Keep every narrative claim clickable to its evidence.** Trust came from the link between a sentence and a marked moment on the timeline. A narrative panel without the annotation and video timestamp is a verdict, not a scaffold.
- **Add the action step the dashboard cannot supply.** Because actionable transformation did not move, pair the session with a dated reteach commitment, one specific change to a lesson segment, and a follow-up observation of whether it happened.
- **Ask for the affective account separately.** A two-question prompt before the analytic narrative — what were you unsure about, and how did the class's reaction feel — protects the dimension that stayed flat and gives a mentor something to work with.
- **Plan batch processing, not live feedback.** Processing 53 videos of 8–10 minutes took roughly 26.5 hours on a high-performance server, so schedule overnight jobs and promise next-session feedback rather than same-day turnaround.
- **Position it inside mentoring, not instead of it.** The authors describe it as a scaffold that does not replace the teacher's judgment; the [[trust|trust]] evidence is about verifying claims, not deferring to the system. As an assessment of record it would be used against its design.

## Limitations

The sample is 53 pre-service teachers majoring in educational technology at one university in southwest China, 15% male (*n* = 8) and 85% female (*n* = 45), in a three-week workshop with one 8–10-minute lesson each. There is no delayed post-test: the control group crossed over to iTeachBoard in a compensatory session immediately after the main intervention, so nothing here speaks to retention, transfer to real classrooms, or whether the writing gains survive without the dashboard.

The sense-making outcome is a nine-item [[self-report-measures|self-report]] questionnaire whose wording mirrors the dashboard's own categories, answered once. The reflective-writing raters reached Cohen's κ = 0.78, but the paper does not say whether they were blind to condition, which matters when one condition's feedback models the rubric's structure. Interview reporting is inconsistent: 12 PSTs were invited and "ten PST interviews" were analyzed, and the interviews followed the compensatory session in which the control group had already used iTeachBoard.

The statistics carry an unexplained discrepancy: the ANCOVAs report *F*(1, 64) although 53 participants were randomized, and no correction for multiple comparisons was applied beyond the protected MANCOVA-then-ANCOVA sequence. Nothing measures enactment — no observation of a reteach, no interaction logs — so "actionable transformation" rests on intention alone.

The system also captures faces, gaze, voice and movement from pre-service teachers. The paper names the [[privacy|privacy]] and governance stakes of biometric capture and requires ethical approval and written consent, but reports nothing about retention, secondary use, or deletion requests.

## Citation

Liu, M., Wu, Z., Dai, H., Malik, L., Li, X., Maruf, G. A. A. H., et al. (2026). [*The impact of an AI-driven multimodal teaching analytics dashboard on pre-service teachers' reflective learning in microteaching*](https://doi.org/10.1111/bjet.70098). *British Journal of Educational Technology*, 1–27.
