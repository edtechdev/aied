---
title: "Curriculum as Code: An AI-Assisted Architecture for Instructional Design in STEM Education"
created: "2026-08-10T09:10:02-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [instructional-design, stem-education, generative-ai, curriculum-design, higher-ed, project-based-learning, ai-education]
sources: ['raw/papers/2608.07364.md']
confidence: high
---

> **Synthesis:** This paper presents a six-phase AI-assisted instructional design architecture based on the Curriculum as Code paradigm, integrating Generative AI with LaTeX and Python to automate the creation of reproducible, visually consistent, and technically precise materials for STEM education. Validated over one year across 8 modules and 28 project contexts in a Project-Based Learning environment, the architecture significantly reduced instructor workload. Materials achieved high quality ratings from 8.5 to 9.9/10 based on over 600 voluntary student evaluations, suggesting viability for broad STEM educational applications.

## Key Findings

1. Presents a six-phase AI-assisted [[instructional-design]] architecture grounded in the Curriculum as Code paradigm, integrating [[generative-ai]] with LaTeX and Python to automate production of reproducible, visually consistent, and technically precise STEM instructional materials.
2. Validated over one year across 8 modules and 28 project contexts in a demanding [[project-based-learning]] environment, the pipeline was associated with roughly a 75% reduction in instructor preparation time (from ~8 to ~2 hours per instruction) while preserving the instructor's teaching signature.
3. Aggressive context pruning and section-by-section generation effectively eliminated mathematical and conceptual [[hallucination-risk|hallucinations]] — none were identified during human-in-the-loop review across the 28 project contexts — yielding high technical reproducibility.
4. Over 600 voluntary student evaluations rated the generated materials from 8.5 to 9.9/10, consistent with cognitive-load-informed [[active-learning]] design; assets were independently peer-reviewed and successfully deployed by six different faculty members.

## The Six-Phase Pipeline

The architecture frames instructional authoring as an engineering process, drawing a direct analogy to CI/CD pipelines in software engineering rather than unstructured human-AI chat. It comprises six sequential, stage-gated phases: Context Injection and Scoping, Pedagogical Calibration, Technical Calibration, Structural Planning, Iterative Implementation, and Review and Curation.

The opening phase ingests a foundational document — a syllabus or, in [[project-based-learning]] environments, a project charter — and distills it into a concise three-paragraph text summary. This deliberate context pruning is carried forward, preventing context-window overflow and attention dilution that drive [[hallucination-risk|hallucinations]]. Pedagogical Calibration uses few-shot prompting with previously validated materials to elicit the instructor's tacit knowledge into explicit rules such as cognitive-load limits and per-slide time restrictions. Technical Calibration injects institutional syntax rules, packages, and custom class calls to enforce visual identity. Structural Planning produces a hierarchical lesson plan without generating any code, minimizing load on the model. Iterative Implementation then operates as an algorithmic loop, generating LaTeX and Python section by section while continuously referencing the condensed context summary. The final Review and Curation phase pairs an automated review by a secondary, independent AI with a human-in-the-loop validation by the instructor.

## Curriculum as Code and Technical Implementation

The approach operationalizes the [[curriculum-design|Curriculum as Code]] paradigm: slides are written in LaTeX with Beamer rather than edited in WYSIWYG tools, and technical figures are generated through parameterized Python scripts using libraries such as Matplotlib and Seaborn. This yields three advantages: typographically precise mathematical rendering, version-controlled and collaboratively improvable source, and a compilation process that automatically enforces institutional visual identity. The architecture restricts the human-AI interface entirely to plain text, Markdown, and source code — a protocol that avoids the formatting glitches and escape-character corruption common when models output rich text. Pedagogical constraints enforce content fragmentation and require every theoretical block to be followed by a project-anchored activity, aligned with cognitive load theory. Because formatting is centralized in a custom institutional Beamer class, materials maintain visual consistency across disciplines and languages.

## Empirical Validation

Validation ran for one year at the Institute of Technology and Leadership in São Paulo, a [[higher-ed|higher-education]] institution operating strictly under a [[project-based-learning|PBL]] paradigm in quarterly modules. The architecture was deployed in two scenarios: a first-year common core across four modules and 24 distinct project contexts, and four advanced specialization modules. All first-year materials were authored by a single instructional designer, peer-reviewed by two independent professors, and delivered by six different faculty, demonstrating that tacit knowledge was translated into reusable assets that scale beyond a single author. Preparation time dropped from an average of eight hours to two hours per instruction. Generated Python scripts executed without compilation errors on zero-shot attempts, and no conceptual or mathematical hallucinations were identified during human-in-the-loop review across all 28 project contexts; the only errors were minor bracket mismatches caught by the automated review agent. Student evaluations of material quality ranged from 8.5 to 9.9/10.

## Implications

The findings suggest a shift from ad-hoc [[prompt-engineering]] toward structured instructional architecture, where the workflow's structure matters more than prompt phrasing or the specific foundation model used. The instructor's role evolves from manual slide formatter to architect of instructional design, a change with implications for [[teacher-role]] and [[teacher-education]]. The architecture's text-based, code-driven nature natively supports internationalization, enabling easy translation for exchange students without breaking layout — relevant to [[multilingual-learning]]. Because the pipeline succeeded in the highly demanding, highly contextualized [[project-based-learning]] environment, its authors argue that application to traditional lecture-based courses across [[higher-ed]] is straightforward and scalable. Future work targets integration with autonomous [[agentic-ai|AI agents]] and skills via APIs, a CI/CD-inspired workflow using Git repositories, [[adaptive-learning]] variations for different learning profiles, and [[accessibility]] versions for visually impaired students. A key limitation is that all authoring occurred within a single institution by a single instructor, so multisite studies are needed.

## Connected Concepts
- [[instructional-design]]
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
