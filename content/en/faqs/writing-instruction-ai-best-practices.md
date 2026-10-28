---
title: "What Are Best Practices for Writing Instruction in the Context of AI?"
created: "2026-09-12T08:13:03-04:00"
updated: "2026-10-28T11:14:24-04:00"
connected_faqs: [ai-feedback-at-scale, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education]
foundations: [academic-integrity, cognitive-offloading]
assessment: [ai-feedback-quality, assessment-validity, evaluative-judgment, feedback-literacy, peer-assessment]
ethics: [ai-use-disclosure, multilingual-learning]
weight: 80
audience: [instructors, instructional designers]
discipline: [engineering education, humanities education, writing education]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

You are rewriting an assignment sheet and the sentence in front of you says AI is permitted with acknowledgment, which tells a student nothing about whether the tool may supply the argument. A colleague has proposed a course-wide ban and you suspect it lands hardest on the multilingual writers in the room. Or a batch of essays came back smoother than the seminar discussion behind them, and you need a rule you can defend at the next curriculum meeting.

The bottom line: name the intellectual work the assignment exists to produce, keep that step with the student, and give the tool jobs that return something the student has to judge. A rule written that way tells a student which step it protects.

## The short version

**1.** Write one sentence naming the thinking the assignment grades, and put it where students will read it.

**2.** Make the student commit a claim, an interpretation, or a rough draft before the tool sees the task.

**3.** Set the boundary per step. Allow AI where the step is not what you grade, restrict it where it is.

**4.** Give AI the critic's chair, then grade what the student does with the response.

**5.** Keep one piece of writing the tool never touches and read the assisted work against it.

**6.** Say in advance what disclosure does to the grade.

## Name the thinking the assignment is for

The AI boundary is the second question, and most assignment sheets answer it first. Before you decide what is allowed, finish this sentence: this assignment exists to show that the student can do X. If X is argumentation, the student has to formulate and defend the claim. If it is disciplinary interpretation, the student has to make the interpretive judgment. If it is scientific reasoning, the student has to connect evidence to a conclusion. AI that performs that work breaks the inference you want to draw from the essay, and excellent prose does not repair it. [[assessment-validity|Assessment Validity]] treats this as a validity problem rather than a conduct problem, which is why [[writing-education|writing education]] and [[academic-integrity|academic integrity]] both end up arguing for task-level rules instead of course-level bans.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash and Burriss]] show how easily the sentence goes wrong. Across 27 [[teacher-education|preservice]] English teachers' classroom [[educational-policy-ai|AI policies]], 22 permitted AI for ideation and brainstorming, 22 disallowed or left unclear the use of AI to compose sentences, paragraphs or papers, and 22 said nothing at all about reading. The same teachers described ideation and revision as "thinking" while placing real thinking in the final written text. If thinking runs through planning, drafting, revising and evaluating, a policy that guards only the last product guards the wrong step, and reading needs as explicit a rule as writing.

Write the rule as a sentence about a step, then: "You may use AI to test objections to a claim you have already made. You may not use it to generate the claim or the evidence for it." A student can act on that. "AI permitted with acknowledgment" gives them nothing to act on.

## Make the student commit before the tool responds

