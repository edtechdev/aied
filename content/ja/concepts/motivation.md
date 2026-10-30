---
title: 動機づけ
created: "2026-10-10T22:45:45-04:00"
updated: "2026-10-30T03:22:22-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-determination-theory, student-engagement]
technology: [affective-computing]
connected_faqs: [ai-anxiety-wellbeing, asynchronous-online-courses-ai]
audience: [learners]
confidence: high
source_updated: "2026-10-26T10:00:00-04:00"
translation_of: concepts/motivation
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **動機づけ** — 目標志向的な行動を開始し、方向づけ、持続させる心理的な過程です。[[ai-education|教育におけるAI]]では、動機づけ[[research-methods-aied|研究]]は、AIツールが学習者と教員の動機づけにどう影響するかを調べます。すなわち、AIが粘り強さ、好奇心、内発的な関与を[[scaffolding|足場づけ]]するのか損なうのか、そして、動機づけの状態がAI媒介学習の効果をどう形作るかです。

## 検討すべき問い

- 動機づけは、ある学生が「持っていて」別の学生が欠いている特性としてしばしば扱われます。このページは代わりに、それを、行動を開始し方向づけ持続させる心理的な過程として、また、発達的で社会的に足場づけられるものとして記述しています。それは、学生の動機づけについて誰が責任を負うかという問いをどう組み替えるでしょうか。
- AIツールは摩擦を取り除き学習をより利用可能にできますが、同時に、内発的動機づけを支える認知的努力と闘いを減らすこともできます。何かを「より容易にすること」が、実際にそれをあなたにとってより動機づけが低く、あるいはより満足度が低くしたのはいつでしょうか。
- 自己決定理論は、内発的動機づけが自律性、有能感、関係性から育つと言います。[[intelligent-tutoring|AI家庭教師]]が仕事の大半を行うならば、その3つのうちどれを脅かし、どれを高めうるでしょうか。
- 研究は、AIの[[curriculum-design|カリキュラム]]における学生に異なる動機づけのプロファイルが存在すること、そして、自己決定的なプロファイルに達することが最大のAIリテラシーの伸びを予測したことを見出しています。AIの使用において、受動的に無関心な状態から真に自己決定的な状態へと移るには、何が必要でしょうか。
- このページは、教員の支援が、主に熟達接近目標と成績接近目標 — 「接近」であって「回避」でない志向性 — を通じて、AI支援された関与を駆動することを報告しています。教員がAIの使用をどう枠づけるか（「正しくやるため」対「間違って見られることを避けるため」）は、学生が深く関与するかどうかをどう形作るでしょうか。
- 動機づけのためにデザインするとしたら、目標は学習をより容易にすること、より魅力的にすること、それともより意味のある骨の折れるものにすることでしょうか。[[accessibility]]と内発的動機づけが逆方向に引くのはどこでしょうか。

## はじめに

動機づけは教育研究における基礎的な構成概念であり、教育におけるAIの台頭はそれをさらに重大なものにしました。AIツールは摩擦を取り除き学習をより利用可能にできますが、同時に、内発的動機づけと深い学習を支える認知的努力と闘いを減らすこともできます。このナレッジベースの記事は、学習者向けAIツール、教員向けAIシステム、そしてAIが動機づけられた行動を形作る心理的なメカニズム — [[self-determination-theory|自己決定理論]]、[[self-efficacy-tutoring-learning|自己効力感]]、情動 — にわたって動機づけを探究しています。

- **[[lee-wu-gender-motivation-genai-achievement-2026|Lee & Wu]]**は、性別と動機づけが生成AIとの関与の差異を駆動し、異なる[[learning-gains|達成]]の軌道を生み出すことを示しています。

## 主要な研究テーマ

**AIが学生の動機づけに与える影響**は最も直接的な研究の系譜です。**[[ai-availability-student-motivation]]**は、AI支援の利用可能性が学生の動機づけと粘り強さにどう影響するかを調べ、AIが仕事を行うときの動機づけの侵食に関する[[cognitive-offloading|過度の依存]]研究につなげます。粘り強さについて言えば、短時間の曝露で十分です。求めに応じて答えたアシスタントとの10分間で、参加者は統制群の0.11に対し、無支援の問題の0.20を飛ばすようになりました（[[liu-ai-assistance-reduces-persistence-2026|Liuら、2026年]]）。**[[scheu-mobile-chatbot-journaling-motivation-2026]]**は、動機づけの介入としてのモバイル[[conversational-ai|チャットボット]]によるジャーナリングを探究しています。**[[ai-learning-tools-engineering-education-needs]]**は、[[engineering-education|工学教育]]において学生がAI学習ツールを採用する動機となるものを調べます。

