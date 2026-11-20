---
title: 教育測定
created: "2026-10-10T22:34:05-04:00"
updated: "2026-11-19T06:40:00-05:00"
type: concept
foundations: [ai-literacy]
technology: [educational-nlp, knowledge-tracing, learning-analytics]
assessment: [assessment-validity, item-response-theory, psychometrically-aware-ai]
connected_faqs: [ai-literacy-evidence, evaluating-ai-interventions-methods]
confidence: medium
translation_of: concepts/educational-measurement
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
connected_concepts: [interpreting-and-applying-aied-research, item-response-theory, assessment-validity, psychometrically-aware-ai, knowledge-tracing, student-modeling, educational-nlp, learning-analytics, ai-ed-evaluation, ai-assisted-educational-research, automated-assessment, limitations-in-aied-research, ai-literacy, technology-acceptance-model, self-efficacy, benchmark, self-report-measures, motivation, student-engagement]
connected_articles: [guo-ai-literacy-developmental-paces-2026, human-in-the-loop-ai-scoring-national-assessment-2026, semantic-variability-llm-conversation-assessment-2026, causal-modeling-competency-assessment-2026, assessment-latent-structure-human-llm-2026, jin-glat-genai-literacy-assessment, icap-cognitive-engagement-llm-agents, roe-assessment-twins-2026, ai-literacy-heptagon-2026, ai-literacy-assessment-misalignment, teacher-education-ai-literacy-sdt-2026, acceptance-ai-english-tools-2026, llm-difficulty-calibration-programming-exams-2026, llm-item-difficulty-prediction, multimodal-item-parameter-estimation-2026, ai-scoring-language-bias-physics, ai-writes-code-student-writes-model-2026, assessing-student-drive-framework-2025, xiong-ai-educational-measurement-review-2026, questionnaire-teachers-genai-uses-validation-2026, personalized-neural-cognitive-architecture-search-2026, razavi-powers-item-difficulty-llm-2026, cvengros-grading-handwritten-chemistry-ai-2026, age-tiered-ai-literacy-guidebooks-2026, proiqa-math-item-quality-assessment-2026, competent-generative-ai-use-measures-review-2026, bayesian-consensus-irt-item-banks-2026, el-salvador-ai-tutoring-selection-claim-2026, know-when-to-trust-ai-scoring-reliability-2026, ai-literacy-self-assessment-questionnaire-primary-2025, assessing-teachers-ai-literacy-measurement-tools-2026, mental-health-literacy-students-llms-2026, studentbench-ai-human-tutoring-gre-2026, student-llm-use-ai-question-difficulty-data-science-2026, edubehaviors-auditable-coding-educational-dialogues-2026, synthetic-educational-data-structural-fidelity-2026, ai-empathy-scale-psychometric-evaluation-2026, genai-srl-l2-writing-scale-2026, bloom-taxonomy-llm-item-classification-2026, llm-benchmark-secondary-science-topics-2026, worden-foundationalassist-knowledge-tracing-dataset-2026, same-construct-same-conclusion-self-report-vs-performance-2026, chang-ai-cognitive-offloading-scale-2026, tassilova-ai-anxiety-scale-russian-2026]
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **教育測定**——学習とその構成概念を定量化し検証するための心理測定理論と方法——は、ナレッジベースの[[item-response-theory|項目応答理論]]、[[knowledge-tracing|知識追跡]]、[[assessment-validity|評価の妥当性]]の各ページに通底しています。[[llm]]の時代は、測定に古典的な心理測定と新たな AI 生成の応答列とを両立させることを強いています。自動採点、AI による予測困難度、[[multimodal|マルチモーダル]]な痕跡は、信頼性と妥当性を保つために確立された測定原理に対して検証される必要があります。

## 検討すべき問い

- LLM がある試験問題を易しいと予測したが、実証的な試験データは学生が難しいと感じていると示しています。あなたはどちらを[[trust|信頼]]しますか。そして、どのようなことがあれば機械の推定を信頼する気になるでしょうか。
- 教育測定とは、学習の観察結果を、擁護可能な[[quantitative-research|量的]]な主張へと転換することです。AI がエッセイを採点したり応答に得点をつけたりするとき、「得点」は自動的に測定となるのでしょうか——それとも、まず何かが検証されなければならないのでしょうか。それは何でしょうか。
- ある[[research-methods-aied|研究]]は、評価尺度が人間にとって測るものと LLM にとって測るものが同じではないかもしれない——潜在構造が分岐している——ことを示唆しています。構成概念が人間と AI の間で本当に異なるのであれば、AI が生成した成績や困難度評価についてそれは何を意味するでしょうか。
- AI は、かつてない規模で採点し、項目を生成し、困難度を予測できます。「より多くの測定」は「より良い測定」と同じでしょうか。得点を信頼でき有効なものにするのは何でしょうか。そして、その基準は、測定が生成モデルによって行われる場合にも保てるでしょうか。
- ベンチマークと AI 生成の得点は、今や至る所にあります。AI に基づく評価を、単なる数字ではなく、学習者の実際の理解についての証拠として扱う前に、何を見る必要があるでしょうか。

## はじめに

教育測定とは、学習に関する観察——応答、行動、得点——を、擁護可能な量的主張へと転換する学問です。それは構成概念の定義、項目・テストの設計、スケーリング、信頼性、妥当性を含みます。[[ai-education|教育における AI]]では、測定の問いは至る所にあります。[[benchmark|ベンチマークの得点]]は、私たちが考えるものを測っているでしょうか。AI が生成した成績は信頼でき妥当でしょうか。AI が予測した項目困難度は、実証的に推定されたものと一致するでしょうか。

