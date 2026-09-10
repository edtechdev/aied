---
title: Academic Misconduct Procedures
created: "2026-09-10T05:52:45-04:00"
updated: "2026-09-10T05:52:45-04:00"
type: concept
tags: [academic-integrity, ai-detection, ai-use-disclosure, assessment-validity, governance, educational-policy-ai, ethics, higher-ed]
audience: [administrators, instructors, policymakers]
level: [higher ed]
category: [assessment]
confidence: high
---

> **Academic misconduct procedures** — the [[governance|institutional]] machinery through which suspected breaches of [[academic-integrity|academic integrity]] are investigated, judged, and sanctioned: how allegations are raised, what evidence is required, who decides, and what follows. Historically built around text-matching evidence, these procedures assume that prohibited use can be detected and proved. [[generative-ai|Generative AI]] dismantled that premise — AI use that is skilled or lightly edited leaves no reliable trace — so the procedure now faces a choice between accusing students on evidence that cannot bear the weight and contracting to the narrow set of cases it can adjudicate justly. Understanding the machinery matters for [[ai-detection|detection]] policy, [[ai-use-disclosure|disclosure]] requirements, [[assessment-validity|assessment validity]], and [[equity-in-ai-education|equity]], because the harm of a false allegation is not distributed evenly.

## Questions to Consider

- What has to be true about the evidence before an institution should accuse a student of misconduct? Try to state the standard in a sentence, then ask whether a percentage from a commercial classifier meets it.
- Text-matching software could point to a copied source. AI-text detectors identify no source because none exists — only a probabilistic judgement about style. What does a procedure lose when it imports the habits of the first case into the second?
- When an allegation rests on a detector score, the student is effectively asked to prove a negative: that she did not use a prohibited tool. Who does that burden fall on hardest, and why does that matter beyond [[bias-mitigation|fairness]] to individuals?
- [[research-methods-aied|Research]] on procedural justice finds that compliance depends more on perceived fairness of process than on outcomes. If that is right, what does a detection-led procedure corrode even when it reaches the "correct" verdict?
- Procedural fairness depends on voice, neutrality, respectful treatment, and trustworthy motives. Which of these survives when the "case" is an uninspectable score that neither the student nor the panel can explain?
- Conscientious non-use — declining AI on environmental, political-economic, or [[pedagogy|pedagogical]] grounds — is a real position among students and staff. What does a well-designed regime owe it, and where does that obligation sit in a policy that mostly discusses prohibition?
- If a procedure cannot know whether AI was used, is punishing the cases it can prove a principled compromise or a lottery that falls on the careless-but-honest?

## Introduction

Misconduct procedures sit between two literatures that rarely meet: work evaluating [[ai-detection|detection tools]], and work developing assessment redesign for the generative AI era. Each presupposes an account of what the procedure itself may legitimately do, and that account is usually left implicit. The knowledge base's evidence suggests it should not be, because the procedure is where the consequences land — for students facing an allegation, for staff asked to investigate an unwinnable case, and for the [[trust]] on which voluntary compliance depends.

The concept covers the procedure's evidentiary basis, the fairness requirements it inherits from administrative justice, the proportionality constraints on institutional response, and the shift of effort from enforcement toward [[learning-design|assessment design]]. It connects directly to [[assessment-validity|assessment validity]], since the deepest problem with a detector-driven allegation is that it cannot warrant the inference being drawn, and to [[ai-use-disclosure|AI use disclosure]], which is often mistaken for a detection mechanism.

## The evidentiary collapse

Plagiarism procedures evolved alongside a technology that could often substantiate an allegation: text-matching software can show that a passage coincided with a source. Procedures imported for generative AI assume an equivalent evidentiary base, and it does not exist, because the two [[ai-technologies|technologies]] differ in kind.

- **Text-matching (similarity) software** compares a submission against existing sources and can point to a matching passage. Plagiarism is tractable because it leaves a referent: the copied text exists somewhere.
- **AI-text detectors** are classifiers. They output a probabilistic judgement that a passage was machine-generated, identify no source because none exists, and cannot be independently replicated or cross-examined.

Four properties of detectors bear directly on whether a finding can be sustained. Accuracy is low and unstable, degrading sharply under paraphrase or light editing, which is exactly what a student using AI competently produces. Error is asymmetric: simple evasion roughly halves already modest accuracy, so the careless-but-honest are caught more readily than the deliberately dishonest. Judgement is opaque: proprietary thresholds and unexplained percentage outputs mean a case cannot be explained, answered, or weighed. And bias is systematic: writing by non-native speakers is disproportionately misclassified, because the features detectors treat as signals of AI also characterise competent second-language writing. Human judgement does not fill the gap — [[teacher-role|teachers]], expert and novice alike, cannot reliably distinguish AI-generated from student-written prose and are overconfident when wrong, and stylistic unease is how many allegations begin.

Underneath these limitations is a structural one. Where a student uses the tool with skill or edits its output, there is no reliable trace to find. Use also spans a spectrum from wholly machine-generated work through assisted-then-edited writing to brainstorming or grammar-checking, and a procedure has no means of locating a submission along that continuum after the fact. A regime that can neither distinguish outsourcing from assistance nor prove where a piece falls cannot adjudicate guilt.

## What procedural fairness requires

