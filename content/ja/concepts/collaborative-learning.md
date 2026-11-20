---
title: 協働学習
created: "2026-10-10T22:03:49-04:00"
updated: "2026-11-19T06:40:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/collaborative-learning
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
connected_concepts: [pedagogical-patterns, pedagogical-partnerships, group-work, problem-based-learning, online-teaching-and-learning, active-learning, icap-framework, scaffolding, teacher-role, human-in-the-loop-ai, equity-in-ai-education, ai-literacy, k-12, higher-ed, inclusive-learning, neurodiversity, distributed-cognition, self-regulated-learning, project-based-learning, human-ai-collaboration, trust-calibration, pedagogical-agent, student-modeling, student-engagement, pedagogy]
connected_articles: [nixon-social-cost-ai-teammate-2026, lin-ai-peer-collaborative-mathematics-2026, genai-support-threaten-learning-k20-expert-consensus-2026, chen-pbl-pjbl-genai-meta-analysis-2026, jin-emergent-learner-agency-implicit-hai-2026, adaptive-ai-scaffold-collaborative-problem-solving-2026, genai-counter-learner-groupthink-2025, polished-artifacts-fragile-engagement-2026, epistemic-emotions-collaborative-problem-solving, hingle-collaborative-ai-literacy-2025, neurodivergent-computing-students, teacher-student-agency-orchestration, niari-ai-pedagogical-mediator-collaborative-learning, hao-human-ai-collaborative-problem-solving-cognition, golrang-propact-pair-programming-2026, spritz-ai-disciplinary-mediation-student-teams-2026, academic-league-of-ai-2026, icap-cognitive-engagement-llm-agents, llm-facilitation-timing-online-discussions, ba-ai-agents-cscl-review-2026, wei-perkins-genai-student-collaboration-scoping-2026, astra-multi-agent-tutoring-benchmark-2026, xu-genai-collaborative-space-2026, breideband-community-builder-cobi-2026, oppenheimer-llms-collaborative-learning-partners-2026, hao-peer-exposure-bridging-social-capital-ai-summaries-2026, chen-zou-genai-group-assessment-agency-2026, ethics-training-agents-group-ethics-discussion-2026, chen-bertopic-ai-online-learning-research-topics-2026, wang-genai-metacognitive-prompting-preconceptions-2026, bjet-many-hands-make-light-work-2026, alam-process-oriented-collaborative-essays-2026]
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

協働学習は、知識構築を本質的に社会的なものと位置づける学習の[[sociocultural-learning|社会文化的理論]]に基づいている。AIは新たな力学をもたらす。AIは仲間、ファシリテーター、あるいは協働過程の参加者として機能しうる。研究は、AIが媒介する協働が[[learning-gains|学習成果]]、認識的関与、[[equity-in-ai-education|公平性]]にどのように影響するか——そして多様な学習者を受け入れるために協働の構造をどのように設計しなければならないか——を探究している。

**構成概念としての協働と構造としてのグループワーク。** 協働学習はより広い理論である。知識は共同活動と対話を通じて共構築される。[[group-work|グループワーク]]はその最も具体的で形式的な実装であり、共通の成果物、そしてしばしば共通の評定を生み出すチームである。両者は密接に関係するが同一ではない。グループは真正の協働なしに機能しうる（課題が独立した部分に分割され、作業が単に統合されるだけの場合）し、協働は形式的なグループなしにも生じうる（ペア、学級全体の対話、あるいは人間と[[student-ai-interaction|AIの相互作用]]）。AIが最も強く圧力をかけるのはまさにこの隙間である——[[chen-zou-genai-group-assessment-agency-2026|Chen and Zou (2026)]]は、課題が共同作業を要求しなかったために個々の[[generative-ai|GenAI]]実践が集団的能力へと決して発展しなかったグループと、共有された評定がGenAI利用を調整の問題に変えたグループとを見出した。[[group-work|グループワーク]]はこれらの力学を詳細に検討し、協働学習はより広い枠組みである。

