---
title: Inclusive Learning
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: concept
tags: [inclusive-learning, equity-in-ai-education, special-education, learning-design, neurodiversity, universal-design-for-learning, ai-education, higher-ed]
level: [special education, higher ed]
category: [instructional design]
confidence: high
---

> **Inclusive Learning** — the design and delivery of educational experiences that accommodate diverse learner needs, spanning physical, cognitive, sensory, and situational differences. In AI in education, inclusive learning [[research-methods-aied|research]] examines both how AI tools can remove barriers for disabled and neurodivergent learners and how AI systems themselves must be designed to avoid creating new accessibility gaps.

## Questions to Consider

- An accessible tool does not guarantee inclusive instruction, and assistive tech does not guarantee meaningful agency. What is the difference between removing a barrier to a format and designing education so everyone can meaningfully participate?
- The page distinguishes inclusive learning, accessibility, assistive technology, special education, and universal design. Where does AI in your own context sit — and which question are you actually trying to answer?
- One study found AI-segmented videos with fixed pauses eliminated the performance gap between ADHD and non-ADHD learners. How might designing for one group's needs improve learning for everyone?
- AI systems are described as risking new accessibility gaps even as they remove old ones. What kind of learner might a text-based, visual, always-online AI tool silently exclude?
- Inclusive assessment research exposes a tension between anti-cheating measures and accommodating learners with visual-processing needs. When security and accessibility conflict, how should the trade-off be decided — and by whom?
- Several tools invert the assumption that edtech must be visual — e.g., voice-first companions for visually impaired learners. What assumptions about the 'default' learner might your own tools or materials be making?

## Introduction

## How the related concepts fit together

Inclusive learning is the **umbrella** concept; the pages below sit inside it, each answering a different question. They overlap but are not interchangeable — knowing which one a claim belongs to keeps the knowledge base precise:

| Concept | Core question it answers | Typical focus |
|---|---|---|
| **Inclusive Learning** *(this page)* | How do we design education so all learners can meaningfully participate? | The broad design of instruction across learner variability |
| **[[accessibility]]** | Can everyone perceive and operate the *format/medium*? | Captions, alt text, transcripts, contrast, keyboard/screen-reader compat, WCAG |
| **[[assistive-technology]]** | What tools/equipment bridge an individual's access gap? | Screen readers, TTS/STT, braille/tactile, captioning, AI accommodations |
| **[[special-education]]** | How do we deliver instruction to learners with diagnosed disabilities? | IEPs, individualized accommodations, disability-specific tutoring — **primarily a [[k-12]] term (IDEA/entitlement)** |
| **[[universal-design-for-learning]]** | How do we proactively build in flexibility from the start? | Multiple means of [[student-engagement|engagement]], representation, action/expression |

In practice: **UDL** is the design philosophy that *prevents* barriers; **accessibility** is the property that removes *format* barriers; **assistive technology** is the *tool* layer individuals use; **special education** is the *instructional* domain for diagnosed disabilities — and it is primarily a **K-12** term, whereas in **[[higher-ed|higher education]]** (and increasingly K-12 too) the more common framing is [[universal-design-for-learning|Universal Design for Learning]]. **Inclusive learning** is the umbrella that holds them together around the shared goal of equitable participation. An accessible tool does not guarantee inclusive instruction, and assistive tech does not guarantee meaningful agency — which is why the umbrella must span all of them.

