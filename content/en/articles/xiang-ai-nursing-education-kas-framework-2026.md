---
title: "An artificial intelligence application framework for nursing education: a scoping review based on the KAS model"
created: "2026-10-31T14:40:00-04:00"
updated: "2026-11-02T06:45:00-05:00"
type: article
published: "2026"
source_url: https://doi.org/10.1186/s12909-026-09209-4
sources: ['raw/papers/xiang-ai-nursing-education-kas-framework-2026.md']
confidence: high
page_kind: [framework]
research_method: [literature review]
discipline: [nursing education, medical education]
level: [higher ed]
audience: [instructors, curriculum designers, medical educators, researchers, administrators]
foundations: [learner-identity]
pedagogy: [professional-training]
technology: [generative-ai, simulation]
assessment: [assessment]
ethics: [equity-in-ai-education]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** A [[meta-analysis-systematic-review|scoping review]] of educational AI application frameworks concludes that none of them was built for [[nursing-education|nursing]], so it assembles one: the Knowledge, Attitude, and Skill model expanded into 12 sub-dimensions a [[curriculum-design|curriculum]] can be planned against. The coverage counts are the finding. [[ethics|AI ethics]] knowledge appears in 14 of the 23 included sources, responsibility in 14, application skills in 16 and evaluation skills in 18, while technical AI knowledge, AI application knowledge and operational skills each appear in 9 and collaborative skills in 7. The authors treat that asymmetry as an [[equity-in-ai-education|equity]] problem and prescribe a sequencing rule for programs without reliable infrastructure: build foundational and ethical knowledge, [[critical-thinking|critical thinking]], responsibility, ethical values, evaluation and collaboration first, and treat prompt-level operational skill as the layer to teach last, through low-cost [[simulation]] rather than through access to frontier tools.

## Key Findings

1. The search across PubMed, Embase, Web of Science and CNKI returned 1,750 records; 322 duplicates were removed, 6 of the included studies had been retracted, 1,197 records were excluded on title and abstract, and 225 full texts were assessed to yield 23 studies.
2. The included work spans 2022 to 2026 and 15 countries, with 14 of the 23 studies (60.9%) published in 2025, and the United States (5, 21.7%) and China (3, 13.0%) accounting for the largest shares.
3. Most of the evidence is itself secondary: 15 of the 23 studies are reviews, against 4 [[qualitative-research|qualitative]] and 4 [[quantitative-research|quantitative]] studies, so the proposed framework is built largely on syntheses of syntheses.
4. Learners were the target population in 12 studies (52.2%), educators in 5 (21.7%) and both in 6 (26.1%), while [[medical-education|medical education]] was the dominant application domain with 11 studies (47.8%) ahead of general education with 9 (39.1%). Nursing contributed 6 of those 11 medical-education studies.
5. The KAS model yields three dimensions and 12 sub-dimensions: foundational, technical, ethics and application knowledge; critical thinking, responsibility, ethical values, and openness and adaptability; and operational, application, collaborative and evaluation skills.
6. Attention is concentrated in foundational AI knowledge, AI ethics knowledge (14 studies), responsibility (14), application skills (16) and evaluation skills (18), while technical AI knowledge, AI application knowledge and operational skills were each addressed in only 9 studies and collaborative skills in 7.
7. Existing nursing frameworks were reviewed and found wanting: the N.U.R.S.E.S. framework, the AI-ABCs framework and the CARE [[prompt-engineering]] framework either lack a clear [[pedagogy|pedagogical]] pathway or cover isolated skills, which is the gap the 12-dimension version is meant to close.

## The asymmetry is the finding

A curriculum map is only useful if it shows where the field is thin, and here the thin places are the ones patient safety depends on. Technical AI knowledge, AI application knowledge and operational skills were each explicitly addressed in 9 of the 23 sources, and collaborative skills in 7. The authors give three explanations. Those dimensions involve a degree of technical professionalism that is genuinely hard for students and educators to master; regional disparities in AI infrastructure make them less accessible in low-resource settings; and most existing frameworks chose to prioritize foundational, ethical and evaluative dimensions over technical ones. The third explanation is the uncomfortable one, because it means the field's consensus may reflect what is easy to write about rather than what a nurse needs at the bedside. The authors accept the tension rather than resolving it: they keep the technical layer in the framework, cite the position that digital skills training for healthcare workers must include concrete operational competencies for safe and effective use, and then route that layer through [[simulation]], high-fidelity clinical or [[virtual-and-augmented-reality|virtual reality]] where it is available and screen-based simulation with pre-recorded cases, open-access model demonstration tools and guided work with public datasets where it is not. Collaboration receives the same treatment. Only 7 studies supported collaborative skills, a pattern the authors attribute to frameworks preferring discrete tasks with clear outputs, yet they argue that the nurse-AI-healthcare-team model makes collaboration a required competency rather than a nicety.

