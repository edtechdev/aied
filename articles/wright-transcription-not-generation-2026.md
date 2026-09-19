---
title: "Transcription is not generation: Distinguishing non-generative AI tool use from academic misconduct in higher education assessment"
created: "2026-09-18T04:13:24-04:00"
updated: "2026-09-18T04:13:24-04:00"
type: article
foundations: [academic-integrity, reducing-ai-misuse, framing-ai-use-for-students]
pedagogy: [cognitive-psychology, desirable-difficulties]
technology: [generative-ai, speech-and-voice-technologies, multimodal]
assessment: [assessment-validity, ai-detection, assessment]
ethics: [accessibility, assistive-technology, equity-in-ai-education]
institutions: [educational-policy-ai, regulation]
stakeholders: [learners, student-experience, professional-training]
research_method: [policy analysis, theoretical analysis]
level: [higher ed]
audience: [administrators, policymakers, instructors]
connected_faqs: [reduce-ai-cheating, institutional-ai-policy, ai-disabled-neurodivergent-learners]
sources: ['raw/papers/wright-transcription-not-generation-2026.md']
confidence: high
---

> **Synthesis:** Wright argues that the assessment prohibitions written across [[higher-ed|higher education]] since 2023 target "generative AI" without the technical precision needed to separate a machine that produces assessed intellectual content from an AI-powered tool that converts the format of content the student has already authored. Optical character recognition, handwritten text recognition and speech-to-text are, on the peer-reviewed computer science literature, recognition [[ai-technologies|technologies]]: they infer what characters or phonemes are present in an input rather than generating new content. The paper is conceptual and legal-analytical, with no original empirical data, and proposes a function-based reading of prohibition language, a three-category typology of AI output, and four operational criteria (fidelity, non-augmentation, traceability, attestation) for misconduct panels. It argues that sanctioning transcription-only use is best characterized as policy misapplication rather than misconduct, and that [[educational-policy-ai|policies]] which punish format conversion and intellectual outsourcing alike lose legitimacy, fall unevenly on disabled and [[equity-in-ai-education|equity]]-exposed students, and do nothing for [[assessment-validity|validity]].

## Core Argument

1. **Policies prohibit generation, not artificial intelligence as such.** The UK Quality Assurance Agency's 2023 guidance, the Russell Group's 2023 principles and the policies Luo (2024) reviews across the top twenty QS-ranked universities bar "generative AI" or "GenAI". An et al. (2025) report that ninety-four per cent of the top fifty US universities in their sample had faculty-facing GenAI guidelines, but found them varying widely in content, clarity and enforcement, with many leaving individual faculty to interpret them alone. That ambiguity is what lets a functional question be settled by platform identity instead.
2. **Recognition and generation are technically distinct functions.** Memon et al. (2020) characterize OCR as transforming textual information in image form into machine-encoded text; [[speech-and-voice-technologies|speech-to-text]] does the equivalent for audio. AlKendi et al. (2024) trace handwriting recognition to transformer architectures, reporting character error rates below two per cent on the RIMES [[benchmark]], with a paragraph-level transformer decoder on RIMES 2011 at 1.82 per cent; AlHamad et al. (2024) review one hundred and sixteen articles across five scripts. Deep learning improves the accuracy of the mapping from image to characters, not the function performed, so the distinction holds even where a recognition system shares a transformer backbone with a [[generative-ai|generative model]].
3. **Platform identity is a poor proxy for function.** ChatGPT, Gemini and Copilot carry image recognition and OCR alongside text generation, and institutional practice already treats Word's AI-powered grammar and predictive text, Grammarly's suggestions and Google Docs' autocomplete as assistive rather than generative. Perkins et al.'s (2024) AI Assessment Scale, grading tasks from No AI to Full AI, implies the same variable: what the AI does in relation to the assessed learning outcomes. If a policy genuinely bars any interaction with any platform that possesses generative capability, the paper argues it must say so explicitly, since the capture would include spell-checkers and accessibility tools.
4. **The mischief is the outsourcing of intellectual authorship.** Lodge et al. (2023) frame the question as what is offloaded, by whom, and for what purpose. Three scenarios mark the boundary: prompting a model to solve a system of differential equations is prohibited; asking it to transcribe handwritten work and fix any mathematical errors crosses out of format conversion, because the tool was asked to alter substance; asking it to transcribe the work exactly as written, errors preserved, is format conversion. These differ categorically, not marginally, which is the paper's central interpretive claim.
5. **The exemption stops where the transcription process is itself the assessed skill.** Clinical note-taking in healthcare training, pharmacists reading handwritten prescriptions, and lecture note-taking designed to build selection and synthesis assess the process, so an AI transcription tool bypasses the competence under assessment whether or not it is generative. Flanigan et al.'s (2024) [[meta-analysis-systematic-review|meta-analysis]] of twenty-four studies found handwritten note-taking produced higher achievement than typing (95% CI [0.181, 0.315]) despite typing producing greater note volume, and cautioned that no study in that literature accounted for students with disabilities.
6. **Detection tools and style heuristics cannot carry the evidential weight of a finding.** Weber-Wulff et al. (2023) found none of fourteen detection tools reliable enough to serve as sole evidence. Perkins et al. (2024) report that Turnitin flagged ninety-one per cent of twenty-two experimental GPT-4 submissions but identified only 54.8 per cent of the AI-generated content inside them, with staff reporting just 54.5 per cent through the misconduct process and no significant grade difference between detected and undetected work. Krishna et al. (2023) report DetectGPT's identification rate falling from 70.3 to 4.6 per cent after paraphrasing; Liang et al. (2023) report detection falling from up to 100 per cent to up to 13 per cent for AI-written admission essays after one self-edit prompt. Headings, notation and polish are features of competent writing and clean OCR output too.