42研究のメタアナリシス（56効果量、6,059人の学生）は、生成AI支援の学習が動機づけをHedges' g = 0.764（95% CI [0.566, 0.962]）だけ高めたことを見出しました。ただし、I² = 93.7% であり95%予測区間が[−0.689, 2.217]であるため、この平均は、効果がゼロに近いか負である設定を覆い隠しています（[[genai-learning-motivation-meta-analysis-2026|Fangら（2026年）]]）。
- **内省を伴わない使用は動機づけを侵食する — 男性においてとりわけ。** 考えなしの生成AI使用（答えを吟味せずに受け入れること）は、487名の学部生において、より低い動機づけ（β = −0.54）とより低い[[self-efficacy]]（β = −0.37）を予測しました。動機づけへの効果は男性の学生で有意に強く、自己効力感への効果は女性の学生で強くなりました（[[genai-thoughtless-use-self-directed-learning-2026|Zhao & Gu、2026年]]）。
- **フラストレーションを減らすことは、動機づけを持続させることと同じではない。** 三群の[[rct|RCT]]は、足場づけられたチューターと制限のないChatGPTがフラストレーションを等しく減らした（3.21と3.13 対 4.09）一方、内発的動機づけを高めたのは足場づけられたチューターのみ（2.82 対 2.42、p < .001）で、ChatGPTは高めなかった（2.64、p = .076）ことを見出しました（[[bassner-performance-learning-dissociation-ai-programming-2026|Bassnerら（2026年）]]）。

なぜ人がAIに手を伸ばすかは、それ自体が測定可能な変数です。AIR尺度は、生成AI支援の読解に対する4つの動機 — 課題志向、気分転換志向、翻訳志向、低労力志向 — を解決し、低労力志向（疲れていたり無関心だったりするときにAIを用いること）だけが、認知欲求と負の相関を持ちました（r = −.18）（[[air-scale-motivations-ai-reading-2026|Brann、Etgar、Sidi（2026年）]]）。

**AI媒介された関与における動機づけ**は、動機づけの質（量だけでなく）がAIとともにどう変わるかを調べます。**[[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|Isaevaら]]**は、自己決定理論と[[network-analysis|エピステミックネットワーク分析]]を組み合わせて、[[generative-ai|生成AI]]との関与を研究しました。**[[liang-ai-learning-motivation-sdt-2026|Liangら（2026年）]]**は、1年間のAIカリキュラムにおける**2,086人の[[k-12|中等教育]]学生**について、潜在移行分析によって発達的に動機づけをたどり、3つの安定したプロファイル（無関心、発達中、自己決定的）と、自己決定的なプロファイルに達することが最大の[[ai-literacy]]の伸びを予測したことを見出しました。**[[wang-goal-setting-ai-engagement-2026|Wang & Wang（2026年）]]**は、**758人の[[higher-ed|大学]]英語学習者**に目標設定理論を用い、**教員の支援**が主に熟達接近目標と成績接近目標（接近であって回避でない目標志向性）を通じてAI支援された関与を駆動することを示しました。まとめると、これらの研究は、AIの文脈における動機づけが発達的であると同時に社会的に足場づけられることを示しています。すなわち、それは時間とともに変化し、ツールのデザインだけでなく、教員の支援と目標の枠づけに応じるのです。

目標志向性はまた、ツールがどう用いられるかの経路を決めます。熟達目標と規範的な成績目標は精緻化と精錬を支える傾向があり、一方、外見上の成績目標は、労力の最小化と知覚された有能感の保護をより起こりやすくします。したがって、同じアシスタントが、動機づけの風土に応じて、思考を足場づけもすれば代替もするのです（[[oby-chatgpt-use-learning-framework-2026|Øby、2026年]]）。 報酬への動機づけはAIフィードバックの届く範囲を鈍らせうる。[[chatgpt-feedback-credibility-perceived-learning|Pérez-Lópezら（2026年）]]では、評定に基づく報酬感受性が高まるにつれて、信頼性と知覚された学習の結びつきが弱まりました。単純傾斜は低・平均・高の感受性で b = 0.733、0.607、0.483 でした。

