---
title: "AI as Co-Designer and Feedback Partner: Enhancing Human Judgment"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/aalhe-ai-co-designer-feedback-partner-2026.md']
confidence: high
page_kind: [framework]
research_method: [position paper]
discipline: []
level: [higher ed]
audience: [instructors, faculty developers, assessment designers, instructional designers, administrators]
pedagogy: [metacognition, self-regulated-learning, scaffolding, student-ai-interaction]
technology: [generative-ai, llm, conversational-ai, prompt-engineering]
assessment: [formative-assessment, authentic-assessment, feedback, feedback-literacy, self-assessment, process-oriented-assessment, summative-assessment]
methods: []
institutions: [change-management]
ethics: [privacy, ai-use-disclosure, hallucination-risk]
foundations: [ai-literacy, human-ai-collaboration, teacher-role, teacher-ai-competency]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Ford, Helms, and Moseley (2026) argue that [[generative-ai]] should be treated as a co-designer during assessment development and as a feedback partner during learning, not as an automated replacement for faculty expertise. Writing from their own practice, they distinguish AI from augmented intelligence (AuI), in which technology amplifies rather than replaces human decision-making, and describe two working moves: asking an enterprise AI platform to "take the test" and compare its reasoning with the keyed response before items are administered, and building a chatbot that guides students toward connections between course content and assignment expectations rather than generating the response. They ground the partnership in [[metacognition]] and [[self-regulated-learning|self-regulated learning]], insist that AI output must be critically evaluated rather than accepted, and close with a six-part framework — AI tools and [[assessment|assessment design]], [[formative-assessment|formative assessment]], [[summative-assessment|summative assessment]], [[ethics]], pedagogical purpose, and [[human-in-the-loop-ai|human judgment]] — for building authentic assessment. The article reports no empirical data.

## Key Findings

1. **Augmented intelligence, not artificial intelligence, is the working paradigm.** The authors distinguish AI, which can automate scoring and feedback, from AuI, in which educators retain authority over assessment decisions while using AI-generated insights to support evaluation and instructional adaptation.
2. **AI can pre-test examination items before administration.** Faculty ask an enterprise AI platform to answer individual questions, then compare its reasoning with the intended construct and keyed response, surfacing ambiguous wording, multiple plausible answers, unintended clues, and keyed answers that are not clearly defensible.
3. **The model's answer is a prompt, not evidence.** The authors are explicit that the AI response is not treated as proof that an item is correct or flawed, but as an additional perspective that leads faculty to reconsider how a question may be interpreted.
4. **[[conversational-ai|Chatbots]] can be resource-based rather than content-generating.** One author partnered with instructional designers to build an LMS chatbot that guides students through a milestone assessment with prompts encouraging synthesis, identification of knowledge gaps, and review of course materials — deliberately not producing the student's response.
5. **Feedback partnerships rest on metacognition and self-regulated learning.** The authors describe static [[ai-feedback-quality|AI feedback]] systems as valuable because learners must interpret and justify feedback, and [[adaptive-learning|adaptive systems]] as supporting calibration of task complexity and just-in-time support.
6. **Risks are named rather than solved.** The article flags [[hallucination-risk|hallucinations]] that appear credible but are wrong, privacy exposure from uploading student work and rubrics to third-party platforms, and the difficulty of distinguishing student work from AI output, which [[ai-detection]] handle poorly.
7. **The closing framework is a design checklist.** The authors propose six considerations — AI tools and assessment design, formative assessment, summative assessment, ethical use, pedagogical purpose, and human judgment — each broken into context, potential strategies, and issues to consider.

## Co-design as augmented intelligence

The paper's central distinction is between AI as an autonomous evaluator and AI as a collaborator. The authors cite augmented intelligence (AuI) scholarship in which educators retain authority over assessment decisions while leveraging AI-generated insights to support evaluation, feedback, and instructional adaptation, and they place their own practice inside that frame. The clearest example is item pre-testing: faculty upload an assignment and rubric to an enterprise AI platform and ask the model to answer the questions, then compare its reasoning with the intended construct and keyed response. The process has surfaced ambiguous wording, multiple plausible answers, unintended clues, and keyed answers that are not clearly defensible — issues the authors say are difficult to catch in traditional faculty review. Crucially, they treat the model's answer as an additional perspective that prompts reconsideration, not as evidence that an item is correct or flawed. The same discipline appears in a second example, where a graduate sports management instructor used Gemini Notebook to synthesize readings and map them to course learning outcomes, and in a [[nursing-education|nursing education]] case where faculty and students co-designed an AI-powered [[learning-analytics|learning analytics]] dashboard while educators retained responsibility for interpreting the results. Co-design, in this account, is about who keeps the judgment.

