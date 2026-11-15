---
title: "High School Students’ Attitudes Toward Generative AI: An Exploratory Factor Analysis of a Novel Measurement Scale"
created: "2026-11-15T06:40:00-05:00"
updated: "2026-11-15T06:40:00-05:00"
type: article
sources: ['raw/papers/schicchi-high-school-genai-attitudes-scale-2026.md']
source_url: "https://doi.org/10.3390/info17060612"
published: "2026-06-22"
confidence: high
evidence_context: educational
audience: [researchers, assessment professionals, instructors]
level: [secondary, k 12]
discipline: [learning sciences]
page_kind: [evaluation]
research_method: [instrument development, survey]
foundations: [theories-and-frameworks, ai-literacy, framing-ai-use-for-students]
pedagogy: [student-ai-interaction, student-experience]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, self-report-measures]
methods: [quantitative-research]
ethics: [digital-divide, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: Hermes-Agent
---

> **Synthesis:** Schicchi and Taibi developed a 19-question instrument for upper secondary students out of the affective–behavioral–cognitive model of attitudes and gave it to 93 Italian high school students in early 2024. Exploratory factor analysis retained three factors — Mindful AI Learning, Embracing AI Effects, and LLM Learning Companion — explaining 56.6% of the variance, with Cronbach's alpha from 0.803 to 0.853. Students were curious and hopeful but used ChatGPT cautiously and did not treat it as human-like. The authors call the work a preliminary exploratory investigation, so it is a promising draft rather than a finished [[educational-measurement|measurement instrument]].

## Key Findings

1. **Attitudes separate into three factors, not the two the study set out to probe.** The authors intended two latent dimensions, general AI use and ChatGPT integration; the solution returned readiness, expected benefit, and hands-on tool use.
2. **The short scale is internally consistent enough for pilot work.** Alpha was 0.803 for Mindful AI Learning, 0.848 for Embracing AI Effects and 0.853 for LLM Learning Companion, with sampling adequacy of 0.833, RMSEA of 0.0428 and TLI of 0.970.
3. **Interest is the highest-rated attitude and reliance the lowest.** Interest in experimenting with new educational technology averaged 3.58 against 2.14 for reliance ("I ask ChatGPT and avoid using the textbook") — curiosity without dependence.
4. **Students see ChatGPT as useful but not as a person.** Usefulness averaged 3.46 against 2.29 for perceived human similarity, evidence that students keep a clear machine boundary.
5. **Belief in AI's benefits is broad, uniform and only loosely tied to use.** Life, work and humanity beliefs clustered tightly (3.35, 3.32, 3.27) and correlated only 0.374 with the LLM factor, so optimism is not a proxy for adoption.
6. **The factors are only weakly related, so attitudes need separate scores.** Correlations ran from 0.318 to 0.374, which argues against collapsing them into one attitude total.

## How the instrument was built

Items were written deductively from the affective, behavioral and cognitive model of attitudes, adapted from computer-attitude scales, and reviewed by four computer science experts. The survey ran in LimeSurvey as 19 questions — demographics, general educational AI, and [[llm|large language models]] — on a 1 to 10 response format, with item retention decided by statistics alone.

From 135 responses, 18 were removed because the respondent was under 16, 12 for incomplete psychometric data and 12 for completion times under 300 s against an average of 1092 s. The final 93 came from three regions (46.2% Lombardy and Veneto, 53.8% Sicily), split almost evenly between technical (50.5%) and non-technical (49.5%) schools. Extraction used maximum likelihood with Oblimin rotation in jamovi. Seven items were dropped for weak or cross-loading patterns.

## What the three factors capture

Mindful AI Learning bundles familiarity, perceived ability, perceived potential and interest — the readiness cluster, mixing what students know about AI with how they feel about it. Embracing AI Effects is purely evaluative, holding the three beliefs that AI will improve one's life, work and humanity. LLM Learning Companion mixes appraisal and behavior: usefulness, perceived human similarity, usage frequency, preference over search engines, textbook avoidance, and whether the interaction changed their view.

The authors present these as mapping directly onto affect, behavior and cognition, but their own item labels do not divide that way: cognitive-labeled items load on the readiness factor, and the LLM factor carries both cognitive and behavioral items. The factors describe domains of experience rather than cleanly reproducing the model.

## What students reported

Means compressed into a band from 2.14 to 3.58. Readiness items reached 3.38 for familiarity, 3.30 for perceived ability, 3.35 for potential and 3.58 for interest; benefit beliefs ranged from 3.27 to 3.35. In the LLM cluster, usefulness reached 3.46, perceived interaction change 2.69, preference over search engines 2.57, usage frequency 2.55, human similarity 2.29 and reliance 2.14.

This is the paper's cautious but optimistic reception: curiosity and hope without dependence. Against general scales such as the AI Attitude Scale and student adaptations of the Student Attitude Toward Artificial Intelligence scale, the contribution is the split between AI in general and one named [[generative-ai|generative AI]] tool in an under-measured population. Because the scoring is unexplained, absolute levels should be read as ordering within this sample.

## What this means for practice

- **Instructors:** use the item set as a cheap pre-unit needs check across the three [[student-ai-interaction|student AI interaction]] domains; a class can be hopeful and still barely use it.
- **Assessment professionals:** treat the scale as a pilot. Do not use its scores for program evaluation, placement or individual decisions until a new sample supports a confirmatory model and [[assessment-validity|construct validity]] checks.
- **Administrators:** moderate familiarity alongside high interest points to structured [[ai-literacy|AI literacy]] provision rather than assumed fluency; the low reliance score argues against panic about textbook abandonment.
- **Designers:** the human-similarity gap (2.29 against 3.46) suggests students accept a study tool that stays visibly a tool; tutor or companion personas are not what this sample asked for.

## Limitations

- A single exploratory factor analysis on 93 students is a first look: without confirmatory factor analysis, convergent and discriminant evidence or measurement invariance, the instrument must not be used to make decisions about students, teachers or programs.
- The convenience sample has 68 males and 23 females and draws partly on technical schools in three Italian regions, so the structure may not hold elsewhere.
- The item count is inconsistent: the text reports 12 items remaining after seven were eliminated, while Tables 1 and 2 list 13 items (I01 through I13).
- Reported means (2.14 to 3.58) sit far inside the stated 1 to 10 format with no explanation of scoring, so levels are not comparable.
- All measures are [[self-report-measures|self-reported]] from one administration, leaving social desirability and inflated self-assessed ability as alternatives.
- The authors note the sample was not powered a priori and call for urban and rural sampling to examine [[digital-divide|access differences]].

## Citation

Schicchi, D., & Taibi, D. (2026). [High School Students’ Attitudes Toward Generative AI: An Exploratory Factor Analysis of a Novel Measurement Scale](https://doi.org/10.3390/info17060612). *Information*, 17, 612.