制度的な生成[[educational-policy-ai|AI]]政策は、[[learners|学習者]]が評価するストレッサーそのものです。[[gai-advocacy-practice-art-education-2026|Chen（2026年）]]は、大学のGAIへの提唱と教室での実践の間の隔たりが、中国の芸術・デザインの学生において挑戦の評価と妨害の評価の両方を高め、[[creativity|創造的]]過程への関与に対して逆方向の間接効果を持つことを見出しました。一方、経路思考は挑戦の経路だけを増幅しました。

対話形式は、全体的な評価を改善することなく動機づけを高めうる。222人の高校1年生において、教員–教員の対話は、具体的経験の高い学習者にとって、教員–学生形式よりもARCS動機づけを高めました（b = 0.162、p < .001）が、全体的な評価では有意に低く得点しました（b = -0.126、p = .005）（[[tts-dialogue-lessons-learner-characteristics-2026|Watanabeら（2026年）]]）。

動機づけは学生がツールをどう枠づけるかを形作り、その枠づけがメタ認知的な見返りを運びます。[[cui-motivation-roles-metacognitive-genai-2026|Cuiら（2026年）]]は、協働者の役割 — ログの7.5% — だけが完全なメタ認知的な連鎖を生み出したことを見出しました。一方、外発的に動機づけられた学生は、生成AIをログの64.6%で代替ツールとして用い、より高次の関連を生み出しませんでした。

**動機づけの伸びは、構成概念特異的であって全般的ではない。** [[genai-writing-program-primary-l2-motivation-engagement|Luら（2026年）]]は、5・6年生の301人の学習者を対象とした9週間の生成AI支援の[[writing-education|ライティング]]プログラムが、理想的なL2ライティング自己と学問的な浮力 — 動機づけの渇仰的な構成要素と回復力の構成要素 — を高めた一方、成長マインドセットは変えなかったことを見出しました。唯一の成長マインドセットの伸びは統制群に現れ、多重比較の補正を生き延びませんでした。学生はこの変化を、すでに知っている語彙から流暢なテキストが組み立てられるのを見たことに帰しました。それが、成功するライティングを達成可能なものに感じさせたのです。したがって、動機づけはAIが一つ上げる単一のダイヤルではありません。改善したのは、自分は*上手に*書けるという信念であって、能力が努力とともに育つという信念ではありませんでした。生成AI自体が関連性の介入であるときにも、同じ構成概念特異性が現れます。[[genai-math-relevance-intervention-2026|Guo、Fryer、Shum（2026年）]]は、**218人の高校生**に、[[math-education|数学]]への個人的な関連性を目指した[[conversational-ai|チャットボット]]との1時間の半構造化された対話に費やさせました。集団的な、クラス水準のバージョンは、同一化としての関連性を高め（F = 4.35、p = .014、η² = 0.04。統制群に対してはF = 11.11、p = .001、η² = 0.073 — 中程度の効果）、SEMにおいて、1週間後の特定の授業への関連性を予測しました（β = 0.18、p < .01）。一方、数学の授業への関心は動きませんでした（F = 0.29、p = .75、η² = 0.003）。著者らはこの乖離を用量に帰しています。1時間1回のセッションは、関連性の伸びが授業への関心に統合されるには短すぎるのです。

有用価値の介入は一様に有益ではありません。足場づけられたバージョンは、養成教員の知識統合において全体的な伸びを生まず、当初高い知覚された有用価値を持って入ってきた学習者にとってはそれを*害し*ました。この適性–処置の交互作用は、動機づけの支援を学習者の出発点に合わせるべきだと論じています（[[utility-value-intervention-teach-responsibly-genai-2026|Boos、Eder & Lachner（2026年）]]）。
**フィードバックメッセージは、学習者の性向ではなく、その知覚された有用性を通じて関心を動かす。** [[jansen-argumentative-writing-feedback-receptivity-2026|Jansenら（2026年）]]は、1,507人の中等教育の学生に、論証的なテキストの第1稿の後に1つの標準化された自動フィードバックメッセージを与えました。全体的な受容性だけが状況的な関心の変化と関連する唯一の受容性の次元であり（観測尺度で約0.11ポイント、およそ第54百分位対第46百分位に相当）、その効果は知覚された有用性によって完全に媒介され（間接 β = 0.09、95% CI [0.06, 0.13]）、有意な直接的な経路は残りませんでした（β = 0.06、95% CI [−0.07, 0.16]）。したがって、関心を動かしたのは、学習者のフィードバックに対する一般的な構えではなく、そのメッセージの感じられた価値だったのです。

