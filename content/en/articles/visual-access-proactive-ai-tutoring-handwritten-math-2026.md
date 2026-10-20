---
title: Exploring Visual Access and Proactive AI Tutoring for Handwritten Mathematics
created: "2026-10-20T09:20:00-04:00"
updated: "2026-10-20T09:20:00-04:00"
type: article
sources: ['raw/papers/visual-access-proactive-ai-tutoring-handwritten-math-2026.md']
confidence: high
published: 2026-10-19
page_kind: [evaluation]
research_method: [experiment, user study]
discipline: [math education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, educational technology developers, instructional designers]
pedagogy: [scaffolding, student-ai-interaction, help-seeking]
technology: [intelligent-tutoring, multimodal, adaptive-learning, conversational-ai, llm, visualization, human-in-the-loop-ai]
assessment: [feedback, formative-assessment, self-report-measures]
methods: [rct]
foundations: [human-ai-collaboration]
ethics: [accessibility, privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-20"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Kotalwar and colleagues (2026) built a paper-and-phone [[multimodal]] tutoring platform in which a supported phone camera gives an [[llm]] tutor a live view of learners' handwritten calculus work, then ran a [[rct|randomized]] online study with 117 adults across three assistance conditions. Text-Reactive saw only what learners typed; Visual-Reactive also received the current paper view with each request; Visual-Proactive could additionally observe the work between requests and initiate help. Comparing 2,140 tutor messages, the authors found that visual access shifted the tutor toward checking work already written, while proactivity added error identification and directive hints. Learners in every condition improved significantly from pre-test to post-test, and adjusted post-test scores did not differ detectably between conditions. Recipients rated proactive help as supportive rather than intrusive, and about a third wanted it more often. The study speaks to [[intelligent-tutoring]], [[help-seeking]], [[feedback]], and [[human-ai-collaboration]], and it argues that a tutor with a view of ordinary paper can preserve the affordances of handwriting while supplying [[adaptive-learning|adaptive]] step-level support to learners with varied [[prior-knowledge]].

## Key Findings

1. Visual access changed what the tutor said: correctness feedback on existing work rose from 40% of tutor messages under Text-Reactive to 63% under Visual-Reactive and 69% under Visual-Proactive, while elicitation fell from 8% to under 3%.
2. Proactivity added repair rather than changing requests: error identification appeared in 41% of a Visual-Proactive participant's tutor messages versus 20% under Text-Reactive and 22% under Visual-Reactive, and directive hints in 54% versus 39% and 35%.
3. The proactive tutor acted rarely: across 40 Visual-Proactive participants it completed 5,047 paper analyses, chose to wait after 96% of them, and delivered 167 proactive messages to 32 participants, 157 of which repaired a visible error.
4. Learning improved in every condition: the whole sample rose from 3.3 to 4.6 of nine (paired t(116) = 6.85, p < .001, d = 0.63), and adjusted post-test scores did not differ detectably between conditions.
5. An exploratory trend favored proactive tutoring for learners with low prior knowledge: at a pre-test score of one, Visual-Proactive exceeded Visual-Reactive by 1.08 points, but the study was not powered to confirm the interaction.
6. Learners valued feedback grounded in their writing: both visual conditions rated useful help without restating their steps more highly (5.57 and 5.15 versus 4.21), and proactive recipients rated the help supportive (5.53) rather than interrupting (2.45).
7. The paper-and-phone setup was the main barrier: 74 people declined after seeing the requirements, and 52 of the 169 who entered exited during camera setup, most citing connection (25) or stability (19) problems.

## Seeing the work changes what the tutor says

A chat-based [[conversational-ai|tutor]] learns about a learner's work only through what the learner types. Giving the tutor a live paper view removes that step: on the boat-and-rope problem, a Visual-Reactive participant asked "am I right so far?" and the tutor confirmed the triangle, the constraint, and the negative rope rate already on the page, none of which had been typed. The page appears to have served as common ground, anchoring what was said and showing the state of the task. The tutor's own requests that learners communicate their work or reasoning fell to under 3% of its messages, and learners' requests leaned toward verification rather than procedural guidance. [[intelligent-tutoring|Step-level tutoring]] has long required learners to enter work through a structured interface; this platform instead reads ordinary paper. The shift matters for [[scaffolding]] and [[formative-assessment]], because a tutor that can see the current step can check it without being asked, and the page view substitutes for the typed turns that [[student-ai-interaction]] otherwise depends on.

## What proactivity added

Permission to initiate help did not change what learners asked for; it changed what arrived. Error diagnosis was among the rarest request purposes in every condition, so the proactive tutor's error identification was its own contribution, rising to 41% of a participant's tutor messages. The design was deliberately conservative. The tutor received the latest paper view at intervals, chose one of three actions — repair a clear error, support a stalled transition, or wait — and waited 96% of the time, on the principle that a pause alone is not evidence that a learner is stuck. Nearly every delivered message repaired a visible error; transition support fired only 10 times, so it is effectively unevaluated here. Only about four proactive messages reached each learner, and eight of the 40 participants received none. That restraint is likely why initiative was welcomed rather than resented, and it bears on the assistance dilemma and [[productive-failure]], where help arriving too early can remove the struggle that produces learning.

## Learning and learner experience

Every condition improved, and none improved detectably more than another; the added visual access and initiative changed the character of the assistance, not the measured gains. Whether learners acted on any given message was not measured, so the study characterizes assistance offered rather than uptake. The exploratory picture was more suggestive: the fitted lines crossed, and proactive tutoring looked better for learners who entered with low prior knowledge — a pattern the authors report as a hypothesis for a larger study rather than a finding. Learners' accounts explain why the view was valued: 21 of the 77 who had a paper view said checking reassured them, against 3 of the 40 in Text-Reactive. A recurring wish, expressed by 20 participants, was for the tutor to step in without being asked, yet 27 wanted fuller explanations and 16 still wanted to work each step themselves. Their accounts resist any single setting for proactivity: learners wanted errors flagged unprompted while keeping the next step for themselves.

## Everyday devices and a released dataset

The hardware is deliberately ordinary — a learner's own laptop and phone, with no app installation and no tablet — so a population that mostly preferred paper could keep writing where it already writes. That lowers the barrier to visual tutoring, but the remote study also exposed the cost of establishing a readable view, which consumed 52 of 169 entrants before any tutoring began and may exclude learners with different [[accessibility]] needs. Cloud inference averaged US\$1.93 per session, and sending written work to a third party raises unresolved [[privacy]] questions; locally run models specialized for handwritten mathematics could reduce both cost and exposure. The authors release the platform, tutoring prompts, instruments, and a dataset of 255,984 timestamped images of handwritten work spanning 66.7 hours of assisted activity and 699 problem trajectories, plus a [[visualization|dashboard]] sample of 10 participants, in the [project repository](https://github.com/nachiketdk/proactive-ai-tutoring). Replaying the same written work to tutors with and without visual access is what makes the comparison reproducible.

## What this means for practice

- **Instructors.** Treat a visible paper view as an invitation to confirm work rather than to demand it: with a view, correctness feedback rose to 63–69% of tutor messages and requests that learners show their work fell below 3%, so stop asking learners to retype steps a camera already captures.
- **Instructors.** Keep proactive help on a repair-first footing: the tutor waited after 96% of 5,047 paper analyses and sent about 4.2 messages per learner, and recipients rated that help supportive (5.53) rather than interrupting (2.45).
- **Educational technology developers.** Budget for the setup, not only the tutoring: 52 of 169 entrants exited during camera setup, over connection (25) or stability (19) problems, so a stand or guided calibration is a functional requirement rather than an accessory.
- **Researchers.** Do not report a preference for proactivity as a learning effect: scores rose from 3.3 to 4.6 of nine with no detected difference between conditions, and the low-prior-knowledge advantage of 1.08 points was explicitly exploratory.
- **Instructional designers.** Separate the timing, focus, and depth of proactive help, since learners wanted errors flagged unprompted while keeping the next step for themselves, and treat any reference-solution check as [[human-in-the-loop-ai]] work rather than as ground truth.

## Limitations

- The 117 adults were recruited on Prolific and worked on their own devices in their own spaces; 52 of the 169 who entered exited during camera setup, so every finding describes people who established a readable paper view.
- The study used one 35-minute assisted activity and immediate pre- and post-tests, capturing a first encounter; because every condition included tutoring, the gains include the effect of practice and cannot isolate the tutor's contribution.
- One model (GPT-5.6 Sol) was tested with one tutoring and initiative policy: the proactive policy as delivered was almost entirely error repair (157 of the delivered messages) and transition support fired only 10 times.
- The experience measures are self-report ratings collected immediately after the session from learners who had been told beforehand what their tutor could do, which may shape them ([[self-report-measures]]).
- The help-seeking purposes and tutor moves were labeled by a model validated against three human annotators, so not every message was labeled by people, and the thematic analysis was carried out by one researcher.
- Roughly 330 participants would have been needed for 80% power to detect a prior-knowledge interaction of the size observed, so the exploratory trend for proactive tutoring remains unresolved.

## Citation
Kotalwar, N., Borchers, C., Gandhi, S., Purkayastha, P. S., Yaron, D., & Rose, C. P. (2026). [Exploring Visual Access and Proactive AI Tutoring for Handwritten Mathematics](https://arxiv.org/abs/2610.26411). arXiv:2610.26411.
