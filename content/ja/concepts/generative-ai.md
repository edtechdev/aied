---
title: 生成AI
created: "2026-10-10T22:31:13-04:00"
updated: "2026-10-30T03:34:02-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **生成AI** — テキスト、コード、画像、その他の内容を生成できるAIシステム。最も顕著なのはGPT-4やClaudeのような大規模言語モデルです。生成AIは、現在の[[ai-education|教育におけるAI]]の[[research-methods-aied|研究]]の波を駆動する技術です。

## 検討すべき問い

- 生成AIは、要求に応じて流暢で確信に満ちた響きの内容を生成します。流暢さは正しさと等しいでしょうか。そして確信に満ちた響きだが誤った産出を、どこで目にしたでしょうか — それを見抜きにくくしたのは何だったでしょうか。
- 初期の規則に基づくシステムや検索に基づくシステムとは異なり、生成的モデルは蓄えられた答えを取り出すのではなく、新しい内容を創り出します。検索エンジンと比べて、その移行はリスク — 幻覚、過度の依存、学問的な誠実性 — をどう変えるでしょうか。
- 80以上の記事を持つ生成AIは、この知識ベースで最大の論脈であり、チューリング、評価、内容生成、そして安全性にわたります。どの応用が学習にとって最も有望だと思われ、どれが最も危険だと思われますか — そしてなぜでしょうか。
- ソクラテス式の指導を生成できるのと同じ技術が、書き写しを促す「正答の罠」を生み出すこともできます。学習を足場づける生成AIを、学習を短絡させる生成AIから分けるのはどんな設計上の選択でしょうか。

## はじめに

### 教育にとって生成AIを違うものにしているのは何か

初期の規則に基づくシステムや検索に基づくシステムとは異なり、生成AIは要求に応じて流暢で文脈的に適切な内容を生成します。これは前例のない機会と新たなリスクの双方を生み出します。

