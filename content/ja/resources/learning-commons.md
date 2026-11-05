---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Learning Commons** は、Mark Zuckerberg と Priscilla Chan による教育イニシアチブで、Chan Zuckerberg Initiative の学習科学の仕事を、エドテック製品が実際に構築される基盤へと持ち込むために 2025 年に立ち上げられました。その主張は教育学的なものではなくインフラ的なものです。研究はあり、学術標準はあり、質の高いカリキュラムもありますが、それらは別々のシステムに置かれているため、開発者は最も手の届きやすいものの上に構築してしまいます。この団体は GitHub 上で三つのオープンツール — Knowledge Graph、Evaluators 群、[[agentic-ai|Agent Skills]] — を公開し、さらにカリキュラムを [[edtech-platform|学習管理システム]] に読み込む Curriculum Sync を加えたプラットフォームを運営しています。

## これでできること

**Knowledge Graph** は、学術標準、カリキュラム、学習科学研究を、単一の共有スキーマの下でエンティティと関係としてモデル化します。そのためツールは、独自のデータパイプラインを構築することなく、生成したコンテンツを標準に整合させられます。**Evaluators** は [[llm|LLM の出力]] の属性を学習科学の観点から測定します — テキストの複雑さ、[[feedback]]、学術標準への整合、持続的なスキル — そして npm と PyPI で公開された Python および TypeScript の SDK とともに提供され、生成コンテンツの採点や候補モデルの比較に使えます。**Agent Skills** は、よくある教師のワークフロー向けの指示、参照資料、ガードレールを、オープンでモデル非依存の形式にまとめます。理解度チェック、段階的な授業の差別化、標準に整合した授業計画、授業準備です。実際のところ、ほかの二つを信頼に足るものにしているのはこのグラフです。コンテンツの整合が主張であり、グラフはそれが照合される参照先だからです。

## 対象となる人

[[curriculum-design|カリキュラム]]や評価の製品に AI 機能を組み込む開発者と、そうした製品が整合する先のデータを提供するカリキュラムまたは標準のチーム。インストラクターが agent skills を自分で使うこともできますが、リポジトリ自身の位置づけは、ツールを出荷する人々のためのインフラです。

## 注意点と留保

[[open-source|ソース]]がオープンであることは、データがオープンであることを意味しません。Knowledge Graph のコードは MIT ですが、各データセットは独自のアクセスラベル — Open、Open + Gated、Gated — を持ち、Gated のコンテンツはリポジトリが掲げるオープンライセンスの対象外であることが明示されているため、再利用の権利を前提とする前にデータセット目録を確認してください。Evaluators のコードは MIT で、そのプロンプト内容は CC BY 4.0 ですが、使用している注釈付きの CLEAR および PERSUADE 2.0 コーパスは CC BY-NC-SA 4.0 です。プラットフォームとその背後のデータセットにはアカウントが必要です。2026-11-04 時点で確認したリポジトリの活動: Knowledge Graph は 167 スター、Evaluators は 88、Agent Skills は 41。このイニシアチブは CZI が資金提供しており、問題の捉え方は資金提供者自身のものです。

## 関連する概念

- [[curriculum-design]] — 生成コンテンツを標準とカリキュラムに整合させるために存在するグラフ
- [[open-source]] — MIT と Apache-2.0 のコード、データはデータセットごとのライセンス
- [[educational-nlp]] — 評価器は LLM 出力に対するテキスト計測の層
- [[agentic-ai]] — モデルが実行するワークフローをまとめたスキル
- [[edtech-platform]] — Curriculum Sync がカリキュラムを学習管理システムに読み込む
- [[llm]] — 評価の対象であり、スキルの利用者
