---
title: "What Are Best Practices for Reporting and Interpreting AI in Education Research?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-09-17T03:00:00-04:00"
weight: 65
type: faq
foundations: [limitations-in-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [research methods, literature review, meta-analysis]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
---

# What Are Best Practices for Reporting and Interpreting AI in Education Research?

You are writing up an AI in education study whose claim is already running ahead of its design, or reviewing one and deciding whether the headline number means anything. Either way the same six omissions decide it: which AI system was actually used, what it was configured to do, what pedagogical role it played, whether humans designed or reviewed its output, what the outcome measure truly captured, and what the authors did about bias, cost and limitations. An author who omits them submits a study that cannot be appraised; a reviewer who does not look for them cannot tell a designed intervention from a recycled tool demo. "Unassessable" — not "supported" and not "refuted" — is the honest verdict when they are missing.

The stakes are not hypothetical. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] audited 14 peer-reviewed meta-analyses claiming AI improves education and found that *none* provided a valid basis for the claims it advanced. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] pooled 1,840 effect sizes from 67 meta-analyses and found that once publication bias is modeled, the average effect falls to roughly **one-third** of the published median (SMD = 0.196 versus 0.67). [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verified **30 fabricated references across 14 computing-education papers**, all published in 2025 or 2026 — a defect that reaches readers precisely because reviewers cannot verify every entry in a reference list. Reporting discipline decides whether the field's evidence base is usable at all. For the design choices underneath it see [[research-methods-aied|Research Methods in AI in Education]]; for the catalog of failure modes, [[limitations-in-aied-research|Limitations in AIEd Research]].

## The short version

Six moves decide whether your claim survives review:

1. **Describe the AI system as a treatment, not a vendor.** Model, version, configuration, prompts, role, and whether humans designed or reviewed the output.
2. **State the pedagogical rationale and the active comparison.** A product name is not a method; business-as-usual is not a fair control.
3. **Make the measure match the claim.** What the instrument captures, its validation for this population, and whether the outcome was delayed and unaided.
4. **Validate every automated judgment.** Name the gold standard, the calibration target and who adjudicated the disagreement.
5. **Report the analysis's uncertainty, not just its point estimate** — dependent effects, τ², prediction intervals, subgroup sizes, publication-bias assessment.
6. **Report the counterweights**: ethics and governance procedure, compute and environmental cost, your own AI use, null results, and only citations you have verified.

## Decide what you will say about the AI system — and write it so someone could rebuild it

This is the check most submissions fail. The RAISE framework (*Reporting AI Studies in Education*, Allison 2026) is a 30-item checklist across ten thematic domains, and its diagnostic claim is specific rather than rhetorical: submissions routinely omit which model was used (GPT-4, Claude, or a custom algorithm), how it was configured (prompts, fine-tuning parameters), what role it played (feedback generator, co-author, tutor, evaluator), and whether human actors designed or reviewed its outputs. That leaves reviewers with four unanswerable questions — "What exactly was the AI doing?", "Was it necessary?", "Is this replicable?" and "Are the learning claims credible?"

It runs from educational justification through API-level specification, learner–AI interaction, accessibility and cultural fit, participants and setting, human involvement, design, ethics, transparency and reproducibility, to limitations. Its companion **Ethics and Risk Matrix** covers risks to learner [[agency]], [[equity-in-ai-education|equity]], data [[governance]] and algorithmic transparency. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah and Gašević (2026)]] offer a streamlined alternative, TEP-AIED, which folds Transparency, Ethics and Pedagogy into one interdependent structure, supplies a guideline table mapped to seven paper sections, and asks authors to add a Method subsection titled "Transparency, Ethics, and Pedagogy Considerations" — because, on their account, RAISE is comprehensive but too granular for routine empirical use. The disclosure sits under [[ai-use-disclosure]] and is what makes [[privacy]] and [[ethics]] claims checkable.

## Decide whether your treatment is a method or a product

Educational justification is RAISE's first domain because AI is not a neutral tool: value depends on alignment between the learning problem, a theoretical rationale, and the mapping from objectives to outcome measures. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] found that all but two of the audited meta-analyses defined the treatment as a tool — ChatGPT, GenAI, "AI" — and that a product name is not a [[pedagogy]]; treating exposure to ChatGPT as one common intervention is comparable to meta-analyzing the effects of "paper." [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] make the same argument for primary studies: auditing a subset of the comparisons behind a prominent meta-analysis, they found only **21% had a well-defined treatment, a control group, and a valid learning measure**, and the reported effect size (g = 0.7) exceeded that of purpose-built [[intelligent-tutoring|intelligent tutoring systems]] (0.66) — a red flag that the "treatment" was a heterogeneous secret sauce rather than a named method.

The test: could a competent reader rebuild your intervention from the method section alone and get the same thing?

## Decide what your instrument measures and what the claim may therefore say

