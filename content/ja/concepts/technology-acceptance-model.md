---
title: 技術受容モデル
created: "2026-10-10T22:54:32-04:00"
updated: "2026-10-10T22:54:32-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, technology-acceptance-model]
audience: [learners]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
source_updated: "2026-10-22T09:11:45-04:00"
translation_of: concepts/technology-acceptance-model
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**技術受容モデル**とは、個人や組織が新しい[[ai-technologies|技術]]を受け入れ、採用し、継続的に使用する理由を説明・予測するための理論的枠組みであり、教育分野におけるAI研究では、学習者・教師・組織がなぜ[[generative-ai|生成AI]]ツールを採用するのかを説明します。単一のモデルではなく、情報システム研究と社会心理学研究に共通の源流を持つ理論群であり、その中で最も広く応用されているのが**技術受容モデル（TAM）**です。この知識ベースではこれらのモデルをまとめて扱います。生成AIの受容研究では定期的にモデルが組み合わされる（TAM + UTAUT、TAM + TPB、UTAUT + ARCS）こと、またそれらの核となる構成概念——知覚された有用性、知覚された使いやすさ、社会的影響——が教育分野におけるAI受容のほぼすべての研究に反復して現れるためです。

## 検討すべき問い

- あなたが新しいアプリ、ツール、AIサービスを採用したときと、それを放棄したときのことを思い出してください。それぞれの意思決定を実際に駆動したものは何でしたか。どれほど有用だと感じたか、どれほど簡単だったか、それとも周囲の人々がどうしていたかでしたか。どの要因が最も重要だと推測しますか。そして、それを調査票は本当に捉えることができるでしょうか。
- 「ツールが明らかに有用であれば、人はそれを使うだろう」という一般的な信念があります。真に有用な技術がそれでも普及しなかった状況や、明らかに限定的な技術がそれでも広まった状況を見たことがありますか。客観的な有用性と実際の採用の間の隔たりを、何が説明できるでしょうか。
- TAMのような受容の枠組みは、ごく単純なシステムを想定して1980年代に設計されました。生成AIを使ったことがある方にとって、それはワープロソフトや[[edtech-platform|学習管理システム]]とどのように違うでしょうか——そして「使いやすさ」と「有用性」を中心に構築されたモデルが、こちらに話しかけてくるものに対して人々がどのように向き合うかを捉えにくいのはなぜでしょうか。
- [[research-methods-aied|研究者]]たちは、知覚されたリスクと信頼はAI受容において思われているほど重要ではないとしばしば述べます。読み進める前に予測してください。学生はリスクがあるにもかかわらずAIを信頼するから採用するのでしょうか、それともそれらの懸念は実のところ利便性や社会的圧力の隣では些細なのでしょうか。
- このページは、受容の枠組みがツールの使用を一度きりの意思決定として扱っている一方で、効果的な使用は継続的な判断である可能性があると論じます。ご自身や学生の実践のどこに、「AIを使う選択」と「それをどううまく使うかを絶えず決めること」の境界線が曖昧になっている部分があるでしょうか——そして、単なる利用率ではなくそれを測定したとしたら、何が変わるでしょうか。
- 一人のモデルが全員に当てはまると仮定する代わりに、学習者を異なる「受容ペルソナ」に分類する研究者もいます。単一の平均モデルでは隠れてしまう、ご自身の学習者・同僚・学生の間に見られる違いは何でしょうか——そしてその違いは、どのように彼らを支援するかをどう形作る可能性があるでしょうか。

## はじめに

**AI受容に関する[[meta-analysis-systematic-review|メタ分析]]的証拠。** [[teo-ai-adoption-tertiary-meta-analysis-2026|高等教育学生のAI受容のメタ分析]]（233の相関、32研究、N = 16,977）は、個人要因（r = 0.57）、文脈要因（r = 0.53）、技術要因（r = 0.50）に中程度の正の相関を見出し、使用意図が最も強い予測変数（r = 0.64）であり、知覚されたリスク／信頼は予想より弱いことを示しています。その中心的な批判は、この分野が現代の知的システムに先立つ従来型のTAM/UTAUT枠組みに**過度に依存**しており、擬人化や倫理といったAI固有の要因を軽視しているというものです——そしてこれらの空白は理論と証拠に基づく政策の前進にとって重要であると論じています。