## Three categories the boundary has to separate

The line between the second and third cannot be drawn bright-line in every case.

- **Category A, novel content production.** Text, reasoning, analysis, code or argument created in response to a prompt that did not previously exist in authored form, as when a student asks an [[llm]] to solve a system of differential equations or prove a set compact under Heine-Borel. The paradigm case of prohibited generative use.
- **Category B, error-correcting reconstruction.** The system infers missing or ambiguous content during recognition, reading a poorly formed character from word context or disambiguating a symbol from surrounding equation structure. Where implementations supply omitted steps or suggest corrections to reasoning, the function shades into generation.
- **Category C, format conversion.** Handwriting to digital text, [[assistive-technology|speech to text]], plain text to LATEX markup, scanned documents to editable files. No intellectual content is produced, altered or suggested; the operation is clerical.

## Operational criteria for transcription-only use

A conceptual distinction is not enough for practitioners, so the paper proposes four criteria designed to be conservative: they give the student a structured route to rebut an allegation while leaving the ultimate burden of proof with the institution on the balance of probabilities.

1. **Fidelity.** The typeset output must be equivalent in substance to the pre-existing authored content, within tolerance for OCR errors: same equations, derivation steps, proof structure, conclusions and errors. Preserved errors count as strong evidence of faithful transcription, since a generative tool asked to solve a problem would not typically reproduce the student's mistakes, though a student could hand-copy a generated solution and introduce errors to mimic the pattern.
2. **Non-augmentation.** The tool must not have proposed, supplied or suggested substantive content beyond literal transcription. Prompt logs carry this criterion: "transcribe this exactly" fits non-augmentation, "transcribe this and fix any errors" does not. The tool may recognize what is written but must not contribute what should be written.
3. **Traceability.** The student must produce contemporaneous artifacts documenting the workflow: handwritten originals, images submitted to the tool, prompt history, and intermediate and final outputs. Together these show the direction of flow, student to tool, and are argued to be more probative than detector output because they document what happened rather than inferring it.
4. **Attestation.** The student attests that they checked the transcription and did not accept substantive suggestions, since accepting an unsolicited correction moves the case into Category B or A.

## Accessibility and differential false-positive risk

Imprecise policies, weak detectors and subjective style judgments together produce conditions for systemic false positives, and the paper separates what is documented from what it argues. Liang et al. (2023) provide the direct empirical result: detectors use perplexity, the predictability of word choices, as a primary signal, and non-native English writers in their data tend to produce lower-perplexity text, the same feature the tools read as machine authorship. Giray (2024) reports false positives falling disproportionately on non-native English speakers and scholars with distinctive styles. Extending that mechanism to other low-perplexity writers, including work produced through standardized typesetting such as LATEX, is the paper's own hypothesis requiring testing, not a finding.