**教員の動機づけと粘り強さ**は、教育者の間の動機づけを調べます。**[[framing-5-percent-problem-teachers-persistence|5パーセント問題の枠づけ]]**はAIツールを用いる教員の粘り強さを研究し、**[[teacher-education-ai-literacy-sdt-2026|Chiuら]]**は、ニーズを支える[[educational-development|専門能力開発]]が専門的な学習共同体における持続的な行動的関与を育むことを見出しました。

- **将来の教員の異文化間の動機づけ：** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Morenoら（2026年）]]は、スイスと中国の416人の養成教員で(D)FIT-Choice尺度を検証し、スイスの教員はより強い社会的有用性と内発的動機づけを報告する一方、中国の教員はより高い知覚されたデジタル・コンピテンシーとAI統合への熱意を示すことを見出しました。これは、AIとともに教育の未来を形作る動機づけを、文化的・制度的な要因がどう形作るかを浮き彫りにしています。
- **自己効力感は、教員の生成AIに対する楽しさの根である。** 434人の現職教員を対象としたPLS-SEM研究で、自己効力感はモデルの唯一の外生変数であり、その最大の効果は知覚された楽しさに対してのものでした（β = 0.805、f² = 1.839）。それは次に知覚された有用性と使いやすさに流れ込みました（[[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámezら、2026年]]）。

**努力のパラドックスと支援の悪循環。** [[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar、Bloom、Inzlicht（2026年）]]は、動機づけはAIによって単に助けられたり妨げられたりするのではなく、再分配されると論じています。人間は一般に最も抵抗の少ない道を選びますが、同時に努力を求めもします — これが努力のパラドックスです。努力は、行動が重要であることを知らせるためであり、そして、報酬が成果物ではなく過程に付随するときに、努力し粘り強くある傾向が高まるためです。2つの主張が続きます。第一に、努力と意味の関係は逆U字型であるため、動機づけの目標は中程度の摩擦であり、摩擦のないAIのリスクは、少なすぎる領域へと行き過ぎることです。第二に、悪循環です。AIがある領域で努力を代替するにつれて、そこで努力の動機づけ上の便益は侵食され、それが利用者をAIにより依存させ、さらなる動機づけの侵食につながります。彼らはまた、発達段階によって補足と代替を区別しています。より初期の段階の学習者は、粘り強さを構築する経験を迂回するリスクを負い、一方、確立されたスキルを持つ者はAIを用いて時間を節約しうるのです（[[desirable-difficulties]]、[[self-efficacy]]）。

**文献は、動機づけについての理論なしに動機づけを測定している。** 2003年から2025年までの156研究のスコーピングレビューは、133（85.3%）が特定の動機づけ理論に導かれていないことを見出し、最もよくある変数は一般化された学業的動機づけ（n = 89）であり、88研究（56.4%）が一つの国家的文脈から来ていました（[[ai-student-motivation-scoping-review-2026|Liら、2026年]]）。

動機づけはまた、技術の知覚と並ぶだけでなく、その上流でも働きます。340人の物理の標本では、有用価値が知覚された有用性を（β = 0.43）、内発的価値が態度を（β = 0.20）予測し、一方で知覚されたコストは使いやすさ（β = −0.16）と態度（β = −0.27）を下げ、意図への直接の経路はありませんでした（[[high-school-genai-acceptance-tam-physics-2026|Xue、Xu、Qi、Lu（2026年）]]）。

## 関連する概念とのつながり

動機づけは[[self-determination-theory]]の親の構成概念であり、それは、内発的動機づけを持続させる心理的なニーズ（自律性、有能感、関係性）を特定します。それは、動機づけられた関与の経験的な層として[[student-experience]]に、その測定可能な次元として[[student-engagement]]に、動機づけを形作る情動的なメカニズムのために[[affective-computing]]につながります。動機づけはまた、[[cognitive-offloading|過度の依存]]（[[desirable-difficulties|生産的な闘い]]を減らすAI）、[[self-regulated-learning]]（動機づけられた学習者は自己調整する）、[[teacher-role]]（動機づけは学生だけでなく教育者にも当てはまる）につながります。

## よくある誤解

