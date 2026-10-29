---
title: AIガバナンス
created: "2026-10-10T22:38:13-04:00"
updated: "2026-10-10T22:38:13-04:00"
type: concept
foundations: [ai-education]
ethics: [ethics, privacy]
connected_faqs: [ai-guidance-children-under-13, institutional-ai-policy]
level: [higher ed]
confidence: high
institutions: [change-management, educational-policy-ai, regulation]
connected_resources: [institutional-ai-readiness-pack, campus-ai-framework, campus-ai-development]
translation_of: concepts/governance
source_updated: "2026-10-10T14:22:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **AIガバナンス**とは、[[ai-education|教育における人工知能]]の責任ある設計・展開・利用を導く、枠組み・方針・組織構造・規範のことです。ガバナンスは、公式の制度的メカニズム(AI運営グループ、学術的誠実性と許容される利用に関する方針、倫理審査)と、非公式の規範(教員向けガイドライン、専門能力開発、[[reducing-ai-misuse|責任あるAI利用]]の文化)の両方に及びます。AI時代において、効果的なガバナンスは、生成AIの倫理的・[[equity-in-ai-education|公平]]で持続可能な導入の前提条件です。ガバナンスは、AIが透明性と説明責任をもって統合されるのか、それとも不公正を深める形で事後的に導入されるのかを左右します。

## 考えるための問い

- 大学に紙の上だけのAI方針があり、それを施行・更新・周知する明確なプロセスが存在しないとしたら、それは本当にガバナンスと言えるでしょうか。存在する規則と、実際に統治されている規則を分かつものは何でしょうか。
- ある調査で、学生たちは自分の大学には明確なAI方針がなく、それがAIの使い方に影響したと述べました。方針の曖昧さは、学生が「許容される利用」と見なすものにどう影響しうるでしょうか。そして、その交渉を個人に委ねることを、大学は懸念すべきでしょうか。
- このページは、検出型ガバナンス(AI利用の取り締まり)と設計型ガバナンス(AI利用が想定され表明されるよう評価を再設計すること)を区別しています。あなた自身の評価実践はどちらに傾いており、それぞれの得失は何でしょうか。
- ガバナンスは、国家・機関・授業の各レベルで機能すると説明されています。あなたの文脈にあるAIの規則を一つ挙げて、それを誰が定め、どう周知・施行され、それらのレベルがどの程度整合しているかを考えてみてください。
- ある枠組みは、AIガバナンスを共有された専門性を維持する集合行為の問題、すなわち「認知的コモンズ」として捉え直しています。専門職の集合的知識の貯蔵を守るという観点は、単にツールを規制するのではなくガバナンスについてどう考えるかをどう変えるでしょうか。
- このページは、強制的なAI利用の表明が、懲罰的に感じられたり曖昧であったりすると失敗すると警告しています。人々が理解せず信頼していなかったために、コンプライアンス規則が裏目に出た例をあなたは見たことがありますか。その経験はガバナンスについて何を教えてくれましたか。

## はじめに

教育におけるAIガバナンスは、[[generative-ai|生成AI]]が知識生産、[[agency|学習者のエージェンシー]]、[[assessment|評価]]の妥当性、[[teacher-role|教育者の役割]]を認識論的権威として揺るがすという新たな認識論的・倫理的・組織的課題をもたらすため、ますます緊急性を増しています。ガバナンスが扱うのは、[[academic-integrity|学術的誠実性]](何が許容されるAI利用かを定める)、[[privacy|データのプライバシー]]とセキュリティ、[[bias-mitigation|アルゴリズム的バイアス]]と公平性、[[explainable-ai|透明性]]と説明責任、そしてAI導入の制度的使命・価値との整合といった問いです。ナレッジベース全体の[[research-methods-aied|研究]]に通じる繰り返し見られる知見は、**制度的ガバナンスはしばしば立ち後れている**ということです。多くの機関に明確で統一されたAI方針がなく、学生と教員が許容される利用を自分たちで折衝せざるを得ないままにされています。

