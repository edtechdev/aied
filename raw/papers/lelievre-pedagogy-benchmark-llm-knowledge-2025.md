---
source_url: https://arxiv.org/abs/2506.18710v3
ingested: 2026-05-07
sha256: 0e45fd42cb7da00a7f142e0bdae3a38a29c35d79e9f728468ba37516c316ba3f
---
# Benchmarking the Pedagogical Knowledge of Large Language Models

**Authors:** Maxime Lelièvre, Amy Waldock, Meng Liu, Natalia Valdés Aspillaga, Alasdair Mackintosh, María José Ogando Portela, Jared Lee, Paul Atherton, Robin A. A. Ince, Oliver G. B. Garrod  
**arXiv:** 2506.18710v3  
**Submitted:** 23 Jun 2025 | Revised:** 1 Jul 2025  
**License:** CC BY 4.0

## Abstract

Benchmarks like Massive Multitask Language Understanding (MMLU) have played a pivotal role in evaluating AI's knowledge and abilities across diverse domains. However, existing benchmarks predominantly focus on content knowledge, leaving a critical gap in assessing models' understanding of pedagogy — the method and practice of teaching. This paper introduces The Pedagogy Benchmark, a novel dataset designed to evaluate large language models on their Cross-Domain Pedagogical Knowledge (CDPK) and Special Education Needs and Disability (SEND) pedagogical knowledge. These benchmarks are built on a carefully curated set of questions sourced from professional development exams for teachers, which cover a range of pedagogical subdomains such as teaching strategies and assessment methods. Here we outline the methodology and development of these benchmarks. We report results for 97 models, with accuracies spanning a range from 28% to 89% on the pedagogical knowledge questions. We consider the relationship between cost and accuracy and chart the progression of the Pareto value frontier over time. We provide online leaderboards which are updated with new models and allow interactive exploration and filtering based on various model properties, such as cost per token and open-vs-closed weights, as well as looking at performance in different subjects. LLMs and generative AI have tremendous potential to influence education and help to address the global learning crisis. Education-focused benchmarks are crucial to measure models' capacities to understand pedagogical concepts, respond appropriately to learners' needs, and support effective teaching practices across diverse contexts. They are needed for informing the responsible and evidence-based deployment of LLMs and LLM-based tools in educational settings, and for guiding both development and policy decisions.

## Key Findings & Methodology

- **Novel Benchmark:** Introduces The Pedagogy Benchmark to fill a gap left by existing benchmarks (e.g., MMLU) that focus primarily on content knowledge rather than teaching methodology.
- **Knowledge Domains Assessed:**
  - Cross-Domain Pedagogical Knowledge (CDPK)
  - Special Education Needs and Disability (SEND) pedagogical knowledge
- **Question Sources:** Curated from professional development exams for teachers.
- **Subdomains Covered:** Teaching strategies, assessment methods, and other pedagogical areas.
- **Scale:** Evaluated 97 models.
- **Performance Range:** Model accuracies range from 28% to 89%.
- **Economic Analysis:** Examines the relationship between cost and accuracy, tracking the Pareto value frontier over time.

## Interactive Resources

- **Live Leaderboards:** https://rebrand.ly/pedagogy
  - Dynamically updated with new models.
  - Supports filtering by cost per token, open-weights vs. closed-weights, performance across different subjects/subdomains.

## Implications

- **Educational Deployment:** Benchmarks are intended to inform responsible, evidence-based deployment of LLMs in educational settings.
- **Policy & Development:** Provides data to guide both model development and policy decisions.
- **Global Impact:** Aims to measure LLM capacity to understand pedagogical concepts and respond to diverse learner needs, supporting efforts to address the global learning crisis.
