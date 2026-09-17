---
title: "Enhancing enthusiasm for STEM education with AI: Domain-specific chatbot as personalized learning assistant"
created: "2026-09-16T09:14:31-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [motivation, socratic-method, student-engagement]
technology: [personalized-learning, rag]
sources: ['raw/papers/domain-specific-chatbot-stem-enthusiasm-2025.md']
confidence: high
research_method: [randomized controlled trial, quantitative]
audience: [educators, researchers, instructional designers, edtech designers]
level: [secondary, k 12]
discipline: [stem education, math education]
methods: [rct]
systems: [technology-acceptance-model]
---

> **Synthesis:** Rücker and Becker-Genschow (2025) report a cluster-[[rct|randomized controlled trial]] of ADA, a domain-specific [[generative-ai|generative AI]] [[conversational-ai|chatbot]] customized for secondary [[math-education]], compared with conventional differentiation materials in [[stem-education]]. 195 ninth-grade students in German schools worked through the Heron method for estimating square roots in a single lesson with a pre-post assessment. Students accepted ADA strongly on every [[technology-acceptance-model]] dimension and showed significantly higher situational interest in the chatbot condition, while learning performance, emotional responses and cognitive load moved in the expected direction without reaching significance. The authors frame the performance results as trends rather than confirmed gains and conclude that ADA enhanced [[motivation|motivational]] engagement more than immediate achievement.

## Key Findings

1. The trial involved 195 ninth-grade students (91 female, 104 male) from secondary schools in Germany, with a mean age of 14.33 years (SD = 0.67); the experimental group comprised 102 students (41 female, 61 male) and the control group 93 students (50 female, 43 male).
2. Sample size planning used G*Power with an effect size f of 0.2, alpha of 0.05 and power of 0.8, producing a target of 200 participants for detecting medium between-group effects.
3. Technological acceptance was high across all four [[technology-acceptance-model|TAM]] constructs: perceived ease of use M = 3.44 (SD = 0.83), perceived usefulness M = 3.03 (SD = 0.81), attitudes toward use M = 3.01 (SD = 0.85) and perceived competence M = 3.09 (SD = 0.83), all above 3.0 on a 4-point scale.
4. [[student-engagement|Situational interest]] was significantly higher in the chatbot condition (M = 2.63, SD = 0.51) than in the control condition (M = 2.43, SD = 0.62); a Mann-Whitney U test gave p = 0.00005 and Cohen's d = 0.63, a medium positive effect.
5. Emotional responses were directionally favorable but non-significant: positive-activating emotions averaged M = 2.37 (SD = 1.03) in the experimental group versus M = 2.10 (SD = 0.96) in the control group (p = 0.053), and negative-deactivating emotions averaged M = 2.45 (SD = 1.15) versus M = 2.61 (SD = 1.15) (p = 0.265).
6. [[cognitive-offloading|Cognitive load]] increased slightly rather than decreasing: intrinsic load M = 2.75 (SD = 1.01) versus M = 2.63 (SD = 0.97) (p = 0.299) and extrinsic load M = 2.62 (SD = 0.98) versus M = 2.38 (SD = 1.02) (p = 0.060), both non-significant, contradicting prior findings of load reduction.
7. Repeated-measures ANOVA on learning performance found a significant main effect of time, F(1194) = 145.76, p < 0.001, ges = 0.22, and of group, F(1194) = 9.26, p = 0.003, but no significant group by time interaction, F(1194) = 2.84, p = 0.094; the paper therefore treats the performance advantage as a trend rather than a demonstrated gain.
8. The control group entered the intervention with higher [[prior-knowledge|prior knowledge]] (pre-test M = 8.61, SD = 8.28 versus experimental M = 3.56, SD = 4.18), yet the experimental group improved more from pre-test to post-test (M = 12.42, SD = 12.72 versus M = 9.38, SD = 12.51); these baseline differences, confirmed on all evaluable pre-test variables at p < 0.05, motivated the use of RM-ANOVA.
9. At subtask level the application task A3 showed the largest descriptive gap (experimental M = 9.44, SD = 10.37 versus control M = 6.68, SD = 11.31) and came closest to an interaction, F(1194) = 3.18, p = 0.076, while the transfer task A4.2(a) also separated the groups descriptively (M = 0.49, SD = 1.42 versus M = 0.29, SD = 1.03).
10. Every subtask produced a significant time effect (all ps < 0.001), with significant group differences for A1 (p = 0.001), A3 (p = 0.022) and A4.1 (p = 0.005), so gains from pre-test to post-test were general while group separation stayed partial.
11. Measurement models were validated with exploratory and confirmatory factor analysis: the four-factor TAM model fit almost perfectly (χ²(98) = 87.28, p = 0.773; CFI = 1.00; RMSEA = 0.00; SRMR = 0.06) and did not differ significantly from a three-factor solution (Δχ² = 4.68, Δdf = 3, p = 0.130), so the theoretically consistent four-factor model was retained.
12. The emotion, cognitive load and [[student-engagement|situational interest]] instruments each resolved into two factors, while a unidimensional situational interest model was adopted despite a statistically better two-factor fit, which the authors attribute to [[research-methods-aied|methodological]] artifacts rather than conceptual structure.
13. Interrater reliability for the two open-ended items, 4.2(a) and 4.2(b), scored by two independent raters on depth of understanding, factual accuracy and content precision, was excellent: Cohen's weighted kappa with quadratic weighting ranged from κ = 0.921 to 0.974 for composite scores and κ = 0.816 to 1.000 for individual dimensions.
14. Constructs were measured with established instruments adapted to the context and translated into German where needed: seven items for situational interest, five for emotions, five for cognitive load, and four performance items spanning reproduction, application and [[transfer-of-learning|transfer]].
15. The authors summarize the asymmetry directly: ADA proved more effective at enhancing motivational engagement than at producing immediate performance gains, attributing this to the single-lesson exposure, the dual-task demands of using a chatbot while working with paper materials, and the limited sample.

