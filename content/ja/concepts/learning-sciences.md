---
title: 学習科学
created: "2026-10-10T22:38:12-04:00"
updated: "2026-10-30T03:22:22-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-10-26T07:05:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **学習科学**——人々がどう学ぶか、そして学習が生じる環境をどう設計するかを研究する学際的な研究分野であり、[[cognitive-psychology|認知心理学]]、[[learning-theories|学習理論]]、計算機科学、言語学に依拠し、その設計を理論だけでなく実証的な証拠で判定します。このナレッジベースにおいて、学習科学は[[ai-education|教育におけるAI]]をめぐる研究分野であり、学校の教科の1つではありません。AIシステムが具体化する機構(知識の構成要素、[[mastery-learning|熟達の閾値]]、[[transfer-of-learning|転移]])、それらが埋め込まれる設計の対象([[learning-design|計画されたコースの順序]]、[[intelligent-tutoring|チューター]]、[[feedback]]の体制)、そしてそれらが判定される基準([[learning-gains]]、[[assessment-validity]]、[[equity-in-ai-education|公平性]])を供給します。その組織的な問いは、道具がうまく機能するかどうかではなく、学習者が変わったかどうかです。

## 考えるための問い

- 学習者がすべての練習項目に合格し、熟達の閾値が問題集合を終了させた——それから、行動を控えるべき場面でその規則を誤って適用しました。それは誰の誤りでしょうか。学習者のものか、モデルのものか、それとも停止規則のものか。
- 系列マイニングは、教室を観察することなく554のコースをパターンとして記述できます。設計された意図ではなく実施された活動を研究することで、この分野は何を得て、何を失うでしょうか。
- LLMのフィードバックにおける人口統計的な感応性は、学習者が述べた教育段階を追跡するときには適応のように見え、感情を移すときには偏見のように見えます。その2つを切り分けられない分野が、開放的なモデルを評価に使い続けるべきでしょうか。
- 学習科学が因果的な設計を好むこと——無作為割り当て、反事実的な監査、学習者の実行可能なモデル——は、教育におけるAIにおいて証拠と見なされるものを狭めるでしょうか。

## 導入

学習科学は学習と学習環境の設計を研究し、その主題と同じくらいその方法によって定義されています。すなわち実験、教室での試行、学生データの[[quantitative-research|定量的]]なモデル化、設計と文脈の[[qualitative-research|定性的]]な分析、そして介入を構築して使用の中で改訂するデザインに基づく研究です。この広がりが、このページを、枠組み・実践・道具を供給する隣接ページから切り離しています。以下の節はそれぞれの境界と、その境界の向こう側でこの分野が確立したものを示します。

このページは、そうした方法が生み出した実質的な知識——学習者が生成モデルで何をするか、どの配列が結果を変えるか、そしてこの分野自身の道具がどこで失敗するか——を扱います。[[discipline-specific-aied]]は反対の切り口を取り、教科内容が支援のすべきことを変えると主張します。学習科学は横断的な見方を取ります。そして学習科学が検証する機構は[[cognitive-psychology]]の下に集められています。

### 学習科学にAIがどう現れるか

