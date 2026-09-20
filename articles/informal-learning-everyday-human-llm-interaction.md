---
title: Informal Learning Emerges in Everyday Human-LLM Interaction
created: "2026-07-22T04:33:04-04:00"
updated: "2026-09-20T03:44:50-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition, self-regulated-learning]
technology: [generative-ai, llm]
methods: [qualitative-research, quantitative-research]
stakeholders: [student-experience]
audience: [researchers, learners]
sources: ['raw/papers/2607.17643.md']
confidence: high
---

> **Synthesis:** Analyzing 128,569 naturalistic human–LLM conversations, the authors translate learning-science constructs into turn-level behavioral signatures and find that everyday [[llm]] use is not only answer delivery or [[cognitive-offloading|cognitive offloading]]: roughly a third of user turns show cognitive engagement and about one in twenty show the deeper constructive sense-making that learning science associates with stronger outcomes. Constructive participation is selective and conditionally organized — shaped by user framing, task ecology, interaction depth, and above all by whether assistant turns offer scaffolded support such as feedback and explanation.

## Overview

As LLMs become capable of completing tasks for users, a central educational worry is that everyday AI use collapses into cognitive offloading, eroding the opportunities through which people develop their own capabilities. Most research on LLMs and learning has instead studied settings where learning support is deliberately designed — automated feedback, question generation, retrieval practice, tutoring systems — which shows what LLMs can do when instruction is an explicit design target, but says little about general-purpose use where users simply seek progress on a task. Everyday use is also harder to study: it follows no curriculum and yields no direct measure of knowledge change, making learning easy to posit but difficult to observe.

This study treats everyday human–LLM interaction as a vast, largely undesigned setting for *informal* learning — learning that occurs outside structured curricula, instruction or assessment, often incidental to the person's primary objective. It asks whether learning-oriented engagement behaviors exist in ordinary LLM use, where the most constructive forms arise, and what factors shape them, using learning-science process indicators as observable proxies for [[student-engagement|engagement]] in exchanges whose goals are not set by a study protocol.

## Study Design & Method

The authors analyze naturalistic public human–LLM conversations as observational digital traces, drawing on three public large-scale corpora: WildChat-4.8M (public non-toxic release), LMSYS Chat-1M, and ShareChat (strict-English subset), following large-scale digital-trace and computational social-science practice. Records were organized into role-ordered user–assistant conversations and screened with corpus-specific language filters and a minimum of four message turns to keep the analysis within an English-oriented scope.

Coding- and writing-oriented conversations were isolated with LLM-assisted semantic task filters because these are two prominent, high-salience AI-mediated knowledge-work domains that make learning-oriented participation visible in different ways: coding externalizes uncertainty through errors, constraints, execution failures and iterative testing, whereas writing involves drafting, revision and evaluative choice whose rationale may stay implicit unless users articulate it. The final corpus contains **128,569 conversations and 981,470 total turns — 491,685 user turns and 489,785 assistant turns** — yielding six analytic settings (each corpus × coding/writing). [[scaffolding]] was operationalized with two parallel descriptors: a support-*intent* label (metacognitive, cognitive, affective) and non-exclusive support-*form* labels (feedback, hinting, instructing, explaining, modeling, questioning).

Conversations were analyzed at three scales — conversations, turns, and adjacent user–assistant–user sequences — using turn-weighted ratios, bootstrap tests, and covariate-adjusted Poisson, logistic, and rate models with dataset and task-ecology fixed effects. Support was observed rather than assigned, so the design captures naturally occurring covariation and sequencing rather than causal effects, and robust checks confirmed the main findings held across different model conditions (for example GPT-4- versus GPT-3.5-class systems, or GPT versus Gemini families).

## Key Findings

