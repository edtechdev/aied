---
title: "How Can AI Help Me Give Better Feedback at Scale?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-28T11:29:19-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

It is week six. You have a stack of drafts, a rubric you believe in, and a growing suspicion that a third of your comments get skimmed and forgotten. A colleague mentions that a tool now comments on every draft within the hour. The department meeting needs an answer: is this an upgrade, or a faster way to produce text nobody reads?

Short answer to give a colleague: AI feedback earns its place on coverage, timeliness and consistency, inside a narrow band. Copy-editing-scale language work and rubric-guided first-pass comments are worth automating. Reach is the cheap part. In a cluster-randomized experiment with 1,176 first-year undergraduates, reflective and hybrid designs beat direct AI critique on delayed, AI-free [[transfer-of-learning|transfer]]. In a randomized essay experiment with 70 students, better-rated AI feedback produced no better revisions than an experienced teacher's. What a student does with a comment decides the outcome, and [[feedback-literacy|feedback literacy]] separates the students who gain from the ones who copy.

## The short version

**1.** Decide what counts as a win before you pilot anything: revision quality and delayed unaided performance, not the fluency of the comments.

**2.** Sort your own comments into language-level fixes and judgment-level calls. Only the first category is a candidate for automation.

**3.** Stage the sources. Self-evaluation first, peer feedback second, AI critique third. Two sources placed side by side produce passive uptake.

**4.** Hand the model your rubric and make it reason step by step. A bare instruction produces generic output.

**5.** Keep the final message, the tone and anything that becomes a record with a human.

**6.** Budget the hours you will spend on deletion and calibration, and compare them with the hours you freed.

## Decide what counts as a win before you pilot anything

The tempting metric is the quality of what the model writes. It is also the metric that misleads.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomized 70 students writing argumentative essays in Persian into three groups. Chain-of-thought prompting produced significantly higher-rated feedback (M = 12.90) than zero-shot prompting (M = 11.25, p = .01) and than an experienced human teacher (M = 11.20, p = .008). The chain-of-thought group did not revise its essays significantly more than the teacher-feedback group, which achieved comparable gains. Better comments, the same revisions. If your success criterion is comment quality, that study reads as a win. If it is what changed in the essay, it does not.

Two other signals flatter a pilot that is going badly, so fix them in advance. Student satisfaction is one. In the university-wide Deakin pilot reported by [[tubino-adachi-ai-automated-feedback-literacy|Tubino and Adachi (2022)]], positive average ratings coexisted with student-flagged errors, so a smiley-face survey is not accuracy evidence. Usage is the other. The Deakin tool was optional, and usage averaged roughly 13% of undergraduates and 12% of postgraduates despite almost 4,000 students having access. Proactive, high-achieving students used it more. That is what making a tool available buys you.

The outcome measure that holds up is revision quality plus delayed performance without AI. Multiple same-day resubmissions are a usable trace of whether a student engaged at all. They are not evidence that anything was learned.

## Sort your comments before you automate them

Take your last set of comments and split them in two: fixes to sentences, and calls about thinking. The split tells you what to automate, and it is narrower than vendors imply.

The Deakin pilot ran in 2021 using FeedbackFruits' AI automated feedback tool across 29 units and almost 4,000 students. It works on micro-level text features: sentence length, punctuation, grammar, text structure. That supports the copy-editing stage, where the instructor sets the parameters, the student uses the tool independently, and the feedback arrives in time to be actionable. The division of labor is what scales, not the model.

Judgment-level comments are where the failure modes live. [[learner-centered-feedback-ai|Aldino et al. (2026)]] collected instructor-side problems from 21 higher-education teachers: inconsistent tone (n = 7), potential misinformation (n = 5) and trust issues (n = 5). Their revision effort went into deleting exaggerated praise and generic suggestions rather than adding content. That list is your review job, and it is where the hours go.

## Stage the sources instead of stacking them

The strongest design evidence comes from a multisite, cluster-randomized, longitudinal field experiment: 1,176 first-year undergraduates in 48 sections across 4 universities and 3 [[stem-education|science]] domains, randomized at section level into peer-only, direct GenAI, reflective GenAI and hybrid conditions ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

The reflective condition required self-evaluation before AI critique. The hybrid ran self-evaluation, then peer feedback, then GenAI critique. Hybrid produced the highest argument-quality gains and the clearest advantage on conceptual learning. Reflective and hybrid both produced stronger feedback uptake and more [[self-regulated-learning|self-regulated learning]] than direct GenAI, and both outperformed it on delayed, AI-free transfer. Direct GenAI did raise immediate argument quality above peer feedback, which is the advantage it has, and it did so with weaker transfer.

