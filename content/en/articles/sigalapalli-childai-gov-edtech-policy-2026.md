---
title: "ChildAI-Gov: An Evidence-Linked AI System for Assessing EdTech Policies Against Children’s Digital Rights"
created: "2026-11-23T09:00:00-05:00"
updated: "2026-11-23T09:00:00-05:00"
published: "2026"
type: article
authors: ["Naveen Sigalapalli", "Huizhi Liang", "Clara Crivellaro"]
venue: "10th Euro-China Conference on Intelligent Data Analysis and Applications (ECC 2026)"
evidence_context: educational
foundations: [ai-education]
technology: [rag, llm, generative-ai]
assessment: [educational-measurement, psychometrically-aware-ai]
methods: [ai-ed-evaluation, benchmark]
institutions: [governance, educational-policy-ai, regulation]
ethics: [privacy, guardrails, explainable-ai, equity-in-ai-education]
research_method: [system development]
discipline: [learning sciences]
level: [k 12]
audience: [policymakers, institutions, educational technology developers, researchers]
page_kind: [implementation]
sources: ["raw/papers/sigalapalli-childai-gov-edtech-policy-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Sigalapalli, Liang and Crivellaro (2026) present ChildAI-Gov, an [[explainable-ai|explainable AI]] system that reads an education-technology tool's [[privacy|privacy]] or [[educational-policy-ai|AI policy]] and scores it against children's digital rights. The system combines a [[llm|language-model]] judgment with a deterministic rule check across five dimensions — safety, privacy, transparency, autonomy and [[equity-in-ai-education|non-discrimination]] — and uses [[rag|retrieval-augmented generation]] to ground every score in provisions retrieved from a curated knowledge base covering the EU AI Act, UNICEF guidance, the UK Age Appropriate Design Code and the Online Safety Act. The authors also construct AIPolicy-EdTech, a dataset of 57 real EdTech policies. On it, no policy was fully compliant: 33 were non-compliant and 24 partially compliant, with Child Rights Impact Scores from 31.0 to 60.9. Grounding made scoring stricter while preserving rankings, and an ungrounded language-model-only baseline was far more lenient, passing 25 of 57 policies where ChildAI-Gov passed none. The authors are explicit that the system assesses documented commitments, not observed behavior or legal compliance.

*System-development study on a purposively constructed dataset of 57 English-language policies; the evaluation is policy-level screening of documented commitments, not a determination of legal compliance or observed behavior.*

## Key Findings

- **No policy passed.** ChildAI-Gov assessed 57 EdTech policies and found none fully compliant: 33 non-compliant and 24 partially compliant.
- **Scores formed a genuine range.** Child Rights Impact Scores ran from 31.0 to 60.9, with a mean of 43.7 and a median of 42.8.
- **Grounding made scoring stricter.** Re-scoring with retrieval disabled raised the mean from 43.7 to 45.4, while the score sets correlated strongly and no verdict changed.
- **Naive prompting was systematically lenient.** A GPT-only baseline scored every policy higher, by a mean of 28.9 points, and would have passed 25 of 57 policies where ChildAI-Gov passed none.
- **The two scoring components disagreed informatively.** Across 285 dimension [[assessment|assessments]] they fell within one point on 52% and were weakly correlated, with transparency the clearest divergence.
- **The child-facing assistant stayed safe but unevenly accurate.** It referred children to a trusted adult in all 36 evaluated scenarios, while factual accuracy rose from 44% to 69% after retrieval coverage was corrected.

## A pipeline built to make scores traceable

ChildAI-Gov is a modular, agent-orchestrated pipeline: a policy is ingested and classified, provisions are retrieved from a separated framework knowledge base, five dimensions are scored by a language model and a rule engine, and a report is generated. The separation matters: holding provisions and policy chunks in one collection risks newer provisions overwriting earlier ones. Retrieval is semantic rather than lexical, so a clause can be related to a requirement despite different wording, and only provisions above a threshold of 0.50 are retrieved. Each dimension is scored twice — by a prompted [[llm|language model]] at temperature zero and by a keyword rule check — and combined as a weighted sum, the language model contributing 0.6 and the rule check 0.4. Both component scores are stored, so disagreement stays visible. A detected manipulative-design pattern yields non-compliant regardless of score, and a low score with high regulatory risk does the same.

## What the dataset showed

The AIPolicy-EdTech dataset spans child-directed and early-years services, mainstream classroom tools, and UK and EU services, and includes widely used tools such as MagicSchool AI and Grammarly. Policies were collected in the versions publicly available in early 2026 and range from about 3,200 to 96,000 characters. No policy approached the compliant threshold: 17 scored below 40, 30 between 40 and 49, 9 between 50 and 59, and one at 60 or above. The composite showed acceptable internal consistency, with Cronbach's α = 0.79. A worked example makes the output concrete: on a policy scoring 42.3, the two components agreed closely on safety but diverged sharply on transparency, where the rule component scored 6.0 and the language model 1.0, and the report cited the ICO and EU AI Act provisions behind the shortfall.

## Grounding and the cost of naive prompting

Grounding is the mechanism behind the evidence-linking: rather than relying on what the language model recalls about regulation, each dimension is judged against the actual provisions retrieved for it, and those provisions are carried into the report. To isolate its effect, the authors re-scored all 57 policies with retrieval disabled. Grounding made assessment stricter — mean CRIS fell from 45.4 to 43.7, with 43 policies scoring lower, 10 higher and 4 unchanged — yet preserved structure: the score sets correlated at r = 0.93, no verdict changed, and internal consistency was essentially identical. Against a [[llm|GPT-only]] baseline prompted in a single call, every policy scored higher, by a mean of 28.9 points, and 25 of 57 would have reached the compliant range. The two ranked policies similarly, so grounding contributes calibration rather than ranking. For a screening tool, certifying weak policies is the more damaging error, and the one ChildAI-Gov avoids.

## The boundary of document-based assessment

The authors are careful about what the system cannot see. A directional comparison against an independent expert child-rights audit of two tools found that roughly two-thirds of expert findings rest on behavioral or consultative evidence — actual data flows, product behavior or stakeholder consultation — that no document-based tool can observe. The comparison is directional over two tools, not an inter-rater study. Two further evaluations are reported as planned protocols rather than completed results: a sample of 100 retrieved provision-policy pairs for retrieval quality, and a small blinded study in which child-rights experts score a subset of policies on the same five dimensions. The system performs [[educational-policy-ai|policy-level rights screening]] on documented commitments, not a determination of [[regulation|legal compliance]]. The child-facing assistant answers only from the policy text and is governed by a [[guardrails|safeguarding]] instruction set: it offers no legal advice, does not falsely reassure a child, and directs questions about rights or data to a trusted adult.

## What this means for practice

- **Policymakers.** Require [[governance|child-rights governance]] screening that ties each finding to a named provision, so an auditor can trace which framework clause a score rests on.
- **Educational technology developers.** Treat documented commitments as the floor: a policy can state the right things while the product behaves differently, so pair document screening with behavioral probes before claiming child-rights alignment.
- **Institutions.** Do not read a single composite score as compliance; use the per-dimension, provision-linked report, and remember that the verdict gates on dark patterns and regulatory risk.
- **Researchers.** Treat unaided [[llm|language-model]] scoring as systematically lenient, and report calibration, not just ranking, when evaluating automated governance tools.

## Limitations

- The system assesses documented commitments, not enacted behavior, and does not determine legal compliance.
- The external check is a directional comparison on two tools, not an inter-rater study; the expert-panel study is still in progress.
- The dataset is 57 English-language policies, twelve of which exceed the 40,000-character reading window.
- The rule engine is keyword-based, and the 0.6/0.4 weighting and 0.50 retrieval threshold are manually selected rather than learned.
- The child-facing assistant evaluation used 36 questions across six policies and a single language-model judge.

## Citation

Sigalapalli, N., Liang, H., & Crivellaro, C. (2026). [ChildAI-Gov: An Evidence-Linked AI System for Assessing EdTech Policies Against Children’s Digital Rights](https://arxiv.org/abs/2611.27799). *10th Euro-China Conference on Intelligent Data Analysis and Applications (ECC 2026)*.
