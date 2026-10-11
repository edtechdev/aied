---
title: 教育におけるロボット
created: "2026-10-10T22:26:05-04:00"
updated: "2026-10-10T22:26:05-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
source_updated: "2026-10-01T09:59:02-04:00"
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **教育におけるロボット(教育ロボティクス)**とは、[[teacher-role|教える]]ことと学ぶための道具として、物理的なロボットまたはシミュレートされたロボットを用いることです。教育ロボティクスは広い範囲にわたります。計算的思考とプログラミングを教えるプログラム可能なキットから、個別指導を行い、物語を語り、手話を実演し、社会技能を練習させる、社会的支援的なロボットやヒューマノイドまでを含みます。それは[[problem-solving|問題解決]]、[[critical-thinking|批判的思考]]、[[creativity|創造性]]、STEAMへの関与を育むこと、そして身体化された相互作用によって抽象的な計算の概念を具体的なものにすることに価値が見いだされています。ナレッジベースのロボティクスに関するコーパスは、[[curriculum-design|カリキュラム]]に統合されたプログラミング、LLMを活用した会話型のチューター、社会的支援的な[[storytelling-in-education|ストーリーテリング]]ロボット、社会情動的学習のためのロールプレイにわたります。それはここに吸収された2つの密接に関連する領域によって支えられています。**ソーシャルロボット**(社会的相互作用と関係構築のために設計されたロボット)と**ヒューマン・ロボット・インタラクション(HRI)**(人々がロボットをどう知覚し、信頼し、共に学ぶかの研究)です。

## 考えるための問い

- 教室にいるロボットは、画面の上のチャットボットにはできない、身体化された[[community-of-inquiry|社会的な臨場感]]を加えます。ロボットの物理的な身体と社会的な合図は、生徒が学び、信頼し、関与する仕方をどう変えると思いますか。そして、それらは何から気をそらしてしまう可能性があるでしょうか。
- ソーシャルロボットは、人間らしい発話、身振り、性格を使って、教え、物語を語り、社会技能を練習させます。人間のように見て人間のように振る舞うロボットは、それ自体として学習にとって優れているのでしょうか。それとも、その社会的な臨場感は、ソフトウェアのみの道具にはないリスク(誤情報、過度の依存、プライバシー)をもたらす可能性があるでしょうか。
- LLMによって、ソーシャルロボットは今や流暢に会話できます。もしロボットがチューターのように話せるなら、その物理的な身体化に依然として依存するものは何でしょうか。そして、「身体」を加えることが、単なる新奇性ではなく、学習にとって本当に重要なのはどこでしょうか。
- 物を物理的に操作したり、自分の行動が目に見える結果を生むのを見たりして何かを学んだときのことを思い浮かべてください。物理的なロボットのプログラミングは、画面の上にコードを書くよりも、どのようにして抽象的な考え(プログラムの論理など)をより確かに根づかせることができるでしょうか。

## はじめに

教育ロボティクスは、[[ai-education|教育におけるAI]]の、独自でありながら密接に関連する応用です。ソフトウェアのみの[[intelligent-tutoring|知的個別指導]]や[[llm]]チャットボットとは異なり、ロボットは**身体化された**、そしてしばしば**社会的な**臨場感——学習者が見、操作し、(ますます)会話できる物理的な主体——を加えます。この身体化は、それらの[[pedagogy|教授法的]]な価値の中心にあります。抽象的なプログラムの論理を観察可能な行動に根づかせ、解体された(身体のない)システムにはできない関係構築と感情的な関与を支えることができるからです。

証拠は、仕事の量が示唆するほどには手薄です。教育におけるAIとロボティクスのレビューは、実証的研究の多くが13歳以下の学習者を4週間以内の期間で対象とし、初期に投資したいくつかの国に集中しており、最も研究されている成果は[[learning-gains|学習の成績]]であり、倫理、公平性、政策は導入に遅れていることを見いだしています([[white-wu-robotics-ai-education-2026|White and Wu(2026)]])。

### ソーシャルロボットとヒューマン・ロボット・インタラクション

2つの流れが、教育におけるロボティクスの社会的な側面を形づくっています。

