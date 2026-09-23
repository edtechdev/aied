---
title: "Bespoke: Generating MOOC-Quality Industry-Personalized Lecture Videos at Scale"
created: "2026-09-23T09:29:49-04:00"
updated: "2026-09-23T09:29:49-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/bespoke-industry-personalized-lecture-videos-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [system development, user study]
discipline: [cs education]
level: [graduate, adult learning]
audience: [instructors, instructional designers, educational technology developers]
pedagogy: [video-education, professional-training, lifelong-learning]
technology: [generative-ai, llm, personalized-learning, rag, speech-and-voice-technologies]
assessment: [educational-measurement]
methods: [ai-ed-evaluation, usability-research]
ethics: [legal-issues-and-risks]
foundations: [learning-design, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** Bespoke takes a human instructor's existing [[video-education|lecture]] transcript and regenerates the whole lecture — slides, narration, and charts — for a stated professional audience and duration. From 31 graduate lectures it produced 209 videos across healthcare, finance, energy, and a generic audience, at about $0.22 of API cost per minute. Twenty-five domain-matched experts rated 92 of them on a five-point rubric anchored at "a standard MOOC lecture's quality," judging 87% at or above that bar (mean 3.42 out of 5). Quality held across industries, durations, and a 21-lecture held-out set; voice, slide timing, and layout were the recurring defects.

## Key Findings
1. **Experts judged most regenerated lectures MOOC-comparable.** Reviewers placed 87% of 92 videos at or above the rubric midpoint written as "comparable to a standard [[online-teaching-and-learning|MOOC]] lecture" (95% CI [76%, 96%]).
2. **Overall [[ai-ed-evaluation|quality]] averaged 3.42 out of 5.** Mean global score was 3.42 (SD = 0.85), and 48% scored 4 or above (CI [33%, 63%]) — above the midpoint, not merely at it.
3. **Content was the strongest dimension.** Accuracy and scope scored A = 4.03 (SD = 0.67): 99% of videos at 3 or above and 82% at 4 or above, with factual errors rarely flagged.
4. **Personalization depth ran ahead of audience calibration.** [[personalized-learning|Industry framing]] reached B1 = 3.86 (94.6% at 3 or above) against B2 = 3.52; naming an industry added 0.32 points (3.97 vs. 3.65).
5. **Production was weakest, and voice drove it down.** Production averaged D = 3.41, with voice at D1 = 3.16 (SD = 1.09) — the lowest item, and 29% of videos below 3.
6. **Quality held on the held-out set.** The 21 lectures unused during development scored G = 3.36 against 3.51 on the 10 development lectures; medium and long differed by 0.17 (p = 0.60).
7. **A video minute cost about $0.22 in API calls.** Generation ran Claude Sonnet 4.6 against GPT-5.2 with a bound of three refinement iterations; a typical video cost about $5.

## A pipeline that compiles artifacts instead of pixels
Bespoke is a directed acyclic graph with a fixed stage order and one branch: a generate–validate–refine loop that always terminates. Five stages write audience-specific objectives, plan the lecture around a retrieved domain paper, write narration, build slides and charts in parallel, and reveal slide elements as the narrator reaches them. Objectives precede content, following [[learning-design|backward design]], and Mayer's multimedia principles serve as generation prompts and named validation criteria. Nothing is rendered as pixel video: slides are HTML with rendered math and charts are generated code, because text-to-video models struggle with equations. Cross-model review has Claude Sonnet 4.6 generating and GPT-5.2 checking, so no model grades only its own output.

## Who judged the videos, and at what cost to precision
Twenty-five reviewers with teaching or research experience in healthcare, finance, energy, or [[machine-learning|machine learning]] rated a 92-video subset — the largest coverable under a 120-minute, 6-video cap per person — assigned so each [[video-education|lecture video]] went to a reviewer listing all of its topics. Every video was seen once (k = 1), which spread the panel across more of the corpus instead of collecting repeat ratings. A random-intercept model attributes about 35% of residual variance to the reviewer (ICC = 0.35), and the paper reports reviewer-clustered intervals. Those reviewers left 235 free-text comments and recorded confidence at a mean of 3.33.

## What the free-text comments locate
The dimensions separate cleanly in the comments. [[pedagogy|Pedagogy]] and production tracked overall [[ai-ed-evaluation|judgment]] most closely (Spearman ρ = 0.68 and 0.66), while content correlated weakly (ρ = 0.46) precisely because 99% of videos already cleared 3 on it. Voice drew 27 remarks, mostly pronunciation: several videos read "30" as "three zero," repeated across the entire video in at least six cases. Slide visual quality and layout drew 31 and 30 comments and produced content spoken before it appeared, unused space, and cropped plots. Reviewers noticed when reveal worked — "it makes the slides easier to follow while the speaker is explaining the concepts" — while a few said the delivery "lacks soul."

## Audience-level regeneration beside recommendation and Q&A
The paper positions its lever against two neighbors: [[recommender-systems-and-learning-paths|recommendation]], which chooses among videos that already exist, and in-video Q&A, which adds interaction to a fixed recording. Regenerating a lecture for a stated professional group changes what the artifact contains rather than how it is routed. It also differs from the closest compile-to-video system, LASEV, by producing lectures of 5 to 45 minutes instead of one-minute examples. Generic-audience versions were no neutral baseline: shorter than the seed and conversational in register, they still averaged B1 = 3.65.

## What this means for practice
- **Instructors.** Repurpose a seed transcript you already own instead of re-recording: at about $0.22 per video minute, an industry variant is cheap enough to trial.
- **Instructional designers.** Spend the human pass where reviewers located the defects — voice, reveal timing, and slide rendering — rather than on audience calibration (B2 = 3.52).
- **Administrators.** Clear rights before scaling: generated variants inherit the seed instructor's copyright and any citation obligations from retrieved case studies.
- **[[educational-technology-developers|Educational technology developers]].** Compile slides, narration, and charts rather than generating pixel video, and route duration arithmetic, missing images, and overflow to code.

## Limitations
- Nothing here shows learning: the study measures expert judgment of video quality, and a learner study of learning, transfer, completion, or engagement is future work.
- Each video was rated once by one reviewer (k = 1), so no inter-rater agreement statistic exists; a random-intercept model puts about 35% of residual variance on the reviewer (ICC = 0.35).
- Reviewers were instructors, TAs, and doctoral researchers rather than practitioners in the target roles, recruited unpaid through the university's MOOC service; no institutional review was sought.
- Energy is thinly covered (n = 7; G = 3.43) against healthcare n = 32 and finance n = 22, and the industry increment on B1 is unresolved under clustering (0.25, p = 0.11).

## Connected Concepts
- [[video-education]]
- [[personalized-learning]]
- [[generative-ai]]
- [[llm]]
- [[professional-training]]
- [[rag]]
- [[speech-and-voice-technologies]]
- [[human-in-the-loop-ai]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[lifelong-learning]]
- [[online-teaching-and-learning]]
- [[usability-research]]
- [[human-ai-collaboration]]

## Connected Articles
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: A Structured Pipeline for Adaptive Pedagogical Video Generation Grounded in Course Corpora
- [[personalized-educational-video-generation-2026]] — Dynamic Learning Solutions: A System for Personalized Educational Video Generation
- [[personalized-ai-generated-videos-preference-2026]] — Students Prefer Personalized, AI-Generated Educational Videos over Non-Personalized, Human-Recorded Videos
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Designing Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education
- [[ai-generated-slides-student-perception]] — AI-Generated Slides: Are They Good? Can Students Tell?
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study of Educational Potential
- [[crewscaler-ai-upskilling-framework]] — AI-accelerated End-to-End Framework for Rapid Professional Upskilling
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents

## Citation
Puech, R., Agarwal, D. K., Santamaría Escobar, A., & Bertsimas, D. (2026). [Bespoke: Generating MOOC-Quality Industry-Personalized Lecture Videos at Scale](https://arxiv.org/abs/2609.26540). arXiv:2609.26540.