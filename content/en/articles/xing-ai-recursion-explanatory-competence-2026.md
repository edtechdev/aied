---
title: "Can AI Help Students Explain \"Recursion\"? A Platform-Based Intervention for Developing Explanatory Competence"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [evaluation]
research_method: [quasi-experiment]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [instructors]
sources: ['raw/papers/xing-ai-recursion-explanatory-competence-2026.md']
source_url: "https://doi.org/10.3390/educsci16111885"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy]
pedagogy: [metaphors-and-analogies, scaffolding, student-ai-interaction, student-engagement]
technology: [generative-ai, conversational-ai]
assessment: [self-report-measures]
methods: [mixed-methods-research]
institutions: []
ethics: []
---

> **Synthesis:** Xing and colleagues ran a three-week intervention with 41 first-year English for Academic Purposes students in Guangzhou, who built and then revised [[metaphors-and-analogies|metaphors]] for recursion. One group refined on ParallelX.cn, a platform the authors co-developed that returns three parallel suggestions — limit testing, structural fit, audience fit — and hosts peer feedback; the other refined independently from the same three angles. Both groups reported gains on a [[self-report-measures|self-report]] survey, with the platform group slightly ahead, but the difference was not statistically significant. The dialogue logs are the more useful evidence: they show students revising toward technical precision over successive turns. Read the paper as an [[ai-literacy|AI literacy]] design study with perception outcomes, not as a demonstrated learning advantage.

## Key Findings

1. **Both groups believed their metaphors improved.** Students in both conditions reported that working through the three angles deepened their thinking and made their explanations clearer. The intervention did not leave anyone behind.
2. **The AI platform group edged ahead, but not reliably.** The platform group rated its gains slightly higher than the independent group on clarity and on audience adaptation, a difference small enough to be consistent with chance in a sample this size.
3. **The three angles may be doing more work than the AI.** The independent group used the same criteria without any AI support and reported comparable perceived gains, which suggests the structure of the task, not the tool, carried much of the benefit.
4. **Students valued balance over fluency.** The highest-rated feature was how the AI held simplicity and accuracy together, ahead of the three parallel suggestions and ahead of peer feedback; usability scored lowest of the features rated.
5. **Independent reflection felt productive but under-supported.** Students working alone valued it for deep thinking, yet were less confident about spotting what to improve and wanted more help — the pattern the authors read as a real need for [[scaffolding|scaffolding]] rather than learned dependency.
6. **The dialogue logs show revision actually happening.** One student moved from "cleaning a lab drawer" to "a tree growing from a trunk," keeping the image while naming self-reference, the base case and problem decomposition. That is the kind of shift the survey can only ask about.
7. **The artifact evidence is thin.** Only 6 of the 41 students produced usable pre/post metaphor pairs, and the two sets were never scored with a common rubric, so the strongest claim about written improvement rests on a handful of cases.

## The design and the sample

Participants came from four intact sections of "Academic English for University Studies," a first-year course taken before students declare majors. The authors describe a "knowing but not telling" gap as motivation: 52 of 125 students in the inaugural cohort entered with B2 English proficiency on placement tests while oral proficiency lagged at B1, so they could read and write technical content but not explain it aloud. The gap is familiar in [[language-learning|EAP]], where explanatory competence had not been an instructional target. Across three weeks of the spring semester, students wrote an initial metaphor for a non-specialist, refined it, then wrote a new post-test metaphor.

Assignment used a computer-generated sequence, but five students originally in the independent group transferred to the platform group before the intervention began, citing scheduling and interest, so the final comparison was not randomized. Intent-to-treat and per-protocol analyses agreed; the analyzed sample was 26 in the platform group and 15 in the independent group, an imbalance that limits what any between-group comparison can show.

## What the surveys showed

The instrument was a 16-item reflection survey rated 1 to 5, covering the refinement process, self-efficacy in identifying recursive components, and condition-specific experience. Two EAP specialists reviewed it, 8 students pilot-tested it, and subscale reliability was acceptable. Between-group comparisons used Welch's t-test after a test of equal variances indicated they should not be pooled. Neither shared item separated the groups, and the paper is explicit that this comparison rests on two self-report items rather than on scored post-test metaphors, so the second research question remains indirect. A trend toward higher perceived gains is not a measured gain in explanatory competence.

That distinction is the one to carry into a decision. The survey tells you how students experienced the task, which is worth knowing and is not the same as whether their explanations got better. The authors designed a comparison that could have detected a moderate advantage and did not find one; they did not design one that could show the platform produces better writing.

## What the dialogue logs and artifacts added

The qualitative strand carries more than the survey items. The platform group's logs capture [[student-ai-interaction|multi-turn work]]: students submitted a metaphor, received criterion-by-criterion feedback from a [[conversational-ai|conversational]] tutor, and revised. The lab-drawer example is clearest: the AI named the three recursive components and the student's second attempt kept the image while making the structure explicit. Comparing first and final artifacts, the authors found revised metaphors more functionally accurate, better organized, and more attentive to audience; one student said his was "designed to be accessible to beginners."

The limits are as instructive as the finding. Only 6 of the 41 students had usable pairs, the comparison was not pre-specified or matched, and no common rubric was applied, so the artifact analysis illustrates a mechanism rather than estimates its size. The authors also read the independent group's pattern through desirable difficulties: working alone was valued for deep processing, yet the same students wanted support, which suggests the scaffolding addressed a real gap rather than creating dependency.

## What this means for practice

- **Instructors:** Adopt the three refinement angles — limit testing, structural fit, audience fit — as a checklist students can apply with or without AI. The independent group used them and reported comparable perceived gains, so the structure is the part you can trust to travel.
- **Instructors:** Ask for a new metaphor at the end rather than a revision of the first. A fresh text shows whether the structure transferred; a polished draft shows only that one draft got better.
- **Instructors:** Keep peer review inside AI-mediated refinement. Peer feedback was rated close to the AI's own suggestions, and the authors argue it supplies an audience perspective that neither the student nor the AI provides alone.
- **Designers:** Build for criterion-by-criterion feedback on a submitted artifact, not open-ended chat. The logged value came from a specific metaphor being pushed on three named criteria across turns.
- **Administrators:** Do not procure on claims of a measured learning advantage. No significant difference appeared on the perception measures, no post-test writing was scored across conditions, and the platform was built by the authors.

## Limitations

- The groups were unequal, 26 against 15, after five students moved to the platform condition; the authors calculate that detecting the observed difference at conventional power would need roughly a hundred students per group.
- Post-test metaphor quality was never scored across conditions, so the learning claim depends on two self-report items and cannot establish an AI advantage.
- The artifact analysis covered 6 of 41 students, was not pre-specified or matched, and used no common rubric.
- One institution, one course, three weeks; no control for prior knowledge of recursion, AI experience, or language proficiency.
- ParallelX.cn is a specific implementation co-developed by the authors, and no underlying model or version is named, so prompt design cannot be separated from model behavior.

## Citation

Xing, Q., Wang, J., Huang, Y., Chen, Z., & Li, B. (2026). [*Can AI Help Students Explain "Recursion"? A Platform-Based Intervention for Developing Explanatory Competence*](https://doi.org/10.3390/educsci16111885). *Education Sciences, 16*(11), Article 1885.
