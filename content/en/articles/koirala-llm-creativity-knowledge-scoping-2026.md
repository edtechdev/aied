---
title: "Applications of Large Language Models in Creativity and Knowledge Generation: A Scoping Review"
created: "2026-11-24T12:45:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
published: "2026-11-24"
type: article
authors: ["Diwakar Koirala", "Sinjin Ghimire", "Bivek Mishra", "Ramesh Sapkota", "Sahil Niraula", "Kushal Bastola", "Nirman Khatiwada", "Neha Koirala", "Saurav Wagle"]
venue: "Computers in Human Behavior: Artificial Humans (article in press)"
evidence_context: educational
foundations: [academic-integrity, human-ai-collaboration, ai-literacy]
pedagogy: [creativity, active-learning, professional-training]
technology: [generative-ai, llm, conversational-ai, pedagogical-agent]
assessment: [evaluative-judgment]
methods: [meta-analysis-systematic-review]
ethics: [bias-mitigation, hallucination-risk]
discipline: [medical education, learning sciences]
level: [higher ed]
audience: [researchers, medical educators, instructional designers, faculty developers]
page_kind: [synthesis]
research_method: [literature review]
sources: ["raw/papers/koirala-llm-creativity-knowledge-scoping-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, quotes]

---

> **Synthesis:** Koirala and colleagues (2026) scoped 99 studies on [[llm|large language models]] in [[creativity|creativity]] and knowledge generation within medical and healthcare research and education. The literature is dominated by reviews, surveys and conceptual papers rather than experiments, and its central finding is disciplinary as much as technical: LLM-specific evidence has to be separated from general AI attitudes, [[self-report-measures|self-reported]] innovativeness and non-LLM technologies before any claim about creativity can be made. The review's own verdict is that LLMs function as cognitive augmentation tools rather than independent creators.

*PRISMA-ScR [[meta-analysis-systematic-review|scoping review]] of PubMed, Google Scholar and Dimensions, searched 7 May 2025. No critical appraisal and no pooled effect; the protocol was registered on the Open Science Framework.*

## Key Findings


1. **The field is mostly not experimental.** Of the 99 included records, 38 were reviews, 20 surveys, 18 conceptual papers, 16 experimental studies and 7 theoretical papers, so 63 of 99 are reviews or position pieces.
2. **Five themes account for the literature.** Scientific creativity and research support (39), creativity in education (23), [[pedagogy|pedagogical]] and technological innovation (23), ethical and epistemological challenges (12), and human–AI collaboration (2).
3. **A count is not a strength.** Theme frequencies describe publication volume, not methodological quality, because the review performed no risk-of-bias appraisal.
4. **Four constructs are routinely conflated.** General AI readiness, self-reported innovativeness, assisted [[writing-education|writing quality]] and raw model performance are all distinct from a measured effect of LLM use on learner creativity.
5. **Ideation, evaluation and validation are separate steps.** A model may propose a candidate hypothesis; novelty still has to be judged against prior work, usefulness against the research problem and validity through testing.
6. **Individual gain can trade against collective diversity.** In the one empirical example discussed, LLM-supplied ideas raised evaluators' ratings of individual outputs, especially for lower-baseline participants, while outputs grew more similar across participants.
7. **Human–AI collaboration is the thinnest category.** Two studies, read descriptively; they establish neither superiority nor scalability.

## What the review mapped

The search ran on 7 May 2025 across PubMed, Google Scholar and Dimensions, returning 381 records: 64 from PubMed, 117 from Dimensions and 200 from Google Scholar, where retrieval was capped at the first 200 results sorted by relevance and limited to 2022–2025. After duplicates were merged, 375 records remained; 276 were excluded at title and abstract screening, leaving 99 for charting. Publication years run from 2009 to 2025, with 40 records from 2024 and 28 from 2025.

Eligibility required a medical or healthcare application, so general education and general academic-writing studies were treated as context only. Each record was assigned to exactly one theme, and the counts are frequencies, not weights.

## The five themes

**Scientific creativity and research support (n = 39)** is the largest and covers ideation, literature synthesis, manuscript drafting and structuring arguments. The review repeatedly separates producing a candidate idea from validating it, and warns that faster workflows and alternative perspectives are descriptions, not measured improvements in novelty or scientific validity.

**Creativity in education (n = 23)** concerns learner-level creative thinking in [[medical-education|health professions education]]. Its clearest internal distinction is between what an AI system can produce and what learners can subsequently do unaided. The nursing entries the authors single out measure associations between constructs, such as AI competence [[self-efficacy]], attitudes and innovation mindset, which do not evaluate the effect of using an LLM.

**Ethical, legal and epistemological challenges (n = 12)** collects [[academic-integrity|plagiarism]] and integrity, authorship attribution, training-data bias, transparency, [[explainable-ai|explainability]] and intellectual property. Discussion of a risk is not evidence of its prevalence, and the authors distinguish epistemic safeguards, such as source verification and hypothesis testing, from governance safeguards, such as disclosure and assigned human responsibility.

**Human–AI collaboration (n = 2)** is retained as an emerging category describing iterative workflows in which people and systems generate, select, check and revise. It includes proposals for interconnected "AI scientists" under human supervision, which the review reads as rationale for study rather than established benefit.

**Pedagogical and technological innovation (n = 23)** covers instructional systems: pedagogical agents, augmented and [[virtual-and-augmented-reality|virtual reality]] environments, simulation platforms and AI-driven [[learning-design|instructional design]]. The authors note that a simulation or VR component does not by itself demonstrate an LLM contribution, and that this theme must be read separately from learner-level outcomes.

## Why the conflation matters

The review's most transferable point is methodological. Four things that look like evidence of enhanced creativity are not the same thing: whether students feel ready to use AI, whether they rate themselves as innovative, whether their assisted writing reads well, and whether a model performs well on assessment items. [[zhai-science-literacy-generative-ai-coherence-2026|Zhai et al.]] compared [[generative-ai|ChatGPT]] and GPT-4 against student performance on science assessment tasks, which addresses model capability rather than any causal effect on learners.

The Doshi and Hauser study supplies the tension in miniature: access to LLM-generated ideas improved evaluators' ratings of individual short stories, particularly for participants with lower baseline creativity, while the outputs became more similar across participants. Individual performance rose and collective diversity fell, which is a design consideration rather than a verdict.

Measurement heterogeneity compounds the problem. Rater judgments of novelty, computational comparisons of output similarity and assessments of scientific feasibility measure different constructs and cannot be combined into one claim that LLMs improve creativity. The review asks that comparisons report task, instrument, evaluator, comparator and unit of analysis.

## What this means for practice

- **Medical educators.** Treat readiness surveys and self-reported innovativeness as background, not outcome measures. If you want to know whether an LLM helps learners think, measure independent performance after the tool is withdrawn, plus delayed retention and transfer to an unfamiliar problem.
- **Instructional designers.** Build evaluation around the assisted-versus-independent gap. Assisted task performance is the easy measurement and the least informative one.
- **Faculty developers.** Teach the ideation-evaluation-validation split explicitly. A fluent candidate hypothesis is the start of the work, not the result.
- **Researchers.** Report model version, [[prompt-engineering|prompt design]], [[student-experience|learner experience]] and access to reference material, and pre-register the task, population, comparator and outcome.
- **Curriculum designers.** Keep general education findings as context. Benefits observed elsewhere are not transferable to medical training without local evaluation.

## Limitations

- The search closed on 7 May 2025, so the review is not a current map of the field.
- No formal critical appraisal was performed, which PRISMA-ScR permits, but that omission means no risk-of-bias judgment and no weighting of findings by methodological quality.
- Three databases may underrepresent computing and education literature; search modes and filters were not fully recorded, and reasons for exclusion were not itemized, limiting reproducibility.
- Only the first 200 Google Scholar results by relevance were retrieved, so eligible work beyond that subset may have been missed.
- Outcomes are heterogeneous and several contexts are broadly described, which limits medical-specific interpretation; one record was charted from its abstract alone.

## Citation

Koirala, D., Ghimire, S., Mishra, B., Sapkota, R., Niraula, S., Bastola, K., Khatiwada, N., Koirala, N., & Wagle, S. (2026). [Applications of Large Language Models in Creativity and Knowledge Generation: A Scoping Review](https://doi.org/10.1016/j.chbah.2026.100431). *Computers in Human Behavior: Artificial Humans*.
