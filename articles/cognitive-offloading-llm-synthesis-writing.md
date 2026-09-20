---
title: "Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content"
created: "2026-06-10T12:17:35-04:00"
updated: "2026-09-20T08:08:49-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm]
stakeholders: [student-experience]
research_method: [learning analytics, quantitative]
discipline: [writing education, stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: high
page_kind: [framework]
sources: ['raw/papers/cognitive-offloading-llm-synthesis-writing.md']
---

> **Synthesis:** This study compares two approaches to profiling how learners offload cognitive activity to LLMs during a synthesis writing task, drawing on Salomon's [[distributed-cognition|distributed cognition]] and the Kintsch–van Dijk model of text comprehension. Volume-based profiling (k-means, k=4) differentiated learners primarily by [[prior-knowledge|prior knowledge]], with higher [[llm]] use negatively associated with essay authorship. Content-based profiling (k=5) revealed qualitatively distinct patterns: from vocabulary clarification to active direction of structuring and generation to passive delegation of comprehension at both local and global levels. These patterns correspond to differences in learning strategies, behavioral markers, and essay authorship. The study provides a nuanced framework for understanding not just how much learners rely on LLMs, but what kind of cognitive work they offload — critical for designing [[ai-literacy]] interventions and [[formative-assessment]] that promotes productive AI use without undermining learning. The findings connect to [[self-regulated-learning]] [[research-methods-aied|research]] by showing that offloading patterns reflect different fragmentation of the cognitive process.

## What this means for practice

- **Learners.** Stay involved in the parts of the task that build understanding — structuring the comparison, evaluating what the model produced, and choosing what to keep — rather than pasting text through: the heaviest offloading cluster (n=7, 25.1 prompts on average) authored only 2% of its essay, against 80% for the high-knowledge minimal-offloading cluster.
- **Instructors.** Do not police prompt counts as a proxy for effort: the authors conclude that interventions targeting the volume of LLM use, such as limiting the number of prompts, may be insufficient because the same volume can describe rather different offloading processes.
- **Instructors.** Teach the distinction between asking the model to clarify vocabulary or retrieve a fact and delegating whole-text comprehension, such as "Write me a 300-word synthesis" or "Are all main ideas mentioned?" — the second pattern corresponds to profiles in which learners participate actively in few, if any, of the task's cognitive operations.
- **Designers.** Make the distribution of cognitive work visible to learners and instructors, for example by logging prompts and the essay segments they fed, since profile differences were tied to what was delegated rather than only to how much.
- **Instructors.** Assess the synthesis process, not just the product, because essay authorship alone (2%, 30%, 80%, 81% across the volume-based profiles) does not reveal whether a learner offloaded [[self-regulated-learning|regulation]]-relevant comprehension work.

## Limitations

- Single-site lab study: 97 university students in one-hour small-group sessions using a custom interface, with three students excluded because they completed the task incorrectly.
- Sample and cluster sizes limit statistical power, as the authors state, particularly for detecting differences in self-reported measures such as cognitive load; the smallest volume-based cluster held 7 learners.
- The clusters were not validated against learning outcomes, so the profiles describe how cognitive activity was distributed but cannot show which pattern helps or harms learning.
- The design used one synthesis-writing task with two texts (prompts averaged 5.8, SD 6.7), and the authors note other tasks may require other lenses; prompt coding reached a Cohen's kappa of 0.68 for 168 prompts, with automated annotation averaging 0.64 (passive/global) and 0.61 (local/global).

## Connected Concepts

- [[ai-literacy]]
- [[cognitive-offloading]]
- [[formative-assessment]]
- [[llm]]
- [[self-regulated-learning]]
- [[writing-education]]

## Connected Articles

- [[genai-academic-search-workshop]] — Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)
- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate Computer Science Education in the Generative AI Era

## Citation

Poquet, O., Nanduri, M. S., Salinas Loyer, M. X., Stadler, M., Sailer, M., & Jovanovic, J. (2026). [*Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content*](https://arxiv.org/abs/2606.10434).
