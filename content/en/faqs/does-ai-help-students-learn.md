---
title: "Does Using AI Actually Help My Students Learn?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-28T11:06:17-04:00"
connected_faqs: [evaluating-ai-interventions-methods, how-ai-impacts-students, top-10-findings-ai-education-instructors]
weight: 90
audience: [instructors]
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

A student tells you the AI tutor is the reason they finally understood the material, and you have no way to check the claim. Or a pilot lands on your desk with a satisfaction survey and a screenshot of rising assignment grades, and someone wants a decision on the license by the end of the month. Or you are standing in front of a class wondering whether the tool you just told them to open is helping them practice or helping them avoid practice.

The short answer: yes, AI can help students learn, and none of the things you are most likely to see establish that it did: better assignments, faster completion, happy students, or a product called a tutor. What separates the cases where learning improves from the cases where it does not is the design of the activity and the outcome you chose to measure.

## The short version

**1.** Name the capability first, then decide what evidence would show it changed.

**2.** Measure the same capability later, with the tool taken away, because that is the only measure that answers your question.

**3.** Put the student's own attempt before the help, and require a response to the help afterward.

**4.** Grade the verification: what they checked, what they rejected, what they changed.

**5.** Look at results by prior knowledge, because the average hides the students the design is failing.

## Decide what you mean by learning before you look at any evidence

"Does AI help students learn" is not one question. It bundles at least three: does the tool raise performance while it is open, does it build capability that persists when it is closed, and does it change who ends up with that capability. A vendor report, a pilot survey, and a randomized trial can all be honest and still answer different ones.

Write the capability down before the activity. "Produce a polished report" is a different outcome from "select appropriate evidence", "explain a causal relationship", or "detect an unsupported conclusion". The assessment has to reveal the capability you intend to develop, which is the argument in [[educational-measurement|educational measurement]] and the starting point of [[ai-ed-evaluation|AI ed evaluation]].

The corpus supports two claims at once, and holding both is the discipline this page asks for. A World Bank synthesis, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], pooled 14 randomized studies across ten economies and estimated a positive average learning effect of 0.125 standard deviations for adaptive and AI-enabled educational technology. It also combined earlier [[adaptive-learning|adaptive systems]] with [[generative-ai|generative AI]] tools, found no statistically established advantage for the newer generative tools, and acknowledged considerable uncertainty in that comparison. The result supports the potential of these interventions, not a claim that any [[conversational-ai|chatbot]] will improve learning. A positive average, in other words, is compatible with a great deal of variation and with no demonstrated edge for the thing you are actually considering.

The more useful studies are the ones that vary the design inside a single experiment. [[genai-feedback-design-multisite-experiment|A multisite randomized study]] with 1,176 first-year undergraduates compared [[peer-assessment|peer feedback]], direct AI feedback, self-evaluation followed by AI feedback, and a hybrid sequence of self-evaluation, peer feedback, and AI critique. The reflective and hybrid conditions produced stronger [[transfer-of-learning|delayed AI-free transfer]] than direct AI feedback: students did better on a new scientific argumentation task, not only on the essay they were revising. Those conditions also demanded more evaluative work and probably more time, so the study supports the complete feedback design rather than one component in it.

## Check whether the gain survives the tool being taken away

This is the most informative check available to you, and it is easy to leave out of a pilot.

The clearest caution in the corpus is a randomized field experiment with nearly 1,000 high school students, [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]. A general-purpose-style interface raised assisted practice scores by 48% relative to control, and the same students then scored 17% lower on unassisted exams. A tutor configured with teacher-designed guidance and hints largely avoided that penalty. It did not produce a statistically significant improvement in unassisted exam performance over the control group. Avoiding harm and demonstrating additional learning are different achievements.

At national scale the same split shows up with a lag. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] followed 26,811 Chinese secondary students in grades 7-12 over 30 months using staggered adoption. Homework scores rose 18% and completion time fell 30%, from 64 to 45 minutes. Closed-book monthly exam scores fell 20% within six months, and high-stakes entrance-exam scores fell 18-24% of baseline, but only after about two years. The losses concentrated among the roughly 81% of users whose behavior indicated homework outsourcing, while students who kept homework time comparable to non-users learned about as efficiently. Two things follow for your course: the divergence between homework and exam performance is the [[learning-gains|performance-learning gap]] in a national cohort, and the two-year lag means a one-semester evaluation will systematically underestimate the cost.

