---
title: 学習者
created: "2026-10-10T22:38:09-04:00"
updated: "2026-10-10T22:38:09-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **総括:** 学習者は[[ai-education|教育における AI]]の主要な受け手です——[[k-12|K-12]]、[[higher-ed|高等教育]]、[[adult-learning|成人学習]]に属し、その営み、理解、自己感を今や AI が形作っている学生たちです。このページは、ナレッジベースの学習者側の記述を束ねる包括的なページです。学習者が経験すること（[[student-experience|学生経験]]）、彼らが誰になりつつあるか（[[learner-identity|学習者アイデンティティ]]）、彼らが依然として選択すること（[[agency|主体性]]）、彼らが実際に道具とどう関わるか（[[student-ai-interaction|学生と AI の相互作用]]）、そのもとで努力と[[self-regulated-learning|自己調整]]が保たれるか（[[cognitive-offloading|認知的オフローディング]]）、そして AI システムが彼らをどうモデル化するか（[[student-modeling|学生モデリング]]）。その研究を通じて繰り返し見出されるのは、同じ道具が異なる学習者に異なる仕方で益にも害にもなるということです——利得は、[[prior-knowledge|既存知識]]、[[ai-literacy|AI リテラシー]]、検証の習慣がすでに備わっているところに集中し、逆転は、AI がその課題が育てるはずだった思考を代替するところに集中します。

## 検討すべき問い

- あなた自身の文脈で、新しい AI ツールが最初に届くのはどの学習者で、取り残されるのはどの学習者でしょうか——そして、そう考える根拠は何でしょうか。
- 研究はしばしば、学生は AI が助けになったと*信じている*一方、支援のない測定では利得がない、または損失があると報告します。学習者自身の語りが信頼できる証拠でないなら、学習が起きた証拠として何を受け入れるでしょうか。
- ここで学習者は、AI を使う人としても、AI がモデル化する対象（[[student-modeling|学習者モデル]]、[[knowledge-tracing|知識追跡]]、[[simulating-students|シミュレートされた学生]]）としても記述されています。学習者のモデルはどこまで教授を導くべきで、どこから信用をやめるべきでしょうか。
- [[self-regulated-learning|自己調整]]と[[prior-knowledge|既存知識]]が、AI による支援が学習になるのか代替になるのかを決めます。それは修復すべき学習者の欠陥でしょうか、解決すべき設計上の問題でしょうか、それとも修正すべき評価上の問題でしょうか。
- ある学習者の集団が AI ツールでうまくいかない場合、そのツールの設計者が最後にそれを知るのが常です。導入の前後に学習者から聞くための日常的な仕組みは、あなたの機関では実際にどのようなものでしょうか。
- 達成度と並んで[[agency|学習者主体性]]と[[learner-identity|アイデンティティ]]も賭けられています。それらのどれを測定可能な[[learning-gains|得点の伸び]]と交換することを拒むでしょうか——そして、その評価設計はその拒否を可視にするでしょうか。

## はじめに

学習者はこのナレッジベースに 2 つの非常に異なる姿で現れ、両者を混同することがこの分野の混乱の大半を引き起こしています。第 1 に、学習者は **AI を使う人**です。問いを立て、答えを受け入れたり抵抗したりし、踏みとどまったり踏み外したりし、支援、罪悪感、不安、依存の経験を報告します。第 2 に、学習者は **AI システムがモデル化する対象**です。[[knowledge-tracing|知識追跡]]におけるスキル推定、[[cognitive-diagnosis|認知診断]]における潜在状態、または実在の学習者の代役を務める[[simulating-students|シミュレートされた学生]]です。前者についての証拠は調査、インタビュー、ログ分析、実験から来ます。後者についての証拠は測定の機構そのものから来ます——そして学習者のモデルは主張であり、学習者ではありません。

