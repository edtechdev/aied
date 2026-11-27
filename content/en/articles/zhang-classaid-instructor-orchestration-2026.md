---
title: "ClassAid: A Real-time Instructor-AI-Student Orchestration System for Classroom Programming Activities"
created: "2026-11-25T07:05:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
published: "2026-02-06"
type: article
authors: ["Gefei Zhang", "Guodao Sun", "Meng Xia", "Ronghua Liang"]
venue: "arXiv preprint (cs.HC); CHI '26"
evidence_context: educational
foundations: [human-ai-collaboration, cognitive-offloading, teacher-role]
pedagogy: [scaffolding, metacognition]
technology: [generative-ai, llm, learning-analytics, pedagogical-agent]
assessment: [feedback, formative-assessment]
discipline: [cs education, statistics and data science education]
level: [graduate, higher ed]
audience: [instructors, learning analytics designers, educational technology developers]
page_kind: [design case]
research_method: [system development, user study, interviews]
sources: ["raw/papers/zhang-classaid-instructor-orchestration-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes]
---

> **Synthesis:** Zhang and colleagues (2026) built **ClassAid**, a real-time orchestration system for programming classrooms in which the instructor — not the [[llm|model]] — decides how much help each student's AI teaching assistant gives. The TA Agent runs a six-stage pipeline over student code and questions and answers in one of four modes: *technical* (direct coding solutions), *heuristic* (hint-based guidance), *automatic* (the agent picks), or *silent* (no AI support). An instructor dashboard visualizes student–[[student-ai-interaction|AI interaction]] as it happens and lets the instructor switch modes class-wide or per student. In a 75-minute deployment with 54 [[cs-education|computer science]] [[graduate-education|graduate]] students, two experts rating sampled responses agreed with the agent on 95.99% of cognitive-level classifications and 94.71% of [[feedback|feedback]] responses, and the instructional team used the control it had built: eight class-wide mode switches, 46 students' logs reviewed, 22 individual mode changes, and five students pulled out for in-person help. There was no baseline condition and no comparison model.

## Key Findings

1. **The unit of instructor control is the feedback mode, not the prompt.** ClassAid exposes silent, heuristic, technical and automatic operation as a live setting, so the same agent moves between withholding and giving answers while the class is running.
2. **Expert agreement with the agent was high on all four rated components.** Two instructors rating 274 sampled questions agreed on 95.99% of Bloom-level classifications and 95.99% of question-type classifications, on 94.71% of feedback responses across both modes, and on 88.68% of the agent's automatic mode choices (n = 106).
3. **The instructional team changed modes eight times in one session.** The class started in heuristic mode to force independent thinking, moved to automatic after ten minutes without a completion, shifted struggling students to technical mode when half the class finished Task 1, and returned to heuristic mode for Task 2.
4. **Over-reliance was treated as something to detect, not assume away.** An agent alert fires when automatic mode returns technical feedback three consecutive times; one student showing persistent answer-seeking was moved to silent mode, and five students who stalled even in technical mode received human help.
5. **Students did not agree on which mode was better.** Automatic and technical feedback were each preferred by 42.6% of students and heuristic feedback by 14.8%, and about 70% said that while learning they preferred the hint-style support that protects reasoning over the direct solution.
6. **Students judged it a classroom tool rather than a better [[conversational-ai|chatbot]].** Eighty percent said ClassAid suited classroom learning better than general-purpose AI tools, while conceding that a general chatbot is faster when a quick answer is all that is wanted.
## Four modes over a six-stage agent

The agent runs on OpenAI's GPT-4o over a Vue.js and Flask client–server stack, with Firebase holding the mode configuration the agent reads at answer time. Its six stages are named as a human tutor's diagnostic loop: observing student learning activities, identifying learning obstacles, reviewing and assessing student history, considering appropriate forms of support, selecting an adaptive feedback mode, and intervening. The stages are grounded in formative and dynamic [[educational-measurement|assessment theory]], and an educational technology expert with over a decade of learning-analytics experience helped build them.

Automatic mode is a weighted selection rather than a model judgment: candidate responses are scored on relevance (40%), complexity (20%), consistency (20%), clarity (15%) and urgency (5%), with the student's cognitive level weighted 50%, error type 20% and learning history 30% behind the choice. Proactive support fires above an intervention score of 0.5; at or below it the student is left to explore. Only the "considering support" stage is open to the instructor, which the authors name as the design's main limitation.

Three alert types run on thresholds agreed with instructors during a formative study: an *agent* alert after three consecutive technical responses in automatic mode, a *process* alert after three "dislikes" on feedback within one task, and an *outcome* alert when a student finishes a task in under three minutes. On the day the system fired 15 alerts — four agent, three process and eight outcome — of which the team addressed four, three and five respectively.

## What the deployment measured

Fifty-four graduate students (35 male, 19 female, M = 25.95 years), most of them frequent users of AI tools and almost none with Vega-Lite experience, worked through two declarative-[[visualization]] tasks in 50 minutes with other AI tools prohibited. Accuracy scores were 3.87 and 3.97 on a five-point scale, with completion times of 21 and 17 minutes. The log recorded 6,841 code edits, 1,102 code executions and 82 pauses; students asked 547 questions and received 1,107 feedback messages, of which 731 were heuristic, 165 technical and 211 automatic. More than a thousand messages drew only 29 likes and 24 dislikes, a 5.5% and 3.3% rating rate that the authors read as the familiar bias of feedback systems rather than as satisfaction.

Students rated proactive feedback highest on quality (M = 5.20) and lowest on frequency (M = 4.98) on a seven-point scale, and were enthusiastic about adjusting modes themselves (M = 5.44). Eight educators (E1–E8), five assistant professors and three full professors with 1 to 23 years of teaching behind them (M = 7.1), worked through three recorded interaction segments think-aloud and adjusted modes themselves. Their discussion is where the paper is most useful for designers: it asks for finer-grained control across the pipeline's other stages, for shared control in which students can request a mode change rather than only receive one, and for the agent to draw on history, behavioral traces and retrieval rather than [[prompt-engineering|prompt engineering]] alone.

## What this means for practice

- **Instructors.** Treat the feedback mode as a live teaching decision and plan the sequence in advance — start where the class must think for itself, and reserve direct solutions for the moment the clock, not the student, is the constraint.
- **Learning analytics designers.** The alert thresholds are the design, not the dashboard. A rule as crude as "three technical answers in a row" or "finished in under three minutes" is what turned a visualization into an intervention queue, and it was negotiated with instructors rather than derived from the data.
- **Educational technology developers.** Exposing mode as configuration that the agent reads at answer time is what let one deployed system serve a whole class in four registers; a per-student setting is the cheap part, and the instructor's cost of monitoring it is the part that scales badly.

## Limitations

- There was no baseline and no comparison condition: the design could not accommodate a second arm in a 75-minute session, so nothing here isolates the effect of instructor-controlled modes from the tutorial, the tasks or the novelty of the tool.
- One session, one course, 54 students and one instructor; the tasks were relatively simple Vega-Lite specifications, and the authors say plainly that scalability, longer deployments and more complex programming environments are untested.
- Response speed was the one general-feedback dimension students rated below 5.0, and proactive feedback's frequency landed there too (M = 4.98); personality was the only overall dimension that did not score highly, with students describing the responses as uniform and robotic even where the content helped.
- The rating samples were drawn from the deployment itself, and the two raters were instructors rather than independent assessors, so the agreement figures measure consistency with expert judgment, not correctness against ground truth.

## Citation

Zhang, G., Sun, G., Xia, M., & Liang, R. (2026). [ClassAid: A Real-time Instructor-AI-Student Orchestration System for Classroom Programming Activities](https://arxiv.org/abs/2602.06734). *arXiv preprint arXiv:2602.06734*.