- **プラットフォーム化の構造的条件としてのゼロショット・ガバナンス。** [[perrotta-zero-shot-governance-2026|Perrotta(2026)]]は、政策決定に介入する領域非依存の[[generative-ai|生成AI]]という**ゼロショット・ガバナンス**の概念を、既存の[[llm|LLM]]上に構築された英国公務員向け試作(廃止済み)**Redbox**のコードレベルの分析を通じて展開しています。そのアーキテクチャ(不可視のシステムプロンプトと、[[rag]]の検索→整形→生成パイプライン上の薄いPythonラッパー、プロバイダ非依存のクラウドスタック)を読み解く中で、基盤モデルの汎用性はプラットフォーム化の*構造的特徴*であり、緩和はできても排除はできないと論じています。[[agentic-ai|エージェント型AI]]はプラットフォームの独占的・地代的論理を中断させず、新規性を生み出すのと同じ確率的メカニズムが[[hallucination-risk|ハルシネーション]]も生み出します。ガバナンスにとっての含意は、汎用AIの監視では異常な出力を修正可能なバグではなく、軽減のみが可能な不可還元のリスクとして扱わねばならないということです。この注意は[[educational-policy-ai|教育政策]]の推論にも等しく当てはまります。

- **[[baroudi-anticipatory-governance-ai-higher-ed-2026|Baroudi]]**の[[meta-analysis-systematic-review|スコーピング・レビュー]]は、高等教育におけるAIガバナンスを予見的ガバナンスとリーダーシップの視点から枠づけています。

- **政策の学生共同設計。** [[guided-inquiry-genai-course-policy-2026|Hingle & Johri]]は、学生が生成AIのコース方針を共同設計したガイド付き探究活動が、研修の重視、標準化された[[ai-use-disclosure|表明]]手順、より強力な制度的支援、意思決定への関与の拡大といった学生の価値観を顕在化させたことを示しています。これはガバナンスにおける[[pedagogical-partnerships|学生をパートナー]]として位置づけるもので、制度レベルの方針を下からの学生の声で補います。

- **テクノ・ソリューション主義の罠と政策の欠如。** AI×[[social-emotional-learning|社会情動学習]]の65研究に及ぶ系統的レビュー([[policy-deficit-ai-sel-2026|Tran, Liu & Nguyen 2026]])は、研究が技術的可能性を前景化させ、責任ある実施の制度的条件を過少に特定しがちである、いわゆる「テクノ・ソリューション主義」の罠を明らかにしています。著者らは政策への[[student-engagement|関与]]を発表媒体と結びつけ、ガバナンスの含意を行為者別に明示する「WH問い」枠組みを提案しています。これは、制度的ガバナンスがAI導入に立ち後れているというナレッジベースのより広い知見を反映しています。

## ガバナンスは研究にどう現れるか

- **大規模な制度的導入。** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|オープン大学のAIDA研究]]は、ある機関が生成AIアシスタントを設計・導入・評価した過程を示し、責任あるシステムレベルの展開には、技術能力だけでなくガバナンス構造(AI運営グループ)、上級リーダーシップの後援、制度的戦略との整合が必要であることを明らかにしています。

- **リーダーシップとシステム変革。** [[leveraging-complex-systems-leading-for-transformative-change|SPARK]]は、ガバナンスを複雑性リーダーシップ理論の中に位置づけ、リーダーが行政の安定と創発的革新の均衡を取る必要があり、適応的空間での革新が持続・拡大できるようガバナンスのメカニズム(方針、評価体制、説明責任の枠組み)を埋め込むべきだと論じています。

- **方針の曖昧さと学生の経験。** [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|生成AIへの学生のエンゲージメント]]は、23人中12人の学生が明示的な制度的AI方針の欠如に言及し(「大学にはまだ明確で統一された方針がない」)、ガバナンスの曖昧さが学生の実践・規範・[[self-regulated-learning|自己調整]]を形づくると論じ、透明な制度的ガイダンスへの転換を支持しています。

