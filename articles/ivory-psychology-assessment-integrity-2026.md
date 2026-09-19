---
title: "The Integrity of Psychology Assessments in the AI Age: A Critical Examination"
created: "2026-09-17T20:55:00-04:00"
updated: "2026-09-17T20:55:00-04:00"
type: article
foundations: [academic-integrity, reducing-ai-misuse, critical-thinking]
technology: [generative-ai, prompt-engineering]
assessment: [assessment, assessment-validity, summative-assessment, ai-detection, authentic-assessment, learning-gains]
ethics: [hallucination-risk, ai-misuse-learning-harm, trust]
institutions: [educational-policy-ai, governance]
pedagogy: [prior-knowledge, creativity]
methods: [research-methods-aied]
stakeholders: [student-experience]
research_method: [case study]
level: [higher ed]
audience: [instructors, administrators, assessment designers, curriculum designers, researchers]
connected_faqs: [reduce-ai-cheating, verify-ai-output]
sources: ['raw/papers/ivory-psychology-assessment-integrity-2026.md']
confidence: high
---

> **Synthesis:** Ivory and colleagues put the coursework of one entire three-year, British Psychological Society-accredited psychology degree to ChatGPT at three escalating levels of [[prompt-engineering|prompting]] — basic, intermediate, and advanced, with the advanced attempt capped at one hour of work — and had two experienced markers judge every output pass or fail. Of 40 assessments spanning 16 types, **36 (90%) were of passing quality**, and the four that failed were the ones that need something a model cannot supply: an in-person performance, visual media, or the student's own dataset. Their argument for [[academic-integrity]] is not that [[ai-detection|detection]] fails but that the pass/fail boundary is doing too little work: marking that rewards fluency, structure and good-faith analysis *condones* fabricated values and hallucinated citations, so [[generative-ai|AI output]] clears the bar the [[assessment]] actually sets. The authors conclude, pithily, that ChatGPT "could obtain an undergraduate degree in Psychology," and locate the remedy in [[assessment-validity|validity-tightened]] marking criteria, auditable evidence trails, and assessment designs that require what the model cannot produce.

## Key Findings

1. **Almost the whole programme was passable at minimum effort.** 36 of 40 assessments (90%) produced content judged adequate for a pass under normal departmental standards. The authors read this alongside Scarfe et al.'s (2024) finding that 94% of AI-generated psychology submissions went undetected and averaged half a grade boundary *above* student writing, and conclude that psychology may be more exposed than other disciplines — comparable evaluations in [[engineering-education|engineering]] passed 65% of exam questions.
2. **Escalating the prompt, not the skill, did the work.** Basic prompting (task title, word count, assignment type, academic level — about 5 minutes) failed most long-form tasks; intermediate prompting (each section requested separately, responses refined until passable, 5–20 minutes) recovered them; advanced prompting (document upload, a separately engineered structured prompt, one hour maximum) was needed for critical reports, paper reviews, and data-analysis reports. Advanced engineering raised the pass rate, as the second research question predicted.
3. **Multiple-choice items leaked their own answers.** Across the unsupervised weekly web-based assessments the mean score was 70% (min 35, max 100, SD 17.30), rising to 74% by module (min 58, max 93). ChatGPT answered statistics items correctly *without being shown the figure or output table on screen*, because the item text and the answer options implied the answer — once told the name of a test or equation it did not need the data. Item design, not AI capability, set the ceiling here.
4. **Hallucination was casual, convincing, and rewarded.** Basic prompting reviewed a paper that does not exist — "The Role of Social Interaction in Early Language Acquisition" by Johnson, Smith and Taylor (2022), with an unresolvable DOI. Even given the real paper, the model fabricated a sample size of 378 where the study reported 329, and where it lacked a teaching dataset it announced that accuracy would improve with data, then simulated data and reported the results anyway. Incorrect answers carried confident explanations that were convincing to a reader outside that subfield.
5. **The model sometimes contradicted itself inside one response.** On one MCQ it worked through the options, identified the correct answer, and then reported a different one in its closing summary — a failure mode with no analogue in a wrong answer: the reasoning and the verdict disagree.
6. **Novelty, presence, and data access were what resisted.** In-person presentations, poster and slide assignments (the model produced content but not the artifact), and analyses requiring the student's own dataset were the weak points. Tasks needing more than incremental [[creativity]] were hardest: asked to invent a religion grounded in psychological theory in five separate attempts and across accounts, the model returned the same invented religion ("Harmonia") every time — and one author had already seen that same construction in a real student submission.
7. **The pass bar itself is part of the vulnerability.** Because markers are encouraged to mark positively — condoning incorrect values and formatting while rewarding use of the right analysis — plausible AI output passes without the effort that would otherwise be needed to repair it. The authors argue the assessment vulnerability "cannot be blamed solely upon student usage": it is a [[teacher-role|marking]] and criteria problem as much as a student-behavior one.

