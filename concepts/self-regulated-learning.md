---
title: Self-Regulated Learning
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [self-regulated-learning, metacognition, scaffolding, k-12, higher-ed, formative-assessment, personalized-learning]
confidence: high
sources: [raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md, raw/papers/stanford-evidence-base-ai-k12-2026.md]
---
> 📄 Full text: [Springer](https://link.springer.com/content/pdf/10.1186/s41239-026-00589-7.pdf) · [local](raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md) · [Stanford SCALE](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf) · [local](raw/papers/stanford-evidence-base-ai-k12-2026.md)




# Self-Regulated Learning

> Self-regulated learning (SRL) describes learners as active participants who can shape and develop their cognitive and behavioral actions in a successful way. AI tools can either scaffold SRL development or inadvertently short-circuit it by removing the regulatory demands that build expertise.^[[scheu-mobile-chatbot-journaling-motivation-2026]]^[[stanford-evidence-base-ai-k12-2026]]

## Definition

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

## Related Pages
-- [[genai-feedback-design-multisite-experiment]]
 [[agency-gap-ai-writing]] — Reactive designs make learner regulation visible
- [[cross-subject-validity-delayed-start]] — Delayed start behavior as a cross-subject behavioral proxy for self-regulation and learning outcomes
- **[[ai-assistance-reduces-persistence]]**: Causal evidence (N=1,222) that brief AI assistance reduces persistence and impairs unassisted performance — rapid emergence of over-reliance effects
- [[ai-fatigue-academic-contexts]] — Motivational Disengagement dimension threatens self-regulated learning capacity
- [[llm-automated-assessment-student-self-explanations]] — Automated scoring of self-explanations as an SRL support tool (2026)
- [[xai-education-framework]]
- [[teacher-student-agency-orchestration]]
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: an AI Literacy Intervention in Human-AI Collaboration
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study
- [[cost-of-ethics-crisis-cs-ethics-education]] — Cost-of-Ethics Crisis: Beliefs, Decisions, and Justification...
- [[ecnuclaw-k12-personalized-companion]] — Contextual dimension connects to regulatory skill development in dialogue
- [[sequenced-ai-feedback-learning]] — Cao et al. RCT: autonomy-supportive sequenced feedback backfired — caution for SRL-aligned AI design
- [[regulating-ai-tutor-adolescent-srl]] — Adolescents default to answer-seeking despite SRL intentions with AI tutor- [[learning-by-chatting-genai-impact]] — Learner agency and help-seeking in ChatGPT-mediated information seeking
- [[generativism-learning-theory]] — Adaptive metacognition in Generativism builds on self-regulated learning theory
- [[self-efficacy-tutoring-learning]] — Self-Efficacy and Favorability Shape Learning from Tutoring
- [[curiobot-llm-tutoring-exploratory-learning]] -- Curiosity-oriented LLM interventions (novelty, complexity, conflict, uncertainty) increased exploratory learner behaviors up to 2.4x — acting as a partially independent interaction-level mechanism.
- [[epistemic-proactivity-math]] — epistemic proactivity in student-AI math interactions
- [[aied-unfinished-mission-bypass]] — AIED's Unfinished Mission
- [[q-learning-lab-rl-teaching]] — Observable learning process (2026-07-14)
- [[informal-learning-everyday-human-llm-interaction]] — Informal Learning Emerges in Everyday Human-LLM Interaction
- [[metacognitive-awareness-experiential-vs-instructional]] — Experiential Versus Instructional Approaches for Eliciting Metacognitive Awarene
- [[student-cheat-sheets-make-or-take]] — Students choose between self-created and instructor-provided cheat sheets based on trust, personaliz
- [[genai-performance-vs-learning]] — SRL cycle disrupted by performance-only AI use- [[llm-reasoning-traces-metacognition]] — Metacognitive calibration requires active reasoning before AI exposure
- [[metacognitive-learning-scenarios-taxonomy]] — Taxonomy operationalizes SRL progression from novice to expert
