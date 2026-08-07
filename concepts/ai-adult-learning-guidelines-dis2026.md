---
title: "Guidelines for Designing AI Technologies to Support Adult Learning"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [adult-learning, design-guidelines, andragogy, ai-education, human-computer-interaction, educational-technology, higher-ed, professional-training, heuristic-evaluation]
sources: [raw/papers/ai-adult-learning-guidelines-dis2026.md]
confidence: high
---

> **Synthesis:** Drawing on longitudinal deployment data from the National AI Institute for Adult Learning and Online Education (AI-ALOE), this DIS 2026 paper synthesizes 19 empirically grounded design guidelines for AI-powered adult learning technologies. The guidelines span cognitive, social, and teaching presence dimensions and are derived from reflexive thematic analysis of ~1,600 stakeholder statements across seven deployed systems. The work also provides a heuristic evaluation method and an interactive guideline exploration tool.

# Guidelines for Designing AI Technologies to Support Adult Learning

## Context and Motivation

AI-powered educational technologies have demonstrated benefits but are predominantly designed and evaluated in K-12 contexts. Adult learners differ motivationally and contextually: they are often self-directed, goal-oriented (career advancement, reskilling), and must balance education with employment and family responsibilities. Existing systems inherit design patterns from K-12 that are poorly aligned with adult learning constraints.

This paper examines seven AI-powered technologies deployed within **AI-ALOE**, a US National AI Institute:

- **Apprentice Tutors** — web-based ITS for adult math/STEM practice
- **iTELL** — Intelligent Texts for Enhanced Lifelong Learning
- **Ivy** — interactive video-based AI coaching for procedural skills
- **Jill Watson** — RAG-powered Q&A agent for online courses
- **SAMI** — social agent for online discussion forums
- **SMART** — Student Mental Model Analyzer for Research and Teaching
- **VERA** — conceptual modeling tool for guided inquiry

## Methodology

Using **reflexive thematic analysis**, the team analyzed approximately 1,600 stakeholder statements from focus groups with learners and instructors, technical artifacts, and progress reports. Statements were organized through affinity diagramming into sub-themes, needs statements, and finally 19 design guidelines framed as "AI tools should..." Each guideline is labeled by Community of Inquiry dimension (cognitive/social/teaching presence) and most-impacted stakeholder.

## The 19 Design Guidelines

The guidelines span four categories:

### Cognitive Presence
- **G2:** AI tools should be accessible and fit into the busy lives of adult learners (mobile-friendly, offline-capable, affordable)
- **G3:** AI tools should be informed by learning science and learning theories
- **G4:** AI tools should be easy to understand and frictionless to use

### Teaching Presence
- **G7:** AI tools should support learner motivation and engagement
- **G8:** AI tools should align with established instructional best practices
- **G9:** AI tools should support diverse pedagogical strategies
- **G11:** AI tools should personalize the learning experience
- **G13:** AI tools should provide substantive educational support (not just surface-level assistance)
- **G16:** AI tools should align with instructors' personal instructional approach
- **G17:** AI tools should provide meaningful feedback and explanations

### Social Presence
- **G18:** AI tools should scaffold and support learners in developing their social competencies
- **G19:** AI tools should foster social connection and community

### Cross-Cutting
- **G1:** AI tools should be transparent about data practices (collection, storage, access)
- **G6:** AI tools should provide scaffolded support that adapts as learners progress
- **G12:** AI tools should connect content to real-world problems that matter to adult learners
- **G14:** AI tools should support learning engineering through actionable data
- **G15:** AI tools should integrate easily with existing educational ecosystems

## Key Findings

- **Stakeholder priorities diverge**: Instructors focused on usability (G4) and instructional alignment (G16); students emphasized educational support (G13) and community-building (G18, G19); researchers prioritized learning theories (G3) and best practices (G8-G10).
- **No single technology satisfied all 19 guidelines** — but the broader AI-ALOE ecosystem collectively covered the full set.
- **Personalization (G11)** had low satisfaction across systems: most deployed surface-level personalization (adapting examples, knowledge checks) rather than deeper adaptations like task sequencing or difficulty calibration.
- **Data transparency (G1)** and **social/community features (G18, G19)** consistently scored lowest across the heuristic evaluation.

## Design Implications

1. **Design for adult life constraints** — mobile access, offline support, and asynchronous availability are not nice-to-haves; they are prerequisites for adult learners balancing work, family, and education.
2. **Ground AI tools in andragogy**, not just pedagogy — adult learners are self-directed, problem-oriented, and bring life experience that shapes how they engage with technology.
3. **Heuristic evaluation using these 19 guidelines** provides a structured method for assessing adult learning technologies against empirically grounded criteria.
4. **The guideline exploration tool** connects abstract design principles to concrete stakeholder quotes, supporting ideation and technology refinement.

## Citation

**APA:** 13-17, V.D.J., Adult, G.F.D.A.T.T.S., Reddig∗, J., Computing, I., Georgia, A., & Morris, W.G. (2026). *Guidelines for Designing AI Technologies to Support Adult Learning*. Designing Interactive Systems Conference (DIS ’26), June 13–17. https://doi.org/10.1145/3800645.3813102

## Related Pages

- [[adult-learning]]
- [[andragogy]]
- [[design-guidelines]]
- [[ai-education]]
- [[educational-technology]]
- [[higher-ed]]
- [[professional-training]]
- [[heuristic-evaluation]]
- [[human-computer-interaction]]

## Source

- [https://doi.org/10.1145/3800645.3813102](https://doi.org/10.1145/3800645.3813102)
