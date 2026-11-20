---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Claude、Cursor、Codex などのエージェントが Canvas LMS の中で読み取りと操作を行えるようにするオープンソースの MCP サーバー。学生、教育者、学習デザイナー向けのツールを備え、書き込み操作はゲートされ、学生データの匿名化は任意です。"
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Canvas MCP** は、Vishal Sachdev によるオープンソースの Model Context Protocol サーバーで、AI クライアントを Canvas LMS のインスタンスに接続します。エージェントは学生の今後の課題を一覧し、コースの課題と提出物を読み、クラスにメッセージを送り、コースのアクセシビリティを監査できます。いずれも場当たり的な画面スクレイピングではなく、サーバーが公開するツールを通じて行います。

## できること

サーバーは 3 つの系統のツールを提供します。学生向けツールは「今週何が締め切りか」「すべて提出したか」「クイズの受験回数は残りいくつか」に Canvas 自身の `self` エンドポイントで答えます。教育者向けツールは課題の一覧と作成、提出物の読み取り、一括採点、会話の送信、課題分析の取得を行います。学習デザイナー向けツールはコースの品質チェックと WCAG アクセシビリティのスキャンを担います。利用できるツールは合計で最大 128 で、既定のプロファイルが登録するのはそれより少なく、機能ゲートされたツールが数を増やします。ツールに加えて 8 つのエージェントスキルが複数手順のレシピをまとめています。週次の計画、朝のコース健全性チェック、一括採点の決定木、ピアレビューのパイプライン、学期前のコース監査で、`skills.sh` を通じて 40 以上のエージェントにインストールできます。

## 対象となる人

コース周りの定型的な読み取りとメッセージ送信をエージェントに任せたい教員と、LMS に接続したエージェントが実際に何に届くのかを評価する [[institutional-ai-infrastructure|機関のチーム]]です。学習デザイナーは、ここで自動コースレビューに最も近いものを得られます。このプロジェクトは、汎用のチャットボットではなく、ある機関の LMS の水準での [[agentic-ai|エージェンティックなツール群]]の実例です。

## 注記と注意点

セットアップはローカルで行います。Python 3.11 以降、Canvas の API トークンと URL、MCP クライアントが必要で、Claude Desktop 向けにはダブルクリックで使える拡張があります。公開ホスト版のサーバーは廃止されたため、共有の展開は機関自身の認証の背後でのセルフホストを意味します。書き込み系のツールはゲートされています。HTTP サーバーは書き込みツールが明示的に許可されない限り読み取り専用で、削除には確認トークンが必要で、コード実行は失敗時に閉じるサンドボックスで動きます。プライバシー制御はオプトインです。応答の匿名化、メールのマスキング、PII のフィルタリングは有効にしなければならず、README はこれらが FERPA の義務を支えうるものの準拠を確立するものではないと慎重に述べており、それは展開と AI 提供者によります。サーバーにテレメトリはありませんが、Canvas と選んだクライアントはそれぞれ独自のログを保持します。プロジェクトは MIT ライセンスで活発に開発されており、現在のツール名と設定についてはプロジェクト自身のガイドが拠り所です。
