---
title: "Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation"
created: "2026-08-27T04:34:11-04:00"
updated: "2026-08-27T04:45:04.088676-04:00"
type: article
tags: [learning-analytics, llm, equity-in-ai-education, human-in-the-loop-ai, ai-feedback-quality, higher-ed]
research_method: [benchmark]
level: [higher ed]
sources: ['raw/papers/lopez-pernas-llm-appropriate-student-support-2026.md']
confidence: high
---

> **López-Pernas et al. (2026)** generated 4,500 [[simulating-students|synthetic student]] vignettes with three LLMs (GPT-5-mini, Mistral-Medium-2508, Qwen-Plus) to test whether current large language models can act as *prescriptive* [[learning-analytics]] tools — adaptively recommending the level, duration, and type of academic support matched to student need. They find that LLMs show **limited sensitivity** to LA indicators of student need and **considerable inconsistency across models**, concluding that current LLMs are not yet reliable as prescriptive models for student support at scale.

## Key Findings

1. **LLMs show limited sensitivity to student need.** Correlations between LA indicator levels and recommended support are statistically significant (after FDR correction) but mostly weak in magnitude (e.g. GPT r = −0.20 for support level). Only Mistral showed strong differentiation — an almost deterministic correlation between LA level and support duration (r = −0.90) — while GPT showed modest differentiation and Qwen nearly none. Statistical significance was largely driven by the large sample size rather than substantive effects.
2. **Support was frequently allocated without regard to who needed it most.** Recommendations were often offered to both at-risk and thriving students, sometimes favoring those already well-resourced — contradicting the Multi-Tiered System of Supports (MTSS) assumption that the greatest needs should receive the most intensive, individualized support.
3. **Large cross-model inconsistency.** The three LLMs diverged sharply in what they recommended. GPT favored resource-based/self-paced support (mean support level 3.96, duration 7.86h); Mistral mostly prescribed individualized or hybrid support (mean level 6.77, duration 6.70h); Qwen favored instructor/advisor-led and peer-based support (mean level 4.77, longest duration 9.00h). The same student profile can therefore yield very different prescriptions depending on the model used.
4. **Model-specific behavioral biases surfaced in the synthetic data.** GPT generated more Global North profiles and used they/them pronouns; Qwen generated more [[global-south|Global South]] profiles; Mistral skewed toward she/her. These downstream demographic distributions indicate the models carry regional and gendered tendencies into the profiles they construct, with implications for [[equity-in-ai-education]].
5. **LLMs are not yet reliable as prescriptive models at scale.** The authors conclude that current models cannot ethically, consistently, and reliably deliver student-support prescriptions, and argue that extensive evaluation, fine-tuning, and [[reinforcement-learning|reinforcement learning]] — plus a **human in the loop** — remain necessary before deployment.

## Implications

The study operationalizes the "prescriptive" step of the LA intervention cycle that prior dashboards and visualizations leave to human interpretation, testing whether [[llm|large language models]] can directly convert LA indicators into actionable support plans. Its negative findings are a deliberate caution against the assumption that LLMs can scale [[learning-analytics]]-informed advising without checks.

The weak correlation between need and recommended support — alongside outright cross-model disagreement about what a given student requires — means that deploying an off-the-shelf LLM as a prescriptive advisor could systematically mis-allocate support. This is a [[governance]] and safety concern for [[human-in-the-loop-ai]] in education: the authors position human oversight as essential rather than optional, consistent with the wider argument that AI-generated [[feedback]] and recommendations should be treated as drafts for educator curation rather than final deliverables.

The observed demographic skews (Global North vs. Global South profiles, gendered pronoun distributions) connect to broader concerns in [[bias-mitigation]] and [[equity-in-ai-education]]: even the *construction* of student data by LLMs carries model-specific demographic priors that can propagate into downstream recommendations. Methodologically, the study's synthetic vignette design — isolating behavioral traits and LA indicators one at a time in the spirit of the Winograd Schema — offers a reusable template for auditing LLM behavior before deployment.

For [[higher-ed]] institutions considering AI-driven student-support systems, the practical implication is caution: prescriptive analytics cannot yet substitute for advisor judgment, and any LLM-based recommendation layer should be validated against need-based allocation, monitored for per-model inconsistency, and kept under human supervision.

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
