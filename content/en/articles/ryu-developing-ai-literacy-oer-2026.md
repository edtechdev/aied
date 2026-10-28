---
title: "Developing AI literacy OER: A literature-informed rubric for design and review"
published: "2026"
created: "2026-10-28T18:18:15-04:00"
updated: "2026-10-28T18:18:15-04:00"
type: article
foundations: [ai-literacy]
research_method: [instrument development]
level: [higher ed]
audience: [instructors, curriculum designers]
page_kind: [framework]
sources: ['raw/papers/ryu-developing-ai-literacy-oer-2026.md']
source_url: "https://doi.org/10.31274/joerhe.25468"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Ryu (2026) asks what literature-informed principles should guide the design and review of openly licensed AI literacy resources, and answers with a practice description: a narrative synthesis that builds a rubric rather than an evaluation of one. The corpus is purposive rather than systematically searched: a 16-paper core evidence base, a 17-paper extension that re-codes the core with OER-relevant fields, and 36 targeted references at the intersection, coded by a single author against a seven-category codebook over three rounds of reading. The output is seven principles, four consensus carryovers and three framed as distinctive to OER, each paired with design and review cues, plus five topic domains: tool-agnostic prompting, output evaluation, bias awareness, accessibility, and citation and integrity. It gives programs an inspectable checklist joining two literatures, but with no learner outcome data, no inter-rater reliability, and no psychometric validation, it cannot show that rubric-aligned resources teach better.

## Key Findings

1. The corpus was assembled in three streams: a 16-paper core evidence base limited to English-language, peer-reviewed, higher-education work from 2016 onward, a 17-paper extension adding [[open-education|OER]]-enabled pedagogy, and 36 targeted references at the AI literacy and OER design intersection.
2. Seven principles were derived, mapped one to one from an a priori codebook: framework-grounded competency mapping, concept-first project-based scaffolding, tool-agnostic prompt engineering, critical evaluation embedded in each activity, ethics and bias and accessibility as co-equal pillars, transparent attribution and integrity norms, and remixability operationalized through the 5Rs.
3. The rubric is deliberately asymmetric. Four principles are consensus carryovers that both literatures already support, and three are marked OER distinctive because they address structural commitments that AI literacy pedagogy alone does not: tool neutrality, disclosure modeled in the resource's own authorship, and file-level openness.
4. Five topic domains specify what such a resource teaches: tool-agnostic prompting, output evaluation, bias awareness, accessibility, and citation and integrity, offered as a scoping structure that survives remixing better than a lesson inventory.
5. The case for embedding evaluation everywhere rests on cited evidence that critical AI literacy instruction is thin and appears late in library and information science syllabi, which the author uses to argue against confining verification to a final module.
6. Each principle carries operational thresholds rather than aspirations: WCAG 2.1 AA conformance and UDL 2.2 applied to the artifacts themselves, CC-BY or CC-BY-SA 4.0 licensing per artifact, editable Markdown or LibreOffice or LaTeX sources shipped alongside PDFs, and Dublin Core metadata at deposit.
7. The paper names four design tensions it cannot resolve: tool neutrality against concrete examples, accessibility against cultural specificity, integrity modeling against scope creep, and institutional AI policy against tool-agnostic design, which local policy may override regardless of pedagogy.

## Two literatures that never cite each other

The paper's diagnostic claim is a structural asymmetry rather than a gap in knowledge. AI literacy reviews synthesize competency frameworks and pedagogical sequencing while treating the production of teaching materials as a downstream concern. OER design research treats licensing, accessibility, and remix as core requirements but predates the generative AI expansion that changed what AI literacy materials must teach and disclose. The result is that a curriculum can be pedagogically sound in its original classroom and still fail as an OER, through evaluation tasks locked to one commercial tool, examples tied to a single region, or citation conventions that cannot accommodate AI disclosure.

The method is transparent about its limits in a way that is unusual for rubric papers. Coding was done by one author against a codebook written before full-text reading, with categories fixed in advance and labels refined into design-actionable language. Three rounds of reading did specific work: the first confirmed that the two literatures address overlapping concerns without co-citing, the second produced the consensus versus distinctive split, and the drafting that followed forced each principle into a principle, evidence, and cue triad. That last move is the paper's real methodological insight. Earlier drafts that paired principle with evidence read as a literature summary, and adding a review cue made each principle inspectable.

