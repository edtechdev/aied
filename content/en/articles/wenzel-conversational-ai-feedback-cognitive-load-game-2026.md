---
title: "Beyond Access: Engagement with Conversational AI-Assisted Feedback Shapes Cognitive Load in Digital Game-Based Learning"
created: "2026-10-26T13:35:00-04:00"
updated: "2026-10-26T13:35:00-04:00"
type: article
published: "2026-10-11"
page_kind: [evaluation]
research_method: [experiment, longitudinal study]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, educational technology developers, researchers]
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [self-regulated-learning, metacognition, game-based-learning]
technology: [generative-ai, llm, conversational-ai]
assessment: [self-report-measures, formative-assessment]
methods: [quantitative-research, mixed-methods-research]
ethics: []
confidence: high
sources: ['raw/papers/wenzel-conversational-ai-feedback-cognitive-load-game-2026.md']
contributors: [editor]
---

> **Synthesis:** Wenzel, Geiger and Liening (2026) ran a five-week longitudinal field study inside a business simulation game with 234 students and 1,147 weekly observations, separating **access** to conversational AI feedback from **actual engagement** with it. The distinction turned out to be the finding. Merely providing access moved nothing: neither **extraneous** (ITT β = .071, p = .481) nor **germane** cognitive load (β = .019, p = .807). But among students who actually used the chatbot regularly, **germane load was significantly higher** than among students with access who did not use it (β = −.468, p < .001) and than the control group (β = −.253, p = .028) — while **extraneous load was not reduced at all** by either access or engagement (F(1, 219) = 0.499, p = .481; usage-based F(3, 214) = 0.172, p = .915). Conversational AI feedback made learners work harder on the material without making the environment easier. That is a better outcome than the usual marketing claim and a different one.

## Study Design

A between-subjects longitudinal field design, six weekly measurement waves across a five-week **business simulation game**, offered as a voluntary supplementary activity in entrepreneurship courses at a German university.

- **Participants:** 234 students from 244 initial registrations (**116 control, 118 experimental**); mean age 23.1 (SD = 2.41), **40% female**, 53% undergraduate; 47% majoring in industrial engineering and management and 46% in economics.
- **Analytic sample:** **1,147 observations of 234 students**, linear mixed models with random effects for students across waves.
- **Control condition:** the simulation's built-in static feedback — weekly financial, personnel and operational reports plus leaderboard rankings, adjusted weekly but **not adaptive to individual prompts**.
- **Experimental condition:** the same, plus a conversational AI feedback system built in **Botpress** and embedded in Moodle via an HTML webchat widget, powered by **GPT-4o and GPT-4o mini** via API. Each team's ID retrieved team-specific data; **19 structured performance indicators** (ROI, market share, product quality, personnel and financial metrics) fed a predefined prompt that generated weekly summaries and supported follow-up dialogue. Feedback structure followed **personalisation, signalling and segmenting** from multimedia learning research, and the feed-up / task-level / process-level / feed-forward structure from Hattie and Timperley and Shute.
- **Engagement coding:** a usage-based specification split the experimental group into **regular users, irregular users, and non-users with access**, compared against the control group (0–3).
- **Incentives:** bonus points worth roughly **8% of the final grade**, awarded on in-game ROI using **identical criteria across conditions**; the simulation was not formally examined, so non-participants were not disadvantaged.

The ITT-versus-usage distinction is the design's spine. ITT estimates the effect of *assignment*; usage-based estimates *receipt*. Where the two diverge, the intervention's value depends on take-up rather than on the intervention.

## Key Findings

- **Access alone changed nothing — on either load measure.** ITT showed no effect of condition on extraneous load (β = .071, 95% CI [−.127, .269], p = .481; omnibus F(1, 219) = 0.499) or on germane load (β = .019, 95% CI [−.133, .171], p = .807; F(1, 212) = 0.06). A trial that stopped at ITT would have reported a null and been right about assignment and wrong about the intervention.

- **Regular engagement raised germane load against both comparison groups.** The usage-based model was significant overall (**F(3, 209) = 4.37, p = .005**), with regular users ahead of experimental **non-users (β = −.468, 95% CI [−.725, −.212], p < .001)** and of the **control group (β = −.253, 95% CI [−.477, −.029], p = .028)**. Irregular versus regular users did not differ (β = −.219, p = .116) — so what separated students was **sustained** use, not any use.

- **Extraneous load was never reduced.** Neither access nor engagement produced a significant effect on extraneous load in either specification. The hypothesised benefit — that conversational AI feedback would make a complex simulation easier to process — **did not appear**. The paper is explicit that effects on extraneous load "did not uniformly reduce" and varied by intrinsic load and time rather than showing a main effect.

