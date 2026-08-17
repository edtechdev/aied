---
title: "How Human-Centered Is AI-Aided Learning in Education?"
created: "2026-08-16T09:22:41-04:00"
updated: "2026-08-16"
type: article
tags: [human-centered-ai, adaptive-learning, intelligent-tutoring, ethics, equity, teacher-role, higher-ed]

sources: ['raw/papers/prezenski-human-centered-ai-aided-learning.md']
confidence: high
---

## Summary

A **narrative literature review** by Sabine Prezenski (Institute for Innovation and Technology, Berlin) that asks how human-centered AI-aided learning actually is in education. It distinguishes **data-driven** from **rule-based** AI, reviews how AI fosters (or undermines) learning from cognitive and societal perspectives, and proposes steps to make AI a genuinely supportive tool rather than a hollowing force. The organizing device is the story of **"Maya,"** a student whose AI maths tutor boosts quiz scores but steadily erodes her independence, collaboration, empathy, and privacy — a cautionary frame for evaluating the whole field.

## Data-driven vs. rule-based AI

Prezenski separates two families of AI used in learning:

- **Data-driven systems (LLMs):** ChatGPT and similar tools are general-purpose systems built on machine learning — supervised, unsupervised, reinforcement, and self-supervised learning — powered by **self-attention** and **massive scale**. Their strengths (adaptivity, feedback, scaffolding) come with three serious drawbacks: **bias**, **opacity**, and **hallucination**. These flaws arise from the same statistical paradigm that gives LLMs their power, so they resist easy fixing.
- **Rule-based systems (intelligent tutoring systems):** Designed specifically for learning, these encode the domain as explicit if-then/production rules (e.g., telling a student solving `2x + 3 = 9` to "get rid of the +3 first"). **Cognitive-model tutors** (e.g., Anderson's Cognitive Tutor) embed a theory of human learning like ACT-R, estimate the learner's knowledge state, and deliver finely targeted feedback. By design they scaffold understanding better than opaque statistical models, but they are costly and time-consuming to build.

## Blended AI: today's landscape

Most current systems blend rule-based and machine-learning components:

- **Adaptive learning engines:** ALEKS (50M+ students; Knowledge Space Theory + Bayesian inference + deep learning, ~9% topic-mastery gain; g≈0.30 historically), Squirrel AI (24M+ users), DreamBox Learning, and Khanmigo (GPT-4 Socratic tutor on a rule-based skill map, 12% accuracy improvement).
- **Learning-analytics early warning systems** (Purdue Course Signals) merging thresholds with predictive modeling.
- **Pronunciation/speech tutors** (Duolingo), **affective/multimodal tutors** (computer-vision emotion recognition), and **educational robots** with social personas.

## The cognitive paradox of AI

Prezenski identifies what she calls the **cognitive paradox**: AI can support mental-model building, self-reflection (metacognition), sustained attention, and frustration tolerance through timely feedback, tailored instruction, gamification, and fading scaffolds. But over-reliance produces the opposite:

- **Rewards undermine intrinsic motivation** (Deci & Ryan; Duolingo-style points/streaks shift focus to game maintenance, reduce dopamine sensitivity).
- **Hint-dependency and excessive scaffolding** promote task-completion over understanding, suppress independent monitoring, and leave learners overwhelmed when AI is absent.
- **Hyper-engaging content** trains "attenuated attentional control," weakening the ability to sustain focus on books or lectures.
- **Frictionless guidance** blocks "productive struggle" and real-world problem-solving resilience.

The net effect: short-term efficiency and engagement gains risk subordinating critical thinking, social cognition, and ethical development — a risk of producing students ill-prepared for the messiness of real life.

## Societal, equity, and privacy dimensions

Learning is social and ethical, not purely cognitive. AI can both facilitate and disrupt collaboration: it can enable peer debate and detect group impasse, but heavy reliance on chatbots can "privatize" learning and erode empathy and perspective-taking. Ethically, Prezenski flags:

- **Equity:** AI trained on datasets that underrepresent marginalized communities offers suboptimal adaptive pathways; e.g., speech models with ~2× higher word-error rates for African American speakers mislabel students (the "Toni" case in Maya's story).
- **Privacy/surveillance:** granular data collection (clickstreams, facial expressions) makes learners feel "always watched," inhibiting the risk-taking that deep learning requires.
- **Purpose:** AI optimized for "marketable skills" risks an overly technocratic education that treats students as data points, neglecting civic engagement, ethical reasoning, and creativity. Against this, Freire's vision of education empowering full human beings is invoked.

## Human-Centered AI (HCAI)

HCAI extends Human-Centered Design to AI. Shneiderman frames it as combining **high automation with high human control** ("augmentation over automation"); Stanford HAI embeds it in a socio-technical governance agenda; Schmager et al. define it as emphasizing **human agency**, aligning with **ethical principles**, and considering **context**. Prezenski argues that despite its rhetorical popularity, HCAI is **rarely implemented rigorously** in educational AI: UX is mistaken for human-centredness, participatory methods/value alignment/ethical reflection are often absent, educators are marginalized (Zawacki-Richter et al.), and stakeholders are consulted late if at all (Alfredo et al.).

### Why HCAI is rare and how to advance it

Reasons include the difficulty of sustained developer–educator collaboration, needs-first processes clashing with fixed-deliverable funding, a lack of hybrid expertise, and EdTech incentives favoring speed/scale/data. Proposals span **policy/funding** (open, public-interest AI), **research** (participatory methods, human-centered evaluation), **educators** (co-designers/evaluators with AI-literacy PD), **industry** (transparency, user control, open-source principles), **hybrid expertise** development, and **structural governance** (EC Expert Group on AI and Data in Education; NOLAI, the Dutch National Education Lab for AI).

## Why this matters for the wiki

- A bridge between **[[adaptive-learning]]/[[intelligent-tutoring]]** engineering and the **[[ethics]]/[[equity-in-ai-education]]** critique, all through a single Cognitive Load Theory and [[cognitive-offloading|Over-Reliance]] lens.
- Central reference for Human-Centered AI work (see [[haiml-human-centered-ai-metacognitive-model-2026]]) and the "AI makes us stupid" cognitive-harm debate (cf. [[ai-making-us-stupid]], [[brcic-effortless-trap-productive-struggle-2026]]).
- Frames the [[teacher-role]] and [[higher-ed]] implications of keeping humans in the loop ([[human-ai-collaboration]], [[ai-literacy]]).

## Connected Concepts

- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[intelligent-tutoring]]
- [[ethics]]
- [[equity-in-ai-education]]
- [[teacher-role]]
- [[higher-ed]]
- [[ai-education]]
- [[cognitive-offloading]]
- [[personalized-learning]]
- [[game-based-learning]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[llm]]
- [[educational-robotics]]
- [[knowledge-tracing]]

## Connected Articles

- [[haiml-human-centered-ai-metacognitive-model-2026]] — Human-Centered AI metacognitive model
- [[ai-making-us-stupid]] — Is AI making us stupid?
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: productive struggle, AI, and the illusion of learning
- [[genai-over-reliance-learning-2026]] — Generative AI over-reliance and learning

## Citation

Prezenski, S. (2026). [*How human-centered is AI-aided learning in education?*](https://doi.org/10.1007/978-3-032-26816-7_21). In K. Tödt et al. (eds.), *Digital Education and Innovation*. Springer (Open Access).
