---
title: "Academic Stress Mediates the Link Between ChatGPT Dependency and Executive Dysfunction"
created: "2026-11-12T18:00:00-05:00"
updated: "2026-11-12T18:00:00-05:00"
type: article
sources: ['raw/papers/sharma-chatgpt-dependency-executive-dysfunction-stress-2026.md']
source_url: "https://doi.org/10.4103/aip.aip_242_25"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [survey]
page_kind: [evaluation]
level: [higher ed]
audience: [researchers, instructors]
discipline: [learning sciences]
foundations: [ai-literacy]
pedagogy: [metacognition, self-regulated-learning]
assessment: [assessment-validity]
technology: [generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** A cross-sectional survey of Indian university students reports that problematic ChatGPT use is associated with poorer global executive functioning, but that the association runs almost entirely through academic stress: stress predicts executive dysfunction at β = 0.706 (P < 0.001), while ChatGPT use contributes β = 0.069 (P = 0.328) once stress is in the model. The authors read this as [[cognitive-offloading]] displacing the practice that builds [[self-regulated-learning]] and [[metacognition]], and they describe a self-reinforcing cycle in which stress, executive difficulty, and [[generative-ai]] dependence feed one another. That cycle is a hypothesis the design cannot test, because all three variables were measured at a single time point.

## What the study measured

The study is a questionnaire-based, cross-sectional survey of students enrolled at colleges affiliated with the University of Delhi, aged 18–27 years. Recruitment started with 171 students invited; one hundred and seventy-eight expressed interest, 153 were included and completed the standardized psychometrics, and 41 responses were dropped as incomplete or inconsistent, leaving a final sample of 112. The abstract states 122 students instead, a discrepancy the paper never reconciles, and every table reports n = 112. Most participants were male (54.91%), most were 18–20 years old (40.98%), and most held a bachelor's degree (71.11%); mean age was 22 years (SD = 2.42). Because all instruments were administered in English, intermediate English proficiency was a participation requirement.

Three instruments were used. The Problematic ChatGPT Use Scale (PCUS) measures problematic usage patterns among adults and is reported with a Cronbach's alpha of 0.93 and test–retest reliability of r = 0.904. The Students' Academic Stress Scale (SASS) contains 50 items across four dimensions — affective, behavioral, physiological, and cognitive — with subscale reliability reaching 0.92. Global executive functioning was measured with the Behavior Rating Inventory of Executive Function–Adult Version (BRIEF-A), which yields a Behavioral Regulation Index and a Metacognition Index plus a Global Executive Composite; the composite's alpha exceeds 0.90 and test–retest reliability ranges from 0.88 to 0.90. The BRIEF-A rates everyday behavior rather than performance. Analysis used SPSS version 16 and Hayes' PROCESS macro, Model 4, with 5000 bootstrap estimates; a G*Power check was reported as sufficient for a medium effect size.

## What the model shows, and what it cannot show

All three variables moved together. Problematic ChatGPT use correlated with the Global Executive Composite at r = 0.357 and with academic stress at r = 0.407; academic stress correlated with the Global Executive Composite at r = 0.734. Within the executive subscales, ChatGPT use correlated with initiate at r = 0.346 and working memory at r = 0.357, while academic stress correlated with working memory at r = 0.584 and the Metacognition Index at r = 0.684. The authors note that the ChatGPT correlations with shift (r = 0.124) and emotional control (r = 0.095) were not significant.

The regression of global executive functioning on both predictors was strong: R = 0.737, R² = 0.543, adjusted R² = 0.535, standard error of the estimate 13.79, F = 65.31 (P = 0). Academic stress carried the model with β = 0.706 (B = 0.835, t = 10.002), while problematic ChatGPT use was not a unique predictor at β = 0.069 (B = 0.272, P = 0.328). The mediation model reproduced this structure: the a path from ChatGPT use to academic stress was β = 0.406 (B = 1.350, P < 0.001); the b path from academic stress to executive dysfunction was β = 0.705 (B = 0.835, P < 0.001); the direct c′ path was β = 0.069 (P = 0.328); and the indirect effect was 0.287 in standardized terms (B = 1.128), with a 95% bootstrap confidence interval excluding zero.

The paper calls this "full mediation," and the arithmetic supports the description of a large indirect effect: the standardized indirect effect of 0.287 is consistent with the product of the two paths. What the arithmetic does not establish is direction. The b path is cross-sectional, so "academic stress predicts executive dysfunction" and "executive dysfunction predicts academic stress" fit the same covariance structure equally well.

The discussion proposes a loop: heavy ChatGPT use raises academic stress, stress degrades planning, initiation, and working memory, and weakened executive control drives further dependence on the tool. The authors also offer the reverse reading themselves, noting that excessive use may mark preexisting stress, with students seeking external support for a heavy academic load. Both readings are consistent with the correlations, and the paper does not adjudicate between them. Nor does it measure what students used ChatGPT for, how often, or over what period, so the "dependence" construct rests on a problematic-use scale rather than on a dose or a usage log.

The framing also inherits a measurement ambiguity. Higher BRIEF-A scores mean more difficulty, so a positive correlation between ChatGPT use and "executive functioning" is a correlation with executive complaints, not with executive capacity. The paper is mostly careful about this, but phrases such as "positively correlated with executive functioning indices" can be read backwards by anyone who assumes higher scores mean better function. The substantive claim — that students who report more everyday executive difficulty also report more problematic ChatGPT use — is coherent and is the more interesting finding, because it points toward compensatory use rather than simple causation.

## Key Findings

1. Academic stress was the dominant predictor of global executive dysfunction, with β = 0.706 (B = 0.835, t = 10.002, P < 0.001) in a model that also included ChatGPT use.
2. Problematic ChatGPT use did not contribute uniquely once stress was controlled, at β = 0.069 (B = 0.272, P = 0.328).
3. The a path from ChatGPT dependency to academic stress was significant at β = 0.406 (B = 1.350, P < 0.001).
4. The b path from academic stress to executive dysfunction was significant at β = 0.705 (B = 0.835, P < 0.001).
5. The standardized indirect effect was 0.287 (B = 1.128), with a 95% bootstrap confidence interval excluding zero across 5000 resamples.
6. The two-predictor model explained 54.3% of variance in global executive functioning (R² = 0.543, adjusted R² = 0.535, F = 65.31).
7. Academic stress correlated with the Global Executive Composite at r = 0.734, against r = 0.357 for ChatGPT use, and the ChatGPT correlations with shift (r = 0.124) and emotional control (r = 0.095) were not significant.

## What this means for practice

- **Screen for stress before restricting tools.** If stress is doing most of the predictive work, an institutional response aimed only at ChatGPT use addresses the weaker of the two signals. Academic support staff should treat elevated stress and executive complaints as the primary referral target.
- **Read BRIEF-A profiles as self-report, not diagnosis.** A student reporting poor initiation or working memory is describing everyday difficulty that may reflect sleep, workload, anxiety, or depression. Use the profile to open a conversation, not to assign a cognitive label.
- **Teach the displaced skill rather than banning the tool.** The paper's own recommendation is workshops on managing academic stress and on using AI consciously, which fits a [[higher-ed]] setting better than blanket prohibition and targets the self-regulation gap the authors describe.
- **Watch for compensatory use.** Students who struggle to start work may be the heaviest users, so usage data alone will misidentify them as enthusiasts. Pair usage signals with [[assessment-validity]] evidence about what students can do unaided.
- **Design tasks that keep the cognitive work visible.** Where a course lets generative AI draft, it removes exactly the initiation and planning practice the paper worries about; staged drafts, oral defense of written work, and in-class retrieval tasks keep that practice in view.

## Limitations

- The design is cross-sectional, so no temporal ordering among ChatGPT use, stress, and executive complaints can be established; the mediation estimate is a decomposition of covariance, not a causal test.
- Sample size is reported inconsistently: the abstract says 122, while the Methods and Tables 1 and 2 report 112 after 41 of 153 responses were excluded, and the paper does not explain the difference.
- All three constructs are self-report, and the BRIEF-A rates everyday behavior rather than performance; shared method variance will inflate the correlations, and no performance-based executive task was administered.
- "Full mediation" is inferred from a non-significant direct path (P = 0.328), which is an absence-of-evidence argument; no equivalence test or sensitivity analysis for unmeasured confounding is reported.
- The sample is a single cluster of colleges affiliated with one university, 54.91% male, restricted to students with intermediate English proficiency, so generalization to other Indian universities or to non-English-medium settings is untested.
- Plausible confounders — sleep, workload, anxiety and depression, general screen time — were not measured, and the paper reports no usage quantity, frequency, or duration data that would let a reader judge how much ChatGPT use the "dependency" scores represent.

## Citation

Sharma, S., Manani, P., & Thakwani, M. (2026). The mediating role of academic stress in ChatGPT dependency and executive dysfunction with special reference to university students. *Annals of Indian Psychiatry*. https://doi.org/10.4103/aip.aip_242_25
