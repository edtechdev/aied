---
title: How expertise levels shape preferences and reflection needs — towards AI reflection systems for teacher empowerment
created: "2026-10-10T19:42:00-04:00"
updated: "2026-10-10T19:42:00-04:00"
type: article
foundations: [teacher-role]
technology: [learning-analytics]
pedagogy: [professional-training, self-regulated-learning]
audience: [researchers, educational technology developers]
level: [k 12]
sources: ['raw/papers/falhs-teacher-expertise-reflection-2025.md']
confidence: high
research_method: [survey]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This EC-TEL 2025 short paper surveys 100 US K–12 teachers (Prolific/Qualtrics, July–August 2023, ages 20–62, M = 38.15; 57 with 8+ years of experience) to ask how teacher reflection practices and analytics preferences vary by experience — the design question being whether AI reflection systems built on teacher + student data should be one-size-fits-all or expertise-adapted. The answer: strongly expertise-dependent. On obstacles (RQ1), **less experienced teachers cite lack of time as a top reflection obstacle far more (37% vs. 12% of experienced, p < .001)**, while experienced teachers more often report difficulty tracking student performance (28% vs. 15%, p = .009); informal feedback is a significantly more common motivator for experienced teachers (45% vs. 31%, p = .025). On analytics preferences (RQ2), **experienced teachers prioritize analytics on improved learning after helping a student (40% vs. 26%, p = .019) and on their own teaching methods (42% vs. 26%, p = .012)**, while less experienced teachers focus on student disengagement (48% vs. 33%, p = .028) and student emotions (31% vs. 18%, p = .036) — wanting immediate, concrete analytics for specific classroom issues. The design implication: less experienced teachers need structured, prompt-like guidance (data-driven reflection questions, suggested next steps) and engagement/affect analytics; experienced teachers need flexible, longitudinal, in-depth analysis aligned with their broader improvement goals — so complexity and concreteness of AI recommendations should be *tuned to experience level*, addressing the common one-size-fits-all failure of teacher dashboards.

The mechanism the authors propose for the time obstacle: novice teachers may lack the routines for translating didactic knowledge into practice, making reflection feel time-consuming, so automated monitoring + actionable insights offer both systematic reflection opportunities and time savings. The survey design is disciplined: median split at nine years (Berliner), top-three ranking items, binomial tests (chosen for power over rank comparison), and an ad-hoc power analysis confirming n = 100 detects a 15% choice-behavior difference at ~83% power. The findings align with expert–novice vision research (experts select relevant information and interpret deeply; novices fixate on classroom-interaction details). The honest framing: self-report measures, a formative step toward a broader user-centered design process, and the noted need for AI literacy so teachers can use the analytics effectively.

## Key findings

- **Time is the novice's obstacle:** less experienced teachers cite lack of time for reflection as a top concern at 3× the rate of experienced teachers (37% vs. 12%, p < .001); experienced teachers' top obstacle is tracking student performance (28% vs. 15%, p = .009).
- **Preferences split by what the analytics is about:** experienced teachers want analytics on teaching methods and improved learning (42% and 40%, significant); less experienced teachers want disengagement and emotion analytics (48% and 31%, significant) — concrete, immediate classroom-issue data.
- **Motivators differ too:** informal feedback drives experienced teachers more (45% vs. 31%, p = .025); improvement-oriented goals motivate both.
- **Trends worth noting:** student learning/progress data preferred by experienced teachers (63% vs. 52%, p = .094); feedback on their teaching preferred by less experienced teachers (48% vs. 37%, p = .094) — directionally consistent with the adaptation thesis.
- **Design rule derived:** tune recommendation complexity and concreteness to experience — structured prompts for novices, flexible in-depth analysis for experts.

## What this means for practice

- **For AI reflection-system designers:** experience level should be a first-class personalization dimension — novice mode (structured prompts, engagement/affect analytics, concrete next steps) vs. expert mode (longitudinal learning/teaching analytics, flexible exploration).
- **For the time-obstacle problem:** automatic event monitoring + actionable insights directly target the novice time barrier — the system's value includes freeing the time reflection requires.
- **For dashboard design:** this is evidence against one-size-fits-all teacher dashboards; the needs-centered adaptation call aligns with prior work (Saar et al. on experience-level needs, Fütterer on tailored PD).
- **For deployment prerequisites:** AI literacy is a named requirement — the analytics only pay off if teachers can interpret them.

## Limitations

- Self-report survey (no usage data from an actual deployed system); a formative first step, as the authors state.
- US sample recruited via Prolific (online, compensated) — generalizability to other contexts limited.
- Binary experience split at nine years misses finer-grained experience effects and non-linear development.
- Experience-level differences in *preferences*, not in actual system-use behavior or learning outcomes.
- Recruitment/coding details for "formal vs. informal feedback" distinction are compressed at short-paper length.

## Citation

Falhs, A.-C., Borchers, C., Echeverria, V., Yang, K., Rummel, N., & Aleven, V. (2025). How Expertise Levels Shape Preferences and Reflection Needs: Towards AI Reflection Systems for Teacher Empowerment. In *Two Decades of TEL: EC-TEL 2025*, LNCS, pp. 120–125. Springer. https://doi.org/10.1007/978-3-032-03873-9_11
