---
title: "Academic writing self-efficacy and AI dependency among university students: academic anxiety as a mediator and teacher emotional support as a moderator"
created: "2026-11-26T09:18:38-05:00"
updated: "2026-11-27T14:10:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/cao-writing-self-efficacy-ai-dependency-2026.md']
confidence: medium
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: [writing education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, faculty developers, researchers]
pedagogy: [self-efficacy, anxiety-and-stress, motivation]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: [cognitive-offloading]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Cao and Park (2026) surveyed 1,012 Chinese [[higher-ed|university]] students to ask why some writers come to depend on [[generative-ai|generative AI]] for [[writing-education|academic writing]] and others do not. Lower academic-writing [[self-efficacy|self-efficacy]] was associated with greater AI dependency both directly and through higher academic [[anxiety-and-stress|anxiety]], and teacher emotional support moderated that chain in an unexpected direction: its association with anxiety was negative at lower self-efficacy but positive at higher self-efficacy, and the negative indirect path from self-efficacy to dependency through anxiety was weaker where support was high. The authors read this as a compensatory role for emotional support among struggling writers, not as a general protective factor. The study is cross-sectional and fully [[self-report-measures|self-report]], so the mediation is a decomposition of concurrent associations rather than a causal chain — but it names a mechanism that [[cognitive-offloading|over-reliance]] research usually leaves implicit, and it suggests that support and independence can pull in opposite directions.

## Key Findings

1. **Low writing self-efficacy tracked higher AI dependency.** The latent correlation between academic-writing self-efficacy and AI dependency was −0.505, and the direct association remained significant after the mediator was included.
2. **Academic anxiety partly carried the association.** Self-efficacy was negatively associated with anxiety and anxiety positively with dependency, producing a significant indirect path of about −0.20 standard units.
3. **Mediation was partial, not complete.** A substantial direct association survived, so anxiety explains part of why confident and unconfident writers differ rather than all of it.
4. **Teacher emotional support behaved differently by self-efficacy level.** Its conditional association with anxiety was negative at lower self-efficacy and positive at higher self-efficacy, which the authors describe as a suppression pattern rather than a simple buffer.
5. **Support weakened the protective indirect path.** The negative indirect association between self-efficacy and dependency through anxiety was weaker at higher levels of teacher emotional support.
6. **Dependency scores were above the scale midpoint while anxiety sat slightly below it.** Mean AI dependency was 3.62 and mean academic anxiety 2.93 on five-point scales, in a sample restricted to students who had used AI for writing in the previous six months.
## What the study actually measured

All four constructs came from one questionnaire administered at one time point: the 16-item Situated Academic Writing Self-Efficacy Scale in a translated Chinese version, a teacher emotional support scale adapted from a middle-school instrument, an anxiety measure situated in academic writing by instruction, and an AI dependency scale whose referent was broadened from ChatGPT to generative AI generally. The measurement model fits well (χ²/df = 1.135, CFI = 0.994, RMSEA = 0.012), and the authors ran common-method checks including a single-factor comparison and an unmeasured latent method factor. Those checks reduce the concern; they cannot remove it. Nothing here observes what students actually did, so "dependency" is a self-report about reliance, not a usage trace.

## Reading the support result

The moderation is the part worth arguing about. A protective story would predict that emotional support lowers anxiety most for the least confident writers, and the data are consistent with that at low self-efficacy. Above the midpoint, though, support was associated with *higher* anxiety, and the indirect benefit of high self-efficacy shrank as support rose. The authors' explanation is compensatory: support keeps anxious, low-efficacy writers in the task, while for confident writers it may add performance pressure or shift the relation between reassurance and self-judgment. For [[teacher-role|instructors]] the practical reading is that emotional support is not a uniform good and should be calibrated to the writer, which is a different recommendation from "be more supportive".

## What this means for practice

- **Instructors.** Treat low writing self-efficacy, not low effort, as the signal that a student is drifting toward AI dependence, and build the assignment around a task the student can already partly do.
- **Instructors.** Calibrate emotional support rather than maximizing it. Encouragement aimed at confident writers may raise the anxiety it is meant to lower, so check whether support is being read as evaluation.
- **Faculty developers.** Pair writing-support programs with explicit self-efficacy work — small authentic writing tasks, models of revision, and feedback on process rather than polish — instead of relying on reassurance alone.
- **Researchers.** Replicate the moderation with behavioral measures of AI use before treating teacher emotional support as a lever on dependency.

## Limitations

- The design is cross-sectional, so temporal ordering and causal inference are unavailable; the authors describe the effects as a statistical decomposition of associations.
- All four constructs are self-report from a single questionnaire, and common-method bias cannot be entirely ruled out despite CFA-based checks.
- Sampling was purposive and convenience-based across four regions of China, restricted to students who had used AI for academic writing within six months, so dependency levels do not describe the wider student population.
- The scales were adapted across tools, populations and contexts: the dependency scale's referent moved from ChatGPT to generative AI, the support scale was written for [[secondary-education|middle school]] students, and anxiety was situated in writing through instructions alone.
- Measurement invariance across demographic subgroups and across languages was not tested.

## Citation
Cao, J., & Park, C. (2026). [*Academic writing self-efficacy and AI dependency among university students: academic anxiety as a mediator and teacher emotional support as a moderator*](https://doi.org/10.3389/fpsyg.2026.2021768). Frontiers in Psychology, 17.
