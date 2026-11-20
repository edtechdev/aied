---
title: センサーと視線分析
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-19T06:40:00-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
connected_concepts: [student-modeling, learning-analytics, multimodal, affective-computing, student-engagement, self-regulated-learning, embodied-learning, educational-measurement, automated-assessment, assessment-validity, remote-proctoring, academic-integrity, privacy, bias-mitigation, neurodiversity, equity-in-ai-education, accessibility, machine-learning, cognitive-psychology, intelligent-tutoring]
connected_articles: [nissan-nursing-empathy-computer-vision-2026, gaze-informed-ai-children, e3sense-multimodal-learner-engagement-sensing-2026, engagement-assessment-video, student-attention-estimation-fairness-2026, corbin-ai-glasses-wearable-ai-assessment-2026, eeg-familiarity-automated-assessment-2026, seeing-cognitive-representations-eeg-reconstruction, physiological-signals-exam-outcomes-ml, affective-text-wearable-student-health, tutorloop-sensor-cognitive-feedback-2026, arif-automated-online-proctoring-yolov11-2026, your-brain-on-chatgpt-cognitive-debt-essay-writing, kim-ai-embodied-learning-review-2026]
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **センサーと視線分析** — 視線追跡、脳波計測、皮膚電気活動、心拍変動、カメラから導出される姿勢を用いて、注意、エンゲージメント、認知的負荷、感情といった学習者の状態を推論することです。[[ai-education|教育におけるAI]]では、これらのシグナルが、クイズや自己報告では供給できない、連続的で非言語的な学習の見方を約束します。同時に、それらはこの領域で最も難しい推論問題の中心にあります。センサーが記録するのは身体であって心ではなく、学習者が何を考え何を感じているかについてのあらゆる主張は、その記録の上に重ねられた解釈です([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]])。

## 考えるための問い

- ウェブカメラは、講義の間ずっとあなたの目が動画プレーヤーの中にとどまっていたことを示せます。それはあなたが注意を払っていたという意味でしょうか。
- チューターがあなたの認知的負荷をリアルタイムで推定できたとして、あなたに先に尋ねることなくその推定に基づいて行動すべきでしょうか。
- 学生の視線は、チック、視覚障害、文化的な規範のために画面を離れることがあります。「注意が低い」というフラグは、その学生にとって何を意味するのでしょうか。
- 大学は授業改善のために脳と心臓のデータを収集することを許されるべきでしょうか、そして本当の同意には何が必要でしょうか。
- 「エンゲージメント精度75%」という数値は正確に聞こえます。センサーは実際にエンゲージメントのどの層に到達し、どの層を見逃したのでしょうか。
- 監督システムは今や姿勢と頭の動きを読み取ります。不正を検知することと身体を裁くことの境界はどこにあるのでしょうか。

## はじめに

センサーおよび視線分析は、学習者の身体的計測値を教育上の推論へと変換する一連の手法を指す。計測の対象には、視線がどこにどれだけの時間留まるか、頭皮の電気活動、汗腺の反応、一拍ごとの心拍変動、頭部と体幹の位置および動きが含まれる。推論の対象には、注意、エンゲージメント、認知負荷、混乱、ストレス、さらに評価の場面では不正の疑いが含まれる。本項の焦点はこの計測層にある。より広い研究プログラムとその主張については[[affective-computing|感情コンピューティング]]を、推論を得た後にチュータがどのように行動すべきかについては[[affective-tutoring|感情対応型チュータリング]]を参照。

その魅力はわかりやすいものです。[[self-report-measures|自己報告]]は回顧的で粗く、クイズはいくつかの時点で学習を標本化するだけです。センサーは連続的に走り、学習者の意識的な努力をほとんど要しません。その組み合わせがセンシングを[[learning-analytics]]と[[student-modeling]]の中心に押し上げ、センシングは技術的に印象的だが解釈は薄い、という大きな文献を生み出しました。

AIと[[embodied-learning]]を組み合わせた23の研究の[[meta-analysis-systematic-review|体系的レビュー]]は、その不均衡を具体的にします。分析と評価がコード化されたAIの役割の40.0%を占め、認識と検出が22.5%、フィードバックとコーチングが15.0%でした。センシングの役割は役割タグの62.5%を占め、参加型の役割は35.0%でした([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]])。この領域は、次に何が起こるかを変えることよりも、学習者を観察することのほうが得意なのです。

## 各シグナルが実際に測るもの