- **ガバナンス能力としてのAIリテラシー(「第18のSDG」)。** [[ai-literacy-sdg-governance-framework-2026|Islam, Morshed, Islam(2026)]]は、AIリテラシーを授業のスキルではなく体系的ガバナンスのメカニズムとして捉え直し、倫理的総合と戦略的予見を加えてブルームの階層を拡張する6段階のAIRE分類(認識→理解→適用→分析→統合→統治)と、リテラシー能力を[[sustainability|持続可能な開発目標]]全17目標に対応づけるAI–SDG連関マッピングを提案しています。「第18のSDG」という発想の枠組み——学習をガバナンスと持続可能な開発へ導く横断的能力——のもとで、300人の専門家を対象とした調査では、ガバナンス・リテラシーがAI–SDG連関の認識の最強の予測因子であり(β = 0.64、連関認識との r = 0.67)、倫理的推論と内省的思考が信頼できるAI利用の最強の予測因子であると特定されています。これは制度的ガバナンスを公衆の[[ai-literacy|AIリテラシー]]の涵養に結びつけ、責任あるAIの整合には、単なるコンプライアンス指向の技術的統制ではなく、アルゴリズム的システムを批判的に解釈できる[[stakeholders|政策担当者]]と市民が必要だというナレッジベースの知見を裏づけています。

- **学術的誠実性と評価。** ガバナンスは、機関がAIに関連する[[academic-integrity|学術的誠実性]]の問題を扱い[[assessment|評価]]を再設計する方法の中核です。すなわち、禁止・取り締まりから、ガイダンス・AIリテラシー・過程重視の設計へと移行することであり、[[student-rationalization-ai-writing|学生の合理化]]や[[beyond-detection-authentic-assessment-ai-2025|真正な評価の再設計]]の研究に見られます。

- **評価の再設計は3つの次元で同時に動く。** [[assessment-redesign-critical-practice-2026|Laidlaw(2026)]]は、AI時代の評価再設計を、文化的・言説的(言語と前提)、物質的・経済的(資源)、社会的・政治的(ガバナンスと権力)の各次元から枠づけ、資源と権力の交点を最大の梃子であり最大のリスクでもあると名指しています。既存の権力構造を通じて流れる資源は、不公正を増幅させるからです。

- **文書化されたガバナンスの手段構成。** [[institutional-ai-policy-health-informatics-2026|Eldredge et al.(2026)]]は、米国のCAHIIM認証を受けた健康情報学・健康情報管理の修士課程すべて48課程のAI関連文書を監査しました。48課程中40(83%)が少なくとも1件の公開文書を有し、分析した40文書においてガバナンスは拘束力ある規則よりもガイダンスとして実現されていました。すなわち、ガイドライン21件(53%)、情報提供文書9件(23%)、正式な方針7件(18%)のみでした。ほとんどの文書は教員と学生を併せて扱い(20件、51%)、学生のみを対象とするもの(6件、15%)より多く、方針の種類も対象者も提供形態によって変わらず(Fisherの正確確率 P = .85 と P = .71)、手段構成はオンライン・対面・ハイブリッドの要求ではなく制度的習慣を反映していることが示唆されました。内容は学術的誠実性、責任あるAI利用、学生の行動規範に集中し、応用学習・研究・シミュレーション環境におけるAI利用を扱う指針はほとんどなく、まさにそこでカリキュラムとデータのガバナンス上の関心事が交差しています。著者らはまた、コーパスの大部分を地域認証機関が供給していた(Higher Learning Commission n = 14、SACSCOC n = 13、合計約60%で、WASC地域からのものはなし)ことも報告し、認定が課程間のばらつきを減らすうえで最も位置づけの良い外的梃子であると論じています。

- **分散された支援エコシステムとしてのガバナンス。** [[qian-governing-genai-higher-ed-policy-2026|Qian(2026)]]は、最も革新的と評価された米国の大学50校のAIガイダンスをコーディングし、ガバナンスが規則よりも解釈と支援として実現されていることを見出しました。50校中6校だけが主要ページを「方針」として構成し、50校中33校が教員を制度的期待をコース規則に翻訳する主要な担い手として位置づけ、そのための支援は4つの連動する単位に集まっていました。教授学習センターがシラバスの文言とコース方針メニューを提供し、図書館が引用と出所の基準を定め、ITとエンタープライズ・ガバナンス部門がデータ分類規則と審査済みツール群を運用し、学術的誠実性部門がデュープロセスと教育優先の改善措置を担っていました。Qianは、曖昧さを減らすのは[[scaffolding|足場かけ]]であり立場ではないと論じ、それが不均等に配分されていることも報告しています。50校中33校がシラバスまたはコース方針の資料を公開していた一方で、学生向けガイダンスを前面に出したのは4校のみでした。これは上記の手段構成の知見を組織の形で示したものです——ガバナンス能力は文書ではなく単位に位置づけられているのです。

