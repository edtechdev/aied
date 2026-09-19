---
title: "Teaching Students to Question the Machine: An AI Literacy Intervention Improves Students' Regulation of LLM Use in a Science Task"
created: "2026-09-17T02:58:21-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
research_method: [quasi-experiment, mixed methods]
audience: [instructors, researchers, curriculum designers]
level: [k 12, secondary]
discipline: [science education]
confidence: medium
sources: ['raw/papers/clerc-ai-literacy-workshop-llm-regulation-2026.md']
---

> **Synthesis:** Clerc and colleagues (2026) ask whether a two-hour AI literacy workshop changes how middle-school students regulate their interaction with a [[generative-ai|generative AI]] system, and measure the answer in behavior rather than in attitudes. Of 116 French students in grades 8–9 (ages 13–15) solving six LLM-supported science problems, those who had attended the workshop accepted underspecified prompts less often (51.5% vs. 66.7% of trials), asked follow-up questions far more often after a weak response (59.2% vs. 27.9%), and judged response correctness more sensitively to prompt quality (interaction OR = 2.52, p = .012). They also scored modestly higher on final answers (11.38 vs. 10.29 out of 20, p = .040). Crucially, both [[generative-ai|GenAI]] and [[metacognition|metacognitive]] self-report scores predicted neither behavior nor performance (r = .01 and r = .04), which positions the applied, regulatory dimension of [[ai-literacy]] as something that must be trained and [[assessment|assessed]] directly. The design tests short-term regulation only: the retention, transfer, and durable learning questions stay open.

## The intervention: teaching regulation rather than tool facts

The workshop was two hours and classroom-feasible by design, since the study's premise is that teacher time and training budgets are the binding constraint. It combined conceptual content — age-appropriate explanations of how LLMs generate text, why they produce incomplete or incorrect answers, and why fluent answers should not be accepted uncritically — with a practical component that deliberately avoided the later test tasks. Students instead worked in small groups on prompting activities from other domains: for each, they received a task goal and an initial prompt, predicted whether that prompt would elicit a satisfactory response, queried the model, evaluated the answer, and revised the prompt or continued the exchange when needed. The taught stance was keeping agency over prompting, response evaluation, and follow-up.

Two days later, the whole sample completed a 90-minute session of six science exercises drawn at random from a pool of twelve and presented in random order. Each exercise came with one suggested prompt, either well-specified (containing the contextual elements the problem needed) or underspecified (omitting them and likely to elicit generic answers); each student saw three of each and was not told about the manipulation. Problems were printed on paper so students could not paste the full statement into the chatbot, and each ended with a final answer written in the student's own words.

The final sample was 116 of the 162 students who began: 27 were absent from the test phase and 19 did not complete all six exercises, leaving 76 in the intervention group and 40 in the control group. Assignment was by class timetable rather than individually randomized, so the study is quasi-experimental and the groups are unequal. Students mostly used GPT-4o mini through DuckDuckAI, occasionally other public interfaces (GPT-4o, GPT-4.1-nano, GPT-3.5-turbo) when access failed. Final answers were scored on a 0–2 rubric and then validated with GPT-4o as an LLM-as-judge against human annotators, with agreement at Krippendorff's α = .752 (versus .740 human-only) for answer scoring and α = .825 (versus .763) for prompt-response annotation.

## What changed in students' behavior

All three behavioral indicators moved in the adaptive direction.

**Query-level control.** Intervention students were less likely to simply accept the suggested prompt (OR = 0.47, p = .022; average marginal effect = −.155, p = .018). Well-specified prompts were accepted more often than underspecified ones overall (OR = 1.85, p = .040), and the group difference was concentrated where it matters: on underspecified prompts, acceptance fell from 66.7% to 51.5% (OR = 0.47, p = .022), while the groups did not differ reliably on well-specified prompts (74.4% vs. 79.2%, p = .385). Trained students, in other words, were not indiscriminately skeptical; they were selectively skeptical.

**Response evaluation.** Both groups judged correctness more accurately when prompts were well specified (OR = 2.06, p = .001), but that effect was larger in the intervention group (interaction OR = 2.52, p = .012), meaning trained students' judgments tracked prompt quality more closely.

**Interaction control.** Among trials where students accepted an underspecified prompt, intervention students asked a follow-up question 59.2% of the time against 27.9% for controls (Welch t = 3.80, p < .001, d = 0.80) — the largest behavioral difference in the study. This is the recovery behavior that matters most in practice, because it is what a student does after accepting a weak prompt.

## Performance improved modestly, which is not evidence of durable learning