## 研究における教育測定の現れ方

- **AI によるこの分野の 10 年にわたる再編：** [[xiong-ai-educational-measurement-review-2026|Xiong and Li (2026)]]は、効率性・拡張・変容という枠組みを通じて、三つの時代（[[formative-assessment|形成的]] 2015–2018年、拡張 2019–2022年、生成的 2023年–現在）にわたる AI の影響を図示し、採点と[[automated-question-generation|項目生成]]における AI、心理測定モデリング、評価の革新と過程データ、[[bias-mitigation|公平性]]・倫理・公正性に及びます。彼らは、測定理論と AI の方法とを統合する新しいパラダイムと、人間–[[student-ai-interaction|AI の相互作用]]の文脈における構成概念の再概念化とを主張します——それは、[[assessment-latent-structure-human-llm-2026|潜在構造の比較]]が実証的に探究するのと同じ境界です。
- **AI による予測困難度と較正：** [[llm-difficulty-calibration-programming-exams-2026|LLM による困難度の較正]]と[[llm-item-difficulty-prediction|項目困難度予測]]は、LLM を使って項目困難度を推定しますが、それは心理測定的な推定に対して検証される必要があります（[[item-response-theory|項目応答理論]]参照）。[[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]]は、この前提の大規模な K–5 の検証を加えています。Rasch IRT モデルで較正された 5,170 の算数と読解の問題について、GPT-4o のゼロショット困難度評価は真の困難度と中程度から強く相関しましたが（算数 r = 0.83、読解 r = 0.81）、学年間で一様ではなく、K と 1 年生では学年平均のダミー回帰子を上回りませんでした。特徴量に基づく手法——LLM が抽出した認知的・言語的特徴量を木ベースのモデルに入力する手法——は r = 0.87 に達する相関を得て、学年と言語数の上位の予測変数を得ました。この研究は、測定の入力としての AI による予測困難度の可能性と限界の両方を示し、テスト専門家のための実用的な 7 段階のワークフローを提供します。
- **識別力なき困難度。** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Wordenら（2026）]]は、2,548 の数学項目について IRT の正解基準に対して 4 つの最先端モデルを評価します。相対的な困難度では 68.6% に達しますが、識別力の判断では偶然水準を下回り、両者を混同しているように見えます。また、正答では 85.4% の割合で正しさを予測する一方、誤答ではわずか 12.6% でした。

- **分類ラベルは項目の挙動を予測しない。** 265 問の数学項目において、意図されたブルーム階層は困難度の分散の 5% 未満（ε² = .043）しか説明せず、識別力はまったく説明しませんでした（クラスカル・ウォリス H = 0.54, p = .77）。一方、[[llm|LLM]] による分類は専門家のコーダーと「まずまず」の一致に留まり（Cohen's κ = .22）、項目を「応用・分析」の帯域へと引き寄せました（[[bloom-taxonomy-llm-item-classification-2026|Altaweel & Moussa (2026)]]）。

- **生成された困難度ラベルが困難度を測らない場合。** 311 問の実運用された LLM 生成問題の構成概念妥当性監査では、生成された困難度ラベルは、同時生成されたブルーム階層との相関は ρ=0.90 でしたが、実証的な困難度（古典的テスト理論の 1−p 指標）との相関は ρ=0.06 にとどまり、選択肢の長さは逆向きに動きました（ρ=−0.18）——これは「ラベルは表層形」という結果であり、上記の AI による予測困難度に関する楽観的な解釈を制限します（[[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]）。
- **合成ベンチマークの測定の質は、その生成パイプラインに依拠する。** 3 人の LLM 審判団で構築され、項目の生成中に[[human-in-the-loop-ai|人間の監督]]がなかった集合は、項目水準の質が弱いことを示しました。項目が完全に合成的であるため、著者らは、スコアを測定として読む前に人間が整備した項目との比較を求めています（[[llm-benchmark-secondary-science-topics-2026|Schroederら（2026）]]）。
- **生成項目は、文言ではなく解法経路で判断せよ。** 各項目の検証済み推論木を符号化することで、概念評価では 7.5%、困難度推定では 6.3%、能力評価では 19.5% の性能向上が得られました。ここでゼロショットのベースラインは、テンプレートに沿った項目を「推論」と、幾何学的な項目を「知っている」と誤って分類しました（[[proiqa-math-item-quality-assessment-2026|Tong et al. (2026)]]）。
- **AI [[assessment|評価]]における心理測定的自覚：** [[psychometrically-aware-ai|心理測定的に自覚した AI]]とは、AI に基づく評価が測定理論と整合している——較正され、不確実性を意識し、妥当性を保つ——という基準です（[[automated-assessment|確信度を意識する AI 評価]]参照）。
- **習熟ラベルは構成されたものであり、観測されたものではない。** 診断に正解の根拠が必要な場合、[[personalized-neural-cognitive-architecture-search-2026|Jia and Dong (2026)]]は、行動の痕跡を直接変換するのではなく、妥当性管理の手順——[[curriculum-design|カリキュラム]]の概念グラフ、教員が査読した知識ポイントの対応付け、収束的な評価証拠——を通じてそれを構築し、彼らの診断は教育心理学者と Cohen のカッパ 0.78 で一致し、IRT では 0.65 でした。

- **同一のトランスクリプトに対する評価者間の答え。** [[ober-persistence-pedagogical-agent-dialogues-2026|Ober et al. (2026)]]は、同じ対話のターンを 8 つの LLM 構成と 2 人の人間の符号化者で再符号化し、自己一貫性（Cohen's kappa 0.865-0.890）が人間と LLM の一致（kappa 0.000-0.419）をはるかに上回ることを見出しました。粘り強さは有病率の逆説が働く様子を示しました。一致率は 78.23%-92.41% で kappa は 0.043-0.426 であり、支配的なコードなしのカテゴリでの高い一致が、稀な陽性事例での不一致を覆い隠していました。

- **自動採点と妥当性：** [[ai-scoring-language-bias-physics|AI 採点と言語バイアス]]と[[multimodal-item-parameter-estimation-2026|マルチモーダル項目パラメータ推定]]は、自動採点とマルチモーダルデータが測定の質にどう影響するかを検討します。
- **妥当性の枠組み：** [[assessment-validity|評価の妥当性]]と[[educational-nlp|教育 NLP]]は、LLM に基づく測定を検証するための基準と道具を提供します。
- **潜在構造の比較：** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]]は、評価尺度が人間と LLM とで*同じ因子構造*を示すかどうかを検証することで、教育測定を LLM の設定へと拡張します。EFA、因子一致、再標本化を用いて、彼らは LLM と人間の潜在構造が[[chemistry-education|化学]]と量的推論の尺度にわたって体系的に分岐することを示し、測られている構成概念が集団間で異なることを含意します——人間の妥当性証拠が AI に移ると想定される前に必要な検証です。
- **測定可能な誤差を持つ評価者としての AI：** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]は、AI が付与した得点を、一般化可能性理論と Kane の論証に基づく妥当性のもとで（項目、実行、課題という）複数の誤差源を持つ誤りやすい観測として扱います。296 人の学生による手書きの一般化学の試験の信頼性分析では、*合計*得点は 5 回の AI 実行にわたって高い安定性を示し（ICC(A,1) = 0.967、Kendall の W = 0.959、60 点中の 95% 反復性係数 5.33）、項目レベルの安定性は低くなりました（ICC(A,1) = 0.836）——非系统的誤差は合計する際に部分的に相殺されるためです（合計得点の一致を R² = 0.91 まで押し上げる Spearman–Brown の集約効果）。一方、小さな正の切片と 1 未満の傾きは、「臆病な採点者」の得点圧縮バイアスを露わにしました。これは実行平均と集約を測定上の設計決定として位置づけ、自動化された測度が信頼される前に妥当性の保護として、[[item-response-theory|IRT]]のリスクに較正された確信度フィルタを動機づけます。
- **モデルのバージョンは測定条件である。** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]]は、4 つの LLM にわたって、モデル内の応答の類似性（0.715–0.795）がモデル間の類似性（0.443–0.604）を一貫して上回ることを見出しました。したがって、あるデプロイメントに対して確立された採点の論証は、自動的にその後継へと移るわけではありません。

