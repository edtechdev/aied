---
title: "ChatGPT as a cognitive crutch: Evidence from a randomized controlled trial on knowledge retention"
created: "2026-09-27T22:30:00-04:00"
updated: "2026-09-27T22:30:00-04:00"
type: article
sources: ['raw/papers/barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025.md']
confidence: high
published: "2025"
page_kind: [evaluation]
research_method: [experiment]
discipline: [information technology]
level: [higher ed, undergraduate]
audience: [instructors, researchers, instructional designers]
foundations: [ai-education, cognitive-offloading]
pedagogy: [desirable-difficulties, retrieval-spacing-interleaving, cognitive-psychology]
technology: [generative-ai, llm, conversational-ai]
assessment: [learning-gains, summative-assessment]
methods: [quantitative-research, rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Barcaui tested whether unrestricted ChatGPT use as a study aid harms long-term retention by randomly assigning 120 undergraduate business administration students at a Brazilian university to an AI-assisted or a traditional learning group. Both groups studied the same curated set of AI and machine learning topics and prepared a short presentation, but only the AI group could use [[generative-ai]] through the ChatGPT web interface. Retention was then measured with a surprise 20-question test 45 days after the learning intervention, under a randomized design intended to isolate the causal effect of AI assistance. Students who used ChatGPT scored 57.5% correct against 68.5% correct for traditional learners, t(83) = −3.19, p = .002, Cohen's d = 0.68 — a result Barcaui reads through [[cognitive-offloading]] and [[desirable-difficulties]].

## Key Findings

1. **The AI-assisted group retained less after 45 days.** Traditional learners averaged 6.85 of 10 (SD = 1.7) against 5.75 (SD = 1.5) for AI-assisted learners, a gap of about 11 percentage points (t(83) = −3.19, p = .002, Cohen's d = 0.68, 95% CI [0.24, 1.12]).
2. **Score distributions differed in shape.** Roughly 73.8% of traditional learners scored 6 or above against about 51.2% of AI-assisted learners, whose scores were more widely spread.
3. **The AI group studied less, and the effect survived that difference.** Time-on-task was 3.2 hours against 5.8 hours (t(83) = −4.92, p < .001), an approximately 45% reduction; with study time as a covariate the disadvantage remained (F(1, 82) = 7.89, p = .006), with adjusted means of 6.50 and 5.85, a difference of 0.65 points (95% CI [0.19, 1.11]).
4. **Prior AI familiarity did not moderate the outcome.** The correlation between AI familiarity and retention was weak and non-significant (r = 0.18, p = .10), so even frequent users showed no protection against the offloading effect.
5. **The deficit held across topic areas, largest for technical material.** Subgroup effect sizes were d = 0.92 for technical topics, d = 0.60 for other topics and d = 0.45 for ethics and society, with low heterogeneity (I² = 28%, p = .21).

## How the trial was run and what its design controls for

The study ran in three phases from October 2024 to January 2025: baseline assessment, a November learning intervention with randomized conditions, and a delayed January retention test. Participants were 120 business administration undergraduates (68 males, 52 females, ages 18–24), recruited by convenience from one large Brazilian university, with no prior formal AI or machine learning training. Simple randomization produced balanced groups of 60 each, matched on gender and self-reported AI familiarity.

Both groups worked from a common topic set standardized at roughly 8–12 core ideas and 25–35 minutes of study, and each participant was assigned one topic by a reproducible procedure block-randomized by difficulty band, so topic difficulty matched across conditions. The AI-assisted group used ChatGPT (GPT-4, free web interface, no API or plugins, browsing and custom instructions disabled) with no prompt-engineering guidance; the traditional group used course notes, library databases, non-AI search engines and textbooks. Each had two weeks to prepare a 10-minute presentation delivered to 8–10 peers.

The [[rct|randomized]] design supports causal interpretation, and several features tighten it: the surprise test reduces contamination from last-minute cramming, and it sampled evenly across the topic set so no student could tailor preparation to a known test. The 20 single-best-answer questions had internal consistency of Cronbach's α = .82 and were piloted on a separate sample of 30 students. Participants could not be blinded to condition, but scoring was machine-based and independent of it, and analyses used coded group identifiers. Assumption checks supported the parametric tests.

## Offloading, the removal of difficulty, and where interpretation begins

Barcaui reads the result through cognitive offloading — delegating mental operations to external tools — and through the principle that challenges at study time, such as [[retrieval-spacing-interleaving|retrieval, spacing and generation]], improve durable memory even while slowing immediate performance. Because ChatGPT supplies synthesis and explanation outright, the argument runs, it bypasses the productive struggle that would otherwise strengthen encoding. Barcaui argues generative AI is a qualitatively different form of offloading: unlike a calculator, it can absorb entire processes, including comprehension and aspects of critical thinking.

This [[cognitive-psychology]] framing is an interpretation of the pattern rather than a measurement of it. The paper names "borrowed competence" — AI supplying structure and reasoning that inflate the feeling of mastery without strengthening memory — and explicitly presents it as a testable interpretive hypothesis, not a finding. No process measure of effort was collected. The steeper forgetting curve for the AI group is a visualization-only exponential interpolation anchored at Day 0 (100%) and the observed Day-45 means; all inference rests on the Day-45 endpoints. The claim that traditional learners' longer sessions contained more rereading, self-quizzing and elaborative rehearsal is described in the paper as inferential.

## What this means for practice

- **Instructors.** Do not hand students unrestricted AI access during the initial encoding of new or conceptually demanding material; the technical-topic subgroup showed the largest deficit (d = 0.92), precisely where productive struggle matters most.
- **Instructors.** Sequence the assistance: delay AI until after an AI-free attempt and a quick self-quiz, then use it to compare answers and surface gaps ("AI-after-attempt"), or run it as a retrieval coach that responds only after students commit to an answer.
- **Instructional designers.** Treat time-on-task as a signal to watch. The AI group studied roughly 45% less, and the group by study-time interaction was not significant (F(1, 81) = 1.02, p = .31), so the disadvantage is not simply a quantity-of-time artifact.
- **Researchers.** Prior AI familiarity did not moderate retention (r = 0.18, p = .10), which the paper frames as a possible metacognitive blind spot; telemetry, self-quizzing logs and metacognitive judgments are the suggested next step for testing the mechanism.

## Limitations

- Attrition was substantial: 120 students enrolled and 85 completed the retention test (29.2% loss), balanced across conditions with no completer–non-completer differences on age, gender or initial knowledge, but missing-not-at-random mechanisms cannot be ruled out.
- Generalizability is constrained by a convenience sample from a single Brazilian business program, and the peer-presentation activity may engage learning-by-teaching processes that differ from exam-oriented study.
- Two variables were self-reported — prior AI experience and time-on-task — introducing recall and social-desirability error that likely attenuates associations and makes the time-retention estimates conservative.
- The study used one system, ChatGPT-4 via the web interface, within a defined calendar window; results could vary with other models, interfaces or future versions, and the retention-focused test does not cover competencies such as synthesis, prompt design or collaboration.

## Citation

Barcaui, A. (2025). [ChatGPT as a cognitive crutch: Evidence from a randomized controlled trial on knowledge retention](https://doi.org/10.1016/j.ssaho.2025.102287). *Social Sciences & Humanities Open*, 12, 102287.