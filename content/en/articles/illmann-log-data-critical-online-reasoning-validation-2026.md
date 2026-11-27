---
title: "Validating log data indicators of acquiring information in critical online reasoning using eye-tracking data"
created: "2026-11-27T09:45:00-05:00"
updated: "2026-11-27T09:45:00-05:00"
published: "2026-11-24"
type: article
authors: ["Jannick Illmann", "Yavuz Dinc", "Carolin Hahnel", "Jochen Kuhn", "Stefan Küchemann", "Verena Ruf", "Maruschka Weber", "Frank Goldhammer"]
venue: "PsyArXiv preprint"
evidence_context: educational
foundations: [critical-thinking, information-and-media-literacy]
technology: [sensor-and-gaze-analytics, learning-analytics]
assessment: [assessment-validity, educational-measurement]
methods: [quantitative-research]
discipline: [physics education, medical education]
level: [higher ed]
audience: [researchers, assessment professionals, learning analytics designers]
page_kind: [evaluation]
research_method: [user study]
sources: ["raw/papers/illmann-log-data-critical-online-reasoning-validation-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Illmann and colleagues (2026) test whether log-data indicators of online information acquisition actually measure what they are said to measure, using [[sensor-and-gaze-analytics|eye-tracking]] as convergent evidence. Twenty-six students completed a 30-minute critical online reasoning task in a laboratory while a Tobii Pro Fusion tracker recorded gaze at 120 Hz. The clearest support was for click restraint: both time on the search engine results page and scrolling were associated with fixating a greater number of snippets (r = .56 and r = .40). The other indicators did not converge with their eye-tracking counterparts: fluttering showed no significant association, looking for specific information showed none, and unreflected information consumption could not be tested because the indicator did not vary in the sample. The paper's contribution is a [[assessment-validity|validation]] design and a warning that plausible log indicators carry interpretive assumptions that need evidence.

## Key Findings
1. **Click restraint received convergent support.** Median time on the results page correlated with the number of snippets fixated at .56, and scrolling correlated at .40.
2. **Time and scrolling are not interchangeable.** Time on the results page was also associated with total snippet fixation duration, but scrolling was not, suggesting the two indicators capture different aspects of attention.
3. **Fluttering did not converge.** The predicted negative association with variance in snippet fixation duration was not significant and was positive rather than negative, both before and after outlier exclusion.
4. **Looking for specific information did not converge.** The indicator was not significantly associated with the share of snippet descriptions fixated, and the eye-tracking measure had restricted variance because students fixated on a high proportion of descriptions.
5. **One indicator could not be tested.** Unreflected information consumption did not vary in the eye-tracking subsample because every student opened at least one website, whereas nearly 30% of the overall sample did not.
6. **The sample was small and disciplinary.** Of 29 participants, 26 were retained (mean age 19.5, 34.6% female), 16 enrolled in physics and 10 in medicine.
7. **The laboratory setting may have changed behavior.** The authors note that the eye-tracking setup may have made students more aware of being observed, which is especially relevant to the indicator that showed no variance.

## The validation logic

Log data record actions — a click, a scroll, time on a page — but an action can have more than one explanation. Eye-tracking supplies a second source of evidence about whether the action coincides with visual attention to the relevant content. The study defines areas of interest around snippets on the results page and correlates each log indicator with a pre-specified eye-tracking metric. The approach does not prove that an indicator measures a construct, but it can disconfirm an interpretation and it can show which of two candidate interpretations is better supported.

That is what happened with click restraint. Spending time on the results page and scrolling both went with inspecting more snippets, which supports reading those actions as a form of restraint rather than as indecision or idle time. The divergence between time and scrolling on total fixation duration is the more subtle result: scrolling may expose a student to lower-ranked results without increasing how thoroughly any of them is examined. Treating the two as equivalent measures of the same behavior would be a mistake.

## Why null results matter here

The fluttering and specific-information results are not failures of the study; they are the reason it is useful. Fluttering was defined at the level of behavior across websites, while the eye-tracking metric was defined on the results page, and the two may not capture the same underlying intention. That is a conceptual mismatch, not just a measurement error, and it suggests the indicator needs a different validation strategy or a different operational definition.

The unreflected-consumption result is a lesson about settings. In the broader sample, nearly 30% of students did not open a website; in the laboratory subsample, all of them did. The indicator's variance disappeared, which may reflect a genuine change in behavior under observation. For anyone using log data to measure self-regulated [[information-and-media-literacy|information seeking]], that is a reminder that the setting is part of the measure.

## What this means for practice

- **Assessment designers.** Do not treat a log indicator as self-validating. Pair it with a process measure or a task design that can distinguish the interpretations you care about.
- **Learning analytics designers.** Keep time and scrolling as separate features. They correlate with different aspects of attention and should not be collapsed into one "engagement" score.
- **Researchers.** Pre-specify the eye-tracking metric and the level of analysis. A mismatch between the log indicator's scope and the gaze metric's scope can produce a null result that says more about the design than about the construct.
- **Instructors.** If you use process data to judge online reasoning, remember that observation changes behavior; a lab-clean indicator may not transfer to everyday settings.

## Limitations

- Small sample of 26 students from a single laboratory task, with wide uncertainty around the correlations.
- The laboratory setting may reduce ecological validity, especially for behavior that depends on whether students choose to open a source at all.
- Several log indicators and eye-tracking metrics may not align at the same level of analysis, which limits what a null association means.
- Measurement error attenuates correlations, and reliability could not be estimated robustly with this sample size.
- The study validates interpretations of indicators, not the indicators' predictive value for learning outcomes.

## Citation

Illmann, J., Dinc, Y., Hahnel, C., Kuhn, J., Küchemann, S., Ruf, V., Weber, M., & Goldhammer, F. (2026). [*Validating log data indicators of acquiring information in critical online reasoning using eye-tracking data*](https://osf.io/tneyr). PsyArXiv preprint.
