---
title: Students' Perception Accuracy of Partners' AI Use and its Relation to Collaboration Performance
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-23T09:52:53-04:00"
type: article
foundations: [cognitive-offloading]
technology: [intelligent-tutoring]
research_method: [longitudinal study, survey]
discipline: [cs education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.23237.md']
confidence: medium
---

> **Synthesis:** Graf et al. (2026) identify a new challenge in collaborative programming education: AI use is now an invisible yet consequential dimension of collaboration, and partners often misread ability and effort from code. In a three-wave longitudinal study of 103 student pairs in an introductory software engineering course, they found that greater misalignment between partners' beliefs about each other's AI use early in the project was associated with lower final project scores. This effect was strongest in teams with lower prior programming performance, suggesting low-performing students pay a higher cost of misaligned perceptions. Notably, perception misalignment did not consistently decrease through face-to-face pair-programming sessions, implying that transparency mechanisms (disclosures, shared logs) may be needed. This work connects [[student-experience]] [[research-methods-aied|research]] in [[cs-education]] with [[golrang-propact-pair-programming-2026]] and raises important questions about [[cognitive-offloading|Over-Reliance]] and [[academic-integrity]] in AI-augmented [[collaborative-learning]].

## What this means for practice

- **Learners.** Treat your sense of a partner's AI use as a hypothesis rather than knowledge: the median correlation between a perceiver's estimates and their own self-reported usage profile was r = .73 at both waves, so most apparent awareness was projection.
- Make AI use discussable at the start of a project. Greater misalignment in the first wave was associated with lower final project scores, and later alignment did not offset that association.
- Do not count on sitting side by side to correct the picture: alignment improved significantly only across the whole project (W = 2292, p = .003), 25% of teams became worse at judging their teammates, and rank accuracy for AI use type was r = 0.34 at t2 and r = .27 at t3.
- If your [[cs-education|programming]] background is thinner, be especially explicit about your AI reliance — the misalignment–performance association was substantially stronger for teams with lower prior programming performance and negligible for high-performing teams.
- Push for lightweight visibility rather than guesswork: shared prompt histories, AI-use annotations, or peer-visible records of AI-supported work are the mechanisms the authors suggest for making [[collaborative-learning]] coordination more accurate.

## Limitations

- The design is observational, so the reported associations should not be interpreted causally.
- AI use was measured through self-reports and partner estimates rather than behavioral traces, leaving the measures open to memory error, scale interpretation differences, and social desirability effects.
- The outcome grade showed a ceiling effect, which the authors say may have led to underestimation of the associations; observed effect sizes were small to moderate.
- All 103 student pairs came from a single introductory software engineering course, and many partners were previously acquainted and chose each other, a context that likely inflated assumed-similarity bias and limits generalizability to other settings and team compositions.

## Connected Concepts

- [[student-experience]]
- [[cs-education]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[collaborative-learning]]
- [[human-ai-collaboration]]
- [[trust]]
- [[social-norms-ai-use]] — the informal rules around AI use
## Connected Articles

- [[golrang-propact-pair-programming-2026]]
## Citation

Laura Graf, Ramona Beinstingel, Stephan Kusche, Oleksandra Poquet (2026). [Students' Perception Accuracy of Partners' AI Use and its Relation to Collaboration Performance](https://arxiv.org/abs/2606.23237).
