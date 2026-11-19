---
title: ベンチマーク
created: "2026-10-10T21:52:15-04:00"
updated: "2026-11-19T06:40:00-05:00"
type: concept
technology: [generative-ai, llm]
assessment: [assessment]
connected_faqs: [reporting-interpreting-aied-research, checking-whether-educational-ai-works]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark]
translation_of: concepts/benchmark
source_updated: "2026-11-17T08:35:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **ベンチマーク** — 教育タスクにおけるAIモデルの性能を測定するために用いられる、標準化されたテストスイートと評価フレームワークです。ベンチマークは、モデル間・手法間の再現可能な比較を可能にし、教育システムにおけるAIの信頼性、公平性、[[pedagogy|教育的]]品質を評価するために不可欠です。

## 考えるための問い

- ベンチマークとは、教育タスクにおけるAIモデルの性能を測定する標準化されたテストスイートです。読み進める前に、既存のAIベンチマークの多くが実際に測っているものは何だと思いますか。そして、なぜそれが優れたチューターに必要なものとは別のものになりうるのでしょうか。
- このページでは、教授法的知識——[[teacher-role|教授]]方略、評価方法、特別支援教育の教授法——を内容知識ではなく試すPedagogy Benchmarkを取り上げます。なぜ、ある教科を極めてよく知っているAIが、それを教えることは苦手でありうるのでしょうか。また、なぜ教授法を無視するベンチマークはその点を見落とすのでしょうか。
- ここで得られる1つの教訓は[[research-methods-aied|方法論的]]なものです。ベンチマークをどう検証するかによって結果は劇的に変わります。素朴な検証は、厳密な試行独立手法に比べてはるかに高い性能を報告します。モデル開発者やベンダーは、どのような誘惑から見栄えのする検証を設計しがちで、それをどう見抜けるでしょうか。
- ベンチマーク性能は、しばしば実世界での有用性にそのまま移行しません。AIがベンチマークに「勝った」のに実際の教室では失敗する場面を想像してみてください。そして、その隔たりは、ベンチマーク得点だけに頼ることについて何を教えてくれるでしょうか。
- このページは、ベンチマークの設計そのものがバイアスを内包したり増幅したりしうると指摘します。あるベンチマークが特定のタスク、特定の言語、特定の集団から作られているとしたら、それは最終的に誰の学習を測り、誰の学習を無視することになるでしょうか。

## はじめに

ベンチマークは、[[ai-education|教育におけるAI研究]]の証拠基盤として機能する。ベンチマークは、研究者がモデルを比較し、進捗を追跡し、失敗モードを特定できるようにする標準化されたデータセット、タスク、評価指標を提供する。研究において、ベンチマークは複数の領域にわたって登場する:

- **[[cstutorbench-slm-tutors|CSTutorBench]]** は、CSチュータリング課題における小規模言語モデルを評価する。
- **[[anvil-ai-educational-animations|ANVIL]]** は、AIが生成した教育用アニメーションを、人間が作成したものと比較してベンチマークする。
- **[[teaching-feedback-classification-benchmark|授業フィードバックベンチマーク]]** は、[[ai-feedback-quality|フィードバック品質]]分類の言語間転移を評価する。
- **[[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark (CDPK + SEND)]]** は、内容知識ではなく教育学的知識——教授方略、[[assessment|評価方法]]、[[special-education|特別支援教育の教育学]]——を検証し、97モデルにわたるコストと精度の「価値フロンティア」を報告する(一般的なベンチマークの多くは内容知識を検証するが、教育学はそれとは異なる、教育にとって決定的に重要な次元である)。
- **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** は、25,795件のインストラクショナルデザイン・シナリオにわたって[[llm|LLM]]ベースの[[learning-design|インストラクショナルデザイン]]エージェントをベンチマークし、古典的なISDフレームワーク(ADDIE、Dick & Carey、Rapid Prototyping)に根拠を置くハイブリッド型エージェントが、純粋な理論や純粋な技法のみを上回ることを示している——これは教育における[[agentic-ai|エージェンティックAI]]の設計に直接的な含意を持つベンチマーク結果である。
- **[[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]]** は、シミュレートされたペルソナではなく、記録された事例文献にチューター評価を根拠づける:特別支援教育および教育心理学の事例に由来する923件の対話であり、11モデル中最も強いモデルは、自由記述型の事例の55.8%において記録された介入に合致した。

