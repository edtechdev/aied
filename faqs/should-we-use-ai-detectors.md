---
title: "Should We Use AI Detectors?"
created: "2026-09-17T09:21:00-04:00"
updated: "2026-09-17T09:21:00-04:00"
weight: 85
tags: [ai-detection, academic-integrity, assessment-validity, equity-in-ai-education, governance, trust, higher-ed, educational-policy-ai]
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
stakeholders: [educational-policy-ai, governance]
ethics: [equity-in-ai-education, trust]
---

# Should We Use AI Detectors?

**Not as evidence in a misconduct case, and not as an institution's first line of defense. A detector score cannot be validated against ground truth, cannot be cross-examined, and does not meet the balance-of-probabilities standard that [[academic-integrity|academic integrity]] findings require.** Worse, its errors are patterned rather than random: the strongest controlled study in the knowledge base found that detectors flag honest, guideline-compliant AI *editing* far more readily than unmodified student prose, while deliberate evasion passes almost untouched — and the students most likely to be flagged are non-native English writers.([[karr-ai-detection-humanization-2026]])([[teichmann-detecting-undetectable-misconduct-2026]]) [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] go further and argue detection should not be used in education at all, because the technology cannot tell "work created *with* AI" from "work created *by* AI." This page is for the people who have to decide: instructors, academic integrity officers, and administrators. The design-side playbook lives in [[reduce-ai-cheating|How Can I Reduce AI Cheating in My Course?]].

## 1. The accuracy numbers do not support a finding

Three independent lines of evidence converge on the same conclusion.

**The false-positive rate on legitimate work is high, and it punishes transparency.** A controlled study of 642 published English abstracts across four domains and two time periods found that at a 0.50 threshold, two commercial detectors flagged guideline-compliant *light* AI editing at **38–80%**, flagged unmodified 2023–25 originals at **9–15%** (non-[[stem-education|STEM]] far above STEM, p<0.001), and — once text had been run through a humanizing service — caught **fewer than 4%** of AI-labeled rewrites, a false-negative rate above 96%. The authors describe this as an integrity catch-22: students who disclose and edit lightly are the ones the tool catches, while students who deliberately evade it are not. Their recommendation is explicit — detector scores should never serve as standalone misconduct evidence.([[karr-ai-detection-humanization-2026]])

**The best independent benchmark does not reach usable accuracy.** In the most comprehensive early [[benchmark]], none of fourteen tools reached 80% accuracy, and simple paraphrasing, minor editing, or humanizing services roughly halve even that performance. At realistic base rates, false positives outnumber true positives.([[teichmann-detecting-undetectable-misconduct-2026]])

**And it misses wholesale AI use entirely when it counts.** In a covert field study, researchers injected wholly AI-generated submissions into a live online [[summative-assessment|examination]] system across five psychology modules: **94% went undetected**, and the AI work on average outscored the real students. Contract cheating already demonstrated the same structural problem — it leaves no reliable trace to find.([[teichmann-detecting-undetectable-misconduct-2026]])

Accuracy also varies by task in ways a policy cannot anticipate. When researchers tested whether [[generative-ai|generative AI]] can reliably detect its own output, detection was dependable for programming and longer reflective writing but poor for short answers, where the model often judged its own text as *more* human-like than authentic student work — and minor prompt variations sharply reduced accuracy.([[llm-detecting-llm-generated-content-education]]) Any threshold you set will hold for some assignments and fail for others.

## 2. The errors are patterned, and they land on the wrong students

This is the part that should decide the question for anyone responsible for equity.

The features detectors treat as signals of AI — long-token density, academic word frequency, uniform style — are also features of competent second-language writing, so detectors misclassify non-native English speakers systematically rather than randomly. The harm of misclassification therefore lands on students who are already disadvantaged.([[teichmann-detecting-undetectable-misconduct-2026]]) The same skew appears by discipline: non-STEM abstracts were flagged far above STEM ones in the abstract study, which is a property of the writing conventions of those fields, not of their authors' conduct.([[karr-ai-detection-humanization-2026]]) In effect, a detector is a style test, and the style it punishes correlates with language background, discipline, and register — not with whether a student used AI.

