---
title: 教授法的エージェント
created: "2026-10-10T22:45:47-04:00"
updated: "2026-10-30T03:22:22-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
source_updated: "2026-10-26T10:25:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **総括**：[[pedagogy|教授法的]]エージェントは、学習環境に埋め込まれた、AI 駆動の会話型インターフェースであり、教授法的ストラテジー（引き出す、告げる、足場を張る）を用いて、[[student-engagement|学習者のエンゲージメント]]、省察、メタ認知を支えます。デザインは、単純な情報提供者から、学習者の状態に適応する対話的な対話の相手まで多様です。

## 検討すべき問い

- チャットボットや家庭教師が、あなたを少しも賢くしない完璧な答えをくれたときのことを思い出してください。何が AI に「教える」ことをさせ、単に「解かせる」にしないのでしょうか。そして、なぜベンチマークの得点はその違いを捉え損ねるかもしれません。
- このページは、チューリングにおける「解く」得点と「教授法」の得点が、モデル間でわずかにしか相関しないことを見出しています。それは、AI の家庭教師を問いに答える能力で評価することについて、何を物語るべきでしょうか。
- あるデザインは AI に Teacher、Classmate、Mentor といった別々の役割を与え、あるものは（ParaTutor のように）親を中心に置き続けさえします。経験では、エージェントに明確な役割を与えることは、[[learners|学習者]]がそれとどう相互作用するかを変えるでしょうか。
- 現実の学生は、エージェントの目標が学習者自身の目標と衝突するとき、チャットボットの教授法的な枠組みをしばしば「迂回」します。学習者がなぜ良い足場を合理的に無視することがあるのでしょう。そしてそれは、「作れば彼らは関与するだろう」という想定について何を意味するでしょうか。
- あなたは、物を告げてくれる AI から学びたいですか、問いかけてくれる AI からですか、それともグループの議論を媒介する AI からですか。あなたの好みは、「教授法的エージェント」とは何だと考えるかをどう形作るでしょうか。
- 単純な情報提供者から、コース全体を統括する専門化されたエージェントの艦隊まで——会話型 AI のチューリングの価値（とリスク）は、実際にどこにあると考えるでしょうか。

## はじめに

教授法的エージェントとは、対話、問い、あるいはプロンプトを通じて学習者を関わらせ、認知的および[[metacognition|メタ認知的]]な過程を支える、学習システム内の対話的な AI 構成要素です。受動的な[[visualization|ダッシュボード]]や静的なフィードバックと異なり、教授法的エージェントは、エビデンスに基づくチューリングのストラテジー——例えば、[[feedback|フィードバック]]を与える前に学習者の自己[[assessment|評価]]を引き出すことや、ソクラテス的な対話を通じて[[problem-solving|問題解決]]に[[scaffolding|足場]]を張ること——を用います。今やこの傘は、単一の会話型の[[intelligent-tutoring|知的家庭教師]]から、講義し、助言し、協働を促進し、コース生成を統括さえする、役割特化の[[agentic-ai|エージェント]]の艦隊まで、すべてを覆います。それらはすべて、知的チューリングシステムの[[research-methods-aied|研究]]の数十年に根ざしています。

- **説明ではなく調整を役割とするエージェント。** Chen ら（2026）は、グループの共有された調整の状態を診断してそれに応じて促す SSRLAgent を構築し、内容支援のエージェントを両方の条件で一定に保ちました（[[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen ら、2026]]）。両方の群にエージェントと構造化されたプラットフォームがあったため、利得は会話型エージェントの存在ではなく、調整のプロンプトにおける適応性に帰属します。

## ナレッジベースで教授法的エージェントがどう研究されるか

