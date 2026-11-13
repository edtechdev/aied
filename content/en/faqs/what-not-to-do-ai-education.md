---
title: "What Should Educators Avoid Doing With AI?"
created: "2026-11-10T21:03:31-05:00"
updated: "2026-11-13T00:25:09-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors, adopting-ai-options-and-issues]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
---

Most guidance about AI in education says what to try. The practices the evidence says to stop are sorted by the role that would have to stop them. False beliefs are covered elsewhere: the [[addressing-common-misconceptions-ai-education|misconceptions FAQ]] handles them, and the [[misconceptions]] concept page explains why they persist. What research cannot yet tell you belongs to [[limitations-in-aied-research|limitations in AIEd research]]. What follows here is the step after belief, meaning what people do, what it costs, and what to do instead.

Three failures recur across the roles.

1. **Substitution.** A tool does the thinking the learner was supposed to do, and the output is scored as if the learner did it. The essay that gets handed in is a record of what the model can do, not of what the student can do.
2. **Unearned evidence.** A signal that is cheap to collect, such as confidence, fluency, engagement or a completion rate, is treated as proof of something it cannot show. A dashboard can report forty minutes in a tutoring session; it cannot report whether anyone learned the quadratic formula.
3. **Structure left to exhortation.** A warning, a policy sentence or a training session is asked to do work that interface design, assessment design or governance has to do. The syllabus says to use AI responsibly, and the tutor still hands over the finished answer at the first prompt.

## The short version

**1.** Never grade, cite or promote an output as evidence of the capability that produced it.

**2.** Collect the unaided measure alongside the assisted one, every time.

**3.** Treat fluency, confidence and engagement as features of use, not as learning.

**4.** Put the safeguard in the workflow, not in a warning.

**5.** Assume any data the tool can see will be retained, combined and breached.

**6.** If the claim comes with a demo but not a comparison, it is marketing.

## For instructors

**Do not certify output as capability.** A polished submission is evidence of a polished submission. If a student hands in a literature review whose sources you cannot check against anything the course taught, and the assessment cannot distinguish what that student can do unaided, the assessment has stopped measuring the thing the credential asserts ([[assessment-validity]], [[authentic-assessment]]). The fix is a task redesign; a stricter honor code will not do it.

**Do not use a detector score as proof of misconduct.** In a controlled study of 642 published abstracts, detectors flagged 38–80% of guideline-compliant light AI editing and 9–15% of unmodified human writing, while catching fewer than 4% of rewrites run through a humanizing service ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). An independent benchmark found that none of 14 commercial tools reached 80% accuracy, and simple paraphrasing halves even that ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). At realistic base rates, false positives outnumber true positives ([[should-we-use-ai-detectors]]). A detector can start a conversation; it cannot end one.

**Do not add AI to an assessment you have not redesigned.** Bolting a tool onto a task designed for unaided performance produces exactly the score inflation that hides the loss, with homework up and exam down. Ask of every graded task what the unaided version would show, and fix the task first ([[reducing-ai-misuse]]). If the take-home problem set and the in-class quiz test the same skill, only one of them is measuring the student.

**Do not treat engagement as learning.** Time on task, satisfaction, help-seeking volume and chat activity are all easy to instrument and all compatible with no learning at all. In a 3 × 2 experiment with 186 participants judging civil cases on an LLM-supported platform, a guardrail that cut switching to an incorrect AI position from 42–60.5% to 5.7–8.2% produced no measurable learning effect within the session (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). The behavior changed; the learning measure did not ([[student-engagement]]).

**Do not rely on a warning where the interface could constrain.** A tutor that can produce the finished answer will produce it under deadline pressure, whatever the syllabus says. The guardrail that works is built into the interaction ([[reducing-ai-misuse]], [[pedagogical-safety]]). Withholding the final answer for the first two attempts is a design decision; asking students not to ask for it is a request.

**Do not paste student work, IEPs, discipline records or identifiable drafts into a consumer tool.** Data minimization is a design decision you are making on the student's behalf whether or not you have thought about it ([[privacy]]). The free chatbot account that answers a question about a student's behavior plan is also a copy of that plan on someone else's server.

## For learners

