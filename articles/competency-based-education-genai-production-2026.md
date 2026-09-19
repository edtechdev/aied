---
title: "Knowledge, Skills, Attitudes, Production: Competency-Based Education After Generative AI"
created: "2026-08-12T12:37:38-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [academic-integrity, curriculum-design]
technology: [generative-ai]
assessment: [assessment, assessment-validity, automated-assessment]
research_method: [theoretical analysis]
level: [higher ed]
sources: ['raw/papers/competency-based-education-genai-production-2026.md']
confidence: medium
audience: [assessment designers, institutions, curriculum designers]
---

> **Synthesis:** This conceptual paper proposes adding *production* — the capability to deliver professional-standard work by directing tools and other people — as a fourth attribute of competency-based education (CBE), alongside knowledge, skills, and attitudes/values. The proposal responds to a construct-validity problem: generative AI has severed the inference from a student-produced artifact to the student's own knowledge and skill, and production supplies the missing interpretation for the "open lane" of two-lane assessment architectures.

## Key Findings

1. **A construct-validity crisis.** GenAI severs the inference from a student-produced artifact to the student's own knowledge and skill, whether or not any policy was violated. Detection is unreliable, prohibition is unenforceable, and redesigning assignments to resist GenAI is an arms race — none of which answers what a GenAI-integrated artifact is evidence of.
2. **Production as a fourth attribute.** Production is defined as the capability to deliver work of professional standard by directing tools and other people, with three components: direction, evaluation and integration, and warranting.
3. **Complements the two-lane architecture.** Production supplies the missing interpretation for the "open lane" of two-lane assessment, where secure conditions certify knowledge and skills while the open lane assesses production.

## The construct-validity crisis

Generative AI has been adopted by students faster than institutions could respond. Drawing on survey data from 95,513 students at 20 U.S. public [[research-methods-aied|research]] universities, Chirikov et al. (2026) reported that roughly two-thirds of undergraduates used GenAI in 2023–2024, while only about 9% used it specifically to cheat. The paper argues that GenAI use in coursework is now a broader phenomenon than [[academic-integrity]] misconduct, and that [[assessment]] practices, not just integrity policy, require reform.

The paper treats detection and prohibition as failed responses. Independent audits of GenAI-text detectors have found unacceptable false-positive rates, including a documented tendency to misclassify the writing of non-native English speakers as machine-generated far more often than native speakers — a direct [[assessment-validity]] problem for [[ai-detection]]. Policies prohibiting GenAI rest on the premise that its use makes work "non-original," which fails to acknowledge the student's intellectual contribution. The deeper claim is that an assignment produced with GenAI is an artifact whose relationship to the student's own knowledge and skill can no longer be assumed, whether or not any policy was violated. That is a measurement problem requiring competency to be defined and assessed differently.

The author situates this inside the [[authentic-assessment]] tradition rather than outside it. Authentic tasks were built to resemble professional criterion conditions and assumed the resulting artifact transparently reflects the examinee's integration of knowledge, skills, and attitudes. GenAI violates that assumption without disturbing any of the framework's five dimensions — task, physical context, social context, result, and criteria — so the failure is internal to the tradition it displaced.

## Production as a fourth attribute

Production is defined as *the capability to deliver work of professional standard by directing tools and other people*. It has three components:

1. **Direction** — decomposing a problem, deciding what to delegate and what to keep, and specifying clearly enough that what comes back is usable.
2. **Evaluation and integration** — judging what comes back, catching what is wrong, and assembling parts into a coherent whole.
3. **Warranting** — standing behind the finished product, explaining why it is built as it is, and defending it under questioning.

The proposal is anchored in [[human-ai-collaboration]] and the shift of the human role from creator to director of a system. Importantly, production is tethered to a discipline: there is no free-floating [[prompt-engineering|prompting]] ability that carries from music to healthcare to law, because the evaluation step depends on knowing enough to catch errors. The author grounds this in McClelland's criterion sampling — sample what professionals actually do — noting that many knowledge professions now do part of their work by directing GenAI systems, so applied consistently the principle now yields a fourth attribute. This connects to [[agency]] and to [[distributed-cognition]], since a low-knowledge student can now direct a system to a seemingly polished result regardless of whether it reflects learning.

## The two-lane assessment architecture

