---
title: "Claw-ED"
created: "2026-10-10T22:08:00-04:00"
updated: "2026-10-10T22:08:00-04:00"
type: resource
summary: "自分のカリキュラムから編集可能な授業案・学生用教材・スライドを作ってくれる、ローカル重視の AI ティーチングアシスタント。モデルは自分で選べます。"
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Claw-ED** は、自分のカリキュラム教材から授業案を下書きする、ローカル重視のティーチングアシスタントです。教師は自分の資料を取り込み、授業をリクエストすると、編集可能な下書きと、学生向け教材、スライドを受け取ります。特定の一社のモデルではなく、教師が選んだモデルで生成されます。

## できること

作業の流れは、取り込み → 下書き → 確認 → 書き出しとなっており、下書きは完成した配布物ではなく、教師が手を加えるための出発点として扱われます。授業生成のジョブはキューに入れられ再開可能なので、途中で失敗した長い生成も最初からやり直さずに続けられます。生成物はダウンロードできます。MCP サーバーを通じてツールを [[agentic-ai|エージェント]] に公開することもでき、Google ドライブにも接続できるため、学校が既存のストレージや日程管理に組み込めます。

このプロジェクトは意図的にモデルに依存しない設計です。ローカルの Ollama モデル、低コストの OpenRouter 経路、ホスト型の選択肢を並べて文書化しており、モデルガイドには日付が付されているため、そこに書かれた推奨が教師が評価した品質の判断ではなく、カタログに基づく出発点であることが分かります。

## 注記

このソフトウェアは無料で、オリジナルのコードは MIT ライセンスの [[open-source|オープンソース]] です（サードパーティ製のコンポーネントはそれぞれの条件に従います）。ホスト型モデルを使う場合は、自分のモデル推論費用を負担することになります。プロジェクトは自らを「教師が確認したベータ版」と位置づけ、README で「CI を通ることは、実際のモデルでの教育の質を保証するものではない」とはっきり述べています。これはこの分野で緑のテストスイートをどう読むべきかの正しい姿勢です。CI が検証しているのはソフトウェアであって、[[pedagogy|教育]] ではありません。MacxLabs が保守しており、教師が確認済みの見本授業の提供を歓迎しています。

## 関連する概念
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