**Do not hand over the part you are supposed to be practicing.** Suppose the assignment is a five-paragraph essay: you paste the prompt into a chatbot, take the draft it returns, and submit it. What you hand in is a record of what the model can do. The question is which cognitive work moves, not how much AI you use. Outsourcing homework raises homework scores while lowering closed-book exam scores: across 26,811 secondary students followed for 30 months, homework scores rose 18% and exam scores fell 20% within six months ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). The practice that builds retrievable knowledge went to the tool ([[reducing-ai-misuse]]). If the exercise is the point, the tool cannot do the exercise.

**Do not read fluency as accuracy.** Fluent text is the output of a [[llm|language model]] whether or not the content is true, and the mechanism that makes it persuasive is the same one that makes it wrong ([[hallucination-risk]]). Verify the specific claim, not the tone of the paragraph. That habit rarely happens on its own: in a passive-tracking panel of 900 US adults given an AI summary, readers followed a source cited inside it on 1% of visits ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). If your assignment requires three sources, open all three.

**Do not accept agreement as feedback.** Models affirm substantially more than humans do: across 11 models, AI responses affirmed users 49% more often than human responses, and the excess is what makes the interaction feel supportive ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). A tutor that never disagrees with you has removed the corrective signal you came for ([[ai-sycophancy]]). Ask for the objection, not the endorsement: "What is wrong with this argument, and what would a skeptic say?"

**Do not trade a question for an answer when you are stuck.** The productive struggle you skip is the learning. Help-seeking that retrieves an answer is a different behavior from help-seeking that retrieves a hint ([[help-seeking]], [[desirable-difficulties]]). Use tools that withhold the finished answer, and ask for the next step rather than the solution.

**Do not paste personal, health or family information into a tool to get a better response.** The tool has no obligation to forget it, and the privacy cost does not show up in the quality of the answer ([[privacy]]). A better prompt does not require your diagnosis, your address or your family's names.

## For parents and families

**Do not do the homework with the tool, or let it be done beside you.** The pattern in the data is score inflation with a hidden cost: in the same 30-month panel, homework scores rose 18% while closed-book exam scores fell 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). A child who brings home perfect homework and a failing chapter test is showing you exactly this gap. What you can check is the process. Can your child explain the step, redo one problem on paper, and say which part they were unsure about? If not, the tool did the assignment.

**Do not let a chatbot become the confidant.** Sycophantic systems affirm far more than people do, 49% more across 11 models, and that affirmation is what makes them feel safe to talk to ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). In a large longitudinal study, users turned to sycophantic AI for personal advice nearly as often as to close friends and family, with lower satisfaction in their real relationships ([[sycophantic-ai-social-interaction-2026]]). A child who brings distress to a model that always agrees is not being heard. They are being mirrored. If your child is talking to a chatbot about a friendship or a loss, that is the moment to ask who else they told.

**Do not hand a generative chatbot to a young child and call it supervised because you are in the room.** The age-tiered guidance is concrete: scaffolded, non-generative activities for ages 9 to 12, supervised generative use with ethical reasoning from 13 up ([[ai-guidance-children-under-13]]). For the youngest children the risk concerns belief. Preoperational children accept generated content as true, and the systems are not developmentally calibrated in the feedback they give. Adult co-use means sitting beside the child and asking what the toy just did, not watching from the doorway ([[early-childhood-elementary-ai-education]]).

**Do not assume the school's tool protects your child's data because the school chose it.** Ask what is retained, for how long, whether it trains anything, and who else sees it ([[privacy]]). Awareness does not follow from exposure: one month after a lesson in which a year 7 class watched its own logged behavior projected live, 66% of the 47 students still chose the least protective chatbot setting ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Put the questions to the school in writing, and ask for the answers in writing.

**Do not use a detector result to accuse your child, or to back an accusation from a school.** In a controlled study of 642 published abstracts, detectors flagged 9–15% of unmodified human writing and caught fewer than 4% of humanized AI rewrites ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). At realistic base rates, false positives outnumber true positives ([[ai-detection]]). Treat a flag as a reason to ask for the draft history and a conversation, not as a finding.

**Do not conclude that banning the tool is the safe option.** Under-trust is a calibration failure with its own cost, which is forgone capability, and the skill that matters is matched confidence rather than avoidance ([[trust-calibration]]). The useful parental move is the one the research supports for students: require a verification step, and make it cheap enough that a tired child will actually do it ([[verify-ai-output]]). Asking to see the source a chatbot used costs a minute; banning the chatbot costs the practice.

