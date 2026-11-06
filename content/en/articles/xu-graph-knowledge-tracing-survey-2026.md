---
title: "A Survey of Graph-Based Knowledge Tracing from Structural and Propagation Perspectives: Models, Applications, and Future Directions"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/xu-graph-knowledge-tracing-survey-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
audience: [researchers, educational technology developers]
level: [k 12, higher ed]
technology: [knowledge-tracing, knowledge-graph]
methods: [benchmark]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Xu, Kujala, Metsämuuronen and Laakso survey [[knowledge-tracing|graph-based knowledge tracing]] (GbKT), the family of models that use [[knowledge-graph|graph]] neural networks to make explicit the many-to-many relationships among students, exercises and knowledge components that sequential tracers compress away. Screening five databases over 2018–2025, they reduced approximately 184 candidate papers to 73 empirical studies, organized the field with a two-dimensional taxonomy — modeling motivation (knowledge representation versus knowledge-state propagation) crossed with graph structure (homogeneous, heterogeneous, hypergraph, dynamic) — and characterized every family with unified message-passing equations. Their own benchmark of eleven models on four standard datasets finds a graph-based model posting the best AUC in every column, and a systematic analysis of 17 public datasets maps each to the graph structures it can support. The survey reports no new data collection: it contributes the taxonomy, a re-run benchmark and dataset-selection guidance, while statistics about individual models are attributed claims from the reviewed papers.

## Key Findings

1. **The corpus: 73 studies from 184 initial hits.** Five databases (ACM Digital Library, IEEE Xplore, ERIC, Google Scholar, Web of Science) were searched for "knowledge tracing" combined with "graph" or "GNN" over 2018–2025; approximately 184 results were reduced to 142 after removing duplicates, 35 were excluded by title and abstract review, 107 went to full-text review, and a further 34 failed the inclusion criteria, leaving 73 articles.
2. **A two-dimensional taxonomy organizes the field.** Modeling motivation splits into knowledge representation (encoding prerequisite, similarity or categorical relations among knowledge entities) and knowledge-state propagation (the evolution, transfer and forgetting of mastery over time); crossed with four graph structures — homogeneous, heterogeneous, hypergraph and dynamic — the taxonomy covers the field under a unified message-passing formulation in which only the AGGREGATE function differs.
3. **A graph-based model holds the best AUC on every benchmark dataset.** Across ASSISTments2009, Junyi, ASSISTments2017 and Statics2011, the best AUC in each column is a GbKT model — GRKT 0.7963 (ASSISTments2009), HGR-KT 0.7366 (Junyi), DyGKT 0.7624 (ASSISTments2017), DGEKT 0.9073 (Statics2011) — and graph models as a category generally outperform both BKT-family and sequential deep learning models.
4. **Graphs support three educational applications.** Learnable adjacency matrices let tracers discover prerequisite structures from response data (GKT, SKT-L, PKT, PSI-KT); psychological factors such as frustration, confusion, focus and boredom become graph nodes (Psy-KT); and multi-hop reasoning powers recommendation and path planning, with LP-KAT reporting a 32.3% mastery-level promotion improvement on Junyi against 25.8% for KNN and 20.1% for GRU4Rec.
5. **Dataset choice should follow the target graph structure.** The authors evaluate 17 public datasets across KC annotation, behavioral granularity, temporal continuity, domain and graph-modeling suitability: MoocRadar matches 2,513 exercises to 5,600 fine-grained KCs (roughly 2.2 KCs per exercise), while AAAI 2023-GKT supplies 1,175 hierarchically organized KCs with an average sequence length of 307 interactions per student.
6. **Four research directions remain open.** Automatic graph-structure discovery, integration with large models, multimodal graph modeling, and interpretability grounded in educational theory; the survey also observes that GbKT remains a black box next to BKT and that the field has almost no fairness research.

## From sequences to graphs

Knowledge tracing predicts whether a student will solve the next exercise correctly from their response history. Bayesian Knowledge Tracing (BKT) models each KC independently with four probability parameters — initial mastery, learning, guess and slip — while deep models such as DKT and DKVMN capture cross-skill dynamics with recurrent and memory architectures. The survey argues that sequential models struggle with three structural realities: exercise–KC mappings are many-to-many, KCs carry prerequisite and hierarchical dependencies, and student–exercise interactions evolve over time. GbKT answers by placing students, exercises and KCs as nodes in a graph and running graph neural networks over them; the paper fixes its terminology up front, defining a KC as the finest-grained unit of knowledge, a knowledge entity (KE) as any knowledge-bearing node, and a knowledge structure (KS) as the organizational relationships among KEs. Graph types are the survey's spine: homogeneous graphs hold one node type, heterogeneous graphs mix students, exercises and KCs with type-specific aggregation, hypergraphs let a single hyperedge connect all the KCs an exercise requires, and dynamic graphs let topology itself evolve as learning proceeds.

## Two modeling motivations, four graph structures

Knowledge representation encodes prior relations among KEs as structure. GIKT convolves an exercise–KC bipartite graph with one shared weight matrix, JKT splits the data into exercise and KC subgraphs weighted by co-correct and co-mastery rates, and heterogeneous models such as HGEKT, HHSKT and KMKT add type-specific projections, attention and multi-hop path propagation. Hypergraphs go further: S2-HHN, DGEKT and MGKT capture the joint dependency of a group of KCs on a single exercise, which pairwise edges must decompose and thereby lose. Knowledge-state propagation instead models how mastery diffuses after each response — GKT, SKT, GKT-CD and GRKT keep the graph fixed while propagating increments along prerequisite and similarity edges, while DyGKT, the framework of Chanaa et al. and KT-Deeper make the graph itself evolve, folding layer updates into temporal recurrence and updating only the nodes involved in each interaction. The survey is explicit that the two motivations are complementary and often combined, and that each structure carries a trade-off: homogeneous graphs are simple and interpretable but blur entity types, heterogeneous graphs integrate rich metadata but cannot express many-to-many joint requirements, hypergraphs capture higher-order relations at higher computational cost, and dynamic graphs best fit long-term, high-frequency interaction data.

