---
title: 評価
created: "2026-10-10T21:52:56-04:00"
updated: "2026-10-30T03:34:02-04:00"
connected_resources: [idstack, lesson-md, master-instructional-design]
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating, course-ai-policy, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity]
technology: [generative-ai, learning-analytics]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, formative-assessment, process-oriented-assessment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/assessment
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

> **評価**とは、学習者が何を知り何ができるかについての証拠を集め解釈する手順と、学習を評価するために用いられる方法のことです。[[ai-education|教育におけるAI]]は評価を根本的に作り直しました。AIは[[automated-assessment|自動採点と採点付け]]を動かし、評価項目を生成・適応させ、そして生徒がAIを使えるようになったとき評価が実際に何を測るのかについて深い問いを投げかけます。評価は、ナレッジベースの[[formative-assessment|形成的評価]]、[[automated-assessment|自動採点]]、[[assessment-validity|妥当性]]、[[educational-measurement|教育測定]]の coverage を組織する、包括的な概念です。

## 考えるための問い

- ここでの評価は、学習者が何を知り何ができるかについての証拠を集め解釈することと定義されています。読む前に、あなたなら「ある評価が妥当であるのは……場合である」という文をどう言い終えますか。そして、もしすべての生徒がこっそりAIを使って自分の成果物を作れるとしたら、その答えはどう変わるでしょうか。
- このページは、生徒がGenAIを*どう*使ったか(批判的に評価し取り込む使い方か、無批判な近道の利用か)が成績を予測した一方、どれほど頻繁に使ったかは何も予測しなかったと主張しています。AIを利用を制限することで規制しようというよくある本能について、これは何を示唆しているでしょうか。
- 学習者は、その道具がなければ再現できない、専門職水準の成果物を提出するかもしれません——成績と背後にある能力との間の推論が断たれてしまいます。「その生徒が手助けなしには実際にできない仕事に対して『能力』が認められるの」を見たことがありますか。それは何を明らかにしましたか。
- このページが提示する建設的な問いは、「どうすれば生徒がAIを使うのを止められるか」ではなく、「どうすれば将来の仕事を映す文脈で、AIを思慮深く使えるようにできるか」です。それを目標とするなら、あなたの分野の評価はどのような姿になるでしょうか。
- DRIVEの枠組みは、生徒のGenAIとの[[student-engagement|関与]]の質——成果物だけではなく——を、プロンプトを戦略的に操り自分のアイデアを統合しているかどうかに注目して評価することを示唆しています。深く内省的な[[student-ai-interaction|AIとの相互作用]]と、表層的な消費とを、あなたは何を見て区別するでしょうか。
- AIを介した評価は、[[oral-assessment|口頭試験]]、ポートフォリオ、不安を減らし専門職に関連すると感じられる対話形式へと多様化しつつあります。ご自身の経験から、最も「AIに抵抗力がある」と思う評価形式はどれでしょうか。そして、抵抗力があることは教育的な価値があることと同じでしょうか。

## はじめに

評価は、2つの理由から教育におけるAIにとって中心的なものです。第一に、AI自体が生徒を評価するために使われます——小論文、コード、短答問題、試験を規模に応じて採点します。第二に、教室におけるAIは、生徒が[[generative-ai|生成AI]]を使って成果物を作るかもしれないために、評価が妥当に測れるものを変えます。したがってこの分野は、評価を自動化する*道具*と、AIが提起する*妥当性と誠実性*の問いの両方にわたります。
高等教育の評価研究 72 件の PRISMA レビューでは、教育者が評価のサイクル全体（評価の作成、練習、採点、学習とフィードバックの透明性）にわたって生成AIを用いていたことが見出され、評価の作成とフィードバックが最も頻繁に同定されたアフォーダンスでした（[[higher-ed-assessments-genai-systematic-review|Crompton and Burke (2026)]]）。

## 評価におけるAIの使い方

