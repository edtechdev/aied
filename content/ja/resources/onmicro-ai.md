---
title: "OnMicro.AI"
created: "2026-10-10T21:54:25-04:00"
updated: "2026-10-10T21:54:25-04:00"
type: resource
summary: "教育者が焦点を絞った AI アプリを作成し、リンクで公開し、LTI を通じて LMS に埋め込み、学生がどのように使っているかを確認できるノーコードビルダー。"
url: https://onmicro.ai/
source_code: https://github.com/onmicroai/micro_ai
author: "The OnMicro.AI project"
resource_type: [software, collection of tools]
access: [freemium]
license: "AGPL-3.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, ai-education]
pedagogy: [scaffolding, active-learning]
technology: [open-source, edtech-platform]
audience: [instructors, instructional designers, administrators]
level: [higher ed]
confidence: high
connected_resources: [vibes-diy]
translation_of: resources/onmicro-ai
source_updated: "2026-09-23T17:45:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**OnMicro.AI** は、教育のためのノーコードビルダーであり、開かれた対話ではなく、用途を絞って作られた AI アプリを生み出します。教育者は構造化されたワークフローを設計し、アプリが受け入れたり返したりする内容を制御し、学生がアカウントやライセンスなしで開けるリンクとして公開し、そのアプリ自体の集計された利用状況、コスト、満足度、正確性を確認できます。

## できること

アプリは Canvas、Moodle、Blackboard、またはその他の [[edtech-platform|LTI 対応プラットフォーム]]に埋め込むことができ、そこで成績とアクセス権を同期できます。公開されている例には、患者コミュニケーションの [[simulation]]、学生が先に進む前に理解度を採点する事例研究フィードバックアプリ、そして短い言語練習のチャレンジがあります。利用状況の分析こそが、このプロジェクトが独自の [[conversational-ai|チャットボット]]よりもアプリを好む理由です。設計された流れは観察も改善もできますが、開かれたチャットにはそれができません。主要プロバイダのモデルを選択でき、プラットフォームは各アプリの実行コストを追跡します。

## 対象となる人

範囲が限定され反復可能なやり取りを求める教育者と学習設計者、およびサポートされたデプロイ経路を必要とする管理者に適しています。これは本リポジトリが記録しているホスト型の商用サービスです。ソースは公開されており、プラットフォームはサブスクリプションとしても販売されています。

## 注記と注意点

無料枠は AI クレジット 10,000 とアプリ 3 件に制限されています。無制限のアプリと高度なモデルは Pro 枠から始まり、LTI 連携、シングルサインオン、高度な分析は Enterprise 枠に位置づけられているため、教育機関が最も必要とする機能こそが有料のものです。リポジトリは `LICENSE` ファイルに基づき **AGPL-3.0** でライセンスされていますが、これは自己ホストや改変を意図する人にとって重要な点であり、README にはその変更前の LGPL という記述が残っているため、README ではなくライセンスファイルを読む必要があります。教育機関はまた、学生の提出物をホスト型の外部サービスに通す前に、自らのデータ処理条件を確認すべきです。

## 関連する概念
[[teacher-ai-competency]], [[learning-design]], [[open-source]], [[intelligent-tutoring]], [[scaffolding]]
