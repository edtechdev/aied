---
title: Undergraduate Education
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:35:59-05:00"
type: concept
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
assessment: [formative-assessment, assessment, learning-gains]
technology: [generative-ai, conversational-ai, intelligent-tutoring, llm]
level: [undergraduate, higher ed]
confidence: medium
reviewed_by: [editor]
---

> **Synthesis:** Undergraduate education is where AI meets the largest classes and the most standardized [[assessment]]: first- and second-year gateway courses in which one instructor teaches several hundred students against a shared rubric. The trials at this level split along design rather than model. A tutor built from a course's own pedagogy beat in-class [[active-learning|active learning]], while a well-grounded course assistant deployed without instructional integration lowered grades and participation. The strongest evidence concerns [[feedback]] at scale, [[help-seeking]] [[scaffolding|scaffolds]], verified study material and outreach that moves administrative deadlines; the weakest concerns claims that a general assistant raises what students can do unaided.

## Questions to Consider

- If a tutor raises homework scores by two and a half points but the exam does not move, what has the course bought?
- Grades fell in a course where six students in seven never opened the [[conversational-ai|chatbot]]. What did availability alone change?
- Which is more defensible in a 600-student course: detecting AI-written submissions, or changing what the submission must contain?
- What can a first-year course assume about the AI habits students learned in secondary school?
- When the unit of design is a cohort of 900 rather than one learner, which [[personalized-learning|personalization]] claims survive?

## Introduction

Undergraduate study is bachelor's coursework: lectures, sections, laboratories and service courses, assessed continuously and summed into a credential. Students are adults who choose their own study time, taught in cohorts far larger than any school class. They are not yet researchers, and no supervisor is responsible for forming their judgment, which separates the band from graduate study.

Scale is the defining constraint. An introductory course in [[physics-education|physics]], economics or [[cs-education|programming]] can enroll several hundred to a few thousand students, staffed by teaching assistants who each grade dozens of essays or proofs. Feedback volume, help availability and the cost of noticing a struggling student are the recurring design problems. The question that decides whether AI helped is not whether the system produced an answer, but what students still did when it did.

## What the evidence at this level measures

Undergraduate trials are easy to count and hard to compare. The outcome is usually a course grade, an instructor-written test, or a rubric applied to one artifact.

- **The pooled effect is positive and duration-dependent.** Thirty-five experimental and quasi-experimental studies covering 175 effect sizes produced g = 0.53 for undergraduates and g = 0.46 for [[learning-gains|academic performance]] ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]]). The academic effect fell from g = 5.07 for interventions of four weeks or less to g = 0.01 beyond twelve weeks, against heterogeneity above 96%.

- **Delayed [[educational-measurement|measurement]] is the exception.** A surprise test 45 days after a 120-student business course is one of the few retention measures here: AI-assisted students scored 57.5% against 68.5%, d = 0.68, having studied 3.2 hours against 5.8 ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]]).

- **The graded artifact is the usual unit of evidence.** That matters for [[assessment-validity]]: a rubric-scored essay or a passing test suite can improve while the capability the course exists to build does not.

## Tutoring and help at large enrollment

The largest positive result comes from a tutor built out of a course's own pedagogy, not a general assistant.

- **A designed tutor beat the course's own active learning.** In Harvard's Physical Sciences 2, 194 students met the same two lessons twice, once in class and once with a custom tutor. Median post-test was 4.5 against 3.5, time on task 49 minutes against roughly 60, and modeled effect 0.63 ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025]]). The tutor encoded seven instructional practices and used instructor-written solutions.

- **The same technology without instructional integration lost ground.** A course-grounded GPT-4o assistant reached 2,379 students across 30 [[teacher-role|instructors]]. In sections of the same course, final grades fell 4.12 points (0.37 SD) and recorded participations fell about 0.90 SD; 15% of students used it, for about four sessions ([[liu-course-integrated-ai-tutoring-rct-2026]]). First-generation students lost 0.50 SD against 0.22 for their peers.

- **A custom retrieval chatbot can produce nothing.** In a 454-student marketing course randomized within sections, no group-by-time effect appeared on interest, [[self-efficacy]], engagement or test score. Students logged in 0.89 times a week and rated enjoyment 80/100 ([[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]]).

