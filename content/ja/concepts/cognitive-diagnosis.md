---
title: 認知的診断
created: "2026-10-10T22:31:19-04:00"
updated: "2026-10-10T22:31:19-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **認知的診断** — 学習者の潜在的な知識状態 — 彼らが持っているか欠いている、特定の概念、技能、誤概念 — を、彼らの応答や行動から推論することです。これは[[knowledge-tracing|知識追跡]]に対する評価側の対応物であり、次の成績を予測するだけではなく、学生が*何を*知っているかを特徴づけることに焦点を当てています。

## 考えるための問い

- 認知的診断は、次の成績を予測するだけではなく、学習者の潜在的な知識状態 — 彼らが持っているか欠いている、特定の概念、技能、誤概念 — を、彼らの応答から推論します。読み進める前に、「学生の成績を予測すること」と「学生が実際に理解していないことを診断すること」との間に、どんな違いを予想するでしょうか。
- 中心的な考えの一つは「正解の罠（correct answer trap）」です。正しい答えが誤った推論を覆い隠してしまうということです。学生が正解したから理解したと確信したのに、その下に誤概念があったと気づいたことがあるでしょうか。診断は、成績ではできない仕方で、どうそれを浮かび上がらせることができるでしょうか。
- このページは、認知的診断（学習者が現在保持しているものの静的な細粒度の断面）と知識追跡（時間にわたる熟達の時間的な動態）とを区別しています。なぜ知能型の家庭教師には両方が必要なのでしょうか — 何が間違っているかを知るためと、次に何を教えるべきかを知るために。
- ここでの一つの設計原則は、診断とフィードバックを切り離すことです。LLMの家庭教師は正しい段取りを確実に確認しますが、妥当な推論を過剰に却下し、誤りを過剰に是認し、正確な診断は必ずしも実行可能なフィードバックをもたらしません。なぜ何が間違っているかを知ることが、それでも役立つ次の一歩を生み出せないことがあるのでしょうか。
- LLM時代の診断は、多肢選択から自由記述、手書き、対話的な作業へと広がります。AIが、完全には理解できない作業から誤概念を診断するとき、何がうまくいかないことがあるでしょうか。そして、どうすれば診断そのものが信頼できると検証できるでしょうか。

## はじめに

知識追跡が典型的には時間にわたる単一の熟達の度合いを見積もるのに対し、認知的診断はより細粒度のプロファイルを生み出します。どの知識要素が習得され、どれが脆弱で、どの誤概念が存在するかということです。このプロファイルは、[[personalized-learning|個別化学習]]、[[intelligent-tutoring|知能型ティーチング]]、[[adaptive-learning|適応的学習]]の基盤となります。

### 認知的診断の仕組み

