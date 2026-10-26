---
title: "When Disclosure Rules Are Not Enough: Authorial Warrant and Judgment in AI-Supported Scholarship"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/authorial-warrant-ai-supported-scholarship-2026.md']
confidence: high
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [learning sciences]
audience: [researchers, faculty developers, administrators, policymakers]
level: [graduate, higher ed]
pedagogy: [professional-training]
technology: [generative-ai, llm]
assessment: []
methods: [ai-assisted-educational-research, research-methods-aied]
institutions: [governance]
ethics: [ai-use-disclosure, ethics]
foundations: [academic-integrity]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Editorial policies increasingly require authors to disclose substantive uses of [[generative-ai|generative AI]], but function-specific disclosure locates a model in the research or writing process without showing how its outputs entered scholarly judgment. This article argues that disclosure documents model use, whereas responsible use requires claim-level authorial warrant: a contributor's capacity to understand, justify, and defend claims within their contribution. It distinguishes [[cognitive-offloading|cognitive delegation]], in which model outputs shape substantive choices, interpretations, or justifications, from routine delegation, which does not ordinarily bear on the substance of judgment, and it repurposes disclosure categories as a claim-sensitive ex ante heuristic mapping six recurrent research functions to risks, forms of oversight, and formative questions. The account clarifies when AI-supported scholarship remains under responsible human judgment and when cognitive delegation threatens the epistemic basis of authorship.

## Key Findings

1. **Disclosure documents use, not warrant.** Editorial requirements locate a model in the process but do not show how outputs entered judgment or whether the contributor can defend the claims without treating outputs as sufficient justification.
2. **A wide policy-disclosure gap.** He and Bu (2026) found roughly 70% of analyzed journals had model-related policies, yet explicit disclosure appeared in only about 0.1% of full-text publications examined since 2023.
3. **Acceptability varies sharply by task.** A Nature survey of 5,229 academics found more than 90% considered editing and translation acceptable under at least some conditions, while more than 60% rejected AI generating an initial review report.
4. **Cognitive delegation, not tool choice, sets the boundary.** Model use becomes cognitive delegation when an output is used as a basis for substantive selection, interpretation, decision-making, or justification, such as hypothesis choice, method choice, or data interpretation.
5. **Routine delegation does not bear on judgment.** Formatting, language editing, or a mechanical reference search remains routine when the author independently assesses each source and does not treat the pool as exhaustive.
6. **Six delegated functions map to distinct risks.** Writing, literature orientation, analysis, interpretation, methodological choice, and conceptual framing each carry a different typical risk, an indicative form of oversight, and a formative question.
7. **Detection is a weak control with a style tax.** AI-detection may penalize prose by researchers who do not write in English as a first language, and Hu (2026) warns the prospect of detection may flatten grammar to avoid appearing machine-generated.

## Why disclosure is necessary but not sufficient

Disclosure requirements answer whether, where, and how a model was used; authorial warrant asks a different question — whether the contributor can still understand, justify, and defend the claims those uses shaped. A statement such as "I used model X to suggest citations" identifies an activity, and a fuller account may describe claimed safeguards, but neither establishes how the output shaped judgment or whether the contributor retained warrant. Existing frameworks need not equate [[ai-use-disclosure|disclosure]] with warrant for the gap to matter: a record can be complete and still leave the epistemic basis of [[academic-integrity|responsible authorship]] untested. The article's target is therefore not a new reporting requirement but a claim-sensitive criterion linking the role of a model output in a specific claim or decision to the evaluation needed to justify it. Institutional [[governance|guidance]] should move from compliance-oriented reporting toward the capacities responsible use depends on, including [[critical-thinking|critical evaluation]] and [[metacognition|reflective judgment]].

## Routine delegation versus cognitive delegation

