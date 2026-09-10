---
title: "Detecting the Undetectable? Reassessing Academic Misconduct Procedures in the Era of Generative AI"
created: "2026-09-10T05:52:45-04:00"
updated: "2026-09-10T05:52:45-04:00"
type: article
tags: [academic-integrity, ai-detection, assessment-validity, ai-use-disclosure, equity-in-ai-education, higher-ed, educational-policy-ai]
research_method: [policy analysis, theoretical analysis]
level: [higher ed]
audience: [administrators, instructors, policymakers]
category: [assessment]
sources: ['raw/papers/teichmann-detecting-undetectable-misconduct-2026.md']
confidence: high
---

> **Synthesis:** Teichmann (2026) argues that the [[academic-integrity|misconduct procedure]] many universities reached for after [[generative-ai|generative AI]] rests on a premise the technology has dismantled: that prohibited use can be detected and proved. Detectors are unreliable, systematically biased, and opaque; skilled or lightly edited AI use is undetectable in the general case; and a procedure built on detecting it produces unfairness without effectiveness — students accused on scores they cannot interrogate, a quietly reversed [[academic-integrity|burden of proof]], and false-accusation harm that falls hardest on the already disadvantaged. Drawing on procedural justice theory and proportionality, he proposes a reassessment in two movements: make the procedure procedurally fair, evidence-calibrated, and proportionate where allegations are genuinely warranted, and move [[governance|institutional]] effort from policing undetectable use to [[assessment-validity|validity-centred]], authentic, and acceptable-use [[learning-design|assessment design]]. His conclusion is that the answer to undetectable AI is better assessment, not better surveillance.

## The detection premise and why it has collapsed

Misconduct procedures for [[academic-integrity|plagiarism]] evolved alongside a technology that could often substantiate an allegation: text-matching software could show that a passage coincided with a source. The procedures imported for generative AI assume an equivalent evidentiary base, and it does not exist. Teichmann separates two [[ai-technologies|technologies]] that policy language routinely conflates — text-matching (similarity) software, which points to a matching source, and AI-text detectors, which are classifiers that output a probabilistic judgement that a passage was machine-generated and identify no source, because none exists. His critique concerns the latter.

Four limitations compound one another.

- **Low, unstable accuracy.** In the most comprehensive early [[benchmark]], none of fourteen tools reached 80% accuracy, and performance degraded sharply once text was paraphrased or manually edited. Simple adversarial techniques — paraphrasing, "humanising" services, minor editing — roughly halve detectors' already modest accuracy. At realistic base rates, most positive findings will be false.
- **Systematic bias.** Detectors misclassify the writing of non-native English speakers because the features they treat as signals of AI also characterise competent second-language writing — so the harm of misclassification lands on an already disadvantaged group.
- **Asymmetric error.** Even a small error rate brands a substantial absolute number of innocent students across a large cohort, while the determined are precisely those most able to evade. The errors fall on the careless-but-honest rather than the deliberately dishonest.
- **Opacity.** Commercial tools disclose neither training data nor thresholds, output a percentage without reasons, and cannot be independently replicated or cross-examined by student, marker, or panel. A case that cannot be explained cannot be answered.

Human judgement does not fill the gap: teachers, novice and expert alike, could not reliably distinguish AI-generated from student-written essays and were confident in their wrong judgements — and stylistic "gut feeling" is how many allegations begin. Nor is this a gap that better tooling closes. As models are optimised to close the distance from human writing, the statistical signal available to any detector shrinks, and formal analyses suggest that for sufficiently capable models reliable detection may be impossible in principle. An institution that builds its procedure on detector output is relying on an instrument that is becoming weaker while presenting a spurious air of objectivity.

**Undetectability in the general case.** The deeper difficulty is not that detection is imperfect but that the conduct is, in the central cases, undetectable in principle. Generative AI can perform the very tasks much assessment sets — write the essay, answer the take-home examination, pass the multiple-choice examination that was supposed to be more robust. Where a student uses the tool with any skill or lightly edits its output, there is no reliable trace to find. In a covert field study, [[research-methods-aied|researchers]] injected wholly AI-generated submissions into a live online examinations system across five psychology modules: 94% went undetected, and the AI work on average outscored real students. Teichmann notes the difficulty is not unprecedented — contract cheating likewise leaves no matchable trace and was handled poorly for the same reason — but generative AI has universalised a problem the procedure never solved. Use also spans a spectrum from wholly machine-generated work through gradations of assisted-then-edited writing to mere brainstorming or grammar-checking, and the procedure has no means of locating a submission along that continuum after the fact. A regime that can neither distinguish outsourcing from assistance nor prove where on the continuum a piece falls cannot adjudicate guilt.