- **内容生成：** [[llm|LLM]]は教材、例、そして説明を創り出せます。[[book-level-synthetic-textbook-organization|合成された教科書]]、[[courseblueprint-adaptive-video-generation|適応的な動画]]、そして[[ai-generated-instructional-videos-computing-ed|解説動画]]は、教育的な内容生成の幅を示しています。
- **プラットフォームと言語に依存する授業計画の草案。** AIが生成した理科の授業計画に関する専門家による[[ai-ed-evaluation|AIの評価]]は、内容の品質が一様でも中立的でもないことを示しています。[[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli, Yildirim（2026）]]は、11人の[[science-education]]専門家に、ChatGPT-4と教育に焦点を当てた道具（Teacher's Buddy）とを、六年生の工学に基づく設計学習（Engineering Design-Based Learning）の段階に対して評定させました。教育に焦点を当てたプラットフォームは、八つの品質基準のすべてで汎用のものを上回りましたが、11人中7人の専門家はなお計画を「修正すれば適用可能」と評するにとどめました。両プラットフォームは、トルコのメルスン向けに地域化を求められたときでさえ、トルコ語のプロンプトよりも英語のプロンプトから教育学的により豊かな産出を生成しました — これは、プロンプトの言語が教材の品質を形づくるという[[digital-divide|デジタル的な公平性]]上の懸念です。
- **チューリングと対話：** [[intelligent-tutoring|AIチューター・システム]]は対話的な指導に生成AIを用います。[[socratic-method|ソクラテス式の対話]]と[[golrang-propact-pair-programming-2026|協働的なチューリング]]は、[[pedagogy|教育学的]]な相互作用のために生成的な能力を活用します。
- **模擬患者と事例の一貫性。** MeduAI-SPプラットフォームからの4,815件の学生とAIのやり取りに複数の専門家が注釈を付けたコーパス（[[ai-standardized-patient-scaffolding-medical-2026|Yang et al.（2026）]]）は、LLMが生成した標準化された患者の応答のうち明確な忠実性の問題を含んでいたのは約0.68%のみであり、段階的な開示は患者のメッセージの約99.3%で臨床的に適切と評されたことを見出しました。これは、生成AIの模擬患者が、構造化されたYAMLによるスクリプティング（qwen-max）の下で、事例の一貫性と探求に依存して時期尚早でない開示を保てるという主張を支えます。それによって、もっともらしさの実演のためだけではなく、成果の研究のための十分に安定した環境になります — そのシステムは学習中に診断と[[summative-assessment|総括的な]]評定を意図的に控えていました。
- **評価：** [[automated-essay-scoring|エッセイの採点]]、[[automated-assessment|自動採点]]、そして[[formative-assessment]]はますます生成的モデルに依拠しています。[[benchmark|ベンチマーク]]は開かれた課題についてこの移行を裏づけます。[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik（2025）]]は、文脈に敏感な生成AIモデル（人間の評定者とほぼ完全な一致に達したGPTo1）が、開放式の学生の応答の採点において、硬直した参照の照合に依拠し、有効だが言い回しの異なる答えを誤分類していた初期の文埋め込みのアプローチを大きく上回ったことを見出しました。[[olvet-genai-scoring-open-ended-medical-2026|Olvet et al.（2026）]]はこれを、正式な臨床実習前の[[medical-education|医学]]教育にまで広げました。そこではGPT-4による開放式の問いの採点が、教員との実質的からほぼ完全な評定者間一致（重み付けカッパは最大0.94）に達しました — ただし、人間が三巡にわたってルーブリックを反復的に精緻化し、食い違いを仲裁するためにループにとどまった後に限られました — 一方、最も合成的で総括的なルーブリックの問いは、中程度（κw = 0.54）にとどまりました。これは、生成的な評価の信頼性が、生のモデルと同じくらい、人間によるルーブリックの設計と誤りのパターンの分析によって形づくられるという証拠です。しかし同じ流暢さは、課題の型を越えて一般化しません。[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al.（2026）]]は、ChatGPT-5が客観的な薬学の試験問題では人間の教員と一致した一方（CCC 0.935〜1.000）、短答式（≈0）やエッセイ（0.341〜0.854）の問題では一致せず、構造化されたルーブリックもその隔たりを確実に閉じなかったことを見出しました。
- **リスク：** [[hallucination-risk|幻覚]]、[[cognitive-offloading|過度の依存]]、[[cognitive-offloading]]、そして[[academic-integrity]]についての懸念は、生成AIの流暢さと[[accessibility]]から具体的に生じます。

- **産出の品質を超えた学習の安全性の問題。** [[ssail-safe-sound-ai-learning-2026|Rahimi（2026）]]は、生成AIが学習者の仕事の品質を高めながら、彼らが行う必要のある認知的作業を代わりに行い得ると論じ、安全性は正確さ、バイアス、あるいはプライバシーではなく、人間の発達の軌道 — 能力を守る学習の安全性と、その発達を支える学習の健全性 — において判断されるべきだとします。
- **効果についての主張は、学習ではなく成績を測っている。** この分野最大の推定値 — ChatGPTと同様の道具について*g* = 0.7を報告した69研究の[[meta-analysis-systematic-review|メタ分析]] — は、遅れて支援なしで測定された保持ではなく、即時の課題上の成功をまとめているため、生成AIが[[learning-gains|学習]]を生み出すという証拠ではありません（[[genai-performance-vs-learning|Yan et al., 2025]]）。
- **学習環境の生成：** 専門化された生成的モデルは、今やコースの要項を直接、完成した学習の成果物に変えます。構造化されたスライドと自己完結的な対話的なHTMLページの一括生成のために訓練されたモデルの群である[[cogevol-learning-environment-generation-2026|CogEvol（Tu et al. 2026）]]は、スライドを中央値で17秒、対話的なページを59秒で完成させ — 数分かかる多往復の[[agentic-ai|エージェント]]による[[scaffolding]]を置き換えます。信頼性は、実際の失敗を53,687件の検証されたSFTサンプルと、GRPOに基づく強化学習のための規則とVLMのハイブリッド報酬に変換する生産用のパイプラインによって担保されています。これは生成AIを、[[teacher-role|教員]]と[[curriculum-design|カリキュラム]]の制作のワークフロー、そしてAIが生成した学習環境が見た目の磨きではなく機能的かつ教育学的に健全かどうかの評価にとって含意を持つ、内容の制作のエンジンとして位置づけます。

