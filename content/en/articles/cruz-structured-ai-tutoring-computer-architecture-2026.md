---
title: "Structured AI-tutoring for Computer Architecture Courses"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Cruz, A.", "Yatawara, A.", "Mishra, M.", "Wang, J."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4B8-9A-58685
foundations: [cognitive-offloading, human-ai-collaboration, teacher-ai-competency]
pedagogy: [scaffolding, active-learning, student-ai-interaction]
technology: [generative-ai, conversational-ai, intelligent-tutoring]
assessment: [formative-assessment, feedback]
ethics: [equity-in-ai-education]
research_method: [survey]
discipline: [cs education, engineering education]
level: [undergraduate, higher ed]
audience: [instructors, instructional designers]
sources: ['raw/papers/cruz-structured-ai-tutoring-computer-architecture-2026.md']
confidence: medium
methods: [quantitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Cruz, Yatawara, Mishra and Wang (2026) describe a grant-supported deployment of instructor-authored [[conversational-ai|chatbot]] tutors across three sections of two undergraduate computer architecture courses at a Hispanic-Serving Institution, and report how students' attitudes toward the tutor moved across a semester. The design is the contribution: a system prompt fixes the tutor's persona, forces alternating turns in which the student must articulate reasoning, withholds direct answers, and withdraws [[scaffolding|support]] as the session proceeds, all built on Vygotsky's Zone of Proximal Development and revised through the ADDIE instructional design cycle. The evidence is thinner than the design. Forty consenting students answered a ten-item attitudinal survey at the start, middle and end of the semester, and the pooled ordinal logistic regressions show rising agreement that the tutor encouraged critical thinking and independent problem solving (slope 0.679, p = .050) and that its [[feedback|feedback]] matched the instructor's (slope 0.772, p = .006). But responses fell from 33 at the first timepoint to as few as 8 at the third, there was no comparison condition and no measure of learning, so the paper is best read as a worked example of [[teacher-ai-competency|instructor-mediated]] [[prompt-engineering|prompt design]] rather than as evidence that the tutor improved anything.

## Key Findings

- **Students' belief that the tutor built independent reasoning rose over the semester.** On the item "The AI tutor encourages me to think critically and solve problems independently," the modal response moved from neutral at the first timepoint to agree at the second and strong agreement at the third, with 0.647 of the eight third-timepoint respondents choosing the top category. The proportional-odds model with time as a numeric predictor estimated a slope of 0.679 (SE 0.347, p = .050, OR 1.971, 95% CI [1.000, 3.890]); the categorical model located the change between the second and third waves (slope 2.112, p = .008, OR 8.261).
- **The comparison that matters most to instructors — is the tutor's feedback as good as mine — moved furthest.** Agreement that "the feedback provided by the AI tutor is as helpful as feedback from the instructor" began at neutral and reached agree or strong agree by the end (slope 0.772, SE 0.283, p = .006, OR 2.165, 95% CI [1.243, 3.772]; categorical second-to-third wave slope 1.828, p = .003, OR 6.2183). This is a perception of feedback quality, not a test of it.
- **The prompt-design items did not separate.** Belief that instructor prompts helped students use the tutor effectively had a positive but non-significant estimated effect (slope 0.219, SE 0.267, p = .412, OR 1.245), and perceived preparedness before lecture ran in the same direction without reaching significance (slope 0.480, p = .088). The authors read these as trend-level support rather than findings.
- **Several items were flat or negative, which the paper reports rather than buries.** Recall and application of prior concepts, user-friendliness, and the claim that the tutor supports learning regardless of background all produced estimates at or below zero with no significant effect, so the [[equity-in-ai-education|equity]] claim in the third research question rests on high absolute agreement rather than on a demonstrated change.
- **Agreement was high from the start, which caps what the instrument can show.** All ten items had a modal response of agree by the second timepoint, so the authors themselves name agreement bias as a limit on discriminating between students' experiences, particularly for the prompt-design and equity questions.
- **The instrument was internally consistent, and that is the strongest psychometric result in the paper.** Cronbach's alpha was .812 at the first timepoint, .938 at the second and .930 at the third, computed on complete cases.
- **The prompt itself was revised mid-study in response to model failure.** Because the models in use (ChatGPT-4o, o1, o3 and 5) handled binary-number manipulation poorly, the instructor added an epistemic-humility guardrail — the tutor opens by saying it is not perfect and may make mistakes, and invites correction — and a turn-taking rule in which the tutor models a question and its reasoning before the student answers one. The authors treat the resulting AI errors as learning material rather than as [[hallucination-risk|hallucination]] to be suppressed.

## How the study was done

The intervention ran in Assembly Language (lower-division, typically sophomores) in Spring 2025 and in Computer Architecture Organization and Design (upper-division, typically juniors) in Spring and Fall 2025, all taught by the same senior instructor with twelve years of experience, six of them in a flipped, [[active-learning|active-learning]] format. Both courses are required for computer science majors. The AI activities were out-of-class assignments, quiz-like in form, intended to prepare students for lecture; the student submitted the conversation log as part of the coursework.

The interaction pattern is a [[intelligent-tutoring|tutoring]] protocol implemented entirely in a system prompt: the student opens a Custom GPT that carries the instructor's message, the tutor and student alternate turns, the student must explain reasoning and is asked follow-up questions until the explanation holds, support decreases across the session, and after eight questions the conversation is exported for submission. The prompt ends with three example questions on branch prediction and a branch table buffer, which the authors describe as few-shot [[prompt-engineering|prompting]] that fixes the expected depth and structure of later turns.

Participants were consenting students over 18, recruited with a demographic survey in the first week that also carried exclusion criteria for age and prior participation. The demographic survey described the group as 32 computer science majors, 4 computer engineering and 4 information systems; 33 male and 7 female; 26 Hispanic or Latino; 25 juniors and 11 seniors or later; mean age 22.3 (median 21); a mean of 14 semester units and 11.33 hours of work per week; and 78.0% reporting prior experience with AI platforms. Consenting rates differed sharply by section — 100% in the Spring 2025 Assembly Language section, 74.4% in the Spring 2025 Computer Architecture section and 56.5% in Fall 2025.

The same ten-item survey ran at the start, middle and end of the semester, with items mapped to the three research questions. Because participation varied by wave, the authors describe results as pooled time trends rather than a within-student estimate, and response counts fell from 33 to 24 to between 8 and 17 depending on the item. Analysis used proportional-odds [[quantitative-research|ordinal logistic regression]] in two specifications — time as an ordered numeric predictor and time as a categorical factor with the first wave as reference — estimated separately per item with no adjustment for multiple comparisons, and reported descriptively.

## What this means for practice

- **The reusable artifact here is the prompt, not the chatbot.** Everything that makes the interaction tutorial-like — role, turn structure, obligation to articulate, fading support, invitation to correct the AI — is written in the system message and can be pasted into any course's Custom GPT. An instructor who wants to try this can start from the pattern rather than from a platform decision.
- **Treating AI errors as content requires an explicit instruction.** The epistemic-humility line was added because the model got binary arithmetic wrong. Without that framing, a wrong worked example in a homework conversation is a [[misconceptions|misconception]] generator; with it, the error becomes the thing the student is asked to find. The move costs one sentence in the prompt.
- **Expect the design to be judged on feedback quality, and check that judgment against outcomes.** The largest measured shift was students agreeing that tutor feedback rivaled the instructor's. That is exactly the belief an instructor should not accept on a survey alone: pair it with graded work, since this study measured no learning.
- **Plan the evaluation before the deployment.** With 33 respondents at the first wave and 8 at the last, an item-level ordinal model has little power, and high agreement from the first wave leaves no headroom to detect change. A departmental pilot would do better with a comparison section, a pre-registered primary outcome, and an instrument with more scale points or behaviorally anchored items.
- **Section-level logistics shape who ends up in the data.** The 100% consent rate in the smaller lower-division section against 56.5% in one upper-division section is a recruitment warning: the analyzed sample is not the enrolled population, and the paper does not report why.

## Limitations

- **Attrition dominates the design.** Responses fell from 33 to 24 to as few as 8, which reduces power, makes the final wave unrepresentative and invites self-selection: the students who kept answering may be the more engaged ones. The authors state this plainly and describe the models as exploratory indicators of trend.
- **No comparison condition and no learning measure.** All three sections received the intervention, so nothing separates the tutor's effect from instructor, cohort or semester effects, and every outcome is [[self-report-measures|self-reported]] attitude. The conclusion section itself calls for pre/post assessment or performance-based measures in future work.
- **Independence was assumed where it does not hold.** Some students answered at more than one timepoint, and the models treat observations as independent, so standard errors are likely understated. Mixed-effects and generalized estimating equation alternatives were considered and set aside as infeasible with sparse repeated observations.
- **The proportional-odds assumption was specified but not tested,** because small cell sizes at later timepoints constrained diagnostics. Multiple items were analyzed without correction, so the two significant results should be read against the number of tests run.
- **The qualitative claim about equity is not tested.** The third research question asks whether the tutor supported equitable participation and reduced reliance on external resources; the evidence is agreement levels on two Likert items, in a sample that is 65% Hispanic and drawn from a single institution, with no comparison to how students without the tutor fared.

## Citation

Cruz, A., Yatawara, A., Mishra, M., & Wang, J. (2026). [*Structured AI-tutoring for Computer Architecture Courses*](https://doi.org/10.18260/B4B8-9A-58685). *ASEE Computers in Education, 15*(4), 67–84.
