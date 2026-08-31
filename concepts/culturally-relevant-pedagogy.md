---
title: Culturally Relevant Pedagogy
created: "2026-05-08T10:44:35-04:00"
updated: "2026-08-31T06:34:37-04:00"
type: concept
tags: [equity-in-ai-education, curriculum-design, inclusive-learning, k-12, ai-literacy, higher-ed, generative-ai, llm, student-experience, intelligent-tutoring]
audience: [learners]
level: [k 12, higher ed]
category: [curriculum design]
confidence: high
---

Culturally Relevant Pedagogy (CRP), introduced by Gloria Ladson-Billings (1995), centers marginalized students' cultural references in [[curriculum-design|curriculum design]]. It rests on three pillars: **academic success** (rigorous standards that honor cultural identity), **cultural competence** (critical consciousness about culture and power), and **[[critical-pedagogy|sociopolitical consciousness]]** (empowering students to challenge inequitable systems). As AI tools enter classrooms, CRP has become a central lens for evaluating whether [[generative-ai|AI]] amplifies or erases non-dominant cultural knowledge.

## Questions to Consider

- Culturally relevant pedagogy rests on academic success, cultural competence, and sociopolitical consciousness. Which of these pillars is hardest to achieve with AI tools — and why?
- One study found 94% of AI-generated lesson plans contained no discernible multicultural content, and almost none reached the level of transformation or social action. If AI defaults to monocultural output, whose responsibility is it to inject the missing perspectives?
- AI training data is predominantly Western and Anglophone. What does it mean for a system to 'actively marginalize' ways of knowing — and how does that differ from simply lacking access?
- Community-based AI learning proposes that learners' own lived epistemologies should be the standard for evaluating AI output, with refusal and non-use treated as valid responses. How would you center community knowledge as the judge of an AI's relevance and harm?
- Culturally grounded data can dramatically improve an AI's relevance — one Indian-knowledge dataset moved a small model from near zero to rivaling a far larger general-purpose one. If better data is the fix, who should build and own it?
- A cross-cultural study found that identical AI-use behaviors were judged ethical in one country and unethical in another, regardless of written policy. What does that tell you about trying to govern AI use with uniform rules?

## Introduction

### AI's Double-Edged Role in CRP

AI can support teachers in making instruction culturally responsive, but its default outputs also risk **reinforcing dominant narratives** when left unprompted.

- **Support for teachers:** Wang et al. (2025) built **CulturAIEd**, an [[llm|LLM]]-powered system that helps [[k-12|K-12]] teachers design culturally responsive [[ai-literacy]] activities by combining student demographic information with rubric-driven guidance (a CRT checklist layered into generation). In a four-teacher pilot it **enhanced teachers' confidence** in spotting opportunities for cultural responsiveness and in modifying existing activities, with 78% finding AI suggestions helpful for diversifying materials. The tool directly targets the time, training, and resource barriers that block CRP implementation.
- **Risk of monocultural output:** Trust et al. (2025) analyzed 310 AI-generated civics lesson plans (2,230 activities): **94% contained no discernible multicultural content**, and of the 144 that did, 137 sat at the lowest "Additive" level — **only one reached "Transformation" and none reached "Social Action."** All three chatbots produced structurally identical, monocultural lesson templates. This is concrete evidence that AI defaults to homogenized curricula unless [[teacher-ai-competency|teachers]] actively intervene.

### Epistemic Marginalization in AI Systems

Beyond lesson generation, CRP connects to a deeper critique: AI training data and design processes encode Western, Anglophone epistemic frameworks that marginalize other ways of knowing.