**協働パートナーとしてのAI**は、グループ学習におけるAIの役割を検討する。**[[polished-artifacts-fragile-engagement-2026|Kimmerle]]**は、学習者がAIを使って洗練された知識成果物を作り出す際に認識的努力が低下するリスクを概念化し、認知的葛藤を保持する議論のパートナーとして構造化されたAIを提唱する。これを教室規模で検証した[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]]は、社会科学の入門科目の学生（n = 154）に論証的なエッセイを書かせ、ChatGPT、Gemini、Claudeなどの[[llm|LLM]]から批評を受け、それを踏まえて取り込むか反論させた。盲検化されたコーダーは、応答の92.7%に内省を、87.8%にLLMの主張への積極的な反論を認めた（評価者間κ = 0.81–0.89）。これは、学習者が批評の認知的葛藤を放棄するのではなく保持する[[critical-thinking|批判的]]な受け手として行動したことの証拠である。**[[epistemic-emotions-collaborative-problem-solving|Anindho et al. (2026)]]**は、感情がAIとの協働的な[[problem-solving|問題解決]]をどのように形づくるかを検討する。**[[hingle-collaborative-ai-literacy-2025|Hingle et al., 2025]]**は、[[ai-literacy|AIリテラシー]]育成への協働的アプローチを探究する。

ファシリテーターによる是認は、学生があえて異を唱えるエージェントを受け入れるかどうかについて、観察された中で最も強く働く要因である。12の多職種連携チームにおいて、教員ファシリテーターがAIの統合に影響を与えたチームは、AIをよりチームの一部として評価し（M = 3.08 対 2.64）、そのフィードバックをより有用と評価した（M = 3.44 対 2.93）（[[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]]）。

**AIが媒介するピア協働**は、AIが人間同士の協働をどのように[[scaffolding|足場かけ]]するかを検討する。**[[golrang-propact-pair-programming-2026|Golrang et al. (2026)]]**と**[[agent-voice-accents-k12-group-learning|Ravi et al. (2026)]]**は、AIエージェントの特性がグループの力学にどう影響するかを探究する。**[[ai-agents-peer-learning-discourse|Eason Chen et al. (2026)]]**は、互いに教え合う[[agentic-ai|AIエージェント]]が人間のピア学習に似た談話パターンを生み出すことを記録している。学級全体のシステムは、これを協働の*関係的*次元へと拡張する。**[[breideband-community-builder-cobi-2026|CoBi]]**は、[[speech-and-voice-technologies|音声認識]]と言語理解を用いて「高め合う」小集団の談話（尊重している、公平である、コミュニティにコミットしている、思考を前進させている）を検出し、コミュニティ形成と協働スキルを支えるために非評価的な学級レベルの[[visualization|可視化]]を返す。そして[[privacy|プライバシー]]と[[trust|信頼]]を守るため、学生個人やグループレベルのフィードバックは意図的に提供しない。

**協働に関するニューロダイバージェントの視点**は、重要な設計要件を明らかにする。**[[neurodivergent-computing-students|Zastudil et al.]]**は、ニューロダイバージェントな学生が、構造化された課題、役割が明示的に定義された小規模で顔ぶれの一貫したチーム、予測可能な相互作用パターンを必要とすることを見出した——AI協働ツールが満たさなければならない要件である。これは協働学習を[[inclusive-learning|インクルーシブ学習]]と[[neurodiversity|ニューロダイバーシティ]]に結びつける。

**教師とAIの協働**は、教師とAIがどのように共に働くかを検討する。**[[teacher-student-agency-orchestration|Bella et al. (2026)]]**と**[[teacher-ai-teaming-five-levels|Cukurova et al. (2025)]]**は、人間とAIの協働的指導の枠組みを探究し、[[teacher-role|教師の役割]]と[[human-in-the-loop-ai|ヒューマン・イン・ザ・ループ]]に結びつく。

