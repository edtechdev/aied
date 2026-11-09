---
title: "Generative AI in University Teaching: Tutor or Shortcut?"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [synthesis]
research_method: [literature review]
evidence_context: educational
level: [higher ed, undergraduate, secondary]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/pham-genai-tutor-or-shortcut-2026.md']
source_url: "https://osf.io/preprints/edarxiv/879sp_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [cognitive-offloading, academic-integrity, ai-literacy]
pedagogy: [active-learning, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, conversational-ai]
methods: [rct]
ethics: [differential-effects-across-learner-groups]
---
> **Synthesis:** Pham (2026) reviews randomized trials published in 2025 and 2026 and concludes that the same [[generative-ai|generative AI]] can act as a patient tutor or as a shortcut to ready-made answers, and that the outcome depends on how lecturers and institutions design its use rather than on whether students have access. A purpose-built [[intelligent-tutoring|AI tutor]] built on the course's own active-learning materials at Harvard physics (194 students) produced more than twice the learning of the in-class comparison in less time, a median of about 49 versus 75 minutes. A GPT-4o course assistant given to 2,379 University of Maryland students across 30 instructors lowered final grades by 0.37 standard deviations and participation in course activities by 0.90 standard deviations, with [[differential-effects-across-learner-groups|first-generation students]] losing most — even though only about 15% of students used it. Two further higher-education trials found reduced knowledge retention or no significant effects on achievement, interest, self-efficacy or engagement. Pham derives five design principles from the contrast and applies them to Vietnam's Circular 49/2026/TT-BGDĐT, which requires every institution to adopt rules on AI use in teaching and research.

## Key Findings

1. **A purpose-built tutor beat strong conventional teaching.** At Harvard, 194 introductory physics students using a tutor built on the course's own problems and feedback notes learned more than twice as much as the [[active-learning|active-learning]] class in less time, a median of about 49 versus 75 minutes.
2. **A general course assistant lowered grades across a whole university.** At Maryland, 30 instructors and 2,379 students used a GPT-4o assistant for a full semester: final grades fell 0.37 SD and participation in course activities fell 0.90 SD, with larger losses for first-generation students.
3. **Usage patterns, not access, explain the Maryland failure.** Only about 15% of students used the tool; about 74% of requests sought information, explanations or solutions and only 0.7% asked for feedback on the student's own work; nearly all instructors kept the default direct-instruction mode, and none built the tool into assignments.
4. **Grounding a chatbot in course materials was not enough on its own.** A course-grounded [[conversational-ai|chatbot]] across about 500 marketing students over one semester produced no significant effects on achievement, interest, self-efficacy or engagement, and unrestricted ChatGPT access reduced student effort and knowledge retention.
5. **One design choice decided help versus harm in a school trial.** Among nearly 1,000 Turkish high-school students given GPT-4, a standard ChatGPT-like interface raised practice performance by 48% over control but left students scoring 17% lower once access was removed; a version prompted not to give answers showed no such decline.
6. **Keeping educators in the loop preserved the benefit.** In Nigeria, an after-school program where teachers guided chatbot use raised English scores by about 0.3 standard deviations in six weeks, and in five UK schools an AI tutor reviewed by human tutors was at least as effective as human tutors alone.
7. **[[ai-detection|Detection]] is the wrong place to put the burden of proof.** Seven widely used AI-text detectors flagged an average of 61.3% of essays by non-native English writers as AI-generated while classifying native speakers' essays correctly.

## Performance is not learning

The review's analytical hinge is the separation of performance from learning. Performance is completing a task with the tool; learning is being able to do it once the tool is gone, and it requires the cognitive effort of recalling, attempting, making mistakes and correcting them. When AI absorbs that effort, performance rises while learning may not occur — the pattern Pham names as [[cognitive-offloading|cognitive offloading]] and illustrates with the OECD's warning that outsourcing tasks to generative AI without pedagogical guidance raises performance without real learning gains.

The framing explains why the trial literature looks contradictory. Bloom's 1984 "2 sigma problem" established that one-to-one tutoring far outperforms conventional classes and that no system could afford a tutor for every student; generative AI is the first technology that makes one-to-one support at scale look feasible. But feasibility is not design, and students already turn to chatbots whether or not their lecturers allow it.

## Two trials, opposite results