## モデル群

### 技術受容モデル（TAM）
Davis（1989）によって提唱されたTAMは、二つの核となる信念——**知覚された有用性（PU）**と**知覚された使いやすさ（PEOU）**——が利用者の**態度（ATT）**を形成し、次に**行動意図（BI）**を経て、実際の使用に至ることで受容を説明します。情報システム理論（行為の合理的神経理論から応用）に基づくTAMは、教育分野における[[generative-ai|生成AI]]受容の支配的な枠組みとなっています。教育分野の生成AI研究では、単純な利用率を超えた受容の複雑性を捉えるために、[[ai-literacy]]、[[trust]]、社会的影響、[[self-determination-theory|自己決定理論]]、そして**批判的使用**を加えて拡張されることがしばしばあります。

### UTAUT / UTAUT2 / UTAUT3
**技術受容と利用の統合理論**は、TAMと先行する8つのモデルを4つの中核的な決定要因——業績期待、努力期待、社会的影響、促進条件——に統合します（UTAUT2は快楽的動機、価格対価値、習慣を追加し、UTAUT3は個人的革新性を追加します）。この知識ベースはUTAUTを教師集団と学生集団の両方に応用しています。[[mathematics-teachers-chatbot-motivation-2026|オーストリアの中等教育数学教師]]（UTAUT、448名の教師）、[[pre-service-science-teachers-ai-perceptions-2026|ガーナの理科の教員養成課程の学生]]（UTAUT + TPB）、[[tian-genai-learning-adoption-pathways-2026|レソトの学生]]（UTAUT3 + ARCS、PLS-SEMとfsQCAを使用）などです。[[jacome-vasconez-chatgpt-adoption-xai-2026|Jácome-Vásconezら]]は、説明可能AI（ランダムフォレスト、SHAP、NCA、IPMA、K-Means）でUTAUT2を拡張し、522名の大学生を対象に、**習慣**がChatGPT使用意図の最も強い予測変数であることを見出し、**努力期待が線形的な推進力ではなく必要条件である**ことを示しました——これは回帰分析にXAIが補完される場合にのみ見える結果です。

### 計画的行為理論（TPB）
TPBは、態度、主観的規範、知覚された行動制御を通じて行動意図を説明します。AI受容研究ではTAM/UTAUTとしばしば組み合わされます——例えば[[genai-chatgpt-adoption-ethics-students-2026|Rizunら]]は、TAM、TPB、UTAUT、FATE（[[bias-mitigation|公平性]]、説明責任、透明性、倫理）枠組みを統合して、学生のChatGPT受容の行動的および[[ethics|倫理的]]駆動要因をモデル化しています。


受容研究は通常、行動意図で止まります。真の意図があるにもかかわらず生じる遅延を測定するTPB拡張研究では、1,243名の学部生を対象に、知覚された行動制御が生成AI支援学習の先延ばしの最も強い負の予測変数であることがわかりました（β = −0.331）。意図と遅延の結びつきは、中程度から高い学習用生成AI不安の水準においてのみ有意でした（[[genai-learning-procrastination-planned-behavior-2026|Li et al.（2026）]]）。

### イノベーションの普及（DOI）
RogersのDOI理論は、受容を、イノベーションが時間の経過とともに集団に普及していく社会的過程として説明し、イノベーションの属性（相対的優位性、互換性、複雑性、試行可能性、観察可能性）と採用者カテゴリーを強調します。これはこの知識ベースの[[governance|制度的]]水準の分析に登場します。例えば[[alrahmi-org-drivers-ai-adoption-he-2026|Al-Rahmiら]]は、技術・組織・環境（TOE）枠組みをDOIと組み合わせて、サウジアラビアの大学における組織的なAI受容をモデル化しています。

### 技術・組織・環境（TOE）
TOEは、受容を技術的・組織的・環境的文脈によって形成されるものとして枠づけます——これは、制度的な受容を研究するための個人水準のTAM/UTAUTへの補完です（[[alrahmi-org-drivers-ai-adoption-he-2026]]参照）。

