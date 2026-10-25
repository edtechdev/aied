---
title: "Can AI Help Teachers? Experimental Evidence on Generative AI and Lesson Preparation"
created: "2026-10-25T10:05:00-04:00"
updated: "2026-10-25T10:05:00-04:00"
type: article
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: []
level: [k 12]
audience: [instructors, faculty developers, administrators, policymakers]
foundations: [teacher-role, teacher-ai-competency]
pedagogy: [professional-training]
technology: [generative-ai, conversational-ai, llm, prompt-engineering]
assessment: []
methods: [rct, quantitative-research]
ethics: []
confidence: high
sources: ['raw/papers/appel-genai-teacher-lesson-preparation-experiment-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Appel, Fervers and Piepenburg (2026) ran a preregistered RCT with 204 teachers to test whether [[generative-ai|ChatGPT]] actually helps with [[teacher-role|lesson preparation]] and whether training improves the help. Teachers were randomized to no ChatGPT, ChatGPT, or ChatGPT preceded by AI training, then completed four incentivized preparation tasks: an introductory quiz, a course mail, an extension of a textbook exercise, and text and transfer questions. Two outcomes were measured — quality of the materials under blinded expert ratings on weighted criteria, and total preparation time. GenAI improved quality and cut preparation time by 34%. Training did **not** further improve quality but produced an **additional 21% reduction** in time, because trained teachers wrote longer, more detailed prompts that needed fewer refinement iterations while untrained teachers iterated more from shorter prompts. Both strategies ended at the same output quality. The headline is that [[prompt-engineering|prompting training]] buys time, not better materials.

## Key Findings

1. **GenAI improved the quality of prepared materials.** On blinded expert ratings against weighted criteria, teachers with ChatGPT produced better lesson-preparation materials than teachers without it.
2. **GenAI cut preparation time by 34%.** Total preparation time across the four incentivized tasks fell by roughly a third relative to the no-access condition.
3. **AI training did not improve output quality further.** The extra training produced no additional gain in rated quality over ChatGPT access alone.
4. **AI training cut time by a further 21%.** On top of the access effect, prior training produced an additional reduction in total preparation time.
5. **Training changed the prompting process, not the product.** Teachers with prior training wrote longer, more detailed prompts that needed less refinement afterwards; untrained teachers used shorter prompts and required more subsequent prompt iterations.
6. **Both prompt strategies reached equal output quality.** The trained strategy was faster without being better, which separates a time-saving effect from a quality effect.
7. **The design isolates training from access.** Because the comparison is a three-arm randomized design with ChatGPT access held constant between the second and third arms, the training effect is measured against tool access rather than against nothing.

## What the three arms can and cannot separate

The three-arm structure is the paper's main methodological strength. Comparing ChatGPT against no ChatGPT answers whether the tool helps. Comparing ChatGPT-plus-training against ChatGPT answers whether instruction adds anything *given* the tool. Those are different policy questions, and many studies of teacher AI use conflate them by comparing trained users against non-users in observational data, where motivation and prior skill are not held constant.

Holding the tasks and incentives constant matters for the same reason. Four concrete preparation tasks — quiz, course mail, textbook-exercise extension, transfer questions — with incentivized effort give the blinded raters something comparable to score, and give the time measure a defined boundary. "Preparation time" in self-reported workload surveys is notoriously elastic; time on a specified task set is not.

The blinded rating on weighted criteria is what makes the quality finding meaningful. Expert judgment of lesson materials is exactly the kind of outcome that is susceptible to a fluency illusion, so blinding raters to condition is the minimum bar, and the paper meets it rather than relying on teacher self-assessment of their own materials.

## Why better prompts produced no better materials

The most interesting result is the null on quality despite a clear process change. Training made teachers write longer, more detailed prompts and iterate less; both routes landed at the same rated quality. That suggests the ceiling on these tasks is set by the task and the material's requirements rather than by prompt craft — a more detailed prompt helps you get to an adequate document faster, not to a better one.

There is a practical implication and a research implication. Practically, a professional-development program that teaches prompting should be justified as a workload intervention, since that is the effect the evidence supports, rather than as a quality intervention. For research, the finding predicts that prompt-training studies reporting quality gains are likely either measuring something a longer prompt cannot reach (specific pedagogical reasoning, say) or comparing against an unusually weak baseline condition.

The result also sits awkwardly with the framing that prompting is a core [[ai-literacy]] competence for teachers. If the trained and untrained routes produce equal materials, then the competence training improved is efficiency in reaching a sufficient artifact, which is worth having but is not the same as judgment about what the artifact should contain.

## What this means for practice

- **Faculty developers.** Justify prompting training as a time-saving and workload intervention, because that is what the randomized comparison supports, and do not promise quality gains the evidence does not show on comparable tasks.
- **[[teacher-role]] Administrators.** Treat preparation-time savings as the primary quantifiable return on GenAI access for teachers, and budget the training as the increment that makes the saving larger rather than as the thing that makes the output better.
- **Instructors.** Expect that investing in prompt detail pays off in fewer correction rounds rather than in a stronger first draft, and decide whether the iteration or the front-loaded prompt suits how you actually work.
- **Policymakers.** Distinguish access from training when costing a rollout, since the two arms produce different effects (quality from access, additional time savings from training) and only one of them requires a professional-development budget.
- **Researchers.** Report quality and time as separate outcomes with a blinded rating, because a combined "effectiveness" measure would have obscured the finding that made this study interesting.

## Limitations

- The tasks were four specified preparation activities completed under incentive, so the quality and time results describe bounded, well-defined preparation work rather than the open-ended, iterative reality of full unit or course planning.
- Quality was assessed by blinded expert ratings on weighted criteria, which is the right control but still a judgment measure, and the paper does not report inter-rater reliability in the abstract; quality differences below that agreement floor would not be detectable.
- The sample is 204 teachers whose national context, subject areas, school levels and prior AI experience constrain generalization, and the study reports no subgroup analysis by subject, experience, or baseline digital skill.
- Preparation materials were rated as artifacts; the study does not measure whether the materials improved student learning, classroom enactment, or teacher confidence, so the chain from better-rated artifacts to better teaching is untested here.
- The no-access arm was a genuine control, but ChatGPT access in a study setting with incentivized tasks may not reflect how teachers use the tool amid competing demands, so the time savings may not transfer to authentic workload.
- The version assessed is a journal pre-proof accepted 10 October 2026, so pagination and any post-acceptance corrections may differ from the final article.

## Citation

Appel, P., Fervers, L., & Piepenburg, J. G. (2026). [Can AI help teachers? Experimental evidence on the effects of generative AI use and AI training on teachers' lesson preparation](https://doi.org/10.1016/j.caeo.2026.100427). *Computers and Education Open*, 100427.