- **明示的なベンチマーク基準としての学習者適応。** Teaching Monster Challengeは、指定された学習者ペルソナへの適応を採点するが、その自動化されたLLM審査員は下位の弱い一部を区別できるだけだった——上位のシステムはその上限近くで得点し、その順位付けはクラウドの選好と一致しなかった(Spearman ρ = −0.17)([[teaching-monster-pck-benchmark-2026|Lin et al. (2026)]])。

## ベンチマークはどこにあるのか

ベンチマークは[[ai-ed-evaluation|AI教育評価]]および[[assessment-validity|評価の妥当性]]と結びつく——厳密なベンチマークがなければ、[[intelligent-tutoring|AIチュータリング]]の効果に関する主張は検証できない。また、ベンチマーク設計はバイアスを埋め込んだり増幅したりしうるため、[[bias-mitigation|バイアス緩和]]とも交差する。ベンチマーク性能と実世界での有用性の間の緊張は複数の記事で検討されており、[[generative-ai|生成AI]]アプリケーションにおける[[transfer-of-learning|学習の転移]]の懸念につながっている。

- **失敗しているのがシステムではなく指標である場合：**[[algorag-rag-theoretical-cs-education-2026|AlgoRAG]]は、179問すべての理論系[[cs-education|計算機科学]]試験問題でBLEU-4 = 0.0000を記録した一方、6基準の教育学的ルーブリックでは0.7620となった。論理的に等価な証明は、記法・変数名・証明戦略がしばしば異なるためである。ゼロというスコアが語るのは解答の質よりもn-gramの重複についてであり、これは形式領域のAIEDシステムにおいて表層的指標を主要な数値として扱うことへの一般的な反論である。
- **構成概念レベルの反実仮想ベンチマーク。**CFES-P24は、マルチメディア学習の原理を決定論的かつ可逆的なスライド変換として表現し、MLLMがもっともらしい全体的評価を生成しているのではなく、特定の教授設計上の構成概念に反応しているかを監査する。凍結されたパイロットでは、構成概念の認識（操作、原理、修復、根拠の位置特定）は8/8であった一方、比較判断（方向 6/8）と重大度の較正（0/8）は失敗し、総合スコアよりも階層化されたスコアカードを支持する結果となった。（[[cfes-p24-multimodal-slide-auditing-2026|Ma et al., 2026]]）

- **精度だけでなく、[[hallucination-risk|ハルシネーション]]とエネルギーも評価に組み込む。**[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]]は、検索されたオープンライセンスのチャンクに対する含意関係としてハルシネーションを採点し（専門家判断とのκ = 0.76）、クエリあたり1.8 mWhを記録した。さらにそのアブレーションでは検索が最優先となった。すなわち、検索なしのローカルLLMは52.3%で、TF-IDFベースラインの55.4%を下回った。

- **生成された内容については、検証が判断を上回りうる。**[[diagramir-educational-math-diagram-evaluation|Kumar et al. (2025)]]は、生成された数学ダイアグラムをスキーマ制約付きの中間表現へ逆翻訳し、決定論的な規則チェックを実行することで、LLM-as-a-Judge（0.39–0.47）よりも人間評価者との高い一致（Cohen's κ 0.48–0.56）に到達し、小型モデルが10分の1のコストで最良の判定者に匹敵できるようにした。
- **生理学的ベンチマークにおける試行独立の評価。**[[eeg-familiarity-automated-assessment-2026|Nanayakkara & Halloluwa (2026)]]は、EEGに基づく親密度予測について15のML/DLモデルをベンチマークし、検証方式の選択が主要な結果を劇的に変えることを示した。標準的な層別交差検証は時間的なリークを許して最大0.9853のF1を報告する一方、試行独立のGroup K-Fold検証ではピークが0.6038 F1まで低下する。ここからの教訓——時間軸やリークを考慮した評価が信頼できる教育ベンチマークに不可欠である——は、EEGを超えて、系列データや時間構造を持つデータを用いるあらゆるベンチマークに及ぶ。