**[[pedagogy|教育学的]]媒介者としてのAI**は、協働におけるAIの役割を、道具や仲間を超えて再概念化する。社会文化的理論と[[distributed-cognition|分散認知]]を踏まえ、**[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]**は、AIを相互作用、認識的な意味生成、調整過程のオーケストレーションにおける能動的参加者と位置づけ、学習者や教師のエージェンシーを置き換えることなく、人間と非人間の行為者の間でエージェンシー、権威、責任を再配分する。これは協働学習を、個人主義的な見方ではなく、社会的に媒介され共調整されるAIの見方に基づけるものである。

**協働の様式と効率性—調整のトレードオフ。** 複雑な問題解決のためにAIと協働する大学生を対象とした実証研究は、*委任推論*、*協同的解釈*、*委任された精緻化*という3つの異なる様式を特定している。最も効率的な様式（委任推論）は最も高い課題遂行をもたらすが、学習者の自己調整的関与は最も低くなる。一方、自己調整が最も大きい様式（協同的解釈）は課題成果において劣る（[[hao-human-ai-collaborative-problem-solving-cognition|Hao et al., 2026]]）。これは中心的な設計上の緊張を明らかにする。協働学習環境は、分散した人間—AIシステムの効率性と、学習者の[[self-regulated-learning|調整的]]関与の深さとのバランスを取らなければならない。

AIが支援する協働作業について利用可能な唯一のメタ分析的対比は、GenAIが支援するPBL/PjBL介入の中にあり、そこではピア協働がg = 0.885でプールされ、個人作業のg = 0.416を上回ったが、その差は有意傾向にとどまり（QM = 3.675、p = .055）、個人作業側は2つの研究に依拠している——したがって、GenAIの下で協働が単独作業を上回るというプールされた証拠は、確立されたものではなく示唆的なものである（[[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et al. 2026]]）。

分野レベルのマッピングは、反対方向から同じ結論に至る。2010年から2023年までのオンライン学習におけるAIに関する1,048件の出版物を対象としたBERTopic分析は、AIが支援する協働学習とコミュニティ形成に関する社会的志向の研究が、支配的なトピックとして浮上することは一度もなかったことを見出し、著者らはこれを、個人レベルの[[learning-analytics|分析]]に中心を置く文献群に帰している（[[chen-bertopic-ai-online-learning-research-topics-2026|Chen et al. (2026)]]）。

18件の研究を対象とした[[meta-analysis-systematic-review|スコーピングレビュー]]は、グループワーク全体にわたって同じトレードオフを描き出す。GenAIは知識の発展、アイデア生成、コミュニケーション効率を支える一方で、ピアとの相互作用、交渉、集団的な意味生成の必要性を低下させ、ランダム化された証拠では、AIの提案がより革新的になったにもかかわらず、参加者全体の革新性に有意な向上は認められなかった（[[wei-perkins-genai-student-collaboration-scoping-2026|Wei and Perkins (2026)]]）。

ランダム化された証拠は、その関係的コストに数値を与える。[[nixon-social-cost-ai-teammate-2026|Nixon et al. (2026)]]は、33の学生チームを、学生2名＋AIチームメイトの条件と学生3名の条件に割り当てた。AIを含むチームでは、学生は互いの発言を踏まえて発展させることが少なく（応答性 g = −0.78）、所属感も低く報告された（4.58 対 5.27）。そしてその低下は、AIが占めた発言時間の量に対応していた。

**役割設計は、協働的知識構築の量ではなく質を左右するテコである。** [[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al. (2026)]]は、16グループの58名の[[higher-ed|大学院生]]とそのAIパートナーに、モデレーター、分析者、論争者という役割を交代で割り当てた。そしてこの構造が、グループのマインドマップの*内容*をSOLOのバンドでほぼ1段引き上げた（M = 3.65から4.59、z = 3.771、p < 0.001）一方、ノード数と分岐数は横ばいであった——カバー範囲ではなく構造化である——ことを見出したが、その代償として協働の[[cognitive-offloading|認知的負荷]]が中程度に上昇した（p = 0.023）。[[network-analysis|ラグ逐次分析]]は、ツール単独では生じなかった評価への自己遷移と、葛藤から立場の擁護への経路を追加し、[[human-ai-collaboration|人間とAIの協働]]をツールの問題ではなく設計の問題として位置づけた。

