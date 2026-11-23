---
title: "Redefining efficiency in post-editing of LLM-generated translation: why expert translators take more time"
created: "2026-11-23T09:00:00-05:00"
updated: "2026-11-23T09:00:00-05:00"
published: "2026-11-20"
type: article
authors: ["Longhui Zou", "Michael Carl", "Jia Feng"]
venue: "Frontiers in Psychology"
evidence_context: educational
foundations: [human-ai-collaboration, theories-and-frameworks]
pedagogy: [metacognition, professional-training]
technology: [llm, educational-nlp]
assessment: [evaluative-judgment]
methods: [quantitative-research, usability-research]
ethics: [hallucination-risk]
research_method: [experiment, user study]
discipline: [language learning]
level: [higher ed]
audience: [instructors, learners, researchers]
page_kind: [evaluation]
sources: ["raw/papers/zou-post-editing-llm-translation-efficiency-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes, links]
---

> **Synthesis:** Zou, Carl, and Feng (2026) test whether post-editing expertise shows up as speed when translators work on fluent but semantically unreliable [[llm|large language model]] output. Sixteen professional translators and 30 translation students post-edited GPT-4 English-to-Chinese translations under light and full post-editing guidelines and under termbase and open Internet-search conditions, and the authors modeled five mixed-effects analyses over 2,151 post-edited segments. Experts took longer overall (about 95 versus 79 minutes) yet showed no blanket correction advantage; instead, their time allocation rose more steeply as critical-error density increased, and they corrected minor errors more under full post-editing. Students over-edited less under light post-editing and introduced fewer new errors with a structured termbase, while error annotation using an adapted ATA framework reached weighted Fleiss' kappa of 0.862. The study reframes efficiency as [[metacognition|metacognitive]] regulation of effort rather than throughput, and argues that translator training should target task-sensitive judgment about when to intervene rather than processing speed alone.

*Controlled 2 × 2 × 2 mixed-factorial experiment with keystroke logging and mixed-effects modeling; expertise is a between-subjects factor, and the sample is limited to English-to-Chinese post-editing of GPT-4 output.*

## Key Findings

- **Expertise was not speed.** Experts spent about 95 minutes on the four tasks against about 79 minutes for students, yet the group difference in critical-error correction was not statistically significant.
- **Experts regulated time to critical errors.** Time allocation rose with critical-error density for both groups, but the increase was steeper for experts, and the group-by-density interaction was significant.
- **Guidelines changed behavior differently by group.** Under light post-editing students corrected fewer minor errors, while under full post-editing experts corrected more; students' critical-error correction declined under the lighter guideline.
- **Structured resources helped students most.** Students introduced fewer new errors with a curated termbase than with open Internet search, a difference not seen for experts.
- **Editing activity was not virtue.** More deletions per source token predicted more new errors for students, and long pauses predicted lower minor-error correction in both groups.
- **The framework is task-relative.** Temporal regulation, intervention calibration, and resource adaptability together describe expertise better than any single speed or quality measure.

## Why fluent output changes the post-editing task

Earlier machine translation often announced its own failures through disfluency, rigid renderings, or grammatical mistakes. [[llm|Large language model]] output is different: it is highly fluent while still containing subtle semantic errors, inconsistencies, or confabulations, and automatic metrics can score such output highly even when human evaluators find critical flaws. That combination makes post-editing an evaluative task rather than a correction task. Translators must judge meaning, terminology, and contextual appropriateness in text that gives few visible cues about where the problems are. The authors call the resulting risk [[hallucination-risk|hallucination]], and they argue that this shift breaks the conventional equation of efficiency with speed: when problematic translations are less immediately salient, additional processing time may represent more thorough evaluation rather than ineffective performance. The question becomes whether effort is proportionate to the task, not how fast the task is finished.

## Three dimensions of relevant efficiency

The paper operationalizes relevant efficiency in three dimensions. Temporal regulation is adjusting processing time to the severity and density of errors in the raw output. Intervention calibration is matching the level of editing to the quality target: full post-editing aims at publication-ready output, while light post-editing seeks comprehensible and accurate text and therefore requires distinguishing required corrections from improvements the brief does not ask for. Resource adaptability is maintaining reliable performance when external support differs in structure and openness, from a curated termbase to an open-ended Internet search. The conceptual basis is [[metacognition|metacognitive]] regulation and strategic effort allocation rather than a direct claim about cognitive load. The authors treat the three dimensions as observable patterns of effort and intervention, which is what makes them usable in [[professional-training|translator training]].

## What the models showed

Five linear mixed-effects models covered 733 critical-error segments, 896 light-post-editing minor-error segments, 888 full-post-editing minor-error segments, and all 2,151 post-edited segments for time allocation and new-error introduction. Models 1 and 3 also included the guideline-by-resource interaction. Experts showed a stronger positive association between critical-error density and time allocation than students, while the corresponding interaction for minor-error density was not significant. Students had lower estimated time allocation than experts under full post-editing, and experts allocated less time under light than full post-editing. Students also corrected fewer minor errors under full post-editing and showed a group-by-guideline interaction for critical-error correction. The group-by-resource interaction for new-error introduction was significant, consistent with a larger benefit from the termbase for students. No group advantage appeared across every measure.

## Process indicators are not virtue

The process models complicate any assumption that more editing means better editing. Among students, deletions per source token were positively associated with new-error introduction, so heavier revision activity tracked a worse outcome. Among experts, cursor movement variability was positively associated with critical-error correction. Time spent in pauses longer than 1,000 milliseconds per source token predicted lower minor-error correction in both groups, which the authors read cautiously as a sign of processing difficulty rather than a cause. The pedagogical point is that [[evaluative-judgment|evaluative judgment]] about which errors warrant intervention cannot be replaced by volume of activity, and that instruction should make time allocation and revision decisions visible to [[learners]] rather than rewarding speed. The study also collected eye-tracking and workload data but did not analyze them in the reported models.

## What this means for practice

- **[[teacher-role|Instructors]].** Teach light and full post-editing as distinct decision-making tasks, not as a scale of how much to change, and have students justify which errors require intervention under each brief.
- **Instructional designers.** Sequence resource use from curated termbases toward open Internet search, with explicit guidance on judging reliability and contextual fit.
- **Learners.** Track how time investment tracks error density and severity, and treat long pauses as a signal to reconsider strategy rather than as wasted time.
- **Researchers.** Pair keystroke logs with [[sensor-and-gaze-analytics|eye tracking]] and workload measures, and counterbalance task order to separate expertise from practice and fatigue.

## Limitations

- Keystroke measures are behavioral indicators, not direct measures of cognitive load or deliberate regulation, and the eye-tracking and NASA-TLX data were collected but not analyzed.
- Experts and students differed in age and second-[[language-learning|language learning]] experience as well as professional experience, so group differences are not purely expertise effects.
- The order of experimental conditions was fixed (light post-editing before full), leaving practice and fatigue effects uncontrolled.
- The study covered English-to-Chinese post-editing of GPT-4 output with 46 participants and four general-topic source texts, and it simplified the error scheme into critical and minor categories.

## Citation

Zou, L., Carl, M., & Feng, J. (2026). [Redefining efficiency in post-editing of LLM-generated translation: why expert translators take more time](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1848312/full). *Frontiers in Psychology, 17*, 1848312.
