---
title: "What Are Best Practices for Developing an Effective AI Tutor?"
created: "2026-08-29T20:36:43-04:00"
updated: "2026-10-28T11:21:07-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

Your tutor is three weeks from a pilot. The chat works, the model explains a derivative cleanly, and the internal demo got applause. Then someone from the teaching center asks the question your spec has no field for: after a term with this thing, will students solve a problem when it is not in the room? What you have is a feature list. What you do not have is one sentence saying what the learner must be able to do alone at the end.

A tutor is a policy wrapped around a [[conversational-ai|chatbot]], and the policy decides whether learning happens. Name the cognitive work the learner has to do, make the system require it (an attempt before help, a hint ladder that fades, a check the model cannot fake), and evaluate with the tutor switched off. Model quality sets how good the conversation feels. The policy decides what the student can do in June.

## The short version

**1.** Write the objective as a claim about unaided performance, then derive every feature from it. If a feature cannot be traced to that sentence, it is a demo feature.

**2.** Build the learner model from evidence you can log, and store each diagnosis as a hypothesis with a confidence value rather than a fact.

**3.** Fix the help ladder in code, with named rungs, and make the interface charge the learner something for each step down it.

**4.** Ground content in your own materials and hand arithmetic, algebra and code checking to deterministic tools that cannot hallucinate.

**5.** Test teaching failures across whole conversations: answer leakage, sycophancy, misconception reinforcement, instructional drift.

**6.** Measure with a withdrawal phase and a delayed test, not a satisfaction score.

## Write the objective as a claim about unaided performance

Three lists, written before anyone picks a model:

- What learners should know or be able to do afterward.
- What cognitive work they must perform themselves.
- What the tutor may do for them.

The [[intelligent-tutoring]] literature makes the point that effectiveness depends on [[pedagogy|pedagogical]] design rather than model capability alone, and the failure is easy to build by accident. A tutor optimized for "finish the problem" will undermine a tutor optimized for "learn to solve the problem" while passing every functional test you write, because both produce correct final answers. The difference lives in what the student did between the question and the answer.

The second list is where development teams get concrete. Take a mastery label like "derivative mastery" and refuse to let it mean producing the correct derivative. Break it into recognizing when a derivative is appropriate, interpreting it as an instantaneous rate of change, selecting the rule, carrying out the procedure, explaining why the choice was right, checking reasonableness, and applying it to an unfamiliar problem. Each of those is a separate thing to log, and each implies a different response when it is missing. This decomposition is also the defense against the [[correct-answer-trap-misconceptions|correct-answer trap]], where a learner reaches the right answer through faulty reasoning and your analytics record a success. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] and [[zhang-tutormoments-2026|When Help is Unhelpful]] both describe versions of that failure in production.

## Build the learner model before the conversation

The learner model holds two kinds of state: per-concept estimates (limit: developing, power rule: mastered, product rule: developing, chain rule: not demonstrated) and misconception hypotheses with the evidence and confidence behind each. Keep them separate. The concept estimate is what drives difficulty selection. The hypothesis is what drives the next question.

Be careful about letting an [[llm]] do the diagnosis on its own. [[benchmark|Benchmarking]] found that LLM tutors could recognize clearly correct reasoning while sometimes rejecting valid alternatives or accepting incorrect reasoning. A model that spots the good case and misreads the ambiguous one fails precisely the students who need the help. For consequential domains, the architecture that survives is **structured diagnosis plus flexible LLM dialogue**, the arrangement [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]] describes: your own detector establishes what the student probably did, and the model writes the conversation around that finding.

Give the diagnosis an explicit sequence the model cannot skip: detect, verify, respond. The model may propose a [[misconceptions|misconception]] as a hypothesis, then must verify it against the student's actual work or a targeted question before the tutor responds to it. Without that step, the system invents evidence and then tutors the student for a mistake they did not make, which is both useless and slightly insulting.

Evidence worth logging, in rough order of usefulness: recent attempts with their intermediate steps, demonstrated knowledge by concept, help-seeking behavior (which is itself a signal about confidence), and self-reported confidence where you collect it. Adapt difficulty and assistance from that record, and treat the learner's latest prompt as one input to it. A single prompt is a bad estimator of what a student knows, and a tutor that reacts to it will thrash.

