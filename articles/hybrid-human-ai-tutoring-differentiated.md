---
title: Improving Hybrid Human-AI Tutoring by Differentiating Human Tutor Roles Based on Student Needs
created: "2026-05-14T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-education]
technology: [intelligent-tutoring, personalized-learning, learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education]
research_method: [quasi-experiment]
level: [k 12]
sources: ['raw/papers/2605.11155.md']
confidence: high
audience: [administrators, instructors, researchers]
---

> **Synthesis:** In a large-scale quasi-experiment with 635 students (grades 5-8), hybrid human-AI tutoring produced substantial gains over AI-only tutoring: +25% time on task, +36% skill proficiency, and +61% standardized academic growth.
> The study's core innovation was a **differentiated tutoring policy**: students below the grade median received proactive human-initiated support, while those above received reactive, on-demand support. Proactive tutoring showed marginally higher growth (+75%, p = .065) and was particularly beneficial for students farthest below the cutoff, helping narrow achievement gaps.

## Connection to Broader AIED Research

This study extends the taxonomy in [[stanford-evidence-base-ai-k12-2026]] by showing that the human component remains differentiable and valuable even alongside AI. It also connects to [[personalized-learning]] frameworks and speaks to [[equity-in-ai-education]] concerns about achievement gaps.

## What this means for practice

- **Administrators.** Allocate human tutor time by need instead of evenly. The 635 consented students in grades 5-8 below their within-grade median received proactive, tutor-initiated support and showed 75% greater MAP growth than the reactively supported group (p = .065) — the same tutor hours, aimed where the marginal benefit was largest.
- **Administrators.** Fund the human layer rather than AI alone: students gained an additional 61% in standardized MAP growth (p = .003) in the human-AI period compared with the AI-only baseline, about 2× the expected national NWEA growth norms.
- **Instructors.** Reserve proactive outreach for students below the cutoff and leave higher performers on reactive, on-demand support: time on task (+25%) and skill proficiency (+36%) improved significantly with human-AI tutoring overall but did not differ significantly between the proactive and reactive groups.
- **Administrators.** Re-examine the cutoff each term rather than fixing it. Dividing students into proactive and reactive groups at the median may oversimplify the relationship between need and optimal tutoring intensity.
- **Researchers.** Compare the differentiated policy as a whole against a business-as-usual control condition; the authors identify that randomized design as the stronger causal test.

## Limitations

- **Quasi-experimental evidence from one school.** The findings come from a difference-in-discontinuities design in a single middle school in a Mid-Atlantic U.S. state during the 2024-2025 school year, with 635 of approximately 1,000 eligible students opting in through informed consent.
- **Part of the sample lacks prior scores.** Prior-year state test scores were available for 557 of the 635 students; the remaining 78 were newly enrolled, so the cutoff placement rested on less information for them.
- **The headline differentiation effect is marginal, and null at the cutoff.** Proactive tutoring's advantage over reactive tutoring was 75% on average but at p = .065, and the full-sample trend of a 26% improvement was likewise not significant (p = .086).
- **A dichotomous median split.** Assigning support at the median may oversimplify the relationship between student need and optimal tutoring intensity, as the authors state — the students farthest below the cutoff are precisely the ones the design cannot distinguish.

## Connected Concepts

- [[personalized-learning]]
- [[equity-in-ai-education]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[adaptive-learning]]
- [[learning-gains]]
- [[k-12]]
- [[help-seeking]]
## Connected Articles

- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[tutoring-effectiveness-index]]
## Citation

Gurung, A., Gao, G., Gutterman, J., Thomas, D. R., Gupta, S., Branstetter, L., Brunskill, E., Aleven, V., & Koedinger, K. R. (2026). [Improving hybrid human-AI tutoring by differentiating human tutor roles based on student needs](https://arxiv.org/abs/2605.11155). Proceedings of the 19th International Conference on Educational Data Mining (EDM'26).
