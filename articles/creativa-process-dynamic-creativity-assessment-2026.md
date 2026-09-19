---
title: "CREATIVA: A Preliminary Report on a Process-Dynamic Creativity Assessment System Powered by Large Language Models"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
pedagogy: [creativity, project-based-learning]
technology: [llm, generative-ai, learning-analytics, conversational-ai]
assessment: [assessment, automated-assessment, educational-measurement]
methods: [quantitative-research]
research_method: [instrument development, system development, quantitative]
level: [higher ed, k 12]
audience: [researchers, assessment designers, educators]
page_kind: [framework]
sources: ['raw/papers/creativa-process-dynamic-creativity-assessment-2026.md']
confidence: high
---

> **Synthesis:** Wang, Zhang, Li, Wang, Wu, Qian, Zhou and Guo, at the Shanghai Institute of AI for Education at East China Normal University, report CREATIVA, an [[llm|large language model]]-powered system that treats [[creativity]] as a process rather than a product. Instead of scoring a final answer, CREATIVA embeds participants in a [[multimodal]] scenario and walks them through four Creative Problem Solving stages — Problem Discovery, Problem Identification, Solution Generation and Solution Refinement — capturing fluency, originality, flexibility, appropriateness, feasibility, effectiveness and relevance while [[scaffolding|adaptive AI scaffolding]] shifts its role between information provider, task guide, critical partner and evaluator. Grounded in Vygotsky's [[sociocultural-learning|Zone of Proximal Development]], Corazza's dynamic definition of creativity and Dumas and colleagues' Zone of Proximal Creativity, the design aims to measure responsiveness to support, not only current performance. The preliminary evidence is modest but coherent: 29 [[higher-ed|undergraduates]], twelve scored dimensions with inter-rater alpha from .80 to .94, and modest but significant correlations with the Alternative Uses Task and Realistic Presented Problems. Pilots in elementary, junior and senior high school suggest the system may surface developmental potential that static [[assessment]] leaves invisible.

## Key Findings

1. **The instrument is a response to a product-static paradigm.** The authors argue that instruments such as the Alternative Uses Task (AUT) and Real-World Problems score only the quantifiable attributes of a finished output, excluding the generative process — the "black box" — and thereby weakening ecological validity.
2. **CREATIVA runs a four-stage Creative Problem Solving task inside an AI-mediated environment:** Problem Discovery, Problem Identification, Solution Generation (Prototyping) and Solution Refinement, with an ongoing alternation between divergent and convergent thinking rather than a single divergent-thinking prompt.
3. **Reliability rested on five graduate raters scoring 29 undergraduates.** Inter-rater reliability was estimated with Cronbach's alpha across all scored dimensions (N = 5 raters); all twelve dimensions fell between .80 and .94, above the conventional .80 threshold.
4. **Within-stage indicators correlated moderately to strongly.** Stage 1 Relevance × Complexity reached r = .73 (p < .001) and Stage 3 Effectiveness × Feasibility r = .60 (p < .01).
5. **Analogue constructs held together across stages.** Flexibility across Stage 2 and Stage 3 correlated at r = .71 (p < .001), which the authors read as continuity across the problem-solving process.
6. **Convergent relations with established measures were present but small.** AUT Fluency correlated with Stage 1 Complexity at r = .48 (p < .05); Realistic Presented Problems (RPP) Originality correlated with Stage 2 Originality at r = .43 (p < .05) and Stage 3 Originality at r = .45 (p < .05).
7. **Scaffolding moved some students sharply.** In pilots with elementary, [[k-12|junior high]] and senior high school students, some participants who performed weakly in Stage 1 showed marked improvement in solution quality after AI-powered scaffolding in Stage 4 — a pattern the authors align with Dumas et al.'s "Prompted Shifters" profile.
8. **The claim is explicitly preliminary.** The manuscript is a preprint that has not undergone peer review, the psychometric sample is small, and the cross-stage pilots are reported qualitatively rather than with group-level statistics.

## The problem: why product-static creativity assessment loses the process

The paper's opening move is a critique of the dominant measurement paradigm, which it labels "product-static". Traditional instruments — the Alternative Uses Task and Real-World Problems among them — evaluate [[creativity]] through the quantifiable attributes of a final, static product, such as the number and originality of ideas. Two limitations follow. First, decontextualisation: participants generate ideas with minimum contextual information, which does not reflect how creative work happens in real, complex situations, so ecological validity suffers. Second, fragmentation: scores capture the quantity or quality of the finished output while neglecting the dynamic character of the creative process itself. The authors invoke the classic four-stage account of preparation, incubation, illumination and verification to make the point that creativity is a cognitive flow, not a momentary insight, and conclude that the central defect of the paradigm is its systematic exclusion of process from the domain of assessment. Their alternative, "process-dynamic" [[assessment]], treats the generative process as the object of measurement and aims to reveal potential rather than merely document performance, a shift the authors ground in the Zone of Proximal Development, Corazza's dynamic definition of creativity and dynamic measurement.

