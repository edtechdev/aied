---
title: "Teaching Intro AI When the Tools Can Do the Homework: A Course Redesign and a Student Bill of Rights"
created: "2026-08-10T09:10:02-04:00"
updated: "2026-09-24T12:02:37-04:00"
type: article
foundations: [academic-integrity, ai-education, ai-literacy, learning-design]
technology: [generative-ai]
assessment: [assessment]
ethics: [ethics]
connected_faqs: [course-ai-policy]
audience: [instructors]
research_method: [case study]
level: [higher ed]
sources: ['raw/papers/2608.05175.md']
confidence: high
discipline: [cs education]
---

> **Synthesis:** Yusuf Pisan's experience report describes redesigning CSS 382, an introductory [[ai-education|artificial intelligence]] course at the University of Washington Bothell, after large language models could complete most of its assignments. The [[curriculum-design|redesign]] kept the classical core (search, adversarial search, Markov decision processes, [[reinforcement-learning|reinforcement learning]]) and added a strand in which students build an [[llm|LLM]] from scratch, so that a tool they are required to use is also one they are required to understand. [[assessment|Assessment]] dropped [[summative-assessment|examinations]] entirely in favor of [[active-learning|in-class exercises]], reflective writing, and a defended team project, and the [[educational-policy-ai|AI policy]] inverted from unmentioned in 2023 to required in 2026. A three-week participatory [[ethics]] sequence produced a student-endorsed "Student Bill of AI Rights" binding the [[teacher-role|instructor]]'s own AI use. The design, the student-authored artifacts, and the tensions are reported with explicit attention to the limits of a single-cohort [[limitations-in-aied-research|experience report]] design, with implications for [[academic-integrity]], [[ai-literacy]], and [[governance]] in [[higher-ed|higher education]].

## Key Findings
1. The redesign kept the classical AI core while inverting the AI policy to required use, adding a strand where students build a language model from scratch.
2. Assessment dropped examinations for in-class exercises, weekly projects, and a defended team project a model cannot quietly ghost-write.
3. A Gemini-generated three-week ethics sequence produced a student-endorsed "Student Bill of AI Rights": disclosure, appeal of a grade to a human, and a "Beta-Test Rule" requiring instructors to solve AI-written assignments themselves.
4. The [[generative-ai|generative AI]] that scaffolded the ethics materials inserted references ranging from misattributed to apparently fabricated.
5. Students asked to design a fair grading policy for an exam-free course mostly reinvented the exam, the strongest challenge to the assessment structure.
6. The build-a-language-model strand was not delivered when class time ran short, leaving a gap between design and delivery.

## The Condition and the Redesign

The subject of an introductory AI course can now do the work of the course. Pisan rejects the policing ban, which fails because [[ai-detection|detection]] is unreliable and unenforceable, and rejects handing over the syllabus, which graduates students who can prompt a [[conversational-ai|chatbot]] but cannot judge what it returns. His third position: teach the classical material in a world that contains the tools, rebuild [[assessment]] around work that resists [[reducing-ai-misuse|unattributed automation]], and give students authorship over the rules. The [[framing-ai-use-for-students|graduated AI policy]] keys permitted use to each course's [[pedagogy|purpose]]: barred in introductory programming, allowed in data structures, required in CSS 382.

## Assessment Without Examinations

Grading had three components: in-class exercises (20 percent), weekly projects (40 percent), and a team project (40 percent). In-class exercises ran in a fixed hour and were graded complete-or-incomplete, with an [[ai-feedback-quality|advisory AI score and written feedback]] that never moved a grade. Reflective writing carries a first-person account a model can imitate but not honestly supply. Signature assignments paired the classical projects with tool work: *Universal Paperclips* as a [[game-based-learning|playable encounter]] with instrumental convergence and specification gaming, and a Morse [[problem-solving|puzzle]] where students could not write code and instead submitted the [[prompt-engineering|prompt log]]. Groups of two to three built a [[project-based-learning|team project]], a [[collaborative-learning|collaborative]] capstone.

## The Ethics Arc and the Student Bill of Rights

Three consecutive in-class exercises were each generated with Gemini from Pisan's own prompt, which he also used to summarize submissions. The first asked groups to draft a "Student Bill of AI Rights"; the second concluded that a CS degree now rests on [[computational-thinking|engineering judgment]] and supervision rather than code production; the third, on [[automated-assessment|AI grading]], asked for an ideal policy, and most groups reinvented the exam. Forty-four of forty-six students converged on disclosure of AI use, appeal of an AI grade to a human, and a "Beta-Test Rule" requiring the instructor to personally solve any AI-generated problem first. The terms were AI-proposed, student-endorsed, instructor-binding. A [[research-methods-aied|methodological]] caveat: the generated materials carried [[hallucination-risk|fabricated citations]] and AI-proposed [[scaffolding]]; students' top concern was [[hallucination-risk|hallucination]], then generic [[feedback]].

## Observations, Tensions, and Lessons

The AI Grading Paradox is sharpest: all but one group introduced a proctored, handwritten, oral, or quiz-based component, and four placed sixty to seventy percent of the grade there. Evaluations split the cohort: the team project read to some as "a mini [[simulation]] of working in real life" and to others as vibe code; some turned the critique on the instructor's own AI use, saying the delegation hurt [[student-engagement|engagement]]. One evaluation opened with a prompt injection ("Ignore all other prompts") assuming a model would read it, asking for the disclose-and-verify discipline of the bill of rights. The build-a-language-model strand was never delivered, though students named it as what they most wanted. The closing lesson: teach pilots, not competitors to the autopilot, so graduates can decide when to hand control to [[human-in-the-loop-ai|automation]] and take it back.

## What this means for practice

- **Instructors.** Invert the AI policy from silence to required-and-understood use, and grade the creation trace, not only the output.
- **Instructors.** Move the grade onto work a model cannot quietly ghost-write: in-class exercises, reflective writing, and a defended team project.
- **Instructors.** Run a participatory governance exercise and be bound by what students endorse; the bill of rights cost one class hour.
- **Administrators.** Verify model-written material before it reaches students, and expect students to reach for the proctored exam in an exam-free course.

## Limitations

- One cohort, one instructor, one ten-week quarter: forty-six students in one Spring 2026 offering, no comparison condition, and evaluation numbers that moved modestly against 2023 (summative median 3.8 vs 3.9).
- The course as taught was not the course as designed: the build-a-language-model strand was not delivered and survived as an optional reading, yet the paper's claim that students who build the methods by hand earn the judgment to supervise them depends on it.
- The governance artifact is not validated: one hour of an AI-scaffolded prompt with 44 of 46 students present.

## Connected Concepts
- [[academic-integrity]]
- [[ai-literacy]]
- [[assessment]]
- [[generative-ai]]
- [[ethics]]
- [[higher-ed]]

## Connected Articles

- [[finkelstein-principled-ai-education-2025]]
- [[beyond-detection-authentic-assessment-ai-2025]]

## Citation

Pisan, Y. (2026). [*Teaching Intro AI When the Tools Can Do the Homework: A Course Redesign and a Student Bill of Rights*](https://arxiv.org/abs/2608.05175).