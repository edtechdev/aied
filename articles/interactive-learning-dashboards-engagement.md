---
title: "Interactive learning dashboards: rethinking learning visualisations as engagement tools"
created: "2026-08-08T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
pedagogy: [metacognition, self-regulated-learning, student-engagement]
technology: [intelligent-tutoring, learning-analytics, llm, pedagogical-agent, visualization]
research_method: [mixed methods, case study]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/interactive-learning-dashboards-engagement.md']
confidence: high
audience: [instructors, learning analytics designers]
---

> **Synthesis:** Graf et al. (2026) transformed a conventional Learning Analytics Dashboard (LAD) into an interactive ILAD by adding an [[llm]]-powered [[pedagogical-agent|pedagogical agent]] and a Judgment of Learning (JoL) self-assessment feature. In a 5-week case study with 30 CS students across three conditions (no agent, "telling" agent, "eliciting" agent), the elicit condition produced more reflection and more accurate mastery calibration. The study bridges [[learning-analytics]] dashboard design with [[intelligent-tutoring]] principles and [[metacognition]] [[research-methods-aied|research]], showing that how learners interact with their data matters more than simply seeing it.

## Study Design

- **30 CS students** in a university programming course, paid to regularly use the ILAD over **5 weeks**
- **3 conditions** randomized: no agent, "tell" agent (provides info about learner data), "elicit" agent (asks questions about learner data)
- ILAD extended a conventional LAD with two features:
  1. **LLM-powered [[pedagogy|pedagogical]] agent** with access to learning analytics and course context
  2. **Interactive Judgment of Learning (JoL)** — self-assessment required before viewing system metrics

## Key Findings

- Students in the **elicit condition** engaged in more reflection
- Elicit-condition students more **accurately judged their own mastery** (better JoL calibration)
- The "tell" agent (providing information) did not produce the same benefits — highlighting that pedagogical strategy matters, not just AI presence
- The study demonstrates how interactivity can shift LADs from static visualizations to [[student-engagement|engagement]] tools that promote [[metacognition|metacognitive]] processes

## Design Implications

The paper challenges the dominant LAD paradigm of "show data → hope for insight." Drawing on [[intelligent-tutoring]] research (Chi's [[icap-framework|ICAP framework]]), the authors argue that:

1. **Interactivity ≠ navigation** — clicking filters is not cognitive engagement; two-way dialogue is
2. **Elicitation beats telling** — asking learners to self-assess before revealing metrics drives calibration better than showing data upfront
3. **LLMs enable scalable interactivity** — the pedagogical agent can ask personalized questions at scale, bringing ITS-style dialogue to dashboard contexts

These findings connect to broader [[self-regulated-learning]] theory and the [[metacognition]] literature on judgment calibration.

## What this means for practice

- **Instructors.** Make learners commit to a Judgment of Learning before they can see a system rating; requiring the self-rating first is what produced the calibration gains, and 83% of participants submitted one just to see how the system rated them.
- **Learning analytics designers.** Build an eliciting agent rather than a telling one. In the elicit condition judgment accuracy correlated with system mastery (r = 0.408, p < .001) while the tell condition showed no significant correlation with any metric (r = 0.143, p = 0.206).
- **Learning analytics designers.** Adopt evolution of judgment accuracy as a dashboard outcome measure and track it over time: in the elicit condition the JoL–mastery correlation rose from r = 0.332 in the first period to r = 0.482 (p < .001) in the third, giving an instrument for whether [[metacognition|calibration]] actually improves.
- **Instructors.** Plan for imperfect agent output and design around it. 13% of 284 randomly sampled LLM responses were faulty, concentrated when students asked for things outside the agent's intended capability, though the rate fell as students learned where it helped.
- **Learning analytics designers.** Budget for inference cost and guardrails before a cohort-wide rollout: each student message triggered between one and ten API calls, and the authors flag the compounded cost and energy use of weekly use at scale.

## Limitations

- **Thirty self-selected, paid participants.** One introductory algorithms and data structures course at a single European university; the authors call the work an exploratory case rather than a confirmatory experiment and name self-selection bias explicitly.
- **Engagement was incentivized.** Participants were compensated and asked to use the ILAD at least once a week for any three weeks, so the observed engagement levels cannot be read as voluntary adoption.
- **Small cells behind the JoL findings.** Judgment observations split into n = 104 (elicit), 80 (tell), and 118 (none), falling to 18–37 per condition per time period; the authors state the small sample size limited the ability to claim significant differences.
- **Short window and approximated engagement.** Five weeks of deployment with no direct behavioral measure of changed study practice or exam performance, and viewing of the static visualizations measured only through self-report.

## Connected Concepts

- [[higher-ed]]
- [[learning-analytics]]
- [[llm]]
- [[metacognition]]
- [[pedagogical-agent]]
- [[self-regulated-learning]]

- visualization
## Connected Articles

- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring

## Citation

Graf, L., Bassner, P., Anzinger, M., Dietrich, F., Krusche, S., & Poquet, O. (2026). [Interactive learning dashboards: rethinking learning visualisations as engagement tools](https://doi.org/10.1007/s10639-026-14082-1). *Education and Information Technologies*.
