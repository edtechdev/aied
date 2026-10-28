---
title: "What Are Best Practices for Reporting and Interpreting AI in Education Research?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-10-28T11:43:14-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

Your draft has a headline number in the abstract, and a reviewer has just asked what the control group actually did. Or you are the reviewer, holding a meta-analysis whose pooled effect is 0.67 and whose methods section runs to a page and a half. Or your department is writing guidance on how staff should report AI studies and wants something more specific than "follow the standards."

Six omissions decide most of these cases: which AI system was used, what it was configured to do, what pedagogical role it played, whether humans designed or reviewed its output, what the outcome measure actually captured, and what the authors did about bias, cost and limitations. "Unassessable" is the honest verdict when they are missing, and it is a different verdict from "refuted."

## The short version

**1.** Describe the AI as a treatment, not a vendor. Model, version, configuration, prompts, role, and who designed or reviewed the output.

**2.** Name the pedagogical rationale and the active comparison. A product name is not a method, and business-as-usual is not a fair control.

**3.** Make the measure match the claim, including whether the outcome was delayed and unaided.

**4.** Report the uncertainty the analysis actually has: dependent effects, between-study variance, prediction intervals, subgroup sizes, publication bias.

**5.** Validate every automated judgment, with a named gold standard and a named adjudicator.

**6.** Report the counterweights: governance, compute cost, your own AI use, null results, and only citations you have checked.

## Describe the AI as a treatment someone could rebuild

This is the check most submissions fail. The RAISE framework (*Reporting AI Studies in Education*, Allison 2026) is a 30-item checklist across ten thematic domains, and its diagnostic claim is specific: submissions routinely omit which model was used, how it was configured, what role it played, and whether human actors designed or reviewed its outputs. Reviewers are then left with four unanswerable questions. What exactly was the AI doing? Was it necessary? Is this replicable? Are the learning claims credible?

RAISE runs from educational justification through API-level specification, learner-AI interaction, accessibility and cultural fit, participants and setting, human involvement, design, ethics, transparency and reproducibility, to limitations. Its companion Ethics and Risk Matrix covers risks to learner [[agency]], [[equity-in-ai-education|equity]], data [[governance]] and algorithmic transparency. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah and Gašević (2026)]] offer a streamlined alternative. TEP-AIED folds Transparency, Ethics and Pedagogy into one interdependent structure, supplies a guideline table mapped to seven paper sections, and asks authors to add a Method subsection titled "Transparency, Ethics, and Pedagogy Considerations." Their reason is practical: RAISE is comprehensive and too granular for routine empirical use. The disclosure sits under [[ai-use-disclosure]] and is what makes [[privacy]] and [[ethics]] claims checkable.

Educational justification comes first in RAISE because AI is not a neutral tool. Value depends on alignment between the learning problem, a theoretical rationale, and the mapping from objectives to outcome measures. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] found that all but two of 14 audited meta-analyses defined the treatment as a tool, ChatGPT or GenAI or "AI" generally. A product name is not a [[pedagogy]]. Treating exposure to ChatGPT as one common intervention is comparable to meta-analyzing the effects of "paper."

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] make the same argument for primary studies. Auditing a subset of the comparisons behind a prominent meta-analysis, they found only 21% had a well-defined treatment, a control group and a valid learning measure. The reported effect size (g = 0.7) also exceeded that of purpose-built [[intelligent-tutoring|intelligent tutoring systems]] (0.66), and that gap is a warning sign: a treatment that beats purpose-built tutoring is probably a bundle of different things wearing one label.

The test is one question: could a competent reader rebuild your intervention from the method section alone and get the same thing?

## Decide what your measure licenses you to claim

In O'Neill's evidentiary audit of 46 randomly selected primary studies, 28 (61%) presented validity concerns. Dependent-variable mismatch was the most common (n = 15), followed by independent-variable mismatch (n = 11), experimental design problems (n = 7), data extraction problems (n = 6), absence of a control group (n = 6) and nonrandom group assignment (n = 6). Multidimensional outcomes were routinely pooled as if interchangeable, with test scores, homework quality, [[motivation]], [[self-efficacy]], attitudes and [[student-engagement|engagement]] collapsed into one "academic achievement" number.

Two reporting habits prevent that. State what construct the instrument measures and that it was validated for that population; [[self-report-measures]] shows where perception-based measures diverge from behavior, and [[assessment-validity]] covers construct validity. Then report an outcome that does not depend on the learner's belief about the aid. Immediate task performance under assistance is not a [[learning-gains|learning gain]], and [[cognitive-offloading|cognitive offloading]] is the mechanism that most plausibly separates the two. The [[verification-quality-reliance-calibration-genai-2026|2026 mini review of 493 records and 14 priority studies]] found none measured verification success and the following reliance decision together against an independently adjudicated standard of output quality, and few looked past immediate performance to delayed retention or [[transfer-of-learning|transfer]].

