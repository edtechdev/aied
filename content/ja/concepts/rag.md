---
title: RAG（検索拡張生成）
created: "2026-10-10T22:45:39-04:00"
updated: "2026-10-10T22:45:39-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
technology: [generative-ai, intelligent-tutoring, knowledge-graph, llm, llm-training-and-fine-tuning, edtech-platform]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
connected_resources: [gemini-notebook]
translation_of: concepts/rag
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **RAG（検索拡張生成）** — 情報検索とテキスト生成を組み合わせたAIアーキテクチャで、[[llm|LLM]]が学習データのみに頼るのではなく、外部の知識源に基づいて応答を根拠づけることを可能にします。教育において、RAGはハルシネーションに対処し、[[curriculum-design|カリキュラム]]に基づくチュータリングを実現し、分野特化型の[[intelligent-tutoring|AIチューター]]を支えます。

## 考えるための問い

- AIの[[conversational-ai|チャットボット]]が誤ったことを自信たっぷりに述べるのを見たことがあるでしょう。モデルの応答を外部文書に「接地（グラウンディング）」することは、その失敗モードの何を変え、どんな新しい失敗モードを招きうるでしょうか。
- RAGは関連資料を検索し、それを生成モデルに与えます。読み始める前に、これは検索される内容の質について、そして検索されたテキストが実際に教えるべきものなのかについて、どんな前提を置いているでしょうか。
- このページはRAGとファインチューニングを対比させています。検索は再学習なしに最新の情報源に応答を接地させ、ファインチューニングは行動を埋め込みます。カリキュラムに沿ったチューターを構築するなら、正確さにはどちらを、教授スタイルにはどちらを信頼するでしょうか。
- RAGは教育におけるハルシネーションへの主な解答として提示されています。しかし考えてみてください。検索元そのものに誤りがあったり古かったりする場合、RAGはそれでもハルシネーションを起こしうるでしょうか。「検証済みの内容に基づいている」という保証は、実践のどこで崩れうるでしょうか。
- 開発者や指導者にとって、チューターは教科書の内容を超えて何を「知る」必要があるでしょうか — 教授法、いつ答えを差し控えるべきか、理解をどう探るか。RAGだけではそれがどこで不足し、何と組み合わせるべきでしょうか。

## はじめに

### RAGが教育で使われる仕方

