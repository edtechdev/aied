---
title: "SourceTrace: Designing Epistemic Friction for Source-Based Second-Language Argument Writing With Generative Artificial Intelligence"
created: "2026-11-15T06:40:00-05:00"
updated: "2026-11-15T06:40:00-05:00"
type: article
sources: ['raw/papers/al-damen-sourcetrace-epistemic-friction-writing-2026.md']
source_url: "https://doi.org/10.1016/j.caeo.2026.100434"
published: "2026"
confidence: high
evidence_context: educational
audience: [researchers, instructors, instructional designers]
level: [higher ed, undergraduate]
discipline: [language learning, writing education]
page_kind: [evaluation]
research_method: [experiment]
foundations: [critical-thinking, ai-literacy]
pedagogy: [scaffolding, transfer-of-learning, metacognition]
technology: [generative-ai, llm]
assessment: [assessment-validity]
methods: [mixed-methods-research, rct]
ethics: [trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: Hermes-Agent
---

> **Synthesis:** This trial holds the model constant and varies only what the interface demands before generated text may enter a draft. Ninety-six [[language-learning|second-language]] English majors in Jordan wrote for four supervised weeks in one of two browser workspaces built on the same [[llm|large language model]] snapshot, GPT-4o: an ordinary chatbot, or SourceTrace, which required a four-field transfer card before insertion. On a later essay written without AI, the SourceTrace group scored 1.38 points higher on a 20-point rubric, concentrated in source-evidence dimensions rather than claim sharpness or counterargument. Logs and 24 stimulated-recall interviews suggest the mechanism was not slowness but the relocation of judgment to the moment of transfer. The authors call this a proof of concept for transfer gating, not evidence for any single card field.

## Key Findings

1. **The gate raised later unaided writing.** On a posttest essay written with no AI, SourceTrace students outscored StandardChat students by 1.38 points on the 20-point rubric, a large adjusted effect.
2. **Both groups improved; one improved far more.** Mean gain was 3.38 points under SourceTrace and 2.00 under StandardChat.
3. **The advantage sat in the evidential dimensions.** Evidence relevance, source attribution and epistemic calibration moved in SourceTrace's favor; claim precision and counterargument integration did not.
4. **Source checking improved and ungrounded copying fell.** Source-evaluation accuracy rose 0.59 points, and unverified uptake fell from 0.366 to 0.246 of transferred clauses.
5. **Students took less text, defended more, and revised deeper.** They accepted 5.53 suggestions per session against 6.20, yet a larger share were source-justified (0.779 against 0.581), and global revisions nearly doubled.
6. **The interviews described judgment moved, not work added.** All 24 interviewees described enforced verification and negotiated trust in machine fluency, though several found the fields mechanical under time pressure.

## Where the friction was placed

Fluent prose can look warranted before anyone checks whether a source carries it, and a chatbot that permits direct insertion rewards that mistake. SourceTrace therefore gated adoption rather than generation: both conditions shared source packets, prompt functions, model and supervision, but text could not enter the draft until the student classified its move, judged its evidential status, named a counter-position and justified the source.

This is [[scaffolding|scaffolding]] in a specific sense: not a prompt to think harder, but a checkpoint at a consequential moment. The authors tie it to [[trust-calibration|appropriate reliance]] rather than blanket acceptance, and to cognitive forcing functions that make users scrutinize recommendations. The gate checked no facts and blocked no brainstorming, so the treatment tests placement, not quantity.

## Four weeks, one course, ninety-six writers

Participants were upper-intermediate English majors in a compulsory second-year writing course at a public university in Jordan, placed with the Oxford Online Placement Test and randomized 1:1 within strata of section and placement tercile. Raters were blind to condition; students could not be. All 96 completed the pretest, four 90-minute assisted sessions and a 40-minute posttest on a new but genre-matched topic.

Each session gave students three texts — supportive, critical, mixed — and asked for a 450- to 550-word argument essay. Two doctoral-level applied linguists scored a five-dimension rubric, with total-score agreement at ICC(2,1) = 0.881. The comparison isolates transfer procedure alone, so it cannot say whether a chatbot helps or harms writing relative to no AI.

## What the four weeks produced

Adjusted for pretest score, section and placement, the SourceTrace advantage on the transfer essay was 1.38 points (95% CI 0.90 to 1.86, p < .001; adjusted d = 1.17). Source-evaluation accuracy rose 0.59 points (95% CI 0.11 to 1.07, p = .017; adjusted d = 0.50). The advantage was uneven: after Holm adjustment, evidence relevance (0.40, p = .017), source attribution accuracy (0.46, p = .033) and epistemic calibration (0.42, p = .033) differed, while claim precision and counterargument integration did not.

## What the logs and interviews add

Process data matter because a completion gate can be satisfied mechanically. Unverified uptake ran at a marginal probability of 0.246 under SourceTrace against 0.366 under StandardChat (log-odds -0.61, 95% CI -0.86 to -0.37), and source-justified uptake at 0.779 against 0.581 (log-odds 0.84, 95% CI 0.64 to 1.04); the ordinal model put the odds ratio for deeper revision at 2.86. Across 1061 accepted suggestions they used all four evidential-status categories — directly supported 42.9%, inferable 46.8%, unverifiable 5.2%, not yet supported 5.1% — and 467 card episodes were followed by revision, 45.8% reaching local meaning-level change and 42.8% global change. Session duration and turns were similar, so the gain is not extra time.

The [[mixed-methods-research|explanatory sequential]] interviews explain the direction of the effect. StandardChat students described verification as a discipline they could postpone; SourceTrace students described a pause that forced the question. That fits the dimension pattern: a checkpoint asking whether a source carries a sentence should move evidence, attribution and calibration, and leave planning and counterargument alone. It also supports a [[metacognition|metacognitive]] reading, since the card externalizes a judgment students would otherwise make silently.

## What this means for practice

- **Instructors:** Require a short justification before [[generative-ai|AI-generated]] language enters source-based work — rhetorical role, whether support is direct or inferential, the relevant reading, the evidential fit. The burden was a few fields per transfer.
- **Instructional designers:** Separate generation from adoption in the interface and log the decision point. Students here kept the same model and sources; only transfer changed.
- **Writing program leads:** Do not expect such a gate to fix thesis precision or counterargument; those dimensions did not move.
- **Researchers:** Treat process measures as converging evidence: source-justified uptake counts accepted suggestions only, so it misses good judgment in rejection.

## Limitations

- Single site in Jordan, 96 upper-intermediate English majors, four supervised weeks, no delayed posttest.
- Students could not be blinded and all sessions were invigilated, so novelty and expectancy effects remain plausible.
- The card fields and the gate were implemented together; no component can be credited individually.
- The six-item source-evaluation task was purpose-built, with overlapping but non-identical pretest and posttest forms.
- StandardChat is the only comparison, so neither interface can be compared with writing without AI.

## Citation

Al-Damen, H., Almashour, M., Jarrah, M., Al-Deaibes, M., & AlSharefeen, R. (2026). [SourceTrace: Designing epistemic friction for source-based second-language argument writing with generative artificial intelligence](https://doi.org/10.1016/j.caeo.2026.100434). *Computers and Education Open*.