- **まず機構、次にモデル。** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, Stamper(2026年)]]は、立直麻雀のための[[intelligent-tutoring]]システムを用いて11件の実験(N = 192)を行い、過度に一般化された産出——適用制約を伴わない行動——を体系化した学習者が、最初の「行動してはならない」項目で61.5%–100%の誤りを犯したことを示しました。これは[[knowledge-tracing|ベイジアン的知識追跡]]の下での期待誤差12%に対応するものです。95%の熟達閾値の下では、システムは学習者が行動を控える必要のある事例に遭遇する前に練習を停止したため、その欠陥は検出されませんでした。欠けている制約を名指しする[[feedback]]を伴う短い「行動してはならない」練習は、誤適用を0.0%–23.1%にまで減らしました(Cohenのh 1.70–2.44)。また13件のK-12の*Decimal Point*データセットの2次分析は、整数の偏りに同じ構造が見られることを見出しました(比較誤りの84%–88%)。
- **コンセンサスは、生成AIが学習を助ける場所と害する場所を地図にする。** 30人の学習科学者による事前登録のデルファイは65の学習過程を評定し、42について合意しました。生成AIは初期の獲得と[[critical-thinking|高次の思考]]を脅かす一方、定着を高めます（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeouら、2026年]]）。
- **自己調整的な関与を動かしたのは、エージェントの種類ではなくフィードバックの様式である。** 51人の大学院生による2×2実験では、[[socratic-method|ソクラテス式]]のフィードバックがより強い理解のモニタリングと関連し、指示的なフィードバックはより高い認知負荷を伴いました。二つの様式は固定された、釣り合わされていない順序で走ったため、その対比は因果的ではなく条件に関わるものです（[[agent-type-feedback-style-self-directed-learning-2026|Hanら（2026年）]]）。
- **最適解は内容に依存する。** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger, Carvalho(2025年)]]は、例題–問題の比率を内容–処置の交互作用として扱います。幾何学の面積に関する教材を用いた95名参加者の2×2実験で、練習のみの訓練は逐語的な事実に対してより大きな[[learning-gains|学習成果]]を生み、一方、例と統合された訓練は一般化可能な技能に対してより大きな成果を生みました(β = 0.41、p = .038、d = 0.38)。シミュレートされた学習者(Apprentice Learner)は、ACT-R風の[[cognitive-psychology|記憶と忘却の機構]]を与えられた場合にのみ、交差を再現しました。より多く練習することが一様によりよいわけではありません。記憶指向の内容は検索を、帰納指向の技能は統合された例を要します。
- **分析可能な対象としての設計。** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec, Horvat(2026年)]]は、[[learning-analytics]]を[[learning-design]]自身に向け、自由なコース設計ツールで計画された554のコースにわたる29,064件の活動を符号化しました。習得が最も一般的な学習の型であり最も一般的な入口点でした。最も強いマルコフ遷移はAssessment → Discussion(0.332)で、最も確信度の高い規則はAcquisition → Assessment → Practice → Practice(0.743、リフト1.45)でした。学習の型は意図されたアウトカムの水準を追い、Bloomの水準1の活動の約50%から水準6では約20%へと習得は減少しました。著者らは、これらが実施前の設計であることを強調しています。反転授業、[[inquiry-based-learning|探究に基づく学習]]、[[project-based-learning|プロジェクトに基づく学習]]の順序との類似は、意図の証拠ではありません。
- **評価するモデルを監査する。** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto, Hovy(2026年)]]は、6つの[[llm|LLM]]を[[automated-essay-scoring|小論文の採点]]、[[formative-assessment|形成的なフィードバック]]、問いへの回答にわたって監査し、課題の入力を固定したまま人口統計的な文脈のみを変化させました(192,480回の呼び出し)。採点は明示的なペルソナの下では安定していましたが、Llama-70Bは暗黙的な会話履歴の下で自分の得点を1.57ポイント押し上げ(p < 0.001)、高等教育への言及はより読みやすくより好意的な応答を引き出しました——およそ4標準偏差の感情の乖離です。可読性への効果は縮小し、長さへの効果は増大し、一部の係数は条件間で符号を変えました。著者らはこれを監査の道具として提供しており、導入の判定としてではなく、人口統計的な信号と主題的な信号の絡み合いを[[assessment-validity|妥当性]]と[[equity-in-ai-education|公平性]]への脅威として読んでいます。
- **能力を測定すること、そしてその限界。** [[competent-generative-ai-use-measures-review-2026|Verí(2026年)]]は、有能な[[generative-ai]]利用のための道具を4つの領域——知識と利用、認識論的な監視、依存の較正、道具を使うエージェントの制御——に組織し、それらを1つの習熟度の連続体に押し込むことを拒みます。自己評価と実証された[[ai-literacy|AIリテラシー]]の間の3件の同一標本での相関はr = .055に統合され(95% CI [-.047, .156]、報告されたN = 2,765)、著者はこれを、[[self-report-measures|自己評価]]を成績得点と交換可能に扱うことを否定するには十分だと読みつつ、閾値を定めるには十分でないとしています。検証済みの道具で、道具を使うエージェントが生み出す決定の全体を扱うものはありませんでした。提案された層状のテストバッテリーは設計仮説です。
- **学習者自身のオフローディングに関する自己申告。** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam(2026年)]]は[[cognitive-offloading]]の文献をPAUSE——4つの領域からなる、ブラウザのみの自己点検——に翻訳しました。すべてのLLM時代の項目は出典に紐づけられ、合成得点も保存も本番稼働のモデルもありません。その帯は記述的であり基準化されたものではなく、読み取りは評価・入学者選考・雇用の決定を正当化してはなりません。その明示された限界が重要です。オフローディングの自己申告は、それが関わる学部に対して脆弱であり、[[scaffolding|足場]]として意図的にAIを使う回答者はいくつかの項目でオフローディングと読まれ、AIに結びついたオフローディングが一般的な技術への依存と区別されるかどうかは未解決のままです。
- **見取り図にかけられた統合の隔たり：** [[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik and Bashir (2026)]]は、32件の研究(PRISMA 2020、テーマ分析)を四つのテーマに総合しました。分野内部の認識論的な分断、理論と技術の矛盾(計算的なシステムは予測と測定可能な行動の上で動き、一方で教育理論は文脈と社会的な相互作用を重視する)、分析学を通じた学習のデータ化、そして新興のパラダイムとしてのハイブリッドな知能です。彼らのHybrid Intelligence Frameworkは、検証されたモデルではなく概念的な総合です。著者らはそれが実証的な検証を待っていると述べています。しかし、その四つのテーマからなる地図は、この分野が繰り返し直面する理論から計算への翻訳の問題について、有用な監査のレンズとなります。
- **人間の専門性がどこにあるか。** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wangら(2024年)]]は、最も明確な分業を報告しています。約900名の初心者K-12チューターとおよそ1,800名の学生による2か月間の[[rct|無作為化比較試験]]で、経験豊富なチューターの推論から引き出されたリアルタイムの提案は、主題の熟達を4ポイント上げ(62%から66%へ、p < 0.01)、評価の低いチューターでは9ポイント上げ、コストはチューター1人あたり年間約\$20で、チューリングを誘導的な質問へと向け直しました。向上は近接的なものでした——年度末のテストは動きませんでした。[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichertら(2026年)]]は、6名の中等教育の教師がチャットボットを試作する中で、設計によって同じ立場に到達することを見出しました。彼らは限界のある専門家を特定し、権威の境界(学習と安全に対する責任は委譲できない)と専門性の境界(モデルは個々の学生についての彼らの知識を欠く)を守り、内容の提示・練習・修正的な[[feedback]]を委譲する一方、目標設定と[[summative-assessment|総括的評価]]は留保しました。
- **分野の水準における能力。** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury, Liu(2026年)]]は、生成AI向けに適応した[[tpack|TPACK]]の道具を用いて127名の教員を調査しました。強い内容の知識と教授法的な内容の知識(M = 4.70–5.15)が、著しく低い技術統合の知識と並び、総合的なTPACKは2.55で最も低く、内容の知識はどの技術統合の領域とも相関せず、3つの統合領域は非常に高く相関して(r = .81–.91)、1つの因子として機能している可能性があります。[[perrotta-zero-shot-governance-2026|Perrotta(2026年)]]は、コードベースが商用モデル群の上のシステムプロンプトと検索パイプラインであった、中止された英国の公務員向け試作を通じて統治の層を読みます。基盤モデルの汎用性は、[[educational-policy-ai|政策]]の道具への迅速な転用を可能にするのと同時に、異常な出力を恒久的に緩和のみ可能なリスクにするため、ループの内側に座るのではなく上から見下ろす監視だとするのです。
- **学生が生成モデルをどう使うかは、使うかどうかよりも重要である。** 学部生の50件のやり取りを符号化したところ、64%が受動的な復習か取引的な問いで、戦略的な対話は36%のみでした。振り返りで構造化された課題は、その均衡を対話へと動かしました（[[three-pathways-student-ai-interaction-2026|Zahra、2026年]]）。
- **個人内の依存は、知覚された[[agency|主体性]]の低下に先行する。** AI支援の[[collaborative-learning|協働]]的な[[writing-education|ライティング]]コースで、85の固定グループに属する342人の学部生から3波のデータを取ったところ、通常より高い生成AIへの依存が、その後のより低い知覚された人間の主体性を予測しました。一方、逆の経路はより弱く、統計的には支持されませんでした（[[genai-reliance-human-agency-collaborative-learning-2026|Wu & Lu（2026年）]]）。
- **生成AI利用の分布は、制度的な選択である。** [[sun-student-genai-entanglement-literacy-demands-2026|Sun、Dohn、Rehm（2026年）]]は102件の高等教育研究を、認識論的な仕事が学生とシステムの間でどう分配されたかによって分類し、AssistantとEnablerの絡み合いがそれぞれ42.16%で支配的であることを見出し、その偏りを技術的な能力ではなく制度的な正当性として読みました。
- **過程の証拠は、チャネルに条件づけられる。** 79人の学部生による1つの生成AI支援の教授設計課題を、相互作用ログと同時思考発話の両方で符号化したところ、[[metacognitive-processes-genai-interaction-logs-2026|LiとLiu（2026年）]]は、より深いモニタリングの証拠は思考発話の記録でより多く、より深い[[regulation|調整]]の証拠はログでより多いことを見出しました。どちらか一方の痕跡だけが[[metacognition|メタ認知]]の主張の基準になるわけではありません。

