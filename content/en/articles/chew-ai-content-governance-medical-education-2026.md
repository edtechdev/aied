---
title: "When the Teaching Material Is the Risk: The Governance Gap for AI-Generated Content in Medical Education"
created: "2026-11-11T08:04:45-05:00"
updated: "2026-11-11T08:35:00-05:00"
type: article
evidence_context: educational
published: "2026"
page_kind: [framework]
research_method: [position paper]
discipline: [medical education]
level: [higher ed]
audience: [administrators, instructors]
foundations: [ai-literacy]
ethics: [ai-use-disclosure]
institutions: [governance]
assessment: [assessment-validity]
confidence: high
sources: ['raw/papers/chew-ai-content-governance-medical-education-2026.md']
source_url: "https://doi.org/10.2196/115991"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Chew argues that [[medical-education|medical education]] has governed the wrong end of [[generative-ai|generative AI]]. Institutions have written rules for how learners use [[conversational-ai|chatbots]] and almost nothing for how faculties use them to produce teaching material — images, vignettes, simulated patients, test items, rubrics and feedback. That second use carries a different failure structure: a plausible error in [[curriculum-design|curriculum]] content reaches every learner as established knowledge, and may never generate a signal the way a clinical error eventually does. The piece sorts AI-generated teaching content into representational, reasoning and assessment types, each with its own characteristic failure and its own kind of check, then sets out what institutional [[governance|governance]] would have to do: know what is in use, test it before learners meet it, act on findings including withdrawal, and monitor approved tools for drift.

## Key Findings

1. **Governance targets learners, not curriculum production.** Medical education uses AI in two ways — learners consult it, and institutions use it to build teaching and assessment material. Policy attention has concentrated on the first, while the second is treated as production efficiency and checked, if at all, through personal and unrecorded review.
2. **Three content types fail differently.** Representational content (images, diagrams, slide summaries) fails by depicting something plausible but wrong, and needs checking against a reference standard. Reasoning content (cases, vignettes, simulated patients, worked differentials) fails by reaching a fluent but incorrect conclusion, and needs a checker who can reach the conclusion unaided — which novices cannot. Assessment content (items, keys, rubrics, scores) fails by measuring something other than the intended knowledge, and needs evidence of what it actually measures.
3. **Plausibility is what makes the errors dangerous.** AI-generated medical images commonly carry demographic bias and clinical inaccuracies while rarely looking incorrect, and without disclosure they inherit the trust given to textbook illustrations. Generated items can perform like human-written ones and pass unnoticed, which does not establish that they test the intended knowledge — the synthetic validity problem. [[automated-assessment|AI grading]] can agree closely with human markers on one question and diverge on another, so both need checks after approval, not only before it.
4. **Accountability cannot sit with the tool or the learner.** Human-authored content has always contained errors, but a named author was accountable for them. Generative tools cannot assume authorship accountability, and learners are poorly placed to evaluate content they have not yet learned. The accountable party is therefore the institution deploying the content.
5. **Four capabilities define institutional governance.** Know what content is in use and where it came from; test it, or the system generating it, before learners see it; act on findings, including withdrawal; and monitor approved tools for performance drift. Where an agent generates content during use, the check moves to the system — its sources, instructions and permitted actions — with interactions logged for sampled audit.
6. **The two entry points carry different consequences.** Learner misuse produces an incorrect answer a supervisor may catch, and clinical error eventually surfaces through a patient, complaint or audit. Curriculum misuse exposes every learner to flawed material presented as established knowledge and may not produce a signal for years, if ever.
7. **Governance capacity risks becoming a new inequality.** Responsible adoption needs clinical subject expertise alongside [[educational-measurement|psychometrics]], bias, privacy and monitoring expertise — resources that schools with the most to gain from AI-generated content are least likely to have. Chew's mitigations include creation-time logging and disclosure, independent review of AI-assisted checking, named roles with authority to pause or withdraw content, full review for high-stakes material and sampling for the rest, and regional joint review panels with shared audited item banks.

## What the piece argues

The op-ed is a governance argument built on a distinction between two failure regimes. In the learner-use regime, errors are individual and correctable; in the curriculum-production regime, errors are collective and silent. The categories of teaching content then map onto the kinds of expertise needed to catch each failure: a reference standard for images, independent competence for reasoning cases, and measurement evidence for assessment material. Expert review, on this account, is necessary but insufficient — an expert can confirm every item is correct and still miss bias across the set, or miss that the items measure the wrong construct.

The recommendations follow the same logic. Disclosure and logging establish provenance; expert plus psychometric review establishes fitness; named roles establish the authority to withdraw; monitoring establishes that a tool which passed last term still behaves. The proposal to route agent-generated content through system-level checks, rather than reviewing outputs one by one, reflects the fact that an agent's output distribution is a property of its sources and instructions, not of any single artifact.

## Where it lands in the wider literature

The argument is consistent with work on [[assessment-validity|assessment validity]], which has long held that an instrument's plausibility is not evidence of what it measures, and with the [[ai-use-disclosure|disclosure]] literature, which treats provenance as a precondition for trust rather than a courtesy. Its contribution is to apply both to the production side of teaching, where the accountability chain is weakest: the person approving a module is often not the person who generated its contents, and the learners who would notice a problem are the ones least able to.

For institutions outside medicine the structure transfers with one adjustment. The content categories differ — a history vignette is not a clinical vignette — but the failure logic does not: representational accuracy, reasoning soundness and measurement validity are the three things any AI-generated teaching material can get wrong, and each needs a different checker.

## What this means for practice

- **Program directors.** Assign authority to pause or withdraw AI-generated content to a named role inside the existing review cycle, because a governance rule without a person who can enforce it is a statement of intent.
- **Faculty.** Disclose AI-generated or substantially AI-assisted material at creation and at use, and route high-stakes or widely reused content through full review rather than sampling.
- **Quality leads.** Check the system rather than only its outputs when an agent generates content during teaching, and log interactions so that a sample can be audited later.
- **Institutions with thin capacity.** Form regional review panels and share audited item banks; the audit burden is the binding constraint, and pooling it is the cheapest way to meet it.

## Limitations

This is a single-author op-ed, not an empirical study: it reports no data, no systematic search and no evaluation of the governance model it proposes. The claim that curriculum errors may never produce a signal is a plausible inference rather than a documented finding, and the three-way content typology is an organizing device rather than a validated taxonomy. The recommendations are untested in implementation, and their cost is asserted rather than estimated. Two of the three failure modes are described as documented — image bias and the synthetic validity problem — but the piece does not review that evidence systematically, so a reader wanting the underlying studies must go to the cited literature.

## Citation

Chew, B.-H. (2026). [*When the Teaching Material Is the Risk: The Governance Gap for AI-Generated Content in Medical Education*](https://doi.org/10.2196/115991). *Journal of Medical Internet Research*, 28, e115991. DOI: 10.2196/115991.
