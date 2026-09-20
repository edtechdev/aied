---
title: "Data Annotations as Pedagogical Hints: From Subjective Labels to Critical Thinking"
created: "2026-07-23T04:33:04-04:00"
updated: "2026-09-20T03:44:50-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding, student-engagement]
technology: [generative-ai, rag]
ethics: [bias-mitigation]
audience: [learners, instructors]
research_method: [case study]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/2607.20149.md']
confidence: high
---

> **Synthesis:** [[reinforcement-learning|Machine learning]] courses typically hand students pre-labeled datasets, hiding the subjectivity baked into human annotation and cultivating an overly trusting view of AI data pipelines. This two-university study (Fontys, Netherlands and IT University Copenhagen; N=43) had students annotate skin-lesion images for hair coverage on a 3-point scale, then surveyed their understanding of annotation ambiguity, data quality, bias, and fairness. Self-reported familiarity with these concepts rose substantially across the board, and most students came to recognize that personal interpretation shapes labels — positioning hands-on annotation as a lightweight, transferable exercise for building [[ai-literacy]] and the kind of data skepticism central to [[critical-thinking-genai-scaffolding]].

The [[pedagogy|pedagogical]] claim is that interpretive diversity in labeling is itself a teachable object: rather than treating disagreement as noise to be resolved, instructors can surface it to teach [[bias-mitigation]] and fairness reasoning within [[cs-education]]. This complements knowledge base threads on [[student-experience]] and epistemic vigilance by targeting the data layer — students who have personally wrestled with ambiguous labels are less likely to treat model outputs as ground truth.

## What this means for practice

- **Instructors.** Cap the annotation workload and spend the freed time on interpretation: students named repetitiveness the main drawback and analyzing their own results the most pleasant element, so lowering the minimum requirement from 100 images to 50, with freedom to annotate more, keeps the interpretive work central.
- **Instructors.** Close the loop between labels and model behavior: have students train a simple model on their aggregated annotations and ask where it failed and whether the cause was ambiguous data or annotator disagreement, the pattern ITU students already followed.
- **Instructors.** Confront the consensus illusion directly — students reported agreement although Fleiss' kappa was only moderate — by showing the agreement statistics beside students' perceived agreement and framing disagreement as informative rather than erroneous.
- **Instructors.** Prepare and debrief the medical material: explain why the skin-lesion images matter for melanoma detection, consider converting images to grayscale, and run a brief structured debriefing, since unease with medical imagery was the most frequent concern.
- **Designers.** Standardize annotation tooling across participating sites: Fontys students used Label Studio or custom Jupyter notebooks while ITU students chose freely and often used Excel, and that heterogeneity threatens reproducibility elsewhere.

## Limitations

- Self-reported and retrospective: familiarity with annotation subjectivity, data quality, bias and fairness was rated in a single post-task survey (N = 43), with pre-task levels reconstructed from memory rather than measured at baseline.
- The modest sample size (N = 43) is the authors' first stated limit on generalizability, and only fully completed responses from Fontys University of Applied Sciences Venlo and the IT University of Copenhagen were retained.
- The two institutions ran different pedagogical designs, and those contextual differences plus variations in group composition were never systematically analyzed.
- The consensus finding rests on survey responses alongside only moderate Fleiss' kappa rather than recorded discussions, so the authors call for follow-up work using recorded group discussions to test whether the gap comes from metric confusion, social dynamics or beliefs about ground truth.

## Connected Concepts

- [[ai-literacy]]
- [[bias-mitigation]]
- [[cs-education]]
- [[student-experience]]
- [[critical-thinking]]

## Connected Articles

- [[critical-thinking-genai-scaffolding]]

## Citation

Raumanns, R., Elstner, T., Ferger-Andrews, L., Carlsen, L. M., Potthast, M., & Schouten, G. (2026). [Data Annotations as Pedagogical Hints: From Subjective Labels to Critical Thinking](https://arxiv.org/abs/2607.20149). arXiv preprint (cs.CY).