Procedural justice theory holds that willingness to accept decisions and comply with rules depends less on outcomes than on the perceived fairness of the procedures producing them, through four elements: **voice** (an opportunity to present one's case), **neutrality** (transparent and consistently applied decision rules), **respectful treatment**, and **trustworthy motives**. A detector-driven allegation strains all four at once — the case is a number the student cannot inspect and the panel often cannot explain, the opportunity to answer is hollow because a probabilistic claim about style cannot be disproved, suspicion displaces respectful treatment, and the institution's motives read as self-protective. The proceeding wears the forms of due process while lacking its substance.

Three commitments follow for the cases that are genuinely pursued:

- **Burden and standard of proof rest with the institution**, calibrated to the evidence: detector output alone never establishes misconduct, and a finding requires corroborating evidence, process artefacts, or an interview.
- **A genuine opportunity to understand and answer the case**, which is impossible where the "evidence" is an unexplained score.
- **Graduated rather than binary response**, following the educational integrity enforcement pyramid: a conversation for minor undeclared use, formal proceedings reserved for serious and well-evidenced cases, education as the default in between.

The uncertainty also does harm before any allegation is made. Fear of accusation is the deterrent to legitimate AI use that students cite most often in national surveys, so a detection-led regime suppresses permitted practice along with prohibited practice.

## Proportionality and the surveillance temptation

Proportionality asks that an institutional response pursue a legitimate aim, be suitable and necessary for achieving it, and impose no burdens excessive in relation to the benefit obtained. Tested against it, escalation fails on several counts. Monitoring that cannot discriminate between prohibited and legitimate work is not suitable for the aim; the burden of intrusion falls on everyone; and the documented trajectory of [[remote-proctoring|remote proctoring]] — rapid adoption, student distress, contested accuracy — is the cautionary precedent. Each escalation also imposes its own [[equity-in-ai-education|equity]] costs, pushing enforcement further into students' lives in a way that falls hardest on those least able to absorb it.

Secure, supervised assessment retains a legitimate but bounded role: it is warranted where an individual competence must be certified to a third party, and should be deployed deliberately at those points rather than reflexively across a programme. Used reflexively as a panicked substitute for redesign, supervised assessment reintroduces the adversarial atmosphere that redesign is meant to dispel.

## Deciding what the procedure is for

The productive move is to change the question the institution asks. The forensic question — did the student cheat? — invites a hunt for traces that, for AI, are not there. A validity question — did the assessment measure what the student can do? — is answerable, and it relocates the institutional response to [[learning-design|assessment design]]: programme-level assessment across linked tasks rather than a single submissible artefact, oral and supervised elements where verified individual capability must be certified, and assessment of process as well as product. Detection tries to verify that a fixed, AI-vulnerable task was completed without help; design changes the task so that help is either irrelevant or itself part of what is assessed.

The procedure then retains a real but narrow role: impersonation and third-party production of work, demonstrable fabrication, admitted or directly witnessed breaches, and cases supported by corroborating evidence beyond a score. For those it should operate with full procedural fairness and proportionate, graduated sanctions. What it should not be is the routine response to the undetectable general case. The narrowing is not a retreat from integrity but a more defensible way of securing it.

## Implementation conditions

- **Equity of access to permitted tools.** Acceptable-use design presupposes that students can use what is permitted, and access is stratified by subscription, device, connectivity, and prior exposure. Where an assessed task rewards fluent use of a premium tool, permission becomes a regressive subsidy; institutions should therefore provision tools where AI use is integral, or ensure tasks are completable to full standard with freely available tools.
- **Conscientious non-use must be protected.** Declining AI on environmental, political-economic, or pedagogical grounds is a defensible position. Acceptable use must mean permitted, not required: wherever AI use is invited, an AI-free route to the same outcomes, assessed to the same standard, should remain available.
- **Workload.** The status quo is not costless — detector-driven proceedings consume staff time in triage, hearings, and appeals, and that time polices rather than teaches. Selective short orals used on a sampled basis scale at programme level, and iterative designs need not multiply marking events if checkpoints are light-touch and replace rather than add to [[summative-assessment|summative]] volume. An institution unwilling to resource design is choosing, by default, to resource policing.
- **Monitoring and reporting as governance.** Auditing allegation volumes and their demographic distribution is itself an equity control, because detector bias is systematic rather than random.

## Connected Concepts

- [[ai-education]] — AI in education (umbrella)
- [[academic-integrity]]
- [[ai-detection]]
- [[ai-use-disclosure]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[equity-in-ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[ethics]]
- [[assessment]]
- [[higher-ed]]
- [[authentic-assessment]]
- [[evaluative-judgement]]

## Connected Articles

- [[teichmann-detecting-undetectable-misconduct-2026]] — The evidentiary collapse of AI misconduct procedures, and the case for procedural justice and design
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — Deterrence, discrimination, and disclosure modelled as assessment design
- [[karr-ai-detection-humanization-2026]] — Why AI detection fails, and the humanisation arms race
- [[luo-dawson-value-judgements-grading-2026]] — Value judgements in grading GenAI-assisted work, and two-way transparency
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — Non-compliance with mandatory AI-use declarations
- [[vetter-hidden-cost-disclosure-genai-2026]] — The hidden cost of disclosure: fear of retribution chills honest reporting
- [[automated-online-exam-proctoring-decade-review-2026]] — A decade of automated proctoring: accuracy, distress, and equity
- [[conijn-fear-big-brother-proctored-exams-2022]] — Fear of the big brother: student experience of proctored exams
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authenticity redesigned rather than policed
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Reconceptualising assessment validity for the age of generative AI
- [[biology-grade-vulnerability-genai-2026]] — How structurally vulnerable current grading is to AI-mediated dishonesty
- [[chirikov-regulate-ai-syllabi-2026]] — Syllabi shifting from integrity framing to task-level regulation
