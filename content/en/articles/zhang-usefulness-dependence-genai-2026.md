---
title: "From \"usefulness\" to \"dependence\": the dynamic evolution mechanism of generative AI use behaviors"
created: "2026-11-04T09:20:30-05:00"
updated: "2026-11-04T12:00:00-05:00"
type: article
foundations: [cognitive-offloading, ai-education]
technology: [generative-ai, llm]
pedagogy: [motivation, student-ai-interaction]
ethics: [trust]
methods: [quantitative-research]
research_method: [longitudinal study]
discipline: [learning sciences]
level: [higher ed]
audience: [instructors, researchers]
sources: ['raw/papers/zhang-usefulness-dependence-genai-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1914910"
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

> **Synthesis:** Renjing Zhang follows 524 Chinese [[higher-ed|university]] students across four waves and 18 months to watch a familiar [[technology-acceptance-model|acceptance]] story turn less tidy: [[generative-ai|generative AI]] usefulness falls sharply after first contact, recovers to 4.65 on a 7-point scale, and yet predicts *less* later [[cognitive-offloading|reliance]], not more. Her chain runs from perceived usefulness through actual use, technology integration and habit, and its indirect effect on academic dependence is negative (β = –0.232) with a direct effect indistinguishable from zero, so "high usefulness, efficient use, low dependence" fits better than the spiral her title advertises. The two risk perceptions also split: technological concerns fall monotonically from 6.08 to 4.02 while ethical concerns sink and rebound to 5.28, and [[trust]] overshoots its own baseline. For [[ai-education|AI education]] the signal is that continued [[llm|LLM]] use and problematic reliance are empirically distinct: T4 continuance intention, a [[motivation|motivational]] measure, correlated –0.37 with academic dependence, which makes [[student-ai-interaction|student AI interaction]] a design question rather than a volume question.

## Key Findings

1. **Eighteen months, four waves, no attrition.** Of 600 [[self-report-measures|questionnaires]] distributed in June 2024, 524 were valid (87.3%), and all 524 completed every later wave, covering 12 constructs and 35 items.
2. **Usefulness traced a U, not the predicted inverted U.** Means ran 5.24, 4.12, 4.14 and 4.65, F(2.31, 1208.13) = 223.12, partial η2 = 0.30: the baseline was already the peak, with a 12.3% T3-to-T4 rebound.
3. **Trust dipped, then overshot.** It fell 4.38, 3.96, 3.92, then 4.49, F(2.52, 1317.96) = 36.11, partial η2 = 0.07, with T4 above T1 (p = 0.024).
4. **The two risk perceptions diverged.** Technology concerns dropped 6.08 to 4.02 (F = 655.01, partial η2 = 0.56); ethical concerns fell 5.36 to 4.18, then rose to 5.28 (F = 346.27, partial η2 = 0.40).
5. **Integration carried only a quarter of habit formation.** Use at T2 predicted habit at T3, total β = 0.548, direct β = 0.420, indirect β = 0.128 [0.070, 0.192]: 23.39% of the association.
6. **Early trust weakly predicted continuance intention.** T1 trust to T4 intention was β = 0.400, R2 = 0.147, partly through T2 satisfaction (indirect 0.097 [0.060, 0.140], 24.16%).
7. **Usefulness predicted lower dependence.** Its total effect on academic dependence was –0.284, almost all indirect (–0.232 [–0.316, –0.148]; direct –0.052, p = 0.312), and on moral disengagement –0.333 (indirect –0.262).

## Summary

The paper asks what happens to acceptance constructs after adoption, as a tool moves from exploration to embedding. Zhang's answer is a four-wave panel recruited by convenience from three comprehensive universities in eastern, central and western China, measured every six months from June 2024 to December 2025. Twelve constructs were measured at every wave on 7-point scales, from usefulness and [[trust]] through integration, habit, moral disengagement and academic dependence. Analyses are [[quantitative-research|repeated-measures ANOVA]] with Greenhouse-Geisser correction and Bonferroni contrasts, plus PROCESS mediation with 5,000 bootstrap samples. The measurement model fits acceptably, χ2(528) = 1096.52, CFI = 0.92, RMSEA = 0.045, and Harman's single factor accounts for 25.71% of variance, read as tolerable common-method bias.

## Study Design and Method

Two features matter first. Zhang is explicit that her stage vocabulary names the ordering of four occasion means, not a fitted curve; four occasions cannot locate where a stage ends. And the sample is homogeneous in ways that shape the findings: 80.7% female, 96.4% humanities and social sciences, first- and second-year students only, which the paper flags against national figures of roughly 54% women and 45% science and engineering majors. Retention of 100% across three follow-ups is unusual. All measures are self-report, with actual use on two items (α = 0.704) and ethical concerns on three (α = 0.776, AVE = 0.468), both marginal against the rest of the instrument.

## Four trajectories, and why the split matters

The trajectory results are the cleanest contribution. Usefulness never rose: the first occasion was already its peak, which Zhang reads as generative AI compressing the novelty arc into a window shorter than a six-month interval, since 82% of her sample had more than one month of experience at T1. Trust followed the adjustment-then-internalization shape she predicted, but overshot rather than stabilized. The divergence between risk perceptions is the interesting part: concerns about accuracy, privacy and misleading output declined with familiarity, while ethical concerns about bias, opacity and dependency collapsed and then returned almost to baseline. Zhang grounds this in the hierarchy of quality judgments: concrete lower-order attributes are revised quickly, abstract normative ones slowly. Desensitization and re-sensitization are different clocks, not contradictory findings.

## What predicts dependence, and what does not

The dependence results cut against the framing the title sets up, and Zhang says so. Higher initial usefulness predicted lower academic dependence and lower moral disengagement, entirely through the use, integration and habit sequence, direct effects near zero. She reads this as a virtuous cycle: students who find the tool useful use it efficiently rather than leaning on it, and continuance intention correlates –0.37 with academic dependence at T4, so using and being unable to work without are separable. The mediation evidence is thinner than the pathway implies: integration absorbs 23.39% of the use-to-habit association, and the trust model explains R2 = 0.147 with no baseline control, so that coefficient is an association, not an effect on change.

## What this means for practice

- **Instructors.** Design for discerning use rather than reduced use: the students who found the tool most useful were least dependent later. Teach verification and disclosure as part of [[student-ai-interaction|interaction]], since accuracy concerns fade while ethical ones return.
- **Faculty developers.** Treat ethical concern as cyclical, not solved: it fell to 4.18 and returned to 5.28 with no intervention, so one induction session meets students at an arbitrary point.
- **Administrators.** Continued use is a poor proxy for dependence in institutional data; the two were negatively correlated at T4. Survey reliance separately from frequency before writing usage-volume policy.
- **Researchers.** Four waves bought description, not mechanism. Add baseline intention, a third actual-use item, and shorter intervals if the novelty arc is the object.

## Limitations

- A convenience sample of 524 students at three universities, 80.7% female, 96.4% humanities and social sciences and with no senior students, so the trajectories describe this group only.
- Actual use rests on two items with α = 0.704 and ethical concerns on an AVE of 0.468, both marginal, and all twelve constructs are self-reported at every wave.
- The trust-to-intention estimate omits T1 continuance intention as a covariate, so β = 0.400 is a total association across 18 months, best read as an upper bound.

## Citation

Zhang, R. (2026). [*From "usefulness" to "dependence": the dynamic evolution mechanism of generative AI use behaviors*](https://doi.org/10.3389/fpsyg.2026.1914910). Frontiers in Psychology, 17.
