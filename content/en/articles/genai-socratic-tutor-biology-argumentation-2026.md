---
title: "Enhancing PISA-aligned argumentation skills of prospective biology teachers through generative artificial intelligence"
created: "2026-10-13T09:08:48-04:00"
updated: "2026-10-13T09:08:48-04:00"
type: article
sources: ['raw/papers/genai-socratic-tutor-biology-argumentation-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [biology education]
level: [higher ed, undergraduate, teacher education]
pedagogy: [socratic-method, constructivist]
technology: [generative-ai, llm]
foundations: [critical-thinking]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-13"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A quasi-experimental study with 124 prospective biology teachers tested whether ChatGPT-4 configured as a [[socratic-method|Socratic tutor]] could build the argumentation skills that PISA treats as markers of scientific literacy. The [[generative-ai|generative AI]] condition, in which the [[llm|LLM]] pressed students on rebuttals and counterevidence, outperformed peer discussion on overall argumentation quality (F(1,121) = 14.23, p < .001, ηp2 = .105) after controlling for baseline scores. Gains concentrated in the hardest Toulmin components — rebuttal skills (d = 0.88) and counter-evidence evaluation (d = 0.98) — while claim formation barely moved (d = 0.33). The authors are explicit that the design cannot separate the AI medium from the structured [[biology-education|biology education]] pedagogy it carried, because the control condition received no equivalent structured rebuttal task. For [[teacher-education|teacher education]], the study offers a fully specified [[prompt-engineering]] protocol alongside a caution: the tutor was a 2023-era model driven through the consumer interface.

## Key Findings

1. After controlling for baseline TAP scores, the AI group's adjusted post-test argumentation mean was 3.91 against the control group's 3.21 — a difference of 0.70, F(1,121) = 14.23, p < .001, ηp2 = .105.
2. Gains were asymmetric: rebuttal skills (adjusted M = 2.74 vs. 1.83; d = 0.88) and counter-evidence evaluation (2.89 vs. 1.95; d = 0.98) moved far more than claim formation (d = 0.33).
3. The experimental group advanced roughly 2.2-fold faster, at 0.214 points per week versus 0.096 for peer discussion, with the group gap widening across the eight weeks.
4. Coded discourse shifted sharply: acknowledgment of limitations rose from 15.4% to 78.8%, counter-argument integration from 9.6% to 61.5%, and epistemic hedging from 31.2% to 72.1%.
5. More experimental students reached the top PISA tiers — 18 (29.1%) attained Levels 4–5 against 6 (9.7%) in the control group, χ² = 16.34, Cramér's V = 0.36.
6. Germane cognitive load rose (M = 4.3 vs. 3.1, d = 1.22) while extraneous load fell (3.2 vs. 3.8), suggesting the tutoring added productive rather than counterproductive demand.
7. A Critical Thinking × Treatment interaction (β = 0.67, SE = 0.19, p < .001, ΔR2 = .089) shows the benefit was uneven, larger for students who began with stronger [[critical-thinking]].

## Method and Evidence

A [[pedagogy|pedagogical]] university in Uzbekistan supplied 124 third-year [[biology-education|biology education]] students, allocated as two intact class sections of 62 rather than randomized individually. The power analysis used GPower 3.1 with a medium effect size (f = 0.25), α = 0.05, and 1-β = 0.80; the sample averaged 21.4 years (SD = 1.24), and was 68% female and 32% male. Both groups met for 90-minute weekly seminars across eight weeks, analyzing the same socio-scientific issues — global warming, GMO safety, vaccines, and CRISPR [[ethics]] — plus one novel transfer scenario at post-test. The control group ran four-to-five-member peer discussions entirely offline under a signed [[academic-integrity|academic integrity]] contract, with the educator restricted to a supervisory role. The experimental group debated GPT-4 agents in real time. Instruments were the PISA-aligned TAP 5-level rubric (CVI = 0.92; Cronbach's α = 0.84; inter-rater κ = 0.87), five component sub-rubrics, a 9-item, 7-point cognitive load scale, and a five-indicator discourse framework (κ = 0.84). ANCOVA, run in SPSS 28.0, used pre-test TAP score as the sole covariate.

## Effects on Argumentation

The headline result is a condition effect on overall [[critical-thinking|argumentation]] quality: F(1,121) = 14.23, p < .001, ηp2 = .105, meaning treatment explained 10.5% of the variance in argumentation quality. Adjusted means were 3.91 for the experimental group and 3.21 for the control group, a difference of 0.70 with a 95% CI of [0.45, 0.95]. Both groups began at Level 2, defined as claim plus basic evidence (M = 2.14 control, 2.07 experimental). Component analysis shows where the movement occurred: rebuttal F(1,121) = 33.89, p < .001, ηp2 = .219, d = 0.88; counter-evidence F(1,121) = 30.47, p < .001, ηp2 = .201, d = 0.98; evidence quality d = 0.47; warrant construction d = 0.49; claim formation d = 0.33. Weekly tracking captured the divergence in pace, 0.214 versus 0.096 points per week. The PISA distribution confirms the shift: 18 experimental students (29.1%) reached Levels 4–5 against 6 control students (9.7%), χ² = 16.34 with Cramér's V = 0.36.

## Designing the Socratic Tutor

The intervention is specified closely enough to replicate. The system role was "a strict, skeptical, and critically thinking biology professor" whose goal was not to give answers but to expose logical errors. The interaction algorithm deconstructed each claim into Toulmin components, demanded scientific sources when evidence was missing, supplied strong counter-rebuttals, and closed with open questions that placed students in cognitive dissonance. Constraints restricted the tutor to scientifically consensual facts and barred discussion of personal beliefs. A one-week pilot with 12 students showed that the first version produced overly aggressive rebuttals, so the tone was softened from "extremely critical" to "Socratic doubt." The "Human-Controlled-AI" principle added two safeguards: an instruction to rely only on indexed databases such as PubMed and ScienceDirect, and "Fact Verification" tasks requiring students to compare each AI rebuttal with textbooks or reliable external sources. Fidelity was audited on 15% of anonymized dialogues, where 94% of students were working according to the designated argumentation protocol.

## Cognitive Load and Learner Differences

Supporting measures suggest the tutoring demanded effort without overwhelming students. Germane cognitive load rose from M = 3.1 in the control group to 4.3 in the experimental group (d = 1.22), while extraneous load fell from 3.8 to 3.2. Task engagement (5.2 vs. 6.1) and perceived learning (4.8 vs. 5.7) both improved. The authors read this pattern as evidence against [[cognitive-offloading]], though that construct was not measured directly, and they tie it to hybrid regulation rather than to dependency. Moderation analysis complicates the picture: the Critical Thinking × Treatment interaction was significant (β = 0.67, SE = 0.19, t = 3.53, p < .001, ΔR2 = .089), indicating treatment-effect heterogeneity, and prior GPA × Treatment reached only p = .018. Under a Bonferroni correction across the 13 tests conducted (adjusted α = .0038), evidence quality (p = .015) and warrant construction (p = .012) would no longer be significant, while rebuttal and counter-evidence remain so. Gender × Treatment was not significant (p = .571).

## What this means for practice

- **Instructors.** Configure the model as an antagonist that refuses to answer, requires sources when a claim arrives without evidence, and closes each exchange with an open question; a softened "Socratic doubt" tone performed better than an "extremely critical" one during piloting.
- **Instructors.** Pair the tutor with mandatory fact-verification: students compared every AI rebuttal against textbooks or indexed sources, a low-cost safeguard against [[hallucination-risk]] that doubles as [[metacognition|metacognitive]] practice.
- **[[teacher-role|Teacher]] educators.** Treat [[prompt-engineering|pedagogical prompt engineering]] as a teachable competence — the difference between a tool that hands over answers and one that produces cognitive conflict lies entirely in the system instruction.
- **Curriculum designers.** Assess the argument a student builds against the machine rather than the writing produced with it, and expect the largest returns where rebuttal and counter-evidence are deliberately structured into the task.
- **Curriculum designers.** Replacing portions of traditional seminars with human-AI debate sessions is the paper's own route to individualization under instructor shortages, but only if the peer condition receives an equally structured rebuttal task, which this study's control group did not.

## Limitations

- Single pedagogical university in Uzbekistan covering one socio-scientific topic domain; the authors state that generalizability beyond this institution, country, discipline, and topic remains untested.
- Quasi-experimental nonequivalent-groups design: 62-student intact class sections were allocated administratively, so participants were not individually randomized.
- The tutor was ChatGPT-4 (GPT-4, a 2023-era model) used through the consumer interface, so temperature, token limits, and other API-level parameters were unavailable and the model snapshot could change with platform updates.
- Eight-week horizon with no follow-up, which the authors say may not be long enough for stable, transferable argumentative practice.
- Outcomes were measured on Toulmin-pattern scores, and the design cannot isolate the AI medium from the structured pedagogical protocol it delivered.
- Fidelity monitoring was asymmetric: 15% of AI-condition dialogues were audited, while control-group peer discussions received no equivalent structured check, and control-group non-use of generative AI rested on self-report.

## Citation

Ergasheva, G. S., Raupova, M. H., Chowdhury, S. A., & Rakhmatova, S. T. (2026). [*Enhancing PISA-aligned argumentation skills of prospective biology teachers through generative artificial intelligence*](https://doi.org/10.3389/feduc.2026.1862623). *Frontiers in Education*.
