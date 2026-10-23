---
title: "Measuring undergraduate students' reliance on generative AI during problem-solving: Scale development and validation"
created: "2026-10-23T09:45:00-04:00"
updated: "2026-10-23T09:45:00-04:00"
type: article
foundations: [cognitive-offloading, cognitive-surrender, human-ai-collaboration]
pedagogy: [problem-based-learning, problem-solving, student-ai-interaction, collaborative-learning, metacognition]
technology: [generative-ai]
assessment: [assessment-validity, self-report-measures, educational-measurement]
methods: [quantitative-research]
research_method: [instrument development, survey, structural equation modeling]
level: [higher ed, undergraduate]
audience: [researchers, instructors, faculty developers, instructional designers]
page_kind: [evaluation]
sources: ['raw/papers/genai-reliance-scale-problem-solving-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Most instruments that measure reliance on AI infer it from outcomes — whether a user followed advice that turned out to be correct — which presumes a task with a checkable answer. Hou and colleagues (2025) argue that [[problem-solving]] inside [[problem-based-learning|problem-based learning]] has no such shape, and so they built and [[assessment-validity|validated]] a 16-item [[self-report-measures|self-report]] scale that asks undergraduates how they used [[generative-ai]] across the three stages of a task without tying any item to correctness. An exploratory factor analysis on 800 responses from a 3D maze activity returned four factors — reflective use, cautious use, thoughtless use and collaborative use — with an overall Cronbach's alpha of .84, and two confirmatory factor analyses on 730 and 1,173 responses from differently shaped tasks fit adequately. Reflective use was the most frequent behavior (M = 4.01) and cautious use the least (M = 3.46), and thoughtless use correlated positively with reflective use (r = .28), which undercuts the habit of reading [[cognitive-offloading|overreliance]] as a fixed property of a student rather than a moment in a task.

## Key Findings
1. **Four factors, not one reliance trait.** The EFA on 800 responses from the 3D Maze week retained 16 items, four per factor: reflective, cautious, thoughtless and collaborative use.
2. **Reliability held at the scale level.** Cronbach's alpha was .84 for the whole instrument, .74 for reflective use, .72 for thoughtless use, .76 for collaborative use and .65 for cautious use.
3. **The structure survived a second task.** Confirmatory fit was adequate for the maze data (CFI = .89, RMSEA = .06, SRMR = .06) and the policy-drafting data (CFI = .91, RMSEA = .06, SRMR = .06).
4. **Reliance shifted with the task.** Reflective (M = 4.01 vs. 3.76), thoughtless (M = 3.61 vs. 3.15) and collaborative use (M = 3.92 vs. 3.74) were all significantly higher in the maze week than in the policy week.
5. **Cautious use did not move at all.** It was the rarest behavior and statistically identical across the two activities (M = 3.46 in both, t = .19), holding near the midpoint of the frequency scale.
6. **Reflection and thoughtlessness coexisted.** Thoughtless use correlated .28 with reflective use and only .16 with cautious use, so the students most likely to revise prompts were also somewhat likely to paste an answer unchanged.
7. **Chat logs partly corroborated the reports.** In 8 transcripts from high-scoring groups, reflective students re-prompted ("I think you misunderstood my request"), while thoughtless groups pasted course example prompts without replacing the placeholders.

## Why outcome-based reliance measures did not fit

Existing instruments locate reliance in a decision: the switch fraction counts how often users change answers to match AI suggestions, the Weight of Advice compares a final judgment with an initial one, and Schemmer and colleagues separate rightly following advice from rightly rejecting it. All of these need immediate feedback on whether the advice was correct. Fok and Weld's strategy-graded reliance and Guo and colleagues' separation of mis-reliance from discrimination loss moved the construct toward expected performance, but still assume users can estimate how good the AI is and that human and model share an understanding of the task — a strong assumption for [[human-ai-collaboration|human-AI collaboration]]. [[problem-solving|Problem-solving]] offers neither: it runs through problem identification, information exploration, and solution generation and presentation, and students adopt suggestions gradually, not at a single choice point. Hou and colleagues therefore wrote 23 items from 904 reflective responses in an earlier study, mapped each to a problem-solving stage and to whether the reliance was on the AI, oneself, or peers, and set them on a five-point frequency scale (1 = Almost never, 5 = Almost always).

## Four ways of leaning on the model

The four factors are behavioral, not evaluative, and the authors resist ranking them. Reflective use covers designing one's own [[prompt-engineering|prompts]], reading output critically, revising prompting questions, asking the tool to improve an initial draft, and noticing that an answer is imperfect. Cautious use covers spotting an error, discarding output, and finishing a subtask with no or limited help from [[generative-ai]] — the weakest factor (alpha = .65, mean inter-item correlation .37), retained because no item removal improved it. Thoughtless use covers copying the task description into the chat, copying output into the solution, and adopting output without major changes — the behavior the authors say can erode [[critical-thinking|critical thinking]]. Collaborative use covers peers helping to spot errors or modify output, asking peers questions, and adopting a solution a peer proposed. The authors read cautious use as a behavioral trace of [[hallucination-risk|hallucination]] awareness and collaborative use as evidence that AI work remains socially embedded, which is why [[collaborative-learning|peer collaboration]] is measured rather than assumed.

## Reflection and thoughtlessness in the same student

The correlations are the most consequential result for how the field talks about overreliance. Reflective and collaborative use correlated .53, suggesting that students who interrogate the model also talk to each other about it; reflective and thoughtless use correlated .28. A student who rewrote a prompt in one stage could still paste the model's paragraph into the final answer, and the instrument records both — reflection here is a behavior in a moment, not a trait measure of [[self-regulated-learning|self-regulation]] or [[metacognition]]. Cautious use was the exception, correlating .16 with thoughtless use and .40 with reflective use, which fits the authors' claim that it is conceptually distinct rather than simply the low end of engagement. The task comparison sharpens the point: the maze week, where students built and solved mazes with pseudo-code, produced more of three behaviors at once, while the policy-drafting week produced less of all of them. Nothing in the design separates task difficulty from instructor permission, but the pattern is consistent with reliance being a response to what a task asks for rather than a stable disposition.

## Checking self-report against chat logs

A [[self-report-measures|self-report]] instrument records the story students tell about themselves rather than their behavior, so the authors added one check against observed behavior: they cross-read 8 chat histories submitted by groups whose average scores exceeded 4.5 on one factor across both weeks, choosing high scorers because their behavior should be most legible. Reflective groups adapted the tool to their own ends, asking for a harder maze or correcting a misread request. Thoughtless groups pasted the sample prompts printed in the course materials, occasionally leaving the placeholder text in place. Few groups scored high on cautious use, and those that did either caught errors or engaged minimally, which the authors read as a preference for working alone. Collaborative use was the hardest to confirm, because much of it happened offline, away from the chat window — a gap the authors acknowledge rather than resolve.

## What this means for practice

- **Instructors.** Run the 16 items right after a problem-solving activity and read the profile, not the total: a class can be high on reflective and thoughtless use at once, and the thoughtless items name moves (copying the task description, adopting output unchanged) you can correct next session.
- **Instructional designers.** Build in something to check the model against. Cautious use was the rarest behavior in both weeks (M = 3.46), and it is the factor with the weakest internal consistency (alpha = .65), so a course that wants verification behaviors has to design tasks that reward them.
- **Faculty developers.** Treat reliance as task-shaped when coaching course teams: the same students behaved differently in a programming game and a policy draft, so a fixed program-wide AI policy assumes the wrong thing.
- **Researchers.** Use the four subscales as separable outcomes rather than one reliance score, and test them against performance measures the original study did not collect.

## Limitations

- All data came from first- and second-year students in one digital literacy course at a single Asian university (3,030 enrolled across 70 tutorials); the authors note the sample cannot be generalized to K–12.
- The measure is retrospective self-report, and the [[qualitative-research|qualitative]] check covered only 8 chat histories, all from groups above 4.5 on a factor; the middle and low ranges were never validated against observed behavior.
- Cautious use fell below the conventional threshold (alpha = .65), and after item removal some stage-by-subject cells rest on a single item — AI reliance at problem identification is only "I copied the task descriptions or problem statements to Generative AI for help."
- The scale covers generative AI alone, not [[intelligent-tutoring|intelligent tutoring systems]], recommenders or adaptive platforms, and the paper does not report which model or version students used.
- Response counts differed between weeks (1818 and 1406 collected; 1540 and 1173 retained after screening careless responses) because some instructors did not allow generative AI that week, so the cross-task comparison is confounded with permission to use the tool.
- No problem-solving performance, grade or learning outcome was measured, so the scale can describe reliance but cannot yet say which patterns help.

## Citation

Hou, C., Zhu, G., Sudarshan, V., Lim, F. S., & Ong, Y. S. (2025). [*Measuring undergraduate students' reliance on generative AI during problem-solving: Scale development and validation*](https://doi.org/10.1016/j.compedu.2025.105329). *Computers & Education*, 234, Article 105329.
