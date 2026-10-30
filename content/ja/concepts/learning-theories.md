---
title: 学習理論
created: "2026-10-10T22:38:12-04:00"
updated: "2026-10-30T03:22:21-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: concepts/learning-theories
source_updated: "2026-10-28T19:24:33-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **学習理論**——学習がどう起こるかを説明する枠組みの一群であり、このナレッジベースの理論に関連する諸概念の傘の概念です。[[ai-education|教育におけるAI]]において、学習理論は、AIシステムがどう設計されるか(それが体現する教授法)と、この分野がAIが「機能するか」どうかをどう解釈するかの両方を形づくります。同じ道具でも、[[constructivist]]の想定の下では足場に、[[behaviorism]]の下では強化の機関に、認知負荷理論の下では認知的負荷の危険になりえます。

## 考えるための問い

- あなたが使った、または見たAIチューターや適応システムについて考えてください。それは人間がどう学ぶかについてどんな想定をしていたでしょうか——正しい答えに報いる(行動主義)、理解を構築する(構成主義)、それとも心的な努力を管理する(認知負荷)——ことのどれだったでしょうか。その制作者たちは、そうした想定を述べたことがあるでしょうか。
- このページは繰り返し現れる乖離を記述しています。言説は構成主義を唱えながら、AIの実装は詰め込みとフィードバックの力学に既定値として戻るのです。深い学習を支援すると主張しながら、実際には表面的な反応を強化しているだけの道具を、どこかで見たことがありますか。
- 同じAIツールでも、1つの理論の下では成功のように見え、別の理論の下では失敗のように見えます——膨らんだ宿題の得点は、行動主義の下では学習と読まれますが、構成主義の下では持続的な理解を築く失敗と読まれます。学生が実際に学んだかどうかを判定するのに、どのレンズがより公正でしょうか。
- すべてのAIチューターは、設計者がそう述べようと述べまいと、理論を埋め込んでいます。それゆえ「それは機能するか」は誤った問いかもしれません。それが体現しうる理論を踏まえると、教育的なAIについて尋ねるべき、よりよい問いとは何でしょうか。
- 生成AIは、人間とAIの間の反復的な共構築としての学習や、生涯にわたる認知的パートナーとしてのAIのような、新しい理論を教育者に検討させつつあります。AIの台頭は本当に新しい学習理論を必要とするのでしょうか、それとも既存の理論で依然として十分でしょうか。
- 学習成果の測定はそれ自体「理論に負荷を帯びて」います。1つの理論に基づいて構築された道具は、別の理論が予測する成果を捉えないかもしれません。理論的な立場の異なる2人の研究者が、同じデータを見て、AIツールが機能したかどうかについて正反対の結論に達するのは、どのようなときでしょうか。

## 導入

これは、このナレッジベースの学習理論の束の傘の概念です。学習理論は、教育におけるAIの中心に位置します。なぜなら、すべてのAIチューター、適応システム、フィードバックの道具は、人間がどう学ぶかについての想定を埋め込んでいるからです——設計者がそれを述べようと述しまいと。このナレッジベースはそれらの理論を個別に記録し、AIの設計と効果が評価される概念的なレンズとして扱います。それらの枠組みを検証する研究分野は別のページです。[[learning-sciences|学習科学]]は学習を実証的に研究し——実験、教室での試行、デザインに基づく研究——理論を確証されたり反証されたりするものとして扱います。一方このページは枠組みそのものを集めます。この2つの語句はこのナレッジベースで区別されており、単数形の「learning science」はこの理論の束を指します。

### 学習理論の景観

このナレッジベースは、それぞれが独自の概念を持つ学習理論のいくつかの系を記録しています。

