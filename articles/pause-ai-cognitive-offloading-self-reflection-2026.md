---
title: "PAUSE: A Privacy-Preserving Self-Reflection Tool for AI-Associated Cognitive Offloading"
created: "2026-09-15T10:30:00-04:00"
updated: "2026-09-16T15:58:20-04:00"
type: article
tags: [cognitive-offloading, ai-literacy, metacognition, self-regulated-learning, self-report-measures, privacy, reducing-ai-misuse, critical-thinking, trust]
connected_faqs: [reducing-over-reliance]
sources: ['raw/papers/pause-ai-cognitive-offloading-self-reflection-2026.md']
confidence: high
research_method: [position paper, system development]
discipline: [learning sciences]
audience: [educators, designers, researchers]
level: [adult learning]
category: [framework]
---

> **Synthesis:** Alam describes PAUSE (Patterns of AI Use: Self-Examination), a privacy-by-design web tool that converts the 2023–2026 empirical literature on AI-associated [[cognitive-offloading]] into a short, non-diagnostic self-check organised around four everyday domains: reasoning and critical thinking, [[creativity]] and originality, research and learning, and social and communicative capacity. The tool scores reverse-coded behavioural items plus two timed behavioural probes entirely in the browser, returns descriptive domain-aware reflections, and deliberately offers no overall composite. It is framed throughout as a reflection aid rather than a validated psychological instrument: the paper presents no reliability or validity evidence and states that readings must not justify any consequential decision about a person. The contribution is therefore a design pattern — item-level citation grounding, deliberate [[metacognition|self-reflection]] prompts, and refusal to diagnose — rather than a measurement result.

## Key Findings

1. PAUSE is organised around four domains — D1 reasoning and critical thinking, D2 creativity and originality, D3 research and learning, D4 social and communicative capacity — each reported separately, with no overall composite because a single number across four domains of unequal weight would compress more than it reveals.
2. Each domain carries seven scored items (six Likert items plus one probe in D1 and D2), each scored 0–4; roughly one third of items per domain (two or three of seven) are reverse-scored to counter acquiescence, and every [[llm]]-era item is anchored to a peer-reviewed or arXiv paper from 2023 to 2026.
3. A domain reading is the mean of valid item scores scaled to 0–100 and mapped to four fixed quarter-width bands: Minimal offloading signal (0–24), Mild (25–49), Moderate (50–74) and Strong offloading signal (75–100), which the author states are legibility cut points rather than normed values and carry no diagnostic meaning.
4. "Not applicable" responses are dropped rather than imputed, and a domain with fewer than three answered items shows no number at all, marked "limited basis" — the tool accepts partial evidence instead of manufacturing a complete profile.
5. The worked example yields a D1 reading of 71 from a seven-item total of 20 (mean 20/7 = 2.86), and a full illustrative profile of 71 (Reasoning), 93 (Creativity), 71 (Research and Learning) and 75 (Social), i.e. Moderate, Strong, Moderate, Strong.
6. Two behavioural probes add texture beyond self-report: a claim-evaluation multiple-choice item drawn from a stratified pool over 10 reasoning-fallacy types, and a 90-second Alternative Uses Task on one of 12 common objects spanning 6 categories, scored for fluency and category-level flexibility.
7. The synthetic six-month demo trajectory shipped with the comparison view traces deliberately divergent paths — Reasoning 64→41 (−23), Creativity 88→62 (−26), Research and Learning 52→18 (−34) — while Social rises 35→80 (+45), spanning all four bands across the six sessions.
8. The application is privacy-preserving by construction: static HTML, CSS and JavaScript with no backend, no framework runtime, no third-party scripts or requests, and no LLM in production; responses, scores and free text never leave the browser and are never logged.
9. The only client-side storage is session-scoped and holds two short rotation codes recording which probe variants were seen last, cleared on tab close; return-visit comparison works through an opaque scorecard token that the user copies and stores themselves and that is never transmitted or linked to an identity.
10. A soft, non-blocking age check restricts the tool to respondents 18 or older and the result page avoids clinical language — no respondent is described as impaired or at risk, a high reading is neither a verdict nor a reason to stop using AI tools, and a low reading is no kind of clearance.

## Four Domains, Four Literature Strands

The four domains are described as a working vocabulary grounded in the literature, not a tested factor structure, and each is tied to a distinct strand of recent work. D1 rests on the [[critical-thinking]] evidence: Kosmyna et al. (2025), an EEG-instrumented essay-writing study at the MIT Media Lab with n = 54, found the weakest neural connectivity across memory, attention and executive networks among ChatGPT users, the lowest sense of ownership, and impaired recall of their own writing, with lingering effects on later unaided writing — the "cognitive debt" the authors name. Gerlich (2025a) reports a significant negative correlation between AI tool use and critical thinking in a [[mixed-methods-research|mixed-methods]] study of 666 participants, mediated by cognitive offloading and strongest in younger users; Lee et al. (2025), surveying 319 knowledge workers, found that higher confidence in [[generative-ai|generative AI]] predicts less enacted critical thinking and a shift from [[problem-solving]] toward verifying and integrating output.

