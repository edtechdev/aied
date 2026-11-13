---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "ウォートンの Generative AI Labs によるオープンソースのオーサリングシステム。教育者への構造化インタビューを、専用のメンター・練習・フィードバックの各エージェントを備えた、実行可能で適応型の学習シミュレーションに変えます。"
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

Primer は、レッスンをプログラムする代わりに AI に説明することで教育用の [[simulation|シミュレーション]] を構築する [[open-source|オープンソースのシステム]] です。シミュレーションが何を教えるかは教育者の判断が決めます。インタビューが、教員がレッスンと学生について知っていることを引き出し、設計文書がその知識を検討可能な形にし、教育者が承認するまで何も構築されません。

## できること

インタビューは一度に一つの質問を進めます。レッスン、学生のレベルと事前知識、よくある誤解、教員のアプローチ、そして成功をどう評価するかです。教育者は話しても入力してもよく、シラバス、レッスンプラン、ルーブリックをアップロードできます。返ってくるのは、目標、シナリオの流れ、登場人物、利害、適応ロジックを扱う設計文書で、教育者はレッスンプランを扱うのと同じようにそれを修正し承認します。その後、Intake、Design、Casting Director、Image Generation、Experience Builder の 5 つのエージェントが構築し、Experience Builder が 1 人の学生あるいはクラス全体向けに成果物を組み立てます。

実行時には 3 つのエージェントが学生に向き合います。メンターは事前知識を活性化し、誤解を表面化させます。練習エージェントはロールプレイの相手役、または教え返し（teachback）の生徒役を演じ、学生が概念を説明し、問い返されると説明を修正します。フィードバックエージェントは文字起こしに基づいて、特定の場面と、学びがシナリオの外へどう持ち越されるかを話し合います。各エージェントにはシミュレーション世界のキャラクターと、目標を追跡し証拠を集める指導レイヤーがあり、教育者は個別レポートと集計レポートを受け取ります。

## 対象となる人

教員、インストラクショナルデザイナー、ファカルティディベロッパーは、コードを書かずにレッスンを詳細に説明できます。教育者をループに入れたオーサリングや [[agentic-ai|マルチエージェントのワークフロー]] を研究する研究者は、点検できる動作するシステムを得られ、開発者は拡張できます。プロンプト、テンプレート、チェックリスト、オーケストレーションのパターン、TypeScript のコードがすべてオープンソースだからです。

## 注記と注意点

著者らは Primer を、検証済みの教室向け製品ではなく実験的なプロトタイプと呼んでいます。教室での学習介入として評価されたことはなく、FERPA、COPPA、州の学生プライバシー法、学区の方針についてレビューした者もいないため、学生とともに使う機関がそのレビューの責任を負います。ソフトウェアは MIT ライセンスで無料ですが、シミュレーションの実行にはモデルへのアクセスが必要で、費用がかかります。モデル非依存で、ローカルモデルやオープンウェイトのモデルでも動くため、プライバシー規制が厳しい場所にも配備できます。アーキテクチャとプロンプトについてのホワイトペーパーがプロジェクトページからリンクされています。2026 年 11 月の確認時点で、リポジトリには 98 のスターと 16 のフォークがありました。

## 関連する概念

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
