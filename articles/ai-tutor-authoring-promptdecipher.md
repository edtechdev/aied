---
title: "PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions"
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-24T04:50:09-04:00"
type: article
tags: [intelligent-tutoring, llm, teacher-role, educational-development, edtech-platform, ai-literacy, agentic-ai]
research_method: [system development, design-based research]
audience: [instructors, faculty development]
sources: ['raw/papers/2605.16605.md']
confidence: high
---

## Synthesis
PromptDecipher addresses a critical gap in AI tutor deployment: teacher quality assurance. A [[formative-assessment|formative]] study of 121 chatbots created by instructors in an "AI for Educators" MOOC revealed that educators authoring AI tutoring chatbots virtually never systematically test them before student deployment — a finding with serious implications for [[ai-tutor-safety-harms]] and educational quality, particularly for K–12 learners. The system shifts the authoring paradigm from abstract system-prompt writing to direct correction-based interaction: teachers edit undesirable bot responses in a live simulated chat, and an automated pipeline analyzes the correction, infers the [[pedagogy|pedagogical]] intent, proposes a targeted [[prompt-engineering|system prompt]] rewrite, and validates it across previously passed test scenarios. This bridges the [[teacher-role]] gap between classroom practitioner and AI system designer — a tension also explored in [[ai-tpack-teacher-multi-agent-workflow]], which found that effective AI integration requires systems thinking beyond simple tool use. By embedding testing directly into the authoring workflow, PromptDecipher scaffolds teachers in roles they would otherwise skip, resonating with the [[agentic-ai]] paradigm of AI-scaffolded work. The design also mitigates the kind of diagnostic failures identified in [[llm-tutoring-feedback-diagnosis-gap]], where LLMs struggle precisely where feedback matters most.

## Key Findings
1. In a formative study of 121 teacher-authored chatbots, nearly all instructors successfully specified learning content but virtually none systematically tested their bots before publishing them to students.
2. PromptDecipher repositions the core authoring activity: instead of writing an abstract system prompt, teachers directly edit undesirable bot responses in a live [[simulating-students|simulated student chat]].
3. The Reverse Prompting Pipeline infers pedagogical intent from each correction, proposes a minimal [[prompt-engineering|system prompt]] rewrite, and runs regression verification across all previously passed test scenarios.
4. Publication is gated behind at least one completed test-correct-verify cycle, embedding [[human-in-the-loop-ai|quality assurance]] structurally into the workflow rather than relying on voluntary compliance.

## The Formative Study: Unsystematic Teacher QA
The paper's motivating problem comes from a formative study of 121 chatbots created by instructors in an "AI for Educators" [[higher-ed|MOOC]]. While teachers successfully specified learning content, nearly all failed to engage in any systematic testing before publication — a critical concern when the resulting [[pedagogical-agent|bots]] are deployed to real learners, including [[k-12|K–12 students]]. The authors trace this to a mismatch between the interface these chatbot platforms provide — a raw text editor for a system prompt — and teachers' existing mental models. Teachers are deeply experienced in giving corrective [[feedback]] on student work, but have no prior frame for specifying AI behavior in natural language. Prior work on end-user [[prompt-engineering|prompt engineering]] documents that non-experts approach prompting opportunistically rather than systematically and struggle to translate observations about undesired outputs into concrete prompt requirements. The core problem is that effective [[intelligent-tutoring]] authorship demands teachers simultaneously act as learning designers, [[student-ai-interaction|AI interaction]] designers, and QA engineers — roles far beyond their typical experience.

## PromptDecipher System Design
PromptDecipher is a web-based system that restructures the authoring workflow around a direct correction-based interaction rather than abstract prompt writing. A teacher creates a new bot, selects a foundation model (OpenAI, Anthropic, or Google), and may optionally upload course materials. Rather than drafting a system prompt from scratch, the teacher is directed to a test environment: a simulated student chat. They select a [[student-modeling|student profile]] (e.g., "expected path," "struggling learner," "off-topic input"), read the bot's response, and either mark it as passing or edit it to reflect the desired behavior. Submitting an edit triggers the Reverse Prompting Pipeline. The system additionally supports direct prompt editing via templates and an AI-assisted discussion panel, though the correction-based pipeline is the primary contribution.

