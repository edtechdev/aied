---
title: ハルシネーション・リスク
created: "2026-10-10T22:38:13-04:00"
updated: "2026-10-10T22:38:13-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **ハルシネーション・リスク**とは、AIシステムが教育の文脈で事実としては誤っているか、でっち上げられた内容を、もっともらしく生成してしまう危険のことです。そこでは、そうした誤りが[[learners|学習者]]を誤導し、[[trust|信頼]]を損ない、無効な評価を生み出しえます。教育においてハルシネーションがとくに重大なのは、学生はAIの誤りを検出する領域知識を欠いていることがあり、教員は権威ありそうに見えるが根拠のないAI生成の診断やフィードバックに依存しうるからです。

## 考えるための問い

- 学生はしばしばAIの誤りを見抜く領域知識を欠いており、教員は権威ありそうに響くAIの診断を信頼しがちです。AIと学習者の間にあるこの知識の非対称性は、ハルシネーションを教育においてなぜとくに危険なものにするでしょうか。
- ある研究で、学生の手書きの数学を診断するAIが、存在しない証拠の引用をでっち上げながら自信を示すことができることがわかりました。AIが確信ありげに語り「証拠」を挙げるとき、何があなたを立ち止まらせ、検証へと向かわせるでしょうか。
- [[intelligent-tutoring|AIチューター]]が誤った解を過剰に妥当とし、有効だが最適でない推論を過剈に却下するとしたら、それを信頼する学生と教員にどのような長期的影響があるでしょうか。
- このページは、人間イン・ザ・ループの審査、証拠を意識した確信度の較正、検証済みの情報源への接地を緩和策として提案しています。あなた自身の文脈でどれが最も実現可能に思え、それでもなお捉え損ねうるものは何でしょうか。
- ハルシネーションは過度の依存とどう相互作用するでしょうか。なぜAIの誤りは、懐疑的なときよりも、利用者が出力を無批判に信頼しているときに最も危険なのでしょうか。
- あなたが自分の学生のために[[ai-feedback-quality|AIフィードバック]]ツールを設計するとしたら、もっともらしいが誤った出力から守るためにどんな安全策を必須とし、それらが機能していることをどう確かめるでしょうか。

## はじめに

教育におけるAIのハルシネーションは、このナレッジベースの記事に記録されたいくつかの形を取ります。[[assessment|学生の評価]]におけるでっち上げの証拠、学習者の知識の過信に基づく誤診断、そして学生が真実として受け入れるもっともらしく聞こえるが誤った説明です。教育においてリスクが増幅されるのは、AIと学習者の間の知識の非対称性により、学習者がAIの出力を検証する立場に乏しいからです。さらに一つの状況は、教科書の代わりとなるAI生成のコース教材です。商業的な教科書をこのように置き換えた大学院のコースでは、記録された4,487ページのうち約0.80%にしかAPA形式の本文中引用がなく、DOI文字列は事実上存在しなかったため、ほとんどの主張は当の資料の内部から検証できませんでした([[sidorkin-ai-generated-course-readings-2026|Sidorkin 2026]])。この追跡可能性のギャップは、誤った答えとは異なります。テキストは権威ありと読み取れるのに、内的な確認手段をほとんど提供しないからです。

125研究に及ぶレビューは、頻度と検出のギャップに幅を与えています。ハルシネーション率は10–40%で、医学生がAIの誤りを検出できたのは44–55%にとどまりました([[genai-higher-education-systematic-review-2026|Rathnayake 2026]])。

**評価のハルシネーション**はとくに有害です。**[[llm-cognitive-diagnosis-handwritten-math|MathCog]]**は、LLMが認知スキルを診断する際に学生の手書きに存在しない証拠の引用をでっち上げ、誤った診断の58.5%に証拠に基づく確信の虚偽の主張が伴っていたことを見出しました。**[[llm-fallacy-misattribution]]**は、[[llm|LLM]]の推論における証拠の体系的な過剰帰属を記録しました——モデルは存在しない証拠的支えを主張します。どちらも[[ai-ed-evaluation|AIEDの評価]]と[[assessment-validity|評価の妥当性]]に関する[[knowledge-tracing|知識追跡]]の関心事につながります。[[ivory-psychology-assessment-integrity-2026|Ivory et al.(2026)]]は、AIの出力が点を付けられるときに可視になる2つの失敗様式を加えています。評定を生き延びるでっち上げの細部——存在しない査読済み論文(解決不能なDOI付きで完全なもの)と、出典が329と言っていたのに378と報告された標本の大きさ——そして単一の応答内での自己矛盾です。モデルは正しい選択肢へ推論を進めたのち、締めの要約で別のものを報告しました。参考文献リストは現在、正確さではなく書式のために点を付けられているため、この種の誤りは合格点に達しながら、同じツールで復習する学生を誤導しています。

評価設計のパイロットで、[[authentic-assessments-generative-ai-pilot-2026|Paula et al.(2026)]]は、でっち上げの参考文献と現実的でない所要時間の見積もりが、繰り返しのプロンプトや相当の学術的改訂に耐えて残ることを見出しました——学生の成果物ではなく、教育者向けの草案作成ツールにおけるハルシネーションです。

