---
title: "Gemini Notebook"
created: "2026-10-10T22:12:00-04:00"
updated: "2026-10-10T22:12:00-04:00"
type: resource
summary: "Google の資料に基づいて答えるノートブック型アシスタント（2026 年 7 月までは NotebookLM）。文書の一式を読み込んで質問し、学習支援を作らせ、それらの資料に基づいた音声・動画・スライドの出力を得られます。"
url: https://notebook.google/
author: "Google Labs"
author_url: https://notebook.google/
resource_type: [software]
access: [free with account, freemium]
last_verified: "2026-09-22"
technology: [generative-ai, rag, llm, multimodal]
foundations: [ai-literacy]
pedagogy: [self-directed-learning, retrieval-spacing-interleaving, video-education]
audience: [learners, instructors, researchers]
level: [secondary, higher ed]
confidence: high
translation_of: resources/gemini-notebook
source_updated: "2026-09-22T04:10:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Gemini Notebook** は、Google Labs の [[rag|検索拡張]]（retrieval-augmented）による学習・研究アシスタントで、2026 年 7 月の改称までは NotebookLM と呼ばれていました。ノートブックとは読み手が選んだ資料の一式 — PDF、文書、スライド、ウェブサイト、貼り付けたテキスト、あるいは YouTube 動画の書き起こし — であり、アシスタントの回答はすべてその資料から、出典への参照付きで導き出されます。汎用の [[conversational-ai|対話型アシスタント]] が学習データから答えるのに対し、Gemini Notebook は読み手自身の書棚にある文書から答えます。この制約こそが、この製品です。

## できること

資料一式全体にわたって質問し、長い文書を要約し、参照をたどって回答を出典の該当箇所と照らし合わせられます。チャットだけでなく、Notebook は学習と発表のための成果物も作ります。Audio Overviews — 質問を差し挟める、2 人の合成ホストによるポッドキャスト風の対話、[[video-education|Video Overviews]]（2026 年に追加された短い縦型版も含む）、[[visualization|Mind Maps]]、レポート、[[retrieval-spacing-interleaving|フラッシュカード]]、クイズ、データテーブル、インフォグラフィック、スライドデッキです。2026 年 7 月の更新で各ノートブックにコードを実行するための安全なクラウドコンピュータが与えられ、この道具は資料を要約するだけでなく分析する方向へと広がりました。

## 対象となる人

自分のコースの教材から復習する [[self-directed-learning|自学する学習者]]、読むべき資料を議論の余地がある要約にまとめる教員、そして文献の一式を通読する研究者です。無料プランは個人の Google アカウントを持つ誰にでも開かれており、教室での利用を想定する層がここに当たります。上限の引き上げ、より長い資料、共有は有料の Workspace と Google One AI のプランに含まれます。

## 注記

Google は、個人アカウントのコンテンツはユーザーがフィードバックを送らない限りモデルの学習に使われないこと、Workspace へのアップロード・クエリ・応答はフィードバックを送った場合でも学習に使われないこと、[[privacy|第三者とデータを共有しない]] ことを表明しています。ただし、削除したノートブックは復元できません。上記の能力に関する主張は提供者自身のものです。学区や機関は、製品ページではなくデータ処理契約に照らし合わせて確認すべきです。2026 年の報道では、生成されたポッドキャストで使われた声に関する訴訟も報じられており、Google は否定しています。音声の出力は、資料に基づく回答という保護とは別に、[[legal-issues-and-risks|似顔権・肖像権の問題]] を提起するという注意喚起です。生成されたフラッシュカード、クイズ、要約は、資料と照らし合わせて確認するための下書きとして扱ってください。また、無料プランの制限は予告なく変わります。

## 関連する概念
[[rag]], [[ai-literacy]], [[self-directed-learning]], [[retrieval-spacing-interleaving]], [[generative-ai]], [[multimodal]], [[video-education]], [[hallucination-risk]]