## 学習科学が隣接分野とどう関わるか

[[design-based-research|デザインに基づく研究]]は、この分野が借りたのではなく発展させた方法です。介入は機能している教室の中で構築され改訂され、その理論的な根拠もまたそれと並んで改訂されるため、1つの研究が人工物と設計原理の両方を生み出します。これが、文脈を固定して原因を単離する実験室の実験とこの方法を分かつものであり、この分野の知見が効果量ではなく設計の知識として届く理由です。[[research-methods-aied]]は反対の切り口を取ります。そのページは、実験・調査・定性的な仕事・ベンチマーク・レビュー・合意形成の方法——を道具の間の選択として、それぞれが支えうる主張の妥当性で測って全体を俯瞰します。このページは同じコーパスを実質的な側面から読み、その選択肢が学習について何を確立したかを問い、方法を、その設計の主張が学習者との接触を生き延びるかどうかで判定します。

[[learning-theories]]は、行動主義、認知主義、構成主義、社会文化的な説明、動機づけと自己調整——をAIを読むためのレンズとして、候補となる枠組みを集めます。学習科学はその語彙を共有しますがその立場は共有しません。ここでは理論は、設計が具体化するか反証するかのどちらかをしなければならない機構についての主張であり、この分野の地位は枠組みの首尾一貫性ではなく実証的・設計の仕事の上に成り立っています。枠組みが何を主張するかを知るには理論のページを、枠組みが積み上げてきた証拠を知るにはこのページを開いてください。