教育者の道具の利用に関する全数調査は、生産ではなく指導に注意が集まっていることを示しています。9カ国の211人の教育者が挙げた50の道具のうち、画像、音声、動画、そして発表用の道具がおよそ半分を占め、一方でチューリングとチャットボットの道具は教える側のグループとして最小でした（[[typology-generative-ai-tools-education-2026|Bower, Torrington & Lai（2026）]]）。

### 知識ベースにおける生成AIの扱い

80以上の記事を持つ生成AIは、知識ベースで最大の技術の論脈です。その394研究にわたって、版が特定されないChatGPTは94件、ChatGPT-3/3.5系は66件、ChatGPT-4系は52件に現れたため、報告された能力の多くはすでに置き換えられたモデル世代を記述しています([[mapping-genai-higher-ed-scoping-review|Linら(2026)]])。研究は効果の研究（[[genai-meta-analysis-programming-learning|メタ分析]]）、安全性の懸念（[[hazra-safetutors-pedagogical-safety-2026|チューターの害]]、[[eduguard-safe-rag-llm-tutor|安全柵]]）、そして設計原理（[[instructional-guidance-genai-learning|指導の手引き]]）にわたります。

53研究にわたってまとめられると、生成AIに支援された教育は、達成度（g = 0.40）、高次の思考（g = 0.72）、動機づけ（g = 0.81）、そして作文（g = 0.76）において生成AIを使わないアプローチを上回りましたが、ゲームで支援された生成AIは有意な便益を加えませんでした（g = 0.24）（[[genai-educational-outcomes-meta-analysis|Dong（2026）]]）。

22研究の3水準メタ分析は、生成AIに支援された問題基盤型・[[project-based-learning|プロジェクト基盤型]]学習が、学習者の内的な成果に対して大きなまとめた効果(g = 0.819)を生むことを見出しましたが、PET-PEESEによる補正はそれをg = 0.378に減らします。埋め込みも重要で、汎用のチャットボットはg = 0.970にまとまるのに対し、特注あるいはAPIのシステムはg = 0.455でした([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen(2026)]])。


動機づけのみを扱う別の42研究のメタ分析は、まとめた効果をより低く（g = 0.764）見積もり、[−0.689, 2.217]にわたる95%の予測区間を報告しているため、動機づけ上の優位は新しい状況に対して確実に正であるわけではありません（[[genai-learning-motivation-meta-analysis-2026|Fang et al.（2026）]]）。

生成UIはこの論縦で最も新しい能力です。散文ではなく、動作する対話的な成果物 — スライダー、操作できるシミュレーション — を出力するモデルです。Google Researchのチームである[[generative-ui-education-learning-interactives-2026|Kovshov et al.（2026）]]は、既製品の生成UIは複雑な構成概念に対してまだ教育学的に十分に精密ではないが、学習目標を段階的な水準の目標に分解し、生成を批評と自己改善のループで包むことで、専門家の教員が受容できると評する対話的な教材が得られることを報告しています。彼らの設計は編曲の設計です。教員が目標を述べ、それを承認し、候補となるシミュレーションの中から選ぶため、特製の[[simulation|対話的な学習教材]]にかかる拘束条件は、生産から仕様の策定へと移り、[[guardrails|教育学的な安全柵]]は生成のパイプラインに埋め込まれます。教員が後から目を光らせるのに委ねられるのではありません。