- **診断の模型：** 心理測定の模型（多くは[[item-response-theory|項目反応理論]]と[[educational-measurement|教育測定]]の下で）は、正答と誤答の様式から潜在的な技能の状態を推論し、ときには項目を複数の知識要素に対応づける認知的診断の模型を通じて行われます。
- **自動化された模型探索：** 単一の診断の模型があらゆる学習者に適合することはないため、[[machine-learning|AutoML]]駆動のアプローチ（例えば、個別化されたニューラルな認知的アーキテクチャ探索）は、異質的な学習者のプロファイルに向けた診断の模型を生成します — [[multimodal|マルチモーダル]]な教育データを統合して、学習過程の動的な分析と学習者ごとの認知的診断を可能にし、静的な[[summative-assessment|試験]]の結果と単純な統計的な指標に頼るのを避けます（[[personalized-neural-cognitive-architecture-search-2026]]）。
- **応答データ：** 診断は、評価、ヒント、[[help-seeking|助けの求め]]、課題に費やされた時間への応答に依ります — 生の得点よりも豊かな信号です。
- **LLMに基づく診断：** 新しいアプローチは、[[llm|大規模言語模型]]を用いて自由記述や手書きの作業から診断し、誤りの背後にある特定の[[misconceptions|誤概念]]を特定します（例えば、正しい答えが誤った推論を覆い隠す「正解の罠」）。二つの2026年の結果が、その診断の届く範囲の限界を示しています。[[omniedu-open-educational-foundation-models-2026|OmniEdu（Liangら、2026）]]は、診断的な推論を開かれた4B/9B/27Bの模型群における四つの能力の一つとして監督し、知識状態の診断は測定された能力の中で最も弱いものでした — 27Bで54.04%、9Bで53.55%で、3倍のパラメータ数でも格差は埋まらないほど接近していました — 一方、[[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（Heら、2026）]]のLLMによる採点者は、プールされた応答では真の熟達とr = 0.68で相関しましたが、最も弱い能力層の内部ではr ≈ 0.15に過ぎず（混合層ではr ≈ 0.48、強い層では0.41）、診断の信頼性は模型と同じだけ学習者の能力水準に左右されます。
- **一つの応答ずつではなく、集団の規模でよくある誤りを診断すること。** [[llm-common-modeling-mistakes-formalisms-2026|Killichら (2026)]]は、通常の方向を逆転させます。一人の学習者の誤りを診断するのではなく、[[llm|LLM]]が、教育データセット全体にわたって誤った定式化を正しいものに対応づける、修正のための変換の候補を提案し、すべての候補は採用される前にアルゴリズムによって検証されます。正しい命題論理の定式化と誤った定式化の6,106組において、このワークフローは、5,156組（84.44%）を説明する248の変換のクラスターを発見し、従来の最先端技術が手作業で選んだ誤りでは4,370組（71.57%）でした。また、文献で専門家が手作業で特定した誤りも復元しました。クラスタリングは候補を単一の変換、同等の変換、階層的な群に秩序づけ、結果として生じる相関グラフは教員のために可視化できます。同じパイプラインは様相論理と正規表現に移されましたが、そこでは連言を選言に置き換える一つの変換だけで、334組のクラスターの98.80%を覆いました。これは、診断の模型が適合できるようになる前に必要な、誤概念の目録への一つの道です。