- **古典的な学習理論。** [[behaviorism]](観察可能な行動の変化としての学習——強化と詰め込み練習を通じて)と[[constructivist|構成主義]](能動的な知識の構築としての学習)は、AI研究で最も繰り返し現れる2つの極です。この分野ではしばしば、「名目上は構成主義、実践においては行動主義」という乖離が見られます。言説は構築を唱えながら、AIの実装は詰め込みとフィードバックの力学に既定値として戻るのです。([[ai-vocational-education-training-review]])[[cognitive-psychology|認知主義]]は3番目の古典的な極——内的な心的表象の変化としての学習——であり、AIEDの特徴的な貢献([[knowledge-tracing]]、[[cognitive-diagnosis]]、[[student-modeling]]、[[intelligent-tutoring]])に最も責任を持つ理論です。
- **社会文化的・発達的な理論。** [[sociocultural-learning]]は、学習と発達が社会的な参加を通じて生じ、文化的な道具やより知識のある他者によって媒介されると考えます——[[sociocultural-learning|発達の最近接領域]]、[[scaffolding]]、徒弟制、実践の共同体、[[distributed-cognition|分散された認知]]に及びます。AI時代において、[[generative-ai|生成AI]]はますます、活動を媒介すると同時に相互交流に偶発的な貢献を生成する*媒介するエージェント*として枠づけられています。([[generative-ai-mediational-agent-sociocultural-2026]])
- **認知と認知的アーキテクチャ。** [[cognitive-psychology|認知心理学／認知主義]]はこの系の傘です。認知負荷理論(作業記憶の限界が教授をどう形づくるか)、二重過程理論(速く直感的な処理対遅く熟慮的な処理)、[[metacognition]](自分の学習を監視し調整すること)は、AIツールが従事したり迂回したりする*内的*な機構を説明します。
- **動機づけと自己指向。** [[self-determination-theory]](自律性、有能感、関係性)、[[self-efficacy]](自分の能力についての自信)、[[self-regulated-learning]](目標設定、監視、調整)、[[motivation]]は、学習者がなぜAIと彼らなりの仕方で関わるのかを説明します。
- **学習の文脈と活動。** [[experiential-learning]]、[[active-learning]]、[[project-based-learning]]、[[collaborative-learning]]、[[transfer-of-learning]]、[[desirable-difficulties]]、[[embodied-learning]]は、持続的な学習を生み出す活動と文脈の種類を記述します。

### 学習理論と学習成果

学習理論は最終的にその結果によって評価され、このナレッジベースの[[learning-gains]]の概念が理論が証拠と出会う場所です。各理論は、何が学習として*数えられる*か、そしてどう測定されるかについて異なる予測を行います。行動主義は詰め込みとフィードバックの課題における観察可能な成績の向上を予測し、構成主義は新しい問題に転移するより深い理解を予測し、社会文化的な理論は参加と媒介された問題解決における向上を予測し、認知負荷理論は教授が作業記憶の限界を尊重するときにのみ向上を予測します。これが[[learning-gains]]の測定が理論に負荷を帯びている理由です——1つの理論に基づいて構築された道具は、別の理論が予測する成果を捉えないかもしれません。AI時代において、AIに支援された成績と非支援の[[learning-gains|学習成果]]の鋭い乖離([[generative-ai-reduced-study-time-math]]、[[stromberg-generative-ai-learning-penalty-secondary-2026]]を参照)は、このレンズを通して読むことができます。行動主義的な読みは膨らんだ宿題の得点を成功として見るのに対し、持続的な理解に焦点を当てた構成主義的な読みは、同じ証拠を学習の失敗として見ます。それゆえ、理論を[[ai-ed-evaluation|評価]]と[[learning-gains|測定された成果]]につなぐことは、あるAIシステムが実際にどの理論的なレンズを満たすかを決めるために不可欠です。

### なぜ学習理論が教育におけるAIにとって重要なのか

学習理論が重要なのには3つの理由があります。

- **それらはAIの効果を予測する。** AIツールが学習を改善するか害するかは、それがどの機構を活性化するかに依存します。答えを差し出すチューターは、構成主義的なレンズの下では害を及ぼし(構築を迂回する)、行動主義の下では中立的であり(強化する)、認知的負荷の懸念を引き起こします(構築するのではなく負荷を移すからです)。このナレッジベースの[[cognitive-offloading]]と[[cognitive-offloading|過剰な依存]]の概念は、このリスクの側面を捉えています。
- **それらは理論と実践の乖離を露わにする。** 実証的な研究は繰り返し、AIの実装が言説の主張する理論とは異なる理論を体現していることを見出します——とりわけ有名なのは、行動主義的な詰め込み練習の力学と対になった構成主義的な語彙です。([[ai-vocational-education-training-review]])それゆえAIを評価することは、システムが「機能するか」どうかだけでなく、システムが実際に*どの*理論を体現しているかを問うことを必要とします。
- **それらは活発に再考されつつある。** 生成AIは、古典的な理論が十分かどうかを再検討するよう教育者を[[prompt-engineering|促して]]います。[[generativism-learning-theory|Generativism]]は、AI時代の学習がますます人間の学習者とAIシステムの間の反復的な共構築を通じて生じると提唱し、古典的な4つ(行動主義、認知主義、構成主義、コネクティビズム)を拡張するのではなく延長します。([[generativism-learning-theory]])

### 近年のAIED研究からの新しい理論的な方向性

近年の理論的な仕事は、古典的な束をいくつかの方向に拡張しており、それぞれがAIを中立的な道具として扱うのではなく人間–AIの関係を再び中心に据えています。

