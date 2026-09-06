---
title: "Students Prefer Personalized, AI-Generated Educational Videos over Non-Personalized, Human-Recorded Videos"
created: "2026-09-05T00:55:00-04:00"
updated: "2026-09-05T00:55:00-04:00"
type: article
tags: ['personalized-learning', 'generative-ai', 'online-teaching-and-learning', 'student-engagement', 'adaptive-learning', 'higher-ed', 'multimodal', 'video-education']
research_method: [quantitative]
audience: [instructors, learning designers]
level: [higher ed]
sources: ['raw/papers/personalized-ai-generated-videos-preference-2026.md']
confidence: high
---

> **Synthesis:** Tomlinson, Black, Patterson, van der Hoek, Ferguson, and Bietz (2026) field-deploy personalized [[generative-ai|AI-generated]] [[video-education|educational videos]] as the primary instructional modality in a large online undergraduate course and ask students to rank four video types defined by two crossed dimensions — [[personalized-learning|personalization]] (personalized vs. non-personalized) and source (human-recorded vs. AI-generated). Across two offerings (493 respondents), **personalization outweighed human presence**: students preferred AI-generated personalized videos over non-personalized human-recorded videos (mean rank 2.26 vs. 2.69, p < .001), and 88.4% ranked some personalized video first versus 73.8% for human-recorded. Human-recorded personalized videos were ranked highest overall, but they were a hypothetical condition students never experienced. The authors read the results as a turning point: personalized relevance and conciseness now compensate for, and sometimes surpass, the missing human presenter — pointing toward a complementary model where human instructors provide expertise and social connection while [[generative-ai|generative AI]] supplies scalable personalization.

## Key Findings
1. **Personalization is a stronger driver of preference than human presence.** In a direct comparison, AI-generated personalized videos beat non-personalized human-recorded videos (mean rank 2.26 vs. 2.69; Wilcoxon signed-rank, p < .001) — stable across both cohorts. Grouped by personalization, 88.4% of students ranked a personalized video (human or AI) as their top choice (binomial p < .001); grouped by source, only 73.8% ranked a human-recorded video first. The magnitude of the personalization effect substantially exceeded the effect of human presence.
2. **Full preference ordering.** Averaging across both offerings, the four types ranked: hypothetical human-recorded personalized (mean rank ~1.5) > AI-generated personalized (~2.26) > human-recorded non-personalized (~2.69) > AI-generated non-personalized (~3.54). Human-recorded personalized videos were highest, but because none existed, this condition mixes "informed imagination" with lived experience and carries an unknown imagination bias.
3. **AI video design for personalization.** The team built a custom pipeline with [[human-in-the-loop-ai|human oversight]] at multiple stages: the instructor authored an [[llm]] "ethos" prompt; AI selected 100 topics; for each topic three video versions were generated tailored to business, technology, or society/biology majors (chosen from an AI analysis of enrolled students); each shared three core-content paragraphs and diverged in the last two for domain-specific examples. Scripts were rendered by a HeyGen avatar cloned from the instructor (straight/left/right facing), composited with images, bullet points, titles, and music into 3–5 minute videos, reviewed for correctness, then pushed to YouTube and into Canvas pages.
4. **Student-stated benefits and drawbacks.** Open-ended responses highlighted relevance (videos "catered to me based off of my interests"), clarity, consistency, and conciseness (more direct than human lectures "filled with jargon/ramble") as benefits. Drawbacks centered on naturalness and expressiveness — the limits of the AI avatar — plus, for a subset of students, principled [[ethics|ethical]] objections to AI use (environmental impact, labor, automation, [[academic-integrity|academic integrity]]) that technical improvement alone cannot address.
5. **Caveats.** Limitations include the experiential asymmetry across conditions (three were experienced/largely hypothetical/parallel), potential imagination bias and contrast effect (many students' baseline was generic human lecture video, which may inflate the personalization preference via novelty), demand characteristics, a single general-education online course at one university dominated by seniors, and a sustainability-and-computing subject that may bias toward technology-oriented students. Objective learning-outcome data are reported as forthcoming.

## Connected Concepts

- [[personalized-learning]] — the central construct; personalized relevance drove preference
- [[video-education]] — Video in Education: AI-generated, personalized, and analytics of video learning
- [[generative-ai]] — the LLM (GPT-4o, Claude) and HeyGen avatar video-generation pipeline
- [[online-teaching-and-learning]] — video-based instruction as the primary modality in online courses
- [[student-engagement]] — personalization as a driver of engagement and preference
- [[adaptive-learning]] — scalable personalization of pacing/content at course scale
- [[higher-ed]] — the large undergraduate general-education course context
- [[pedagogical-agent]] — the AI avatar as a virtual pedagogical agent/presenter
- [[multimodal]] — AI-generated video combining avatar, image, bullet, and audio modalities

## Connected Articles

- [[ai-generated-instructional-videos-computing-ed]] — student perceptions and preferences of AI-generated instructional videos in computing education
- [[ai-video-dual-gatekeeping-2026]] — dual gatekeeping for pedagogically grounded AI content (video) creation
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: adaptive pedagogical video generation grounded in course corpora
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — how avatar identity shapes epistemic trust in AI-mediated learning
- [[engagement-assessment-video]] — engagement assessment in video learning
- [[savvy-student-attention-video-learning]] — student attention visualization for video-based learning
- [[ai-psychotherapy-training-avatars]] — AI avatar use in (psychotherapy) training contexts

## Citation

Tomlinson, B., Black, R. W., Patterson, D. J., van der Hoek, A., Ferguson, J., & Bietz, M. J. (2026). [Students prefer personalized, AI-generated educational videos over non-personalized, human-recorded videos](https://doi.org/10.1038/s41598-026-52798-9). *Scientific Reports, 16*, 21804.
