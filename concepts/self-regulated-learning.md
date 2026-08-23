---
title: Self-Regulated Learning
created: "2026-05-07T10:44:35-04:00"
updated: "2026-08-23T08:30:00-04:00"
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

### Strategic Regulation of GenAI as SRL

[[ai-anxiety-strategic-regulation-writing-2026|Kim (2026)]] reframes effective GenAI use in academic writing as **strategic regulation** — an enacted SRL practice of verifying, revising, selectively adopting, or rejecting AI output. In a mixed-methods study of 107 students, higher AI anxiety was positively associated with verification and revision (β=.24), while evaluative capacity predicted active revision and selective integration (β=.46). Students clustered into four regulatory types — Uncritical Reliance (18.7%), Selective Integration (34.6%), Evaluative Transformation (31.8%), and Strategic Rejection (14.9%) — showing that [[ai-literacy|AI literacy]] in higher education functions less as acceptance than as regulatory competence grounded in evaluative judgment and ethical responsibility. This positions SRL as the core mechanism distinguishing critical from uncritical AI use.

## Relationship to Tutoring-Specific Design

[[tutoring-specific-vs-general-ai|Tutoring-specific AI]] aligns with SRL-first design: it provides graduated scaffolds that preserve learner agency and require strategic self-regulation. General-purpose AI often removes the regulatory demands entirely.^[[stanford-evidence-base-ai-k12-2026]]

For example:
- Bastani et al.'s tutoring-specific chatbot preserved step-by-step reasoning (SRL demand)
- The general-purpose GPT variant simply provided answers (SRL bypass)

## Implications

- **For journaling/chatbot tools:** Combine SRL instruction (course-based) with optional writing support to get both motivation and engagement gains
- **For AI policy:** Procurement criteria should ask whether a tool develops or displaces self-regulation
- **For researchers:** Long-term studies measuring SRL outcomes (not just immediate performance) are essential


- **Mixed evidence and the miscalibration gap.** A rapid review of PreK-12 GenAI research finds metacognitive gains during supported tasks often do not persist when support is removed, and that GenAI can increase perceived learning even when durable learning is absent (the miscalibration gap — students preferred GenAI over note-taking despite weaker retention). Students need explicit, stage-appropriate training to decide what to delegate and when independent effort matters.^[[young-people-learning-generative-ai-rapid-review-2026]]
Agentic initiative and self-regulation can be in direct tension: [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] note that as agents automate more of a task, the less self-regulated cognitive work the learner performs — so designs should give learners control over agent initiation (dynamic, fading scaffolding) to preserve self-regulatory capacity rather than outsourcing it.

## Connected Concepts

- [[eportfolio]]
- [[self-directed-learning]]
- [[learning-by-teaching]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[cognitive-offloading]]
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
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Connected Articles
- [[benali-genai-academic-writing-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[genai-thoughtless-use-self-directed-learning-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-communities-of-inquiry-2026]]
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
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
- [[young-people-learning-generative-ai-rapid-review-2026]] — Mixed evidence on metacognition/self-regulation with GenAI
- [[generative-ai-reduced-study-time-math]] — Cognitive surrender as loss of self-regulated learning
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[student-dependency-on-ai-literacy-self-efficacy-2026]]
- [[agentic-ai-pedagogical-best-practice-2026]]

- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education

- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers

- [[liu-tool-tutor-crutch-programming-2026]] — Tool, tutor, or crutch: grounded theory of AI-assisted programming

- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education

- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis

- [[luo-ibl-patterns-llm-bloom-2026]] — IBL patterns in LLM-driven environments (Bloom's perspective)
- [[lodge-adaptive-capabilities-genai-future-2026]] — Adaptive capabilities for assuring quality learning in a gen AI-integrated future (Lodge et al. 2026)
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[social-emotional-learning]] — Social-Emotional Learning
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning (Lukešová & Jennings 2026)

