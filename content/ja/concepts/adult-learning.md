---
title: 成人学習者
created: "2026-10-10T22:05:10-04:00"
updated: "2026-10-30T03:22:21-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [professional-training]
research_method: [system development]
level: [adult learning, higher ed]
confidence: medium
methods: [usability-research]
technology: [edtech-platform]
translation_of: concepts/adult-learning
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **成人学習(Adult learning)** — 成人を教育する理論と実践(アンドラゴジー)、そして、成人学習者の[[agency|自律性]]、先行経験、現実世界との関連性を支えるようにAIツールや技術を設計する方法を指します。このナレッジベースでは13件の記事で検討されています。

## 考えるための問い

- 成人学習の理論は、学習者は自己主導的であり、人生経験を引き出し、現実世界との関連性を求めるものと想定します。しかしAIが認知的作業の多くを担うならば、見える助けなしに課題をこなした学習者は、その課題を自分で主導したと言えるでしょうか。どうすればそれを確信できますか。
- ツールからの行動的な独立は、もはや学習者が学びを主導したことの保証にはなりません。成人学習者向けのAIを設計するなら、静かな丸投げではなく真の自己主導を確かめるために何を探りますか。
- 成人向けAIツールの設計指針は、忙しい生活に収まることを重視します。モバイル対応、オフラインでも動作すること、現実の問題に結びつくこと。このうちどれがあなた自身の学びにとって最も重要で、それらを無視するツールは学習者に何を犠牲にさせますか。
- 成人学習者は職場や家庭で学ぶことが多いため、オンラインでの提供が主流になります。それは柔軟性をもたらす一方で、作業の丸投げや学問的誠実性に関する問いのリスクももたらします。AI支援の利便性は、忙しい成人にとって持続的な学びという目標とどう相互作用するでしょうか。
- 研究は、設計指針のすべてを満たす単一の成人学習AIシステムは存在せず、生態系全体が必要であったことを見出しています。これは、1つのツールがすべての学習者のニーズに応えると期待することについて何を示唆しているでしょうか。
- 周縁化された成人学習者や神経多様性のある成人学習者にとって、公平性はツールへのアクセスよりも教育者の関係的な配慮に関わる問題かもしれません。人間を配慮の拠点として位置づけることは、AIツールの設計や導入のあり方をどう変えますか。

## はじめに

Knowlesのアンドラゴジーモデルに根ざし、成人学習は、学習者は自己主導的であり、人生経験を引き出し、直接的で実践的な目標によって動機づけられ、学びが現実世界の役割に結びつくときに最も大きな恩恵を受けるものと想定します。こうした想定はAIの設計にとって重要です。なぜなら生成AIは現在、学習のほぼすべての段階 — ニーズの特定、目標の設定、情報の解釈、成果物の生成、パフォーマンスの評価 — に参加できるからです。AIがこれほど多くの認知的作業を担うとき、ツールからの行動的な独立は、もはや学習者が実際に学びを主導したという保証にはなりません。このナレッジベースの研究はこれに応じて、自己主導を想定された既定値ではなく能動的な設計目標として捉え直し、成人学習AIを、目標の所有、委任の統制、認知的回復可能性といった基準に照らして評価しています。

## 関連する記事からのエビデンス

- **アンドラゴジーとGenAIによる認知的委任。** [[andragogy-cognitive-delegation-genai-2026|Hyoung (2026)]]は、AIを介した認知的委任のもとでKnowlesの6つのアンドラゴジー的想定を再検討し、見えるAIの助けなしに課題をこなしても、意味のある自己主導の証明にはならないと論じます。同研究は5つの分析次元 — ニーズと目標の所有、委任の統制、認識論的較正、認知的回復可能性と転移、動機づけの自律性 — を導き出し、成人学習を[[cognitive-offloading]]および[[self-regulated-learning]]と結びつけて、[[generative-ai]]の時代に学習者が真に自己主導的であり続けているかどうかを評価します。
- **AIによる成人学習ツールの設計指針。** 成人学習とオンライン教育のための全米AI研究所(AI-ALOE)の縦断的導入データに基づき、DIS 2026の論文[[ai-adult-learning-guidelines-dis2026|19件の実証に基づく設計指針を統合]]し、AIを活用した成人学習技術のための指針としています。7つの導入済みシステムから集められた約1,600件の関係者の発言から導かれたこの指針は、認知的プレゼンス、社会的プレゼンス、教育的プレゼンス(探究の共同体の枠組み)にわたります。そして、ツールは忙しい成人の生活に収まる(モバイル対応、オフラインでも動作する)べきであり、内容を現実世界の問題に結びつけ、意味ある形でパーソナライズし、実質的な支援とフィードバックを提供し、データについて透明であるべきだと強調します。どの単一のシステムもすべての指針を満たさず、AI-ALOEの生態系全体がそれらを満たすために必要でした。
- **成人・遠隔・生涯学習の文脈。** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rientiesら]]は、オープン・ユニバーシティが埋め込み型AIアシスタント(AIDA)を6件のデザインベースドリサーチ研究を通じて設計・評価した方法を示しています。それを使った学生は、講座により長く時間を費やしましたが、この研究は技術的な能力が[[governance]]と組織的な即応性に見合ったものでなければならないと注意を促しています。[[ai-lifelong-learning-policy|TheodoraとTselios]]は、成人および[[lifelong-learning|生涯学習]]におけるAIの二面的な役割を、パーソナライズされたスケーラブルな教育を可能にするものであると同時に、公平性とガバナンスのリスクの源でもあるとして位置づけ、包摂的で人間中心の政策を求めています。[[community-centered-ai-education-adults|中西部のケーススタディ]]は、十分なサービスを受けていない地域社会の成人54人を対象にAIリテラシー・プログラムを共同設計し、公平性を志向する成人向けAI教育は、基礎的な[[ai-literacy|デジタルリテラシー]]の格差に取り組み、データのプライバシーをめぐって[[trust|信頼]]を築き、生活経験に結びつけなければならないことを見出しました。[[sovereign-hive-titl-further-education-2026|Herronの「ソブリン・ハイヴ」/ Tutor-in-the-Loopの枠組み]]は、継続教育におけるGenAIの公平性を、単なるツールへのアクセスではなく大気の調節として扱い、周縁化された成人学習者や[[neurodiversity|神経多様性のある]]成人学習者にとって、教育者を関係的・認知的配慮の拠点として位置づけています。

