---
title: "The StudyChat Dataset: Analyzing Student Dialogues With ChatGPT in an Artificial Intelligence Course"
created: "2026-08-16T18:05:58-04:00"
updated: "2026-08-16"
type: article
tags: [llm, intelligent-tutoring, learning-analytics, pedagogical-agent, cs-education, student-experience, cognitive-offloading, self-regulated-learning]
research_method: [benchmark]
discipline: [cs education]
audience: [learners, software developers]

sources: ['raw/papers/studychat-student-dialogues-chatgpt-ai-course-2026.md']
confidence: high
---

> **Synthesis:** McNichols, Ikram and Lan (2026) introduce **StudyChat**, a publicly available dataset capturing real-world student interactions with an [[llm]]-powered tutoring [[conversational-ai|chatbot]] in a semester-long, university-level AI course. Across two semesters (Fall 2024, Spring 2025) at UMass Amherst, 203 consenting students (of 295 enrolled) produced 2,214 student–LLM conversations totalling 16,851 utterances across 7 programming assignments, plus 924 graded submissions from 158 students. Interactions were logged via a custom web app that replicates ChatGPT's core functionality (backed by gpt-4o-mini), and every utterance was annotated with a two-level dialogue-act (DA) schema (8 broad, 31 specific labels) validated through human and LLM agreement (Cohen's κ = 0.91 broad-level). Regression and clustering analyses find that students who prompt LLMs for conceptual understanding and coding help tend to perform better on assignments and exams, while those who use LLMs to write reports and circumvent assignment learning objectives have lower exam outcomes — providing data-driven evidence for how student LLM usage relates to [[learning-gains]].

## Key Findings

**The dataset.** StudyChat comprises 16,851 annotated student utterances and LLM responses over 7 graded Python assignments, with a mean conversation length of 7.6 utterances (median 4.0) and an average of 83 utterances and 10.9 conversations per student. It is released publicly on Hugging Face, alongside assignment instructions, starter code, and 924 graded submissions. The dialogue-act schema has 8 broad categories (Writing, Editing, Contextual Questions, Conceptual Questions, Verification, Context, Off-Topic, Misc) and 31 specific labels, built on prior co-programming work and the authors' [[meta-analysis-systematic-review|systematic review]] of the conversations.

**DA labeling at scale.** The schema was validated via two-pass human annotation (Cohen's κ = 0.910 broad / 0.788 specific on the schema-development set; 0.740 broad / 0.575 specific in a four-way held-out set), then applied to the full corpus using an LLM-[[prompt-engineering|prompting]] approach (GPT-4.1), with human–LLM agreement (0.58 broad / 0.49 specific) on par with human inter-annotator agreement. PII was scrubbed with a regex pipeline, removing 6,413 possible exposure cases.

**Conceptual and coding help predict success.** Regression analyses found that specific DA features (8 broad / 31 specific counts) added substantial explanatory power over a prior-outcome baseline (mean R² improving to 0.487 for specific DAs in Fall), and that *Conceptual Questions* and *Editing Requests* were significantly **positively** correlated with exam outcomes in the Spring semester. Students who asked conceptual, general-knowledge questions (e.g. Python library, programming language) tended to perform better — consistent with learning-focused usage.

**Report-writing and circumvention predict worse outcomes.** Conversely, DA features corresponding to using the LLM to write reports and circumvent assignment learning objectives were **negatively** correlated with outcomes — behavior consistent with [[cognitive-offloading|Over-Reliance]] on the model. *Contextual Questions* (course-specific, assignment-context questions) were negatively correlated with assignment outcomes across both semesters — a potential indicator of student confusion. Notably, *Conceptual Question – [[math-education]]* was a strong negative indicator on the n-gram assignment (a6), suggesting gpt-4o-mini gives poor or inconsistent mathematical explanations/derivations that students should verify.

**Usage level and variability.** Low (bottom 10%), medium, and high (top 10%) interaction users had similar average outcomes, but high users showed **reduced variance and higher minimum scores** (e.g. Spring e1: 77.8% / 81.0% / 88.1% for low/medium/high). The authors suggest consistent, meaningful LLM usage — especially conceptual questioning — may help stabilize performance, particularly for students needing extra guidance.

**Behavioral clusters.** K-means clustering (k=4) of DA feature vectors surfaced interpretable student styles — *Code Writers*, *Coding Question*, *General Question*, and *Report Writers* — with report-writers trending to lower average exam scores (83.8 ± 11.7) than coding-question students (89.0 ± 7.3). The authors caution that while clusters are interpretable, neither usage-level nor cluster features were consistently statistically significant predictors of overall course outcome (single-course, limited sample).

## Connected Concepts

- [[llm]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[help-seeking]]
- [[cs-education]]
- [[learning-gains]]
- [[educational-nlp]]

## Connected Articles

- [[principal-trait-analysis-human-ai-skills-2026]] — PTA derives traits from human–AI collaboration using StudyChat
- [[ai-cognitive-partner-co-regulation-learning]] — AI as a cognitive partner for co-regulated learning
- [[chatgpt-programming-education-text-mining]] — ChatGPT in programming education
- [[genai-mindtool-generative-learning]] — GenAI as a mindtool for generative learning
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT hints vs human tutor learning gains

## Citation

McNichols, H., Ikram, F., & Lan, A. (2026). [*The StudyChat Dataset: Analyzing Student Dialogues With ChatGPT in an Artificial Intelligence Course*](https://arxiv.org/abs/2503.07928). In *Proceedings of the 16th International Learning Analytics and Knowledge Conference (LAK '26)*, Bergen, Norway. ACM. https://doi.org/10.48550/arXiv.2503.07928
