---
title: "A Personalized Learning Path Problem Based on the Cognitive Theory of Multimedia Learning"
created: "2026-09-26T00:24:11-04:00"
updated: "2026-09-26T00:24:11-04:00"
type: article
published: "2026"
foundations: [theories-and-frameworks]
pedagogy: [cognitive-psychology, retrieval-spacing-interleaving]
technology: [personalized-learning, knowledge-graph, recommender-systems-and-learning-paths]
methods: [ai-ed-evaluation]
research_method: [design and evaluation study, theoretical analysis]
discipline: [cs education]
level: [graduate]
audience: [researchers, instructional designers, software developers]
page_kind: [framework]
sources: ['raw/papers/personalized-learning-path-ctml-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Mochocki and colleagues address a recurring problem in [[personalized-learning|personalized learning path]] (PLP) research: paths are matched to learners using learning styles, which lack empirical support, instead of a validated learning theory. This [[theories-and-frameworks|framework]] paper derives learning material (LM) and PLP rubrics from the Cognitive Theory of Multimedia Learning (CTML) and decomposes the resulting task into two formal problems: selecting LMs and sequencing them. It proves that LM selection is NP-complete even when only the time interval objective is considered, and that many-to-many interleaving and prerequisite sequencing are likewise NP-complete, while many-to-one variants and difficulty sequencing are solvable in polynomial time. Using a 67-node computer science [[knowledge-graph]], learner profiles from 12 graduate students, and 365 LMs, the authors solve generated instances with the Non-Dominated Sorting Genetic Algorithm II for selection and a Random Hill Climber and simulated annealing for sequencing. Returned paths scored between 3.19 and 3.54 on a four-point rubric. The evaluation demonstrates feasibility and path quality against the rubrics; it does not measure student learning outcomes.

## Key Findings

- **Theory-grounded rubrics.** The LM rubric scores 365 learning materials on compliance with 12 CTML principles on a 1 to 4 scale; the PLP rubric adds nine selection categories and three sequencing categories.
- **Selection is NP-complete.** A polynomial-time reduction from Subset Sum using only the time interval objective establishes this, with a verifying algorithm running in O(mn + n²).
- **Sequencing complexity depends on structure.** Many-to-many interleaving and prerequisite sequencing are NP-complete, while difficulty sequencing and every many-to-one ordering variant are PTIME.
- **Metaheuristics returned acceptable paths.** NSGA-II selected materials and a Random Hill Climber or simulated annealing ordered them, with rubric averages from 3.19 (Student 11) to 3.54 (Student 9) on a four-point scale.
- **Two objectives pull against each other.** Topic balance and the time interval constraint were negatively correlated when students had many goals and tight time limits; Students 7 and 11 showed time interval variances of 1.4540 and 1.8621.
- **The algorithms were not random.** Measured variances stayed below the chi-square thresholds (s² = 0.0849 for selection, 0.254 for sequencing, χ² = 17.708), so all three algorithms passed the significance tests.

## From CTML principles to a formal problem definition

[[cognitive-psychology|Cognitive psychology]] underpins CTML's assumptions: learners have dual channels for words and pictures, a limited working memory capacity, and a need for active processing to build schemata in long-term memory. From those assumptions the LM rubric grades materials against twelve principles, with human researchers rating each of the 365 materials on a scale where 4 signals compliance. The multi-objective LM selection decision problem then asks whether a path p ⊆ L exists such that its CTML value Vp ≥ V, difficulty matching Dp ≥ D, learner preference Op ≥ O, duration TL ≤ Tp ≤ TU, cohesiveness Ep ≥ E, coherence Cp ≤ C, segmenting Sp ≤ S, multiple-document integration Mp ≥ M, and topic balance Bp ≤ B. Each objective is justified by CTML, as with difficulty matching drawn from limited working memory, or by learner time budgets.

## Complexity proofs and the algorithms chosen

Formal reductions set the algorithmic agenda. The authors reduce Subset Sum to LM selection by setting TL = TU = W, which makes selection NP-hard and, with the polynomial verifier, NP-complete. On the sequencing side they model elaboration, difficulty, and [[retrieval-spacing-interleaving|interleaving]] as ordering objectives, then prove that many-to-many interleaving and prerequisite sequencing are NP-complete while difficulty sequencing and the many-to-one variants are PTIME. Because the general problems are NP-complete, the paper turns to metaheuristics: NSGA-II with chromosomes of 365 LM decision variables, nine objectives normalized and combined into three, followed by simulated annealing and a Random Hill Climber over 10,000 iterations. The authors report the annealing schedule as T1 = 0.95, Tf = 0.01, and cooling rate α = 0.9995467.

## What the evaluation established, and what it did not

The experiment used 67 knowledge nodes from a computer science taxonomy, 12 graduate student profiles, and 365 rated materials. Each student received 30 independent NSGA-II selection runs, and each resulting LM set fed 30 sequencing runs per algorithm, for 900 sequencing executions per student for each algorithm. The Random Hill Climber reached a mean of 4.00 on difficulty, prerequisite, and interleaving for most students and matched every student with an interleaving score of 4.0, which the authors read as evidence that the real-world instances were not computationally hard despite the proofs. Tension appeared where learner goals and time budgets collided: Student 7 named 15 goal KNs against a preferred maximum of 90 minutes, and Student 11 chose 60 minutes for five goals. What the study shows is feasibility and rubric-level path quality; it does not test whether those paths improve learning.

## What this means for practice

- **Instructional designers** can adopt the published LM rubric to rate a corpus of materials, producing a repeatable quality ranking that does not depend on matching materials to learning styles.
- **Platform builders** should treat path construction as two problems: a multi-objective selection step, then a sequencing step where a low-variance local search is often sufficient.
- **Advisors and learners** setting goals should expect weaker paths when many goal topics are combined with a short time budget; the reported results suggest reducing goal count or extending the time limit improves path quality.
- **Researchers** should benchmark before assuming theoretical hardness implies practical hardness: the real data produced easy sequencing instances despite the proofs.

## Limitations

- **No human testing.** The authors state that human experiments are missing from the evaluation and belong in future work, so the link between rubric scores and learning outcomes remains untested.
- **Rubric validity is unproven.** The paper notes the rubrics may not adequately rank materials and paths according to CTML, possibly through human error in rubric design or in rating the 365 materials.
- **Small sample and corpus.** Learner data came from 12 graduate students and the corpus held 365 materials; goal topics and cognitive levels came from self-reported questionnaires, not measured performance.

## Connected Concepts

personalized-learning, knowledge-graph, recommender-systems-and-learning-paths, cognitive-psychology, retrieval-spacing-interleaving, theories-and-frameworks

## Connected Articles

- `bayesian-cognitive-diagnosis-personalized-learning-paths`: another algorithmic construction of personalized learning paths, using Bayesian cognitive diagnosis and hidden Markov models to model cognitive load.
- `graph-its-adaptive-algorithms-2026`: compares graph-based adaptive algorithms for tutoring, the same graph-structured selection and sequencing setting this paper formalizes.
- `hybrid-cf-kg-recommendation-multimodal-teaching-2026`: knowledge-graph-based recommendation of teaching resources, a sibling of the material selection problem for large corpora.
- `learnopt-exam-cognitive-structure`: uses knowledge graphs and constrained optimization to recover latent cognitive structure, closely related to deriving prerequisite structure from a taxonomy.

## Citation

Mochocki, S., Reith, M., Merkle, L. D., Singh, P. J., Zemmer, J., Gera, R., Peterson, G., Jasper, J., & Borghetti, B. (2026). [*A Personalized Learning Path Problem Based on the Cognitive Theory of Multimedia Learning*](https://doi.org/10.3390/aieduc2030025). AI in Education (MDPI), 2(3), e25. https://doi.org/10.3390/aieduc2030025