## Fix the help ladder, then make the interface charge for it

Write the rungs down before you write a prompt, because the ladder is a product decision with named states, and a tone setting cannot express it. A workable sequence:

1. Independent attempt.
2. Metacognitive question about what the student has tried.
3. Conceptual cue.
4. Identify the relevant rule.
5. Set up part of the problem.
6. Worked intermediate step.
7. Worked solution.
8. Student explains the solution.
9. Student solves a comparable problem unaided.

Support fades as competence increases, which is the mechanism at the center of [[scaffolding]]. Seeing a worked solution does not demonstrate mastery, so any session that reaches rung seven owes you rung nine before it counts as complete.

The causal evidence for building the ladder at all comes from a field experiment in which an unguarded GPT interface increased assisted mathematics performance and reduced subsequent unassisted exam performance. A hint-giving tutor largely removed that learning penalty ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). The constraint is architectural. The same model, given different help behavior, produced opposite results on the measure that matters.

A larger randomized field experiment with more than 6,000 middle-school students on a mastery-based practice platform shows what the ladder looks like in the logs. Students assigned to AI support progressed more slowly and attempted fewer questions, and they answered more accurately. The clearest mechanism was next-attempt correctness after a mistake: fewer attempts were needed to return to a correct answer. That pattern is a productive slowdown, and it is the signature a hint ladder is supposed to leave ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

The same study supplies a warning about your own dashboards. Requiring three correct answers in a row sharply raised platform-defined mastery without producing detectable gains on a delayed test a week later. The strongest delayed-test evidence appeared only where the AI sat inside the mastery workflow (coefficient 0.085), not where it was available as standalone access. If your success metric is a streak counter, you will ship a system that optimizes the streak.

Interface friction belongs in the same design pass. Unlimited hints behind a visible button turn the whole ladder into a shortcut, and premature hint requests with superficial reading are associated with lower [[learning-gains]]. Replacing `[Hint][Hint][Hint][Show Answer]` with the questions "what have you tried?" and "what part is blocking you?" (choosing a rule, setting up the equation, doing the algebra, understanding the concept) costs one screen and routes the student to the rung they actually need. It also gives you the log data that tells you which rung they habitually skip.

## Hand the checkable parts to a checker

Ground generation in instructor-approved material: textbook sections, course notes, worked examples, terminology, approved methods, notation, assignment rules, policies, and [[curriculum-design|curricular]] resources. Retrieval-augmented generation against that corpus reduces [[hallucination-risk|hallucination risk]] and does not eliminate it, as [[rag]] sets out. Expose citations or provenance in the interface where a student might check a claim, because the citation is what makes the grounding auditable after the fact.

Grounding also does a job that accuracy metrics miss. A course has approved methods, and a tutor that introduces a mathematically valid technique the course does not use has taught the student something they will be marked down for. Retrieval from the course layer is how the tutor stays inside the method set.

For domains with formally checkable answers, add deterministic tools: calculators, symbolic mathematics systems, code execution, knowledge graphs, rule-based validators, and [[discipline-specific-aied|domain-specific]] solvers. The division of labor is the important part. The LLM handles explanation and dialogue. The symbolic engine verifies algebraic equivalence, derivatives, integrals, equation solutions, critical points and numerical approximations. A wrong intermediate step that the verifier catches becomes a tutoring moment. A wrong intermediate step that nothing catches becomes a misconception the student carries into the exam.

## Require the learner to act on the feedback

Feedback that says "Correct," "Incorrect," or "Good job" is a scoring event wearing the interface of teaching. The knowledge base treats [[feedback]] as a provision-uptake loop: feedback supports learning when students understand it and act on it, and the second half is the half that systems usually skip. Build the tutor to name the reasoning step involved, say what needs reconsideration, give one concrete next action, and ask the learner to predict or explain before the feedback is revealed.

The sequence that carries this is learner first, AI second, learner again. The student generates, chooses, justifies, evaluates or reflects; the tutor responds; the student does something with the response. Design the turn structure so this is not optional. A system where the model can produce three paragraphs in response to one question teaches the student to ask and read.

