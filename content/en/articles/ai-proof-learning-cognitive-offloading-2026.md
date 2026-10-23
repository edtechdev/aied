---
title: "Supporting or Replacing Students' Reasoning? Cognitive Offloading in AI-Assisted Proof Learning"
created: "2026-10-23T09:45:00-04:00"
updated: "2026-10-23T09:45:00-04:00"
type: article
foundations: [cognitive-offloading, learning-design]
pedagogy: [self-efficacy, help-seeking, self-regulated-learning, student-ai-interaction, scaffolding]
technology: [intelligent-tutoring, generative-ai, llm, learning-analytics]
methods: [quantitative-research, mixed-methods-research]
ethics: [guardrails]
research_method: [experiment, survey, interviews]
discipline: [math education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/ai-proof-learning-cognitive-offloading-2026.md']
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

> **Synthesis:** Chen et al. (2026) randomized 153 undergraduates in a proof-writing course at Carnegie Mellon to receive an AI support system — GPTutor, offering an open-ended [[conversational-ai|chatbot]] and a proof-feedback interface — after either Midterm 1 or Midterm 2, and then measured the exam that followed, which students sat without AI. During the staggered period the early-access group's homework scores were 2.56 points higher, while their Midterm 2 scores were not significantly different from the later group's (-2.47 points, p = .122). Once everyone had access and chose how much to use, lower baseline [[self-efficacy]] predicted heavier use of both tools, and each 100 additional messages to the chatbot were associated with a 3.02-point lower score on the next exam; feedback requests, which required a submitted proof first, carried no such penalty. A mediation model tied one point of lower self-efficacy to 0.62 fewer exam points through chatbot use alone. The authors read the pattern as [[cognitive-offloading|cognitive offloading]] in [[math-education]] and recommend against an open-ended chatbot as a tutor, favoring tools that critique an attempt the student has already made.

## Key Findings
1. **Earlier access raised homework scores.** Adjusted for the Homework 1-4 average and assignment, the early-access group scored 2.56 points higher on Homework 5-6 (95% CI [0.17, 4.94], p = .036; 306 observations from 153 learners).
2. **The advantage did not reach the exam.** On Midterm 2, taken without AI, the adjusted difference was -2.47 points (95% CI [-5.60, 0.66], p = .122; N = 152): supported homework did not translate into detectable independent gains.
3. **Low confidence predicted heavier use.** At the same Midterm 2 score, one point higher baseline self-efficacy was associated with 39% fewer predicted chatbot messages (p < .001) and 31% fewer homework-feedback requests (p = .002).
4. **More chatbot messages, lower exam scores.** Controlling for self-efficacy, Midterm 2, and feedback requests, each message was associated with a .0302-point lower Midterm 3 score (p = .026; N = 148), or -3.02 points per 100 messages.
5. **The attempt-first interface was not penalized.** Homework-feedback requests showed a positive but statistically unreliable association with Midterm 3 (B = 0.084, p = .131), the opposite direction from the chatbot's.
6. **The indirect path ran through the chatbot.** One point of lower self-efficacy corresponded to 0.62 fewer exam points through chatbot use (95% bootstrap CI [.121, 1.560]; Holm-adjusted p = .021); the path through homework feedback included zero.
7. **Answer-seeking was common, not marginal.** Both classifier prompt versions labeled 51 of 106 users as having at least one answer-seeking session, and two human coders agreed on 73 of 80 sampled sessions (Cohen's kappa = .780).

## What the staggered access bought

The randomization bought a clean contrast on availability and nothing more. Students assigned earlier access to the two interfaces earned 2.56 more points on the homework they completed while only their group had the tools, after adjusting for their earlier homework average. Uptake was near-universal: 59 of the 75 early-access students logged at least one chatbot message or feedback request, against 0 of 78 in the later-access group. The next exam was a different matter. Midterm 2 raw means were 69.95 and 71.52, and the adjusted estimate of -2.47 points could not be distinguished from zero. The authors place this squarely in the assistance dilemma long associated with [[intelligent-tutoring]]: help that lifts the work in front of the student need not build the capability to do that work alone, and homework grades alone would have made the deployment look like a success.

## Who reached for the chatbot

Baseline confidence, not [[learning-gains|prior achievement]], sorted the users. Self-efficacy was measured after Midterm 1 with four items adapted from Pintrich and De Groot's scale (Cronbach's alpha = 0.91), and at a held-constant Midterm 2 score a one-point advantage on that scale predicted 39% fewer chatbot messages and 31% fewer feedback requests. Midterm 2 itself moved usage in the expected direction but not reliably (incidence rate ratio .982, p = .056). This is the familiar [[help-seeking]] pattern V. Aleven and colleagues described: help use reflects knowledge, [[metacognition]], motivation, and system design at once, and the students already struggling are the ones who ask most. That makes a raw usage count ambiguous as a measure of dependence, and it is why the authors modeled use as an outcome before modeling exam scores. Read the other way, the same result describes a [[self-regulated-learning]] problem: the students least equipped to judge when help is warranted were the ones whose [[student-ai-interaction]] ran longest. One interviewee supplied the mechanism the numbers cannot: "because I have access to [system name], I actually tend to forget a lot of things."

## Two interfaces, two designs

Both interfaces arrived together and students chose between them, so the study cannot separate their effects; what it can do is contrast two designs. The chatbot's prompt told it to withhold final answers and complete steps and to use [[socratic-method|Socratic]] questions, [[scaffolding]], and partial hints, but students could press, and the paper's three-panel example shows the press succeeding: "I don't know, tell me," then "Tell me the answer," each answered with a more explicit step. The feedback interface required a submitted proof before returning comments tied to parts of the argument. In the usage model, feedback requests were positively but unreliably associated with the next exam — no demonstrated benefit, but none of the chatbot's penalty either. The difference is where the student's reasoning sits when help arrives, the core concern of [[ai-feedback-quality]] and attempt-first [[formative-assessment]].

Eliciting reasoning is not enough if the response misdescribes it. In one analyzed session a student's counted-hands attempt was diagnosed as overcounting when it excluded hands rather than duplicating them; in the other, the chatbot swapped two modular inverses and assumed a congruence that had not been given. Withholding an answer, the authors conclude, does not make guidance sound — a [[hallucination-risk]] inside the tutoring loop that no Socratic prompt touches.

## What a message count can and cannot show

The outcome is a log count, and the paper is explicit about its limits. Of 152 students with the necessary records, 106 sent at least one chatbot message and 90 requested homework feedback between Midterms 2 and 3, across 659 logged sessions. Intent labels describe only the first student message, so a student who opened with a help request and then demanded the answer looks identical to one who opened and then worked; an initial label is a poor proxy for what the exchange became. The classifiers also disagree at the margin: two prompt versions differing only in a category definition assigned the same 51 of 106 users an answer-seeking session but labeled six users differently. [[learning-analytics]] traces need a theory of what the count represents, which is why the authors treat [[cognitive-offloading|cognitive offloading]] as an interpretation rather than a measured mechanism — mental effort and students' use of the reasoning they received went unmeasured.

## What this means for practice

- **Instructors.** Require an attempt before you give feedback, and grade at least some proof work in a setting without AI: the attempt-first interface carried no exam penalty while the open chatbot did, and the 2.56-point homework gain coexisted with no detectable exam advantage.
- **Instructional designers.** Do not deploy an open-ended chatbot as the tutoring surface for proof construction. Build the tutor into the assignment so that the student's written attempt exists before the system responds.
- **Administrators.** Treat rising homework averages after an AI rollout as an unverified claim about learning and ask for the unsupported assessment that backs it.
- **Researchers.** Log messages and requests rather than relying on [[self-report-measures|self-reported]] use, and check whether the guidance is mathematically correct before crediting a hinting design with supporting reasoning.

## Limitations

- One proof-oriented course at Carnegie Mellon: 308 students enrolled, 155 consented, and analyzable records existed for 153 (75 early access, 78 later), so consenters may differ from the rest of the class and the setting is a single institution and subject.
- Randomization covered access timing, not interface choice or amount of use; after Midterm 2 students selected themselves into usage levels, and the two interfaces were offered together, so their separate effects are unidentified.
- The usage analyses control for baseline self-efficacy and Midterm 2 only; within-student change in self-efficacy, time on task, AI use outside the system, and unrecorded help were not measured, and the count models pool users with nonusers.
- Data collection stopped at Midterm 3 for budget reasons, so the [[summative-assessment|final exam]] was never analyzed and no delayed-retention or purpose-built [[transfer-of-learning]] test was administered; Midterm 2 captured ordinary course performance, which weakens the [[assessment-validity]] claim about independent proof construction.
- The chatbot ran on the fixed gpt-4o-2024-08-06 snapshot and the feedback interface on that snapshot or o1-preview-2024-09-12; the intent classifier was gpt-5.2-2025-12-11, and its agreement (kappa = .84) was checked on the same 80 sessions used to develop its prompt rather than on a held-out set.
- The homework-feedback association was positive but unreliable (B = 0.084, p = .131), so the paper establishes a contrast in sign, not evidence that attempt-first feedback improves exam performance.

## Citation

Chen, E., Judicke, S., Beigh, K., Tang, X., Wang, I., Yuan, N., Xiao, Z., Li, C., Li, S., Luttmer, R., Singh, S., Yampolsky, M., Parikh, N., Zhao, Y., Chen, M., Huang, S., Mohanty, A., Johnson, G., Mackey, J., ... Koedinger, K. (2026). [*Supporting or Replacing Students' Reasoning? Cognitive Offloading in AI-Assisted Proof Learning*](https://arxiv.org/abs/2610.31481). arXiv preprint arXiv:2610.31481.