- **Interaction design moves outcomes more than model choice.** HelpCoach intervened only on vague questions: 57.3% of first drafts asked a specific question against 40.5%, and retention a week later was 1.9 against 0.3 out of 6 ([[helpcoach-ai-help-seeking-scaffolding-2026]]).

## The gap between the score and the learning

Four designs separate the score on the supported task from what students could do without help, and they agree on the direction.

- **CS1: exercise scores rose, conceptual knowledge did not.** In a 275-student Java course, [[generative-ai|ChatGPT]] users scored 71.84% on the exercise against 29.85% for students using ordinary web resources, while pre-post knowledge gains were 0.71, 0.85 and 0.83 points with no time-by-group interaction ([[bassner-performance-learning-dissociation-ai-programming-2026]]).

- **Proof course: homework gains did not reach the exam.** At Carnegie Mellon, 153 students given a chatbot and a proof-feedback interface scored 2.56 points higher on homework. The next exam, taken without AI, showed no significant difference, and every 100 additional chatbot messages were associated with 3.02 points lower on the following exam ([[ai-proof-learning-cognitive-offloading-2026]]).

- **Feedback: better revisions, flat post-test.** In a 354-student economics course, AI-mediated feedback improved revision quality at d = 0.50 across 1,366 essays, and the blind post-test was 0.59 against 0.56 ([[lu-ai-mediated-feedback-feedbackwriter-rct-2026]]).

- **Use pattern decided whether the gain survived removal.** An off-the-shelf chatbot raised unaided test scores by 6.7 points (0.27 SD) among 211 Middlebury students, and it persisted. The 32% who used it to automate work gained 0.54 SD on essays while it was available and 0.02 SD once it was gone ([[contractor-learning-impact-generative-ai-2026]]).

The mechanism usually offered is [[cognitive-offloading]]: the tool performs the process the task was designed to elicit. What follows is an ordering rather than a ban — an attempt first, help second, and one graded judgment without the tool.

## What students report about themselves

The surveys at this level ask students what they gained, and their answers sit loosely against what they say they did. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] surveyed 1,477 respondents in Sonora, Mexico, including 765 university students. Their engagement index rests on three reported behaviors — reading, modifying, and adding one's own ideas — and it barely moved with a single 0–10 self-rating of learning, at a pooled correlation of 0.052. University students used ChatGPT more than high school students and rated their learning only slightly higher. The authors read the result as a warning about [[assessment-validity|assessment validity]] rather than a verdict on learning, since no outcome was measured.

Where the predictors are also self-reported, a model describes a frame of mind more than a mechanism. [[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]] modeled paths to self-reported assignment performance for 304 students at two universities in Karnataka. Digital literacy reached β = 0.393 and perceived usefulness β = 0.259, while ethical awareness did not predict performance (β = −0.006, p = .924). Performance, literacy, and ethics were all self-rated, so the strongest path says that students who rate themselves digitally literate also rate their work higher. The ethics null remains the useful result: the authors read it as ethics shaping conduct rather than marks, and recommend assessing disclosure and citation directly.

The level comparison makes the undergraduate side look uneven rather than uniformly low. [[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]] compared 381 students at a technical university in Uzbekistan on a balanced subsample of 302. Undergraduates averaged 3.527 on the ethics scale against 4.627 for graduate students, with d = 1.47 for ethics and academic autonomy. Perceived cognitive load did not differ by level (p = .296). The distributions carry the design point: graduate standard deviations on ethics and self-regulation were roughly a third of the undergraduate values, while undergraduates reached the scale minimum. A first-year cohort therefore holds students who appraise output critically beside students who report almost none of that disposition.

Read together, the surveys show what [[self-report-measures|self-report]] can and cannot establish. They establish distribution and self-concept — how spread a cohort is, how students rate themselves — and not learning. The performance evidence above is what separates the two, from the 57.5% against 68.5% retention test to the 0.54 SD gain that vanished when the chatbot was removed. Self-reported gains and self-reported predictors therefore need the same caution in opposite directions. A gain measured by self-rating may be competence or confidence, and a predictor measured the same way may track the outcome because one instrument produced both. The test is whether a design changes something a student does: a revised draft, a verified source, a disclosed use.

## Writing, feedback, and integrity

