---
title: "Pulla: A Parsons Problem Tool for Fine-Grained Behavioral Tracing and Instructor-Facing Problem-Solving Analysis"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
technology: [learning-analytics, visualization]
assessment: [automated-assessment, feedback, formative-assessment]
pedagogy: [misconceptions]
sources: ['raw/papers/pulla-parsons-problem-tool-2026.md']
confidence: high
research_method: [system development]
discipline: [cs education]
level: [higher ed]
audience: [instructors, software developers, learning analytics designers]
---

> **Synthesis:** Prol et al. (2026) present **Pulla**, a Parsons problem tool that instruments programming assignments to record every block placement, removal, and submission as a chronological behavioral trace, extending the [[open-source]] CodeCheck platform with client-side event capture and an instructor-facing dashboard. Where existing Parsons platforms report only [[automated-assessment|correctness and attempt counts]], Pulla pairs Wordle-style per-block color feedback with a persisted [[learning-analytics|activity log]] and attempt history, then optionally applies an AI pipeline (GPT-4.1-mini) to label recurring difficulty patterns for instructor review. Deploying the tool in an upper-division software design course at the University of Houston (68 students, Java, Spring 2026) and an introductory Python course at Aalto University (36 students, Summer 2026) surfaced three recurring difficulties: wrong exception type, a return statement substituted for throw/raise, and incorrect control-flow ordering. The work positions [[formative-assessment|process data]] as an instructor-facing resource rather than a [[educational-measurement|research instrument]] alone, while keeping the instructor as the final decision-maker for any intervention, consistent with [[human-in-the-loop-ai|human-in-the-loop]] designs.

## Why correctness-only Parsons feedback hides the process

Parsons problems are exercises in which students reconstruct a program by arranging shuffled code blocks into the correct order, optionally including distractors that must be excluded. They naturally generate behavioral traces: each block placement, each erase-and-retry cycle, and each intermediate solution state encodes a conceptual decision. Prior work has extended the format in many directions — interaction traces, adaptive difficulty, faded blocks, and mobile [[accessibility]] — but no instructor-facing tool had been derived from those traces, leaving the [[problem-solving]] process invisible to instructors.

The authors argue this gap has concrete costs for [[cs-education|computing education]]: without visibility into which blocks caused repeated confusion and which distractors were consistently selected, instructors cannot identify which concepts deserve revisiting or which students may benefit from additional support. Existing platforms report correctness and attempt counts but provide no built-in mechanism to diagnose how students arrive at their solutions. Pulla targets that gap with per-block interaction traces, aggregated activity logs, and on-demand AI-assisted analysis of difficulty patterns, aiming to surface recurring difficulties before they compound into deeper [[misconceptions]].

## Instrumenting assignments: client-side capture and per-block color feedback

Pulla extends CodeCheck, an open-source web-based programming assessment platform, with a behavioral instrumentation layer. The tool captures **interaction events at the browser level** rather than server-side; the authors state this design decision is what makes intermediate states visible, since server-side instrumentation would capture only the final arrangement at each submission and lose the within-attempt behavior most diagnostic of conceptual difficulty. Six event types are recorded in the activity log:

1. `problem_open` — student navigates to a problem;
2. `parsons_tile_click` — student places a block from the bank into the solution area;
3. `parsons_erase` — student removes a block back to the bank;
4. `check_submit` — student submits the current arrangement for evaluation;
5. `check_result` — score returned for the submitted arrangement;
6. `parsons_guess` — complete block arrangement at submission time with per-block color-coded feedback, stored as a submission snapshot forming the attempt history.

Both the activity log and attempt history are persisted to a PostgreSQL database: each row records an event type, a timestamp, and a JSON payload. On the student side, blocks align automatically upon placement — unlike systems where indentation must be set manually, a design choice that avoids a documented source of difficulty, since one prior study found three distinct misindentation patterns together accounted for 83% of solutions in one assignment. Feedback is color-coded in a Wordle-like manner: each slot is marked green if the block is in the correct position, yellow if the block belongs somewhere else in the solution, and red if the block is a distractor that does not appear in the correct solution at all. Unlike a binary correct/incorrect judgment, this per-block feedback encodes presence and position simultaneously, enabling [[visualization]] of which blocks need repositioning and making the reasoning path that produced the final submission visible. Student identifiers were handled differently per site: Aalto University's platform assigns randomly generated pseudonyms natively, while University of Houston identifiers were pseudonymized prior to analysis.