- **倫理・プライバシー・バイアス。** ガバナンスのメカニズムは、しばしば認識されつつも施行されない倫理的原則([[ethics|倫理]]、[[privacy|プライバシー]]、[[bias-mitigation|バイアス緩和]])を具体化し、責任あるAIと教育における[[regulation|規制]]の議論につながります。

- **ガバナンスのための価値・規範マトリクス。** [[agarwal-ethical-values-norms-aied-2026|Agarwal et al.(2026)]]は25論文の[[meta-analysis-systematic-review|系統的レビュー]]で、AIEDの倫理を6つの主要な倫理的価値(非差別、データ管理、[[human-in-the-loop-ai|人間の監視]]、善意、説明可能性、教育的適切性)に統合し、文献から抽出した倫理的規範を行為者×価値のマトリクスに対応づけています。この対応づけは規範を特定の価値を実現する実行可能な規則とし、AIEDのための詳細な倫理的枠組みと規制を構築する基盤を提供します。人間の監視に関する規範は教育機関とエンドユーザーに集中し、教育的適切性は教育機関と規制当局に、善意の規範は規制当局を向けたものが他群よりはるかに多い(9件)ことから、政策と法制を通じてAIEDの便益を学習者に確保する規制当局の役割が示されています。

### ガバナンス教育

AIガバナンスは、ナレッジベースが一体として扱う2つのレベルで機能します。すなわち、AI利用を統治する*制度的規則*(方針、許容利用の枠組み、[[assessment|評価]]と表明の要件)と、*それらの規則についての教育*(規則を乗りこなす準備をすること)です。教育を伴わないガバナンスは、施行されないか不透明になるリスクがあり、ガバナンスを伴わない教育は歯を欠きます。この系譜の研究には、[[genai-policies-higher-ed-computing|制度的生成AI方針の分析]]、[[genai-declaration-frameworks-higher-education|AI表明の枠組み]]、[[genai-assessment-governance|評価のガバナンス]]、[[ai-uk-higher-education-policy-2026|英国のAI高等教育政策]]、ガバナンスをより広い政策の文脈に位置づける[[raza-farooq-aied-review-2020-2025|AIEDの包括的レビュー]]などがあります。

### 評価のガバナンス

AIガバナンスの中心的な場は、**機関がどのように評価を統治するか**です。何が許容されるAI利用かを定め、AI支援された成果がどう表明され、総括的測定がどう守られるかを決める規則です。これには[[ai-use-disclosure|AI利用と表明の声明]]の設計と施行が含まれます。研究によれば、強制的な表明は懲罰的に感じられたり曖昧であったりすると失敗し([[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves 2025]]、[[vetter-hidden-cost-disclosure-genai-2026|Vetter et al. 2026]])、表明を実際に促進するのは明確で一貫した信頼基盤の方針です。ナレッジベースの研究は、*検出型*ガバナンス([[ai-detection|AI検出]]などによるAI利用の取り締まり)と*設計型*ガバナンス([[summative-assessment|総括的]]および[[authentic-assessment|真正な]]評価を、AI利用が想定され表明され精査されるよう再設計すること)を区別します。[[genai-assessment-governance|評価における生成AIの証拠中心ガバナンス]]と[[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]]は、検出は必ず評価の再設計と対でなければならないと論じ、AI抵抗性のある総括的形式(口述試験、監視付き・閉帳の測定、コードレビュー面接——[[summative-assessment|総括的評価]]参照)の選択それ自体がガバナンス上の決定であるとしています。大規模な証拠[[stromberg-generative-ai-learning-penalty-secondary-2026|(Strömberg, Lei, & Wu 2026)]]は、統治されない宿題はAIによって膨らませられる一方で実際の学習は低下しうるため、総括的測定を統治することの重要性を裏づけています。禁止の範囲それ自体がガバナンス上の決定です。[[wright-transcription-not-generation-2026|Wright(2026)]]は、生成と形式変換を区別せず「生成AI」を禁じる規則が、支援的な文字変換ツールまで取り込み、方針の誤適用を不正行為の告発に変えてしまい、障害のある学生と[[equity-in-ai-education|公平性]]のリスクにさらされた学生に負担を課すことを示しています——これは[[legal-issues-and-risks|法的問題とリスク]]が誠実性と同等の平等問題として扱うガバナンスの失敗です。

