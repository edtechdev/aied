---
title: 教育研究におけるAIの支援
created: "2026-10-10T22:04:20-04:00"
updated: "2026-10-10T22:04:20-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **総合:** 教育研究におけるAIの支援とは、AIをこの分野自身の学術的営みの道具として用いることを指します。つまり、文献の検索と取得、レビューにおける文献のスクリーニング、質的データのコーディング、データ分析、原稿の起草と編集、そしてそれらの道具が生み出される知識に何をもたらすのかを問う内省的営みのことです。これは、教育におけるAIについての研究*そのもの*とは区別されます。AIが学習者の助けになるかどうかを研究するデザインは[[research-methods-aied]]に属し、AIシステムの評価は[[ai-ed-evaluation]]に、単一のAIED研究の読み解きは[[interpreting-and-applying-aied-research]]に属します。このページが扱うのは、研究者自身のワークフローと、実践者・研究者の問い(ティーチング・アンド・ラーニングの学術研究と、教室研究)と、そして自動化がどちらに入り込むときの認識論的な利害関心です。そのエビデンスは薄く、また新しいものです。つまり、枠組みの提案、あるレビューチームの内省的な記録、小規模なフォーカスグループ研究、書誌計量学的研究2件、ワークショップ報告、そして単独調査者による事例研究があります。このページは確立された実践ではなく、進むべき方向性を記述したものであり、実践者・研究の系譜はそのすべての中で最も薄いものです。

## 考えるための問い

- ここで「研究者」とは誰を指すのか。資金を得たアカデミックか、大学院生か、自分の教室を研究する講師か。エビデンスが実際に記述しているのは、そのうちのどれか。
- AIによるスクリーニングがある研究をあなたのレビューから除外しました。その決定の責任は誰にあるのか——ベンダーか、道具か、手順か、それともあなた自身か。
- あなたが読んでいない出典をモデルが要約するとき、学術的営みのどの部分をあなたはやめてしまっているのか。
- シミュレートされた学習者は、多くのプロファイルにわたってチューターをテストできます。その現実の生徒についての判定を信じる前に、何を確かめるべきか。
- 実践者の問いは通常、地域に根ざし小規模です。そのエビデンスは資金を得た試行の水準を満たすべきか、それとも設定そのものが要点であるがゆえに、別のしかたで量られるべきか。
- AIが論文の起草を助けたなら、読者に何を伝えるべきで、その開示はどこに置かれるべきか。

## はじめに

教育研究におけるAIの支援とは、この分野がAI道具を自分自身の営みに向けることを指します。研究の対象は、AIチューターを使う学習者ではなく、モデルを使って検索・スクリーニング・抽出・コーディング・分析・執筆を行う研究者です。変わるのは研究者のワークフローと、それよりもっと静かに、その成果がエビデンスとして認められる基準です。

このページは、意図的に、教育におけるAIについての研究については扱いません。AIチューターが学習を改善するかどうかという問いは[[research-methods-aied]]が扱い、AIシステムの評価は[[ai-ed-evaluation]]が、単一の研究を慎重に読み解くことは[[interpreting-and-applying-aied-research]]と[[limitations-in-aied-research]]が扱います。この2つの文献はしばしば混同され、後者の道具化の主張が前者を支えるために頻繁に借り出されます。

その射程は、文献検索からスクリーニング、コーディング、分析、執筆へと続き、ある分野が生み出す知識に自動化が何をするのかを問う認識論的な内省を含みます。また、実践者による研究、すなわちティーチング・アンド・ラーニングの学術研究と、教師が自分の実践を研究する教室での探究も含みます。その系譜はこのページの最も弱い部分であり、以下の節はそれをなだめるのではなく、弱いものであると明示します。

## AIが研究ワークフローに入り込むしかた

利用に関する記述は、効果についてのエビデンスよりも一貫しています。[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan (2026)]]は、ある1つの機関で7つのフォーカスグループに参加した大学院生28名にインタビューし、28名のうち27名が研究のどこかで生成AIを用いていたことを見出しました。すなわち、着想、文献レビュー、説明、データ処理、プログラミング、学術執筆、編集、翻訳です。

彼らの参加者は、無批判ではなく、よく較正されていました。彼らは、知覚される利害と知的要請に応じて道具と課題を対応づけ、利害の小さい手続き的な仕事でAIをより重く用い、学術的な貢献が中心になる場面では慎重なままでした。また、人間による監視を一貫して保ち、モデルを「誤解を招く」ものや「完全に間違っている」ものでありうる助手として扱いました。

