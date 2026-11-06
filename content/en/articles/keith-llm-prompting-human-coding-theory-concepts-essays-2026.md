---
title: "Comparing Zero-Shot Large Language Model Prompting with Human Coding of Theory Concepts in Student Essays"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/keith-llm-prompting-human-coding-theory-concepts-essays-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, instructors, assessment designers]
level: [undergraduate]
technology: [llm, prompt-engineering]
methods: [qualitative-research, ai-assisted-educational-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Keith, Pavlik, Stives and Kerr compare human coding of theory concepts in college student essays with [[llm|large language model]] coding across four models, five zero-shot prompt variants, and three coding dimensions. In a secondary analysis of 67 pre-AI essays from two undergraduate criminological theory courses, the choice of model mattered far more than the wording of the prompt: Claude Sonnet 4 came closest to human coding while GPT-4.1 Mini lagged on correlation, error, and bias. [[prompt-engineering|Prompt variations]] had little overall effect, and every model agreed with humans best on the simplest judgment — whether a concept was listed — while error and positive bias climbed sharply when judging whether definitions were correct.

## Key Findings

1. **Model choice dominated agreement.** Claude Sonnet 4 and GPT-4.1 Full did not differ (Δz = 0.02, p = .88), and GPT-4.1 Mini was significantly worse than all other models (all Δzs > 0.10, ps < .007). In the correlation regression the LLM factor carried partial η² = .19 (F = 15.91, p < .001).
2. **Prompt type barely mattered.** All five prompt styles showed no significant pairwise contrast (largest |Δz| = 0.10), and prompt type was the only nonsignificant main effect in the correlation model (F = 1.77, p = 0.136, partial η² = .03).
3. **Judgment complexity drove accuracy.** Correlations with human ratings ran r = .75 when identifying whether a concept was listed, r = .67 for defining, and r = .56 for defining correctly; estimated per-concept error rose from .11 (listing) to .27 (correctly defining).
4. **The models over-identified, and the expensive one underperformed.** Bias was lowest for Claude Sonnet 4 (−0.03) and highest for GPT-4.1 Mini (0.23), while Gemini 2.5 Pro cost $178.13 for 43.5 million tokens — over three times GPT-4.1 Full's $56.77 — yet showed more error and bias than the cheaper full model.
5. **Concise theories coded better.** Social control theory, with 6 concisely defined concepts, gave the lowest error (logit = −2.21, estimated error probability .10), while self-control theory's 13 overlapping concepts produced the highest error (logit = −1.01, p̂ = .27) of the four theory conditions.

## The corpus and the design

The essays came from two Criminological Theory courses at a large southeastern public university, completed in Fall 2014 and Spring 2015, before AI tools existed. The analytic sample holds 39 students who wrote 67 papers: 33 papers on an assignment pairing social control theory with self-control theory, and 34 on one pairing deterrence theory with rational choice theory; 22 students completed both papers. A four-person team built the codebook from the course readings, and each paper was coded on three dimensions per concept: whether the student listed the concept, attempted a definition, or defined it correctly.

Four closed-source models were prompted — ChatGPT-4.1 Mini, ChatGPT-4.1 Full, Gemini 2.5 Pro, and Claude Sonnet 4 — with five zero-shot prompts per model: a bare zero-shot prompt plus variants adding a persona, the theory authors' names, a concept definition, or detailed coding instructions. Each prompt ended by demanding a binary 1 or 0 answer, and temperature was set to 0. This produced 60,060 prompts, collapsed to 8,040 data rows across 240 design cells (4 models × 5 prompts × 3 dimensions × 4 theories). Rather than a single agreement statistic, the authors report Pearson correlations (Fisher-Z transformed), absolute error modeled with binomial regression, and normalized signed bias, since the three metrics separate rank-order agreement, disagreement magnitude, and systematic over- or under-identification. The prompting code was released publicly (imrryr/LLM-queries).

## Model choice outweighs prompt design

The correlation regression accounted for substantial variance (R² = .63, adjusted R² = .57). Coding dimension (partial η² = .39) and theory (partial η² = .39) were the strongest factors, with the LLM next (partial η² = .19, F = 15.91, p < .001) and prompt type nonsignificant (F = 1.77, p = 0.136). The prompt-by-dimension interaction was significant (F = 2.58, p = 0.010) but small (partial η² = .09). Correlations ordered the models into tiers: Claude Sonnet 4 and GPT-4.1 Full sat together (Δz = 0.02, p = .88), Gemini 2.5 Pro trailed GPT-4.1 Full (Δz = 0.10, p = .015), and GPT-4.1 Mini stood alone at the bottom.

The error model told the same story with sharpened stakes. The LLM factor explained 0.057 deviance (χ² = 979.10), the dimension 0.101 (χ² = 1750.46), and theory 0.084 (χ² = 1448.43), with fixed-effect McFadden R² = .157 and fixed-plus-random R² = .192. Estimated per-concept error probabilities ran from .13 (Claude Sonnet 4) through .15 (GPT-4.1 Full), .20 (Gemini 2.5 Pro), to .26 (GPT-4.1 Mini). In the bias model, Claude Sonnet 4 sat essentially unbiased (−0.03) while GPT-4.1 Mini was the most biased at 0.23, and the LLM factor again dominated (F = 578.36, partial η² = .178; marginal R² = 0.3594, conditional R² = 0.463).

Cost did not track quality. Gemini 2.5 Pro, the priciest run at $178.13 for 43.5 million tokens (its reasoning output billed heavily), finished behind GPT-4.1 Full, which cost $56.77 for 28.3 million tokens, while Claude Sonnet 4 cost $169.18 for 35.9 million tokens and performed best overall. GPT-4.1 Mini was cheapest at $11.34 for 28.3 million tokens and worst on every metric.

## Where prompts help and where they hurt

Prompt effects were subtle but patterned. Every model was strongest at listing judgments (Δz = 0.15 over defining, Δz = 0.33 over correctly defining, both p < .001) and weakest when a definition had to be judged correct. Adding information rarely bought accuracy: the definition prompts could hurt performance precisely where a definition was required, and neither instruction nor definition prompts helped the listing task. In the error analysis, definition and instruction variants lowered errors for correct-definition judgments but impaired detection of listing relative to other prompt categories, echoing the interaction pattern in correlations.

The bias gradient made the failure mode concrete. Correctly defining carried the largest bias (0.254), followed by defining (0.071) and listing (0.027), all pairwise differences significant. Prompt condition also shifted bias: zero-shot instructions (0.157) and plain zero-shot (0.142) produced the most over-identification, while zero-shot with the authors' names (0.092) and with a definition (0.079) produced the least. The authors interpret this as models "seeing" concepts everywhere once given loose instructions, and as evidence that for well-defined binary tasks zero-shot prompts can reach high agreement — provided the model is chosen well.

## What this means for practice

- **Researchers coding qualitative data.** Select the model before optimizing the prompt: model identity accounted for far more variance (partial η² = .19 in correlations, F = 578.36 in bias) than any prompt manipulation, and Claude Sonnet 4 or GPT-4.1 Full matched each other while GPT-4.1 Mini was reliably worse.
- **Automated essay coding on campus.** LLM coding is defensible for checking whether students listed a concept (estimated error .11) but not for judging definitional accuracy (estimated error .27 with bias 0.254, where models over-credit); route the harder judgment to human coders, matching the authors' call for human review of LLM decisions given variable bias and hallucination risk.
- **Writing centers and feedback tools.** Tutors and students can use prompts to check whether all assigned concepts appear in a paper, but the tools should be framed as coverage checks rather than correctness verdicts, and writing center staff will need prompt literacy training to use them responsibly.
- **Cost-conscious deployment.** Do not equate price with quality: the most expensive run (Gemini 2.5 Pro, $178.13) underperformed a model a third of its cost (GPT-4.1 Full, $56.77), while the cheapest (GPT-4.1 Mini, $11.34) was the worst overall.

## Limitations

- Human reliability was unmeasured: the two coding teams reached consensus through social moderation, discrepancies were never tracked, and no inter-rater reliability statistic was calculated, so "human coding" is a single normed judgment rather than a measured standard.
- The corpus is small and single-institution — 39 students and 67 papers from one writing-intensive course sequence — and the essays predate AI, so the ecology differs from current student writing that may itself be AI-assisted.
- Only zero-shot prompting was tested; few-shot and chain-of-thought variants, which prior work suggests can improve agreement, were deliberately excluded to keep the comparison clean.
- Temperature-0 outputs are not perfectly deterministic across servers and GPU operations, and the proprietary models may have changed during or after data collection, so replications across time and providers are needed.
- The concept codebooks, and the definition-correctness judgments within them, reflect one four-person team's reading of one textbook's concepts, which limits generalization to other rubrics and content domains.

## Citation

Keith, S., Pavlik, P. I., Stives, K. L., & Kerr, L. J. (2026). Comparing Zero-Shot Large Language Model Prompting with Human Coding of Theory Concepts in Student Essays. *Journal of Educational Data Mining*, 18(1), 286-317.