**ソーシャルロボット**とは、社会的な相互作用を通じて人々を引きつけるように設計されたロボットであり、発話、身振り、表情、性格といった人間らしい合図を使って、伝え、教え、助け、寄り添います。教育において、ソーシャルロボット(iCub、Pepper、Reachyなどのヒューマノイドや、仲介型のロボット)は、個別指導、ストーリーテリング、ロールプレイ、言語支援、学習の仲間として用いられています。それらの社会的な臨場感が、ソフトウェア基盤の[[agentic-ai|AIエージェント]]との決定的な差異であり、関係構築と感情的な関与を可能にします。[[llm|大規模言語モデル]]の進歩は、ソーシャルロボットが言え、できることを劇的に拡げ、流暢で適応的な会話型の個別指導を可能にしました。一方で、誤情報、[[cognitive-offloading|過度の依存]]、[[privacy|プライバシー]]の侵害といったリスクももたらし、知識に基づく設計のアプローチを動機づけています。

**ヒューマン・ロボット・インタラクション(HRI)**とは、人とロボットがどう相互作用するかを研究する学際的な領域であり、知覚、コミュニケーション、協働、そしてその相互作用の社会的、認知的、[[ethics|倫理的]]な力学を含みます。教育において、HRIは、学習者がロボットをどう知覚し、信頼し、共に学ぶかの基盤となります。ロボットをプログラミングするとき、チューターのロボットと会話するとき、社会的な場面を練習するときのいずれにおいても。HRIの[[research-methods-aied|研究]]は、ロボットの外見、行動、課題の文脈、身体化が、[[usability-research|ユーザー体験]]、信頼、主体性、学習をどう形づくるかを検討します。教育におけるHRIの主要な関心事には、人間の[[agency|主体性]]を保つこと、[[trust|信頼]]を築くこと、[[self-efficacy|自己効力感]]を支えること、そしてロボットとの相互作用が自律性と社会的学習を損なうのではなく支えることを確保することが含まれます。それはロボティクスを[[human-ai-collaboration]]と[[social-emotional-learning|社会情動的学習]]につなげます。

### ロボットは教育でどう使われるか

[[teaching-with-robots-five-types-perspective-2026|Christ et al.(2026)]]は、技術の一覧ではなく役割の類型論を加えています。ワークショップから導き出された彼らの教室用ロボットの5つの類型は、ハードウェアではなく、*教授法的な機能と抽象化の水準*によって異なります。タイプaは、一般的な社会的パターンの非相互作用的な実演を行います(台本に沿った感情の劇場に続き、エスカレーションや誤解といった力学についての議論)。タイプbは、参加型の身体の劇場、[[embodied-learning|身体化された学習]]、境界の自覚、感情の調整を支える、接触に反応する相互作用型のロボットです。タイプcは、共感を示し、一人の生徒との相互作用を覚えている、話し言葉のパートナーであり、自己開示のための守られた一対一の場をつくります。タイプdは、人形のように余分な自由度を持つ隠れた専門家によって外側から導かれ、社会的な階層を平らにすることを目指します。タイプeは、学校で最近観察された行動を再演する非相互作用的なロボットであり、生徒が状況に根ざした行動について振り返ることができます。タイプaとの対比は、まさにその、一般化された抽象化ではなく文脈に固有の抽象化にあります。この類型論は、一国の精神保健プログラムに根ざした未検証の設計空間であることを明示しており、どの類型が機能するかという証拠ではなく、ロボットの役割を設計し評価するための目録です。