政策的に見出は実践的なものです。既存の機関の指針は教育、学習、評価を扱っており、参加者はそれを抽象的で研究の実践とずれていると感じていました。著者らは、4次元のAIリテラシーの枠組みに基づく、研究者向けの指針を、規則の書ではなく発達の足場として提案します。

この研究は単一の機関、自己選択した28名の集団、自己報告による記述を扱っています。学生は誠実性上の理由から利用を過少報告した可能性があります。これは、有能な集団がこれらの道具をどう使うかを記述したものであり、その利用が何を生み出すかではありません。

## 文献検索と取得

ワークショップ報告は、それを測るのではなく、課題を描き出します。Generative AI and Academic Searchに関するCHIIR 2026ワークショップは、人間の情報相互作用と情報検索の研究者を集め、その報告は、文書取得のために構築されたシステムが今では要約・推薦・総合・対話を行っていることを記述し、システムが出典を探す一方で解釈は利用者に残るという想定を揺るがしています。

あるライトニングトークは、モデルが学者をどう再構成するかをテストしました。10の学問分野と8つの世界地域にわたる1,596名のシード著者に対するOpenAlexとGoogle Scholarの正解データに対して、被引用数の多い研究者は被引用数の少ない同僚のおよそ2倍の率で再構成され、DeepSeek R1、Llama 4 Scout、Mixtral 8×7Bがテストされました。

ある図書館員は「信頼の隔たり」を報告しました。すなわち、学生は生成検索を過信することが多く、教員はそれを不信し、単発のワークショップは持続的なリテラシーには不十分だと判断されました。参加者が最も多く立ち返った設計の糸口は「摩擦」でした。つまり、利用者を、学習が生まれる、批判的で時に居心地の悪い仕事に関与させ続けることです。

この報告は単一の自己選択的な出来事を扱い、主に意見、設計原則、研究課題を記録しています。その数値は個々のトークに属するものであってワークショップに属するものではなく、AI学術検索が学習を改善するか害するかを示すものは何もありません。

## スクリーニングとシステマティックレビューの自動化

システマティックレビューは、自動化が最も進んだ場所であり、またその限界が見える場所です。[[scaffolding-systematic-reviews-2026|Wang et al. (2026)]]は、ある学際的な1チームのレビューについて内省し、自動化が主に抄録のスクリーニングで手続き的な負担を減らしたこと——ASReview、SWIFT-Review、Covidence、AIScreenR、MetaMateなどの道具——を報告する一方、データ抽出、調整、総合は人間のレビュアーに残されたと述べます。指導と同僚間の議論は、礼儀ではなく方法論的な基盤として機能しました。

彼らの結論は、引き渡しではなく分業です。自動化を手続き的な負担に割り当て、すべての出力を検証し、解釈的な決定を人間に保つ。この記述は比較条件のない1チームの内省であるため、その方策は記述されたものであって、テストされたものではありません。

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta and Lin (2026)]]は、14,726件の注釈項目を持つ888件のレビュー自動化論文全体にわたる報告の問題を定量化します。2023年以降、ソフトウェアと製品に関する論文の38.0%は全く評価を報告しておらず、LLM論文では9.3%でした。この隔たりは層別化を経ても残ります。スクリーニングと選択では、ソフトウェア論文は平均3.2件の実質的な評価項目で39.3%が何も報告しておらず、LLM論文は平均7.3件で評価なし率は3.8%でした。

好意的な評価は、委任への適性を意味しませんでした。肯定的な評価のみを持つ118件のLLM論文のうち、52%は、そのワークフローがその役割に求められる水準を下回るという少なくとも1つの懸念をなお報告していました。モデルへのアクセスは圧倒的に独自的でした。LLMの利用の84.1%は独自の、またはホストされたシステムに依拠し、11.0%は混在、オープンウェイトは4.9%にすぎませんでした。

これらのパターンから、著者らはPRISMA-LLMを導き出します。これは5つの実装レベルからなる3層の枠組みであり、そのレベルはリスクの層ではなく開示の層です。これはテストのために提示された提案であって、PRISMA運営委員会が支持した公式の拡張ではありません。論文レベルの沈黙は、検証が存在しない証拠ではないと著者らは注意します。検証は製品報告、手順書、あるいはリポジトリの中にあるかもしれないのです。

## 質的コーディングと分析

