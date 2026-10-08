---
title: "Dual- versus Single-Suggestion AI Support for Radiographic Interpretation in Residents: Randomized Multireader Study"
created: "2026-10-08T09:15:00-04:00"
updated: "2026-10-08T09:15:00-04:00"
type: article
foundations: [human-ai-collaboration, reducing-ai-misuse, cognitive-surrender]
pedagogy: [professional-training, prior-knowledge, student-ai-interaction]
technology: [generative-ai, llm, multimodal]
assessment: [educational-measurement, learning-gains]
methods: [rct, quantitative-research]
ethics: [trust-calibration, hallucination-risk, differential-effects-across-learner-groups]
research_method: [experiment]
discipline: [medical education]
level: [graduate]
audience: [medical educators, instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/dual-single-suggestion-ai-radiology-residents-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-08"
    agent: hermes-agent
---

> **Synthesis:** This prospective, multicenter, three-arm randomized reader study tested whether presenting two independent [[generative-ai]] suggestions, rather than one, protects residents from accepting an erroneous AI. Across three hospitals in China, 123 residents interpreted 60 chest and abdominal radiographs before and after AI support. When the shared GPT-5.4 suggestion was wrong, dual-suggestion support roughly doubled AI-assisted accuracy for both radiology residents (40.1% and 40.4% vs 20.0%) and non-radiology residents (31.3% and 31.0% vs 12.1%). Radiology residents improved more overall with dual than single support (6.69 and 7.87 percentage points), whereas non-radiology residents did not, and one dual arm actually lowered accuracy when the shared suggestion was correct. The design isolates suggestion number rather than model quality by matching all three models at 65.0% accuracy. The result connects [[human-ai-collaboration]] and [[trust-calibration]]: a second AI opinion appears to reduce [[cognitive-offloading|overreliance]] on a wrong recommendation without adding interpretation time, but its benefit depends on specialty and on whether the added model disagrees. The trial ran on GPT-5.4, Kimi-K2.6, and Gemini-3.6 Flash.

## Key Findings
1. Radiology residents gained more accuracy with dual than with single support: 6.69 percentage points (95% CI, 0.97–12.40) for GPT-5.4 plus Kimi-K2.6 and 7.87 percentage points (95% CI, 1.64–14.11) for GPT-5.4 plus Gemini-3.6 Flash, Holm-adjusted _P_ = .030 for both.
2. Non-radiology residents showed no overall difference in accuracy change across support conditions (_P_ = .20), so the dual-suggestion effect depended on specialty (interaction difference, 10.44 percentage points; 95% CI, 4.36–16.52; _P_ < .001).
3. When the shared GPT-5.4 suggestion was incorrect, AI-assisted accuracy was higher with dual than with single support for radiology residents (40.1% and 40.4% vs 20.0%) and non-radiology residents (31.3% and 31.0% vs 12.1%), all Holm-adjusted _P_ < .001.
4. Across all 123 residents, accuracy rose from 46.3% to 61.5% after AI assistance (mean change, 15.2 percentage points; 95% CI, 13.7–16.8; _P_ < .001), and every arm improved: 13.9, 15.0, and 16.8 percentage points in groups A, B, and C.
5. For non-radiology residents, dual support was worse when GPT-5.4 was correct (74.8% and 74.5% vs 87.4%; both Holm-adjusted _P_ < .001), showing a second opinion can pull readers away from a correct recommendation.
6. Interpretation time and confidence change did not differ across support conditions within either specialty, and harmful revisions did not differ, while radiology beneficial revisions rose with dual support (14.8%, 19.9%, 22.8%; _P_ = .027).
7. All three models were matched at 65.0% diagnostic accuracy (39 of 60 cases each), so the contrast isolates suggestion number rather than overall [[benchmark]] performance.

## How the study was designed
This prospective, multicenter, randomized, three-arm multireader [[rct]] was run at three hospitals in China between July and September 2026 (ChiCTR2600129243). Of 154 residents assessed, 132 with fewer than 3 years of experience were stratified by specialty and allocated 1:1:1 to GPT-5.4 alone (group A), GPT-5.4 plus Kimi-K2.6 (group B), or GPT-5.4 plus Gemini-3.6 Flash (group C); 123 were analyzed after incomplete assessments. The mean age was 24.1 years and 65 were women. Participants interpreted 60 radiographs (30 chest, 30 abdominal) in one supervised session, recording an unaided diagnosis and 5-point confidence, then a final diagnosis and confidence after seeing the assigned AI suggestion. To isolate suggestion number rather than model quality, cases were selected so each model diagnosed 39 of 60 correctly (65.0%); five radiologists scored 54.3% on the same set without AI.

## When the shared suggestion was wrong
The central result concerns the 21 cases in which the shared GPT-5.4 diagnosis was incorrect. In single-suggestion group A, radiology residents' AI-assisted accuracy fell to 20.0%, and non-radiology residents' fell to 12.1% — a classic [[ai-misuse-learning-harm]] pattern in which a confident wrong suggestion drags readers down. Adding a second, independent model reversed that direction. Radiology residents reached 40.1% (group B) and 40.4% (group C), and non-radiology residents reached 31.3% and 31.0%; all four contrasts against group A were Holm-adjusted _P_ < .001. When GPT-5.4 was instead correct, dual support produced no advantage for radiology residents (78.5%, 80.1%, 79.1%; _P_ = .89). The pattern suggests the second opinion acts mainly as a brake on an erroneous anchor rather than as a general accuracy booster.

## Specialty mattered in opposite directions
Although all participants had under 3 years of experience, radiology and non-radiology residents responded differently. Only radiology residents improved more with dual support overall (group A 9.6, group B 16.3, group C 17.5 percentage points; _P_ = .016), giving a dual-suggestion effect of 7.28 percentage points (95% CI, 2.53–12.03; _P_ = .003) versus -3.16 percentage points for non-radiology residents (_P_ = .103). The specialty interaction was 10.44 percentage points (_P_ < .001). The divergence is sharpest when GPT-5.4 was correct: non-radiology residents did worse with dual support (87.4% single versus 74.8% and 74.5% dual; overall _P_ < .001), suggesting that readers with less radiographic [[prior-knowledge]] were more easily swayed by a disagreeing second model even when the first was right. Domain expertise shaped how the extra suggestion was weighed, a [[differential-effects-across-learner-groups]] pattern echoed in prior AI-assistance work.

## Time, confidence, and revisions
Interpretation time and confidence change did not differ across the three conditions within either specialty, so the accuracy gain when GPT-5.4 was wrong came without an extra time penalty. Decomposing the change, radiology residents made more beneficial incorrect-to-correct revisions with dual support (14.8%, 19.9%, and 22.8%; _P_ = .027), while harmful correct-to-incorrect revisions did not differ (_P_ = .131). For non-radiology residents neither revision type differed across conditions. An exploratory analysis of cases in which both models were wrong found no significant dual-versus-single difference. Confidence change differed by specialty overall (radiology 0.13 versus non-radiology 0.24 points; _P_ = .005), hinting that the two groups calibrated [[trust-calibration]] against the AI differently, though the mechanism was not measured.

## What this means for practice
- **Instructors.** Teaching residents to treat a second AI opinion as a check on the first — not as a second vote to be averaged — matches what helped here: the benefit appeared when the shared model was wrong, not when it was right.
- **Instructors.** Plan for the failure mode seen in non-radiology residents: when the primary suggestion is correct, a disagreeing model can lower accuracy, so [[ai-literacy]] training should cover when to favor the first output.
- **Medical educators.** The specialty split argues against a one-size human-AI workflow. Radiology and non-radiology trainees needed different guidance on how much weight to give an additional model.
- **Medical educators.** Because dual support added no measurable interpretation time, it is a low-cost interaction change to trial in clinical-skills and [[professional-training]] sessions.
- **Researchers.** Matching all models on overall accuracy before comparison is a reusable way to isolate presentation effects from raw [[benchmark]] differences.

## Limitations
- The study ran at three hospitals in a single country (China), and 87 of 123 analyzed residents (70.7%) came from one center, limiting generalization.
- Participants were residents with fewer than 3 years of experience only; findings may not transfer to experienced radiologists or to other clinical roles.
- The 60-case set was purposively selected to balance disease [[writing-education|composition]] and to match model accuracy, so it may not reflect routine case mix.
- The evidence reflects a single short session with a fixed case set, not sustained clinical use or patient outcomes.
- Model versions were fixed at GPT-5.4, Kimi-K2.6, and Gemini-3.6 Flash; these fast-moving systems have since been revised, so the effect sizes are tied to that mid-2026 vintage and may not hold for newer models.
- The dual-suggestion effect depends on the second model's disagreement pattern with GPT-5.4, so it may not be a stable property of any two-model pairing.

## Citation
Wu, L., Xu, Z., Wang, H., Zhou, F., Deng, W., Zhang, C., Zhu, Y., Chen, K., Liang, X., Yang, C., Chen, Y., Chen, H., & Zhou, F. (2026). [Dual- versus Single-Suggestion AI Support for Radiographic Interpretation in Residents: Randomized Multireader Study](https://arxiv.org/abs/2610.09589). *arXiv preprint arXiv:2610.09589*.