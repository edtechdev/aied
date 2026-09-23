---
title: "Psychological predictors of continued ChatGPT use among university students: the roles of AI literacy, trust, and academic self-efficacy"
created: "2026-09-23T13:20:00-04:00"
updated: "2026-09-23T13:20:00-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [self-efficacy, anxiety-and-stress, student-ai-interaction]
technology: [generative-ai, technology-acceptance-model, conversational-ai]
methods: [quantitative-research]
ethics: [trust, trust-calibration]
audience: [instructors, researchers]
level: [higher ed]
research_method: [survey, structural equation modeling]
page_kind: [evaluation]
sources: ['raw/papers/hu-psychological-predictors-continued-chatgpt-use-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Hu (2026) tests a moderated serial mediation model on survey data from 450 university students in mainland China who already use ChatGPT, asking not who takes the tool up but who carries it deeper into their studies. Drawing on [[technology-acceptance-model|technology acceptance theory]], trust in automation, and Bandura's [[self-efficacy]] theory, the study positions [[ai-literacy|AI literacy]] as a distal correlate whose association with continued use runs partly through [[trust]] in the tool and then through academic self-efficacy, an ordered chain rather than two parallel mediators. All six direct paths were significant, and the serial indirect path from literacy to trust to self-efficacy to continued use held under Monte Carlo confidence intervals. [[anxiety-and-stress|AI anxiety]] weakened the literacy to trust link, so the whole indirect chain thinned for more anxious students. Because the design is cross-sectional and the sample is restricted to existing users, the ordering is a modeling assumption rather than an established sequence.

## Key Findings

- **AI literacy related directly to continued ChatGPT use** (beta = 0.16, p = 0.002), so knowledge of the tool left its own trace even once trust and self-efficacy entered the model.
- **The serial path from literacy to trust to self-efficacy to continued use was significant** (indirect effect = 0.07, 95% CI [0.04, 0.10]), so the two mediators behaved as ordered links.
- **Trust was the pivot of the chain.** The literacy to trust path was the model's largest association (beta = 0.50), and trust to self-efficacy reached 0.48.
- **AI anxiety weakened the literacy to trust link** (interaction beta = -0.25), with simple slopes falling from 0.76 at one standard deviation below the mean of anxiety to 0.25 above it.
- **The negative index of moderated mediation** (-0.03, 95% CI [-0.05, -0.02]) showed the indirect chain thinned as anxiety rose, not only its first link.
- **Every path held when continued-use intention and current use were modeled separately**, and because the design is cross-sectional the ordering remains a modeling assumption rather than an observed sequence.

## Study Design & Method

Participants were 450 students at universities in mainland China. Because ChatGPT is not officially accessible there, eligibility required prior use through a virtual private network or a third-party relay platform, and recruitment ran as a convenience and snowball sample through student networks. Fifty-six percent identified as women, respondents spanned all undergraduate years plus postgraduate study, and prior use ranged from one to twenty months (M = 7.96, SD = 4.17).

[[ai-literacy|AI literacy]] was measured with 12 items, [[trust]] in the tool with six, academic [[self-efficacy]] with eight (general rather than tool-specific), AI anxiety with eight, and continued use with seven combining four intention items and three current-use items. Confirmatory factor analysis preceded a full latent-variable structural equation model, indirect effects were tested with Monte Carlo confidence intervals over 20,000 draws, and gender, year of study, discipline, and prior use served as controls.

## The Ordered Sequence and Its Evidence

The model tests a capability-to-cognition-to-behavior account: a distal competence, then willingness to rely on output a student cannot fully verify, then confidence that academic work can be done with the resources at hand. All six direct paths were significant, and the model accounted for 40% of the variance in trust, 38% in self-efficacy, and 40% in continued use.

Indirect effects ran through trust (0.16), through self-efficacy (0.06), and along the serial path (0.07), for a total of 0.28, while the direct path stayed significant, making this partial and complementary mediation. A reversed specification placing self-efficacy before trust fit less well but only marginally (CFI 0.984 vs. 0.987), a difference the authors treat as practical equivalence. Their claim is therefore a reframing of parallel-predictor acceptance research: what looks like two independent correlates may be one indirect path observed at two points.

## Anxiety as a Boundary Condition

[[anxiety-and-stress|AI anxiety]] was specified as a moderator of the first link rather than as one more parallel predictor. It related strongly and negatively to trust (beta = -0.22) but only weakly to self-efficacy and continued use (r = -0.06, not significant), so its association with use operated through a particular gateway. The interaction was negative: the same knowledge translated into less trust among more anxious students. The authors stress that this does not mean anxious students use the tool less, and that the high-anxiety slope is attenuated rather than absent, so the pattern reads as a diminished return on literacy.

Two readings remain open and the design cannot separate them. Anxiety may interfere with the appraisal that turns knowledge into reliance, in which case literacy instruction alone would serve anxious students poorly. Alternatively, anxious students may already hold accurate knowledge whose implications they decline to act on, in which case the shallower slope reflects calibration rather than obstruction. Reaching these students through literacy alone should not be assumed to work.

## What this means for practice

- **Instructors.** Treat [[ai-literacy|AI literacy]] as a psychological competence, not a feature tour, because trust carried the largest share of the literacy to use association (beta = 0.50). Teach what [[generative-ai|generative AI]] does well, where it fails, and how to verify output, so that [[trust-calibration|calibrated trust]] is the outcome.
- **Instructors.** Address AI anxiety alongside skills through supervised practice, worked examples, and explicit normalization of uncertainty, since the literacy to trust slope fell from 0.76 to 0.25 across the anxiety range.
- **Designers.** Build transparency into student-facing tools so a system's reasoning and limits are legible, which the authors argue supports calibrated trust and eases the anxiety its absence produces, and frame tools around students' academic goals so small early successes can build [[self-efficacy]].
- **Researchers and administrators.** These implications concern students who already use the tool; the study offers no basis for recommendations about encouraging first-time uptake.

## Limitations
- The design is cross-sectional, and all five constructs were measured by self-report in one questionnaire on one occasion, so temporal precedence is imposed by the model rather than observed, and the better-fitting ordering rules out one rival specification rather than the class of them.
- Eligibility restricted the sample to students who already use ChatGPT, a strongly self-selected group, so the findings describe sustained use among existing users and not the initial decision to adopt.
- Intention and current use were not empirically separable here (latent correlation 0.98), and the general efficacy measure narrows what the trust to efficacy link can show.
- Other candidate correlates, including perceived usefulness, social influence, and institutional policy, were left out of the model.

## Connected Concepts

- [[ai-literacy]]: distal competence that anchors the tested chain
- [[trust]]: willingness to rely under uncertainty, and the model's pivot between knowledge and confidence
- [[trust-calibration]]: the practical target of literacy instruction in the authors' reading
- [[self-efficacy]]: general academic confidence as the second, more proximal mediator
- [[anxiety-and-stress]]: AI anxiety as the boundary condition on the literacy to trust link
- [[technology-acceptance-model]]: the parallel-predictor tradition this study reframes as an ordered sequence

## Connected Articles

- [[ai-literacy-learning-engagement-psych-capital-2026]]: AI literacy to engagement via psychological capital, a parallel mediator account in the same journal and population
- [[trust-fairness-motivation-ai-teaching-assistants-2026]]: three-wave longitudinal study of trust as a leading indicator of fairness perceptions and learning motivation
- [[ai-anxiety-strategic-regulation-writing-2026]]: how students convert AI anxiety into strategic regulation, the affective condition this model isolates at a single link

## Citation

Hu, P. (2026). [*Psychological predictors of continued ChatGPT use among university students: the roles of AI literacy, trust, and academic self-efficacy*](https://doi.org/10.3389/fpsyg.2026.1900190).