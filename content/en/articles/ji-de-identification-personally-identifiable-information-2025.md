---
title: "Enhancing the De-identification of Personally Identifiable Information in Educational Data"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/ji-de-identification-personally-identifiable-information-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, educational technology developers, learning analytics designers]
level: [higher ed]
technology: [generative-ai, llm, llm-training-and-fine-tuning]
methods: [benchmark]
ethics: [bias-mitigation, privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ji, Shen, Koedinger and Lin evaluate five PII-detection configurations — Microsoft Presidio, Azure AI Language, prompted and fine-tuned [[llm|GPT-4o-mini]], and a two-stage verifier — on two public corpora of student text: the CRAPII MOOC essays (22,688 samples) and the Teacher-Student Chatroom Corpus (260 sessions). The fine-tuned GPT-4o-mini model reaches the highest recall (0.9589) and F5 score (0.9377) at \$0.92 per 1M tokens, about one sixth of Azure AI Language's per-token price, and a verifier stage lifts precision to 0.8893 where false positives would corrupt the corpus. Where the two Microsoft baselines detect African and Asian names significantly less reliably, the fine-tuned model shows no significant group differences, and fine-tuning on just 10 transcripts generalizes to a new corpus at recall 0.9895. The work anchors [[privacy]] practice: accurate, category-labeled PII detection is the foundation for Hidden-in-Plain-Sight de-identification that replaces sensitive entities with synthetic surrogates instead of merely redacting them.

## Key Findings

1. **Fine-tuning outperformed every alternative on recall.** On the 13,613-file CRAPII test set, fine-tuned GPT-4o-mini achieved recall 0.9589 with precision 0.6042 (F1 0.7413, F5 0.9377); few-shot prompted GPT-4o-mini reached recall 0.7781 and precision 0.6593 (F1 0.7138).
2. **Baselines were recall-oriented but imprecise on student text.** Presidio with en_core_web_lg scored precision 0.1505 and recall 0.7103; its transformer variant en_core_web_trf scored precision 0.2092 and recall 0.8368; Azure AI Language scored precision 0.2462 and recall 0.9212 (F1 0.3885).
3. **A two-stage verifier bought precision at a recall cost.** Verifier Model I (without chain-of-thought) reached the highest precision of all seven configurations (0.8893) with recall 0.8023; Verifier Model II (with chain-of-thought) balanced the trade better at precision 0.7600 and recall 0.8648.
4. **The fine-tuned model was also the cost winner.** Azure AI Language cost \$63.27 (\$4.90 per 1M tokens) versus \$11.93 (\$0.92 per 1M) for fine-tuned GPT-4o-mini and \$5.22 (\$0.40 per 1M) for prompting; GPT-4o-mini costs 1/200 of GPT-4 per 1M input tokens and 1/100 per 1M output tokens.
5. **Cultural bias lived in the baselines, not in the fine-tuned model.** Presidio's name recall was 0.7647 for African and 0.8640 for Asian names versus 0.9024 for European and 0.9091 for American names, a gap Mann-Whitney U tests flagged as significant; fine-tuned GPT-4o-mini ranged from 0.9748 to 0.9840 across the four culture groups with no significant differences. Gender gaps were minimal in every model (for example 0.9646 male versus 0.9591 female for GPT-4o-mini).
6. **Ten transcripts transferred the model to a new corpus.** Fine-tuning on 10 of the 260 TSCC chat sessions raised the fine-tuned model to recall 0.9895 and precision 0.9708 (F1 0.9801, F5 0.9887).

## Why detection precision shapes de-identification quality

De-identification can be done two ways. Plain redaction replaces sensitive spans with a generic `[REDACTED]` token, while the Hidden-in-Plain-Sight (HIPS) method first tags each entity with its category (Name, Email, Address) and then substitutes synthetic but semantically equivalent surrogates, so the corpus keeps its structure and utility. Category-level detection is therefore a prerequisite, and low precision is not a harmless error: a false positive that swaps "The {Newton} method is used for optimization" into "The {David} method is used for optimization" breaks the mathematical context. The authors illustrate the same disruption with Presidio flagging Jesus Christ, Mary and Joseph in a story whose clue is "Nazareth", with Azure AI Language flagging Bill Gates, Steve Jobs, Zuckerberg and Elon Musk in an essay about startups, and with both tools turning sentence boundaries into personal URLs in a restaurant-menu passage.

Prior work documents why the precision ceiling matters. In Carrell et al.'s evaluation of the MITRE Identification Scrubber Toolkit, attackers detected only 26.8% of leaked PII on average, and 62.8% of the entities human attackers considered leaked were not actually PII. A Markov-chain surrogate strategy (BRATsynthetic) cuts document-level leakage from 94.2% to 57.7% under a 5% false-negative rate, but only if the detector is accurate first. Prompted LLMs have achieved high recall — Zambrano et al. (2025) report over 0.9 for GPT-4o, LLaMA 3.3 70B and LLaMA 3.1 8B — yet precision stayed low (0.579, 0.506 and 0.262 respectively), and an earlier educational NER system reported precision 0.24. The verifier models in this study attack exactly that problem.

## Building the fine-tuned detector

The CRAPII corpus contains 22,688 samples of student writing from a university MOOC, with 4,871 labeled PII entities across four studied categories: NAME STUDENT (4,394), URL PERSONAL (354), EMAIL (112) and PHONE NUM (15). The files were split into a Base Train Set (25%, 5,672 files), a Verifier Train Set (15%, 3,403 files) and a Test Set (60%, 13,613 files). Because LLMs struggle to report exact character positions, entities are labeled with special identifiers — @@@...### for names, &&&...\$\$\$ for personal URLs, QQQ...^^^ for emails and %%%...~~~ for phone numbers — and extracted afterwards with regular expressions. Prompting used three CRAPII examples as few-shot demonstrations; fine-tuning used the platform's recommended hyperparameters (epochs = 2, batch size = 1, learning rate multiplier = 1.8) with temperature = 0 and top p = 1 for both detectors and both verifiers. Each verifier was trained on (entity, context) pairs labeled T or F from the base detector's output; the chain-of-thought variant defaults to T if its reasoning does not align with the ground truth after six attempts, to avoid discarding true PII. By comparison, prompting GPT-4 for de-identification in prior work cost \$30.00 per 1M input tokens and \$60.00 per 1M output tokens.

## Fairness across cultural groups and gender

For [[bias-mitigation|bias]] analysis, the authors split each student name into first and last components with a rule-based parser, assigned gender from the first name, mapped the last name's country to a continental culture using ISO-3166 UN regional codes, and evaluated equality of opportunity by comparing true positive rates across groups with two-tailed Mann-Whitney U tests. Presidio showed the steepest gaps: recall of 0.7647 for African names and 0.8640 for Asian names, against 0.9024 for European and 0.9091 for American names, with significant differences for the African and American groups. Azure AI Language improved on raw numbers but kept an Africa gap (0.9244, significant at p < 0.05) and significant differences for the American and Asian groups. Fine-tuned GPT-4o-mini returned 0.9756 (European), 0.9790 (American), 0.9840 (Asian) and 0.9748 (African) with no significant differences, which the authors attribute to alignment efforts that reduce cultural and gender bias. Gender recall differences were small across all three models — Azure reached 0.9541 for female and 0.9494 for male names, GPT-4o-mini 0.9646 for male and 0.9591 for female names.

## Generalizing to teacher-student chat data

The TSCC dataset holds 260 chatroom sessions with 41.4K conversational turns and 362K word tokens, and it arrives pre-redacted: placeholders such as <STUDENT> and <TEACHER> were replaced with synthetic names sampled from a mapping of 10 gender-by-culture groups (26 transcripts each), while 13 non-name placeholder categories (for example AGE, DATE and INSTAGRAM ACCOUNT) were synthesized with GPT-4o. Evaluated on the remaining 250 transcripts, few-shot prompting reached the highest recall (0.9932) but a lower precision (0.7145); prompting the CRAPII fine-tuned model with no examples gave the highest precision (0.9984) at recall 0.7882. Fine-tuning GPT-4o-mini on just 10 selected transcripts balanced the two at precision 0.9836 and recall 0.9666, and further fine-tuning the CRAPII-trained model on the same 10 transcripts produced the best overall result — precision 0.9708, recall 0.9895, F1 0.9801, F5 0.9887 — with the recall only about 0.3% below few-shot prompting while precision improved by roughly 26%. Code and few-shot examples are released publicly on GitHub.

## What this means for practice

- **Corpus curators and institutions.** Screening large educational text corpora for PII is practical with a fine-tuned LLM: recall 0.9589 at \$0.92 per 1M tokens, about one sixth of Azure AI Language's \$4.90 per 1M tokens, with code and few-shot examples released publicly.
- **Privacy-engineering teams.** Pair a high-recall detector with a verifier stage when false positives would destroy corpus utility: verifier precision reaches 0.8893, accepting a recall trade to 0.8023 without chain-of-thought or 0.8648 with it, and choose which model to verify based on whether recall or precision is the binding constraint.
- **Data stewards and purchasers.** Audit any PII-detection vendor across name cultures before deploying redaction: the baselines here detected African names at recall 0.7647 and 0.9244, significantly below other groups, while the fine-tuned LLM ranged 0.9748 to 0.9840 with no significant gaps.
- **Teams adapting to a new domain.** When the target corpus differs from training data, fine-tuning on a minimal labeled subset pays: 10 transcripts lifted a CRAPII-trained model to recall 0.9895 and precision 0.9708 on teacher-student chat data, versus recall 0.7882 for zero-shot prompting of the same model.

## Limitations

- Only four PII categories were evaluated (names, emails, personal URLs, phone numbers); street addresses, student IDs, and indirect identifiers such as dates and ages remain open problems requiring new annotated datasets.
- Benchmarking was limited to Microsoft Presidio and Azure AI Language; alternatives such as Google's Cloud Data Loss Prevention API, Amazon Comprehend and Hugging Face open models were not compared.
- Generalizability rests on a single out-of-domain test, and the model still shows a domain-shift drop in recall from CRAPII student essays to TSCC conversations; different age groups (K-12 versus higher ed) and contexts are untested.
- The verifier models overcorrect, eliminating some true positives and risking PII leakage, so aggregate metrics alone are judged insufficient — the authors recommend subgroup breakdowns and unseen-dataset evaluation.
- The fine-tuned model is not perfect on ambiguous names: it flagged the fictional persona "Rick" in a student essay as PII and missed the author name "Maribel Navarrete" in a submitted document header.

## Citation

Ji, Z., Shen, Y., Koedinger, K. R., & Lin, J. (2025). Enhancing the De-identification of Personally Identifiable Information in Educational Data. *Journal of Educational Data Mining*, 17(2), 55-85.
