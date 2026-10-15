---
title: 学習者集団間で異なる効果
created: "2026-10-10T22:31:18-04:00"
updated: "2026-10-10T22:31:18-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **学習者集団間で異なる効果**——[[ai-education|教育における AI]]研究が、AI の*利用*とその*効果*がどのような学習者の間でどう異なるかについて見出したものです。[[special-education|障害のある学生]]と[[neurodiversity|神経多様性のある学生]]、第二言語および[[multilingual-learning|多言語の学習者]]、女子と男子、少数化された学生、低所得層の出身学生、地方の学生、第一世代の学生、留学生、そして[[adult-learning|成人学習者]]です。持ち帰る価値のあるパターンは、同時に二つの方向に一様でないものです。いくつかの流れには本物の証拠があり（障害、言語）、他はほぼ空っぽです（第一世代、留学生、難民）、そして強い流れでさえ、*集団*が異なることをめったに立証しません——それらが立証するのは、ツールがその集団の標本を助けたか害したかということであり、それは別の主張です。このページは、何が存在するか、それが何を示すか、そして集団の平均が一人の学習者についての予測ではない方法的な理由を写像します。

## 検討すべき問い

- あなたのツールはおおむねクラスの学生には機能し、5 人の下位集団が苦労しました。その規模の下位集団差は、この種の研究でそもそも検出可能でしょうか——そしてあなたはその証拠だけでクラス全体のツールを変えたいと思うでしょうか。
- 障害のある学生に関する研究は、障害のカテゴリによって異なる効果を報告しています。同じ[[meta-analysis-systematic-review|メタ分析]]の中で二つのカテゴリが非常に異なる効果量に位置するなら、「障害」を設計決定における一つの集団として扱うことについて、それは何を教えるでしょうか。
- いくつかの研究は、その効果が性別によって異ならない AI ツールを見出し、別の研究は[[ai-feedback-quality|AI フィードバック]]と AI 支援の執筆が、ペルソナやプロンプトがそれらを帯びているときに性別のステレオタイプを*再現する*ことを示しています。どうしてその両方が同時に真でありうるでしょうか。
- ほとんどの公正性研究は本物の学習者ではなく模擬された学生ペルソナをテストします。なぜなら、ほとんどの展開では推論時にモデルが本物の人口統計的属性を利用できないからです。反事実的なペルソナ監査は何を確立でき、何を確立できないでしょうか。
- このページの流れを検討して、あなたのツールの検証の背後にある研究に実際に代表されているのはどの学習者集団でしょうか——そして欠けている集団についてあなたはどうするでしょうか。
- 全員の成果を上げながら隔たりを縮める（最も遅れていた学生を最も助ける）介入は、平均を上げるものとは異なる公正性の物語を持ちます。パイロットを評価するとき、あなたは隔たりを測っているのでしょうか、それとも平均を測っているのでしょうか。

## はじめに

「この種類の学生に AI は機能する*か*」という問いの中には、二つの問いが隠れています。第一は効果についての問いです。ツールが異なる集団に対して異なる成果を生むかどうか。第二は利用についての問いです。異なる集団が同じツールを異なる形で採用・アクセス・相互作用するかどうか。それは、差別的な効果がまったくなくても成果を形づくることができます。このページはその両方を、集団ごとに扱い、文献が途切れるところを率直に述べます。

これは隣接するページの単なる重複ではありません。[[equity-in-ai-education|教育における AI の公正性]]は規範的・構造的な枠組み——アクセス、代表性、成果の公正性、そして教育における AI が*どうあるべきか*という議論——を担います。[[inclusive-learning|包摂的な学習]]は設計の枠組みを担います。[[universal-design-for-learning|学びのユニバーサルデザイン]]を含みます。[[digital-divide|デジタルディバイド]]はアクセスとスキルの層を扱います。[[neurodiversity]]、[[special-education|特別教育]]、[[accessibility]]、[[multilingual-learning|多言語学習]]は単一の集団を深く扱います。このページに残されているのは、集団横断的な証拠の地図と評価の問いです。これらの効果がどう推定されるか、どの集団がそもそも研究されるか、そして集団水準の発見があなたに何をすることを許すか。

## 集団差がどう報告されるか、そしてなぜそのほとんどができないのか

**単一集団の研究は差別的な効果の研究ではありません。** この領域の文献の大部分は、対照集団なしに一つの集団を測定します。[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang ら（2024）]]は、障害のある学生に対する AI の（準）実験的研究 29 件を統合し、中程度の正の効果を見出しました（Hedges' g = 0.588, 95% CI [0.349, 0.826]）——神経定型の比較対象はありませんでした。それは介入が助けたことを教えますが、それがこの集団を異なる仕方で助けたことを教えるわけではありません。

