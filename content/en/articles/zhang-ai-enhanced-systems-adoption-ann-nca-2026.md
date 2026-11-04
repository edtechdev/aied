---
title: "Influence Is Not Necessity: System Features and Student Intention to Use AI-Enhanced Learning Systems"
created: "2026-11-04T15:00:00-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/zhang-ai-enhanced-systems-adoption-ann-nca-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed, undergraduate]
audience: [instructors, administrators, educational technology developers, researchers]
technology: [technology-acceptance-model, personalized-learning]
pedagogy: [student-ai-interaction]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Zhang, Xin and Qing (2026) surveyed 301 Chinese university students who had used an AI-enhanced learning system in the previous 12 months, then ran three analyses on the same data: [[quantitative-research|PLS-SEM]] for average linear paths, a [[machine-learning|neural network]] for predictor importance, and necessary condition analysis for floors. Ease of use was the strongest predictor of intention in both the path model (β = 0.340) and the network (100% normalized importance), yet it was not a necessary condition (d = 0, p = 0.592). Usefulness was necessary (d = 0.027, p = 0.011) but only weakly. Underneath both results sits a feature-level pattern: [[personalized-learning|personalization]], intelligence, content completeness and interactivity each moved exactly one of the two [[technology-acceptance-model|TAM]] beliefs, responsiveness moved both, and anthropomorphism moved neither.

## Key Findings

1. **One sample, three analyses.** Questionnaires went out between November and December 2025 to students at Chinese universities; 19 incomplete responses were dropped, leaving 301 valid cases against a G*Power minimum of 160. The sample was 52.5% female, with 33.6% aged 18–24 and 35.5% aged 25–34, and every item used a 7-point Likert scale.
2. **Ease of use outweighed usefulness in the path model.** Perceived ease of use → behavioral intention was β = 0.340 (p = 0.000); perceived usefulness → intention was β = 0.265 (p = 0.000). The model explained R² = 0.244 of intention (Q² = 0.196) with SRMR = 0.033.
3. **The functional features split across the two beliefs.** Personalization raised usefulness (β = 0.197, p = 0.001) but not ease of use (β = 0.090, p = 0.091). Intelligence raised ease of use (β = 0.192, p = 0.000) but not usefulness (β = −0.037, p = 0.464). Content completeness did the same (β = 0.188, p = 0.002; β = 0.080, p = 0.164).
4. **So did the experiential features, with one exception.** Interactivity raised usefulness (β = 0.156, p = 0.009) and not ease of use (β = 0.062, p = 0.296). Responsiveness raised both (β = 0.155, p = 0.015; β = 0.155, p = 0.002). Anthropomorphism raised neither (β = 0.047, p = 0.362; β = 0.093, p = 0.083). Eight of the fourteen sub-hypotheses were supported.
5. **The network reproduced the ranking.** Ten-fold cross-validation gave mean RMSE of 0.612 and 0.606 for the usefulness model, 0.606 and 0.629 for ease of use, and 0.620 and 0.628 for intention. Normalized importance put ease of use at 100% against 84.70% for usefulness; personalization led the usefulness model at 100%, content completeness led the ease-of-use model at 100%.
6. **One necessary condition survived.** Usefulness was the only condition with a significant necessity effect, d = 0.027, p = 0.011. Ease of use recorded d = 0 and p = 0.592, responsiveness d = 0.01, p = 0.145. Every effect size in the table fell inside the 0–0.1 band the authors class as small.
7. **The bottleneck is staged.** At 30% of the intention scale only responsiveness was required, at 0.3%, and usefulness first appeared at 60% with 1.3%. At the 100% level all six features and both beliefs became conditions: usefulness 12.2%, ease of use 11.3%, content completeness 11.2%, personalization 11.1%, anthropomorphism 10, intelligence 5.2%, responsiveness 2.6%, interactivity 2.2%.
8. **Measurement was conventional and clean.** Loadings exceeded 0.7, Cronbach's α ran from 0.917 to 0.952, every AVE exceeded 0.5, VIFs stayed below 5, and Harman's first factor explained 31.815% of variance.

## Two beliefs, two separate doors

The study's most useful structural result is negative in form: the six stimuli do not collapse into a single "system quality" factor that lifts both acceptance beliefs together. Four of the six moved exactly one belief, and the split does not follow the obvious content-versus-interface line. Personalization and interactivity changed perceived value; intelligence and content completeness changed perceived effort.

The authors' explanation is that each feature removes a different cost. Personalization aligns content with what a student needs, so it reads as value. Intelligence automates choices in the background, and content completeness removes platform-switching, so both read as reduced effort. Interactivity produces feedback and engagement, which reads as value. That mapping is plausible, but its real lesson is that it could not have been predicted from the feature taxonomy alone — each mapping needed both outcomes measured.

