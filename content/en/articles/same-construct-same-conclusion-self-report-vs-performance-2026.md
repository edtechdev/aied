---
title: "Same construct, same conclusion? A construct-observability perspective on self-report and non-self-report indicators in AI education research: a two-phase systematic review"
created: "2026-10-19T16:24:56-04:00"
updated: "2026-10-19T16:24:56-04:00"
type: article
sources: ['raw/papers/10.1186_s41239-026-00631-8.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors, faculty developers, administrators]
pedagogy: [creativity, metacognition, self-regulated-learning, student-engagement, problem-solving, student-ai-interaction]
technology: [learning-analytics]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains, evaluative-judgment]
methods: [meta-analysis-systematic-review, research-methods-aied]
foundations: [critical-thinking, limitations-in-aied-research, interpreting-and-applying-aied-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Fan and colleagues ask a question that sits underneath most claims in this field: when a study measures the same construct with a [[self-report-measures|self-report]] instrument and with a test, rating or trace, do the two reach the same conclusion? Phase 1 mapped [[educational-measurement|measurement]] methods across 2,099 title/abstract records; Phase 2 examined 51 same-construct entries from 47 reports, of which 30 were concordant, 11 discordant and 10 mixed. The authors' proposed explanation — construct observability, defined at the level of sub-skills by output externality, feedback immediacy and criterion explicitness — did not reach significance in any of their comparisons, and the descriptive ordering reversed between analyses. The contribution is therefore not a measurement hierarchy but a conditional rule: measurement should follow the claim, and both kinds of instrument need their own [[assessment-validity|validity]] argument.

## Key Findings

1. **Dual-method designs are common; same-construct comparisons are not.** Of 2,099 records, 38.6% used both self-report and non-self-report measures, yet only 508 of the 811 dual-method records were candidate same-construct pairs at abstract level, and 120 of 178 full texts screened out.
2. **Same-construct pairs disagreed in two cases out of five.** Among 51 entries from 47 reports, 30 (58.8%) reported concordant conclusions, 11 (21.6%) discordant and 10 (19.6%) mixed — 21 of 51, or 41.2%, discordant or mixed.
3. **The observability hypothesis did not reach significance.** LOW-labeled entries were discordant or mixed in 14/31 cases against 6/17 for HIGH-labeled ones (p = 0.555); a stricter paired subset of nine entries gave p = 0.524.
4. **The direction reversed between the two analyses**, from 14/31 versus 6/17 in the complete synthesis to 1/4 versus 3/5 in the restricted subset, so the review declines to claim any stable ordering.
5. **Discordance is not mainly self-report inflation.** Among the contrasts carrying a clear direction, five paired a non-significant self-report result with a positive performance result, against only two showing the reverse.
6. **Constructs behaved very unevenly.** Critical- and computational-thinking entries were discordant or mixed in 13/23 cases, while engagement (0/4), [[self-regulated-learning|self-regulated learning]] (0/2) and [[collaborative-learning|collaboration]] (0/1) were concordant throughout.
7. **Authors mostly explained disagreement in study-specific terms.** Construct complexity (43%) and instrument features (24%) dominated their accounts, and three quarters of the 21 explanations sat far or moderate from the review's own framework.

## The assumption underneath a self-report item

A [[self-report-measures|self-report]] measure of learning assumes that a learner can introspect on a cognitive operation and judge its quality. The review does not dismiss that premise but treats it as conditional, drawing on calibration work in which accuracy varies by domain and task rather than being fixed in a person. Its move is to change what the condition is attached to: where that literature asks who is self-assessing, this review asks what is being self-assessed. It proposes that operations differ in how far a learner can observe them along three dimensions — output externality, whether the operation leaves an inspectable product; feedback immediacy, whether quality can be monitored during the work; and criterion explicitness, whether a standard exists to judge against. Spelling and vocabulary selection sit high on all three; grammatical internalisation and depth of reasoning sit low. The gradient is deliberately a property of sub-skills rather than of constructs, which distinguishes it from coarser schemes assigning one value to a whole construct. [[critical-thinking|Critical thinking]] is not uniformly unobservable, because pattern recognition and abstract reasoning occupy different positions, and [[writing-education|writing]] is not uniformly observable for the same reason. The paper is explicit that [[metacognition|calibration]] research motivates this account without validating it.

## What the two phases can and cannot establish

The design separates a corpus map from a bounded synthesis, and the review is unusually careful about the join. Phase 1 coded 2,099 title/abstract records: 22.6% self-report only, 30.6% non-self-report only, 38.6% both and 8.1% unclear, with the dual-method category indicating co-presence rather than alignment. Of those 811 records, 508 were candidate Type A at abstract level, and candidate work clustered heavily on [[learning-gains|academic achievement]] at 261 of 508, against 57 for critical thinking, 25 for [[creativity]] and 12 for [[problem-solving|problem solving]]. Those are screening descriptions, not prevalence estimates, and the authors say so each time. Phase 2 then deliberately sampled rather than sampled representatively, retrieving 178 full texts of which 120 failed the same-construct criteria, mostly because the instruments measured different constructs. The extraction set was 84% [[higher-ed|university]] level. Entries were coded concordant, discordant or mixed by a reported-outcome rule applied to heterogeneous evidence: 36 classifications rested principally on paired inferential results, with descriptive, [[qualitative-research|qualitative]] and explicitly non-parallel evidence behind the rest.

## Why the framework survives a null result

Three things prevent the obvious reading that the framework failed. First, the comparison the authors can run is not the comparison the framework predicts: grouping entries as LOW or HIGH attaches a single label to a construct, which is exactly the construct-level simplification the gradient was proposed to replace. Second, the groups are small and uneven enough that a reversal between analyses is unsurprising — 14/31 against 6/17 flips to 1/4 against 3/5 on nine entries. Third, the competing explanations could not be excluded. Duration gave 10/25 discordant-or-mixed for interventions of four weeks or more against 3/5 for shorter ones; sample size gave 11/27 for studies under 100 against 3/4 above; and instrument features varied across subscales within a single report. What the review does find is suggestive: Kwan and Hung (2025) reported near-zero correspondence between self-reported and externally assessed creativity (r = −0.01) with reduced metacognitive calibration, the one case the reviewers rated very close to their framework, and five studies administering the same Hwang (2018) higher-order-thinking scale responded positively on its critical-thinking and problem-solving subscales while creativity was non-significant in three AI-versus-no-AI comparisons. The reviewers' own coding agreement on the conclusion categories was modest (kappa = 0.496, with 15/62 pre-consensus disagreements).

## What this means for practice

- **Instructors.** Label your outcome honestly before you measure it: if the evidence is students' judgment of their own change, report it as perceived learning rather than as demonstrated competence, and if you need a competence claim, pair it with a task, artifact or trace aligned to that specific claim.
- **Researchers.** Do not treat a significant self-report result and a non-significant performance result as a contradiction to be explained away by duration or sample; report what each instrument measured, and give the [[assessment-validity|validity]] argument for the non-self-report measure too, since a rubric, an automatic score and a trace all carry assumptions.
- **Faculty developers.** Use the three dimensions as design questions when shaping an AI assignment: ask whether the work leaves an inspectable product, whether the student gets a quality signal while working, and whether a criterion is available — the review presents them as prompts for reasoning, not as a validated scoring rule.
- **Platform developers.** Where a product reports higher-order gains from student [[self-assessment]], add a directly aligned calibration task, an independently rated artifact or a validated process indicator before the claim is used in marketing.

## Limitations

- Phase 1 was restricted to English-language articles in selected Q1/Q2 journals and coded only titles and abstracts, so its counts are screening descriptions rather than confirmed prevalence.
- Coder-specific pre-consensus labels were not retained for Phase 1 coding or the author-explanation categories, so reliability statistics cannot be reconstructed for those decisions.
- Phase 2 used purposive, construct-stratified retrieval rather than a representative sample of the 508 candidates, and several final construct groups were very small.
- Four of the 47 reports contributed two entries each, so entry-level observations are not fully independent, and the whole sample was 84% higher education.
- The restricted analysis that carried the most demanding comparability criteria contained only 10 entries from 10 reports, and its non-significant result is sensitive to eligibility and classification decisions.
- Non-self-report measures were heterogeneous — tests, ratings, automated scores, traces and physiological indicators — and no conventional study-level quality appraisal was conducted, so the review cannot treat them as a single criterion class.

## Citation

Fan, Y., Ning, Y., Tchiang, V. I., & Jin, M. (2026). [*Same construct, same conclusion? A construct-observability perspective on self-report and non-self-report indicators in AI education research: a two-phase systematic review*](https://doi.org/10.1186/s41239-026-00631-8). International Journal of Educational Technology in Higher Education, 23, 53.
