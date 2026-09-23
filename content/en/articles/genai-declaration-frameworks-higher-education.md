---
title: "Structuring Transparency: Developing Domain-Specific Generative AI Declaration Frameworks in Higher Education"
created: "2026-06-12T04:33:04-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [academic-integrity, ai-literacy]
technology: [generative-ai, rag]
research_method: [position paper, theoretical analysis]
audience: [administrators, instructors]
level: [higher ed]
sources: ['raw/papers/2606.13389.md']
confidence: high
discipline: [cs education]
institutions: [educational-policy-ai, regulation]
---

> **Synthesis:** As [[generative-ai]] disrupts [[higher-ed]], institutions increasingly require students to declare AI use. However, generic binary declarations (e.g., "I used GenAI") fail to capture the nuanced application of these tools across different academic tasks. Micallef & Petrovska argue that establishing transparency is key to protecting [[academic-integrity]], promoting [[ai-literacy]], and shifting the focus from policing to professional practice.

The paper contributes a design artifact: a framework of two task-specific declaration structures — one for writing-focused activities and one for coding assessments — developed for a [[cs-education|Computer Science]] department based on an existing taxonomy of GenAI usage. By categorizing AI usage across specific cognitive and developmental stages (e.g., structural planning vs. textual content generation, or code improvement vs. code generation), the framework encourages students to reflect on their own learning process and clarifies the boundary between acceptable assistance and [[academic-integrity|academic misconduct]].

This [[discipline-specific-aied|domain-specific]] approach is proposed as a foundation for fostering more honest assessment in Computer Science and other disciplines, aiming to better prepare students for professional environments where documenting GenAI workflows might be an essential job requirement. The work connects to broader discussions about the tension between [[educational-policy-ai|institutional regulation]] and [[student-experience|student practice]].

## What this means for practice

- **Instructors.** Replace the generic binary declaration with the paper's task-specific structures — one for writing-focused activities and one for coding assessments — so students name the cognitive stage the tool touched (for example, structural planning versus textual content generation, or code improvement versus code generation).
- **Instructors.** Ask for extent, explanation, and example prompts, using the framework's three-point scale, so the declaration becomes a reflective instrument that supports [[academic-integrity]] rather than a compliance artifact.
- **Instructors.** Read cohort-level declarations pedagogically: a class declaring Extensive use in Code Generation but Minor use in Understanding & Learning tells a different story from the reverse pattern, and should inform scaffolding and assessment redesign in the next task.
- **Administrators.** Pair the framework with explicit institutional guidance on which tools are in scope, because IDE autocomplete, browser-based writing assistants, and search engines with AI-generated summaries sit on a spectrum with conversational tools like ChatGPT.
- **Administrators.** Position the framework as complementary to policy-level instruments such as the AIAS rather than a substitute — it supplies the granular disclosure layer those instruments do not specify — and do not market it as a misconduct detector.

## Limitations

- This is a position and design paper: the framework is a design artifact developed for one Computer Science department from an existing taxonomy of [[generative-ai|GenAI]] usage, and the authors leave empirical evaluation (comparing declarations against observed workflow data) as future work.
- It relies on accurate self-reporting, and the authors cite prior evidence that novice programmers can experience an illusion of competence and misattribute GenAI contributions to their own work.
- It does not itself detect misconduct, and pairing it with detection tools raises well-documented reliability concerns.
- The boundary of what counts as "GenAI use" is not always obvious to students, and transferability is open: the categories derive from a computing education taxonomy, so their reach into other disciplines remains untested.

## Connected Concepts

- [[generative-ai]]
- [[higher-ed]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[educational-policy-ai]]
- [[student-experience]]
- [[regulation]]
- [[governance]]

## Connected Articles

## Citation

Micallef, N., & Petrovska, O. (2026). [Structuring Transparency: Developing Domain-Specific Generative AI Declaration Frameworks in Higher Education](https://arxiv.org/abs/2606.13389).
