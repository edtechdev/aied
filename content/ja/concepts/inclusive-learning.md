---
title: インクルーシブ学習
created: "2026-10-10T22:38:10-04:00"
updated: "2026-10-30T03:25:20-04:00"
connected_resources: [mglearn]
type: concept
foundations: [ai-education, learning-design]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, higher ed]
confidence: high
translation_of: concepts/inclusive-learning
source_updated: "2026-10-25T17:35:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **インクルーシブ学習**とは、身体的、認知的、感覚的、状況的な差異にわたって多様な学習者のニーズに応えるような、教育経験の設計と提供のことです。教育におけるAIでは、インクルーシブ学習の[[research-methods-aied|研究]]は、AIツールが障害のある学習者や神経多様性のある学習者の障壁をどのように取り除けるかと、[[ai-technologies|AIシステム]]自体が新しいアクセシビリティの格差を生まないようにどのように設計されなければならないかという、二つの側面を検討します。

## 検討すべき問い

- アクセシブルなツールが自動的にインクルーシブな指導を保証するわけではなく、支援技術が意味のある主体性を保証するわけではありません。形式の障壁を取り除くことと、誰もが意味ある形で参加できるように教育を設計することの違いは何でしょうか。
- 本ページはインクルーシブ学習、アクセシビリティ、支援技術、特別支援教育、ユニバーサルデザインを区別します。あなた自身の文脈における教育におけるAIはどこに位置するでしょうか。そして、あなたが実際に答えようとしている問いはどれでしょうか。
- ある研究では、AIで区間分割され固定の休止を入れた動画によって、ADHDの学習者と非ADHDの学習者の間の成績差が解消されました。一つのグループのニーズに応える設計が、なぜすべての人の学習を改善しうるのでしょうか。
- AIシステムは、古い障壁を取り除きながらも新しいアクセシビリティの格差を生むリスクがあると説明されています。テキスト中心で、視覚的で、常時オンラインを前提としたAIツールは、どんな学習者を静かに排除しうるでしょうか。
- インクルーシブな評価の研究は、不正行為対策と視覚処理にニーズを持つ学習者への配慮との間の緊張を明らかにしています。セキュリティとアクセシビリティが衝突するとき、そのトレードオフはどう決められるべきで、誰が決めるべきでしょうか。
- いくつかのツールは、[[edtech-platform|教育技術]]は視覚的でなければならないという前提を覆しています。たとえば視覚障害のある学習者向けの音声優先のコンパニオンなどです。あなた自身のツールや教材は、「標準的な」学習者についてどんな前提を置いているでしょうか。

## はじめに

インクルーシブ学習とは、苦労する学習者のために後から適応させるのではなく、すべての学習者が意味ある形で参加できるように教育を構築するという設計上のコミットメントです。ここでは、隣接しつつも異なる概念——[[accessibility]](誰もが形式を知覚し操作できるか)、[[assistive-technology]](どんなツールが個人の[[digital-divide|アクセスの格差]]を埋めるか)、[[universal-design-for-learning]](設計は多様性をどう先読みすべきか)——の上に立つ傘として機能し、[[neurodiversity]]や[[special-education]]を、例外ではなく設計の文脈として捉えます。AIは、約束(個人化、配慮、翻訳)と新たな排除の源泉(コスト、データ、言語のカバレッジ、モデルに組み込まれた前提)の両方として登場します。

## 関連する概念がどう組み合わさるか

インクルーシブ学習は**傘**となる概念であり、以下のページはその内側にあり、それぞれが異なる問いに答えます。それらは重なり合いますが互換ではありません——ある主張がどれに属するかを知ることが、ナレッジベースの正確さを保ちます。

| 概念 | それが答える中核の問い | 典型的な焦点 |
|---|---|---|
| **インクルーシブ学習**(本ページ) | どうすればすべての学習者が意味ある形で参加できる教育を設計できるか | 学習者の多様性にわたる指導の広い設計 |
| **[[accessibility]]** | 誰もが*形式・媒体*を知覚し操作できるか | 字幕、代替テキスト、書き起こし、コントラスト、キーボード/スクリーンリーダー対応、WCAG |
| **[[assistive-technology]]** | どんなツール・機器が個人のアクセスの格差を埋めるか | スクリーンリーダー、音声合成/音声認識、点字/触覚、字幕付け、AIによる配慮 |
| **[[special-education]]** | 診断された障害のある学習者にどう指導を提供するか | IEP、個別の配慮、障害特有の指導——**主に[[k-12]]の用語(IDEA/権利保証)** |
| **[[universal-design-for-learning]]** | 最初から柔軟性をどう先を見越して組み込むか | [[student-engagement|関与]]、提示、行為・表現の多元的な手段 |

