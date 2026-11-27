---
title: "When advice overrides reasoning: diagnostic deference to AI- and faculty-labelled recommendations in undergraduate dental education"
created: "2026-11-27T07:51:00-05:00"
updated: "2026-11-27T07:51:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/surdilovic-diagnostic-deference-ai-faculty-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
discipline: []
level: [undergraduate]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Surdilovic and colleagues tested whether undergraduate dental students revise an independent diagnosis when external advice conflicts with it. Eighty students completed 16 pediatric and preventive dentistry cases, each with an initial answer, a recommendation labeled as coming from AI or faculty, and a final answer. The recommendation text was identical across label conditions; only the displayed attribution changed. Accuracy rose after advice, but nearly one-third of initially correct answers became wrong after inaccurate advice, while most initially wrong answers became right after accurate advice. Rates were similar under AI and faculty labels, with estimates too imprecise to establish equivalence. The authors tie the pattern to [[automation-bias|automation bias]] and argue that students should verify a recommendation's clinical basis before deferring to it.

## Key Findings
1. **External advice cut both ways.** Correct recommendations often repaired an initial error, while incorrect recommendations sometimes displaced an initially correct decision.
2. **Harmful deference was common.** Among trials where students started correct and then saw inaccurate advice, roughly three in ten ended incorrect.
3. **Beneficial correction was more common still.** Among trials where students started incorrect and then saw accurate advice, most ended correct.
4. **The source label made little visible difference.** Rates under AI and faculty attributions were close, but the estimates were too imprecise to show the two were equivalent.
5. **Only the attribution was manipulated.** The same recommendation wording appeared under both labels, so the comparison isolates perceived source rather than differences in advice quality.
6. **Cases varied widely.** Deference and correction rates differed across individual cases and across the four clinical domains.
7. **Confidence was only a suggestive signal.** Higher initial confidence pointed toward less harmful deference, but the estimate was imprecise, and year-level differences did not survive adjustment.

## How the experiment worked

The study ran at Gulf Medical University in Ajman between October 2023 and June 2024. All 110 fourth- and fifth-year dental students were invited; 86 consented and were randomized 1:1 to AI-labeled or faculty-labeled advice using fixed blocks of four. Four AI-label participants did not attend the study session and two more started but did not complete all 16 cases. The prespecified complete-case analysis therefore included 37 students in the AI-label condition and 43 in the faculty-label condition, or 80 students and 1,280 trial-level observations.

Each student worked through 16 standardized vignettes: four each on caries risk and preventive decisions, pulp therapy and deep caries, dental trauma, and behavior guidance. Three faculty experts rated clinical plausibility and defensibility on a 1–4 scale; cases were locked only when the mean rating was at least 3.50/4.00 and no expert flagged a serious clinical error. All 16 cases met that threshold.

Recommendation drafts were generated with generative AI and then reviewed and edited by the investigators. For any given case and accuracy condition, the final wording was identical in the two label conditions; only the displayed designation as "AI recommendation" or "Faculty recommendation" changed. Students gave an initial answer and a confidence rating on a 1–5 scale, read the recommendation, then gave a final answer and confidence rating. They were not told during the task that some advice was deliberately inaccurate; debriefing disclosed the assigned labels and the intentional errors. Analysis used logistic regression with standard errors clustered by both participant and case, plus case-fixed-effects sensitivity models.

## What the trials showed

Initial accuracy was 57.9% (741/1,280) and final accuracy was 66.4% (850/1,280), an increase the paper describes as 8.5% points. Strict answer switching occurred in 27.4% of trials (351/1,280): 230 moved from wrong to right and 121 from right to wrong.

Harmful diagnostic deference occurred in 112 of 374 eligible trials, or 29.9% (95% CI 25.5–34.8%). Beneficial correction occurred in 230 of 284 eligible trials, or 81.0% (95% CI 76.0-85.1%). By label, harmful deference was 50/171 (29.2%) under AI advice and 62/203 (30.5%) under faculty advice; beneficial correction was 113/135 (83.7%) and 117/149 (78.5%), respectively.

Adjusted models found no clear label effect: the AI-versus-faculty estimate was adjusted OR 1.05 (95% CI 0.67–1.65; p = 0.836) for harmful deference and OR 1.29 (95% CI 0.59–2.81; p = 0.517) for beneficial correction. Case-fixed-effects models agreed (OR 0.88, 95% CI 0.57–1.36; p = 0.550 and OR 1.23, 95% CI 0.55–2.72; p = 0.613). Higher initial confidence was directionally protective but not significant (adjusted OR 0.57 per 1-point increase, 95% CI 0.30–1.07; p = 0.080).

Mean confidence rose from 3.75 (SD 0.90) to 4.00 (SD 0.89), with a mean change of + 0.25 (SD 0.53). Case-level harmful deference ranged from 5.9% to 62.5% and beneficial correction from 47.6% to 100.0%. By domain, harmful deference ranged from 24.5% in dental trauma to 38.1% in preventive dentistry; these domain comparisons were descriptive only.

## What this means for practice
- **Instructors.** Teach a routine of independent decision, stated confidence, stated evidence, and explicit justification for accepting, modifying or rejecting an external recommendation.
- **Instructors.** Extend AI literacy beyond prompting and privacy to repeated practice checking both AI-labeled and faculty-labeled advice against clinical findings and guidelines.
- **Instructors.** Ask students to explain why a recommendation should be challenged rather than confirming only whether the final answer is correct.
- **Researchers.** Test whether structured verification prompts reduce harmful deference without sacrificing beneficial correction, using larger samples and more than one institution.

## Limitations
- The single-institution, vignette-based design limits generalizability, and the study did not test responses to a live AI system: labels were experimentally assigned attributions over expert-reviewed advice.
- The modest sample leaves source-label estimates imprecise, so the similar rates cannot establish equivalence between AI and faculty advice.
- Attrition was differential: four AI-label participants did not attend the study session and two more did not complete all 16 cases, which may bias the group comparison.
- Demographic characteristics beyond undergraduate year and prior attitudes toward AI were not collected.
- Domain-level differences were descriptive and exploratory, with four cases per domain and no formal between-domain test.

## Citation
Surdilovic D, Shetty RM, Azim SA, Awadalkreem F and Siriwardena BSM (2026) When advice overrides reasoning: diagnostic deference to AI- and faculty-labelled recommendations in undergraduate dental education. BMC Medical Education. https://doi.org/10.1186/s12909-026-10902-7