**Do not mistake a content filter for safety.** Filters address what a system will say. They do not address what an interaction does to a learner: eroded practice, sycophantic agreement, or uneven refusals ([[pedagogical-safety]]).

## For educational and faculty developers

**Do not run tool training and call it AI literacy.** A session on [[prompt-engineering|prompting]] teaches a product's interface. [[ai-literacy|AI literacy]] is the capacity to judge when the tool should be used, what it is doing, and what to verify. Teachers who learn the buttons without the judgment leave with confidence and no calibration ([[teacher-ai-competency]]). A workshop that ends with everyone able to generate a lesson plan, and nobody able to say when that plan should not be used, has taught the interface.

**Do not run one-shot professional development and expect practice to change.** The evidence on [[professional-training|professional learning]] is consistent about duration and follow-up: single events move self-reported confidence, rarely classroom behavior, and the confidence gain can mask the absence of change ([[educational-development]]). A two-hour session in August, with no follow-up in October, is a confidence intervention.

**Do not ignore the assessment system you are leaving in place.** Faculty will adopt the practice you teach only if the assessment they are held to does not punish it. A workshop on AI-resistant task design that runs beside an unchanged exam regime teaches faculty that the training is decorative.

**Do not model the uncritical use you are warning against.** Demonstrating a tool by generating a lesson plan in front of faculty, with no verification step, teaches the audience that the output is the product. Generate it in front of them, then mark the two claims that need checking.

**Do not accept a vendor demo as evidence of effectiveness.** The claim you are evaluating is about learning, and a demo shows capability. Ask for unaided outcomes, subgroup results and multi-turn safety testing ([[checking-whether-educational-ai-works]]).

## For educational software developers

**Do not optimize the metric that is easy to log.** Session length, message count and satisfaction ratings will improve under almost any change; learning often will not. The same team that ships a guardrail can ship a dashboard that rewards interaction volume, and the two will point in opposite directions ([[learning-analytics]], [[student-engagement]]). If your success metric is messages per session, you have built a product that rewards students for staying in the chat.

**Do not ship a detector without a validation study against the construct.** A benchmark of fifteen EEG models reached 0.9853 F1 under stratified cross-validation; trial-independent Group K-Fold, which respects trial boundaries, dropped the peak to 0.6038 against a 25% chance level ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). A smile detector can run *negatively* against observer-rated empathy because it lacks the context a human rater has ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publish the validation protocol alongside the headline number.

**Do not infer affect, attention or "engagement" from faces and bodies without consent and a stated purpose.** Multi-turn risk is not single-turn risk: in one pedagogical-safety review, failures escalated from 17.7% on single-turn evaluations to 77.8% on multi-turn ones ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). A system certified on isolated prompts is certified on an interaction students do not have ([[pedagogical-safety]], [[privacy]]).

**Do not hide the handoff.** A student who cannot tell when a tutor is generating versus retrieving, or when a human is in the loop, cannot calibrate trust in it. [[automation-bias|Automation bias]] operates most cleanly when the system is right and the human has stopped checking ([[trust-calibration]]). Say in the interface when a person will read the work.

**Do not design for the benchmark and then claim the classroom.** Benchmark performance is a property of the benchmark. Report the conditions of use you tested, the population and the tasks; otherwise the number will be read as a promise about a different setting ([[limitations-in-aied-research]]).

**Do not make the tool the only route to help.** If a student's access to [[feedback|feedback]] depends on a model's availability, quota or license, the equity question has already been decided by the procurement ([[equity-in-ai-education]]).

## For educational administrators

**Do not buy capability claims as outcome evidence.** Vendors can demonstrate a product; only an evaluation can demonstrate learning. Require unaided outcomes, subgroup results, attrition, and a plan for what happens when the pilot ends ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). A demo shows the tutor solving a problem; it does not show a student solving the next one.

**Do not deploy surveillance because it is available.** Proctoring systems capture facial images, identity documents, room scans including 360-degree sweeps, and microphone audio. A review of 80 studies found that only 25% addressed ethical issues at all, 35% did not disclose their dataset, and 30% could not be reproduced ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). The cost lands on students, and the evidence base is thinner than the contract implies ([[privacy]], [[remote-proctoring]]).