**戦略的な[[misconceptions|誤概念]]**は、顕在的なハルシネーションのより繊細な親類です。[[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al.(2026)]]は、7つのオープンウェイト・モデルに、35のコンピュータサイエンス中核概念について「[[socratic-method|ソクラテス式]]の罠」——流暢で権威ありながら、繊細で分野固有の誤りの上に成り立つ説明——を生成させ、3人の分野の専門家が指示された241セグメントのうち221(91.7%)を戦略的な誤概念として確認し、CSの分野間に有意差はありませんでした。誤りは主に概念的であって事実的ではなく(66.5%対33.5%)、純粋に論理的なものは一つもなく、中程度から高度に説得力があると評価され(5件法で M = 3.71)、モデルの同一性が分散の43%を説明しました。個々の言明は正しくても、言明間の関係が誤っていることがあるため、ファクトチェックは不十分であり、著者らは[[ai-literacy|学習者]]には概念的検証と心的モデルの検証が必要だと論じています。また著者らは、この率は敵対的な[[prompt-engineering|プロンプト付け]]における能力を測定するものであって、通常の利用におけるそうした誤りの頻度ではないこと、そして学生はテストされなかったため、欺瞞も学習の成果も測定されていないことを注意深く指摘しています。

**でっち上げられたのではなく操作された証拠。** [[automated-assessment|自動採点]]における関連する失敗様式は、外部から動かされた出力です。[[humble-prompt-injection-ai-grading-red-team-2026|Humble(2026)]]は、日常的なAI採点のワークフローにレッドチームを適用し、提出ファイルの中に隠された指示が、目に見える警告なしに不合格の小論文の成績を上げることを見出しました。一方の戦略では9回中9回、もう一方では18回中17回でした。2つの細部が[[trust-calibration|信頼]]に関わります。検出されたインジェクションは、チャットを黙って無効化することで阻止され、利用者には決して報告されませんでした。また、ツールが公式の課題の指示にのみ従うと表明したある実行では、同じファイルを6回再実行しても成績は上がったままでした。このようにして得られた評定は、[[assessment-validity|妥当性]]の主張を一切帯びず、操作は永続的な痕跡を残さないため、[[human-in-the-loop-ai|教員]]は、見えないよう設計された出力における唯一の実効的な確認であり続けます。

そうした操作への防御には、それ自身のトレードオフが伴います。多層のガードレール・パイプラインは46.34%のインジェクションを成功させ、Prompt Guardは38.48%を成功させ、一方でNeMo Guardrailsはすべての攻撃を阻止したものの、無害な学生の問いの16.22%にフラグを立てました——チューターにおいてそれ自身が教育学的な害である偽陽性率です([[prompt-injection-defenses-educational-llm-tutors|Maiorano 2026]])。

**指導のハルシネーション**は学習に直接影響します。**[[yasir-llm-tutoring-agents-2026|(Yasir et al.)]]**は、LLMが誤った解を過剰に妥当とし、有効だが最適でない推論を過剰に却下することを見出しました——学生と教員の双方を誤導するであろう体系的な失敗です。**[[eduframetrap-llm-sycophancy-educational-safety]]**と**[[eduguard-safe-rag-llm-tutor]]**は、教育におけるLLMの安全性のメカニズムを扱っています。これらのリスクは[[pedagogical-safety|教育学的安全性]]と[[human-in-the-loop-ai|人間イン・ザ・ループ]]の要件につながります。

**緩和のアプローチ**には、AIが[[teacher-role|教員]]の判断を置き換えるのではなく支える[[human-in-the-loop-ai|人間イン・ザ・ループ]]の設計、証拠の質に基づいて確信度を較正する証拠を意識したアーキテクチャ(MathCogが提唱)、そしてLLMの出力を検証済みの情報源に制約する[[rag|RAG]]に基づく接地があります。[[cognitive-offloading|過度の依存]]の概念は密接に関連しています——ハルシネーションは、利用者がAIの出力を無批判に信頼するときに最も危険です。[[sidorkin-ai-generated-course-readings-2026|Sidorkin(2026)]]は、緩和の積み重ねが十分に覆わない失敗様式を加えます。過度に具体的な制度的な主張であり、記録されたページの約1.03%が「Sacramento State」のような名前のあるキャンパスと、改訂された留任・昇任の規則やCSU Executive Ordersに関する断定的な政策動詞を結びつけ、そのいずれもテキストからは検証できません。具体性がこれを高価にするものです。でっち上げの局所的な細部は、読者のもっともらしさのチェックを生き延びるほど正確に見えるからです。そして研究が提案する処方箋は、技術的ではなく手続き的なものです。生成を教員の審査下での草案作成として扱い、次に情報源を検索拡張の設計へと精選することです。

**標識を付けられた信頼性の低さは、報告される依存を上げるのではなく下げた。** 546人の参加者が、でっち上げられた情報を含むと標識を付けられたものと、検証済みで正確だと標識を付けられたものと同じGAIの対話を読んだとき、でっち上げの標識は、[[trust|信頼]]と知覚された統制可能性を下げ、認知的 dissonance と不快感を高め、そして*より低い*依存のスコア(M = 2.935 対 3.254)を伴って生じました([[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]])。この結果は、このページの過度の依存の論理に条件を付けます。ある出力がでっち上げかもしれないと見ることは、それに倚りかかり続けることと同じではないのです。

## 関連概念

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## 関連記事

- [[ivory-psychology-assessment-integrity-2026]] — 合格可能な学生の成果物の中のでっち上げの引用と自己矛盾する出力(Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS:概念的レベルで誤った、流暢でもっともらしい説明(Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 隠されたプロンプト・インジェクションがAI採点の評定を検出されずに上げ、検出された攻撃は報告されない(Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — 生成AIを用いた真正な評価の設計:高等教育における評価Authentifireのパイロット研究
- [[frontiers-gai-hallucination-dependence-2026]] — GAIの対話をでっち上げとして標識づけることは、信頼と依存を共に下げた
