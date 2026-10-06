---
title: "Generative artificial intelligence-supported self-regulated learning (GenAI-SRL) in L2 writing: scale development, validation, and short-form construction"
created: "2026-10-06T01:53:34-04:00"
updated: "2026-10-06T01:53:34-04:00"
type: article
foundations: [human-ai-collaboration, limitations-in-aied-research, academic-integrity]
pedagogy: [self-regulated-learning, metacognition, motivation]
technology: [generative-ai, llm, conversational-ai]
assessment: [self-report-measures, educational-measurement, assessment-validity]
methods: [quantitative-research]
research_method: [instrument development, structural equation modeling]
discipline: [writing education, language learning]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/genai-srl-l2-writing-scale-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-06"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Wang, Zhang, and Zhang (2026) develop and validate the GenAI-SRL scale, a [[self-report-measures|self-report]] instrument for measuring how learners regulate their writing when they compose with [[generative-ai|generative AI]]. Working from a six-dimension framework — cognitive, metacognitive, motivational, affective, social-behavioral, and environmental regulation — they analyze two independent samples of Chinese EFL university learners with exploratory factor analysis (N = 305) and confirmatory factor analysis (N = 342). The six-factor structure holds, the scale shows satisfactory reliability and validity, and measurement invariance across gender is supported; ant colony optimization then yields a 12-item short form that tracks the full instrument closely. The paper's distinctive contribution is environmental regulation, which treats learners' governance of their own GenAI use — checking output accuracy, filtering suggested resources, and setting boundaries on reliance — as a regulatory dimension in its own right.

## Why existing SRL scales needed reframing

The six dimensions are not new in themselves: prior L2 writing instruments such as the Writing Strategies for Self-Regulated Learning Questionnaire already captured cognitive, metacognitive, motivational, and social-behavioral regulation. The paper's argument is that these frameworks were built for human-centered teaching and cannot capture the moment-to-moment coordination that GenAI introduces, where textual production arises from learner–algorithm interaction. Affective regulation had sometimes been merged with [[motivation]], and environmental regulation was largely absent even though it had been explicitly called for. In GenAI-supported writing, learners must manage a dynamic socio-technical resource — prompt management, critical evaluation of generated content, and selective integration — and critically govern their own reliance on it. GenAI-SRL is therefore framed as a unified process in which using GenAI as a compositional resource and governing that use are mutually constitutive parts of regulatory activity.

## Two-wave design and item development

Participants were students at universities in China who reported prior experience using GenAI tools for foreign language writing, recruited through snowball sampling; all had received at least 10 years of English learning and were expected to take the College English Test Band 4, with many also taking Band 6, examinations whose writing task contributes 15% of the total score and which more than 85% had passed. Of 777 collected responses, 647 were retained after screening out completion times under 100 s, identical responses, no reported AI use for writing, and failed attention checks. Sample one (N = 305; 127 males, 178 females; aged 17 to 40, M = 21.83) was used for exploratory factor analysis, and sample two (N = 342; 135 males, 207 females; aged 18 to 35, M = 22.15) for confirmatory factor analysis.

The initial item pool was built from existing SRL writing scales, 12 semi-structured interviews with undergraduate foreign language learners (10 open-ended questions, roughly 30 minutes each), and expert review. Three experts rated each item's relevance, and applying an item-level content validity index of 1.00 and a scale-level average of 0.90 reduced the pool from 50 items to 42. A pilot with 50 EFL learners led to three items being reworded, and a seven-point scale was used throughout.

## The six-factor structure and its validation

Before extraction, all 42 items differentiated the top and bottom 27% of respondents and all item-total correlations exceeded 0.30. The Kaiser-Meyer-Olkin value was 0.937 and Bartlett's test of sphericity was significant, χ²(561) = 6577.426, p < 0.001. Eight items failed the loading criteria and were removed, leaving 34 items; six factors with eigenvalues above one accounted for 60.740% of the variance, and factor loadings ranged from 0.542 to 0.786.

Confirmatory factor analysis on sample two confirmed the six-factor model: χ²(512) = 1008.486, χ²/df = 1.970, CFI = 0.934, TLI = 0.928, RMSEA = 0.053, and SRMR = 0.042. Cronbach's α ranged from 0.761 (social-behavioral) to 0.943 (metacognitive), composite reliability from 0.759 to 0.943, and average variance extracted from 0.513 to 0.675; all heterotrait-monotrait ratios fell below 0.85. Across gender, configural fit (χ²(1024) = 1652.277, CFI = 0.920, TLI = 0.913, RMSEA = 0.060) held through metric and scalar constraints with ΔCFI ≤ 0.003, ΔTLI ≤ 0.001, and ΔRMSEA = 0.000. For criterion validity, all six dimensions correlated positively with learners' perceived writing gains (r = 0.275–0.338, p < 0.001), and the dimensions intercorrelated from 0.428 to 0.558.

