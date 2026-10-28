---
title: "Practice Makes Perfect: Tacit Knowledge, Generative AI, and Returns to Schooling and Experience"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Levy Yeyati, E.", "Judzik, D.", "Barbiero, J. I."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.36008
foundations: [ai-education]
pedagogy: [experiential-learning, professional-training]
technology: [generative-ai, llm]
methods: [quantitative-research]
institutions: [educational-policy-ai]
research_method: [quasi-experiment, secondary analysis]
discipline: [learning sciences]
level: [adult learning, higher ed]
audience: [policymakers, researchers, curriculum designers]
page_kind: [evaluation]
sources: ['raw/papers/levy-yeyati-tacit-knowledge-genai-returns-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Levy Yeyati, Judzik and Barbiero (2026) ask what happens to two familiar prices in the wage structure — the return to a year of schooling and the return to a year of experience — when [[generative-ai|generative AI]] makes codified knowledge cheap at the point of production. Using US Current Population Survey earnings data from 2018 through June 2026 and comparing occupations in the top and bottom quartiles of a pre-ChatGPT exposure index, they find that after the November 2022 release of ChatGPT the schooling gradient in exposed occupations falls by 0.55 log points, about 7 percent of its pre-shock level, while the experience gradient rotates: up 0.26 log points at three years of experience, unchanged at fifteen, down 0.12 at twenty-five. The authors read this as a repricing of human capital, not a productivity claim: machine-supplied codified knowledge substitutes for what schooling proxies, and practice-based judgment becomes relatively scarcer where learning by doing is fastest. This is labor economics, not classroom research — it says nothing about how any course was taught. It does tell educators that the market price of the kind of knowledge examinations reward is moving.

## Key Findings

1. **The return to schooling fell in exposed occupations.** After November 2022 a year of schooling paid 0.55 log points less in top-quartile occupations (s.e. 0.19), against a pre-shock return of 7.5 log points.
2. **The experience profile rotated rather than shifted.** Returns to an extra year rose 0.26 log points at three years and 0.23 at five, were indistinguishable from zero at fifteen, and fell 0.12 at twenty-five.
3. **The crossover sits late in the career.** Under the baseline quadratic the effect changes sign at 18.1 years of potential experience (s.e. 2.1), though flexible specifications keep the rotation without pinning an age.
4. **The break follows the release, not the pandemic.** Pre-release schooling coefficients range from -0.12 to 0.10 (p = 0.90), the fall appears in the first post-release year, and a 2020 placebo yields -0.02.
5. **The result survives censoring and specification changes.** One censoring rule across 2018-2026 gives -0.53 log points; occupation-specific pre-shock gradients give -0.58, +0.26 and -0.11 at the same margins.
6. **Losses concentrate among the credentialed.** A worker with sixteen years of schooling and fifteen years of experience in a treated occupation earns 3.2 log points less than the counterfactual path.
7. **The exposure measure matters for the experience result.** A task-based measure gives a similar schooling decline of 0.42 log points (p = 0.02) but a much weaker early-career rotation.

## Why codified and tacit knowledge are priced separately

The framework splits a worker's expertise into two stocks. Schooling proxies explicit knowledge that can be written down, taught and stored; potential experience proxies knowledge acquired by practice, feedback and contextual judgment. Generative AI expands the supply of the first, pooling it with the worker's own codified knowledge inside a single input and diluting the worker's share of it. That dilution lowers the schooling gradient even under ordinary Cobb-Douglas production, so the schooling prediction does not rest on strong assumptions.

The experience prediction needs one more condition: codified and practice-based knowledge must be complements, so that making the first abundant raises the marginal value of the second. Because learning by doing is fastest [[career-development-and-readiness|early in a career]], the gain should be largest for workers with few years in. A second force runs the other way — part of accumulated experience is tied to routines the new technology displaces — and together the two produce a profile that steepens early and flattens later. The authors are explicit that the reduced-form estimates do not separately identify either mechanism.

## How the test was built

The data are the Current Population Survey Outgoing Rotation Group, 2018 through June 2026, restricted to workers aged 16 to 64 with a valid hourly wage, leaving 655,919 observations. Treatment is assigned by occupation using the AI Occupational Exposure index of Felten, Raj and Seamans, built from O*NET abilities and, importantly, constructed before ChatGPT existed, so it could not have been fitted to post-shock outcomes. The top quartile is treated and the bottom quartile is the control; the middle two are dropped as neither clearly exposed nor clearly unexposed. Software developers, financial managers and lawyers populate the treated group; truck drivers, construction laborers and waiters populate the control.

The estimating equation interacts schooling and a quadratic in potential experience with treatment and post-release indicators, so the parameters are differences in differences in skill prices rather than in wage levels. Event studies trace the timing year by year, a pandemic placebo and a common censoring rule probe alternatives, and a dose-response exercise compares each exposure quintile with the bottom one. Top-coding matters here because it reaches 11.5 percent of observations in high-exposure occupations against 0.7 percent in low-exposure ones.

## What the schooling finding does and does not say

The estimate is a fall in a wage gradient, not evidence that educated workers became less productive. AI can raise an exposed occupation's wage level while compressing the difference associated with an extra year of schooling, and the pooled level effect is allowed for separately. The decline is also almost entirely a treated-group phenomenon — the control group's return sat at 1.7 log points in both periods — so the comparison is between workers with different schooling inside the same occupation, before and after the shock.

For teaching, the honest reading is narrower than it first appears, which is the usual trap in [[interpreting-and-applying-aied-research|importing labor economics into course design]]. Nothing in the design observes classrooms, curricula, [[assessment]] or learning. It cannot show that a degree teaches less, that a lecture is worth less, or that [[experiential-learning|practice-based courses]] produce better outcomes. What it suggests is that the market is paying relatively less for knowledge that can be looked up and relatively more for judgment that comes from doing the work — a hypothesis about [[transfer-of-learning|which learning transfers]] into wages, testable against program-level earnings data, not something this paper tests. The authors also flag that the two exposure indices disagree most in a few occupational groups, education among them.

## What this means for practice

- **Instructors.** Read the finding as a claim about prices, not pedagogy: the wage gradient attached to a year of schooling fell 0.55 log points while early-career experience returns rose 0.26 log points, so a program that certifies recall of codified content is defending the margin the market is repricing.
- **Curriculum designers.** Protect the practice the mechanism values through [[curriculum-design]]: supervised attempts with feedback, judgment under uncertainty, and work that requires integrating components rather than reproducing answers. The early-career gain is largest where learning by doing is fastest, which is precisely the stage a course can structure.
- **Policymakers.** Resist reading a 0.55 log-point fall as a reason to defund schooling. The design prices predetermined stocks over a short window and cannot see the returns to a redesigned program, and the authors describe their estimates as a prior step rather than a forecast.
- **Researchers.** Adopt the two-stock framing when designing studies: a [[human-ai-collaboration|human-AI workflow]] that reports only completion or artifact quality measures the codified margin and misses the tacit one, which is where the wage evidence says the value moved.

## Limitations

- Schooling is measured in years and experience as age minus schooling minus six, so an engineering degree and a literature degree count as the same human capital and years of practice at the affected tasks are not observed — a standard [[limitations-in-aied-research|proxy problem]] inherited with the data.
- The late-career margin is the weaker of the two: the joint pre-trend test at twenty-five years gives p = 0.06, and one coefficient four years before the release is individually significant.
- Selection into employment may change after the shock; if young workers who remain in exposed occupations are positively selected, part of the early-career estimate reflects composition rather than price.
- The window ends in June 2026, roughly three and a half post-release years, and the framework treats schooling and experience as predetermined, so education choices, AI-assisted learning and mentoring responses are outside the estimates, and no claim about [[lifelong-learning|learning across a career]] can be read from them.

## Citation

Levy Yeyati, E., Judzik, D., & Barbiero, J. I. (2026). [*Practice Makes Perfect: Tacit Knowledge, Generative AI, and Returns to Schooling and Experience*](https://arxiv.org/abs/2610.36008). arXiv preprint arXiv:2610.36008.
