---
title: "Investigating Secondary School Students’ Shared Epistemic Agency with GAI in Online Scientific Explanation Writing"
created: "2026-10-16T07:00:00-04:00"
updated: "2026-10-16T13:16:04-04:00"
type: article
sources: ['raw/papers/chang-shared-epistemic-agency-gai-scientific-writing-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [thematic analysis]
discipline: [science education, language learning]
level: [middle school]
audience: [instructors, educational technology developers, researchers]
pedagogy: [inquiry-based-learning, scaffolding, self-efficacy, student-ai-interaction, collaborative-learning, prior-knowledge, metacognition]
technology: [generative-ai, llm, prompt-engineering, conversational-ai, pedagogical-agent]
assessment: [formative-assessment, process-oriented-assessment]
foundations: [agency, human-ai-collaboration, cognitive-offloading, critical-thinking]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
ethics: [multilingual-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Chang and colleagues report how 122 seventh graders in Taiwan enacted [[agency|epistemic agency]] while writing scientific explanations in English with a [[generative-ai|ChatGPT]]-based teaching assistant embedded in a bilingual inquiry unit on photosynthesis. Coding 6,788 conversation turns produced a 14-category scheme: seven ways of reaching student–GAI shared epistemic agency (SEA), seven falling short of it, and 59% of turns at the shared level. Over 80% of students reached SEA at least once, yet among five prior measures only English midterm performance remained correlated with agency frequency after adjustment, and a four-profile clustering of prior proficiency and [[self-efficacy]] explained SEA differences in just one of four activities. The contribution is a design argument — [[prompt-engineering]] can be engineered to withhold answers and preserve room for students — alongside candid evidence that enacted agency is activity-specific rather than a stable learner trait, and the authors are explicit that the study identified associations, not causal effects.

## Key Findings

1. Participants were 122 [[k-12|junior high]] school students (57 female, ages 12–13) in four classes at a public school in Taiwan. They worked through an adapted Web-based Inquiry Science Environment (WISE) unit across three 45-minute sessions, and the analysis focused on four activities (6, 10, 11, and 12) in which students wrote English scientific explanations with the GAI assistant.
2. Coding 6,788 student–GAI turns yielded 14 categories: seven indicating SEA and seven indicating non-SEA (three "some EA" and four "little EA"). Overall, 59% of student turns were coded as SEA and 41% as non-shared EA.
3. More than 80% of students demonstrated SEA at least once across the four activities; the highest proportion was Activity 11 (93%). About two-thirds of students showed SEA more frequently than non-shared EA, meaning SEA was the dominant form of agency for most of the sample.
4. Students' EA frequency showed small positive correlations with all five prior measures, ranging from r = .13 to .25. After Holm adjustment within construct domains, only prior English midterm examination performance remained significant (r = .25, raw p = .02, Holm-adjusted p = .05).
5. A k-means clustering retained a four-profile solution (28 confident high achievers, 38 English-oriented learners, 32 science-confident learners, 24 less-confident learners; adjusted Rand index = .58). After adjustment, only Activity 11 showed an association between learner profile and ever achieving SEA (Cramér's V = .32, exact p = .01, Holm-adjusted p = .04).
6. Prompt implementation fidelity was high. Of 1,049 GAI turns from one randomly selected class, none took a dominant role by supplying answers directly, and only 12 (approximately 1.1%) failed to identify students' needs and give the intended feedback — an overall 98.9% consistency between intended and observed GAI performance.
7. Roughly 20% of student–GAI interactions involved either directly copying GAI-generated text as an answer or stating that they did not know the answer in hopes the GAI would supply it. The authors treat this as limited rather than pervasive [[cognitive-offloading]], and decline to frame the near-40% of turns with little EA as a failure to be extinguished.

## Engineering prompts that withhold answers

A common design principle for supporting students' epistemic agency is to constrain the assistant from providing direct answers, and this study applied that principle rigorously. The GAI teaching assistant — a GPT-4-series model accessed through the WISE platform by API — was prompted to act as a facilitator rather than an answer provider, and the authors adapted the AIPROMT prompt-engineering framework, integrating Content and Language Integrated Learning (CLIL) pedagogy and epistemic-agency perspectives, to design it. The prompts specified GAI's role as a science and English [[teacher-role|teacher]] for seventh graders, capped replies at two or three sentences, forbade directly giving answers and explanations, and supplied examples of formative feedback so the assistant would route students toward using model data as evidence, offer sentence starters, and correct grammar while explaining the error. The authors describe the resulting design as articulating, refining, offering, and managing, and report that the assistant mostly enacted the intended role without taking over students' epistemic responsibility. Because only the assistant's turn-level behavior in one class was audited, the fidelity figure describes how that design performed in this unit, not how robust such prompts are generally.

## Seven mechanisms of shared epistemic agency

The study's central analytical product is an operationalization of SEA in student–GAI interaction, extending a construct previously studied mainly in peer collaboration. The seven SEA categories, listed from most to least frequent, were: co-constructing (intermediate) ideas with GAI, composing original explanations or expressing own ideas to GAI, collecting additional information from GAI, organizing or synthesizing concepts or ideas with GAI, reflecting on actions, ideas, or problems with GAI, critiquing GAI's question, expression, or idea, and discussing [[misconceptions]] with GAI. The seven non-SEA categories split into "some EA" — refusing to work with GAI, conceding one's own difficulty to GAI, relying on GAI's help — and "little EA" — avoiding effort, off-task engagement, negative emotional response, and amotivation. The authors argue that the higher-level practices, such as constructing, organizing, and reflecting with GAI, carry genuine [[metacognition|metacognitive]] and cognitive demands, and that this warrants extending conceptualizations of SEA beyond the dispositional, [[motivation|motivational]], and positional dimensions to include cognitive and metacognitive ones.

## Learner profiles explain little of the variation

Prior proficiency and self-efficacy were treated as resources students deploy rather than fixed predictors, and the profile-oriented analysis found only narrow support for their role. The strongest pairwise associations among the five clustering variables were between prior science knowledge and English midterm performance (r = .58), English learning self-efficacy and English midterm performance (r = .55), and prior science knowledge and inquiry performance (r = .51); an auxiliary check found no severe redundancy (maximum VIF 2.03). Descriptively, low-proficiency, low-confidence students still reached SEA: in Activity 6 more than 90% of students in every profile achieved SEA at least once, and in Activity 12 the proportions were 89% (C1), 84% (C2), 92% (C3), and 76% (C4). Across all four profiles the share demonstrating more SEA than non-SEA rose from Activity 10 to Activity 11 — from 74% to 91% in C1, 75% to 91% in C2, 50% to 69% in C3, and 62% to 70% in C4 — a descriptive pattern the authors read as students growing more familiar with both the epistemic and the linguistic demands. The one profile effect that survived adjustment appeared only for the ever-achieved-SEA outcome in Activity 11, which the authors caution should not be generalized beyond that activity and outcome.

## Where agency was not sustained

The paper is careful about what its null and negative results mean. Because only Activity 11 showed a profile–SEA association, and no adjusted profile association appeared for whether SEA was maintained as the dominant form of engagement in any activity, the authors conclude that student–GAI SEA was likely activity-specific. They also offer an untested conjecture: all profiles except the confident high achievers showed an initial surge in SEA in Activity 6 followed by a decline in Activity 10, which they tentatively attribute to a technology novelty effect, and all groups except the science-confident learners declined again in Activity 12, which they tentatively attribute to technology overload. Both explanations are flagged as needing experimental and longitudinal investigation. The study did not compare prompt designs or include a control condition, so it cannot show that the scaffolded GAI outperformed alternative designs or an unaided condition; what it shows is how one deliberately constrained assistant shaped the interaction turns that followed it.

## What this means for practice

- **Instructors.** Constrain the assistant so it withholds answers and asks students to justify their thinking; the fidelity data here suggest carefully written roles and examples can keep a [[conversational-ai|chatbot]] from taking over a writing task, but the prompts must be inspected, not assumed.
- **Treat agency as a target you design for, not a trait you screen for.** Low-proficiency and low-confidence students reached shared epistemic agency too, so grouping or gating by prior attainment would have excluded learners who did engage.
- **Plan for unevenness across activities.** Because SEA was activity-specific, expect both novelty surges and mid-unit declines, and build in re-engagement when a repeated task loses its pull rather than reading a dip as student disengagement.
- **Educational developers and instructional designers.** Publish the prompt design alongside the task: role, answer constraints, feedback examples, and response-length limits did the [[pedagogy|pedagogical]] work here, and the full codebook of seven SEA and seven non-SEA categories is offered as a basis for [[scaffolding|adaptive scaffolding]].
- **Researchers and administrators.** Note the modest, exploratory correlational effect sizes before adopting "proficiency predicts AI collaboration" claims; the study supports a [[human-ai-collaboration|collaboration]] design stance more than a predictive screening one.

## Limitations

- The study was conducted in one CLIL scientific-inquiry context with secondary students in Taiwan, limiting generalizability to other subject domains, age groups, and instructional contexts; limited implementation time meant students experienced only part of the inquiry cycles.
- The unit was delivered online with on-site teacher guidance, but blended-[[learning-design|learning design]] — how online and face-to-face learning combine — received limited attention.
- There was no control or comparison condition, so different prompt designs and their effects on student–GAI interactions were not tested.
- The learner-characteristic variables are not independent constructs in CLIL contexts; the profile analysis is limited by uncertainty in cluster-number selection, partition stability, and statistical power, and the model-selection indices did not converge on a single preferred number of clusters.
- Dividing 122 students among four profiles produced small expected counts and zero observed cells in several contingency tables; conditional exact tests and Holm adjustment address distributional and multiplicity concerns but not the limited power or the sample-specific nature of the analysis.
- The retained four-cluster partition is presented as an exploratory typology, not a stable learner taxonomy, and the adjusted Activity 11 association should not be generalized beyond that activity and outcome.

## Citation

Chang, H.-Y., Mau, B.-R., Liang, J.-C., & Tsai, C.-C. (2026). [*Investigating Secondary School Students' Shared Epistemic Agency with GAI in Online Scientific Explanation Writing*](https://doi.org/10.1016/j.compedu.2026.105769). *Computers & Education*, 105769.
