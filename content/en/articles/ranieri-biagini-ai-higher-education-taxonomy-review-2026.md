---
title: "Artificial Intelligence in Higher Education (2019–2026): A Systematic Review of Applications and an Evidence-Derived Multi-Axial Taxonomy"
created: "2026-10-15T21:21:00-04:00"
updated: "2026-10-15T21:21:00-04:00"
type: article
sources: ['raw/papers/10.1016_j.compedu.2026.105761.md']
confidence: high
page_kind: [framework, synthesis]
research_method: [literature review]
audience: [instructors, curriculum designers, faculty developers, administrators, policymakers, researchers]
level: [higher ed]
pedagogy: [constructivist, scaffolding, pedagogy, student-support-and-success, self-directed-learning]
technology: [generative-ai, intelligent-tutoring, adaptive-learning, learning-analytics, conversational-ai, machine-learning]
assessment: [assessment, feedback, automated-assessment, formative-assessment]
methods: [meta-analysis-systematic-review]
institutions: [governance, educational-policy-ai, regulation]
ethics: [equity-in-ai-education, privacy, bias-mitigation, ethics, hallucination-risk, digital-divide]
foundations: [ai-education, agentic-ai, agency, academic-integrity, human-ai-collaboration, cognitive-offloading, critical-thinking, theories-and-frameworks, theory-development-aied, limitations-in-aied-research]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Ranieri and Biagini (2026) systematically review 228 peer-reviewed publications (January 2019–March 2026) and test whether the four-category [[ai-education|AI in higher education]] taxonomy of Zawacki-Richter et al. (2019) survives the [[generative-ai|generative-AI]] wave. Restricting the test to the 154 publications with a classifiable application function, 90 (58.4%) fall outside the original four categories and require three added domains: AI-enabled student support, content creation and instructional design, and institutional analytics and management. The authors propose a configurational four-axis framework — functional domain, degree of [[agency]], epistemic position and implicit pedagogical paradigm — with ethics and equity as a transversal layer, showing that functionally similar applications differ in how much initiative they take, how their output is treated as knowledge, and what pedagogy they presuppose. The framework is offered as diagnostic vocabulary rather than a predictor of learning outcomes, and its autonomous endpoint remains theoretical: no reviewed publication was coded as operating without routine human intervention.

