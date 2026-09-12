---
title: "What Are Best Practices for Writing Instruction in the Context of AI?"
created: "2026-09-12T08:13:03-04:00"
updated: "2026-09-12T08:13:03-04:00"
tags: [writing-education, cognitive-offloading, academic-integrity, feedback-literacy, ai-feedback-quality, ai-use-disclosure, assessment-validity, peer-review, humanities-education, engineering-education, multilingual-learning, evaluative-judgement]
weight: 80
---

This FAQ is written for instructors who have to decide, course by course and assignment by assignment, what AI should be allowed to do in student writing. It draws on the AI in Education knowledge base, especially its syntheses of [[writing-education|AI in writing education]], [[cognitive-offloading|Cognitive Offloading]], [[ai-feedback-quality|AI Feedback Quality]], [[feedback-literacy|Feedback Literacy]], and [[academic-integrity|Academic Integrity]].

The research points to one consistent principle:

> **Use AI to increase feedback, reflection, critique, and revision — not to remove the intellectual work that writing is meant to develop.**

That principle matters because [[writing-education|writing]] is not the production of polished text but a cognitive, rhetorical, and social process. AI can improve the product while weakening the processes of reasoning, authorship, source evaluation, and revision that your assignment exists to teach. Everything below is a way of applying that distinction.

## Eight research-informed practices for instructors

**1. Decide first what intellectual work students must retain, then set the AI boundary.** Before deciding whether AI is "allowed," name the construct the assignment develops or assesses. If the goal is argumentation, students must formulate and defend claims. If it is disciplinary interpretation, they must make interpretive judgments. If it is scientific reasoning, they must connect evidence to conclusions. AI use that replaces that work undermines the [[assessment-validity|validity]] of the assignment even when the resulting prose is excellent — the product no longer warrants the inference you want to draw from it. This is the central logic of [[writing-education|writing education]] and [[academic-integrity|academic integrity]], and it is why task-level rules beat course-level bans.