- **零結果は、それが有界でない限り同等性の証拠ではない。** StudentBench は、[[intelligent-tutoring|AI 個別指導]]が専門家の人間の個別指導と一致するかどうかを、差の検定ではなく ±0.25 のプール標準偏差に対する二つの片側検定で検証し、−0.58 パーセントポイントの調整済み差（90% CI [−2.18, 1.03]）を報告しました——これは検出力不足の零結果を同等性の主張へと変える選択です（[[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]）。

- **履歴全体ではなく、新しいデータに応じてスケールする較正：** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]]は、AI による項目生成の運用上の帰結——従来のものより大きく、疎で、より頻繁に更新される項目バンク——に立ち向かいます。そこでは更新ごとに蓄積されたすべての応答データを再当てはめすることはコストがかかり、利用可能なメモリを超えることがあります。彼らの*合意較正*は、独立に較正された四半期ごとの期間を、各期間の事後分布サンプルを共通の測度へと対応づける 1 サンプルごとの頑健な Haebara リンクによって（リンクの不確実性が固定の変換として扱われるのではなく伝播するように）結合し、次に各期間の*推定された階層的な*事前分布が差し引かれたガウス事後分布の積として集約し、合意の事前分布を復活させます。4 期間にわたる運用上の Duolingo English Test データでは、集約値は事後平均（困難度は r = .998、対数識別力は .991）と標準偏差（r = .970 および .920）の両方で、プールされた単一実行のベンチマークと一致し、曝露三分位にわたる合意/プール SD 比で 0.91–0.98 の残余の過小分散が見られました——それは最も疎な項目三分位に集中しており、そこで事前分布の過大な勘定が最も強く作用します。測定上の教訓は二つです。推定された事前分布は、並列ベイズ計算の標準的な部分事前分布の手法では扱えず、事後*分散*——適応的選択と採点が消費する不確実性——は、事後平均と同程度に修正の標的となります。
- **公表された 2 つの数字から系の分散を同定する：** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales et al. (2026)]]は、[[learning-gains|達成度]]分布の標準偏差が、公表された要約統計量——平均と固定の熟達カット得点以上の学生の割合——だけから復元できることを示します。分布の仮定のもとで σ = (c − μ) / z(1 − p) となるためです。PISA 2025 エルサルバドル（[[math-education|数学]]の平均 346、420.07 のレベル 2 カット以上の割合 12.28%）に適用すると、含意される σ は 63.8（読解 76.8、科学 63.8）となり、尺度の下限に押しつけられた分布として予想されるとおり、国際的な基準値 100 を大きく下回ります。3 つの推定値は独立した数字の組から得られ、互いに約 13 点の範囲内に収まり、これは緩やかな内部整合性の検証です。レベル 2 の割合はすべての PISA システムで報告され、SDG 4.1.1 指標を支えているため、この同定にミクロデータは不要であり、同じ論文は効果量における分母の問題を、1 つの数学の格差を 3 つの方法——129 点、1.29 国際標準偏差、あるいはエルサルバドル分布自身の 2.02 標準偏差——で報告することによって実証します。その議論は、標準化された効果量をそれ自身の標本の分散で割ったものは、研究間で正当に比較できないというものです。

