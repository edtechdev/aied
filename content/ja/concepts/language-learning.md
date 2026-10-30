---
connected_resources: [mglearn]
title: 言語学習
created: "2026-10-10T22:38:04-04:00"
updated: "2026-10-30T03:34:02-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/language-learning
source_updated: "2026-10-26T12:05:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **言語学習**——AI が、教育の場面において第二言語（L2）の習得、作文の発達、そして言語的多様性をどう支えるかについての研究です。このナレッジベースにおける[[ai-education|教育における AI]]の[[research-methods-aied|研究]]は、話し言葉の対話のための AI の対話相手、L2 の学習者のための[[automated-essay-scoring|自動的な作文評価]]、読みの支援、そして AI の採点システムにおける言語の偏りに関する懸念にわたっています。

## 検討すべき問い

- 言語は本質的に対話的であり、それは[[conversational-ai|対話型 AI]]によく適しています——しかし AI の言語的な能力は、非母語話者のパターンに対する偏りのリスクも引き起こします。この機会とリスクの間の緊張が、どこで現れるのを見たことがありますか。
- ある研究は、AI の採点が言語的に弱い学生を体系的に過小評価することを見出し、別の研究は、学生を母語話者の規範ではなく自分自身の過去の作品と比較することを提案しました。評価の「参照点」が変われば、[[ai-feedback-quality|AI のフィードバック]]が学習者を助けるのか罰するのかがどう変わるでしょうか。
- AI の対話相手は、規模においてコミュニケーションの練習を広げられますが、このページは、それらが人間とのやり取りと結びつけられ、流暢さが本当の会話に移るようにすべきだと警告しています。AI との練習から、人間の相手が与えられないものをあなたは何を得られるでしょうか——そして何を失うでしょうか。
- AI の道具だけでなく——教員の支援が、学生の達成目標を通じて、AI に支援された言語学習における関与を動かすことが示されました。社会的で[[pedagogy|教授学的な]]文脈は、学習者が AI の練習ツールに engaged であり続けるかどうかをどう形づくるでしょうか。
- 一つの[[meta-analysis-systematic-review|メタ分析]]は、新興技術からの小さいから中程度の、水準に依存した伸びを見出し、生産的な技能（話すこと、書くこと）が受容的な技能よりも多くの伸びを得ることを示しました。なぜ話すことと書くことは、聞くことと読むことよりも AI の道具から多くの利益を得るのでしょうか。
- AI が標準英語を優遇し、非母語話者や多様な言語のパターンを罰しうるなら、言語の教員は評価とフィードバックをどう設計すべきでしょうか——AI が言語的多様性を支えるのではなく、消し去るような形ではなく。

## はじめに

言語学習は、言語が本質的に対話的であるため——それは対話型 AI によく適しています——そして AI の言語的な能力が機会（規模における[[personalized-learning|パーソナライズされた言語の練習]]）とリスク（非母語話者の言語パターンに対する体系的な偏り）の両方を引き起こすため、教育における AI の重要な領域として現れました。このナレッジベースの論文は、この等式の両側を探究しています。対象の言語が**特に英語**である場合——特に[[english-education|学術的な目的のための英語（EAP）]]と EFL/ESL/L2 の英語の[[teacher-role|教授]]——英語に特有の研究を、一般的な L2 の習得や一般的な作文と区別する、専用の[[english-education|英語教育]]の概念ページを見てください。

**言語の個別指導者としての AI、そして対話相手**は最も発達したテーマです。**[[ai-interlocutor-l2-spoken-dialogue|What Changes When the Interlocutor Is an AI?]]**は、L2 の学習者が AI あるいは人間と会話するときの相互作用における流暢さと言語的な取り入れを検討します。**[[tact-pedagogically-adaptive-esl-tutoring|TACT]]**は、教授学的に適応的な ESL の個別指導を提供します。**[[llm-children-reading-story-generation]]**は、子どもの読みの発達のための AI が生成した物語を探究します。これらは[[intelligent-tutoring|知的個別指導]]と[[generative-ai|生成 AI]]に結びついています。**[[llm-agents-5e-esl-grammar-2026|Yang, Weng and Yang (2026)]]**は、二つの[[llm]]に基づくエージェント——従来型の AI 英語教員と、探究に基づく文法学習のために**5E の枠組み**（engage、explore、explain、elaborate、evaluate）を用いるもの——を設計しました。無作為化比較における**37 人の ESL 学生**にわたって、**成績の高い学生は AI の教員に好意的に応えた**一方、成績の低い学生は態度が入り混じり、両条件は内発的な動機づけ、認知的変化、成績において異なりました——これは、LLM エージェントの設計が学習者の習熟度に合わせるべきであることを示しています。

