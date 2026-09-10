---
title: "Assessment Design Under Imperfect Information: Generative AI, Disclosure, and Student Response in Higher Education"
created: "2026-09-10T05:52:45-04:00"
updated: "2026-09-10T05:52:45-04:00"
type: article
tags: [assessment, academic-integrity, ai-use-disclosure, assessment-validity, ai-detection, generative-ai, higher-ed, authentic-assessment]
research_method: [theoretical analysis, research methods]
level: [higher ed]
audience: [assessment designers, instructors, researchers, administrators]
category: [assessment]
sources: ['raw/papers/mohamed-temimi-assessment-imperfect-information-disclosure-2026.md']
confidence: high
---

> **Synthesis:** Mohamed and Temimi (2026) reframe [[generative-ai|generative AI]] in assessment as a problem of [[assessment-validity|assessment validity]] under **imperfect information** rather than of [[academic-integrity]] alone. Because the student knows how the work was produced and the university observes only the artefact and partial traces, the design question is not whether to prohibit, monitor, permit, or redesign in the abstract but *which student response each assessment environment makes most attractive*. Their response-region model compares three choices — no AI use, [[ai-use-disclosure|disclosed AI use]], and hidden AI use — and shows that rules, monitoring, disclosure, and redesign operate through different channels and succeed only when they align the most attractive response with the assessment's purpose. The sharpest result concerns imperfect detection: deterrence runs through a detector's **discrimination** between hidden use and legitimate work, not its raw catch rate, and when false positives rise faster than true positives, stronger monitoring can make concealment relatively *more* attractive.

## The product–process gap as the core problem

Assessment in [[higher-ed|higher education]] rests on an evidentiary claim: a submitted product should support a defensible inference about what a student knows, understands, and can do. Generative AI weakens that inference because the same final product may represent learning, guided revision, strategic editing, or the wholesale outsourcing of the reasoning the assessment was intended to elicit. This is a **product–process gap** — the university grades the product while the student knows the process — and the authors place it in the economics of asymmetric information rather than in a moral frame: one side holds private information, the other must design rules under uncertainty. The [[teacher-role|instructor]] observes only the submission and partial signals such as writing style, drafts, metadata, oral explanation, process logs, or revision history.

This is why the problem belongs centrally to assessment and evaluation, and why the validity question and the integrity question are not separate. Each [[governance|institutional]] mechanism — a ban, monitoring, [[ai-use-disclosure|disclosure]], redesign — is an assessment-design choice that changes what students perceive as useful, risky, fair, or worthwhile *before* the work is produced.

## Six propositions

The paper's analytical core is a set of propositions about which response each mechanism makes attractive.

1. **Rule-setting and concealment.** A rule-setting regime reduces hidden AI use only when the rule is credible. When hidden use offers a large grade or effort advantage and perceived detection is low, prohibition can make concealment *more* attractive than compliance.
2. **Monitoring and [[explainable-ai|transparency]].** Monitoring lowers the attractiveness of hidden use by raising its expected cost, but it does not necessarily increase disclosure. Students move towards disclosure only when honest reporting is safer or more valuable than no use or continued concealment.
3. **Disclosure and [[trust]].** Disclosure-centred conditions increase visible AI use when students perceive disclosure as clear, safe, and fairly evaluated. When disclosure is ambiguous, punitive, or reputationally risky, students may avoid it even when AI use is formally permitted.
4. **Redesign and responsible learning.** Redesign moves students towards responsible use when it lowers the value of hidden outsourcing and raises the value of visible reasoning, process evidence, and student judgement.
5. **Mechanism complementarity.** Rules define the boundary, monitoring makes hidden violation risky, disclosure makes honesty viable, and redesign changes what the task rewards. When one mechanism is weak, the same bundle can produce an unintended response.
6. **Imperfect detection and the discrimination threshold.** See below — the least anticipated result.

## How the model works

Students compare three responses across five elements: the grade or performance benefit; the learning value; the effort cost; and two cost terms — the cost of honesty or concealment, and the expected penalty from hidden use, which combines perceived [[ai-detection|detection]] probability with sanction severity. Four analytical conditions isolate the mechanisms: prohibition-centred, monitoring-centred, permission-with-disclosure, and assessment-redesign.

