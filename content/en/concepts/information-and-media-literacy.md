---
title: "Information and Media Literacy"
created: "2026-11-05T04:08:36-05:00"
updated: "2026-11-13T00:25:09-05:00"
type: concept
foundations: [information-and-media-literacy, ai-literacy, critical-thinking, academic-integrity]
pedagogy: [critical-pedagogy]
technology: [generative-ai, llm]
ethics: [trust-calibration]
audience: [librarians, instructors, learners, curriculum designers]
level: [higher ed, k 12, adult learning]
page_kind: [synthesis]
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Information and media literacy** are adjacent capabilities that AI is rewriting at the same seam. Information literacy centers on finding and verifying accurate data; media literacy centers on understanding who created a message, how it was constructed, and why. They overlap in their shared goal of building the [[critical-thinking]] that lets people navigate a digital world and spot misinformation — and they now share a second problem: [[generative-ai|generative AI]] produces fluent, plausible content whose origin and intent are hidden, so the provenance question that media literacy always asked has moved into information literacy too.

## Questions to Consider

- When a chatbot returns a confident paragraph with three citations, is the student exercising information literacy, media literacy, or neither — and does the assignment make that distinction visible?
- [[ai-avatars-and-synthetic-instructors|Deepfakes]] and fabricated citations are different failures: one is a false record of the world, the other a false record of the literature. Can one course teach both without teaching each badly?
- AI detectors and fact-checkers are themselves models with error rates. What happens to a verification [[curriculum-design|curriculum]] when the verification tool is probabilistic?
- Media literacy has been taught through production — students make media to understand it. If a model now makes the artifact, what part of the [[pedagogy]] survives?

## Introduction

The two literacies have separate institutional homes. Information literacy was codified in library and information science, most visibly in the ACRL Framework, as a set of dispositions around authority, process and value. Media literacy grew out of communication and media studies and out of school media education, and asks about authorship, technique, audience and effect. One judges whether a source deserves belief; the other asks who made a message and what it is doing.

That division has always been cleaner in theory than in a classroom. Both literacies teach students to slow down, check provenance and resist fluency. Both were built on an assumption that the artifact had an author who paid a cost to produce it. Generative AI removes that assumption from both at once: text is synthesized from untraceable training data, images and voices are cloned, and automated accounts simulate the audience itself.

The two are treated here as one instructional problem with two outcome sets. The evidence is uneven — a bibliometric map and two systematic reviews on the information side, a small intervention and an expert interview study on the media side — and almost none of it tests a combined curriculum. That absence is itself the finding worth carrying into practice.

## Where the two constructs diverge

Information literacy's object is the source, and its core question is whether the claim is true and the evidence behind it credible. Media literacy's object is the message, and its core question is who made it, how, for whom and to what end. A fabricated citation fails the first test; a deepfake may pass every factual check a student knows how to run while failing the second.

The empirical literatures reflect the split. A survey of 236 US university students asked where academic searches begin and found search engines at 45.5%, the library homepage at 27.9% and an AI chatbot at 26.6%, with international students substituting AI for library resources at roughly double the domestic rate ([[lund-ai-information-seeking-chatbots-libraries-2026|Lund et al., 2026]]). A [[meta-analysis-systematic-review|systematic review]] of 32 studies found [[ai-literacy|AI literacy]] integration in information-literacy instruction at an "infancy stage," delivered through LibGuides and workshops rather than curriculum ([[mirza-arif-ai-literacy-information-literacy-review-2026|Mirza and Arif, 2026]]). On the media side, interviews with seven experts and a survey of 141 students found technology inclusion in the critical media literacy curriculum "limited and often superficial," with teachers under-trained for tools that produce disinformation and deepfakes ([[critical-media-literacy-education-2026|the critical media literacy study, 2026]]).

International assessment is about to fuse the two constructs. PISA 2029 introduces a Media and AI Literacy (MAIL) assessment for 15-year-olds, and iRAISE's 2026 review builds its definition on the same integration — AI literacy as the newest layer of digital literacy, itself resting on decades of media and information literacy ([[cerioli-human-centered-ai-literacy-schools-2026|Cerioli, 2026]]). The integration carries an implementation cost the divergence argument predicts. UNESCO's 2025 mapping found 171 of 194 Member States referencing media and information literacy in national frameworks, but only 84 (43%) including elements beyond technical digital skills in curricula — so the construct assessment will measure is the one schools teach least.