**小集団におけるエージェントかつ空間としてのGenAI——様式が重要である。** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]]は、チームが*どのように*GenAIにアクセスするかが協働を形づくると述べている。同期作業で単一の共有インターフェースを用いる場合、チームは「集団的プロンプト」を共構築し、表出—評価—埋め込みのサイクルを回し、チャットを共有メモリとして扱う。非同期作業では、私的なプロンプト入力と出力の「脱ラベル化」が[[explainable-ai|透明性]]を分断し、共有された認知モデルを維持するコストを高める。彼らのGenAI支援協調作業（GSCW）というレンズは、GenAIを設定可能なエージェント（個人のアシスタントからチームの一員まで）であり、かつ相互作用的な協働空間として捉え、アクセスの構成を、[[icap-framework|ICAP]]に関わる相互作用的関与の質に直接結びつける。

**グループ調整のインフラとしてのGenAI——そして協力が平坦化するリスク。** [[chen-zou-genai-group-assessment-agency-2026|Chen and Zou (2026)]]は、15の教職課程の学生グループが、成績評価を伴うグループプレゼンテーションでGenAIをどう扱ったかを示しており、その分かれ方は、グループの圧力がAIへの依存を高めるという通常の想定に反している。5つのグループは、よく知られた協働上の問題——仲間の担当部分に何が書かれているか分からない——を解決するために利用を強め、その作業をチャットボットに投入して理解可能にし、自分たちの部分を整合させた。あるグループは自らのサイクルを*議論→GenAIへの外在化→集団的検討→再議論*として組み直した。著者らは、学生が判断を保持したままツールが調整を引き受けたのだから、これは[[cognitive-offloading|認知的オフローディング]]以上のものと読むが、より滑らかなワークフローが、従来結束が築かれてきた不一致を迂回してしまう可能性を指摘し、関係的な労働を未解決の問いとして残す。7つのグループは逆にGenAIの利用を減らし、共有された教室で築かれた[[situated-learning|状況的]]知識（「AIはあなたが打ち込んだその瞬間しか知らない」）、グループメンバーへの[[bias-mitigation|公平性]]、グループ間の独自性、そしてグループが既に保持していた視点の多様性を守った。3つのグループはまったく変化を見せなかった。課題が独立した部分に分割されていたため、個人としては洗練されたGenAIの実践も集団的能力にはならず、一貫性が明示的な評価基準であったにもかかわらずそうであった。このパターンは、グループがAIで何をするかを決めるのはツールではなくグループの規範であることを示唆する——そして集団的な採用は、コミットメントを高めるのではなく、[[ai-misuse-learning-harm|誤用のリスク]]の知覚を下げうることも。

**グループの認識的構成がAIの位置を決めるのであり、利用頻度ではない。** [[wang-genai-metacognitive-prompting-preconceptions-2026|Wang et al. (2026)]]は、14の教職課程学生グループに、エネルギーの形態に関する60分間のGo-Lab探究活動の中で、学習者が起動する[[metacognition|メタ認知]]チャットボットを与えた。8グループは異なる事前概念を、6グループは類似した事前概念を持ち、[[prior-knowledge|事前知識]]は同等であった（U = 293.50、p = 0.515）。どちらの種類のグループも同程度の質問をし、39件のプロンプトは18件と21件に分かれ、機能の分布も重なっていた。分かれたのは、その取り上げ方であった。

