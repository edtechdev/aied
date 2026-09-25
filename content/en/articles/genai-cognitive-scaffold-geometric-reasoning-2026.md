---
title: "Generative AI-supported instruction as a cognitive scaffold: effects on senior high school students' geometric reasoning and proof construction"
created: "2026-09-25T11:42:33-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/genai-cognitive-scaffold-geometric-reasoning-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [math education]
level: [secondary]
audience: [instructors, curriculum designers, instructional designers, researchers]
foundations: [cognitive-offloading, theories-and-frameworks]
pedagogy: [cognitive-psychology, prior-knowledge, problem-solving, scaffolding, student-ai-interaction, student-engagement]
technology: [conversational-ai, generative-ai, visualization]
assessment: [feedback, learning-gains, self-report-measures]
methods: [quantitative-research, research-methods-aied]
ethics: [global-south]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This quasi-experimental pre-test/post-test study with 86 senior high school students in Ghana tested [[generative-ai|generative AI]] as a cognitive and representational [[scaffolding|scaffold]] for geometry, built to prompt and question rather than solve. The experimental group outscored the control on a geometry reasoning and proof test, and the advantage held after adjusting for baseline performance. [[visualization|Visualization]] alone does not build proof skill, so the paper positions AI as the bridge from visual intuition to deductive argument, reading the result through Van Hiele's levels and [[cognitive-offloading|Cognitive Load Theory]]. Perceptions of [[feedback]] and explanation quality were favorable, but only the experimental group was surveyed and the paper never names the GenAI model or the data-collection window, so read it as evidence that a well-scaffolded [[math-education|mathematics]] intervention worked, not that a particular tool did.

## Key Findings
1. Quasi-experimental pre-test/post-test nonequivalent control group design: 86 students from two intact Ghanaian senior high school classes, 43 per group, from a population of 558.
2. The experimental group rose from 12.37 (SD = 3.04) to 21.74 (SD = 4.42) on the Geometry Reasoning and Proof Test, t(42) = −18.410, p < .001; the control group rose from 13.21 (SD = 2.82) to 16.79 (SD = 4.76), t(42) = −5.843, p < .001.
3. Post-test scores differed significantly between groups, t(84) = −4.999, p < .001, d ≈ 1.05.
4. The ANCOVA controlling for pre-test scores showed a significant effect of instructional group, F(1, 83) = 50.30, p < .001, partial η² = .377, with the model explaining approximately 50.3% of post-test variance (R² = .503, Adjusted R² = .491).
5. The groups did not differ significantly at pre-test, t(84) = 1.325, p = .189, supporting baseline comparability of the intact classes.
6. Experimental-group students reported favorable perceptions (overall mean 4.10 on a 5-point scale, items 3.81–4.23), highest for feedback ("The feedback provided by generative AI helps me correct my mistakes," M = 4.23, SD = .812), lowest for explaining answers (M = 3.81, SD = 1.180).
7. Attitudes were similarly positive (overall mean 4.13, items 3.91–4.47); strongest was that using generative AI during geometry lessons improves understanding (M = 4.47, SD = .631), lowest was confidence in using technological tools (M = 3.91, SD = .840).

## Design and the instructional intervention
Sample size came from a G*Power analysis (two-tailed d = 0.80, α = 0.05, power 0.80, 1:1 allocation), yielding 86 students selected by convenience sampling. Measurement used the Geometry Reasoning and Proof Test (GRPT), with multiple-choice and open-ended items, plus a five-point Likert perception and attitude questionnaire; both groups shared one teacher, the same content, and equivalent instructional time. A pilot with 30 excluded senior high school students established instrument quality: Spearman-Brown split-half reliability 0.859 for the GRPT and Cronbach's alpha of 0.878 (perception) and 0.914 (attitude).

[[generative-ai|Generative AI]] was positioned as a cognitive and representational [[scaffolding|scaffold]], explicitly not a problem solver: it generated dynamic representations and guided prompts that pushed students to justify the geometric relationships they saw, identify relevant theorems, and order logical statements; it would not supply complete proofs or final answers, and its outputs drove teacher-led discussion aimed at independent thinking. This maps onto the study's two anchors: Van Hiele's progression from visual recognition toward formal deduction, and Cognitive Load Theory's argument that offloading diagram interpretation frees working memory for theorem selection and proof sequencing.

