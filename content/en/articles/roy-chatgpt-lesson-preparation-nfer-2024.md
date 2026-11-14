---
title: "ChatGPT in Lesson Preparation: A Teacher Choices Trial"
created: "2026-11-11T07:36:12-05:00"
updated: "2026-11-14T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors, administrators]
sources: ['raw/papers/roy-chatgpt-lesson-preparation-nfer-2024.md']
source_url: "https://d2tic4wvo1iusb.cloudfront.net/production/documents/projects/chatgpt_in_lesson_planning_-_evaluation_report.pdf"
source_depth: full text
confidence: high
foundations: [teacher-role, curriculum-design]
pedagogy: []
technology: [generative-ai, llm, prompt-engineering]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** A cluster-randomized Teacher Choices trial tested whether using [[generative-ai|ChatGPT]] to prepare Year 7 and Year 8 science lessons reduced [[teacher-role|teachers']] planning time in English secondary schools. Thirty-four schools (129 teachers) were assigned to ChatGPT and 34 schools (130 teachers) to a no-GenAI comparison for ten weeks in the summer term of 2024. In weeks six to ten the ChatGPT group spent roughly two-thirds of the comparison group's preparation time, a saving of about half an hour a week, with no detectable difference in the quality of lesson resources. Teachers used the tool for only one or two activities per lesson. The trial therefore supports a workload benefit from modest use, not a claim about [[learning-gains|pupil learning]].

## Key Findings

1. **Planning time fell by about a third.** In weeks six to ten, after a five-week settling-in period, teachers using ChatGPT spent roughly two-thirds of the comparison group's time on lesson and resource preparation.
2. **The weekly saving was about half an hour.** A typical non-GenAI teacher spent 81.5 minutes a week preparing lessons and resources for Year 7 and Year 8 science, against 56.2 minutes for a ChatGPT teacher.
3. **Resource quality did not differ.** A panel of five experienced science teachers and leaders, blind to group allocation, ranked lesson sets from the two arms and found no difference in quality.
4. **The dose was small and fell over the trial.** ChatGPT teachers used the tool for 39% of their nominated lessons in the first five weeks and 29% in the second, mostly for one or two activities such as creating questions or finding activity ideas.
5. **Guide use declined with it.** The teacher guide was consulted in 52% of weeks in the first block and 41% in the second, and some teachers never opened it.
6. **Compliance predicted the size of the saving.** Teachers who used the tool more and scored higher on the guide quiz saved considerably more time than the arm average.
7. **Teachers saw no change for pupils.** Most reported pupil engagement and learning as similar, no teacher reported a negative impact, and most of those assigned ChatGPT intended to keep using it.

## What the study did

The trial was commissioned by the Education Endowment Foundation and the Hg Foundation and run by the National Foundation for Educational Research. It randomized 68 secondary schools in England at school level. Eligible teachers taught Year 7 and/or Year 8 science and had to complete a baseline survey before randomization on 25 March 2024. The two arms were a ChatGPT group told to use the free version of ChatGPT for lesson and resource preparation, with access to a web-based guide built around six use cases, and a non-GenAI group told to use no generative AI for the same lessons.

The primary outcome was cumulative hours spent on lesson and resource preparation for the nominated classes over weeks six to ten, after a five-week learning period. Teachers recorded it in a weekly online diary that excluded teaching, marking and administrative tasks. The trial also measured preparation time in weeks one to five, the quality of submitted lesson resources, the proportion of lessons planned with ChatGPT, and consultation of the guide. A parallel process evaluation used surveys, interviews, planning walkthroughs and ChatGPT transcripts.

Randomization produced similar baseline preparation time in both arms, though the non-GenAI group averaged slightly more teaching experience. Across the 129 teachers in the ChatGPT arm and 130 in the non-GenAI arm, 18.5% were not included in the primary analysis because they did not complete enough diary entries; attrition was 21.7% in the ChatGPT arm against 15.4% in the non-GenAI arm.

## Why a small dose still moved the outcome

The striking feature of the result is the mismatch between dose and effect. Teachers did not hand whole lessons to ChatGPT. They used it for a narrow slice of [[learning-design|instructional design]] work, usually generating questions, quizzes or activity ideas, and the transcripts showed that follow-up prompts to refine output were relatively rare. Yet the group difference held at both five-week blocks.

The primary comparison is a difference in hours, not minutes, and it survived adjustment. Over weeks six to ten, adjusted preparation time was 4.68 hours (95% CI 3.88 to 5.65) in the ChatGPT arm against 6.79 hours (5.66 to 8.16) in the comparison arm, a fold change of 69% (53% to 90%) and a Hedges' g of −0.38 (−0.65 to −0.11), p = 0.006, across 211 teachers. In weeks one to five the ChatGPT group spent 73% (56% to 95%) of the comparison group's time, with adjusted means of 5.45 hours against 7.5 hours and p = 0.018. The authors had expected a costly learning period at the start, but none appeared: the saving was already there in the first block and slightly larger in the second.

Two explanations are consistent with the data. First, the tasks ChatGPT was used for are high-frequency, low-risk components of planning, so removing even part of them compresses the weekly total without redesigning the lesson. Second, the saved time was not released as leisure: teachers reported redirecting it to other preparation tasks or reducing overall workload, though the trial did not measure which.

The moderator analysis adds a distributional point. Teachers confident in teaching physics or confident with technology were more likely to use ChatGPT, while those confident in their science subject knowledge used it less. Teachers more confident with technology also reported greater time savings, and the report suggests ChatGPT may save more time for teachers less confident in planning and teaching physics. That is a hypothesis, not a tested primary contrast.

Compliance carried a large share of the effect. Some 38.6% of ChatGPT teachers met the criteria — being in the top 60% for the proportion of lessons planned with ChatGPT and scoring at least six out of eight on the guide quiz — and the estimated impact of compliance on preparation time was a fold change of 0.38 (0.19 to 0.74), p = 0.005. Read alongside the falling dose, that says the average saving is produced by a minority of teachers using the tool regularly, not by the arm as a whole.

Resource quality was checked twice. The blind panel found no difference in rank, with median ranks of 13 for ChatGPT and 16 for non-GenAI and means of 15.87 and 15.13 (U = 184, p = 0.84). Teachers themselves most often described their ChatGPT-supported resources as similar in quality (52%), with 26% saying slightly higher and 22% lower or slightly lower. An analysis of 11 transcripts found no evidence that low panel ratings for scientific accuracy came from ChatGPT output. The trial did not test pupil attainment, which the authors judged infeasible within the timeline, so the logic model's route from saved time to better pupil outcomes remains untested.

## What this means for practice

- **Instructors:** treat ChatGPT as a tool for bounded planning tasks, such as generating practice questions or activity ideas, rather than as a lesson generator. The time saving in this trial came from that kind of use, and the teachers who used it most and knew the guidance best saved the most.
- **Designers:** build guidance around a small set of concrete use cases with worked prompts, as the trial's guide did, and expect follow-up [[prompt-engineering|prompting]] to be rare unless it is taught explicitly. The report flags dialogic refinement of outputs as an area for further development.
- **Administrators:** a workload case can be made at roughly 25 minutes per teacher per week, but it depends on staff actually adopting the tool. Only 38.6% of the ChatGPT arm met the compliance criteria, and use fell from 39% to 29% of lessons across the trial.
- **Subject leaders:** check outputs against reliable sources, particularly when a teacher is using ChatGPT outside their subject confidence. The report notes this matters most for teachers who are less confident in the topic and therefore less able to spot an error.
- **Researchers:** measure workload and resource quality together. A time saving is only interpretable alongside evidence that the materials stayed usable.

## Limitations

- The schools volunteered, so the teachers were likely more positively disposed toward ChatGPT than the wider profession, and the trial ran in the summer term, when wider workload can shift for reasons unrelated to the intervention.
- The primary outcome was [[self-report-measures|self-reported]] in a diary developed for the trial and not piloted; teachers were not blind to allocation, so reporting bias cannot be excluded.
- The quality analysis drew on 15 lesson sets per arm, teachers chose which lessons to submit, and ChatGPT teachers were asked to submit only lessons that had used the tool, which could have raised the apparent quality of that arm.
- The comparison is one specific tool against no generative AI, and no pupil attainment was measured.
- The report also notes that the primary analysis was changed from weighted to unweighted after analysis began, with weighted results reported in an appendix.

## Citation

Roy, P., Poet, H., Staunton, R., Aston, K., & Thomas, D. (2024). [*ChatGPT in Lesson Preparation: A Teacher Choices Trial*](https://d2tic4wvo1iusb.cloudfront.net/production/documents/projects/chatgpt_in_lesson_planning_-_evaluation_report.pdf). Education Endowment Foundation.
