---
connected_resources: [teacherserver]
title: 特別支援教育
created: "2026-10-10T22:54:28-04:00"
updated: "2026-10-10T22:54:28-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **特別支援教育**——認知、身体、感覚、神経発達上の違いを持つ学習者に対する教育の設計と提供です。本知識ベースにおける[[ai-education|教育におけるAI]]の[[research-methods-aied|研究]]は、[[personalized-learning|パーソナライゼーション]]、[[scaffolding|適応的な足場かけ]]、そしてアクセシブルなインターフェースを通じて、AI ツールが多様な学習者のニーズをいかに支えられるかを探究すると同時に、障害のある学習者を見落としたり周縁化したりする[[ai-technologies|AI システム]]のリスクも検討しています。

> ⚠️ **特別支援教育は主として[[k-12|K-12]]の用語です。** これは米国の障害者教育法（IDEA）と、初等・中等教育における特別支援教育サービスを規定する権利保障型の個別教育計画（IEP）制度に根ざしています。[[higher-ed|高等教育]]——そして K-12 においても次第に——では、より一般的な枠組みは、**[[universal-design-for-learning|ユニバーサルデザインによる学習]]**（すべての学習者に利益をもたらす先行的な設計枠組み）であり、[[accessibility]]や[[assistive-technology]]と並んで用いられ、「特別教育」ではありません。K-12 の特別教育に関する記事と大学の UDL に関する記事は、重なり合うが別個の文脈を扱っています。知識ベースが両方を保持しているのは、研究文献が両方にまたがるためです。高等教育と障害のある学習者に関する出典については、通常は special-education よりも[[universal-design-for-learning]]、[[accessibility]]、[[inclusive-learning]]へ結び付ける方が適切です。

## 検討すべき問い

- このページは、「特別教育」が主として IDEA と IEP に根ざした K-12・権利保障型の用語である一方、高等教育ではユニバーサルデザインによる学習とアクセシビリティがより頻繁に語られると強調しています。なぜこれらの文脈は異なるのでしょうか。その違いは何を明らかにしているでしょうか。
- パーソナライゼーションという AI の約束は、多様なニーズを持つ学習者のためにあるかのように見えます。しかしシステムが「個人の認知プロファイル」に適応できるとしたら、障害のモデルが粗すぎるか、そもそも欠けている場合に何が起こりうるでしょうか。
- 研究には、特定の障害プロファイル（たとえばディスレクシアのある学習者や、ろう・難聴の学習者）のために設計された AI ツールが含まれています。狭いプロファイルに向けて設計することと、最初からすべての学習者のために普遍的（ユニバーサル）に設計することには、どのようなリスクがあるでしょうか。
- 「平均的な」学習者のために作られた AI システムが、意図せずとも障害のある学習者を見落としたり周縁化したりしてしまうことは、どのように起こりうるでしょうか。それを防ぐのは誰の責任でしょうか。
- AI ツールが障害のある学習者を単に便宜的に受け入れるのではなく、真に包摂するとはどういうことでしょうか。実践においてその違いをどう見分けるでしょうか。

## はじめに

特別教育は、AI のパーソナライゼーションと適応の能力が特に大きな期待を寄せられる領域です。画一的な教育とは異なり、[[intelligent-tutoring|AI チューター]]は理論上、個人の認知プロファイル、コミュニケーション・ニーズ、学習のペースに適応できます。本知識ベースの記事は、特定の障害プロファイルのための AI、神経多様性のある学習者の経験、AI と障害に関する批判的視点にわたります。