Computing education shows the same structure. The [[kumar-genai-computing-education-systematic-review-2026|systematic review of 72 studies]] found generative AI reliably raised short-term completion and reduced time on task in 36 studies, with not a single study in the corpus documenting a negative effect on immediate performance, and those gains "do not transfer to independent performance" in 21 studies. Codex-assisted students completed twice as many tasks during learning and performed no better than controls on post-tests without AI.

Then there is the question of whether students use the help at all. A two-year randomized school experiment across 18 middle schools, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], found modest [[math-education|mathematics]] achievement gains, and students rarely engaged in substantive tutoring conversations. The authors noted that the gains resembled the gains reported for structured practice without AI, and the design combined individualized practice with [[intelligent-tutoring|AI tutoring]], so it did not isolate the AI component's contribution. A capable tutor being available is a different fact from students using it productively.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] adds a sharper lesson from more than 6,000 middle school students using NUMI. AI support improved recovery after mistakes and slowed progress through questions. A three-correct-in-a-row mastery rule raised platform-defined success without, by itself, improving learning one week later. The strongest delayed-learning signal appeared when AI was embedded in the mastery workflow, and those gains were marginally statistically significant and concentrated on particular practiced material. That is suggestive evidence for a structured approach, not a proven recipe.

## Build the activity so the student does the thinking that matters

[[learning-design|Instructional design]] matters more than which model you run. The design that survives these results has four turns: an attempt, help aimed at the difficulty, something the student does with the help, and a new application with the support withdrawn.

**1.** Ask for an initial attempt, prediction, draft, explanation, or interpretation.

**2.** Offer targeted assistance: a hint, an explanation, a contrasting example, or focused feedback on the point where they stalled.

**3.** Require a response to the assistance. They explain it, revise with it, verify it, or justify accepting and rejecting it.

**4.** Check a comparable problem or a different context with the support withdrawn.

That is an instructional starting point rather than a validated sequence, and the right amount and timing of support depends on the students and the task. It reflects what the [[scaffolding]] and [[active-learning|active learning]] syntheses emphasize: support that helps learners understand, practice, evaluate, and eventually perform with less of it.

Apply the principle to the objective, not mechanically to every feature. "Scaffold, do not substitute" is a good rule with a trap inside it. A complete worked example can be something students learn from, and a sequence of hints can still become something they click through without thinking. What matters is what the learner does with the assistance, which is why [[cognitive-offloading|cognitive offloading]] and [[help-seeking]] sit at opposite ends of what the same tool can produce.

The counterexample is worth keeping in view, because it stops you from turning effort into a proxy for learning. In the preregistered experiments reported in [[coach-not-crutch-ai-writing|Coach not crutch]], adults who practiced revising cover letters with AI produced better no-AI writing afterward than those who practiced alone, and they expended less effort doing it. Benefits persisted at a one-day follow-up, and a second experiment found that viewing an AI-revised example produced comparable benefits to practicing with the tool. Those were brief, bounded writing tasks, not evidence of lasting improvement across all writing. They do show that less effort is not automatically less learning, and that the goal is to preserve the learning activity, not to maximize difficulty.

## Make the retained thinking visible in what you grade

How students use the tool matters more than whether they have it. In [[yan-cognitive-outsourcing-genai-assessments-2026|a qualitative study of 38 undergraduates]] in unsupervised essay assessments, engagement ran from [[cognitive-offloading|cognitive outsourcing]] to cognitive reallocation, the shift of effort from low-level retrieval to [[critical-thinking|critical evaluation]]. Most students, 31 of the 38, intended to use generative AI as a learning assistant. In practice 76.32% relied on single-turn ask, get answer, stop dialogue, and 78.94% used the tool before or after drafting rather than through the task. Only 8 students worked as cognitive partners through sustained, iterative dialogue. That spectrum, from outsourcing to reallocation, is what [[student-ai-interaction|student-AI interaction]] describes. One participant described the effect as "the speed at which you forget it is also very fast."