## What the two coefficients are doing in a scoping review

Two empirical results carry more weight than their position in the review might suggest, and both are findings of included studies rather than of this one. A study of technological ethical knowledge established it as a strong predictor of AI integration, with a standardized coefficient of 0.636 and a significance level below 0.001, which turns ethics knowledge from a compliance topic into the variable that best predicts whether a [[teacher-role|teacher]] integrates AI at all. A second study using structural equation modeling found that a positive perceptual future orientation enhanced students' ethical values, with a coefficient of 0.308 below the 0.05 significance level, which links how students imagine their professional future to how seriously they hold ethical commitments. A third, quasi-experimental, gave the evaluation dimension its clinical anchor: an AI system evaluated therapeutic communication skills with an intraclass correlation above 0.97, and a related implementation used [[rag|retrieval-augmented generation]] to flag cognitive biases while explicitly reserving the final decision for the teacher's professional judgment. That reservation is the framework's practical hinge. Evaluation skill is the most widely supported sub-dimension in the review at 18 studies, and it is also the one that keeps the nurse, rather than the model, as the [[human-in-the-loop-ai|final authority]] in AI-assisted care.

## Which layer to teach first

The recommendation that follows from the counts is a sequencing rule, and it is written for the under-resourced program rather than the well-equipped one. Within knowledge, emphasize foundational and ethics knowledge rather than technical knowledge, so students grasp AI's implications without requiring sophisticated equipment. Within attitudes, foster critical thinking, responsibility and ethical values rather than openness and adaptability. Within skills, move attention toward evaluation and collaboration rather than complex operational skill, and teach application skills flexibly according to technological access. Offline substitutes are named: case-based discussion, conceptual demonstration of AI workflows, and locally adapted or simplified models supporting local languages. The motive is stated plainly. If the framework's sequencing follows the distribution of infrastructure, then the regional concentration of the underlying research, with the United States and China together producing more than a third of the included studies, becomes a curriculum problem rather than only a bibliometric one, and the review positions its framework as a way to avoid marginalizing low-resource regions during the transition. It is a defensible position, and it is also the framework's most testable claim, since no study in the review reports what happens to nursing competence when a program adopts this sequence rather than another.

## What this means for practice

- Map each course to the 12 sub-dimensions before choosing tools. The count of what the literature discusses is not a count of what works, but a curriculum that cannot name which sub-dimension a module targets has no way to notice that its ethics content is doing the work while its operational skills content is absent.
- Treat evaluation skill as the clinical core, not an advanced topic. It is the most strongly supported sub-dimension at 18 studies, it has the clearest reliability evidence in nursing at an intraclass correlation above 0.97 for scoring therapeutic communication, and it is the competency that preserves the nurse's final judgment.
- Sequence for the infrastructure the program actually has. Foundational and ethics knowledge, critical thinking, responsibility and evaluation can be taught through case discussion and workflow demonstration; operational skills need simulation, and a program that cannot fund high-fidelity or virtual reality simulation should say so and use screen-based cases rather than dropping the dimension.
- Do not treat the named nursing frameworks as curricula. N.U.R.S.E.S., AI-ABCs and CARE each cover a slice and none supplies assessment methods or a pedagogical pathway, which is why adopting one whole leaves a program unable to say what it teaches or how it checks.

## Limitations

- The search was confined to Chinese and English databases, so work published in other languages is missing from the map and from the counts that drive the sequencing rule.
- Fifteen of the 23 included sources are reviews, so the framework inherits the blind spots of secondary literature and cannot claim more than its inputs support.
- The field is moving quickly, the search was updated only to March 2026, and the authors expect the framework to need ongoing revision as new applications and ethical questions appear.
- The framework is proposed rather than validated. The authors' own first recommendation for future work is empirical testing of whether it improves nursing students' AI application skills across clinical contexts.
- The sub-dimension counts measure how often a dimension is discussed, not whether teaching it helps, so a widely discussed competency and an effective one are being reported with the same number.

## Citation

Xiang, Y., Shi, H., Ren, K., Yang, X., Li, L., Zhao, Q., & Huang, H. (2026). [*An artificial intelligence application framework for nursing education: a scoping review based on the KAS model*](https://doi.org/10.1186/s12909-026-09209-4). *BMC Medical Education, 26*, 791.
