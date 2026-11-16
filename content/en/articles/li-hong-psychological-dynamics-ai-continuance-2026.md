---
title: "The psychological dynamics of AI in education: how bright traits and dark apprehensions relate to perceived academic performance and continuance intention"
created: "2026-11-16T09:09:00-05:00"
updated: "2026-11-16T09:09:00-05:00"
type: article
authors: ["Li, X.-R.", "Hong, P.-T."]
published: "2026-11-13"
venue: "Frontiers in Psychology"
source_url: https://doi.org/10.3389/fpsyg.2026.1939632
sources: ['raw/papers/li-hong-psychological-dynamics-ai-continuance-2026.md']
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [survey, structural equation modeling]
page_kind: [evaluation]
level: [undergraduate]
audience: [instructors, faculty developers, researchers]
discipline: [teacher education]
foundations: [ai-education]
pedagogy: [motivation, self-efficacy]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
---

> **Synthesis:** Li and Hong surveyed 655 [[teacher-education|preservice teachers]] at [[higher-ed|four Chinese universities]] and modeled the path from two "bright" dispositions — perseverance of effort and consistency of interest — and two "dark" ones — technophobia and creepiness — to perceived usefulness, confirmation, perceived AI-assisted performance and intention to keep using [[generative-ai|generative AI]]. The model explained 56.8% of the variance in continuance intention, driven mainly by confirmation (β = 0.710) and perceived usefulness (β = 0.471). Technophobia predicted creepiness strongly (β = 0.649), and creepiness carried a small positive association with self-reported performance (β = 0.095, p = 0.006) while its direct path to continuance intention did not reach significance. The counter-intuitive result is the paper's point: discomfort with the tool did not translate into intention to stop using it.

## Key Findings

- **Confirmation and usefulness carried continuance intention.** Confirmation drove perceived usefulness and usefulness drove the intention to keep using generative AI, with perceived performance adding a further path.
- **The two grit dimensions behaved differently.** Perseverance of effort predicted confirmation but not perceived usefulness, while consistency of interest predicted both.
- **Technophobia fed creepiness almost mechanically.** The path from general technology fear to interaction-specific discomfort was the strongest relationship in the model.
- **Creepiness did not deter continued use.** Its direct path to continuance intention was not significant (p = 0.065), and its association with self-reported performance was small but positive.
- **Perceived performance was mostly a usefulness story.** Usefulness predicted perceived AI-assisted performance while confirmation's direct path did not reach significance.
- **The model explained over half the variance in intention.** Explained variance was 0.568 for continuance intention and 0.373 for perceived performance, with acceptable approximate fit.


## How the model was built

The framework combines the Expectation-Confirmation Model, Two-Factor Theory and Cognitive Appraisal Theory, with grit's two dimensions supplying the "bright" traits and technophobia plus creepiness the "dark" ones. Eight constructs were measured with 24 seven-point items adapted from validated scales, drawn from a 66-item questionnaire administered to preservice teachers at four universities. Of 724 [[self-report-measures|questionnaires]] collected, 69 were removed for invariant response patterns, leaving 655.

Analysis used partial least squares structural equation modeling, with reliability, convergent and discriminant validity checked first. Two heterotrait-monotrait ratios exceeded the conservative 0.85 threshold but stayed below 0.90: perseverance–consistency at 0.871 and usefulness–confirmation at 0.880. Perceived AI-assisted academic performance was measured by self-report — confidence, assignment completion and task efficiency — not by grades.

## Reading the dark side correctly

The path estimates are worth stating plainly: confirmation to perceived usefulness at β = 0.710, usefulness to continuance intention at β = 0.471, perceived performance to intention at β = 0.374, and technophobia to creepiness at β = 0.649 (f² = 0.727). Creepiness reached perceived performance at β = 0.095 (p = 0.006) and continuance intention at β = −0.044 (p = 0.065). The finding that deserves attention is the near-absence of a deterrent effect. A student who finds generative AI unsettling reports more creepiness, and creepiness does not reduce the intention to keep using it. The authors note that discomfort and continued use can coexist, and they call for direct measures of verification behavior and coping to explain the positive creepiness–performance link.

Explanations are available and untested here. A student who finds a tool uncanny may verify its outputs more, and self-reported performance may capture that diligence. Alternatively, the item wording for creepiness and technophobia shares expressions of fear and threat, so the distinction between general technology apprehension and interaction-specific discomfort may be partly measurement. The paper reports discriminant validity but concedes the overlap.

For a teacher education program the implication is about dispositions rather than adoption. Consistency of interest — the stable-interest half of grit — did the work that perseverance did not, predicting both confirmation and usefulness, which suggests that students who stay interested in the subject rather than grinding through tasks are the ones who find the tool useful for learning.

## What this means for practice

- **Instructors:** do not read discomfort as resistance. Students who report finding AI creepy still intend to use it, so a course that addresses unease by removing the tool removes it from students who were going to use it anyway.
- **Faculty developers:** build verification into AI tasks. The one mechanism that could explain why discomfort coincided with higher self-rated performance is more checking, and checking is teachable.
- **Instructors:** support stable interest rather than sheer persistence. Consistency of interest predicted both perceived usefulness and confirmation; perseverance predicted only confirmation.
- **Researchers:** measure creepiness and technophobia with differentiated items before treating them as separate constructs; the two share fear and threat wording.
- **Administrators:** treat continuance intention as an outcome shaped by perceived benefit, not by comfort. Usefulness and confirmation, not unease, drove intention in this sample.

## Limitations

- The design is cross-sectional, so no causal claim about the psychological antecedents or about changes in use over time is supported.
- Perceived AI-assisted academic performance was self-reported confidence, completion and efficiency rather than verified grades, and a single survey raises common-method-bias concerns.
- The sample is 655 preservice teachers at four Chinese universities, and the study pooled generative AI applications without distinguishing platforms or tasks.
- Technophobia and creepiness share item wording about fear and perceived threat, so their separation rests on statistical rather than conceptual distinctness.
- The unexpected positive creepiness–performance path is unexamined; no measure of verification behavior or coping was collected.

## Citation

Li, X.-R., & Hong, P.-T. (2026). [*The psychological dynamics of AI in education: How bright traits and dark apprehensions relate to perceived academic performance and continuance intention*](https://doi.org/10.3389/fpsyg.2026.1939632). *Frontiers in Psychology*, 17.
