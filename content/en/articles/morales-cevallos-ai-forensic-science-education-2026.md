---
title: "Artificial intelligence applications in forensic science and their implications for education and training"
created: "2026-11-04T15:12:40-05:00"
updated: "2026-11-04T16:51:25-05:00"
type: article
sources: ['raw/papers/morales-cevallos-ai-forensic-science-education-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
discipline: [medical education, science education, vocational education]
level: [higher ed, graduate]
audience: [curriculum designers, instructors, researchers, policymakers]
technology: [machine-learning, generative-ai, simulation]
assessment: [assessment]
pedagogy: [professional-training, experiential-learning]
ethics: [ethics, explainable-ai]
foundations: [curriculum-design]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A PRISMA [[meta-analysis-systematic-review|systematic review]] searched 560 records from Scopus, PubMed and IEEE Xplore for work published between 2020 and 2025 on AI in forensic science. Of the 21 empirical studies it retained, three carried direct educational or training evidence and 18 were technical studies of AI performance. No study tested an AI teaching intervention with forensic students or measured learning in a forensic curriculum. The review's curriculum argument — a six-pillar competency framework — is the authors' inference from technical applications, and they say so explicitly.

## Key Findings

1. The search, run on 16 July 2026, returned 560 records: 426 from Scopus, 1 from PubMed and 133 from IEEE Xplore, covering publications from 2020 to 2025.
2. Screening removed 171 records at identification and 361 more at title and abstract review, leaving 28 for full-text assessment; seven review articles were then excluded for carrying no original data, leaving 21 empirical studies.
3. Three of those 21 met at least one educational criterion and were labeled direct educational evidence. The other 18 evaluated technical performance and were analyzed separately, expressly not as evidence that AI improves learning.
4. The three educational studies involved 596 Korean school students in an AI and [[creativity]] program, 10 retired forensic experts rating AI crime-scene reports, and 53 digital-forensics professionals surveyed in the MENA region. None involved forensic students or a forensic curriculum.
5. Across the technical corpus, 52.4% of applications were coded at the applied stage, 42.9% at development and 4.7% at the initial stage. Performance was the primary variable in 85.7% of studies and skill development in 14.3%.
6. The proposed framework has six pillars: computational foundations, interdisciplinary collaboration, [[experiential-learning|experiential learning]], statistical reasoning and [[statistics-and-data-science-education|data literacy]], embedded [[ethics]], and [[educational-development|faculty development]], with [[human-in-the-loop-ai|human oversight]] as a cross-cutting principle.

## What the review counted, and what it deliberately did not

The design is unusually candid about its own limits. Studies were split into two streams before synthesis. Direct educational evidence required an identifiable educational or training context, an AI-supported teaching or learning intervention, or a measured educational outcome. Everything else was held back as contextual technical evidence, used only to infer which competencies future practitioners might need. The authors repeat that boundary in the methods, the results, the discussion and the limitations, which is more discipline than most reviews of this kind show.

That split is also why the headline number matters. Twenty-one studies sounds like a corpus. Three studies is an evidence base, and the review says as much: direct empirical support for AI-enhanced forensic education "remains limited," and the scarcity is described as an important evidence gap rather than a finding to be worked around.

The imbalance is the paper's real result. Technical work on segmentation, age estimation, diatom detection, malware classification and generated-image attribution is advancing quickly and is often validated on real case material. Work on how any of it should be taught is close to absent. The authors read that gap as a curriculum problem: the field is producing tools faster than it is producing practitioners who can interrogate them.

## Three educational studies, none of them in a forensic classroom

The label "direct educational evidence" is doing less work than it appears to. The inclusion rule accepts any one of three conditions — a training context, an intervention, or a measured outcome — so a study of professionals rating tool outputs can qualify without ever measuring learning.

Farber (2025) asked 10 retired forensic experts with at least five years of crime-scene experience to judge AI-generated reports on 30 images. The models reached an overall reliability rating of 7.4 out of 10 and produced an analysis in under two minutes against 42.5 minutes for human review on average. That is a workflow study with expert raters, not a test of what novices learn.

Natsheh (2025) surveyed 53 digital-forensics professionals across the MENA region and reported faster evidence review, better attribution and roughly one-third lower breach-response costs, alongside substantial skills and governance gaps. The training need is inferred from practitioners describing their work, not from a training program.

Only Hwang et al. (2022) worked with students: 596 elementary, middle and [[k-12|high school]] students across 23 Korean schools in a creativity-oriented program that touched coding, AI humanities and digital-forensic concepts. Satisfaction averaged 4.18 on a five-point scale (SD 0.48) and creativity scores 4.05 (SD 0.38), with no control group and no pretest. It is a K-12 enrichment program, not [[professional-training|professional training]] in forensic science.

Read together, the three studies support a claim about [[career-development-and-readiness|workforce readiness]] and almost nothing about [[higher-ed|university]] teaching. There is no comparison of AI-supported and conventional instruction, no pre/post measurement of forensic reasoning, and no follow-up on whether any skill persisted.

## The six pillars are an inference, and the paper is honest about it

Section 2.7 is the most important paragraph for anyone citing this work. The framework was not prespecified, was not developed through a formal framework-development or validation procedure, and was generated by a narrative, competency-oriented reading of recurring themes. The authors state that it should be read as a proposed conceptual synthesis rather than an empirically validated educational model.

What the technical studies can legitimately supply is a list of failure modes that graduates should recognize. Qin et al. (2024) trained a model on living-person CT and saw performance drop on cadaver scans — textbook domain shift. Farber's models produced incomplete or unreliable interpretations that varied by scene type. Sessa et al. (2025) found strong recognition of intact skin but weak exit-wound classification. Each pillar can be traced to observations like these rather than to a learning study, and that is the correct direction of inference: the technology shows what can go wrong, so the curriculum should teach students to notice it.

The [[pedagogy|pedagogical]] proposals themselves are conventional and defensible. Teach model provenance and validation, not just tool operation. Put [[simulation|simulated]] casework and comparative human–AI assessment into laboratory courses. Teach confidence intervals, sensitivity and false discovery rates alongside forensic measurement. Embed [[ai-literacy|algorithmic literacy]] and bias review in subject courses rather than in a standalone ethics module. Require [[explainable-ai|explainability]] as a courtroom skill, since an expert who cannot describe how a system reached a conclusion cannot defend it under cross-examination.

None of that is tested here. It is a well-argued syllabus written from the failure modes of 18 technical papers, and the review's own conclusion asks for exactly the evaluation it could not find.

## What this means for practice

- **Curriculum designers.** Treat the six pillars as a hypothesis list with named outcome measures, not as an adoptable standard. The paper supplies no evidence that any pillar improves learning, and its own authors say the framework needs [[assessment-validity|content-validity]] and feasibility testing.
- **Forensic program leads.** The teachable content is concrete even where the pedagogy is not. Domain shift, class imbalance, [[hallucination-risk|hallucination]] and [[automation-bias|automation bias]] are documented in the included studies, so case-based exercises can be built from real reported failures without waiting for an [[rct|RCT]].
- **Faculty developers.** The review's faculty-development pillar rests on the observation that many forensic educators were trained before AI entered practice. That is a plausible need, but the review found no study of faculty development, so any program should measure its own effect.
- **Researchers.** Three studies, no learner sample in a forensic program, and no validated instrument. The obvious next study is a controlled comparison of AI-supported and conventional forensic instruction with pre/post reasoning measures.
- **Policymakers and administrators.** Do not cite this review as evidence that AI improves forensic education. Cite it as evidence that the field has not yet asked the question, which is a different and more useful claim.

## Limitations

- Only three of 21 included studies carried direct educational evidence, and the evidence was too heterogeneous in design, population and outcome measure for quantitative synthesis; the review is a mapping exercise, not an effect estimate.
- The PubMed search returned a single record, which the authors attribute to the restrictive intersection of forensic, AI and education terms; the disciplinary map therefore reflects Scopus coverage and may under-represent [[medical-education]] literature.
- Two of the three educational studies used professionals rating or reporting on tools rather than learners in a course, and the third was a K-12 program outside forensic science, so the education stream is thinner than its label suggests.
- The six-pillar framework was not prespecified and underwent no formal development or validation procedure; no content-validity, feasibility or implementation study of the framework is reported.
- The stage and outcome distributions (52.4%, 42.9%, 4.7%; 85.7% performance, 14.3% skill development) rest on the authors' own coding, and the review reports no inter-rater reliability for those judgments.
- The review is a synthesis of published abstracts and full texts only; no program documents, accreditation standards or graduate outcome data were examined, so curriculum claims rest entirely on the research literature.

## Citation

Morales-Cevallos, M. B., Ma Lam, C. B., Dickens Guerrero, K. D., & Vique Lopez, D. F. (2026). [Artificial intelligence applications in forensic science and their implications for education and training](https://doi.org/10.3389/feduc.2026.1956809). *Frontiers in Education, 11*, 1956809.