## 知識ベースにおける応用

受容モデルは、学生と[[teacher-role|教師]]のAIツール受容をモデル化するために、この知識ベース全体で応用されています。

- **批判的使用の拡張：** [[tam-critical-use-genai-engineering-2026|Nguyenら]]は、工学部・計算機科学系の学生向けにTAMに*批判的使用*を拡張し、態度と批判的使用が行動意図を直接予測すること——そして批判的使用が[[cognitive-offloading|過度な依存]]を防ぐ防壁になることを見出しました。
- **統合的社会認知的モデル：** [[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]]は、バングラデシュの工学部学生を対象にTAMとUTAUTを統合しました（使用分散の64%を説明）。
- **個人中心のプロファイル：** 変数中心のモデルではなく、[[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed]]は生成AI受容ペルソナをクラスター化し、[[chen-preservice-teachers-chatgpt-lpa-2026|Chenら]]は潜在プロファイル分析を用いて教員養成課程の学生における4つのChatGPT受容プロファイルを特定しました——これは、単一モデルで線形的な説明を超えようとするこの分野の動きを示しています。
- **異文化間妥当性検証：** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Morenoら]]は、受容に関連する動機づけ構成概念をスイスと中国を対象に異文化間で検証しています。
- **心理学的相関：** [[acceptance-ai-english-tools-2026|Wuら]]はTAMを基盤に、動機づけ、[[self-efficacy]]、不安、リスク知覚をAI支援英語学習の受容と関係づけています。
- **[[regulation|規制]]的コンピテンシー批判：** [[ai-anxiety-strategic-regulation-writing-2026|Kim]]は、受容中心のTAMモデルは使用を安定的な意思決定として扱っているが、効果的なAI使用は判断・修正・選択的採用の継続的な過程であると論じ、[[ai-literacy]]を受容ではなく規制的コンピテンシーと[[critical-thinking]]として再定義しています。


計画的行為理論のような信念の枠組みと並列する予測変数として[[tpack|TPACK]]系の能力を加えることは、構成概念の重複を招き、能力・態度・統制の因果順序を未決のままにします。ケイパビリティ・意思決定モデルは代わりに、AI-TPACK能力を態度と知覚された行動制御の上流に位置づけます（[[capability-decision-model-teacher-readiness-2026|Mnguni（2026）]]）。

- **ChatGPT受容のML決定要因：** 探索的なMLアプローチが、学生の知覚と人口統計学的属性が学術的なChatGPT使用意図にどう関係するかを検討し、SHAP分析を用いて主要な学習関連の構成概念を特定しました——アルゴリズム性能の最大化よりも教育的な意味を優先しています（[[determinants-chatgpt-use-higher-education-2026]]）。

- **教師にとっての受容レバーとしての[[explainable-ai|説明可能性]]と領域との関連性：** 教師のAI推薦受容に自動化への信頼理論を応用した[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggorら（2025）]]は、理解しやすさ（説明可能AIによって高められる）がAIグルーピングツールへの信頼と受容の両方に正に相関すること、そして[[curriculum-design|カリキュラム]]の言葉による領域主導の説明は、データ駆動の特徴量重要度に基づく説明を3つの指標すべてで上回ることを見出しました。受容はさらに[[pedagogy|教授法]]との整合性と業務削減の可能性によっても駆動されました——これは標準的なTAM/UTAUT構成概念がほとんど捉えない、信頼を超えた状況的要因であり、受容モデルに文脈と説明可能性を加えることの妥当性を裏付けています。
- **教材の水準で測定された受容（2026年）。** [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang & Wu（2026）]]は、794名の[[k-12]]学生と37名の教師が使用した年齢層別のAIリテラシーガイドブック2種について、業績期待、努力期待、知覚された遊び心、行動意図を操作化し、標本分割EFAとCFAによって4因子構造を検証し、9-12歳版と13-18歳版の間で測定不変性を支持する結果を得ました。若い学習者は4つの構成概念すべてで高い値を報告し、遊び心は両コホートにおいて行動意図の最も強い相関変数でした——若年層グループでは標準化された遊び心から意図への係数が1.00を超え、2つの構成概念間のHTMTは.950でした。著者らはこれを構成概念の重複と抑制の可能性として読み解いており、教材に適用された受容尺度が構造的解釈を複雑にする経験的に絡み合った因子を生み出しうることを示す有益な注意喚起となっています。