このページは両方への入口です。ナレッジベースが扱う学習者側の概念を集め、それらの関係を説明し、その背後にある研究を結びつけます。[[stakeholders]]は同じ分野のもう一方の側——[[teacher-role|教師]]、[[administrator|管理者]]、設計者、政策立案者——を扱い、両ページは併せて読まれることを意図しています。

## 学習者と見なされるのは誰か

ナレッジベースは、正規の教育の全範囲にわたる学習者を扱います。[[k-12|K-12]]の児童・生徒、[[higher-ed|大学生]]、[[vocational-education|職業]]教育と[[professional-training|専門職]]訓練の学習者、[[special-education|障害のある学習者]]、[[neurodiversity|神経多様性のある学習者]]、[[multilingual-learning|多言語の学習者]]を含む、[[adult-learning|成人]]・[[lifelong-learning|生涯]]学習者です。2 つの慣習が重要です。第 1 に、「学習者」と「学生」は有用な意味で互換ではありません。*学生*は制度的な役割を指し、*学習者*は活動を指します。人は片方であって他方でないことがあります（[[professional-training|職場の研修]]を受ける従業員は学習者ですが学生ではありません）。第 2 に、学習者は均質な集団ではなく、その異質性こそが研究が繰り返し表面化させるものです——[[prior-knowledge|既存知識]]、[[self-regulated-learning|自己調整]]、言語、アクセス、障害の状況が、AI ツールが助けになるかどうかをすべて変えます。

## 学習者が経験すること

[[student-experience|学生経験]]は教育における AI の最も研究されている次元の 1 つであり、その中心的な教訓は、効果が一様ではなく入り混じっているということです。[[student-perceptions-ai-study-productivity-2026|学習生産性に関する調査研究]]は、学習者が真の効率の利得を報告していることを見出します——92.3% が AI が理解を改善したと述べた——と同時に、見出しの数字が隠す隔たりもあります。全体の学習時間を短縮したと述べたのは 38.5% のみで、半数は、独立に学ぼうとする代わりに AI に頼ることがあると報告しました。[[uneven-impact-generative-ai-student-learning-2026|依存パターンの分析]]はさらに進みます。[[ai-literacy|AI リテラシー]]と評価スキルの水準が異なる学生は、道具と質的に異なる関係に至るため、同じ履修方針が異なる学習者に異なる結果を生み出します——ある者には支援、他の者には代替。[[genai-student-experiences-uk-he-survey-2026|学生は最小努力の引力を自分の言葉で語り]]、それは[[academic-integrity|学術的誠実性]]と[[misconceptions|誤概念]]のページで、道徳的な問題ではなく設計と政策の問題として扱われます。

感情は認知的物語と並行して走ります。[[anxiety-and-stress|不安とストレス]]と[[well-being|ウェルビーイング]]は、追い越されることについての不安、不正行為と咎められることについての不安、そして追究している学位の価値についての不安を記録しています。学習者の AI に関するメンタルモデル——それが何で、何のためだと思うか——は、彼らがそれをうまく使うかどうかの上流にあります。そのため[[misconceptions|誤概念]]と[[framing-ai-use-for-students|学生のための AI 使用の枠づけ]]が、学習者側の研究全体に現れます。

学習者の語りは、学習者側の政策の多くを枠づける誠実性の物語も複雑にします。[[mulisa-students-genai-integrity-perspectives-2026|エチオピアの 1 大学の 27 人の学部生へのインタビュー]]は、生成 AI のほぼ普遍的な使用と、真に割れた[[ethics|倫理的]]な読みを見出しました——多くは道具が自分の達成を高めたと評価し、少数は履修での使用を不正行為と呼び、ほとんど全員が、AI 使用者が勤勉な独立学習者を上回るという不平等な競技場を報告し、ある者はその効果を、自分の勤勉さを殺すものだと述べました。不正手続きの学生側は、使用の学生側よりも文献で薄いですが、[[munoz-misconduct-allegation-evidence-2026|1,162 件の生成 AI 不正申立ての事件ファイル分析]]は、制度的な対応が届いたとき学習者が何に直面するかを示しています。最も頻繁に引用される証拠は最も評価の低い種類のものであり、事件が進むかどうかを統べる最低限の証拠の敷居はなく、薄い証拠に依拠する案件の学生は不服申し立てへと押しやられます。

