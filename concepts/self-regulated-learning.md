---
title: Self-Regulated Learning
created: 2026-05-07
updated: 2026-08-15
type: concept
tags: [self-regulated-learning, metacognition, scaffolding, k-12, higher-ed, formative-assessment, personalized-learning, llm, generative-ai, student-experience]
confidence: high
---

> Self-regulated learning (SRL) describes learners as active participants who can shape and develop their cognitive and behavioral actions in a successful way. AI tools can either [[scaffolding|scaffold]] SRL development or inadvertently short-circuit it by removing the regulatory demands that build expertise.^[[scheu-mobile-chatbot-journaling-motivation-2026]]^[[stanford-evidence-base-ai-k12-2026]]

SRL is the process whereby learners actively manage their own learning through three interrelated phases:

1. **Forethought:** Goal setting, strategic planning, [[self-efficacy]] beliefs
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

A foundational principle of SRL theory is that self-regulation skills and [[motivation]] form a **reciprocal relationship**:

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

- [[learning-by-teaching]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[over-reliance]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[llm]]
- [[teacher-role]]
- [[higher-ed]]
- [[generative-ai]]
- [[authentic-assessment]]
- [[feedback-literacy]]
- [[feedback]]
- [[learning-theories]]
- [[behaviorism]]

## Connected Articles
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: redesigning authentic assessment in an AI-mediated world (Kickbusch et al. 2025)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[metacognitively-discordant-completion-genai-2026]]
- [[ai-guided-learning-audiovideo-2026]]

- [[agents-that-teach-incidental-learning]]
- [[ai-fatigue-academic-contexts]]
- [[ai-learning-assistants-higher-ed-large-scale]]
- [[ai-learning-companions-framework]]
- [[ai-making-us-stupid]]
- [[ai-tutor-safety-harms]]
- [[aied-unfinished-mission-bypass]]
- [[bloom-aligned-educational-control-llms]]
- [[codify-socratic-programming-tutor]]
- [[cognitive-offloading-llm-synthesis-writing]]
- [[critical-thinking-genai-scaffolding]]
- [[cross-subject-validity-delayed-start]]
- [[curiobot-llm-tutoring-exploratory-learning]]
- [[ecnuclaw-k12-personalized-companion]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[ai-feedback-enactment-workflow-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[andragogy-cognitive-delegation-genai-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Instructor-Designed AI Tutors in University Foreign Language Education: A Mixed-Methods Study of Learner Motivation and Reflective Learning Experience Based on Self-Determination Theory
- [[ai-cognitive-partner-co-regulation-learning]]
- [[self-directed-growth-generative-ai-learning-analytics]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