**障害別の AI チューリング**は、特定の学習者のニーズに合わせて AI を調整します。**[[special-r1-rl-special-education|Special-R1]]**は、[[reinforcement-learning|強化学習]]を拡張し、5 つの障害プロファイルにわたって認知およびコミュニケーションの多様性をモデル化し、ペルソナを意識したプロンプトと思考報酬を用いて各学習者に対するチューターの応答を形成します。**[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**は、ディスレクシアのある学習者が AI ツールをどう経験するかを分析し、識字支援における AI の価値と、解消されないアクセシビリティの障壁の両方を明らかにしました。**[[llm-question-generation-deaf-hard-of-hearing-2026|Chen ら]]**は、[[accessibility|ろう・難聴の学習者]]向けの[[llm]]駆動の作問システムを設計し、ビジュアル質問と感情質問の戦略を導入し、対象となるコミュニティと反復的に問いを精緻化することで、テキストベースの AI プロンプトと手話を第一言語とする学習者の間の不整合を克服しようとしました。**[[embodied-string-learning-blindness-low-vision-musicians]]**は、盲・弱視の音楽家とともに非視覚的な学習戦略を開発し、障害当事者が主導する[[embodied-learning|身体的]]設計を中心に据えました。これらは[[inclusive-learning]]や[[neurodiversity]]につながります。

**神経多様性のある学習者の経験**は、自閉症の学生と ADHD の学生を中心に据えます。**[[neurodivergent-computing-students|Zastudil ら]]**は、神経多様性のある情報科学の学生には構造化された課題、少人数で固定されたチーム、明示的な役割定義が必要であることを見出しました——これは[[collaborative-learning]]ツールが対処しなければならない設計要件です。**[[adhd-video-segmentation-computing-education]]**は、AI で区間分割された動画によって ADHD の成績差が解消されたことを示しました。いずれも[[learning-design]]や[[universal-design-for-learning]]につながります。

**批判的視点**は、AI が障害のある学習者を周縁化する仕組みを検討します。**[[genai-minoritized-knowledges-disability|Tali-Otmani]]**は、西洋中心の訓練データのために AI システムが障害を中心とした知を積極的に周縁化すると論じ、[[equity-in-ai-education]]が懸念する認識論的公正につなげます。

**ディスレクシアにおける検出・支援・パーソナライズ学習にわたる AI。** 2026年の学際的な[[meta-analysis-systematic-review|システマティックレビュー]]（Dabaghi、D'Urso & Sciarrone、PRISMA 準拠、2018–2024年、n=72）は、AI が教育においてディスレクシアのある学生をいかに支援するかを整理し、検出・支援的サポート・パーソナライズされた学習に AI が用いられていることを見出しました——ただしこれらの流れは統合されるのではなく並行して進化しており、統合された教育理論よりも技術的な機会に駆動されています。機械学習ベースの支援教育ツールは 5 つの領域（特定の応用、動機づけ、パーソナライゼーション、推薦、一般的支援）に分類されますが、技術的な性能と分類精度を重視する一方で、生態学的妥当性や教室での実際の導入を見落としています。検出研究（EEG、視線追跡、機械学習モデル）は早期介入を優先し、診断の見込みを示しますが、専門的な装置と管理された環境を必要とすることが多く、通常の学校環境での拡張性とアクセシビリティを制限しています。未解決の課題には、実験的検証の限界、拡張性、機微な学生データに関する[[ethics]]/プライバシーの懸念、教員支援と研修の不足、言語的・文化的障壁（研究の大部分は英語圏の集団を対象としています）が含まれます。

**学習障害のある学生（SWLDs）における認知的オフローディング。** AI と学習障害のある学生に関する*Learning Disability Quarterly*の特別シリーズに掲げられた概念レビュー、[[seung-basham-cognitive-offloading-swld-2026|Seung & Basham（2026年）]]は、[[cognitive-offloading]]の視点から SWLDs の[[generative-ai|生成 AI]]利用を再構成します。彼らは、生成 AI が**補償的助言にも近道にもなりうる**と論じます。それは、オフローディングの決定が、SWLDs の認知的・[[motivation|動機づけ的な]]プロファイル（実行機能とワーキングメモリの困難、認知的負荷の高さ、努力回避的な成績目標、学業自己効力感の低さ、生成 AI に対する過大な期待）や授業設計とどう相互作用するかに依存するからです。読み書きについては、生成 AI はアクセスへの足場かけ（テキストの平易化、要約、[[multimodal]]な出力、計画、下書き、推敲のフィードバック）を行いつつ、高次の[[student-engagement|関与]]を保つことができます——しかし過度のオフローディングは、もともともろいこれらの学習者にとっての理解・計画・モニタリングの過程を迂回するリスクを伴い、「[[metacognition|メタ認知的]]な怠惰」を助長し、領域をまたいで識字の困難を悪化させます。この論文は、**教育的[[guardrails]]**こそが鍵となる調整要因であると位置づけ、戦略的なオフローディングの[[teacher-role|指導]]、ツールへの信頼を適切に較正するための[[ai-literacy]]の育成、[[self-efficacy]]を高める達成経験の積み重ね、および技能の発達を代替よりも優先する IEP の目標との整合——を推奨しています。これはオフローディングの公正（equity）の次元に知識ベースの特別教育の射程を広げます。アクセスの障壁を下げるのと同じツールが、無防備なままでは SWLDs が最も必要とする練習の代用品になりうるのです。

**AI 生成の介入コンテンツには、生成前の統制が必要である——事後の検討だけでは足りません。** [[adapted-stories-social-story-intervention-2026|Enkhjargal ら（2026年）]]は、共同設計されたソーシャルストーリーツールを実践者が高い有用性と評価した（SUS 86.8）にもかかわらず、画像が一般的に西洋的であり、行動トラッカーが目標に紐づいた臨床的判断と不整合であったと述べたことを見出しました——これらは彼らが生成前に設定していたはずの制約です。

## 特別教育の教員への示唆

- **対象となる学習者・コミュニティと AI を共同設計する。** [[llm-question-generation-deaf-hard-of-hearing-2026|ろう・難聴の学習者のための作問]]は、テキストベースのプロンプトと手話を第一言語とする学習者の間の隔たりを橋渡しするために、コミュニティと反復的に AI を精緻化することの価値を示しています——AI が学習者に適合すると思い込むのではなく、学習者とそのコミュニティを設計に関与させましょう。
- **汎用的なアクセシビリティではなく、特定の障害プロファイルに AI を適合させる。** [[special-r1-rl-special-education|Special-R1]]は障害プロファイルにわたる認知とコミュニケーションの多様性をモデル化し、[[dyslexlens-dyslexic-learners-ai|DysLexLens]]はディスレクシアのある学習者が直面する識字上の価値と解消されないアクセシビリティの障壁の両方を記録しています——各学習者のプロファイルに沿ったツールを選び、満たされない障壁に注意を払いましょう。
- **神経多様性のある学習者のための協働を構造化する。** [[neurodivergent-computing-students|神経多様性のある情報科学の学生]]には、構造化された課題、少人数で固定されたチーム、明示的な役割が必要です——AI を介した協働活動にもこれらの設計要件を適用しましょう。
- **AI を使って成績差を（広げるのではなく）縮める。** [[adhd-video-segmentation-computing-education|AI で区間分割された動画]]は ADHD の成績差を解消しました——単に自動化するのではなく、成果を均等化するという証拠がある場所に適応的な AI を導入しましょう。
- **障害当事者が主導する身体的設計を中心に据える。** [[embodied-string-learning-blindness-low-vision-musicians|盲・弱視の音楽家]]の研究は、非視覚的で当事者が主導する戦略が既定の視覚的インターフェースを上回ることを示しています——障害のある学習者の専門性を生かして AI を構築し適応させましょう。
- **認識論的な周縁化に警戒する。** [[genai-minoritized-knowledges-disability|批判的視点]]は、西洋中心の訓練データが障害を中心とした知を周縁化しうると警告しています——[[equity-in-ai-education]]と並んで、AI のコンテンツとツールを認識論的公正の観点から監査しましょう。

## 関連する概念

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## 関連する記事

- [[seung-basham-cognitive-offloading-swld-2026]] — 学習障害のある学生のための生成 AI による認知的オフローディング
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — ろう・難聴の学習者のための LLM 駆動の作問
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 生成 AI、バーチャルリアリティ、そしてその先へ：高等教育における神経多様性のある学生のためのデジタル支援技術に関するスコーピングレビュー
- [[adapted-stories-social-story-intervention-2026]] — 特別教育のための AI 支援ソーシャルストーリー介入：AdaptED Stories の設計
