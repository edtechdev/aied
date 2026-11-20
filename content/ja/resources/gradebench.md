---
title: "GradeBench"
created: "2026-11-19T04:10:00-05:00"
updated: "2026-11-19T04:10:00-05:00"
type: resource
summary: "A public leaderboard for frontier models grading real handwritten university STEM answers against the rubric items the instructor selected."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*これは英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

GradeBenchは[[automated-assessment|自動評価]]について、範囲は狭いが有用な問いを投げかける。学生の手書き答案、教員のルーブリック、模範解答、そして教員が実際に選択したルーブリック項目を与えたとき、フロンティアモデルは同じ項目を選ぶのか。ゴールドラベルは試験やクイズにおける実際の教員およびTAのルーブリック選択であり、モデル出力を再採点したものではない。

## 何に使えるか

採点ベンダーの精度に関する主張を信用する前にリーダーボードを読み、そのリーダーボードを信用する前にタスクの構築方法を読むこと。この[[benchmark]]は、10以上の機関にわたる45の[[higher-ed|大学]]科目の125問から抽出した464タスクで構成され、教授またはTAが一行ずつ確認した自由記述式の試験・クイズ問題に限定されている。さらに部分点に偏った構成となっており——満点タスクと零点タスクはそれぞれ5%を上限としている。モデルにとってそれらは容易だからである。

現在のリーダーボードの最高値は、人間同士の一致率を大きく下回る。最良のモデルでもルーブリック完全一致は57.3%にとどまり、サイトは精度を答案1,000件あたりのコストに対してプロットしている。そこでは0.8ポイント劣るモデルのコストが約7分の1になる。採点は量でこなす業務であるため、このコスト軸こそが実務上有用な部分である。

独立に構築されたもう一つの測定ツールとしては、Learning Design Allianceによる[AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark)を参照してほしい。これはホスト型リーダーボードではなく公開リポジトリとして提供されており、[[porcaro-ai-grading-benchmark-2026|Porcaroの研究]]に要約されている。

## 誰のためのものか

採点ツールに未レビューのまま点数の公開を許すかどうかを判断しようとしている教員、調達要件を起草する評価の専門職、そしてエッセイ採点の相関ではなくルーブリック項目レベルの目標値を必要とする研究者。

## 留意点と限界

GradeBenchは商用AI採点プラットフォームであるPensiveが公開しており、ベンチマークと製品は所有者を同じくする。タスクの構築方法は文書化され、妥当性も擁護できるが、問題設定の枠組みはベンダー側のものとして扱うべきである。対象は4項目以上のルーブリックを伴うSTEMの試験であり、エッセイ、短答、ディスカッション投稿——[[humanities-education|人文学]]の採点の大半が行われる形式——は除外される。ルーブリック完全一致は厳格な指標である。二人の採点者が同じ項目で判断を異にしても、その学生について両者が正しいということがあり得る。スコアは2026年11月に利用可能なモデル版を示すものであり、今後変動する。