Several institutions have restructured assessment into two lanes in response to GenAI. The secure lane — proctored exams and in-person work under controlled conditions — has a clear evidentiary interpretation: it certifies what the student knows and can do unaided, and is appropriate for knowledge and some skills. The open lane, where students may use GenAI and other resources, has had no clear interpretation: institutions could say what it is *for* (developing GenAI-integrated work) but not what an open-lane grade is *evidence of*.

Production supplies that missing interpretation: the open lane certifies production. This yields two advantages. First, it completes an architecture institutions are already adopting, giving the open lane's rubrics a principled basis. Second, it enforces a separation the two-lane structure implies but cannot state on its own — each lane certifies a distinct class of attributes, and neither should be read as certifying the other. A secure exam alone is not evidence of production, and an open-lane project is not evidence of unaided knowledge or skill. The classification follows the conditions of assessment rather than what any individual student did under them: a student permitted to use GenAI who declines has still produced open-lane evidence, because non-use cannot be verified and deciding to delegate nothing is itself a direction decision. This has direct implications for [[remote-proctoring]] and for how [[automated-assessment]] instruments are interpreted.

## Implementation without new infrastructure

The author argues the framework requires no new infrastructure, only three steps that relabel and attribute what programs already collect:

1. **Record the conditions.** Every assessment should state what tools were available when it was produced; secure conditions certify knowledge and some skills, open conditions certify production.
2. **Add a warranting step.** With appropriate consent and safeguards, a verification step or short oral defense can surface errors the student did not detect and convert an artifact of uncertain provenance into attributable evidence; if oral defenses are not scalable, a supplementary secure-condition assessment can substitute.
3. **Sort existing assessments.** Mark what each instrument in use actually certifies — an exercise that may reveal instruments certifying two or three things at once, while production probably has no dedicated evidence anywhere in the program.

This resonates with critiques of weak [[governance|institutional]] [[assessment]] practice — "language as camouflage," where outcomes are defined and mapped to curriculum without checking whether the underlying data mean anything — and with the prescription to measure fewer things more carefully. The [[eportfolio]] and capstone tradition already contains much of this activity; the proposal simply names it as an attribute.

## What this means for practice

- **Administrators.** Label every assessment with the conditions under which it was produced and state what it certifies: secure conditions certify knowledge and some skills, open conditions certify production, and neither lane should be read as certifying what the other does.
- **Designers.** Add a warranting step — a short oral defense, or a supplementary secure-condition assessment where oral defenses do not scale — so an artifact of uncertain provenance becomes attributable evidence.
- **Designers.** Sort the instruments the program already uses by what each actually certifies; the exercise typically reveals assessments certifying two or three attributes at once and no instrument anywhere dedicated to production.
- **Administrators.** Reuse existing [[eportfolio]] and capstone activity instead of building new infrastructure, since the framework relabels and attributes evidence programs already collect.
- **Instructors.** Design open-lane tasks around the three components of production — direction, evaluation and integration, and warranting — and judge GenAI-integrated work against those rather than against artifact polish alone.

## Limitations

- This is a conceptual proposal, not an empirical study: classroom-scored production has not been shown to predict GenAI-integrated product quality or early-career performance, so the attribute rests on argument rather than evidence.
- The paper states an unresolved objection — production may be merely knowledge and skill exercised under a tools-permitted condition, an evidence class rather than an attribute — and notes it cannot be settled without further supportive or disconfirming research.
- Scoring circularity is unaddressed: raters who see the artifact cannot score direction, evaluation, and warranting independently of finished-product quality, and a minimum knowledge floor would have to be measured rather than asserted.
- Assessing a new category partly by oral defense could disadvantage non-native English speakers and students with disabilities, and a production rubric can itself degrade into "language as camouflage."

## Connected Concepts

- [[assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[generative-ai]]
- [[higher-ed]]
- [[psychometrically-aware-ai]]
- [[automated-assessment]]
- [[equity-in-ai-education]]

## Connected Articles

- [[ai-assessment-scale-reform]] — AI assessment scale reform
- [[ai-assessment-human-tutors]] — AI assessment compared with human tutors
- [[agency-gap-ai-writing]] — The agency gap in AI writing
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher ed
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge narrative drafting scaffolding

## Citation

Hughes, J. W. (2026). [*Knowledge, skills, attitudes, production: Competency-based education after generative AI*](https://osf.io/preprints/edarxiv/k4rqa_v1/). EdArXiv preprint.
