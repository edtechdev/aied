---
title: "Vibe Coding for Simulation Development in Engineering Education"
created: "2026-10-04T15:44:48-04:00"
updated: "2026-10-04T15:44:48-04:00"
type: article
sources: ['raw/papers/caee-vibe-coding-simulation-development-engineering-education-2026.md']
confidence: low
page_kind: [framework, evaluation]
research_method: [case study, system development]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
discipline: [engineering education]
pedagogy: [active-learning]
technology: [vibe-coding, simulation, generative-ai, prompt-engineering]
methods: [qualitative-research]
foundations: [human-ai-collaboration, teacher-role, learning-design]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This preliminary investigation asks whether [[vibe-coding|vibe coding]] can lower the barrier to building educational [[simulation|simulations]] in [[engineering-education|engineering education]], and reports two undergraduate case studies in which an instructor built interactive web tools by prompting Gemini in ordinary language. In automotive engineering, a Python model of an electric-vehicle battery thermal management system became a slider-driven simulation with an adjustable PID controller; in communication engineering, three ARQ protocols were rebuilt as interactive animations. The authors propose a six-stage workflow — context priming, content validation, simulation generation, simulation validation, iterative refinement, and session restart — and check the results against established simulation design principles, judging both simulations aligned on feedback, repetitive practice, difficulty range, controlled environment, [[personalized-learning|individualized learning]], and fidelity. The technical barrier did fall: both simulations worked, and were built within hours of simple prompting. The instructor's validation role did not, and one ARQ case shows why — a duplicate-packet error survived repeated prompting and had to be diagnosed from protocol behavior rather than from the visible output.

## Key Findings

1. Two case studies — one in automotive engineering for third-year mechanical engineering students and one in communication engineering for third-year electrical engineering students, at two universities in Thailand, one private and one public — produced functional web-based simulations from natural-language prompts alone.
2. The authors propose a six-stage workflow: context priming, content validation, simulation generation, simulation validation, iterative refinement, and session restart when iterative debugging fails to converge on a correct solution.
3. In Case I, a baseline Python model of an electric-vehicle battery thermal management system — battery, thermal, PID cooling, and energy loss components over a 300 km drive — became an interactive simulation whose PID gains students can adjust.
4. In Case II, the Stop-and-Wait, Go-Back-N, and Selective Repeat ARQ protocols were implemented individually; a duplicate-packet error that survived repeated prompts was fixed only after the instructor diagnosed an insufficient timeout interval.
5. Both simulations were checked against six design characteristics from the literature — feedback, repetitive practice, range of difficulty, controlled environment, individualized learning, and fidelity — and the authors judged each to be aligned.
6. No learning outcome was measured: the study examined the development process, and the authors state that the simulations' effectiveness for learning, engagement, or motivation was not formally assessed.

## A six-stage prompting workflow

This exploratory study set out to answer two research questions: what characteristics and challenges emerge when vibe coding is used to develop a simulation-based learning tool for an engineering topic, and how far such a tool aligns with established simulation design principles. The authors chose topics that were neither overly simple nor excessively complex and that could fit on a single interactive web page, settling on one case in each discipline. For a development platform they compared [[generative-ai|ChatGPT]] and Gemini, then chose Gemini — specifically its Canvas mode, which shows the generated application alongside the conversation — because it gave a more user-friendly experience and produced interfaces better suited to the intended simulations at the time. The proposed workflow has six stages: context priming, in which the instructor discusses scope, learning objectives, and expected student comprehension level with the model; content validation, in which AI-generated explanations are reviewed for factual accuracy; simulation generation, prompted with the word "visualize" to emphasize graphical output; simulation validation for technical functionality and conceptual accuracy; iterative refinement of errors and interface; and session restart, used when debugging fails or an alternative design is preferred. Prompts stayed in plain natural-language instructions, without advanced [[prompt-engineering|prompt engineering]] or software jargon, to reflect how a typical engineering instructor with limited programming experience would interact with the system. The complete interaction history served as the study's primary data source.

## Where prompting worked and where it stopped

