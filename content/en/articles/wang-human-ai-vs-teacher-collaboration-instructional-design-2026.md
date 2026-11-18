---
title: "Comparing human-AI collaboration and teacher-student collaboration in developing pre-service teachers' instructional design competence: an experimental study"
created: "2026-11-18T09:50:00-05:00"
updated: "2026-11-18T09:50:00-05:00"
type: article
pedagogy: [collaborative-learning]
technology: [generative-ai, llm, intelligent-tutoring]
assessment: [feedback]
methods: [rct, quantitative-research]
sources: ['raw/papers/wang-human-ai-vs-teacher-collaboration-instructional-design-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1869502"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [experiment]
discipline: [teacher education]
level: [higher ed]
audience: [faculty developers, instructors, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Wang and colleagues (2026) ran an eight-week crossover experiment with 36 pre-service primary teachers at one Chinese normal university, alternating between revision [[feedback|feedback]] from a [[generative-ai|generative AI]] and from frontline teachers while students drafted one instructional design per week. Both conditions improved [[learning-design|instructional design]] competence substantially — the time main effect was F(1.67, 56.86) = 463.96, ηp² = 0.932, with scores rising from 3.11 to 4.04 to 4.43 across pre-test, week 4 and week 8. Overall gains did not differ significantly between the two strategies (0.74 for teacher-student collaboration versus 0.59 for [[human-ai-collaboration|human-AI collaboration]], p = 0.217, d = 0.21), but the profiles differed by dimension: teacher feedback produced larger gains in writing teaching objectives (d = 0.47) while the AI produced larger gains in designing the teaching process (d = 0.36). Students also reported a markedly better learning experience with the teacher on every flow dimension measured.

## Key Findings

- **Both collaboration modes worked.** Competence rose significantly at each measurement point in both conditions, with a time effect that explained most of the variance.
- **No overall difference between AI and teacher feedback.** Total gain scores were 0.59 for human-AI and 0.74 for teacher-student collaboration, a non-significant difference at a small effect size.
- **The dimensions split.** Teacher-student collaboration produced larger objective-design gains (0.96 versus 0.53), while human-AI collaboration produced larger teaching-process gains (0.82 versus 0.56).
- **Teacher feedback won the learning experience.** Teacher-student collaboration scored higher on all nine flow dimensions and on most self-report indicators, with goal attainment the one exception.
- **Discipline moderated the comparison.** A strategy-by-subject interaction was significant, with the difference between strategies more pronounced in Chinese language than in mathematics.
- **Order did not matter but timing did.** Sequence effects were non-significant, while the first four-week block produced larger gains than the second (0.93 versus 0.39).

## How the comparison was set up

Forty-six students were recruited and randomly assigned to two groups of 23; ten were excluded for incomplete participation or a missed post-test, leaving 18 per group. Groups were equivalent at pre-test (3.15 versus 3.06, p = 0.394). In weeks 1–4 one group worked with the AI and the other with teachers; in weeks 5–8 they swapped, so every participant experienced both conditions and served as their own control.

Each week students drafted an instructional design and then revised it with either the AI or a frontline teacher. Assessment was an on-site, two-hour, offline design task marked by frontline experts, and texts requiring re-scoring accounted for 4.2% of the total. The AI condition used DeepSeek-V2; the teacher condition used teaching experts from partner schools.

## What the dimension split suggests

The dimension-level result is the most useful part of the study for anyone designing a mixed model. Teacher feedback outperformed on teaching-objective design, the part of the task that requires deciding what learning should be evidenced and at what standard. The AI outperformed on teaching-process design, the part that benefits from generating and sequencing activities. The authors offer a plausible explanation from post-hoc interviews: the [[llm|language models]] were largely trained on designs written by frontline teachers, so their output converges on conventional practice, which helps with activity generation but adds little critical distance on objectives.

Their non-significance caveat is worth repeating. A non-significant difference is not evidence of equivalence, especially with 18 participants per condition, and the authors say so directly. What the data support is that neither mode dominated on the total score, not that the two are interchangeable.

The learning-experience result is the sharper signal. On the flow measure, which covers concentration, intrinsic interest, sense of control and willingness to persist, the teacher condition led on every dimension. The self-report table shows the same pattern across concentration, deep learning and willingness to continue, while goal attainment was identical, meaning both conditions produced usable revisions.

## What this means for practice

- **Faculty developers.** Use AI for the parts of design work that benefit from generating options — activities, sequences, materials — and keep [[human-in-the-loop-ai|human review]] on the objective-setting stage, where this study found AI weaker.
- **Instructors.** Do not read "no significant difference" as "either is fine"; the learning-experience gap is real and affects whether students stay engaged with revision.
- **Teacher educators.** Build in explicit feedback comparison, asking pre-service teachers to contrast AI suggestions with expert feedback, so the difference in what each notices becomes part of the curriculum.
- **Researchers.** Report dimension-level and experience outcomes alongside total scores; the total-score comparison hid two opposite effects.

## Limitations

- **Small analytic sample.** N = 36 after attrition, 18 per group, producing wide confidence intervals and leaving subject-specific analyses underpowered.
- **Single institution.** All participants were third-year primary-education majors aged 21–22 at one Chinese normal university.
- **Short horizon.** Eight weeks is enough to detect change but says nothing about retention.
- **One AI platform and a novelty effect.** Only DeepSeek-V2 was used, and first exposure to AI interaction may have inflated early engagement.
- **Instrument not validated.** The instructional design competence measure was not subjected to exploratory or confirmatory factor analysis.
- **Carryover cannot be excluded.** The crossover controlled individual differences, but the significant period effect shows gains shrank in the second block, and competence is cumulative.

## Citation

Wang, B., Zhang, Q., Zheng, W., Jiang, Y., Gao, J., & Li, M. (2026). [*Comparing human-AI collaboration and teacher-student collaboration in developing pre-service teachers' instructional design competence: an experimental study*](https://doi.org/10.3389/fpsyg.2026.1869502). Frontiers in Psychology, 17, 1869502.