**会話型エージェントのデザインとアーキテクチャ。** 繰り返す糸は、エージェントが何のモデルに動かされるかだけでなく、どう構造化されるかです。[[conversational-ai-tutors-framework|会話型 AI 家庭教師フレームワーク]]は、実績ある ITS の[[ai-technologies|技術]]——[[knowledge-tracing|知識トレーシング]]、情動の検出、[[student-modeling|学習者モデリング]]——が生成的家庭教師の錨になるべきだと論じ、診断的な背骨を保ちながら、[[generative-ai|生成 AI]]が柔軟な対話を供給します。マルチエージェントのデザインはこれをさらに押し進めます。[[mooc-to-maic|MAIC]]は、[[online-teaching-and-learning|MOOC]]の「N 人の学生に 1 本の動画」を、Teacher、Assistant、Classmate、Analyzer のエージェントからなる[[llm|LLM]]駆動の教室で置き換え、規模をもって[[personalized-learning|パーソナライズされた学習]]を提供します。一方で[[lecturaagents-multi-agent-teaching|LecturaAgents]]は、TASA アルゴリズムで可視的な[[teacher-role|教授]]の行動（手書き、ハイライト）を学習者のプロファイルと整合させる、[[embodied-learning|身体化された]] ProfessorAgent を加えます。親と子のチューリングさえ、[[paratutor-parent-child-tutoring|ParaTutor]]では 2 つのエージェントの問題になります。役割が分離された足場は、汎用のチャットボットに親を置き換えさせるのではなく、親を中心に置き続けます。同じ役割ベースの論理は、[[instructional-agents-multi-agent-course-gen|Instructional Agents]]にも現れます。Teaching Faculty、Designer、TA、Program Chair の各エージェントが ADDIE を横断して協働し、コース教材を生成します。

役割ベースのエージェントの補完的な利用は、学生の学習ではなく[[teacher-education|教師]]の実践を狙います。[[educasim-cs1-instructional-practice|Mohne et al. (2026)]]は、教授法的な学生のペルソナ、実際のコース教材に接地されたメモリ、LLM-as-a-judge の話者のオラクルを組み合わせ、新任の教師が小集団のセクションを予行演習できるようにします——254 回の任意のセッションで、それぞれ平均約 16 分、セッションあたりおよそ \\$0.05〜\\$0.10。

**教えること対解くことの行動。** 中心的な実証的な知見は、答えを生み出すことは学習支援ではないということです。[[measuring-llm-tutors-teach-vs-solve|LLM の家庭教師が教えるか解くかの測定]]は、チューリングのベンチマークにおける「解く」得点と「教授法」の得点がわずかにしか相関しないことを示します（8 モデルにわたって r = 0.421）。これは、ベンチマークが——導きの問い、較正されたヒント、非開示的な足場といった——教授法志向の基準を別個に報告しなければならないと論じます。これは[[stanford-evidence-base-ai-k12-2026|チューリング特有の対汎用の AI]]のエビデンスと一致します。[[guardrails|ガードレール]]を備えた教授法的にデザインされた家庭教師は、生の汎用チャットボットが生み出す試験の得点の低下と抑制された推論を緩和し、[[desirable-difficulties|望ましい困難]]と生産的な苦闘を短絡させるのではなく保ちます。しかし、ベンチマークは、足場を張られた家庭教師でさえ実際の現場でどれだけうまく働くかを過大評価しえます。[[rethinking-scaffolding-llm-tutors|LLM の家庭教師における足場の再考]]は、現実の学生がチャットボットの教授法的な枠組みを頻繁に迂回することを見出します。エージェントの目標と学習者自身の目標の不一致に対する合理的な応答です——したがって、受け入れは仮定されるのではなく評価されなければなりません。