## Applications across three educational tasks

In knowledge structure discovery, learnable graph components replace expert priors: GKT parameterizes its adjacency matrix end-to-end, SKT-L learns prerequisites during training, PKT applies L1 regularization to recover a sparse prerequisite graph, and PSI-KT adds a variational Bayesian framework that infers mastery trajectories and a directed prerequisite graph together. The survey reports that PKT evaluates learned graphs against ground-truth structures with F1-scores and that PSI-KT's inferred graphs align with human-annotated prerequisites better than baseline models, with edge weights that causally predict downstream KC performance. In modeling with educational psychology, Psy-KT represents frustration, confusion, focus and boredom as graph nodes alongside Ebbinghaus's forgetting curve and item response theory, and GRKT organizes learning into retrieval, reinforcement and learning/forgetting stages, outperforming eleven baselines on three benchmark datasets in both accuracy and tracing reasonability. Interpretability mechanisms include GraphCA's counterfactual augmentation and IGKT's Rasch-IRT layer that visualizes student ability θ and item difficulty β. In recommendation and path planning, Chanaa et al. model students as dynamic-graph nodes to time interventions, LP-KAT combines a directed acyclic graph with reinforcement learning, and KT-GCN outperforms eight baselines on Recall@k, NDCG@k and AUC on MOOCCube and Amazon-book.

## Matching datasets to graph structures

The survey's central dataset argument is that suitability follows structure. Datasets with multi-KC annotations, rich behavioral logs and ordered timestamps support heterogeneous, hypergraph and dynamic graphs; correctness-only logs with sparse timestamps mostly support static homogeneous graphs. ASSISTments2009 maps exercises to multiple KCs but the original version contains duplicate and erroneous records, so the skill-builder version should be used; ASSISTments2012 offers millisecond-level timestamps, hint usage, affective confidence scores and affective states; the KDD Cup Algebra I 2005–2006 and 2006–2007 files contain timestamp errors and should be used with caution; Junyi provides manually annotated prerequisite and hierarchical links; EdNet-KT2, KT3 and KT4 log complete operation sequences including payments; AAAI 2023-GKT's 1,175 hierarchical KCs and 307-interaction average sequence support time-decay and sliding-window dynamic graphs; and MoocRadar, with 2,513 exercises mapped to 5,600 KCs and more than 12 million behavioral entries across 12 MOOC disciplines, offers the highest concept density of any public MOOC dataset. The authors call for versioned datasets and standardized preprocessing, and map four future directions — automatic structure discovery and completion, large-model integration, multimodal graphs, and theory-grounded interpretability — against the field's open problems.

## What this means for practice

- **Researchers.** Match the graph design to the data, not the fashion: the benchmark's best-AUC-per-column spread — GRKT 0.7963 on ASSISTments2009, HGR-KT 0.7366 on Junyi, DyGKT 0.7624 on ASSISTments2017, DGEKT 0.9073 on Statics2011 — shows each family winning somewhere, and datasets with multi-attribute logs (hints, affect, timestamps) are the ones that can actually support heterogeneous and dynamic graphs.
- **Researchers.** Audit dataset provenance before building graphs: use the ASSISTments2009 skill-builder version because the original contains duplicate and erroneous records, and treat KDD Cup Algebra I 2005–2006 and 2006–2007 with caution because they contain timestamp errors.
- **Researchers.** Compare against the Bayesian family and a trivial baseline: the survey's Table 1 shows BKT-family models trailing deep models on every dataset, so a graph tracer's edge should be shown against BKT, DKT and AKT under identical splits and preprocessing.
- **Educational technology developers.** Reach for graph-based tracers where exercises involve multiple KCs and stable prerequisite structures, and prefer the interpretable variants — IGKT's IRT parameters and PSI-KT's learned prerequisite graphs — so mastery estimates stay explainable to instructors.
- **Researchers.** Where prerequisite networks are uncertain or costly to build by hand, treat them as learnable: PKT and PSI-KT recover prerequisite graphs aligned with human-annotated structures while keeping competitive accuracy, reducing reliance on expert-crafted priors.

## Limitations

- The survey itself collects no new data — it has no sample, no instrument and no measured learner outcomes; statistics about individual models (for example LP-KAT's 32.3% improvement, or GRKT outperforming eleven baselines) are attributed to the reviewed papers, and the benchmark figures re-run those models on public datasets under the authors' own pipeline.
- Screening was bounded by inclusion criteria requiring an explicit graph-based approach and empirical evaluation; review papers, studies without accessible full text, and work that did not substantially adopt graph structures were excluded, and the search covered five databases over 2018–2025.
- The benchmark reuses original or released configurations where available, but hyperparameters without dataset-specific settings came from a lightweight grid search on validation sets, so standings do not reproduce every original paper's configuration.
- The survey's own limitations section concedes that GbKT is a black-box family next to BKT's interpretable parameters, that the field has almost no fairness research, that performance depends on the quality of expert-defined or co-occurrence-derived graphs, and that hypergraph and dynamic structures raise computational and memory costs.

## Citation

Xu, M., Kujala, J., Metsämuuronen, J., & Laakso, M.-J. (2026). A Survey of Graph-Based Knowledge Tracing from Structural and Propagation Perspectives: Models, Applications, and Future Directions. *Journal of Educational Data Mining*, 18(2), 41-87.
