---
connected_resources: [teacherserver]
title: 自動問題生成
created: "2026-10-10T22:09:46-04:00"
updated: "2026-10-10T22:09:46-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **自動問題生成（AQG）** — 教材や学習目標から、[[llm|大規模言語モデル（LLM）]]などのAI、特にNLPを用いて、[[assessment|教育評価]]問題（多肢選択、短答、穴埋め、コーディング、実技問題）を自動的に生成することです。AQGは[[formative-assessment|形成的]]な小テスト、アダプティブな練習問題、練習用項目を大量に生成することで、規模をもった評価を可能にします。ただし、項目の種類によって品質は大きく異なり、幻覚（ハルシネーション）に基づく問題や難易度の調整が不十分な問題を避けるために検証が必要です。AQGは[[automated-assessment]]の中核的な構成要素であり、[[adaptive-learning]]と[[personalized-learning]]の重要な実現手段です。

## 考えるための問い

- 自動問題生成は教材から大量の評価項目を生成しますが、このページでは項目の種類によって品質が大きく異なることを警告しています。読み進める前に、AIが最も確実に生成できると思う項目の種類は——多肢選択、短答、それともコード問題——のどれでしょうか。その理由も考えてみてください。
- 中心的な課題は品質管理です。LLMは事実として誤った問題を生成しうます。あるパイプラインでは、生成→検証→改善のループを追加することで、ハルシネーションを62%削減しました。AIに自分の生成した問題を検証させることが、単に自分の出力を追認するだけではなく、なぜ意味のある形で問題の質を高めうると考えられるでしょうか。
- [[research-methods-aied|研究]]によれば、生成された問題は、高次の学習成果を意識して設計しない限り、低次の思考（想起）に偏りがちです。AIで練習問題を作るとしたら、それが本当の理解を鍛えているのか、それとも単なる暗記を促しているだけなのか、どのようにして見分けるでしょうか。
- 難易度の調整は重要です。AIの難易度推定は生徒の成績と強く相関しますが、このページでは高リスクな用途での誤用を戒めています。AIが「適切な難易度」と判断した問題であっても、特定の学習者にとって問うべきでない問題となるのは、どのような場合でしょうか。
- [[accessibility]]を考慮した生成では、聴覚障がい者（Deaf and Hard of Hearing）の学習者に向けて調整された問題が、対象となるコミュニティとの協働の中で洗練されていきます。この例は、なぜ問題生成を純粋に技術的な、あるいは内容だけの問題として扱うことができないのか、どのようなことを示唆しているでしょうか。

## はじめに

自動問題生成が重要であるのは、評価項目を手作業で作成するコストが高く、AIがそれを迅速かつ大規模に生み出せるからです。しかし、このナレッジベースの研究によれば、生成された項目は正確性、関連性、難易度について検証される必要があり、項目の種類（多肢選択、短答、コード問題）によって、どれだけ確実に生成できるかが異なります。したがって、AQGは[[generative-ai|生成的AI]]、[[educational-nlp|教育NLP]]、[[educational-measurement|教育測定]]の交差点に位置します。

## 問題生成のアプローチ

このナレッジベースの研究は、いくつかのアプローチを示しています。