- **自動化された評価:** [[automated-assessment|AIに基づく評価]]は、多肢選択、短答、小論文、コード、パフォーマンスに基づく評価まで、複数の様式にわたります——[[automated-assessment|自動採点]]、[[automated-essay-scoring|自動小論文採点]]、[[automated-question-generation|自動問題生成]]を通じて。
- **形成的評価:** [[ai-technologies|AIシステム]]は、形成的な評価項目を規模に応じて生成・検証・適応させ、[[summative-assessment|総括的]]な評価だけでなく、進行中の指導に情報を与えます。
- **学習分析と測定:** [[learning-analytics|学習分析]]と[[educational-measurement|教育測定]]は、評価のデータを学習の過程に結びつけ、[[item-response-theory|項目応答理論]]、[[knowledge-tracing|知識追跡]]、[[student-modeling|学習者モデル化]]を用いて成績を解釈します。[[razavi-powers-item-difficulty-llm-2026|Razavi and Powers(2026)]]は、測定の入力としてのLLMによる項目難易度推定を実証しています。RaschのIRTモデルで較正された5,170問のK-5の数学と読みの項目にわたり、GPT-4oのゼロショットの評定は真の難易度と中程度から強い相関を示し(r = 0.83 数学、r = 0.81 読み)ましたが、学年によって異なりました。一方、特徴に基づくアプローチ(LLMで抽出した特徴を木構造モデルに入れるもの)は、r = 0.87に達する相関を得ました。この調査は、試験の専門家のための実用的な7段階のワークフローを提供するとともに、K-5の数学と読みを超える一般化可能性は不明であると注意しています。
- **フィードバックのループ:** AIによる評価は、ますます、評価から学習へと循環を閉じる[[feedback|フィードバックのループ]]に流れ込みます。
- **電子ポートフォリオ評価:** [[eportfolio|電子ポートフォリオ]]は、時間をかけて生徒の成果物と省察を集め、過程に基づいたAIに頑健な評価形式とします。生成AIは、ポートフォリオの*過程*を助けることができます——フィードバックを生成し、[[scaffolding|省察に足場をかけ]]、そして(適切なルーブリック設計によって)評価を支える——一方、ポートフォリオが推論の痕跡と下書きに置く重点は、AIによる捏造に抵抗します。[[ni-lam-multiliteracies-ai-portfolio-2026|AI支援によるポートフォリオ評価]]と[[sutama-chatgpt-eportfolio-speaking-2026|EFLのスピーキングのためのChatGPT+電子ポートフォリオ]]は、AIがポートフォリオの体験と学習者の[[feedback-literacy|フィードバック・リテラシー]]の両方を高められることを示しています。
- **自由記述の採点の信頼性はモデルに依存する:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik(2025)]]は、1,885件の自由記述のソフトウェア工学の解答について、11のGenAIおよび文埋め込みモデルを2人の専門の採点者と比較しました。ほぼ完全な一致に達したのはGPTo1のみ(Fleissのカッパ0.82)で、参照に基づくモデルは正しいが言い回しが異なる解答を罰しました。GPTo1は監督なしで展開可能と判断された唯一のモデルでしたが、独自のAPIコストを伴うため、著者らは、資源が限られた環境では、進んだモデルと手頃な選択肢を組み合わせる、あるいは[[human-in-the-loop-ai|人間の監督]]を伴うハイブリッドな戦略を勧めています。42件の実証研究(2023年–2025年)を対象としたPRISMA準拠の[[meta-analysis-systematic-review|システマティックレビュー]]は、採点の分野全体にわたって、この条件的な信頼性の像を裏づけています。LLMは閉じた形式と短答の課題では人間の採点者と一致しますが、複雑で自由記述の、あるいは主観的な仕事では人間の判断を完全には置き換えられず、一様な採点の偏りは生じませんでした——モデルはときに寛大で、ときに厳しく、そしてしばしば極端な得点を避けました([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]])。反復的なルーブリックの精緻化は、高リスクな[[medical-education|医学]]の現場で、LLMの自由記述採点を人間に近い信頼性へと押し上げられます。[[olvet-genai-scoring-open-ended-medical-2026|Olvet et al.(2026)]]は、教員が誤りのパターン分析に基づいて分析ルーブリックと総合的ルーブリックを繰り返し改訂した後、GPT-4が臨床実習前の4問のうち3問で教員の採点者と実質的からほぼ完全な一致に達したこと(重み付けカッパは最大0.94)を、総合的ルーブリックの残りの1問が中程度の一致(κw = 0.54)にとどまったこととともに見いだしました——これは、人間在環のルーブリック設計の見返りと、総合的で合成された課題におけるその限界の両方を示しています。
- **AI支援による口頭・パフォーマンス評価。** ある[[vocational-education|TVET(技術・職業教育訓練)]]の設計調査は、評価を文字中心の形式から、LLMに支援された対話的な[[oral-assessment|口頭評価]]へと移します。4つのコホートにわたり、33人中21人の学習者が音声の課題を現実的と評価し、リアルタイムに話すことが書かれたポートフォリオよりも能力をよく反映することに異を唱えた者はいませんでした。一方、同一の問いに対する語数はコホート間で5倍から8倍までばらつき、9人の学習者は2語から13語で答え、全員が正解でした。このシステムは、単一のノートパソコン上でMistral 7Bとfaster-whisperを用いて最大12人の同時の学習者にサービスを提供する形でオフラインで動作し、録音は90日後に削除し、採点の判断は評価者に残されました——職場向けの資格における[[human-in-the-loop-ai|人間在環]]評価設計の一例です。([[ai-supported-oral-assessment-tvet-2026]])