The long-term goal is internalization. Learners should end up running the tutor's questioning and [[problem-solving]] strategies themselves, which is the [[agency]] argument and the reason the ladder has a top rung where the tutor is silent.

## Design for what happens in turn forty

Pedagogical safety is a separate test suite from ordinary chatbot safety, and most teams ship with only the second one. Toxicity and jailbreak resistance tell you nothing about whether the tutor will hand over an answer to a student who asks twice, agree with a wrong method because the student sounded confident, drift out of the course's method set over a long session, or push a learner into [[cognitive-offloading|cognitive offloading]]. [[ai-sycophancy|Sycophancy]] is the one that gets through first, because agreement reads as kindness and your preference data rewards it.

Test for answer leakage, misconception reinforcement, excessive agreement, inappropriate difficulty, offloading, biased treatment, loss of learner agency, instructional drift, and overconfidence in incorrect explanations. Run the tests on extended conversations, not single turns, because pedagogical failures accumulate: the first ten turns can be exemplary and the eleventh can undo the session. A tutor should be kind and correct at once, including when the learner insists on a misconception. [[pedagogical-safety]] and [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] lay out the failure taxonomy.

## Put the data architecture in the same design doc

Collect only learner data that is pedagogically necessary, and be able to say why each field exists. Where you keep persistent memory or a [[student-modeling|learner model]], make its purpose visible to the learner, give them appropriate control over it, protect sensitive information, define retention, and route consequential decisions to an instructor or another [[human-in-the-loop-ai|human]] checkpoint. A learner model that quietly accumulates a confidence estimate a student never sees is a data protection problem and a pedagogical one.

Audit behavior across language backgrounds, ability levels, cultural contexts, [[accessibility]] needs, and levels of [[prior-knowledge|prior knowledge]] and AI experience. Differential performance on the same objective is a bug with a student attached to it, and it will not appear in your aggregate accuracy number.

One accessibility decision deserves its own line: do not make sophisticated [[prompt-engineering|prompting]] a prerequisite for good instruction. If the tutor teaches well only when a student writes a careful prompt, you have built a system that advantages students who already know how to talk to models. The tutor should help learners formulate productive questions, which is also a [[metacognition]] skill worth having.

## Instrument the withdrawal interval

Session metrics will not tell you whether the thing works. Response accuracy, conversation length, student preference, satisfaction, task completion and [[student-engagement|engagement]] all rise for systems that teach nothing, because students like help and help is easy to measure. Evaluate unassisted performance, delayed retention, transfer to new problems, misconception correction, learner independence, feedback uptake, and [[differential-effects-across-learner-groups|differential effects across learner groups]]. [[ai-ed-evaluation]] has the methods, and [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] makes the case that behavior is the construct.

Two studies sharpen the rule against [[self-report-measures|self-report]] and short horizons. A pilot with 38 novice programming students found a strong association between [[generative-ai|generative AI]] usage and *perceived* learning (rs=0.802, p<0.001), while the indicators of autonomous progress without instructor support scored lowest. The authors name the gap an illusion of competence and epistemic debt, and it is precisely the gap a satisfaction metric rewards ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

More fundamentally, most evaluation stops at the moment assistance ends. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] names the unmeasured post-withdrawal interval and formalizes four outcomes: elastic rebound, partial plateau, latent scaffold, and over-recovery. Its washout curve carries a recovery time constant, a recovery completeness term, and a hysteresis index comparing relearning effort to original effort. Since reversibility determines severity, the framework argues that scheduled unassisted practice should be dosed to the recovery curve rather than debated as a matter of principle. Your evaluation plan needs a withdrawal phase as well as an immediate post-test, and [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|the randomized evidence that brief assistance depresses later unassisted performance]] is the reason to schedule it early.

## Give teachers something to edit