## ナレッジベースの測定尺度

教育測定の中心的な機能は、構成概念を操作化する具体的な尺度、テスト、コーディング・スキームである**測定ツール**の開発、妥当性検証、使用である。文献には教育におけるAIの構成概念に関する幅広い測定ツールが記録されており、これらは何を測定するか、またどのような測定アプローチをとるかによって分類できる。

### AI / GenAI リテラシーの測定ツール

AIリテラシーは、測定ツールの蓄積が最も豊富な構成概念である。大きく二つの系統が存在する。**遂行ベースのテスト**(客観的で、自己報告バイアスの影響を受けにくい)と**自己報告尺度**(主観的で、本人が知覚する有能感を捉える)である。後者の系統のトレードオフは[[self-report-measures|自己報告測定]]の主題である。自己報告は態度や知覚を低コストで捉えられるが、能力や行動に関する主張を支えることはできず、対応する自己報告測定と遂行測定を比較すると40%の過大評価の隔たりが生じる。

- **遂行ベース(客観的)測定。** 代表例は[[jin-glat-genai-literacy-assessment|GLAT(Generative AI Literacy Assessment Test)]]であり、4つの次元(Know & Understand、Use & Apply、Evaluate & Create、[[ethics|倫理]])にわたる25概念のブループリントに基づく20項目の多肢選択式ツールで、355名の学生を対象にCTT+2PL IRTで妥当性が検証された(RMSEA = 0.03、CFI = 0.97、α = 0.80、ω = 0.81)。重要なのは、自己報告が予測できなかったAI支援下の課題遂行をGLATの得点が予測した点であり、これはAIリテラシーについて**遂行ベースの測定が自己報告を上回る**ことの証拠である。関連研究である[[ai-literacy-assessment-misalignment|Zhang et al., 2026]]は自己報告と遂行ベースのAIリテラシーの隔たりを定量化し(教師は約40%過大評価する)、[[tracing-genai-literacy-interaction-patterns|Chen et al. (2026)]]は報告された利用に依拠せず、実際の学生–AI相互作用パターンを追跡する。
- **教師が何を知っているかだけでなく、何をするかを測定する。** 486名の教師を対象とした妥当性検証により、教師のGenAIの教育利用に関する6次元のツール——管理、教材作成、評価、エンパワーメント、多様性、動機づけ——が得られ、利用が多次元的であることが確認された。ただし自己報告は授業実践に関する主張を支えることはできない([[questionnaire-teachers-genai-uses-validation-2026|Pérez-Montesdeoca et al. (2026)]])。
- **自己報告尺度。** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]は、3つの領域(AI Concepts、Application and Technical Skills、AI Digital Citizenship)と段階的に足場化された4つのレベルでAIリテラシーを操作化する。[[ai-literacy-heptagon-2026|AIリテラシー・ヘプタゴン]]は7つの次元(技術、応用、[[critical-thinking|批判的思考]]、倫理、社会的影響、統合、法/[[regulation|規制]])を、ブルームに沿った4つの習熟レベルで構造化する。[[genai-skill-bypass-literacy|Oliveira et al. (2026)]]は学生と教職員で分岐するAIリテラシーの経路を描き出し、[[panciroli-ai-literacy-episodes-situated-learning|Panciroli et al., 2023]]はリテラシー評価を[[situated-learning|状況的学習]]のエピソードに根づかせる。より年少の学習者向けのツール開発も進んでいる。[[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan and Srikoon (2025)]]のAIリテラシー[[self-assessment|自己評価]]質問紙(AIL-SAQ)は、小学4〜6年生を対象とする15項目の自己報告尺度で、Learning About AI、Learning About How AI Works、Learning for Life with AIを軸に構成されている。この尺度は335名の学生に対する探索的因子分析と、さらに579名に対する確認的因子分析によって妥当性が検証され、全体のクロンバックのαは.934であった。
- **[[discipline-specific-aied|領域固有]]のAIリテラシー。** [[teacher-education-ai-literacy-sdt-2026|Chiu et al. (2026)]]は[[self-determination-theory|自己決定理論]]の枠組み内で[[teacher-role|教師]]のAIリテラシー測定を開発し(教師382名、因子分析により検証)、[[conceptualizing-preservice-teachers-ai-readiness-2026|Reyes-Rojas et al. (2026)]]はインテリジェント[[tpack|TPACK]]を通じて教職課程学生の[[teacher-ai-competency|教師のAIレディネス]]を測定し、[[ai-literacy-career-adaptability-business-2026|Testa et al. (2026)]]は[[business-education|ビジネス教育]]における学生のAIレディネスと[[career-development-and-readiness|キャリア適応力]]を評価し、[[llm-critical-thinking-teamwork-review|Martínez-Peláez et al. (2025)]]はLLMに支援された批判的思考とチームワークの成果に関する測定ツールをレビューする。教育者の測定へと拡張すると、Teachers' AI Literacy Scale(TAILS)はED-AIフレームワークの6次元を操作化し、とりわけ[[teacher-education|言語教師教育]]におけるAIリテラシーを測定する(因子分析により検証済み)。これにより、学生や一般利用者を対象としてきた評価の空白が埋められる。

### 態度・受容・動機づけの測定ツール

