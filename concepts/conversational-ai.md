---
title: Conversational AI
created: "2026-08-22T04:44:37-04:00"
updated: "2026-08-30T16:50:00-04:00"
type: concept
tags: [conversational-ai, intelligent-tutoring, generative-ai, llm, pedagogical-agent, human-ai-collaboration, ai-literacy]
confidence: medium
---

> **Conversational AI (CAI) agents** — AI-driven speech- or text-based agents that simulate and automate conversations, from rule-based chatbots to NLP/ML and multimodal LLM-based assistants — are among the most widely used AI interfaces in education, valued for teaching, psychological, and metacognitive support even as technical, cognitive, and ethical concerns persist.

Conversational AI (CAI) is the umbrella term for AI-driven agents that carry on spoken or written dialogue, most commonly realized as chatbots and, more recently, [[generative-ai|generative]] [[llm|LLM]]-based assistants such as ChatGPT, Claude, and multimodal educational avatars. Modern CAI agents fall into machine-learning-based, NLP-based, and hybrid categories, with text-based agents the most prevalent in education. As learning tools they function as [[intelligent-tutoring|intelligent tutors]], [[feedback]] providers, [[student-ai-interaction|interaction partners]], and administrative assistants — overlapping with [[pedagogical-agent|pedagogical agents]] while spanning a broader set of applications.

## How conversational AI appears in the knowledge base

**An umbrella-review synthesis.** The [[conversational-ai-agents-umbrella-review-2026|umbrella review of CAI agents]] (34 review articles) shows CAI utilization is concentrated in teaching and learning support (97.1% of reviews), psychological and motivational support (91.2%), and [[metacognition|metacognitive]] and personal development (88.2%), while administrative support, research management, and healthcare education lag. The review documents that human–AI relationship concerns persist across all CAI generations, with [[academic-integrity]] and data [[privacy]] emerging as newer ethical issues, and calls for HCI-grounded, evidence-based design and stronger [[ai-literacy]] support.

**From chatbots to tutoring agents.** The knowledge base traces CAI's evolution from rule-based FAQ chatbots toward [[intelligent-tutoring|tutoring-focused]] [[pedagogical-agent|agents]]. The [[conversational-ai-tutors-framework|conversational AI tutors framework]] argues proven ITS technologies ([[knowledge-tracing]], affect detection, [[student-modeling|student modeling]]) should anchor generative tutors while [[generative-ai]] supplies flexible dialogue. Research on [[measuring-llm-tutors-teach-vs-solve|whether LLM tutors teach or solve]] and [[stanford-evidence-base-ai-k12-2026|tutoring-specific vs general AI]] shows pedagogically designed guardrails matter: raw general chatbots can short-circuit reasoning while structured tutors preserve [[desirable-difficulties|productive struggle]].

**Interaction and collaboration.** Conversational agents are increasingly framed as interaction partners rather than answer-givers. [[student-ai-interaction]] captures how learners prompt, question, and verify with CAI in practice. In [[collaborative-learning]], agents mediate participation and shared regulation, and in [[language-learning]] they provide real-time conversational practice. The [[human-ai-collaboration]] thread examines when this partnership preserves versus substitutes for the learner's cognitive work.

**Student perspectives.** Real-world usage shows adoption hinges on [[ai-literacy]] and user experience more than on technical capability. A human-centred mixed-methods study of the "Jordan Chatbot," a GPT-4o-based pedagogical agent in an Australian law course, found students hold positive attitudes and perceive gains in knowledge while strongly supporting [[academic-integrity]] requirements; over a third of interactions occurred after hours, confirming the value of 24/7 availability ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]). Notably, AI literacy — not general technology proficiency — predicted willingness and confidence to use the chatbot, and usability (an intrusive pop-up design) was the largest barrier among non-users, ahead of trust, preference for staff, and academic-integrity fears.([[colbran-student-perspectives-genai-chatbots-2026]]) The study recommends human-centred design, explicit AI policies and assessment labels, staff and student training, and continuous error monitoring — evidence that effective CAI deployment is as much a design and literacy problem as a technical one.

**Risks and ethics.** CAI agents carry persistent risks of [[cognitive-offloading|over-reliance]] and [[cognitive-offloading|cognitive offloading]] (the leading ethical concern in the umbrella review), plus technical limitations, [[hallucination-risk|hallucination]], bias, [[ai-detection|plagiarism]], and [[equity-in-ai-education|equity]] barriers. These concerns animate [[ai-literacy]] and [[reducing-ai-misuse]] and require [[educational-policy-ai|policy]] and ethical-[[governance]] responses.

## Relationship to pedagogical agents and intelligent tutoring