That is an [[equity-in-ai-education|equity]] problem before it is a technical one, and it is also a [[trust]] problem. Because detectors are unreliable and formal processes demand detection-grade proof that is functionally unavailable, faculty end up with what one practitioner account calls "suspicion without recourse," while [[student-rationalization-ai-writing|students rationalize]] their own use and case files stall.([[best-response-student-ai-dialog-2026]])

## 3. Why a score cannot carry an integrity case

If you sit in a hearing, this is the section that matters.

- **The evidential standard is not met.** Academic misconduct findings require evidence meeting the balance of probabilities. Detector scores — alone *or* in combination with linguistic markers, style comparisons, [[llm]] judgments, or a student's silence — do not satisfy that standard.([[bassett-ai-detectors-education-2026]])
- **Silence and speech are both being misused.** Students retain the right to silence; refusing to respond does not tip the scales against them. The legitimate question is not "did you use AI?" but whether the student can demonstrate the [[learning-gains|learning]] the [[assessment]] claims to measure, which an oral response can answer.([[bassett-ai-detectors-education-2026]])
- **The probability is unverifiable.** Unlike a spam filter or a medical test, a detector's output cannot be independently checked: in real submissions there is no ground truth about how the text was produced, so validation becomes circular, and false-positive/false-negative metrics apply only in controlled tests.([[bassett-ai-detectors-education-2026]])
- **The reference data is outdated by construction.** Detectors are trained and tested on pre-generative-AI human writing — Turnitin's own validation used 700,000 pre-2019 papers — which assumes that corpus reflects current student prose. That assumption is unverified, and it shifts with every model release.([[bassett-ai-detectors-education-2026]])
- **The tool cannot be interrogated.** Detectors publish no thresholds or training data and do not permit independent replication, so a flagged student cannot answer or cross-examine the accusation. You cannot defend a finding you cannot explain.([[teichmann-detecting-undetectable-misconduct-2026]])
- **The binary is the wrong question.** Students' work is frequently created *with*, not *by*, AI, across a hybrid continuum, and policies that say "in assessment" rarely define when an assessment begins — leaving enforcement to subjective judgment rather than principled criteria.([[bassett-ai-detectors-education-2026]])
- **You take on data risk.** Detectors store student work on third-party servers, sometimes overseas under weaker [[privacy]] protections, creating breach, retention, and commercial-exploitation exposure your institution owns.([[bassett-ai-detectors-education-2026]])
- **More monitoring can backfire.** Deterrence runs through a detector's *discrimination* between hidden use and legitimate work, not its raw catch rate. When extra sensitivity produces more new false positives than new true positives, stronger monitoring makes concealment relatively *more* attractive — you spend credibility on students who did nothing wrong, faster than you identify the ones who did.([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]])

## 4. What to do instead

**Ask for verification, not provenance.** Grand Canyon University moved from "Did this student use AI?" to "Can this student demonstrate understanding of what they submitted?", using short conversations, early drafts, and recorded explanations, implemented institution-wide in fall 2025. The argument is practical: faculty are already qualified to judge understanding, and the shift restores their authority instead of leaving them waiting on proof that will never arrive.([[best-response-student-ai-dialog-2026]])

**Make at least one high-stakes task unaided.** Asynchronous oral assessments — just-in-time prompts with brief, time-limited recorded responses graded against embedded rubrics — performed comparably to in-person multiple-choice exams in one study and significantly better in another, with students reporting more active preparation and higher perceived professional relevance. For an [[administrator]], the relevant property is that this is scalable without proctoring.([[asynchronous-oral-assessment-2026]])

**Redesign tasks so AI shortcuts are less attractive.** A case study of undergraduate economics students found only about a third reported any AI use, with disclosure rarer still — and non-disclosure read as rational caution under ambiguous policy rather than dishonesty. Those same students favored real-world, data-based tasks as the fix.([[kirsanov-beyond-detection-ai-online-assessments-2026]]) Expecting, declaring, and scrutinizing AI use beats policing it, because [[authentic-assessment|authenticity]] has to be designed rather than enforced.([[beyond-detection-authentic-assessment-ai-2025]])