実際には:**UDL**は障壁を*防ぐ*設計哲学であり、**アクセシビリティ**は*形式*の障壁を取り除く属性であり、**支援技術**は個人が使う*ツール*の層であり、**特別支援教育**は診断された障害のための*指導*の領域です。そしてそれは主に**K-12**の用語であり、**[[higher-ed|高等教育]]**(そして近年はK-12でも)ではより一般的な枠組みは[[universal-design-for-learning|ユニバーサルデザインラーニング]]です。**インクルーシブ学習**は、公平な参加という共有された目標を軸にそれらをまとめる傘です。アクセシブルなツールはインクルーシブな指導を保証せず、支援技術は意味のある主体性を保証しません。だからこそ、この傘はそれらすべてを覆わなければならないのです。

インクルーシブ学習は[[equity-in-ai-education]]、[[learning-design]]、[[special-education]]の交差点に位置し、[[assistive-technology]]という具体的なツールの層と[[accessibility]]という設計上の属性に支えられています。既存のシステムに後からアクセスを付け加える狭い配慮とは異なり、インクルーシブ学習の視点——[[universal-design-for-learning|ユニバーサルデザインラーニング]]に根ざした視点——は、環境は人間の多様性の全範囲を見越して最初から設計されるべきだと論じます。このナレッジベースの記事群は、AIが自動化された内容変換、適応的な評価インターフェース、そして[[neurodiversity|神経多様性のある利用者]]の生活経験を出発点として設計されたツールを通じて、これをどう実現できるかを探ります。

### 主要な研究テーマ

**AIによる内容のアクセシビリティ化**は、自動化されたパイプラインが障壁を減らせることを示しています。**[[adhd-video-segmentation-computing-education|Pimenovaら]]**は、AIで区間分割し固定の休止を入れた[[video-education|教育動画]]によって、ADHDの学習者と非ADHDの学習者の間の成績差が解消されることを示しました——これは自動化された内容変換によるユニバーサルデザインラーニングの強力な証拠です。この研究は、[[collaborative-learning|協働的な学習]]の構造が神経多様性のある学習者の安心感にどう影響するかという[[neurodivergent-computing-students]]の研究につながります。**[[llm-question-generation-deaf-hard-of-hearing-2026|Chenら]]**は、ろう者および難聴の学習者のために[[llm]]を活用した問題生成システムを設計し、動画の中で視覚的・感情的に難しい瞬間を狙う「視覚的」および「感情的」な問題方略を導入しました。同時に、テキスト中心のAIプロンプトとろう者・難聴の学習者の手話を母語とする言語との間の持続的な不整合を明らかにし、言語的・文化的に配慮したAI設計の必要性を示しました。**[[text-simplification-its|MuTSE]]**は、読みやすさという相補的な障壁に取り組み、[[intelligent-tutoring]]のためのLLMによるテキスト平易化を評価し、[[pedagogy|教育的]]な質を見落とす言語的な指標に頼るのではなく[[human-in-the-loop-ai|人間が介在する]]評価の枠組みを通じて、内容の複雑さを各学習者の現在の水準に合わせています。

数式の多い動画は、手作業で書き起こすのではなくアクセシブルにできます。GeminiとLuaLaTeXによるパイプラインは、教育用の物理学の動画16本をPDFに変換し、PDF/UA-2およびISO 32005の検証に合格しました。二度目の試行が必要だった動画は1本だけでした([[gemini-lualatex-physics-video-transcription-2026|Looney & Duston (2026)]])。