## Study Design & Method

The study used a quasi-experimental controlled intervention with cluster randomization: because of technical constraints, existing class groups were assigned intact to either the chatbot or the control condition, which the authors argue prevented contamination between conditions and strengthened external validity. Both groups received identical paper-based materials on the Heron method of estimating square roots, scaffolded from prerequisite knowledge (Worksheet 1) through geometric exploration (Worksheet 2), independent application (Worksheet 3) and critical optimization (Worksheet 4); the experimental group additionally accessed the chatbot on school laptops, while the control group used static help cards.

ADA is a Custom Generative Pre-Trained Transformer built on GPT-4 via a privacy-compliant API from the German school platform fobizz, with anonymized data transmission for GDPR compliance. It uses [[socratic-method|Socratic dialogue]] rather than direct answers, combines [[prompt-engineering]] with [[rag|retrieval-augmented generation]], draws motivational elements from [[self-determination-theory]], retrieves from a curated knowledge base covering the [[curriculum-design|curriculum]], the intervention materials and background on Ada Lovelace and the Heron method, and calls a Wolfram Alpha plugin to verify student calculations.

Data collection spanned three scheduled mathematics lessons: a single lesson for the pre-test of demographics and prior knowledge, then a double lesson for the intervention followed immediately by the post-test. Teachers followed detailed lesson plans and received a structured online briefing before the study. Assessment used four-point Likert scales throughout, with acceptance, emotions, interest and cognitive load measured only after the intervention. Analyses were run in R (Version 4.4.2), using non-parametric Mann-Whitney U tests for group comparisons after Shapiro-Wilk tests indicated non-normality, and repeated-measures ANOVA with Type III sums of squares for pre-post analysis. The study received [[ethics|ethical]] approval from the University of Cologne's Faculty of [[humanities-education|Humanities]] Ethics Committee, with written informed consent from school administrators, parents and students.

## Implications