D2 rests on homogenisation findings: Doshi and Hauser (2024) found that LLM access boosts individual story creativity, especially for less inherently creative writers, while significantly homogenising output across writers; the [[meta-analysis-systematic-review|meta-analysis]] of Holzner et al. (2025) confirms the diversity reduction, and Kumar et al. (2025) found that exposure to LLM-generated frameworks reduced idea diversity both during and after use, suggesting lasting fixation. D3 draws on retention and comprehension evidence: Abbas et al. (2024) report that heavy ChatGPT-using university students reported growing difficulty retaining knowledge, Etkin et al. (2025) found readers who already understood a topic performed worse on comprehension tests when given AI summaries instead of the original text, and Bastani et al. (2025) found high-school students given GPT-4 solved more problems while the tool was available but performed worse than controls once it was removed. Liu et al. (2026) give causal evidence for the same pattern in randomised controlled trials (N = 1,222), adding that assistance also reduced persistence, and Rismanchian et al. (2026), analysing 3.2 million adaptive-tutor interactions over ten years, found study time on AI-susceptible problems fell sharply after ChatGPT's release with a durable cost on later proctored retention items.

D4 rests on psychosocial evidence: Fang et al. (2025), in a four-week [[rct|randomised controlled trial]] with 981 participants and over 300,000 messages, found dose-dependent increases in loneliness and emotional dependence with [[conversational-ai|chatbot]] use alongside lower socialisation with real people, while Hohenstein et al. (2023) showed AI-drafted email replies became more polished and uniformly positive yet recipients who suspected AI involvement trusted the sender less — an efficiency gain with a relational cost. The paper positions D1–D4 as most directly mapping onto the negative trajectory in Riley et al.'s (2025) survey of cognitive, behavioural and emotional impacts, while its recommendations draw on the positive trajectory.

## How the Self-Check Is Built and Scored

Item design follows explicit constraints: items are behavioural ("In the last two weeks, how often did you …") rather than dispositional, to reduce social-desirability bias; every item targeting LLM-era behaviour carries an anchor citation; all items offer a "not applicable" option; and the two probes give limited behavioural texture where a domain invites it. A short context section (primary work role, weekly hours with AI tools, duration of regular use) is not part of any reading, and a retrospective before-and-after block of four items — independent fact-checking, idea generation from scratch, reading original sources end to end, drafting personal messages unaided — is reported separately as a trajectory indicator rather than aggregated, since a cross-sectional reading cannot distinguish a user who never had a habit from one who has stopped. The block is skippable for respondents with under twelve months of regular use, and an opening stability item (BL0) earns a caveat when pre-AI habits were not well established.

Feedback branches on a self-identification selected before scoring (researcher or academic, creative professional, student, knowledge worker, software or data engineer, other): a high D1 reading for a researcher emphasises [[peer-assessment|peer assessment]], replication-checking and brain-only literature reading sessions, while the same reading for a creative professional emphasises journal-based ideation, blank-page warmups and AI-free first drafts. The reasoning probe is scored 0 for a correctly identified central flaw, 2 for a non-central flaw and 4 for uncritical acceptance ("the conclusion seems sound"); a skipped probe or an expired timer is treated as not applicable and dropped, never scored as option (d), because running out of time is a different behaviour from accepting a claim uncritically. The creativity probe's deterministic client-side heuristic captures fluency (distinct entries) and basic flexibility (distinct categories), with provisional thresholds that the result page discloses as such — for example, five fluent entries mapping to only building, weight and tool score band 1.

## Privacy by Design and the Non-Diagnostic Stance

The architecture is a static multi-page site with no backend, self-hosted typefaces under the SIL Open Font License, all scoring and result rendering performed in the user's browser, and no server endpoint that accepts responses. No LLM is involved in production, a choice the author states is deliberate: "a tool that helps a person reflect on cognitive offloading should not itself offload." [[privacy]] engineering is presented as serving the tool's purpose rather than as compliance overhead — nothing collected is the condition under which candid self-report about AI dependence becomes possible, and the paper notes that the [[self-report-measures|self-report]] design and the no-storage design are complementary.

[[ethics|Ethical]] safeguards reinforce the non-diagnostic framing: a persistent banner states that the tool is not validated, that a reading need not reflect a stable underlying trait, and that readings should not drive real-world decisions; the four band labels are marked descriptive rather than normed; recommendations drawn from the counter-design literature are offered as practices to consider, not prescriptions or treatment advice; and the paper states explicitly that a reading must not justify hiring, admissions, performance evaluation, or clinical or [[assessment|educational assessment]] of anyone. [[accessibility]] work includes keyboard navigation, screen-reader-friendly semantic markup with ARIA labels, countdown timers excluded from live-region announcements, a palette meeting WCAG 2.1 AA contrast, plain-English item wording, and planned Swedish and Bengali translations. A reproducible Node.js verification suite re-derives the worked example from the production scoring module, asserts the band rubric, checks the cross-session rotation guarantee over 2,000 draws, fuzzes the return-token decoder and confirms the absence of third-party requests — but checks no psychometric properties, which the paper does not claim.

