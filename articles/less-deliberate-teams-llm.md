---
title: "Less Deliberate in Teams: Student LLM Use Across Individual and Collaborative Work"
created: "2026-07-02T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
pedagogy: [collaborative-learning, student-engagement]
technology: [generative-ai, llm, rag, learning-analytics]
stakeholders: [student-experience]
research_method: [longitudinal study]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.30860.md']
confidence: high
discipline: [cs education]
---

> **Synthesis:** Semester-long study of 96 CS students shows [[llm]] usage dropped 42.7 percentage points when students moved from individual to team work; team context reduces deliberate LLM [[student-engagement|engagement]].

## Key Contributions

- Semester-long study of 96 CS students shows LLM usage dropped 42.7 percentage points when students moved from individual to team work; team context reduces deliberate LLM engagement.

## Connections to AI in Education

This paper contributes to the growing body of [[research-methods-aied|research]] on AI applications in educational settings, specifically in the domains of [[ai-education]], [[intelligent-tutoring]], and [[equity-in-ai-education]]. The findings have implications for how educators design learning experiences that leverage AI while maintaining appropriate [[pedagogy|pedagogical]] oversight.

## What this means for practice

- **Instructors.** Treat team formation as the point of intervention: self-reported LLM use fell 42.7 percentage points at the first team milestone (84% on individual homework to 39.6%) and recovered only to 75.0% and 78.1% at later milestones, so state expectations for LLM use explicitly when teams form instead of assuming individual-work norms carry over.
- **Instructors.** Assess the prompting and verification practices you want, not just whether the tool was used: on team assignments "no technique used" rose 22.4 percentage points to 29.7%, non-verification more than quadrupled to 32.6%, and test-based verification fell 19.4 percentage points to 13.8%.
- **Instructors.** Do not run a single extended team phase: the recovery at the second milestone suggests interleaving individual work between team milestones helps students keep their AI practices, and courses with long unbroken team phases may see more persistent suppression.
- **Designers.** Make the first team task one where LLM assistance is genuinely useful: the first milestone required no coding (topic, research questions, data sources), which confounds social context with task type for that data point, whereas later coding-heavy milestones showed a smaller but persistent gap.

## Limitations

- The study covered two sections of one upper-division CS course at a single institution, serving students with substantial prior programming experience; the authors caution that transferability to introductory courses, other institutions and non-computing disciplines should be assumed cautiously.
- All behavioral measures are self-reported through a survey instrument, which allows social desirability bias; the authors note the likely direction of that bias would attenuate the differences observed, so the true shift may be larger.
- Analysis treated survey non-response as non-use, response counts ranged from 90 to 96 across the six assignments, no values were imputed, and participation was voluntary, so non-response bias was not ruled out; no demographic data were collected, preventing checks by background or experience level.
- The first team milestone confounded social context with task type (non-coding planning), and the within-student design cannot establish causality, so claims about an independent effect of collaborative context are bounded, as the authors themselves state.

## Connected Concepts

- [[ai-education]]
- [[collaborative-learning]]
- [[student-experience]]
- [[human-ai-collaboration]]

## Connected Articles

- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): An Experience Report on LLM Integration in CS2
- [[mixed-reality-engineering-learning]] — Visualizing Engineering Fundamentals: Design of Mixed Reality and Physical Toolkits for Effective Learning
- [[cogtax-cognitive-taxonomy]] — CogTax: A Four-Level Cognitive Taxonomy for Command-Line Computing Education
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use
- [[gaze-informed-ai-children]] — Gaze-Informed Proactive AI Assistance for Children’s Picture Exploration
- [[tactile-statistical-graphs-accessibility]] — Touching and Feeling the Data: A Reusable Software Pipeline for Tactile Statistical Graphs in Accessible Education

## Citation

Sehrish Basir Nizamani, Zannah Ziew, Saad Nizamani, Khyati Goyal (2026). [Less Deliberate in Teams: Student LLM Use Across Individual and Collaborative Work](https://arxiv.org/abs/2606.30860). ACM SIGCSE Virtual 2026, submitted 29 Jun 2026