- **技術受容。** TAM/UTAUTに基づくツールは、AIの知覚された有用性、使いやすさ、利用に対する行動意図を測定する。[[technology-acceptance-model|技術受容モデル]]、およびその応用である[[acceptance-ai-english-tools-2026|Wu et al. (2026)]](AI支援英語学習ツール、専攻分野/習熟度グループを横断した心理測定的妥当性検証)と[[tian-genai-learning-adoption-pathways-2026|GenAI導入経路]]を参照。
- **自己効力感と動機づけ。** [[self-efficacy|自己効力感]]の測定ツールや動機づけ尺度(例:[[teacher-education-ai-literacy-sdt-2026|Chiu et al. (2026)]]におけるSDTに基づく[[agency|自律性]]/有能感/関係性の測定)は、AI利用の動機的な先行要因と帰結を捉える。これらは[[student-engagement|学習エンゲージメント]]や[[prior-knowledge|既有知識]]の測定につながる。
- **プロジェクト型学習に対する知覚。** Zhu and Kong (2026)は、AIリテラシーの授業で[[problem-solving|問題解決]]にAIを用いる際の学生のPBL知覚を測定する、文脈に根ざしたAI[[project-based-learning|プロジェクト型学習]]尺度(AI-PBLS)を開発し妥当性を検証した([[k-12|中等教育]]および大学生1,027名に対するEFAとCFA、完全回答446名)。さらにそのSEMの応用は、エンパワーメントと倫理的意識がPBLから満足度への関係をどのように媒介するかを示しており、AI活用における知覚されたPBL経験を評価するための堅牢なツールとなっている。

### 評価の質と妥当性に関する測定ツール

- **自動採点とルーブリックのツール。** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]]は評価ルーブリックを生成し、[[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]]はElaborated-[[feedback|フィードバック]]基準に照らしてAI採点の質を評価し、[[ai-assessment-scale-reform|Perkins et al., 2026]]はAIが従来の評価尺度をどのように攪乱するかを扱う。
- **妥当性を強化する設計。** [[roe-assessment-twins-2026|アセスメント・ツイン]]は、[[generative-ai|GenAI]]の影響を受けやすい課題と、同じ成果を評価する影響を受けにくい同等課題を対にし、Messickの6つの妥当性証拠の系列にわたって脅威を対応づける。
- **支援の度合いによる成果空間の分割。** ある測定プログラムは、**モデル著者性(model authorship)**——成果物の領域レベルの内容を、システムではなく学習者がどの程度自ら生み出しているか——を4ファセット・4水準の構成概念として定義し、監査した24本の研究のうちほぼすべてがAIを利用可能な状態で遂行を測定しており、AIを撤去した後に測定した研究は皆無であったと報告する([[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]])。
- **談話とエンゲージメントのコーディング。** [[icap-cognitive-engagement-llm-agents|Do et al., 2026]]は[[icap-framework|ICAP]]フレームワークを7段階の認知的エンゲージメント・コーディング・スキームへ拡張し、人手のアノテーション(κ = 0.906–0.998)とLLMによるラベリング(κ = 0.541–0.609)を比較した。これは自動コーディングが依然として訓練を受けた人間に及ばないことを示す測定ツール研究である。自動コーディングは[[prompt-engineering|文脈認識型プロンプティング]]によっても進展しており、これは文脈依存関係をモデル化し、認知的能力と社会的能力を融合して、プロセスデータから[[collaborative-learning|協働的問題解決]]スキルを強力なベースラインを上回る性能でコーディングする。これにより手作業コーディングの労働集約性に対処しつつ、大規模かつリアルタイムの評価が可能になる。
- **スキルの抽出。** [[principal-trait-analysis-human-ai-skills-2026|McNichols et al. (2026)]]はprincipal-trait分析によって人間–AI協働における「スキル」を導出する——協働コンピテンシーのデータ駆動型測定である。

### 測定アプローチが重要である

証拠は、構成概念を**どのように**測定するかが結論を変えることを繰り返し示している。自己報告のAIリテラシーは遂行ベースの測定と大きく乖離し([[ai-literacy-assessment-misalignment|Zhang et al., 2026]])、エンゲージメントのLLMアノテーションは訓練を受けた人間のコーディングと乖離し([[icap-cognitive-engagement-llm-agents|Do et al., 2026]])、潜在構造は人間とLLMの間で異なる([[assessment-latent-structure-human-llm-2026|Strugatski et al., 2026]])。したがって、厳密なツールの妥当性検証——信頼性、構造的妥当性、外部/予測的妥当性——は形式ではなく、信頼できる教育におけるAIの証拠の基盤であり、[[assessment-validity|評価の妥当性]]や[[psychometrically-aware-ai|心理測定に配慮したAI]]につながる。最近の教材レベルの研究は、単純な受容の主張の背後にどれほどの検証作業があるかを示している。[[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]]は、年齢層別に作られた2冊のAIリテラシー・ガイドブックについて、半分ずつに分ける設計(開発サンプルでEFA、残りの半分でCFA)を用いた。彼らはKMO = .820、説明された分散67.3%、学生サンプルでの許容可能な適合度(CFI = .943、RMSEA = .059、SRMR = .059)、.84〜.90の合成信頼性、版をまたいだ測定不変性を報告した。さらに、ツールに無理が生じる箇所も記録している。最大.950に達するHTMT値と、1に等しいかどうかを検定しなければならなかった、遊び心と意図の相関に制約を課した推定である。項目機能差に関する補足的な確認は、この種の主張に求められる誠実さの模範である。不変性は保持されたが、年少の学生に見られた変動の小さい回答パターンのため、それらの回答者を除外するとある群間差は弱まり、論文はその事実を主要な結果の代わりにではなく、主要な結果と併せて報告している。