**視線と固視。** 視線追跡装置は、目がどこを向いているか、どれだけ長くとどまるか、いつ跳躍運動をするか、どれだけ広く分散するかを報告します。WebGazer のような画面ベースのシステムはウェブカメラから視線を推定し、眼鏡型は目を直接追跡します。TutorLoop は視線を2つの量に変換します。注意はコンテンツ領域内の視線点の割合として、作業負荷は視線エントロピーとして、分散した視線が認知的負荷を反映するという推論に基づきます([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]])。子ども向けの視線情報を用いるアシスタントである Ollie は、代わりに絵の中の関心領域を定義し、子どもがその領域を見たときにナレーションを起動します([[gaze-informed-ai-children|Wu et al., 2026]])。

**脳波。** EEG は頭皮上の電位変動を高い時間分解能で記録します。この系統で皮質活動に直接到達する唯一のシグナルであり、だからこそ評価研究を惹きつけます。実用的な教育システムは乾式電極と少数のチャンネルを使います。E3Sense は125 Hz で4つの乾式 EEG チャンネルを取り、前頭部の2つを分析しました([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。研究用の装置は逆のアプローチを取ります。Kosmyna ら(2025年)は32チャンネル EEG を用いて、[[llm|LLM]]、検索エンジン、道具なしのいずれかで書く学生を比較し、LLM群で最も弱い神経結合を見出しました([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et al., 2025]])。この研究はまた、単一チャンネルのエビデンスについての最も明確な警告でもあります。その中心的な主張が、54人の参加者のうち18人だけが出席した任意のクロスオーバー・セッションに依拠しているからです。

**fNIRSハイパースキャニング。** 2人の学習者を同時に記録することで、単一の脳ではなく脳間同期を測定する。[[ai-exemplar-attribution-creativity-education-2026|Xiaoyong et al. (2026)]]は、人間に帰属させた例示が運動前野の同期とアイデアの独自性を高め、AIへの帰属はそれを低下させ、帰属を撤回した後にはいずれの行動上の利得も残らなかったことを見いだした。

**皮膚電気活動。** EDA は汗腺のコンダクタンスを測り、交感神経性の覚醒の指標です。ストレス、努力、感情の強度に反応し、それらを区別することはできません。同じ構成概念が、ウェアラブルバンドにも、視線追跡装置のフレームによって数センチ離して固定された前頭部の電極にも現れます([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。

**心拍と心拍変動。** 心拍は覚醒を追跡し、拍間の変動は自律神経の回復を指標します。Oura リングを装着した458人の学生を対象とした1年間の研究では、感情的消耗の言語が低い睡眠効率と低い心拍変動を追跡しました([[affective-text-wearable-student-health|Affective Text and Wearable Sensing, 2026]])。どちらの測定も原因を特定しません。

**カメラベースの姿勢と動き。** 監督システムはフレームごとに17の身体ランドマークを抽出し、姿勢の逸脱、頭部移動の傾向、上半身の動きを導出できます([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]])。これは動きを測っています。それを疑わしい行動と呼ぶのは、別の、裏づけのない段階です。

これらのシグナルは、サンプリングレート、ノイズ、計装の負担において異なります。E3Sense は12の EEG、6つの眼、3つの EDA の窓を、166次元の共有された120秒の表現に整列させました([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。EduGage は7種類のデバイスを同時に走らせ、軽量な組み合わせが使用可能なシグナルの大部分を担うと結論しました([[engagement-assessment-video|Leng et al., 2026]])。

## シグナルは何に使われるか

**[[video-education|映像学習]]におけるエンゲージメント検出。** E3Sense は30人の大学生に各動画の5つのセグメントを評定させ、450の評定を生成しました。融合モデルは、保持された参加者に対して、63.0%の最頻値ベースラインに対し75.0%の平衡済み・1段階以内精度に到達しました([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。EduGage は16人の参加者と715のプローブ窓にわたり、MAE 0.81と83.75%の1段階以内精度を報告しました([[engagement-assessment-video|Leng et al., 2026]])。どちらも推定を近似として扱っています。

**教室における注意推定。** [[multimodal|マルチモーダル]]トランスフォーマーが、57人を対象とした自然主義的データセット DIPSER 上で顔画像とウェアラブル信号を融合し、MAE 0.283に到達しました。視覚のみのベースラインに対する優位は控えめで、著者らは顔の特徴が主要な情報源だったと結論しています([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]])。

**認知的負荷とフィードバックのタイミング。** TutorLoop は視線から導いた注意と作業負荷を用いて、[[reinforcement-learning|強化学習]]エージェントに4つの[[feedback|フィードバックの種類]]から選ばせました。187人の参加者を通じて、システム全体はベースラインよりも介入回数が少ないのに、注意を改善し作業負荷を下げました([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]])。

**監督とインテグリティ。** 姿勢ベースの監督は、独自のラベル付きシナリオ集合上で天井に近い性能を報告します。99.56%の精度と AUC 0.9957です([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]])。ウェアラブルAIは同じ問題を反対側から変えます。スマートグラスは、監視が依拠する視線の低下と姿勢の変化を取り除きます。Corbin らはこの条件を二重の透明性と呼びます([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]])。

**感情と[[well-being|ウェルビーイング]]。** 試験中に収集された生理的シグナルが成績のカテゴリーを予測し、ランダムフォレストは30回の反復で平均0.96に到達しました([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]])。上位の予測因子は皮膚電気活動、加速度計の動き、皮膚温でした。それは覚醒と運動であり、理解ではありません。

**評価研究。** EEG は親近性と心的表象の直接的な測定として検証されてきました。どちらの系統も有望で、どちらも探索的のままであり、次の節でそれを扱います。

## 推論の隔たり

上記のあらゆる利用は連鎖に依存しています。生理的あるいは行動的な出来事、そこから計算された特徴、ラベルで訓練されたモデル、そして心的状態についての主張です。各リンクは漏れます。

ラベルがしばしば最も弱いリンクです。E3Sense は学習者自身のセグメント評定を予測しましたが、その評定の63%はエンゲージされた2つの水準に位置していました。モデルは状態ではなく分布を学ぶことで高いスコアを出せます。研究者が学習者自身のエンゲージメントの定義を加えると、精度は64.6%から71.5%へ上昇しました。これはラベルとシグナルが部分的に異なるものを測っていたことを示唆します([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。

[[assessment-validity|妥当性検証]]はモデルを膨らませえます。EEG に基づく親近性予測の15モデルのベンチマークは、層化交差検証のもとで0.9853 F1に到達しました。時間的構造を尊重する試行独立の Group K-Fold では、ピークは25%のチャンス水準に対して0.6038 F1まで下がりました([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]])。最初の数値は漏洩を、2番目は学習を記述しています。

神経相関はスコアではありません。EEG から再構成された画像は、55の参加者・動画の観察にわたり、テスト成績と R² = 0.79で相関しました。正答した項目は誤答した項目よりも高い意味的類似性も示しました。しかし1人の参加者は高品質の再構成を生みながら誤答したので、再構成の質を正答性として読むことはできません([[seeing-cognitive-representations-eeg-reconstruction|Su et al., 2026]])。

注意は学習ではありません。TutorLoop では、注意は学習と r = 0.017で相関し、作業負荷は r = -0.168で負に相関しました([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]])。注意のシグナルを最大化するシステムは、ノイズに近い何かを最適化していたでしょう。

シグナルは構成概念を反転させることもある。記録された37件の看護[[simulation|シミュレーション]]では、笑顔検出器は観察者評価による[[empathy|共感]]と負の相関を示した（r = −0.322）一方、身体接触の検出は4つの観察者指標と0.46〜0.54で一致した。観察者は痛みを抱える患者に向けられた笑顔を不調和として読み取っていたのに対し、モデルは顔面の動作を読み取っていたのである（[[nissan-nursing-empathy-computer-vision-2026|Nissan et al., 2026]]）。

研究がインタラクションを主張する場面で、センサーが記録しているのは同席（co-presence）にすぎないことがある。[[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] は、姿勢に基づく検出器の再現率が55%にとどまり、[[teacher-role|教師]]–生徒のグループ相互作用において人間のコーダーが特定した20件のイベントのうち11件しか捉えられなかったことを報告した。コード化されたセグメントの49.2%で教師はグループ境界内に存在していたが、生徒が教師を見ていたのは25.4%にすぎず、いずれの比較でも音声特徴量は変化しなかった。したがって、このパイプラインが登録していたのは持続的なインタラクションではなく、空間的な同席であった。

生理的プロファイルは診断ではありません。試験ストレスのモデルは覚醒と運動から成績のカテゴリーを予測し、著者らはその出力が高リスクの決定ではなく、個人的な状況やメンタルヘルスの文脈の隣に属すると主張します([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]])。

最後に、収集は統合ではありません。Kim と Han は、ほとんどのマルチモーダル研究がストリームを並行して集め、1つは事後に顔の感情、視線、顔検出を整列させただけであり、学習者がシステムを使っている間にライブで入力を融合したものはなかったと見出しました([[kim-ai-embodied-learning-review-2026|Kim and Han, 2026]])。同期したチャンネルのページは、単なる記録にすぎないのに、学習者のモデルのように見ええます。

## 学習者をセンシングする倫理

**同意は制度的権力によって弱められる。** 授業に出席しなければならない、あるいは試験を受けなければならない学生は、カメラやウェアラブルを自由に拒否できません。人口統計的属性は進んで提供されないことすらあります。DIPSER の性別、年齢、民族のラベルは、参加者が提供したのではなく、コンピュータビジョンのモデルによって画像から推論されました([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]])。あるモデルがその人を公平に扱うかを検証するために、その人が誰であるかを推論することは、それ自体がプロファイリング行為です。

