---
title: "Students' intentions to truthfully declare generative AI use in higher education assessment: a cross-sectional SEM study integrating deterrence theory and the theory of planned behavior"
created: "2026-11-08T08:10:57-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [framework]
research_method: [structural equation modeling, survey]
evidence_context: educational
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, framing-ai-use-for-students]
technology: [generative-ai]
assessment: [assessment, assessment-validity, summative-assessment]
methods: [quantitative-research]
institutions: [educational-policy-ai]
ethics: [ai-use-disclosure, ai-misuse-learning-harm]
---

> **Synthesis:** Liu and colleagues surveyed 466 [[higher-ed|university]] students in China who had already submitted [[ai-use-disclosure|GenAI-use declarations]], and modeled what would make them declare truthfully. The familiar drivers held: a favorable attitude mattered most, with social pressure and a sense of control adding smaller amounts. The paper's real contribution is splitting [[academic-integrity|deterrence]] by target. Confidence that *not* declaring would be caught made students more willing to declare. Confidence that declaring would expose impermissible use made them much less willing — the form reads as a confession. The lesson is that a declaration requirement succeeds on process credibility rather than penalty severity, and that a form which doubles as an accusation will not produce honest data.

## Key Findings

1. **Attitude drove the intention to declare.** Students who saw truthful declaration as a good thing were the most likely to intend it. Perceived social pressure and a sense of control mattered, but less.
2. **Confidence in catching concealment helped.** Students who believed undeclared use would be detected held more favorable views of declaring and felt more able to do it well.
3. **Harsher penalties for concealment did not help.** Students who expected heavier sanctions for non-disclosure reported less favorable attitudes and less confidence in declaring — the opposite of the deterrence prediction.
4. **Fear that declaring would expose misuse was the strongest force against honesty.** Certainty that a truthful declaration would reveal impermissible use was associated with much less favorable attitudes and much lower perceived control. These were by far the largest associations in the model.
5. **The penalty for improper use ran the other way.** The authors expected severity to discourage declaration and found the reverse, which they treat as a statistical artifact of two near-duplicate predictors rather than a reason to punish harder.
6. **The deterrence measures overlap too much to trust one at a time.** Two of the four constructs were close to redundant in the model, so their separate coefficients are unstable even though the block as a whole predicts the outcome.

## A disclosure form is not a neutral instrument

The design insight is that a declaration requirement asks students to do two different things at once: report honestly, and, if the honest report exceeds what was permitted, incriminate themselves. Most [[educational-policy-ai|institutional policy]] assumes these align — the student who has nothing to hide declares freely, and the student who hides is deterred by detection. This [[quantitative-research|structural equation model]] says the second half fails exactly where it matters. When students believe that truthfully declaring will expose improper use, the form stops functioning as a transparency mechanism and starts functioning as a risk. The association is the largest in the model, and it runs through both attitude and perceived control, which means it is not merely a matter of students disliking the rule: they also feel less able to complete the declaration accurately when the consequences of accuracy are high.

Put in the model's own terms, the model explained 79.4% of the variance in intention, with attitude the dominant predictor (β = 0.564), detection certainty for concealment positive (β = 0.643), and certainty of improper-use exposure strongly negative for both attitude (β = −2.175) and perceived control (β = −2.154). The improper-use exposure path outweighs every other deterrence path in the model, in both directions.

This reframes the [[framing-ai-use-for-students|framing]] problem in policy terms. The authors' recommendation is to separate two design goals that are usually merged: credible consequences for concealment, and clear, consistent, procedurally fair handling of disclosure. The first keeps non-disclosure from being costless; the second keeps truthfulness from being dangerous. They argue that declaration standards should be explicit about what counts as reportable use, that instructors should apply the same standard across courses, that sanctions should be proportionate, and that appeal or review procedures should exist. Read as a package, the claim is that a transparent process is what makes an honest declaration rational — not the severity of the penalty attached to it.

## What the null and reversed paths imply

Three of the study's paths contradict its own deterrence hypotheses, and the authors do not paper over them. Sanction severity for non-disclosure came out negative for both attitude and control, which means students who expected harsher penalties for concealment reported *less* favorable views of declaring and less confidence in doing it well. The authors' interpretation is that severity may signal a punitive environment rather than a fair process, and that students who perceive a punitive environment may also doubt their ability to comply with its reporting requirements.

The positive coefficient on improper-use sanction severity is harder to explain, and they treat it as an estimator artifact: the two improper-use constructs are strongly correlated in both the measurement and structural models, and their variance inflation factors sit near or above the conventional threshold. When two predictors share that much variance, individual path coefficients can flip sign while the block as a whole still predicts the outcome.

That caveat matters for how the page should be used. The robust finding — the one supported by the measurement model, the indirect-path bootstraps and ordinary theory — is that attitude is the primary proximal predictor and that detection certainty for concealment feeds it. The directional claims about sanction severity, especially the positive coefficient, are conditional estimates inside a collinear block and should not be quoted as evidence that heavier penalties for improper use encourage honest declaration. The authors say as much themselves, describing the conditional estimates as requiring cautious interpretation.

## What this means for practice

- **Instructors:** State the declaration threshold explicitly and apply it identically across assignments. Ambiguity about what counts as reportable use is what makes a declaration feel risky rather than routine.
- **Administrators:** Treat the declaration form and the misconduct process as one system. If truthful disclosure reliably triggers investigation, students will rationally decline to disclose, and the transparency data the institution collects will describe the careful students rather than the actual use.
- **Assessment designers:** Separate "what did you use" from "was it permitted" in the workflow so that a declaration cannot automatically become an accusation. The model implies those two questions carry opposite motivational weight.
- **Policymakers:** Invest in detection credibility for concealment rather than in escalation of penalties. The severity paths were negative or unstable, while the detection-certainty path was consistently positive.

## Limitations

- Cross-sectional design: no temporal ordering, so every path is an association rather than a causal effect.
- The outcome is intention to declare, not observed declaration behavior or declaration accuracy; the gap between the two is exactly where real consequences bite.
- Data come from one national system — 466 students across 31 provincial regions in China — with institutional rules and sanction regimes that differ from other countries.
- Prior declaration experience was [[self-report-measures|self-reported]] and not checked against institutional records, and the two improper-use constructs were strongly collinear, with variance inflation factors near or above the conventional threshold, which destabilizes their individual coefficients.
- Recruitment ran through the Credamo panel with payment per accepted response, and 26 submissions completed in under three minutes were excluded, leaving a volunteer panel rather than a probability sample.
- Mardia's test indicated multivariate non-normality, so maximum-likelihood inference was interpreted cautiously.

## Citation

Liu, D., Shuai, Q., Zhang, Y., Yang, Y., Wang, R., & Zhang, L. (2026). [Students' intentions to truthfully declare generative AI use in higher education assessment: a cross-sectional SEM study integrating deterrence theory and the theory of planned behavior](https://doi.org/10.3389/fpsyg.2026.1986227). *Frontiers in Psychology, 17*, 1986227.
