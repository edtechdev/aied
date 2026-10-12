---
title: "Generative AI Steering and Human Authoring: Complementary Search-as-Learning Scaffolds in Cross-Session Aggregated Academic Search"
created: "2026-10-12T09:30:00-04:00"
updated: "2026-10-12T09:30:00-04:00"
type: article
foundations: [cognitive-offloading, learning-design]
pedagogy: [scaffolding, student-engagement]
technology: [generative-ai, llm]
methods: [quantitative-research]
audience: [instructional designers, software developers, researchers]
level: [higher ed]
page_kind: [evaluation]
research_method: [experiment]
confidence: high
sources: ['raw/papers/genai-steering-search-scaffolds-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** Academic search rarely fits in one sitting, so learners must reconstruct context when they return. Momeni and Hoeber compare two consolidation scaffolds for that moment: STAIS, which drafts [[generative-ai|GenAI]] summaries the learner can correct, reorganize and fact-check, and NT, a rich-text note editor where the learner authors the consolidation. In a controlled between-subjects study (n = 36) run across two sessions one week apart, the scaffolds did not make learners uniformly better or worse — they supported different facets. STAIS cut time to reacquaintance (0:55 vs 1:35) and raised precision of saved resources, while NT produced richer connections between concepts. The authors frame the division of consolidation labor between system and learner as a design variable rather than a settled good.

## Key Findings
1. **STAIS shortened reacquaintance and sharpened resource precision.** Time to reacquaintance was 0:55 with STAIS against 1:35 with NT (t(34) = 3.13, p < 0.01, d = 1.04), and precision of saved resources was 0.83 against 0.74 (p < 0.01, d = 0.95).
2. **STAIS participants reorganized more.** They moved 5.8 items between clusters in the resumed session against 3.5 for NT (p < 0.01, rrb = 0.52), evidence of active restructuring of the workspace rather than passive reading.
3. **Steering became more frequent on return.** Inline bullet corrections rose to a mean of 5.4 in the resumed session from 2.9 initially (Wilcoxon Z = 3.52, p < 0.001), so learners kept editing the AI summaries rather than accepting them.
4. **The note-takers shed lower-order work.** NT participants cut verbatim extraction from 1.2 to 0.3 (p < 0.01) and paraphrased summaries from 1.4 to 0.6 (p < 0.01), raising the share of higher-order activity in their notes while its absolute count held steady.
5. **The AI summaries still needed factual repair.** STAIS factual-error corrections rose from 1.2 to 2.1 (p < 0.01), so the scaffold shifted work toward correcting the model rather than toward reproducing sources by hand.
6. **The two conditions produced contrasting profiles, not a winner.** STAIS was associated with broader conceptual coverage and higher self-reported domain knowledge; NT was associated with richer inter-concept connections and higher self-reported certainty.

## Two consolidation scaffolds, two profiles

Aggregated academic search combines heterogeneous sources — a university library and a reference encyclopedia, in this study — into one workspace, and multi-session tasks require learners to reconstruct what they found and how they organized it. The authors treat end-of-session consolidation as the under-explored step in search-as-learning scaffolds. STAIS automates part of it by generating [[generative-ai|GenAI]] summaries, then leaves steering affordances (regeneration, inline corrections, fact-checking) with the learner. NT supplies rich-text editors and leaves the consolidation wholly to the learner. Both were enhancements of a shared baseline interface built in earlier work, so the contrast isolates the division of consolidation labor rather than a general search-interface effect.

## What the outcomes did and did not share

The initial 15-minute session produced near-identical time on task (14:55 vs 14:50), as expected from a fixed allocation, and the two conditions diverged only through the condition-specific actions each added. In the resumed session three utility measures separated them: reacquaintance time, precision, and items moved. The content analysis showed both conditions moved toward more cognitively demanding activity, but by different routes: NT participants shed reproductive work, while STAIS participants added higher-order corrections — precision refinements and cross-source work — on top of a continuing need to correct [[hallucination-risk|factual errors]] the summaries introduced. The authors read this as complementary rather than rivalrous: each scaffold strengthens a facet of post-resumption learning the other leaves weaker.

## Why the division of labor is the design variable

The finding that matters for [[learning-design|learning design]] is that neither scaffold dominates. When the system performs consolidation, resumption is fast and coverage broad, but the model's errors become the learner's repair task and inter-concept linking is thinner. When the learner performs it, connections between ideas are richer but reacquaintance is slower and the learner carries more reproductive labor. The authors position this trade-off as something a designer chooses deliberately — how much of the consolidation to hand to the model, and which steering affordances to leave in the user's hands — rather than as a capability the model either has or lacks. The worry that [[generative-ai]] shifts cognitive work away from the learner becomes a design question the study can specify — which consolidation tasks does the model take, and which stay with the learner — rather than a verdict it settles.

## What this means for practice
- **Instructional designers.** Decide explicitly which part of a multi-session task the AI summaries own and which part the learner owns, then expose controls for the part the learner keeps — regeneration, inline editing and fact-checking were the affordances learners used most on return.
- **Software developers.** Treat reacquaintance time as a measurable design target: on a workspace that persists across sessions, a summary-and-steer scaffold cut it by roughly 40 seconds against note-taking in this study.
- **Software developers.** Build fact-checking into any generated summary, because the summaries introduced claims needing correction and learners used the correction tools heavily in the resumed session.
- **Instructors.** Warn students that fast resumption and broad coverage are not the same as connected understanding; the note-taking condition produced more links between concepts even though it resumed more slowly.

## Limitations
- The study enrolled 36 participants, all from one [[higher-ed|university]], and both conditions used a single unfamiliar topic, so the profile differences may not hold for domains where learners already have [[prior-knowledge|prior knowledge]].
- The initial session was a fixed 15 minutes, which limited how much material either scaffold had to consolidate and may compress the differences between them.
- The domain-knowledge and certainty outcomes are [[self-report-measures|self-reported]]; the researcher's coding of notes and corrections supplies the behavioral evidence, and the authors did not report delayed learning measures beyond the one-week resumption.
- The scaffolds were evaluated with a single pair of source types (a library catalogue and Wikipedia), so generalization to other aggregated collections is untested.

## Citation

Momeni, M., & Hoeber, O. (2026). [Generative AI Steering and Human Authoring: Complementary Search-as-Learning Scaffolds in Cross-Session Aggregated Academic Search](https://arxiv.org/abs/2610.12755). *Information Processing & Management Conference (IP&MC 2026); arXiv:2610.12755*.