State the ceiling explicitly in the discussion. A study that measured a quiz taken with the tool open can support a claim about assisted performance. It cannot support a claim about what students learned, and that sentence costs one line.

## Report the uncertainty your analysis actually has

For syntheses, report dependent-effect handling, between-study variance, prediction intervals and publication-bias assessment. I² alone will not do the work. O'Neill found reported heterogeneity severe wherever it was given, from 77.2% to 94.4% across 13 meta-analyses with 12 above 80%, and never resolved: no moderator analysis met the minimum subgroup size of ten studies. Twelve meta-analyses treated dependent effect sizes from the same study as independent, which inflates the apparent evidence. Only four reported between-study variance (τ²) and only two a prediction interval, and both intervals included zero. Publication bias was not validly assessed anywhere in the set.

Heterogeneity figures need their model attached, because I² is precision-dependent. [[limitations-in-aied-research|Limitations in AIEd Research]] documents one synthesis at I² = 82.98% under a fixed-effect model and 15.75% under random effects. A reader given only the first number cannot tell how inconsistent the corpus is. Report τ² and a prediction interval alongside it, which is also the convention [[meta-analysis-systematic-review|the review literature]] asks for.

Then discount your own headline. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] pooled 1,840 effect sizes from 67 meta-analyses and found that once publication bias is modeled the average effect falls to roughly one-third of the published median (SMD = 0.196 versus 0.67), with a prediction interval from -1.521 to +1.908. That interval spans substantial harm to substantial benefit for a hypothetical new study. It is the most useful number in the paper and the one most likely to be dropped from the abstract.

## Say how far the claim travels

Fairness and scope fail in the same way: a large effect that means less than it appears. Eleven of the 14 audited meta-analyses set no population boundary, so "students" spanned children through medical trainees. A single course, institution, discipline or country does not license a general claim, and results for one tool rarely transfer to another.

Three explanations account for most large effects, and each is reportable. Novelty is one. Extra time on task is another. The third is a comparison condition that received business-as-usual instruction rather than an active control. Report what the control actually did, how much time each arm spent, and how novel the tool was. State the population boundary as well, because effects differ across learner groups and an unstated boundary is what lets one pooled number stand in for all of them; [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] sets out the variation.

Treat the tool as a moving target. Proprietary systems change without notice, so a finding is bound to a model version, and the [[benchmark]] that thrilled in one release may not hold in the next. Version and access date belong in the method section for that reason, not only for replicability.

## Validate the automated judgments

[[ai-ed-evaluation|AIED evaluation]] increasingly delegates scoring to models, which makes the validation procedure part of the result rather than an appendix. Khan Academy's account of its [[intelligent-tutoring|AI tutor]] metrics reports that cognitive engagement is scored by an [[llm]] judge calibrated against human pedagogical experts at F1 0.83, and that metric movements came from more than 40 live experiments in five months rather than offline evaluation ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] show that human-machine disagreement about [[formative-assessment|pretest question]] quality is systematic rather than random, and that rubric operationalization matters more than rationale-first prompting.

Agreement with human coders is a separate thing from quality, and reporting it as if it were quality is a reviewer target. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] had an independent expert judge 855 pairwise code sets blind to source. Human-LLM agreement came in at a mean Jaccard of 0.30 against 0.52 for human-human agreement, while the blind verifier preferred human and machine coding at indistinguishable rates (51.5% versus 48.5%, p = 0.537). Report the calibration target, the gold standard, and who adjudicated the disagreement. Those three items are what let a reader decide how much weight the automated score can carry.

## Disclose the costs and your own use

A review of all AIED 2025 conference papers found a pattern of LLM adoption without disclosure: most projects used LLMs, and fewer than a handful reported resource consumption or carbon footprint. That paper supplies an open-source method with measuring tools for local and cloud hardware, plus a formula for estimating the computational expense of frontier models whose parameter counts are undisclosed. Its argument is that not reporting these costs is itself an ethical concern. Data governance, consent, accessibility and cultural fit belong in the same paragraph (RAISE items; [[universal-design-for-learning]], [[accessibility]]). [[equity-ethics-pedagogical-safety-research]] carries the fuller treatment.

Your own use of AI in the research process needs the same disclosure. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta and Lin's PRISMA-LLM analysis]] of 888 review-automation papers shows how uneven this reporting is. Since 2023, 38.0% of software and product papers reported no evaluation at all, against 9.3% of LLM papers. Mean reporting richness was 6.3 for LLM papers and 3.3 for software and product papers. 84.1% of LLM usage relied on proprietary or hosted systems, with only 4.9% open-weight. Their framework separates implementation disclosure from consequence-sensitive evaluation across five disclosure tiers, which is a workable template for describing what a tool did inside a review.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan (2026)]] add the author-side picture. Of 28 postgraduate researchers, 27 used GenAI across ideation, literature review, explanation, data processing, programming, [[writing-education|academic writing]], editing and translation, They calibrated use to stakes and disciplinary norms. Their institutions' policies addressed teaching and assessment rather than research practice, which leaves the reporting decision to the author.