## 関連する概念とのつながり

成人学習は、このナレッジベースのいくつかの密接に関連する概念の交差点に位置します。[[higher-ed]]は、多くの成人学習と遠隔学習が行われる制度的文脈を提供し、[[professional-training]]はその労働力に関わる側面を、[[lifelong-learning|生涯学習]]はその継続教育の側面を担います。[[vocational-education|職業教育と訓練]]は、学習者ではなく職業を名指す隣接概念です。成人学習が、あらゆる文脈に学習者が持ち込むもの — 自己主導性、先行経験、直接的で実践的な目標 — を記述するのに対し、VETは、特定の職業や技術的役割に向けた初期の、実践に近い準備を名指し、機器を用いた実証された力量によって評価され、アンドラゴジー的な性向ではなく資格枠組みによって枠づけられます。[[online-teaching-and-learning|オンライン教育と学習]]は、成人学習者にとって主要な提供媒体です。彼らは職場や家庭で学ぶことが多いからです。したがって、その可能性(24時間365日のアクセス、非同期の支援)とリスク([[academic-integrity|誠実性]]、[[cognitive-offloading|作業の丸投げ]])は、成人学習の設計にとって中心的なものとなります。[[self-regulated-learning]]と[[agency]]は、AIが損なうのではなく守るべき学習者の能力を名指し、[[cognitive-offloading]]は、AIがそれらを支えも損なわせもするメカニズムを捉えます。[[inclusive-learning]]と[[equity-in-ai-education]]は成人向けAIツールの公平性に関する責務を枠づけ、[[human-in-the-loop-ai]]は人間に説明責任を保たせる設計パターンを名指し、[[scaffolding]]はそうしたツールが提供すべき段階的な支援を記述します。

## 成人教育の教育者と設計者にとっての含意