プロセスマイニングは、多様なグループではAIへの問い合わせの交渉が統合のハブに位置し、3本の入力経路と2本の出力経路を持ち、55.6%のケースで概念の言明から到達されることを示した。一方、事前概念が類似したグループでは、それは問い合わせ→処理という直線的な経路上に位置した。多様なグループはAIの出力に対する肯定的または中立的な評価を維持したが、類似したグループは否定的な評価を維持した。著者らはこれを部分的に、グループが既に合意した後に到着する、先回りして発言するエージェントに帰している。39件のプロンプトのうち12件では、短い情報要求のフォローアップに対して範囲の明確化が返されており、これが、メタ認知プロンプトと手続き的プロンプトを分離する要求分類層を設けるべきだという彼らの論拠である。

**指導の対象としての協働。** [[golrang-propact-pair-programming-2026|ProPACT]]は、ペアプログラミングのためのAI駆動の[[intelligent-tutoring|適応的チューター]]であり、個人ではなく*ダイアド*を分析単位として扱う。共同視覚注意、共同の心的努力、瞳孔に基づく信号をリアルタイムでモデル化し、協働の破綻を最大30秒前に予測して、それが生じる前に介入する。先回りのフィードバックを受けたダイアドは、デバッグの成功率が大幅に高く、課題をより効率的に完了し、その後も協働的調整の持続的な向上を示した——AIが課題を支援するだけでなく、協働そのものを教えられることの証拠である。協働的コンピテンスの測定は、協働的問題解決（CPS）スキルを大規模に評価するという相補的な課題を提起する。従来これは、シミュレーション課題からのプロセスデータをCPS行動へと手作業でコーディングすることを必要とし、時間がかかり大規模には非現実的であった。事前学習済み言語モデルへの[[prompt-engineering|文脈を考慮したプロンプティング]]は、文脈依存性をモデル化し、認知的能力と社会的能力を融合することでこのコーディングを自動化し、強力なベースラインを上回る性能を達成する。

**グループの発話の頻度ではなく順序に足場をかける。** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]]は、65名の学生の3人組の対話系列をマイニングし、言い換え→提案→質問という1つの順序が改善に伴う一方、その逆は伴わないことを見出した。最大限の足場かけは課題指向行動を高めたが、同時にスクリプト化を招き、問題解決の指標を減少させた。

**グループ発話の構造分析には、スレッドの操作的定義が必要である。** [[ravi-llm-conversation-threads-collaborative-learning-2026|Ravi et al. (2026)]]は、同期的な多人数の文字記録において話題の筋を識別するためのスレッド化ガイドブックを公開した。
訓練を受けた3名の研究者による反復的な合議（social moderation）を通じて洗練され、200発話の検証用文字記録でCohenのκ = 0.89に達し、12件の文字記録（2,371発話）に適用して315本のスレッドツリーを復元した——誰が話題を開始し、誰が誰に応答し、どの貢献が取り上げられないかという、構造的な骨格である。

[[zhou-gaiva-human-ai-video-analysis-2026|Zhou, Kang and Nguyen (2026)]]は、GoodwinとDillenbourgの枠組みに基づく5カテゴリの動画エンゲージメント・コードブックによって、グループ協働の測定に非言語の軸を追加し、GPT-4oをMLLMの文字記録に適用した。帰納的に得られた周辺的エンゲージメントという構成概念——仲間への気づきと再関与の準備を伴う個人的な集中——は、いずれの指針となる理論にも直接の先例がないにもかかわらず、10/10のコーディングバッチに現れた。

**中立的な媒介者としてのAI——そして中立でなくなったときの緊張。** [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]]はDiscord上の[[llm|LLM]]プローブであり、暗黙の前提を表面化し、匿名化した統合を共有の議論に返すことで、学際的な学生チームにおける専門分野の境界を媒介する。学生はこれを、認知的支援であると同時に関係的な緩衝材として評価したが、中心的な緊張が浮かび上がった。AIが中立的だと知覚されることが全体を支えており、AIが中立的な媒介者から助言者や挑戦者へと移ると、それが侵食されたのである——これは、[[human-ai-collaboration|人間とAIの協働]]と[[trust-calibration|信頼の較正]]を保ちながら協働を媒介する[[pedagogical-agent|エージェント]]にとって重要な設計制約である。

