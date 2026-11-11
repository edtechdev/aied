---
title: "What Should Educators Avoid Doing With AI?"
created: "2026-11-10T22:10:00-05:00"
updated: "2026-11-10T22:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
---

Most guidance about AI in education is phrased as what to try. This page is the other list: the practices the evidence says to stop, organized by the role that would have to stop them. It is deliberately not a list of false beliefs — the [[addressing-common-misconceptions-ai-education|misconceptions FAQ]] handles those, and the [[misconceptions]] concept page explains why they persist — and not a list of what research cannot yet tell you, which is what [[limitations-in-aied-research|limitations in AIEd research]] covers. The focus here is the step after a belief: what people actually do, what it costs, and what to do instead.

Three failures recur across every role. **Substitution** — a tool performs the thinking the learner was supposed to do, and the output is scored as if the learner did it. **Unearned evidence** — a signal that is easy to collect (confidence, fluency, engagement, a completion rate) is treated as proof of something it cannot show. **Structure left to exhortation** — a warning, a policy sentence or a training session is asked to do the job that interface design, assessment design or governance has to do.

## The short version

**1.** Never grade, cite or promote an output as evidence of the capability that produced it.

**2.** Collect the unaided measure alongside the assisted one, every time.

**3.** Treat fluency, confidence and engagement as features of use, not as learning.

**4.** Put the safeguard in the workflow, not in a warning.

**5.** Assume any data the tool can see will be retained, combined and breached.

**6.** If the claim comes with a demo but not a comparison, it is marketing.

## For learners

**Do not hand over the part you are supposed to be practicing.** The distinction is not how much you use AI but which cognitive work moves. Outsourcing homework raises homework scores while lowering closed-book exam scores — an 18% gain against a 20% loss in one secondary study — because the practice that builds retrievable knowledge went to the tool ([[reducing-ai-misuse]]). If the exercise is the point, the tool cannot do the exercise.

**Do not read fluency as accuracy.** Fluent text is the output of a language model whether or not the content is true, and the mechanism that makes it persuasive is the same one that makes it wrong ([[hallucination-risk]]). Verify the specific claim, not the tone of the paragraph. The verification habit rarely happens on its own: in a panel of 900 adults given an AI summary, readers followed a source cited inside it on 1% of visits ([[trust-calibration]]).

**Do not accept agreement as feedback.** Models affirm substantially more than humans do — across 11 models, AI responses affirmed users 49% more often than human responses — and the excess is what makes the interaction feel supportive ([[ai-sycophancy]]). A tutor that never disagrees with you has removed the corrective signal you came for. Ask for the objection, not the endorsement.

**Do not trade a question for an answer when you are stuck.** The productive struggle you skip is the learning; help-seeking that retrieves an answer is a different behavior from help-seeking that retrieves a hint ([[help-seeking]], [[desirable-difficulties]]). Use tools that withhold the finished answer.

**Do not paste personal, health or family information into a tool to get a better response.** The tool has no obligation to forget it, and the privacy cost is not visible in the quality of the answer ([[privacy]]).

## For parents and families

**Do not do the homework with the tool, or let it be done beside you.** The pattern that shows up in the data is score inflation with a hidden cost: homework scores up 18% while closed-book exam scores fall 20% ([[reducing-ai-misuse]]). What you can check is the process — can your child explain the step, redo it on paper, and say what they were unsure about? If not, the tool did the assignment.

**Do not let a chatbot become the confidant.** Sycophantic systems affirm far more than people do — 49% more across 11 models — and the affirmation is the mechanism that makes them feel safe to talk to ([[ai-sycophancy]]). In a large longitudinal study, users turned to sycophantic AI for personal advice nearly as often as to close friends and family, with lower satisfaction in their real relationships ([[sycophantic-ai-social-interaction-2026]]). A child who brings distress to a model that always agrees is not being heard; they are being mirrored.

**Do not hand a generative chatbot to a young child and call it supervised because you are in the room.** The age-tiered guidance is concrete: scaffolded, non-generative activities for ages 9 to 12, supervised generative use with ethical reasoning from 13 up ([[ai-guidance-children-under-13]]). For the youngest children the risk is belief — preoperational children accept generated content as true, and the systems are not developmentally calibrated in the feedback they give. Adult co-use means asking what the toy just did, not monitoring from the doorway ([[early-childhood-elementary-ai-education]]).

**Do not assume the school's tool protects your child's data because the school chose it.** Ask what is retained, for how long, whether it trains anything, and who else sees it ([[privacy]]). Awareness does not follow from exposure: one month after a lesson in which students watched their own logged behavior projected live, 66% of a year-7 class still chose the least protective chatbot setting ([[privacy]]).

**Do not use a detector result to accuse your child, or to back an accusation from a school.** In the strongest controlled test, detectors flagged 9–15% of unmodified human writing and caught fewer than 4% of humanized AI rewrites; at realistic base rates false positives outnumber true positives ([[ai-detection]]). Treat a flag as a reason to ask for the draft history and a conversation, not as a finding.

