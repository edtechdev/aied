---
title: "Designing for Authentic Assessment: A Scoping Review"
created: "2026-05-07T19:55:03-04:00"
updated: "2026-08-26T15:34:14-04:00"
type: article
tags: [ai-ed-evaluation, ai-education, assessment, formative-assessment, higher-ed, metacognition, self-regulated-learning, pedagogical-llm-training, human-in-the-loop-ai, sociocultural-learning]
level: [higher ed]
category: [ai ed evaluation, assessment]
sources: ['raw/papers/zhan-boud-du-authentic-assessment-scoping-review-2025.md']
confidence: high
---

> Wiggins (1990) proposed AA as a counterbalance to standardised tests: direct examination of "student performance on worthy intellectual tasks."

> Authentic assessment (AA) has evolved from workplace-task replication toward a multi-dimensional framework encompassing professional, digital, personal, and social authenticity. The recent challenge by generative AI—which threatens the validity of any task that can be replicated à la Wiggins (1990)—makes AA's broader forms essential. Zhan, Boud & Du (2025) propose a six-dimensional design model that centres student agency and social collaboration, directly relevant to how AI assessment tools should be designed.

## The Evolution of Authenticity

### 1990s Origins: Worthy Intellectual Tasks
Wiggins (1990) proposed AA as a counterbalance to standardised tests: direct examination of "student performance on worthy intellectual tasks."

### Late 1990s HE Uptake: Workplace Replication
Joughin (1998) argued authenticity should reflect the extent to which assessment replicates professional practice or real life. This view dominated for two decades.

### 2020s Critique: Beyond Replication
McArthur (2023) contends AA must enable students to "**influence the future and transform society**" rather than merely replicate existing tasks. Ajjawi et al. (2024) broaden authenticity to contextual, task, and personal forms that reflect student experience.

### Generative AI as Existential Challenge
Generative AI makes traditional workplace-replication AA newly vulnerable: any task that a language model can credibly simulate in a take-home setting loses its validity as an assessment of original student competence. The field must pivot toward forms of authenticity (digital literacy, real-time collaboration, social contribution, individual meaning-making) that AI cannot credibly counterfeit.

## Six-Dimensional Framework (Zhan et al., 2025)

This scoping review of 37 empirical AA studies (2000–2024) proposes six design dimensions, moving beyond earlier frameworks (Gulikers et al., 2004; Villarroel et al., 2018):

1. **Authenticity in assessment** — multiple meanings: assessment authenticity (portfolios, projects, concept maps), professional authenticity (workplace scenarios), digital authenticity (Twitter, podcasts, YouTube, LMS), self-authenticity (student identity, well-being), and social authenticity (citizenship, sustainability, ethics). Only **3 of 37 studies** addressed social authenticity — a critical gap.
2. **Cognitive challenges** — knowledge construction (n=29), professional skills (n=22), and 21st-century skills (n=29, led by critical thinking n=17, communication n=13). Digital literacy: only **n=5**.
3. **Assessment criteria** — rubric use was common (n=22) but most students were **passive recipients** rather than co-authors. Only 3 studies co-designed rubrics with students; only 7 involved students as assessors via self/peer assessment.
4. **Feedback** — formative feedback dominated (n=23), summative was common (n=12), but **sustainable feedback** (transferable to future contexts) appeared in only 4 studies. This mirrors the field-wide problem that AI tools also replicate: reactive, momentary feedback rather than lifelong evaluative judgement.
5. **Student agency** — choices about what/how/when/where to submit appeared in only **n=8 studies**. Self-reflection was more common but often **assigned/graded**, making it potentially **performative** (instrumental rather than genuine).
6. **Social collaboration** — mostly individual tasks (n=18) or group tasks (n=16), with few mixing both (n=3). Peer collaboration strategies (peer assessment, peer discussion) appeared in n=16 studies; teacher–student collaboration in n=16, though only 3 designed *equitable* teacher–student partnership (roles were usually feedback-giver, monitor, facilitator — a power imbalance); external industry/community connections in only n=5. Social construction of assessment meaning was under-theorized but present.

## AI-Specific Implications

### What AI Assessment Tools Get Wrong
Current AI assessment systems — MCQ generators ([[formative-assessment|CODE-GEN]]), essay scorers (MASS), short-answer graders — focus on **efficiency and standardization**, replicating the very limitations Zhan et al. identify:

