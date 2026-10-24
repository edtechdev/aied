---
title: "OpenMAIC"
created: "2026-10-10T21:52:22-04:00"
updated: "2026-10-24T08:38:48-04:00"
type: resource
summary: "MAIC のオープンソース版：トピックや資料をスライド、クイズ、インタラクティブなシミュレーション、プロジェクト型学習の活動に変えるマルチエージェント教室で、AI 教師と AI クラスメートが授業を行います。"
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**OpenMAIC** は、[[intelligent-tutoring|MAIC の研究]]で紹介された MAIC マルチエージェント教室のオープンソース版です。トピックを記述するか、自分の教材を添付するだけで、完全な授業 — スライド、クイズ、インタラクティブな HTML シミュレーション、プロジェクト型学習の活動 — が生成され、話し、ホワイトボードに描き、討論に参加する AI 教師と AI クラスメートを通じて提供されます。これは、読むだけでなく実際に運営できる教室のコードです。

## できること

ワンクリック生成により、プロンプトまたはアップロードされた資料・音声・動画から数分で授業が作成されます。マルチエージェント層は、学習者が参加したり発言を求められたりできる教室討論、ホワイトボード図解を伴うペルソナ間の円卓討論、そして教師がスライドや図で答える自由形式の Q&A を追加します。セッションはスライド資料、クイズ、インタラクティブなシミュレーション、PBL（プロジェクト型学習）に対応し、編集可能な `.pptx` またはインタラクティブな `.html` としてエクスポートできます。バージョン 1.0.0（2026 年 8 月）ではエージェントワークベンチが追加されました。チャット中心のワークスペースでコース全体を計画・改訂でき、キャンセル・再開・誘導が可能なサーバー永続化セッション、そしてスライド、クイズ、インタラクティブ、画像、動画、音声をカバーする 24 種類の組み込みスキルが含まれます。`SKILL.md` パッケージにより、エージェントがメッセージングアプリから教室を構築できます。

## 対象となる人

生成されたが編集可能な教材を求める教育者やコースチーム、マルチエージェント活動を試作する教育設計者、ホスト型製品ではなく自己ホスト可能な教室を必要とする開発者です。学校は Vercel または Docker で導入でき、プロジェクトは open.maic.chat にホスト型デモを提供しています。

## 注記

MIT ライセンスで、英語と中国語のユーザーガイドと、Discord および Feishu の活発なコミュニティがあります。モデル中立であり、少なくとも 1 つの LLM プロバイダーキーを用意する必要があり、ローカルモデル用の Lemonade、音声認識用の FunASR などの任意のローカルコンポーネントにより、スタックのより多くの部分をオフラインで実行できます。つまり「無料」はソフトウェアについて言っているのであって、推論費用については言っていません。背後にある論文は *Journal of Computer Science and Technology*（2026 年、DOI 10.1007/s11390-025-6000-0）に掲載され、リポジトリは 2026 年 9 月までに 38,000 以上のスターを獲得しました。

## 関連する概念

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]

