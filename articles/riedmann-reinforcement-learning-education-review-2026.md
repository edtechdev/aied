---
title: "Reinforcement Learning in Education: A Systematic Literature Review"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: article
tags:
  - reinforcement-learning
  - machine-learning
  - adaptive-learning
  - intelligent-tutoring
  - personalized-learning
  - systematic-review
  - meta-analysis-systematic-review
sources:
  - raw/papers/riedmann-reinforcement-learning-education-review-2026.md
confidence: high
---

> **Reinforcement Learning in Education: A Systematic Literature Review** — A PRISMA-standard systematic literature review of [[reinforcement-learning]] (RL) applications in education, synthesizing 89 manuscripts published 2000–2024 across IEEE Xplore, Google Scholar, and ACM. The authors map the educational contexts, evaluation strategies, RL algorithms, and adaptation mechanisms used in the field, finding promising but methodologically uneven evidence that RL can support [[adaptive-learning]] and [[personalized-learning]] in contexts such as [[intelligent-tutoring]] and [[math-education]]. They report that while over half of studies conducted no statistical testing, those that did frequently showed RL policies outperforming baselines, and they distill a set of best practices for implementing RL in educational practice.

## Key Findings

- **Scope and method**: Following the PRISMA standard, the review analyzed 89 peer-reviewed manuscripts published between 2000 and 2024, drawn from IEEE Xplore, Google Scholar, and ACM, and organized findings across six outcome domains (educational context, evaluation strategy, considered concepts and results, type of algorithm, and type of adaptation).
- **Growth and focus areas**: Research on [[reinforcement-learning]] in education has grown sharply, with 72 of 89 papers published from 2016 to 2024. Applications concentrate on STEM subjects (39 papers), especially [[math-education]] (n = 27) and [[language-learning]] (n = 11), with the largest target group being college and [[higher-ed]] learners (n = 30).
- **Algorithms**: A majority of papers used model-free RL (n = 72), with value-based methods dominant and Q-learning the most frequently reported algorithm (n = 28). Despite a rise in Deep RL (DRL), classical RL approaches were more consistently effective — 61% of classical RL papers showing significant superiority versus only 36% of DRL approaches.
- **Adaptation mechanisms**: Adaptation split into content-related (instructional sequencing / content scheduling; n = 53) and guidance-related (hints, [[feedback]], activity selection; n = 36). RL demonstrated statistically significant superiority over baselines more often for guidance-related tasks than for content scheduling.
- **Evaluation and results**: Roughly half of papers evaluated "live" with real learners (n = 41), with the rest using real interaction datasets or [[simulation]] of user behavior. Among the 35 papers conducting statistical tests, 18 found at least one RL policy significantly outperforming all baselines; RL appeared comparatively most effective for affective variables (63% significant), followed by task completion, learning/performance, and time on task.
- **Effect sizes**: Among 15 papers suitable for effect-size analysis, most significant findings reported intermediate to large effect sizes (Cohen's d), suggesting practical significance — though computed from live evaluations only.
- **Reward design**: Learning gain, especially normalized learning gain, was the most effective reward source (used in over half of papers reporting significant results), sometimes combined with penalties or engagement signals.
- **Methodological concerns**: Over half of all included papers (n = 54) did not statistically analyze their results, and few used non-adaptive control groups or longitudinal designs, so the growing volume of research is not yet matched by methodological rigor. Publication-bias analyses (funnel plot, Egger's test, PET-PEESE) found no statistically significant evidence of bias but had limited power (n = 6).
- **Best practices**: The review recommends expanding beyond STEM and younger learners, considering application context, leveraging model-free RL for [[adaptive-learning]], preferring classical RL over DRL where appropriate, incorporating learning gain into reward functions, prioritizing real-world testing against reasonable baselines (including expert-designed and non-adaptive controls), rigorous statistical evaluation, and longitudinal studies of sustained learning.

## Connected Concepts

- [[reinforcement-learning]]
- [[machine-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[meta-analysis-systematic-review]]

## Connected Articles

- [[reinforcement-learning-measurement-model-assessment]]
- [[scaffolding-systematic-reviews-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]

## Citation

Riedmann, A., Schaper, P., & Lugrin, B. (2025). [Reinforcement Learning in Education: A Systematic Literature Review](https://doi.org/10.1007/s40593-025-00494-6). *International Journal of Artificial Intelligence in Education*, 35(4), 2669–2723.
