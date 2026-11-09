---
title: "Self-efficacy, engagement, attitudes, and perceived learning in AI-assisted STEM education"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
discipline: [stem education]
level: [secondary]
audience: [instructors, researchers, educational technology developers]
sources: ['raw/papers/anagnostopoulou-ai-companion-stem-self-efficacy-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1977754"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [self-efficacy, student-engagement, motivation]
technology: [pedagogical-agent, personalized-learning, adaptive-learning]
assessment: [self-report-measures]
methods: [quantitative-research]
---
> **Synthesis:** Across 710 first-year secondary students in [[stem-education|STEM]] classrooms in Greece, Portugal, and Spain, how favorably students felt about an AI learning companion that gave [[personalized-learning|personalized]] guidance was more strongly associated with their reported learning than how engaged they were, how confident they felt, or whether they intended to keep using AI. After a single 45-minute [[inquiry-based-learning|inquiry-based]] laboratory session, a [[quantitative-research|PLS-SEM]] model on post-session self-reports found attitude the largest direct association with perceived learning (β = .306), then [[student-engagement|engagement]] (β = .275), intention (β = .176), and [[self-efficacy|self-efficacy]] (β = .119), with the model explaining 46.8% of the variance in perceived learning. [[pedagogical-agent|The companion]] tracked students across five inquiry phases, scored responses 1 to 3, and adjusted difficulty by performance band. Because every construct came from one questionnaire administered once, with no control group and no objective achievement measure, the coefficients describe how students' perceptions hung together in one lesson — not what the AI caused.

## Key Findings

1. **Attitude was the strongest correlate of perceived learning.** The direct path from attitude to perceived learning was β = .306 (p < .001, f² = .113), the largest in the model even after accounting for intention, engagement, and self-efficacy.
2. **Engagement trailed attitude but remained substantial.** Reported engagement with the companion predicted perceived learning at β = .275 (p < .001, f² = .077).
3. **Intention carried a smaller direct path and a real indirect one.** Intention predicted perceived learning at β = .176 (p < .001, f² = .040), and attitude worked through intention as well: attitude to intention was β = .455 (f² = .261) and the indirect attitude–intention–learning path was β = .080 (p < .001).
4. **Self-efficacy was the weakest predictor.** Self-efficacy predicted perceived learning at β = .119 (p < .001, f² = .022), a small effect the authors read as a concurrent association rather than evidence of change.
5. **The model explained 46.8% of perceived learning** and 20.7% of intention, with an SRMR of .074 and collinearity within limits (VIF range 1.000–1.844).
6. **The sample was new to this technology.** None of the 710 students had used an AI-based learning companion before, though about 35 percent reported prior experience with educational software.
7. **Method bias diagnostics were borderline-clean, not decisive.** The first unrotated factor accounted for 40.5% of total variance, below the 50% threshold, but the authors note that common-method effects cannot be ruled out when all constructs come from one instrument.

## What the study did

The study ran in real classrooms rather than a lab: 710 first-year secondary students (12–13 years old; M = 12.8, SD = 0.4; 52% female) from 6 schools and 24 classes across Greece (n = 350), Portugal (n = 180), and Spain (n = 180). Selection was purposive, requiring first-year enrollment, prior instruction on the scientific concepts in the lesson, and the technology infrastructure to run the platform, because random assignment was infeasible within standard curriculum scheduling. Each class completed one 45-minute session — five minutes of introduction, five of technical preparation, 30 minutes of interactive work with the companion, and five minutes for the post-trial questionnaire — with no dropouts recorded. All 710 students completed the post-session instrument, which required an answer to every item, so the dataset had no missing values. The design is single-group and post-test-only: no control condition and no pre-test. Analysis used partial least squares structural equation modeling in SmartPLS 4, following the two-step measurement-then-structure procedure, with bootstrapping at 5,000 resamples and a two-tailed test at α = .05.

## What predicted perceived learning

Attitude toward using the companion for STEM work — whether students judged it good, useful, and wise — produced the largest standardized coefficient at β = .306 (SE = .033, t = 9.186, 95% CI [.239, .371]). Engagement followed at β = .275 (SE = .035, 95% CI [.206, .343]), intention at β = .176 (SE = .033), and self-efficacy at β = .119 (SE = .030). Attitude also fed intention at β = .455, the strongest path in the model, and the indirect route from attitude through intention to perceived learning was β = .080 (95% CI [.050, .110]). The authors frame all of this as one simultaneous snapshot: because intention and perceived learning were captured in the same questionnaire, a student's satisfaction with the session may have shaped their stated intention to continue rather than the reverse. That reading matters for practice, since it means the attitude coefficient is best treated as a measure of how students appraised the experience, not as a lever the design has proven it can pull.

## The companion and the inquiry structure

The AI learning companion implements a five-phase inquiry cycle — Engagement, Hypothesis, Experiment, Analysis, and Reflection — with teachers authoring assignments against those phases. It monitors student responses, interactions, and time on task, scores each response 1, 2, or 3 against teacher-specified criteria, and uses those scores to classify students as low (1.00 ≤ score < 1.50), moderate (1.50 ≤ score < 2.50), or high performers (2.50 ≤ score ≤ 3.00), updating the classification as work proceeds so that task difficulty follows performance through [[adaptive-learning|adaptive]] pathways. Technically it combines learned, rule-based, and generative components: the conversational layer uses Rasa with trained natural language understanding models and dialogue policies tied to the inquiry scenario, and a [[llm|large language model]] supports content generation, but no LLM output reaches students until a teacher reviews and approves it. One design detail shapes how the engagement findings should be read: the companion initiates guidance automatically and has no student-requested help function, so every interaction happened inside support the system chose to offer.

## What this means for practice

- **Instructors.** Prepare students for automatic guidance rather than on-demand help: the companion offers support on its own schedule, so students who expect to ask for help when stuck will need a routine for reading the prompt in front of them.
- **Instructors.** Judge an AI companion by more than student satisfaction. Attitude was the strongest correlate of perceived learning (β = .306), which is exactly the kind of appraisal a likable tool earns without teaching anything.
- **Developers.** Instrument perceived learning against objective performance before claiming [[learning-gains|learning gains]]; this study measured only self-reported learning after one 45-minute session, and the authors call for objective problem-solving measures.
- **Researchers.** Report the intraclass structure when students are nested in classes and schools. These students came from 6 schools and 24 classes, and the analysis did not model that clustering, so the reported standard errors may understate uncertainty.

## Limitations

- Single-group, post-test-only design with no control group and no pre-test, so no observed relationship can be attributed to the companion rather than to prior knowledge, individual characteristics, or classroom conditions.
- All five constructs came from one [[self-report-measures|self-report]] questionnaire at one time point, so direction cannot be established and common-method effects remain possible despite the 40.5% Harman's test result; engagement, too, was modeled as a single factor although it spans behavioral, cognitive, and emotional dimensions.
- Perceived learning is a subjective appraisal, not demonstrated knowledge acquisition; the study reports no achievement, problem-solving, or retention measure.
- The 45-minute session is brief, and task difficulty and support were adapted per student, so the estimates are pooled across heterogeneous instructional pathways rather than a common sequence.
- The first and fourth self-efficacy items were both adapted from source items about understanding material, which may have narrowed construct coverage and inflated internal consistency, and the questionnaire was administered in English within bilingual programs with teachers clarifying wording, so equivalent interpretation across the three countries was not formally established.
- Participants were selected purposively rather than randomly, and the paper names no model or version for the large language model that generates content for teacher review.

## Citation

Anagnostopoulou, E., Grammatikos, N. A., Apostolou, D., Mentzas, G., Koulentianos, D., & Sotiriou, S. (2026). [*Self-efficacy, engagement, attitudes, and perceived learning in AI-assisted STEM education*](https://doi.org/10.3389/feduc.2026.1977754). *Frontiers in Education*. https://doi.org/10.3389/feduc.2026.1977754