**感覚的なアクセシビリティ: 盲・弱視・ろうの学習者。** いくつかの記事は、教育技術は視覚的でなければならないという前提を覆しています。**[[kutti-ai-voice-first-learning-companion|Kutti AI]]**は、話し言葉による会話を視覚障害のある子どもたちにとって主要かつ十分な様態としています——リアルタイムの行き詰まり検出、[[multilingual-learning|多言語]]の回答照合、オフライン優先の端末内音声認識が、視覚への依存と接続性の要件の両方を取り除きます。**[[tactile-statistical-graphs-accessibility|Obiuwevwiら]]**は、盲・弱視の学生のために触覚的な3D印刷の統計グラフを250ミリ秒未満で生成する、再利用可能なパイプラインを構築し、画像からのLLMによる図表抽出を任意で備えました。**[[pepper-robot-sign-language-lis-2025|Bollaら]]**は、Pepperソーシャルロボットが理解可能なイタリア手話を生成できるかを探り、ろうの学生と専門の通訳者とともに52の手話を共同設計しました——[[educational-robotics]]をろうの学習者のためのコミュニケーションのアクセシビリティへと広げるとともに、意味にとって重要な非手動要素(表情、姿勢)を再現することの難しさを浮き彫りにしました。**[[khlaif-assistive-genai-visually-impaired-2026|Khlaifら(2026)]]**は、この系譜の研究を高等教育に広げ、パレスチナの視覚障害のある学部学生21人を対象とした[[qualitative-research|質的]]事例研究から、生成AIが個人の特性に合わせて進度・内容・提示方法を調整し、複数の様態にわたって複雑な学術テキストを変換することを見出しました。学習者は生成AIを教師の代替ではなく補完と見なしており、人間的なつながりを保ちながら参加を可能にしています。

**インクルーシブな評価の設計**は、セキュリティとアクセシビリティの間の緊張に取り組んでいます。**[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]**は、画面キャプチャによるカンニングを防ぎつつ視覚処理にニーズを持つ学習者に配慮する、適応的な視覚的注意転換の理論的枠組みを提案し、不正行為対策とインクルーシブ学習の原則との間のトレードオフを明示的にモデル化しています。これはより広い[[academic-integrity]]および[[assessment]]の関心につながります。

**神経多様性のある学習者の経験**は、障害のある学習者や神経多様性のある学生の声を中心に据えます。**[[neurodivergent-computing-students|Zastudilら]]**は、神経多様性のあるコンピュータサイエンスの学生が、構造化された課題、小さく一貫したチーム、明確な役割定義を必要とすることを見出しました——[[intelligent-tutoring|AIによる個別指導]]や協働ツールが応えなければならない選好です。**[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**は識字障害のある学習者のフォーラム上の議論を分析し、彼らが読み書きの支援のためにAIを評価する一方で、出力の質の不安定さと公平な配慮の欠如から大きなアクセシビリティの障壁に直面していることを明らかにしました。どちらも[[special-education]]および[[student-experience]]につながります。

**[[cognitive-offloading|認知的オフローディング]]と「アクセスか発達か」のトレードオフ。** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]]は、学習障害のある学生にとって、読み書きへのアクセスの障壁を下げるのと同じ生成AI(テキストの水準調整、要約、執筆支援)が、もし無防備に使われれば、これらの学習者が最も必要とする理解・計画・モニタリングの練習を代替してしまいうることを示しました——これはインクルーシブ学習に中心的な公平性の緊張です。したがってインクルーシブな設計は、ツールが*アクセシブル*かどうかだけでなく、アクセスが可能にしようとしている技能そのものを発達させる学習者の機会を保つかどうかも考えなければなりません。