Before deployment, have educators test realistic learner profiles, common misconceptions, edge cases, adversarial prompts, ambiguous responses, and long tutoring conversations. Log the pedagogical failures and feed them back into system prompts, tutoring policies, knowledge sources, [[guardrails]], learner-model rules and model selection. A fluent response can still be pedagogically wrong, and a teacher is the only reviewer who can see that.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee's systematic review of 29 K-12 studies]] describes what that oversight consists of and where it breaks. [[teacher-role|Teacher]] intervention is a repeating four-phase cycle of monitoring, judgment, intervention and orchestration. AI alerts, [[visualization|dashboards]] and automated scores "do not automatically lead to pedagogical action." The strongest teacher strategy the review finds is pedagogical translation: selecting, revising, supplementing, summarizing or deleting chatbot feedback rather than passing it through.

Two design warnings follow, and both contradict the usual roadmap. More AI information is not better: systems that continuously emit diagnostics overloaded teachers and pulled attention away from their own observation. Prioritize what is worth acting on, make it interpretable, and offer recommendations in a form a teacher can accept, modify, defer or reject. More teacher support is not better either: delaying intervention so students can work independently is itself expertise. Structural conditions, meaning time to review data, class size, and the ability to physically reach the groups that need help, are part of the intervention rather than background logistics. A dashboard built for a teacher with no free period does not get opened.

## Case one: a calculus tutor, where verification is cheap

A first-semester college calculus tutor should raise what students can solve and explain independently after it is removed, not maximize correctly completed problems. Math tutoring is especially vulnerable to over-scaffolding, premature hint use, and incorrect diagnosis of student reasoning, and all three are visible in your logs if you look ([[math-education]]).

**Grounding and verification.** A six-layer build: course materials and instructor policies, then a retrieval layer, then a problem engine and learner model alongside a symbolic verifier and diagnostic engine, then a pedagogical policy layer, then conversational generation, then the student, then back into the learner model. The verifier is the reason this design is tractable. It decides whether an expression is equivalent, a derivative correct, an integral evaluated, a critical point found, and it does so without asking the model's opinion.

**One interaction.** For differentiating $f(x)=(x^2+1)\sin x$, a conventional chatbot reveals the answer. A learning-oriented tutor reasons internally that the student differentiated both components but multiplied the results, a possible product-rule-as-$f'g'$ [[misconceptions|misconception]], and asks a diagnostic question first: what rule applies when two functions are multiplied? Then the student writes the product rule symbolically, sets up $u$ and $v$, and only after that does the tutor verify the final expression. Notice how much of the tutoring happened before any model prose reached the student.

**Multiple representations.** Connect symbolic procedures to the formula, the graph, the table, a verbal interpretation, and a physical rate-of-change context. Procedural fluency and conceptual understanding look identical on a correct answer sheet and diverge on the transfer problem.

**The dashboard.** Expose aggregated evidence in place of opaque judgments: "product rule, 62% demonstrated mastery; common patterns, 18% omit one term, 11% multiply derivatives." Individual diagnoses go out as hypotheses with their supporting evidence, which is also what makes them reviewable by a teacher ([[explainable-ai|explainability]] matters more to the teacher than to the student here).

**The evaluation plan.** Performance with the tutor, performance on comparable problems without it, delayed retention, transfer to unfamiliar problems, quality of conceptual explanation, misconception correction, appropriate against premature [[help-seeking|help seeking]], answer leakage, diagnostic false-positive and false-negative rates, and differential outcomes. The comparison that decides the project is assisted against later unassisted. A student who moves from 60% to 95% with the tutor and stays at 60% alone has not been tutored.

## Case two: a writing coach, where the stage decides the permission

Writing has no single correct answer, so verification is judgment and the design work moves to staging. The knowledge base frames writing as a cognitive, social and rhetorical process, which means an AI writing system can support learning and can also eliminate exactly the thinking the assignment existed to develop ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**A capability model.** Track argument (thesis specificity, claim-evidence alignment, counterargument), organization (paragraph focus, logical progression, transitions), evidence (source relevance, integration, interpretation), revision (global and sentence-level revision, feedback evaluation) and style (clarity, grammar, voice). Each becomes a separate signal in the learner model, which is what makes targeted feedback possible at all.

**Ground the coach in the assignment.** Retrieve the instructions, the instructor's rubric, course readings, citation requirements, genre conventions, instructor examples, and the AI-use policy, so feedback can say "your instructor's rubric asks you to connect every major claim to evidence from at least two course readings" instead of inventing generic expectations. Generic advice is the default failure of an ungrounded writing tool, and students can tell within two sessions.