The [[pedagogy|pedagogical]] lesson is that blanket permissions and blanket prohibitions both leave students guessing. What changed behavior, in that study's account, was task-specific guidance about which cognitive work students had to retain and which assistance was appropriate, the design direction developed in [[reduce-ai-cheating]] and [[reducing-ai-misuse]].

So make the retained thinking an artifact you can grade. In mathematics, ask for the attempted solution before help is requested, then have students use a prompt like "identify the first step I should reconsider, give me one useful hint, and ask me to try again", and require a new solution plus an explanation rather than a reproduction of the AI's answer. In writing, have students assess their draft against the rubric before requesting critique, then explain which suggestions they accepted, modified, or rejected. If argument construction is the objective, AI prose cannot stand in for evidence that the student can build an argument. If evaluating alternative revisions is the objective, comparing complete examples is appropriate. The [[writing-education|writing education]] and [[feedback-literacy|feedback literacy]] pages carry the detail.

The review's design requirement is the same move at course level: verification, meaning reading, testing, modifying, explaining, and critiquing AI output, made a graded and observable component rather than an aspiration left to student discretion. And not every legitimate outcome has to be demonstrated without AI. A course may deliberately teach effective AI-supported work, in which case you assess the student's ability to select, verify, revise, and defend their use of the tool alongside whatever independent foundations the discipline requires. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] proposes that three-way distinction between independent capability, AI-augmented performance, and verification responsibility. It is a conceptual framework, not a validated instrument.

## Check who the tool helps and who it quietly drops

An average improvement can conceal students who gained nothing or hit a new barrier. The [[digital-divide|digital divide]] synthesis separates access to a tool from the skill needed to use it and from who ends up with a useful result, and all three matter for a course.

[[prior-knowledge|Prior knowledge]] moderates everything in the computing review: well-prepared students convert assistance into durable skill, while under-prepared students risk using it as a crutch that removes the practice they need. The national cohort study shows the same concentration in its own way, with the learning losses sitting in the 81% whose homework behavior indicated outsourcing.

For a classroom evaluation, break results out by prior knowledge, language needs, and accessibility requirements rather than reporting a course mean. Teaching students how to obtain and evaluate useful feedback is part of [[ai-literacy|AI literacy]], and it does not arrive with the license. When you assess independent learning, remove the assistance that supplies the target thinking and leave the accommodations that provide access to the task, which is the distinction [[accessibility]] and [[equity-in-ai-education|equity in AI education]] both depend on.

Inspect the feedback students actually receive, too. A fluent response can misdiagnose the difficulty, reinforce an error, or hand over an answer where a different kind of support was needed. Use course-aligned materials, keep a route to human help, and collect no more student information than the activity requires. [[ai-feedback-quality|AI feedback quality]], [[pedagogical-safety|pedagogical safety]], and [[privacy]] cover the specifics.

## Do not trust the dashboard, including your own

Platform metrics are the easiest evidence to carry into a procurement decision, and the easiest to overread. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|an evaluation of eight AI teaching agents]] in [[medical-education|medical education]], rankings by the platform's own score diverged from an expert-validated teaching-quality rubric. The agent ranked third by the platform ranked last on rubric quality, because the platform score tracked student performance during the interaction rather than the agent's teaching behavior. A built-in metric is a hypothesis to validate.

The same skepticism applies to the evidence you generate yourself. A satisfaction survey measures satisfaction, and perceived learning is a [[self-report-measures|self-report measure]] that the corpus documents drifting a long way from measured learning. Assignment grades measure the assignment. Neither tells you what a student can do in three weeks with the tool closed, and [[evaluating-ai-interventions-methods]] sets out the comparison designs that get you closer.

## What instructors get wrong about this

**"Higher grades on the assignment mean they learned more."** The two can move in opposite directions. The guardrails experiment raised assisted practice by 48% while unassisted exams fell 17%, and the national cohort saw homework scores rise 18% while closed-book exam scores fell 20% within six months. Neither pattern would show up in a gradebook that records only the final submission.

