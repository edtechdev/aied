---
title: "Curriculum as Code: An AI-Assisted Architecture for Instructional Design in STEM Education"
created: "2026-08-10T09:10:02-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
foundations: [ai-education, curriculum-design, learning-design]
pedagogy: [project-based-learning]
technology: [generative-ai]
research_method: [system development]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2608.07364.md']
confidence: high
audience: [instructional designers, instructors, faculty developers]
---

> **Synthesis:** This paper presents a six-phase AI-assisted instructional design architecture based on the Curriculum as Code paradigm, integrating Generative AI with LaTeX and Python to automate the creation of reproducible, visually consistent, and technically precise materials for [[stem-education|STEM education]]. Validated over one year across 8 modules and 28 project contexts in a Project-Based Learning environment, the architecture significantly reduced instructor workload. Materials achieved high quality ratings from 8.5 to 9.9/10 based on over 600 voluntary student evaluations, suggesting viability for broad STEM educational applications.

## Key Findings

1. Presents a six-phase AI-assisted [[learning-design]] architecture grounded in the Curriculum as Code paradigm, integrating [[generative-ai]] with LaTeX and Python to automate production of reproducible, visually consistent, and technically precise STEM instructional materials.
2. Validated over one year across 8 modules and 28 project contexts in a demanding [[project-based-learning]] environment, the pipeline was associated with roughly a 75% reduction in instructor preparation time (from ~8 to ~2 hours per instruction) while preserving the instructor's teaching signature.
3. Aggressive context pruning and section-by-section generation effectively eliminated mathematical and conceptual [[hallucination-risk|hallucinations]] — none were identified during [[human-in-the-loop-ai|human-in-the-loop]] review across the 28 project contexts — yielding high technical reproducibility.
4. Over 600 voluntary student evaluations rated the generated materials from 8.5 to 9.9/10, consistent with cognitive-load-informed [[active-learning]] design; assets were independently peer-reviewed and successfully deployed by six different faculty members.

## The Six-Phase Pipeline

The architecture frames instructional authoring as an engineering process, drawing a direct analogy to CI/CD pipelines in software engineering rather than unstructured human-AI chat. It comprises six sequential, stage-gated phases: Context Injection and Scoping, [[pedagogy|Pedagogical]] Calibration, Technical Calibration, Structural Planning, Iterative Implementation, and Review and Curation.

The opening phase ingests a foundational document — a syllabus or, in [[project-based-learning]] environments, a project charter — and distills it into a concise three-paragraph text summary. This deliberate context pruning is carried forward, preventing context-window overflow and attention dilution that drive [[hallucination-risk|hallucinations]]. Pedagogical Calibration uses few-shot prompting with previously validated materials to elicit the instructor's tacit knowledge into explicit rules such as cognitive-load limits and per-slide time restrictions. Technical Calibration injects [[governance|institutional]] syntax rules, packages, and custom class calls to enforce visual identity. Structural Planning produces a hierarchical lesson plan without generating any code, minimizing load on the model. Iterative Implementation then operates as an algorithmic loop, generating LaTeX and Python section by section while continuously referencing the condensed context summary. The final Review and Curation phase pairs an automated review by a secondary, independent AI with a human-in-the-loop validation by the instructor.

## Curriculum as Code and Technical Implementation

The approach operationalizes the [[curriculum-design|Curriculum as Code]] paradigm: slides are written in LaTeX with Beamer rather than edited in WYSIWYG tools, and technical figures are generated through parameterized Python scripts using libraries such as Matplotlib and Seaborn. This yields three advantages: typographically precise mathematical rendering, version-controlled and collaboratively improvable source, and a compilation process that automatically enforces institutional visual identity. The architecture restricts the human-AI interface entirely to plain text, Markdown, and source code — a protocol that avoids the formatting glitches and escape-character corruption common when models output rich text. Pedagogical constraints enforce content fragmentation and require every theoretical block to be followed by a project-anchored activity, aligned with [[cognitive-offloading|cognitive load]] theory. Because formatting is centralized in a custom institutional Beamer class, materials maintain visual consistency across disciplines and languages.

## Empirical Validation

Validation ran for one year at the Institute of Technology and Leadership in São Paulo, a [[higher-ed|higher-education]] institution operating strictly under a [[project-based-learning|PBL]] paradigm in quarterly modules. The architecture was deployed in two scenarios: a first-year common core across four modules and 24 distinct project contexts, and four advanced specialization modules. All first-year materials were authored by a single instructional designer, peer-reviewed by two independent professors, and delivered by six different faculty, demonstrating that tacit knowledge was translated into reusable assets that scale beyond a single author. Preparation time dropped from an average of eight hours to two hours per instruction. Generated Python scripts executed without compilation errors on zero-shot attempts, and no conceptual or mathematical hallucinations were identified during human-in-the-loop review across all 28 project contexts; the only errors were minor bracket mismatches caught by the automated review agent. Student evaluations of material quality ranged from 8.5 to 9.9/10.

## What this means for practice

- **Instructional designers.** Replace ad-hoc prompting with a staged, stage-gated pipeline — context scoping, pedagogical and technical calibration, structural planning, section-by-section implementation, then independent automated review plus instructor validation — because the workflow's structure mattered more than prompt phrasing or the foundation model.
- Author materials as code (LaTeX with Beamer plus parameterized Python figures) so output is version-controlled, reproducible, and automatically consistent with institutional visual identity, and keep the human-AI interface to plain text and source code.
- Prune context aggressively and generate section by section: this combination eliminated mathematical and conceptual hallucinations across all 28 project contexts, leaving only minor bracket mismatches for the review agent.
- **Faculty developers.** Capture instructors' tacit rules — cognitive-load limits, per-slide time restrictions, a project-anchored activity after every theoretical block — as explicit reusable constraints so materials scale beyond their original author.
- **Administrators.** Expect substantial workload relief: instructor preparation time fell from about eight hours to about two hours per instruction, and the same assets were delivered by six different faculty.

## Limitations

- Single institution and single author: all materials were authored by one instructional designer at the Institute of Technology and Leadership in São Paulo, which the paper names as its primary limitation and reason multisite studies are needed.
- Coverage is uneven across levels: the first-year common core spanned four modules and 24 project contexts, but the advanced specialization modules (years 2 and 3) had smaller classes and were deployed solely by the authoring instructor.
- Generative models showed behavioral drift after provider updates and needed prompt recalibration, and minor LaTeX syntactic anomalies recurred despite the absence of conceptual hallucinations.
- Material quality ratings of 8.5–9.9/10 came from over 600 voluntary student evaluations, a self-selected sample rather than a controlled comparison.

## Connected Concepts
- [[learning-design]]
- [[stem-education]]
- [[curriculum-design]]
- [[active-learning]]
- [[generative-ai]]

## Connected Articles

- [[bridging-instructional-design-framework-math]]
- [[courseblueprint-adaptive-video-generation]]
- [[didactical-teacher-assistant-dimensional-modeling]]

## Citation

Paiva, H. M. (2026). [*Curriculum as Code: An AI-Assisted Architecture for Instructional Design in STEM Education*](https://arxiv.org/abs/2608.07364).
