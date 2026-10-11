---
title: "LiaScript"
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: resource
summary: "プレーンテキストファイルをブラウザ上の対話型コースに変えるオープンな Markdown 方言。クイズと実行可能なコードを備え、それでコースを構築するためのマルチエージェントアシスタントも提供します。"
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**LiaScript** は、拡張された Markdown 方言と、それを解釈するためのインタプリタです。プレーンテキストファイル 1 つが対話型コースになります。同じドキュメントを、物語として読むことも、スライドとして映すことも、コースとして学ぶこともでき、すべてブラウザ内で完結します。書くにも読むにも、インストールは何も必要ありません。

## できること

クイズは教師が期待する形式を備え、多肢選択、マトリックス形式の設問、テキスト入力、ドロップダウン、空所補充があり、すべて Markdown に直接記述します。コードブロックは [[cs-education|プログラミング]]チュートリアル向けに編集可能かつ実行可能にでき、マクロシステムが JavaScript ライブラリを再利用可能なブロックに包むため、対話的な図表は各著者がコードを書かずに実現できます。コースは著者がすでにテキストを置いている場所ならどこにでもホストでき、特定のサービスに縛られることはなく、すべてがクライアント側で動作するため、読み込んだコースはオフラインでも使えます。LiaScript Exporter は 1 つのコースを Moodle、ILIAS、その他の [[edtech-platform|学習管理システム]]向けに SCORM としてパッケージ化します。

## コース構築のための教育エージェント

プロジェクトはまた、LiaScript コースの制作のための **[教育エージェント](https://github.com/LiaScript/teaching-agent)** も公開しており、Boost Software License 1.0 のもとで提供されています。教育・視覚設計・学習者レビュー・公開の 4 つのエージェントが、コースの状態を保持する単一のプロジェクトファイルを中心に動作し、定義優先のワークフローを採用しています。すなわち、教材が書かれる前に学習目標、対象者、教授法が確定され、その後に検証のゲートが設けられています。下書きは、指名された学習者ペルソナの立場から [[cognitive-offloading|認知負荷]] と前提とされる既有知識を確認する形でレビューできます。このエージェントはエディタに依存せず、1 つの仕様から Claude Code、Copilot、Codex、Cursor、あるいはウェブチャット用の設定を生成でき、リポジトリは作業例としても機能し、EU の NIS2 指令に関する 6 ユニットのコースと、それがどのように作られたかを記した文書を収めています。

## 注記と注意点

LiaScript は無料で、有料プランもアカウント要件もなく、BSD-3-Clause のもとで公開開発されているため、教育機関が自己ホストして改変できます。Live Classroom 機能は大規模に頼る前に確認する価値があります。リアルタイム同期は純粋なローカルレンダリングではなく、共有サービスを使っているためです。教育エージェントは若く採用例も少ないため、サポートされた製品ではなく試作段階のものとして扱ってください。

## 関連する概念

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
