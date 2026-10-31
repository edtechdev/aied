---
title: "Characterizing diverse student behaviors, interactions, and perceptions with GAI-augmented learning analytics tool"
created: "2026-10-31T09:25:00-04:00"
updated: "2026-10-31T09:25:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/sun-gai-learning-analytics-behaviors-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [latent profile analysis]
discipline: [cs education]
level: [higher ed]
audience: [instructors, learning analytics designers, educational technology developers, researchers]
technology: [learning-analytics, generative-ai, personalized-learning, adaptive-learning]
pedagogy: [self-regulated-learning, student-engagement, help-seeking]
methods: [latent-profile-analysis, mixed-methods-research, quantitative-research]
assessment: [self-report-measures]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** A multimethod study of 27 Educational Technology sophomores in a mandatory Python Programming course asks how students used GaLAT, a learner-facing [[learning-analytics]] tool attached to a [[generative-ai|GAI-supported]] programming platform. Stage-specific clustering of seven clickstream indicators produced three recurring profiles, Deep, Self-Oriented, and Peer-Oriented Explorers, plus a final-stage Limited Explorers profile holding 13 of the 27 students. Epistemic network analysis showed the profiles differed in how superficial, medium, and deep knowledge and feedback inquiries co-occurred in [[student-ai-interaction|student-GAI interaction]]. Perceptions of GAI were favorable across all four profiles with no significant differences, which the authors read as an acceptance-enactment gap rather than evidence that [[student-engagement|engagement]] follows from positive attitudes.

## Key Findings

1. Total platform behaviors fell from 1448 in the initial stage to 770 in the final stage, with peer node dragging dropping from 704 to 326 and peer reading time from 3254 to 336.
2. Initial-stage clustering (silhouette 0.43) yielded Deep Explorers (n = 12), Self-Oriented Explorers (n = 11), and Peer-Oriented Explorers (n = 4), leaving no student in an inactive profile.
3. Final-stage clustering (silhouette 0.52) retained the three families at n = 6, 5, and 3 but added Limited Explorers (n = 13), whose total behaviors averaged 4.92, a near cessation of use.
4. Deep Explorers combined self- and peer-oriented work at both stages, posting the highest behavior totals (76.83 initial, 71.67 final) and the highest peer reading frequency at the final stage (8.67).
5. Peer-Oriented Explorers logged no reading of their own or peers' nodes in the final stage despite frequent dragging (22.67 own-node drags), so activity exceeded recorded reading.
6. Network structure tracked profile, not volume: Deep Explorers linked superficial knowledge inquiry to elaborated feedback inquiry, while Limited Explorers clustered on the superficial-superficial connection.
7. One-way ANOVA found no significant differences across final-stage profiles in perceived usefulness, ease of use, intention to use, or attitude, though Self-Oriented Explorers scored highest descriptively and Peer-Oriented Explorers lowest on intention.

## How the trace data were built

GaLAT was not a separate instructional environment. Students worked inside a GAI-supported programming platform powered by the DeepSeek-V2 model, posing open-ended questions and receiving [[feedback]], and the platform logged each exchange. After each of the eight sixty-minute sessions the instructor triggered report generation, and the tool turned those logs into structured learning nodes that students could drag into focus and read, both their own and their peers'. Seven indicators were recorded: dragging, reading, and reading time for one's own nodes; the same three for peers' nodes; and a total behavior count. The study ran in a mandatory Python Programming course for 27 Educational Technology sophomores at a Chinese university in the autumn term of 2024. Clustering was run separately for the structured [[visualization|data-visualization]] stage and the open-ended project stage, precisely so that task-driven variation would not be mistaken for individual difference. Profiles were aligned across stages by their ordinal pattern of high, moderate, and low indicators, the move that makes this a [[latent-profile-analysis|profile analysis]] of stage-specific groups rather than a claim about stable learner types. Log scales and z-scores preceded K-means, with candidate solutions from k = 2 to 6.

## What separates the four profiles