## アイデンティティ、主体性、著作性

学習者側の研究は成果についてだけではありません。[[learner-identity|学習者アイデンティティ]]は、学習者が学問と AI に対して誰になりつつあるかを問い、証拠は両方向に走ります。よく設計された使用は学科への帰属意識を支えられますが、外部委託は仕事が自分のものであるという感覚を侵食しえます。[[agency|主体性]]は、学習者が依然として統制するものを問います。ナレッジベースは両方を、達成への「ソフト」な付属物ではなく、真に賭けられているものとして扱います。AI とともに正しい産出を生み出しながら、その背後にある推論を最早認識しない学習者は、成績が記録しない何かを失っています。著作性の問いは、学習者自身が最も苦闘する箇所です。[[mulisa-students-genai-integrity-perspectives-2026|生成 AI と誠実性についてインタビューされた学生]]は、他の著者が存在しないために独創性を主張しました——「それが私の独創的な考えでなければ、誰のものでしょうか」——一方、他の者はその仕事は自分を表していないと結論づけ、ある者は、AI は人ではないのだから、それを共同著者として認識しえないという方向へと推論しました。

## AI との相互作用——学習者が実際にすること

[[student-ai-interaction|学生と AI の相互作用]]のページは、学習者が AI に何を求めるか、彼らのプロンプトと対話がどう進化するか、そして相互作用の質がアクセスよりもなぜ[[learning-gains|学習の成果]]をよく予測するかを集めています。[[student-llm-interaction-taxonomy-review-2026|33 研究から採られた 46 の分類法の迅速なスコーピングレビュー]]は、その証拠基盤が概念的には分断していることを見出します——研究はデータ源、分類の枠組み、分析の単位が異なるため、「質の高い相互作用」はそれらの間でまだ比較可能な構成概念ではなく、レビューの呼びかけは、既存するという主張ではなく、学習志向の[[llm|LLM]]使用の収斂的な分類法へ向けたものです。[[student-ai-conversations-cognitive-engagement-2026|チャット内容の研究]]は、学生が特徴的な仕方で自分を律することを見出します。関与の範囲は、主張を詮索し検証することから、最初のもっともらしい答えを受け入れることまでです。[[help-seeking|援助要請]]は古い枠組みを供給します。助けを求めることはスキルであり、誤った相手に誤った仕方で助けを求めることは、AI が取り除かない既知の失敗モードです。

## 努力、自己調整、パフォーマンスと学習のギャップ

ここが学習者側の証拠が最も帰結を持ちます。学習者が*AI を使ってできること*と*AI なしでできること*を分かつ場所だからです。

[[cognitive-offloading|認知的オフローディング]]は過度の依存の証拠を集めます。[[genai-performance-vs-learning|支援されたパフォーマンスと支援なしの能力は別個に測定されなければならないという中心的な方法論的要点]]を述べます。[[layer-sensitive-cognitive-offloading-writing-2026|執筆の層感応的な研究]]は、表層的、構造的、観念的、推論的なオフローディングを切り分け、最も境界の緩い条件で最も高い支援されたパフォーマンスと、8 週間後の最も低い独立的パフォーマンスを見出します。[[shaw-nave-cognitive-surrender-2026|Shaw と Nave の認知的降伏の説明]]は、委任を戦略的ではなく習慣的にする性向を名指します。[[metacognitively-discordant-completion-genai-2026|メタ認知的不調和]]は、不快な中間例——理解していないと気づきながら提出する学習者——を記録します。[[verification-quality-reliance-calibration-genai-2026|検証の研究]]は、「確かめる」こと自体が二値的な習慣ではなく段階的なスキルであることを示します。設計側では、[[desirable-difficulties|生産的な困難]]と[[reducing-ai-misuse|AI の誤用を減らす]]が、課題が求めるはずの努力を回復する介入を集めています。