## AI-assisted, instructor-reviewed difficulty analysis

Instruction to the dashboard design is explicitly [[human-in-the-loop-ai|human-in-the-loop]]. An instructor reviews a student's raw attempt history and optionally invokes AI-assisted analysis to obtain a labeled difficulty report, which the instructor approves before any feedback reaches the student. The authors give two reasons: AI-generated feedback can be technically correct yet unhelpful, since experts and students often disagree on hint quality; and instructors are better positioned than an automated system to judge whether a detected difficulty pattern is pedagogically meaningful given course context and student backgrounds.

When triggered, the system serializes a student's complete attempt history for the selected assignment — each submission represented as an ordered sequence of block identifiers paired with per-block color-coded feedback. This structured trace is passed to GPT-4.1-mini via the OpenAI API, with a prompt instructing the model to identify recurring conceptual difficulties evident in the pattern of incorrect placements and distractor selections. The model returns a short list of labeled difficulty patterns with brief natural-language explanations. For class-level slides, a separate two-stage pipeline first extracts a small set of recurring difficulties from a sample of student traces, then classifies each student's attempt history against that shared list before aggregating into a class-wide summary. The analysis is strictly on-demand — it runs only when an instructor invokes it — and the same model was used throughout both deployments. This differs from AI assessment approaches that take a student artifact or course content as input, because Pulla takes the [[student-modeling|behavioral trace]] itself as input and addresses its analysis to the instructor, who remains the decision-maker. The connection to [[ai-feedback-quality|feedback quality]] and to [[cognitive-diagnosis|diagnostic]] reasoning about student work is direct.

## Two deployments across institutions and languages

Pulla was deployed in two university courses with different levels, languages, instructional formats, and student populations, serving real students in graded assignments. The design allowed the authors to examine whether observed behavioral patterns generalize across contexts, while they note that two deployments are insufficient for strong generalizability claims.

1. **University of Houston (United States)** — an upper-division Java course on software design at a large public Hispanic and minority-serving research university, conducted in-person during Spring 2026 with 68 students. Students accessed assignments through the institution's LMS using university credentials, enabling traces to be linked to student identifiers across assignments.
2. **Aalto University (Finland)** — an introductory Python course for non-CS majors, conducted online with self-paced progression during Summer 2026 with 36 students. Students accessed assignments via a direct link without institutional authentication, and traces were recorded under anonymized identifiers for [[privacy|data privacy]].

Both courses included exception handling as a common topic, making it the natural basis for cross-deployment comparison; other assignment types used at Houston, such as design patterns, were not part of the Aalto [[curriculum-design|curriculum]]. Each deployment used three sequentially presented Parsons problems targeting exception handling and adapted to each language's syntax: P1 *Safe Divide* (3 blocks / 3 distractors, deployed identically at both sites), P2 *Safe Integer* (4/3, deployed identically at both sites), and P3, which shared the exception-handling theme but differed in scenario — *Checked/Unchecked* at Houston (3/2) and *Safe List Access* at Aalto (3/3). Both P3 versions targeted the same learning objective — selecting the semantically appropriate exception type for a given error condition — and students could advance without solving the current problem.

## Recurring difficulty patterns

Analyzing the collected traces identified three recurring difficulties, with the aggregate picture reported per problem as average attempts, first-attempt correctness, and the percentage of incorrect attempts exhibiting each pattern.