The boundary is crossed not by the choice of tool but by the researcher's use of an output as a basis for deciding which claims, sources, methods, interpretations, or conceptual frames should count. Using a model to assemble a candidate reference pool remains routine when the pool is not treated as exhaustive, the author independently assesses each source, and comprehensiveness is supplemented with an appropriate literature-search method. The same literature-orientation function becomes cognitive delegation when the pool is treated as the field. Cognitive delegation can be permissible, but it requires oversight grounded in function-appropriate evaluation — source checking, testing, comparison with alternatives, or explicit justification of selection — which supplies an observable basis for assessing whether the contributor can understand, justify, and defend the resulting claims. That oversight does not require reproducing the delegated result independently from scratch, and it is central to how [[professional-training|researcher formation]] should treat [[llm|language models]] in [[higher-ed|graduate]] work.

## A claim-sensitive map of six functions

The article repurposes disclosure categories — including the AID Framework, GAIDeT, DAISY, and the tripartite distinction proposed by Resnik and Hosseini — into an ex ante heuristic. Six recurrent functions are mapped to a typical risk, an indicative form of oversight, and a formative question the researcher should be able to answer: language and editing (a shift in meaning); search and orientation ([[hallucination-risk|hallucinations]] and omissions); programming and analysis (faulty code and assumptions); interpretation (adopting someone else's frame); methodological choice (a hidden shift in results); and conceptual framing (taking over the research question). The map assigns no fixed epistemic status to any function, because within the same function model use may remain routine or become cognitive delegation depending on how the output enters a claim. The sequence of questions — which functions were delegated, which claims or decisions outputs shaped, which outputs were accepted or rejected and why — shifts work from a retrospective account to a habit of delegating only in ways that leave the researcher able to defend the claims.

## What the empirical evidence shows

Three observations support the argument. First, model-related journal policies are widespread but explicit disclosure is rare: He and Bu (2026) found roughly 70% of analyzed journals had model-related policies while explicit disclosure appeared in about 0.1% of full-text publications since 2023, rising from approximately 0.01% in early 2023 to 0.43% in the first quarter of 2025. Second, judgments of acceptable use vary by task — a Nature survey of 5,229 academics found more than 90% accepted editing and translation under at least some conditions, while more than 60% rejected AI generating an initial review report and 57% accepted its use to assist a human reviewer. Third, an experiment with 402 US-based lay participants found that delegating parts of the research process to a language model rather than to a PhD student was judged less morally acceptable and reduced [[trust]] in the researcher, when no information about verification was supplied. [[ai-detection|Detection]] remains a weak control and may impose a style tax, and these empirical signals concern perceptions and formative outcomes rather than research quality.

## What this means for practice

- **Instructors.** Set authorial warrant as an explicit assessment criterion: require students to reconstruct the reasoning behind their claims and justify the method choices a model influenced, not merely to state that a model was used.
- **Faculty developers.** Teach working with [[generative-ai|generative models]] as a capacity — recognizing when delegation becomes cognitive, applying function-appropriate evaluation, and identifying what should not be delegated — rather than as a set of prohibitions.
- **Journals and institutions.** Replace or supplement inventory-style declarations with guidance that repurposes disclosure categories for planning, training, and reflective practice, and treat an attestation of sound process as a way to reorient existing declarations.
- **Tool designers.** Build [[desirable-difficulties|productive friction]] — moments that ask the researcher to identify a source, formulate uncertainty, or list rejected alternatives — so the system leaves the researcher with a better understanding of the problem rather than finished text.

## Limitations

- The article is a theoretical, problem-driven synthesis that explicitly does not aim to provide a systematic or exhaustive review of the literature.
- The formative and assessment applications it proposes — live questioning, explicit assessment criteria, reflective practice — have not been empirically validated as ways of cultivating or assessing authorial warrant, and their effectiveness, feasibility, and fairness require evaluation across disciplines and career stages.
- The empirical signals it draws on are task- and population-limited: the Kosmyna et al. (2025) comparison involved only 18 participants in a fourth-session essay-writing study, and the Barcaui (2025) retention finding rests on a delayed test after 45 days without measuring encoding processes.
- The 402-participant experiment concerned non-expert perceptions rather than the judgments of researchers, editors, or reviewers, and did not show that model use lowers research quality.

## Citation

Mirończuk, M. (2026). [When disclosure rules are not enough: authorial warrant and judgment in AI-supported scholarship](https://doi.org/10.1007/s10676-026-09928-8). *Ethics and Information Technology*, *28*, 54.
