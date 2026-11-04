---
title: "Information ethics education and artificial intelligence ethical judgment among university students"
created: "2026-11-04T12:00:00-05:00"
updated: "2026-11-04T12:00:00-05:00"
type: article
ethics: [ethics]
foundations: [ai-literacy, framing-ai-use-for-students, academic-integrity]
methods: [rct]
research_method: [experiment]
discipline: [learning sciences]
level: [higher ed]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/qi-information-ethics-ai-judgment-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2022209"
confidence: high
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Yan Qi treats [[ethics|AI ethics]] as a curriculum object rather than a policy statement, using a [[rct|cluster-randomized trial]] in which sixteen intact classes at three universities in Zhengzhou, China took a four-week information ethics module or unchanged coursework, with [[academic-integrity|academic integrity]] supplying two of six assessed scenarios. Because judgment was scored from open responses by two raters blind to arm and wave, the outcome is performance-based rather than a [[self-report-measures|self-report]] attitude scale, and the module lifted the composite by 0.35 scale points, between-arm d = 0.75, with 59.9% of that gain still visible four weeks later. The design also asks who benefits: the effect scaled with daily [[generative-ai|generative AI]] use (interaction b = 0.206) and was largest among the heaviest users, supporting [[framing-ai-use-for-students|framing AI use for students]] as a decision skill rehearsed on real cases and treating [[ai-literacy|AI literacy]] as incomplete without it. The limits are plain: sixteen clusters, a four-week horizon, one city, a study-built measure.

## Key Findings

1. **The module moved judgment; coursework alone did not.** The intervention arm rose 2.97 to 3.32 on the 1–5 composite while control moved 2.94 to 2.93: a posttest difference of 0.38 points (d = 0.75).
2. **The pre-specified interaction held.** The multilevel model gave Wald χ2(2) = 60.94, p < 0.001; the mixed ANOVA put the arm by wave interaction at partial η2 = 0.113, medium-to-large by conventional benchmarks.
3. **Retention was partial, not durable.** The delayed gain was 59.9% of the immediate gain within arm and 63.4% control-adjusted, with bootstrap intervals of [42.1%, 69.8%] and [39.1%, 80.1%] that reach below 50%.
4. **Frequent users gained most.** The arm by use interaction was b = 0.206 (cluster-robust p = 0.040); the gain ran 0.23 scale points at one SD below mean use and 0.48 at one SD above.
5. **The advantage held for 90.0% of students.** The Johnson-Neyman boundary of 2.30 on the 1–5 use scale sits inside the observed range of 1.33 to 4.80, with 216 of 240 students above it.
6. **Behavioral intention moved most and faded most.** Its interaction reached partial η2 = 0.091 against 0.036 for ethical sensitivity, yet the raw delayed intention difference was not significant (p = 0.096).
7. **Every module class improved.** Class-level change ran 0.07 to 0.54 points across eight intervention classes against −0.16 to 0.16 in control classes; the exact within-pair randomization test gave p = 0.008.

## Summary

Qi starts from a plain gap: ethics education research usually measures self-reported awareness, and designs are mostly cross-sectional, so neither effect size nor durability is established. Her alternative is a four-week module of one 90-minute session per week embedded in an existing course unit, taught by the regular instructors: guideline principles and applicable national rules, then structured dilemma discussion in small groups on authentic academic scenarios, then authorship, attribution and disclosure, then privacy, closing with a whole-class debate. Control classes kept regular content for the same four weeks, and the module replaced an elective taught in neither arm, so contact time was identical.

## Study Design and Method

Sixteen intact classes from three Zhengzhou universities were pair-matched within university on course type and year of study, then randomized by one binary draw per pair, with allocation concealed until after baseline. Of 264 invited [[higher-ed|university]] students, 252 completed the pretest and 240 (120 per arm) had both posttests. Judgment came from a study-built [[assessment|dilemma test]] covering six scenarios and three dimensions, ethical sensitivity, [[evaluative-judgment|evaluative judgment]] and behavioral intention, scored 1–5 by two trained raters, with composite alpha of 0.836, 0.871 and 0.879 across waves. The primary analysis was a multilevel model with random intercepts for students and classes; because only sixteen clusters were randomized, principal contrasts were re-estimated with cluster-robust standard errors at t(15), a wild cluster bootstrap, an exact within-pair randomization test over 256 allocations, and an intention-to-treat model.

## What the module changed, and for whom

Against control, the intervention gained 0.354 scale points from pretest to posttest (cluster-robust SE = 0.065; bootstrap 95% CI [0.140, 0.566]) and stayed 0.225 higher at the delayed posttest (SE = 0.061; CI [0.062, 0.386]). Qi notes the size is modest: about one-third of a rubric level across the 18 scored responses. The moderation matters more for teaching. Use was measured before allocation, so the gradient identifies who arrived ready to benefit, not evidence that more use would improve the module, and added variance explained was only ΔR2 = 0.023. The mechanism offered is exposure: frequent users meet dilemmas more often, so instruction lands where decisions occur.

## Retention, and what four weeks cannot show

The retention ratios are the paper's weakest positive claim and it says so, reporting partial retention because both intervals reach below 50%. The same six scenarios were administered at all three waves with no feedback, so improvement combines better judgment with familiarity with the dilemmas, which caps claims about generalized ethical competence. Two design facts discipline the reading. Control was unchanged coursework, equated for contact time but not attention-matched, so the contrast estimates the whole package against usual teaching, not dilemma discussion alone. And four weeks is not a semester: whether judgment holds is untested, and the dimension that faded most, behavioral intention, is closest to what students do under deadline pressure.

## What this means for practice

- **Instructors.** Four 90-minute sessions on guidelines, dilemma discussion, disclosure and privacy fit an existing course without added contact time. Assess scenarios distinct from those you discuss; otherwise you measure familiarity, not judgment.
- **Faculty developers.** Regular course instructors delivered it after a briefing and a session-by-session guide; all 32 sessions ran as scheduled. Replicate both before assuming it travels.
- **Administrators.** The largest gains landed on the heaviest users, so an open module is not wasted on them; schedule it where those students already are, not as an optional add-on.
- **Researchers.** Pair-matched class randomization with a delayed performance posttest is feasible at modest scale, but budget for blind double rating and re-analysis.

## Limitations

- Only sixteen classes in one Chinese city were randomized, so bootstrap intervals are wide and the effect size is not transportable without replication.
- The dilemma test was built for this study; subscale reliabilities ran 0.622 to 0.756, and validation against an established instrument such as the Defining Issues Test remains undone.
- Judgment was inferred from written responses to hypothetical scenarios, not observed behavior, and the ten students who withdrew cannot be proven inconsequential despite near-identical intention-to-treat estimates.
- Use was self-reported on three frequency items, the study was not prospectively registered, and all three sites sat in one policy context.

## Citation

Qi, Y. (2026). [*Information ethics education and artificial intelligence ethical judgment among university students*](https://doi.org/10.3389/fpsyg.2026.2022209). Frontiers in Psychology, 17.
