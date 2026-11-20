---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "教育者が AI コーディングアシスタントとともに静的な教育サイトを構築するためのフィールドガイド。設計、セキュリティ、学生のプライバシーのための 3 つの Markdown 指示ファイルを、読みやすいガイドとダウンロード可能なバンドルとともに提供します。"
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**The Vibe-Coding Center** は、Miguel Guhlin による無料のフィールドガイドで、教員が AI コーディングアシスタントとともに小さな静的な教育サイト（エグジットチケット、クイズ、クラスのポートフォリオ）を [[vibe-coding|バイブコーディング]]するときに、露出した API キーや学生データを一緒に配布せずに済むようにするものです。

## できること

指針を担うのは 3 つの指示ファイル、`WEB_DESIGN.md`、`EDU_COMPLIANCE.md`、`securevcc.md` です。これらをプロジェクトのルートにダウンロードし、プロジェクト概要のテンプレートを埋めてから、アシスタントに 3 つすべてを読んで適用するよう依頼します。ガイドは、存在することは有効化ではないと明言しているため、ファイルは依頼の中で名指しする必要があります。読み物としてのガイドがそれぞれを説明しており、「共有する前の 3 つの必須チェック」のウォークスルー（学生データを集めすぎない、露出した API キーを点検する、ツールの設計をその学習課題に合わせる）も含まれます。完全なバンドルはサイト自体、プロンプトパック、公開前レビュー、再ビルドのスクリプトを加え、ダウンロード用の SHA-256 マニフェストを備えます。

併設の [EduSynth Hub の実例](https://mguhlin.github.io/funquiz/examples.html)ページは、その成果をスクリーンショットではなく動く静的なツールとして示します。選んだ SOLO タキソノミーの水準で問いを書くエグジットチケット生成機、GitHub Pages 上の単一の HTML ファイルである学生ポートフォリオ、検索できる専門能力開発リソースのライブラリで、いずれも LMS のログインなしにクライアント側で動きます。

## 対象となる人

欲しいツールを説明でき、アシスタントが作ったものを点検する意欲のある、K-12 と高等教育の教員および [[learning-design|インストラクショナルデザイナー]]です。学生向けのツールを誰かが公開する前に共有のチェックリストを 1 つ持ちたい部門や、批判ではなく制作を通じて [[ai-literacy|AI リテラシー]]を教える教員にも向いています。

## 注記と注意点

このセンターは指針であり、準拠のための製品ではありません。サイトは自身の WCAG 2.2 AA の目標について適合を主張せず、「これらのファイルを使えば自分のサイトは準拠しますか」という問いには「いいえ」と答え、エンジニアリングのレビューは学校の承認や法務のレビューに代わらないと述べています。セキュリティの棚は axe-core、Gitleaks、ZAP、Playwright を指しますが、これらは同梱のソフトウェアではなく参照であり、侵襲的なものは使い捨てか明示的に許可された対象向けです。読むのにアカウントは不要です。HTML ページの再ビルドには Python と `markdown-it-py` が必要で、これはビルドの依存関係であり訪問者の依存関係ではありません。リポジトリは MIT ライセンスですが、第三者のアートワークとリンク先のプロジェクトは独自の条件を保ち、それは `CREDITS.md` に記録されています。
