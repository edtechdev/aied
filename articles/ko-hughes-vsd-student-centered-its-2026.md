---
title: "Value-Sensitive Design in Action: Designing Student-Centered Intelligent Tutoring Systems with Community College Students and Instructors"
created: "2026-09-08T13:29:19-04:00"
updated: "2026-09-08T13:29:19-04:00"
type: article
tags: [intelligent-tutoring, explainable-ai, human-in-the-loop-ai, privacy, agency, ethics, stakeholders, design-based-research, higher-ed]
sources: ['raw/papers/ko-hughes-vsd-student-centered-its-2026.md']
research_method: [design-based research, qualitative]
audience: [researchers, instructional designers, software developers]
level: [higher ed]
confidence: high
---

> **Synthesis:** Ko and Hughes (2026) apply Value Sensitive Design (VSD) to the design of student-centered [[intelligent-tutoring|intelligent tutoring systems]] (ITS). Working with community college students, instructors, instructional designers, and field experts (developers and data scientists), they ran the VSD cycle of conceptual, empirical, and technical investigations and produced a value-oriented prototype. The work documents how learners and instructors -- a stakeholder group historically left out of learning-platform design -- articulate values, surfacing persistent value tensions (transparency vs. interpretability, privacy vs. instructional insight, [[agency|student agency]] vs. system-guided [[scaffolding]]) that designers must manage rather than resolve.

**Relevance to [[ai-education|AI in Education]]:** This study is a concrete example of [[human-in-the-loop-ai|human-centered]] design practice for [[ai-ed-evaluation|AIED]]: it operationalizes how [[ethics]] values can be built into an ITS from the outset (rather than retrofitted), and it directly addresses the privacy, [[explainable-ai|explainability]], and autonomy concerns raised by data-intensive tutoring platforms -- in the specific, often-overlooked context of developmental [[math-education|mathematics]] at a community college where adaptive tutoring drives the entire course.

## Key Findings

- **16 value-aligned design features across three families.** The final prototype (Step 7) integrated explainable AI features (E1-E5: comprehension-check interpretation, setting expectations on the [[learning-theories|learning science]] behind the ITS, practice-question selection details, concept and learning-path connection, communicating the AI's confidence level), human-in-the-loop features (H1-H9: student control over re-assessment, review, personalized goals/pace, bookmarking, confirming confidence over mastery, personalized support after long answer times or accuracy declines, feedback to the ITS, communicating receipt of external help, and AI-assistance involvement-level control), and privacy-control features (P1-P4: learning-data repurposing control, permission to share [[learning-analytics|learning analytics]], permission to share [[affective-computing|affective]] states, and privacy-level control).
- **Value tensions shaped every design decision.** Rather than treating transparency, privacy, and agency as independent requirements, the study found them in tension: students preferred *collaborative/humanized* explanations over raw model transparency (transparency alone has little value unless it supports learning); sharing emotional/affective analysis with instructors was controversial among both students and instructors; and opinions on privacy settings split along student/instructor lines (students wanted control, instructors wanted visibility to support learning).
- **The historically overlooked stakeholder.** The paper argues students and instructors are rarely included in designing the AI learning platforms they use, and most studies do not clearly explain how values such as [[bias-mitigation|fairness]], transparency, or autonomy are built in. Here, direct engagement of these stakeholders produced value-rich design inputs (needs, pain points, value tensions) that were mapped through the VSD process into concrete technical features.
- **Context-specificity is explicit.** Findings are context-bound to a single institution that is unusual in fully utilizing its ITS's adaptive/AI capabilities in developmental math (most U.S. community colleges disable adaptive tutoring and use the ITS mainly as a question bank) -- and to adult, returning students (many with multi-year gaps from schooling). This is a strength for authenticity but limits generalizability.
- **VSD is a viable, structured route for human-centered AIED design.** The study demonstrates the full VSD cycle (conceptual investigations of stakeholders/values, empirical investigations of activity and value tensions, technical investigations of value-aligned features) can be applied in education, extending VSD beyond its prior mainly-HCI applications and addressing the gap between AI-ethics *problem identification* and actionable *solution creation*.

## Connected Concepts

- [[intelligent-tutoring]]
- [[explainable-ai]]
- [[human-in-the-loop-ai]]
- [[privacy]]
- [[agency]]
- [[ethics]]
- [[stakeholders]]
- [[design-based-research]]
- [[human-ai-collaboration]]

## Connected Articles

- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors: pedagogical safety guardrails for tutoring
- [[making-ai-tutoring-productive-mastery-math-2026]] — design of productive AI math tutoring
- [[zhang-tutormoments-2026]] — context-appropriateness of tutor help (scaffolding vs. rigor)

## Citation

Ko, E. G., & Hughes, J. E. (2026). [Value-sensitive design in action: Designing student-centered intelligent tutoring systems with community college students and instructors](https://doi.org/10.1016/j.caeai.2026.100560). *Computers and Education: Artificial Intelligence, 10*, 100560.
