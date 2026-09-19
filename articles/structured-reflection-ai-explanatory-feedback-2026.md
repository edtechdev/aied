---
title: "Benefit or Bottleneck? Assessing the Impact of Structured Reflection on Learning from AI-Driven Explanatory Feedback"
created: "2026-09-18T13:40:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
assessment: [feedback, formative-assessment, ai-feedback-quality]
pedagogy: [metacognition, self-regulated-learning, desirable-difficulties]
foundations: [cognitive-offloading]
technology: [generative-ai, llm, intelligent-tutoring]
methods: [quantitative-research]
research_method: [experiment, quantitative]
level: [higher ed]
audience: [educators, researchers, learning designers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/structured-reflection-ai-explanatory-feedback-2026.md']
confidence: high
---

> **Synthesis:** Asher, Gold and Carvalho asked whether adding structured reflection to [[generative-ai|AI-generated]] explanatory [[feedback]] helps learning or only adds friction. In a preregistered between-subjects experiment, 302 US adults on Prolific learned introductory Python in one of three arms: a Crash Course video, Practice with personalized feedback from Claude Sonnet 3.5, or Reflective Practice that paired identical feedback with self-explanation prompts. Reflection lost on every measure. It roughly doubled time spent on feedback (4.1 vs 2.1 minutes, t(267) = 11.30, p < .001) and cut practice volume by 40% (2.0 vs 3.4 problems, t(267) = 8.20, p < .001), while each problem yielded the same learning gain with or without reflection (Reflection × problem number OR = 1.03, z = 0.23, p = .486). Practice participants therefore ended the session with higher mastery, 79% versus 65% (d = .41, p < .001), and kept a small non-significant lead on transfer, 5 percentage points on near transfer (d = .18, p = .070). Both practice arms still beat the video baseline by d = .66 to .93 (all ps < .001). The scaffolding reflection was meant to provide for novices never materialised; where individual differences emerged, they favored more practice for moderately knowledgeable learners. The takeaway: when AI feedback is already elaborated and personalized, self-explanation prompts may be a redundant time sink.


The study was preregistered and its materials are public: the preregistration is at [osf.io/xe3vj](https://osf.io/xe3vj) and the data and analysis code at [osf.io/2gqvm](https://osf.io/2gqvm).

## Key Findings

1. **Three arms, 302 participants, preregistered.** The between-subjects online experiment (Qualtrics, CMU IRB, preregistered at osf.io/xe3vj) randomized participants to Video (n = 31), Practice with AI feedback (n = 134) or Reflective Practice (n = 131); 17 further participants were excluded after a keystroke-based check flagged [[generative-ai]] use. Mean age was 40.6 years (SD = 11.6), 55% identified as women, and the session lasted about 30 minutes for $6.00.
2. **Reflection doubled feedback time and cut practice volume 40%.** Reflective Practice participants spent 4.1 minutes reviewing feedback and writing reflections against 2.1 minutes in Practice (t(267) = 11.30, p < .001), leaving only 3.9 of the 8 training minutes for problems. They completed 2.0 problems on average against 3.4 in Practice, a 70% difference (t(267) = 8.20, p < .001), with the loss most pronounced for participants who entered with more [[prior-knowledge|prior programming knowledge]] (b = −.89, t(267) = −3.47, p < .001).
3. **Each learning opportunity was equally effective either way.** In the beta-binomial mixed-effects model, every additional practice opportunity raised the odds of earning each point by more than three times (OR = 3.10, z = 13.65, p < .001), but the Reflection × problem-number interaction was null (OR = 1.03, z = 0.23, p = .486). Reflection made no individual feedback episode more valuable.
4. **Higher practice volume produced higher end-of-session mastery.** On their final submitted problem, Practice participants averaged 60% against 45% for Reflective Practice (d = .41, t(267) = −4.09, p < .001), an advantage not moderated by baseline knowledge (b = .03, t(267) = 0.71, p = .481). Extrapolating one problem forward through the learning model gave estimated mastery after feedback of 79% versus 65%, a 14-percentage-point gap.
5. **The gap narrowed on transfer but reflection never pulled ahead.** Practice's lead fell to 5 points on near-transfer code writing (d = .18, z = −1.81, p = .070), 3 points on far transfer (d = .15, z = −1.09, p = .278) and 3 points on [[evaluative-judgment|code evaluation]] in Practice's favor (d = .10, z = −0.84, p = .401). Practice participants dropped 16 points from their mastery estimate to the near-transfer item (79% → 63%); Reflective Practice dropped only 7 points (65% → 58%).
6. **Active practice with AI feedback clearly beat passive video.** The Practice vs. Video contrast was significant on all three outcome types, by d = .91 on near transfer, d = .66 on far transfer and d = .93 on code evaluation (all ps < .001), even though the Control video was a professionally produced Crash Course excerpt with over one million views.
7. **The predicted scaffolding benefit for novices did not appear.** There was no baseline-knowledge × Reflection interaction on near transfer (p = .877) or code evaluation (b = −.09, z = −0.55, p = .580). The one significant interaction, on far transfer (b = −.40, z = 2.62, p = .009), was driven by participants with moderate prior knowledge benefiting from completing more practice problems in the Practice condition; complete novices performed similarly across conditions.
8. **Metacognitive benefits tracked practice, not reflection, and judgments of learning did not discriminate.** Judgments of learning were similar across all three conditions (all ps > .409). Video participants predicted scores 20 percentage points above their actual result, while both practice conditions were underconfident by 11 points (d = −.93, t(296) = −5.06, p < .001). Practice conditions also reported significantly less distraction (d = −.80, t(296) = −4.21, p < .001), an effect strongest for those with lower baseline confidence (b = .51, t(296) = 3.12, p = .002), with Reflective Practice only slightly less distracted than Practice (d = −.22, p = .073).

## How the experiment was designed

The lesson covered three introductory Python objectives: assigning values to variables (numbers and strings), writing `if` statements with comparison operators, and writing `if/else` statements. Practice and Reflective Practice participants had 8 minutes to complete up to 10 short-answer coding problems, all isomorphic in their three-step structure (create and assign a variable, check a condition with an `if` and assign a second variable, else assign an alternative) but varied in surface scenario — hiking safety, movie ticket prices, game levels.

Feedback was generated live by Claude Sonnet 3.5 through a prompt that returned raw JSON with `is_correct`, `feedback_html` and `corrected_code` fields, following a procedure from Asher and Carvalho. Each message identified whether the answer was correct, explained the correct solution and described the underlying concepts in beginner-facing terms. The Reflective Practice condition then split the participant's code into three sections — variable assignment, `if` statement, `else` statement — and, for a correct section, asked "what does this code do?"; for an incorrect section it showed the participant's code beside the correct solution and asked (1) "What does the correct code do?" and (2) "Why was your code incorrect?" Reflections averaged only 35 words. The Video arm watched a 4.8-minute Crash Course excerpt on statements and functions as a high-quality passive baseline.

Outcome measures were split between [[self-report-measures|self-report]] and performance. Baseline confidence in programming used 3 items (α = .93, M = 1.9, SD = 1.0); session interest 5 items (α = .94); interest in programming 4 items (α = .95); distraction 2 items (α = .83); and a single judgment-of-learning item, with calibration computed as actual minus predicted performance. No pretest was administered, to avoid injecting [[active-learning|active learning]] into the Video arm, so a participant's score on their first practice problem served as the baseline knowledge measure (M = 24%, SD = 29%). Performance was scored with partial credit — 1 point for partial, 2 for full credit on each objective — as a percent out of 6 on practice problems and the near-transfer and first evaluation items, out of 10 on the far-transfer item and out of 8 on the second evaluation item. The posttest held four items: one near-transfer code-writing problem with high-level instructions, one far-transfer problem requiring two `if/else` statements for a climate-control system, and two code-evaluation tasks. Analyses used regression with planned orthogonal contrasts for self-report outcomes and beta-binomial logistic mixed-effects models for bounded performance scores, with learning rates estimated over opportunities 1 to 5 because only one Reflective Practice participant completed more than five problems.

## What the results showed

The time cost was the clearest finding: reflection converted scarce practice minutes into writing, and the conversion was unproductive. Mastery estimates rose to 79% for Practice against 65% for Reflective Practice because those participants had simply completed more cycles of attempt, targeted explanation and corrected attempt. On the transfer-heavy posttest the advantage shrank and never reversed — near transfer 5 points (p = .070), far transfer 3 points (p = .278), code evaluation 3 points favoring Practice (p = .401). The narrowing itself is informative: mastery built on a set of isomorphic problems transferred only partially, and the reflection condition's gentler decline (7 points versus 16) reflects a lower starting ceiling rather than a deeper understanding.

Overconfidence, a classic problem in [[self-regulated-learning]], was reduced by practice but not by reflection. Practicing with feedback gave learners ongoing evidence about their own knowledge state, so they calibrated slightly underconfident, while video watchers who performed nearly a full standard deviation worse felt equally well prepared. Practice also cut distraction relative to video, an effect concentrated among learners who began with less confidence, and it cost nothing in interest: session interest and interest in programming showed no reliable condition differences (ps > .25 and ps > .38 respectively). Reflective Practice trended slightly more engaging than Practice (d = .19) without statistical support (p = .103), and slightly less distracting (p = .073).

## Why reflection appears to have backfired

The authors offer four mechanism accounts. First, the AI feedback may already have supplied the [[scaffolding]] that self-explanation normally provides: most self-explanation research compares sparse correct/incorrect feedback against that same feedback augmented with explanation prompts, whereas here every message already named the error, explained the correct approach and described the underlying concept, which may make reflection redundant. Second, writing reflections while still learning unfamiliar syntax imposed a dual demand — learning to code and articulating understanding simultaneously — that may have offset any cognitive load reduction the prompts were designed to achieve. Third, the cumulative value of varied practice repetition may simply exceed the value of processing one instance more deeply: each new problem gave another application, another failure to resolve and another concrete example for developing schemas, consistent with accounts that emphasize variability and multiple retrieval opportunities for building transferable knowledge. Fourth, reflection did not strengthen the very skill it targeted — code evaluation — because extra exposure to correct and incorrect code through more problems was apparently sufficient.

The theoretical case for reflection was not weak going in: the [[icap-framework]] predicts that constructive activity beats passive reading, and the self-explanation literature has repeatedly shown benefits. What the study falsifies is the assumption that those benefits survive contact with already-rich feedback in a time-constrained session.

## Where this sits in the effort and feedback literature

The result sits awkwardly but productively against work on [[desirable-difficulties]] and [[productive-failure]], which hold that effortful processing improves retention and transfer. Here the effort was real — reflection doubled time on task — but produced no measurable return, which locates a boundary condition: difficulty is desirable when it drives additional retrieval, application or comparison, and redundant when the learner is already receiving a personalized explanation of their specific error. It also connects to the [[intelligent-tutoring]] and [[formative-assessment]] literatures on [[ai-feedback-quality]]: the more elaborated, targeted and timely the feedback, the narrower the space for an added reflective layer to add value, and the more design attention should shift to practice volume, scheduling and problem variability. The authors frame the study within practice-centered instruction, and their training condition replicates prior findings that practice with feedback can beat lecture while improving [[metacognition|metacognitive]] calibration and [[transfer-of-learning|transfer]] without losing [[motivation]]. The study also speaks directly to debates about [[cognitive-offloading]]: if learners outsource reasoning to an AI tutor, adding written reflection on top of its explanations did not convert fluent explanation into durable skill, which sharpens rather than settles the question of when AI support displaces the thinking it is meant to develop.

## What this means for practice

- **Instructors.** Keep the elaborated AI feedback and drop the add-on self-explanation prompts. Reflection doubled feedback time (4.1 vs 2.1 minutes) and cut problems completed from 3.4 to 2.0 without making any single feedback episode more valuable (Reflection × problem number OR = 1.03, p = .486).
- **Instructors.** Protect practice volume inside a fixed session. Reflective Practice participants had 3.9 of the 8 training minutes left for problems, and each additional problem more than tripled the odds of earning each point (OR = 3.10), which ended the session at 79% mastery against 65%.
- **Designers.** Vary the practice items rather than repeating isomorphic ones. The volume advantage faded on transfer (5 points on near transfer, p = .070), which the authors attribute to problems that were deliberately isomorphic in structure.
- **Designers.** Use practice with feedback to improve [[self-regulated-learning|calibration]] instead of layering on metacognitive prompts: the practice conditions ended slightly underconfident by 11 points while video watchers overpredicted their own scores by 20 points.
- **Researchers.** Test less frequent, strategically timed reflection before generalizing the null result. The authors propose prompting reflection when a system detects a learner plateauing, a variant this single 8-minute session did not test.

## Limitations
The study is a single 8-minute session on [[cs-education|introductory programming]] with Prolific adults, so reflection may still pay off over longer timescales, with more complex material, or in domains where conceptual relationships matter more than procedural fluency. The authors also suggest less frequent, strategically timed reflection — for instance when an intelligent tutoring system detects a learner plateauing — as an untested variant. The practice problems were deliberately isomorphic, which likely explains why the mastery advantage from volume faded on transfer; less isomorphic practice that varies setup and solution approach is a proposed remedy. Only one possible enhancement to explanatory feedback was tested, leaving step-by-step problems, upfront worked examples and feedback that adapts explanation complexity to demonstrated understanding as open alternatives. Finally, the point of diminishing returns for practice volume is unknown: for novice learners on introductory content, the data favor 3 to 4 problems in 8 minutes over fewer problems with extended reflection, but the optimal balance should depend on problem difficulty, learner expertise, feedback quality and learning objectives.

## Connected Concepts

- [[feedback]] — explanatory, personalized feedback as the treatment variable shared by both practice conditions
- [[ai-feedback-quality]] — elaborated LLM feedback as the condition under which reflection became redundant
- [[metacognition]] — judgments of learning and calibration accuracy measured across conditions
- [[self-regulated-learning]] — practice with feedback as calibration support for self-directed study
- [[desirable-difficulties]] — the boundary condition where added effort yields no learning return
- [[cognitive-offloading]] — the theorized load reduction that reflection failed to deliver for novices
- [[generative-ai]] — Claude Sonnet 3.5 generating per-attempt explanations at scale
- [[intelligent-tutoring]] — the practice-centered, deliberate-practice systems this experiment targets
- [[prior-knowledge]] — baseline programming knowledge as the moderator of reflection and practice effects
- [[scaffolding]] — the support reflection was meant to add on top of feedback that already scaffolded
- [[productive-failure]] — effortful problem solving before instruction as the frame for the practice conditions
- [[transfer-of-learning]] — near- and far-transfer items as the test of whether volume or depth generalizes

## Connected Articles

- [[llm-automated-assessment-student-self-explanations]] — Automated assessment of student self-explanations in programming education
- [[llm-adaptive-programming-error-explanations-2026]] — Adaptive explanations of programming errors generated by an [[llm]]
- [[llm-diverse-explanations-programming]] — Diverse LLM explanations in introductory programming
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive scaffolding for cognitive engagement in an intelligent tutoring system
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human–AI interaction
- [[brcic-effortless-trap-productive-struggle-2026]] — Productive struggle and the illusion of learning with AI
- [[wang-safety-gap-productive-struggle-2026]] — Restoring productive struggle through pedagogically aligned generative AI
- [[rachatasumrit-example-problem-ratio-2026]] — Example–problem ratio and what optimizes learning gain by content type
- [[ai-generated-feedback-higher-ed]] — Effectiveness of and student perceptions of AI-generated feedback in university education
- [[5p-reflection-model-genai-2026]] — A structured reflection model for education in the generative AI era

## Citation

Asher, M. W., Gold, G., & Carvalho, P. F. (2025). [*Benefit or Bottleneck? Assessing the impact of structured reflection on learning from AI-driven explanatory feedback*](https://osf.io/preprints/psyarxiv/p3m2k_v1). *PsyArXiv Preprints* (preprint, version 1, February 2025).
