---
title: "A Case Study of Integrating AI Literacy Education in a Biology Class"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [ai-literacy, curriculum-design, learning-design]
pedagogy: [active-learning, transfer-of-learning]
technology: [machine-learning]
audience: [learners, instructors]
research_method: [case study, mixed methods]
discipline: [biology education, stem education]
level: [k 12]
page_kind: [evaluation]
sources: ['raw/papers/zha-ai-literacy-biology-case-study.md']
confidence: medium
methods: [ai-ed-evaluation]
---

> **Synthesis:** **Integrating [[ai-literacy|AI literacy]] into an advanced [[biology-education|biology]] course** — Zha et al. (2025). A concurrent-triangulation case study in which 37 high-school students learned [[reinforcement-learning|machine learning]], artificial neural network, and convolutional neural network concepts embedded in four biology lessons. Students' overall AI knowledge improved significantly; overall biology knowledge rose slightly but not significantly. Biology knowledge significantly predicted AI learning overall and in the two lessons where AI concepts were concretized in familiar biology.

## Key Findings

This study addresses a persistent gap in [[k-12]] [[ai-education|AI education]]: whereas most US AI literacy instruction has been delivered through extracurricular activities, this work integrates AI learning directly into a standard academic course — a high-school honors biology class. The authors argue that integrating AI into a disciplinary context both broadens access and tests whether contextual subject knowledge supports AI learning, an under-examined question in the field.

**Design.** The [[research-methods-aied|researchers]] used a concurrent triangulation (mixed-method) design. Quantitatively, they measured conceptual understanding via pre/post-tests and fill-in-blank worksheet questions; qualitatively, they analyzed students' interdisciplinary reasoning in open-ended worksheet answers using an adapted version of Shen et al.'s (2015) interdisciplinary reasoning and communication framework, with strong inter-rater agreement (κ=0.88).

**Four biology-embedded AI lessons.** Students learned machine learning, artificial neural networks, and convolutional neural networks across lessons on cell classification with Teachable Machine, comparing human neurons with ANN structure, CNN in plant science, and AI in colorectal cancer detection. The [[learning-design]] deliberately selected biologically inspired AI topics so students could see the connection between the two domains.

**Outcomes.** Paired t-tests showed significant growth in overall AI knowledge (M 2.81 → 4.12, p<0.001), while overall biology knowledge increased only slightly and non-significantly (p=0.21). A regression (R²=0.64, p<0.01) found that both biology knowledge and prior AI knowledge significantly predicted post-test AI scores.

**The role of context.** Per-lesson regressions revealed that prior biology knowledge significantly predicted new AI learning in Lesson 1 (R²=0.24) and Lesson 2 (R²=0.52), but not in Lessons 3 and 4, where AI concepts were presented through abstract academic articles. The authors interpret this through semantic wave theory: hands-on or familiar contexts yielded high semantic gravity and concretized AI, whereas article-based lessons had lower gravity and higher semantic density, hindering learning.

**Interdisciplinary reasoning.** [[qualitative-research|Qualitative]] analysis found that students who transferred source-domain knowledge generally produced better explanations in the target domain, while non-transfer was associated with vague or inaccurate explanations. The authors suggest a potential causal relationship between transfer and explanation that warrants further [[quantitative-research|quantitative]] testing.

## What this means for practice

- **Instructors.** Activate students' prior subject knowledge immediately before introducing AI concepts: prior biology knowledge significantly predicted new AI learning in the two lessons that concretized AI in familiar biology (Lesson 1 R² = 0.24, Lesson 2 R² = 0.52) but not in the two article-based lessons (p = 0.94 and p = 0.30).
- **Instructors.** Teach AI through hands-on disciplinary tasks students already control — Teachable Machine cell classification, comparing human neurons with ANN structure — rather than opening with abstract academic articles.
- **Designers.** Convert research articles into age-appropriate, accessible formats (possibly with [[generative-ai|generative AI]] assistance) so article-based lessons do not run at low semantic gravity and high semantic density.
- **Instructors.** Embed AI literacy inside the assessed discipline course rather than as an extracurricular, since the integrated design reached students who would otherwise have no AI exposure.
- **Administrators.** Keep lessons modular so they fit state-mandated standards and existing buffer time, which is what makes integration scalable across a department.

## Limitations

- 37 students in one honors biology class at a single public high school in the southern US, with only 29 submitting both pre- and post-assessments; the authors withhold the data publicly because of the small sample and student privacy.
- There is no control group — every student received the four AI lessons — and the quantitative results were inconclusive in Lessons 3 and 4, so the context effect rests on interpretation through semantic wave theory.
- Biology knowledge gains were not statistically significant (p = 0.21), and the transfer–explanation link came from qualitative analysis of 76 worksheet answers (κ = 0.88) that the authors say needs further quantitative testing.
- A single instructor with over ten years of biology teaching experience and six weeks of summer AI training delivered all four lessons, so instructor effects cannot be separated from the design.

## Connected Concepts

- [[ai-literacy]]
- [[k-12]]
- [[biology-education]]
- [[stem-education]]
- [[curriculum-design]]
- [[learning-design]]
- [[transfer-of-learning]]
- [[active-learning]]
- [[ai-ed-evaluation]]

## Citation

Zha, S., Maulucci Bragdon, M., Gong, N., Wang, J., Leavesley, S., Eaton, R., & Bosarge, E. (2025). [*A case study of integrating AI literacy education in a biology class*](https://doi.org/10.1007/s40593-025-00476-8). *International Journal of Artificial Intelligence in Education*, 35, 2453–2477.
