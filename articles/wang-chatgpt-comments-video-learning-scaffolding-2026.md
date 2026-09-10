---
title: "Assessing ChatGPT-Generated Comments for Video-Based Learning Content to Enhance Knowledge and Emotional Support Based on Scaffolding Theory"
created: "2026-09-10T15:16:00-04:00"
updated: "2026-09-10T15:16:00-04:00"
type: article
tags: [generative-ai, scaffolding, video-education, online-teaching-and-learning, feedback, motivation, student-engagement, multimodal, learning-analytics, agentic-ai, prompt-engineering]
research_method: [experiment, user study]
audience: [learners, instructors, learning designers, researchers]
level: [higher ed]
category: [instructional design, engagement]
sources: ['raw/papers/wang-chatgpt-comments-video-learning-scaffolding-2026.md']
confidence: high
---

> **ChatGPT-generated in-video comments as scaffolding** — Wang, Du and Jin (2026) design and evaluate a framework that generates *i-Comments*: short support messages displayed inside an educational video, scrolling in sync with the content, so learners receive [[scaffolding]] without pausing or switching interfaces. The framework translates [[scaffolding|scaffolding theory]], Vygotsky's [[sociocultural-learning|ZPD]], [[cognitive-offloading|cognitive load]] theory, and multimedia [[learning-theories|learning theory]] into technical components — [[multimodal]] video analysis, an **entropy-based timing** mechanism that places comments in low-information intervals, comment-type definition, and [[prompt-engineering|prompt engineering]]. Across two studies the authors find ChatGPT-generated comments to be **more complex, more adjective-heavy, less lexically diverse, and less topically aligned to the video than human comments** — a gap that is widest for [[social-emotional-learning|emotional support]] — while an ablation study shows each theory-derived prompt module contributes measurably to perceived quality and that a newer model narrows the human advantage on timing and helpfulness.

## Overview

[[video-education|Video-based learning]] dominates online education, but it weakens the [[online-teaching-and-learning|online]] learner's sense of connection, offers few opportunities for immediate [[feedback]], and strains sustained attention. Existing GenAI support in this space — [[intelligent-tutoring|tutoring systems]] and [[conversational-ai|chatbot]] companions — typically requires learners to pause the video, switch interfaces, and formulate a query, which adds extraneous cognitive load and breaks the learning flow. Prior work by the same group proposed **i-Comments**, real-time individually addressed comments rendered inside the video frame; the bottleneck was that they had to be generated manually, which does not scale.

This study asks whether [[generative-ai|generative AI]] can generate them instead, and whether the result matches human equivalents. Three research objectives structure the work: translate learning theory into operational design principles, validate generation quality against human comments on linguistic, [[pedagogy|pedagogical]], and perceptual dimensions, and draw out implications for [[agentic-ai|agentic]] educational support systems.

## Translating theory into a pipeline

The framework's central claim is [[research-methods-aied|methodological]]: pedagogical theory is systematically converted into technical components rather than invoked as framing.

- **Cognitive load theory** → an **entropy analysis** mechanism. Frame-level visual entropy is smoothed into a complexity trajectory; intervals below the sequence's mean entropy are treated as low-load windows where a comment will not compete with the primary content. In the illustrative 360-second video (mean entropy 6.730 bits) it detected 15 low-entropy periods.
- **Vygotsky's ZPD** → an **individual information setting** that would adjust comment depth to learners' [[prior-knowledge|prior knowledge]] (specified but not activated in this study, since pre-test scores and prior experience did not differ across participants).
- **Fading scaffolding** → a **comment attribute setting** that reduces the frequency of knowledge support over the video timeline as learners gain competence.
- **Distributed scaffolding** → **content categories** splitting every comment into *knowledge support* (explanation, supplement, hint, key point) or *emotional support* (encouragement, empathy, motivation).
- **Multimedia learning theory** → **customized display** options (font, size, display speed) intended to optimize processing.

The authors also describe how the pipeline would extend to a [[pedagogical-agent|multi-agent]] system: a monitoring agent capturing behavioural signals (repeated viewing, perceived difficulty, fatigue), a decision agent choosing support type and timing, a support agent retrieving or generating the comment, and a validation agent checking alignment with instructional purpose.

## Study 1 — ChatGPT comments versus instructor comments

Using structured prompts that specified comment type and target video segment, ChatGPT (GPT-3.5) produced **1,000 comments across 20 sessions** for a six-minute instructional clip (500 knowledge, 500 emotional); experienced instructors of Japanese history generated **120 comments** in real time while watching the same clip (75 knowledge, 45 emotional).

