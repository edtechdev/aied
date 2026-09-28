---
title: "A Critical Review of Critical Thinking in HCI Research About AI"
created: "2026-09-28T05:05:00-04:00"
updated: "2026-09-28T05:05:00-04:00"
type: article
sources: ['raw/papers/critical-review-critical-thinking-hci-research-ai-2026.md']
confidence: high
published: "2026-09-21"
page_kind: [synthesis]
research_method: [literature review]
audience: [researchers, instructors]
foundations: [critical-thinking, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, educational-measurement]
methods: [meta-analysis-systematic-review, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-28"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Inie and colleagues review 80 empirical HCI papers that study critical thinking with or about AI and find that the field's central construct is mostly undefined and its headline conclusions rest disproportionately on participants' own impressions. Only 23 papers (29%) state an explicit definition of critical thinking, and for 46 (57%) there was not enough information to identify any theoretical tradition. Self-report is the dominant measure (49 studies, 61%), and of the 39 studies that claim an observed effect on process or outcome, only 10 give clear, reproducible criteria for it. The resulting [[assessment-validity]] problem, the authors argue, is what allows 50 papers (62%) to report a positive influence of AI on [[critical-thinking]] while relying largely on perceived rather than demonstrated change.

## Key Findings

The review's first question was how [[critical-thinking]] is defined. Only 23 of the 80 papers (29%) offer an explicit definition, and those definitions do not converge. Where theory is cited, the sources vary: Kahneman's dual-system theory (three studies), Bloom's taxonomy (two), Facione's six critical thinking skills (two), and Schön's reflection-in-action (two). Judging both by cited theory and by the way each study measured the construct, the authors could not assign a theoretical position for 46 papers (57%) at all.

The second question was measurement. Forty-nine studies (61%) appraise critical thinking through self-report, often on fewer than five survey items. Thirty-nine studies claim an observed effect, 29 on participants' process and 10 on a product or outcome, yet only 10 of those explain what would count as evidence of critical thinking. Forty-two studies (52%) used no control group, and only 24 (30%) compared against another system or human assistance. Sixty-two percent of studies rest on interventions shorter than four hours; twelve ran longer than nine weeks, and one collected a follow-up measurement.

The third question was what the papers claim. Fifty papers (62%) report a positive influence of AI on critical thinking, 10 (12%) negative, 19 (24%) mixed, and one (1%) no influence. Of the 50 positive papers, only 16 define critical thinking, 25 (50%) base the claim on self-report, and 36 evaluate a designed system against 7 studying open-ended use. Across the corpus, 61 studies (76%) treat AI as a tool for thinking critically about a subject, 10 (12%) as the object of critique, and 11 (14%) as an instrument for general critical thinking skills, with 5 studies (6%) targeting disposition. Only one paper predates 2022.

## Method and Evidence

This is a scoping review: the literature is heterogeneous in its definitions and methods, and mapping it is more informative than pooling it. The authors searched the ACM Digital Library and two journals (International Journal of Human-Computer Interaction; International Journal of Human-Computer Studies) using `["critical thinking" AND ("AI" OR "LLM")]`, plus searches for "machine learning" and "algorithmic decision-making" to catch older vocabulary (last run 9 April 2026). Screening ran through Covidence with PICOS-based criteria: studies had to observe or measure critical thinking in interaction with AI and to state an influence, not a speculative one.

Of these, 576 duplicates were removed automatically by Covidence and two more manually, leaving 2,523 screened by title and abstract and 652 taken to full-text review Exclusions were dominated by 520 records with no measurement of critical thinking and 46 where AI was not the intervention. The final corpus is 80 papers.

Extraction was done primarily by the first author, with an explicit "not enough information" option in each category to defer unsupported judgments. Deliberately, no quality assessment was made: "claimed" influence means the conclusion the paper states, regardless of methodological soundness. Corpus composition shapes the reading: 31 papers (39%) came from the United States, 18 (22%) from China, 5 (6%) from Canada and 4 (5%) from South Korea; 65 studies (81%) involved text-to-text generative models; 51 studies (64%) used students, who made up 4,735 of 6,839 participants (69%), while only 4 studies focused on professionals. Assessments were mostly [[qualitative-research]]: 38 studies (47%) qualitative, 22 (27%) quantitative, and 20 (25%) mixed.

## What this means for practice

The practical warning is about what a claim of improved critical thinking rests on. One study in the corpus found that participants believed ChatGPT had augmented their critical thinking while the empirical data contradicted that belief; because most studies rest on learner self-report, the review suggests adoption decisions justified by this literature may be built on perceived rather than demonstrated gains. The authors also note that evaluating systems mainly on efficiency and productivity invites uncritical adoption of [[generative-ai]], whereas measuring pedagogical and cognitive influence opens a more critical discussion.

The corpus offers little evidence about durability or transfer. With 62% of studies under four hours and one follow-up measurement, there is no basis here for claims about whether [[ai-literacy]] practices produce lasting critical thinking ability. The near-absence of professional and everyday settings, and the heavy reliance on students, means the studies speak mostly to classroom-adjacent interventions, a weak basis for the [[framing-ai-use-for-students]] that reaches most learners. The review's [[human-ai-collaboration]] exemplars are the studies that define their construct, state a theoretical grounding, and connect both to a method — the pattern to look for before trusting an effect claim.

For those designing [[assessment]] of AI-supported learning, the agenda is concrete: state a definition, say which parts of critical thinking are and are not being evaluated, and keep disposition distinct from skill. The authors place future work in three traditions — cognitive-psychological, philosophical, and educational — each specifying what counts as evidence, and identify a [[meta-analysis-systematic-review]] as the natural next step given the heterogeneity of this corpus.

## Limitations

The authors flag several. Keyword search is reductionist: restricting the review to the exact term "critical thinking" likely excluded work labeled decision-making, critical evaluation, or reflective thinking. The definition of HCI is venue-based, so HCI-adjacent work in psychology and education was not reviewed. No quality assessment was performed, so reported influence is not evidence of proven influence. Data extraction was done primarily by the first author, which the authors judge acceptable given the focus on relatively objective categories. Finally, the field moves fast: the corpus risks going stale quickly.

The review also flags inconsistencies in its own reporting: the findings section states 50 papers (62%) report a positive influence while the summary gives 63%, and open-ended use of off-the-shelf systems is counted as 18 studies (22%) in one place and 17 in another.

## Citation

Nanna Inie, Anne Marie Kristensen, Morten Misfeldt & Peter Dalsgaard. [A Critical Review of Critical Thinking in HCI Research About AI](https://doi.org/10.1080/10447318.2026.2722522). *International Journal of Human–Computer Interaction*, 2026, published online 21 September 2026.