**Wrong exception type selection.** Both deployments showed consistent incorrect exception type selection. At Houston, exception type confusion was the dominant pattern in P1, affecting 90% of students with incorrect attempts, and remained present in P2 (48%) and P3 (37%); in each case students placed a semantically imprecise type such as `IllegalStateException`, `Exception`, or `RuntimeException` where a more specific subtype was required. At Aalto, exception type confusion appeared in both harder problems: 62% of students with incorrect attempts in *Safe Integer* involved a broad exception class (`except Exception`) or a wrong type (`raise RuntimeError`), and in *Safe List Access* most students with incorrect attempts (89%) selected an incorrect guard condition — a distractor checking `index < 0` rather than the correct bound `index < -len(items)`, which is required to reject out-of-range negative indices. The authors read the latter as confusion about *when* to raise rather than *which* exception to raise, possibly a subtler conceptual gap than selecting the wrong exception class.

**Return instead of raise or throw.** Substituting a return statement for an exception throw recurred across both deployments. At Houston (n = 68), 60% of students with incorrect attempts placed `if (b == 0) return 0` in *Safe Divide* rather than `throw new ArithmeticException(...)`, and 47% substituted return for throw in *CheckedVsUnchecked*. At Aalto the pattern was prominent in *Safe Integer*, where 50% of students with incorrect attempts substituted return for `raise ValueError`, treating a parse failure as a silent exit rather than an exceptional event. In both cases students treated the error condition as a reason to exit early rather than to signal it as an exception. This pattern coincided with the lowest first-attempt accuracy at Houston — 33.3% on *CheckedVsUnchecked*, against 67–69% on the other two problems.

**Incorrect control-flow ordering.** Control-flow ordering errors appeared consistently across all three Houston problems (43–52% of students with incorrect attempts) but without a dominant pattern: in P3, wrong ordering (43%) was roughly co-equal with return-for-raise substitution (47%) and exception type confusion (37%), suggesting upper-division students cycled through all three difficulty types rather than concentrating on one. At Aalto, ordering errors were a secondary pattern in *Safe Integer* (31%) behind exception type confusion (62%) and return-for-raise substitution (50%), and in *Safe List Access* they were present in only 15% of students with incorrect attempts. The authors offer a tentative explanation — the conceptual barrier may shift with problem structure, so that when the arrangement pattern is unfamiliar (try/except sequencing) students cycle through orderings, while when the structure is intuitive the difficulty moves to semantic precision — but note this pattern is confounded with the language, course level, and population differences between deployments.

## Individual trajectories and state revisits

Aggregate counts show how often each difficulty pattern occurred but not how a student moved between them within a single attempt sequence. Visualizing one Houston student's twelve submissions on P3 as a state-transition graph — each node a distinct three-block arrangement, arrows showing submission order, and node fill marking wrong exception type, return substituted for throw, both at once, misplaced-but-not-wrong, or correct — revealed a non-monotonic path: an initial detour back to an earlier arrangement, an unchanged resubmission, then alternation between the two difficulty patterns before converging on the correct arrangement, with four regressions and two unproductive resubmissions across twelve attempts. Across Houston, between 6% and 12% of solving sessions contained at least one state revisit, below the 21–33% reported for similar Parsons tasks in prior trace analysis; at Aalto, revisits were rare (0–3% across problems) and absent in P3, the problem from which the illustrated trajectory is drawn. These per-student histories are what the dashboard exposes to instructors in the Student Profile View, and the authors propose an in-dashboard state-transition graph as future work to surface cycles and regressions automatically.

## Instructor perspectives, implications, and limitations

Instructors from both deployments reported that making intermediate solution attempts visible — rather than only the final outcome — was the dashboard's core value. The color-coded attempt history let them see which lines were correct, merely out of place, or incorrect distractors, and to judge whether a student was close to the solution or repeatedly applying the same misconception. The Houston instructor valued designing problems without friction, using "bite-size" Parsons problems as short in-class exercises, using the summarizing slides to explain common mistakes in class, and the fact that students could not copy solutions from AI and submit them; the Aalto instructor described the AI-assisted analysis as a useful starting point but still wanted to review student traces before deciding on feedback or intervention. Both instructors supplemented the AI-generated reports with their own reading of interaction traces. Class-level aggregation was reported as particularly valuable, since identifying recurring difficulties across a cohort is impractical through manual inspection alone.

