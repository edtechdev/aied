---
title: "From Instructional Intent to Classroom-Ready Lessons: Investigating Teacher-AI Collaboration in Lesson Authoring for Secondary Computing Education"
created: "2026-10-12T09:30:00-04:00"
updated: "2026-10-12T09:30:00-04:00"
type: article
foundations: [teacher-role, teacher-ai-competency, human-ai-collaboration]
pedagogy: [pedagogical-partnerships, professional-training]
technology: [generative-ai, llm, human-in-the-loop-ai]
methods: [qualitative-research, usability-research]
discipline: [cs education]
level: [secondary, k 12]
audience: [instructors, curriculum designers, instructional designers, researchers]
page_kind: [evaluation]
research_method: [thematic analysis, user study]
confidence: medium
sources: ['raw/papers/teacher-ai-lesson-authoring-computing-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** Yasir and colleagues ask how [[generative-ai]] should fit into [[k-12|secondary]] computing teachers' [[discipline-specific-aied|subject-specific]] authoring, a question the lesson-planning literature has mostly studied with general-purpose [[conversational-ai|chatbots]]. Eight secondary computing teachers took part in two complementary qualitative studies: four focus groups about their existing practice and a think-aloud study in which LessonBuilder, a structured AI-supported authoring system, served as a research probe. Teachers selectively delegated tasks and kept the judgment of classroom readiness for themselves. The think-aloud sessions showed that inspecting AI-generated materials made teachers clarify and refine their instructional intentions, so authoring became a continuing negotiation between what the [[teacher-role|teacher]] intended and what the model produced. The authors synthesize a conceptual model of that coordination and derive [[learning-design|design]] recommendations for keeping the teacher in control.

## Key Findings
1. **Teachers delegated selectively and kept the final judgment.** All eight described limiting what they asked AI to do, and every one treated classroom readiness as their own decision rather than something the model could certify.
2. **Inspecting AI output sharpened instructional intent.** Seeing generated materials prompted teachers to clarify and refine what the lesson was actually for, making authoring a negotiation between intention and output rather than a one-pass generation.
3. **Requests carried instructional context, not just topics.** Teachers specified intended changes, learner characteristics, standards and outlines, with one feeding an outline and previous materials so the model would "organize it" rather than author it.
4. **Breakdowns clustered in three kinds.** Materials that did not fit learners' needs, changes to content teachers intended to preserve, and unreliable information — including links to videos and webpages that did not exist.
5. **Repair work fell on the teacher.** Teachers inspected output, restated requests and revised materials; clarifying did not always fix the mismatch, and one teacher received "the wrong thing over and over again."
6. **Computing-specific readiness mattered.** Judging classroom readiness included checking whether [[cs-education|programming]] materials and supporting guidance matched students' understanding and intended learning goals.

## Two studies of authoring practice

Study 1 ran four focus groups with pairs of teachers grouped by the courses they taught, each lasting 50–60 minutes and organized around four modules: planning and authoring workflow, adaptation needs and breakdowns, current AI use and desired control, and classroom readiness and quality review. Hybrid deductive–inductive [[qualitative-research|thematic analysis]] produced five code families — authoring starting points, adaptation for classroom fit, selective AI delegation, AI breakdowns, and classroom readiness. Study 2 used LessonBuilder as a probe, with each teacher completing two activities on fixed topics: generating a lesson on conditionals through a staged planner, and importing a loops lesson from a public teachers' forum and adapting it with a teaching assistant. Because the activities required particular operations, completion was not treated as evidence of preference; the analysis focused on teachers' stated intentions and rationales.

## What teachers kept, and what they handed over

The delegation pattern was not uniform hand-off. Teachers asked for supplementary materials for differentiation rather than rewrites of existing content, supplied standards and outlines to steer organization, and continued to evaluate and revise results. The breakdowns revealed where the boundary held: generated code ran past students' current knowledge, planned activities were reorganized in ways the teacher had not asked for, and generated supporting links proved to be fabricated. One teacher, working in a hurry, found an error during class and drew the lesson that material can "look smart" while being wrong, so it "has to be checked before you push it out." That repair loop is the empirical basis for the paper's claim that [[human-in-the-loop-ai|human oversight]] is not a residual safeguard but the central authoring act.

## The conceptual model and its design recommendations

The authors synthesize the findings into a model in which teachers coordinate three things during authoring: their instructional intent, the assistance the AI provides, and their ongoing judgment of classroom readiness. The recommendations ask authoring tools to externalize intermediate artifacts for inspection, keep adaptation decisions with the teacher, and support computing-specific needs such as matching programming content and guidance to the intended learning goals. Read as a design claim, the model says a lesson-authoring system should make the teacher's intent visible and revisable at each stage instead of optimizing a single generation step — the same staged, inspectable structure the probe system used.

## What this means for practice
- **Instructors.** Treat AI-generated lesson materials as a draft to inspect and revise, not a product to adopt: the mismatch cases in this study were caught by teachers reading the output closely, not by the tool.
- **Curriculum designers.** Give teachers structured, inspectable stages — plan, generate, review, publish — so intentions can be refined before materials are generated rather than patched afterwards.
- **Instructional designers and developers.** Build review affordances that surface what the model changed relative to the teacher's request, because undetected content changes were one of the three recurring breakdowns.
- **Faculty developers.** Train computing teachers to check generated code and links against what students have already learned, which is where the fit failure and the fabricated-resource failure both appeared.

## Limitations
- The sample is eight secondary computing teachers, all recruited in one study context, so the model and recommendations rest on a small qualitative base and may not transfer to other subjects with different authoring conventions.
- Both studies were conducted by researchers who also moderated the sessions and performed the analysis, so researcher role and coding judgment are not independent of the findings.
- The think-aloud study used one system (LessonBuilder) and two fixed lesson topics, so it observes authoring behavior under tool and topic constraints the participants did not choose.
- The evidence is teachers' reported intentions and observed sessions, with no measure of whether the authored lessons improved student learning.

## Citation

Yasir, T., Li, W., Ozturk, D., Rajapaksha, Y., Droujkov, D., Tian, X., & Barnes, T. (2026). [From Instructional Intent to Classroom-Ready Lessons: Investigating Teacher-AI Collaboration in Lesson Authoring for Secondary Computing Education](https://arxiv.org/abs/2610.12834). *arXiv:2610.12834 (cs.HC)*.