Writing is where AI use is most visible and the assessment contract weakest, because a fluent submission carries no trace of the process behind it.

- **[[ai-feedback-quality|AI feedback]] matched instructors on the essay and lost on the relationship.** Across 312 first-year writers, revised-essay quality rose d = 0.60 with AI feedback and d = 0.59 with instructor feedback, equivalent within a pre-set margin. [[motivation|Intrinsic motivation]] was 4.90 against 5.16, a d = 0.31 gap mediated by perceived relatedness ([[liu-ai-generated-teacher-feedback-writing-motivation-rct-2026]]).

- **Process requirements raised adoption and left quality intact.** In a first-year computing course of roughly 570 students, voluntary adoption held near two-thirds until a draft-before-AI workflow with a marked [[reflection]] and a disclosure form lifted it to 93%. AI use did not predict essay quality once prior writing was controlled ([[shakil-scaffolding-genai-ethical-essay-2026]]).

- **Detection output works as triage, not judgment.** Argus scored six offerings of a Purdue CS2 course: mean H-score 1.1 in 2020 against 11.9 in 2026, and 45.7% of 584 students were flagged after manual review. Flagged students averaged 61.9% on proctored exams against 73.5%, at a median of 1.5 minutes of staff review per student ([[argus-academic-integrity-genai-2026]]).

- **Detector error disqualifies adjudication.** Seven detectors applied to 91 TOEFL essays by non-native English writers averaged a 61.22% false-positive rate, and 97% were flagged by at least one ([[ragab-ai-integrity-verification-model-2026]]). What follows is supervised competence assessment at progression points, moving the burden onto [[academic-integrity]] policy rather than software.

## The first year: transition, advising, and support

First-year students arrive with habits formed in school and little standing to question a plausible answer. The tools aimed at them mostly do administrative work.

- **Habits arrive before skepticism.** Across 1,598 students aged 12 to 25, reported use rose from 1.24 to 1.77 on a 0-4 scale between ages 12 and 17 while judged reliability did not move. At university, use flattened and shifted toward translation; strong caution on research tasks reached 23.3% in the fourth year against 10.1% in the first ([[cuenca-rodriguez-genai-use-caution-trajectories-2026]]).

- **Verified material helped the students who needed it.** In a first-year economics course, 170 students with access to AI-generated, teaching-assistant-verified podcasts and study guides scored 2.34 marks higher on a 50-mark exam. Three-quarters of that gain sat in the bottom quintile, the share below 60% fell 24.7 points, and verification cost 1.8 minutes of staff time per student ([[verified-study-materials-learning-gains-2026]]).

- **Advising outreach moves deadlines, not grades.** A text chatbot in two large [[online-teaching-and-learning|online courses]] raised the share earning an A or B by 4 points and tutoring attendance by 2, across 2,483 students ([[chatbot-outreach-course-performance-2026]]). At 8,708 students over eight semesters, a similar service moved registration by 34 points and left GPA and persistence unchanged ([[mata-sustaining-ai-enabled-student-support-2026]]).

- **Early-warning models belong to advising, not discipline.** First-eight-week LMS traces from 52 programming students predicted later in-exam risk events at AUC 0.763; the author frames the score as a prompt for support ([[akcapinar-ai-cheating-risk-lms-prediction-2026]]).

## Connections

Undergraduate sits between two bands studied with different methods. [[secondary-education]] assumes compulsory attendance, an adult who mediates the tool, and the classroom as the unit of deployment. Undergraduate teaching assumes learners who set their own hours and treats the course as the unit. [[higher-ed]] is the wider frame — [[governance]], [[educational-development|faculty development]], procurement and professional programs — and most evidence on grading accuracy and [[educational-policy-ai|institutional policy]] sits there. [[graduate-education]] shifts the unit of work from coursework to supervised research, where the question becomes judgment. [[education-levels]] sets out the full set of bands.

## Implications for Practice

**For instructors**

- **Teach the interaction, not the tool.** A single 45-minute session on what the model gets wrong raised the share of wrong answers revised to correct from 41.3% to 69.3% ([[structured-genai-training-physics-problem-solving-rct-2026]]).
- **Put scored weight on unaided performance.** Every design that separated the two found the supported artifact improving first; grade one piece of work without AI.
- **Require an attempt before help.** The attempt-first interface in the Carnegie Mellon proof course carried no exam penalty; the open chatbot did.