- **障害は誤りのシミュレーションではなく、正解の復元である。** 模型は、妨害項の追跡跡の95.2%で解法を構成し、特定のEediの誤概念を0.92の精度でシミュレートしましたが、正しい答えを与えても、人間の妨害項との一致はわずかに上がるにとどまりました（0.52 → 0.56）— 失敗は上流にあり、解法の復元にあります（[[llm-distractor-generation-student-reasoning-2026|Zengaffinenら (2026)]]）。
- **OBEカリキュラムにおける成果レベルの診断：** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeeshら (2026)]]は、成果に基づく教育において学習者がどのコースの成果を達成したかを診断します。成果を知識の概念として扱い、コースとプログラムの成果の間の専門家が検証したOBEの親和性の対応づけによって概念間の関係を与え（暗黙的に学習された注意やグラフの関係に対する明示的な代替案）、一つの成果の達成が他の成果にどう影響するかを見積もるための記憶拡張モジュールを用います — 実在の工学プログラムのデータにおいて、DKT、DKVMN、EKT、SimpleKTのベースラインを上回りました（AUC 89.81%）。
- **別の目的のために作られた道具からの診断。** [[mechanics-cognitive-diagnostic-physics-2026|Leら (2026)]]は、CDの模型が診断のために書かれたことのない項目から目標レベルの情報を抽出できることを示しています。FCI、FMCE、EMCSの項目を入門力学の14の細粒度の学習目標に対応づけ、807コースからの24,394件の事後テストの応答にDINAを適合させたところ、三つの道具のうち二つで良好な適合が見られ（FCI RMSEA² = 0.033。EMCS = 0.022）、22の目標–評価の組み合わせのうち19で、低リスクの形成的な評価のベンチマークと同等以上の分類精度が得られました。束縛となる制約は、項目の質ではなく属性の構造でした。専門家によるコーディングは模型による精査をほぼ無傷でくぐり抜けました — DINAは754の項目–目標のコーディングのうちわずか14%の修正を提案し、コーダーはそのうち20件（2.7%）を採用しました — しかし模型は、三つの*概念的に入れ子になった*エネルギーの目標（Potential Energy 0.675、Conserve Energy 0.705、Kinetic Energy 0.745）を分離できませんでした。どの二つも項目のおよそ70%を共有しており（Jaccard重複 0.67–0.73）、DINAの連言的な独立性の仮定に違反していたためです。一方、同じ道具上の運動量の目標は0.820–0.917に達しました。より細かい属性も、悪くではなく良く適合しました。14の目標の構造は、同じチームの以前の四つの広い技能の構造よりも、三つの道具すべてで模型の適合を改善しました。熟達をどれほど細かく分離できるかを制限するのは、コーディングの誤りではなく項目の重複です。
- **個別化された学習経路のためのベイジアンDINA：** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng and Huang (2026)]]は、ベイジアンDINAの模型（EdNetデータセットで訓練、N=5,000）を知識空間理論と最短の矯正経路のアルゴリズムと統合して個別化された学習経路を生成し、[[cognitive-offloading|認知的負荷]]の媒介的な役割を隠れマルコフ模型の状態遷移によって実証的に検証します（120名の学生で検証済み）— 従来型のDINA模型の疎散性に起因する収束の問題と、個別化された経路の有効性の背後にある未検証の心理学的な仕組みの両方に取り組んでいます。
- **IDの埋め込み表現に代わる言語に基づく診断。** [[process-grounded-language-cognitive-diagnosis-2026|Liuら (2026)]]は、個別の学生、問題、概念の識別子を、LLMが構築した概念のスキーマと過程に基づく証拠に置き換え、応答の記録からそれぞれの学生の事後状態を較正します。三つの[[math-education|数学]][[online-teaching-and-learning|基盤]]のデータセットにわたって、この枠組みはXES3G5Mで83.51% ACC / 85.37% AUC、MOOCで87.16% ACCに達し、その向上は古典的な認知的診断の模型が劣化するまさにその箇所に集中しています。新しい概念（KCDに対して+4.60 ACC）と欠落したQ行列の項目（+4.52）です。構造化された証拠を取り除くと、MOOCの精度は87.16%から78.95%に崩れます。したがって、改善は模型の規模ではなく言語に由来する構造から来ています。（[[process-grounded-language-cognitive-diagnosis-2026]]）

## なぜ重要なのか

正確な診断は、全体的な「能力」の得点ではなく実際の格差に教えることを向けさせます — 学生が*なぜ*誤ったかを説明する[[automated-assessment|自動化された評価]]と、特定の[[student-modeling|知識状態]]を矯正する[[feedback|フィードバックのループ]]の仕組みを可能にします。乏しい診断はその逆を生み出します。誤った概念に向けられた教えることです。これが[[psychometrically-aware-ai|心理測定的に自覚的なAI]]が、予測の精度と並んで診断的な妥当性を重視する理由です。

### 知識追跡と知能型ティーチングとの関係

認知的診断は、[[intelligent-tutoring|知能型ティーチング]]のアーキテクチャの中心に位置し、[[knowledge-tracing|知識追跡]]の評価側の対応物です。

- **診断と追跡 — 補完的な時間的な視点。** [[knowledge-tracing|知識追跡]]は、熟達の*時間的な動態*を追います — 単一の知識状態が課題にわたってどう進化するかを見積もり、次の応答を予測します。認知的診断は、学習者が現在保持している知識要素、技能、誤概念の*静的な細粒度の断面*を生み出します。家庭教師には両方が必要です。次に何を教えるかを配列するために知識追跡を、実際に*何が*間違っているかを知るために認知的診断を。[[item-response-theory|IRT]]に基づく診断の模型と[[educational-measurement|測定]]に基づく診断の模型、そして項目を複数の要素に対応づける認知的診断の模型が、診断側を具体化します。