- **Rubric-centric:** AI systems typically generate pre-defined rubrics without student co-design, replicating the "passive recipient" problem
- **Momentary feedback:** AI formative feedback is abundant but rarely designed as **sustainable evaluative judgement**
- **Professional authenticity bias:** Most AI-generated assessments simulate workplace or academic tasks, neglecting personal and social authenticity
- **Choicelessness:** AI assessment systems rarely allow students to define assessment parameters, output formats, or evaluation criteria

### The Four-Step Collaborative Design Framework
Zhan et al. propose a cyclical design model that AI tools could operationalize:

| Step | Action | AI Enabler | AI Risk |
|------|--------|------------|---------|
| 1. Decide goals | Students + educators **co-negotiate** purpose and authenticity | LLM-facilitated dialogue tools | Over-optimizing for what's easy to grade |
| 2. Create context | Design real-world scenarios | RAG-augmented scenario generation | Hallucinating false domain contexts |
| 3. Design criteria | **Co-design rubrics** with students | Collaborative rubric editors | Imposing opaque algorithmic criteria |
| 4. Plan feedback | Future-oriented, sustainable feedback | LLM personalization based on learner profiles | Surveillance-level behavior tracking |

## Connections to AI Education Research

### Self-Regulated Learning
Student agency in AA (choice, self-reflection, co-design) is isomorphic to the [[self-regulated-learning|forethought → performance → self-reflection]] cycle. However, when self-reflection is **graded**, it becomes **performative** — students write to impress assessors rather than to learn. AI journaling tools face the same instrumentalization risk.

### Metacognitive Calibration
[[metacognition|Metacognition]] is required for students to evaluate their own work against co-designed rubrics. When AI provides the rubric, generates the feedback, *and* monitors progress, the student's metacognitive practice is displaced — the very suppression risk identified in [[ai-tutor-safety-harms|SafeTutors]] and [[llm-fallacy-misattribution|LLM Fallacy]] research.

### Pedagogical Training
Theory-grounded training (see [[pedagogical-llm-training|ISD-Agent-Bench, EduQwen]]) should explicitly align with the six-dimensional framework. A model trained to reward "guiding over answering" still falls short if it does not understand **sustainable feedback**, **co-designed rubrics**, or **social authenticity**.

### Adaptive Systems
[[adaptive-learning|Adaptive systems]] that personalize only *content difficulty* miss the personalization of *assessment authenticity*. DeepTutor's multi-resolution memory and MAIC's archetype agents begin to address this, but neither incorporates student co-design of assessment parameters.

## Open Questions

1. **AI-proof assessment types:** Which forms of authentic assessment are robust to generative AI? In-vivo demonstrations, social contribution portfolios, co-created artefacts with auditable provenance chains, and assessments requiring real-time embodied interaction may be more resilient than take-home essays or MCQs.
2. **Student co-design at scale:** Zhan et al. show co-design is rare (3/37 studies). Can AI tools *enable* rubric co-design at classroom or MOOC scale, or does the paradox of machine-mediated human agency undermine the authenticity itself?
3. **Sustainable feedback via LLM:** Can a language model deliver feedback that students apply months later? The CDPK and ISD benchmarks test pedagogical knowledge transfer to models, not feedback sustainability transfer to students.
4. **Social authenticity deficit:** Only 3 studies addressed social issues (citizenship, sustainability, ethics). How can AI assessment tools help students contribute to societal transformation rather than merely simulate it?

## Connected Concepts

- [[adaptive-learning]]
- [[desirable-difficulties]]
- [[faculty-development]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[metacognition]]
- [[pedagogical-llm-training]]
- [[self-regulated-learning]]
- [[sociocultural-learning]]

- [[ai-ed-evaluation]]
- [[ai-education]]
- [[higher-ed]]
## Connected Articles

- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: redesigning authentic assessment in an AI-mediated world
- [[authentic-products-authenticated-processes-2026]] — From authentic products to authenticated processes: authentic assessment in AI-rich higher education
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence

## Citation

Zhan, Y., Boud, D., & Du, Z. (2025). [*Designing for authentic assessment: a scoping review*](https://doi.org/10.1007/s10734-025-01588-9). *Higher Education*.