- **生成してから検証するパイプライン：** [[generate-then-validate-question-gen|Generate-Then-Validate]]は、生成→検証→改善のループを導入したもので、直接生成と比較してLLMのハルシネーションを62%削減し、[[stem-education|STEM]]のデータセットで89%の精度を達成し、関連性を23%改善しました。検証ステップは無効または低品質な項目を除外し、失敗した項目は修正プロンプトによる再生成を引き起こします。
- **知識追跡に基づく生成：** [[kt4eqg-personalized-question-generation|KT4EQG]]は、[[knowledge-tracing|知識追跡]]に導かれて個人に合わせた練習問題を生成し、一般的な問題ではなく、各学習者の知識状態に合わせて項目を調整します。
- **診断的ラベルとしての誤概念に基づく妨害選択肢：** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（He et al., 2026）]]は、各妨害選択肢を単一の抽出された誤概念に対応づけ、正解の選択肢をちょうど一つだけに定めることで、診断対象が組み込まれた形で項目を生成し、その後[[llm]]を呼び出すことなく決定論的に採点できるようにしています。著者らの実際の運用環境では、1ラウンドあたり約7.6秒、およそ\\$0.005で済み、LLMによる採点を行う短答ラウンドの約32秒、約\\$0.015と対照的でした。ただし、この対応づけは背後にある誤概念ラベルの質に依存しており、抽出された[[misconceptions]]が対象の誤概念と一致したのはF1 ≈ 0.56であり、項目の選択が実際に弱いスキルに当たっていたのは0.72の割合でした。
- **認知的深さを意識した生成：** [[llm-educational-question-cognitive-depth|LLM生成問題の認知的深さの評価]]は、生成された項目が[[critical-thinking|高次の思考]]（創造、評価）を引き出しているのか、それとも単なる暗記にとどまっているのかを検討し、ブルームの分類法や[[educational-measurement|教育測定]]に結びつけています。
- **繰り返し評価のための誤り埋め込み型ケース問題：** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al.（2026）]]は、新しい階層的診断的推論（HDR）問題——生徒が見つけて説明しなければならない、意図的に誤りが埋め込まれた短いケース——を生成し、GPT-4oが作成した項目が人間作成の項目と内部一貫性（両者でCronbachのα = 0.78）と難易度で同等であったことを見いだし、100人の参加者を対象にフィッシャーの正確検定を行い、得点分布に有意な差は認められませんでした。この形式は[[critical-thinking|高次の思考]]の要求と制約された回答を組み合わせることで、回答が収束し採点が再現可能になります。生成の動機は項目の再利用です。一つのケースを再利用すると記憶と回答の再利用を招きますが、構造的に等価でありながら文脈的に異なる生成ケースを用いることで、再測定における項目バイアスを抑制します。
- **[[pedagogy|教授法的]]なパイプライン：** [[slidesqaqa-pedagogical-question-generation|スライドデッキからのQ&A生成]]は、教材から教授法的に健全な問題を生成するための多段階パイプラインを用います。
- **アクセシビリティを考慮した生成：** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]は、[[inclusive-learning|聴覚障がい者（Deaf and Hard of Hearing）の学習者]]向けのLLMを用いた問題生成システムを設計し、映像の中で視覚的・感情的に困難な瞬間を狙った「視覚的」「感情的」質問方略を導入し、対象となるコミュニティとの反復的な協働によって問題を洗練させ、言語的なアクセシビリティを確保しています。
- **RAGを用いた人間参加型システム：** [[code-gen|CODE-GEN]]は、[[rag|検索拡張生成]]と[[human-in-the-loop-ai|人間参加型（human-in-the-loop）]]のレビューを組み合わせて、[[automated-assessment|多肢選択式評価]]を生成します。
- **[[benchmark|ベンチマーク]]と評価：** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]]は、問題生成システムや推論システムを評価するための、科学・数学のなぞなぞからなるベンチマークを提供します。

## 検証と品質

AQGにおける中心的な課題は**品質管理**です。

