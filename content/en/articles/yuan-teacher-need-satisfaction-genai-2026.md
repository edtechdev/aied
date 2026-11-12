---
title: "Teachers’ basic psychological need satisfactions and their intentions to use generative artificial intelligence: the mediating role of engagement in professional development"
published: "2026-11-02"
created: "2026-11-04T12:00:00-05:00"
updated: "2026-11-12T07:40:00-05:00"
type: article
pedagogy: [motivation, self-determination-theory, student-engagement]
foundations: [teacher-role, teacher-ai-competency, educational-development]
technology: [generative-ai]
methods: [quantitative-research]
research_method: [survey]
discipline: [learning sciences]
level: [k 12]
audience: [faculty developers, instructors, administrators]
sources: ['raw/papers/yuan-teacher-need-satisfaction-genai-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1981507"
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

> **Synthesis:** Yuan, Yang, Zhao and Li test a [[self-determination-theory|self-determination]] account of why teachers adopt [[generative-ai|generative AI]], surveying 146 teachers who had just finished a GenAI learning program and modeling competence, autonomy and relatedness as antecedents of [[motivation|intrinsic motivation]], with engagement in [[educational-development|professional development]] as the bridge to intention. Only competence survives: it predicts intrinsic motivation at β = 0.308, while autonomy (β = 0.177, p = 0.544) and relatedness (β = 0.392, p = 0.256) do not, nulls the authors attribute partly to a 146-person sample and to careers long on experience. Motivation then carries the model, predicting engagement at β = 0.720 and intention at β = 0.444, with a significant indirect path through engagement (0.233 [0.025, 0.591]) and 50.9% of intention variance explained. Read against [[teacher-ai-competency|teacher AI competency]] work, the practical reading is that [[teacher-role|teacher role]] confidence, not permission or collegiality, is the lever this sample responds to, and that [[student-engagement|engagement]] in training is where motivation becomes adoption.

## Key Findings

1. **Competence predicted intrinsic motivation; autonomy and relatedness did not.** GAC to IMU was β = 0.308 (p < 0.05); autonomy was β = 0.177 (p = 0.544), relatedness β = 0.392 (p = 0.256).
2. **Motivation was the strongest predictor of engagement.** IMU to PDE reached β = 0.720 (p < 0.001, CI [0.523, 0.981]), far above any need-satisfaction path in the model.
3. **Engagement partially mediated motivation's effect on intention.** The indirect path was β = 0.233 (p < 0.05, CI [0.025, 0.591]) against a direct β = 0.444 and a total effect of 0.677.
4. **The model explained half the variance in intention.** R2 was 68.5% for intrinsic motivation, 51.9% for professional development engagement and 50.9% for intention to use GenAI.
5. **Fit was acceptable; discriminant validity qualified.** χ2(126) = 236.808, CFI = 0.943, TLI = 0.930, RMSEA = 0.078, SRMR = 0.059, but autonomy and relatedness reached an HTMT of 0.905.
6. **Four of 22 items failed and were dropped.** Loadings of 0.020, 0.174, 0.238 and 0.225 fell below the 0.40 threshold, leaving 18 items across six constructs.
7. **The sample was experienced and male.** Of 146 teachers, 69.9% were men, 63.7% had over 10 years of experience and 52.1% taught primary grades.

## Summary

The study asks a narrow question with a wide literature behind it: which internal conditions make teachers want to use [[generative-ai|GenAI]], and does that wanting travel through professional learning? Yuan and colleagues answer with a cross-sectional survey of teachers enrolled in MindMate, a [[conversational-ai|conversational AI]] module inside the MindGraph platform that the research team itself developed and operates. Participants used the tool to generate instructional activities and revise designs, then completed a questionnaire after the program. The framework is [[self-determination-theory|SDT]]: competence, autonomy and relatedness, each operationalized for GenAI use, feeding [[motivation|intrinsic motivation]], which feeds engagement and intention to use. Twenty-two items measured six constructs on five-point scales, reduced to 18 after factor analysis; paths were estimated in R with 5,000 bootstrap resamples.

## Study Design and Method

This is a single-group [[quantitative-research|quantitative]] survey with no comparison condition, no pre-test and no behavioral outcome, so every path is an association among concurrent self-reports. The analytic choice worth noting is the item purge: four indicators loading 0.020, 0.174, 0.238 and 0.225 were removed after expert review, improving fit from CFI = 0.839, TLI = 0.813, RMSEA = 0.110 and SRMR = 0.106 to CFI = 0.943, TLI = 0.930, RMSEA = 0.078 and SRMR = 0.059. Composite reliability runs 0.807 to 0.957, with a Spearman-Brown coefficient of 0.874 for the two-item engagement measure. The weakness is discriminant validity between autonomy and relatedness, HTMT = 0.905, so the two predictors are near-indistinguishable here even though entered as separate paths.

## What the needs results do and do not show

The headline is the asymmetry. Competence carried the motivational load, fitting the authors' reading that teachers who feel they can operate GenAI, and are recognized for it, find the work intrinsically interesting; they tie this to [[teacher-ai-competency|AI competency]] evidence elsewhere. Autonomy's null is the surprise, since SDT and most [[technology-acceptance-model|technology acceptance]] work predict otherwise; Yuan et al. suggest that where autonomy is plentiful, competence becomes the scarcer resource. Relatedness's null gets a different explanation: professional learning communities around GenAI may not yet exist, and 63.7% of the sample had over ten years of experience, a group other studies find less moved by peer opinion. Both are post hoc, and with 146 cases the nulls read as inconclusive rather than as evidence of absence.

## Why engagement is the interesting mediator

The mediation result is the paper's more practical contribution. Intrinsic motivation predicts engagement strongly (β = 0.720) and engagement predicts intention (β = 0.324), with a direct path of 0.444 still present, so engagement partly carries and partly supplements the motivational effect. Engagement is also the one variable a school can design for: training content, collaborative tasks and expert guidance are levers; competence beliefs are not. The authors recommend training differentiated by technological literacy, plus communities that move beyond atmosphere to joint exploration of [[pedagogy|pedagogical]] value. Causal ordering is untested: all three were measured once, so the reverse reading, that teachers who intend to use GenAI engage more in training, is not excluded.

## What this means for practice

- **Instructors.** Treat your own engagement in training as the operative variable: intention ran through engagement (β = 0.233 indirect), so a passively attended program is unlikely to change [[teacher-role|practice]].
- **Faculty developers.** Build competence first: only perceived competence moved intrinsic motivation, so hands-on mastery of specific GenAI tasks for lesson planning beats [[philosophy-of-ai-in-education|philosophical]] framing or autonomy rhetoric.
- **Administrators.** Do not assume collegial support substitutes for capability: relatedness did not predict motivation here, and 90.4% of these teachers were in public schools where autonomy is already high.
- **Researchers.** Replicate the need paths with samples that can distinguish autonomy from relatedness (HTMT = 0.905), and add a pre-post or longitudinal design before treating engagement as causal.

## Limitations

- The sample is 146 teachers from one MindMate program, 69.9% men and 63.7% with over ten years of experience, so power to detect smaller need effects is limited and the nulls ambiguous.
- Motivation, engagement and intention were [[self-report-measures|self-reported]] at one post-program occasion, with no behavioral measure of GenAI use in teaching.
- Autonomy and relatedness were barely distinguishable (HTMT = 0.905), so their separate null paths rest on a distinction the data do not strongly support.
- Engagement was measured with two items (Spearman-Brown 0.874), which limits construct coverage for the variable carrying the mediation.

## Citation

Yuan, S., Yang, Y., Zhao, G., & Li, S. (2026). [*Teachers’ basic psychological need satisfactions and their intentions to use generative artificial intelligence: the mediating role of engagement in professional development*](https://doi.org/10.3389/fpsyg.2026.1981507). Frontiers in Psychology, 17.