[[ai-refusal-higher-education-diagnostic-non-use-2026|Zagami(2026)]]が高利害の場から集めた証拠は、単純な拒否ではなく不均等なガバナンスを示しています。評価、入学者選考、懲戒手続きにおける部分的な導入と不完全な方針であり、制度的遅延は失敗ではなく一つのガバナンス的立場として働いています。制度的課題は、ガバナンスを改善するのに十分なまでに拒否を解釈することです。どの決定に人間の審査が必要か、どのシステムに監査が必要か、どの利用に表明が必要か、どの調達の選択に公的な正当化が必要かを問うのです。[[weidlich-inference-at-risk-assessment-validity-2026|Weidlich(2026)]]は、評価固有の帰結を加えます。検出器のスコアは条件付き確率的信号であり、それだけでは不正を確定できません。したがって検出中心のガバナンスは、評価の主張を擁護する十分な基盤ではありません。

### レベルをまたぐガバナンス

AIガバナンスは複数のレベルで機能します。**国家・規制**(政府の政策、OECDの枠組み、州のAIガイドライン)から、**機関**(大学の方針、AI運営グループ、倫理審査委員会)、**授業**(教員のガイドライン、シラバスの記述、課題の設計)までです。効果的なガバナンスはこれらのレベルを整合させます。国家の枠組みが期待を定め、機関がそれを方針と支援構造に翻訳し、教育者が学生のAIリテラシーとエージェンシーを育てる形で実施します。ナレッジベースの研究が強調するのは、ガバナンスは単なる制限についてではなく、責任ある・公平な・学習を支えるAI統合の条件を創出することについてだということです。[[educational-development|教員開発]]、透明なガイダンス、継続的な評価を含めて。
**同じ行為、異なる裁定。** [[genai-governance-australian-higher-ed-2026|Poudyal(2026)]]は、標準化した15件の学生利用のシナリオをオーストラリアの大学20校の公開方針環境に適用し、300件の分類を得ました。明確に禁止40.0%、方針違反の可能性32.3%、条件付きで許可9.0%、不確定18.7%——明確に許可の基準を満たしたものは一つもありませんでした。拘束的な手段は100の組み合わせで生成AIに沈黙していた一方、ガイダンスは88件を解決し、開示された言い換えとAI作成の段落が大学間で最大の分岐を生み、明示的な評価禁止に対しては全会一致でした。上記のレベルが整合していると仮定される場面で、この研究はその乖離の程度を測定し、運用上の境界が拘束的な方針ではなくガイダンスにあることを明らかにしています。

**教員のガバナンスと意図的な審査の根拠。** 上記のレベルが方針を通じて整合している分野では、ある種の領域は共有ガバナンスを通じてそこに至ります。[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski & Hurley(2025)]]は、まさにこの理由で[[legal-education|法科大学院]]が難しい事例であると述べています。米国の法科大学院の教員はコース基準に対して珍しい個人の権限を有するため、方針は彼らに通告するのではなく彼らとともに構築されなければならず、禁止的な規則を定めたほとんどの学校は、個々の教員の裁量を留保するとともに技術の進展に応じた改訂を約束していました。彼らの提言——設計による柔軟性、定期的な審査、事前の研修、認証機関が方針を指示するのを待つのではなく情報共有による自己規制——は、ガバナンスを文書ではなく継続的な過程として描くものであり、[[crompton-governing-genai-higher-ed-delphi-2026|Delphi合意]]が予定された審査周期と常設の学際委員会を勧告するのと同じ要点です。

