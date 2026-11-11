---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "Tony Vincentによる無料で使えるホスティング・プラットフォーム。教員がAI生成の教室用ウェブアプリを公開し、リンクやQRコードで共有し、他の教員が作った数百のアプリを閲覧できます。"
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
translation_of: resources/teacher-hive
source_updated: "2026-11-10T19:52:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Teacher Hive**は、Tony Vincentが作った、教員製の教室用アプリのためのホスティングと共有のプラットフォームです。その前提は、教室におけるAIの難しい部分は、もはやモデルに小さなアプリを書かせることではなく、学校のネットワーク上で動き、学生が簡単に開ける場所を見つけることだ、というものです。教員はChatGPT、Claude、Geminiが生成した単一のHTMLファイルを貼り付けるかアップロードし、Teacher HiveがそれをアイコンとQRコード付きの短い公開リンクで配信します。閲覧、ブックマーク、フォロー、公開は無料で、有料のPro階層はストレージとアプリの上限を引き上げます。

## できること

**閲覧**では公開されたアプリをコレクション別に見られます — ブレイン・ブレイク、ELA、数学、科学、社会科、教員ツール — そして**公開**ではHTMLを貼り付け、名前、説明、アイコン、AIの帰属表示を加えてアプリを出します。各アプリには起動ボタンとQR表示のある情報ページが付き、ブランディングや学生ログインなしで開きます。任意の**Superpowers**層は、保存された応答、AI呼び出し、メール、ファイルストレージを加え、プランごとに従量制です。ギャラリーを必要としない単一のアプリなら、2つの無料の代替がドラッグ・アンド・ドロップで使えます。[Cloudflare Drop](https://www.cloudflare.com/drop/)はフォルダ、zip、単一のHTMLファイルを、アカウントなしでworkers.devのURLに公開します(デプロイを60分以内に引き受ける場合)。[Netlify Drop](https://app.netlify.com/drop)は同じ入力物を無料プランの公開リンクに公開します。

## 対象となる人

小さなツールを作るために[[generative-ai|生成AI]]を使い、それを確実にホストできる場所を必要とするK–12の教員が主な読者です。このプラットフォームは開発者ではなく[[vibe-coding]]のために設計されています。教育設計者と教員教育者は、コレクションを例として、また[[teacher-ai-competency|教員のAIコンピテンシー]]を築くリスクの低い方法として使えます。

## 注記と注意点

MemberとBuilderは無料です(Builder: アプリ50、50 MB)。Proは月額\$10または年額\$60で、アプリ500です。アクセスはフリーミアムです。

プライバシーはより強い主張ですが、責任を教員へ移します。Teacher Hiveは学生アカウントを作らず、学生に個人情報を尋ねず、公開されたアプリ内で分析や広告のスクリプトを実行しません。アプリはリンクで公開されるため、利用規約は、アプリが名前、メール、学生ID、位置情報を収集しないことを保証する責任を教員に負わせています。アクセシビリティの範囲(WCAG 2.2 AA)はTeacher Hive自身のページに適用され、未検証の教員製アプリには適用されません。オープンソースライセンスは明示されておらず、稼働時間とデータ保持は保証されていません。

## 関連する概念

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
