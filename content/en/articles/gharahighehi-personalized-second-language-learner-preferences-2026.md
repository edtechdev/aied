---
title: "Personalizing Second Language Learning: Integrating AI with Learner Preference, Proficiency, and Engagement"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/gharahighehi-personalized-second-language-learner-preferences-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [language learning]
technology: [personalized-learning, knowledge-tracing, recommender-systems-and-learning-paths]
assessment: [item-response-theory]
audience: [researchers, instructional designers, educational technology developers]
level: [adult learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Gharahighehi and colleagues at KU Leuven model three learner variables at once for [[personalized-learning|personalizing]] Dutch as a second language in NedBox, a free online platform for newcomers in Flanders: [[recommender-systems-and-learning-paths|preference]] for learning materials, [[knowledge-tracing|proficiency]] estimated from exercise performance, and engagement as dropout risk. Against logs from 7,346 learners interacting with 764 learning materials, lightweight recommenders beat deep models for preference (EASE AUROC 0.955), DeepIRT delivers the strongest yet interpretable proficiency estimates (MCC 0.34), and a random survival forest augmented with proficiency estimates (Harrell's C-index 0.662) models engagement best. The authors assemble the three into a single NedBox personalization pipeline and release its source code, with only a synthetic example dataset because the user logs cannot be shared.

## Key Findings

1. **Simple recommenders beat deep models for preference.** The shallow EASE model led all seven recommender systems on every measure (AUROC 0.955, MAP 0.283, NDCG@3 0.205, NDCG@5 0.279), with IKNN second and equal on AUROC 0.955; deep and ensemble models such as MVAE (AUROC 0.949) and PentaForest (0.953) trailed on ranking metrics, and matrix factorization fared worst (IALS 0.719, UKNN 0.767).
2. **DeepIRT is the strongest interpretable proficiency model.** Across five knowledge tracing models, the deep ones dominated: DeepIRT reached AUROC 0.76, accuracy 0.81, F1 0.89, and the best MCC 0.34, while Bayesian KT (MCC 0.05) and explanatory IRT (0.07) lagged badly on exercise data that is around 80% imbalanced.
3. **DeepIRT agrees with classical IRT.** Pearson correlations between DeepIRT and explanatory IRT estimates were strong and statistically significant for both latent variables: difficulty 0.51 (last) and 0.66 (mean), ability 0.51 (last) and 0.56 (mean), all p < .001.
4. **Engagement models need proficiency features.** Random survival forest was the best survival method on its own (Harrell's C-index 0.559, Uno's 0.529, integrated AUROC 0.548), but adding DeepIRT and IRT ability and difficulty estimates lifted it to 0.662, 0.623, and 0.649 respectively.
5. **Proficiency re-ranking improves recommendations.** Re-ranking EASE's top-10 recommendations by predicted proficiency raised NDCG@3 by approximately 3%.
6. **Teachers endorse preference and proficiency, keep engagement in the background.** All six interviewed teachers supported preference- and proficiency-driven ranking, half accepted engagement signals only as a hidden background parameter, and all opposed reordering competencies or long textual explanations.

## The NedBox setting and the teachers' view

NedBox offers 764 learning materials — 547 videos and 217 articles — across ten themes such as Work, Health, and Life in Belgium. Each material pairs a short article or video with interactive exercises at four difficulty levels, from alpha (easiest) to three stars, targeting six language skills: listening, reading, vocabulary, grammar, writing, and speaking. In total the platform holds 6,208 publications — sequences of exercises sharing a difficulty level and skill — and 17,540 exercises, with productive skills far rarer than receptive ones because they are harder to design and assess online. The study draws on interaction logs from 7,346 learners: 49K learning-material interactions, 145K publication interactions, and 510K exercise interactions, at densities of 2.4%, 0.4%, and 1.1% of all possible interactions respectively. Because no user-level attributes could be collected under privacy constraints, the authors engineered 105 features from the logs alone — exercise counts, session-related features, and score aggregates.

To decide where personalization belongs, the authors interviewed six teachers (five female, one male), two each from three adult-education settings: ILT (academic adult education), CVO (adult education), and Ligo (basic education for adults with low literacy). All six valued homepage ranking by preference and proficiency-matched difficulty — leading learners to their "default star" — and all considered proficiency-based ordering of competencies useful. Only half believed engagement could inform homepage ranking, and only in the background, without users noticing it. Teachers unanimously rejected altering the predefined sequence of competencies and provision of lengthy personalized explanations, instead recommending concise text or simple visual cues such as arrows and color coding. They also suggested adapting the support language to proficiency, avoiding the target language for beginners with the option to switch anytime.

## Lightweight recommenders beat deep models

For preference prediction, seven recommender systems were compared on ranking and classification metrics. EASE, a linear model-based collaborative filtering method that learns an item-item matrix, was best across all measures, with IKNN consistently second and indistinguishable from EASE on AUROC. PentaForest (AUROC 0.953) and random forests (0.927) sat mid-table; the deep variational autoencoder MVAE reached AUROC 0.949 but fell behind on ranking metrics such as NDCG@3 (0.149), and the matrix factorization methods IALS (0.719) and UKNN (0.767) performed worst. The authors note that with far fewer items than users, item-neighbor methods such as EASE and IKNN also scale more effectively, and that interaction-only models avoid dependence on sensitive personal information. A random forest surrogate with SHAP analysis linked the EASE recommendations most strongly to the user's total number of sessions and to the BERTje text embeddings of the learning materials.

## DeepIRT for interpretable proficiency

Knowledge tracing treated the six language skills as knowledge concepts and exercise scores as binary observations, comparing Bayesian KT, explanatory IRT, DKT, AKT, and DeepIRT. Deep models consistently outperformed traditional approaches, and because the exercise data is around 80% imbalanced, the Matthews correlation coefficient best separates them: DeepIRT 0.34, AKT 0.32, DKT 0.26, against BKT 0.05 and IRT 0.07. DeepIRT owes its advantage in interpretability to an added IRT layer that produces estimates of user ability and item difficulty alongside predictions — estimates that correlate strongly with explanatory IRT parameters (difficulty 0.51 last and 0.66 mean; ability 0.51 last and 0.56 mean; all p < .001).

## Engagement as dropout risk, boosted by proficiency

Engagement was modeled as time-to-dropout on publications using survival analysis, which accommodates right-censored observations where learners complete a publication. Without augmentation, all three survival methods were weak — CoxNet Harrell's C-index 0.526, random survival forest 0.559, XGBoost 0.558 — which the authors attribute to a lack of sufficiently informative features. Adding DeepIRT and IRT ability and difficulty estimates as training features improved every method substantially: RSF rose to 0.662 Harrell's, 0.623 Uno's, and 0.649 integrated AUROC; XGBoost to 0.658, 0.596, and 0.657; CoxNet to 0.584, 0.562, and 0.577. SHAP analysis ranks the proficiency estimates among the most influential predictors of the augmented RSF. The resulting personalization pipeline works as follows: rank learning materials with EASE, re-rank the top-10 by DeepIRT proficiency, remove items with high predicted dropout risk, and set each user's entry difficulty to the level whose mean predicted probability of a correct answer is closest to 0.75.

## What this means for practice

- **Prefer simple collaborative filtering for content recommendation.** EASE (AUROC 0.955) outperformed deep models such as MVAE (0.949) and PentaForest (0.953) at a fraction of the complexity, suggesting lightweight interaction-only models are a strong privacy-preserving default on preference-heavy platforms.
- **Choose interpretable proficiency models when mastery decisions matter.** DeepIRT's MCC 0.34 beat Bayesian KT (0.05) and IRT (0.07) while still exposing ability and difficulty estimates that correlate with classical IRT (0.51 to 0.66).
- **Feed dropout models with proficiency signals.** Random survival forest's Harrell's C-index rose from 0.559 to 0.662 when DeepIRT and IRT estimates were added as features, so engagement models improve when they know about learner proficiency.
- **Respect teacher constraints when designing personalization.** All six interviewed teachers opposed reordering competencies and long explanations, favoring short text or simple visual cues such as arrows or color coding.
- **Set entry difficulty to a target probability rather than a default level.** The authors propose starting learners at the difficulty whose predicted mean probability of a correct answer is closest to 0.75, rather than always beginning at the easiest level.

## Limitations

- The NedBox user logs cannot be shared for privacy and ethical reasons, so reproducibility rests on a synthetic example dataset shipped with the source code; external researchers cannot rerun the exact experiments.
- The results are NedBox-specific: the relative ranking of the recommender systems in particular may differ in environments with other learner populations, content structures, or interaction patterns, and no comparable public L2 dataset exists for external validation.
- The evaluation is offline only; the authors note that online testing such as A/B testing would complement the results and help mitigate potential biases.
- Preference is modeled from click behavior, which is subject to position and presentation bias because learners are more likely to select prominently displayed items.
- Background and demographic variables could not be included under privacy constraints, and the analyses relied primarily on performance data, which capture outcomes rather than underlying learning processes.
- Even with proficiency augmentation the engagement models remain modest (RSF Harrell's C-index 0.662), which the authors attribute to a lack of sufficiently informative features.

## Citation

Gharahighehi, A., Ilídio, P., Said-Metwaly, S., Noreillie, A.-S., D'hondt, R., Tack, A., Nakano, F. K., Chen, C., Fastré, A., Van Kleunen, L., Van Nuffel, H., Depaepe, F., Van Den Noortgate, W., Vens, C., Desmet, P., & Cornillie, F. (2026). *Personalizing Second Language Learning: Integrating AI with Learner Preference, Proficiency, and Engagement*. *Journal of Educational Data Mining*, 18(1), 435-459.