物理的に具現化された個別指導者については、11 件の RALL 研究のメタ分析（N = 595）は、L2 の学習に対する大きな統合された効果（g = 0.83）を高い異質性とともに見出し、それを調節したのはやり取りの形式のみでした——グループ形式が一対一を上回った一方、ロボットの形態、様態、自律性、社会的な役割は調節しませんでした（[[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang & Zou (2026)]]）。

**言語評価における AI**は、LLM が[[automated-question-generation|項目の生成]]と評価を支えるようになる中で、新たな領域として現れています。**[[gpt-item-generation-l2-listening-2026|Aryadoust and Wong (2026)]]**は、L2 の聴解評価における自動的な項目生成のために、[[prompt-engineering|プロンプト工学]]と微調整とを比較しました。反復的なプロンプトの精緻化は項目の質を改善しましたが頭打ちとなり、一方で**最適化されたプロンプトで GPT-4.1 を微調整すること**（プロンプトの設計を一定に保ったまま）はさらなる伸びをもたらしました——これは、評価の開発者がモデルの適応にプロンプトの反復よりもいつ投資すべきかの手本です。

20 人の経験豊かな教員が評価した 52 件の EFL 評価課題の比較は、AI が生成した項目と人間が開発した項目の間に全体として有意な質の差は見られなかった一方、明確な役割分担を見出しました。AI は文法と語彙（69%）で好まれ、人間による開発は読むこと、書くこと、聞くこと、話すこと（75–83%）で好まれました（[[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia and Darvishi (2026)]]）。

**L2 の学習者のための自動的な作文評価**は、AI が非母語話者の作文を評価する能力を評価します。**[[self-referential-l2-writing-llm-assessment|Bannò et al.]]**は、学生の作文を母語話者の規範ではなく自分自身の過去の作品と比較する、自己参照的なアプローチを提案しました。**[[ai-scoring-language-bias-physics|Feser & Tschisgale]]**は、AI の採点が言語的に弱い学生を体系的に過小評価することを見出しました——この所見は[[assessment-validity|評価の妥当性]]と[[bias-mitigation|偏りの軽減]]の懸念に結びついています。**[[genai-linguistic-diversity-academic-writing]]**は、AI が学術的な文脈における言語的多様性にどう影響するかを探究します。

 談話レベルのシステムは、テキストを採点するのではなく欠陥に名を与えることでさらに進みます。文の対の関係の分類が、一貫性の破れ——論理の飛躍、欠落した接続表現、曖昧な指示——を特定し、その生成されたフィードバックの教員が判断した採用率は 71.2%–88.4% に上りました（[[bert-discourse-english-teaching-2026|Wang et al., 2026]]）。

**言語学習者のための[[accessibility|アクセシビリティ]]**は[[inclusive-learning|包摂的な学習]]に結びついています。**[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**は、識字の支援のためにディスレクシアの学習者が AI をどう用いるかを分析し、**[[ai-tools-arab-english-classrooms]]**はアラビア語—英語の教室の文脈における AI の道具を探究しました。これらの研究は、言語学習を[[equity-in-ai-education|教育における公正]]と[[special-education|特別支援教育]]に結びつけています。

**AI に支援された言語学習における動機づけの機構**は、学習者がなぜ言語の練習のために AI と関わるのかを検討します。**[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]**は、758 人の中国の大学の英語学習者に対して目標設定理論を用い、**教員の支援**が、学生の習熟接近目標と成績接近目標（回避目標ではなく）を通じて、AI に支援された学習における関与を高めることを示しました——これは、教授学的で社会的な文脈、AI の道具だけではなく、学習者が AI に支援された言語の練習に engaged であり続けるかどうかを決めるというエビデンスです。これは、言語学習を[[motivation|動機づけ]]と[[student-engagement|関与]]に結びつけています。

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]]は、質的な自己決定的な事例を加えます。25 人のマレーシアの学部学生へのインタビューにおいて、ChatGPT は能力と自律性を支え、その対話的な応答性が聞かれているという感覚を生み出しました——その中で、関係性は部分的に道具によって満たされる「AI を介した動機づけの生態」でありつつも、不正確な言及は検証と人間による補完を求めました。