これらの中心的な筋に加えて、最近の研究は[[governance|制度的]]なもの、相互作用的なもの、そして領域の文脈にわたって証拠基盤を広げています。Qin（2026）は、嶺南大学がデジタルなリベラルアーツの変革の一部として、すべての学部生に生成AIのリテラシーを制度化した様子を記録しています。ChangとLi（2026）は、学生とAIの対話が領域に結びついた認知的な[[student-engagement|関与]]を符号化し、プロンプトの約62%が高次の認知的負荷を反映していることを示しています。Netoと同僚（2026）は、シナリオに基づく医療教育における生成AIを[[meta-analysis-systematic-review|体系的にレビュー]]し、[[prompt-engineering|プロンプト設計]]は指導の仕様として機能するが、指導のフレームワークと整合させられることは稀（34.8%）で、再現可能な詳細で報告されることも稀（34.8%）であることを見出しました。生成AIはまた、練習に基づく[[teacher-education|教員養成]]のための学習者の役割演技のシミュレーションも動かします。[[zhuang-zhang-chatgpt-math-teacher-education-2026|ZhuangとZhang（2025）]]は*Student GPT* — 比の推論に関するよくある[[misconceptions]]を持つ[[k-12|中学生]]を模倣した、特別に作ったChatGPTチャットボット — を構築し、教員養成課程の数学の教員に、学生の思考を診断することについての手頃で内容に即した練習を与えました。これは、プロンプト設計（文献に基づくプロンプトが狙いとした概念的な誤りを確実に引き出した。0.98対0.40）が、既製品の生成的モデルを有用な教育学的な人格へと導けるという証拠です。

地方の資源の乏しい地区にいる8人の現職の教師を対象とした、生成AIが導く数学の専門能力開発の事例研究では、[[bicer-genai-pd-math-creativity-2026|Bicerら(2026)]]が、数学的な[[creativity|創造性]]、内容の知識、教授学的な内容の知識を、10のモジュールにわたる相互に関連した推論として関与させ、漸進的な足場の撤去とシミュレートされた学生の推論を評価しています。彼らが報告するのは関与のパターンであり、測定された伸びではありません。

[[li-language-educators-genai-review-2026|言語の教育者に関するシステマティックレビュー]]（Li et al. 2026）は、教育者が生成AIを、授業計画、教材の作成、そして作文の支援といった準備のための内容の仕事に最も高く評価する一方、生の教室での利用にはためらい、懸念は[[academic-integrity|学問的な誠実性]]（盗作と[[assessment-validity|評価の妥当性]]）、職業上の置き換え、そして技術ストレスを中心とすることを見出しています。採用は、専門的なアイデンティティ、教育学的、技術的、制度的、そして誠実性の要因によって形づくられ、能力の欠如はエピステーメー、テクネー、そしてプロネーシスに写像されます。

内容生成は同様に[[math-education|数学]]を超えて、教員との学習資源の共設計にも届きます — 例えば、教育学的な妥当性と文脈的な関連性を保つ、[[stem-education|ドローンのSTEM]]学習のための教員とAIが共に設計した[[simulation]]の足場です。子どものSTEAMの[[arts-design-and-media-education|芸術教育]]において、[[luo-tahir-chatgpt-steam-lesson-planning-2026|LuoとTahir（2025）]]は、ChatGPTに支援された授業計画が教員が作ったものを上回る利得を実験的に定量化しました（専門家評定の中央値20.5対17.6、p = .002、大きな効果） — しかし同じ研究は、流暢な産出が教室での生成について現実の失敗モードを伴うことを記録しています。すなわち、理想化されていたり日常の指導には非実際的であったりする計画、子どもの安全の制約の見落とし（例えば[[early-childhood-elementary-ai-education|幼い子ども]]に彫刻用のナイフを提案するなど）、西洋中心の文化的な偏り、そして論理的に欠陥のある、あるいは無関係な画像や資源の生成です。この研究の貢献は、信頼性についての問いを「モデルが生成できるか」から「教育学的な利用のためにプロンプトと評価の基準がどうそれを制約しなければならないか」へと変える、プロンプトのフレームワーク（Role–Instructions–End Goalと「四点一線」の品質ルーブリック）です。[[equity-in-ai-education|公平性]]に配慮した利用は依然として探求が不足しています。ヨーロッパの女子だけの生成AIメイカースペースの構想は、コンピューティングへの参加における持続的な性別の不平等に対処するために、二つの生成AIの道具をフェミニスト教育学と組み合わせ、少女たちの生成AIによる生成画像と利害関係者の省察を分析しました。支援的で包摂的な応用は成長しつつある筋です。[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al.（2026）]] — パレスチナの21人の視覚障害のある学部生についての[[qualitative-research|質的な]]事例研究 — は、生成AIが個人の学習のプロファイルに合わせてペース、内容、そして伝達の仕方を調整し、複雑な学術的な文章を単純化し、内容を様態を越えて変換することを見出し、学習者はそれを教員を補完するものとして見なしていました。