**Set permissions per stage.** AI involvement at different stages affects perceived ownership differently. Planning support reduces ownership less than drafting support, and AI-generated drafting produces the largest decrease ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). That finding converts directly into a permission table. At planning, the coach asks questions, compares positions, challenges assumptions and critiques outlines, and does not generate the argument. At drafting, the learner produces prose first and the coach develops rather than takes over. At revision, the coach diagnoses and stops there: unclear claims, missing evidence, evidence that does not support the claim, organizational problems, the draft against the rubric. At editing, after revision, it handles grammar, punctuation, concision and citation formatting.

**A worked interaction.** For an essay on requiring [[online-teaching-and-learning|online courses]], a generic system rewrites the student's paragraph into polished prose and does the intellectual work. A coach says what is working, names the main issue (the paragraph gives reasons but never explains why they justify a university-wide mandate), poses a revision question, and asks the student to finish a sentence in their own words. The argument stays where it belongs.

**Prioritized feedback.** One strength to preserve, one high-impact issue, one question that requires writer judgment, one concrete revision goal. Not forty comments. A student who receives forty comments triages them by length, and the triage has nothing to do with what matters.

**Make the student judge the feedback.** [[feedback-literacy|Feedback literacy]] is a learning objective in its own right. Ask periodically whether the learner agrees with a suggestion and why, and let them reject it. The output is [[evaluative-judgment|evaluative judgment]] rather than compliance, and it is also the only defense against a coach that is confidently wrong.

**Preserve voice.** Distinguish errors, clarity problems, rhetorical choices and style preferences, and leave the last two alone. A coach that "corrects" rhetorical choices homogenizes writing toward whatever style the model prefers, and it does the most damage to [[multilingual-learning|multilingual]] writers and non-standard rhetorical traditions ([[ai-feedback-quality|AI feedback quality]] is the general version of this problem).

**Learn from the revisions.** Store the revision history rather than only final essays. A repeated "evidence introduced but not interpreted" pattern that improves across three essays is the most useful signal a writing system can have, and it is free.

**Evaluation.** Quality of AI-assisted and later unassisted writing, ability to find weaknesses in unfamiliar writing, revision quality, feedback uptake, ability to explain revisions, ownership, dependence on AI prose, preservation of voice, bias across dialects and multilingual writers, alignment with instructor judgment, and delayed transfer. The design that answers it has three arms: writing independently, AI generating the text, and a coach. All three groups then write a new essay without AI. If the AI-generated group wins in practice and loses without it, the system improved performance rather than learning. Class-level patterns from the dashboard (41% need support on claim-evidence connection) are a [[formative-assessment|formative assessment]] signal for the instructor.

## Comparing the two builds

| Design question | Calculus tutor | Writing coach |
|---|---|---|
| Primary learning object | Mathematical concepts and problem solving | Argumentation and writing process |
| Verification | Often objectively checkable | Usually requires contextual judgment |
| Deterministic tools | Symbolic math engine, calculator | Grammar, citation, rubric checks |
| Main AI role | Diagnose and scaffold reasoning | Diagnose and scaffold revision |
| Major risk | Giving away the solution | Writing the text for the learner |
| Learner action that matters | Solve and explain | Draft, evaluate, and revise |
| Learner model | Concepts, procedures, misconceptions | Argument, evidence, organization, revision |
| Key guardrail | Attempt before solution | Student prose before AI rewriting |
| Transfer test | New no-AI calculus problems | New no-AI writing task |
| Success criterion | Independent mathematical reasoning | Independent writing and evaluative judgment |

Both systems use the same set of [[ai-technologies|AI technologies]] and embody different pedagogical policies, because the disciplines require different kinds of thinking. The rule that generalizes is to identify the cognitive activity that produces the learning and design the AI to support that activity without performing it. That rule outranks any particular model, prompt, agent framework or interface.

## What development teams get wrong

