---
title: ゲームに基づく学習
created: "2026-10-10T22:31:13-04:00"
updated: "2026-10-10T22:31:13-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **ゲームに基づく学習（GBL）** — ゲームの機構、課題、そして進行が教育的内容を運ぶところの、学習の媒体および文脈としてのゲーム自身（デジタルまたは物理的）の利用です。学習者は*遊ぶことを通じて*学びます。関連して、**ゲーミフィケーション**はゲーム設計の要素（ポイント、バッジ、レベル、リーダーボード）を、それらを完全なゲームに変えることなく、ゲーム以外の学習活動に適用します。AIと[[educational-robotics|ロボット工学]]の教育においては、両方のアプローチが技術的な内容を魅力的で動機づけるものにするために用いられています。

## 検討すべき問い

- ゲームに基づく学習は、ゲーム自身を学習の媒体として用います — あなたは*遊ぶことを通じて*学びます。ゲーミフィケーションは、非ゲームの活動にポイント、バッジ、レベルを重ねるだけです。この二つは、短期的な関与に対してよりも、本物の学習への効果において、どれほど違うと思われますか。
- 比較的なレビューは、ゲームに基づく学習が非公式の場でより広く見られる一方、ゲーミフィケーションが公式な教室を支配し、プロジェクトに基づく学習を好んだことを見出しました。なぜそれぞれのアプローチは異なる居場所を見つけたのでしょうか — そしてそれはそれぞれがどこで最もよく機能するかについて何を教えるでしょうか。
- ゲーミフィケーションは自己決定理論 — [[agency|自律性]]、能力感、関係性 — に基づいています。動機づけがそれらの欲求を満たすことについてのものだとしたら、なぜポイントとバッジのシステムは、それが知覚された努力と注意をどう形づくるかによって、成功したり失敗したりするのでしょうか。
- [[research-methods-aied|研究]]は、ゲーム的でAIに支援された設計の動機づけ上の便益は、ゲーミフィケーション単独ではなく、それらが知覚された作業量と注意をどう形づくるかにかかっていることを示唆しています。ゲームやバッジが、実際には学習を改善しないまま関与を高めたのを — あるいはその逆を — いつ目にしたでしょうか。

## はじめに

GBLは[[motivation]]、[[student-engagement]]、そして[[active-learning]]の理論に基づいています。ゲームは内発的な動機づけ、即時のフィードバック、そして本物の問題の文脈を提供します。これは[[simulation]]、[[project-based-learning]]、そして[[educational-robotics]]と重なります。GBLはとりわけ[[educational-robotics]]、[[computational-thinking]]、そして[[cs-education]]に関連があります。そこではゲームが抽象的な技術的な概念を具体的で楽しいものにできるからです。

### GBLは知識ベースの研究の中でどう現れるか

