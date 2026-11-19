---
title: "Fab AI"
created: "2026-11-19T04:10:00-05:00"
updated: "2026-11-19T04:10:00-05:00"
type: resource
summary: "A model leaderboard for education benchmarks aimed at low- and middle-income countries, covering pedagogy, foundational literacy, SEND, visual maths and multilingual performance, with price and open-weight columns."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*これは英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

Fab AIは、このベンチマークが対象として構築された[[global-south|低・中所得国]]のように予算、帯域幅、言語カバレッジが制約されている状況で重要となる教育タスクについてモデルを評価し、その結果を論文ではなく並べ替え可能なリーダーボードとして公開している。中核となる表では、教授法ベンチマークと並べてSEND、視覚的数学、視覚的推論を採点しており、多言語教授法、基礎的な読み書き能力、音読評価については別々のタブが用意されている。

## できること

約300のモデルを、現在は90%台前半から21%まで分布する教授法スコアで比較できる。さらに、教育省が実際に比較検討しなければならない項目、すなわち100万トークンあたりの価格、パラメータ数、オープンウェイトの有無、公開日で並べ替えられる。有用なのは下位帯のばらつきである。2B未満のオープンモデルは教授法ベンチマークで21%から43%にとどまる一方、フロンティアモデルは90%台前半に位置しており、これによって「安価なハードウェアでオフライン実行できるか」という問いが、当て推量ではなく数値にもとづくトレードオフの判断になる。

このページをブックマークする理由は、[[multilingual-learning|多言語]]教授法のタブにある。教育ベンチマークの大半は英語のみであり、モデルの教授法が翻訳を経ても保たれるかどうかという問いは、多言語の教育制度を運営する省庁がまさに答えを必要とする問いである。データはCSVでダウンロードできるため、比較をローカルで再実行できる。

## 想定される利用者

国家規模のシステム向けにモデルを選定する政策立案者や調達チーム、AI支援教育における[[digital-divide|アクセス格差]]を研究する研究者、そして英語の試験ではない教授法の目標指標を必要とする開発者。

## 注意点と限界

リーダーボードが測定するのは、そのベンチマーク独自のタスクにおけるモデルの性能である。高い教授法スコアは、それらの設問についての証拠であり、教室についての証拠ではない。価格の列は入力トークンと出力トークンの価格を3:1の比率で合成したもので、これはモデリング上の選択であり、特定の導入で実際にかかる費用ではない。言語のカバレッジとローカルで稼働するモデルの網羅性は、新しいモデルが登場するたびに変化する。また、小規模モデルの低いスコアは、能力そのものと同じ程度にタスク形式を反映している部分がある。Fab AIの枠組みは明示的に低・中所得国を対象としているため、ベンチマークの設問群はその文脈を反映しており、教育全般のランキングとして読むべきではない。公開日は確認しておきたい。いくつかの項目は現在のモデル世代よりも前のものである。

## 関連する概念

- [[benchmark]] — これが属する、より広い測定手段のカテゴリー
- [[digital-divide]] — 価格とオープンウェイトの列が可視化するために存在する制約
- [[equity-in-ai-education]] — このリーダーボードが判断材料を与える政策的問い