[[assessing-student-drive-framework-2025|Oliveira et al. (2025)]]は、新しいプロセス測定の妥当性検証の手順を示している。学生のGenAI相互作用ログを35の下位カテゴリからなる分類体系に照らして採点したところ、評価者間一致は中程度にとどまった(Cohen's κ = 0.44)が、エッセイの得点とr = 0.54で相関し、新しい測定に収束的妥当性の裏づけを与えた。
- **一致係数はサンプルの性質であり、得点は共同の産物である。** 60件のマーケティング投稿を対象とした自動採点の妥当性検証では、絶対一致のICC(2,1)がLLMで.435、ルール+LLMのハイブリッドで.266、決定論的ルールで.091と報告され、不確実性は2,000回の執筆者クラスタ・ブートストラップ標本から推定され、MAEは6.28〜17.22点であった。研究者が作成したアンカーを追加すると評価者間一致は.338から.902へ上昇し、これらの推定が参照セットに強く依存することが示された([[automated-scoring-marketing-posts-agreement-2026|Li, 2026]])。[[physics-education|物理]]ベンチマークの専門家による再採点監査は、ツールレベルで補完的な点を示す。監査された不合格判定の95.20%はモデルの失敗ではなくベンチマークまたは採点者の誤りであったため、測定された得点は項目バンク、ルーブリック、採点者を合わせた性質として報告されなければならない([[frontier-models-physics-benchmark-audit-2026|Ansari et al., 2026]])。

**信頼性はモデル自体から部分的に回復できる。** [[know-when-to-trust-ai-scoring-reliability-2026|Organisciak and Acar (2026)]]は、Alternative Uses Testに対する20,000件を超える回答を用いて、LLMによる採点への3つの低コストな改良を評価した。モデル自身のトークンレベルの確信度を読み取ること、単一の最良推測ではなく上位n個の予測得点の確率加重平均をとること、そして複数モデルのアンサンブルである。いずれも人間の得点との一致を改善し(最良の構成では相関がr = 0.781から0.823へ上昇、RMSEが0.599から0.498へ低下)、その診断は単一パス採点の特定の失敗を特定している。モデルが表明した確信度はその正しさと負の関係にあった(β = −0.602)。これはモデルの結果ではなく測定アプローチの結果であり——同じモデルでも採点の仕方を変えれば、より信頼性の高いツールになる——マーケティング投稿研究の一致に関する証拠と並ぶものである。

2026年に行われた33の教師AIリテラシー測定ツールの評価は、ツール開発が成熟している領域としていない領域を示している。[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]]は、COSMINとTerwee et al. (2007)を改変した判定マトリクスに基づいてツールを格付けし、内的整合性が最も強い領域(33件中28件がグレードA、84.8%)、公平性が最も弱い領域であることを見いだした。測定不変性または項目機能差の証拠を報告したのはわずか5件(15.2%)であった。構造的妥当性は強く、CFA、PLS-SEM、IRTモデリングによって24件(72.7%)がグレードAであったが、内容的妥当性は主に[[qualitative-research|質的]]レビューに依拠しており、定量的な専門家一致統計を欠くため21件(63.6%)がグレードBにとどまった。

- **名目上5次元のAI不安尺度は本質的に一次元である。** 23項目・8次元のAIASが877名の学部生でその構造を再現できなかった後、残された20項目版はバイファクター分析でωtotal = .954に対してωH = .875(比.918)を示し、特定因子のωHSは.166〜.407にとどまった([[tassilova-ai-anxiety-scale-russian-2026|Tassilova et al., 2026]])。1つの切片を自由化すると国間比較の符号が反転し、その対比は単に偏っているのではなく不確定なものとなる。

自動的な項目選択は、ツールの構造を作り変えずに短縮できる。2つの調査波を統合したサンプル(N = 305、342)に対する蟻コロニー最適化は12項目の短縮版をもたらし、各次元でフル尺度とr = 0.910–0.944の相関を示した。ただし各次元2項目ではカバーされる内容範囲が狭くなる([[genai-srl-l2-writing-scale-2026|Wang, Zhang and Zhang (2026)]])。

- **AI固有の構成概念のための尺度の妥当性検証。** [[chang-ai-cognitive-offloading-scale-2026|Chang (2026)]]は[[cognitive-offloading|認知的オフローディング]]について一連の手順をたどる。26の候補項目が3つの機能にわたる20項目へ絞り込まれ(記憶5、補助10、思考5)、N = 665の研究1では抽出前にKMO = 0.965、χ²(325) = 8904.89が報告された。N = 1,123の研究2では二次因子モデルがCFI = 0.951、TLI = 0.944、RMSEA = 0.047、SRMR = 0.036で適合し、CRは0.840–0.906、AVEは0.501–0.570、α = 0.944、1か月後の再テストは0.937(n = 99)であった。性別をまたいだ完全なスカラー不変性が成立し、ΔCFI ≤ 0.001であった。限界も同じ報告に属する。CVI、HTMT、潜在因子間相関はいずれも報告されておらず、弁別的妥当性と内容的妥当性は実証されたのではなく主張されているにすぎない。また一次の3因子モデルはSRMR = 0.158を示し、1因子モデルの0.051と対照的であり、いくつかの項目は行動ではなく依存に対する態度を指標としている。

## 問題点と限界：測定が見落としたり誤ったりしうるもの

教育測定は強力ですが、誤りやすいものです。その失敗様式を理解することは、教育における AI の証拠を批判的に読むために不可欠であり——見かけ上の学習の伸びや構成概念の主張が、実際の効果ではなく測定の産物であるかもしれない場所を見分けるために不可欠です。