Profiles were defined by the configuration of indicators, not by raw volume. Deep Explorers moved between their own nodes and peer nodes at both stages and posted the highest behavior totals, 76.83 initially and 71.67 finally. Self-Oriented Explorers stayed with their own material, recording 26.36 drags of their own nodes in the initial stage against 2.73 drags of peers' nodes. Peer-Oriented Explorers inverted that ratio and, initially, logged zero drags and zero reading of their own nodes at all. Limited Explorers, present only in the final-stage solution, averaged 4.92 total behaviors and 0.31 reads of their own nodes. The authors are careful about identity: clustering was conducted independently at each stage, so a shared label marks a structurally analogous pattern rather than the same people. What the data support is cohort-level redistribution, with all 27 students in active profiles initially and 13 in near-inactivity at the end, alongside a steep descriptive fall in activity overall, from 1448 total behaviors to 770.

## How GAI interaction quality diverged

Conversations were coded into knowledge inquiry and feedback inquiry at superficial, medium, and deep levels, with interrater reliability of 0.83, then modeled in epistemic network analysis. At the final stage the Deep Explorer network tied superficial knowledge inquiry to both simple and elaborated feedback inquiry, so plain questions still fed into examination of GAI output. The Limited Explorer network collapsed onto the superficial-superficial link, with weaker connections involving the medium and deep codes. For Self-Oriented Explorers this contrast was the clearest stage-related network difference the study reports; for Deep and Peer-Oriented Explorers the differences did not reach statistical significance. Two cautions govern reading these figures. Each network used its own singular value decomposition, so node positions are not comparable across panels and only edge patterns carry meaning. And because profiles were derived separately, the contrasts describe aggregate configurations, not within-student reorganization or a developmental sequence in [[help-seeking|help seeking]].

## Why favorable perceptions did not track behavior

All four final-stage profiles rated GAI positively, and one-way ANOVA found no significant differences in perceived usefulness, F(3, 23) = 0.888, p = 0.462; perceived ease of use, p = 0.623; intention to use, p = 0.241; or attitude, p = 0.515. Permutation tests reproduced the pattern. Descriptively, Self-Oriented Explorers were highest on every dimension, with intention to use at 4.50, while Peer-Oriented Explorers reported 3.33 with wide within-group spread. The null result is the finding: students who had almost stopped opening the tool still endorsed it. The authors call this an acceptance-enactment gap, and argue that lifting perceived usefulness or ease of use will not by itself generate review, comparison, or knowledge integration, because what is missing is a task-relevant reason to use the reflective features, and because [[personalized-learning|personalized]] reports only matter if a learner has a reason to open them. They also note that acceptance of GAI says nothing about acceptance of a particular report design.

## What this means for practice

- **Instructors.** Read low late-stage activity against task progress before naming it disengagement; a student who has finished needs closure prompts to summarize and justify a solution, while one who has stalled needs a diagnostic next step.
- **Instructors.** Ask students to state why a GAI response satisfies a criterion, name its limits, and check it against a peer example, so that comparison becomes part of [[scaffolding|scaffolded]] routine rather than incidental browsing.
- **Learning analytics designers.** Trigger support from current behavioral and task evidence that can be revised, not from a permanent cluster label applied to a learner.
- **Learning analytics designers.** Measure perceptions of the reflective report and of GAI as a general assistant as separate objects, so restricted use can be traced to the feature rather than to the technology.

## Limitations

- The sample is 27 Educational Technology sophomores in one mandatory Python Programming course at a single Chinese university, in a single [[cs-education|programming education]] cohort, with five of the original 32 excluded for incomplete logs.
- Cluster sizes were small and unequal, from 3 to 13, and the authors themselves label the profiles exploratory rather than stable learner types.
- Behavioral logs record dragging and reading time, not comprehension; Peer-Oriented Explorers dragged nodes in the final stage while recording no reading, and the data cannot say what was understood.
- Clustering ran independently at each stage, so no transition matrix or longitudinal mixture model exists and individual movement between profiles remains unmeasured.
- The GAI platform ran on DeepSeek-V2 during learning stages II and III in the autumn of 2024, so the interaction-quality findings describe that model generation and may not carry over to later systems.
- Perceptions came from one post-course [[self-report-measures|self-report]] questionnaire adapted from a technology acceptance instrument, compared only across final-stage clusters, with a single reliability estimate of 0.677 for perceived ease of use.

## Citation

Sun, D., Yang, Z., Shi, J., & Yang, J. (2026). [*Characterizing diverse student behaviors, interactions, and perceptions with GAI-augmented learning analytics tool*](https://doi.org/10.1057/s41599-026-09564-z). *Humanities and Social Sciences Communications*.
