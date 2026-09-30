---
title: "Can students identify AI? – A cross-sectional quantitative study about AI recognition in tablet-based MCQ assessment among fifth-year undergraduate medical students at Saarland University, Germany"
created: "2026-09-30T06:50:00-04:00"
updated: "2026-09-30T06:50:00-04:00"
type: article
sources: ['raw/papers/10.1186_s12909-026-10410-8.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
discipline: [medical education]
level: [higher ed]
audience: [medical educators, assessment designers, researchers]
foundations: [ai-literacy]
technology: [generative-ai, llm]
assessment: [assessment-validity, automated-assessment, automated-question-generation]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Vogt, Wolf, Jordan, Volz-Willems, Jäger and Dupont put [[automated-question-generation|AI-generated multiple-choice questions]] into a real exam and asked whether students could tell them apart from National Licensing Exam items. In a Family Medicine tablet-based exam, 119 fifth-year [[medical-education|medical students]] answered 30 AI-generated and 30 licensing-exam MCQs, generated from their own digital learning materials with [[generative-ai|ChatGPT]]-4o and Gemini 1.5 Pro through an expert-panel workflow that accepted 82% of the drafted items. Students' source attribution did not differ between the two kinds of question, and [[item-response-theory|item difficulty]], distractor distribution and student-perceived curricular alignment were statistically indistinguishable — with one exploratory exception, a difficulty difference between the Gemini items and the licensing-exam items. The finding the authors emphasize is not that the AI items were good but that students could not reliably tell: recognition was above chance yet imperfect, and many students believed after the exam that they had "recognized AI questions very easily." Their conclusion is a narrow, defensible one — AI-drafted MCQs are feasible inside a structured human-review process, and the workload shift is from writing items to reviewing them.

## Key Findings
1. 119 fifth-year medical students at Saarland University took a tablet-based Family Medicine MCQ exam containing 30 AI-generated and 30 National Licensing Exam (NLE) questions; AI items were generated from the course's own digital learning materials using ChatGPT-4o and Gemini 1.5 Pro.
2. Experts accepted 82% of the generated questions, with minor edits to retained items and removal of those needing major changes; 18.2% of the initially generated MCQs were eliminated during [[human-in-the-loop-ai|human review]].
3. Correct source attribution did not differ significantly between AI-generated and NLE items (t(29.6) = −1.24, p = .225 for AI; t(29.6) = 1.18, p = .246 for NLE), and no significant correlation was found between item difficulty and recognition (τ_b: p = .534).
4. Recognition did not differ by model either: mean correct recognition was 68.6 (SD 14.3) for ChatGPT items, 71.0 (SD 18.3) for Gemini items and 77.5 (SD 22.7) for NLE items, with no overall effect of source (χ²(2) = 2.17, p = 0.338).
5. Distractor distributions did not differ across ChatGPT, Gemini and NLE items (χ²(2) = 2.61, p = .271), and student-perceived curricular alignment did not differ by source (mixed-effects model: OR = 1.04, 95% CI 0.385–2.81, p = 0.938).
6. Item difficulty did not differ between AI and NLE items overall, but exploratory source-specific analysis found an overall difference among the three sources (χ²(2) = 6.71, p = 0.035), driven by a difference between Gemini and NLE items (p = 0.028) and not between ChatGPT and NLE items (p = 0.984).
7. Item difficulty was strongly associated with students' judgment of curricular alignment — easier items were rated as aligned (ρ = 0.762, p < 0.001) and harder items as not aligned (ρ = −0.762, p < 0.001) — and the authors contrast this with students' post-exam confidence that they could "recognize AI questions very easily."

## What the study can and cannot claim

The design is what makes the result usable: the AI items went into a graded exam that counted for students, not a laboratory comparison, and two different models were used so the findings do not rest on one model's quirks. Key-feature questions were included alongside conventional MCQs, extending the format to clinical reasoning items. The measured outcomes are all item-level properties — attribution, difficulty, distractor spread, perceived alignment — and on each of them the AI-drafted items behaved like the licensing-exam items, with the single exploratory difficulty difference for Gemini items treated by the authors as hypothesis-generating rather than conclusive.

What the study does not show is that AI-drafted items measure the same constructs, or that they are free of the biases the authors observed in review. Two findings push in that direction. First, the 18.2% elimination rate is the human-oversight number: the workflow that made the items usable was an expert panel reviewing machine drafts, and the paper frames the practical benefit as a shift of educator effort from drafting to reviewing rather than as a reduction in expertise. Second, the reviewers themselves showed a visible bias underestimating Family Medicine competency — for example, generated distractors proposed referrals to other specialists for abdominal ultrasound, which the panel had to correct. Human review is therefore part of the measurement apparatus, and it carries its own error.

## Recognizability is the finding, not a side note

For [[assessment-validity|assessment validity]], the result cuts two ways. A student who cannot tell an AI-drafted item from a licensing-exam item is, in one sense, being assessed by an instrument that behaves like the reference instrument — which is what a [[curriculum-design|curriculum]]-aligned exam wants. But the same non-recognition is a warning about how students read assessment. Students believed they could spot AI questions easily and could not, and their judgments of curricular alignment tracked item difficulty rather than content: easy items felt aligned, hard items felt misaligned. That is a [[self-assessment|metacognitive]] miscalibration about the instrument, and the authors connect it to the wider risk that students' [[self-regulated-learning|self-regulation]] is shaped by assessment requirements they misread. It also matters for [[ai-detection|detection]]-style reasoning in teaching: if students cannot identify machine-written assessment items by inspection, then neither can they reliably identify machine-written text, which is the premise detection tools rest on.

## What this means for practice

- **Use AI item drafting inside a review panel, and budget the review.** 18.2% of generated items were unusable and retained items needed edits; the workload claim is a shift from drafting to reviewing, not a reduction in educator time or judgment.
- **Watch for specialty bias in review.** The panel's own tendency to underrate Family Medicine competency (specialist referrals as distractors for a primary-care ultrasound item) is a review-time error, so build in a domain check rather than treating human review as automatically correct.
- **Do not read non-recognition as validation alone.** Students could not distinguish AI from licensing-exam items and also misjudged which items were aligned with the curriculum; ask what students believe about an assessment instrument rather than assuming they read it as designed.
- **Extend AI drafting into formative use.** The authors' own suggestion is that the same generation workflow can produce practice questions with explanations and feedback for distractors — the formative application may carry more value than the [[summative-assessment|summative]] one.

## Limitations

- The study is a single cross-sectional exam in one Family Medicine course at one German university with 119 students, so item-level results describe this instrument and cohort rather than MCQs in general.
- Several source-specific comparisons are explicitly exploratory and post hoc, including the Gemini-versus-NLE difficulty difference, which the authors report as a hypothesis rather than an established effect.
- The outcome measures are item properties and student perceptions; the study does not test whether the AI-drafted items measure the same clinical reasoning constructs as licensing-exam items, nor whether they produce different learning behavior.
- The AI items came from ChatGPT-4o and Gemini 1.5 Pro, model generations that have since been superseded, so the difficulty and distractor profile is specific to those models under this prompt workflow.

## Citation

Vogt, P., Wolf, N., Jordan, S., Volz-Willems, S., Jäger, J., & Dupont, F. (2026). [Can students identify AI? – A cross-sectional quantitative study about AI recognition in tablet-based MCQ assessment among fifth-year undergraduate medical students at Saarland University, Germany](https://doi.org/10.1186/s12909-026-10410-8). *BMC Medical Education, 26*, 1519.