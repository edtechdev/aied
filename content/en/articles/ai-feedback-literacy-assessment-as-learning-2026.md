---
title: Using AI to Build Student Feedback Literacy and Leverage Assessment as a Learning Tool
created: "2026-10-20T09:20:00-04:00"
updated: "2026-10-20T11:20:00-04:00"
type: article
sources: ['raw/papers/ai-feedback-literacy-assessment-as-learning-2026.md']
confidence: medium
published: "2026-10-19"
page_kind: [framework]
research_method: [position paper]
discipline: []
level: [higher ed]
audience: [instructors, assessment designers, faculty developers, instructional designers]
pedagogy: [metacognition, self-regulated-learning, self-directed-learning, student-engagement]
technology: [generative-ai, llm, conversational-ai, prompt-engineering]
assessment: [feedback, feedback-literacy, formative-assessment, authentic-assessment, self-assessment, process-oriented-assessment]
foundations: [ai-literacy, teacher-role]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-20"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Pennington and Hock (2026) argue that the third mode of classroom assessment — [[assessment|assessment as learning]], in which students monitor and reflect on their own progress rather than being assessed *for* or *of* their learning — gets the least attention of the three, and that [[generative-ai]] can make it practical. Their premise is that assessment only functions as a learning tool once students are [[feedback-literacy|feedback literate]]: they understand the goals being evaluated, can read and apply feedback, and can set goals and act on them. The authors describe two moves. First, instructors use a large language model to generate a graded spectrum of work samples — essays scoring at the top, middle, and bottom of the rubric — and then teach students to critique them through a gradual release of responsibility, so students learn to see success criteria "in action" before applying that judgment to their own work. Second, instructors teach students to prompt AI for criterion-referenced feedback, then judge, organize, and act on it themselves, using guiding questions drawn from thinking-skills and feedback-literacy frameworks. The authors position AI as one more voice alongside instructor and [[peer-assessment|peer feedback]], never a replacement, and report no empirical evaluation.

## Key Findings

1. **Assessment as learning is the overlooked mode.** Instruction on classroom assessment centers on assessment *for* learning (informing teaching) and assessment *of* learning (measuring outcomes), leaving the mode where students monitor and reflect on their own progress comparatively neglected (Earl, 2007).
2. **Feedback literacy is the prerequisite.** To use assessment as learning, students must know what goals an assessment measures, know how to read and apply feedback to improve their performance, and be able to set goals and pursue them — capacities that take sustained practice to build.
3. **AI can supply the work samples that critique depends on.** Rather than spending hours writing exemplars or locating prior student submissions, instructors prompt an [[llm]] with their rubric and ask for several samples spanning the full range of quality.
4. **Gradual release structures how students learn to judge.** The I Do–We Do–You Do sequence — an instructor think-aloud, guided class analysis, then independent evaluation with a whole-class debrief — teaches students to detect both errors and successes against explicit criteria.
5. **[[ai-feedback-quality|AI feedback]] complements rather than replaces the instructor.** Prompted with the directions and rubric, AI can give targeted, timely, criterion-level feedback, and the authors cite research showing that [[teacher-role|teacher]]-plus-AI feedback improves learning outcomes in college settings.
6. **Students must judge the feedback before applying it.** Because AI output may be inaccurate, students are taught to appraise its quality and decide what to act on — which is itself practice in [[self-assessment]] and [[evaluative-judgment|evaluative judgment]].
7. **[[scaffolding|Scaffolds]] and routines carry the learning.** Guiding questions, a chart for recording feedback and the decision whether to apply it, and peer discussion convert a one-off exercise into an ongoing habit of feedback use.

## Assessment as learning and the feedback literacy gap

Assessment is usually taught in two registers. [[formative-assessment|Formative assessment]] informs the instructor's next move, and [[summative-assessment|summative assessment]] certifies whether goals were met. Assessment *as* learning is different: students themselves cultivate and apply the skills of monitoring and reflecting on their progress, using assessment to deepen learning rather than to report on it. It draws on [[metacognition|metacognitive]] capacities — self-assessment, self-monitoring, strategy evaluation, sustained reflection, and goal-setting — and is where a durable, transferable learning skill is built.

The authors' central claim is that this mode is blocked by a prerequisite most students lack. Feedback literacy means understanding the learning goals an assessment evaluates, knowing how to read and apply [[feedback]] to improve performance, and being able to set goals and behave in a [[self-directed-learning|self-directed]] way to reach them. Developing it is hard: students must combine content understanding with disciplinary learning to improve a process, project, or product, and they must proactively and willingly receive, process, and apply feedback. Because the competences involved — accurate self-appraisal, [[self-regulated-learning|self-regulation]] — take time to develop, instructors often skip the work; the authors argue the return justifies it, and that efficiency is where AI enters.

## Generating AI work samples for student critique

The common strategy is to have students evaluate existing work against rubric criteria derived from the learning goals, so they see what the criteria look like in practice; its obstacle is preparation time: writing samples of varying quality or finding prior students' work that spans the range. The authors' first recommendation is to have AI do that preparation.