- **「生成AIの動機づけへの効果は、きれいで大きな利得である。」** 42研究のメタアナリシス（56効果量、6,059人の学生）は動機づけへの効果を g = 0.764（95% CI [0.566, 0.962]）と見出しましたが、**I² = 93.7%** でした。これほど高い異質性は、プールされた数値が互いに一致しない研究の集合を記述していることを意味し、それは一貫しない処置にわたる平均であって、再現可能な効果ではありません。
- **「フラストレーションを減らすことは、動機づけを持続させることと同じである。」** 三群の[[rct|RCT]]は、足場づけられたチューターと制限のないChatGPTが**フラストレーションを等しく減らした**ことを見出しました（3.21と3.13）。二つの非常に異なる設計が同じ情動的な結果を生んだため、フラストレーションのデータはそれらを区別できません。
- **「動機づけるデザインは、良いデザインである。」** **222人の高校1年生**において、教員から教員への対話形式は代替よりも**ARCS動機づけを高く**しながら、**全体的な評価を改善しませんでした**。動機づけは動き、判断された質は動きませんでした。

## 関連する概念

- [[learners]] — 学習者：学習者側の概念を束ねる上位概念
- [[self-directed-learning]]
- [[self-determination-theory]]
- [[student-experience]]
- [[student-engagement]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[teacher-role]]
- [[ai-education]]
- [[framing-ai-use-for-students]]
- [[social-emotional-learning]] — 社会情動的学習
## 関連する記事
- [[liu-ai-assistance-reduces-persistence-2026]] — 短時間のAI使用は、後の無支援問題における粘り強さを低下させた（Liuら、2026年）
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — 論証的ライティングへの自動フィードバック：中等教育の学生のフィードバック受容性とフィードバック知覚の役割
- [[zohar-bloom-inzlicht-against-frictionless-ai-2026]] — 努力のパラドックスと摩擦のない支援の悪循環
- [[cui-motivation-roles-metacognitive-genai-2026]] — メタ認知的生成AI関与における動機づけと役割
- [[lee-wu-gender-motivation-genai-achievement-2026]] — 性別、動機づけ、生成AIの達成の軌道
- [[oby-chatgpt-use-learning-framework-2026]]
- [[genai-thoughtless-use-self-directed-learning-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[chatgpt-perception-online-learning-engagement-2026]]
- [[genai-student-experiences-uk-he-survey-2026]]
- [[ai-availability-student-motivation]]
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]]
- [[teacher-education-ai-literacy-sdt-2026]]
- [[scheu-mobile-chatbot-journaling-motivation-2026]]
- [[framing-5-percent-problem-teachers-persistence]]
- [[self-efficacy-tutoring-learning]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — 生成AIカリキュラムデザインのための教員のデジタル・コンピテンシーの評価（Guillén-Gámez 2026）
- [[motivation-shape-future-education-ai-switzerland-china]] — AIとともに教育の未来を形作る動機づけ
- [[tts-dialogue-lessons-learner-characteristics-2026]] — 学習者の特性×TTS対話形式の交互作用
- [[student-perceptions-ai-study-productivity-2026]] — 学習の生産性と学習のためのAIツールに関する学生の知覚：探索的な調査研究
- [[liang-ai-learning-motivation-sdt-2026]] — 学生のAI学習動機づけのSDT潜在移行分析（中等教育学生2,086人）
- [[wang-goal-setting-ai-engagement-2026]] — 目標設定理論：AI支援英語学習における教員の支援、達成目標、関与（中国人学生758人）
- [[utility-value-intervention-teach-responsibly-genai-2026]] — 生成AIを用いて責任持って教わることを学ぶ際の有用価値介入の効果（Boos、Eder & Lachner 2026）
- [[genai-writing-program-primary-l2-motivation-engagement]] — 初等L2生成AIライティングプログラムにおける構成概念特異的な動機づけの伸び（Luら、2026年）
- [[air-scale-motivations-ai-reading-2026]] — AIR尺度：読解中にAIに手を伸ばす4つの動機の一群
- [[genai-math-relevance-intervention-2026]] — 生成AIの関連性の対話は、同一化としての関連性を高めたが、授業への関心は平らなままだった

- [[genai-learning-motivation-meta-analysis-2026]] — 生成AIの学習動機づけへの効果のランダム効果メタアナリシス（56効果量、6,059人の学生）
- [[ai-student-motivation-scoping-review-2026]] — AIと学生の動機づけに関する156研究：85.3%が動機づけ理論を用いず、構成概念、水準、国の面で範囲が狭い
- [[high-school-genai-acceptance-tam-physics-2026]] — 生成AI受容の先行要因としての期待価値の信念
- [[gai-advocacy-practice-art-education-2026]] — GAIの提唱における政策と実践の隔たりが、学生が評価するストレッサーとして働く
- [[bassner-performance-learning-dissociation-ai-programming-2026]] — 足場づけられたチューターは内発的動機づけを高めたが、制限のないChatGPTは高めなかった
