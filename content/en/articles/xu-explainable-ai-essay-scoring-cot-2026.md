---
title: "Explainable AI for education: Enhancing essay scoring via rubric-aligned chain-of-thought prompting"
created: "2026-11-10T20:40:00-05:00"
updated: "2026-11-10T20:40:00-05:00"
type: article
sources: ['raw/papers/xu-explainable-ai-essay-scoring-cot-2026.md']
source_url: "https://doi.org/10.1142/S0129183125420136"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [system development]
methods: [quantitative-research]
level: [higher ed, adult learning]
audience: [researchers, assessment designers, instructors]
discipline: [english education]
technology: [llm]
assessment: [automated-essay-scoring, automated-assessment, feedback, ai-feedback-quality]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Xu and colleagues (2026) build QwenScore+, an [[automated-essay-scoring|automated essay scoring]] and [[feedback|feedback]] system for IELTS Task 2 writing that pairs rubric-aware chain-of-thought prompting with supervised fine-tuning and reinforcement learning from human feedback. The premise is that an LLM scorer's problem is not only accuracy but opacity: a holistic band score tells a learner nothing about which rubric dimension failed or why. QwenScore+ instead reasons through the four IELTS traits — task response, coherence and cohesion, lexical resource, and grammatical range and accuracy — and generates trait-level feedback before projecting a score. On a proprietary corpus of more than 5,000 examiner-annotated essays, the authors report average QWK rising from 0.5253 with CoT alone on Qwen-7B to 0.5410 with CoT plus rubric attention on Qwen-72B, and [[ai-feedback-quality|feedback quality]] rising from a BLEU of 0.2371 without either technique to 0.2873 with PPO and CoT together. The gains are real but modest, and the proprietary corpus means the result is not independently reproducible.

## Key Findings

1. **Chain-of-thought improves trait-level scoring unevenly.** CoT-based scoring reached its strongest agreement on coherence and cohesion (QWK = 0.6814, MAE = 0.2600, RMSE = 0.5099) and grammatical range and accuracy (QWK = 0.5640), while the LLaMA-3 baseline without CoT collapsed on coherence (QWK = 0.0378) and lexical resource (0.0871).
2. **Rubric attention adds a little; the reasoning structure adds most of it.** Average QWK moved from 0.5253 (Qwen-7B, CoT only) to 0.5372 (Qwen-14B, CoT plus rubric attention) to 0.5410 (Qwen-72B), so the largest step is the first one — from holistic prediction to structured trait reasoning — not the extra parameters.
3. **Feedback quality improves most when PPO and CoT are combined.** BLEU rose from 0.2371 (baseline) to 0.2873 (PPO + CoT), ROUGE-L from 0.4012 to 0.4588, and cosine similarity from 0.6125 to 0.6856. CoT alone improved ROUGE-L and cosine more than PPO alone, which the authors read as CoT contributing structure and PPO contributing alignment with human preference.
4. **Human raters tracked the same direction.** IELTS instructors rated feedback on a five-point Likert scale and made pairwise preference judgments; both rose from the baseline to the PPO + CoT configuration, though the paper reports the pattern graphically rather than as a table of rater counts and agreement statistics.
5. **Model scale plateaus under limited data.** Moving from Qwen-7B to Qwen-72B improved BLEU by only 2.5% and cosine similarity by 0.6% under the same CoT and PPO settings, which the authors attribute to the scarcity of high-quality annotated feedback rather than to architecture.
6. **The authors position the contribution as explainability, not state-of-the-art accuracy.** The value claimed is a traceable path from trait-level evidence to score and feedback, which the paper argues matters more for classroom adoption than a small QWK gain.

## Why explainability is the gap

The paper's framing is that automated essay scoring has improved in accuracy while remaining a black box, and that a score alone is weak pedagogical feedback. Its second problem is data: most public AES corpora provide only holistic scores, so a model cannot learn trait-specific reasoning or generate dimension-level comments. The authors' response is to build a proprietary IELTS corpus annotated by certified examiners against the public Task 2 band descriptors, with trait scores and paragraph-level feedback for each essay.

