---
title: "RAID"
created: "2026-11-19T04:10:00-05:00"
updated: "2026-11-19T04:10:00-05:00"
type: resource
summary: "A public leaderboard of AI-text detectors scored on RAID, a benchmark built to test robustness against models, domains, decoding settings and adversarial attacks."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
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

RAIDは、[[ai-detection|AI生成テキスト検出]]に関する本格的な主張の大半を支えるベンチマークであり、そのリーダーボードは、検出器が公表している精度がモデル、ドメイン、デコード設定の変更や意図的な攻撃を経ても維持されるかどうかを確認できる場所である。エントリーはテストセットで評価され、リポジトリの提出手続きに従えば誰でも提出できる。

## このベンチマークでできること

ドメイン(要旨、書籍、ニュース、詩、レシピ、Reddit、レビュー、wiki)、デコード戦略(greedyまたはsampling)、反復ペナルティ、さらに空白文字、ホモグリフ、同義語置換、パラフレーズ、ゼロ幅スペース、冠詞削除を含む敵対的攻撃によってフィルタリングできる。そのうえで、AUROC、偽陽性率5%でのTPR、1%でのTPRという複数の指標にわたって検出器を比較する。

重要なのはこのフィルタ群である。全体集計では1.000に近いスコアを出す検出器でも、テキストがパラフレーズされたり生成元モデルが変わったりすると性能が落ち込むことがあり、リーダーボードを使えば、機関が[[academic-integrity|不正行為]]の認定をその検出器に委ねる前に、その落ち込みを確認できる。教育において最も重要なのは偽陽性率1%の列である。機関規模では、1%の誤り率が数百人の学生が誤って告発されることを意味するからだ。

## 誰のためのものか

検出手法を評価する研究者、検出器に言及する可能性のあるポリシーを起草する管理者、そしてシラバスにそう記載する前に「これは検出できるのか」という具体的な答えを求める教員。

## 注意点と限界

このベンチマークが測るのは機械生成テキストの検出であり、不正行為ではない。AIを構想、アウトライン作成、推敲に使う学生が生み出すテキストは、検出器が捕捉するよう設計されていないものであり、[[language-learning|第二言語で執筆する]]学生は、リーダーボードには示せない既知の偽陽性リスクである。RAIDは学術チームが維持する研究成果物であり、その対象範囲はテストセットに含まれる生成モデルに追随するため、ベンチマークが更新されるまで新しいモデルは十分に代表されていない可能性がある。リーダーボードが順位づけるのは検出器であって、その提供ベンダーのデータ取り扱い実務ではない。また高いAUROCは、学生の成果物をそのサービスに提出することが自分の法域で適法か倫理的かについて、何も語らない。

## 関連する概念

- [[ai-detection]] — このベンチマークが評価する手法群
- [[academic-integrity]] — 検出器のスコアが利用されるポリシー上の文脈
- [[benchmark]] — これが属する、より広い測定手段のカテゴリー
