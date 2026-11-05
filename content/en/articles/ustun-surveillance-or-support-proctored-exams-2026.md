---
title: "Surveillance or Support? A Systematic Literature Review of Artificial Intelligence Supported Proctored Online Exams"
created: "2026-11-05T15:30:00-05:00"
updated: "2026-11-05T15:30:00-05:00"
type: article
sources: ['raw/papers/ustun-surveillance-or-support-proctored-exams-2026.md']
confidence: low
page_kind: [synthesis]
research_method: [literature review]
audience: [researchers, administrators]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
pedagogy: [online-teaching-and-learning]
technology: [machine-learning, sensor-and-gaze-analytics]
assessment: [remote-proctoring, assessment-validity]
methods: [meta-analysis-systematic-review]
ethics: [privacy, bias-mitigation]
institutions: [educational-policy-ai]
foundations: [academic-integrity, ai-education]
---

> **Synthesis:** Ustun, Kayali, Yavuz and Bozkurt review 32 studies of artificial intelligence-supported proctored online examinations (AI-SPOE) from Scopus and Web of Science, pairing PRISMA selection with Leximancer text mining of abstracts and keywords. They map a tool stack running from face, voice and iris verification to gaze and posture analytics and lockdown browsers, and the four integrity mechanisms those tools serve. The verdict is split: authentication and behavior analysis do catch impersonation and cheating, but false positives, lighting and bandwidth failures, [[anxiety-and-stress|test anxiety]] and [[privacy]] harms fall hardest on students with the least technical and material margin. The review's recommendation is not more surveillance but [[authentic-assessment|alternative assessment]] alongside human-machine hybrid proctoring.

## Key Findings

1. **Thirty-two studies survived screening.** An unfiltered search returned 127 records, 70 in Web of Science and 57 in Scopus; filters and exclusions left 55, and removing 23 duplicates left 32 articles for analysis.
2. **Automated proctoring dominates the field.** Of the 32 studies, 59% examined automated proctoring systems, 28% mixed methods, 6% simultaneous surveillance, and 9% adopted a conceptual or literature-based approach with no technical surveillance method.
3. **Coding reliability was high.** The first two authors pilot-coded five co-authored articles, between 10% and 20% of the sample, and reported 92% internal consistency, above the 80% acceptability threshold they cite.
4. **"Online" is the corpus's gravitational center.** Leximancer theme hits were 147 for online, 89 for system, 50 for data, 24 for analysis, and 21 for ethical, with face, recognition and academic dishonesty clustering in the smaller themes.
5. **The harms sort into five categories.** The review groups implementation problems as technical failures, lack of knowledge and skills, psychological problems, access problems, and integration problems.

## What the 32 studies can and cannot show

The search was run in Scopus and Web of Science between October and November 2024, restricted to English-language, open-access articles. Screening moved from 127 records to 84 after type and access filters, to 55 after 29 off-topic exclusions, to 32 after 23 duplicates were removed. The first two authors then analyzed 16 articles each against a standard content-analysis form, coding deductively from the research questions and inductively for codes that emerged from the data, with the third author and a field expert checking the forms. Abstracts and keywords were separately processed through Leximancer and t-SNE. The review is candid that most included studies are single-country or single-institution cases, and that technical papers report laboratory model accuracy without testing user experience or long-term functioning. That matters for how the findings should be read: the corpus establishes what has been built and claimed, not what survives a semester of use.

## The tool stack serves three jobs

The review sorts tools by purpose rather than by model family. Authentication is the largest group: face, voice, eye and fingerprint verification, with RPNow, ExamID, ExamMonitor and TRUSTID among the named systems, the last built on SpeechBrain and PostgreSQL, alongside Real Talk and Deep Speaker for live speaker verification and YOLOv3 and Inception-ResNet for recognition efficiency. Suspicious-behavior analysis is the second group, where Attentive-Net, Proctor Net and FaceNet track eye gaze, mouth movement and head pose, CHEESE extracts multimodal features, and L2-GraftNet with Atom Search Optimization classifies exam behaviors; PyTorch, TensorRT, Celery and RabbitMQ carry the video and audio pipeline. Prevention is the third: Respondus LockDown Browser, Secure Exam Browser and Remote Desktop Protocol restrict what a student's machine can reach, while Kaldi and Gaussian Mixture Models detect voice activity and Turnitin and related tools catch copied text.

## Four mechanisms, and the false positive at the center

Exam integrity in [[remote-proctoring|remote proctoring]] is pursued through authentication mechanisms, real-time monitoring, denial of access to devices, and general exam-security measures such as blockchain records, randomized question ordering and adaptive formats. Each mechanism moves trust away from the student and toward a model's judgment, and the review documents what happens when that judgment errs. Face-recognition errors block legitimate authentication; low light, ambient noise, weak hardware and quota-limited connections raise error rates; and algorithmic bias produces disproportionate false flagging of students with darker skin tones, with the review naming students of color and women as groups affected. Students who did nothing are questioned, reporting is delayed, and the resulting distrust runs between institutions and the students they monitor. The technical literature's accuracy figures do not answer this, because the studies reporting them rarely measure the experience of being wrongly flagged.

## From surveillance to support

The recommendations are organized by audience and converge on the same point. For educational environments, the review asks institutions to pair proctoring with project-based work, oral exams and participation grading, and to let students choose among assessment formats. For developers, it asks for training programs, non-intrusive authentication, larger and more diverse datasets, designs that run on low-capacity hardware, and hybrid models that combine AI detection with human review to weed out false positives. For decision-makers, it asks for explicit ethics and confidentiality rules, transparent management, and access guarantees for students without reliable hardware or connectivity. For researchers, it asks for large-scale, long-term and cross-context studies. Explainable AI, adaptive testing, learning analytics and affect monitoring appear as the likely next layer, on the argument that transparency is what makes a system's decisions contestable.

## What this means for practice

- **Instructors.** Tell students in advance what the system records, what it flags and how a flag is reviewed, then offer at least one assessment route that does not depend on biometric monitoring; the review's evidence for gain rests on detection accuracy, while its evidence for harm rests on the experience of being watched.
- **Administrators.** Budget for human review and for student-side hardware and bandwidth support, not only for licenses: the review attributes false accusations to recognition error and to environmental conditions, and treats access barriers as a distinct problem category rather than an implementation detail.
- **Researchers.** Disaggregate detection error by skin tone, lighting and device, and report the experience of flagged students alongside accuracy; the corpus's technical studies otherwise leave the fairness claims of these systems untested in the settings where they are deployed.

## Limitations

- The search covers only English-language, open-access articles in Scopus and Web of Science, run in a single October–November 2024 window, so non-English and non-indexed work is invisible.
- No DOI is printed in the PDF; the citation therefore rests on volume, issue and article number, and the archived copy is the only stable locator.
- The 32 included studies are mostly single-country or single-institution case studies, which the authors themselves name as the main threat to generalizability.
- Text mining was applied to abstracts and keywords only, so the theme hits describe how authors summarize their work rather than what the full texts argue.
- The distribution figures (59%, 28%, 6%, 9%) are percentages of 32 studies, so a single study moves the result by several points; they describe this corpus rather than estimate the field.

## Citation

Ustun, A. G., Kayali, B., & Yavuz, M. (2026). *Surveillance or support? A systematic literature review of artificial intelligence supported proctored online exams*. Turkish Online Journal of Distance Education, 27(2), Article 1.
