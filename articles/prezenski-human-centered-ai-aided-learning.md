---
title: "How Human-Centered Is AI-Aided Learning in Education?"
created: "2026-08-16T09:22:41-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
foundations: [teacher-role]
technology: [adaptive-learning, intelligent-tutoring]
ethics: [equity-in-ai-education, ethics]
research_method: [literature review]
audience: [instructors]
level: [higher ed]

sources: ['raw/papers/prezenski-human-centered-ai-aided-learning.md']
confidence: high
---

> **Synthesis:** A **narrative [[meta-analysis-systematic-review|literature review]]** by Sabine Prezenski (Institute for Innovation and Technology, Berlin) that asks how human-centered AI-aided learning actually is in education. It distinguishes **data-driven** from **rule-based** AI, reviews how AI fosters (or undermines) learning from cognitive and societal perspectives, and proposes steps to make AI a genuinely supportive tool rather than a hollowing force. The organizing device is the story of **"Maya,"** a student whose AI maths tutor boosts quiz scores but steadily erodes her independence, collaboration, empathy, and privacy — a cautionary frame for evaluating the whole field.

## Data-driven vs. rule-based AI

Prezenski separates two families of AI used in learning:

- **Data-driven systems (LLMs):** ChatGPT and similar tools are general-purpose systems built on [[reinforcement-learning|machine learning]] — supervised, unsupervised, reinforcement, and self-supervised learning — powered by **self-attention** and **massive scale**. Their strengths (adaptivity, feedback, [[scaffolding]]) come with three serious drawbacks: **bias**, **opacity**, and **hallucination**. These flaws arise from the same statistical paradigm that gives LLMs their power, so they resist easy fixing.
- **Rule-based systems (intelligent tutoring systems):** Designed specifically for learning, these encode the domain as explicit if-then/production rules (e.g., telling a student solving `2x + 3 = 9` to "get rid of the +3 first"). **Cognitive-model tutors** (e.g., Anderson's Cognitive Tutor) embed a theory of human learning like ACT-R, estimate the learner's knowledge state, and deliver finely targeted feedback. By design they scaffold understanding better than opaque statistical models, but they are costly and time-consuming to build.

## Blended AI: today's landscape

Most current systems blend rule-based and [[machine-learning]] components:

- **Adaptive learning engines:** ALEKS (50M+ students; Knowledge Space Theory + Bayesian inference + deep learning, ~9% topic-mastery gain; g≈0.30 historically), Squirrel AI (24M+ users), DreamBox Learning, and Khanmigo (GPT-4 [[socratic-method|Socratic]] tutor on a rule-based skill map, 12% accuracy improvement).
- **[[learning-analytics]] early warning systems** (Purdue Course Signals) merging thresholds with predictive modeling.
- **Pronunciation/speech tutors** (Duolingo), **[[affective-computing|affective]]/[[multimodal]] tutors** (computer-vision emotion recognition), and **educational robots** with social personas.

## The cognitive paradox of AI

Prezenski identifies what she calls the **cognitive paradox**: AI can support mental-model building, self-reflection ([[metacognition]]), sustained attention, and frustration tolerance through timely feedback, tailored instruction, [[game-based-learning|gamification]], and fading scaffolds. But over-reliance produces the opposite:

- **Rewards undermine [[motivation|intrinsic motivation]]** (Deci & Ryan; Duolingo-style points/streaks shift focus to game maintenance, reduce dopamine sensitivity).
- **Hint-dependency and excessive scaffolding** promote task-completion over understanding, suppress independent monitoring, and leave learners overwhelmed when AI is absent.
- **Hyper-engaging content** trains "attenuated attentional control," weakening the ability to sustain focus on books or lectures.
- **Frictionless guidance** blocks "[[desirable-difficulties|productive struggle]]" and real-world [[problem-solving]] resilience.

The net effect: short-term efficiency and [[student-engagement|engagement]] gains risk subordinating [[critical-thinking|critical thinking]], social cognition, and ethical development — a risk of producing students ill-prepared for the messiness of real life.

## Societal, equity, and privacy dimensions

Learning is social and ethical, not purely cognitive. AI can both facilitate and disrupt collaboration: it can enable peer debate and detect group impasse, but heavy reliance on [[conversational-ai|chatbots]] can "privatize" learning and erode empathy and perspective-taking. Ethically, Prezenski flags:

- **Equity:** AI trained on datasets that underrepresent marginalized communities offers suboptimal adaptive pathways; e.g., speech models with ~2× higher word-error rates for African American speakers mislabel students (the "Toni" case in Maya's story).
- **Privacy/surveillance:** granular data collection (clickstreams, facial expressions) makes learners feel "always watched," inhibiting the risk-taking that deep learning requires.
- **Purpose:** AI optimized for "marketable skills" risks an overly technocratic education that treats students as data points, neglecting civic engagement, ethical reasoning, and [[creativity]]. Against this, Freire's vision of education empowering full human beings is invoked.

## Human-Centered AI (HCAI)

HCAI extends Human-Centered Design to AI. Shneiderman frames it as combining **high automation with high human control** ("augmentation over automation"); Stanford HAI embeds it in a socio-technical [[governance]] agenda; Schmager et al. define it as emphasizing **human agency**, aligning with **ethical principles**, and considering **context**. Prezenski argues that despite its rhetorical popularity, HCAI is **rarely implemented rigorously** in educational AI: UX is mistaken for human-centeredness, participatory methods/value alignment/ethical reflection are often absent, educators are marginalized (Zawacki-Richter et al.), and stakeholders are consulted late if at all (Alfredo et al.).

### Why HCAI is rare and how to advance it

Reasons include the difficulty of sustained developer–educator collaboration, needs-first processes clashing with fixed-deliverable funding, a lack of hybrid expertise, and EdTech incentives favoring speed/scale/data. Proposals span **policy/funding** (open, public-interest AI), **[[research-methods-aied|research]]** (participatory methods, human-centered evaluation), **educators** (co-designers/evaluators with AI-literacy PD), **industry** (transparency, user control, [[open-source]] principles), **hybrid expertise** development, and **structural governance** (EC Expert Group on AI and Data in Education; NOLAI, the Dutch National Education Lab for AI).

## Why this matters for the knowledge base

- A bridge between **[[adaptive-learning]]/[[intelligent-tutoring]]** engineering and the **[[ethics]]/[[equity-in-ai-education]]** critique, all through a single Cognitive Load Theory and [[cognitive-offloading|Over-Reliance]] lens.
- Central reference for Human-Centered AI work (see [[haiml-human-centered-ai-metacognitive-model-2026]]) and the "AI makes us stupid" cognitive-harm debate (cf. [[ai-making-us-stupid]], [[brcic-effortless-trap-productive-struggle-2026]]).
- Frames the [[teacher-role]] and [[higher-ed]] implications of keeping humans in the loop ([[human-ai-collaboration]], [[ai-literacy]]).

## What this means for practice

- **Instructors.** Withhold frictionless answer-giving: fading scaffolds and letting students sit with difficulty are what preserve the mental-model building and frustration tolerance the review credits AI with supporting, while hint-dependency trades understanding for task completion.
- **Instructors.** Audit the reward structure of any gamified tool before adopting it — points, streaks, and leaderboards shift attention to maintaining the game and can dampen [[motivation|intrinsic motivation]] — and keep rewards attached to learning rather than to activity.
- **Instructors.** Pair AI use with peer work deliberately: heavy reliance on [[conversational-ai|chatbots]] can privatize learning and erode empathy and perspective-taking, so schedule debate, group impasse, and perspective-taking tasks alongside individual AI sessions.
- **Instructors.** Check equity before deployment at course level: speech and adaptive models trained on unrepresentative data have shown roughly 2× higher word-error rates for African American speakers and weaker adaptive pathways for marginalized students, and granular data logging (clickstreams, facial expressions) suppresses the risk-taking that deep learning requires.
- **Instructors.** Claim a design seat rather than accepting polished UX as human-centeredness: educators are routinely marginalized in educational AI development and consulted late, so ask for co-designer and evaluator roles, [[ai-literacy]] professional development, and transparency and user control as procurement conditions.

## Limitations

- This is a narrative review with no stated search protocol, databases, or inclusion criteria, and its examples (ALEKS at 50M+ students, Squirrel AI, DreamBox, Khanmigo) are selected illustratively; the effect sizes it cites — g ≈ 0.30 for ALEKS and g ≈ 0.87 for ChatGPT-integrated instruction from a 2025 meta-analysis — are reported secondhand from other studies.
- The cautionary core of the argument is a constructed narrative ("Maya," a student whose AI math tutor erodes her independence), not a study, so the cognitive-paradox harms (reward desensitization, attenuated attentional control, hint-dependency) are argued from cited literature rather than measured here.
- The claim that Human-Centered AI is rarely implemented rigorously in education rests on cited secondary sources describing UX being mistaken for human-centeredness and educators being consulted late (Zawacki-Richter et al.; Alfredo et al.); the review itself codes no design processes to quantify how widespread the problem is.
- The review spans higher education and technology-mediated learning broadly, drawing no primary data from learners, teachers, or developers, so it identifies the risk surface and proposed remedies rather than testing whether either changes outcomes.

## Connected Concepts

- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[ethics]]
- [[equity-in-ai-education]]
- [[teacher-role]]
- [[higher-ed]]
- [[ai-education]]
- [[cognitive-offloading]]
- [[personalized-learning]]
- [[game-based-learning]]
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