Inclusive learning sits at the intersection of [[equity-in-ai-education]], [[learning-design]], and [[special-education]], and is supported by the concrete tool layer of [[assistive-technology]] and the design property of [[accessibility]]. Unlike narrow accommodations that retrofit access onto existing systems, the inclusive learning perspective — grounded in [[universal-design-for-learning|Universal Design for Learning]] — argues that environments should be designed for the full range of human diversity from the start. The articles in this knowledge base explore how AI can enable this through automated content transformation, adaptive assessment interfaces, and tools designed with [[neurodiversity|neurodivergent users']] lived experience as the starting point.

### Key research themes

**AI-powered content accessibility** demonstrates how automated pipelines can reduce barriers. **[[adhd-video-segmentation-computing-education|Pimenova et al.]]** showed that AI-segmented [[video-education|instructional videos]] with fixed pauses eliminated the performance gap between ADHD and non-ADHD learners — strong evidence for Universal Design for Learning via automated content transformation. The study connects to [[neurodivergent-computing-students]] research on how [[collaborative-learning|collaborative learning]] structures affect neurodivergent comfort. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** designed an [[llm]]-powered question-generation system for Deaf and Hard of Hearing learners, introducing Visual and Emotion question strategies that target moments of visual or emotional difficulty in video — while revealing the persistent mismatch between text-based AI prompts and DHH learners' sign-based first languages, underscoring the need for language- and culture-aware AI design. **[[text-simplification-its|MuTSE]]** tackles a complementary barrier — reading level — by evaluating LLM-based text simplification for [[intelligent-tutoring]], matching content complexity to each learner's current level via a [[human-in-the-loop-ai|human-in-the-loop]] evaluation framework rather than relying on linguistic metrics that miss [[pedagogy|pedagogical]] quality.

**Sensory accessibility: blind, low-vision, and Deaf learners.** Several articles invert the assumption that edtech must be visual. **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** makes spoken conversation the primary and sufficient modality for visually-impaired children — real-time struggle detection, [[multilingual-learning|multilingual]] answer matching, and offline-first on-device ASR remove both the visual dependency and the connectivity requirement. **[[tactile-statistical-graphs-accessibility|Obiuwevwi et al.]]** built a reusable pipeline that generates tactile 3D-printed statistical graphs for blind/low-vision students in under 250ms, with optional LLM-based chart extraction from images. **[[pepper-robot-sign-language-lis-2025|Bolla et al.]]** explored whether the Pepper social robot can produce intelligible Italian Sign Language, co-designing 52 signs with a Deaf student and expert interpreter — extending [[educational-robotics]] into communicative accessibility for Deaf learners while highlighting the challenge of reproducing the non-manual components (facial expression, posture) crucial to meaning. **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** extend this line of work to higher education, finding in a [[qualitative-research|qualitative]] case study of 21 visually impaired undergraduates in Palestine that GenAI tailors pace, content, and delivery to individual profiles and converts complex academic texts across modalities — with learners viewing GenAI as complementing rather than replacing teachers, preserving human connection while enabling participation.

**Inclusive assessment design** grapples with the tension between security and accessibility. **[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]** proposes a theoretical framework for adaptive visual diversion that resists screen-capture cheating while accommodating learners with visual-processing needs — explicitly modeling the trade-off between anti-cheating measures and inclusive-learning principles. This connects to broader [[academic-integrity]] and [[assessment]] concerns.

**Neurodivergent learner experiences** center the voices of disabled and neurodivergent students. **[[neurodivergent-computing-students|Zastudil et al.]]** found that neurodivergent computing students need structured assignments, small consistent teams, and explicit role definitions — preferences that [[intelligent-tutoring|AI tutoring]] and collaboration tools must accommodate. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analyzed dyslexic learners' forum discussions, revealing that while they value AI for literacy support, they face significant accessibility barriers from inconsistent output quality and lack of equitable accommodations. Both connect to [[special-education]] and [[student-experience]].

**[[cognitive-offloading|Cognitive offloading]] and the access-vs-development trade-off.** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]] show that for students with learning disabilities, the same GenAI that lowers barriers to reading and writing access (text leveling, summarizing, drafting support) can, if unguarded, substitute for the comprehension, planning, and monitoring practice these learners need most — an equity tension central to inclusive learning. Inclusive design must therefore consider not just whether a tool is *accessible* but whether it preserves the learner's opportunity to develop the very skills access is meant to enable.

