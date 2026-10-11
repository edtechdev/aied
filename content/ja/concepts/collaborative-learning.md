---
title: 協働学習
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/collaborative-learning
source_updated: "2026-10-07T15:40:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **協働学習**——学生が問題を解いたり課題を達成したり知識を構成したりするために共に学ぶ教授法であり、AI ツールによって支えられたり媒介されたりします。[[ai-education|教育における AI]] では、協働学習の[[research-methods-aied|研究]]は、協働のパートナーとしての AI、人間の協働の媒介者としての AI、そして協働型 AI 個別指導システムの設計にわたっています。

## 検討すべき問い

- かつてグループで何かを深く学んだ経験を思い出してください。それをうまくいかせたものは何だったでしょうか。今、AI の[[conversational-ai|チャットボット]]がそのグループに加わったと想像してください——あなたが経験したものを強めることも、静かに損なうこともあり得ますが、それはどういう形でしょうか。
- 研究はトレードオフを見出しています。推論を AI に委ねることは最良の課題達成度を生む一方で自己調整的な関与は最も低く、[[self-regulated-learning|自己調整]]を育むモードは課題の成績では振るいません。選ばなければならないとしたら、どちらを守りますか——成果か、それとも葛藤そのものか。
- ICAP 枠組みは「インタラクティブ」な協働を最も深い関与の形として位置づけます。グループのために答えてしまう AI は、学生の満足度が高まったとしても、協働をインタラクティブから単なる受動へと格下げしてしまうことはないでしょうか。
- ある研究では、AI の媒介者は中立であり続ける間だけ信頼され、助言や異議提示に移行すると信頼が損なわれることが見出されました。グループの AI 媒介者は実際にはどれほど中立であるべきでしょうか。
- 学習者が AI を使って洗練された成果物を作るとき、理解を築く認識的な営みを飛ばしてしまうことがあります。不一致や対立をならし取るのではなく表面化させる AI パートナーを、どのように設計しますか。
- 神経多様性のある学生は、構造化された課題、小さく安定したチーム、明示された役割を必要とすると報告しています。AI 協働ツールが「平均的な」学習者向けに作られているとしたら、誰が見落とされてしまうでしょうか——そして、それをどう設計し直しますか。

## はじめに

協働学習は、知識の構成を根本的に社会的なものとして捉える[[sociocultural-learning|社会文化的理論]]に根ざしています。AI は新たな力学をもたらします。AI は同僚として、促進者として、あるいは協働の過程の参加者として振る舞えます。このナレッジベースの記事群は、AI に媒介された協働が[[learning-gains|学習の成果]]、認識的関与、[[equity-in-ai-education|公平性]]にどう影響するか、そして多様な学習者を受け入れるために協働の構造がどう設計されるべきかを探究します。

**構成要素としての協働と構造としてのグループワーク。** 協働学習はより広い理論です。すなわち知識は共同の活動と対話を通じて共に構成されます。[[group-work|グループワーク]]はその最も具体的な形式的実装であり——共有の成果物、そして多くの場合共有の成績を生み出すチームです。両者は密接に関連していますが同一ではありません。グループは本物の協働なしに機能しうる（課題が独立した部分に分割され、作業が単に統合されるだけ）し、協働は正式なグループなしにも起こりえます（ペア、学級全体の対話、あるいは人間と[[student-ai-interaction|AI とのインタラクション]]）。AI はまさにこの隙間に最も強く作用します——[[chen-zou-genai-group-assessment-agency-2026|Chen and Zou (2026)]] は、個人の[[generative-ai|生成 AI]] の実践が集団の能力にならなかったグループ（課題が共同作業を要求しなかったため）と、共有成績が生成 AI の利用を協調問題にしてしまったグループを見出しました。[[group-work|グループワーク]]のページはこうした力学を詳しく検討します。このページは協働学習全体に向けたより広い視点を保ちます。