## Design: one program, three levels of prompting

The study is an instrumental case study of a single BPS-accredited UK [[higher-ed|undergraduate]] psychology degree, bounded to all 16 coursework assessment types used across the three years in 2023/24 — 40 unique assessments, exams and dissertations excluded as invigilated or unavoidably individual. All material was taken from the student-facing side of the learning management platform so nothing staff-restricted leaked into the prompts, and transcripts were deposited openly.

Data collection used the free tier ChatGPT 3.5, with 4o where file uploads were needed (both available to any student) in June and July 2024, in fresh conversations with personalization off. Judgment was binary pass/fail by two researchers with four-plus years of marking experience across all three years of the program, deliberately reproducing the time-constrained first-read decision a marker makes rather than a full grading exercise. Exactly one assessment per type was taken to the advanced level regardless of earlier results. For MCQs only basic prompting was used and scores were recorded as percentages.

Two design choices matter for how far the numbers generalize. First, nothing was edited: responses from separate exchanges were concatenated, so the assessment asked whether *content* was passable, not whether a submission would have fooled a marker — the authors note their outputs were largely atypical in formatting and missing student identifiers. Second, because no editing, reformatting or repairing was allowed, the study measures a floor: a student who rewrites, corrects values or supplies column names would do better, and the authors expect their susceptibility findings to be an underestimate.

## Where the AI passed, and why

Long-form written work made up 65% of the assessments tested and was the most fragile category. Essays passed only after intermediate prompting, and the researchers' reading notes are revealing about what was still adequate: arguments were sound but basic, criticality thin, and referencing sparse — three to nine references at basic prompting, seven to fourteen at higher levels. Unreferenced claims appeared in the middle of otherwise passable essays, which the authors note is exactly how a lower-performing student looks. Yet the mark reached a pass, because a pass is not a first.

Short-form assessments behaved differently. Declarative recall and application to novel scenarios were easy for the model, including "higher MCQ" case scenarios where it scored as high as 87%. Statistics items that required running R code scored 60% only because ChatGPT guessed column names it had never seen; a student supplying those names, or the dataset itself, would raise that immediately — a two-minute fix rather than a capability barrier.

The four failures fell into a coherent pattern: an in-person presentation (presence is the assessed construct), poster and slide work where the artifact itself was required, and data-analysis reports where the analysis had to run on the student's real data. Where the model could simulate data instead, it produced *passable* work built on numbers that were wrong — a worse outcome than a failed attempt, because the false values arrive inside a convincingly structured report.

## Convincing errors as a learning hazard

The paper's most uncomfortable evidence is about [[hallucination-risk|hallucination]] that survives marking. Fabricated citations and DOIs sit in the reference list, an area current marking criteria read quickly for formatting rather than accuracy, and the authors point to prior work finding that only 7% of ChatGPT-supplied references were both real and relevant. The argument is not only about marks: a student using the same tool to revise learns the fabricated content, and confidently wrong explanations were most convincing precisely where the researchers themselves lacked domain expertise. Detecting this requires a marker who is expert on that specific topic and time to check the accuracy of the reference list — time the authors argue does not currently exist, with 23,900 students starting psychology degrees in the UK each year and academic-integrity casework rising from 1.6 to 5.1 proven Gen-AI misconduct cases per 1,000 students between 2022/23 and 2023/24.

