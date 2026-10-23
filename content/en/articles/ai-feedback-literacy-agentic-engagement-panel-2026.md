---
title: "Within-person reciprocal processes between AI feedback literacy and agentic engagement: a three-wave random-intercept cross-lagged panel study"
created: "2026-10-23T09:45:00-04:00"
updated: "2026-10-23T09:45:00-04:00"
type: article
foundations: [agency, ai-literacy]
pedagogy: [student-ai-interaction, student-engagement, motivation, self-determination-theory, self-regulated-learning]
technology: [generative-ai]
assessment: [feedback-literacy, feedback]
methods: [quantitative-research]
ethics: [trust-calibration]
research_method: [longitudinal study, survey, structural equation modeling]
level: [higher ed, undergraduate]
audience: [instructors, faculty developers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/ai-feedback-literacy-agentic-engagement-panel-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Xu (2026) asked whether [[feedback-literacy|AI feedback literacy]] and [[student-engagement|agentic engagement]] build each other, rather than one simply preceding the other, in 480 Chinese undergraduates measured three times at six-week intervals. Two things had to be pulled apart first: how much a student differs from their classmates, and how much a student differs from their own usual level on a given occasion. A random-intercept cross-lagged panel model put the stable trait correlation at r = 0.315 (p < 0.001) and found both within-person pathways positive and significant — literacy to engagement β = 0.222, engagement to literacy β = 0.263 — with a Wald test unable to distinguish their magnitudes (p = 0.972). Dropping the random intercepts, as a traditional cross-lagged panel model does, returned β = 0.116 and β = 0.157, so the conventional design was suppressing the reciprocal signal rather than manufacturing it. Xu reads the symmetry through [[self-determination-theory|self-determination theory]] and the mutualism principle, extends mutualism from a pairing of two internal constructs to a pairing of an internal competency with an outward behavior, and reframes AI feedback literacy as a developmental resource partly constituted by the [[agency]] it enables.

## Key Findings
1. Students who were consistently more AI feedback literate than their peers were also consistently more agentically engaged, with a trait-level correlation of r = 0.315 between the two random intercepts (p < 0.001).
2. Literacy predicted later engagement: when a student sat above their own usual AI feedback literacy, their agentic engagement six weeks later sat above its own usual level (β = 0.222, p < 0.001).
3. The reverse path was just as strong, and nominally larger: deviations in agentic engagement predicted later deviations in AI feedback literacy (β = 0.263, p < 0.001).
4. A Wald test could not distinguish the two paths in size (ΔB = 0.002, p = 0.972), so the panel gives no evidence that either resource is the upstream cause of the other.
5. Without random intercepts, a traditional cross-lagged panel model returned β = 0.116 and β = 0.157; the within-person estimates were 1.7 to 1.9 times larger (Δχ2(3) = 49.37, p < 0.001).
6. Concurrent correlations between the two scales ranged from 0.22 to 0.33 across waves, low enough that AI feedback literacy is not a restatement of engagement in different words.
7. Baseline AI use frequency predicted higher trait levels of both constructs (β = 0.194 and β = 0.128) without shifting the cross-lagged paths by more than 0.01.

## Separating the trait from the fluctuation

The design choice carries as much weight as the coefficients. A traditional cross-lagged panel model asks whether students who score higher on one measure at one wave score higher on the other at the next, a question that mixes stable differences between students with genuine change inside them. Xu instead fit a random-intercept model that gives each student a fixed trait level on each construct and models only the residual six-week deviations ([[quantitative-research|quantitative]] panel work in motivation research has made this the standard correction). Both constructs used established scales: the 24-item AI Feedback Literacy Scale, covering appreciation, judgment, affective management, and action, and Reeve's 10-item agentic engagement scale, its stems rewritten to cover learning "whether with my teacher or with an AI tool." The literacy scale is domain-specific — whether a particular piece of AI feedback on one's essay is sound — which the paper separates from general [[ai-literacy|AI literacy]], and engagement here is behavior rather than [[self-regulated-learning|self-regulated learning]] strategy knowledge. Fit was strong (CFI = 0.996, RMSEA = 0.036), and [[educational-measurement|measurement]] held across waves for mean comparisons.

## A symmetric loop, not a sequence

The result that matters theoretically is the null on asymmetry. Feedback literacy research has been ambivalent about direction: sometimes literacy is the precondition for productive uptake, sometimes uptake is how literacy is acquired. Xu's Wald test says that at a six-week grain, in this sample, neither story wins, and he treats the ambivalence as a property of the phenomenon. That extends the mutualism principle beyond the cases Marsh and Craven and, later, Vu and colleagues worked with, where two person-internal constructs — self-concept and achievement, [[motivation]] and achievement — sustain each other. Here one node is a competency and the other is a behavior aimed at the environment, and the loop still runs. The practical corollary is that literacy is not a possession students carry into a course and spend; it is partly produced by the [[student-ai-interaction|interactions]] through which they contest and revise what a model tells them. A caution belongs here: with a six-week lag and contemporaneous associations modeled only as residual covariances, some of this mutual influence may be happening within occasions rather than across them.

## The cultural argument Xu makes but cannot test

One strand of the discussion is an interpretation the data cannot adjudicate, and it is the part most worth arguing with. Xu recruited from two universities in eastern China, a [[higher-ed|higher education]] setting where [[student-engagement|agentic engagement]] has been described as culturally muted, with students socialized to defer to authoritative knowledge and to display [[agency]] in less visible ways. That makes the robust within-person effects noteworthy: if questioning a teacher is socially costly, an AI interlocutor may be a cheaper venue for the same behavior, since there is no authority to offend. Supporting evidence sits nearby rather than inside the study — an experiment finding that assistance students had to solicit produced more critical engagement than unsolicited assistance, and survey work in which students rated generative AI feedback helpful but [[trust-calibration|less trustworthy]] than teacher feedback. Whether AI actually lowers the social cost of agency for Chinese students, or whether the pattern would merge with teacher-directed dynamics elsewhere, is a [[sociocultural-learning|cross-cultural]] question this panel was not built to answer.

## Where to enter the loop

Statistically the two resources are interchangeable starting points; pedagogically Xu argues they are not, at least at the beginning. A student encouraged to interrogate AI output before acquiring any basis for judging it can develop what the paper calls confident misuse — energetic interaction with a model whose errors are absorbed uncritically — and that may be worse than avoidance. So the entry point should track the learner: scaffold questioning and contestation with students who already evaluate plausibly, and lead with [[evaluative-judgment|evaluation]] for those meeting [[generative-ai|generative AI]] writing tools for the first time, then hand over the loop once a minimum threshold is crossed. The paper's three concrete routines all target the loop rather than either half: an AI-interrogation protocol written before each assignment, specifying what will be asked, how responses will be judged, and when a suggestion will be refused; a [[feedback]] log recording each substantive episode, its quality, and the action taken; and periodic in-class critique sessions where students compare how they read the same output.

## What this means for practice

- **Instructors.** Design assignments that exercise both halves of the loop in sequence: a written interrogation protocol before major work, a feedback log through it, and an in-class comparison of how classmates judged the same AI output.
- **Faculty developers.** Stop running AI feedback workshops as evaluation training alone. A program that teaches students to judge AI output without creating occasions to contest it leaves half the developmental loop ungrounded, and the reverse program produces confident misuse.
- **Administrators.** Treat tool access as the smaller problem. Baseline use was already at a median of three to four times per week and predicted trait levels of both constructs (β = 0.194 and β = 0.128) without changing the six-week dynamics; what the panel credits is designed practice.
- **Researchers.** Make the random-intercept specification the default for reciprocity questions about feedback and engagement, and plan four or more waves. Three waves with equality constraints are the minimum for identification, and the traditional model returned effects 1.7 to 1.9 times smaller here.

## Limitations

- The 480 participants were quota-stratified volunteers from two comprehensive universities in eastern China, restricted to second- and third-year non-English majors; 401 completed Wave 3 (83.5%) and the analytic sample was the 399 with complete data, so first-year students, English majors, and other systems are absent by design.
- Both constructs are [[self-report-measures|self-reports]], which capture perceived rather than enacted feedback use: students may overestimate how critically they evaluate AI output. The marker variable moved partial correlations by less than 0.02, but no prompt, revision, or acceptance log was collected.
- Three waves are the minimal sufficient design for this model, and the six-week lag cannot separate cross-lagged from contemporaneous influence; effects estimated as prospective may partly be same-occasion effects, as recent methodological work warns.
- The measures referred to AI feedback and AI tools "in general terms," naming no model, version, or task, and the paper gives no calendar dates for the three waves beyond a single academic semester; tool availability was itself shifting across the collection window and is not modeled.
- AI feedback literacy reached only partial scalar invariance, with two item intercepts (one in the appreciating and one in the judging subdimension) freed across waves — a drift the author attributes to rapidly changing student exposure to AI tools.
- No moderators were measured. Autonomy support in the course, tool type (general [[conversational-ai|chatbot]] versus a domain-specific feedback system), and baseline [[self-efficacy]] are all untested candidates for changing the strength or direction of the loop.

## Citation

Xu, S. (2026). [*Within-person reciprocal processes between AI feedback literacy and agentic engagement: a three-wave random-intercept cross-lagged panel study*](https://doi.org/10.3389/fpsyg.2026.1893874). *Frontiers in Psychology*, 17, 1893874.
