---
title: ヒューマン・イン・ザ・ループ
created: "2026-10-10T22:38:05-04:00"
updated: "2026-10-30T03:34:02-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
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

> **ヒューマン・イン・ザ・ループ** — 自動化された生成と人間の専門家の判断を戦略的に交互に組み込み、[[pedagogy|教授法的]]な質と安全を保ちながら生産を拡張する、教育の[[ai-technologies|AIシステム]]の設計パターンです。評価、フィードバック、教育を完全に自動化するのではなく、HITLは、人間(教員、分野の専門家、あるいは学習者)を、その判断がもっとも限界的な価値をもつ決定のループの中に保ちます。質を評価し、端の事例を裁定し、[[agency|学習者の主体性]]と安全を守るためです。中心的な設計上の問いは、人間を*含めるかどうか*ではなく、パイプラインの*どこに*、その監督がもっとも価値がありもっとも代替しにくいかです。

## 考えるための問い

- 中心的なHITLの設計上の問いは、人間を含めるかどうかではなく、その判断がもっとも価値あるパイプラインのどこにあるかです。AIの評価やフィードバックのシステムで、どの時点に人間が必ずループに残るよう主張されるでしょうか。
- AIによる[[automated-question-generation|問題生成]]の研究は、計算機は明快さと妥当性をうまく扱うが、意味のある誤答の選択肢と良いフィードバックには人間が今も必要であることを見いだしました。なぜ教育的な判断の一部は自動化に抵抗するのでしょうか。
- ある評価は、3つのLLMが一貫性がなく感度にも欠ける学生支援の推奨を行ったことを見いだし、AIが学生について助言する前に人間の判断が今も必要であると結論づけました。AIが苦労している学生への支援を「推奨」するとき、それを人間が見直さなければ何が起こりうるでしょうか。
- このページは、人間とアルゴリズムは異なる種類の問題を捉えると示唆します。正確に検証可能なものは自動化し、ニュアンスが代替しがたいところでは判断を保つのです。ご自身の実践の中で、この2つの間の境界はどこにあるでしょうか。
- 人間をループに保つことは、質だけでなく学習者の主体性と安全を守るものとして枠づけられています。完全な自動化は、学習の責任が誰にあるかについての学生の感覚を、どのように気づかれないうちに変えてしまうでしょうか。
- AIがより自律的になるにつれて、HITLの監督は中核的な安全の防壁として語られます。どの水準のAIの自律性にあなたは不快を感じるでしょうか。そしてその不快感は、監督がどこに属するべきかについて何を教えてくれるでしょうか。

## はじめに

HITLは、完全に自律的な[[ai-education|教育におけるAI]]の限界とリスクへの対応です。自動化されたシステムは規模をもって生成できますが、教員と専門家がもたらす文脈的な、[[ethics|倫理的な、そして教授法的]]な判断を欠いています。2つの最近の実装が、異なる構造を例示します。
- **人間が承認するだけでは、ヒューマン・イン・ザ・ループは不十分です。** [[learning-analytics-genai-learning-design|Rienties、Divjak、Law（2026）]]は、意味のある主体性には、AIが支える勧告を理解し、異議を唱え、再設計し、時には拒否する能力が必要であり、他所で形づくられた決定を承認するだけでは足りないと論じます。

指示的な支援は、人間の監督が次第に欠かせないと論じられる領域です。[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernasら(2026)]]は、3つのLLMが[[learning-analytics|学習分析]]の指標から学生支援の計画を推奨できるかどうかを検証し、必要に対する感度が限られ、モデル間の不一致が鋭いことを見いだし、[[llm|LLM]]による指示的な助言が安全かつ倫理的に展開される前に、ヒューマン・イン・ザ・ループの判断がなお必要であると結論づけました。

システムの好む答えを伏せることは、矯正ではなく保護的に働きます。推奨される立場を決して明らかにしないマルチエージェントの討論では、誤ったAIの答えへの有害な切り替えが42.0〜60.5%から5.7〜8.2%へと下がった一方、正しい助言の採用も下がりました（[[tuo-armada-multi-agent-debate-overreliance-2026|Tuoら（2026）]]）。

