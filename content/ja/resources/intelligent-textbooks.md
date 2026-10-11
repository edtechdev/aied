---
title: "Building Intelligent Textbooks"
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: resource
summary: "Dan McCreary によるインテリジェント教科書 — 検索、ナビゲーション、用語集、クイズ、概念グラフ、埋め込みシミュレーションを備えたオンライン教科書 — を MkDocs Material と生成 AI で構築するためのオープンソースガイド。AI が生成した対話型 MicroSims のライブラリが伴います。"
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Intelligent Textbooks** サイトは、*インテリジェント教科書* を構築するための Dan McCreary のステップバイステップガイドです。インテリジェント教科書とは、静的な PDF を超えて、検索、サイト内ナビゲーション、用語集、目次、クイズ管理、レンダリングされた数式、ソーシャルメディア向けプレビュー、リンクチェック、そしてコース内のすべての概念とその依存関係を示す視覚的にわかりやすい**概念グラフ**を備えたオンライン教科書です。このガイドは、今日では多くのコースがこうした機能を備えた質の高いオンライン教科書から利益を得られると論じ、[MkDocs](http://mkdocs.com/) ビルドシステムに Material テーマを組み合わせ、コンテンツの作成と保守に生成 AI を用いる方法を示しています。

その決定的な特徴は、教科書が *Markdown で書かれ AI によって生成される* という点にあり、これは [[vibe-coding|AI 支援によるオーサリング]] のパターンを [[curriculum-design|コースコンテンツ]] に適用した具体的な実例です。大規模なサイトを手作業で保守するのではなく、コースを記述して生成 AI にページの生成と保守を任せ、ナビゲーション・検索・概念グラフの扱いはツールチェーンに委ねます。伴走する [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) ライブラリは、コース記述からレベル 2 の教科書を構築するのに必要な作業の 90% 以上を自動化できると謳っています。

## 伴走リソース：MicroSims

このガイドの自然な伴走物は、<https://dmccreary.github.io/microsims/> にある McCreary の **MicroSims** ライブラリ（ソース：[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)）で、インテリジェント教科書が埋め込む対話型シミュレーションを提供します。*MicroSim*（マイクロシミュレーション）とは、教師が概念を説明する助けになるよう AI で生成されたシンプルな対話型シミュレーションであり、インテリジェント教科書や `iframe` を受け付ける任意のサイトに埋め込めます。MicroSim が特徴的な理由は 3 つあります。**AI 支援による生成**（標準化された設計パターンにより、シミュレーションの自然言語による記述が共有可能なアセットになります）、**汎用の埋め込み**（HTML の `iframe` 要素 1 つでどのページにも組み込めます）、そして**透明性があり改変可能なコード**（ブラックボックスではありません。1 クリックでシミュレーションをウェブエディタで開け、Creative Commons ライセンスによりほとんどの教師がライセンス料なしで利用できます）。この用語は、教師と学生がほとんど訓練なしに p5.js JavaScript ライブラリでシミュレーションを作れることを Valerie Lockhart が発見した 2023 年に作られました。

プロジェクトはまた、AI ツールが検索可能な記述子を生成できるよう MicroSim のメタデータ用 JSON Schema も公開しており、ファセット化された MicroSim レジストリはロードマップに載っています。このフレームワークを解説した研究論文 — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — は arXiv に掲載されています（[2511.19864](https://arxiv.org/abs/2511.19864)）。サンプルシミュレーションには、跳ね返るボール、投射運動、弦の倍音、Conway の Game of Life、オイラーの公式、株式市場のリターンチャートがあり、いずれもサイト上で実際に動作します。

## 対象となる人

コース用の教科書を構築・保守したいインストラクション設計者と教育者、特に高等教育と職業訓練に関わる人々、そして生成 AI を使って教育コンテンツを制作するすべての人です。Markdown と Git のワークフローに慣れている（あるいは学ぶ意思のある）教育者に適しており、検索・ナビゲーション・概念グラフといったサイトの仕組みは AI に任せて、教育の部分に集中したいという人に向いています。

## 注記と注意点

これは実践者のためのガイドとツールチェーンであり、査読済み研究ではありません。学習成果の証拠ではなく、ワークフローとそれ自体の教育的な根拠（「インテリジェント教科書は、知識を求める旅路において学生を概念を通して導く」）を示すものです。MicroSim の研究論文が実証的な裏付けに最も近いものですが、arXiv に自己公開された論文です。両プロジェクトはオープンソースで（intelligent-textbooks リポジトリは MIT ライセンスと 38 スターを、MicroSims は Creative Commons ライセンスと 13 スターを報告しています）活発に保守されています。概念グラフと用語集優先の構成は発見可能性のために本当に有用ですが、このガイドはかなり技術的なオーサリングワークフロー — MkDocs、Git、生成 AI ツール — を前提としており、一部の教員にとっては障壁になりえます。取り込み時点では MicroSims のレジストリはまだロードマップ上にしかなく、既存の特定のシミュレーションを探すにはサイト自身の検索とナビゲーションに頼る必要があります。

## 関連する概念

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