On the student side, the paper cites the HEPI 2025 survey's jump in [[self-report-measures|self-reported]] AI use in assessments from 53% to 88% in one year, with unaided submission of AI text rising from 5% to 8%. Where [[prior-knowledge|prior knowledge]] is adequate, AI supports learning; where it is not, students are being misinformed by a tool that is right often enough to be trusted. Both halves of that finding are load-bearing.

## Recommendations

For educators, six proposals follow from the failure modes rather than from detection: require version histories or other auditable evidence trails so an assignment's development is inspectable; require reproducible analysis documents for data-based assignments; set creative tasks beyond incremental creativity; treat contextually irrelevant content (methods not taught in that module) as an integrity signal; include referencing accuracy in marking criteria; and align marking criteria with intended [[learning-gains|learning outcomes]] so that fluent [[writing-education|academic writing]] is not by itself sufficient for a pass.

For institutional leaders, three: resource integrity review and assessment reform in proportion to student numbers, since identification plus student meetings is skilled, time-intensive work that cannot be absorbed into already compressed roles; publish clear [[educational-policy-ai|AI policy]] — at the time of writing only 19% of surveyed institutions had a formal policy and 42% had one in development, while 80% of UK students believed their institution had a clear one; and ensure markers are trained on and actually using current criteria.

## Implications

The paper is program-level evidence that [[summative-assessment|grade]] integrity is a property of an entire assessment mix, not of individual tasks, and it lands where the knowledge base's other case studies land: a [[biology-education|biology]] department found about a third of a course grade highly vulnerable ([[biology-degree-integrity-genai-cheating-2026]]), and here a whole psychology program was 90% passable at minimum effort. It is also the clearest statement that the pass boundary — not detection, not student virtue — is the operative variable, which ties it to [[assessment-validity]], to grade-inflation evidence that grades stopped tracking skill ([[chirikov-ai-grade-inflation-2026]]), and to the argument that unproctored scores need redesign rather than surveillance ([[ai-agents-complete-lms-assessment-validity-2026]]). Two limits should travel with the numbers: the assessments are from 2023/24 and were generated with GPT-3.5/4o, so they describe the floor of a moving capability, and the authors' own constraints mean the true exposure is higher, not lower. The remediation the paper argues for is closest to [[authentic-assessment]] — but its version of authenticity is narrower and more practical than the term usually carries: an artifact you have to be present to make, data you had to hold, and a marking decision that requires evidence of understanding rather than polish.

## Connected Concepts

- [[academic-integrity]]
- [[assessment-validity]]
- [[assessment]]
- [[summative-assessment]]
- [[ai-detection]]
- [[authentic-assessment]]
- [[hallucination-risk]]
- [[reducing-ai-misuse]]
- [[generative-ai]]
- [[higher-ed]]

## Connected Articles

- [[biology-degree-integrity-genai-cheating-2026]] — Program-level vulnerability of biology course grades to GenAI dishonesty
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — How students use and hide AI in online assessments
- [[chirikov-ai-grade-inflation-2026]] — AI task displacement as a mechanism of grade inflation
- [[ai-agents-complete-lms-assessment-validity-2026]] — Agentic completion removes the human-production assumption
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education
- [[kofinas-generative-ai-authentic-assessment-integrity-2025]] — Authentic assessment alone cannot safeguard integrity
- [[genai-performance-vs-learning]] — Performance gains without learning gains
- [[roe-ai-humanizers-legitimacy-assessment-2026]] — AI humanizers and the performance of legitimacy

## Citation

Ivory, M., Finnerty, S., Dunn, K., Philpot, R., & Warmelink, L. (2026). [The Integrity of Psychology Assessments in the AI Age: A Critical Examination](https://doi.org/10.1007/s10805-026-09729-0). *Journal of Academic Ethics, 24*, 48.