- **Epistemic coloniality:** Tali-Otmani (2026) argues that GenAI systems are not epistemically neutral — predominantly Western-centric training data **actively marginalizes minoritized knowledges**, producing a "double marginalization" for disabled learners whose epistemologies are both underrepresented in training data and excluded from design. This extends the [[equity-in-ai-education|equity]] conversation from *access* to *whose knowledge is validated*.
- **Redistributing epistemic authority:** Ojeda-Ramirez, Gyles & Peppler (2026) propose **community-based AI learning**, a framework that repositions learners' lived and community-based epistemologies as the evaluative standard over AI outputs. Its three commitments — **epistemic fine-tuning**, **redistribution of authority**, and **situated discernment** — calibrate trust against local histories and community expertise, treating refusal and strategic non-use as valid CRP responses to AI.

### Culturally Grounded Data and Evaluation

A body of knowledge base-sourced work addresses the *content* and *evaluation* gaps behind CRP.

- **Non-Western training data:** IKS-Instruct provides a **24,795-example multilingual instruction dataset** for teaching LLMs Indian Knowledge Systems across seven [[language-learning|languages]] and 41 pedagogical techniques. A compact domain-tuned 7B model reached a median judge score of 6.39 (vs. 6.54 for a far larger general-purpose model) — while the base model scored **near zero** on IKS-specific dimensions, showing how much culturally grounded data improves relevance.
- **Global South benchmarks:** The **NSMQ Riddles** benchmark draws 1.8K scientific/mathematical riddles from 11 years of Ghana's National Science and Maths Quiz — one of the first Global South educational benchmarks — and found state-of-the-art LLMs **underperform the best student contestants**, exposing geographic bias in how models are evaluated.
- **Culture over policy:** A cross-cultural survey of Canadian and South Korean [[cs-education|computing]] students found that **culture, not policy text, drove perceptions of AI-use ethicality** — identical behaviors were judged differently across cohorts, reinforcing the need for culturally aware communication rather than abstract rules.

### Practical Guidance

Grounded in the knowledge base's own articles, educators and designers can apply CRP to AI:

- **Treat AI as a draft generator, not an authority.** The Trust et al. civics findings show teachers must inject higher-order thinking and multicultural perspectives the AI omits; [[human-in-the-loop-ai|human judgment]] remains essential for cultural authenticity and community alignment.
- **Layer demographic and cultural context into prompts and tools.** CulturAIEd and [[connected-ai-lesson-planning-vietnam|ConnectED]] (a Vietnamese, curriculum-aligned lesson-planning system) show that structured, locally grounded prompt templates plus teacher validation gates improve cultural fit over generic generation.
- **Center community knowledge as the evaluative standard.** Following community-based AI learning, have learners judge AI outputs against locally grounded criteria of relevance, harm, and usefulness, and honor context where refusal or non-use is the right call.
- **Adopt and evaluate culturally grounded datasets.** IKS-Instruct and NSMQ Riddles illustrate that domain-specific, non-Western data meaningfully improves both relevance and honest evaluation.

## Connected Concepts

- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[ai-literacy]]
- [[k-12]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[bias-mitigation]]
- [[critical-pedagogy]]
- [[human-in-the-loop-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[language-learning]]
- [[cs-education]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Connected Articles

- [[llm-cultural-relevance-k12]] — LLMs for Culturally Relevant K-12 Pedagogy
- [[civic-education-ai-lesson-plans]] — AI-Generated Lesson Plans in Civic Education
- [[ojeda-ramirez-community-based-ai-learning]] — Community-Based AI Learning
- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct: Indian Knowledge Systems Dataset
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles: Ghana STEM Benchmark
- [[cross-cultural-student-perceptions-genai-computing]] — Cross-Cultural Perceptions of GenAI Use
- [[international-students-conversational-ai-adaptation]] — International Students and Conversational AI
- [[connected-ai-lesson-planning-vietnam]] — ConnectED: Vietnamese Lesson Planning
- [[culturally-aware-aied-community-learning]] — Culturally-Aware AI for Community Learning
- [[taklif-ai-interest-based-personalized-assignments]] — Taklif: Interest-Based Personalized Assignments
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts

