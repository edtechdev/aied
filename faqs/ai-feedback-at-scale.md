---
title: "How Can AI Help Me Give Better Feedback at Scale?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-09-16T15:58:20-04:00"
weight: 70
type: faq
tags: [feedback, ai-feedback-quality, feedback-literacy, automated-assessment, formative-assessment, human-in-the-loop-ai]
research_method: [experiment, mixed methods, systematic review]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
category: [assessment]
---

# How Can AI Help Me Give Better Feedback at Scale?

AI lets you give more comments, sooner, on more drafts. The evidence says that reach is worth having only when you design what happens around the comments: feedback quality and availability both turn out to be weaker levers than feedback design and student [[feedback-literacy|feedback literacy]]. In [[genai-feedback-design-multisite-experiment|a cluster-randomized experiment with 1,176 first-year undergraduates]], reflective and hybrid designs beat direct AI critique on delayed, AI-free [[transfer-of-learning|transfer]]; in [[farrokhnia-genai-feedback-student-revisions-2026|a randomized essay experiment with 70 students]], higher-quality AI feedback did not produce better revisions than a teacher's. This page covers what AI feedback does well and badly, whether students act on it, which designs hold up, and how to check your own setup.

## What AI feedback does well — and where it fails

**It buys coverage and consistency inside a narrow band.** [[tubino-adachi-ai-automated-feedback-literacy|Tubino and Adachi (2022)]] report a university-wide pilot at Deakin in 2021 using FeedbackFruits' AI automated feedback tool across 29 units and almost 4,000 students. It works on micro-level text features — sentence length, punctuation, grammar, text structure — supporting the copy-editing stage: the instructor sets parameters, the student uses the tool independently and gets timely, actionable feedback. The division of labour is what scales.

**Generality, correctness and calibration are where it fails.** [[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson and Yan (2025)]] make prompt quality the hinge of the process: vague prompts yield generic, useless output, and generated comments can be hallucinated, biased or overlapping, which pushes [[evaluative-judgement|evaluative judgement]] back onto the reader. Calibration is sharper still: in [[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]], GenAI feedback quality was significantly associated with the strength of a student's initial draft, while teacher feedback quality was not — the teacher calibrated more consistently. [[learner-centered-feedback-ai|Aldino et al. (2026)]] add instructor-side failure modes from 21 higher-education teachers: inconsistent tone (n = 7), potential misinformation (n = 5) and trust issues (n = 5), with revision effort spent deleting exaggerated praise and generic suggestions rather than adding content.

## Do students actually act on it?

**Uptake, not quality, is the bottleneck.** Farrokhnia et al. randomized 70 students writing argumentative essays in Persian into three groups. Chain-of-thought prompting produced significantly higher-rated feedback (M = 12.90) than both zero-shot prompting (M = 11.25, p = .01) and an experienced human teacher (M = 11.20, p = .008). The chain-of-thought group nevertheless did not revise its essays significantly more than the teacher-feedback group, which achieved comparable gains.

**Who acts on feedback depends on the learner.** In [[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths and Lodge (2026)]], 32 psychology students did a screen-recorded 25-minute essay task with unrestricted access to ChatGPT, then watched the recording back in a video-stimulated interview. Feedback literacy was the only significant positive predictor of essay grade (β = 0.46, p = .017); [[feedback-futures-genai|the special-issue editorial by Zhan, Wood, Carless and Yan (2026)]] notes that frequency of GenAI use, [[trust|trustworthiness of the source]] and [[prior-knowledge|prior knowledge]] did not predict performance. Fewer than a third of the students compared AI output against another internet source, half expressed deliberate AI avoidance for [[academic-integrity|academic integrity]] or wanting the essay in their own words, and most requested task-level feedback, which transfers poorly to other tasks.

**Uptake is often low, and unevenly distributed.** The Deakin tool was optional, and usage averaged roughly 13% of undergraduates and 12% of postgraduates despite almost 4,000 students having access. Proactive, high-achieving students used it more. Teachers must therefore scaffold feedback literacy and the strategies for enacting it.