The authors argue that domain-specific [[discipline-specific-aied|custom chatbots]] can provide targeted support for STEM learning processes, but that the decisive variable is didactic integration rather than the model itself. Their priority for future work is replication of the observed trends with substantially larger samples, followed by testing transferability to a wider range of mathematical and scientific contexts and across educational stages. Because the interest gain did not convert into a significant performance gain within a single lesson, they call specifically for longitudinal designs that show whether motivational engagement translates into achievement over multiple lessons, and whether the short-term [[learning-gains|performance trends]] strengthen or fade.

On the practical side, the paper stresses that ADA was designed to support and relieve, not replace, teacher expertise. [[hallucination-risk|Hallucinations]] remain an inherent property of language models even with [[rag]] safeguards, and inconsistent terminology or misleading Socratic questions remain possible, so [[teacher-role|teacher oversight]] and an up-to-date curated database are prerequisites. The authors also emphasise building [[ai-literacy]] among teachers and students, and giving educators the competence to configure and customize such bots so they match their own [[pedagogy|pedagogical]] objectives.

## Limitations

The limitations are stated by the authors themselves. The intervention was brief, which they accept may have limited the potential for significant effects to emerge, and only immediate short-term effects were measured, precluding any assessment of long-term outcomes. The sample was limited in size and drawn from one specific learning context and learning group, restricting generalizability. The study analyzed validated educational constructs rather than usage metrics, and the authors acknowledge that detailed interaction patterns would have provided complementary insight into how students actually used the chatbot. Finally, novelty effects cannot be entirely ruled out, though they note that the situational interest finding suggests effects extending beyond mere technological curiosity.

## Connected Concepts

- [[stem-education]] — the subject domain the chatbot ADA was customized for
- [[math-education]] — secondary mathematics as the intervention context and learning content
- [[rct]] — cluster-randomized controlled trial design in authentic classrooms
- [[technology-acceptance-model]] — framework used to measure acceptance of ADA, with high scores on all constructs
- [[personalized-learning]] — the promise of tailored, real-time support that motivated the chatbot design
- [[socratic-method]] — ADA's questioning strategy in place of direct answers
- [[rag]] — retrieval-augmented generation used to ground ADA in curated curriculum content
- [[prompt-engineering]] — iterative system-prompt refinement for accuracy and age appropriateness
- [[motivation]] — situational interest and emotional responses as the affective outcome cluster
- [[student-engagement]] — situational interest as the one clearly significant affective gain
- [[cognitive-offloading]] — the small non-significant increase in intrinsic and extrinsic load
- [[transfer-of-learning]] — the optimization and transfer subtasks that separated the groups descriptively

## Connected Articles

- [[hashmi-socratic-physics-chatbot-2025]] — domain-specific Socratic chatbot in physics education
- [[lnenicka-secondary-students-genai-stem-2026]] — secondary students using generative AI in STEM settings
- [[kar-mathbuddy-affective-math-tutoring-2025]] — affective outcomes of an AI mathematics tutoring system
- [[mathematics-teachers-chatbot-motivation-2026]] — chatbot use and motivation in mathematics teaching
- [[chatbot-engagement-genai-competency-emotion-2026]] — chatbot engagement alongside emotion and competence measures
- [[akbaba-nursing-ai-experiences-tam-2026]] — technology acceptance of an AI chatbot in another discipline
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — student self-regulation while working with a generative AI chatbot
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — chatbot intervention targeting student motivation
- [[ai-metacognition-stem-review]] — review of AI support for learning in STEM contexts
- [[physics-chatbot-epistemological-beliefs-2026]] — chatbot effects on epistemological beliefs in a science domain

## Citation

Rücker, C. R., & Becker-Genschow, S. (2025). [Enhancing Enthusiasm for STEM Education with AI: Domain-Specific Chatbot as Personalized Learning Assistant](https://doi.org/10.1016/j.caeo.2025.100315). *Computers and Education Open, 9*, 100315.