**Declarations do not close the gap.** [[ai-use-disclosure|Declarations]] have real educative value, but they are not a detection mechanism: they depend on candour, and enforcing them runs back into the same undetectability, since an institution generally cannot prove that an undeclared use occurred. The evidence locates their value elsewhere — in visible integrity commitments embedded in a culture of trust, and in [[explainable-ai|transparency]], shared expectations, and student reflection rather than enforcement. A misconduct procedure premised on detecting and proving prohibited use, he concludes, is built on sand.

**The surveillance escalation.** Faced with undetectability, some institutions have escalated toward ever more intrusive monitoring — lockdown browsers, [[remote-proctoring|remote proctoring]], keystroke and writing-process monitoring — in an attempt to reconstruct the conditions under which detection might work. Each measure pushes enforcement further into the student's work and life, deepens suspicion, and imposes its own [[equity-in-ai-education|equity]] costs; the trajectory of online proctoring (rapid adoption, documented distress, contested accuracy) is the cautionary precedent. The escalation is the detection premise refusing to die.

## The fairness problem

Persisting with detection-driven proceedings does not merely fail; it works injustice. Where an allegation rests on a detector's output, the student must answer a case she cannot interrogate; the burden of proof is quietly reversed, since she is required to prove a negative — that she did not use a prohibited tool — precisely the proof undetectability makes impossible; and the harm of false accusation falls hardest on those most likely to be misclassified and least equipped to contest the charge. Procedural justice research shows that willingness to accept decisions and comply with rules depends less on outcomes than on the perceived [[bias-mitigation|fairness]] of the procedures producing them, and detector-driven allegations strain every one of its four elements at once: voice is idle, neutrality is compromised by an unvalidated instrument applied without consistent rules, respectful treatment gives way to presumptive suspicion, and the institution's motives read as self-protective. The uncertainty also chills legitimate practice — in successive national surveys, fear of accusation is the deterrent to legitimate AI use students cite most often.

Three commitments would make the procedure fair where allegations are genuinely pursued:

1. The burden and standard of proof must rest with the institution and be calibrated to the evidence: a detector's output cannot by itself establish misconduct, and a finding requires corroborating evidence, process artefacts, or an interview.
2. The student must have a genuine opportunity to understand and answer the case, which is impossible where the "evidence" is an unexplained score.
3. Responses should be graduated rather than binary, following the educational integrity enforcement pyramid: a conversation for minor undeclared use, formal proceedings reserved for wholesale outsourcing, education as the default in between.

Underlying these commitments is a reorientation of the question asked. The forensic question — did the student cheat? — invites a hunt for traces that, for AI, are not there. A more defensible question asks whether the assessment validly measured what the student can do: [[assessment-validity|validity]] matters more than cheating.

## From policing to design

If prohibited use cannot be detected, the rational institutional response is to depend less on assessments whose integrity requires detecting it. Superficial adjustments — a warning here, a declaration there — leave the vulnerability intact; what is needed is structural change to assessment. Three strands of scholarship indicate the direction: validity-centred and [[authentic-assessment|authentic assessment]] that reorients tasks towards capacities a generator of generic prose cannot supply; the cultivation of [[evaluative-judgement|evaluative judgement]], which equips students to appraise AI output critically and is itself a legitimate object of assessment; and a move from prohibition to articulated permission, specifying acceptable uses rather than drawing, and then failing to police, an absolute line.

Concrete design moves raise the cost of wholesale outsourcing without depending on detection: programmatic assessment across linked tasks rather than a single submissible artefact; oral and supervised elements where verified individual capability must be certified; and assessment of process as well as product, valuing the drafts and justifications a student can account for in person. The contrast with the detection reflex is exact — detection tries to verify that a fixed, AI-vulnerable task was completed without help, whereas design changes the task so that help is either irrelevant or itself part of what is assessed. The former fights the technology and loses; the latter absorbs it. Converting the central question from "did the student use AI?", which cannot be answered, into "did the student demonstrate the capability the task was designed to certify?", which can, resolves the problem the misconduct procedure was failing to solve.

None of this requires an AI-proof assessment or a retreat to mass invigilation. Secure, supervised assessment has a real but bounded role: warranted where an individual competence must be certified to a third party, and deployed deliberately at those points rather than reflexively across a programme.

## Implementation challenges