**識字障害のためのAI: 検出、支援、そして[[personalized-learning|パーソナライズされた学習]]。** 2026年の学際的な[[meta-analysis-systematic-review|システマティックレビュー]](Dabaghi, D'Urso & Sciarrone、PRISMA準拠、2018–2024年、n=72)は、AIが検出、支援的な支援、パーソナライズされた学習にわたって識字障害のある学生を支えていることを見出しました——ただしこれらの流れは統合されるのではなく並行して進化しており、統合された教育理論よりも技術的な機会に駆動されています。機械学習に基づく教育支援ツールは五つの領域(特定の応用、関与、個人化、推薦、一般的な支援)にわたりますが、生態学的妥当性や教室での実践的な展開を見落としながら、技術的な性能と分類精度を重視しています。検出の研究(脳波、視線追跡、機械学習モデル)は早期介入にとって診断的な見込みを示しますが、専門的な機器と統制された環境を必要とすることが多く、典型的な学校環境での拡張性とアクセシビリティを制限しています。未解決の課題には、実験的な検証の限界、拡張性、センシティブな学生データに関する[[ethics]]/プライバシーの懸念、[[teacher-role|教師]]の支援と研修の限界、そして言語的・文化的な障壁(研究の多くは英語圏を対象としている)が含まれます——これは、インクルーシブ学習が技術的な能力を、検証され拡張可能で倫理的に根拠のある展開と結びつけなければならないことを示しています。

**障害を中心に据えたAI批判**は、AIシステムが含むのではなく周縁化しうる在り方を検討します。**[[genai-minoritized-knowledges-disability|Tali-Otmani]]**は、英語圏の欧米中心の訓練データのために、高等教育における[[generative-ai|生成AI]]システムが障害を中心に据えた知の様式を積極的に周縁化すると論じます——これは[[equity-in-ai-education]]の認識論的な正義に関する懸念につながります。

**正式な診断を条件とする仕組みは、ツールが支えると称する学習者を排除する。** [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempelら(2026)]]による、神経多様性のある学生のためのデジタル支援技術に関する40研究のスコーピングレビューでは、28の研究が参加の条件として正式な診断を求め、環境(学生ではなく)を扱った研究は3つだけでした。

**実践におけるアクセシブルなツール**は、AIが参加をどう広げられるかを示します。**[[suacode-african-students-motivations|SuaCode]]**は、コーディング技能を持つ人が1%未満であるアフリカの資源の乏しい文脈でも、スマートフォンを用いたコーディング講座が学生に届くことを示しました。**[[embodied-string-learning-blindness-low-vision-musicians|Pimenovaら]]**は、盲・弱視の音楽家とともに非視覚的な学習方略を開発し、障害に主導された[[embodied-learning|身体化された]]設計を中心に据えました。**[[ludia-udl-ai-thought-partner-2026|LUDIA]]**は、教育者をUDLの原則につなぐ、無料で非公開かつ多言語のAI思考の伴走者を提供します。**[[special-r1-rl-special-education|Special-R1]]**は、[[reinforcement-learning|強化学習]]を拡張し、障害の特性にわたる認知的・コミュニケーション的な多様性をモデル化します。

### 関連する概念とのつながり

インクルーシブ学習は[[equity-in-ai-education]]と深くつながっています——アクセシビリティは単なる技術的な関心事ではなく、誰が学習に参加できるかという問いなのです。それは、具体的なアクセスの層として[[accessibility]]に、ツールの層として[[assistive-technology]]に、理論的な基盤として[[universal-design-for-learning]]に、障害特有のアプローチとして[[special-education]]に、講座やツールがどう構造化されるかとして[[learning-design]]に、そして差異を欠陥ではなく多様性として捉え直す枠組みとして[[neurodiversity]]につながります。手話ロボットや触覚的なツールに関する研究は、アクセシビリティを[[educational-robotics]]や[[educational-nlp]]に結びつけ、テキストの平易化はそれを[[sociocultural-learning]]や[[adaptive-learning]]につなげます。[[ai-education]]と[[generative-ai]]のつながりは、約束(自動化された内容の適応)と危険(排除を再生産するAIシステム)の両方を浮き彫りにします。

## インクルーシブ学習を設計する教育者への含意

- **除外された様態を最初に設計する。最後ではない。** 最初から盲・弱視の利用者に向けて作ること([[kutti-ai-voice-first-learning-companion|Kutti AI]]、[[tactile-statistical-graphs-accessibility|触覚グラフ]])は、オフラインでも資源の乏しい環境でも動くツールを生み出します——アクセシビリティは後付けではなく触媒です。
- **対象となるコミュニティと共同設計する。** [[pepper-robot-sign-language-lis-2025|手話ロボット]]や[[llm-question-generation-deaf-hard-of-hearing-2026|ろう者・難聴の学習者の問題生成]]は、コミュニティの参加が設計者が予見できない障壁(たとえば手話を母語とすること)を明るみに出せることを示しています——学習者とコミュニティを設計に関わらせましょう。
- **言語的な指標だけでなく教育的な質を評価する。** [[text-simplification-its|MuTSE]]は、LLMの出力のばらつきには人間が介在する評価が必要であることを示しています。平易化が助けになるのであって、単純化しすぎないために。
- **AIを使って成績差を縮める。** [[adhd-video-segmentation-computing-education|AIで区間分割された動画]]はADHDの成績差を解消しました——成果を均等化するという証拠があるところに、適応的なAIを展開しましょう。
- **セキュリティとアクセシビリティのトレードオフを明示的に扱う。** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]は、不正行為対策が視覚処理にニーズを持つ学習者を意図せず排除しうることをモデル化しています——誠実性とアクセスを天秤にかけましょう。
- **アクセスは形式だけでなく言い回しにも左右される。** 基礎となる課題を固定したままで、読み書き能力の低い言い回しではモデルの精度が82.4%、専門家の言い回しでは83.4%に上がりました。したがって学生により良いプロンプトを求めることは新たな排除を生みます。リクエストを正規化するシステム側の書き換えは、内容を変えずに有意な差を除去しました([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]))。
- **AIが排除を再生産するのを防ぐ。** [[genai-minoritized-knowledges-disability|障害を中心に据えた批判]]は、英語圏の欧米中心の訓練データが障害のある知の様式を周縁化すると警告しています——[[equity-in-ai-education]]と並べてAIツールの認識論的な正義を監査しましょう。

