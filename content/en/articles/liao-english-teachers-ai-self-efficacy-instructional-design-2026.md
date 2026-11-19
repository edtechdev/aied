---
title: "“Can AI change the future of English teaching?”: teachers' AI self-efficacy and instructional design content creation"
created: "2026-11-19T09:20:00-05:00"
updated: "2026-11-19T09:30:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
evidence_context: educational
level: [higher ed]
audience: [instructors, faculty developers, administrators]
foundations: [learning-design, teacher-ai-competency]
pedagogy: [self-efficacy, anxiety-and-stress]
technology: [generative-ai]
methods: [quantitative-research]
institutions: [institutional-ai-infrastructure]
confidence: medium
sources: ['raw/papers/liao-english-teachers-ai-self-efficacy-instructional-design-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1966651"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
---

> **Synthesis:** Liao and Fan (2026) ask whether AI can change the future of English teaching and answer with a survey of 505 Chinese college English teachers, modeled as a moderated mediation in which [[self-efficacy|AI self-efficacy]] works on self-evaluated [[learning-design|instructional design content creation]] partly through [[anxiety-and-stress|AI anxiety]] and partly under the conditioning of perceived school support. Self-efficacy was the stronger positive correlate of content creation, anxiety carried a smaller but significant indirect share, and school support changed both links rather than acting on content directly. Support sharpened the negative self-efficacy-to-anxiety path and flattened the negative anxiety-to-content-creation path, so a well-resourced school made confident teachers calmer and made anxious teachers less impaired. Everything here is cross-sectional self-report from one region, and the outcome is teachers' judgment of their own design performance, not audited quality of the materials. The contribution is the shape of the model — cognition, emotion, and context held together — not a causal story or an intervention effect.

## Key Findings

- **Confident teachers rate their own materials higher.** AI self-efficacy was the strongest correlate of self-reported instructional-design content creation.
- **Anxiety carries part of that link.** Confident teachers were less anxious about AI, and less anxious teachers rated their content creation higher.
- **A supportive school makes confidence count for more.** Where school support was high, confident teachers were far calmer, and anxious teachers lost much less ground.
- **Support worked through those two links, not directly** — its direct path to content creation was not significant.
- **Evaluations rise with age and experience**, with teachers over 50 rating themselves far above those under 30.

## A chain of belief, feeling, and evaluation

The paper sits inside Social Cognitive Theory, which treats behavior as the joint product of cognition, emotion, and environment, and assigns one variable to each slot: AI self-efficacy as the cognitive factor, AI anxiety as the emotional one, perceived school support as the environmental one. The outcome is not a product audit but teachers' judgment of how well [[generative-ai|generative AI]] supports text generation, language rewriting, difficulty adjustment, and resource design in their own preparation — closer to [[teacher-ai-competency|teacher AI competency]] than to [[tpack|TPACK]], since it asks what teachers believe they can do, not what they know. The estimates fit the predicted ordering: efficacy up, anxiety down; anxiety down, self-evaluation up. The model explained 0.464 of the variance in content creation and 0.292 in anxiety, modest in absolute terms.

## What support changes, and what it does not

The moderating pattern is the paper's most interesting result and the easiest to misread. School support had no significant direct path to content creation (β = −0.023). It altered the strength of both links: where support was high, the negative association between self-efficacy and anxiety was steeper, and the negative association between anxiety and content creation was shallower. The authors call this strengthening on one path and buffering on the other; the conditional indirect association carries both, at 0.073 under low support, 0.149 at the mean, and 0.165 under high support, with a significant negative quadratic term of −0.030 that makes the function concave-down. Read plainly, support does not rescue content creation by itself. It changes whose capability beliefs and whose anxiety end up mattering.

## How the model was estimated

Data came from eight undergraduate [[higher-ed|universities]] in the Ningxia Hui Autonomous Region, surveyed between June 11th, 2026 and July 10th, 2026 through the Wenjuanxing platform. Of 800 teachers invited, 656 submitted [[self-report-measures|questionnaires]] (82%), 523 passed a screening question requiring prior use of generative AI for English teaching design, and 505 remained after patterned and inconsistent responses were removed. All 35 items used a 5-point Likert scale. Self-efficacy used four adapted items (α = 0.854); anxiety used the 21-item Wang and Wang scale (α = 0.957); content creation used four items (α = 0.816); school support used six items (α = 0.891). The model ran in Smart PLS 4.0 with 5,000 bootstrap resamples, and the common-method test found no significant change in fit.

## Age, experience, and the shape of the outcome

Content creation scores rose across age bands, from 2.462 for teachers 30 and under to 3.816 for those 51 and above, and across experience bands, from 2.612 at three years or less to 3.576 at ten years or more; gender made no difference. The authors are careful about what that means: between-group differences plus a linear trend do not establish that judgment climbs steadily with a career. Two readings fit equally well. Design work may accumulate with exposure, so older teachers hold more of the material the task draws on; or the measure captures confidence about adopting a new tool, and the least experienced are still forming it. The paper cannot separate these.

## What this means for practice

- **Instructors.** Treat AI confidence as a design skill, not a tool skill: rehearse the moves the construct covers — rewriting a passage, generating worked examples, adjusting difficulty — and test each output against your instructional intent.
- **Faculty developers.** Build [[professional-training|professional training]] around anxiety as well as mechanics. Name job-replacement worry and output uncertainty, then let teachers succeed at real preparation tasks.
- **Administrators.** Build [[institutional-ai-infrastructure|institutional AI support]] — usage guidelines, funded training, a staffed help channel — before asking for AI-integrated design work; support is a boundary condition; its absence lets anxiety convert into weaker design.
- **Department heads.** Weight experienced teachers' judgment when reviewing AI-assisted materials; they rated their own content creation highest, and their craft knowledge is the check novice enthusiasm lacks.

## Limitations

- The design is cross-sectional: all variables were measured at a single time point, so the paths describe associations rather than causal direction.
- Every measure is self-report, and the outcome is teachers' evaluation of their own performance, not an independent rating of materials or student outcomes.
- The sample covers eight universities in one Chinese region, and institution was not recorded, so clustering within universities could not be modeled.
- Common method variance is addressed but not eliminated: the common latent factor test found no significant difference in fit (Δχ² = 2.205, Δdf = 1), yet bias cannot be entirely excluded.
- Scales were adapted: self-efficacy items were rewritten for generative AI, the 21-item anxiety scale was analyzed as one factor, and AI-use experience was screened only as any prior use.

## Citation

Liao, Y., & Fan, L. (2026). [*“Can AI change the future of English teaching?”: teachers' AI self-efficacy and instructional design content creation*](https://doi.org/10.3389/fpsyg.2026.1966651). Frontiers in Psychology, 17, 1966651.