Order of operations is the most useful design choice in this literature. [[layer-sensitive-cognitive-offloading-writing-2026|Chen's layer-sensitive study]] of 168 undergraduates in six intact classes separated four kinds of delegation: surface, structural, idea, and reasoning offloading. Open AI collaboration produced the strongest AI-supported writing and the weakest later independent performance. Delegating reasoning was the layer most negatively associated with independent [[critical-thinking|higher-order thinking]]. A bounded condition, which restricted what students could delegate and required them to explain how they had accepted, modified, or rejected each AI suggestion, did better on independent writing, argument depth, and revision.

Treat the causal claim with care. It is quasi-experimental, with six intact classes and no random assignment of students, so classroom differences stay tangled with the treatment. The direction fits the wider [[cognitive-offloading|cognitive offloading]] literature, which is why it is worth acting on, and the size of the effect is not something to quote at a committee.

On the sheet it costs one line: the student brings an interpretation, a hypothesis, an argument, or an analysis, and AI is asked to attack it. "Here are three objections to my argument" keeps the thinking with the writer. "Write my argument" does not, whatever the student does with the output afterward.

## Treat the first draft as the expensive step

Assistance at different stages does different damage. In a study of 253 writers, any AI assistance reduced perceived ownership of the work, drafting assistance reduced it most, and planning assistance reduced it least. More AI-contributed text and ideas went with better essay quality and lower ownership in the same submission ([[ai-writing-support-stage-ownership-2026|the planning-to-revision ownership study]]). That combination is the one to plan around: a stronger essay and a weaker sense of authorship arrive together, and the second is what [[agency]] in writing rests on.

If authorship matters in your course, split the permissions. AI that prompts planning, asks what evidence the student already has, or names a counterargument the student has missed is defensible almost anywhere. AI that generates paragraphs is hard to defend where composing is the target skill. Where composing is not the target, the calculation changes.

## Set the rule at each step

A sequence worth borrowing keeps AI in a consulting role and puts the reasoning with the student:

| Stage | The student does | AI may | Artifact you can collect |
|---|---|---|---|
| **1. Encounter evidence** | Read, observe, annotate, calculate, run the experiment | Nothing, or clarification only | Notes, annotations, observations |
| **2. Form a position** | Generate interpretation, question, hypothesis, claim | Ask questions, challenge assumptions | Claim or hypothesis memo |
| **3. Plan** | Decide evidence, sequence, audience, genre | Critique an outline, suggest alternatives | Outline with rationale |
| **4. Draft** | Produce substantive prose and reasoning | Restricted according to the learning goal | Draft and version history |
| **5. Human response** | Give and receive peer or instructor feedback | Nothing necessary | Peer comments |
| **6. AI feedback** | Ask for criterion-referenced critique | Critic, reader, counterargument generator, clarity checker | AI feedback transcript |
| **7. Evaluate feedback** | Compare peer, instructor, and AI suggestions, accept or reject with reasons | Its output is now the object of evaluation | Feedback decision memo |
| **8. Revise** | Make and justify substantive changes | Test clarity, offer alternatives | Revision |
| **9. Verify** | Check every factual or source-dependent claim | Cannot verify its own output | Sources and evidence |
| **10. Reflect and disclose** | Explain AI's role and what changed in their thinking | Nothing | Brief process reflection |
| **11. Independent check** | Explain or apply the reasoning without AI | Nothing | Oral defense, quick write, new case |

This is [[pairr-ai-peer-review-2025|PAIRR]] extended: draft, human feedback, AI feedback, comparison, revision, reflection, with an independent baseline and a tighter boundary around reasoning. Use the middle column as the assignment and the right column as what a grade can rest on.

Eleven rows is more than most assignments need. Collapse the table to the steps you can actually distinguish in class: encountering the evidence, forming a position, drafting, and revising. In that shorter version the encounter and the position are where the construct lives, drafting is the contested step, and formatting or reference checking can be permitted outright. Writing the table is how you find the two or three places where your rule has to say something, so a rule with three clauses that a student can follow beats a matrix nobody reads.

## Keep human feedback in the loop

The largest classroom study here is [[pairr-ai-peer-review-2025|PAIRR]]: 654 students across ten writing courses and three writing-intensive [[stem-education|STEM]] courses. They drafted, completed [[peer-assessment|peer assessment]], obtained rubric-based AI feedback, compared and evaluated both sources, wrote revision plans, revised, and reflected. Fifty-eight percent preferred combined peer and AI feedback. Six percent preferred AI feedback alone. Students found AI useful for broad rubric-oriented revision advice, and peers supplied contextual knowledge and an authentic audience response.

Be exact about the claim. PAIRR measured students' experience and evaluation of feedback, not long-term [[learning-gains|learning gains]], so it is strong evidence for a feedback design and weaker evidence that writing improves months later. Keep the peer step even when the AI step is faster. Much of the [[feedback]] work happens in the comparison between the two sources, and dropping it removes the part students said they valued.

## Grade what the student did with the feedback

[[feedback-literacy|Feedback literacy]] is the capacity to seek feedback, judge its quality, manage your reaction to it, and turn it into revision. Students with more of it benefit far more from AI feedback. Students who treat the output as authoritative gain less ([[ai-feedback-quality|AI Feedback Quality]]).

A short decision table makes that capacity visible, one row per suggestion: the AI suggestion, accept / reject / modify, why, and the rubric criterion or piece of evidence behind the call. Four columns, no essay required. It turns model output into material for [[evaluative-judgment|evaluative judgment]], and it gives you something gradeable that is not the prose.

Describe a strong row as carefully as you describe a thesis statement: it names the rubric criterion, points at a passage or a piece of evidence, and explains a change the student actually made. A row that says "good point, agreed" earns nothing. Students write to the example in front of them, so the example is the instruction.

## Make disclosure cheap and specific

Students conceal AI use when policies are ambiguous, punitive, or stigmatizing, and honesty can attract suspicion ([[ai-use-disclosure|AI Use and Disclosure Statements]]; [[student-rationalization-ai-writing|student rationalization research]]). What makes disclosure useful pedagogically is that it records decisions: what the tool was used for, what the student gave it, which suggestions mattered, what the student accepted or rejected.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed and Temimi]] supply the mechanism. Disclosure becomes the attractive option only when the cost of honesty stays low. Detectors produce false positives against honest students too, so heavier monitoring can make concealment relatively more attractive. Their advice is to design for the student most tempted to conceal and to read a declared use as context rather than a confession.