**AI for dyslexia: detection, support, and [[personalized-learning|personalized learning]].** A 2026 interdisciplinary [[meta-analysis-systematic-review|systematic review]] (Dabaghi, D'Urso & Sciarrone, PRISMA-guided, 2018–2024, n=72) finds AI supporting students with dyslexia across detection, assistive support, and personalized learning — but with these strands evolving in parallel rather than in integration, driven more by technological opportunity than by consolidated educational theory. ML-based help-education tools span five areas (specific applications, engagement, personalization, recommendation, generic support) yet emphasize technical performance and classification accuracy while overlooking ecological validity and practical classroom deployment. Detection research (EEG, eye-tracking, ML models) shows diagnostic promise for early intervention but often requires specialized equipment and controlled environments, limiting scalability and accessibility in typical school settings. Open challenges include limited experimental validation, scalability, [[ethics]]/privacy concerns with sensitive student data, limited teacher support and training, and language/cultural barriers (most research targets English-speaking populations) — underscoring that inclusive learning must pair technical capability with validated, scalable, and ethically grounded deployment.

**Disability-centered AI critique** examines how AI systems can marginalize rather than include. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** argues that [[generative-ai|generative AI]] systems in higher education actively marginalize disability-centered ways of knowing due to Anglophone, Western-centric training data — connecting to [[equity-in-ai-education]] concerns about epistemic justice.

**Accessible tools in practice** shows how AI can expand participation. **[[suacode-african-students-motivations|SuaCode]]** demonstrated that smartphone-based coding courses reach students in low-resource African contexts where fewer than 1% have coding skills. **[[embodied-string-learning-blindness-low-vision-musicians|Pimenova et al.]]** worked with blind and low-vision musicians to develop non-visual learning strategies, centering disability-led [[embodied-learning|embodied]] design. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** provides a no-cost, private, multilingual AI thought partner connecting educators with UDL principles. **[[special-r1-rl-special-education|Special-R1]]** extends [[reinforcement-learning|reinforcement learning]] to model cognitive and communicative diversity across disability profiles.

### Connections to related concepts

Inclusive learning is deeply connected to [[equity-in-ai-education]] — accessibility is not merely a technical concern but a question of who gets to participate in learning. It connects to [[accessibility]] as its concrete access layer and [[assistive-technology]] as the tool layer, to [[universal-design-for-learning]] as its theoretical foundation, to [[special-education]] for disability-specific approaches, to [[learning-design]] for how courses and tools are structured, and to [[neurodiversity]] as the lens that reframes difference as diversity rather than deficit. Work on sign-language robots and tactile tools links accessibility to [[educational-robotics]] and [[educational-nlp]], while text simplification connects it to [[sociocultural-learning]] and [[adaptive-learning]]. The [[ai-education]] and [[generative-ai]] connections highlight both the promise (automated content adaptation) and peril (AI systems that reproduce exclusion).

## Implications for instructors designing inclusive learning

- **Design for the excluded modality first, not last.** Building for blind/low-vision users from the start ([[kutti-ai-voice-first-learning-companion|Kutti AI]], [[tactile-statistical-graphs-accessibility|tactile graphs]]) produces tools that also work offline and in low-resource settings — accessibility as a catalyst, not a retrofit.
- **Co-design with the target community.** [[pepper-robot-sign-language-lis-2025|Sign-language robots]] and [[llm-question-generation-deaf-hard-of-hearing-2026|DHH question generation]] show community involvement surfaces barriers (e.g., sign-based first languages) designers can't anticipate — involve learners and communities in design.
- **Evaluate pedagogical quality, not just linguistic metrics.** [[text-simplification-its|MuTSE]] shows LLM output variability requires human-in-the-loop evaluation so that simplification helps rather than oversimplifies.
- **Use AI to close performance gaps.** [[adhd-video-segmentation-computing-education|AI-segmented videos]] eliminated the ADHD performance gap — deploy adaptive AI where evidence shows it equalizes outcomes.
- **Treat the security/accessibility trade-off explicitly.** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]] models how anti-cheating measures can inadvertently exclude learners with visual-processing needs — weigh integrity against access.
- **Guard against AI reproducing exclusion.** [[genai-minoritized-knowledges-disability|Disability-centered critique]] warns that Anglophone, Western-centric training data marginalizes disabled ways of knowing — audit AI tools for epistemic justice alongside [[equity-in-ai-education]].

## Connected Concepts

- [[equity-in-ai-education]]
- [[accessibility]] — the concrete access layer (captions, alt text, assistive-tech compatibility)
- [[assistive-technology]] — the tool layer students use to access content
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]

## Connected Articles
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access

- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[text-simplification-its]] — Text Simplification for Intelligent Tutoring
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI: voice-first companion for visually-impaired children
- [[tactile-statistical-graphs-accessibility]] — Tactile 3D-printed statistical graphs
- [[pepper-robot-sign-language-lis-2025]] — Pepper robot supporting sign language communication
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX math-accessible physics video transcription

- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education
