---
title: "ChatGPT for interdisciplinary learning: Does it equally benefit STEM and non-STEM students"
created: "2026-10-11T08:05:00-04:00"
updated: "2026-10-11T08:05:00-04:00"
type: article
sources: ['raw/papers/caeai-chatgpt-interdisciplinary-stem-nonstem-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment, survey]
discipline: [stem education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, educational technology developers]
pedagogy: [collaborative-learning, student-engagement, problem-solving]
technology: [generative-ai, conversational-ai, llm]
assessment: [learning-gains, assessment]
methods: [mixed-methods-research, quantitative-research]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-11"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This two-week quasi-experiment with 130 undergraduates at a Singapore university asked whether [[generative-ai|ChatGPT]] benefits STEM and non-STEM students equally during interdisciplinary learning, and the answer is no. Non-STEM students reported greater [[student-engagement|cognitive engagement]] than their STEM peers, and the effect of the tool on physical engagement flipped by discipline: STEM students invested more effort with ChatGPT, non-STEM students more without it. Student notes produced without ChatGPT scored higher on diversity and integration of disciplinary ideas, suggesting the [[conversational-ai]] assistant sometimes substituted for rather than supported [[critical-thinking]]. The authors frame the pattern as a question of [[equity-in-ai-education]] and argue that disciplinary background must be treated as a design variable rather than a demographic footnote.

## Key Findings

1. Across two weeks, 130 undergraduates at one autonomous Singapore university worked in mixed-discipline groups on AI and Blockchain activities, some with ChatGPT and some without, producing 499 Miro notes for analysis.
2. Non-STEM students reported significantly higher cognitive engagement than STEM students (Q = 7.08, p < .05, ξ = .19), with a post hoc difference of .64 regardless of ChatGPT condition.
3. A medium interaction effect on physical engagement (Q = 9.87, p < .05, ξ = .41) showed STEM students more engaged with ChatGPT and non-STEM students more engaged without it.
4. Emotional engagement did not differ by ChatGPT condition or by STEM versus non-STEM background, indicating the divergence was specific to the physical and cognitive dimensions.
5. Notes from the non-ChatGPT condition showed significantly higher diversity (Q = 2.02, p < .05, ξ = .34) and integration (Q = 3.46, p < .05, ξ = .25) than notes from the ChatGPT condition.
6. Interdisciplinary learning quality did not differ between STEM and non-STEM students, and no interaction effects were found across its four dimensions of grounding, diversity, integration, and cognitive advancement.
7. Integration scored lower than the other three dimensions across the sample, and the authors attribute the ChatGPT-related quality drop to reduced critical thinking or to added extraneous cognitive load.

## Disciplinary background changed how students engaged

The study ran in March 2023 inside a digital literacy course, and the researchers deliberately provided no specific ChatGPT training so that natural use patterns would surface. Participants came from four classes of 183 students, of whom 130 took part (mean age 20.67); 72 were enrolled in STEM programs such as [[cs-education|computer science]], engineering, and environment, and 58 in non-STEM programs such as business, humanities, and social sciences. Groups of five or six were mixed across disciplines on purpose, so every team carried both perspectives into the [[collaborative-learning]] activity.

The engagement results split cleanly by dimension. Emotional engagement stayed flat across conditions and backgrounds, but physical engagement interacted with condition, and cognitive engagement depended on disciplinary background. The authors offer two explanations for the cognitive pattern: non-STEM students may have worked harder because AI and blockchain topics inherently favored STEM peers, or STEM students may have spent their cognitive resources interacting with [[conversational-ai|ChatGPT]], leaving less for the task itself. The second reading draws on [[self-efficacy]] differences, since non-STEM students with low computer confidence may struggle to adopt new learning technologies.

## ChatGPT use coincided with narrower interdisciplinary notes

The second research question asked whether condition and disciplinary background shaped [[learning-gains|interdisciplinary learning quality]], measured across disciplinary grounding, diversity, integration, and cognitive advancement. ChatGPT showed a significant effect on two of the four: notes in the ChatGPT condition were less diverse and less integrative than those in the non-ChatGPT condition. The authors read this as ChatGPT possibly dampening students' contribution of ideas from various disciplines and their combining of those ideas. One explanation is reduced [[critical-thinking]] through heavier reliance on generated responses; another is that interacting with the model added extraneous cognitive load and left fewer resources for generating and connecting ideas.

Notably, no STEM versus non-STEM difference and no interaction effect appeared in learning quality, so the disciplinary split showed up in engagement rather than in the notes themselves. The authors also contrast this finding with their own earlier study, which had found ChatGPT deepened disciplinary grounding. They attribute the divergence to different analysis units, a one-week versus two-week window, and the earlier work not accounting for STEM or non-STEM background. Related work they cite suggests that self-regulated [[scaffolding]] can counter the quality dip.

## A human–AI hybrid pipeline scored the notes

Because hand-coding 499 notes would be labor-intensive, the team used a human–AI hybrid approach. Two experienced researchers independently coded 400 notes from eight weeks following a four-dimension scheme, reaching inter-rater agreement of 0.68 for diversity, 0.67 for disciplinary grounding, 0.75 for cognitive advancement, and 0.54 for integration. After consensus, they fine-tuned GPT-4o on the agreed examples; the fine-tuned models matched agreed human coding at 0.87, 0.77, 0.90, and 0.78 respectively. Only the two focal weeks were used for the reported analyses; notes from the broader project served training purposes only.

Effects were estimated with robust ANOVA and robust two-way ANOVA using 20% trimmed means and the explanatory effect size ξ, chosen for resilience to non-normality and unequal variances in a small sample. The authors argue the pipeline could provide real-time [[feedback]] on interdisciplinary quality and lay groundwork for interdisciplinary [[learning-analytics]].

## What this means for practice

- **Instructors.** Expect that a tool introduced to help everyone will land differently across disciplines, and plan targeted support for the students it disadvantages. If non-STEM students disengage physically when ChatGPT is present, pair the tool with explicit guidance so it functions as a collaborative partner rather than an answer provider.
- **Course and program designers.** Build scaffolds into AI-supported interdisciplinary tasks so students generate and integrate ideas across fields instead of outsourcing that integration to the model.
- **[[educational-technology-developers|Educational technology developers]].** Consider surfacing disciplinary context and [[prompt-engineering|prompting]] reflection, since the study ties the quality drop to reduced critical thinking and to cognitive load imposed by the interface itself.
- **Researchers.** Treat disciplinary background as a variable in AI-in-education studies, not just a control, and measure it directly rather than through program enrollment.

## Limitations

- The participants were first- and second-year undergraduates in one course at one university in Singapore, working on only two activities centered on AI and Blockchain, which limits generalizability.
- At the instructor's request, every class got a turn with ChatGPT, so condition sizes were uneven and inconsistent across the two weeks, with survey responses of 93, 71, 28, and 21 across the four cells.
- Each team mixed STEM and non-STEM students and the study did not analyze how they interacted with ChatGPT, so interdisciplinary knowledge in the tasks cannot be attributed to ChatGPT alone.
- Data were collected in March 2023, when GPT-3.5 was the most widely accessible version; the authors caution that later, more capable models may change the findings.
- Enrollment in a STEM versus non-STEM program served as a proxy for prior disciplinary preparation, a measure the authors say may not capture the full variability.
- Engagement was [[self-report-measures|self-reported]] through weekly Google Forms surveys rather than observed behavior.

## Citation


Zhu, G., Fan, X., Hou, C., Zhong, T., Zhu, W., Seow, P., Chen, A. S.-H., Rajalingam, P., Low, K. Y., & Tan, L. P. (2026). [ChatGPT for interdisciplinary learning: Does it equally benefit STEM and non-STEM students](https://doi.org/10.1016/j.caeai.2026.100681). *Computers and Education: Artificial Intelligence, 11*, 100681.