The accessibility case runs alongside it. Students with conditions affecting fine motor control, handwriting legibility or typing accuracy, including [[neurodiversity|autism]] spectrum conditions, dyspraxia, cerebral palsy and repetitive strain injuries, have relied on voice-to-text and standalone OCR, and reports suggest the discontinuation or degradation of several standalone voice-to-text products has left some without their primary tool, with AI-powered OCR filling the gap. Treating that replacement as misconduct raises fairness concerns under the reasonable adjustment duty in sections 20 to 21 of the UK Equality Act 2010, the anticipatory Public Sector Equality Duty, the US Americans with Disabilities Act and the Australian Disability Discrimination Act 1992, though the paper does not claim the characterization has been tested in any tribunal.

## What the paper recommends

The recommendations are normative proposals, not tested interventions, and each follows from an earlier step in the argument.

1. Define "generative AI use" by reference to function, not platform identity, so non-generative use is not captured by definitional accident.
2. Distinguish content generation (Category A) from format conversion (Category C) explicitly, and give decision-makers direction on the gray zone rather than leaving the boundary to be drawn ad hoc.
3. Acknowledge that multi-functional platforms can be used for non-generative purposes.
4. Adopt the four operational criteria as the structured pathway for borderline cases, since without them the function-not-platform principle is procedurally unusable.
5. Address the [[accessibility]] dimension openly, including where AI transcription replaces discontinued assistive software.
6. Require decision-makers to engage with contemporaneous evidence on its merits when handwritten originals, logs and prompt histories are available.

A historical parallel is offered for the drafting problem rather than the outcome. Handheld calculators entered US classrooms in the mid-1970s under platform-level bans that did not distinguish arithmetic from graphing or symbolic computation; those bans proved unworkable and were replaced by functional specification of what was permitted. Generative AI overlaps with the intellectual operations [[assessment|assessments]] exist to test in a way the calculator never did, so the paper treats the precedent as supporting the drafting claim only.

## Limitations

The author states twelve limitations, several of which bound how far the argument travels. There is no original empirical data: no policy survey, no interviews with decision-makers, no audit of proceedings and no test of the criteria against real cases, so claims about policy prevalence rest on secondary sources and claims about individual cases on sources reported at their own evidential level. The four criteria are proposed, not validated; their inter-rater reliability and capacity to separate Category A, B and C cases remain open questions. The journalistic accounts of students accused because their writing looked too polished are cited for illustration only, and the measured prevalence of such accusations is unknown. The perplexity extension is a hypothesis, and the use of the contra proferentem doctrine and strict construction of penal provisions is doctrinal analogy rather than settled law. Two limits are structural: the criteria verify that the transcription step was non-generative, not that the handwritten content was the student's own work, so a student who hand-copies a generated solution satisfies them; and fabricated logs or staged artifacts are not eliminated, only made more costly. The paper also notes the absence of implementation-cost analysis and identifies six priority empirical questions for future research.

## Connected Concepts

- [[academic-integrity]]
- [[assessment-validity]]
- [[ai-detection]]
- [[educational-policy-ai]]
- [[assistive-technology]]
- [[accessibility]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[generative-ai]]
- [[regulation]]
- [[ai-use-disclosure]]
- [[reducing-ai-misuse]]
- [[higher-ed]]
- [[cognitive-offloading]]

## Connected Articles

- [[gemini-lualatex-physics-video-transcription-2026]] — Transcription of physics video and LATEX production as a documented AI workflow
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Assistive technology for neurodivergent students in higher education
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive generative AI use by visually impaired learners
- [[bassett-ai-detectors-education-2026]] — False positives and the case against relying on AI detectors
- [[taylor-lacroix-purpose-before-policy-academic-integrity-2026]] — Arguing that integrity policy should start from purpose
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Reconstructing assessment validity for the generative AI era
- [[chan-rethinking-aigiarism-secondary-integrity-2026]] — Contesting the aigiarism framing of AI use in assessment
- [[qu-wang-disclose-or-not-genai-2026]] — Why students disclose or conceal generative AI use

## Citation

Wright, C. (2026). [*Transcription is not generation: Distinguishing non-generative AI tool use from academic misconduct in higher education assessment*](https://doi.org/10.1007/s40979-026-00234-w). *International Journal for Educational Integrity*, 22(24).
