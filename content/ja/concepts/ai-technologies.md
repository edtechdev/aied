---
title: 技術（Technologies）
created: "2026-10-10T22:09:41-04:00"
updated: "2026-10-10T22:09:41-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
source_updated: "2026-10-02T07:32:07-04:00"
translation_of: concepts/ai-technologies
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **技術（Technologies）** — AI教育システムを動かすモデル、アーキテクチャ、方法、および知識ベースの技術層に関する記述を束ねる傘概念です。[[pedagogy|教育学]]と[[learning-theories|学習理論]]が*教えと学びがどう起こるか*に関わり、[[ai-ed-evaluation|AI教育の評価]]が*AIが機能するかどうか*に関わるのに対し、このページは*技術的な*筋を固定します。AIシステム（[[llm|大規模言語モデル]]、[[generative-ai|生成的AI]]、[[multimodal|マルチモーダルモデル]]、[[educational-robotics|ロボット]]）と、それらを構築・制御・展開するために用いられる技法（[[prompt-engineering|プロンプトエンジニアリング]]、[[rag|検索拡張生成]]、[[reinforcement-learning|強化学習]]、[[educational-nlp|教育NLP]]、[[knowledge-graph|ナレッジグラフ]]、[[agentic-ai|エージェント的オーケストレーション]]）です。

## 検討すべき問い

- LLMを構築できなくても優れた教育者にはなれます — しかしこのページは、あなたの技術的な選択がなお、教室でAIにできることとできないことを形づくると論じます。AIツールの根底にある技術が、あなたがコードを見ないとしても、学生の学び方を静かに変える一つの方法とは何でしょうか？
- よくある想定は、モデルがすべてだというものです — しかし、検索拡張生成（RAG）やプロンプトエンジニアリングのような技法は、まさにLLMの出力を制御し接地（ground）するために存在します。読み進める前に、AIに「より正確にして」や「この出典を使って」と頼むとき、舞台裏で実際に起きていることは何だと思いますか？
- RAGは、ハルシネーションを減らし安全性を高める中核的な技法として記述されています。関連する知識を取得してAIの答えを「接地する」ことが、なぜ雑談よりも教育にとって重要だと思いますか — そしてその接地が失敗したとき何が起こりうるでしょうか？
- このページは、技術的な選択が教育学的な想定を体現していると主張します。ソクラテス的なプロンプティングに基づくチューターは学習者と共に推論する一方、答えを生成するモデルは単に解を手渡すだけかもしれません。特定の教育哲学を「想定して」いると思われたAIツールを使った経験がありますか — それはあなたが実際に教えたい・学びたい方法と一致していましたか？
- 生の正確さを超えて、このページはAIシステムを信頼性、教育学、公平性で評価すべきだと示唆します。ほとんどの人（多くの教育者を含む）が、AIツールが「機能する」か判断する際に頼ると思われる主要な指標は何でしょうか、そしてなぜその指標は明らかにするよりも多くを隠しうるのでしょうか？
- エージェント的AIは、AIを「プロンプトに応答するツールから先行的な協働者へ」と移すと記述されています。複数ステップのワークフローを自ら開始しオーケストレーションするシステムは、教育者または学習者としてのあなたの責任をどう変えうるでしょうか — そして誰がそれを説明責任に問うでしょうか？

## はじめに

[[ai-education|教育におけるAI]]は特定の技術スタックの上で動いており、システムを自分で構築しない[[teacher-role|教育者]]や研究者にとってもそれを理解することが重要です — 技術的な選択は、教室でAIにできることとできないこと、それが携えるリスク、そしてその評価の方法を形づくるからです。このページは知識ベースの技術概念の記述を整理します。AIシステム、それらを適応・制御する技法、そして技術層が教育学、評価、そして評価とどうつながるかです。

## 教育におけるAIシステム

- **大規模言語モデル（LLM）。** 現代の[[ai-education|AIED]]の大半の計算基盤です — [[llm|LLM]]は、指導、評価、コンテンツ生成のための人間らしいテキストを生成し、知識ベースで最も参照される技術です。[[llm-training-and-fine-tuning|訓練とファインチューニング]]は、汎用のLLMを教育用に適応させます。
- **生成的AI。** テキスト、コード、画像、その他のコンテンツを生み出すシステムのより広い範疇です — [[generative-ai|生成的AI]]（主にLLMに駆動される）は、現在の[[ai-education|AIED]]研究の波の根底にある技術です。[[multimodal|マルチモーダルモデル]]（テキスト、画像、音声）と[[simulation|シミュレーション]]も参照してください。
- **ロボットと身体化されたシステム。** [[educational-robotics|教育におけるロボット]]は、身体化され、しばしば社会的な存在を加えます — 計算論的思考のためのプログラマブルキットと、指導・物語・ロールプレイのための人間型・社会型ロボット。ロボット工学は、[[agentic-ai|エージェント的AI]]と[[human-in-the-loop-ai|人間介在型]]の設計と重なる、明確な技術的な筋です。
- **知識ベースシステム。** [[knowledge-graph|ナレッジグラフ]]と[[educational-nlp|教育NLP]]は、領域知識を表現し処理し、接地された説明可能な指導のためにますますLLMと組み合わされます。