第3の構造は、人間の判断をモデルの出力ではなく*上流*に置きます。[[lee-learner-question-types-ai-education-2026|Lee, Atif, Kang (2026)]]の学習者の問いの分類の研究では、博士課程水準の3人の専門家がパイプライン全体を統治しました。彼らは各[[constructivist|構成主義的な役割の操作的な定義]]を精緻化、不一致の解消後にFleiss' kappaが0.60から0.83へと上がるまで独立にラベリングを行い、訓練セットを均衡させるために用いられた逆翻訳および言い換えられた項目を検証しました。

## CODE-GEN:ヒューマン・イン・ザ・ループの多肢選択問題生成

Duanら(2026)は、[[rag]]ベースの[[agentic-ai|エージェント型]]システムを構築しました。
- **生成エージェント** — 授業の学習目標に沿った多肢選択のコーディング問題を生成します
- **検証エージェント** — 7つの教授法的な次元にわたって質を評価します

**評価:** 6人のSMEが288問のAI生成問題を判定しました。人間が検証した成功率:次元にわたって**79.9%〜98.6%**。

**AIが強い次元(人間の負担が低い):**
- 問題の明快さ、コードの妥当性、概念との整合、正答の妥当性

**人間が必要な次元(人間の負担が高い):**
- 教授法的に意味のある誤答の選択肢の設計
- 質の高い説明を含む[[feedback|フィードバック]]

戦略的な洞察:人間の労力は、教育的な判断が代替しがたいところに集中させるべきです。計算による検証は完全に自動化できます。

## MAIC:ヒューマン・イン・ザ・ループの台本生成

Yuら(2024)は、清華大学に、500人を超える学生と100,000件を超える学習記録をもつマルチエージェントの教室([[teacher-role|教師]]エージェント、TAエージェント、クラスメイトの典型)を展開しました。人間の教員が台本の生成と監督に参加し、大規模なAIによる増強が教授法的な専門性を追いやらないことを確実にします。

## PedaCo:AI動画生成のための二重の把关

Kim, Baek, Kwak (2026)は、HITLを**PedaCo**(Pedagogical Co-creation)を通じて[[video-education|AIが生成した教育動画]]にまで拡張します。Mayerのマルチメディア学習の認知理論(CTML)に根ざした*原則ある抵抗*を具体化する、2つの相補的な把关の層からなるパイプラインです。**第1の層**は人間を台本の段階に置きます。LLMが台本を下書きし、AIのレビュアーが起こりうるCTML違反を旗印し(たとえば「場面3が、事前の説明なしに専門用語を導入しています」)、教育者はそれを受け入れる、改訂する、再生成するかを決めます。**第2の層**は、合成後の一貫性、冗長性、時間的な近接性、モダリティ、画質について自動化された指標を実行し、教育者がそれを見直します。被験者内研究(23人の教育者)では、レビューに基づく手法はCTMLのすべての原理を改善し(平均評価3.07→3.86, p<.01)、教育者は生産の効率を4.26/5と評価しました。摩擦は負担ではなく生産的として知覚されたのです。この設計原理は、ナレッジベースのHITLの総合を反響させます。人間とアルゴリズムは*異なる*種類の問題を捉えるため、もっとも効果的なシステムは、計算による検証が正確なところ(時間的な同期)では自動化し、教授法的なニュアンスが代替しがたいところ(口調、受け手との適合)では人間の判断を保つのです。

配置は存在よりも重要になりうます。あるSocial Storyの執筆ツールは高いユーザビリティとして評価されました(SUS 86.8)が、レビューが遅すぎたと報告されました。生成の前に定められた文化的・臨床的な制約(西洋の街着ではなくアバヤなど)は、出力を後から編集して取り戻すのがより難しいからです([[adapted-stories-social-story-intervention-2026|Enkhjargalら(2026)]])。

## AI時代にHITLが重要である理由