- **人間–AIの共[[regulation|調整]]。** 発達的な枠組みは、AIを外的な道具としてではなく、生涯にわたり思考・学習・自己制御を共に調整する**認知的パートナー**として位置づけます。([[ai-cognitive-partner-co-regulation-learning]])実行機能、[[metacognition]]、分散された認知、社会文化的な発達に依拠し、AIを4つの役割——足場、メタ認知的支援、外部記憶／[[cognitive-offloading]]システム、意思決定のパートナー——として描きます。この枠組みは、中期の子ども期以降で最も関連性があります。
- **アンサンブル認知。** [[philosophy-of-ai-in-education|哲学的]]な枠組みは、思考を個々の心にのみ宿るものではなく、人間と人工のエージェントの間の動的な相互作用から湧き出るものとして再概念化します。([[ensemble-cognition-philosophy-ai-education]])それは「意識のパラダイム」(自律性、意識、安定性の想定)に異議を唱え、5つの特徴——分散された主体性、動的な中心性、認知的オーケストレーション、多表象的な統合、文脈に感応的な切り替え——を明示し、AIの**機能的な主体性**を道徳的な責任から区別します。
- **[[self-directed-learning|自己指向的な]]成長／A2PL。** [[self-directed-learning|自己指向的な学習]]の拡張は、生成AIを[[learning-analytics|学習分析]]と統合して**自己指向的な成長**を涵養し、Aspire to Potentials for Learners (A2PL)モデルを通じて具体化されます。([[self-directed-growth-generative-ai-learning-analytics]])それは、学習者の志向(人本主義的)、複雑な思考(構成主義的)、自己評価(実用主義的)を1つの能力に再構成し、内容の提供者ではなく非規定的な協働的な足場としてGAIを位置づけます。

- **欺瞞的な過度の一般化。** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, Stamper(2026年)]]は、観察された正しさが不完全な条件的な理解を覆い隠す場合を理論化することで、ACT-R／Knowledge-Learning-Instructionの伝統を拡張します。学習者は、適用制約を欠く過度に一般化された産出を体系化しながら、なお正しく遂行することがあります——この失敗モードは、適応的な熟達システム、さらには伝統的な教授でさえ、行動を*控えるべきとき*を検証しない限り見落としうるものです。
- **実行可能なKLI理論。** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho(2025年)]]は、Knowledge-Learning-Instructionの枠組みを実行可能な計算モデル(ACT-R風の記憶機構を備えたApprentice Learnerの枠組み)に接地させます。このモデルは人間のデータにおける交差的な交互作用を再現します。純粋な練習は逐語的な事実の記憶を助け(忘却を遅らせることで)、例と統合された練習は一般化可能な技能の帰納を助けます。KLIが定数的な(事実の)知識を記憶の過程に、可変的な(技能の)知識を帰納に結びつけるため、この結果は検定と解き方の例の推奨との矛盾ではなく、予測された内容–処置の交互作用です——そして記憶の機構が存在する場合にのみモデルが成功することは、練習と例が異なる相補的な役割を果たすことを実証しています。
- **AIのパラダイムに対する存在論的な挑戦としての身体化。** [[videla-embodied-ai-education-choreography|Videla, Penny, Ross(2026年)]]は、身体化された存在的な認知とAIが体現する表象的な語彙との間に存在論的な隔たりがあると論じ、AIを中立的な道具としてではなく、認識論的な中心から外すべきだとしています。

### このナレッジベースがこの束をどう組織しているか

学習理論を抽象的な哲学として扱うのではなく、このナレッジベースはそれぞれを、それを用いる教育におけるAIの研究に接地させます。[[constructivist]]と[[behaviorism]]のページは、AIの設計が各理論をどう体現するか(あるいは裏切るか)を記録し、認知負荷理論、[[self-regulated-learning]]、[[metacognition]]、[[transfer-of-learning]]は理論を特定のAIの機構と成果につなぎます。これは、このナレッジベースが[[feedback]]や[[assessment]]のような他の傘の領域を、孤立したページではなく相互作用する概念の整合的な体系として扱うのと同じです。

### 学習理論と「AIについての教育」

学習理論はまた、[[ai-literacy|AIリテラシー]]のカリキュラムにおいて内容としても現れます。学習者は、自分たちが使う道具の背後にある[[pedagogy|教授法的な]]想定を理解するために、行動主義、認知主義、構成主義、コネクティビズムを学びます。([[generativism-learning-theory]])この束を教えることは、学生(と教育者)に、AI製品がなぜそういうふうに構築されているのか——そしてその力学が当面の学習目標に資するかどうか——を批評するための語彙を与えます。

- **媒介するエージェント。** Warschauer, Tate, Ritchie(2026年)は、生成AIが社会文化的な媒介手段と社会的な相互交流の区別を破ると論じ、*媒介するエージェント*——行動を媒介すると同時に、偶発的で説明責任を負わない貢献を生成し、道具と社会的なパートナーの中間的な空間を占めるシステム——を提案しています。これは、人間優先の参加の5つの習慣(人間の認知の優位性、目的のある[[student-engagement|関与]]、監督的な主体性、認識論的な用心、省察的な自己調整)をもたらします。([[generative-ai-mediational-agent-sociocultural-2026]])