## Publish the null, and check every citation

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verified 30 fabricated references across 14 papers, with the count at one technical symposium rising from 3 in 2025 to 17 in 2026, or 2.3% of that year's proceedings papers. LLM-assisted drafting makes a plausible invented citation cheap to produce, which is why the checking has to happen before submission rather than after acceptance.

The counterweights in that audit matter when you cite it. Most flagged references were benign: 229 were ACM metadata mismatches where the PDF was correct, and 188 were valid bibliographic variants. The fabricated count is a deliberate lower bound, and the benign majority is not a rounding error. Verify every entry you cannot personally check.

Reporting null and negative findings is the other half of an honest evidence base. Bartoš et al. found strong evidence of suppressed null results (every Egger test p < .0001) and extreme heterogeneity (τ = 0.869), with no outcome, field, level or AI-role subgroup showing consistent gains. They also found no difference between studies published before and after January 2023, which undercuts the claim that modern generative tools specifically produce gains.

## What researchers get wrong about this

**"An effect size is a property of the modality."** There is no effect of AI in education to report. All but two of the audited meta-analyses defined the treatment as a tool name, only 21% of audited comparisons had a defined treatment, a control and a valid measure, and the pooled g = 0.7 sat above purpose-built intelligent tutoring at 0.66. An effect size belongs to a design, a population and a measurement occasion.

**"The pooled mean is what will happen to my students."** The mean describes the set of studies, and nothing in it fixes any single classroom. The bias-adjusted average is SMD = 0.196 and its prediction interval runs from -1.521 to +1.908. Reported heterogeneity sits above 80% in 12 of 13 meta-analyses, and no subgroup in the larger pool showed consistent gains. A student-level change is not identifiable from either number.

**"A null result means the tool does not work."** A null is a statement about a design at a given precision, and absence of a detectable effect in one study is a fact about that study. The bias-adjusted SMD = 0.196 came from a literature in which every Egger test was significant, so the defensible reading of the corpus is a small and uncertain average. No outcome, field, level or AI-role subgroup in the larger pool showed consistent gains either. The documented problem in this literature is suppression.

**"One study settles it."** The base rates argue otherwise. 61% of vetted primary studies had validity concerns, one course or institution does not license a general claim, and a proprietary system is a moving target bound to a model version. A single study is a data point with a design attached.

**"High agreement with human coders means the model is scoring the right thing."** Human-LLM agreement was 0.30 against 0.52 for human-human, and the blind verifier could not distinguish the two coding sets at 51.5% versus 48.5%. Agreement measures consistency with a coder, and quality is a separate question that needs a gold standard and an adjudicator.

## The objections you will hear

**"Reviewers want novelty, not method detail."** Journals are moving the other way. RAISE and TEP-AIED give editors a construct to require, and TEP-AIED's Method subsection is a low-friction entry point. Method detail is what converts an unassessable paper into a citable one.

**"We do not have the space."** The five disclosure tiers are reporting levels rather than risk levels, so the evaluation depth can be a sentence or two. Version, prompts and role fit in a short paragraph. Cost and governance fit in a limitations sentence.

**"Everyone reports it this way."** The numbers say the norm is the problem: 61% of vetted primary studies with validity concerns, 12 of 13 meta-analyses above 80% heterogeneity, 38.0% of software and product papers with no evaluation.

**"Our tool is proprietary, so we cannot report the model."** Report version, date accessed, configuration, the prompts you supplied, role and guardrails. If the vendor will not say, that constraint belongs in the limitations as a bound on the claim.

**"Reporting nulls will hurt us."** Suppressed nulls are the documented mechanism behind the SMD = 0.196 bias-adjusted average. Publishing them is what keeps your positive result readable.

## What to do this week

**1.** Read your abstract against your method section and delete every claim the method cannot support. One sentence on the ceiling of the measure is usually enough.

**2.** Add the specification paragraph: model, version, access date, configuration, prompts, role, and who designed or reviewed the output.

**3.** Pull the τ², the prediction interval and the publication-bias assessment out of the appendix and into the results, or say plainly that you did not compute them.

**4.** Write the population boundary and the control condition into the design statement, including how much time each arm spent.

**5.** Verify every reference you did not personally read, and check the author field first.

## Where to go next

[[research-methods-aied|Research Methods in AI in Education]] covers the design choices underneath these reporting decisions, and [[limitations-in-aied-research|Limitations in AIEd Research]] is the catalog of failure modes with the numbers attached. [[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]] is the reader's side of the same problem, [[does-ai-help-students-learn|the evidence on durable learning]] is what most of these measures are trying to reach, [[evaluating-ai-interventions-methods]] covers the measures and comparison designs, and [[checking-whether-educational-ai-works]] is the shorter version of the question. For the gaps this literature has not filled, see [[research-gaps-aied]].
