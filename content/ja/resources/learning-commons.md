---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-07T20:33:50-05:00"
type: resource
summary: "Mark Zuckerberg と Priscilla Chan の教育イニシアチブによるオープンな AI インフラストラクチャ。標準・カリキュラム・学習科学データのナレッジグラフ、LLM の出力を評価する Evaluators、教師のワークフロー向けのモデル非依存な agent skills で構成されます。"
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Learning Commons** は、実際のカリキュラム内容の上に AI 機能を載せるための三つのオープンツールを公開しています — 学術標準、カリキュラム、学習科学研究の **[[knowledge-graph|Knowledge Graph]]**、生成されたテキストを判定する **Evaluators** のライブラリ、よくある教師のワークフロー向けのモデル非依存な **[[agentic-ai|Agent Skills]]** — そして、カリキュラムを [[edtech-platform|学習管理システム]] に読み込む Curriculum Sync を加えたプラットフォームを運営しています。

## これでできること

**生成されたコンテンツを標準に整合させる。** Knowledge Graph は、標準、[[curriculum-design|カリキュラム]]、研究を、単一の共有スキーマの下でエンティティと関係としてモデル化します。製品は、項目が狙うべき標準を調べ、前提関係をたどり、チューターのコンテンツをそれが教えるはずのカリキュラムに接地できます。独自のデータパイプラインを構築・維持することなく。

**学生が見る前に生成された出力を採点する。** **Evaluators** は [[llm|LLM 出力]] の属性 — テキストの複雑さ、[[feedback]]、標準への整合、持続的なスキル — を測定し、npm と PyPI で Python と TypeScript の SDK として提供されます。実際には、プロンプトやモデルが変わったときの回帰チェックとして、候補モデル間の比較として、あるいは生成された項目と説明のフィルタとして機能します。

**教師のワークフローをまとめる。** **Agent Skills** は、指示、参照資料、ガードレールを、オープンでモデル非依存の形式にまとめます。理解度チェック、段階的な授業の差別化、標準に整合した授業計画、授業準備です。エージェントの枠組みに落とし込むことも、信頼できる教室のワークフローがどれほどの構造を必要とするかの実例テンプレートとして読むこともできます。

**カリキュラムを学習管理システムに移す。** Curriculum Sync は、標準の地図を、コースが LMS で実際に使えるものへと変えるプラットフォームの段階です。

## 対象となる人

カリキュラムや[[assessment|評価]]の製品に AI 機能を組み込む開発者と、そうした製品が整合する先のデータを提供するカリキュラムまたは標準のチーム。[[teacher-role|インストラクター]]が Agent Skills を自分で使うこともできますが、リポジトリ自身の位置づけは、ツールを出荷する人々のためのインフラです。

## 注意点と留保

[[open-source|オープンソース]]であることは、データがオープンであることを意味しません。Knowledge Graph と Evaluators のコードは MIT、Agent Skills は Apache-2.0 ですが、各データセットは独自のアクセスラベル — Open、Open + Gated、Gated — を持ち、Gated のコンテンツはリポジトリが掲げるオープンライセンスの対象外であるため、再利用の権利を前提とする前にデータセット目録を確認してください。Evaluators のプロンプト内容は CC BY 4.0 ですが、使用している注釈付きの CLEAR および PERSUADE 2.0 コーパスは CC BY-NC-SA 4.0 です。プラットフォームとその背後のデータセットにはアカウントが必要です。

## 関連する概念

- [[curriculum-design]] — 生成コンテンツを標準とカリキュラムに整合させるために存在するグラフ
- [[open-source]] — MIT と Apache-2.0 のコード、データはデータセットごとのライセンス
- [[educational-nlp]] — 評価器は LLM 出力に対するテキスト計測の層
- [[agentic-ai]] — モデルが実行するワークフローをまとめたスキル
- [[edtech-platform]] — Curriculum Sync がカリキュラムを学習管理システムに読み込む
- [[llm]] — 評価の対象であり、スキルの利用者
