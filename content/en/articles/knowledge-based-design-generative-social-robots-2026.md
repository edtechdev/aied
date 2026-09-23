---
title: "Knowledge-Based Design Requirements for Generative Social Robots in Higher Education"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [design-thinking]
technology: [educational-robotics, generative-ai, intelligent-tutoring]
methods: [qualitative-research]
ethics: [ethics, privacy]
research_method: [interviews]
level: [higher ed]
sources: ['raw/papers/vonschallen-knowledge-based-gsr-higher-ed-2026.md']
confidence: high
audience: [instructional designers]
---

> **Synthesis:** Vonschallen, Oberle, Schmiedel, and Eyssel (2026) adopt a knowledge-based design perspective to investigate what information tutoring-oriented generative social robots (GSRs) require to function responsibly and effectively in higher education. Recognizing that GSRs powered by large language models enable adaptive, conversational tutoring but introduce risks such as misinformation, [[cognitive-offloading|overreliance]], and privacy violations, they conducted twelve semi-structured interviews with university students and lecturers, identifying twelve design requirements across three knowledge types: self-knowledge, user-knowledge, and (a third type concerning the domain/context).

## Key Findings

- **Generative social robots (GSRs) powered by LLMs enable adaptive, conversational tutoring** but introduce risks such as **misinformation, overreliance, and privacy violations**.
- Existing frameworks for educational [[ai-technologies|technologies]] and responsible AI define desired behaviors but **rarely specify the knowledge prerequisites** that enable generative agents to express those behaviors reliably.
- Based on **twelve semi-structured interviews** with university students and lecturers, the study identified **twelve design requirements across three knowledge types** (self-knowledge, user-knowledge, and domain/context knowledge).
- The findings offer a **knowledge-based design perspective** for building responsible, effective tutoring GSRs in higher education.

## Study Design & Method

This is a **[[qualitative-research|qualitative]] interview study**. The [[research-methods-aied|researchers]] conducted twelve semi-structured interviews with university students and lecturers to identify the knowledge prerequisites that tutoring-oriented generative social robots need to function responsibly and effectively in higher education. Using a knowledge-based design perspective, they analyzed the interviews to derive twelve design requirements organized across three knowledge types (self-knowledge, user-knowledge, and domain/context knowledge), addressing the gap between responsible-AI behavior frameworks and the informational requirements generative agents need.

## What this means for practice

- **Designers.** Specify a tutoring robot's self-, user-, and context-knowledge as separate components rather than one prompt: the 12 interviews produced twelve requirements and 642 coded segments across those three knowledge types.
- **Designers.** Make assertiveness a configurable, adaptive setting instead of a fixed persona: most participants wanted a study-buddy role, but desired strictness varied with learning goals, motivation type, and upcoming deadlines.
- **Designers.** Ground explanations in the actual course corpus — slides, exercises, literature, timetables — through retrieval rather than the base model, so tutoring stays course-specific instead of generic.
- **Administrators.** Adopt privacy-by-design defaults before piloting: require informed consent, keep personal data out of model training, let students control what the robot may perceive, and prefer locally deployable models in strict data-protection settings.
- **Researchers.** Test the requirements in an implementation study: the twelve requirements were identified but not yet empirically validated, so their contribution relative to embodiment and adaptivity remains unmeasured.


## Limitations

The findings derive from twelve interviews in a specific higher-education context, so they may not generalize across disciplines, institutions, or learner populations. The design requirements are identified but not yet fully validated through implementation and evaluation. The focus is on the knowledge prerequisites of tutoring robots rather than on broader social-robot design or measured [[learning-gains|learning outcomes]].

## Connected Concepts

- [[educational-robotics]]
- [[generative-ai]]
- [[llm]]
- [[higher-ed]]
- [[intelligent-tutoring]]
- [[ethics]]

## Connected Articles

- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini: A Knowledge-Based Generative Social Robot
- [[task-context-trust-educational-hri-2026]] — Task Context and Trust in Educational HRI
- [[human-autonomy-agency-hri-review-2025]] — Human Autonomy and Agency in HRI

## Citation

Vonschallen, S., Oberle, D., Schmiedel, T., & Eyssel, F. (2026). [*Knowledge-based design requirements for generative social robots in higher education*](https://arxiv.org/abs/2602.12873).