In O'Neill's evidentiary audit of 46 randomly selected primary studies, **28 (61%) presented validity concerns**, and dependent-variable mismatch was the most common (n = 15), followed by independent-variable mismatch (n = 11), experimental design problems (n = 7), data extraction problems (n = 6), absence of a control group (n = 6) and nonrandom group assignment (n = 6). Multidimensional outcomes were routinely pooled as if interchangeable — test scores, homework quality, [[motivation]], [[self-efficacy]], attitudes and [[student-engagement|engagement]] collapsed into one "academic achievement" number.

Two reporting habits prevent this. State what construct the instrument measures and that it was validated for that population: see [[self-report-measures]] for where perception-based measures diverge from behavior, and [[assessment-validity]] on construct validity. Then report an outcome that does not depend on the learner's belief about the aid, because immediate task performance under assistance is not [[learning-gains|learning gain]]: [[verification-quality-reliance-calibration-genai-2026|a 2026 mini review of 493 records and 14 priority studies]] found none measured verification success and the following reliance decision together against an independently adjudicated standard of output quality, and few looked past immediate performance to delayed retention or transfer. [[does-ai-help-students-learn|The evidence for durable learning]] remains mixed, and [[cognitive-offloading|cognitive offloading]] is the mechanism that most plausibly separates the two.

## Decide how your automated judgments were validated

[[ai-ed-evaluation|AIED evaluation]] increasingly delegates scoring to models, which makes the validation procedure part of the result rather than an appendix. Khan Academy's account of its [[intelligent-tutoring|AI tutor]] metrics reports that cognitive engagement is scored by an [[llm]] judge calibrated against human pedagogical experts at F1 0.83, and that metric movements came from more than 40 live experiments in five months rather than offline evaluation ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] show that human–machine disagreement about [[formative-assessment|pretest question]] quality is systematic rather than random, and that rubric operationalization matters more than rationale-first prompting.

Agreement with human coders is not quality, and reporting it as if it were is a reviewer target. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] had an independent expert judge 855 pairwise code sets blind to source, finding human–LLM agreement (mean Jaccard 0.30) well below human–human agreement (0.52) while the blind verifier preferred human and machine coding at indistinguishable rates (51.5% vs 48.5%, p = 0.537). Report the calibration target, the gold standard, and who adjudicated it.

## Decide whether the comparison is fair and how far the claim travels

Fairness and scope fail the same way: a large effect that means less than it appears. 11 of the 14 audited meta-analyses set no population boundary, so "students" spanned children through medical trainees; a single course, institution, discipline or country does not license a general claim, and results for one tool rarely transfer to another. Novelty effects, extra time on task, and a comparison condition that received business-as-usual instruction rather than an active control are the usual explanations for a large effect — so report what the control actually did, how much time each arm spent, and how novel the tool was. Treat the tool as a moving target too: proprietary systems change without notice, so a finding is bound to a model version, and the [[benchmark]] that thrilled in one release may not hold in the next.

## Decide what your analysis can support — and report its uncertainty, not just its headline

For syntheses, report dependent-effect handling, between-study variance, prediction intervals and publication-bias assessment, not just I². O'Neill found that reported heterogeneity was severe wherever it was given (I² from 77.2% to 94.4% across 13 meta-analyses, 12 of them above 80%) and never resolved (no moderator analysis met the minimum subgroup size of ten studies), that 12 meta-analyses treated dependent effect sizes from the same study as independent — inflating apparent evidence — and that only four reported between-study variance (τ²) and only two a prediction interval, both of which included zero. Publication bias was not validly assessed anywhere.

Because I² is precision-dependent, a heterogeneity figure has to travel with its model: [[limitations-in-aied-research|Limitations in AIEd Research]] documents one synthesis whose heterogeneity is I² = 82.98% under a fixed-effect model and 15.75% under random effects, so a reader given only the first number cannot tell how inconsistent the corpus is. Report τ² and a prediction interval alongside it; see [[meta-analysis-systematic-review|meta-analysis and systematic review]] for the review-side conventions, and discount the headline accordingly — Bartoš et al.'s bias-adjusted average was SMD = 0.196 with a prediction interval running from −1.521 to +1.908, spanning substantial harm to substantial benefit for a hypothetical new study.

## Decide what you disclose about ethics, cost, governance — and your own AI use

A review of all AIED 2025 conference papers found an "LLM adoption without disclosure" pattern: most projects used LLMs, but fewer than a handful reported resource consumption or carbon footprint. That paper supplies an open-source method with measuring tools for local and cloud hardware plus a formula for estimating the computational expense of frontier models whose parameter counts are undisclosed, and argues that not reporting these costs is itself an ethical concern. Add data governance, consent, and accessibility/cultural fit (RAISE items; [[universal-design-for-learning]], [[accessibility]]) — see [[equity-ethics-pedagogical-safety-research]] for the fuller treatment of these obligations.

Your own use of AI in the research process needs the same disclosure. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta and Lin's PRISMA-LLM analysis]] of 888 review-automation papers shows how uneven this reporting is: since 2023, **38.0% of software/product papers reported no evaluation at all** (against 9.3% of LLM papers), mean reporting richness was 6.3 for LLM papers versus 3.3 for software/product papers, and 84.1% of LLM usage relied on proprietary or hosted systems with only 4.9% open-weight. Their framework separates implementation disclosure from consequence-sensitive evaluation across five disclosure tiers — a workable template for describing what a tool did in a review. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan (2026)]] add the author-side picture: 27 of 28 postgraduate researchers used GenAI across ideation, literature review, explanation, data processing, programming, [[writing-education|academic writing]], editing and translation, calibrating use to stakes and disciplinary norms, while noting that institutional policies address teaching and assessment rather than research practice.

