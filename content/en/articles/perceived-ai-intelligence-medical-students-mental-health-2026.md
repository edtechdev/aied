---
title: "Smarter AI, Healthier Students? How Perceived AI Assistant Intelligence Shapes Medical Students' Mental Health Through Learning Goal Progress and Academic Anxiety"
created: "2026-09-30T12:34:19-04:00"
updated: "2026-09-30T12:34:19-04:00"
type: article
sources: ['raw/papers/10.3390_bs16101715.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, experiment, structural equation modeling]
discipline: [medical education]
level: [higher ed, graduate]
audience: [medical educators, instructors, researchers, administrators]
foundations: [ai-literacy, human-ai-collaboration, ai-education, limitations-in-aied-research]
pedagogy: [self-determination-theory, anxiety-and-stress, well-being, self-regulated-learning, motivation]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Chen and colleagues tested a serial mediation model in which perceived AI assistant intelligence predicts medical students' [[well-being|mental health]] through learning goal progress and academic anxiety, with [[ai-literacy]] as a moderator. The paper uses two studies in China: a cross-sectional survey of 721 medical students and an experiment in which 398 medical students were randomly assigned to a higher-capability (GPT-4) or lower-capability (GPT-3.5) AI assistant for a medical paragraph-revision task. In the survey, perceived intelligence positively predicted study goal progress (B = 0.512), and the serial indirect path to mental health through goal progress and [[anxiety-and-stress]] was significant (B = 0.098, 95% CI [0.071, 0.129]); AI literacy strengthened the intelligence-to-progress link (B = 0.155). The experiment reproduced the pattern, but its outcomes were measured immediately after a brief task, and the survey is cross-sectional, so no causal direction is established.

## Key Findings

1. **Perceived AI assistant intelligence predicted study goal progress.** In the survey of 721 students the path was significant (B = 0.512, SE = 0.043, p < 0.001), supporting H1.
2. **Study goal progress and academic anxiety serially mediated the path to mental health.** The indirect effect was B = 0.098 (SE = 0.015), 95% CI [0.071, 0.129], and the direct effect was B = 0.120 (SE = 0.041), 95% CI [0.040, 0.200].
3. **AI literacy strengthened the first link.** The interaction between perceived intelligence and AI literacy predicted study goal progress (B = 0.155, SE = 0.046, p < 0.01). The conditional indirect effect on mental health was 0.124 (95% CI [0.090, 0.163]) at high AI literacy against 0.072 (95% CI [0.045, 0.102]) at low, a difference of 0.052 (95% CI [0.023, 0.087]).
4. **The experiment moved all three outcomes.** The higher-capability assistant produced higher study goal progress (M = 3.30, SD = 1.166, against M = 2.54, SD = 1.022; F(1, 396) = 47.249, p < 0.001, ηp2 = 0.107), lower academic anxiety (M = 2.54, SD = 0.868, against M = 3.12, SD = 0.817; F(1, 396) = 46.410, p < 0.001, ηp2 = 0.105) and higher post-task mental health (M = 3.51, SD = 1.087, against M = 2.68, SD = 0.987; F(1, 396) = 62.864, p < 0.001, ηp2 = 0.137).
5. **The serial mediation replicated under experimental assignment.** The condition indirectly affected post-task mental health through goal progress and anxiety (B = 0.108, SE = 0.032, 95% CI [0.048, 0.173]), with the conditional indirect effect stronger at high AI literacy (0.152, 95% CI [0.066, 0.242]) than at low (0.065, 95% CI [0.017, 0.125]).

## What the survey measured

Study 1 surveyed medical students from universities in Nanjing, Sichuan and Shanghai, distributing 1059 [[self-report-measures|questionnaires]] and retaining 721 after screening out incomplete returns, failed attention checks and straight-line responding. Of the sample, 255 were male (35.4%), the average age was 22.33 years, and all respondents used AI tools in daily study. Perceived AI assistant intelligence, [[ai-literacy]], study goal progress, academic anxiety and mental health were each measured with five-point Likert scales; mental health used the 8-item PHQ-8 (Kroenke et al., 2009) reverse-scored so that higher scores mean better mental health. Internal consistency was 0.839 for perceived intelligence, 0.867 for AI literacy, 0.880 for study goal progress, 0.853 for academic anxiety and 0.951 for mental health.

The authors grounded the model in [[self-determination-theory]]: a more intelligent assistant is expected to satisfy needs for autonomy, competence and relatedness, which in turn supports progress toward study goals and reduces academic anxiety. A five-factor confirmatory model fit well (χ2/df = 2.924, CFI = 0.954, TLI = 0.946, RMSEA = 0.052, SRMR = 0.059) and beat four competing models, and the first unrotated factor in Harman's one-factor test explained 31.562% of variance, below the 50% threshold. Correlations ran in the expected directions: perceived intelligence with study goal progress (r = 0.304, p < 0.01), study goal progress with academic anxiety (r = −0.650, p < 0.01) and anxiety with mental health (r = −0.507, p < 0.01).

## What the experiment added

Study 2 recruited 398 medical students and randomly assigned them to a higher-capability (GPT-4) or lower-capability (GPT-3.5) assistant for a paragraph-revision task on basic clinical content such as the etiology, symptoms and treatment of hypertension or type 2 diabetes. The manipulation check confirmed that the capability condition induced the intended difference in perceived intelligence (M = 3.88, SD = 1.057, against M = 2.79, SD = 1.134; t(396) = 9.879, p < 0.001). The assigned condition then significantly predicted study goal progress (B = 0.847, SE = 0.110, p < 0.001), and the moderated-mediation interaction with AI literacy was significant (B = 0.368, SE = 0.060, p < 0.01).

The important qualification is what the experiment measured. All outcomes were administered immediately after the task and framed as task-proximal states: study goal progress referred to the just-completed task, academic anxiety to anxiety during or immediately after it, and the mental-health items to participants' current psychological state rather than their longer-term status. The authors state plainly that these findings should not be read as evidence that a brief interaction produces enduring change.

## What this means for practice

- **Instructors.** Judge an AI assistant by the learning support students perceive, not by how capable the model is on paper. The survey link from perceived intelligence to study goal progress (B = 0.512) is about what students believe the tool can do for their learning.
- **[[curriculum-design|Curriculum]] and faculty developers.** Treat [[ai-literacy]] as a lever, not a prerequisite nobody teaches: the higher-capability condition helped most when AI literacy was high, with the conditional indirect effect at 0.152 (95% CI [0.066, 0.242]) against 0.065 (95% CI [0.017, 0.125]).
- **Learning designers.** If the mechanism runs through goal progress to anxiety, build assistants into goal setting and progress review, where the survey showed the strongest available handle on mental health.
- **Administrators.** Read the effect sizes as short-horizon. The experimental gains are post-task states measured right after one revision exercise, not documented improvements in students' mental health over a term.

## Limitations

- The survey is cross-sectional and self-reported, so the serial mediation describes association, not a causal chain; the authors recommend longitudinal designs to test whether the paths hold over time.
- Study 2 measured study goal progress, academic anxiety and mental health immediately after a short simulated task, so the findings cannot be read as evidence of enduring change, and the mental-health measure captures a momentary state rather than clinical status.
- Participants were medical students in China and the model covered only study goal progress, academic anxiety and AI literacy, leaving generalization to other disciplines, levels and cultural contexts untested.
- Self-report scales leave subjective perception and social desirability in play, which the authors suggest addressing with objective indicators such as performance records, behavior logs or [[teacher-role|teacher]] assessments.

## Citation

Chen, Y., Zhang, S., Liu, X., Li, L., Si, M., & Xu, C. (2026). [Smarter AI, Healthier Students? How Perceived AI Assistant Intelligence Shapes Medical Students' Mental Health Through Learning Goal Progress and Academic Anxiety](https://doi.org/10.3390/bs16101715). *Behavioral Sciences*, 16(10), 1715.