ヒューマン・イン・ザ・ループの設計は、いくつかの収束する理由から、ナレッジベースの[[agentic-ai|エージェント型AI]]と[[ai-literacy|責任あるAI利用]]の議論の中心となりました。
- **教授法上の安全性。** [[pedagogical-safety]]は、現実の教育上の権威をもつAIが人間の監督を保つことを求めます。誤り、バイアス、有害な出力が学習者に届く前に捉えられるようにです。これは[[agentic-ai|目標を率先して追い求める]]自律的なエージェントにとってとくに重要です。
- **監督は実践の中で稀であり、理論の中だけではない。** [[agentic-ai-education-scoping-review|Wangら(2026)]]は、474件の教育のエージェント型AIシステムにわたって、堅固に埋め込まれたガバナンスとヒューマン・イン・ザ・ループの監督がめったに見られなかったことを見いだしました。単一課題の自律性とマルチエージェントの協働が成長する中でもです。設計原理と展開された実践の間の隔たりです。
- **決定的な問いは、ループがどう実行可能にされるかであって、人間がどれだけ参加するかではない。** 学習科学の見解は、学習をデータの捕捉、計算による解釈、起こりうる反応を中心に組織することは、教授学的な行為を、システムが検出し行動できるものに依存させるようになると論じます。そして、警告や関与の分類は、教師や学生が行為する前に学習者を解釈してしまうのです([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]])。
- **妥当性と質の管理。** HITLは[[automated-assessment|自動化された評価]]と生成の質の関門です。自動化された採点が信頼できないところで人間が裁定し([[llms-do-not-grade-essays-like-humans-2026|LLMによる論文の採点]]の[[research-methods-aied|研究]]を参照)、生成された項目を検証します。42件の採点とフィードバックの研究(2023–2025)のPRISMA準拠の[[meta-analysis-systematic-review|系統的レビュー]]は、同じ結論を明示的に導きます。LLMは短く構造化された課題では人間の評価者と一致しますが、複雑で開かれた、あるいは主観的な仕事については人間の判断を完全には代替できず、AI駆動の採点を教員の監督と検証と組み合わせるハイブリッドなシステムでもっとも高い採点の有効性が達成されます([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]])。[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahatら(2026)]]は、その境界がどこに落ちるかを具体的に示します。ChatGPT-5は薬学試験の客観的な項目で教員と一致しました(CCC 0.935–1.000)が、ルーブリックが与えられても短答式と論述式の項目では信頼できず、著者らは複雑で主観的な、あるいは高い利害を持つ評価には人間の見直しを伴うハイブリッドな採点を推奨しています。
- 反復はその監督の代替にはなりません。同一の提出物を5つの異なる日に再採点したところ、同じモデルはKrippendorff's alpha 0.625という自らの結果の再現しか示さず、ばらつきは中間の成績に集中し、AとFは5回の採点の集計に現れませんでした([[llm-grading-assistants-public-health-2026|Brevikら(2026)]])。
- **学習者の主体性。** 人間をループに保つことは[[agency|主体性]]を保ち[[self-regulated-learning|自己調整学習]]を支え、完全に自律的な支援が引き起こしうる[[cognitive-offloading|過度の依拠]]に対抗します。