- **初等の批判的なメディア・リテラシーにおける[[pedagogical-agent|教育学的エージェント]]としての生成AI。** DemirとAkar（2026）は、5Eの指導モデルを生成AIの道具で具体化しました。すなわち、内省的な問いと質疑応答のためのChatGPT、内容の精緻化のためのGrammarlyとCanva AI、そして[[peer-assessment|ピアフィードバック]]のためのPadletを、孤立した付け足しではなく段階ごとに埋め込むものです。四年生のトルコの学生を対象とした、トルコ語と社会科のカリキュラムに沿った18時間の批判的なメディア・リテラシーのプログラムにおいて、AIに支援された群は、メディアの読解（+3.50）、作文（+1.67）、そしてメディア・リテラシー全体（+5.17、すべてp < .01）で大きな伸びを示し、群間の効果量はCohenの*d* = 1.12（読解）、1.18（作文）、そして1.31（リテラシー全体）でした。一方、統制群はわずかにしか進みませんでした。質的な分析は、批判的なメディア・リテラシーの成長の六つの領域を明らかにしました — デジタルな自己防衛と[[privacy|データのプライバシー]]、目的的で責任あるメディアの利用、安全なコミュニケーションと境界についての自覚、[[critical-thinking|批判的な評価]]と誤情報についての自覚、オンラインの危険についての自覚、そしてメディアの[[ethics]]/デジタル・シチズンシップです。これは、生成AIが、短絡するのではなく批判的な評価を育てる、足場づけられた教育学的エージェントとしてカリキュラムに設計され得ることを示しています。

### 専門領域における生成AI：読字障害の支援

2026年の学際的なシステマティックレビュー（Dabaghi, D'Urso & Sciarrone、PRISMA準拠、2018〜2024年、n=72）は、**生成AIは読字障害の支援の領域で十分に活用されていない**ことを見出しています。生成AIの研究（すべて2024年のもの）は、知的な[[conversational-ai|チャットボット]]、[[teacher-education|教員養成]]の支援、そして探索的な研究に集まり、道具の選択として古典的な[[machine-learning|機械学習]]を急速に追い越しつつあります — しかし厳密な実験と実世界での検証は依然としてほぼ欠けています。このレビューの将来の傾向の分析は、生成AIの力で動く個別化された教材とリアルタイムの適応的なフィードバック、視線追跡、脳波、そして行動的な[[learning-analytics|分析]]を統合する[[multimodal|多様態的な]]診断モデル、NLPに駆動された[[intelligent-tutoring|知能チューター・システム]]と対話エージェント、そして教育者向けの支援道具を指し示しています。これは、専門的で必要の高い領域における内容生成と対話的な支援にとっての生成AIの可能性と、その採用が証拠基盤を追い越すというリスクの双方を示しています。

## よくある誤解