## 学習者としてのモデル

最も長い技術的系譜を持つ学習者側の概念は、学習者をシステムに表現するものです。[[student-modeling|学生モデリング]]がその族を扱います。[[knowledge-tracing|知識追跡]]は時間を通じたスキル習得を推定し、[[cognitive-diagnosis|認知診断]]は特定の誤概念を位置づけ、それらの推定を消費する適応的で[[personalized-learning|個別化]]されたシステムがあります。[[simulating-students|学生のシミュレーション]]と[[simulating-students-llm-review-2026|そのレビュー]]は、[[simulation|シミュレーション]]を、実在の学習者が利用できないときに[[intelligent-tutoring|チュータ]]を試しデータを生成する方法として扱います——明示的に暫定的な代役であり、代替ではありません。この文献には 2 つの注意が貫かれています。モデルの推定は、項目とインターフェースの作り方に敏感な行動からの推論であるということ、そして[[demographic-signals-llm-student-assessment-2026|人口統計的シグナルの研究]]は、評価システムが構成概念に含まれることを決して意図されなかった学習者アイデンティティの代理（言語、背景）を拾い上げられることを示しています。[[self-report-measures|自己報告測定]]は、研究側の鏡像の問題を扱います。学習者が自分の学習について言うことは、彼らができることとしばしば乖離します。

## 学習者間の公平性

利得が既存の有利さに従うため、学習者側の仕事は[[equity-in-ai-education|教育における AI の公平性]]と切り離せません。[[digital-divide|デジタル・ディバイド]]と有料モデル層へのアクセスは、誰が最も強い道具を得るかを形作ります。[[bias-mitigation|公平性]]の関心は、学習されたモデルが異なる集団をどう扱うかを統べます。[[inclusive-learning|包摂的な学習]]、[[accessibility|アクセシビリティ]]、[[special-education|特別な教育]]、[[neurodiversity|神経多様性]]は、既定の設計が無視するニーズを持つ学習者を扱います。この研究からの実践的な教訓は、「AI は学生を助ける」は発見ではないということです。発見はつねに、*どの*学生が、*どんな*条件のもとで、*どんな*既存知識とアクセスを持って、ということです。2 つの集団がそのリスクの特徴的な分け前を負っています。[[wright-transcription-not-generation-2026|Wright (2026)]]は、「[[generative-ai|生成 AI]]」ではなく機能を中心に書かれた禁止が、学習者がすでに著作した仕事の形式を変換する文字変換ツールを捕捉すると論じます。その結果生じる誤検知は、音声からテキストへの変換と OCR に頼る障害のある学習者に最も重くのしかかります。AI を活用した OCR が廃止された支援ソフトウェアを置き換えた場面も含めてです。[[harerimana-remote-proctoring-nursing-scoping-2026|遠隔監視のスコーピングレビュー]]は、評価条件について平行した点を述べます。接続性、データ通信料、機器の故障が、誰がそもそも評価されうるかを決めることを見出しました——これは技術的な発見ではなく公平性に関する発見であり、低・中所得国に集中したものです。

## このページの位置づけ

学習者の周囲の人々については[[stakeholders|関係者]]と、これらの発見を教師がどう扱うかについては[[pedagogy|教授法]]と[[learning-design|学習設計]]と併せて読んでください。[[assessment|評価]]は、どの学習者能力が可視にされるかを決めます。[[limitations-in-aied-research|AIEd 研究の限界]]は、なぜ学習者側の証拠の多くが短期で自己報告に基づき、便宜的な標本で行われているかを説明します。そして[[misconceptions|誤概念]]は、学習者自身にとっての通常の入口です。