**2. Prefer "student thinks, AI responds" over "AI writes, student edits."** This is the most actionable principle in the evidence base. [[layer-sensitive-cognitive-offloading-writing-2026|Chen's layer-sensitive study]] of 168 undergraduates across six intact classes distinguished surface, structural, idea, and reasoning offloading: open AI collaboration produced the strongest AI-supported writing but the weakest later independent performance, and delegating *reasoning* was most negatively associated with independent [[critical-thinking|higher-order thinking]]. A bounded condition that restricted delegation and required students to explain how they accepted, modified, or rejected AI suggestions did better on independent writing, argument depth, and revision. The study is quasi-experimental with only six intact classes, so treat the causal claim cautiously — but the pattern aligns with the wider [[cognitive-offloading|offloading]] literature.

A practical rule follows: require students to establish their own interpretation, hypothesis, argument, or analysis *before* asking AI to critique or develop it. AI can be asked, "Here are three objections to my argument." It should rarely be asked, "Write my argument for me."

**3. Be especially cautious about AI-generated first drafts.** In a study of 253 writers, any AI assistance reduced perceived ownership, but *drafting* assistance reduced it most while *planning* assistance reduced it least; more AI-contributed text and ideas went with better essay quality but lower ownership ([[ai-writing-support-stage-ownership-2026|the planning-to-revision ownership study]]). The trade-off is real: you can get a better essay and a weaker sense of authorship in the same submission. If preserving authorship matters in your course, separate AI that prompts planning from AI that generates paragraphs — the first is defensible almost anywhere, the second rarely is when composing is the target skill.

**4. Use AI as one feedback partner, and keep human feedback in the system.** The strongest classroom evidence here is [[pairr-ai-peer-review-2025|PAIRR]], involving 654 students across ten writing courses and three writing-intensive STEM courses: students drafted, completed [[peer-review|peer review]], obtained rubric-based AI feedback, compared and evaluated both sources, made revision plans, revised, and reflected. Fifty-eight percent preferred combined peer + AI feedback against only 6 percent who preferred AI feedback alone. Students found AI useful for broad rubric-oriented revision advice while peers supplied contextual knowledge and authentic audience response. Be precise about what this shows: PAIRR measured students' experience and evaluation of feedback rather than long-term [[learning-gains|learning gains]], so it is strong evidence for a *feedback design* and weaker evidence for durable improvement in writing.

**5. Teach students to evaluate feedback, not just to prompt for it.** Access to good feedback is not enough. Students need [[feedback-literacy|feedback literacy]]: the capacity to seek feedback, judge its quality, manage their reaction to it, and turn it into revision. Students with higher feedback literacy benefit far more from AI feedback, while those who treat it as authoritative gain less ([[ai-feedback-quality|AI Feedback Quality]]). A useful assignment component is a short feedback decision table — *AI suggestion → accept / reject / modify → why → the rubric criterion or evidence supporting the decision*. That turns AI output into material for [[evaluative-judgement|judgment]] rather than instructions to obey, and it gives you something gradeable that is not the prose itself.

**6. Keep some writing and reasoning independently observable.** AI-assisted performance is not independent capability. Retain occasional withdrawal conditions: brief no-AI writing, in-class interpretation, oral explanation, a conference, spontaneous revision, or a follow-up problem that requires transferring the same reasoning to a new case. This matters most when the final paper carries substantial grade weight. It does **not** mean converting every assignment into a proctored exam — a few strategically placed independent samples give both you and the student a baseline to interpret the assisted work against ([[cognitive-offloading|Cognitive Offloading]]; [[layer-sensitive-cognitive-offloading-writing-2026|Chen's study]]).

**7. Use disclosure as reflection, not as a trap.** Disclosure is not neutral: students conceal AI use when policies are ambiguous, punitive, or stigmatizing, and honesty can even attract suspicion. Disclosure works pedagogically when it makes decision-making visible — what AI was used for, what was supplied to it, which suggestions mattered, and what the student ultimately accepted or rejected ([[ai-use-disclosure|AI Use and Disclosure Statements]]; [[student-rationalization-ai-writing|student rationalization research]]). Task-specific guidance is better than a blanket "AI permitted" or "AI prohibited" rule, because the right boundary differs between brainstorming, argument development, sentence editing, source work, and final composition. State how disclosure will affect grading, or students will assume the worst.

**8. Do not treat generic LLM judgment as a substitute for your judgment, especially in summative assessment.** Two apparently conflicting results are compatible: carefully calibrated systems with detailed rubrics and examples can score particular tasks well, while out-of-the-box LLM grading diverges substantially from human judgment. [[llms-do-not-grade-essays-like-humans-2026|Mathew et al.]] found weak human–LLM agreement that varies systematically with essay quality — LLMs over-reward short, superficially readable essays and under-reward longer, stronger essays with minor surface errors, clustering toward the middle of the scale. AI is therefore much easier to justify for low-stakes formative feedback, comment drafting, or triage than as an autonomous final grader ([[automated-essay-scoring|Automated Essay Scoring]]).

## A default workflow you can adopt or adapt

A robust AI-era writing sequence keeps the reasoning with the student and puts AI in a consulting role:

| Stage | Student responsibility | Appropriate AI role | What you can collect |
|---|---|---|---|
| **1. Encounter evidence** | Read, observe, annotate, calculate, run the experiment | Usually none, or clarification only | Notes, annotations, observations |
| **2. Form an initial position** | Generate interpretation, question, hypothesis, claim | May ask questions or challenge assumptions | Claim or hypothesis memo |
| **3. Plan** | Decide evidence, sequence, audience, genre | May critique an outline or suggest alternatives; student decides | Outline + rationale |
| **4. Draft** | Produce substantive prose and reasoning | Restricted according to the learning goal | Draft and version history |
| **5. Human response** | Give and receive peer or instructor feedback | None necessary | Peer comments |
| **6. AI feedback** | Ask for criterion-referenced critique | Critic, reader, counterargument generator, clarity checker | AI feedback transcript |
| **7. Evaluate feedback** | Compare peer, instructor, and AI suggestions; accept or reject with reasons | AI output becomes the object of evaluation | Feedback decision memo |
| **8. Revise** | Make and justify substantive changes | Test clarity, offer alternatives | Revision |
| **9. Verify** | Check every factual or source-dependent claim | AI cannot verify its own output | Sources and evidence |
| **10. Reflect and disclose** | Explain AI's role and what changed in their thinking | None | Brief process reflection |
| **11. Independent check when needed** | Explain or apply the reasoning without AI | None | Oral defense, quick write, new case |

This is essentially [[pairr-ai-peer-review-2025|PAIRR]] extended: draft → human feedback → AI feedback → critical comparison → revision → reflection, with an independent baseline and clearer boundaries around reasoning.

## Discipline-specific guidance

### Composition and writing courses

Composition instructors have the strongest reason to protect the writing process itself, because drafting, rhetorical decision-making, revision, audience awareness, and the development of voice are not just ways of displaying learning — they *are* the learning objectives. Teach AI use progressively rather than as a binary. Early in the term, collect several independent samples so both you and the student know what the writer can currently do. Then introduce AI mainly as audience, critic, and revision partner: ask it to identify where a reader loses the thread, generate objections to a thesis, compare a draft against the rubric, flag unsupported claims, or explain why a paragraph feels incoherent. Students judge the suggestions themselves.

Keep peer review even when AI feedback is available: peers supply contextual and audience knowledge that AI does not, and evaluating the difference between the two is itself writerly training. Be conservative about AI generating long stretches of a first draft when learning to compose is the objective, as the ownership and offloading evidence above both indicate. At the same time, avoid blanket bans on grammar, phrasing, or language assistance — they create unnecessary barriers for [[multilingual-learning|multilingual writers]]. The better move is to separate *language support* from *intellectual authorship*: students may get help with expression while remaining responsible for ideas, evidence, rhetorical decisions, and meaning. Be aware that AI feedback is not language-neutral: [[marked-pedagogies-linguistic-bias-writing-feedback|Tan et al.]] found identical writing drew more praise and less substantive critique when student demographic or educational attributes were included in the prompt, so [[bias-mitigation|bias]] auditing belongs in your feedback design.

### Humanities and social science courses

Interpretation is frequently the target capability here, so make **source encounter precede AI encounter**. Students should annotate the primary text, historical source, artwork, archival item, interview, or theoretical passage and formulate an initial interpretation *before* consulting AI. Afterward, AI becomes educationally useful as a foil: "Offer an alternative reading"; "What evidence would challenge my interpretation?"; "Which assumptions does my argument make?"; "Generate an interpretation from a contrasting theoretical perspective." The student decides which reading the actual text warrants.

Assignments can also make AI critique itself part of disciplinary learning: give students an AI interpretation of a poem, event, argument, or social phenomenon and ask what it notices, what it misses, which evidence supports its claims, whose perspective is absent, and where it collapses ambiguity into a smooth answer. That preserves the interpretive judgment the [[humanities-education|humanities]] teach instead of treating an LLM as an oracle. Assess interpretive decisions and evidential justification rather than polish — a short conference question such as "Why did you read this passage this way rather than the alternative you rejected?" is far stronger evidence of understanding than guessing whether a sentence "looks AI-generated" ([[ai-detection|AI detection]]).

### STEM courses and lab reports

**A qualification first:** the knowledge base holds much stronger evidence about AI-supported academic writing generally than about AI in laboratory-report writing specifically; hands-on and laboratory pedagogy remain under-covered, including within the [[engineering-education|engineering education]] literature. The guidance below is a reasoned application of writing, offloading, validity, and engineering evidence rather than a conclusion from a large literature on lab reports.

Draw the AI boundary around **scientific reasoning rather than prose as a whole**. Students remain responsible for observations, raw data, calculations, uncertainty, figures, analysis choices, results, and claim–evidence reasoning. Once those exist, AI can reasonably help with organization, readability, transitions, and disciplinary conventions — the same surface-versus-reasoning distinction as above ([[layer-sensitive-cognitive-offloading-writing-2026|Chen's study]]).

A strong AI-era lab-report package therefore includes the report **plus** selected raw data, calculations or notebook output, a figure with a student-written interpretation, and a brief statement of how the central conclusion follows from the evidence. For high-stakes reports, ask one or two individualized follow-up questions about a graph, an anomalous result, a methodological choice, or a limitation. Do not let writing fluency stand in for conceptual understanding: the knowledge base reports that automated physics scoring can underestimate conceptual understanding when linguistic expression is weaker, which falls hardest on [[multilingual-learning|multilingual students]] ([[automated-essay-scoring|Automated Essay Scoring]]). If scientific reasoning and scientific writing are both objectives, score them separately.

Engineering courses add professional accountability. A review of [[ethical-use-ai-engineering-education-review-2026|99 empirical engineering-education studies]] identified transparency, human oversight, student independence, privacy, authorship, fairness, and beneficence as recurring ethical concerns, and argued that AI ethics belongs in professional formation rather than rule compliance alone. In a lab or design report, ask students not only to disclose AI assistance but to certify that they have verified calculations, sources, assumptions, and safety-relevant claims.

## What to stop doing

- **Requiring polished prose while ignoring the process.** It makes the product progressively harder to interpret as evidence of learning.
- **Leaning on AI detectors.** [[ai-detection|Detection]] addresses detection, not learning or [[assessment-validity|assessment validity]], and its evidentiary record is poor.
- **Giving unlimited AI access without teaching feedback evaluation.** That assumes the [[feedback-literacy|feedback literacy]] many students have not yet developed.
- **Substituting AI feedback for peer and instructor interaction.** It removes the contextual and relational information students consistently report valuing.
- **Writing "AI allowed" and leaving it there.** Students reasonably read that as covering everything from spellchecking to generating the central argument. Task-level expectations are clearer and make disclosure less of a guessing game ([[ai-use-disclosure|AI Use and Disclosure Statements]]).

## A quick rule for deciding what AI may do

For each task, ask three questions:

| Question | If the answer is yes |
|---|---|
| Is this cognitive activity itself a learning objective? | Keep substantial responsibility with the student. |
| Will students need to perform this capability independently later? | Add independent practice and some no-AI assessment. |
| Can AI help students evaluate, practise, or revise the capability without performing it for them? | Usually the strongest case for AI integration. |

Applied: if the goal is argumentation, AI may challenge an argument but should not routinely supply one. If the goal is historical interpretation, AI may offer a competing reading the student critiques. If the goal is lab-report communication, AI may improve prose after the student has done the analysis and reasoning. This is the [[coach-not-crutch-ai-writing|coach-over-crutch]] boundary in practice.

## How strong is the evidence?

Promising, but not yet strong enough to justify a single universal AI-writing policy. Some of the best evidence comes from substantial authentic classroom studies such as [[pairr-ai-peer-review-2025|PAIRR]] with its 654 students. Other findings rest on quasi-experiments, small experimental samples, conceptual analyses, and emerging 2025–2026 work: [[layer-sensitive-cognitive-offloading-writing-2026|Chen's bounded-writing study]] involved 168 students but only six intact classes; the [[ai-writing-support-stage-ownership-2026|ownership study]] used a short experimental writing task; and a study reporting immediate quality gains after ChatGPT practice involved only 21 first-year international students and did not establish long-term [[transfer-of-learning|transfer]] ([[chatgpt-academic-writing-quality-ownership-2026]]).

Treat the consensus as **design principles rather than settled prescriptions**. The most reliable cross-study finding is to preserve student agency, [[evaluative-judgement|evaluative judgment]], independent competence, disciplinary reasoning, and human feedback, while using AI to expand the availability of critique, practice, revision support, and linguistic assistance.

**The short version for a syllabus or faculty workshop:** students do the intellectual work first; AI mainly questions, critiques, explains, and supports revision; students evaluate rather than merely implement its output; and assessment includes enough process or independent evidence to show what the student can actually do.
