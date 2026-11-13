---
title: "CLST: Cold-Start Mitigation in Knowledge Tracing by Aligning a Generative Language Model as a Students' Knowledge Tracer"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/jung-clst-cold-start-knowledge-tracing-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education, science education]
level: [k 12]
audience: [researchers, educational technology developers, software developers]
technology: [knowledge-tracing, llm, llm-training-and-fine-tuning, intelligent-tutoring, personalized-learning]
methods: [benchmark, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Jung, Yoo, Yoon and Jang align a generative [[llm|large language model]] with [[knowledge-tracing]] by expressing the task itself as natural language and fine-tuning the model on problem-solving histories. Their CLST, trained on fewer than 100 students, matched or beat every ID-based baseline in cold-start scenarios across mathematics, social studies and science, and transferred across subjects when target-domain data was scarce. Fine-tuning proved essential, description-based exercise representation beat ID-based representation, and mastery estimates for related knowledge components moved together.

## Key Findings

1. **Best or tied-best in every cold-start condition.** CLST posted the top AUC on every dataset and training size, ahead of the second-best model by up to 24.52% with 8 training students, 14.66% with 16, 12.31% with 32 and 8.71% with 64.
2. **Gains were largest where data was scarcest.** Improvement over the best baseline reached 13.69% on NIPS34, 5.62% on Algebra05, 24.52% on Assist09, 11.82% on the Classting science data and 9.62% on the Classting social studies data.
3. **Natural language descriptions beat IDs.** Representing each exercise by its knowledge-component name outperformed representing it by KC ID in most cases, for example 0.655 versus 0.584 AUC on Algebra05 with 8 students and 0.711 versus 0.691 on Assist09 with 64.
4. **Fine-tuning is essential.** The model fine-tuned with 8 students' data improved AUC by at least 1.55% and up to 5.66% over the untuned model; with 64 students the gain was at least 5.33% and up to 11.94%, and output calibration improved markedly as fine-tuning data grew from 16 to 64 students.
5. **Cross-domain transfer works.** With a target-domain training set of 16 students or fewer, the model tuned on another domain performed better in all cases: on Assist09, CLST trained on full NIPS34 or Algebra05 data reached 0.690 and 0.706 AUC respectively.
6. **Related skills move together.** Learning trajectory and inter-skill influence analyses showed mastery estimates for conceptually related skills rising and falling together; for "Area Circle" the strongest influences were "Area Rectangle" and "Area Triangle".
7. **Fine-tuning carries a real energy bill.** Training CLST on Algebra05, about 21k samples, took roughly 6.8 hours and an estimated 1.7 kWh on an RTX A6000, while fine-tuning AKT on the same dataset took 50 seconds and 3.47 Wh — about 490 times more energy efficient.

## Knowledge tracing recast as language processing

CLST reframes [[knowledge-tracing|knowledge tracing]] as a natural language processing problem. Each student's history is converted to a text sequence in which the exercise is described by its knowledge-component name rather than a numeric ID, interactions are written as (exercise description, correctness) pairs joined by an arrow, and the binary label becomes a yes/no answer word. The authors call this knowledge tracing as language processing (KTLP) formatting, and it is what separates CLST from the earlier LLM-based tracer of Neshaei et al. (2024), which kept exercise IDs and ignored the order in which students solved problems. The base model is Mistral-7B-Instruct-v0.2, fine-tuned with low-rank adaptation (LoRA) so only a small set of added parameters is updated; the prediction is recovered from the logits of the yes and no answer words. Fine-tuning steps took about 4 seconds each at a batch size of 4, training peaked at roughly 19 GB of GPU memory and inference at about 16 GB.

The experiments use five datasets: the mathematics benchmarks NIPS34 (1,382,727 interactions from 4,918 students), Algebra05 (607,014 from 571 students) and Assist09 (282,071 from 3,644 students), plus Classting AI Learning data for social studies (4,215,373 interactions from 40,217 students) and science, the largest at 5,484,647 interactions from 45,211 students. Only students who responded to more than five exercises were kept, and the first 50 interactions per student were used. Cold-start conditions were simulated by training on 64, 32, 16 or 8 randomly selected students; mathematics held out 20% of students for testing while 1,000 random students formed the test set for social studies and science. Every method ran five times with different random seeds and reported average AUC.

## Cold-start and cross-domain results

The central result is that a generative LLM aligned through KTLP formatting works where ID-based models fail: performance held up with as few as 8 training students. The paper reports CLST outperforming every baseline model irrespective of training-set size, with the largest margins at the smallest sizes — up to 24.52% over the second-best model with 8 students on Assist09 — and attributes the advantage to natural language representations that let the model draw on knowledge acquired during pretraining rather than on interaction IDs.

Cross-domain experiments trained CLST on one mathematics dataset and tested it on another, an evaluation relevant to the system cold-start situation where an EdTech provider has no in-domain history. When the number of target-domain training samples was small, the source-trained model generally beat the target-trained one — and with 16 students or fewer it performed better in all cases. On Assist09, for example, CLST tuned on the full NIPS34 or Algebra05 datasets reached 0.690 and 0.706 AUC. The paper concludes that a tracer trained on an alternative source domain can perform satisfactorily during the initial stages of ITS development, answering RQ1 and RQ4 in the affirmative.

## What fine-tuning contributes

The ablation studies isolate two components. First, exercise representation: when the same LLM received KC names instead of KC IDs, performance improved in most cases (0.655 versus 0.584 AUC on Algebra05 with 8 students), because description-based representation lets the model exploit relationships between knowledge components; the authors answer RQ2 by recommending description-based representation. Second, fine-tuning itself: the untuned model showed poor output calibration, and calibration improved as the number of students in the KTLP dataset increased from 16 to 64, while AUC gains over the untuned model reached 11.94% with 64 students. The paper treats fine-tuning as essential.

The learning trajectory analysis answers RQ3: predicted mastery for a KC rises and falls with correct and incorrect responses, and related KCs follow similar trends — for example scatter plot and stem-and-leaf plot in mathematics, national economy and economic life and choices in social studies, and composition of earth materials and history of the earth in science. A quantitative inter-skill influence analysis found that skills sharing conceptual similarities exert strong mutual influence, evidence that CLST estimates knowledge states relationally rather than as isolated probabilities.

## What this means for practice

- **Educational technology developers.** Stand up a knowledge tracer before a platform has interaction history: CLST held the best or tied-best AUC with only 8 training students, and with a target-domain training set of 16 students or fewer a model tuned on another domain performed better in all cases, easing system cold-start for new tutoring services.
- **Developers with tight budgets.** Weigh the fine-tuning bill before choosing an LLM tracer: about 6.8 hours and 1.7 kWh on a single RTX A6000 for a 21k-sample run, versus 50 seconds and 3.47 Wh for AKT — about 490 times more energy efficient — so resource-constrained settings should treat the accuracy margin as a costed trade-off.
- **Researchers.** Report exercise representation, calibration and cost alongside AUC: description-based representation won in most cases, the untuned model was poorly calibrated until fine-tuned with data from 16 to 64 students, and the energy figures make the comparison interpretable.
- **Assessment and product teams.** Treat related-KC inference as supplementary: mastery estimates for related skills move together, but transfer-based inference can overestimate mastery, so adaptive sequencing should not push a student to a "percent of" task merely because they understand "proportion".

## Limitations

- Fine-tuning an LLM is expensive: about 6.8 hours, up to roughly 19 GB of peak GPU memory and an estimated 1.7 kWh for a single Algebra05 run, versus 50 seconds and 3.47 Wh for AKT — 490 times more energy efficient — so large-scale fine-tuning may be impractical where compute is constrained.
- The advantage narrows as data grows: on NIPS34, other models caught up with CLST when the number of training students exceeded 2,000, and performance on larger datasets may be matched by traditional models.
- Performance can deteriorate as sequence length increases, bounding the practical history the model can consume.
- As a large black-box LLM, CLST lacks interpretability: the authors note it is difficult to understand how predictions are made.
- Inter-skill transfer carries risk: understanding one concept does not always ensure correct performance on a related one, and overestimating mastery could lead adaptive systems to assign tasks beyond a student's actual ability, so inferred KC relationships should be used cautiously.

## Citation

Jung, H., Yoo, J., Yoon, Y., & Jang, Y. (2025). CLST: Cold-Start Mitigation in Knowledge Tracing by Aligning a Generative Language Model as a Students' Knowledge Tracer. *Journal of Educational Data Mining*, 17(2), 86-117.
