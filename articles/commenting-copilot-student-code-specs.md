---
title: "Commenting with Copilot: A Taxonomy and Multi-Year Analysis of Student Code-Generation Specifications"
created: "2026-07-14T04:33:04-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy]
technology: [llm, rag]
stakeholders: [student-experience]
research_method: [secondary analysis, learning analytics]
discipline: [stem education, cs education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2607.10674.md']
confidence: high
---

> **Synthesis:** Analyzes how students specify intended behavior in natural language to AI code tools (Copilot) across multiple years, deriving a taxonomy of code-generation specifications expressed through comments. As AI tools shift emphasis from writing code to specifying behavior, the study documents what students actually ask of these systems.

Situates in [[llm]]-assisted [[programming-its]] and [[student-experience]] within [[cs-education]] and [[higher-ed]], extending [[reshaping-cs-education-genai]] by characterizing the new 'specification' literacy. It informs [[ai-literacy]] for coding and the design of tools that [[scaffolding|scaffold]] rather than replace student reasoning.

## Key Findings

- Analyzing a four-year dataset of undergraduate programming submissions and reflections from tasks in which students wrote comments to guide code generation and refined solutions using test-case feedback, the study introduces a taxonomy spanning three dimensions: comment type, code expression level, and code construct.
- Students mostly wrote natural-language What comments — describing intended behavior — while shifting toward How comments for more procedural constructs.
- Students focused more on verifying generated code than on repeatedly rewriting their comments, indicating a verification-oriented workflow in AI-assisted programming.
- Using automated classification, the study examined how the taxonomy dimensions varied across attempts and how students described the process in their reflections.
- The findings characterize the new "specification" literacy emerging as AI tools shift emphasis from writing code to specifying behavior in natural language.

## Study Design & Method

The study draws on multi-year data from undergraduate programming courses in which AI code tools such as GitHub Copilot were integrated into tasks: students wrote comments as specifications, the tools generated code, and students refined solutions based on test-case feedback. A three-dimensional taxonomy — comment type, code expression level, and code construct — was applied via automated classification to trace how specification behavior changed across attempts. Student reflections provided [[qualitative-research|qualitative]] context on how learners experienced the process of directing code generation.

## What this means for practice

- **Learners.** Write the intended behavior as a plain-language What comment first and switch to step-by-step How comments only for multi-step or iterative constructs: across four yearly cohorts students overwhelmingly wrote natural-language What comments and shifted to How only when the logic required sequencing or repetition.
- **Learners.** Spell out constraints, sequencing, and exact method choices on complex tasks, since students repeatedly reported that they had to be direct and specific to get reliable output.
- **Instructors.** Teach specification and verification as explicit learning goals instead of framing the AI tool as a shortcut for code production: 3,458 of the 3,483 student submissions reached a fully passing solution (99.3%), yet students described the main effort as checking generated code and judging whether it matched intended behavior.
- **Instructors.** Grade the verification step, not just the passing solution, and give feedback on comment precision: most comments were either new or unchanged (48.4% Unchanged within the first ten attempts) rather than substantially rewritten, so a passing test suite was reached with little prompt revision.
- **Designers.** Make comments and tests the interface between student intent and generated code, and scaffold the verification of generated code in the tool itself, because passing the tests does not guarantee semantic equivalence to the reference solution.

## Limitations

- The data come from one course, one institution, and one activity design — four yearly cohorts of an undergraduate object-oriented programming course, 1,161 students and 10,257 recorded submission attempts — so the results may not transfer directly to other settings.
- Students reproduced short Java examples from solution screenshots rather than solving open-ended problems (SimpleMath, BankAccount, ShoppingCart), so the findings reflect a constrained programming task.
- The modification analysis captures only changes visible in submissions; IDE-only revisions overwritten before submission do not appear in the data.
- Comment classification and reflection analysis both relied on LLM-assisted pipelines, so classification errors remain: the reliability check on 200 randomly sampled comments reached 92.5% agreement (κ = 0.781) for Comment Type.

## Connected Concepts

- [[ai-literacy]]
- [[cs-education]]
- [[higher-ed]]
- [[llm]]
- [[prompt-engineering]]
- [[student-experience]]

## Connected Articles

- [[programming-its]]
- [[reshaping-cs-education-genai]]
## Citation

Nasser Giacaman, Valerio Terragni, Paul Denny, Viraj Kumar (2026). [Commenting with Copilot: A Taxonomy and Multi-Year Analysis of Student Code-Generation Specifications](https://arxiv.org/abs/2607.10674). arXiv preprint.