## What CREATIVA measures across the process

Three principles organize the design: context-embeddedness, process-orientation and interactivity. Tasks sit in multimodal, authentic scenarios; scoring targets the full problem-solving trajectory; and adaptive AI scaffolding runs throughout so that unsupported and supported performance can be compared, which is how the system operationalizes the Zone of Proximal Creativity.

The framework translates those principles into staged indicators. Problem Discovery is scored for fluency (number of challenges proposed), originality (unique perspectives), flexibility (challenges drawn from different perspectives or domains), complexity (abstraction relative to the immediate context) and appropriateness (fit and utility against goals, constraints and context). Problem Identification is scored for fluency (number of interpretations of the focal challenge), originality (uncommon concepts or novel combinations) and flexibility (multiple analytical perspectives) — a deliberately narrower set, since the AI withholds substantive content here to protect independent analysis. Solution Generation adds feasibility, effectiveness and relevance to fluency, originality and flexibility. Solution Refinement is scored on final feasibility, final effectiveness and final relevance, capturing whether the revised solution improved. The point of the repeated indicators is comparability: [[problem-solving]] constructs such as flexibility can be traced across stages, which is what makes trajectories, and not just totals, scoreable.

## How the system is built, and what the validation reported

[[conversational-ai|Conversational AI]] is not a wrapper here but the assessment medium. CREATIVA is built on the educational large language model InnoSpark and coordinated through the Dify workflow engine, integrating ecological context generation, adaptive scaffolding interaction and multimodal behavioral data tracking. A code execution node standardizes scenario loading so every participant starts from the same baseline, while an LLM node manages open-ended dialogue against preconfigured role instructions. The interface uses three columns — scenario materials on the left, human-computer dialogue in the middle, and a thinking workspace on the right where edits and timestamps are captured in real time. Across the four stages the AI moves from a "more knowledgeable other" providing knowledge scaffolding, to a task guide offering structural prompts, to a critical partner delivering graduated prompting in the Stage 4 "test-intervene-retest" logic of dynamic assessment, and finally to an evaluator that turns the behavioral trajectory into a multidimensional profile.

The reported evidence is psychometric. Twenty-nine undergraduates enrolled in a psychology course completed the assessment as a course requirement, alongside the AUT and Realistic Presented Problems. Five graduate students independently rated every response against the framework; Cronbach's alpha across the twelve dimensions ranged from .80 to .94. Convergent validity was examined with Spearman correlations (N = 29): within-stage indicators clustered (Stage 1 Relevance × Complexity r = .73, p < .001; Stage 3 Effectiveness × Feasibility r = .60, p < .01), analogous constructs held across stages (Flexibility, Stage 2 × Stage 3, r = .71, p < .001), and external measures showed significant but modest convergence (AUT Fluency × Stage 1 Complexity r = .48, p < .05; RPP Originality × Stage 2 Originality r = .43, p < .05 and × Stage 3 Originality r = .45, p < .05). The authors describe this as preliminary support for CREATIVA as a process-dynamic instrument rather than as a validated one.

## Intended use, and what the pilots suggest

The system is offered as an educational instrument rather than a selection test. Its theorized value is that it distinguishes profiles — students whose process is strong but whose first submission is not, from those whose refinement under support carries most of their gain — and thereby informs teaching and the early identification of developmental potential. CREATIVA has been piloted beyond the undergraduate sample with elementary, junior high and senior high school students; for each group the scenario design was adapted to [[curriculum-design|curriculum]] content and background knowledge and the level of instructional support was adjusted. The most striking reported observation is the Stage 1 to Stage 4 improvement among initially weak performers after AI scaffolding, which the authors connect to the Zone of Proximal Creativity literature suggesting that creative potential is malleable and that individuals differ in malleability. The broader claim is that a [[generative-ai|generative AI]] assessment can serve developmental and evaluative functions at once, shifting evaluation from acquired knowledge toward potential, growth and responsiveness to scaffolding. [[learning-analytics]] style capture of the full behavioral record — edits, timestamps, dialogue — is the mechanism that makes this claim technically possible.

## What this means for practice

