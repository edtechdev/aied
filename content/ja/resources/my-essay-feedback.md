---
title: "MyEssayFeedback"
created: "2026-11-12T11:33:00-05:00"
updated: "2026-11-12T11:33:00-05:00"
type: resource
summary: "大学のエッセイ向けの、教員が統制する AI フィードバック・プラットフォーム。200 種類以上の OER ライブラリから選ぶフィードバック・プロンプト、各 AI 提案に対する学生の構造化された省察、AI によるクラス要約付きの教員ダッシュボード、Canvas、Blackboard、Moodle との LTI 連携を備えます。"
url: https://myessayfeedback.ai/
author: "Eric Kean"
resource_type: [software, prompt or gem library]
access: [freemium]
last_verified: "2026-11-12"
foundations: [ai-literacy, human-ai-collaboration]
pedagogy: [metacognition, self-regulated-learning]
assessment: [ai-feedback-quality, feedback-literacy, formative-assessment]
ethics: [ai-use-disclosure]
audience: [instructors, learners, faculty developers]
level: [higher ed]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/my-essay-feedback
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

MyEssayFeedback は、学生とモデルの間に教員を置きます。汎用チャットボットを学生に渡すのではなく、教員が課題を設定し、AI がどの種類のフィードバックを与えてよいかを選び、草稿と、AI が言ったことについて学生が書いた省察の両方を読みます。この設計は、[[feedback|AI フィードバック]]の価値が、それが始める修正の対話にあり、生み出すコメントの量にはないという賭けです。

## できること

課題を作成し、プラットフォームの [200 以上の共有プロンプトからなる OER ライブラリ](https://myessayfeedback.ai/oer/types-of-feedback-library)からフィードバックの種類を選びます。論点の展開、論証の構成、根拠、文法、文体などです。自分で書くこともできます。学生は LMS かアクセスコードで草稿を提出し、選んだ観点のフィードバックを受け取り、構造化された[[reflection|省察]]を完成させます。何を受け入れ、何に疑問を持ち、何を変えるか。教員ダッシュボードは各エッセイをフィードバックと省察の横に示し、AI が生成するクラス要約が、その集団に繰り返し現れる強みと弱みを報告するので、次の授業でそこを狙えます。[[peer-review|ピアレビュー]]は AI のループと並んで位置し、連携は LTI で Canvas、Blackboard、Moodle に接続します。

省察の段階が研究する価値のある部分です。[[ai-feedback-quality|AI フィードバック]]を答え合わせではなく判断の対象にする明示的な試みであり、コメントがそもそも草稿を変えるかを決める能力として[[feedback-literacy|フィードバックリテラシー]]研究が描くものに最も近い。ループが成績ではなく修正を中心に組まれているため、[[formative-assessment|形成的評価]]の基盤としても機能します。ただしプラットフォーム自体は採点しません。

## 対象となる人

AI フィードバックを、その内容の統制を手放さずに望む初年次ライティングの教員と英語学科、人間のチュータリングを補うライティングセンター、コースに属さず草稿への構造化されたフィードバックを求める個々の学生、ホームスクールの保護者。創設者の Eric Kean は Western Washington University で 20 年間教え、オープンな教育技術を開発しています。AI ライティングの研究が広く引用されるライティング教員 Anna Mills がプロジェクトに助言し、省察のテンプレートを書きました。

## 注記と注意点

サイトは 12,000 人以上の学生、700 以上のコース、41,000 以上のエッセイをレビューしたと報告していますが、これはベンダーによる数字で、独立した監査ではありません。FERPA 準拠、GDPR への準備、アクセシビリティも同様にベンダー自身の主張です。エッセイは Azure OpenAI を通り、モデルの訓練には使われないとサイトは述べていますが、学区はマーケティングページから受け取るのではなく、データ処理契約で確認すべきです。価格はフリーミアムで、対象によって変わります。新しい教員は最初の学期が無料（申請制、学校あたり 3 人まで）、その後は学生 1 人あたり学期約 \$12〜15、個々の学生向けにはレビュー単位の有料層があり、最初のレビューは無料です。ChatGPT Plus、Packback、Grammarly との比較表はベンダー自身のものです。PAIRR プロジェクトでの UC Davis との提携は研究協力であり、プラットフォームがライティングを改善するという公開された証拠ではありません。

## 関連する概念

- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[ai-literacy]]