- **計算的思考とプログラミング:** プログラム可能なロボット(LEGO、ブロック基盤のプラットフォームなど)は、学習者がコードと現実の結果とを結びつけるのを助けます。[[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]]は、計算的思考を中等教育のSTEAMカリキュラムに結びつけ、[[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]は、ブロックプログラミングを[[conversational-ai|会話型AI]]エージェントと身体化されたロボットのフィードバックと組み合わせます。[[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]は、初心者が自然言語でシミュレートされたロボットを操作することを可能にします。
- **個別指導と知識の伝達:** [[knowledge-based-design-generative-social-robots-2026|知識に基づく設計研究]]と[[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]]は、高等教育の学生を個別指導する、LLMを活用した生成的なソーシャルロボットを開発し、誤情報や[[cognitive-offloading|過度の依存]]といったリスクに対処しています。[[task-context-trust-educational-hri-2026|信頼に関する研究]]は、ロボットが何をするか(課題の文脈)が、その外見よりも学習者の信頼を形づくり、指導的な課題の間が最も信頼が高いことを示しています。
- **ストーリーテリングと関与:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]と[[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]は、学習意欲と関与を高めるために、相互作用型でLLMを活用したソーシャルロボットをストーリーテリングに用い、[[icub-humanoid-storytelling-llm-hri-2025|iCubの物語に関するHRI研究]]は、人間とヒューマノイドの間の共創的なストーリーテリングを探究しています。
- **社会情動的学習と[[inclusive-learning|包摂]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]は、ロボットを介したロールプレイを用いて、いじめに対する傍観者の介入を練習させ、[[pepper-robot-sign-language-lis-2025|Pepperロボットを用いた研究]]は、ろうの学習者を支えるロボットによる手話コミュニケーションを探究しています。[[pepper-social-robot-formal-education-scoping-review-2026|スコーピングレビュー]]は、正規の教育におけるPepperの利用を概観しています。
- **自律性と主体性:** [[human-autonomy-agency-hri-review-2025|システマティックレビュー]]は、HRIが人間の自律性と主体性の感覚にどう影響するかを統合し、設計の枠組みと[[regulation|規制]]上の要請(EU AI法、IEEEの倫理的に整合した設計)とを橋渡ししています。[[social-robot-study-companions|学習の仲間としてのソーシャルロボット]]と、創造的なライティングにおける[[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|ロボットとLLMの統合]]は、ロボットの役割をさらに探究しています。
- **プロジェクト基盤のアプローチとゲーム基盤のアプローチ:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]はプロジェクト基盤のロボティクス課程を提示し、[[game-based-gamified-robotics-education-review-2026|システマティックレビュー]]はロボティクス教育におけるゲーム基盤学習とゲーミフィケーションを比較しています。
- **完全なロボティクスのワークフローにおける強化学習とsim-to-real。** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao and Wang(2026)]]は、組み立て、電気的な点検、シミュレーションに基づく方策の訓練、物理的な展開からなる端到端の研究用ロボティクスのワークフローを、1つのオープンなヒューマノイド(ToddlerBot、部品費用は6,000米ドル未満と報告されている)を用いた、8回の3時間のセッションからなる[[k-12|高等学校]]の課程に変換しました。ペアで1台のロボットを共有し、ハードウェアに展開する前に[[simulation|シミュレーション]]の中で[[reinforcement-learning|歩行の方策]]を訓練し、安全の関門(歩行の前に通るべき立ち上がりのテスト)によって、依存の順序が見えるようになっています。共有された成果物が個人よりもチームに報いるため、この枠組みはロボットの性能と個人の理解とを切り離しています。学生は役割を交代し、各確認点で別々の予測と説明を提出し、支えられた段階的な進み方は、概念の習得の証拠として明示的には扱われません——これは著者らによる、ロボットの節目を通過することはそれを理解することではないという警告です。
- **エコシステムの問題としての競技用ロボティクス。キットの問題としてではない。** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al.(2026)]]は、K-12のロボティクスの拘束条件を、カリキュラムやハードウェアよりも、持続的な地域の技術的な師範(メンターシップ)に求め、それが地理的に分散していることを示しています。インディアナ州では、FIRST LEGO Leagueの参加は2020年の遠隔シーズンに崩れ落ち、都市部の参加は徐々に回復した一方、農村部の参加は回復せず、2025年–2026年を通じて2020年後の水準近くに留まりました。彼らのARCの枠組みは、師範を設計された対象とします——大学は、近隣のチームのワークショップの師範として学部生を準備する、単位認定のある課程を運営し、成熟した学校の課程は、経験を積んだ学生がさらなる学校の仲間の師範となる、二次の拠点(ハブ)となります。こうして、どの大学の通学区域をも超えて、自己強化的な循環によって届く範囲が広がります。1大学の試験では3つの農村のFLLチームがつくられ、学部生の「地域とのつながり」は5点尺度で1.86から4.00に移りました(測定された変化の中で最大のもので、技術的な概念を教える自信の+1.29を上回ります)。一方、インディアナ州の1,925校の公立学校を対象とした空間的に明示的なマルコフシミュレーションでは、中程度の仮定の下で40年後に992校の学校課程が予測されたのに対し、ARCがない場合では161校でした。証拠は実現可能性の水準のものです——7人の師範と4人の保護者、遡及的な自己報告、対照群なし——しかし、その枠組みはどのロボティクス課程にも応用可能です。拡大したり拡大に失敗したりするのは、師範の能力と拠点の地理であって、ロボットではない([[arc-hubs-k12-ai-robotics-rural-2026]])。
- **子どもの発達と年少の学習者:** [[ai-toys-child-development-2026|AIを組み込んだおもちゃと子どもの発達]]は、初期の幼年期における商業的なAIおもちゃに焦点を移し、AIを組み込んだ玩具が子どもの発達と遊びにどう影響するかを検討しています。これは教育ロボティクスを、教室のロボットを超えて、子どもが家庭で出会う消費者のおもちゃへと広げ、遊びの中の[[pedagogical-agent|エージェント]]、[[trust-calibration|信頼の較正]]、[[agency|主体性]]、そして最も年少の学習者の[[well-being|well-being]]についての問いを提起しています。設計の指針が、就学年齢のロボティクス・カリキュラムよりも手薄である領域です。
- **就学前の[[ai-literacy|AIリテラシー]]における具体的なコーディングとソーシャルロボット。** Lee(2026)は、就学前と幼稚園のためのPlay With AI(PL-AI)カリキュラムにおいて、電気を使わない遊び、具体的なコーディング(Bee-Bot、Ozobot)、ソーシャルAIロボットとの導かれた対話を統合しています。[[design-based-research|デザインに基づく研究]]は、これらの身体化された具体的なロボティクス活動が、子どものAI概念についての生じつつある推論をどう支えるかを記録しており、4つの設計原則——身体化された遊び、具体的なコーディング、導かれた対話、教員との共設計——は、[[early-childhood-elementary-ai-education|幼年期]]のロボティクスとAI教育のための、発達的に適切なモデルを提供しています。
- **年少の学習者のための2つのパラダイム:コーディングロボットと生成的なソーシャルロボット。** [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee(2025)]]は、幼年期のロボティクスを、それぞれが独自の理論的基盤を持つ、2つの[[pedagogy|教授法的]]パラダイムの対として枠づけています。**コーディングロボット**(Bee-Bot、KIBO、Matatalab)は、PapertのLOGOに由来し、[[constructivist|構成主義]]を体現しています——子どもはつくることで学び、具体的なプログラミングを通じて[[computational-thinking|計算的思考]]を築きます。[[generative-ai|生成AI]]を動力とする**生成的なソーシャルロボット**は、[[sociocultural-learning|社会的構成主義]]に根ざし、子どもの最近接発達領域の中で学習を[[scaffolding|足場づける]]会話の仲間やチューターとして振る舞い、社会情動的な発達を支えます。両方の種類のロボットをプロジェクト・アプローチに統合するための、5段階からなる彼らの**創造的プロジェクト・アプローチ**は、子どもとロボットの相互作用を導き、自動化と[[creativity|創造性]]とを釣り合わせ、子どもの[[agency|主体性]]を保つ、促進者としての教員を維持します。
- **幼稚園のCTロボティクスが実際に何をするか。** 53の研究を対象としたシステマティックレビューは、問題基盤学習、ストーリーテリング、足場づけが最も頻繁に用いられる方略である一方、多くの研究がCTの枠組みを何も名指しておらず、TechCheck-Kのような検証された道具ではなく、その場しのぎの評価道具を用いていることを見いだしています([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou & Sapounidis(2026)]])。