**下位集団分析はたいてい、その問いに答えるには小さすぎます。** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE 理科のマイクロ RCT]]は例外的に明示的です。その処置×状況の交互作用は 0.57 点（95% CI −2.25〜3.39）で、層別推定値は一方の集団で g = 0.28（95% CI −0.04〜0.59）、他方の集団で g = 0.35（95% CI 0.18〜0.52）でした。ゼロと重なる下位集団の区間は、学級全体の規則の基盤ではなく、地域のパイロットにとっての問いです。

**人口統計的属性はたいてい模擬されます。** 本物の学習者の人口統計はめったにモデルの入力に付加されないため、監査は代わりにペルソナを供給します。[[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto and Hovy（2026）]]は、三つの教育課題について、モデル既定・明示的ペルソナ・暗黙の履歴の条件のもとで 6 つのインストラクション調整済みモデルを実行しました——192,480 回の推論呼び出し——そして、明示的なペルソナも*暗黙の*会話履歴もモデルの行動を動かすことを見出しました。彼らの区別は保つ価値があります。学習者の差異についての自覚は望ましくありえます（学習者の第一言語に合わせてフィードバックを調整すること）が、同じ感受性は、同一の課題の判定を移すときには害です。

**公正性の修正は一般化しないかもしれません。** [[student-attention-estimation-fairness-2026|Fragkiadakis ら（2026）]]は、学生の注意推定において[[assessment-validity|検証]]データ上の性別および年齢を標的にした誤差の隔たりを縮めましたが、その利得は保留された被験者や反復された被験者水準の分割に一貫して移りませんでした。

**集団のラベルはその内部の変異を隠します。** 同じ障害のメタ分析の中で、特定の学習障害、知的・発達障害のある学生、またはろうの学生は、より大きな効果を示しました（g = 0.952）。自閉スペクトラム症のある学生（g = 0.368）よりも——これは 41 個の独立した標本からの 239 個の効果量にわたって、著者らが統計的に有意ではないと報告する差です。「障害」は一つの集団ではありません。「L2 学習者」も同じです。

## 障害と神経多様性

これはナレッジベースで最も深い流れであり、報告が最も強いところです。

- **効果は本物ですが、成果によって一様に分布していません。** [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang ら（2024）]]では、[[learning-gains|学業成績]]が最も大きな効果を示しました（k = 80, g = 0.929）、日常生活その他のスキル（g = 0.766）と社会情動スキル（k = 144, g = 0.382）に先んじます。出版バイアスが存在しました（Egger's test β = 2.837, p < .001）。trim-and-fill は統合推定値を g = 0.2694 に減らし、それでも統計的に有意なままでした。見出しの効果とバイアス調整後の効果を一緒に読みましょう。
- **この分野は[[generative-ai|生成的 AI]]を中心に再編成しました。** [[assistive-tech-neurodivergent-higher-ed-review-2026|神経多様性のある学生のためのデジタル支援技術のスコーピングレビュー]]は 766 件の記録を選別して 40 件の実証的研究を含め、そのうち 15 件が生成的 AI を、11 件が没入型の形式を用いました。この流れは成熟しているというより小さく新しいのです。
- **一部の AI 支援は差別化するのではなく平準化します。** [[adhd-video-segmentation-computing-education|Pimenova, Begel および同僚ら]]は、被験者内の研究（ADHD 17 名、非 ADHD 10 名）で、[[video-education|教育動画]]を固定の休止を伴う単一命令の断片に区間分割しました。全員が向上し、ADHD の参加者の誤りとためらいは非 ADHD の仲間と同等に下がりました。これは、自動化された内容変換を通じた[[universal-design-for-learning|学びのユニバーサルデザイン]]について利用可能な最強の形の証拠です。集団を標的にした修正ではなく、隔たりを閉じる一般的な変更です。
- **神経多様性のある学生が必要だと言うことは、しばしばありふれたことです。** 4 件のインタビューを伴う、[[neurodivergent-computing-students|神経多様性のある計算機科学の学生 24 名と神経定型の仲間 20 名の調査]]は、明確な構造を欠く、あるいは曖昧な期待を帯びた課題に対する大きな不快感を見出しました——提供するのに何もかからない配慮です。
- **設計上の選択は、認識論的にも排除しえます。** [[genai-minoritized-knowledges-disability|Tali-Otmani（2026）]]は、英語圏の欧米中心の訓練データが非覇権的な知の様式を周縁化し、障害のある学習者の状況をその批判の中心に置くと論じます。

