---
title: 総括的評価
created: "2026-10-10T22:55:24-04:00"
updated: "2026-10-30T03:34:02-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
source_updated: "2026-10-26T08:45:00-04:00"
translation_of: concepts/summative-assessment
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---
*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **総括的評価** — 学習者が単元・コース・プログラムの終了時点で何を学んだかを評価し認定するために用いられる評価であり、指導の途中で学習を支援する[[formative-assessment|形成的評価]]とは対照的です。総括的評価は通常、筆記・口述・監督下・閉鎖式などの高リスクな試験の形をとり、成績の付与、進級の判定、能力の認定を行います。AI 時代において、総括的評価は[[academic-integrity|アカデミック・インテグリティ]]と妥当性をめぐる中心的な争点となっています。[[generative-ai|生成 AI]]は監督のない課題や持ち帰り課題での成績を水増しできるため、総括的評価の形式の選択——そしてそれが AI による代行にどう耐えるか——が極めて重要な設計上の決定事項となっています。

## 検討すべき問い

- 総括的評価はコースの終了時点で学生が何を学んだかを認定し、形成的評価は途中で学習を支援します。この2つの境界があいまいになっている場面をどこかで見たことがありますか。そして、両者が異なる機能を担っていることがなぜ重要なのでしょうか。
- このページは、生成 AI が総括的評価に同時に2つの方向で影響を与えていると捉えています。AI が試験を採点するという側面と、学生が AI を使って試験による測定を逃れるという側面です。この2つの圧力のうち、どちらが妥当性にとってより大きな脅威だと思いますか。その理由も教えてください。
- 監督のない課題や持ち帰り課題が、AI が答えを生成できるために妥当性を失うとすれば、評価の設計にとってそれは何を意味しますか。またその過程で何が犠牲になるでしょうか。
- このページで引用されている[[research-methods-aied|研究]]は、LLM が人間と同じように小論文を採点しないことを示しています。自動採点が高速で一貫しているのに採点の仕方が異なるのだとしたら、それは[[bias-mitigation|公平性]]の問題でしょうか、機会でしょうか、それとも両方でしょうか。
- 高リスクな結果（成績、資格、入学）は、その背後にある作業が AI によって生成された可能性があるとき、何を意味するのでしょうか。あなたが実際に信頼できる評価をどのように設計しますか。

## はじめに

総括的評価は形成的評価とは根本的に異なる機能を担います。次のステップを導くのではなく、達成度を測定し認定するのです。これには単元終了時のテスト、期末試験、標準化された高リスクなテスト（例えば入学試験）、口述試問、累積的なパフォーマンス評価が含まれます。総括的評価の結果は現実の帰結（成績、進級、資格、大学入学）を伴うため、AI 時代には特に強い圧力にさらされます。自動採点の*対象*となる面と、学生が生成 AI を使って攻略しようとする*脆弱な*測定となる面の両方です。

## AI 時代の焦点:妥当性とインテグリティ

ナレッジベースの研究は、生成 AI が総括的評価の風景を2つの方向で根本的に変えたことを記録しています。AI は大規模な試験の**採点**に用いられ、また学生は AI を使って自分自身の学習の試験による測定を**回避**できます。