That choice buys supervision and costs reproducibility. The dataset is not public, the splits and annotation protocol are described only at a high level, and the model checkpoints are not released, so the reported numbers can be inspected but not replicated. The paper is best read as a system description with an internal evaluation rather than as a benchmark contribution.

## The QwenScore+ pipeline

The architecture has three parts. Supervised fine-tuning teaches the model the four IELTS traits from examiner-annotated examples. Rubric-aware chain-of-thought prompting then asks it to analyze the essay, generate rubric-aligned feedback, and only then infer trait scores, so the score is a projection of the explanation rather than an independent output. Finally, PPO-based reinforcement learning from human feedback tunes the reasoning steps toward outputs that human raters prefer, using LoRA for parameter-efficient fine-tuning.

The claim about interpretability rests on that ordering. A direct regression model maps text to a band; QwenScore+ produces intermediate trait claims and feedback that a teacher or student can inspect, and the paper argues this mirrors the structure of the IELTS rubric. Whether the generated rationale is faithful to the model's actual decision process is not tested — the explanations are plausible and rubric-shaped, which is a weaker property than causal faithfulness.

## What the numbers show

Scoring results are reported per trait and in aggregate. The strongest trait is coherence and cohesion, which is also where the no-CoT baseline is weakest, and the authors interpret that as evidence that explicit reasoning helps most with discourse-level judgments. The weakest is the average across traits at 0.5410, which is a moderate agreement level for a high-stakes writing assessment; the paper does not report confidence intervals, per-prompt variance, or a comparison against human–human agreement on the same corpus, so the practical meaning of 0.54 is left open.

Feedback results use BLEU, ROUGE-L, and embedding cosine similarity against examiner-written comments. These measure overlap with reference text, not whether a learner can act on the comment, and the paper acknowledges the limitation implicitly by adding a human evaluation. The human evaluation is the more relevant evidence, but it is reported as a figure with Likert means and preference percentages rather than as a table with rater numbers, inter-rater agreement, or the preference counts behind each comparison.

The scaling result is the most transferable finding. If a 72B model gains only 2.5% BLEU over a 7B model under the same supervision, the binding constraint is the annotated data and the rubric alignment, not raw model capacity — which supports investing in examiner annotation and rubric design rather than in larger models.

## What this means for practice

- **Ask for trait-level evidence, not just a band.** The system's useful output is the dimension-level claim and the comment tied to it; a holistic score alone gives a student nothing to revise.
- **Treat generated rationales as inspectable claims, not proof.** The chain-of-thought makes the score legible, but the paper does not show that the stated reasons are the reasons the model actually used; a teacher should read them as a proposed justification.
- **Invest in rubric-annotated data before model size.** The marginal gain from 7B to 72B was small, while the trait supervision was what made the feedback possible.
- **Do not read BLEU or ROUGE as feedback quality.** They measure similarity to examiner comments; usefulness to a learner needs a separate evaluation.
- **Plan for domain limits.** The corpus is IELTS Task 2, and the authors note that atypical prompts, genre-divergent writing, and nonnative constructions may be underrepresented and poorly scored.

## Limitations

- The corpus is proprietary (over 5,000 IELTS essays), with no public release, no reported split sizes, and no model checkpoints; the results cannot be independently replicated.
- Only one writing assessment is studied. Transfer to other genres, rubrics, or educational levels is asserted as a future direction rather than tested.
- Average QWK of about 0.54 is moderate for high-stakes scoring, and the paper reports no human–human ceiling, confidence intervals, or per-prompt breakdown, so the accuracy claim is hard to calibrate.
- The human evaluation of feedback is reported graphically without rater counts, agreement statistics, or the number of pairwise comparisons, which limits how much weight it can carry.
- The explanation is a generated rationale, not a faithfulness test; nothing in the study shows that the chain-of-thought corresponds to the model's actual decision process.
- Fairness is not evaluated. The authors list embedded pretraining bias and underrepresentation of nonnative constructions as limitations and propose auditing as future work.

## Citation

Xu, W., Kassim, M. S. S., Hoo, W. L., Yang, W., & Xu, T. (2026). [*Explainable AI for education: Enhancing essay scoring via rubric-aligned chain-of-thought prompting*](https://doi.org/10.1142/S0129183125420136). International Journal of Modern Physics C, 37(6), 2542013.