**チューリングと協働における役割。** エージェントはますます、答えを与える者としてではなく、促進者と媒介者として位置づけられます。[[niari-ai-pedagogical-mediator-collaborative-learning|Niari の教授法的媒介フレームワーク]]は、[[collaborative-learning|協同学習]]における AI を、相互作用的、認識論的、規制的な媒介者として再考します。教師や[[agency|学習者の主体性]]を追いやることなく、参加と共有された[[regulation|規制]]に足場を張ります。具体的には、[[golrang-propact-pair-programming-2026|協働的な AI チューリング（ProPACT）]]は、協働そのものを教授の対象として扱い、二者の破綻を最長 30 秒先まで予測し、[[metacognition|メタ認知]]を保つ最小限の侵入の足場を届けます。[[embodied-inquiry-ai-facilitator-physics-2026|促進者としての AI を用いた身体化された探究]]は、AI が手を使った模型づくりを、構築された模型の適用を促進することで補いられることを示します。一方で[[robot-assisted-language-learning-meta-analysis-2026|ロボット支援の言語学習のメタ分析]]は、成果がロボットのエージェントの技術的な洗練よりも、教授の中でどう位置づけられるか（グループベースの相互作用）を追うことを見出します。エージェントが演じる*役割*だけで十分なのか、それとも*振る舞いも適応*させなければならないのかは、[[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]によって問われます。ある[[k-12|初等]]の「読書の語らい」の研究は、固定された「学生の同輩」の伴走的なものがより長い相互作用を持続させた一方で、学生の主体性を抑え、「[[affective-computing|情動的な]]上限」（弱い感情的・未来志向の省察）に達したことを見出し、役割の*ラベリング*は、一枚板の単一役割デザインではなく、役割に*適応的な*相互作用の論理と対にされなければならないと論じます。

[[ethics-training-agents-group-ethics-discussion-2026|Ethics Training Agents（Seo et al., 2026）]]は、教授法的エージェントに教えるのではなく進行役を務めるよう求められたときに何が起こるかを示します。発言の順番を扱う（15 秒の挙手の窓を伴うスタッキング）、時間管理（9 分後に段階をまとめへ自動で進める）、インクリメンタルなバッチでの要約を行う LLM のファシリテーターは、参加者の認知的負担を減らし、議論が「軌道に乗っている」という感覚を与えました——ある参加者は、それを ChatGPT と好意的に対比させました。ChatGPT は「しばしば無秩序に感じられたり、アイデアの進捗を見るのを難しくさせたりすることがある」と。同じ研究は、ペルソナベースのエージェントの上限も露わにします。3 つの異なる[[ethics|倫理的]]志向のエージェントは、貢献、多様性、影響力において人間の同輩より有意に低く評定され（Kruskal-Wallis p < .001）、参加者は結論志向ではなく過程志向（「エージェントがどう推論するか」）の産出を求めました。

**会話型エージェントが（使われているところと使われていないところ）——傘のレビューの絵。** [[conversational-ai-agents-umbrella-review-2026|会話型 AI エージェントの傘のレビュー]]（Ganguly et al. 2025、34 件のレビュー）は、CAI の利用を定量化します。教授と学習の支援（レビューの 97.1%）、心理的および[[motivation|動機づけ]]の支援（91.2%）、メタ認知的および個人の発達（88.2%）が先行し、一方で管理的な支援（50%）、研究と情報の管理（52.9%）、医療・医学の支援（41.2%）は後れます。また、[[conversational-ai|CAI]]の研究が、エンドツーエンドのデザインの指針、CAI 特有の[[usability-research|有用性]]の方法、そして教師の役割についての具体的な教室での統括のストラテジーを欠いていることもフラグを立てています——教授法的エージェントのデザインは HCI に根ざし、エビデンスに基づき、[[ai-literacy|AI リテラシー]]に注意を払ったものでなければならないことを裏づけています（[[conversational-ai-agents-umbrella-review-2026]]）。

**役割の指向は、スタイルの選択ではなくデザインの変数である。** [[wang-teacher-student-centered-agents-physics-2026|物理学のエージェントの比較]]（Wang et al. 2026、59 人の学習者）は、モデル、プラットフォーム、温度を固定に保ちながら、プロンプトで指定された役割を分離します。境界のある教科書の情報源に接地し、教師の視点から答える教師中心のエージェントに対し、学生の理解の知識で構成され、誤概念を診断し、概念を名指し、類推的な事例へ[[transfer-of-learning|転移]]するよう台本化された学生中心のエージェントです。学生中心の役割は、測定されたすべての成果——事後テストの成績、低い外来的および高い内在的な認知的負荷、フロー経験、知覚された共感——で勝ちました。教師中心のエージェントの方が、精度と教科書への忠実さについて最適化されていたにもかかわらずです。これは、*役割と相互作用のパターン*を、[[prompt-engineering|プロンプト]]やモデルの選択と並ぶ第一級のデザイン・パラメータにし、共感が別の訓練を受けたモデルではなく、会話的な構造から工学的に作られうることを示します（[[affective-computing|情動計算]]）。

**作成の意図は、実現された教授法を保証しない。** 27 人の中学生の教師が教師向けのチャットボット作成ツールを構成したとき、108 件のボット単位の基準評定の評価では、生成された応答は、応答性（88.9%）とペルソナ（81.5%）にははるかよく整合していた一方で、規則（70.4%）や表明された目的（59.3%）には整合が及ばず、著者らはこれを、Norman の「実行の隔たり」と「評価の隔たり」の教授法的な形を通じて枠づけます——構成可能な制御だけでは、教師の教授的な意図をボットの振る舞いに可視的にしませんでした（[[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]）。

**没入型と拡張現実の場でのエージェント。** [[aclime-pedagogical-agents-extended-reality-2026|Ross and Kaspar (2026)]]は、この概念を ACLIME で[[virtual-and-augmented-reality|拡張現実]]（AR、拡張仮想現実、VR）にまで拡張します。ACLIME は——CAMIL、CATLM-VR、TICOL とは異なり——エージェントを模型の内側に保つ概念的フレームワークです。それは文献から採られた 2 つの相互作用の様式を名指します。導き、励まし、省察的な問いかけ、説明を提供するチューターと、気候変動のフィールドトリップの地元住民や企業研修の交渉の相手といったシナリオの中で定められた役割を占める、役割演技の相手です。エージェントの身体（頭のみから全身まで）と振る舞いは、デザインの対象面として扱われます。視覚的対行動的なリアリズム、柔軟な AI 制御対固定されたルールベースの台本化、合成された対事前録音された話し言葉、そして視線、身振り、近接学を含む非言語の経路です。没入と身体に基づく相互作用は、[[community-of-inquiry|社会的プレゼンス]]の背後にある社会的な合図を増やすと論じられます——視覚的ではなく行動的なリアリズムが、決定的な予測変数として提案されます——一方で、学習者自身の仮想の身体は、[[embodied-learning|身体化]]の次元（身体の所有、仮想の自己身体の主体性、自己の位置づけ）とプロテウス効果を加えます。このフレームワークの明示的なトレードオフは認知的です。没入とエージェントの単なる存在は、エージェントとの社会的相互作用が集合的なワーキングメモリの効果を通じてそれを下げるのと同じく、認知的負荷を上げることがあります。そして、通常のデザイン変数に、時間の層（慣れ親しみ、成熟する人間とエージェントの関係、新奇性の減衰、発達するサイバーシックネス）が加えられます。その地位は意図的に暫定的です。没入型のメディアで教授法的エージェントを検定する実証的な仕事はほとんどなく、長期の[[learning-gains|学習成果]]も学習者の特性も、模型の外側に置かれています。

**評価とベンチマーク。** 教授法的エージェントを測るには、内容ではなく教授法を検定する必要があります。[[teaching-monster-pck-benchmark-2026|The Teaching Monster Challenge]]は、エージェントに指定された学習者のペルソナに合わせて授業を適応させるよう求めることで、教授内容に関する知識をベンチマークし、システムは内容には強いがそれを適応させるのには弱いことを見出し——そして、LLM の審査員が強いシステムの序列を誤ることを露わにします。[[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]]は、専門的な教授法的判断、[[situated-learning|状況に埋め込まれた]]複数ターンのチューリング、キャンバス風のワークフローの完遂にわたってエージェントを評価し、モデルが専門的な教授の水準に及ばないことを示します。[[ai-generated-interactive-fiction-education-2026|AI 生成のインタラクティブ・フィクション]]は、デザイン評価の角度を加えます。整合性とクイズの統合、そして生成能力ではなく、それが[[student-experience|学生の経験]]にとって有用かを制限します。
**複数ターンにわたってペルソナの堅牢性をストレステストする。** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]]は、役割演技のエージェントに対して自動の Judge で 6 段階にエスカレートする攻撃を実行しました。多戦略のテストは、単一戦略のベースラインに対して堅牢性を 0.17〜0.20 低下させ、重大な失敗は第 5〜6 ターンの後に集まりました——したがって、短い、あるいは単一ターンの評価は、ペルソナの安定性と倫理的遵守を過大評価します。
- **誤りうる提案が要点であるピアのエージェント。** Copa は、ログに文脈づけられた検索をGPT-4oと15のチャンクからなる課題特有の知識ベースと組み合わせ、各学生のセグメントをエージェント的に要約します。学生のモデルを専門家の版と比較し、表明された問題を診断し、何を検索すべきかを名指します。16人の学生と2つのフォーカスグループによる教室研究では、参加者全員がその導きが自分の問題解決を支え正確だったと述べ、全員がまた使いたいと答えました。数人は率直な答えを求め、何人かは自分のモデルが悪くなるまで提案を正しいと仮定しました。著者らはそれを、答えるのではなく評価を促すようにエージェントを設計することのコストとして読みます（[[cohn-lc-rag-log-contextualized-retrieval-2025|Cohn ら、2025]]）。