- **採点者としての AI。** 総括的評価はますます、試験・小論文・短答式解答の[[automated-assessment|自動採点]]に依存するようになっています。[[llms-do-not-grade-essays-like-humans-2026|LLM の小論文採点に関する研究]]は、[[llm|LLM]]が人間と同じように小論文を採点しないことを見出しており、高リスクな自動採点における妥当性と公平性の問題を提起しています。[[llm-automated-assessment-student-self-explanations|学生の自己説明を評価する LLM]]や[[cong-confidence-asag-2026|短答式問題の自動採点]]は、総括的な文脈における LLM 採点の信頼性を探求し、[[psyscore-essay-scoring-zpd-feedback|心理測定を意識した枠組み]]は自動採点を信頼でき適応的に保とうとします。296人の学生による手書きの一般化学の試験は、なぜ選択的な監督が必要なのかを示しています。マルチモーダル LLM の総合点は TA の採点と高い一致を示しました（R² = 0.91）が、項目レベルの信頼性は形式によって大きく異なり、誤検出（AI が実際には誤った答えを正当なものと見なすこと）は学生が異議を申し立てることがまれなため検出されない傾向があります。したがって、一律に「すべてを採点する」AI 採点者は、人間への確信度に基づく委譲（[[cvengros-grading-handwritten-chemistry-ai-2026]]）なしには高リスクな利用には耐えません。
- **大まかな項目採点でも結果の一致は保たれうる。** 公式の調整済み評点と比較して、10,364ページの手書きの物理オリンピックおよび大学の解答を採点したマルチモーダル LLM は r = 0.93–0.96 で相関し、同じ5人の国際代表チームを復元しましたが、個々の問題部分の正確な一致は 70% に達しました。採点者は、それが裏づける決定によって判断されるのです（[[ai-grading-handwritten-physics-2026|Pathak 他 (2026)]]）。
- **回避の手段としての AI。** 生成 AI が筆記問題への答えを生成できるため、監督のない総括的課題や持ち帰り課題は妥当性を失います。非監督下での成績は AI によって水増しされるため、[[generative-ai-reduced-study-time-math|監督下・無支援の測定が不可欠]]であり、[[generative-ai-guardrails-harm-learning|ガードレール付き（答えではなくヒントを与える）のツール]]は、無防備な AI が引き起こす試験上のペナルティを排除できます。[[chirikov-ai-grade-inflation-2026|Chirikov (2026)]]の50万件以上の成績に関する準実験はこのメカニズムを具体的に示しています。ChatGPT の公開後、AI への露出が多い課題を含むコースでは A 評価の割合が 13 パーセントポイント上昇し、その効果は**宿題中心のコース**に集中しました（三重差分推定ではさらに 16 pp）。これは、AI が総括的成績を水増しする場が、本物の[[learning-gains|学習の伸び]]ではなく監督のない宿題であることを直接示す証拠です。
- **AI 生成の試験。** [[assessing-quality-ai-generated-exams-field-2025|大規模なフィールド研究]]と[[ai-vs-human-assessment-efl-tpck-2026|EFL の評価研究]]は、AI が質の高い試験と評価課題を*生成*できるかどうかを検討しています。これは総括的評価設計における新興の AI の利用形態です。
- **学生は AI が作成した問題を確実に見分けられません。** 単位認定された家庭医学の試験では、[[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] は、AI が生成した 30 問と資格試験に由来する 30 問の多肢選択問題の間で、出所の帰属に有意な差を見いだしませんでした。平均の正答認識率は 68.6 から 77.5 パーセントであり、生成された問題の 18.2 パーセントが[[human-in-the-loop-ai|人間によるレビュー]]で除外されました。

## AI に頑健な総括的評価の形式

ナレッジベースの主要なテーマは、**総括的評価の形式が AI への頑健性を決める**ということです。課題がその場での、対面の、個人ごとに掘り下げられたパフォーマンスを求めるほど、学生が自分の学習を AI で代行することは難しくなります。

- **口述試験と評価。** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]]は、口述試験が低技術的で本質的に AI に頑健な総括的評価形式であると論じています。そのリアルタイムで対話的なやり取りは、暗記ではなく理解、[[critical-thinking|批判的思考]]、推論を試し、学生が AI で答えを生成して暗記することを防ぎ、専門職の実践を反映しています。[[socratic-tests-conversational-assessment|ソクラテス式テスト]]と[[code-review-genai-cs1|コードレビュー面接]]は、これを動的で対話的・面接形式の総括的評価に拡張しています。
- **閉鎖式・監督下・無支援の測定。** [[generative-ai-reduced-study-time-math|証拠]]と[[stromberg-generative-ai-learning-penalty-secondary-2026|大規模なフィールドデータ]]は、学生が AI を使う場合、水増しされた宿題や持ち帰り課題ではなく、監督下の閉鎖式試験が実際の学習の信頼できるシグナルであることを示しています。[[responsible-assessment-ai-era-stanford-2026|責任ある評価]]の枠組みは、これらの無支援の測定を妥当性に基づく再設計の中に組み込んでいます。試験がオンラインのまま行われる場合、[[remote-proctoring|リモート監督]]がその役割を担い、自動監督に関するコーパスの2つのレビューは、検出の成果と並んでプライバシーと[[bias-mitigation|公平性]]の懸念を見出しています（[[automated-online-exam-proctoring-decade-review-2026]]、[[academic-dishonesty-automated-proctoring-ai-2026]]）。

