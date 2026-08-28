---
title: Self-Regulated Learning
created: "2026-05-07T10:44:35-04:00"
updated: "2026-08-28T09:10:00-04:00"
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

- **[[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz et al.]]** demonstrate that whether students perceive feedback as coming from AI or a human significantly affects their self-regulated learning and revision behavior.

## Digital Support for SRL

### Learning Journals

Learning journals are a promising SRL intervention: by reflecting on their learning processes, students increase awareness of cognition and strengthen regulatory capacity. Key design considerations:

- **Structure matters:** Open-ended journals often produce shallow entries; guided prompts and example models improve depth
- **Motivation decay:** Mobile journaling apps commonly see rapid [[student-engagement|engagement]] decline after a few days
- **Scaffolding trade-off:** AI assistance that writes reflections for students undermines the SRL practice; assistance that structures prompts without authoring content preserves it

### Scheu et al.'s 2×2 Experiment (2026)

In a randomized field experiment with 179 students over 22 days, two design principles were compared:

| Principle | Mechanism | Effect on SRL | Effect on Motivation | Effect on Engagement |
|---|---|---|---|---|
| **Example-based course** | 7-day [[curriculum-design|curriculum]] teaching reflective journaling via modeled responses | Increased perceived competence and enjoyment | **Positive** | Constant positive |
| **[[llm]] journaling assistant** | GPT-3.5 summarizes drafts, asks clarifying questions, suggests reformulations | No direct SRL skill effect measured | **No effect** | Increasing over time ([[feedback|feedback loop]]) |

**Key insight:** The course improved SRL skills *and* intrinsic motivation through skill transfer, while the assistant improved engagement without affecting motivation.^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## AI Tools and the SRL–Motivation Reciprocal Loop

A foundational principle of SRL theory is that self-[[regulation]] skills and [[motivation]] form a **reciprocal relationship**:

- Better SRL → more successful learning → higher self-efficacy → stronger motivation
- Higher motivation → more effortful engagement → better SRL practice

AI tools can enter this loop at different points:

- **SRL-first design** (e.g., structured courses, graduated hints, reflection prompts): Strengthens the loop by building genuine skill
- **Engagement-first design** (e.g., autocomplete, content generation): May boost behavioral engagement without entering the motivation loop, risking tool dependence

### Strategic Regulation of GenAI as SRL

[[ai-anxiety-strategic-regulation-writing-2026|Kim (2026)]] reframes effective [[generative-ai|GenAI]] use in [[writing-education|academic writing]] as **strategic regulation** — an enacted SRL practice of verifying, revising, selectively adopting, or rejecting AI output. In a [[mixed-methods-research|mixed-methods]] study of 107 students, higher AI anxiety was positively associated with verification and revision (β=.24), while evaluative capacity predicted active revision and selective integration (β=.46). Students clustered into four regulatory types — Uncritical Reliance (18.7%), Selective Integration (34.6%), Evaluative Transformation (31.8%), and Strategic Rejection (14.9%) — showing that [[ai-literacy|AI literacy]] in [[higher-ed|higher education]] functions less as acceptance than as regulatory competence grounded in evaluative judgment and [[ethics|ethical]] responsibility. This positions SRL as the core mechanism distinguishing critical from uncritical AI use.

## Relationship to Tutoring-Specific Design

[[stanford-evidence-base-ai-k12-2026|Tutoring-specific AI]] aligns with SRL-first design: it provides graduated scaffolds that preserve [[agency|learner agency]] and require strategic self-regulation. General-purpose AI often removes the regulatory demands entirely.^[[stanford-evidence-base-ai-k12-2026]]

For example:
- Bastani et al.'s tutoring-specific [[conversational-ai|chatbot]] preserved step-by-step reasoning (SRL demand)
- The general-purpose GPT variant simply provided answers (SRL bypass)

## Evidence Across Contexts

- **Mixed evidence and the miscalibration gap.** A rapid review of PreK-12 GenAI research finds metacognitive gains during supported tasks often do not persist when support is removed, and that GenAI can increase perceived learning even when durable learning is absent (the miscalibration gap — students preferred GenAI over note-taking despite weaker retention). Students need explicit, stage-appropriate training to decide what to delegate and when independent effort matters.^[[young-people-learning-generative-ai-rapid-review-2026]]
- **Agentic initiative vs. self-regulation tension.** [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] note that as agents automate more of a task, the less self-regulated cognitive work the learner performs — so designs should give learners control over agent initiation (dynamic, fading scaffolding) to preserve self-regulatory capacity rather than outsourcing it.
- **Self-regulation shapes AI coding-assistant use.** [[computational-thinking-aica-2026|A study of AI coding assistants]] found high-[[computational-thinking]] students showed stronger self-regulatory coherence (planning-execution-self-reflection) and used AICA for code understanding, while low-CT students used it for immediate answer retrieval.

## LLM-Mediated SRL: Scaffold, Shortcut, or Partner?

A cluster of Learning Letters studies (2026) converges on a central tension: [[generative-ai|GenAI]] can scaffold, short-circuit, or partner with self-regulation depending on design and how learners regulate its use. The evidence points to SRL itself — not the tool — as the decisive variable.

