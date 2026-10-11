---
title: "idstack"
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: resource
summary: "コースをインストラクショナルデザインのエビデンスベースに対して監査する、11 個の Claude Code スキルからなるオープンソースセット。すべての提言にエビデンス階層が付与されます。"
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**idstack** は、エビデンスに基づく [[learning-design|インストラクショナルデザイン]]のための 11 個のスキルからなるオープンソースコレクションで、Chrome のサイドパネル拡張を伴う Claude Code プラグインとして配布されています。コースを作成するのではなく、監査するためのスキル群です。学習目標を改訂版ブルームのタキソノミーに照らして分類し、学習目標・学習活動・評価の間の構成的整合性を確認し、認知負荷の問題を指摘し、WCAG 2.1 AA およびユニバーサルデザイン for ラーニング（UDL）に対してアクセシビリティを検証します。各提言にはエビデンス階層が付与され、メタアナリシスやランダム化比較試験が T1、専門家の意見が T5 となっています。プロジェクトは、その引用が 11 の研究領域にわたる 108 件の査読済み研究に依拠していると述べていますが、この件数はプロジェクト自身の主張であり、参考文献は Markdown で公開されているため、レビュアーが検証できます。

コースは、Canvas API 接続、IMS Common Cartridge ファイル、SCORM パッケージ、オーサリングツールからの PDF エクスポート、または貼り付けられたドキュメントから取り込まれます。共有のプロジェクトマニフェストがコース情報をセッションを超えて保持し、パイプライン用スキルが設計段階を連鎖させつつ完了済みの作業をスキップします。レビューは Quality Matters の 8 つの基準および Community of Inquiry フレームワークに照らして報告され、教授的プレゼンス・社会的プレゼンス・認知的プレゼンスを区別した上で、提言を重要度順に並べます。

## 導入前に知っておくべきこと

プラグインのインストールには Claude Code と bash シェルが必要です。PowerShell と cmd ではセットアップスクリプトを実行できません。スコアの推移を扱う場合は Python 3 が推奨されます。コースデータは利用者自身のマシン上のプロジェクトフォルダに留まり、利用者が呼び出した統合（Canvas API 呼び出しなど）を通じてのみ外部に出ます。Chrome 拡張のライブ推論には利用者自身の無料 Google AI Studio API キーが必要ですが、シミュレーションモードを使えばキーなしで動作を確認できます。プロジェクトはバージョン 3.5.1.0 をベータと位置づけ、マイナーバージョン間で破壊的変更がありうると警告しており、savvides の GitHub アカウントから、名前を明かした個人ではなく公開されています。

## 関連する概念

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
