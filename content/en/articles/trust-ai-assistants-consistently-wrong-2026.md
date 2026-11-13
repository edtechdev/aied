---
title: "Do People Trust AI Assistants Even When They Are Consistently Wrong?"
created: "2026-11-13T09:14:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, cognitive-offloading, critical-thinking]
technology: [llm, conversational-ai]
ethics: [trust-calibration, automation-bias, ai-sycophancy]
---

> **Synthesis:** Jones, Wong, Cohen, Woolley and Bergen (2026) run four preregistered experiments asking whether people adjust their reliance on an [[llm|LLM]] advisor as they learn how accurate it has been. With prompt ground-truth [[feedback|feedback]] after every exchange, people learned to discount a consistently wrong advisor; without it, a model that had been wrong every time persuaded them as often as one that had been right. For [[trust-calibration|calibration]], the point is that students do not arrive with a sense of a model's reliability — they build one only when the task tells them whether the answer was right.

## Key Findings

1. With feedback after every exchange, people learned which advisor to [[trust|trust]] and discounted the one that kept being wrong.
2. Without feedback, a consistently wrong advisor was as persuasive as a consistently right one.
3. Reliance started high and was lost rather than gained; people did not grow into trusting a good advisor.
4. LLM advisors persuaded more than human ones, and gained more from a good track record.
5. Self-rated domain expertise did not predict resistance to persuasion.
6. Arguing for the truth helped only when people were already confident in their position.

## What the feedback condition changed

The design isolates a variable real use rarely supplies. Participants answered thirty reasoning questions, discussed five with an advisor for up to five minutes each, then updated their answer. The first four conversations established the advisor's track record — always right, always wrong or half right — and the fifth measured reliance. In the feedback condition the correct answer was shown after every conversation, so the participant learned, item by item, whether the advisor had been right.

That clean signal is what produced calibration. In the feedback plus conversation condition, a historically helpful advisor persuaded 67% of the time and an unhelpful one 21%. Remove the feedback and the same track record produced 48% for the unhelpful advisor against 38% for the helpful one, a difference that was not significant. In the first experiment, where final items were the ones participants were least sure about, even a consistently unhelpful advisor persuaded 61% of the time. Reliance fell to chance only when participants were already confident and had been shown, repeatedly, that the model was wrong.

## Why fluent argument beats a correct one

Persuasion was unusually strong, and the advantage was not about being right. Across the fourth experiment, LLM advisors secured agreement 83% of the time against 65% for human advisors, and the gap was there on the first exchange, before any track record existed. A helpful LLM rose to 90% against 55% for a mixed one; the same comparison for human advisors was 51% against 45% and not significant. Confidence change reached 48 percentage points in the first two experiments, where comparable studies report 5 to 15; static hints produced 20 points and human persuaders 26.

The transcripts suggest why. LLM advisors used mathematical argument in 59% of conversations against 13% for humans, and when arguing a false position they made false statements in almost every conversation. Flattery was the strategy most associated with success. A model that argues fluently and confidently about something the student cannot check does not need to be right to be persuasive — the mechanism to expect when a student asks about material they are learning.

## What did not protect people

Self-rated expertise in physics, logic or probability predicted accuracy and confidence but did not predict resistance to persuasion in any domain or when pooled. Initial confidence did predict resistance, but it was also the condition under which a truth advantage appeared: people who were confidently correct were harder to move toward a false answer, while people with low confidence were about as easy to move either way.

The individual difference most associated with resistance was need for cognition. The implication for [[ai-literacy|AI literacy]] is that fluency is not evidence and confidence is not calibration. A student who asks the model to verify its own answer has [[cognitive-offloading|offloaded]] the check, replacing an independent signal with the same source — the no-feedback condition wearing a different hat. The [[automation-bias|automation bias]] literature predicts the same asymmetry, and this study measures it in conversation rather than a single recommendation.

## What this means for practice

- **Instructors:** Put a checkable ground truth where students can reach it after the AI's answer — an answer key, a worked solution, a dataset — instead of telling them to be skeptical.
- **Assessment designers:** Make the check part of the submission: require students to compare the model's reasoning with a worked solution and name where the two diverged.
- **Program designers:** Sequence AI use so early tasks carry fast, unambiguous feedback, and save open-ended tasks for when students have seen the model fail.
- **Faculty developers:** Run the check live in workshops, verifying a prompt against a source in front of participants, because self-rated expertise protected nobody here.
- **Researchers:** Treat "users will notice when the model is wrong" as an untested assumption; in these experiments they noticed only when something told them.

## Limitations

- The setting is not educational: adults answered science, logic and probability questions in a lab, so the results speak to judgment under AI advice rather than classroom learning.
- The first three experiments drew [[higher-ed|undergraduates]] from one institution; the fourth recruited US Prolific participants. All answered quiz items as paid volunteers, not coursework.
- Advisors were prompted to argue an assigned position and were framed neutrally as an "advisor", which differs from a student asking for help and may have raised baseline reliance.
- Persuasion is measured as answer and confidence change on quiz-like items, not decisions with consequences, and truth and helpfulness were not manipulated independently in the critical final trial of the earlier experiments.

## Citation

Jones, C. R., Wong, J., Cohen, A. S., Woolley, J., & Bergen, B. K. (2026). [*Do People Trust AI Assistants Even When They Are Consistently Wrong?*](https://arxiv.org/abs/2611.14833). arXiv:2611.14833.