- **[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al.]]** find that LLMs are woven into a *layered [[help-seeking]] ecosystem* rather than replacing human support: students try tasks independently first, then consult ChatGPT as a low-barrier first step, peers for conceptual negotiation, and instructors for high-stakes issues. They favor **instrumental help-seeking** (hints, step-by-step guidance) over **executive help-seeking** (direct solutions), exercising selective [[trust|trust]] and verifying outputs against course materials — a four-stage process (deciding whether help is needed, choosing whom to ask, determining the type of help, judging the help received) that can be measured and taught.
- **[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif & Dickson-Deane]]** frame GenAI use as **[[cognitive-offloading]]** that can be either *scaffolded* (learners critique and adapt AI outputs, keeping [[agency|agency]] and sense-making) or *substitutional* (learners accept outputs with minimal verification, shifting control to the tool). In a study of 267 postgraduate IT students, the same tool could scaffold or shortcut SRL depending on learner strategy — confident users showed agency in goal setting and monitoring; less confident users saw GenAI as a shortcut or misconduct.
- **[[lim-bannert-student-regulation-genai-chatbot-2026|Lim & Bannert]]** show the risk concretely: students voluntarily used a genAI chatbot (73%) and scored higher on essays, but they offloaded comprehension and synthesis (asking the chatbot to "extract only the main ideas") and engaged in almost no planning or monitoring — outsourcing key regulatory decisions. This reflects a **production deficit**: students possess SRL knowledge but fail to deploy it spontaneously, so genAI tools should prompt reflection (a monitoring scaffold) when queries indicate offloading.
- **[[song-genai-learning-partner-srl-over-time-2026|Song et al.]]** demonstrate that SRL is both a **stable aptitude and a dynamic state**: individual baselines are consistent, but metacognitive knowledge and wellbeing decline systemically over a semester, driven by assessment deadlines. They show GenAI can act as a context-aware **learning partner** when it is given personal, temporal, and contextual data — supporting students without replacing their effort. This argues against "one-time-fits-all" personalization based on baseline aptitude alone.
- **[[de-barba-srl-genai-2026|de Barba]]** extends SRL theoretically, arguing the field has narrowed to task-focused regulation and to optimisable behavioural proxies in educational technology. The paper proposes a cross-scale account of **learner agency** — regulation (within tasks), integration (across time and contexts), and positioning (critically in relation to the conditions framing learning) — as a design orientation for algorithmically mediated environments.

The collective lesson: **SRL is the core mechanism distinguishing critical from uncritical AI use.** Whether GenAI functions as a scaffold, shortcut, or partner depends on learners' regulatory capacity and on whether tools are designed to preserve (rather than remove) the regulatory demands that build expertise.

## Implications

- **For journaling/chatbot tools:** Combine SRL instruction (course-based) with optional writing support to get both motivation and engagement gains
- **For [[educational-policy-ai|AI policy]]:** Procurement criteria should ask whether a tool develops or displaces self-regulation
- **For researchers:** Long-term studies measuring SRL outcomes (not just immediate performance) are essential

## Connected Concepts

- [[metacognition]] — the cognitive monitoring SRL relies on
- [[self-efficacy]] — a forethought-phase belief driving effort
- [[scaffolding]] — graduated support that preserves regulatory demand
- [[feedback]] — input learners regulate around
- [[feedback-literacy]] — the capacity to act on feedback
- [[help-seeking]] — a strategic SRL behavior
- [[motivation]] — the reciprocal partner of self-regulation
- [[cognitive-offloading]] — the risk when AI removes regulatory work
- [[generative-ai]] — the technology that can scaffold or short-circuit SRL
- [[ai-literacy]] — regulatory competence in AI use
- [[self-directed-learning]] — the broader autonomy construct
- [[agency]] — the learner's capacity to act with intention, central to regulation, integration, and positioning
- [[adaptive-learning]] — personalization that can support regulation
- [[formative-assessment]] — continuous feedback for regulation
- [[learning-by-teaching]] — a strategy building self-regulation
- [[intelligent-tutoring]] — systems that scaffold SRL
- [[llm]] — the underlying model of AI tools

## Connected Articles
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Emergent learner agency in implicit human-AI collaboration: supportive vs. contrarian personas
- [[de-barba-srl-genai-2026]] — Learner agency across scales: regulation, integration, positioning
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a context-aware learning partner over time
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — How students regulate learning with a genAI chatbot
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — Scaffold or shortcut? GenAI dual role in SRL
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]

- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — GenAI feedback and SRL: perceived source matters
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[bilingual-llm-lecture-companion-srl-2026]] — SRL with a bilingual LLM lecture companion
- [[generative-ai-reduced-study-time-math]] — Cognitive surrender as loss of self-regulated learning
- [[young-people-learning-generative-ai-rapid-review-2026]] — Mixed evidence on metacognition/self-regulation with GenAI
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and the self-regulation tension
- [[ai-cognitive-partner-co-regulation-learning]] — AI as cognitive partner in co-regulated learning
- [[ai-learning-assistants-higher-ed-large-scale]] — AI learning assistants in higher ed at scale