Two details do most of the work on the form. Ask for specific uses rather than a category, and state how a declaration will affect the grade. A student who does not know will assume the worst.

Four prompts are enough for most assignments: which step of the work the tool was used at, what the student supplied to it, which suggestions changed the draft, and which were rejected and why. That last prompt is the most informative, because a rejection with a reason is evidence of judgment and a list of accepted suggestions is not.

## Adjust the rule to what your field calls writing

### Composition and writing courses

Composition instructors have the strongest reason to protect the process, because drafting, rhetorical decisions, revision, audience awareness, and voice are the learning objectives rather than the display of them. Collect several independent samples early in the term, so you and the student both know what the writer can do now. Introduce AI as audience, critic, and revision partner: ask where a reader loses the thread, generate objections to a thesis, compare a draft against the rubric, flag unsupported claims, explain why a paragraph feels incoherent. The student judges each suggestion.

Keep peer review alongside AI feedback, since peers supply contextual and audience knowledge the model lacks, and evaluating the difference between the two is writerly training in itself. Be conservative about AI generating long stretches of a first draft when learning to compose is the objective, for the ownership and offloading reasons above. Avoid blanket bans on grammar, phrasing, or language assistance, which create unnecessary barriers for [[multilingual-learning|multilingual writers]]. Separate language support from intellectual authorship instead: help with expression is fine, and the student stays responsible for ideas, evidence, rhetorical decisions, and meaning. Audit the feedback itself, because [[marked-pedagogies-linguistic-bias-writing-feedback|Tan et al.]] found that identical writing drew more praise and less substantive critique when student demographic or educational attributes were included in the prompt, which puts [[bias-mitigation|bias mitigation]] inside feedback design.

### Humanities and social science courses

Interpretation is usually the target capability, so make the source encounter come before the AI encounter. Students annotate the primary text, historical source, artwork, archival item, interview, or theoretical passage and form an initial reading before consulting anything. Afterward the model works as a foil: offer an alternative reading, say what evidence would challenge this interpretation, name the assumptions the argument makes, generate a reading from a contrasting theoretical perspective. The student decides which reading the text actually supports.

Assign the critique of the model as disciplinary work. Give students an AI interpretation of a poem, event, argument, or social phenomenon and ask what it notices, what it misses, which evidence supports its claims, whose perspective is absent, and where it collapses ambiguity into a smooth answer. That keeps the interpretive judgment a [[humanities-education|humanities]] course exists to teach. Assess the interpretive decisions and their evidential justification, and use a short conference question such as "Why did you read this passage this way rather than the alternative you rejected?" Guessing whether a sentence looks machine-written is a weaker measure, as [[ai-detection|AI detection]] explains.

### STEM courses and lab reports

A qualification first: this knowledge base holds much stronger evidence about AI-supported academic writing generally than about laboratory-report writing in particular. Hands-on and laboratory [[pedagogy]] remain under-covered, including in the [[engineering-education|engineering education]] literature, so what follows applies writing, offloading, validity, and engineering findings to a setting those studies did not test.

