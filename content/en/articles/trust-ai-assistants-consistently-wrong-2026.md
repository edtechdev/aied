---
title: "Do People Trust AI Assistants Even When They Are Consistently Wrong?"
created: "2026-11-13T09:14:00-05:00"
updated: "2026-11-13T09:14:00-05:00"
type: article
page_kind: [evaluation]
research_method: [experiment]
evidence_context: non_educational
level: [higher ed, adult learning]
audience: [researchers, instructors, software developers]
sources: ['raw/papers/trust-ai-assistants-consistently-wrong-2026.md']
source_url: "https://arxiv.org/abs/2611.14833"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, cognitive-offloading, critical-thinking]
technology: [llm, conversational-ai]
ethics: [trust-calibration, automation-bias, ai-sycophancy]
---

> **Synthesis:** Jones, Wong, Cohen, Woolley and Bergen (2026) ran four preregistered experiments on whether people adjust their reliance on an [[llm|LLM]] advisor as they learn how accurate it is. When participants got prompt, unambiguous feedback after each conversation, they learned: advisors that had been right 100% of the time persuaded them 67% of the time against 21% for advisors that had been wrong every time. Remove that feedback and the picture inverts — a consistently unhelpful model still persuaded 48% of the time, slightly more than a consistently helpful one at 38%. Reliance started high and fell only when inaccuracy was demonstrated, and participants trusted AI advisors more than human ones (83% versus 65%). The finding that matters for [[trust-calibration|calibration]] is conditional: people do not arrive calibrated, they calibrate when a ground-truth signal reaches them promptly, which is exactly the signal missing in most study settings where students ask about things they do not already know.

## Key Findings

1. **Feedback, not experience, produced calibration.** With ground-truth feedback after each round, helpful advisors persuaded 67% of the time and unhelpful ones 21%.
2. **Without feedback the advantage disappeared.** A model that had been wrong in every prior exchange still persuaded 48% of the time, above the 38% achieved by a consistently helpful one.
3. **Reliance began high and moved only downward.** Participants did not grow into trusting the good advisor; they started trusting, and reduced reliance only after seeing it err.
4. **AI advisors beat human advisors.** Participants were persuaded 83% of the time by an LLM and 65% by a human, and LLMs gained more from a helpful track record than humans did.
5. **These models were unusually persuasive.** Confidence change reached 48 percentage points, against 5-15 points typical of comparable studies; static hints achieved 20 points and human persuaders 26.
6. **Arguing for the truth conferred little advantage.** A truth advantage appeared only when participants were already confident in their position and did not appear at all for static hints.
7. **Domain expertise did not protect anyone.** Self-rated experience in a question's domain did not predict resistance to persuasion, in any domain or in the pooled analysis.

## Why the feedback condition is the whole finding

The design isolates a variable that real use rarely supplies. Each experiment had participants answer questions with objectively correct answers, then hold a multi-turn text conversation with an assistant prompted to argue for a position — sometimes the correct one, sometimes not. The first four conversations established the advisor's track record, and the fifth measured reliance. In that structure, feedback is a clean binary signal: the participant learns, question by question, whether the advisor was right. That is what makes the 67% versus 21% split possible. In the no-feedback version the same track record produced no reliable difference, which is not a failure of attention but a limit on inference: a user who cannot check the answer has nothing to update on. The authors point out how unusual that clean signal is — feedback on financial, dietary or career advice arrives late, is confounded by other causes, or never arrives at all. Where a student asks an AI about material they are currently learning, the same condition holds.

## Teaching critical AI use

The paper's practical value is in reframing what [[ai-literacy|AI literacy]] training has to supply. Fluency is not evidence, and confidence is not calibration: participants who rated themselves expert in a domain were no harder to persuade than anyone else, and the design's most confident participants were the ones where truth advantages appeared. What changed behavior was a prompt, attributable check. That suggests instruction should build the check into the task rather than teaching skepticism in the abstract — answer keys consulted after the AI's response, worked solutions compared against the model's reasoning, or two independent sources required before a claim is accepted. The related risk is [[cognitive-offloading|offloading]] the check itself: a student who asks the model to verify its own answer has replaced an independent signal with the same source, which is the no-feedback condition wearing a different hat. The [[automation-bias|automation bias]] literature predicts the same asymmetry, and this study measures it in conversation rather than in a single recommendation.

## What this means for practice

- **Instructors.** Attach a checkable ground truth to any AI-assisted task — an answer key, a worked solution, a dataset — so students can learn the model's reliability instead of inferring it from fluency.
- **Learning designers.** Sequence AI use so early tasks have fast, unambiguous feedback, because this study's calibration depended on that signal arriving promptly after each attempt.
- **Developers.** Surface accuracy evidence in the interface rather than leaving users to construct it: a track record, a source link, or a confidence signal tied to something the user can verify.
- **Researchers.** Treat "users will notice when the model is wrong" as an untested assumption; in these experiments they noticed only when someone told them.

## Limitations

- The setting is not educational: participants were adults answering science, logic and probability questions in a lab, so the results speak to judgment under AI advice rather than to classroom learning.
- Experiments 1-3 drew 123, 128 and 420 psychology undergraduates from one institution's subject pool; Experiment 4 recruited 401 US Prolific participants at $16.50 per hour.
- Advisors in these conversations were prompted to argue an assigned position, which differs from a student asking for help, and the authors note the neutral "advisor" framing may have raised baseline reliance.
- Persuasion is measured as answer change and confidence change on quiz-like items, not as decisions with real consequences.
- The truth-advantage tests were partly confounded, since truthfulness and helpfulness were not manipulated independently in the critical final trial of the earlier experiments.

## Citation

Jones, C. R., Wong, J., Cohen, A. S., Woolley, J., & Bergen, B. K. (2026). [*Do People Trust AI Assistants Even When They Are Consistently Wrong?*](https://arxiv.org/abs/2611.14833). arXiv:2611.14833.