**Make honest disclosure the safe option.** Vague or punitive policies drive concealment; specific declaration frameworks tied to cognitive stages, paired with an assurance that truthful disclosure is not penalized, get more information out of students than surveillance does.([[gonsalves-student-non-compliance-ai-declarations-2025]])([[chang-should-i-tell-my-teacher-ai-disclosure-2026]])

## 5. The objections you will hear

- **"Our vendor advertises a 1% false-positive rate."** Vanderbilt's licensed detector claimed exactly that, and when the university sought to validate the figure it could not — 1% of 75,000 annual submissions implied roughly 750 mislabelled students — so it disabled the tool. Independent benchmarks put no tool above 80% accuracy.([[teichmann-detecting-undetectable-misconduct-2026]])
- **"We only use it as one piece of evidence."** The standard is not "some evidence" but evidence meeting the balance of probabilities, and detector scores combined with markers, style comparisons, LLM judgments, or silence still do not satisfy it. If you would not say the reasoning out loud in a hearing, it is not evidence.([[bassett-ai-detectors-education-2026]])
- **"If we stop detecting, cheating wins."** Detection is not what stops the determined: 94% of injected AI submissions passed a live online exam unnoticed, humanizing defeats detection more than 96% of the time, and contract cheating already left no reliable trace.([[teichmann-detecting-undetectable-misconduct-2026]]) What detectors do catch, with measured reliability, is honest light editing and non-native prose.([[karr-ai-detection-humanization-2026]])
- **"We only use it privately, to start a conversation."** That is the least harmful use, and it still costs something: the students most likely to be flagged are the least likely to be misusing AI, so suspicion lands disproportionately on the wrong people.([[teichmann-detecting-undetectable-misconduct-2026]]) Grand Canyon's answer was to stop starting from suspicion at all.([[best-response-student-ai-dialog-2026]])

## 6. If you write or revise policy, put these in it

- **Detector output is never standalone evidence, never triggers an automatic consequence, and never grounds a finding.** State this in the policy itself, not in a memo.([[karr-ai-detection-humanization-2026]])
- **Students must be able to see the accusation and respond to it**, with the right to silence preserved and an oral verification route available for any allegation that rests on style alone.([[bassett-ai-detectors-education-2026]])
- **Procurement terms should cover data retention, use for [[pedagogical-llm-training|model training]], storage location, breach notification, and appeal rights** — the risk sits with your institution, not the vendor.([[bassett-ai-detectors-education-2026]])
- **Fund the alternative.** The documented faculty complaint is "suspicion without recourse," so the budget line that matters is verification capacity and guidance, not a detection license.([[best-response-student-ai-dialog-2026]])
- **Ask for error rates in writing, then try to validate them locally.** If the advertised rate cannot be reproduced on your own submissions — as Vanderbilt found — that is your answer.([[teichmann-detecting-undetectable-misconduct-2026]])

## How this page differs from the neighboring FAQs

- [[reduce-ai-cheating|How Can I Reduce AI Cheating in My Course?]] is the instructor's design playbook: guardrailed tools, assessment redesign, verification, declarations, [[ai-literacy|AI literacy]]. This page answers the narrower prior question of whether detector output can be used at all.
- [[redesign-assessment-ai-era]] covers assessment redesign in depth; this page only points to the redesign moves that specifically replace detection.
- [[course-ai-policy]] covers writing and communicating a course policy; section 6 here covers the detection-specific clauses an [[educational-policy-ai|institutional policy]] needs.

## The bottom line

Do not build a finding on a detector score, and do not buy one expecting it to secure your assessments. The measured behavior of these tools is the opposite of their marketing: they catch honest, disclosed, lightly edited work and competent second-language writing, while deliberate evasion passes 96% of the time and wholly generated submissions passed a live exam system 94% of the time.([[karr-ai-detection-humanization-2026]])([[teichmann-detecting-undetectable-misconduct-2026]]) The integrity question you can actually answer is whether a student can demonstrate understanding of what they submitted — and that is a teaching capacity worth funding.
