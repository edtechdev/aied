---
title: "Perceptions of Teacher- Versus AI-Generated Feedback: Experimental Findings on the (Implicit) Bias of Teachers Against AI"
created: "2026-09-18T14:20:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
foundations: [teacher-role]
assessment: [feedback, ai-feedback-quality, formative-assessment]
ethics: [trust, bias-mitigation, ai-use-disclosure]
pedagogy: [self-regulated-learning]
methods: [quantitative-research]
research_method: [experiment, survey]
level: [higher ed, secondary]
audience: [researchers, faculty developers, instructors, learners]
page_kind: [evaluation]
sources: ['raw/papers/perceptions-teacher-vs-ai-feedback-bias-2026.md']
confidence: high
---

> **Synthesis:** The question is whether teachers' lower ratings of [[ai-feedback-quality|AI feedback]] reflect the quality of the feedback or only its label. Mertens, Jansen, Steinbach, Fleckenstein and Meyer isolate the provider effect by holding content constant: 401 English-speaking teachers recruited through Prolific read three argumentative student essays of low, medium and high quality, each accompanied by two feedback messages that were both generated with GPT-4-turbo (November 2023) and then randomly labeled as [[teacher-role|teacher]]-generated or ChatGPT-generated. Perceptions were rated on message credibility, usefulness and fairness, alongside provider-directed items on trustworthiness, effort, benevolence and willingness to rely, plus a forced-choice preference after each essay. A 2 × 2 mixed design additionally randomized whether participants first received a written explanation of how ChatGPT works. Teachers rated identical feedback more positively under the teacher label: credibility b = 0.21, usefulness b = 0.47, fairness b = 0.48 (all p < .001), and 73% preferred the teacher-labeled message, t(400) = 15.55, d = 0.78. The explanation intervention changed nothing (interaction ps ≥ .399). The authors read the pattern as ingroup favouritism under social identity theory, an implicit bias that survives when feedback quality is controlled.

## Key Findings