For [[learning-design|instructional design]] and [[assessment]] practice, the paper's claim is that [[learning-analytics]] process data can be repurposed from a research instrument into an instructor-facing resource for targeted [[formative-assessment|formative]] intervention, and that the same event-capture and AI-analysis pipeline operated without modification across two programming languages, two course levels, and two institutions while revealing similar recurring difficulties among CS1 students and upper-division majors. Three limitations are stated: the comparison was constrained to exception handling, the only topic common to both curricula, and may not generalize to other domains; the Aalto cohort was small (n = 36), limiting cross-deployment weight; and the dashboard's value depends on [[student-engagement|instructor engagement]]. Future work follows five directions — isomorphic variants to separate understanding from accidental correctness, automated puzzles generated from recurring distractor selections, real-time alerts on repeated failed arrangements, an in-dashboard state-transition graph, and systematic analysis of the quality of the AI-generated reports themselves. The authors also note the tool's potential as a research instrument for large-scale analysis of programming behavior, contingent on wider adoption, and intend to release the complete implementation.

## What this means for practice

- **Instructors.** Read the per-block attempt history before deciding on feedback: green marks a block in the correct position, yellow a block that belongs elsewhere and red a distractor, which separates a student who is close from one repeating the same misconception.
- **Instructors.** Use class-level aggregation to choose what to reteach — at Houston, exception type confusion was the dominant pattern for 90% of students with incorrect attempts on *Safe Divide*.
- **Instructors.** Target return-for-raise substitution directly, since it recurred at both sites: 60% of Houston students with incorrect attempts on *Safe Divide* wrote `if (b == 0) return 0` instead of throwing, and 50% of Aalto students with incorrect attempts substituted return for `raise ValueError` on *Safe Integer*.
- **Instructors.** Keep the AI-generated difficulty report inside your own reading of the traces: the Houston instructor used the class summarizing slides to explain common mistakes, and the Aalto instructor still reviewed traces before deciding on feedback.
- **Software developers.** Keep the analysis instructor-gated the way Pulla does — the GPT-4.1-mini report runs only when an instructor invokes it, and no feedback reaches a student until the instructor approves it.

## Limitations

- The cross-deployment comparison was constrained to exception handling, the only topic common to both curricula, and may not generalize to other domains.
- The Aalto cohort was small (n = 36) and its students worked online at their own pace without institutional authentication, which limits the weight of the cross-deployment comparison.
- The dashboard's value depends on instructor engagement: AI-assisted analysis runs only on demand, and the instructor evidence comes from two instructors, one per site.
- The tool was deployed in two courses, which the authors state is insufficient to support strong generalizability claims; the control-flow ordering pattern is confounded with the differences in language, course level and student population between the two sites.

## Connected Concepts

- [[cs-education]]
- [[problem-solving]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[misconceptions]]
- [[cognitive-diagnosis]]
- [[scaffolding]]
- [[feedback]]
- [[visualization]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[human-in-the-loop-ai]]
- [[higher-ed]]
- [[llm]]

## Connected Articles

- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[tutortrace-learner-behavioral-states-2026]] — TutorTrace: A Dataset and Taxonomy for Classifying Learner Behavioral States during AI-Assisted Programming Education
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[debugtracker-classroom-debugging]] — DebugTracker: Lightweight Process Evidence for Classroom Debugging
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap: Pedagogically-Grounded Detection and Feedback for Hidden Misconceptions
- [[llm-adaptive-programming-error-explanations-2026]] — Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — MBP-KT: Learning Global Collaborative Information from Meta-Behavioral Pattern for Enhanced Knowledge Tracing
- [[genai-cognitive-tutor-programming-2026]] — Beyond Immediate Resolution: Generative AI as an Informal Cognitive Tutor in Novice Programming Learning
- [[code-anchor-multi-view-visualization]] — Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations

## Citation

Prol, D., Leinonen, J., Hellas, A., Alkhamees, S., & Alipour, A. (2026). [*Pulla: A Parsons Problem Tool for Fine-Grained Behavioral Tracing and Instructor-Facing Problem-Solving Analysis*](https://arxiv.org/abs/2609.15944). arXiv preprint.
