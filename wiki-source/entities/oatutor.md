---
title: OATutor (Open Adaptive Tutor)
created: 2026-05-07
updated: 2026-05-07
type: entity
tags: [intelligent-tutoring, open-source, adaptive-learning, edtech-platform, higher-ed]
sources: [raw/articles/oatutor-website-2026.md, raw/papers/pardos-oatutor-chi-2023.md, raw/articles/oatutor-genai-mit-solve-2024.md]
---

# OATutor (Open Adaptive Tutor)

> The first open-source adaptive tutoring system built on ITS principles, developed at UC Berkeley's CAHL Lab. MIT-licensed codebase + CC BY 4.0 content library.

## Overview

OATutor addresses a long-standing gap in the ITS research community: despite decades of validated principles, no adaptive tutoring system had been both **fully featured** and **open-sourced** for replication and extension. OATutor democratizes adaptive learning research by providing not only source code but also complete algebra course content, authoring tools, and built-in A/B testing infrastructure.

**Lead:** [Zachary A. Pardos](https://bse.berkeley.edu/zachary-pardos), Associate Professor, UC Berkeley School of Education.

| | |
|---|---|
| **First Release** | CHI 2023 (3 years in development) |
| **License** | MIT (code) / CC BY 4.0 (content) |
| **Active Deployments** | UC Berkeley, Calbright, Mission College, KTH (Sweden) |
| **Scale** | 4,000 active college students; >70,000 problem submissions |
| **GenAI Augmentation** | OATutor-GenAI (2024), adding LLM content generation & personalization |

## Core Architecture

OATutor implements established ITS principles validated by prior research:

1. **Hints & Worked Examples** — On-demand declarative help or full worked examples
2. **Scaffolding / Tutored Problem Solving** — Problems broken into steps with sub-questions
3. **Mastery Estimation** — [[bayesian-knowledge-tracing]] via Hidden Markov Model
4. **Immediate Feedback** — Real-time correctness feedback upon submission
5. **Knowledge Component Model** — Centralized skill configuration mapping steps to skills
6. **Bottom-out Hints** — Final hint reveals the answer to prevent dwelling
7. **Variabilization** — Template variables generate multiple problem instances
8. **Data Logging** — Row-per-interaction format compatible with EDM standards

### Content Hierarchy

```
Course → Lessons → Problems → Steps → Tutoring Pathway (Hints / Scaffolds)
```

**Authoring workflow:** Content creators use Google Spreadsheets (no programming required); an automated script converts to JSON, running nightly quality checks and rendering previews. For the OpenStax College Algebra course, 16 creators completed content in ~6 months with an average of 2.27 hours training time.^[[[pardos-oatutor-chi-2023]]]

## OATutor-GenAI

The GenAI augmentation extends the base system with LLM-powered content generation and personalization, developed with support from the California Learning Lab and MIT Solve.

| Component | Capability |
|-----------|------------|
| **Feedback Generation** | Dynamic hinting via ChatGPT API; contextual (student answer + question + prompt template) |
| **Question Generation** | Automated algebra item authoring; IRT analysis shows ChatGPT-generated items are "on par with or better than OpenStax" in discriminating power^[[[oatutor-genai-mit-solve-2024]]] |
| **Skill Tagging** | Auto-tags questions to standards (e.g., US Common Core) via fine-tuned LLM |
| **Personalization** | Teacher-personalized (tone, style) and student-personalized (biography, transcript data) hints |
| **Hallucination Mitigation** | Self-consistency technique reduced algebra worked-solution hallucinations to near 0%^[[[oatutor-genai-mit-solve-2024]]] |

## Research Findings

- **LLM hints match human quality:** ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills (Pardos & Bhandari, 2024, *PLOS ONE*).^[[[oatutor-website-2026]]]
- **LLM items match/exceed textbook quality:** ChatGPT-generated algebra questions, evaluated via Item Response Theory, show higher discriminating power than OpenStax items (Bhandari, Liu, & Pardos, 2023).^[[[oatutor-genai-mit-solve-2024]]]
- **A/B testing capability:** Built-in experimental infrastructure for replication and comparative studies.

## Differences from Closed Platforms

| Dimension | OATutor | Khanmigo |
|---|---|---|
| License | Open-source (MIT) + free | Closed, proprietary |
| Transparency | Prompting and tutor logic fully transparent | Opaque |
| Teacher Control | Teachers control tone, tenor, subject | Platform-controlled |
| LMS Integration | Progress reports to teacher via LMS | Limited |
| Research Rigor | Gold-standard pre/post-test evaluations | Not independently evaluated |

## Related Pages

- [[bayesian-knowledge-tracing]] — The mastery estimation algorithm at OATutor's core
- [[open-tutorai]] — A newer open-source LLM-native tutoring platform with avatar-based immersion
- [[opentutor-usc]] — Dialog-based open-source tutoring emphasizing rapid authoring
- [[gift]] — Army-developed open-source AIS framework with sensor integration
- [[open-source-tutoring-ecosystem]] — Comparative landscape of all open-source ITS projects
- [[rapid-tutor-authoring]] — OATutor's spreadsheet-based and USC OpenTutor's grade-as-you-train authoring approaches
- [[ai-tutor-effectiveness-review]] — Where OATutor fits in the broader ITS evidence base
- [[adaptive-learning-systems]] — General principles that OATutor implements
- [[pedagogical-llm-training]] — Related work on training LLMs for tutoring (EduQwen)
- [[formative-assessment]] — OATutor-GenAI's automated item generation connects to assessment research

## Sources

- Pardos, Z. A., Tang, M., Anastasopoulos, I., Sheel, S. K., & Zhang, E. (2023). *OATutor: An Open-source Adaptive Tutoring System and Curated Content Library for Learning Sciences Research.* CHI 2023. [doi:10.1145/3544548.3581574](https://dl.acm.org/doi/10.1145/3544548.3581574)
- OATutor website: [oatutor.io](https://www.oatutor.io/)
- MIT Solve profile: [OATutor-GenAI](https://solve.mit.edu/challenges/ai-education-assessments/solutions/93254)
