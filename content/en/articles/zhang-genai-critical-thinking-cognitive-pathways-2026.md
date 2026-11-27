---
title: "Competing cognitive pathways associated with generative AI tool use and self-reported critical thinking in higher education"
created: "2026-11-27T09:45:00-05:00"
updated: "2026-11-27T09:45:00-05:00"
published: "2026-11-26"
type: article
authors: ["Cai Zhang"]
venue: "Frontiers in Psychology, 17, 1999067"
evidence_context: educational
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [self-regulated-learning, metacognition, student-ai-interaction]
technology: [generative-ai, llm]
methods: [quantitative-research]
discipline: [business education]
level: [undergraduate]
audience: [instructors, researchers, instructional designers]
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
sources: ["raw/papers/zhang-genai-critical-thinking-cognitive-pathways-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Zhang (2026) tests two competing explanations for how [[generative-ai]] use relates to [[critical-thinking]] among university students: one running through [[self-regulated-learning]], the other through [[cognitive-offloading]]. In a cross-sectional survey of 378 [[undergraduate-education|undergraduates]] at 10 [[higher-ed|universities]] in Jiangsu Province, China, the direct association between AI tool use and [[self-report-measures|self-reported]] critical thinking was not significant (β = −0.059), but two indirect pathways were, in opposite directions. AI use was positively associated with self-regulated learning (β = 0.431), which was positively associated with critical thinking (β = 0.368); AI use was also positively associated with cognitive offloading (β = 0.390), which was negatively associated with critical thinking (β = −0.409). The two indirect effects were nearly equal in size (0.147 and −0.148), so the study's headline is a competing-pathway pattern rather than a verdict on whether AI helps or harms.

## Key Findings
1. **No significant direct association.** GenAI tool use was not directly associated with self-reported critical thinking once self-regulated learning and cognitive offloading were in the model.
2. **The regulation pathway was positive.** AI use predicted self-regulated learning, and self-regulated learning predicted critical thinking; the indirect effect was 0.147.
3. **The offloading pathway was negative.** AI use predicted cognitive offloading, and cognitive offloading predicted lower critical thinking; the indirect effect was −0.148.
4. **The pathways were similar in magnitude.** A bootstrap contrast of the two single-mediator effects was −0.001, so neither pathway dominated the other.
5. **A sequential pathway also existed.** AI use to self-regulated learning to cognitive offloading to critical thinking was significant and positive at 0.052.
6. **The model explained about a third of the variance.** The predictors accounted for 34.4% of the variance in critical thinking, with self-regulated learning at 18.6% and cognitive offloading at 14.6%.
7. **The sample was heavy with daily users.** Of 378 participants, 58.20% reported using generative AI at least once per day, which the author flags as a limit on generalization.

## What the model tested

The study combines Social Cognitive Theory with Cognitive Offloading Theory. GenAI tool use was measured as a composite of frequency, reliance, perceived efficiency, [[trust|trust]] and verification; self-regulated learning and cognitive offloading were measured as separate mediators; critical thinking was self-reported evaluative practice and perceived capability. The structural model fit the data well (χ²/df = 1.134, CFI = 0.993, RMSEA = 0.019, SRMR = 0.032), but the author notes that the global fit is identical to the measurement model because the structural portion specifies all six ordered paths, so the fit indices say nothing about causal direction.

The bootstrap analysis matters more than the fit. It shows that the total association between AI use and critical thinking was close to zero (B = −0.004), not because nothing was happening but because a positive and a negative route were roughly canceling. The contrast test was designed to check whether one route was stronger; it was not. That is a descriptive pattern in one sample, not evidence of a stable equilibrium, and the author says so.

## Why offloading is not automatically bad

The discussion draws a distinction the field often blurs. Cognitive offloading in a GenAI context can mean delegating memory or search, as with earlier tools, but it can also mean delegating explanation, argument structure and reasoning. The second is more consequential for critical thinking, and the measure used here does not separate strategic offloading from dependency-oriented use. That gap is the study's most useful warning for practice: a student who offloads a look-up and a student who offloads a judgment may score similarly on an offloading scale while learning very different things.

The self-regulation pathway suggests the counterweight. Students who set goals, monitor their understanding and evaluate output appear to convert AI use into critical-thinking practice rather than away from it. The negative association between self-regulated learning and cognitive offloading (β = −0.318) is consistent with that reading: more regulation went with less reported offloading in this sample.

## What this means for practice

- **Instructors.** Design the sequence, not just the task. Ask students to commit an initial interpretation before consulting AI, then compare, evaluate and document how their judgment changed.
- **Instructional designers.** Make reasoning visible through [[process-oriented-assessment]]: drafts, revision notes and justification, not only final answers.
- **Faculty developers.** Treat "thinking first, AI second" as a hypothesis to test in a local design, not as an established protocol; the study supports the rationale but did not test the intervention.
- **Researchers.** Separate strategic from dependency-oriented offloading and measure critical thinking with a performance task. Self-report cannot tell the two patterns apart.

## Limitations

- Cross-sectional design: the paths cannot establish temporal order or causality, and a reversed model remains plausible.
- All constructs were self-reported at one time point by the same respondents; the first unrotated factor accounted for 32.27% of variance, so common-method bias cannot be ruled out.
- Critical thinking was self-reported evaluative practice, not demonstrated ability.
- The offloading measure does not distinguish strategic support from dependency, which is central to the interpretation.
- Convenience sampling from 10 universities in one province, with 58.20% daily users, limits generalization.

## Citation

Zhang, C. (2026). [*Competing cognitive pathways associated with generative AI tool use and self-reported critical thinking in higher education*](https://doi.org/10.3389/fpsyg.2026.1999067). *Frontiers in Psychology, 17*, 1999067.