**協働のパートナーとしての AI** は、グループ学習における AI の役割を探究します。**[[polished-artifacts-fragile-engagement-2026|Kimmerle]]** は、学習者が AI を使って洗練された知識の成果物を作る際に生じる認識的営みの縮小というリスクを概念化し、認知的葛藤を保つ論争的なパートナーとして AI を構造化することを提唱しています。教室規模でこれを検証した[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] は、入門レベルの社会科学の学生（n = 154）に論証的なエッセイを書かせ、ChatGPT、Gemini、Claude などの[[llm|LLM]] から批評を受け取ったうえでそれを取り入れたり反論したりさせました。ブラインド評価者は、回答の 92.7% に省察が、87.8% に LLM の主張に対する積極的な反論を見出しました（評価者間の κ 値 = 0.81–0.89）。これは学習者が、批評の持つ認知的葛藤を明け渡すのではなく保つ[[critical-thinking|批判的]]な受け手として振る舞ったことを示す証拠です。**[[epistemic-emotions-collaborative-problem-solving]]** は、AI との協働的な[[problem-solving|問題解決]]において感情がどう形作るかを検討します。**[[hingle-collaborative-ai-literacy-2025]]** は、[[ai-literacy|AI リテラシー]]の発達への協働的アプローチを探究します。

促進者の支持は、学生が逆張りするエージェントを受け入れるかどうかに観測された中で最も強い梃子です。twelve の学際職種横断チームでは、教員促進者が AI の統合に影響を与えたチームは、それをよりチームの一部として評価し（M = 3.08 対 2.64）、そのフィードバックもより有益だと評価しました（M = 3.44 対 2.93）（[[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]]）。

**AI に媒介されたピア協働** は、AI が人間対人間の協働をどう[[scaffolding|足場かけ]]するかを検討します。**[[golrang-propact-pair-programming-2026]]** と **[[agent-voice-accents-k12-group-learning]]** は、AI エージェントの特性がグループ力学にどう影響するかを探究します。**[[ai-agents-peer-learning-discourse]]** は、互いに教え合う[[agentic-ai|AI エージェント]]が、人間のピア学習に似た談話パターンを生み出すことを記録しています。学級全体のシステムはこれを協働の*関係的な*次元へと拡張します。**[[breideband-community-builder-cobi-2026|CoBi]]** は音声認識と言語理解を用いて「高める」小グループ談話（互いに尊重し、公平で、コミュニティへの献身があり、思考を前に進めること）を検出し、非評価的な学級レベルの[[visualization]] を返してコミュニティ形成と協働スキルを支えます。[[privacy]] と[[trust]]を守るため、学生個人レベルやグループレベルのフィードバックは意図的に差し控えられます。

**協働における神経多様性の視点** は、重要な設計要件を明らかにします。**[[neurodivergent-computing-students|Zastudil et al.]]** は、神経多様性のある学生が構造化された課題、役割が明示的に定義された小さく安定したチーム、予測可能なインタラクションパターンを必要とすることを見出しました——AI 協働ツールが受け入れなければならない要件です。これは協働学習を[[inclusive-learning]]と[[neurodiversity]]に結びつけます。

**教師と AI の協働** は、教師と AI がどう共に働くかを検討します。**[[teacher-student-agency-orchestration]]** と **[[teacher-ai-teaming-five-levels]]** は人間と AI の協働的な教授のための枠組みを探究し、[[teacher-role]]と[[human-in-the-loop-ai]]につなげます。

**教授法的な媒介者としての AI** は、AI の役割を道具や同僚を超えて協働の中に再概念化します。社会文化理論と[[distributed-cognition|分散された認知]]に依拠し、**[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]** は AI を、インタラクションの編成、認識的な意味形成、調整的な過程における能動的な参加者として位置づけます。学習者や教師の主体性を奪うことなく、行為主体性・権威・責任を人間と非人間のアクターにわたって再分配するのです。これは協働学習を、個人主義的なものではなく社会的に媒介され共に調整される AI の見方に据えます。

**協働のモードと効率性–調整のトレードオフ。** 複雑な問題解決に取り組む大学生が AI と協働する実証研究は、three つの異なるモード——*委ねられた推論*、*協働的な解釈*、*委ねられた敷衍*——を特定します。最も効率的なモード（委ねられた推論）は最高の課題達成度を生む一方で学習者の自己調整的な関与は最も低く、最も自己調整が高いモード（協働的な解釈）は課題の成果では振るいません。（[[hao-human-ai-collaborative-problem-solving-cognition]]）これは中心的な設計上の緊張を明らかにします。すなわち協働学習環境は、人間と AI の分散されたシステムの効率性と、学習者の[[self-regulated-learning|調整的]]関与の深さとを釣り合わせなければなりません。