## 技法と方法

- **プロンプトエンジニアリング。** [[prompt-engineering|プロンプトエンジニアリング]]は、教育者と開発者がLLMの出力を形づくる方法です — LLMの相互作用においてオフロードと制御が実現される主要な機構です。
- **検索拡張生成（RAG）。** [[rag|RAG]]は、LLMの出力を取得した知識に接地し、ハルシネーションを減らして正確さを高めます — [[pedagogical-safety|安全な]]教育展開の中核的な技法です。
- **強化学習。** [[reinforcement-learning|強化学習]]は、エージェントが時間を通じて行動を最適化するよう訓練し、[[adaptive-learning|適応的システム]]と[[game-based-learning|ゲームベース学習]]で用いられます。
- **エージェント的オーケストレーション。** [[agentic-ai|エージェント的AI]]システムは複数ステップのワークフローを計画・実行します — しばしば複数の専門化されたエージェントをオーケストレーションし（[[agentic-ai|マルチエージェントシステム]]参照）— そして、AIをプロンプトに応答するツールから先行的な協働者へと再形成しつつあります。
- **教育エージェントのスタックは最前線に遅れている。** [[agentic-ai-education-scoping-review|Wang et al.（2026）]]は474の研究をマッピングし、GPT系列のモデルとLangChainが支配的である一方、統治されたツールのオーケストレーション、持続的な記憶、長期的な計画がほぼ欠けていることを見出しました — そして474のうち138（29%）のみが教育理論に依拠していました。
- **モデルの訓練と適応。** [[llm-training-and-fine-tuning|LLMの訓練とファインチューニング]]、[[educational-llm-alignment|教育的な整合づけ]]、[[cstutorbench-slm-tutors|小規模言語モデルの適応]]は、汎用モデルを教育特化のものにします — ただし、知識ベースの証拠は決定の順序において、[[rag|検索]]と[[prompt-engineering|プロンプティング]]を訓練より前に置きます。よく接地されたプロンプトの方が、適応させたモデルより安いからです。

## 技術層が分野とどうつながるか

技術的な筋は、知識ベースの他の主題と切り離せません。

- **教育学：** 技術的な選択は教育学的な想定を体現します — [[socratic-method|ソクラテス的なプロンプティング]]に基づく[[intelligent-tutoring|チューター]]は学習者と共に推論する一方、答えを生成するモデルは直接的な提供に既定値として傾きうるのです（[[pedagogy|教育学と教授方略]]参照）。
- **評価と査定：** [[ai-ed-evaluation|AI教育の評価]]と[[benchmark|ベンチマーク]]は、AIシステムが実際に機能するかを決め、[[assessment|評価]]と[[automated-assessment|自動評価]]は技術スタックを用いて採点と生成を行います。
- **責任ある利用：** 技術的な技法は、[[reducing-ai-misuse|AIの誤用の抑制]]に中心的な役割を果たします — [[rag|RAG]]の接地、ガードレール、[[prompt-engineering|プロンプトエンジニアリング]]による[[scaffolding|足場かけ]]、[[human-in-the-loop-ai|人間の監視]]が、AIが学習を支えるか損なうかを形づくります（[[cognitive-offloading|認知的オフロード]]、[[hallucination-risk|ハルシネーションリスク]]）。

## 教育におけるAIへの含意

- **技術リテラシーは批判的な利用を支える：** 根底にあるモデルと技法を理解することは、教育者と学習者がAIをうまく用い批判的に評価する助けとなります（[[ai-literacy|AIリテラシー]]参照）。
- **教育学的な意図によって技術を選ぶ：** AIシステムと技法は、[[pedagogy|教授方略]]に従うべきであり、その逆ではありません。
- **技術層を評価する：** [[ai-ed-evaluation|AI教育の評価]]と[[benchmark|ベンチマーク]]の研究は、AIシステムを表面的な正確さだけでなく、信頼性、教育学、[[equity-in-ai-education|公平性]]で評価します。
- **ロボットとエージェントはスタックの一部である：** [[educational-robotics|身体化された]]システムと[[agentic-ai|エージェント的]]システムは、技術的なレパートリーをテキストを超えて広げます — そして独自の設計と安全性の考慮をもたらします。

## 関連概念

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## 関連記事

- [[agentic-ai-education-scoping-review]] — 教育におけるエージェント的AIのスコーピングレビュー
- [[genai-meta-analysis-programming-learning]] — プログラミングにおける生成的AIの生産性と学習への影響のメタ分析
- [[cstutorbench-slm-tutors]] — 小規模言語モデルのチュータリングベンチマーク
- [[educational-llm-alignment]] — 教育のためのLLMの整合づけ
- [[eduguard-safe-rag-llm-tutor]] — RAGベースのLLMチューターへのガードレール
- [[hazra-safetutors-pedagogical-safety-2026]] — AIチューターの安全性と害
- [[elbench-education-llm-benchmark-2026]] — 教育向けLLMベンチマーク
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini 生成的社会的ロボット
- [[benzion-ai-physics-simulations-virtual-lab]] — 教室のためのLLM生成の物理学シミュレーション
