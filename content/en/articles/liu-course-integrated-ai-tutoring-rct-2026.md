---
title: "The Effects of Course-Integrated AI Tutoring on Student Performance and Engagement: A Randomized University Trial"
created: "2026-09-30T07:02:00-04:00"
updated: "2026-09-30T07:02:00-04:00"
type: article
sources: ['raw/papers/10.26300_y3f8-vh05.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators, instructional designers]
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [self-regulated-learning, student-engagement]
technology: [generative-ai, intelligent-tutoring, llm, rag]
assessment: [learning-gains]
methods: [rct, quantitative-research]
ethics: [differential-effects-across-learner-groups]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Liu and colleagues ran a group-[[rct|randomized trial]] of a course-integrated [[generative-ai|generative AI]] tutor at a large U.S. public university: 2,379 undergraduates and 30 instructors across 13 randomization blocks, 11 of the university's 12 schools, and course levels from 100 to 400. The Virtual Study Assistant was a GPT-4o [[conversational-ai|chatbot]] with [[rag|retrieval-augmented generation]] over each instructor's own course materials, embedded in the [[learning-analytics|LMS]] and citable to source slides and lecture timestamps — a technically well-integrated tool. The results are adverse. In the exact-match sample (sections of the same course), access to the tutor lowered final grades by 4.12 points, equivalent to 0.37 standard deviations, and GPA-scale letter grades by 0.13 SDs, while the full sample showed no significant achievement effect. Behavioral effects were larger and consistent across both samples: page views fell by 0.37–0.38 SDs, active days by 0.51–0.61 SDs and recorded participations by roughly 0.90 SDs. Only about 15% of students in treated classrooms ever used the tool, users averaged roughly four sessions, and first-generation students carried the largest academic losses. The authors read the pattern as a deployment risk rather than a verdict on tutoring: the tool was technically integrated but not instructionally integrated, and what it displaced — practice, feedback-seeking, and contact with instructors — is what the course was built on.

## Key Findings
1. The design was a group-randomized trial: instructors were grouped by teaching the same or similar courses (13 randomization blocks, nine of them exact-match sections of one course) and randomly assigned within block to the treatment (tutor on) or control condition, so every student taught by an instructor inherited that instructor's condition; three instructors who never activated the tool were dropped from the analysis.
2. Uptake was low and episodic: about 15% of students in treated classrooms used the Virtual Study Assistant at least once, and users averaged approximately four sessions, often concentrated around examinations.
3. In the exact-match sample, treatment reduced final grades by 4.12 points (0.37 SDs) and GPA-scale letter grades by 0.11 points (0.13 SDs) in the model with controls; homework scores showed no effect. The full sample showed no statistically significant adverse achievement effects, which the authors attribute in part to weak alignment between courses and grading.
4. Engagement with the existing platform fell sharply and consistently: with controls, the exact-match sample lost 720.96 page views (0.37 SDs), 7.19 active days (0.51 SDs) and 26.39 recorded participations (0.90 SDs), while the full sample lost 593.08 page views (0.38 SDs), 9.27 active days (0.61 SDs) and 22.51 participations (0.89 SDs).
5. Homework submission and on-time submission were unaffected — coefficients near zero and insignificant in both samples — so the participation decline came from activities other than meeting assignment requirements, and the authors read the co-occurrence of lower participation with lower final grades as a possible case of reduced engagement outweighing efficiency gains.
6. First-generation status was the most consistent dimension of differential harm: in the full sample the effect on final grades was 2.87 points (0.28 SDs) more negative for first-generation students, implying −5.10 points (−0.50 SDs) for them against −2.23 points (−0.22 SDs) for their peers, with a larger differential in the exact-match sample (−3.89 points, −0.35 SDs), plus additional homework-score and page-view reductions. There was no clear achievement gradient by prior high school GPA.
7. Chat content was dominated by information retrieval: of 3,460 student requests classified into five categories by a GPT-based classifier (86% accuracy against 200 human-coded held-out turns), 73.8% were direct-answer requests and 11.3% practice or test preparation, while requests for feedback on students' own attempts were the rarest category; treatment-group respondents were more likely to agree that they asked the instructor fewer questions about course content (about 57% versus 44%).
8. The authors distinguish technical from instructional integration: instructors received no prescribed approach for using the tool in learning activities, none of the treatment-group instructor survey respondents reported integrating it into assignments, and most used the default direct-instruction mode rather than the tutor mode available to them.

## What the trial tested

The intervention is worth stating precisely, because it is not a test of [[intelligent-tutoring|AI tutoring]] as a design but of access to a well-grounded tool. The Virtual Study Assistant sat inside the institution's LMS with GPT-4o behind retrieval over instructor-selected pages, PDFs, slides and video transcripts, returned citations, linked to the timestamp in a [[video-education|lecture video]] that answered a question, refused out-of-scope queries, and let instructors choose between tutor and direct-instruction modes. Course grounding and convenient access were therefore solved problems in this deployment. What was not specified was instruction: no prescribed activities, no assignment integration, and default direct-instruction mode in most sections. The authors' interpretation is that relevance and access do not produce productive use, and that the tool's presence may have signaled permission to shift effort toward on-demand answers — their stated reading is that the trial estimates the effect of the broader AI use the tool induced, not the isolated effect of individual sessions.

That reading is supported by the substitution evidence rather than assumed. Fewer page views alone would be ambiguous, since efficient retrieval is a design goal. The decline extended to recorded participation — assignment submission, discussion responses, quizzes — at roughly 0.9 SDs while homework submission itself was unaffected, and treatment students reported asking instructors fewer content questions. The chat classification adds the mechanism: the modal request was for an answer, and requests for feedback on the student's own attempt were the rarest category, which is the opposite of the attempt–feedback–revise loop that structured tutoring studies have used to produce gains. [[help-seeking|Help-seeking]] shifted away from humans and toward on-demand answers rather than becoming more productive.

## Where the harm fell, and how to read the effect sizes

The trial's strongest internal contrast is between the two samples. The full sample mixes courses that differ in how much of a grade depends on the activities the tool might affect, and it shows no significant achievement effect; the exact-match sample compares sections of the same course, where grading and course structure are held constant, and it shows the 0.37 SD decline. For a reader deciding what to believe, that is the more informative comparison and also the smaller sample, so the paper reports both rather than picking one. The engagement effects, by contrast, appear in both.

The [[equity-in-ai-education|equity]] finding deserves separate weight because it is the pattern the study was positioned to detect and it runs against the usual expectation. First-generation students lost more on final grades, homework scores and page views than their peers — in the full sample, half a standard deviation of grade against 0.22 for other students. The trial cannot say why; the authors report the differential without a mechanism, and precision varies across outcomes. What it rules out is the simple version of the equity story in which a free always-available tutor narrows gaps by substituting for support that some students cannot afford. In this deployment, the students with the least prior access to academic support carried the largest measured cost.

## What this means for practice

- **Treat access as an intervention, not a neutral upgrade.** A well-grounded, citable, course-specific tutor with low uptake still moved grades and participation; the decision to deploy is a [[pedagogy|pedagogical]] decision with measurable consequences, and it needs the same design scrutiny as any other change to a course.
- **Plan the instructional integration before switching the tool on.** No treatment-group instructor reported integrating the tool into assignments and most left it in direct-instruction mode. If the intended use is attempt–feedback–revise, that has to be assigned, modeled, and assessed, not merely made available.
- **Watch participation, not just completion.** Homework submission held steady while platform participation fell by roughly 0.9 SDs, so completion rates would have hidden the change. Track the activities you actually care about rather than the ones that are easy to count.
- **Check first-generation students explicitly in any pilot.** The differential harm here was concentrated there, which makes subgroup monitoring a precondition for deployment rather than a follow-up analysis.
- **Expect the direction of travel to depend on design, not on the model.** The paper sets its result against structured AI-tutoring RCTs that produced gains (Kestin et al. 2025) and alongside guardrail studies showing harm (Bastani et al. 2025); the difference between them is what students are asked to do with the tool, which is a course-design variable.

## Limitations

- Course grades rather than independently administered assessments make a learning effect hard to interpret, and despite within-course random assignment sections may still differ in grading practice and in how much participation the platform records.
- Platform behavior captures only a fraction of learning activity, so the engagement effects describe the LMS rather than studying in general.
- The trial is an intent-to-treat estimate with about 15% uptake in a university where other AI tools were already available, so it likely measures the effect of introducing the tool — including the permission and substitution effects that come with it — rather than the effect of using the tutor.
- The paper's own report of the rarest chat category is inconsistent between sections (0.7% in the results text against 7.6% in the discussion), so the claim that feedback-on-attempt requests were rare is safe while any specific percentage for that category is not.

## Citation

Liu, J., Sweet, T., Chen, M. H., Engelberg, J., Clark, M., Persaud, A., Lancaster, A., Hollingsworth, J., Rice, J. K., & Masters, M. (2026). [The Effects of Course-Integrated AI Tutoring on Student Performance and Engagement: A Randomized University Trial](https://doi.org/10.26300/y3f8-vh05). EdWorkingPaper No. 26-1598. Annenberg Institute at Brown University.