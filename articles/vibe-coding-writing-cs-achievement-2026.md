---
title: Computer Science Achievement and Writing Skills Predict Vibe Coding Proficiency
created: "2026-09-08T01:30:00-04:00"
updated: "2026-09-19T07:12:05-04:00"
type: article
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, prompt-engineering, vibe-coding]
sources: ['raw/papers/2603.14133.md']
research_method: [quantitative, experiment]
discipline: [cs education, writing education]
audience: [researchers, curriculum designers, instructors, software developers]
level: [higher ed]
page_kind: [evaluation]
confidence: high
---

> **Synthesis:** In a preregistered cross-sectional study (N = 100 [[higher-ed|tertiary]] students), both [[writing-education|written-communication proficiency]] (r = .29) and computer-science achievement (r = .39) significantly predicted GUI-oriented "vibe coding" performance, with CS achievement remaining a significant predictor after controlling for domain-general cognitive skills — a finding that links prose skill to [[llm]]-driven development; in a joint model CS achievement contributed roughly twice the unique variance of writing skills, though both added independent predictive value, and prompt quality mediated the link from writing skill to vibe-coding success. Findings speak to tool and curriculum design — when to emphasize prompt-writing versus CS fundamentals.

**Relevance to [[ai-education|AI in Education]]:** This study reframes writing as a primary programming skill in the era of LLM-native software creation, connecting directly to [[prompt-engineering]] research, the construct of [[vibe-coding|vibe coding]], [[cs-education]] curriculum redesign, and the predictors of who succeeds when AI handles implementation. It provides controlled, preregistered evidence that complements the practice-oriented vibe-coding papers already in this knowledge base.

## Key Findings

- **Both writing and CS achievement predict vibe coding.** In a preregistered, cross-sectional study (N = 100 tertiary students), written-communication proficiency correlated r = .29 with vibe-coding performance and CS achievement r = .39; both were significant independent predictors in a joint model, where CS achievement contributed roughly twice the unique variance of writing skill.
- **CS achievement survives controlling for general cognitive ability.** CS achievement remained a significant predictor (partial r = .281, p = .005) of vibe-coding performance after controlling for domain-general cognitive skills (ICAR16), indicating the relationship is not merely an artifact of general reasoning.
- **Writing works through [[prompt-engineering|prompt quality]].** Human-graded prompt quality mediated the association between writing skill and vibe-coding performance — response-process evidence that clear, structured prose translates into better natural-language prompts, supporting the construct validity of the measure and the importance of [[writing-education|written communication]] in LLM-native development.
- **CS knowledge helps even in "no-code" mode** (decomposition and algorithmic thinking are facets of [[computational-thinking]]). Because the environment hid the generated source, CS achievement could only operate indirectly (problem decomposition, mental models of control flow); the authors argue this makes their CS estimate a *lower bound* for general LLM-augmented programming where code editing is also available.
- **The pattern extends beyond GUI surface tasks.** In the data-centric, constraint-satisfying meal-planning subtask, both CS achievement (r = .320) and [[writing-education|writing]] (r = .202) remained significant predictors, tentatively suggesting the findings are not limited to surface-level GUI construction.
- **Exploratory: prior LLM usage negatively correlated with writing and vibe-coding performance** (though not with CS achievement) — the authors speculate LLMs may blunt expression, or weaker writers self-select into heavier LLM use; not causal.

## What this means for practice

- **Instructors.** Grade the prompts students submit, not only the artifact: human-graded prompt quality mediated the link between [[writing-education|writing skill]] and vibe-coding performance, and written-communication proficiency remained an independent predictor (r = .29).
- **Curriculum designers.** Keep [[cs-education|CS fundamentals]] in the curriculum even for no-code workflows — CS achievement was the stronger predictor (r = .39; partial r = .281 controlling for ICAR16) and operated only indirectly when the generated source was hidden, making its estimated contribution a lower bound.
- **Instructors.** Use source-hidden, GUI-oriented tasks when you intend to assess expressive specification; in mixed-mode environments where students may read or edit generated code, expect CS knowledge to carry more of the load.
- **Curriculum designers.** Add written-communication instruction to software courses, because decomposition and algorithmic thinking must pass through prose when students specify behavior to an [[llm|LLM]].
- **Researchers.** Report prior LLM usage alongside performance: it correlated negatively with writing and vibe-coding performance (though not with CS achievement), a non-causal pattern consistent either with LLM use blunting expression or with weaker writers self-selecting into heavier use.

## Limitations

- N = 100 tertiary students recruited from a single laboratory volunteer pool (ETH Zurich and University of Zurich), mean age 25.0 (SD = 3.5), 51 of them engineering or technology majors, each paid 55 CHF for one 1-hour-45-minute session; all had completed an introductory CS course and had prior experience using LLMs for programming tasks, so novices were excluded by design.
- The written-communication instrument was newly designed for this study and had never been deployed before, which the authors list as a construct-validity threat; essay graders needed recalibration and rescoring after an ICC(2,2) of 0.735 fell below the preregistered 0.750 threshold.
- The study assessed "pure" no-code, GUI-oriented vibe coding in a controlled laboratory with the generated source hidden, so results may not transfer to permissive LLM-augmented workflows that expose code, to non-GUI tasks such as data analysis, or to professional developers and citizen programmers.
- Tests and tasks were strictly timed — several participants ran out of time while close to a correct solution — and the cross-sectional design supports prediction, not causal claims about what improves vibe-coding skill.

## Connected Concepts

- [[vibe-coding]]
- [[cs-education]]
- [[prompt-engineering]]
- [[writing-education]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[higher-ed]]
- [[generative-ai]]

## Connected Articles

- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[conversational-agents-novice-programmers-scoping-2025]] — Exploring Conversational Agents for Novice Programmers: A Scoping Review
- [[code-to-learn-genai-artifact-construction-2026]] — Code to Learn with Generative AI: A Theoretically Grounded Framework for Artifact Construction in Upper-Secondary Education

## Citation

Thorgeirsson, S., Weidmann, T. B., & Su, Z. (2026). [Computer Science Achievement and Writing Skills Predict Vibe Coding Proficiency](https://doi.org/10.1145/3772318.3791666). *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)*, Barcelona, Spain. 17 pages.