## 妥当性と測定の課題

AIは根本的な[[assessment-validity|妥当性]]の問いを提起します。AIで採点された評価は、生徒の学習を測っているのか、それとも[[prompt-engineering|AIにプロンプトを与える技能]]を測っているのか。生徒のAI利用は、従来型の評価を無効にするのか。主要な課題には次のものがあります。

- **構成概念の妥当性:** [[competency-based-education-genai-production-2026|能力ベースの教育に関する研究]]は、生成AIが成績と背後にある能力との間の推論を断ったことを示しています——学習者は、その道具がなければ再現できない専門職水準の成果物を提出するかもしれません。これは、何の能力が評価されるのかを再概念化する動機づけとなります。
- **評価を再整列させるための三頂点の枠組み。** [[koretsky-genai-stem-assessment-2026|Koretskyら（2026）]]は、遍在する生成AIを不正ではなく妥当性と能力の定義の問題として扱い、評価の三角形の三つの頂点、すなわち認知、観察、解釈は、一つずつ継ぎ当てするのではなく共に再整列されなければならないと論じます。
- **共著と誠実性:** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|共著における誠実性]]は、生徒が理解しないAI生成の内容を提出するときに侵害される、新たな妥当性の証拠の源泉を提案し、対応策として対話的な「AIビーバ」を探究します。
- **心理測定的な質:** [[psychometrically-aware-ai|心理測定を意識したAI]]と[[automated-assessment|確信度を意識した評価]]の研究は、AIの採点を信頼でき、偏りがなく、解釈可能なままに保つことに努めます。
- **AI評価者の評価:** [[ai-ed-evaluation]]は、自動化された評価者が実際に機能するかどうか——信頼性、[[pedagogy|教授法]]、[[equity-in-ai-education|公平性]]において——を、見出しの正しさだけではなく決めるための方法と[[benchmark|ベンチマーク]]を提供します。
- **AIと仲間採点の、成績に依存する信頼性(2026年):** 同じ[[higher-ed|学部]]の[[group-work|グループプロジェクト]]に対するChatGPT、仲間、[[teacher-role|教員]]の採点を比較して、[[usher-faraon-who-grades-best-2026|Usher & Faraon(2026)]]は、教員との採点の一致が*生徒の成果物の質に条件づけられている*ことを示しました。ChatGPTは質の低い提出物を最も高く評価し、質の高い成果物ではよりよく教員と一致し、仲間はより弱い成果物で最もよく一致し、強いプロジェクトを過小評価しました。この所見は、「信頼できるか信頼できないか」という二分法を疑い、代替の評価者を課題と成績の水準に応じて対応づける、条件的な信頼性のモデルへと向かいます。
- **人間による採点もまた価値に満ちている(2026年):** [[luo-dawson-value-judgments-grading-2026|Luo & Dawson(2026)]]は、GenAIに支援された成果物の人間による採点でさえ、中立的で基準に基づく行為ではないことを示しています。33人の大学教員を対象としたシナリオに基づく面接から、採点の決定が、人に向けられた価値(誠実さ、勤勉さ)、能力に向けられた価値(自立性、GenAIの技能、学問的な熟達)、関係に向けられた価値(信頼)、そして正義に向けられた価値(公正さ、恩恵)に動かされていることが明らかになりました——課題を超えて、生徒についての教員の推測にまで及びます。この研究は、評価の問いを「GenAIの利用はカンニングか」から「教員の価値判断はどのように成績を形づくり、それらの価値は評価される成果と関係があるか」へと捉え直し、[[assessment-validity|妥当性]]と、GenAIの利用が成績にどう影響するかについての「双方向の[[explainable-ai|透明性]]」を前景化します。