- **学生自身が高い利害の端に人間を置く。** 93人の学部生のうち、81.7%が成績の40%を占める期末論文の人間による採点を好み、93人中75人はAIに採点者の代わりではなく支援をしてほしいと望み、69人はAIによる採点は常に人間に見直されてほしいと望みました([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasliら(2026)]])。
- **信頼と較正。** 透明な人間の監督は[[trust-calibration|信頼の較正]]を支えます。学習者と教員は、資格をもつ人間がシステムの背後に立っていることを知るのです。
- **見直しの前に基準を見えるようにすると一致が高まる。** [[calibrating-trustworthiness-llm-education-2026|Cosciaら(2026)]]は、LLMの応答を比較するレビュアーに信頼性の指標を見せることで、評価者間の一致がKrippendorff's alpha 0.3987から0.4931へと上がったことを見いだし、さらなる指標を加えても見返りなく認知的負荷が増すだけでした。
- **限界づけられた主体性は、断り書きではなく構造として。** [[ilieva-agentic-genai-higher-education-2026|Ilievaらの(2026)]]の[[agentic-ai|エージェント型]]学習支援のためのAGAI-HEフレームワークは、教授法的ワークフローとエージェント的支援の層に並ぶ第3の層として、監督をモデルそのものに組み込みます。許容されるAIの利用、教授法的な境界、[[privacy|プライバシー]]の規則、[[ai-use-disclosure|開示の要件]]、出典の検証、教員のチェックポイント、[[academic-integrity|誠実性]]の仕組み、そして最終的な人間の説明責任を定義し、すべてのエージェント的な機能が学習の要件、評価の目的、あるいはガバナンスの統制にたどり着くことを求めます。これは、HITLが方針の言明ではなくシステム設計の性質であるという原理の具体的な具現です。そして著者らの130人の学生を対象とした認識の研究は、その監督のもとでエージェント的なオーケストレーションを加えることが、それ自体ではチャットボットよりも良い学習支援として受け取られなかったことを思い出させます。
- **人間がどれだけ見るか自体が設計上の決定である。** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]]は、監督の配置からその*頻度*を切り離します。高頻度のHITL、すなわちAIの出力が学生に届く前にすべてを見直すことは、質の管理、迅速な誤りの検出、説明責任、継続的な較正を買いますが、自動化の動機となった効率を打ち消し、採点の繁忙期に瓶颈になることがあります。低頻度のHITL、すなわち標本を抜き打ちで確認し印の付いた事例だけを見直すことは、規模に対応し回転を短くしますが、誤りが提出物の間で検出されずに広がるリスクを負い、説明責任を弱め、ある学生が他の学生よりも徹底した人間の見直しを受ける場合に[[equity-in-ai-education|公平性]]の問題を作り出します。普遍的な答えを定める代わりに、この枠組みは、そのトレードオフを分野の誤りの許容度、評価が[[formative-assessment|形成的]]か[[summative-assessment|総括的]]か、集団の規模と機関の資源に対して明示的に行うことを求めます。そして通常の効率の主張とは逆の方向に既定値を定めます。高頻度の監督から始め、実質的な証拠が許容可能な信頼性、安全性、公平性を示したときにのみそれを縮小します。つまり証明の負担は、*より少ない*監督が安全であることを示すことに置かれるのです。この論文はまた、そうした監督の背後にある原理がスタッフの労力を減らすのではなく移し替えるかもしれないと警告し、純の効率の利得を未解決の実証的な問いとして残しています。
- 展開された人間の監督は、質の判断ではなく承認の割り当てを意味しうます。ハイブリッドな問い合わせシステムで、受け入れの欄は解決者が問うた人と異なったかどうかだけを符号化しており、答えの質を評価する測定はありませんでした([[student-query-demand-hybrid-ai-support-2026|Guptaら(2026)]])。

## HITLがナレッジベースの研究にどう現れるか
- **自動化された評価と採点:** HITLシステムは、AIによる生成・採点と人間による検証を、短答の採点([[cong-confidence-asag-2026]])、自己説明の評価([[llm-automated-assessment-student-self-explanations]])、[[automated-essay-scoring|論文の採点]]([[psyscore-essay-scoring-zpd-feedback]])にわたって組み合わせます。[[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]は、これを高い利害を持つ手書きの一般[[chemistry-education|化学]]の採点に具体化します。[[multimodal|マルチモーダル]]LLMの信頼性が応答の形式によって異なるため(テキストと化学反応の答えは信頼できるが、作図とグラフの得点は無作為より悪く)、誤った陽性は学生によって検出されません。そこで彼らは生のAIの得点を、確信度フィルターを用いた選択的な受け入れ・延期の方針に変換します。部分点の閾値、[[item-response-theory|IRT]]ベースのリスク閾値、問題種別の除外です。不確実な項目と図形的な項目を人間に延期し、著者らはこの手法を、教育の[[assessment|評価]]におけるAIを高リスクとして指定し記録された人間の監督を義務づける[[regulation|規制上の]]枠組みに結びつけます。
- **フィードバックシステム:** 記録された人間の監督を義務づけます。
- **国家評価における運用的なHITL採点(2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curiら(2026)]]は、HITLをウルグアイのAcredita EB試験において制度的な規模で具体化します。LLM採点者の誤りが体系的に保守的(過小採点)であるため、ワークフローは、合否の結果がWritingセクションに依存するまさにその候補者に人間の見直しを割り当てる決定点の論理を用います。AIが合格とした応答は確信をもって受け入れられ、一方でAIが不合格とした応答(事例の15.3〜16.5%)は専門家の評価者によって検証され、完全な採点の作業量を50%以上削減し、残るAI誤りによる不合格のリスクはわずか0.2〜0.6%です。これは、人間がAIの保守的な偏りが高い利害のある結果を変えてしまうまさにその場所で裁定する、資源配分の戦略としてのHITLです。

