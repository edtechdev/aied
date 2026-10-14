---
title: "Natural Language Processing for Aligning Readings with Learning Objectives and Assessing Topic Balance in Dental Education"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/nlp-reading-lists-dental-education-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
discipline: [medical education]
level: [higher ed]
audience: [instructors, instructional designers]
technology: [educational-nlp]
foundations: [curriculum-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Curriculum teams rarely have time to check whether every assigned reading actually supports the objective it is meant to serve, and [[curriculum-design|curriculum alignment]] in professional programs is usually verified by hand. This study tests whether [[educational-nlp|natural language processing]] can make that review faster in dental education, treating a pool of PubMed abstracts as a proxy reading list. The workflow ranks candidate readings for each objective with PubMedBERT embeddings and cosine similarity, filters the top matches with a natural language inference evidence check, and summarizes topic coverage with Latent Dirichlet Allocation. Across 3,837 objective–abstract pairs, similarity alone retrieved plausible matches but also on-topic yet unsupportive ones; adding the evidence check raised accuracy on an expert-labeled validation set from 0.69 to 0.73 while cutting false positives from 12 to 8. The authors frame the pipeline as a screening and decision-support tool that narrows large reading pools for expert review rather than replacing [[evaluative-judgment|expert judgment]].

## Key Findings

1. PubMedBERT sentence embeddings produced consistently high top-match similarity: across 13 course-level dental objectives the median cosine similarity for best-matched abstracts ranged from 0.86 to 0.91.
2. Similarity alone was insufficient — an NLI evidence check classified 22.9% of high-similarity pairs (cosine 0.90–1.00) as neutral or contradictory, made up of 16.8% neutral and 6.1% contradiction.
3. Cosine retrieval is sensitive but imprecise: on the 49-pair expert-labeled set it reached precision = 0.61, recall = 0.86, F1 = 0.72 and accuracy = 0.69 (TP = 19, FP = 12, FN = 3, TN = 15).
4. The combined rule (cosine ≥ 0.90 AND entailment ≥ 0.30) reached precision = 0.68, recall = 0.77, F1 = 0.72 and accuracy = 0.73, reducing false positives from 12 to 8 while recall fell from 0.86 to 0.77.
5. Cosine similarity and entailment probability were only moderately correlated (Spearman ρ = 0.429; Pearson r = 0.471; both p < 0.001), which supports NLI as a related but non-redundant post-retrieval check.
6. LDA topic mass was distributed rather than dominated by one topic — Topic 1 led at 16.6%, Topic 3 at 13.5% and Topic 4 at 12.4%, with the top three topics together accounting for 42.5%.
7. At domain level, coverage concentrated in one or two topics — dental implants sat mostly in Topic 1 (56%) and endodontics in Topic 6 (42%) — a broad but uneven mix of themes.

## The review burden the workflow targets

Alignment means that objectives, teaching activities, readings, and [[assessment|assessments]] all point at the same intended outcomes. In practice those pieces move at different speeds: reading lists and assessments are often refreshed annually while formal objectives and program documents change more slowly, so students can end up assessed on material their assigned readings do not support. Constructive alignment names the goal, and curriculum mapping has long been the tool that makes it visible in [[medical-education|health-professions education]], but mapping is labor-intensive because it depends on coordinated faculty review of course documents. Existing NLP work has automated parts of outcome-to-outcome and standard-to-item matching in general [[higher-ed|higher education]], yet that work had not been applied to dental curricula or to reading lists, and it rarely asks whether a specific reading provides direct, objective-specific support at scale. This study targets that gap by treating the public dental literature as a candidate pool from which readings could be drawn.

## On topic is not the same as supportive

A retrieval system that ranks by semantic similarity answers a narrow question: does this text look like it is about the same thing as the objective? For a curriculum decision that is not enough, because a topically adjacent abstract can share vocabulary with an objective while failing to address the skill the objective names. The workflow therefore runs a second test. After ranking abstracts by cosine similarity, it applies a natural language inference model that predicts whether the abstract entails, contradicts, or is neutral with respect to the objective text, and treats the entailment probability as an evidence-support score. This two-stage reading — retrieve plausible candidates, then filter for actual support — is what the authors argue reading-list selection should be. The moderate correlation between the two signals (Spearman ρ = 0.429) is the practical evidence that they measure different things rather than duplicating each other.

## Topic balance as a curriculum signal

Coverage is the second half of the review question. Even when every objective has some strong candidates, a reading pool can still lean heavily on a handful of themes, leaving other parts of the intended curriculum thinly served. To describe that pattern the authors fit Latent Dirichlet Allocation over the 3,837 objective–abstract records, using abstracts only, and compared how topic mass distributed within and across the four dental domains. The result is descriptive evidence rather than a verdict: each domain drew most of its weight from one or two topics, domains still shared topics with each other, and no single topic dominated the whole corpus. The authors connect uneven coverage to constructive alignment, noting that under-coverage of a topic can open [[learning-gains|learning gaps]] relative to the intended objectives and the assessments built on them. Read this way, the topic model is a conversation starter for a curriculum committee, not an automated judgment about course quality.

## What this means for practice

- **Instructors.** Treat similarity ranking as a shortlisting aid rather than a decision: the study's own numbers show that high-similarity matches can be on topic without supporting the objective, so an evidence-support check belongs in the loop before a reading is assigned.
- **Instructors.** Before assuming a reading list is balanced, check coverage by theme: each dental domain here concentrated in one or two topics, the kind of imbalance that is easy to miss in a document-by-document review.
- **Instructional designers.** Scope an automated alignment pass as screening that narrows a large pool to a shortlist for expert review — the authors explicitly position the method as decision support, not a replacement for faculty judgment.
- **Instructional designers.** Budget for a documented, repeatable check rather than a one-off audit: the objectives were stored in a structured table with domain and objective identifiers so alignment scores could be re-run as readings or objectives changed.

## Limitations

- The reading pool is a proxy: the study used PubMed abstracts in place of a real dental curriculum with syllabi and assigned readings, so the alignment and coverage estimates describe the public literature, not what students actually read.
- The expert-labeled validation set is small at 49 usable pairs, drawn from 50 reviewed pairs with one excluded, and the authors say the reported performance and chosen cut-offs should be treated as preliminary.
- The 13 learning objectives were written by a single author, and the domain expert recommended tighter oral-health-specific phrasing plus a reference set labeled independently by two or more experts.
- Topic model results depend on modeling choices such as preprocessing and the number of topics, and topic labels require [[human-in-the-loop-ai|human judgment]], so some subjectivity remains.
- NLI entailment probabilities may not be calibrated across domains or objective wordings, so the thresholds may not transfer without re-tuning on new data; both models were used in inference-only mode, with no [[llm-training-and-fine-tuning|fine-tuning]] on this data.

## Citation

Yasmin, F., Firoozi, T., & Adabdokht, R. (2026). [Natural Language Processing for Aligning Readings with Learning Objectives and Assessing Topic Balance in Dental Education](https://arxiv.org/abs/2610.15941). arXiv preprint arXiv:2610.15941.
