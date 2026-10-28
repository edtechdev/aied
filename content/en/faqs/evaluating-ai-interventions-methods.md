---
title: "What Measures and Research Methods Can an Instructor Use to Evaluate AI-Related Interventions?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-28T11:47:13-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

You ran the pilot in two sections, collected an end-of-unit survey, and have a faculty meeting in three weeks where someone will ask whether it worked. Or a reviewer has asked what your comparison condition was, and the other section did something different. Either way: what would count as evidence here?

Match the method to the claim. A survey tells you whether students liked the activity. Whether they learned needs a performance measure, and whether the AI caused the gain needs a comparison condition.

## The short version

**1.** Write the claim in one sentence, with the outcome named. "Students who used the tutor scored higher on the unassisted exam" is testable.

**2.** Run a baseline, the intervention, an immediate post-measure, and a later measure taken without AI.

**3.** Describe the comparison condition as carefully as the treatment, even when it is your existing practice.

**4.** Measure assisted performance and independent learning separately, and treat any published average as a hypothesis about your class.

## Pick the method your question can survive

The [[research-methods-aied|Research Methods in AIED]] page sets out what each option buys. Randomized experiments give the strongest causal inference. Quasi-experimental pre/post or matched-group designs fit intact classes and support weaker claims. [[qualitative-research|Qualitative]] interviews, focus groups, observations, and artifact analysis reveal mechanisms and unexpected experience. [[mixed-methods-research|Mixed methods]] pair outcome evidence with an explanation. [[design-based-research|Design-based research]] suits an instructor refining an intervention across iterations.

AI-assisted qualitative analysis belongs on that list with a condition. It reorganizes an interview corpus in minutes, so [[chain-behind-claim-warrantability-2026|warrantability]] matters as much as accuracy: record the documented reorganizations that let a reader inspect, contest, and revise the pathway from data to claim.

A survey is a [[self-report-measures|self-report measure]]: right for attitudes, wrong for learning.

## Give the comparison condition a name

Three conditions make a causal claim interpretable: a precisely described treatment, a well-defined comparison condition, and a valid measure of durable learning. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] audited 19 ChatGPT-in-education comparisons against those criteria. Four (21%) satisfied all three. Treatment was well defined in 74%, the control group in 42%, the outcome qualified as learning in 53%.

The failure mode is easy to reproduce. A [[generative-ai|general-purpose tool]] introduced alongside new activities, new feedback, or a redesigned interface confounds the medium with the method, and the significant result belongs to the redesign.

## Measure the outcomes you actually care about

The [[ai-ed-evaluation|AI Ed Evaluation]] synthesis recommends unassisted learning gain, delayed retention, transfer to a new task, quality of reasoning, [[misconceptions]], feedback uptake, and subgroup performance. Engagement, satisfaction, AI-use logs, [[self-efficacy]], and [[technology-acceptance-model|perceived usefulness]] are reasonable secondary measures and poor substitutes for learning. Workload and time savings count as implementation outcomes, a different question.

The classroom-scale minimum is a baseline, the intervention, an immediate post-measure, and a later unassisted measure. Add a comparison condition where you can: existing practice, no AI, unrestricted AI against scaffolded AI, or two alternative designs. Score assisted and unassisted performance on separate instruments, since one rubric will blend them.

## Read any number as a hypothesis

An average effect from the literature is a weak guide to one classroom. [[oneill-presumed-effective-meta-analysis-2026|O'Neill's (2026) audit]] of 14 high-impact [[meta-analysis-systematic-review|meta-analyses]] found that none provided a valid basis for its claims. Pooled [[learning-gains|"academic achievement"]] mixed test scores, motivation, [[self-efficacy]], and attitudes into one estimate. Heterogeneity was extreme: I² ran from 77.2% to 94.4% in the 13 analyses that reported it, and 12 of those sat above 80%. All 14 assessed [[limitations-in-aied-research|publication bias]] invalidly, and 61% of randomly vetted primary studies carried validity problems. Four analyses reported between-study variance, two reported a prediction interval, and both intervals included zero.

A convenient score can measure the wrong construct. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|an evaluation of eight AI teaching agents]], the agent ranked third on the platform's own score ranked last on an expert-validated rubric, because platform scores indexed student performance during the interaction. Treat a dashboard metric as a hypothesis.

## What instructors get wrong

A satisfaction survey measures the learning. It measures satisfaction, which the AI Ed Evaluation synthesis lists as a secondary measure beside learning outcomes.

A pre/post gain shows the intervention worked. It shows scores rose. Whether the measure counted as learning is a separate question, and the audit found a qualifying learning outcome in 53% of the comparisons it reviewed.

Published effect sizes transfer to my class. O'Neill's 14 meta-analyses could not support the claims built on them, and both reported prediction intervals included zero.

Platform analytics measure teaching quality. Zhang's third-ranked agent was last on an expert rubric.

## What will come back at you

**"We already have end-of-course evaluations."** They measure the course, and they run after the term you needed the answer in.

**"A comparison group is impossible in an intact course."** Compare against last year's version of the same assignment, or a second section, and describe the difference honestly. Quasi-experimental designs are weaker, and still informative when the alternative is a claim with no comparison.

**"The effect size in the meta-analysis is large."** On which outcome, in whose class? Both prediction intervals O'Neill found included zero.

**"Our dashboard shows strong engagement."** Engagement is a secondary measure on the AI Ed Evaluation list. Put the unassisted learning measure beside it.

## What to do this week

**1.** Write your claim as one sentence and underline the outcome.

**2.** Add the later unassisted measure to the calendar, after the intervention and not the same week.

**3.** Write one paragraph describing the comparison condition, in the same detail as the treatment.

**4.** Pull the platform numbers you already have and mark each one as an artifact outcome or a learning outcome.

**5.** Ask one colleague to read the design and say what else changed during the term.

## Where to go next

[[does-ai-help-students-learn|Does AI help students learn?]] summarizes what the outcome evidence shows, and [[research-gaps-aied|Research Gaps in AIED]] covers where it thins out. [[checking-whether-educational-ai-works|How do we know an educational AI is working correctly?]] is the version of this question for people building or buying a system.
