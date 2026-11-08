---
title: "Learning with GenAI across campuses: student experiences of GenAI-enhanced cybersecurity education"
created: "2026-11-08T09:30:00-05:00"
updated: "2026-11-08T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey, thematic analysis]
evidence_context: educational
level: [graduate, higher ed]
audience: [instructors, instructional designers, administrators]
sources: ['raw/papers/aggarwal-genai-cybersecurity-2026.md']
source_url: "https://doi.org/10.1186/s41239-026-00639-0"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, critical-thinking]
pedagogy: [collaborative-learning, online-teaching-and-learning, situated-learning, student-experience]
technology: [generative-ai, prompt-engineering]
assessment: [evaluative-judgment, self-report-measures]
methods: [qualitative-research]
ethics: [hallucination-risk]
---

> **Synthesis:** Aggarwal (2026) analyzed anonymous open-ended reflections from 19 master's students — nine at Westcliff University's Irvine campus in California and ten at its Markham campus in Ontario — who had taken cybersecurity courses in an AI-enhanced cross-campus environment, where a multi-tool [[generative-ai|GenAI]] component ran alongside shared synchronous classes and asynchronous discussion forums. Students described GenAI as a fast way to clarify concepts, organize material, generate practice questions, and support [[problem-solving|problem solving]], while insisting that generated cybersecurity information be checked against course materials, academic sources, and, in one case, NIST publications; they described cross-campus peers as the source of professional, organizational, and cultural context that the tools could not supply. The paper's own best caveat is the divergent case: one participant reported "We did not have cross-campus interaction" and another described a conventional asynchronous course, so connecting two campuses did not by itself produce the exchange most participants described.

## Key Findings

- **Nineteen students across two campuses, and all 19 responses analyzed.** Nine were enrolled at Irvine and ten at Markham; all were master's-level graduate students in cybersecurity-related programs, and none was excluded.
- **Five themes organized the accounts.** GenAI as a learning and problem-solving support; critical engagement with GenAI-generated information; learning across campuses and perspectives; challenges; and recommendations for future learning.
- **GenAI served explanation and efficiency; verification was described, not measured.** Across five open-ended questions, students said they used it to clarify difficult concepts, summarize readings and lectures, organize ideas, generate practice questions, and explore unfamiliar topics, and several described it as saving time during research and study. They also said they compared generated material with course materials, instructor guidance, academic sources, and in one case NIST publications — though the study did not independently assess the accuracy of those evaluations.
- **Cross-campus exchange was described as contextual learning.** Students reported that cybersecurity risks, practices, and priorities differ across industries, organizations, regions, and countries, and one participant connected effective security to business objectives, organizational culture, resources, and regulatory environments.
- **The experience was not uniform.** One participant stated "We did not have cross-campus interaction," and another characterized the course as a normal virtual asynchronous course with weekly virtual lectures rather than an AI-enhanced experience.

## What GenAI and a distant peer each supply

Most findings are familiar: students like the tool for explanation and efficiency, and they know it can be wrong. The contribution is the relation the paper draws between two strands usually studied apart. GenAI is described as expanding access to "immediate cognitive and informational support" — fast, on demand, scalable, but general. Cross-campus peers are described as expanding access to "situated human perspectives" — how risks, adoption, and regulation look from another organization, industry, or country.

That matters because the wiki's [[collaborative-learning|collaborative learning]] literature mostly asks what role the AI should play inside a group — peer, tutor, mediator — and how to structure it. Aggarwal's account raises a prior question: which resource is being asked to do which job. A student who asks GenAI what a hospital's security posture should look like gets generic material; a group that uses distant peers only to look things up wastes the expensive resource. The paper does not test this division of labor, but it makes it concrete enough to design against.

Students' accuracy complaints — outputs "overly general, incomplete, inaccurate, or insufficiently contextualized" — are the [[hallucination-risk|hallucination risk]] of a general model in their own words, not a cybersecurity-specific failure. What is specific is the response they described: checking technical claims against course materials, academic literature, and authoritative sources. The connector the authors propose is comparison and judgment; checking a generated claim and weighing a peer's interpretation both undercut "the assumption that there is always a single, context-free answer to a complex problem." That is the paper's most interesting move and its most speculative: the authors call the connection "conceptual rather than evidence of an empirically established mechanism," and the model in Figure 1 "was not independently tested." The data show that students described both practices, not that either improved their [[critical-thinking|critical thinking]] or [[evaluative-judgment|evaluative judgment]].

There is a tension with the wiki's [[situated-learning|situated learning]] page, which treats AI — simulations, adaptive systems, authentic scenarios — as a way to situate learning in real practice. Aggarwal's students describe the opposite movement: GenAI supplied decontextualized information, and situatedness came from people in other places. Both can hold, because a simulation situates a task while a chatbot does not situate an organization, but the page should not let the idea that AI situates learning stand without that qualification.