**構造化されたファシリテーターのプロトコル——そしてその追従性のリスク。** [[ethics-training-agents-group-ethics-discussion-2026|Seo et al. (2026)]]は、構造化された発散—熟議—収束のプロトコルによって、協働的な[[learning-design|学習設計]]を拡張する。LLMファシリテーターが発話順を積み上げ、各段階の時間を管理し、逐次的に要約する形式であり、45名の学生はこれを単純で議論らしいと感じ、外部のファシリテーションの必要性が減少した。この設計は、研究が直接測定した緊張にかかっている。エージェントは視点取得の広がりを支えた（グループはより大きく、より多様なステークホルダーと解決策の集合を生み出し、エージェントは一貫して少数派の視点を表明した）が、[[ai-sycophancy|追従的]]で推論を伴わない同意は、協働が思考を深めることを可能にする認知的葛藤を平坦化してしまった。参加者は、結論だけでなく中間的な熟議のステップを露出するエージェント出力と、真正の不一致を保つ反論を求めた。

**AI教育のための協働的構造。** [[academic-league-of-ai-2026|The Academic League of AI]]は、民主的な学生[[governance|ガバナンス]]とプロジェクトチームを通じてAI教育を組織し、[[active-learning|アクティブラーニング]]と[[project-based-learning|プロジェクト型学習]]を、協働的でコミュニティと結びついた構造の中に埋め込んでいる。

**AIがチューターではなく仲間として認識される条件。** [[lin-ai-peer-collaborative-mathematics-2026|Lin et al. (2026)]]は、7名の領域専門家に、二次方程式を解く際に[[motivation|動機づけ]]の姿勢が事前計画、遂行、[[reflection|自己内省]]の各段階で変化するBig Fiveパーソナのエージェントと協働させた。参加者はエージェントを、その数学ではなく社会的行動によって判断した。非評価的な空間、ためらいのある推論、適度な不完全さ、学習者のペースへの尊重は仲間らしく読まれ、無条件の同意と過剰な指示はそれをチューターへと押し戻した。著者らはまた、保持しておくべき緊張を報告している——仲間らしさと仲間としての有用性は、常に一致するわけではなかった——これはピア協働そのものの長年のリスク、すなわち仲間同士が互いの誤りを確認し合いうるというリスクである。

### ICAPフレームワーク：最も高い関与様式としての協働

協働学習は、[[icap-framework|ICAPフレームワーク]]（Interactive–Constructive–Active–Passive）の最上位を占める。*相互作用的*様式——対話を通じて意味を共構築する、立場を擁護する、共同で解決する——は、Chiの分類において最も深い知識の変化を生み出す。これによりICAPは、協働的な教授法の正当化であると同時に、AIに対する設計制約となる。議論を媒介するAI（[[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]]や[[golrang-propact-pair-programming-2026|ProPACT]]のように）は、*相互作用的*関与を維持するときにこそ価値を持つ。グループに代わって答えてしまうAIや、認知的葛藤をならしてしまうAIは、協働を単なる*能動的*あるいは*受動的*様式へと格下げしうる。ICAPに基づくアノテーション（[[icap-cognitive-engagement-llm-agents|協働的対話の拡張ICAP測定]]を参照）とファシリテーションのタイミングに関する研究は、いずれも相互作用的談話の質を関心のある成果として扱い、協働学習を[[student-engagement|学生エンゲージメント]]とICAPの階層に基づけている（[[icap-cognitive-engagement-llm-agents|Do et al., 2026]]）（[[llm-facilitation-timing-online-discussions|Tsirmpas et al., 2026]]）。
- **GenAIはチューターの席ではなくモデレーターの席に着くことができる。** Chen et al. (2026)は、64名の学部生を対象に16週間の準実験を行い、両条件ともにAIエージェントと構造化されたプラットフォームを備え、調整の足場かけのみが異なった。すなわち、適応的なSSRLエージェントと静的なデジタルワークシートである（[[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen et al., 2026]]）。適応群は参加の平等性が高かったが強度は高くなく、これは発話量の増加ではなく再配分の特徴である。
- **相互作用的であることが自動的に深いとは限らない。** 87名の学部生を対象とした8週間の準実験では、GenAIマルチエージェントシステムと協働したペアが最も優れた設計プロジェクトを生み出した（M = 89.64、同じシステムでの単独作業は86.45）。批判的思考の意識の向上は逆の方向を示した。単独が最大（M = 0.41）、ピア協働はほぼ横ばい（M = 0.06）、AIとペアを組む条件ではわずかに負であった（M = -0.04）（[[bjet-many-hands-make-light-work-2026|Chu, Dai and Zhai (2026)]]）。構成が変えたのは、思考の量ではなく、どの種類の思考が活性化されるかであった。