1. **The design holds content constant and varies only the label.** Every feedback message in the experiment was produced by GPT-4-turbo; the manipulation was the attribution shown to the participant. Each teacher saw three student texts, each paired with two feedback messages, one labeled "teacher-generated" and one labeled "ChatGPT-generated", with feedback–label pairings, presentation order and text order fully randomized. The study is a 2 × 2 mixed factorial: provider label was within-subjects, and a between-subjects factor randomly gave half the sample an explanation of ChatGPT's functionality.
2. **401 in-service teachers completed the study.** Recruitment via Prolific Academic drew 458 participants; 18 were excluded for timing out, 10 for failing two or more attention checks and 29 for not actively teaching, leaving 401 (69.8% female, 1.5% diverse, M age = 38.14, SD = 10.36), predominantly based (53.4%) and teaching (52.3%) in the United Kingdom and teaching [[k-12]] students (62.6%). The experiment ran February to May 2024 and produced N = 2,406 feedback-perception observations and 1,203 preference ratings.
3. **Identical feedback was rated less credible, less useful and less fair under the AI label.** Teacher-labeled versus AI-labeled means were 4.02 vs 3.82 on message credibility, 5.99 vs 5.55 on [[technology-acceptance-model|perceived usefulness]] and 5.98 vs 5.51 on perceived fairness. The linear mixed models estimated b = 0.21, p < .001, partial η² = 0.04 for credibility; b = 0.47, p < .001, partial η² = 0.07 for usefulness; and b = 0.48, p < .001, partial η² = 0.08 for fairness, with the ChatGPT label as the reference condition.
4. **Effects survived every covariate in the models.** The main effect held after controlling for age, gender, perceived LLM expertise, teaching level (K-12 yes/no), subject taught, country of residence and frequency of LLM usage. Marginal R² was .041 for the perception models against a conditional R² of .450, showing how much of the variance sat in the crossed random effects of participant, student text and feedback message.
5. **Provider-directed items showed the largest gaps.** When the item stem referred explicitly to the provider, teacher-labeled feedback was rated more trustworthy (4.41 vs 3.92; b = 0.51, p < .001, partial η² = 0.22), judged to have taken more effort (5.62 vs 4.32; b = 1.34, p < .001, partial η² = 0.26) and was more likely to be relied on (b = 1.45, p < .001, partial η² = 0.37), with a small benevolence advantage (3.87 vs 3.77; b = 0.10, p < .001, partial η² = 0.01).
6. **Preference split roughly three to one.** Asked which message they would prefer to pass on to a student, 73% chose the teacher-labeled feedback and 27% the ChatGPT-labeled feedback, consistently across all three texts, t(400) = 15.55, p < .001, d = 0.78.
7. **The label effect appears on individual messages, not just at the average.** Bonferroni-adjusted t-tests comparing the same message under two labels returned small-to-medium negative effects of the ChatGPT label, d = −0.21 to −0.37 (adjusted alpha .005). For usefulness on message A the means were 5.93 under the teacher label versus 5.48 under the AI label, d = −0.36.
8. **The transparency intervention did not work.** Providing written information about what ChatGPT is, how it produces output and what users should keep in mind produced no interaction with the provider label on any outcome (ps ≥ .399), and preference was statistically indistinguishable between the explanation group (75% teacher) and the no-explanation group (71% teacher; p = .911). A manipulation check confirmed the groups did read the material differently, with 50.3 seconds versus 28.2 seconds on the instruction page, F(1, 399) = 17.03, p < .001.
9. **The sample was familiar with AI, and the mechanism remains open.** 40.0% had used ChatGPT for classroom preparation, 17.0% in class and 39.6% discussed AI use with colleagues; mean self-rated knowledge of LLM processes and benefits was 2.67 (SD = 0.91) on a 1–5 scale, while 14.2% used LLM applications several times a week or more and 6.2% knew none. The authors frame social identity ingroup favouritism as one plausible mechanism but did not measure ingroup identification, so professional threat, pre-existing AI attitudes, competence attributions and heuristic processing of a salient label remain live alternatives.

## The design: identical feedback, randomized labels

The problem the study targets is a confound. Earlier work comparing teacher and AI feedback compared different messages, so a lower rating for AI feedback could mean the AI wrote worse feedback rather than that teachers distrusted [[generative-ai|generative AI]]. Mertens and colleagues removed that ambiguity by generating the feedback themselves. Three argumentative essays from a previous project, written by 16-year-old English-as-a-foreign-language learners responding to a TOEFL iBT prompt about television advertising aimed at young children, were selected to span low, medium and high [[writing-education|writing quality]]. For each essay the researchers generated two feedback messages with GPT-4-turbo, both prompted in line with principles of effective feedback, and then showed one under a teacher label with a symbolic pen cue and one under a ChatGPT label with the logo.

Participants rated each message immediately after reading it. Message credibility was measured on a five-point scale through clarity and engagement subscales; perceived usefulness and perceived fairness were measured on seven-point scales adapted from the Feedback Perception Questionnaire. A second block of items named the provider in the stem, covering provider competence and trustworthiness, benevolence, perceived effort and willingness to rely. After each text a forced-choice item asked which of the two messages the teacher would prefer to give to one of their own students. These are explicit, self-report [[evaluative-judgment|judgments]]; the paper describes the bias it infers as implicit because it operates through a label the participant may not consciously weigh. The additional-information condition, built on the explanation-for-trust approach, provided balanced detail on the model's capabilities and limitations for the group that received it.

## Results: what changed when only the label changed

Across all three texts and both messages, the direction was the same. The same sentence-level feedback was less credible, less useful and less fair when it was attributed to ChatGPT, with effect sizes in the small-to-medium range and the fairness and usefulness gaps larger than the credibility gap. The provider-directed items moved further, especially perceived effort and willingness to rely, suggesting that teachers were not only judging the message but reasoning about who or what stood behind it. How [[feedback]] is perceived, in this literature, is an input to whether it is acted on at all, which is why the authors treat a label-driven dip as practically consequential rather than merely attitudinal.