Draw the boundary around scientific reasoning rather than prose as a whole. Students stay responsible for observations, raw data, calculations, uncertainty, figures, analysis choices, results, and claim-evidence reasoning. Once those exist, AI can reasonably help with organization, readability, transitions, and disciplinary conventions, which is the same surface-and-reasoning split as [[layer-sensitive-cognitive-offloading-writing-2026|Chen's study]].

A report package for an AI-era lab course carries the report plus selected raw data, calculations or notebook output, a figure with a student-written interpretation, and a brief statement of how the central conclusion follows from the evidence. For high-stakes reports, ask one or two individualized follow-up questions about a graph, an anomalous result, a [[research-methods-aied|methodological]] choice, or a limitation. Do not let writing fluency stand in for conceptual understanding: automated [[physics-education|physics]] scoring can underestimate conceptual understanding when linguistic expression is weaker, and that falls hardest on [[multilingual-learning|multilingual students]] ([[automated-essay-scoring|Automated Essay Scoring]]). If reasoning and writing are both objectives, score them separately.

### Engineering courses

Professional accountability changes the wording. A review of [[ethical-use-ai-engineering-education-review-2026|99 empirical engineering-education studies]] identified transparency, [[human-in-the-loop-ai|human oversight]], student independence, privacy, authorship, fairness, and beneficence as recurring [[ethics|ethical]] concerns, and argued that AI ethics belongs in professional formation rather than in rule compliance alone. In a lab or design report, ask students to disclose assistance and to certify that they have verified the calculations, sources, assumptions, and safety-relevant claims.

## Keep one sample the tool never touches

Assisted performance is not independent capability, and you need at least one reading of the second. Occasional withdrawal conditions are enough: brief no-AI writing, in-class interpretation, an oral explanation, a conference, spontaneous revision, or a follow-up problem that transfers the same reasoning to a new case. This matters most when the final paper carries substantial grade weight. It does not mean proctoring every assignment. A few placed samples give you and the student a baseline for interpreting the assisted work, which is the writing-specific case of the argument in [[redesign-assessment-ai-era]].

Read the two pieces side by side and ask whether the reasoning in the assisted one is also visible in the unassisted one. Where it is, the essay is doing its job as evidence. Where it is not, the assisted grade is measuring what the tool supplied. That comparison is also what you have to show a student who contests a mark, because it points at a specific piece of thinking rather than at an impression about the prose.

## Decide what AI is allowed to grade

Two results that look contradictory are compatible. Carefully calibrated systems with detailed rubrics and examples can score particular tasks well, and out-of-the-box [[llm|LLM]] grading diverges substantially from human judgment. [[llms-do-not-grade-essays-like-humans-2026|Mathew et al.]] found weak human-LLM agreement that varies systematically with essay quality: models over-reward short, superficially readable essays, under-reward longer and stronger essays with minor surface errors, and cluster toward the middle of the scale. That pattern supports AI for low-stakes [[formative-assessment|formative]] feedback, comment drafting, and triage far more than for autonomous [[summative-assessment|summative]] grading ([[automated-essay-scoring|Automated Essay Scoring]]).

Students draw a similar line themselves. In an undergraduate technical communication course where [[generative-ai|ChatGPT]] scored handwritten writing and students were told so, all 13 participants found the feedback clear and useful for surface-level revision. Most separated feedback utility from evaluative authority: they accepted the critique and insisted the instructor decide the grade ([[student-perspectives-ai-writing-grading-2026]]). Design [[human-in-the-loop-ai|human oversight]] as the point where AI output becomes a grade, rather than as a courtesy offered when convenient.

## Judge the evidence before you rewrite the syllabus

The case for these designs is promising and not yet strong enough to justify one universal AI-writing policy. Some of the best evidence comes from substantial classroom studies such as [[pairr-ai-peer-review-2025|PAIRR]] with its 654 students. Much of the rest rests on quasi-experiments, small experimental samples, conceptual analyses, and 2025-2026 work that is still new: [[layer-sensitive-cognitive-offloading-writing-2026|Chen's bounded-writing study]] had 168 students but only six intact classes, the [[ai-writing-support-stage-ownership-2026|ownership study]] used a short experimental writing task, and a study reporting immediate quality gains after ChatGPT practice involved only 21 first-year international students and did not establish long-term [[transfer-of-learning|transfer]] ([[chatgpt-academic-writing-quality-ownership-2026]]). What the [[ai-education|AI in Education]] knowledge base supports is a set of design principles, and the most reliable cross-study finding in it is to preserve student [[agency]], [[evaluative-judgment|evaluative judgment]], independent competence, disciplinary reasoning, and human feedback while using AI to widen access to critique, practice, revision support, and linguistic assistance.

That mix has a practical consequence. Change one assignment, keep the artifact, and compare the next cohort against this one on the same measure. A rule you can revise after one term is worth more than a policy you cannot test, and the small studies above will not tell you what happens in your course.

## What instructors get wrong about this

**A detector will settle whether the writing is the student's.** It will not. In a covert field study, 94% of AI-generated exam submissions went undetected and outscored real students, and a controlled study found detectors flagged compliant light AI editing at 38-80% while missing more than 96% of humanized rewrites ([[teichmann-detecting-undetectable-misconduct-2026]]; [[karr-ai-detection-humanization-2026]]). Detection answers a detection question, and [[assessment-validity|validity]] is a different question.

**A course-level policy is clearer than a per-assignment rule.** The Nash and Burriss policies were course-level documents, and 22 of 27 permitted brainstorming, 22 restricted or muddied composing, and 22 were silent on reading. One document covering everything tends to be specific about the step the instructor worries about and vague about the rest.

**Better prose means the writing instruction worked.** The ownership study found better essay quality and lower ownership in the same submission, and Chen's open collaboration condition produced the strongest assisted writing with the weakest later independent performance. Prose quality is a product measure. What the course is for is a capability measure.

**Unlimited access plus a good prompt is enough.** Students who treat AI feedback as authoritative gain less from it than students with developed feedback literacy. Access to critique and the capacity to use critique are separate assets.

**Banning AI protects the writing process.** A ban answers a question that differs by step, and it creates barriers for multilingual writers who need language support that has nothing to do with authorship. A workable split runs between expression and intellectual responsibility.

## What will come back at you

**"I do not have time to read another artifact."** Then make the artifact small: four columns of decision table, or five minutes of in-class writing as the independent sample. The corpus reports no marking-time data for these designs, so the workload case has to be tested on one assignment rather than assumed from this page.

**"My students will use AI whatever the rule says."** They will, and the design question is which response your assignment makes easiest. A declaration that costs nothing and a rubric that pays for process make disclosure the cheaper path. That mechanism comes from modeling rather than from a trial of a disclosure policy, so treat the prediction as reasonable and unconfirmed.

**"A ban is simpler, and it protects the process."** Simpler, yes. The policies above show how a single course-level rule drifts into silence on the steps that matter, and blanket language restrictions fall on students who need them most.

**"Peer review is redundant now that AI responds in seconds."** Fifty-eight percent of PAIRR students preferred the combination and 6% preferred AI alone, and the reason they gave was the contextual and audience knowledge peers supplied. That measures experience, so it carries less far than a learning-gain result would.

**"The model grades this task as well as I do."** Calibrated systems with detailed rubrics and worked examples can score particular tasks well. Generic grading does not, and Mathew et al. show the disagreement follows essay quality rather than scattering randomly, which is the harder kind of error to notice. Test the tool on your own marked set before it touches a grade.

**"This penalizes students whose academic English is weaker."** It can, if the rule treats expression and authorship as one thing. Separate them, and audit the AI feedback for the pattern Tan et al. found, where identical writing drew more praise and less substantive critique once demographic or educational attributes were in the prompt. The corpus documents that bias. It does not report a tested fix, so your own comparison is the check.

## What to do this week

**1.** Write the capability sentence for your next major assignment and put it on the sheet.

**2.** Add one line requiring the student's claim, interpretation, or rough draft before any AI use, and say what you will collect.

**3.** Mark each step of that assignment as construct-bearing or not, and rewrite the AI rule so it allows the tool where the step is not graded.

**4.** Add a four-column feedback decision table to the rubric, with points attached.

**5.** Schedule one short piece of writing that no tool touches, and decide now which assignment it belongs to.

## Where to go next

The assessment side of this argument, including the design of authenticated steps, is in [[redesign-assessment-ai-era]]. For the policy document students actually read, see [[course-ai-policy]], and for the feedback tools themselves, [[ai-feedback-quality]]. [[verify-ai-output]] covers what students should be checking when the model supplies a claim or a source, and the concept page [[coach-not-crutch-ai-writing]] states the boundary this page keeps returning to.
