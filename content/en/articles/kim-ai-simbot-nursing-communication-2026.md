---
title: "AI-Powered Simulation: Leveraging Technology to Advance Nursing Communication Skills with AI SimBot"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
evidence_context: educational
authors: ["Kim, T.", "Pankhania, Y. G."]
published: "2026-01-09"
venue: "Journal of Teaching and Learning with Technology"
source_url: https://doi.org/10.14434/jotlt.v12i1.41694
foundations: [theories-and-frameworks, ai-education, human-ai-collaboration]
pedagogy: [self-efficacy, experiential-learning, reflection]
technology: [generative-ai, simulation, conversational-ai]
assessment: [ai-feedback-quality, formative-assessment, self-report-measures]
ethics: [ai-sycophancy, privacy]
research_method: [case study]
discipline: [nursing education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, medical educators]
sources: ['raw/papers/kim-ai-simbot-nursing-communication-2026.md']
confidence: medium
methods: [qualitative-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Kim and Pankhania (2026) describe AI SimBot, a GPT-based [[simulation|virtual patient]] built to give nursing students repeated practice at adolescent substance-use screening, and evaluate it with ninety-eight prelicensure students across two campuses of one U.S. university. Students held a voice or text conversation with "Jordan," a 17-year-old nonbinary patient, administered the six-item CRAFFT screen, received rubric-based feedback, and submitted [[reflection|written reflections]]; the analysis reads two of five reflection prompts. Half the students described nervousness beforehand and 70% described increased confidence afterward, and students judged the patient realistic mainly for its adolescent language and gradual disclosure rather than for any visual fidelity. The authors are careful to call it a feasibility study: they measured perceived confidence, not competence, and they report the design failures alongside the gains. Its contribution is the build detail — one instructor-visible rubric, a per-student cost near fifty cents, and a documented reason why the feedback model had to be swapped.

## Key Findings

- **Most students began anxious and ended reporting more confidence.** 49 students (50% frequency) described feeling nervous, hesitant or uncertain about raising substance use with an adolescent, and 69 (70%) described improved confidence after the simulation, attributing it to having practiced the wording in a safe setting.
- **The structured screening tool was the reported source of composure.** 29 students (30%) named the CRAFFT instrument as the reason the conversation felt navigable, describing it as a "clear framework" that ensured coverage of required topics; the authors warn that the same structure risks checklist communication if used as a script rather than a guide.
- **A nonjudgmental stance was the most discussed communication skill.** 51 students (52%) identified maintaining a nonjudgmental approach as central, with explicit reassurance that screening questions are standard for all patients, calm tone and active listening named as the specific techniques.
- **Students named the real difficulty as adolescent disclosure, not the tool.** 27 students (28%) described challenges specific to adolescents: fear of parents finding out, worry about judgment, defensiveness, and the pull of fitting in, which the authors read as emerging clinical reasoning about a patient population rather than a technical complaint.
- **Authenticity came from language and pacing, not appearance.** 30 students (31%) praised contemporary slang and casual register, and 10 (10%) singled out hesitation followed by gradual disclosure, with one noting the patient "didn't immediately provide all the details, requiring me to ask specific and targeted questions."
- **The three named defects are fidelity, compliance and latency.** 14 students (14%) flagged the absence of nonverbal cues as a limit on rapport building and assessment, 12 (12%) found the patient unrealistically cooperative about accepting referrals, and 16 (16%) reported voice quality problems, response delays or audio dropouts.
- **The feedback model had to be changed because the patient model was too generous.** GPT-4o worked as the patient but produced inaccurate and overly positive feedback, so the evaluator role was moved to O3-mini, which the authors report gave evaluations better grounded in the faculty rubric.
- **Cost and access are the design argument.** The five-stage speech pipeline — record, Whisper transcription, GPT-4o response, TTS-1 synthesis, playback — ran at approximately U.S. \$0.50 per student, which is the basis for the claim that this supplements rather than replaces standardized patients.

## How the study was done

AI SimBot is a Streamlit application integrating three OpenAI models: GPT-4o as the conversational engine playing Jordan, Whisper for speech-to-text, and TTS-1 with the "nova" voice for speech synthesis. Each conversational turn passes through five stages, from recording through transcription, generation, synthesis and playback, with a text-chat toggle available when audio fails. After the session the system produces two artifacts: rubric-based feedback and a downloadable speaker-labeled transcript. An administrative interface with role-based access lets faculty edit prompts, preview behavior and review chat histories. The full patient prompt is reproduced in the appendix, including the persona, clinical scenario and the explicit instruction to use slang sparingly and to respond only with speech text.

The evaluation was a qualitative descriptive case study in a prelicensure public/community health nursing course at Northeastern University. Ninety-eight students across two campuses completed didactic coursework on substance use disorders, CRAFFT screening and harm reduction, then used personal devices to practice the screen with Jordan, a 17-year-old nonbinary high school junior presenting for a routine sports physical. All students completed the assignment, and many practiced more than once before submitting a preferred session. Students submitted transcripts and written reflections for grading; the analysis used five reflection prompts, of which Prompt 1 (confidence before and after) and Prompt 5 (authenticity and realism) were coded.

The institutional review board determined the work was not human subjects research because it was a retrospective analysis of existing deidentified educational assessment data, and a data steward removed identifiers before analysis. Three coders — the primary author and two graduate nursing students — coded independently and reconciled by consensus, with no kappa calculated. Themes are reported with counts and percentage frequencies rather than inferential tests, and the paper reports no pre–post comparison, no control group and no objective performance measure.

## What this means for practice

- **Use a virtual patient to raise the floor on practice volume, not to certify competence.** The study supports repeated rehearsal and reduced anxiety; it does not support claims that students can now screen well, because confidence was measured and skill was not.
- **Write the feedback rubric before choosing the feedback model.** The authors had to move evaluation from the conversational model to a reasoning model because the first produced inflated, inaccurate judgments — an instance of [[ai-sycophancy|sycophantic]] output that a rubric-anchored second pass corrected.
- **Design for the fidelity that carries learning, then say what is missing.** Students accepted the patient as realistic on the strength of language and disclosure patterns while naming the absence of body language as a real limit, which is the honest framing to give students rather than presenting the simulation as equivalent to a live encounter.
- **Decide the cooperation level deliberately.** Making the patient more resistant through prompt engineering risks making the scenario unwinnable or teaching students to push a reluctant adolescent into compliance, so the appropriate target is hesitation that can be worked through, not refusal that must be overcome.
- **Budget for latency if you choose a multi-model pipeline.** The five-stage architecture is what keeps cost near fifty cents per student, and the same architecture is what produces the delays students noticed; a lower-latency build costs more, and that trade-off belongs in the adoption decision.

## Limitations

- Outcomes rest entirely on student self-reflection; self-efficacy was not measured with a validated instrument and no objective structured clinical examination or rubric-scored performance was included, so the study captures perceived confidence rather than demonstrated skill.
- The design is a single-course, single-institution case study, which the authors name as a limit on generalizability; there is no comparison group and no pre–post measurement.
- Coding reached consensus without a kappa statistic, and the coders included the tool's developer, so the thematic counts carry no estimate of reliability or of coder independence.
- Fidelity limits are structural: no nonverbal cues, limited emotional tone, occasional latency and audio dropouts, and a patient who cooperates more than real adolescents typically do.
- Reliance on CRAFFT as the interaction anchor risks students performing to the checklist rather than holding a patient-centered conversation, a risk the authors raise against their own design.
- Equipment and connectivity matter: the simulation ran on students' personal devices, and the paper does not report how students with weaker devices or connections fared.

## Citation

Kim, T., & Pankhania, Y. G. (2026). [*AI-Powered Simulation: Leveraging Technology to Advance Nursing Communication Skills with AI SimBot*](https://doi.org/10.14434/jotlt.v12i1.41694). *Journal of Teaching and Learning with Technology, 14*(Special Issue), 122–145.
