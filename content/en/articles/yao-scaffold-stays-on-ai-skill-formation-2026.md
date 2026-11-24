---
title: "When the scaffold stays on: AI, practice style, and screening in elite skill formation"
created: "2026-11-24T09:55:00-05:00"
updated: "2026-11-24T09:55:00-05:00"
type: article
authors: ["Song Yao"]
venue: "arXiv preprint (cs.CY)"
evidence_context: educational
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties]
technology: [generative-ai, learning-analytics]
methods: [quantitative-research]
discipline: [cs education]
level: [higher ed]
audience: [researchers, instructors, educational technology developers]
page_kind: [evaluation]
research_method: [secondary analysis]
sources: ["raw/papers/yao-scaffold-stays-on-ai-skill-formation-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Yao (2026) asks what digital practice records reveal about how [[generative-ai|AI-assisted practice]] builds — or erodes — skill, and whether AI-prohibited evaluations can tell the two apart. The study follows 10,419 users of Codeforces, an unproctored programming platform, from 2018 to 2025, and links them to the rosters of the International Collegiate Programming Contest and the International Olympiad in Informatics, which admit entrants through qualification rounds and prohibit AI under in-person proctoring. From practice telemetry the author constructs an "AI-prompt signature" — higher first-attempt acceptance, fewer attempts per solved problem, fewer rapid retries — and finds that practice shifted toward this signature across cohorts entering after GitHub Copilot and ChatGPT. Among users outside the screened contests, a stronger signature predicted smaller rating gains (about eighteen points per standard deviation, roughly 6% of the average gain). Inside the AI-prohibited contests, larger within-user shifts predicted slightly better non-AI performance (+0.142 problems, marginally significant). The pattern is consistent with [[cognitive-offloading|qualification screening]] removing substitute-users while complement-users remain, though the cohort contrast cannot be read causally.

*Panel analysis of 10,419 Codeforces users over 31 quarters (2018-Q1 to 2025-Q4, excluding 2022-Q4), linked to ICPC and IOI rosters. Difference-in-differences estimates with user and quarter fixed effects, standard errors clustered at the user level, and robustness checks including Lee bounds and coarsened exact matching.*

## Key Findings

- **Practice shifted toward the AI-prompt signature.** Relative to the pre-AI cohort, the AI-era cohort shows higher single-shot acceptances, median attempts about one-sixth below the 1.9-attempt baseline, and fewer quick retries, with every shift statistically strong.
- **The signature predicted weaker growth only in the unscreened pool.** Among non-rostered users, a one-standard-deviation stronger signature was associated with about eighteen points less rating gain, roughly 6% of the 300-point mean post-ChatGPT gain, and the pooled interaction crossed the conventional significance threshold.
- **The screened pool showed no such penalty.** For roster-linked users the estimate was a failure to reject rather than a precise zero, which the author reads as screening admitting complement-users and excluding substitute-users.
- **AI-era contestants improved slightly with larger shifts.** Among AI-era entrants who reached ICPC, a larger within-user shift went with a small improvement in non-AI performance.
- **The cohort gradient is descriptive, not causal.** Parallel pre-trends failed, and at matched career stage the transition and AI-era cohorts were statistically indistinguishable.

## Two modes of using AI while practicing

The paper's organizing idea is that the same AI-assisted output can come from two different relationships with the tool. In the substitute mode the AI performs the work through which skill is built; in the complement mode it handles parts the learner has already mastered, freeing attention for harder parts. Because the output looks identical, practice records are needed to distinguish them. The AI-prompt signature is offered as such a record: single-shot acceptances, few attempts, and few quick retries look like assistance doing the debugging rather than the learner doing it.

The study then uses a natural gate. ICPC and IOI prohibit AI and proctor in person, so entrants have passed a screen that depends on demonstrated ability without the tool. If screening works, the roster-linked population should be depleted of substitute-users, and the signature should carry little information about their growth there. The open pool has no such gate, so it retains them. That asymmetry is the test.

## What the estimates show

The difference-in-differences result establishes the descriptive premise: practice did move toward the signature in the AI era, with a monotonic gradient from pre-AI to transition to AI-era cohorts. The author is careful not to call this an AI effect. A gradual change in practice norms combined with novice-to-competitor maturation fits the data, the transition cohort entered before either release, and the gap is largest on the difficulty band AI handles worst rather than on easy templated problems. What matters for the rest of the paper is only that the signature became common enough to study.

The cross-subpopulation result is the substantive finding. In the unscreened pool the signature predicts smaller rating gains, with the estimate surviving looser filters (interaction between −11.92 and −7.14) and a Lee bound of [−11.95, −0.35]. A confounder explaining 2.4% of residual variance would zero it, against the 15.7% explained by baseline rating, which makes the result fragile but not implausible. The ICPC analysis adds a small positive association among AI-era entrants, marginal in significance, which the author presents as consistent with complement-use rather than as proof.

## Why this is hard to establish

The central difficulty is that the quantity of interest — what a learner would have done without AI — is unobserved. The paper uses a proxy signature and a screening gate, and both are imperfect. Roster-linked users drop out of the activity filter more often (43.3% versus 33.5%), so part of the null may be attrition rather than the absence of harm. The ICPC filter chain drops 56% of participants for low activity, and an exit process that removes substitute-users would manufacture the asymmetry. The author addresses these concerns directly, reporting the sensitivity analyses rather than the headline alone, and names the next steps: variation in when gates are introduced or removed, other AI-prohibited assessments such as medical boards and bar exams, and direct measurement of AI use.

For [[cs-education]] the question is practical. Competitive programming is a high-stakes training ground where learners deliberately seek [[desirable-difficulties|desirable difficulties]], and a tool that resolves those difficulties for them may leave the underlying skill unformed. The screening result suggests that assessments taken without AI can still separate the two kinds of user, which is reassuring for credentialing. But it also implies that open practice environments give no such signal, so learners who substitute may not discover the cost until a proctored setting exposes it.

## What this means for practice

- **Instructors.** Treat practice records as diagnostic. A student whose submissions suddenly become first-attempt, few-retry, and fast may be delegating the debugging that builds judgment, not accelerating.
- **Assessment designers.** Preserve AI-prohibited, proctored assessments as a check on skill formed during open AI-assisted practice; they are the gate that separates complement-use from substitute-use.
- **Educational technology developers.** Instrument practice platforms to surface dependency patterns to learners themselves, since open platforms provide no external screening.
- **Researchers.** Test the substitute-versus-complement distinction with designs that vary gate introduction, and measure AI use directly rather than inferring it from behavior.

## Limitations

- The cohort contrast is not cleanly timed to AI: parallel pre-trends fail, and a gradual change in practice norms plus maturation could explain the shift, so the paper labels the pattern descriptive.
- The AI-prompt signature is inferred from telemetry, not measured; no user-level report or platform log identifies whether a learner actually used AI on a given submission.
- Screening is not random assignment to AI use. Roster linkage depends on qualification, and the filter chain drops 56% of ICPC participants for low activity, which could itself remove substitute-users.
- Roster-linked users leave the activity filter more often than non-rostered users (43.3% versus 33.5%), so the screened-arm null may partly reflect attrition.
- The rating-gain result is sensitive: a confounder explaining 2.4% of residual variance would eliminate it, although baseline rating explains 15.7%.
- The setting is competitive programming, an unusual population of highly motivated self-directed learners, which limits generalization to classroom [[cs-education]].

## Citation

Yao, S. (2026). [When the scaffold stays on: AI, practice style, and screening in elite skill formation](https://arxiv.org/abs/2606.06253). *arXiv preprint arXiv:2606.06253.*