Only teachers were sampled, so the study speaks to one rater group. The paper positions its result against learner-side evidence, where a comparably mixed picture exists: student and pre-service teacher samples have judged human feedback more useful than AI feedback, while other studies report openness to AI feedback and interest in its usefulness. Crucially, the earlier rater studies confounded source with content. The contribution here is showing that even with quality fixed, the human label wins — while the framing of [[trust]] in [[human-ai-collaboration|human–AI collaboration]] means the result cannot simply be read as teachers detecting that AI feedback was inferior, because it was not inferior: it was the same text.

## Source aversion or accuracy judgment?

The theoretical account is social identity theory. Teachers belong to a professional ingroup that shares norms and expertise about [[assessment]], while an AI system is an outgroup entity; knowing that a message came from an ingroup member works as a heuristic cue that raises acceptance, and so identical content is evaluated more generously when a fellow teacher is named as its source. On this reading the preference for the teacher label is ingroup favouritism, not a considered verdict on quality.

The authors keep three rival explanations on the table. Intergroup threat theory predicts that AI may trigger realistic and symbolic threat to a [[learner-identity|professional identity]] in which feedback is a core duty, so teachers might devalue AI feedback they privately judge as good. A simpler account is competence attribution: teachers may assume a [[llm|language model]] cannot yet write feedback on a par with an expert, and lean on that assumption instead of the text. A third is heuristic processing of a salient label, which the [[research-methods-aied|study design]] itself makes possible, since the label is the only thing that differs and delayed-disclosure studies show trust dropping when people learn material they thought human came from AI. Because the study never measured whether participants identified with the supposed teacher, none of these mechanisms is tested. The paper's own conclusion is that it cannot yet say which one drives the effect, and that this matters, because transparency-based remedies assume a trust deficit while identity- or threat-based remedies would need framing and contact instead.

## What it implies for AI feedback credibility

The practical reading is uncomfortable for rollouts that assume acceptance follows quality. If a school buys an [[ai-feedback-quality|AI feedback]] tool whose output is genuinely good, adoption can still stall because the same output is discounted at the point of use. For teachers, the authors recommend reflection on implicit assumptions about AI, structured opportunities to experiment with tools, gradual implementation and involvement in developing and evaluating the tools — approaches to [[bias-mitigation|bias mitigation]] that treat the barrier as psychological rather than technical. Framing AI as a collaborator rather than a separate entity, following the common ingroup identity model, is offered as one route to softening the ingroup–outgroup boundary.

They are equally careful about what not to conclude. A degree of skepticism is constructive: in hybrid-intelligence arrangements, caution prompts teachers to review, adapt and contextualize machine output with their students in mind, which is exactly the professional judgment that keeps AI use educationally meaningful. The finding also concerns a disclosed label. In real classrooms the source is often blurred, an AI draft edited and sent by a teacher, and the authors expect content to weigh more than provenance there. Their design deliberately made the label salient, which maximizes the very cue under study.

## What this means for practice

- **Instructors.** Review and adapt AI feedback before it reaches students instead of delivering it automatically: identical GPT-4-turbo messages were rated less credible (4.02 versus 3.82), less useful (5.99 versus 5.55) and less fair (5.98 versus 5.51) once the label named ChatGPT.
- **Instructors.** Disclose how an AI draft was used and what you changed in it, because 73% of teachers preferred to pass on the teacher-labeled message and the largest gaps appeared on provider-directed items such as perceived effort (5.62 versus 4.32) and willingness to rely.
- **Teacher educators.** Run structured, hands-on experimentation with these tools and surface teachers' implicit assumptions about AI, since the paper reads the effect as ingroup favoritism or heuristic processing rather than a considered verdict on feedback quality.
- **Administrators.** Frame AI as a collaborator inside the teaching team rather than a separate entity when introducing feedback tools, and design the rollout around teacher review rather than automatic delivery — a degree of skepticism is the professional judgment that keeps AI use educationally meaningful.
- **Researchers.** Replicate the identical-feedback, randomized-label design with a measure of teachers' identification with the teaching ingroup, because no mechanism — identity, threat, competence attribution or heuristic processing — is tested by the present data.