- **脆弱な課題を確認する双子と対にする。** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]]は、学習上の価値のために GenAI に脆弱な課題を残しつつ、同じ成果を評価する第2の課題と対にします。確認的な閾値や重み付けを通じて評点を相互依存にすることで、双子の課題が結果を認定する仕組みです。
## 高リスクかつ標準化された総括的評価

高リスクな総括的評価——入学試験、標準化されたテスト、資格認定——は並外れた帰結を伴い、AI 時代の懸念の焦点となっています。[[stromberg-generative-ai-learning-penalty-secondary-2026|生成 AI の学習ペナルティに関する研究]]は、高校（中考）と大学（高考）の入学試験での成果を測定し、長期にわたる AI の使用後に入学試験の得点が 18–24% 低下したことを見出しました。[[brcic-effortless-trap-productive-struggle-2026|Effortless Trap]]と[[genai-performance-vs-learning|パフォーマンス対学習の研究]]は、AI 支援を受けた課題での伸びが、無支援の高リスクな測定には移行しないことを警告しています。

## AI 時代の総括的評価と形成的評価

ナレッジベースの評価に関する文献は一貫して、[[assessment]]評価は[[formative-assessment|形成的]]な機能と総括的な機能を組み合わせたときに最も効果的であると強調していますが、AI 時代はこの区別を鮮鋭にします。AI が低リスクで監督がなく過程が隠された課題での成績を水増しするため、**（特に監督下・閉鎖式・対面の）総括的な測定が、学習が実際に起きたかどうかの決定的なチェック**となります。これは、本物で AI に頑健な総括的課題（口述試験、コードレビュー面接、監督下の試験、過程重視の[[eportfolio|ポートフォリオ]]）を[[academic-integrity|インテグリティ]]の基盤として据えながら、形成的評価で途中の学習を支えるという、評価の再設計を促します。建設的な設計上の対応については[[authentic-assessment]]を参照してください。

## AI 教育への示唆

- **総括的評価の形式は妥当性とインテグリティの梃子である:** AI に頑健な総括的評価形式（口述、監督下、閉鎖式、対面）は、評価されたパフォーマンスと実際の学習の結びつきを保ちます。
- **監督下・無支援の測定が信頼できるシグナルである:** 学生が AI を使うとき、本物の学習を明らかにするのは宿題ではなく、無支援の総括的試験です。
- **自動採点には心理測定上の精査が必要である:** 高リスクな試験を LLM で採点するには、正確さだけでなく信頼性、公平性、妥当性の評価が必要です。
- 採点誤差は成績帯にも依存します。公衆衛生学の試験提出物32件を通じて、LLM は尺度の両端を避けました——高速モードでは E も F も現れませんでした——一方、最良のモデルは人間の評点と 50.0% で完全に一致し、±1 段階以内では 90.6% で一致しました（[[llm-grading-assistants-public-health-2026|Brevik 他 (2026)]]）。
- **AI は試験を生成することもできる:** AI による試験・課題の生成支援は、それ自体が品質評価を必要とする総括的評価設計上の新興の応用です。
- **形式だけでなく評点の目的を見直す。** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]]は、伝統的な総括的で規範参照的な評点が、表層的で断片的な学習を助長し、学生に統制や透明性をほとんど与えず、内発的[[motivation|動機づけ]]を損ない、ストレスと[[well-being|不安]]を煽り、不平等を永続させながら、実世界での応用ではなくほぼ想起力を評価していると批判します。彼らは再評価、[[mastery-learning|スタンダードに基づく評点]]、ungrading を、総括的評価偏重の実践を和らげうる評点中心の革新として位置づけます。同時に、これらが管理教育では周辺的なにとどまっていることを認めます。その理由は規範的な障壁——相対評価、外的なシグナル（順位、インターンシップ、認証）、学生の道具的態度——にあり、制度的な支援を得た漸進的な実験を推奨しています。