## 言語：第二言語、多言語、英語学習者

論文数ではこれが最大の流れであり、ツールの効果とツールの害にきれいに分かれます。

- **ツールの効果は有望で、ノイズが多いです。** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang and Zou（2026）]]は、ロボット支援の[[language-learning|言語学習]]に関する 11 件の研究（17 個の効果量、N = 595）をメタ分析し、全体的な正の効果（g = 0.83, 95% CI [0.46, 1.21]）を高い異質性とともに見出しました（I² = 84.4%）。検討された 6 つの調節変数のうち、ロボットと学習者の相互作用の種類だけが有意でした。この規模の証拠基盤は、調達決定ではなく暫定的な[[benchmark]]を支えます。
- **インフラ自体が、どんなツールが使われるよりも前に一様ではありません。** [[structural-silence-underrepresented-language-ai-2026|Roy and Roy（2026）]]はベンガル語を事例としてコーパスの隔たりを記録しています。英語のおよそ 49.5% に対して、グローバルなウェブコンテンツの 0.5% 未満であり、ベンガル語話者は世界人口のほぼ 4% を占めるにもかかわらず。
- **教授言語が 294 名の高等教育の学生の成果を変えます。** 同じレビューは、外国語の内容が母語の教授よりも低い成果をもたらし、二言語の[[cs-education|プログラミング]]教授が英語のみの教授を上回ったと報告しています。
- **検出器は第二言語の書き手を罰します。** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge and Mesbah（2026）]]は Turnitin と Originality を 192 件のテキストに対してテストしました。ある検出器は専門家が書いた 48 件中 48 件を正しく分類しましたが、EFL 学生のテキスト 48 件中 4 件を誤分類しました（91.6%）。非対称性が要点です——誤りは、すでに書かれたものを精査されている集団に降りかかるのです。

## 性別

ここでの性別研究は、ツールが学習者を異なる形で扱うかどうかと、学習者がステレオタイプを帯びた道具にさらされるかどうかに分かれます。

- **意図的に性別中立の設計は性別差を示しませんでした。** [[ada-female-coded-chatbot-gender-stereotypes-2026|195 名の 9 年生の準実験的研究]]は、Ada Lovelace に基づく女性コードの[[conversational-ai|チャットボット]]である ADA をテストしました。状況的関心は両性で上昇し、感情的な応答、認知的負荷、学業成績に性別差はありませんでした。ロールモデルのペルソナは、ステレオタイプの脅威を引き起こさずに構築できます。
- **しかしプロンプトの内容はバイアスを学生の仕事に移します。** [[gender-bias-transfer-llm-writing|123 名の参加者による対照研究]]は、性別のみが異なる対になったプロフィールについて、AI なし・中立的な AI・性別バイアスのある AI の条件のもとで、学生に進路計画のエッセイを書かせました。バイアスのある条件は、性別で差別化された言語を学生の執筆に移し、女性の[[agency]]を非対称に抑制しました。研究者らはまず 1,600 本の生成されたエッセイでこの効果を確認しました。
- **空間と枠づけはツールと同じくらい重要です。** [[all-girls-genai-makerspace-gender-equity-2026|女子のみの生成的 AI メイカースペースの事例研究]]は、女子が単一性別の環境をより安全でくつろげると評価したことを見出し、「少女化」——権力関係に触れない表面的な適応——に警告しています。
- **モデルの感受性はモデルの属性であり、定数ではありません。** [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]]では、7B から 70B までの 5 つの家庭教師が 9 つの人口統計水準にわたって監査されました。Qwen2.5-7B は 12 個の領域×次元セルのうち 7 個で |r| ≥ 0.10 のバイアスしきい値を超え、LLaMA-3.1-8B は 1 回だけ超えました。教授法特有の訓練は一部のバイアスを減らし、他を増やしました。
- **単一軸の修正は集団をより悪い状態に残しえます。** 「不明な性別」というカテゴリに押し込められた性別多様な学生は、すべての公正性手法の下で最も低い真陽性率を示し、単一軸の手法はどれも彼らの扱いを改善しませんでした——上の集団ラベルの変動が、家庭教師ではなく予測的な早期警戒モデルの中で現れたものです（[[fairness-theatre-early-warning-systems-2026|McConvey ら（2026）]]）。

## 人種、民族、少数化された学生

この流れは論文数では小さく、機構については強いものです。なぜなら証拠は、AI が人口統計的属性を一つ得たときにそれで*何をするか*に関するものだからです。

