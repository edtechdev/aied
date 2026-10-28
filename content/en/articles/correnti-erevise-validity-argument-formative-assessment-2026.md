---
title: "Replicating and Expanding a Validity Argument for eRevise as a Formative Assessment: Empirical Support for Theories of Conceptual Change"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Correnti, R.", "Matsumura, L. C.", "Wang, E. L.", "Litman, D.", "Liu, Z.", "Zhang, H.", "Li, T."]
published: "2026"
venue: "Assessing Writing"
source_url: https://doi.org/10.1016/j.asw.2026.101095
foundations: [ai-education, theories-and-frameworks, interpreting-and-applying-aied-research]
pedagogy: [metacognition, self-regulated-learning, sociocultural-learning, student-ai-interaction]
technology: [educational-nlp, machine-learning, human-in-the-loop-ai]
assessment: [assessment-validity, automated-essay-scoring, formative-assessment, feedback, self-report-measures, process-oriented-assessment]
methods: [quantitative-research, ai-ed-evaluation]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [quasi-experiment, survey]
discipline: [writing education]
level: [primary education]
audience: [researchers, assessment designers, educational technology developers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/correnti-erevise-validity-argument-formative-assessment-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Correnti, Matsumura, Wang, Litman, Liu, Zhang, and Li (2026) replicate and extend a validity argument for eRevise, an [[automated-essay-scoring|automated writing evaluation]] system in which fifth- and sixth-grade students draft a text-based argument, receive automated feedback on their use of evidence, and revise. With 34 teachers and 609 students across eight Louisiana parishes, analyzing three writing outcomes rather than one, they find that all three sociocultural mechanisms from their earlier argument recur: students improved on feature scores from feedback alone, classrooms with more substantive teacher responses improved more, and students who asked for help gained most where the teacher was formative. The share of students giving a conceptual rather than procedural explanation of evidence use rose from about 18% on the fall form to about 42% on the spring form. The authors read this as empirical support for theories of [[sociocultural-learning|conceptual change]], while conceding the design cannot separate eRevise practice from maturation or from classroom writing instruction.

## Key Findings

- **The mediation pattern replicated on a second task.** On the space-exploration form (RTFAspace), students who only interacted with the automated feedback still grew on the measured features: NPE γ00 = .40 (dz = .46), SPCfocal γ00 = 1.74 (dz = .67), and word count γ00 = 69.38 (dz = .57), each significantly greater than zero after covariate adjustment. The classroom-level effect of substantive teacher responses was γ01 = .24 (p < .05) for feature improvement, and the individual interaction for students who asked for help was γ61 = .19 (p < .05).
- **The same mechanisms held on two further outcomes.** For human-scored quality of revision, the classroom-level effect was γ01 = .13 (p < .10); for the automated count of successful revision sentences added, it was γ01 = .26 (p < .10). The individual help interaction stayed positive but non-significant for that third outcome. The finding is relatively robust to how evidence-use improvement is measured.
- **Initial status did not have a consistent relationship with improvement.** The association between first-draft rubric score and improvement was negative for feature improvement, near zero for quality of revision, and positive for the number of successful sentences added. But for two of the three outcomes, more interactive teaching flattened the slope: in classrooms with substantive teacher responses, the initial-status effect fell to γ11 = −.11 (p < .05) for quality of revision and γ11 = −.18 (p < .05) for sentence counts, so that γ10 + γ11 approached zero. Low-starting students gained most access to improvement where teachers interacted more.
- **Prior metacognitive reflection predicted later revision performance.** Students who wrote a takeaway about evidence use on the earlier form showed greater feature improvement on RTFAspace (n = 180; γ110 = .24, p < .01 in the final model), holding demographics and prior writing constant. The association did not appear on the other two outcomes.
- **Conceptual explanations of evidence use roughly doubled between forms.** About 18% of students gave a conceptual explanation on the fall form against about 42% on the spring form (18.1% versus 41.9%). Nearly all of the fall conceptual students were conceptual again in the spring, and paired t-tests showed significant gains for students starting at scores 0, 1 and 2.
- **Prior eRevise experience was only marginally associated with deeper schema.** Students with prior practice scored 45.0% conceptual against 41.1% for first-timers. After adjusting for pre-survey items, initial rubric score and initial word count, the residual difference was not significant (t = 1.47, df = 479, p = .071, 95% CI = −.047 to .324).
- **The interaction benefit concentrated at feedback levels 1 and 3.** The help-by-substantive-interaction effect was significant for level 1 (γ91 = .35, .48, .24 across outcomes, first two significant) and level 3 (γ131 = .52, .42, .84, all three significant), but not level 2 (γ111 = .25, .08, −.07). Eight of nine coefficients were positive where teachers interacted substantively but the student had not asked for help.
- **Students who skipped the survey scored higher, not lower.** Missing the student survey predicted higher revision scores on two of three outcomes (γ90 = .30 for feature improvement, .82 for quality of revision, 1.55 for sentence counts). The authors treat omission as plausibly missing at random rather than evidence of poor performance.

## Study Design

- **The system.** eRevise is built on the Response-to-Text Formative Assessment (RTFA), a measure of students' ability to marshal text evidence in analytic writing. It runs over two class periods, no more than five school days apart: the teacher reads an article aloud with planned questions and vocabulary support, students draft an essay, then students log back in to see automatically generated feedback and revise. Feedback targets relevance and comprehensiveness of the selected evidence, and explanation of how evidence connects to a claim. Three message levels move from adding evidence, through adding detail, to explaining and linking evidence to the main idea. Messages are bulleted points beginning with an action verb, not rubric scores.
- **The sample.** The study ran in eight public parishes in Louisiana, described as representative of state demographics (47% White, 42% African American, 4% Latinx, 2% Asian, 5% other; about 70% eligible for free or reduced-price lunch). Thirty-four English language arts teachers participated, primarily female (94%), mostly White (82%), averaging just over nine years of experience (range 1 to 23); 16 taught fifth grade and 18 sixth grade. Classes averaged 17.9 students (range 10 to 37). In all, 609 fifth- and sixth-grade students completed RTFAspace, and 240 had used eRevise earlier in the year.
- **Outcomes.** Four outcomes were examined: an automated feature improvement factor score combining change in topic breadth (NPE), change in unique specific evidence for the focal topics (SPCfocal) and change in word count (WOC); a human-scored holistic quality of revision on a 0 to 3 scale (83% exact agreement, Cohen's κ = .75); an automated count of successful revision sentences added, recoded to 0 to 6 because of skew; and a rubric score for students' takeaway about evidence use, from procedural (1) to conceptual (4).
- **Independent variables.** Teacher implementation was scored 1 to 4 on substantive responses, from surface exchanges about typing into the system up to largely dialogic exchanges or specific cues to use evidence. Student covariates came from surveys about writing attitudes, feedback comprehension and use, whether they re-read the article, whether they judged the revision better, and whether the teacher helped. Average revision time was about 23 minutes (range 12 to 37).
- **Analysis.** Two-level hierarchical linear models in HLM 7.01, with students nested in classrooms, ran for each outcome: a fully unconditional model, a covariate-adjusted model, and a final random-intercept random-slope model adding substantive teacher responses as a classroom predictor and a cross-level interaction with students' reports of asking for help. A second set of models dropped the intercept to test effects within each feedback level, and schema-score analyses used distributions, paired t-tests and covariate-adjusted residuals.
- **The validity argument.** The paper adapts Kane's argument-based framework to [[formative-assessment|formative assessment]] by stating claims and backing across five inferences: evaluation, generalization, explanation, extrapolation and utilization. The study focuses on generalization, the latter part of extrapolation and utilization, and treats the post-revision reflection question as a designed interim assessment.

## What this means for practice

- **Treat feedback as a site for discussion, not a delivery.** The consistent finding across three outcomes is that students gained most where teachers engaged substantively with the feedback students asked about. Designing eRevise for human-human interaction, as the authors put it, matters more than the message text alone.
- **Protect time for teacher response during revision.** Classrooms were scored on how teachers answered student questions, and the gain concentrated where teachers gave dialogic or evidence-focused responses rather than procedural directions. Scheduling revision time and preparing responses to likely questions is a low-cost lever.
- **Use more than one outcome to judge improvement.** The authors argue that counting argument elements and judging holistic coherence answer different questions, and their own results show the three outcomes do not move together. Rubrics for adaptive expertise should value skill uptake and coherence together.
- **Build in a reflection step after revision.** Asking students what they learned about evidence use, then use again, is a cheap [[metacognition|metacognitive]] opportunity that the authors link to encoding schema for later retrieval, and students' answers on one form predicted feature improvement on the next.
- **Expect uneven benefit by starting point and do not read a blank reflection as a weak student.** Where teachers interacted more, the advantage of a strong first draft largely disappeared. Interactive implementation appears to widen access rather than reward the already-strong writer. Students who skipped the survey scored higher on two of three outcomes, so missing data here is not a usable proxy for poor performance.

## Limitations

- **No control group.** Growth cannot be attributed to eRevise: it may reflect extra time to revise, maturation, or classroom writing instruction, and the authors call for between-groups designs reporting Cohen's ds.
- **No student-level demographics or reading data.** Without reading achievement and racial or economic demographics the authors cannot examine bias in the sample or in the training corpora, and they cite documented algorithmic bias in automated essay scoring and gender bias in LLM feedback.
- **Comparisons across forms are confounded.** The fall-to-spring gain in conceptual explanations mixes different student populations, different test forms and accumulated writing instruction. The covariate-adjusted comparison of students with and without prior practice reached only p = .071.
- **Power shrinks when the sample is split by feedback level.** Contrasts between students who asked for help and those who did not mostly failed to reach significance, which the authors describe as a conservative test given the limited power.
- **Human scoring carries its own reliability.** Quality of revision reached 83% exact agreement and κ = .75, and two of the three raters were co-authors.
- **The teacher covariate is observational and the survey was voluntary.** Substantive teacher responses were measured from teachers' own implementation logs rather than assigned, so the classroom-level effects are associated effects, not causal estimates. Only about 75% of students gave a takeaway about evidence use, and the schema-score analyses depend on who responded.

## Citation

Correnti, R., Matsumura, L. C., Wang, E. L., Litman, D., Liu, Z., Zhang, H., & Li, T. (2026). [*Replicating and expanding a validity argument for eRevise as a formative assessment: Empirical support for theories of conceptual change*](https://doi.org/10.1016/j.asw.2026.101095). *Assessing Writing*, 70, 101095.