The suggested prompt teaches the tool the success criteria — pasted or uploaded — then asks for samples of graded quality: one meeting every criterion, one partially, one not yet, and mixes of adjacent levels. Those samples anchor a lesson built on the gradual release of responsibility. The instructor reviews the criteria and has students restate them in their own words, then models with a think-aloud how to check each criterion and land on a score. Students evaluate a second sample with instructor guidance and prompting for rationales, then a third independently while the instructor circulates, and the class debriefs which criteria were met, how students know, and what would change the work. Evaluating against explicit criteria is what prepares students to analyze their own work; the process adapts to any modality, and the [[prompt-engineering|prompt]], not the tool, does the heavy lifting.

## Prompting AI for feedback and building self-directed revision

Prompted carefully, AI can give students timely, actionable feedback, though providing detailed feedback quickly for a large cohort is exceptionally hard. AI-generated feedback should not substitute for the instructor's, but it can complement it, cut turnaround time, and give students more chances to engage in assessment as learning. Instructors model how to prompt for feedback: state the subject, paste the directions and the rubric, ask for targeted commentary on one criterion, request strengths and areas for improvement — and explicitly forbid corrections, asking instead for considerations and starting points.

Students then critique their own drafts, identify improvements, and plan revisions. The authors caution that AI output may be inaccurate or unreliable, and should be interpreted with oversight; students must use their own reasoning and judgment to appraise the feedback and decide whether to apply it. Exercising that judgment builds precisely the facets of feedback literacy the article targets: self-assessment, feedback interpretation, judgment of learning, and planning next steps. Because the guidance arrives on demand, students can run the cycle several times before submitting to the instructor, taking more ownership and freeing instructor time for tasks that cannot be automated. They stress that AI is one additional voice: instructor and peer feedback should not be displaced, and feedback should remain collaborative and iterative.

## Scaffolding feedback use and making it routine

Feedback only matters if it is understood and applied, and students typically need help interpreting it — from AI or an instructor. The most concrete contribution is a set of guiding questions shared with students, by thinking-skill category: *understand* (Do I need follow-up questions, or should I prompt the tool again?), *organize* (How do I sequence this into steps? What is my first step?), *analyze* (Do I agree with this feedback, and why? Can I apply it? Should I ask for detail?), and *self-direct* (What support do I need from my instructor or peers, and what resources must I consult?). A companion scaffold is a chart where students record each piece of AI feedback, whether they will apply it, and their reasoning — a structure that prompts the "meta-dialogue" which improves metacognition and signals that AI feedback should be considered rather than accepted.

Three recommendations hold the practice together. Make feedback routine, so engaging with it becomes normal and AI serves as a low-stakes first-pass check. Keep it timely: feedback lands best soon after a draft and when it solves a concrete problem, so reserve class time to review, discuss, and revise on the spot — and note that on-demand AI feedback can also happen outside class. And scaffold its use, because students process feedback more effectively with questions, reflection prompts, organizers, and peer dialogue than alone. Instructors model the loop with think-alouds, showing how they elicit AI feedback and why they accept or reject it, before students run it themselves. On access, the authors urge building AI use around institutional tools so students have identical access levels rather than a paid-and-unpaid split.

## What this means for practice

- **Instructors.** Treat the rubric as a teaching object, not a grading key: have students restate the criteria in their own words and judge AI-generated work samples of differing quality before they judge their own.
- **Instructors.** Fold AI feedback into the drafting cycle as a low-stakes first-pass check, then protect class time for students to review it, discuss it with peers, and revise while the feedback is fresh — and keep giving your own feedback alongside it.
- **Instructors.** Model the workflow with think-alouds, showing how you prompt for feedback, how you decide what to apply, and why, so students see [[critical-thinking|critical evaluation]] of AI output as the expected move rather than an optional one.
- **Assessment designers.** Write success criteria and rubrics to be explicit and criterion-referenced, because both the work-sample prompts and the student feedback prompts depend on the tool being taught those criteria clearly.
- **Faculty developers.** Package this as a demonstrable routine — a modeled lesson cycle, sample prompts, and the guiding questions — so instructors adopt a practice they have seen rather than a prompt they must interpret alone.

## Limitations

- The article is conceptual and reports **no empirical evaluation**: there is no sample, no setting, no comparison group, and no outcome data, so the guidance describes a proposed, untested practice.
- The prompts and guiding questions are illustrative examples, not validated instruments; their effectiveness depends on the model, the quality of the rubric, and how the instructor frames the task.
- The efficiency benefit is asserted rather than measured: the authors argue AI saves preparation and feedback time but report no workload or turnaround data.
- The rationale that AI feedback complements instructor feedback leans on cited studies rather than the authors' own evidence, and the article does not address how AI and human feedback should be weighted or sequenced.
- [[equity-in-ai-education|Equity]] and access are named as risks rather than solved: students may not have equal access to tool versions, and recommending institution-provided tools defers the problem to institutions without evidence that doing so closes the gap.
- The authors themselves advise trying these processes in small quantities and evaluating them methodically, which concedes that whether AI use supports or impedes learning is an open question.

## Citation

Pennington, L., & Hock, M. (2026). [Using AI to Build Student Feedback Literacy and Leverage Assessment as a Learning Tool](https://doi.org/10.61669/001c.172637). *Intersection: A Journal at the Intersection of Assessment and Learning, 7*(5), 22-30.
