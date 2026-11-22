---
title: "Large Language Model–assisted curriculum audit in psychology: A prompt-based method"
created: "2026-11-16T07:34:23-05:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
authors: ["Rodafinos, A."]
published: "2026-09-10"
venue: "Open Scholarship of Teaching and Learning"
source_url: https://doi.org/10.56230/osotl.177
foundations: [curriculum-design, human-ai-collaboration]
pedagogy: [scaffolding, self-regulated-learning]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment-validity]
methods: [ai-assisted-educational-research]
institutions: [educational-policy-ai, governance]
ethics: [bias-mitigation, privacy]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [administrators, assessment designers, curriculum designers]
sources: ['raw/papers/rodafinos-llm-curriculum-audit-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Rodafinos (2026) presents the Prompt Playbook, a workflow built on prompts A through L for program-level [[curriculum-design|curriculum audit]] and competency mapping in psychology, built so that a faculty team can diagnose misalignment before it decides whether to redesign anything. The method has three stages: a program audit that surfaces gaps among aims, course learning outcomes and assessment evidence; a competency-mapping stage that prioritizes knowledge, skills and abilities from external signals triangulated against disciplinary standards; and an optional integration stage that revises outcomes and designs paired AI-supported and AI-restricted tasks. Two features distinguish it from a prompt collection. The first is sequencing: audit and redesign are deliberately separated, so generated analysis feeds deliberation rather than replacing it. The second is a [[governance|governance]] layer — an evidence pack, run records, a validation checklist, a decision log and repeat-run checks — that treats [[llm|LLM]] output as a time-stamped artifact rather than a finding. Rodafinos is explicit that this is a methodological paper: examples are illustrative, and the single captured run in the appendix exists to show how the protocol handles imperfect output.

*No primary data: this is a methodological paper. Its examples are illustrative, and the one captured LLM run is annotated to demonstrate the validation protocol rather than to report findings.*

## Key Findings

- **Diagnosis and redesign are separate stages, and that separation is the design.** Steps 1 and 2 review the curriculum as it currently exists; Step 3 is described as an optional extension that departments may never need. The stated reason is that audit findings have to pass through human interpretation and program governance before anyone rewrites an outcome, and collapsing the two turns a decision aid into a prescription.
- **The audit is four prompts that fit inside one meeting.** Prompt A produces a curriculum health check with a short diagnostic summary and a small set of high-leverage actions; Prompt B tests mission fit against graduate attributes; Prompt C builds a course-by-competency map showing where a competency is introduced, developed and assessed; Prompt D tags each learning outcome by cognitive demand and priority competency. Each prompt assigns the model a persona — accreditation reviewer, program director, learning outcomes analyst — on the argument that role framing improves specificity.
- **Competency priorities require triangulation, not a single signal.** The Playbook's rule is that no knowledge, skill or ability becomes a core priority unless at least two of the following support it: disciplinary standards, program mission, faculty or employer or alumni or student feedback, professional bodies, a labor-market scan, or scholarly synthesis. Single-source candidates are held as provisional for a later cycle. The minimum viable scan is specified as 40 to 60 postings across 4 to 6 graduate job families from 2 to 3 sources, within 6 to 12 months, in the program's primary graduate geography.
- **Labor-market evidence is treated as partial by construction.** Rodafinos warns that job postings are biased by sector, geography and recruitment practice, that the scan is not a representative dataset, and that outputs must not be used to "teach to the job advert." Prompts E through H mine postings, map each candidate to scholarship and standards, forecast which skills will grow in importance, and then compare priorities against existing outcomes to show what is taught versus what is assessed with credible evidence.
- **Step 3 pairs AI-supported and AI-restricted tasks targeting the same outcome.** Prompt I rewrites outcomes with observable verbs and tags them to standards; Prompt J checks them against SMART criteria; Prompt K designs the paired task, with the restricted version eliciting unaided reasoning and the supported version developing evaluation, use and documentation of tool output. Prompt L drafts roughly 150 words of student-facing policy for a syllabus.
- **The governance layer is a documented sequence, not a disclaimer.** Scope boundary statement, a Curriculum Evidence Pack held constant across runs, a Run Record and Prompt Log capturing prompt version, operator, tool and model version, settings and verbatim output, repeat-run checks for high-stakes uses, a validation checklist, a disagreement procedure, a stability rating, an equity and bias review, and a Decision Log linked to the approving body. The three compulsory validation checks are factual integrity, alignment integrity, and completeness or specificity.
- **Reproducibility is redefined because textual reproduction is not available.** Rodafinos distinguishes procedural reproducibility, output stability and decision robustness, and supplies a three-part rating — stable, partially stable, unstable — where unstable output may not be used in program documentation without further triangulation or committee review.
- **The captured run produced minor defects and a caution, not a clean answer.** In the appendix, Prompt D is run on a bounded evidence pack for PSY101 consisting of the syllabus, five course learning outcomes, a 1,500-word essay brief and a short marking [[rubrics|rubric]], using ChatGPT-5. Validation records one inference that was plausible but not explicit in the evidence pack, one cognitive-level call judged slightly too high, a recommendation too underspecified to act on, and an equity caution requiring tool-neutral wording. Some points were accepted, some revised, one held as provisional.
- **The illustrative audit found the pattern the method is meant to catch.** Traditional research methods were well covered, while AI literacy, algorithmic bias and human–AI collaboration received limited explicit attention — a gap that then drove the competency-mapping stage.
- **Evaluation is designed but not performed.** The proposed pilot uses two second-year courses with contrasting assessment formats, a pre–post mapping design, independent double-coding of a subset with Cohen's κ as a stability measure, workload and usability ratings, and expert panel ratings of outcome–assessment alignment.

## How the study was done

The Playbook was developed iteratively rather than tested. Rodafinos describes drafting and refining early versions through repeated application to typical program materials — syllabi, course learning outcomes, assessment briefs and program aims — with successive revisions to reduce ambiguity and to make outputs usable in committee deliberation. Two requirements shaped the prompt set: outputs had to be actionable and auditable, and the prompts had to support team use rather than replace curriculum expertise.

The theoretical framing is curriculum design plus [[self-regulated-learning|self-regulation]]. Backward design supplies the order (goals before assessment), constructive alignment supplies the test (activities and assessments match the goals), and psychological work on goals, criteria, feedback and structured reflection supplies the rationale for treating prompts as [[scaffolding|scaffolds]] that help faculty articulate rationales and check evidence. The [[human-ai-collaboration|hybrid-intelligence]] position is stated plainly: the tool generates alternatives and surfaces gaps, while interpretation, prioritization and decision remain with program leaders.

The worked example is documented as a single captured run with a stated tool and version, a bounded evidence pack, and a verbatim output excerpt. The author's transparency statement adds that ChatGPT-5 was used as a brainstorming and drafting aid, that outputs were reviewed and verified before inclusion, and that the example is not a validated curriculum analysis. The article itself was written with assistive use of Gemini Pro, Perplexity and ChatGPT-based assistants, with cited works selected and reviewed by the author and no AI use in generating data or making analytic decisions.

## What this means for practice

- **Run Step 1 alone first.** Prompts A through D are the lowest-cost entry point and produce artifacts a program committee can argue about: a gap list, a competency map and a tagged outcome table. A department that never proceeds to redesign still gets a defensible baseline for a quality-assurance cycle.
- **Curriculum designers.** Keep the evidence pack fixed, version the prompts, and log rejections: the protocol's credibility rests on being able to say which documents, which prompt version and which model produced a claim; teams that paste a new syllabus mid-review lose the audit trail that makes the output usable in accreditation documentation. Recording where the tool's framing was misleading or incompatible with local priorities is what lets a later cycle see how human judgment shaped the curriculum, and it is the part most likely to be skipped.
- **Do not let labor-market scans set the curriculum.** The triangulation rule and the explicit warning against teaching to the job advert are the guardrails. A single posting or a single employer's wish list is a discussion prompt, and the Playbook says so.
- **Give the paired tasks real assessment weight.** The AI-restricted half is what certifies unaided competence; the AI-supported half is what develops the evaluation and disclosure skills graduates now need. Running only the supported version removes the comparison that makes the design informative.
- **Programme designers.** Use the policy prompt as a drafting aid, then edit it: prompt L produces syllabus language, not institutional policy. The paper's own sidebar is the better template: which tools are permitted, what must be disclosed, what counts as unacceptable, and where students can get help.

## Limitations

- **The framework has not been evaluated.** No pilot data, no reliability estimates and no evidence of impact on learning, assessment quality or faculty practice are reported. The illustrative examples are constructed to show output structure, and the single captured run is one prompt on one course.
- **It is oriented to psychology and to English-language materials.** Rodafinos names this directly: disciplinary, cultural and regulatory adaptation and validation are needed, including where professional standards and acceptable tool use differ.
- **Labor-market signals are partial and may encode bias.** Sector, geography and recruitment practice shape what postings ask for, and the protocol's answer — triangulation and an equity review — mitigates rather than removes the problem.
- **Output stability is asserted as a design goal, not measured.** The stability rating and repeat-run check are procedures; how much LLM output actually varies across sessions and models on these tasks is untested here.
- **The protocol is heavier than it looks.** The full protocol, the prompt set, an evidence pack and a decision log imply administrative work the paper does not cost, and it assumes baseline documentation, tool access and faculty capacity that many programs lack.
## Citation

Rodafinos, A. (2026). [*Large Language Model–assisted curriculum audit in psychology: A prompt-based method*](https://doi.org/10.56230/osotl.177). *Open Scholarship of Teaching and Learning, 5*(2), 26–54.