## 関連する概念

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — 学習者が AI をどう知覚し、相互作用し、影響されるか
- [[learner-identity]] — 学習者が学問と AI に対して誰になりつつあるか
- [[agency]] — 学習者が依然として統制し選択すること
- [[student-ai-interaction]] — 学習者が実際に AI に何を求め、対話がどう進化するか
- [[cognitive-offloading]] — 過度の依存と、思考の AI への代替
- [[self-regulated-learning]] — 自分の学習を計画し、監視し、調整すること
- [[help-seeking]] — うまく助けを求めること、そして学習者がそれをしないときの失敗モード
- [[metacognition]] — 自分が何を理解し理解していないかを知ること
- [[motivation]] — 学習者がなぜ続け、なぜ止めるか
- [[self-efficacy]] — 学習者自身の能力への自信
- [[student-engagement]] — 行動的、感情的、認知的関与
- [[prior-knowledge]] — 支援が学習になるかどうかを決める背景知識
- [[student-modeling]] — システムの内部に学習者を表現すること
- [[knowledge-tracing]] — 時間を通じたスキル習得の推定
- [[simulating-students]] — 暫定的な代役としての LLM でシミュレートされた学習者
- [[ai-literacy]] — 学習者が AI をうまく使えるかどうかを決める能力
- [[equity-in-ai-education]] — 誰が益を得て、誰が見捨てられるか
- [[well-being]] — AI を介した学習の感情的コスト——不安、ストレス
- [[misconceptions]] — 学習者が AI に持ち込むメンタルモデル
- [[stakeholders]] — 同じ分野のもう一方の側——教師、指導者、設計者
- [[assessment]] — どの学習者能力がつねに可視にされるか

## 関連する記事

- [[uneven-impact-generative-ai-student-learning-2026]] — 依存パターンと評価リテラシーが学生の成果を分かつ
- [[student-perceptions-ai-study-productivity-2026]] — 学習者が依存の懸念と並んで効率の利得を報告する
- [[student-llm-interaction-taxonomy-review-2026]] — 学習志向の学生と LLM の相互作用の分類法
- [[student-ai-conversations-cognitive-engagement-2026]] — 学生と AI のチャットにおける学科特有のパターン
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 独立的な能力を伴わない支援されたパフォーマンスの利得
- [[genai-performance-vs-learning]] — なぜ支援されたパフォーマンスと支援なしの学習を切り離して測定しなければならないか
- [[shaw-nave-cognitive-surrender-2026]] — 偶然ではなく性向としての認知的降伏
- [[metacognitively-discordant-completion-genai-2026]] — 理解していないと気づきながら提出する学習者
- [[verification-quality-reliance-calibration-genai-2026]] — 検証の質と依存の較正
- [[simulating-students-llm-review-2026]] — シミュレートされた学生——アーキテクチャ、メカニズム、限界
- [[stanbkt-bayesian-knowledge-tracing]] — ベイズ知識追跡におけるパラメータ推定
- [[demographic-signals-llm-student-assessment-2026]] — LLM ベースの評価における暗黙的および明示的な人口統計的シグナル
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI リテラシー、関与、心理的資本
- [[genai-student-experiences-uk-he-survey-2026]] — 学生が最小努力の引力を語る
- [[mulisa-students-genai-integrity-perspectives-2026]] — 生成 AI が不正ツールか学習のパートナーかについての学生の見解
- [[munoz-misconduct-allegation-evidence-2026]] — 不正申立てファイルが証拠として実際に含むもの
- [[wright-transcription-not-generation-2026]] — 過度に広い AI 規則と、それが捕まえる学生たち
- [[sharma-judgment-visible-genai-assessment-2026]] — コンプライアンスではなく評価的判断としての誠実性
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 学生にとっての遠隔監視の感情的・公平性上のコスト