## The Reverse Prompting Pipeline
Each teacher correction triggers a three-stage automated pipeline:
1. **Diff analysis.** An [[llm]] compares the original and corrected responses to infer the teacher's pedagogical intent (e.g., "the bot should ask a follow-up question rather than give the answer directly").
2. **Prompt rewrite.** A targeted addition or modification to the [[prompt-engineering|system prompt]] is proposed and shown to the teacher for review as a tracked diff.
3. **Regression verification.** The revised prompt is automatically evaluated across all previously passed test cases; any regression is flagged for the teacher's attention before they can proceed.

Because teachers must complete at least one such cycle before publishing, QA is structurally embedded in the workflow. This test-correct-verify cycle enforces [[pedagogical-safety]] as a first-class activity and scaffolds teachers in roles they would otherwise skip, exemplifying [[scaffolding]] through tool design rather than instruction.

## Demonstration
The paper presents an interactive demonstration plan in which attendees author an AI tutoring bot end-to-end using provided laptops. In a short setup, the attendee creates a bot, enters a brief description of the learning context (e.g., "a [[socratic-method|Socratic tutor]] for introductory statistics"), and selects a foundation model. They then select a simulated student profile, read the bot's initial response, and edit it to reflect what they wish the bot had said, watching the Reverse Prompting Pipeline run live — showing the inferred intent, the proposed prompt update, and regression check results. After iterating through one additional scenario, they publish the bot and receive a shareable link to interact with it as a student.

## Implications
PromptDecipher demonstrates how authoring interface design can shape educator behavior at scale. By making the modification on the simulated tutoring chat — rather than the prompt — the primary unit of authoring, the system transforms an abstract engineering task into a familiar pedagogical one and embeds quality assurance structurally instead of relying on voluntary compliance. Scheduled for deployment in an "AI for Educators" MOOC with hundreds of higher-education instructors in fall 2026, the system will yield usage data to examine whether correction-based authoring increases testing rates and improves prompt quality relative to conventional workflows. For [[teacher-ai-competency]] and [[educational-development]], the work reframes the teacher's role from prompt author to learning designer and QA engineer, suggesting that effective [[generative-ai]] adoption in education may depend less on training teachers to write prompts and more on designing [[conversational-ai]] authoring environments that align with their existing pedagogical skills. Future directions include auto-generating additional edge-case scenarios and integrating [[ai-literacy|learning science guidance]] to help teachers recognize the pedagogical strategies surfaced through their own corrections.

## Connected Concepts

- [[teacher-role]]
- [[tpack]]
- [[intelligent-tutoring]] — AI tutoring chatbots that teachers author
- [[pedagogical-safety]] — ensuring tutors are safe before deployment
- [[educational-development]] — building teacher capacity for AI authoring
- [[llm]] — the models behind AI tutor interactions
- [[prompt-engineering]] — system-prompt rewriting from teacher corrections
- [[human-in-the-loop-ai]] — teacher QA as a first-class activity
- [[agentic-ai]] — AI-scaffolded workflows for human roles
## Connected Articles

- [[ai-tutor-safety-harms]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[agentic-workflows-education]]
- [[llm-tutoring-feedback-diagnosis-gap]]
- [[prompt-coach-agentic-tutor-prompt-engineering]] — Coaching tutors to engineer prompts effectively
## Citation

Koyama, M., Xiao, R., & Stamper, J. (2026). [*PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions*](https://arxiv.org/abs/2605.16605). In Proceedings of the 13th ACM Conference on Learning @ Scale (L@S '26).
