---
title: "Can AI Help Students Explain \"Recursion\"? A Platform-Based Intervention for Developing Explanatory Competence"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-09T09:05:00-05:00"
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
verified: [citation, numbers, links]
foundations: [ai-literacy]
pedagogy: [metaphors-and-analogies, scaffolding, student-ai-interaction, student-engagement]
technology: [generative-ai, conversational-ai]
assessment: [self-report-measures]
methods: [mixed-methods-research]
institutions: []
ethics: []
---

> **Synthesis:** Can an AI dialogue help first-year undergraduates explain an abstract computing concept to a non-specialist? Xing and colleagues ran a three-week intervention with 41 first-year English for Academic Purposes (EAP) students at a cross-disciplinary university in Guangzhou, who built and then revised [[metaphors-and-analogies|metaphors]] for recursion. Group A (n = 26) refined its metaphors on ParallelX.cn, a platform the authors co-developed that returns three parallel suggestions (limit testing, structural fit, audience fit) and hosts peer feedback; Group B (n = 15) refined independently from the same three angles. Both groups reported positive gains on a 16-item, 5-point [[self-report-measures|self-report]] survey, and Group A rated slightly higher on perceived clarity, accuracy, and audience adaptation. The between-group difference did not reach significance (Q5: Welch's t = 0.84, p = 0.41; Q6: t = 0.87, p = 0.39; Cohen's d ≈ 0.27), and the analyzed groups were 26 and 15 after five students moved from B to A. The qualitative log analysis is the more informative part: it documents iterative revision toward technical precision. Read the paper as an [[ai-literacy|AI literacy]] design study with perception outcomes, not as evidence of a measured learning advantage.

## Key Findings

1. **Both conditions reported positive perceived gains.** Across 41 students, shared items averaged 4.07 (SD = 0.81) for deeper thinking through the three angles and 4.03 (SD = 0.90) for clearer metaphors after Week 8.
2. **Group A edged Group B without reaching significance.** Group A reported 4.15 (SD = 0.82) versus 3.93 (SD = 0.77) on Q5, and 4.12 (SD = 0.93) versus 3.87 (SD = 0.83) on Q6; Cohen's d ≈ 0.27.
3. **The AI's simplicity-accuracy balance drew the top rating,** at 4.12 (SD = 0.85), then three parallel responses at 4.08 (SD = 0.73) and peer feedback at 4.04 (SD = 0.71); usability was lowest at 3.73 (SD = 0.86).
4. **Group B valued independent reflection but wanted more help.** Independent work promoted deep thinking (M = 4.13, SD = 0.72), yet confidence in spotting improvements was lower (M = 3.80, SD = 0.91) and desire for support high (M = 4.13, SD = 0.81).
5. **Dialogue logs showed iterative revision toward precision.** One student moved from "cleaning a lab drawer" to "a tree growing from a trunk," keeping the analogy while naming self-reference, base case, and problem decomposition.
6. **The artifact comparison rested on 6 of 41 students.** Revised metaphors explained how recursive elements function and addressed accessibility, but the two weeks were not scored with a common rubric.

## The design and the sample

Participants came from four intact sections of "Academic English for University Studies" (UCUG 1052A), a 3-credit first-year course taken before students declare majors. The authors describe a "knowing but not telling" gap as motivation: 52 of 125 students in the inaugural cohort entered with B2 English proficiency on placement tests while oral proficiency lagged at B1, so they could read and write technical content but not explain it aloud. The gap is familiar in [[language-learning|EAP]], where explanatory competence had not been an instructional target. Across Weeks 7 to 9 of the 2025-2026 spring semester, students wrote an initial metaphor for a non-specialist, refined it in Week 8, then wrote a new post-test metaphor in Week 9. Assignment used a computer-generated sequence, but five students originally in Group B transferred to Group A before the intervention began, citing scheduling and interest, so the final comparison was not randomized. Intent-to-treat and per-protocol analyses agreed; the analyzed sample was 26 and 15.

## What the surveys showed

The instrument was a 16-item reflection survey rated 1 to 5, covering the refinement process, self-efficacy in identifying recursive components, and condition-specific experience. Two EAP specialists reviewed it, 8 students pilot-tested it, and subscale reliability was acceptable (Clarity/Accuracy α = 0.82, AI Feature Usefulness α = 0.84, Independent Reflection Value α = 0.79). Between-group comparisons used Welch's t-test after Levene's test indicated unequal variances (F > 6.5, p < 0.05). Neither shared item separated the groups: Q5 gave Welch's t(32.1) = 0.84, p = 0.41, and Q6 gave t(33.8) = 0.87, p = 0.39. The paper is explicit that this comparison rests on two self-report items rather than scored post-test metaphors, so RQ2 remains indirect. A trend toward higher perceived gains is not a measured gain in explanatory competence.

## What the dialogue logs and artifacts added

The qualitative strand carries more than the survey items. Group A's logs capture [[student-ai-interaction|multi-turn work]]: students submitted a metaphor, received criterion-by-criterion feedback from a [[conversational-ai|conversational]] tutor, and revised. The lab-drawer example is clearest: the AI named the three recursive components and the student's second attempt kept the image while making the structure explicit. Comparing Week 7 and Week 9 artifacts, the authors found revised metaphors more functionally accurate, better organized, and more attentive to audience; one student said his was "designed to be accessible to beginners." Only 6 of the 41 students had usable pairs, and the authors call the comparison preliminary. They read Group B's pattern through desirable difficulties: independent refinement was valued for deep processing, yet the same students wanted support, suggesting [[scaffolding]] addressed a real gap rather than creating dependency.

## What this means for practice

- **Instructors.** Adopt the three refinement angles (limit testing, structural fit, audience fit) as a checklist. Group B used them without AI and reported comparable perceived gains, so the structure may do much of the work.
- **Instructors.** Keep peer review inside AI-mediated refinement. Peer feedback averaged 4.04, and the authors argue it supplies an audience perspective neither student nor AI provides alone.
- **Instructors.** Ask for a new post-test metaphor rather than a revision. A fresh text shows whether the structure transferred or one draft was polished.
- **Administrators.** Do not procure on claims of a measured learning advantage. No significant difference appeared, and the platform was built by the authors.

## Limitations

- The groups were unequal (26 versus 15) after five students moved from B to A; detecting d ≈ 0.27 at 80% power would need roughly n = 100 per group.
- Post-test metaphor quality was never scored across conditions, so RQ2 depends on two self-report items and cannot establish an AI advantage.
- The artifact analysis covered 6 of 41 students, was not pre-specified or matched, and used no common rubric.
- One institution, one course, three weeks; no control for prior knowledge of recursion, AI experience, or language proficiency.
- ParallelX.cn is a specific implementation co-developed by the authors, and no underlying model or version is named, so prompt design cannot be separated from model behavior.

## Citation

Xing, Q., Wang, J., Huang, Y., Chen, Z., & Li, B. (2026). [*Can AI Help Students Explain "Recursion"? A Platform-Based Intervention for Developing Explanatory Competence*](https://doi.org/10.3390/educsci16111885). *Education Sciences, 16*(11), Article 1885.
