---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "無料のオープンソース（AGPL-3.0）デスクトップアプリ。AI エージェントが学習者の既存の理解を測り、目標までの依存関係マップを計画し、推論を一歩ずつ教え、練習を適応させます。命題と推論の連鎖からなる永続的な知識グラフを備え、後のセッションは最初からやり直すのではなくそれを読みます。"
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**LearnHarness** は、[[agentic-ai|エージェント支援]]による学習のためのデスクトップアプリケーションで、レッスンをトピックの一覧ではなく [[prior-knowledge|学習者がすでに理解していること]] を中心に組み立てます。プロジェクトは 4 つの動きを挙げています。**測る** — 目標が依存する考えを探って理解の終わる地点を見つける。**計画する** — 目標までの依存関係マップを導き、レッスンマップとして示す。**教える** — 予測・説明・確認のリズムで推論を一歩ずつ進め、何かを積み上げる前に混乱を修復する。**練習する** — 学習者自身のつまずきを狙った問題の連続を提供する。

## できること

特徴的な入力は思考フィールドです。学習者は答えを書くだけでなく、自分の推論と不確かさを書き出したり口述したりし、プロジェクトはこれを、正誤の記録ではなくエージェントが推論を思い描く方法として扱います。また、バックグラウンドで問いを調べ、視覚的な説明を生成し、対話的なデモンストレーションを組み立てることもできます。

蓄積されるのは、命題と推論の連鎖からなる [[knowledge-graph|知識グラフ]] で、それぞれが生まれたセッションにリンクして記録され、後の指導と練習のエージェントが文脈として読みます。ノートも取り込めます。プロジェクトによれば、グラフが保存するのは考えとつながりであり、能力の評定ではありません。

## 対象となる人

難しい教材に取り組む独立した学習者と、プロンプトと状態が検査可能な [[intelligent-tutoring|AI チューター]] がどのようなものかを見たい教員や開発者です。TypeScript で書かれ、ソースから実行でき、テストはモデル呼び出しを含まない決定的なものとして文書化されています。

## 注記と注意点

無料なのはソフトウェアであって推論ではありません。学習者はプロバイダのキー、サブスクリプション、ローカルの Claude Code CLI、または任意の OpenAI 互換エンドポイントを持ち込み、プロバイダにマークアップなしで支払います。ライブのメーターが見積もるのは既知の API コストのみです。記録、チャット、キーはプレーンファイルとしてマシン上に残りますが、モデルへのリクエスト、任意の口述、Web 調査はいずれも外部サービスに届くため、ローカル保存はオフライン処理を意味しないとプロジェクトは警告しています。Windows x64 のインストーラは署名されていないため、Windows は警告を出します。有効性の研究は報告されておらず、根拠は測定された成果ではなく示された論拠に依っています。2026 年 11 月 2 日に確認した時点で、リポジトリのスター数はおよそ 4,800 でした。

## 関連する概念

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
