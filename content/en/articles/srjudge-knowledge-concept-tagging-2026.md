---
title: "SRJudge: Empowering Large Language Models with Selective Reasoning for Fine-Grained Knowledge Concept Tagging"
created: "2026-09-30T09:08:58-04:00"
updated: "2026-09-30T09:08:58-04:00"
type: article
sources: ['raw/papers/srjudge-knowledge-concept-tagging-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education, biology education, physics education]
level: [secondary, middle school]
audience: [researchers, educational technology developers]
technology: [educational-nlp, llm, reinforcement-learning]
methods: [benchmark, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Tagging exercises with the knowledge concepts they test is a prerequisite for [[knowledge-tracing]], [[cognitive-diagnosis]], and [[recommender-systems-and-learning-paths|recommendation]] on [[online-teaching-and-learning|online learning]] [[edtech-platform|platforms]], but existing taggers struggle to pick one concept out of a large set of similar candidates. SRJudge is a three-stage framework that gives a [[llm|large language model]] selective reasoning instead of asking it to choose across the whole concept inventory at once. A fine-tuned BERT Selector narrows the inventory to a top-5 shortlist, a lightweight Qwen2.5-1.5B Reasoner trained with a customized [[reinforcement-learning|GRPO]] objective recommends one concept with reasons, and a frozen Qwen3-32B Judger reviews that reasoning before issuing the final label. Across S Math and the two datasets the authors built, S Bio and S Phy, SRJudge reaches macro F1 of 0.7602, 0.6987, and 0.6643, ahead of the strongest baseline on all three [[benchmark|benchmarks]], while a pruning mechanism cuts the Reasoner's training time roughly in half at no cost to accuracy.

## Key Findings
1. SRJudge reaches macro F1 of 0.7602 on S Math, 0.6987 on S Bio, and 0.6643 on S Phy, ahead of the strongest baseline, LGCEL, on all three datasets.
2. A supervised fine-tuned BERT Selector already places the correct concept in its top five at 0.9107–0.9377 accuracy, but its top-1 accuracy is only about 0.72 — the gap the rest of the pipeline targets.
3. Adding the [[reinforcement-learning|GRPO-trained]] Reasoner lifts F1 by 2.02%, 0.96%, and 1.92% on S Math, S Bio, and S Phy compared with the Selector alone.
4. A dynamic position reward that scales with the training step and the pruning rate beats both no reward and a static reward, reaching F1 0.7491 on S Math.
5. Pruning low-advantage completions at a rate of 0.5 raises F1 slightly while cutting training time on S Math from 14.1 to 7.2 hours.
6. Zero-shot chain-of-thought prompting is far weaker than supervised fine-tuning: GPT-4.1 scores F1 0.5047 on S Math and 0.3664 on S Phy.

## The Select–Reason–Judge pipeline

Concept tagging asks a model to map an exercise and its solution to one label from a large catalog. The authors argue the difficulty is dimensionality: with hundreds of similar candidates, the correct concept is hard to separate from its neighbors, and models asked to choose in a single step tend to pick plausible but wrong labels. SRJudge splits the decision three ways. Stage 1 fine-tunes a BERT-based small language model with continued masked-language-model pre-training for [[educational-nlp|concept classification]], then keeps only the top five concepts by predicted probability. Stage 2 gives a 1.5B-parameter model that shortlist and asks it to reason toward a recommendation. Stage 3 hands the Selector's top pick, the shortlist, the Reasoner's recommendation, and its written justification to a frozen 32B model, which judges the chain and returns the final concept.

## Teaching reinforcement learning to respect concept order

The Reasoner is trained with group relative policy optimization, a [[reinforcement-learning]] method that scores several sampled completions per exercise and updates the policy toward the better ones. The paper's contribution is the reward. Each completion earns a format reward for putting the answer in a box and marking its reasoning, an accuracy reward of three points for naming the correct concept, and a position reward. The position reward is the interesting part: because the Selector ranks candidates by confidence, a correct answer sitting lower in the shortlist carries information about how much the model should explore. The reward grows with the answer's rank and with the training step, so early training stays stable while later training pushes the model past the Selector's first guess. A pruning step then discards completions whose absolute advantage is too small to teach anything, improving both F1 and training efficiency.

## Datasets, baselines, and where the gains land

Evaluation uses three datasets. S Math ([[math-education]]) has 12,205 exercises across 155 concept categories for grades 7–9; S Bio ([[biology-education]]) is new, with 9,941 exercises and 72 categories for grades 10–12; S Phy ([[physics-education]]) is also new, with 18,440 exercises and 135 categories. The authors built the biology and physics sets because no comparable validation datasets were available, and each is split 8:1:1. Baselines span fine-tuned BERT and RoBERTa encoders, open and closed models under supervised fine-tuning or zero-shot chain-of-thought [[prompt-engineering|prompting]], and four task-specific taggers. SRJudge beats all of them, and the margin is widest on the hard cases: using the Selector's F1 as a difficulty proxy, gains average 8.84% on S Math, 2.31% on S Bio, and 3.24% on S Phy. The higher-grade biology and physics sets score lower in absolute terms, which the authors attribute to concepts there being more complex and interrelated.

## What this means for practice

- **Instructors.** Treat automated concept tags as a first-pass index rather than a verdict: even the best configuration tops out at macro F1 0.7602, so a meaningful share of fine-grained labels still miss on the hardest datasets.
- **Instructional designers.** The two-model pattern — a cheap classifier to shortlist, a reasoning model to choose — is reusable whenever a tagging or routing decision involves a large, highly similar label set.
- **Researchers.** Report top-K retrieval accuracy alongside top-1 accuracy when you build a tagging [[benchmark]]: here the shortlist recovered the correct concept far more often than top-1 did, and that gap is exactly what the rest of the system had to close.
- **[[educational-technology-developers|Educational technology developers]].** The pruning mechanism cut training time from 14.1 to 7.2 hours at equal accuracy, so efficiency tuning is worth testing before assuming a full reinforcement-learning budget.

## Limitations

- Evaluation is offline on three datasets; the paper reports no classroom deployment and no evidence that better tagging changes learner outcomes.
- Two of the three datasets, S Bio and S Phy, were built by the authors because no other validation datasets were available, so the cross-discipline validation rests on data they constructed.
- Gains are markedly smaller outside mathematics: adding the Reasoner improves F1 by 0.96% on S Bio and 1.92% on S Phy, against 2.02% on S Math, and the authors note the higher-grade concepts are more complex and interrelated.
- The Judger requires a 32B-parameter frozen model and all experiments ran on four NVIDIA L20 servers, so the pipeline's cost relative to the baselines it beats is not reported.

## Citation

Yang, Z., Yang, J., Lin, H., Chen, X., & Guan, Q. (2026). [SRJudge: Empowering Large Language Models with Selective Reasoning for Fine-Grained Knowledge Concept Tagging](https://arxiv.org/abs/2609.36982). arXiv:2609.36982.