- **信頼性の限界。** 測定が完全に信頼できることは決してなく、誤差分散は常に存在する。測定器具の内部一貫性やテスト–再テスト安定性が低い場合、観察された差はノイズである可能性がある。AIの文脈では、新たな失敗モードがこれに重なる。LLMが生成した応答は、機械による一致率が高く採点されながらも人間の採点とは乖離することがあり（[[icap-cognitive-engagement-llm-agents|Do et al., 2026]]）、また自動採点は*内部的に*一貫していながら体系的に誤っていることもありうる——妥当性を伴わない精度である。AIEd研究の[[limitations-in-aied-research|測定の限界]]は、信頼性の低い測定器具を領域横断的な弱点として記録している。

- **不確実性を誤りとして符号化することは、二つの失敗を混同する。** 30項目のメンタルヘルス知識テストでは、正答率の算出において*わからない*が不正解として数えられたが、ある事実については学生の67.3%がこれを選択した一方、モデルの応答の60.6%は明確に誤っていた——正解/不正解を強制する形式では、不確実性と誤った信念を区別できない([[mental-health-literacy-students-llms-2026|Richter et al., 2026]])。
- **評価者間一致が実務上の上限を定める。** ウルグアイの[[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB*]]を対象とした大規模な検証では、人間の評価者間一致そのものがAI採点の実務上の上限を定めることが示された。10名の専門家が50件のテキストを独立に採点したところ、コンセンサスに対して全員一致に達したルーブリック項目は一つもなく、最も乖離した評価者の一致率は概ね80%未満にとどまる一方で最良の評価者は90%を超え、ほぼすべての応答が満たしてしまう偏りのあるいくつかの項目ではCohen's Kappaがslight(わずか)またはfair(まずまず)の水準にとどまった。したがって著者らは、それ自体が不完全な参照基準——10名の評価者、ほとんどの応答に対する単一の運用上のスコア、慣習的な70%の許容範囲にある複数の項目——に照らして自動採点のスコアを判断しており、これは単一評価者の運用ラベルの上に築かれるあらゆる測定上の主張に対する注意喚起である。
- **自己報告ではない測定が正しい測定であるとは限らない。** 同一構成概念のペア51組を対象とした二段階のレビューでは、41.2%が不一致または混在した結論に達していることが見出され、テスト・評定・トレースは規準基準ではなく互いに異質なものであり、それぞれが独自の妥当性論証を必要とすると論じられている([[same-construct-same-conclusion-self-report-vs-performance-2026|Fan et al. (2026)]])。
- **妥当性——誤ったものを測定していること。** 妥当性は、測定器具が測定すると主張している構成概念を実際に測定しているかを問う。よくある失敗には、**構成概念の過小代表性**(技術的知識のみを取り上げ、倫理を欠落させたAIリテラシーテスト)と**構成概念無関連な分散**(目標とする技能ではなく読解の流暢さに点を与える項目)がある。[[ai-scoring-language-bias-physics|AI採点と言語バイアス]]は、言語・言い回し・文体といった表層的特徴が、意図された構成概念とは無関係な形で自動採点のスコアを左右しうることを示している。[[assessment-validity|評価の妥当性]]は、これらの脅威に対する防護策である。

- **尺度は、意図した構成概念を測定していなくても、意図した数の因子を返すことがある。** [[ai-empathy-scale-psychometric-evaluation-2026|Kang, Lee and Kang (2026)]]は42項目のAI共感尺度から6因子を保持したが、項目は意図された6つの下位因子を再現せず——Prosocial Intentionは因子を形成しなかった——ため、その構造は暫定的なものとして提示されている。
- **自己報告のギャップ。** 自己報告による測定は、実際の能力ではなく*知覚された*能力を捉える。証拠は繰り返し、自己報告されたAIリテラシーがパフォーマンスに基づく測定と大きく乖離すること([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]、教師による約40%の過大評価)、また、パフォーマンステストが予測に成功する場面で自己報告が実際のAI支援下のパフォーマンスを予測できないことを示している([[jin-glat-genai-literacy-assessment|GLAT]])。自己報告に依存する測定は、構成概念を体系的に過大に示し、真のスキルギャップを隠してしまう可能性がある。
- **プールされた推定値は脆弱である。** 同一サンプルの主観的–客観的AIリテラシー相関のみをプールした2026年の構造化レビュー(N = 2,765)は r = .055(Hartung-Knapp 95% CI [−.047, .156])を与えるが、k = 3 で異質性推定量の見解が一致せず、1つの研究が重みの77.2%を占めるため、習熟度のカットオフを設定することはできない([[competent-generative-ai-use-measures-review-2026|Verí (2026)]])。
- **集団間で転移しない構成概念。** [[assessment-latent-structure-human-llm-2026|Strugatski et al.]]は、評価ツールが人間とLLMとで*異なる因子構造*を持ちうることを示している——つまり、同じ項目が集団間で同じ潜在構成概念を測定しているとは限らない。人間の間であっても、ある集団(例えば西洋の、資源に恵まれた[[higher-ed|高等教育]])で妥当性が確認されたツールが他の集団([[global-south]])に一般化できるとは限らず、これは教育におけるAIの測定の一般化可能性に関する懸念である。
- **測定が見逃しうるもの。** 教育におけるAIの学習に最も中心的な構成概念の一部は、適切に測定することが最も難しく、それゆえツールによって最も見逃されたり歪められたりしやすい:
  - **プロセスと方略。** 標準的な成果測定は学習の*産物*を捉えるのであって、*プロセス*ではない。学生が実際にAIとどう関わっているか——[[cognitive-offloading|過度の依存]]、無反省な受容、あるいは批判的検証——を見逃すことがある。[[tracing-genai-literacy-interaction-patterns|Chen et al. (2026)]]がインタラクションのトレースを用いるのは、まさに自己報告や成果テストがこうした動態を見逃すからである。神経プロセスの測定はこれをさらに拡張する。[[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]]はEEGから動画フレームを再構成し、正答した項目(M = 71.43, SD = 4.61)の方が誤答した項目(M = 62.30, SD = 5.91, p < .001)よりも意味的類似度が高いことを見出した。K–12のAIリテラシー監査はこのギャップの明確な例である。Guo, Ali and Wongのレビューで妥当性が確認された9つのツールのうち、プロセスを捉えたものは1つもなかった——3つは項目反応理論で分析された多肢選択式の知識テストであり、残りは古典的テスト理論で分析された自己報告尺度であった([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]])。
  - **縦断的で持続的な学習。** 単一の事後テストは、AI支援によって膨らんだパフォーマンスを示す一方で、支援なしで使える持続的な知識の侵食を見逃すことがある([[genai-performance-vs-learning|パフォーマンス–学習のギャップ]])。一時点のみの測定は、学習について積極的に誤った印象を与えうる。
  - **公平性とアクセス。** デバイスや接続環境へのアクセスが一様であることを前提とするツール、あるいは恵まれたサンプルで標準化されたツールは、[[equity-in-ai-education|資源の乏しい]][[learners|学習者]]の能力を見逃したり、体系的に過小に測定したりし、アクセスのギャップを能力のギャップと誤って帰属させることがある。
  - **[[affective-computing|情動]]および動機づけの状態。** エンゲージメント、動機づけ、自己効力感はしばしば自己報告で測定され、上述の自己報告のギャップを引き継ぐ。これらは学習を駆動する状況依存的で瞬間的な動態を捉えられない可能性がある。