- **ルーブリック自身の解像度から延期の閾値を導く(2026)。** [[ai-assisted-instructor-supervised-grading-feedback|Cruzら(2026)]]は、AIと教員の許容差を0.5ポイント、すなわち提出物をアンカーの帯を越えて動かすことのできない最大の不一致に定め、0.8ポイントで外れ値をエスカレーションし、362件の提出物のうち11件(3.0%)をフィードバックが公開される前に人間の見直しに送りました。

- **評価者間の一致は人間の正解ではない。** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernadoら(2026)]]は、モデルによる注釈づけを、人間の正解ラベルに対して検証することなく監査の層に押し込み、モデル間の一致(中央値0.401)を、共有されたモデルの誤りが生き延びられる主張の質の代理に留めます。彼らの設計は監督を飾りではなく診断的なものに保ちます。中間的な判断が明示的であるため、レビュアーはどの行動が発火したかを見て、読み違えられた行動と、構成概念をまずく符号化した規則とを切り分けられるからです。
- **フィードバックシステム:** ヒューマン・イン・ザ・ループのフィードバック設計は、[[becerra-aicofe-feedback-2026|協働的なフィードバックシステム]]と[[cong-confidence-asag-2026|確信度を意識した短答の採点]]に現れます。
- **教室の協働の支援。** [[breideband-community-builder-cobi-2026|CoBi]]は、高め合う小集団の言説を検出するAIシステムにおいて、教員を見直す人間として保ちます。教員は、「その場に立たされる」ことになるライブのリアルタイム表示よりも、行動の前後のレビューを明示的に好みました。そしてシステムの教室レベル(個人レベルではない)の集計されたフィードバックこそが、[[privacy|プライバシー]]、監視、学生の[[agency|主体性]]の間の緊張を渡ることを可能にするのです。
- **問題と内容の生成:** CODE-GENを超えて、HITLは評価と[[scaffolding|足場かけ]]の問題生成を導きます([[code-gen]]、[[llm-difficulty-calibration-programming-exams-2026]])。
- **エージェント型とマルチエージェントのシステム:** AIがより自律的になるにつれて、HITLの監督は中核的な[[agentic-ai|設計上の防壁]]です([[agentic-ai-pedagogical-best-practice-2026]]、[[guided-llm-scaffolding-independent-learning]])。
- **モデルの不確実性ではなく決定の帰結による割り当て(2026)。** [[human-in-the-loop-ai-scoring-national-assessment-2026|2026年の運用的な研究]](ウルグアイのAcredita EBの国家認証試験。2つの回、それぞれおよそ5,000〜6,000人の候補者)は、モデルの不確実性ではなく決定の帰結によって動かされるとき、ヒューマン・イン・ザ・ループの設計がどう見えるかを示します。GPT-5の採点者は15のルーブリック項目の60〜80%で専門家の評価者と一致しましたが、体系的に保守的で、合否の比較で人間合格・AI不合格の不一致を15.3%(2024)と16.5%(2025)に生み出し、その逆はほとんどありませんでした。そこでこの枠組みはAI合格の結果を額面どおりに受け入れ、候補者の結果を変えうるすべてのAI不合格の結果を専門家の見直しに回します。まず、合否がWritingセクションに依存しえない候補者を飛ばした上で、完全な人間の採点を必要とする応答を少なくとも50%削減します。2つ目の2026年の設計は、反対の側から境界を引きます。マルチエージェントのAI標準化患者プラットフォーム([[ai-standardized-patient-scaffolding-medical-2026|Yangら]])では、人間の監督は、AIが決めるのに適さないと判断されたものに取っておかれ、教員と人間の標準化患者が文脈的な解釈、補習、準備の判断を供給し、システムは[[medical-education|臨床的な力量]]を自律的に決定することが明示的に許されません。
- **研究の計装：人間は点数ではなくラベルを検証する。** 学習科学と計算機科学の符号化者は、同期したタイムライン上で LLM が生成した行動セグメントを κ = 0.703 で判定し、彼らの不一致は研究自身の誤り分析となりました（[[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles ら, 2026]]）。
- **モデルが要約し、研究者がラベルを付ける。** 協働的なモデリングの研究は、394件の談話セグメントのそれぞれについて課題文脈を意識した要約を GPT-3.5-Turbo に書かせ、すべての要約を研究者が検証して κ ≥ 0.7 で符号化し、そのラベルで検出器を訓練したため、モデル自身が判断を下すことはありませんでした。監督はその後、外側へ移りました。4人の経験豊富な教員がラベル付けされたセグメントを検討し、3人がその行動を認識し、1人が、1つのセグメントに2つのラベルを付けると学生が何をしていたかが覆い隠されると主張しました。これは著者らが解決せず記録したユーザビリティ上の異議です（[[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang ら, 2026]]）。
- **一つのワークフローではなく、学問全体のためのアーキテクチャとしての HITL。** [[zhai-science-literacy-generative-ai-coherence-2026|Zhai ら（2026）]]は、データ基盤、モデル開発、教授学的なインターフェース、人間のガバナンスという4つの連動する層を、人間の監督と主体性、共適応的な知性、文脈への応答性という3つの原則で結び合わせて指定しています。