The mechanism explains why sequencing matters more than the tool. Direct critique invites passive uptake: the student reads a verdict and applies it. Reflective and hybrid designs force the student to interpret the comment, compare it against criteria, judge its relevance and then revise. Educational value depends less on AI access than on whether the feedback environment preserves [[agency|learner agency]] and [[evaluative-judgment|evaluative judgment]] during revision.

Peer feedback earns its own place in the sequence. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen and Yan (2026)]] ran two parallel English classes (N = 118 first-year undergraduates in China; GenAI n = 56, peer n = 62) through three self-assessment cycles over one semester. GenAI scaffolding improved feedback literacy slightly but significantly over human peer review (ANCOVA p = 0.049, ηp² = 0.03). GenAI students refined prompts iteratively and verified or challenged inaccurate output. Peer-group students chose sources by social convenience and had their evaluative judgment distorted by friendship bias. Peer review kept a distinct value for audience awareness, which is why the authors propose multi-stage designs with anonymous peer feedback rather than a replacement.

Gu et al.'s advantage was small, and they read it as real but not transformative on its own. Teacher scaffolding, prompt guidelines and worksheets did the supporting work.

## Give the model a rubric, then make it show its steps

Rubric-referenced generation is the automatable part.

Farrokhnia et al.'s quality gain came from a chain-of-thought prompt that walked the model through a step-by-step evaluation against an argumentation rubric, not from a bare instruction to give feedback. Gu et al. gave their GenAI group ChatGPT-4o with pre-trained rubrics and prompt guidelines, which is what made the output checkable against stated criteria. In both cases, the prompt is where your criteria enter the system, and the reasoning trace is what lets you see whether the model applied them.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson and Yan (2025)]] make prompt quality the hinge of the whole process. Vague prompts yield generic, useless output, and generated comments can be hallucinated, biased or overlapping, which pushes evaluative judgment back onto the reader. Calibration is sharper still. In Farrokhnia et al., GenAI feedback quality was significantly associated with the strength of a student's initial draft, while teacher feedback quality was not. The teacher calibrated more consistently. Volume scales. Calibration does not.

## Keep the last word and the record human

[[becerra-aicofe-feedback-2026|Becerra, Palma and Cobos (2026)]] describe AICoFE, which runs three independently fine-tuned models (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) over rubric scores and qualitative observations to produce independent draft comments. The instructor then composes the final message by selecting sentences or paragraphs, with a legend showing which model contributed what. The model drafts. The instructor delivers, and the deliverable is signed by one person who read the draft.

Aldino et al. find the same assist-then-verify pattern in ordinary practice. The machine-learning component most often flagged "Meeting Learning Objective" as missing (20 of 21 teachers had omitted it; 16 accepted the flag) and "Student-Teacher Relationship" (14 omitted; 12 accepted). Teachers decided each suggestion on professional judgment, which is the point of putting them in the loop.

Twelve of Aldino et al.'s 21 teachers made further sentence-level revisions, and the dominant pattern was calibrating tone: editing praise down (f = 11), removing suggestions (f = 9), removing encouragement (f = 8). Revisions clustered in the relational dimension, especially Student-Teacher Relationship (f = 24). They were protecting authenticity and professional voice, and that work does not automate.

## Teach students to read the comment

Feedback literacy is a prerequisite, and it is unevenly distributed.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths and Lodge (2026)]] had 32 psychology students do a screen-recorded 25-minute essay task with unrestricted access to ChatGPT, then watch the recording back in a video-stimulated interview. Feedback literacy was the only significant positive predictor of essay grade (β = 0.46, p = .017). Frequency of GenAI use, [[trust|trustworthiness of the source]] and [[prior-knowledge|prior knowledge]] did not predict performance, a point [[feedback-futures-genai|Zhan, Wood, Carless and Yan (2026)]] also make in their special-issue editorial. Fewer than a third of the students compared AI output against another internet source. Half expressed deliberate AI avoidance for [[academic-integrity|academic integrity]] or because they wanted the essay in their own words. Most requested task-level feedback, which transfers poorly to other tasks.

The extremes are visible in the pair of IELTS writers Zhan et al. describe. A low-literacy student wrote a vague prompt, got generic feedback, trusted or over-copied it, and engaged superficially. A high-literacy student wrote a criteria-referenced prompt, followed up, cross-checked sources and monitored revisions. The difference was instruction and habit, not tool access.