## How AI complicates information literacy

The first complication is fabrication at scale. A model produces convincing text, plausible references and confident statistics that may not exist; the reader receives a synthesis whose search trace has been erased. Checking becomes a different skill: not "is this a good source" but "does this source exist, and does it say what the answer claims."

The second is that the search layer collapsed into an answer layer. When the tool retrieves, selects and writes, the literate act moves to judging the synthesis. That is the residue the evidence keeps pointing at: an embedded-librarian platform beat conventional library instruction by 0.78 to 0.25 points on an ACRL-based instrument, and the consultations that produced the gain were dominated by source-evaluation questions ([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]).

The third is capacity. In a survey of 412 academic librarians across 38 Nigerian institutions, self-rated competence was high for database instruction (M = 4.07) and information-literacy delivery (M = 4.02), but composite AI competency was 2.86, weakest on designing objectives (M = 2.70) and assessing outcomes (M = 2.62) ([[dada-librarians-information-literacy-ai-nigeria-2026|Dada, 2026]]). A field mapped at 1,669 publications is being asked to teach a competency its instructors report they cannot yet design ([[jabeen-lux-ai-information-literacy-scientometric-2026|Jabeen and Lux, 2026]]).

## How AI complicates media literacy

Media literacy's founding questions assumed a maker with a purpose. Deepfakes, voice cloning and automated bots break that assumption in three ways: the artifact may have no human author, the audience may be synthetic, and the intent may be optimization for engagement rather than persuasion by anyone.

**Personalized argument is the current persuasion threat model.** [[salvi-conversational-persuasiveness-gpt4-2025|Salvi et al. (2025)]] randomized 900 US adults to ten-minute online debates against a human or GPT-4, with or without six ordinary demographic fields. Unpersonalized GPT-4 was statistically indistinguishable from a human opponent, while personalized GPT-4 raised the odds of post-debate agreement by 81.2% and was more persuasive 64.4% of the time. Participants identified an AI opponent in about three of four debates yet shifted further when they believed the opponent was AI, so source detection did not work as inoculation. The manipulation was invisible in the prose: style measures differed little between conditions, locating the advantage in which arguments were chosen rather than how they were written.

The curriculum evidence suggests schools have not caught up. The expert interviews describe [[teacher-education|teacher training]] as the binding constraint rather than student resistance, and argue for a [[critical-pedagogy]] framing that treats evaluation as ethical and participatory practice instead of tool training. A commissioned report for public service media found provision for 14–19-year-olds tilting toward functional AI skills and away from critical evaluation, despite reviewing more than 40 frameworks and interviewing 35 experts ([[ai-literacies-young-adults-2025|the AI literacies report, 2025]]).

## AI as a defensive tool — claims and caveats

The case for using AI on the defensive side is plausible and widely made: automated credibility checks that scan a source's history and language for bias signals, deepfake detectors, metadata analyzers that look for provenance markers, and [[simulation|simulations]] that let students practice evaluation on realistic synthetic material. These capabilities are real products, and the classroom use is real practice.

The evidence is thinner than the claims. Detectors are probabilistic and degrade as generators improve; a fact-checking model is itself a model, so the student still has to judge the checker; and provenance metadata only helps when a producer chooses to attach it. One of the firmest results in this literature is that AI-supported media literacy instruction can work at small scale: an 18-hour program built on the 5E model produced large gains among 36 fourth-grade students in one Turkish school ([[demir-akar-ai-media-literacy-children-2026|Demir and Akar, 2026]]). Thirty-six students is a proof of concept, not a procurement case.

A library-sector opinion piece pushes the same idea further: AI could carry information-literacy *delivery* through retrieval, adaptive tutorials, [[conversational-ai|chatbots]] and automated fact-checking, with [[librarians|librarians]] rather than vendors owning the integration ([[offem-ai-information-literacy-library-users-2026|Offem and Arikpo, 2026]]). The paper reports no data, so it is a design brief for where instruction might live rather than evidence that it works.

