---
title: "Students' intentions to truthfully declare generative AI use in higher education assessment: a cross-sectional SEM study integrating deterrence theory and the theory of planned behavior"
created: "2026-11-08T08:31:00-05:00"
updated: "2026-11-08T08:31:00-05:00"
type: article
page_kind: [framework]
research_method: [structural equation modeling, survey]
level: [higher ed, undergraduate]
audience: [instructors, administrators, assessment designers, policymakers, researchers]
sources: ['raw/papers/liu-genai-truthful-declaration-tpb-deterrence-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1986227"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, framing-ai-use-for-students]
technology: [generative-ai]
assessment: [assessment, assessment-validity, summative-assessment]
methods: [quantitative-research]
institutions: [educational-policy-ai]
ethics: [ai-use-disclosure, ai-misuse-learning-harm]
---

> **Synthesis:** Liu, Shuai, Zhang, Yang, Wang and Zhang (2026) surveyed 466 [[higher-ed|university]] students in China who had already submitted [[ai-use-disclosure|GenAI-use declarations]] and modeled their intention to declare truthfully with [[quantitative-research|structural equation modeling]] combining the theory of planned behavior and deterrence theory. Attitude (β = 0.564), subjective norm (β = 0.219) and perceived behavioral control (β = 0.186) were all positively associated with intention, and the model explained 79.4% of its variance. The paper's contribution is splitting [[academic-integrity|deterrence]] by *target*: certainty that **non-disclosure** would be detected raised attitude (β = 0.643) and perceived control (β = 0.588), whereas certainty that truthful declaration would **expose improper use** lowered both (β = −2.175 and −2.154) — the disclosure form read as a self-report of one's own violation. The authors are candid that the extreme coefficients, and their own reversed hypothesis for improper-use sanction severity, sit beside variance inflation factors of 9.08 and 10.20, so those conditional estimates should be read as unstable rather than as effect sizes.

## Key Findings

1. **Intention followed the standard TPB path, strongly.** Attitude (β = 0.564) dominated subjective norm (β = 0.219) and perceived behavioral control (β = 0.186); the three explained 79.4% of the variance in truthful declaration intention.
2. **Detection certainty for non-disclosure helped.** Students who believed concealment would be caught held more favorable attitudes (β = 0.643) and greater perceived control over declaring (β = 0.588), consistent with classical deterrence.
3. **Sanction severity for non-disclosure backfired.** Heavier perceived penalties for concealment were *negatively* associated with attitude (β = −0.486) and perceived control (β = −0.690) — the opposite of the deterrence prediction.
4. **Improper-use exposure was the stronger deterrent of disclosure.** Certainty that declaring would reveal impermissible GenAI use was negatively associated with both attitude (β = −2.175) and perceived control (β = −2.154), all p < 0.001.
5. **Improper-use sanction severity reversed the authors' hypothesis.** They predicted negative associations and found positive ones (β = 1.916 and 1.892), which they discuss as a possible suppression artifact rather than an endorsement of harsh penalties.
6. **The measurement and structural models fit acceptably.** Measurement: χ² = 445.328, df = 247, RMSEA = 0.042, CFI = 0.981; structural: χ² = 689.792, df = 254, RMSEA = 0.061, CFI = 0.958, SRMR = 0.039.
7. **Multicollinearity is the study's own warning.** For the four deterrence constructs predicting attitude and control, VIFs were 1.55 (detection), 2.96 (non-disclosure severity), 9.08 (improper-use certainty) and 10.20 (improper-use severity).

## A disclosure form is not a neutral instrument

The design insight is that a declaration requirement asks students to do two different things at once: report honestly, and, if the honest report exceeds what was permitted, incriminate themselves. Most [[educational-policy-ai|institutional policy]] assumes these align — the student who has nothing to hide declares freely, and the student who hides is deterred by detection. This model says the second half fails exactly where it matters. When students believe that truthfully declaring will expose improper use, the form stops functioning as a transparency mechanism and starts functioning as a risk. The negative coefficient on improper-use identification certainty is the largest in the model, and it operates through both attitude and perceived control, which means it is not merely a matter of students disliking the rule: they also feel less able to complete the declaration accurately when the consequences of accuracy are high.

This reframes the [[framing-ai-use-for-students|framing]] problem in policy terms. The authors' recommendation is to separate two design goals that are usually merged: credible consequences for concealment, and clear, consistent, procedurally fair handling of disclosure. The first keeps non-disclosure from being costless; the second keeps truthfulness from being dangerous. They argue that declaration standards should be explicit about what counts as reportable use, that instructors should apply the same standard across courses, that sanctions should be proportionate, and that appeal or review procedures should exist. Read as a package, the claim is that a transparent process is what makes an honest declaration rational — not the severity of the penalty attached to it.

## What the null and reversed paths imply

Three of the study's paths contradict its own deterrence hypotheses, and the authors do not paper over them. Sanction severity for non-disclosure came out negative for both attitude and control, which means students who expected harsher penalties for concealment reported *less* favorable views of declaring and less confidence in doing it well. The authors' interpretation is that severity may signal a punitive environment rather than a fair process, and that students who perceive a punitive environment may also doubt their ability to comply with its reporting requirements. The positive coefficient on improper-use sanction severity is harder to explain, and they treat it as an estimator artifact: the improper-use constructs correlate at 0.736 in the measurement model and 0.878 in the structural model, and their VIFs sit near or above the conventional threshold of 10. When two predictors share that much variance, individual path coefficients can flip sign while the block as a whole still predicts the outcome.

That caveat matters for how the page should be used. The robust finding — the one supported by the measurement model, the indirect-path bootstraps and ordinary theory — is that attitude is the primary proximal predictor and that detection certainty for concealment feeds it. The directional claims about sanction severity, especially the positive coefficient, are conditional estimates inside a collinear block and should not be quoted as evidence that heavier penalties for improper use encourage honest declaration. The authors say as much themselves, describing the conditional estimates as requiring cautious interpretation.

## What this means for practice

- **Instructors.** State the declaration threshold explicitly and apply it identically across assignments; ambiguity about what counts as reportable use is what makes a declaration feel risky rather than routine.
- **Administrators.** Treat the declaration form and the misconduct process as one system: if truthful disclosure reliably triggers investigation, students will rationally decline to disclose, and the transparency data the institution collects will describe the careful students rather than the actual use.
- **Assessment designers.** Separate "what did you use" from "was it permitted" in the workflow so that a declaration cannot automatically become an accusation; the paper's model implies those two questions carry opposite motivational weight.
- **Policymakers.** Invest in detection credibility for concealment rather than in escalation of penalties — the severity paths were negative or unstable, while the detection-certainty path was consistently positive.

## Limitations

- Cross-sectional design: no temporal ordering, so every path is an association rather than a causal effect.
- The outcome is intention to declare, not observed declaration behavior or declaration accuracy; the gap between the two is exactly where real consequences bite.
- Data come from one national system — 466 students across 31 provincial regions in China — with institutional rules and sanction regimes that differ from other countries.
- Prior declaration experience was [[self-report-measures|self-reported]] and not checked against institutional records, and improper-use identification certainty and improper-use sanction severity were strongly collinear (r = 0.736 in the measurement model, 0.878 in the structural model; VIFs 9.08 and 10.20), which destabilizes their individual coefficients.
- Recruitment ran through the Credamo panel with compensation of RMB 2.50 per accepted response, and 26 submissions completed in under three minutes were excluded, leaving a volunteer panel rather than a probability sample.
- Mardia's test indicated multivariate non-normality, so maximum-likelihood inference was interpreted cautiously.

## Citation

Liu, D., Shuai, Q., Zhang, Y., Yang, Y., Wang, R., & Zhang, L. (2026). [Students' intentions to truthfully declare generative AI use in higher education assessment: a cross-sectional SEM study integrating deterrence theory and the theory of planned behavior](https://doi.org/10.3389/fpsyg.2026.1986227). *Frontiers in Psychology, 17*, 1986227.