教員が作った個別指導者では、使用の頻度ではなく設計の質が動機づけの効果を担いました。コースに限定された日本語の GPT を用いた 74 人の学部学生にわたって、授業外の使用頻度は自律性、能力、関係性との有意な相関を示さなかった一方、学習者は個別指導者を自己主導的な学習に高く評価し（M = 4.39）、情動的な安全感を挙げました（60.8%）（[[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee & Kwon, 2026)]]）。

**初等水準での生成 AI に支援された作文。** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]]は、中国東部の 5 年生と 6 年生の学習者 301 人を対象に、八つのそのままの学級を無作為にプログラムあるいは従来の教授に割り当て、九週間の意見文のプログラムを実施しました。そのプログラムは、学習者の理想的な L2 作文の自己（調整済み平均差 0.20）と学業的な浮揚力（0.17）を高め、行動的および情動的な関与を上げましたが、成長マインドセット、認知的またはメタ認知的関与、ルーブリックによる評価の構成は動かず、作文の次元のうち改善したのは言語の使用のみでした。言語の教員にとって重要な設計の二つの特徴は、プロンプトが明示的に教えられたこと——具体的な作文の目標に結びついた分類されたプロンプトの束を通じて——と、生成 AI のフィードバックが教員のフィードバックとの比較と繰り返しの推敲とともに用いられたことです。学習者が報告した作者性の伸びは、道具そのものではなく、その教授的な構造に依っていました。著者らは、減じられた[[metacognition|自己の監視]]と近道的な方策を、常に残るリスクとして名指しています。

## 言語の教員にとっての含意

- **新興の[[ai-technologies|技術]]は小さいから中程度の、水準に依存した伸びをもたらす。** [[liu-emerging-tech-tefl-review-2026|33 件の TEFL 研究のメタ分析]]（N = 3,181）は、教育的な水準とともに上がる Hedges の g = 0.38 という全体的な効果（初等教育 0.29、中等教育 0.35、高等教育 0.44）を見出し、VR/AR が最も大きな効果をもたらし、生産的な技能（話すこと、書くこと）が受容的な技能よりも多くの伸びを得ることを示しています——これは、特に高等教育の水準において新興技術の使用を支えるとともに、期待を現実的に保つものです。
- **系統的レビューは、初等教育における AI 言語教育が薄い箇所を写像する。** 31 件の研究（2013–2025年）にわたって、初等教育の言語の教室における仕事は、話すこと、識字、語彙に集中し、文法、聴解、手話はほとんど研究されておらず、ほとんどの設計は学年に特有の具体性を欠いていました（[[ai-elementary-language-education-review-2026|Hamasha et al., 2026)]]）。
- **AI をコミュニケーションの練習を広げるために用い、置き換えるのではない。** [[ai-interlocutor-l2-spoken-dialogue|AI の対話相手]]と[[tact-pedagogically-adaptive-esl-tutoring|適応的な ESL の個別指導者]]は、規模において相互作用の練習を広げます——流暢さと取り入れが本当の会話に移るように、それらを人間とのやり取りと結びつけてください。
- **AI の[[scaffolding|足場かけ]]を協働的な読解へ広げる。** 生成 AI に支援されたソーシャル・アノテーションの研究で、中国語を専攻する英語学習者 63 人を対象に、[[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] は、チャットボットが認知的および情動的な関与と読解の成績を高め、[[community-of-inquiry|社会的存在感]]を統合と解決に結びつけたことを見出しました。ただし成績の高い群はその足場をはるかに多く用いました。
- **観察された成績ではなく、準備性。** 708 人の学習者にわたって、AI に支援された話すことの練習が多いほど、人間に向けたコミュニケーションへの意欲が高く(β = 0.384)、外国語を話すことへの[[anxiety-and-stress|不安]]が低いこと(β = −0.416)と対応しました。AI の音声アシスタントのシナリオは、予期される不安をさらに下げました。どちらの研究も、実際に人間と話すことを観察してはいません([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]])。