**生体データは通常の分析データではない。** EEG、EDA、心拍変動は健康に隣接し、多くの法域で特別カテゴリーのデータです。それらは、科目が必要とする以上の睡眠、ストレス、医学的状態を明らかにしえます。子ども向けの視線情報を用いるシステムは、小規模なパイロットにおいてさえ、保護者から[[privacy|プライバシー]]の異議を引き出しました([[gaze-informed-ai-children|Wu et al., 2026]])。

**機能の拡張(クリーピング)は通常の経路である。** ウェルビーイングのモニタリングはリスクのフラグ付けになり、リスクのフラグ付けは成績評価の証拠になります。Corbin らはこの漂流の評価版を示します。物理的な排除が失敗すると、検査は成果物から身体へ移り、学生は自分の眼鏡が矯正用であり、機器が治療用であることを証明しなければならなくなります([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]])。

**[[equity-in-ai-education|公平性]]の失敗は、異なる身体に集中する。** 顔に基づく注意推定は肌の色、眼鏡、照明に依存します。視線に基づく注意は、目を合わせることを避ける学習者を不利に扱います。自閉症の学習者や[[neurodiversity|ニューロダイバージェント]]な学習者などです。姿勢ベースの監督は、チック、スティミング、文化的な動きの規範をフラグ立てします。監督の研究は、フラグ立てされた姿勢が不正に対応するか、検出器が[[inclusive-learning|障害のある学生]]や視線における文化的差異を公平に扱うかを検証していません([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]])。ここで規制は修正ではありません。誤りを規則に洗浄する方法です。