### 身体化と教授法

決定的なテーマは、ロボットが、孤立した技術的な練習ではなく、真の学習目標を支えるときに効果的であるということです。ノートPCのChatGPTと組み合わされた机上のロボット式プロジェクターは、助けが得られる間は同程度の得点に留まり(6.7 対 7.3/10、p = .41)、助けがなくなった後も得点を保ちました(7.0 対 4.4/10、p = .003)。これは60%高い短期間の転移得点です。著者らはこの、課題に依存した利得を、一般的な代替ではなく空間的な配置に帰します([[aifred-desk-robotic-ai-guidance-2026|Orlando et al.(2026)]])。ロボットの価値は教授法的な文脈に依存します。計算的思考を教えること([[computational-thinking]])、[[stem-education|STEAM]]を支えること、[[cs-education|プログラミング]]の技能を築くこと、学習者を動機づけること([[motivation]]、[[student-engagement|関与]])、あるいは[[social-emotional-learning|社会情動的学習]]と[[equity-in-ai-education|包摂]]を支えることです。ロボティクスはまた、[[project-based-learning|プロジェクト基盤学習]]、[[game-based-learning|ゲーム基盤学習]]、[[experiential-learning|経験学習]]ともつながります。主要な設計上の考慮事項には、学習者の[[agency|主体性]]を保つこと、[[trust|信頼]]を築くこと、[[self-efficacy|自己効力感]]を支えること、学習を[[embodied-learning|身体化された相互作用]]に根づかせることが含まれます。[[language-learning|言語学習]]においては、[[robot-assisted-language-learning-meta-analysis-2026|メタ分析的な証拠]]が、身体化されたロボット支援言語学習の有効性を指し示しています。