- **分布シフトは、リークとは別の第二のベンチマーク軸である。**分類器の分布内スコアと転移スコアを報告するベンチマークは、二つの異なる量を報告している。精選された問題バンクでマクロF1 0.88を維持したBloomレベル分類器は、二つのAI生成問題セットでは0.48と0.20まで低下し、ラベル付き分布外データでの再訓練によって最大0.82まで回復した。したがって、分布内のリーダーボード上の単一の数値は、実際に配備された測定器具の性能を過大に述べている（[[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]）。

- **データセット間の転移を検証するために構築されたデータセット。**ICLE++は説得的エッセイに全体スコアと10の特性別スコアを付与し、[[automated-essay-scoring|AES]]研究がASAPに依存していることを露わにする。ASAPの時間制限付き・母語話者のみのエッセイは、長さと質を交絡させている。特性アノテーションで訓練されたモデルは、全体スコアのみで訓練されたモデルよりもデータセット間でよく転移した（[[icle-plus-plus-essay-scoring|Li & Ng, 2026]]）。

- **人間を基準としたベンチマークは、LLMについて同じ構成概念を測っていない可能性がある。**[[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]]は、[[chemistry-education|化学]]の診断テストと[[quantitative-research|数量的]]推論試験において、人間と[[multimodal|マルチモーダル]]LLMの応答構造を比較した。LLMと人間の間の因子一致性は人間同士のベースラインを下回ったままであり、平行分析では異なる因子数が採用された。

- **信頼性はベンチマークの軸である。反復実行とモデル間一致が、解ける項目とモデル特異的な項目を分ける。**[[croteau-mllm-visual-math-reasoning-refusal-2025|Croteau & Heffernan (2025)]]は、画像必須の数学項目376問について6つのモデルをそれぞれ3回実行し、コンセンサス・テストベッドを公開した。
項目レベルの実行間安定性は79.0%–85.4%の一致を維持し、モデル系統間の平均ペアワイズCohen's kappaは0.54であり、6モデルすべてが多数決で正解した76項目（「gold」）と、3/3で正解した61項目（「ultra-gold」）は再現可能なベンチマーク部分集合となった——単一実行の精度は、配備判断の根拠として弱い。

- **ホライズンは細部ではなくベンチマークの軸である。**[[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]]は、[[pedagogical-agent|チューターエージェント]]をシミュレートされた学習者との連続30日間の関係に置き、すべてのアダプタが5–10日目でプラトーに達したこと、二つ以上のベースモデル階層で学習利得を主導したアダプタは一つもなかったこと、そして5つの採点軸がほぼ独立していたことを見いだした。

- **リーダーボードではなく人間のチューターを基準に採点されたチュータリング・ベンチマーク。**StudentBenchは2,383人の成人を、AIチュータリング、ライブの専門家による人間チュータリング、動画対照条件に無作為に割り当て、新規作成されたGRE項目で比較した。その結果、プールされたAIチュータリングは人間チュータリングと統計的に同等であり（p=.015）、対照条件を5.5–6.9パーセントポイント上回った。2,028件の専門家によるペアワイズ比較から構築された教授品質のリーダーボードは、学習者がどれだけ学んだかではなく、授業計画と会話行動を順位づける（[[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]）。
- **ベンチマークの監査は、今やそれ自体が独立した研究貢献である。**2026年の三つの成果物は、ベンチマーク研究をリーダーボード集計の先へ押し進める。EduFair-Benchはシミュレートされた学習者を固定して人口統計的属性を変化させ、チュータリング・ベンチマークをターンレベルの教育学的指標による公平性監査へと変える（[[edufair-bench-pedagogical-fairness-llm-tutors-2026|Zhao et al., 2026]]）。GeoVAD-Benchは、600問の[[math-education|幾何]]問題において、最終的な正しさではなく中間的な視覚的構成——知覚、補助線の質、その活用——を診断する（[[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]）。6つの[[physics-education|物理]]ベンチマークの専門家による再採点は、そうしたスコアが抱える誤差を定量化した。監査された不合格判定の57.20%は項目の欠陥、38.00%は採点者の誤りであり、真のモデルの失敗はわずか4.80%であった（[[frontier-models-physics-benchmark-audit-2026|Ansari et al., 2026]]）。これら三つは揃って、ベンチマークのスコアは常にそれ自体の監査済み誤差バジェットとともに読むべきだと主張しており、これは[[assessment-validity|評価の妥当性]]が教室の測定器具に求める規律と同じである。
- **構築パラダイムとしてのアノテーションと問題生成の分離。**ほとんどのベンチマークは項目や画像ごとにタスク固有の問題–解答ペアを作るため、新しいタスクへの拡張が高コストになり、データをタスク間で再利用しにくく、問題の形式と複雑さに対する制御も限定的になる。MUSEは順序を逆転させる。各作品を一度だけ、その視覚的・意味的内容の再利用可能な構造化表現にアノテーションし、その後、事前定義された生成規則から12のタスクをインスタンス化する。これにより1枚の画像が、難易度と形式を副産物ではなく明示的な設計変数として扱う多視点の評価インスタンスを生む（[[muse-vlm-artistic-image-benchmark-2026|Zhu et al., 2026]]）。その相関の証拠は、この設計を支持する第二の論拠である——12のタスクは関連しつつも冗長でない能力を測っており（Jigsaw Puzzleは他の大半と弱い相関しかなく、ρ = 0.25から−0.10）、6つの外部ベンチマークでは一般的なマルチモーダルのスコアが芸術的な教育画像へ不均等に転移する（BLINK Jigsaw対MUSE Jigsaw ρ = −0.20）。これは、単一の集計スコアを教育上意味のある能力の代理として読むことへの、構成概念網羅性の観点からの反論である（[[muse-vlm-artistic-image-benchmark-2026|Zhu et al., 2026]]）。
- **マルチモーダルな出力生成は、ほとんどのベンチマークが省いている軸である。**[[omniphys-multimodal-physics-benchmark-2026|Chen et al. (2026)]]は、[[k-12|中学校]]から大学までの物理問題15,246問と画像19,850枚を採点し、ダイアグラム編集の部分集合も含めている。構造化された物理ダイアグラムの合成や編集は解答よりも難しく、主要モデルは厳格な習熟基準で70%未満にとどまった。
- **K-12理科の網羅性と飽和の問題。**中学・高校理科向けのNGSS準拠ベンチマーク（合成項目1,078 + 1,150問、3名の判定者による検証）では、9つのオープンウェイトモデルがワンショット精度90%を超えた一方、古典的な項目統計は高い難易度値と低い識別力を示した。モデルサイズは性能を予測せず、著者らはテストが易しすぎるのではないかと問う（[[llm-benchmark-secondary-science-topics-2026|Schroeder et al., 2026]]）。これは、ベンチマークのリーダーボードと並べてその項目統計そのものを読むべきだという、領域固有の事例である。
- **主要な精度の数値を点検するための自明なベースラインとIRTグラウンドトゥルース。**[[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]]は、問題文と実際の学習者の応答を保持したASSISTmentsの1,722,169件のインタラクションからFoundationalASSISTを構築し、[[knowledge-tracing|知識トレーシング]]タスクを51.3パーセントの「常に正解」ベースラインに対して採点し、同じデータに適合させた2パラメータIRT推定値に照らしてモデルの能力を読み取る。4つのフロンティアモデルは自明なベースラインを約5ポイント上回り（最良で56.2パーセント）、項目識別力の判断では偶然水準を下回る。この目的で構築されたベンチマークだからこそ見える失敗は、モデルが正解の答えについては85.4パーセントの割合で正しさを予測する一方、誤答についてはわずか12.6パーセントしか予測できず、その見かけの能力が楽観バイアスであるということだ。
- **採点者の設定それ自体が変数である。**[[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]]は、二重採点された570人規模の試験について171通りの採点設定を掃引し、短い「厳格な採点者」の前置きが17のオープンウェイトモデルのうち14を採点バンドの外へ押し出すことを見いだした。さらに独立した1,038人規模の試験で162通りの設定により再現を試みたところ、脆弱性は再現されたがその方向性は再現されなかった。したがって最良の設定（MAE 1.64/35、人間の採点者同士が互いに対して達成する2.61/35を下回る）は、LLM採点が機能するという証拠ではない——もっとも、プールされた人間ラベルで訓練した一つのLoRAアダプタは、5つの小型モデルを人間と同等の水準に引き上げ、ペルソナ感受性をほぼ消し去った。
- **能力の主張を帰属可能にするために訓練データを制約する。**[[li-littlelearner-pedagogically-controlled-knowledge-exposure-2026|Li et al. (2026)]]は、FineWeb-Eduを米国のK–5教材88Bトークンにフィルタし、そのデータで5Bモデルをゼロから訓練したうえで、スコアではなく行動プローブによって継ぎ目を検証する——Beyond-K–5の文章では保持がほぼゼロ、Beyond-K–5のJeopardy項目では崩壊、Grade 8のMathCAMPS問題ではpass@1024でも解けた数が半分未満。事前の露出が既知であるため、スケーリング、[[llm-training-and-fine-tuning|ポストトレーニング]]、または文脈内例示の後に現れる能力は、その介入の成果として帰属できる。著者らはまた、モデルが下流のスキルに成功しながらその前提スキルに失敗することがあるため、その境界は人間のそれとは形が異なることも報告している。
- **採点規則は測定器具の一部である。**[[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]]は、同じASSISTments 2012–13のイベント系列に対して、ヒント支援を受けた行の採点方法のみが異なる4つの知識トレーシング更新規則を実行し、登録ファイルが揃うまで学生の確証用半分を伏せておくフェンスの背後で比較を事前登録した。いかなる完了にも単位を認める規則は、スキル難易度の定数をわずかに上回るにとどまり（985,813件の採点対象イベント全体でプールAUC 0.604対0.595）、支援を受けた行を最初の試行の失敗として読む規則（0.658）では72.8パーセントであるのに対し、学生–スキルペアの93.9パーセントを習熟済みと宣言する——一般的な教訓は、習熟ラベルはログではなく証拠規則によって定義されるということである。
- **モデルの能力を、精度だけでなく較正された水準として報告する。**[[standardized-assessment-llm-english-proficiency-2026|Min et al. (2026)]]は、2,050件の学習者応答を用いて専門家がアノテーションした624項目を名称付きの習熟度レベルに対応づけ、フロンティアモデルが較正された上限を超えていることを見いだした——パーセンテージでは隠れてしまう限界である。

- **採点規則は、それが訓練するモデルによって攻略されうる。**一つの最良の決定を繰り返すことで最大化されてしまう[[adaptive-learning|適応性]]指標は、ベンチマーク設計がargmaxを公開し、適応を差分として採点し、ランダム水準を上回るベースラインを報告すべきことを示している（[[llm-tutor-pedagogical-metric-degradation-2026|Domínguez Figaredo & Fernández De la Cruz, 2026]]）。

マッチング規則は測定の一部であり、その影響の大きさは無視できない。[[nkrumah-ai-skill-extraction-engineering-2026|Nkrumah and colleagues (2026)]]は、1,696個のゴールドスキルを伴う926件の求人サンプルからなるESCOアノテーション付きベンチマークに対して、埋め込みモデル、[[generative-ai|生成]]LLMの構成、そして1つのReActエージェントという11通りの設定を採点し、その後それぞれを8層のマッチングパイプラインで再採点した。このパイプラインは完全一致の文字列マッチから0.85の埋め込み類似度カットオフまで及び、測定された再現率は11通りすべての設定で11〜72パーセントポイント上昇した。最大の上昇幅70.9ポイントは、chain-of-thoughtを用いたGemini 2.5 Proで生じた。その記述はゴールドラベルと意味的には一致するが、語彙的に一致することはまれであった——著者らはこの変動を、完全一致による評価が能力と同じくらい書式を測っていたことの証拠と読んでいる。

## AIEDにおいてベンチマークが重要である理由

ベンチマークは必ずしも論文ではない。現在、実務上の読解の大半は三つの提示面が担っており、それらは読者が何を確認できるかという点で異なっている。

リーダーボードはベンチマークを継続的な比較へと変える。[GradeBench](/resources/gradebench/)は、45の大学コースから集めた464件の手書きSTEM答案について、教員が実際に選択したルーブリック項目を基準にフロンティアモデルを評価しており、最良のモデルでもルーブリックの完全一致率は57.3%である。順位よりも重要なのはコストの軸である。0.8ポイント劣るモデルは、答案1000件あたりの費用が約7分の1で済む。これが測っているのは採点であり、学習ではない。

検出器のリーダーボードは別の問いに答える。[RAID リーダーボード](/resources/raid-benchmark-leaderboard/)は、ドメイン、デコーディング設定、敵対的攻撃を横断して検出モデルを評価しており、組織規模で意味を持つのは偽陽性率1%のときの真陽性率の列である。その規模では1%が数百人の学生に相当する。

ベンチマークの中には、能力ではなくアクセスを比較するために存在するものもある。[Fab AI](/resources/fab-ai-benchmark-leaderboard/)は、低・中所得国の教育向けモデルを、教授法、基礎的読み書き能力、SEND、視覚的推論の観点から評価し、スコアの隣に価格、パラメータ数、オープンウェイトの列を並べている。フロンティアモデルが90%台前半、2B未満のオープンモデルが21%から43%という開きは、導入上のトレードオフを明示している。

この区別は保っておく価値がある。リーダーボードのスコアは固定された項目集合についての主張であり、教室についての主張では決してない。そしてこの三つの計測手段は、教育の測定が何のためにあるのかについて一致していない。

## よくある誤解

- **「リーダーボード上の位置が、チューターの良さを教えてくれる。」** StudentBench は**2,383 人の成人を AI 個別指導、専門家による生の人間の個別指導、動画の各条件に無作為化**し、他のシステムではなく人間のチューターに対してスコア化します。他のモデルに合わせて尺度を整えたベンチマークは、誰も必要としなかった問いに答えるものです。
- **「模擬的なペルソナは、チューター評価の十分な基盤である。」** [[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]]は評価を**模擬的なペルソナではなく、記録された事例文献**に根づかせ、**923 件の対話**を用います。作り上げられた学生ペルソナは、実際には起こらない事例を通過させてしまいます。
- **「審査員を確かめずに、ベンチマークを信頼できる。」** 幻覚は**取得されたオープンライセンスのチャンクに対する含意関係としてスコア化され（専門家判断との κ = 0.76）**ました。つまり審査員は、そのスコアが使われる前に専門家に対して検証されていたのです。検証されていない自動審査員は、意味の不明な数値を生みます。

## 関連する概念

- [[ai-ed-evaluation]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[automated-essay-scoring]]

## 関連する記事
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench：困難な行動を示す学生に対して LLM チューターを評価する（Park et al. 2026）
- [[standardized-assessment-llm-english-proficiency-2026]] — モデル能力を較正された水準として報告する624項目の英語熟達度ベンチマーク(Min et al. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[assessment-latent-structure-human-llm-2026]] — 評価の道具は、人間とLLMについて同じものを測るのか(Strugatski et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Pedagogy Benchmark: LLMの教授法的知識(CDPK + SEND)
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: LLMベースのインストラクショナルデザインエージェントのベンチマーク
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — オンプレミスのOER AI知識ベースアシスタント: 多次元ベンチマーク
- [[authentic-products-authenticated-processes-2026]] — 真正な成果物から認証されたプロセスへ: AIが豊富な高等教育における真正な評価
- [[llm-cognitive-diagnosis-handwritten-math]] — 手書きの数学の答案からの学生の認知的スキル診断に関するLarge Language Modelsのベンチマーク化
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: 模擬学習者を用いた教授的LLMエージェントのための長期ホライズンベンチマーク
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible Assessment in the AI Era: Key Insights from a Future-Focused Conference
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[icle-plus-plus-essay-scoring]] — ICLE++: Modeling Fine-Grained Traits for Holistic Essay Scoring
- [[teaching-monster-pck-benchmark-2026]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: 生成された数学の図を評価するためのベンチマーク
- [[eeg-familiarity-automated-assessment-2026]] — 学習者評価の自動化: EEGベースの既知性予測
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 注釈優先・タスク生成的ベンチマーク構成と、12の芸術画像タスクにわたる次元レベルの非冗長性(Zhu et al. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AIと人間のチューリングが同等のGRE学習 gains をもたらす
- [[bloom-classifier-ai-assisted-questions-2026]] — 新規のAI支援による教育問題の教授的評価に関する事前学習モデルの評価
- [[llm-benchmark-secondary-science-topics-2026]] — A Benchmark for LLM's Understanding of Middle School and High School Science Topics
- [[llm-tutor-pedagogical-metric-degradation-2026]] — Eight design principles for AI-tutor benchmarks, derived from a metric that was optimized into repetition (Domínguez Figaredo & Fernández De la Cruz 2026)
- [[nkrumah-ai-skill-extraction-engineering-2026]] — スキル自動抽出のためのAIアプローチの比較：埋め込みから工学教育向けエージェント型システムまで