- **Part-of-speech [[writing-education|composition]].** ChatGPT leaned on nouns (30.75% of knowledge-support tokens) and used markedly more adjectives than humans (13.99% vs. 6.92% in knowledge support; 12.90% vs. 7.21% in emotional support), while humans used pronouns more evenly across both categories.
- **Structural diversity.** Human comments showed a POS 3-gram diversity ratio of 25.1–38.5%; ChatGPT's was only 5.5–6.2%. ChatGPT produced roughly 7–14× more 3-grams in total but only about 1.5–2× as many unique ones — it reuses the same linguistic structures.
- **Naturalness of word frequency.** Both comment sets conformed to Zipf's law (R² > 0.95), but ChatGPT showed larger average deviations.
- **Readability.** ChatGPT scored higher on every readability index (Flesch-Kincaid, Gunning Fog, SMOG, ARI, Coleman-Liau) in both categories — that is, its comments were harder to understand, a mismatch with learners' comprehension levels that the authors flag as especially consequential for novices.
- **Topical relevance.** Human comments aligned more closely with video content on both measures. Knowledge support: human 0.747 BERTScore / 0.864 TF-IDF vs. ChatGPT 0.607 / 0.771. Emotional support: human 0.574 / 0.753 vs. ChatGPT 0.317 / 0.457. The human advantage was larger for emotional support than for knowledge support, indicating weaker handling of emotionally nuanced content.
- **Learner perception.** Forty undergraduates and graduate students (aged 19–23) watched the same NHK high-school Japanese-history video in both conditions and rated comments on naturalness, consistency, timing, and helpfulness (5-point Likert; Mann–Whitney U tests). Human comments held a statistically significant advantage on **timing** (r = 0.32) and **helpfulness** (p = .003, r = 0.46, approaching a large effect), with no significant differences on naturalness (p = .114) or consistency.

## Study 2 — ablation and model update

A four-condition ablation (P0 full prompt; P1 without comment-type definition; P2 without entropy-based timing; P3 without content examples) was run with a newer model (GPT-5.4) on 20 new participants, each watching four six-minute videos rated on the same criteria plus an overall preference.

- **Model version matters.** P0 (GPT-5.4, full prompt) beat the original GPT-3.5 condition on all four criteria, with the biggest gains precisely on the two dimensions where humans had won: timing (M 3.65 → 4.35) and helpfulness (3.95 → 4.40), plus naturalness (3.85 → 4.40) and a smaller consistency gain (4.70 → 4.85).
- **Every theory-derived module contributes.** Removing the comment-type definition significantly lowered helpfulness (Z = −2.53, r = 0.40, p = .011) and consistency (p = .039); removing entropy-based timing lowered perceived timing (Z = −2.85, r = 0.45, p = .004) — the strongest effect in the study; removing content examples lowered naturalness (p = .027) and timing (p = .021). Because each module instantiates one pedagogical principle, the authors read these results as empirical support for the theory-to-implementation mapping itself, not just for a prompt recipe.
- **Overall.** Beyond the ablation, the framework's [[learning-analytics|analytics]] combination — linguistic metrics (POS, 3-gram diversity, Zipf conformity), semantic metrics (BERTScore, TF-IDF), readability, and learner perception — is offered as a reusable pipeline for judging AI-generated instructional content.

## Implications

- **Timing is a pedagogical variable, not a packaging detail.** Converting cognitive load theory into an entropy threshold turns "when should support appear" into a computable scheduling decision — and the ablation shows it is the module learners notice most when it is removed.
- **AI comments are not yet a drop-in replacement for instructor comments.** The generated text is denser and more uniformly structured, less topically anchored, and weakest exactly where empathy matters; the honest reading of the study is that current models need domain calibration and learner-adaptive control before deployment. The authors also note the human advantage was measured with an older model and partly reflects model capability.
- **Emotional support is the harder target.** The larger relevance gap in emotional support (and the model's preference for generic, adjective-heavy phrasing) suggests that [[affective-computing|affective]] [[scaffolding]] is where design and evaluation effort should concentrate — a recurring theme in work on [[social-emotional-learning|SEL]] and AI.
- **Scaffolding can be distributed and faded automatically.** Knowledge and emotional support are generated as distinct categories and knowledge support thins over the timeline, showing how fading scaffolding and distributed scaffolding can be operationalized at scale rather than planned by hand.
- **The path forward is multi-agent and individualized.** The individual-information component was deliberately not activated here, so [[personalized-learning|personalization]] remains untested; the proposed monitoring–decision–support–validation agent architecture is the authors' route to real-time adaptivity.
- **Limitations to carry forward.** A single domain (Japanese history), a six-minute clip, small samples, a pre-proof single-family model comparison (GPT-3.5 vs. GPT-5.4), and reliance on perception rather than [[learning-gains|learning outcome]] measures all constrain generalization.

## Connected Concepts

- [[scaffolding]]
- [[video-education]]
- [[generative-ai]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[online-teaching-and-learning]]
- [[student-engagement]]
- [[motivation]]
- [[multimodal]]
- [[learning-analytics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[social-emotional-learning]]
- [[sociocultural-learning]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]

## Connected Articles

- [[ai-guided-learning-audiovideo-2026]] — How students guide AI in audio/video learning support
- [[engagement-assessment-video]] — Engagement assessment in video learning
- [[rethinking-scaffolding-llm-tutors]] — Design patterns for scaffolding in LLM tutors
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM prompting as a structured learning intervention
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos over human-recorded ones
- [[ai-video-dual-gatekeeping-2026]] — Dual gatekeeping for pedagogically grounded AI video creation
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: adaptive pedagogical video generation
- [[yasir-llm-tutoring-agents-2026]] — LLM tutoring feedback: accurate diagnosis ≠ actionable feedback
- [[bilingual-llm-lecture-companion-srl-2026]] — Bilingual LLM lecture companion supporting self-regulated learning

## Citation

Wang, J., Du, Y., & Jin, Q. (2026). [Assessing ChatGPT-Generated Comments for Video-Based Learning Content to Enhance Knowledge and Emotional Support Based on Scaffolding Theory](https://doi.org/10.1016/j.caeai.2026.100676). *Computers and Education: Artificial Intelligence*, 100676.