## 総合

ヒューマン・イン・ザ・ループの設計は、単なる安全策ではなく、**資源配分の戦略**です。最先端の問いは、人間を含めるか*どうか*ではなく、パイプラインのどこでその判断がもっとも高い限界的価値をもつかです。もっとも効果的なHITLシステムは、希少な人間の専門性を、自動化されたシステムが最も弱いところ(誤答の選択肢の設計、説明を含むフィードバック、端の事例の裁定、倫理的な判断)に集中させ、残りを自動化します。質、安全、信頼を保ちながら生産を拡張するのです。
- **AI支援された仕事に人間の監督は残る。** [[scaffolding-systematic-reviews-2026|系統的レビューの研究]]は、AIの自動化の道具が手続き的な負担(たとえばスクリーニング)を減らしたが、解釈的な決定には今も実質的な人間の監督が必要だったことを見いだしました。[[kim-ai-andragogy-2026|アンドラゴジーの研究]]は、ヒューマン・イン・ザ・ループ(共有されたメンタルモデル、共創)を中核的なAIの設計原理とします。
- **制度的な規模でのヒューマン・イン・ザ・ループ。** Qin (2026)は、嶺南大学が、倫理的な推論、批判的な判断、社会的な責任を前面に出しながら[[generative-ai|GenAI]]へのアクセスを広げるヒューマン・イン・ザ・ループの教育モデルをどう発展させたかを記述します。このモデルは、AIが[[curriculum-design|カリキュラム]]全体に埋め込まれる中でも、人間を判断と価値の所在として位置づけます。[[higher-ed|高等教育]]におけるヒューマン・イン・ザ・ループの原理の具体的な[[governance|制度的な]]具現です。
- **自分の個別指導のヒューマン・イン・ザ・ループとしての学習者。** [[ko-hughes-vsd-student-centered-its-2026|価値感応設計]]をコミュニティカレッジの学生と行ったことで、ITSのための学習者向けのHITL機能の完全な一族が生まれました(再評価と復習の統制、個別化された目標・進度、復習のためのブックマーク、習得についての確信の確認、AI支援の関与水準の統制)。これは、適応的な決定の受動的な消費者ではなく、個別指導のループの能動的な統治者として学生を位置づけます。この研究はまた、そうした学習者の統制がシステムに導かれた学習経路の誠実性を損ないうるかについて教員の意見が分かれたことを見いだしました。これは、人間(学習者対教員)の判断がどこでもっとも価値を加えるかという、より広い資源配分の問いの一事例です。
- **AIから専門家へのエスカレーションは、ヒューマン・イン・ザ・ループの一手である。** SCANフレームワークは、生成AIの4つの様態に、学習者の距離に応じて課題を割り当て、正しく割り当てられたAIの課題の中での受動的な[[student-engagement|関与]]を、学習者をAIから専門家の支援へと移す技能喪失のシグナルとして読みます。人間が認識論的な監査者としてです([[ai-teammate-task-distribution-medical-training-2026|Tsimら(2026)]])。
- **AI導入の助言の監督。** 懐疑的な利用者に相談される[[conversational-ai|対話型AI]]システムは、導入を促すように偏っている可能性があるため、人間の監督と独立した評価が不可欠です。最前線のモデルの大半が、懐疑的な地方の[[k-12]]のスタッフを[[student-engagement|関与]]へと向け直すことを示す監査は、無批判的な依拠ではなく、透明で監査可能なAIの助言の必要性を際立たせます。

