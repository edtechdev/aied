---
title: "What Do We Know About the Effects of Artificial Intelligence in Education? A Second-Order Meta-Analysis"
created: "2026-09-18T14:00:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
methods: [ai-ed-evaluation, meta-analysis-systematic-review, quantitative-research]
research_method: [meta-analysis, systematic review, quantitative]
assessment: [learning-gains]
foundations: [limitations-in-aied-research]
technology: [generative-ai, intelligent-tutoring]
level: [k 12, higher ed]
audience: [researchers, educators, policymakers, administrators]
page_kind: [synthesis]
sources: ['raw/papers/ai-education-effects-second-order-meta-analysis-2026.md']
confidence: high
---

> **Synthesis:** A second-order [[meta-analysis-systematic-review|meta-analysis]] (SOMA) treats meta-analyses, not primary studies, as its units of analysis: it aggregates the weighted average effect sizes that meta-analysts have already published, weighting each by the uniqueness of the studies beneath it, to answer a question no single synthesis can — what does a field's evidence base say when you stop picking one meta-analysis? This matters for [[ai-education|AI in education]] because the first-order meta-analyses disagree, sometimes flatly, and practitioners have no obvious way to adjudicate. Emslander, Lindner, Eitel, Kasneci and Bardach synthesized 45 meta-analyses yielding 129 meta-analytic effect sizes, based on roughly 197,000 [[learners]] from prekindergarten through university and summarizing 40 years of primary research published between 1985 and 2025. Learners who used [[generative-ai|AI applications]] outperformed controls by g = .57 (95% CI [.50, .65]). Effects were larger for general academic outcomes (.68) than for STEM performance outcomes (.35), larger in samples that included [[higher-ed|tertiary-education]] students (.61 vs .30) and larger in more recently published meta-analyses (B = 0.09 per year). AI type did not moderate the effect, and quality did not predict it — yet the corpus showed systematic deficits, with none of the 45 meta-analyses preregistered.

## Key Findings