## 誠実性と検知をめぐる議論

評価におけるAIは、[[academic-integrity|誠実性]]の対話を激化させました。一つの流れは[[ai-detection|AI生成の文章を検知すること]]に焦点を当てますが、増えつつある[[research-methods-aied|研究]]の一群は、検知が限定的で状況に応じた道具であり——最初に訴える戦略ではないと論じます。[[beyond-detection-authentic-assessment-ai-2025|検知を超えて]]と[[responsible-assessment-ai-era-stanford-2026|責任ある評価]]は、本物らしさ(Authenticity)は取り締まって存在させられるものではなく、再設計されなければならず、AIを宣言された協力者として位置づけ、監視よりも[[authentic-assessment|本物らしい]]、[[process-oriented-assessment|過程に基づいた]]評価を優先すべきだと論じます。**[[walton-bearman-assessment-judgment-2025|Walton et al.(2025)]]**は、これを、生徒がGenAIを用いて評価にどう実際に判断を下すかという**証拠**に基づけます。26人の生徒を対象としたスクロールバック(振り返り)面接から、6つの判断の出来事からなる幅広い連続——AIの知識を批判的に評価しAIの限界を通じて学ぶことから、無批判に考えを取り入れAIの貢献を自分のものと誤って判断することまで——が明らかになりました。**[[stamatoulis-genai-use-patterns-2026|Stamatoulis et al.(2026)]]**は、[[quantitative-research|定量的]]な対応物を加えます。157人の生徒にわたり、GenAIが*どう*使われたか(理解を支えるための批判的に評価し取り込む使い方か、確かめを伴わない近道の利用か)は成績を予測した一方、単純な利用の**頻度は成績も学問的な[[self-efficacy|自己効力感]]も予測しませんでした**。これらの研究はそろって、評価の問いを、*生徒がAIを使うかどうか*から、*どう判断しその利用に形を与えるか*へと捉え直します。

[[bassett-ai-detectors-education-2026|Bassett et al.(2026)]]はさらに進み、検知はまったく使われるべきでないと論じます。その確率的な出力は、現実の文章の出自が未知であるため独立に検証できず、検知器のスコア——単独でも、言語的な目印、文体の比較、LLMの主張、生徒の沈黙と組み合わせても——は、誠実性の調査が要求する「証拠の優越(balance-of-probabilities)」の基準を満たしません。

25件の研究を対象としたPRISMAのレビューは、検知の議論が見落としているリスク要因を加えます。英語で書くのに苦労する非母語英語話者は、誠実性を破る傾向が高いことが示されており、誠実性への期待は、執行だけではなく具体的な学術的なライティングの支援と対にされるべきです([[ssaho-ai-academic-integrity-review-2025|Balalle and Pannilage(2025)]])。

## AI時代における評価の再設計

ナレッジベースの評価に関する文献における建設的な問いは、「どうすれば生徒がAIを使うのを防げるか」ではなく、「どうすれば生徒が、将来の仕事を映す文脈で、それを思慮深く使えるようにできるか」です。これは評価を次のものの周りに捉え直します。

