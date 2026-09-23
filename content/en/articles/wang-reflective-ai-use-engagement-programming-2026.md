---
title: "Reflective AI use and student engagement in AI-supported programming: technology acceptance, programming self-efficacy, and behavioral trace evidence"
created: "2026-09-23T12:50:00-04:00"
updated: "2026-09-23T13:40:00-04:00"
type: article
foundations: [human-ai-collaboration, critical-thinking]
pedagogy: [student-engagement, self-efficacy, self-regulated-learning, metacognition]
technology: [technology-acceptance-model, generative-ai, learning-analytics]
assessment: [feedback, self-report-measures]
methods: [quantitative-research, mixed-methods-research]
research_method: [secondary analysis, survey, structural equation modeling]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/wang-reflective-ai-use-engagement-programming-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Wang and Zhao (2026) ask whether accepting an AI coding assistant is the same as learning from it, and answer with an evidence-integration framework, not a single experiment. The Reflective AI Acceptance Integration Framework (RAIAF) coordinates three independent public datasets that are never pooled: a survey structural equation model (N = 131) covering [[technology-acceptance-model|technology acceptance]], reflective use, self-efficacy, and [[student-engagement|engagement]]; human coding of 66 Critical Engagement texts from a GitHub Copilot field study; and modeling of Digital Teaching Assistant (DTA) programming logs (N = 1,423; 40 percent window N = 1,122) that carry no AI-use measure. In the survey, acceptance predicted reflective use (β = 0.774) and engagement (β = 0.694), and reflective use predicted self-efficacy (β = 0.519) and engagement (β = 0.273), but no indirect effect was significant. Text and log evidence stayed exploratory and weak. Acceptance and reflective use are separate constructs, and the mechanism linking them to learning is only partially supported.

## Key Findings

- **RAIAF coordinates survey, text, and trace evidence on acceptance, reflective use, self-efficacy, and engagement** without pooling the three datasets.
- **In the N = 131 survey, acceptance predicted reflective use (β = 0.774) and engagement (β = 0.694)**, both significant at p < 0.001.
- **Reflective use predicted self-efficacy (β = 0.519, p < 0.001) and engagement (β = 0.273, p = 0.034)**; self-efficacy did not predict engagement (β = 0.021, p = 0.813).
- **No hypothesized indirect effect was significant**, including the serial reflective-use-to-self-efficacy pathway, so the study reports partial support rather than mediation.
- **Coders agreed on only 38 of 66 Critical Engagement texts (57.6 percent)**, with κ = 0.421 and ordinal α = 0.495; consensus-coded reflective use did not predict productive engagement.
- **Recovery-related DTA log features raised held-out Macro-F1 for solving all 11 tasks from 0.725 to 0.743**, yet repeated and window-sensitivity gains stayed at 0.000 to 0.001.

## Three strands, one framework

RAIAF is an evidence-integration design, not a new machine-learning architecture: the datasets have different participants and contexts, came from other teams, and are never pooled. Only the survey and Copilot text modules address AI-supported programming directly; the DTA module captures behavior without any AI-assistant signal, so it complements the psychological analysis but cannot confirm it. Dataset A is a survey with 131 valid responses measuring acceptance (six items), reflective use (three items), self-efficacy (four items), and engagement (nine items). Dataset B holds 114 Copilot field-study records. Dataset C is a public DTA programming-submission log. All analyses are secondary and de-identified, so no additional ethics-board review was required.

## Acceptance separates from reflective use

The parcel-based latent model fit acceptably (CFI = 0.951, TLI = 0.934, RMSEA = 0.082, SRMR = 0.029), and internal consistency was high (alpha 0.938 to 0.962). The item-level model fit poorly (CFI = 0.889, TLI = 0.874), a limitation the authors keep visible. Acceptance predicted reflective use and engagement, and reflective use predicted self-efficacy and engagement. The direct acceptance-to-self-efficacy path missed significance (β = 0.309, p = 0.057), self-efficacy did not predict engagement, and every hypothesized indirect effect was non-significant under bootstrap percentile intervals. With N = 131 fixed by a public dataset and no a priori power analysis possible, they call it adequate only for exploratory estimation of large paths.

## Text coding and traces were exploratory and small

The Copilot branch coded 66 nonblank Critical Engagement responses on a four-level reflective-use scale; consensus frequencies were 8, 38, 16, and 4 across levels 0 to 3. A ceiling effect crushed variance in acceptance (mean 4.730 of 5; 28.9 percent at the maximum), likely attenuating associations. Acceptance did not predict coded reflective use (b = 0.690, p = 0.118), reflective use did not predict productive engagement (b = 0.149, p = 0.202), and the indirect estimate of 0.101 spanned zero. In DTA, adding recovery features raised held-out Macro-F1 for solving all 11 tasks from 0.725 to 0.743, but the activity-only baseline stayed strongest for the activity-defined engagement label, whose definition overlaps its own predictors. The trace branch, they say, does not validate reflective AI use.

## What this means for practice

- **Instructors.** Treat tool acceptance as a starting condition, not evidence of learning: acceptance and reflective use behaved as separate constructs, so a satisfied class is not a reflective one.
- **Instructional designers.** Build reflection prompts into AI programming tools instead of assuming students will evaluate suggestions spontaneously; the authors call for experimental tests.
- **Researchers.** Read the three strands separately: the survey is strongest, the text module is exploratory, and the log model is a boundary test, not a replication.
- **Researchers.** Treat recovery and persistence log indicators as approximations, not validated self-efficacy measures.

## Limitations

- **The coded text strand sits on a thin and uncertain base.** Coders agreed on only 38 of 66 Critical Engagement texts (κ = 0.421, ordinal α = 0.495), and a large share of the logs were blank or too short to code, so the reflective-use text findings are modest and exploratory.
- **The survey rests on self-report with an acceptance mean near the ceiling.** Acceptance averaged 4.730 of 5, with 28.9 percent of respondents at the maximum, which the authors say likely attenuated associations between [[technology-acceptance-model|technology acceptance]] and reflective use.
- **The data-traced strand measures no AI use at all.** The DTA logs carry no AI-assistant signal, so the trace branch cannot validate the survey's reflective-use claims; the authors present it as complementary behavior evidence, not confirmation.
- **The trace models sat near or below conventional fit thresholds.** The authors report the trace and item-level models as weak and boundary-setting, so [[learning-analytics|learning analytics]] results here should be read as exploratory rather than confirmatory.

## Connected Concepts

- [[technology-acceptance-model]] — acceptance as a precondition, distinct from reflective use
- [[student-engagement]] — the outcome construct across all three strands
- [[self-regulated-learning]] — monitoring and revising AI suggestions
- [[metacognition]] — reflective AI use as metacognitive feedback engagement
- [[critical-thinking]] — evaluating and revising AI-generated suggestions

## Connected Articles

- [[ai-tutor-statistical-programming-adoption-2026]] — Student Adoption of an AI Tutor for Statistical Programming
- [[wang-goal-setting-ai-engagement-2026]] — Explaining Learning Engagement in AI-Assisted Learning
- [[structured-reflection-ai-explanatory-feedback-2026]] — Structured Reflection on AI-Driven Explanatory Feedback

## Citation

Wang, S., & Zhao, J. (2026). [*Reflective AI use and student engagement in AI-supported programming: technology acceptance, programming self-efficacy, and behavioral trace evidence*](https://doi.org/10.3389/fpsyg.2026.1929887).