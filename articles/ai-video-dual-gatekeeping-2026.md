---
title: "When Saying No Makes Better Videos: Designing Dual Gatekeeping for Pedagogically Grounded AI Content Creation"
created: "2026-08-21T19:02:00-04:00"
updated: "2026-08-21T19:02:00-04:00"
type: article
tags: [generative-ai, teacher-role, instructional-design, pedagogy, ai-education, human-in-the-loop-ai, agentic-ai, scaffolding]
sources: ['raw/papers/ai-video-dual-gatekeeping-2026.md']
confidence: high
---

> **Synthesis:** Kim, Baek, and Kwak (2026) argue that [[generative-ai|generative AI]] video authoring pipelines for education need "structured refusal" to prevent aesthetically polished but pedagogically flawed content. They introduce PedaCo, a dual-gatekeeping system with two layers: a script-stage review where [[teacher-role|educators]] iteratively reshape AI drafts against Mayer's Cognitive Theory of Multimedia Learning, and a post-synthesis automated metric flagging violations in instructional coherence and narrative–visual synchronization. A within-subject study with 23 educators and automated metrics across seven topics show both layers independently improve the same instructional dimensions, reframing [[human-in-the-loop-ai|principled resistance]] as a productive partner to, rather than opponent of, AI.

## From friction to principled resistance

The paper opens from a critique of friction-free adoption: current video generation pipelines optimize for visual appeal over instructional essentials such as precise temporal alignment of narration or strategic sequencing of prerequisite concepts. The authors argue that pedagogical friction is not a hurdle to be eliminated but a site of professional accountability — moments of deliberate hesitation are where instructional quality is forged. They frame this as *principled resistance*: deliberate, theory-grounded pushback against AI outputs that fail [[pedagogy|pedagogical]] standards, rooted in Mayer's 12 CTML principles for effective [[instructional-design|multimedia instruction]].

## Two layers of resistance

PedaCo operationalizes principled resistance through three concrete forms — rejecting (requesting regeneration), revising (manual editing), and overriding (vetoing automated flags). Layer 1 intervenes at the script stage, where an [[agentic-ai|LLM]] generates an initial script that passes through a structured review cycle; an AI reviewer prompted with CTML principles produces [[feedback]] organized by principle, and the human educator decides what to accept, revise, or regenerate. This keeps the system advisory and preserves the educator's professional authority. Layer 2 performs post-synthesis evaluation through a composite metric across coherence, redundancy, temporal contiguity, modality, and image quality, with the educator deciding whether to accept or return to the script stage. The design rationale is that humans and algorithms catch different kinds of problems — educators identify nuanced pedagogical mismatches while algorithms provide precise structural verification.

## Converging evidence

In a within-subject study, 23 educators using PedaCo reported statistically significant improvements across every CTML principle (mean rating rose from 3.07 to 3.86 on a 5-point scale, p < .01), with the largest gains in prerequisite sequencing, irrelevant-material removal, and overall instructional validity. Educators did not perceive the review as slowing them down (production efficiency 4.26/5). Independently, automated metrics on 14 videos showed significant improvement in temporal contiguity and coherence, but not in the other three dimensions (near-ceiling). The convergence between subjective ratings and objective metrics — both identifying coherence and temporal alignment as most enhanced — provides triangulated evidence that the two layers complement rather than duplicate each other.

## Discussion

The authors surface three tensions: negotiating [[agency]] when automated flags and educator judgments diverge; the sustainability of friction (when does productive friction become "friction fatigue"); and the need to move beyond proxy metrics to test direct causal impact on student [[learning-gains|learning outcomes]]. The conclusion reframes [[ai-education|resistance to AI in education]] not as rejection but as building systems designed to push back on principled grounds until the output is genuinely ready to teach.

## Connected Concepts
- [[generative-ai]]
- [[teacher-role]]
- [[instructional-design]]
- [[pedagogy]]
- [[human-in-the-loop-ai]]
- [[agentic-ai]]
- [[scaffolding]]
- [[agency]]
- [[curriculum-design]]

## Connected Articles
- [[ai-generated-instructional-videos-computing-ed]] — AI-Generated Instructional Videos in Computing Education
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint Adaptive Video Generation
- [[human-ai-collaboration-prerequisite-functions]] — Human-AI Collaboration Prerequisite Functions
- [[human-ai-collaboration-trust-expectations]] — Human-AI Collaboration and Trust
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education Scoping Review
- [[generative-refusal-ai-tools-for-thought]] — Generative Refusal: AI Tools for Thought
- [[genai-mindtool-generative-learning]] — GenAI as Mindtool for Generative Learning
- [[hao-human-ai-collaborative-problem-solving-cognition]] — Human-AI Collaborative Problem Solving

## Citation
Kim, Y., Baek, I., & Kwak, N. (2026). [*When Saying No Makes Better Videos: Designing Dual Gatekeeping for Pedagogically Grounded AI Content Creation*](https://arxiv.org/abs/2608.19812). CHI 2026 Workshop on Understanding and Engaging Critical Resistance to AI in Education. arXiv:2608.19812.
