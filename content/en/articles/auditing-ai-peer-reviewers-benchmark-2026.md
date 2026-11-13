---
title: "Auditing AI peer reviewers: a benchmark on real scientific papers"
created: "2026-11-13T09:16:00-05:00"
updated: "2026-11-13T09:16:00-05:00"
type: article
page_kind: [evaluation]
research_method: [experiment]
evidence_context: non_educational
level: [higher ed]
audience: [researchers, software developers, administrators]
sources: ['raw/papers/auditing-ai-peer-reviewers-benchmark-2026.md']
source_url: "https://arxiv.org/abs/2611.17052"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [interpreting-and-applying-aied-research, ai-literacy, agentic-ai]
technology: [llm, educational-nlp]
assessment: [automated-assessment, ai-feedback-quality, assessment-validity]
methods: [benchmark, research-methods-aied]
---

> **Synthesis:** Zubeldia, Bolliet, Villaescusa-Navarro, Villanueva-Domingo and Cranmer (2026) built a [[benchmark|benchmark]] for [[llm|LLM]]-based peer review that does not depend on human preference: they injected 357 objectively wrong claims — bad citations, wrong mathematics, wrong numbers, internal inconsistencies — at three severity levels into 30 real arXiv preprints, then measured whether twelve reviewer systems found them. The spread is enormous. Given the same prompt, three frontier models differed by about 50 percentage points in total detection. Structured prompts and [[agentic-ai|agentic]] scaffolding helped where the tool supplied something the model could not, and their own reviewer, Skepthical, led on citations only in the field where retrieval was needed. Everything sat well below perfect detection, with the strongest system at 81.1% on the machine-learning corpus and 70.6% on astrophysics, and mathematics flags were the main source of false alarms.

## Key Findings

1. **Model choice dominated every other design decision.** With an identical prompt, GPT-5.5 detected 60.5% of injected errors on astrophysics against 36.7% for Claude Opus 4.7 and 11.9% for Gemini 3.1 Pro.
2. **Structure helped, but only sometimes.** A structured prompt lifted Claude Opus from 36.7% to 53.3% on astrophysics and from 11.9% to 37.3% for Gemini, while the free-form Claude Code configuration dropped to 28.8%.
3. **Retrieval was decisive for citations, in one field only.** Skepthical, the only system that enforced PDF retrieval, detected 46.7% of citation errors on astrophysics against at most 26.7% for any other system; on ML its rate was statistically indistinguishable from the best single model's.
4. **The best totals were 70.6% and 81.1%.** Skepthical led on astrophysics at 70.6%, and structured GPT-5.5 led on ML at 81.1%, a difference that was not significant.
5. **Open-weight review models detected almost nothing.** OpenReviewer-8B and PaperAudit-Bench Deep found at most 2.8% of injections, including on their home field.
6. **Detection tracked severity.** The strongest systems found 57-73% of subtle injections, while the weakest configurations missed most blatant ones.
7. **False-positive rates stayed low but varied.** Most systems were under 10%, Skepthical at 2.8% and 4.0%, with mathematics flags the main source of false alarms.

## A benchmark that does not need human raters

Most evaluations of AI review compare generated text with human reviews, which measures style as much as substance. This one sidesteps that by manufacturing ground truth: a citation that does not support its claim, an equation that is wrong, a number that contradicts the results table. Because the error is localizable and objectively verifiable, detection becomes measurable, and the authors can report rates by error type and severity with paper-level bootstrap intervals. Each clean paper also runs through every system so false alarms can be counted, which is the half an accuracy-only benchmark would miss. The design has a cost the authors state plainly: the benchmark measures defect detection, not whether a review is good. Novelty, significance, missing controls and interpretive judgment have no ground truth to inject, so a system that scores well here could still write a poor review.

## What the results imply for AI-assisted review

Two findings matter beyond the leaderboard. The first is that scaffolding is not a generic good: tools help when they add a capability the model lacks, as retrieved PDFs do for citation checking, and do nothing when the model already knows the literature — which is why Skepthical's citation advantage disappeared on machine-learning papers, a field its models know well. The second is that a structured prompt can outperform a more elaborate agentic pipeline: structured Claude Code on astrophysics beat the free-form version on every error type, and structured GPT-5.5 matched or beat Skepthical on ML. For institutions considering AI review assistants, that argues for testing the specific configuration rather than the brand, and for treating retrieval and code execution as the components that earn their cost. It also sets a ceiling: even the best system missed roughly a fifth to a third of knowable errors, so a reviewer that reports nothing is not evidence that a paper is sound.

## What this means for practice

- **Journal editors and reviewers.** Use an AI reviewer as a checklist for checkable defects — citations, arithmetic, consistency — and never as evidence that a paper is free of them.
- **Developers.** Build retrieval and code execution into the pipeline, because those are the components that produced measurable gains, and test the exact prompt configuration rather than the model name.
- **Researchers in AI and education.** Borrow the injection method: inject known errors into your own material when evaluating an automated evaluator, rather than comparing its prose with an expert's.
- **Administrators.** Treat vendor detection claims as field-specific; a system that performs well on one literature may add nothing on another where its models already know the sources.

## Limitations

- The benchmark covers 30 papers, 15 from one day in each of two fields and capped at 20 pages, so rates describe those slices rather than review generally.
- Each injected copy carried four errors, and the design cannot rule out that the presence of other errors affects detection of any one.
- Adjudication was LLM-based for detection matching and for general-issue and citation false positives, with a blinded human check on one paper only.
- Skepthical used more model calls and three providers, so its gains cannot be attributed to pipeline design rather than to compute.
- Nothing here measures review quality beyond defect detection: novelty, significance, experimental adequacy and interpretive judgment are outside the benchmark.

## Citation

Zubeldia, Í., Bolliet, B., Villaescusa-Navarro, F., Villanueva-Domingo, P., & Cranmer, M. (2026). [*Auditing AI peer reviewers: a benchmark on real scientific papers*](https://arxiv.org/abs/2611.17052). arXiv:2611.17052.
