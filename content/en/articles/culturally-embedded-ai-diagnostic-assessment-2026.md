---
title: Rethinking Diagnostic Assessment Through Culturally Embedded AI for Meaningful Learning
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/culturally-embedded-ai-diagnostic-assessment-2026.md']
confidence: high
page_kind: [framework]
research_method: [quasi-experiment, structural equation modeling]
level: [k 12, middle school]
audience: [instructors, assessment designers, researchers]
pedagogy: [student-engagement, scaffolding]
technology: [cognitive-diagnosis, educational-nlp, learning-analytics, adaptive-learning, ai-technologies]
assessment: [assessment, automated-assessment, educational-measurement, assessment-validity, formative-assessment, learning-gains]
methods: [quantitative-research]
ethics: [culturally-relevant-pedagogy, equity-in-ai-education, differential-effects-across-learner-groups]
foundations: [theories-and-frameworks, teacher-role]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This [[quantitative-research|quantitative]] quasi-experiment develops and validates the **Meaningful Diagnostic Assessment Framework (MDAF)**, which combines culturally contextualized open-ended [[math-education|mathematics]] tasks, AI-based response analysis, and [[pedagogy|pedagogical]] interpretation to generate meaningful evidence of learning. Across 178 [[k-12|junior high]] school students in Indonesia, the framework was positively associated with symbolic mathematical performance (β = 0.42) and [[student-engagement|student engagement]] (β = 0.37), with Cultural Embeddedness Perception partially mediating both pathways. AI-generated diagnostic profiles agreed strongly with expert evaluations (ICC = 0.81; Cohen's Kappa = 0.78). The authors argue that AI's value in [[assessment]] lies not in automating scoring but in transforming student responses into [[automated-assessment|interpretable evidence]] that supports [[adaptive-learning|adaptive instruction]] — a shift from "assessment as measurement" to "assessment as the generation of meaningful learning evidence." MDAF positions [[culturally-relevant-pedagogy|culturally embedded]] tasks as an epistemic bridge between students' lived experience and abstract mathematical reasoning.

## Key Findings
1. The MDAF showed good empirical fit to the data (χ²/df = 2.14, CFI = 0.94, TLI = 0.93, RMSEA = 0.061, SRMR = 0.048), supporting a coherent structure linking cultural context, AI-supported diagnosis, and learning evidence.
2. Participation in the MDAF condition was positively associated with symbolic mathematical performance (β = 0.42, p < .001) and [[student-engagement|student engagement]] (β = 0.37, p < .001) within the structural model.
3. Cultural Embeddedness Perception partially mediated both relationships, with significant indirect effects on symbolic performance (β = 0.18, 95% CI [0.08, 0.28]) and student engagement (β = 0.21, 95% CI [0.11, 0.31]).
4. AI-generated diagnostic profiles showed strong agreement with expert evaluation: ICC = 0.81 for overall symbolic performance and Cohen's Kappa = 0.78 for symbol interpretation, suggesting the system can interpret open-ended responses consistently.
5. The study involved 178 junior high school students in West Java, Indonesia — 90 (50.6%) in the experimental condition and 88 (49.4%) in the comparison condition — across five one-hour sessions with baseline measures first.
6. Culturally embedded tasks were built from local artifacts, such as the Pedati Gede from Cirebon, embedding mathematical relationships in the cultural object rather than adding context artificially to a word problem.

## From measuring learning to generating learning evidence

[[educational-measurement|Assessment theory]] has moved through three paradigms: assessment of learning, which measures outcomes through scoring and classification; [[formative-assessment|assessment for learning]], which uses results to inform instruction; and assessment as learning, which positions students as agents who monitor their own progress. Yet most [[assessment|diagnostic instruments]] still stop at performance classification and rely on manual interpretation, which is slow, sensitive to rater variability, and difficult to scale. AI has automated scoring, answer classification, and performance prediction, but the authors argue these gains mainly improve efficiency rather than understanding: diagnostic output often reduces to correct or incorrect and cannot show how knowledge is constructed. MDAF is proposed as a corrective, redefining diagnosis as a source of [[learning-gains|learning evidence]] that explains how students build symbolic reasoning, choose strategies, and overcome conceptual obstacles.

## Culture as part of the learning pathway

Culture is not treated as decoration on a word problem. Drawing on [[culturally-relevant-pedagogy|culturally responsive assessment]] and ethnomathematics, the framework builds tasks from cultural artifacts and everyday practices that already contain mathematical structure — for example, the Pedati Gede, a traditional wheeled artifact from Cirebon, used to elicit symbolic representations of distances between wheel centers. The mediation results suggest that Cultural Embeddedness Perception — students' sense of familiarity, authenticity, and meaningfulness — forms part of the pathway linking the framework to outcomes, with indirect effects on symbolic performance (β = 0.18) and [[student-engagement|engagement]] (β = 0.21). The authors connect this to [[situated-learning|situated cognition]], treating culture as an epistemic bridge that lets assessment capture reasoning in contexts meaningful to students.

## Agreement between AI diagnosis and expert judgment

The framework's credibility rests partly on whether AI can interpret open-ended responses the way an expert would. [[educational-nlp|Natural language processing]], construct-aligned scoring, and reasoning-pattern analysis produced diagnostic profiles that were compared with evaluations by five experts using the same construct indicators. Agreement was strong: ICC = 0.81 for overall symbolic performance and Cohen's Kappa = 0.78 for symbol interpretation. The authors read this as evidence that AI in assessment is shifting from an [[automated-assessment|automated scorer]] to a pedagogical interpreter that helps teachers understand student thinking, though they frame it alongside [[explainable-ai|explainability]] and [[learning-analytics|learning analytics]] as necessary for interpretability. Instruments were validated first: content validity indices ranged from 0.86 to 0.94, Cronbach's alpha was 0.87 for engagement and 0.89 for cultural embeddedness, and all factor loadings exceeded 0.60.

## How the framework operates

MDAF runs through five connected stages: culturally embedded task input, student response input, AI-supported diagnostic analysis, generation of meaningful learning evidence, and pedagogical decision-making. Students complete open-ended tasks that ask them to represent relationships and explain their reasoning; GradeLab then interprets responses, maps them onto construct indicators (relationships, patterns, generalization), and identifies strategies and possible [[misconceptions]]. The resulting profiles feed [[feedback|targeted feedback]], differentiated instruction, and further assessment design in a loop. Validation drew on a controlled design with 178 junior high school students in West Java — 90 (50.6%) experimental and 88 (49.4%) comparison — across five one-hour sessions, with baseline measures taken before each condition. The comparison group used a conventional digital diagnostic assessment.

## What this means for practice

- **Instructors.** Treat diagnostic output as evidence for instruction rather than a final grade: use the reasoning profiles to plan targeted [[feedback|feedback]] and differentiated follow-up.
- **Instructors.** Check that students actually perceive the cultural context as authentic and meaningful, since that perception is part of the pathway to both [[student-engagement|engagement]] and symbolic performance.
- **Assessment designers.** Build open-ended tasks around local artifacts and practices so the mathematical relationships come from the context instead of being bolted onto a generic problem.
- **Assessment designers.** Validate AI-generated diagnostic profiles against expert judgment using agreement statistics (such as ICC and Cohen's Kappa) before trusting them for consequential decisions.
- **Researchers.** Replicate the framework across mathematical topics, education levels, and cultural settings before assuming its elements transfer, because cultural relevance depends on local familiarity.

## Limitations

- The structural analysis reports associations within the model; it does not report between-group changes from baseline to post-intervention, so the findings are not evidence that MDAF causes improvement.
- Participants came from existing classes in one Indonesian province (178 junior high school students, selected by purposive sampling), which limits generalization.
- The culturally embedded tasks depend on students' familiarity with local practices, artifacts, and meanings, so they cannot be transferred directly across contexts.
- The study covers one subject ([[math-education|mathematics]]) and one level (junior high school); transferability to other domains and educational levels is untested.
- Data are available only on request from the corresponding author, which constrains independent reanalysis.

## Citation
Anggara, B., Sugiman, & Arliani, E. (2026). [Rethinking Diagnostic Assessment Through Culturally Embedded AI for Meaningful Learning](https://doi.org/10.11114/jets.v15i1.9159). *Journal of Education and Training Studies, 15*(1).