- **[[personalized-learning|個別化]]はバイアスのベクトルです。** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]は、学生の人種、言語、障害、達成度、または[[motivation|動機づけ]]でフィードバックが個別化されるとき、[[llm]]執筆フィードバックツールがステレオタイプに沿った称賛へと傾き、批判を差し控えることを示します——同一のエッセイに対して。
- **人口統計の手がかりは暗黙でありえます。** 上の反事実的監査は、明示的なペルソナだけでなく会話履歴が採点とフィードバックの行動を動かしたことを見出しました——同じ[[demographic-signals-llm-student-assessment-2026|192,480 回の推論呼び出し]]の結果であり、*申告された*人口統計に関する開示規則が不十分である理由です。
- **移動と言語の隔たりが支配しえます。** EduFair-Bench では、70B モデルは最大の言語と移民の隔まりを最小の教授法の隔まりと対にし、教授法的に強く見える家庭教師が、学生が誰に見えるかに最も敏感なものでありえます。
- **認識論的な排除であり、単なる誤りではありません：** 上の[[genai-minoritized-knowledges-disability|少数化された知識の周縁化]]を参照。

## 社会経済的地位、地理、年齢

- **媒介するのはデジタルリテラシーであり、AI の利用ではありません。** [[ai-divide-ses-personality-primary-education-2026|Wang および同僚ら（2026）]]は、オランダの 6 年生 4,497 名の調査と全国登録データをモデル化し、性格特性と学業成績のつながりが AI の利用強度ではなくデジタルリテラシーを通じて走ることを見出しました。デジタルリテラシーの差は社会経済的地位よりも性格によってより強く動かされ、SES の利点は AI への関与とは独立に作用しました。古典的な SES のみの枠づけは不完全です。
- **地理が拘束条件になりえます。** [[arc-hubs-k12-ai-robotics-rural-2026|ARC の記述]]は、[[k-12]]のロボット工学と AI 教育について、地方の FIRST LEGO League への参加が 2020 年の遠隔シーズンに落ち込み、都市の参加が徐々に回復する中で決して回復しなかったと報告し、地理的に分布している拘束条件はキットや[[curriculum-design|カリキュラム]]ではなく持続的な地域の技術的メンターシップであると特定しています。
- **成人学習者は別の設計事例です。** [[adult-learning|成人学習]]と、K-12 の研究ではなく、ナレッジベースのアンドラゴジー研究が扱います。
- **アクセスは他のすべてをなお規定しています：** [[digital-divide|デジタルディバイド]]と、[[pedagogy|教授法的]]な統合なしには[[access-not-enough-ai-tutoring-2026|AI 家庭教師へのアクセスは十分ではない]]という発見を参照。

## 専門的な背景

専門的な背景は、このページの集団ごとの地図がまだ担っていなかった差別的な軸です。同じ道具が、学生の人口統計ではなく分野にわたって、その便益を不均等に配分しうるのです。

- **一つの道具がある分野では関与を高め、別の分野では関与を下げうる。** 混合分野のチームに属する 130 名の学部生を対象とした 2 週間の準実験では、[[generative-ai|ChatGPT]]は STEM の学生にとって身体的な[[student-engagement|関与]]を高め、非 STEM の学生にとっては下げました（Q = 9.87, p < .05）。そして ChatGPT なしで書かれたノートは、専門的なアイデアの多様性と統合においてより高く採点されました（[[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu et al. (2026)]]）。

## 証拠が欠けているところ

この調査の正直な発見は、いくつかの集団がどれほど薄いかということです。これらはそれぞれ、このページの隔たりではなく証拠基盤における本物の隔たりです。

