---
title: "When Does GenAI Use Support Critical Thinking? A Cross-Cultural Structural Account of Transactive Memory with GenAI"
created: "2026-10-30T09:37:00-04:00"
updated: "2026-10-30T09:37:00-04:00"
type: article
published: "2026-10-28"
sources: ['raw/papers/akgun-toker-genai-critical-thinking-transactive-memory-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [structural equation modeling]
discipline: []
level: [higher ed, undergraduate]
audience: [instructors, researchers, curriculum designers]
pedagogy: [self-efficacy, metacognition, student-ai-interaction]
technology: [generative-ai, llm]
assessment: []
methods: [quantitative-research]
institutions: []
ethics: [trust-calibration]
foundations: [critical-thinking, human-ai-collaboration, ai-literacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes, links]
---

> **Synthesis:** Akgun and Toker (2026) reframe the question of whether [[generative-ai|generative AI]] helps or harms [[critical-thinking]] as a question about structure rather than exposure. Extending transactive memory systems theory to human-AI partnership, they model how 891 college students in the United States and Türkiye divide cognitive labor with a chatbot and rework what it produces. Neither self-appraised thinking ability nor confidence in the partnership predicted critical thinking directly; both worked through accumulated GenAI experience, and that experience mattered only through two behaviors — specialization and coordination of labor, and reflective transformation of output. A multigroup comparison found the structure largely invariant across the two countries, with two interpretable exceptions. The design is cross-sectional and the outcome is self-reported, which the authors state plainly.

## Key Findings
1. **Confidence and self-appraised ability did not predict critical thinking directly.** Both shaped how much experience a person accumulated with GenAI (b = 0.140 and b = 0.430 respectively), and the direct paths to critical thinking enactment were non-significant.
2. **Mediation was full.** GenAI familiarity predicted both specialization and coordination (b = 0.636) and reflective transformation (b = 0.367), and both mediators predicted critical thinking enactment (b = 0.230 and b = 0.175), leaving no direct effect.
3. **Structure, not familiarity, is the active ingredient.** The authors read the fully mediated pathway as evidence that critical thinking depends on how a user organizes the partnership, not on how much they know about the tool.
4. **Confidence compensated rather than added.** The interaction of ability to think and collaboration confidence was negative (b = −0.104), a buffering pattern in which confidence mattered more for users with weaker self-appraised thinking.
5. **The model fit well and held across countries.** Pooled fit was strong: χ2(8) = 24.258, CFI = 0.974, TLI = 0.980, RMSEA = 0.048, SRMR = 0.024, and the multigroup comparison supported partial invariance.
6. **Two paths were culturally conditioned.** The non-invariant paths are interpreted through power-distance and individualism-collectivism, with the confidence-buffering effect read as more valuable in the higher-collectivism setting.

## What transactive memory adds

The theory is about knowing who knows what. In human teams, a transactive memory system lets members specialise, trust each other's expertise, and coordinate without restating everything. Extending it to a chatbot requires treating the model as a knowledge partner whose competence is inferred and whose outputs must be integrated — which is precisely where the interesting failure modes live.

The measurement follows that logic. Specialization and coordination capture whether a student carved out a division of labor with the tool; reflective transformation captures whether they treated the first output as a draft to be reworked or as an answer to be accepted. Both are self-report scales, and the authors acknowledge the resulting common-method risk.

## Why the null direct effects matter

Most of the debate about [[ai-literacy]] assumes that familiarity or confidence should translate into better thinking. This model says they do not, and that the translation runs entirely through behavior. For a field that frequently measures adoption and attitudes, that is a useful negative result: hours of use and self-rated competence are not proxies for the thing educators care about.

It also reconciles two literatures that looked contradictory. Studies finding benefit tend to describe structured, iterative use; studies finding harm tend to describe acceptance of the first output. If the mediating behaviors are what differ, both findings can be true at once, and the intervention point moves from "use it more" to "use it this way."

## What the cross-cultural comparison supports

The invariance testing is the part most likely to be over-read. The authors found the structure largely stable and two paths that differed, then explained the differences with cultural theory drawn from adjacent literatures rather than tested directly. The Turkish sample was also smaller than the US sample, which the authors note may have reduced power for detecting group-specific effects.

Read conservatively, the comparison says the mechanism is not obviously an artifact of one national sample. It does not establish that culture moderates the mechanism, because the explanation is post hoc and the design cannot separate culture from sampling.

## What this means for practice

- **Instructors.** Teach the division of labor explicitly. A course that assigns the tool a defined role — draft generator, critic, explainer — and requires the student to rework its output is teaching the two behaviors the model says carry the effect.
- **Curriculum designers.** Do not treat familiarity or confidence as outcomes. Both were inputs to experience here and neither reached critical thinking on its own, so a curriculum whose success measure is comfort with the tool is measuring the wrong node.
- **Instructors.** Watch the students who are most confident. Confidence helped build experience most for those with weaker self-appraised thinking, and the authors warn that the same compensatory [[self-efficacy|belief]] carries costs for dependency in other literatures.
- **Researchers.** Measure the mediating behaviors, not just exposure. The full mediation means a study relating usage to outcomes is likely to find nothing, and will be read as evidence of no effect rather than of no mechanism.

## Limitations

- The design is cross-sectional, so causal ordering between confidence, experience and critical thinking is not established, as the authors state.
- Critical thinking enactment was operationalized as a binary self-report item, which limits precision relative to a continuous scale and shares method variance with the predictors.
- The Turkish sample was smaller than the United States sample, reducing power for group-specific effects.
- The cultural explanations for the two non-invariant paths draw on adjacent literatures rather than direct tests of the transactive memory framework.
- Confidence's compensatory role is read only for its benefit to familiarity; the authors note its documented costs for job insecurity and dependency were not measured.

## Citation

Akgun, M., & Toker, S. (2026). [*When Does GenAI Use Support Critical Thinking? A Cross-Cultural Structural Account of Transactive Memory with GenAI*](https://arxiv.org/abs/2610.38910). arXiv:2610.38910.