**公平性の主張には被験者レベルのエビデンスが必要である。** 性別を標的にした正則化は、検証の MAE ギャップを0.02から0.005に縮め、その後、保持された被験者でギャップと最悪グループの誤差の双方を増やしました([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]])。単一の分割を公平性の証明として報告することは、公平性のコストを伴う設計上の失敗です。

**プライバシーは設計に組み込める。** TutorLoop は WebGazer をクライアント側で走らせ、生の視線がブラウザを出ないようにしました([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]])。その選択は、コストの一部が内在的ではなくアーキテクチャ上のものだと示しています。より難しい問いは、その推論がそもそも存在すべきかどうかです。

## よくある誤解

**「視線追跡は注意がどこにあるかを教える。」** それは目がどこを向いているかを教えます。視線は、学習者が別のことを考えている間スライドにとどまることがあり、注意とは無関係な理由で画面を離れることもあります。TutorLoop の注意の測定は学習と r = 0.017で相関し、これはほとんど関係がないに等しい値です([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]])。

**「生理的シグナルは心的状態の直接的な読み出しである。」** EDA は交感神経性の覚醒を指標し、心拍変動は自律神経の回復を指標します。どちらもストレスと努力と興奮を区別しません。EDA、動き、皮膚温から試験の成績を予測するモデルは、学生の理解ではなく身体の覚醒の署名を学んでいます([[physiological-signals-exam-outcomes-ml|Yamazaki and Rimal, 2026]])。

**「高い分類精度はシステムがその状態を検出することを意味する。」** 精度はラベル、分割、基準率に依存します。EEG の親近性予測は、検証が試行の境界を尊重したときに0.9853から0.6038 F1へ落ちました([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]])。監督の99.56%は、ライブの試験ではなく、あつらえのラベル付きシナリオ集合を記述しています([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]])。

**「エンゲージメントは1つのものなので、1つのスコアがそれを表せる。」** この構成概念には3つの糸があり、センサーは主に最初のものに到達します。E3Sense は、学習者がそれを認知的、行動的、情緒的な指標を通じて異なる比率で定義しており、その定義が予測を変えたことを見出しました([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]])。単一の数値は、どの層が測定されたかを隠します。

**「検証の分割で公平なら、教室でも公平である。」** 性別グループ間で検証誤差を均等にした正則化は、保持されたデータでのギャップを悪化させました([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]])。公平性はチェックポイントの性質ではなく、配備の性質です。