**Do not write a prohibition-only policy and call it governance.** A ban with no assessment redesign, no support and no appeal route moves the behavior rather than preventing it, and it punishes the students least able to contest a false accusation. [[governance|Policy]] has to cover the grader as well: in a red-team test of an everyday grading workflow, two of five prompt-injection strategies hidden in a submission moved a failing essay to pass at 100% and 94% success across file types ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). A policy that constrains students and not the grading pipeline is half a policy.

**Do not equate adoption with improvement.** A dashboard that reports usage, satisfaction and completion will look like success while the learning measure stays flat. Decide in advance which outcome would make you cancel the contract ([[ai-ed-evaluation]]). Write that number down before the pilot starts.

**Do not let accessibility arrive as an accommodation request.** In a scoping review of 40 studies of digital assistive technologies for [[neurodiversity|neurodivergent students]], 28 made a formal diagnosis a condition of participation. That diagnosis-gated model excludes every learner with needs and no label ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## For educational researchers

**Do not let self-report carry the causal claim.** Confidence, perceived learning and satisfaction are outcomes, but they are not the outcomes most studies say they are measuring. The [[empathy|empathy]] literature is the clearest case: a field that intends to teach empathy mostly measures comfort, and a review of 17 studies found confidence gains far more common than evidence of empathy itself ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Do not quote an effect without its design.** In a critical review of 80 HCI studies of [[critical-thinking|critical thinking]] with AI, 42 (52%) ran no control group ([[critical-review-critical-thinking-hci-research-ai-2026]]). A headline effect from 30 students in one course at one site is the common form of a fragile claim ([[limitations-in-aied-research]]).

**Do not report heterogeneity without the model.** The same data yields I² = 82.98% under a fixed-effect model and I² = 15.75% under a random-effects model ([[ai-supported-instruction-stem-meta-analysis-2026]]). A quoted I² without its model is uninterpretable ([[meta-analysis-systematic-review]]).

**Do not generalize from a single context and call it a finding.** One course, one institution, one model version, one language. Model behavior changes with every release, and detectors trained on one generation lose recall on the next ([[research-gaps-aied]], [[ai-detection]]).

**Do not treat a correlation between interaction and outcome as a mechanism.** Prompt volume does not measure cognitive offloading. Clusters by volume did not differ in the distribution of cognitive work, and hand-coded dialogue found no offloading at all in 49.6% of 125 dialogues ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Measure the work itself.

**Do not publish a limitations paragraph that could have been written before the study.** Name the specific threat, the specific count, and the claim it bounds. That is what makes a limitation usable by the next reader ([[interpreting-and-applying-aied-research]]).

## Why these belong together

Every item above promotes a proxy to a verdict. The essay stands for the writer, the score stands for the misconduct, the smile stands for the empathy, and the demo stands for the learning. The correction is the same each time: name the construct, find a measure that could come out the other way, and collect it alongside the convenient one.

None of these cautions means the tool is always wrong. A detector can be a reason to talk to a student. A chatbot can be a useful rehearsal. A dashboard can be a prompt to ask a question. What causes harm is the substitution.

## What to do this week

- Pick one graded task and write down what it would show with the tool closed. If the answer is "nothing different," the task is the problem.
- Add one unaided measure to a course that currently reports only assisted performance.
- Read your institution's proctoring or AI-tool contract for retention, secondary use and breach terms, and check whether the consent text describes what the system actually captures.
- Ask a vendor for unaided outcomes and subgroup results. If the answer is a demo, you have your answer.
- In your next faculty session, spend the second half on assessment redesign rather than on prompts.

## Where to go next

- [[addressing-common-misconceptions-ai-education]]: the beliefs behind these practices, and how to correct them without condescension.
- [[limitations-in-aied-research]]: what the evidence base cannot yet support.
- [[reducing-ai-misuse]]: structural levers for misuse, and why they beat exhortation.
- [[pedagogical-safety]]: what a tutor can do to a learner while passing every content check.
- [[should-we-use-ai-detectors]]: the detector evidence in full.
- [[checking-whether-educational-ai-works]]: how to evaluate a claim before you adopt it.
