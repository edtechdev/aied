---
title: "Concept Catalyst: Exploring Scrutable Interfaces to Structure K-12 Teacher Interactions with Generative AI"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy, teacher-role]
technology: [generative-ai, edtech-platform]
research_method: [system development, user study]
audience: [instructors]
level: [k 12]
sources: ['raw/papers/2606.30590.md']
confidence: high
page_kind: [framework]
---

> **Synthesis:** Mansi et al. (2026) introduce Concept Catalyst, a system designed around 'scrutable interfaces' — interfaces that make AI reasoning visible and editable by users. Working with K-12 teachers, the study shows that when teachers can inspect and modify how a [[generative-ai]] tool processes their inputs, they report higher trust, greater sense of control, and better alignment with their [[pedagogy|pedagogical]] goals. This directly addresses a critical gap in [[edtech-platform]] design: most teacher-facing AI tools operate as black boxes, undermining the [[teacher-role]] as a professional decision-maker. The Concept Catalyst approach empowers teachers to become co-designers of AI-assisted lesson planning, not just consumers. The work contributes to [[ai-literacy]] by demonstrating that 'scrutability' as a design principle can bridge the gap between AI capability and classroom reality. The study also has implications for [[k-12]] education policy, suggesting that AI tools adopted in schools should meet scrutability standards.

## What this means for practice

- **Instructors.** Map the key ideas of a [[k-12|K-12]] engineering design challenge before writing prompts, then hand the AI only the concepts you selected rather than asking for a whole lesson at once. Teachers in the study reported lower cognitive load and more accurate prompts when the interface forced that structuring step first.
- **Instructors.** Treat every generated [[scaffolding|scaffold]] as an editable draft: check the underlying prompt, revise it, regenerate it, or discard it before it reaches students. The teachers prized Concept Catalyst over a chat window precisely because the prompts stayed visible and modifiable.
- **Instructors.** Keep the [[pedagogy|pedagogical]] reasoning in your own hands. The reported value came from making teachers' own structuring of the engineering design process explicit, not from the quality of [[generative-ai]] output on its own.
- **Instructors.** Reuse the same representation when district requirements change, updating the concept map rather than rebuilding prompts from scratch; several teachers adopted the tool for this adaptability.

## Limitations

- Ten teachers were recruited through the research team's online contacts and snowball sampling, so the sample reflects existing professional networks rather than a representative range of [[teacher-role|teachers]]; five had more than 15 years of classroom experience, and the authors themselves call for broader recruitment across geography, culture, and socioeconomic status.
- The study ran on a Miro mockup with a researcher covertly operating ChatGPT behind the scenes (Wizard-of-Oz), so no participant used a working system and actual output quality was mediated by a fixed prompt template.
- All teachers worked on the same well-known bridge design challenge, chosen to make interactions comparable; the authors note that behavior may differ when teachers write for their own projects.
- No students were interviewed about the scaffolds, leaving their reception of the generated content untested.

## Connected Concepts

- [[generative-ai]]
- [[edtech-platform]]
- [[teacher-role]]
- [[ai-literacy]]
- [[k-12]]
- [[trust]]
- [[human-in-the-loop-ai]]
## Connected Articles

- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[llm-cultural-relevance-k12]] — LLMs for Culturally Relevant K-12 Pedagogy

## Citation

Gennie Mansi, Sunni Newton, Roxanne Moore, Meltem Alemdar, Mark Riedl (2026). [Concept Catalyst: Exploring Scrutable Interfaces to Structure K-12 Teacher Interactions with Generative AI](https://arxiv.org/abs/2606.30590).