## Feedback partnerships and reflective practice

The second argument treats AI as a feedback partner that supports iterative reflection for students and faculty. The authors distinguish adaptive systems, which monitor performance and adjust subsequent tasks or prompts, from static systems, which provide feedback without continuous adaptation; they argue static interactions can support deeper metacognitive engagement because learners must evaluate the feedback, justify their reasoning, and consider alternatives rather than passively receive corrections. Their examples are concrete: a teaching-philosophy assignment in which a chatbot served as a conversational partner, posing follow-up questions that pressed the learner to check whether stated beliefs matched actual [[pedagogy|teaching practice]]; an LMS chatbot that guides students through a milestone assessment toward synthesis and knowledge-gap identification; and a social media campaign task in which students used AI to produce ads they could not render by hand. They cite systematic-review evidence that AI-supported feedback can provide process-oriented and self-regulatory prompts, and that students in dialogic writing [[student-ai-interaction|interactions with AI]] showed greater self-regulation and reflective learning than those using AI as an information provider. The condition they attach is that the value depends on pedagogical design and human facilitation: learners must be taught to critically evaluate AI-generated feedback and distinguish superficial from meaningful learning.

## Authentic assessment and the risks the authors name

The paper's practical output is a framework of six considerations for authentic assessment design — AI tools and assessment design, formative assessment, summative assessment, ethical use, pedagogical purpose, and human judgment — each elaborated with context, potential strategies, and issues to consider. Around it the authors name risks they do not claim to resolve. Hallucinations can mislead students and undermine the validity of the task, and learners may spend time verifying output, which increases cognitive load and reduces trust. Privacy is a live concern: AI-assisted assessment may require sharing student records, draft work, rubrics, and internal program materials with third-party platforms, raising the possibility that inputs are repurposed to train external models. Detection offers no way out, since AI-generated work is hard to detect and most existing systems are not equipped to detect it accurately. And the authors note the resource asymmetry — smaller regional institutions, institutions in low-income communities, and two-year colleges have smaller budgets to dedicate to AI — alongside the [[educational-development|professional development]] gap that leaves faculty either avoiding the tools or adopting them uncritically.

## What this means for practice

- **[[teacher-role]]** Pre-test high-stakes items by asking your AI tool to answer them, then compare its reasoning with the keyed response; treat what it produces as a prompt to reconsider the item, not as evidence that the item is flawed.
- **Instructors.** Build feedback prompts that require interpretation rather than correction — static, resource-based systems that make students justify and apply feedback tend to support deeper [[metacognition|metacognitive]] engagement than systems that hand back answers.
- **Assessment designers.** Use the six considerations as a design checklist, and pair each task with an explicit statement of what the AI may do and what the student must demonstrate unaided.
- **Faculty developers.** Pair tool access with formation in [[prompt-engineering|prompt design]], verification, and ethical use, because the authors argue that successful implementation depends on educators' ability to align tools with learning goals rather than on the tools themselves.
- **[[administrator]]** Budget for licensing, infrastructure, faculty training, data security, and ongoing maintenance, and assess which AI tools support current institutional priorities before committing funds.

## Limitations

- The article is a conceptual manuscript drawing on the authors' personal and documented experience; it reports no empirical data, no sample, and no measured outcomes.
- The examples come from a small number of programs — a graduate sports management course, a teaching-philosophy assignment, a social media campaign task, and a nursing education dashboard — so their transferability is asserted rather than demonstrated.
- Claims about item quality rest on cited studies rather than the authors' own comparison, so the pre-testing workflow is illustrated but not evaluated here.
- Privacy, detection, and hallucination risks are named as concerns rather than addressed with evidence, and the six considerations are offered as a proposal rather than a validated instrument.

## Citation

Ford, C. R., Helms, K. L., & Moseley, L. E. (2026). [AI as Co-Designer and Feedback Partner: Enhancing Human Judgment](https://doi.org/10.61669/001c.172636). *Intersection: A Journal at the Intersection of Assessment and Learning*, *7*(5), 2–21.