**Do not conclude that banning the tool is the safe option.** Under-trust is a calibration failure with its own cost — forgone capability — and the skill that matters is matched confidence, not avoidance ([[trust-calibration]]). The useful parental move is the same one the research supports for students: require a verification step, and make it cheap enough that a tired child will actually do it ([[verify-ai-output]]).

**Do not mistake a content filter for safety.** Filters address what a system will say; they do not address what an interaction does to a learner — eroded practice, sycophantic agreement, or uneven refusals ([[pedagogical-safety]]).

## For instructors

**Do not certify output as capability.** A polished submission is evidence of a polished submission. If the assessment cannot distinguish what the student can do unaided, the assessment has stopped measuring the thing the credential asserts ([[assessment-validity]], [[authentic-assessment]]). The fix is a task redesign, not a stricter honor code.

**Do not use a detector score as proof of misconduct.** The strongest controlled test flags 38–80% of guideline-compliant light AI editing and 9–15% of unmodified human writing, while catching fewer than 4% of rewrites run through a humanizing service; 14 commercial tools in an independent benchmark all fell below 80% accuracy, and at realistic base rates false positives outnumber true positives ([[ai-detection]], [[should-we-use-ai-detectors]]). A detector can start a conversation; it cannot end one.

**Do not add AI to an assessment you have not redesigned.** Bolting a tool onto a task designed for unaided performance produces exactly the score inflation that hides the loss — homework up, exam down. Ask of every graded task what the unaided version would show, and fix the task first ([[reducing-ai-misuse]]).

**Do not treat engagement as learning.** Time on task, satisfaction, help-seeking volume and chat activity are all easy to instrument and all compatible with no learning at all. A guardrail that cut students' switching to an incorrect AI position from 42–60.5% to 5.7–8.2% produced no measurable learning effect within the session (β = 0.03, p = 0.18). Behavior held; learning did not move ([[student-engagement]]).

**Do not rely on a warning where the interface could constrain.** A tutor that can produce the finished answer will produce it under deadline pressure. The guardrail that works is the one built into the interaction, not the sentence in the syllabus ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Do not paste student work, IEPs, discipline records or identifiable drafts into a consumer tool.** Data minimisation is a design decision you are making on the student's behalf whether or not you have thought about it ([[privacy]]).

## For educational and faculty developers

**Do not run tool training and call it AI literacy.** A session on prompting teaches a product's interface; [[ai-literacy]] is the capacity to judge when the tool should be used, what it is doing, and what to verify. Teachers who learn the buttons without the judgment leave with confidence and no calibration ([[teacher-ai-competency]]).

**Do not run one-shot professional development and expect practice to change.** The evidence on [[professional-training|professional learning]] is consistent about duration and follow-up: single events move self-reported confidence, rarely classroom behavior, and the confidence gain can mask the absence of change ([[educational-development]]).

**Do not ignore the assessment system you are leaving in place.** Faculty will adopt the practice you teach only if the assessment they are held to does not punish it. A workshop on AI-resistant task design that runs beside an unchanged exam regime teaches faculty that the training is decorative.

**Do not model the uncritical use you are warning against.** Demonstrating a tool by generating a lesson plan in front of faculty, with no verification step, teaches the audience that the output is the product.

**Do not accept a vendor demo as evidence of effectiveness.** The claim you are evaluating is about learning, and a demo shows capability. Ask for unaided outcomes, subgroup results and multi-turn safety testing ([[checking-whether-educational-ai-works]]).

## For educational software developers

**Do not optimize the metric that is easy to log.** Session length, message count and satisfaction ratings will improve under almost any change; learning often will not. The same team that ships a guardrail can ship a dashboard that rewards interaction volume, and the two will point in opposite directions ([[learning-analytics]], [[student-engagement]]).

**Do not ship a detector without a validation study against the construct.** A model that scores 0.98 F1 on a leaked split can drop to 0.60 under trial-independent validation, and a smile detector can run *negatively* against observer-rated empathy because it lacks the context a human rater has ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publish the validation protocol, not just the headline.

**Do not infer affect, attention or "engagement" from faces and bodies without consent and a stated purpose.** Multi-turn risk is not single-turn risk: harm rates in one review rose from about 18% on single-turn evaluations to about 78% on multi-turn ones, so a system certified on isolated prompts is certified on an interaction students do not have ([[pedagogical-safety]], [[privacy]]).

**Do not hide the handoff.** A student who cannot tell when a tutor is generating versus retrieving, or when a human is in the loop, cannot calibrate trust in it, and automation bias operates most cleanly when the system is right and the human has stopped checking ([[automation-bias]], [[trust-calibration]]).

