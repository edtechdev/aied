---
title: "Feasibility of an AI-simulated patient encounter delivered in group and individual learning formats for first-year medical students: a two-cohort pilot study"
created: "2026-11-16T10:20:00-05:00"
updated: "2026-11-16T10:20:00-05:00"
type: article
authors: ["Tischkau, S.", "Lynch, J.", "McGinity, S.", "Primous, A.", "Meldrim, E.", "Lynch, S.", "Selinfreund, R."]
published: "2026-11-13"
venue: "BMC Medical Education"
source_url: "https://doi.org/10.1186/s12909-026-10812-8"
sources: ['raw/papers/tischkau-ai-simulated-patient-formats-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [instrument development, user study]
discipline: [medical education]
level: [graduate, higher ed]
audience: [medical educators, faculty developers, researchers]
pedagogy: [problem-based-learning, case-based-learning, experiential-learning, professional-training, student-engagement, anxiety-and-stress]
technology: [simulation, llm, conversational-ai, ai-avatars-and-synthetic-instructors, speech-and-voice-technologies, generative-ai]
assessment: [self-report-measures, assessment-validity, educational-measurement]
methods: [quantitative-research, usability-research]
ethics: [trust-calibration, privacy]
foundations: [limitations-in-aied-research]
source_depth: full text
contributors: [editor]
reviewed_by: [editor]
evidence_context: educational
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
---
> **Synthesis:** Simulated patients built on [[llm|large language models]] are being evaluated across undergraduate [[medical-education|medical education]], but the literature reports learner satisfaction far more reliably than it reports how an encounter was delivered. Tischkau and colleagues ran one LLM-driven case — a 24-year-old man with early Guillain–Barré syndrome — with two non-overlapping cohorts of first-year students at a single United States medical school: seven in a faculty-facilitated session projected on a classroom display, twelve alone on a laptop in a private room. All 19 completed the encounter and paired surveys, no technical failure ended a session, and learners rated the experience favorably; the pre-to-post shifts measured by the team's own provisional instrument were small, and the largest of them, a psychological-safety gain of r = 0.62 in the individual cohort, did not survive correction for multiple comparisons. The paper's durable contribution is not an effect size but a candid account of a [[simulation|simulation]] that ran as planned and a learner-perception scale that is not yet ready to carry an outcome claim.

## Key Findings

- **Nineteen of 72 invited first-year students enrolled (26%), and all 19 completed the encounter and paired surveys (100%).** No platform, audio or connectivity problem terminated a session or excluded a participant.
- **Individual encounters took a median of 31 minutes (range 17–83; n = 11); the single group session ran about 35 minutes**, roughly an hour with surveys.
- **Group-cohort pre-to-post shifts were small and imprecise.** Engagement moved +0.33 points (Wilcoxon r = 0.13) and psychological safety +0.33 (r = 0.55); no within-cohort comparison survived false discovery rate correction.
- **The individual cohort's psychological-safety gain was the largest effect (r = 0.62) and still failed correction**: P = 0.026 unadjusted, P = 0.20 after correction across subscale comparisons.
- **No between-cohort difference approached significance.** On the nine items worded alike in both surveys, effect sizes ran from r = 0.02 to 0.11 and composite medians were equal (difference 0.00, P > 0.9).
- **The modal post-encounter preference was "solo first, then group" (7/12, 58%), a sequence no participant had experienced.** Small-group delivery drew 4/12 (33%) and solo-only delivery 1/12 (8%).
- **Delivery was inexpensive and light on staffing.** D-ID and ElevenLabs cost about US\$2 per student per session; a group session needed one faculty member and one staff member for about an hour, individual sessions no staff time beyond links.

## Why delivery format was the variable

Reviews of AI-supported [[problem-based-learning|problem-based]] and [[case-based-learning|case-based learning]] report satisfaction and knowledge gains alongside heterogeneous designs and inconsistent outcome measures — and, the authors argue, two gaps: format is rarely treated as an independent variable, and AI-supported assessment methods are seldom described well enough to replicate. This pilot addressed the first. Case, patient configuration and response framework were held constant, so the manipulated difference was who was in the room.

Seven students interviewed the patient together in a classroom, avatar on the room's 85-inch teaching display, audio through a Jabra speakerphone, the course director facilitating, each student asked to pose at least one question, discussion running throughout. Twelve students each opened an individualized link on a laptop in a private space, with no facilitator and no time limit, ending the session themselves. The case was written to be minimally forthcoming — a 24-year-old answering literally, disclosing progressive bilateral weakness, sensory change and a preceding flu-like illness only when asked — which puts the burden on history-taking rather than on naming a diagnosis.

The stack was deliberately ordinary: a D-ID conversational agent with an animated avatar handled speech-to-text and lip-synchronized delivery, GPT-4o generated the patient's replies inside that service, ElevenLabs supplied the voice, and only text transcripts were stored. A locked prompt written with a human factors engineer fixed the patient's history and disclosure rules, with guardrails keeping him inside his scripted symptoms and out of diagnosis.

## What the two cohorts produced

Feasibility came out clean by the study's own definitions: recruitment of 26%, complete encounter and survey data, no technical failure. Intermittent problems — connection drops that froze the chat and the patient image, a microphone that failed in the Brave browser, a server error loading results — interrupted sessions without ending them and were never systematically logged. Encounter quality was mixed: staff found no deviation from the scripted life history, but learners reported inconsistent answers, a musculoskeletal examination that contradicted the neurological one, and tests they could not order, including nerve conduction studies and electromyography.

The quantitative picture is null after correction. Group engagement rose a third of a point at r = 0.13, close to noise. Individual psychological safety rose half a point at r = 0.62 — the strongest signal in the study — and the adjusted P of 0.20 places it among six subscale comparisons rather than at the top of a confirmatory test. Between cohorts nothing separated. One item, Q8, fell by a median point in both cohorts for a reason that is a wording error rather than a finding: it asked in the past tense whether the simulation helped students arrive at a tutor session that had not yet happened.

## The provisional instrument carries the weak claims

The Behavioral Safety Language Scale–Provisional (BSLS-P) is the part of this study most likely to be reused and least ready for it. It has had no cognitive interviewing, no expert content-validity rating and no psychometric testing, and its content changed between administrations: version 2 dropped item 10, reworded item 3 so that pre- and post-encounter items measured the same construct, and added a delivery-format subscale. Between-cohort comparisons were restricted to the nine items that stayed the same, which is honest but means the cohorts were not measured identically.

Internal consistency, estimated per subscale per administration, ranged from −0.39 to 0.87. Motivation to Prepare held together (alpha 0.73 to 0.84); Enjoyment/Engagement (−0.16 to 0.74), Psychological Safety (−0.14 to 0.85) and Delivery-Format Preference (−0.16 and −0.39) did not, and negative alphas mean those three-item sets did not move together. The authors also flag a construct problem they inherited: psychological safety is theorized as a property of a team, while a three-item [[self-report-measures|self-report]] captures one learner's perception of a setting. Pre-encounter items ask about expectations and post-encounter items about experience, so the difference compares an expectation with a memory. And an item about being judged by faculty or peers is endorsed warmly whenever neither is present, which advantages the individual arm regardless of what the patient does.

Read the psychological-safety result, then, as a hypothesis about interpersonal stakes rather than evidence that private practice is safer. A second, softer signal points the same way: five of seven group participants wrote privately that they felt uncomfortable interviewing the patient in front of classmates, while the group's spoken comments afterward were largely positive — consistent with peer observation suppressing candor, and resting on a handful of paraphrased remarks.

## Cost, preference, and the hybrid that was never run

The economics are the most immediately usable result: about US\$2 per student per session for a conversational patient with an avatar and a synthetic voice, and an hour of one faculty member's and one staff member's time for a group session. Against the cost of training and scheduling human standardized patients that is a different order of magnitude, and it is what makes repeated practice plausible for a whole class rather than a rotation.

Preference points toward sequencing rather than substitution. After their solo encounter, 7 of 12 students chose "solo first, then group," 4 chose small group and 1 chose solo only; beforehand the distribution was flatter, with 5 choosing each of the first two. Nobody chose large-group delivery, and none had experienced the hybrid they preferred. The 31 distinct comments noted from this cohort split into 8 positive remarks, 9 about interface and realism (chat and notes on opposite sides of the screen, no chat search, an uncanny voice), 6 about intermittent technical problems, 4 about clinical content, and 4 about the automated score, which students found unnecessary and gameable by inserting expected keywords such as "onset." That score has not been validated, may have shaped the individual cohort's experience, and came from a transcript-analysis pipeline the paper does not report.

## What this means for practice

- **Instructors adding an AI patient to a first-year clinical skills session.** Run the private individual encounter first and put the facilitated discussion after it — the sequence 7 of 12 students chose and the one the psychological-safety pattern weakly supports. Treat it as a local default to test, not a settled result.
- **Course directors writing up a pilot.** Keep feasibility claims separate from effectiveness claims, as this paper does: "ran as planned, everyone completed it, learners liked it" is a real result and is not evidence of learning.
- **Faculty developers budgeting a session.** Plan on roughly US\$2 per student plus one faculty hour per group session, and budget staff time for the failures learners actually hit — test the microphone in the browser students will use, keep a manual fallback for dropped connections, and log interruptions rather than only sessions that died.
- **Anyone administering a perception survey.** Report the instrument version alongside the numbers and never compare cohorts measured with different item sets; an item asking about a session that has not happened yet is measuring confusion.
- **Researchers designing the follow-up.** Randomize to format, collect prior simulation experience, register progression criteria before collection, and validate the instrument before it carries a primary outcome.

## Limitations

- Nineteen of 72 invited students (26%) at one school, with no demographic or prior-experience data collected, so volunteer bias is unmeasured and transfer to other institutions or learner levels is untested.
- Format was fully confounded with instrument version, session date, recruitment route, platform version, setting, peer observation, debriefing and sample size; the individual arm was added after the group cohort's private comments, so the cohorts are sequential.
- There was no control condition, and pre-encounter items asked for expectations while post-encounter items asked about experience, so change cannot be attributed to the encounter; seven group students rated one shared encounter, so those ratings are not independent.
- The BSLS-P has no psychometric validation and several subscales produced negative alphas; feasibility and acceptability outcomes were defined after collection without prespecified progression criteria.
- The individual cohort saw an unvalidated automated score after submitting, and intermittent technical problems and off-script responses were never logged, so frequency is known only from comments.
- The transcript-analysis framework was never validated against expert human ratings and contributed no analyzed measures to this paper.

## Citation

Tischkau, S., Lynch, J., McGinity, S., Primous, A., Meldrim, E., Lynch, S., & Selinfreund, R. (2026). [*Feasibility of an AI-simulated patient encounter delivered in group and individual learning formats for first-year medical students: a two-cohort pilot study*](https://doi.org/10.1186/s12909-026-10812-8). *BMC Medical Education*.