## よくある誤解

- **「LLM は公式の基準に沿って採点できない」** **調整済みの公式評点**に対して、**10,364ページ**の手書きの物理オリンピックと大学の解答を採点したマルチモーダル LLM は強く相関しました。結果の一致は、不正確な項目レベルの採点があっても保たれえます。つまり有用な問いは、項目レベルの精度が実際にどこで必要かです。
- **「AI による評点の水増しは憶測である」** **50万件以上**の成績に関する[[chirikov-ai-grade-inflation-2026|Chirikov（2026）]]の準実験は、そのメカニズムを具体的に示します。ChatGPT の公開後、**AI への露出が多い課題を含むコースでは高い評点の割合が上昇しました**。効果は露出した課題に集中しており、それはメカニズムが予測するパターンです。
- **「AI を使う学生と使わない学生は区別できないので、出所の確認は絶望的である」** AI 生成の項目と資格試験の項目の間で**出所の帰属に有意な差がなかった**という知見は、正しい認識が**68.6〜77.5%**、誤帰属率が**18.2%**であったことを含めて、認識が失敗することについてのものであり、出所の確認が不要であることではありません。むしろそれは、検証された出所への要求を高めます。

## 関連する概念

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## 関連する記事
- [[llm-grading-assistants-public-health-2026]] — LLM 採点者は高リスクな小論文評価で成績尺度を圧縮し両端を避ける

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 本物で AI に頑健な総括的評価としての口述試験の再考
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 生成 AI の学習ペナルティ:監督下・閉鎖式の試験による証拠
- [[chirikov-ai-grade-inflation-2026]] — 成績インフレのメカニズムとしての AI による課題の置き換え;宿題中心のコース(Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — より速い完成、より少ない学習:監督下の測定が不可欠
- [[generative-ai-guardrails-harm-learning]] — ガードレールのない生成 AI は学習を損なう
- [[assessing-quality-ai-generated-exams-field-2025]] — AI が生成した試験の品質の評価
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM は人間のように小論文を採点しない
- [[llm-automated-assessment-student-self-explanations]] — 学生の自己説明の自動評価のための LLM
- [[cong-confidence-asag-2026]] — 短答式問題の自動採点
- [[psyscore-essay-scoring-zpd-feedback]] — 心理測定を意識した特性適応型の小論文採点
- [[socratic-tests-conversational-assessment]] — ソクラテス式テスト:動的で対話的、マルチモーダルな評価
- [[code-review-genai-cs1]] — CS1 におけるコードレビュー面接
- [[responsible-assessment-ai-era-stanford-2026]] — AI 時代の責任ある評価
- [[test-driven-ai-assisted-learning]] — テスト駆動の AI 支援学習
- [[genai-oop-programming-assessments-2026]] — オブジェクト指向プログラミングの評価における GenAI のパフォーマンス
- [[brcic-effortless-trap-productive-struggle-2026]] — Effortless Trap:生産的な苦闘と学習の錯覚
- [[ai-vs-human-assessment-efl-tpck-2026]] — EFL における AI 生成と人間作成の評価課題の比較
- [[roe-assessment-twins-2026]] — GenAI 時代に評価の妥当性を強化するための評価の双子(Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — 手書きの物理の評価の AI 採点(オリンピック)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — 学生は AI が作成した問題を確実に見分けられません