## 限界と拡張

TAMの認知的焦点は、AI使用の感情的・関係的次元も捉えきれていません。[[akbaba-nursing-ai-experiences-tam-2026|看護学生と教員の質的研究]]では、古典的な4つのTAM構成概念に加えて、参加者——主に学生——がAIを心理社会的支援の源として描写していることがわかりました。ストレス時の感情的安らぎと、内省のための秘密の空間です。これは知覚された有用性を、成績向上を超えて高ストレスの[[professional-training|専門職養成]]における[[well-being]]へと拡張するものであり、受容モデルは道具的効用だけでなく感情的・心理社会的要因にも注意を向けるべきであることを示唆しています。

**[[agency|自律性]]知覚とリスク回避を、ツール固有の拡張として。** 27の国・地域にわたる287名の生成AI経験を持つ教師を対象とした[[mixed-methods-research|混合研究法]]調査（[[dai-genai-frenemy-teaching-autonomy-2026|Daiら（2026）]]）は、モデル群がほとんど手をつけていない方向——ツール自身の知覚された*自律性*——へとTAMを拡張しています。古典的な構成概念に、知覚された人工的自律性（教師が生成AIが割り当てられた教授課題をどれだけ自律的に遂行できると信じているか）とリスク回避を加えた結果、彼らの精緻化された構造モデルは行動意図の分散の79.8%を説明しました（χ²(97) = 202.597、CFI = .963、TLI = .954、RMSEA = .062、SRMR = .041）。知覚された有用性は再び支配的で（PU → BI β = .832、p < .001）、使いやすさは有用性に影響を与えていました（PEU → PU β = .479）。示唆に富むのは回り道の結果です。人工的自律性は行動意図に直接作用せず（β = .026、ns）、有用性を介して作用しました（AA → PU β = .188、p < .001。間接 AA → PU → BI = .156、95% CI [.082, .240]）——生成AIをより有能だと見なした教師は、それをよりすぐに採用可能だとは感じなかったのではなく、より有用だと感じたのです。リスク回避は知覚された有用性を下げることなく（RA → PU ns）行動意図を低下させました（RA → BI β = −.163、p < .001）。それは、教師の懸念が自分自身の使用ではなく*学生の*使用——不正行為と[[academic-integrity|学問的誠実性]]、基礎的知識と高次思考の弱体化、[[hallucination-risk|幻覚]]、人間同士の交流の減少、倫理的・法的・[[equity-in-ai-education|公平性]]リスク——に向けられていたためです。使いやすさは全体としては有意ではありませんでしたが（PEU → BI β = .068）、実際にAIを教育に使用したことがある225名の教師の間では有意でした（β = .138、p < .05）——これは、努力は実際の遭遇の後にしか効力を現さないという、よく知られたパターンです。態度は、行動意図との相関（r = .929）が判別妥当性を侵害したため、除外する必要がありました。教師は生成AIを半自律的な水準に位置づけました（130名が水準2「教師の支援」、94名が水準3「部分的…」）。

**リスク知覚を次元固有の拡張として。** 814名の中国の大学生を対象とした調査（[[risk-perception-genai-perceived-benefits-2026|Du, Ning, Shi & Chen（2026）]]）は、認知的評価理論とプロテクション・モチベーション理論をTAM/UTAUT2に折り込み、学生が[[generative-ai|生成AI]]を採用するかどうかではなく、そこから何を得るのかを問うています。リスクが一様に受容を抑制するというモデル群の前提は成り立ちません。リスク知覚は、情報・セキュリティ・技術・[[ethics|倫理]]・法の次元に分かれ、それらは利益を逆方向に動かすからです。学生が[[privacy|プライバシー対策]]を通じて管理できる脅威であるセキュリティリスクは、問題焦点対処と整合して、知覚された学業上の支援とスキル発達に*正に*関連していました。一方、学習者が容易に検証できない情報リスクは、回避を通じて心理的・感情的支援、日常生活、余暇の利益を損ないました。しきい値分析はさらに、次元固有の境界点を超えて符号が変わる効果を示しました。また、使用経験が独立して重要であり、1年以上生成AIを使用した学生は4つの領域すべてでより高い利益を報告しました。受容研究にとっての実践的な含意は、「知覚されたリスク」はモデル化するには粗すぎる構成概念であるということです——学生が関与するか撤退するかを決めるのは、リスクの単なる存在ではなく制御可能性なのです。


