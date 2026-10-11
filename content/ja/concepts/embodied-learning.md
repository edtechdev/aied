---
title: 身体性に基づく学習
created: "2026-10-10T22:52:40-04:00"
updated: "2026-10-10T22:52:40-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
translation_of: concepts/embodied-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

> **身体性に基づく学習**——学習が身体的な経験、物理的な相互作用、学習者の感覚運動的な文脈に根ざしているという[[pedagogy|教授法的]]な原理です。身体性に基づくアプローチは、認知は純粋に抽象的なものではなく、身体と環境との相互作用によって形づくられると考えます。[[ai-education|教育における AI]]では、身体性は[[educational-robotics|教育ロボット]]と[[educational-robotics|社会的ロボット]]を通じて実現されます。その物理的な存在が、抽象的な概念（プログラムの論理や社会技能など）を、観察可能で操作可能な振る舞いに根ざかせるのです。

## 検討すべき問い

- 私たちは学習を、身体が脳を運び回るだけの「頭の中」で起こるものと考えがちです。学習が実際には身体的な経験と環境との相互作用に根ざしているとしたらどうでしょうか。あなたが身体を必要とするように思えた科目は何かありましたか——そして、それを純粋に抽象的に学ぶことはできたでしょうか。
- 身体性に基づくアプローチは、物理的で操作可能なエージェントが学習者を助けて抽象的な観念と具体的な帰結とを結びつけると主張します——例えば、プログラムがロボットを動かすのを見ることです。いつ、何か物理的なことをすることが、抽象的な概念を最後に「ぴたりと腑に落ちる」ものにしたことに気づいたことがありますか。
- ある[[research-methods-aied|研究者]]は、ジェスチャーを理解の証拠として扱います——学生の手の動きを発話と並べて追跡することで概念的な把握を評価します。学生の手が、その言葉よりも先に概念を「知って」いるとしたら、学習の評価の仕方についてそれは何を含意するでしょうか。
- 新たに台頭する批判は、抽象的な記号の上で働く「身体を持たない」AI に異議を唱え、学習者の思考を外部化するのではなく支えるために、AI は身体性を持つ知性を中心に設計されるべきだと論じます。一度も身体を持ったことがない AI が、身体性に基づく学習を完全に支えることができるとあなたは思うでしょうか。

## はじめに

身体性に基づく学習は、[[active-learning|アクティブラーニング]]、[[experiential-learning|経験学習]]、状況づけられた[[constructivist|構成主義]]の理論と密接に関連しています。核心となる主張は、物理的で操作可能なエージェントが学習者を助けて抽象的な観念と具体的な帰結とを結びつけるということです——ロボットを動かすプログラムや、物理的なロボットとのロールプレイ——純粋に画面ベースの相互作用ではできない仕方で。ロボット工学は、教育における AI の最も明確な身体化であり、学習者に見、触れ、観察するものを与えます。

### 身体性に基づく学習がナレッジベースの研究に現れる仕方

- **根ざしたプログラミング：** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]は、[[cs-education|ブロックプログラミング]]を身体化されたロボットの実行に根ざかせ、作成、実行、観察、改訂の緊密なループを作り出すことで、学習者が自分のコードが振る舞いになるのを見られるようにします。
- **社会的ロボットとの相互作用：** [[storytelling-in-education|ストーリーテリング]]に使われる[[educational-robotics|社会的ロボット]]（[[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]、[[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]）、ロールプレイ（[[remind-robot-mediated-roleplay-antibullying-2026|REMind]]）、手話（[[pepper-robot-sign-language-lis-2025|Pepper]]）は、関係的で[[social-emotional-learning|情動的]]な学習を支える身体化された社会的相互作用を提供します。
- **身体化の特徴が成果を動かしているわけではない。** 11 の RALL 研究のメタ分析（N = 595、g = 0.83、I² = 84.4%）は、ロボットの形態、モダリティ、自律性、社会的役割が L2 の学習を調整しないことを見出しました。集団ベースの形式が 1 対 1 を上回ったため、効果を担ったのはロボットの身体性ではなくその位置づけでした（[[robot-assisted-language-learning-meta-analysis-2026|Wang et al. (2026)]]）。
- **身体化と創造的なライティング：** [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|創造的なライティングにおけるロボットと LLM の統合の研究]]は、身体化が学習者の相互作用と成果にどう影響するかを検討します。
- **人間とロボットの相互作用：** [[educational-robotics|HRI]]の研究（[[task-context-trust-educational-hri-2026|信頼]]、[[human-autonomy-agency-hri-review-2025|エージェンシー]]）は、物理的な身体化が信頼、[[student-engagement|関与]]、[[agency|自律性]]をどう形づくるかを検討します。
- **理解の証拠としてのジェスチャー：** [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et al.]]は、コンピュータビジョンによるジェスチャー追跡を発話の[[llm|LLM]]分析と統合し、工学部学生の統計学の概念的な理解が発話とジェスチャーの両方を通じて表現されることを示します。確信度の高い説明的ジェスチャーは特定の概念（特に平均）の周りに集まり、ジェスチャーと発話の緊密な結合は整合した概念的な語りを、その分岐は発展中の観念を示します——これは身体化された行動を、学習のメカニズムとしてだけでなく、[[assessment-validity|評価]]における[[multimodal|マルチモーダル]]なラーニングアナリティクスを通じた証拠として位置づけます。