- **「効果量が大きければ、その道具は学習を改善する。」** この分野最大の推定値(69研究の[[meta-analysis-systematic-review|メタ分析]]がChatGPTと同種の道具について報告した*g* = 0.7)は、保持、転移、理解ではなく**即時の課題上の成功**をまとめています。同じ問題は53研究のまとめた推定値(達成度*g* = 0.40、高次の思考0.72、動機づけ0.81、作文0.76)にも当てはまります。これらは介入の近くで、介入に似た課題について測られた成果です。AIが教育を改善すると主張する14のメタ分析を監査した研究では、**自らの主張を正当化できたものは一つもありませんでした**。見出しの数字は、条件の下での成績についての証拠として扱い、何がいつ測られたのかを問うてください。
- **「新しいモデルなら解決する。」** モデルの世代は拘束条件ではありません。ChatGPT-5は客観的な薬学の試験問題では人間の教員と一致しました(CCC 0.935〜1.000)が、短答式(≈0)やエッセイ(0.341〜0.854)では一致せず、**構造化されたルーブリックもその隔たりを確実に閉じませんでした**。閉じた課題での能力の向上は、評価の大半が存在する開かれた仕事へと比例して移っていません。
- **「利用データが機能していることを示す。」** 394研究のマッピングでは、版が特定されないChatGPTが94研究に、3/3.5系が66研究に現れました。つまり公表された能力の主張の大きな部分が**すでに置き換えられたモデル世代**を記述しており、多くの研究は版をまったく報告していません。報告された振る舞いは特定のモデルと特定の日付に結びついており、「生成AI」についての日付のない主張は、一般的であるどころか反証不可能になります。
- **「専門家がコーパスに注釈を付けたから安全である。」** 4,815件の学生とAIのメッセージからなる複数の専門家による注釈済みコーパスでは、符号化の枠組みが検出するために作られた有害あるいは課題外の内容を含んでいたのは約0.68%だけでした。それは安全性ではなく基底率についての知見です。希少な事象は希少であり、システムの失敗の裾は、その規模のコーパスが性格づけるのに苦労するまさにその事例なのです。

## 実践への示唆

**教育者に向けて**

- 評価と道具を一緒に設計してください。AIが客観的な項目に強くエッセイに不安定であるところでは、エッセイを重く見る評価計画は、生成された下書きではなく明示的な検証を担わなければなりません。
- 自分の教室の証拠でも、報告するものでも、モデルと版を明記してください。日付のない主張は点検できず、版は教育法以上に結果を説明することがよくあります。
- 目新しさの地平が現実に短いものとして扱ってください。まとめた効果は介入の近くで測られており、縦断研究が記録する低下を、驚きではなく前提として計画してください。

**開発者に向けて**

- まとめた効果量に対してロードマップを引かないでください。14のメタ分析の監査では自らの主張を正当化できたものはなく、見出しの*g*に依拠する製品の主張は、点検に耐えない方法論に依拠しています。
- 基底率を最適化する前に計測してください。0.68%という発生率は、品質の仕事の大半が裾で起こることを意味し、裾の性能が配備の可否を決めます。
- 公表するあらゆるベンチマークの数値に、版、日付、課題の型を添えてください。それらを欠く能力の主張は再現できません。

## 関連概念

- [[llm]] — 生成AIを支えるモデルのクラス
- [[prompt-engineering]] — 産出がどう形づくられるか
- [[rag]] — 検索拡張による接地
- [[ai-literacy]] — それを効果的に使うために必要な能力
- [[ai-education]] — より広い分野
- [[intelligent-tutoring]] — 対話的で生成的なチューター・システム
- [[cognitive-offloading]] — 生成AIが増幅する過度の依存のリスク
- [[hallucination-risk]] — 生成された内容の中核的な信頼性のリスク
- [[academic-integrity]] — 流暢な生成から生じる誠実性についての懸念
- [[automated-assessment]] — 採点とフィードバックにおける生成的モデル
- [[ai-technologies]] — AIの技術とモデルの包括項目
- [[higher-ed]] — 主要な展開の文脈
- [[k-12]] — 主要な展開の文脈

## 関連記事
- [[genai-learning-motivation-meta-analysis-2026]] — 害から便益までにわたる予測区間を伴う、生成AIの学習の動機づけへの効果のメタ分析

- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[generative-ui-education-learning-interactives-2026]] — Harnessing Generative UI for Education: Tailored Learning Interactives
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of GenAI learning outcomes
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI in programming learning
- [[genai-performance-vs-learning]] — Performance vs. learning with GenAI
- [[hazra-safetutors-pedagogical-safety-2026]] — Harms of AI tutoring agents
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing a safe RAG LLM tutor
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[bicer-genai-pd-math-creativity-2026]] — 地方の8人の現職の教師を対象とした、生成AIが導く数学の専門能力開発の事例研究
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — まとめたg = 0.819がPET-PEESEの下で0.378に下がり、特注の道具(0.455)はチャットボット(0.970)を下回りました