- **AIを自己主導の足場として設計し、代替物としてはならない。** ツールからの行動的な独立は、学習者が学びを主導したことの証明にはなりません。目標の所有、委任の統制、認知的回復可能性を守りましょう([[andragogy-cognitive-delegation-genai-2026|アンドラゴジー+認知的委任]])。
- **忙しい成人の生活に収まるようにする。** ツールを非同期で、モバイルで、オフラインでも動作するものとし、内容を現実世界の問題に結びつけましょう([[ai-adult-learning-guidelines-dis2026|AI-ALOEの指針]])。
- **想定された深さではなく、関与の幅に合わせて設計する。** 働く成人は、仕事、家族、履修にわたって限られた認知資源を振り分けるため、6学期の枠組みはソクラテス的なAI対話を、必須の近道ではなくより報酬の大きいものにしました（[[packard-thinking-partner-framework-adult-learners-2026|Packardら（2026）]]）。
- **人間をループの中に保つ。** 特に周縁化された成人学習者や[[neurodiversity|神経多様性のある]]成人学習者にとって、教育者を関係的・認知的配慮の拠点として位置づけましょう([[sovereign-hive-titl-further-education-2026|Tutor-in-the-Loop]])。
- **基礎的なデジタルリテラシーとデータへの信頼に取り組む。** 定着を期待する前に、[[ai-literacy]]とデータのプライバシーをめぐる[[trust|信頼]]を築きましょう([[community-centered-ai-education-adults|地域社会のAI教育]])。
- **AIを学習科学とアンドラゴジーに根ざし、深いパーソナライズを選好する。** アンドラゴジーの理論を適用し内容を現実世界の問題に結びつけましょう。表層的な適応よりも、深いパーソナライズ(課題の順序づけ、難易度の較正)を選好します。
- **透明性とコミュニティ機能を第一級のものとする。** データの扱いに関する透明性と社会的・コミュニティ機能は、成人向けAIツールのなかで最も軽視されながら、最も価値を置かれている次元です。
- **技術的・構造的な信頼性を前提条件として扱う。** 関与は、教育の質と同じくらい、安定した包摂的なインフラにかかっています。不安定だったり排他的だったりするプラットフォームは、それ自体は健全な設計を損ないます。
- **アンドラゴジーのためのAI設計原理。** [[kim-ai-andragogy-2026|Kimら(2026)]]は、成人学習者がAIを協働的な学習エージェントとして価値を置くことを見出し、アンドラゴジーのための3つのAI設計原理を導き出しています。それは、human-in-the-loop(共有される心的モデル、人間とAIの共創)、感情的デザイン(AIへの依存の較正、共感的なコミュニケーション)、適応性(継続的な適応、相互運用性)です。また、11件のシナリオ試作は、それぞれのアンドラゴジー原理を具体的なAIの可能性に結びつけています。関与については[[intelligent-tutoring|AIチューター]]と[[learning-by-teaching|教えうるエージェント]]、自律性と自己評価についてはモニタリングと[[learning-analytics|分析ツール]]、経験については共感的な[[conversational-ai|チャットボット]]と[[simulation|シミュレーション]]、問題中心の営みについては事例ライブラリと高次の問いを生成するもの、関連性についてはAIプランナーとキャリアコーチです。
- **生産的な試行錯誤を保つ。** 同じグループの生産的失敗の研究は、AIの支援を生産的失敗の2つの段階に重ね合わせ、設計がその試行錯誤を解消してはならないと結論づけています。会話エージェントは生成と探索の間は非指示的な思考の相手として振る舞い、その後の統合の段階では比較、再構成、転移を支えます([[kim-ai-productive-failure-adult-2026|Kimら(2026)]])。

## よくある誤解

- **「1つの良いツールが成人学習者に資する。」** 研究は、**すべての設計指針を満たす単一の成人学習AIシステムは存在しなかった**ことを見出しました。生態系全体が必要だったのです。成人は義務、断続的なスケジュール、異質な目標を抱えてやってくるため、単一の製品では設計空間を覆えません。
- **「デジタルリテラシーは成人水準で前提にできる。」** [[community-centered-ai-education-adults|中西部のケーススタディ]]は、十分なサービスを受けていない地域社会の**成人54人**のためにAIリテラシー・プログラムを共同設計し、公平性を志向する成人向けAI教育はまず**基礎的なデジタルリテラシーとデータへの信頼**に取り組まなければならないことを見出しました。年齢はデジタルな流暢さの代理変数ではありません。
- **「導入は動機づけの問題である。」** データのプライバシーをめぐる[[ai-literacy]]と[[trust|信頼]]の構築は、導入を期待するに先立って必要です。意欲は技術への熱意からではなく、自分のデータがどうなるかについての確信から生まれます。

## 関連する概念

- [[self-directed-learning]]
- [[online-teaching-and-learning]] — オンライン教育と学習
- [[higher-ed]]
- [[professional-training]]
- [[vocational-education]]
- [[lifelong-learning]]
- [[inclusive-learning]]
- [[agency]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[trust]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[governance]]
- [[formative-assessment]]
- [[rct]]
- [[active-learning]]
- [[discipline-specific-aied]]

## 関連する記事

- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[andragogy-cognitive-delegation-genai-2026]] — What Remains Self-Directed? Revisiting Andragogy Through Cognitive Delegation in Generative AI-Mediated Adult Learning
- [[ai-lifelong-learning-policy]] — Artificial Intelligence in Lifelong Learning: Opportunities and Challenges in Adult Education Policy
- [[sovereign-hive-titl-further-education-2026]] — The Sovereign Hive and the Tutor-in-the-Loop (TITL) Framework for Equity in Further Education
- [[community-centered-ai-education-adults]] — Co-Designing Community-Centered AI Education for Adults: A Midwestern Case Study
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — New Systems of Learning for Distance Learning Institutions? A Six-Study Review of Implementing AIDA
- [[institutional-governance-ai-universities]] — Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools
- [[generative-ai-enhanced-learning-experiences-for-computational-thinking-a-systema]] — Generative AI-enhanced learning experiences for computational thinking: A systematic scoping review and design guidelines
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[dot-framework-survey-2026]]
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy (Kim et al. 2026)
- [[packard-thinking-partner-framework-adult-learners-2026]] — 関与の幅に合わせて設計する：深いソクラテス的対話をより報酬の大きい道筋にする