| Assessment condition | Dominant mechanism | Design effect | Main risk |
|---|---|---|---|
| Prohibition-centred | Defines the rule boundary | Makes AI use formally unacceptable | Hidden use stays attractive if detection is weak |
| Monitoring-centred | Raises detection risk | Makes hidden use more costly | Students become cautious without becoming transparent |
| Permission with disclosure | Makes AI use visible | Makes honest reporting more viable | Disclosure avoided if it feels risky |
| Assessment redesign | Changes the task | Hidden outsourcing less useful, visible reasoning more valuable | Redesign stays cosmetic if process is not rewarded |

The illustrative payoffs make the logic concrete. Under prohibition the hidden-use payoff dominates; under monitoring hidden use falls but remains most attractive, because detection stays below threshold and disclosure stays costly; under permission disclosed use becomes most attractive because the disclosure cost falls to zero; under redesign disclosed use reaches its highest payoff and hidden use its lowest. Two thresholds do the explanatory work. **Deterrence:** hidden use stops beating no AI use when the perceived detection probability falls below roughly 2/F, the ratio of the grade advantage of concealment to the sanction — so severe penalties carry limited force when students see detection as remote. **Disclosure:** disclosed use beats hidden use when the cost of honesty stays below 1 + qF, so detection and disclosure safety reinforce each other. The authors stress these are conceptual thresholds from illustrative, normalised values, not empirical estimates: what carries the argument is the direction and ranking of the comparisons.

## The monitoring backfire: discrimination, not catch rate

The most consequential result relaxes the assumption that detection affects only hidden use. Real detectors also implicate legitimate work, and sensitivity is not free: as an institution tries to catch more hidden use, it may also wrongly flag more honest work, so the false-positive rate rises with the true-positive rate. Deterrence therefore depends not on the raw catch rate but on **discrimination**, the gap between correctly flagging hidden use and wrongly flagging legitimate work.

Three conclusions follow. First, the deterrent operates through discrimination; the earlier threshold is the special case of a perfect detector. Second, when false-positive risk falls equally on the discloser and on the student who uses no AI, detection sensitivity leaves the choice between disclosure and no use unchanged, so that margin is settled by the cost of honesty alone — disclosure is protected relative to abstention. Third, and least intuitively, **stronger monitoring can weaken deterrence** when extra sensitivity creates more new false positives than new true positives: honest students are penalised faster than hidden users are identified, and concealment becomes relatively more attractive. Under the illustrative operating curve the payoff gap between hiding and disclosing is U-shaped in detector sensitivity — disclosure is most attractive only in a middle band, with too little discrimination below it and rising false positives above it. The practical implication: before scaling monitoring across a programme, an institution should ask how well the process separates hidden use from legitimate work at the threshold it actually uses, and detectors, rules, and disclosure procedures should not be designed separately.

## Matching mechanisms to assessment purpose

The framework converts the debate from policy labels to a design question. Diagnose the response region first: if the final product carries most of the grade, AI can produce it effectively, and detection is weak, the task sits close to the hidden-use region, and a ban may change the language of the rule while leaving concealment attractive. If students view disclosure as risky, permission alone has limited force. If the task asks for process evidence while the rubric still rewards mainly the final answer, redesign remains shallow.

| Assessment purpose | Where the task pulls students | Rules and monitoring | Disclosure and process evidence | What the rubric rewards |
|---|---|---|---|---|
| Foundational fluency (core writing, basic procedures, introductory coding syntax) | Towards hidden use | Restrict AI for the graded core; verify through supervised or in-class work and a short oral check | No disclosure needed; the rule is simply no use | Unaided performance |
| Reflective writing | Towards hidden use | Permit as a drafting aid; avoid aggressive detectors that wrongly flag honest work | Declare AI as a drafting aid; anchor the reflection in personal or course detail AI cannot supply | Specificity, self-insight, and links to lived experience |
| [[research-methods-aied|Research]] synthesis and argumentation | Towards hidden use | Permit within limits; read disclosed use as context rather than suspicion so honesty stays protected | Declare sources and AI assistance; flag what was checked; show a draft-to-final trail | Verification, original argument, and critique of sources |

