---
title: "Artificial Intelligence in Online Learning: Using BERTopic to Track Research Topics and Their Evolutions"
created: "2026-09-29T20:05:00-04:00"
updated: "2026-09-29T20:05:00-04:00"
type: article
published: "2026-08-07"
page_kind: [synthesis]
research_method: [bibliometric]
audience: [researchers, instructors]
confidence: high
sources: ['raw/papers/chen-bertopic-ai-online-learning-research-topics-2026.md']
foundations: [ai-education, interpreting-and-applying-aied-research, theories-and-frameworks]
pedagogy: [online-teaching-and-learning, self-regulated-learning]
technology: [machine-learning, learning-analytics, adaptive-learning, multimodal, generative-ai]
assessment: [automated-assessment]
methods: [quantitative-research]
ethics: [privacy, explainable-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---

> **Synthesis:** Chen and colleagues apply BERTopic — a transformer-based topic model that clusters documents in a contextual embedding space rather than a bag of words — to 1,048 AI in online learning publications indexed in Web of Science SCI/SSCI between 2010 and 2023. Eleven topics emerge, led by [[machine-learning|machine learning]] for online predictive analytics (17.50%), alongside [[online-teaching-and-learning|MOOC]] forum analysis, [[self-regulated-learning|self-regulated learning]], and emotion recognition. Temporal analysis shows a shift from early rule-based, system-centric designs toward machine learning and deep learning, with growing attention to [[multimodal]] and physiological data. The authors synthesize these trajectories into a four-component conceptual model. The evidence is about the research literature, not about learners.

## Key Findings
1. **Eleven topics from 1,048 publications.** A BERTopic model of AIOL research published 2010–2023 in Web of Science SCI/SSCI journals yielded 11 topics, the largest being [[machine-learning|machine learning]] for online predictive analytics at 17.50% of the corpus.
2. **Two topics decline significantly.** [[adaptive-learning|Intelligent adaptive online learning systems]] (12.77%) and optimization algorithm-based [[personalized-learning|personalized online learning]] (6.37%) are the only topics whose trends decrease significantly (p = 1.954e-05 and p = 0.0004589).
3. **Five topics grow significantly.** Machine learning for predictive analytics, MOOC forum and review analysis, [[self-regulated-learning|self-regulated learning]], online learning in COVID-19, and EEG-based online [[learning-analytics|learning analytics]] all rise significantly (p < 0.05 or smaller).
4. **Early machine learning expands into specialized subtopics.** A Sankey comparison of topic vectors shows the 2010–2016 topic machine learning for online education flowing into data-driven decision systems, predictive analytics, MOOC dropout prediction, clustering and data mining, and deep learning analytics.
5. **Multimodal and physiological data mark the emerging edge.** Emotion recognition with deep learning and EEG-based learning analytics point to affective and physiological signals, extending AIOL beyond clickstream and quiz-score modeling toward [[affective-computing|emotion-aware]] adaptation.
6. **A conceptual model, not a tested one.** The authors propose four components — data, AI processing, adaptive learning, learner development — and insert [[explainable-ai]] as a cross-cutting design principle that never emerged as an independent empirical topic.

## Mapping the AIOL research landscape

The corpus came from a Web of Science search of SCI and SSCI: 4,195 journal articles were retrieved, and after duplicates, non-English papers, and non-empirical work were removed, 1,048 studies published 2010–2023 remained. Titles, keywords, and abstracts were consolidated into one document per paper. The pipeline used sentence-transformers with the all-MiniLM-L6-v2 model, which maps text into a 384-dimensional vector space; UMAP reduced that space, HDBSCAN clustered it, and c-TF-IDF ranked the top 20 terms per cluster. Two domain experts compared models with different topic counts on term coherence, article fit, and overlap, settling on 11 topics. Articles labeled -1 as HDBSCAN noise were dropped, so topic counts do not sum to 1,048.

## From traditional AI to machine learning and deep learning

Volume rose continuously, particularly after 2017, and six of the eleven topics peaked in 2022. The authors divide the period into a stable development stage (2010–2016) — intelligent online learning systems, machine learning for online education, and [[personalized-learning|personalized online learning]] — and a rapid development stage (2017 onward) carrying nineteen topics including [[recommender-systems-and-learning-paths|recommender systems]], MOOC dropout prediction, and IoT-enhanced [[edtech-platform|platforms]]. Read against the topic trends, this marks a shift from rule-based or expert systems, transparent but unable to adapt, toward data-driven [[machine-learning|machine learning]] for [[student-modeling|modeling]] learner behavior. The decline of intelligent adaptive systems and optimization-based personalization runs the other way, which the authors read as a turn from system-centric design toward learner-centered support.

## Multimodal data, emotion, and learner-centered adaptation

The fastest-moving edge of the field is affective and physiological. Emotion recognition with deep learning and EEG-based learning analytics are both rising significantly, and the authors describe a move from behavioral traces such as clickstreams and quiz scores toward [[multimodal|multimodal learning analytics]] that fold cognitive and affective signals into real-time adaptation. Their conceptual model follows that evidence: a data layer spanning behavioral, interactional, multimodal, and physiological sources; an AI layer combining predictive [[machine-learning|machine learning]] with deep learning and [[affective-computing]]; an adaptive layer delivering [[feedback]] aligned with emotional state and performance; and learner development as the outcome. [[explainable-ai|Explainability]] is added as a cross-cutting principle rather than an observed theme, because the corpus leans heavily on AI-driven prediction.

## Reading the evidence: literature trends, not learner outcomes

The unit of analysis is the publication, not the learner. Topics are emergent clusters in abstracts, formed by embedding proximity rather than keyword overlap, and each document was assigned a single dominant topic — which the authors note oversimplifies a literature that often spans several. A topic's proportion therefore measures how much the field writes about something, not whether the approach works: the paper states it did not assess the effectiveness of these approaches. Trend tests describe publication activity across 2010–2023, so a rising line means growing research attention.

## What this means for practice

- **Researchers.** Read topic proportion as research attention, not as evidence of effectiveness: the study maps what the field studies and states explicitly that it did not assess whether these approaches improve learning.
- **Researchers.** Take the missing cluster seriously — socially oriented work on AI-supported [[collaborative-learning|collaborative learning]] and community development did not emerge as a dominant topic, which the authors attribute to the corpus's focus on individual-level analytics.
- **Instructors.** Exploit emotion detection and sentiment analysis for affective support and timely intervention, since emotion recognition and [[multimodal]] data are the trajectories the analysis shows growing.
- **Instructors.** Strengthen [[self-regulated-learning]] by embedding AI-based prompts, reflective tools, and intelligent coaching into [[learning-design|course design]], the significant long-term growth area the trend analysis identifies.
- **Institutions.** Set explicit norms for [[privacy]] protection and [[bias-mitigation|algorithmic fairness]] and tell learners how their data is collected and used, because the growth areas are multimodal and physiological signals.

## Limitations

- Coverage is one index family: SCI/SSCI journal articles on Web of Science, with conference proceedings, book chapters, and non-English publications excluded by design — 4,195 retrieved articles screened down to 1,048.
- Survey- and interview-only studies were excluded to keep the corpus process-centered, so [[self-report-measures|self-report]] research on perceptions and attitudes is absent; the authors say this may explain the underrepresentation of social [[constructivist]] and community-oriented work.
- The window closes at 2023; the authors excluded more recent publications because their bibliographic and citation records were still updating and would have destabilized the longitudinal comparison, so the evolution claims are scoped to 2010–2023.
- The topic structure comes from one unsupervised configuration — all-MiniLM-L6-v2 embeddings with UMAP and HDBSCAN, judged by two domain experts — and the authors note such results are sensitive to hyperparameters such as min_cluster_size and to domain terminology.

## Citation

Chen, X., Xie, H., Peng, X., Tao, X., Li, L., Qin, S. J., & Wang, F. L. (2026). [*Artificial Intelligence in Online Learning: Using BERTopic to Track Research Topics and Their Evolutions*](https://doi.org/10.19173/irrodl.v27i3.9516). *International Review of Research in Open and Distributed Learning*, 27(3), 67-94.