- **AIの利用を見えるようにし評価する、本物らしく過程に基づいた課題。** [[authentic-assessment|本物らしい評価]]——価値があり現実的な課題における生徒の成績を検討すること——は、AIの挑戦への主要な対応です。[[llm]]がもっともらしく再現できるどんな課題もその妥当性を失うため、本物らしさは、リアルタイムの[[collaborative-learning|協働]]、デジタルおよび社会的な貢献、個人の意味形成を中心に再設計されなければなりません。これは、[[zhan-boud-du-authentic-assessment-scoping-review-2025|本物らしい評価のための設計枠組み]]、[[authentic-products-authenticated-processes-2026|本物らしい成果物と認証された過程]]、そして[[tool-invariant-framework-agentic-ai|道具に依存しない過程の評価]]に結びつきます。
- **妥当性の証拠に根ざした責任ある評価設計**([[responsible-assessment-ai-era-stanford-2026]])
- **評価の対象から導き出される、課題レベルのAIの許可:** [[mccorkle-aligned-genai-course-policy-2025|McCorkle(2025)]]は、[[educational-policy-ai|AI政策]]に先立つ評価設計の作業を示しています——プロジェクト内のすべての課題を棚卸しし、何がどの目標に対して評価されるのかを特定し、その根拠に基づいて課題ごとにAIを許可または禁止すること(ブレインストーミングと画像の選定は許可、学習目標の作成とスライドのデザインは不可)。同じ整合化の作業は、評価が支える推論の点検を兼ねます。なぜなら、ある成績が保証することを意図した成果を、教員に名指しさせるからです([[assessment-validity]])。
- **言語的な様式を超える評価:** Jiang et al.(2026)は、第二言語の教員のためのマルチモーダルな評価リテラシーを、言語的、視覚的、聴覚的、身振り的、空間的な様式にわたって応答を引き出す課題のための知識、価値、能力として定義します。30人の香港の英語教員による1年間のプログラムは、評価の方略についての知識を5点満点で3.13から4.15へ(偏イータ二乗 = 0.571)、生徒を支える能力を3.05から3.98へ(0.482)高めましたが、3つの価値の下位領域はすべて横ばいのままでした。教員自身の経験は、枠組みに2つの次元を加えました——競合するカリキュラム上の優先事項に対して実践を維持することと、GenAIを批判的に動員すること——です([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang et al.(2026)]])。
- **共著と宣言**を、評価の契約の一部として
- **相互作用を評価する、過程に基づくルーブリックの基準。** [[rubrics-genai-process-based-assessment-2026|Oviedo & Díaz（2026）]]は、Biggsの3Pモデルを三つの重要な評価次元として読み解きます。人間の主体性と批判的な監督、[[prompt-engineering|プロンプト工学]]に結びついた対話的な足場かけ、そして[[academic-integrity|誠実性]]と透明性に根ざした認知的自主性です。完成したファイルはもはや、誰の推論がそれを生んだかについての情報を運ばないと論じています。
- **能力としての制作** — 学習者が道具を操り専門職水準の仕事を生み出す能力を評価すること([[competency-based-education-genai-production-2026]])
- **成果物だけでなく、相互作用の過程を評価する** — [[assessing-student-drive-framework-2025|DRIVEの枠組み]](Directive Reasoning Interaction + Visible Expertise)は、生徒の*GenAIとの関与*の質を、評価される構成概念として扱います。それは、生徒がプロンプトを戦略的に操るか(DRI)どうか、そしてやり取りを通じて自分の学問的な考えを統合し展開するか(VE)どうかに注目することで、表層的な消費と深く内省的な相互作用を区別し、過程に焦点を当てた基準を、[[self-directed-learning|自己主導的学習]]と[[icap-framework|ICAP]]の階層に沿った認知的関与の理論に根ざします。これによりDRIVEは、*AIを介した本物らしい評価*の例となります——検知の道具ではなく、学習者がGenAIとどう提携するかを評価するためのルーブリックです。

この文献における一つの提案は、現在の枠組みの中での再設計を超えます。[[ai-agents-joyful-assessment-third-space-2026|El Khoury and Ma(2026)]]は、不正行為を防いだりAIの利用を検知したりすることの周りに組織された改革は、教育的な想像力を統制とコンプライアンスへと狭めると論じし、代わりに**喜びのある評価(joyful assessment)**を提案します。安全で、感情的に応答的で、生徒の[[agency|主体性]]を力づけ支える評価です。安全が荷重を支える条件です。なぜなら、それがなければ感情的な呼応はパフォーマンスになり、力づけは圧力になり、主体性は危険になるからです。彼らの捉え方は検知の課題を反転させます——誠実性は、生徒が関与したいと思う評価を設計することの帰結となり、その出発点ではなくなる——そして、彼らは教員が作る[[agentic-ai|AIエージェント]](カスタムGPT、Gems、Copilot Studioのエージェント)を、判断の前に生徒が練習する低リスクの稽古の場として位置づけます。AIが証拠を組織し、教員がそれを解釈する、という主張とともにです。

