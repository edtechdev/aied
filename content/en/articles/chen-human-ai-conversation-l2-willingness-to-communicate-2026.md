---
title: "Human-AI conversational experience and L2 speaking willingness to communicate: the mediating role of self-efficacy and the moderating role of speaking anxiety"
created: "2026-11-19T09:30:00-05:00"
updated: "2026-11-19T09:30:00-05:00"
type: article
pedagogy: [self-efficacy, anxiety-and-stress]
technology: [conversational-ai, generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research, mixed-methods-research]
research_method: [survey, structural equation modeling, thematic analysis]
discipline: [language learning]
level: [higher ed]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/chen-human-ai-conversation-l2-willingness-to-communicate-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1948405"
source_depth: full text
confidence: medium
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
---

> **Synthesis:** Chen and Wang (2026) surveyed 486 Chinese and 412 Malaysian university students immediately after a standardized 15-minute English conversation with a [[conversational-ai|ChatGPT-4o conversation partner]], then fitted a moderated mediation model. Perceived quality of that conversation was associated with stronger [[self-efficacy|speaking self-efficacy]] (β = 0.34) and, far more weakly, with greater willingness to speak English with people (β = 0.10); the indirect path through self-efficacy carried 56.5% of the total association. [[anxiety-and-stress|Speaking anxiety]] related negatively to willingness (β = −0.19) yet steepened the self-efficacy path, which ran from 0.24 at low anxiety to 0.52 at high anxiety. Configural, metric and partial scalar invariance held across the two national samples, and the interaction was significant in each (China β = 0.17; Malaysia β = 0.11) even though a Wald test found no significant between-group difference. Open-ended responses most often described a low-threat rehearsal space; a substantial minority doubted the confidence would survive contact with a human interlocutor. All of it is concurrent self-report about an unrecorded interaction.

## Key Findings

- **Self-efficacy carried over half of the association.** HAICE → SSE β = 0.34, HAICE → SWTC β = 0.10, and the indirect path of 0.13 [0.08, 0.18] took 56.5% of the total 0.23.
- **Mediation was partial, not complete.** A residual direct association of 0.10 survived the mediator, leaving room for affective and [[motivation|motivational]] routes the model never tested.
- **Anxiety worked against willingness.** SA → SWTC was β = −0.19, and AI conversational experience was itself negatively associated with anxiety (HAICE → SA β = −0.15).
- **Anxiety steepened the efficacy path in both countries.** The SA × SSE term was β = 0.14, significant in China (0.17) and Malaysia (0.11), with no Wald difference (χ²(1) = 1.87, p = 0.171).
- **The model left most willingness unexplained.** Efficacy and anxiety accounted for approximately 27% of the variance in willingness; the interaction added a small increment on top.
- **Learners named the trade-off themselves.** In 638 open-ended responses, 42.3% welcomed speaking without judgment, 28.4% doubted transfer, 21.8% feared over-reliance and 14.6% worried about uncorrected errors.

## How the study was run

Data were collected between November 2025 and March 2026 at two [[higher-ed|universities]], one in northwestern China and one in Kuala Lumpur. Every participant completed the same 15-minute [[language-learning|English conversation]] with [[generative-ai|ChatGPT-4o]] through a researcher-configured interface that cast the model as a "conversation partner" rather than a tutor, capped replies at 60 words and forbade switching into the learner's first language. Three five-minute modules covered self-introduction, opinion expression and a simulated workplace scenario. A questionnaire followed immediately, administered in Mandarin or Malay on five-point scales: six items on conversational experience, five each on speaking self-efficacy and anxiety, six on willingness to communicate. No audio was retained. After exclusions for incomplete responses, failed attention checks and implausibly fast completion, 486 Chinese and 412 Malaysian responses remained (N = 898).

## Why self-efficacy carries the association

The mediation is the paper's central claim. A total association of 0.23 with willingness splits into 0.10 direct and 0.13 through speaking self-efficacy, so the indirect path absorbs 56.5%. Chen and Wang read this through Bandura — performance experience shifts domain-specific efficacy beliefs, which in turn predict the intention to speak — and treat the surviving direct path as evidence that naturalness, affective safety and engagement matter beyond confidence. Their caveats deserve equal weight: a proportion mediated describes relative path sizes inside one model, not a causal decomposition, and the same covariance fits a story in which confident speakers simply rated the conversation more warmly. Dropping the two items closest to efficacy and anxiety left the pattern intact (β = 0.30; indirect 0.11), which rules out item overlap but not reverse causation.

## Anxiety as a moderator, and what held across two countries

Anxiety did not simply subtract from willingness. Its main association was negative, but the positive interaction means the efficacy-to-willingness slope steepened as anxiety rose: 0.24 a standard deviation below the mean, 0.38 at it, 0.52 above. The conditional indirect association moved the same way, from 0.08 to 0.18, with an index of moderated mediation of 0.05. The authors read this as efficacy converting into intention more readily once the evaluative audience disappears — precisely for learners anxiety would otherwise block. The cross-national test is more restrained. Configural and metric invariance held (ΔCFI = 0.003); full scalar invariance failed (ΔCFI = 0.013) and gave way to a partial version (ΔCFI = 0.008). The interaction was larger in China (0.17 versus 0.11), but the Wald comparison (χ²(1) = 1.87, p = 0.171) does not license a national difference.

## What self-report cannot show

Everything was measured in one sitting immediately after the task, so the arrows encode theory rather than observed order. There was no comparison condition either: no human partner, no ordinary speaking exercise, no no-practice group. Any supportive, low-pressure speaking activity might produce the same associations, leaving the specifically AI-flavored explanation — evaluative neutrality, reduced face threat — plausible but untested. Because audio was not recorded, nothing here speaks to fluency, lexical complexity or how the model responded; willingness was [[self-report-measures|self-reported]] and referred only to human interlocutors, never to the AI. With nearly 900 participants, coefficients of this size reach significance easily. The residual-anxiety theme points the same way, and [[transfer-of-learning|transfer]] remains open: learners comfortable with the machine were not thereby ready for a seminar room.

## What this means for practice

- **Instructors.** Treat [[student-ai-interaction|AI conversation]] as rehearsal that must be cashed out in front of people; follow each session with pair or whole-class speaking.
- **Instructors.** Make learners attribute success to their own moves — have them log the phrases and repairs they used, so the efficacy gain attaches to their competence, not the tool.
- **Language program designers.** Sequence AI-mediated speaking early and withdraw the scaffold across the term, pairing it with teacher-led review of errors the model lets pass.
- **Researchers.** Measure speaking, not only willingness: retain consented audio or logs, add a human-conversation arm, and test whether survey willingness shows in observed talk.

## Limitations

- Cross-sectional and single-occasion: predictors and outcomes came from one time point immediately after the task, so no temporal ordering is observed.
- All four constructs are self-report, and common method variance cannot be ruled out despite Harman's test (23.7% single factor) and a common latent factor test (Δχ²(22) = 31.04, p = 0.097).
- No speaking-performance measure: audio and transcripts were not retained, so fluency, accuracy and volume of production were never observed.
- Two national samples only, with country standing in for sociolinguistic and institutional differences; no cultural measures were taken.
- The conversational-experience scale was purpose-built here and awaits external [[assessment-validity|validation]].

## Citation

Chen, X., & Wang, M. (2026). [*Human-AI conversational experience and L2 speaking willingness to communicate: the mediating role of self-efficacy and the moderating role of speaking anxiety*](https://doi.org/10.3389/fpsyg.2026.1948405). Frontiers in Psychology, 17, 1948405.