- **Intrinsic load dominated extraneous load, exactly as load theory predicts.** Perceived intrinsic load was a strong positive predictor of extraneous load (**β = .647, p < .001** ITT; **.472, p < .001** usage-based). The task's inherent complexity, not the feedback design, drove how much irrelevant load students experienced.

- **Metacognitive self-regulation predicted germane load.** SRL was a substantial positive predictor of germane load (**β = .363, p < .001** ITT; **.346, p < .001** usage-based) and was not a significant predictor of extraneous load. The capacity to direct one's own processing, not the feedback per se, was what tracked learning-relevant load.

- **Extraneous and germane load moved in opposition.** Extraneous load was significantly **negatively** associated with germane load (β = −.178, p < .001 ITT; −.180, p < .001 usage-based), which is the theoretical relationship load theory specifies and rarely gets to show in field data.

- **Everything declined over the five weeks.** Extraneous load fell across waves (Time 5 vs 1: **β = −.388, p < .001** ITT; −.348, p < .001 usage-based), and germane load fell too (β = −.174, p = .007 ITT; −.200, p = .006 usage-based). Familiarity reduced both the friction and the productive effort — the novelty effect, visible on a load measure rather than an engagement one.

- **Model fit.** Conditional R² of **.718** for extraneous load and **.576–.586** for germane load, against marginal R² of **.338/.342** and **.223/.253** — fixed effects alone accounted for about a third and a quarter of the variance respectively, so a large share of the story is between-student.

## What the Evidence Can and Cannot Support

The authors are careful, and the design has real constraints.

- **Self-report load, not physiological or dual-task measurement.** Perceived extraneous and germane load are the outcomes; the constructs are measured through students' report of their own experience.
- **A pre-proof, and load measurement is contested.** Germane load in particular is the least well-operationalised of the three constructs, and the study's usage-based grouping is observational within the experimental arm — students chose their own engagement level, so regular users may differ systematically from non-users in ways the design does not control. The paper treats the usage-based models as associations rather than as causal effects of engagement.
- **One context, one game, one institution.** German university entrepreneurship students in a business simulation; the transfer to other subject matter and other game genres is untested.
- **Incentives were real.** Bonus points worth ~8% of a grade is a meaningful motivator, and take-up under incentivised voluntary conditions may not reflect take-up without them — which matters a great deal for a paper whose headline is about take-up.

## What this means for practice

- **Do not count licences as adoption.** Access produced no measurable effect on either load measure (extraneous β = .071, p = .481; germane β = .019, p = .807). The benefit lived entirely in students who used the system regularly, so planning for take-up is the intervention, not a footnote to it.
- **Expect learning-relevant effort, not relief.** Regular engagement raised germane load (β = −.468 against non-users, p < .001; −.253 against controls, p = .028) while extraneous load was never reduced. A business case built on "it makes the work easier" is not supported here; one built on "students process more deeply when they engage" is.
- **Design for the students who would not otherwise use it.** Experimental non-users sat far below regular users on germane load, and irregular use did not separate from regular use. What mattered was sustained use, so a single access point with no scaffolding toward it leaves a sizeable group exactly where the control group sits.
- **Plan against the decline.** Both extraneous and germane load fell across the five weeks (extraneous β = −.388, p < .001). A novelty effect visible on a cognitive measure means the durable benefit needs re-sequencing or fading support, not repetition.
- **The instructional scaffolding is the intervention.** The system used personalisation, signalling and segmenting plus a feed-up/task/process/feed-forward structure over 19 concrete indicators. A chatbot without that structure is a different treatment and should not inherit these results.

## Limitations

- **Single institution, one game, incentivised participation.** German university entrepreneurship students in one business simulation, with bonus points worth roughly **8% of the final grade** driving take-up — and take-up is the paper's headline, so the incentive is load-bearing for the result.
- **Load is self-report**, and germane load remains the least settled construct in cognitive load theory.
- **The usage-based models are observational.** Students chose their own engagement level, so regular users may differ from non-users in unmeasured ways; those comparisons are associations, not causal effects of engagement.
- **A five-week horizon** cannot show whether the germane-load advantage persists beyond the novelty period.
- **Much variance sits between students** — conditional R² of .718 and .576–.586 against marginal R² of .338/.342 and .223/.253 — so fixed effects alone account for about a third and a quarter respectively.

## Citation

Wenzel, A., Geiger, J.-M., & Liening, A. (2026). [*Beyond Access: Engagement with Conversational AI-Assisted Feedback Shapes Cognitive Load in Digital Game-Based Learning*](https://doi.org/10.1016/j.chb.2026.109217). *Computers in Human Behavior*, 109217.
