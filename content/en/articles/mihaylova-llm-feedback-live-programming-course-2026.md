---
title: "It's Complicated: Factors Influencing the Effectiveness of LLM-Generated Feedback in a Live Programming Course"
created: "2026-10-24T08:41:00-04:00"
updated: "2026-10-24T08:41:00-04:00"
type: article
authors: [Tsvetomila Mihaylova, Arto Hellas, Bita Akram, Narges Norouzi, Peter Brusilovsky, Juho Leinonen]
pub_date: 2026-10-18
venue: "26th Koli Calling International Conference on Computing Education Research"
url: https://doi.org/10.1145/3856208.3856234
foundations: [ai-literacy, cognitive-offloading, human-ai-collaboration]
pedagogy: [help-seeking, scaffolding]
technology: [generative-ai, learning-analytics, llm]
assessment: [ai-feedback-quality, feedback]
ethics: [ai-misuse-learning-harm]
research_method: [secondary analysis]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
sources: ['raw/papers/mihaylova-llm-feedback-live-programming-course-2026.md']
confidence: high
methods: [quantitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** A live introductory web development course at Aalto University ran three consecutive deployments of [[llm|LLM]]-generated hints on failed submissions: o3-mini in autumn 2025, GPT-5-mini in spring 2026 and GPT-5.5 in summer 2026, across 79,438, 83,374 and 10,420 logged submissions in its three periods, and three feedback formats. Feedback helped, but not in the way the deployment had assumed. Getting a hint was associated with higher odds that the next submission was correct in Period 1 (log-odds 0.254 and 0.420 for the two formats) and with fewer attempts to solve in the first two periods, yet the associations moved by period, by outcome and by message format, and the strongest single predictor in the pooled models was not the model version but message length: per standard deviation of 204.9 characters, longer feedback predicted lower next-submission correctness. The finding the authors flag hardest is a negative one. Students who had received feedback on an earlier step of the same course part were less likely to solve their final-project step (95.6% against 98.1% observed, coefficient −1.096), which the design cannot attribute to feedback rather than to who needed it.

## Key Findings

- **Presence of feedback tracked better next-submission outcomes, inconsistently.** Receiving Single-Issue or Diagnostic feedback was associated with higher odds of a correct next submission in Period 1 (0.254, 94% HDI [0.109, 0.389] and 0.420 [0.282, 0.568]), and the Diagnostic association was measurably smaller in Period 2. Among the 13,842 pairs solved within 30 minutes, both formats were associated with fewer attempts through first success in Periods 1 and 2, while the Period 3 contrasts were uncertain on a much smaller sample.
- **Longer messages did worse on every downstream outcome.** Across periods and formats, one standard deviation more text (204.9 characters) predicted lower odds of a correct next submission (−0.733, 94% HDI [−0.840, −0.631]), more remaining attempts (0.187) and a longer wait before resubmitting (0.226 on the log scale). Readability mattered far less: Flesch-Kincaid grade was uncertain for correctness and attempts and only barely positive for resubmission time (0.040).
- **[[ai-feedback-quality|Feedback quality]] is a trade-off rather than a winner.** Holding measured length and complexity constant, Diagnostic feedback was associated with higher next-submission correctness in Periods 1 and 3 and with fewer remaining attempts in all three periods, but also with slower resubmission in Periods 1 and 2. Guidance that shortens the road to a correct answer also slowed the next attempt.
- **Which exercise it was mattered more than which student.** For next-submission success the estimated exercise random-intercept SD exceeded the student SD (1.033 against 0.473 on the logit scale); for eventual solving the ordering reversed sharply, with student heterogeneity at 3.772 against 1.414 for exercises. Effects of feedback were more about the problem being attempted than about stable learner traits.
- **Prior feedback on the same course part went with lower final-project success.** Restricted to steps with no direct feedback of their own, prior same-part exposure carried a coefficient of −1.096 (94% HDI [−2.074, −0.136]) on solve probability, with observed rates of 95.6% (721/754) against 98.1%. Attempts and time among solved pairs were uncertain, so the association is with getting there at all, not with how quickly.
- **Within-student change was favorable for standard exercises, and not established for the project.** In the Period 2 cohort, exposed students' median improvement was 0.5 fewer attempts and 21.7 seconds faster, against 0.0 attempts and 23.2 seconds slower for the never-exposed (attempts p < 0.001, time p = 0.004). Final-project change did not differ (p = 0.916 and 0.877), and because the two groups sat at different course stages, the authors read the standard-exercise result as suggestive rather than causal.
- **Most resubmissions arrive fast, which bounds what feedback can influence.** 98.7% of next submissions after an eligible first incorrect attempt come within 30 minutes, half within one minute and 41.9% between one and five minutes, in a course where ordinary grader output (test results, compiler and runtime errors) is present whether or not a hint is.
- **The authors' own directions are modest and testable.** Bound message length while keeping the guidance, let students choose the format they get, and evaluate both experimentally rather than from deployment logs.

## What was actually deployed

Three iterations in one online course built on Svelte/SvelteKit and HTML/CSS on the client and Deno/Hono on the server, with database access, authentication and automated testing. Every AI hint was labeled as AI-generated and displayed in the grading results next to the ordinary grader feedback, so a student without a hint still saw test failures and errors.

Formats were designed to differ in guidance rather than in topic: Single-Issue Feedback gave a narrow hint on one problem, Diagnostic Feedback gave a broader diagnosis with less of the solution, and General Feedback (available only in the first period) gave broader guided help. Period 1 randomized eligible incorrect submissions to a format or to no LLM feedback; Periods 2 and 3 switched to opt-in automatic feedback, reusing a format the student had recently received or choosing randomly.

The scale is worth knowing before reading any coefficient: 419 students and 79,438 submissions in Period 1, 525 and 83,374 in Period 2, 163 and 10,420 in Period 3, always across 134 exercises. Exposure means a hint was attached to a submission; nothing in the data shows the student read it, which the authors state plainly.

Analysis was mixed-effects modeling with random intercepts for students and exercises, fit in Bambi with Hamiltonian Monte Carlo and default priors, and treated as significant when an interval excluded zero (95% confidence for the linear models, 94% highest-density for the Bayesian ones).

## What this means for practice

- **Instructors and course teams writing hint prompts.** Length is the variable this study can act on. Two hundred characters is a real difference, and the direction is consistent across outcomes, formats and periods, so a prompt that says "at most three sentences, one issue" is better supported by this evidence than "be thorough".
- **Anyone reading a positive deployment result.** The by-period movement is the lesson: the same formats were associated with faster solving in Period 1 and slower solving in Period 2 while the model also changed, so a single-term evaluation would have reported whichever answer its term produced. Treat period as a confound to be modeled, not a nuisance to be averaged away.
- **Teams deciding what to measure.** This study measures performance and time, and its authors say directly that this is not learning. A course wanting the learning question needs a design that randomizes availability and message design, and outcomes that are not another submission.
- **The final-project result as a caution about hint culture.** A plausible reading is that students who lean on hints on earlier steps arrive at the integrative step with less practice at diagnosing their own errors, which is the [[cognitive-offloading|over-reliance]] concern documented elsewhere in a correlational form. The authors do not claim it: prior difficulty and feedback-seeking can produce the same pattern, and no randomization is available for it.

## Limitations

- Model version and calendar period are perfectly confounded, since each deployment used a different model; period differences may reflect cohort, opt-in policy, prompt changes or unmeasured course changes rather than the model itself.
- The no-feedback groups are not clean randomized controls. They include submissions made when AI feedback was unavailable, and Periods 2 and 3 were not randomized at all, so a student who opts in may simply be the student who is already stuck.
- Reading and use were never measured. A hint could arrive after the student had solved the problem mentally, and prior motivation or [[help-seeking]] tendency drives both exposure and outcome.
- The length analysis is an association between messages that already differed, not a test of experimentally shortening an equivalent message.
- The final-project and student-level analyses use a restricted, highly engaged Period 2 cohort, and all of those tests are exploratory without multiplicity adjustment.
- The manuscript was itself reviewed with an LLM: the authors used OpenAI's GPT-6 Astra Pro to critique the analysis inclusion criteria, the temporal definition of exposure and the interpretation of the comparisons, and for literature checking and language editing, with the authors taking the final methodological decisions. That is disclosed in the paper and recorded here rather than omitted.

## Citation

Mihaylova, T., Hellas, A., Akram, B., Norouzi, N., Brusilovsky, P., & Leinonen, J. (2026). [*It's Complicated: Factors Influencing the Effectiveness of LLM-Generated Feedback in a Live Programming Course*](https://doi.org/10.1145/3856208.3856234). In *26th Koli Calling International Conference on Computing Education Research (Koli Calling '26)*. ACM. arXiv:2610.25244. Open access under CC BY 4.0.