- **LLM時代の診断。** [[llm|LLM]]は、診断を多肢選択の応答から自由記述、手書き、対話的な作業へと広げ、誤りの背後にある特定の[[misconceptions|誤概念]]を特定します（例えば、正しい答えが誤った推論を覆い隠す「正解の罠」）。[[xie-hillm-cd-2026|HiLLM-CD]]は、LLMを用いて概念の木の自動構築と階層的な熟達の推論を行い、診断と追跡を橋渡しします。[[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapatiら (2026)]]はこれをさらに進め、複数の商用のLLM APIにわたってε-局所的差分プライバシーによって診断を連合化し、どの模型も学生の生データを見ることなく、正確でプライバシーを保護する診断が実行可能であることを示しています。
- **診断とフィードバックを切り離すことは設計原則である。** LLMの家庭教師は正しい段取りを確実に確認しますが、妥当な推論を過剰に却下し、誤りを過剰に是認します — そして正確な診断は必ずしも実行可能な[[feedback|フィードバック]]をもたらしません。したがって、ITSの設計は、診断の構成要素をフィードバック/[[scaffolding|足場かけ]]の構成要素から切り離すべきです（[[yasir-llm-tutoring-agents-2026]]）。

## つながり

認知的診断は、[[knowledge-tracing|知識追跡]]、[[student-modeling|学生モデリング]]、[[educational-measurement|教育測定]]、[[assessment|評価]]につながります。その洞察は[[intelligent-tutoring|知能型ティーチング]]と[[adaptive-learning|適応的学習]]に流れ込み、LLM時代の研究はそれを、[[intelligent-tutoring|AIによる個別指導]]における誤概念の特定につなげます。

## 関連概念

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## 関連記事
- [[llm-cognitive-diagnosis-handwritten-math]] — 手書きの数学からの認知的技能の診断におけるLLMのベンチマーク
- [[correct-answer-trap-misconceptions]] — 正解の罠
- [[llm-misconception-difficulty-easy-trap]] — Easy Trap。なぜLLMは誤概念に起因する難しさを過小評価するのか
- [[llm-student-misconception-identification]] — 学生の誤概念のLLMによる特定
- [[student-math-competence-clustering]] — 学生の数学的な能力のモデリングのためのクラスタリング
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — 明示的な問題解決者のモデリングのための認知的エージェントのコンパイル
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench。シミュレートされた学習者からの診断
- [[huang-interpretable-knowledge-tracing-2026]] — 解釈可能な知識追跡
- [[xie-hillm-cd-2026]] — HiLLM-CD。LLMの概念の木と階層的な熟達の推論
- [[yasir-llm-tutoring-agents-2026]] — LLMの家庭教師における診断とフィードバックの切り離し
- [[zhang-ct-ai-training-test-2026]] — AI訓練テストにおける計算論的思考（CTAT）
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 個別化された学習経路のためのベイジアンな認知的診断
- [[personalized-neural-cognitive-architecture-search-2026]] — 学習者のプロファイルのためのAutoMLによる個別化されたニューラルな認知的アーキテクチャ探索
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 親和性の対応づけによる成果に基づく知識追跡
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — プライバシーを保護する異質なマルチLLMの連合診断
- [[llm-common-modeling-mistakes-formalisms-2026]] — LLMが生成しアルゴリズムによって検証された修正の変換を用いた、規模におけるよくあるモデリングの誤りの採掘（Killichら 2026）
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic。既存の物理学の概念目録から14の学習目標のDINAに基づく診断（Leら 2026）
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLMによる知識概念の注釈と較正された概念レベルの知識状態
- [[llm-distractor-generation-student-reasoning-2026]] — 診断的な項目設計の課題としての誤概念に基づく妨害項
- [[misconception-acquisition-dynamics-llms-2026]] — 誤りが解法に入り込む箇所が診断的な障害である
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support。STEM学習のための教育法に導かれた生成的ビデオ家庭教師
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn。人間とAIの共学習のループにおいてその学習者を学ぶエージェント的な家庭教師
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu。学習と教育のための開かれた基盤模型