- **Instructors.** Score the process rather than the first submission: run the four-stage Creative Problem Solving sequence (Problem Discovery, Problem Identification, Solution Generation, Solution Refinement) and read Stage 1 and Stage 4 performance separately, because some students who performed weakly in Stage 1 improved markedly after AI scaffolding in Stage 4.
- **Designers.** Capture the full behavioral record — edits, timestamps, dialogue — as assessment data, since the instrument's claim to separate strong-process/weak-first-draft profiles from refinement-driven gains depends on that trace.
- **Designers.** Establish scoring consistency for the model, not only for human raters, before reporting a student's score: the pilot's alpha of .80 to .94 came from five graduate raters working from the framework, and [[automated-assessment|automated scoring]] performance is not reported.
- **Instructors.** Use the Stage 4 scaffolding as a deliberate probe of responsiveness and calibrate the level of support to learners' background knowledge, as the elementary, junior high and senior high pilots did with adapted scenarios.
- **Researchers.** Treat the convergent correlations with the Alternative Uses Task and Realistic Presented Problems (r = .43 to .48) as a floor rather than a validation, and test discriminant and predictive validity before the instrument informs placement or identification decisions.

## Limitations
The paper is candid about its status and readers should not over-read it. It is a preprint that has not been peer reviewed, and the positive results come from a single small sample of 29 undergraduates at one institution, drawn from a psychology course where completion was a course requirement — a convenience sample with no comparison group and no evidence yet that the instrument predicts real-world creative achievement. The reliability figure uses five graduate students as raters, so scoring consistency is established for human raters working from the framework, not for the AI evaluator role the architecture assigns to the model; whether [[automated-assessment|automated scoring]] reproduces that consistency is not reported. Validity evidence is convergent only: modest correlations with the same family of divergent-thinking measures the paper criticizes do not settle discriminant validity against unwanted constructs, nor predictive validity for anything the field cares about. The cross-stage pilots — elementary, junior high and senior high school — are described without sample sizes, group statistics or design details, so the differentiation and "Prompted Shifters" observations are illustrative rather than evidential. There is no longitudinal evidence that profiles predict later development, no analysis of whether scaffolding effects persist, and no examination of the [[equity-in-ai-education|equity]] and language-[[bias-mitigation|bias]] risks that travel with LLM scoring. The honest summary is that CREATIVA demonstrates a plausible architecture and preliminary psychometric support, and the substantive questions — automated scoring quality, discriminant and predictive validity, transfer across educational stages, and the consequences of using AI scaffolding as part of the measurement itself — remain open.

## Connected Concepts

- [[creativity]] — the construct being redefined and measured as process rather than product
- [[project-based-learning]] — the staged, scenario-embedded CPS task as the assessment activity
- [[llm]] — InnoSpark as the educational model that both scaffolds and evaluates
- [[generative-ai]] — the technology enabling scalable interactive assessment
- [[scaffolding]] — graduated prompting as the operationalization of the Zone of Proximal Creativity
- [[problem-solving]] — the four-stage Creative Problem Solving cycle structuring the instrument
- [[assessment]] — the paradigm shift from static product evaluation to process-dynamic measurement
- [[automated-assessment]] — the AI evaluator role and the unverified consistency of machine scoring
- [[assessment-validity]] — construct, convergent, discriminant and predictive validity questions left open
- [[educational-measurement]] — reliability and correlation evidence from the 29-undergraduate sample
- [[learning-analytics]] — real-time capture of behavioral and process data as the measurement substrate
- [[conversational-ai]] — dialogue as the medium through which the assessment unfolds

## Connected Articles

- [[rubric-guided-genai-creativity-assessment-games-2026]] — Rubric-guided GenAI scoring of creativity in a game context
- [[genai-creativity-k12-scoping-review-2026]] — Scoping review of generative AI and creativity in K-12 settings
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Project-based creativity with AI in vocational design education
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — Conceptual landscape of measuring AI literacy with LLMs
- [[assessment-latent-structure-human-llm-2026]] — Latent structure of assessment scores from human and LLM raters
- [[llm-psychometric-calibration-cdp]] — Psychometric calibration of LLM-derived measures
- [[psyscore-essay-scoring-zpd-feedback]] — Scoring within a zone-of-proximal-development logic
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-supported authentic assessment and metacognition
- [[know-when-to-trust-ai-scoring-reliability-2026]] — When AI scoring can be trusted, and how reliability is established

## Citation

Wang, W., Zhang, Y., Li, M., Wang, Y., Wu, J., Qian, H., Zhou, A., & Guo, J. (2026). [*CREATIVA: A Preliminary Report on a Process-Dynamic Creativity Assessment System Powered by Large Language Models*](https://osf.io/preprints/psyarxiv/d4rsu_v1). Preprint (not yet peer reviewed). Shanghai Institute of AI for Education, East China Normal University.
