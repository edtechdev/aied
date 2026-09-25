---
title: "Impact of real-time AI feedback on the technical skill acquisition of STEM students in Colleges of Education in Kwara State"
created: "2026-09-25T11:42:33-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/real-time-ai-feedback-technical-skills-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment, instrument development]
discipline: [stem education]
level: [higher ed, undergraduate, teacher education]
audience: [instructors, administrators, instructional designers, policymakers, researchers]
foundations: [cognitive-offloading]
pedagogy: [anxiety-and-stress, desirable-difficulties, scaffolding, self-efficacy]
technology: [intelligent-tutoring, llm]
ethics: [equity-in-ai-education, global-south, pedagogical-safety]
assessment: [ai-feedback-quality, formative-assessment, learning-gains]
methods: [mixed-methods-research, quantitative-research]
institutions: [change-management, educational-policy-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A six-week quasi-experimental pre-test/post-test control-group study gave a localized AI tutor to 240 STEM students across three Kwara State colleges of education, against 120 conventionally taught peers. The [[intelligent-tutoring|AI-augmented]] group's mean gain on a two-part Technical Skill Assessment Test was roughly double the control group's, and an analysis of covariance with the pre-test as covariate rejected the null hypothesis. Most AI-assisted students reported a significant confidence increase, against fewer than half of controls. The authors read this through [[cognitive-offloading|cognitive load theory]]: synchronous [[feedback]] as [[scaffolding]] that removes extraneous load, though thin reporting, no effect sizes, an unnamed base model, self-reported confidence, makes the advantage indicative rather than precise.

## Key Findings
1. Quasi-experimental pre-test/post-test control groups: 240 STEM students, 80 each from KWASUED (Ilorin), KWCOED (Oro), KWCOED Technical (Lafiagi), from 2,400 NCE II and 200-Level Degree students; 120 each.
2. On the Technical Skill Assessment Test (TSAT), the experimental group moved from a pre-test mean of 43.85 to 81.90 (gain 38.05, SD 5.45); controls from 44.12 to 62.45 (gain 18.33, SD 8.12).
3. ANCOVA (0.05 level, pre-test as covariate) gave a significant group effect (F = 125.60, df 1, p = .000) and a significant pre-test covariate effect (F = 18.45, p = .000), rejecting the null hypothesis.
4. Self-efficacy evidence came from student journals and a Likert-scale survey: 88% of experimental students reported a significant confidence increase, against 42% of controls; controls cited fear of damaging equipment.
5. The intervention: the Kwara-STEM AI Tutor (v.2.6), a localized [[llm|Large Language Model]] fine-tuned on National Board for Technical Education and NCCE curricula, monitoring workstations for code-syntax or circuit-logic errors, giving scaffolded "nudges" not answers and "Clarify" translations into Yoruba or Nupe.
6. Three KWASUED Curriculum and Instruction experts validated the TSAT (Cronbach's Alpha 0.86); collection spanned six weeks of the first semester of 2026 — Week 1 pre-test, Weeks 2–5 treatment, Week 6 post-test.
7. The authors read the outcome through Cognitive Load Theory: real-time feedback reduces extraneous load, freeing capacity for "germane" learning; hints beat direct answers.

## Design, sample, and instruments
Sampling was multi-stage: institutions stratified "Urban" (Ilorin) / "Rural/Technical" (Oro, Lafiagi); three purposively selected for STEM mandates; 80 students each (40 experimental, 40 control) by simple random sampling; 240 total from 2025/2026 NCE II and 200-Level Degree cohorts, with [[prior-knowledge]] differences held constant.

The TSAT, a purpose-built [[assessment-validity|validated instrument]], covered Part A troubleshooting (faults in a pre-configured malfunctioning system) and Part B synthesis (a working digital or mechanical solution from scratch). Analysis used descriptive statistics, ANCOVA at a 0.05 level with pre-test scores as covariate, and [[mixed-methods-research|qualitative]] coding of journals for "User Trust" and "Feedback Satisfaction".

## The feedback gap the tutor was built to close
Instruction here suffers feedback latency: students wait days for a graded workshop exercise, and a student-to-lecturer ratio often exceeding 100:1 in foundational STEM practicals lets incorrect habits consolidate unobserved. The authors cite earlier Nigerian work reporting AI-aided groups at 30-40% higher mastery in technical writing and procedural accuracy than manual-evaluation peers, and a gap between high continuous assessment grades and low industry-standard practical competency.

The Kwara-STEM AI Tutor (v.2.6) targets both: it monitors Computer Science and Electrical-Electronics workstations, uses "Active Monitoring" to detect code-syntax or circuit-logic errors, and nudges rather than answers (warning that a loop on line 14 will never terminate and to check the increment variable). Treatment ran in a "Smart Lab" Weeks 2–5; controls stayed in the traditional workshop with lecturer feedback on request or at end-of-class reviews.

## Skill acquisition results
Both groups improved. The ANCOVA table reports a pre-test sum of squares of 1245.30 (df 1, mean square 1245.30, F = 18.45, p = .000), a group sum of squares of 8450.75 (df 1, mean square 8450.75, F = 125.60, p = .000), and an error sum of squares of 15870.20 (df 237, mean square 66.96). Since p = .000 < 0.05 the null hypothesis is rejected: a statistically significant difference in [[learning-gains|technical skill acquisition]] favors the AI feedback group. The authors single out Lafiagi, arguing AI can "subsidize" a shortage of physical instructional staff in rural Kwara — a claim about [[equity-in-ai-education|equity]] in staffing-poor [[vocational-education|technical education]], not the technology.

## Confidence, safe-to-fail practice, and the limits of the evidence
On [[self-efficacy]] during independent practicals, 88% of the experimental group reported a significant confidence increase, against 42% of controls; the authors attribute the control figure to [[anxiety-and-stress|fear of damaging equipment]], arguing a "safe-to-fail" environment preserves the [[desirable-difficulties|struggle]] technical mastery requires.

The recommendation set goes well beyond the evidence: [[educational-policy-ai|state-wide curriculum integration]], offline-capable "Edge AI" servers, mandatory "Human-AI Collaborative Instruction" training, and an indigenous-tutor EdTech hub in Yoruba, Nupe, and Ebira all rest on one six-week study in one state.

## What this means for practice
- **Instructors.** Prompt a check rather than a repair, keeping lecturer intervention for deep misconceptions.
- **Administrators.** Benefits are largest where supervision is scarcest: treat a real-time tutor as a capacity subsidy for high-ratio practicals, not a replacement, and fund training that shifts staff from grading to mentoring.
- **Assessment designers.** Reuse the TSAT pattern: split troubleshooting from synthesis, validate with an expert panel, report reliability, covary on the pre-test.
- **Policymakers.** [[global-south|Resource-constrained]] institutions cannot assume connectivity; offline-capable local servers keep the loop alive, and a [[digital-divide|rural-urban gap]] appears within one state.
- **Researchers.** Treat the self-efficacy figures as self-report and the gains as unquantified — no effect size — and measure retention with delayed post-tests before adopting.

## Limitations
- The base model behind the Kwara-STEM AI Tutor (v.2.6) is never identified beyond its NBTE and NCCE fine-tuning, so its AI generation and reproducibility against other tutors are unknown.
- The ANCOVA reporting is incomplete: sums of squares, degrees of freedom, F, and p cover only covariate, group, and error, with no effect sizes or confidence intervals and no subgroup breakdown despite institutional and gender stratification.
- The 88% and 42% figures are self-reported, with no instrument reliability, item count, or inferential test, and the "User Trust" / "Feedback Satisfaction" coding is described only in passing.
- Intact classes and purposive selection replaced randomization, and measurement ended at the Week 6 post-test, leaving selection and retention unaddressed.

## Connected Concepts
- [[feedback]]
- [[formative-assessment]]
- [[ai-feedback-quality]]
- [[self-efficacy]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[llm]]
- [[learning-gains]]
- [[stem-education]]
- [[vocational-education]]
- [[anxiety-and-stress]]

## Connected Articles
- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback in education: A qualitative systematic literature review
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — Institutional Structures, Digital Inequality, and AI Integration in Higher Education
- [[ai-vocational-education-training-review]] — Artificial intelligence in vocational education and training: A systematic review of educational purposes, theoretical conceptualizations, and empirical effectiveness
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[el-salvador-ai-tutoring-selection-claim-2026]] — How much selection would be enough? Bounding the learning claim of El Salvador's artificial intelligence tutoring pilot
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and teacher feedback: student perceptions of usefulness and trustworthiness

## Citation
Muritala, N. K., Ahmed, H. S., & Olumorin, C. O. (2026). [*Impact of real-time AI feedback on the technical skill acquisition of STEM students in Colleges of Education in Kwara State*](https://doi.org/10.64726/ve5g5r44). Aminu Kano Academic Scholars Association journal.