**For course and program leaders**

- **Treat a course chatbot as a [[pedagogy|pedagogical]] intervention.** The same technology produced no measurable effect in one randomized course and lowered grades in another.
- **Budget the verification labor.** Verified study material cost 1.8 minutes of staff time per student and produced its largest gain among the weakest students.
- **Monitor [[differential-effects-across-learner-groups|subgroup effects]] before scaling.** The first-generation differential in the 2,379-student trial was the largest harm and invisible in a course average.

**For researchers**

- **Report an unaided outcome and a delayed one,** or an artifact effect will be read as a learning effect.
- **Pre-specify an equivalence margin** when claiming AI feedback is as good as instructor feedback.

## Common Misconceptions

- **"A course chatbot is neutral infrastructure."** In the 2,379-student trial, 15% of students used the tool and grades fell 0.37 SD, with participation down 0.90 SD.
- **"A higher exercise score means more learning."** ChatGPT users scored 71.84% against 29.85% on a CS1 exercise while conceptual gains were statistically identical across arms.
- **"Detectors can settle an integrity case."** Seven detectors averaged 61.22% false positives on essays by non-native English writers, and 97% were flagged by at least one.
- **"Daily use means [[ai-literacy|AI literacy]] can be assumed."** Reported use rose every year of secondary school while judged reliability stayed flat; caution on research tasks appeared only in the fourth year.

## Connected Concepts

- [[scaffolding]] — hint-first tutors versus answer engines
- [[help-seeking]] — asking a specific question is a skill the interface can teach
- [[feedback-literacy]] — what students do with a comment decides whether it changes the work
- [[self-regulated-learning]] — planning, monitoring and evaluating without the tool
- [[desirable-difficulties]] — the struggle an unrestricted assistant removes
- [[process-oriented-assessment]] — grading the trail rather than the artifact
- [[self-report-measures]] — what a survey captures, and why it is not a learning outcome
- [[ai-detection]] — why classifier output is evidence for review, not a finding
- [[learning-analytics]] — LMS traces as an early signal for outreach
- [[student-support-and-success]] — advising, outreach and the limits of nudging
- [[equity-in-ai-education]] — who gains when material is checked before release
- [[writing-education]] — the assessment contract in essay-based courses
- [[stem-education]] — gateway sequences in physics, computing and engineering

## Connected Articles

- [[guardrails-ai-teaching-assistants-programming-2026]] — in a 2×2 trial with 132 Python students, the Socratic assistant with full context was rated least supportive
- [[genai-use-changing-institutional-policy-physics-2026]] — task design, not the policy tier, determined which GenAI functions students used
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — 130 undergraduates; notes written without ChatGPT were more diverse and integrative
- [[li-who-benefits-llms-prompt-engineering-equity-2026]] — prompt structure, not access, carried the gain; a five-part scaffold raised rated quality from 3.32 to 4.60
- [[llm-math-homework-offloading-traces-2026]] — 23 first-years; 53 of 59 submissions reproduced the model's product or revised it only in form
- [[patrick-ai-higher-order-thinking-systematic-review-2025]] — 31 studies and 1,585 students; integrity is where educator and student concerns diverge
- [[genai-reliance-human-agency-collaborative-learning-2026]] — 342 students over three waves; within-person reliance predicted lower subsequent agency
- [[genai-cognitive-offloading-learner-agency-review-2026]] — 123 studies; agency-supportive and agency-eroding patterns coexist
- [[ai-enabled-course-development-first-year-adjustment-2026]] — 551 first-years reported high approval alongside high self-reported strain
- [[thulin-chatbot-mental-health-students-2026]] — 15.4% had used a chatbot for a mental health reason, and use tracked barriers to care
- [[torres-peralta-perceived-learning-engagement-homework-2026]] — 1,477 respondents; self-rated learning and a three-behavior engagement index correlated at 0.052
- [[kumar-chatgpt-academic-assignments-2025]] — 304 students; digital literacy predicted self-reported performance at β = 0.393, ethical awareness at β = −0.006
- [[zaripova-genai-self-regulation-neuroai-competence-2026]] — undergraduates averaged 3.527 on ethics against 4.627 for graduate students, with far wider spread