- **幹（問題文）ではなく解くプロセスを評価する：** [[proiqa-math-item-quality-assessment-2026|ProIQA]]は、項目の品質審査は専門家の行いに従うべきである——つまり解法をシミュレーションすること——だと主張し、項目ごとにLLM生成の推論木を構築して90.38〜97.80%の数学的正確性で検証し、その依存構造を幹のみの表現と併せてグラフ[[machine-learning|ニューラルネットワーク]]で符号化しています。概念評価で7.5%、難易度推定で6.3%、能力評価で19.5%の平均的な改善を第2位の手法に対して報告しており、誤差分析では注目すべき失敗モードを挙げています。論理的には正しいが構造的に浅い推論木は、難しい項目を易しく見せてしまう、というものです。
- **ハルシネーションのリスク：** LLMは事実として誤った問題を生成しえます。[[generate-then-validate-question-gen|Generate-Then-Validate]]は、専用の検証フェーズがこれを大幅に減らすことを示しており、[[hallucination-risk|ハルシネーションのリスク]]は全体を通じて認識されている懸念事項です。
- **難易度の調整：** 生成された問題は適切な難易度に調整される必要があります。[[llm-difficulty-calibration-programming-exams-2026|難易度調整の研究]]は、AIの難易度推定が生徒の成績と強く相関すること（例：rho ≈ −0.87）を示し、より良い項目選択を可能にしますが、高リスクな[[ai-misuse-learning-harm|誤用]]には警戒が必要です。[[razavi-powers-item-difficulty-llm-2026|Razavi and Powers（2026）]]はこれをK-5の数学と読解の項目（N = 5170）に拡張し、ラッシュIRTモデルの下で調整を行いました。GPT-4oのゼロショット難易度評価は真の難易度と中程度から強度の相関を示しました（数学で r = 0.83、読解で r = 0.81）が、学年によって異なりました。一方、特徴量ベースのアプローチ——LLMが抽出した認知的・言語的特徴量を木ベースモデルに入力するもの——では、最大で r = 0.87 の相関に達しました。この研究の構造化された特徴量抽出（例：統語的な複雑さ、[[cognitive-offloading|認知的負荷]]、妨害選択肢の巧妙さ）と、実践的な7ステップのワークフローは、生成項目を調整する際の手本となりますが、低学年での範囲制限に関する知見と一般化に関する注意事項は、高リスクな使用に対する警告となっています。
- **生成された難易度ラベルは調整の誤りではなく、構成概念妥当性の失敗となりうる。** 378の生成項目にわたり、モデルの「易・中・難」ラベルは、同時に生成されたブルーム水準（ρ=0.90）や、問題文の平均長が15.9語から22.1語、30.2語へと増加するといった表面的な形式を追っていた一方、54人の生徒から得られた7,888件の回答に基づく経験的な項目難易度との相関はρ=0.06にとどまり、同時生成されたタグを信用するのではなく、生成されたメタデータを回答データに対して調整することの必要性を示しています（[[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang（2026）]]）。
- **大規模な心理測定学的な実地検証：** [[assessing-quality-ai-generated-exams-field-2025|AI生成試験の評価]]は、反復的改善型のAQGパイプライン（生成→判定→改訂、Self-Refine方式）を91の実際の大学授業（約1,686人の生徒）で検証しました。ベイズ階層的2PLの[[item-response-theory|IRT]]分析によれば、AI生成の問題は専門家が作成した標準化試験項目と同等の性能を示し——やや易しいものの（β̄ = −0.45 対 0.35）、識別力はやや高く（ᾱ = 1.3 対 1.2）、テスト情報量のピークも高い（信頼性 0.79 対 0.72）——AQGが、コースに合わせた心理測定学的に健全な評価を大規模に生み出せることを示しています。
- 平均的な心理測定学的な同等性は、項目単位での不足を覆い隊しえます。医学教育に関する153の報告を対象としたスコーピングレビューでは、AIによる項目生成が人間の難易度や識別力と一致することもありましたが、ある生理学の比較試験では、ChatGPTの項目40個中9個だけがすべての理想的な基準を満たし、教員の項目では40個中19個が満たしていました（[[genai-medical-education-transformation-review-2026|Zhao et al.（2026）]]）。
- **本番試験における見分けがつきにくさと、レビューが実際に除去するもの：** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al.（2026）]]は、AI生成の多肢選択問題30問と国家ライセンス試験の多肢選択問題30問を、119人の5年生[[medical-education|医学部生]]が受ける評価対象のタブレット試験に組み込み、AI項目はコース自身の教材からChatGPT-4oとGemini 1.5 Proによって起草され、専門家パネルが82%を採用し18.2%を問題ありとして除外しました。生徒の出所の推定は2種類の項目間で差がなく、項目の難易度、妨害選択肢の分布、カリキュラムとの整合性の認識は統計的に区別できませんでした。これは品質の結果ではなく*見分けがつきにくさ*の結果であり、著者らがこのワークフローの利点を、教員の労力を作成からレビューへ移すものであって、除去するものではないと述べている理由です。一つの探索的な差は残りました。Geminiの項目はライセンス試験の項目より難しく（p = 0.028）、ChatGPTの項目はそうではありませんでした（p = 0.984）。
- **課題依存性：** 生成の信頼性は項目の種類によって異なります。[[cong-confidence-asag-2026|短答問題の採点]]と[[self-referential-l2-writing-llm-assessment|分析的作文評価]]は、自由記述や作文の項目は、構造化された項目よりも生成も採点も確実に行うのが難しいことを示しています。
- **認知的品質：** [[llm-educational-question-cognitive-depth|認知的深さの評価]]は、生成された項目が高次の成果を意識して設計しない限り、低次の思考に偏りうることを示しています。
- **認知的レベルの自動ラベル付けは、生成項目にはそのまま適用できない。** 精選された項目バンクで訓練されたブルーム分類法の分類器は、AI生成の問題では性能が崩壊しました——分布内ではマクロF1が0.88から、分布外では0.48と0.20に低下しました——これは、生成項目が平均してはるかに多くの語数を含み（18.2語 対 9.3語）、精選されたコーパスと共有するブルーム誘発動詞が中央値で10.5%にとどまるためです（より近い項目集合では35.1%）。ラベル付けされた分布外データでの再訓練が最大の単一の改善となり、その基準はおよそN > 1,000個のラベル付きサンプルでした（[[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]）。

## アダプティブ学習と個別最適化における役割

AQGは[[adaptive-learning|アダプティブ]]学習と[[personalized-learning|個別最適化（パーソナライズド）学習]]の重要な実現手段です。アダプティブなチューターが参照する大規模な項目バンクを生み出すものであり、[[knowledge-tracing|知識追跡]]や[[student-modeling|学習者モデリング]]と組み合わせることで、個々の学習者の知識状態に合わせた項目を生成できます（[[kt4eqg-personalized-question-generation|KT4EQG]]）。[[taklif-ai-interest-based-personalized-assignments|関心に基づく個別化]]は、AQGが難易度だけでなく学習者の関心に合わせて問題を適応させられることも示しています。

## 教育におけるAIへの示唆

- **生成してから検証する：** 常に生成に検証・改善の段階を組み合わせ、ハルシネーションを抑え、関連性を確保してください。
- **項目の種類を信頼性に合わせる：** AQGは最も確実性の高い構造化された項目の種類（多肢選択、穴埋め、コード問題）に用い、自由記述や作文の項目には慎重な検証を適用してください。
- **認知的深さを意識して設計する：** プロンプトとパイプラインは、単なる想起ではなく高次の思考を狙うべきで、それが本当の学びを支えます。
- **難易度を調整する：** AIの難易度推定を用いて適度に挑戦的な項目を選び、高リスクな用途の前には入念な検証を行ってください。
- **学習者モデルを通じて個別化する：** AQGを知識追跡や関心モデルと組み合わせて、アダプティブで個別化された項目を生成してください。

## 関連する概念

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## 関連する記事
- [[genai-medical-education-transformation-review-2026]] — 教員作成項目の品質と比較したAI項目生成に関する医学教育報告153件のスコーピングレビュー

- [[assessing-quality-ai-generated-exams-field-2025]] — IRTを用いたAI生成試験の品質の大規模な実地検証
- [[generate-then-validate-question-gen]] — Generate-Then-Validate問題生成
- [[kt4eqg-personalized-question-generation]] — 知識追跡を用いた個人向け問題生成
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 聴覚障がい者向けのLLM問題生成
- [[llm-educational-question-cognitive-depth]] — LLM生成問題の認知的深さ
- [[slidesqaqa-pedagogical-question-generation]] — スライドデッキからの教授法的Q&A生成
- [[code-gen]] — CODE-GEN: RAGを用いた人間参加型問題生成
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddlesベンチマーク
- [[taklif-ai-interest-based-personalized-assignments]] — 関心に基づく個人向け課題
- [[llm-difficulty-calibration-programming-exams-2026]] — LLMによる難易度調整
- [[self-referential-l2-writing-llm-assessment]] — 自己言及的な分析的作文評価
- [[cross-dataset-bloom-question-classification]] — データセット横断的なブルーム問題分類
- [[llm-chatbots-cs-multiple-choice]] — LLMチャットボットと計算機科学の多肢選択項目
- [[socratic-tests-conversational-assessment]] — ソクラテス的テスト：対話的評価
- [[llm-turing-test-italian-legal-exams-2026]] — 法律試験におけるLLMチューリングテスト
- [[razavi-powers-item-difficulty-llm-2026]] — LLMと木ベース機械学習を用いた項目難易度の推定
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: プロセスに基づく数学項目の品質評価
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: 人間とAIの共同学習ループの中で学習者を学ぶエージェント的チューター
- [[automated-constructive-assessment-hdr-llm-2026]] — 大規模言語モデルによる構成的評価の自動化：実践的能力のスケーラブルで反復的な評価に向けて
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — データサイエンス授業における学生のLLM利用とAI生成問題難易度の限界
- [[bloom-classifier-ai-assisted-questions-2026]] — 新規のAI支援教育問題に対する教授法的評価のための事前訓練モデルの評価
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — 生徒は評価対象試験においてAI生成の多肢選択問題とライセンス試験項目を見分けられず、生成項目の18.2%はレビューで除外された（Vogt et al. 2026）
