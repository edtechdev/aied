---
title: "STEPwise: Supporting Teachers in Diagnosing Students' Mathematical Problem-Solving Skills through LLM-Generated Questions"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/stepwise-teacher-diagnosis-math-2026.md']
confidence: high
page_kind: [framework]
research_method: [design and evaluation study]
discipline: [math education]
level: [k 12]
audience: [instructors, researchers]
technology: [llm]
assessment: [automated-question-generation, process-oriented-assessment]
pedagogy: [scaffolding]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Teachers cannot individually probe every student's reasoning in a full class, so process-level diagnosis usually collapses into a judgment about the final answer. STEPwise pairs a diagnostic framework, STEP, with an [[llm]] pipeline that turns any math word problem into stage-specific sub-questions and three-tier rubrics. STEP, co-designed with six [[math-education|mathematics education]] experts, splits [[problem-solving|problem solving]] into four stages and eight sub-skills and specifies what evidence to elicit at each. An expert review found strong [[assessment-validity|construct validity]] (91.32%) and mathematical accuracy (90.97%), but weaker level appropriateness (80.21%) and problem-context alignment (72.22%). In a month-long deployment with 5 teachers and 64 students, teachers generated materials for 90 problems and reported seeing where reasoning broke down, while students valued articulating their thinking. The authors frame the sub-questions as both a diagnostic instrument and a learning experience.

## Key Findings
1. STEP refines four problem-solving stages into eight diagnostic sub-skills, specifying the evidence to elicit and assess at each so that breakdowns can be located precisely.
2. Co-designed with six mathematics education experts, the framework maps primary error types onto each sub-skill, grounding diagnosis in established error analysis.
3. An expert review of 36 problems reached construct validity of 91.32% and mathematical accuracy of 90.97%, but level appropriateness of 80.21% and problem-context alignment of 72.22%.
4. In a month-long classroom study, 5 teachers and 64 students produced materials for 90 problems, yielding 720 sub-questions and rubrics with a mean SUS score of 83.5.
5. Teachers reported that stage-by-stage responses revealed how far students had progressed and where reasoning broke down, a level of detail otherwise obtainable only through individual follow-up questioning.
6. Students rated the approach moderately positively (means between 3.59 and 3.89 out of 5), with self-awareness of strengths and weaknesses rated highest.
7. Decomposing problems did not make them easier: teachers found many students struggled more with the act of articulation than with the mathematics itself.

## Why generic stage questions fall short
A [[teacher-role|teacher]] who wants to know where a student's reasoning fails usually has to ask follow-up questions one student at a time. The formative study behind this work tested whether problem-agnostic stage questions could carry that load. Four mathematics teachers with a mean of 13.25 years of teaching experience used four general prompts — parse, extract, retrieve, and combine — with 48 students in Grades 3–6. Teachers found the generic questions failed to surface students' thinking, especially in the planning and knowledge-recall stages, because the same wording was applied to every problem. They also struggled to build consistent rubrics for judging responses stage by stage, since each problem demands different reasoning at each stage. The authors read this as a fundamental tension: broadly applicable questions do not elicit the context-specific reasoning a particular problem requires, and problem-specific materials are too costly to build by hand.

## Inside the STEP framework
STEP responds by specifying what evidence to look for and what questions reliably elicit it. Four stages — problem comprehension, information structuring, mathematical expression, and mathematical computation — each split into two diagnostically distinct sub-skills, for eight in total. The framework maps primary error types onto each sub-skill, drawing on Newman's error analysis, so a teacher can distinguish, for example, a reading error from a transformation error and name the [[misconceptions]] behind a wrong response. A deliberate design choice is that each sub-skill can be assessed from the evidence its own question elicits, without presupposing success at earlier stages. The framework also weights the early stages heavily, reflecting expert observation that students often struggle more with interpreting problem text and structuring information than with calculation.

## The teacher-in-the-loop pipeline
The pipeline turns a single word problem, its answer, and a target grade level into diagnostic materials. A problem solver reasons through the problem step by step, a sub-question generator produces stage-aligned questions, and four verifiers check stage elicitation, context alignment, prompt validity, and answer validity, regenerating any question that scores below the maximum threshold for up to three iterations. Unlike [[intelligent-tutoring]] systems that depend on problems modeled in advance, this pipeline works on whatever problem a teacher already intends to use. Rubrics are built from simulated student responses at three levels: three plausible incorrect responses each for low and medium, and three correct variations for high, analyzed into non-overlapping error patterns. All modules use OpenAI's GPT-4o. The expert review pushed two changes: [[rag|retrieval-augmented generation]] over teachers' own textbooks, and a teacher-in-the-loop design so teachers can edit or regenerate materials before deploying them.

## What changed in the classroom
Five teachers and 64 students in Grades 3–9 used STEPwise for about one month, generating materials for 90 problems and 720 sub-questions, with a mean System [[usability-research|Usability]] Scale score of 83.5. Teachers described the main benefit as seeing the flow of student thinking rather than the correctness of a final answer, and reported that stage-based responses revealed where a student was stuck without additional probing. Students rated the approach moderately positively on a five-point scale, with self-awareness of strengths and weaknesses the highest-rated dimension and ease of expressing reasoning the lowest. Several noted that working through the stages made their own reasoning gaps visible to them, a sign of [[metacognition]] supported by the structure. A finding teachers called unexpected was that decomposing a problem did not make it easier: the obstacle was articulation, not the mathematics. This echoes prior deployments of LLM-based [[scaffolding]] in [[k-12|K-12]] classrooms, where a uniform step-by-step structure helped students overall while placing a disproportionate burden on those with lower proficiency.

## What this means for practice
- **Instructors.** Use stage-based sub-questions to locate where reasoning breaks down, but treat articulation as a skill to be taught rather than a prerequisite, and build in support for the students who find writing out each stage hardest.
- **Instructors.** Adjust granularity per student and per problem: teachers in the study suggested merging adjacent stages into fewer sub-questions for students who found eight separate prompts burdensome.
- **Researchers.** Establish whether stage-based diagnosis actually changes outcomes, since the study did not measure gains in problem-solving performance or follow the instructional decisions teachers made from the reports.
- **Developers.** Reduce response-collection friction, since paper worksheets had to be photographed for scoring, and support reports that accumulate over time so a student's developing reasoning profile is visible rather than reported worksheet by worksheet.

## Limitations
- Stage-based sub-questions structure the process they diagnose, so what is measured is a student's reasoning under a given decomposition, which may differ from how the same student would approach the problem unaided.
- The study did not measure whether engagement with stage-based sub-questions leads to gains in problem-solving performance, nor did it follow the instructional decisions teachers made based on the accumulated reports.
- STEPwise's diagnosis step was not treated as a fully validated diagnostic instrument: the authors did not systematically compare its scores against teachers' own scoring of the same responses.
- The pipeline's materials target Korean math word problems and the Korean national [[curriculum-design|curriculum]], and the deployment lasted about one month with 5 teachers and 64 students.
- Several teachers used STEPwise with middle-school classes beyond the Grades 3–6 range that the pipeline had been reviewed for, which the authors report as an exploratory extension.
- The pipeline used OpenAI's GPT-4o, so the reported performance reflects a single model generation.

## Citation
Kim, Y., Doh, H., Kim, E., Son, J., & Kim, J. (2026). [*STEPwise: Supporting Teachers in Diagnosing Students' Mathematical Problem-Solving Skills through LLM-Generated Questions and Rubrics*](https://arxiv.org/abs/2610.16344). arXiv preprint arXiv:2610.16344.
