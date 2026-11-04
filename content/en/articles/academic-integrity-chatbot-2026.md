---
title: "Preliminary evaluation of an AI-powered chatbot for academic integrity support in higher education"
published: "2026-11-02"
created: "2026-11-03T09:20:00-05:00"
updated: "2026-11-03T09:20:00-05:00"
type: article
sources: ['raw/papers/academic-integrity-chatbot-2026.md']
source_url: "https://doi.org/10.1007/s44217-026-02381-1"
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study]
level: [higher ed]
audience: [administrators, instructional designers, researchers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
foundations: [academic-integrity]
technology: [conversational-ai, generative-ai]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
---

> **Synthesis:** Huynh, Huynh, Shaker and Al Abadi put 84 academic-integrity scenarios to A-Integrity Buddy, a [[conversational-ai|chatbot]] built to give policy-aligned guidance inside one Australian university, and had three institution-based experts rate each first response for policy alignment and adequacy. The mean rating was 4.56 out of 5 (95% bootstrap interval [4.45, 4.65]), and the ordinally weighted [[assessment-validity|Gwet's AC2]] was 0.911, but exact three-rater agreement held for only 39.3% of scenarios — the coefficient reflects near-agreement inside the top categories rather than uniform judgment. The authors call the result an internal formative benchmark, because the same panel had helped write the scenarios and because a single fixed response per scenario was rated.

## Key Findings

1. **Expert ratings were positive and tight.** Across 84 scenarios the mean scenario rating was 4.56 on a five-point scale (95% bootstrap interval [4.45, 4.65]), with 252 individual ratings from three experts concentrated in the upper categories.
2. **Difficulty categories did not order the ratings.** Easy scenarios averaged 4.71, Medium 4.43 and Difficult 4.52 — not monotonic, which the authors attribute to differences in policy-domain composition rather than to complexity.
3. **Weighted agreement was high, exact agreement was not.** Ordinally weighted Gwet's AC2 was 0.911 (95% CI [0.886, 0.935]) while exact agreement across all three raters occurred for 39.3% of scenarios.
4. **The scenario bank was purposive, not prevalence-weighted.** 84 author-developed scenarios in Easy (n = 30), Medium (n = 27) and Difficult (n = 27) categories, with difficulty labels assigned by the authors rather than validated.
5. **The raters were not independent of the tool's designers.** The same expert panel contributed to scenario development and to response evaluation, so incorporation, expectancy and confirmation effects cannot be excluded.
6. **Only one fixed response was captured per scenario.** All 84 scenarios were entered sequentially in one conversation, so retained history may have influenced later answers; fresh-session stability and repeated generations were not tested.
7. **The chatbot's backend is not reproducible.** The paper states that exact computational reproduction of response generation is impossible because the backend model snapshot and platform-level settings are not available.

## What was actually measured

The study is best read as a quality-assurance exercise rather than validation. Its question is whether a policy-constrained chatbot's answers look acceptable to the people who know the policy, and the answer is that they mostly do, with a lower tail the authors mined for design guidance. Their conclusion names three fixes taken from those low-rated cases: uncertainty-first wording, explicit contextual checks, and human escalation.

That is a defensible use of a small internal evaluation, and the paper is unusually candid about the ceiling on its claims. It does not establish accuracy against a gold standard, reliability across generations, or anything about what students learn or do.

## Academic integrity as an educative function

The design orientation is the [[academic-integrity|academic integrity]] literature's shift from detection to education: a chatbot answering "is this allowed?" questions with policy citations reaches students at the moment of doubt rather than after a misconduct finding. The authors position A-Integrity Buddy that way, and the scope is deliberately narrow — one institution's policy, one Australian context, one tool.

For institutions considering a similar assistant, the more transferable finding is about governance of the tool itself: policy ownership and version control need an owner, because an assistant that quotes a superseded policy is worse than no assistant. The authors flag this in their future-work section.

## What the numbers can and cannot carry

A three-rater panel rating 84 fixed outputs yields 252 judgments, which is enough to describe upper-tail consensus and not enough to estimate generalizable accuracy. The weighted coefficient's size is partly an artifact of clustering: when nearly all ratings sit at 4 or 5, an ordinal weight makes disagreement look small, which is why the authors report exact agreement beside it.

Because the raters helped build the scenarios, the benchmark tests whether the tool matches the panel's own expectations rather than whether it matches [[educational-policy-ai|institutional policy]] as written. An independent, blinded panel reading the same outputs against the same policy document is the obvious next step, and the paper says so.

## What this means for practice

- **Use an internal expert benchmark as a first filter, not as evidence of accuracy.** A positive mean from colleagues who wrote the test cases answers "does this look right to us", not "is this right".
- **Read the lower tail, not the mean.** The authors' design guidance — uncertainty-first wording, explicit context checks, human escalation — comes from the worst-rated responses rather than from the average.
- **Assign an owner for policy versioning.** A guidance chatbot quoting an outdated policy is a governance failure, so policy ownership and audit belong in the deployment plan.
- **Test fresh sessions and repeated generations before rollout.** This evaluation rated one fixed response per scenario from a single conversation, which is not how students will use the tool.

## Limitations

- **Single institution and a three-person panel.** All ratings come from institution-based experts at one Australian university, with no independent blinded validation or external gold standard.
- **Rater–designer overlap.** The same panel developed the scenarios and rated the responses, so expectancy and confirmation effects cannot be excluded.
- **Author-assigned difficulty labels.** Easy, Medium and Difficult were not validated as a construct and differed in policy-domain composition, so category comparisons are descriptive only.
- **One generation per scenario, sequentially in one conversation.** Conversation history may have influenced later responses; model and temporal stability were not tested, and the backend snapshot cannot be reproduced.
- **No student or staff end-user data.** Nothing in the study measures whether the guidance is used, understood or acted on.

## Citation

Huynh, T., Huynh, T., Shaker, A., & Al Abadi, H. (2026). [*Preliminary evaluation of an AI-powered chatbot for academic integrity support in higher education*](https://doi.org/10.1007/s44217-026-02381-1). Discover Education, 5, 1286.
