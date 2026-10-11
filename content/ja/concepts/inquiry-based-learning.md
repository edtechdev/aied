---
title: 探究学習
created: "2026-10-10T22:38:10-04:00"
updated: "2026-10-10T22:38:10-04:00"
type: concept
foundations: [critical-thinking]
pedagogy: [active-learning, inquiry-based-learning, metacognition, problem-based-learning, scaffolding, self-regulated-learning]
technology: [generative-ai]
discipline: [stem education]
confidence: high
translation_of: concepts/inquiry-based-learning
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **探究学習(IBL)**とは、学生が問いを立て、自立的に探究し、探究・省察・修正のサイクルを通じて知識を構築することで理解を深める、学習者中心の[[pedagogy]]です。そこで教える者は講義するのではなく[[scaffolding|足場かけ]]をします。AIの時代に、IBLの問い駆動で探究中心の構造は焦点となっています。[[generative-ai|生成AI]]や[[llm]]ツールは、問いかけと調査を支える双方向的な「共に探究する者」として働きうるからです——ただし、探究の認知的作業を保つのではなく迂回させないよう設計される場合に限ります。

## 検討すべき問い

- 探究学習は学生駆動の問いと探究の過程そのものを中心に据えます。自分自身の問いによって導かれる学びは、誰か他の人の問いによって導かれる学びとどう違うのでしょうか。
- 本ページは、AIがあなたの探究を支える「共に探究する者」なのか、認知的作業を迂回する代替物なのかと問います。AIを使って問いを探るとき、探究しているのは誰でしょうか。
- AIに支えられた探究に関する証拠は入り混じっています。ある研究では創造的な成果と態度は改善したが批判的な[[problem-solving]]は改善せず、別の研究では概念的な理解は深まったが[[ai-literacy|AIリテラシー]]は向上しませんでした。AIだけが発達させられるものとそうでないものについて、それは何を示唆しているでしょうか。
- AIの出力を権威あるものとして扱うことが過度の依存と表面的な結論のリスクを伴むなら、探究のサイクルの一部として、AIが生成した答えを学生にどう評価するよう教えるでしょうか。
- 本ページは探究を生産的な失敗——学習者が指導の前に探究し、苦闘それ自体が学びの準備になること——につなげます。答えを差し控え、複数回の試みを促すAIは、どうすればその苦闘を取り除くのではなく支えられるでしょうか。
- AIが問いを立てる摩擦を下げるとき、促進者の役割は何でしょうか。学生が即座に答えを得られるなら、教える者は今、以前には必要なかった何を足場かけする必要があるでしょうか。

## はじめに

探究学習は、学生駆動の問いと探究の過程そのものを中心に据え、典型的には段階(方向づけ→概念化→調査→討議→結論)を通じて進みます。それは、[[problem-based-learning|問題基盤学習]]と[[project-based-learning|プロジェクト基盤学習]]がその中に位置づけられることの多い、より広い家族です。IBLは*問いかけと発見の過程*を重視し、PBLは非構造的な*問題*を、そしてプロジェクト基盤学習は有形の*成果物*を重視します。

## 探究学習がナレッジベースにどう現れるか

**共に探究する者としてのAI。** STEAMにおける探究学習のためのChatGPTに関する[[meta-analysis-systematic-review|システマティックレビュー]]([[jiang-chatgpt-inquiry-steam-review-2026]]、24研究)は、ChatGPTが主に概念化・調査・討議の段階で——学習ツール、チューター、学ぶ仲間、領域の専門家、そして[[teacher-role|教育]]のアシスタントとして——使われ、成果、[[critical-thinking|批判的思考]]、[[student-engagement|関与]]、動機づけを改善させる一方、出力が権威あるものとして扱されるときに過度の依存、幻覚、表面的な結論のリスクを生むことを見出しました。

**出発点としての問題の作成。** 97名の小学3年生を対象とした準実験([[dai-chatbots-problem-posing-primary-2026]])では、生成AIの[[conversational-ai|チャットボット]]が理科の問題作成において検索エンジンを有意に上回り、問いの質を改善し、認知的負荷を下げながら、より統合された認識論的な[[network-analysis|ネットワーク]]を生み出しました。

**LLM駆動のIBLにおける認知的レベル段階の様相。** 117件の面接記録と相互作用記録の探索的研究([[luo-ibl-patterns-llm-bloom-2026|Luoら]])は、ブルームの認知的レベル段階にわたる14の相互作用パターンを同定し、学生の既存知識がLLMの利用をどう形づくるかを示すとともに、高次の思考段階を狙い過度の依存を和らげる足場かけの必要性を浮き彫りにしました。

**成果に関する証拠は入り混じっている。** [[math-education|数学]]におけるAIに支えられたIBLの実験([[mujib-ai-ibl-creative-math-2026|Mujibら]])は、創造的な数学的な成果と態度は改善したが批判的な問題解決の技能は改善せず——これはAI-IBLが主に[[creativity]]と[[affective-computing|感情的]]な発達を支えることを示唆しています。29の実験のメタ分析([[zhao-genai-higher-order-thinking-meta-2026|Zhaoら]])は、生成AIが高次の思考に中程度の正の効果を持ち、問題解決で最も強く、8〜16週間の介入と、より高い[[self-regulated-learning]]を持つ学習者が最も利益を得ることを見出しました。トルコの48名の理科の予備教員を対象とした準実験([[ai-supported-inquiry-photosynthesis-respiration-2026|Aydın]])は、8週間のAIに支えられたガイド付き探究プログラム(問題基盤学習とデザイン基盤学習を統合)を用いて、光合成と細胞呼吸の概念的理解において、群と時間の交互作用に基づく有意な伸びを見出しましたが、AIリテラシーや自己知覚された[[computational-thinking|計算論的思考]]には*有意な*効果は見られませんでした——これはAI-IBLが領域の理解を深めうる一方で、AI/CTの力量の発達にはより明示的で狙いを定めた設計が必要であるという証拠です。