The Harvard and Maryland trials are the load-bearing evidence, and Pham reads them as a contrast in design rather than a contradiction. Kestin et al. (2025) built their tutor to follow the same pedagogical principles as the in-class sessions, loaded it with the course's own problems and feedback notes, and designed it to guide step by step rather than hand over answers. Liu et al. (2026) gave treated sections a course-integrated assistant and left instructors to configure it; nearly all kept the default direct-instruction mode and none integrated it into assignments.

The middle-ground trials narrow the claim rather than contradicting it: grounding a chatbot in course materials did not by itself improve outcomes, and unrestricted general-purpose access reduced retention. Alignment with the course is necessary but not sufficient, because a course-grounded tool left in answer mode reproduces the failure of a general one.

## Five decisions, not five technologies

Pham's five principles are pedagogical decisions about the [[student-ai-interaction|interaction pattern]] a course permits, not technical requirements: prompt thinking instead of handing over answers, align AI with the course's own problems and outcomes, keep the lecturer in the loop by seeing what students ask, build AI into assignments as an explicit step, and assess learning without AI because work produced with AI shows performance rather than learning. The first was the decisive difference in the Turkish trial and the default left unused at Maryland.

The school trials isolate the mechanism cleanly: the Turkish study held the model constant and varied a single prompt instruction, while the Nigerian and UK studies kept a human educator in the loop. That is where [[ai-literacy|AI literacy]] enters differently than policymakers assume. From the 2026–2027 school year Vietnam teaches AI in all general schools under Decision 2422/QĐ-BGDĐT, but that curriculum teaches students about AI, while the evidence here concerns learning with it.

## Vietnam's regulatory turn

Official Letter 4606/BGDĐT-GDĐH of 23 August 2024 asked universities to strengthen AI use across teaching, assessment and governance; Circular 49/2026/TT-BGDĐT, effective 15 August 2026, then set rules for higher and vocational education, stating that AI is a support tool that does not replace the academic role and responsibility of lecturers. It requires each institution to adopt internal rules on [[academic-integrity|academic integrity]] and a code of conduct for AI use in training and research, and lists using AI to cheat and failing to disclose AI use as violations.

Pham argues the mandated code of conduct should be written as a teaching framework rather than a list of bans, with permitted uses alongside prohibitions and an AI policy in every syllabus. Four local conditions shape how the principles land: large classes make tutors attractive but hard to monitor, grade pressure encourages using AI for answers rather than understanding, unequal preparation matters because the Maryland losses fell hardest on first-generation students, and most models are trained mainly on English. That combination — a legal obligation, a design literature and no local trial — is the gap the review addresses, and it is why he warns against treating detection scores as disciplinary evidence.

## What this means for practice

- **Configure the tool for guidance, not answers.** Where a tutor mode exists, turn it on; where it does not, give students a prompt that asks AI to guide rather than answer.
- **Build the tool into the assignment, and pilot with a comparison group before scaling.** Require the attempt, the AI feedback and the revision as a sequence: the Maryland tool arrived without lecturer training in course design and with no instructor wiring it into assignments.
- **Keep an [[assessment|assessment]] component without AI.** In-class tests, oral checks or presentations are the only measures here that show what students can do once the tool is gone.
- **Watch the students with the weakest preparation.** The largest losses fell on first-generation students and participation fell 0.90 SD across treated classes, so monitoring should target disengagement rather than average performance.
- **Do not let detector output decide a case.** Seven detectors averaged 61.3% false positives on non-native English essays; treat a flag as a reason for human review.

## Limitations

- The review is a selective narrative synthesis, not a systematic review or meta-analysis; no search protocol or effect-size pooling is reported, and the four higher-education trials differ in discipline, tool, duration and outcome measures.
- The Maryland study is an IZA discussion paper that the review itself flags as not yet peer-reviewed, and it is the single source for the 0.37 SD and 0.90 SD figures.
- The Turkish, Nigerian and UK trials are school-level evidence used to explain mechanism, and the author concedes it may not transfer directly to universities.
- No [[rct|randomized trial]] of AI tutoring in Vietnamese higher education has been published, so the policy recommendations rest on evidence from other systems.
- The Harvard tutor's underlying model is not named, so its capability claims are tied to an unrecorded vintage; only the Maryland (GPT-4o) and Turkish (GPT-4) trials specify one.

## Citation

Pham, V. H. (2026). [*Generative AI in University Teaching: Tutor or Shortcut?*](https://osf.io/preprints/edarxiv/879sp_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/879sp_v1