Two cautions attach to the table. It describes a representative student, while real cohorts vary by discipline, language background, prior AI experience, and willingness to take risks — so the same task can pull different students in different directions. The practical rule is to design for the student most tempted to conceal rather than the most conscientious one, since a bundle that keeps honesty attractive for the former will comfortably hold for the latter. And treating a declared AI use as context rather than a confession is one of the few design choices that makes stronger detection work for transparency rather than against it.

## What the study adds

- **A shift from labels to incentive structures.** Rather than asking whether universities should ban, detect, permit, or redesign, the model asks which response each assessment environment encourages — a question assessment designers can answer about a specific task.
- **A sharper criterion for detection policy.** Discrimination, not catch rate, is the design variable, which gives institutions a measurable thing to interrogate before deploying monitoring at scale.
- **A mechanism-level account of why disclosure fails.** Disclosure succeeds only when the cost of honesty is low enough, which requires clear expectations, fair consequences, and a link to assessment criteria rather than treatment as a confession — converging with the empirical [[ai-use-disclosure|disclosure literature]] from the modelling side.
- **Complementarity rather than a silver bullet.** Each mechanism is strongest where the others are weak, and bundles fail when one mechanism raises the cost of the response the others are trying to make attractive.

## Limitations

The model is deliberately stylised: a single representative student, normalised illustrative payoffs, and abstraction from disciplinary variation, student heterogeneity, and institutional culture. The authors present the propositions as testable rather than as findings to apply unchanged, and note that the disclosure cost is measurable, as are the discrimination margins, which makes the framework empirically tractable rather than merely conceptual.

## Implications for practice

- **Start from the assessment purpose.** A task certifying foundational fluency justifies tight limits plus credible verification; a task developing argumentation or professional reasoning calls for permission with meaningful disclosure and process evidence.
- **Design for the most tempted student, not the average one.** Bundles that keep honesty attractive for the student most inclined to conceal will hold for everyone else.
- **Treat disclosure as context, not confession.** Lowering the expected cost of being flagged for students who reported honestly is what lets monitoring support transparency instead of suppressing it.
- **Make process evidence count in the rubric.** Redesign stays cosmetic if the grading system still rewards mainly the final answer — the misalignment is the failure mode.
- **Interrogate discrimination before scaling monitoring.** If false positives rise faster than true positives, more enforcement is not only unfair but counterproductive.
- **Recognise that permission and disclosure are different levers.** Permission changes the formal boundary of acceptable use; disclosure changes visibility. Success at one does not imply the other.

## Connected Concepts

- [[academic-integrity]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[ai-use-disclosure]]
- [[ai-detection]]
- [[assessment]]
- [[authentic-assessment]]
- [[evaluative-judgement]]
- [[higher-ed]]
- [[formative-assessment]]

## Connected Articles

- [[teichmann-detecting-undetectable-misconduct-2026]] — Detection's evidentiary collapse and the case for procedural justice and design
- [[ethical-ai-higher-ed-game-theory]] — Coordination-game account of why policy pronouncements rarely change AI behaviour
- [[karr-ai-detection-humanization-2026]] — Why AI detection fails, and the humanisation arms race
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — Non-compliance with mandatory AI declarations
- [[vetter-hidden-cost-disclosure-genai-2026]] — The hidden cost of disclosure: fear of retribution chills honest reporting
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — Disclosure as help-seeking, redirected by anxiety toward peers
- [[luo-dawson-value-judgements-grading-2026]] — Teacher value judgements and the two-way transparency problem
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authenticity redesigned rather than policed
- [[varia-construct-equivalent-assessment-variant-generation-2026]] — VARIA: task variation as a no-surveillance integrity mechanism
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Reconceptualising assessment validity for the age of generative AI
- [[chirikov-regulate-ai-syllabi-2026]] — Syllabi shifting from integrity framing to task-level regulation
- [[chen-zou-genai-group-assessment-agency-2026]] — Group norms and the negotiation of acceptable AI use

## Citation

Mohamed, B. H. R., & Temimi, A. (2026). [*Assessment design under imperfect information: generative AI, disclosure, and student response in higher education*](https://doi.org/10.1080/02602938.2026.2729791). *Assessment & Evaluation in Higher Education*, advance online publication.