## Adjacent Instruments and the Counter-Design Literature

PAUSE is positioned against validated instruments that occupy the neighbouring measurement corners: the AI Dependence Scale (AIDep-22) of Wu et al. (2026), whose four factors include a cognitive-dependence dimension built on the offloading framework; the SAID questionnaire of Garcia Castro et al. (2025) for secondary-school students; the performance-based GLAT of Jin et al. (2024) and older [[ai-literacy|AI literacy]] scales; and the Offloading Score of Padmakumar et al. (2026), which estimates the fraction of cognitive effort offloaded by reconstructing a counterfactual workflow from behavioural logs (validated with n = 40 developers on programming tasks). PAUSE instead asks a descriptive questionnaire organised by four everyday domains and stores nothing — an explicitly modest answer to the call of Riley et al. (2025) for grounded evaluation frameworks that balance benefits against human-centric risks.

The recommendations, by contrast, draw on evidence that engagement style matters more than mere exposure. Gerlich (2025b), the provocations study of Drosos et al. (2025) and the diverse-persona work of Wan and Kalman (2026) suggest that structured [[prompt-engineering|prompting]], deliberate verification and alternation between assisted and unassisted work can mitigate offloading effects; the session-four result of Kosmyna et al. (2025), in which brain-only participants subsequently using ChatGPT outperformed sustained LLM users, supports the direction directly, and Makransky et al. (2025) showed that a generative-AI tutoring chatbot prompting students to connect ideas and explain reasoning produced better assessment performance than traditional instruction. Hong et al. (2025) found that deliberately offloading lower-order writing tasks to AI, freeing attention for analysis and revision, produced larger critical-thinking gains — evidence that offloading designed well can serve the very capacities it is often assumed to erode.

## Limitations the Author States

The stated limits are unusually explicit. Self-report of offloading is susceptible to the very faculty it concerns — a person whose critical-thinking habits have decayed may have decayed insight into the decay — and the probes only partially mitigate this. Correlation is not causation: the tool can describe a pattern but cannot show that a user's pattern was caused by LLM use, nor that AI use changed anyone's abilities. Sampling is non-representative, since voluntary takers are not a population sample, and the four-domain structure is a working organisation rather than a confirmed factor structure; whether AI-associated cognitive offloading is even a coherent construct distinct from general technology dependence remains open. Several anchoring studies are recent preprints, and several items conflate early consultation with substitution: a respondent who deliberately brings AI in as a [[scaffolding|scaffold]] at the start of a task will honestly endorse items such as B2, C1 and D1 and read as offloading, because the items measure when and how often AI enters the workflow rather than whether the user's own reasoning stayed engaged. The reasoning probe is easier than free-response flaw identification and rewards statistical training, the creativity heuristic captures fluency and flexibility but not originality or elaboration, and because both pools and dictionaries are public the scoring is satisfiable by keyword stuffing — a threat the author discloses rather than defends against, on the grounds that the threat model is self-deception, not adversarial input. The tool is not designed for minors.

## Connected Concepts

- [[cognitive-offloading]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[self-report-measures]]
- [[privacy]]
- [[reducing-ai-misuse]]
- [[critical-thinking]]
- [[trust]]
- [[generative-ai]]
- [[llm]]
- [[creativity]]
- [[human-ai-collaboration]]
- [[desirable-difficulties]]
- [[ai-anxiety-and-stress]]

## Connected Articles

- [[cognitive-offloading-metacognitive-review-2026]] — Meta-Cognitive Insights into Cognitive Offloading: Mechanisms, Interventions, and Educational Implications
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[ai-overreliance-complex-adaptive-system-2026]] — Modeling AI Overreliance as a Complex Adaptive System
- [[cognitive-washout-ai-skill-decay-2026]] — After the Assistant Leaves: Cognitive Washout Dynamics and the Reversibility of AI-Induced Skill Decay
- [[ai-use-critical-thinking-medical-students-2026]] — From AI Use to Critical Thinking Among Medical Students: A Moderated Mediation Perspective on Cognitive Load and Self-Regulated Learning
- [[aigc-affordance-student-self-regulation-2026]] — AIGC Affordance and Student Self-Regulation: A Serial Mediation Model of Self-Efficacy and Learning Motivation
- [[absent-cognitive-baseline-2026]] — The Absent Cognitive Baseline: Theorizing a Structural Gap in AI-Native College Students' Academic Self-Assessment

## Citation

Mahbub Ul Alam (2026). [*PAUSE: A Privacy-Preserving Self-Reflection Tool for AI-Associated Cognitive Offloading*](https://arxiv.org/abs/2609.13155). arXiv preprint.