---
title: "AI-Generated Slides: Are They Good? Can Students Tell?"
created: "2026-05-14T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-literacy, educational-development]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [automated-question-generation]
research_method: [user study, design and evaluation study]
audience: [instructors, faculty developers]
level: [higher ed]
sources: ['raw/papers/2605.13532.md']
confidence: medium
page_kind: [evaluation]
---

> **Synthesis:** This study evaluated five [[generative-ai|generative AI]] tools for creating instructional slides from instructor-authored course notes: NotebookLM, Claude, M365 Copilot, Cursor, and Claude Code. Educators assessed slides for accuracy, completeness, and [[pedagogy|pedagogical]] soundness.

- **Coding assistants (Cursor, Claude Code) produced the best slides** — most accurate, complete, and pedagogically sound.
- **Students rated AI-generated slides as similar in quality to instructor-created slides.**
- **Students could not reliably identify which slides were AI-generated.**
- A negative correlation emerged: high quality ratings were associated with lower "AI-generated" guesses, suggesting **students associate poor quality with AI origin** even when AI slides are good.

## What this means for practice

- **Instructors.** Draft slides with a coding assistant rather than a dedicated education tool or a general-purpose LLM: Cursor and Claude Code produced the most accurate, complete, and pedagogically sound segments from the instructor's existing e-book materials, suggesting that the [[scaffolding]] and structured output formats of coding tools carry over to [[learning-design|instructional design]].
- **Instructors.** Budget iteration time for visual consistency: matching AI-generated decks to the instructor's own style required repeated prompting, and styling remained inconsistent even after the prompts were refined.
- **Faculty developers.** Coach colleagues to demonstrate quality alongside disclosure — students associated low quality with AI origin (higher-rated segments drew fewer "AI-generated" guesses), so transparency about AI use can backfire unless the material is visibly good.
- **Instructors.** Ask students to judge the slides specifically; in this study the peer-instruction ratings could also reflect live coding and verbal explanations delivered in the same segment.
- **Researchers.** Run a controlled comparison of AI- and instructor-created slides with an actual learning measure, since this case study deliberately did not measure effects on learning.

## Limitations

- **Case study rather than research design:** the authors state their goal was to report holistic initial experiences, not to conduct a research study.
- **One course, one instructor, one term:** a Web Software Development instance in fall 2025 with 88 students enrolled and 51 attending the first lecture, across five 2-hour lectures that mixed 4 Cursor-generated and 6 Claude Code-generated slide segments with instructor-made slides.
- **Ratings were voluntary and uneven:** participation did not affect course credit, individual students contributed different numbers of ratings, and the segment ratings may capture the live coding and verbal explanations around the slides.
- **No learning-effect or transfer evidence:** the design cannot show whether AI-created slides change learning or whether the pattern holds in another instructor's course.

## Connected Concepts

- [[ai-literacy]]
- [[generative-ai]]
- [[llm]]
- [[learning-design]]
- [[ai-education]]
- [[student-experience]]
- [[educational-development]]
## Connected Articles

- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation
- [[aissa-slides-analysis]]
- [[students-llm-usage-critical-thinking]] — Characterizing Students' LLM Usage Behaviors and Their Association with Learning in Critical Thinking Tasks
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study
- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs

## Citation

Leinonen, J., Zhang, L., & Hellas, A. (2026). [AI-generated slides: Are they good? Can students tell?](https://arxiv.org/abs/2605.13532) Proceedings of the Western Canada Conference on Computing Education (WCCCE 2026).