### 身体性を持つ知性と、身体を持たない AI への批判

ナレッジベースの身体化研究の第二の、より理論的な流れは、AI によって媒介される学習——[[sociocultural-learning|社会文化的学習]]——における*身体*の役割に関するものです。物理的なロボットを通じてではなく、[[ai-technologies|AI システム]]自身が（ありうるとして）身体化されているかどうかという問いを通じてです。この研究は、抽象的な情報処理の上に築かれた記号的で身体を持たない AI モデルの支配に異議を唱えます。

- **設計原理としての身体化された AI。** **E3-HOT 枠組み**は、学習者の認知的エージェンシーと[[critical-thinking|高次の思考]]を支えるために（[[cognitive-offloading|認知的外部化]]を促すのではなく）、AI は*身体性を持つ知性*——状況への埋め込み、身体化された参与、認知的創造——を中心に設計されるべきだと論じ、それは仮想と現実の統合された学習環境の中でです。（[[zhu-e3-hot-embodied-intelligence-sustainable-learning]]）
- **身体を持たない[[generative-ai|生成 AI]]の限界。** ポスト認知主義の研究は、現在の生成 AI システムは固有受容、マルチモーダルなエージェンシー、身体化された実践を欠いており、状況性、創発、感覚運動的カップリングに根ざした「身体化された AI」を提唱し、人間–[[student-ai-interaction|AI の相互作用]]のための知覚的–[[affective-computing|情動的]]な振付を提案します。（[[videla-embodied-ai-education-choreography]]）
- **身体化、状況づけ、社会的構成。** [[science-education|科学の学習]]では、AI の道具は「媒介する人工物」として機能し、デジタルの実践の共同体と境界横断を可能にし、身体化された真正の探究を現実世界の学際的な文脈につなぎます。（[[li-ai-science-situated-learning-teachers-2025]]）これは身体化を[[situated-learning|状況づけられた学習]]と[[distributed-cognition|分散認知]]に結びつけます。

身体性に基づく学習は、[[educational-robotics|教育ロボット]]、[[educational-robotics|教育ロボット]]、[[educational-robotics|教育ロボット]]、[[active-learning|アクティブラーニング]]、[[experiential-learning|経験学習]]、[[situated-learning|状況づけられた学習]]、[[distributed-cognition|分散認知]]、[[computational-thinking|計算的思考]]、[[social-emotional-learning|社会情動的学習]]につながります。

## 関連概念

- [[educational-robotics|教育ロボット]]
- [[active-learning|アクティブラーニング]]
- [[experiential-learning|経験学習]]
- [[situated-learning|状況づけられた学習]]
- [[distributed-cognition|分散認知]]
- [[computational-thinking|計算的思考]]
- [[social-emotional-learning|社会情動的学習]]
- [[learning-theories|学習理論]]
- [[multimodal|マルチモーダル]]
- [[assessment-validity|評価の妥当性]]
- [[virtual-and-augmented-reality|仮想現実と拡張現実——身体化を直接に活用しようとするモダリティ]]

## 関連記事

- [[multimodal-embodied-cognition-oral-explanations-2026|口頭説明における身体化認知のマルチモーダル枠組み]]
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning|身体性を持つ知性を通じた持続可能な学習の育成（E3-HOT）]]
- [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]
- [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]
- [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]
- [[pepper-robot-sign-language-lis-2025|Pepper と手話]]
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|創造的なライティングにおけるロボットと LLM の統合]]
- [[robot-assisted-language-learning-meta-analysis-2026|AI で強化された身体化ロボット支援言語学習のメタ分析]]
- [[vargas-situated-learning-ai-review-2024|AI の状況づけられた学習レビュー]]
- [[li-ai-science-situated-learning-teachers-2025|科学教育における AI と状況づけられた学習]]
- [[vargas-ai-catalyst-situated-learning-2026|AI を触媒とした状況づけられた学習]]
- [[videla-embodied-ai-education-choreography|教育における身体化された AI の振付]]
