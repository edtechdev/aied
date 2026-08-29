---
title: "Interactive learning dashboards: rethinking learning visualisations as engagement tools"
created: "2026-08-08T04:33:04-04:00"
updated: "2026-08-26T15:33:55-04:00"
type: article
tags: [learning-analytics, metacognition, llm, higher-ed, student-engagement, self-regulated-learning, intelligent-tutoring, pedagogical-agent, cs-education, visualization]
research_method: [mixed methods, case study]
discipline: [cs education]
level: [higher ed]
category: [engagement]
sources: ['raw/papers/interactive-learning-dashboards-engagement.md']
confidence: high
---

> **Synthesis:** Graf et al. (2026) transformed a conventional Learning Analytics Dashboard (LAD) into an interactive ILAD by adding an LLM-powered pedagogical agent and a Judgement of Learning (JoL) self-assessment feature. In a 5-week case study with 30 CS students across three conditions (no agent, "telling" agent, "eliciting" agent), the elicit condition produced more reflection and more accurate mastery calibration. The study bridges [[learning-analytics]] dashboard design with [[intelligent-tutoring]] principles and [[metacognition]] research, showing that how learners interact with their data matters more than simply seeing it.

## Study Design

- **30 CS students** in a university programming course, paid to regularly use the ILAD over **5 weeks**
- **3 conditions** randomized: no agent, "tell" agent (provides info about learner data), "elicit" agent (asks questions about learner data)
- ILAD extended a conventional LAD with two features:
  1. **LLM-powered pedagogical agent** with access to learning analytics and course context
  2. **Interactive Judgement of Learning (JoL)** — self-assessment required before viewing system metrics

## Key Findings

- Students in the **elicit condition** engaged in more reflection
- Elicit-condition students more **accurately judged their own mastery** (better JoL calibration)
- The "tell" agent (providing information) did not produce the same benefits — highlighting that pedagogical strategy matters, not just AI presence
- The study demonstrates how interactivity can shift LADs from static visualizations to engagement tools that promote [[metacognition|metacognitive]] processes

## Design Implications

The paper challenges the dominant LAD paradigm of "show data → hope for insight." Drawing on [[intelligent-tutoring]] research (Chi's [[icap-framework|ICAP framework]]), the authors argue that:

1. **Interactivity ≠ navigation** — clicking filters is not cognitive engagement; two-way dialogue is
2. **Elicitation beats telling** — asking learners to self-assess before revealing metrics drives calibration better than showing data upfront
3. **LLMs enable scalable interactivity** — the pedagogical agent can ask personalized questions at scale, bringing ITS-style dialogue to dashboard contexts

These findings connect to broader [[self-regulated-learning]] theory and the [[metacognition]] literature on judgement calibration.

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
