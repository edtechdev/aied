---
title: "Tag, You Are It: Evaluating AI and Faculty Alignment in Question Categorization Across Four Competency Frameworks"
created: "2026-11-10T19:39:31-05:00"
updated: "2026-11-10T22:10:00-05:00"
type: article
sources: ['raw/papers/stewart-tag-question-categorization-competency-2026.md']
source_url: "https://openprairie.sdstate.edu/ijrpld/15"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [case study]
methods: [quantitative-research]
level: [graduate]
audience: [administrators, faculty developers, assessment designers]
technology: [educational-nlp, machine-learning]
assessment: [automated-assessment, educational-measurement]
foundations: [curriculum-design]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Stewart and colleagues (2026) tested whether an AI curricular-mapping tool could reproduce faculty tags on pharmacy assessment items. They compared CompetencyGenie's single recommended tag against faculty tags for 62 pharmacotherapy questions across four frameworks: Bloom's Taxonomy, COEPA subdomains, ACPE didactic topics and disease states. Agreement ranged from poor to substantial — 59.7% (κ = 0.57) for Bloom's, 47.3% (κ = 0.24) for COEPA, 71.7% (κ = 0.30) for didactic topics and 71.7% (κ = 0.69) for disease states — and the authors read the pattern as support for AI-assisted tagging under faculty review, not for autonomous mapping. The study is a single-course case report with a structural asymmetry: faculty could assign multiple tags per domain while the tool could assign only one, and any single overlap counted as agreement.

## Key Findings

1. **Agreement depended on the framework, not just the tool.** Disease states reached substantial agreement (κ = 0.69) and Bloom's moderate agreement (κ = 0.57), while COEPA (κ = 0.24) and didactic topics (κ = 0.30) were fair at best.
2. **Percentage agreement and kappa told different stories.** Didactic topics matched 71.7% of the time but with κ = 0.30, while disease states matched at the same rate with κ = 0.69; the base rates differ enough that raw agreement alone would mislead.
3. **The comparison favored the AI structurally.** Faculty could assign multiple tags within a domain and the tool could assign one, and agreement was counted if any faculty tag matched the tool's choice.
4. **Bloom's levels were collapsed before comparison.** The institution reduced six taxonomy levels to three because adjacent higher-order levels were ambiguous, which likely inflated agreement relative to a six-level comparison.
5. **The authors position the tool as decision support.** Their conclusion is that AI-assisted tagging can reduce faculty workload and streamline curricular mapping while faculty retain judgment.

## The problem the study addresses

Accreditation requires pharmacy programs to demonstrate that assessments align with defined competencies and curricular outcomes. That mapping is labor-intensive and variable: faculty assign tags by reading item stems, options and rationales, and different faculty reasonably disagree about whether a question tests "Apply" or "Analyze," or which COEPA subdomain it serves. CompetencyGenie, a free browser extension from Enflux, uses natural language processing to recommend tags and lets faculty review and refine them before a final check.

The study asks a narrow, practical question: if faculty have already tagged a set of items, how often does the tool's recommendation match? That is a reliability question, not a validity question. A tool can agree with faculty and still be wrong about the construct, and the paper is careful to frame its result as interrater agreement.

## Method and analysis

The setting was a required third-year endocrinology pharmacotherapy course in a four-year PharmD program. Each question had previously been tagged by faculty across four categories: Bloom's Taxonomy (collapsed to three levels), COEPA (four subdomains — Scientific Thinking, Problem Solver, Person-Centered Care, and Medication-Use Process Stewardship), ACPE didactic topics, and disease states drawn from a 231-topic toolkit and supplemented for the course.

Faculty independently reviewed each question and could assign more than one tag per domain. CompetencyGenie could select only one tag per domain at the time of the study. AI tagging was counted as consistent if at least one faculty label matched the tool's selection. The authors report percentage agreement and Cohen's kappa for each domain across 62 tagged questions.

## What the numbers mean

The results separate cleanly by framework. Disease states — relatively concrete categories such as a named endocrine condition — produced the strongest agreement (κ = 0.69), which fits the intuition that classification is easier when the category is a recognizable clinical entity. Bloom's, even after collapsing levels, reached κ = 0.57, moderate but not strong. COEPA subdomains, which require judging whether an item reflects scientific thinking, problem solving, person-centered care or stewardship, produced κ = 0.24, and didactic topics κ = 0.30.

The gap between percentage agreement and kappa on didactic topics is the most instructive result. A 71.7% match rate sounds strong until the base rate is considered: with a small number of common topic categories, a tool that favors frequent labels can match often while adding little information beyond chance. The paper's use of both statistics is appropriate, and a reader who looked only at the percentages would overestimate the tool.

The design asymmetry also matters. Because faculty could assign multiple tags and the tool could assign one, and because any overlap counted, the comparison is generous to the AI. A stricter exact-match or full-set comparison would likely lower agreement. The collapsed Bloom's levels work in the same direction.

## What this means for practice

- **Pilot the tool per framework.** Agreement is domain-specific; a tool that works for disease states may not be reliable for competency subdomains.
- **Report kappa, not just percent agreement.** Base rates vary across frameworks, and raw agreement can look respectable when chance-corrected agreement is fair.
- **Keep faculty review in the loop.** The authors' own conclusion is decision support: the tool proposes, faculty confirm and correct.
- **Match the comparison design to the intended use.** If the tool will assign one tag per item, compare it against a single faculty consensus tag rather than a multi-tag set.
- **Expect the hardest judgments to remain human.** The frameworks that require interpreting the cognitive demand of an item were exactly where the tool struggled.

## Limitations

- This is a single-course case report with 62 questions in one PharmD program; results may not generalize to other courses, institutions or frameworks.
- The comparison was structurally generous to the AI: faculty could multi-tag, the tool could not, any overlap counted as agreement, and Bloom's levels were collapsed from six to three.
- The study measures agreement with faculty, not the correctness of either set of tags; faculty tagging is itself variable and was not audited for reliability.
- No data are reported on time savings, faculty corrections or how often reviewers overrode the tool, which are the outcomes that would establish workload benefit.
- The tool and its underlying model are proprietary, and the paper does not report version, prompt or confidence information.

## Citation

Stewart, M. P., Nguyen, K., Castleberry, A., Wu, L.-W., Park, C., Metri, J., & Nohria, R. (2026). [*Tag, You Are It: Evaluating Artificial Intelligence and Faculty Alignment in Question Categorization Across Four Competency Frameworks*](https://openprairie.sdstate.edu/ijrpld/15). The Interdisciplinary Journal for Research on Pedagogy and Learning Design, 1(1).