- **自動測定は自信満々に間違いうる。** 機械の高い確信度と不透明な採点の組み合わせは、AI時代特有のリスクである。LLMによる採点者やアノテーターは、高い自己一貫性を持ちながら体系的に偏ったスコアを生成しうるし、厳密さの外観(大きなN、高いLLM間一致)が妥当性の欠如を覆い隠すことがある。[[ai-ed-evaluation|AI教育評価]]と[[psychometrically-aware-ai|心理測定を考慮したAI]]の枠組みがその解毒剤である——自動測定を信頼する前に、キャリブレーション、不確実性への配慮、妥当性の証拠を求める。

要するに、教育測定は、それが標本化しないもの（過程、持続性、アクセス、情動）を**見落とし**、それが粗く標本化するもの（自己知覚、表層的特徴、集団を超える構成概念）を**誤る**ことがあります。したがって教育における AI の所見を読むには、何が測られたかだけでなく*どのように*測られたか——そして尺度が捉え損ねたかもしれないものは何か——を問う必要があります。

- **監査可能なコーディングは定義上の誤りとモデルの誤りを切り分ける。** EduBehaviors は、構成概念を個別にアノテーションされた観測可能な行動と明示的な集約規則とに分解します。それによって、審査者はどの証拠がラベルを生んだかを確認し、規則の変更後に新しいモデル呼び出しを要せずにラベルを再導出できます。それは Teacher TalkMoves でマクロ F1 0.673 に達し、直接的な[[llm|LLM]]プロンプティングと競争力があります（[[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al., 2026]]）。

## つながり

教育測定は、[[item-response-theory|項目応答理論]]、[[assessment-validity|評価の妥当性]]、[[knowledge-tracing|知識追跡]]、[[student-modeling|学生モデリング]]の基盤です。それは[[learning-analytics|ラーニングアナリティクス]]（学習データの測定）、[[educational-nlp|教育 NLP]]（言語の測定）、[[psychometrically-aware-ai|心理測定的に自覚した AI]]（測定理論と整合した AI）につながります。その妥当性と信頼性の懸念は、[[ai-ed-evaluation|AI 教育の評価]]と、この分野の[[limitations-in-aied-research|測定上の限界]]を支えます。それが測る構成概念については、[[ai-literacy|AI リテラシー]]、[[technology-acceptance-model|技術受容モデル]]、[[self-efficacy|自己効力感]]、[[motivation|動機づけ]]、[[student-engagement|学生の関与]]と交差します。
- **支援介入の因果モデリング（2026年）：** 構造的因果モデリングのプロトコルは、教育的評価を、連言的な項目応答理論の信念更新を超えて、介入的・反事実的な推論（例えば、ヒントの効果）へと進めます。専門家から純粋に論理的な情報を用いて誘導された構造方程式を用い、義務教育段階のアルゴリズムスキルの課題で例示されます（[[causal-modeling-competency-assessment-2026|学生の能力評価における支援介入の因果モデリング]]）。

## よくある誤解

- **「モデルは項目の困難度を推定できる。」** 4つの前沿モデルを**2,548の数学項目におけるIRTの正解**に対して採点したところ、**相対的な困難度では68.6%**に達しましたが、絶対的な較正では**偶然の水準を下回りました**。順位づけと較正は別の能力であり、評価の設計が必要とするのは後者です。
- **「分類学上のラベルが項目の難しさを予測する。」** **265の数学項目**にわたって、意図されたブルームの水準は**困難度の分散の5%未満**しか説明しませんでした。項目にブルームの水準を与えても、その経験的な困難度についてはほとんど何も分かりません。
- **「項目の質はその言い回しから判断される。」** **生成された項目は言い回しではなく解法の経路で判断してください**。各項目の**検証済みの推論の木**を符号化することで、次善の方法をある幅で上回りました。信号を担っていたのは表層のテキストではなく推論の構造です。