- **AI の出力を文法的な誤りだけでなく、語用論的な誤りについても監視する。** 五つのオンラインの言語教授法にわたる教員は、語用論的な盲目——AI の出力が文法的には正しいが、口調、格式、文化において誤っている状態——を挙げました（[[ai-ethics-tensions-online-pedagogy-2026|Baoyi and Khan (2026)]]）。
- **ASR に支援された話すことにおいて、量よりフィードバックの質を優先する。** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]]は、正確な誤りの訂正と構造化された省察の課題が、大学の英語の話すことにおいて[[feedback|フィードバック]]の内面化と省察的な行為を改善することを見出し、一方で頻繁な ASR の使用と認識の正確さは動機づけや省察を部分的に高めるにすぎません——技術的な精密さだけでは、より深い認知的関与を動かさず、言語の習熟度は伸びを調節します（より強い学習者はフィードバックをより効果的に内面化します）。これは、教授学的に健全なフィードバック（単純な誤りの旗印ではなく、調音に関する説明など）、足場かけられた省察、そして習熟度に応じた支援を主張します。
- **訂正の前に手がかりを与える。** 学習者が直接的な訂正を受けるのではなく、導かれたヒントから修正を推論する「訂正の前の手がかり」という ChatGPT の課題は、認知的負荷を減らし、パーソナライズされた推敲を支えました——ただし、その利益は主として、すでに十分な事前知識を持つ学習者について成り立ちました（58 人の学生、CEFR A1–B1）（[[lukesova-clue-before-correction-2026|Lukešová & Jennings (2026)]]）。
- **違いを近づけるべき点に局在化させる発音のフィードバックを届ける。** Profy は、ほとんど注釈のついていない話し言葉から習熟度を学び、学習者が母語話者の分布から*どこで*乖離するかを示します。その事前／事後の明瞭性の信頼区間は重ならず、誘発模倣のベースラインとは異なりました——これは、模倣の練習が専門家の評価者なしに支えられうることのエビデンスです（[[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]）。
- **文字起こしの経路を代替物ではなく第二の信号として使う。** CEFRで均衡した学習者コーパスにおいて、WavLMの音声分類器は、文字起こしを読むゼロショットのGPT-4o分類器を上回りました。したがって第一言語の語彙的な痕跡は実在しますが、発音、リズム、イントネーションより弱いのです（[[acoustic-lexical-native-language-identification-learners-2026|Ulusluら（2026）]]）。
- **AI に支援された学習への学習者の心理的な適応を支える。** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]]は、一学期にわたる日本語の学習者を追跡し、彼らが技術ストレスと回復力の均衡に動かされて、不適応的、中程度、肯定的な適応のプロファイルに分かれることを見出し、ほとんどの学習者は徐々に肯定的な適応へと移り、より高い[[self-efficacy|自己効力感]]とより低い燃え尽きを報告します——これは、道具へのアクセスだけでなく技術的な負担を管理する、AI を介した言語の練習を設計するための信号です。
- **学習者に対する採点とフィードバックの偏りに警戒する。** [[ai-scoring-language-bias-physics|AI の採点]]は非母語話者のパターンを罰しうます。[[genai-linguistic-diversity-academic-writing|言語的多様性の研究]]は、AI が標準英語を優遇すると警告します——自己参照的または人間が調停する評価を用いてください。
- **学習者の全スペクトルを支える。** [[dyslexlens-dyslexic-learners-ai|ディスレクシアとアクセシビリティの研究]]と[[culturally-relevant-pedagogy|文化的に応答的な]]設計（[[ai-tools-arab-english-classrooms|アラビア語—英語の文脈]]）は、AI が普遍であると仮定されるのではなく、多様な学習者のニーズに適応しなければならないことを示しています。