Final task scores were higher in the intervention group (M = 11.38, SD = 3.87, n = 76) than in the control group (M = 10.29, SD = 3.04, n = 40; Mann–Whitney U = 1871, p = .040, r<sub>z</sub> = .19, rank-biserial r = .23). The authors are explicit that this is a modest difference on a task completed two days after the workshop, and that it shows improved regulation during LLM-supported problem solving rather than durable learning. Absolute performance stayed limited in both groups at roughly 11–12 out of 20 even with a generative AI system available, while maximum scores reached 18.3/20 — so access to the tool was clearly not the binding constraint, and identifying relevant information and synthesizing an answer in one's own words remained hard.

Two further results explain where the performance advantage came from. First, signal-detection analysis found that intervention students' sensitivity to prompt specification was only numerically higher (d′ = 0.53 vs. 0.28; p = .150, d = 0.27), but across all students higher sensitivity predicted higher scores (b = 1.76, 95% CI [1.06, 2.46], p < .001), as did a more conservative response bias (b = 1.65, 95% CI [0.25, 3.05], p = .021); with both indices in the model, the direct condition effect fell away (p = .279). The interpretation is that the workshop strengthened the link between noticing a problem and acting on it, rather than improving discrimination ability as such. Second, the cost of unguided revision is visible: rejecting a well-specified prompt cost control students performance (M = −4.29) but did not cost the intervention group (M = 1.61; Welch t = 2.83, p = .009, d = 0.91). Students who rewrite a good prompt without knowing what information must be preserved can make things worse, and the workshop appears to have taught which elements to keep. Follow-up questioning, meanwhile, predicted answer quality only in the trained group (b = 6.43, 95% CI [0.36, 12.50], p = .038; roughly +5 of 20 within the group).

## Self-reports predicted nothing that mattered

Neither questionnaire explained behavior or performance. GenAI self-report scores were uncorrelated with final task scores (r = .01, p = .881, R² < .001, n = 116), and general metacognitive awareness was likewise unrelated (r = .04, p = .649, R² = .002, n = 116). No association between self-reports and the behavioral indicators survived false-discovery-rate correction (all p<sub>FDR</sub> ≥ .580). Within the intervention group, self-reports did shift slightly overall (Pillai's trace = .195, F(6,68) = 2.75, p = .019) but no individual dimension survived correction: Attitude rose by MΔ = 0.11 (p = .018, p<sub>FDR</sub> = .054) and Fairness & ethics by MΔ = 0.13 (p = .011, p<sub>FDR</sub> = .054). Baseline equivalence held (MANOVA Pillai's trace = .083, F(6,107) = 1.61, p = .151).

The authors caution that the instruments limit these null findings: the GenAI questionnaire was adapted from Bernabei et al. (24 items, 4-point scale, maximum 96) and has not been formally validated for this age group, and the Jr. MAI (18 items, 5-point scale, maximum 90) measures general metacognitive knowledge rather than LLM-specific regulation. Their conclusion is that offline self-reports appear to capture perceived competence rather than actual regulation during interaction, which is consistent with the broader finding that self-assessed digital skill tends to overestimate ability.

## Why it matters for teaching AI literacy

Three implications follow for [[k-12]] practice. A brief, classroom-feasible intervention can change observable interaction behavior at least in the short term — a two-hour workshop should not be expected to produce stable expertise, but it can install regulatory habits students begin to apply. AI literacy instruction should therefore target practical regulation and learner agency, not only conceptual knowledge about how systems work, because students who can question and evaluate explanations in ordinary contexts do not automatically do so when a fluent, confident model answers them. And AI literacy should be evaluated with behavioral measures alongside self-reports, since the self-reports in this study missed exactly the differences that showed up in behavior. The workshop's transfer claim is strengthened by its design: it never rehearsed the test tasks, so what carried over was a general regulatory stance rather than task familiarity.

The [[ai-literacy|AI literacy]] intervention literature this joins is mostly short-term and self-report-based; see [[liu-ai-literacy-interventions-meta-analysis-2026]] for the meta-analytic picture. The behavioral results also bear directly on the wiki's material on [[reducing-over-reliance]] and on teaching students to [[verify-ai-output]], both of which recommend routines that this study shows changing measurable behavior in two hours rather than a semester.

## What this means for practice