- **第一世代の学生：** 一つの研究が効果ではなく利用の差を報告しています。[[student-ai-inquiry-types-cs2-2026|CS2 の探究研究]]では、継続世代の学生は AI を積極的な[[problem-solving]]の協働者として扱い、第一世代の学生は確認的で検証志向の役割を担い、全体的により少ない問いを立てました。
- **第一世代の学生：最初の効果推定値であり、それは望ましくない方向に走ります。** [[liu-course-integrated-ai-tutoring-rct-2026|Liu ら（2026）]]のコース統合型[[intelligent-tutoring|AI 家庭教師]]の[[rct|無作為化試験]]は、上の項目が欠いているものを供給します——利用のパターンではなく測られた差別的な効果です。全標本で、最終成績に対する家庭教師アクセスの効果は、第一世代の学生にとって 2.87 点（0.28 SDs）より負の方向で、彼らにとって −5.10 点（−0.50 SDs）を、仲間にとって −2.23 点（−0.22 SDs）を含意します。差別的な効果は完全一致の標本でより大きかった（−3.89 点、−0.35 SDs）し、第一世代の学生は宿題の点とプラットフォームのページ閲覧数もより多く失いました。研究は機構を報告せず、その精度は成果によって変わりますが、方向は隔たりを縮める物語とは反対です。学術的な支援への事前アクセスが最も少なかった学生が、測られた最大の代償を負ったのです。
- **留学生：** [[international-students-conversational-ai-adaptation|異文化適応の支援]]に関する一つの[[mixed-methods-research|混合手法]]研究（調査 n = 60、インタビュー n = 14）。
- **留学生：測定された関与のパターンであり、効果の推定値ではありません。** 英国の7つの[[business-education|経営学部]]にわたる 270 名の少数エスニシティの留学生について、報告された[[generative-ai]]の利用は、四つの[[student-engagement|関与]]の流れのすべてと正に関連していました。もっとも強くは主体的な関与（β = 0.429）です。そして利用の意図の最強の予測要因は、それを容易にする条件（β = 0.369）でした（[[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya et al. (2026)]]）。
- **ギフテッドで高達成の学生：** このコーパスでは集団として事実上研究されていません。
- **難民、移民、避難民の学習者：** 研究がありません。
- **性別は上の研究のほとんどで依然として二値として分析されており**、障害のカテゴリは研究間で異なるため、「同じ」集団の研究横断的な比較には限界があります。

## 集団のラベルに過剰に当てはめずにこの証拠を使う

- **集団の平均を母集団についての仮説として扱い、一個人についての予測としては決して扱わない。** 上記の差別的な主張はすべて、分布に関する言明です。
- **ツールの主張する包摂性を信じる前に、あなたの学習者が検証標本にそもそも含まれていたかどうかを問う。** 神経多様性と言語の流れはともに、開発における代表性が例外であることを示しています。
- **証拠が許すなら平準化する設計を選好する。** ADHD の動画区間分割の結果——全員が向上し、隔たりが閉じる——は、集団を標的にしたアドオンよりも一般の教室にとってより適合する目標です。
- **人口統計的属性を消費する個別化に注意する。** [[marked-pedagogies-linguistic-bias-writing-feedback|マークされた教授法]]の発見はその機構に直接関わるものであり、[[well-being|ウェルビーイング]]のチェックイン、[[affective-computing|感情的な家庭教師]]、学習者をプロファイリングする[[recommender-systems-and-learning-paths|推薦システム]]に適用されます。
- **あなたが関心を持つ集団について、ツールを使わずに測られた成果で、地域でテストする。** 評価の習慣については[[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]]を、地域のテストを擁護可能にする設計については[[research-methods-aied|Research Methods in AI in Education]]を参照。

## 関連概念

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## 関連論文

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studies of AI for students with disabilities: g = 0.588, and g = 0.269 after bias adjustment
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 records to 40 studies, 15 of them generative AI
- [[adhd-video-segmentation-computing-education]] — A general design change that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergent students on structure, ambiguity, and collaboration
- [[genai-minoritized-knowledges-disability]] — Epistemic marginalization in AI, with disability as the case
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 with I² = 84.4% in a small L2 evidence base
- [[structural-silence-underrepresented-language-ai-2026]] — Bengali's under 0.5% of web content against English's 49.5%
- [[hadra-ai-detector-accuracy-efl-2026]] — Detectors misclassify EFL writing while scoring professional texts perfectly
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — A 195-student test of female-coded role models with no gender difference
- [[gender-bias-transfer-llm-writing]] — Gender-biased prompts transferring into student essays
- [[all-girls-genai-makerspace-gender-equity-2026]] — Single-gender space valued, with a warning against girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Tutor fairness varying by model, domain, and behavior dimension
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Stereotype-aligned feedback on identical essays
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 calls: explicit personas and implicit histories both move models
- [[student-attention-estimation-fairness-2026]] — Fairness regularization that did not generalize
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 students: digital literacy, not AI use, mediates the gap
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Rural participation that never recovered, and mentorship as the constraint
- [[ai-tutoring-micro-rct-gcse-science-2026]] — A subgroup interaction whose confidence interval crosses zero
- [[student-ai-inquiry-types-cs2-2026]] — The corpus's one first-generation usage finding
- [[international-students-conversational-ai-adaptation]] — The corpus's one international-student study
- [[liu-course-integrated-ai-tutoring-rct-2026]] — The corpus's first effect estimate for first-generation students: tutor access cost them 0.50 SDs of final grade against 0.22 for their peers (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPTは学際的な学習においてSTEMの学生と非STEMの学生に不均等に利益をもたらした
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — 少数エスニシティの留学生における生成的AIの利用と四つの流れからなる関与
