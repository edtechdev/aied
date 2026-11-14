---
title: "AI for Proactive Mental Health: A Multi-Institutional, Longitudinal, Randomized Controlled Trial"
created: "2026-11-11T07:43:43-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Over six weeks in Fall 2024, Cachia and colleagues randomized 486 undergraduates at three U.S. institutions to Flourish, a [[generative-ai|generative AI]] well-being app, or to care as usual, and surveyed them four times. The app walks a student from an emotion check-in through a multi-turn conversation with an AI coach, a brief evidence-based activity, and a mood re-rating, then returns daily and weekly patterns to the next session. Students who received the app held steady on positive affect, mindfulness and flourishing while the comparison group drifted down, and their loneliness eased as belonging rose. Depression, anxiety, stress and negative affect did not improve. The authors read the pattern as modest prevention in a general student population, not treatment.

## Key Findings

1. **The app protected well-being rather than raising it.** Students given Flourish stayed roughly where they started on positive affect, mindfulness and flourishing across six weeks, while students receiving ordinary campus care declined. That divergence is the trial's central result, and it is a claim about maintenance, not about making anyone happier than they already were.
2. **Loneliness eased and belonging improved.** These were the outcomes where the treated group moved in the favorable direction while the comparison group did not, which fits an app built around social connection and daily emotional awareness.
3. **Clinical symptoms did not move.** Depression, [[anxiety-and-stress|anxiety and stress]], negative affect and academic [[self-efficacy|self-efficacy]] were unchanged. The authors expected that: the trial recruited a general student population rather than a distressed one, so there was little room for symptom relief, and the app is strengths-based rather than therapeutic.
4. **Students used it more than the protocol asked.** [[student-engagement|Engagement]] ran ahead of the prescribed dose: the trial asked for at least two sessions a week, and participants recorded 3.49 active days per week and a comparable number of well-being activities beyond the chat and journal features. Sessions averaged 8 minutes 17 seconds, a length that fits between classes.
5. **What was tested is a loop, not a chatbot.** A session moves from an emotion check-in to a multi-turn conversation, a recommended evidence-based activity, an updated mood report, and patterns that feed the next check-in, so [[personalized-learning|personalization]] accumulates across sessions. A generic chat wrapper is a different intervention and this trial says nothing about it.
6. **Attrition was substantial but even.** 320 of the 486 participants completed all four surveys, yet completion did not depend on which arm a student was assigned to, so the pattern of results is not simply an artifact of who stayed.
7. **Nothing else explained who benefited.** Effects did not vary by demographics, baseline [[well-being|mental health]] or recorded engagement once the analysis corrected for multiple comparisons, so the trial gives no basis for targeting one kind of student over another.

## How the app works and how the trial was run

Flourish is organized around what the authors call a proactive behavior loop. A user begins with a brief emotion check-in and then holds a multi-turn conversation with Sunnie, an AI well-being coach that builds emotional awareness and recommends context-sensitive, evidence-based activities — [[reflection|journaling]], gratitude practice, cognitive reappraisal, social connection exercises, mindfulness — before guiding the user through the chosen activity. The user then reports an updated emotional state and receives daily and weekly insights that synthesize mood patterns and prompt reflection. The loop closes when those insights shape the next check-in, so the support is cumulative rather than a single tailored message. [[guardrails|Safety guardrails]] and human monitoring are described in the paper's supplement.

The trial enrolled 486 [[higher-ed|undergraduates]] at Chapman University, the University of Washington and Foothill College during Fall 2024, a mix of a private university, a large public university and a community college. Random assignment happened through Qualtrics at the end of the baseline survey; the treatment arm received app access and the control arm continued to use existing campus resources, a care-as-usual design. Surveys ran at Weeks 0, 2, 4 and 6. Affect and loneliness were measured at every wave, while resilience, mindfulness, flourishing, belonging and institutional closeness were measured only at baseline and Week 6 to limit burden. No one was screened for mental health symptoms: the trial tests whether a general [[learners|student population]] can be moved, not whether a clinical sample can be treated.

Analysis followed intent-to-treat, including all randomized participants regardless of engagement, with linear mixed-effects models and random intercepts for participant and institution. The authors had preregistered additional exclusion criteria but adopted intent-to-treat as the better strategy for a [[rct|randomized trial]]; sensitivity analyses applying the preregistered criteria produced substantively similar results.

