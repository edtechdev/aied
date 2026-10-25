---
title: "Re-centering the role of humans in AI-assisted writing scoring: A scoping review from a critical perspective"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Xu, J.", "Lu, X.", "Abdi, N. M."]
published: "2026-08-10"
venue: "Assessing Writing"
source_url: https://doi.org/10.1016/j.asw.2026.101102
foundations: [ai-education, agency, human-ai-collaboration, limitations-in-aied-research, philosophy-of-ai-in-education, teacher-role]
pedagogy: [critical-pedagogy, professional-training, sociocultural-learning]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment-validity, automated-essay-scoring, evaluative-judgment, feedback-literacy]
methods: [meta-analysis-systematic-review]
ethics: [ai-use-disclosure, bias-mitigation, differential-effects-across-learner-groups, equity-in-ai-education, explainable-ai, privacy, trust, trust-calibration]
research_method: [literature review, thematic analysis]
discipline: [writing education, language learning]
level: [higher ed]
audience: [researchers, assessment designers, instructors, administrators]
page_kind: synthesis
sources: ['raw/papers/xu-recentering-humans-ai-assisted-writing-scoring-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Xu, Lu, and Abdi (2026) ran a PRISMA-guided scoping review of twelve peer-reviewed empirical studies published between 2015 and 2025 that compared AI-assisted and human scoring of EFL university students' academic writing, searched in Web of Science, ERIC, and PubMed, and coded through two critical lenses: [[critical-pedagogy|Critical Language Testing]] for fairness, transparency, and social implications, and Critical Digital Pedagogy for critical use of technology, human-centered values, and dialogic processes. AI-generated scores showed moderate alignment with human scores, strong on surface-level linguistic features but weaker on organization, coherence, and argument development; five studies reported AI scoring lower than human raters, and two reported the reverse for high-quality essays. Fairness was the least addressed dimension, with ten of twelve studies silent on demographic, linguistic, or social bias, ten treating scoring as one-shot rather than dialogic, and none explaining how teachers could practice AI-assisted scoring without losing [[agency|human agency]].

## Key Findings

- **Moderate alignment, split by level of writing.** Eleven of twelve studies reported moderate overall correlation, strong agreement on surface-level linguistic features, and lower agreement on organization, coherence, content relevance, and task fulfillment. Existing literature thus treats [[automated-essay-scoring|AI-assisted scoring]] as a technical problem of statistical alignment rather than a judgment about what writing is worth.
- **AI is strongest where errors are most checkable.** Six studies found it better at correcting grammar, punctuation, and writing style; six others found it weak on idea development, logical argumentation, originality, and contextual understanding, the dimensions where human raters were reported as more sensitive.
- **Strictness is a tendency, not a rule.** Five studies reported that AI, especially GenAI tools such as ChatGPT, Gemini, and Claude, awarded lower writing scores than teachers. Two found the opposite, with AI scoring high-quality essays higher than human raters.
- **Prompting is a documented source of variance.** Five studies reported scores shifting with the writing prompt and with chatbot prompt phrasing. Kim (2025) showed prompting strategies significantly affected GenAI scoring accuracy and documented the black box problem.
- **Fairness is underexplored.** Only one study addressed fairness explicitly and one implicitly. Jin et al. (2025) made gender bias a research question and found no significant differences between male and female students; Bui and Barrot (2025a) raised training-data bias and inequitable outcomes across linguistic backgrounds in the literature review only. The review argues not that AI scoring is inevitably biased but that potential bias remains inadequately explored, with gender the only dimension tested.
- **Transparency is uneven rather than absent.** Six studies were coded high transparency, five partial, and one not applicable. High-transparency studies reported rubrics, prompting strategies, and reliability evidence using intraclass correlation or the Many-Facet Rasch Model. Partial studies typically lacked human raters' demographics, reliability evidence, and full prompts. Topuz (2025) is the review's example of the gap: t-tests and Pearson correlations, but no inter-rater reliability among humans and no reproducibility evidence such as Cohen's kappa or ICC, so transparency of procedure did not guarantee evidence of scoring consistency.
- **Critical awareness did not become critical practice.** All twelve studies questioned or tested some assumption about AI scoring, covering prompt effects, randomness, and proportional bias in which stricter rules hit high-performance samples while leniency hit low-performance ones. Yet some studies acknowledged that prompt engineering affects consistency while omitting justification for how prompts were designed.
- **Human-centered values are asserted more than enacted.** Ten studies argued AI should supplement rather than replace human evaluation, with human raters essential for creativity, contextual meaning, and rhetorical and cultural aspects of writing. They varied in how explicitly they named agency: some treated raters as active interpreters of AI output, others only noted the need for oversight, and Jin et al. (2025) named a supplementary role without saying for whom or how. None gave guidance on how teachers or raters could engage critically with AI-assisted scoring without reducing their own agency.
- **Dialogic process is the least developed dimension.** Ten studies used one-shot interaction: an essay uploaded to a chatbot, scored against a fixed prompt, returned with little dialogue. Two AWE-based studies showed iterative revision cycles in which students revised and resubmitted work on the basis of AWE-generated scores and feedback. The review reads this as AI framed as evaluative scaffolding for grading rather than as a dialogic partner in assessment.
- **The field is young and regionally skewed.** Nine of twelve studies were published in 2025, with one each from 2022, 2023, and 2024. Most came from China, with Turkey, Hong Kong, and South Korea also contributing significantly; Indonesia, Japan, Pakistan, the Philippines, Singapore, and Thailand appear, and the United States, Taiwan, and Saudi Arabia less often. Nine studies (75%) used GenAI tools and three (25%) used AWE systems, with ChatGPT in seven studies and Claude and Gemini in two each, against four different AWE tools appearing once apiece. The dominance of publicly accessible commercial models is flagged as a constraint on what is known about tool variation.

## Study Design

- **Design and search.** A scoping rather than systematic review, chosen because the topic is rapidly evolving and methodologically heterogeneous; the protocol was not preregistered, which the authors disclose. The search string combined AI-assisted and human scoring terms with EFL writing, academic writing, and university students. On 7 November 2025 the three databases returned 646 articles (515 Web of Science, 98 ERIC, 33 PubMed); after removing 41 duplicates, 605 records were screened by title and abstract, leaving 28 for independent full-text review by two researchers. Sixteen were excluded for five reasons: not EFL contexts, outside 2015 to 2025, no AI-human comparison, not university students, and not writing, leaving twelve.
- **Quality assessment and coding.** Five criteria (research purposes, sample sizes, research methods, data analysis, discussion with implications and limitations) were scored 0 to 2 each, giving a total of 8.92 out of 10 (SD 1.17). All twelve stated explicit research questions, seven used more than 100 essays, eight provided appropriate analysis with reliability evidence, and all twelve discussed both implications and limitations. The assessment described methodological variation rather than filtering studies. Two coders piloted the scheme on three studies, 25% of the dataset, reaching 93.55% agreement, then resolved conflicts over comparative performance and the CLT and CDP dimensions in two discussion rounds before coding the remainder. Inter-rater agreement on quality assessment was a Quadratic Weighted Kappa of 0.91 (95% CI [0.80, 1.00]).
- **Analytic frame and corpus.** Critical Language Testing supplied three outcome-oriented dimensions (fairness, assessment transparency, social implications) and Critical Digital Pedagogy three process-oriented ones (critical use of technology, human-centered values, dialogic processes). The twelve studies in Appendix A span Turkey, China, Hong Kong, South Korea, Saudi Arabia, and the United States, with two multi-site studies across ten Asian countries and territories, in journals including *Assessing Writing*, *TESOL Quarterly*, *British Journal of Educational Technology*, and *Educational Technology & Society*.

## What this means for practice

- **Instructors choosing what to delegate.** The review recommends a hybrid model: AI-assisted scoring for linguistic-level features such as pronunciation, vocabulary, grammar, and mechanics, with human evaluators carrying discourse quality, coherence and organization, and argumentation and idea development. The strictness findings are a reason to treat any single AI score as provisional.
- **Assessment designers building reliability routines.** The Topuz case is the warning: t-tests and correlations, but no human inter-rater reliability and no AI reproducibility evidence, means agreement with human scores is not the same as scoring that can be relied on. Reporting Cohen's kappa, ICC, or a Many-Facet Rasch Model alongside the prompt text is the minimum that lets a reader judge it.
- **Institutions writing policy.** The policy implication is explicit: draw clearer boundaries between AI and GenAI assistance and evaluation, keep the technology supplementary, and center human agency, accountability, and oversight, with greater transparency about prompting strategies, scoring criteria and procedures, and reliability evidence.
- **Researchers filling the fairness gap.** The review asks for work on linguistic, cultural, racial, and socioeconomic fairness in AI-assisted scoring, on students' critical AI literacy in relation to academic writing, on students' awareness of AI scoring limitations, and on teachers' perceptions and decision-making when integrating AI into writing scoring. All twelve studies reported at least some ethical, pedagogical, or assessment implications, six comprehensively and six partially, so the gap is in breadth rather than silence.
- **Designing for dialogue.** Since ten of twelve studies scored essays in a single pass, the strongest methodological invitation is to design AI-assisted scoring as an iterative process in which students revise in response to feedback, so assessment supports feedback engagement and critical revision rather than only producing a grade.

## Limitations

- **Narrow population and language.** The review covers only EFL learners in tertiary education and only English-written journal articles, so it does not represent L1 writing, K-12 settings, or work published in other languages.
- **Small and possibly biased corpus.** Twelve studies from three databases, with possible publication bias against underrepresented research. The small n constrains comprehensiveness while also marking the field as emerging.
- **Qualitative synthesis only.** Effectiveness was described study by study rather than pooled, so the review cannot state overall accuracy or validity. The authors explicitly propose a future meta-analysis to compare AI-assisted and human scoring statistically.
- **The lens bounds the questions.** Coding through CLT and CDP surfaces fairness, transparency, human-centered values, and dialogue, but does not test them: the review can report that a study omitted fairness, not what measuring it would have found.

## Citation

Xu, J., Lu, X., & Abdi, N. M. (2026). [*Re-centering the role of humans in AI-assisted writing scoring: A scoping review from a critical perspective*](https://doi.org/10.1016/j.asw.2026.101102). *Assessing Writing, 70*, 101102. 
