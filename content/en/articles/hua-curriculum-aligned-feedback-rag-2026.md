---
title: "Curriculum-aligned analysis of assessment feedback: a retrieval-augmented large language model approach for revealing fine-grained student error patterns in higher education"
created: "2026-11-22T08:24:00-05:00"
updated: "2026-11-22T08:24:00-05:00"
published: "2026-11-16"
type: article
authors: ["Linxin Hua", "Jia Xu", "Lirui Guo", "Nan Zheng", "Qingtan Shen", "Dilang Tan", "Ye Lu"]
venue: "International Journal of Educational Technology in Higher Education"
evidence_context: educational
foundations: [curriculum-design]
technology: [rag, llm, learning-analytics]
assessment: [feedback, formative-assessment]
methods: [mixed-methods-research]
research_method: [case study]
discipline: [engineering education]
level: [higher ed]
audience: [instructors, curriculum designers, learning analytics designers, educational technology developers]
page_kind: [implementation]
sources: ["raw/papers/hua-curriculum-aligned-feedback-rag-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Hua and colleagues (2026) treat [[feedback]] written for students as evidence about the teaching that preceded it. Their method uses a [[llm|large language model]] in three steps — deriving an error taxonomy from the feedback itself, mapping each comment to curriculum content with [[rag|retrieval-augmented generation]], and aggregating the annotations into error patterns with cohort coverage — applied to 6,072 pieces of feedback across four cohorts (2022–2025) of an [[undergraduate-education|undergraduate]] [[engineering-education|engineering]] course. The data-driven taxonomy agreed with a human reviewer on 89.1% of records, against 74.7% when an expert-designed taxonomy was applied to the same data, because the expert categories asked why a student erred while marking comments usually say what is missing. In a focus group, the teaching team confirmed the patterns against their marking experience, proposed course revisions, and set the boundary that the patterns are a reference rather than a direct measure of teaching quality. The paper is a concrete case of [[learning-analytics|learning analytics]] turned around: instead of predicting students, it analyzes the feedback instructors already wrote to check the alignment between intended outcomes, teaching, and [[assessment]].

*Implementation study of one undergraduate engineering course across four cohorts; the evaluation is agreement with human judgment plus a teaching-team focus group, not a [[rct|controlled trial]] of student learning.*

## Key Findings

1. **Feedback became curriculum-aligned error patterns.** Of 1,738 pieces of feedback in the 2022 cohort, 1,255 recorded an error, and each was linked to a knowledge unit, covering 200 of 374 knowledge units and 39 of the course's 40 teaching modules.
2. **A data-driven taxonomy beat an expert-designed one.** Annotations agreed with the human reviewer on 89.1% of records under the data-driven taxonomy and 74.7% under the expert taxonomy, and four of the five data-driven categories reached at least 91%.
3. **The difference is category fit, not model power.** The expert taxonomy sorts errors by why a student erred (carelessness versus [[misconceptions|misconception]]), but a marking comment rarely states why, so its categories were hard to apply; the data-driven categories name what the comments record.
4. **Patterns clustered and recurred.** Errors were dominated by missing content and justification, clustered in identifiable modules and weeks, and more than half recurred across cohorts.
5. **The pipeline concentrates its disagreements.** Screening flagged the hard cases, and agreement on the flagged subset was lower (κ = 0.33 data-driven versus 0.21 expert), which the authors read as the screening step working as intended.
6. **The teaching team set the interpretive bound.** In the focus group they confirmed the patterns against their marking experience, proposed revisions, and insisted the patterns are a reference rather than a direct measure of teaching quality.

## From feedback to curriculum evidence

The paper's premise is that assessment feedback is an underused data source. Grades and [[rubrics|rubric]] statistics show where a cohort struggled but not which concepts or procedures were misunderstood. A comment such as "missing justification for the chosen design speed" carries three things at once: a curriculum topic, an error type, and the link between them. Under constructive alignment that link follows from the design of the assessment, so the feedback contains information about whether the intended outcomes, teaching, and assessment actually line up. The method recovers that information at scale by embedding a knowledge base of 374 course knowledge units, retrieving the five closest units for each comment, and asking the model to decide the link over a short list rather than the whole syllabus.

## Why the data-driven taxonomy won

The comparison between taxonomies is the paper's most general finding. An expert-designed taxonomy encodes the categories a researcher would use to explain errors — carelessness, misconception, and so on. A marking comment, however, usually records what is absent rather than why, so applying the expert categories means inferring a cause the text does not state. The data-driven taxonomy was derived from the feedback itself, so its categories describe what the comments actually record; four of the five reached at least 91% agreement. The implication is not that domain expertise is worthless but that a codebook written for human coders does not transfer to an LLM task without rewriting. This is consistent with the authors' citation of work showing that manually written definitions do not reliably improve LLM classification. The retrieval step matters too: narrowing 374 units to five candidates keeps irrelevant material out of the prompt.

## What this means for practice

- **[[teacher-role|Instructors]].** Read your own feedback as evidence about your teaching: the recurring errors your comments already name are a map of what the cohort did not learn, and they can be aggregated rather than intuited.
- **Curriculum designers.** Use [[assessment|assessment]]-to-[[curriculum-design|curriculum alignment]] checks of this kind to find modules and weeks where errors cluster, then revise the teaching rather than only the marking.
- **Learning analytics designers.** Derive the coding categories from the data you already have instead of importing an expert codebook, because category fit — not model choice — drove the difference here.
- **Educational technology developers.** Build the screening step so that disagreement is concentrated in a flagged subset a human reviews, rather than spread across all records.

## Limitations

- The study is one undergraduate engineering course across four cohorts, so the error patterns and agreement values describe this course and its feedback.
- The knowledge base and taxonomy were built from the 2022 cohort's feedback and applied to later cohorts, so the categories reflect that cohort's errors.
- The evaluation is agreement with one human reviewer plus a teaching-team focus group, not an independent measure of whether the patterns reflect real learning difficulties.
- The authors are explicit that the patterns are a reference for sensemaking rather than a direct measure of teaching quality, which bounds any institutional use.
- The pipeline depends on the course's own materials and on a specific embedding model (OpenAI text-embedding-3-large), so reproducing it elsewhere requires rebuilding the knowledge base.

## Citation

Hua, L., Xu, J., Guo, L., Zheng, N., Shen, Q., Tan, D., & Lu, Y. (2026). [Curriculum-aligned analysis of assessment feedback: a retrieval-augmented large language model approach for revealing fine-grained student error patterns in higher education](https://doi.org/10.1186/s41239-026-00640-7). *International Journal of Educational Technology in Higher Education, 23*, 63.