質的分析は、解釈そのものが成果である段階であり、それゆえ委任を正当化するのがより難しい段階です。[[qualitative-research|質的研究]]ページは、AI支援によるコーディングについてのコーパスのエビデンスを集めており、人間とモデルの一致がコーディングの質と同じではないことを示す研究や、誤りが時系列分析に連鎖しうることを示す研究を含みます。その文献は、モデルを、人間の判断に対して検証を要する出力を伴う、拡張の助けとして扱います。

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]]は、役割の変化を直接的に記述します。自動コーディングモデルが適用されると、研究者は生徒のデータをコーディングすることから、モデルの出力を検証することへと移ります。教師なしモデルが推論をクラスタリングするとき、アルゴリズムが最初の探索的分析を行います。著者らは、研究者が、質的・定量的・理論的専門性と並んで、データサイエンスのスキルをますます必要とするようになると論じます。

彼らの枠組みはまた、ここで重要な検証手段も提供します。説明可能なAIは、自動コーディングが意味論的な理解を追っているのか、それともキーワードのみを追っているのかを明らかにしえます。人間のラベルと一致するコーディングのパイプラインでも、なお誤ったものを読んでいる可能性があるのです。

## データ分析と認識論的な利害関心

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen and Graulich (2026)]]は、この分野の知識生産そのものに迫り、彼らの論文はこのページの背骨です。Hasok Chang(2004)の、認識論的目的へと向かって互いに積み重なる、知識の連続する段階という認識論的漸進の説明に根ざし、彼らは温度計のおおよそ150年にわたる発達との類似を引き、この分野は今や比較可能な漸進の内部にあるかもしれないと論じます。

彼らの中心的な懸念は、技術的ではなく認識論的なものです。Changの計量論的測定問題は、ある量を測るには、それを観察可能な何かに関係づける法則を必要とする、しかしその法則は既にその量を知らなければ経験的に検証できない、と述べます。研究者からではなく訓練データと最適化から生じる、AI由来の測定関数は、この問題を解決するのではなく強めるかもしれません。なぜなら、それらは正確で予測的に見えながら不透明なままでありうるからです。

この枠組みは7つの段階を持ちます。問題の定式化、道具化と測定、実験と証拠に基づく推論、比較と再現、規範と合意の形成、実施とその帰結、継続的な精緻化です。著者らはこれらを、反復し、重なり合い、あるいは欠けうる分析的な次元として提示しており、検証された連続ではありません。

比較可能性は、最も鋭い公平性の観点を伴う段階です。Regnaultの原理は、ある道具が同じ条件の下で同じ読みを与え、ある型の道具が互いに一致することを要求します。しかし、比較可能性は生徒の集団を越えて広がらなければならず、機械学習は、生徒がより弱い考えを表現する多様なしかたよりも、標準的な考えをよりよく符号化する傾向があります。

彼らはまた、責任追及の問題を名指します。研究者は、訓練データ、微調整、目的を自分では知らないかもしれない事前訓練済みモデルを用い、認識論的な依存の層を加えます。これらのシステムが社会技術的なネットワークから生じるため、責任の配分は難しくなります。これは「多くの手の問題」です。

必要な誠実さとは、この論文がデータを一切報告せず、学習効果を何も確立しないということです。この論文は、AI方法論が研究を改善したり、より妥当な結論をもたらしたりすることを示してはいません。その比較は将来の課題として提示されており、著者らは自分たちの仮説が「実は間違っていると判明するかもしれない」と認めています。

## 研究の執筆、引用、誠実性

執筆は、AIの支援が最も見える場所であり、またその失敗が最も重大な帰結を持つ場所です。なぜなら、参照は責任の主張だからです。[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]]は、ACM Digital Library全体——723,930件の出版物と15,872,533件の参照——を監査し、2021年以降に出版された5,225件のコンピュータ教育論文から113,588件の参照を追跡しました。

彼らは828件の不審な記録を手作業で検証し、14件の論文にわたって、検証可能な形で捏造された書誌情報を含む30件の参照を見出しました。そのすべてが2025年と2026年のものです。SIGCSE Technical Symposiumでは、数は2025年の proceedingsの3件から2026年の17件へと増え、2026年の proceedings論文の2.3%に現れました。30件のうち17件は、実際のタイトルと捏造された、あるいは誤った著者を対にした、混成型でした。

彼らの数は意図的な下限値であり、彼らはこの問題を、ソフトウェアによって解決されるのではなく共有されるものとして提示します。著者は、参照するすべての著作を検証すべきであり、特に生成AIが執筆に用いられた場合はそうです。レビュアーはすべての参照を監査できないため、会議・学会は的を絞った検査を採用します。出版社はメタデータを改善すべきです。自動検出は、それを正解として扱うメタデータの欠陥を受け継ぎます。

