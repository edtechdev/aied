---
title: "LESSON.md"
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: resource
summary: "ブロックベースの eラーニングレッスン向けのオープンなプレーンテキスト形式。その形式でレッスン・評価・コースバンドル全体を記述するエージェントスキルも伴います。"
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**LESSON.md** はブロックベースの eラーニングコンテンツのためのオープンな形式です。YAML フロントマターを持ち、テキスト・画像・理解度チェックのための `:::` ディレクティブを用いる Markdown ファイルであり、人間が読めてどのツールでも解析できます。これが存在するのは、コースコンテンツが通常 1 つのオーサリングツールの中に閉じ込められていることと、[[llm|大規模言語モデル]]が実際に読めるレッスンにしか手を貸せないからです。

## できること

どのテキストエディタでもレッスンを書き、その形式をサポートするどのツールにも、コピー＆ペーストや書式のやり直しなしに読み込めます。対話的な要素 — 試行回数制限や回答単位のフィードバックを備えた多肢選択の理解度チェック — は GUI ではなく単純なプロパティとして表現されます。バンドルのルートに置いた `ASSESSMENT.md` は、そのコースの採点対象となる [[assessment|評価]]になります。プロジェクトはまた `lesson-md` スキルを提供しており、これによって Claude、Codex、その他の [[agentic-ai|エージェント]]に形式を教えられるため、コースを平易な言葉で記述すれば、レッスン・評価・完全なバンドルが返ってきます。

## 対象となる人

コンテンツをツールの変更に耐えさせたいインストラクショナルデザイナーやコース制作者、利用者がすでに理解しているインポート・エクスポート形式を求める eラーニングベンダー、そして読みやすい形式の上に AI 支援オーサリングを構築しようとするすべての人です。貢献者には LXD Integral の Dan Bashaw が含まれ、形式には v1.8 までの公開チェンジログがあります。

## 関連する概念

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