1. **A medium overall effect from 45 meta-analyses.** The preregistered SOMA pooled 129 meta-analytic effect sizes from 45 meta-analyses covering approximately 197,000 learners, and found g = .57 (95% CI [.50, .65]; p < .001) — outcomes more than half a standard deviation more favorable for groups using [[generative-ai|AI tools]] than for controls.
2. **Outcome clusters ranged from small to medium.** STEM performance outcomes were smallest at g = .35 (95% CI [0.22, 0.49]) and general academic outcomes largest at g = .68 (95% CI [0.58, 0.79]); language performance was .63 (95% CI [0.50, 0.76]), cognitive learning outcomes .51 (95% CI [0.16, 0.85]) and socio-emotional outcomes .50 (95% CI [0.33, 0.67]).
3. **AI types did not differ significantly.** Twelve SOMAs by AI type gave medium effects for chatbots (g = .65, 95% CI [0.49, 0.81]) and other/broad AI (.63, 95% CI [0.50, 0.75]), with [[intelligent-tutoring|intelligent tutoring systems]] at .57 (95% CI [0.31, 0.83]), ChatGPT at .54 (95% CI [0.18, 0.90]), other generative AI at .51 (95% CI [0.38, 0.67]) and [[automated-essay-scoring|automated writing evaluation]] nonsignificant at .46 (95% CI [-0.16, 1.08], p = .106); the moderator test for [[conversational-ai|AI type]] was not significant (p = .63).
4. **Three moderators mattered: year, level and outcome cluster.** More recent meta-analyses reported larger effects (B = 0.09, 95% CI [0.04, 0.15], p = .002); meta-analyses including tertiary-education students reported .61 (95% CI [0.54, 0.69]) versus .30 (95% CI [0.11, 0.49]) for younger samples only (p = .003); and outcome cluster moderated the effect (p = .043), with general academic outcomes more than twice STEM performance outcomes (g = .72 vs .40 in the moderator model).
5. **Sample size and methodological quality did not explain the variance.** Neither reported sample size (p = .150), estimated sample size (p = .191) nor the 17-indicator quality total score (B = 0.03, 95% CI [-0.04, 0.09], p = .410) moderated the effect of [[generative-ai|AI in education]].
6. **The data set was strongly heterogeneous.** Q = 1348.99 (p < .001), with 84% of the variance at the level of meta-analytic effect sizes and 3% at the level of meta-analyses; individual clusters ranged from I² of .74 to .89, and only intelligent tutoring systems showed near-zero within-cluster heterogeneity (I² = .03).
7. **Quality deficits were systematic across the 45 meta-analyses.** They met 9.3 of 17 quality and reproducibility indicators on average (SD = 1.3); all described inclusion criteria and accounted for heterogeneity (k = 45) and 44 assessed publication bias, but only 9 shared data, 6 assessed study quality, 1 shared analysis syntax, none preregistered anything and none listed excluded studies.
8. **Nearly half the included meta-analyses were underpowered.** Only 23 of 45 had at least 80% power to detect the mean effect they reported, 19 were underpowered and 3 reported too little information to compute power at all.
9. **Publication bias signals were mixed and cautionary.** The contour-enhanced funnel plot was symmetric (Kendall's τ = -.01, p = .868), but PET-PEESE indicated a significant association between effect size and precision (B = 0.9, SE = 0.3, p = .009; B = -0.9, SE = 0.3, p = .009), suggesting the reported effects may be inflated.
10. **Outliers and one negative effect sit inside the distribution.** The five largest of the 129 effect sizes were socio-emotional or vocabulary outcomes from language-learning chatbots, reaching g = 2.29 (95% CI [0.66, 3.92]) for willingness to communicate and 2.10 (95% CI [1.00, 3.20]) for motivation; the single negative coefficient was -.31 (95% CI [-1.45, 0.82]) for use of [[self-regulated-learning|self-regulated learning]] strategies in [[language-learning|second-language learning]], based on only four primary studies.

## The second-order method

A SOMA aggregates meta-analytic effect sizes rather than primary studies, and the design decisions follow from that inversion. The authors preregistered their search, stopping rules, coded variables, hypotheses and analyses on OSF in March 2025. They searched ERIC, PsycINFO and Web of Science Core Collection on 7 April 2025, added gray literature from Google Scholar, PsyArXiv and ResearchGate on 15 May 2025, and contacted the German Psychological Society for unpublished meta-analyses. Deduplication left 1,632 records for title and abstract screening (51.6% double-screened, 98.6% agreement), 52 references for full-text screening (96.2% agreement) and 45 eligible meta-analyses. Inclusion required a systematic search with [[quantitative-research|quantitative]] aggregation, at least one weighted average effect size for AI in education, a formal education context from preschool through university, and at least 75% of the sample reported as not diagnosed with a disorder; narrative reviews, quantitative-but-unaligned syntheses and superseded meta-analyses were excluded.

Overlap was handled rather than thresholded: with 818 unique primary studies behind the 45 meta-analyses, 598 appeared in one meta-analysis and 120 in two, and one study appeared in 11. Each was assigned a uniqueness value inversely proportional to its inclusion frequency and summed into a uniqueness score that served as the adjusted number of primary studies, which is more conservative than discarding overlapping meta-analyses outright. Effect sizes, mostly Hedges' g, were extracted with their standard errors and analyzed in three-level random-effects models with correlated effects (r = .5), since standard errors in a SOMA carry both sampling variance and the heterogeneity reported by the original meta-analysis. Moderators covered publication, sample, AI and outcome characteristics plus quality; quality was scored on 17 AMSTAR-adapted indicators; power was computed per meta-analysis.

## What moderates the effects

Three variables did: outcome cluster, educational level and publication year. The largest effects clustered in the socio-emotional and language domains, which the authors attribute partly to lower-stakes conversational practice that reduces the social cost of making mistakes. That explanation does not fully account for the outcome-cluster difference, because language outcomes measured by tests were still larger than STEM outcomes measured by tests; the authors suggest AI supports general academic activities and communication more readily than complex multi-step STEM [[problem-solving|problem solving]].

Educational level may partly be a study-design artifact, since meta-analyses of tertiary students differ in comparison conditions and measures as well as in learners, though the authors note that independent study, writing and information synthesis align closely with current AI capabilities. Publication year is the awkward finding. Generative AI sophistication does not explain it — ChatGPT and generative AI showed descriptively smaller effects than chatbots and broad AI, and AI type was not a significant moderator. Quality rose over time while power fell, and lower-powered evidence combined with selective reporting raises the risk of inflated effect sizes; the authors also speculate that rapid publication encouraged proximal, intervention-aligned outcome measures.

## Where the evidence is thin or uneven

The corpus is skewed. Half the meta-analyses (23 of 45) came from institutions in the People's Republic of China, and 32 of 45 (74%) focused on [[higher-ed|tertiary education]], leaving [[k-12|K-12]] evidence comparatively thin. Meta-analysts published far more on language outcomes (47 effect sizes) than STEM performance (16), and only three included meta-analyses examined the [[teacher-role|teacher]]'s role in any depth, with most primary studies targeting students rather than teachers. Intervention duration was coded but usually dichotomized or categorized in the source meta-analyses, which limits how precisely it can be compared across them.

Long-term effects are essentially unmeasured: the included meta-analyses rarely incorporate follow-up assessments, so the SOMA cannot say whether effects persist, attenuate or grow. Adverse results are rare but real, most visibly the negative coefficient for self-regulated learning strategies, which the authors read as possible [[cognitive-offloading|overreliance]] on chatbots replacing planning, monitoring and resource management. Ethics is close to absent from the synthesis layer: only a few meta-analyses mentioned [[ethics|ethical]] concerns and only one author discussed them explicitly, such as [[privacy|data privacy]] or potential for abuse. The comparison condition is also under-specified in places, including whether students could use AI during outcome assessment, which means some performance gains may reflect AI-assisted task completion rather than learning.

## What this means for practice
For practice, the differentiated picture is more useful than the headline. [[learning-gains|Learning gains]] from AI are real but medium, and they are not concentrated in the AI type that dominates current debate, so adoption decisions should be driven by how a tool supports a specific outcome rather than by novelty. Evidence is strongest for the domains most represented in the corpus — language learning, tutoring systems, higher education — and weakest for STEM performance and for younger learners, which is where claims of broad transformation should be held most loosely, especially given the effect-size inflation signals.

For research, the authors' conclusion is that accumulating more studies is not sufficient. Their priorities: report precisely so that SOMAs remain possible, preregister, share data and code, list included and excluded studies, assess risk of bias in primary studies, treat standardized and researcher-developed measures separately, broaden the subject and learner range beyond language and higher education, include follow-up assessments, and give ethical risk explicit attention. More tailor-made quality criteria are needed too, since double-screening and double-coding deserve separate items and the current indicator set produced little variance across meta-analyses.

## Limitations
The paper is a preprint (version 1, 8 June 2026) that has not been peer reviewed, so its own coding decisions and quality appraisals await external scrutiny. Overlap between meta-analyses is handled with uniqueness weights, not resolved: exact overlap assessment would require primary-study-level data, and the weighting is an approximation whose sensitivity was tested but not eliminated. Poor reporting upstream is a direct limitation on precision — three meta-analyses did not report their included primary studies at all — and several missing sample sizes had to be estimated or imputed. Heterogeneity is high (84% at the effect-size level), which is precisely why the aggregate effect should be read as an average across heterogeneous interventions rather than as an expected gain.

All effects are averages of averages, so nothing here pins down a specific tool, dose or duration in a specific classroom, and the influence of factor such as [[research-methods-aied|measurement and design features]] of the underlying primary studies could not be disentangled. The publication-bias picture is internally inconsistent, with a symmetric funnel plot alongside significant PET-PEESE results, so the direction of the bias is presumed but not quantified. The generalizability of a corpus weighted towards Asia and tertiary education to other systems and school levels is untested. And because effects were larger in more recent meta-analyses while quality rose and power fell, the temporal trend is as compatible with shifting research practice as with improving technology — a rival explanation the authors raise but cannot rule out.

## Connected Concepts

- [[meta-analysis-systematic-review]] — the publication type synthesized here, and the layer whose quality is itself under audit
- [[ai-ed-evaluation]] — the evidence base being appraised, including its power and publication-bias problems
- [[limitations-in-aied-research]] — reproducibility deficits, underpowered meta-analyses and the garbage-in-garbage-out constraint
- [[learning-gains]] — the outcome construct, quantified as Hedges' g across clusters and AI types
- [[generative-ai]] — one AI type among six tested, and not the largest effect despite current prominence
- [[intelligent-tutoring]] — the most established AI type, with the narrowest within-cluster heterogeneity
- [[conversational-ai]] — chatbots, including ChatGPT, as the numerically largest AI-type effect
- [[automated-essay-scoring]] — automated writing evaluation, the only AI type with a confidence interval including zero
- [[language-learning]] — the most studied outcome domain, to the relative neglect of STEM
- [[self-regulated-learning]] — the one outcome showing a negative coefficient, read as possible overreliance
- [[motivation]] — the socio-emotional domain where the largest single effect sizes appear
- [[higher-ed]] — 74% of included meta-analyses focused on tertiary students
- [[k-12]] — comparatively under-represented, a stated gap for future work
- [[research-methods-aied]] — reporting, risk-of-bias and measurement choices that future meta-analyses must address

## Connected Articles

- [[bartos-ai-learning-meta-meta-analysis-2026]] — A meta-meta-analysis working at the primary-study level rather than the meta-analytic level
- [[genai-meta-analysis-programming-learning]] — A domain-specific meta-analysis of generative AI and programming learning outcomes
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analytic evidence on AI literacy interventions rather than AI-delivered instruction
- [[robot-assisted-language-learning-meta-analysis-2026]] — Language-learning effects of a neighbouring technology, useful for calibrating chatbot effects
- [[llm-formative-feedback-systematic-review-2026]] — Systematic review of LLM-generated formative feedback, the mechanism behind several outcome clusters
- [[oneill-presumed-effective-meta-analysis-2026]] — Meta-analysis interrogating what counts as an effective AI intervention
- [[el-salvador-ai-tutoring-selection-claim-2026]] — A scrutiny of claims made from tutoring evidence, relevant to effect-size inflation
- [[weidlich-chatgpt-effect-search-cause-2025]] — On mistaking effects of searching for effects of learning when students use AI
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — Higher-education integration context for the tertiary-heavy evidence base

## Citation

Emslander, V., Lindner, M. A., Eitel, A., Kasneci, E., & Bardach, L. (2026). [*What Do We Know About the Effects of Artificial Intelligence in Education? A Second-Order Meta-Analysis*](https://osf.io/preprints/psyarxiv/6e5du) (Preprint, version 1, 8 June 2026).