- **採点だけでなく、基盤そのものが言語を排除する。** ベンガル語は、世界のウェブ・コンテンツの 0.5% 未満しか占めず、英語からベンガル語への訓練トークンの赤字は 67:1 であり、地方と都市の接続性の格差（インターネット普及率 36.5% 対 71.4%）があります。したがって、母語による、オフライン優先の設計は、利便性ではなくアクセスの前提条件です（[[structural-silence-underrepresented-language-ai-2026|Roy and Roy (2026)]]）。
- **教育者は生成 AI を、生きた教室での使用ではなく準備の仕事に価値を見いだす。** [[li-language-educators-genai-review-2026|23 件の研究の PRISMA 系統的レビュー]]（Li et al. 2026）は、言語の教育者が生成 AI を、舞台裏の準備——[[curriculum-design|授業の計画]]、教材の作成、作文の支援とフィードバック——に最も価値を見いだす一方で、直接的な、教室に面した実施については依然としてためらいを残すことを見出し、原則として AI を認めることと、それを生きた場面で用いることの間にある理論—実践の隔たりを反映しています。導入は、専門家としてのアイデンティティ、教授学的、技術的、[[governance|制度的]]、そして[[academic-integrity|学術的な誠実性]]の要因によって形づけられ、教育者は非導入から包括的な統合までのスペクトル上に落ち着きます。態度は、曝露とともに、初期の不安から、自信を持ち選択的な使用へと向かう傾向があります。
- **言語の教員の[[ai-literacy|AI リテラシー]]を準備する。** [[governing-unseen-ai-literacy-language-teachers-2026|系統的レビュー]]は、言語の教員における AI リテラシーが主要な欠落であることを見出しています——道具の導入と並んで教員の[[educational-development|専門能力開発]]に投資してください。AI が言語教育を作り直すにつれて、AI リテラシーは、教員が技術と批判的に関わるためにもまた不可欠です。教員の AI リテラシー尺度（TAILS）は、言語の[[teacher-education|教員教育]]のために開発され、六次元の ED-AI の枠組み（知識、評価、協働、文脈化、[[agency|自律性]]、[[ethics|倫理]]）を運用化し、英語教員養成の学生に対して検証されました。

- **高い圧力の中の二言語の課題における四つのやり取りのプロファイル。** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li and Weng (2026)]]は、22 人の通訳訓練生に対してアイトラッキング、ペンによる記録、音声による記録を用い、学生が AI の出力と自分自身のノート取りの間に注意を四つの異なる仕方で配分すること——集中的に engaged な者、素早く走査する者、伝統的なやり方をする者、頻繁に切り替える者——と、同じ課題の理解と産出の段階の間で、段階レベルの観察の 58.3% がプロファイルを変えることを示しました。理解段階のパターンのみが成果の質を予測し、AI を最も重く用いる集団は、伝達の流暢さと対象言語の質で最も低い得点となりました——これは、道具との一つの働き方を規定するのではなく、学習者に自分自身の方策を記述し省察することを教える根拠となります。
- **費用と接続性をめぐって四技能のループ全体を回す。** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]]は、LLMersion-1 を公開しました。消費者のハードウェア上で学習者自身の文書にわたって聞くこと、読むこと、話すこと、書くことをこなす、ローカル優先の試作です——1B の個別指導者は 808 MB に量子化され、常駐するスタック全体は 4 GB 未満に収まります——そして、毎日の練習五年分の費用を電気代およそ \\$18 と見積もり、クラウドの定期購読の \\$1,200 に対抗させています。学習の成果は報告されておらず、発音のフィードバックは分節的なもののみです。
- **チャットボットによる話すことの利得の証拠は、特徴によって不均一である。** この問いについての唯一の系統的な統合では、2021年から2024年の10研究が範囲と言葉の明瞭さを最も確実に改善し、一貫性は一度だけ検討され、相互作用はほとんど検討されませんでした。10研究のうち4件は単一の全体的な得点を報告していました（[[chatbots-oral-proficiency-efl-systematic-review|Soriano-Gonzalez & Belda-Medina（2026）]]）。