全学的に見れば、**AIGEM枠組み**([[tan-aigem-ai-educational-management-2026|Tan et al. 2026]])は、責任あるAIを教育マネジメントのための戦略的組織能力として位置づけ、AI戦略的リーダーシップ、責任あるガバナンス、意思決定インテリジェンス、人間–AI協働インテリジェンス、能力開発、持続可能な価値創出を統合し、責任ある実施をSDGに結びつけています。これは、ガバナンスは教育の上に重なるコンプライアンス層ではなく、教育機関の執行機能でもあるということを裏づけています。

### 関連概念とのつながり

AIガバナンスは、[[ethics|倫理]](それが具体化する原則)、[[higher-ed|高等教育]](制度的文脈)、[[privacy|プライバシー]]と[[bias-mitigation|バイアス緩和]](具体的なガバナンス上の関心事)、[[academic-integrity|学術的誠実性]](主要なガバナンスの場)につながります。それは[[change-management|制度的変革]]と責任あるAIの中核であり、[[ai-literacy|AIリテラシー]](ガバナンスは批判的で情報に基づく利用の発達を支える)と交差します。また[[learning-analytics|学習分析]](データ・ガバナンス)や[[student-experience|学生の経験]](ガバナンスは学生が許容される利用をどう乗りこなうかを形づくる)ともつながります。

**認知的コモンズの統治。** 認知的コモンズ枠組み([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]])は、専門性の再生を、境界の画定、監視、段階的な制裁、集合的選択を要するオストロム型のガバナンスを必要とする専門職レベルの集合行為の問題として枠づけています。したがってAIガバナンスは、ツールの規制だけでなく、専門職が必要とする共有された専門性の貯蔵を維持することについてでもあります。組織、専門職団体、政策の各レベルで。

### 教育政策との関係

ガバナンスは[[educational-policy-ai|教育AI政策]]とは区別されますが、それと切り離せません。**政策は中身です**。公式の規則と記述(どのAI利用が許され、何を表明せねばならず、どの評価が認められるか)です。**ガバナンスは機構です**。それらの規則を生み出し、実施し、施行し、改訂するもの——誰が定め、どう資源配分と周知がなされ、コンプライアンスと不服申し立てがどう扱われ、AIの進化にどう適応するかです。[[educational-policy-ai|政策]]のページが*規則それ自体*とその成熟度のギャップを分類するのに対し、このページは規則を現実のものとする*構造と実践*——運営グループ、倫理審査、評価のガバナンス、レベルをまたぐ説明責任——に焦点を当てています。紙の上の規則は政策であり、所有され監視され施行される規則はガバナンスです。両者は相互依存的です。ガバナンスなき政策は施行されず、政策なきガバナンスは方向を欠きます。

**説明責任の言葉は、責任ある行為者を名指しのままにしうる。** [[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal(2026)]]は、366の生成AI高等教育論文の要旨から義務・応答可能性の表現166件を抽出し、責任をシステムに割り当てたものは一つもなく、33件は担い手を特定しないままであることを見出しました。「ガバナンスが必要である」は、招集し、決定し、施行する誰も名指しません。機関と政策関係者が負う義務は37件、機関・教育者の換喩30件、教育者20件、研究者18件、学生はわずか6件でした。

[[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić(2026)]]は、**倫理とデータ・ガバナンス**を信頼できるLAに基づく教育介入の7つの実現要因の一つ——LAとAIの倫理的利用、データのプライバシー、セキュリティ、説明責任に関する方針——として特定し、[[trust|信頼性]](実施を支えるリーダーシップとガバナンスを含む)を、意味のあるデータ駆動型介入の前提として位置づけています。

- **ガバナンスはツールに設計できる。** 6次元のガバナンス・プロファイル——教育学的基礎、教学上の権威、人間の説明責任と統制、学習者のエージェンシーと認知的関与、文脈の具体性、評価の可視性——は、ガバナンスを教育ツールの相互作用モデル、プロンプト、ルーブリック、承認ゲート、ダッシュボードに位置づけ、ツールがどれだけ厳格・寛容かではなく、メカニズムが教学的機能に適合しているかを問います([[instructional-governance-design-computing-education-2026|Dickey 2026]])。

## 関連概念

