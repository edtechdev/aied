---
title: "A Hybrid Collaborative Filtering and Knowledge Graph-Based Cross-Domain Recommendation Method for Multimodal Teaching Resources"
created: "2026-09-16T10:56:19-04:00"
updated: "2026-09-16T14:32:03-04:00"
type: article
tags: [knowledge-graph, multimodal, personalized-learning, adaptive-learning, learning-analytics, ai-education]
foundations: [ai-education]
technology: [adaptive-learning, knowledge-graph, learning-analytics, multimodal, personalized-learning]
audience: [software developers, researchers]
research_method: [benchmark]
sources: ['raw/papers/10.1016_j.caeai.2026.100678.md']
confidence: high
discipline: [language learning]
---

> **Synthesis:** Liu, Sun, and Song (2026) propose a hybrid recommender that couples a pedagogically structured [[knowledge-graph]] with behavior-aware collaborative filtering to personalize [[multimodal]] [[language-learning|English]] teaching-resource recommendation. Resources, concepts, and learner attributes are organized into four instructional dimensions — teaching context, cognitive level, technological feature, and cultural adaptability — whose user-dependent similarities are fused with a feature-based collaborative-filtering prediction through an ability- and progress-aware coefficient. On the English subset of the MARS dataset the model outperforms eight baselines (including the knowledge-graph-aware RippleNet and KGAT) on NDCG, hit rate, coverage, and cross-domain accuracy, and proves robust to partial modality removal.

## Key Findings

- **Four instructional dimensions structure the knowledge graph.** Each resource entity is decomposed into teaching context, cognitive level, technological feature, and cultural adaptability; user-dependent attention weights over these dimensions let the model selectively emphasize or suppress each according to a learner's stated instructional requirements and behavior.
- **Ability- and progress-aware fusion balances semantic and behavioral signals.** An adaptive fusion coefficient λu rises with a learner's learning-ability index (LAE), progress-tracking index (LPT), and interest-preference index (IPI); higher-ability learners lean on personal behavioral patterns, while lower-ability or less-advanced learners get more structured guidance from the knowledge graph.
- **Behavioral indices go beyond raw clicks.** The interaction matrix aggregates click rate, view duration, and completion rate into an interest-preference index, and augments the learner feature vector with [[assessment|assessment-derived]] ability and progress proxies, reducing reliance on pure click frequency.
- **Superior offline ranking and coverage.** On the MARS English subset (4,800 users, 14,200 resources, 132,000 interactions; matrix sparsity 0.9981), CF–KG reaches NDCG 0.625 and HR 0.751, roughly a 7–8% NDCG gain over the best neural baseline, with coverage 0.736 and cross-domain accuracy 0.741 — the highest of all methods including RippleNet and KGAT.
- **Modality robustness.** Across text, video, and interactive resources the model holds NDCG 0.596–0.624 and HR 0.738–0.756; removing any single modality degrades NDCG by only 3.4–5.1%, and CF–KG under modality loss still beats the strongest full baselines.
- **Both components matter.** Component ablation (CF-only NDCG 0.584; KG-only 0.604) shows the two signals are complementary — removing the knowledge graph costs more (6.56% NDCG), but semantic relevance alone cannot capture individual behavioral preference.

## Study Design & Method

The authors construct a knowledge graph whose entities are teaching resources, language concepts, skills, learner groups, and [[pedagogy|pedagogical]] attributes, with relation types grouped into content/domain, skill/goal, and pedagogical-alignment categories. Text resources are processed with TF–IDF to surface candidate topics, skills, and key concepts; each resource entity is then decomposed into four instructional-dimension vectors, and dimension-specific cosine similarities between resources are computed. On the behavioral side, an interaction matrix is enriched with the interest-preference, ability, and progress indices, and learner–learner similarity drives a feature-based collaborative-filtering prediction. A recommendation cycle starts from explicit instructional requirements (domain, skill, modality, cognitive level, cultural adaptation), performs k-hop semantic expansion over the knowledge graph to build a candidate set, refines candidates with collaborative filtering, and ranks them by the λu-weighted fusion of semantic and behavioral scores. Feedback updates the indices, fusion coefficient, and graph representations continuously.

## Implications for AI in Education

For [[personalized-learning]] and [[adaptive-learning]] systems, the paper demonstrates a concrete architecture for encoding pedagogical semantics — cognitive difficulty, teaching context, and cultural adaptability — directly into the recommendation signal rather than treating resources as consumption items. This matters for [[learning-analytics]]-driven resource navigation and for cross-domain generalization (bridging subject and modality boundaries), and it addresses the cold-start and data-sparsity problems that pure collaborative-filtering recommenders face. The ability- and progress-aware fusion is an explicit design for [[student-modeling|learner modeling]]: the system leans on behavior only when a learner's ability, progress, and interest evidence support it.

## Limitations

- **Offline evaluation only.** All results are on historical interaction logs with ranking metrics (NDCG, HR, coverage, CDA); the authors state explicitly that reported improvements reflect recommendation quality, not [[learning-gains|learning effectiveness]], and call for [[teacher-role|teacher]] assessments, learner studies, and outcome-based experiments as future work.
- **English-subset scope.** Evaluation uses the English subset of MARS, so generalization to other languages, domains, or datasets is untested.
- **Model-learned vs. empirically fixed weights.** IPI aggregation weights and fusion parameters are tuned on a validation split and held fixed; no sensitivity analysis is reported for them.
- **No online/cold-start deployment test.** Robustness is tested by removing modalities, not by evaluating truly cold-start users or live personalization.

## Connected Concepts

- [[knowledge-graph]]
- [[multimodal]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[curriculum-design]]
- [[intelligent-tutoring]]
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[fair-explainable-edu-recommendations]] — A related CAEAI hybrid (Graph-GRU) recommender for course materials, sharing the CF-plus-structured-semantics design
- [[multimodal-knowledge-graph-educational-reasoning]] — Knowledge graphs extended across content modalities
- [[xai-teachers-trust-edtech-recommendations-2026]] — How teachers trust and accept AI [[edtech-platform|EdTech]] recommendation tools
- [[ai-decision-support-online-learning-assessment-2026]] — AI decision support in online-learning resource navigation
- [[pattern-kc-programming-recommendation]] — Knowledge-component-based recommendation in programming education

## Citation

Liu, B., Sun, X., & Song, J. (2026). [A Hybrid Collaborative Filtering and Knowledge Graph-Based Cross-Domain Recommendation Method for Multimodal Teaching Resources](https://doi.org/10.1016/j.caeai.2026.100678). *Computers and Education: Artificial Intelligence*.