## Results: performance, then perceptions
Levene's test satisfied equality of variances (pre-test p = .640, post-test p = .769), permitting equal-variance t-tests, and normality held at pre-test; the control group's failed Shapiro–Wilk post-test (p = .025) was judged tolerable given roughly equal groups above 30 and a consistent bias-corrected bootstrap. Analysis used IBM SPSS Statistics Version 27.

The performance gap is the study's core [[learning-gains|learning gain]]: after adjustment for [[prior-knowledge|prior performance]] in the ANCOVA, group membership remained a strong predictor of post-test score (F(1, 83) = 50.30, p < .001), and pre-test score was itself a significant covariate (F(1, 83) = 45.72, p < .001, partial η² = .355).

Perceptions and attitudes came from descriptive statistics and only from the experimental group: [[student-engagement|Engagement]]-adjacent items scored highest — useful [[feedback]], clear explanations, and step-by-step [[scaffolding|guidance]].

## Reading the result against the wider literature
The study joins work showing generative AI improves problem-solving outcomes when it supports reasoning rather than supplying answers; its contribution is the proof-construction target. The paper's review argues that technology-supported [[visualization|visualization]] tools — dynamic geometry environments, augmented reality, 3D printing — build spatial and conceptual understanding but do not, on their own, establish proof; visualization advances reasoning only when paired with purposeful instructional scaffolding. Positioning [[conversational-ai|dialogic, natural-language]] AI as that scaffolding is what makes this study more specific than "AI improves math achievement."

## What this means for practice
- **Instructors.** Treat the AI as a prompter, not an answer key: the intervention withheld complete proofs, leaving students to supply the theorem choice and logical order.
- **Instructional designers.** Design for the transition, not just the diagram: build prompts that demand justification of what a representation shows.
- **Curriculum designers.** Proof-oriented geometry objectives, not only spatial or conceptual ones, are a reasonable place to embed AI-supported activities.
- **Teacher educators.** Train on pedagogically appropriate use of generative AI as a scaffold for mathematical thinking, not a source of answers.
- **Researchers.** The study measured performance, not the theorized visualization and reasoning processes; direct measures of those are the next step.

## Limitations
- Stated limits: a single-school quasi-experimental design constraining generalizability; the cognitive processes behind the improvement, especially visualization, went unmeasured; and perceptions and attitudes came only from the experimental group.
- The generative AI tool and version are never named and no data-collection window is given, so results cannot be tied to a particular model generation — a reproducibility gap.
- Reported pre-test means are inconsistent: the independent-samples table and text give the experimental group 13.21 (SD = 2.82) and the control group 12.37 (SD = 3.04), while the paired-samples table and text swap those values. The equivalence conclusion (p = .189) is unaffected, but the baselines should be read with caution.
- The design cannot rule out teacher, novelty, or selection effects, and the paper frames the findings as instructional effectiveness, not causal evidence.

## Connected Concepts
- [[generative-ai]]
- [[scaffolding]]
- [[visualization]]
- [[conversational-ai]]
- [[cognitive-psychology]]
- [[prior-knowledge]]
- [[problem-solving]]
- [[student-ai-interaction]]
- [[student-engagement]]
- [[feedback]]
- [[self-efficacy]]
- [[learning-gains]]
- [[math-education]]
- [[quantitative-research]]
- [[global-south]]

## Connected Articles
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails can harm learning: Evidence from high school mathematics
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred Scaffolding Does Not Lead to Better Learning Performance: Empirical Evidence from AI-Supported Mathematical Modelling
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathematical Reasoning in High-Stakes Environments
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving
- [[hazel-prover-classroom-proof-assistant-2026]] — Hazel Prover: A Classroom Proof Assistant for Learning Structural Induction
- [[genai-math-relevance-intervention-2026]] — Utilizing generative AI to promote high school students' personal relevance to math and interest in the math class: An intervention
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build

## Citation
Davor, I. (2026). [*Generative AI-supported instruction as a cognitive scaffold: Effects on senior high school students' geometric reasoning and proof construction*](https://doi.org/10.3389/feduc.2026.1869961). *Frontiers in Education*, 11, 1869961.