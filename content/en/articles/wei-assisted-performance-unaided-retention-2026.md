---
title: "Assessing learning beyond AI assistance: assisted performance and unaided retention in generative AI-supported learning"
created: "2026-11-12T09:30:00-05:00"
updated: "2026-11-12T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [literature review]
evidence_context: educational
audience: [instructors, assessment designers, researchers]
sources: ['raw/papers/wei-assisted-performance-unaided-retention-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2029407"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading]
pedagogy: [transfer-of-learning, self-regulated-learning]
technology: [generative-ai]
assessment: [assessment, learning-gains, automated-assessment]
---

> **Synthesis:** Wei (2026) sorts the evidence on [[generative-ai|generative AI]] in learning by what the test actually measures: performance while the tool is available, an immediate posttest without it, or a delayed posttest without it. Three Web of Science Core Collection searches covering 1 January 2022 to 1 October 2026 returned 670 records, of which 664 were unique; twelve studies were purposively selected for review, and they run from 32 [[nursing-education|nursing]] undergraduates to a [[rct|randomized trial]] in which the ChatGPT-supported group scored 5.75/10 against 6.85/10 on a surprise supervised Day-45 test (p = 0.002, reported Cohen's d = 0.68). The direction is not uniform: structured tutoring and feedback conditions produced gains, unrestricted assistance produced deficits on unaided examinations, and language contrasts split by skill. What the corpus cannot support is the inference most readers want from it. None of the twelve studies scored assisted performance, an immediate unaided test and a delayed unaided test together with verified AI exclusion at both, so the review documents a gap in the [[assessment|assessment]] literature rather than a forgetting curve.

## Key Findings

1. **No study among the twelve measured all three conditions.** Assisted performance, an immediate no-AI test and a delayed one with verified exclusion never appeared in one design, so gains are not tied to retention.
2. **Unrestricted access can cost unaided performance.** In school [[math-education|mathematics]], GPT access improved practice scores but was associated with a 17% lower unaided exam score than no-AI instruction; tutor [[guardrails]] removed the deficit.
3. **A longer interval does not reliably favor AI support.** A randomized Day-45 test put ChatGPT-supported study at 5.75/10 against 6.85/10 (p = 0.002, d = 0.68), with 29.2% attrition and no matched immediate baseline.
4. **Retention contrasts are skill-specific.** One week after lexical tasks, [[conversational-ai|chatbot]]-supported learners led on productive collocation retention (6.15 versus 3.61/10, p < 0.001) while receptive vocabulary scores were similar (7.67 versus 7.58/10, p = 0.863).
5. **Designed support looks different from unrestricted access.** Theory-informed tutoring and practice-with-feedback conditions produced immediate advantages, including a 13 pp. gain over lecture (p = 0.009), but those comparisons stopped at immediate or short-interval outcomes.
6. **Most studies could not establish AI exclusion at testing.** Where test-time access was undocumented it was coded "not established", and a supervised or paper-based test was not automatically classified as verified exclusion.
7. **Candidate mediators went unmeasured.** Retrieval attempts, elaboration and feedback use are the processes the review can name, and almost none of the twelve studies recorded them well enough to test as mediators.

## Three conditions, three different questions

An assisted score combines what the learner can do with what the tool supplies, and a fluent study session is a poor guide to what survives it. Wei builds the argument on the classic learning-versus-performance distinction: supported scores describe functioning under a particular arrangement, unaided scores describe what the learner produces alone. The practical consequence is that "no-AI testing" is a claim about procedure, not a label. A supervised examination and an unsupervised online questionnaire supply different evidence of restricted access, and the second may leave saved AI responses within reach. Wei therefore codes test-time access three ways: an explicit restriction with a documented compliance check (verified exclusion), a reported restriction or supervised administration without independent confirmation, and "not established" where the procedure is undocumented. Only the first supports the inference that a score reflects [[learning-gains|learning]] rather than availability — a [[assessment-validity|validity]] question before it is an integrity one.

## What the twelve studies found

The evidence tracks [[learning-design|instructional design]] more than the tool. Barcaui's randomized trial found the ChatGPT group behind at Day 45, but study time also differed ([[self-report-measures|self-reported]] means 3.2 versus 5.8 h) and the paper's curves interpolate between assumed and observed endpoints rather than estimating a forgetting trajectory. Qin et al. compared three intact undergraduate classes: the group-by-time interaction was significant (p = 0.001), the GenAI-versus-traditional delayed interaction was not (p = 0.129), and the cognitive-linguistics-versus-traditional contrast was (p = 0.013), across packages taught by different instructors. Sezgunsay et al. found no immediate difference among 32 nursing undergraduates but a six-week median advantage of 65 versus 55 (p = 0.044), measured remotely and unsupervised. Zhang and Huang tested 52 high-school learners over 8 weeks and reported descriptive follow-up gaps, but their reported test statistics do not reconcile with the design, so only the means can be read. Gustafsson et al. found nothing after 4 weeks of team-allocated trauma training (p = 0.33) — a null result, not equivalence.

## Why assistance helps and hurts: retrieval, offloading, feedback

The explanatory section is deliberately provisional. When a learner receives an answer before attempting recall, the [[retrieval-spacing-interleaving|retrieval]] processes that build durable memory may never run — the standard argument from [[desirable-difficulties|desirable difficulties]] and pretesting research. But the consequences of [[cognitive-offloading|offloading]] depend on which operations are delegated. Wei cites Nakamura's distinction between assistance with operations peripheral to the learning goal and delegation of the processing students are meant to master: AI formatting a table leaves the causal reasoning to the learner, while an AI-written interpretation absorbs it. Readymade explanations may also release working memory for harder work, so theory does not settle the direction. Feedback is the third route, and its value depends on whether learners interpret it, locate the error and revise; practice-with-feedback experiments showed immediate memory and generalization benefits without measuring delayed retention. [[icap-framework|ICAP]] categories could characterize engagement during assisted tasks, and [[prior-knowledge|prior knowledge]] plausibly decides whether a student inspects a tentative answer or bypasses the attempt.

## What a decisive study would look like

The closing proposal is a design specification, and the most portable part of the paper. An informative experiment would score an AI-assisted task, then administer an immediate no-AI assessment and at least two later comparable no-AI assessments, verify restrictions on external assistance at each, distinguish answer exposure from retrieval before feedback, and randomize at the unit of assignment. Alongside scores, a compact process record would capture the learner's first answer, the timing and content of [[ai-feedback-quality|AI feedback]], any revision, and the final explanation produced without help — separating students who check an independently formed hypothesis from those who copy a solution before forming one. Repeated observations would permit analysis of change rather than interpolation of unobserved forgetting curves, and [[educational-measurement|item-level reporting]] with comparable forms would stop a repeated-item advantage from passing as retention. For teaching, the arrangement is narrower than a ban: allow AI during guided preparation, reserve supervised opportunities for unaided retrieval, and treat what emerges as [[formative-assessment|formative]] until follow-up testing exists.

## What this means for practice

- **Instructors.** Decide which of the three conditions each assessment is meant to report, and label it that way: a task completed with AI is evidence of supported performance, not of what students can do when the tool is gone.
- **Assessment designers.** If a no-AI test is meant to certify independent capability, write the access restriction and the compliance check into the procedure, and treat a paper-based or merely invigilated test as unverified until both exist.
- **Faculty developers.** Pair any AI-integrated unit with a scheduled unaided retrieval task later on, since the review's positive examples combined structured support with a separate independent measure.
- **Administrators.** Do not read rising assisted-task scores as learning gains in program review; ask instead which assessments in the program produce unaided evidence and how test-time access was verified.
- **Researchers.** Report AI availability during learning and at each test, the construct assessed, and the learning activities between assessments, since these are the three omissions that make the twelve studies uncomparable.

## Limitations

- The search was targeted rather than systematic: three Topic searches of Web of Science Core Collection, no exhaustive full-text eligibility screening, and supplementary leads and pre-2022 cognitive studies kept outside the 664-record pool.
- The evidence base is twelve purposively selected studies, and Wei states that none documented all three conditions with verified AI exclusion at both no-AI posttests, so cross-study synthesis of retention is not available.
- Baselines, follow-up intervals and comparators differ across studies: no immediate independent baseline in Barcaui, a remote unsupervised six-week test in Sezgunsay, and intact classes with different instructors in Qin.
- Test-time access is unverified across most of the corpus, so several contrasts cannot be read as unaided performance at all.
- Tasks range from vocabulary production to secondary mathematics to nursing procedures, and the review does not pool effect sizes across them.

## Citation

Wei, J. (2026). [*Assessing learning beyond AI assistance: assisted performance and unaided retention in generative AI-supported learning*](https://doi.org/10.3389/fpsyg.2026.2029407). *Frontiers in Psychology*, *17*, 2029407.