## 実践的な指針

学習者の主体性のためにデザインし、モデルの便宜のためにではありません。解くことと教えることは分岐するので、生の答えの生成よりも、[[scaffolding|足場]]、ヒント、[[socratic-method|ソクラテス的な問いかけ]]、[[misconceptions|誤概念]]の狙い撃ちといった、チューリング特有のガードレールを好みます。支援を、単一の汎用インターフェースを通じてではなく、利用者の役割（親対子ども、同輩対同輩）ごとに配分し、協働を足場を張る有効な対象として扱います。学生が足場を受け入れると想定しないでください。実際の文脈で受け入れを評価してください。[[ai-tutor-authoring-promptdecipher|PromptDecipher]]が、ボットの応答に対する教師の QA を第一級の活動とすることで行うように、作成に[[human-in-the-loop-ai|人間の監督]]を組み込みましょう。そして、品質が保たれるところではより安いバックエンドを選びましょう。教える得点と解く得点は別個に報告し、生成された内容を、生成が有用さと等しいと仮定するのではなく、利用者で検証しましょう。

学習者の選好は足場の質の貧しい代理です。AI 支援の数学モデリングにおける学生は、Peer と Teaching Assistant の役割で最も良い成績を収めた一方で、より指示的な Tutor と優秀な学生の役割を有用性と自己効力感について最も高く評定しました（[[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang and Yang (2026)]]）。