## 実践上の指針

- **個人だけでなく、協働をモデル化する。** [[golrang-propact-pair-programming-2026|ProPACT]]のように二者(ダイアド)やグループの状態を追跡するツールは、協働そのものを足場化し、破綻に事後対応するのではなく、それを予測して防ぐことができる。
- **協働を課題指示ではなく成績に組み込む。** AlamとJacksonは1年次のビジネスアナリスト向けモジュールを再設計し、11チーム23名の学生が少なくとも2つの文書化された段階を経て1,500語のエッセイを反復執筆するようにし、反復と協働を明示的な採点基準とした。彼らは、プロセスの証拠を実質的な重みを持つものにするのは注意喚起ではなく成績であり、チームが自力で使えるようになる前に、協働の質は授業内で[[scaffolding|足場化]]される必要があったと論じている([[alam-process-oriented-collaborative-essays-2026|Alam & Jackson, 2026]])。
- **認知的葛藤を保つ。** AIを、意見の相違や暗黙の前提を表面化させる議論のパートナーとして構成し、AIが脆弱な認識的関与をならしてしまう「洗練された成果物」の問題を避ける。
- **反論役のペルソナには情動的コストがある。** 97の三者組(トライアド)全体で、反論役のAIは言説を挑戦と内省の方向へ押し出したが、創造的産出を高めることなく、チームワーク満足度(ε² = .062)と心理的安全性(ε² = .114)を低下させた([[jin-emergent-learner-agency-implicit-hai-2026|Jin et al. (2026)]])。

- **エージェントの機能を、意図する成果に合わせる。** コンピュータ支援協働学習におけるAIエージェントの46件の研究を対象としたレビューでは、認知的な向上は一貫して報告された一方、行動的・社会的・情動的な成果は文脈依存的なままであり、エージェントの機能と成果の対応が最も強いのは同一領域内であった([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]])。

