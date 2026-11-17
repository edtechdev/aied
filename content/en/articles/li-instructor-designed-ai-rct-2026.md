---
title: "Instructor-designed AI improves learning in a randomized trial across 19 universities"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Li, J.", "Bray, R.", "Martin, S.", "Van den Steen, N.", "Wu, A.", "Ni, X."]
published: "2026"
venue: "arXiv preprint 2611.19099"
source_url: https://arxiv.org/abs/2611.19099
evidence_context: educational
confidence: high
pedagogy: [student-ai-interaction, scaffolding, student-engagement]
technology: [generative-ai, pedagogical-agent, intelligent-tutoring, simulation]
assessment: [learning-gains, assessment-validity, formative-assessment]
foundations: [teacher-role, academic-integrity]
methods: [rct, quantitative-research]
institutions: [change-management]
research_method: [experiment]
discipline: [business education, stem education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, administrators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/li-instructor-designed-ai-rct-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** A pre-registered [[rct|randomized controlled trial]] asked whether AI designed by frontline instructors, rather than a chatbot prescribed from the top, improves learning. Across 7,200 students in 55 classes at 19 universities over three semesters, spring 2025 to spring 2026, classes were randomly assigned to deploy their instructor's AI innovation immediately or after a one-term delay. Learning, measured on proctored in-person examinations that AI could not assist, rose 0.32 SD at the student level (SE=0.13; P=0.019) and 0.26 SD at the class level (SE=0.12; P=0.038) relative to each class's own history. Engagement and course evaluations did not move. The instructors built 33 kinds of intervention, from Socratic coaching agents to stakeholder role-play, and students who used them rated the experience far above the achievement data alone would predict.

## Key Findings

- **Instructor-designed AI raised exam scores.** Learning rose 0.32 SD (SE=0.13; P=0.019) at the student level and 0.26 SD (SE=0.12; P=0.038) at the class level, measured on proctored, AI-free assessments.
- **Engagement and satisfaction did not change.** The engagement estimate was a 0.07 SD decline (SE=0.14; P=0.60) and satisfaction a 0.11 SD decline (SE=0.10; P=0.29); neither differed from zero.
- **The comparison arm was a one-term delay.** 55 classes taught by 42 instructors at 19 universities were block-randomized within subject and level, and every control instructor deployed the innovation the following term.
- **No single AI design dominated.** Instructors produced 33 distinct student-facing interventions across seven pedagogical functions, with the average class's innovation serving 3.0 of those functions.
- **Students valued practice and explanation most.** Of 1,414 informative answers, 49.2% named practice and exam preparation, 33.0% recall and problem solving, and 23.2% content tailored to the course.
- **Perception tracked satisfaction, not scores.** Students who said the AI improved the educational experience rated "I learned a lot in this course" at 4.18, against 3.35 for students who said it worsened the experience.
- **The effect is large for an education intervention.** The paper sets 0.26 SD against a 0.10 SD median for pre-K–12 randomized interventions and 0.47 SD for active learning in undergraduate STEM.

## A waitlist trial inside 55 real courses

The trial covered 7,200 students in 55 classes at 19 universities, from spring 2025 to spring 2026. The courses were applied STEM: statistics, probability, machine learning, optimization, simulation, data analytics, regression, forecasting, decision analysis and modeling, with applications in economics, management, health care, supply chain, information technology and finance. Thirty classes were undergraduate, 25 graduate. Before each term instructors submitted an innovation proposal, and courses were clustered by subject and academic level, then block-randomized within cluster so each arm held roughly half. Treatment classes deployed their instructor's AI in the assigned term; control classes deferred one teaching term, and all of them implemented it afterwards. Assignment was at the class level, with a difference-in-differences comparison against each class's own prior terms, which is what lets a [[higher-ed]] study of this size speak to ordinary teaching rather than to a single showcase course.

## What instructors built when given the design brief

Instructors were not handed a tool. They were handed a deployment platform, Faculty Twin, co-developed with Google's Rapid Innovation Team and run in a FERPA-compliant environment, plus one constraint: the proposal had to exceed students' ambient AI use, which ruled out simply permitting ChatGPT on homework. The result was 33 distinct student-facing interventions across seven pedagogical functions. Twenty-five classes built course-navigation agents; 19 built [[pedagogical-agent|coaching agents]] that use Socratic questioning and withhold the answer; 18 built practice and exam-preparation tutors with [[formative-assessment|formative feedback]]; eight ran stakeholder role-play with simulated clients or executives; eight built interactive [[simulation|simulations]]; six built reflection agents tied to careers and motivation; five taught [[ai-literacy]] by having students audit AI output. The average class combined 3.0 functions, so the typical design wove an agent through several parts of a course rather than parking a single chatbot in a sidebar.

## The gain shows up on exams AI cannot help with

The learning outcome is the strictest part of the design. Instructors reported raw, uncurved assessment scores, and the analysis retained only assessments the authors call AI-proof: proctored, in-person examinations, most of them paper-based, the rest run on surveillance software or restricted-access testing-center machines. Honor codes and syllabus prohibitions did not qualify. That filter left 44 class-terms and 4,768 students, and it is the reason the [[learning-gains|learning gains]] cannot be explained by students looking up answers during the test. The estimates held across an OLS specification and two instrumental-variable specifications, and across two inference methods, at both levels of aggregation. The mechanism the authors propose is consistent with the interventions: most instructors required an attempt and an explanation before releasing an answer, which keeps the [[student-ai-interaction]] from becoming the [[cognitive-offloading|offloading]] pattern behind the null and negative results in earlier [[liu-course-integrated-ai-tutoring-rct-2026|course-integrated tutoring trials]].

## Students liked it, and their course evaluations did not move

The student survey ran in treatment classes only: 2,019 of 4,898 students responded. Mean ratings were 4.00 for effort, 3.97 for "I learned a lot," and 3.72 for recommending the class. The AI items are lopsided: 16.1 times as many students said the AI learning aids improved the educational experience as said they worsened it, and 5.1 times as many wanted additional AI aids as did not. Practice and exam preparation led the open-ended likes at 49.2%, followed by recall, comprehension and problem solving at 33.0%, tailored content and increased trust at 23.2%, and time saved at 14.5%. The dislikes were mostly demands for more: 23.5% wanted more regular use, 22.7% harder and more varied practice, 20.1% closer alignment with the course. Only 8.6% wanted less AI, and 4.0% raised overreliance. None of this appeared in the institutional [[self-report-measures|course evaluations]], where satisfaction did not shift, a gap worth carrying into any evaluation of an AI rollout.

## What this means for practice

- **Instructors:** design the AI around the problems your own students hit, and require an attempt before it answers. The effect was earned on proctored exams, not on quizzes taken with the tool open.
- **Administrators:** fund instructor design time and a shared, compliant deployment platform instead of mandating one approved assistant. The control condition was a delay, not a ban, so the trial removed nothing from anyone.
- **Developers:** build for instructor configuration of prompts, course materials and agent behavior. A generic assistant was not what produced these gains; the course-specific configuration was.
- **Researchers:** treat end-of-term course evaluations as a satisfaction measure, not as evidence about learning. Here they were flat while achievement rose.

## Limitations

- Every participating class was applied STEM, drawn from statistics, optimization, forecasting, simulation and modeling courses, so effects in humanities, social science and clinical courses remain untested.
- Few classes were observed in a second or third implementation, which limits any claim that the gains persist across repeated offerings.
- Engagement data came from whatever each site had: attendance, participation, homework completion, LMS logins. The null is partly a measurement artifact, since out-of-class study went unobserved.
- The trial is underpowered to separate the 33 interventions, so nothing here says which design features produced the 0.32 SD.
- The AI-proof assessment filter was not pre-registered; the authors added it after realizing assessments could be taken with AI assistance.
- Consent covered a mean 79.4% of students, and the student-level analysis rests on those who agreed to share data.

## Citation

Li, J., Bray, R., Martin, S., Van den Steen, N., Wu, A., Ni, X., et al. (2026). [*Instructor-designed AI improves learning in a randomized trial across 19 universities*](https://arxiv.org/abs/2611.19099). arXiv preprint 2611.19099.
