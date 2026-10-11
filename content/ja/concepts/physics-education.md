---
title: 物理教育
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T22:46:50-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [socratic-method]
technology: [generative-ai, intelligent-tutoring]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
translation_of: concepts/physics-education
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **物理教育** — 学生が物理をどう学ぶか、そしてどうより効果的に教えるかの研究です。その範囲は、ソクラテス式[[intelligent-tutoring|AI チューター]]、[[computational-thinking|計算的思考]]の評価、学生の[[trust|信頼]]と AI 受容の様態、自動採点の妥当性、そして教員養成にまで及びます。この知識基盤の物理教育関係の記事は、その領域固有性において注目に値します。すなわち、それらは AI の道具が、物理学的推論という独自の認知的要請—視覚空間的思考、数理モデリング、抽象的システム思考、そして多段階の[[problem-solving|問題解決]]—とどう相互作用するかを探究しています。

## 検討すべき問い

- 物理の問題にはしばしば視覚空間的思考、数理モデリング、多段階の推論が必要です。なぜこれらは、まさに現在の AI チューターが苦手とする認知的要請なのでしょうか。
- 学生は大きな「信頼—有用性の隔たり」を報告しています。課題に AI を使う学生は 91% ですが、それを信頼する学生は 41% しかいません。完全には信頼していない道具を使った経験はありますか。その隔たりは何によって生じたでしょうか。
- AI 採点は、言語的に弱い学生の物理の説明を体系的に過小評価しました。それは、AI が説明を評価することと正しい数値解答を評価することの違いについて、何を示唆しているでしょうか。
- ある研究は、ソクラテス式 AI チャットボットが実際の物理の授業において問いの具体性を劇的に改善した一方で、学生も頻繁に戦略的制御をチューターに「譲渡」したことを見出しました。戦略的制御を手放すことは、いつ学習を助け、いつ学習を害するでしょうか。
- なぜ物理は[[ai-education|教育における AI]]の「試験場」となりうるのでしょうか。物理の問題の何が、AI が推論と評価にどう影響するかを研究するために理想的なのでしょうか。
- AI にあなたの物理の問題集を採点させたり、力の図を一緒に整理させたりすることを信頼できるでしょうか。信頼できると言うために、AI について、そしてあなたの授業について、何が真である必要があるでしょうか。

## はじめに

物理教育の[[research-methods-aied|研究]]は、教育における AI の試験場となってきました。なぜなら、物理の問題は構造化されていると同時に認知的に要請が高く、AI の道具が学習・推論・評価にどう影響するかを研究するのに理想的だからです。この知識基盤の 26 本の記事は、AI の約束と限界の両方に格闘する分野の姿を、総体として描き出しています。学生の問いの質を改善するソクラテス式[[conversational-ai|チャットボット]]から、言語的に多様な学習者を罰する体系的採点バイアスまでが含まれます。

### 主要な研究テーマ

**物理におけるソクラテス式 AI チューター**は最も発展したテーマであり、実際の物理の授業に[[llm]]駆動のソクラテス式対話を導入した三本の記事があります。**[[hashmi-socratic-physics-chatbot-2025|Hashmi ら]]**は、AI チャットボットとの持続的なソクラテス式相互作用が、入門力学において問いの具体性を劇的に改善することを、実際の授業を受講する 150 名の STEM 専攻学生を用いて実証しました。**[[socratic-ai-physics-tutor-taxonomy-2026|Hashmi & Rebello]]**は、同一の導入実践から 357 の学生談話カテゴリーのボトムアップ型分類を構築し、学生が戦略的制御をチューターに譲るメタ手続き的ターンが、学生の相互作用を支配していることを明らかにしました。両者はより広い[[socratic-method|ソクラテス・メソッド]]の研究に貢献し、[[intelligent-tutoring|AI チューター]]および[[intelligent-tutoring]]の枠組みにつながります。