- **AIを動力とするロボティクスを学ぶへの道筋。** ロボティクスとAIのカリキュラムにおける高等学校の学生を対象とした[[educational-robotics-pathways-2026|質的研究]]は、現実世界での実践、設計、遊び心のある創造的な表現を通じた学習を見いだしています(構成主義的、認識論的に多元主義的な視点から)。

## 関連する概念
- [[early-childhood-elementary-ai-education]] — 幼年期と初等教育におけるAI教育
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — 包括概念:AIの技術と手法(モデル、LLMの訓練、ロボティクス、RAG、エージェント的AI)

## 関連する記事

- [[pepper-social-robot-formal-education-scoping-review-2026]] — 正規の教育におけるPepperロボットのスコーピングレビュー
- [[robot-assisted-language-learning-meta-analysis-2026]] — AIで強化された身体化されたロボット支援言語学習のメタ分析
- [[white-wu-robotics-ai-education-2026]] — 教育におけるロボティクスとAI
- [[computational-thinking-educational-robotics-secondary-2026]] — 計算的思考と教育ロボティクス
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — 生成的なソーシャルロボットのための知識に基づく設計
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — 教育におけるHRIの課題の文脈と信頼
- [[human-autonomy-agency-hri-review-2025]] — HRIにおける人間の自律性と主体性
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCubの物語に関するHRI
- [[pepper-robot-sign-language-lis-2025]] — Pepperと手話
- [[social-robot-study-companions]] — 学習の仲間としてのソーシャルロボット
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — 創造的なライティングにおけるロボットとLLMの統合
- [[game-based-gamified-robotics-education-review-2026]] — ゲーム基盤のロボティクス教育とゲーミフィケーション
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — AIを動力とする教育ロボティクスを学ぶへの道筋(2026年)
- [[tsingidou-ct-robotics-kindergarten-2026]] — 幼稚園におけるロボットを介したCT
- [[ai-toys-child-development-2026]] — AIを組み込んだおもちゃと子どもの発達
- [[creative-project-approach-ai-early-childhood-2025]] — 創造的プロジェクト・アプローチ:コーディングロボットと生成的なソーシャルロボットを幼年期のプロジェクトに統合すること(Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — 台本に沿った実演から一対一の共感的な対話まで、機能的に異なる5つの教室用ロボットの類型(Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC:技術的な師範の能力と拠点の地理を、農村のK-12ロボティクス課程の拘束条件として扱う、拠点に基づく枠組み(Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — 高等学校の学生に強化学習とヒューマノイド・ロボティクスを教えること:低費用のオープンなプラットフォームにおける専門家によって検証されたカリキュラム設計
- [[aifred-desk-robotic-ai-guidance-2026]] — 机上のロボット式プロジェクター:同じ場所に配置された助言は、ノートPCのChatGPTが失ったところで転移を保った
