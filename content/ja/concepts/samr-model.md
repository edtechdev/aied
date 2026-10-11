---
title: SAMR モデル
created: "2026-10-10T23:16:00-04:00"
updated: "2026-10-10T23:16:00-04:00"
type: concept
foundations: [educational-development, learning-design, tpack, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/samr-model
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **SAMR モデル**——Ruben Puentedura が開発した技術統合の枠組みで、技術が学習をどの程度変容させるかを 4 つの水準に分類します。**置き換え（Substitution）、拡張（Augmentation）、修正（Modification）、再定義（Redefinition）**です。下位の 2 つの水準（置き換え、拡張）は、既存の課題を*強化*します——技術は、以前行われたことを、より良く、またはより便利に行います。上位の 2 つ（修正、再定義）はそれを*変容*させます——課題そのものが、以前は不可能だった何かに変わります。[[ai-education|教育における AI]]において、SAMR は、[[generative-ai|生成 AI]]が既存の実践を漸進的に改善するために使われているのか、学習を再概念化するために使われているのかを問うための標準的なレンズであり、教師が技術を統合する*仕方*を記述する一つの方法として、[[tpack|TPACK]]と並びます。

## 検討すべき問い

- AI がコースに導入されるとき、それは置き換え（[[conversational-ai|チャットボット]]が検索ボックスを置き換える）でしょうか、それとも再定義（以前は不可能だった課題が可能になる）でしょうか。どの水準が適切かを決めるのは何でしょうか。そして、変容は常に目標なのでしょうか。
- SAMR と[[technology-acceptance-model|技術受容モデル]]は異なる問いに答えます。受容理論は、教師や機関が道具を*なぜ*受け入れるかを問い、SAMR は道具が学習を*どれほど深く*変えるかを問います。ある AI 統合の研究は、実際にどちらの問いに答えているでしょうか。
- [[higher-ed|高等教育]]における AI 統合の[[meta-analysis-systematic-review|系統的レビュー]]は、ほとんどの利用が置き換えまたは拡張の水準にあり、再定義に近づいた研究は 1 件のみであったことを見出しました。それが典型的だとしたら、AI の可能性と教室の現実の間の隔たりについて、それは何を示唆するでしょうか。
- SAMR は、教育者が技術の利用を計画するのを助けるために、[[teacher-education|教員]]の[[educational-development|専門的能力開発]]でしばしば引き合いに出されます。授業の SAMR 水準を分類することは、教師が実際にすることを変えるでしょうか。それとも、主として記述的なラベルにすぎないでしょうか。
- 批評家たちは、SAMR が[[tpack|TPACK]]と同様に、認知を技術によって変わらないものとして扱うヒューマニズム的な存在論に依って立っており、権力、データの所有、公平性については何も語らないと論じます。統合の水準というレンズは十分でしょうか。それとも、AI 時代の統合には、より批判的な枠組みが必要でしょうか。

## はじめに

SAMR は、学習課題の技術的変容の深さを記述します。その 4 つの水準は、強化から変容への上昇する尺度を形づくります。**置き換え**（道具が機能的変化なしに別のものを置き換える——検索エンジンの代わりのチャットボット）、**拡張**（道具が置き換えて改善する——タイプライターに対するワープロのスペルチェック）、**修正**（課題が大幅に再設計される——共有された AI 生成の下書きにリアルタイムで協働する学生）、**再定義**（以前は想像もできなかった新しい課題が可能になる——学習者が、非 AI の類似物を持たない仕方で生成的モデルと共に創る）。このモデルは、技術統合を計画し評価するための語彙として、[[ai-technologies|教育技術]]の[[research-methods-aied|研究]]と[[educational-development|教員の専門的能力開発]]で広く用いられており、[[tpack|TPACK]]や[[technology-acceptance-model|技術受容]]の枠組みの標準的な伴走者です——ただし、どちらとも異なる問いに答えます。

## 4 つの水準が意味するもの

- **強化（下半分）:** 置き換えと拡張は、その性質を変えずに既存の課題を改善します。ほとんどの日常的な AI の利用——[[automated-question-generation|問題生成]]、手早い文章生成、要約——はここに位置します。より速く便利ですが、学習者に求められることを変えるわけではありません。
- **変容（上半分）:** 修正と再定義は、課題そのものを変えます。[[vibe-coding|バイブコーディング]]、モデルとのリアルタイムの共構築、適応的な対話的なやり取りは、生成 AI 以前には不可能だった課題であり、この尺度の変容的な端を表します。

SAMR はしばしば[[icap-framework|ICAP 枠組み]]と対にされます。両者は整合するからです。[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall & Panadero (2026)]]における、料理から学習への 4 つのシナリオは、ICAP の[[student-engagement|エンゲージメント]]様式を SAMR の水準に対応づけます——ICAP の*受動的*は SAMR の*置き換え*に、*能動的*は*拡張*に、*構築的*は*修正*に、*相互作用的*は*再定義*に——受動的な委任から相互作用的な共構築への進展を示しています。

