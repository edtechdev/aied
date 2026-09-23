---
title: "Beyond Direct Answering: Aligning Educational LLMs as Socratic Guides via Heuristic Reinforcement Learning"
created: "2026-09-23T08:11:17-04:00"
updated: "2026-09-23T08:11:17-04:00"
type: article
published: "2026-07-25"
sources: ['raw/papers/wang-socratic-guides-heuristic-reinforcement-learning-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
page_kind: [evaluation]
research_method: [experiment]
discipline: [science education]
level: [primary education]
audience: [instructors, educational technology developers, researchers]
foundations: [critical-thinking]
pedagogy: [socratic-method, scaffolding, inquiry-based-learning]
technology: [pedagogical-llm-training, llm, reinforcement-learning]
methods: [ai-ed-evaluation]
ethics: [ai-misuse-learning-harm]
confidence: medium
source_depth: full text
verified: [citation, links, numbers]
---

> **Synthesis:** Wang, Song, Liu and Zou (2026) target a specific failure of educational [[llm|LLMs]]: they behave as direct answerers, naming the concept in the opening turn instead of leading the learner to it. The paper presents HeuristicEdu, which aligns Qwen2.5-7B-Instruct toward [[socratic-method|Socratic tutoring]] in two phases — supervised warm-up on SocraticEdu, a 797-trajectory Chinese science dialogue corpus, then Group Relative Policy Optimization (GRPO) under a heuristic reward over cognitive depth, engagement and directness. Two outcome-oriented measures, [[scaffolding]] Effectiveness (SE) and Conversation Depth (CD), come from a four-turn LLM-simulated loop. On 30 held-out questions the best variant lifts SE from 30.0% to 63.3% and cuts keyword leakage from 30.0% to 13.3%, while an unaligned 72B baseline reaches 0% SE and 96.7% leakage. The contribution is behavioral alignment and [[ai-ed-evaluation|evaluation]] design, not evidence about student learning.

## Key Findings

- **Direct answering looks like a behavioral default, not a capability limit.** In 10,512 student queries from the Dr. Curious platform, every model tested disclosed core scientific terminology in its opening response at rates above 96%.
- **SFT plus GRPO reshapes tutor turns.** The best variant raises SE from 30.0% to 63.3% and lowers keyword leakage from 30.0% to 13.3%.
- **Removing the directness penalty from optimization helped.** PT-GRPO Full (γ=0.2) reached SE 0.433 with leakage 0.233; with γ=0, SE improved by 0.200 and leakage fell by 10 percentage points.
- **Parameter training beat prompting for this objective.** The trained 7B model scored SE 0.633 and J 0.567 against 0.400 and 0.367 for a Qwen-plus prompt-engineering reference, which leaked less (6.7%).
- **The new metrics score outcomes, not fluency.** SE records whether the simulated student self-expresses the target concept without tutor-side leakage; CD reaches 0.722 for the best variant.
- **The evidence base is small and single-language.** 797 trajectories (395 real, 402 synthetic) across seven elementary-science domains, with 30 held-out test questions.

## Treating answer disclosure as an optimization target

Tutoring dialogues are reconstructed from platform logs. A character-level TF–IDF and logistic-regression scientific-intent filter (macro-F1 = 0.9805 ± 0.0022) removes 1,601 off-topic questions and keeps 8,911; Sentence-BERT embeddings and K-Means (K=15) organize the rest, and 134 high-view seeds support 395 replayed real trajectories and 402 synthetic ones. Phase 1 fine-tunes Qwen2.5-7B-Instruct on the 797-trajectory corpus for 3 epochs at batch size 16; Phase 2 applies [[reinforcement-learning|GRPO]] with group size 8, PPO clip 0.2 and KL coefficient 0.01.

The reward is Rtotal = α·Rcog + β·Reng − γ·Rdir. Rcog rewards cognitive lift: a Qwen-turbo judge assigns Bloom's Taxonomy levels to the student's turn and the tutor's response, and the normalized difference scores movement toward higher-order demand — where [[critical-thinking]] enters the design. Reng scores cues that correlated with child follow-ups in the logs: rhetorical questions, analogical framing, extreme-value language and hypotheses. Rdir penalizes premature disclosure of seed-specific keyword sets, with a Kquery correction exempting terms the student already introduced. The work belongs to [[pedagogical-llm-training]], not to [[prompt-engineering]] alone.

## Two outcome-oriented metrics

Because BLEU- and ROUGE-style measures say little about tutoring, the paper introduces SE and CD. SE is the share of test questions on which the simulated student self-expresses the gold concept without tutor-side keyword leakage, across up to T=4 rounds. CD is the fraction of consecutive guide–student turn pairs whose Sentence-BERT embeddings fall below 0.70 cosine similarity, indicating progression rather than paraphrase. A composite J = SE − 0.5 × LeakRate then discounts success achieved by disclosure. With 30 held-out seeds, per-run SE variance is roughly ±0.10, so margins below 0.10 are indicative only.

## What the results show

The parameter-training track follows an alignment ladder: prompt-only PT-Base reaches SE 0.300 with 30.0% leakage, SFT alone 0.500 with 26.7%, and GRPO with Rcog and Reng but no directness penalty 0.633 with 13.3% leakage and the best CD (0.722). Adding Rdir at γ=0.2 drops SE to 0.433 and raises leakage to 0.233. The authors attribute that conflict to Rdir suppressing high-frequency scientific vocabulary broadly, cancelling part of what Reng rewards; a nine-trial hyperparameter search found every configuration with γ ≥0.20 and β ≤0.40 yielding J < 0. The prompt-engineering reference leaked least (6.7%) but stayed behind on SE and J, so decoding-time constraints cut leakage without closing the scaffolding gap. Qwen-72B without alignment scores 0.000 SE and 0.967 leakage.

## What this means for practice

- **Instructors.** Do not read a fluent opening turn as teaching. In the authors' audit, unaligned models disclosed core scientific terminology in their first response at rates above 96%, so check the first tutor turn for the target term.
- **Instructors.** Track sustained progression, not confident wording: the best pipeline also had the highest Conversation Depth (0.722), and novelty alone does not indicate guidance.
- **[[educational-technology-developers|Educational technology developers]].** Treat answer disclosure as a reward-design problem. Penalizing target vocabulary during GRPO reduced SE by 0.200 and raised leakage by 10 percentage points, so constrain terminology at decoding time instead.
- **Researchers.** Report leakage beside any scaffolding success metric, and validate the student proxy: simulated turns match held-out real follow-ups at a mean Sentence-BERT similarity of 0.449 ± 0.220.

## Limitations

- Everything rests on 30 held-out seed questions, with per-run SE variance of roughly ±0.10, and success is scored against an LLM student simulator validated only against held-out real follow-ups (mean similarity 0.449 ± 0.220); SE describes behavior toward a proxy, not learners.
- No learning outcome — retention, transfer, or independent [[problem-solving|problem solving]] — is measured; SE is a [[simulation]] score, not evidence that students learned more.
- Scope is one 7B backbone (Qwen2.5-7B-Instruct) and one Chinese-language corpus from a single platform, and both the reward and the SE definition lean on LLM judges and a hand-curated keyword set, so generalization is untested.
- The work is an arXiv preprint (25 Jul 2026), not peer-reviewed.

## Connected Concepts

- [[socratic-method]]
- [[scaffolding]]
- [[reinforcement-learning]]
- [[pedagogical-llm-training]]
- [[llm]]
- [[critical-thinking]]
- [[ai-misuse-learning-harm]]
- [[inquiry-based-learning]]
- [[simulating-students]]
- [[intelligent-tutoring]]

## Connected Articles

- [[singh-eduqwen-pedagogical-rl-2026]] — reinforcement learning as a pedagogical tuning route for open-source LLMs
- [[teachlm-post-training-llms-education]] — post-training an LLM on authentic learning data
- [[measuring-llm-tutors-teach-vs-solve]] — diagnosing whether LLM tutors teach or hand over solutions
- [[valid-student-simulation-llm-2026]] — how far LLM student simulation can be trusted
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — designing tutors away from answer delivery

## Citation

Wang, X., Song, S., Liu, W., & Zou, X. (2026). [*Beyond Direct Answering: Aligning Educational LLMs as Socratic Guides via Heuristic Reinforcement Learning*](https://arxiv.org/abs/2607.22996). arXiv:2607.22996. Preprint, not peer-reviewed.