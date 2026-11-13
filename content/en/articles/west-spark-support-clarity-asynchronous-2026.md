---
title: "Exploring the Role of Generative AI in Enhancing Perceptions of Support and Clarity in Online Asynchronous Classes"
created: "2026-11-10T19:39:31-05:00"
updated: "2026-11-10T22:25:00-05:00"
type: article
sources: ['raw/papers/west-spark-support-clarity-asynchronous-2026.md']
source_url: "https://openprairie.sdstate.edu/ijrpld/14"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [survey]
methods: [quantitative-research]
level: [higher ed, adult learning]
audience: [instructors, instructional designers, administrators]
technology: [generative-ai, conversational-ai, intelligent-tutoring]
pedagogy: [scaffolding, sociocultural-learning]
assessment: [feedback]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** West, Clark and Hanshaw (2026) compared students who used Spark, a custom Socratic [[generative-ai|generative AI]] assistant built for Azusa Pacific University Global's asynchronous online courses, with students who did not, using 4,587 end-of-course surveys across multiple terms. Spark users reported slightly higher Student Experience (4.54 vs 4.49, p = .011, Cliff's δ = 0.041) and Sense of Clarity (4.56 vs 4.49, p < .001, δ = 0.079), and the associations survived controls for course and instructor. Sentiment analysis of open comments found no significant group differences. The authors are careful about the inference: the pattern is consistent with Spark serving some functions of a Vygotskian [[sociocultural-learning|More Knowledgeable Other]], but the design cannot show that [[intelligent-tutoring|Spark]] caused the difference or that learning improved.

## Key Findings

1. **Both outcomes differed by a small amount.** On a survey scale where both groups averaged above four on a five-point scale, Spark users were 0.05 points higher on Student Experience and 0.07 higher on Sense of Clarity.
2. **Controls did not remove the association.** Multiple regression adjusting for course and instructor variation kept Spark use significant for both constructs (b = 0.054 for Student Experience; 0.071 for Sense of Clarity).
3. **Sentiment did not differ.** Open-ended comments from Spark users and non-users had statistically indistinguishable affective tone (M = 0.21 vs 0.24, p = .221, δ = -0.039), and a second comment set showed a non-significant difference in the other direction.
4. **Effects are small by the authors' own measure.** Cliff's delta of 0.041 and 0.079 fall well below conventional thresholds for a meaningful effect, which the paper reports plainly.
5. **The construct is perception, not learning.** The survey measures encouragement, engagement, support, clarity, structure and feedback, not achievement, persistence or transfer.

## What Spark is and how it was studied

Spark is a custom-built Socratic assistant for APU Global's online asynchronous courses, distinguished from general chat tools by being course-specific and designed to ask questions rather than supply answers. The study draws on Vygotsky's zone of proximal development and the More Knowledgeable Other construct: in asynchronous courses, students may lack the timely guidance a present instructor or peer would provide, and a course assistant could occupy part of that role.

The dataset combined end-of-course surveys across multiple terms, yielding 4,587 completed responses. Students were grouped by self-reported Spark use: 1,514 users and 3,073 non-users. The survey produced two composites — Student Experience (encouragement, engagement, support) and Sense of Clarity (instructional clarity, structure, feedback). Because responses were non-normal, the authors used Mann-Whitney U tests and Cliff's delta for effect size, then multiple linear regression to control for course and instructor.

## What the results do and do not show

The group differences are statistically significant and consistent across the non-parametric and regression analyses, which is the strongest part of the design. The authors also controlled for course and instructor, addressing the most obvious confound: Spark may be used more in courses that are already well organized or taught by instructors who emphasize support.

The effect sizes are the counterweight. A Cliff's delta of 0.041 on Student Experience means the distributions overlap almost entirely; the practical difference between a 4.54 and a 4.49 average is negligible on a five-point scale. The paper says this directly rather than overselling the result, and it describes the pattern as "consistent with, though not evidence of" Spark serving MKO functions.

The sentiment analysis is a useful negative result. If Spark users were more engaged or more positive, open comments might show it; they do not. That does not undermine the survey finding, but it suggests the difference is narrow rather than a broad shift in how students experience the course.

Selection is the unresolved problem. Students choose whether to use Spark, and students who seek help may differ from those who do not in motivation, prior preparation or course engagement. The regression controls course and instructor, not student characteristics. A student who uses an optional assistant and reports a slightly better experience may be the kind of student who would report a better experience anyway.

## What this means for practice

- **Treat course-specific assistants as a support layer, not a learning intervention.** The evidence here is about perceived clarity and support, which are worth having but are not achievement.
- **Expect small effects from optional tools.** A 0.05-point difference on a five-point scale will not close a completion gap; it may improve the margin.
- **Build the Socratic behavior deliberately.** Spark's design difference — asking rather than answering — is the plausible mechanism, and it is worth preserving when adapting the approach.
- **Measure use, not just satisfaction.** Self-reported use and end-of-course surveys cannot separate the tool's effect from the user's disposition.
- **Run a design that can attribute change.** A within-course comparison with pre/post measures, or random assignment to Spark access, would answer the question this study cannot.

## Limitations

- The study is observational: students self-selected into Spark use, and the analysis cannot rule out motivation or prior achievement as explanations.
- Outcomes are self-reported perceptions from end-of-course surveys, not learning measures; no achievement, persistence or transfer data are reported.
- Effect sizes are small (δ = 0.041 and 0.079), and the practical significance of a 0.05–0.07 difference on a five-point scale is limited.
- The sample comes from one online institution's courses, and course and instructor controls may not capture differences in course design or student population.
- Sentiment analysis used two comment subsets with modest samples (509/883 and 174/336), and commenters may not represent the survey population.

## Citation

West, T. H., Clark, J. L., & Hanshaw, G. O. (2026). [*Exploring the Role of Generative AI in Enhancing Perceptions of Support and Clarity in Online Asynchronous Classes*](https://openprairie.sdstate.edu/ijrpld/14). The Interdisciplinary Journal for Research on Pedagogy and Learning Design, 1(1).