この分野はまた、借りてきた枠組みを検証するだけでなく理論も構築します。[[theory-development-aied]]は、学習者・教師・AIシステムがどう相互作用するかを説明する概念的な仕事を扱い、この分野自身の構成概念が測定される前に論じられる場所です。その設計が通常生み出すことを求められるのは[[transfer-of-learning|転移]]——チューター、教科、課題を超えて生き延びる知識と技能——です。これが、道具の中で測定された成果が、道具なしで測定された成果よりも弱い主張と見なされる理由です。そして設計された環境は複合的な介入であるため、結果を1つの構成要素に帰属させることは、この分野の慢性的な測定問題です。[[educational-measurement]]は、その帰属をまったく論じうるものにする心理測定の装置を供給し、これが測定の問いが事後ではなく早い段階でここに届く理由です。

[[cognitive-psychology]]は、この分野が最も重く依拠する機構レベルの規律であり、限界のある作業記憶、符号化と検索、分解可能な知識の構成要素、そして学習者モデリングの診断的な語彙を供給します。学習科学はそれらの機構を、それらに還元することなく用います。その分析単位は、実験室の記憶の説明にはない社会的・動機づけ的・文脈的な変数を伴う設計された環境であり、その検証は孤立した認知的効果ではなく介入全体に対して行われます。

[[pedagogy]]と[[learning-design]]は実践を扱います——どの教授戦略を使うか、そして目標・活動・評価をどうコースに順序づけるか。両方とも、学習科学が外側から記述と評価の対象として研究するものです。この分野は教師に次にどの戦術に手を伸ばすべきかを告げるのではなく、その戦術が何をすることを示されてきたかを報告します。学習デザインはより近い親族です。両方とも実装して検証できるものを生み出すからです。しかしデザイナーの出力は教えられるコースであり、この分野の出力は設計一般についての知識です。