## Decide what to do with null results and citations

Denny et al. verified 30 fabricated references across 14 papers, with the verified count at one technical symposium rising from 3 in 2025 to 17 in 2026 (2.3% of that year's proceedings papers) — and LLM-assisted drafting makes a plausible invented citation cheap to produce. Their counterweights matter when you cite that audit: most flagged references were benign — 229 were ACM metadata mismatches where the PDF was correct and 188 were valid bibliographic variants — so the fabricated count is a deliberate lower bound and the benign majority is not a rounding error. Verify every entry you cannot personally check.

Reporting null and negative findings is the other side of the same coin. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] found strong evidence of suppressed null results (every Egger test p < .0001) and extreme heterogeneity (τ = 0.869), with no outcome, field, level or AI-role subgroup showing consistent gains. They also found no difference between studies published before and after January 2023, which undercuts the claim that modern generative tools specifically produce gains.

## The field's documented weaknesses, in its own numbers

The base rates against which a claim should be weighed:

- **Validity:** 28 of 46 vetted primary studies (61%) had validity concerns; only 21% of audited comparisons had a well-defined treatment, control group and valid measure.
- **Unresolved heterogeneity:** I² from 77.2% to 94.4% across 13 meta-analyses, 12 above 80%, no moderator analysis reaching the ten-study minimum, dependent effects treated as independent in 12, and only four syntheses giving τ² against only two a prediction interval.
- **Publication bias:** unassessed across the 14 audited meta-analyses; every Egger test in the larger pool was significant (p < .0001), with τ = 0.869.
- **References:** 30 fabrications across 14 papers, 17 in one 2026 symposium — 2.3% of that year's proceedings.

## The objections you will hear

**"Reviewers want novelty, not method detail."** Journals are moving the other way: RAISE and TEP-AIED give editors a construct to require, and TEP-AIED's Method subsection is a low-friction entry point. Method detail is what converts an unassessable paper into a citable one.

**"We do not have the space."** The five disclosure tiers are reporting levels rather than risk levels, so the pipeline's evaluation depth can be a sentence or two. Version, prompts and role fit in a short paragraph; cost and governance fit in a limitations sentence.

**"Everyone reports it this way."** That is the finding, not a defense — 61% of vetted primary studies with validity concerns, 12 of 13 meta-analyses above 80% heterogeneity, 38.0% of software/product papers with no evaluation. The norm is the defect.

**"Our tool is proprietary, so we cannot report the model."** Report version, date accessed, configuration, prompts you supplied, role and guardrails. If the vendor will not say, that constraint belongs in the limitations as a bound on the claim.

**"Reporting nulls will hurt us."** Suppressed nulls are the documented mechanism behind the SMD = 0.196 bias-adjusted average; publishing them is what keeps your positive result readable.

## Pre-submission checklist

- **Report:** the model, version, configuration and prompts, and the AI's role in the design. **Check:** could you rebuild the intervention from the method section alone?
- **Report:** the pedagogical rationale and the active comparison condition. **Check:** is the treatment a named method rather than a product name?
- **Report:** what each measure captures, its validation for this population, and the delayed or unaided outcome. **Check:** does the headline claim match the dependent variable?
- **Report:** who adjudicated automated judgments, against what gold standard, with what agreement. **Check:** is accuracy or agreement being used as if it were quality?
- **Report:** dependent-effect handling, τ², prediction intervals, moderator subgroup sizes and publication-bias assessment. **Check:** is heterogeneity quoted with its model and its precision?
- **Report:** human involvement, data governance, consent, accessibility and cultural fit, plus compute and environmental cost. **Check:** are ethics claims backed by described procedure rather than asserted principles?
- **Report:** AI use inside the research process, across all five disclosure layers. **Check:** was the reviewing or analysis pipeline evaluated at all?
- **Report:** null, negative and disconfirming results alongside positive ones. **Check:** is the effect size discounted for likely publication bias?

## What would actually raise the standard

The remedies in this literature are institutional rather than individual. O'Neill recommends mandatory data transparency for meta-analyses — full effect-size tables, dependency structures, τ² and prediction intervals — plus stronger reviewer and editorial gatekeeping and a functioning retraction practice, on the argument that these failures are the products of failed gatekeeping rather than isolated errors. PRISMA-LLM proposes five disclosure tiers as reporting levels rather than risk levels, so that a review pipeline's evaluation depth is stated plainly; RAISE and TEP-AIED give journals a construct to require in submissions. For related ground see [[research-gaps-aied|notable gaps in the research literature]], [[limitations-in-aied-research|Limitations in AIEd Research]], and [[evaluating-ai-interventions-methods|measures and methods for evaluating AI-related interventions]].