- **ロボット工学の教育：** ロボット工学の教育におけるゲームに基づく学習とゲーミフィケーションの[[game-based-gamified-robotics-education-review-2026|比較的なシステマティックレビュー]]は、GBLが非公式の場でより広く見られる一方、ゲーミフィケーションが公式な教室を支配し、[[project-based-learning|プロジェクトに基づく学習]]を好んだことを見出しました。
- **ロボットが媒介するゲーム：** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]はいじめへの介入のためのロボットが媒介する役割演技のゲームであり、[[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]は対話的な[[storytelling-in-education|デジタル・ストーリーテリング]]を用いて動機づけを高めます。
- **シミュレーションゲームにおけるAIの[[conversational-ai|対話エージェント]]：** Wenzel, Geiger, Liening（2026）は、認知的なもの、動機づけ上のもの、[[affective-computing|情動的な]]もの、そして[[sociocultural-learning|社会文化的]]な関与にわたる理論駆動のメタ要求から、デジタルのゲームに基づく学習におけるAI対話エージェントのための — 四つの設計原理と十五の設計特徴からなる — CAIS-GBLフレームワークを導き出しました。それには[[equity-in-ai-education|設計による公平性]]の立場が取られています。彼らが具体化したエージェント（Lara）は、ビジネスのシミュレーションゲームにおいて、認知的なものと[[community-of-inquiry|社会的なプレゼンス]]、そして[[self-regulated-learning]]の支援について好意的に受け取られ、シミュレーションゲームにありがちな、限られた[[formative-assessment|形成的な]]フィードバックと構造化された省察の欠如という隙間に対応しました。

- **AI-GBLの効果：** AIに支援されたゲームに基づく学習の55研究のシステマティックレビューは、知識、内発的な動機づけ、そして情動的な関与に正の効果があることを見出しましたが、高品質の基準を満たした研究は4件（7%）のみで、[[rct|ランダム化比較試験]]も4件（7%）のみでした（[[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]）。効果は、AIの機構を定められた[[learning-theories|学習理論]]と整合させることにかかっていました。

### ゲーミフィケーション

**ゲーミフィケーション**とは、利用者を動機づけ関与させるために、ゲーム設計の要素（ポイント、バッジ、レベル、リーダーボード、課題、進捗バー）を非ゲームの文脈に適用することです。学習がゲーム*を通じて*起こるゲームに基づく学習とは異なり、ゲーミフィケーションは既存の学習活動にゲームの機構を重ね、それを完全なゲームには変えません。それは教育において動機づけ、[[student-engagement]]、そして持続を高めるために用いられ、公式な教室の設定で広く適用されています。

ゲーミフィケーションは動機づけの理論、とりわけ[[self-determination-theory]]（自律性、能力感、関係性を支えるもの）と行動変化のフレームワークに基づいています。それはロボット工学のような応用領域で[[project-based-learning]]と特に強い相乗効果を示しています。知識ベースの研究においては次の通りです。

- **ロボット工学の教育：** 比較的なレビューは、ゲーミフィケーションがロボット工学の教育において公式な教室を支配したこと（p < .001）と、[[project-based-learning|プロジェクトに基づく学習]]を強く好んだこと（p = .009）を見出し、一方ゲームに基づく学習は非公式の場でより一般的でした。
- **関与と動機づけ：** ゲーミフィケーションは知識ベース全体で、AI、[[cs-education|プログラミング]]、そして[[stem-education|STEM]]の学習の文脈における学習者の関与と動機づけを高めるために用いられています。[[genai-motivation-engagement-2026|生成AI、動機づけ、そして関与]]の研究は、ゲーム的な要素がAIとどう組み合わさって学習者の興味を持続させるかを調べます。2026年の二つの研究は、ゲーム化された条件とAIに支援された条件を従来の指導と比較することでこれを展開しています。[[nasa-tlx-workload-gamified-ai-2026|NASA-TLXの研究]]は、従来の、ゲーム化された、そしてAIに支援された学習の条件にわたって知覚された作業量を測定し、[[arcs-motivational-ergonomics-gamified-ai-2026|ARCSの研究]]は、ゲーム化されAIに支援された学習における動機づけの「人間工学」を、[[professional-training|職場での訓練]]への含意とともに検討しました。両者は合わせて、ゲーム的でAIに支援された設計の動機づけ上の便益は、ゲーミフィケーション単独ではなく、それらが[[motivation|知覚された努力]]、作業量、そして注意（例えばARCSの注意・関連性の次元）をどう形づくるかにかかっていることを明らかにします。

GBLとゲーミフィケーションは合わせて、[[educational-robotics]]、[[student-engagement]]、[[motivation]]、[[self-determination-theory]]、[[active-learning]]、[[simulation]]、[[project-based-learning]]、そして[[computational-thinking]]につながります。

## 関連概念
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — 包括項目：AI教育における教育法と教授方略
- [[virtual-and-augmented-reality]] — 没入的でゲーム化された実践が設計と証拠において重なる

## 関連記事
- [[ai-game-based-learning-systematic-review-2026]] — 55件のAIに支援されたゲームに基づく学習研究のシステマティックレビュー：正の成果、薄い証拠基盤

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — ゲーム化された/AIの条件にわたるNASA-TLXの作業量
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCSの動機づけとAIに支援されたゲーミフィケーション