## よくある誤解

- **「身体化されたロボットのチューターが機能するのは身体化のためである。」** **11のRALL研究（N = 595）**のメタ分析は、L2学習に大きな統合効果（**g = 0.83**）と**高い異質性**を見出し、重要なことに、それを調整したのは**相互作用**水準の特徴のみでした。形態と様態は調整せず、ハードウェアは有効成分ではないのです。
- **「AI生成の評価項目は、教員が書いた項目より劣る。」** **20人の経験豊富な教員が評価した52のEFL評価課題**の比較は、AI生成の項目と人間が開発した項目の間に**全体として有意な質の差を見出さず**、特定の次元では分岐を見出しました。全体的な同等性と特定の弱点は、改善や欠陥とは異なる主張です。
- **「LLMのフィードバックは作文を採点することしかできない。」** 談話レベルのシステムはさらに進み、**テキストを採点するのではなく欠陥を名指し**し、文ペアの関係分類が論理の飛躍や接続の欠落といった**一貫性の破れ**を局在化します。有用な出力は数値ではなく診断です。

## 関連概念

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## 関連記事
- [[chatbots-oral-proficiency-efl-systematic-review]] — 口頭の熟達におけるチャットボットの利得は、範囲と言葉の明瞭さに集中している
- [[student-ai-interaction-consecutive-interpreting-2026]] — コンピュータ支援の逐次通訳における学生と AI のやり取り
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — AI に支援された日本語学習における心理的な適応のプロファイルと移行
- [[llm-agents-5e-esl-grammar-2026]] — ESL の文法習得のための 5E の枠組みを用いた LLM エージェント（Yang, Weng & Yang 2026）
- [[gpt-item-generation-l2-listening-2026]] — L2 の聴解の項目生成に対するプロンプト工学と GPT の微調整（Aryadoust & Wong 2026）
- [[bert-discourse-english-teaching-2026]] — 英語の教授のための BERT による談話の分類

- [[ai-vs-human-assessment-efl-tpck-2026]] — EFL における AI が生成した対人間が開発した評価課題
- [[governing-unseen-ai-literacy-language-teachers-2026]] — 見えざるものを統治する：言語の教員における AI リテラシー
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — AI で強化された具現化されたロボットに支援された言語学習のメタ分析
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — 大学の外国語教育における教員が設計した AI 個別指導者：自己決定理論に基づく学習者の動機づけと省察的な学習経験の混合手法研究
- [[lukesova-clue-before-correction-2026]] — 訂正の前の手がかり：自律的な言語学習のための ChatGPT
- [[chatgpt-english-language-learning-malaysia]] — 英語の言語学習における学生の ChatGPT 経験

- [[liu-emerging-tech-tefl-review-2026]] — EFL のための新興技術のメタ分析
- [[wang-goal-setting-ai-engagement-2026]] — 目標設定理論：AI に支援された英語学習における教員の支援、達成目標、関与（中国人学生 758 人）
- [[li-language-educators-genai-review-2026]] — 生成 AI に対する言語の教育者の実践と発達
- [[asr-english-speaking-feedback-metacognition-2026]] — 大学の英語の話すことにおける ASR 技術：フィードバックの内面化とメタ認知的方策
- [[genai-writing-program-primary-l2-motivation-engagement]] — 初等教育の L2 学習者のための生成 AI に支援された作文プログラム（Lu et al. 2026）

- [[llmersion-local-first-language-learning-2026]] — LLMersion：教育的公正に向けた低費用の家庭での言語学習のためのローカル優先の AI エージェントの枠組み

- [[ai-ethics-tensions-online-pedagogy-2026]] — 語用論的な盲目：AI の言語出力は文法的には正しくても文化的に誤りうる
- [[ai-speaking-practice-communicative-readiness-2026]] — 観察された成績ではなく準備性
- [[genai-social-annotation-epistemic-network-analysis-2026]] — AI の足場かけを協働的な読解へ広げる
- [[acoustic-lexical-native-language-identification-learners-2026]] — L1の識別では、音声がゼロショットのGPT-4o文字起こし分類器を上回る（Ulusluら 2026）