## ナレッジベースからのエビデンス

- **高等教育における AI 統合は、主に漸進的であって、変容的ではない。** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]は、959 件の記録から選別した 22 件の介入研究を対象とした PRISMA 系統的レビューにおいて、SAMR モデルで AI 統合を評定し、ほとんどの研究が**置き換えまたは拡張**の水準に集中し、修正はより少なく、再定義に近づいたのは 1 件のみであったことを見出しました。AI は典型的に、カリキュラムや[[learning-gains|学習成果]]を再概念化するのではなく、既存の実践を改善するために導入されました——[[automated-assessment|評価の自動化]]と[[personalized-learning|個別化学習の支援]]が支配的でした。
- **SAMR は、生成 AI による[[curriculum-design|カリキュラム]]変革の一般的な分析のレンズである。** [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]]は、5 つのカリキュラム上の転換（静的から動的へ、伝達から能力へ、局所から[[governance|制度的]]へ）を、SAMR や構成的整合を含む確立されたレンズに対応づけ、生成 AI がカリキュラムを再形成する[[pedagogy|教育学的]]メカニズムを明確にするためにこのモデルを用いています。
- **SAMR と TPACK は、教員と技術の統合の基準を支える。** [[crompton-faculty-technology-integration-standards-2026|Crompton et al. (2026)]]は、6 つの教員の技術基準を既存の枠組み——[[tpack]]、RAT、SAMR、SETI——と基準（ISTE、UNESCO、DigCompEdu）に対して位置づけています。それらの多くは[[k-12]]の教育者、または教員の役割の[[teacher-role|教授]]部分のみを対象としており、高等教育の教員開発に空白を残しています。
- **SAMR は、ポストヒューマニズム批判の標的である。** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]]は、TPACK、SAMR、[[ai-literacy]]モデルが、技術的な媒介によって根本的に変わらない有界の学習者を前提とするヒューマニズム的な存在論を共有していることを批判し、これらの道具主義的な枠組みは、認知における AI の構成的な役割に対処できないと論じています。
- **統合のための枠組みであって、権力のための枠組みではない。** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]]は、SAMR を TPACK や他の統合の枠組みと並べて評価し、どれも公平な権力、データの所有、説明責任に対処していないことを見出し、代替的な生態学的共行為主体性の枠組みを動機づけています。
- **学生の利用も SAMR に対応づけられ、フィードバックはすべての水準にわたる。** [[physics-education|物理学]]の単元における 31–36 人の学生の生成 AI の宣言をコーディングした結果、学習は置き換えから拡張に、書式設定は置き換えに、課題の遂行は修正から再定義に位置づけられ、一方、フィードバック——確認、明確化、検証——は 4 つの水準すべてに現れました（[[genai-use-changing-institutional-policy-physics-2026|Quince and Faulconer (2026)]]）。