The pedagogy lives in the system prompt, so a careful prompt is a pedagogical design. A prompt is one layer of a policy that also includes which evidence you collect, which rung the interface offers, what the verifier checks, and what the dashboard shows. A well-written prompt on top of a learner model that stores nothing will produce a fluent tutor with no memory of the student, and the ladder will restart every session.

A better model will fix the diagnosis. The benchmarking result above found LLM tutors recognizing correct reasoning while rejecting valid alternatives and accepting incorrect ones, which is a pattern of error that scale does not obviously repair. Structured diagnosis exists because the model's judgment is the part you cannot audit.

Satisfaction and completion prove the design works. They prove students got help. The pilot with 38 programming students found perceived learning strongly associated with usage while autonomous progress scored lowest, and the mastery study found a streak requirement raising platform mastery with no delayed-test gain. Build the withdrawal measure into the pilot or you will learn the wrong lesson efficiently.

Retrieval makes the answers trustworthy. It reduces [[hallucination-risk|hallucination risk]] and leaves the rest of the failure surface intact: a retrieved passage can be misread, a valid technique can be wrong for the course, and the model can still be confidently wrong about a step it derived itself. Retrieval is a floor.

Passing the safety suite means it is safe for students. Ordinary safety testing covers toxicity and jailbreaks. The pedagogical failures that matter here, answer leakage and sycophancy and drift, are invisible to it, and they accumulate over a conversation rather than appearing in a single turn.

Engagement is the goal. Conversation length and session count are the cheapest metrics to instrument, which is why they get promoted to goals. The [[scaffolding]] argument says the ideal session gets shorter as the student improves, so a rise in engagement is as likely to be a symptom.

## What will come back at you

**"We ship in six weeks and this is a quarter of work."** Most of the architecture is cheap. An attempt gate, a configured ladder, retrieval over notes you already have, and a log schema with a withdrawal field are days of work. The expensive items (learner model, verifier, dashboard) can start behind a feature flag for one course, and the pilot is more informative with the cheap parts done.

**"Students love it and completion is up."** Both facts are consistent with a system that answers questions well and teaches nothing. The 6,000-student study found slower progress and fewer attempted questions alongside better accuracy, so a drop in completion is not automatically bad news either. Report unassisted performance next to the engagement numbers and let the two disagree in public.

**"We cannot run a randomized trial."** You can run a within-student comparison without one: the same objective, assisted during the unit, tested unassisted two weeks later, with the assisted score reported beside it. That design answers the product question and needs no control arm. What it cannot tell you is the counterfactual for students who never used the tutor.

**"The model is a vendor API, so the help behavior is out of our hands."** The rungs live in your orchestration layer, and the guardrail experiment's result came from changing what the tutor was allowed to say, not from swapping models. Expect the vendor's post-training to pull toward answering promptly, because helpfulness is what it was tuned for, and put the restraint in your own code.

**"Teachers will not use another dashboard."** They will not use one that emits continuous diagnostics, which the K-12 review found pulled attention away from their own observation. Give them a small number of interpretable signals, a way to accept or reject each recommendation, and time in the week to look at them.

**"We do not have discipline experts on staff."** Then the tutor will teach generic method and the course's notation will drift within a term. A subject expert for two days at design time, writing the misconception list and the approved-method list, is the cheapest line item in the project and the one teams cut first.

## What to do this week

**1.** Write the unaided-performance sentence for the pilot and put it in the spec, above the feature list.

**2.** Add an attempt gate and log it. Record whether the student attempted before the first hint, and which rung they reached.

**3.** Replace the hint button with the blocking-point question, and log the answer as a category.

**4.** Schedule one unassisted check two weeks after the unit and put it on the calendar with an owner.

**5.** Book two days with a subject teacher to write the misconception list and the approved-method list.

## Where to go next

[[designing-educational-ai-software]] covers the software-level rules a tutor has to satisfy, and [[designing-ai-into-learning]] covers where the tutor sits in a course sequence. [[evaluating-ai-interventions-methods]] and [[checking-whether-educational-ai-works]] handle whether the thing works. If your problem is that the model answers too readily, [[making-ai-better-at-supporting-learning]] and [[training-ai-tutors-to-guide-rather-than-answer]] work through the training side of the same question.