## Why two connected campuses did not make one classroom

The cross-campus finding is presented mostly as a success: students encountered different professional and cultural perspectives and said it broadened their understanding. Two divergent accounts cut against that pattern. One participant said, flatly, "We did not have cross-campus interaction." Another described the course as a normal virtual asynchronous course with weekly virtual lectures rather than an AI-enhanced experience. The authors draw the right conclusion: "Cross-campus learning should therefore be understood as a designed pedagogical experience rather than simply a structural characteristic of a course."

The study cannot say how common that experience was. It did not document the frequency, duration, or quality of any participant's cross-campus interaction, and 19 anonymous responses cannot estimate a prevalence. What the divergent accounts establish is existence, not size: a course can be architecturally distributed — two campuses, shared synchronous sessions, asynchronous forums — and still be, for some students, a conventional online lecture course. That is the negative case behind the [[online-teaching-and-learning|online teaching and learning]] page's advice to cultivate social presence. Presence is produced in tasks, not guaranteed by enrollment.

Participants said what would produce it: small-group work, longer-term cross-campus projects, live discussion, and scheduling that accounts for time zones. They did not ask for more GenAI tools but for more structure, more [[experiential-learning|hands-on cybersecurity activity]] — simulations, laboratories, real-world cases — and clearer guidance on ethical and effective use. The authors locate the difference in "pedagogical architecture" rather than in the number or novelty of tools.

## What this means for practice

- **Assign the tool the information job and the peers the context job, explicitly.** The authors propose a shared cybersecurity scenario in which cross-campus teams use GenAI to explore possible responses, evaluate the recommendations, compare how each team reads the problem from its own context, and justify a solution. The cross-campus comparison is the part GenAI cannot do.
- **Make the verification trail part of the task, not just the answer.** Students said they checked generated material against course materials, instructor guidance, academic literature, and NIST publications. The authors recommend activities that require students to verify claims, compare outputs across tools or sources, identify limitations, and justify whether to accept, modify, or reject what was generated — making [[ai-literacy|critical AI literacy]] part of the assignment rather than an orientation slide.
- **Treat connectivity as infrastructure and interaction as an assignment.** Co-enrollment is not collaboration. Build small groups, a shared task, and repeated meetings into the syllabus, scheduled against both time zones; otherwise a student can complete the course without meeting anyone from the other campus.
- **Run the GenAI orientation early and keep it narrow.** Students asked for workshops on [[prompt-engineering|effective prompting]] and responsible use and reported a learning curve across multiple platforms. The authors' implication is to limit unnecessary technological complexity, which argues against introducing every tool at once.
- **Do not read satisfaction as learning.** This study records [[student-experience|student experience]], not achievement. It has no measure of cybersecurity knowledge, and its own authors treat the accounts as perceptions rather than evidence of improved performance.

## Limitations

The sample is 19 master's students at two campuses of a single university, all in cybersecurity-related programs, invited through the university's research office from students enrolled in Fall 2025 or Spring 2026. The authors present the design as exploratory and explicitly warn against treating the findings as representative of graduate cybersecurity students more broadly. Participation was voluntary and uncompensated, so the students who chose to answer are an unknown subset of the eligible population.

The data are a one-time anonymous online survey with five open-ended questions, collected between May and August 2026. Written responses allow no probing or follow-up, and the authors report that depth varied across participants. The thematic analysis was conducted by a single researcher; the paper describes iterative checking against the dataset but reports no second coder, inter-coder agreement, or member checking, which leaves theme boundaries and interpretive choices unexamined by anyone else.

Everything here is [[self-report-measures|self-report]], and the study has no baseline, no comparison group, and no measure of cybersecurity knowledge, AI literacy, or performance, so it cannot attribute any learning to GenAI or to cross-campus interaction. It also did not record which model versions students used — they worked through personal free accounts — or measure prior GenAI experience, frequency, or proficiency. The implementation is underdocumented too: the authors did not record how often, how long, or how well each participant interacted across campuses, so the divergent accounts cannot be explained. Social desirability and institutional response bias are acknowledged, since students reflecting on a university-supported course may have emphasized positive experience or moderated criticism. The complementarity model is an interpretation of the themes, not a tested mechanism. As a [[qualitative-research|qualitative study]], it is good evidence for how these students described the environment and cannot show what the environment produced.

## Citation

Aggarwal, S. (2026). [*Learning with GenAI across campuses: student experiences of GenAI-enhanced cybersecurity education*](https://doi.org/10.1186/s41239-026-00639-0). *International Journal of Educational Technology in Higher Education*, 23, 61.