AI が支える協働作業について利用可能な唯一のメタ分析の対照は、生成 AI が支える PBL/PjBL 介入の内部にあり、そこでピア協働は個人作業の g = 0.416 に対して g = 0.885 を集計しましたが、その差は限界的な傾向にとどまり（QM = 3.675, p = .055）、個人作業側は two 研究に依拠しています——つまり生成 AI の下で協働が一人で働くことに勝るという集計的証拠は、示唆的ではあっても確立されたものではありません（[[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et al. 2026]]）。

18 研究のスコーピング・レビューは、グループワークにわたって同じトレードオフを記述します。生成 AI は知識の発達、アイデア創出、コミュニケーションの効率を支える一方で、ピアとのやり取り、交渉、集合的な意味形成への要求を減らし、ランダム化比較試験では AI の提案がより革新的になった一方で参加者の全体的な革新性には有意な向上が見られませんでした（[[wei-perkins-genai-student-collaboration-scoping-2026|Wei and Perkins (2026)]]）。

**役割設計は、協働的な知識構成の量ではなく質を左右する梃子である。** [[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al. (2026)]] は、16 グループの[[higher-ed|大学院生]] 58 人とその AI パートナーに、司会・分析・論弁の役割を交代させ、その構造がグループのマインドマップの*内容*をほぼ SOLO の一段引き上げた（M = 3.65 から 4.59、z = 3.771、p < 0.001）一方で、ノード数と枝数は横ばいだった——網羅ではなく整理——ことを見出しました。その代償として協働的な[[cognitive-offloading|認知的負荷]]が中程度に上昇しました（p = 0.023）。[[network-analysis|ラグ逐次分析]]は、道具だけでは生まれなかった評価的な自己転移と葛藤から防御への経路を加え、[[human-ai-collaboration|人間と AI の協働]]を道具の問題ではなく設計の問題として位置づけました。

**小グループにおける生成 AI——エージェントとして、そして空間として——モードが重要である。** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] は、チームが生成 AI にどうアクセスするかが協働を形作ることを観察しています。同期作業で単一の共有インターフェースを用いる場合、チームは「集合的なプロンプト」を共に構成し、表出–評価–埋め込みのサイクルを回し、チャットを共有の記憶として扱います。非同期作業では、私的なプロンプトと出力の「ラベル剥がし」が[[explainable-ai|透明性]]を分断し、共有の認知的モデルを保つコストを高めます。彼らの生成 AI が支える協働作業（GSCW）という視座は、生成 AIを設定可能なエージェント（個人のアシスタントからチームの一員まで）であり対話的な協働空間であるものとして捉えます——アクセスの構成を、インタラクティブな関与の[[icap-framework|ICAP]]に関連する質に直接結びつけるのです。

**生成 AI をグループの協調の基盤として——そして平坦化された協力のリスク。** [[chen-zou-genai-group-assessment-agency-2026|Chen and Zou (2026)]] は、成績評価されるグループ発表において fifteen グループの教育実習生が生成 AI にどう対処したかを示します。その分かれ方は、グループへの圧力が AI への依存を高めるという通念に反します。Five グループは利用を強め、見知った協働上の問題——仲間のセクションに何が書かれているか分からない——を解くためにそれをチャットボットに与え、理解可能にし自分の部分と整合させました。ある one グループはサイクルを*議論 → 生成 AI への表出 → 集団による検討 → 再議論*として再構築しました。著者らはこれを[[cognitive-offloading|認知的オフロード]]以上のものとして読みます。判断は学生の側に残り、道具が協調を吸収したからです。ただし、より滑らかなワークフローが、結束が通常築かれる不一致を迂回してしまい、関係的な労働を未決の問題にしていると指摘します。Seven グループは逆に生成 AI の利用を減らし、共有の教室で築かれた[[situated-learning|状況づけられた]]知識（「AI はあなたが打ち込んだあの瞬間しか知らない」）、仲間への[[bias-mitigation|公平さ]]、グループ間の独創性、そしてグループがすでに持っていた視点の多様性を守りました。Three グループはまったく変化がありませんでした。課題が独立したセクションに分割されたため、個人的に洗練された生成 AI の実践が集団の能力になることはなく、一貫性は明示的な評価基準だったにもかかわらずです。このパターンは、グループが AI で何をするかを決めるのは道具ではなくグループの規範であり、集団的な採用はコミットメントを高めるよりもむしろ[[ai-misuse-learning-harm|悪用のリスク]]を下げるようだと示唆します。

