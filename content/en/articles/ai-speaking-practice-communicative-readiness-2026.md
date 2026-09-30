---
title: "AI-Assisted Speaking Practice and Human-Directed Communicative Readiness: Survey and Scenario Evidence on Anxiety, Self-Efficacy, and Evaluation Pressure"
created: "2026-09-30T15:10:00-04:00"
updated: "2026-09-30T15:10:00-04:00"
type: article
sources: ['raw/papers/10.3390_bs16101770.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
discipline: [language learning, english education]
level: [higher ed]
audience: [instructors, researchers, assessment designers]
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [anxiety-and-stress, self-efficacy, student-engagement, scaffolding, transfer-of-learning]
technology: [speech-and-voice-technologies, conversational-ai, generative-ai]
assessment: [oral-assessment, self-report-measures, summative-assessment]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Wang and Li ran two studies asking whether AI-assisted speaking practice is associated with readiness to speak with humans rather than with AI. Study 1 was a cross-sectional survey of 708 [[multilingual-learning|English learners]]; Study 2 was a 2 × 2 scenario comparison (N = 726) in which participants imagined preparing with an AI voice assistant or smartphone recording for a human group discussion that was either formally graded or ungraded. Greater AI-assisted speaking behavior was associated with higher human-directed willingness to communicate (β = 0.384) and lower foreign-language speaking anxiety (β = −0.416), with a positive statistical indirect association through anxiety (0.127, 95% CI [0.079, 0.184]). AI-voice-assistant scenarios showed lower anticipated anxiety and higher anticipated willingness, but the tool contrast bundled AI identity with dialogue, responsiveness and feedback, and neither study observed actual human speaking.

## Key Findings

- **AI-assisted speaking behavior tracked human-directed readiness in the survey.** With N = 708, greater AISB was positively associated with HWTC (B = 0.359, β = 0.384, p < 0.001, R2 = 0.148) and negatively associated with FLSA (B = −0.404, β = −0.416, p < 0.001).
- **Anxiety carried a positive indirect association.** FLSA remained negatively associated with HWTC when AISB was controlled (B = −0.313, β = −0.325, p < 0.001), and the statistical indirect association from AISB to HWTC through FLSA was 0.127, 95% CI [0.079, 0.184].
- **[[self-efficacy|Speaking self-efficacy]] changed the anxiety–readiness link, with an upper-tail crossover.** The FLSA × SSE interaction was significant (B = 0.281, p < 0.001): the FLSA–HWTC slope was −0.371 at low SSE and +0.137 at high SSE, and the conditional indirect association fell from 0.142 at low SSE to 0.044 at mean SSE and reversed to −0.054 at high SSE.
- **The crossover was concentrated in a small upper tail.** Johnson–Neyman probing placed transition points at SSE ≈ 3.88 and ≈ 4.45, with only 55 participants (7.8%) above the upper threshold.
- **In the scenarios, the AI voice assistant was associated with lower anticipated anxiety and higher anticipated willingness.** Tool effects were F(1,722) = 171.07, ηp2 = 0.192 for FLSA and F(1,722) = 116.97, ηp2 = 0.139 for HWTC, while formal evaluation moved both outcomes the other way (ηp2 = 0.102 and 0.061).
- **The tool gap widened under evaluation.** For FLSA the AI–recording difference was ∆M = −1.10 under evaluation against ∆M = −0.50 without it; for HWTC it was ∆M = +1.05 (d = 1.35) against ∆M = +0.30 (d = 0.34). Both interactions were significant (ηp2 = 0.032 and 0.047).
- **Willingness and speaking-initiation tendency diverged.** Group B (AI × no evaluation) had the lowest FLSA (M = 2.70) and highest HWTC (M = 3.60); Group C (recording × evaluation) had the highest FLSA (M = 4.05) and lowest HWTC (M = 2.50). Yet the AI–recording difference in speaking-initiation tendency was larger without evaluation (d = 0.58) than under it (d = 0.31).

## What the two evidence types each support

Study 1 is a one-time questionnaire: recent AI-assisted spoken English behavior (AISB) over the preceding four weeks, [[anxiety-and-stress|foreign-language speaking anxiety]] (FLSA), speaking self-efficacy (SSE) and human-directed willingness to communicate (HWTC), each on five contextualized items (α = 0.847, 0.834 and 0.833). The three-factor model fit well (χ2 (87) = 115.31, CFI = 0.993, RMSEA = 0.021, SRMR = 0.024), HTMT values ran 0.485 to 0.511, but HWTC's AVE was 0.499 — borderline against the conventional 0.50 [[benchmark]], which the authors flag. All of these associations rest on [[self-report-measures|self-report]], and the design cannot establish temporal order. Demographic adjustment left the pattern essentially unchanged (AISB→HWTC B = 0.357, β = 0.382; FLSA→HWTC B = −0.312, β = −0.324; adjusted indirect association 0.126, 95% CI [0.078, 0.182]), and an unmeasured latent method factor sensitivity model produced materially stable estimates (AISB→FLSA moved from −0.429 to −0.428, FLSA→HWTC from −0.496 to −0.491, the indirect estimate from 0.213 to 0.210), with modest method loadings (range −0.265 to 0.212, mean absolute 0.099).

Study 2 does not measure behavior either. Participants read that they would join a five-minute English discussion with two other students after ten minutes of preparation, then reported anticipated FLSA and HWTC. The manipulation checks registered the contrasts (tool interactivity 3.90 versus 2.50, t(707.2) = 23.32, d = 1.74; evaluation pressure 3.90 versus 2.50, t(697.3) = 23.89, d = 1.78), and covariate-adjusted ANCOVAs kept every scenario contrast significant: for FLSA, tool F(1,716) = 204.90, ηp2 = 0.223, evaluation F(1,716) = 95.26, ηp2 = 0.117, interaction F(1,716) = 31.30, ηp2 = 0.042; for HWTC, tool F(1,716) = 140.95, ηp2 = 0.164, evaluation F(1,716) = 57.47, ηp2 = 0.074, interaction F(1,716) = 39.01, ηp2 = 0.052. Because assignment used separate survey links rather than individual randomization, and no preparation was actually delivered, the authors call these controlled scenario-condition comparisons, not treatment effects. Scenario-realism means ran from approximately 3.15 to 3.30, which the authors read as imaginable but not equivalent to a real classroom.

## What this means for practice

- **Instructors.** Treat reduced anxiety as a bridge rather than an outcome. The survey's positive indirect association (0.127) runs through FLSA, and nothing here shows that lower anxiety produces better human speaking.
- **Instructors.** Stage the evaluative load: ungraded interactive rehearsal first, then human peer interaction, then formal grading. In Study 2 the AI × no-evaluation cell still had the lowest FLSA and highest HWTC, so raising evaluative threat is not what the pattern recommends.
- **[[curriculum-design|Curriculum]] designers.** Do not let AI rehearsal substitute for human interaction. Both studies stop at readiness and anticipated affect, and the authors call the transfer pathway a [[pedagogy|pedagogical]] proposal to be tested directly.
- **Assessment designers.** Where high-stakes speaking assessment is unavoidable, use [[speech-and-voice-technologies|voice tools]] as rehearsal and base grades on human performance without AI, rather than assuming AI practice replaces valid evaluation anxiety.
- **Platform designers.** Track process data — practice turns, follow-up questions generated, feedback taken up, re-recordings — so usage intensity can be separated from supportiveness and from human performance.

## Limitations

- Study 1 is cross-sectional and entirely self-report, with no temporal separation, independent data source or marker variable; the ULMC analysis reduced but did not eliminate common-method concerns, and no causal direction is established.
- The shortened FLSA, SSE and HWTC forms were not validated by an independent expert panel or a separate pilot, and HWTC's AVE of 0.499 sits marginally below the 0.50 benchmark.
- Study 2 rests on one-off imagined scenarios assigned through separate survey links rather than individual randomization, so the contrasts are not treatment effects, and the manipulation checks may partly reflect demand characteristics.
- Neither study observed human speaking or measured objective proficiency, and the AI-voice-assistant condition bundled AI identity with dialogic interaction, responsiveness and feedback, so the difference cannot be attributed to AI alone.

## Citation

Wang, R., & Li, J. (2026). [AI-Assisted Speaking Practice and Human-Directed Communicative Readiness: Survey and Scenario Evidence on Anxiety, Self-Efficacy, and Evaluation Pressure](https://doi.org/10.3390/bs16101770). *Behavioral Sciences*, 16(10), 1770.