リスクと使用の結びつきはまた、システムに依存します。当該項目を実施した49のTALIS 2024システム全体で、知覚されたAIの有用性は49すべてでAI使用と正に関連していましたが、知覚されたリスクは40で負に、9で正に関連していました（[[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin（2026）]]）。

## 関連概念

- [[business-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ethics]]
- [[trust]]
- [[cognitive-offloading]]
- [[self-determination-theory]]
- [[research-methods-aied]]
- [[student-modeling]]
- [[framing-ai-use-for-students]]

## 関連記事
- [[dai-genai-frenemy-teaching-autonomy-2026]] — 生成AIを「フレネミー」として。人工的自律性とリスク回避が教師のためにTAMを拡張する（Dai et al. 2026）
- [[akbaba-nursing-ai-experiences-tam-2026]] — 看護分野におけるAI体験。TAMの心理社会的拡張
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — クラスタリングによる生成AI受容ペルソナ
- [[tian-genai-learning-adoption-pathways-2026]] — 生成AI受容における対称的・非対称的経路（UTAUT3 + ARCS）
- [[lee-wu-gender-motivation-genai-achievement-2026]] — 性別と動機づけによる生成AI関与の差異
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — 高等教育における組織的AI受容のTOE + DOIモデル
- [[tam-critical-use-genai-engineering-2026]] — 工学部・計算機科学系学生向けの批判的使用を加えた拡張TAM
- [[socio-cognitive-genai-adoption-engineering-2026]] — 工学教育のための統合的社会認知的モデル（TAM + UTAUT）
- [[ai-anxiety-strategic-regulation-writing-2026]] — AI不安から戦略的規制へ
- [[genai-reliance-types-scale]] — 生成AI依存類型尺度
- [[llm-reliance-types-undergrad]] — 学部生におけるLLM依存類型
- [[acceptance-ai-english-tools-2026]] — AI英語ツールの受容
- [[genai-chatgpt-adoption-ethics-students-2026]] — 学生のChatGPT受容の行動的・倫理的駆動要因
- [[mathematics-teachers-chatbot-motivation-2026]] — UTAUTと教師のチャットボット動機づけ
- [[pre-service-science-teachers-ai-perceptions-2026]] — ガーナの教員養成課程の理科学生のためのUTAUT + TPB
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — 教員養成課程の学生のChatGPT受容プロファイル（LPA）
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — AI受容要因のメタ分析。TAM/UTAUTを批判する
- [[determinants-chatgpt-use-higher-education-2026]] — 高等教育における将来のChatGPT使用のML/SHAP決定要因
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — XAIで拡張したUTAUT2。習慣を最も強い予測変数とし、4つの受容プロファイルを特定（Jácome-Vásconez et al. 2026）
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — 年齢層別AIリテラシーガイドブックの教材水準のPE/EE/遊び心/意図モデル。遊び心と意図の構成概念重複が記録されている
- [[risk-perception-genai-perceived-benefits-2026]] — TAM/UTAUT2に折り込まれたCAT + PMT。生成AIの知覚利益に対する次元固有かつ非単調なリスク効果（Du, Ning, Shi & Chen 2026）

- [[capability-decision-model-teacher-readiness-2026]] — 計画的行為理論の受容モデルにTPACK能力を接ぎ木することへの順序づけられた代替案
- [[teachers-ai-belief-profiles-talis-2024-2026]] — 49システムにおける知覚されたAIの有用性とリスクの個人中心的TALIS 2024プロファイル
- [[genai-learning-procrastination-planned-behavior-2026]] — 生成AI支援学習の先延ばしと、意図と遅延の結びつきに対する不安の調整効果を測定するTPB拡張