- [[pedagogical-partnerships]] — 教育学的パートナーシップ
- [[ai-use-disclosure]] — AI利用と表明の声明
- [[remote-proctoring]]
- [[ethics]]
- [[higher-ed]]
- [[privacy]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[student-experience]]
- [[educational-policy-ai]]
- [[regulation]]
- [[summative-assessment]]
- [[ai-misuse-learning-harm]]
- [[trust-calibration]]
- [[generative-ai]]
- [[stakeholders]] — 包括概念:教育AIの担い手と受け手(学習者、教員、設計者、管理者、政策担当者)
- [[student-support-and-success]] — 制度的AI支援システムのための監視

## 関連記事

- [[ai-literacy-sdg-governance-framework-2026]] — 持続可能な開発のためのガバナンス能力としてのAIリテラシー:AIRE分類とAI–SDG連関(Islam, Morshed & Islam 2026)
- [[tan-aigem-ai-educational-management-2026]] — 教育マネジメントにおけるAIガバナンスのためのAIGEM枠組み
- [[institutional-ai-policy-health-informatics-2026]] — 48のCAHIIM認証健康情報学課程にわたるAI方針とガイダンス文書:拘束力なき誠実性中心のガイダンスとしてのガバナンス(Eldredge et al. 2026)
- [[guided-inquiry-genai-course-policy-2026]] — ガイド付き探究による生成AIコース方針の学生共同設計(Hingle & Johri 2026)
- [[learning-analytics-to-educational-interventions-2026]] — 学習分析から教育介入へ:信頼できるLAに基づく介入の実現要因(Svetec, Divjak & Kadoić 2026)
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — AI利用表明における学生の非遵守
- [[vetter-hidden-cost-disclosure-genai-2026]] — 表明の隠れたコスト
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — 学生のAI表明、スティグマ、自己調整学習
- [[weidlich-inference-at-risk-assessment-validity-2026]] — どの推論が危険にさらされているか:評価の妥当性の推論と生成AI(Weidlich 2026)
- [[crompton-governing-genai-higher-ed-delphi-2026]] — 生成AIのガバナンスと政策に関する世界的Delphi調査
- [[qian-governing-genai-higher-ed-policy-2026]] — ガイダンスによる統治:革新的な米国大学50校における教員設定のシラバス規則と4単位の支援エコシステム(Qian 2026)
- [[gutowski-hurley-genai-policy-legal-education-2025]] — 法科大学院の生成AI方針における教員ガバナンス、教員の裁量、定期的審査(Gutowski & Hurley 2025)
- [[wright-transcription-not-generation-2026]] — 過剰に広い「AI」禁止、形式変換と合理的配慮の問題(Wright 2026)
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — 証拠としての拒否:不均等なガバナンス、理解する義務、非利用の診断的価値(Zagami 2026)
- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — AIのための予見的ガバナンスとリーダーシップ
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — オープン大学におけるAIDAの実施
- [[leveraging-complex-systems-leading-for-transformative-change]] — SPARK:変革的な変化のためのリーダーシップ
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]] — 生成AIへの学生のエンゲージメント(SDT)
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection:真正な評価の再設計
- [[genai-policies-higher-ed-computing]] — コンピューティング分野における制度的生成AI方針
- [[genai-declaration-frameworks-higher-education]] — AI表明の枠組み
- [[genai-assessment-governance]] — 生成AI下の評価のガバナンス
- [[ai-uk-higher-education-policy-2026]] — 英国高等教育政策におけるAI
- [[raza-farooq-aied-review-2020-2025]] — AIED研究の包括的レビュー
- [[cognitive-commons-ai-expertise-regeneration]] — 認知的コモンズの悲劇:AIと専門性の再生
- [[policy-deficit-ai-sel-2026]] — AI×SEL研究における政策の欠如
- [[agarwal-ethical-values-norms-aied-2026]] — 教育におけるAIのための倫理的価値と規範
- [[perrotta-zero-shot-governance-2026]] — ゼロショット・ガバナンス:政策における汎用AI(Perrotta 2026)
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — Who Acts, Who Knows, Who Answers?生成AI高等教育研究におけるエージェンシー、認識論的責任、説明責任のコーパス支援談話分析
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design:コンピューティング教育におけるAIのための枠組み
- [[genai-governance-australian-higher-ed-2026]] — Mapping the Authorized Boundary:オーストラリア高等教育における生成AIガバナンスの比較政策シナリオ研究
