---
title: "DeepTutor"
created: "2026-10-10T21:54:25-04:00"
updated: "2026-10-10T21:54:25-04:00"
type: resource
summary: "DeepTutor のエージェント型チュータリングフレームワークのオープンソース実装。チュータリング、問題生成、習熟度練習、調査、可視化を 1 つのワークスペースにまとめ、学習者の記憶を検査可能にしています。"
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**DeepTutor** は、[[intelligent-tutoring|DeepTutor の研究]]で評価されたチュータリングフレームワークのオープンソース実装であり、その論文の範囲を大きく超えて、汎用的なエージェント・ネイティブな学習ワークスペースへと成長しています。チュータリング、問題解決、クイズ生成、習熟度練習、調査、可視化が 1 つの能力ランタイムと 1 つのセッションコンテキストを共有しているため、問題を解いている間に構築された学習者プロファイルが、その後の説明や練習問題の条件づけを行います。

## できること

10 種類のモード — Chat、Ask Questions、Quiz、Research、Visualize、Solve、Course Study、Mastery Path、Immersive Reading、Immersive Watching — が同じランタイム上で動作し、再利用可能なナレッジベース、書籍、下書き、ノート、問題集、ペルソナを利用します。検索は意図的にマルチエンジン構成になっています。LlamaIndex、PageIndex、GraphRAG、LightRAG 上に構築されたバージョン管理付き RAG ライブラリ、またはリモートの LightRAG サーバー、自己ホストの WeKnora ベース、Tencent IMA または MarginNote ライブラリ、連携した Obsidian ヴォールトが使えます。記憶は不透明ではなく検査可能です。L1 トレース、L2 の表層的な要約、L3 の統合は閲覧も編集もでき、Memory Graph が各要約をその裏付けとなる証拠に結び付けています。`deeptutor` バイナリはターミナル REPL を提供し、ツールとして駆動したいエージェントのために NDJSON をストリーム配信します。EduHub コミュニティはインストール可能なスキルを配布しています。

## 対象となる人

論文が報告するフレームワークの実運用可能なバージョンを求める高等教育の教育者と研究者、プラグ可能なランタイムの上に構築する開発者、そして自分のインスタンスを運用する意思のある自己主導型の学習者です。ドキュメントは deeptutor.info にあります。

## 注記

ライセンスは Apache 2.0 で、2026 年 9 時点のバージョンは 1.6.9、GitHub スター数は約 40,000 です。その背景にある公開済みの評価 — TutorBench ベンチマークにおける、強力なベースラインに対するパーソナライズ指標で平均 10.8% の改善、および 5 つのバックボーンモデルにわたる一般的なエージェント推論で 29.4% の向上 — は [[zhao-deeptutor-agentic-personalized-tutoring-2026|記事ページ]]に要約されており、そこに挙げられた限界はここにも当てはまります。他のオープンソース AI スタックと同様、モデルプロバイダのキーは利用者自身が用意し、デスクトップまたはサーバーへのデプロイには Python 3.11 と Node が必要です。

## 関連する概念
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
