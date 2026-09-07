---
title: Generative AI (GenAI) as a mindtool that supports generative learning (GL)
created: "2026-06-03T04:33:04-04:00"
updated: "2026-09-07T09:00:00-04:00"
type: article
tags: [learning-theories, generative-ai, higher-ed, learning-design, scaffolding]
research_method: [theoretical analysis]
level: [higher ed]
category: [instructional design]
sources: ['raw/papers/caeai-genai-mindtool.md']
confidence: medium
---

> **Synthesis:** Dabbagh & Fake (2026) argue that [[generative-ai|Generative AI]] is best used not as an answer machine that students learn *from*, but as a *mindtool* — a [[learning-theories|knowledge-representation]] tool that students learn *with* — to support generative learning (GL), the theory (originating with Wittrock, 1974) that learners learn by actively generating and connecting new knowledge rather than passively receiving it. Grounding their argument in eight evidence-based generative learning strategies (Fiorella & Mayer, 2015) and three supporting empirical strands (including Makransky et al.'s 2025 ChatTutor experiments), they enumerate eight pedagogical roles GenAI can play, from [[socratic-method|Socratic]] opponent to [[metacognition|dynamic assessor]], and propose the five-phase **AI-Augmented Generative Learning Design (A2-GLD)** framework plus an [[agentic-ai|agentic]] workflow for designing generative learning activities. The paper positions GL as the "[[philosophy-of-ai-in-education|philosophical]] vision" and GenAI as the human-centered technology for learning with, not from — a counterweight to the answer-generating uses that dominate current student practice.

## Key Findings

- The paper argues that **Generative AI can serve as a Mindtool** — a knowledge representation tool — that facilitates Generative Learning (GL) rather than short-circuiting it.
- **Generative Learning** asks students to actively generate information and make connections between new and existing knowledge; this active participation promotes deeper understanding, long-term retention, and [[critical-thinking|critical thinking]] and [[problem-solving]] abilities, with the "generation" process being where learners make sense of material rather than passively receiving it.
- The authors propose **eight [[pedagogy|pedagogical]] roles** for GenAI: learning strategy/study buddy, collaborative thinking tool, possibility engine, [[socratic-method|Socratic]] opponent, personal tutor, exploratory [[research-methods-aied|research]] engine, motivator, and dynamic assessor.
- Each role maps to a distinct learning function, from supporting knowledge organization and comprehension monitoring, to challenging students to refine arguments, to evaluating knowledge in real time so activities can be tailored to current understanding.
- The paper ends with the conceptualization of a **pedagogical framework** for designing and supporting generative learning activities (GLAs) with GenAI.

## The Eight Pedagogical Roles

The roles span the learning process. As a **learning strategy or study buddy**, GenAI supports knowledge organization and comprehension monitoring at varying degrees of complexity; as a **collaborative thinking tool**, it fosters teamwork and project-based activities by encouraging the sharing, discussion, and integration of spatial representations of content into a more cohesive knowledge structure; as a **possibility engine**, it generates alternative responses that let students explore different ways of expressing ideas; and as a **Socratic opponent**, it challenges students to develop and refine their arguments. The remaining roles extend beyond dialogue: a **personal tutor** provides personalized feedback, an **exploratory research engine** helps students explore and interpret data, a **motivator** proposes games and challenges to engage learners, and a **dynamic assessor** evaluates student knowledge in real time, allowing for tailored generative learning activities based on current understanding.

Each role translates into concrete, implementable activities. As a *possibility engine / co-designer*, students use an LLM to generate storyboards of concepts or brainstorm alternative solution approaches and weigh their pros and cons — or simulate a debate between real-world figures (e.g., known philosophers) on a live decision to compare worldviews and apply them to a novel problem. As a *Socratic opponent* or *collaboration coach*, students enter prompts structured like a conversation or debate to pressure-test an argument, or work in groups using ChatGPT to research and solve problems together. As a *guide on the side*, teachers use GenAI to generate discussion questions and advice for supporting students on specific concepts, while a *personal tutor* delivers immediate, individualized feedback on progress. A *study buddy* helps students reflect on material, a *motivator* offers games and challenges, and a *dynamic assessor* builds an educator-facing profile of each student's current knowledge. The roles are also aligned with specific tools — storyboarding platforms and any mainstream LLM (Claude, Gemini, ChatGPT) can instantiate the co-designer role, while concept-mapping tools such as Lucidchart can act as a mindtool alongside learners to iteratively co-construct a map with real-time feedback.

## Evidence from Research

The authors ground the mindtool framing in three strands of evidence. First, the eight generative learning strategies formalized by Fiorella and Mayer (2015) — **summarizing, mapping, drawing, imagining, self-testing, self-explaining, [[teacher-role|teaching]], and enacting** — operationalize Wittrock's (1974) original generative [[learning-theories|learning theory]], and each maps onto roles GenAI can scaffold. Second, Makransky et al.'s (2025) experiments with a theory-informed [[conversational-ai|chatbot]] (ChatTutor) that scaffolds student-produced explanations show the value of explicit generative [[scaffolding]] over raw [[llm]] use: in Study 1 (N = 175; ChatTutor = 51, ChatGPT-4 = 49, teaching-as-usual = 75), immediate post-test differences were non-significant, F(2,172) = 1.89, p = .155, but four weeks later ChatTutor users retained substantially more conceptual knowledge (M = 7.26 of 9) than ChatGPT users (M = 6.72) or teaching-as-usual (M = 5.93). Third, concept mapping — a primary generative strategy — shows large benefits versus passive learning (college students d ≈ 0.72; grades 4–8 d ≈ 0.68; grades 9–12 d ≈ 0.74), and can now be co-constructed iteratively with GenAI-assisted tools. The authors also note that generative strategies are not universally effective: their fit with learners' age and cognitive capacity matters, and strategic scaffolding — such as partially completed concept maps or [[metacognition|metacognitive]] prompts — makes advanced strategies accessible to all learners.

## The A2-GLD Framework

To put these ideas into practice, the paper proposes the **AI-Augmented Generative Learning Design model (A2-GLD)**, a five-phase pedagogical framework that combines GL theory, GenAI affordances, and instructional scaffolding:

1. **Prime the learning task** — teacher-initiated; activates [[prior-knowledge|prior knowledge]] and curiosity through [[prompt-engineering|prompting]] questions, AI-generated visuals, and analogies (e.g., "What do you already know about ecosystems?").
2. **Enact or Visualize** — learner-initiated; builds internal mental models through non-verbal generative activities such as concept maps, diagrams, and gesture-based explanations, optionally animated via AI tools.
3. **Explain with AI** — learner-driven; students verbalize understanding in their own words with [[ai-feedback-quality|AI feedback]] (e.g., "Great start! Can you clarify what you mean by energy transfer?").
4. **Human Scaffolding** — instructor-driven; teachers review AI–student interaction artifacts, facilitate peer discussion, and embed metacognitive prompts (e.g., "What confused you the most in the AI chat?").
5. **Reflect and Transfer** — learner-driven; strengthens metacognition and [[transfer-of-learning|transfer of learning]] beyond the activity.

The alternating driver of each phase (teacher → learner → learner → teacher → learner) is deliberate: it keeps the instructor in the loop while preserving the learner's active generation of knowledge, and it positions GenAI as a configurable design material — a "primed" tool customized for each activity — rather than a fixed answer machine.

### The agentic AI workflow

The authors extend A2-GLD into an **agentic workflow** that assigns each phase an autonomous AI role. A *task-framing and activation agent* primes the activity (adapting prompts to learner level and surfacing [[misconceptions]]); a *representation and modeling agent* prompts externalization and detects missing nodes in concept maps; a *dialogic explanation coach* prompts self-explanations and flags vague reasoning; an *instructor support and orchestration agent* aggregates learner artifacts, clusters peer responses, and surfaces reflection points for teacher mediation; and a *transfer agent* moves the learner into novel and counterfactual contexts. The framing is that LLMs excel at "reckoning" (calculative prediction) while humans supply "judgement" — practical wisdom grounded in [[ethics|ethical]] commitment — so the workflow is designed to distribute learning agency across the technology, the learner, the instructor, and the designer rather than ceding it to any one.

## Implications for AI in Education

The framework gives [[learning-design]] practitioners a vocabulary for using GenAI to enhance rather than replace learning: each role is tied to a specific generative learning function, and the resulting pedagogical model is intended to guide the design of GLAs. This connects to [[constructivist]] and [[self-regulated-learning]] traditions, where the learner's active knowledge construction — supported, not performed, by the tool — is the point of the activity, and it offers a counterweight to answer-generating uses of GenAI in the classroom. The authors frame the underlying goal in terms of learning with, not from, the technology: using GenAI as a mindtool can sharpen inference-making and critical thinking while avoiding the accumulation of inert (unusable) knowledge, and the challenge is to protect learners' [[creativity]] and reasoning rather than outsource them. The A2-GLD phases give faculty a concrete route to "design for AI" — preparing customized GenAI tools for specific generative learning activities, with the instructor explicitly present in the Human Scaffolding phase.

The "mindtool" framing carries a specific lineage the authors draw on: mindtools (following Jonassen) are distinguished from conventional educational technology precisely because the learner *works with* the tool to represent knowledge rather than *learning from* a pre-packaged product — making tacit knowledge explicit to enable reflection and feedback, in line with learners functioning as designers. On this view, mindless GenAI use is the risk the framework is built to counter: student surveys the authors cite find most GenAI use clusters around search, content generation, and editing — e.g., a 16-country survey of higher-education students (n = 3,839) reported 86% using GenAI but predominantly for information search, grammar checking, and summarizing — uses that offload cognitive work rather than scaffold generative sense-making. A2-GLD is proposed as the corrective. The authors are explicit, however, that the framework is a **theoretical contribution not yet empirically tested**: they call for backward-design interventions, pre-post assessments, artifact-quality analysis, and learner-perception studies to validate whether A2-GLD-supported activities deliver durable conceptual gains over both unsupervised chatbot use and traditional instruction.

## Connected Concepts

- [[learning-design]]
- [[self-regulated-learning]]
- [[curriculum-design]]
- [[constructivist]]
- [[prompt-engineering]]
- [[formative-assessment]]
- [[affective-tutoring]]
- [[generative-ai]]
- [[active-learning]]
- [[scaffolding]]
- [[metacognition]]

## Connected Articles

- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[learnity-graphs-lifelong-learning-framework-2026]] — Rethinking Higher Education: From Fixed Curricula to Learnity Graphs
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT Critical and Creative Thinking: Systematic Review
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[genai-marketing-education-roles-2026]] — When AI Wears Many Hats: The Role of Generative Artificial Intelligence in Marketing Education

## Citation

Dabbagh, N., & Fake, H. (2026). [*Generative AI (GenAI) as a mindtool that supports generative learning (GL)*](https://doi.org/10.1016/j.caeai.2026.100626). *Computers and Education: Artificial Intelligence, 11*, 100626.