## よくある誤解

**「アクセシブルなツールはインクルーシブなコースである。」** アクセシビリティが答えるのは一つの問い、すなわち誰もがその形式を知覚し操作できるかであり、それは必要ではあっても決して十分ではありません。インクルーシブ学習はさらに、どのツールが個人の[[digital-divide|アクセスの格差]]を埋めるのか、そして設計は後付けではなく多様性をどう先読みすべきかを問います。静かな部屋、安定したブロードバンド、途切れない時間を前提とした評価構造のコースに、スクリーンリーダー対応のインターフェースを載せても、表示の問題は解決し、参加の問題はそのまま残ります。

**「支援技術を供給すれば、主体性も供給される。」** この二つは別であり、このページ自身の枠づけもそう述べています。支援技術は意味のある主体性を保証しません。学習者が求められる課題を完了できるようにするツールは、その課題の最も狭い版へと学習者を導くこともあり、足場かけと天井の違いは導入の指標には見えません。

**「苦労している学生は、もっと上手にプロンプトを打てばよい。」** それはシステムの欠陥を学習者の欠陥に転換します。基礎となる課題を固定したままで、モデルの精度は**読み書き能力の低い言い回しで82.4%、専門家の言い回しで83.4%**に上がっただけであり、1ポイントの差でした。一方で、より良いプロンプトを求めることは既存の排除の上に新たな排除を加えます。てこの作用点は、言語の変異を扱うシステム側にあり、矯正的なプロンプト訓練ではありません。

**「十分な資源のある教室向けに作られたツールは、翻訳すれば資源の乏しい文脈でも機能する。」** 文脈は設計の制約を変えます。[[suacode-african-students-motivations|SuaCode]]は、**コーディング技能を持つ人が1%未満**であるアフリカの資源の乏しい文脈の学生に、デスクトップの実験室用マシンではなくスマートフォン向けに作ることで届きました。それは同じものの小型版ではなく、別の設計です。

## 関連概念

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[accessibility]] — 具体的なアクセスの層(字幕、代替テキスト、支援技術との互換性)
- [[assistive-technology]] — 学生が内容にアクセスするために使うツールの層
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]
- [[speech-and-voice-technologies]]

## 関連記事
- [[prompt-privilege-equitable-ai-access-2026]] — プロンプトの特権: LLMへのアクセスの格差の測定と緩和
- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — ろう者および難聴の学習者のためのLLMによる問題生成
- [[text-simplification-its]] — 知的な個別指導のためのテキスト平易化
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI: 視覚障害のある子どものための音声優先のコンパニオン
- [[tactile-statistical-graphs-accessibility]] — 触覚的な3D印刷の統計グラフ
- [[pepper-robot-sign-language-lis-2025]] — 手話によるコミュニケーションを支えるPepperロボット
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[gemini-lualatex-physics-video-transcription-2026]] — GeminiとLuaLaTeXによる数学にアクセシブルな物理学動画の書き起こし
- [[khlaif-assistive-genai-visually-impaired-2026]] — 視覚障害のある学習者のための支援的な生成AI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 生成AI、バーチャルリアリティ、そしてその先へ: 高等教育における神経多様性のある学生のためのデジタル支援技術に関するスコーピングレビュー