**学生の AI 受容と信頼**は、物理の学生が実際にどう AI の道具を使うかを探究します。**[[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]**は、50 ポイントの「信頼—有用性の隔たり」を見出しました。課題に AI を使う学生は 91% ですが、それを信頼する学生は 41% しかいません。そして学生は、視覚空間的推論と回路において AI が失敗する様態を自発的に指摘しました。**[[becker-chatgpt-typology-physics-2026|Becker ら]]**は、1,189 件の調査回答から、70% の「実用主義的ユーザー」と 30% の「懐疑的非ユーザー」という二つのプロファイルの類型を構築し、両集団が計算されたリスク—有用性のトレードオフを行っていることを示しました。これらの研究は[[ai-literacy|AI リテラシー]]と[[trust-calibration|信頼校正]]の研究を進め、画一的な[[educational-policy-ai|AI 政策]]に挑戦します。
**認識論的信念はチャットボット行動の選好を追跡する。** 大規模な微積分ベースの授業において、学生の 52% は、ガイドされた探究から始めて尋ねられたときにだけ答えるチャットボットを好み、彼らは EBAPS 総合得点でより高い得点を示しました（p = 0.029）。ただし、この差は Bonferroni 補正を生き延れず、したがってその関連は示唆的であって決定的ではありません（[[physics-chatbot-epistemological-beliefs-2026|Sirnoorkar and Mamidpalliwar（2026）]]）。

**行動変化なき知覚変化**は、[[physics-students-llm-perceptions-instruction-2026|O'Brien ら（2026）]]がこの図式に加えるものです。物理専攻の必修一年次課程で教えられた、LLM の働き方についての内省的な授業は、懐疑心を鋭く高めました。LLM が学生に偽の自信を抱かせうることに同意する割合は 58% から 88% へ、平均的な物理の学生を LLM が上回るという信念は 54% から 32% へと変化しました。一方で、利便性（71% の同意）と提出期限の圧力（65%）は使用の主たる理由であり続けました。この授業の限界はその効果と同じくらい情報的です。[[ai-literacy|AI リテラシー]]教育は、学生がこれらの道具について述べることを変えたのであって、それらに手を伸ばさせる圧力を変えたのではありません。だからこそ、この種の介入は、問題設計や政策設計の代わりではなく、それらと並んで位置づけられるべきです。

問題づくりは学習者を問題の著者へと変えます。プロンプトエンジニアリングの訓練後、49 名の物理学生の 76% が自分の生成 AI との相互作用に肯定的な変化を知覚し、初心者が最も大きな恩恵を受け、約 68% がこの技法を自習として肯定的に見ました（[[genai-assisted-problem-posing-physics-2026|Dawson & Rebello（2026）]]）。

**評価と計算的思考**は、AI がどう物理の学習を評価できるかを検討します。**[[llm-computational-thinking-physics-2026|Savage ら]]**は、LLM を用いて入門物理における[[computational-thinking|計算的思考]]の伸びを評価し、LLM は計算的思考の評価を拡張できるが、システム思考のような複合的な構成概念には苦戦することを見出しました。**[[ai-scoring-language-bias-physics|Feser & Tschisgale]]**は、AI 採点が言語的に弱い学生の物理の説明を体系的に過小評価することを実証しました。この知見は[[assessment-validity|評価の妥当性]]、[[bias-mitigation|バイアス緩和]]、そして[[equity-in-ai-education|AI 教育における公平性]]につながります。

**診断的評価のための心理測定学的基盤。** [[mechanics-cognitive-diagnostic-physics-2026|Le ら（2026）]]は、物理分野における AI という問いを逆転させます。モデルが物理を解いたり採点したりできるかではなく、この分野自身の研究に基づく[[assessment|評価]]が物理を診断できるようにできるかどうかを問うのです。FCI、FMCE、EMCS の項目を 14 の細粒度の学習目標に写像し、LASSO プラットフォームを通じて 79 機関・807 コースの事後テスト回答 24,394 件に DINA 認知診断モデルを当てはめることで、彼らは Mechanics [[cognitive-diagnosis|認知診断]]を構築しました。これは物理における最初の認知診断型コンピュータ適応テストとして報告されています。FCI と EMCS はよく適合しました（RMSEA² = 0.033 および 0.022）が、FMCE はわずかにしか適合しませんでした（0.065）。そして著者らは、この不適合をモデリングではなく測定道具の設計に帰属させます。43 の採点対象 FMCE 項目のうち 42 が連鎖的セットでシナリオの設問文を共有しており、DINA の条件付き独立性の仮定が禁じる局所的项目従属性を生み出しているのです（FCI は 30 項目のうち 13 項目をブロック化、EMCS はなし）。分類精度は、22 の目標—評価の組み合わせのうち 19 で、低リスクの[[formative-assessment|形成的]]評価のベンチマークを満たしました。三つの失敗は EMCS のエネルギーに関する目標であり、その項目はおよそ 70 パーセント重複しているため、一方の習得を他方と分離できません。物理の教授にとっての意義は、授業で既に実施されている測定道具を、遡及的な事後テスト得点ではなく、教授の*途中で*実行可能で目標水準のフィードバックを提供するものに転用できるということです。ただし、診断的主張は、項目バンクが実際に支えられる解像度に合わせる必要があります。

**本物の物理問題におけるマルチモーダル AI のベンチマーキング。** [[omniphys-multimodal-physics-benchmark-2026|Chen ら（2026）]]は、**OmniPhys**を導入しました。中国の教育コーパスに由来する、中学校から大学水準までの物理を扱う大規模な[[multimodal]][[benchmark|ベンチマーク]]（15,246 問、19,850 画像）です。特筆すべきは、マルチモーダルな*入力*の理解だけでなく、マルチモーダルな*出力*の生成—モデルが構造化された物理の図式を合成できるかどうか—も評価する点です。これは本物の問題解決の中核的な構成要素です。大規模な評価は、現在のマルチモーダル LLM の重大な空白、とりわけ複合的推論と視覚的生成における空白を明らかにしました。

**AI で強化された教授のための教授設計の枠組み。** **[[airis-cognitively-activated-ai-physics-2026|Kuhn ら]]**は、**AIRIS** 枠組み（Activate–Inquire–Reflect with Intelligent Support）を提案します。物理における認知的に活性化された AI 活用のための三層構造であり、学生は AI の前に予測と期待される結果の作図を行い（Activate）、計算的・表象的な段階を AI に委ねつつ、その出力を自分の予測と批判的に比較し（Inquire）、その後で解釈し、複数の表象間で一貫性を確かめ、AI が何を貢献したかを振り返ります（Reflect）。[[self-regulated-learning|自己調整学習]]、[[cognitive-offloading|認知負荷]]理論、複数の外的表象、そして[[human-ai-collaboration|人間—AI 協働]]に基づき、この枠組みは中心的な課題を、不正や道具の選択ではなく[[learning-design|教授設計]]として位置づけ、AI 支援を除いたときに学習が生き残るかどうかを検証する「撤去条件」実験を求めています。
- **ルーブリックを用いた AI 解答の批判を教える。** MAPS に導かれた内省をもって AI の解答を批判した 24 グループの入門物理実験では、省略された数値積分、未定義の記法、そして定性的なプロットが代わりに行われている点を同定しました。一方で、関連する問題を解いただけのグループは、その磨き上げられた出力を受け入れるか、自分の誤概念からそれを拒否しました（[[probing-ai-generated-physics-solutions-2026|Borse ら（2026）]]）。

**合成的実験データとしての生成的動画。** [[genai-video-engineering-physics-workflow-2026|Alvarado-Cruz ら（2026）]]は、PixVerse、Grok Imagine、Pippit を用いて、一定の摩擦力、線形抗力、二次抗力という三つの抵抗力の領域について動画シナリオを生成し、[[open-source|オープンソース]]の Tracker ツールで運動学を抽出し、非線形最小二乗法で解析モデルを当てはめました。合成的データは古典的な運動方程式と一致し、物理的に意味のあるパラメータを回復しました。そして繰り返し現れる実践的な知見は、プロンプトの具体性が物理的な整合性を支配するということです。より詳細な記述がより整合的な動力学を生み出しました。この手順は、モデル構築から[[quantitative-research|定量的]]検証まで実験の実践を映写し、[[prompt-engineering|プロンプトの定式化]]を便利さのためではなく実験設計の一段階として捉え直します。それがまだ実証していないのは学習です。ここでの検証は、生成された運動と著者らのモデルとの間の一致であって、学生の測定判断ではありません。したがって、この手法は、証拠として用いられる生成データならば誰もが答えなければならない[[assessment-validity|妥当性]]の問いを引き継いでいます。

**PhET が扱わない話題のための特注シミュレーション。** LLM が生成した HTML/JavaScript モデルによって、教員は、既刊のものの中で最も近いものではなく、授業に必要なシミュレーションを作ることができます。ただし、技術的および物理的な検証は必要です。パイロットでは、26 組の 53 名の学生が、プログラミングの前提知識なしに自由落下モデルを構築し改良しました（[[benzion-ai-physics-simulations-virtual-lab|Ben-Zion ら, 2025]]）。

再利用可能な四要素のプロンプト—道具、表示、手の操作、最適化—によって、コードを書かない教員は、ピンチとスプレッドのジェスチャーが物理を駆動するブラウザベースの AR シミュレーションを生成できます。29 名のパイロットでは、そのジェスチャーが 29 名全員に波長を「感じ」させ（平均 4.52）、86% がより高いエンゲージメントを報告しました（[[genai-ar-physics-simulation-prompt-2026|Levy ら（2026）]]）。
**プロンプトから生成された AI 機器。** 自然言語によるプロンプトで AI アシスタントから生成され、手作業のコーディングを伴わない回転実験装置は、独立した Tracker 動画解析の 1% 以内で、等速および加速度のある円運動を測定しました。これにより教員は、あらかじめコンパイルされたセンサーアプリに合わせるのではなく、自分の教育学的変数に合わせて装置を設計できます（[[ai-generated-smartphone-circular-motion-lab-2026|Suñer ら（2026）]]）。

**再設計された授業における、支援された遂行と支援なき知識。** ボーフム大学における入門の原子核・素粒子物理課程の 2026 年の再設計（Mikhasenko ら）は、意図的に AI に対して耐性のある、研究の形をした 10 枚の宿題シートで[[generative-ai|生成 AI]]の使用を認めました。それらは、素朴な[[prompt-engineering|プロンプト]]では足りないように設計されていました。[[student-engagement|エンゲージメント]]と抱負は高く、42 名の学生のうち 24 名が 10 枚すべてで単位を取得し、ある導出は黒板の二メートル以上を埋めました。しかし、支援のない 90 分の筆記試験は「重大な警告」でした。平均 20.6/80 であり、27 名の受験者のうち 40 点に達したのはわずか 2 名でした。著者らは、支援された遂行と独立に想起できる知識は、互いを訓練したり示したりすることができない別個の達成であると結論づけ、物理の課程は支援のない学習のために何らかの訓練を確保すべきだと論じています。これはこの知識基盤のより広い[[transfer-of-learning|転移]]のエビデンスを補強します。

2026 年の 11 件の実証研究・6 か国を対象とした PRISMA レビューは、分野の水準において同じ結論に達しています。AI フィードバックとシミュレーションによる短期的な伸びは、その後の試験や独立した遂行への転移には持続しませんでした（[[ai-university-physics-education-review-2026|高等教育物理教育における AI のレビュー]]）。

**教育変数としてのエージェントの役割設計。** [[wang-teacher-student-centered-agents-physics-2026|Wang ら（2026）]]は、モデル（DeepSeek R1）、プラットフォーム、そして温度を一定に保ち、プロンプトで指定された役割だけを変化させます。すなわち、限定された教科書の知識源に基づいて権威的に答える教師中心のエージェントと、学生の理解を知り、[[misconceptions|誤概念]]の原因を診断し、関連する概念を名指し、類似の現象へと転移するように構成された、共感的な教師として設定された学生中心のエージェントとを比較します。二つの概念的問題に取り組む 59 名の高校卒業生において、学生中心のエージェントはより高い事後テスト得点（9.67 対 7.93。r = 0.38）、より低い外在的認知負荷とより高い有益認知負荷、より強いフロー体験（d = 0.92）、そしてより高い共感知覚（r = 0.53）を生み出しました。これは、物理のエージェントを教育的に効果的にするのは、解答の正確さだけでなく役割の枠づけであるというエビデンスです（[[pedagogical-agent]]、[[prompt-engineering]]）。
- **ベンチマークの得点は、モデルが物理で既にできることを過小評価する。** 広く用いられている六つの物理のベンチマークを領域の専門家が再採点したところ、報告された不足分の大部分は、欠陥のある項目と制限的な自動採点器の産物であることが判明しました。精査された 250 件の棄却のうち、143 件（57.20%）はベンチマークの欠陥、95 件（38.00%）は採点器の誤りであり、本物のモデルの誤りはわずか 12 件（4.80%）でした。補正後、HLE-Physics の mean@4 は 47.28% から 78.66% へ、CritPt は 32.29% から 87.50% へと上昇しました。物理の教授にとってこれは両面の意味をもちます。すなわち、学生は多くの標準的問題の専門家水準の文理解答を既に入手できるため、物理学的推論の評価は、ベンチマークの汚染に抵抗する項目へ、そして最終的な解答ではなく過程のエビデンスへと向かう必要があるということです。（[[frontier-models-physics-benchmark-audit-2026]]）
- **AI 採点は、すべての部分に一致しなくても高リスクの物理の成績を再現できる。** 10,364 ページの手書きのオリンピックおよび大学の答案を採点したマルチモーダル LLM は、試験官と同じ五人のオリンピック代表チームを回復し、合計点と r = 0.93〜0.96 で相関しましたが、設問部分ごとの完全一致は 70% にとどまりました。すなわち、試験官が統制する二次読解であって、代替ではありません（[[ai-grading-handwritten-physics-2026|Pathak ら（2026）]]）。

- **物理のベンチマークは、カリキュラムに基づき非英語であってもよい。** [[physicsmate-bengali-secondary-physics-benchmark-2026|Jahin ら（2026）]]は、全国の 9〜10 年次の物理の教科書と 1,760 ノードの知識グラフから 1,834 問のベンガル語問題を構築し、一つの固定された微調整の方法が、0.6B、1.7B、4B のパラメータ数でそれぞれ 5.5、15.0、23.3 ポイントの向上をもたらしました。

### 関連概念との接続

物理教育は、より広い[[stem-education|STEM 教育]]の領域の中に位置しますが、特徴的な接続をもちます。物理の問題解決におけるソクラテス式対話の強い伝統を通じて[[socratic-method|ソクラテス・メソッド]]へ、物理における計算の役割の増大を通じて[[computational-thinking|計算的思考]]へ、物理の説明の採点の課題を通じて[[assessment-validity|評価の妥当性]]へ、そして[[simulation|シミュレーション]]を用いた準備を通じて[[professional-training|専門職訓練]]へと接続します。[[student-experience|学生の経験]]と[[ai-literacy|AI リテラシー]]の概念は、物理の学生が AI の道具をどう渡り歩くかを理解する上で不可欠であり、一方で[[educational-measurement|教育測定]]と[[automated-assessment|自動採点]]は評価の次元につながります。

## 物理の教員にとっての示唆

- **受容だけでなく学生の信頼に向けて設計する。** [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]は、50 ポイントの「信頼—有用性の隔たり」（使用 91%、信頼 41%）を記録しており、学生は視覚空間的推論と回路における AI の失敗を指摘しています。受容を仮定するのではなく、これらの限界を露呈し議論する機会をつくりましょう。
- **問いの質を深めるためにソクラテス式 AI を用いるが、戦略的譲渡に注意する。** [[hashmi-socratic-physics-chatbot-2025|ソクラテス式チャットボット]]は問いの具体性を改善しますが、[[socratic-ai-physics-tutor-taxonomy-2026|類型研究]]は、メタ手続き的ターンが支配的であることを見出しています。学生は戦略的制御をチューターに手渡してしまいます。学生が決定者であり続けるよう介入しましょう。
- **許容するだけでなく、認知的に AI の活用を構造化する。** [[airis-cognitively-activated-ai-physics-2026|AIRIS]]（Activate–Inquire–Reflect）は、学生が AI の前に予測や見通しを立て、計算的な段階を委ねつつ出力を批判的に比較し、事後に振り返ることの価値を示しています。AI の統合を教授設計上の問題として扱い、AI を除いたときに学習が生き残るかどうかを検証しましょう。95 名の学部生を対象とした無作為化比較試験では、力学問題について自己調整学習に沿った 45 分の訓練が、後にモデルを用いて電磁気学の問題を修正する際の正確さを高めました。すなわち、訓練を受けた学生の誤答の 69.3% が正答になったのに対し、訓練を受けていない統制群では 41.3% でした（d = 0.81）（[[structured-genai-training-physics-problem-solving-rct-2026|Huang ら（2026）]]）。
- **採点バイアスに備える。** [[ai-scoring-language-bias-physics|AI 採点]]は、言語的に弱い学生の説明を体系的に過小評価します。概念的な評価には、言語を意識した採点または人間が調整する採点を用いましょう。
- **教員養成に模擬教室を用いる。** [[multiagent-classroom-dual-process-physics-teachers-2026|模擬されたマルチエージェント教室]]は、将来の教員に、本物の学生の推論に応答する貴重な訓練の機会を与えます。生のマイクロ教授への低費用の補完となります。
- **支援のない訓練と評価を確保する。** ボーフムの再設計（[[ai-particle-physics-education-redesign-2026|Mikhasenko ら 2026]]）は、AI を許容し研究の形をした宿題を高いエンゲージメントで完成させた学生が、支援のない試験では大きく遅れをとりうることを示しています（平均 20.6/80）。支援された遂行と独立に想起できる知識を別個のものとして扱い、意図的な支援のない訓練と筆記試験を課程に組み込みましょう。

- **ファシリテーターの忠実性を検証し、モデル構築の段階は AI から切り離しておく。** 「どちらの錘が重いかただ教えてください」と詰め寄られたとき、目的に沿って設定された Gem は誰も測定していない質量の値を捏造しました。したがって、言語ベースのファシリテーターの忠実性は仮定ではなく検証される必要があり、AI を使わない構築段階は、それが到達できない手を動かす作業を保ちます（[[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani（2026）]]）。

## 関連概念

- [[stem-education]]
- [[socratic-method]]
- [[intelligent-tutoring]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[student-experience]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[professional-training]]
- [[simulation]]
- [[generative-ai]]
- [[higher-ed]]
- [[discipline-specific-aied]]
- [[chemistry-education]] — 化学教育と AI: 実験室、形成的評価、LLM の限界、実験の哲学
- [[biology-education]] — 生物教育と AI: 実験室の教育アシスタント、生物学における AI リテラシー、批判的思考、専門化された道具

## 関連記事

- [[genai-video-engineering-physics-workflow-2026]] — From Prompts to Physical Laws: A Generative AI Workflow for Engineering Physics Education
- [[wang-teacher-student-centered-agents-physics-2026]] — 教師中心と学生中心のプロンプト設計を施した物理のエージェントの比較（Wang ら 2026）
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[benzion-ai-physics-simulations-virtual-lab]] — AI を用いた物理シミュレーション・バーチャルラボの迅速な生成（Ben-Zion ら 2025）
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[llm-computational-thinking-physics-2026]]
- [[ai-scoring-language-bias-physics]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[ai-grading-handwritten-physics-2026]] — 手書きの物理の評価（オリンピック）の AI 採点
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: FCI、FMCE、EMCS を 14 目標の認知診断に変える（Le ら 2026）
- [[physics-students-llm-perceptions-instruction-2026]] — Skepticism vs. Convenience: Physics Students' Perceptions and Use of Large Language Models Before and After Instruction
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[physicsmate-bengali-secondary-physics-benchmark-2026]] — PhysicsMate: 1,834 件のベンガル語中等物理の QA ペアを 1,760 ノードのカリキュラムグラフに写像。小規模モデルの適応における向上
- [[ai-university-physics-education-review-2026]] — Artificial intelligence in university physics education: a systematic review of empirical studies
- [[structured-genai-training-physics-problem-solving-rct-2026]] — 物理の問題修正のための構造化された生成 AI 訓練: 無作為化比較試験（Huang ら 2026）
