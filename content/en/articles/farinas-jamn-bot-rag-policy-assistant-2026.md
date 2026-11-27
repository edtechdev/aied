---
title: "Unjamming Deferrals: Supporting Students Through JAMN Bot, a Mobile RAG-Grounded Policy Assistant"
created: "2026-11-25T09:13:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
published: "2026-11-24"
type: article
authors: ["Mark Farinas", "Alesandra Garcia", "Maria Reyes", "Jethro Nueva", "Nawaf Qureshi", "Mahmoud Elsaadany", "Shokry Shamseldin"]
venue: "arXiv preprint (cs.CY)"
evidence_context: educational
foundations: [ai-education]
pedagogy: [student-support-and-success]
technology: [llm, rag, conversational-ai, open-source]
institutions: [institutional-ai-infrastructure]
ethics: [hallucination-risk, guardrails, privacy]
assessment: [ai-feedback-quality]
methods: [ai-ed-evaluation, benchmark]
level: [higher ed]
audience: [administrators, educational technology developers, software developers]
page_kind: [implementation]
research_method: [system development, user study]
sources: ["raw/papers/farinas-jamn-bot-rag-policy-assistant-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Farinas and colleagues (2026) built JAMN Bot, a [[rag|retrieval-augmented]] policy assistant inside Schedulater, a [[higher-ed|university]] exam-deferral app, and evaluated it closely enough to be useful to an institution deciding what to deploy. The bot runs Llama 3.2 3B through Ollama on self-hosted infrastructure, retrieves from a small markdown knowledge base, and shows the source document and section beside each answer. On a 43-item [[benchmark|benchmark]] spanning deferral policy, [[privacy|privacy]], scheduling, cross-policy reasoning and adversarial or out-of-scope questions, three human raters agreed strongly on groundedness but only moderately on correctness. A GPT-5.4 judge scored groundedness close to the human consensus and correctness higher than the raters did, and a three-judge panel largely preserved the ranking across seven candidate models. The finding with the widest reach for [[ai-education|AI in education]] is that a strict grounding [[rubrics|rubric]] rewards instruction-following more than raw model size: a 70B Llama ranked above DeepSeek V4 Pro, and the top three models were separated by less than the measured run-to-run spread.

## Key Findings
1. **The deployed model answered policy questions well and complex ones poorly.** Groundedness averaged 1.632 and correctness 1.240 on a 0–2 rubric, with exam-deferral questions strongest and scheduling weakest.
2. **Human raters agreed almost perfectly on groundedness.** Three raters reached a Krippendorff's α of 0.894 on groundedness across 39 scorable items, but only 0.687 on correctness across all 43.
3. **An [[llm]] judge was permissive about correctness.** The judge scored correctness higher than the human consensus, with weighted agreement that Landis and Koch would call slight.
4. **Model size did not predict answer quality under this rubric.** A 70B open-weight model outranked a frontier deep-reasoning model by a margin wider than the measured run-to-run spread.
5. **The quantized deployment configuration cost more correctness than the judge reported.** Moving to a full-precision hosted copy of the same instruct model improved human-scored correctness while groundedness stayed put.
6. **Temperature made almost no difference.** Sweeping generation temperature from 0.0 to 1.0 moved mean groundedness and correctness by less than a tenth of a point, with no trend.
## A small knowledge base behind a deliberately boring model

Schedulater is an Android app with a Kotlin backend; JAMN Bot is embedded at the top of the messaging tab, where students already ask about their deferrals. The retrieval pipeline chunks markdown policy documents at about 1,500 characters with a 100-character overlap, embeds them with nomic-embed-text, and stores vectors in SQLite. The choice of a 3B model served locally is a governance decision as much as a technical one: fixed model files can be verified, no conversation text leaves the institution, and there is no API version to be deprecated mid-semester.

The guardrail design is layered: a preflight regex blocks hard injection attempts before retrieval, a similarity threshold suppresses weak matches, and empty retrieval produces a standard refusal with no fabricated sources. The preflight layer caught all four hard adversarial prompts. Paraphrased out-of-scope questions were a different matter, and they account for much of the weakest section's low scores.

## What the benchmark measured

The 43-item benchmark was scored by three human raters on groundedness and correctness and re-scored by a GPT-5.4 judge given the retrieved chunk text as context. The judge-human agreement was moderate on groundedness (weighted κ = 0.400) and slight on correctness (κ = 0.144), which the authors read as the judge's willingness to grant credit for plausibly correct answers.

A seven-model comparison then applied the same rubric to the same precomputed retrieved chunks: GPT-5.4 (1.833), Llama 3.3 70B Instruct (1.766), Opus 4.5 (1.751), DeepSeek V4 Pro (1.636), Llama 3.2 3B Instruct (1.600), Command R7B (1.579) and Llama 3.2 1B Instruct (1.173). Because retrieval was held constant, the table measures answer generation against fixed context, and the rubric penalizes content that extrapolates beyond the chunks — which is why a verbose reasoning model can lose to a smaller one that follows the grounding instruction.

## Why the deployment stack changed the measurement

The same 3B instruct model, scored through three human raters, improved on correctness when served at full precision by a hosted provider rather than quantized and served locally, while groundedness barely moved. That is a modest effect reported honestly: precision, inference provider and pipeline implementation all differed between the two runs, so the authors cannot attribute the gain to quantization alone. What they can say is that the judge-human agreement on correctness rose with answer quality, which means an automated judge evaluates a cheap deployment least reliably exactly where institutions are most likely to use one.

Latency is the other deployment fact worth stating plainly. During manual testing, queries averaged just under a minute. That is tolerable for an asynchronous policy question and not tolerable for a student waiting mid-form, and the authors propose a real vector database and query caching as the fixes.

## What this means for practice

- **Administrators.** Ask for human-scored, task-specific evidence before adopting a student-facing assistant, and treat an LLM-judge leaderboard as a screening instrument rather than a verdict.
- **Educational technology developers.** Report which model configuration was actually deployed. A quantized local build and a full-precision hosted build of the same model are different products for measurement purposes.
- **Software developers.** Separate the retrieval from the generation when benchmarking, as this study did. Otherwise a low score cannot be attributed to the model, the retriever or the prompt.
- **Instructors and advisers.** Point students at a grounded policy assistant only if it can show its source. The citations panel is what lets a student check a claim about their own deferral rather than trust it.

## Limitations

- The knowledge base holds ten chunks and the retriever returns a fixed top six, so set-membership retrieval metrics sit close to random baselines; Hit@1 of 0.667 and MRR of 0.773 carry what signal there is.
- The knowledge base was curated by the team to represent the Schedulater workflow and is not any university's actual policy set.
- The GPT-5.4 judge scored its own outputs first, and its margin over second place (0.067) is below the measured run-to-run spread, so self-preference can be neither confirmed nor ruled out.
- Average latency was just under one minute per query in manual testing, which the authors identify as a deployment blocker.
- The evaluation is a benchmark of answer quality, not a study of student outcomes or of whether the deferral process became faster or fairer.

## Citation

Farinas, M., Garcia, A., Reyes, M., Nueva, J., Qureshi, N., Elsaadany, M., & Shamseldin, S. (2026). [Unjamming Deferrals: Supporting Students Through JAMN Bot, a Mobile RAG-Grounded Policy Assistant](https://arxiv.org/abs/2611.32266). *arXiv preprint arXiv:2611.32266*.
