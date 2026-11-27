---
title: "Reducing Authorship Attribution Risk in Student Texts Through Style-Conditioned Rewriting"
created: "2026-11-24T09:40:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
type: article
authors: ["Li Siyan", "Zhen Xu", "Jiayi Chen", "Shopnil Shahriar", "Alessandro Sayad", "Xuanming Zhang", "Renzhe Yu", "Zhou Yu"]
venue: "arXiv preprint (cs.CL)"
evidence_context: educational
technology: [educational-nlp, generative-ai, llm]
methods: [quantitative-research]
ethics: [privacy]
foundations: [academic-integrity]
discipline: [cs education]
level: [higher ed]
audience: [researchers, educational technology developers, instructional designers]
page_kind: [implementation]
research_method: [system development]
sources: ["raw/papers/li-authorship-attribution-risk-student-texts-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Li and colleagues (2026) tackle a practical obstacle in [[educational-nlp|educational NLP]]: real student writing cannot be shared because [[privacy|privacy regulations]] and institutional review boards restrict release even when no personally identifying information remains. Their system, SEAMS, rewrites each student forum post into a less identifiable version that keeps the stylistic and semantic properties needed for downstream analysis. It decomposes a post into content, structure, and style conditioning channels and aggregates over student-disjoint exemplar partitions within style clusters, extending differentially private in-context learning with cluster-restricted retrieval. Across three datasets (a proprietary corpus, Stanford [[online-teaching-and-learning|MOOC]] posts, and Stack Exchange), SEAMS preserved downstream task performance to within 1.8 points of training on original posts. Human raters judged it closer to the original author's style than every baseline, and it reduced authorship attribution risk against three attackers, most strongly against the strongest attacker, LUAR, where the advantage was statistically reliable. The work is a [[generative-ai|privacy-preserving data]] pipeline rather than a study of learning.

*System evaluation across three educational NLP datasets, five random seeds, 1,000 validation and 1,000 test posts sampled per dataset, with style fidelity and semantic similarity metrics, DistilBERT downstream classifiers, a Prolific human judgment study (24 completers, 3–5 ratings per item), and three authorship-attack models.*

## Key Findings

1. **Rewriting preserved downstream performance closely.** Classifiers trained on SEAMS rewrites lost at most 1.8 points relative to training on originals (proprietary), −0.3 on Stanford MOOC, and −0.1 on Stack Exchange.
2. **Human raters preferred SEAMS on style.** Against three baselines, annotators judged SEAMS closer to the original author's style 71.3% (±6.2) of the time versus zero-shot content-and-structure, 66.5% (±6.6) versus cluster summary, and 67.1% (±5.7) versus DP-Prompt; the advantage persisted without boilerplate items.
3. **Attribution risk fell across attackers and datasets.** SEAMS reduced the mean reciprocal rank ratio relative to real posts for all three attackers on all three datasets, with the largest reduction against LUAR; the advantage held across random seeds.
4. **Cluster aggregation added protection.** SEAMS was below its single-partition variant SEAMS-1 on six of nine attacker–dataset pairs.
5. **Style fidelity was the hard part.** Content and structure were reliably preserved; maintaining an authentic student register remained the [[primary-education|primary]] bottleneck, which is why style-conditioned exemplars mattered.
6. **The pipeline is more expensive than it first appears.** SEAMS costs five times as many [[llm]] calls as SEAMS-1 but only about 17% more total tokens per post, since each call carries a shorter prompt.
## Why student text is hard to share

Discussion forums are a rich record of how students actually write — their urgency, confusion, tone, and rhetorical habits — and virtual teaching assistants need training and evaluation data that reflects that variety. Yet the same properties make the data sensitive. The authors note that simply redacting names is insufficient, because IRBs often prohibit releasing student-authored content altogether, including text with no personally identifiable information. General-purpose models prompted to simulate students tend to flatten that heterogeneity, producing distributionally flat synthetic writing that can mislead a deployed assistant.

SEAMS addresses both problems by rewriting rather than generating from scratch. Each output corresponds to exactly one source post, so the population-level distribution of styles can survive while the individual fingerprint is diluted. The mechanism has three conditioning channels — a bullet summary of content, a structural template, and style exemplars drawn from a cluster — and retrieves exemplars under a restriction that prevents any one author from dominating a partition. That restriction is what distinguishes the method from ordinary style-conditioned [[prompt-engineering|prompting]].

## What the evaluations show

Utility was measured twice. Downstream classifiers fine-tuned on rewrites performed close to classifiers trained on originals, and the gap depended on what the task carried: confusion prediction in the Stanford MOOC, which rides on affect and register, separated methods most sharply, while subject classification on Stack Exchange, carried by content, stayed within 0.3 points for every method except the weakest baseline. Human raters then judged which of two rewrites sounded more like the original author; SEAMS won against all three baselines, and the win held when boilerplate placeholders that could cue annotators were removed.

Privacy was measured by attack. An attacker holding other posts by every student ranks candidates for a released rewrite, and the metric is the true author's mean reciprocal rank divided by chance. SEAMS lowered this ratio across all attackers and datasets, most strongly against LUAR, an authorship representation trained to identify writers across documents. The authors are careful about what that shows: the reduction is empirical, not a formal privacy guarantee, and some other methods achieved stronger ratio reductions on the proprietary set while sacrificing style fidelity. SEAMS occupies the middle of the tradeoff, reducing risk across attack modes while keeping utility.

## Scope of the evidence

The study evaluates a method rather than a classroom intervention, and its claims are bounded accordingly. The proprietary dataset cannot be released under its data agreement, which limits independent replication of one of the three results. Style fidelity remains imperfect, especially for longer or more heterogeneous corpora, and the authors report that unrestricted top-K retrieval already lands in the target cluster about 71% of the time, meaning the cluster restriction guarantees something retrieval alone does not but also adds cost. Human agreement on style judgments was fair rather than strong (Gwet's AC1 = 0.303), which is typical for subjective text judgments but means individual preference should be read cautiously. And none of this addresses whether students would consent to having their writing rewritten and published in any form.

For institutions, the practical significance is narrower than it may first appear but still real: it offers a route to sharing research data that otherwise stays locked, which in turn makes [[academic-integrity|research on student writing]] more reproducible. The authors release the pipeline, all prompts, and the rewritten Stanford MOOC and Stack Exchange corpora at [github.com/siyan-sylvia-li/seams_release](https://github.com/siyan-sylvia-li/seams_release).

## What this means for practice

- **Researchers.** When a corpus cannot be released, consider style-conditioned rewriting as a disclosure-control step, and report both utility loss and attack resistance rather than either alone.
- **Educational technology developers.** Preserve register in synthetic or rewritten student data; a corpus that loses the markers of confusion and informality will train assistants that mishandle real students.
- **Instructional designers.** Treat rewritten corpora as research instruments, not as substitutes for collecting consent-based data where that is possible.
- **Institutional review boards.** Engage with technical mitigations. The finding that redaction alone is insufficient cuts both ways: rewriting reduces identifiability but does not eliminate it, and policy should state the residual risk plainly.

## Limitations

- One of the three datasets is proprietary and cannot be released, limiting independent verification of those results.
- The privacy claim is empirical: it measures resistance to three specific attackers, not a formal differential-privacy guarantee.
- Style fidelity remains the bottleneck, particularly for long or heterogeneous posts, and the reported advantage over baselines varies by dataset.
- Human style judgments showed only fair agreement (Gwet's AC1 = 0.303), so individual preference comparisons carry uncertainty.
- The method adds cost — five times the LLM calls of the single-partition variant — which matters for large corpora.
- The study does not examine student attitudes toward having their writing rewritten, nor does it test whether downstream tutors trained on these rewrites actually perform better in deployment.

## Citation

Li, S., Xu, Z., Chen, J., Shahriar, S., Sayad, A., Zhang, X., Yu, R., & Yu, Z. (2026). [Reducing authorship attribution risk in student texts through style-conditioned rewriting](https://arxiv.org/abs/2611.29642). *arXiv preprint arXiv:2611.29642.*
