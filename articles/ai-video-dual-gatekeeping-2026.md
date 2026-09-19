---
title: "When Saying No Makes Better Videos: Designing Dual Gatekeeping for Pedagogically Grounded AI Content Creation"
created: "2026-08-21T19:02:00-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [agentic-ai, ai-education, learning-design, teacher-role]
pedagogy: [pedagogy, scaffolding]
technology: [generative-ai, human-in-the-loop-ai]
research_method: [system development, user study]
audience: [instructors]
sources: ['raw/papers/ai-video-dual-gatekeeping-2026.md']
confidence: high
level: [teacher training]
---

> **Synthesis:** Kim, Baek, and Kwak (2026) argue that [[generative-ai|generative AI]] video authoring pipelines for education need "structured refusal" to prevent aesthetically polished but pedagogically flawed content. They introduce PedaCo, a dual-gatekeeping system with two layers: a script-stage review where [[teacher-role|educators]] iteratively reshape AI drafts against Mayer's Cognitive Theory of Multimedia Learning, and a post-synthesis automated metric flagging violations in instructional coherence and narrative–visual synchronization. A within-subject study with 23 educators and automated metrics across seven topics show both layers independently improve the same instructional dimensions, reframing [[human-in-the-loop-ai|principled resistance]] as a productive partner to, rather than opponent of, AI.

## From friction to principled resistance

The paper opens from a critique of friction-free adoption: current [[video-education|video generation]] pipelines optimize for visual appeal over instructional essentials such as precise temporal alignment of narration or strategic sequencing of prerequisite concepts. The authors argue that pedagogical friction is not a hurdle to be eliminated but a site of professional accountability — moments of deliberate hesitation are where instructional quality is forged. They frame this as *principled resistance*: deliberate, theory-grounded pushback against AI outputs that fail [[pedagogy|pedagogical]] standards, rooted in Mayer's 12 CTML principles for effective [[learning-design|multimedia instruction]].

## Two layers of resistance

PedaCo operationalizes principled resistance through three concrete forms — rejecting (requesting regeneration), revising (manual editing), and overriding (vetoing automated flags). Layer 1 intervenes at the script stage, where an [[agentic-ai|LLM]] generates an initial script that passes through a structured review cycle; an AI reviewer prompted with CTML principles produces [[feedback]] organized by principle, and the human educator decides what to accept, revise, or regenerate. This keeps the system advisory and preserves the educator's professional authority. Layer 2 performs post-synthesis evaluation through a composite metric across coherence, redundancy, temporal contiguity, modality, and image quality, with the educator deciding whether to accept or return to the script stage. The design rationale is that humans and algorithms catch different kinds of problems — educators identify nuanced pedagogical mismatches while algorithms provide precise structural verification.

## Converging evidence

In a within-subject study, 23 educators using PedaCo reported statistically significant improvements across every CTML principle (mean rating rose from 3.07 to 3.86 on a 5-point scale, p < .01), with the largest gains in prerequisite sequencing, irrelevant-material removal, and overall instructional validity. Educators did not perceive the review as slowing them down (production efficiency 4.26/5). Independently, automated metrics on 14 videos showed significant improvement in temporal contiguity and coherence, but not in the other three dimensions (near-ceiling). The convergence between subjective ratings and objective metrics — both identifying coherence and temporal alignment as most enhanced — provides triangulated evidence that the two layers complement rather than duplicate each other.

## Discussion

The authors surface three tensions: negotiating [[agency]] when automated flags and educator judgments diverge; the [[sustainability]] of friction (when does [[desirable-difficulties|productive friction]] become "friction fatigue"); and the need to move beyond proxy metrics to test direct causal impact on student [[learning-gains|learning outcomes]]. The conclusion reframes [[ai-education|resistance to AI in education]] not as rejection but as building systems designed to push back on principled grounds until the output is genuinely ready to teach.

## What this means for practice

- **Instructors.** Review AI-generated video scripts as text before anything is rendered. PedaCo's first gate sits at the script stage because pedagogical errors are cheap to fix in a draft and nearly impossible to correct once narration and visuals are synthesized.
- **Instructors.** Grade drafts against named [[learning-design|multimedia learning]] principles rather than overall polish. Educators in the study rated instructional validity 3.07 to 3.86 on a 5-point scale after principle-by-principle review, with the largest gains in prerequisite sequencing and removal of irrelevant material.
- **Designers.** Make refusal a first-class feature of authoring tools — regeneration requests, manual revision, and the ability to override automated flags — and keep machine critiques advisory ("this may conflict with the pre-training principle") so the educator keeps the final say.
- **Instructors.** Use automated flags for the structural checks people miss and your own judgment for the rest. The automated layer improved only temporal contiguity and coherence out of five dimensions, so treat metric output as partial [[feedback|feedback]], not a verdict.
- **Faculty developers.** Frame the extra review steps as professional judgment rather than slowdown when training [[teacher-role|teachers]] on these tools; the 23 participants rated production efficiency at 4.26/5 despite describing the iteration as "quite challenging."

## Limitations

- The human evaluation is a within-subject study of 23 educators across 3 topics, with no control group and no comparison against an unassisted authoring baseline, so improvements are measured against the participants' own pre-review drafts.
- The educator evidence is self-report on 13 rating items covering the 12 CTML principles; the objective automated layer covered only 14 videos (7 topics × 2 conditions), and three of its five metrics were near ceiling and showed no significant change.
- The authors describe the results as *early evidence* and state that proxy metrics cannot establish causal impact on student [[learning-gains|learning outcomes]] — no student outcome data were collected.

## Connected Concepts
- [[generative-ai]]
- [[video-education]] — Video in Education: AI-generated, personalized, and analytics of video learning
- [[teacher-role]]
- [[learning-design]]
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

Kim, Y., Baek, I., & Kwak, N. (2026). [*When Saying No Makes Better Videos: Designing Dual Gatekeeping for Pedagogically Grounded AI Content Creation*](https://arxiv.org/abs/2608.19812). CHI 2026 Workshop on Understanding and Engaging Critical Resistance to AI in Education.