- **表記を意識した分野特化型検索:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]]は、理論的な[[cs-education|計算機科学]]の講義向けに教科書、講義スライド847枚、解かれた練習問題312問、解答付き証明テンプレート156件、計算量に関するワークシート89件を索引化し、数式エンティティ認識と表記を考慮した再ランキングを加えています。240秒の制限時間内に講師が作成した試験問題179問すべてに回答しました（平均38.0秒）が、BLEU-4 = 0.0000、ルーブリック評価は0.7620という結果であり、このアーキテクチャの価値と、それを評価する指標の限界の両方を示しています。
- **ハルシネーションの低減:** [[eduguard-safe-rag-llm-tutor|EduGuard]]と[[eduzone-llm-safety-k12|EduZone]]はRAGを用いてAIチューターの応答を検証済みの教育内容に接地させ、[[hallucination-risk|ハルシネーションのリスク]]を減らしています。
- **接地は出典の精査と同じくらい良いとは限らない:** 12名の参加者のうち、意図的に不一致にされた出典カードに気づいたのはわずか1名でした。出典ラベルは、検索された資料を検証するための招待というよりも権威の証印として機能しうるのです（[[veriforge-narrative-drafting-scaffolding-2026|Sun et al.（2026年）]]）。
- **カリキュラムに基づくチュータリング:** [[retrieval-augmented-tutoring-algorithm-kite|KITE]]は関連するカリキュラム資料を検索してチュータリングの応答に活かし、コース内容との整合を保っています。
- **機関の統制のためのオンプレミス展開:** CourseChatは、学部レベルの[[business-education|ビジネス教育]]向けの複数コース対応RAGチューターを、ローカルのベクトルデータベースとOllamaで提供される8Bモデルを用いて、ローカルのエッジホスト上で稼働させています。コース教材と生徒の対話を学内のインフラ上に留め置くためです。より大規模な候補モデルが遅延の基準を満たせなかったため、モデルの選択はハードウェアとサービングの共同決定事項となりました（[[on-premises-rag-tutoring-business-education-2026|CourseChat]]）。
- **教科書や教材の索引化:** [[book-level-synthetic-textbook-organization|合成教科書の組織化]]は検索のための教育内容を索引化します。[[structrag-diagram-reasoning-ai-tutoring|StructRAG]]は検索を構造化された図にも拡張しています。
- **訓練パイプラインへの統合:** [[llm-training-and-fine-tuning|教授法的LLM訓練]]はRAGを用いて、チューターの訓練を教育の最良実践に接地させています。
- **コース特化型の学修支援:** [[course-specific-rag-help-seeking-higher-ed-2026|Beacon]]は、講師に相談することをためらう学生に応えるため、一つのプログラミング講義モジュールの承認済み教材からのみ検索します。評価した15名の学生のうち89%が、その応答はコース教材と高い整合性を持つと評価しました。この設計上の要点は、接地が汎用的な[[llm|LLM]]とモジュールレベルの期待との不整合に対する、制度的な解答であるということです。
- **取り込み時の構造対検索時の取得:** [[wiki-llm-indexing-ml-classes-2026|Wright（2026年）]]は、同じDS3001機械学習コースのコーパスを、出典の引用を伴う相互参照された7つのwiki概念ページにまとめ、それを調整済みのベクトルRAGベースライン（チャンク分割した埋め込みによる検索）と比較しました。人間が書いた59問に対して、まとめられたwikiは調整済みの索引を上回り（10点中9.95対9.05、差のブートストラップ信頼区間はゼロを含まず）、回答者が実際に目にした資料に基づいていることが多い結果となりました（98%対81%）。また、2ページ以上の資料を必要とする問いでは両者の差はおよそ3倍になりました（ページ横断スコア9.93対8.14で、RAGの接地率は87%から64%に下落）。この接地の差は検索の失敗ではありません。ベクトルRAGの接地していない回答11件のうち検索の見落としは2件のみで、残りの9件は関連する抜粋が文脈に含まれているのに裏付けのない詳細を付け加えていました。取り込み時の構造が、アクセスだけでなく詳細の追加を制約しているという証拠です。

### RAGとファインチューニング

RAGは[[llm]]のファインチューニングと相補的な役割を果たします。検索は再学習なしに最新の分野特化的な接地を提供し、ファインチューニングは[[pedagogy|教授法的]]な行動を埋め込みます。この知識ベースの研究では、両方のアプローチとその組み合わせが探究されています。

## 関連する概念

- [[llm]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[knowledge-graph]]
- [[edtech-platform]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[pedagogical-safety]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — 包括的概念: AI技術と手法（モデル、LLM訓練、ロボティクス、RAG、エージェント型）

## 関連する記事

- [[eduguard-safe-rag-llm-tutor]]
- [[eduzone-llm-safety-k12]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[book-level-synthetic-textbook-organization]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: 理論計算機科学教育のための検索拡張生成 — アルゴリズム解析と計算量理論のための包括的評価フレームワーク
- [[course-specific-rag-help-seeking-higher-ed-2026]] — 学修支援への障壁の低減: 高等教育における支援求行動の格差に応えるコース特化型RAGシステムの評価
- [[wiki-llm-indexing-ml-classes-2026]] — Wiki LLM索引化による機械学習講義での学び強化の可能性
- [[on-premises-rag-tutoring-business-education-2026]] — ビジネス教育のためのオンプレミス複数コースRAGチュータリング