[[ai-assisted-inquiry-ssi-climate|Gousopoulos (2026)]]は、三群による気候変動の研究で、AIの寄与を探究それ自体から切り離しました。AIに支えられた探究は、意志決定において探究のみの仲間を上回り(d = 0.69)、モニタリングと適応的な管理で最大の伸びを示し(d = 1.37)、一方で基本的なデータ収集はすべての条件で同等に改善しました。

**[[equity-in-ai-education|公平性]]と文脈。** 概念的な枠組みは、生成AIの共同設計とオープンな教育的実践を結びつけ、資源の乏しい文脈で探究主導のSTEAM教育を支えます。AIが生成した、[[multilingual-learning|多言語]]の、文脈的に即した[[simulation|シミュレーション]]を用います。

**AIによる足場かけを施された証拠の比較。** [[ai-information-extraction-undergraduate-thesis-2026|Anら(2026)]]は、AIを活用した情報抽出システムが、学部生の文献レビューを要約から**証拠の組織化と比較**へと移行させるしかたを示しています——学生が孤立した読解から、研究に基づく学習と論文の完成を支える、研究横断的な比較と証拠に基づく正当化へと動くのです。これは[[generative-ai|AI]]が[[stem-education|STEM]]の学部生の研究において探究の過程をどう足場かけできるかを具体化しています。

## なぜ探究学習がAIの統合にとって重要なのか

IBLの問い駆動で過程に焦点を当てた構造は、生産的なAI利用の自然な居場所です。学生はAIを代替物として*それから*学ぶのではなく、伴走者として*それとともに*学びます。ナレッジベースの証拠は一つの核心的な緊張に収斂します——AIは情報の検索と問いの定式化の摩擦を下げ([[cognitive-offloading|認知的負荷]]を減らし、より深い[[metacognition|省察]]を可能にし)うるが、設計上の足場かけがなければ、過度の依存と高次の認知の迂回を招くリスクがあります。促進者の役割、足場かけの設計、評価の技能の明示的な教育が、AIが探究を深めるのか奪うのかを決めるてこなのです。

### 生産的な失敗と探究

[[productive-failure|生産的な失敗(PF)]]は探究学習の最も構造化された親戚です。学習者は直接的な指導の*前に*問題を探究し解決策を生成し、その後で統合します。両者は、学習者によって生成された試み(失敗したものも含む)が[[prior-knowledge|既存知識を活性化]]し、指導から学ぶ準備を整えるという前提を共有します。AI時代のPFの[[research-methods-aied|研究]]は、AIが探究を短絡させるのではなくどう足場かけるべきかを鋭くしています。[[kim-ai-productive-failure-adult-2026|Kimら(2026)]]は、問題の探究と解決策の生成を通じて苦闘を保つAIの設計原則を導き出しました。[[puech-pedagogical-steering-llm-productive-failure-2025|Puechら(2025)]]は、LLMチューターが答えを差し控え複数回の試みを促すよう操舵できることを示しました。[[lukesova-clue-before-correction-2026|clue-before-correction]]の課題は、学習者に推論を続けさせる、手がかりに基づく(直接的なものではない)足場かけの例です。これらは探究とPFを、AIが永続的な学びが形づくられる[[desirable-difficulties|生産的な苦闘]]を取り除いてはならないという、より広い要請につなげます。

屋外の野外の場面では、同じ要請が空間的になります。生成AIは、学習者が証拠に出会う*前に*、彼らが気づくことを先に構造化しうるので、生成された説明を観察と最初の解釈が記録されるまで差し控える「野外優先」の順序が探究を守ります([[geoscience-field-learning-genai-2026|Choi, 2026]]))。

## 関連概念

- [[problem-based-learning]]
- [[project-based-learning]]
- [[active-learning]]
- [[critical-thinking]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[generative-ai]]
- [[llm]]
- [[stem-education]]
- [[collaborative-learning]]
- [[higher-ed]]
- [[k-12]]
- [[productive-failure]] — 生産的な失敗
## 関連記事
- [[jiang-chatgpt-inquiry-steam-review-2026]] — STEAMにおける探究学習のためのChatGPT(システマティックレビュー)
- [[dai-chatbots-problem-posing-primary-2026]] — 初等理科における生成AIチャットボットと問題の作成
- [[luo-ibl-patterns-llm-bloom-2026]] — LLM駆動の環境におけるIBLのパターン(ブルームの視点から)
- [[mujib-ai-ibl-creative-math-2026]] — AIに支えられたIBLと創造的な数学的な成果
- [[zhao-genai-higher-order-thinking-meta-2026]] — 生成AIと高次の思考に関するメタ分析
- [[niri-steam-ai-literacy-review-2026]] — AIリテラシーのためのSTEAM教育
- [[kim-ai-productive-failure-adult-2026]] — 生産的な失敗に基づく学習を支えるAIシステムの設計
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — 生産的な失敗のためのLLMの教育的な操舵
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: 自律的な言語学習のためのChatGPT
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — 光合成と呼吸におけるAIに支えられたガイド付き探究(理科の教員教育)
- [[ai-information-extraction-undergraduate-thesis-2026]] — 学部生の論文と研究に基づく学習を支えるAIによる情報抽出(An et al. 2026)
- [[ai-assisted-inquiry-ssi-climate]] — 気候変動に関する社会科学的な論争におけるAIに支えられた探究
- [[geoscience-field-learning-genai-2026]] — 生成AIが学習者の気づきを先に構造化するのを防ぐ、野外優先の指導モデル(Choi 2026)
