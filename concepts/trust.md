---
title: Trust
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: concept
tags: [trust, ai-literacy, educational-robotics, human-ai-collaboration, critical-thinking, intelligent-tutoring]
confidence: high
---

> **Trust** — the willingness of learners, educators, and institutions to rely on a person or an AI system for learning, judgment, and decision-making. In [[ai-education|AI in education]], trust spans two related but distinct domains: **trust in AI** (confidence in the competence, transparency, reliability, and benevolence of an AI system or agent) and **interpersonal trust** (the relational trust between students and instructors, between learners and peers, and across the institution). Both are double-edged: appropriate trust enables productive [[student-engagement|engagement]], while over-trust invites [[cognitive-offloading|over-reliance]] and under-trust blocks beneficial use. The central challenge is **calibration** — aligning trust to actual reliability, whether that reliability belongs to a model or to a person.

## Questions to Consider

- When you say you 'trust' an AI tool versus trusting a teacher or a colleague, are you describing the same thing? What is similar, and what is fundamentally different, about placing trust in a system versus in a person?
- There's a documented 'trust-utility gap': a tool's apparent competence often exceeds its actual reliability. Recall a tool that looked impressive but let you down, or one that seemed limited but proved dependable. What shaped the gap between how it looked and what it could really do?
- Consider an AI that always agrees with you and never challenges your ideas. It might feel comfortable and trustworthy — but is agreement the same as reliability? What might you be giving up if the tool you rely on never pushes back?
- The page argues that an instructor's trust in AI shapes how students trust that AI — the two domains interact. In a course you know well, how would a teacher's enthusiasm or skepticism about AI influence whether students accepted or questioned the tool?
- Students often decide whether to disclose their AI use based on comfort with their instructor more than on policy. If you were (or are) a student, what would make you willing to be honest about using AI — and what would make you hide it? What does that say about how trust is actually built in a classroom?
- One finding: an AI tutor that warns 'I may make mistakes' prompted students to seek more help, not less. What does this suggest about whether acknowledging limits undermines or strengthens the trust that supports real learning?

## Introduction

Trust in AI is shaped by perceived competence, transparency, consistency, and whether the system appears aligned with the learner's goals; it is closely tied to [[ai-literacy]] (knowing what to trust), [[critical-thinking]] (evaluating output), and the design of responsible AI. Interpersonal trust, by contrast, is built through relationships, disclosure, feedback, and [[pedagogy|pedagogical]] care — the qualities students rely on when they decide whether an instructor or an AI is a trustworthy source of guidance. The two domains increasingly interact: AI is woven into teacher-student relationships, so how students trust their instructor shapes how they trust (or question) the AI tools that instructor endorses.

## Trust in AI systems

[[research-methods-aied|Research]] in this knowledge base examines when learners appropriately trust AI-generated guidance. [[ai-fallibility-warning-help-seeking|Warnings about AI fallibility]] can improve calibration: a simple transparency intervention telling students an AI tutor may make mistakes increased [[help-seeking]] in a math ITS, suggesting that honest limits foster rather than undermine appropriate reliance. [[calibrating-trustworthiness-llm-education-2026|Co-designing trustworthiness metrics]] with learning engineers shows that trust is best built on observable, agreed-upon criteria rather than assumed capability. [[fouad-bentley-trust-utility-gap-physics-2026|Physics]] and [[t2i-competence-paradox-2026|image-generation]] studies reveal a persistent *trust-utility gap* — users must weigh a tool's apparent competence against its actual reliability in a task. Among the youngest users, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] found that 52% of children (ages 6–14) generally trusted an age-tailored chatbot and 35% trusted it like a teacher or friend, with about a third willing to confide in it; children also actively tested its credibility with known-answer questions, and trust showed no statistically significant grade-level differences — illustrating how early trust can form ahead of critical evaluation.

The [[ai-overreliance-complex-adaptive-system-2026|modeling of AI overreliance as a complex adaptive system]] reframes trust as a population-level process: whether people trust an assistant when it is right and check it when it is wrong depends on social dynamics and feedback loops, not just individual judgment. Sycophancy threatens calibration from the other direction — [[ai-sycophancy|an AI that always agrees]] can feel trustworthy precisely because it never challenges the user, inviting uncritical acceptance ([[contextual-sycophancy-ai-literacy|contextual sycophancy]] and [[sycophantic-ai-social-interaction-2026|sycophantic AI in social interaction]]). In [[embodied-learning|embodied]] contexts like [[educational-robotics]], trust is shaped more by what the robot does than what it looks like ([[task-context-trust-educational-hri-2026|task context and trust in educational HRI]]), and [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|avatar identity]] shapes the epistemic trust learners place in AI content. Trust in analytics tools is also context-dependent. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] found that teachers' concerns and adoption barriers diverged sharply by learning context: flipped-classroom (university) teachers worried most about data anonymization and student opt-out, whereas reflective-writing (vocational) teachers feared misuse of the tool by fellow educators and stressed the need to contextualize data — even though both groups reported similar [[self-efficacy]] and perceived benefits in a trust in AI survey. The finding that trust in the tool is decoupled from trust in its data governance and social use underscores that building appropriate trust in analytics requires attending to context-specific concerns, not just the system's apparent competence.