- Across 491,685 user turns, **31.9% showed cognitive engagement** and **4.9% reached constructive engagement** (per the source tables, 31.94% and 4.93%), the deepest observable user-side signal — so broad participation was common but deeper sense-making remained selective rather than routine.
- Within cognitively engaged turns, active engagement dominated in every setting (62.0–86.4%), constructive engagement accounted for 10.0–33.7%, and passive receipt for just 1.2–14.6%.
- Explicit learning-oriented framing amplified engagement but did not define it: framing lifted cognitive engagement by +17.7 to +51.3 percentage points and constructive engagement by +2.5 to +12.8 points, yet constructive turns still appeared in task-oriented exchanges where learning was incidental to solving the problem.
- Task ecology mattered: coding-oriented conversations showed consistently higher engagement than writing-oriented ones — cognitive engagement 45.00–50.21% in coding versus 15.30–33.05% in writing, and constructive engagement 5.44–15.17% versus 1.53–5.18%.
- Sustained exchange created more opportunity: relative to conversations with 2–3 user turns, the per-turn odds of constructive engagement were 13% higher in conversations with 4–6 user turns (OR=1.13) and 6% higher in those with 7 or more (OR=1.06).
- Scaffolded support was a common interactional condition, appearing in 31.7% of assistant turns. Conversations containing at least one scaffolded assistant turn had higher turn-weighted constructive user-turn ratios than reference conversations in all six task settings (differences +0.99 to +7.34 percentage points; all six distinguished from zero, p < .001) and more turns after the first assistant response (+1.42 to +3.38).
- The scaffolding association survived adjustment: Poisson count ratios 1.569–2.491 and logistic odds ratios 1.437–2.140 for conversations containing at least one constructive turn, with rate ratios 1.356–1.703 treating user turns as exposure — and the positive direction held in both explicitly framed and non-explicitly framed conversations.
- Support *form* differentiated the association. Feedback-like support showed the largest constructive-engagement contrast (+14.7 versus +6.7 percentage points under explicit framing), followed by explaining (+6.7 versus +3.0), while hinting was positive but smaller and instructing and questioning were lower or negative — instructing, modeling and questioning varied more strongly by task.
- Adjacent-turn analyses showed scaffolded assistant turns were more likely than reference turns to be followed by constructive engagement in all six settings (next-turn lift +0.27 to +6.21 percentage points, five of six statistically distinguishable), and coupling depended on the user's immediately preceding state.
- In the authors' interpretation, feedback "makes a prior attempt evaluable" and explanation "makes reasons and mechanisms inspectable" — the forms that make generated content judgeable, not merely usable, are those most aligned with visible constructive elaboration.

## What this means for practice

- **Researchers.** Operationalize learning as observable process indicators rather than outcome proxies: across 491,685 user turns, 31.9% showed cognitive engagement and 4.9% reached constructive engagement, so blanket prohibition would misread ordinary exchanges that already contain measurable learning behavior.
- **Researchers.** Test the form of support, not just its presence: feedback-like support showed the largest constructive-engagement contrast (+14.7 versus +6.7 percentage points under explicit framing), followed by explaining (+6.7 versus +3.0), while instructing and questioning were lower or negative - and process measures of this kind give an evaluation target for interfaces beyond answer-delivery efficiency.
- **Learners.** Ask for feedback on an attempt you have already made and for explanations of reasons and mechanisms - the support forms that make generated content judgeable - rather than directives or bare answers.
- **Learners.** Stay past the first reply: the per-turn odds of constructive engagement were 13% higher in conversations with 4-6 user turns (OR = 1.13) than in the 2-3-turn reference.
- **Learners.** Say that you want to learn: explicit learning-oriented framing lifted cognitive engagement by 17.7 to 51.3 percentage points, and constructive turns still appeared in task-oriented exchanges where learning was incidental.

## Limitations

- Observational digital traces (128,569 conversations, 981,470 turns across WildChat-4.8M, LMSYS Chat-1M and ShareChat): assistant support was observed rather than assigned, which limits causal inference to naturally occurring covariation and sequencing.
- The logs characterize population-level patterns, not longitudinal learner histories: users' prior knowledge, motivation, goals outside the conversation and later learning outcomes are not recorded.
- Engagement labels (31.9% cognitive, 4.9% constructive) are behavioral indicators, not direct evidence of retention, transfer or skill development.
- The corpus is confined to English-language coding and writing conversations of at least four message turns, so the authors state that generality to other domains, languages, interfaces and institutional settings is untested.

## Connected Concepts
- [[cognitive-offloading]]
- [[critical-thinking]]

- [[llm]]
- [[ai-literacy]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]

## Connected Articles

- [[learning-by-chatting-genai-impact]] — Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
- [[bloom-aligned-educational-control-llms]] — From Execution to Education: A Bloom-Aligned Framework for Measuring Educational Control in LLMs
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[youtube-frames-chatgpt-education]] — How YouTube Frames ChatGPT Use in Education: An Epistemic Network Analysis with Supporting Multimodal Metadata
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively Discordant Completion and the Aware Pass-Through of Non-Understanding in Generative AI Learning
- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning

## Citation

Zixin Chen, Haotian Li, Ziang Xiao, Huamin Qu, et al. (2026). [Informal Learning Emerges in Everyday Human-LLM Interaction](https://arxiv.org/abs/2607.17643). .
