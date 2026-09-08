---
title: Computer Science Achievement and Writing Skills Predict Vibe Coding Proficiency
created: "2026-09-08T01:30:00-04:00"
updated: "2026-09-08T01:30:00-04:00"
type: article
tags: [vibe-coding, cs-education, prompt-engineering, writing-education, computational-thinking, higher-ed, ai-literacy, generative-ai]
sources: ['raw/papers/2603.14133.md']
research_method: [quantitative, experiment]
discipline: [cs education]
audience: [researchers, curriculum designers, instructors, software developers]
level: [higher ed]
category: [evaluation]
confidence: high
---

In a preregistered cross-sectional study (N = 100 [[higher-ed|tertiary]] students), both [[writing-education|written-communication proficiency]] (r = .29) and computer-science achievement (r = .39) significantly predicted GUI-oriented "vibe coding" performance, with CS achievement remaining a significant predictor after controlling for domain-general cognitive skills — a finding that links prose skill to [[llm]]-driven development; in a joint model CS achievement contributed roughly twice the unique variance of writing skills, though both added independent predictive value, and prompt quality mediated the link from writing skill to vibe-coding success. Findings speak to tool and curriculum design — when to emphasize prompt-writing versus CS fundamentals.

**Relevance to [[ai-education|AI in Education]]:** This study reframes writing as a primary programming skill in the era of LLM-native software creation, connecting directly to [[prompt-engineering]] research, the construct of [[vibe-coding|vibe coding]], [[cs-education]] curriculum redesign, and the predictors of who succeeds when AI handles implementation. It provides controlled, preregistered evidence that complements the practice-oriented vibe-coding papers already in this knowledge base.

## Key Findings

- **Both writing and CS achievement predict vibe coding.** In a preregistered, cross-sectional study (N = 100 tertiary students), written-communication proficiency correlated r = .29 with vibe-coding performance and CS achievement r = .39; both were significant independent predictors in a joint model, where CS achievement contributed roughly twice the unique variance of writing skill.
- **CS achievement survives controlling for general cognitive ability.** CS achievement remained a significant predictor (partial r = .281, p = .005) of vibe-coding performance after controlling for domain-general cognitive skills (ICAR16), indicating the relationship is not merely an artifact of general reasoning.
- **Writing works through [[prompt-engineering|prompt quality]].** Human-graded prompt quality mediated the association between writing skill and vibe-coding performance — response-process evidence that clear, structured prose translates into better natural-language prompts, supporting the construct validity of the measure and the importance of [[writing-education|written communication]] in LLM-native development.
- **CS knowledge helps even in "no-code" mode** (decomposition and algorithmic thinking are facets of [[computational-thinking]]). Because the environment hid the generated source, CS achievement could only operate indirectly (problem decomposition, mental models of control flow); the authors argue this makes their CS estimate a *lower bound* for general LLM-augmented programming where code editing is also available.
- **The pattern extends beyond GUI surface tasks.** In the data-centric, constraint-satisfying meal-planning subtask, both CS achievement (r = .320) and [[writing-education|writing]] (r = .202) remained significant predictors, tentatively suggesting the findings are not limited to surface-level GUI construction.
- **Exploratory: prior LLM usage negatively correlated with writing and vibe-coding performance** (though not with CS achievement) — the authors speculate LLMs may blunt expression, or weaker writers self-select into heavier LLM use; not causal.

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