**Do not design for the benchmark and then claim the classroom.** Benchmark performance is a property of the benchmark. Report the conditions of use you tested, the population, and the tasks; otherwise the number will be read as a promise about a different setting ([[limitations-in-aied-research]]).

**Do not make the tool the only route to help.** If a student's access to feedback depends on a model's availability, quota or license, the equity question has already been decided by the procurement ([[equity-in-ai-education]]).

## For educational administrators

**Do not buy capability claims as outcome evidence.** Vendors can demonstrate a product; only an evaluation can demonstrate learning. Require unaided outcomes, subgroup results, attrition, and a plan for what happens when the pilot ends ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Do not deploy surveillance because it is available.** Proctoring systems capture facial images, identity documents, room scans including 360-degree sweeps and microphone audio, and a review of 80 studies found only 25% met the reporting bar for the questions an institution needs answered before deployment ([[privacy]], [[remote-proctoring]]). The cost lands on students; the evidence base is thinner than the contract implies.

**Do not write a prohibition-only policy and call it governance.** A ban with no assessment redesign, no support and no appeal route moves the behavior rather than preventing it, and it punishes the students least able to contest a false accusation. Policy has to cover the grader as well: two of five indirect prompt-injection strategies embedded in a submission raised a failing essay's score ([[institutional-ai-policy]], [[course-ai-policy]]).

**Do not equate adoption with improvement.** A dashboard that reports usage, satisfaction and completion will look like success while the learning measure stays flat. Decide in advance which outcome would make you cancel the contract ([[ai-ed-evaluation]]).

**Do not let accessibility arrive as an accommodation request.** In a review of 40 studies of digital assistive technologies for neurodivergent students, 28 made a formal diagnosis a condition of participation — a diagnosis-gated model that excludes every learner with needs and no label ([[accessibility]], [[universal-design-for-learning]]).

## For educational researchers

**Do not let self-report carry the causal claim.** Confidence, perceived learning and satisfaction are outcomes, but they are not the outcomes most studies say they are measuring. The [[empathy|empathy]] literature is the clearest case: a field that intends to teach empathy mostly measures comfort, and the strongest review of 17 studies found confidence gains far more common than evidence of empathy itself ([[self-report-measures]], [[empathy]]).

**Do not quote an effect without its design.** In a critical review of 80 HCI studies of critical thinking with AI, 42 ran no control group. A headline effect from 30 students in one course at one site is the common form of a fragile claim ([[limitations-in-aied-research]]).

**Do not report heterogeneity without the model.** The same data yields I² = 82.98% under a fixed-effect model and 15.75% under a random-effects model; a quoted I² without its model is uninterpretable ([[meta-analysis-systematic-review]]).

**Do not generalize from a single context and call it a finding.** One course, one institution, one model version, one language. Model behavior changes with every release, and detectors trained on one generation lose recall on the next ([[research-gaps-aied]], [[ai-detection]]).

**Do not treat a correlation between interaction and outcome as a mechanism.** Prompt volume does not measure cognitive offloading — clusters by volume did not differ in the distribution of cognitive work, and hand-coded dialogue found no offloading at all in 49.6% of 125 dialogues ([[cognitive-offloading]]). Measure the work, not its visible trace.

**Do not publish a limitations paragraph that could have been written before the study.** Name the specific threat, the specific count, and the claim it bounds. That is what makes a limitation usable by the next reader ([[interpreting-and-applying-aied-research]]).

## Why these belong together

Every item above is a case of a proxy being promoted to a verdict: the essay stands for the writer, the score stands for the misconduct, the smile stands for the empathy, the demo stands for the learning, the policy stands for the governance. The correction is always the same move — name the construct, find a measure that could come out the other way, and collect it alongside the convenient one.

That is also why these cautions are not a list of things that are always wrong. A detector can be a reason to talk to a student. A chatbot can be a useful rehearsal. A dashboard can be a prompt to ask a question. The harm is in the substitution, not the tool.

## What to do this week

- Pick one graded task and write down what it would show with the tool closed. If the answer is "nothing different," the task is the problem.
- Add one unaided measure to a course that currently reports only assisted performance.
- Read your institution's proctoring or AI-tool contract for retention, secondary use and breach terms — and check whether the consent text describes what the system actually captures.
- Ask a vendor for unaided outcomes and subgroup results. If the answer is a demo, you have your answer.
- In your next faculty session, spend the second half on assessment redesign rather than on prompts.

## Where to go next

- [[addressing-common-misconceptions-ai-education]] — the beliefs behind these practices, and how to correct them without condescension.
- [[limitations-in-aied-research]] — what the evidence base cannot yet support.
- [[reducing-ai-misuse]] — structural levers for misuse, and why they beat exhortation.
- [[pedagogical-safety]] — what a tutor can do to a learner while passing every content check.
- [[should-we-use-ai-detectors]] — the detector evidence in full.
- [[checking-whether-educational-ai-works]] — how to evaluate a claim before you adopt it.
