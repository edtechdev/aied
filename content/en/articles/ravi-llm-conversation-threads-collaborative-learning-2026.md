---
title: "Leveraging Large Language Models to Identify Conversation Threads for Collaborative Learning Analysis"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/ravi-llm-conversation-threads-collaborative-learning-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [researchers, learning analytics designers, instructors]
level: [k 12, adult learning]
discipline: [learning sciences]
technology: [llm, conversational-ai, educational-nlp]
methods: [benchmark, qualitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ravi and colleagues ask whether explicit conversation threads — the interleaved topical strands of small-group talk — help [[llm|large language models]] analyze [[collaborative-learning|collaborative learning]] discourse. From a corpus of 2,371 utterances in 12 transcripts, they publish an operational threading guidebook, test seven OpenAI models on thread identification, and then test whether thread labels improve coding with the relational ABCDE framework. Explicit threads raised Cohen's kappa for coding elicitation moves from 0.0502 to 0.6325 in an all-at-once prompt, and LLM-generated threads matched human-annotated ones at under \$1 per transcript rather than roughly \$25. The authors position well-structured dialogue, not raw model capability, as the decisive scaffold for LLM-based conversation analysis.

## Key Findings

1. **Full-transcript prompting fails at threading; sliding windows recover it.** Zero-shot threading of an entire transcript produced mean accuracies of 0.10-0.40 and macro F1 below 0.35 across all seven models, and one- or three-shot examples added only marginal gains. Prompting with fixed windows of 20 utterances raised accuracies to roughly 0.50-0.65, with gpt-4.1 best at a Cohen's kappa of 0.6523 and a peak of 0.6746 at window size 10.
2. **Thread labels transform downstream coding.** For the E (Elicit) code of the ABCDE framework, adding LLM-generated thread labels to an all-at-once prompt raised Cohen's kappa from 0.0502 to 0.6325. The strongest condition overall was LLM threads with a sliding window (F1 = 0.7409, kappa = 0.6395), about 0.13 kappa above the strongest prior baseline.
3. **LLM-generated threads match human-annotated threads.** With a sliding window, LLM threads reached a kappa of 0.6395 against 0.6239 for human threads; all-at-once, the figures were 0.6325 and 0.6192. Human annotations therefore defined the reliability target rather than an unreachable ceiling.
4. **Thread types differ sharply in difficulty.** gpt-4.1 agreed strongly with human coders on adjacency pairs (kappa = 0.9034), explicit coherence relations (0.9384), and backchannels (0.9578), but nearly failed on topic transitions (0.2567) and self-continuations (0.4309).
5. **Automation is dramatically cheaper and faster.** Threading one hour of transcript took human coders at least 1.5 hours, about \$25 at US minimum wage, versus seconds to a couple of minutes and under \$1 per transcript for LLM threading.
6. **Reasoning-benchmark strength did not transfer.** o3-mini, which scores 87.3% on AIME and 71.7% on SWE-bench, did not beat gpt-4.1 on threading or coding — domain-specific evaluation, not general benchmarks, predicted performance.

## A guidebook for threading synchronous talk

The paper's first contribution is operational: a guidebook, refined through iterative social moderation by three trained researchers, for identifying threads in synchronous multi-party transcripts. A thread is a sequence of connected utterances on the same topic organized across speaker turns; a single turn can carry several contributions belonging to different threads. Coders start from the immediate previous utterance and work backward within a window of N utterances, link consensus statements to the most recent relevant utterance, treat backchannels as non-substantive, and split multi-topic utterances across threads.

Human annotation validated the guidebook across 575 utterances in four transcripts (82, 85, 208, and 200 utterances per round), reaching a Cohen's kappa of 0.89 on the final 200-utterance transcript. The corpus itself spans two settings: six high school students in grades 10-12 working in two groups of three during a five-day virtual data science workshop, each group joined by an AI peer agent named Oscar, and a face-to-face consensus-building exercise in which two adults ranked survival items with an agent named Red Morgan. Among the 2,371 utterances and 31,615 words, the authors identified 315 thread trees; 267 utterances had no parent node, 187 of them starting new threads and 80 standing entirely alone, typically irrelevant agent contributions nobody answered. Linked utterances averaged 1.28 turns apart, at most 13. Implicit coherence relations dominated the data (51.95% of threaded utterances), followed by adjacency pairs (18.14%), topic transitions (9.69%), and backchannels (8.65%), with explicit coherence (5.56%), self-continuation (4.94%), and consensus information (1.03%) rarer.

## Threading before and after sliding windows

The threading experiments compared all-at-once prompting, in zero-, one-, and three-shot variants, against incremental sliding-window prompting in which the model labels only the final utterance of each window of 10, 20, or 30 utterances. All-at-once performance was poor across the board; the paper attributes the failure to context length, since models underuse information buried in long prompts. Sliding windows produced a step change: across models, mean accuracies rose to roughly 0.50-0.65, macro F1 to 0.50-0.60, and kappa approached or exceeded 0.60. Window size mattered little once threading worked — gpt-4.1's kappa ranged from 0.6746 at size 10 to 0.6523 at size 20 and 0.6669 at size 30.

The error analysis shows where the residual failures live. Models handled well-signaled links — adjacency pairs, explicit connectives, formulaic backchannels — while struggling with the messier moves: topic transitions, whose boundaries are inherently ambiguous in exploratory discussion, and self-continuations, where a speaker resumes an idea after an interruption and the model must decide not to link to the backchannel. The agent's technological lag compounded the problem: when Oscar responded late or irrelevantly, thread boundaries were muddied.

## Threads as scaffolding for downstream coding

For the downstream test the authors used the ABCDE framework, a relational coding scheme whose five codes — agreeing, building, chatting, differing, and eliciting — each depend on identifying how utterances connect. Human coders reached acceptable reliability only on C (kappa = 0.757), D (0.663), and E (0.881), and the analysis therefore targeted E, the code with the best agreement, which covered 28.84% of utterances against 6.93% for A, 11.25% for B, 22.45% for C, and 2.71% for D.

Across every condition, explicit threads improved E coding. In the all-at-once setting, LLM-generated threads raised kappa from 0.0502 without threads to 0.6325, showing that discourse structure rather than windowing carried most of the gain; sliding-window prompting without threads reached 0.6000, and adding LLM threads lifted it to 0.6395. Threaded conditions also beat all three adapted prior baselines, including the strongest, from Qamar et al. (2025), at 0.5037. Human-threaded runs — whether all-at-once (0.6192) or sliding-window (0.6239) — stayed level with LLM-threaded runs, so the cost analysis favors automation: human threading costs roughly \$25 per one-hour transcript, against under \$1 for LLM threading, and both threaded sliding-window configurations held kappa near 0.60 where prior literature baselines generally fell below 0.35.

## What this means for practice

- **Researchers studying group talk.** Adopt the threading guidebook as a shared operational definition and benchmark LLM annotation with sliding-window prompts rather than whole-transcript prompts; gpt-4.1 with window size 10 (kappa = 0.6746) is the reported best configuration, and a human-AI hybrid — automated threading plus targeted human correction — is the recommended workflow where resources permit.
- **Learning analytics designers.** Thread structures expose which students initiate topics, who responds to whom, and which contributions receive no uptake, making them a candidate backbone for formative feedback on group discussion; treat thread-based analytics as retrospectives for now, since the paper does not claim readiness for real-time classroom deployment.
- **Instructors using AI to assess collaboration.** Elicitation moves, which research ties to equitable turn-taking, can be coded with explicit thread context at 0.6395 kappa for under \$1 per transcript, but topic transitions and self-continuations still need human review, so verify automated thread labels where those moves matter.
- **Developers selecting models for discourse tasks.** General reasoning benchmarks did not predict threading performance — o3-mini underperformed gpt-4.1 despite 87.3% on AIME — so evaluate candidate models on the actual conversation-analysis task before committing to a pipeline.

## Limitations

- The corpus is small and convenience-sampled: 12 transcripts from a larger audio-agent study, and every conversation included an AI agent whose delays and off-topic turns shaped interaction, so generalization to fully human groups is untested.
- All models came from a single family (OpenAI), leaving question of whether open-weight or other providers would behave differently.
- The authors report technical instability during experimentation: long-context prompts occasionally produced hallucinated or miscounted utterances, frequent model updates forced re-validation, and proprietary models limit interpretability and reproducibility.
- The threading-subcategory analysis rests on labels applied by a single annotator after the categories were developed through moderation, a common but unquantified subjectivity risk.
- Downstream analysis was restricted to the E code because human coders never reached acceptable reliability on A (0.321) and B (0.489), so the paper demonstrates the scaffolding effect on only the most reliably coded move.
- Stronger benchmark performance did not translate to the task, and the authors caution that the approach is not yet sufficient for real-time classroom deployment.

## Citation

Ravi, P., Lee, D. W., Flamia, B., David, J., Hanks, B., Breazeal, C., Anderson, E., & Lin, G. (2026). Leveraging Large Language Models to Identify Conversation Threads for Collaborative Learning Analysis. *Journal of Educational Data Mining*, 18(1), 387-434.