The anthropomorphism null is the sharpest instance. Conversational agents and human-like prompts are widely argued to raise social presence and lower the psychological distance of using a system. Here anthropomorphism moved neither belief, and both coefficients were indistinguishable from zero. The authors offer two readings: students may not attend to human-like design at all, or the implementations they used may not have reached a level where it registers. Either reading is a caution for [[student-ai-interaction|student–AI interaction]] design claims that rest on anthropomorphism alone.

What the design cannot tell us is whether these features behave as separate stimuli in students' heads or whether the survey simply asked about them separately. Six correlated ratings of one platform, collected at one time, will always admit a clean per-construct pattern.

## The strongest driver is not the necessary one

The paper separates two questions that TAM studies usually merge. Which belief moves intention most? Ease of use, by a clear margin, and both the linear model and the network agree. Which belief must be present before high intention is reachable at all? Usefulness, and only usefulness, at d = 0.027.

That inversion is the paper's actual claim, and it is worth stating precisely. A strong path coefficient says that a unit of ease of use buys intention on average. A necessity effect says that below some level of usefulness, high intention is essentially absent regardless of everything else. The two can point at different constructs, and here they do.

The sizes matter for how far the claim travels. An effect of 0.027 sits at the bottom of the small band, and the authors say so, describing the practical constraint as limited. Ease of use, the dominant predictor, produced a necessity effect of exactly zero. So the honest summary is not "usefulness is the gate" but "usefulness is a weak gate and ease of use is no gate at all" — a thinner necessity story than the abstract's framing suggests.

The bottleneck table rescues part of it, because necessity turns out to be level-dependent. At moderate intention only responsiveness binds, and at 0.3% it barely binds. At the top of the scale the structure changes: usefulness becomes the largest single requirement at 12.2%, with ease of use just behind. Necessity, in other words, is a statement about a chosen target level, not a property of a variable.

## A staged bottleneck rather than a single lever

Read as a sequence, the bottleneck table describes a plausible user journey. Responsiveness is the only thing standing between a student and a low-to-moderate intention, which matches what a slow or silent system does to a first session. Usefulness joins the constraint once intention passes the midpoint, and at the ceiling every feature contributes something.

That ordering is more actionable than a ranked list of coefficients, because it implies an order of operations. A team that spends its first cycle on content depth while latency is poor is optimizing the wrong stage. A team that has fixed responsiveness and stops there will plateau around the middle of the scale, where usefulness begins to bind.

The [[technology-acceptance-model|TAM]] layer supplies the two beliefs but not the stimuli; the stimulus–organism–response framing supplies the stimuli but treats the organism as a black box. Bolting them together is what lets the paper place six design features upstream of two cognitions, and it is also why the model explains about a quarter of intention rather than more.

## What this means for practice

- **Instructors and course designers.** Fix responsiveness before depth. It was the only condition required at low and moderate intention levels, and it raised both acceptance beliefs in the path model — the one feature in the study that did.
- **Platform teams.** Budget features module by module, not evenly. Personalization is the lever for perceived value; intelligence and content structure are the levers for perceived ease of use, and neither substitutes for the other.
- **Administrators.** Treat latency and feedback speed as an operational commitment rather than a nice-to-have. In this sample it was the earliest binding constraint on whether students formed any intention at all.
- **Researchers.** Report necessity at a named target level, and do not read a necessity effect size as importance. Here the top-ranked predictor had no necessity effect and the necessary condition was the weaker of the two.

## Limitations

- Cross-sectional [[self-report-measures|self-report]] data with intention as the only outcome; no usage logs, no follow-up, and no experimental manipulation, so every path is an association at one time.
- Convenience plus snowball sampling of students at Chinese universities, recruited through faculty and social media, with no sampling frame and no test of representativeness.
- Both the features and the beliefs are perceptions of one unnamed class of systems, so the study cannot separate design quality from students' prior expectations of AI tools.
- Necessity effects are all small and rest on permutation tests with 10,000 resamples; the authors concede that neural network architecture and NCA threshold choices are partly subjective.
- R² = 0.244 for intention leaves most of the variance outside the model, and the six features are treated as independent stimuli when real platforms bundle them.
- Anthropomorphism was measured as a perception of the interface, not manipulated, so the null is a null of association rather than of design effect.

## Citation

Zhang, X., Xin, L., & Qing, Z. (2026). [Symmetrical and asymmetrical insights into student adoption of AI-enhanced digital educational systems](https://doi.org/10.3389/fpsyg.2026.1970854). *Frontiers in Psychology, 17*, 1970854.