## 教育におけるAIへの含意

- **評価と学習は切り離せません:** 良いAIによる評価は、評価するのと同じくらい学習を([[feedback|形成的なフィードバック]]として)支えるべきです。
- **妥当性は再概念化されなければなりません:** AIが生徒の成果物を生み出せるようになったとき、評価は成果物だけでなく、過程、判断、本物らしい制作を測らなければなりません。
- **自動化は厳密に評価されなければなりません:** 自動化された評価者は、正しさの主張だけでなく、心理測定的で[[bias-mitigation|公正性]]を踏まえた評価を必要とします。
- **誠実性は検知から設計へと移ります:** 評価におけるAIへの最も頑健な対応は、AIの利用が想定され、宣言され、精査される課題を設計することです。
- **革新的な実践は、複数の問題に同時に取り組みうます。** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy(2026)]]は、[[authentic-assessment|本物らしい評価]]、自己評価と[[peer-assessment|仲間評価]]、再評価、[[mastery-learning|基準に基づく採点]]、そして評価を与えないこと(ungrading)という、互いを強め合う5つの実践の組が、「学習のための評価」というパラダイムに沿うことで、生成AI時代に、従来型の総括的で規範参照的な採点の害(表層的な学習、侵食された[[motivation|内発的な動機づけ]]、ストレスと不安、不平等、損なわれた[[academic-integrity|誠実性]])に対抗しうると論じています。彼らは、分野によって採用のむらがあることを見いだしています——自己評価と仲間評価が主流である一方、採点に焦点を当てた革新は周辺にとどまる——そして、教育者に対して、段階的な実験と[[governance|制度的]]な支援に支えられ、評価と採点の革新にもっと積極的かつ相互的に関わるよう求めています。

- **AIを介した評価は多様化しています。** [[aivaluate-anxiety-assessment-2026|AIvaluate]]は、LLMで拡張された[[conversational-ai|対話エージェント]]が、パフォーマンスに基づく評価中の生徒の不安を減らしたことを示しています。[[asynchronous-oral-assessment-2026|Pentland(2026)]]は、非同期の口頭評価がより高い関与を提供し、専門職に関連すると知覚されたことを見いだしています。[[graph-its-adaptive-algorithms-2026|グラフベースのITS]]は、適応的な知識状態の追跡を用いて評価に情報を与えます。

## よくある誤解

- **「誠実性は主に検知の問題である。」** **26人の学生へのスクロールバック・インタビュー**は、学生がGenAIを使った評価を**スペクトル**に沿って判断しながら進むことを明らかにし、**157人の学生**を通じて、GenAIが*どう*使われるか、すなわち**理解を支える評価的な統合か、それとも置き換えか**が成果を予測しました。利用の様式は、利用の有無よりも鋭く学生を分けます。
- **「非母語の英語話者が不正のリスクである。」** **25研究のPRISMAレビュー**は、検知の議論が見落とすリスク要因を加えます。非母語話者は、言語の要求に苦しむときに**誠実性を破る高い傾向**を示しました。それは誠実さの問題と読み違えられた、言語支援の問題です。
- **「GenAIを禁じる政策が問いを決着させる。」** 学生は規則に従うパターンではなく、判断のスペクトルを報告します。したがって、学生がすでに行っている評価的な推論に関わらない規則は、一貫して従われることはありません。

## 関連する概念