AI執筆の規模の効果は、2件目の書誌計量学研究に現れます。[[ai-assisted-writing-research-teams|Wang et al. (2026)]]は、2020年以降のPLoSとNatureのポートフォリオ誌からの147,074件の出版物を分析し、AI支援による執筆を、より小さく、若手に傾いたチームと結びつけました。AI支援なしから全面的なAI支援への極端な変化で、チームの規模はPLoSでは22.1%、Natureでは45.5%小さく(Poisson β = −0.250と−0.607、いずれもp < 0.01)。

影響は明らかには損なわれませんでした。AI支援のあるPLoS論文の約7.34%、Nature論文の7.40%がFWCIの上位5%に達し、人間が書いた比較集団の両方を上回り、マッチさせた比較では上位5%のFWCIの確率が3.0%と2.7%高く(いずれもp < 0.01)。データは観察的なものであるため、著者らは強い因果の主張を控えます。

## 研究環境における持続的なエージェント

単発のプロンプトを越えて、持続的なエージェントが研究の作業空間そのものに埋め込まれつつあります。[[persistent-ai-agents-academic-research|Alzahrani (2026)]]は、持続的な記憶、ローカルファイル、外部道具、定期的な手順、委任された役割を持つエージェントについて、ある医師・科学者の作業空間で動く、115日間の単独調査者による事例研究を報告します。

記述的な成果は大きなものです。復元可能な主エージェントのテレメトリは、96の活動日にわたって重複除去済みの75,671件の記録を保持し、活動日の割合は0.835でした。作業空間は502件の記憶関連ファイル、17個の設定済みエージェントディレクトリ、57個のスキルファイルを保持していました。厳密な25日間の5月サブセットは、627件のモデル完了イベントと73,950,305個の記録済みトークンを保持し、そのうち82.9%はキャッシュ読み出しで、観測されたシステム支出はおよそUS\$1,961でした。

この研究の主要な貢献は、測定の枠組み——PARE-M——です。これは、持続的なエージェントが支えることを意図されている成果、例えば統治や成果物あたりのコストなどが、断片的なベンチマークには見えないために構築されました。その中心的な否定的見出は、相互作用の総体が人間の入力の減少を示さなかったということです。記憶と手順が蓄積するにつれて、委任された仕事の範囲が広がったため、最も強いパターンは証明された労働の代替ではなく、能力の拡大です。

限界は、自己観測された単一の事例が招くものです。1人の研究者が利用者、設計者、データ源、分析者、受益者であり、統治イベントについて対照群も、基準期間も、独立したコーダーもありません。

## 研究と評価の道具としてのシミュレートされた学習者

[[simulating-students|生徒のシミュレーション]]は、その技法と現象についてのナレッジベースのページです。すなわち、ある人物の代役を務めるのに十分忠実な知識状態と誤りを持つ、合成的な学習者をどう構築するかです。このページは、同じ装置を研究と評価の道具として扱います。すなわち、ある介入、道具、ベンチマーク、あるいはチューターを、現実の学習者が供給できない規模や条件でテストしなければならないとき、合成的な学習者は*何のため*にあるのかです。

最も明確な用途は、時間をかけてチューターを評価することです。[[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]]は、エージェントチューターを、現実の生徒のデータで訓練された知識追跡モデルに由来する習熟度がその答えを駆動するシミュレートされた学習者との30日間の関係に置きます。10個のエージェントアダプターを評価したところ、すべてのアダプターは、理想的な学習の参照値を大きく下回り、5〜10日のうちに停滞しました。これは単発のセッション評価では到達できない結果です。観測されたプローブ精度に対する較正の検査は、対角線に沿います(ECE 0.049、1.19 million回の試行にわたるBrier 0.033)。

忠実性は前提条件であり、それは測定可能です。[[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]]は、現実の生徒のトレースからの行動的な乖離が、最良のベースラインの0.53に対してDKL = 0.31であったこと、そして71人の評価者によるチューリングテストで、そのトレースが現実の生徒のデータと統計的に区別不能であったこと(52.8%の精度、d′ = 0.15)を報告します。避けるべき失敗は、適性バイアスです。プロンプトを与えられたモデルは、初心者の代役を務めるには課題を上手く解きすぎてしまいます。

信念状態は、偽造しやすい部分です。[[llm-student-simulation-misconception-faithfulness|Do, Sonkar and Sachan (2026)]]は、4Bから120Bのパラメータにわたる7つのモデルで、シミュレーターが割り当てられた誤概念を放棄し、的を絞った、不整合な、一般的なフィードバックの下でほぼ一様の率で内部の知識から再解答することを示しました。彼らはこれをSelective Flip Scoreで定量化し、訓練によって忠実性を最大+0.56まで高めます。これが要点です。ペルソナにプロンプトを与えることは、学習者を構築しないのです。

