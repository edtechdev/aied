---
title: "Will It Teach as Intended? How Teachers Configure Educational AI Chatbots"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/teachers-configure-educational-chatbots-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [thematic analysis]
level: [middle school]
audience: [instructors, instructional designers, faculty developers, educational technology developers, researchers]
foundations: [teacher-role, teacher-ai-competency, learning-design]
technology: [conversational-ai, pedagogical-agent, generative-ai, llm, learning-analytics]
pedagogy: [scaffolding]
ethics: [guardrails]
assessment: [evaluative-judgment]
methods: [ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Riahi, Ozturk, Guth, Li, Singh, Tian, Chiu, Lytle, Barnes, and Catete (2026) studied how 27 middle school teachers used a teacher-facing authoring tool during summer 2026 [[professional-training|professional development]] workshops in two U.S. states, tracing [[pedagogy|pedagogical]] intent from focus-group interviews through configuration logs to generated [[conversational-ai|chatbot]] behavior. Teachers envisioned chatbots as [[scaffolding|instructional scaffolds]] that could deliver differentiated support, extend access to help when the teacher was occupied, and preserve student thinking inside teacher-defined boundaries. The Purpose and Rules fields served complementary functions: Purpose mainly carried instructional goals and content focus, while Rules more often specified pedagogical behavior, [[guardrails]], and learner-specific adaptation. A rubric-based [[ai-ed-evaluation|evaluation]] of 108 bot-level criterion ratings found stronger alignment for responsiveness (88.9%) and persona (81.5%) than for rules (70.4%) and purpose (59.3%). The authors conclude that configurable controls alone do not ensure pedagogical fidelity, and frame the gap through pedagogical forms of Norman's Gulf of Execution and Gulf of Evaluation.

## Key Findings

1. Roughly 15 of the 27 teachers described chatbots as adaptive instructional scaffolds responding to differences in [[prior-knowledge|prior knowledge]], skill level, [[accessibility]] needs, or support type.
2. Purpose and Rules did different work: Purpose carried instructional goals and content focus, while Rules carried pedagogical strategy (24 teachers), course material (21), guardrails (14), and personalization (13).
3. About 12 teachers balanced AI access against teacher control, configuring bots to break problems down without giving direct answers and to shift from tutor to coach over time.
4. Generated responses aligned most strongly with responsiveness (88.9% pass, average 3.67) and persona (81.5%, 3.48), then rules (70.4%, 3.26), with purpose weakest (59.3%, 3.00).
5. Configuration was interpretive work: about eight teachers asked for clearer labels, examples, and tooltips, and a character limit forced one to be more specific.
6. Teachers wanted a [[learning-analytics|dashboard]] showing which step students were on and who was struggling, while one cautioned that [[parents-and-families|parents]] might object to constant monitoring.

## The Authoring Platform

The platform lets teachers create purpose-specific [[pedagogical-agent|instructional agents]] without programming expertise. Teachers write a free-text Purpose and a free-text Rules and Guidelines field, choose among six models (GPT-5.4, GPT-5.4 Mini, Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.6, and Llama-3.2-3B-Instruct), and optionally attach course files. The structured fields decompose open-ended [[prompt-engineering|prompt engineering]] into modular controls. File Search applies [[rag|retrieval-augmented generation]]. At runtime the Purpose and Rules are inserted into the system instructions ahead of the conversation context and the student's question. Testing features include Fact Check, which routes a response to a separate model for review, and Compare Models for side-by-side comparison.

## Envisioning and Configuring the Chatbots

Focus groups produced four themes about envisioned roles. Teachers imagined the chatbot as an adaptive scaffold and disciplinary partner: one designed for students with different programming experience building a drone [[simulation]], another as a playful fractions tutor giving hints and correcting [[misconceptions]]. They saw it extending teacher capacity — a "little mini teacher" for students the teacher could not reach immediately, homework support when parents were unavailable, and a way to cut planning time. They also wanted [[human-in-the-loop-ai|teacher-in-the-loop]] control, bounding the [[teacher-role|teacher's authority]] over answer-giving. A hybrid deductive–inductive [[qualitative-research|qualitative analysis]] of the configuration logs found Task/Objective most prevalent (21 Purpose fields, 19 Rules fields). Teachers treated [[personalized-learning|personalization]] as multidimensional: 10 of 14 encoding language accessibility did so through Persona, while assumptions about prior knowledge were expressed entirely through Rules (5 of 5), a task that drew on their [[teacher-ai-competency|AI competency]].

## Alignment Between Intent and Behavior

Some teachers saw boundaries hold — one tested a water-cycle chatbot that declined an off-topic question — while others found intentions were not enacted consistently, and one observed that adherence varied by model. The log-based evaluation rated 27 unique chatbots on responsiveness, purpose alignment, rules adherence, and persona alignment. Responsiveness was strongest (88.9% pass, average 3.67) and persona performed well (81.5%, 3.48), suggesting teachers generally succeeded in configuring a role or tone reflected in responses. Rules were more moderate (70.4%, 3.26), and purpose showed the lowest alignment (59.3%, 3.00): a chatbot could produce a reasonable response without consistently reflecting why the teacher created it. The authors read this through pedagogical forms of Norman's gulfs — a Gulf of Execution between intent and available configuration actions, and a Gulf of Evaluation between generated behavior and the teacher's ability to judge whether it met the goal.

## What this means for practice

- **Instructors.** Use configuration fields for distinct purposes: state instructional goals and content focus in Purpose, and put pedagogical behavior, guardrails, and learner-specific adaptations in Rules, which is where these teachers' adaptations concentrated.
- **Instructors.** Test your bot against off-topic and rule-bending prompts before classroom use, and switch models if a configuration is not enacted, because rule adherence varied by model here.
- **Faculty developers.** Run hands-on authoring sessions with interpretation support, not just feature walkthroughs: the teachers who struggled asked for clearer labels, worked examples, and tooltips.
- **Developers.** Build for both gulfs — function-specific fields for expressing intent, plus [[ai-feedback-quality|automated feedback]] on which configuration parts are not reflected in responses, suggested revisions, and model comparison.

## Limitations

- The sample is 27 middle school teachers at two workshop sites, so patterns describe this group rather than [[k-12|K–12]] teachers generally.
- Behavior was evaluated through teachers' testing interactions during short workshops — a 20-minute introduction, about an hour of hands-on work, a 30- to 60-minute focus group — not sustained [[student-ai-interaction|student-AI interaction]].
- Alignment was scored partly by an AI model: 232 paired human–AI ratings came from a 20% sample (58 records) of 1,160 criterion-level evaluations; first-round persona agreement was 0.604.
- Three of the 27 teachers specified no persona or tone and were excluded from the persona co-occurrence analysis; workshop activities focused on [[science-education|science]] and [[computational-thinking|computational thinking]], not the full range of subjects taught.

## Connected Concepts

- [[conversational-ai]]
- [[teacher-role]]
- [[pedagogical-agent]]
- [[scaffolding]]
- [[personalized-learning]]
- [[guardrails]]
- [[teacher-ai-competency]]
- [[professional-training]]
- [[k-12]]
- [[science-education]]
- [[human-in-the-loop-ai]]
- [[student-ai-interaction]]
- [[ai-ed-evaluation]]
- [[prompt-engineering]]
- [[learning-analytics]]

## Connected Articles

- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Human-Centered Design of LLM-Powered Educational Chatbots: A Study with Secondary Teachers
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts for Configuring Student-AI Dialogue: K-12 Classroom Implementation
- [[ai-tutor-authoring-promptdecipher]] — PromptDecipher: Supporting AI Tutor Authoring Through Editable Simulated Interactions
- [[yasar-llms-iterative-pedagogical-design-2026]] — From evaluation to emulation: LLMs as agents of iterative pedagogical design
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Mind the Trust Gap: Identifying (Mis)alignments in Teacher-Student Views Toward Control and Agency in K-12 Classroom AI
- [[where-ai-enters-teacher-work-2026]] — Where Artificial Intelligence Enters Teacher Work
- [[teachingcoach-chatbot-instructor-guidance]] — TeachingCoach: A Fine-Tuned Scaffolding Chatbot for Instructional Guidance to Instructors

## Citation

Riahi, B., Ozturk, D., Guth, A., Li, J., Singh, D. P., Tian, X., Chiu, J., Lytle, N., Barnes, T., & Catete, V. (2026). [*Will It Teach as Intended? How Teachers Configure Educational AI Chatbots*](https://arxiv.org/abs/2609.29993). arXiv preprint.