- **Instructors.** Teach the two behaviors this workshop changed rather than general AI knowledge: trained students stopped accepting underspecified prompts (51.5% vs. 66.7% for controls) and asked a follow-up question after a weak prompt 59.2% of the time versus 27.9% (d = 0.80).
- **Instructors.** Train selective skepticism, not blanket distrust: intervention students kept accepting well-specified prompts (74.4% vs. 79.2%, p = .385), while control students who rewrote a good prompt lost 4.29 points on average against 1.61 in the trained group.
- **Curriculum designers.** Budget a short, classroom-feasible session and rehearse regulation on tasks unrelated to the test: this two-hour workshop never used the assessment problems, and the trained group's advantage appeared two days later.
- **Instructors.** Evaluate AI literacy in behavior rather than attitudes, because GenAI self-report scores predicted final task scores at r = .01 and general [[metacognition]] at r = .04 — the self-reports missed exactly the difference the workshop produced.
- **Researchers.** Reuse the study's open materials (workshop slides, facilitation script, anonymized data and code) to test retention and transfer beyond the two-day window this design leaves unmeasured.

## Limitations

The design is quasi-experimental with intact classes and unequal groups, so unmeasured baseline differences such as science ability cannot be ruled out. Effects were measured two days after the workshop, with no test of retention, repeated practice, transfer to new tasks, or performance without LLM support. The study ran in one school on science problems only. Prompt acceptance is an experimental probe rather than an ecological task — students usually write prompts from scratch, so that measure is best read as evidence that they noticed missing information, whereas evaluating an answer and deciding to follow up are behaviors that remain central in ordinary use. The LLM environment was not perfectly homogeneous because access constraints pushed some students onto other interfaces, though the authors validated the prompt manipulation independently of the models used. Finally, no demographic identifiers were collected, so subgroup differences could not be tested, and the behavioral measures captured students' decisions but not the content of their prompts or follow-up questions.

## Contribution to the knowledge base

This is the wiki's clearest classroom demonstration that the applied dimension of [[ai-literacy]] is both teachable in a short time and measurable in behavior. Where most studies in the collection show that access to a model is not enough, or that students over-trust fluent output, this one tests an intervention against a control group and reports effect sizes for the specific behaviors that matter: rejecting an underspecified prompt, judging whether an answer is right, and asking again when it is not. Its most transferable finding for practice is the follow-up question rate change (27.9% to 59.2%), because that is the recovery step a student performs after a weak prompt has already been accepted. Its most useful negative finding is methodological: self-reported [[metacognition|metacognitive]] awareness and generative AI attitudes predicted nothing, so programs that evaluate themselves on confidence surveys are measuring the wrong construct. The study's open materials — workshop slides and facilitation script (in French), anonymized data, and analysis code at [osf.io/fyu7c](https://osf.io/fyu7c/overview) — make it replicable in a way that most intervention studies here are not. Weight the evidence as short-term and single-site; a two-hour effect that has not been tested for durability should change what educators try, not what they assume works.

## Connected Concepts

- [[ai-literacy]] — the construct whose applied, regulatory dimension is tested here
- [[generative-ai]] — the tool class students were trained to regulate
- [[metacognition]] — the monitoring-and-control process the intervention targets
- [[self-regulated-learning]] — the broader framework for regulating one's own learning with a system
- [[cognitive-offloading]] — the failure mode the workshop is designed to prevent
- [[prompt-engineering]] — taught here as agency over prompting, not as output optimization
- [[critical-thinking]] — judging answer correctness rather than accepting fluency
- [[k-12]] — the educational level studied (grades 8–9)
- [[science-education]] — the subject context of the tasks
- [[assessment]] — behavioral indicators as an alternative to self-report measurement

## Connected Articles

- [[liu-ai-literacy-interventions-meta-analysis-2026]] — meta-analysis of AI literacy interventions
- [[ai-intuition-ai-literacy-k12-2026]] — dual framework for K-12 AI literacy
- [[aaai2026-prompting-literacy-k12]] — teaching responsible AI chatbot use to K-12 students
- [[genai-over-reliance-learning-2026]] — how over-reliance affects learning
- [[cognitive-offloading-metacognitive-review-2026]] — review of cognitive offloading and metacognition
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — self-reflection as a countermeasure to offloading
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — prompt literacy as a human-centered competency
- [[aigc-affordance-student-self-regulation-2026]] — GenAI affordances and student self-regulation

## Citation

Clerc, O., Abdelghani, R., Desvaux, C., Poisson, E., Oudeyer, P.-Y., & Sauzéon, H. (2026). [*Teaching students to question the machine: An AI literacy intervention improves students' regulation of LLM use in a science task*](https://arxiv.org/abs/2604.01955). *ALIT4ALL 2026: 2nd International Workshop on AI Literacy Education For All, co-located with AIED 2026*.
