---
title: "Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting"
created: "2026-08-09T08:25:18-04:00"
updated: "2026-08-24T05:04:46-04:00"
type: article
tags: [automated-essay-scoring, prompt-engineering, llm, generative-ai, assessment, higher-ed, k-12, writing-education, ai-literacy]
sources: ['raw/papers/choi-anchor-aes-2025.md']
confidence: high
---
> **Synthesis:** Choi, Tate, Ritchie, Nixon & Warschauer (2025) investigate the most practical approach to LLM-based automated essay scoring — prompting — and find that providing anchor papers (example essays with scores) significantly improves LLM-human agreement, bringing it close to human-human scoring reliability. GPT-4o mini achieves comparable results to GPT-4o at substantially lower cost, making accessible, teacher-friendly AES feasible.
## Key Findings
1. **Anchor papers are the single most critical prompt component:** Including exemplar, pre-scored essays in prompts dramatically improved LLM-human agreement, raising GPT-4o's quadratic weighted kappa to 0.72 — close to the 0.79 human-human benchmark and classed as "substantial" agreement
2. **GPT-4o mini is a cost-efficient alternative:** It achieved scores within 0.1 QWK of GPT-4o across all prompt types at roughly 200× lower cost, removing a key adoption barrier for educators
3. **Source materials add little value:** Adding source texts to the prompt raised QWK by only 0.06, whereas adding anchor papers produced a large jump of 0.29 — the gains come from anchors, not context
4. **Even a single anchor per score level helps:** One anchor per score performed nearly as well as three, and anchoring the extreme scores (1 and 6) beat distributing anchors across intermediate scores
5. **Prompting beats fine-tuning for accessibility:** Structured prompting achieved strong holistic scoring without the computational resources and technical expertise that [[llm|fine-tuning]] demands of teachers
## Background: Why Prompting Matters for AES
Traditional [[automated-essay-scoring|Automated Essay Scoring (AES)]] systems depend on supervised learning over large, prompt-specific sets of human-scored essays. Earlier approaches — regression-based models, [[educational-nlp|Latent Semantic Analysis (LSA)]], and machine/deep learning architectures — capture form-related features like grammar and structure but require substantial graded corpora and struggle with deeper semantic meaning. [[llm|Large language models]] change this calculus: pre-trained on massive diverse data, they can evaluate essays holistically without extensive pre-scored examples, reducing the labor that once kept AES out of classrooms like history.
Most research on LLM-based AES, however, pursues resource-intensive optimization such as [[prompt-engineering|fine-tuning]], which demands computational skills and infrastructure that most [[teacher-role|teachers]] lack. Because prompting is the most practical and widely used way for educators to interact with LLMs, the authors focus on which prompt components — grading rubrics, source materials, and anchor papers — most improve holistic scoring accuracy.
## Methods
The study used 493 argumentative essays written by secondary school students in history classes (the Montgomery Bus Boycott and Delano Grape Strike corpora). Eighteen trained human raters scored essays on a holistic 1–6 rubric, reaching a human-human quadratic weighted kappa (QWK) of 0.79. Four prompt types were compared: Rubric Only, Rubric + Source, Rubric + Anchor, and Rubric + Source + Anchor. Anchor papers (18 pre-scored exemplar essays, three per score level) were the same ones used to calibrate human raters, making this a few-shot prompting setup. LLM-human agreement was measured with QWK, exact percentage agreement, and within-one-point agreement across three models — GPT-4o, GPT-4o mini, and GPT-4 Turbo — at two temperatures.
## Results: Anchor Papers Are the Key
Across every metric, Rubric + Source + Full Anchors performed best for GPT-4o (QWK 0.72), closely approaching human-human agreement (0.79). Adding source materials improved QWK by only 0.06, while adding full anchors boosted it by 0.29 — the improvement was driven primarily by anchors. More anchors generally helped, but a single anchor per score was nearly as effective (0.65) as the full set, and providing one anchor for every score (1–6) outperformed anchoring only a few selected scores. Notably, anchoring the two extreme scores (1 and 6, QWK 0.59) worked better than spreading anchors across intermediate scores (1, 3, 6, QWK 0.39), suggesting that anchoring both ends of the spectrum gives LLMs a clearer high-vs-low reference.
GPT-4o outperformed all models, but GPT-4o mini was nearly as accurate (consistently within 0.1 QWK) at roughly 200× lower cost, while GPT-4 Turbo was not viable (only 0.37 QWK with full anchors). A score-distribution analysis found the highest-performing prompt achieved far better exact agreement on the rare higher scores (4–6) — including ~23% agreement on score 6 versus 0% for the Rubric Only prompt — indicating that accurately distinguishing high-quality essays drives overall performance.
## Discussion
The strong performance of anchor-inclusive prompts aligns with prior work favoring few-shot over zero-shot learning: giving an LLM exemplars across score levels lets it calibrate its evaluations to match human raters. Source materials, by contrast, offer context but not direct scoring criteria, which is why they added so little. The authors caution that generalizability is limited — the corpus was single-discipline (history essays from secondary students) and the anchors came from the same or highly similar prompts — and note that more advanced prompting techniques such as chain-of-thought were not tested. They recommend including source materials when using GPT-4o (at no extra teacher effort) but omitting them for GPT-4o mini, where they slightly degraded performance.
## Implications
This study advances [[automated-essay-scoring|AES]] by shifting focus from resource-intensive model optimization to accessible prompting strategies. For teachers, the finding that GPT-4o mini with anchor papers approaches human reliability means practical AES is within reach — no expensive compute, no large pre-scored essay banks. The anchor paper approach connects to [[prompt-engineering]] best practices and suggests a pathway for [[writing-education]] where teachers can calibrate AI scoring to their own [[assessment|assessment standards]] rather than relying on black-box systems. Because anchor papers are already used to train human raters, the technique reuses existing classroom materials and aligns with [[human-in-the-loop-ai]] models of teacher oversight.
The work complements [[psyscore-essay-scoring-zpd-feedback]] research on [[psychometrically-aware-ai|psychometrically-aware scoring]] and [[icle-plus-plus-essay-scoring]] work on fine-grained trait scoring, showing that prompt design alone — particularly anchor inclusion — can achieve strong holistic scoring. For [[ai-literacy]], this empowers educators to understand and control AES rather than treating it as an opaque tool, and for [[equity-in-ai-education]] it lowers the cost barrier that has kept high-performing LLM scoring out of under-resourced schools. By demonstrating reliable performance at dramatically lower cost, the study supports more accessible, low-stakes [[formative-assessment|formative assessment]] in [[k-12]] and [[humanities-education|history writing]] classrooms.
## Connected Concepts
- [[k-12]]
- [[automated-essay-scoring]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
## Connected Articles
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[icle-plus-plus-essay-scoring]]
## Citation
Choi, J., Tate, T., Ritchie, D., Nixon, N., & Warschauer, M. (2025). [*Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting*](https://doi.org/10.35542/osf.io/cbhgz_v1). EdArXiv. doi:10.35542/osf.io/cbhgz_v1.
