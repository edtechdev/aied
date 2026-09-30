---
title: "Bringing Artificial Intelligence Literacy Into Online Education: Machine-Learning Integration Through Geometry in K–12 Teacher Professional Development"
created: "2026-09-29T20:05:00-04:00"
updated: "2026-09-29T20:05:00-04:00"
type: article
published: "2026-05-06"
sources: ['raw/papers/sung-ai-literacy-unplugged-ml-k12-pd-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study, thematic analysis]
discipline: [math education]
level: [k 12, teacher education]
audience: [instructors, faculty developers, curriculum designers]
foundations: [ai-literacy, computational-thinking, teacher-ai-competency]
pedagogy: [self-efficacy, online-teaching-and-learning, professional-training]
technology: [machine-learning]
assessment: [self-report-measures]
methods: [mixed-methods-research, qualitative-research]
ethics: [explainable-ai, digital-divide]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** This study reports an online [[professional-training|professional development]] program that taught [[ai-literacy|AI literacy]] to ten K–12 educators by embedding [[machine-learning|machine learning]] in [[math-education|geometry]] instruction, deliberately without complex software. Working from [[explainable-ai|explainable machine learning]], the authors had participants build an "explainable feature matrix" — a visible table of yes/no features for classifying 2D shapes — so the algorithm could be simulated, decomposed, and inspected rather than accepted as a black box. [[self-efficacy|Self-efficacy]] toward AI use rose from below-moderate (M = 3.13) to above-moderate (M = 3.71), intention to integrate AI in teaching rose from 3.29 to 3.63, and negative descriptors in a 30-second word-association task fell from 30% of participants to 0%. The design is small, [[self-report-measures|self-reported]], and uncontrolled, but it offers a concrete model for [[k-12|K–12]] AI literacy in open and distributed learning contexts where resources and prior knowledge vary.

## Key Findings

1. **Unplugged by design, not by accident.** The ten educators classified 2D geometric shapes by hand, building explainable feature matrices that made the algorithm visible; the only tools were Code.org's sorting game, Google Slides activity sheets, and Zoom for synchronous delivery.
2. **AI self-efficacy moved from below- to above-moderate.** General [[self-efficacy|self-efficacy]] toward AI use rose from M = 3.13 to M = 3.71, self-efficacy for integrating AI in teaching from M = 3.31 to M = 3.66, and the composite from 3.23 to 3.68.
3. **The word-association shift was the sharpest result.** Before the program 30% of participants used negative descriptors such as scary, complex, and overwhelming; afterward none did, positive words rose from 20% to 50%, and non-responses fell from 20% to 10%.
4. **Classification language entered participants' vocabulary.** No pre-intervention response mentioned categorization; afterward five of ten used words such as categorize, classify, hierarchy, and order, and "made AI explainable and learnable" was the most common reflection theme (7 of 10).
5. **Recommendation-algorithm accounts grew more sophisticated.** Similarity-only explanations fell from 70% to 40% of responses, while a new theme — that AI uses "more information from data collected," including what other buyers chose — appeared in 30%.
6. **Intentions and explainability improved alongside perceptions.** Intention to integrate AI in teaching rose from M = 3.29 to 3.63, perceived value of AI-integrated tasks from 3.26 to 3.71 (a 13.8% gain), and understanding of AI explainability from 3.00 to 3.37.

## Making the algorithm visible with an explainable feature matrix

The conceptual frame is [[explainable-ai|explainable machine learning]]: transparency a learner can simulate, decompose, and follow as a procedure (Belle & Papantonis, 2021). The authors took the ontology idea from clinical informatics (Schulz & Stenzhorn, 2007) — types, subtypes, and "is_a" relations — and turned it into a table of selected features that distinguishes one shape from another. Participants filled in a yes/no matrix (four equal sides? curved boundary?) and then tested it against new shapes, which mirrors the pattern detection, feature analysis, abstraction, evaluation, and debugging that constitute [[computational-thinking|computational thinking]] (Grover & Pea, 2013) and echoes supervised [[machine-learning|machine learning]], where outcomes are predicted from features and labels (Jordan & Mitchell, 2015). Because the algorithm *is* the table, there is nothing opaque to accept on faith: a [[teacher-role|teacher]] can see the classifier, argue with it, and revise it.

## Geometry as the bridge and online delivery as the constraint

The program chose geometry because 2D shapes were familiar content, letting AI concepts ride on [[prior-knowledge|prior knowledge]] instead of arriving as a separate technical subject. Activities moved through the four [[ai-literacy|AI literacy]] domains of Ng et al. (2021): know and understand (Code.org's sorting game and fish/trash feature examples), use and apply (identifying features of shapes on Google Slides handouts), evaluate and create (building the feature matrix), and [[ethics|ethics]] (role-playing with new shapes to see how feature selection changes outcomes and to discuss [[bias-mitigation|algorithmic fairness]]). The authors pitch this against the "double [[digital-divide|digital divide]]" — educators lacking both infrastructure and foundational [[ai-literacy|AI literacy]] — and argue that the same routine works in [[online-teaching-and-learning|online and distributed learning]] across subjects, from biological specimens and literary genres to historical events, scaling from concrete features such as color and size to abstract ones such as significance and style.

## What the ten educators reported

The evidence is descriptive and self-reported: means moved upward on every construct with no significance testing, and Appendix B reports construct statistics at N = 8 rather than the ten completers. Thematically, seven participants said the lesson made AI explainable and learnable ("simple," "logical"), six reported learning classification and more specific categorization, and five named effective classroom use. Participants also said what got in the way — one cited content difficulty, one reported technology trouble, and two felt rushed by the time frame — and asked for more real-world examples and a chance to run and debug their own models. The pre/post word shift is the authors' clearest evidence, and the reflections support it: the vocabulary of [[machine-learning|machine learning]] displaced the vocabulary of apprehension.

## What this means for practice

- **Instructors.** Teach the algorithm rather than only the tool: have [[learners]] build a feature matrix for shapes your class already knows, then test it on new cases so they see how selected features change what the classifier gets right and wrong.
- **Instructors.** Run the matrix through a role-play round with fresh examples: the study taught ethics by having participants see how feature choice produced biased or surprising outcomes, not by lecturing about fairness.
- **Faculty developers.** Build online [[professional-training|professional development]] to raise [[teacher-ai-competency|teacher AI competency]] around content teachers already teach: the gains here came from geometry, not [[generative-ai|generative AI]] tools, and participants were novices (mean AI familiarity 2.10 out of 5; educational AI tools 1.75).
- **[[curriculum-design|Curriculum]] designers.** Treat the feature matrix as a reusable routine across subjects — the authors name biological specimens, literary genres, and historical events — adjusting difficulty by making the features more or less abstract.

## Limitations

- Ten educators (eight in-service, two [[teacher-education|preservice]]) from online PD sessions at one university in a northeastern US state, all of whom completed the program; with no control group, pre/post gains cannot be attributed to the intervention.
- Every outcome is self-report — self-efficacy, ease of use, value, intention, and explainability items — and the reported construct statistics run at N = 8, not the ten completers; the authors state that significance could not be determined.
- Sentiment and application findings rest on a 30-second word-association prompt with only seven matched pre/post responses.
- The authors record time constraints as a real limitation: two participants reported feeling rushed through the activities.

## Citation

Sung, W., & Gunpinar, Y. (2026). [*Bringing Artificial Intelligence Literacy Into Online Education: Machine-Learning Integration Through Geometry in K–12 Teacher Professional Development*](https://doi.org/10.19173/irrodl.v27i2.9140). *International Review of Research in Open and Distributed Learning*, 27(2), 21-45.