- **Equity of access to permitted tools.** Acceptable-use design presupposes that students can use what is permitted, and access is stratified — the most capable models sit behind subscriptions, and effective use depends on unevenly distributed devices, connectivity, and prior exposure. If an assessed task rewards fluent use of a premium tool, "permission" becomes a regressive subsidy. Responses: provision the tool where AI use is integral; otherwise ensure tasks are completable to full standard with freely available tools and that marking criteria do not covertly reward premium-model output; and record which tool and access tier were used so equity is reviewable.
- **Conscientious non-use.** A regime that in practice compelled AI use would mirror the coercion criticised in [[ai-detection|detection]]. Acceptable use must mean permitted, not required: wherever AI use is invited, programmes should maintain an AI-free route to the same outcomes, assessed to the same standard.
- **Workload.** The status quo is not costless — detector-driven proceedings consume substantial staff time in triage, hearings, and appeals, and that time polices rather than teaches. Oral formats scale when deployed selectively on a sampled basis, and process-based designs need not multiply marking events if checkpoints are light-touch and [[formative-assessment|formative]] and programmatic approaches replace rather than add to existing [[summative-assessment|summative]] volume. An institution unwilling to resource design is choosing, by default, to resource policing.
- **A staged pathway.** Audit the [[eportfolio|portfolio]] for AI vulnerability and publish the evidentiary standard; train staff on the error evidence and procedurally fair case handling; redesign programme by programme, prioritising assessments that certify capability to third parties; and review allegation volumes, their demographic distribution, and workload effects each cycle.

## What the study adds

- **A normative account of the procedure itself.** One literature evaluates detection tools; another develops assessment redesign. Neither supplies a sustained account of the misconduct machinery that sits between them, and Teichmann's contribution is to bring procedural justice and proportionality to bear on AI-era enforcement — yielding a legitimacy-based explanation of why detection-led procedures fail and design-led responses succeed.
- **A testable evidentiary standard.** Detector output alone never grounds a finding; allegations require corroboration. This is a rule institutions can publish and panels can apply, and it is deliberately transferable across the institutional variety that policy reviews document.
- **The counterexample already in practice.** Vanderbilt University, unable to validate its licensed detector's advertised 1% false-positive rate — which implied some 750 mislabelled students among 75,000 annual submissions — disabled the tool and explained the decision publicly, redirecting staff towards transparent expectations and redesign. One case documents the failure of detection under realistic conditions; the other shows an institution acting on that knowledge.
- **Rejection of technological determinism.** Institutions facing the same technology have chosen markedly different responses, from detection-led enforcement to redesign-led integration, so the problem is one of institutional choice under normative constraints rather than of the technology.

## Implications for practice

- **Never base an allegation on a detector score or a stylistic impression alone.** Treat a score, at most, as a prompt for a conversation about the work, and require corroboration beyond style or scores.
- **Publish the evidentiary standard.** Fixing and publishing the threshold allegations must meet — including that detector output never suffices — is a preparation-stage action that constrains everything downstream.
- **Monitor the demographic pattern of allegations.** Detector bias is systematic, not random, so allegation distributions are themselves an equity signal to be audited.
- **Reserve formal proceedings for the serious and the genuinely evidenced** — impersonation, demonstrable fabrication, admitted or witnessed breaches, and cases with corroborating evidence — and meet lesser matters with education and graduated response.
- **Shift effort to design, and resource it.** The narrowing of the misconduct procedure is not a retreat from integrity but a more defensible way of securing it, and it requires recognition in workload models.

## Connected Concepts

- [[academic-integrity]]
- [[ai-detection]]
- [[assessment-validity]]
- [[ai-use-disclosure]]
- [[authentic-assessment]]
- [[remote-proctoring]]
- [[evaluative-judgement]]
- [[equity-in-ai-education]]
- [[assessment]]
- [[higher-ed]]
- [[educational-policy-ai]]
- [[governance]]

## Connected Articles

- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — Deterrence, disclosure, and redesign modelled as an assessment-design problem
- [[karr-ai-detection-humanization-2026]] — Why AI detection fails, and the humanisation arms race
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authenticity redesigned rather than policed
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Reconceptualising assessment validity for the age of generative AI
- [[luo-dawson-value-judgements-grading-2026]] — Value judgements in grading GenAI-assisted work, and two-way transparency
- [[vetter-hidden-cost-disclosure-genai-2026]] — The hidden cost of disclosure: fear of retribution chills honest reporting
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — Non-compliance with mandatory AI declarations
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — Disclosure as a help-seeking and self-regulation decision
- [[automated-online-exam-proctoring-decade-review-2026]] — A decade of automated proctoring: accuracy, distress, and equity
- [[conijn-fear-big-brother-proctored-exams-2022]] — Fear of the big brother: student experience of proctored exams
- [[biology-grade-vulnerability-genai-2026]] — How structurally vulnerable current grading is to AI-mediated dishonesty
- [[chirikov-regulate-ai-syllabi-2026]] — Syllabi shifting from integrity framing to task-level regulation
- [[chen-zou-genai-group-assessment-agency-2026]] — Peer accountability and the negotiation of acceptable AI use in groups
- [[ai-assessment-scale-reform]] — Rethinking assessment in the generative AI era

## Citation

Teichmann, F. M. (2026). [*Detecting the undetectable? Reassessing academic misconduct procedures in the era of generative AI*](https://doi.org/10.1080/02602938.2026.2728036). *Assessment & Evaluation in Higher Education*, advance online publication.
