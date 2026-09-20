---
title: Understanding Student Effort Using Response-Time Propensities During Problem Solving
created: "2026-05-12T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [computational-thinking]
pedagogy: [student-engagement]
technology: [adaptive-learning, learning-analytics]
assessment: [assessment]
stakeholders: [student-experience]
research_method: [secondary analysis, educational measurement]
audience: [learners]
sources: ['raw/papers/2605.08943.md']
confidence: high
---

> **Synthesis:** Adaptive learning systems produce substantial [[learning-gains|learning gains]], yet many students engage too briefly or superficially to benefit. This paper addresses the central challenge of **measuring student effort** during multi-step [[problem-solving|problem solving]] using response-time propensities.
> The authors develop models that infer student effort from response-time patterns, finding that common log-based proxies like time-on-task are insufficient. They propose response-time propensity modeling as a more nuanced approach to identifying when students are superficially engaging versus deeply working through problems.
## Connections to AIED

This work directly connects to [[learning-analytics]] by providing a validated method for inferring effort from interaction logs. It has implications for [[adaptive-learning]] that could use early effort detection to intervene before students disengage.

The approach also relates to [[engagement-assessment-video]] and broader [[assessment]] frameworks, suggesting that response-time analysis could complement other [[student-engagement|engagement]] signals in [[multimodal|multi-modal]] effort detection systems.

## What this means for practice

- **Learners.** Do not read your own pace as a verdict on your effort. Median step response time held steady at roughly 19-20 seconds across the session, and slower pacing predicted greater learning efficiency only for higher-proficiency students — for lower-proficiency students it was weakly or even negatively related to learning.
- **Instructors.** Use early-session pacing as a disengagement signal rather than a global one. The association between response-time propensity and learning efficiency was strongest in the earliest slice of practice and became weaker and less systematic later, so the first minutes of a session are the actionable window.
- **Instructors.** Do not treat slow responding as disengagement by default. The same latency reflects deliberate processing for students who already know the content and stalled, inefficient strategy search for those who do not, so timing-based prompts need to be conditioned on prior proficiency.
- **Instructors.** Replace raw time-on-task with a difficulty-adjusted signal before acting on it. Stability across session slices was moderate to strong for response-time propensity (r = .51 to .64) but much weaker for learning-rate estimates (r = .19 to .35), so the propensity is the more dependable quantity to monitor.
- **Researchers.** Model response time at the step level with knowledge-component random effects. Per-step timing gives one observation per [[knowledge-tracing|knowledge component]], which is what separates a student's typical pacing from the difficulty of the steps they happened to receive.

## Limitations

- Data come from eight classroom deployments of step-based mathematics tutors across six U.S. schools, totaling 794 students with about 30-60 minutes of practice each (roughly 1-2 class sessions), so the findings are bounded to short step-based math interactions.
- Response time is an inherently ambiguous trace: longer delays can reflect deliberation but also classroom interruptions, off-task behavior, or time spent reading, none of which log data alone can distinguish.
- The analyses are correlational; the moderation by prior proficiency and practice timing is consistent with theories of productive struggle and effort regulation, but the authors state causal interpretations are not warranted.
- The authors note the results may not transfer to domains with heavier reading load, open-ended responses, or different classroom norms, and call for replication across domains and populations before use in adaptive decisions at scale.

## Connected Concepts

- [[learning-analytics]]
- [[adaptive-learning]]
- [[assessment]]
- [[student-engagement]]
- [[student-modeling]]

## Connected Articles

- [[engagement-assessment-video]]
## Citation

Borchers, C., Zhang, L., Yang, K., Nagashima, T., & Domingue, B. W. (2026). [Understanding student effort using response-time propensities during problem solving](https://arxiv.org/abs/2605.08943).