シミュレートされた学習者はまた、評価の道具そのものの統制された試験台としても役立ちます。[[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]]は、3つのチューター基盤のそれぞれを、事前登録された手順の下で1つの固定された弱いシミュレートされた学習者と対にし、一般的な有用性のルーブリックがほとんど教育的な信号を持たないことを見出しました。7つの方策が、判定された有用性の0.25ポイントの帯域の内側で、判定された教育性の2.3ポイントに及びました。答えを明かす発話の後には、どの基盤でも生徒の独立した働きが少なくなりました。

その注意はこのページに属します。シミュレーターの判定は、シミュレーターと同じ程度にしか良くなく、その範囲は最も容易な学習者へと傾く傾向があります。

## 実践者による研究:SoTLと教室での探究

これは、コーパスが最も記録していない系譜です。ティーチング・アンド・ラーニングの学術研究と教室研究は、実践者の探究です。つまり、自分のコースを、しばしば小規模に、また自己研究として研究する教師の探究です。ここに集められたページは、その様式におけるAI利用について、調査に基づく記述を提供していません。

最も近いエビデンスは、的を射たものではなく隣接するものです。[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan (2026)]]の大学院生たちは、研究者になることを学んでいたのであって、自分の教育を研究していたのではありません。[[scaffolding-systematic-reviews-2026|Wang et al. (2026)]]のチームは、正式な学際的レビューを行ったのであって、地域の課題ではありませんでした。書誌計量学的研究は、学問分野と出版社を記述しており、教室ではありません。

したがって、誠実な記述は見出しではなく隔たりです。AI支援による実践者の探究は、おそらく広く行わされており、このコーパスではほとんど記録されていません。レビュー自動化と書誌計量学のエビデンスを、講師が自分の教育を研究するためにAIをどう使うべきかを解決したかのように提示するページは、行き過ぎでしょう。

持ち越せるのは、結果ではなく態度です。方法論の中でAIの役割を名指し、解釈的な決定を人間に保ち、検証されたこととされなかったことを報告する。

## エビデンスがまだ確立していないこと

- **正面からの比較がない。** Martin et al.は、AI支援の方法と伝統的な方法の比較を将来の課題として提示しています。AI方法論がより妥当な結論をもたらすことを示す中核論文はありません。
- **全体を通じて薄いデザイン。** 中核となるものは、枠組みの提案、1チームの内省的な記録、ワークショップ報告、フォーカスグループ研究、観察的な書誌計量学です。そのどれも、AI支援の方法の統制された試行ではありません。
- **実践の監査ではなく、報告の隔たり。** PRISMA-LLMは論文レベルの沈黙を読み取ります。論文に評価がないワークフローでも、別の場所で検証されているかもしれません。
- **実践者による研究は過小に代表されている。** ここでSoTLや教室研究に言及するページはほんの一握りなので、このコーパスは、自分の実践を研究する教師についての主張の根拠となりえません。
- **動く標的。** 道具の改善は出版よりも速いため、2025年のワークフローについての見出しは、もはやその姿では存在しないかもしれないシステムの世代を記述しています。

## 引用

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## 関連する概念

- [[research-methods-aied]] — 教育におけるAIを研究するために用いられるデザインの包括的な枠組み
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## 関連する記事

- [[ai-methodologies-science-education-research-2026]] — AI方法論が科学教育研究をどう変革しうるかについての7段階の内省的枠組み(Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — ある学際的なレビューチームによる、指導と選択的なAI統合の記述(Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — 28名の大学院生が研究ワークフロー全体でGenAIをどう用いたか、そして彼らが示唆する指針(Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — コンピュータ教育文献における捏造された参照の分野規模の監査(Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — AI支援によるシステマティックレビューのための報告枠組みと、それが記録する責任追及の隔たり(Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — 生成AIと学術検索に関するCHIIR 2026ワークショップ報告(Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — 研究の作業空間における持続的なエージェントの単独調査者による事例研究(Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — AI支援による執筆が、より小さく若い研究チームを伴うという書誌計量学的エビデンス(Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — エージェントチューターをシミュレートされた学習者に対して評価する30日間のベンチマーク(Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — 本物の初心者の苦闘を再現する、ニューロシンボリックなシミュレーター(Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — シミュレーターがあらゆるフィードバックの下で誤概念を放棄する理由と、訓練がそれを修正するしかた(Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — 固定されたシミュレートされた学習者を用いて、有用性の測定が教育性を測るかどうかをテストする事前登録された監査(Fan et al., 2026)