## What moved, what did not, and how large

The results are better described as buffering than as improvement, and the size of the buffer is modest. By Week 6 the treated group's advantage on the outcomes that separated at all ran from about a fifth to about a third of a standard deviation. On the two social measures the raw scores were close: loneliness 5.10 against 5.40, belonging 6.11 against 5.68. On positive affect the gap was wider in standardized terms because the control group fell further, 19.38 against 17.21, and mindfulness separated by a similar margin, 14.99 against 13.67. A difference of that size is what a low-intensity, population-level intervention should be expected to produce, and the authors say so.

The shape of the effect matters as much as its size. On positive affect, mindfulness and flourishing the treatment group stayed roughly flat while the control group declined; on loneliness and belonging the treatment group moved in the favorable direction and the control group moved less or not at all. Resilience rose within the treatment group and did not change in the control group, but the Week 6 between-group comparison was not significant. Reporting only the within-group rise would overstate what happened; reporting only the Week 6 snapshot would understate the diverging trajectories.

The null clinical results are consistent with the design rather than in tension with the well-being results. Participants were not selected for distress, so there was little room for symptom reduction, and the app is strengths-based rather than therapeutic. The paper notes that a later randomized trial of Flourish did show clinically meaningful symptom reductions versus care as usual, attributed to added therapeutic ingredients in a later version. That claim is the authors' own report of a separate study and is not tested here; what this trial supports is a preventive, population-level reading, not a claim that the app substitutes for treatment.

Two features matter for interpretation. First, the significant terms are Condition × Time interactions, which describe diverging trajectories; several Week 6 point-in-time comparisons are only marginal, so a reader who wants a single end-of-trial number will find weaker evidence than the trajectory analysis suggests. Second, the control condition was care as usual, not an active control, so the design cannot separate the app's specific ingredients from the nonspecific effects of using an app, being asked about one's mood, or expecting benefit. The authors argue that [[qualitative-research|qualitative]] responses showed substantive engagement with specific features, which reduces but does not remove that concern.

## What this means for practice

- **Administrators:** A low-intensity, [[self-directed-learning|self-directed]] app can be offered to a whole student population without screening, and the benefit to expect is maintenance and social connection rather than symptom relief. It belongs upstream in a stepped-care model, alongside counseling rather than in place of it.
- **Instructors:** Nothing here shows a well-being app raises academic outcomes; academic self-efficacy was unchanged. If you mention the app to students, frame it as personal growth rather than treatment, which is how the tested product presents itself.
- **Designers:** The active ingredients named here are conversational: affect labeling, an activity matched to the student's context, and a reflective loop that returns patterns to the user. Building a [[conversational-ai|chatbot]] wrapper without that loop does not reproduce what was tested.
- **Researchers:** Report buffering and improvement separately. A flat treatment arm against a declining control arm is a real effect, but it is not the same claim as a gain, and Week 6 cross-sectional differences can be marginal even when the interaction is significant.
- **Institutions:** Six weeks is the whole evidence window. Nothing here establishes durability past the end of the semester, and the paper says so.

## Limitations

The control condition was care as usual rather than an active control, so nonspecific effects of app use and expectancy cannot be ruled out, and the authors' qualitative material only partly addresses that. Outcomes stop at Week 6, leaving durability unknown. The sample is nonclinical undergraduates at three institutions, predominantly female, which limits generalization to clinical populations, other age groups and more diverse samples. Effects were modest, and the preregistration was completed after data collection began but before the study data were accessed or reviewed. Engagement was transcribed by participants from the app rather than extracted from backend [[learning-analytics|analytics]], which limits precision. Two authors are employees and board members of Flourish Science and a third is an adviser and shareholder; recruitment and data collection were led by site investigators outside the company, but the conflict bears on interpretation. The report is an author accepted manuscript, not the publisher's edited version of record.

## Citation

Cachia, J. Y. A., Zhao, X., Hunter, J., Wu, D., Lin, E., & De Freitas, J. (2025). [*AI for Proactive Mental Health: A Multi-Institutional, Longitudinal, Randomized Controlled Trial*](https://doi.org/10.1056/AIoa2501293). NEJM AI. DOI: 10.1056/AIoa2501293. Author accepted manuscript.
