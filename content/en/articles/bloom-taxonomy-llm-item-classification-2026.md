---
title: "Do Cognitive Classifications Predict Empirical Item Behaviour? Aligning Bloom's Taxonomy with the Psychometric Properties of National Centralized Mathematics Items across Grades 4–12"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/bloom-taxonomy-llm-item-classification-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [math education]
level: [k 12]
audience: [researchers, instructors]
assessment: [educational-measurement, automated-assessment]
technology: [llm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Using [[educational-measurement|item-analysis records]] for 265 four-option multiple-choice [[math-education|mathematics items]] from centralized examinations across Grades 4–12, this study tested whether an item's intended Bloom's taxonomy level predicts how it actually behaves once administered. Intended cognitive level was directionally related to difficulty (Kruskal–Wallis H = 11.26, p = .004; Jonckheere–Terpstra J = 7943, z = −2.56, p = .006) but the effect was weak (ε² = .043; Spearman ρ = −.16), and discrimination was flat across cognitive bands (H = 0.54, p = .77). An independent [[llm|LLM]] classification produced by Claude, a form of [[automated-assessment|AI-assisted coding]], agreed with expert coders only fairly (Cohen's κ = .22 at the six-level resolution and κ = .17 at the band level; raw agreement 51.7% and 58.1%), and it systematically pushed items toward the apply/analyze band. The authors caution against replacing expert human coders with current LLMs in high-stakes item classification, while holding that the taxonomy remains useful for coverage planning.

## Key Findings

1. Of 265 items, 41.5% fell in the remember/understand band, 52.8% in apply/analyze and 5.7% in the higher-order band, against a 40/50/10 blueprint target (χ²(2) = 5.57, p = .062).
2. Mean difficulty declined monotonically across bands — remember/understand p = .718, apply/analyze p = .674, higher-order p = .535 — but intended cognitive level explained under 5% of the variance in difficulty (ε² = .043; ρ = −.16).
3. Discrimination did not differ across cognitive bands (mean point-biserial .463, .447 and .468; Kruskal–Wallis H = 0.54, p = .77), and difficulty and discrimination were essentially uncorrelated across the pool (ρ = −.05, p = .43).
4. Human–AI agreement was only fair: raw agreement was 51.7% at the six-level resolution and 58.1% at band level, with Cohen's κ = .22 (unweighted), .21 (linear-weighted) and .19 (quadratic-weighted) at six levels.
5. The model compressed the cognitive scale toward the middle band: of 110 items experts coded as remember/understand, 73 were moved into apply/analyze, and of 15 higher-order items it recovered only 2 and placed 10 in apply/analyze.
6. Agreement varied widely by form (κ from −.24 for Grade 9 General to .38 for Grade 4 General), with no systematic advantage for either the General or the Advanced track.
7. General- and Advanced-track items did not differ reliably in difficulty (p = .693 vs. .639; Mann–Whitney U = 2710, p = .095) or discrimination (.475 vs. .470; U = 3216, p = .96).

## The blueprint assumption, tested on operational items

National [[assessment|test blueprints]] encode a measurement claim as if it were a fact: that an item's intended cognitive level, coded with Bloom's revised taxonomy, is monotonically related to its empirical difficulty and discrimination. In the United Arab Emirates national mathematics program the blueprint fixes roughly 40% of items at remember/understand, 50% at apply/analyze and 10% at higher-order (evaluate/create). The study puts that assumption against real field data — item-analysis records for 265 four-option multiple-choice items from the End-of-Term 1 (2025–2026) centralized mathematics examinations, drawn from thirteen test forms across Grades 4–8 (General track) and Grades 9–12 (both General and Advanced), each form contributing 20 items except the Grade 5 form (25 items). Observed coverage was 41.5%, 52.8% and 5.7% across the three bands, so the higher-order band was underrepresented by roughly four percentage points, and the goodness-of-fit test approached but did not reach significance. The records are aggregate ones: because person-level response vectors were unavailable, option-level distractor analysis, item-response-theory calibration and person-level differential item functioning all fell outside the study's reach.

## A weak link to difficulty, no link to discrimination

For instructors and item writers, the practical reading is that a taxonomic label is a coarse and unreliable proxy for how hard an item will be. Difficulty declined in the expected direction across the ordered bands, and the trend test confirmed it, but cognitive level accounted for under 5% of the variance in difficulty (ε² = .043; η² = .045), so most of what makes an item hard sits outside its Bloom code. The discrimination result is more decisive still: mean point-biserial values were nearly identical across bands (.463, .447, .468), neither the Kruskal–Wallis test nor the Spearman correlation was significant, and difficulty and discrimination were themselves essentially uncorrelated (ρ = −.05, p = .43), even though most items cleared the .30 discrimination [[benchmark]]. Higher-order items were neither psychometrically inferior nor superior: an item cannot be assumed to discriminate well merely because it is difficult, or poorly because it is easy. The authors' recommendation follows directly — manage difficulty targets through pretesting rather than inferring them from taxonomic coding, and evaluate difficulty and discrimination on their own field evidence.

## Where the classifier went wrong, and why that matters

The LLM's errors were not random but directional, and the pattern is more informative than the headline kappa. Reading the confusion matrix, the model reliably re-assigned items toward apply/analyze: of 110 items the experts coded as remember/understand, it moved 73 into apply/analyze, and of 15 higher-order items it recovered only 2 while placing 10 in apply/analyze. That the quadratically weighted κ (.19) fell slightly below the unweighted κ (.22) confirms the point — the residual disagreements were not confined to adjacent levels, so a handful of items were displaced across two or more levels and heavily penalized. Agreement also varied widely by form, from κ = −.24 for Grade 9 General to .38 for Grade 4 General. The authors interpret the middle-band pull as a majority/modal-class bias of the classifier rather than as an inherent limit: apply/analyze is the modal label in typical training corpora, and the model worked from brief learning-outcome statements whose surface wording (verbs such as "solve," "calculate," "apply") is highly similar across bands. On that account the compression is a calibration artifact of label priors and truncated input.

## Reading the agreement figure fairly

A single number cannot settle whether an AI classifier can substitute for expert coding, and the authors are careful about the input it rests on. The model classified each item's official learning-outcome statement, not the full item stem and answer options, and they flag the reduced, paraphrastic input as a substantive constraint: the low agreement may be driven in part by what the model was given, so they interpret the agreement figures as a lower bound conditioned on outcome-statement input. The comparison also used one LLM in a single pass, with no repeated classification to separate genuine human–AI disagreement from run-to-run instability. What survives is a measured position — the model's reluctance to assign higher-order labels parallels the human under-production of higher-order items (5.7% against a 10% target), though with only 15 higher-order items that parallel is suggestive rather than confirmed. The workable role is a [[human-in-the-loop-ai|first-pass flagging tool]] whose disagreements with human coders identify items worth a second expert look, supported by item-writer training on higher-order items that are both under-produced and hard to classify.

## What this means for practice

- **Instructors.** Judge an item on its own field evidence rather than its taxonomic label: intended cognitive level explained under 5% of the variance in difficulty (ε² = .043) and carried no information about discrimination (H = 0.54, p = .77).
- **Administrators.** Continue using the taxonomy for coverage planning, but validate difficulty and discrimination directly through pretesting instead of inferring them from blueprint coding, and watch higher-order coverage — the pool ran 5.7% against a 10% target.
- **Researchers.** Use AI classification as a decision-support flag, not an authoritative judgment: expert–model agreement was only fair (κ = .22 at six levels), and the model recovered only 2 of 15 higher-order items.
- **Instructors.** Fund item-writer training for higher-order items specifically, since higher-order demand appears comparatively hard both to produce and to recognize — by human and machine coders alike.

## Limitations

- The data were aggregate item-analysis records, so without person-level responses the study could not run option-level distractor analysis, [[item-response-theory|IRT]] calibration or person-level Mantel–Haenszel DIF.
- The higher-order band was small (15 items), which limits power for that band and widens its confidence intervals, and the Grade 4 and Grade 5 forms showed ceiling effects (mean p = .96 and .88) with zero-variance items whose difficulty and discrimination are uninformative.
- A single LLM (Claude) served as the AI rater in one pass; no repeated classification was run, so intra-rater consistency was recommended but not reported on these data.
- Item content was analyzed through official learning-outcome statements rather than full item stems and answer options, so the reported human–AI agreement should be read as a lower bound on outcome-statement input.
- Grade and track are partially confounded (the Advanced track exists only in Grades 9–12), making the track comparison exploratory and descriptive rather than causal.
- The study is confined to one subject, one national system and one testing window, so generalization beyond those bounds should be cautious.

## Citation

Altaweel, R. Y. M., & Moussa, M. K. (2026). [*Do Cognitive Classifications Predict Empirical Item Behaviour? Aligning Bloom's Taxonomy with the Psychometric Properties of National Centralized Mathematics Items across Grades 4–12*](https://doi.org/10.5430/jct.v15n4p53). *Journal of Curriculum and Teaching, 15*(4), 53.
