---
title: "Education Agent Skills"
created: "2026-10-10T21:54:25-04:00"
updated: "2026-10-24T08:38:48-04:00"
type: resource
summary: "教育学、学習科学、カリキュラム、評価を網羅する 165 件のエビデンスに基づくエージェントスキルのライブラリ。Claude、Codex、Hermes 向けにパッケージ化されています。"
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Education Agent Skills** は、教師、学校運営者、教育ツールを構築する人のための 165 件のエージェントスキルからなるライブラリです。スキルは教育学、学習科学、[[curriculum-design|カリキュラム]]、評価、再生成にわたる 20 のドメインに分類され、それぞれが文書として読まれるのではなく [[agentic-ai|エージェント]]に読み込まれることを前提に書かれています。

## できること

スキルはプラグインとして、またはフォルダをコピーすることで Claude Code、Codex、Hermes にインストールでき、同じライブラリが複数のエージェント環境でそのまま機能します。ホストされた MCP サーバーは、スキルをローカルにインストールできないエージェント向けにコレクションをツールとして公開しており、リポジトリにはレジストリと事前ビルド済みのバンドルの両方が同梱されているため、サーバーはデプロイ時に個々のファイルを読み込むことなくコレクションを提供できます。

このプロジェクトを特徴づける主張は、その根拠付けにあります。スキルは自らの前提とするエビデンスを引用しており、リポジトリ自身の履歴を見ると、その規律が主張されるだけでなく実際に徹底されていることがわかります。裏付けのない出典表示を削除し、引用された研究で検証された保護策の記述を訂正した、マージ済みの修正もあります。

## 注記と注意点

教育スキル、ドキュメント、カリキュラム資料は CC BY-SA 4.0 でライセンスされているため、再利用と翻案は開かれていますが、派生物には同じライセンスを付す必要があります。デプロイする場合に重要な運用上の詳細が 2 つあります。ホストされた MCP エンドポイントは誰にでも開かれているわけではなくトークンを必要とし、サーバーは SKILL.md ファイルではなくコミット済みのスナップショットを提供するため、バンドルを再ビルドしてコミットせずに追加したスキルは、再デプロイしてもライブサーバーには現れません。このライブラリは、教育者でありカリキュラム設計者でもある Gareth Manning によって構築されており、ライセンス条件は特に教育コンテンツに適用されます。

## 関連する概念

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]

