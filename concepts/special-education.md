---
title: Special Education
created: "2026-08-09T07:47:05-04:00"
updated: "2026-08-27T08:55:36.300729-04:00"
type: concept
tags: [special-education, inclusive-learning, equity-in-ai-education, neurodiversity, ai-education, k-12, higher-ed]
level: [special education, k 12, higher ed]
confidence: high
---

> **Special Education** — the design and delivery of instruction for learners with disabilities, spanning cognitive, physical, sensory, and neurodevelopmental differences. [[ai-education|AI in education]] research in this wiki explores how AI tools can support diverse learner needs through [[personalized-learning|personalization]], [[scaffolding|adaptive scaffolding]], and accessible interfaces — while also examining the risks of AI systems that overlook or marginalize disabled learners.

> ⚠️ **Special Education is primarily a [[k-12]] term.** It is rooted in the U.S. Individuals with Disabilities Education Act (IDEA) and the entitlement-based system of Individualized Education Programs (IEPs) that governs special-education services in primary and secondary schooling. In [[higher-ed|higher education]] — and increasingly in K-12 as well — the more common framing is **[[universal-design-for-learning|Universal Design for Learning]]** (a proactive design framework that benefits all learners) alongside [[accessibility]] and [[assistive-technology]] rather than "special education." A K-12 special-education article and a college UDL piece are about overlapping but distinct contexts; the wiki keeps both because the research literature spans both. When a source concerns higher education and disabled learners, it is usually better linked to [[universal-design-for-learning]], [[accessibility]], or [[inclusive-learning]] than to special-education.

Special education is a domain where AI's capacity for personalization and adaptation offers particular promise. Unlike one-size-fits-all instruction, [[intelligent-tutoring|AI tutors]] can theoretically adapt to individual cognitive profiles, communication needs, and learning paces. The articles in this wiki span AI for specific disability profiles, neurodivergent learner experiences, and critical perspectives on AI and disability.

**Disability-specific AI tutoring** tailors AI to particular learner needs. **[[special-r1-rl-special-education|Special-R1]]** extends [[reinforcement-learning|reinforcement learning]] to model cognitive and communicative diversity across five disability profiles, using persona-aware prompts and thinking rewards to shape tutor responses for each learner. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analyzed how dyslexic learners experience AI tools, revealing both the value of AI for literacy support and persistent accessibility barriers. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** designed an [[llm]]-powered question-generation system for [[accessibility|Deaf and Hard of Hearing learners]], introducing Visual and Emotion question strategies and iteratively refining questions with the target community to overcome the mismatch between text-based AI prompts and sign-based first languages. **[[embodied-string-learning-blindness-low-vision-musicians]]** developed non-visual learning strategies with blind and low-vision musicians, centering disability-led [[embodied-learning|embodied]] design. These connect to [[inclusive-learning]] and [[neurodiversity]].

**Neurodivergent learner experiences** center autistic and ADHD students. **[[neurodivergent-computing-students|Zastudil et al.]]** found neurodivergent computing students need structured assignments, small consistent teams, and explicit role definitions — design requirements that [[collaborative-learning]] tools must address. **[[adhd-video-segmentation-computing-education]]** demonstrated that AI-segmented videos eliminated the ADHD performance gap. Both connect to [[instructional-design]] and [[universal-design-for-learning]].

**Critical perspectives** examine how AI can marginalize disabled learners. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** argues that AI systems actively marginalize disability-centered knowledge due to Western-centric training data — connecting to [[equity-in-ai-education]] concerns about epistemic justice.

**Cognitive offloading for students with learning disabilities (SWLDs).** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], a conceptual review in a *Learning Disability Quarterly* special series on AI for students with LD, reframe [[generative-ai|GenAI]] use for SWLDs through the [[cognitive-offloading]] lens. They argue that GenAI can be a **compensatory aid or a shortcut** depending on how offloading decisions interact with SWLDs' cognitive and [[motivation|motivational]] profiles (executive-function and working-memory challenges, heightened cognitive load, effort-avoidant performance goals, lower academic self-efficacy, and inflated expectations toward GenAI) and with instructional design. For reading and writing, GenAI can scaffold access (text leveling, summarizing, [[multimodal]] outputs, planning, drafting, revision feedback) while preserving higher-order [[student-engagement|engagement]] — but excessive offloading risks bypassing the comprehension, planning, and monitoring processes that are already fragile for these learners, fostering "[[metacognition|metacognitive]] laziness" and compounding literacy difficulties across domains. The paper positions **instructional [[guardrails]]** as the key moderating factor and recommends teaching strategic offloading, building [[ai-literacy]] to calibrate tool trust, sequencing mastery experiences to build [[self-efficacy]], and aligning tasks and assessment with IEP goals that prioritize skill development over substitution. This extends the wiki's special-education coverage to the equity dimension of offloading: the same tool that lowers barriers to access can, if unguarded, substitute for the practice SWLDs need most.

## Implications for special-education instructors

- **Co-design AI with the target learners and community.** [[llm-question-generation-deaf-hard-of-hearing-2026|Question generation for Deaf/Hard-of-Hearing learners]] shows the value of iteratively refining AI with the community to bridge the gap between text-based prompts and sign-based first languages — involve learners and their communities in design rather than assuming AI fits them.
- **Match AI to specific disability profiles, not generic accessibility.** [[special-r1-rl-special-education|Special-R1]] models cognitive and communicative diversity across disability profiles; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] documents both the literacy value and the persistent accessibility barriers dyslexic learners face — choose tools aligned to each learner's profile and be alert to unmet barriers.
- **Structure collaboration for neurodivergent learners.** [[neurodivergent-computing-students|Neurodivergent computing students]] need structured assignments, small consistent teams, and explicit roles — apply these design requirements to any AI-mediated collaborative activity.
- **Use AI to close (not widen) performance gaps.** [[adhd-video-segmentation-computing-education|AI-segmented videos]] eliminated the ADHD performance gap — deploy adaptive AI where evidence shows it equalizes outcomes, not where it merely automates.
- **Center disability-led embodied design.** [[embodied-string-learning-blindness-low-vision-musicians|Blind/low-vision musicians]] research shows non-visual, disability-led strategies outperform default visual interfaces — build and adapt AI with disabled learners' expertise.
- **Guard against epistemic marginalization.** [[genai-minoritized-knowledges-disability|Critical perspectives]] warn that Western-centric training data can marginalize disability-centered knowledge — audit AI content and tools for epistemic justice alongside [[equity-in-ai-education]].

## Connected Concepts

- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[instructional-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Connected Articles
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities

- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX math-accessible physics video transcription