## Designs that work

**Keep a human in the loop, with the last word.** [[becerra-aicofe-feedback-2026|Becerra, Palma and Cobos (2026)]] describe AICoFE, which runs three independently fine-tuned models (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) over rubric scores and qualitative observations to produce independent draft comments, then has the instructor compose the final message by selecting sentences or paragraphs, with a legend showing which model contributed what. AI is a draft generator, not a final deliverer. Aldino et al. find the same "assist but verify" pattern: the ML component most often flagged **Meeting Learning Objective** as missing (20 of 21 teachers had omitted it; 16 accepted) and **Student–Teacher Relationship** (14 omitted; 12 accepted), with teachers deciding each suggestion on professional judgement.

**Guide generation with a rubric, and make the model reason step by step.** Farrokhnia et al.'s quality gain came from a chain-of-thought prompt walking the model through a step-by-step evaluation against an argumentation rubric, not a bare instruction; [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen and Yan (2026)]] likewise gave their GenAI group ChatGPT-4o with pre-trained rubrics and prompt guidelines, which is what made the output checkable against stated criteria.

**Combine AI with peer feedback rather than substituting one for the other.** Gu et al. ran two parallel English classes (N = 118 first-year undergraduates in China; GenAI n = 56, peer n = 62) through three self-assessment cycles over one semester. GenAI scaffolding improved feedback literacy slightly but significantly over human peer review (ANCOVA p = 0.049, ηp² = 0.03). GenAI students refined prompts iteratively and verified or challenged inaccurate output, while peer-group students chose sources by social convenience and had their evaluative judgement distorted by friendship bias. Peer review kept distinct value for audience awareness, so the authors propose multi-stage designs with anonymous peer feedback.