**"It is a tutor, so it is safe."** Tutor is a label, and the results behind the label are mixed. The teacher-configured tutor avoided the exam penalty and did not beat the control on unassisted exams. Khanmigo produced modest gains that resembled structured practice, with little substantive tutoring taking place. NUMI's AI slowed progress through questions. A tutor can withhold solutions and still absorb the practice.

**"If it feels easier, it is not teaching them anything."** Wrong in both directions, which is why effort is a bad proxy. Coach not crutch found less effort with better no-AI writing a day later, so ease is not the tell. What separates the cases is whether the student did the thinking the objective names, and that is a design question rather than a difficulty setting.

**"A blanket rule, or a better prompt, fixes how they use it."** The 38-student study found most students in single-turn ask-and-stop mode under exactly the conditions where they had been told AI was a learning assistant. What moved behavior was guidance specific to the task and a graded requirement to verify. A policy line and a clever prompt are both inputs to that, and neither substitutes for it.

**"The platform score, or the satisfaction survey, tells me it works."** The eight-agent evaluation found a platform ranking that reversed under an expert rubric. Satisfaction and perceived learning are self-reports. Both are worth collecting as process information, and neither is a learning measure.

**"Access is the equity problem, and we have solved access."** Access is one of three lines, alongside skill and who gets a useful result. Prior knowledge decides whether help becomes skill or a crutch, and the losses in the national cohort concentrated in the group whose behavior suggested substitution rather than in the group without devices.

## What will come back at you

**"My students say it helps."** It probably does help with the work in front of them, and that is the finding, not a refutation of it. Ask what they can do on a similar task with the tool closed, and you get the answer that matters.

**"The studies contradict each other, so why act on any of them?"** They rarely contradict once you line up the outcome each one measured. The positive results tend to measure assisted performance, satisfaction, or a well-structured activity with delayed checks; the negative ones measure unassisted performance later. The Burneo synthesis makes the uncertainty explicit: 0.125 standard deviations on average across 14 trials, no established advantage for the newer generative tools. A before-and-after improvement cannot show that AI caused the gain, since students improve through the rest of the [[teacher-role|teaching]], and [[research-methods-aied|efficacy research methods]] sets out the comparison designs that get you closer. Act on the design claims, which replicate, and stay open on the size of the effect, which does not.

**"I have 200 students. I cannot run delayed assessments."** You need one short baseline task and one delayed item, not a study. Use the same task type three weeks later without the tool, keep the previous year's version of the exam as a rough comparison, and sample the work that looks inconsistent with earlier submissions. That is enough to see a 48% assisted gain alongside a 17% unassisted loss if it is happening in your course.

**"Khanmigo got a positive result, so tutoring works."** It got modest mathematics gains across 18 middle schools, in a design that bundled individualized practice with AI tutoring, while students rarely held substantive tutoring conversations. Read it as evidence that a well-structured practice environment can produce small gains, not as evidence that the AI component caused them.

**"I cannot ban it and I cannot police it."** Correct on both counts, and neither is required. The design question is what your activity makes easy. If verification is graded, disclosure costs nothing, and the unaided check exists, most students take the path you built.

**"I do not teach AI. This is not my subject."** The interference happens inside your subject, at the step where AI performs the practice your course exists to provide. That is why the fix is an assignment change rather than a new unit.

## What to do this week

**1.** Take one activity you already run and write the capability sentence: what a student should be able to do afterward, with the tool closed.

**2.** Add a two-minute baseline at the start and the same kind of item three weeks later. Score both without AI in the room.

**3.** Change one prompt you give students from "explain this" to "give me one hint, then ask me a question", and require a revised attempt before they move on.

**4.** Add one graded verification artifact: a short note on what they checked, what they rejected, and what they changed.

**5.** Break the result out by prior knowledge for the students you already know are struggling, and read the AI feedback a sample of them received.

## Where to go next

[[evaluating-ai-interventions-methods]] covers the measures and comparison designs behind the checks above, and [[ai-ed-evaluation]] is the practical evaluation guide. [[how-ai-impacts-students]] takes the student-experience side, [[top-10-findings-ai-education-instructors]] compresses the same evidence into instructor decisions, and [[limitations-in-aied-research]] is the honest account of what this literature cannot yet tell you. If your question has become an assessment question, [[reduce-ai-cheating]] is the next page.
