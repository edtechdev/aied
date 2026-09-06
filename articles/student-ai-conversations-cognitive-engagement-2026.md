---
title: "Chat as Learning: Student-AI Conversations as Discipline-Associated Cognitive Engagement Patterns"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-01T12:00:00-04:00"
type: article
sources: ["raw/papers/student-ai-conversations-cognitive-engagement-2026.md"]
tags: ["student-ai-interaction", "student-engagement", "generative-ai", "critical-thinking", "higher-ed", "prompt-engineering"]
confidence: medium
---

## Overview

This paper proposes a "Chat as Learning" measurement paradigm that treats student prompts to AI [[teacher-role|teaching]] assistants as observable externalisations of in-progress learning cognition, complementing outcome-based assessment with a process-level signal. Analysing over 60,000 student messages from 116 courses across four universities (Semesters 3 and 4 of the Uedu platform), the authors combine automated Bloom's Taxonomy classification with a within-person, cross-discipline design in which the same students serve as their own controls across courses in different disciplines. The findings show that [[student-ai-interaction]] reflects discipline-associated cognitive engagement patterns rather than fixed individual traits, with implications for how [[generative-ai]] teaching assistants should be designed and evaluated in [[higher-ed]].

## Key Findings

- Approximately 62% of student prompts reflected higher-order cognitive demand (Apply or above) consistently across two semesters and four disciplines (61.4% in Semester 3, 62.8% in Semester 4), consistent with the view that [[student-engagement]] operates at the constructive/interactive end of the [[icap-framework|ICAP]] continuum rather than as mere retrieval.
- The same students showed measurably different Bloom-level prompt profiles across disciplines: [[stem-education|STEM]] courses were Apply-prevalent (20.8%), Language & Writing courses were Understand-prevalent (31.7%), and Social Science courses were Create-prevalent (33.8%); a [[humanities-education|Humanities]] profile (Evaluate-prevalent, 24.4%) was reported descriptively only given a small course base.
- Paired within-person comparison found that the same students produced significantly higher proportions of higher-order prompts in Social Science than in STEM courses (pooled n = 16, p < .001), with the same direction of effect observed in two semester-specific samples.
- Within-person shifts were largest at the Create level: the same students produced only 7.7%–19.7% Create-level prompts in STEM courses but 37.8%–42.8% in Social Science courses (an 18–35 percentage-point increase), while Understand-level prompts dropped by roughly 14–15 points.
- A crossed random-effects GLMM confirmed the Social Science vs. STEM contrast (pooled OR = 1.51, 95% CI [1.33, 1.72], p < .001) and showed that course-level variance in higher-order engagement (σcourse ≈ 0.96) substantially exceeds student-level variance (σstudent ≈ 0.41), re-orienting interventions toward course-level features.
- The automated [[llm]] Bloom classifier was validated against human coding (binary LLM–human Cohen's κ = .426–.606, best-pair consensus κ = .753), with disagreement occurring mainly on messages ambiguous to human raters as well, supporting the use of [[prompt-engineering]] traces in [[learning-analytics|learning analytics]].

## Implications for Practice

- AI teaching assistants should be designed with disciplinary context in mind rather than as one-size-fits-all tools — e.g., STEM assistants might foreground procedural [[scaffolding]] and worked-example progression, while Social Science assistants might foreground argument scaffolding and perspective-taking prompts.
- Evaluation metrics for AI teaching assistants should account for disciplinary norms: a predominantly Apply-level interaction pattern indicates productive engagement in a STEM context but might suggest insufficient depth in a Social Science context, and can be benchmarked against [[discipline-specific-aied|discipline-specific]] cognitive-engagement norms.
- Because course-level factors (instructor [[pedagogy]], AI system prompt configuration, assessment structure) dominate student-level differences, the most informative references for an individual course and student are their discipline norm and course rather than the platform mean.
- [[critical-thinking]] claims about student AI use benefit from process-level prompt traces: the discipline-associated, within-person patterning of prompts is inconsistent with a uniformly retrieval-only account of how students use AI.

## Connected Concepts

- [[student-ai-interaction]]
- [[student-engagement]]
- [[critical-thinking]]
- [[generative-ai]]
- [[higher-ed]]
- [[prompt-engineering]]

## Connected Articles

- [[chatbot-engagement-genai-competency-emotion-2026]]
- [[lim-bannert-student-regulation-genai-chatbot-2026]]
- [[isaza-chatgpt-engineering-prompting-2026]]
- [[engagement-intensity-learner-modeling]]

## Citation

[Chat as Learning: Student-AI Conversations as Discipline-Associated Cognitive Engagement Patterns](https://www.sciencedirect.com/science/article/pii/S2666920X26001062) — Chang, C.-K., & Li, K.-H. (2026). *Computers and Education: Artificial Intelligence*, 11, 100644.