## SAMR、TPACK、技術受容: それらはどう違うか

3 つの枠組みはしばしば混同されますが、異なる問いに答えています。

- **[[technology-acceptance-model|技術受容モデル]]**（TAM、UTAUT）は、個人や機関が技術を*なぜ*受け入れ、使い続けるかを説明します——知覚された有用性、使いやすさ、社会的影響。
- **[[tpack|TPACK]]**は、教師が技術を効果的に統合するために必要な*知識*を記述します——技術的、教育学的、内容の知識の相互働きで、AI 時代には AI-TPACK/生成 AI-TPACK に拡張されています。
- **SAMR**は、技術が学習課題を*どれほど深く*変容させるかを、強化から再定義まで分類します。

SAMR は、計画と評価に用いられる統合の深さのレンズとして最もよく理解されます。受容理論（導入を説明する）と TPACK（教師の能力を説明する）を補完するものです。AI 時代において、それは最も生産的に、生成 AI が既存の課題を強化するために適用されているのか、それとも本物に新しい課題を可能にするために適用されているのかを問うために用いられます——この区別は、このナレッジベースの評価とカリキュラムの研究全体を通じて流れています。

## 実践への含意

- **SAMR を、変容を処方するためではなく、深さの問いを立てるために用いる。** 強化は本質的に劣るものではありません。多くの日常的な AI の利用は、正当な置き換えです。このモデルは診断的なもので、ある利用が実際に何を変えるかを明確にします。
- **ICAP と対にする。** SAMR は*課題*が何になるかを記述し、ICAP は学習者がどう*関与するか*を記述します。併用することで、表面的な置き換えと深い相互作用的な共構築を区別できます。
- **受容と公平性のレンズで補完する。** SAMR は、道具がなぜ採用されるか、誰が利益を得るかについては何も語りません。[[technology-acceptance-model|受容モデル]]と[[equity-in-ai-education|公平性]]分析と対にすることで、深さのラベルが[[critical-thinking|批判的な評価]]の代用になることを避けます。
- **漸進的な統合のエビデンスを、失敗ではなく発見として扱う。** もしほとんどの AI 統合が置き換え/拡張に集中するなら、設計上の課題は、再定義を押しつけることではなく、変容的な利用には、より良い道具だけでなく異なる課題の設計が必要だと認識することです。

## 関連する概念
- [[ai-education]] — 教育における AI（包括項目）
- [[tpack]] — 技術的・教育学的・内容に関する知識（Technological Pedagogical Content Knowledge）
- [[technology-acceptance-model]] — 技術受容モデル
- [[icap-framework]] — 認知的エンゲージメントの ICAP 枠組み
- [[ai-technologies]] — AI の技術と手法
- [[teacher-ai-competency]] — 教員の AI 能力
- [[educational-development]] — 教育開発
- [[learning-design]] — 学習設計
- [[k-12]] — K-12 教育
- [[higher-ed]] — 高等教育
- [[generative-ai]] — 生成 AI

## 関連する記事

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — SAMR で評定された高等教育における AI 統合: 主に置き換え/拡張
- [[thermomix-genai-education-analogy-2026]] — 料理から学習への 4 つのシナリオを対応づける ICAP と SAMR
- [[rewriting-curriculum-genai-pedagogy-2026]] — 生成 AI によるカリキュラム変革のレンズの一つとしての SAMR
- [[crompton-faculty-technology-integration-standards-2026]] — 教員の技術基準に情報を与える枠組みの一つとしての SAMR
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — SAMR のヒューマニズム的存在論に対するポストヒューマニズム批判
- [[reclaiming-epistemic-agency-co-agency-2026]] — 権力、データの所有、説明責任に関する SAMR の沈黙
- [[genai-use-changing-institutional-policy-physics-2026]] — 変化する制度的方針のもとでの学生の生成 AI 利用: SAMR の水準に対応づけられた利用機能（Quince & Faulconer 2026）
