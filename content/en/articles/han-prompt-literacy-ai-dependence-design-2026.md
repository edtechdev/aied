---
title: "Learning engagement and creative self-beliefs in generative AI-supported design education: self-reported prompt literacy and dimensions of AI dependence"
created: "2026-11-04T13:24:11-05:00"
updated: "2026-11-04T15:00:00-05:00"
type: article
sources: ['raw/papers/han-prompt-literacy-ai-dependence-design-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [design education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, curriculum designers]
technology: [generative-ai, prompt-engineering]
pedagogy: [student-engagement, self-efficacy, creativity]
foundations: [agency, reducing-ai-misuse]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
methods: [quantitative-research]
---

> **Synthesis:** Han and Cao surveyed 829 [[higher-ed|undergraduate]] art and design students in 40 intact classes at two Chinese institutions about how well they feel they can [[prompt-engineering|prompt]] [[generative-ai|generative AI]], how engaged they are in [[design-education|design coursework]], and how creative they believe themselves to be. Students' self-reported prompt literacy was associated with [[student-engagement|learning engagement]] (β = 0.54), and engagement was associated with both [[self-efficacy|creative self-efficacy]] (β = 0.62) and creative personal identity (β = 0.47). The novel move is dimensional: when four forms of AI dependence entered one model together, only cognitive dependence — letting AI think and judge in one's place — clearly weakened the literacy–engagement link, and every interaction was small.

## Key Findings

1. **The sample is intact classes, not volunteers.** Of 863 returned [[self-report-measures|questionnaires]], 34 were removed by a prespecified screening sequence, leaving 829 valid responses (96.1%) across 40 classes: 573 students in 28 classes at Institution A and 256 in 12 classes at Institution B. Class size ranged from 17 to 24 (M = 20.7) and mean age was 20.86 years.
2. **Prompt literacy tracked engagement.** The path from self-reported prompt literacy to learning engagement was β = 0.539, 95% CI [0.473, 0.595], with the model explaining 29.1% of the variance in engagement. Prompt literacy was measured with six adapted items from a workplace GenAI-literacy scale (α = 0.829), not with observed prompting.
3. **Engagement tracked efficacy more than identity.** Engagement was associated with creative self-efficacy at β = 0.618, 95% CI [0.541, 0.690], and with creative personal identity at β = 0.474, 95% CI [0.383, 0.570]. The standardized difference was 0.144, 95% CI [0.044, 0.235], p = 0.003, and it reproduced in both institutions.
4. **Identity kept a share of its own.** Engagement remained associated with creative personal identity after efficacy was taken into account (β = 0.21, 95% CI [0.09, 0.32]), and a model forcing the identity path to run entirely through efficacy was rejected, scaled Δχ²(1) = 9.89, p = 0.002. The two beliefs are related but not substitutable.
5. **Cognitive dependence was the clearest moderator.** In the simultaneous four-dimension model the interaction was B = −0.155, 95% CI [−0.236, −0.069], p < 0.001, with a unique increment of ΔR² = 0.015 (f² = 0.020). The simple slope of prompt literacy on engagement fell from 0.607 at one standard deviation below the cognitive-dependence mean to 0.297 at one above.
6. **Loss of control was weaker evidence, and the other two were nothing.** The loss-of-control interaction was B = −0.093, 95% CI [−0.174, −0.011], p = 0.021, but it did not survive correction across all four interaction terms (adjusted p = 0.063). Functional dependence (B = −0.034, p = 0.396) and emotional dependence (B = 0.003, p = 0.941) showed no unique moderation.
7. **Moderation was a slope, not a reversal.** The whole interaction block explained ΔR² = 0.051 (f² = 0.068), and the prompt literacy–engagement association stayed positive at high dependence on both dimensions examined. The total AI-dependence score also interacted negatively (B = −0.202, 95% CI [−0.268, −0.136]) but could not say which dimension carried the effect.

## Two creative self-beliefs that are not interchangeable

The paper's contribution to the [[creativity|creative self]] literature is a separation, not a discovery. Prior work either combined creative self-efficacy and creative personal identity into one composite or placed identity downstream of efficacy. Han and Cao put both beliefs beside engagement in the same model and found that engagement sits closer to the belief about what one can do than to the belief about who one is. Their reading follows [[agency|social cognitive theory]]: studio work supplies enactive mastery experiences, and mastery experiences bear most directly on capability beliefs, whereas identity also draws on how much a student values the discipline and on longer-term self-definition.

That is a difference in degree, and the study is candid about why it might be partly artifactual. Engagement and creative self-efficacy were the least distinct pair in the measurement model: their latent correlation was 0.705 against a square root of average variance extracted of 0.693, so the pair missed the Fornell–Larcker criterion, and self-report overlap cannot be removed by any respecification the authors ran. The comparison held in the composite-score models, after covariate adjustment, in both institutions, and in all 40 leave-one-class-out re-estimations, which is the strongest support available for a claim this shape.

## Dependence is not one thing

[[reducing-ai-misuse|AI dependence]] is usually scored as a total. Han and Cao enter its four dimensions — emotional, functional, cognitive, and loss of control — simultaneously with their interactions, and the pattern that emerges is the reason to keep them apart. Cognitive dependence describes substituting AI judgment for one's own, the form of reliance most directly opposed to personal agency. Students who do that plausibly spend their prompting skill on retrieving ready-made answers rather than on exploring, comparing, and revising, which is why the capability–engagement link thins among them.

Loss of control, the [[self-regulated-learning|self-regulation]] failure of failed attempts to cut down, produced a smaller and less stable interaction. Functional delegation for efficiency and emotional comfort from having AI available produced none. The authors are careful not to call those two harmless: their confidence intervals still admit small negative interactions, and the study was powered for neither.

The magnitudes deserve emphasis. An interaction increment of ΔR² = 0.015 is a real but minor feature of a model that already explains 29.1% of engagement variance. Every dimension interacted negatively with prompt literacy when tested alone, and only two retained unique interactions jointly — consistent with the dimensions sharing variance at r = 0.43 to 0.50. The practical claim the data support is narrow: perceived prompting capability converts into engagement a little less efficiently among students who outsource their thinking, and the fix is [[pedagogy|pedagogical]] rather than technological.

## What a cross-sectional dual-outcome model can support

The structural model is just-identified, so its fit statistics are those of the measurement model and cannot adjudicate the ordering of prompt literacy, engagement, and the creative self. The authors state this, and they note that models placing identity before efficacy, or running efficacy into identity, fit identically. The indirect associations of 0.333 for efficacy and 0.255 for identity are therefore partitions of one cross-section, not mechanisms.

Two further constraints bound the reading. All five constructs came from the same respondents in one sitting, and although Harman's single-factor test put the first factor at 18.8% of variance, shared method variance and general self-evaluation can still inflate associations among self-reports. And average variance extracted fell below 0.50 for prompt literacy, AI dependence, and both creative-self measures, so reliability was adequate while [[assessment-validity|convergent validity]] was thin.

## What this means for practice

- **[[teacher-role|Instructors]].** Treat "let me think first" as a design requirement, not a courtesy. The activities the authors propose — recording an initial idea before consulting AI, justifying why a generated proposal was accepted or rejected, keeping a process log — all target cognitive dependence specifically, which is the dimension with the clearest evidence behind it.
- **Prompt trainers.** Teach iteration rather than phrasing. Prompt literacy here spans crafting, reviewing, and critically engaging with responses across six items, and the engagement payoff tracks the whole cycle rather than clever wording.
- **Studio leads.** Evaluate authorship statements and process [[eportfolio|portfolios]] as supports for creative identity. Engagement was less closely tied to identity than to efficacy, and the authors suggest that making students' own contribution legible is a plausible way to reach the identity side.
- **Researchers.** Model dependence dimensions jointly. A total score produced a negative interaction here while concealing that one dimension carried it; separate single-dimension models produced four significant interactions that the joint model did not sustain.

## Limitations

- Cross-sectional and self-reported throughout, so no temporal order, causal effect, or mediating mechanism is established, and reverse paths from engagement to prompt literacy remain open.
- Prompt literacy is perceived capability measured with adapted self-report items, not demonstrated prompting performance; the measure was never tested against AI self-efficacy or general digital confidence.
- Average variance extracted fell below 0.50 for four of five constructs, and engagement and creative self-efficacy failed the Fornell–Larcker criterion, qualifying the headline comparison.
- Interaction effects were small (f² = 0.020 and 0.008), the loss-of-control interaction did not survive correction across four terms, and 40 clusters limit the precision of interaction estimates.
- Both institutions are in mainland China, institution and sector are fully confounded, and the two subsamples differ in year of study and specialism; the authors describe the cross-institutional result as replication within these sites, not across sectors.
- Weekly GenAI use was unrelated to engagement (r = −0.02), so nothing here speaks to dosage, and no behavioral logs, objective prompting tasks, or blind ratings of creative work were collected.

## Citation

Han, L., & Cao, Z. (2026). [Learning engagement and creative self-beliefs in generative AI-supported design education: self-reported prompt literacy and dimensions of AI dependence](https://doi.org/10.3389/fpsyg.2026.1957097). *Frontiers in Psychology, 17*, 1957097.