How explainable a system is — and in what terms — also shapes whether teachers trust its recommendations. In a within-subject experiment with 41 in-service chemistry teachers using the AI grouping-recommendation tool [[xai-teachers-trust-edtech-recommendations-2026|GrouPer]], [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] found that explainable AI builds trust indirectly by increasing the *understandability* of the system's performance, and that **domain-driven** explanations framed in curricular/pedagogical language fostered significantly greater understandability and learned trust than purely **data-driven** (feature-importance) explanations. Notably, understandability alone was insufficient for some teachers — they reported needing real classroom experience with the tool before fully relying on it — reinforcing that trust in AI is dynamic and validated through situated use, not granted by explanation alone.

## Interpersonal trust in education

Trust is also fundamentally relational. The classroom trust gap is documented in [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai|teacher-student views on control and agency in K-12 AI]]: students want greater autonomy and flexibility while teachers prioritize oversight and monitoring, a misalignment that both sides must navigate for AI adoption to succeed. [[qu-wang-disclose-or-not-genai-2026|Why students disclose or conceal their AI use]] shows that disclosure is driven less by policy than by relational factors — perceived peer norms and **comfort with instructors** are the strongest predictors, pointing to low interpretive trust in [[governance|institutional]] settings. [[vetter-hidden-cost-disclosure-genai-2026|The hidden costs of disclosure]] add nuance about when honesty is socially costly.

Feedback is a key site of interpersonal trust. [[genai-teacher-feedback-comparison|Students' perceptions of GenAI versus teacher feedback]] find the two serve different needs — complementary but not interchangeable — with students trusting teacher feedback for relational, personalized judgment and [[generative-ai|GenAI]] for speed and [[accessibility]]. [[care-full-feedback-genai|A "care-full" account of feedback]] argues that trustworthy feedback is an [[ethics|ethical]], relational practice: it builds educative relationships and is respected as a professional craft, values an AI cannot simply replicate. This is why teacher-student trust — built on care and professional judgment — remains central even as AI enters the feedback loop.

## Calibration and the two domains together

The unifying challenge is **calibration**: matching trust to actual reliability, whether the trusted party is a model or a person. [[trust-calibration]] is the [[metacognition|metacognitive]] capacity to know when to trust and when to question. Studies of AI [[feedback]] and [[intelligent-tutoring]] examine when learners appropriately rely on or challenge AI guidance, while the interpersonal literature shows that students' trust in an instructor depends on relational trust built over time. As AI becomes embedded in [[teacher-role|teaching]], these domains converge: an instructor who transparently explains what an AI tool can and cannot do, and who demonstrates reliability in their own judgment, builds the kind of trust that carries over to the tools they endorse. Building appropriate trust — in both AI and in each other — is a core goal of responsible AI design in education.

Calibration is also tested by the incentives of the trusted system itself. When staff skeptical of AI adoption consult [[conversational-ai|conversational AI]] — built by organizations with a commercial stake in adoption — there is a risk the system is predisposed to encourage it. An audit of ten frontier models found most acknowledged a rural [[k-12]] staff member's concerns (job threat, being 'not for people like me') before redirecting toward engagement. This challenges naive reliance on trust and underscores the importance of [[human-in-the-loop-ai|human oversight]] and independent [[ai-ed-evaluation|evaluation of AI]] advice.

## Connected Concepts

- [[trust-calibration]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[educational-robotics]]
- [[ethics]]
- [[intelligent-tutoring]]
- [[ai-sycophancy]]
- [[human-ai-collaboration]]
- [[remote-proctoring]]

## Connected Articles
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — XAI-augmented UTAUT2: habit as strongest predictor, four adoption profiles (Jácome-Vásconez et al. 2026)

- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — The teacher-student trust gap over control and agency in K-12 classroom AI
- [[qu-wang-disclose-or-not-genai-2026]] — Disclosing AI use is driven by relational factors and comfort with instructors, not policy
- [[genai-teacher-feedback-comparison]] — GenAI and teacher feedback serve different, complementary trust needs
- [[care-full-feedback-genai]] — Trustworthy feedback as a "care-full," relational practice
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in an ITS
- [[calibrating-trustworthiness-llm-education-2026]] — Co-designing trustworthiness metrics and visualizations for LLMs in education
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[fouad-bentley-trust-utility-gap-physics-2026]] — The trust-utility gap in physics AI tools
- [[t2i-competence-paradox-2026]] — The competence paradox in AI image generation
- [[task-context-trust-educational-hri-2026]] — Task context shapes trust in educational robots more than appearance
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Avatar identity and epistemic trust in AI-mediated learning
- [[contextual-sycophancy-ai-literacy]] — Contextual sycophancy and its limits for trust calibration
- [[sycophantic-ai-social-interaction-2026]] — Sycophantic AI makes human interaction feel less satisfying over time
- [[intelligent-tpack-ethics-teachers-trust-distrust-2026]] — Teachers' trust and distrust of AI shaped by ethics and technical knowledge
- [[ai-pedagogical-accompaniment-amico]] — Accountable pedagogical mediation and trust in AI-enabled systems
- [[best-response-student-ai-dialog-2026]] — Trust in student-AI dialogue
- [[ai-adaptation-gap-higher-education-2026]] — Perceived usefulness as the strongest predictor of AI trust in higher ed
- [[bassett-ai-detectors-education-2026]] — Trust and distrust of AI detection systems

- [[genai-use-usefulness-student-experience-australia-2026]] — Student experience of GenAI usefulness in Australian higher ed (Chung et al. 2026)
- [[frontier-ai-redirect-skeptical-rural-staff-2026]] — Algorithmic audit: how frontier LLMs redirect skeptical rural K-12 staff
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