Read together, the two sides of the ledger suggest a rule: AI can carry the *practice* load — realistic scenarios, immediate feedback, scale — but the *judgment* load stays with the learner, and any tool that claims to replace it should be evaluated as a detector with a measured error rate, not adopted as an answer key.

## Implications for Practice

Instructors can teach one procedure against two objects. Trace the claim to a source, trace the source to an author, then ask what the artifact is doing. The routine works for a citation and for a video, and the assignment should name which object it assesses.

Instructors can treat a detector's output as evidence rather than a verdict. It is a probability, so students should corroborate with a second method and state what would change their mind.

Curriculum designers can keep production in the course. Making media is what made critique concrete in the studies reviewed here, and generating with AI supports it only when students examine the choices the tool made for them.

Program leaders can put a librarian or media specialist inside the workflow. The strongest instructional result in this literature comes from a design where human consultation was built in rather than offered afterward.

Faculty developers can assess staff capacity before a department writes its syllabus. The measured deficit sits at designing objectives and assessing outcomes, not at using tools.

## Where the evidence is thin
Most studies here are small, [[self-report-measures|self-reported]] or both: 236 students in one survey, 36 children in one intervention, 412 librarians rating themselves. Bibliometric visibility is not practice, and the scientometric authors say so explicitly. No study reviewed here evaluates a combined information-and-media-literacy curriculum, and the detector and fact-checking tools the practice literature recommends are largely unmeasured in these sources. The claim that AI-powered verification improves outcomes should be treated as a design hypothesis until someone tests it against a control.

## Common Misconceptions

- **A detector settles the question.** A detector returns a probability; corroborate it with a second method instead of treating it as an answer key.
- **The two literacies are one skill under two names.** Their objects differ — source credibility against authorship and intent — so a single rubric assesses neither well.
- **Spotting AI inoculates against it.** In the strongest persuasion experiment reviewed here, detection ran high and the shift toward the AI's position still grew.
- **Librarian competence transfers to AI literacy.** The staff shortfall shows up at designing objectives (M = 2.70) and assessing outcomes (M = 2.62), not at operating tools.

## Connected Concepts

- [[ai-literacy]]
- [[libraries]]
- [[librarians]]
- [[critical-thinking]]
- [[critical-pedagogy]]
- [[academic-integrity]]
- [[trust-calibration]]
- [[generative-ai]]
- [[higher-ed]]

## Connected Articles

- [[cerioli-human-centered-ai-literacy-schools-2026]] — iRAISE's four-country review: 84 of 194 states put MIL beyond technical skills into curricula, and human factors decided outcomes in all four systems (Cerioli, 2026)
- [[mirza-arif-ai-literacy-information-literacy-review-2026]] — Mapping the Integration of AI Literacy Into Information Literacy Instruction in Academic Libraries: A Systematic Review of Emerging Research
- [[jabeen-lux-ai-information-literacy-scientometric-2026]] — How artificial intelligence is reshaping information literacy in academic libraries: A global Scientometric analysis (2020–2025)
- [[lund-ai-information-seeking-chatbots-libraries-2026]] — Artificial intelligence (AI) and information seeking: A comparative exploration of AI chatbots, search engines, and library resources as information sources among university students
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Developing an AI-Assisted Seminar-Based Learning Platform With Embedded Librarian Support
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — Information literacy through open pedagogy: What's the role of AI tools?
- [[huang-genai-academic-information-resources-2026]] — Generative artificial intelligence reshapes university students' sustainable use of academic information resources
- [[dada-librarians-information-literacy-ai-nigeria-2026]] — Academic Librarians' Student Engagement for Promoting Information Literacy and Artificial Intelligence Instruction in Nigerian Tertiary Institutions
- [[offem-ai-information-literacy-library-users-2026]] — Artificial Intelligence as a Tool for Promoting Information Literacy among Library Users
- [[critical-media-literacy-education-2026]] — Technology, education and critical media literacy: potential, challenges, and opportunities
- [[demir-akar-ai-media-literacy-children-2026]] — Transforming clicks into critical thinking: An AI-based media literacy program for children
- [[ai-literacies-young-adults-2025]] — Supporting AI Literacies for Young Adults Aged 14-19
- [[salvi-conversational-persuasiveness-gpt4-2025]] — Personalized GPT-4 beat human debaters; detection did not inoculate (Salvi et al. 2025)