- [[learners]] — 学習者:学習者側の概念のための包括概念
- [[pedagogical-partnerships]] — 教授法的パートナーシップ
- [[formative-assessment]] — 形成的評価:規模に応じて生成・検証・適応される項目
- [[automated-assessment]] — 評価の様式にわたる自動採点と採点付け
- [[authentic-assessment]] — 過程に基づいたAIに頑健な本物らしい課題
- [[assessment-validity]] — 生成AIのもとでの評価の妥当性
- [[educational-measurement]] — AIによる評価を支える測定理論
- [[automated-essay-scoring]] — 自動小論文採点
- [[automated-question-generation]] — 自動問題生成
- [[oral-assessment]] — 口頭評価:AIによる代替に抵抗する、その場と録画の形式
- [[summative-assessment]] — 総括的評価:AIに抵抗力のある形式(口頭、監視付き、閉じた本の試験)
- [[item-response-theory]] — AI時代の評価の応答を解釈するためのIRT
- [[psychometrically-aware-ai]] — 心理測定を意識したAI採点
- [[learning-analytics]] — 評価のデータを学習に結びつける分析
- [[feedback]] — 評価から学習への循環を閉じるフィードバック
- [[feedback-literacy]] — 学習者のフィードバック・リテラシー
- [[academic-integrity]] — 誠実性とAI検知をめぐる議論
- [[ai-detection]] — AI生成の文章の検知
- [[ai-ed-evaluation]] — 自動化された評価者を評価するための方法とベンチマーク
- [[eportfolio]] — 過程に基づく電子ポートフォリオ評価
- [[speech-and-voice-technologies]] — 音声・発話技術
- [[peer-assessment]] — 仲間評価

## 関連する記事

- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — マルチモーダルな評価リテラシーを定義し、何が動き何が動かなかったかを測定する1年間のプログラム
- [[ai-agents-joyful-assessment-third-space-2026]] — AIエージェント、喜びのある評価、そして第三の空間
- [[mccorkle-aligned-genai-course-policy-2025]] — 評価されるものから導き出される課題レベルのAIの許可(McCorkle 2025)
- [[usher-faraon-who-grades-best-2026]] — プロジェクトの質の水準にわたってChatGPT、仲間、教員の採点を比較する(Usher & Faraon 2026)
- [[responsible-assessment-ai-era-stanford-2026]] — AI時代の責任ある評価
- [[beyond-detection-authentic-assessment-ai-2025]] — 検知を超えて:本物らしい評価
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — 共著における誠実性と評価の妥当性
- [[competency-based-education-genai-production-2026]] — 生成AIの後の能力ベースの教育
- [[genai-assessment-governance]] — 評価における生成AIの証拠中心のガバナンス
- [[ssaho-ai-academic-integrity-review-2025]] — AIの誠実性レビュー:検知は評価の再設計と対になされなければならない
- [[bassett-ai-detectors-education-2026]] — 表が出ても裏が出ても我々の勝ち:教育におけるAI検知器(Bassett et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate:LLMで拡張された生徒の不安の評価(2026)
- [[graph-its-adaptive-algorithms-2026]] — 動的な領域のためのグラフベースの知的個別指導(2026)
- [[asynchronous-oral-assessment-2026]] — AI時代の非同期の口頭評価(Pentland 2026)
- [[assessing-student-drive-framework-2025]] — DRIVE:GenAIとの相互作用を通じた学習の評価(DRI + Visible Expertise)
- [[walton-bearman-assessment-judgment-2025]] — 評価課題におけるGenAIを用いた生徒の仕事のなかの判断(26人の生徒、スクロールバック)
- [[stamatoulis-genai-use-patterns-2026]] — GenAIの利用のパターン(批判的に評価し取り込む使い方か確かめを伴わない利用か)と成果
- [[luo-dawson-value-judgments-grading-2026]] — GenAIに支援された成果物の採点における価値判断:誠実さ、信頼、妥当性、双方向の透明性(Luo & Dawson 2026)
- [[razavi-powers-item-difficulty-llm-2026]] — LLMと木構造のMLを用いた項目難易度の推定
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[computing-assessment-genai-workshop-report-2026]] — AIはあなたの宿題をできる。さてどうする?生成AIの時代の情報科学の評価に関するオンラインワークショップの報告
- [[koretsky-genai-stem-assessment-2026]] — 評価を再整列させるための三頂点の枠組み
- [[rubrics-genai-process-based-assessment-2026]] — 成果物ではなく相互作用を評価するルーブリックの基準