## A 12-item short form from ant colony optimization

To build a shorter instrument, the two samples were merged and split into a training subset (70%; n = 453) and a validation subset (30%; n = 194). Ant colony optimization ran 10 random seeds with a colony size of 20 ants, a pheromone evaporation rate of 0.10, a maximum of 1,000 iterations per run, and 50 runs per seed, and the two items most frequently selected per dimension were kept, giving the 12-item GenAI-SRL-12. Its six-factor confirmatory model showed acceptable fit (χ²/df = 1.891, CFI = 0.959, TLI = 0.931, RMSEA = 0.068, SRMR = 0.043), with Cronbach's α from 0.657 to 0.849, composite reliability from 0.710 to 0.854, and average variance extracted from 0.544 to 0.742. Each short-form dimension correlated with its full-scale counterpart between r = 0.910 and 0.944, and short-form intercorrelations (r = 0.344–0.462) followed the full-scale pattern. Two items per dimension nonetheless cover a narrower range of content than the full scale, so the authors advise the full version when sub-dimensional structure matters.

## Relevance to the knowledge base

This is a measurement study rather than an intervention, and its natural home is [[self-regulated-learning|SRL]], which it extends into GenAI-mediated composing in the same territory as [[writing-education]] and [[discipline-specific-aied]]. Where [[critical-thinking]] is usually treated as a general propensity, here it appears as the critical evaluation threaded through cognitive regulation — deciding whether to accept, modify, or reject generated suggestions rather than generating content independently. The scale is also a rare instrument built specifically for L2 writing with GenAI, complementing work on feedback and [[help-seeking]] rather than duplicating it. It should not be conflated with the different [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif and Dickson-Deane (2026)]] study on [[scaffolding]] versus shortcut risk, which is about how students orient to GenAI rather than about how to measure their regulation. The environmental-regulation dimension also links to [[information-technology|IT education]] contexts, where governance of tool use is part of the writing environment.

## What this means for practice

- **Instructors.** Use the 34-item full scale at the start of a writing course to profile each learner's six regulatory dimensions, then the 12-item short form mid-course for formative check-ins that fit classroom time.
- **Instructors.** Require documented GenAI consultation logs alongside written drafts, and ask students to annotate what they accepted, rejected, or modified and why, so governance of GenAI use becomes visible rather than assumed.
- **Instructors.** Differentiate tasks by profile: multi-draft argumentative writing with documented GenAI consultations for learners who regulate well, and structured paragraph frames with GenAI limited to grammar checking for those who do not.
- **Faculty developers.** Treat the environmental and affective dimensions as teachable, not incidental: the scale's items cover choosing a work environment, checking generated content for accuracy and reliability, and using GenAI to manage fear of mistakes and stress.
- **Researchers.** Use the full scale when the internal structure of a regulatory dimension matters, and the GenAI-SRL-12 for large surveys, intervention pre-post designs, and time-limited data collection.

## Limitations

- The paper names no tool generation: it says "GenAI tools such as ChatGPT" with no version anywhere, so the scale's item wording and its validation are tied to an unspecified model generation whose behavior may not carry forward to later models.
- No data-collection window is disclosed: the only dates in the paper are the received (31 December 2025) and accepted (9 June 2026) stamps, so the period in which learners actually used GenAI cannot be placed against any model release.
- Both samples are Chinese EFL university learners recruited by snowball sampling (N = 305 and N = 342), so the authors state the applicability of the findings is limited and call for replication with other age groups and cultural contexts.
- The design is cross-sectional, which the authors state limits causal inference from GenAI-SRL to perceived writing gains; examining how GenAI-SRL and writing achievement change over time needs longitudinal designs.
- Measurement invariance was tested across gender only; invariance across language ability, prior GenAI experience, and age was not examined.
- Criterion validity rests on perceived writing gains measured by three self-report items adapted from Jin et al. (α = 0.861) rather than on observed writing performance.

## Citation

Wang, X., Zhang, L. J., & Zhang, Y. (2026). [*Generative artificial intelligence-supported self-regulated learning (GenAI-SRL) in L2 writing: scale development, validation, and short-form construction*](https://doi.org/10.1007/s11409-026-09481-1). *Metacognition and Learning, 21*, 33. https://doi.org/10.1007/s11409-026-09481-1