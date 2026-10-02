---
title: "Feedback Without the Wait: Piloting a Generative AI Practice Platform in a Large Maths Class"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/genai-practice-platform-maths-feedback-2026.md']
confidence: high
page_kind: [framework]
research_method: [survey, system development, thematic analysis]
discipline: [engineering education, math education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
pedagogy: [self-directed-learning, active-learning, scaffolding]
technology: [generative-ai, human-in-the-loop-ai, edtech-platform, llm]
assessment: [feedback, formative-assessment, ai-feedback-quality, automated-question-generation, learning-gains]
methods: [mixed-methods-research, usability-research, qualitative-research]
institutions: [governance]
ethics: [trust, trust-calibration, hallucination-risk]
foundations: [human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Chen and colleagues pilot a [[generative-ai|generative AI]] practice [[edtech-platform|platform]] in a large first-year [[engineering-education|electrical engineering]] subject on probability, confronting a familiar tension: [[feedback]] is most powerful when immediate and specific, but the [[human-in-the-loop-ai|human oversight]] that makes AI judgments trustworthy reintroduces the very delay that erodes its value. Their response decouples feedback immediacy from solution verification, moving demonstrators from real-time graders to upfront verifiers of answers, against which the model generates immediate, [[scaffolding|scaffolded]] feedback during [[self-directed-learning|self-directed practice]]. Deployed mid-semester as an optional resource at a [[higher-ed|university]], the platform drew 95 registrants from 157 enrolled students, of whom 34 made 230 submissions in an iterative attempt–feedback–revise loop. A 53-response survey, platform [[learning-analytics|analytics]], and progress-test scores for three highly engaged students suggest positive perceptions and plausible [[learning-gains|attainment gains]], but the evidence is observational and self-selected. The pilot's contribution is less a measured effect than a transferable design and governance pattern for scalable [[formative-assessment|formative assessment]].

## Key Findings

1. Of 157 enrolled students, 95 registered for the optional platform and 34 attempted at least one question, together generating 230 submissions; the median active user made three submissions and the most active made 40.
2. Platform users rated all five experiential constructs above the neutral midpoint of three, highest for [[student-engagement|engagement]] and [[active-learning]] (3.97 out of 5; 79% agreement) and lowest for preferring the system over the existing problem booklet (42%).
3. Users were markedly more convinced than non-users that immediate AI feedback, even with errors, is more useful than delayed demonstrator feedback (79% versus 59%), suggesting direct experience strengthened rather than eroded [[trust]].
4. The strongest single survey item was that students actively thought about solutions rather than guessing (95% agreement); a well-established booklet with worked solutions remained the preferred resource (42%).
5. Thematic analysis of open responses surfaced four themes: immediacy as the core value, calibrated trust, pinpointing the exact mistaken step, and a desire for better progress tracking and control.
6. Three highly engaged students improved their progress-test percentile ranks (82nd to 99th, 13th to 32nd, 52nd to 82nd), presented as illustrative trajectories rather than evidence of a platform effect.

## Designing around the immediacy–oversight tension

The platform combines three elements: a curated bank of problem-booklet items with demonstrator-verified solutions, exam-style [[automated-question-generation|AI-generated questions]] that expand the practice pool, and an iterative attempt–feedback–revise loop. Two [[agentic-ai|AI agents]], implemented as separate LangGraph services, handle question generation and feedback generation. The generation agent creates variants by modifying numerical parameters while preserving the assessed concepts, and staff must review and approve new items before students see them. The feedback agent reasons against the human-endorsed solution, identifying [[misconceptions]] and missing reasoning steps rather than only marking correctness. This differs from conventional online quizzes with instant but generic correctness checks and from fully [[automated-assessment|automated graders]] that lack human oversight. Crucially, oversight sits upstream at verification, not at the point of grading: original questions rest on demonstrator-verified solutions, AI-generated items stay hidden until approved, and students can report problems for moderation. [[prompt-engineering|Feedback prompts]] were designed around feed-forward principles—locating where reasoning diverged and guiding the next step instead of revealing the answer. The paper's central claim is that verification can be moved in time, so oversight need not be contemporaneous with the feedback moment. The authors also flag [[motivation]] and trust as plausible mediators of any effect.

## What students valued and questioned

Thematic analysis of open responses, following Braun and Clarke, surfaced four themes. Immediacy was the core value: students liked receiving feedback at the moment of difficulty and not leaving a question unresolved. Their stance toward reliability was [[trust-calibration|calibrated]] rather than naive—students acknowledged that the [[llm|model]] sometimes errs and can return different solutions for identical inputs, yet still judged immediate help worth the trade. A third theme was pinpointing the mistake: feedback that engaged a student's own working and named the precise faulty step, rather than presenting the final answer. Students also wanted better progress tracking, topic and question-type selection, and, when already confident, a way to bypass feedback generation given its time and compute cost. The survey's strongest item was active thinking rather than guessing (95% agreement); the weakest was preferring the system to the booklet (42%). Users rated [[ai-feedback-quality|feedback effectiveness]] fourth of the five constructs (3.54), below engagement (3.97) and conceptual understanding (3.68); the platform read as a complement rather than a replacement.

## Evidence of engagement and attainment

To probe whether engagement related to attainment, the authors examined the three most engaged users with both progress-test scores available. Student A, with 40 submissions across five active days, moved from the 82nd to the 99th percentile (+1.21 SD); Student B, 25 submissions, rose from the 13th to the 32nd percentile (+0.45 SD); Student C, 19 submissions, jumped from the 52nd to the 82nd percentile (+1.00 SD). The authors are explicit that these are practice-based vignettes: engagement was voluntary, the number of highly engaged students was small, and other supports or cohort-level factors may also explain progress. The survey evidence rests on [[self-report-measures|self-report]] instruments and a [[mixed-methods-research|mixed-methods]] design—11 items across five constructs, 19 users and 34 non-users, with open responses analyzed thematically. Together the data show a usable, valued prototype; they cannot establish that the platform caused the gains.

## What this means for practice

- **Instructors.** Keep the human in the loop at solution verification, not real-time grading, so feedback stays immediate while retaining the oversight students trust, and build on an existing demonstrator-verified problem set.
- **Instructors.** Design feedback prompts explicitly around feed-forward behavior—locate the error and guide the next step instead of revealing the answer—and expect this to be the hardest behavior to deliver consistently.
- **Instructors.** Invest early in symbolic and notation-heavy answer entry, algebraic-equivalence handling, and a preview function, since answer input is a [[usability-research|usability]] issue in [[math-education|mathematical subjects]], not an edge case.
- **Platform and [[curriculum-design|curriculum]] designers.** Embed the tool in the subject's workflow by linking it to topics or low-stakes checkpoints rather than releasing it as a standalone optional resource, to close the registration-to-use gap.
- **Institutions.** Position GenAI for practice rather than [[assessment]] to ease trust and governance concerns, and be transparent that the AI can [[hallucination-risk|hallucinate]] while solutions are human-verified, which our experience suggests supports calibrated trust rather than over-reliance.

## Limitations

- The survey drew 53 responses, but experience-based items reflect only 19 users, while belief-based items compare 19 users and 34 non-users; the sample is self-selected and the findings are indicative, not conclusive.
- Uptake was uneven: 95 of 157 enrolled students registered, but only 34 attempted a question, and the attainment evidence rests on three illustrative cases with no control group or baseline adjustment.
- The platform ran at a single institution in one mid-semester core subject, with progress-test scores available only for a subset of users, so transfer to other subjects is argued rather than demonstrated.
- All data are observational, drawn from platform analytics, an end-of-semester survey, and existing test scores; the authors plan a pre- and post-exposure survey and a quasi-experimental analysis to address this gap.

## Citation

Chen, L., Buskes, G., Ren, Y., & Leong, C. T. (2026). [*Feedback without the wait: Piloting a generative AI practice platform in a large maths class*](https://arxiv.org/abs/2610.01262). arXiv:2610.01262.