**教授の対象としての協働。** [[golrang-propact-pair-programming-2026|ProPACT]] は、ペアプログラミングのための AI 駆動の[[intelligent-tutoring|適応的な個別指導システム]]であり、個人ではなく*二項*——を分析の単位として扱います。共同の視覚的注意、共同の認知的労力、瞳孔に基づくシグナルをリアルタイムでモデル化し、協働の破綻を最大 30 秒前に予測して発生前に介入します。積極的なフィードバックを受けた二項は、デバッグの成功率が実質的に高く課題をより効率的に完了し、その後も協働的な調整に持続的な向上を示しました——これは AI が課題を支えるだけでなく協働そのものを教えられることを示す証拠です。協働的な力量を測ることは、協働的な問題解決（CPS）スキルを大規模に評価するという相補的な課題を提示します。伝統的にはシミュレーション課題からの過程データを CPS の行動に手作業で符号化する必要があり、時間がかかり大規模には非現実的です。事前学習済み言語モデルの[[prompt-engineering|文脈を踏まえたプロンプト]]は、文脈上の依存関係をモデル化し認知的・社会的能力を融合させることでこの符号化を自動化し、強力なベースラインを上回る性能を達成します。

**グループの対話の順序に足場をかけよ。頻度ではない。** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] は 65 人の学生の三者対話の系列を掘り起こし、言い換え→提案→問いかけという一つの順序が向上と結びつき、その逆は結びつかなかったことを見出しました。最大限の足場は課題に沿った行動を高めた一方で、台本化も増やし問題解決の指標は減らしました。

**中立な媒介者としての AI——そして中立でなくなったときの緊張。** [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] は、Discord ベースの[[llm]]プローブで、学際的な学生チームの学問的境界を媒介します。暗黙の前提を表面化させ、匿名化された総括を共有の議論に返すのです。学生はそれを認知的支援であると同時に関係的な緩衝材として評価しましたが、中心的な緊張が浮かび上がりました。すなわち AI に知覚される中立性は支えとなるものであり、AI が中立な媒介者から助言者や異議提示者へと移行すると損なわれました——これは協働を媒介しながら[[human-ai-collaboration]]と[[trust-calibration]]を保つ[[pedagogical-agent|エージェント]]にとって重要な設計上の制約です。

**構造化された促進プロトコル——とその追従のリスク。** [[ethics-training-agents-group-ethics-discussion-2026|Seo et al. (2026)]] は、協働的な[[learning-design|学習設計]]を、発散–熟議–収束の構造化されたプロトコルで拡張します。LLM の促進者が発言の順番を積み上げ、各段階に時間を配り、段階的に総括します。45 人の学生が単純で議論らしいと評価したこの形式は、外部の促進の必要性を減らしました。この設計は、研究が直接測定した緊張に依っています。すなわちエージェントは視点取得の幅を支え（グループはより大きく多様なステークホルダーと解法の集合を生み出し、エージェントは一貫して少数派の見解を述べ）ましたが、[[ai-sycophancy|追従的]]で推論を伴わない賛同は、協働が思考を深める上で不可欠な認知的葛藤を平坦化しました。参加者は、結論だけでなく中間的な熟議の過程を露わにするエージェントの出力と、真正の不一致を保つ反論を求めました。

**AI 教育のための協働的な構造。** [[academic-league-of-ai-2026|学術 AI リーグ]] は、民主的な学生[[governance]]とプロジェクトチームを通じて AI 教育を組織し、[[active-learning]]と[[project-based-learning]]を協働的でコミュニティと結びついた構造に埋め込みます。