## よくある誤解

- **「システムの推薦を見せることが、人間の監督を助ける。」** **システムの好む答えを差し控えることは、修正的であるよりも保護的です**。**推薦された立場を決して明かさなかった**マルチエージェント討論では、AIの答えへの有害な切り替えが**減りました**。開示は従属を招き、差し控えは判断を支えたのです。
- **「ヒューマン・イン・ザ・ループとは、一人の人間が一つの決定を担うことである。」** [[teacher-role|教師]]エージェント、TAエージェント、同級生の類型からなるマルチエージェントの教室は、**500人を超える学生と10万件を超える学習記録**を伴って清華大学で展開されました。監督は監督者を増やすことではなく、配置によって拡張されます。
- **「AIの出力を検討することは直感的である。」** **23人の教育者を対象とした被験者内研究**では、検討に基づくアプローチが**すべての CTML 原則を改善し（平均評定3.07から3.86、p < .01）**、教育者は生産の効率性も好意的に評定しました。検討は、構造化された方法のもとで改善される技能なのです。

## 関連する概念
- [[pedagogical-patterns]] — 人間の見直しが検証済みの連鎖のどこに座るか、そして何が一度も孤立して検証されなかったか
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — 自動化された支援の流れの中の人間の判断

## 関連する記事
- [[zhai-science-literacy-generative-ai-coherence-2026]] — 科学教育における生成的AIのための4層の HITL アーキテクチャ（Zhai ら 2026）
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — 研究の計装として LLM の行動セグメントを検証する符号化者（Fonteles ら 2026）
- [[lee-learner-question-types-ai-education-2026]] — 専門家がラベリングした問いの分類:人間がラベリング、拡張、誤りの分析を統治する(Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — エージェント型GAIの課程設計の第3の層としての人間の監督とガバナンス(Ilievaら 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — 学生中心のITSの価値感応設計(学習者を個別指導のループの中に)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 大規模な国家の作文評価におけるHITLのAI支援採点(Curiら 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCANフレームワーク:医療訓練におけるAIの課題配分の再考(Tsimら 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans(Mathewら 2026)
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy(Kimら 2026)
- [[scaffolding-systematic-reviews-2026]] — Scaffolding Systematic Reviews with Mentoring and AI(Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI支援の教員監督下の採点とフィードバック
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles?A large-scale evaluation
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[tripartite-feedback-framework-ai-assessment-2026]] — 三部構成の枠組み:認識論的な地位によってフィードバックを仕分け、AIの関与のための5つの境界の原理(Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education:The Design of AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors:教育の対話の監査可能な符号化のための主張に基づくスキーマ
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — 感情分類から実行可能で責任あるフィードバックへ:教育における学生評価のNLPのスコーピングレビューと証拠マップ、2015–2026

- [[llm-grading-assistants-public-health-2026]] — 同一のLLM採点を異なる日に再実行しても、Krippendorff's alpha 0.625の再現しかない
- [[when-students-prefer-ai-scoring-feedback-2026]] — 学部生は高い利害のある仕事の人間による採点と、代替ではなく助手としてのAIを好む
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask:Demand Structure and Automation Potential in a Hybrid Support System
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Rethinking "In-The-Loop" Approaches in Educational AI: A Learning Sciences Perspective
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — システムの好む答えを伏せることが、誤ったAIの助言への委譲を矯正ではなく保護的に減らした
