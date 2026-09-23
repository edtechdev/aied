---
title: "Exploring learner agency in an AI-supported simulation environment for complex systems education"
created: "2026-09-22T09:39:00-04:00"
updated: "2026-09-22T10:24:00-04:00"
type: article
published: "2026-09-21"
foundations: [agency, human-ai-collaboration, learning-design]
pedagogy: [self-regulated-learning, help-seeking, student-engagement, prior-knowledge, student-ai-interaction]
technology: [simulation, pedagogical-agent, conversational-ai, llm, generative-ai]
methods: [quantitative-research, mixed-methods-research]
assessment: [learning-gains]
audience: [researchers, instructors, instructional designers]
level: [higher ed, undergraduate, graduate]
research_method: [experiment, thematic analysis]
discipline: [cs education, learning sciences]
page_kind: [evaluation]
source_url: https://doi.org/10.1080/03075079.2026.2733930
sources: ['raw/papers/learner-agency-ai-simulation-2026.md']
confidence: high
connected_faqs: [does-ai-help-students-learn, designing-ai-into-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
reviewed_by: [editor]
---

> **Synthesis:** Sixty-nine [[higher-ed|university students]] were randomized into a 2 × 2 design crossing access to simulation parameter controls with access to an optional [[conversational-ai|conversational agent]]; fifty-five were analyzed. Every condition improved from pretest to posttest, but after controlling for [[prior-knowledge|prior knowledge]] neither choice made a reliable difference to [[learning-gains|learning gains]] — offering control did not, on its own, change what students learned. What did track gains was the interaction logs: time spent manipulating parameters in the most conceptually complex lesson predicted higher gains, the same behavior in the easier lesson predicted lower ones, and engagement with the optional agent was so uneven (0 to 32 questions per learner) that it bore no relation to outcomes. The study's argument is that in AI-supported environments [[agency|learner agency]] is a question of [[self-regulated-learning|enactment]], not of whether a choice was offered.

### Overview

[[simulation|Simulation-based learning]] lets students manipulate a model and watch consequences unfold, which is why it is a natural setting for studying [[agency|learner agency]]: the offer of control is visible, and so is what learners do with it. That visibility has also produced an awkward literature. A [[meta-analysis-systematic-review|meta-analysis]] of 18 learner-control studies found an overall effect close to zero, and the standard explanation — that access alone does not help — has been hard to test, because most designs compare conditions with different amounts of control without observing whether anyone used it.

AI adds a second, optional resource. A conversational agent that learners may consult at will creates the same question in a sharper form: [[help-seeking|seeking help]] is itself a self-regulatory act, and its value depends on whether a learner can recognize a gap, formulate a question, and judge an answer that may be incomplete or misleading. This study asks what happens when both kinds of choice are available in an environment where the learning task itself becomes progressively harder.

### Key Findings

1. **Access to choice did not change learning outcomes.** All four conditions improved significantly (all ps < .01), and pretest scores did not differ across conditions (p = .179). The 2 × 2 ANCOVA found prior knowledge to be the only reliable predictor of posttest performance, F(1, 50) = 6.33, p = .015, partial η² = .11; neither the main effect of parameter control, F(1, 50) = .04, p = .849, partial η² < .01, nor of the AI agent, F(1, 50) = 2.68, p = .108, partial η² = .05, nor their interaction, F(1, 50) = .01, p = .917, partial η² < .01, reached significance.
2. **How choice was enacted mattered more than whether it existed.** Regression on log data found that time on the parameter sliders in the most complex lesson (bats) positively predicted learning gains, β = .11, p = .007, with the model explaining R² = .406 (adjusted R² = .358) of the variance in gains.
3. **The same behavior in an easier lesson pointed the other way.** Slider time in the intermediate lesson (ducks) showed a significant negative association, β = −.04, p = .047. Counting slider changes reproduced the pattern with less explanatory power (R² = .356): positive in the complex lesson, β = .62, p = .013, negative and marginal in the intermediate one, β = −.35, p = .057.
4. **Sustained, focused manipulation is the mechanism the authors propose.** Because the positive coefficients come from the lesson that demands the most conceptual reasoning, the paper reads them as evidence that parameter control pays off when there is something difficult to reason about — and as noise or displacement when the task is already tractable.
5. **AI agent use was highly skewed and unrelated to learning.** Across the two conditions with access, 30 learners produced 235 inputs, with a per-learner range of 0 to 32, a mean of 6.7 and a median of 3. [[qualitative-research|Qualitative]] coding of every input found the largest single category was content-focused (35.7%), with the rest spread across greeting, meta, peripheral and unrelated uses.
6. **The assessment hit a ceiling, which compressed the differences the design was looking for.** Nineteen of the 55 analyzed participants scored at least 16 of a possible 17 points on the posttest, narrowing the variance available for between-condition comparisons and attenuating the reliability of the posttest measure (McDonald's ω = .71).
7. **The study is underpowered for anything but large effects.** A sensitivity analysis put the smallest detectable single-degree-of-freedom effect at f = .39, and detecting a medium effect would have needed roughly 128 participants.

### How the study was done

The learning environment was an immersive simulation built around animal flocking, with three lessons of increasing conceptual complexity labeled Basic (sheep), Intermediate (ducks) and Complex (bats), plus self-paced exploration areas. Parameter controls for alignment, cohesion, separation, and — in the complex lesson — speed were available in two of the four conditions, with changes reflected in real time. In the other two conditions, an optional [[llm]]-based [[pedagogical-agent|conversational agent]] appeared as a butterfly-like companion that answered questions without interrupting exploration.

The design was a 2 × 2 between-subjects factorial with pretest and posttest, blocked-randomized by two researchers from a master list before the experiment, giving near-equal cells (17, 17, 17, 18). Allocation was concealed until installation instructions were distributed one to two days before each session, and participants knew only which version they had received. Sessions ran about 45 minutes, individually, with consent to record on-screen behavior. The knowledge test used seven closed-ended flocking items drawn from a validated complex-systems assessment framework, scored out of 17 points, with identical items in different orders at pretest and posttest (McDonald's ω = .74 pretest, .71 posttest). Analysis combined a 2 × 2 ANCOVA with regression on four log measures and an inductive qualitative content analysis of chat inputs, double-coded on 50% of the data with complete agreement.

Two reporting gaps are worth noting for readers judging how current the findings are. The paper does not name the model or version behind the butterfly agent. It does disclose that the authors used [[generative-ai|ChatGPT]] 5.2 to improve the manuscript's readability and language, which is a statement about the writing rather than the intervention.

### What the findings do and do not establish

The null effects are the design's most-quoted result and its most fragile. With 14 of 69 participants excluded under pre-specified validity criteria, the analyzed sample detects only large differences, so the correct reading is that choice configuration had no large effect here — not that it never matters. The authors say this themselves, and the ceiling effect on the posttest compounds it: when most participants land within a point of full marks, even a real difference between conditions has little room to show up.

The log results carry a different epistemic status. Interaction behavior was observed, not manipulated, so the negative coefficient on slider time in the intermediate lesson is an association that could equally reflect learners who were struggling, or who lingered where the task was easy, rather than an effect of manipulating parameters too much. The honest summary is that the study demonstrates a method — logging how choice is enacted instead of assuming that offering it is enough — as much as it demonstrates a finding.

What survives both readings is a design principle. An environment can provide parameter control and a conversational agent and still produce learners who use neither well; the support that matters is the one that helps someone decide what is worth manipulating, notice what their change did, and revise their reasoning. Optional AI fits that frame as one available resource, not as a substitute for the regulation learners must supply.

## What this means for practice

- **Do not count access as adoption.** Two conditions had parameter controls installed and one had an AI agent; whether learners used them, and how, varied enough to swamp the experimental contrast. [[learning-analytics|Analytics]] that measure whether a feature is available say nothing about whether it did anything.
- **Look at where the difficult reasoning happens.** The positive parameter results came from the conceptually hardest lesson and the negative ones from the easier lesson, so the same interaction can be productive in one part of a course and displacing in another.
- **Treat an optional AI agent as a resource, not an intervention.** Usage ranged from zero to 32 questions with a median of 3, and the most active users were not the highest gainers, so logging volume is a poor proxy for learning.
- **Support the decisions around the choice.** If students are meant to choose a lesson order, parameters to test, or questions to ask, they need prompts that help them decide and then notice the consequences — the study's own conclusion is that access alone was insufficient.
- **Watch the ceiling in your own assessments.** Nineteen of 55 participants hit within one point of the maximum; an assessment that cannot separate strong learners will not detect an intervention's effect.

## Limitations

- **Powered for large effects only.** With n = 55, the smallest detectable effect was f = .39 and a medium effect would have needed roughly 128 participants, so the null results rule out large effects rather than demonstrating no effect.
- **A ceiling effect on the posttest.** Nineteen participants scored at least 16 of 17 points, compressing variance and lowering the reliability of the outcome measure (ω = .71 at posttest).
- **The log analyses are correlational.** RQ2 and RQ3 were tested within subsets of conditions (n = 27 and n = 30) with interaction behavior observed rather than assigned, so behavioral–outcome associations cannot support causal claims.
- **A single population and setting.** The sample was predominantly [[cs-education|computer science]] students at one German university, and the low-stakes, self-paced session does not resemble graded coursework in other disciplines.

## Connected Concepts
[[agency]], [[self-regulated-learning]], [[help-seeking]], [[simulation]], [[pedagogical-agent]], [[conversational-ai]], [[human-ai-collaboration]], [[prior-knowledge]], [[student-ai-interaction]], [[learning-gains]], [[student-engagement]]

## Connected Articles
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[aied-unfinished-mission-bypass]] — AIED's Unfinished Mission: Centering Agency and Motivation in the Age of Effortless Bypass
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[ai-overreliance-complex-adaptive-system-2026]] — Modeling AI Overreliance as a Complex Adaptive System

## Citation

Su, M., Nair, A., & Nagashima, T. (2026). [Exploring learner agency in an AI-supported simulation environment for complex systems education](https://doi.org/10.1080/03075079.2026.2733930). *Studies in Higher Education*. Advance online publication.