### ICAP 枠組み——最高の関与モードとしての協働

協働学習は[[icap-framework|ICAP 枠組み]]（インタラクティブ–コンストラクティブ–アクティブ–パッシブ）の頂点に位置します。*インタラクティブ* なモード——対話を通じて意味を共に構成すること、立場を擁護すること、共に解くこと——は Chi の分類において最も深い知識の変化を生みます。これは ICAP を、協働的な教授法の正当化と AI への設計上の制約の両方にします。議論を媒介する AI（[[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] や [[golrang-propact-pair-programming-2026|ProPACT]] がそうするように）は、まさに*インタラクティブ* な関与を持続させるときに価値を持ちます。グループのために答えたり認知的葛藤をならし取ったりする AI は、協働を単なる*アクティブ* や*パッシブ* なモードに格下げしえます。ICAP に基づく注釈（[[icap-cognitive-engagement-llm-agents|協働的対話の関与を測る拡張 ICAP]] 参照）も、促進のタイミングに関する研究も、インタラクティブな談話の質を関心の対象として扱い、協働学習を[[student-engagement]]と ICAP の階層に据えます。（[[icap-cognitive-engagement-llm-agents]]）（[[llm-facilitation-timing-online-discussions]]）

## 実践上の指針

- **個人だけでなく協働そのものをモデル化せよ。** 二項やグループの状態を追跡する道具（[[golrang-propact-pair-programming-2026|ProPACT]] のように）は、協働そのものに足場をかけ、破綻に反応するのではなく予測して防ぐことができます。
- **認知的葛藤を保て。** 不一致や暗黙の前提を表面化させる論争的なパートナーとして AI を構造化し、AI が脆い認識的関与をならし取ってしまう「洗練された成果物」の問題を避けてください。
- **逆張りするペルソナには感情的なコストが伴う。** 97 の三者グループにわたって、逆張りする AI は談話を問いかけと省察へと向かわせましたが、チームワークの満足度（ε² = .062）と心理的安全性（ε² = .114）を下げ、創造的な出力は高めませんでした（[[jin-emergent-learner-agency-implicit-hai-2026|Jin et al. (2026)]]）。
- **エージェントの機能を意図する成果に合わせよ。** コンピュータ支援協働学習における AI エージェントの 46 研究のレビューでは、認知的向上は一貫して報告される一方で、行動的・社会的・感情的成果は文脈依存的で、エージェントの機能と成果の最も強い整合は同じ領域の内側に見られました（[[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]）。

- **独立した促進者の役割が減らすのは支配性であり、応答性ではない。** [[astra-multi-agent-tutoring-benchmark-2026|Oyelere (2026)]] のシミュレーションされたベンチマークでは、個別指導者に加えて促進者エージェントを置くと、二項間の発言数と語数の不均衡が下がりました（M = 0.103 と 0.105 対 0.183 と 0.182）が、相互的な関与は変わりませんでした——もっとも学習者は合成されたペルソナであり、実在の二項ではありませんでした。
- **効率性と自己調整を釣り合わせよ。** 課題の効率性を最大化する協働的な AI（委ねられた推論）は学習者の調整的関与を損ないえます。設計は、協働的な解釈の余地を意図的に守るべきです。
- **中立性の制約を尊重せよ。** AI の媒介者は中立である間だけ信頼されます。助言的・異議提示的な役割に移るとその信頼は不安定になるので、役割の切り替えは明示的で設定可能にすべきです。
- **神経多様性のある学習者を受け入れよ。** 構造化された課題、小さく安定したチーム、明示的な役割定義は、AI 協働ツールが支えなければならない要件です。
- **非評価的な学級レベルのフィードバックを選べ。** 協働の関係的な次元を支える際、学級全体で集計されたフィードバックは、個人の採点が監視されているように感じられる場面で[[privacy]]と[[agency|学生の主体性]]を守ります。[[breideband-community-builder-cobi-2026|CoBi]] の学生は[[quantitative-research|量的な]]視覚化（レーダーチャート）よりも[[qualitative-research|質的な]]視覚化（有機的な樹形図）を好み、教師はライブ表示よりも、システムが気づいたことを熟考のきっかけに使うことに価値を見出しました。
- **貢献に先立つ閲覧と注意に向けて設計せよ。** [[online-teaching-and-learning|オンライン討論]]フォーラムにおける協働学習は、投稿だけでなく、それに先立つ読みに依存します。[[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] は、LLM が生成した討論の要約や模範投稿が、航行的な[[scaffolding|足場]]として働き、学生の仲間の貢献への接点と、弱いつながりの社会関係資本のためのネットワーク条件を広げられることを示しています——この支援は、学業負荷の下で関与を持続させる社会教授法的な方略を補うものであって、置き換えるものではありません。
- **社会的な側面には、相殺する利益のない混乱が見られる。** five つの協働の過程にわたって 30 人の専門家の合意は「脆弱性」にのみ達し、向上の評価は基準を下回りました。社会的なつながり（3.80 対向上 1.90）、社会情緒的な発達（3.60 対 2.00）、社会的学習、協働学習、帰属意識（すべて 3.30）（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon et al., 2026]]）。報告書はこの非対称性を設計上の標的として扱っています。協働的な問題解決は共有の成果物に係留されている一方で、協働学習には目に見える照合対象がなく、気づかれないまま蝕まれうるからです。

## 関連する概念
- [[pedagogical-patterns]] — 台本化された AI 共有協働と、その検証された役割設計
- [[pedagogical-partnerships]] — 教授法的パートナーシップ
- [[group-work]] — グループワーク
- [[problem-based-learning]]
- [[online-teaching-and-learning]] — オンライン教授と学習
- [[active-learning]]
- [[icap-framework]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[inclusive-learning]]
- [[neurodiversity]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[project-based-learning]]
- [[human-ai-collaboration]]
- [[trust-calibration]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[student-engagement]]
- [[pedagogy]] — 傘: AI 教育における教授法と教授方略

## 関連する記事
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - 30 人の専門家の合意が一面的な社会的リスクを見出す——向上の道のない協働過程の脆弱性
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — 生成 AI が支える教育の有望な枠組みとしての課題基盤型・プロジェクト基盤型学習——システマティック・レビューと三段階メタ分析から浮かぶ新しい証拠
- [[jin-emergent-learner-agency-implicit-hai-2026]] — 暗黙の人間と AI の協働における創発的な学習者の主体性——支援的ペルソナと逆張りペルソナ
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[polished-artifacts-fragile-engagement-2026]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[neurodivergent-computing-students]]
- [[teacher-student-agency-orchestration]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[golrang-propact-pair-programming-2026]] — ProPACT——ペアプログラミングのための積極的な AI 適応協働個別指導システム
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Spritz——学生プロジェクトチームにおける AI による学問的境界の媒介
- [[academic-league-of-ai-2026]] — 学術 AI リーグ——協働的でプロジェクト基盤型の AI 教育
- [[icap-cognitive-engagement-llm-agents]] — 協働的対話における関与を測るための拡張 ICAP 枠組み
- [[llm-facilitation-timing-online-discussions]] — オンライン協働討論における LLM の促進のタイミング
- [[ba-ai-agents-cscl-review-2026]] — コンピュータ支援協働学習のレビューにおける AI エージェント
- [[wei-perkins-genai-student-collaboration-scoping-2026]] — 生成 AI と学生のグループワーク——スコーピング・レビュー（Wei & Perkins 2026）
- [[astra-multi-agent-tutoring-benchmark-2026]] — マルチエージェント個別指導と参加の均衡した協働のための ASTRA 合成ベンチマーク
- [[xu-genai-collaborative-space-2026]] — 小グループ力学における生成 AI——エージェントかつ協働空間として（Xu et al. 2026）
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — オンライン討論フォーラムにおける AI 生成要約駆動の学習設計
- [[chen-zou-genai-group-assessment-agency-2026]] — 学生グループにおける協調の基盤としての生成 AI——強化された利用、抑制された利用、そして実現されなかった利用
- [[ethics-training-agents-group-ethics-discussion-2026]] — 倫理訓練エージェント——役割演技と討論による集団ベースの倫理教育の促進——倫理的な省察と探究のために