コンピュータ支援の協同学習における AI エージェントの 46 件の研究のレビューは、認知的足場、社会的促進、教授的な統括を区別し、認知的成果は一貫している一方で、行動的、社会的、情動的な成果は文脈依存的であることを見出します——したがって、エージェントの機能は、それが生むことを意図された成果のために選ばれるべきです（[[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]）。

## 関連する概念へのつながり

教授法的エージェントは、[[intelligent-tutoring|知的チューリング]]（[[knowledge-tracing|知識トレーシング]]と学習者モデリングという、その診断的な背骨）と[[generative-ai|生成 AI]]/[[llm|LLM]]（その伝達のエンジン）の交差点に位置します。それらは[[scaffolding|足場]]と[[feedback|フィードバック]]を具体化し、[[metacognition|メタ認知]]と[[self-regulated-learning|自己調整学習]]を目指し、ますます[[collaborative-learning|協同学習]]を狙います。安全性の懸念は、[[pedagogical-safety|教授法的安全性]]、作成の質、そしてエージェントが学習を支えるのではなく[[cognitive-offloading|オフロード]]するリスクにわたって繰り返し現れます。これらすべては、[[ai-ed-evaluation|AI 教育の評価]]と、教えることを、解くことだけでなく測らなければならない[[benchmark|ベンチマーク]]を通じて評価されます。

決定的に、教授法的エージェントは、どれだけ流暢に応答するかではなく、その[[learning-gains|学習成果]]によって判断されます。このナレッジベースのエビデンスは、エージェントがガードレールを備えたチューリング特有のコーチとしてデザインされるときに持続的な成果を生み出し——[[stanford-evidence-base-ai-k12-2026|チューリング特有の AI は一貫して汎用チャットボットを上回る]]——そして学習者の労力の代替になるときに学習を害しうるということです（[[generative-ai-guardrails-harm-learning|ガードレールの RCT]]、[[jost-llm-programming-education-learning-outcomes|LLM への依存と成績]]）。したがって、エージェントの[[learning-gains|学習成果]]を測ることは、ツール内の成績ではなく、支援なしで測られ転移可能な成果の指標を必要とします。

より良いフィードバックはより良い学習と同じではありません。ナレッジベースとワークフローでエージェントをカスタマイズすることは、フィードバックの精度と特異性を上げた一方で、自己調整的な振る舞い、学習の経験、成果は変えないままであり、その成果上の利点は、指示的なフィードバックの下でのみ現れました（[[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]）。

## よくある誤解

- **「作成の意図が、教授法的エージェントのすることを決める」** **作成の意図は、実現される教授法を保証しません。** **27人の中学校の教師**が教師向けのチャットボット作成ツールを構成したとき、108件のボット単位の基準の評価は、実現された振る舞いが教師の意図から乖離することを示しました。道具が教授法を媒介したのです。
- **「議論を進行する教授法的エージェントは解決済みの役割である」** [[ethics-training-agents-group-ethics-discussion-2026|Ethics Training Agents（Seo ら、2026）]]は、エージェントが教えるのではなく**進行役を務める**よう求められたときに何が起こるかを示します。問いに答えることとは質的に異なる要求であり、文献が未解決として扱うものです。
- **「コンピュータ支援による教授の証拠基盤は薄い」** ある総合（**2025年、34件のレビュー**）は、教授と学習の支援（**レビューの97.1%**）、心理的・動機づけの支援（**91.2%**）、そして**メタ認知**の支援にわたるCAIの利用を定量化します。レビューされた応用の広さは広範であり、その隔たりは網羅ではなく実現された質の問題なのです。

## 関連する概念
- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## 関連する記事
- [[wang-teacher-student-centered-agents-physics-2026]] — 学生中心のエージェントの役割は、成績、負荷、フロー、共感にわたって教師中心の役割を上回る（Wang et al. 2026）
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME：AR/VR における教授法的エージェントの概念的フレームワーク——チューター対役割演技の相手、リアリズム、プレゼンス、認知的負荷（Ross & Kaspar 2026）
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim：教授の実践のための生成的な学生エージェント
- [[conversational-ai-agents-umbrella-review-2026]] — 教育における会話型 AI エージェントの傘のレビュー
- [[conversational-agents-novice-programmers-scoping-2025]] — 初心者のプログラマーのための会話型エージェントのスコーピングレビュー
- [[ba-ai-agents-cscl-review-2026]] — コンピュータ支援の協同学習における AI エージェントのレビュー
- [[kim-ai-productive-failure-adult-2026]] — 生産的な失敗に基づく学習を支える AI システムのデザイン
- [[preferred-scaffolding-ai-mathematical-modeling]] — AI 支援の数学モデリングにおける選好される足場
- [[llm-adaptive-programming-error-explanations-2026]] — プログラミングの誤りの LLM による適応的な説明
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 初等の読書の語らいのための役割適応型 AI の伴走的なもの。固定役割のエージェントの情動的な上限（Liao 2026）
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents：倫理的な省察と探求のための役割演技と議論を伴うグループベースの倫理教育の促進

- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots

- [[agent-type-feedback-style-self-directed-learning-2026]] — カスタマイズされたエージェントはフィードバックの質を上げたが、自己調整や成果は上げず。成果上の優位は指示的なフィードバックの下でのみ