## Key Findings
1. **The 2019 functional taxonomy no longer covers the field.** Among 154 publications with a classifiable application function, 64 (41.6%) fit the original four categories, while 90 (58.4%) required one of three added domains.
2. **Three domains joined the functional axis.** AI-enabled student support services (47; 20.6% of the 228-study corpus), institutional analytics and management (25; 11.0%) and content creation and instructional design (18; 7.9%) recur in both search sessions.
3. **Conversational LLMs now dominate the technology profile.** Generative AI was the primary technology in 114 studies (50.0%), against 52 (22.8%) for intelligent tutoring and adaptive systems and 13 (5.7%) for predictive or machine-learning models.
4. **Agency, epistemic position and pedagogy vary inside functions.** Function and [[agency]] were only partially associated (Cramér's V = 0.44), and AI-enabled student support spanned all five epistemic positions.
5. **The autonomous endpoint is theoretical, not observed.** The corpus supports an assistive–augmentative–delegative gradient (assistive n = 2; augmentative 124; delegative 84), but no publication was coded fully autonomous.
6. **Ethics and equity sit across the taxonomy, not inside it.** Seventy-one publications (31.1% of the mapped corpus) foreground ethics, equity or [[governance]] as the dominant focus, yet that set names no distinct application and is modeled as a transversal layer.
7. **The pattern survives the 2023 concentration.** Removing every 2023 publication left the result essentially unchanged (39 of 67, 58.2%), and all three added domains persisted in the 2026 holdout.

## Testing the functional taxonomy against a post-2022 corpus

For the full mapping corpus, 164 of 228 publications (71.9%) lie outside the four categories of the 2019 review, but that figure includes 71 publications whose dominant focus is transversal ethics and governance and three on scholarly research practice, neither of which is a functional application. The authors therefore restrict the adequacy test to the 154 publications carrying a classifiable application function: only 64 (41.6%) fit the original four categories of [[assessment]] and evaluation, profiling and prediction, [[adaptive-learning]] and [[intelligent-tutoring]], while 90 (58.4%) require one of three added domains. Vocabulary alone did not decide this. Promotion required a domain to recur across both search sessions, be named in the prior literature, be reliably codable (Axis 1 κ = 0.98), and identify a distinct locus of deployment rather than a concern that qualifies applications everywhere.

## Divergence inside function: agency, epistemic position and pedagogy

Function does not determine how an application behaves. On [[agency]], 124 articles (54.4%) were coded augmentative and 84 (36.8%) delegative, with only two coded assistive and none fully autonomous. Epistemic position split almost evenly across scaffold (55; 24.1%), dialogic partner (51; 22.4%), quasi-oracle (44; 19.3%), environment (35; 15.4%) and tool (34; 14.9%) — the quasi-oracle being the configuration in which AI output is accepted with limited scrutiny. [[student-support-and-success|Student support]] spanned all five positions and four pedagogical paradigms, while [[adaptive-learning]] was confined to scaffold and profiling to tool. Pedagogical paradigm was the least stable dimension: post-humanist and critical-postdigital framings were most frequent (128; 56.1%), ahead of [[constructivist]] (47), connectivist (30) and instructivist (23), and inter-coder agreement on this axis fell to κ = 0.38 in the 2026 holdout.

## Ethics and equity as a transversal layer

Ethics, equity and [[governance]] are the corpus's largest single cluster: 71 publications, 31.1% of the 228 mapped, foreground them as the dominant focus. Because those publications qualify applications drawn from every functional domain rather than naming an application that AI performs, the authors keep the topic as a layer crossing all four axes instead of promoting it to a seventh functional box. That choice keeps the functional-adequacy estimate honest, since folding the 71 in would inflate the residue to 71.9%. It also locates risks by configuration: algorithmic bias is most salient at profiling and prediction, dehumanisation at student support combined with delegative, quasi-oracular positioning, and authorship and [[academic-integrity|integrity]] at content creation. Reporting is uneven, however — general ethical and governance concerns appear in 89 studies (39.0%), but dehumanisation and [[cognitive-offloading|over-reliance]] in only seven each (3.1%).

## What the configuration makes visible for oversight

The value the authors claim for the framework is decision support, not prediction. Reading a tool through all four coordinates exposes mismatches that a function label hides, such as [[feedback]] designed as constructivist support but used as a quasi-oracle, and it lets oversight follow the level of delegation rather than the product name. A student-support chatbot used as an augmentative scaffold raises different questions from a delegative advising system treated as authoritative, which warrants explicit approval, contestability and source-verification requirements. The authors stress that higher agency is not evidence of pedagogical innovation, and that classifying an application's implicit pedagogy identifies the model it presupposes without judging its adequacy. For [[educational-policy-ai|policy]] and quality assurance, the vocabulary is tool-agnostic: integrity and assessment rules can be indexed to configurations rather than to vendors, and course documentation can disclose the intended epistemic position to students.

## What this means for practice
- **Instructors.** Name what a tool actually does before adopting it — its function, how much execution it takes over, and whether students will treat its output as authoritative — then assign the verification step explicitly rather than assuming it.
- **Curriculum designers and faculty developers.** Check the pedagogy a tool embeds against your stated outcomes; the corpus shows one function supporting transmission, active construction and networked learning, and the embedded orientation is the part most often left unexamined.
- **Administrators.** Index integrity and assessment rules to configurations — level of delegation and expected epistemic position — rather than to product names, so governance survives the next model release.
- **Policymakers.** Treat AI in higher education as more than tutoring and assessment; student support, instructional design and institutional analytics now carry a large share of applications and need their own oversight provisions.
- **Researchers.** Adopt the four axes as coding dimensions instead of a single function label, and test the framework's predictive validity, which this review explicitly does not establish.

## Limitations
- The functional-adequacy result rests on an explicitly defined denominator: the 154 publications with a classifiable application function, not the full 228, because 71 ethics/governance and three scholarly-practice publications are excluded from that test.
- Searches covered four English-language indexes (Web of Science, Scopus, IEEE Xplore and ERIC) and excluded non-English, conference and other-domain literature, so regional and gray literature is outside the corpus.
- The protocol was not prospectively registered, so the eligibility, search and coding decisions cannot be independently verified as pre-analytic; Appendices A–D are offered as partial mitigation.
- The corpus is heavily concentrated in 2023 (137 of 228; 60.1%), and although the leave-2023-out estimate was 39 of 67 (58.2%), sparse early-year cells preclude year-specific prevalence claims.
- The autonomous endpoint of the agency axis has no instances, so empirical support covers only the assistive–augmentative–delegative gradient, and the pedagogical-paradigm axis fell to κ = 0.38 in the 2026 holdout.
- Benefit and challenge counts are qualitative reporting counts from the reviewed publications, not pooled effect sizes or incidence estimates.

## Citation
Ranieri, M., & Biagini, G. (2026). [Artificial Intelligence in Higher Education (2019–2026): A Systematic Review of Applications and an Evidence-Derived Multi-Axial Taxonomy](https://doi.org/10.1016/j.compedu.2026.105761). *Computers & Education*, 105761.
