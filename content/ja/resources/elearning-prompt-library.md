---
title: "eLearning プロンプト ライブラリ"
created: "2026-11-23T09:12:00-05:00"
updated: "2026-11-23T13:10:00-05:00"
type: resource
summary: "Sunil Iyer による MIT ライセンスの GitHub コレクション。インストラクショナル・デザイナーと eLearning 開発者向けの、コピー＆ペーストできる AI プロンプト 22 件を、それぞれ適用する学習理論ごとにタグ付けして収録しています。"
url: https://github.com/linuxsunil/elearning-prompt-library
source_code: https://github.com/linuxsunil/elearning-prompt-library
author: "Sunil Iyer"
author_url: https://github.com/linuxsunil
resource_type: [prompt or gem library]
access: [free]
license: "MIT"
last_verified: "2026-11-23"
foundations: [ai-literacy, learning-design]
pedagogy: [learning-theories]
technology: [generative-ai, prompt-engineering]
audience: [instructional designers, educational technology developers, curriculum designers]
connected_resources: []
translation_of: resources/elearning-prompt-library
source_updated: "2026-11-23T13:10:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [prompt-engineering, learning-design, learning-theories, generative-ai]
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**eLearning プロンプト ライブラリ** は Sunil Iyer による GitHub リポジトリで、インストラクショナル・デザイナー、eLearning 開発者、L&D プロジェクト・マネージャー向けに書かれた [[prompt-engineering|AI プロンプト]] を集めています。22 個のプロンプトファイルが 7 つのカテゴリ・フォルダに分かれています。インストラクショナル・デザイン、コンテンツ開発、Articulate Storyline と Rise、評価、プロジェクト管理、QA とレビュー、AI メディアです。各ファイルは角括弧のプレースホルダーを伴うコピー＆ペースト用のブロックで、それぞれが適用する学習理論を名乗っています。付属のリファレンス文書には 6 つの系統に分かれた 60 の理論が挙げられています。著者の問題意識は、汎用のプロンプトは「教育らしく見えるが、人々の学び方に根ざしていない」コンテンツを生むという点にあり、それぞれのプロンプトに名指しの理論をタグ付けすることが、この一式を使えるものにしているというところにあります。

## できること

ライブラリはツール別ではなく、制作作業別に整理されています。インストラクショナル・デザインのプロンプトは、[[bloom-taxonomy|Bloom のタキソノミー]]に照らしたギャップ分析、認知負荷の監査、SME のメモから授業案への変換、理論の選択、Gagné の 9 出来事モジュールの設計、アクション・マッピング、UDL アクセシビリティ監査を扱います。コンテンツのプロンプトは、ストーリーボードの骨組み、ナレーション・スクリプト、ARCS モチベーションの見直しを作ります。Storyline と Rise のプロンプトはトリガー論理、Rise ブロックの順序、HTML5 インタラクション仕様に取り組み、評価のプロンプトは分岐シナリオ、問題バンク、Kirkpatrick 評価計画を扱います。そしてプロジェクト管理の 2 件と QA の 2 件が一式を締めくくります。

プロンプトはツール非依存で、README は Claude、ChatGPT、Gemini のいずれでも動作すると記しています。貢献ガイドでは、各作者に反復のヒントを載せた短い「Notes」を 3 〜 5 件求めています。

## 対象となる人

空のプロンプト欄ではなく、理論をタグ付けされた出発点を求めるインストラクショナル・デザイナーと教育技術開発者、Articulate Rise や Storyline のコースを作る L&D チームが対象です。どの理論が案件に合うかすでにわかっていて、プロンプトの足場が欲しい人に向いています。成人と職場学習を念頭に置いた専門制作のライブラリであり、学生向けの教室ツールではありません。

## 注意事項

- **件数が食い違っています。** README のバッジとカテゴリ表はどちらも 23 件と言っていますが、リポジトリには Markdown のプロンプトファイルが 22 件あり、自前のインデックス表も 22 で止まっています。
- **理論のタグ付けは著者自身の対応づけです。** プロンプトが名乗った理論を実際に適用していると裏づけるものはありません。「エビデンスに基づく」「制作就緒」は著者の主張であり、各出力はコースに入れる前に専門内容の確認が必要です。
- **ごく若く、未検証です。** 貢献者 1 名、スター 2 つ、2026 年 11 月時点で公開リリースなし、リポジトリの作成は 2026 年 11 月 15 日 —— 維持管理されたコレクションではなく、数日しか経っていません。採用数の計数は 2026 年 11 月 23 日時点の値です。
- **MIT ライセンス。** 帰属を条件に、商用も含めて自由に複製・改変できます。
