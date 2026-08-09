---
title: Self-Regulated Learning
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [self-regulated-learning, metacognition, scaffolding, k-12, higher-ed, formative-assessment, personalized-learning, llm, generative-ai, student-experience]
confidence: high
---

> Self-regulated learning (SRL) describes learners as active participants who can shape and develop their cognitive and behavioral actions in a successful way. AI tools can either scaffold SRL development or inadvertently short-circuit it by removing the regulatory demands that build expertise.^[[scheu-mobile-chatbot-journaling-motivation-2026]]^[[stanford-evidence-base-ai-k12-2026]]

SRL is the process whereby learners actively manage their own learning through three interrelated phases:

1. **Forethought:** Goal setting, strategic planning, self-efficacy beliefs
2. **Performance:** Strategy deployment, self-observation, attention focusing
3. **Self-reflection:** Self-evaluation, causal attribution, adaptation

Proficient self-regulated learners employ cognitive strategies to improve success and utilize [[metacognition]] to refine their learning processes continuously.^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## Digital Support for SRL

### Learning Journals

Learning journals are a promising SRL intervention: by reflecting on their learning processes, students increase awareness of cognition and strengthen regulatory capacity. Key design considerations:

- **Structure matters:** Open-ended journals often produce shallow entries; guided prompts and example models improve depth
- **Motivation decay:** Mobile journaling apps commonly see rapid engagement decline after a few days
- **Scaffolding trade-off:** AI assistance that writes reflections for students undermines the SRL practice; assistance that structures prompts without authoring content preserves it

### Scheu et al.'s 2×2 Experiment (2026)

In a randomized field experiment with 179 students over 22 days, two design principles were compared:

| Principle | Mechanism | Effect on SRL | Effect on Motivation | Effect on Engagement |
|---|---|---|---|---|
| **Example-based course** | 7-day curriculum teaching reflective journaling via modeled responses | Increased perceived competence and enjoyment | **Positive** | Constant positive |
| **LLM journaling assistant** | GPT-3.5 summarizes drafts, asks clarifying questions, suggests reformulations | No direct SRL skill effect measured | **No effect** | Increasing over time (feedback loop) |

**Key insight:** The course improved SRL skills *and* intrinsic motivation through skill transfer, while the assistant improved engagement without affecting motivation.^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## AI Tools and the SRL–Motivation Reciprocal Loop

A foundational principle of SRL theory is that self-regulation skills and motivation form a **reciprocal relationship**:

- Better SRL → more successful learning → higher self-efficacy → stronger motivation
- Higher motivation → more effortful engagement → better SRL practice

AI tools can enter this loop at different points:

- **SRL-first design** (e.g., structured courses, graduated hints, reflection prompts): Strengthens the loop by building genuine skill
- **Engagement-first design** (e.g., autocomplete, content generation): May boost behavioral engagement without entering the motivation loop, risking tool dependence

## Relationship to Tutoring-Specific Design

[[tutoring-specific-vs-general-ai|Tutoring-specific AI]] aligns with SRL-first design: it provides graduated scaffolds that preserve learner agency and require strategic self-regulation. General-purpose AI often removes the regulatory demands entirely.^[[stanford-evidence-base-ai-k12-2026]]

For example:
- Bastani et al.'s tutoring-specific chatbot preserved step-by-step reasoning (SRL demand)
- The general-purpose GPT variant simply provided answers (SRL bypass)

## Implications

- **For journaling/chatbot tools:** Combine SRL instruction (course-based) with optional writing support to get both motivation and engagement gains
- **For AI policy:** Procurement criteria should ask whether a tool develops or displaces self-regulation
- **For researchers:** Long-term studies measuring SRL outcomes (not just immediate performance) are essential

## Connected Concepts

- [[metacognition]]
- [[scaffolding]]
- [[higher-ed]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[rag]]
- [[formative-assessment]]
- [[k-12]]
- [[teacher-role]]

## Connected Articles

- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[genai-policies-higher-ed-computing]] — A Comparative Analysis of Institutional and Course Generative AI Policies within Higher Education: Implications for I...
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[stanford-evidence-base-ai-k12-2026]] — Stanford Evidence Base: AI in K-12 Education
- [[multiagent-classroom-dual-process-physics-teachers-2026]] — A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers
- [[metacognitive-learning-scenarios-taxonomy]] — A Taxonomy of Metacognitive Learning Scenarios in Professional Contexts: Integrating Systems Theory with Empirical Co...
- [[liang-genai-systematic-review-human-ai-2026]] — A systematic review of generative AI in education: Empirical insights from a human–AI interaction perspective
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-literacy-legal-translation-2026]] — AI Literacy for Legal Translation: Developing Digital Resilience
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[genai-usage-design-students-survey]] — A study of GenAI usage by Design Students: Analysis of Survey Results and Journals of AI practices at the Politecnico...
- [[brookings-ai-students-report]] — A New Direction for Students in an AI World: Prosper, Prepare, Protect
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[teacher-ai-adoption-confidence]] — AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study o...
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[ai-metacognition-stem-review]] — AI Tools Scaffolding Metacognition in STEM
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-learning-transfer]] — AI Learning Transfer
