---
title: Accessibility
created: "2026-08-23T12:00:00-04:00"
updated: "2026-08-25T11:30:00-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research]
type: concept
tags: [accessibility, inclusive-learning, special-education, universal-design-for-learning, assistive-technology, equity-in-ai-education, instructional-design]
confidence: high
---

> **Accessibility** — the design of educational technology, content, and interfaces so that they can be perceived, operated, and understood by people with disabilities and diverse needs. In AI in education, accessibility covers concrete, operational barriers to the *medium* of learning: video captions, alt text, transcripts, screen-reader and keyboard compatibility, color contrast, text simplification, tactile output, sign-language support, and compatibility with assistive technologies.

Accessibility is distinct from, but closely related to, three neighboring concepts in this wiki. **[[inclusive-learning]]** is the broader umbrella for designing education for all learner variability (physical, cognitive, sensory, situational). **[[special-education]]** is the instructional domain for learners with diagnosed disabilities, including individualized accommodations. **[[universal-design-for-learning]]** is the proactive design framework (multiple means of engagement, representation, action/expression). **Accessibility** sits inside this constellation as the *technical and procedural layer*: removing barriers to perceiving and operating the format, rather than redesigning the pedagogy. The two can be separated on a spectrum — accessibility asks "can everyone access this content and tool?" while supporting students with disabilities asks "does instruction meaningfully serve each learner, including accommodations and disability-specific support?" Both matter, and AI intersects both.

### Why the distinction matters

A video with accurate captions and a properly tagged transcript is *accessible*; a course that structures discussion to include a Deaf learner's communication preferences is *supporting that learner*. They overlap — accessible media is a prerequisite for inclusive instruction — but they require different design moves and draw on different evidence. Accessibility is anchored in standards and law (WCAG, the U.S. [[educational-policy-ai|Assistive Technology Act]] and IDEA), while accessible learning and special education are anchored in pedagogy and learner experience.

### Key research themes

**Format accessibility: captions, transcripts, and text.** **[[adhd-video-segmentation-computing-education|AI-segmented instructional videos]]** with fixed pauses eliminated the performance gap between ADHD and non-ADHD learners — accessibility as a catalyst that benefits everyone. **[[text-simplification-its|MuTSE]]** evaluates LLM-based [[intelligent-tutoring|text simplification]] to match content complexity to each learner's reading level, a human-in-the-loop accessibility layer. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** build LLM question generation for Deaf and Hard of Hearing learners, confronting the mismatch between text-based AI prompts and sign-based first languages.

**Sensory access: non-visual and tactile output.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** makes spoken conversation the primary modality for visually impaired children, removing visual dependency. **[[tactile-statistical-graphs-accessibility|Tactile 3D-printed graphs]]** turn visual statistical data into touchable output for blind and low-vision students. **[[pepper-robot-sign-language-lis-2025|Sign-language robots]]** extend [[educational-robotics]] into communicative accessibility for Deaf learners.

**Policy and accommodations for students with disabilities.** **[[shin-ai-policies-sld-2026|Shin et al.]]** analyze U.S. AI policy documents to reveal a void in guidance for students with specific learning disabilities, proposing accommodations and [[educational-policy-ai|policy]] recommendations grounded in the Assistive Technology Act and IDEA. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** meta-analyze 29 studies of AI-based interventions for students with disabilities, finding a medium positive effect on [[learning-gains|learning outcomes]] (g = 0.588) — and argue AI must do more than ensure accessibility: it must enable [[agency|agentic]] participation.

**The limits of accessibility alone.** **[[genai-minoritized-knowledges-disability|Critical work]]** warns that AI trained on Anglophone, Western-centric data can marginalize disability-centered ways of knowing. Accessible formats do not guarantee inclusive or just instruction — reinforcing that accessibility is necessary but not sufficient, and must connect to [[equity-in-ai-education]].

## Implications for practice

- **Prioritize the format barrier first.** Captions, transcripts, alt text, contrast, and keyboard operability are the gatekeeping layer — without them nothing else matters for learners who need them.
- **Use AI to automate accessibility at scale.** AI can generate captions, simplify text, produce tactile/audio alternatives, and adapt presentation — but evaluate output quality with human-in-the-loop checks.
- **Treat accessibility as necessary but not sufficient.** An accessible tool is not automatically an inclusive or disability-just tool; pair accessibility with [[inclusive-learning]] design and [[special-education]] support.
- **Ground accommodations in law and policy.** Reference standards (WCAG) and statutes (Assistive Technology Act, IDEA) when designing or procuring AI tools.

- **Math-accessible transcription of physics videos (2026):** An AI workflow using Gemini (audio + 1 fps video sampling) and LuaLaTeX compiles instructional physics videos into PDF/UA-2 and ISO 32005 math-accessible PDFs that routinely pass accessibility validation — a practical, free path to making equation-heavy video content screen-readable for blind and low-vision students ([[gemini-lualatex-physics-video-transcription-2026]]).

## Connected Concepts

- [[inclusive-learning]] — broader umbrella for designing education across learner variability
- [[special-education]] — instructional domain for learners with diagnosed disabilities
- [[universal-design-for-learning]] — proactive design framework
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[instructional-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]

## Connected Articles

- [[shin-ai-policies-sld-2026]] — AI policies and accommodations for students with specific learning disabilities
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Meta-analysis of AI interventions for students with disabilities
- [[adhd-video-segmentation-computing-education]] — AI-segmented videos with fixed pauses
- [[text-simplification-its]] — LLM-based text simplification for intelligent tutoring
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM question generation for Deaf/Hard-of-Hearing learners
- [[kutti-ai-voice-first-learning-companion]] — Voice-first companion for visually impaired children
- [[tactile-statistical-graphs-accessibility]] — Tactile 3D-printed statistical graphs
- [[pepper-robot-sign-language-lis-2025]] — Pepper robot supporting sign language
- [[genai-minoritized-knowledges-disability]] — Critical perspective on AI and disability-centered knowledge
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX math-accessible physics video transcription
