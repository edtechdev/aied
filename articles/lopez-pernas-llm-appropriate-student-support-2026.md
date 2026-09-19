---
title: "Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation"
created: "2026-08-27T04:34:11-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
technology: [human-in-the-loop-ai, learning-analytics, llm]
assessment: [ai-feedback-quality]
ethics: [equity-in-ai-education]
audience: [software developers]
research_method: [benchmark]
level: [higher ed]
sources: ['raw/papers/lopez-pernas-llm-appropriate-student-support-2026.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** **López-Pernas et al. (2026)** generated 4,500 [[simulating-students|synthetic student]] vignettes with three LLMs (GPT-5-mini, Mistral-Medium-2508, Qwen-Plus) to test whether current large language models can act as *prescriptive* [[learning-analytics]] tools — adaptively recommending the level, duration, and type of academic support matched to student need. They find that LLMs show **limited sensitivity** to LA indicators of student need and **considerable inconsistency across models**, concluding that current LLMs are not yet reliable as prescriptive models for student support at scale.

## Key Findings

1. **LLMs show limited sensitivity to student need.** Correlations between LA indicator levels and recommended support are statistically significant (after FDR correction) but mostly weak in magnitude (e.g. GPT r = −0.20 for support level). Only Mistral showed strong differentiation — an almost deterministic correlation between LA level and support duration (r = −0.90) — while GPT showed modest differentiation and Qwen nearly none. Statistical significance was largely driven by the large sample size rather than substantive effects.
2. **Support was frequently allocated without regard to who needed it most.** Recommendations were often offered to both at-risk and thriving students, sometimes favoring those already well-resourced — contradicting the Multi-Tiered System of Supports (MTSS) assumption that the greatest needs should receive the most intensive, individualized support.
3. **Large cross-model inconsistency.** The three LLMs diverged sharply in what they recommended. GPT favored resource-based/self-paced support (mean support level 3.96, duration 7.86h); Mistral mostly prescribed individualized or hybrid support (mean level 6.77, duration 6.70h); Qwen favored instructor/advisor-led and peer-based support (mean level 4.77, longest duration 9.00h). The same student profile can therefore yield very different prescriptions depending on the model used.
4. **Model-specific behavioral biases surfaced in the synthetic data.** GPT generated more Global North profiles and used they/them pronouns; Qwen generated more [[global-south|Global South]] profiles; Mistral skewed toward she/her. These downstream demographic distributions indicate the models carry regional and gendered tendencies into the profiles they construct, with implications for [[equity-in-ai-education]].
5. **LLMs are not yet reliable as prescriptive models at scale.** The authors conclude that current models cannot ethically, consistently, and reliably deliver student-support prescriptions, and argue that extensive evaluation, fine-tuning, and [[reinforcement-learning|reinforcement learning]] — plus a **human in the loop** — remain necessary before deployment.

## What this means for practice

- **Designers.** Keep a human in the loop: the three models diverged so sharply that the same student profile yields different prescriptions — mean support level 6.77 for Mistral-Medium-2508 versus 3.96 for GPT-5-mini — so no off-the-shelf LLM should allocate support autonomously.
- **Designers.** Audit recommendations against need-based allocation before deployment: sensitivity to LA indicators was weak (GPT r = −0.20 for support level) and support was recommended for at-risk and thriving students alike, sometimes favoring the well-resourced.
- **Researchers.** Test model-specific priors explicitly: GPT-5-mini generated more Global North profiles and used they/them pronouns, Qwen-Plus generated more [[global-south|Global South]] profiles, and Mistral-Medium-2508 skewed toward she/her — distributions that propagate into downstream recommendations.
- **Administrators.** Treat prescriptive analytics as unevaluated until validated on real cohorts, since the evidence here comes from synthetic vignettes and the authors expect fine-tuning or reinforcement learning plus human oversight to be necessary.
- **Designers.** Reuse the single-trait, single-indicator vignette protocol as a pre-deployment audit template, following the Winograd Schema logic the authors applied to isolate model behavior.

## Limitations

- All 4,500 vignettes were synthetically generated — 1,500 each by GPT-5-mini, Mistral-Medium-2508, and Qwen-Plus — and the authors acknowledge that results may vary when using real-world data.
- No human participants and no educator ratings: the study involves only simulated data, so the finding that LLMs fail to replicate professional discretion rests on the authors' reading of the generated recommendations.
- Each vignette carried one behavioral trait and one LA indicator, an isolation that cannot show how models weigh multiple, conflicting signals about a student.
- Statistical significance was driven by the sample size: correlations between LA indicators and recommended support were mostly weak and survived FDR correction only at n = 4,500.

## Connected Concepts

- [[learning-analytics]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[ai-feedback-quality]]
- [[higher-ed]]
- [[simulating-students]]

## Connected Articles

- [[ai-decision-support-online-learning-assessment-2026]] — AI decision support in online learning assessment
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating trustworthiness of LLMs in education
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-powered feedback system with teacher-in-the-loop mediation

## Citation

López-Pernas, S., Oliveira, E., Misiejuk, K., Deriba, F. G., Kaliisa, R., & Saqr, M. (2026). [*Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation*](https://doi.org/10.1016/j.chbah.2026.100357). Computers in Human Behavior: Artificial Humans, 9, 100357.