- **独立したファシリテーター役は、応答性ではなく支配を減らす。** [[astra-multi-agent-tutoring-benchmark-2026|Oyelere(2026)]]のシミュレーションによるベンチマークでは、チューターに加えてファシリテーターエージェントを置くと、相互的関与を変えることなく、二者間の発言ターンと語数の不均衡が低下した(M = 0.103および0.105、比較条件では0.183および0.182)。ただし学習者は合成ペルソナであり、実際のダイアドではなかった。
- **効率性と自己調整のバランスをとる。** 課題効率を最大化する協働AI(推論の委任)は、学習者の調整的関与を損ないうる。設計は、共同での解釈のための空間を意図的に守るべきである。
- **中立性の制約を尊重する。** AIの媒介者は中立である限り信頼される。助言や挑戦の役割へ移るとその信頼は不安定になるため、役割の切り替えは明示的かつ設定可能にすべきである。
- **ニューロダイバージェントな学習者に配慮する。** 構造化された課題、小さく一貫したチーム、明示的な役割定義は、AI協働ツールが支えなければならない要件である。
- **評価を伴わないクラスレベルのフィードバックを優先する。** 協働の関係性次元を支える際、クラスレベルで集約したフィードバックは、個人ごとの採点では監視されているように感じられる場面で、[[privacy|プライバシー]]と[[agency|学習者のエージェンシー]]を守る。[[breideband-community-builder-cobi-2026|CoBi]]の学生は、[[qualitative-research|質的]]な可視化(有機的な樹木)を[[quantitative-research|量的]]なもの(レーダーチャート)より好み、教師はライブ表示よりも、システムの気づきを用いて内省を促すことを重視した。
- **貢献に先行する閲覧/注意を想定して設計する。** [[online-teaching-and-learning|オンライン討論]]フォーラムでの協働学習は、投稿だけでなく、それに先行する読み取りに依存する。[[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]]は、LLMが生成した討論の要約や投稿例が、他者の貢献への学生の接触と、橋渡し型(弱紐帯)ソーシャルキャピタルのネットワーク条件を広げる、ナビゲーション上の[[scaffolding|足場]]として機能しうることを示している。この支援は、学業の負荷の下で関与を維持するための社会・教育学的戦略を置き換えるのではなく、補完すべきものである。

- **社会的側面は、相殺する利得のない混乱を示す。** 5つの協働プロセスすべてにおいて、30名の専門家の合意は脆弱性のみを認定し、強化の評価は閾値を下回った。すなわち、社会的つながり(3.80、強化は1.90)、社会情動的発達(3.60、強化は2.00)、社会的学習、協働学習、帰属感(いずれも3.30)である([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon et al., 2026]])。報告書はこの非対称性を設計上の標的として扱う。というのも、協働的問題解決は共有された成果物に錨づけられている一方、協働学習には目に見える参照対象がなく、検出されないうちに侵食されうるからである。

仲間の地位は社会的に獲得される。数学的能力は判断にほとんど入らなかった。7名の熟練研究者がそれぞれ約20分かけて、ビッグファイブに基づくペルソナを備えた適応的LLMエージェントと二次方程式を解き、その後インタビューで自らの判断を説明した。彼らはほぼ全面的に振る舞いに基づいて評価した。そのエージェントは批判のない空間をつくり、断言するのではなく暫定的に推論し、適切な不完全さを示し、学習者のアイデアをそのまま残した。[[agentic-ai|エージェント]]設計にとって、これは通常の優先順位を逆転させる。有能な解答者であっても、権威として提示されれば、その答えがどれほど優れていても協働の枠組みを損なうのである([[lin-ai-peer-collaborative-math-learning-2026|Lin et al., 2026]])。

- 適応的支援については、直接的なメタ分析的推定値がすでに得られている。80本の論文(2004–2023)で報告された83件の実験および準実験研究において、協働活動に合わせて調整された支援は g = .73、95% CI [.56, .90] に統合され、個人の知識で最大(g = .93)、情動で最小(g = .28)であった([[gao-adaptive-support-collaborative-learning-meta-2026|Gao et al., 2026]])。

## よくある誤解

- **「グループにAIを与えることは、より多くの協働を意味する」** **18件の研究**のスコーピングレビューは、グループワークにわたるトレードオフを描きます。生成AIは**知識の発達、アイデア創出、コミュニケーションの効率**を支える一方、同じ介入の中で関係的なコストも伴いました。効率の利得と関係的なコストは同時にやってきます。
- **「AI支援の協働学習には、メタ分析の裏づけがある」** AI支援の協働作業について利用可能な**唯一の**メタ分析の対照は、直接推定されたのではなく、生成AI支援のPBL/PjBL介入の**内部**にあります。協働の測定ではなく、より広い効果の一構成要素です。
- **「LLMのパートナーは、グループ自身の推論を保つ」** [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash、Connell Pensky（2025）]]が入門レベルの社会科学の学生を対象に教室規模で検証したのは、まさに保存が前提ではなく未解決の問いだからです。