Conversational AI is best understood as an **interaction modality** that overlaps — but does not coincide with — two more established constructs in the knowledge base: [[pedagogical-agent|pedagogical agents]] and [[intelligent-tutoring|intelligent tutoring systems (ITS)]].

**Conversational AI as the medium, not the pedagogy.** CAI names *how* the agent communicates (natural-language dialogue, spoken or text). It says little on its own about *what* the agent is built to do. Pedagogical agents, by contrast, are defined by their **instructional role** — an AI component that engages learners through dialogue, questions, or prompts to support [[metacognition|metacognitive processes]], [[feedback]], and [[scaffolding]]. [[intelligent-tutoring|Intelligent tutoring systems]] are defined by their **architecture and modeling** — a diagnostic backbone of [[knowledge-tracing]], [[student-modeling|student modeling]], and pedagogical decision logic that tracks what the learner knows and adapts instruction. A single agent can be all three at once: e.g. a [[conversational-ai-tutors-framework|conversational AI tutor]] is a CAI agent (dialogue interface) that functions as a pedagogical agent (tutoring strategies) built on an ITS foundation (student modeling). The distinction matters because a CAI agent need not be pedagogically grounded at all — a plain FAQ chatbot is conversational AI without being a pedagogical agent or a tutor.

**The pedagogical-agent lens.** Pedagogical agents use the conversational medium to enact teaching strategies — eliciting self-assessments, Socratic questioning, role-specialized facilitation in [[agentic-ai|multi-agent]] designs (Teacher, Assistant, Classmate, Analyzer). Not every CAI agent is a pedagogical agent, but the two heavily overlap: the umbrella review of CAI agents found teaching and learning support (97.1%) and metacognitive development (88.2%) dominate CAI applications, meaning most education-focused CAI agents function pedagogically. The [[conversational-agents-novice-programmers-scoping-2025|novice-programmer scoping review]] sharpens this: only 4 of 23 conversational agents explicitly grounded design in learning theory — most were pedagogical in intent but not in foundation.

**The ITS lens.** Intelligent tutoring contributes the *cognitive diagnostic machinery* that raw conversational models lack. The [[conversational-ai-tutors-framework|conversational AI tutors framework]] argues proven ITS technologies should anchor generative tutors: knowledge tracing, affect detection, and student modeling supply the structure, while [[generative-ai]] and [[llm|LLMs]] supply flexible dialogue. This is the key design tension — conversational AI provides natural, scalable interaction, but without ITS-style structure it risks [[cognitive-offloading|over-scaffolding]], hallucination, or bypassing the learner's productive struggle. Research such as [[measuring-llm-tutors-teach-vs-solve]] and [[stanford-evidence-base-ai-k12-2026]] shows that pedagogy-oriented criteria (guiding questions, calibrated hints) must be designed in explicitly.

**In short:** conversational AI is the **interface/medium**, pedagogical agents are the **role**, and intelligent tutoring is the **underlying modeling and instructional logic**. Educationally valuable CAI agents sit at the intersection of all three — conversational in interface, pedagogical in intent, and tutor-like in their modeling of the learner.

## Practical guidance

Choose conversational agents to support teaching, [[motivation]], and [[metacognition]] rather than merely to answer questions, and design for HCI-grounded, participatory, user-centered interaction. Guard against [[cognitive-offloading|over-reliance]] by pairing CAI with [[ai-literacy]] instruction and [[feedback]] that keeps the learner cognitively productive. Attend to AI literacy and usability explicitly — since these — not general digital skill — drive adoption and non-use ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]) — and pair deployment with clear AI-use policies, assessment labels, and training. Evaluate CAI on pedagogical outcomes — not just task completion — and plan for equity and accessibility from the start rather than as an afterthought.

## Connected Concepts

- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[llm]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[cognitive-offloading]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]

## Connected Articles
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[colbran-student-perspectives-genai-chatbots-2026]] — Student perspectives on GenAI chatbots (mixed methods)
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Adoption personas for AI chatbots

- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[conversational-ai-tutors-framework]] — Conversational AI tutors framework
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs general AI
- [[rethinking-scaffolding-llm-tutors]] — Rethinking scaffolding in LLM tutors
- [[genai-higher-education-systematic-review-2026]] — GenAI in higher education systematic review
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers
- [[dai-chatbots-problem-posing-primary-2026]] — GenAI chatbots and problem posing in primary science
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: LLM-Augmented Assessment of Student Anxiety (2026)
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions

- [[substitution-to-scaffolding-ai-harm-cycle-2026]] — The substitution-to-scaffolding AI harm cycle
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Gender and motivation in GenAI achievement

## Citation

Ganguly, A., Mehjabin, N., Malik, A., & Johri, A. (2025). [*Conversational AI agents in education: an umbrella review*](https://doi.org/10.1007/s43681-025-00916-0). *AI and Ethics*, 6, 72.