### AI時代のために提案された理論

古典的な系と並んで、このナレッジベースはAIシステムとの学習のために特別に書かれた理論を記録しており、それらは古い理論が開いたままにしている設計上の含意を帯びています。[[yan-agentivism-learning-theory-ai-2026|Agentivism(Yan and Gašević 2026年)]]はその中範囲の例です。それは学習を、課題の成功ではなく人間の能力における持続的な成長として定義し、4つの機構(委譲された主体性、認識論的な監視と検証、再構築的な内面化、支援が減少した下での転移)を名指し、6つの検証可能な命題を述べます。その中には、問題の枠づけ・基準の設定・正当化に対する学習者の責任を保つAI支援が、答えを差し出す支援よりも強い学習を生み出すという命題があります。

[[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed(2026年)]]の**教授法的な共生**はより強い存在論的な主張をします。学習者は、道具に助けられるのではなく混成的な認知を持つ*ポストヒューマン*な存在であり、4つの原理によって組織されています。認知的オフローディングと増幅、認識論的な共構築、メタ認知的な共生、動的なアイデンティティ形成——Symbiotic Portfolioのルーブリックと「Cognitive Choreographer」という教師の役割として具体化され、明示的に未検証です。

## よくある誤解

**「学習理論のうちのどれかが正しく、理論の選択は好みの問題である。」** 理論は何を証拠とみなすかについて異なる主張をするため、同じデータが相反する結論を支ええます。最も明快な例は、水増しされた宿題の得点が、**行動主義の下では学習**として、**構成主義の下では持続的な理解を築けなかったこと**として読まれることです。したがって理論の選択は、介入が成功したかどうかを決めるものであり、文体上の好みではなく測定上の決定です。

**「深い学習を支えるツールは、どの枠組みの下でも深い学習に見える。」** 上記のように、ある理論の下では成功に、別の理論の下では失敗に見えます。だからこそ、この分野の成果指標は、中立であるかのように借用するのではなく、明示された理論に照らして正当化される必要があります。

**「理論が多いほど、よく理解された分野である。」** 裁定を伴わない蓄積は進歩の反対です。AI時代のために提案される理論は、検証されるよりも速く増え、成熟のしるしは競合する予測が解消されることです。それには、理論を収容するカタログではなく、理論を区別できるデザインが必要です。

**「理論的に言えば、AIについての教育は教育におけるAIと同じである。」** 両者は異なる系に依拠します。一方は学習者がAIを教科としてどう理解するようになるかを問い、他方はAIが学習の起こり方をどう変えるかを問います。両者を混同すると、二つの異なる証拠基盤を混ぜた文献レビューが生まれ、どちらの整合的な像も報告されません。

## 実践への含意

**教員にとって**

- 理論は、何をしてほしいかに応じて選んでください。学習がどう起こるかを説明するのか、学習者の状態を記述するのか、ある実践がなぜ広まるかを説明するのかです。誤った層を適用すると、正しい変数を誤った予測に照らして測ることになります。
- 成果指標がどの理論に負荷を帯びているかを明示してください。同じデータから、水増しされた宿題の得点は行動主義の下では成功として、構成主義の下では失敗として読まれるからです。
- ある枠組みが構成間の差を予測できないなら、それはあなたの現場では検証できず、決定の助けにもなりません。

**開発者にとって**

- あなたのシステムが体現する理論と、それを反証しうる予測を公表してください。反証可能な差を伴わない「構成主義に基づく」は、内容のない主張です。

**研究者にとって**

- 枠組みの蓄積ではなく、理論間の裁定のためにデザインしてください。成熟は語彙の増加ではなく、競合する予測が解消されることに現れます。

## 関連概念

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## 関連記事
- [[yan-agentivism-learning-theory-ai-2026]] — A mid-range learning theory for human-AI interaction, with four mechanisms and six testable propositions (Yan and Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — AI-Augmented Inquiry and Regulation in Hybrid Systems (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Positions AI as a cognitive partner in human-AI co-regulation; developmental framework across the lifespan
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: a philosophical framework reconceptualizing thinking as human–AI interaction
- [[self-directed-growth-generative-ai-learning-analytics]] — Self-Directed Growth and the A2PL model extending self-directed learning with GenAI
- [[generativism-learning-theory]] — Proposes a new learning theory for the generative AI age, revisiting the classical four
- [[ai-vocational-education-training-review]] — Documented the constructivism/behaviorism theory-practice gap in AI for VET
- [[genai-educational-outcomes-meta-analysis]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — Generative AI as a Mediational Agent
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[rachatasumrit-example-problem-ratio-2026]]
