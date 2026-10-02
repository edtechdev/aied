---
title: "Who Thinks First? Designing Productive Friction with Engage-to-Unlock GenAI"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/engage-to-unlock-productive-friction-genai-2026.md']
confidence: high
page_kind: [framework]
research_method: [experiment]
discipline: [writing education]
level: [adult learning]
audience: [instructors, researchers, educational technology developers]
pedagogy: [desirable-difficulties, student-engagement, self-regulated-learning, metacognition, scaffolding]
technology: [generative-ai, prompt-engineering, conversational-ai, llm, adaptive-learning]
assessment: [evaluative-judgment, self-report-measures]
methods: [rct, quantitative-research]
ethics: [trust-calibration, ai-misuse-learning-harm, guardrails]
foundations: [cognitive-offloading, critical-thinking, human-ai-collaboration, agency]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Su et al. (2026) introduce Engage-to-Unlock, an interaction mechanism that withholds a [[llm|language model's]] direct text-generation capability until a writer has articulated a position and at least one supporting argument, then measures how this [[desirable-difficulties|productive friction]] shapes [[writing-education|argumentative writing]] and later evaluation. In a controlled experiment with 398 participants across four access conditions, Engage-to-Unlock redistributed effort rather than adding it: writers spent more time writing and reported greater required effort, yet total task duration did not differ, and they completed a subsequent [[evaluative-judgment|passage-evaluation]] task faster with comparable accuracy. Compared with a time-matched control that unlocked on the same schedule regardless of the writer's own contribution, engagement-based unlocking produced more [[prompt-engineering|prompting]] and more efficient error classification, separating the value of responsiveness from the value of delay alone. The authors frame the result as a shift from designing AI for effort reduction toward designing for effort allocation, gating specific capabilities on demonstrated human contribution.

## Key Findings

1. Engagement-based unlocking redistributed effort: Engage-to-Unlock writers spent more time writing (M = 28.02 min versus 23.26 min under Standard Chatbot) and reported greater required effort (M = 5.15 versus 4.47), without increasing total task duration.
2. Evaluation became faster and equally accurate. Engage-to-Unlock participants completed the eight-item passage evaluation in 17.41 min, versus 22.21 min (Standard Chatbot) and 20.29 min (Time-Matched Unlock), while overall judgment accuracy stayed between 61.61% and 66.36%.
3. Participants prompted more. Engage-to-Unlock participants submitted an average of 7.70 prompts, more than Time-Matched Unlock (5.40) and Standard Chatbot (3.35), with most interaction continuing in Teach-me mode even after Tell-me became available.
4. Error classification improved once a flaw was detected (90.43% versus 78.12% under Standard Chatbot), but this advantage did not extend to statistically significant complete-diagnosis gains across all flawed passages.
5. Less AI text was incorporated. Final-essay coverage by verbatim AI-response text averaged 27.32% under Engage-to-Unlock, below Standard Chatbot's 47.16% and statistically indistinguishable from Time-Matched Unlock (24.51%).
6. Delay alone did not reproduce engagement. Of the 60 Time-Matched Unlock participants who received an early unlock, only 22 (36.7%) had met the position-and-argument criteria, and 16 still had empty drafts.
7. No significant differences were detected in process control, outcome satisfaction, document ownership, or workflow disruption across the AI-assisted conditions.

## Where friction should be placed

The [[generative-ai|generative AI]] the study targets is capable of substantial cognitive work: ideation, synthesis, reasoning, and drafting. Making it immediately and frictionlessly available risks premature delegation, in which model output becomes the starting point for human work rather than a response to a position the writer already holds. The paper treats this as more than a loss of effort. When generative assistance enters before a writer has formed an independent representation, it can shape the positions expressed and the extent to which the resulting text reflects the writer's intentions. Prior interventions that address [[cognitive-offloading|overreliance]] mostly add friction at the point of AI-assisted judgment — cognitive forcing functions that require reasoning before recommendations appear. Engage-to-Unlock instead concentrates friction earlier, at the stage where independent human contribution is most valuable, and leaves the system otherwise usable. The design question the authors draw out is not whether to add friction, but where in the workflow it should sit.

## A capability boundary, not a ban

Rather than blocking AI altogether, Engage-to-Unlock conditions access to one capability — direct generation — while preserving a [[conversational-ai|conversational assistant]], called Teach-me, throughout. A second assistant, Tell-me, becomes available when an LLM-based discourse classifier detects both a position and a supporting claim in the draft, and the interface shows progress on a circular indicator. The authors call this a capability boundary and position it as [[scaffolding|scaffolding]] rather than prohibition: early in a task a system might support retrieval or reflection without producing the target text, later support critique or comparison, and finally generation for rewriting. They connect it to automation research showing that functions can be automated to different degrees, and they argue the design question shifts from "Should this user have access to AI?" to "What should this AI be able to do for this user, at this moment?"

## Delay is not the same as engagement

The experiment's strongest test compares Engage-to-Unlock with a yoked Time-Matched Unlock condition that received Tell-me at the same elapsed writing time as a matched participant, regardless of the yoked writer's own progress. The two conditions received generative capabilities at comparable moments, yet the Time-Matched group submitted fewer prompts (5.40 versus 7.70) and evaluated passages more slowly (20.29 versus 17.41 min). The authors also report that timing did not reproduce engagement: in nearly two-thirds of the cases where a Time-Matched participant received an early unlock, the draft had not met the discourse criteria that would have triggered it under Engage-to-Unlock — 38 of 60 unlocked participants, including 16 with empty drafts. This separates friction that responds to [[student-engagement|engagement]] from friction caused by waiting.

## What this means for practice

- **Instructors.** Treat withholding generation as a design choice, not a ban: the study's friction reduced verbatim AI-text coverage in final essays (27.32% versus 47.16%) while keeping the assistant available for conversation, so writers still got support for retrieval, questioning, and reflection.
- **Instructors.** Ask for a position and a supporting argument before generative help arrives. Requiring these two elements is what the mechanism gated on, and it front-loaded the sensemaking that participants later drew on to evaluate AI-generated content faster.
- **Instructors.** Do not expect delayed access alone to do the work. The time-matched condition unlocked on schedule yet often opened before writers had articulated anything; design the trigger around evidence of engagement.
- **[[educational-technology-developers|Educational technology developers]].** Consider [[adaptive-learning|adaptivity]] across capabilities rather than at the system level: the paper's boundary exposed one capability while leaving conversational assistance intact, and its authors suggest varying which capabilities are gated by expertise, task stakes, or demonstrated engagement.

## Limitations

- A client-side timer stopped replaying scheduled events at 20 minutes, so 14 of 94 Time-Matched Unlock participants never received their scheduled unlock, weakening how precisely that comparison isolates contribution-based access.
- Time-Matched Unlock participants were recruited in a separate second phase, so differences involving that condition may reflect cohort or recruitment differences; only the three Phase 1 conditions retained random assignment.
- The study is a short-term, writing-focused experiment with no follow-up, so it cannot show whether the engagement changes persist, transfer to later unassisted performance, or generalize beyond argumentative writing.
- The sample was a Prolific pool across five English-speaking countries; 97.5% held an undergraduate degree and the mean age was 35.7 years, limiting generalization to other learner populations.

## Citation

Su, X., Rimell, L., Li, J., Rannen-Triki, A., Paquet, U., Hendricks, L. A., Qadri, R., Ippolito, D., & Mirowski, P. (2026). [*Who Thinks First? Designing Productive Friction with Engage-to-Unlock GenAI*](https://arxiv.org/abs/2610.01518). arXiv:2610.01518.