## Limitations

The sample is convenience-recruited through Prolific from English-speaking teachers, over half in the United Kingdom; it is not representative, and the authors consider the findings time-sensitive, captured in the early adoption phase of [[generative-ai|generative AI]] in 2024, when attitudes and norms were still forming. K-12 teachers showed a slightly stronger teacher-label preference, which the authors note but decline to interpret, since no hypothesis covered it. The task is artificial: participants rated isolated messages for essays they had no relationship with, on a website, under explicit labels, which is not how feedback attribution works in a classroom. All outcomes are self-reported, so [[self-report-measures|self-report measures]] may overstate deliberation and cannot show whether the discount would change what teachers actually pass on to students; usefulness ratings in particular need not translate into use. The outcome set, [[feedback-literacy|credibility, usefulness and fairness]], is one operationalization of feedback perception and excludes affective dimensions. The paper is a preprint under review, so the reported estimates may change in the final version, and the authors state that the underlying mechanism, whether identity, threat, competence attribution or heuristic processing, is untested by their data.

## Connected Concepts

- [[ai-feedback-quality]] — the construct at stake: whether AI feedback is judged on its content or discounted by its source
- [[feedback]] — the practice whose perceived credibility, usefulness and fairness were measured under two labels
- [[trust]] — the paper's core barrier, treated as label-driven rather than evidence-driven
- [[bias-mitigation]] — the interventions the authors propose against implicit negative attitudes toward AI
- [[teacher-role]] — the professional identity that makes AI an outgroup and feedback a core duty
- [[feedback-literacy]] — how credibly and usefully feedback is read, the perceptual layer the study probes
- [[formative-assessment]] — the practice setting where AI-generated feedback is meant to operate
- [[human-ai-collaboration]] — hybrid intelligence as the constructive response to teacher skepticism
- [[trust-calibration]] — the alternative goal, balanced information about AI capabilities and limits, which the intervention failed to reach
- [[generative-ai]] — GPT-4-turbo as the actual producer of every message in the experiment
- [[technology-acceptance-model]] — the adoption literature that makes teacher attitudes a gate on implementation
- [[self-report-measures]] — the measurement approach and its limits for translating ratings into behavior

## Connected Articles

- [[genai-teacher-feedback-comparison]] — Student perceptions of generative AI versus teacher feedback on usefulness and trustworthiness
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]] — Review of whether LLMs can replace teachers in grading and feedback
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Explainable-by-design LLMs for automated teacher assessment and what trust requires
- [[pre-service-science-teachers-ai-perceptions-2026]] — Acceptance and perceptions of AI among pre-service science teachers
- [[intelligent-tpack-ethics-teachers-trust-distrust-2026]] — Ethics-domain intelligent-TPACK and teachers' trust and distrust of AI
- [[xai-teachers-trust-edtech-recommendations-2026]] — Whether explainable AI improves teachers' trust in edtech recommendations
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — Teacher and student views on control and agency in K-12 classroom AI
- [[liu-deris-ai-feedback-literacy-uptake]] — Student feedback literacy as a predictor of whether AI feedback is used
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated versus human-developed assessment tasks through the TPCK frame
- [[task-context-trust-educational-hri-2026]] — Task context, not appearance, as the driver of trust in educational technologies

## Citation

Mertens, U., Jansen, T., Steinbach, M., Fleckenstein, J., & Meyer, J. (2026). [*Perceptions of Teacher- Versus AI-Generated Feedback: Experimental Findings on the (Implicit) Bias of Teachers Against AI*](https://osf.io/preprints/psyarxiv/s25rn_v1). Preprint, under review.