知見が重要なのは、それが教授に届いたときに初めてです。その行程は3つのページを通ります。[[educational-development]]はそれを運ぶ制度的な実践です——教員の育成、標準、政策、アイデンティティの仕事が、検証された設計が教室に届くかどうかを決めます。これが、この分野の証拠が制度的に実装されたものを絶えず先導する理由です。[[teacher-education]]は、教師が教室に入る前にその知識が着地しなければならない場所であり、[[teacher-role]]は、それがその後で着地する場所です——いつ介入するか、どの道具を使うか、いつ学習者を一人にするかについての瞬間ごとの判断です。この3つのどれも学習科学の知見を生み出しません。しかし3つすべてが、それらの知見が実践を変えるかどうかを決めます。

## よくある誤解

- **「高い熟達閾値は、学習者が識別できることを保証する。」** [[deceptive-overgeneralization-adaptive-learning-2026|An、McLaren、Stamper（2026）]]は[[intelligent-tutoring]]システムで**11件の実験（N = 192）**を行い、**95%の熟達閾値の下では、システムが学習者を、行動を控える必要のある事例に出会う前に練習から外した**ため、欠陥が検出されなかったことを見出しました。行動の熟達は、いつ適用しないかを知ることを含んでおらず、閾値は誤った構成概念を認定していたのです。
- **「例は多いほど安全である。」** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit、Koedinger、Carvalho（2025）]]は例題と問題の比率を**内容と処置の交互作用**として扱い、2×2実験において最適解は**内容に依存**しました。普遍的に正しい比率は存在しないため、固定された教授の型は交互作用に対する賭けです。
- **「誤概念を直すのは、学生に正しい答えを告げることである。」** 欠けている制約を名指す[[feedback]]を伴う短い「行動してはならない」練習は、誤適用を**0.0%〜23.1%（Cohenのh 1.70〜2.44）**に減らし、**13件のK-12の*Decimal Point*データセット**の2次分析は同じ構造的なパターンを見出しました。効果的だった介入は、主張による訂正ではなく、的を絞ったフィードバックを伴う識別の練習でした。それは[[refutation-text|反論]]の仕事が一般的に確立していることです。
- **「高いBloom水準はより能動的な学習を意味する。」** 学習の型は意図されたアウトカムの水準を追い、**獲得はBloomの水準1で活動の約50%から、水準6では約20%へと減少**しました。認知的要請と活動の型はともに動きますが同じ軸ではなく、課題をBloom水準でタグ付けしても、学習者がそれで何をするかは分かりません。

## このことが実践にとって意味すること

**教員のために**

- 否定的な事例を明示的に教えてください。95%の閾値の失敗がその理由です。正しい動きが行動を控えることである条件を組み込んでください。そうしなければ、学習者はそれをどこにでも適用します。
- 例題と問題の比率をコース全体で固定しないでください。内容と処置の交互作用は、手続きに正しい比率が概念に正しい比率ではないことを意味します。
- 規則を言い直すのではなく、欠けている制約を名指すフィードバックを伴う識別の練習を用いてください。それがここで測定された効果量を持つ介入です。
- 熟達の基準が実際に何を認定するかを、それを信頼する前に確認してください。

**開発者のために**

- 正しさだけで練習を止めないでください。控える条件をそれ自体のスキルとしてモデル化してください。そうしなければ、システムは過度の一般化を認定します。
- 比率を定数ではなくパラメータにしてください。証拠は最適解が内容に依存すると述べているからです。
- 基準が測る構成概念を、検証が測る構成概念とは別に報告してください。

## 関連概念

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## 関連記事

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomized trial of human–AI live tutoring at scale (Wang et al. 2024)
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — 生成AIが高める学習過程と脅かす学習過程についての30人の専門家による事前登録デルファイ
- [[three-pathways-student-ai-interaction-2026]] — 学生とAIの相互作用の類型：64%が受動的または取引的、36%が戦略的な対話
- [[agent-type-feedback-style-self-directed-learning-2026]] — 自己調整的な関与を動かしたのは、エージェントの種類ではなくフィードバックの様式
- [[metacognitive-processes-genai-interaction-logs-2026]] — 過程の証拠はチャネルに条件づけられる
- [[sun-student-genai-entanglement-literacy-demands-2026]] — 生成AI利用の分布は制度的な選択である
- [[genai-reliance-human-agency-collaborative-learning-2026]] — 個人内の依存は、知覚された主体性の低下に先行する