The two cases diverge in how much the AI could do unaided. In Case I, the supplied Python implementation produced only static plots; the Gemini-generated simulation added parameter sliders and real-time value displays, and later prompts refined slider ranges, axis labels, and layout rather than the underlying model. Two preliminary prototypes were discarded as unsatisfactory for instruction, though the experience informed later prompts. Case II is the harder account. Asked to build a single application covering all three ARQ protocols, Gemini produced an animation with a logical error: duplicate packets were transmitted before acknowledgments had been received. Follow-up prompts — including one that stated the required Stop-and-Wait behavior explicitly — did not fix it, and after several rounds the simulation grew more inconsistent, so the session was abandoned and restarted, as the workflow's final stage recommends. Developing each protocol separately helped, but the duplicate-packet problem reappeared, and resolving it required the instructor to reason about protocol behavior rather than read the code: the cause was an insufficient timeout interval, a parameter not exposed in the interface. The authors conclude that AI could perform the implementation while domain expertise remained indispensable for diagnosing conceptual errors that iterative prompting alone could not resolve.

## Alignment with simulation design principles

To address the second research question, the authors evaluated the simulations against established recommendations for effective simulation-based learning, including the conditions identified by Issenberg and colleagues and the NLN/Jeffries Simulation Theory as extended by Waxman. Because not every recommended characteristic applies to every simulation, the evaluation covered only the features relevant to what the two tools actually do. Both provide immediate feedback — changing PID parameters updates the temperature, state-of-charge, cooling power, and energy-loss graphs at once, and deliberately corrupting a packet visualizes error recovery in real time. Both support repetitive practice, since learners can rerun experiments without laboratory setup and reach the web-based tools inside or outside class. Both were pitched at the intended third-year level, established during context priming. Both act as controlled environments that expose only instructionally relevant variables, and both allow individualized, self-paced exploration. Both offer what the authors call an appropriate level of fidelity: simplified models that represent essential system behavior without the complexity that would obscure the concepts being taught. The paper reports no independent measure of these features; the alignment is the authors' own assessment.

## What this means for practice

- **Instructors.** Expect the technical work to be tractable but keep the validation work: verify the engineering concepts before generation, check the resulting simulation's behavior before teaching with it, and be ready to diagnose errors the model cannot, as the ARQ timeout case required.
- **Instructional designers.** Build the workflow's review stages into the process explicitly — a content-validation pass before code generation and a simulation-validation pass after — so conceptual checks are not skipped in the rush to a working prototype.
- **Program leaders and administrators.** Treat vibe coding as a way to reduce dependence on dedicated software developers during initial prototyping, not as a replacement for domain expertise; the authors describe the result as a partnership between educator and AI with the educator still central to [[learning-design|instructional design]].
- **Researchers.** The study establishes feasibility, not effectiveness; the next step is to evaluate whether such simulations improve learning, engagement, or motivation, and to compare models and tools beyond the single one used here.

## Limitations

- The evidence base is two case studies in two engineering disciplines at two universities in Thailand; the authors say more cases across a wider range of subjects and simulation complexity are needed to surface unaddressed challenges.
- The study used a single platform, Gemini, and reports no model version or data-collection window; the authors note that other [[llm|large language models]] and specialized AI coding tools may behave differently, and the tool has changed since the study ran.
- No learning outcome was measured. The simulations were used in authentic classrooms but not formally integrated into the curricula, and the paper states that their effectiveness for learning, engagement, or motivation was not assessed.
- The analysis rests on the authors' own interaction histories — prompts, responses, and revisions — with no independent coding or second coder, so the reported challenges are the developers' own account of their process.
- Both simulations were judged against design principles by the same team that built them, and only features relevant to current functionality were considered, so the alignment claim is self-assessed rather than externally verified.

## Citation

Tarasak, P., Wongsuwan, W., & Sedtheetorn, P. (2026). [Vibe Coding for Simulation Development in Engineering Education](https://doi.org/10.1002/cae.70284). *Computer Applications in Engineering Education, 34*, e70284.