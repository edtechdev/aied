---
title: "When AI advice agrees or disagrees with human judgment: trust, self-efficacy, psychological resilience, and adaptive responses in physical education"
published: "2026-10-21"
created: "2026-10-28T12:11:19-04:00"
updated: "2026-10-28T12:11:19-04:00"
type: article
foundations: [human-ai-collaboration, ai-education]
pedagogy: [self-efficacy, professional-training]
technology: [ai-technologies, conversational-ai]
methods: [quantitative-research]
ethics: [trust, trust-calibration]
research_method: [experiment]
level: [k 12, higher ed]
audience: [instructors, faculty developers]
page_kind: [evaluation]
sources: ['raw/papers/yang-ai-advice-agreement-trust-self-efficacy-pe-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1972538"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Yang (2026) asked what happens to trust and self-efficacy when an AI recommendation contradicts a physical educator's judgment. The design is experimental but hypothetical: four between-subjects scenario experiments (total N = 859) in which participants judged a scenario, received a fabricated AI recommendation that either agreed or conflicted with that judgment, then rated [[trust|machine trust]], collaborative decision-making [[self-efficacy]], and self-reported adaptive responses. Conflict lowered trust (Study 1: 5.42 vs 4.31, d = 1.061) and self-efficacy (Study 2: B = -0.687), and both mediators carried negative indirect associations with adaptive responses (Study 1, B = -0.428; Study 2, B = -0.201 and B = -0.127). Resilience weakened the self-efficacy difference (B = 0.276) and a rationale weakened the trust difference (-0.811 black-box vs -0.182). With no established advice accuracy and self-reported outcomes, this identifies response patterns, not better decisions.

## Key Findings

1. In Study 1 (n = 168), conflict reduced machine trust from M = 5.42 to M = 4.31, t(166) = 6.87, p < 0.001, d = 1.061, and adaptive behavior from M = 4.78 to M = 4.15, t(166) = 4.62, d = 0.698.
2. Study 1's trust pathway ran a = -1.108 and b = 0.386, giving an indirect effect of B = -0.428 (95% CI [-0.591, -0.286]) and a direct effect of -0.201 (p = 0.002) against a total of -0.629; the indirect path was 68.0% of the total.
3. In Study 2 (n = 187), conflict lowered trust (a1 = -1.042) and self-efficacy (a2 = -0.687, p < 0.001); indirect effects were -0.201 [-0.296, -0.118] and -0.127 [-0.207, -0.058], with a nonsignificant contrast, B = -0.074 [-0.176, 0.021].
4. In Study 3 (n = 261), conflict predicted lower self-efficacy, B = -0.612, and the condition by resilience interaction was B = 0.276 (SE = 0.084, p = 0.001); the effect was -0.888 at low resilience and -0.336 at high, with an index of moderated mediation of 0.115 [0.041, 0.203].
5. In Study 4 (n = 243), rationale provision moderated the condition-to-trust association, F(1, 239) = 11.348, p = 0.00088, partial η2 = 0.045: the conflict effect was -0.811 (p < 0.001) in the black-box condition and -0.182 (p = 0.170) when a rationale was provided.

## Scenarios with a fabricated advisor

These are experiments, but not experiments on real student work or real coaching decisions. Participants read a physical education scenario about training load, an injury-risk alert, movement technique diagnosis, or a tactical decision, gave their own judgment, then saw an AI recommendation that varied only in whether it agreed with them. The recommendation was scripted: the paper states the AI feedback "was an experimental manipulation rather than genuine system output," and participants were debriefed. No athlete or record was involved, and the advice was never scored for correctness. That bounds the findings: this is evidence about how people react to being contradicted, not about whether the advice was good.

Two details narrow it further. Allocation was between subjects, but the retained files no longer hold the sequence-generation log, so the paper reports final cell counts without asserting how randomization was carried out; no study was preregistered.

## Two appraisals, one disagreement

Trust and self-efficacy are modeled as parallel mediators because they point in different directions: trust appraises the system's competence, self-efficacy one's own capacity to adjudicate discrepant information and still decide. That distinction is the paper's best contribution, and both Study 2 indirect paths excluded zero. It does not follow that they are independent. The mediators correlated at r = 0.538 in Study 2 and r = 0.460 in Study 3, the model cannot exclude a serial relation in which trust shapes efficacy, and the null contrast, B = -0.074, is a failure to detect a difference, not evidence that none exists.

## Buffers that are not automatically good news

Both moderators shrink a drop, and the paper refuses to call it improvement. With no objectively correct recommendation, a smaller decline in trust is equally compatible with appropriate reliance on sound advice and with over-trust in faulty advice; the same holds for self-efficacy, where maintained confidence may be resilience or unwarranted certainty. Rationale provision is the clearest case, since explanation can make a correct recommendation easier to accept and a wrong one harder to reject. Resilience also did not reverse the effect: at high resilience the conflict effect on self-efficacy was still -0.336.

## What this means for practice

For teachers and coaches, disagreement is itself the event to manage, not the content of the advice. A recommendation that conflicts with an instructor's read of a student depresses confidence in the system and in one's own capacity to adjudicate, and asking for its reasoning narrows that gap without closing it. The routine worth building is to treat disagreement as a prompt for evidence: state the basis for the human judgment, ask what the system weighted, and record the decision. For those who train coaches and physical educators, [[trust-calibration|calibration]] is a trainable appraisal rather than a fixed trait, and neither reflexive deference nor reflexive dismissal is the target. For designers, the rationale result is a hypothesis, not a validated intervention.

## Limitations

- All four studies used hypothetical scenarios with fabricated recommendations whose accuracy was never established, so calibrated skepticism cannot be separated from resistance, or appropriate confidence from overconfidence.
- Participants were K-12 teachers, university instructors, coaches, and senior physical education majors with at least a year of experience, recruited through continuing-education platforms and professional associations; the paper does not report their country, screening records are incomplete, and the randomization log is missing.
- Scenario is confounded with study, the four samples were not tested for measurement invariance, and the two moderators were estimated in separate datasets rather than in one model. No study was preregistered and no multiplicity adjustment was applied.
- Outcomes are self-reports taken at one time point except in Study 3, where resilience was measured a mean of 52.6 h earlier but the outcome was never measured twice.

## Citation

Yang, H. (2026). [*When AI advice agrees or disagrees with human judgment: trust, self-efficacy, psychological resilience, and adaptive responses in physical education*](https://doi.org/10.3389/fpsyg.2026.1972538). *Frontiers in Psychology*, 17, 1972538.