**Stage the feedback and make the student evaluate first.** In [[genai-feedback-design-multisite-experiment|Ateş's (2026)]] experiment, the reflective condition required self-evaluation before AI critique, and the hybrid ran self-evaluation → peer feedback → GenAI critique. Tubino and Adachi propose templates for three drafting stages for the same reason.

## Design, not availability, drives the effect

The strongest design evidence is a multisite, cluster-randomized, longitudinal field experiment: 1,176 first-year undergraduates in 48 sections across 4 universities and 3 science domains, randomized at section level into peer-only, direct GenAI, reflective GenAI and hybrid conditions. Hybrid produced the highest argument-quality gains and the clearest advantage on conceptual learning. Reflective and hybrid both produced stronger feedback uptake and [[self-regulated-learning|self-regulated learning]] than direct GenAI, and both outperformed it on delayed, AI-free transfer. Direct GenAI did improve immediate argument quality over peer feedback — the advantage it has — but with weaker transfer. Educational value therefore depends less on AI access than on whether the feedback environment preserves student [[agency|learner agency]], evaluative judgement and ownership during revision: direct critique invites passive uptake, while reflective and hybrid designs force the student to interpret it, compare it against criteria, judge its relevance, and then revise.

Other effect sizes temper this. Gu et al.'s advantage over peer review was small, and they read it as real but not transformative alone — teacher scaffolding, prompt guidelines and worksheets did the supporting work. The editorial's framing is that GenAI and human feedback are complementary only if the complementarity is specified, through sequencing, comparison, editing and governance rather than by leaving two sources side by side.

## Workload: what you save and what you take on

**What you save is smaller and less obvious than the pitch.** Asked what the AI feedback tool gave them, 21 teachers named saving time (n = 2) only rarely, and named reflection (n = 14), improved language and structure (n = 11) and identification of missing components (n = 10) far more often. The visible gain is a draft and a diagnostic prompt, not a finished comment.

**What appears is review, calibration and verification work.** Twelve of the 21 teachers made further sentence-level revisions; editing (f = 32) and removing (f = 27) dominated, with adding rare (f = 8). The dominant pattern was calibrating tone — editing praise down (f = 11), removing suggestions (f = 9), removing encouragement (f = 8) — to protect authenticity and professional voice, and revisions clustered in the relational dimension, especially Student–Teacher Relationship (f = 24). Teachers named the need for human editing (n = 9), inconsistent tone (n = 7), misinformation (n = 5) and trust issues (n = 5); instructors with more than five years of experience reported more of them, while less-experienced teachers valued the scaffolding — a reason to watch whether novices who defer to AI suggestions build less independent judgement. The editorial's rule: GenAI redistributes rather than removes teacher labour, and poorly designed tools can increase it. See [[ai-save-instructor-time|the workload question]].

## What to warn about, and how to evaluate your own setup

**Warn about feedback students cannot interpret or verify.** Zhan et al.'s pair of IELTS writers shows the extremes: a low-literacy student with a vague prompt got generic feedback, trusted or over-copied it and engaged superficially; a high-literacy student wrote a criteria-referenced prompt, followed up, cross-checked sources and monitored revisions. Generated comments that look authoritative can be hallucinated, and students need the habit of checking them. Positive average ratings coexisted with student-flagged errors in the Deakin pilot, so satisfaction is a weak quality signal.

**Warn about over-trust at both ends of the pipeline.** Students can over-rely uncritically when enacting feedback, and instructors can over-defer to suggestions. Teacher feedback is also often perceived by students as more negative or riskier than GenAI feedback, which inverts the usual quality assumption. Treat feedback literacy as a prerequisite rather than an assumption: the strongest predictor in Hawkins et al. was the learner's feedback literacy, not how often they used AI.

**Evaluate uptake, not satisfaction, and prefer delayed unaided performance.** The Deakin pilot's usage figures — roughly 13% and 12% — are a useful baseline for your own uptake, and multiple same-day resubmissions are a usable trace of learning from feedback. The delayed, AI-free transfer measure in Ateş's experiment is the outcome to imitate where your course allows it, and AICoFE's curation tracking models the instructor side: log how much of the final feedback came from the model and how much you changed.

**Where this page sits.** [[feedback]] is the umbrella concept for the whole system — provision, loop, uptake and assessment context — and [[ai-feedback-quality|AI feedback quality]] covers what makes generated comments accurate, useful, timely and pedagogically sound. This page is the practical middle: which combinations of those parts produce better feedback at scale. Questions about what a grade should mean when AI is involved — construct substitution, authenticated process evidence, integrity rules — belong to [[redesign-assessment-ai-era|redesigning assessment in the AI era]] and [[assessment-validity|assessment validity]] rather than here.

For the writing-instruction special case, see [[writing-instruction-ai-best-practices|best practices for writing instruction in the context of AI]].

## A checklist for setting up AI feedback at scale

- **Decide what the tool is for before you deploy it.** Copy-editing support, rubric-guided formative comments and draft diagnostics are supported uses; final grades and unmoderated judgement of quality are not.
- **Give the model a rubric, and make it reason step by step.** Prompt technique measurably changed feedback quality in Farrokhnia et al.; a bare instruction did not.
- **Keep an instructor between the draft and the student.** Sentence-level curation with source attribution, as in AICoFE, preserves judgement while still saving composition time.
- **Sequence the sources rather than stacking them.** Self-evaluation first, then peer feedback, then AI critique was the design that outperformed direct AI critique on delayed transfer.
- **Make students verify.** Ask for a comparison against a second source or against criteria; fewer than a third did this unprompted.
- **Build in revision cycles.** Three self-assessment cycles across a semester produced measurable feedback-literacy differences.
- **Budget the new work.** Expect tone calibration, deletion of generic praise and fact-checking to consume much of the time you freed.
- **Report the right evidence.** Usage rates, revision traces and delayed unaided performance, not satisfaction ratings, tell you whether the design worked.
