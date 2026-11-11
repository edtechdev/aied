---
title: "Measuring the impact of AI tutoring, from near transfer to standardised tests: An expanded RCT in UK mathematics classrooms"
created: "2026-11-07T12:30:00-05:00"
updated: "2026-11-07T12:30:00-05:00"
type: article
published: "2026"
page_kind: [synthesis]
research_method: [experiment]
discipline: [math education]
level: [k 12]
audience: [instructors, researchers, administrators]
foundations: [human-ai-collaboration, teacher-role, misconceptions]
pedagogy: [scaffolding, transfer-of-learning]
technology: [generative-ai, human-in-the-loop-ai, intelligent-tutoring, personalized-learning]
assessment: [educational-measurement, learning-gains]
methods: [rct, quantitative-research]
ethics: []
confidence: high
source_url: "https://www.eedi.com/news/eedi-publishes-full-findings-from-its-most-recent-ai-tutor-trial"
sources: ['raw/papers/learnlm-eedi-expanded-rct-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** The LearnLM Team at Google and Eedi ran a preregistered [[rct]] with 1179 students in 10 UK state secondary schools to test whether [[generative-ai|AI tutoring]] improves mathematics learning beyond the platform's existing remediation, and whether it matches expert human tutors. Over 10 weeks, students were assigned to standard remediation, expert tutoring, or one of two [[intelligent-tutoring|AI tutoring]] conditions that differed only in whether Gemini received a summary of the student's learning history. Tutoring beat standard remediation on the in-platform measures and on a midtrial quiz, and both AI arms matched expert tutors there. On the externally scored Star Maths test, no arm beat standard remediation. This is a technical report from the tutor's developers, not a peer-reviewed article.

## Key Findings

1. **A preregistered, student-level [[rct]] at classroom scale.** 1179 students in Years 8 to 10, across 58 mathematics classes in 10 UK state secondary schools, were randomized within each class to four conditions for 10 weeks. Every arm was compared against an active control, the platform's standard remediation, not against no support.
2. **Supervised AI met the trial's teaching standard.** Tutors approved 94.7% of 94,385 reviewed drafts unchanged, and 77.1% of sessions ran without any revision. An audit of all 114,935 generated drafts flagged 6 with mathematical errors or tone issues (<0.01%), none of which reached a student.
3. **Tutoring raised mistake correction and near transfer.** After support, students answered a unit's second diagnostic question correctly 57.7% of the time with an expert tutor, 56.9% with question-context AI, and 56.5% with personalized-context AI, against 43.4% under standard remediation. On [[transfer-of-learning|near transfer]], measured by the first question of the next unit, accuracy ran 59.1%, 58.4%, and 58.3% against 50.5%.
4. **Gains reached the midtrial quiz, with weaker support.** Quiz accuracy was 59.6% under standard remediation, 61.8% with an expert tutor, 62.1% with question-context AI, and 63.5% with personalized-context AI. The report puts 97.1% probability behind the personalized AI arm beating remediation, but only 81.3% for expert tutoring.
5. **No condition beat standard remediation on the standardized test.** Star Maths effects were -0.01 SD [-0.15, +0.14] for question-context AI and +0.02 SD [-0.12, +0.16] for personalized-context AI. Expert tutoring came in at -0.09 SD [-0.25, +0.07].
6. **Depth cost coverage, and gains split by gender.** Median study units completed were 132 under standard remediation, 99 in the AI arms, and 77 with an expert tutor, and each +1 SD in units was associated with +0.09 SD on Star Maths. Boys, 66.1% of the sample, outgained girls by +0.31 SD under remediation, a gap that fell to near zero under all three tutoring arms.
7. **Personalized context added little.** The AI arms were nearly indistinguishable on learning, attitudes, and approval (94.7% and 94.8%). A platform bug kept earlier chat summaries out of the profile, so this tested a partial version of [[personalized-learning|personalization]].

## A four-arm test inside ordinary lessons

The platform organizes the curriculum into short study units built around diagnostic multiple-choice questions. Each wrong option maps to a specific [[misconceptions|misconception]], so an error becomes a signal for support. A student who missed the check-in question received that condition's support, then answered a second question on the same topic.

Standard remediation offered videos, fluency exercises, and an educator-written hint keyed to the chosen distractor. Expert tutoring replaced those with a live chat with a remote mathematics educator. The AI conditions used Gemini, prompted to guide the student step by step with concise [[scaffolding|scaffolded]] questions and to withhold the answer. One arm got the question and misconception; the other also got a profile of prior performance, pace, and recurring errors.

Learning was measured at three distances: correction and near transfer in the platform, an eight-question quiz after four weeks, and Renaissance Star Maths, scored externally at baseline and endline. Students took every outcome alone. Analyses used Bayesian hierarchical models with baseline attainment as a covariate.

## What moved, and by how much

The proximal results were consistent. On mistake correction, every arm beat standard remediation with near certainty (each >99.9%), and neither AI arm differed meaningfully from expert tutoring. Near transfer showed the same ordering, roughly 58% to 59% correct after tutoring against 50.5% after a hint and video. Questions returning after seven days showed it again: 58.9% to 59.9% against 47.6%.

The quiz was positive but less decisive. Personalized-context AI had the largest point estimate, 63.5% against 59.6%, yet the report assigns it 97.1% probability of beating remediation, only modestly above 87.8% for question-context AI and 81.3% for expert tutoring, and the four intervals overlap. Tutoring probably helps students consolidate recent topics; the trial was not powered to rank the variants.

What these measures share is that they test material the student just worked on. A conversation that repairs a specific error should show up there almost by construction. The open question is whether the repair survives a test that samples the whole curriculum.

## Why the standardized test did not move

Star Maths was flat, and the report does not hide it. Two exploratory analyses explain much of the pattern. The first is time. A conversation took roughly four to seven minutes, and students waited a median of 24 seconds for an expert tutor's reply, 16 seconds with question-context AI, and 19 seconds with personalized AI. Coverage fell accordingly: 77 units with an expert tutor and 99 with AI, against 132 under standard remediation, and 48 or 57 distinct constructs rather than 72. Coverage predicted attainment independently of condition, which is why the expert-tutoring deficit shrank to -0.02 SD after adjustment.

The second is gender. Under standard remediation, boys gained +0.31 SD on girls. Tutoring narrowed that gap to near zero because girls improved relative to remediation while boys did not. The largest school was an all-boys school, so boys were 66.1% of the sample and their flatter response pulled every tutoring average down. Adjusted estimates were +0.05 SD for question-context AI and +0.09 SD for personalized AI, with 74.5% and 87.9% probabilities of an advantage. That is suggestive, not conclusive.

The authors read the coverage cost as an upfront investment. First-attempt accuracy climbed in the tutoring arms and stalled under remediation, so tutored students needed fewer conversations over time. A separate two-year platform trial found only small, uncertain effects on standardized tests at six months, with clear gains around one to one-and-a-half years. Ten weeks may be too short for depth to show up as breadth.

## Supervision and the tutor's changing role

Every AI message passed a human before delivery, which makes this a study of [[human-in-the-loop-ai|human-in-the-loop]] tutoring rather than an autonomous tutor. The 58 educators rotated between direct and supervisory shifts, approving, regenerating, or rewriting drafts. Edits were substantial: a median of 69% of the text changed. Tutors cited style and tone (32.5%), pedagogical scaffolding (28.6%), and engagement (22.9%), with engagement rising to 40% of late revisions.

Rubric audits suggest the approval rate reflected quality. The AI tutor withheld direct answers in 98.8% of conversations, against 96.3% for experts, and asked follow-up questions in 91.3%, against 60.0%. Contextual error rates were close: 0.24% of Gemini messages against 0.18% of tutor messages.

The [[teacher-role|tutor role]] changed in ways outcomes do not capture. Tutors found drafts helpful in 81.9% of diaries and time-saving in 86.3%, and felt slightly more confident after supervisory shifts (4.47 out of 5) than direct ones (4.34). But they reported more difficulty managing workload (4.33 against 4.43) and less positive affect (3.59 against 3.76), and seven of eight interviewees said monitoring several chats at once remained hard.

## What this means for practice

- **Instructors.** Expect conversational tutoring to slow coverage, and plan for it. Decide in advance which topics can absorb a four-to-seven-minute repair conversation and which should get a hint and move on.
- **Administrators.** Judge an AI tutor against the support you already provide, not against nothing. Here the control was a remediation system with a prior record of roughly four additional months of progress, a demanding and realistic benchmark.
- **Administrators.** Budget supervision as part of the intervention, not as a temporary scaffold. Every message was reviewed, and reviewers found the work lighter but more draining, with lower positive affect and less perceived control over workload.
- **Researchers.** Report narrow and broad outcomes together, because the same intervention looked effective, marginal, and null depending on the assessment. Report coverage too, since time on task is a plausible mediator that can mask an effect on a broad test.
- **Researchers.** Treat developer-run trials as useful but not decisive. This one was preregistered and used an external test, yet the authors built and sold the tutor, and ten weeks is shorter than the accumulation period they themselves cite.

## Limitations

- This is a technical report from Google's LearnLM team and Eedi, not a peer-reviewed article. The authors developed the tutor, the platform hosted it, and Eedi's tutoring team supplied the educators, so independence is limited despite preregistration and external scoring.
- The trial covered 10 schools and 10 weeks, with delivery ranging from seven to 10 weeks because of term dates. That is a short window for an outcome the report says may take a year or more to appear.
- The comparison is against an unusually strong active control. A null result against standard remediation does not mean tutoring equals ordinary instruction, and the report does not test that comparison.
- Coverage and gender analyses were exploratory, not preregistered. The gender result rests on a sample that was 66.1% boys and included one large all-boys school, so it is a hypothesis about differential response, not an established effect.
- Personalization was degraded in implementation: a platform bug blocked earlier chat summaries, and Gemini's session plans only partially reached its messages. The null therefore tests this build, not personalization in principle.
- Attendance varied across lessons and testing days, so complete data differed across the three outcome levels, and the report leaves those analytic samples in its appendix.

## Citation

LearnLM Team, Google, & Eedi. (2026). [*Measuring the impact of AI tutoring, from near transfer to standardised tests: An expanded RCT in UK mathematics classrooms*](https://www.eedi.com/news/eedi-publishes-full-findings-from-its-most-recent-ai-tutor-trial). Technical report, Google and Eedi.