Tell students directly that model comments can be hallucinated, biased or overlapping, and the student owns the revision. Frame the output as a draft opinion to be judged rather than an answer to be copied. Then ask for the comparison, because fewer than a third of students make it unprompted.

## What instructors get wrong about this

More comments mean more feedback. Comments are cheap to produce and expensive to absorb, and the constraint sits on the student's side of the loop. Farrokhnia et al.'s higher-rated AI comments produced no more revision than teacher comments did.

A better model will fix the generic output. The Deakin tool's failures were scope failures: sentence-level features, a narrow copy-editing band. Zhan et al. locate the fix in the prompt, the rubric or the human, not in a larger model. The pair of IELTS writers is the demonstration; same tool, different habits, different results.

Making the tool available is the intervention. Usage ran at roughly 13% of undergraduates and 12% of postgraduates when the tool was optional. The rest of the design question is what happens for the other 87%.

The time saving is automatic. Asked what the AI feedback tool gave them, 21 teachers named saving time only rarely (n = 2). They named reflection (n = 14), improved language and structure (n = 11) and identification of missing components (n = 10) far more often. Editing (f = 32) and removing (f = 27) dominated their revision work, with adding rare (f = 8). What appears is a draft and a diagnostic prompt. What also appears is review, calibration and verification work. [[ai-save-instructor-time|The workload question]] is the one most often promised away, and GenAI redistributes rather than removes teacher labor.

Satisfaction ratings tell you the comments are accurate. In the Deakin pilot, positive average ratings coexisted with student-flagged errors. Sample the output against your own reading of the same drafts and log where the model was generic, wrong or flattering.

## What will come back at you

**"AI feedback is not personal."** Often true, and it is the reason to keep the last word human. AICoFE exists because generic model prose is not what a student should receive: the instructor selects, edits and signs the final message. The 21 teachers in Aldino et al. rewrote tone for the same reason. Personalization is your job in this design, and the model is doing the setup work.

**"My students will not read feedback anyway."** They read less than we hope, and the evidence says the fix is design rather than volume. Uptake in the Deakin pilot ran at roughly 13% and 12%. Farrokhnia et al.'s higher-rated comments produced no extra revision. What moved the needle was sequencing that forces engagement, self-evaluation then peer feedback then AI critique, plus three revision cycles across a semester that produced measurable feedback-literacy differences.

**"This is not what students pay for."** Then keep the AI from becoming the only voice they hear from you. The defensible version gives students more feedback moments while you spend your hours on the judgment-intensive parts: the final word, the calibration, the comments that carry your authority. What students lose under careless deployment is the coherence between criteria, comments and outcome. Specify the complementarity through sequencing, comparison, editing and governance, and the objection loses its force. Leave two sources side by side and it does not.

**"I do not have time to review everything the model writes."** Then do not review everything. Automate the band where errors are cheap to catch, sentence-level language work, and sample the judgment-level output against drafts you have already graded. The Aldino numbers tell you what to look for: tone, misinformation, exaggerated praise, overlap.

## What to do this week

**1.** Sort your own last set of comments into language-level fixes and judgment-level calls, and count each pile.

**2.** Write the rubric-referenced, step-by-step prompt you would hand a model, and test it against three drafts you have already graded.

**3.** Sample the output against your own comments and log where the model was generic, wrong or flattering.

**4.** Stage one assignment as self-evaluation, then peer feedback, then AI critique, and tell students the AI is a draft opinion they are expected to challenge.

**5.** Ask for one comparison against a second source or against the criteria, since fewer than a third of students do this unprompted.

**6.** Log how much of the final feedback came from the model and how much you changed. AICoFE's curation tracking is the model for that record.

**7.** Watch the expert-novice split. Instructors with more than five years of experience reported more problems with the tool's output than less-experienced colleagues did, who valued the scaffolding. If your experienced colleagues see more failures than you do, that is information about your own calibration.

## Where to go next

[[feedback]] is the umbrella concept for the whole system: provision, loop, uptake and assessment context. [[ai-feedback-quality|AI feedback quality]] covers what makes generated comments accurate, useful, timely and pedagogically sound, and this page is the practical middle, about which combinations of those parts produce better feedback at scale.

Questions about what a grade should mean once AI is involved, including construct substitution, authenticated process evidence and integrity rules, belong to [[redesign-assessment-ai-era|redesigning assessment in the AI era]] and [[assessment-validity|assessment validity]] rather than here. For the writing-instruction special case, see [[writing-instruction-ai-best-practices|best practices for writing instruction in the context of AI]].