What the method cannot support is any claim about completeness. A purposive corpus with a single coder can demonstrate that a principle is grounded in named sources. It cannot demonstrate that the seven principles exhaust what matters, that the weighting between them is right, or that two trained reviewers would apply them consistently.

## From principle to an inspectable artifact

The rubric's usefulness comes from the way each principle is turned into something a reviewer can look at. Framework grounding becomes a question about whether a competency map appears in instructor-facing materials rather than in internal notes. Scaffolding becomes a question about whether a unit traced end to end actually moves from Remember and Understand through Apply to Evaluate and Create, with time estimates that have a stated provenance. Tool neutrality becomes a question about whether the prose and the screenshots agree, since tool-agnostic text paired with vendor-specific visuals is a common partial implementation that ages badly.

Two principles carry more weight than their one-line summaries suggest. Disclosure is treated as content and as practice at once: the resource teaches citation of models and versions, and it also discloses its own AI use at the component level, on the argument that bulk disclosure is weaker than per-component disclosure. Openness is treated as a structural affordance rather than a license, which is why editable source files, per-artifact licensing, and deposit metadata all appear as review criteria.

The tensions section is the most honest part of the paper and the least resolved. Cultural specificity against accessibility is a genuine tradeoff with real design cost, and the proposed resolution, supplying cultural examples in accessible formats alongside generic equivalents, doubles the production work. The disclosure claim also rests on an expectation rather than an observation: the author notes that journals such as Nature and COPE now require AI disclosure and predicts OER norms will follow with roughly a one-year lag.

## What a rubric cannot settle

Nothing here reports whether students learn more from a rubric-aligned resource. The author addresses the objection directly, arguing that design contributions are separable from outcome contributions because learner data depend on a particular implementation while design decisions are made before any classroom encounter. That is a reasonable division of labor, and it does not change what the document is: guidance awaiting validation.

The corpus also has a geography. It skews English language and toward United States, Canadian, and European scholarship, which the author flags as leaving Global South contexts underrepresented and requiring stress testing before adoption as global guidance. Since the rubric's own equity principle is accessibility, and its remixability principle is justified partly by regional disparities in tool access and broadband, that gap is not incidental.

A third unresolved issue is adoption cost. Every principle is individually defensible, and together they imply a production process with accessibility expertise, licensing discipline, metadata work, disclosure statements, and version control. For an individual instructor with no support, the honest reading is that the rubric describes an institutional artifact, not a weekend project.

## What this means for practice

Instructors choosing an AI literacy resource can run the paper's four-item fitness check. Does the resource map to a named competency framework, does each unit traverse several cognitive levels, does it teach prompting as a portable analytic skill rather than a vendor tutorial, and does a routine activity, not just a flagship one, require verifying output? All four are inspectable before the course runs.

Librarians and OER program staff get a curation instrument aimed at the features general checklists miss: practical rather than merely legal openness, integrity norms modeled in the resource's own front matter, and licensing applied per artifact. For institutions building or remixing materials, the suggested sequence is to adopt a framework with a published crosswalk, audit existing resources against the seven principles, remix at the topic domain level, and hold three gates fixed: open licensing, WCAG 2.1 AA conformance, and a disclosure statement naming model versions.

## Limitations

- The synthesis uses purposive corpus selection and single-coder analysis with no inter-rater reliability, so the seven principles reflect one author's interpretive expansion of an a priori codebook.
- The corpus is English-language and concentrated in United States, Canadian, and European scholarship, which the author names as leaving Global South contexts underrepresented.
- No learner outcome data, disabled learner usability evidence, or psychometric validation are reported, and the paper explicitly declines to position the rubric as a validated standard.
- The four design tensions are described but not tested, and the claim that OER disclosure norms will follow journal policy within roughly a year is a prediction rather than a finding.

## Citation

Ryu, J. (2026). [*Developing AI literacy OER: A literature-informed rubric for design and review*](https://doi.org/10.31274/joerhe.25468). *Journal of Open Educational Resources in Higher Education*, 4(3), 281-294.
